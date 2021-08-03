use super::util::is_valid_identifier;
use crate::compress::optimize::Optimizer;
use crate::util::deeply_contains_this_expr;
use swc_atoms::js_word;
use swc_common::SyntaxContext;
use swc_ecma_ast::*;
use swc_ecma_utils::prop_name_eq;
use swc_ecma_utils::ExprExt;

impl Optimizer<'_> {
    pub(super) fn optimize_property_of_member_expr(&mut self, e: &mut MemberExpr) {
        if !e.computed {
            return;
        }
        if !self.options.props {
            return;
        }

        match &e.obj {
            ExprOrSuper::Expr(obj) => match &**obj {
                Expr::Array(..) | Expr::Await(..) | Expr::Yield(..) | Expr::Lit(..) => return,
                _ => {}
            },
            _ => {}
        }

        match &*e.prop {
            Expr::Lit(Lit::Str(s)) => {
                if is_valid_identifier(&s.value, true) {
                    self.changed = true;
                    log::debug!(
                        "properties: Computed member => member expr with identifier as a prop"
                    );

                    e.computed = false;
                    e.prop = Box::new(Expr::Ident(Ident {
                        span: s.span.with_ctxt(SyntaxContext::empty()),
                        sym: s.value.clone(),
                        optional: false,
                    }));

                    return;
                }
            }

            _ => {}
        }
    }

    /// Converts `{ a: 1 }.a` into `1`.
    pub(super) fn handle_property_access(&mut self, e: &mut Expr) {
        if !self.options.props {
            return;
        }

        if self.ctx.is_update_arg {
            return;
        }

        let me = match e {
            Expr::Member(m) => m,
            _ => return,
        };
        if me.computed {
            return;
        }

        let key = match &*me.prop {
            Expr::Ident(prop) => prop,
            _ => return,
        };

        let obj = match &mut me.obj {
            ExprOrSuper::Expr(e) => &mut **e,
            _ => return,
        };

        let obj = match obj {
            Expr::Object(o) => o,
            _ => return,
        };

        let duplicate_prop = obj
            .props
            .iter()
            .filter(|prop| match prop {
                PropOrSpread::Spread(_) => false,
                PropOrSpread::Prop(p) => match &**p {
                    Prop::Shorthand(p) => p.sym == key.sym,
                    Prop::KeyValue(p) => prop_name_eq(&p.key, &key.sym),
                    Prop::Assign(p) => p.key.sym == key.sym,
                    Prop::Getter(p) => prop_name_eq(&p.key, &key.sym),
                    Prop::Setter(p) => prop_name_eq(&p.key, &key.sym),
                    Prop::Method(p) => prop_name_eq(&p.key, &key.sym),
                },
            })
            .count()
            != 1;
        if duplicate_prop {
            return;
        }

        if self.ctx.is_callee {
            return;
        }

        if obj.props.iter().any(|prop| match prop {
            PropOrSpread::Spread(_) => false,
            PropOrSpread::Prop(p) => match &**p {
                Prop::Shorthand(..) => false,
                Prop::KeyValue(p) => {
                    p.key.is_computed()
                        || p.value.may_have_side_effects()
                        || deeply_contains_this_expr(&p.value)
                }
                Prop::Assign(p) => {
                    p.value.may_have_side_effects() || deeply_contains_this_expr(&p.value)
                }
                Prop::Getter(p) => p.key.is_computed(),
                Prop::Setter(p) => p.key.is_computed(),
                Prop::Method(p) => p.key.is_computed(),
            },
        }) {
            return;
        }

        for prop in &obj.props {
            match prop {
                PropOrSpread::Spread(_) => {}
                PropOrSpread::Prop(p) => match &**p {
                    Prop::Shorthand(_) => {}
                    Prop::KeyValue(p) => {
                        if prop_name_eq(&p.key, &key.sym) {
                            log::debug!("properties: Inlining a key-value property `{}`", key.sym);
                            self.changed = true;
                            *e = *p.value.clone();
                            return;
                        }
                    }
                    Prop::Assign(_) => {}
                    Prop::Getter(_) => {}
                    Prop::Setter(_) => {}
                    Prop::Method(_) => {}
                },
            }
        }
    }

    pub(super) fn handle_known_computed_member_expr(&mut self, e: &mut MemberExpr) {
        if !self.options.props || !self.options.evaluate {
            return;
        }

        if !e.computed {
            return;
        }

        match &*e.prop {
            Expr::Lit(Lit::Str(s)) => {
                if s.value == js_word!("")
                    || s.value.starts_with(|c: char| c.is_digit(10))
                    || s.value.contains(|c: char| match c {
                        '0'..='9' => false,
                        'a'..='z' => false,
                        'A'..='Z' => false,
                        '$' => false,
                        _ => true,
                    })
                {
                    return;
                }

                self.changed = true;

                e.computed = false;
                e.prop = Box::new(Expr::Ident(Ident::new(
                    s.value.clone(),
                    s.span.with_ctxt(SyntaxContext::empty()),
                )));
            }
            _ => {}
        }
    }
}
