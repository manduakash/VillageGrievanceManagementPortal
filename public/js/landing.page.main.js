!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.ClipboardJS = t())
    : (e.ClipboardJS = t());
})(this, function () {
  return (
    (n = [
      function (e, t, n) {
        var i;
        (n = [e, n(7)]),
          void 0 !==
            (t =
              "function" ==
              typeof (i = function (e, t) {
                "use strict";
                function n(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                var i = (function (e) {
                    return e && e.__esModule ? e : { default: e };
                  })(t),
                  o =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e &&
                            "function" == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? "symbol"
                            : typeof e;
                        },
                  s = (function () {
                    function i(e, t) {
                      for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        (i.enumerable = i.enumerable || !1),
                          (i.configurable = !0),
                          "value" in i && (i.writable = !0),
                          Object.defineProperty(e, i.key, i);
                      }
                    }
                    return function (e, t, n) {
                      return t && i(e.prototype, t), n && i(e, n), e;
                    };
                  })(),
                  r = (function () {
                    function t(e) {
                      n(this, t), this.resolveOptions(e), this.initSelection();
                    }
                    return (
                      s(t, [
                        {
                          key: "resolveOptions",
                          value: function () {
                            var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {};
                            (this.action = e.action),
                              (this.container = e.container),
                              (this.emitter = e.emitter),
                              (this.target = e.target),
                              (this.text = e.text),
                              (this.trigger = e.trigger),
                              (this.selectedText = "");
                          },
                        },
                        {
                          key: "initSelection",
                          value: function () {
                            this.text
                              ? this.selectFake()
                              : this.target && this.selectTarget();
                          },
                        },
                        {
                          key: "selectFake",
                          value: function () {
                            var e = this,
                              t =
                                "rtl" ==
                                document.documentElement.getAttribute("dir");
                            this.removeFake(),
                              (this.fakeHandlerCallback = function () {
                                return e.removeFake();
                              }),
                              (this.fakeHandler =
                                this.container.addEventListener(
                                  "click",
                                  this.fakeHandlerCallback
                                ) || !0),
                              (this.fakeElem =
                                document.createElement("textarea")),
                              (this.fakeElem.style.fontSize = "12pt"),
                              (this.fakeElem.style.border = "0"),
                              (this.fakeElem.style.padding = "0"),
                              (this.fakeElem.style.margin = "0"),
                              (this.fakeElem.style.position = "absolute"),
                              (this.fakeElem.style[t ? "right" : "left"] =
                                "-9999px");
                            var n =
                              window.pageYOffset ||
                              document.documentElement.scrollTop;
                            (this.fakeElem.style.top = n + "px"),
                              this.fakeElem.setAttribute("readonly", ""),
                              (this.fakeElem.value = this.text),
                              this.container.appendChild(this.fakeElem),
                              (this.selectedText = (0, i.default)(
                                this.fakeElem
                              )),
                              this.copyText();
                          },
                        },
                        {
                          key: "removeFake",
                          value: function () {
                            this.fakeHandler &&
                              (this.container.removeEventListener(
                                "click",
                                this.fakeHandlerCallback
                              ),
                              (this.fakeHandler = null),
                              (this.fakeHandlerCallback = null)),
                              this.fakeElem &&
                                (this.container.removeChild(this.fakeElem),
                                (this.fakeElem = null));
                          },
                        },
                        {
                          key: "selectTarget",
                          value: function () {
                            (this.selectedText = (0, i.default)(this.target)),
                              this.copyText();
                          },
                        },
                        {
                          key: "copyText",
                          value: function () {
                            var t = void 0;
                            try {
                              t = document.execCommand(this.action);
                            } catch (e) {
                              t = !1;
                            }
                            this.handleResult(t);
                          },
                        },
                        {
                          key: "handleResult",
                          value: function (e) {
                            this.emitter.emit(e ? "success" : "error", {
                              action: this.action,
                              text: this.selectedText,
                              trigger: this.trigger,
                              clearSelection: this.clearSelection.bind(this),
                            });
                          },
                        },
                        {
                          key: "clearSelection",
                          value: function () {
                            this.trigger && this.trigger.focus(),
                              window.getSelection().removeAllRanges();
                          },
                        },
                        {
                          key: "destroy",
                          value: function () {
                            this.removeFake();
                          },
                        },
                        {
                          key: "action",
                          set: function () {
                            var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "copy";
                            if (
                              ((this._action = e),
                              "copy" !== this._action && "cut" !== this._action)
                            )
                              throw new Error(
                                'Invalid "action" value, use either "copy" or "cut"'
                              );
                          },
                          get: function () {
                            return this._action;
                          },
                        },
                        {
                          key: "target",
                          set: function (e) {
                            if (void 0 !== e) {
                              if (
                                !e ||
                                "object" !==
                                  (void 0 === e ? "undefined" : o(e)) ||
                                1 !== e.nodeType
                              )
                                throw new Error(
                                  'Invalid "target" value, use a valid Element'
                                );
                              if (
                                "copy" === this.action &&
                                e.hasAttribute("disabled")
                              )
                                throw new Error(
                                  'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
                                );
                              if (
                                "cut" === this.action &&
                                (e.hasAttribute("readonly") ||
                                  e.hasAttribute("disabled"))
                              )
                                throw new Error(
                                  'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
                                );
                              this._target = e;
                            }
                          },
                          get: function () {
                            return this._target;
                          },
                        },
                      ]),
                      t
                    );
                  })();
                e.exports = r;
              })
                ? i.apply(t, n)
                : i) && (e.exports = t);
      },
      function (e, t, n) {
        var u = n(6),
          c = n(5);
        e.exports = function (e, t, n) {
          if (!e && !t && !n) throw new Error("Missing required arguments");
          if (!u.string(t))
            throw new TypeError("Second argument must be a String");
          if (!u.fn(n))
            throw new TypeError("Third argument must be a Function");
          if (u.node(e))
            return (
              (o = t),
              (s = n),
              (i = e).addEventListener(o, s),
              {
                destroy: function () {
                  i.removeEventListener(o, s);
                },
              }
            );
          var i, o, s, r, a, l;
          if (u.nodeList(e))
            return (
              (r = e),
              (a = t),
              (l = n),
              Array.prototype.forEach.call(r, function (e) {
                e.addEventListener(a, l);
              }),
              {
                destroy: function () {
                  Array.prototype.forEach.call(r, function (e) {
                    e.removeEventListener(a, l);
                  });
                },
              }
            );
          if (u.string(e)) return c(document.body, e, t, n);
          throw new TypeError(
            "First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
          );
        };
      },
      function (e, t) {
        function n() {}
        (n.prototype = {
          on: function (e, t, n) {
            var i = this.e || (this.e = {});
            return (i[e] || (i[e] = [])).push({ fn: t, ctx: n }), this;
          },
          once: function (e, t, n) {
            function i() {
              o.off(e, i), t.apply(n, arguments);
            }
            var o = this;
            return (i._ = t), this.on(e, i, n);
          },
          emit: function (e) {
            for (
              var t = [].slice.call(arguments, 1),
                n = ((this.e || (this.e = {}))[e] || []).slice(),
                i = 0,
                o = n.length;
              i < o;
              i++
            )
              n[i].fn.apply(n[i].ctx, t);
            return this;
          },
          off: function (e, t) {
            var n = this.e || (this.e = {}),
              i = n[e],
              o = [];
            if (i && t)
              for (var s = 0, r = i.length; s < r; s++)
                i[s].fn !== t && i[s].fn._ !== t && o.push(i[s]);
            return o.length ? (n[e] = o) : delete n[e], this;
          },
        }),
          (e.exports = n);
      },
      function (e, t, n) {
        var i;
        (n = [e, n(0), n(2), n(1)]),
          void 0 !==
            (t =
              "function" ==
              typeof (i = function (e, t, n, i) {
                "use strict";
                function o(e) {
                  return e && e.__esModule ? e : { default: e };
                }
                function s(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                }
                function r(e, t) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
                }
                function a(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                }
                function l(e, t) {
                  var n = "data-clipboard-" + e;
                  if (t.hasAttribute(n)) return t.getAttribute(n);
                }
                var u = o(t),
                  c = o(n),
                  d = o(i),
                  h =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e &&
                            "function" == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? "symbol"
                            : typeof e;
                        },
                  p = (function () {
                    function i(e, t) {
                      for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        (i.enumerable = i.enumerable || !1),
                          (i.configurable = !0),
                          "value" in i && (i.writable = !0),
                          Object.defineProperty(e, i.key, i);
                      }
                    }
                    return function (e, t, n) {
                      return t && i(e.prototype, t), n && i(e, n), e;
                    };
                  })(),
                  f = (function (e) {
                    function i(e, t) {
                      s(this, i);
                      var n = r(
                        this,
                        (i.__proto__ || Object.getPrototypeOf(i)).call(this)
                      );
                      return n.resolveOptions(t), n.listenClick(e), n;
                    }
                    return (
                      a(i, e),
                      p(
                        i,
                        [
                          {
                            key: "resolveOptions",
                            value: function () {
                              var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {};
                              (this.action =
                                "function" == typeof e.action
                                  ? e.action
                                  : this.defaultAction),
                                (this.target =
                                  "function" == typeof e.target
                                    ? e.target
                                    : this.defaultTarget),
                                (this.text =
                                  "function" == typeof e.text
                                    ? e.text
                                    : this.defaultText),
                                (this.container =
                                  "object" === h(e.container)
                                    ? e.container
                                    : document.body);
                            },
                          },
                          {
                            key: "listenClick",
                            value: function (e) {
                              var t = this;
                              this.listener = (0, d.default)(
                                e,
                                "click",
                                function (e) {
                                  return t.onClick(e);
                                }
                              );
                            },
                          },
                          {
                            key: "onClick",
                            value: function (e) {
                              var t = e.delegateTarget || e.currentTarget;
                              this.clipboardAction &&
                                (this.clipboardAction = null),
                                (this.clipboardAction = new u.default({
                                  action: this.action(t),
                                  target: this.target(t),
                                  text: this.text(t),
                                  container: this.container,
                                  trigger: t,
                                  emitter: this,
                                }));
                            },
                          },
                          {
                            key: "defaultAction",
                            value: function (e) {
                              return l("action", e);
                            },
                          },
                          {
                            key: "defaultTarget",
                            value: function (e) {
                              var t = l("target", e);
                              if (t) return document.querySelector(t);
                            },
                          },
                          {
                            key: "defaultText",
                            value: function (e) {
                              return l("text", e);
                            },
                          },
                          {
                            key: "destroy",
                            value: function () {
                              this.listener.destroy(),
                                this.clipboardAction &&
                                  (this.clipboardAction.destroy(),
                                  (this.clipboardAction = null));
                            },
                          },
                        ],
                        [
                          {
                            key: "isSupported",
                            value: function () {
                              var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : ["copy", "cut"],
                                t = "string" == typeof e ? [e] : e,
                                n = !!document.queryCommandSupported;
                              return (
                                t.forEach(function (e) {
                                  n = n && !!document.queryCommandSupported(e);
                                }),
                                n
                              );
                            },
                          },
                        ]
                      ),
                      i
                    );
                  })(c.default);
                e.exports = f;
              })
                ? i.apply(t, n)
                : i) && (e.exports = t);
      },
      function (e, t) {
        var n;
        "undefined" == typeof Element ||
          Element.prototype.matches ||
          ((n = Element.prototype).matches =
            n.matchesSelector ||
            n.mozMatchesSelector ||
            n.msMatchesSelector ||
            n.oMatchesSelector ||
            n.webkitMatchesSelector),
          (e.exports = function (e, t) {
            for (; e && 9 !== e.nodeType; ) {
              if ("function" == typeof e.matches && e.matches(t)) return e;
              e = e.parentNode;
            }
          });
      },
      function (e, t, n) {
        function s(e, t, n, i, o) {
          var s = function (t, n, e, i) {
            return function (e) {
              (e.delegateTarget = r(e.target, n)),
                e.delegateTarget && i.call(t, e);
            };
          }.apply(this, arguments);
          return (
            e.addEventListener(n, s, o),
            {
              destroy: function () {
                e.removeEventListener(n, s, o);
              },
            }
          );
        }
        var r = n(4);
        e.exports = function (e, t, n, i, o) {
          return "function" == typeof e.addEventListener
            ? s.apply(null, arguments)
            : "function" == typeof n
            ? s.bind(null, document).apply(null, arguments)
            : ("string" == typeof e && (e = document.querySelectorAll(e)),
              Array.prototype.map.call(e, function (e) {
                return s(e, t, n, i, o);
              }));
        };
      },
      function (e, n) {
        (n.node = function (e) {
          return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType;
        }),
          (n.nodeList = function (e) {
            var t = Object.prototype.toString.call(e);
            return (
              void 0 !== e &&
              ("[object NodeList]" === t || "[object HTMLCollection]" === t) &&
              "length" in e &&
              (0 === e.length || n.node(e[0]))
            );
          }),
          (n.string = function (e) {
            return "string" == typeof e || e instanceof String;
          }),
          (n.fn = function (e) {
            return "[object Function]" === Object.prototype.toString.call(e);
          });
      },
      function (e, t) {
        e.exports = function (e) {
          var t, n;
          return (e =
            "SELECT" === e.nodeName
              ? (e.focus(), e.value)
              : "INPUT" === e.nodeName || "TEXTAREA" === e.nodeName
              ? ((t = e.hasAttribute("readonly")) ||
                  e.setAttribute("readonly", ""),
                e.select(),
                e.setSelectionRange(0, e.value.length),
                t || e.removeAttribute("readonly"),
                e.value)
              : (e.hasAttribute("contenteditable") && e.focus(),
                (t = window.getSelection()),
                (n = document.createRange()).selectNodeContents(e),
                t.removeAllRanges(),
                t.addRange(n),
                t.toString()));
        };
      },
    ]),
    (o = {}),
    (i.m = n),
    (i.c = o),
    (i.i = function (e) {
      return e;
    }),
    (i.d = function (e, t, n) {
      i.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: n,
        });
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ""),
    i((i.s = 3))
  );
  function i(e) {
    if (o[e]) return o[e].exports;
    var t = (o[e] = { i: e, l: !1, exports: {} });
    return n[e].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
  }
  var n, o;
}),
  !(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if (e.document) return t(e);
              throw new Error("jQuery requires a window with a document");
            })
      : t(e);
  })("undefined" != typeof window ? window : this, function (w, P) {
    "use strict";
    function y(e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    }
    function m(e) {
      return null != e && e === e.window;
    }
    var e = [],
      k = w.document,
      L = Object.getPrototypeOf,
      a = e.slice,
      R = e.concat,
      N = e.push,
      B = e.indexOf,
      H = {},
      q = H.toString,
      z = H.hasOwnProperty,
      W = z.toString,
      U = W.call(Object),
      g = {},
      V = { type: !0, src: !0, noModule: !0 };
    function Y(e, t, n) {
      var i,
        o = (t = t || k).createElement("script");
      if (((o.text = e), n)) for (i in V) n[i] && (o[i] = n[i]);
      t.head.appendChild(o).parentNode.removeChild(o);
    }
    function f(e) {
      return null == e
        ? e + ""
        : "object" == typeof e || "function" == typeof e
        ? H[q.call(e)] || "object"
        : typeof e;
    }
    var x = function (e, t) {
        return new x.fn.init(e, t);
      },
      Z = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function K(e) {
      var t = !!e && "length" in e && e.length,
        n = f(e);
      return (
        !y(e) &&
        !m(e) &&
        ("array" === n ||
          0 === t ||
          ("number" == typeof t && 0 < t && t - 1 in e))
      );
    }
    (x.fn = x.prototype =
      {
        jquery: "3.3.1",
        constructor: x,
        length: 0,
        toArray: function () {
          return a.call(this);
        },
        get: function (e) {
          return null == e
            ? a.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function (e) {
          e = x.merge(this.constructor(), e);
          return (e.prevObject = this), e;
        },
        each: function (e) {
          return x.each(this, e);
        },
        map: function (n) {
          return this.pushStack(
            x.map(this, function (e, t) {
              return n.call(e, t, e);
            })
          );
        },
        slice: function () {
          return this.pushStack(a.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (e) {
          var t = this.length,
            e = +e + (e < 0 ? t : 0);
          return this.pushStack(0 <= e && e < t ? [this[e]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: N,
        sort: e.sort,
        splice: e.splice,
      }),
      (x.extend = x.fn.extend =
        function () {
          var e,
            t,
            n,
            i,
            o,
            s = arguments[0] || {},
            r = 1,
            a = arguments.length,
            l = !1;
          for (
            "boolean" == typeof s && ((l = s), (s = arguments[r] || {}), r++),
              "object" == typeof s || y(s) || (s = {}),
              r === a && ((s = this), r--);
            r < a;
            r++
          )
            if (null != (e = arguments[r]))
              for (t in e)
                (o = s[t]),
                  s !== (n = e[t]) &&
                    (l && n && (x.isPlainObject(n) || (i = Array.isArray(n)))
                      ? ((o = i
                          ? ((i = !1), o && Array.isArray(o) ? o : [])
                          : o && x.isPlainObject(o)
                          ? o
                          : {}),
                        (s[t] = x.extend(l, o, n)))
                      : void 0 !== n && (s[t] = n));
          return s;
        }),
      x.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isPlainObject: function (e) {
          return !(
            !e ||
            "[object Object]" !== q.call(e) ||
            ((e = L(e)) &&
              ("function" !=
                typeof (e = z.call(e, "constructor") && e.constructor) ||
                W.call(e) !== U))
          );
        },
        isEmptyObject: function (e) {
          for (var t in e) return !1;
          return !0;
        },
        globalEval: function (e) {
          Y(e);
        },
        each: function (e, t) {
          var n,
            i = 0;
          if (K(e))
            for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
          else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
          return e;
        },
        trim: function (e) {
          return null == e ? "" : (e + "").replace(Z, "");
        },
        makeArray: function (e, t) {
          t = t || [];
          return (
            null != e &&
              (K(Object(e))
                ? x.merge(t, "string" == typeof e ? [e] : e)
                : N.call(t, e)),
            t
          );
        },
        inArray: function (e, t, n) {
          return null == t ? -1 : B.call(t, e, n);
        },
        merge: function (e, t) {
          for (var n = +t.length, i = 0, o = e.length; i < n; i++)
            e[o++] = t[i];
          return (e.length = o), e;
        },
        grep: function (e, t, n) {
          for (var i = [], o = 0, s = e.length, r = !n; o < s; o++)
            !t(e[o], o) != r && i.push(e[o]);
          return i;
        },
        map: function (e, t, n) {
          var i,
            o,
            s = 0,
            r = [];
          if (K(e))
            for (i = e.length; s < i; s++)
              null != (o = t(e[s], s, n)) && r.push(o);
          else for (s in e) null != (o = t(e[s], s, n)) && r.push(o);
          return R.apply([], r);
        },
        guid: 1,
        support: g,
      }),
      "function" == typeof Symbol &&
        (x.fn[Symbol.iterator] = e[Symbol.iterator]),
      x.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (e, t) {
          H["[object " + t + "]"] = t.toLowerCase();
        }
      );
    function i(e, t, n) {
      for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (o && x(e).is(n)) break;
          i.push(e);
        }
      return i;
    }
    function X(e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    }
    var e = (function (n) {
        function d(e, t, n) {
          var i = "0x" + t - 65536;
          return i != i || n
            ? t
            : i < 0
            ? String.fromCharCode(65536 + i)
            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
        }
        function P(e, t) {
          return t
            ? "\0" === e
              ? "�"
              : e.slice(0, -1) +
                "\\" +
                e.charCodeAt(e.length - 1).toString(16) +
                " "
            : "\\" + e;
        }
        function L() {
          k();
        }
        var e,
          p,
          _,
          s,
          R,
          f,
          N,
          B,
          w,
          l,
          u,
          k,
          x,
          i,
          C,
          m,
          o,
          r,
          g,
          S = "sizzle" + +new Date(),
          v = n.document,
          T = 0,
          H = 0,
          q = ce(),
          z = ce(),
          y = ce(),
          W = function (e, t) {
            return e === t && (u = !0), 0;
          },
          U = {}.hasOwnProperty,
          t = [],
          V = t.pop,
          Y = t.push,
          A = t.push,
          Z = t.slice,
          b = function (e, t) {
            for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
            return -1;
          },
          K =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          a = "[\\x20\\t\\r\\n\\f]",
          c = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          X =
            "\\[" +
            a +
            "*(" +
            c +
            ")(?:" +
            a +
            "*([*^$|!~]?=)" +
            a +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            c +
            "))|)" +
            a +
            "*\\]",
          G =
            ":(" +
            c +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            X +
            ")*)|.*)\\)|)",
          J = new RegExp(a + "+", "g"),
          E = new RegExp(
            "^" + a + "+|((?:^|[^\\\\])(?:\\\\.)*)" + a + "+$",
            "g"
          ),
          Q = new RegExp("^" + a + "*," + a + "*"),
          ee = new RegExp("^" + a + "*([>+~]|" + a + ")" + a + "*"),
          te = new RegExp("=" + a + "*([^\\]'\"]*?)" + a + "*\\]", "g"),
          ne = new RegExp(G),
          ie = new RegExp("^" + c + "$"),
          h = {
            ID: new RegExp("^#(" + c + ")"),
            CLASS: new RegExp("^\\.(" + c + ")"),
            TAG: new RegExp("^(" + c + "|[*])"),
            ATTR: new RegExp("^" + X),
            PSEUDO: new RegExp("^" + G),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                a +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                a +
                "*(?:([+-]|)" +
                a +
                "*(\\d+)|))" +
                a +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                a +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                a +
                "*((?:-\\d)?\\d*)" +
                a +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          oe = /^(?:input|select|textarea|button)$/i,
          se = /^h\d$/i,
          D = /^[^{]+\{\s*\[native \w/,
          re = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ae = /[+~]/,
          O = new RegExp("\\\\([\\da-f]{1,6}" + a + "?|(" + a + ")|.)", "ig"),
          le = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          ue = ge(
            function (e) {
              return !0 === e.disabled && ("form" in e || "label" in e);
            },
            { dir: "parentNode", next: "legend" }
          );
        try {
          A.apply((t = Z.call(v.childNodes)), v.childNodes),
            t[v.childNodes.length].nodeType;
        } catch (n) {
          A = {
            apply: t.length
              ? function (e, t) {
                  Y.apply(e, Z.call(t));
                }
              : function (e, t) {
                  for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                  e.length = n - 1;
                },
          };
        }
        function $(e, t, n, i) {
          var o,
            s,
            r,
            a,
            l,
            u,
            c,
            d = t && t.ownerDocument,
            h = t ? t.nodeType : 9;
          if (
            ((n = n || []),
            "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
          )
            return n;
          if (
            !i &&
            ((t ? t.ownerDocument || t : v) !== x && k(t), (t = t || x), C)
          ) {
            if (11 !== h && (l = re.exec(e)))
              if ((o = l[1])) {
                if (9 === h) {
                  if (!(r = t.getElementById(o))) return n;
                  if (r.id === o) return n.push(r), n;
                } else if (
                  d &&
                  (r = d.getElementById(o)) &&
                  g(t, r) &&
                  r.id === o
                )
                  return n.push(r), n;
              } else {
                if (l[2]) return A.apply(n, t.getElementsByTagName(e)), n;
                if (
                  (o = l[3]) &&
                  p.getElementsByClassName &&
                  t.getElementsByClassName
                )
                  return A.apply(n, t.getElementsByClassName(o)), n;
              }
            if (p.qsa && !y[e + " "] && (!m || !m.test(e))) {
              if (1 !== h) (d = t), (c = e);
              else if ("object" !== t.nodeName.toLowerCase()) {
                for (
                  (a = t.getAttribute("id"))
                    ? (a = a.replace(le, P))
                    : t.setAttribute("id", (a = S)),
                    s = (u = f(e)).length;
                  s--;

                )
                  u[s] = "#" + a + " " + I(u[s]);
                (c = u.join(",")), (d = (ae.test(e) && fe(t.parentNode)) || t);
              }
              if (c)
                try {
                  return A.apply(n, d.querySelectorAll(c)), n;
                } catch (e) {
                } finally {
                  a === S && t.removeAttribute("id");
                }
            }
          }
          return B(e.replace(E, "$1"), t, n, i);
        }
        function ce() {
          var n = [];
          function i(e, t) {
            return (
              n.push(e + " ") > _.cacheLength && delete i[n.shift()],
              (i[e + " "] = t)
            );
          }
          return i;
        }
        function j(e) {
          return (e[S] = !0), e;
        }
        function F(e) {
          var t = x.createElement("fieldset");
          try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t);
          }
        }
        function de(e, t) {
          for (var n = e.split("|"), i = n.length; i--; )
            _.attrHandle[n[i]] = t;
        }
        function he(e, t) {
          var n = t && e,
            i =
              n &&
              1 === e.nodeType &&
              1 === t.nodeType &&
              e.sourceIndex - t.sourceIndex;
          if (i) return i;
          if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
          return e ? 1 : -1;
        }
        function pe(t) {
          return function (e) {
            return "form" in e
              ? e.parentNode && !1 === e.disabled
                ? "label" in e
                  ? "label" in e.parentNode
                    ? e.parentNode.disabled === t
                    : e.disabled === t
                  : e.isDisabled === t || (e.isDisabled !== !t && ue(e) === t)
                : e.disabled === t
              : "label" in e && e.disabled === t;
          };
        }
        function M(r) {
          return j(function (s) {
            return (
              (s = +s),
              j(function (e, t) {
                for (var n, i = r([], e.length, s), o = i.length; o--; )
                  e[(n = i[o])] && (e[n] = !(t[n] = e[n]));
              })
            );
          });
        }
        function fe(e) {
          return e && void 0 !== e.getElementsByTagName && e;
        }
        for (e in ((p = $.support = {}),
        (R = $.isXML =
          function (e) {
            e = e && (e.ownerDocument || e).documentElement;
            return !!e && "HTML" !== e.nodeName;
          }),
        (k = $.setDocument =
          function (e) {
            var e = e ? e.ownerDocument || e : v;
            return (
              e !== x &&
                9 === e.nodeType &&
                e.documentElement &&
                ((i = (x = e).documentElement),
                (C = !R(x)),
                v !== x &&
                  (e = x.defaultView) &&
                  e.top !== e &&
                  (e.addEventListener
                    ? e.addEventListener("unload", L, !1)
                    : e.attachEvent && e.attachEvent("onunload", L)),
                (p.attributes = F(function (e) {
                  return (e.className = "i"), !e.getAttribute("className");
                })),
                (p.getElementsByTagName = F(function (e) {
                  return (
                    e.appendChild(x.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (p.getElementsByClassName = D.test(x.getElementsByClassName)),
                (p.getById = F(function (e) {
                  return (
                    (i.appendChild(e).id = S),
                    !x.getElementsByName || !x.getElementsByName(S).length
                  );
                })),
                p.getById
                  ? ((_.filter.ID = function (e) {
                      var t = e.replace(O, d);
                      return function (e) {
                        return e.getAttribute("id") === t;
                      };
                    }),
                    (_.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && C)
                        return (t = t.getElementById(e)) ? [t] : [];
                    }))
                  : ((_.filter.ID = function (e) {
                      var t = e.replace(O, d);
                      return function (e) {
                        e =
                          void 0 !== e.getAttributeNode &&
                          e.getAttributeNode("id");
                        return e && e.value === t;
                      };
                    }),
                    (_.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && C) {
                        var n,
                          i,
                          o,
                          s = t.getElementById(e);
                        if (s) {
                          if ((n = s.getAttributeNode("id")) && n.value === e)
                            return [s];
                          for (
                            o = t.getElementsByName(e), i = 0;
                            (s = o[i++]);

                          )
                            if ((n = s.getAttributeNode("id")) && n.value === e)
                              return [s];
                        }
                        return [];
                      }
                    })),
                (_.find.TAG = p.getElementsByTagName
                  ? function (e, t) {
                      return void 0 !== t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : p.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                    }
                  : function (e, t) {
                      var n,
                        i = [],
                        o = 0,
                        s = t.getElementsByTagName(e);
                      if ("*" !== e) return s;
                      for (; (n = s[o++]); ) 1 === n.nodeType && i.push(n);
                      return i;
                    }),
                (_.find.CLASS =
                  p.getElementsByClassName &&
                  function (e, t) {
                    if (void 0 !== t.getElementsByClassName && C)
                      return t.getElementsByClassName(e);
                  }),
                (o = []),
                (m = []),
                (p.qsa = D.test(x.querySelectorAll)) &&
                  (F(function (e) {
                    (i.appendChild(e).innerHTML =
                      "<a id='" +
                      S +
                      "'></a><select id='" +
                      S +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        m.push("[*^$]=" + a + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length ||
                        m.push("\\[" + a + "*(?:value|" + K + ")"),
                      e.querySelectorAll("[id~=" + S + "-]").length ||
                        m.push("~="),
                      e.querySelectorAll(":checked").length ||
                        m.push(":checked"),
                      e.querySelectorAll("a#" + S + "+*").length ||
                        m.push(".#.+[+~]");
                  }),
                  F(function (e) {
                    e.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = x.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length &&
                        m.push("name" + a + "*[*^$|!~]?="),
                      2 !== e.querySelectorAll(":enabled").length &&
                        m.push(":enabled", ":disabled"),
                      (i.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length &&
                        m.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      m.push(",.*:");
                  })),
                (p.matchesSelector = D.test(
                  (r =
                    i.matches ||
                    i.webkitMatchesSelector ||
                    i.mozMatchesSelector ||
                    i.oMatchesSelector ||
                    i.msMatchesSelector)
                )) &&
                  F(function (e) {
                    (p.disconnectedMatch = r.call(e, "*")),
                      r.call(e, "[s!='']:x"),
                      o.push("!=", G);
                  }),
                (m = m.length && new RegExp(m.join("|"))),
                (o = o.length && new RegExp(o.join("|"))),
                (e = D.test(i.compareDocumentPosition)),
                (g =
                  e || D.test(i.contains)
                    ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          t = t && t.parentNode;
                        return (
                          e === t ||
                          !(
                            !t ||
                            1 !== t.nodeType ||
                            !(n.contains
                              ? n.contains(t)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(t))
                          )
                        );
                      }
                    : function (e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (W = e
                  ? function (e, t) {
                      return e === t
                        ? ((u = !0), 0)
                        : !e.compareDocumentPosition -
                            !t.compareDocumentPosition ||
                            (1 &
                              (n =
                                (e.ownerDocument || e) ===
                                (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!p.sortDetached &&
                              t.compareDocumentPosition(e) === n)
                              ? e === x || (e.ownerDocument === v && g(v, e))
                                ? -1
                                : t === x || (t.ownerDocument === v && g(v, t))
                                ? 1
                                : l
                                ? b(l, e) - b(l, t)
                                : 0
                              : 4 & n
                              ? -1
                              : 1);
                      var n;
                    }
                  : function (e, t) {
                      if (e === t) return (u = !0), 0;
                      var n,
                        i = 0,
                        o = e.parentNode,
                        s = t.parentNode,
                        r = [e],
                        a = [t];
                      if (!o || !s)
                        return e === x
                          ? -1
                          : t === x
                          ? 1
                          : o
                          ? -1
                          : s
                          ? 1
                          : l
                          ? b(l, e) - b(l, t)
                          : 0;
                      if (o === s) return he(e, t);
                      for (n = e; (n = n.parentNode); ) r.unshift(n);
                      for (n = t; (n = n.parentNode); ) a.unshift(n);
                      for (; r[i] === a[i]; ) i++;
                      return i
                        ? he(r[i], a[i])
                        : r[i] === v
                        ? -1
                        : a[i] === v
                        ? 1
                        : 0;
                    })),
              x
            );
          }),
        ($.matches = function (e, t) {
          return $(e, null, null, t);
        }),
        ($.matchesSelector = function (e, t) {
          if (
            ((e.ownerDocument || e) !== x && k(e),
            (t = t.replace(te, "='$1']")),
            p.matchesSelector &&
              C &&
              !y[t + " "] &&
              (!o || !o.test(t)) &&
              (!m || !m.test(t)))
          )
            try {
              var n = r.call(e, t);
              if (
                n ||
                p.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return n;
            } catch (e) {}
          return 0 < $(t, x, null, [e]).length;
        }),
        ($.contains = function (e, t) {
          return (e.ownerDocument || e) !== x && k(e), g(e, t);
        }),
        ($.attr = function (e, t) {
          (e.ownerDocument || e) !== x && k(e);
          var n = _.attrHandle[t.toLowerCase()],
            n =
              n && U.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
          return void 0 !== n
            ? n
            : p.attributes || !C
            ? e.getAttribute(t)
            : (n = e.getAttributeNode(t)) && n.specified
            ? n.value
            : null;
        }),
        ($.escape = function (e) {
          return (e + "").replace(le, P);
        }),
        ($.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        ($.uniqueSort = function (e) {
          var t,
            n = [],
            i = 0,
            o = 0;
          if (
            ((u = !p.detectDuplicates),
            (l = !p.sortStable && e.slice(0)),
            e.sort(W),
            u)
          ) {
            for (; (t = e[o++]); ) t === e[o] && (i = n.push(o));
            for (; i--; ) e.splice(n[i], 1);
          }
          return (l = null), e;
        }),
        (s = $.getText =
          function (e) {
            var t,
              n = "",
              i = 0,
              o = e.nodeType;
            if (o) {
              if (1 === o || 9 === o || 11 === o) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += s(e);
              } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (; (t = e[i++]); ) n += s(t);
            return n;
          }),
        ((_ = $.selectors =
          {
            cacheLength: 50,
            createPseudo: j,
            match: h,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(O, d)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(O, d)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || $.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && $.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t,
                  n = !e[6] && e[2];
                return h.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        ne.test(n) &&
                        (t = f(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(O, d).toLowerCase();
                return "*" === e
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function (e) {
                var t = q[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + a + ")" + e + "(" + a + "|$)")) &&
                    q(e, function (e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          (void 0 !== e.getAttribute &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (t, n, i) {
                return function (e) {
                  e = $.attr(e, t);
                  return null == e
                    ? "!=" === n
                    : !n ||
                        ((e += ""),
                        "=" === n
                          ? e === i
                          : "!=" === n
                          ? e !== i
                          : "^=" === n
                          ? i && 0 === e.indexOf(i)
                          : "*=" === n
                          ? i && -1 < e.indexOf(i)
                          : "$=" === n
                          ? i && e.slice(-i.length) === i
                          : "~=" === n
                          ? -1 < (" " + e.replace(J, " ") + " ").indexOf(i)
                          : "|=" === n &&
                            (e === i || e.slice(0, i.length + 1) === i + "-"));
                };
              },
              CHILD: function (f, e, t, m, g) {
                var v = "nth" !== f.slice(0, 3),
                  y = "last" !== f.slice(-4),
                  b = "of-type" === e;
                return 1 === m && 0 === g
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (e, t, n) {
                      var i,
                        o,
                        s,
                        r,
                        a,
                        l,
                        u = v != y ? "nextSibling" : "previousSibling",
                        c = e.parentNode,
                        d = b && e.nodeName.toLowerCase(),
                        h = !n && !b,
                        p = !1;
                      if (c) {
                        if (v) {
                          for (; u; ) {
                            for (r = e; (r = r[u]); )
                              if (
                                b
                                  ? r.nodeName.toLowerCase() === d
                                  : 1 === r.nodeType
                              )
                                return !1;
                            l = u = "only" === f && !l && "nextSibling";
                          }
                          return !0;
                        }
                        if (((l = [y ? c.firstChild : c.lastChild]), y && h)) {
                          for (
                            p =
                              (a =
                                (i =
                                  (o =
                                    (s = (r = c)[S] || (r[S] = {}))[
                                      r.uniqueID
                                    ] || (s[r.uniqueID] = {}))[f] || [])[0] ===
                                  T && i[1]) && i[2],
                              r = a && c.childNodes[a];
                            (r = (++a && r && r[u]) || (p = a = 0) || l.pop());

                          )
                            if (1 === r.nodeType && ++p && r === e) {
                              o[f] = [T, a, p];
                              break;
                            }
                        } else if (
                          !1 ===
                          (p = h
                            ? (a =
                                (i =
                                  (o =
                                    (s = (r = e)[S] || (r[S] = {}))[
                                      r.uniqueID
                                    ] || (s[r.uniqueID] = {}))[f] || [])[0] ===
                                  T && i[1])
                            : p)
                        )
                          for (
                            ;
                            (r =
                              (++a && r && r[u]) || (p = a = 0) || l.pop()) &&
                            ((b
                              ? r.nodeName.toLowerCase() !== d
                              : 1 !== r.nodeType) ||
                              !++p ||
                              (h &&
                                ((o =
                                  (s = r[S] || (r[S] = {}))[r.uniqueID] ||
                                  (s[r.uniqueID] = {}))[f] = [T, p]),
                              r !== e));

                          );
                        return (p -= g) === m || (p % m == 0 && 0 <= p / m);
                      }
                    };
              },
              PSEUDO: function (e, s) {
                var t,
                  r =
                    _.pseudos[e] ||
                    _.setFilters[e.toLowerCase()] ||
                    $.error("unsupported pseudo: " + e);
                return r[S]
                  ? r(s)
                  : 1 < r.length
                  ? ((t = [e, e, "", s]),
                    _.setFilters.hasOwnProperty(e.toLowerCase())
                      ? j(function (e, t) {
                          for (var n, i = r(e, s), o = i.length; o--; )
                            e[(n = b(e, i[o]))] = !(t[n] = i[o]);
                        })
                      : function (e) {
                          return r(e, 0, t);
                        })
                  : r;
              },
            },
            pseudos: {
              not: j(function (e) {
                var i = [],
                  o = [],
                  a = N(e.replace(E, "$1"));
                return a[S]
                  ? j(function (e, t, n, i) {
                      for (var o, s = a(e, null, i, []), r = e.length; r--; )
                        (o = s[r]) && (e[r] = !(t[r] = o));
                    })
                  : function (e, t, n) {
                      return (
                        (i[0] = e), a(i, null, n, o), (i[0] = null), !o.pop()
                      );
                    };
              }),
              has: j(function (t) {
                return function (e) {
                  return 0 < $(t, e).length;
                };
              }),
              contains: j(function (t) {
                return (
                  (t = t.replace(O, d)),
                  function (e) {
                    return (
                      -1 < (e.textContent || e.innerText || s(e)).indexOf(t)
                    );
                  }
                );
              }),
              lang: j(function (n) {
                return (
                  ie.test(n || "") || $.error("unsupported lang: " + n),
                  (n = n.replace(O, d).toLowerCase()),
                  function (e) {
                    var t;
                    do {
                      if (
                        (t = C
                          ? e.lang
                          : e.getAttribute("xml:lang") ||
                            e.getAttribute("lang"))
                      )
                        return (
                          (t = t.toLowerCase()) === n ||
                          0 === t.indexOf(n + "-")
                        );
                    } while ((e = e.parentNode) && 1 === e.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (e) {
                var t = n.location && n.location.hash;
                return t && t.slice(1) === e.id;
              },
              root: function (e) {
                return e === i;
              },
              focus: function (e) {
                return (
                  e === x.activeElement &&
                  (!x.hasFocus || x.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: pe(!1),
              disabled: pe(!0),
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function (e) {
                return !_.pseudos.empty(e);
              },
              header: function (e) {
                return se.test(e.nodeName);
              },
              input: function (e) {
                return oe.test(e.nodeName);
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function (e) {
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (e = e.getAttribute("type")) ||
                    "text" === e.toLowerCase())
                );
              },
              first: M(function () {
                return [0];
              }),
              last: M(function (e, t) {
                return [t - 1];
              }),
              eq: M(function (e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: M(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: M(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: M(function (e, t, n) {
                for (var i = n < 0 ? n + t : n; 0 <= --i; ) e.push(i);
                return e;
              }),
              gt: M(function (e, t, n) {
                for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                return e;
              }),
            },
          }).pseudos.nth = _.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
          _.pseudos[e] = (function (t) {
            return function (e) {
              return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
          })(e);
        for (e in { submit: !0, reset: !0 })
          _.pseudos[e] = (function (n) {
            return function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t || "button" === t) && e.type === n;
            };
          })(e);
        function me() {}
        function I(e) {
          for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
          return i;
        }
        function ge(r, e, t) {
          var a = e.dir,
            l = e.next,
            u = l || a,
            c = t && "parentNode" === u,
            d = H++;
          return e.first
            ? function (e, t, n) {
                for (; (e = e[a]); )
                  if (1 === e.nodeType || c) return r(e, t, n);
                return !1;
              }
            : function (e, t, n) {
                var i,
                  o,
                  s = [T, d];
                if (n) {
                  for (; (e = e[a]); )
                    if ((1 === e.nodeType || c) && r(e, t, n)) return !0;
                } else
                  for (; (e = e[a]); )
                    if (1 === e.nodeType || c)
                      if (
                        ((o =
                          (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                          (o[e.uniqueID] = {})),
                        l && l === e.nodeName.toLowerCase())
                      )
                        e = e[a] || e;
                      else {
                        if ((i = o[u]) && i[0] === T && i[1] === d)
                          return (s[2] = i[2]);
                        if (((o[u] = s)[2] = r(e, t, n))) return !0;
                      }
                return !1;
              };
        }
        function ve(o) {
          return 1 < o.length
            ? function (e, t, n) {
                for (var i = o.length; i--; ) if (!o[i](e, t, n)) return !1;
                return !0;
              }
            : o[0];
        }
        function ye(e, t, n, i, o) {
          for (var s, r = [], a = 0, l = e.length, u = null != t; a < l; a++)
            !(s = e[a]) || (n && !n(s, i, o)) || (r.push(s), u && t.push(a));
          return r;
        }
        function be(p, f, m, g, v, e) {
          return (
            g && !g[S] && (g = be(g)),
            v && !v[S] && (v = be(v, e)),
            j(function (e, t, n, i) {
              var o,
                s,
                r,
                a = [],
                l = [],
                u = t.length,
                c =
                  e ||
                  (function (e, t, n) {
                    for (var i = 0, o = t.length; i < o; i++) $(e, t[i], n);
                    return n;
                  })(f || "*", n.nodeType ? [n] : n, []),
                d = !p || (!e && f) ? c : ye(c, a, p, n, i),
                h = m ? (v || (e ? p : u || g) ? [] : t) : d;
              if ((m && m(d, h, n, i), g))
                for (o = ye(h, l), g(o, [], n, i), s = o.length; s--; )
                  (r = o[s]) && (h[l[s]] = !(d[l[s]] = r));
              if (e) {
                if (v || p) {
                  if (v) {
                    for (o = [], s = h.length; s--; )
                      (r = h[s]) && o.push((d[s] = r));
                    v(null, (h = []), o, i);
                  }
                  for (s = h.length; s--; )
                    (r = h[s]) &&
                      -1 < (o = v ? b(e, r) : a[s]) &&
                      (e[o] = !(t[o] = r));
                }
              } else (h = ye(h === t ? h.splice(u, h.length) : h)), v ? v(null, t, h, i) : A.apply(t, h);
            })
          );
        }
        function _e(g, v) {
          function e(e, t, n, i, o) {
            var s,
              r,
              a,
              l = 0,
              u = "0",
              c = e && [],
              d = [],
              h = w,
              p = e || (b && _.find.TAG("*", o)),
              f = (T += null == h ? 1 : Math.random() || 0.1),
              m = p.length;
            for (
              o && (w = t === x || t || o);
              u !== m && null != (s = p[u]);
              u++
            ) {
              if (b && s) {
                for (
                  r = 0, t || s.ownerDocument === x || (k(s), (n = !C));
                  (a = g[r++]);

                )
                  if (a(s, t || x, n)) {
                    i.push(s);
                    break;
                  }
                o && (T = f);
              }
              y && ((s = !a && s) && l--, e && c.push(s));
            }
            if (((l += u), y && u !== l)) {
              for (r = 0; (a = v[r++]); ) a(c, d, t, n);
              if (e) {
                if (0 < l) for (; u--; ) c[u] || d[u] || (d[u] = V.call(i));
                d = ye(d);
              }
              A.apply(i, d),
                o && !e && 0 < d.length && 1 < l + v.length && $.uniqueSort(i);
            }
            return o && ((T = f), (w = h)), c;
          }
          var y = 0 < v.length,
            b = 0 < g.length;
          return y ? j(e) : e;
        }
        return (
          (me.prototype = _.filters = _.pseudos),
          (_.setFilters = new me()),
          (f = $.tokenize =
            function (e, t) {
              var n,
                i,
                o,
                s,
                r,
                a,
                l,
                u = z[e + " "];
              if (u) return t ? 0 : u.slice(0);
              for (r = e, a = [], l = _.preFilter; r; ) {
                for (s in ((n && !(i = Q.exec(r))) ||
                  (i && (r = r.slice(i[0].length) || r), a.push((o = []))),
                (n = !1),
                (i = ee.exec(r)) &&
                  ((n = i.shift()),
                  o.push({ value: n, type: i[0].replace(E, " ") }),
                  (r = r.slice(n.length))),
                _.filter))
                  !(i = h[s].exec(r)) ||
                    (l[s] && !(i = l[s](i))) ||
                    ((n = i.shift()),
                    o.push({ value: n, type: s, matches: i }),
                    (r = r.slice(n.length)));
                if (!n) break;
              }
              return t ? r.length : r ? $.error(e) : z(e, a).slice(0);
            }),
          (N = $.compile =
            function (e, t) {
              var n,
                i = [],
                o = [],
                s = y[e + " "];
              if (!s) {
                for (n = (t = t || f(e)).length; n--; )
                  ((s = (function e(t) {
                    for (
                      var i,
                        n,
                        o,
                        s = t.length,
                        r = _.relative[t[0].type],
                        a = r || _.relative[" "],
                        l = r ? 1 : 0,
                        u = ge(
                          function (e) {
                            return e === i;
                          },
                          a,
                          !0
                        ),
                        c = ge(
                          function (e) {
                            return -1 < b(i, e);
                          },
                          a,
                          !0
                        ),
                        d = [
                          function (e, t, n) {
                            return (
                              (e =
                                (!r && (n || t !== w)) ||
                                ((i = t).nodeType ? u : c)(e, t, n)),
                              (i = null),
                              e
                            );
                          },
                        ];
                      l < s;
                      l++
                    )
                      if ((n = _.relative[t[l].type])) d = [ge(ve(d), n)];
                      else {
                        if (
                          (n = _.filter[t[l].type].apply(null, t[l].matches))[S]
                        ) {
                          for (o = ++l; o < s && !_.relative[t[o].type]; o++);
                          return be(
                            1 < l && ve(d),
                            1 < l &&
                              I(
                                t
                                  .slice(0, l - 1)
                                  .concat({
                                    value: " " === t[l - 2].type ? "*" : "",
                                  })
                              ).replace(E, "$1"),
                            n,
                            l < o && e(t.slice(l, o)),
                            o < s && e((t = t.slice(o))),
                            o < s && I(t)
                          );
                        }
                        d.push(n);
                      }
                    return ve(d);
                  })(t[n]))[S]
                    ? i
                    : o
                  ).push(s);
                (s = y(e, _e(o, i))).selector = e;
              }
              return s;
            }),
          (B = $.select =
            function (e, t, n, i) {
              var o,
                s,
                r,
                a,
                l,
                u = "function" == typeof e && e,
                c = !i && f((e = u.selector || e));
              if (((n = n || []), 1 === c.length)) {
                if (
                  2 < (s = c[0] = c[0].slice(0)).length &&
                  "ID" === (r = s[0]).type &&
                  9 === t.nodeType &&
                  C &&
                  _.relative[s[1].type]
                ) {
                  if (
                    !(t = (_.find.ID(r.matches[0].replace(O, d), t) || [])[0])
                  )
                    return n;
                  u && (t = t.parentNode),
                    (e = e.slice(s.shift().value.length));
                }
                for (
                  o = h.needsContext.test(e) ? 0 : s.length;
                  o-- && ((r = s[o]), !_.relative[(a = r.type)]);

                )
                  if (
                    (l = _.find[a]) &&
                    (i = l(
                      r.matches[0].replace(O, d),
                      (ae.test(s[0].type) && fe(t.parentNode)) || t
                    ))
                  ) {
                    if ((s.splice(o, 1), (e = i.length && I(s)))) break;
                    return A.apply(n, i), n;
                  }
              }
              return (
                (u || N(e, c))(
                  i,
                  t,
                  !C,
                  n,
                  !t || (ae.test(e) && fe(t.parentNode)) || t
                ),
                n
              );
            }),
          (p.sortStable = S.split("").sort(W).join("") === S),
          (p.detectDuplicates = !!u),
          k(),
          (p.sortDetached = F(function (e) {
            return 1 & e.compareDocumentPosition(x.createElement("fieldset"));
          })),
          F(function (e) {
            return (
              (e.innerHTML = "<a href='#'></a>"),
              "#" === e.firstChild.getAttribute("href")
            );
          }) ||
            de("type|href|height|width", function (e, t, n) {
              if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
          (p.attributes &&
            F(function (e) {
              return (
                (e.innerHTML = "<input/>"),
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
              );
            })) ||
            de("value", function (e, t, n) {
              if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue;
            }),
          F(function (e) {
            return null == e.getAttribute("disabled");
          }) ||
            de(K, function (e, t, n) {
              if (!n)
                return !0 === e[t]
                  ? t.toLowerCase()
                  : (n = e.getAttributeNode(t)) && n.specified
                  ? n.value
                  : null;
            }),
          $
        );
      })(w),
      G =
        ((x.find = e),
        (x.expr = e.selectors),
        (x.expr[":"] = x.expr.pseudos),
        (x.uniqueSort = x.unique = e.uniqueSort),
        (x.text = e.getText),
        (x.isXMLDoc = e.isXML),
        (x.contains = e.contains),
        (x.escapeSelector = e.escape),
        x.expr.match.needsContext);
    function l(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var J = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function Q(e, n, i) {
      return y(n)
        ? x.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== i;
          })
        : n.nodeType
        ? x.grep(e, function (e) {
            return (e === n) !== i;
          })
        : "string" != typeof n
        ? x.grep(e, function (e) {
            return -1 < B.call(n, e) !== i;
          })
        : x.filter(n, e, i);
    }
    (x.filter = function (e, t, n) {
      var i = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType
          ? x.find.matchesSelector(i, e)
            ? [i]
            : []
          : x.find.matches(
              e,
              x.grep(t, function (e) {
                return 1 === e.nodeType;
              })
            )
      );
    }),
      x.fn.extend({
        find: function (e) {
          var t,
            n,
            i = this.length,
            o = this;
          if ("string" != typeof e)
            return this.pushStack(
              x(e).filter(function () {
                for (t = 0; t < i; t++) if (x.contains(o[t], this)) return !0;
              })
            );
          for (n = this.pushStack([]), t = 0; t < i; t++) x.find(e, o[t], n);
          return 1 < i ? x.uniqueSort(n) : n;
        },
        filter: function (e) {
          return this.pushStack(Q(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(Q(this, e || [], !0));
        },
        is: function (e) {
          return !!Q(
            this,
            "string" == typeof e && G.test(e) ? x(e) : e || [],
            !1
          ).length;
        },
      });
    var ee,
      te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      ne =
        (((x.fn.init = function (e, t, n) {
          if (!e) return this;
          if (((n = n || ee), "string" != typeof e))
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : y(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(x)
              : x.makeArray(e, this);
          if (
            !(i =
              "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
                ? [null, e, null]
                : te.exec(e)) ||
            (!i[1] && t)
          )
            return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
          if (i[1]) {
            if (
              ((t = t instanceof x ? t[0] : t),
              x.merge(
                this,
                x.parseHTML(
                  i[1],
                  t && t.nodeType ? t.ownerDocument || t : k,
                  !0
                )
              ),
              J.test(i[1]) && x.isPlainObject(t))
            )
              for (var i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
          }
          return (
            (n = k.getElementById(i[2])) && ((this[0] = n), (this.length = 1)),
            this
          );
        }).prototype = x.fn),
        (ee = x(k)),
        /^(?:parents|prev(?:Until|All))/),
      ie = { children: !0, contents: !0, next: !0, prev: !0 };
    function oe(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; );
      return e;
    }
    x.fn.extend({
      has: function (e) {
        var t = x(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) if (x.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        var n,
          i = 0,
          o = this.length,
          s = [],
          r = "string" != typeof e && x(e);
        if (!G.test(e))
          for (; i < o; i++)
            for (n = this[i]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (r
                  ? -1 < r.index(n)
                  : 1 === n.nodeType && x.find.matchesSelector(n, e))
              ) {
                s.push(n);
                break;
              }
        return this.pushStack(1 < s.length ? x.uniqueSort(s) : s);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? B.call(x(e), this[0])
            : B.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      },
    }),
      x.each(
        {
          parent: function (e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null;
          },
          parents: function (e) {
            return i(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return i(e, "parentNode", n);
          },
          next: function (e) {
            return oe(e, "nextSibling");
          },
          prev: function (e) {
            return oe(e, "previousSibling");
          },
          nextAll: function (e) {
            return i(e, "nextSibling");
          },
          prevAll: function (e) {
            return i(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return i(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return i(e, "previousSibling", n);
          },
          siblings: function (e) {
            return X((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return X(e.firstChild);
          },
          contents: function (e) {
            return l(e, "iframe")
              ? e.contentDocument
              : (l(e, "template") && (e = e.content || e),
                x.merge([], e.childNodes));
          },
        },
        function (i, o) {
          x.fn[i] = function (e, t) {
            var n = x.map(this, o, e);
            return (
              (t = "Until" !== i.slice(-5) ? e : t) &&
                "string" == typeof t &&
                (n = x.filter(t, n)),
              1 < this.length &&
                (ie[i] || x.uniqueSort(n), ne.test(i) && n.reverse()),
              this.pushStack(n)
            );
          };
        }
      );
    var C = /[^\x20\t\r\n\f]+/g;
    function c(e) {
      return e;
    }
    function se(e) {
      throw e;
    }
    function re(e, t, n, i) {
      var o;
      try {
        e && y((o = e.promise))
          ? o.call(e).done(t).fail(n)
          : e && y((o = e.then))
          ? o.call(e, t, n)
          : t.apply(void 0, [e].slice(i));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }
    (x.Callbacks = function (i) {
      var e, n;
      i =
        "string" == typeof i
          ? ((e = i),
            (n = {}),
            x.each(e.match(C) || [], function (e, t) {
              n[t] = !0;
            }),
            n)
          : x.extend({}, i);
      function o() {
        for (a = a || i.once, r = s = !0; u.length; c = -1)
          for (t = u.shift(); ++c < l.length; )
            !1 === l[c].apply(t[0], t[1]) &&
              i.stopOnFalse &&
              ((c = l.length), (t = !1));
        i.memory || (t = !1), (s = !1), a && (l = t ? [] : "");
      }
      var s,
        t,
        r,
        a,
        l = [],
        u = [],
        c = -1,
        d = {
          add: function () {
            return (
              l &&
                (t && !s && ((c = l.length - 1), u.push(t)),
                (function n(e) {
                  x.each(e, function (e, t) {
                    y(t)
                      ? (i.unique && d.has(t)) || l.push(t)
                      : t && t.length && "string" !== f(t) && n(t);
                  });
                })(arguments),
                t && !s && o()),
              this
            );
          },
          remove: function () {
            return (
              x.each(arguments, function (e, t) {
                for (var n; -1 < (n = x.inArray(t, l, n)); )
                  l.splice(n, 1), n <= c && c--;
              }),
              this
            );
          },
          has: function (e) {
            return e ? -1 < x.inArray(e, l) : 0 < l.length;
          },
          empty: function () {
            return (l = l && []), this;
          },
          disable: function () {
            return (a = u = []), (l = t = ""), this;
          },
          disabled: function () {
            return !l;
          },
          lock: function () {
            return (a = u = []), t || s || (l = t = ""), this;
          },
          locked: function () {
            return !!a;
          },
          fireWith: function (e, t) {
            return (
              a ||
                ((t = [e, (t = t || []).slice ? t.slice() : t]),
                u.push(t),
                s || o()),
              this
            );
          },
          fire: function () {
            return d.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!r;
          },
        };
      return d;
    }),
      x.extend({
        Deferred: function (e) {
          var s = [
              [
                "notify",
                "progress",
                x.Callbacks("memory"),
                x.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                x.Callbacks("once memory"),
                x.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                x.Callbacks("once memory"),
                x.Callbacks("once memory"),
                1,
                "rejected",
              ],
            ],
            o = "pending",
            r = {
              state: function () {
                return o;
              },
              always: function () {
                return a.done(arguments).fail(arguments), this;
              },
              catch: function (e) {
                return r.then(null, e);
              },
              pipe: function () {
                var o = arguments;
                return x
                  .Deferred(function (i) {
                    x.each(s, function (e, t) {
                      var n = y(o[t[4]]) && o[t[4]];
                      a[t[1]](function () {
                        var e = n && n.apply(this, arguments);
                        e && y(e.promise)
                          ? e
                              .promise()
                              .progress(i.notify)
                              .done(i.resolve)
                              .fail(i.reject)
                          : i[t[0] + "With"](this, n ? [e] : arguments);
                      });
                    }),
                      (o = null);
                  })
                  .promise();
              },
              then: function (t, n, i) {
                var l = 0;
                function u(o, s, r, a) {
                  return function () {
                    function e() {
                      var e, t;
                      if (!(o < l)) {
                        if ((e = r.apply(n, i)) === s.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          y(t)
                            ? a
                              ? t.call(e, u(l, s, c, a), u(l, s, se, a))
                              : (l++,
                                t.call(
                                  e,
                                  u(l, s, c, a),
                                  u(l, s, se, a),
                                  u(l, s, c, s.notifyWith)
                                ))
                            : (r !== c && ((n = void 0), (i = [e])),
                              (a || s.resolveWith)(n, i));
                      }
                    }
                    var n = this,
                      i = arguments,
                      t = a
                        ? e
                        : function () {
                            try {
                              e();
                            } catch (e) {
                              x.Deferred.exceptionHook &&
                                x.Deferred.exceptionHook(e, t.stackTrace),
                                l <= o + 1 &&
                                  (r !== se && ((n = void 0), (i = [e])),
                                  s.rejectWith(n, i));
                            }
                          };
                    o
                      ? t()
                      : (x.Deferred.getStackHook &&
                          (t.stackTrace = x.Deferred.getStackHook()),
                        w.setTimeout(t));
                  };
                }
                return x
                  .Deferred(function (e) {
                    s[0][3].add(u(0, e, y(i) ? i : c, e.notifyWith)),
                      s[1][3].add(u(0, e, y(t) ? t : c)),
                      s[2][3].add(u(0, e, y(n) ? n : se));
                  })
                  .promise();
              },
              promise: function (e) {
                return null != e ? x.extend(e, r) : r;
              },
            },
            a = {};
          return (
            x.each(s, function (e, t) {
              var n = t[2],
                i = t[5];
              (r[t[1]] = n.add),
                i &&
                  n.add(
                    function () {
                      o = i;
                    },
                    s[3 - e][2].disable,
                    s[3 - e][3].disable,
                    s[0][2].lock,
                    s[0][3].lock
                  ),
                n.add(t[3].fire),
                (a[t[0]] = function () {
                  return (
                    a[t[0] + "With"](this === a ? void 0 : this, arguments),
                    this
                  );
                }),
                (a[t[0] + "With"] = n.fireWith);
            }),
            r.promise(a),
            e && e.call(a, a),
            a
          );
        },
        when: function (e) {
          function t(t) {
            return function (e) {
              (o[t] = this),
                (s[t] = 1 < arguments.length ? a.call(arguments) : e),
                --n || r.resolveWith(o, s);
            };
          }
          var n = arguments.length,
            i = n,
            o = Array(i),
            s = a.call(arguments),
            r = x.Deferred();
          if (
            n <= 1 &&
            (re(e, r.done(t(i)).resolve, r.reject, !n),
            "pending" === r.state() || y(s[i] && s[i].then))
          )
            return r.then();
          for (; i--; ) re(s[i], t(i), r.reject);
          return r.promise();
        },
      });
    var ae = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
      le =
        ((x.Deferred.exceptionHook = function (e, t) {
          w.console &&
            w.console.warn &&
            e &&
            ae.test(e.name) &&
            w.console.warn(
              "jQuery.Deferred exception: " + e.message,
              e.stack,
              t
            );
        }),
        (x.readyException = function (e) {
          w.setTimeout(function () {
            throw e;
          });
        }),
        x.Deferred());
    function ue() {
      k.removeEventListener("DOMContentLoaded", ue),
        w.removeEventListener("load", ue),
        x.ready();
    }
    (x.fn.ready = function (e) {
      return (
        le.then(e).catch(function (e) {
          x.readyException(e);
        }),
        this
      );
    }),
      x.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
          (!0 === e ? --x.readyWait : x.isReady) ||
            ((x.isReady = !0) !== e && 0 < --x.readyWait) ||
            le.resolveWith(k, [x]);
        },
      }),
      (x.ready.then = le.then),
      "complete" === k.readyState ||
      ("loading" !== k.readyState && !k.documentElement.doScroll)
        ? w.setTimeout(x.ready)
        : (k.addEventListener("DOMContentLoaded", ue),
          w.addEventListener("load", ue));
    function d(e, t, n, i, o, s, r) {
      var a = 0,
        l = e.length,
        u = null == n;
      if ("object" === f(n))
        for (a in ((o = !0), n)) d(e, t, a, n[a], !0, s, r);
      else if (
        void 0 !== i &&
        ((o = !0),
        y(i) || (r = !0),
        (t = u
          ? r
            ? (t.call(e, i), null)
            : ((u = t),
              function (e, t, n) {
                return u.call(x(e), n);
              })
          : t))
      )
        for (; a < l; a++) t(e[a], n, r ? i : i.call(e[a], a, t(e[a], n)));
      return o ? e : u ? t.call(e) : l ? t(e[0], n) : s;
    }
    var ce = /^-ms-/,
      de = /-([a-z])/g;
    function he(e, t) {
      return t.toUpperCase();
    }
    function b(e) {
      return e.replace(ce, "ms-").replace(de, he);
    }
    function pe(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    }
    function t() {
      this.expando = x.expando + t.uid++;
    }
    (t.uid = 1),
      (t.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          return (
            t ||
              ((t = {}),
              pe(e) &&
                (e.nodeType
                  ? (e[this.expando] = t)
                  : Object.defineProperty(e, this.expando, {
                      value: t,
                      configurable: !0,
                    }))),
            t
          );
        },
        set: function (e, t, n) {
          var i,
            o = this.cache(e);
          if ("string" == typeof t) o[b(t)] = n;
          else for (i in t) o[b(i)] = t[i];
          return o;
        },
        get: function (e, t) {
          return void 0 === t
            ? this.cache(e)
            : e[this.expando] && e[this.expando][b(t)];
        },
        access: function (e, t, n) {
          return void 0 === t || (t && "string" == typeof t && void 0 === n)
            ? this.get(e, t)
            : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function (e, t) {
          var n,
            i = e[this.expando];
          if (void 0 !== i) {
            if (void 0 !== t) {
              n = (t = Array.isArray(t)
                ? t.map(b)
                : (t = b(t)) in i
                ? [t]
                : t.match(C) || []).length;
              for (; n--; ) delete i[t[n]];
            }
            (void 0 !== t && !x.isEmptyObject(i)) ||
              (e.nodeType
                ? (e[this.expando] = void 0)
                : delete e[this.expando]);
          }
        },
        hasData: function (e) {
          e = e[this.expando];
          return void 0 !== e && !x.isEmptyObject(e);
        },
      });
    var v = new t(),
      u = new t(),
      fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      me = /[A-Z]/g;
    function ge(e, t, n) {
      var i, o;
      if (void 0 === n && 1 === e.nodeType)
        if (
          ((i = "data-" + t.replace(me, "-$&").toLowerCase()),
          "string" == typeof (n = e.getAttribute(i)))
        ) {
          try {
            n =
              "true" === (o = n) ||
              ("false" !== o &&
                ("null" === o
                  ? null
                  : o === +o + ""
                  ? +o
                  : fe.test(o)
                  ? JSON.parse(o)
                  : o));
          } catch (e) {}
          u.set(e, t, n);
        } else n = void 0;
      return n;
    }
    x.extend({
      hasData: function (e) {
        return u.hasData(e) || v.hasData(e);
      },
      data: function (e, t, n) {
        return u.access(e, t, n);
      },
      removeData: function (e, t) {
        u.remove(e, t);
      },
      _data: function (e, t, n) {
        return v.access(e, t, n);
      },
      _removeData: function (e, t) {
        v.remove(e, t);
      },
    }),
      x.fn.extend({
        data: function (n, e) {
          var t,
            i,
            o,
            s = this[0],
            r = s && s.attributes;
          if (void 0 !== n)
            return "object" == typeof n
              ? this.each(function () {
                  u.set(this, n);
                })
              : d(
                  this,
                  function (e) {
                    var t;
                    if (s && void 0 === e)
                      return void 0 !== (t = u.get(s, n)) ||
                        void 0 !== (t = ge(s, n))
                        ? t
                        : void 0;
                    this.each(function () {
                      u.set(this, n, e);
                    });
                  },
                  null,
                  e,
                  1 < arguments.length,
                  null,
                  !0
                );
          if (
            this.length &&
            ((o = u.get(s)), 1 === s.nodeType && !v.get(s, "hasDataAttrs"))
          ) {
            for (t = r.length; t--; )
              r[t] &&
                0 === (i = r[t].name).indexOf("data-") &&
                ((i = b(i.slice(5))), ge(s, i, o[i]));
            v.set(s, "hasDataAttrs", !0);
          }
          return o;
        },
        removeData: function (e) {
          return this.each(function () {
            u.remove(this, e);
          });
        },
      }),
      x.extend({
        queue: function (e, t, n) {
          var i;
          if (e)
            return (
              (i = v.get(e, (t = (t || "fx") + "queue"))),
              n &&
                (!i || Array.isArray(n)
                  ? (i = v.access(e, t, x.makeArray(n)))
                  : i.push(n)),
              i || []
            );
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = x.queue(e, t),
            i = n.length,
            o = n.shift(),
            s = x._queueHooks(e, t);
          "inprogress" === o && ((o = n.shift()), i--),
            o &&
              ("fx" === t && n.unshift("inprogress"),
              delete s.stop,
              o.call(
                e,
                function () {
                  x.dequeue(e, t);
                },
                s
              )),
            !i && s && s.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return (
            v.get(e, n) ||
            v.access(e, n, {
              empty: x.Callbacks("once memory").add(function () {
                v.remove(e, [t + "queue", n]);
              }),
            })
          );
        },
      }),
      x.fn.extend({
        queue: function (t, n) {
          var e = 2;
          return (
            "string" != typeof t && ((n = t), (t = "fx"), e--),
            arguments.length < e
              ? x.queue(this[0], t)
              : void 0 === n
              ? this
              : this.each(function () {
                  var e = x.queue(this, t, n);
                  x._queueHooks(this, t),
                    "fx" === t && "inprogress" !== e[0] && x.dequeue(this, t);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            x.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          function n() {
            --o || s.resolveWith(r, [r]);
          }
          var i,
            o = 1,
            s = x.Deferred(),
            r = this,
            a = this.length;
          for (
            "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
            a--;

          )
            (i = v.get(r[a], e + "queueHooks")) &&
              i.empty &&
              (o++, i.empty.add(n));
          return n(), s.promise(t);
        },
      });
    function ve(e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display &&
          x.contains(e.ownerDocument, e) &&
          "none" === x.css(e, "display"))
      );
    }
    function ye(e, t, n, i) {
      var o,
        s = {};
      for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((n = n.apply(e, i || [])), t)) e.style[o] = s[o];
      return n;
    }
    var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      h = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
      p = ["Top", "Right", "Bottom", "Left"];
    function be(e, t, n, i) {
      var o,
        s,
        r = 20,
        a = i
          ? function () {
              return i.cur();
            }
          : function () {
              return x.css(e, t, "");
            },
        l = a(),
        u = (n && n[3]) || (x.cssNumber[t] ? "" : "px"),
        c = (x.cssNumber[t] || ("px" !== u && +l)) && h.exec(x.css(e, t));
      if (c && c[3] !== u) {
        for (u = u || c[3], c = +(l /= 2) || 1; r--; )
          x.style(e, t, c + u),
            (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 && (r = 0),
            (c /= s);
        x.style(e, t, (c *= 2) + u), (n = n || []);
      }
      return (
        n &&
          ((c = +c || +l || 0),
          (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
          i && ((i.unit = u), (i.start = c), (i.end = o))),
        o
      );
    }
    var _e = {};
    function _(e, t) {
      for (var n, i, o, s, r, a = [], l = 0, u = e.length; l < u; l++)
        (i = e[l]).style &&
          ((n = i.style.display),
          t
            ? ("none" === n &&
                ((a[l] = v.get(i, "display") || null),
                a[l] || (i.style.display = "")),
              "" === i.style.display &&
                ve(i) &&
                (a[l] =
                  ((r = s = void 0),
                  (s = (o = i).ownerDocument),
                  (o = o.nodeName),
                  (r = _e[o]) ||
                    ((s = s.body.appendChild(s.createElement(o))),
                    (r = x.css(s, "display")),
                    s.parentNode.removeChild(s),
                    (_e[o] = r = "none" === r ? "block" : r)))))
            : "none" !== n && ((a[l] = "none"), v.set(i, "display", n)));
      for (l = 0; l < u; l++) null != a[l] && (e[l].style.display = a[l]);
      return e;
    }
    x.fn.extend({
      show: function () {
        return _(this, !0);
      },
      hide: function () {
        return _(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              ve(this) ? x(this).show() : x(this).hide();
            });
      },
    });
    var we = /^(?:checkbox|radio)$/i,
      ke = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      xe = /^$|^module$|\/(?:java|ecma)script/i,
      S = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
    function T(e, t) {
      var n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : [];
      return void 0 === t || (t && l(e, t)) ? x.merge([e], n) : n;
    }
    function Ce(e, t) {
      for (var n = 0, i = e.length; n < i; n++)
        v.set(e[n], "globalEval", !t || v.get(t[n], "globalEval"));
    }
    (S.optgroup = S.option),
      (S.tbody = S.tfoot = S.colgroup = S.caption = S.thead),
      (S.th = S.td);
    var Se = /<|&#?\w+;/;
    function Te(e, t, n, i, o) {
      for (
        var s,
          r,
          a,
          l,
          u,
          c = t.createDocumentFragment(),
          d = [],
          h = 0,
          p = e.length;
        h < p;
        h++
      )
        if ((s = e[h]) || 0 === s)
          if ("object" === f(s)) x.merge(d, s.nodeType ? [s] : s);
          else if (Se.test(s)) {
            for (
              r = r || c.appendChild(t.createElement("div")),
                a = (ke.exec(s) || ["", ""])[1].toLowerCase(),
                a = S[a] || S._default,
                r.innerHTML = a[1] + x.htmlPrefilter(s) + a[2],
                u = a[0];
              u--;

            )
              r = r.lastChild;
            x.merge(d, r.childNodes), ((r = c.firstChild).textContent = "");
          } else d.push(t.createTextNode(s));
      for (c.textContent = "", h = 0; (s = d[h++]); )
        if (i && -1 < x.inArray(s, i)) o && o.push(s);
        else if (
          ((l = x.contains(s.ownerDocument, s)),
          (r = T(c.appendChild(s), "script")),
          l && Ce(r),
          n)
        )
          for (u = 0; (s = r[u++]); ) xe.test(s.type || "") && n.push(s);
      return c;
    }
    ($ = k.createDocumentFragment().appendChild(k.createElement("div"))),
      (r = k.createElement("input")).setAttribute("type", "radio"),
      r.setAttribute("checked", "checked"),
      r.setAttribute("name", "t"),
      $.appendChild(r),
      (g.checkClone = $.cloneNode(!0).cloneNode(!0).lastChild.checked),
      ($.innerHTML = "<textarea>x</textarea>"),
      (g.noCloneChecked = !!$.cloneNode(!0).lastChild.defaultValue);
    var Ae = k.documentElement,
      Ee = /^key/,
      De = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Oe = /^([^.]*)(?:\.(.+)|)/;
    function $e() {
      return !0;
    }
    function A() {
      return !1;
    }
    function je() {
      try {
        return k.activeElement;
      } catch (e) {}
    }
    function Fe(e, t, n, i, o, s) {
      var r, a;
      if ("object" == typeof t) {
        for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
          Fe(e, a, n, i, t[a], s);
        return e;
      }
      if (
        (null == i && null == o
          ? ((o = n), (i = n = void 0))
          : null == o &&
            ("string" == typeof n
              ? ((o = i), (i = void 0))
              : ((o = i), (i = n), (n = void 0))),
        !1 === o)
      )
        o = A;
      else if (!o) return e;
      return (
        1 === s &&
          ((r = o),
          ((o = function (e) {
            return x().off(e), r.apply(this, arguments);
          }).guid = r.guid || (r.guid = x.guid++))),
        e.each(function () {
          x.event.add(this, t, o, i, n);
        })
      );
    }
    (x.event = {
      global: {},
      add: function (t, e, n, i, o) {
        var s,
          r,
          a,
          l,
          u,
          c,
          d,
          h,
          p,
          f = v.get(t);
        if (f)
          for (
            n.handler && ((n = (s = n).handler), (o = s.selector)),
              o && x.find.matchesSelector(Ae, o),
              n.guid || (n.guid = x.guid++),
              (a = f.events) || (a = f.events = {}),
              (r = f.handle) ||
                (r = f.handle =
                  function (e) {
                    return void 0 !== x && x.event.triggered !== e.type
                      ? x.event.dispatch.apply(t, arguments)
                      : void 0;
                  }),
              l = (e = (e || "").match(C) || [""]).length;
            l--;

          )
            (d = p = (h = Oe.exec(e[l]) || [])[1]),
              (h = (h[2] || "").split(".").sort()),
              d &&
                ((u = x.event.special[d] || {}),
                (d = (o ? u.delegateType : u.bindType) || d),
                (u = x.event.special[d] || {}),
                (p = x.extend(
                  {
                    type: d,
                    origType: p,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && x.expr.match.needsContext.test(o),
                    namespace: h.join("."),
                  },
                  s
                )),
                (c = a[d]) ||
                  (((c = a[d] = []).delegateCount = 0),
                  (u.setup && !1 !== u.setup.call(t, i, h, r)) ||
                    (t.addEventListener && t.addEventListener(d, r))),
                u.add &&
                  (u.add.call(t, p),
                  p.handler.guid || (p.handler.guid = n.guid)),
                o ? c.splice(c.delegateCount++, 0, p) : c.push(p),
                (x.event.global[d] = !0));
      },
      remove: function (e, t, n, i, o) {
        var s,
          r,
          a,
          l,
          u,
          c,
          d,
          h,
          p,
          f,
          m,
          g = v.hasData(e) && v.get(e);
        if (g && (l = g.events)) {
          for (u = (t = (t || "").match(C) || [""]).length; u--; )
            if (
              ((p = m = (a = Oe.exec(t[u]) || [])[1]),
              (f = (a[2] || "").split(".").sort()),
              p)
            ) {
              for (
                d = x.event.special[p] || {},
                  h = l[(p = (i ? d.delegateType : d.bindType) || p)] || [],
                  a =
                    a[2] &&
                    new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  r = s = h.length;
                s--;

              )
                (c = h[s]),
                  (!o && m !== c.origType) ||
                    (n && n.guid !== c.guid) ||
                    (a && !a.test(c.namespace)) ||
                    (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                    (h.splice(s, 1),
                    c.selector && h.delegateCount--,
                    d.remove && d.remove.call(e, c));
              r &&
                !h.length &&
                ((d.teardown && !1 !== d.teardown.call(e, f, g.handle)) ||
                  x.removeEvent(e, p, g.handle),
                delete l[p]);
            } else for (p in l) x.event.remove(e, p + t[u], n, i, !0);
          x.isEmptyObject(l) && v.remove(e, "handle events");
        }
      },
      dispatch: function (e) {
        var t,
          n,
          i,
          o,
          s,
          r = x.event.fix(e),
          a = new Array(arguments.length),
          e = (v.get(this, "events") || {})[r.type] || [],
          l = x.event.special[r.type] || {};
        for (a[0] = r, t = 1; t < arguments.length; t++) a[t] = arguments[t];
        if (
          ((r.delegateTarget = this),
          !l.preDispatch || !1 !== l.preDispatch.call(this, r))
        ) {
          for (
            s = x.event.handlers.call(this, r, e), t = 0;
            (i = s[t++]) && !r.isPropagationStopped();

          )
            for (
              r.currentTarget = i.elem, n = 0;
              (o = i.handlers[n++]) && !r.isImmediatePropagationStopped();

            )
              (r.rnamespace && !r.rnamespace.test(o.namespace)) ||
                ((r.handleObj = o),
                (r.data = o.data),
                void 0 !==
                  (o = (
                    (x.event.special[o.origType] || {}).handle || o.handler
                  ).apply(i.elem, a)) &&
                  !1 === (r.result = o) &&
                  (r.preventDefault(), r.stopPropagation()));
          return l.postDispatch && l.postDispatch.call(this, r), r.result;
        }
      },
      handlers: function (e, t) {
        var n,
          i,
          o,
          s,
          r,
          a = [],
          l = t.delegateCount,
          u = e.target;
        if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
          for (; u !== this; u = u.parentNode || this)
            if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
              for (s = [], r = {}, n = 0; n < l; n++)
                void 0 === r[(o = (i = t[n]).selector + " ")] &&
                  (r[o] = i.needsContext
                    ? -1 < x(o, this).index(u)
                    : x.find(o, this, null, [u]).length),
                  r[o] && s.push(i);
              s.length && a.push({ elem: u, handlers: s });
            }
        return (
          (u = this),
          l < t.length && a.push({ elem: u, handlers: t.slice(l) }),
          a
        );
      },
      addProp: function (t, e) {
        Object.defineProperty(x.Event.prototype, t, {
          enumerable: !0,
          configurable: !0,
          get: y(e)
            ? function () {
                if (this.originalEvent) return e(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[t];
              },
          set: function (e) {
            Object.defineProperty(this, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e,
            });
          },
        });
      },
      fix: function (e) {
        return e[x.expando] ? e : new x.Event(e);
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            if (this !== je() && this.focus) return this.focus(), !1;
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            if (this === je() && this.blur) return this.blur(), !1;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            if ("checkbox" === this.type && this.click && l(this, "input"))
              return this.click(), !1;
          },
          _default: function (e) {
            return l(e.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
    }),
      (x.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }),
      (x.Event = function (e, t) {
        if (!(this instanceof x.Event)) return new x.Event(e, t);
        e && e.type
          ? ((this.originalEvent = e),
            (this.type = e.type),
            (this.isDefaultPrevented =
              e.defaultPrevented ||
              (void 0 === e.defaultPrevented && !1 === e.returnValue)
                ? $e
                : A),
            (this.target =
              e.target && 3 === e.target.nodeType
                ? e.target.parentNode
                : e.target),
            (this.currentTarget = e.currentTarget),
            (this.relatedTarget = e.relatedTarget))
          : (this.type = e),
          t && x.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || Date.now()),
          (this[x.expando] = !0);
      }),
      (x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: A,
        isPropagationStopped: A,
        isImmediatePropagationStopped: A,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = $e),
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = $e),
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = $e),
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      x.each(
        {
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: function (e) {
            var t = e.button;
            return null == e.which && Ee.test(e.type)
              ? null != e.charCode
                ? e.charCode
                : e.keyCode
              : !e.which && void 0 !== t && De.test(e.type)
              ? 1 & t
                ? 1
                : 2 & t
                ? 3
                : 4 & t
                ? 2
                : 0
              : e.which;
          },
        },
        x.event.addProp
      ),
      x.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (e, o) {
          x.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function (e) {
              var t,
                n = e.relatedTarget,
                i = e.handleObj;
              return (
                (n && (n === this || x.contains(this, n))) ||
                  ((e.type = i.origType),
                  (t = i.handler.apply(this, arguments)),
                  (e.type = o)),
                t
              );
            },
          };
        }
      ),
      x.fn.extend({
        on: function (e, t, n, i) {
          return Fe(this, e, t, n, i);
        },
        one: function (e, t, n, i) {
          return Fe(this, e, t, n, i, 1);
        },
        off: function (e, t, n) {
          var i, o;
          if (e && e.preventDefault && e.handleObj)
            return (
              (i = e.handleObj),
              x(e.delegateTarget).off(
                i.namespace ? i.origType + "." + i.namespace : i.origType,
                i.selector,
                i.handler
              ),
              this
            );
          if ("object" != typeof e)
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = A),
              this.each(function () {
                x.event.remove(this, e, n, t);
              })
            );
          for (o in e) this.off(o, t, e[o]);
          return this;
        },
      });
    var Me =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ie = /<script|<style|<link/i,
      Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Re(e, t) {
      return (
        (l(e, "table") &&
          l(11 !== t.nodeType ? t : t.firstChild, "tr") &&
          x(e).children("tbody")[0]) ||
        e
      );
    }
    function Ne(e) {
      return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function Be(e) {
      return (
        "true/" === (e.type || "").slice(0, 5)
          ? (e.type = e.type.slice(5))
          : e.removeAttribute("type"),
        e
      );
    }
    function He(e, t) {
      var n, i, o, s, r, a;
      if (1 === t.nodeType) {
        if (
          v.hasData(e) &&
          ((s = v.access(e)), (r = v.set(t, s)), (a = s.events))
        )
          for (o in (delete r.handle, (r.events = {}), a))
            for (n = 0, i = a[o].length; n < i; n++) x.event.add(t, o, a[o][n]);
        u.hasData(e) && ((s = u.access(e)), (r = x.extend({}, s)), u.set(t, r));
      }
    }
    function E(n, i, o, s) {
      i = R.apply([], i);
      var e,
        t,
        r,
        a,
        l,
        u,
        c = 0,
        d = n.length,
        h = d - 1,
        p = i[0],
        f = y(p);
      if (f || (1 < d && "string" == typeof p && !g.checkClone && Pe.test(p)))
        return n.each(function (e) {
          var t = n.eq(e);
          f && (i[0] = p.call(this, e, t.html())), E(t, i, o, s);
        });
      if (
        d &&
        ((t = (e = Te(i, n[0].ownerDocument, !1, n, s)).firstChild),
        1 === e.childNodes.length && (e = t),
        t || s)
      ) {
        for (a = (r = x.map(T(e, "script"), Ne)).length; c < d; c++)
          (l = e),
            c !== h &&
              ((l = x.clone(l, !0, !0)), a && x.merge(r, T(l, "script"))),
            o.call(n[c], l, c);
        if (a)
          for (
            u = r[r.length - 1].ownerDocument, x.map(r, Be), c = 0;
            c < a;
            c++
          )
            (l = r[c]),
              xe.test(l.type || "") &&
                !v.access(l, "globalEval") &&
                x.contains(u, l) &&
                (l.src && "module" !== (l.type || "").toLowerCase()
                  ? x._evalUrl && x._evalUrl(l.src)
                  : Y(l.textContent.replace(Le, ""), u, l));
      }
      return n;
    }
    function qe(e, t, n) {
      for (var i, o = t ? x.filter(t, e) : e, s = 0; null != (i = o[s]); s++)
        n || 1 !== i.nodeType || x.cleanData(T(i)),
          i.parentNode &&
            (n && x.contains(i.ownerDocument, i) && Ce(T(i, "script")),
            i.parentNode.removeChild(i));
      return e;
    }
    x.extend({
      htmlPrefilter: function (e) {
        return e.replace(Me, "<$1></$2>");
      },
      clone: function (e, t, n) {
        var i,
          o,
          s,
          r,
          a,
          l,
          u,
          c = e.cloneNode(!0),
          d = x.contains(e.ownerDocument, e);
        if (
          !(
            g.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            x.isXMLDoc(e)
          )
        )
          for (r = T(c), i = 0, o = (s = T(e)).length; i < o; i++)
            (a = s[i]),
              (l = r[i]),
              (u = void 0),
              "input" === (u = l.nodeName.toLowerCase()) && we.test(a.type)
                ? (l.checked = a.checked)
                : ("input" !== u && "textarea" !== u) ||
                  (l.defaultValue = a.defaultValue);
        if (t)
          if (n)
            for (s = s || T(e), r = r || T(c), i = 0, o = s.length; i < o; i++)
              He(s[i], r[i]);
          else He(e, c);
        return (
          0 < (r = T(c, "script")).length && Ce(r, !d && T(e, "script")), c
        );
      },
      cleanData: function (e) {
        for (
          var t, n, i, o = x.event.special, s = 0;
          void 0 !== (n = e[s]);
          s++
        )
          if (pe(n)) {
            if ((t = n[v.expando])) {
              if (t.events)
                for (i in t.events)
                  o[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
              n[v.expando] = void 0;
            }
            n[u.expando] && (n[u.expando] = void 0);
          }
      },
    }),
      x.fn.extend({
        detach: function (e) {
          return qe(this, e, !0);
        },
        remove: function (e) {
          return qe(this, e);
        },
        text: function (e) {
          return d(
            this,
            function (e) {
              return void 0 === e
                ? x.text(this)
                : this.empty().each(function () {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      (this.textContent = e);
                  });
            },
            null,
            e,
            arguments.length
          );
        },
        append: function () {
          return E(this, arguments, function (e) {
            (1 !== this.nodeType &&
              11 !== this.nodeType &&
              9 !== this.nodeType) ||
              Re(this, e).appendChild(e);
          });
        },
        prepend: function () {
          return E(this, arguments, function (e) {
            var t;
            (1 !== this.nodeType &&
              11 !== this.nodeType &&
              9 !== this.nodeType) ||
              (t = Re(this, e)).insertBefore(e, t.firstChild);
          });
        },
        before: function () {
          return E(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return E(this, arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++)
            1 === e.nodeType && (x.cleanData(T(e, !1)), (e.textContent = ""));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null != e && e),
            (t = null == t ? e : t),
            this.map(function () {
              return x.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return d(
            this,
            function (e) {
              var t = this[0] || {},
                n = 0,
                i = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if (
                "string" == typeof e &&
                !Ie.test(e) &&
                !S[(ke.exec(e) || ["", ""])[1].toLowerCase()]
              ) {
                e = x.htmlPrefilter(e);
                try {
                  for (; n < i; n++)
                    1 === (t = this[n] || {}).nodeType &&
                      (x.cleanData(T(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (e) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function () {
          var n = [];
          return E(
            this,
            arguments,
            function (e) {
              var t = this.parentNode;
              x.inArray(this, n) < 0 &&
                (x.cleanData(T(this)), t && t.replaceChild(e, this));
            },
            n
          );
        },
      }),
      x.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, r) {
          x.fn[e] = function (e) {
            for (var t, n = [], i = x(e), o = i.length - 1, s = 0; s <= o; s++)
              (t = s === o ? this : this.clone(!0)),
                x(i[s])[r](t),
                N.apply(n, t.get());
            return this.pushStack(n);
          };
        }
      );
    function ze(e) {
      var t = e.ownerDocument.defaultView;
      return (t = t && t.opener ? t : w).getComputedStyle(e);
    }
    var We,
      Ue,
      Ve,
      Ye,
      Ze,
      Ke,
      n,
      Xe = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
      Ge = new RegExp(p.join("|"), "i");
    function o() {
      var e;
      n &&
        ((Ke.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
        (n.style.cssText =
          "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
        Ae.appendChild(Ke).appendChild(n),
        (e = w.getComputedStyle(n)),
        (We = "1%" !== e.top),
        (Ze = 12 === Je(e.marginLeft)),
        (n.style.right = "60%"),
        (Ye = 36 === Je(e.right)),
        (Ue = 36 === Je(e.width)),
        (n.style.position = "absolute"),
        (Ve = 36 === n.offsetWidth || "absolute"),
        Ae.removeChild(Ke),
        (n = null));
    }
    function Je(e) {
      return Math.round(parseFloat(e));
    }
    function D(e, t, n) {
      var i,
        o,
        s = e.style;
      return (
        (n = n || ze(e)) &&
          ("" !== (o = n.getPropertyValue(t) || n[t]) ||
            x.contains(e.ownerDocument, e) ||
            (o = x.style(e, t)),
          !g.pixelBoxStyles() &&
            Xe.test(o) &&
            Ge.test(t) &&
            ((e = s.width),
            (t = s.minWidth),
            (i = s.maxWidth),
            (s.minWidth = s.maxWidth = s.width = o),
            (o = n.width),
            (s.width = e),
            (s.minWidth = t),
            (s.maxWidth = i))),
        void 0 !== o ? o + "" : o
      );
    }
    function Qe(e, t) {
      return {
        get: function () {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get;
        },
      };
    }
    (Ke = k.createElement("div")),
      (n = k.createElement("div")).style &&
        ((n.style.backgroundClip = "content-box"),
        (n.cloneNode(!0).style.backgroundClip = ""),
        (g.clearCloneStyle = "content-box" === n.style.backgroundClip),
        x.extend(g, {
          boxSizingReliable: function () {
            return o(), Ue;
          },
          pixelBoxStyles: function () {
            return o(), Ye;
          },
          pixelPosition: function () {
            return o(), We;
          },
          reliableMarginLeft: function () {
            return o(), Ze;
          },
          scrollboxSize: function () {
            return o(), Ve;
          },
        }));
    var et = /^(none|table(?!-c[ea]).+)/,
      tt = /^--/,
      nt = { position: "absolute", visibility: "hidden", display: "block" },
      it = { letterSpacing: "0", fontWeight: "400" },
      ot = ["Webkit", "Moz", "ms"],
      st = k.createElement("div").style;
    function rt(e) {
      return (
        x.cssProps[e] ||
        (x.cssProps[e] =
          (function (e) {
            if (e in st) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = ot.length; n--; )
              if ((e = ot[n] + t) in st) return e;
          })(e) || e)
      );
    }
    function at(e, t, n) {
      var i = h.exec(t);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function lt(e, t, n, i, o, s) {
      var r = "width" === t ? 1 : 0,
        a = 0,
        l = 0;
      if (n === (i ? "border" : "content")) return 0;
      for (; r < 4; r += 2)
        "margin" === n && (l += x.css(e, n + p[r], !0, o)),
          i
            ? ("content" === n && (l -= x.css(e, "padding" + p[r], !0, o)),
              "margin" !== n &&
                (l -= x.css(e, "border" + p[r] + "Width", !0, o)))
            : ((l += x.css(e, "padding" + p[r], !0, o)),
              "padding" !== n
                ? (l += x.css(e, "border" + p[r] + "Width", !0, o))
                : (a += x.css(e, "border" + p[r] + "Width", !0, o)));
      return (
        !i &&
          0 <= s &&
          (l += Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - a - 0.5
            )
          )),
        l
      );
    }
    function ut(e, t, n) {
      var i = ze(e),
        o = D(e, t, i),
        s = "border-box" === x.css(e, "boxSizing", !1, i),
        r = s;
      if (Xe.test(o)) {
        if (!n) return o;
        o = "auto";
      }
      return (
        (r = r && (g.boxSizingReliable() || o === e.style[t])),
        ("auto" !== o &&
          (parseFloat(o) || "inline" !== x.css(e, "display", !1, i))) ||
          ((o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (r = !0)),
        (o = parseFloat(o) || 0) +
          lt(e, t, n || (s ? "border" : "content"), r, i, o) +
          "px"
      );
    }
    function s(e, t, n, i, o) {
      return new s.prototype.init(e, t, n, i, o);
    }
    x.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) return "" === (t = D(e, "opacity")) ? "1" : t;
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: {},
      style: function (e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o,
            s,
            r,
            a = b(t),
            l = tt.test(t),
            u = e.style;
          if (
            (l || (t = rt(a)),
            (r = x.cssHooks[t] || x.cssHooks[a]),
            void 0 === n)
          )
            return r && "get" in r && void 0 !== (o = r.get(e, !1, i))
              ? o
              : u[t];
          "string" == (s = typeof n) &&
            (o = h.exec(n)) &&
            o[1] &&
            ((n = be(e, t, o)), (s = "number")),
            null != n &&
              n == n &&
              ("number" === s &&
                (n += (o && o[3]) || (x.cssNumber[a] ? "" : "px")),
              g.clearCloneStyle ||
                "" !== n ||
                0 !== t.indexOf("background") ||
                (u[t] = "inherit"),
              (r && "set" in r && void 0 === (n = r.set(e, n, i))) ||
                (l ? u.setProperty(t, n) : (u[t] = n)));
        }
      },
      css: function (e, t, n, i) {
        var o,
          s = b(t);
        return (
          tt.test(t) || (t = rt(s)),
          "normal" ===
            (o =
              void 0 ===
              (o =
                (s = x.cssHooks[t] || x.cssHooks[s]) && "get" in s
                  ? s.get(e, !0, n)
                  : o)
                ? D(e, t, i)
                : o) &&
            t in it &&
            (o = it[t]),
          "" === n || n
            ? ((s = parseFloat(o)), !0 === n || isFinite(s) ? s || 0 : o)
            : o
        );
      },
    }),
      x.each(["height", "width"], function (e, s) {
        x.cssHooks[s] = {
          get: function (e, t, n) {
            if (t)
              return !et.test(x.css(e, "display")) ||
                (e.getClientRects().length && e.getBoundingClientRect().width)
                ? ut(e, s, n)
                : ye(e, nt, function () {
                    return ut(e, s, n);
                  });
          },
          set: function (e, t, n) {
            var i = ze(e),
              o = "border-box" === x.css(e, "boxSizing", !1, i),
              n = n && lt(e, s, n, o, i);
            return (
              o &&
                g.scrollboxSize() === i.position &&
                (n -= Math.ceil(
                  e["offset" + s[0].toUpperCase() + s.slice(1)] -
                    parseFloat(i[s]) -
                    lt(e, s, "border", !1, i) -
                    0.5
                )),
              n &&
                (o = h.exec(t)) &&
                "px" !== (o[3] || "px") &&
                ((e.style[s] = t), (t = x.css(e, s))),
              at(0, t, n)
            );
          },
        };
      }),
      (x.cssHooks.marginLeft = Qe(g.reliableMarginLeft, function (e, t) {
        if (t)
          return (
            (parseFloat(D(e, "marginLeft")) ||
              e.getBoundingClientRect().left -
                ye(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })) + "px"
          );
      })),
      x.each({ margin: "", padding: "", border: "Width" }, function (o, s) {
        (x.cssHooks[o + s] = {
          expand: function (e) {
            for (
              var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e];
              t < 4;
              t++
            )
              n[o + p[t] + s] = i[t] || i[t - 2] || i[0];
            return n;
          },
        }),
          "margin" !== o && (x.cssHooks[o + s].set = at);
      }),
      x.fn.extend({
        css: function (e, t) {
          return d(
            this,
            function (e, t, n) {
              var i,
                o,
                s = {},
                r = 0;
              if (Array.isArray(t)) {
                for (i = ze(e), o = t.length; r < o; r++)
                  s[t[r]] = x.css(e, t[r], !1, i);
                return s;
              }
              return void 0 !== n ? x.style(e, t, n) : x.css(e, t);
            },
            e,
            t,
            1 < arguments.length
          );
        },
      }),
      (((x.Tween = s).prototype = {
        constructor: s,
        init: function (e, t, n, i, o, s) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = o || x.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = i),
            (this.unit = s || (x.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var e = s.propHooks[this.prop];
          return (e && e.get ? e : s.propHooks._default).get(this);
        },
        run: function (e) {
          var t,
            n = s.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t =
                  x.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = t = e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            (n && n.set ? n : s.propHooks._default).set(this),
            this
          );
        },
      }).init.prototype = s.prototype),
      ((s.propHooks = {
        _default: {
          get: function (e) {
            return 1 !== e.elem.nodeType ||
              (null != e.elem[e.prop] && null == e.elem.style[e.prop])
              ? e.elem[e.prop]
              : (e = x.css(e.elem, e.prop, "")) && "auto" !== e
              ? e
              : 0;
          },
          set: function (e) {
            x.fx.step[e.prop]
              ? x.fx.step[e.prop](e)
              : 1 !== e.elem.nodeType ||
                (null == e.elem.style[x.cssProps[e.prop]] &&
                  !x.cssHooks[e.prop])
              ? (e.elem[e.prop] = e.now)
              : x.style(e.elem, e.prop, e.now + e.unit);
          },
        },
      }).scrollTop = s.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (x.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (x.fx = s.prototype.init),
      (x.fx.step = {});
    var O,
      ct,
      r,
      $,
      dt = /^(?:toggle|show|hide)$/,
      ht = /queueHooks$/;
    function pt() {
      ct &&
        (!1 === k.hidden && w.requestAnimationFrame
          ? w.requestAnimationFrame(pt)
          : w.setTimeout(pt, x.fx.interval),
        x.fx.tick());
    }
    function ft() {
      return (
        w.setTimeout(function () {
          O = void 0;
        }),
        (O = Date.now())
      );
    }
    function mt(e, t) {
      var n,
        i = 0,
        o = { height: e };
      for (t = t ? 1 : 0; i < 4; i += 2 - t)
        o["margin" + (n = p[i])] = o["padding" + n] = e;
      return t && (o.opacity = o.width = e), o;
    }
    function gt(e, t, n) {
      for (
        var i,
          o = (j.tweeners[t] || []).concat(j.tweeners["*"]),
          s = 0,
          r = o.length;
        s < r;
        s++
      )
        if ((i = o[s].call(n, t, e))) return i;
    }
    function j(o, e, t) {
      var n,
        s,
        i,
        r,
        a,
        l,
        u,
        c = 0,
        d = j.prefilters.length,
        h = x.Deferred().always(function () {
          delete p.elem;
        }),
        p = function () {
          if (s) return !1;
          for (
            var e = O || ft(),
              e = Math.max(0, f.startTime + f.duration - e),
              t = 1 - (e / f.duration || 0),
              n = 0,
              i = f.tweens.length;
            n < i;
            n++
          )
            f.tweens[n].run(t);
          return (
            h.notifyWith(o, [f, t, e]),
            t < 1 && i
              ? e
              : (i || h.notifyWith(o, [f, 1, 0]), h.resolveWith(o, [f]), !1)
          );
        },
        f = h.promise({
          elem: o,
          props: x.extend({}, e),
          opts: x.extend(
            !0,
            { specialEasing: {}, easing: x.easing._default },
            t
          ),
          originalProperties: e,
          originalOptions: t,
          startTime: O || ft(),
          duration: t.duration,
          tweens: [],
          createTween: function (e, t) {
            t = x.Tween(
              o,
              f.opts,
              e,
              t,
              f.opts.specialEasing[e] || f.opts.easing
            );
            return f.tweens.push(t), t;
          },
          stop: function (e) {
            var t = 0,
              n = e ? f.tweens.length : 0;
            if (s) return this;
            for (s = !0; t < n; t++) f.tweens[t].run(1);
            return (
              e
                ? (h.notifyWith(o, [f, 1, 0]), h.resolveWith(o, [f, e]))
                : h.rejectWith(o, [f, e]),
              this
            );
          },
        }),
        m = f.props,
        g = m,
        v = f.opts.specialEasing;
      for (i in g)
        if (
          ((r = b(i)),
          (a = v[r]),
          (l = g[i]),
          Array.isArray(l) && ((a = l[1]), (l = g[i] = l[0])),
          i !== r && ((g[r] = l), delete g[i]),
          (u = x.cssHooks[r]) && "expand" in u)
        )
          for (i in ((l = u.expand(l)), delete g[r], l))
            i in g || ((g[i] = l[i]), (v[i] = a));
        else v[r] = a;
      for (; c < d; c++)
        if ((n = j.prefilters[c].call(f, o, m, f.opts)))
          return (
            y(n.stop) &&
              (x._queueHooks(f.elem, f.opts.queue).stop = n.stop.bind(n)),
            n
          );
      return (
        x.map(m, gt, f),
        y(f.opts.start) && f.opts.start.call(o, f),
        f
          .progress(f.opts.progress)
          .done(f.opts.done, f.opts.complete)
          .fail(f.opts.fail)
          .always(f.opts.always),
        x.fx.timer(x.extend(p, { elem: o, anim: f, queue: f.opts.queue })),
        f
      );
    }
    (x.Animation = x.extend(j, {
      tweeners: {
        "*": [
          function (e, t) {
            var n = this.createTween(e, t);
            return be(n.elem, e, h.exec(t), n), n;
          },
        ],
      },
      tweener: function (e, t) {
        for (
          var n, i = 0, o = (e = y(e) ? ((t = e), ["*"]) : e.match(C)).length;
          i < o;
          i++
        )
          (n = e[i]),
            (j.tweeners[n] = j.tweeners[n] || []),
            j.tweeners[n].unshift(t);
      },
      prefilters: [
        function (e, t, n) {
          var i,
            o,
            s,
            r,
            a,
            l,
            u,
            c = "width" in t || "height" in t,
            d = this,
            h = {},
            p = e.style,
            f = e.nodeType && ve(e),
            m = v.get(e, "fxshow");
          for (i in (n.queue ||
            (null == (r = x._queueHooks(e, "fx")).unqueued &&
              ((r.unqueued = 0),
              (a = r.empty.fire),
              (r.empty.fire = function () {
                r.unqueued || a();
              })),
            r.unqueued++,
            d.always(function () {
              d.always(function () {
                r.unqueued--, x.queue(e, "fx").length || r.empty.fire();
              });
            })),
          t))
            if (((o = t[i]), dt.test(o))) {
              if (
                (delete t[i],
                (s = s || "toggle" === o),
                o === (f ? "hide" : "show"))
              ) {
                if ("show" !== o || !m || void 0 === m[i]) continue;
                f = !0;
              }
              h[i] = (m && m[i]) || x.style(e, i);
            }
          if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(h))
            for (i in (c &&
              1 === e.nodeType &&
              ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
              null == (u = m && m.display) && (u = v.get(e, "display")),
              "none" === (c = x.css(e, "display")) &&
                (u
                  ? (c = u)
                  : (_([e], !0),
                    (u = e.style.display || u),
                    (c = x.css(e, "display")),
                    _([e]))),
              ("inline" === c || ("inline-block" === c && null != u)) &&
                "none" === x.css(e, "float") &&
                (l ||
                  (d.done(function () {
                    p.display = u;
                  }),
                  null == u && ((c = p.display), (u = "none" === c ? "" : c))),
                (p.display = "inline-block"))),
            n.overflow &&
              ((p.overflow = "hidden"),
              d.always(function () {
                (p.overflow = n.overflow[0]),
                  (p.overflowX = n.overflow[1]),
                  (p.overflowY = n.overflow[2]);
              })),
            (l = !1),
            h))
              l ||
                (m
                  ? "hidden" in m && (f = m.hidden)
                  : (m = v.access(e, "fxshow", { display: u })),
                s && (m.hidden = !f),
                f && _([e], !0),
                d.done(function () {
                  for (i in (f || _([e]), v.remove(e, "fxshow"), h))
                    x.style(e, i, h[i]);
                })),
                (l = gt(f ? m[i] : 0, i, d)),
                i in m ||
                  ((m[i] = l.start), f && ((l.end = l.start), (l.start = 0)));
        },
      ],
      prefilter: function (e, t) {
        t ? j.prefilters.unshift(e) : j.prefilters.push(e);
      },
    })),
      (x.speed = function (e, t, n) {
        var i =
          e && "object" == typeof e
            ? x.extend({}, e)
            : {
                complete: n || (!n && t) || (y(e) && e),
                duration: e,
                easing: (n && t) || (t && !y(t) && t),
              };
        return (
          x.fx.off
            ? (i.duration = 0)
            : "number" != typeof i.duration &&
              (i.duration in x.fx.speeds
                ? (i.duration = x.fx.speeds[i.duration])
                : (i.duration = x.fx.speeds._default)),
          (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
          (i.old = i.complete),
          (i.complete = function () {
            y(i.old) && i.old.call(this), i.queue && x.dequeue(this, i.queue);
          }),
          i
        );
      }),
      x.fn.extend({
        fadeTo: function (e, t, n, i) {
          return this.filter(ve)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, i);
        },
        animate: function (t, e, n, i) {
          function o() {
            var e = j(this, x.extend({}, t), r);
            (s || v.get(this, "finish")) && e.stop(!0);
          }
          var s = x.isEmptyObject(t),
            r = x.speed(e, n, i);
          return (
            (o.finish = o),
            s || !1 === r.queue ? this.each(o) : this.queue(r.queue, o)
          );
        },
        stop: function (o, e, s) {
          function r(e) {
            var t = e.stop;
            delete e.stop, t(s);
          }
          return (
            "string" != typeof o && ((s = e), (e = o), (o = void 0)),
            e && !1 !== o && this.queue(o || "fx", []),
            this.each(function () {
              var e = !0,
                t = null != o && o + "queueHooks",
                n = x.timers,
                i = v.get(this);
              if (t) i[t] && i[t].stop && r(i[t]);
              else for (t in i) i[t] && i[t].stop && ht.test(t) && r(i[t]);
              for (t = n.length; t--; )
                n[t].elem !== this ||
                  (null != o && n[t].queue !== o) ||
                  (n[t].anim.stop(s), (e = !1), n.splice(t, 1));
              (!e && s) || x.dequeue(this, o);
            })
          );
        },
        finish: function (r) {
          return (
            !1 !== r && (r = r || "fx"),
            this.each(function () {
              var e,
                t = v.get(this),
                n = t[r + "queue"],
                i = t[r + "queueHooks"],
                o = x.timers,
                s = n ? n.length : 0;
              for (
                t.finish = !0,
                  x.queue(this, r, []),
                  i && i.stop && i.stop.call(this, !0),
                  e = o.length;
                e--;

              )
                o[e].elem === this &&
                  o[e].queue === r &&
                  (o[e].anim.stop(!0), o.splice(e, 1));
              for (e = 0; e < s; e++)
                n[e] && n[e].finish && n[e].finish.call(this);
              delete t.finish;
            })
          );
        },
      }),
      x.each(["toggle", "show", "hide"], function (e, i) {
        var o = x.fn[i];
        x.fn[i] = function (e, t, n) {
          return null == e || "boolean" == typeof e
            ? o.apply(this, arguments)
            : this.animate(mt(i, !0), e, t, n);
        };
      }),
      x.each(
        {
          slideDown: mt("show"),
          slideUp: mt("hide"),
          slideToggle: mt("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (e, i) {
          x.fn[e] = function (e, t, n) {
            return this.animate(i, e, t, n);
          };
        }
      ),
      (x.timers = []),
      (x.fx.tick = function () {
        var e,
          t = 0,
          n = x.timers;
        for (O = Date.now(); t < n.length; t++)
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || x.fx.stop(), (O = void 0);
      }),
      (x.fx.timer = function (e) {
        x.timers.push(e), x.fx.start();
      }),
      (x.fx.interval = 13),
      (x.fx.start = function () {
        ct || ((ct = !0), pt());
      }),
      (x.fx.stop = function () {
        ct = null;
      }),
      (x.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (x.fn.delay = function (i, e) {
        return (
          (i = (x.fx && x.fx.speeds[i]) || i),
          this.queue((e = e || "fx"), function (e, t) {
            var n = w.setTimeout(e, i);
            t.stop = function () {
              w.clearTimeout(n);
            };
          })
        );
      }),
      (r = k.createElement("input")),
      ($ = k.createElement("select").appendChild(k.createElement("option"))),
      (r.type = "checkbox"),
      (g.checkOn = "" !== r.value),
      (g.optSelected = $.selected),
      ((r = k.createElement("input")).value = "t"),
      (r.type = "radio"),
      (g.radioValue = "t" === r.value);
    var vt,
      F = x.expr.attrHandle,
      yt =
        (x.fn.extend({
          attr: function (e, t) {
            return d(this, x.attr, e, t, 1 < arguments.length);
          },
          removeAttr: function (e) {
            return this.each(function () {
              x.removeAttr(this, e);
            });
          },
        }),
        x.extend({
          attr: function (e, t, n) {
            var i,
              o,
              s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)
              return void 0 === e.getAttribute
                ? x.prop(e, t, n)
                : ((1 === s && x.isXMLDoc(e)) ||
                    (o =
                      x.attrHooks[t.toLowerCase()] ||
                      (x.expr.match.bool.test(t) ? vt : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void x.removeAttr(e, t)
                      : o && "set" in o && void 0 !== (i = o.set(e, n, t))
                      ? i
                      : (e.setAttribute(t, n + ""), n)
                    : !(o && "get" in o && null !== (i = o.get(e, t))) &&
                      null == (i = x.find.attr(e, t))
                    ? void 0
                    : i);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                var n;
                if (!g.radioValue && "radio" === t && l(e, "input"))
                  return (
                    (n = e.value),
                    e.setAttribute("type", t),
                    n && (e.value = n),
                    t
                  );
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              i = 0,
              o = t && t.match(C);
            if (o && 1 === e.nodeType)
              for (; (n = o[i++]); ) e.removeAttribute(n);
          },
        }),
        (vt = {
          set: function (e, t, n) {
            return !1 === t ? x.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        x.each(x.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var r = F[t] || x.find.attr;
          F[t] = function (e, t, n) {
            var i,
              o,
              s = t.toLowerCase();
            return (
              n ||
                ((o = F[s]),
                (F[s] = i),
                (i = null != r(e, t, n) ? s : null),
                (F[s] = o)),
              i
            );
          };
        }),
        /^(?:input|select|textarea|button)$/i),
      bt = /^(?:a|area)$/i;
    function M(e) {
      return (e.match(C) || []).join(" ");
    }
    function I(e) {
      return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function _t(e) {
      return Array.isArray(e) ? e : ("string" == typeof e && e.match(C)) || [];
    }
    x.fn.extend({
      prop: function (e, t) {
        return d(this, x.prop, e, t, 1 < arguments.length);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[x.propFix[e] || e];
        });
      },
    }),
      x.extend({
        prop: function (e, t, n) {
          var i,
            o,
            s = e.nodeType;
          if (3 !== s && 8 !== s && 2 !== s)
            return (
              (1 === s && x.isXMLDoc(e)) ||
                ((t = x.propFix[t] || t), (o = x.propHooks[t])),
              void 0 !== n
                ? o && "set" in o && void 0 !== (i = o.set(e, n, t))
                  ? i
                  : (e[t] = n)
                : o && "get" in o && null !== (i = o.get(e, t))
                ? i
                : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = x.find.attr(e, "tabindex");
              return t
                ? parseInt(t, 10)
                : yt.test(e.nodeName) || (bt.test(e.nodeName) && e.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      g.optSelected ||
        (x.propHooks.selected = {
          get: function (e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null;
          },
          set: function (e) {
            e = e.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
          },
        }),
      x.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          x.propFix[this.toLowerCase()] = this;
        }
      ),
      x.fn.extend({
        addClass: function (t) {
          var e,
            n,
            i,
            o,
            s,
            r,
            a = 0;
          if (y(t))
            return this.each(function (e) {
              x(this).addClass(t.call(this, e, I(this)));
            });
          if ((e = _t(t)).length)
            for (; (n = this[a++]); )
              if (((r = I(n)), (i = 1 === n.nodeType && " " + M(r) + " "))) {
                for (s = 0; (o = e[s++]); )
                  i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                r !== (r = M(i)) && n.setAttribute("class", r);
              }
          return this;
        },
        removeClass: function (t) {
          var e,
            n,
            i,
            o,
            s,
            r,
            a = 0;
          if (y(t))
            return this.each(function (e) {
              x(this).removeClass(t.call(this, e, I(this)));
            });
          if (!arguments.length) return this.attr("class", "");
          if ((e = _t(t)).length)
            for (; (n = this[a++]); )
              if (((r = I(n)), (i = 1 === n.nodeType && " " + M(r) + " "))) {
                for (s = 0; (o = e[s++]); )
                  for (; -1 < i.indexOf(" " + o + " "); )
                    i = i.replace(" " + o + " ", " ");
                r !== (r = M(i)) && n.setAttribute("class", r);
              }
          return this;
        },
        toggleClass: function (o, t) {
          var s = typeof o,
            r = "string" == s || Array.isArray(o);
          return "boolean" == typeof t && r
            ? t
              ? this.addClass(o)
              : this.removeClass(o)
            : y(o)
            ? this.each(function (e) {
                x(this).toggleClass(o.call(this, e, I(this), t), t);
              })
            : this.each(function () {
                var e, t, n, i;
                if (r)
                  for (t = 0, n = x(this), i = _t(o); (e = i[t++]); )
                    n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                  (void 0 !== o && "boolean" != s) ||
                    ((e = I(this)) && v.set(this, "__className__", e),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        (!e && !1 !== o && v.get(this, "__className__")) || ""
                      ));
              });
        },
        hasClass: function (e) {
          for (var t, n = 0, i = " " + e + " "; (t = this[n++]); )
            if (1 === t.nodeType && -1 < (" " + M(I(t)) + " ").indexOf(i))
              return !0;
          return !1;
        },
      });
    function wt(e) {
      e.stopPropagation();
    }
    var kt = /\r/g,
      xt =
        (x.fn.extend({
          val: function (t) {
            var n,
              e,
              i,
              o = this[0];
            return arguments.length
              ? ((i = y(t)),
                this.each(function (e) {
                  1 === this.nodeType &&
                    (null == (e = i ? t.call(this, e, x(this).val()) : t)
                      ? (e = "")
                      : "number" == typeof e
                      ? (e += "")
                      : Array.isArray(e) &&
                        (e = x.map(e, function (e) {
                          return null == e ? "" : e + "";
                        })),
                    ((n =
                      x.valHooks[this.type] ||
                      x.valHooks[this.nodeName.toLowerCase()]) &&
                      "set" in n &&
                      void 0 !== n.set(this, e, "value")) ||
                      (this.value = e));
                }))
              : o
              ? (n =
                  x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()]) &&
                "get" in n &&
                void 0 !== (e = n.get(o, "value"))
                ? e
                : "string" == typeof (e = o.value)
                ? e.replace(kt, "")
                : null == e
                ? ""
                : e
              : void 0;
          },
        }),
        x.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = x.find.attr(e, "value");
                return null != t ? t : M(x.text(e));
              },
            },
            select: {
              get: function (e) {
                for (
                  var t,
                    n = e.options,
                    i = e.selectedIndex,
                    o = "select-one" === e.type,
                    s = o ? null : [],
                    r = o ? i + 1 : n.length,
                    a = i < 0 ? r : o ? i : 0;
                  a < r;
                  a++
                )
                  if (
                    ((t = n[a]).selected || a === i) &&
                    !t.disabled &&
                    (!t.parentNode.disabled || !l(t.parentNode, "optgroup"))
                  ) {
                    if (((t = x(t).val()), o)) return t;
                    s.push(t);
                  }
                return s;
              },
              set: function (e, t) {
                for (
                  var n, i, o = e.options, s = x.makeArray(t), r = o.length;
                  r--;

                )
                  ((i = o[r]).selected =
                    -1 < x.inArray(x.valHooks.option.get(i), s)) && (n = !0);
                return n || (e.selectedIndex = -1), s;
              },
            },
          },
        }),
        x.each(["radio", "checkbox"], function () {
          (x.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = -1 < x.inArray(x(e).val(), t));
            },
          }),
            g.checkOn ||
              (x.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (g.focusin = "onfocusin" in w),
        /^(?:focusinfocus|focusoutblur)$/),
      Ct =
        (x.extend(x.event, {
          trigger: function (e, t, n, i) {
            var o,
              s,
              r,
              a,
              l,
              u,
              c,
              d = [n || k],
              h = z.call(e, "type") ? e.type : e,
              p = z.call(e, "namespace") ? e.namespace.split(".") : [],
              f = (c = s = n = n || k);
            if (
              3 !== n.nodeType &&
              8 !== n.nodeType &&
              !xt.test(h + x.event.triggered) &&
              (-1 < h.indexOf(".") &&
                ((h = (p = h.split(".")).shift()), p.sort()),
              (a = h.indexOf(":") < 0 && "on" + h),
              ((e = e[x.expando]
                ? e
                : new x.Event(h, "object" == typeof e && e)).isTrigger = i
                ? 2
                : 3),
              (e.namespace = p.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = n),
              (t = null == t ? [e] : x.makeArray(t, [e])),
              (u = x.event.special[h] || {}),
              i || !u.trigger || !1 !== u.trigger.apply(n, t))
            ) {
              if (!i && !u.noBubble && !m(n)) {
                for (
                  r = u.delegateType || h, xt.test(r + h) || (f = f.parentNode);
                  f;
                  f = f.parentNode
                )
                  d.push(f), (s = f);
                s === (n.ownerDocument || k) &&
                  d.push(s.defaultView || s.parentWindow || w);
              }
              for (o = 0; (f = d[o++]) && !e.isPropagationStopped(); )
                (c = f),
                  (e.type = 1 < o ? r : u.bindType || h),
                  (l =
                    (v.get(f, "events") || {})[e.type] && v.get(f, "handle")) &&
                    l.apply(f, t),
                  (l = a && f[a]) &&
                    l.apply &&
                    pe(f) &&
                    ((e.result = l.apply(f, t)),
                    !1 === e.result && e.preventDefault());
              return (
                (e.type = h),
                i ||
                  e.isDefaultPrevented() ||
                  (u._default && !1 !== u._default.apply(d.pop(), t)) ||
                  !pe(n) ||
                  (a &&
                    y(n[h]) &&
                    !m(n) &&
                    ((s = n[a]) && (n[a] = null),
                    (x.event.triggered = h),
                    e.isPropagationStopped() && c.addEventListener(h, wt),
                    n[h](),
                    e.isPropagationStopped() && c.removeEventListener(h, wt),
                    (x.event.triggered = void 0),
                    s && (n[a] = s))),
                e.result
              );
            }
          },
          simulate: function (e, t, n) {
            n = x.extend(new x.Event(), n, { type: e, isSimulated: !0 });
            x.event.trigger(n, null, t);
          },
        }),
        x.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              x.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return x.event.trigger(e, t, n, !0);
          },
        }),
        g.focusin ||
          x.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
            function o(e) {
              x.event.simulate(i, e.target, x.event.fix(e));
            }
            x.event.special[i] = {
              setup: function () {
                var e = this.ownerDocument || this,
                  t = v.access(e, i);
                t || e.addEventListener(n, o, !0), v.access(e, i, (t || 0) + 1);
              },
              teardown: function () {
                var e = this.ownerDocument || this,
                  t = v.access(e, i) - 1;
                t
                  ? v.access(e, i, t)
                  : (e.removeEventListener(n, o, !0), v.remove(e, i));
              },
            };
          }),
        w.location),
      St = Date.now(),
      Tt = /\?/,
      At =
        ((x.parseXML = function (e) {
          var t;
          if (!e || "string" != typeof e) return null;
          try {
            t = new w.DOMParser().parseFromString(e, "text/xml");
          } catch (e) {
            t = void 0;
          }
          return (
            (t && !t.getElementsByTagName("parsererror").length) ||
              x.error("Invalid XML: " + e),
            t
          );
        }),
        /\[\]$/),
      Et = /\r?\n/g,
      Dt = /^(?:submit|button|image|reset|file)$/i,
      Ot = /^(?:input|select|textarea|keygen)/i;
    (x.param = function (e, t) {
      function n(e, t) {
        (t = y(t) ? t() : t),
          (o[o.length] =
            encodeURIComponent(e) +
            "=" +
            encodeURIComponent(null == t ? "" : t));
      }
      var i,
        o = [];
      if (Array.isArray(e) || (e.jquery && !x.isPlainObject(e)))
        x.each(e, function () {
          n(this.name, this.value);
        });
      else
        for (i in e)
          !(function n(i, e, o, s) {
            if (Array.isArray(e))
              x.each(e, function (e, t) {
                o || At.test(i)
                  ? s(i, t)
                  : n(
                      i +
                        "[" +
                        ("object" == typeof t && null != t ? e : "") +
                        "]",
                      t,
                      o,
                      s
                    );
              });
            else if (o || "object" !== f(e)) s(i, e);
            else for (var t in e) n(i + "[" + t + "]", e[t], o, s);
          })(i, e[i], t, n);
      return o.join("&");
    }),
      x.fn.extend({
        serialize: function () {
          return x.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = x.prop(this, "elements");
            return e ? x.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !x(this).is(":disabled") &&
                Ot.test(this.nodeName) &&
                !Dt.test(e) &&
                (this.checked || !we.test(e))
              );
            })
            .map(function (e, t) {
              var n = x(this).val();
              return null == n
                ? null
                : Array.isArray(n)
                ? x.map(n, function (e) {
                    return { name: t.name, value: e.replace(Et, "\r\n") };
                  })
                : { name: t.name, value: n.replace(Et, "\r\n") };
            })
            .get();
        },
      });
    var $t = /%20/g,
      jt = /#.*$/,
      Ft = /([?&])_=[^&]*/,
      Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      It = /^(?:GET|HEAD)$/,
      Pt = /^\/\//,
      Lt = {},
      Rt = {},
      Nt = "*/".concat("*"),
      Bt = k.createElement("a");
    function Ht(s) {
      return function (e, t) {
        "string" != typeof e && ((t = e), (e = "*"));
        var n,
          i = 0,
          o = e.toLowerCase().match(C) || [];
        if (y(t))
          for (; (n = o[i++]); )
            "+" === n[0]
              ? ((n = n.slice(1) || "*"), (s[n] = s[n] || []).unshift(t))
              : (s[n] = s[n] || []).push(t);
      };
    }
    function qt(t, i, o, s) {
      var r = {},
        a = t === Rt;
      function l(e) {
        var n;
        return (
          (r[e] = !0),
          x.each(t[e] || [], function (e, t) {
            t = t(i, o, s);
            return "string" != typeof t || a || r[t]
              ? a
                ? !(n = t)
                : void 0
              : (i.dataTypes.unshift(t), l(t), !1);
          }),
          n
        );
      }
      return l(i.dataTypes[0]) || (!r["*"] && l("*"));
    }
    function zt(e, t) {
      var n,
        i,
        o = x.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((o[n] ? e : (i = i || {}))[n] = t[n]);
      return i && x.extend(!0, e, i), e;
    }
    (Bt.href = Ct.href),
      x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Ct.href,
          type: "GET",
          isLocal:
            /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              Ct.protocol
            ),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Nt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": x.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? zt(zt(e, x.ajaxSettings), t) : zt(x.ajaxSettings, e);
        },
        ajaxPrefilter: Ht(Lt),
        ajaxTransport: Ht(Rt),
        ajax: function (e, t) {
          "object" == typeof e && ((t = e), (e = void 0));
          var l,
            u,
            c,
            n,
            d,
            h,
            p,
            i,
            f = x.ajaxSetup({}, (t = t || {})),
            m = f.context || f,
            g = f.context && (m.nodeType || m.jquery) ? x(m) : x.event,
            v = x.Deferred(),
            y = x.Callbacks("once memory"),
            b = f.statusCode || {},
            o = {},
            s = {},
            r = "canceled",
            _ = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (h) {
                  if (!n)
                    for (n = {}; (t = Mt.exec(c)); )
                      n[t[1].toLowerCase()] = t[2];
                  t = n[e.toLowerCase()];
                }
                return null == t ? null : t;
              },
              getAllResponseHeaders: function () {
                return h ? c : null;
              },
              setRequestHeader: function (e, t) {
                return (
                  null == h &&
                    ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                    (o[e] = t)),
                  this
                );
              },
              overrideMimeType: function (e) {
                return null == h && (f.mimeType = e), this;
              },
              statusCode: function (e) {
                if (e)
                  if (h) _.always(e[_.status]);
                  else for (var t in e) b[t] = [b[t], e[t]];
                return this;
              },
              abort: function (e) {
                e = e || r;
                return l && l.abort(e), a(0, e), this;
              },
            };
          if (
            (v.promise(_),
            (f.url = ((e || f.url || Ct.href) + "").replace(
              Pt,
              Ct.protocol + "//"
            )),
            (f.type = t.method || t.type || f.method || f.type),
            (f.dataTypes = (f.dataType || "*").toLowerCase().match(C) || [""]),
            null == f.crossDomain)
          ) {
            e = k.createElement("a");
            try {
              (e.href = f.url),
                (e.href = e.href),
                (f.crossDomain =
                  Bt.protocol + "//" + Bt.host != e.protocol + "//" + e.host);
            } catch (e) {
              f.crossDomain = !0;
            }
          }
          if (
            (f.data &&
              f.processData &&
              "string" != typeof f.data &&
              (f.data = x.param(f.data, f.traditional)),
            qt(Lt, f, t, _),
            h)
          )
            return _;
          for (i in ((p = x.event && f.global) &&
            0 == x.active++ &&
            x.event.trigger("ajaxStart"),
          (f.type = f.type.toUpperCase()),
          (f.hasContent = !It.test(f.type)),
          (u = f.url.replace(jt, "")),
          f.hasContent
            ? f.data &&
              f.processData &&
              0 ===
                (f.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (f.data = f.data.replace($t, "+"))
            : ((e = f.url.slice(u.length)),
              f.data &&
                (f.processData || "string" == typeof f.data) &&
                ((u += (Tt.test(u) ? "&" : "?") + f.data), delete f.data),
              !1 === f.cache &&
                ((u = u.replace(Ft, "$1")),
                (e = (Tt.test(u) ? "&" : "?") + "_=" + St++ + e)),
              (f.url = u + e)),
          f.ifModified &&
            (x.lastModified[u] &&
              _.setRequestHeader("If-Modified-Since", x.lastModified[u]),
            x.etag[u] && _.setRequestHeader("If-None-Match", x.etag[u])),
          ((f.data && f.hasContent && !1 !== f.contentType) || t.contentType) &&
            _.setRequestHeader("Content-Type", f.contentType),
          _.setRequestHeader(
            "Accept",
            f.dataTypes[0] && f.accepts[f.dataTypes[0]]
              ? f.accepts[f.dataTypes[0]] +
                  ("*" !== f.dataTypes[0] ? ", " + Nt + "; q=0.01" : "")
              : f.accepts["*"]
          ),
          f.headers))
            _.setRequestHeader(i, f.headers[i]);
          if (f.beforeSend && (!1 === f.beforeSend.call(m, _, f) || h))
            return _.abort();
          if (
            ((r = "abort"),
            y.add(f.complete),
            _.done(f.success),
            _.fail(f.error),
            (l = qt(Rt, f, t, _)))
          ) {
            if (((_.readyState = 1), p && g.trigger("ajaxSend", [_, f]), h))
              return _;
            f.async &&
              0 < f.timeout &&
              (d = w.setTimeout(function () {
                _.abort("timeout");
              }, f.timeout));
            try {
              (h = !1), l.send(o, a);
            } catch (e) {
              if (h) throw e;
              a(-1, e);
            }
          } else a(-1, "No Transport");
          function a(e, t, n, i) {
            var o,
              s,
              r,
              a = t;
            h ||
              ((h = !0),
              d && w.clearTimeout(d),
              (l = void 0),
              (c = i || ""),
              (_.readyState = 0 < e ? 4 : 0),
              (i = (200 <= e && e < 300) || 304 === e),
              n &&
                (r = (function (e, t, n) {
                  for (
                    var i, o, s, r, a = e.contents, l = e.dataTypes;
                    "*" === l[0];

                  )
                    l.shift(),
                      void 0 === i &&
                        (i = e.mimeType || t.getResponseHeader("Content-Type"));
                  if (i)
                    for (o in a)
                      if (a[o] && a[o].test(i)) {
                        l.unshift(o);
                        break;
                      }
                  if (l[0] in n) s = l[0];
                  else {
                    for (o in n) {
                      if (!l[0] || e.converters[o + " " + l[0]]) {
                        s = o;
                        break;
                      }
                      r = r || o;
                    }
                    s = s || r;
                  }
                  if (s) return s !== l[0] && l.unshift(s), n[s];
                })(f, _, n)),
              (r = (function (e, t, n, i) {
                var o,
                  s,
                  r,
                  a,
                  l,
                  u = {},
                  c = e.dataTypes.slice();
                if (c[1])
                  for (r in e.converters) u[r.toLowerCase()] = e.converters[r];
                for (s = c.shift(); s; )
                  if (
                    (e.responseFields[s] && (n[e.responseFields[s]] = t),
                    !l &&
                      i &&
                      e.dataFilter &&
                      (t = e.dataFilter(t, e.dataType)),
                    (l = s),
                    (s = c.shift()))
                  )
                    if ("*" === s) s = l;
                    else if ("*" !== l && l !== s) {
                      if (!(r = u[l + " " + s] || u["* " + s]))
                        for (o in u)
                          if (
                            (a = o.split(" "))[1] === s &&
                            (r = u[l + " " + a[0]] || u["* " + a[0]])
                          ) {
                            !0 === r
                              ? (r = u[o])
                              : !0 !== u[o] && ((s = a[0]), c.unshift(a[1]));
                            break;
                          }
                      if (!0 !== r)
                        if (r && e.throws) t = r(t);
                        else
                          try {
                            t = r(t);
                          } catch (e) {
                            return {
                              state: "parsererror",
                              error: r
                                ? e
                                : "No conversion from " + l + " to " + s,
                            };
                          }
                    }
                return { state: "success", data: t };
              })(f, r, _, i)),
              i
                ? (f.ifModified &&
                    ((n = _.getResponseHeader("Last-Modified")) &&
                      (x.lastModified[u] = n),
                    (n = _.getResponseHeader("etag")) && (x.etag[u] = n)),
                  204 === e || "HEAD" === f.type
                    ? (a = "nocontent")
                    : 304 === e
                    ? (a = "notmodified")
                    : ((a = r.state), (o = r.data), (i = !(s = r.error))))
                : ((s = a), (!e && a) || ((a = "error"), e < 0 && (e = 0))),
              (_.status = e),
              (_.statusText = (t || a) + ""),
              i ? v.resolveWith(m, [o, a, _]) : v.rejectWith(m, [_, a, s]),
              _.statusCode(b),
              (b = void 0),
              p &&
                g.trigger(i ? "ajaxSuccess" : "ajaxError", [_, f, i ? o : s]),
              y.fireWith(m, [_, a]),
              p &&
                (g.trigger("ajaxComplete", [_, f]),
                --x.active || x.event.trigger("ajaxStop")));
          }
          return _;
        },
        getJSON: function (e, t, n) {
          return x.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return x.get(e, void 0, t, "script");
        },
      }),
      x.each(["get", "post"], function (e, o) {
        x[o] = function (e, t, n, i) {
          return (
            y(t) && ((i = i || n), (n = t), (t = void 0)),
            x.ajax(
              x.extend(
                { url: e, type: o, dataType: i, data: t, success: n },
                x.isPlainObject(e) && e
              )
            )
          );
        };
      }),
      (x._evalUrl = function (e) {
        return x.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      x.fn.extend({
        wrapAll: function (e) {
          return (
            this[0] &&
              (y(e) && (e = e.call(this[0])),
              (e = x(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && e.insertBefore(this[0]),
              e
                .map(function () {
                  for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (n) {
          return y(n)
            ? this.each(function (e) {
                x(this).wrapInner(n.call(this, e));
              })
            : this.each(function () {
                var e = x(this),
                  t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
              });
        },
        wrap: function (t) {
          var n = y(t);
          return this.each(function (e) {
            x(this).wrapAll(n ? t.call(this, e) : t);
          });
        },
        unwrap: function (e) {
          return (
            this.parent(e)
              .not("body")
              .each(function () {
                x(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (x.expr.pseudos.hidden = function (e) {
        return !x.expr.pseudos.visible(e);
      }),
      (x.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }),
      (x.ajaxSettings.xhr = function () {
        try {
          return new w.XMLHttpRequest();
        } catch (e) {}
      });
    var Wt = { 0: 200, 1223: 204 },
      Ut = x.ajaxSettings.xhr(),
      Vt =
        ((g.cors = !!Ut && "withCredentials" in Ut),
        (g.ajax = Ut = !!Ut),
        x.ajaxTransport(function (o) {
          var s, r;
          if (g.cors || (Ut && !o.crossDomain))
            return {
              send: function (e, t) {
                var n,
                  i = o.xhr();
                if (
                  (i.open(o.type, o.url, o.async, o.username, o.password),
                  o.xhrFields)
                )
                  for (n in o.xhrFields) i[n] = o.xhrFields[n];
                for (n in (o.mimeType &&
                  i.overrideMimeType &&
                  i.overrideMimeType(o.mimeType),
                o.crossDomain ||
                  e["X-Requested-With"] ||
                  (e["X-Requested-With"] = "XMLHttpRequest"),
                e))
                  i.setRequestHeader(n, e[n]);
                (s = function (e) {
                  return function () {
                    s &&
                      ((s =
                        r =
                        i.onload =
                        i.onerror =
                        i.onabort =
                        i.ontimeout =
                        i.onreadystatechange =
                          null),
                      "abort" === e
                        ? i.abort()
                        : "error" === e
                        ? "number" != typeof i.status
                          ? t(0, "error")
                          : t(i.status, i.statusText)
                        : t(
                            Wt[i.status] || i.status,
                            i.statusText,
                            "text" !== (i.responseType || "text") ||
                              "string" != typeof i.responseText
                              ? { binary: i.response }
                              : { text: i.responseText },
                            i.getAllResponseHeaders()
                          ));
                  };
                }),
                  (i.onload = s()),
                  (r = i.onerror = i.ontimeout = s("error")),
                  void 0 !== i.onabort
                    ? (i.onabort = r)
                    : (i.onreadystatechange = function () {
                        4 === i.readyState &&
                          w.setTimeout(function () {
                            s && r();
                          });
                      }),
                  (s = s("abort"));
                try {
                  i.send((o.hasContent && o.data) || null);
                } catch (e) {
                  if (s) throw e;
                }
              },
              abort: function () {
                s && s();
              },
            };
        }),
        x.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        x.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return x.globalEval(e), e;
            },
          },
        }),
        x.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        x.ajaxTransport("script", function (n) {
          var i, o;
          if (n.crossDomain)
            return {
              send: function (e, t) {
                (i = x("<script>")
                  .prop({ charset: n.scriptCharset, src: n.url })
                  .on(
                    "load error",
                    (o = function (e) {
                      i.remove(),
                        (o = null),
                        e && t("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  k.head.appendChild(i[0]);
              },
              abort: function () {
                o && o();
              },
            };
        }),
        []),
      Yt = /(=)\?(?=&|$)|\?\?/,
      Zt =
        (x.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var e = Vt.pop() || x.expando + "_" + St++;
            return (this[e] = !0), e;
          },
        }),
        x.ajaxPrefilter("json jsonp", function (e, t, n) {
          var i,
            o,
            s,
            r =
              !1 !== e.jsonp &&
              (Yt.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Yt.test(e.data) &&
                  "data");
          if (r || "jsonp" === e.dataTypes[0])
            return (
              (i = e.jsonpCallback =
                y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              r
                ? (e[r] = e[r].replace(Yt, "$1" + i))
                : !1 !== e.jsonp &&
                  (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
              (e.converters["script json"] = function () {
                return s || x.error(i + " was not called"), s[0];
              }),
              (e.dataTypes[0] = "json"),
              (o = w[i]),
              (w[i] = function () {
                s = arguments;
              }),
              n.always(function () {
                void 0 === o ? x(w).removeProp(i) : (w[i] = o),
                  e[i] && ((e.jsonpCallback = t.jsonpCallback), Vt.push(i)),
                  s && y(o) && o(s[0]),
                  (s = o = void 0);
              }),
              "script"
            );
        }),
        (g.createHTMLDocument =
          (((e = k.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === e.childNodes.length)),
        (x.parseHTML = function (e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (g.createHTMLDocument
                  ? (((i = (t =
                      k.implementation.createHTMLDocument("")).createElement(
                      "base"
                    )).href = k.location.href),
                    t.head.appendChild(i))
                  : (t = k)),
              (i = !n && []),
              (n = J.exec(e))
                ? [t.createElement(n[1])]
                : ((n = Te([e], t, i)),
                  i && i.length && x(i).remove(),
                  x.merge([], n.childNodes)));
          var i;
        }),
        (x.fn.load = function (e, t, n) {
          var i,
            o,
            s,
            r = this,
            a = e.indexOf(" ");
          return (
            -1 < a && ((i = M(e.slice(a))), (e = e.slice(0, a))),
            y(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (o = "POST"),
            0 < r.length &&
              x
                .ajax({ url: e, type: o || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (s = arguments),
                    r.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      r.each(function () {
                        n.apply(this, s || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        x.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            x.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        (x.expr.pseudos.animated = function (t) {
          return x.grep(x.timers, function (e) {
            return t === e.elem;
          }).length;
        }),
        (x.offset = {
          setOffset: function (e, t, n) {
            var i,
              o,
              s,
              r,
              a = x.css(e, "position"),
              l = x(e),
              u = {};
            "static" === a && (e.style.position = "relative"),
              (s = l.offset()),
              (i = x.css(e, "top")),
              (r = x.css(e, "left")),
              (a =
                ("absolute" === a || "fixed" === a) &&
                -1 < (i + r).indexOf("auto")
                  ? ((o = (a = l.position()).top), a.left)
                  : ((o = parseFloat(i) || 0), parseFloat(r) || 0)),
              null != (t = y(t) ? t.call(e, n, x.extend({}, s)) : t).top &&
                (u.top = t.top - s.top + o),
              null != t.left && (u.left = t.left - s.left + a),
              "using" in t ? t.using.call(e, u) : l.css(u);
          },
        }),
        x.fn.extend({
          offset: function (t) {
            if (arguments.length)
              return void 0 === t
                ? this
                : this.each(function (e) {
                    x.offset.setOffset(this, t, e);
                  });
            var e,
              n = this[0];
            return n
              ? n.getClientRects().length
                ? ((e = n.getBoundingClientRect()),
                  (n = n.ownerDocument.defaultView),
                  { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                i = this[0],
                o = { top: 0, left: 0 };
              if ("fixed" === x.css(i, "position"))
                t = i.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === x.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== i &&
                  1 === e.nodeType &&
                  (((o = x(e).offset()).top += x.css(e, "borderTopWidth", !0)),
                  (o.left += x.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - o.top - x.css(i, "marginTop", !0),
                left: t.left - o.left - x.css(i, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && "static" === x.css(e, "position");

              )
                e = e.offsetParent;
              return e || Ae;
            });
          },
        }),
        x.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (t, o) {
            var s = "pageYOffset" === o;
            x.fn[t] = function (e) {
              return d(
                this,
                function (e, t, n) {
                  var i;
                  if (
                    (m(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView),
                    void 0 === n)
                  )
                    return i ? i[o] : e[t];
                  i
                    ? i.scrollTo(s ? i.pageXOffset : n, s ? n : i.pageYOffset)
                    : (e[t] = n);
                },
                t,
                e,
                arguments.length
              );
            };
          }
        ),
        x.each(["top", "left"], function (e, n) {
          x.cssHooks[n] = Qe(g.pixelPosition, function (e, t) {
            if (t)
              return (t = D(e, n)), Xe.test(t) ? x(e).position()[n] + "px" : t;
          });
        }),
        x.each({ Height: "height", Width: "width" }, function (r, a) {
          x.each(
            { padding: "inner" + r, content: a, "": "outer" + r },
            function (i, s) {
              x.fn[s] = function (e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                  o = i || (!0 === e || !0 === t ? "margin" : "border");
                return d(
                  this,
                  function (e, t, n) {
                    var i;
                    return m(e)
                      ? 0 === s.indexOf("outer")
                        ? e["inner" + r]
                        : e.document.documentElement["client" + r]
                      : 9 === e.nodeType
                      ? ((i = e.documentElement),
                        Math.max(
                          e.body["scroll" + r],
                          i["scroll" + r],
                          e.body["offset" + r],
                          i["offset" + r],
                          i["client" + r]
                        ))
                      : void 0 === n
                      ? x.css(e, t, o)
                      : x.style(e, t, n, o);
                  },
                  a,
                  n ? e : void 0,
                  n
                );
              };
            }
          );
        }),
        x.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, n) {
            x.fn[n] = function (e, t) {
              return 0 < arguments.length
                ? this.on(n, null, e, t)
                : this.trigger(n);
            };
          }
        ),
        x.fn.extend({
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        x.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, i) {
            return this.on(t, e, n, i);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
        }),
        (x.proxy = function (e, t) {
          var n, i;
          if (("string" == typeof t && ((i = e[t]), (t = e), (e = i)), y(e)))
            return (
              (n = a.call(arguments, 2)),
              ((i = function () {
                return e.apply(t || this, n.concat(a.call(arguments)));
              }).guid = e.guid =
                e.guid || x.guid++),
              i
            );
        }),
        (x.holdReady = function (e) {
          e ? x.readyWait++ : x.ready(!0);
        }),
        (x.isArray = Array.isArray),
        (x.parseJSON = JSON.parse),
        (x.nodeName = l),
        (x.isFunction = y),
        (x.isWindow = m),
        (x.camelCase = b),
        (x.type = f),
        (x.now = Date.now),
        (x.isNumeric = function (e) {
          var t = x.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        "function" == typeof define &&
          define.amd &&
          define("jquery", [], function () {
            return x;
          }),
        w.jQuery),
      Kt = w.$;
    return (
      (x.noConflict = function (e) {
        return (
          w.$ === x && (w.$ = Kt), e && w.jQuery === x && (w.jQuery = Zt), x
        );
      }),
      P || (w.jQuery = w.$ = x),
      x
    );
  }),
  !(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? t(exports)
      : "function" == typeof define && define.amd
      ? define(["exports"], t)
      : t(
          ((e =
            "undefined" != typeof globalThis ? globalThis : e || self).IMask =
            {})
        );
  })(this, function (e) {
    "use strict";
    function $(e) {
      return e && e.Math == Math && e;
    }
    function t(e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    }
    function j(e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    }
    function F(e) {
      if (null == e) throw TypeError("Can't call method on " + e);
      return e;
    }
    function M(e) {
      return ie(oe(e));
    }
    function I(e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    }
    function P(e, t) {
      if (!se(e)) return e;
      var n, i;
      if (t && "function" == typeof (n = e.toString) && !se((i = n.call(e))))
        return i;
      if ("function" == typeof (n = e.valueOf) && !se((i = n.call(e))))
        return i;
      if (t || "function" != typeof (n = e.toString) || se((i = n.call(e))))
        throw TypeError("Can't convert object to primitive value");
      return i;
    }
    function q(e) {
      return Object(re(e));
    }
    function z(e) {
      if (_e(e)) return e;
      throw TypeError(String(e) + " is not an object");
    }
    function W(t, n) {
      try {
        De(Ee, t, n);
      } catch (e) {
        Ee[t] = n;
      }
      return n;
    }
    var n,
      U,
      V,
      Y,
      Z,
      i,
      K,
      o,
      s =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      s =
        $("object" == typeof globalThis && globalThis) ||
        $("object" == typeof window && window) ||
        $("object" == typeof self && self) ||
        $("object" == typeof s && s) ||
        (function () {
          return this;
        })() ||
        Function("return this")(),
      X = {},
      r = !t(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      }),
      G = {},
      J = {}.propertyIsEnumerable,
      Q = Object.getOwnPropertyDescriptor,
      a = Q && !J.call({ 1: 2 }, 1),
      ee =
        ((G.f = a
          ? function (e) {
              e = Q(this, e);
              return !!e && e.enumerable;
            }
          : J),
        {}.toString),
      a = t,
      te = function (e) {
        return ee.call(e).slice(8, -1);
      },
      ne = "".split,
      J = a(function () {
        return !Object("z").propertyIsEnumerable(0);
      })
        ? function (e) {
            return "String" == te(e) ? ne.call(e, "") : Object(e);
          }
        : Object,
      ie = J,
      oe = F,
      se = I,
      re = F,
      ae = q,
      le = {}.hasOwnProperty,
      a =
        Object.hasOwn ||
        function (e, t) {
          return le.call(ae(e), t);
        },
      l = I,
      ue = s.document,
      ce = l(ue) && l(ue.createElement),
      de = function (e) {
        return ce ? ue.createElement(e) : {};
      },
      l =
        !r &&
        !t(function () {
          return (
            7 !=
            Object.defineProperty(de("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        }),
      he = G,
      pe = j,
      fe = M,
      me = P,
      ge = a,
      ve = l,
      ye = Object.getOwnPropertyDescriptor,
      be =
        ((X.f = r
          ? ye
          : function (e, t) {
              if (((e = fe(e)), (t = me(t, !0)), ve))
                try {
                  return ye(e, t);
                } catch (e) {}
              if (ge(e, t)) return pe(!he.f.call(e, t), e[t]);
            }),
        {}),
      _e = I,
      we = l,
      ke = z,
      xe = P,
      Ce = Object.defineProperty,
      l =
        ((be.f = r
          ? Ce
          : function (e, t, n) {
              if ((ke(e), (t = xe(t, !0)), ke(n), we))
                try {
                  return Ce(e, t, n);
                } catch (e) {}
              if ("get" in n || "set" in n)
                throw TypeError("Accessors not supported");
              return "value" in n && (e[t] = n.value), e;
            }),
        r),
      Se = be,
      Te = j,
      l = l
        ? function (e, t, n) {
            return Se.f(e, t, Te(1, n));
          }
        : function (e, t, n) {
            return (e[t] = n), e;
          },
      Ae = { exports: {} },
      Ee = s,
      De = l,
      u = W,
      c = "__core-js_shared__",
      u = s[c] || u(c, {}),
      c = u,
      Oe = Function.toString,
      c =
        ("function" != typeof c.inspectSource &&
          (c.inspectSource = function (e) {
            return Oe.call(e);
          }),
        c.inspectSource),
      d = c,
      h = s.WeakMap,
      d = "function" == typeof h && /native code/.test(d(h)),
      h = { exports: {} },
      $e = u,
      je =
        ((h.exports = function (e, t) {
          return $e[e] || ($e[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.15.2",
          mode: "global",
          copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
        }),
        0),
      Fe = Math.random(),
      h = h.exports,
      Me = function (e) {
        return (
          "Symbol(" +
          String(void 0 === e ? "" : e) +
          ")_" +
          (++je + Fe).toString(36)
        );
      },
      Ie = h("keys"),
      h = {},
      Pe = I,
      Le = l,
      Re = a,
      p = function (e) {
        return Ie[e] || (Ie[e] = Me(e));
      },
      f = h,
      Ne = "Object already initialized",
      Be = s.WeakMap,
      d =
        ((K =
          d || u.state
            ? ((n = u.state || (u.state = new Be())),
              (U = n.get),
              (V = n.has),
              (Y = n.set),
              (Z = function (e, t) {
                if (V.call(n, e)) throw new TypeError(Ne);
                return (t.facade = e), Y.call(n, e, t), t;
              }),
              (i = function (e) {
                return U.call(n, e) || {};
              }),
              function (e) {
                return V.call(n, e);
              })
            : ((f[(o = p("state"))] = !0),
              (Z = function (e, t) {
                if (Re(e, o)) throw new TypeError(Ne);
                return (t.facade = e), Le(e, o, t), t;
              }),
              (i = function (e) {
                return Re(e, o) ? e[o] : {};
              }),
              function (e) {
                return Re(e, o);
              })),
        {
          set: Z,
          get: i,
          has: K,
          enforce: function (e) {
            return K(e) ? i(e) : Z(e, {});
          },
          getterFor: function (t) {
            return function (e) {
              if (Pe(e) && (e = i(e)).type === t) return e;
              throw TypeError("Incompatible receiver, " + t + " required");
            };
          },
        }),
      He = s,
      qe = l,
      ze = a,
      We = W,
      Ue = c,
      Ve = d.get,
      Ye = d.enforce,
      Ze = String(String).split("String");
    (Ae.exports = function (e, t, n, i) {
      var o,
        s = !!i && !!i.unsafe,
        r = !!i && !!i.enumerable,
        i = !!i && !!i.noTargetGet;
      "function" == typeof n &&
        ("string" != typeof t || ze(n, "name") || qe(n, "name", t),
        (o = Ye(n)).source ||
          (o.source = Ze.join("string" == typeof t ? t : ""))),
        e === He
          ? r
            ? (e[t] = n)
            : We(t, n)
          : (s ? !i && e[t] && (r = !0) : delete e[t],
            r ? (e[t] = n) : qe(e, t, n));
    })(Function.prototype, "toString", function () {
      return ("function" == typeof this && Ve(this).source) || Ue(this);
    });
    function Ke(e) {
      return "function" == typeof e ? e : void 0;
    }
    function Xe(e, t) {
      return arguments.length < 2
        ? Ke(st[e]) || Ke(rt[e])
        : (st[e] && st[e][t]) || (rt[e] && rt[e][t]);
    }
    function Ge(e) {
      return isNaN((e = +e)) ? 0 : (0 < e ? lt : at)(e);
    }
    function Je(e) {
      return 0 < e ? ct(ut(e), 9007199254740991) : 0;
    }
    function Qe(a) {
      return function (e, t, n) {
        var i,
          o = ft(e),
          s = mt(o.length),
          r = gt(n, s);
        if (a && t != t) {
          for (; r < s; ) if ((i = o[r++]) != i) return !0;
        } else for (; r < s; r++) if ((a || r in o) && o[r] === t) return a || r || 0;
        return !a && -1;
      };
    }
    function et(e, t) {
      var n,
        i = yt(e),
        o = 0,
        s = [];
      for (n in i) !vt(_t, n) && vt(i, n) && s.push(n);
      for (; t.length > o; ) !vt(i, (n = t[o++])) || ~bt(s, n) || s.push(n);
      return s;
    }
    function tt(e, t) {
      return (
        (e = Ft[jt(e)]) == It ||
        (e != Mt && ("function" == typeof t ? Ot(t) : !!t))
      );
    }
    function nt(e, t) {
      var n,
        i,
        o,
        s = e.target,
        r = e.global,
        a = e.stat,
        l = r ? Pt : a ? Pt[s] || Bt(s, {}) : (Pt[s] || {}).prototype;
      if (l)
        for (n in t) {
          if (
            ((i = t[n]),
            (o = e.noTargetGet ? (o = Lt(l, n)) && o.value : l[n]),
            !qt(r ? n : s + (a ? "." : "#") + n, e.forced) && void 0 !== o)
          ) {
            if (typeof i == typeof o) continue;
            Ht(i, o);
          }
          (e.sham || (o && o.sham)) && Rt(i, "sham", !0), Nt(l, n, i, e);
        }
    }
    function it(e) {
      var t = String(Qt(this)),
        n = "",
        i = Jt(e);
      if (i < 0 || i == 1 / 0) throw RangeError("Wrong number of repetitions");
      for (; 0 < i; (i >>>= 1) && (t += t)) 1 & i && (n += t);
      return n;
    }
    function ot(o) {
      return function (e, t, n) {
        var e = String(nn(e)),
          i = e.length,
          n = void 0 === n ? " " : String(n),
          t = en(t);
        return t <= i || "" == n
          ? e
          : ((i = tn.call(n, on((t = t - i) / n.length))).length > t &&
              (i = i.slice(0, t)),
            o ? e + i : i + e);
      };
    }
    var st = s,
      rt = s,
      u = {},
      at = Math.ceil,
      lt = Math.floor,
      ut = Ge,
      ct = Math.min,
      dt = Ge,
      ht = Math.max,
      pt = Math.min,
      ft = M,
      mt = Je,
      gt = function (e, t) {
        e = dt(e);
        return e < 0 ? ht(e + t, 0) : pt(e, t);
      },
      Be = { includes: Qe(!0), indexOf: Qe(!1) },
      vt = a,
      yt = M,
      bt = Be.indexOf,
      _t = h,
      f = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ],
      wt = et,
      kt = f.concat("length", "prototype"),
      p =
        ((u.f =
          Object.getOwnPropertyNames ||
          function (e) {
            return wt(e, kt);
          }),
        {}),
      c = ((p.f = Object.getOwnPropertySymbols), Xe),
      xt = u,
      Ct = p,
      St = z,
      d =
        c("Reflect", "ownKeys") ||
        function (e) {
          var t = xt.f(St(e)),
            n = Ct.f;
          return n ? t.concat(n(e)) : t;
        },
      Tt = a,
      At = d,
      Et = X,
      Dt = be,
      Ot = t,
      $t = /#|\.prototype\./,
      jt = (tt.normalize = function (e) {
        return String(e).replace($t, ".").toLowerCase();
      }),
      Ft = (tt.data = {}),
      Mt = (tt.NATIVE = "N"),
      It = (tt.POLYFILL = "P"),
      Pt = s,
      Lt = X.f,
      Rt = l,
      Nt = Ae.exports,
      Bt = W,
      Ht = function (e, t) {
        for (var n = At(t), i = Dt.f, o = Et.f, s = 0; s < n.length; s++) {
          var r = n[s];
          Tt(e, r) || i(e, r, o(t, r));
        }
      },
      qt = tt,
      zt = et,
      Wt = f,
      Be =
        Object.keys ||
        function (e) {
          return zt(e, Wt);
        },
      Ut = r,
      h = t,
      Vt = Be,
      Yt = p,
      Zt = G,
      Kt = q,
      Xt = J,
      m = Object.assign,
      Gt = Object.defineProperty,
      u =
        !m ||
        h(function () {
          if (
            Ut &&
            1 !==
              m(
                { b: 1 },
                m(
                  Gt({}, "a", {
                    enumerable: !0,
                    get: function () {
                      Gt(this, "b", { value: 3, enumerable: !1 });
                    },
                  }),
                  { b: 2 }
                )
              ).b
          )
            return !0;
          var e = {},
            t = {},
            n = Symbol(),
            i = "abcdefghijklmnopqrst";
          return (
            (e[n] = 7),
            i.split("").forEach(function (e) {
              t[e] = e;
            }),
            7 != m({}, e)[n] || Vt(m({}, t)).join("") != i
          );
        })
          ? function (e, t) {
              for (
                var n = Kt(e), i = arguments.length, o = 1, s = Yt.f, r = Zt.f;
                o < i;

              )
                for (
                  var a,
                    l = Xt(arguments[o++]),
                    u = s ? Vt(l).concat(s(l)) : Vt(l),
                    c = u.length,
                    d = 0;
                  d < c;

                )
                  (a = u[d++]), (Ut && !r.call(l, a)) || (n[a] = l[a]);
              return n;
            }
          : m,
      Jt =
        (nt(
          { target: "Object", stat: !0, forced: Object.assign !== u },
          { assign: u }
        ),
        Ge),
      Qt = F,
      en = (nt({ target: "String", proto: !0 }, { repeat: it }), Je),
      tn = it,
      nn = F,
      on = Math.ceil,
      c = { start: ot(!1), end: ot(!0) },
      a = Xe("navigator", "userAgent") || "",
      d =
        /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(
          a
        ),
      be = nt,
      sn = c.start,
      X =
        (be(
          { target: "String", proto: !0, forced: d },
          {
            padStart: function (e) {
              return sn(this, e, 1 < arguments.length ? arguments[1] : void 0);
            },
          }
        ),
        nt),
      rn = c.end;
    function an(e) {
      return (an =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function g(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function ln(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function v(e, t, n) {
      t && ln(e.prototype, t), n && ln(e, n);
    }
    function y(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        t && un(e, t);
    }
    function b(e) {
      return (b = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function un(e, t) {
      return (un =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function cn(e, t) {
      if (null == e) return {};
      var n,
        i = (function (e, t) {
          if (null == e) return {};
          for (var n, i = {}, o = Object.keys(e), s = 0; s < o.length; s++)
            (n = o[s]), 0 <= t.indexOf(n) || (i[n] = e[n]);
          return i;
        })(e, t);
      if (Object.getOwnPropertySymbols)
        for (var o = Object.getOwnPropertySymbols(e), s = 0; s < o.length; s++)
          (n = o[s]),
            0 <= t.indexOf(n) ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (i[n] = e[n]));
      return i;
    }
    function dn(e, t) {
      if (!t || ("object" != typeof t && "function" != typeof t)) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      return t;
    }
    function _(n) {
      var i = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var e,
          t = b(n);
        return dn(
          this,
          i
            ? ((e = b(this).constructor), Reflect.construct(t, arguments, e))
            : t.apply(this, arguments)
        );
      };
    }
    function hn(e, t) {
      for (
        ;
        !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = b(e));

      );
      return e;
    }
    function w(e, t, n) {
      return (w =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (e, t, n) {
              var e = hn(e, t);
              if (e)
                return (
                  (e = Object.getOwnPropertyDescriptor(e, t)),
                  e.get ? e.get.call(n) : e.value
                );
            })(e, t, n || e);
    }
    function pn(e, t, n, i) {
      return (pn =
        "undefined" != typeof Reflect && Reflect.set
          ? Reflect.set
          : function (e, t, n, i) {
              var o,
                e = hn(e, t);
              if (e) {
                if ((o = Object.getOwnPropertyDescriptor(e, t)).set)
                  return o.set.call(i, n), !0;
                if (!o.writable) return !1;
              }
              if ((o = Object.getOwnPropertyDescriptor(i, t))) {
                if (!o.writable) return !1;
                (o.value = n), Object.defineProperty(i, t, o);
              } else
                (e = n),
                  (o = t) in (n = i)
                    ? Object.defineProperty(n, o, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[o] = e);
              return !0;
            })(e, t, n, i);
    }
    function k(e, t, n, i, o) {
      if (!pn(e, t, n, i || e) && o) throw new Error("failed to set property");
    }
    function x(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != n) {
            var i,
              o,
              s = [],
              r = !0,
              a = !1;
            try {
              for (
                n = n.call(e);
                !(r = (i = n.next()).done) &&
                (s.push(i.value), !t || s.length !== t);
                r = !0
              );
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                r || null == n.return || n.return();
              } finally {
                if (a) throw o;
              }
            }
            return s;
          }
        })(e, t) ||
        (function (e, t) {
          if (e) {
            if ("string" == typeof e) return fn(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Map" ===
              (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
              "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? fn(e, t)
              : void 0;
          }
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function fn(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i;
    }
    function C(e) {
      return "string" == typeof e || e instanceof String;
    }
    X(
      { target: "String", proto: !0, forced: d },
      {
        padEnd: function (e) {
          return rn(this, e, 1 < arguments.length ? arguments[1] : void 0);
        },
      }
    ),
      nt({ global: !0 }, { globalThis: s });
    var L = "NONE",
      R = "LEFT",
      N = "FORCE_LEFT",
      B = "RIGHT",
      H = "FORCE_RIGHT";
    function mn(e) {
      return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
    }
    var gn = (function () {
        function o(e, t, n, i) {
          for (
            g(this, o),
              this.value = e,
              this.cursorPos = t,
              this.oldValue = n,
              this.oldSelection = i;
            this.value.slice(0, this.startChangePos) !==
            this.oldValue.slice(0, this.startChangePos);

          )
            --this.oldSelection.start;
        }
        return (
          v(o, [
            {
              key: "startChangePos",
              get: function () {
                return Math.min(this.cursorPos, this.oldSelection.start);
              },
            },
            {
              key: "insertedCount",
              get: function () {
                return this.cursorPos - this.startChangePos;
              },
            },
            {
              key: "inserted",
              get: function () {
                return this.value.substr(
                  this.startChangePos,
                  this.insertedCount
                );
              },
            },
            {
              key: "removedCount",
              get: function () {
                return Math.max(
                  this.oldSelection.end - this.startChangePos ||
                    this.oldValue.length - this.value.length,
                  0
                );
              },
            },
            {
              key: "removed",
              get: function () {
                return this.oldValue.substr(
                  this.startChangePos,
                  this.removedCount
                );
              },
            },
            {
              key: "head",
              get: function () {
                return this.value.substring(0, this.startChangePos);
              },
            },
            {
              key: "tail",
              get: function () {
                return this.value.substring(
                  this.startChangePos + this.insertedCount
                );
              },
            },
            {
              key: "removeDirection",
              get: function () {
                return !this.removedCount || this.insertedCount
                  ? L
                  : this.oldSelection.end === this.cursorPos ||
                    this.oldSelection.start === this.cursorPos
                  ? B
                  : R;
              },
            },
          ]),
          o
        );
      })(),
      S = (function () {
        function t(e) {
          g(this, t),
            Object.assign(
              this,
              { inserted: "", rawInserted: "", skip: !1, tailShift: 0 },
              e
            );
        }
        return (
          v(t, [
            {
              key: "aggregate",
              value: function (e) {
                return (
                  (this.rawInserted += e.rawInserted),
                  (this.skip = this.skip || e.skip),
                  (this.inserted += e.inserted),
                  (this.tailShift += e.tailShift),
                  this
                );
              },
            },
            {
              key: "offset",
              get: function () {
                return this.tailShift + this.inserted.length;
              },
            },
          ]),
          t
        );
      })(),
      T = (function () {
        function i() {
          var e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = 2 < arguments.length ? arguments[2] : void 0;
          g(this, i), (this.value = e), (this.from = t), (this.stop = n);
        }
        return (
          v(i, [
            {
              key: "toString",
              value: function () {
                return this.value;
              },
            },
            {
              key: "extend",
              value: function (e) {
                this.value += String(e);
              },
            },
            {
              key: "appendTo",
              value: function (e) {
                return e
                  .append(this.toString(), { tail: !0 })
                  .aggregate(e._appendPlaceholder());
              },
            },
            {
              key: "state",
              get: function () {
                return { value: this.value, from: this.from, stop: this.stop };
              },
              set: function (e) {
                Object.assign(this, e);
              },
            },
            {
              key: "shiftBefore",
              value: function (e) {
                if (this.from >= e || !this.value.length) return "";
                e = this.value[0];
                return (this.value = this.value.slice(1)), e;
              },
            },
          ]),
          i
        );
      })();
    function A(e) {
      return new A.InputMask(
        e,
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
      );
    }
    var E = (function () {
      function t(e) {
        g(this, t),
          (this._value = ""),
          this._update(Object.assign({}, t.DEFAULTS, e)),
          (this.isInitialized = !0);
      }
      return (
        v(t, [
          {
            key: "updateOptions",
            value: function (e) {
              Object.keys(e).length &&
                this.withValueRefresh(this._update.bind(this, e));
            },
          },
          {
            key: "_update",
            value: function (e) {
              Object.assign(this, e);
            },
          },
          {
            key: "state",
            get: function () {
              return { _value: this.value };
            },
            set: function (e) {
              this._value = e._value;
            },
          },
          {
            key: "reset",
            value: function () {
              this._value = "";
            },
          },
          {
            key: "value",
            get: function () {
              return this._value;
            },
            set: function (e) {
              this.resolve(e);
            },
          },
          {
            key: "resolve",
            value: function (e) {
              return (
                this.reset(),
                this.append(e, { input: !0 }, ""),
                this.doCommit(),
                this.value
              );
            },
          },
          {
            key: "unmaskedValue",
            get: function () {
              return this.value;
            },
            set: function (e) {
              this.reset(), this.append(e, {}, ""), this.doCommit();
            },
          },
          {
            key: "typedValue",
            get: function () {
              return this.doParse(this.value);
            },
            set: function (e) {
              this.value = this.doFormat(e);
            },
          },
          {
            key: "rawInputValue",
            get: function () {
              return this.extractInput(0, this.value.length, { raw: !0 });
            },
            set: function (e) {
              this.reset(), this.append(e, { raw: !0 }, ""), this.doCommit();
            },
          },
          {
            key: "isComplete",
            get: function () {
              return !0;
            },
          },
          {
            key: "nearestInputPos",
            value: function (e, t) {
              return e;
            },
          },
          {
            key: "extractInput",
            value: function () {
              var e =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                t =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : this.value.length;
              return this.value.slice(e, t);
            },
          },
          {
            key: "extractTail",
            value: function () {
              var e =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                t =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : this.value.length;
              return new T(this.extractInput(e, t), e);
            },
          },
          {
            key: "appendTail",
            value: function (e) {
              return (e = C(e) ? new T(String(e)) : e).appendTo(this);
            },
          },
          {
            key: "_appendCharRaw",
            value: function (e) {
              return e
                ? ((this._value += e), new S({ inserted: e, rawInserted: e }))
                : new S();
            },
          },
          {
            key: "_appendChar",
            value: function (e) {
              var t,
                n,
                i,
                o =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                s = 2 < arguments.length ? arguments[2] : void 0,
                r = this.state,
                e = this._appendCharRaw(this.doPrepare(e, o), o);
              return (
                e.inserted &&
                  ((o = !1 !== this.doValidate(o)) &&
                    null != s &&
                    ((n = this.state),
                    this.overwrite &&
                      ((t = s.state), s.shiftBefore(this.value.length)),
                    (o =
                      (i = this.appendTail(s)).rawInserted === s.toString()) &&
                      i.inserted &&
                      (this.state = n)),
                  o ||
                    ((e = new S()), (this.state = r), s && t && (s.state = t))),
                e
              );
            },
          },
          {
            key: "_appendPlaceholder",
            value: function () {
              return new S();
            },
          },
          {
            key: "append",
            value: function (e, t, n) {
              if (!C(e)) throw new Error("value should be string");
              var i = new S(),
                o = C(n) ? new T(String(n)) : n;
              t && t.tail && (t._beforeTailState = this.state);
              for (var s = 0; s < e.length; ++s)
                i.aggregate(this._appendChar(e[s], t, o));
              return (
                null != o && (i.tailShift += this.appendTail(o).tailShift), i
              );
            },
          },
          {
            key: "remove",
            value: function () {
              var e =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                t =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : this.value.length;
              return (
                (this._value = this.value.slice(0, e) + this.value.slice(t)),
                new S()
              );
            },
          },
          {
            key: "withValueRefresh",
            value: function (e) {
              if (this._refreshing || !this.isInitialized) return e();
              this._refreshing = !0;
              var t = this.rawInputValue,
                n = this.value,
                e = e();
              return (
                (this.rawInputValue = t),
                this.value &&
                  this.value !== n &&
                  0 === n.indexOf(this.value) &&
                  this.append(n.slice(this.value.length), {}, ""),
                delete this._refreshing,
                e
              );
            },
          },
          {
            key: "runIsolated",
            value: function (e) {
              if (this._isolated || !this.isInitialized) return e(this);
              this._isolated = !0;
              var t = this.state,
                e = e(this);
              return (this.state = t), delete this._isolated, e;
            },
          },
          {
            key: "doPrepare",
            value: function (e) {
              return this.prepare
                ? this.prepare(
                    e,
                    this,
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {}
                  )
                : e;
            },
          },
          {
            key: "doValidate",
            value: function (e) {
              return (
                (!this.validate || this.validate(this.value, this, e)) &&
                (!this.parent || this.parent.doValidate(e))
              );
            },
          },
          {
            key: "doCommit",
            value: function () {
              this.commit && this.commit(this.value, this);
            },
          },
          {
            key: "doFormat",
            value: function (e) {
              return this.format ? this.format(e, this) : e;
            },
          },
          {
            key: "doParse",
            value: function (e) {
              return this.parse ? this.parse(e, this) : e;
            },
          },
          {
            key: "splice",
            value: function (e, t, n, i) {
              (t = this.extractTail(e + t)), (i = this.nearestInputPos(e, i));
              return new S({ tailShift: i - e })
                .aggregate(this.remove(i))
                .aggregate(this.append(n, { input: !0 }, t));
            },
          },
        ]),
        t
      );
    })();
    function vn(e) {
      if (null == e) throw new Error("mask property should be defined");
      return e instanceof RegExp
        ? A.MaskedRegExp
        : C(e)
        ? A.MaskedPattern
        : e instanceof Date || e === Date
        ? A.MaskedDate
        : e instanceof Number || "number" == typeof e || e === Number
        ? A.MaskedNumber
        : Array.isArray(e) || e === Array
        ? A.MaskedDynamic
        : A.Masked && e.prototype instanceof A.Masked
        ? e
        : e instanceof Function
        ? A.MaskedFunction
        : e instanceof A.Masked
        ? e.constructor
        : (console.warn("Mask not found for mask", e), A.Masked);
    }
    function D(e) {
      if (A.Masked && e instanceof A.Masked) return e;
      var t = (e = Object.assign({}, e)).mask;
      if (A.Masked && t instanceof A.Masked) return t;
      t = vn(t);
      if (t) return new t(e);
      throw new Error(
        "Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask."
      );
    }
    (E.DEFAULTS = {
      format: function (e) {
        return e;
      },
      parse: function (e) {
        return e;
      },
    }),
      (A.Masked = E),
      (A.createMask = D);
    var yn = ["mask"],
      bn = {
        0: /\d/,
        a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        "*": /./,
      },
      _n = (function () {
        function n(e) {
          g(this, n);
          var t = e.mask,
            e = cn(e, yn);
          (this.masked = D({ mask: t })), Object.assign(this, e);
        }
        return (
          v(n, [
            {
              key: "reset",
              value: function () {
                (this._isFilled = !1), this.masked.reset();
              },
            },
            {
              key: "remove",
              value: function () {
                var e =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : this.value.length;
                return 0 === e && 1 <= t
                  ? ((this._isFilled = !1), this.masked.remove(e, t))
                  : new S();
              },
            },
            {
              key: "value",
              get: function () {
                return (
                  this.masked.value ||
                  (this._isFilled && !this.isOptional
                    ? this.placeholderChar
                    : "")
                );
              },
            },
            {
              key: "unmaskedValue",
              get: function () {
                return this.masked.unmaskedValue;
              },
            },
            {
              key: "isComplete",
              get: function () {
                return Boolean(this.masked.value) || this.isOptional;
              },
            },
            {
              key: "_appendChar",
              value: function (e) {
                var t =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                if (this._isFilled) return new S();
                var n = this.masked.state,
                  e = this.masked._appendChar(e, t);
                return (
                  e.inserted &&
                    !1 === this.doValidate(t) &&
                    ((e.inserted = e.rawInserted = ""),
                    (this.masked.state = n)),
                  e.inserted ||
                    this.isOptional ||
                    this.lazy ||
                    t.input ||
                    (e.inserted = this.placeholderChar),
                  (e.skip = !e.inserted && !this.isOptional),
                  (this._isFilled = Boolean(e.inserted)),
                  e
                );
              },
            },
            {
              key: "append",
              value: function () {
                var e;
                return (e = this.masked).append.apply(e, arguments);
              },
            },
            {
              key: "_appendPlaceholder",
              value: function () {
                var e = new S();
                return (
                  this._isFilled ||
                    this.isOptional ||
                    ((this._isFilled = !0),
                    (e.inserted = this.placeholderChar)),
                  e
                );
              },
            },
            {
              key: "extractTail",
              value: function () {
                var e;
                return (e = this.masked).extractTail.apply(e, arguments);
              },
            },
            {
              key: "appendTail",
              value: function () {
                var e;
                return (e = this.masked).appendTail.apply(e, arguments);
              },
            },
            {
              key: "extractInput",
              value: function () {
                var e =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : this.value.length;
                return this.masked.extractInput(
                  e,
                  t,
                  2 < arguments.length ? arguments[2] : void 0
                );
              },
            },
            {
              key: "nearestInputPos",
              value: function (e) {
                var t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : L,
                  n = this.value.length,
                  i = Math.min(Math.max(e, 0), n);
                switch (t) {
                  case R:
                  case N:
                    return this.isComplete ? i : 0;
                  case B:
                  case H:
                    return this.isComplete ? i : n;
                  default:
                    return i;
                }
              },
            },
            {
              key: "doValidate",
              value: function () {
                var e;
                return (
                  (e = this.masked).doValidate.apply(e, arguments) &&
                  (!this.parent ||
                    (e = this.parent).doValidate.apply(e, arguments))
                );
              },
            },
            {
              key: "doCommit",
              value: function () {
                this.masked.doCommit();
              },
            },
            {
              key: "state",
              get: function () {
                return { masked: this.masked.state, _isFilled: this._isFilled };
              },
              set: function (e) {
                (this.masked.state = e.masked), (this._isFilled = e._isFilled);
              },
            },
          ]),
          n
        );
      })(),
      wn = (function () {
        function t(e) {
          g(this, t), Object.assign(this, e), (this._value = "");
        }
        return (
          v(t, [
            {
              key: "value",
              get: function () {
                return this._value;
              },
            },
            {
              key: "unmaskedValue",
              get: function () {
                return this.isUnmasking ? this.value : "";
              },
            },
            {
              key: "reset",
              value: function () {
                (this._isRawInput = !1), (this._value = "");
              },
            },
            {
              key: "remove",
              value: function () {
                var e =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : this._value.length;
                return (
                  (this._value =
                    this._value.slice(0, e) + this._value.slice(t)),
                  this._value || (this._isRawInput = !1),
                  new S()
                );
              },
            },
            {
              key: "nearestInputPos",
              value: function (e) {
                var t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : L,
                  n = this._value.length;
                switch (t) {
                  case R:
                  case N:
                    return 0;
                  default:
                    return n;
                }
              },
            },
            {
              key: "extractInput",
              value: function () {
                var e =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : this._value.length;
                return (
                  ((2 < arguments.length && void 0 !== arguments[2]
                    ? arguments[2]
                    : {}
                  ).raw &&
                    this._isRawInput &&
                    this._value.slice(e, t)) ||
                  ""
                );
              },
            },
            {
              key: "isComplete",
              get: function () {
                return !0;
              },
            },
            {
              key: "_appendChar",
              value: function (e) {
                var t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = new S();
                if (this._value) return n;
                e =
                  this.char === e[0] &&
                  (this.isUnmasking || t.input || t.raw) &&
                  !t.tail;
                return (
                  e && (n.rawInserted = this.char),
                  (this._value = n.inserted = this.char),
                  (this._isRawInput = e && (t.raw || t.input)),
                  n
                );
              },
            },
            {
              key: "_appendPlaceholder",
              value: function () {
                var e = new S();
                return this._value || (this._value = e.inserted = this.char), e;
              },
            },
            {
              key: "extractTail",
              value: function () {
                return (
                  (1 < arguments.length && void 0 !== arguments[1]) ||
                    this.value.length,
                  new T("")
                );
              },
            },
            {
              key: "appendTail",
              value: function (e) {
                return (e = C(e) ? new T(String(e)) : e).appendTo(this);
              },
            },
            {
              key: "append",
              value: function (e, t, n) {
                e = this._appendChar(e, t);
                return (
                  null != n && (e.tailShift += this.appendTail(n).tailShift), e
                );
              },
            },
            { key: "doCommit", value: function () {} },
            {
              key: "state",
              get: function () {
                return { _value: this._value, _isRawInput: this._isRawInput };
              },
              set: function (e) {
                Object.assign(this, e);
              },
            },
          ]),
          t
        );
      })(),
      kn = ["chunks"],
      xn = (function () {
        function a() {
          var e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
          g(this, a), (this.chunks = e), (this.from = t);
        }
        return (
          v(a, [
            {
              key: "toString",
              value: function () {
                return this.chunks.map(String).join("");
              },
            },
            {
              key: "extend",
              value: function (e) {
                if (String(e)) {
                  C(e) && (e = new T(String(e)));
                  var t,
                    n = this.chunks[this.chunks.length - 1],
                    i =
                      n &&
                      (n.stop === e.stop || null == e.stop) &&
                      e.from === n.from + n.toString().length;
                  if (e instanceof T)
                    i ? n.extend(e.toString()) : this.chunks.push(e);
                  else if (e instanceof a) {
                    if (null == e.stop)
                      for (; e.chunks.length && null == e.chunks[0].stop; )
                        ((t = e.chunks.shift()).from += e.from), this.extend(t);
                    e.toString() &&
                      ((e.stop = e.blockIndex), this.chunks.push(e));
                  }
                }
              },
            },
            {
              key: "appendTo",
              value: function (e) {
                if (!(e instanceof A.MaskedPattern))
                  return new T(this.toString()).appendTo(e);
                for (
                  var t = new S(), n = 0;
                  n < this.chunks.length && !t.skip;
                  ++n
                ) {
                  var i = this.chunks[n],
                    o = e._mapPosToBlock(e.value.length),
                    s = i.stop,
                    r = void 0;
                  null != s &&
                    (!o || o.index <= s) &&
                    ((i instanceof a || 0 <= e._stops.indexOf(s)) &&
                      t.aggregate(e._appendPlaceholder(s)),
                    (r = i instanceof a && e._blocks[s])),
                    r
                      ? (((o = r.appendTail(i)).skip = !1),
                        t.aggregate(o),
                        (e._value += o.inserted),
                        (s = i.toString().slice(o.rawInserted.length)) &&
                          t.aggregate(e.append(s, { tail: !0 })))
                      : t.aggregate(e.append(i.toString(), { tail: !0 }));
                }
                return t;
              },
            },
            {
              key: "state",
              get: function () {
                return {
                  chunks: this.chunks.map(function (e) {
                    return e.state;
                  }),
                  from: this.from,
                  stop: this.stop,
                  blockIndex: this.blockIndex,
                };
              },
              set: function (e) {
                var t = e.chunks,
                  e = cn(e, kn);
                Object.assign(this, e),
                  (this.chunks = t.map(function (e) {
                    var t = new ("chunks" in e ? a : T)();
                    return (t.state = e), t;
                  }));
              },
            },
            {
              key: "shiftBefore",
              value: function (e) {
                if (this.from >= e || !this.chunks.length) return "";
                for (var t = e - this.from, n = 0; n < this.chunks.length; ) {
                  var i = this.chunks[n],
                    o = i.shiftBefore(t);
                  if (i.toString()) {
                    if (!o) break;
                    ++n;
                  } else this.chunks.splice(n, 1);
                  if (o) return o;
                }
                return "";
              },
            },
          ]),
          a
        );
      })(),
      l = (function () {
        y(n, E);
        var e = _(n);
        function n() {
          return g(this, n), e.apply(this, arguments);
        }
        return (
          v(n, [
            {
              key: "_update",
              value: function (t) {
                t.mask &&
                  (t.validate = function (e) {
                    return 0 <= e.search(t.mask);
                  }),
                  w(b(n.prototype), "_update", this).call(this, t);
              },
            },
          ]),
          n
        );
      })(),
      Cn = ((A.MaskedRegExp = l), ["_blocks"]),
      O = (function () {
        y(l, E);
        var t = _(l);
        function l() {
          var e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          return (
            g(this, l),
            (e.definitions = Object.assign({}, bn, e.definitions)),
            t.call(this, Object.assign({}, l.DEFAULTS, e))
          );
        }
        return (
          v(l, [
            {
              key: "_update",
              value: function () {
                var e =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                (e.definitions = Object.assign(
                  {},
                  this.definitions,
                  e.definitions
                )),
                  w(b(l.prototype), "_update", this).call(this, e),
                  this._rebuildMask();
              },
            },
            {
              key: "_rebuildMask",
              value: function () {
                var i = this,
                  e = this.definitions,
                  o =
                    ((this._blocks = []),
                    (this._stops = []),
                    (this._maskedBlocks = {}),
                    this.mask);
                if (o && e)
                  for (var t = !1, n = !1, s = 0; s < o.length; ++s) {
                    if (this.blocks)
                      if (
                        "continue" ===
                        (function () {
                          var e,
                            t = o.slice(s),
                            n = Object.keys(i.blocks).filter(function (e) {
                              return 0 === t.indexOf(e);
                            }),
                            n =
                              (n.sort(function (e, t) {
                                return t.length - e.length;
                              }),
                              n[0]);
                          if (n)
                            return (
                              (e = D(
                                Object.assign(
                                  {
                                    parent: i,
                                    lazy: i.lazy,
                                    placeholderChar: i.placeholderChar,
                                    overwrite: i.overwrite,
                                  },
                                  i.blocks[n]
                                )
                              )) &&
                                (i._blocks.push(e),
                                i._maskedBlocks[n] || (i._maskedBlocks[n] = []),
                                i._maskedBlocks[n].push(i._blocks.length - 1)),
                              (s += n.length - 1),
                              "continue"
                            );
                        })()
                      )
                        continue;
                    var r = o[s],
                      a = r in e;
                    if (r === l.STOP_CHAR)
                      this._stops.push(this._blocks.length);
                    else if ("{" === r || "}" === r) t = !t;
                    else if ("[" === r || "]" === r) n = !n;
                    else {
                      if (r === l.ESCAPE_CHAR) {
                        if (!(r = o[++s])) break;
                        a = !1;
                      }
                      a = a
                        ? new _n({
                            parent: this,
                            lazy: this.lazy,
                            placeholderChar: this.placeholderChar,
                            mask: e[r],
                            isOptional: n,
                          })
                        : new wn({ char: r, isUnmasking: t });
                      this._blocks.push(a);
                    }
                  }
              },
            },
            {
              key: "state",
              get: function () {
                return Object.assign({}, w(b(l.prototype), "state", this), {
                  _blocks: this._blocks.map(function (e) {
                    return e.state;
                  }),
                });
              },
              set: function (e) {
                var n = e._blocks,
                  e = cn(e, Cn);
                this._blocks.forEach(function (e, t) {
                  return (e.state = n[t]);
                }),
                  k(b(l.prototype), "state", e, this, !0);
              },
            },
            {
              key: "reset",
              value: function () {
                w(b(l.prototype), "reset", this).call(this),
                  this._blocks.forEach(function (e) {
                    return e.reset();
                  });
              },
            },
            {
              key: "isComplete",
              get: function () {
                return this._blocks.every(function (e) {
                  return e.isComplete;
                });
              },
            },
            {
              key: "doCommit",
              value: function () {
                this._blocks.forEach(function (e) {
                  return e.doCommit();
                }),
                  w(b(l.prototype), "doCommit", this).call(this);
              },
            },
            {
              key: "unmaskedValue",
              get: function () {
                return this._blocks.reduce(function (e, t) {
                  return e + t.unmaskedValue;
                }, "");
              },
              set: function (e) {
                k(b(l.prototype), "unmaskedValue", e, this, !0);
              },
            },
            {
              key: "value",
              get: function () {
                return this._blocks.reduce(function (e, t) {
                  return e + t.value;
                }, "");
              },
              set: function (e) {
                k(b(l.prototype), "value", e, this, !0);
              },
            },
            {
              key: "appendTail",
              value: function (e) {
                return w(b(l.prototype), "appendTail", this)
                  .call(this, e)
                  .aggregate(this._appendPlaceholder());
              },
            },
            {
              key: "_appendCharRaw",
              value: function (e) {
                var t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = this._mapPosToBlock(this.value.length),
                  i = new S();
                if (!n) return i;
                for (var o = n.index; ; ++o) {
                  var s = this._blocks[o];
                  if (!s) break;
                  var s = s._appendChar(e, t),
                    r = s.skip;
                  if ((i.aggregate(s), r || s.rawInserted)) break;
                }
                return i;
              },
            },
            {
              key: "extractTail",
              value: function () {
                var o = this,
                  e =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : this.value.length,
                  s = new xn();
                return (
                  e === t ||
                    this._forEachBlocksInRange(e, t, function (e, t, n, i) {
                      e = e.extractTail(n, i);
                      (e.stop = o._findStopBefore(t)),
                        (e.from = o._blockStartPos(t)),
                        e instanceof xn && (e.blockIndex = t),
                        s.extend(e);
                    }),
                  s
                );
              },
            },
            {
              key: "extractInput",
              value: function () {
                var e =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : this.value.length,
                  o =
                    2 < arguments.length && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                if (e === t) return "";
                var s = "";
                return (
                  this._forEachBlocksInRange(e, t, function (e, t, n, i) {
                    s += e.extractInput(n, i, o);
                  }),
                  s
                );
              },
            },
            {
              key: "_findStopBefore",
              value: function (e) {
                for (var t, n = 0; n < this._stops.length; ++n) {
                  var i = this._stops[n];
                  if (!(i <= e)) break;
                  t = i;
                }
                return t;
              },
            },
            {
              key: "_appendPlaceholder",
              value: function (n) {
                var i = this,
                  o = new S();
                if (this.lazy && null == n) return o;
                var e = this._mapPosToBlock(this.value.length);
                if (!e) return o;
                var e = e.index,
                  t = null != n ? n : this._blocks.length;
                return (
                  this._blocks.slice(e, t).forEach(function (e) {
                    var t;
                    (e.lazy && null == n) ||
                      ((t = null != e._blocks ? [e._blocks.length] : []),
                      (e = e._appendPlaceholder.apply(e, t)),
                      (i._value += e.inserted),
                      o.aggregate(e));
                  }),
                  o
                );
              },
            },
            {
              key: "_mapPosToBlock",
              value: function (e) {
                for (var t = "", n = 0; n < this._blocks.length; ++n) {
                  var i = this._blocks[n],
                    o = t.length;
                  if (e <= (t += i.value).length)
                    return { index: n, offset: e - o };
                }
              },
            },
            {
              key: "_blockStartPos",
              value: function (e) {
                return this._blocks.slice(0, e).reduce(function (e, t) {
                  return e + t.value.length;
                }, 0);
              },
            },
            {
              key: "_forEachBlocksInRange",
              value: function (e) {
                var t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : this.value.length,
                  n = 2 < arguments.length ? arguments[2] : void 0,
                  e = this._mapPosToBlock(e);
                if (e) {
                  var i = this._mapPosToBlock(t),
                    t = i && e.index === i.index,
                    o = e.offset,
                    s = i && t ? i.offset : this._blocks[e.index].value.length;
                  if ((n(this._blocks[e.index], e.index, o, s), i && !t)) {
                    for (var r = e.index + 1; r < i.index; ++r)
                      n(this._blocks[r], r, 0, this._blocks[r].value.length);
                    n(this._blocks[i.index], i.index, 0, i.offset);
                  }
                }
              },
            },
            {
              key: "remove",
              value: function () {
                var e =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : this.value.length,
                  o = w(b(l.prototype), "remove", this).call(this, e, t);
                return (
                  this._forEachBlocksInRange(e, t, function (e, t, n, i) {
                    o.aggregate(e.remove(n, i));
                  }),
                  o
                );
              },
            },
            {
              key: "nearestInputPos",
              value: function (e) {
                var t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : L,
                  n = this._mapPosToBlock(e) || { index: 0, offset: 0 },
                  i = n.offset,
                  n = n.index,
                  o = this._blocks[n];
                if (!o) return e;
                var s = i,
                  i =
                    (s =
                      0 !== s && s < o.value.length
                        ? o.nearestInputPos(
                            i,
                            (function (e) {
                              switch (e) {
                                case R:
                                  return N;
                                case B:
                                  return H;
                                default:
                                  return e;
                              }
                            })(t)
                          )
                        : s) === o.value.length;
                if (!(0 === s) && !i) return this._blockStartPos(n) + s;
                var r = i ? n + 1 : n;
                if (t === L) {
                  if (0 < r) {
                    (o = this._blocks[r - 1]), (s = o.nearestInputPos(0, L));
                    if (!o.value.length || s !== o.value.length)
                      return this._blockStartPos(r);
                  }
                  for (var a = r; a < this._blocks.length; ++a) {
                    var l = this._blocks[a],
                      u = l.nearestInputPos(0, L);
                    if (!l.value.length || u !== l.value.length)
                      return this._blockStartPos(a) + u;
                  }
                  for (var c = r - 1; 0 <= c; --c) {
                    var d = this._blocks[c],
                      I = d.nearestInputPos(0, L);
                    if (!d.value.length || I !== d.value.length)
                      return this._blockStartPos(c) + d.value.length;
                  }
                  return e;
                }
                if (t === R || t === N) {
                  for (var h, p = r; p < this._blocks.length; ++p)
                    if (this._blocks[p].value) {
                      h = p;
                      break;
                    }
                  if (null != h) {
                    (i = this._blocks[h]), (n = i.nearestInputPos(0, B));
                    if (0 === n && i.unmaskedValue.length)
                      return this._blockStartPos(h) + n;
                  }
                  for (var f, m = -1, g = r - 1; 0 <= g; --g) {
                    var v = this._blocks[g],
                      y = v.nearestInputPos(v.value.length, N);
                    if (((v.value && 0 === y) || (f = g), 0 !== y)) {
                      if (y !== v.value.length)
                        return this._blockStartPos(g) + y;
                      m = g;
                      break;
                    }
                  }
                  if (t === R)
                    for (
                      var b = m + 1;
                      b <= Math.min(r, this._blocks.length - 1);
                      ++b
                    ) {
                      var _ = this._blocks[b],
                        w = _.nearestInputPos(0, L),
                        k = this._blockStartPos(b) + w;
                      if (e < k) break;
                      if (w !== _.value.length) return k;
                    }
                  if (0 <= m)
                    return (
                      this._blockStartPos(m) + this._blocks[m].value.length
                    );
                  if (
                    t === N ||
                    (this.lazy &&
                      !this.extractInput() &&
                      !(function (e) {
                        if (!e) return;
                        var t = e.value;
                        return !t || e.nearestInputPos(0, L) !== t.length;
                      })(this._blocks[r]))
                  )
                    return 0;
                  if (null != f) return this._blockStartPos(f);
                  for (var x = r; x < this._blocks.length; ++x) {
                    var C = this._blocks[x],
                      S = C.nearestInputPos(0, L);
                    if (!C.value.length || S !== C.value.length)
                      return this._blockStartPos(x) + S;
                  }
                  return 0;
                }
                if (t === B || t === H) {
                  for (var T, A, E = r; E < this._blocks.length; ++E) {
                    var D = this._blocks[E],
                      O = D.nearestInputPos(0, L);
                    if (O !== D.value.length) {
                      (A = this._blockStartPos(E) + O), (T = E);
                      break;
                    }
                  }
                  if (null != T && null != A) {
                    for (var $ = T; $ < this._blocks.length; ++$) {
                      var j = this._blocks[$],
                        P = j.nearestInputPos(0, H);
                      if (P !== j.value.length)
                        return this._blockStartPos($) + P;
                    }
                    return t === H ? this.value.length : A;
                  }
                  for (
                    var F = Math.min(r, this._blocks.length - 1);
                    0 <= F;
                    --F
                  ) {
                    var M = this._blocks[F],
                      M = M.nearestInputPos(M.value.length, R);
                    if (0 !== M) {
                      M = this._blockStartPos(F) + M;
                      if (e <= M) return M;
                      break;
                    }
                  }
                }
                return e;
              },
            },
            {
              key: "maskedBlock",
              value: function (e) {
                return this.maskedBlocks(e)[0];
              },
            },
            {
              key: "maskedBlocks",
              value: function (e) {
                var t = this,
                  e = this._maskedBlocks[e];
                return e
                  ? e.map(function (e) {
                      return t._blocks[e];
                    })
                  : [];
              },
            },
          ]),
          l
        );
      })();
    (O.DEFAULTS = { lazy: !0, placeholderChar: "_" }),
      (O.STOP_CHAR = "`"),
      (O.ESCAPE_CHAR = "\\"),
      (O.InputDefinition = _n),
      (O.FixedDefinition = wn),
      (A.MaskedPattern = O);
    var Sn = (function () {
        y(c, O);
        var e = _(c);
        function c() {
          return g(this, c), e.apply(this, arguments);
        }
        return (
          v(c, [
            {
              key: "_matchFrom",
              get: function () {
                return this.maxLength - String(this.from).length;
              },
            },
            {
              key: "_update",
              value: function (e) {
                e = Object.assign(
                  { to: this.to || 0, from: this.from || 0 },
                  e
                );
                for (
                  var t = String(e.to).length,
                    n =
                      (null != e.maxLength && (t = Math.max(t, e.maxLength)),
                      (e.maxLength = t),
                      String(e.from).padStart(t, "0")),
                    i = String(e.to).padStart(t, "0"),
                    o = 0;
                  o < i.length && i[o] === n[o];

                )
                  ++o;
                (e.mask =
                  i.slice(0, o).replace(/0/g, "\\0") + "0".repeat(t - o)),
                  w(b(c.prototype), "_update", this).call(this, e);
              },
            },
            {
              key: "isComplete",
              get: function () {
                return (
                  w(b(c.prototype), "isComplete", this) && Boolean(this.value)
                );
              },
            },
            {
              key: "boundaries",
              value: function (e) {
                var t = "",
                  n = "",
                  e = x(e.match(/^(\D*)(\d*)(\D*)/) || [], 3),
                  i = e[1],
                  e = e[2];
                return (
                  e &&
                    ((t = "0".repeat(i.length) + e),
                    (n = "9".repeat(i.length) + e)),
                  [
                    (t = t.padEnd(this.maxLength, "0")),
                    (n = n.padEnd(this.maxLength, "9")),
                  ]
                );
              },
            },
            {
              key: "doPrepare",
              value: function (e) {
                var t =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                if (
                  ((e = w(b(c.prototype), "doPrepare", this)
                    .call(this, e, t)
                    .replace(/\D/g, "")),
                  !this.autofix)
                )
                  return e;
                for (
                  var n = String(this.from).padStart(this.maxLength, "0"),
                    i = String(this.to).padStart(this.maxLength, "0"),
                    o = this.value,
                    s = "",
                    r = 0;
                  r < e.length;
                  ++r
                ) {
                  var a = o + s + e[r],
                    l = x(this.boundaries(a), 2),
                    u = l[0],
                    l = l[1];
                  Number(l) < this.from
                    ? (s += n[a.length - 1])
                    : Number(u) > this.to
                    ? (s += i[a.length - 1])
                    : (s += e[r]);
                }
                return s;
              },
            },
            {
              key: "doValidate",
              value: function () {
                var e = this.value;
                if (-1 === e.search(/[^0]/) && e.length <= this._matchFrom)
                  return !0;
                for (
                  var e = x(this.boundaries(e), 2),
                    t = e[0],
                    e = e[1],
                    n = arguments.length,
                    i = new Array(n),
                    o = 0;
                  o < n;
                  o++
                )
                  i[o] = arguments[o];
                return (
                  this.from <= Number(e) &&
                  Number(t) <= this.to &&
                  (e = w(b(c.prototype), "doValidate", this)).call.apply(
                    e,
                    [this].concat(i)
                  )
                );
              },
            },
          ]),
          c
        );
      })(),
      Tn =
        ((A.MaskedRange = Sn),
        (function () {
          y(s, O);
          var t = _(s);
          function s(e) {
            return g(this, s), t.call(this, Object.assign({}, s.DEFAULTS, e));
          }
          return (
            v(s, [
              {
                key: "_update",
                value: function (t) {
                  t.mask === Date && delete t.mask,
                    t.pattern && (t.mask = t.pattern);
                  var e = t.blocks;
                  (t.blocks = Object.assign({}, s.GET_DEFAULT_BLOCKS())),
                    t.min && (t.blocks.Y.from = t.min.getFullYear()),
                    t.max && (t.blocks.Y.to = t.max.getFullYear()),
                    t.min &&
                      t.max &&
                      t.blocks.Y.from === t.blocks.Y.to &&
                      ((t.blocks.m.from = t.min.getMonth() + 1),
                      (t.blocks.m.to = t.max.getMonth() + 1),
                      t.blocks.m.from === t.blocks.m.to &&
                        ((t.blocks.d.from = t.min.getDate()),
                        (t.blocks.d.to = t.max.getDate()))),
                    Object.assign(t.blocks, e),
                    Object.keys(t.blocks).forEach(function (e) {
                      e = t.blocks[e];
                      "autofix" in e || (e.autofix = t.autofix);
                    }),
                    w(b(s.prototype), "_update", this).call(this, t);
                },
              },
              {
                key: "doValidate",
                value: function () {
                  for (
                    var e,
                      t = this.date,
                      n = arguments.length,
                      i = new Array(n),
                      o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    (e = w(b(s.prototype), "doValidate", this)).call.apply(
                      e,
                      [this].concat(i)
                    ) &&
                    (!this.isComplete ||
                      (this.isDateExist(this.value) &&
                        null != t &&
                        (null == this.min || this.min <= t) &&
                        (null == this.max || t <= this.max)))
                  );
                },
              },
              {
                key: "isDateExist",
                value: function (e) {
                  return 0 <= this.format(this.parse(e, this), this).indexOf(e);
                },
              },
              {
                key: "date",
                get: function () {
                  return this.typedValue;
                },
                set: function (e) {
                  this.typedValue = e;
                },
              },
              {
                key: "typedValue",
                get: function () {
                  return this.isComplete
                    ? w(b(s.prototype), "typedValue", this)
                    : null;
                },
                set: function (e) {
                  k(b(s.prototype), "typedValue", e, this, !0);
                },
              },
            ]),
            s
          );
        })()),
      An =
        ((Tn.DEFAULTS = {
          pattern: "d{.}`m{.}`Y",
          format: function (e) {
            return [
              String(e.getDate()).padStart(2, "0"),
              String(e.getMonth() + 1).padStart(2, "0"),
              e.getFullYear(),
            ].join(".");
          },
          parse: function (e) {
            var e = x(e.split("."), 3),
              t = e[0],
              n = e[1],
              e = e[2];
            return new Date(e, n - 1, t);
          },
        }),
        (Tn.GET_DEFAULT_BLOCKS = function () {
          return {
            d: { mask: Sn, from: 1, to: 31, maxLength: 2 },
            m: { mask: Sn, from: 1, to: 12, maxLength: 2 },
            Y: { mask: Sn, from: 1900, to: 9999 },
          };
        }),
        (A.MaskedDate = Tn),
        (function () {
          function e() {
            g(this, e);
          }
          return (
            v(e, [
              {
                key: "selectionStart",
                get: function () {
                  var e;
                  try {
                    e = this._unsafeSelectionStart;
                  } catch (e) {}
                  return null != e ? e : this.value.length;
                },
              },
              {
                key: "selectionEnd",
                get: function () {
                  var e;
                  try {
                    e = this._unsafeSelectionEnd;
                  } catch (e) {}
                  return null != e ? e : this.value.length;
                },
              },
              {
                key: "select",
                value: function (e, t) {
                  if (
                    null != e &&
                    null != t &&
                    (e !== this.selectionStart || t !== this.selectionEnd)
                  )
                    try {
                      this._unsafeSelect(e, t);
                    } catch (e) {}
                },
              },
              { key: "_unsafeSelect", value: function (e, t) {} },
              {
                key: "isActive",
                get: function () {
                  return !1;
                },
              },
              { key: "bindEvents", value: function (e) {} },
              { key: "unbindEvents", value: function () {} },
            ]),
            e
          );
        })()),
      En =
        ((A.MaskElement = An),
        (function () {
          y(i, An);
          var n = _(i);
          function i(e) {
            var t;
            return (
              g(this, i), ((t = n.call(this)).input = e), (t._handlers = {}), t
            );
          }
          return (
            v(i, [
              {
                key: "rootElement",
                get: function () {
                  return this.input.getRootNode
                    ? this.input.getRootNode()
                    : document;
                },
              },
              {
                key: "isActive",
                get: function () {
                  return this.input === this.rootElement.activeElement;
                },
              },
              {
                key: "_unsafeSelectionStart",
                get: function () {
                  return this.input.selectionStart;
                },
              },
              {
                key: "_unsafeSelectionEnd",
                get: function () {
                  return this.input.selectionEnd;
                },
              },
              {
                key: "_unsafeSelect",
                value: function (e, t) {
                  this.input.setSelectionRange(e, t);
                },
              },
              {
                key: "value",
                get: function () {
                  return this.input.value;
                },
                set: function (e) {
                  this.input.value = e;
                },
              },
              {
                key: "bindEvents",
                value: function (t) {
                  var n = this;
                  Object.keys(t).forEach(function (e) {
                    return n._toggleEventHandler(i.EVENTS_MAP[e], t[e]);
                  });
                },
              },
              {
                key: "unbindEvents",
                value: function () {
                  var t = this;
                  Object.keys(this._handlers).forEach(function (e) {
                    return t._toggleEventHandler(e);
                  });
                },
              },
              {
                key: "_toggleEventHandler",
                value: function (e, t) {
                  this._handlers[e] &&
                    (this.input.removeEventListener(e, this._handlers[e]),
                    delete this._handlers[e]),
                    t &&
                      (this.input.addEventListener(e, t),
                      (this._handlers[e] = t));
                },
              },
            ]),
            i
          );
        })()),
      Dn =
        ((En.EVENTS_MAP = {
          selectionChange: "keydown",
          input: "input",
          drop: "drop",
          click: "click",
          focus: "focus",
          commit: "blur",
        }),
        (A.HTMLMaskElement = En),
        (function () {
          y(t, En);
          var e = _(t);
          function t() {
            return g(this, t), e.apply(this, arguments);
          }
          return (
            v(t, [
              {
                key: "_unsafeSelectionStart",
                get: function () {
                  var e = this.rootElement,
                    e = e.getSelection && e.getSelection();
                  return e && e.anchorOffset;
                },
              },
              {
                key: "_unsafeSelectionEnd",
                get: function () {
                  var e = this.rootElement,
                    e = e.getSelection && e.getSelection();
                  return e && this._unsafeSelectionStart + String(e).length;
                },
              },
              {
                key: "_unsafeSelect",
                value: function (e, t) {
                  var n;
                  this.rootElement.createRange &&
                    ((n = this.rootElement.createRange()).setStart(
                      this.input.firstChild || this.input,
                      e
                    ),
                    n.setEnd(this.input.lastChild || this.input, t),
                    (t =
                      (e = this.rootElement).getSelection &&
                      e.getSelection()) &&
                      (t.removeAllRanges(), t.addRange(n)));
                },
              },
              {
                key: "value",
                get: function () {
                  return this.input.textContent;
                },
                set: function (e) {
                  this.input.textContent = e;
                },
              },
            ]),
            t
          );
        })()),
      On = ((A.HTMLContenteditableMaskElement = Dn), ["mask"]),
      Ae = (function () {
        function n(e, t) {
          g(this, n),
            (this.el =
              e instanceof An
                ? e
                : new (e.isContentEditable &&
                  "INPUT" !== e.tagName &&
                  "TEXTAREA" !== e.tagName
                    ? Dn
                    : En)(e)),
            (this.masked = D(t)),
            (this._listeners = {}),
            (this._value = ""),
            (this._unmaskedValue = ""),
            (this._saveSelection = this._saveSelection.bind(this)),
            (this._onInput = this._onInput.bind(this)),
            (this._onChange = this._onChange.bind(this)),
            (this._onDrop = this._onDrop.bind(this)),
            (this._onFocus = this._onFocus.bind(this)),
            (this._onClick = this._onClick.bind(this)),
            (this.alignCursor = this.alignCursor.bind(this)),
            (this.alignCursorFriendly = this.alignCursorFriendly.bind(this)),
            this._bindEvents(),
            this.updateValue(),
            this._onChange();
        }
        return (
          v(n, [
            {
              key: "mask",
              get: function () {
                return this.masked.mask;
              },
              set: function (e) {
                var t;
                this.maskEquals(e) ||
                  (e instanceof A.Masked || this.masked.constructor !== vn(e)
                    ? (((t = D({ mask: e })).unmaskedValue =
                        this.masked.unmaskedValue),
                      (this.masked = t))
                    : this.masked.updateOptions({ mask: e }));
              },
            },
            {
              key: "maskEquals",
              value: function (e) {
                return (
                  null == e ||
                  e === this.masked.mask ||
                  (e === Date && this.masked instanceof Tn)
                );
              },
            },
            {
              key: "value",
              get: function () {
                return this._value;
              },
              set: function (e) {
                (this.masked.value = e),
                  this.updateControl(),
                  this.alignCursor();
              },
            },
            {
              key: "unmaskedValue",
              get: function () {
                return this._unmaskedValue;
              },
              set: function (e) {
                (this.masked.unmaskedValue = e),
                  this.updateControl(),
                  this.alignCursor();
              },
            },
            {
              key: "typedValue",
              get: function () {
                return this.masked.typedValue;
              },
              set: function (e) {
                (this.masked.typedValue = e),
                  this.updateControl(),
                  this.alignCursor();
              },
            },
            {
              key: "_bindEvents",
              value: function () {
                this.el.bindEvents({
                  selectionChange: this._saveSelection,
                  input: this._onInput,
                  drop: this._onDrop,
                  click: this._onClick,
                  focus: this._onFocus,
                  commit: this._onChange,
                });
              },
            },
            {
              key: "_unbindEvents",
              value: function () {
                this.el && this.el.unbindEvents();
              },
            },
            {
              key: "_fireEvent",
              value: function (e) {
                for (
                  var t = arguments.length,
                    n = new Array(1 < t ? t - 1 : 0),
                    i = 1;
                  i < t;
                  i++
                )
                  n[i - 1] = arguments[i];
                e = this._listeners[e];
                e &&
                  e.forEach(function (e) {
                    return e.apply(void 0, n);
                  });
              },
            },
            {
              key: "selectionStart",
              get: function () {
                return this._cursorChanging
                  ? this._changingCursorPos
                  : this.el.selectionStart;
              },
            },
            {
              key: "cursorPos",
              get: function () {
                return this._cursorChanging
                  ? this._changingCursorPos
                  : this.el.selectionEnd;
              },
              set: function (e) {
                this.el &&
                  this.el.isActive &&
                  (this.el.select(e, e), this._saveSelection());
              },
            },
            {
              key: "_saveSelection",
              value: function () {
                this.value !== this.el.value &&
                  console.warn(
                    "Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."
                  ),
                  (this._selection = {
                    start: this.selectionStart,
                    end: this.cursorPos,
                  });
              },
            },
            {
              key: "updateValue",
              value: function () {
                (this.masked.value = this.el.value),
                  (this._value = this.masked.value);
              },
            },
            {
              key: "updateControl",
              value: function () {
                var e = this.masked.unmaskedValue,
                  t = this.masked.value,
                  n = this.unmaskedValue !== e || this.value !== t;
                (this._unmaskedValue = e),
                  (this._value = t),
                  this.el.value !== t && (this.el.value = t),
                  n && this._fireChangeEvents();
              },
            },
            {
              key: "updateOptions",
              value: function (e) {
                var t = e.mask,
                  e = cn(e, On),
                  n = !this.maskEquals(t),
                  i = !(function e(t, n) {
                    if (n === t) return 1;
                    var i = Array.isArray(n),
                      o = Array.isArray(t);
                    if (i && o) {
                      if (n.length != t.length) return;
                      for (r = 0; r < n.length; r++) if (!e(n[r], t[r])) return;
                      return 1;
                    }
                    if (i == o) {
                      if (n && t && "object" === an(n) && "object" === an(t)) {
                        if (
                          ((i = n instanceof Date),
                          (o = t instanceof Date),
                          i && o)
                        )
                          return n.getTime() == t.getTime();
                        if (i != o) return;
                        if (
                          ((i = n instanceof RegExp),
                          (o = t instanceof RegExp),
                          i && o)
                        )
                          return n.toString() == t.toString();
                        if (i != o) return;
                        for (var s = Object.keys(n), r = 0; r < s.length; r++)
                          if (!Object.prototype.hasOwnProperty.call(t, s[r]))
                            return;
                        for (r = 0; r < s.length; r++)
                          if (!e(t[s[r]], n[s[r]])) return;
                        return 1;
                      }
                      return (
                        n &&
                        t &&
                        "function" == typeof n &&
                        "function" == typeof t &&
                        n.toString() === t.toString()
                      );
                    }
                  })(this.masked, e);
                n && (this.mask = t),
                  i && this.masked.updateOptions(e),
                  (n || i) && this.updateControl();
              },
            },
            {
              key: "updateCursor",
              value: function (e) {
                null != e && ((this.cursorPos = e), this._delayUpdateCursor(e));
              },
            },
            {
              key: "_delayUpdateCursor",
              value: function (e) {
                var t = this;
                this._abortUpdateCursor(),
                  (this._changingCursorPos = e),
                  (this._cursorChanging = setTimeout(function () {
                    t.el &&
                      ((t.cursorPos = t._changingCursorPos),
                      t._abortUpdateCursor());
                  }, 10));
              },
            },
            {
              key: "_fireChangeEvents",
              value: function () {
                this._fireEvent("accept", this._inputEvent),
                  this.masked.isComplete &&
                    this._fireEvent("complete", this._inputEvent);
              },
            },
            {
              key: "_abortUpdateCursor",
              value: function () {
                this._cursorChanging &&
                  (clearTimeout(this._cursorChanging),
                  delete this._cursorChanging);
              },
            },
            {
              key: "alignCursor",
              value: function () {
                this.cursorPos = this.masked.nearestInputPos(this.cursorPos, R);
              },
            },
            {
              key: "alignCursorFriendly",
              value: function () {
                this.selectionStart === this.cursorPos && this.alignCursor();
              },
            },
            {
              key: "on",
              value: function (e, t) {
                return (
                  this._listeners[e] || (this._listeners[e] = []),
                  this._listeners[e].push(t),
                  this
                );
              },
            },
            {
              key: "off",
              value: function (e, t) {
                if (!this._listeners[e]) return this;
                if (!t) return delete this._listeners[e], this;
                t = this._listeners[e].indexOf(t);
                return 0 <= t && this._listeners[e].splice(t, 1), this;
              },
            },
            {
              key: "_onInput",
              value: function (e) {
                if (
                  ((this._inputEvent = e),
                  this._abortUpdateCursor(),
                  !this._selection)
                )
                  return this.updateValue();
                var e = new gn(
                    this.el.value,
                    this.cursorPos,
                    this.value,
                    this._selection
                  ),
                  t = this.masked.rawInputValue,
                  n = this.masked.splice(
                    e.startChangePos,
                    e.removed.length,
                    e.inserted,
                    e.removeDirection
                  ).offset,
                  t = t === this.masked.rawInputValue ? e.removeDirection : L,
                  e = this.masked.nearestInputPos(e.startChangePos + n, t);
                this.updateControl(),
                  this.updateCursor(e),
                  delete this._inputEvent;
              },
            },
            {
              key: "_onChange",
              value: function () {
                this.value !== this.el.value && this.updateValue(),
                  this.masked.doCommit(),
                  this.updateControl(),
                  this._saveSelection();
              },
            },
            {
              key: "_onDrop",
              value: function (e) {
                e.preventDefault(), e.stopPropagation();
              },
            },
            {
              key: "_onFocus",
              value: function (e) {
                this.alignCursorFriendly();
              },
            },
            {
              key: "_onClick",
              value: function (e) {
                this.alignCursorFriendly();
              },
            },
            {
              key: "destroy",
              value: function () {
                this._unbindEvents(),
                  (this._listeners.length = 0),
                  delete this.el;
              },
            },
          ]),
          n
        );
      })(),
      f =
        ((A.InputMask = Ae),
        (function () {
          y(s, O);
          var e = _(s);
          function s() {
            return g(this, s), e.apply(this, arguments);
          }
          return (
            v(s, [
              {
                key: "_update",
                value: function (e) {
                  e.enum && (e.mask = "*".repeat(e.enum[0].length)),
                    w(b(s.prototype), "_update", this).call(this, e);
                },
              },
              {
                key: "doValidate",
                value: function () {
                  for (
                    var e,
                      t = this,
                      n = arguments.length,
                      i = new Array(n),
                      o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    this.enum.some(function (e) {
                      return 0 <= e.indexOf(t.unmaskedValue);
                    }) &&
                    (e = w(b(s.prototype), "doValidate", this)).call.apply(
                      e,
                      [this].concat(i)
                    )
                  );
                },
              },
            ]),
            s
          );
        })()),
      r =
        ((A.MaskedEnum = f),
        (function () {
          y(s, E);
          var t = _(s);
          function s(e) {
            return g(this, s), t.call(this, Object.assign({}, s.DEFAULTS, e));
          }
          return (
            v(s, [
              {
                key: "_update",
                value: function (e) {
                  w(b(s.prototype), "_update", this).call(this, e),
                    this._updateRegExps();
                },
              },
              {
                key: "_updateRegExps",
                value: function () {
                  var e = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
                    t =
                      (this.scale
                        ? "(" + mn(this.radix) + "\\d{0," + this.scale + "})?"
                        : "") + "$";
                  (this._numberRegExpInput = new RegExp(
                    e + "(0|([1-9]+\\d*))?" + t
                  )),
                    (this._numberRegExp = new RegExp(e + "\\d*" + t)),
                    (this._mapToRadixRegExp = new RegExp(
                      "[" + this.mapToRadix.map(mn).join("") + "]",
                      "g"
                    )),
                    (this._thousandsSeparatorRegExp = new RegExp(
                      mn(this.thousandsSeparator),
                      "g"
                    ));
                },
              },
              {
                key: "_removeThousandsSeparators",
                value: function (e) {
                  return e.replace(this._thousandsSeparatorRegExp, "");
                },
              },
              {
                key: "_insertThousandsSeparators",
                value: function (e) {
                  e = e.split(this.radix);
                  return (
                    (e[0] = e[0].replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      this.thousandsSeparator
                    )),
                    e.join(this.radix)
                  );
                },
              },
              {
                key: "doPrepare",
                value: function (e) {
                  for (
                    var t,
                      n = arguments.length,
                      i = new Array(1 < n ? n - 1 : 0),
                      o = 1;
                    o < n;
                    o++
                  )
                    i[o - 1] = arguments[o];
                  return (t = w(b(s.prototype), "doPrepare", this)).call.apply(
                    t,
                    [
                      this,
                      this._removeThousandsSeparators(
                        e.replace(this._mapToRadixRegExp, this.radix)
                      ),
                    ].concat(i)
                  );
                },
              },
              {
                key: "_separatorsCount",
                value: function (e) {
                  for (
                    var t =
                        1 < arguments.length &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                      n = 0,
                      i = 0;
                    i < e;
                    ++i
                  )
                    this._value.indexOf(this.thousandsSeparator, i) === i &&
                      (++n, t && (e += this.thousandsSeparator.length));
                  return n;
                },
              },
              {
                key: "_separatorsCountFromSlice",
                value: function () {
                  var e =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : this._value;
                  return this._separatorsCount(
                    this._removeThousandsSeparators(e).length,
                    !0
                  );
                },
              },
              {
                key: "extractInput",
                value: function () {
                  var e =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    t =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.value.length,
                    n = 2 < arguments.length ? arguments[2] : void 0,
                    i = x(this._adjustRangeWithSeparators(e, t), 2),
                    e = i[0],
                    t = i[1];
                  return this._removeThousandsSeparators(
                    w(b(s.prototype), "extractInput", this).call(this, e, t, n)
                  );
                },
              },
              {
                key: "_appendCharRaw",
                value: function (e) {
                  var t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if (!this.thousandsSeparator)
                    return w(b(s.prototype), "_appendCharRaw", this).call(
                      this,
                      e,
                      t
                    );
                  var n = (
                      t.tail && t._beforeTailState ? t._beforeTailState : this
                    )._value,
                    n = this._separatorsCountFromSlice(n),
                    i =
                      ((this._value = this._removeThousandsSeparators(
                        this.value
                      )),
                      w(b(s.prototype), "_appendCharRaw", this).call(
                        this,
                        e,
                        t
                      )),
                    t =
                      ((this._value = this._insertThousandsSeparators(
                        this._value
                      )),
                      (t.tail && t._beforeTailState ? t._beforeTailState : this)
                        ._value),
                    t = this._separatorsCountFromSlice(t);
                  return (
                    (i.tailShift += (t - n) * this.thousandsSeparator.length),
                    (i.skip = !i.rawInserted && e === this.thousandsSeparator),
                    i
                  );
                },
              },
              {
                key: "_findSeparatorAround",
                value: function (e) {
                  if (this.thousandsSeparator) {
                    var t = e - this.thousandsSeparator.length + 1,
                      t = this.value.indexOf(this.thousandsSeparator, t);
                    if (t <= e) return t;
                  }
                  return -1;
                },
              },
              {
                key: "_adjustRangeWithSeparators",
                value: function (e, t) {
                  var n = this._findSeparatorAround(e),
                    n = (0 <= n && (e = n), this._findSeparatorAround(t));
                  return [
                    e,
                    (t = 0 <= n ? n + this.thousandsSeparator.length : t),
                  ];
                },
              },
              {
                key: "remove",
                value: function () {
                  var e =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    t =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.value.length,
                    n = x(this._adjustRangeWithSeparators(e, t), 2),
                    e = n[0],
                    t = n[1],
                    n = this.value.slice(0, e),
                    e = this.value.slice(t),
                    t = this._separatorsCount(n.length),
                    e =
                      ((this._value = this._insertThousandsSeparators(
                        this._removeThousandsSeparators(n + e)
                      )),
                      this._separatorsCountFromSlice(n));
                  return new S({
                    tailShift: (e - t) * this.thousandsSeparator.length,
                  });
                },
              },
              {
                key: "nearestInputPos",
                value: function (e, t) {
                  if (!this.thousandsSeparator) return e;
                  switch (t) {
                    case L:
                    case R:
                    case N:
                      var n = this._findSeparatorAround(e - 1);
                      if (0 <= n) {
                        var i = n + this.thousandsSeparator.length;
                        if (e < i || this.value.length <= i || t === N)
                          return n;
                      }
                      break;
                    case B:
                    case H:
                      i = this._findSeparatorAround(e);
                      if (0 <= i) return i + this.thousandsSeparator.length;
                  }
                  return e;
                },
              },
              {
                key: "doValidate",
                value: function (e) {
                  var t,
                    n = (
                      e.input ? this._numberRegExpInput : this._numberRegExp
                    ).test(this._removeThousandsSeparators(this.value));
                  return (
                    n &&
                      ((t = this.number),
                      (n =
                        n &&
                        !isNaN(t) &&
                        (null == this.min ||
                          0 <= this.min ||
                          this.min <= this.number) &&
                        (null == this.max ||
                          this.max <= 0 ||
                          this.number <= this.max))),
                    n && w(b(s.prototype), "doValidate", this).call(this, e)
                  );
                },
              },
              {
                key: "doCommit",
                value: function () {
                  var e, t;
                  this.value &&
                    ((e = t = this.number),
                    null != this.min && (e = Math.max(e, this.min)),
                    (e = null != this.max ? Math.min(e, this.max) : e) !== t &&
                      (this.unmaskedValue = String(e)),
                    (t = this.value),
                    this.normalizeZeros && (t = this._normalizeZeros(t)),
                    this.padFractionalZeros &&
                      (t = this._padFractionalZeros(t)),
                    (this._value = t)),
                    w(b(s.prototype), "doCommit", this).call(this);
                },
              },
              {
                key: "_normalizeZeros",
                value: function (e) {
                  var t = this._removeThousandsSeparators(e).split(this.radix);
                  return (
                    (t[0] = t[0].replace(
                      /^(\D*)(0*)(\d*)/,
                      function (e, t, n, i) {
                        return t + i;
                      }
                    )),
                    e.length && !/\d$/.test(t[0]) && (t[0] = t[0] + "0"),
                    1 < t.length &&
                      ((t[1] = t[1].replace(/0*$/, "")),
                      t[1].length || (t.length = 1)),
                    this._insertThousandsSeparators(t.join(this.radix))
                  );
                },
              },
              {
                key: "_padFractionalZeros",
                value: function (e) {
                  if (!e) return e;
                  e = e.split(this.radix);
                  return (
                    e.length < 2 && e.push(""),
                    (e[1] = e[1].padEnd(this.scale, "0")),
                    e.join(this.radix)
                  );
                },
              },
              {
                key: "unmaskedValue",
                get: function () {
                  return this._removeThousandsSeparators(
                    this._normalizeZeros(this.value)
                  ).replace(this.radix, ".");
                },
                set: function (e) {
                  k(
                    b(s.prototype),
                    "unmaskedValue",
                    e.replace(".", this.radix),
                    this,
                    !0
                  );
                },
              },
              {
                key: "typedValue",
                get: function () {
                  return Number(this.unmaskedValue);
                },
                set: function (e) {
                  k(b(s.prototype), "unmaskedValue", String(e), this, !0);
                },
              },
              {
                key: "number",
                get: function () {
                  return this.typedValue;
                },
                set: function (e) {
                  this.typedValue = e;
                },
              },
              {
                key: "allowNegative",
                get: function () {
                  return (
                    this.signed ||
                    (null != this.min && this.min < 0) ||
                    (null != this.max && this.max < 0)
                  );
                },
              },
            ]),
            s
          );
        })()),
      Be =
        ((r.DEFAULTS = {
          radix: ",",
          thousandsSeparator: "",
          mapToRadix: ["."],
          scale: 2,
          signed: !1,
          normalizeZeros: !0,
          padFractionalZeros: !1,
        }),
        (A.MaskedNumber = r),
        (function () {
          y(t, E);
          var e = _(t);
          function t() {
            return g(this, t), e.apply(this, arguments);
          }
          return (
            v(t, [
              {
                key: "_update",
                value: function (e) {
                  e.mask && (e.validate = e.mask),
                    w(b(t.prototype), "_update", this).call(this, e);
                },
              },
            ]),
            t
          );
        })()),
      $n =
        ((A.MaskedFunction = Be),
        ["compiledMasks", "currentMaskRef", "currentMask"]),
      p = (function () {
        y(o, E);
        var t = _(o);
        function o(e) {
          return (
            g(this, o),
            ((e = t.call(this, Object.assign({}, o.DEFAULTS, e))).currentMask =
              null),
            e
          );
        }
        return (
          v(o, [
            {
              key: "_update",
              value: function (e) {
                w(b(o.prototype), "_update", this).call(this, e),
                  "mask" in e &&
                    (this.compiledMasks = Array.isArray(e.mask)
                      ? e.mask.map(D)
                      : []);
              },
            },
            {
              key: "_appendCharRaw",
              value: function (e) {
                var t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = this._applyDispatch(e, t);
                return (
                  this.currentMask &&
                    n.aggregate(this.currentMask._appendChar(e, t)),
                  n
                );
              },
            },
            {
              key: "_applyDispatch",
              value: function () {
                var e =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : "",
                  t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n =
                    t.tail && null != t._beforeTailState
                      ? t._beforeTailState._value
                      : this.value,
                  i = this.rawInputValue,
                  o =
                    t.tail && null != t._beforeTailState
                      ? t._beforeTailState._rawInputValue
                      : i,
                  i = i.slice(o.length),
                  s = this.currentMask,
                  r = new S(),
                  a = s && s.state;
                return (
                  (this.currentMask = this.doDispatch(e, Object.assign({}, t))),
                  this.currentMask &&
                    (this.currentMask !== s
                      ? (this.currentMask.reset(),
                        o &&
                          ((e = this.currentMask.append(o, { raw: !0 })),
                          (r.tailShift = e.inserted.length - n.length)),
                        i &&
                          (r.tailShift += this.currentMask.append(i, {
                            raw: !0,
                            tail: !0,
                          }).tailShift))
                      : (this.currentMask.state = a)),
                  r
                );
              },
            },
            {
              key: "_appendPlaceholder",
              value: function () {
                var e = this._applyDispatch.apply(this, arguments);
                return (
                  this.currentMask &&
                    e.aggregate(this.currentMask._appendPlaceholder()),
                  e
                );
              },
            },
            {
              key: "doDispatch",
              value: function (e) {
                return this.dispatch(
                  e,
                  this,
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : {}
                );
              },
            },
            {
              key: "doValidate",
              value: function () {
                for (
                  var e, t = arguments.length, n = new Array(t), i = 0;
                  i < t;
                  i++
                )
                  n[i] = arguments[i];
                return (
                  (e = w(b(o.prototype), "doValidate", this)).call.apply(
                    e,
                    [this].concat(n)
                  ) &&
                  (!this.currentMask ||
                    (e = this.currentMask).doValidate.apply(e, n))
                );
              },
            },
            {
              key: "reset",
              value: function () {
                this.currentMask && this.currentMask.reset(),
                  this.compiledMasks.forEach(function (e) {
                    return e.reset();
                  });
              },
            },
            {
              key: "value",
              get: function () {
                return this.currentMask ? this.currentMask.value : "";
              },
              set: function (e) {
                k(b(o.prototype), "value", e, this, !0);
              },
            },
            {
              key: "unmaskedValue",
              get: function () {
                return this.currentMask ? this.currentMask.unmaskedValue : "";
              },
              set: function (e) {
                k(b(o.prototype), "unmaskedValue", e, this, !0);
              },
            },
            {
              key: "typedValue",
              get: function () {
                return this.currentMask ? this.currentMask.typedValue : "";
              },
              set: function (e) {
                var t = String(e);
                this.currentMask &&
                  ((this.currentMask.typedValue = e),
                  (t = this.currentMask.unmaskedValue)),
                  (this.unmaskedValue = t);
              },
            },
            {
              key: "isComplete",
              get: function () {
                return !!this.currentMask && this.currentMask.isComplete;
              },
            },
            {
              key: "remove",
              value: function () {
                var e,
                  t = new S();
                return (
                  this.currentMask &&
                    t
                      .aggregate(
                        (e = this.currentMask).remove.apply(e, arguments)
                      )
                      .aggregate(this._applyDispatch()),
                  t
                );
              },
            },
            {
              key: "state",
              get: function () {
                return Object.assign({}, w(b(o.prototype), "state", this), {
                  _rawInputValue: this.rawInputValue,
                  compiledMasks: this.compiledMasks.map(function (e) {
                    return e.state;
                  }),
                  currentMaskRef: this.currentMask,
                  currentMask: this.currentMask && this.currentMask.state,
                });
              },
              set: function (e) {
                var n = e.compiledMasks,
                  t = e.currentMaskRef,
                  i = e.currentMask,
                  e = cn(e, $n);
                this.compiledMasks.forEach(function (e, t) {
                  return (e.state = n[t]);
                }),
                  null != t &&
                    ((this.currentMask = t), (this.currentMask.state = i)),
                  k(b(o.prototype), "state", e, this, !0);
              },
            },
            {
              key: "extractInput",
              value: function () {
                var e;
                return this.currentMask
                  ? (e = this.currentMask).extractInput.apply(e, arguments)
                  : "";
              },
            },
            {
              key: "extractTail",
              value: function () {
                for (
                  var e, t = arguments.length, n = new Array(t), i = 0;
                  i < t;
                  i++
                )
                  n[i] = arguments[i];
                return this.currentMask
                  ? (e = this.currentMask).extractTail.apply(e, n)
                  : (e = w(b(o.prototype), "extractTail", this)).call.apply(
                      e,
                      [this].concat(n)
                    );
              },
            },
            {
              key: "doCommit",
              value: function () {
                this.currentMask && this.currentMask.doCommit(),
                  w(b(o.prototype), "doCommit", this).call(this);
              },
            },
            {
              key: "nearestInputPos",
              value: function () {
                for (
                  var e, t = arguments.length, n = new Array(t), i = 0;
                  i < t;
                  i++
                )
                  n[i] = arguments[i];
                return this.currentMask
                  ? (e = this.currentMask).nearestInputPos.apply(e, n)
                  : (e = w(b(o.prototype), "nearestInputPos", this)).call.apply(
                      e,
                      [this].concat(n)
                    );
              },
            },
            {
              key: "overwrite",
              get: function () {
                return this.currentMask
                  ? this.currentMask.overwrite
                  : w(b(o.prototype), "overwrite", this);
              },
              set: function (e) {
                console.warn(
                  '"overwrite" option is not available in dynamic mask, use this option in siblings'
                );
              },
            },
          ]),
          o
        );
      })(),
      jn =
        ((p.DEFAULTS = {
          dispatch: function (n, e, i) {
            var o, t;
            if (e.compiledMasks.length)
              return (
                (o = e.rawInputValue),
                (t = e.compiledMasks.map(function (e, t) {
                  return (
                    e.reset(),
                    e.append(o, { raw: !0 }),
                    e.append(n, i),
                    { weight: e.rawInputValue.length, index: t }
                  );
                })),
                t.sort(function (e, t) {
                  return t.weight - e.weight;
                }),
                e.compiledMasks[t[0].index]
              );
          },
        }),
        (A.MaskedDynamic = p),
        { MASKED: "value", UNMASKED: "unmaskedValue", TYPED: "typedValue" });
    function Fn(e) {
      var n =
          1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : jn.MASKED,
        i =
          2 < arguments.length && void 0 !== arguments[2]
            ? arguments[2]
            : jn.MASKED,
        o = D(e);
      return function (t) {
        return o.runIsolated(function (e) {
          return (e[n] = t), e[i];
        });
      };
    }
    function Mn(e) {
      for (
        var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), i = 1;
        i < t;
        i++
      )
        n[i - 1] = arguments[i];
      return Fn.apply(void 0, n)(e);
    }
    (A.PIPE_TYPE = jn), (A.createPipe = Fn), (A.pipe = Mn);
    try {
      globalThis.IMask = A;
    } catch (e) {}
    (e.HTMLContenteditableMaskElement = Dn),
      (e.HTMLMaskElement = En),
      (e.InputMask = Ae),
      (e.MaskElement = An),
      (e.Masked = E),
      (e.MaskedDate = Tn),
      (e.MaskedDynamic = p),
      (e.MaskedEnum = f),
      (e.MaskedFunction = Be),
      (e.MaskedNumber = r),
      (e.MaskedPattern = O),
      (e.MaskedRange = Sn),
      (e.MaskedRegExp = l),
      (e.PIPE_TYPE = jn),
      (e.createMask = D),
      (e.createPipe = Fn),
      (e.default = A),
      (e.pipe = Mn),
      Object.defineProperty(e, "__esModule", { value: !0 });
  }),
  !(function (e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "undefined" != typeof exports
      ? (module.exports = e(require("jquery")))
      : e(jQuery);
  })(function (u) {
    "use strict";
    var i,
      s = window.Slick || {};
    (i = 0),
      ((s = function (e, t) {
        var n = this;
        (n.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: u(e),
          appendDots: u(e),
          arrows: !0,
          asNavFor: null,
          prevArrow:
            '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
          nextArrow:
            '<button class="slick-next" aria-label="Next" type="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (e, t) {
            return u('<button type="button" />').text(t + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3,
        }),
          (n.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1,
          }),
          u.extend(n, n.initials),
          (n.activeBreakpoint = null),
          (n.animType = null),
          (n.animProp = null),
          (n.breakpoints = []),
          (n.breakpointSettings = []),
          (n.cssTransitions = !1),
          (n.focussed = !1),
          (n.interrupted = !1),
          (n.hidden = "hidden"),
          (n.paused = !0),
          (n.positionProp = null),
          (n.respondTo = null),
          (n.rowCount = 1),
          (n.shouldClick = !0),
          (n.$slider = u(e)),
          (n.$slidesCache = null),
          (n.transformType = null),
          (n.transitionType = null),
          (n.visibilityChange = "visibilitychange"),
          (n.windowWidth = 0),
          (n.windowTimer = null),
          (e = u(e).data("slick") || {}),
          (n.options = u.extend({}, n.defaults, t, e)),
          (n.currentSlide = n.options.initialSlide),
          (n.originalSettings = n.options),
          void 0 !== document.mozHidden
            ? ((n.hidden = "mozHidden"),
              (n.visibilityChange = "mozvisibilitychange"))
            : void 0 !== document.webkitHidden &&
              ((n.hidden = "webkitHidden"),
              (n.visibilityChange = "webkitvisibilitychange")),
          (n.autoPlay = u.proxy(n.autoPlay, n)),
          (n.autoPlayClear = u.proxy(n.autoPlayClear, n)),
          (n.autoPlayIterator = u.proxy(n.autoPlayIterator, n)),
          (n.changeSlide = u.proxy(n.changeSlide, n)),
          (n.clickHandler = u.proxy(n.clickHandler, n)),
          (n.selectHandler = u.proxy(n.selectHandler, n)),
          (n.setPosition = u.proxy(n.setPosition, n)),
          (n.swipeHandler = u.proxy(n.swipeHandler, n)),
          (n.dragHandler = u.proxy(n.dragHandler, n)),
          (n.keyHandler = u.proxy(n.keyHandler, n)),
          (n.instanceUid = i++),
          (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          n.registerBreakpoints(),
          n.init(!0);
      }).prototype.activateADA = function () {
        this.$slideTrack
          .find(".slick-active")
          .attr({ "aria-hidden": "false" })
          .find("a, input, button, select")
          .attr({ tabindex: "0" });
      }),
      (s.prototype.addSlide = s.prototype.slickAdd =
        function (e, t, n) {
          var i = this;
          if ("boolean" == typeof t) (n = t), (t = null);
          else if (t < 0 || t >= i.slideCount) return !1;
          i.unload(),
            "number" == typeof t
              ? 0 === t && 0 === i.$slides.length
                ? u(e).appendTo(i.$slideTrack)
                : n
                ? u(e).insertBefore(i.$slides.eq(t))
                : u(e).insertAfter(i.$slides.eq(t))
              : !0 === n
              ? u(e).prependTo(i.$slideTrack)
              : u(e).appendTo(i.$slideTrack),
            (i.$slides = i.$slideTrack.children(this.options.slide)),
            i.$slideTrack.children(this.options.slide).detach(),
            i.$slideTrack.append(i.$slides),
            i.$slides.each(function (e, t) {
              u(t).attr("data-slick-index", e);
            }),
            (i.$slidesCache = i.$slides),
            i.reinit();
        }),
      (s.prototype.animateHeight = function () {
        var e,
          t = this;
        1 === t.options.slidesToShow &&
          !0 === t.options.adaptiveHeight &&
          !1 === t.options.vertical &&
          ((e = t.$slides.eq(t.currentSlide).outerHeight(!0)),
          t.$list.animate({ height: e }, t.options.speed));
      }),
      (s.prototype.animateSlide = function (e, t) {
        var n = {},
          i = this;
        i.animateHeight(),
          !0 === i.options.rtl && !1 === i.options.vertical && (e = -e),
          !1 === i.transformsEnabled
            ? !1 === i.options.vertical
              ? i.$slideTrack.animate(
                  { left: e },
                  i.options.speed,
                  i.options.easing,
                  t
                )
              : i.$slideTrack.animate(
                  { top: e },
                  i.options.speed,
                  i.options.easing,
                  t
                )
            : !1 === i.cssTransitions
            ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft),
              u({ animStart: i.currentLeft }).animate(
                { animStart: e },
                {
                  duration: i.options.speed,
                  easing: i.options.easing,
                  step: function (e) {
                    (e = Math.ceil(e)),
                      !1 === i.options.vertical
                        ? (n[i.animType] = "translate(" + e + "px, 0px)")
                        : (n[i.animType] = "translate(0px," + e + "px)"),
                      i.$slideTrack.css(n);
                  },
                  complete: function () {
                    t && t.call();
                  },
                }
              ))
            : (i.applyTransition(),
              (e = Math.ceil(e)),
              !1 === i.options.vertical
                ? (n[i.animType] = "translate3d(" + e + "px, 0px, 0px)")
                : (n[i.animType] = "translate3d(0px," + e + "px, 0px)"),
              i.$slideTrack.css(n),
              t &&
                setTimeout(function () {
                  i.disableTransition(), t.call();
                }, i.options.speed));
      }),
      (s.prototype.getNavTarget = function () {
        var e = this.options.asNavFor;
        return (e = e && null !== e ? u(e).not(this.$slider) : e);
      }),
      (s.prototype.asNavFor = function (t) {
        var e = this.getNavTarget();
        null !== e &&
          "object" == typeof e &&
          e.each(function () {
            var e = u(this).slick("getSlick");
            e.unslicked || e.slideHandler(t, !0);
          });
      }),
      (s.prototype.applyTransition = function (e) {
        var t = this,
          n = {};
        !1 === t.options.fade
          ? (n[t.transitionType] =
              t.transformType +
              " " +
              t.options.speed +
              "ms " +
              t.options.cssEase)
          : (n[t.transitionType] =
              "opacity " + t.options.speed + "ms " + t.options.cssEase),
          (!1 === t.options.fade ? t.$slideTrack : t.$slides.eq(e)).css(n);
      }),
      (s.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayClear(),
          e.slideCount > e.options.slidesToShow &&
            (e.autoPlayTimer = setInterval(
              e.autoPlayIterator,
              e.options.autoplaySpeed
            ));
      }),
      (s.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
      }),
      (s.prototype.autoPlayIterator = function () {
        var e = this,
          t = e.currentSlide + e.options.slidesToScroll;
        e.paused ||
          e.interrupted ||
          e.focussed ||
          (!1 === e.options.infinite &&
            (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1
              ? (e.direction = 0)
              : 0 === e.direction &&
                ((t = e.currentSlide - e.options.slidesToScroll),
                e.currentSlide - 1 == 0 && (e.direction = 1))),
          e.slideHandler(t));
      }),
      (s.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows &&
          ((e.$prevArrow = u(e.options.prevArrow).addClass("slick-arrow")),
          (e.$nextArrow = u(e.options.nextArrow).addClass("slick-arrow")),
          e.slideCount > e.options.slidesToShow
            ? (e.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              e.$nextArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              e.htmlExpr.test(e.options.prevArrow) &&
                e.$prevArrow.prependTo(e.options.appendArrows),
              e.htmlExpr.test(e.options.nextArrow) &&
                e.$nextArrow.appendTo(e.options.appendArrows),
              !0 !== e.options.infinite &&
                e.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
            : e.$prevArrow
                .add(e.$nextArrow)
                .addClass("slick-hidden")
                .attr({ "aria-disabled": "true", tabindex: "-1" }));
      }),
      (s.prototype.buildDots = function () {
        var e,
          t,
          n = this;
        if (!0 === n.options.dots) {
          for (
            n.$slider.addClass("slick-dotted"),
              t = u("<ul />").addClass(n.options.dotsClass),
              e = 0;
            e <= n.getDotCount();
            e += 1
          )
            t.append(
              u("<li />").append(n.options.customPaging.call(this, n, e))
            );
          (n.$dots = t.appendTo(n.options.appendDots)),
            n.$dots.find("li").first().addClass("slick-active");
        }
      }),
      (s.prototype.buildOut = function () {
        var e = this;
        (e.$slides = e.$slider
          .children(e.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (e.slideCount = e.$slides.length),
          e.$slides.each(function (e, t) {
            u(t)
              .attr("data-slick-index", e)
              .data("originalStyling", u(t).attr("style") || "");
          }),
          e.$slider.addClass("slick-slider"),
          (e.$slideTrack =
            0 === e.slideCount
              ? u('<div class="slick-track"/>').appendTo(e.$slider)
              : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
          e.$slideTrack.css("opacity", 0),
          (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
            (e.options.slidesToScroll = 1),
          u("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
          e.setupInfinite(),
          e.buildArrows(),
          e.buildDots(),
          e.updateDots(),
          e.setSlideClasses(
            "number" == typeof e.currentSlide ? e.currentSlide : 0
          ),
          !0 === e.options.draggable && e.$list.addClass("draggable");
      }),
      (s.prototype.buildRows = function () {
        var e,
          t,
          n,
          i = this,
          o = document.createDocumentFragment(),
          s = i.$slider.children();
        if (1 < i.options.rows) {
          for (
            n = i.options.slidesPerRow * i.options.rows,
              t = Math.ceil(s.length / n),
              e = 0;
            e < t;
            e++
          ) {
            for (
              var r = document.createElement("div"), a = 0;
              a < i.options.rows;
              a++
            ) {
              for (
                var l = document.createElement("div"), u = 0;
                u < i.options.slidesPerRow;
                u++
              ) {
                var c = e * n + (a * i.options.slidesPerRow + u);
                s.get(c) && l.appendChild(s.get(c));
              }
              r.appendChild(l);
            }
            o.appendChild(r);
          }
          i.$slider.empty().append(o),
            i.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / i.options.slidesPerRow + "%",
                display: "inline-block",
              });
        }
      }),
      (s.prototype.checkResponsive = function (e, t) {
        var n,
          i,
          o,
          s = this,
          r = !1,
          a = s.$slider.width(),
          l = window.innerWidth || u(window).width();
        if (
          ("window" === s.respondTo
            ? (o = l)
            : "slider" === s.respondTo
            ? (o = a)
            : "min" === s.respondTo && (o = Math.min(l, a)),
          s.options.responsive &&
            s.options.responsive.length &&
            null !== s.options.responsive)
        ) {
          for (n in ((i = null), s.breakpoints))
            s.breakpoints.hasOwnProperty(n) &&
              (!1 === s.originalSettings.mobileFirst
                ? o < s.breakpoints[n] && (i = s.breakpoints[n])
                : o > s.breakpoints[n] && (i = s.breakpoints[n]));
          null !== i
            ? (null !== s.activeBreakpoint && i === s.activeBreakpoint && !t) ||
              ((s.activeBreakpoint = i),
              "unslick" === s.breakpointSettings[i]
                ? s.unslick(i)
                : ((s.options = u.extend(
                    {},
                    s.originalSettings,
                    s.breakpointSettings[i]
                  )),
                  !0 === e && (s.currentSlide = s.options.initialSlide),
                  s.refresh(e)),
              (r = i))
            : null !== s.activeBreakpoint &&
              ((s.activeBreakpoint = null),
              (s.options = s.originalSettings),
              !0 === e && (s.currentSlide = s.options.initialSlide),
              s.refresh(e),
              (r = i)),
            e || !1 === r || s.$slider.trigger("breakpoint", [s, r]);
        }
      }),
      (s.prototype.changeSlide = function (e, t) {
        var n,
          i = this,
          o = u(e.currentTarget);
        switch (
          (o.is("a") && e.preventDefault(),
          o.is("li") || (o = o.closest("li")),
          (n =
            i.slideCount % i.options.slidesToScroll != 0
              ? 0
              : (i.slideCount - i.currentSlide) % i.options.slidesToScroll),
          e.data.message)
        ) {
          case "previous":
            (s =
              0 == n ? i.options.slidesToScroll : i.options.slidesToShow - n),
              i.slideCount > i.options.slidesToShow &&
                i.slideHandler(i.currentSlide - s, !1, t);
            break;
          case "next":
            (s = 0 == n ? i.options.slidesToScroll : n),
              i.slideCount > i.options.slidesToShow &&
                i.slideHandler(i.currentSlide + s, !1, t);
            break;
          case "index":
            var s =
              0 === e.data.index
                ? 0
                : e.data.index || o.index() * i.options.slidesToScroll;
            i.slideHandler(i.checkNavigable(s), !1, t),
              o.children().trigger("focus");
            break;
          default:
            return;
        }
      }),
      (s.prototype.checkNavigable = function (e) {
        var t = this.getNavigableIndexes(),
          n = 0;
        if (e > t[t.length - 1]) e = t[t.length - 1];
        else
          for (var i in t) {
            if (e < t[i]) {
              e = n;
              break;
            }
            n = t[i];
          }
        return e;
      }),
      (s.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots &&
          null !== e.$dots &&
          (u("li", e.$dots)
            .off("click.slick", e.changeSlide)
            .off("mouseenter.slick", u.proxy(e.interrupt, e, !0))
            .off("mouseleave.slick", u.proxy(e.interrupt, e, !1)),
          !0 === e.options.accessibility &&
            e.$dots.off("keydown.slick", e.keyHandler)),
          e.$slider.off("focus.slick blur.slick"),
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
            e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
            !0 === e.options.accessibility &&
              (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
              e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
          e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
          e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
          e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
          e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
          e.$list.off("click.slick", e.clickHandler),
          u(document).off(e.visibilityChange, e.visibility),
          e.cleanUpSlideEvents(),
          !0 === e.options.accessibility &&
            e.$list.off("keydown.slick", e.keyHandler),
          !0 === e.options.focusOnSelect &&
            u(e.$slideTrack).children().off("click.slick", e.selectHandler),
          u(window).off(
            "orientationchange.slick.slick-" + e.instanceUid,
            e.orientationChange
          ),
          u(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
          u("[draggable!=true]", e.$slideTrack).off(
            "dragstart",
            e.preventDefault
          ),
          u(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
      }),
      (s.prototype.cleanUpSlideEvents = function () {
        this.$list.off("mouseenter.slick", u.proxy(this.interrupt, this, !0)),
          this.$list.off("mouseleave.slick", u.proxy(this.interrupt, this, !1));
      }),
      (s.prototype.cleanUpRows = function () {
        var e;
        1 < this.options.rows &&
          ((e = this.$slides.children().children()).removeAttr("style"),
          this.$slider.empty().append(e));
      }),
      (s.prototype.clickHandler = function (e) {
        !1 === this.shouldClick &&
          (e.stopImmediatePropagation(),
          e.stopPropagation(),
          e.preventDefault());
      }),
      (s.prototype.destroy = function (e) {
        var t = this;
        t.autoPlayClear(),
          (t.touchObject = {}),
          t.cleanUpEvents(),
          u(".slick-cloned", t.$slider).detach(),
          t.$dots && t.$dots.remove(),
          t.$prevArrow &&
            t.$prevArrow.length &&
            (t.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
          t.$nextArrow &&
            t.$nextArrow.length &&
            (t.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
          t.$slides &&
            (t.$slides
              .removeClass(
                "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function () {
                u(this).attr("style", u(this).data("originalStyling"));
              }),
            t.$slideTrack.children(this.options.slide).detach(),
            t.$slideTrack.detach(),
            t.$list.detach(),
            t.$slider.append(t.$slides)),
          t.cleanUpRows(),
          t.$slider.removeClass("slick-slider"),
          t.$slider.removeClass("slick-initialized"),
          t.$slider.removeClass("slick-dotted"),
          (t.unslicked = !0),
          e || t.$slider.trigger("destroy", [t]);
      }),
      (s.prototype.disableTransition = function (e) {
        var t = {};
        (t[this.transitionType] = ""),
          (!1 === this.options.fade
            ? this.$slideTrack
            : this.$slides.eq(e)
          ).css(t);
      }),
      (s.prototype.fadeSlide = function (e, t) {
        var n = this;
        !1 === n.cssTransitions
          ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }),
            n.$slides
              .eq(e)
              .animate({ opacity: 1 }, n.options.speed, n.options.easing, t))
          : (n.applyTransition(e),
            n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }),
            t &&
              setTimeout(function () {
                n.disableTransition(e), t.call();
              }, n.options.speed));
      }),
      (s.prototype.fadeSlideOut = function (e) {
        !1 === this.cssTransitions
          ? this.$slides
              .eq(e)
              .animate(
                { opacity: 0, zIndex: this.options.zIndex - 2 },
                this.options.speed,
                this.options.easing
              )
          : (this.applyTransition(e),
            this.$slides
              .eq(e)
              .css({ opacity: 0, zIndex: this.options.zIndex - 2 }));
      }),
      (s.prototype.filterSlides = s.prototype.slickFilter =
        function (e) {
          null !== e &&
            ((this.$slidesCache = this.$slides),
            this.unload(),
            this.$slideTrack.children(this.options.slide).detach(),
            this.$slidesCache.filter(e).appendTo(this.$slideTrack),
            this.reinit());
        }),
      (s.prototype.focusHandler = function () {
        var n = this;
        n.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick blur.slick", "*", function (e) {
            e.stopImmediatePropagation();
            var t = u(this);
            setTimeout(function () {
              n.options.pauseOnFocus &&
                ((n.focussed = t.is(":focus")), n.autoPlay());
            }, 0);
          });
      }),
      (s.prototype.getCurrent = s.prototype.slickCurrentSlide =
        function () {
          return this.currentSlide;
        }),
      (s.prototype.getDotCount = function () {
        var e = this,
          t = 0,
          n = 0,
          i = 0;
        if (!0 === e.options.infinite)
          if (e.slideCount <= e.options.slidesToShow) ++i;
          else
            for (; t < e.slideCount; )
              ++i,
                (t = n + e.options.slidesToScroll),
                (n +=
                  e.options.slidesToScroll <= e.options.slidesToShow
                    ? e.options.slidesToScroll
                    : e.options.slidesToShow);
        else if (!0 === e.options.centerMode) i = e.slideCount;
        else if (e.options.asNavFor)
          for (; t < e.slideCount; )
            ++i,
              (t = n + e.options.slidesToScroll),
              (n +=
                e.options.slidesToScroll <= e.options.slidesToShow
                  ? e.options.slidesToScroll
                  : e.options.slidesToShow);
        else
          i =
            1 +
            Math.ceil(
              (e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll
            );
        return i - 1;
      }),
      (s.prototype.getLeft = function (e) {
        var t,
          n,
          i = this,
          o = 0;
        return (
          (i.slideOffset = 0),
          (t = i.$slides.first().outerHeight(!0)),
          !0 === i.options.infinite
            ? (i.slideCount > i.options.slidesToShow &&
                ((i.slideOffset = i.slideWidth * i.options.slidesToShow * -1),
                (n = -1),
                !0 === i.options.vertical &&
                  !0 === i.options.centerMode &&
                  (2 === i.options.slidesToShow
                    ? (n = -1.5)
                    : 1 === i.options.slidesToShow && (n = -2)),
                (o = t * i.options.slidesToShow * n)),
              i.slideCount % i.options.slidesToScroll != 0 &&
                e + i.options.slidesToScroll > i.slideCount &&
                i.slideCount > i.options.slidesToShow &&
                (o =
                  e > i.slideCount
                    ? ((i.slideOffset =
                        (i.options.slidesToShow - (e - i.slideCount)) *
                        i.slideWidth *
                        -1),
                      (i.options.slidesToShow - (e - i.slideCount)) * t * -1)
                    : ((i.slideOffset =
                        (i.slideCount % i.options.slidesToScroll) *
                        i.slideWidth *
                        -1),
                      (i.slideCount % i.options.slidesToScroll) * t * -1)))
            : e + i.options.slidesToShow > i.slideCount &&
              ((i.slideOffset =
                (e + i.options.slidesToShow - i.slideCount) * i.slideWidth),
              (o = (e + i.options.slidesToShow - i.slideCount) * t)),
          i.slideCount <= i.options.slidesToShow && (o = i.slideOffset = 0),
          !0 === i.options.centerMode && i.slideCount <= i.options.slidesToShow
            ? (i.slideOffset =
                (i.slideWidth * Math.floor(i.options.slidesToShow)) / 2 -
                (i.slideWidth * i.slideCount) / 2)
            : !0 === i.options.centerMode && !0 === i.options.infinite
            ? (i.slideOffset +=
                i.slideWidth * Math.floor(i.options.slidesToShow / 2) -
                i.slideWidth)
            : !0 === i.options.centerMode &&
              ((i.slideOffset = 0),
              (i.slideOffset +=
                i.slideWidth * Math.floor(i.options.slidesToShow / 2))),
          (n =
            !1 === i.options.vertical
              ? e * i.slideWidth * -1 + i.slideOffset
              : e * t * -1 + o),
          !0 === i.options.variableWidth &&
            ((t =
              i.slideCount <= i.options.slidesToShow ||
              !1 === i.options.infinite
                ? i.$slideTrack.children(".slick-slide").eq(e)
                : i.$slideTrack
                    .children(".slick-slide")
                    .eq(e + i.options.slidesToShow)),
            (n =
              !0 === i.options.rtl
                ? t[0]
                  ? -1 * (i.$slideTrack.width() - t[0].offsetLeft - t.width())
                  : 0
                : t[0]
                ? -1 * t[0].offsetLeft
                : 0),
            !0 === i.options.centerMode &&
              ((t =
                i.slideCount <= i.options.slidesToShow ||
                !1 === i.options.infinite
                  ? i.$slideTrack.children(".slick-slide").eq(e)
                  : i.$slideTrack
                      .children(".slick-slide")
                      .eq(e + i.options.slidesToShow + 1)),
              (n =
                !0 === i.options.rtl
                  ? t[0]
                    ? -1 * (i.$slideTrack.width() - t[0].offsetLeft - t.width())
                    : 0
                  : t[0]
                  ? -1 * t[0].offsetLeft
                  : 0),
              (n += (i.$list.width() - t.outerWidth()) / 2))),
          n
        );
      }),
      (s.prototype.getOption = s.prototype.slickGetOption =
        function (e) {
          return this.options[e];
        }),
      (s.prototype.getNavigableIndexes = function () {
        for (
          var e = this,
            t = 0,
            n = 0,
            i = [],
            o =
              !1 === e.options.infinite
                ? e.slideCount
                : ((t = -1 * e.options.slidesToScroll),
                  (n = -1 * e.options.slidesToScroll),
                  2 * e.slideCount);
          t < o;

        )
          i.push(t),
            (t = n + e.options.slidesToScroll),
            (n +=
              e.options.slidesToScroll <= e.options.slidesToShow
                ? e.options.slidesToScroll
                : e.options.slidesToShow);
        return i;
      }),
      (s.prototype.getSlick = function () {
        return this;
      }),
      (s.prototype.getSlideCount = function () {
        var n,
          i = this,
          o =
            !0 === i.options.centerMode
              ? i.slideWidth * Math.floor(i.options.slidesToShow / 2)
              : 0;
        return !0 === i.options.swipeToSlide
          ? (i.$slideTrack.find(".slick-slide").each(function (e, t) {
              if (t.offsetLeft - o + u(t).outerWidth() / 2 > -1 * i.swipeLeft)
                return (n = t), !1;
            }),
            Math.abs(u(n).attr("data-slick-index") - i.currentSlide) || 1)
          : i.options.slidesToScroll;
      }),
      (s.prototype.goTo = s.prototype.slickGoTo =
        function (e, t) {
          this.changeSlide(
            { data: { message: "index", index: parseInt(e) } },
            t
          );
        }),
      (s.prototype.init = function (e) {
        var t = this;
        u(t.$slider).hasClass("slick-initialized") ||
          (u(t.$slider).addClass("slick-initialized"),
          t.buildRows(),
          t.buildOut(),
          t.setProps(),
          t.startLoad(),
          t.loadSlider(),
          t.initializeEvents(),
          t.updateArrows(),
          t.updateDots(),
          t.checkResponsive(!0),
          t.focusHandler()),
          e && t.$slider.trigger("init", [t]),
          !0 === t.options.accessibility && t.initADA(),
          t.options.autoplay && ((t.paused = !1), t.autoPlay());
      }),
      (s.prototype.initADA = function () {
        var n = this,
          i = Math.ceil(n.slideCount / n.options.slidesToShow),
          o = n.getNavigableIndexes().filter(function (e) {
            return 0 <= e && e < n.slideCount;
          });
        n.$slides
          .add(n.$slideTrack.find(".slick-cloned"))
          .attr({ "aria-hidden": "true", tabindex: "-1" })
          .find("a, input, button, select")
          .attr({ tabindex: "-1" }),
          null !== n.$dots &&
            (n.$slides
              .not(n.$slideTrack.find(".slick-cloned"))
              .each(function (e) {
                var t = o.indexOf(e);
                u(this).attr({
                  role: "tabpanel",
                  id: "slick-slide" + n.instanceUid + e,
                  tabindex: -1,
                }),
                  -1 !== t &&
                    u(this).attr({
                      "aria-describedby":
                        "slick-slide-control" + n.instanceUid + t,
                    });
              }),
            n.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (e) {
                var t = o[e];
                u(this).attr({ role: "presentation" }),
                  u(this)
                    .find("button")
                    .first()
                    .attr({
                      role: "tab",
                      id: "slick-slide-control" + n.instanceUid + e,
                      "aria-controls": "slick-slide" + n.instanceUid + t,
                      "aria-label": e + 1 + " of " + i,
                      "aria-selected": null,
                      tabindex: "-1",
                    });
              })
              .eq(n.currentSlide)
              .find("button")
              .attr({ "aria-selected": "true", tabindex: "0" })
              .end());
        for (var e = n.currentSlide, t = e + n.options.slidesToShow; e < t; e++)
          n.$slides.eq(e).attr("tabindex", 0);
        n.activateADA();
      }),
      (s.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow
            .off("click.slick")
            .on("click.slick", { message: "previous" }, e.changeSlide),
          e.$nextArrow
            .off("click.slick")
            .on("click.slick", { message: "next" }, e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow.on("keydown.slick", e.keyHandler),
            e.$nextArrow.on("keydown.slick", e.keyHandler)));
      }),
      (s.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots &&
          (u("li", e.$dots).on(
            "click.slick",
            { message: "index" },
            e.changeSlide
          ),
          !0 === e.options.accessibility &&
            e.$dots.on("keydown.slick", e.keyHandler)),
          !0 === e.options.dots &&
            !0 === e.options.pauseOnDotsHover &&
            u("li", e.$dots)
              .on("mouseenter.slick", u.proxy(e.interrupt, e, !0))
              .on("mouseleave.slick", u.proxy(e.interrupt, e, !1));
      }),
      (s.prototype.initSlideEvents = function () {
        this.options.pauseOnHover &&
          (this.$list.on("mouseenter.slick", u.proxy(this.interrupt, this, !0)),
          this.$list.on("mouseleave.slick", u.proxy(this.interrupt, this, !1)));
      }),
      (s.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(),
          e.initDotEvents(),
          e.initSlideEvents(),
          e.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            e.swipeHandler
          ),
          e.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            e.swipeHandler
          ),
          e.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            e.swipeHandler
          ),
          e.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            e.swipeHandler
          ),
          e.$list.on("click.slick", e.clickHandler),
          u(document).on(e.visibilityChange, u.proxy(e.visibility, e)),
          !0 === e.options.accessibility &&
            e.$list.on("keydown.slick", e.keyHandler),
          !0 === e.options.focusOnSelect &&
            u(e.$slideTrack).children().on("click.slick", e.selectHandler),
          u(window).on(
            "orientationchange.slick.slick-" + e.instanceUid,
            u.proxy(e.orientationChange, e)
          ),
          u(window).on(
            "resize.slick.slick-" + e.instanceUid,
            u.proxy(e.resize, e)
          ),
          u("[draggable!=true]", e.$slideTrack).on(
            "dragstart",
            e.preventDefault
          ),
          u(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
          u(e.setPosition);
      }),
      (s.prototype.initUI = function () {
        !0 === this.options.arrows &&
          this.slideCount > this.options.slidesToShow &&
          (this.$prevArrow.show(), this.$nextArrow.show()),
          !0 === this.options.dots &&
            this.slideCount > this.options.slidesToShow &&
            this.$dots.show();
      }),
      (s.prototype.keyHandler = function (e) {
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === e.keyCode && !0 === this.options.accessibility
            ? this.changeSlide({
                data: {
                  message: !0 === this.options.rtl ? "next" : "previous",
                },
              })
            : 39 === e.keyCode &&
              !0 === this.options.accessibility &&
              this.changeSlide({
                data: {
                  message: !0 === this.options.rtl ? "previous" : "next",
                },
              }));
      }),
      (s.prototype.lazyLoad = function () {
        function e(e) {
          u("img[data-lazy]", e).each(function () {
            var e = u(this),
              t = u(this).attr("data-lazy"),
              n = u(this).attr("data-srcset"),
              i = u(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
              o = document.createElement("img");
            (o.onload = function () {
              e.animate({ opacity: 0 }, 100, function () {
                n && (e.attr("srcset", n), i && e.attr("sizes", i)),
                  e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                    e.removeAttr(
                      "data-lazy data-srcset data-sizes"
                    ).removeClass("slick-loading");
                  }),
                  s.$slider.trigger("lazyLoaded", [s, e, t]);
              });
            }),
              (o.onerror = function () {
                e
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  s.$slider.trigger("lazyLoadError", [s, e, t]);
              }),
              (o.src = t);
          });
        }
        var t,
          n,
          i,
          s = this;
        if (
          (!0 === s.options.centerMode
            ? (i =
                !0 === s.options.infinite
                  ? (n = s.currentSlide + (s.options.slidesToShow / 2 + 1)) +
                    s.options.slidesToShow +
                    2
                  : ((n = Math.max(
                      0,
                      s.currentSlide - (s.options.slidesToShow / 2 + 1)
                    )),
                    s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide))
            : ((n = s.options.infinite
                ? s.options.slidesToShow + s.currentSlide
                : s.currentSlide),
              (i = Math.ceil(n + s.options.slidesToShow)),
              !0 === s.options.fade &&
                (0 < n && n--, i <= s.slideCount && i++)),
          (t = s.$slider.find(".slick-slide").slice(n, i)),
          "anticipated" === s.options.lazyLoad)
        )
          for (
            var o = n - 1, r = i, a = s.$slider.find(".slick-slide"), l = 0;
            l < s.options.slidesToScroll;
            l++
          )
            o < 0 && (o = s.slideCount - 1),
              (t = (t = t.add(a.eq(o))).add(a.eq(r))),
              o--,
              r++;
        e(t),
          s.slideCount <= s.options.slidesToShow
            ? e(s.$slider.find(".slick-slide"))
            : s.currentSlide >= s.slideCount - s.options.slidesToShow
            ? e(
                s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)
              )
            : 0 === s.currentSlide &&
              e(
                s.$slider
                  .find(".slick-cloned")
                  .slice(-1 * s.options.slidesToShow)
              );
      }),
      (s.prototype.loadSlider = function () {
        this.setPosition(),
          this.$slideTrack.css({ opacity: 1 }),
          this.$slider.removeClass("slick-loading"),
          this.initUI(),
          "progressive" === this.options.lazyLoad && this.progressiveLazyLoad();
      }),
      (s.prototype.next = s.prototype.slickNext =
        function () {
          this.changeSlide({ data: { message: "next" } });
        }),
      (s.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition();
      }),
      (s.prototype.pause = s.prototype.slickPause =
        function () {
          this.autoPlayClear(), (this.paused = !0);
        }),
      (s.prototype.play = s.prototype.slickPlay =
        function () {
          this.autoPlay(),
            (this.options.autoplay = !0),
            (this.paused = !1),
            (this.focussed = !1),
            (this.interrupted = !1);
        }),
      (s.prototype.postSlide = function (e) {
        var t = this;
        t.unslicked ||
          (t.$slider.trigger("afterChange", [t, e]),
          (t.animating = !1),
          t.slideCount > t.options.slidesToShow && t.setPosition(),
          (t.swipeLeft = null),
          t.options.autoplay && t.autoPlay(),
          !0 === t.options.accessibility &&
            (t.initADA(),
            t.options.focusOnChange &&
              u(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
      }),
      (s.prototype.prev = s.prototype.slickPrev =
        function () {
          this.changeSlide({ data: { message: "previous" } });
        }),
      (s.prototype.preventDefault = function (e) {
        e.preventDefault();
      }),
      (s.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var t,
          n,
          i,
          o,
          s = this,
          r = u("img[data-lazy]", s.$slider);
        r.length
          ? ((t = r.first()),
            (n = t.attr("data-lazy")),
            (i = t.attr("data-srcset")),
            (o = t.attr("data-sizes") || s.$slider.attr("data-sizes")),
            ((r = document.createElement("img")).onload = function () {
              i && (t.attr("srcset", i), o && t.attr("sizes", o)),
                t
                  .attr("src", n)
                  .removeAttr("data-lazy data-srcset data-sizes")
                  .removeClass("slick-loading"),
                !0 === s.options.adaptiveHeight && s.setPosition(),
                s.$slider.trigger("lazyLoaded", [s, t, n]),
                s.progressiveLazyLoad();
            }),
            (r.onerror = function () {
              e < 3
                ? setTimeout(function () {
                    s.progressiveLazyLoad(e + 1);
                  }, 500)
                : (t
                    .removeAttr("data-lazy")
                    .removeClass("slick-loading")
                    .addClass("slick-lazyload-error"),
                  s.$slider.trigger("lazyLoadError", [s, t, n]),
                  s.progressiveLazyLoad());
            }),
            (r.src = n))
          : s.$slider.trigger("allImagesLoaded", [s]);
      }),
      (s.prototype.refresh = function (e) {
        var t = this,
          n = t.slideCount - t.options.slidesToShow;
        !t.options.infinite && t.currentSlide > n && (t.currentSlide = n),
          t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
          (n = t.currentSlide),
          t.destroy(!0),
          u.extend(t, t.initials, { currentSlide: n }),
          t.init(),
          e || t.changeSlide({ data: { message: "index", index: n } }, !1);
      }),
      (s.prototype.registerBreakpoints = function () {
        var e,
          t,
          n,
          i = this,
          o = i.options.responsive || null;
        if ("array" === u.type(o) && o.length) {
          for (e in ((i.respondTo = i.options.respondTo || "window"), o))
            if (((n = i.breakpoints.length - 1), o.hasOwnProperty(e))) {
              for (t = o[e].breakpoint; 0 <= n; )
                i.breakpoints[n] &&
                  i.breakpoints[n] === t &&
                  i.breakpoints.splice(n, 1),
                  n--;
              i.breakpoints.push(t), (i.breakpointSettings[t] = o[e].settings);
            }
          i.breakpoints.sort(function (e, t) {
            return i.options.mobileFirst ? e - t : t - e;
          });
        }
      }),
      (s.prototype.reinit = function () {
        var e = this;
        (e.$slides = e.$slideTrack
          .children(e.options.slide)
          .addClass("slick-slide")),
          (e.slideCount = e.$slides.length),
          e.currentSlide >= e.slideCount &&
            0 !== e.currentSlide &&
            (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
          e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
          e.registerBreakpoints(),
          e.setProps(),
          e.setupInfinite(),
          e.buildArrows(),
          e.updateArrows(),
          e.initArrowEvents(),
          e.buildDots(),
          e.updateDots(),
          e.initDotEvents(),
          e.cleanUpSlideEvents(),
          e.initSlideEvents(),
          e.checkResponsive(!1, !0),
          !0 === e.options.focusOnSelect &&
            u(e.$slideTrack).children().on("click.slick", e.selectHandler),
          e.setSlideClasses(
            "number" == typeof e.currentSlide ? e.currentSlide : 0
          ),
          e.setPosition(),
          e.focusHandler(),
          (e.paused = !e.options.autoplay),
          e.autoPlay(),
          e.$slider.trigger("reInit", [e]);
      }),
      (s.prototype.resize = function () {
        var e = this;
        u(window).width() !== e.windowWidth &&
          (clearTimeout(e.windowDelay),
          (e.windowDelay = window.setTimeout(function () {
            (e.windowWidth = u(window).width()),
              e.checkResponsive(),
              e.unslicked || e.setPosition();
          }, 50)));
      }),
      (s.prototype.removeSlide = s.prototype.slickRemove =
        function (e, t, n) {
          var i = this;
          if (
            ((e =
              "boolean" == typeof e
                ? !0 === (t = e)
                  ? 0
                  : i.slideCount - 1
                : !0 === t
                ? --e
                : e),
            i.slideCount < 1 || e < 0 || e > i.slideCount - 1)
          )
            return !1;
          i.unload(),
            (!0 === n
              ? i.$slideTrack.children()
              : i.$slideTrack.children(this.options.slide).eq(e)
            ).remove(),
            (i.$slides = i.$slideTrack.children(this.options.slide)),
            i.$slideTrack.children(this.options.slide).detach(),
            i.$slideTrack.append(i.$slides),
            (i.$slidesCache = i.$slides),
            i.reinit();
        }),
      (s.prototype.setCSS = function (e) {
        var t,
          n,
          i = this,
          o = {};
        !0 === i.options.rtl && (e = -e),
          (t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
          (n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
          (o[i.positionProp] = e),
          !1 !== i.transformsEnabled &&
            (!(o = {}) === i.cssTransitions
              ? (o[i.animType] = "translate(" + t + ", " + n + ")")
              : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)")),
          i.$slideTrack.css(o);
      }),
      (s.prototype.setDimensions = function () {
        var e = this,
          t =
            (!1 === e.options.vertical
              ? !0 === e.options.centerMode &&
                e.$list.css({ padding: "0px " + e.options.centerPadding })
              : (e.$list.height(
                  e.$slides.first().outerHeight(!0) * e.options.slidesToShow
                ),
                !0 === e.options.centerMode &&
                  e.$list.css({ padding: e.options.centerPadding + " 0px" })),
            (e.listWidth = e.$list.width()),
            (e.listHeight = e.$list.height()),
            !1 === e.options.vertical && !1 === e.options.variableWidth
              ? ((e.slideWidth = Math.ceil(
                  e.listWidth / e.options.slidesToShow
                )),
                e.$slideTrack.width(
                  Math.ceil(
                    e.slideWidth * e.$slideTrack.children(".slick-slide").length
                  )
                ))
              : !0 === e.options.variableWidth
              ? e.$slideTrack.width(5e3 * e.slideCount)
              : ((e.slideWidth = Math.ceil(e.listWidth)),
                e.$slideTrack.height(
                  Math.ceil(
                    e.$slides.first().outerHeight(!0) *
                      e.$slideTrack.children(".slick-slide").length
                  )
                )),
            e.$slides.first().outerWidth(!0) - e.$slides.first().width());
        !1 === e.options.variableWidth &&
          e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
      }),
      (s.prototype.setFade = function () {
        var n,
          i = this;
        i.$slides.each(function (e, t) {
          (n = i.slideWidth * e * -1),
            !0 === i.options.rtl
              ? u(t).css({
                  position: "relative",
                  right: n,
                  top: 0,
                  zIndex: i.options.zIndex - 2,
                  opacity: 0,
                })
              : u(t).css({
                  position: "relative",
                  left: n,
                  top: 0,
                  zIndex: i.options.zIndex - 2,
                  opacity: 0,
                });
        }),
          i.$slides
            .eq(i.currentSlide)
            .css({ zIndex: i.options.zIndex - 1, opacity: 1 });
      }),
      (s.prototype.setHeight = function () {
        var e;
        1 === this.options.slidesToShow &&
          !0 === this.options.adaptiveHeight &&
          !1 === this.options.vertical &&
          ((e = this.$slides.eq(this.currentSlide).outerHeight(!0)),
          this.$list.css("height", e));
      }),
      (s.prototype.setOption = s.prototype.slickSetOption =
        function () {
          var e,
            t,
            n,
            i,
            o,
            s = this,
            r = !1;
          if (
            ("object" === u.type(arguments[0])
              ? ((n = arguments[0]), (r = arguments[1]), (o = "multiple"))
              : "string" === u.type(arguments[0]) &&
                ((n = arguments[0]),
                (i = arguments[1]),
                (r = arguments[2]),
                "responsive" === arguments[0] &&
                "array" === u.type(arguments[1])
                  ? (o = "responsive")
                  : void 0 !== arguments[1] && (o = "single")),
            "single" === o)
          )
            s.options[n] = i;
          else if ("multiple" === o)
            u.each(n, function (e, t) {
              s.options[e] = t;
            });
          else if ("responsive" === o)
            for (t in i)
              if ("array" !== u.type(s.options.responsive))
                s.options.responsive = [i[t]];
              else {
                for (e = s.options.responsive.length - 1; 0 <= e; )
                  s.options.responsive[e].breakpoint === i[t].breakpoint &&
                    s.options.responsive.splice(e, 1),
                    e--;
                s.options.responsive.push(i[t]);
              }
          r && (s.unload(), s.reinit());
        }),
      (s.prototype.setPosition = function () {
        this.setDimensions(),
          this.setHeight(),
          !1 === this.options.fade
            ? this.setCSS(this.getLeft(this.currentSlide))
            : this.setFade(),
          this.$slider.trigger("setPosition", [this]);
      }),
      (s.prototype.setProps = function () {
        var e = this,
          t = document.body.style;
        (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
          "top" === e.positionProp
            ? e.$slider.addClass("slick-vertical")
            : e.$slider.removeClass("slick-vertical"),
          (void 0 === t.WebkitTransition &&
            void 0 === t.MozTransition &&
            void 0 === t.msTransition) ||
            (!0 === e.options.useCSS && (e.cssTransitions = !0)),
          e.options.fade &&
            ("number" == typeof e.options.zIndex
              ? e.options.zIndex < 3 && (e.options.zIndex = 3)
              : (e.options.zIndex = e.defaults.zIndex)),
          void 0 !== t.OTransform &&
            ((e.animType = "OTransform"),
            (e.transformType = "-o-transform"),
            (e.transitionType = "OTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.MozTransform &&
            ((e.animType = "MozTransform"),
            (e.transformType = "-moz-transform"),
            (e.transitionType = "MozTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.MozPerspective &&
              (e.animType = !1)),
          void 0 !== t.webkitTransform &&
            ((e.animType = "webkitTransform"),
            (e.transformType = "-webkit-transform"),
            (e.transitionType = "webkitTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.msTransform &&
            ((e.animType = "msTransform"),
            (e.transformType = "-ms-transform"),
            (e.transitionType = "msTransition"),
            void 0 === t.msTransform && (e.animType = !1)),
          void 0 !== t.transform &&
            !1 !== e.animType &&
            ((e.animType = "transform"),
            (e.transformType = "transform"),
            (e.transitionType = "transition")),
          (e.transformsEnabled =
            e.options.useTransform && null !== e.animType && !1 !== e.animType);
      }),
      (s.prototype.setSlideClasses = function (e) {
        var t,
          n,
          i,
          o = this,
          s = o.$slider
            .find(".slick-slide")
            .removeClass("slick-active slick-center slick-current")
            .attr("aria-hidden", "true");
        o.$slides.eq(e).addClass("slick-current"),
          !0 === o.options.centerMode
            ? ((n = o.options.slidesToShow % 2 == 0 ? 1 : 0),
              (i = Math.floor(o.options.slidesToShow / 2)),
              !0 === o.options.infinite &&
                (i <= e && e <= o.slideCount - 1 - i
                  ? o.$slides
                      .slice(e - i + n, e + i + 1)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")
                  : ((t = o.options.slidesToShow + e),
                    s
                      .slice(t - i + 1 + n, t + i + 2)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")),
                0 === e
                  ? s
                      .eq(s.length - 1 - o.options.slidesToShow)
                      .addClass("slick-center")
                  : e === o.slideCount - 1 &&
                    s.eq(o.options.slidesToShow).addClass("slick-center")),
              o.$slides.eq(e).addClass("slick-center"))
            : 0 <= e && e <= o.slideCount - o.options.slidesToShow
            ? o.$slides
                .slice(e, e + o.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : s.length <= o.options.slidesToShow
            ? s.addClass("slick-active").attr("aria-hidden", "false")
            : ((n = o.slideCount % o.options.slidesToShow),
              (t = !0 === o.options.infinite ? o.options.slidesToShow + e : e),
              (o.options.slidesToShow == o.options.slidesToScroll &&
              o.slideCount - e < o.options.slidesToShow
                ? s.slice(t - (o.options.slidesToShow - n), t + n)
                : s.slice(t, t + o.options.slidesToShow)
              )
                .addClass("slick-active")
                .attr("aria-hidden", "false")),
          ("ondemand" !== o.options.lazyLoad &&
            "anticipated" !== o.options.lazyLoad) ||
            o.lazyLoad();
      }),
      (s.prototype.setupInfinite = function () {
        var e,
          t,
          n,
          i = this;
        if (
          (!0 === i.options.fade && (i.options.centerMode = !1),
          !0 === i.options.infinite &&
            !1 === i.options.fade &&
            ((t = null), i.slideCount > i.options.slidesToShow))
        ) {
          for (
            n =
              !0 === i.options.centerMode
                ? i.options.slidesToShow + 1
                : i.options.slidesToShow,
              e = i.slideCount;
            e > i.slideCount - n;
            --e
          )
            u(i.$slides[(t = e - 1)])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - i.slideCount)
              .prependTo(i.$slideTrack)
              .addClass("slick-cloned");
          for (e = 0; e < n + i.slideCount; e += 1)
            (t = e),
              u(i.$slides[t])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", t + i.slideCount)
                .appendTo(i.$slideTrack)
                .addClass("slick-cloned");
          i.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              u(this).attr("id", "");
            });
        }
      }),
      (s.prototype.interrupt = function (e) {
        e || this.autoPlay(), (this.interrupted = e);
      }),
      (s.prototype.selectHandler = function (e) {
        (e = u(e.target).is(".slick-slide")
          ? u(e.target)
          : u(e.target).parents(".slick-slide")),
          (e = (e = parseInt(e.attr("data-slick-index"))) || 0);
        this.slideCount <= this.options.slidesToShow
          ? this.slideHandler(e, !1, !0)
          : this.slideHandler(e);
      }),
      (s.prototype.slideHandler = function (e, t, n) {
        var i,
          o,
          s,
          r = this;
        if (
          ((t = t || !1),
          !(
            (!0 === r.animating && !0 === r.options.waitForAnimate) ||
            (!0 === r.options.fade && r.currentSlide === e)
          ))
        )
          if (
            (!1 === t && r.asNavFor(e),
            (i = e),
            (t = r.getLeft(i)),
            (s = r.getLeft(r.currentSlide)),
            (r.currentLeft = null === r.swipeLeft ? s : r.swipeLeft),
            !1 === r.options.infinite &&
              !1 === r.options.centerMode &&
              (e < 0 || e > r.getDotCount() * r.options.slidesToScroll))
          )
            !1 === r.options.fade &&
              ((i = r.currentSlide),
              !0 !== n
                ? r.animateSlide(s, function () {
                    r.postSlide(i);
                  })
                : r.postSlide(i));
          else if (
            !1 === r.options.infinite &&
            !0 === r.options.centerMode &&
            (e < 0 || e > r.slideCount - r.options.slidesToScroll)
          )
            !1 === r.options.fade &&
              ((i = r.currentSlide),
              !0 !== n
                ? r.animateSlide(s, function () {
                    r.postSlide(i);
                  })
                : r.postSlide(i));
          else {
            if (
              (r.options.autoplay && clearInterval(r.autoPlayTimer),
              (o =
                i < 0
                  ? r.slideCount % r.options.slidesToScroll != 0
                    ? r.slideCount - (r.slideCount % r.options.slidesToScroll)
                    : r.slideCount + i
                  : i >= r.slideCount
                  ? r.slideCount % r.options.slidesToScroll != 0
                    ? 0
                    : i - r.slideCount
                  : i),
              (r.animating = !0),
              r.$slider.trigger("beforeChange", [r, r.currentSlide, o]),
              (e = r.currentSlide),
              (r.currentSlide = o),
              r.setSlideClasses(r.currentSlide),
              r.options.asNavFor &&
                (s = (s = r.getNavTarget()).slick("getSlick")).slideCount <=
                  s.options.slidesToShow &&
                s.setSlideClasses(r.currentSlide),
              r.updateDots(),
              r.updateArrows(),
              !0 === r.options.fade)
            )
              return (
                !0 !== n
                  ? (r.fadeSlideOut(e),
                    r.fadeSlide(o, function () {
                      r.postSlide(o);
                    }))
                  : r.postSlide(o),
                void r.animateHeight()
              );
            !0 !== n
              ? r.animateSlide(t, function () {
                  r.postSlide(o);
                })
              : r.postSlide(o);
          }
      }),
      (s.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.hide(), e.$nextArrow.hide()),
          !0 === e.options.dots &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.hide(),
          e.$slider.addClass("slick-loading");
      }),
      (s.prototype.swipeDirection = function () {
        var e = this.touchObject.startX - this.touchObject.curX,
          t = this.touchObject.startY - this.touchObject.curY,
          t = Math.atan2(t, e);
        return ((e =
          (e = Math.round((180 * t) / Math.PI)) < 0 ? 360 - Math.abs(e) : e) <=
          45 &&
          0 <= e) ||
          (e <= 360 && 315 <= e)
          ? !1 === this.options.rtl
            ? "left"
            : "right"
          : 135 <= e && e <= 225
          ? !1 === this.options.rtl
            ? "right"
            : "left"
          : !0 === this.options.verticalSwiping
          ? 35 <= e && e <= 135
            ? "down"
            : "up"
          : "vertical";
      }),
      (s.prototype.swipeEnd = function (e) {
        var t,
          n,
          i = this;
        if (((i.dragging = !1), (i.swiping = !1), i.scrolling))
          return (i.scrolling = !1);
        if (
          ((i.interrupted = !1),
          (i.shouldClick = !(10 < i.touchObject.swipeLength)),
          void 0 === i.touchObject.curX)
        )
          return !1;
        if (
          (!0 === i.touchObject.edgeHit &&
            i.$slider.trigger("edge", [i, i.swipeDirection()]),
          i.touchObject.swipeLength >= i.touchObject.minSwipe)
        ) {
          switch ((n = i.swipeDirection())) {
            case "left":
            case "down":
              (t = i.options.swipeToSlide
                ? i.checkNavigable(i.currentSlide + i.getSlideCount())
                : i.currentSlide + i.getSlideCount()),
                (i.currentDirection = 0);
              break;
            case "right":
            case "up":
              (t = i.options.swipeToSlide
                ? i.checkNavigable(i.currentSlide - i.getSlideCount())
                : i.currentSlide - i.getSlideCount()),
                (i.currentDirection = 1);
          }
          "vertical" != n &&
            (i.slideHandler(t),
            (i.touchObject = {}),
            i.$slider.trigger("swipe", [i, n]));
        } else
          i.touchObject.startX !== i.touchObject.curX &&
            (i.slideHandler(i.currentSlide), (i.touchObject = {}));
      }),
      (s.prototype.swipeHandler = function (e) {
        var t = this;
        if (
          !(
            !1 === t.options.swipe ||
            ("ontouchend" in document && !1 === t.options.swipe) ||
            (!1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))
          )
        )
          switch (
            ((t.touchObject.fingerCount =
              e.originalEvent && void 0 !== e.originalEvent.touches
                ? e.originalEvent.touches.length
                : 1),
            (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
            !0 === t.options.verticalSwiping &&
              (t.touchObject.minSwipe =
                t.listHeight / t.options.touchThreshold),
            e.data.action)
          ) {
            case "start":
              t.swipeStart(e);
              break;
            case "move":
              t.swipeMove(e);
              break;
            case "end":
              t.swipeEnd(e);
          }
      }),
      (s.prototype.swipeMove = function (e) {
        var t,
          n,
          i = this,
          o = void 0 !== e.originalEvent ? e.originalEvent.touches : null;
        return (
          !(!i.dragging || i.scrolling || (o && 1 !== o.length)) &&
          ((t = i.getLeft(i.currentSlide)),
          (i.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX),
          (i.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY),
          (i.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(i.touchObject.curX - i.touchObject.startX, 2))
          )),
          (o = Math.round(
            Math.sqrt(Math.pow(i.touchObject.curY - i.touchObject.startY, 2))
          )),
          !i.options.verticalSwiping && !i.swiping && 4 < o
            ? !(i.scrolling = !0)
            : (!0 === i.options.verticalSwiping &&
                (i.touchObject.swipeLength = o),
              (o = i.swipeDirection()),
              void 0 !== e.originalEvent &&
                4 < i.touchObject.swipeLength &&
                ((i.swiping = !0), e.preventDefault()),
              (e =
                (!1 === i.options.rtl ? 1 : -1) *
                (i.touchObject.curX > i.touchObject.startX ? 1 : -1)),
              !0 === i.options.verticalSwiping &&
                (e = i.touchObject.curY > i.touchObject.startY ? 1 : -1),
              (n = i.touchObject.swipeLength),
              (i.touchObject.edgeHit = !1) === i.options.infinite &&
                ((0 === i.currentSlide && "right" === o) ||
                  (i.currentSlide >= i.getDotCount() && "left" === o)) &&
                ((n = i.touchObject.swipeLength * i.options.edgeFriction),
                (i.touchObject.edgeHit = !0)),
              !1 === i.options.vertical
                ? (i.swipeLeft = t + n * e)
                : (i.swipeLeft = t + n * (i.$list.height() / i.listWidth) * e),
              !0 === i.options.verticalSwiping && (i.swipeLeft = t + n * e),
              !0 !== i.options.fade &&
                !1 !== i.options.touchMove &&
                (!0 === i.animating
                  ? ((i.swipeLeft = null), !1)
                  : void i.setCSS(i.swipeLeft))))
        );
      }),
      (s.prototype.swipeStart = function (e) {
        var t,
          n = this;
        if (
          ((n.interrupted = !0),
          1 !== n.touchObject.fingerCount ||
            n.slideCount <= n.options.slidesToShow)
        )
          return !(n.touchObject = {});
        void 0 !== e.originalEvent &&
          void 0 !== e.originalEvent.touches &&
          (t = e.originalEvent.touches[0]),
          (n.touchObject.startX = n.touchObject.curX =
            void 0 !== t ? t.pageX : e.clientX),
          (n.touchObject.startY = n.touchObject.curY =
            void 0 !== t ? t.pageY : e.clientY),
          (n.dragging = !0);
      }),
      (s.prototype.unfilterSlides = s.prototype.slickUnfilter =
        function () {
          null !== this.$slidesCache &&
            (this.unload(),
            this.$slideTrack.children(this.options.slide).detach(),
            this.$slidesCache.appendTo(this.$slideTrack),
            this.reinit());
        }),
      (s.prototype.unload = function () {
        var e = this;
        u(".slick-cloned", e.$slider).remove(),
          e.$dots && e.$dots.remove(),
          e.$prevArrow &&
            e.htmlExpr.test(e.options.prevArrow) &&
            e.$prevArrow.remove(),
          e.$nextArrow &&
            e.htmlExpr.test(e.options.nextArrow) &&
            e.$nextArrow.remove(),
          e.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (s.prototype.unslick = function (e) {
        this.$slider.trigger("unslick", [this, e]), this.destroy();
      }),
      (s.prototype.updateArrows = function () {
        var e = this;
        Math.floor(e.options.slidesToShow / 2),
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            !e.options.infinite &&
            (e.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            e.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            0 === e.currentSlide
              ? (e.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                e.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : ((e.currentSlide >= e.slideCount - e.options.slidesToShow &&
                  !1 === e.options.centerMode) ||
                  (e.currentSlide >= e.slideCount - 1 &&
                    !0 === e.options.centerMode)) &&
                (e.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                e.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
      }),
      (s.prototype.updateDots = function () {
        null !== this.$dots &&
          (this.$dots.find("li").removeClass("slick-active").end(),
          this.$dots
            .find("li")
            .eq(Math.floor(this.currentSlide / this.options.slidesToScroll))
            .addClass("slick-active"));
      }),
      (s.prototype.visibility = function () {
        this.options.autoplay &&
          (document[this.hidden]
            ? (this.interrupted = !0)
            : (this.interrupted = !1));
      }),
      (u.fn.slick = function () {
        for (
          var e,
            t = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            i = this.length,
            o = 0;
          o < i;
          o++
        )
          if (
            ("object" == typeof t || void 0 === t
              ? (this[o].slick = new s(this[o], t))
              : (e = this[o].slick[t].apply(this[o].slick, n)),
            void 0 !== e)
          )
            return e;
        return this;
      });
  }),
  !(function (e, t) {
    "function" == typeof define && define.amd
      ? define(t)
      : "object" == typeof exports
      ? (module.exports = t())
      : (e.PhotoSwipe = t());
  })(this, function () {
    "use strict";
    return function (h, L, t, R) {
      var p = {
          features: null,
          bind: function (e, t, n, i) {
            var o = (i ? "remove" : "add") + "EventListener";
            t = t.split(" ");
            for (var s = 0; s < t.length; s++) t[s] && e[o](t[s], n, !1);
          },
          isArray: function (e) {
            return e instanceof Array;
          },
          createEl: function (e, t) {
            t = document.createElement(t || "div");
            return e && (t.className = e), t;
          },
          getScrollY: function () {
            var e = window.pageYOffset;
            return void 0 !== e ? e : document.documentElement.scrollTop;
          },
          unbind: function (e, t, n) {
            p.bind(e, t, n, !0);
          },
          removeClass: function (e, t) {
            t = new RegExp("(\\s|^)" + t + "(\\s|$)");
            e.className = e.className
              .replace(t, " ")
              .replace(/^\s\s*/, "")
              .replace(/\s\s*$/, "");
          },
          addClass: function (e, t) {
            p.hasClass(e, t) || (e.className += (e.className ? " " : "") + t);
          },
          hasClass: function (e, t) {
            return (
              e.className &&
              new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
            );
          },
          getChildByClass: function (e, t) {
            for (var n = e.firstChild; n; ) {
              if (p.hasClass(n, t)) return n;
              n = n.nextSibling;
            }
          },
          arraySearch: function (e, t, n) {
            for (var i = e.length; i--; ) if (e[i][n] === t) return i;
            return -1;
          },
          extend: function (e, t, n) {
            for (var i in t)
              if (t.hasOwnProperty(i)) {
                if (n && e.hasOwnProperty(i)) continue;
                e[i] = t[i];
              }
          },
          easing: {
            sine: {
              out: function (e) {
                return Math.sin(e * (Math.PI / 2));
              },
              inOut: function (e) {
                return -(Math.cos(Math.PI * e) - 1) / 2;
              },
            },
            cubic: {
              out: function (e) {
                return --e * e * e + 1;
              },
            },
          },
          detectFeatures: function () {
            if (p.features) return p.features;
            var e,
              t,
              n = p.createEl().style,
              i = "",
              o = {};
            (o.oldIE = document.all && !document.addEventListener),
              (o.touch = "ontouchstart" in window),
              window.requestAnimationFrame &&
                ((o.raf = window.requestAnimationFrame),
                (o.caf = window.cancelAnimationFrame)),
              (o.pointerEvent =
                navigator.pointerEnabled || navigator.msPointerEnabled),
              o.pointerEvent ||
                ((e = navigator.userAgent),
                /iP(hone|od)/.test(navigator.platform) &&
                  (t = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)) &&
                  0 < t.length &&
                  1 <= (t = parseInt(t[1], 10)) &&
                  t < 8 &&
                  (o.isOldIOSPhone = !0),
                (t = (t = e.match(/Android\s([0-9\.]*)/)) ? t[1] : 0),
                1 <= (t = parseFloat(t)) &&
                  (t < 4.4 && (o.isOldAndroid = !0), (o.androidVersion = t)),
                (o.isMobileOpera = /opera mini|opera mobi/i.test(e)));
            for (
              var s,
                r,
                a,
                l = ["transform", "perspective", "animationName"],
                u = ["", "webkit", "Moz", "ms", "O"],
                c = 0;
              c < 4;
              c++
            ) {
              for (var i = u[c], d = 0; d < 3; d++)
                (s = l[d]),
                  (r = i + (i ? s.charAt(0).toUpperCase() + s.slice(1) : s)),
                  !o[s] && r in n && (o[s] = r);
              i &&
                !o.raf &&
                ((i = i.toLowerCase()),
                (o.raf = window[i + "RequestAnimationFrame"]),
                o.raf &&
                  (o.caf =
                    window[i + "CancelAnimationFrame"] ||
                    window[i + "CancelRequestAnimationFrame"]));
            }
            return (
              o.raf ||
                ((a = 0),
                (o.raf = function (e) {
                  var t = new Date().getTime(),
                    n = Math.max(0, 16 - (t - a)),
                    i = window.setTimeout(function () {
                      e(t + n);
                    }, n);
                  return (a = t + n), i;
                }),
                (o.caf = function (e) {
                  clearTimeout(e);
                })),
              (o.svg =
                !!document.createElementNS &&
                !!document.createElementNS("http://www.w3.org/2000/svg", "svg")
                  .createSVGRect),
              (p.features = o)
            );
          },
        },
        f =
          (p.detectFeatures(),
          p.features.oldIE &&
            (p.bind = function (e, t, n, i) {
              t = t.split(" ");
              for (
                var o,
                  s = (i ? "detach" : "attach") + "Event",
                  r = function () {
                    n.handleEvent.call(n);
                  },
                  a = 0;
                a < t.length;
                a++
              )
                if ((o = t[a]))
                  if ("object" == typeof n && n.handleEvent) {
                    if (i) {
                      if (!n["oldIE" + o]) return !1;
                    } else n["oldIE" + o] = r;
                    e[s]("on" + o, n["oldIE" + o]);
                  } else e[s]("on" + o, n);
            }),
          this),
        N = 25,
        m = {
          allowPanToNext: !0,
          spacing: 0.12,
          bgOpacity: 1,
          mouseUsed: !1,
          loop: !0,
          pinchToClose: !0,
          closeOnScroll: !0,
          closeOnVerticalDrag: !0,
          verticalDragRange: 0.75,
          hideAnimationDuration: 333,
          showAnimationDuration: 333,
          showHideOpacity: !1,
          focus: !0,
          escKey: !0,
          arrowKeys: !0,
          mainScrollEndFriction: 0.35,
          panEndFriction: 0.35,
          isClickableElement: function (e) {
            return "A" === e.tagName;
          },
          getDoubleTapZoom: function (e, t) {
            return e || t.initialZoomLevel < 0.7 ? 1 : 1.33;
          },
          maxSpreadZoom: 1.33,
          modal: !0,
          scaleMode: "fit",
        };
      p.extend(m, R);
      function e() {
        return { x: 0, y: 0 };
      }
      function B(e, t) {
        p.extend(f, t.publicMethods), Ue.push(e);
      }
      function H(e) {
        var t = F();
        return t - 1 < e ? e - t : e < 0 ? t + e : e;
      }
      function s(e, t) {
        return Ze[e] || (Ze[e] = []), Ze[e].push(t);
      }
      function q(e, t, n, i) {
        i === f.currItem.initialZoomLevel
          ? (n[e] = f.currItem.initialPosition[e])
          : ((n[e] = Qe(e, i)),
            n[e] > t.min[e]
              ? (n[e] = t.min[e])
              : n[e] < t.max[e] && (n[e] = t.max[e]));
      }
      function z(e) {
        var t = "";
        m.escKey && 27 === e.keyCode
          ? (t = "close")
          : m.arrowKeys &&
            (37 === e.keyCode
              ? (t = "prev")
              : 39 === e.keyCode && (t = "next")),
          !t ||
            e.ctrlKey ||
            e.altKey ||
            e.shiftKey ||
            e.metaKey ||
            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            f[t]());
      }
      function W(e) {
        e && (De || Ee || y || Se) && (e.preventDefault(), e.stopPropagation());
      }
      function U() {
        f.setScrollOffset(0, p.getScrollY());
      }
      function V(e) {
        var t;
        ("mousedown" === e.type && 0 < e.button) ||
          (Qt
            ? e.preventDefault()
            : (Te && "mousedown" === e.type) ||
              ($t(e, !0) && e.preventDefault(),
              x("pointerDown"),
              pe &&
                ((t = p.arraySearch(mt, e.pointerId, "id")) < 0 &&
                  (t = mt.length),
                (mt[t] = { x: e.pageX, y: e.pageY, id: e.pointerId })),
              (e = (t = Nt(e)).length),
              (u = null),
              ut(),
              (l && 1 !== e) ||
                ((l = Ie = !0),
                p.bind(window, ee, f),
                (Ce = Re = Pe = Se = $e = De = Ae = Ee = !1),
                (Me = null),
                x("firstTouchStart", t),
                A(He, b),
                (Be.x = Be.y = 0),
                A($, t[0]),
                A(ft, $),
                (gt.x = w.x * qe),
                (vt = [{ x: $.x, y: $.y }]),
                (ke = we = C()),
                it(v, !0),
                Tt(),
                At()),
              !c &&
                1 < e &&
                !y &&
                !$e &&
                ((ne = v),
                (c = Ae = !(Ee = !1)),
                (Be.y = Be.x = 0),
                A(He, b),
                A(D, t[0]),
                A(pt, t[1]),
                Ft(D, pt, xt),
                (kt.x = Math.abs(xt.x) - b.x),
                (kt.y = Math.abs(xt.y) - b.y),
                (je = St(D, pt)))));
      }
      function Y(e) {
        var t;
        e.preventDefault(),
          pe &&
            -1 < (t = p.arraySearch(mt, e.pointerId, "id")) &&
            (((t = mt[t]).x = e.pageX), (t.y = e.pageY)),
          l &&
            ((t = Nt(e)),
            Me || De || c
              ? (u = t)
              : j.x !== w.x * qe
              ? (Me = "h")
              : ((e = Math.abs(t[0].x - $.x) - Math.abs(t[0].y - $.y)),
                Math.abs(e) >= ht && ((Me = 0 < e ? "h" : "v"), (u = t))));
      }
      function Z(e) {
        if (a.isOldAndroid) {
          if (Te && "mouseup" === e.type) return;
          -1 < e.type.indexOf("touch") &&
            (clearTimeout(Te),
            (Te = setTimeout(function () {
              Te = 0;
            }, 600)));
        }
        var t;
        x("pointerUp"),
          $t(e, !1) && e.preventDefault(),
          pe &&
            -1 < (s = p.arraySearch(mt, e.pointerId, "id")) &&
            ((t = mt.splice(s, 1)[0]),
            navigator.pointerEnabled
              ? (t.type = e.pointerType || "mouse")
              : ((t.type = { 4: "mouse", 2: "touch", 3: "pen" }[e.pointerType]),
                t.type || (t.type = e.pointerType || "mouse")));
        var n = (s = Nt(e)).length;
        if (2 === (n = "mouseup" === e.type ? 0 : n)) return !(u = null);
        1 === n && A(ft, s[0]),
          0 !== n ||
            Me ||
            y ||
            (t ||
              ("mouseup" === e.type
                ? (t = { x: e.pageX, y: e.pageY, type: "mouse" })
                : e.changedTouches &&
                  e.changedTouches[0] &&
                  (t = {
                    x: e.changedTouches[0].pageX,
                    y: e.changedTouches[0].pageY,
                    type: "touch",
                  })),
            x("touchRelease", e, t));
        var i,
          o,
          s = -1;
        if (
          (0 === n &&
            ((l = !1),
            p.unbind(window, ee, f),
            Tt(),
            c ? (s = 0) : -1 !== wt && (s = C() - wt)),
          (wt = 1 === n ? C() : -1),
          (e = -1 !== s && s < 150 ? "zoom" : "swipe"),
          c &&
            n < 2 &&
            ((c = !1), 1 === n && (e = "zoomPointerUp"), x("zoomGestureEnded")),
          (u = null),
          De || Ee || y || Se)
        )
          if ((ut(), (xe = xe || qt()).calculateSwipeSpeed("x"), Se))
            It() < m.verticalDragRange
              ? f.close()
              : ((i = b.y),
                (o = Le),
                ct("verticalDrag", 0, 1, 300, p.easing.cubic.out, function (e) {
                  (b.y = (f.currItem.initialPosition.y - i) * e + i),
                    S((1 - o) * e + o),
                    T();
                }),
                x("onVerticalDrag", 1));
          else {
            if (($e || y) && 0 === n) {
              if (Wt(e, xe)) return;
              e = "zoomPointerUp";
            }
            if (!y)
              return "swipe" !== e
                ? void Vt()
                : void (!$e && v > f.currItem.fitRatio && zt(xe));
          }
      }
      var K,
        X,
        G,
        g,
        J,
        Q,
        ee,
        te,
        n,
        v,
        ne,
        ie,
        oe,
        se,
        re,
        r,
        ae,
        le,
        ue,
        ce,
        de,
        he,
        pe,
        i,
        fe,
        me,
        ge,
        ve,
        ye,
        be,
        a,
        _e,
        we,
        ke,
        xe,
        Ce,
        Se,
        Te,
        l,
        Ae,
        Ee,
        De,
        Oe,
        $e,
        u,
        c,
        je,
        d,
        Fe,
        y,
        Me,
        Ie,
        Pe,
        Le,
        Re,
        Ne,
        Be = e(),
        He = e(),
        b = e(),
        _ = {},
        qe = 0,
        ze = {},
        w = e(),
        k = 0,
        We = !0,
        Ue = [],
        Ve = {},
        Ye = !1,
        Ze = {},
        x = function (e) {
          var t = Ze[e];
          if (t) {
            var n = Array.prototype.slice.call(arguments);
            n.shift();
            for (var i = 0; i < t.length; i++) t[i].apply(f, n);
          }
        },
        C = function () {
          return new Date().getTime();
        },
        S = function (e) {
          (Le = e), (f.bg.style.opacity = e * m.bgOpacity);
        },
        Ke = function (e, t, n, i, o) {
          (!Ye || (o && o !== f.currItem)) && (i /= (o || f.currItem).fitRatio),
            (e[he] = ie + t + "px, " + n + "px" + oe + " scale(" + i + ")");
        },
        T = function (e) {
          Fe &&
            (e &&
              (v > f.currItem.fitRatio
                ? Ye || (un(f.currItem, !1, !0), (Ye = !0))
                : Ye && (un(f.currItem), (Ye = !1))),
            Ke(Fe, b.x, b.y, v));
        },
        Xe = function (e) {
          e.container &&
            Ke(
              e.container.style,
              e.initialPosition.x,
              e.initialPosition.y,
              e.initialZoomLevel,
              e
            );
        },
        Ge = function (e, t) {
          t[he] = ie + e + "px, 0px" + oe;
        },
        Je = function (e, t) {
          var n;
          !m.loop &&
            t &&
            ((t = g + (w.x * qe - e) / w.x),
            (n = Math.round(e - j.x)),
            ((t < 0 && 0 < n) || (t >= F() - 1 && n < 0)) &&
              (e = j.x + n * m.mainScrollEndFriction)),
            (j.x = e),
            Ge(e, J);
        },
        Qe = function (e, t) {
          var n = kt[e] - ze[e];
          return He[e] + Be[e] + n - (t / ne) * n;
        },
        A = function (e, t) {
          (e.x = t.x), (e.y = t.y), t.id && (e.id = t.id);
        },
        et = function (e) {
          (e.x = Math.round(e.x)), (e.y = Math.round(e.y));
        },
        tt = null,
        nt = function () {
          tt &&
            (p.unbind(document, "mousemove", nt),
            p.addClass(h, "pswp--has_mouse"),
            (m.mouseUsed = !0),
            x("mouseUsed")),
            (tt = setTimeout(function () {
              tt = null;
            }, 100));
        },
        it = function (e, t) {
          e = an(f.currItem, _, e);
          return t && (d = e), e;
        },
        ot = function (e) {
          return (e = e || f.currItem).initialZoomLevel;
        },
        st = function (e) {
          return 0 < (e = e || f.currItem).w ? m.maxSpreadZoom : 1;
        },
        E = {},
        rt = 0,
        at = function (e) {
          E[e] && (E[e].raf && me(E[e].raf), rt--, delete E[e]);
        },
        lt = function (e) {
          E[e] && at(e), E[e] || (rt++, (E[e] = {}));
        },
        ut = function () {
          for (var e in E) E.hasOwnProperty(e) && at(e);
        },
        ct = function (e, t, n, i, o, s, r) {
          function a() {
            if (E[e]) {
              if (((l = C() - u), i <= l)) return at(e), s(n), void (r && r());
              s((n - t) * o(l / i) + t), (E[e].raf = fe(a));
            }
          }
          var l,
            u = C();
          lt(e);
          a();
        },
        R = {
          shout: x,
          listen: s,
          viewportSize: _,
          options: m,
          isMainScrollAnimating: function () {
            return y;
          },
          getZoomLevel: function () {
            return v;
          },
          getCurrentIndex: function () {
            return g;
          },
          isDragging: function () {
            return l;
          },
          isZooming: function () {
            return c;
          },
          setScrollOffset: function (e, t) {
            (ze.x = e), (be = ze.y = t), x("updateScrollOffset", ze);
          },
          applyZoomPan: function (e, t, n, i) {
            (b.x = t), (b.y = n), (v = e), T(i);
          },
          init: function () {
            if (!K && !X) {
              (f.framework = p),
                (f.template = h),
                (f.bg = p.getChildByClass(h, "pswp__bg")),
                (ge = h.className),
                (K = !0),
                (a = p.detectFeatures()),
                (fe = a.raf),
                (me = a.caf),
                (he = a.transform),
                (ye = a.oldIE),
                (f.scrollWrap = p.getChildByClass(h, "pswp__scroll-wrap")),
                (f.container = p.getChildByClass(
                  f.scrollWrap,
                  "pswp__container"
                )),
                (J = f.container.style),
                (f.itemHolders = r =
                  [
                    { el: f.container.children[0], wrap: 0, index: -1 },
                    { el: f.container.children[1], wrap: 0, index: -1 },
                    { el: f.container.children[2], wrap: 0, index: -1 },
                  ]),
                (r[0].el.style.display = r[2].el.style.display = "none"),
                (function () {
                  var e;
                  if (he)
                    return (
                      (e = a.perspective && !i),
                      (ie = "translate" + (e ? "3d(" : "(")),
                      (oe = a.perspective ? ", 0px)" : ")")
                    );
                  (he = "left"),
                    p.addClass(h, "pswp--ie"),
                    (Ge = function (e, t) {
                      t.left = e + "px";
                    }),
                    (Xe = function (e) {
                      var t = 1 < e.fitRatio ? 1 : e.fitRatio,
                        n = e.container.style,
                        i = t * e.w,
                        t = t * e.h;
                      (n.width = i + "px"),
                        (n.height = t + "px"),
                        (n.left = e.initialPosition.x + "px"),
                        (n.top = e.initialPosition.y + "px");
                    }),
                    (T = function () {
                      var e, t, n, i;
                      Fe &&
                        ((e = Fe),
                        (n =
                          (i = 1 < (t = f.currItem).fitRatio ? 1 : t.fitRatio) *
                          t.w),
                        (i = i * t.h),
                        (e.width = n + "px"),
                        (e.height = i + "px"),
                        (e.left = b.x + "px"),
                        (e.top = b.y + "px"));
                    });
                })(),
                (n = {
                  resize: f.updateSize,
                  orientationchange: function () {
                    clearTimeout(_e),
                      (_e = setTimeout(function () {
                        _.x !== f.scrollWrap.clientWidth && f.updateSize();
                      }, 500));
                  },
                  scroll: U,
                  keydown: z,
                  click: W,
                });
              var e,
                t = a.isOldIOSPhone || a.isOldAndroid || a.isMobileOpera;
              for (
                (a.animationName && a.transform && !t) ||
                  (m.showAnimationDuration = m.hideAnimationDuration = 0),
                  e = 0;
                e < Ue.length;
                e++
              )
                f["init" + Ue[e]]();
              L && (f.ui = new L(f, p)).init(),
                x("firstUpdate"),
                (g = g || m.index || 0),
                (isNaN(g) || g < 0 || g >= F()) && (g = 0),
                (f.currItem = en(g)),
                (a.isOldIOSPhone || a.isOldAndroid) && (We = !1),
                h.setAttribute("aria-hidden", "false"),
                m.modal &&
                  (We
                    ? (h.style.position = "fixed")
                    : ((h.style.position = "absolute"),
                      (h.style.top = p.getScrollY() + "px"))),
                void 0 === be &&
                  (x("initialLayout"), (be = ve = p.getScrollY()));
              t = "pswp--open ";
              for (
                m.mainClass && (t += m.mainClass + " "),
                  m.showHideOpacity && (t += "pswp--animate_opacity "),
                  t =
                    (t =
                      (t += i ? "pswp--touch" : "pswp--notouch") +
                      (a.animationName ? " pswp--css_animation" : "")) +
                    (a.svg ? " pswp--svg" : ""),
                  p.addClass(h, t),
                  f.updateSize(),
                  Q = -1,
                  k = null,
                  e = 0;
                e < 3;
                e++
              )
                Ge((e + Q) * w.x, r[e].el.style);
              ye || p.bind(f.scrollWrap, te, f),
                s("initialZoomInEnd", function () {
                  f.setContent(r[0], g - 1),
                    f.setContent(r[2], g + 1),
                    (r[0].el.style.display = r[2].el.style.display = "block"),
                    m.focus && h.focus(),
                    p.bind(document, "keydown", f),
                    a.transform && p.bind(f.scrollWrap, "click", f),
                    m.mouseUsed || p.bind(document, "mousemove", nt),
                    p.bind(window, "resize scroll orientationchange", f),
                    x("bindEvents");
                }),
                f.setContent(r[1], g),
                f.updateCurrItem(),
                x("afterInit"),
                We ||
                  (se = setInterval(function () {
                    rt ||
                      l ||
                      c ||
                      v !== f.currItem.initialZoomLevel ||
                      f.updateSize();
                  }, 1e3)),
                p.addClass(h, "pswp--visible");
            }
          },
          close: function () {
            K &&
              ((X = !(K = !1)),
              x("close"),
              p.unbind(window, "resize scroll orientationchange", f),
              p.unbind(window, "scroll", n.scroll),
              p.unbind(document, "keydown", f),
              p.unbind(document, "mousemove", nt),
              a.transform && p.unbind(f.scrollWrap, "click", f),
              l && p.unbind(window, ee, f),
              clearTimeout(_e),
              x("unbindEvents"),
              tn(f.currItem, null, !0, f.destroy));
          },
          destroy: function () {
            x("destroy"),
              Xt && clearTimeout(Xt),
              h.setAttribute("aria-hidden", "true"),
              (h.className = ge),
              se && clearInterval(se),
              p.unbind(f.scrollWrap, te, f),
              p.unbind(window, "scroll", f),
              Tt(),
              ut(),
              (Ze = null);
          },
          panTo: function (e, t, n) {
            n ||
              (e > d.min.x ? (e = d.min.x) : e < d.max.x && (e = d.max.x),
              t > d.min.y ? (t = d.min.y) : t < d.max.y && (t = d.max.y)),
              (b.x = e),
              (b.y = t),
              T();
          },
          handleEvent: function (e) {
            (e = e || window.event), n[e.type] && n[e.type](e);
          },
          goTo: function (e) {
            var t = (e = H(e)) - g;
            (k = t),
              (g = e),
              (f.currItem = en(g)),
              (qe -= t),
              Je(w.x * qe),
              ut(),
              (y = !1),
              f.updateCurrItem();
          },
          next: function () {
            f.goTo(g + 1);
          },
          prev: function () {
            f.goTo(g - 1);
          },
          updateCurrZoomItem: function (e) {
            var t;
            e && x("beforeChange", 0),
              (Fe = r[1].el.children.length
                ? ((t = r[1].el.children[0]),
                  p.hasClass(t, "pswp__zoom-wrap") ? t.style : null)
                : null),
              (d = f.currItem.bounds),
              (ne = v = f.currItem.initialZoomLevel),
              (b.x = d.center.x),
              (b.y = d.center.y),
              e && x("afterChange");
          },
          invalidateCurrItems: function () {
            re = !0;
            for (var e = 0; e < 3; e++)
              r[e].item && (r[e].item.needsUpdate = !0);
          },
          updateCurrItem: function (e) {
            if (0 !== k) {
              var t,
                n = Math.abs(k);
              if (!(e && n < 2)) {
                (f.currItem = en(g)),
                  (Ye = !1),
                  x("beforeChange", k),
                  3 <= n && ((Q += k + (0 < k ? -3 : 3)), (n = 3));
                for (var i = 0; i < n; i++)
                  0 < k
                    ? ((t = r.shift()),
                      (r[2] = t),
                      Ge((++Q + 2) * w.x, t.el.style),
                      f.setContent(t, g - n + i + 1 + 1))
                    : ((t = r.pop()),
                      r.unshift(t),
                      Ge(--Q * w.x, t.el.style),
                      f.setContent(t, g + n - i - 1 - 1));
                !Fe ||
                  1 !== Math.abs(k) ||
                  ((e = en(ae)).initialZoomLevel !== v &&
                    (an(e, _), un(e), Xe(e))),
                  (k = 0),
                  f.updateCurrZoomItem(),
                  (ae = g),
                  x("afterChange");
              }
            }
          },
          updateSize: function (e) {
            if (!We && m.modal) {
              var t = p.getScrollY();
              if (
                (be !== t && ((h.style.top = t + "px"), (be = t)),
                !e && Ve.x === window.innerWidth && Ve.y === window.innerHeight)
              )
                return;
              (Ve.x = window.innerWidth),
                (Ve.y = window.innerHeight),
                (h.style.height = Ve.y + "px");
            }
            if (
              ((_.x = f.scrollWrap.clientWidth),
              (_.y = f.scrollWrap.clientHeight),
              U(),
              (w.x = _.x + Math.round(_.x * m.spacing)),
              (w.y = _.y),
              Je(w.x * qe),
              x("beforeResize"),
              void 0 !== Q)
            ) {
              for (var n, i, o, s = 0; s < 3; s++)
                (n = r[s]),
                  Ge((s + Q) * w.x, n.el.style),
                  (o = g + s - 1),
                  m.loop && 2 < F() && (o = H(o)),
                  (i = en(o)) && (re || i.needsUpdate || !i.bounds)
                    ? (f.cleanSlide(i),
                      f.setContent(n, o),
                      1 === s && ((f.currItem = i), f.updateCurrZoomItem(!0)),
                      (i.needsUpdate = !1))
                    : -1 === n.index && 0 <= o && f.setContent(n, o),
                  i && i.container && (an(i, _), un(i), Xe(i));
              re = !1;
            }
            (ne = v = f.currItem.initialZoomLevel),
              (d = f.currItem.bounds) &&
                ((b.x = d.center.x), (b.y = d.center.y), T(!0)),
              x("resize");
          },
          zoomTo: function (t, e, n, i, o) {
            e &&
              ((ne = v),
              (kt.x = Math.abs(e.x) - b.x),
              (kt.y = Math.abs(e.y) - b.y),
              A(He, b));
            function s(e) {
              1 === e
                ? ((v = t), (b.x = r.x), (b.y = r.y))
                : ((v = (t - a) * e + a),
                  (b.x = (r.x - l.x) * e + l.x),
                  (b.y = (r.y - l.y) * e + l.y)),
                o && o(e),
                T(1 === e);
            }
            var e = it(t, !1),
              r = {},
              a = (q("x", e, r, t), q("y", e, r, t), v),
              l = { x: b.x, y: b.y };
            et(r);
            n ? ct("customZoomTo", 0, 1, n, i || p.easing.sine.inOut, s) : s(1);
          },
        },
        dt = 30,
        ht = 10,
        D = {},
        pt = {},
        O = {},
        $ = {},
        ft = {},
        mt = [],
        gt = {},
        vt = [],
        yt = {},
        bt = 0,
        _t = e(),
        wt = 0,
        j = e(),
        kt = e(),
        xt = e(),
        Ct = function (e, t) {
          return e.x === t.x && e.y === t.y;
        },
        St = function (e, t) {
          return (
            (yt.x = Math.abs(e.x - t.x)),
            (yt.y = Math.abs(e.y - t.y)),
            Math.sqrt(yt.x * yt.x + yt.y * yt.y)
          );
        },
        Tt = function () {
          Oe && (me(Oe), (Oe = null));
        },
        At = function () {
          l && ((Oe = fe(At)), Ht());
        },
        Et = function () {
          return !("fit" === m.scaleMode && v === f.currItem.initialZoomLevel);
        },
        Dt = function (e, t) {
          return (
            !(!e || e === document) &&
            !(
              e.getAttribute("class") &&
              -1 < e.getAttribute("class").indexOf("pswp__scroll-wrap")
            ) &&
            (t(e) ? e : Dt(e.parentNode, t))
          );
        },
        Ot = {},
        $t = function (e, t) {
          return (
            (Ot.prevent = !Dt(e.target, m.isClickableElement)),
            x("preventDragEvent", e, t, Ot),
            Ot.prevent
          );
        },
        jt = function (e, t) {
          return (t.x = e.pageX), (t.y = e.pageY), (t.id = e.identifier), t;
        },
        Ft = function (e, t, n) {
          (n.x = 0.5 * (e.x + t.x)), (n.y = 0.5 * (e.y + t.y));
        },
        Mt = function (e, t, n) {
          var i;
          50 < e - ke &&
            (((i = 2 < vt.length ? vt.shift() : {}).x = t),
            (i.y = n),
            vt.push(i),
            (ke = e));
        },
        It = function () {
          var e = b.y - f.currItem.initialPosition.y;
          return 1 - Math.abs(e / (_.y / 2));
        },
        Pt = {},
        Lt = {},
        Rt = [],
        Nt = function (e) {
          for (; 0 < Rt.length; ) Rt.pop();
          return (
            pe
              ? ((Ne = 0),
                mt.forEach(function (e) {
                  0 === Ne ? (Rt[0] = e) : 1 === Ne && (Rt[1] = e), Ne++;
                }))
              : -1 < e.type.indexOf("touch")
              ? e.touches &&
                0 < e.touches.length &&
                ((Rt[0] = jt(e.touches[0], Pt)),
                1 < e.touches.length && (Rt[1] = jt(e.touches[1], Lt)))
              : ((Pt.x = e.pageX),
                (Pt.y = e.pageY),
                (Pt.id = ""),
                (Rt[0] = Pt)),
            Rt
          );
        },
        Bt = function (e, t) {
          var n,
            i,
            o,
            s = b[e] + t[e],
            r = 0 < t[e],
            a = j.x + t.x,
            l = j.x - gt.x,
            u = s > d.min[e] || s < d.max[e] ? m.panEndFriction : 1,
            s = b[e] + t[e] * u;
          return (!m.allowPanToNext && v !== f.currItem.initialZoomLevel) ||
            (Fe
              ? "h" !== Me ||
                "x" !== e ||
                Ee ||
                (r
                  ? (s > d.min[e] &&
                      ((u = m.panEndFriction),
                      d.min[e],
                      (n = d.min[e] - He[e])),
                    (n <= 0 || l < 0) && 1 < F()
                      ? ((o = a), l < 0 && a > gt.x && (o = gt.x))
                      : d.min.x !== d.max.x && (i = s))
                  : (s < d.max[e] &&
                      ((u = m.panEndFriction),
                      d.max[e],
                      (n = He[e] - d.max[e])),
                    (n <= 0 || 0 < l) && 1 < F()
                      ? ((o = a), 0 < l && a < gt.x && (o = gt.x))
                      : d.min.x !== d.max.x && (i = s)))
              : (o = a),
            "x" !== e)
            ? void (y || $e || (v > f.currItem.fitRatio && (b[e] += t[e] * u)))
            : (void 0 !== o && (Je(o, !0), ($e = o !== gt.x)),
              d.min.x !== d.max.x &&
                (void 0 !== i ? (b.x = i) : $e || (b.x += t.x * u)),
              void 0 !== o);
        },
        Ht = function () {
          if (u) {
            var e,
              t,
              n,
              i,
              o,
              s = u.length;
            if (0 !== s)
              if (
                (A(D, u[0]), (O.x = D.x - $.x), (O.y = D.y - $.y), c && 1 < s)
              )
                ($.x = D.x),
                  ($.y = D.y),
                  (!O.x && !O.y && Ct(u[1], pt)) ||
                    (A(pt, u[1]),
                    Ee || ((Ee = !0), x("zoomGestureStarted")),
                    (s = St(D, pt)),
                    (e = Ut(s)) >
                      f.currItem.initialZoomLevel +
                        f.currItem.initialZoomLevel / 15 && (Re = !0),
                    (t = 1),
                    (n = ot()),
                    (i = st()),
                    e < n
                      ? m.pinchToClose &&
                        !Re &&
                        ne <= f.currItem.initialZoomLevel
                        ? (S((o = 1 - (n - e) / (n / 1.2))),
                          x("onPinchClose", o),
                          (Pe = !0))
                        : (e =
                            n - (t = 1 < (t = (n - e) / n) ? 1 : t) * (n / 3))
                      : i < e &&
                        (e = i + (t = 1 < (t = (e - i) / (6 * n)) ? 1 : t) * n),
                    t < 0 && (t = 0),
                    Ft(D, pt, _t),
                    (Be.x += _t.x - xt.x),
                    (Be.y += _t.y - xt.y),
                    A(xt, _t),
                    (b.x = Qe("x", e)),
                    (b.y = Qe("y", e)),
                    (Ce = v < e),
                    (v = e),
                    T());
              else if (
                Me &&
                (Ie &&
                  ((Ie = !1),
                  Math.abs(O.x) >= ht && (O.x -= u[0].x - ft.x),
                  Math.abs(O.y) >= ht && (O.y -= u[0].y - ft.y)),
                ($.x = D.x),
                ($.y = D.y),
                0 !== O.x || 0 !== O.y)
              ) {
                if ("v" === Me && m.closeOnVerticalDrag && !Et())
                  return (
                    (Be.y += O.y),
                    (b.y += O.y),
                    (o = It()),
                    (Se = !0),
                    x("onVerticalDrag", o),
                    S(o),
                    void T()
                  );
                Mt(C(), D.x, D.y),
                  (De = !0),
                  (d = f.currItem.bounds),
                  Bt("x", O) || (Bt("y", O), et(b), T());
              }
          }
        },
        qt = function () {
          var t,
            n,
            i = {
              lastFlickOffset: {},
              lastFlickDist: {},
              lastFlickSpeed: {},
              slowDownRatio: {},
              slowDownRatioReverse: {},
              speedDecelerationRatio: {},
              speedDecelerationRatioAbs: {},
              distanceOffset: {},
              backAnimDestination: {},
              backAnimStarted: {},
              calculateSwipeSpeed: function (e) {
                (n =
                  1 < vt.length
                    ? ((t = C() - ke + 50), vt[vt.length - 2][e])
                    : ((t = C() - we), ft[e])),
                  (i.lastFlickOffset[e] = $[e] - n),
                  (i.lastFlickDist[e] = Math.abs(i.lastFlickOffset[e])),
                  20 < i.lastFlickDist[e]
                    ? (i.lastFlickSpeed[e] = i.lastFlickOffset[e] / t)
                    : (i.lastFlickSpeed[e] = 0),
                  Math.abs(i.lastFlickSpeed[e]) < 0.1 &&
                    (i.lastFlickSpeed[e] = 0),
                  (i.slowDownRatio[e] = 0.95),
                  (i.slowDownRatioReverse[e] = 1 - i.slowDownRatio[e]),
                  (i.speedDecelerationRatio[e] = 1);
              },
              calculateOverBoundsAnimOffset: function (t, e) {
                i.backAnimStarted[t] ||
                  (b[t] > d.min[t]
                    ? (i.backAnimDestination[t] = d.min[t])
                    : b[t] < d.max[t] && (i.backAnimDestination[t] = d.max[t]),
                  void 0 !== i.backAnimDestination[t] &&
                    ((i.slowDownRatio[t] = 0.7),
                    (i.slowDownRatioReverse[t] = 1 - i.slowDownRatio[t]),
                    i.speedDecelerationRatioAbs[t] < 0.05 &&
                      ((i.lastFlickSpeed[t] = 0),
                      (i.backAnimStarted[t] = !0),
                      ct(
                        "bounceZoomPan" + t,
                        b[t],
                        i.backAnimDestination[t],
                        e || 300,
                        p.easing.sine.out,
                        function (e) {
                          (b[t] = e), T();
                        }
                      ))));
              },
              calculateAnimOffset: function (e) {
                i.backAnimStarted[e] ||
                  ((i.speedDecelerationRatio[e] =
                    i.speedDecelerationRatio[e] *
                    (i.slowDownRatio[e] +
                      i.slowDownRatioReverse[e] -
                      (i.slowDownRatioReverse[e] * i.timeDiff) / 10)),
                  (i.speedDecelerationRatioAbs[e] = Math.abs(
                    i.lastFlickSpeed[e] * i.speedDecelerationRatio[e]
                  )),
                  (i.distanceOffset[e] =
                    i.lastFlickSpeed[e] *
                    i.speedDecelerationRatio[e] *
                    i.timeDiff),
                  (b[e] += i.distanceOffset[e]));
              },
              panAnimLoop: function () {
                if (
                  E.zoomPan &&
                  ((E.zoomPan.raf = fe(i.panAnimLoop)),
                  (i.now = C()),
                  (i.timeDiff = i.now - i.lastNow),
                  (i.lastNow = i.now),
                  i.calculateAnimOffset("x"),
                  i.calculateAnimOffset("y"),
                  T(),
                  i.calculateOverBoundsAnimOffset("x"),
                  i.calculateOverBoundsAnimOffset("y"),
                  i.speedDecelerationRatioAbs.x < 0.05 &&
                    i.speedDecelerationRatioAbs.y < 0.05)
                )
                  return (
                    (b.x = Math.round(b.x)),
                    (b.y = Math.round(b.y)),
                    T(),
                    void at("zoomPan")
                  );
              },
            };
          return i;
        },
        zt = function (e) {
          return (
            e.calculateSwipeSpeed("y"),
            (d = f.currItem.bounds),
            (e.backAnimDestination = {}),
            (e.backAnimStarted = {}),
            Math.abs(e.lastFlickSpeed.x) <= 0.05 &&
            Math.abs(e.lastFlickSpeed.y) <= 0.05
              ? ((e.speedDecelerationRatioAbs.x =
                  e.speedDecelerationRatioAbs.y =
                    0),
                e.calculateOverBoundsAnimOffset("x"),
                e.calculateOverBoundsAnimOffset("y"),
                !0)
              : (lt("zoomPan"), (e.lastNow = C()), void e.panAnimLoop())
          );
        },
        Wt = function (e, t) {
          var n, i, o;
          y || (bt = g),
            "swipe" === e &&
              ((e = $.x - ft.x),
              (s = t.lastFlickDist.x < 10),
              dt < e && (s || 20 < t.lastFlickOffset.x)
                ? (i = -1)
                : e < -dt && (s || t.lastFlickOffset.x < -20) && (i = 1)),
            i &&
              ((g += i) < 0
                ? ((g = m.loop ? F() - 1 : 0), (o = !0))
                : g >= F() && ((g = m.loop ? 0 : F() - 1), (o = !0)),
              (o && !m.loop) || ((k += i), (qe -= i), (n = !0)));
          var e = w.x * qe,
            s = Math.abs(e - j.x),
            r =
              n || e > j.x == 0 < t.lastFlickSpeed.x
                ? ((r =
                    0 < Math.abs(t.lastFlickSpeed.x)
                      ? s / Math.abs(t.lastFlickSpeed.x)
                      : 333),
                  (r = Math.min(r, 400)),
                  Math.max(r, 250))
                : 333;
          return (
            bt === g && (n = !1),
            (y = !0),
            x("mainScrollAnimStart"),
            ct("mainScroll", j.x, e, r, p.easing.cubic.out, Je, function () {
              ut(),
                (y = !1),
                (bt = -1),
                (!n && bt === g) || f.updateCurrItem(),
                x("mainScrollAnimComplete");
            }),
            n && f.updateCurrItem(!0),
            n
          );
        },
        Ut = function (e) {
          return (1 / je) * e * ne;
        },
        Vt = function () {
          var e = v,
            t = ot(),
            n = st();
          v < t ? (e = t) : n < v && (e = n);
          var i,
            o = Le;
          return (
            Pe && !Ce && !Re && v < t
              ? f.close()
              : (Pe &&
                  (i = function (e) {
                    S((1 - o) * e + o);
                  }),
                f.zoomTo(e, 0, 200, p.easing.cubic.out, i)),
            !0
          );
        };
      B("Gestures", {
        publicMethods: {
          initGestures: function () {
            function e(e, t, n, i, o) {
              (le = e + t), (ue = e + n), (ce = e + i), (de = o ? e + o : "");
            }
            (pe = a.pointerEvent) && a.touch && (a.touch = !1),
              pe
                ? navigator.pointerEnabled
                  ? e("pointer", "down", "move", "up", "cancel")
                  : e("MSPointer", "Down", "Move", "Up", "Cancel")
                : a.touch
                ? (e("touch", "start", "move", "end", "cancel"), (i = !0))
                : e("mouse", "down", "move", "up"),
              (ee = ue + " " + ce + " " + de),
              (te = le),
              pe &&
                !i &&
                (i =
                  1 < navigator.maxTouchPoints ||
                  1 < navigator.msMaxTouchPoints),
              (f.likelyTouchDevice = i),
              (n[le] = V),
              (n[ue] = Y),
              (n[ce] = Z),
              de && (n[de] = n[ce]),
              a.touch &&
                ((te += " mousedown"),
                (ee += " mousemove mouseup"),
                (n.mousedown = n[le]),
                (n.mousemove = n[ue]),
                (n.mouseup = n[ce])),
              i || (m.allowPanToNext = !1);
          },
        },
      });
      function Yt(e) {
        function t() {
          (e.loading = !1),
            (e.loaded = !0),
            e.loadComplete ? e.loadComplete(e) : (e.img = null),
            (n.onload = n.onerror = null),
            (n = null);
        }
        (e.loading = !0), (e.loaded = !1);
        var n = (e.img = p.createEl("pswp__img", "img"));
        (n.onload = t),
          (n.onerror = function () {
            (e.loadError = !0), t();
          }),
          (n.src = e.src);
      }
      function Zt(e, t) {
        return (
          e.src &&
          e.loadError &&
          e.container &&
          (t && (e.container.innerHTML = ""),
          (e.container.innerHTML = m.errorMsg.replace("%url%", e.src)),
          1)
        );
      }
      function Kt() {
        if (nn.length) {
          for (var e, t = 0; t < nn.length; t++)
            (e = nn[t]).holder.index === e.index &&
              ln(e.index, e.item, e.baseDiv, e.img, !1, e.clearPlaceholder);
          nn = [];
        }
      }
      var Xt,
        Gt,
        Jt,
        Qt,
        en,
        F,
        tn = function (s, e, r, t) {
          function a() {
            at("initialZoom"),
              r
                ? (f.template.removeAttribute("style"),
                  f.bg.removeAttribute("style"))
                : (S(1),
                  e && (e.style.display = "block"),
                  p.addClass(h, "pswp--animated-in"),
                  x("initialZoom" + (r ? "OutEnd" : "InEnd"))),
              t && t(),
              (Qt = !1);
          }
          Xt && clearTimeout(Xt),
            (Jt = Qt = !0),
            s.initialLayout
              ? ((l = s.initialLayout), (s.initialLayout = null))
              : (l = m.getThumbBoundsFn && m.getThumbBoundsFn(g));
          var l,
            u = r ? m.hideAnimationDuration : m.showAnimationDuration;
          if (!u || !l || void 0 === l.x)
            return (
              x("initialZoom" + (r ? "Out" : "In")),
              (v = s.initialZoomLevel),
              A(b, s.initialPosition),
              T(),
              (h.style.opacity = r ? 0 : 1),
              S(1),
              void (u
                ? setTimeout(function () {
                    a();
                  }, u)
                : a())
            );
          var c, d;
          (c = G),
            (d = !f.currItem.src || f.currItem.loadError || m.showHideOpacity),
            s.miniImg && (s.miniImg.style.webkitBackfaceVisibility = "hidden"),
            r ||
              ((v = l.w / s.w),
              (b.x = l.x),
              (b.y = l.y - ve),
              (f[d ? "template" : "bg"].style.opacity = 0.001),
              T()),
            lt("initialZoom"),
            r && !c && p.removeClass(h, "pswp--animated-in"),
            d &&
              (r
                ? p[(c ? "remove" : "add") + "Class"](
                    h,
                    "pswp--animate_opacity"
                  )
                : setTimeout(function () {
                    p.addClass(h, "pswp--animate_opacity");
                  }, 30)),
            (Xt = setTimeout(
              function () {
                var t, n, i, o, e;
                x("initialZoom" + (r ? "Out" : "In")),
                  r
                    ? ((t = l.w / s.w),
                      (n = { x: b.x, y: b.y }),
                      (i = v),
                      (o = Le),
                      (e = function (e) {
                        1 === e
                          ? ((v = t), (b.x = l.x), (b.y = l.y - be))
                          : ((v = (t - i) * e + i),
                            (b.x = (l.x - n.x) * e + n.x),
                            (b.y = (l.y - be - n.y) * e + n.y)),
                          T(),
                          d ? (h.style.opacity = 1 - e) : S(o - e * o);
                      }),
                      c
                        ? ct("initialZoom", 0, 1, u, p.easing.cubic.out, e, a)
                        : (e(1), (Xt = setTimeout(a, u + 20))))
                    : ((v = s.initialZoomLevel),
                      A(b, s.initialPosition),
                      T(),
                      S(1),
                      d ? (h.style.opacity = 1) : S(1),
                      (Xt = setTimeout(a, u + 20)));
              },
              r ? 25 : 90
            ));
        },
        M = {},
        nn = [],
        on = {
          index: 0,
          errorMsg:
            '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
          forceProgressiveLoading: !1,
          preload: [1, 1],
          getNumItemsFn: function () {
            return Gt.length;
          },
        },
        sn = function () {
          return {
            center: { x: 0, y: 0 },
            max: { x: 0, y: 0 },
            min: { x: 0, y: 0 },
          };
        },
        rn = function (e, t, n) {
          var i = e.bounds;
          (i.center.x = Math.round((M.x - t) / 2)),
            (i.center.y = Math.round((M.y - n) / 2) + e.vGap.top),
            (i.max.x = t > M.x ? Math.round(M.x - t) : i.center.x),
            (i.max.y = n > M.y ? Math.round(M.y - n) + e.vGap.top : i.center.y),
            (i.min.x = t > M.x ? 0 : i.center.x),
            (i.min.y = n > M.y ? e.vGap.top : i.center.y);
        },
        an = function (e, t, n) {
          var i, o;
          return e.src && !e.loadError
            ? ((i = !n) &&
                (e.vGap || (e.vGap = { top: 0, bottom: 0 }),
                x("parseVerticalMargin", e)),
              (M.x = t.x),
              (M.y = t.y - e.vGap.top - e.vGap.bottom),
              i &&
                ((t = M.x / e.w),
                (o = M.y / e.h),
                (e.fitRatio = t < o ? t : o),
                "orig" === (t = m.scaleMode)
                  ? (n = 1)
                  : "fit" === t && (n = e.fitRatio),
                (e.initialZoomLevel = n = 1 < n ? 1 : n),
                e.bounds || (e.bounds = sn())),
              n
                ? (rn(e, e.w * n, e.h * n),
                  i &&
                    n === e.initialZoomLevel &&
                    (e.initialPosition = e.bounds.center),
                  e.bounds)
                : void 0)
            : ((e.w = e.h = 0),
              (e.initialZoomLevel = e.fitRatio = 1),
              (e.bounds = sn()),
              (e.initialPosition = e.bounds.center),
              e.bounds);
        },
        ln = function (e, t, n, i, o, s) {
          t.loadError ||
            (i &&
              ((t.imageAppended = !0),
              un(t, i, t === f.currItem && Ye),
              n.appendChild(i),
              s &&
                setTimeout(function () {
                  t &&
                    t.loaded &&
                    t.placeholder &&
                    ((t.placeholder.style.display = "none"),
                    (t.placeholder = null));
                }, 500)));
        },
        un = function (e, t, n) {
          var i;
          e.src &&
            ((t = t || e.container.lastChild),
            (i = n ? e.w : Math.round(e.w * e.fitRatio)),
            (n = n ? e.h : Math.round(e.h * e.fitRatio)),
            e.placeholder &&
              !e.loaded &&
              ((e.placeholder.style.width = i + "px"),
              (e.placeholder.style.height = n + "px")),
            (t.style.width = i + "px"),
            (t.style.height = n + "px"));
        };
      B("Controller", {
        publicMethods: {
          lazyLoadItem: function (e) {
            e = H(e);
            var t = en(e);
            t &&
              ((!t.loaded && !t.loading) || re) &&
              (x("gettingData", e, t), t.src && Yt(t));
          },
          initController: function () {
            p.extend(m, on, !0),
              (f.items = Gt = t),
              (en = f.getItemAt),
              (F = m.getNumItemsFn),
              m.loop,
              F() < 3 && (m.loop = !1),
              s("beforeChange", function (e) {
                for (
                  var t = m.preload,
                    n = null === e || 0 <= e,
                    i = Math.min(t[0], F()),
                    o = Math.min(t[1], F()),
                    s = 1;
                  s <= (n ? o : i);
                  s++
                )
                  f.lazyLoadItem(g + s);
                for (s = 1; s <= (n ? i : o); s++) f.lazyLoadItem(g - s);
              }),
              s("initialLayout", function () {
                f.currItem.initialLayout =
                  m.getThumbBoundsFn && m.getThumbBoundsFn(g);
              }),
              s("mainScrollAnimComplete", Kt),
              s("initialZoomInEnd", Kt),
              s("destroy", function () {
                for (var e, t = 0; t < Gt.length; t++)
                  (e = Gt[t]).container && (e.container = null),
                    e.placeholder && (e.placeholder = null),
                    e.img && (e.img = null),
                    e.preloader && (e.preloader = null),
                    e.loadError && (e.loaded = e.loadError = !1);
                nn = null;
              });
          },
          getItemAt: function (e) {
            return 0 <= e && void 0 !== Gt[e] && Gt[e];
          },
          allowProgressiveImg: function () {
            return (
              m.forceProgressiveLoading ||
              !i ||
              m.mouseUsed ||
              1200 < screen.width
            );
          },
          setContent: function (t, n) {
            m.loop && (n = H(n));
            var e = f.getItemAt(t.index);
            e && (e.container = null);
            var i,
              o,
              s,
              e = f.getItemAt(n);
            e
              ? (x("gettingData", n, e),
                (t.index = n),
                (o = (t.item = e).container = p.createEl("pswp__zoom-wrap")),
                !e.src &&
                  e.html &&
                  (e.html.tagName
                    ? o.appendChild(e.html)
                    : (o.innerHTML = e.html)),
                Zt(e),
                an(e, _),
                !e.src || e.loadError || e.loaded
                  ? e.src &&
                    !e.loadError &&
                    (((i = p.createEl("pswp__img", "img")).style.opacity = 1),
                    (i.src = e.src),
                    un(e, i),
                    ln(n, e, o, i, !0))
                  : ((e.loadComplete = function (e) {
                      if (K) {
                        if (t && t.index === n) {
                          if (Zt(e, !0))
                            return (
                              (e.loadComplete = e.img = null),
                              an(e, _),
                              Xe(e),
                              void (t.index === g && f.updateCurrZoomItem())
                            );
                          e.imageAppended
                            ? !Qt &&
                              e.placeholder &&
                              ((e.placeholder.style.display = "none"),
                              (e.placeholder = null))
                            : a.transform && (y || Qt)
                            ? nn.push({
                                item: e,
                                baseDiv: o,
                                img: e.img,
                                index: n,
                                holder: t,
                                clearPlaceholder: !0,
                              })
                            : ln(n, e, o, e.img, y || Qt, !0);
                        }
                        (e.loadComplete = null),
                          (e.img = null),
                          x("imageLoadComplete", n, e);
                      }
                    }),
                    p.features.transform &&
                      ((s = "pswp__img pswp__img--placeholder"),
                      (s += e.msrc ? "" : " pswp__img--placeholder--blank"),
                      (s = p.createEl(s, e.msrc ? "img" : "")),
                      e.msrc && (s.src = e.msrc),
                      un(e, s),
                      o.appendChild(s),
                      (e.placeholder = s)),
                    e.loading || Yt(e),
                    f.allowProgressiveImg() &&
                      (!Jt && a.transform
                        ? nn.push({
                            item: e,
                            baseDiv: o,
                            img: e.img,
                            index: n,
                            holder: t,
                          })
                        : ln(n, e, o, e.img, !0, !0))),
                Jt || n !== g ? Xe(e) : ((Fe = o.style), tn(e, i || e.img)),
                (t.el.innerHTML = ""),
                t.el.appendChild(o))
              : (t.el.innerHTML = "");
          },
          cleanSlide: function (e) {
            e.img && (e.img.onload = e.img.onerror = null),
              (e.loaded = e.loading = e.img = e.imageAppended = !1);
          },
        },
      });
      function cn(e, t, n) {
        var i = document.createEvent("CustomEvent"),
          t = {
            origEvent: e,
            target: e.target,
            releasePoint: t,
            pointerType: n || "touch",
          };
        i.initCustomEvent("pswpTap", !0, !0, t), e.target.dispatchEvent(i);
      }
      var dn,
        I,
        hn = {};
      B("Tap", {
        publicMethods: {
          initTap: function () {
            s("firstTouchStart", f.onTapStart),
              s("touchRelease", f.onTapRelease),
              s("destroy", function () {
                (hn = {}), (dn = null);
              });
          },
          onTapStart: function (e) {
            1 < e.length && (clearTimeout(dn), (dn = null));
          },
          onTapRelease: function (e, t) {
            var n, i, o;
            !t ||
              De ||
              Ae ||
              rt ||
              ((n = t),
              dn &&
              (clearTimeout(dn),
              (dn = null),
              (i = n),
              (o = hn),
              Math.abs(i.x - o.x) < N && Math.abs(i.y - o.y) < N)
                ? x("doubleTap", n)
                : "mouse" === t.type
                ? cn(e, t, "mouse")
                : "BUTTON" === e.target.tagName.toUpperCase() ||
                  p.hasClass(e.target, "pswp__single-tap")
                ? cn(e, t)
                : (A(hn, n),
                  (dn = setTimeout(function () {
                    cn(e, t), (dn = null);
                  }, 300))));
          },
        },
      }),
        B("DesktopZoom", {
          publicMethods: {
            initDesktopZoom: function () {
              ye ||
                (i
                  ? s("mouseUsed", function () {
                      f.setupDesktopZoom();
                    })
                  : f.setupDesktopZoom(!0));
            },
            setupDesktopZoom: function (e) {
              I = {};
              var t = "wheel mousewheel DOMMouseScroll";
              s("bindEvents", function () {
                p.bind(h, t, f.handleMouseWheel);
              }),
                s("unbindEvents", function () {
                  I && p.unbind(h, t, f.handleMouseWheel);
                }),
                (f.mouseZoomedIn = !1);
              function n() {
                f.mouseZoomedIn &&
                  (p.removeClass(h, "pswp--zoomed-in"), (f.mouseZoomedIn = !1)),
                  v < 1
                    ? p.addClass(h, "pswp--zoom-allowed")
                    : p.removeClass(h, "pswp--zoom-allowed"),
                  o();
              }
              var i,
                o = function () {
                  i && (p.removeClass(h, "pswp--dragging"), (i = !1));
                };
              s("resize", n),
                s("afterChange", n),
                s("pointerDown", function () {
                  f.mouseZoomedIn &&
                    ((i = !0), p.addClass(h, "pswp--dragging"));
                }),
                s("pointerUp", o),
                e || n();
            },
            handleMouseWheel: function (e) {
              if (v <= f.currItem.fitRatio)
                return (
                  m.modal &&
                    (!m.closeOnScroll || rt || l
                      ? e.preventDefault()
                      : he && 2 < Math.abs(e.deltaY) && ((G = !0), f.close())),
                  !0
                );
              if ((e.stopPropagation(), (I.x = 0), "deltaX" in e))
                1 === e.deltaMode
                  ? ((I.x = 18 * e.deltaX), (I.y = 18 * e.deltaY))
                  : ((I.x = e.deltaX), (I.y = e.deltaY));
              else if ("wheelDelta" in e)
                e.wheelDeltaX && (I.x = -0.16 * e.wheelDeltaX),
                  e.wheelDeltaY
                    ? (I.y = -0.16 * e.wheelDeltaY)
                    : (I.y = -0.16 * e.wheelDelta);
              else {
                if (!("detail" in e)) return;
                I.y = e.detail;
              }
              it(v, !0);
              var t = b.x - I.x,
                n = b.y - I.y;
              (m.modal ||
                (t <= d.min.x &&
                  t >= d.max.x &&
                  n <= d.min.y &&
                  n >= d.max.y)) &&
                e.preventDefault(),
                f.panTo(t, n);
            },
            toggleDesktopZoom: function (e) {
              e = e || { x: _.x / 2 + ze.x, y: _.y / 2 + ze.y };
              var t = m.getDoubleTapZoom(!0, f.currItem),
                n = v === t;
              (f.mouseZoomedIn = !n),
                f.zoomTo(n ? f.currItem.initialZoomLevel : t, e, 333),
                p[(n ? "remove" : "add") + "Class"](h, "pswp--zoomed-in");
            },
          },
        });
      function pn() {
        mn && clearTimeout(mn), vn && clearTimeout(vn);
      }
      function fn() {
        var e = Tn(),
          t = {};
        if (e.length < 5) return t;
        var n,
          i = e.split("&");
        for (s = 0; s < i.length; s++)
          !i[s] || (n = i[s].split("=")).length < 2 || (t[n[0]] = n[1]);
        if (m.galleryPIDs) {
          for (var o = t.pid, s = (t.pid = 0); s < Gt.length; s++)
            if (Gt[s].pid === o) {
              t.pid = s;
              break;
            }
        } else t.pid = parseInt(t.pid, 10) - 1;
        return t.pid < 0 && (t.pid = 0), t;
      }
      var mn,
        gn,
        vn,
        yn,
        bn,
        _n,
        o,
        wn,
        kn,
        xn,
        P,
        Cn,
        Sn = { history: !0, galleryUID: 1 },
        Tn = function () {
          return P.hash.substring(1);
        },
        An = function () {
          var e, t;
          vn && clearTimeout(vn),
            rt || l
              ? (vn = setTimeout(An, 500))
              : (yn ? clearTimeout(gn) : (yn = !0),
                (t = g + 1),
                (e = en(g)).hasOwnProperty("pid") && (t = e.pid),
                (e = o + "&gid=" + m.galleryUID + "&pid=" + t),
                wn || (-1 === P.hash.indexOf(e) && (xn = !0)),
                (t = P.href.split("#")[0] + "#" + e),
                Cn
                  ? "#" + e !== window.location.hash &&
                    history[wn ? "replaceState" : "pushState"](
                      "",
                      document.title,
                      t
                    )
                  : wn
                  ? P.replace(t)
                  : (P.hash = e),
                (wn = !0),
                (gn = setTimeout(function () {
                  yn = !1;
                }, 60)));
        };
      B("History", {
        publicMethods: {
          initHistory: function () {
            var e, t;
            p.extend(m, Sn, !0),
              m.history &&
                ((P = window.location),
                (wn = kn = xn = !1),
                (o = Tn()),
                (Cn = "pushState" in history),
                -1 < o.indexOf("gid=") &&
                  (o = (o = o.split("&gid=")[0]).split("?gid=")[0]),
                s("afterChange", f.updateURL),
                s("unbindEvents", function () {
                  p.unbind(window, "hashchange", f.onHashChange);
                }),
                (e = function () {
                  (_n = !0),
                    kn ||
                      (xn
                        ? history.back()
                        : o
                        ? (P.hash = o)
                        : Cn
                        ? history.pushState(
                            "",
                            document.title,
                            P.pathname + P.search
                          )
                        : (P.hash = "")),
                    pn();
                }),
                s("unbindEvents", function () {
                  G && e();
                }),
                s("destroy", function () {
                  _n || e();
                }),
                s("firstUpdate", function () {
                  g = fn().pid;
                }),
                -1 < (t = o.indexOf("pid=")) &&
                  "&" === (o = o.substring(0, t)).slice(-1) &&
                  (o = o.slice(0, -1)),
                setTimeout(function () {
                  K && p.bind(window, "hashchange", f.onHashChange);
                }, 40));
          },
          onHashChange: function () {
            return Tn() === o
              ? ((kn = !0), void f.close())
              : void (yn || ((bn = !0), f.goTo(fn().pid), (bn = !1)));
          },
          updateURL: function () {
            pn(), bn || (wn ? (mn = setTimeout(An, 800)) : An());
          },
        },
      }),
        p.extend(f, R);
    };
  }),
  !(function (e, t) {
    "function" == typeof define && define.amd
      ? define(t)
      : "object" == typeof exports
      ? (module.exports = t())
      : (e.PhotoSwipeUI_Default = t());
  })(this, function () {
    "use strict";
    return function (i, a) {
      function e(e) {
        if (T) return !0;
        (e = e || window.event), S.timeToIdle && S.mouseUsed && !b && l();
        for (
          var t,
            n,
            i = (e.target || e.srcElement).getAttribute("class") || "",
            o = 0;
          o < I.length;
          o++
        )
          (t = I[o]).onTap &&
            -1 < i.indexOf("pswp__" + t.name) &&
            (t.onTap(), (n = !0));
        n &&
          (e.stopPropagation && e.stopPropagation(),
          (T = !0),
          (e = a.features.isOldAndroid ? 600 : 30),
          setTimeout(function () {
            T = !1;
          }, e));
      }
      function n() {
        var e = 1 === S.getNumItemsFn();
        e !== C && (F(p, "ui--one-slide", e), (C = e));
      }
      function r() {
        F(v, "share-modal--hidden", j);
      }
      function o() {
        if (
          ((j = !j)
            ? (a.removeClass(v, "pswp__share-modal--fade-in"),
              setTimeout(function () {
                j && r();
              }, 300))
            : (r(),
              setTimeout(function () {
                j || a.addClass(v, "pswp__share-modal--fade-in");
              }, 30)),
          !j)
        ) {
          for (var e, t, n, i, o = "", s = 0; s < S.shareButtons.length; s++)
            (e = S.shareButtons[s]),
              (t = S.getImageURLForShare(e)),
              (n = S.getPageURLForShare(e)),
              (i = S.getTextForShare(e)),
              (o +=
                '<a href="' +
                e.url
                  .replace("{{url}}", encodeURIComponent(n))
                  .replace("{{image_url}}", encodeURIComponent(t))
                  .replace("{{raw_image_url}}", t)
                  .replace("{{text}}", encodeURIComponent(i)) +
                '" target="_blank" class="pswp__share--' +
                e.id +
                '"' +
                (e.download ? "download" : "") +
                ">" +
                e.label +
                "</a>"),
              S.parseShareButtonOut && (o = S.parseShareButtonOut(e, o));
          (v.children[0].innerHTML = o), (v.children[0].onclick = R);
        }
      }
      function s(e) {
        for (var t = 0; t < S.closeElClasses.length; t++)
          if (a.hasClass(e, "pswp__" + S.closeElClasses[t])) return !0;
      }
      function l() {
        clearTimeout(E), (M = 0), b && D.setIdle(!1);
      }
      function u(e) {
        ((e = (e = e || window.event).relatedTarget || e.toElement) &&
          "HTML" !== e.nodeName) ||
          (clearTimeout(E),
          (E = setTimeout(function () {
            D.setIdle(!0);
          }, S.timeToIdleOutside)));
      }
      function c(e) {
        k !== e && (F(w, "preloader--active", !e), (k = e));
      }
      function d(e) {
        var t,
          n = e.vGap;
        !i.likelyTouchDevice || S.mouseUsed || screen.width > S.fitControlsWidth
          ? ((t = S.barsSize),
            S.captionEl && "auto" === t.bottom
              ? (m ||
                  ((m = a.createEl(
                    "pswp__caption pswp__caption--fake"
                  )).appendChild(a.createEl("pswp__caption__center")),
                  p.insertBefore(m, f),
                  a.addClass(p, "pswp__ui--fit")),
                S.addCaptionHTMLFn(e, m, !0)
                  ? ((e = m.clientHeight), (n.bottom = parseInt(e, 10) || 44))
                  : (n.bottom = t.top))
              : (n.bottom = "auto" === t.bottom ? 0 : t.bottom),
            (n.top = t.top))
          : (n.top = n.bottom = 0);
      }
      function P() {
        function e(e) {
          if (e)
            for (var t = e.length, n = 0; n < t; n++) {
              (o = e[n]), (s = o.className);
              for (var i = 0; i < I.length; i++)
                (r = I[i]),
                  -1 < s.indexOf("pswp__" + r.name) &&
                    (S[r.option]
                      ? (a.removeClass(o, "pswp__element--disabled"),
                        r.onInit && r.onInit(o))
                      : a.addClass(o, "pswp__element--disabled"));
            }
        }
        e(p.children);
        var o,
          s,
          r,
          t = a.getChildByClass(p, "pswp__top-bar");
        t && e(t.children);
      }
      var h,
        p,
        f,
        m,
        t,
        g,
        v,
        y,
        b,
        _,
        w,
        k,
        x,
        C,
        S,
        T,
        A,
        E,
        D = this,
        O = !1,
        $ = !0,
        j = !0,
        L = {
          barsSize: { top: 44, bottom: "auto" },
          closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
          timeToIdle: 4e3,
          timeToIdleOutside: 1e3,
          loadingIndicatorDelay: 1e3,
          addCaptionHTMLFn: function (e, t) {
            return e.title
              ? ((t.children[0].innerHTML = e.title), !0)
              : ((t.children[0].innerHTML = ""), !1);
          },
          closeEl: !0,
          captionEl: !0,
          fullscreenEl: !0,
          zoomEl: !0,
          shareEl: !0,
          counterEl: !0,
          arrowEl: !0,
          preloaderEl: !0,
          tapToClose: !1,
          tapToToggleControls: !0,
          clickToCloseNonZoomable: !0,
          shareButtons: [
            {
              id: "facebook",
              label: "Share on Facebook",
              url: "https://www.facebook.com/sharer/sharer.php?u={{url}}",
            },
            {
              id: "twitter",
              label: "Tweet",
              url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}",
            },
            {
              id: "pinterest",
              label: "Pin it",
              url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}",
            },
            {
              id: "download",
              label: "Download image",
              url: "{{raw_image_url}}",
              download: !0,
            },
          ],
          getImageURLForShare: function () {
            return i.currItem.src || "";
          },
          getPageURLForShare: function () {
            return window.location.href;
          },
          getTextForShare: function () {
            return i.currItem.title || "";
          },
          indexIndicatorSep: " / ",
          fitControlsWidth: 1200,
        },
        F = function (e, t, n) {
          a[(n ? "add" : "remove") + "Class"](e, "pswp__" + t);
        },
        R = function (e) {
          var t = (e = e || window.event).target || e.srcElement;
          return (
            i.shout("shareLinkClick", e, t),
            !(
              !t.href ||
              (!t.hasAttribute("download") &&
                (window.open(
                  t.href,
                  "pswp_share",
                  "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" +
                    (window.screen ? Math.round(screen.width / 2 - 275) : 100)
                ),
                j || o(),
                1))
            )
          );
        },
        M = 0,
        I = [
          {
            name: "caption",
            option: "captionEl",
            onInit: function (e) {
              f = e;
            },
          },
          {
            name: "share-modal",
            option: "shareEl",
            onInit: function (e) {
              v = e;
            },
            onTap: function () {
              o();
            },
          },
          {
            name: "button--share",
            option: "shareEl",
            onInit: function (e) {
              g = e;
            },
            onTap: function () {
              o();
            },
          },
          {
            name: "button--zoom",
            option: "zoomEl",
            onTap: i.toggleDesktopZoom,
          },
          {
            name: "counter",
            option: "counterEl",
            onInit: function (e) {
              t = e;
            },
          },
          { name: "button--close", option: "closeEl", onTap: i.close },
          { name: "button--arrow--left", option: "arrowEl", onTap: i.prev },
          { name: "button--arrow--right", option: "arrowEl", onTap: i.next },
          {
            name: "button--fs",
            option: "fullscreenEl",
            onTap: function () {
              h.isFullscreen() ? h.exit() : h.enter();
            },
          },
          {
            name: "preloader",
            option: "preloaderEl",
            onInit: function (e) {
              w = e;
            },
          },
        ];
      (D.init = function () {
        var t;
        a.extend(i.options, L, !0),
          (S = i.options),
          (p = a.getChildByClass(i.scrollWrap, "pswp__ui")),
          (_ = i.listen)("onVerticalDrag", function (e) {
            $ && e < 0.95
              ? D.hideControls()
              : !$ && 0.95 <= e && D.showControls();
          }),
          _("onPinchClose", function (e) {
            $ && e < 0.9
              ? (D.hideControls(), (t = !0))
              : t && !$ && 0.9 < e && D.showControls();
          }),
          _("zoomGestureEnded", function () {
            (t = !1) && !$ && D.showControls();
          }),
          _("beforeChange", D.update),
          _("doubleTap", function (e) {
            var t = i.currItem.initialZoomLevel;
            i.getZoomLevel() !== t
              ? i.zoomTo(t, e, 333)
              : i.zoomTo(S.getDoubleTapZoom(!1, i.currItem), e, 333);
          }),
          _("preventDragEvent", function (e, t, n) {
            var i = e.target || e.srcElement;
            i &&
              i.getAttribute("class") &&
              -1 < e.type.indexOf("mouse") &&
              (0 < i.getAttribute("class").indexOf("__caption") ||
                /(SMALL|STRONG|EM)/i.test(i.tagName)) &&
              (n.prevent = !1);
          }),
          _("bindEvents", function () {
            a.bind(p, "pswpTap click", e),
              a.bind(i.scrollWrap, "pswpTap", D.onGlobalTap),
              i.likelyTouchDevice ||
                a.bind(i.scrollWrap, "mouseover", D.onMouseOver);
          }),
          _("unbindEvents", function () {
            j || o(),
              A && clearInterval(A),
              a.unbind(document, "mouseout", u),
              a.unbind(document, "mousemove", l),
              a.unbind(p, "pswpTap click", e),
              a.unbind(i.scrollWrap, "pswpTap", D.onGlobalTap),
              a.unbind(i.scrollWrap, "mouseover", D.onMouseOver),
              h &&
                (a.unbind(document, h.eventK, D.updateFullscreen),
                h.isFullscreen() && ((S.hideAnimationDuration = 0), h.exit()),
                (h = null));
          }),
          _("destroy", function () {
            S.captionEl &&
              (m && p.removeChild(m), a.removeClass(f, "pswp__caption--empty")),
              v && (v.children[0].onclick = null),
              a.removeClass(p, "pswp__ui--over-close"),
              a.addClass(p, "pswp__ui--hidden"),
              D.setIdle(!1);
          }),
          S.showAnimationDuration || a.removeClass(p, "pswp__ui--hidden"),
          _("initialZoomIn", function () {
            S.showAnimationDuration && a.removeClass(p, "pswp__ui--hidden");
          }),
          _("initialZoomOut", function () {
            a.addClass(p, "pswp__ui--hidden");
          }),
          _("parseVerticalMargin", d),
          P(),
          S.shareEl && g && v && (j = !0),
          n(),
          S.timeToIdle &&
            _("mouseUsed", function () {
              a.bind(document, "mousemove", l),
                a.bind(document, "mouseout", u),
                (A = setInterval(function () {
                  2 === ++M && D.setIdle(!0);
                }, S.timeToIdle / 2));
            }),
          S.fullscreenEl &&
            !a.features.isOldAndroid &&
            ((h = h || D.getFullscreenAPI())
              ? (a.bind(document, h.eventK, D.updateFullscreen),
                D.updateFullscreen(),
                a.addClass(i.template, "pswp--supports-fs"))
              : a.removeClass(i.template, "pswp--supports-fs")),
          S.preloaderEl &&
            (c(!0),
            _("beforeChange", function () {
              clearTimeout(x),
                (x = setTimeout(function () {
                  i.currItem && i.currItem.loading
                    ? (i.allowProgressiveImg() &&
                        (!i.currItem.img || i.currItem.img.naturalWidth)) ||
                      c(!1)
                    : c(!0);
                }, S.loadingIndicatorDelay));
            }),
            _("imageLoadComplete", function (e, t) {
              i.currItem === t && c(!0);
            }));
      }),
        (D.setIdle = function (e) {
          F(p, "ui--idle", (b = e));
        }),
        (D.update = function () {
          (O =
            !(!$ || !i.currItem) &&
            (D.updateIndexIndicator(),
            S.captionEl &&
              (S.addCaptionHTMLFn(i.currItem, f),
              F(f, "caption--empty", !i.currItem.title)),
            !0)),
            j || o(),
            n();
        }),
        (D.updateFullscreen = function (e) {
          e &&
            setTimeout(function () {
              i.setScrollOffset(0, a.getScrollY());
            }, 50),
            a[(h.isFullscreen() ? "add" : "remove") + "Class"](
              i.template,
              "pswp--fs"
            );
        }),
        (D.updateIndexIndicator = function () {
          S.counterEl &&
            (t.innerHTML =
              i.getCurrentIndex() +
              1 +
              S.indexIndicatorSep +
              S.getNumItemsFn());
        }),
        (D.onGlobalTap = function (e) {
          var t = (e = e || window.event).target || e.srcElement;
          if (!T)
            if (e.detail && "mouse" === e.detail.pointerType)
              s(t)
                ? i.close()
                : a.hasClass(t, "pswp__img") &&
                  (1 === i.getZoomLevel() &&
                  i.getZoomLevel() <= i.currItem.fitRatio
                    ? S.clickToCloseNonZoomable && i.close()
                    : i.toggleDesktopZoom(e.detail.releasePoint));
            else if (
              (S.tapToToggleControls &&
                ($ ? D.hideControls() : D.showControls()),
              S.tapToClose && (a.hasClass(t, "pswp__img") || s(t)))
            )
              return void i.close();
        }),
        (D.onMouseOver = function (e) {
          e = (e = e || window.event).target || e.srcElement;
          F(p, "ui--over-close", s(e));
        }),
        (D.hideControls = function () {
          a.addClass(p, "pswp__ui--hidden"), ($ = !1);
        }),
        (D.showControls = function () {
          ($ = !0), O || D.update(), a.removeClass(p, "pswp__ui--hidden");
        }),
        (D.supportsFullscreen = function () {
          var e = document;
          return !!(
            e.exitFullscreen ||
            e.mozCancelFullScreen ||
            e.webkitExitFullscreen ||
            e.msExitFullscreen
          );
        }),
        (D.getFullscreenAPI = function () {
          var e,
            t = document.documentElement,
            n = "fullscreenchange";
          return (
            t.requestFullscreen
              ? (e = {
                  enterK: "requestFullscreen",
                  exitK: "exitFullscreen",
                  elementK: "fullscreenElement",
                  eventK: n,
                })
              : t.mozRequestFullScreen
              ? (e = {
                  enterK: "mozRequestFullScreen",
                  exitK: "mozCancelFullScreen",
                  elementK: "mozFullScreenElement",
                  eventK: "moz" + n,
                })
              : t.webkitRequestFullscreen
              ? (e = {
                  enterK: "webkitRequestFullscreen",
                  exitK: "webkitExitFullscreen",
                  elementK: "webkitFullscreenElement",
                  eventK: "webkit" + n,
                })
              : t.msRequestFullscreen &&
                (e = {
                  enterK: "msRequestFullscreen",
                  exitK: "msExitFullscreen",
                  elementK: "msFullscreenElement",
                  eventK: "MSFullscreenChange",
                }),
            e &&
              ((e.enter = function () {
                return (
                  (y = S.closeOnScroll),
                  (S.closeOnScroll = !1),
                  "webkitRequestFullscreen" !== this.enterK
                    ? i.template[this.enterK]()
                    : void i.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                );
              }),
              (e.exit = function () {
                return (S.closeOnScroll = y), document[this.exitK]();
              }),
              (e.isFullscreen = function () {
                return document[this.elementK];
              })),
            e
          );
        });
    };
  }),
  !(function (r) {
    "use strict";
    function n() {
      return !1;
    }
    function s(e, t) {
      return (
        (this.settings = t),
        (this.el = e),
        (this.$el = r(e)),
        this._initElements(),
        this
      );
    }
    var e = "kinetic-active";
    window.requestAnimationFrame ||
      (window.requestAnimationFrame =
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (e) {
          window.setTimeout(e, 1e3 / 60);
        }),
      (r.support = r.support || {}),
      r.extend(r.support, { touch: "ontouchend" in document });
    (s.DATA_KEY = "kinetic"),
      (s.DEFAULTS = {
        cursor: "move",
        decelerate: !0,
        triggerHardware: !1,
        threshold: 0,
        y: !0,
        x: !0,
        slowdown: 0.9,
        maxvelocity: 40,
        throttleFPS: 60,
        movingClass: {
          up: "kinetic-moving-up",
          down: "kinetic-moving-down",
          left: "kinetic-moving-left",
          right: "kinetic-moving-right",
        },
        deceleratingClass: {
          up: "kinetic-decelerating-up",
          down: "kinetic-decelerating-down",
          left: "kinetic-decelerating-left",
          right: "kinetic-decelerating-right",
        },
      }),
      (s.prototype.start = function (e) {
        (this.settings = r.extend(this.settings, e)),
          (this.velocity = e.velocity || this.velocity),
          (this.velocityY = e.velocityY || this.velocityY),
          (this.settings.decelerate = !1),
          this._move();
      }),
      (s.prototype.end = function () {
        this.settings.decelerate = !0;
      }),
      (s.prototype.stop = function () {
        (this.velocity = 0),
          (this.velocityY = 0),
          (this.settings.decelerate = !0),
          r.isFunction(this.settings.stopped) &&
            this.settings.stopped.call(this);
      }),
      (s.prototype.detach = function () {
        this._detachListeners(), this.$el.removeClass(e).css("cursor", "");
      }),
      (s.prototype.attach = function () {
        this.$el.hasClass(e) ||
          (this._attachListeners(this.$el),
          this.$el.addClass(e).css("cursor", this.settings.cursor));
      }),
      (s.prototype._initElements = function () {
        this.$el.addClass(e),
          r.extend(this, {
            xpos: null,
            prevXPos: !1,
            ypos: null,
            prevYPos: !1,
            mouseDown: !1,
            throttleTimeout: 1e3 / this.settings.throttleFPS,
            lastMove: null,
            elementFocused: null,
          }),
          (this.velocity = 0),
          (this.velocityY = 0),
          r(document)
            .mouseup(r.proxy(this._resetMouse, this))
            .click(r.proxy(this._resetMouse, this)),
          this._initEvents(),
          this.$el.css("cursor", this.settings.cursor),
          this.settings.triggerHardware &&
            this.$el.css({
              "-webkit-transform": "translate3d(0,0,0)",
              "-webkit-perspective": "1000",
              "-webkit-backface-visibility": "hidden",
            });
      }),
      (s.prototype._initEvents = function () {
        var n = this;
        (this.settings.events = {
          touchStart: function (e) {
            var t;
            n._useTarget(e.target, e) &&
              ((t = e.originalEvent.touches[0]),
              (n.threshold = n._threshold(e.target, e)),
              n._start(t.clientX, t.clientY),
              e.stopPropagation());
          },
          touchMove: function (e) {
            var t;
            n.mouseDown &&
              ((t = e.originalEvent.touches[0]),
              n._inputmove(t.clientX, t.clientY),
              e.preventDefault && e.preventDefault());
          },
          inputDown: function (e) {
            n._useTarget(e.target, e) &&
              ((n.threshold = n._threshold(e.target, e)),
              n._start(e.clientX, e.clientY),
              (n.elementFocused = e.target),
              "IMG" === e.target.nodeName && e.preventDefault(),
              e.stopPropagation());
          },
          inputEnd: function (e) {
            n._useTarget(e.target, e) &&
              (n._end(),
              (n.elementFocused = null),
              e.preventDefault && e.preventDefault());
          },
          inputMove: function (e) {
            n.mouseDown &&
              (n._inputmove(e.clientX, e.clientY),
              e.preventDefault && e.preventDefault());
          },
          scroll: function (e) {
            r.isFunction(n.settings.moved) &&
              n.settings.moved.call(n, n.settings),
              e.preventDefault && e.preventDefault();
          },
          inputClick: function (e) {
            return 0 < Math.abs(n.velocity) ? (e.preventDefault(), !1) : void 0;
          },
          dragStart: function (e) {
            return (!n._useTarget(e.target, e) || !n.elementFocused) && void 0;
          },
        }),
          this._attachListeners(this.$el, this.settings);
      }),
      (s.prototype._inputmove = function (e, t) {
        var n = this.$el;
        if (
          (this.el,
          (!this.lastMove ||
            new Date() >
              new Date(this.lastMove.getTime() + this.throttleTimeout)) &&
            ((this.lastMove = new Date()),
            this.mouseDown && (this.xpos || this.ypos)))
        ) {
          var i = e - this.xpos,
            o = t - this.ypos;
          if (0 < this.threshold) {
            var s = Math.sqrt(i * i + o * o);
            if (this.threshold > s) return;
            this.threshold = 0;
          }
          this.elementFocused &&
            (r(this.elementFocused).blur(),
            (this.elementFocused = null),
            n.focus()),
            (this.settings.decelerate = !1),
            (this.velocity = this.velocityY = 0);
          (s = this.scrollLeft()), (n = this.scrollTop());
          this.scrollLeft(this.settings.x ? s - i : s),
            this.scrollTop(this.settings.y ? n - o : n),
            (this.prevXPos = this.xpos),
            (this.prevYPos = this.ypos),
            (this.xpos = e),
            (this.ypos = t),
            this._calculateVelocities(),
            this._setMoveClasses(this.settings.movingClass),
            r.isFunction(this.settings.moved) &&
              this.settings.moved.call(this, this.settings);
        }
      }),
      (s.prototype._calculateVelocities = function () {
        (this.velocity = this._capVelocity(
          this.prevXPos - this.xpos,
          this.settings.maxvelocity
        )),
          (this.velocityY = this._capVelocity(
            this.prevYPos - this.ypos,
            this.settings.maxvelocity
          ));
      }),
      (s.prototype._end = function () {
        this.xpos &&
          this.prevXPos &&
          !1 === this.settings.decelerate &&
          ((this.settings.decelerate = !0),
          this._calculateVelocities(),
          (this.xpos = this.prevXPos = this.mouseDown = !1),
          this._move());
      }),
      (s.prototype._useTarget = function (e, t) {
        return (
          !r.isFunction(this.settings.filterTarget) ||
          !1 !== this.settings.filterTarget.call(this, e, t)
        );
      }),
      (s.prototype._threshold = function (e, t) {
        return r.isFunction(this.settings.threshold)
          ? this.settings.threshold.call(this, e, t)
          : this.settings.threshold;
      }),
      (s.prototype._start = function (e, t) {
        (this.mouseDown = !0),
          (this.velocity = this.prevXPos = 0),
          (this.velocityY = this.prevYPos = 0),
          (this.xpos = e),
          (this.ypos = t);
      }),
      (s.prototype._resetMouse = function () {
        (this.xpos = !1), (this.ypos = !1), (this.mouseDown = !1);
      }),
      (s.prototype._decelerateVelocity = function (e, t) {
        return 0 === Math.floor(Math.abs(e)) ? 0 : e * t;
      }),
      (s.prototype._capVelocity = function (e, t) {
        var n = e;
        return 0 < e ? t < e && (n = t) : e < 0 - t && (n = 0 - t), n;
      }),
      (s.prototype._setMoveClasses = function (e) {
        var t = this.settings,
          n = this.$el;
        n
          .removeClass(t.movingClass.up)
          .removeClass(t.movingClass.down)
          .removeClass(t.movingClass.left)
          .removeClass(t.movingClass.right)
          .removeClass(t.deceleratingClass.up)
          .removeClass(t.deceleratingClass.down)
          .removeClass(t.deceleratingClass.left)
          .removeClass(t.deceleratingClass.right),
          0 < this.velocity && n.addClass(e.right),
          this.velocity < 0 && n.addClass(e.left),
          0 < this.velocityY && n.addClass(e.down),
          this.velocityY < 0 && n.addClass(e.up);
      }),
      (s.prototype._move = function () {
        this.$el;
        var e = this.el,
          t = this,
          n = t.settings;
        n.x && 0 < e.scrollWidth
          ? (this.scrollLeft(this.scrollLeft() + this.velocity),
            0 < Math.abs(this.velocity) &&
              (this.velocity = n.decelerate
                ? t._decelerateVelocity(this.velocity, n.slowdown)
                : this.velocity))
          : (this.velocity = 0),
          n.y && 0 < e.scrollHeight
            ? (this.scrollTop(this.scrollTop() + this.velocityY),
              0 < Math.abs(this.velocityY) &&
                (this.velocityY = n.decelerate
                  ? t._decelerateVelocity(this.velocityY, n.slowdown)
                  : this.velocityY))
            : (this.velocityY = 0),
          t._setMoveClasses(n.deceleratingClass),
          r.isFunction(n.moved) && n.moved.call(this, n),
          0 < Math.abs(this.velocity) || 0 < Math.abs(this.velocityY)
            ? this.moving ||
              ((this.moving = !0),
              window.requestAnimationFrame(function () {
                (t.moving = !1), t._move();
              }))
            : t.stop();
      }),
      (s.prototype._getScroller = function () {
        var e = this.$el;
        return (e = this.$el.is("body") || this.$el.is("html") ? r(window) : e);
      }),
      (s.prototype.scrollLeft = function (e) {
        var t = this._getScroller();
        return "number" != typeof e
          ? t.scrollLeft()
          : (t.scrollLeft(e), void (this.settings.scrollLeft = e));
      }),
      (s.prototype.scrollTop = function (e) {
        var t = this._getScroller();
        return "number" != typeof e
          ? t.scrollTop()
          : (t.scrollTop(e), void (this.settings.scrollTop = e));
      }),
      (s.prototype._attachListeners = function () {
        var e = this.$el,
          t = this.settings;
        r.support.touch &&
          e
            .bind("touchstart", t.events.touchStart)
            .bind("touchend", t.events.inputEnd)
            .bind("touchmove", t.events.touchMove),
          e
            .mousedown(t.events.inputDown)
            .mouseup(t.events.inputEnd)
            .mousemove(t.events.inputMove),
          e
            .click(t.events.inputClick)
            .scroll(t.events.scroll)
            .bind("selectstart", n)
            .bind("dragstart", t.events.dragStart);
      }),
      (s.prototype._detachListeners = function () {
        var e = this.$el,
          t = this.settings;
        r.support.touch &&
          e
            .unbind("touchstart", t.events.touchStart)
            .unbind("touchend", t.events.inputEnd)
            .unbind("touchmove", t.events.touchMove),
          e
            .unbind("mousedown", t.events.inputDown)
            .unbind("mouseup", t.events.inputEnd)
            .unbind("mousemove", t.events.inputMove),
          e
            .unbind("click", t.events.inputClick)
            .unbind("scroll", t.events.scroll)
            .unbind("selectstart", n)
            .unbind("dragstart", t.events.dragStart);
      }),
      (r.Kinetic = s),
      (r.fn.kinetic = function (i, o) {
        return this.each(function () {
          var e = r(this),
            t = e.data(s.DATA_KEY),
            n = r.extend({}, s.DEFAULTS, e.data(), "object" == typeof i && i);
          t || e.data(s.DATA_KEY, (t = new s(this, n))),
            "string" == typeof i && t[i](o);
        });
      });
  })(window.jQuery || window.Zepto),
  !(function (c) {
    "use strict";
    function i(e, t) {
      var n;
      if (!(this instanceof i)) return (n = new i(e, t)).open(), n;
      (this.id = i.id++),
        this.setup(e, t),
        this.chainCallbacks(i._callbackChain);
    }
    if (void 0 === c)
      return (
        "console" in window &&
        window.console.info("Too much lightness, Featherlight needs jQuery.")
      );
    if (c.fn.jquery.match(/-ajax/))
      return (
        "console" in window &&
        window.console.info(
          "Featherlight needs regular jQuery, not the slim version."
        )
      );
    function o(t) {
      return (r = c.grep(r, function (e) {
        return e !== t && 0 < e.$instance.closest("body").length;
      }));
    }
    function n(e) {
      c.each(i.opened().reverse(), function () {
        return e.isDefaultPrevented() || !1 !== this[l[e.type]](e)
          ? void 0
          : (e.preventDefault(), e.stopPropagation(), !1);
      });
    }
    function s(e) {
      var t;
      e !== i._globalHandlerInstalled &&
        ((i._globalHandlerInstalled = e),
        (t = c
          .map(l, function (e, t) {
            return t + "." + i.prototype.namespace;
          })
          .join(" ")),
        c(window)[e ? "on" : "off"](t, n));
    }
    var r = [],
      a = {
        allow: 1,
        allowfullscreen: 1,
        frameborder: 1,
        height: 1,
        longdesc: 1,
        marginheight: 1,
        marginwidth: 1,
        mozallowfullscreen: 1,
        name: 1,
        referrerpolicy: 1,
        sandbox: 1,
        scrolling: 1,
        src: 1,
        srcdoc: 1,
        style: 1,
        webkitallowfullscreen: 1,
        width: 1,
      },
      l = { keyup: "onKeyUp", resize: "onResize" };
    (i.prototype = {
      constructor: i,
      namespace: "featherlight",
      targetAttr: "data-featherlight",
      variant: null,
      resetCss: !1,
      background: null,
      openTrigger: "click",
      closeTrigger: "click",
      filter: null,
      root: "body",
      openSpeed: 250,
      closeSpeed: 250,
      closeOnClick: "background",
      closeOnEsc: !0,
      closeIcon: "&#10005;",
      loading: "",
      persist: !1,
      otherClose: null,
      beforeOpen: c.noop,
      beforeContent: c.noop,
      beforeClose: c.noop,
      afterOpen: c.noop,
      afterContent: c.noop,
      afterClose: c.noop,
      onKeyUp: c.noop,
      onResize: c.noop,
      type: null,
      contentFilters: ["jquery", "image", "html", "ajax", "iframe", "text"],
      setup: function (e, t) {
        "object" != typeof e ||
          e instanceof c != 0 ||
          t ||
          ((t = e), (e = void 0));
        var n = c.extend(this, t, { target: e }),
          t = n.resetCss ? n.namespace + "-reset" : n.namespace,
          e = c(
            n.background ||
              [
                '<div class="' + t + "-loading " + t + '">',
                '<div class="' + t + '-content">',
                '<button class="' +
                  t +
                  "-close-icon " +
                  n.namespace +
                  '-close" aria-label="Close">',
                n.closeIcon,
                "</button>",
                '<div class="' +
                  n.namespace +
                  '-inner">' +
                  n.loading +
                  "</div>",
                "</div>",
                "</div>",
              ].join("")
          ),
          i =
            "." +
            n.namespace +
            "-close" +
            (n.otherClose ? "," + n.otherClose : "");
        return (
          (n.$instance = e.clone().addClass(n.variant)),
          n.$instance.on(n.closeTrigger + "." + n.namespace, function (e) {
            var t;
            e.isDefaultPrevented() ||
              ((t = c(e.target)),
              (("background" === n.closeOnClick && t.is("." + n.namespace)) ||
                "anywhere" === n.closeOnClick ||
                t.closest(i).length) &&
                (n.close(e), e.preventDefault()));
          }),
          this
        );
      },
      getContent: function () {
        if (!1 !== this.persist && this.$content) return this.$content;
        function e(e) {
          return t.$currentTarget && t.$currentTarget.attr(e);
        }
        var t = this,
          n = this.constructor.contentFilters,
          i = e(t.targetAttr),
          o = t.target || i || "",
          s = n[t.type];
        if (
          (!s && o in n && ((s = n[o]), (o = t.target && i)),
          (o = o || e("href") || ""),
          !s)
        )
          for (var r in n) t[r] && ((s = n[r]), (o = t[r]));
        if (!s) {
          var a = o,
            o = null;
          if (
            (c.each(t.contentFilters, function () {
              return (
                (s = n[this]),
                !(o =
                  !(o = s.test ? s.test(a) : o) &&
                  s.regex &&
                  a.match &&
                  a.match(s.regex)
                    ? a
                    : o)
              );
            }),
            !o)
          )
            return (
              "console" in window &&
                window.console.error(
                  "Featherlight: no content filter found " +
                    (a ? ' for "' + a + '"' : " (no target specified)")
                ),
              !1
            );
        }
        return s.process.call(t, o);
      },
      setContent: function (e) {
        return (
          this.$instance.removeClass(this.namespace + "-loading"),
          this.$instance.toggleClass(
            this.namespace + "-iframe",
            e.is("iframe")
          ),
          this.$instance
            .find("." + this.namespace + "-inner")
            .not(e)
            .slice(1)
            .remove()
            .end()
            .replaceWith(c.contains(this.$instance[0], e[0]) ? "" : e),
          (this.$content = e.addClass(this.namespace + "-inner")),
          this
        );
      },
      open: function (t) {
        var n = this;
        if (
          (n.$instance.hide().appendTo(n.root),
          !((t && t.isDefaultPrevented()) || !1 === n.beforeOpen(t)))
        ) {
          t && t.preventDefault();
          var e = n.getContent();
          if (e)
            return (
              r.push(n),
              s(!0),
              n.$instance.fadeIn(n.openSpeed),
              n.beforeContent(t),
              c
                .when(e)
                .always(function (e) {
                  n.setContent(e), n.afterContent(t);
                })
                .then(n.$instance.promise())
                .done(function () {
                  n.afterOpen(t);
                })
            );
        }
        return n.$instance.detach(), c.Deferred().reject().promise();
      },
      close: function (e) {
        var t = this,
          n = c.Deferred();
        return (
          !1 === t.beforeClose(e)
            ? n.reject()
            : (0 === o(t).length && s(!1),
              t.$instance.fadeOut(t.closeSpeed, function () {
                t.$instance.detach(), t.afterClose(e), n.resolve();
              })),
          n.promise()
        );
      },
      resize: function (e, t) {
        var n;
        e &&
          t &&
          (this.$content.css("width", "").css("height", ""),
          1 <
            (n = Math.max(
              e / (this.$content.parent().width() - 1),
              t / (this.$content.parent().height() - 1)
            )) &&
            ((n = t / Math.floor(t / n)),
            this.$content
              .css("width", e / n + "px")
              .css("height", t / n + "px")));
      },
      chainCallbacks: function (e) {
        for (var t in e) this[t] = c.proxy(e[t], this, c.proxy(this[t], this));
      },
    }),
      c.extend(i, {
        id: 0,
        autoBind: "[data-featherlight]",
        defaults: i.prototype,
        contentFilters: {
          jquery: {
            regex: /^[#.]\w/,
            test: function (e) {
              return e instanceof c && e;
            },
            process: function (e) {
              return !1 !== this.persist ? c(e) : c(e).clone(!0);
            },
          },
          image: {
            regex: /\.(png|jpg|jpeg|gif|tiff?|bmp|svg)(\?\S*)?$/i,
            process: function (e) {
              var t = c.Deferred(),
                n = new Image(),
                i = c(
                  '<img src="' +
                    e +
                    '" alt="" class="' +
                    this.namespace +
                    '-image" />'
                );
              return (
                (n.onload = function () {
                  (i.naturalWidth = n.width),
                    (i.naturalHeight = n.height),
                    t.resolve(i);
                }),
                (n.onerror = function () {
                  t.reject(i);
                }),
                (n.src = e),
                t.promise()
              );
            },
          },
          html: {
            regex: /^\s*<[\w!][^<]*>/,
            process: function (e) {
              return c(e);
            },
          },
          ajax: {
            regex: /./,
            process: function (e) {
              var n = c.Deferred(),
                i = c("<div></div>").load(e, function (e, t) {
                  "error" !== t && n.resolve(i.contents()), n.fail();
                });
              return n.promise();
            },
          },
          iframe: {
            process: function (e) {
              var t = new c.Deferred(),
                n = c("<iframe/>"),
                i = (function (e, t) {
                  var n,
                    i = {},
                    o = new RegExp("^" + t + "([A-Z])(.*)");
                  for (n in e) {
                    var s = n.match(o);
                    s &&
                      (i[
                        (s[1] + s[2].replace(/([A-Z])/g, "-$1")).toLowerCase()
                      ] = e[n]);
                  }
                  return i;
                })(this, "iframe"),
                o = (function (e, t) {
                  var n,
                    i = {};
                  for (n in e) n in t && ((i[n] = e[n]), delete e[n]);
                  return i;
                })(i, a);
              return (
                n
                  .hide()
                  .attr("src", e)
                  .attr(o)
                  .css(i)
                  .on("load", function () {
                    t.resolve(n.show());
                  })
                  .appendTo(
                    this.$instance.find("." + this.namespace + "-content")
                  ),
                t.promise()
              );
            },
          },
          text: {
            process: function (e) {
              return c("<div>", { text: e });
            },
          },
        },
        functionAttributes: [
          "beforeOpen",
          "afterOpen",
          "beforeContent",
          "afterContent",
          "beforeClose",
          "afterClose",
        ],
        readElementConfig: function (e, t) {
          var n = this,
            i = new RegExp("^data-" + t + "-(.*)"),
            o = {};
          return (
            e &&
              e.attributes &&
              c.each(e.attributes, function () {
                var e = this.name.match(i);
                if (e) {
                  var t = this.value,
                    e = c.camelCase(e[1]);
                  if (0 <= c.inArray(e, n.functionAttributes))
                    t = new Function(t);
                  else
                    try {
                      t = JSON.parse(t);
                    } catch (e) {}
                  o[e] = t;
                }
              }),
            o
          );
        },
        extend: function (e, t) {
          function n() {
            this.constructor = e;
          }
          return (
            (n.prototype = this.prototype),
            (e.prototype = new n()),
            (e.__super__ = this.prototype),
            c.extend(e, this, t),
            (e.defaults = e.prototype),
            e
          );
        },
        attach: function (o, s, r) {
          var a = this;
          "object" != typeof s ||
            s instanceof c != 0 ||
            r ||
            ((r = s), (s = void 0));
          function e(e) {
            var t = c(e.currentTarget),
              n = c.extend(
                { $source: o, $currentTarget: t },
                a.readElementConfig(o[0], u.namespace),
                a.readElementConfig(e.currentTarget, u.namespace),
                r
              ),
              i = l || t.data("featherlight-persisted") || new a(s, n);
            "shared" === i.persist
              ? (l = i)
              : !1 !== i.persist && t.data("featherlight-persisted", i),
              n.$currentTarget.blur && n.$currentTarget.blur(),
              i.open(e);
          }
          var l,
            t = (r = c.extend({}, r)).namespace || a.defaults.namespace,
            u = c.extend({}, a.defaults, a.readElementConfig(o[0], t), r);
          return (
            o.on(u.openTrigger + "." + u.namespace, u.filter, e),
            { filter: u.filter, handler: e }
          );
        },
        current: function () {
          var e = this.opened();
          return e[e.length - 1] || null;
        },
        opened: function () {
          var t = this;
          return (
            o(),
            c.grep(r, function (e) {
              return e instanceof t;
            })
          );
        },
        close: function (e) {
          var t = this.current();
          return t ? t.close(e) : void 0;
        },
        _onReady: function () {
          var i,
            o = this;
          o.autoBind &&
            ((i = c(o.autoBind)).each(function () {
              o.attach(c(this));
            }),
            c(document).on("click", o.autoBind, function (e) {
              var t, n;
              e.isDefaultPrevented() ||
                ((t = c(e.currentTarget)),
                i.length !== (i = i.add(t)).length &&
                  (!(n = o.attach(t)).filter ||
                    0 < c(e.target).parentsUntil(t, n.filter).length) &&
                  n.handler(e));
            }));
        },
        _callbackChain: {
          onKeyUp: function (e, t) {
            return 27 === t.keyCode
              ? (this.closeOnEsc && c.featherlight.close(t), !1)
              : e(t);
          },
          beforeOpen: function (e, t) {
            return (
              c(document.documentElement).addClass("with-featherlight"),
              (this._previouslyActive = document.activeElement),
              (this._$previouslyTabbable = c(
                "a, input, select, textarea, iframe, button, iframe, [contentEditable=true]"
              )
                .not("[tabindex]")
                .not(this.$instance.find("button"))),
              (this._$previouslyWithTabIndex =
                c("[tabindex]").not('[tabindex="-1"]')),
              (this._previousWithTabIndices = this._$previouslyWithTabIndex.map(
                function (e, t) {
                  return c(t).attr("tabindex");
                }
              )),
              this._$previouslyWithTabIndex
                .add(this._$previouslyTabbable)
                .attr("tabindex", -1),
              document.activeElement.blur && document.activeElement.blur(),
              e(t)
            );
          },
          afterClose: function (e, t) {
            var e = e(t),
              n = this;
            return (
              this._$previouslyTabbable.removeAttr("tabindex"),
              this._$previouslyWithTabIndex.each(function (e, t) {
                c(t).attr("tabindex", n._previousWithTabIndices[e]);
              }),
              this._previouslyActive.focus(),
              0 === i.opened().length &&
                c(document.documentElement).removeClass("with-featherlight"),
              e
            );
          },
          onResize: function (e, t) {
            return (
              this.resize(
                this.$content.naturalWidth,
                this.$content.naturalHeight
              ),
              e(t)
            );
          },
          afterContent: function (e, t) {
            e = e(t);
            return (
              this.$instance.find("[autofocus]:not([disabled])").focus(),
              this.onResize(t),
              e
            );
          },
        },
      }),
      (c.featherlight = i),
      (c.fn.featherlight = function (e, t) {
        return i.attach(this, e, t), this;
      }),
      c(document).ready(function () {
        i._onReady();
      });
  })(jQuery),
  !(function (e, t) {
    "function" == typeof define && define.amd
      ? define([], t)
      : "object" == typeof module && "undefined" != typeof exports
      ? (module.exports = t())
      : (e.Papa = t());
  })(this, function o() {
    "use strict";
    var u,
      s =
        "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : void 0 !== s
          ? s
          : {},
      r = !s.document && !!s.postMessage,
      a = s.IS_PAPA_WORKER || !1,
      l = {},
      c = 0,
      _ = {
        parse: function (e, t) {
          var n = (t = t || {}).dynamicTyping || !1;
          if (
            (V(n) && ((t.dynamicTypingFunction = n), (n = {})),
            (t.dynamicTyping = n),
            (t.transform = !!V(t.transform) && t.transform),
            t.worker && _.WORKERS_SUPPORTED)
          )
            return (
              ((n = (function () {
                if (!_.WORKERS_SUPPORTED) return !1;
                (e = s.URL || s.webkitURL || null), (t = o.toString());
                var e =
                    _.BLOB_URL ||
                    (_.BLOB_URL = e.createObjectURL(
                      new Blob(
                        [
                          "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                          "(",
                          t,
                          ")();",
                        ],
                        { type: "text/javascript" }
                      )
                    )),
                  t = new s.Worker(e);
                return (t.onmessage = g), (t.id = c++), (l[t.id] = t);
              })()).userStep = t.step),
              (n.userChunk = t.chunk),
              (n.userComplete = t.complete),
              (n.userError = t.error),
              (t.step = V(t.step)),
              (t.chunk = V(t.chunk)),
              (t.complete = V(t.complete)),
              (t.error = V(t.error)),
              delete t.worker,
              void n.postMessage({ input: e, config: t, workerId: n.id })
            );
          var i,
            n = null;
          return (
            _.NODE_STREAM_INPUT,
            "string" == typeof e
              ? ((e = 65279 === (i = e).charCodeAt(0) ? i.slice(1) : i),
                (n = new (t.download ? h : f)(t)))
              : !0 === e.readable && V(e.read) && V(e.on)
              ? (n = new m(t))
              : ((s.File && e instanceof File) || e instanceof Object) &&
                (n = new p(t)),
            n.stream(e)
          );
        },
        unparse: function (e, t) {
          var o = !1,
            g = !0,
            v = ",",
            y = "\r\n",
            s = '"',
            r = s + s,
            n = !1,
            i = null,
            a = !1;
          if ("object" == typeof t) {
            if (
              ("string" != typeof t.delimiter ||
                _.BAD_DELIMITERS.filter(function (e) {
                  return -1 !== t.delimiter.indexOf(e);
                }).length ||
                (v = t.delimiter),
              ("boolean" != typeof t.quotes &&
                "function" != typeof t.quotes &&
                !Array.isArray(t.quotes)) ||
                (o = t.quotes),
              ("boolean" != typeof t.skipEmptyLines &&
                "string" != typeof t.skipEmptyLines) ||
                (n = t.skipEmptyLines),
              "string" == typeof t.newline && (y = t.newline),
              "string" == typeof t.quoteChar && (s = t.quoteChar),
              "boolean" == typeof t.header && (g = t.header),
              Array.isArray(t.columns))
            ) {
              if (0 === t.columns.length)
                throw new Error("Option columns is empty");
              i = t.columns;
            }
            void 0 !== t.escapeChar && (r = t.escapeChar + s),
              ("boolean" == typeof t.escapeFormulae ||
                t.escapeFormulae instanceof RegExp) &&
                (a =
                  t.escapeFormulae instanceof RegExp
                    ? t.escapeFormulae
                    : /^[=+\-@\t\r].*$/);
          }
          var l = new RegExp(U(s), "g");
          if (("string" == typeof e && (e = JSON.parse(e)), Array.isArray(e))) {
            if (!e.length || Array.isArray(e[0])) return u(null, e, n);
            if ("object" == typeof e[0]) return u(i || Object.keys(e[0]), e, n);
          } else if ("object" == typeof e)
            return (
              "string" == typeof e.data && (e.data = JSON.parse(e.data)),
              Array.isArray(e.data) &&
                (e.fields || (e.fields = (e.meta && e.meta.fields) || i),
                e.fields ||
                  (e.fields = Array.isArray(e.data[0])
                    ? e.fields
                    : "object" == typeof e.data[0]
                    ? Object.keys(e.data[0])
                    : []),
                Array.isArray(e.data[0]) ||
                  "object" == typeof e.data[0] ||
                  (e.data = [e.data])),
              u(e.fields || [], e.data || [], n)
            );
          throw new Error("Unable to serialize unrecognized input");
          function u(e, t, n) {
            var i = "",
              o =
                ("string" == typeof e && (e = JSON.parse(e)),
                "string" == typeof t && (t = JSON.parse(t)),
                Array.isArray(e) && 0 < e.length),
              s = !Array.isArray(t[0]);
            if (o && g) {
              for (var r = 0; r < e.length; r++)
                0 < r && (i += v), (i += b(e[r], r));
              0 < t.length && (i += y);
            }
            for (var a = 0; a < t.length; a++) {
              var l = (o ? e : t[a]).length,
                u = !1,
                c = o ? 0 === Object.keys(t[a]).length : 0 === t[a].length;
              if (
                (n &&
                  !o &&
                  (u =
                    "greedy" === n
                      ? "" === t[a].join("").trim()
                      : 1 === t[a].length && 0 === t[a][0].length),
                "greedy" === n && o)
              ) {
                for (var d = [], h = 0; h < l; h++) {
                  var p = s ? e[h] : h;
                  d.push(t[a][p]);
                }
                u = "" === d.join("").trim();
              }
              if (!u) {
                for (var f = 0; f < l; f++) {
                  0 < f && !c && (i += v);
                  var m = o && s ? e[f] : f;
                  i += b(t[a][m], f);
                }
                a < t.length - 1 && (!n || (0 < l && !c)) && (i += y);
              }
            }
            return i;
          }
          function b(e, t) {
            if (null == e) return "";
            if (e.constructor === Date) return JSON.stringify(e).slice(1, 25);
            var n = !1,
              i =
                (a &&
                  "string" == typeof e &&
                  a.test(e) &&
                  ((e = "'" + e), (n = !0)),
                e.toString().replace(l, r));
            return (n =
              n ||
              !0 === o ||
              ("function" == typeof o && o(e, t)) ||
              (Array.isArray(o) && o[t]) ||
              (function (e, t) {
                for (var n = 0; n < t.length; n++)
                  if (-1 < e.indexOf(t[n])) return !0;
                return !1;
              })(i, _.BAD_DELIMITERS) ||
              -1 < i.indexOf(v) ||
              " " === i.charAt(0) ||
              " " === i.charAt(i.length - 1))
              ? s + i + s
              : i;
          }
        },
      };
    function d(e) {
      (this._handle = null),
        (this._finished = !1),
        (this._completed = !1),
        (this._halted = !1),
        (this._input = null),
        (this._baseIndex = 0),
        (this._partialLine = ""),
        (this._rowCount = 0),
        (this._start = 0),
        (this._nextChunk = null),
        (this.isFirstChunk = !0),
        (this._completeResults = { data: [], errors: [], meta: {} }),
        function (e) {
          var t = k(e);
          (t.chunkSize = parseInt(t.chunkSize)),
            e.step || e.chunk || (t.chunkSize = null),
            (this._handle = new n(t)),
            ((this._handle.streamer = this)._config = t);
        }.call(this, e),
        (this.parseChunk = function (e, t) {
          this.isFirstChunk &&
            V(this._config.beforeFirstChunk) &&
            void 0 !== (n = this._config.beforeFirstChunk(e)) &&
            (e = n),
            (this.isFirstChunk = !1),
            (this._halted = !1);
          var n = this._partialLine + e,
            e =
              ((this._partialLine = ""),
              this._handle.parse(n, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            var i = e.meta.cursor,
              n =
                (this._finished ||
                  ((this._partialLine = n.substring(i - this._baseIndex)),
                  (this._baseIndex = i)),
                e && e.data && (this._rowCount += e.data.length),
                this._finished ||
                  (this._config.preview &&
                    this._rowCount >= this._config.preview));
            if (a)
              s.postMessage({ results: e, workerId: _.WORKER_ID, finished: n });
            else if (V(this._config.chunk) && !t) {
              if (
                (this._config.chunk(e, this._handle),
                this._handle.paused() || this._handle.aborted())
              )
                return void (this._halted = !0);
              this._completeResults = e = void 0;
            }
            return (
              this._config.step ||
                this._config.chunk ||
                ((this._completeResults.data =
                  this._completeResults.data.concat(e.data)),
                (this._completeResults.errors =
                  this._completeResults.errors.concat(e.errors)),
                (this._completeResults.meta = e.meta)),
              this._completed ||
                !n ||
                !V(this._config.complete) ||
                (e && e.meta.aborted) ||
                (this._config.complete(this._completeResults, this._input),
                (this._completed = !0)),
              n || (e && e.meta.paused) || this._nextChunk(),
              e
            );
          }
          this._halted = !0;
        }),
        (this._sendError = function (e) {
          V(this._config.error)
            ? this._config.error(e)
            : a &&
              this._config.error &&
              s.postMessage({ workerId: _.WORKER_ID, error: e, finished: !1 });
        });
    }
    function h(e) {
      var i;
      (e = e || {}).chunkSize || (e.chunkSize = _.RemoteChunkSize),
        d.call(this, e),
        (this._nextChunk = r
          ? function () {
              this._readChunk(), this._chunkLoaded();
            }
          : function () {
              this._readChunk();
            }),
        (this.stream = function (e) {
          (this._input = e), this._nextChunk();
        }),
        (this._readChunk = function () {
          if (this._finished) this._chunkLoaded();
          else {
            if (
              ((i = new XMLHttpRequest()),
              this._config.withCredentials &&
                (i.withCredentials = this._config.withCredentials),
              r ||
                ((i.onload = b(this._chunkLoaded, this)),
                (i.onerror = b(this._chunkError, this))),
              i.open(
                this._config.downloadRequestBody ? "POST" : "GET",
                this._input,
                !r
              ),
              this._config.downloadRequestHeaders)
            ) {
              var e,
                t = this._config.downloadRequestHeaders;
              for (e in t) i.setRequestHeader(e, t[e]);
            }
            var n;
            this._config.chunkSize &&
              ((n = this._start + this._config.chunkSize - 1),
              i.setRequestHeader("Range", "bytes=" + this._start + "-" + n));
            try {
              i.send(this._config.downloadRequestBody);
            } catch (t) {
              this._chunkError(t.message);
            }
            r && 0 === i.status && this._chunkError();
          }
        }),
        (this._chunkLoaded = function () {
          var e;
          4 === i.readyState &&
            (i.status < 200 || 400 <= i.status
              ? this._chunkError()
              : ((this._start +=
                  this._config.chunkSize || i.responseText.length),
                (this._finished =
                  !this._config.chunkSize ||
                  this._start >=
                    (null === (e = i.getResponseHeader("Content-Range"))
                      ? -1
                      : parseInt(e.substring(e.lastIndexOf("/") + 1)))),
                this.parseChunk(i.responseText)));
        }),
        (this._chunkError = function (e) {
          e = i.statusText || e;
          this._sendError(new Error(e));
        });
    }
    function p(e) {
      (e = e || {}).chunkSize || (e.chunkSize = _.LocalChunkSize),
        d.call(this, e);
      var n,
        i,
        o = "undefined" != typeof FileReader;
      (this.stream = function (e) {
        (this._input = e),
          (i = e.slice || e.webkitSlice || e.mozSlice),
          o
            ? (((n = new FileReader()).onload = b(this._chunkLoaded, this)),
              (n.onerror = b(this._chunkError, this)))
            : (n = new FileReaderSync()),
          this._nextChunk();
      }),
        (this._nextChunk = function () {
          this._finished ||
            (this._config.preview &&
              !(this._rowCount < this._config.preview)) ||
            this._readChunk();
        }),
        (this._readChunk = function () {
          var e = this._input,
            t =
              (this._config.chunkSize &&
                ((t = Math.min(
                  this._start + this._config.chunkSize,
                  this._input.size
                )),
                (e = i.call(e, this._start, t))),
              n.readAsText(e, this._config.encoding));
          o || this._chunkLoaded({ target: { result: t } });
        }),
        (this._chunkLoaded = function (e) {
          (this._start += this._config.chunkSize),
            (this._finished =
              !this._config.chunkSize || this._start >= this._input.size),
            this.parseChunk(e.target.result);
        }),
        (this._chunkError = function () {
          this._sendError(n.error);
        });
    }
    function f(e) {
      var n;
      d.call(this, (e = e || {})),
        (this.stream = function (e) {
          return (n = e), this._nextChunk();
        }),
        (this._nextChunk = function () {
          var e, t;
          if (!this._finished)
            return (
              (t = this._config.chunkSize),
              (n = t
                ? ((e = n.substring(0, t)), n.substring(t))
                : ((e = n), "")),
              (this._finished = !n),
              this.parseChunk(e)
            );
        });
    }
    function m(e) {
      d.call(this, (e = e || {}));
      var t = [],
        n = !0,
        i = !1;
      (this.pause = function () {
        d.prototype.pause.apply(this, arguments), this._input.pause();
      }),
        (this.resume = function () {
          d.prototype.resume.apply(this, arguments), this._input.resume();
        }),
        (this.stream = function (e) {
          (this._input = e),
            this._input.on("data", this._streamData),
            this._input.on("end", this._streamEnd),
            this._input.on("error", this._streamError);
        }),
        (this._checkIsFinished = function () {
          i && 1 === t.length && (this._finished = !0);
        }),
        (this._nextChunk = function () {
          this._checkIsFinished(),
            t.length ? this.parseChunk(t.shift()) : (n = !0);
        }),
        (this._streamData = b(function (e) {
          try {
            t.push(
              "string" == typeof e ? e : e.toString(this._config.encoding)
            ),
              n &&
                ((n = !1), this._checkIsFinished(), this.parseChunk(t.shift()));
          } catch (e) {
            this._streamError(e);
          }
        }, this)),
        (this._streamError = b(function (e) {
          this._streamCleanUp(), this._sendError(e);
        }, this)),
        (this._streamEnd = b(function () {
          this._streamCleanUp(), (i = !0), this._streamData("");
        }, this)),
        (this._streamCleanUp = b(function () {
          this._input.removeListener("data", this._streamData),
            this._input.removeListener("end", this._streamEnd),
            this._input.removeListener("error", this._streamError);
        }, this));
    }
    function n(v) {
      var o,
        s,
        r,
        t,
        l = Math.pow(2, 53),
        u = -l,
        c = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
        d =
          /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
        n = this,
        i = 0,
        h = 0,
        a = !1,
        e = !1,
        p = [],
        f = { data: [], errors: [], meta: {} };
      function y(e) {
        return "greedy" === v.skipEmptyLines
          ? "" === e.join("").trim()
          : 1 === e.length && 0 === e[0].length;
      }
      function m() {
        if (
          (f &&
            r &&
            (b(
              "Delimiter",
              "UndetectableDelimiter",
              "Unable to auto-detect delimiting character; defaulted to '" +
                _.DefaultDelimiter +
                "'"
            ),
            (r = !1)),
          v.skipEmptyLines &&
            (f.data = f.data.filter(function (e) {
              return !y(e);
            })),
          g())
        ) {
          if (f)
            if (Array.isArray(f.data[0])) {
              for (var e = 0; g() && e < f.data.length; e++)
                f.data[e].forEach(t);
              f.data.splice(0, 1);
            } else f.data.forEach(t);
          function t(e, t) {
            V(v.transformHeader) && (e = v.transformHeader(e, t)), p.push(e);
          }
        }
        function n(e, t) {
          for (var n, i, o = v.header ? {} : [], s = 0; s < e.length; s++) {
            var r = s,
              a = e[s];
            v.header && (r = s >= p.length ? "__parsed_extra" : p[s]),
              v.transform && (a = v.transform(a, r)),
              (i = a),
              (n = n = r),
              v.dynamicTypingFunction &&
                void 0 === v.dynamicTyping[n] &&
                (v.dynamicTyping[n] = v.dynamicTypingFunction(n)),
              (a =
                !0 === (v.dynamicTyping[n] || v.dynamicTyping)
                  ? "true" === i ||
                    "TRUE" === i ||
                    ("false" !== i &&
                      "FALSE" !== i &&
                      ((function (e) {
                        if (c.test(e)) {
                          e = parseFloat(e);
                          if (u < e && e < l) return 1;
                        }
                      })(i)
                        ? parseFloat(i)
                        : d.test(i)
                        ? new Date(i)
                        : "" === i
                        ? null
                        : i))
                  : i),
              "__parsed_extra" === r
                ? ((o[r] = o[r] || []), o[r].push(a))
                : (o[r] = a);
          }
          return (
            v.header &&
              (s > p.length
                ? b(
                    "FieldMismatch",
                    "TooManyFields",
                    "Too many fields: expected " +
                      p.length +
                      " fields but parsed " +
                      s,
                    h + t
                  )
                : s < p.length &&
                  b(
                    "FieldMismatch",
                    "TooFewFields",
                    "Too few fields: expected " +
                      p.length +
                      " fields but parsed " +
                      s,
                    h + t
                  )),
            o
          );
        }
        var i;
        f &&
          (v.header || v.dynamicTyping || v.transform) &&
          ((i = 1),
          !f.data.length || Array.isArray(f.data[0])
            ? ((f.data = f.data.map(n)), (i = f.data.length))
            : (f.data = n(f.data, 0)),
          v.header && f.meta && (f.meta.fields = p),
          (h += i));
      }
      function g() {
        return v.header && 0 === p.length;
      }
      function b(e, t, n, i) {
        e = { type: e, code: t, message: n };
        void 0 !== i && (e.row = i), f.errors.push(e);
      }
      V(v.step) &&
        ((t = v.step),
        (v.step = function (e) {
          (f = e),
            g()
              ? m()
              : (m(),
                0 !== f.data.length &&
                  ((i += e.data.length),
                  v.preview && i > v.preview
                    ? s.abort()
                    : ((f.data = f.data[0]), t(f, n))));
        })),
        (this.parse = function (e, t, n) {
          var i = v.quoteChar || '"',
            i =
              (v.newline ||
                (v.newline = (function (e, t) {
                  e = e.substring(0, 1048576);
                  var t = new RegExp(U(t) + "([^]*?)" + U(t), "gm"),
                    n = (e = e.replace(t, "")).split("\r"),
                    t = e.split("\n"),
                    e = 1 < t.length && t[0].length < n[0].length;
                  if (1 === n.length || e) return "\n";
                  for (var i = 0, o = 0; o < n.length; o++)
                    "\n" === n[o][0] && i++;
                  return i >= n.length / 2 ? "\r\n" : "\r";
                })(e, i)),
              (r = !1),
              v.delimiter
                ? V(v.delimiter) &&
                  ((v.delimiter = v.delimiter(e)),
                  (f.meta.delimiter = v.delimiter))
                : ((i = (function (e, t, n, i, o) {
                    var s, r, a;
                    o = v.delimitersToGuess || [
                      ",",
                      "\t",
                      "|",
                      ";",
                      _.RECORD_SEP,
                      _.UNIT_SEP,
                    ];
                    for (var l = 0; l < o.length; l++) {
                      for (
                        var u,
                          c = o[l],
                          d = 0,
                          h = 0,
                          p = 0,
                          f = void 0,
                          m = new w({
                            comments: i,
                            delimiter: c,
                            newline: t,
                            preview: 10,
                          }).parse(e),
                          g = 0;
                        g < m.data.length;
                        g++
                      )
                        n && y(m.data[g])
                          ? p++
                          : ((h += u = m.data[g].length),
                            void 0 !== f
                              ? 0 < u && ((d += Math.abs(u - f)), (f = u))
                              : (f = u));
                      0 < m.data.length && (h /= m.data.length - p),
                        (void 0 === r || d <= r) &&
                          (void 0 === a || a < h) &&
                          1.99 < h &&
                          ((r = d), (s = c), (a = h));
                    }
                    return {
                      successful: !!(v.delimiter = s),
                      bestDelimiter: s,
                    };
                  })(e, v.newline, v.skipEmptyLines, v.comments)).successful
                    ? (v.delimiter = i.bestDelimiter)
                    : ((r = !0), (v.delimiter = _.DefaultDelimiter)),
                  (f.meta.delimiter = v.delimiter)),
              k(v));
          return (
            v.preview && v.header && i.preview++,
            (o = e),
            (s = new w(i)),
            (f = s.parse(o, t, n)),
            m(),
            a ? { meta: { paused: !0 } } : f || { meta: { paused: !1 } }
          );
        }),
        (this.paused = function () {
          return a;
        }),
        (this.pause = function () {
          (a = !0),
            s.abort(),
            (o = V(v.chunk) ? "" : o.substring(s.getCharIndex()));
        }),
        (this.resume = function () {
          n.streamer._halted
            ? ((a = !1), n.streamer.parseChunk(o, !0))
            : setTimeout(n.resume, 3);
        }),
        (this.aborted = function () {
          return e;
        }),
        (this.abort = function () {
          (e = !0),
            s.abort(),
            (f.meta.aborted = !0),
            V(v.complete) && v.complete(f),
            (o = "");
        });
    }
    function U(e) {
      return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function w(M) {
      var I,
        P = (M = M || {}).delimiter,
        L = M.newline,
        R = M.comments,
        N = M.step,
        B = M.preview,
        H = M.fastMode,
        q = (I =
          void 0 === M.quoteChar || null === M.quoteChar ? '"' : M.quoteChar);
      if (
        (void 0 !== M.escapeChar && (q = M.escapeChar),
        ("string" != typeof P || -1 < _.BAD_DELIMITERS.indexOf(P)) && (P = ","),
        R === P)
      )
        throw new Error("Comment character same as delimiter");
      !0 === R
        ? (R = "#")
        : ("string" != typeof R || -1 < _.BAD_DELIMITERS.indexOf(R)) &&
          (R = !1),
        "\n" !== L && "\r" !== L && "\r\n" !== L && (L = "\n");
      var z = 0,
        W = !1;
      (this.parse = function (n, t, i) {
        if ("string" != typeof n) throw new Error("Input must be a string");
        var o = n.length,
          e = P.length,
          s = L.length,
          r = R.length,
          a = V(N),
          l = [],
          u = [],
          c = [],
          d = (z = 0);
        if (!n) return j();
        if (M.header && !t) {
          var h,
            p,
            f = n.split(L)[0].split(P),
            m = [],
            g = {},
            v = !1;
          for (h in f) {
            var y = f[h],
              b = (y = V(M.transformHeader) ? M.transformHeader(y, h) : y),
              _ = g[y] || 0;
            for (
              0 < _ && ((v = !0), (b = y + "_" + _)), g[y] = _ + 1;
              m.includes(b);

            )
              b = b + "_" + _;
            m.push(b);
          }
          v && (((p = n.split(L))[0] = m.join(P)), (n = p.join(L)));
        }
        if (H || (!1 !== H && -1 === n.indexOf(I))) {
          for (var w = n.split(L), k = 0; k < w.length; k++) {
            if (((c = w[k]), (z += c.length), k !== w.length - 1))
              z += L.length;
            else if (i) return j();
            if (!R || c.substring(0, r) !== R) {
              if (a) {
                if (((l = []), E(c.split(P)), F(), W)) return j();
              } else E(c.split(P));
              if (B && B <= k) return (l = l.slice(0, B)), j(!0);
            }
          }
          return j();
        }
        for (
          var x = n.indexOf(P, z),
            C = n.indexOf(L, z),
            S = new RegExp(U(q) + U(I), "g"),
            T = n.indexOf(I, z);
          ;

        )
          if (n[z] !== I)
            if (R && 0 === c.length && n.substring(z, z + r) === R) {
              if (-1 === C) return j();
              (z = C + s), (C = n.indexOf(L, z)), (x = n.indexOf(P, z));
            } else if (-1 !== x && (x < C || -1 === C))
              c.push(n.substring(z, x)), (z = x + e), (x = n.indexOf(P, z));
            else {
              if (-1 === C) break;
              if ((c.push(n.substring(z, C)), $(C + s), a && (F(), W)))
                return j();
              if (B && l.length >= B) return j(!0);
            }
          else
            for (T = z, z++; ; ) {
              if (-1 === (T = n.indexOf(I, T + 1)))
                return (
                  i ||
                    u.push({
                      type: "Quotes",
                      code: "MissingQuotes",
                      message: "Quoted field unterminated",
                      row: l.length,
                      index: z,
                    }),
                  O()
                );
              if (T === o - 1) return O(n.substring(z, T).replace(S, I));
              if (I !== q || n[T + 1] !== q) {
                if (I === q || 0 === T || n[T - 1] !== q) {
                  -1 !== x && x < T + 1 && (x = n.indexOf(P, T + 1));
                  var A = D(
                    -1 === (C = -1 !== C && C < T + 1 ? n.indexOf(L, T + 1) : C)
                      ? x
                      : Math.min(x, C)
                  );
                  if (n.substr(T + 1 + A, e) === P) {
                    c.push(n.substring(z, T).replace(S, I)),
                      n[(z = T + 1 + A + e)] !== I && (T = n.indexOf(I, z)),
                      (x = n.indexOf(P, z)),
                      (C = n.indexOf(L, z));
                    break;
                  }
                  A = D(C);
                  if (n.substring(T + 1 + A, T + 1 + A + s) === L) {
                    if (
                      (c.push(n.substring(z, T).replace(S, I)),
                      $(T + 1 + A + s),
                      (x = n.indexOf(P, z)),
                      (T = n.indexOf(I, z)),
                      a && (F(), W))
                    )
                      return j();
                    if (B && l.length >= B) return j(!0);
                    break;
                  }
                  u.push({
                    type: "Quotes",
                    code: "InvalidQuotes",
                    message: "Trailing quote on quoted field is malformed",
                    row: l.length,
                    index: z,
                  }),
                    T++;
                }
              } else T++;
            }
        return O();
        function E(e) {
          l.push(e), (d = z);
        }
        function D(e) {
          var t = 0;
          return (t =
            -1 !== e && (e = n.substring(T + 1, e)) && "" === e.trim()
              ? e.length
              : t);
        }
        function O(e) {
          return (
            i ||
              (void 0 === e && (e = n.substring(z)),
              c.push(e),
              (z = o),
              E(c),
              a && F()),
            j()
          );
        }
        function $(e) {
          (z = e), E(c), (c = []), (C = n.indexOf(L, z));
        }
        function j(e) {
          return {
            data: l,
            errors: u,
            meta: {
              delimiter: P,
              linebreak: L,
              aborted: W,
              truncated: !!e,
              cursor: d + (t || 0),
            },
          };
        }
        function F() {
          N(j()), (l = []), (u = []);
        }
      }),
        (this.abort = function () {
          W = !0;
        }),
        (this.getCharIndex = function () {
          return z;
        });
    }
    function g(e) {
      var t = e.data,
        n = l[t.workerId],
        i = !1;
      if (t.error) n.userError(t.error, t.file);
      else if (t.results && t.results.data) {
        var o = {
          abort: function () {
            (i = !0),
              v(t.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          },
          pause: y,
          resume: y,
        };
        if (V(n.userStep)) {
          for (
            var s = 0;
            s < t.results.data.length &&
            (n.userStep(
              {
                data: t.results.data[s],
                errors: t.results.errors,
                meta: t.results.meta,
              },
              o
            ),
            !i);
            s++
          );
          delete t.results;
        } else
          V(n.userChunk) &&
            (n.userChunk(t.results, o, t.file), delete t.results);
      }
      t.finished && !i && v(t.workerId, t.results);
    }
    function v(e, t) {
      var n = l[e];
      V(n.userComplete) && n.userComplete(t), n.terminate(), delete l[e];
    }
    function y() {
      throw new Error("Not implemented.");
    }
    function k(e) {
      if ("object" != typeof e || null === e) return e;
      var t,
        n = Array.isArray(e) ? [] : {};
      for (t in e) n[t] = k(e[t]);
      return n;
    }
    function b(e, t) {
      return function () {
        e.apply(t, arguments);
      };
    }
    function V(e) {
      return "function" == typeof e;
    }
    return (
      (_.RECORD_SEP = String.fromCharCode(30)),
      (_.UNIT_SEP = String.fromCharCode(31)),
      (_.BYTE_ORDER_MARK = "\ufeff"),
      (_.BAD_DELIMITERS = ["\r", "\n", '"', _.BYTE_ORDER_MARK]),
      (_.WORKERS_SUPPORTED = !r && !!s.Worker),
      (_.NODE_STREAM_INPUT = 1),
      (_.LocalChunkSize = 10485760),
      (_.RemoteChunkSize = 5242880),
      (_.DefaultDelimiter = ","),
      (_.Parser = w),
      (_.ParserHandle = n),
      (_.NetworkStreamer = h),
      (_.FileStreamer = p),
      (_.StringStreamer = f),
      (_.ReadableStreamStreamer = m),
      s.jQuery &&
        ((u = s.jQuery).fn.parse = function (r) {
          var n = r.config || {},
            a = [];
          return (
            this.each(function (e) {
              if (
                "INPUT" !== u(this).prop("tagName").toUpperCase() ||
                "file" !== u(this).attr("type").toLowerCase() ||
                !s.FileReader ||
                !this.files ||
                0 === this.files.length
              )
                return !0;
              for (var t = 0; t < this.files.length; t++)
                a.push({
                  file: this.files[t],
                  inputElem: this,
                  instanceConfig: u.extend({}, n),
                });
            }),
            e(),
            this
          );
          function e() {
            if (0 !== a.length) {
              var e,
                t,
                n,
                i = a[0];
              if (V(r.before)) {
                var o = r.before(i.file, i.inputElem);
                if ("object" == typeof o) {
                  if ("abort" === o.action)
                    return (
                      (e = i.file),
                      (t = i.inputElem),
                      (n = o.reason),
                      V(r.error) && r.error({ name: "AbortError" }, e, t, n)
                    );
                  if ("skip" === o.action) return l();
                  "object" == typeof o.config &&
                    (i.instanceConfig = u.extend(i.instanceConfig, o.config));
                } else if ("skip" === o) return l();
              }
              var s = i.instanceConfig.complete;
              (i.instanceConfig.complete = function (e) {
                V(s) && s(e, i.file, i.inputElem), l();
              }),
                _.parse(i.file, i.instanceConfig);
            } else V(r.complete) && r.complete();
          }
          function l() {
            a.splice(0, 1), e();
          }
        }),
      a &&
        (s.onmessage = function (e) {
          var e = e.data;
          void 0 === _.WORKER_ID && e && (_.WORKER_ID = e.workerId),
            "string" == typeof e.input
              ? s.postMessage({
                  workerId: _.WORKER_ID,
                  results: _.parse(e.input, e.config),
                  finished: !0,
                })
              : ((s.File && e.input instanceof File) ||
                  e.input instanceof Object) &&
                (e = _.parse(e.input, e.config)) &&
                s.postMessage({
                  workerId: _.WORKER_ID,
                  results: e,
                  finished: !0,
                });
        }),
      ((h.prototype = Object.create(d.prototype)).constructor = h),
      ((p.prototype = Object.create(d.prototype)).constructor = p),
      ((f.prototype = Object.create(f.prototype)).constructor = f),
      ((m.prototype = Object.create(d.prototype)).constructor = m),
      _
    );
  }),
  !function () {
    var a,
      s,
      o,
      r,
      l = {}.hasOwnProperty;
    function u(e, t) {
      var n, i;
      (this.form_field = e),
        (this.options = null != t ? t : {}),
        (this.label_click_handler =
          ((n = this.label_click_handler),
          (i = this),
          function () {
            return n.apply(i, arguments);
          })),
        u.browser_is_supported() &&
          ((this.is_multiple = this.form_field.multiple),
          this.set_default_text(),
          this.set_default_values(),
          this.setup(),
          this.set_up_html(),
          this.register_observers(),
          this.on_ready());
    }
    function e() {
      (this.options_index = 0), (this.parsed = []);
    }
    (e.prototype.add_node = function (e) {
      return "OPTGROUP" === e.nodeName.toUpperCase()
        ? this.add_group(e)
        : this.add_option(e);
    }),
      (e.prototype.add_group = function (e) {
        var t,
          n,
          i,
          o,
          s,
          r = this.parsed.length;
        for (
          this.parsed.push({
            array_index: r,
            group: !0,
            label: e.label,
            title: e.title || void 0,
            children: 0,
            disabled: e.disabled,
            classes: e.className,
          }),
            s = [],
            t = 0,
            n = (o = e.childNodes).length;
          t < n;
          t++
        )
          (i = o[t]), s.push(this.add_option(i, r, e.disabled));
        return s;
      }),
      (e.prototype.add_option = function (e, t, n) {
        if ("OPTION" === e.nodeName.toUpperCase())
          return (
            "" !== e.text
              ? (null != t && (this.parsed[t].children += 1),
                this.parsed.push({
                  array_index: this.parsed.length,
                  options_index: this.options_index,
                  value: e.value,
                  text: e.text,
                  html: e.innerHTML,
                  title: e.title || void 0,
                  selected: e.selected,
                  disabled: !0 === n ? n : e.disabled,
                  group_array_index: t,
                  group_label: null != t ? this.parsed[t].label : null,
                  classes: e.className,
                  style: e.style.cssText,
                }))
              : this.parsed.push({
                  array_index: this.parsed.length,
                  options_index: this.options_index,
                  empty: !0,
                }),
            (this.options_index += 1)
          );
      }),
      ((r = e).select_to_array = function (e) {
        for (
          var t, n, i = new r(), o = 0, s = (n = e.childNodes).length;
          o < s;
          o++
        )
          (t = n[o]), i.add_node(t);
        return i.parsed;
      }),
      (u.prototype.set_default_values = function () {
        return (
          (this.click_test_action =
            ((n = this),
            function (e) {
              return n.test_active_click(e);
            })),
          (this.activate_action =
            ((t = this),
            function (e) {
              return t.activate_field(e);
            })),
          (this.active_field = !1),
          (this.mouse_on_container = !1),
          (this.results_showing = !1),
          (this.result_highlighted = null),
          (this.is_rtl =
            this.options.rtl ||
            /\bchosen-rtl\b/.test(this.form_field.className)),
          (this.allow_single_deselect =
            null != this.options.allow_single_deselect &&
            null != this.form_field.options[0] &&
            "" === this.form_field.options[0].text &&
            this.options.allow_single_deselect),
          (this.disable_search_threshold =
            this.options.disable_search_threshold || 0),
          (this.disable_search = this.options.disable_search || !1),
          (this.enable_split_word_search =
            null == this.options.enable_split_word_search ||
            this.options.enable_split_word_search),
          (this.group_search =
            null == this.options.group_search || this.options.group_search),
          (this.search_contains = this.options.search_contains || !1),
          (this.single_backstroke_delete =
            null == this.options.single_backstroke_delete ||
            this.options.single_backstroke_delete),
          (this.max_selected_options =
            this.options.max_selected_options || 1 / 0),
          (this.inherit_select_classes =
            this.options.inherit_select_classes || !1),
          (this.display_selected_options =
            null == this.options.display_selected_options ||
            this.options.display_selected_options),
          (this.display_disabled_options =
            null == this.options.display_disabled_options ||
            this.options.display_disabled_options),
          (this.include_group_label_in_selected =
            this.options.include_group_label_in_selected || !1),
          (this.max_shown_results =
            this.options.max_shown_results || Number.POSITIVE_INFINITY),
          (this.case_sensitive_search =
            this.options.case_sensitive_search || !1),
          (this.hide_results_on_select =
            null == this.options.hide_results_on_select ||
            this.options.hide_results_on_select)
        );
        var t, n;
      }),
      (u.prototype.set_default_text = function () {
        return (
          this.form_field.getAttribute("data-placeholder")
            ? (this.default_text =
                this.form_field.getAttribute("data-placeholder"))
            : this.is_multiple
            ? (this.default_text =
                this.options.placeholder_text_multiple ||
                this.options.placeholder_text ||
                u.default_multiple_text)
            : (this.default_text =
                this.options.placeholder_text_single ||
                this.options.placeholder_text ||
                u.default_single_text),
          (this.default_text = this.escape_html(this.default_text)),
          (this.results_none_found =
            this.form_field.getAttribute("data-no_results_text") ||
            this.options.no_results_text ||
            u.default_no_result_text)
        );
      }),
      (u.prototype.choice_label = function (e) {
        return this.include_group_label_in_selected && null != e.group_label
          ? "<b class='group-name'>" +
              this.escape_html(e.group_label) +
              "</b>" +
              e.html
          : e.html;
      }),
      (u.prototype.mouse_enter = function () {
        return (this.mouse_on_container = !0);
      }),
      (u.prototype.mouse_leave = function () {
        return (this.mouse_on_container = !1);
      }),
      (u.prototype.input_focus = function (e) {
        if (this.is_multiple) {
          if (!this.active_field)
            return setTimeout(
              ((t = this),
              function () {
                return t.container_mousedown();
              }),
              50
            );
        } else if (!this.active_field) return this.activate_field();
        var t;
      }),
      (u.prototype.input_blur = function (e) {
        if (!this.mouse_on_container)
          return (
            (this.active_field = !1),
            setTimeout(
              ((t = this),
              function () {
                return t.blur_test();
              }),
              100
            )
          );
        var t;
      }),
      (u.prototype.label_click_handler = function (e) {
        return this.is_multiple
          ? this.container_mousedown(e)
          : this.activate_field();
      }),
      (u.prototype.results_option_build = function (e) {
        for (
          var t, n, i, o = "", s = 0, r = 0, a = (i = this.results_data).length;
          r < a &&
          ("" !==
            (n = (t = i[r]).group
              ? this.result_add_group(t)
              : this.result_add_option(t)) && (s++, (o += n)),
          null != e &&
            e.first &&
            (t.selected && this.is_multiple
              ? this.choice_build(t)
              : t.selected &&
                !this.is_multiple &&
                this.single_set_selected_text(this.choice_label(t))),
          !(s >= this.max_shown_results));
          r++
        );
        return o;
      }),
      (u.prototype.result_add_option = function (e) {
        var t, n;
        return e.search_match && this.include_option_in_results(e)
          ? ((t = []),
            e.disabled ||
              (e.selected && this.is_multiple) ||
              t.push("active-result"),
            !e.disabled ||
              (e.selected && this.is_multiple) ||
              t.push("disabled-result"),
            e.selected && t.push("result-selected"),
            null != e.group_array_index && t.push("group-option"),
            "" !== e.classes && t.push(e.classes),
            ((n = document.createElement("li")).className = t.join(" ")),
            e.style && (n.style.cssText = e.style),
            n.setAttribute("data-option-array-index", e.array_index),
            (n.innerHTML = e.highlighted_html || e.html),
            e.title && (n.title = e.title),
            this.outerHTML(n))
          : "";
      }),
      (u.prototype.result_add_group = function (e) {
        var t, n;
        return (e.search_match || e.group_match) && 0 < e.active_options
          ? ((t = []).push("group-result"),
            e.classes && t.push(e.classes),
            ((n = document.createElement("li")).className = t.join(" ")),
            (n.innerHTML = e.highlighted_html || this.escape_html(e.label)),
            e.title && (n.title = e.title),
            this.outerHTML(n))
          : "";
      }),
      (u.prototype.results_update_field = function () {
        if (
          (this.set_default_text(),
          this.is_multiple || this.results_reset_cleanup(),
          this.result_clear_highlight(),
          this.results_build(),
          this.results_showing)
        )
          return this.winnow_results();
      }),
      (u.prototype.reset_single_select_options = function () {
        for (
          var e, t, n = [], i = 0, o = (e = this.results_data).length;
          i < o;
          i++
        )
          (t = e[i]).selected ? n.push((t.selected = !1)) : n.push(void 0);
        return n;
      }),
      (u.prototype.results_toggle = function () {
        return this.results_showing ? this.results_hide() : this.results_show();
      }),
      (u.prototype.results_search = function (e) {
        return this.results_showing
          ? this.winnow_results()
          : this.results_show();
      }),
      (u.prototype.winnow_results = function (e) {
        var t, n, i, o, s, r, a, l, u, c, d, h, p;
        for (
          this.no_results_clear(),
            c = 0,
            t = (a = this.get_search_text()).replace(
              /[-[\]{}()*+?.,\\^$|#\s]/g,
              "\\$&"
            ),
            u = this.get_search_regex(t),
            i = 0,
            o = (l = this.results_data).length;
          i < o;
          i++
        )
          ((s = l[i]).search_match = !1),
            (d = null),
            (s.highlighted_html = ""),
            this.include_option_in_results(s) &&
              (s.group && ((s.group_match = !1), (s.active_options = 0)),
              null != s.group_array_index &&
                this.results_data[s.group_array_index] &&
                (0 ===
                  (d = this.results_data[s.group_array_index]).active_options &&
                  d.search_match &&
                  (c += 1),
                (d.active_options += 1)),
              (p = s.group ? s.label : s.text),
              (s.group && !this.group_search) ||
                ((h = this.search_string_match(p, u)),
                (s.search_match = null != h),
                s.search_match && !s.group && (c += 1),
                s.search_match
                  ? (a.length &&
                      ((h = h.index),
                      (r = p.slice(0, h)),
                      (n = p.slice(h, h + a.length)),
                      (p = p.slice(h + a.length)),
                      (s.highlighted_html =
                        this.escape_html(r) +
                        "<em>" +
                        this.escape_html(n) +
                        "</em>" +
                        this.escape_html(p))),
                    null != d && (d.group_match = !0))
                  : null != s.group_array_index &&
                    this.results_data[s.group_array_index].search_match &&
                    (s.search_match = !0)));
        return (
          this.result_clear_highlight(),
          c < 1 && a.length
            ? (this.update_results_content(""), this.no_results(a))
            : (this.update_results_content(this.results_option_build()),
              null != e && e.skip_highlight
                ? void 0
                : this.winnow_results_set_highlight())
        );
      }),
      (u.prototype.get_search_regex = function (e) {
        var t,
          e = this.search_contains ? e : "(^|\\s|\\b)" + e + "[^\\s]*";
        return (
          this.enable_split_word_search ||
            this.search_contains ||
            (e = "^" + e),
          (t = this.case_sensitive_search ? "" : "i"),
          new RegExp(e, t)
        );
      }),
      (u.prototype.search_string_match = function (e, t) {
        t = t.exec(e);
        return !this.search_contains && null != t && t[1] && (t.index += 1), t;
      }),
      (u.prototype.choices_count = function () {
        var e, t, n;
        if (null != this.selected_option_count)
          return this.selected_option_count;
        for (
          e = this.selected_option_count = 0,
            t = (n = this.form_field.options).length;
          e < t;
          e++
        )
          n[e].selected && (this.selected_option_count += 1);
        return this.selected_option_count;
      }),
      (u.prototype.choices_click = function (e) {
        if (
          (e.preventDefault(),
          this.activate_field(),
          !this.results_showing && !this.is_disabled)
        )
          return this.results_show();
      }),
      (u.prototype.keydown_checker = function (e) {
        var t = null != (t = e.which) ? t : e.keyCode;
        switch (
          (this.search_field_scale(),
          8 !== t && this.pending_backstroke && this.clear_backstroke(),
          t)
        ) {
          case 8:
            this.backstroke_length = this.get_search_field_value().length;
            break;
          case 9:
            this.results_showing && !this.is_multiple && this.result_select(e),
              (this.mouse_on_container = !1);
            break;
          case 13:
          case 27:
            this.results_showing && e.preventDefault();
            break;
          case 32:
            this.disable_search && e.preventDefault();
            break;
          case 38:
            e.preventDefault(), this.keyup_arrow();
            break;
          case 40:
            e.preventDefault(), this.keydown_arrow();
        }
      }),
      (u.prototype.keyup_checker = function (e) {
        var t = null != (t = e.which) ? t : e.keyCode;
        switch ((this.search_field_scale(), t)) {
          case 8:
            this.is_multiple &&
            this.backstroke_length < 1 &&
            0 < this.choices_count()
              ? this.keydown_backstroke()
              : this.pending_backstroke ||
                (this.result_clear_highlight(), this.results_search());
            break;
          case 13:
            e.preventDefault(), this.results_showing && this.result_select(e);
            break;
          case 27:
            this.results_showing && this.results_hide();
            break;
          case 9:
          case 16:
          case 17:
          case 18:
          case 38:
          case 40:
          case 91:
            break;
          default:
            this.results_search();
        }
      }),
      (u.prototype.clipboard_event_checker = function (e) {
        if (!this.is_disabled)
          return setTimeout(
            ((t = this),
            function () {
              return t.results_search();
            }),
            50
          );
        var t;
      }),
      (u.prototype.container_width = function () {
        return null != this.options.width
          ? this.options.width
          : this.form_field.offsetWidth + "px";
      }),
      (u.prototype.include_option_in_results = function (e) {
        return !(
          (this.is_multiple && !this.display_selected_options && e.selected) ||
          (!this.display_disabled_options && e.disabled) ||
          e.empty
        );
      }),
      (u.prototype.search_results_touchstart = function (e) {
        return (this.touch_started = !0), this.search_results_mouseover(e);
      }),
      (u.prototype.search_results_touchmove = function (e) {
        return (this.touch_started = !1), this.search_results_mouseout(e);
      }),
      (u.prototype.search_results_touchend = function (e) {
        if (this.touch_started) return this.search_results_mouseup(e);
      }),
      (u.prototype.outerHTML = function (e) {
        var t;
        return (
          e.outerHTML ||
          ((t = document.createElement("div")).appendChild(e), t.innerHTML)
        );
      }),
      (u.prototype.get_single_html = function () {
        return (
          '<a class="chosen-single chosen-default">\n  <span>' +
          this.default_text +
          '</span>\n  <div><b></b></div>\n</a>\n<div class="chosen-drop">\n  <div class="chosen-search">\n    <input class="chosen-search-input" type="text" autocomplete="off" />\n  </div>\n  <ul class="chosen-results"></ul>\n</div>'
        );
      }),
      (u.prototype.get_multi_html = function () {
        return (
          '<ul class="chosen-choices">\n  <li class="search-field">\n    <input class="chosen-search-input" type="text" autocomplete="off" value="' +
          this.default_text +
          '" />\n  </li>\n</ul>\n<div class="chosen-drop">\n  <ul class="chosen-results"></ul>\n</div>'
        );
      }),
      (u.prototype.get_no_results_html = function (e) {
        return (
          '<li class="no-results">\n  ' +
          this.results_none_found +
          " <span>" +
          this.escape_html(e) +
          "</span>\n</li>"
        );
      }),
      (u.browser_is_supported = function () {
        return "Microsoft Internet Explorer" === window.navigator.appName
          ? 8 <= document.documentMode
          : !(
              /iP(od|hone)/i.test(window.navigator.userAgent) ||
              /IEMobile/i.test(window.navigator.userAgent) ||
              /Windows Phone/i.test(window.navigator.userAgent) ||
              /BlackBerry/i.test(window.navigator.userAgent) ||
              /BB10/i.test(window.navigator.userAgent) ||
              /Android.*Mobile/i.test(window.navigator.userAgent)
            );
      }),
      (u.default_multiple_text = "Select Some Options"),
      (u.default_single_text = "Select an Option"),
      (u.default_no_result_text = "No results match"),
      (s = u),
      (a = jQuery).fn.extend({
        chosen: function (i) {
          return s.browser_is_supported()
            ? this.each(function (e) {
                var t,
                  n = (t = a(this)).data("chosen");
                "destroy" !== i
                  ? n instanceof o || t.data("chosen", new o(this, i))
                  : n instanceof o && n.destroy();
              })
            : this;
        },
      }),
      (o = (function () {
        function e() {
          return e.__super__.constructor.apply(this, arguments);
        }
        var t,
          n = e,
          i = s;
        function o() {
          this.constructor = n;
        }
        for (t in i) l.call(i, t) && (n[t] = i[t]);
        return (
          (o.prototype = i.prototype),
          (n.prototype = new o()),
          (n.__super__ = i.prototype),
          (e.prototype.setup = function () {
            return (
              (this.form_field_jq = a(this.form_field)),
              (this.current_selectedIndex = this.form_field.selectedIndex)
            );
          }),
          (e.prototype.set_up_html = function () {
            var e;
            return (
              (e = ["chosen-container"]).push(
                "chosen-container-" + (this.is_multiple ? "multi" : "single")
              ),
              this.inherit_select_classes &&
                this.form_field.className &&
                e.push(this.form_field.className),
              this.is_rtl && e.push("chosen-rtl"),
              (e = { class: e.join(" "), title: this.form_field.title }),
              this.form_field.id.length &&
                (e.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"),
              (this.container = a("<div />", e)),
              this.container.width(this.container_width()),
              this.is_multiple
                ? this.container.html(this.get_multi_html())
                : this.container.html(this.get_single_html()),
              this.form_field_jq.hide().after(this.container),
              (this.dropdown = this.container.find("div.chosen-drop").first()),
              (this.search_field = this.container.find("input").first()),
              (this.search_results = this.container
                .find("ul.chosen-results")
                .first()),
              this.search_field_scale(),
              (this.search_no_results = this.container
                .find("li.no-results")
                .first()),
              this.is_multiple
                ? ((this.search_choices = this.container
                    .find("ul.chosen-choices")
                    .first()),
                  (this.search_container = this.container
                    .find("li.search-field")
                    .first()))
                : ((this.search_container = this.container
                    .find("div.chosen-search")
                    .first()),
                  (this.selected_item = this.container
                    .find(".chosen-single")
                    .first())),
              this.results_build(),
              this.set_tab_index(),
              this.set_label_behavior()
            );
          }),
          (e.prototype.on_ready = function () {
            return this.form_field_jq.trigger("chosen:ready", { chosen: this });
          }),
          (e.prototype.register_observers = function () {
            return (
              this.container.on(
                "touchstart.chosen",
                ((C = this),
                function (e) {
                  C.container_mousedown(e);
                })
              ),
              this.container.on(
                "touchend.chosen",
                ((x = this),
                function (e) {
                  x.container_mouseup(e);
                })
              ),
              this.container.on(
                "mousedown.chosen",
                ((k = this),
                function (e) {
                  k.container_mousedown(e);
                })
              ),
              this.container.on(
                "mouseup.chosen",
                ((w = this),
                function (e) {
                  w.container_mouseup(e);
                })
              ),
              this.container.on(
                "mouseenter.chosen",
                ((_ = this),
                function (e) {
                  _.mouse_enter(e);
                })
              ),
              this.container.on(
                "mouseleave.chosen",
                ((b = this),
                function (e) {
                  b.mouse_leave(e);
                })
              ),
              this.search_results.on(
                "mouseup.chosen",
                ((y = this),
                function (e) {
                  y.search_results_mouseup(e);
                })
              ),
              this.search_results.on(
                "mouseover.chosen",
                ((v = this),
                function (e) {
                  v.search_results_mouseover(e);
                })
              ),
              this.search_results.on(
                "mouseout.chosen",
                ((g = this),
                function (e) {
                  g.search_results_mouseout(e);
                })
              ),
              this.search_results.on(
                "mousewheel.chosen DOMMouseScroll.chosen",
                ((m = this),
                function (e) {
                  m.search_results_mousewheel(e);
                })
              ),
              this.search_results.on(
                "touchstart.chosen",
                ((f = this),
                function (e) {
                  f.search_results_touchstart(e);
                })
              ),
              this.search_results.on(
                "touchmove.chosen",
                ((p = this),
                function (e) {
                  p.search_results_touchmove(e);
                })
              ),
              this.search_results.on(
                "touchend.chosen",
                ((h = this),
                function (e) {
                  h.search_results_touchend(e);
                })
              ),
              this.form_field_jq.on(
                "chosen:updated.chosen",
                ((d = this),
                function (e) {
                  d.results_update_field(e);
                })
              ),
              this.form_field_jq.on(
                "chosen:activate.chosen",
                ((c = this),
                function (e) {
                  c.activate_field(e);
                })
              ),
              this.form_field_jq.on(
                "chosen:open.chosen",
                ((u = this),
                function (e) {
                  u.container_mousedown(e);
                })
              ),
              this.form_field_jq.on(
                "chosen:close.chosen",
                ((l = this),
                function (e) {
                  l.close_field(e);
                })
              ),
              this.search_field.on(
                "blur.chosen",
                ((a = this),
                function (e) {
                  a.input_blur(e);
                })
              ),
              this.search_field.on(
                "keyup.chosen",
                ((r = this),
                function (e) {
                  r.keyup_checker(e);
                })
              ),
              this.search_field.on(
                "keydown.chosen",
                ((s = this),
                function (e) {
                  s.keydown_checker(e);
                })
              ),
              this.search_field.on(
                "focus.chosen",
                ((o = this),
                function (e) {
                  o.input_focus(e);
                })
              ),
              this.search_field.on(
                "cut.chosen",
                ((i = this),
                function (e) {
                  i.clipboard_event_checker(e);
                })
              ),
              this.search_field.on(
                "paste.chosen",
                ((n = this),
                function (e) {
                  n.clipboard_event_checker(e);
                })
              ),
              this.is_multiple
                ? this.search_choices.on(
                    "click.chosen",
                    ((t = this),
                    function (e) {
                      t.choices_click(e);
                    })
                  )
                : this.container.on("click.chosen", function (e) {
                    e.preventDefault();
                  })
            );
            var t,
              n,
              i,
              o,
              s,
              r,
              a,
              l,
              u,
              c,
              d,
              h,
              p,
              f,
              m,
              g,
              v,
              y,
              b,
              _,
              w,
              k,
              x,
              C;
          }),
          (e.prototype.destroy = function () {
            return (
              a(this.container[0].ownerDocument).off(
                "click.chosen",
                this.click_test_action
              ),
              0 < this.form_field_label.length &&
                this.form_field_label.off("click.chosen"),
              this.search_field[0].tabIndex &&
                (this.form_field_jq[0].tabIndex =
                  this.search_field[0].tabIndex),
              this.container.remove(),
              this.form_field_jq.removeData("chosen"),
              this.form_field_jq.show()
            );
          }),
          (e.prototype.search_field_disabled = function () {
            return (
              (this.is_disabled =
                this.form_field.disabled ||
                this.form_field_jq.parents("fieldset").is(":disabled")),
              this.container.toggleClass("chosen-disabled", this.is_disabled),
              (this.search_field[0].disabled = this.is_disabled),
              this.is_multiple ||
                this.selected_item.off("focus.chosen", this.activate_field),
              this.is_disabled
                ? this.close_field()
                : this.is_multiple
                ? void 0
                : this.selected_item.on("focus.chosen", this.activate_field)
            );
          }),
          (e.prototype.container_mousedown = function (e) {
            var t;
            if (!this.is_disabled)
              return (
                !e ||
                  ("mousedown" !== (t = e.type) && "touchstart" !== t) ||
                  this.results_showing ||
                  e.preventDefault(),
                null != e && a(e.target).hasClass("search-choice-close")
                  ? void 0
                  : (this.active_field
                      ? this.is_multiple ||
                        !e ||
                        (a(e.target)[0] !== this.selected_item[0] &&
                          !a(e.target).parents("a.chosen-single").length) ||
                        (e.preventDefault(), this.results_toggle())
                      : (this.is_multiple && this.search_field.val(""),
                        a(this.container[0].ownerDocument).on(
                          "click.chosen",
                          this.click_test_action
                        ),
                        this.results_show()),
                    this.activate_field())
              );
          }),
          (e.prototype.container_mouseup = function (e) {
            if ("ABBR" === e.target.nodeName && !this.is_disabled)
              return this.results_reset(e);
          }),
          (e.prototype.search_results_mousewheel = function (e) {
            var t;
            if (
              null !=
              (t = e.originalEvent
                ? e.originalEvent.deltaY ||
                  -e.originalEvent.wheelDelta ||
                  e.originalEvent.detail
                : t)
            )
              return (
                e.preventDefault(),
                "DOMMouseScroll" === e.type && (t *= 40),
                this.search_results.scrollTop(
                  t + this.search_results.scrollTop()
                )
              );
          }),
          (e.prototype.blur_test = function (e) {
            if (
              !this.active_field &&
              this.container.hasClass("chosen-container-active")
            )
              return this.close_field();
          }),
          (e.prototype.close_field = function () {
            return (
              a(this.container[0].ownerDocument).off(
                "click.chosen",
                this.click_test_action
              ),
              (this.active_field = !1),
              this.results_hide(),
              this.container.removeClass("chosen-container-active"),
              this.clear_backstroke(),
              this.show_search_field_default(),
              this.search_field_scale(),
              this.search_field.blur()
            );
          }),
          (e.prototype.activate_field = function () {
            if (!this.is_disabled)
              return (
                this.container.addClass("chosen-container-active"),
                (this.active_field = !0),
                this.search_field.val(this.search_field.val()),
                this.search_field.focus()
              );
          }),
          (e.prototype.test_active_click = function (e) {
            return (e = a(e.target).closest(".chosen-container")).length &&
              this.container[0] === e[0]
              ? (this.active_field = !0)
              : this.close_field();
          }),
          (e.prototype.results_build = function () {
            return (
              (this.parsing = !0),
              (this.selected_option_count = null),
              (this.results_data = r.select_to_array(this.form_field)),
              this.is_multiple
                ? this.search_choices.find("li.search-choice").remove()
                : (this.single_set_selected_text(),
                  this.disable_search ||
                  this.form_field.options.length <=
                    this.disable_search_threshold
                    ? ((this.search_field[0].readOnly = !0),
                      this.container.addClass(
                        "chosen-container-single-nosearch"
                      ))
                    : ((this.search_field[0].readOnly = !1),
                      this.container.removeClass(
                        "chosen-container-single-nosearch"
                      ))),
              this.update_results_content(
                this.results_option_build({ first: !0 })
              ),
              this.search_field_disabled(),
              this.show_search_field_default(),
              this.search_field_scale(),
              (this.parsing = !1)
            );
          }),
          (e.prototype.result_do_highlight = function (e) {
            var t, n, i, o;
            if (e.length)
              return (
                this.result_clear_highlight(),
                (this.result_highlight = e),
                this.result_highlight.addClass("highlighted"),
                (i =
                  (e = parseInt(this.search_results.css("maxHeight"), 10)) +
                  (o = this.search_results.scrollTop())),
                (t =
                  (n =
                    this.result_highlight.position().top +
                    this.search_results.scrollTop()) +
                  this.result_highlight.outerHeight()) >= i
                  ? this.search_results.scrollTop(0 < t - e ? t - e : 0)
                  : n < o
                  ? this.search_results.scrollTop(n)
                  : void 0
              );
          }),
          (e.prototype.result_clear_highlight = function () {
            return (
              this.result_highlight &&
                this.result_highlight.removeClass("highlighted"),
              (this.result_highlight = null)
            );
          }),
          (e.prototype.results_show = function () {
            return this.is_multiple &&
              this.max_selected_options <= this.choices_count()
              ? (this.form_field_jq.trigger("chosen:maxselected", {
                  chosen: this,
                }),
                !1)
              : (this.container.addClass("chosen-with-drop"),
                (this.results_showing = !0),
                this.search_field.focus(),
                this.search_field.val(this.get_search_field_value()),
                this.winnow_results(),
                this.form_field_jq.trigger("chosen:showing_dropdown", {
                  chosen: this,
                }));
          }),
          (e.prototype.update_results_content = function (e) {
            return this.search_results.html(e);
          }),
          (e.prototype.results_hide = function () {
            return (
              this.results_showing &&
                (this.result_clear_highlight(),
                this.container.removeClass("chosen-with-drop"),
                this.form_field_jq.trigger("chosen:hiding_dropdown", {
                  chosen: this,
                })),
              (this.results_showing = !1)
            );
          }),
          (e.prototype.set_tab_index = function (e) {
            var t;
            if (this.form_field.tabIndex)
              return (
                (t = this.form_field.tabIndex),
                (this.form_field.tabIndex = -1),
                (this.search_field[0].tabIndex = t)
              );
          }),
          (e.prototype.set_label_behavior = function () {
            if (
              ((this.form_field_label = this.form_field_jq.parents("label")),
              !this.form_field_label.length &&
                this.form_field.id.length &&
                (this.form_field_label = a(
                  "label[for='" + this.form_field.id + "']"
                )),
              0 < this.form_field_label.length)
            )
              return this.form_field_label.on(
                "click.chosen",
                this.label_click_handler
              );
          }),
          (e.prototype.show_search_field_default = function () {
            return this.is_multiple &&
              this.choices_count() < 1 &&
              !this.active_field
              ? (this.search_field.val(this.default_text),
                this.search_field.addClass("default"))
              : (this.search_field.val(""),
                this.search_field.removeClass("default"));
          }),
          (e.prototype.search_results_mouseup = function (e) {
            var t;
            if (
              (t = a(e.target).hasClass("active-result")
                ? a(e.target)
                : a(e.target).parents(".active-result").first()).length
            )
              return (
                (this.result_highlight = t),
                this.result_select(e),
                this.search_field.focus()
              );
          }),
          (e.prototype.search_results_mouseover = function (e) {
            if (
              (e = a(e.target).hasClass("active-result")
                ? a(e.target)
                : a(e.target).parents(".active-result").first())
            )
              return this.result_do_highlight(e);
          }),
          (e.prototype.search_results_mouseout = function (e) {
            if (
              a(e.target).hasClass("active-result") ||
              a(e.target).parents(".active-result").first()
            )
              return this.result_clear_highlight();
          }),
          (e.prototype.choice_build = function (e) {
            var t,
              n = a("<li />", { class: "search-choice" }).html(
                "<span>" + this.choice_label(e) + "</span>"
              );
            return (
              e.disabled
                ? n.addClass("search-choice-disabled")
                : ((e = a("<a />", {
                    class: "search-choice-close",
                    "data-option-array-index": e.array_index,
                  })).on(
                    "click.chosen",
                    ((t = this),
                    function (e) {
                      return t.choice_destroy_link_click(e);
                    })
                  ),
                  n.append(e)),
              this.search_container.before(n)
            );
          }),
          (e.prototype.choice_destroy_link_click = function (e) {
            if ((e.preventDefault(), e.stopPropagation(), !this.is_disabled))
              return this.choice_destroy(a(e.target));
          }),
          (e.prototype.choice_destroy = function (e) {
            if (
              this.result_deselect(e[0].getAttribute("data-option-array-index"))
            )
              return (
                this.active_field
                  ? this.search_field.focus()
                  : this.show_search_field_default(),
                this.is_multiple &&
                  0 < this.choices_count() &&
                  this.get_search_field_value().length < 1 &&
                  this.results_hide(),
                e.parents("li").first().remove(),
                this.search_field_scale()
              );
          }),
          (e.prototype.results_reset = function () {
            if (
              (this.reset_single_select_options(),
              (this.form_field.options[0].selected = !0),
              this.single_set_selected_text(),
              this.show_search_field_default(),
              this.results_reset_cleanup(),
              this.trigger_form_field_change(),
              this.active_field)
            )
              return this.results_hide();
          }),
          (e.prototype.results_reset_cleanup = function () {
            return (
              (this.current_selectedIndex = this.form_field.selectedIndex),
              this.selected_item.find("abbr").remove()
            );
          }),
          (e.prototype.result_select = function (e) {
            var t;
            if (this.result_highlight)
              return (
                (t = this.result_highlight),
                this.result_clear_highlight(),
                this.is_multiple &&
                this.max_selected_options <= this.choices_count()
                  ? (this.form_field_jq.trigger("chosen:maxselected", {
                      chosen: this,
                    }),
                    !1)
                  : (this.is_multiple
                      ? t.removeClass("active-result")
                      : this.reset_single_select_options(),
                    t.addClass("result-selected"),
                    ((t =
                      this.results_data[
                        t[0].getAttribute("data-option-array-index")
                      ]).selected = !0),
                    (this.form_field.options[t.options_index].selected = !0),
                    (this.selected_option_count = null),
                    this.is_multiple
                      ? this.choice_build(t)
                      : this.single_set_selected_text(this.choice_label(t)),
                    this.is_multiple &&
                    (!this.hide_results_on_select || e.metaKey || e.ctrlKey)
                      ? e.metaKey || e.ctrlKey
                        ? this.winnow_results({ skip_highlight: !0 })
                        : (this.search_field.val(""), this.winnow_results())
                      : (this.results_hide(), this.show_search_field_default()),
                    (!this.is_multiple &&
                      this.form_field.selectedIndex ===
                        this.current_selectedIndex) ||
                      this.trigger_form_field_change({
                        selected:
                          this.form_field.options[t.options_index].value,
                      }),
                    (this.current_selectedIndex =
                      this.form_field.selectedIndex),
                    e.preventDefault(),
                    this.search_field_scale())
              );
          }),
          (e.prototype.single_set_selected_text = function (e) {
            return (
              (e = null == e ? this.default_text : e) === this.default_text
                ? this.selected_item.addClass("chosen-default")
                : (this.single_deselect_control_build(),
                  this.selected_item.removeClass("chosen-default")),
              this.selected_item.find("span").html(e)
            );
          }),
          (e.prototype.result_deselect = function (e) {
            e = this.results_data[e];
            return (
              !this.form_field.options[e.options_index].disabled &&
              ((e.selected = !1),
              (this.form_field.options[e.options_index].selected = !1),
              (this.selected_option_count = null),
              this.result_clear_highlight(),
              this.results_showing && this.winnow_results(),
              this.trigger_form_field_change({
                deselected: this.form_field.options[e.options_index].value,
              }),
              this.search_field_scale(),
              !0)
            );
          }),
          (e.prototype.single_deselect_control_build = function () {
            if (this.allow_single_deselect)
              return (
                this.selected_item.find("abbr").length ||
                  this.selected_item
                    .find("span")
                    .first()
                    .after('<abbr class="search-choice-close"></abbr>'),
                this.selected_item.addClass("chosen-single-with-deselect")
              );
          }),
          (e.prototype.get_search_field_value = function () {
            return this.search_field.val();
          }),
          (e.prototype.get_search_text = function () {
            return a.trim(this.get_search_field_value());
          }),
          (e.prototype.escape_html = function (e) {
            return a("<div/>").text(e).html();
          }),
          (e.prototype.winnow_results_set_highlight = function () {
            var e = this.is_multiple
              ? []
              : this.search_results.find(".result-selected.active-result");
            if (
              null !=
              (e = (
                e.length ? e : this.search_results.find(".active-result")
              ).first())
            )
              return this.result_do_highlight(e);
          }),
          (e.prototype.no_results = function (e) {
            e = this.get_no_results_html(e);
            return (
              this.search_results.append(e),
              this.form_field_jq.trigger("chosen:no_results", { chosen: this })
            );
          }),
          (e.prototype.no_results_clear = function () {
            return this.search_results.find(".no-results").remove();
          }),
          (e.prototype.keydown_arrow = function () {
            var e;
            return this.results_showing && this.result_highlight
              ? (e = this.result_highlight.nextAll("li.active-result").first())
                ? this.result_do_highlight(e)
                : void 0
              : this.results_show();
          }),
          (e.prototype.keyup_arrow = function () {
            var e;
            return this.results_showing || this.is_multiple
              ? this.result_highlight
                ? (e = this.result_highlight.prevAll("li.active-result")).length
                  ? this.result_do_highlight(e.first())
                  : (0 < this.choices_count() && this.results_hide(),
                    this.result_clear_highlight())
                : void 0
              : this.results_show();
          }),
          (e.prototype.keydown_backstroke = function () {
            var e;
            return this.pending_backstroke
              ? (this.choice_destroy(this.pending_backstroke.find("a").first()),
                this.clear_backstroke())
              : (e = this.search_container.siblings("li.search-choice").last())
                  .length && !e.hasClass("search-choice-disabled")
              ? ((this.pending_backstroke = e),
                this.single_backstroke_delete
                  ? this.keydown_backstroke()
                  : this.pending_backstroke.addClass("search-choice-focus"))
              : void 0;
          }),
          (e.prototype.clear_backstroke = function () {
            return (
              this.pending_backstroke &&
                this.pending_backstroke.removeClass("search-choice-focus"),
              (this.pending_backstroke = null)
            );
          }),
          (e.prototype.search_field_scale = function () {
            var e, t, n, i, o, s, r;
            if (this.is_multiple) {
              for (
                o = {
                  position: "absolute",
                  left: "-1000px",
                  top: "-1000px",
                  display: "none",
                  whiteSpace: "pre",
                },
                  t = 0,
                  n = (s = [
                    "fontSize",
                    "fontStyle",
                    "fontWeight",
                    "fontFamily",
                    "lineHeight",
                    "textTransform",
                    "letterSpacing",
                  ]).length;
                t < n;
                t++
              )
                o[(i = s[t])] = this.search_field.css(i);
              return (
                (e = a("<div />").css(o)).text(this.get_search_field_value()),
                a("body").append(e),
                (r = e.width() + 25),
                e.remove(),
                this.container.is(":visible") &&
                  (r = Math.min(this.container.outerWidth() - 10, r)),
                this.search_field.width(r)
              );
            }
          }),
          (e.prototype.trigger_form_field_change = function (e) {
            return (
              this.form_field_jq.trigger("input", e),
              this.form_field_jq.trigger("change", e)
            );
          }),
          e
        );
      })());
  }.call(this),
  !(function (e, t) {
    "object" == typeof exports
      ? ((module.exports = t()), (module.exports.default = t()))
      : "function" == typeof define && define.amd
      ? define(t)
      : (e.slugify = t());
  })(this, function () {
    var r = JSON.parse(
        '{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}'
      ),
      n = JSON.parse(
        '{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}'
      );
    function e(e, i) {
      if ("string" != typeof e)
        throw Error("slugify: string argument expected");
      var o =
          n[(i = "string" == typeof i ? { replacement: i } : i || {}).locale] ||
          {},
        s = void 0 === i.replacement ? "-" : i.replacement,
        t = void 0 === i.trim || i.trim,
        e = e
          .normalize()
          .split("")
          .reduce(function (e, t) {
            var n = o[t];
            return (
              e +
              (n =
                (n = void 0 === (n = void 0 === n ? r[t] : n) ? t : n) === s
                  ? " "
                  : n).replace(i.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, "")
            );
          }, "");
      return (
        i.strict && (e = e.replace(/[^A-Za-z0-9\s]/g, "")),
        (e = (e = t ? e.trim() : e).replace(/\s+/g, s)),
        (e = i.lower ? e.toLowerCase() : e)
      );
    }
    return (
      (e.extend = function (e) {
        Object.assign(r, e);
      }),
      e
    );
  }),
  window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    window.unicornplatform = {};
    const isKeyValue = (e) =>
        "object" == typeof e && !Array.isArray(e) && null !== e,
      lowerCaseKeys = (n) =>
        Object.keys(n).reduce(
          (e, t) => ((e[t.toString().toLowerCase().trim()] = n[t]), e),
          {}
        ),
      clearForm = (e) => {
        $(":input", e)
          .not(":button, :submit, :reset, :hidden, select")
          .val("")
          .prop("checked", !1)
          .prop("selected", !1),
          $("select", e).prop("selectedIndex", 0),
          $(e).find(".chosen-select").val("").trigger("chosen:updated");
      },
      combineSameParams = (e) => {
        const t = {};
        return (
          e.forEach((e) => {
            t[e.name]
              ? (t[e.name] = t[e.name] + ";" + e.value)
              : (t[e.name] = e.value);
          }),
          t
        );
      },
      validateRequiredMultipleChoice = (e) => {
        let n = !1;
        const t = e.find(".form__input--multiple");
        return (
          t.each(function () {
            if (n) return !1;
            const e = $(this);
            var t = e.find(".chosen-select").data("required");
            if (t && 0 === e.find(".chosen-choices .search-choice").length)
              return (
                (n = !0),
                e.find(".chosen-choices").trigger("click"),
                e
                  .find(".chosen-select")
                  .val("")
                  .trigger("chosen:updated")
                  .trigger("chosen:activate"),
                !1
              );
          }),
          n
        );
      };
    function getUrlParameter(e) {
      e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      e = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
      return null === e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "));
    }
    function getMarketingParameters(i) {
      const o = [
        "REF",
        "UTM_SOURCE",
        "UTM_MEDIUM",
        "UTM_CONT",
        "UTM_CAMP",
        "UTM_TERM",
      ];
      return [
        "ref",
        "utm_source",
        "utm_medium",
        "utm_content",
        "utm_campaign",
        "utm_term",
      ]
        .map((e, t) => {
          let n = e;
          return (
            "mailerlite" === i && (n = `fields[${n}]`),
            {
              name: (n = "mailchimp" === i ? o[t] : n),
              value: getUrlParameter(e),
            }
          );
        })
        .filter((e) => !!e.value);
    }
    let elementsWithMask = document.querySelectorAll("[data-mask]");
    if (0 < elementsWithMask.length && void 0 !== window.IMask)
      for (let index = 0; index < elementsWithMask.length; index++) {
        const element = elementsWithMask[index],
          elementMask = element.getAttribute("data-mask");
        let mask = IMask(element, { mask: elementMask });
      }
    function removeParam(e) {
      var t = window.location.href,
        n = t.split("?")[0],
        i = [],
        t = -1 !== t.indexOf("?") ? t.split("?")[1] : "";
      if ("" !== t) {
        for (var o = (i = t.split("&")).length - 1; 0 <= o; --o)
          i[o].split("=")[0] === e && i.splice(o, 1);
        n = n + "?" + i.join("&");
      }
      return n;
    }
    function isMobile() {
      return /Android|iPhone|iPad|iPod|BlackBerry/i.test(
        navigator.userAgent || navigator.vendor || window.opera
      );
    }
    function isTablet() {
      return /(ipad|iPad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
        navigator.userAgent
      );
    }
    function isPhone() {
      return Math.min(window.screen.width, window.screen.height) < 500;
    }
    !(function () {
      let e = $("body");
      isMobile() ? e.addClass("body--mobile") : e.addClass("body--desktop"),
        isTablet() && e.addClass("body--tablet"),
        isPhone() && e.addClass("body--phone"),
        e.addClass("body--loaded");
    })();
    var message = (function () {
        function t(e, t) {
          t && e.find(".js-error-message-text").text(t),
            e.addClass("state-visible");
        }
        function n(e) {
          for (var t, n = e.length, i = 0; i < n; i++)
            e[i].removeClass("state-visible"),
              (t = e[i]).removeClass("state-reacted"),
              t.find(".js-react-on-message").removeAttr("disabled");
        }
        function e() {
          $(document).on("click", ".js-react-on-message", function (e) {
            var t, n;
            e.preventDefault(),
              (e = $(this)),
              (t = e.parents(".js-message")),
              (n = t).addClass("state-reacted"),
              n.find(".js-react-on-message").attr("disabled", "disabled"),
              (n = e.text()),
              t.find(".js-reaction-text").text(n);
          });
        }
        return {
          show: t,
          hide: n,
          init: function () {
            $(document).on("click", ".js-open-engaging-message", function (e) {
              e.preventDefault();
              e = $(this).attr("data-index");
              t($('.js-engaging-message[data-index="' + e + '"]'));
            }),
              e(),
              $(document).on("click", ".js-close-message", function (e) {
                e.preventDefault(), n([$(this).parents(".js-message")]);
              });
          },
        };
      })(),
      button =
        (message.init(),
        {
          showSuccessTick: function (e) {
            e.addClass("state-show-success-tick");
          },
          removeSuccessTick: function (e) {
            e.removeClass("state-show-success-tick");
          },
          disableSubmit: function (e) {
            e.attr("disabled", "disabled");
          },
          enableSubmit: function (e) {
            e.removeAttr("disabled");
          },
          showSpinner: function (e) {
            e.addClass("state-show-spinner");
          },
          stopSpinner: function (e) {
            e.removeClass("state-show-spinner");
          },
        }),
      submitNoIntegrationForm = {
        init: function () {
          for (
            var e = $(".js-no-integration-form"), t = e.length, n = 0;
            n < t;
            n++
          )
            !(function (e) {
              var t = e.find(".js-engaging-message"),
                n = e.find(".js-success-message"),
                i = e.find(".js-error-message"),
                o = e.find(".js-submit-button"),
                s = e.find(".js-form-input"),
                r = s.not("textarea");
              e.attr("success-redirect");
              e.on("submit", function (e) {
                e.preventDefault(),
                  $(this),
                  message.show(
                    i,
                    "The form is not connected to any integration."
                  );
              }),
                r.on("keypress", "", function (e) {
                  if (13 === e.which) return o.trigger("click"), !1;
                }),
                s
                  .on("focus", "", function (e) {
                    e.preventDefault(), message.hide([n, t, i]);
                  })
                  .on("blur", "", function (e) {
                    e.preventDefault();
                  });
            })(e.eq(n));
        },
      };
    function evaluateCodeAfterFormSubmission(
      codeString,
      $emailFormObject,
      responseData
    ) {
      if (codeString && 0 !== codeString.length)
        try {
          var formDataSerialize = $emailFormObject.serialize(),
            formDataSerializeArray = $emailFormObject.serializeArray(),
            formDataKeyValue = $emailFormObject
              .serializeArray()
              .reduce(function (e, t) {
                return (e[t.name] = t.value), e;
              }, {});
          eval(codeString);
        } catch (e) {
          console.error(
            '⚠️ Your "after form submission" JS code has failed to execute.'
          ),
            console.error("The code: "),
            console.info(codeString),
            console.error("The error message: "),
            console.info(e);
        }
    }
    function redirectAfterFormSubmission(e, t, n, i) {
      void 0 !== e &&
        0 < e.length &&
        (-1 !== (e = e).indexOf(".") &&
          -1 === e.indexOf("http://") &&
          -1 === e.indexOf("https://") &&
          (e = "http://" + e),
        "True" === n && (e = -1 !== e.indexOf("?") ? e + "&" + i : e + "?" + i),
        window.open(e, "True" === t ? "_blank" : "_self"));
    }
    function openPopupAfterFormSubmission(e) {
      e && "" !== e && customPopup().openPopup(e);
    }
    submitNoIntegrationForm.init(),
      (window.unicornplatform.subscribeMailchimpForm = {
        init: function () {
          for (
            var e = $(".js-subscribe-mailchimp-form"), t = e.length, n = 0;
            n < t;
            n++
          )
            !(function (o) {
              var s = o.find(".js-engaging-message"),
                r = o.find(".js-success-message"),
                a = o.find(".js-error-message"),
                l = o.find(".js-submit-button"),
                e = o.find(".js-form-input"),
                t = e.not("textarea"),
                u = o.attr("data-redirect-url"),
                c = o.attr("data-redirect-target-blank"),
                d = o.attr("data-pass-values-redirect"),
                h = o.attr("data-success-code");
              const p = o.attr("data-custom-popup-id");
              function i() {
                if (!validateRequiredMultipleChoice(o)) {
                  (n = o.attr("action")),
                    (i = ""),
                    (i = n.replace(/post\?u=/i, "post-json?u="));
                  let e = (i += "&c=?");
                  let t = "application/json; charset=utf-8";
                  o.attr("data-validation") &&
                    ((e = o.attr("action")),
                    (t = "application/x-www-form-urlencoded; charset=UTF-8")),
                    button.showSpinner(l),
                    button.disableSubmit(l);
                  var n = o.serializeArray(),
                    i = getMarketingParameters("mailchimp"),
                    n = combineSameParams([...n, ...i]);
                  $.ajax({
                    type: o.attr("method"),
                    url: e,
                    data: n,
                    cache: !1,
                    dataType: "json",
                    contentType: t,
                  })
                    .done(function (e) {
                      "success" != e.result
                        ? (message.hide([r, s, a]),
                          message.show(a, e.msg),
                          button.stopSpinner(l),
                          button.enableSubmit(l))
                        : (message.hide([r, s, a]),
                          button.showSuccessTick(l),
                          setTimeout(function () {
                            button.stopSpinner(l);
                          }, 200),
                          setTimeout(function () {
                            button.removeSuccessTick(l), button.enableSubmit(l);
                          }, 3e3),
                          evaluateCodeAfterFormSubmission(h, o),
                          redirectAfterFormSubmission(u, c, d, o.serialize()),
                          openPopupAfterFormSubmission(p),
                          clearForm(o));
                    })
                    .fail(function (e) {
                      button.stopSpinner(l), button.enableSubmit(l);
                      let t =
                        "Uh. We could not connect to the server. Please try again later.";
                      e.responseJSON &&
                        e.responseJSON.error &&
                        (t = e.responseJSON.error),
                        message.hide([r, s, a]),
                        message.show(a, t),
                        console.log(e);
                    })
                    .always(function (e) {});
                }
              }
              o.on("submit", function (e) {
                e.preventDefault();
                const t = $(this);
                if (t.hasClass("js-has-captcha"))
                  if (t.hasClass("recap-done")) i($(this));
                  else {
                    const n = t.find(".g-recaptcha");
                    0 < n.length && grecaptcha.execute(n.data("widget-id"));
                  }
                else i($(this));
              }),
                t.on("keypress", "", function (e) {
                  if (13 === e.which) return l.trigger("click"), !1;
                }),
                e
                  .on("focus", "", function (e) {
                    e.preventDefault(), message.hide([r, s, a]);
                  })
                  .on("blur", "", function (e) {
                    e.preventDefault();
                  });
            })(e.eq(n));
        },
      }),
      window.unicornplatform.subscribeMailchimpForm.init(),
      (window.unicornplatform.subscribeZapierForm = {
        init: function () {
          for (
            var e = $(".js-subscribe-zapier-form"), t = e.length, n = 0;
            n < t;
            n++
          )
            !(function (n) {
              var i = n.find(".js-engaging-message"),
                o = n.find(".js-success-message"),
                s = n.find(".js-error-message"),
                r = n.find(".js-submit-button"),
                e = n.find(".js-form-input"),
                t = e.not("textarea"),
                a = n.attr("data-redirect-url"),
                l = n.attr("data-redirect-target-blank"),
                u = n.attr("data-pass-values-redirect");
              const c = n.attr("data-custom-popup-id");
              var d = n.attr("data-success-code");
              function h() {
                var e, t;
                validateRequiredMultipleChoice(n) ||
                  (button.showSpinner(r),
                  button.disableSubmit(r),
                  (t = n.serializeArray()),
                  (e = getMarketingParameters()),
                  (t = combineSameParams([...t, ...e])),
                  $.ajax({
                    type: n.attr("method"),
                    url: n.attr("action"),
                    data: t,
                    cache: !1,
                    dataType: "json",
                  })
                    .done(function (e) {
                      "success" !== e.status
                        ? (message.hide([o, i, s]),
                          message.show(
                            s,
                            "There is an unknown error. We are so sorry!"
                          ),
                          button.stopSpinner(r),
                          button.enableSubmit(r))
                        : (message.hide([o, i, s]),
                          button.showSuccessTick(r),
                          setTimeout(function () {
                            button.stopSpinner(r);
                          }, 200),
                          setTimeout(function () {
                            button.removeSuccessTick(r), button.enableSubmit(r);
                          }, 3e3),
                          evaluateCodeAfterFormSubmission(d, n),
                          redirectAfterFormSubmission(a, l, u, n.serialize()),
                          openPopupAfterFormSubmission(c),
                          clearForm(n));
                    })
                    .fail(function (e) {
                      button.stopSpinner(r), button.enableSubmit(r);
                      let t =
                        "Uh. We could not connect to the server. Please try again later.";
                      e.responseJSON &&
                        e.responseJSON.error &&
                        (t = e.responseJSON.error),
                        message.hide([o, i, s]),
                        message.show(s, t),
                        console.log(e);
                    })
                    .always(function (e) {}));
              }
              n.on("submit", function (e) {
                e.preventDefault();
                const t = $(this);
                if (t.hasClass("js-has-captcha"))
                  if (t.hasClass("recap-done")) h($(this));
                  else {
                    const n = t.find(".g-recaptcha");
                    0 < n.length && grecaptcha.execute(n.data("widget-id"));
                  }
                else h($(this));
              }),
                t.on("keypress", "", function (e) {
                  if (13 === e.which) return r.trigger("click"), !1;
                }),
                e
                  .on("focus", "", function (e) {
                    e.preventDefault(), message.hide([o, i, s]);
                  })
                  .on("blur", "", function (e) {
                    e.preventDefault();
                  });
            })(e.eq(n));
        },
      }),
      window.unicornplatform.subscribeZapierForm.init(),
      (window.unicornplatform.subscribeGoogleSheetForm = {
        init: function () {
          for (
            var e = $(".js-subscribe-google-sheet-form"), t = e.length, n = 0;
            n < t;
            n++
          )
            !(function (i) {
              var o = i.find(".js-engaging-message"),
                s = i.find(".js-success-message"),
                r = i.find(".js-error-message"),
                a = i.find(".js-submit-button"),
                e = i.find(".js-form-input"),
                t = e.not("textarea"),
                l = i.attr("data-redirect-url"),
                u = i.attr("data-redirect-target-blank"),
                c = i.attr("data-sheet-id"),
                d = i.attr("data-pass-values-redirect");
              const h = i.attr("data-custom-popup-id");
              var p = i.attr("data-success-code");
              function f() {
                if (!validateRequiredMultipleChoice(i)) {
                  button.showSpinner(a), button.disableSubmit(a);
                  var e = i.serializeArray(),
                    t = getMarketingParameters();
                  const n = combineSameParams([...e, ...t]);
                  (n.SHEET_ID = c),
                    $.ajax({
                      type: i.attr("method"),
                      url: i.attr("action"),
                      data: n,
                      cache: !1,
                      dataType: "json",
                    })
                      .done(function (e) {
                        "success" !== e.status
                          ? (message.hide([s, o, r]),
                            message.show(
                              r,
                              'There was an error. Perhaps you deleted the "ID" column or revoked access to the sheet? Re-adding the integration usually helps.'
                            ),
                            button.stopSpinner(a),
                            button.enableSubmit(a))
                          : (message.hide([s, o, r]),
                            button.showSuccessTick(a),
                            setTimeout(function () {
                              button.stopSpinner(a);
                            }, 200),
                            setTimeout(function () {
                              button.removeSuccessTick(a),
                                button.enableSubmit(a);
                            }, 3e3),
                            evaluateCodeAfterFormSubmission(p, i),
                            redirectAfterFormSubmission(l, u, d, i.serialize()),
                            openPopupAfterFormSubmission(h),
                            clearForm(i));
                      })
                      .fail(function (e) {
                        button.stopSpinner(a), button.enableSubmit(a);
                        let t =
                          'Uh. We could not connect to the server. Please try again later. Perhaps you deleted the "ID" column or revoked access to the sheet? Re-adding the integration usually helps.';
                        e.responseJSON &&
                          e.responseJSON.error &&
                          (t = e.responseJSON.error),
                          message.hide([s, o, r]),
                          message.show(r, t),
                          console.log(e);
                      })
                      .always(function (e) {});
                }
              }
              i.on("submit", function (e) {
                e.preventDefault();
                const t = $(this);
                if (t.hasClass("js-has-captcha"))
                  if (t.hasClass("recap-done")) f($(this));
                  else {
                    const n = t.find(".g-recaptcha");
                    0 < n.length && grecaptcha.execute(n.data("widget-id"));
                  }
                else f($(this));
              }),
                t.on("keypress", "", function (e) {
                  if (13 === e.which) return a.trigger("click"), !1;
                }),
                e
                  .on("focus", "", function (e) {
                    e.preventDefault(), message.hide([s, o, r]);
                  })
                  .on("blur", "", function (e) {
                    e.preventDefault();
                  });
            })(e.eq(n));
        },
      }),
      window.unicornplatform.subscribeGoogleSheetForm.init(),
      (window.unicornplatform.subscribeWebhookForm = {
        init: function () {
          for (
            var e = $(".js-subscribe-webhook-form"), t = e.length, n = 0;
            n < t;
            n++
          )
            !(function (i) {
              var o = i.find(".js-engaging-message"),
                s = i.find(".js-success-message"),
                r = i.find(".js-error-message"),
                a = i.find(".js-submit-button"),
                e = i.find(".js-form-input"),
                t = e.not("textarea"),
                l = i.attr("data-redirect-url"),
                u = i.attr("data-redirect-target-blank"),
                c = i.attr("data-pass-values-redirect");
              const d = i.attr("data-custom-popup-id");
              var h = i.attr("data-success-code");
              function p() {
                if (!validateRequiredMultipleChoice(i)) {
                  button.showSpinner(a), button.disableSubmit(a);
                  var e = i.serializeArray(),
                    t = getMarketingParameters(),
                    e = combineSameParams([...e, ...t]);
                  const n = {
                    type: i.attr("method"),
                    url: i.attr("action"),
                    data: e,
                    cache: !1,
                  };
                  window.uniCustomWebhookHeaders &&
                    (n.headers = window.uniCustomWebhookHeaders),
                    $.ajax(n)
                      .done(function (e) {
                        message.hide([s, o, r]),
                          button.showSuccessTick(a),
                          setTimeout(function () {
                            button.stopSpinner(a);
                          }, 200),
                          setTimeout(function () {
                            button.removeSuccessTick(a), button.enableSubmit(a);
                          }, 3e3),
                          evaluateCodeAfterFormSubmission(h, i, e),
                          redirectAfterFormSubmission(l, u, c, i.serialize()),
                          openPopupAfterFormSubmission(d),
                          clearForm(i);
                      })
                      .fail(function (e) {
                        button.stopSpinner(a), button.enableSubmit(a);
                        var t =
                          "Uh. We could not connect to the server. Please try again later.";
                        void 0 !== e.responseJSON &&
                          void 0 !== e.responseJSON.error &&
                          (t = e.responseJSON.error),
                          message.hide([s, o, r]),
                          message.show(r, t);
                      })
                      .always(function (e) {});
                }
              }
              i.on("submit", function (e) {
                e.preventDefault();
                const t = $(this);
                if (t.hasClass("js-has-captcha"))
                  if (t.hasClass("recap-done")) p($(this));
                  else {
                    const n = t.find(".g-recaptcha");
                    0 < n.length && grecaptcha.execute(n.data("widget-id"));
                  }
                else p($(this));
              }),
                t.on("keypress", "", function (e) {
                  if (13 === e.which) return a.trigger("click"), !1;
                }),
                e
                  .on("focus", "", function (e) {
                    e.preventDefault(), message.hide([s, o, r]);
                  })
                  .on("blur", "", function (e) {
                    e.preventDefault();
                  });
            })(e.eq(n));
        },
      }),
      window.unicornplatform.subscribeWebhookForm.init(),
      (window.unicornplatform.subscribeSendToEmailForm = {
        init: function () {
          for (
            var e = $(".js-subscribe-email-form"), t = e.length, n = 0;
            n < t;
            n++
          )
            !(function (n) {
              var i = n.find(".js-engaging-message"),
                o = n.find(".js-success-message"),
                s = n.find(".js-error-message"),
                r = n.find(".js-submit-button"),
                e = n.find(".js-form-input"),
                t = e.not("textarea"),
                a = n.attr("data-redirect-url"),
                l = n.attr("data-redirect-target-blank"),
                u = n.attr("data-pass-values-redirect");
              const c = n.attr("data-custom-popup-id");
              var d = n.attr("data-success-code");
              function h() {
                var e, t;
                validateRequiredMultipleChoice(n) ||
                  (button.showSpinner(r),
                  button.disableSubmit(r),
                  (t = n.serializeArray()),
                  (e = getMarketingParameters()),
                  (t = combineSameParams([...t, ...e])),
                  $.ajax({
                    type: n.attr("method"),
                    url: n.attr("action"),
                    data: t,
                    cache: !1,
                  })
                    .done(function (e) {
                      message.hide([o, i, s]),
                        button.showSuccessTick(r),
                        setTimeout(function () {
                          button.stopSpinner(r);
                        }, 200),
                        setTimeout(function () {
                          button.removeSuccessTick(r), button.enableSubmit(r);
                        }, 3e3),
                        evaluateCodeAfterFormSubmission(d, n),
                        redirectAfterFormSubmission(a, l, u, n.serialize()),
                        openPopupAfterFormSubmission(c),
                        clearForm(n);
                    })
                    .fail(function (e) {
                      button.stopSpinner(r), button.enableSubmit(r);
                      var t =
                        "Uh. We could not connect to the server. Please try again later.";
                      void 0 !== e.responseJSON &&
                        void 0 !== e.responseJSON.error &&
                        (t = e.responseJSON.error),
                        message.hide([o, i, s]),
                        message.show(s, t);
                    })
                    .always(function (e) {}));
              }
              n.on("submit", function (e) {
                e.preventDefault();
                const t = $(this);
                if (t.hasClass("js-has-captcha"))
                  if (t.hasClass("recap-done")) h($(this));
                  else {
                    const n = t.find(".g-recaptcha");
                    0 < n.length && grecaptcha.execute(n.data("widget-id"));
                  }
                else h($(this));
              }),
                t.on("keypress", "", function (e) {
                  if (13 === e.which) return r.trigger("click"), !1;
                }),
                e
                  .on("focus", "", function (e) {
                    e.preventDefault(), message.hide([o, i, s]);
                  })
                  .on("blur", "", function (e) {
                    e.preventDefault();
                  });
            })(e.eq(n));
        },
      }),
      window.unicornplatform.subscribeSendToEmailForm.init(),
      (window.unicornplatform.subscribeSendToMailerliteForm = {
        init: function () {
          for (
            var e = $(".js-subscribe-mailerlite-form"), t = e.length, n = 0;
            n < t;
            n++
          )
            !(function (n) {
              var i = n.find(".js-engaging-message"),
                o = n.find(".js-success-message"),
                s = n.find(".js-error-message"),
                r = n.find(".js-submit-button"),
                e = n.find(".js-form-input"),
                t = e.not("textarea"),
                a = n.attr("data-redirect-url"),
                l = n.attr("data-redirect-target-blank"),
                u = n.attr("data-pass-values-redirect");
              const c = n.attr("data-custom-popup-id");
              var d = n.attr("data-success-code");
              function h() {
                var e, t;
                validateRequiredMultipleChoice(n) ||
                  (button.showSpinner(r),
                  button.disableSubmit(r),
                  (t = n
                    .serializeArray()
                    .map(({ name: e, value: t }) =>
                      "g-recaptcha-response" === e
                        ? { name: e, value: t }
                        : { name: `fields[${e.toLowerCase()}]`, value: t }
                    )),
                  (e = getMarketingParameters("mailerlite")),
                  (t = combineSameParams([...t, ...e])),
                  $.ajax({
                    type: n.attr("method"),
                    url: n.attr("action"),
                    data: t,
                    cache: !1,
                  })
                    .done(function (e) {
                      message.hide([o, i, s]),
                        button.showSuccessTick(r),
                        setTimeout(function () {
                          button.stopSpinner(r);
                        }, 200),
                        setTimeout(function () {
                          button.removeSuccessTick(r), button.enableSubmit(r);
                        }, 3e3),
                        evaluateCodeAfterFormSubmission(d, n),
                        redirectAfterFormSubmission(a, l, u, n.serialize()),
                        openPopupAfterFormSubmission(c),
                        clearForm(n);
                    })
                    .fail(function (e) {
                      button.stopSpinner(r), button.enableSubmit(r);
                      var t =
                        "Uh. We could not connect to the server. Please try again later.";
                      void 0 !== e.responseJSON &&
                        void 0 !== e.responseJSON.error &&
                        (t = e.responseJSON.error),
                        message.hide([o, i, s]),
                        message.show(s, t);
                    })
                    .always(function (e) {}));
              }
              n.on("submit", function (e) {
                e.preventDefault();
                const t = $(this);
                if (t.hasClass("js-has-captcha"))
                  if (t.hasClass("recap-done")) h($(this));
                  else {
                    const n = t.find(".g-recaptcha");
                    0 < n.length && grecaptcha.execute(n.data("widget-id"));
                  }
                else h($(this));
              }),
                t.on("keypress", "", function (e) {
                  if (13 === e.which) return r.trigger("click"), !1;
                }),
                e
                  .on("focus", "", function (e) {
                    e.preventDefault(), message.hide([o, i, s]);
                  })
                  .on("blur", "", function (e) {
                    e.preventDefault();
                  });
            })(e.eq(n));
        },
      }),
      window.unicornplatform.subscribeSendToMailerliteForm.init(),
      (window.unicornplatform.roadmapScroll = {
        init: function () {
          var e,
            t,
            n = $("#js-roadmap-wrapper");
          0 < n.length &&
            ((e = 700),
            isMobile() && (e = 150),
            (t =
              (t = $(".js-roadmap-item")).length * (t.eq(0).width() + 60) + e),
            $(".js-roadmap-box").css("width", t),
            isMobile() || n.kinetic({ maxvelocity: 30 }));
        },
      }),
      window.unicornplatform.roadmapScroll.init(),
      (window.unicornplatform.slider = {
        init: function () {
          for (
            var e = $(".js-slider"), t = e.length, n = "", i = 0;
            i < t;
            i++
          ) {
            var n = e.eq(i),
              o = JSON.parse(n.attr("data-slider-config")),
              s = n.parent().find(".js-prev-arrow"),
              r = n.parent().find(".js-next-arrow");
            0 < s.length && 0 < r.length
              ? ((o.prevArrow = s), (o.nextArrow = r))
              : (o.arrows = !1),
              n.hasClass("slick-initialized") || n.slick(o);
          }
        },
      }),
      window.unicornplatform.slider.init(),
      (window.unicornplatform.tabs = (function () {
        var t, c;
        function d(e) {
          for (
            var t,
              n = e.find(".js-tab-content-item"),
              i = 0,
              o = n.length,
              s = 0;
            s < o;
            s++
          )
            i < (t = n.eq(s).outerHeight()) && (i = t);
          20 < i && e.css({ height: i });
        }
        function n() {
          for (var e = 0; e < c; e++) d(t.eq(e));
        }
        function e() {
          var e, u;
          n(),
            (e = !1),
            window.addEventListener("resize", function () {
              clearTimeout(e), (e = setTimeout(n, 350));
            }),
            (u = setInterval(function () {
              if ($(".js-tabs-item-list.state-loaded").length === c)
                clearInterval(u);
              else
                for (
                  var e = $(".js-tabs-item-list:not(.state-loaded)"),
                    t = e.length,
                    n = 0;
                  n < t;
                  n++
                ) {
                  for (
                    var i = e.eq(n),
                      o = i.find(".js-tab-content-item"),
                      s = o.length,
                      r = 0;
                    r < s;
                    r++
                  ) {
                    var a = o.eq(r),
                      l = a.find("img");
                    (0 === l.length ||
                      (!1 === a.hasClass("state-loaded") && l[0].complete)) &&
                      a.addClass("state-loaded");
                  }
                  s === i.find(".js-tab-content-item.state-loaded").length &&
                    (i.addClass("state-loaded"), d(i));
                }
            }, 500));
        }
        return {
          init: function () {
            (t = $(".js-tabs-item-list")),
              0 < (c = t.length) && e(),
              $(document).on("click", ".js-open-tab", function (e) {
                if ((e.preventDefault(), $(this).hasClass("state-active-tab")))
                  return !1;
                var e = $(this).attr("data-index"),
                  t = $(this).attr("data-group");
                $('.js-open-tab[data-group="' + t + '"]').removeClass(
                  "state-active-tab"
                ),
                  $(this).addClass("state-active-tab"),
                  $('.js-tab-content[data-group="' + t + '"]').removeClass(
                    "state-active-tab"
                  ),
                  $(
                    '.js-tab-content[data-group="' +
                      t +
                      '"][data-index="' +
                      e +
                      '"]'
                  ).addClass("state-active-tab");
              });
          },
          setAll: n,
        };
      })()),
      window.unicornplatform.tabs.init();
    var showContentOnClick = {
        bind: function () {
          $(document).on(
            "mouseenter",
            ".js-hover-to-show-sibling",
            function (e) {
              e.preventDefault(),
                $(this)
                  .siblings(".js-content-to-show")
                  .addClass("state-visible");
            }
          ),
            $(document).on(
              "mouseleave",
              ".js-hover-to-show-sibling",
              function (e) {
                e.preventDefault(),
                  $(this)
                    .siblings(".js-content-to-show")
                    .removeClass("state-visible");
              }
            );
        },
      },
      clipboard = (showContentOnClick.bind(), new ClipboardJS(".js-copy-text")),
      faqToggle =
        (clipboard.on("success", function (e) {
          var t = $(e.trigger);
          button.showSuccessTick(t),
            button.disableSubmit(t),
            setTimeout(function () {
              button.removeSuccessTick(t), button.enableSubmit(t);
            }, 3e3);
        }),
        clipboard.on("error", function (e) {
          console.error("Copy action error: ", e.action),
            console.error("Trigger:", e.trigger);
        }),
        {
          init: function () {
            $(document).on("click", ".js-open-faq", function (e) {
              e.preventDefault(),
                $(this).find(".js-faq-item").slideToggle(200),
                $(this).toggleClass("state-active");
            }),
              $(document).on("click", ".js-open-faq a", function (e) {
                e.stopPropagation();
              });
          },
        }),
      openMenu =
        (faqToggle.init(),
        (function () {
          var n = $("body");
          function i(e, t) {
            e.removeClass("state-opened-menu"),
              t.removeClass("state-active-burger"),
              n.removeClass("state-fixed-body");
          }
          return {
            bind: function () {
              $(document).on("click", ".js-open-menu", function (e) {
                e.preventDefault();
                var t,
                  e = $(this).parents(".js-menu");
                $(this).hasClass("state-active-burger")
                  ? i(e, $(this))
                  : ((e = e),
                    (t = $(this)),
                    e.addClass("state-opened-menu"),
                    t.addClass("state-active-burger"),
                    n.addClass("state-fixed-body"));
              });
            },
            close: i,
          };
        })()),
      toggleDropdown =
        (openMenu.bind(),
        (function () {
          function i(e) {
            e.removeClass("state-opened-dropdown");
          }
          return {
            bind: function () {
              var n = $(".js-toggle-dropdown");
              $(document).on("click", ".js-toggle-dropdown", function (e) {
                var t = $(this);
                $(this).hasClass("state-opened-dropdown")
                  ? i(t)
                  : (i(n), t.addClass("state-opened-dropdown"));
              }),
                $(document).on("click", function (e) {
                  !0 !== $(e.target).hasClass("js-toggle-dropdown") &&
                    1 !== $(e.target).parents(".js-toggle-dropdown").length &&
                    i(n);
                });
            },
            close: i,
          };
        })()),
      scrollDown =
        (toggleDropdown.bind(),
        {
          bind: function () {
            $(document).on("click", ".js-scroll-down", function (e) {
              e.preventDefault();
              (e = $(this).parents(".js-scroll-this-box")),
                (e = e.outerHeight() + e.position().top);
              $("html, body").animate({ scrollTop: e }, 450);
            });
          },
        }),
      highlightHeadingWord =
        (scrollDown.bind(),
        {
          init: function () {
            $(".js-scroll-down").addClass("state-active");
          },
        }),
      interactions =
        (highlightHeadingWord.init(),
        {
          bind: function () {
            $(document).on("click", ".js-toggle-animation", function (e) {
              e.preventDefault(), $(this).toggleClass("state-active-animation");
            });
          },
        }),
      lightbox =
        (interactions.bind(),
        {
          bind: function () {
            $(document).on("click", ".js-lightbox-single-image", function (e) {
              e.preventDefault();
              var e = document.querySelectorAll(".pswp")[0],
                t = $(this).attr("src"),
                n = $(this).attr("data-height"),
                i = $(this).attr("data-width");
              new PhotoSwipe(
                e,
                PhotoSwipeUI_Default,
                [{ src: t, w: i, h: n }],
                {
                  index: 0,
                  closeEl: !0,
                  captionEl: !0,
                  fullscreenEl: !1,
                  zoomEl: !1,
                  shareEl: !1,
                  counterEl: !1,
                  arrowEl: !0,
                  preloaderEl: !0,
                  history: !1,
                }
              ).init();
            });
          },
        });
    lightbox.bind();
    const customPopup = () => {
      const n = (e, t = 0, n = !1) => {
          e = e.replace("#", "");
          if (n) {
            if (sessionStorage.getItem(e)) return;
            sessionStorage.setItem(e, !0);
          }
          const i = $("#" + e);
          setTimeout(() => {
            i.fadeIn(150),
              $(".js-custom-popup-mask").fadeIn(200),
              0 !== i.length && $("body").addClass("state-fixed-body_popup");
          }, 1e3 * t);
        },
        i = () => {
          $(".js-custom-popup").fadeOut(100),
            $(".js-custom-popup-mask").fadeOut(100),
            $("body").removeClass("state-fixed-body_popup");
        };
      return {
        bindOpen: () => {
          $(document).on("click", ".js-open-custom-popup-button", function (e) {
            e.preventDefault();
            var t = $(this).attr("data-custom-popup-id");
            n(t), e.stopImmediatePropagation();
          });
        },
        bindClose: () => {
          $(document).on(
            "click",
            ".js-close-custom-popup-button",
            function (e) {
              e.preventDefault(), i();
            }
          ),
            $(document).on("keydown", function (e) {
              var t =
                0 !==
                $(".js-custom-popup:not(.popup-component__editor)").length;
              "Escape" === e.key && t && i();
            });
        },
        openPopup: n,
        closeAllPopups: i,
      };
    };
    customPopup().bindOpen(),
      customPopup().bindClose(),
      (window.unicornplatform.openPopup = customPopup().openPopup),
      (window.unicornplatform.closeAllPopups = customPopup().closeAllPopups);
    var scrollTo = {
        init: function () {
          $(document).on(
            "click",
            'a[href^="#"]:not([href="#"]), a[href^="/#"]:not([href="/#"]), .js-scroll-to-id',
            function (e) {
              var t = $(this).attr("href");
              if ("/" === window.location.pathname || -1 === t.indexOf("/#")) {
                e.preventDefault();
                (e = "#" + t.split("#")[1]), (t = $(e));
                const n = $(".nav-02--sticky");
                (e = n.outerHeight() || 0),
                  (t = t.offset().top - e),
                  (e =
                    ($("html, body").animate({ scrollTop: t }, 400),
                    $(".js-menu.state-opened-menu"))),
                  (t = $(".js-open-menu.state-active-burger"));
                0 < e.length && 0 < t.length && openMenu.close(e, t);
              }
            }
          );
        },
      },
      showError =
        (scrollTo.init(),
        {
          showManually: function (e) {
            void 0 !== e && $(".js-form-error-message").text(e),
              $(".js-form-error-box").addClass("state-visible");
          },
          showAutomatically: function () {
            var e = getUrlParameter("error_message");
            0 < e.length &&
              ($(".js-form-error-box").addClass("state-visible"),
              $(".js-form-error-message").text(e));
          },
        }),
      popup =
        (showError.showAutomatically(),
        (window.unicornplatform.stripeCheckout = {
          bind: function () {
            $(document).on("click", "[data-stripe-product-id]", function (e) {
              var t, n, i, o, s, r;
              void 0 !== window.Stripe &&
                void 0 !== window.stripe_public_api_key &&
                "" !== window.stripe_public_api_key &&
                ((r = (t = $(this)).attr("data-stripe-product-id")),
                (n = t.attr("data-successful-payment-url")),
                (i = t.attr("data-cancel-payment-url")),
                ("" !== n && void 0 !== n) ||
                  (n = window.location.href + "?popup_id=successful_payment"),
                ("" !== i && void 0 !== i) ||
                  (i = window.location.href + "?popup_id=cancelled_payment"),
                r &&
                  "" !== r &&
                  (e.preventDefault(),
                  (e = Stripe(window.stripe_public_api_key)),
                  (s = [{ quantity: 1 }]),
                  "plan" === (o = r.split("_")[0])
                    ? (s[0].plan = r)
                    : "sku" === o
                    ? (s[0].sku = r)
                    : "price" === o
                    ? (s[0].price = r)
                    : (alert(
                        "Stripe integration error: wrong product ID was used. Please take a careful look at our guide and copy proper product ID: https://help.unicornplatform.com/en/article/stripe-checkout-integration-1ji5u1/"
                      ),
                      console.error(
                        "A message for the website owner: there has been a mistake in setting up your Stripe integration. Please contact the Unicorn Platform support crew."
                      )),
                  "price" === o
                    ? ((r = t.attr("data-stripe-mode")),
                      e
                        .redirectToCheckout({
                          lineItems: s,
                          mode: r,
                          successUrl: n,
                          cancelUrl: i,
                        })
                        .then(function (e) {
                          e.error &&
                            alert(
                              'The purchase ended up with an error: "' +
                                e.error.message +
                                '" We are sorry.'
                            );
                        }))
                    : e
                        .redirectToCheckout({
                          items: s,
                          successUrl: n,
                          cancelUrl: i,
                        })
                        .then(function (e) {
                          e.error &&
                            alert(
                              'The purchase ended up with an error: "' +
                                e.error.message +
                                '" We are sorry.'
                            );
                        })));
            });
          },
        }),
        window.unicornplatform.stripeCheckout.bind(),
        (function () {
          var t = {
            openSpeed: 150,
            closeSpeed: 50,
            loading: "",
            afterClose: function () {
              var e = { Title: document.title, Url: removeParam("popup_id") };
              history.pushState(e, e.Title, e.Url);
            },
          };
          function n(e) {
            var e = $("#" + e),
              t = e;
            return (t = 0 === e.length ? $("#no_such_popup") : t);
          }
          return {
            openOnPageLoad: function () {
              var e = getUrlParameter("popup_id");
              e && "" !== e && $.featherlight(n(e), t);
            },
            bind: function () {
              $(document).on("click", ".js-open-popup", function (e) {
                e.preventDefault();
                e = $(this).attr("data-popup-id");
                $(this).featherlight(n(e), t);
              });
            },
          };
        })()),
      loadMore,
      $overlayList =
        (popup.openOnPageLoad(),
        popup.bind(),
        null !== localStorage.getItem("allBlogPosts") &&
          ((loadMore = (function () {
            var o = $(".js-post-item"),
              s = $(".js-posts-list"),
              r = o.length,
              a = JSON.parse(localStorage.getItem("allBlogPosts"));
            return {
              bind: function () {
                var t = (a.length - r) / 5;
                $(document).on("click", "#js-load-more", function (e) {
                  if ((e.preventDefault(), 0 < t)) {
                    for (var n = r; n < r + 5 && n < a.length; n++) {
                      var i = o.clone().eq(0);
                      if (
                        (i.find(".js-post-item__img").attr("srcset", null),
                        i.find(".js-post-item__img").attr("sizes", null),
                        i.attr("href", a[n].url),
                        a[n].og_image_url || a[n].first_image_url)
                      ) {
                        let e = a[n].post_thumbnail_srcdict_big,
                          t =
                            (n % 5 != 0 &&
                              (e = a[n].post_thumbnail_srcdict_small),
                            a[n].og_image_url || a[n].first_image_url);
                        e && e.src && (t = e.src),
                          i.find(".js-post-item__img").attr("src", t),
                          e &&
                            e.srcset &&
                            i
                              .find(".js-post-item__img")
                              .attr("srcset", e.srcset),
                          e &&
                            e.sizes &&
                            i.find(".js-post-item__img").attr("sizes", e.sizes);
                      } else
                        i.find(".js-post-item__img").attr("src", null),
                          i
                            .find(".js-post-item__img")
                            .addClass("post-item__img-pattern");
                      i.find(".js-post-item__title").text(a[n].title),
                        a[n].thumbnail_alt
                          ? i
                              .find(".js-post-item__img")
                              .attr("alt", a[n].thumbnail_alt)
                          : i.find(".js-post-item__img").removeAttr("alt"),
                        s.append(i);
                    }
                    (r += 5),
                      t <= 1 && $(".js-load-more-wrapper").hide(),
                      (t -= 1);
                  }
                });
              },
            };
          })()),
          loadMore.bind()),
        $("#js-overlay-list"));
    setTimeout(function () {
      var n, i, o, s;
      $overlayList.hasClass("read-more-zoom") &&
        ((n = $("#js-read-more")),
        (i = $(".js-nav")),
        (o = $(window).height()),
        (s = $overlayList.height()),
        i.css({ transition: "0.6s cubic-bezier(0.33, 1, 0.68, 1)" }),
        $(window).on("scroll", function () {
          var e = n.offset().top,
            t = $(this).scrollTop();
          o < s
            ? e - o < t
              ? ($overlayList.css("transform", "scale(0.92) translateY(-60px)"),
                i.css({ opacity: "0", visibility: "hidden" }))
              : ($overlayList.css("transform", "scale(1)"),
                i.css({ opacity: "1", visibility: "visible" }))
            : s < o &&
              (0 < t
                ? ($overlayList.css(
                    "transform",
                    "scale(0.92) translateY(-60px)"
                  ),
                  i.css({ opacity: "0", visibility: "hidden" }))
                : ($overlayList.css("transform", "scale(1)"),
                  i.css({ opacity: "1", visibility: "visible" })));
        }));
    }, 500);
    const slugifyNew = (e) =>
        window.slugify(
          (e || "")
            .toString()
            .replace(/[!@#$%^&*(),.?":{}|<>`\\/=+_;'\[\]~]/g, "-"),
          { lower: !0 }
        ),
      filterRowsByFieldsFn = (o, e, t) => {
        var n = (e) => {
          let t = !1,
            n = e;
          if ((e.startsWith("-") && ((n = e.slice(1)), (t = !0)), !(n in o)))
            return !0;
          const i = (o[n] || "").toString().trim();
          return !i || "false" === i.toLowerCase() ? t : !t;
        };
        if ("string" != typeof e || !e.trim()) return !0;
        const i = e.split(";").map((e) => e.trim());
        return "any" === t ? i.some(n) : i.every(n);
      },
      filterRowsByCategoryFn = (e, t, n, i) => {
        if ("no_tags" === n) return !0;
        if (0 === t.length) return !0;
        const o = e[n];
        if (!o) return !1;
        const s = o
          .toString()
          .split(";")
          .map((e) => e.trim());
        return "all" === i
          ? t.every((e) => s.includes(e))
          : s.some((e) => t.includes(e));
      },
      convertToNumber = (e) => {
        if ("string" != typeof e) return parseFloat(e);
        let t = e.replace(/KKK$/i, "B").replace(/KK$/i, "M").replace(/,/g, "");
        return t.toLowerCase().endsWith("k")
          ? 1e3 * parseFloat(t.slice(0, -1))
          : t.toLowerCase().endsWith("m")
          ? 1e6 * parseFloat(t.slice(0, -1))
          : t.toLowerCase().endsWith("b")
          ? 1e9 * parseFloat(t.slice(0, -1))
          : parseFloat(t);
      },
      formatGoogleSheetUrl = (e) => {
        if ("string" != typeof e) return e;
        if (!e.startsWith("https://docs.google.com/spreadsheets/d/e/"))
          return e;
        var t = "output=csv";
        return e
          .replace("pubhtml", "pub?" + t)
          .replace("output=tsv", t)
          .replace("output=pdf", t)
          .replace("output=xlsx", t)
          .replace("output=ods", t);
      },
      sortPrimitivesFn = (e, t) => {
        return isNaN(convertToNumber(e)) || isNaN(convertToNumber(t))
          ? e.toString().toLowerCase().localeCompare(t.toString().toLowerCase())
          : (e = convertToNumber(e)) - (t = convertToNumber(t));
      },
      checkIfStringContainsProtocol = (e) => {
        const t = new RegExp("^(?:[a-z]+:)?//", "i");
        return t.test(e);
      };
    function replaceWithObjectValues(e, s, r, a, l) {
      return e
        ? e.toString().replace(/\{\{(\w+)\}\}/g, function (e, t) {
            let n = t.toLowerCase();
            var t = "dynamicurl" === n,
              i = "dynamictarget" === n;
            t && (n = r);
            let o = s[n];
            return (
              t &&
                !checkIfStringContainsProtocol(o) &&
                ((o = slugifyNew(o)).startsWith("/") || (o = "/" + o),
                a && "no_prefix" !== a && (o = "/" + a + o)),
              (o = i ? ("same_tab" === l ? "_self" : "_blank") : o)
            );
          })
        : "";
    }
    const unescapeCommas = (n) =>
      Object.keys(n).reduce(
        (e, t) => (
          "string" != typeof n[t]
            ? (e[t] = n[t])
            : (e[t] = n[t].replace(/&comma;/g, ",")),
          e
        ),
        {}
      );
    function showAll(e) {
      e.find(".directory-item-parent").show(),
        e.find(".directory-01__show-more-box").hide();
    }
    const initDirectory = (d) => {
        const h = d.parents(".page-component__bg_image_box").attr("id");
        d.parents(".uni-is-dark-bg").length;
        const e = formatGoogleSheetUrl(d.data("cmsurl")),
          p = d.data("directoryitemhtml"),
          f = d.data("sortingfield"),
          m = d.data("searchplaceholder"),
          g = d.data("filterfields"),
          v = d.data("categorycolumn"),
          y = d.data("filteredtagsmode"),
          b = d.data("filterfieldsmode"),
          _ = d.data("sortingorder"),
          w = d.data("showmorebuttontext"),
          k = d.data("dynamicurl"),
          x = d.data("dynamictarget"),
          C = d.data("dynamicurlprefix");
        var t = d.data("buttonversion");
        const S = 2 <= parseInt(t),
          T = "true" === d.data("istagshidden").toString().toLowerCase();
        let A = [],
          E =
            ((A = d
              .data("filteredtags")
              .toString()
              .split(";")
              .map((e) => e.trim())
              .filter((e) => e)),
            parseInt(d.data("maxitems")));
        if (
          (isNaN(E) && (E = 4),
          !e || (!e.startsWith("https://") && !e.startsWith("http://")))
        ) {
          const n = d.find(".directory-01__items");
          return n.html(""), void d.removeClass("dir-is-loading");
        }
        fetch(e)
          .then((e) => {
            if (e.ok) return e.text();
            throw (console.error(e), new Error());
          })
          .then((e) => {
            let n = [],
              t = [],
              i = "text",
              o = null;
            try {
              o = JSON.parse(e);
            } catch (e) {}
            o &&
              (Array.isArray(o) && (i = "jsonArray"),
              isKeyValue(o) && (i = "jsonObject")),
              (t =
                "jsonArray" === i
                  ? o.map((e) => lowerCaseKeys(e))
                  : "jsonObject" === i
                  ? [lowerCaseKeys(o)]
                  : window.Papa.parse(e, { header: !0 }).data.map((e) =>
                      lowerCaseKeys(unescapeCommas(e))
                    )).forEach((e) => {
                "title" in e && (e.slugified_title = slugifyNew(e.title));
              }),
              (t = (t = t.filter((e) => filterRowsByFieldsFn(e, g, b))).filter(
                (e) => filterRowsByCategoryFn(e, A, v, y)
              )).sort((e, t) => {
                if (!f) return 0;
                if ("no_sorting" === f) return 0;
                if ("random_sorting" === f) return Math.random() - 0.5;
                if ("string" != typeof f) return 0;
                let n = f.toLowerCase(),
                  i = !1;
                if (
                  (f.startsWith("-") &&
                    ((n = f.slice(1).toLowerCase()), (i = !0)),
                  "descending" === _ && (i = !i),
                  !Object.keys(e).includes(n))
                )
                  return 0;
                if (!Object.keys(t).includes(n)) return 0;
                let o = e[n],
                  s = t[n];
                return isNaN(convertToNumber(o)) || isNaN(convertToNumber(s))
                  ? i
                    ? s.toString().localeCompare(o)
                    : o.toString().localeCompare(s)
                  : ((o = convertToNumber(o)),
                    (s = convertToNumber(s)),
                    i ? s - o : o - s);
              }),
              window.uniDirectoryData
                ? (window.uniDirectoryData[h] = t)
                : (window.uniDirectoryData = { [h]: t });
            const s = d.find(".directory-01__items"),
              r =
                (s.html(""),
                t.forEach((i, e) => {
                  let t = "";
                  var n = `data-category="${
                      "no_tags" === v ? "No tags" : i[v]
                    }"`,
                    e = `<li class="${Object.keys(i).reduce((e, t) => {
                      const n = (i[t] || "").toString().trim();
                      return n && "false" !== n.toString().toLowerCase()
                        ? e +
                            " dir-has-" +
                            t.toString().trim().replace(/ /g, "-")
                        : e;
                    }, "directory-item-parent")}" ${(t =
                      e >= E
                        ? "style='display:none;'"
                        : t)} ${n}>${replaceWithObjectValues(
                      p,
                      i,
                      k,
                      C,
                      x
                    )}</li>`;
                  s.append(e);
                }),
                d.find(".directory-01__search-box")),
              a =
                (t && 0 < t.length && m && r.show(),
                r.find(".directory-01__search-input"));
            if (
              (a.attr(
                "placeholder",
                (m || "").replace(/\{\{amount\}\}/g, t.length)
              ),
              a.on("keyup", function () {
                showAll(d);
                const i = $(this).val().toLowerCase();
                if (
                  (d.find(".directory-item-parent").each(function () {
                    const e = $(this),
                      t = e.text().toLowerCase(),
                      n = e.data("category");
                    !i ||
                    t.includes(i) ||
                    ("no_tags" !== v &&
                      n &&
                      n.toString().toLowerCase().includes(i))
                      ? e.show()
                      : e.hide();
                  }),
                  0 < n.length)
                ) {
                  const e = d.find(".directory-01__tags-box");
                  e.children().removeClass("is-selected"),
                    e.find('[data-category="All"]').addClass("is-selected"),
                    e.children().each(function () {
                      const e = $(this),
                        t = e.data("category");
                      !i || t.toString().toLowerCase().includes(i)
                        ? e.show()
                        : e.hide();
                    });
                }
              }),
              T ||
                "no_tags" === v ||
                t.forEach((e) => {
                  const t = e[v];
                  t &&
                    n.push(
                      ...t
                        .toString()
                        .split(";")
                        .map((e) => e.trim())
                    );
                }),
              (n = [...new Set(n)]),
              (n = 0 < A.length ? n.filter((e) => A.includes(e)) : n).sort(
                sortPrimitivesFn
              ),
              1 < n.length)
            ) {
              d.removeClass("directory-01--tags-hidden");
              const u = d.find(".directory-01__tags-box"),
                c = (u.show(), ["All", ...n]);
              c.forEach((e) => {
                u.append(
                  `<button class="directory-01__tag-button" data-category="${e}">${e}</button>`
                );
              }),
                u.find('[data-category="All"]').addClass("is-selected"),
                u.children().on("click", function () {
                  showAll(d);
                  const e = $(this),
                    n =
                      (u.children().removeClass("is-selected"),
                      e.addClass("is-selected"),
                      e.data("category"));
                  "All" !== n &&
                    d.find(".directory-item-parent").each(function () {
                      const e = $(this),
                        t = e.data("category");
                      t &&
                      t
                        .toString()
                        .toLowerCase()
                        .split(";")
                        .map((e) => e.trim())
                        .includes(n.toString().toLowerCase())
                        ? e.show()
                        : e.hide();
                    });
                });
            }
            const l = d.find(".directory-01__show-more-box");
            (!w && S) || (t.length > E && l.show()),
              l.find(".button").on("click", () => {
                showAll(d);
              }),
              d.removeClass("dir-is-loading"),
              window.uniOnDirectorySuccess &&
                "function" == typeof window.uniOnDirectorySuccess &&
                window.uniOnDirectorySuccess();
          })
          .catch((e) => {
            console.error("Directory error:", e),
              window.uniOnDirectoryError &&
                "function" == typeof window.uniOnDirectoryError &&
                window.uniOnDirectoryError();
          });
      },
      $directories = $(".js-directory");
    $directories.each(function () {
      initDirectory($(this));
    }),
      $(".chosen-select").each(function () {
        const e = $(this);
        var t = e.data("noresultstext") || "No results match";
        e.chosen({
          hide_results_on_select: !1,
          width: "100%",
          no_results_text: t,
        });
      });
  });
var widgets = {
    bindClose: function () {
      $(document).on("click", ".js-close-widget", function (e) {
        e.preventDefault();
        e = $(this).attr("data-widget-id");
        $("#" + e).toggleClass("state-visible"),
          (localStorage["unicorn-widget-" + e] = "hidden");
      });
    },
    bindInit: function () {
      var e,
        t = $(".js-widget");
      0 < t.length &&
        ((e = t.attr("id")),
        "hidden" !== localStorage["unicorn-widget-" + e] &&
          setTimeout(function () {
            t.toggleClass("state-visible");
          }, 2e3));
    },
  },
  languageSwitchHreflangs =
    (widgets.bindClose(),
    widgets.bindInit(),
    {
      bind: function () {
        if (0 < $(".js-lang-widget").length) {
          let n = $(".js-language-link");
          if (0 < n.length) {
            let t = $('link[rel="alternate"]');
            if (0 < t.length)
              for (let e = 0; e < t.length; e++) {
                var i = t.eq(e).attr("hreflang"),
                  o = t.eq(e).attr("href");
                if (i && "" !== i && o && "" !== o)
                  for (let t = 0; t < n.length; t++) {
                    let e = n.eq(t);
                    e.attr("data-lang-code") === i && e.attr("href", o);
                  }
              }
          }
        }
      },
    });
languageSwitchHreflangs.bind();
