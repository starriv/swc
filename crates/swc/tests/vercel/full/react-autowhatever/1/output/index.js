"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;
var a = require("react/jsx-runtime"), b = function(a) {
    if (a && a.__esModule) return a;
    var b = {
    };
    if (null != a) {
        for(var b in a)if (Object.prototype.hasOwnProperty.call(a, b)) {
            var d = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(a, b) : {
            };
            d.get || d.set ? Object.defineProperty(b, b, d) : b[b] = a[b];
        }
    }
    return b.default = a, b;
}(require("react")), c = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}(require("prop-types"));
function d(a, b) {
    for(var c = 0; c < b.length; c++){
        var d = b[c];
        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d);
    }
}
function e(a, b, c) {
    return b in a ? Object.defineProperty(a, b, {
        value: c,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[b] = c, a;
}
function b(d) {
    return b = Object.setPrototypeOf ? Object.getPrototypeOf : function b(d) {
        return d.__proto__ || Object.getPrototypeOf(d);
    }, b(d);
}
function g(a) {
    for(var c = 1; c < arguments.length; c++){
        var d = null != arguments[c] ? arguments[c] : {
        }, f = Object.keys(d);
        "function" == typeof Object.getOwnPropertySymbols && (f = f.concat(Object.getOwnPropertySymbols(d).filter(function(a) {
            return Object.getOwnPropertyDescriptor(d, a).enumerable;
        }))), f.forEach(function(b) {
            e(a, b, d[b]);
        });
    }
    return a;
}
function c(d, e) {
    return c = Object.setPrototypeOf || function c(d, e) {
        return d.__proto__ = e, d;
    }, c(d, e);
}
var l = function(e) {
    "use strict";
    !function(a, b) {
        if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function");
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                writable: !0,
                configurable: !0
            }
        }), b && c(a, b);
    }(l, e);
    var b, h, j, k = function(c) {
        var d = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                })), !0;
            } catch (a) {
                return !1;
            }
        }();
        return function() {
            var a, a, f, g, h = b(c);
            if (d) {
                var i = b(this).constructor;
                g = Reflect.construct(h, arguments, i);
            } else g = h.apply(this, arguments);
            return a = this, (f = g) && ("object" == ((a = f) && "undefined" != typeof Symbol && a.constructor === Symbol ? "symbol" : typeof a) || "function" == typeof f) ? f : (function(a) {
                if (void 0 === a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return a;
            })(a);
        };
    }(l);
    function l() {
        var a;
        return !function(a, b) {
            if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
        }(this, l), a = k.apply(this, arguments), a.storeHighlightedItemReference = function(b) {
            a.props.onHighlightedItemChange(null === b ? null : b.item);
        }, a;
    }
    return b = l, h = [
        {
            key: "shouldComponentUpdate",
            value: function(a) {
                return !0;
            }
        },
        {
            key: "render",
            value: function() {
                var b = this, c = this.props, d = c.items, e = c.itemProps, f = c.renderItem, h = c.renderItemData, i = c.sectionIndex, j = c.highlightedItemIndex, k = c.getItemId, l = c.theme, m = c.keyPrefix, n = null === i ? m : "".concat(m, "section-").concat(i, "-"), o = "function" == typeof e;
                return a.jsx("ul", g({
                    role: "listbox"
                }, l("".concat(n, "items-list"), "itemsList"), {
                    children: d.map(function(c, d) {
                        var m = d === j, p = "".concat(n, "item-").concat(d), q = o ? e({
                            sectionIndex: i,
                            itemIndex: d
                        }) : e, r = g({
                            id: k(i, d),
                            "aria-selected": m
                        }, l(p, "item", 0 === d && "itemFirst", m && "itemHighlighted"), q);
                        return m && (r.ref = b.storeHighlightedItemReference), a.jsx(Item, g({
                        }, r, {
                            sectionIndex: i,
                            isHighlighted: m,
                            itemIndex: d,
                            item: c,
                            renderItem: f,
                            renderItemData: h
                        }));
                    })
                }));
            }
        }
    ], d(b.prototype, h), j && d(b, j), l;
}(b.Component);
l.propTypes = {
    items: c.default.array.isRequired,
    itemProps: c.default.oneOfType([
        c.default.object,
        c.default.func
    ]),
    renderItem: c.default.func.isRequired,
    renderItemData: c.default.object.isRequired,
    sectionIndex: c.default.number,
    highlightedItemIndex: c.default.number,
    onHighlightedItemChange: c.default.func.isRequired,
    getItemId: c.default.func.isRequired,
    theme: c.default.func.isRequired,
    keyPrefix: c.default.string.isRequired
}, l.defaultProps = {
    sectionIndex: null
}, exports.default = l, new l();
