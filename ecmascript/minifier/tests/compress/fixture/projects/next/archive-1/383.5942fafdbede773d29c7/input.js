"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push(
    [
        [383,],
        {
        /***/ 6086: /***/ function (
                __unused_webpack___webpack_module__,
                __webpack_exports__,
                __webpack_require__
            ) {
            /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ Z: function (
                        ) {
                            return /* binding */ _asyncToGenerator;
                        },
                        /* harmony export */
                    }
                );
                function asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    key,
                    arg
                ) {
                    try {
                        var info = gen[key](
                            arg
                        );
                        var value = info.value;
                    } catch (error) {
                        reject(
                            error
                        );
                        return;
                    }

                    if (info.done) {
                        resolve(
                            value
                        );
                    } else {
                        Promise.resolve(
                            value
                        ).then(
                            _next,
                            _throw
                        );
                    }
                }

                function _asyncToGenerator(
                    fn
                ) {
                    return function (
                    ) {
                        var self = this,
                            args = arguments;
                        return new Promise(
                            function (
                                resolve, reject
                            ) {
                                var gen = fn.apply(
                                    self,
                                    args
                                );

                                function _next(
                                    value
                                ) {
                                    asyncGeneratorStep(
                                        gen,
                                        resolve,
                                        reject,
                                        _next,
                                        _throw,
                                        "next",
                                        value
                                    );
                                }

                                function _throw(
                                    err
                                ) {
                                    asyncGeneratorStep(
                                        gen,
                                        resolve,
                                        reject,
                                        _next,
                                        _throw,
                                        "throw",
                                        err
                                    );
                                }

                                _next(
                                    undefined
                                );
                            }
                        );
                    };
                }

            /***/
            },

            /***/ 1383: /***/ function (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) {
                __webpack_require__.r(
                    __webpack_exports__
                );
                /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
                __webpack_require__(
                    4512
                );
                /* harmony import */ var _Users_timneutkens_projects_next_js_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ =
                __webpack_require__(
                    7945
                );
                /* harmony import */ var _Users_timneutkens_projects_next_js_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default =
                /*#__PURE__*/ __webpack_require__.n(
                        _Users_timneutkens_projects_next_js_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__
                    );
                /* harmony import */ var _Users_timneutkens_projects_next_js_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ =
                __webpack_require__(
                    6086
                );
                /* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ =
                __webpack_require__(
                    4652
                );

                var BrowserLoaded = (0,
                next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(
                /*#__PURE__*/ (0,
                    _Users_timneutkens_projects_next_js_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ /* .default */.Z)(
                    /*#__PURE__*/ _Users_timneutkens_projects_next_js_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default(
                        ).mark(
                            function _callee(
                            ) {
                                return _Users_timneutkens_projects_next_js_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default(
                                ).wrap(
                                    function _callee$(
                                        _context
                                    ) {
                                        while (1) {
                                            switch (
                                                (_context.prev = _context.next)
                                            ) {
                                            case 0:
                                                return _context.abrupt(
                                                    "return",
                                                    function (
                                                    ) {
                                                        return /*#__PURE__*/ (0,
                                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                                            "div",
                                                            {
                                                                children:
                                                                    "Browser hydrated",
                                                            }
                                                        );
                                                    }
                                                );

                                            case 1:
                                            case "end":
                                                return _context.stop(
                                                );
                                            }
                                        }
                                    },
                                    _callee
                                );
                            }
                        )
                    ),
                    {
                        ssr: false,
                    }
                );
                /* harmony default export */ __webpack_exports__["default"] =
                function (
                ) {
                    return /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                        "div",
                        {
                            children: [
                                /*#__PURE__*/ (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    "div",
                                    {
                                        children: "Nested 2",
                                    }
                                ),
                                /*#__PURE__*/ (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                                    BrowserLoaded,
                                    {
                                    }
                                ),
                            ],
                        }
                    );
                };

            /***/
            },
        },
    ]
);
