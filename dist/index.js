!(function (e, t) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = t(require("react"));
  else if ("function" == typeof define && define.amd) define(["react"], t);
  else {
    var o = "object" == typeof exports ? t(require("react")) : t(e.react);
    for (var r in o) ("object" == typeof exports ? exports : e)[r] = o[r];
  }
})(self, function (e) {
  return (() => {
    "use strict";
    var t = {
        515: (e, t, o) => {
          o.d(t, { Z: () => i });
          var r = o(81),
            n = o.n(r),
            a = o(645),
            c = o.n(a)()(n());
          c.push([
            e.id,
            ".Button{display:inline-flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-content:center;align-items:center;position:relative;cursor:pointer;outline:none;user-select:none;text-align:center;white-space:nowrap;transform:scale(1);transition:background,width,color,transform .25s ease;border:2px;border-radius:.5rem;font-family:Nunito,Helvetica,Arial,sans-serif}.Button-clicking{transform:scale(0.9)}.Button-color_primary{background-color:#6320ee}.Button-color_secondary{background-color:#8075ff}.Button-color_accent{background-color:#50c878}.Button-color_success{background-color:#65ff00}.Button-color_danger{background-color:#ee6352}.Button-type_default{background-color:#e6e6e6}.Button-type_action{background-color:#6320ee;color:#fff}.Button-type_action:hover{background-color:#3b0c9c}.Button-type_default{color:#000;background-color:#e6e6e6}.Button-type_default.btn-clicked,.Button-type_default:hover{background-color:#ccc}.Button-type_link{border:1px solid #668fd6;color:#668fd6;background-color:#fff}.Button-type_link:hover{background-color:#bacded}.Button-type_pseudo{border:2px solid #ccc}.Button-type_clear{color:#858585;background-color:transparent}.Button-type_clear:hover{color:#000}.Button-type_raised{box-shadow:0 0 13px 3px rgba(0,0,0,.17)}.Button-size_sm{height:2rem;padding:0 1rem;font-size:.875rem}.Button-size_md{height:2.5rem;padding:0 1.25rem;font-size:1rem}.Button-size_lg{height:3.125rem;padding:0 1.625rem;font-size:1.125rem}.Button-size_xl{height:3.75rem;padding:0 2rem;font-size:1.5rem}",
            "",
          ]);
          const i = c;
        },
        645: (e) => {
          e.exports = function (e) {
            var t = [];
            return (
              (t.toString = function () {
                return this.map(function (t) {
                  var o = "",
                    r = void 0 !== t[5];
                  return (
                    t[4] && (o += "@supports (".concat(t[4], ") {")),
                    t[2] && (o += "@media ".concat(t[2], " {")),
                    r &&
                      (o += "@layer".concat(
                        t[5].length > 0 ? " ".concat(t[5]) : "",
                        " {"
                      )),
                    (o += e(t)),
                    r && (o += "}"),
                    t[2] && (o += "}"),
                    t[4] && (o += "}"),
                    o
                  );
                }).join("");
              }),
              (t.i = function (e, o, r, n, a) {
                "string" == typeof e && (e = [[null, e, void 0]]);
                var c = {};
                if (r)
                  for (var i = 0; i < this.length; i++) {
                    var s = this[i][0];
                    null != s && (c[s] = !0);
                  }
                for (var u = 0; u < e.length; u++) {
                  var l = [].concat(e[u]);
                  (r && c[l[0]]) ||
                    (void 0 !== a &&
                      (void 0 === l[5] ||
                        (l[1] = "@layer"
                          .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                          .concat(l[1], "}")),
                      (l[5] = a)),
                    o &&
                      (l[2]
                        ? ((l[1] = "@media "
                            .concat(l[2], " {")
                            .concat(l[1], "}")),
                          (l[2] = o))
                        : (l[2] = o)),
                    n &&
                      (l[4]
                        ? ((l[1] = "@supports ("
                            .concat(l[4], ") {")
                            .concat(l[1], "}")),
                          (l[4] = n))
                        : (l[4] = "".concat(n))),
                    t.push(l));
                }
              }),
              t
            );
          };
        },
        81: (e) => {
          e.exports = function (e) {
            return e[1];
          };
        },
        379: (e) => {
          var t = [];
          function o(e) {
            for (var o = -1, r = 0; r < t.length; r++)
              if (t[r].identifier === e) {
                o = r;
                break;
              }
            return o;
          }
          function r(e, r) {
            for (var a = {}, c = [], i = 0; i < e.length; i++) {
              var s = e[i],
                u = r.base ? s[0] + r.base : s[0],
                l = a[u] || 0,
                d = "".concat(u, " ").concat(l);
              a[u] = l + 1;
              var p = o(d),
                f = {
                  css: s[1],
                  media: s[2],
                  sourceMap: s[3],
                  supports: s[4],
                  layer: s[5],
                };
              if (-1 !== p) t[p].references++, t[p].updater(f);
              else {
                var m = n(f, r);
                (r.byIndex = i),
                  t.splice(i, 0, { identifier: d, updater: m, references: 1 });
              }
              c.push(d);
            }
            return c;
          }
          function n(e, t) {
            var o = t.domAPI(t);
            return (
              o.update(e),
              function (t) {
                if (t) {
                  if (
                    t.css === e.css &&
                    t.media === e.media &&
                    t.sourceMap === e.sourceMap &&
                    t.supports === e.supports &&
                    t.layer === e.layer
                  )
                    return;
                  o.update((e = t));
                } else o.remove();
              }
            );
          }
          e.exports = function (e, n) {
            var a = r((e = e || []), (n = n || {}));
            return function (e) {
              e = e || [];
              for (var c = 0; c < a.length; c++) {
                var i = o(a[c]);
                t[i].references--;
              }
              for (var s = r(e, n), u = 0; u < a.length; u++) {
                var l = o(a[u]);
                0 === t[l].references && (t[l].updater(), t.splice(l, 1));
              }
              a = s;
            };
          };
        },
        569: (e) => {
          var t = {};
          e.exports = function (e, o) {
            var r = (function (e) {
              if (void 0 === t[e]) {
                var o = document.querySelector(e);
                if (
                  window.HTMLIFrameElement &&
                  o instanceof window.HTMLIFrameElement
                )
                  try {
                    o = o.contentDocument.head;
                  } catch (e) {
                    o = null;
                  }
                t[e] = o;
              }
              return t[e];
            })(e);
            if (!r)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            r.appendChild(o);
          };
        },
        216: (e) => {
          e.exports = function (e) {
            var t = document.createElement("style");
            return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
          };
        },
        565: (e, t, o) => {
          e.exports = function (e) {
            var t = o.nc;
            t && e.setAttribute("nonce", t);
          };
        },
        795: (e) => {
          e.exports = function (e) {
            var t = e.insertStyleElement(e);
            return {
              update: function (o) {
                !(function (e, t, o) {
                  var r = "";
                  o.supports && (r += "@supports (".concat(o.supports, ") {")),
                    o.media && (r += "@media ".concat(o.media, " {"));
                  var n = void 0 !== o.layer;
                  n &&
                    (r += "@layer".concat(
                      o.layer.length > 0 ? " ".concat(o.layer) : "",
                      " {"
                    )),
                    (r += o.css),
                    n && (r += "}"),
                    o.media && (r += "}"),
                    o.supports && (r += "}");
                  var a = o.sourceMap;
                  a &&
                    "undefined" != typeof btoa &&
                    (r +=
                      "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                        " */"
                      )),
                    t.styleTagTransform(r, e, t.options);
                })(t, e, o);
              },
              remove: function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(t);
              },
            };
          };
        },
        589: (e) => {
          e.exports = function (e, t) {
            if (t.styleSheet) t.styleSheet.cssText = e;
            else {
              for (; t.firstChild; ) t.removeChild(t.firstChild);
              t.appendChild(document.createTextNode(e));
            }
          };
        },
        156: (t) => {
          t.exports = e;
        },
      },
      o = {};
    function r(e) {
      var n = o[e];
      if (void 0 !== n) return n.exports;
      var a = (o[e] = { id: e, exports: {} });
      return t[e](a, a.exports, r), a.exports;
    }
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return r.d(t, { a: t }), t;
    }),
      (r.d = (e, t) => {
        for (var o in t)
          r.o(t, o) &&
            !r.o(e, o) &&
            Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
      }),
      (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (r.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    var n = {};
    return (
      (() => {
        r.r(n), r.d(n, { Button: () => g });
        var e = r(156),
          t = r.n(e),
          o = r(379),
          a = r.n(o),
          c = r(795),
          i = r.n(c),
          s = r(569),
          u = r.n(s),
          l = r(565),
          d = r.n(l),
          p = r(216),
          f = r.n(p),
          m = r(589),
          v = r.n(m),
          y = r(515),
          b = {};
        (b.styleTagTransform = v()),
          (b.setAttributes = d()),
          (b.insert = u().bind(null, "head")),
          (b.domAPI = i()),
          (b.insertStyleElement = f()),
          a()(y.Z, b),
          y.Z && y.Z.locals && y.Z.locals;
        const g = ({ children: o, color: r, type: n, size: a, onClick: c }) => {
          const [i, s] = (0, e.useState)(!1),
            u = [
              "Button",
              r ? `Button-color_${r}` : "",
              n ? `Button-type_${n}` : "Button-type_default",
              a ? `Button-size_${a}` : "Button-size_md",
              i ? "Button-clicking" : "",
            ];
          return t().createElement(
            "div",
            null,
            t().createElement(
              "button",
              {
                className: u.join(" "),
                onClick: (e) =>
                  ((e) => {
                    s(!0),
                      setTimeout(() => {
                        s(!1);
                      }, 400),
                      c && c(e);
                  })(e),
              },
              t().createElement("span", { className: "Button-label" }, o)
            )
          );
        };
      })(),
      n
    );
  })();
});
