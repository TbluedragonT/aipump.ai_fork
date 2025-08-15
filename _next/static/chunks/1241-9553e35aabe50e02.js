"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1241],
  {
    15587: (e, t, n) => {
      n.d(t, { Eq: () => s });
      var r = new WeakMap(),
        o = new WeakMap(),
        a = {},
        i = 0,
        u = function (e) {
          return e && (e.host || u(e.parentNode));
        },
        l = function (e, t, n, l) {
          var s = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = u(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          a[n] || (a[n] = new WeakMap());
          var c = a[n],
            d = [],
            f = new Set(),
            v = new Set(s),
            m = function (e) {
              !e || f.has(e) || (f.add(e), m(e.parentNode));
            };
          s.forEach(m);
          var p = function (e) {
            !e ||
              v.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (f.has(e)) p(e);
                else
                  try {
                    var t = e.getAttribute(l),
                      a = null !== t && "false" !== t,
                      i = (r.get(e) || 0) + 1,
                      u = (c.get(e) || 0) + 1;
                    r.set(e, i),
                      c.set(e, u),
                      d.push(e),
                      1 === i && a && o.set(e, !0),
                      1 === u && e.setAttribute(n, "true"),
                      a || e.setAttribute(l, "true");
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            p(t),
            f.clear(),
            i++,
            function () {
              d.forEach(function (e) {
                var t = r.get(e) - 1,
                  a = c.get(e) - 1;
                r.set(e, t),
                  c.set(e, a),
                  t || (o.has(e) || e.removeAttribute(l), o.delete(e)),
                  a || e.removeAttribute(n);
              }),
                --i ||
                  ((r = new WeakMap()),
                  (r = new WeakMap()),
                  (o = new WeakMap()),
                  (a = {}));
            }
          );
        },
        s = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r,
            o = Array.from(Array.isArray(e) ? e : [e]),
            a =
              t ||
              ((r = e),
              "undefined" == typeof document
                ? null
                : (Array.isArray(r) ? r[0] : r).ownerDocument.body);
          return a
            ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live]"))),
              l(o, a, n, "aria-hidden"))
            : function () {
                return null;
              };
        };
    },
    67401: (e, t, n) => {
      n.d(t, { A: () => l });
      var r = n(12115);
      let o = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        a = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t
            .filter((e, t, n) => !!e && "" !== e.trim() && n.indexOf(e) === t)
            .join(" ")
            .trim();
        };
      var i = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let u = (0, r.forwardRef)((e, t) => {
          let {
            color: n = "currentColor",
            size: o = 24,
            strokeWidth: u = 2,
            absoluteStrokeWidth: l,
            className: s = "",
            children: c,
            iconNode: d,
            ...f
          } = e;
          return (0, r.createElement)(
            "svg",
            {
              ref: t,
              ...i,
              width: o,
              height: o,
              stroke: n,
              strokeWidth: l ? (24 * Number(u)) / Number(o) : u,
              className: a("lucide", s),
              ...f,
            },
            [
              ...d.map((e) => {
                let [t, n] = e;
                return (0, r.createElement)(t, n);
              }),
              ...(Array.isArray(c) ? c : [c]),
            ]
          );
        }),
        l = (e, t) => {
          let n = (0, r.forwardRef)((n, i) => {
            let { className: l, ...s } = n;
            return (0, r.createElement)(u, {
              ref: i,
              iconNode: t,
              className: a("lucide-".concat(o(e)), l),
              ...s,
            });
          });
          return (n.displayName = "".concat(e)), n;
        };
    },
    40767: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(67401).A)("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    88379: (e, t, n) => {
      n.d(t, { default: () => i });
      var r = n(97481),
        o = n(12115),
        a = n(67878);
      function i(e) {
        let { locale: t, ...n } = e;
        if (!t)
          throw Error(
            "Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl.dev/docs/configuration#locale"
          );
        return o.createElement(a.IntlProvider, (0, r._)({ locale: t }, n));
      }
    },
    74073: (e, t, n) => {
      n.d(t, { A: () => A });
      var r = n(6476),
        o = n(12115),
        a = n(95714),
        i = n(42607),
        u = (0, n(44577).f)(),
        l = function () {},
        s = o.forwardRef(function (e, t) {
          var n = o.useRef(null),
            a = o.useState({
              onScrollCapture: l,
              onWheelCapture: l,
              onTouchMoveCapture: l,
            }),
            s = a[0],
            c = a[1],
            d = e.forwardProps,
            f = e.children,
            v = e.className,
            m = e.removeScrollBar,
            p = e.enabled,
            h = e.shards,
            g = e.sideCar,
            y = e.noIsolation,
            E = e.inert,
            b = e.allowPinchZoom,
            w = e.as,
            N = e.gapMode,
            C = (0, r.__rest)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            R = (0, i.S)([n, t]),
            D = (0, r.__assign)((0, r.__assign)({}, C), s);
          return o.createElement(
            o.Fragment,
            null,
            p &&
              o.createElement(g, {
                sideCar: u,
                removeScrollBar: m,
                shards: h,
                noIsolation: y,
                inert: E,
                setCallbacks: c,
                allowPinchZoom: !!b,
                lockRef: n,
                gapMode: N,
              }),
            d
              ? o.cloneElement(
                  o.Children.only(f),
                  (0, r.__assign)((0, r.__assign)({}, D), { ref: R })
                )
              : o.createElement(
                  void 0 === w ? "div" : w,
                  (0, r.__assign)({}, D, { className: v, ref: R }),
                  f
                )
          );
        });
      (s.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (s.classNames = { fullWidth: a.pN, zeroRight: a.Mi });
      var c = n(66377),
        d = n(10101),
        f = n(75219),
        v = !1;
      if ("undefined" != typeof window)
        try {
          var m = Object.defineProperty({}, "passive", {
            get: function () {
              return (v = !0), !0;
            },
          });
          window.addEventListener("test", m, m),
            window.removeEventListener("test", m, m);
        } catch (e) {
          v = !1;
        }
      var p = !!v && { passive: !1 },
        h = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        g = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              y(e, r))
            ) {
              var o = E(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        y = function (e, t) {
          return "v" === e ? h(t, "overflowY") : h(t, "overflowX");
        },
        E = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        b = function (e, t, n, r, o) {
          var a,
            i =
              ((a = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === a ? -1 : 1),
            u = i * r,
            l = n.target,
            s = t.contains(l),
            c = !1,
            d = u > 0,
            f = 0,
            v = 0;
          do {
            var m = E(e, l),
              p = m[0],
              h = m[1] - m[2] - i * p;
            (p || h) && y(e, l) && ((f += h), (v += p)),
              l instanceof ShadowRoot ? (l = l.host) : (l = l.parentNode);
          } while (
            (!s && l !== document.body) ||
            (s && (t.contains(l) || t === l))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && u > f))
              ? (c = !0)
              : !d && ((o && 1 > Math.abs(v)) || (!o && -u > v)) && (c = !0),
            c
          );
        },
        w = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        N = function (e) {
          return [e.deltaX, e.deltaY];
        },
        C = function (e) {
          return e && "current" in e ? e.current : e;
        },
        R = 0,
        D = [];
      let x = (0, c.m)(u, function (e) {
        var t = o.useRef([]),
          n = o.useRef([0, 0]),
          a = o.useRef(),
          i = o.useState(R++)[0],
          u = o.useState(f.T0)[0],
          l = o.useRef(e);
        o.useEffect(
          function () {
            l.current = e;
          },
          [e]
        ),
          o.useEffect(
            function () {
              if (e.inert) {
                document.body.classList.add("block-interactivity-".concat(i));
                var t = (0, r.__spreadArray)(
                  [e.lockRef.current],
                  (e.shards || []).map(C),
                  !0
                ).filter(Boolean);
                return (
                  t.forEach(function (e) {
                    return e.classList.add("allow-interactivity-".concat(i));
                  }),
                  function () {
                    document.body.classList.remove(
                      "block-interactivity-".concat(i)
                    ),
                      t.forEach(function (e) {
                        return e.classList.remove(
                          "allow-interactivity-".concat(i)
                        );
                      });
                  }
                );
              }
            },
            [e.inert, e.lockRef.current, e.shards]
          );
        var s = o.useCallback(function (e, t) {
            if (
              ("touches" in e && 2 === e.touches.length) ||
              ("wheel" === e.type && e.ctrlKey)
            )
              return !l.current.allowPinchZoom;
            var r,
              o = w(e),
              i = n.current,
              u = "deltaX" in e ? e.deltaX : i[0] - o[0],
              s = "deltaY" in e ? e.deltaY : i[1] - o[1],
              c = e.target,
              d = Math.abs(u) > Math.abs(s) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === c.type) return !1;
            var f = g(d, c);
            if (!f) return !0;
            if (
              (f ? (r = d) : ((r = "v" === d ? "h" : "v"), (f = g(d, c))), !f)
            )
              return !1;
            if (
              (!a.current &&
                "changedTouches" in e &&
                (u || s) &&
                (a.current = r),
              !r)
            )
              return !0;
            var v = a.current || r;
            return b(v, t, e, "h" === v ? u : s, !0);
          }, []),
          c = o.useCallback(function (e) {
            if (D.length && D[D.length - 1] === u) {
              var n = "deltaY" in e ? N(e) : w(e),
                r = t.current.filter(function (t) {
                  var r;
                  return (
                    t.name === e.type &&
                    (t.target === e.target || e.target === t.shadowParent) &&
                    (r = t.delta)[0] === n[0] &&
                    r[1] === n[1]
                  );
                })[0];
              if (r && r.should) {
                e.cancelable && e.preventDefault();
                return;
              }
              if (!r) {
                var o = (l.current.shards || [])
                  .map(C)
                  .filter(Boolean)
                  .filter(function (t) {
                    return t.contains(e.target);
                  });
                (o.length > 0 ? s(e, o[0]) : !l.current.noIsolation) &&
                  e.cancelable &&
                  e.preventDefault();
              }
            }
          }, []),
          v = o.useCallback(function (e, n, r, o) {
            var a = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: (function (e) {
                for (var t = null; null !== e; )
                  e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                    (e = e.parentNode);
                return t;
              })(r),
            };
            t.current.push(a),
              setTimeout(function () {
                t.current = t.current.filter(function (e) {
                  return e !== a;
                });
              }, 1);
          }, []),
          m = o.useCallback(function (e) {
            (n.current = w(e)), (a.current = void 0);
          }, []),
          h = o.useCallback(function (t) {
            v(t.type, N(t), t.target, s(t, e.lockRef.current));
          }, []),
          y = o.useCallback(function (t) {
            v(t.type, w(t), t.target, s(t, e.lockRef.current));
          }, []);
        o.useEffect(function () {
          return (
            D.push(u),
            e.setCallbacks({
              onScrollCapture: h,
              onWheelCapture: h,
              onTouchMoveCapture: y,
            }),
            document.addEventListener("wheel", c, p),
            document.addEventListener("touchmove", c, p),
            document.addEventListener("touchstart", m, p),
            function () {
              (D = D.filter(function (e) {
                return e !== u;
              })),
                document.removeEventListener("wheel", c, p),
                document.removeEventListener("touchmove", c, p),
                document.removeEventListener("touchstart", m, p);
            }
          );
        }, []);
        var E = e.removeScrollBar,
          x = e.inert;
        return o.createElement(
          o.Fragment,
          null,
          x
            ? o.createElement(u, {
                styles: "\n  .block-interactivity-"
                  .concat(
                    i,
                    " {pointer-events: none;}\n  .allow-interactivity-"
                  )
                  .concat(i, " {pointer-events: all;}\n"),
              })
            : null,
          E ? o.createElement(d.jp, { gapMode: e.gapMode }) : null
        );
      });
      var L = o.forwardRef(function (e, t) {
        return o.createElement(
          s,
          (0, r.__assign)({}, e, { ref: t, sideCar: x })
        );
      });
      L.classNames = s.classNames;
      let A = L;
    },
    93610: (e, t, n) => {
      n.d(t, { m: () => r });
      function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
    },
    18166: (e, t, n) => {
      n.d(t, { A: () => i, q: () => a });
      var r = n(12115),
        o = n(95155);
      function a(e, t) {
        let n = r.createContext(t),
          a = (e) => {
            let { children: t, ...a } = e,
              i = r.useMemo(() => a, Object.values(a));
            return (0, o.jsx)(n.Provider, { value: i, children: t });
          };
        return (
          (a.displayName = e + "Provider"),
          [
            a,
            function (o) {
              let a = r.useContext(n);
              if (a) return a;
              if (void 0 !== t) return t;
              throw Error(`\`${o}\` must be used within \`${e}\``);
            },
          ]
        );
      }
      function i(e, t = []) {
        let n = [],
          a = () => {
            let t = n.map((e) => r.createContext(e));
            return function (n) {
              let o = n?.[e] || t;
              return r.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: o } }),
                [n, o]
              );
            };
          };
        return (
          (a.scopeName = e),
          [
            function (t, a) {
              let i = r.createContext(a),
                u = n.length;
              n = [...n, a];
              let l = (t) => {
                let { scope: n, children: a, ...l } = t,
                  s = n?.[e]?.[u] || i,
                  c = r.useMemo(() => l, Object.values(l));
                return (0, o.jsx)(s.Provider, { value: c, children: a });
              };
              return (
                (l.displayName = t + "Provider"),
                [
                  l,
                  function (n, o) {
                    let l = o?.[e]?.[u] || i,
                      s = r.useContext(l);
                    if (s) return s;
                    if (void 0 !== a) return a;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let o = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e)[`__scope${r}`];
                    return { ...t, ...o };
                  }, {});
                  return r.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o]
                  );
                };
              };
              return (n.scopeName = t.scopeName), n;
            })(a, ...t),
          ]
        );
      }
    },
    42833: (e, t, n) => {
      n.d(t, {
        bm: () => ev,
        UC: () => ec,
        VY: () => ef,
        hJ: () => es,
        ZL: () => el,
        bL: () => ei,
        hE: () => ed,
        l9: () => eu,
      });
      var r,
        o = n(12115),
        a = n(93610),
        i = n(88068),
        u = n(18166),
        l = n(67668),
        s = n(1488),
        c = n(23360),
        d = n(41524),
        f = n(95630),
        v = n(95155),
        m = "dismissableLayer.update",
        p = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        h = o.forwardRef((e, t) => {
          var n, u;
          let {
              disableOutsidePointerEvents: l = !1,
              onEscapeKeyDown: s,
              onPointerDownOutside: h,
              onFocusOutside: E,
              onInteractOutside: b,
              onDismiss: w,
              ...N
            } = e,
            C = o.useContext(p),
            [R, D] = o.useState(null),
            x =
              null !== (u = null == R ? void 0 : R.ownerDocument) &&
              void 0 !== u
                ? u
                : null === (n = globalThis) || void 0 === n
                ? void 0
                : n.document,
            [, L] = o.useState({}),
            A = (0, i.s)(t, (e) => D(e)),
            O = Array.from(C.layers),
            [P] = [...C.layersWithOutsidePointerEventsDisabled].slice(-1),
            S = O.indexOf(P),
            T = R ? O.indexOf(R) : -1,
            k = C.layersWithOutsidePointerEventsDisabled.size > 0,
            M = T >= S,
            _ = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, d.c)(e),
                a = o.useRef(!1),
                i = o.useRef(() => {});
              return (
                o.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !a.current) {
                        let t = function () {
                            y("dismissableLayer.pointerDownOutside", r, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", i.current),
                            (i.current = t),
                            n.addEventListener("click", i.current, {
                              once: !0,
                            }))
                          : t();
                      } else n.removeEventListener("click", i.current);
                      a.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", i.current);
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (a.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...C.branches].some((e) => e.contains(t));
              !M ||
                n ||
                (null == h || h(e),
                null == b || b(e),
                e.defaultPrevented || null == w || w());
            }, x),
            I = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, d.c)(e),
                a = o.useRef(!1);
              return (
                o.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !a.current &&
                      y(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                  );
                }, [n, r]),
                {
                  onFocusCapture: () => (a.current = !0),
                  onBlurCapture: () => (a.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...C.branches].some((e) => e.contains(t)) ||
                (null == E || E(e),
                null == b || b(e),
                e.defaultPrevented || null == w || w());
            }, x);
          return (
            (0, f.U)((e) => {
              T !== C.layers.size - 1 ||
                (null == s || s(e),
                !e.defaultPrevented && w && (e.preventDefault(), w()));
            }, x),
            o.useEffect(() => {
              if (R)
                return (
                  l &&
                    (0 === C.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = x.body.style.pointerEvents),
                      (x.body.style.pointerEvents = "none")),
                    C.layersWithOutsidePointerEventsDisabled.add(R)),
                  C.layers.add(R),
                  g(),
                  () => {
                    l &&
                      1 === C.layersWithOutsidePointerEventsDisabled.size &&
                      (x.body.style.pointerEvents = r);
                  }
                );
            }, [R, x, l, C]),
            o.useEffect(
              () => () => {
                R &&
                  (C.layers.delete(R),
                  C.layersWithOutsidePointerEventsDisabled.delete(R),
                  g());
              },
              [R, C]
            ),
            o.useEffect(() => {
              let e = () => L({});
              return (
                document.addEventListener(m, e),
                () => document.removeEventListener(m, e)
              );
            }, []),
            (0, v.jsx)(c.sG.div, {
              ...N,
              ref: A,
              style: {
                pointerEvents: k ? (M ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, a.m)(e.onFocusCapture, I.onFocusCapture),
              onBlurCapture: (0, a.m)(e.onBlurCapture, I.onBlurCapture),
              onPointerDownCapture: (0, a.m)(
                e.onPointerDownCapture,
                _.onPointerDownCapture
              ),
            })
          );
        });
      function g() {
        let e = new CustomEvent(m);
        document.dispatchEvent(e);
      }
      function y(e, t, n, r) {
        let { discrete: o } = r,
          a = n.originalEvent.target,
          i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && a.addEventListener(e, t, { once: !0 }),
          o ? (0, c.hO)(a, i) : a.dispatchEvent(i);
      }
      (h.displayName = "DismissableLayer"),
        (o.forwardRef((e, t) => {
          let n = o.useContext(p),
            r = o.useRef(null),
            a = (0, i.s)(t, r);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, v.jsx)(c.sG.div, { ...e, ref: a })
          );
        }).displayName = "DismissableLayerBranch");
      var E = n(20196),
        b = n(17323),
        w = n(46611),
        N = (e) => {
          let { present: t, children: n } = e,
            r = (function (e) {
              var t, n;
              let [r, a] = o.useState(),
                i = o.useRef({}),
                u = o.useRef(e),
                l = o.useRef("none"),
                [s, c] =
                  ((t = e ? "mounted" : "unmounted"),
                  (n = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  o.useReducer((e, t) => {
                    let r = n[e][t];
                    return null != r ? r : e;
                  }, t));
              return (
                o.useEffect(() => {
                  let e = C(i.current);
                  l.current = "mounted" === s ? e : "none";
                }, [s]),
                (0, w.N)(() => {
                  let t = i.current,
                    n = u.current;
                  if (n !== e) {
                    let r = l.current,
                      o = C(t);
                    e
                      ? c("MOUNT")
                      : "none" === o ||
                        (null == t ? void 0 : t.display) === "none"
                      ? c("UNMOUNT")
                      : n && r !== o
                      ? c("ANIMATION_OUT")
                      : c("UNMOUNT"),
                      (u.current = e);
                  }
                }, [e, c]),
                (0, w.N)(() => {
                  if (r) {
                    var e;
                    let t;
                    let n =
                        null !== (e = r.ownerDocument.defaultView) &&
                        void 0 !== e
                          ? e
                          : window,
                      o = (e) => {
                        let o = C(i.current).includes(e.animationName);
                        if (
                          e.target === r &&
                          o &&
                          (c("ANIMATION_END"), !u.current)
                        ) {
                          let e = r.style.animationFillMode;
                          (r.style.animationFillMode = "forwards"),
                            (t = n.setTimeout(() => {
                              "forwards" === r.style.animationFillMode &&
                                (r.style.animationFillMode = e);
                            }));
                        }
                      },
                      a = (e) => {
                        e.target === r && (l.current = C(i.current));
                      };
                    return (
                      r.addEventListener("animationstart", a),
                      r.addEventListener("animationcancel", o),
                      r.addEventListener("animationend", o),
                      () => {
                        n.clearTimeout(t),
                          r.removeEventListener("animationstart", a),
                          r.removeEventListener("animationcancel", o),
                          r.removeEventListener("animationend", o);
                      }
                    );
                  }
                  c("ANIMATION_END");
                }, [r, c]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(s),
                  ref: o.useCallback((e) => {
                    e && (i.current = getComputedStyle(e)), a(e);
                  }, []),
                }
              );
            })(t),
            a =
              "function" == typeof n
                ? n({ present: r.isPresent })
                : o.Children.only(n),
            u = (0, i.s)(
              r.ref,
              (function (e) {
                var t, n;
                let r =
                    null ===
                      (t = Object.getOwnPropertyDescriptor(e.props, "ref")) ||
                    void 0 === t
                      ? void 0
                      : t.get,
                  o = r && "isReactWarning" in r && r.isReactWarning;
                return o
                  ? e.ref
                  : (o =
                      (r =
                        null ===
                          (n = Object.getOwnPropertyDescriptor(e, "ref")) ||
                        void 0 === n
                          ? void 0
                          : n.get) &&
                      "isReactWarning" in r &&
                      r.isReactWarning)
                  ? e.props.ref
                  : e.props.ref || e.ref;
              })(a)
            );
          return "function" == typeof n || r.isPresent
            ? o.cloneElement(a, { ref: u })
            : null;
        };
      function C(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      N.displayName = "Presence";
      var R = n(62292),
        D = n(74073),
        x = n(15587),
        L = n(12317),
        A = "Dialog",
        [O, P] = (0, u.A)(A),
        [S, T] = O(A),
        k = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: r,
              defaultOpen: a,
              onOpenChange: i,
              modal: u = !0,
            } = e,
            c = o.useRef(null),
            d = o.useRef(null),
            [f = !1, m] = (0, s.i)({ prop: r, defaultProp: a, onChange: i });
          return (0, v.jsx)(S, {
            scope: t,
            triggerRef: c,
            contentRef: d,
            contentId: (0, l.B)(),
            titleId: (0, l.B)(),
            descriptionId: (0, l.B)(),
            open: f,
            onOpenChange: m,
            onOpenToggle: o.useCallback(() => m((e) => !e), [m]),
            modal: u,
            children: n,
          });
        };
      k.displayName = A;
      var M = "DialogTrigger",
        _ = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = T(M, n),
            u = (0, i.s)(t, o.triggerRef);
          return (0, v.jsx)(c.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": ee(o.open),
            ...r,
            ref: u,
            onClick: (0, a.m)(e.onClick, o.onOpenToggle),
          });
        });
      _.displayName = M;
      var I = "DialogPortal",
        [j, F] = O(I, { forceMount: void 0 }),
        W = (e) => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: r,
              container: a,
            } = e,
            i = T(I, t);
          return (0, v.jsx)(j, {
            scope: t,
            forceMount: n,
            children: o.Children.map(r, (e) =>
              (0, v.jsx)(N, {
                present: n || i.open,
                children: (0, v.jsx)(b.Z, {
                  asChild: !0,
                  container: a,
                  children: e,
                }),
              })
            ),
          });
        };
      W.displayName = I;
      var B = "DialogOverlay",
        U = o.forwardRef((e, t) => {
          let n = F(B, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            a = T(B, e.__scopeDialog);
          return a.modal
            ? (0, v.jsx)(N, {
                present: r || a.open,
                children: (0, v.jsx)($, { ...o, ref: t }),
              })
            : null;
        });
      U.displayName = B;
      var $ = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = T(B, n);
          return (0, v.jsx)(D.A, {
            as: L.DX,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, v.jsx)(c.sG.div, {
              "data-state": ee(o.open),
              ...r,
              ref: t,
              style: { pointerEvents: "auto", ...r.style },
            }),
          });
        }),
        G = "DialogContent",
        K = o.forwardRef((e, t) => {
          let n = F(G, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            a = T(G, e.__scopeDialog);
          return (0, v.jsx)(N, {
            present: r || a.open,
            children: a.modal
              ? (0, v.jsx)(X, { ...o, ref: t })
              : (0, v.jsx)(Z, { ...o, ref: t }),
          });
        });
      K.displayName = G;
      var X = o.forwardRef((e, t) => {
          let n = T(G, e.__scopeDialog),
            r = o.useRef(null),
            u = (0, i.s)(t, n.contentRef, r);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e) return (0, x.Eq)(e);
            }, []),
            (0, v.jsx)(q, {
              ...e,
              ref: u,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, a.m)(e.onCloseAutoFocus, (e) => {
                var t;
                e.preventDefault(),
                  null === (t = n.triggerRef.current) ||
                    void 0 === t ||
                    t.focus();
              }),
              onPointerDownOutside: (0, a.m)(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || n) && e.preventDefault();
              }),
              onFocusOutside: (0, a.m)(e.onFocusOutside, (e) =>
                e.preventDefault()
              ),
            })
          );
        }),
        Z = o.forwardRef((e, t) => {
          let n = T(G, e.__scopeDialog),
            r = o.useRef(!1),
            a = o.useRef(!1);
          return (0, v.jsx)(q, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              var o, i;
              null === (o = e.onCloseAutoFocus) || void 0 === o || o.call(e, t),
                t.defaultPrevented ||
                  (r.current ||
                    null === (i = n.triggerRef.current) ||
                    void 0 === i ||
                    i.focus(),
                  t.preventDefault()),
                (r.current = !1),
                (a.current = !1);
            },
            onInteractOutside: (t) => {
              var o, i;
              null === (o = e.onInteractOutside) ||
                void 0 === o ||
                o.call(e, t),
                t.defaultPrevented ||
                  ((r.current = !0),
                  "pointerdown" !== t.detail.originalEvent.type ||
                    (a.current = !0));
              let u = t.target;
              (null === (i = n.triggerRef.current) || void 0 === i
                ? void 0
                : i.contains(u)) && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  a.current &&
                  t.preventDefault();
            },
          });
        }),
        q = o.forwardRef((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: r,
              onOpenAutoFocus: a,
              onCloseAutoFocus: u,
              ...l
            } = e,
            s = T(G, n),
            c = o.useRef(null),
            d = (0, i.s)(t, c);
          return (
            (0, R.Oh)(),
            (0, v.jsxs)(v.Fragment, {
              children: [
                (0, v.jsx)(E.n, {
                  asChild: !0,
                  loop: !0,
                  trapped: r,
                  onMountAutoFocus: a,
                  onUnmountAutoFocus: u,
                  children: (0, v.jsx)(h, {
                    role: "dialog",
                    id: s.contentId,
                    "aria-describedby": s.descriptionId,
                    "aria-labelledby": s.titleId,
                    "data-state": ee(s.open),
                    ...l,
                    ref: d,
                    onDismiss: () => s.onOpenChange(!1),
                  }),
                }),
                (0, v.jsxs)(v.Fragment, {
                  children: [
                    (0, v.jsx)(eo, { titleId: s.titleId }),
                    (0, v.jsx)(ea, {
                      contentRef: c,
                      descriptionId: s.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        Y = "DialogTitle",
        z = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = T(Y, n);
          return (0, v.jsx)(c.sG.h2, { id: o.titleId, ...r, ref: t });
        });
      z.displayName = Y;
      var H = "DialogDescription",
        V = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = T(H, n);
          return (0, v.jsx)(c.sG.p, { id: o.descriptionId, ...r, ref: t });
        });
      V.displayName = H;
      var J = "DialogClose",
        Q = o.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = T(J, n);
          return (0, v.jsx)(c.sG.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, a.m)(e.onClick, () => o.onOpenChange(!1)),
          });
        });
      function ee(e) {
        return e ? "open" : "closed";
      }
      Q.displayName = J;
      var et = "DialogTitleWarning",
        [en, er] = (0, u.q)(et, {
          contentName: G,
          titleName: Y,
          docsSlug: "dialog",
        }),
        eo = (e) => {
          let { titleId: t } = e,
            n = er(et),
            r = "`"
              .concat(n.contentName, "` requires a `")
              .concat(
                n.titleName,
                "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `"
              )
              .concat(
                n.titleName,
                "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/"
              )
              .concat(n.docsSlug);
          return (
            o.useEffect(() => {
              t && !document.getElementById(t) && console.error(r);
            }, [r, t]),
            null
          );
        },
        ea = (e) => {
          let { contentRef: t, descriptionId: n } = e,
            r = er("DialogDescriptionWarning"),
            a =
              "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(
                r.contentName,
                "}."
              );
          return (
            o.useEffect(() => {
              var e;
              let r =
                null === (e = t.current) || void 0 === e
                  ? void 0
                  : e.getAttribute("aria-describedby");
              n && r && !document.getElementById(n) && console.warn(a);
            }, [a, t, n]),
            null
          );
        },
        ei = k,
        eu = _,
        el = W,
        es = U,
        ec = K,
        ed = z,
        ef = V,
        ev = Q;
    },
    62292: (e, t, n) => {
      n.d(t, { Oh: () => a });
      var r = n(12115),
        o = 0;
      function a() {
        r.useEffect(() => {
          var e, t;
          let n = document.querySelectorAll("[data-radix-focus-guard]");
          return (
            document.body.insertAdjacentElement(
              "afterbegin",
              null !== (e = n[0]) && void 0 !== e ? e : i()
            ),
            document.body.insertAdjacentElement(
              "beforeend",
              null !== (t = n[1]) && void 0 !== t ? t : i()
            ),
            o++,
            () => {
              1 === o &&
                document
                  .querySelectorAll("[data-radix-focus-guard]")
                  .forEach((e) => e.remove()),
                o--;
            }
          );
        }, []);
      }
      function i() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.outline = "none"),
          (e.style.opacity = "0"),
          (e.style.position = "fixed"),
          (e.style.pointerEvents = "none"),
          e
        );
      }
    },
    20196: (e, t, n) => {
      n.d(t, { n: () => d });
      var r = n(12115),
        o = n(88068),
        a = n(23360),
        i = n(41524),
        u = n(95155),
        l = "focusScope.autoFocusOnMount",
        s = "focusScope.autoFocusOnUnmount",
        c = { bubbles: !1, cancelable: !0 },
        d = r.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: d = !1,
              onMountAutoFocus: h,
              onUnmountAutoFocus: g,
              ...y
            } = e,
            [E, b] = r.useState(null),
            w = (0, i.c)(h),
            N = (0, i.c)(g),
            C = r.useRef(null),
            R = (0, o.s)(t, (e) => b(e)),
            D = r.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          r.useEffect(() => {
            if (d) {
              let e = function (e) {
                  if (D.paused || !E) return;
                  let t = e.target;
                  E.contains(t)
                    ? (C.current = t)
                    : m(C.current, { select: !0 });
                },
                t = function (e) {
                  if (D.paused || !E) return;
                  let t = e.relatedTarget;
                  null === t || E.contains(t) || m(C.current, { select: !0 });
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && m(E);
              });
              return (
                E && n.observe(E, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [d, E, D.paused]),
            r.useEffect(() => {
              if (E) {
                p.add(D);
                let e = document.activeElement;
                if (!E.contains(e)) {
                  let t = new CustomEvent(l, c);
                  E.addEventListener(l, w),
                    E.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement;
                        for (let r of e)
                          if (
                            (m(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        f(E).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && m(E));
                }
                return () => {
                  E.removeEventListener(l, w),
                    setTimeout(() => {
                      let t = new CustomEvent(s, c);
                      E.addEventListener(s, N),
                        E.dispatchEvent(t),
                        t.defaultPrevented ||
                          m(null != e ? e : document.body, { select: !0 }),
                        E.removeEventListener(s, N),
                        p.remove(D);
                    }, 0);
                };
              }
            }, [E, w, N, D]);
          let x = r.useCallback(
            (e) => {
              if ((!n && !d) || D.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                r = document.activeElement;
              if (t && r) {
                let t = e.currentTarget,
                  [o, a] = (function (e) {
                    let t = f(e);
                    return [v(t, e), v(t.reverse(), e)];
                  })(t);
                o && a
                  ? e.shiftKey || r !== a
                    ? e.shiftKey &&
                      r === o &&
                      (e.preventDefault(), n && m(a, { select: !0 }))
                    : (e.preventDefault(), n && m(o, { select: !0 }))
                  : r === t && e.preventDefault();
              }
            },
            [n, d, D.paused]
          );
          return (0, u.jsx)(a.sG.div, {
            tabIndex: -1,
            ...y,
            ref: R,
            onKeyDown: x,
          });
        });
      function f(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function v(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === n || e !== n); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function m(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      d.displayName = "FocusScope";
      var p = (function () {
        let e = [];
        return {
          add(t) {
            let n = e[0];
            t !== n && (null == n || n.pause()), (e = h(e, t)).unshift(t);
          },
          remove(t) {
            var n;
            null === (n = (e = h(e, t))[0]) || void 0 === n || n.resume();
          },
        };
      })();
      function h(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
    },
    67668: (e, t, n) => {
      n.d(t, { B: () => l });
      var r,
        o = n(12115),
        a = n(46611),
        i = (r || (r = n.t(o, 2)))["useId".toString()] || (() => void 0),
        u = 0;
      function l(e) {
        let [t, n] = o.useState(i());
        return (
          (0, a.N)(() => {
            e || n((e) => e ?? String(u++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    17323: (e, t, n) => {
      n.d(t, { Z: () => l });
      var r = n(12115),
        o = n(47650),
        a = n(23360),
        i = n(46611),
        u = n(95155),
        l = r.forwardRef((e, t) => {
          var n, l;
          let { container: s, ...c } = e,
            [d, f] = r.useState(!1);
          (0, i.N)(() => f(!0), []);
          let v =
            s ||
            (d &&
              (null === (l = globalThis) || void 0 === l
                ? void 0
                : null === (n = l.document) || void 0 === n
                ? void 0
                : n.body));
          return v
            ? o.createPortal((0, u.jsx)(a.sG.div, { ...c, ref: t }), v)
            : null;
        });
      l.displayName = "Portal";
    },
    23360: (e, t, n) => {
      n.d(t, { hO: () => l, sG: () => u });
      var r = n(12115),
        o = n(47650),
        a = n(12317),
        i = n(95155),
        u = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = r.forwardRef((e, n) => {
            let { asChild: r, ...o } = e,
              u = r ? a.DX : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, i.jsx)(u, { ...o, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {});
      function l(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t));
      }
    },
    41524: (e, t, n) => {
      n.d(t, { c: () => o });
      var r = n(12115);
      function o(e) {
        let t = r.useRef(e);
        return (
          r.useEffect(() => {
            t.current = e;
          }),
          r.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
    },
    1488: (e, t, n) => {
      n.d(t, { i: () => a });
      var r = n(12115),
        o = n(41524);
      function a({ prop: e, defaultProp: t, onChange: n = () => {} }) {
        let [a, i] = (function ({ defaultProp: e, onChange: t }) {
            let n = r.useState(e),
              [a] = n,
              i = r.useRef(a),
              u = (0, o.c)(t);
            return (
              r.useEffect(() => {
                i.current !== a && (u(a), (i.current = a));
              }, [a, i, u]),
              n
            );
          })({ defaultProp: t, onChange: n }),
          u = void 0 !== e,
          l = u ? e : a,
          s = (0, o.c)(n);
        return [
          l,
          r.useCallback(
            (t) => {
              if (u) {
                let n = "function" == typeof t ? t(e) : t;
                n !== e && s(n);
              } else i(t);
            },
            [u, e, i, s]
          ),
        ];
      }
    },
    95630: (e, t, n) => {
      n.d(t, { U: () => a });
      var r = n(12115),
        o = n(41524);
      function a(e, t = globalThis?.document) {
        let n = (0, o.c)(e);
        r.useEffect(() => {
          let e = (e) => {
            "Escape" === e.key && n(e);
          };
          return (
            t.addEventListener("keydown", e, { capture: !0 }),
            () => t.removeEventListener("keydown", e, { capture: !0 })
          );
        }, [n, t]);
      }
    },
    46611: (e, t, n) => {
      n.d(t, { N: () => o });
      var r = n(12115),
        o = globalThis?.document ? r.useLayoutEffect : () => {};
    },
  },
]);
