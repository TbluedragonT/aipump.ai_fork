(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6953],
  {
    21535: (e, t, r) => {
      "use strict";
      function n(e, t) {
        var r = t && t.cache ? t.cache : l,
          n = t && t.serializer ? t.serializer : a;
        return (
          t && t.strategy
            ? t.strategy
            : function (e, t) {
                var r,
                  n,
                  a = 1 === e.length ? i : o;
                return (
                  (r = t.cache.create()),
                  (n = t.serializer),
                  a.bind(this, e, r, n)
                );
              }
        )(e, { cache: r, serializer: n });
      }
      function i(e, t, r, n) {
        var i =
            null == n || "number" == typeof n || "boolean" == typeof n
              ? n
              : r(n),
          o = t.get(i);
        return void 0 === o && ((o = e.call(this, n)), t.set(i, o)), o;
      }
      function o(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          i = r(n),
          o = t.get(i);
        return void 0 === o && ((o = e.apply(this, n)), t.set(i, o)), o;
      }
      r.r(t), r.d(t, { memoize: () => n, strategies: () => c });
      var a = function () {
          return JSON.stringify(arguments);
        },
        s = (function () {
          function e() {
            this.cache = Object.create(null);
          }
          return (
            (e.prototype.get = function (e) {
              return this.cache[e];
            }),
            (e.prototype.set = function (e, t) {
              this.cache[e] = t;
            }),
            e
          );
        })(),
        l = {
          create: function () {
            return new s();
          },
        },
        c = {
          variadic: function (e, t) {
            var r, n;
            return (
              (r = t.cache.create()), (n = t.serializer), o.bind(this, e, r, n)
            );
          },
          monadic: function (e, t) {
            var r, n;
            return (
              (r = t.cache.create()), (n = t.serializer), i.bind(this, e, r, n)
            );
          },
        };
    },
    4953: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => T });
      var n = r(6476),
        i = r(12115),
        o = r(95714),
        a = r(42607),
        s = (0, r(44577).f)(),
        l = function () {},
        c = i.forwardRef(function (e, t) {
          var r = i.useRef(null),
            o = i.useState({
              onScrollCapture: l,
              onWheelCapture: l,
              onTouchMoveCapture: l,
            }),
            c = o[0],
            u = o[1],
            d = e.forwardProps,
            h = e.children,
            p = e.className,
            f = e.removeScrollBar,
            m = e.enabled,
            g = e.shards,
            y = e.sideCar,
            b = e.noIsolation,
            w = e.inert,
            v = e.allowPinchZoom,
            A = e.as,
            E = e.gapMode,
            C = (0, n.__rest)(e, [
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
            x = (0, a.S)([r, t]),
            _ = (0, n.__assign)((0, n.__assign)({}, C), c);
          return i.createElement(
            i.Fragment,
            null,
            m &&
              i.createElement(y, {
                sideCar: s,
                removeScrollBar: f,
                shards: g,
                noIsolation: b,
                inert: w,
                setCallbacks: u,
                allowPinchZoom: !!v,
                lockRef: r,
                gapMode: E,
              }),
            d
              ? i.cloneElement(
                  i.Children.only(h),
                  (0, n.__assign)((0, n.__assign)({}, _), { ref: x })
                )
              : i.createElement(
                  void 0 === A ? "div" : A,
                  (0, n.__assign)({}, _, { className: p, ref: x }),
                  h
                )
          );
        });
      (c.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (c.classNames = { fullWidth: o.pN, zeroRight: o.Mi });
      var u = r(66377),
        d = r(10101),
        h = r(75219),
        p = !1;
      if ("undefined" != typeof window)
        try {
          var f = Object.defineProperty({}, "passive", {
            get: function () {
              return (p = !0), !0;
            },
          });
          window.addEventListener("test", f, f),
            window.removeEventListener("test", f, f);
        } catch (e) {
          p = !1;
        }
      var m = !!p && { passive: !1 },
        g = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var r = window.getComputedStyle(e);
          return (
            "hidden" !== r[t] &&
            !(
              r.overflowY === r.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === r[t]
            )
          );
        },
        y = function (e, t) {
          var r = t.ownerDocument,
            n = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                n instanceof ShadowRoot &&
                (n = n.host),
              b(e, n))
            ) {
              var i = w(e, n);
              if (i[1] > i[2]) return !0;
            }
            n = n.parentNode;
          } while (n && n !== r.body);
          return !1;
        },
        b = function (e, t) {
          return "v" === e ? g(t, "overflowY") : g(t, "overflowX");
        },
        w = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        v = function (e, t, r, n, i) {
          var o,
            a =
              ((o = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === o ? -1 : 1),
            s = a * n,
            l = r.target,
            c = t.contains(l),
            u = !1,
            d = s > 0,
            h = 0,
            p = 0;
          do {
            var f = w(e, l),
              m = f[0],
              g = f[1] - f[2] - a * m;
            (m || g) && b(e, l) && ((h += g), (p += m)),
              l instanceof ShadowRoot ? (l = l.host) : (l = l.parentNode);
          } while (
            (!c && l !== document.body) ||
            (c && (t.contains(l) || t === l))
          );
          return (
            d && ((i && 1 > Math.abs(h)) || (!i && s > h))
              ? (u = !0)
              : !d && ((i && 1 > Math.abs(p)) || (!i && -s > p)) && (u = !0),
            u
          );
        },
        A = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        E = function (e) {
          return [e.deltaX, e.deltaY];
        },
        C = function (e) {
          return e && "current" in e ? e.current : e;
        },
        x = 0,
        _ = [];
      let k = (0, u.m)(s, function (e) {
        var t = i.useRef([]),
          r = i.useRef([0, 0]),
          o = i.useRef(),
          a = i.useState(x++)[0],
          s = i.useState(h.T0)[0],
          l = i.useRef(e);
        i.useEffect(
          function () {
            l.current = e;
          },
          [e]
        ),
          i.useEffect(
            function () {
              if (e.inert) {
                document.body.classList.add("block-interactivity-".concat(a));
                var t = (0, n.__spreadArray)(
                  [e.lockRef.current],
                  (e.shards || []).map(C),
                  !0
                ).filter(Boolean);
                return (
                  t.forEach(function (e) {
                    return e.classList.add("allow-interactivity-".concat(a));
                  }),
                  function () {
                    document.body.classList.remove(
                      "block-interactivity-".concat(a)
                    ),
                      t.forEach(function (e) {
                        return e.classList.remove(
                          "allow-interactivity-".concat(a)
                        );
                      });
                  }
                );
              }
            },
            [e.inert, e.lockRef.current, e.shards]
          );
        var c = i.useCallback(function (e, t) {
            if (
              ("touches" in e && 2 === e.touches.length) ||
              ("wheel" === e.type && e.ctrlKey)
            )
              return !l.current.allowPinchZoom;
            var n,
              i = A(e),
              a = r.current,
              s = "deltaX" in e ? e.deltaX : a[0] - i[0],
              c = "deltaY" in e ? e.deltaY : a[1] - i[1],
              u = e.target,
              d = Math.abs(s) > Math.abs(c) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === u.type) return !1;
            var h = y(d, u);
            if (!h) return !0;
            if (
              (h ? (n = d) : ((n = "v" === d ? "h" : "v"), (h = y(d, u))), !h)
            )
              return !1;
            if (
              (!o.current &&
                "changedTouches" in e &&
                (s || c) &&
                (o.current = n),
              !n)
            )
              return !0;
            var p = o.current || n;
            return v(p, t, e, "h" === p ? s : c, !0);
          }, []),
          u = i.useCallback(function (e) {
            if (_.length && _[_.length - 1] === s) {
              var r = "deltaY" in e ? E(e) : A(e),
                n = t.current.filter(function (t) {
                  var n;
                  return (
                    t.name === e.type &&
                    (t.target === e.target || e.target === t.shadowParent) &&
                    (n = t.delta)[0] === r[0] &&
                    n[1] === r[1]
                  );
                })[0];
              if (n && n.should) {
                e.cancelable && e.preventDefault();
                return;
              }
              if (!n) {
                var i = (l.current.shards || [])
                  .map(C)
                  .filter(Boolean)
                  .filter(function (t) {
                    return t.contains(e.target);
                  });
                (i.length > 0 ? c(e, i[0]) : !l.current.noIsolation) &&
                  e.cancelable &&
                  e.preventDefault();
              }
            }
          }, []),
          p = i.useCallback(function (e, r, n, i) {
            var o = {
              name: e,
              delta: r,
              target: n,
              should: i,
              shadowParent: (function (e) {
                for (var t = null; null !== e; )
                  e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                    (e = e.parentNode);
                return t;
              })(n),
            };
            t.current.push(o),
              setTimeout(function () {
                t.current = t.current.filter(function (e) {
                  return e !== o;
                });
              }, 1);
          }, []),
          f = i.useCallback(function (e) {
            (r.current = A(e)), (o.current = void 0);
          }, []),
          g = i.useCallback(function (t) {
            p(t.type, E(t), t.target, c(t, e.lockRef.current));
          }, []),
          b = i.useCallback(function (t) {
            p(t.type, A(t), t.target, c(t, e.lockRef.current));
          }, []);
        i.useEffect(function () {
          return (
            _.push(s),
            e.setCallbacks({
              onScrollCapture: g,
              onWheelCapture: g,
              onTouchMoveCapture: b,
            }),
            document.addEventListener("wheel", u, m),
            document.addEventListener("touchmove", u, m),
            document.addEventListener("touchstart", f, m),
            function () {
              (_ = _.filter(function (e) {
                return e !== s;
              })),
                document.removeEventListener("wheel", u, m),
                document.removeEventListener("touchmove", u, m),
                document.removeEventListener("touchstart", f, m);
            }
          );
        }, []);
        var w = e.removeScrollBar,
          k = e.inert;
        return i.createElement(
          i.Fragment,
          null,
          k
            ? i.createElement(s, {
                styles: "\n  .block-interactivity-"
                  .concat(
                    a,
                    " {pointer-events: none;}\n  .allow-interactivity-"
                  )
                  .concat(a, " {pointer-events: all;}\n"),
              })
            : null,
          w ? i.createElement(d.jp, { gapMode: e.gapMode }) : null
        );
      });
      var I = i.forwardRef(function (e, t) {
        return i.createElement(
          c,
          (0, n.__assign)({}, e, { ref: t, sideCar: k })
        );
      });
      I.classNames = c.classNames;
      let T = I;
    },
    85458: (e, t, r) => {
      "use strict";
      function n(e) {
        var t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e;
      }
      function i(e, t) {
        var r = {};
        if ("object" == typeof t)
          !(function e(t, r) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [],
              i = {};
            for (var o in t) {
              var a = t[o],
                s = [...n, o];
              "string" == typeof a || "number" == typeof a || null == a
                ? (i[o] = r(a, s))
                : "object" != typeof a || Array.isArray(a)
                ? console.warn(
                    'Skipping invalid key "'
                      .concat(
                        s.join("."),
                        '". Should be a string, number, null or object. Received: "'
                      )
                      .concat(Array.isArray(a) ? "Array" : typeof a, '"')
                  )
                : (i[o] = e(a, r, s));
            }
            return i;
          })(t, (t, i) => {
            null != t &&
              (r[
                n(
                  (function (e, t) {
                    var r = e;
                    for (var n of t) {
                      if (!(n in r))
                        throw Error(
                          "Path ".concat(
                            t.join(" -> "),
                            " does not exist in object"
                          )
                        );
                      r = r[n];
                    }
                    return r;
                  })(e, i)
                )
              ] = String(t));
          });
        else
          for (var i in e) {
            var o = e[i];
            null != o && (r[n(i)] = o);
          }
        return (
          Object.defineProperty(r, "toString", {
            value: function () {
              return Object.keys(this)
                .map((e) => "".concat(e, ":").concat(this[e]))
                .join(";");
            },
            writable: !1,
          }),
          r
        );
      }
      r.d(t, { D: () => i });
    },
    31566: (e, t, r) => {
      "use strict";
      function n(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? n(Object(r), !0).forEach(function (t) {
                !(function (e, t, r) {
                  var n;
                  (t =
                    "symbol" ==
                    typeof (n = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(t, "string"))
                      ? n
                      : String(n)) in e
                    ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = r);
                })(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : n(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      r.d(t, { U: () => s });
      var o = (e) =>
          function () {
            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
              r[n] = arguments[n];
            var o = Object.assign({}, ...r.map((e) => e.styles)),
              a = Object.keys(o),
              s = a.filter((e) => "mappings" in o[e]);
            return Object.assign(
              (t) => {
                var r = [],
                  n = {},
                  a = i({}, t),
                  l = !1;
                for (var c of s) {
                  var u = t[c];
                  if (null != u)
                    for (var d of ((l = !0), o[c].mappings))
                      (n[d] = u), null == a[d] && delete a[d];
                }
                var h = l ? i(i({}, n), a) : t;
                for (var p in h)
                  if (
                    (function () {
                      var e = h[p],
                        t = o[p];
                      try {
                        if (t.mappings) return 1;
                        if ("string" == typeof e || "number" == typeof e)
                          r.push(t.values[e].defaultClass);
                        else if (Array.isArray(e))
                          for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            if (null != i) {
                              var a = t.responsiveArray[n];
                              r.push(t.values[i].conditions[a]);
                            }
                          }
                        else
                          for (var s in e) {
                            var l = e[s];
                            null != l && r.push(t.values[l].conditions[s]);
                          }
                      } catch (e) {
                        throw e;
                      }
                    })()
                  )
                    continue;
                return e(r.join(" "));
              },
              { properties: new Set(a) }
            );
          },
        a = (e) => e,
        s = function () {
          return o(a)(...arguments);
        };
    },
    1430: (e, t, r) => {
      "use strict";
      r.d(t, { q: () => o, f: () => i });
      var n = function (e, t) {
        return (
          Object.defineProperty(e, "__recipe__", { value: t, writable: !1 }), e
        );
      };
      function i(e) {
        var { conditions: t } = e;
        if (!t) throw Error("Styles have no conditions");
        return n(
          function (e) {
            if (
              "string" == typeof e ||
              "number" == typeof e ||
              "boolean" == typeof e
            ) {
              if (!t.defaultCondition) throw Error("No default condition");
              return { [t.defaultCondition]: e };
            }
            if (Array.isArray(e)) {
              if (!("responsiveArray" in t))
                throw Error("Responsive arrays are not supported");
              var r = {};
              for (var n in t.responsiveArray)
                null != e[n] && (r[t.responsiveArray[n]] = e[n]);
              return r;
            }
            return e;
          },
          {
            importPath: "@vanilla-extract/sprinkles/createUtils",
            importName: "createNormalizeValueFn",
            args: [{ conditions: e.conditions }],
          }
        );
      }
      function o(e) {
        var { conditions: t } = e;
        if (!t) throw Error("Styles have no conditions");
        var r = i(e);
        return n(
          function (e, n) {
            if (
              "string" == typeof e ||
              "number" == typeof e ||
              "boolean" == typeof e
            ) {
              if (!t.defaultCondition) throw Error("No default condition");
              return n(e, t.defaultCondition);
            }
            var i = Array.isArray(e) ? r(e) : e,
              o = {};
            for (var a in i) null != i[a] && (o[a] = n(i[a], a));
            return o;
          },
          {
            importPath: "@vanilla-extract/sprinkles/createUtils",
            importName: "createMapValueFn",
            args: [{ conditions: e.conditions }],
          }
        );
      }
    },
    45130: (e) => {
      "use strict";
      var t = {
        single_source_shortest_paths: function (e, r, n) {
          var i,
            o,
            a,
            s,
            l,
            c,
            u,
            d = {},
            h = {};
          h[r] = 0;
          var p = t.PriorityQueue.make();
          for (p.push(r, 0); !p.empty(); )
            for (a in ((o = (i = p.pop()).value),
            (s = i.cost),
            (l = e[o] || {})))
              l.hasOwnProperty(a) &&
                ((c = s + l[a]),
                (u = h[a]),
                (void 0 === h[a] || u > c) &&
                  ((h[a] = c), p.push(a, c), (d[a] = o)));
          if (void 0 !== n && void 0 === h[n])
            throw Error(
              ["Could not find a path from ", r, " to ", n, "."].join("")
            );
          return d;
        },
        extract_shortest_path_from_predecessor_list: function (e, t) {
          for (var r = [], n = t; n; ) r.push(n), e[n], (n = e[n]);
          return r.reverse(), r;
        },
        find_path: function (e, r, n) {
          var i = t.single_source_shortest_paths(e, r, n);
          return t.extract_shortest_path_from_predecessor_list(i, n);
        },
        PriorityQueue: {
          make: function (e) {
            var r,
              n = t.PriorityQueue,
              i = {};
            for (r in ((e = e || {}), n)) n.hasOwnProperty(r) && (i[r] = n[r]);
            return (i.queue = []), (i.sorter = e.sorter || n.default_sorter), i;
          },
          default_sorter: function (e, t) {
            return e.cost - t.cost;
          },
          push: function (e, t) {
            this.queue.push({ value: e, cost: t }),
              this.queue.sort(this.sorter);
          },
          pop: function () {
            return this.queue.shift();
          },
          empty: function () {
            return 0 === this.queue.length;
          },
        },
      };
      e.exports = t;
    },
    25778: (e) => {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        r = "~";
      function n() {}
      function i(e, t, r) {
        (this.fn = e), (this.context = t), (this.once = r || !1);
      }
      function o(e, t, n, o, a) {
        if ("function" != typeof n)
          throw TypeError("The listener must be a function");
        var s = new i(n, o || e, a),
          l = r ? r + t : t;
        return (
          e._events[l]
            ? e._events[l].fn
              ? (e._events[l] = [e._events[l], s])
              : e._events[l].push(s)
            : ((e._events[l] = s), e._eventsCount++),
          e
        );
      }
      function a(e, t) {
        0 == --e._eventsCount ? (e._events = new n()) : delete e._events[t];
      }
      function s() {
        (this._events = new n()), (this._eventsCount = 0);
      }
      Object.create &&
        ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1)),
        (s.prototype.eventNames = function () {
          var e,
            n,
            i = [];
          if (0 === this._eventsCount) return i;
          for (n in (e = this._events))
            t.call(e, n) && i.push(r ? n.slice(1) : n);
          return Object.getOwnPropertySymbols
            ? i.concat(Object.getOwnPropertySymbols(e))
            : i;
        }),
        (s.prototype.listeners = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var i = 0, o = n.length, a = Array(o); i < o; i++)
            a[i] = n[i].fn;
          return a;
        }),
        (s.prototype.listenerCount = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (s.prototype.emit = function (e, t, n, i, o, a) {
          var s = r ? r + e : e;
          if (!this._events[s]) return !1;
          var l,
            c,
            u = this._events[s],
            d = arguments.length;
          if (u.fn) {
            switch ((u.once && this.removeListener(e, u.fn, void 0, !0), d)) {
              case 1:
                return u.fn.call(u.context), !0;
              case 2:
                return u.fn.call(u.context, t), !0;
              case 3:
                return u.fn.call(u.context, t, n), !0;
              case 4:
                return u.fn.call(u.context, t, n, i), !0;
              case 5:
                return u.fn.call(u.context, t, n, i, o), !0;
              case 6:
                return u.fn.call(u.context, t, n, i, o, a), !0;
            }
            for (c = 1, l = Array(d - 1); c < d; c++) l[c - 1] = arguments[c];
            u.fn.apply(u.context, l);
          } else {
            var h,
              p = u.length;
            for (c = 0; c < p; c++)
              switch (
                (u[c].once && this.removeListener(e, u[c].fn, void 0, !0), d)
              ) {
                case 1:
                  u[c].fn.call(u[c].context);
                  break;
                case 2:
                  u[c].fn.call(u[c].context, t);
                  break;
                case 3:
                  u[c].fn.call(u[c].context, t, n);
                  break;
                case 4:
                  u[c].fn.call(u[c].context, t, n, i);
                  break;
                default:
                  if (!l)
                    for (h = 1, l = Array(d - 1); h < d; h++)
                      l[h - 1] = arguments[h];
                  u[c].fn.apply(u[c].context, l);
              }
          }
          return !0;
        }),
        (s.prototype.on = function (e, t, r) {
          return o(this, e, t, r, !1);
        }),
        (s.prototype.once = function (e, t, r) {
          return o(this, e, t, r, !0);
        }),
        (s.prototype.removeListener = function (e, t, n, i) {
          var o = r ? r + e : e;
          if (!this._events[o]) return this;
          if (!t) return a(this, o), this;
          var s = this._events[o];
          if (s.fn)
            s.fn !== t ||
              (i && !s.once) ||
              (n && s.context !== n) ||
              a(this, o);
          else {
            for (var l = 0, c = [], u = s.length; l < u; l++)
              (s[l].fn !== t ||
                (i && !s[l].once) ||
                (n && s[l].context !== n)) &&
                c.push(s[l]);
            c.length
              ? (this._events[o] = 1 === c.length ? c[0] : c)
              : a(this, o);
          }
          return this;
        }),
        (s.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = r ? r + e : e), this._events[t] && a(this, t))
              : ((this._events = new n()), (this._eventsCount = 0)),
            this
          );
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.addListener = s.prototype.on),
        (s.prefixed = r),
        (s.EventEmitter = s),
        (e.exports = s);
    },
    49290: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          ErrorCode: () => l,
          FormatError: () => er,
          IntlMessageFormat: () => ec,
          InvalidValueError: () => en,
          InvalidValueTypeError: () => ei,
          MissingValueError: () => eo,
          PART_TYPE: () => c,
          default: () => eu,
          formatToParts: () => es,
          isFormatXMLElementFn: () => ea,
        });
      var n,
        i,
        o,
        a,
        s,
        l,
        c,
        u = r(6476),
        d = r(21535);
      function h(e) {
        return e.type === i.literal;
      }
      function p(e) {
        return e.type === i.number;
      }
      function f(e) {
        return e.type === i.date;
      }
      function m(e) {
        return e.type === i.time;
      }
      function g(e) {
        return e.type === i.select;
      }
      function y(e) {
        return e.type === i.plural;
      }
      function b(e) {
        return e.type === i.tag;
      }
      function w(e) {
        return !!(e && "object" == typeof e && e.type === o.number);
      }
      function v(e) {
        return !!(e && "object" == typeof e && e.type === o.dateTime);
      }
      !(function (e) {
        (e[(e.EXPECT_ARGUMENT_CLOSING_BRACE = 1)] =
          "EXPECT_ARGUMENT_CLOSING_BRACE"),
          (e[(e.EMPTY_ARGUMENT = 2)] = "EMPTY_ARGUMENT"),
          (e[(e.MALFORMED_ARGUMENT = 3)] = "MALFORMED_ARGUMENT"),
          (e[(e.EXPECT_ARGUMENT_TYPE = 4)] = "EXPECT_ARGUMENT_TYPE"),
          (e[(e.INVALID_ARGUMENT_TYPE = 5)] = "INVALID_ARGUMENT_TYPE"),
          (e[(e.EXPECT_ARGUMENT_STYLE = 6)] = "EXPECT_ARGUMENT_STYLE"),
          (e[(e.INVALID_NUMBER_SKELETON = 7)] = "INVALID_NUMBER_SKELETON"),
          (e[(e.INVALID_DATE_TIME_SKELETON = 8)] =
            "INVALID_DATE_TIME_SKELETON"),
          (e[(e.EXPECT_NUMBER_SKELETON = 9)] = "EXPECT_NUMBER_SKELETON"),
          (e[(e.EXPECT_DATE_TIME_SKELETON = 10)] = "EXPECT_DATE_TIME_SKELETON"),
          (e[(e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11)] =
            "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"),
          (e[(e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12)] =
            "EXPECT_SELECT_ARGUMENT_OPTIONS"),
          (e[(e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13)] =
            "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"),
          (e[(e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14)] =
            "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"),
          (e[(e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15)] =
            "EXPECT_SELECT_ARGUMENT_SELECTOR"),
          (e[(e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16)] =
            "EXPECT_PLURAL_ARGUMENT_SELECTOR"),
          (e[(e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17)] =
            "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"),
          (e[(e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18)] =
            "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"),
          (e[(e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19)] =
            "INVALID_PLURAL_ARGUMENT_SELECTOR"),
          (e[(e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20)] =
            "DUPLICATE_PLURAL_ARGUMENT_SELECTOR"),
          (e[(e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21)] =
            "DUPLICATE_SELECT_ARGUMENT_SELECTOR"),
          (e[(e.MISSING_OTHER_CLAUSE = 22)] = "MISSING_OTHER_CLAUSE"),
          (e[(e.INVALID_TAG = 23)] = "INVALID_TAG"),
          (e[(e.INVALID_TAG_NAME = 25)] = "INVALID_TAG_NAME"),
          (e[(e.UNMATCHED_CLOSING_TAG = 26)] = "UNMATCHED_CLOSING_TAG"),
          (e[(e.UNCLOSED_TAG = 27)] = "UNCLOSED_TAG");
      })(n || (n = {})),
        (function (e) {
          (e[(e.literal = 0)] = "literal"),
            (e[(e.argument = 1)] = "argument"),
            (e[(e.number = 2)] = "number"),
            (e[(e.date = 3)] = "date"),
            (e[(e.time = 4)] = "time"),
            (e[(e.select = 5)] = "select"),
            (e[(e.plural = 6)] = "plural"),
            (e[(e.pound = 7)] = "pound"),
            (e[(e.tag = 8)] = "tag");
        })(i || (i = {})),
        (function (e) {
          (e[(e.number = 0)] = "number"), (e[(e.dateTime = 1)] = "dateTime");
        })(o || (o = {}));
      var A = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        E =
          /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,
        C = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
        x = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        _ = /^(@+)?(\+|#+)?[rs]?$/g,
        k = /(\*)(0+)|(#+)(0+)|(0+)/g,
        I = /^(0+)$/;
      function T(e) {
        var t = {};
        return (
          "r" === e[e.length - 1]
            ? (t.roundingPriority = "morePrecision")
            : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"),
          e.replace(_, function (e, r, n) {
            return (
              "string" != typeof n
                ? ((t.minimumSignificantDigits = r.length),
                  (t.maximumSignificantDigits = r.length))
                : "+" === n
                ? (t.minimumSignificantDigits = r.length)
                : "#" === r[0]
                ? (t.maximumSignificantDigits = r.length)
                : ((t.minimumSignificantDigits = r.length),
                  (t.maximumSignificantDigits =
                    r.length + ("string" == typeof n ? n.length : 0))),
              ""
            );
          }),
          t
        );
      }
      function S(e) {
        switch (e) {
          case "sign-auto":
            return { signDisplay: "auto" };
          case "sign-accounting":
          case "()":
            return { currencySign: "accounting" };
          case "sign-always":
          case "+!":
            return { signDisplay: "always" };
          case "sign-accounting-always":
          case "()!":
            return { signDisplay: "always", currencySign: "accounting" };
          case "sign-except-zero":
          case "+?":
            return { signDisplay: "exceptZero" };
          case "sign-accounting-except-zero":
          case "()?":
            return { signDisplay: "exceptZero", currencySign: "accounting" };
          case "sign-never":
          case "+_":
            return { signDisplay: "never" };
        }
      }
      function O(e) {
        return S(e) || {};
      }
      var B = {
          "001": ["H", "h"],
          419: ["h", "H", "hB", "hb"],
          AC: ["H", "h", "hb", "hB"],
          AD: ["H", "hB"],
          AE: ["h", "hB", "hb", "H"],
          AF: ["H", "hb", "hB", "h"],
          AG: ["h", "hb", "H", "hB"],
          AI: ["H", "h", "hb", "hB"],
          AL: ["h", "H", "hB"],
          AM: ["H", "hB"],
          AO: ["H", "hB"],
          AR: ["h", "H", "hB", "hb"],
          AS: ["h", "H"],
          AT: ["H", "hB"],
          AU: ["h", "hb", "H", "hB"],
          AW: ["H", "hB"],
          AX: ["H"],
          AZ: ["H", "hB", "h"],
          BA: ["H", "hB", "h"],
          BB: ["h", "hb", "H", "hB"],
          BD: ["h", "hB", "H"],
          BE: ["H", "hB"],
          BF: ["H", "hB"],
          BG: ["H", "hB", "h"],
          BH: ["h", "hB", "hb", "H"],
          BI: ["H", "h"],
          BJ: ["H", "hB"],
          BL: ["H", "hB"],
          BM: ["h", "hb", "H", "hB"],
          BN: ["hb", "hB", "h", "H"],
          BO: ["h", "H", "hB", "hb"],
          BQ: ["H"],
          BR: ["H", "hB"],
          BS: ["h", "hb", "H", "hB"],
          BT: ["h", "H"],
          BW: ["H", "h", "hb", "hB"],
          BY: ["H", "h"],
          BZ: ["H", "h", "hb", "hB"],
          CA: ["h", "hb", "H", "hB"],
          CC: ["H", "h", "hb", "hB"],
          CD: ["hB", "H"],
          CF: ["H", "h", "hB"],
          CG: ["H", "hB"],
          CH: ["H", "hB", "h"],
          CI: ["H", "hB"],
          CK: ["H", "h", "hb", "hB"],
          CL: ["h", "H", "hB", "hb"],
          CM: ["H", "h", "hB"],
          CN: ["H", "hB", "hb", "h"],
          CO: ["h", "H", "hB", "hb"],
          CP: ["H"],
          CR: ["h", "H", "hB", "hb"],
          CU: ["h", "H", "hB", "hb"],
          CV: ["H", "hB"],
          CW: ["H", "hB"],
          CX: ["H", "h", "hb", "hB"],
          CY: ["h", "H", "hb", "hB"],
          CZ: ["H"],
          DE: ["H", "hB"],
          DG: ["H", "h", "hb", "hB"],
          DJ: ["h", "H"],
          DK: ["H"],
          DM: ["h", "hb", "H", "hB"],
          DO: ["h", "H", "hB", "hb"],
          DZ: ["h", "hB", "hb", "H"],
          EA: ["H", "h", "hB", "hb"],
          EC: ["h", "H", "hB", "hb"],
          EE: ["H", "hB"],
          EG: ["h", "hB", "hb", "H"],
          EH: ["h", "hB", "hb", "H"],
          ER: ["h", "H"],
          ES: ["H", "hB", "h", "hb"],
          ET: ["hB", "hb", "h", "H"],
          FI: ["H"],
          FJ: ["h", "hb", "H", "hB"],
          FK: ["H", "h", "hb", "hB"],
          FM: ["h", "hb", "H", "hB"],
          FO: ["H", "h"],
          FR: ["H", "hB"],
          GA: ["H", "hB"],
          GB: ["H", "h", "hb", "hB"],
          GD: ["h", "hb", "H", "hB"],
          GE: ["H", "hB", "h"],
          GF: ["H", "hB"],
          GG: ["H", "h", "hb", "hB"],
          GH: ["h", "H"],
          GI: ["H", "h", "hb", "hB"],
          GL: ["H", "h"],
          GM: ["h", "hb", "H", "hB"],
          GN: ["H", "hB"],
          GP: ["H", "hB"],
          GQ: ["H", "hB", "h", "hb"],
          GR: ["h", "H", "hb", "hB"],
          GT: ["h", "H", "hB", "hb"],
          GU: ["h", "hb", "H", "hB"],
          GW: ["H", "hB"],
          GY: ["h", "hb", "H", "hB"],
          HK: ["h", "hB", "hb", "H"],
          HN: ["h", "H", "hB", "hb"],
          HR: ["H", "hB"],
          HU: ["H", "h"],
          IC: ["H", "h", "hB", "hb"],
          ID: ["H"],
          IE: ["H", "h", "hb", "hB"],
          IL: ["H", "hB"],
          IM: ["H", "h", "hb", "hB"],
          IN: ["h", "H"],
          IO: ["H", "h", "hb", "hB"],
          IQ: ["h", "hB", "hb", "H"],
          IR: ["hB", "H"],
          IS: ["H"],
          IT: ["H", "hB"],
          JE: ["H", "h", "hb", "hB"],
          JM: ["h", "hb", "H", "hB"],
          JO: ["h", "hB", "hb", "H"],
          JP: ["H", "K", "h"],
          KE: ["hB", "hb", "H", "h"],
          KG: ["H", "h", "hB", "hb"],
          KH: ["hB", "h", "H", "hb"],
          KI: ["h", "hb", "H", "hB"],
          KM: ["H", "h", "hB", "hb"],
          KN: ["h", "hb", "H", "hB"],
          KP: ["h", "H", "hB", "hb"],
          KR: ["h", "H", "hB", "hb"],
          KW: ["h", "hB", "hb", "H"],
          KY: ["h", "hb", "H", "hB"],
          KZ: ["H", "hB"],
          LA: ["H", "hb", "hB", "h"],
          LB: ["h", "hB", "hb", "H"],
          LC: ["h", "hb", "H", "hB"],
          LI: ["H", "hB", "h"],
          LK: ["H", "h", "hB", "hb"],
          LR: ["h", "hb", "H", "hB"],
          LS: ["h", "H"],
          LT: ["H", "h", "hb", "hB"],
          LU: ["H", "h", "hB"],
          LV: ["H", "hB", "hb", "h"],
          LY: ["h", "hB", "hb", "H"],
          MA: ["H", "h", "hB", "hb"],
          MC: ["H", "hB"],
          MD: ["H", "hB"],
          ME: ["H", "hB", "h"],
          MF: ["H", "hB"],
          MG: ["H", "h"],
          MH: ["h", "hb", "H", "hB"],
          MK: ["H", "h", "hb", "hB"],
          ML: ["H"],
          MM: ["hB", "hb", "H", "h"],
          MN: ["H", "h", "hb", "hB"],
          MO: ["h", "hB", "hb", "H"],
          MP: ["h", "hb", "H", "hB"],
          MQ: ["H", "hB"],
          MR: ["h", "hB", "hb", "H"],
          MS: ["H", "h", "hb", "hB"],
          MT: ["H", "h"],
          MU: ["H", "h"],
          MV: ["H", "h"],
          MW: ["h", "hb", "H", "hB"],
          MX: ["h", "H", "hB", "hb"],
          MY: ["hb", "hB", "h", "H"],
          MZ: ["H", "hB"],
          NA: ["h", "H", "hB", "hb"],
          NC: ["H", "hB"],
          NE: ["H"],
          NF: ["H", "h", "hb", "hB"],
          NG: ["H", "h", "hb", "hB"],
          NI: ["h", "H", "hB", "hb"],
          NL: ["H", "hB"],
          NO: ["H", "h"],
          NP: ["H", "h", "hB"],
          NR: ["H", "h", "hb", "hB"],
          NU: ["H", "h", "hb", "hB"],
          NZ: ["h", "hb", "H", "hB"],
          OM: ["h", "hB", "hb", "H"],
          PA: ["h", "H", "hB", "hb"],
          PE: ["h", "H", "hB", "hb"],
          PF: ["H", "h", "hB"],
          PG: ["h", "H"],
          PH: ["h", "hB", "hb", "H"],
          PK: ["h", "hB", "H"],
          PL: ["H", "h"],
          PM: ["H", "hB"],
          PN: ["H", "h", "hb", "hB"],
          PR: ["h", "H", "hB", "hb"],
          PS: ["h", "hB", "hb", "H"],
          PT: ["H", "hB"],
          PW: ["h", "H"],
          PY: ["h", "H", "hB", "hb"],
          QA: ["h", "hB", "hb", "H"],
          RE: ["H", "hB"],
          RO: ["H", "hB"],
          RS: ["H", "hB", "h"],
          RU: ["H"],
          RW: ["H", "h"],
          SA: ["h", "hB", "hb", "H"],
          SB: ["h", "hb", "H", "hB"],
          SC: ["H", "h", "hB"],
          SD: ["h", "hB", "hb", "H"],
          SE: ["H"],
          SG: ["h", "hb", "H", "hB"],
          SH: ["H", "h", "hb", "hB"],
          SI: ["H", "hB"],
          SJ: ["H"],
          SK: ["H"],
          SL: ["h", "hb", "H", "hB"],
          SM: ["H", "h", "hB"],
          SN: ["H", "h", "hB"],
          SO: ["h", "H"],
          SR: ["H", "hB"],
          SS: ["h", "hb", "H", "hB"],
          ST: ["H", "hB"],
          SV: ["h", "H", "hB", "hb"],
          SX: ["H", "h", "hb", "hB"],
          SY: ["h", "hB", "hb", "H"],
          SZ: ["h", "hb", "H", "hB"],
          TA: ["H", "h", "hb", "hB"],
          TC: ["h", "hb", "H", "hB"],
          TD: ["h", "H", "hB"],
          TF: ["H", "h", "hB"],
          TG: ["H", "hB"],
          TH: ["H", "h"],
          TJ: ["H", "h"],
          TL: ["H", "hB", "hb", "h"],
          TM: ["H", "h"],
          TN: ["h", "hB", "hb", "H"],
          TO: ["h", "H"],
          TR: ["H", "hB"],
          TT: ["h", "hb", "H", "hB"],
          TW: ["hB", "hb", "h", "H"],
          TZ: ["hB", "hb", "H", "h"],
          UA: ["H", "hB", "h"],
          UG: ["hB", "hb", "H", "h"],
          UM: ["h", "hb", "H", "hB"],
          US: ["h", "hb", "H", "hB"],
          UY: ["h", "H", "hB", "hb"],
          UZ: ["H", "hB", "h"],
          VA: ["H", "h", "hB"],
          VC: ["h", "hb", "H", "hB"],
          VE: ["h", "H", "hB", "hb"],
          VG: ["h", "hb", "H", "hB"],
          VI: ["h", "hb", "H", "hB"],
          VN: ["H", "h"],
          VU: ["h", "H"],
          WF: ["H", "hB"],
          WS: ["h", "H"],
          XK: ["H", "hB", "h"],
          YE: ["h", "hB", "hb", "H"],
          YT: ["H", "hB"],
          ZA: ["H", "h", "hb", "hB"],
          ZM: ["h", "hb", "H", "hB"],
          ZW: ["H", "h"],
          "af-ZA": ["H", "h", "hB", "hb"],
          "ar-001": ["h", "hB", "hb", "H"],
          "ca-ES": ["H", "h", "hB"],
          "en-001": ["h", "hb", "H", "hB"],
          "en-HK": ["h", "hb", "H", "hB"],
          "en-IL": ["H", "h", "hb", "hB"],
          "en-MY": ["h", "hb", "H", "hB"],
          "es-BR": ["H", "h", "hB", "hb"],
          "es-ES": ["H", "h", "hB", "hb"],
          "es-GQ": ["H", "h", "hB", "hb"],
          "fr-CA": ["H", "h", "hB"],
          "gl-ES": ["H", "h", "hB"],
          "gu-IN": ["hB", "hb", "h", "H"],
          "hi-IN": ["hB", "h", "H"],
          "it-CH": ["H", "h", "hB"],
          "it-IT": ["H", "h", "hB"],
          "kn-IN": ["hB", "h", "H"],
          "ml-IN": ["hB", "h", "H"],
          "mr-IN": ["hB", "hb", "h", "H"],
          "pa-IN": ["hB", "hb", "h", "H"],
          "ta-IN": ["hB", "h", "hb", "H"],
          "te-IN": ["hB", "h", "H"],
          "zu-ZA": ["H", "hB", "hb", "h"],
        },
        N = new RegExp("^".concat(A.source, "*")),
        P = new RegExp("".concat(A.source, "*$"));
      function R(e, t) {
        return { start: e, end: t };
      }
      var M = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        D = !!String.fromCodePoint,
        L = !!Object.fromEntries,
        F = !!String.prototype.codePointAt,
        j = !!String.prototype.trimStart,
        U = !!String.prototype.trimEnd,
        H = Number.isSafeInteger
          ? Number.isSafeInteger
          : function (e) {
              return (
                "number" == typeof e &&
                isFinite(e) &&
                Math.floor(e) === e &&
                0x1fffffffffffff >= Math.abs(e)
              );
            },
        Q = !0;
      try {
        var q = Y("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        Q =
          (null === (a = q.exec("a")) || void 0 === a ? void 0 : a[0]) === "a";
      } catch (e) {
        Q = !1;
      }
      var W = M
          ? function (e, t, r) {
              return e.startsWith(t, r);
            }
          : function (e, t, r) {
              return e.slice(r, r + t.length) === t;
            },
        z = D
          ? String.fromCodePoint
          : function () {
              for (var e, t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              for (var n = "", i = t.length, o = 0; i > o; ) {
                if ((e = t[o++]) > 1114111)
                  throw RangeError(e + " is not a valid code point");
                n +=
                  e < 65536
                    ? String.fromCharCode(e)
                    : String.fromCharCode(
                        ((e -= 65536) >> 10) + 55296,
                        (e % 1024) + 56320
                      );
              }
              return n;
            },
        G = L
          ? Object.fromEntries
          : function (e) {
              for (var t = {}, r = 0; r < e.length; r++) {
                var n = e[r],
                  i = n[0],
                  o = n[1];
                t[i] = o;
              }
              return t;
            },
        Z = F
          ? function (e, t) {
              return e.codePointAt(t);
            }
          : function (e, t) {
              var r,
                n = e.length;
              if (!(t < 0) && !(t >= n)) {
                var i = e.charCodeAt(t);
                return i < 55296 ||
                  i > 56319 ||
                  t + 1 === n ||
                  (r = e.charCodeAt(t + 1)) < 56320 ||
                  r > 57343
                  ? i
                  : ((i - 55296) << 10) + (r - 56320) + 65536;
              }
            },
        K = j
          ? function (e) {
              return e.trimStart();
            }
          : function (e) {
              return e.replace(N, "");
            },
        V = U
          ? function (e) {
              return e.trimEnd();
            }
          : function (e) {
              return e.replace(P, "");
            };
      function Y(e, t) {
        return new RegExp(e, t);
      }
      if (Q) {
        var J = Y("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        s = function (e, t) {
          var r;
          return (
            (J.lastIndex = t),
            null !== (r = J.exec(e)[1]) && void 0 !== r ? r : ""
          );
        };
      } else
        s = function (e, t) {
          for (var r = []; ; ) {
            var n,
              i = Z(e, t);
            if (
              void 0 === i ||
              ee(i) ||
              ((n = i) >= 33 && n <= 35) ||
              36 === n ||
              (n >= 37 && n <= 39) ||
              40 === n ||
              41 === n ||
              42 === n ||
              43 === n ||
              44 === n ||
              45 === n ||
              (n >= 46 && n <= 47) ||
              (n >= 58 && n <= 59) ||
              (n >= 60 && n <= 62) ||
              (n >= 63 && n <= 64) ||
              91 === n ||
              92 === n ||
              93 === n ||
              94 === n ||
              96 === n ||
              123 === n ||
              124 === n ||
              125 === n ||
              126 === n ||
              161 === n ||
              (n >= 162 && n <= 165) ||
              166 === n ||
              167 === n ||
              169 === n ||
              171 === n ||
              172 === n ||
              174 === n ||
              176 === n ||
              177 === n ||
              182 === n ||
              187 === n ||
              191 === n ||
              215 === n ||
              247 === n ||
              (n >= 8208 && n <= 8213) ||
              (n >= 8214 && n <= 8215) ||
              8216 === n ||
              8217 === n ||
              8218 === n ||
              (n >= 8219 && n <= 8220) ||
              8221 === n ||
              8222 === n ||
              8223 === n ||
              (n >= 8224 && n <= 8231) ||
              (n >= 8240 && n <= 8248) ||
              8249 === n ||
              8250 === n ||
              (n >= 8251 && n <= 8254) ||
              (n >= 8257 && n <= 8259) ||
              8260 === n ||
              8261 === n ||
              8262 === n ||
              (n >= 8263 && n <= 8273) ||
              8274 === n ||
              8275 === n ||
              (n >= 8277 && n <= 8286) ||
              (n >= 8592 && n <= 8596) ||
              (n >= 8597 && n <= 8601) ||
              (n >= 8602 && n <= 8603) ||
              (n >= 8604 && n <= 8607) ||
              8608 === n ||
              (n >= 8609 && n <= 8610) ||
              8611 === n ||
              (n >= 8612 && n <= 8613) ||
              8614 === n ||
              (n >= 8615 && n <= 8621) ||
              8622 === n ||
              (n >= 8623 && n <= 8653) ||
              (n >= 8654 && n <= 8655) ||
              (n >= 8656 && n <= 8657) ||
              8658 === n ||
              8659 === n ||
              8660 === n ||
              (n >= 8661 && n <= 8691) ||
              (n >= 8692 && n <= 8959) ||
              (n >= 8960 && n <= 8967) ||
              8968 === n ||
              8969 === n ||
              8970 === n ||
              8971 === n ||
              (n >= 8972 && n <= 8991) ||
              (n >= 8992 && n <= 8993) ||
              (n >= 8994 && n <= 9e3) ||
              9001 === n ||
              9002 === n ||
              (n >= 9003 && n <= 9083) ||
              9084 === n ||
              (n >= 9085 && n <= 9114) ||
              (n >= 9115 && n <= 9139) ||
              (n >= 9140 && n <= 9179) ||
              (n >= 9180 && n <= 9185) ||
              (n >= 9186 && n <= 9254) ||
              (n >= 9255 && n <= 9279) ||
              (n >= 9280 && n <= 9290) ||
              (n >= 9291 && n <= 9311) ||
              (n >= 9472 && n <= 9654) ||
              9655 === n ||
              (n >= 9656 && n <= 9664) ||
              9665 === n ||
              (n >= 9666 && n <= 9719) ||
              (n >= 9720 && n <= 9727) ||
              (n >= 9728 && n <= 9838) ||
              9839 === n ||
              (n >= 9840 && n <= 10087) ||
              10088 === n ||
              10089 === n ||
              10090 === n ||
              10091 === n ||
              10092 === n ||
              10093 === n ||
              10094 === n ||
              10095 === n ||
              10096 === n ||
              10097 === n ||
              10098 === n ||
              10099 === n ||
              10100 === n ||
              10101 === n ||
              (n >= 10132 && n <= 10175) ||
              (n >= 10176 && n <= 10180) ||
              10181 === n ||
              10182 === n ||
              (n >= 10183 && n <= 10213) ||
              10214 === n ||
              10215 === n ||
              10216 === n ||
              10217 === n ||
              10218 === n ||
              10219 === n ||
              10220 === n ||
              10221 === n ||
              10222 === n ||
              10223 === n ||
              (n >= 10224 && n <= 10239) ||
              (n >= 10240 && n <= 10495) ||
              (n >= 10496 && n <= 10626) ||
              10627 === n ||
              10628 === n ||
              10629 === n ||
              10630 === n ||
              10631 === n ||
              10632 === n ||
              10633 === n ||
              10634 === n ||
              10635 === n ||
              10636 === n ||
              10637 === n ||
              10638 === n ||
              10639 === n ||
              10640 === n ||
              10641 === n ||
              10642 === n ||
              10643 === n ||
              10644 === n ||
              10645 === n ||
              10646 === n ||
              10647 === n ||
              10648 === n ||
              (n >= 10649 && n <= 10711) ||
              10712 === n ||
              10713 === n ||
              10714 === n ||
              10715 === n ||
              (n >= 10716 && n <= 10747) ||
              10748 === n ||
              10749 === n ||
              (n >= 10750 && n <= 11007) ||
              (n >= 11008 && n <= 11055) ||
              (n >= 11056 && n <= 11076) ||
              (n >= 11077 && n <= 11078) ||
              (n >= 11079 && n <= 11084) ||
              (n >= 11085 && n <= 11123) ||
              (n >= 11124 && n <= 11125) ||
              (n >= 11126 && n <= 11157) ||
              11158 === n ||
              (n >= 11159 && n <= 11263) ||
              (n >= 11776 && n <= 11777) ||
              11778 === n ||
              11779 === n ||
              11780 === n ||
              11781 === n ||
              (n >= 11782 && n <= 11784) ||
              11785 === n ||
              11786 === n ||
              11787 === n ||
              11788 === n ||
              11789 === n ||
              (n >= 11790 && n <= 11798) ||
              11799 === n ||
              (n >= 11800 && n <= 11801) ||
              11802 === n ||
              11803 === n ||
              11804 === n ||
              11805 === n ||
              (n >= 11806 && n <= 11807) ||
              11808 === n ||
              11809 === n ||
              11810 === n ||
              11811 === n ||
              11812 === n ||
              11813 === n ||
              11814 === n ||
              11815 === n ||
              11816 === n ||
              11817 === n ||
              (n >= 11818 && n <= 11822) ||
              11823 === n ||
              (n >= 11824 && n <= 11833) ||
              (n >= 11834 && n <= 11835) ||
              (n >= 11836 && n <= 11839) ||
              11840 === n ||
              11841 === n ||
              11842 === n ||
              (n >= 11843 && n <= 11855) ||
              (n >= 11856 && n <= 11857) ||
              11858 === n ||
              (n >= 11859 && n <= 11903) ||
              (n >= 12289 && n <= 12291) ||
              12296 === n ||
              12297 === n ||
              12298 === n ||
              12299 === n ||
              12300 === n ||
              12301 === n ||
              12302 === n ||
              12303 === n ||
              12304 === n ||
              12305 === n ||
              (n >= 12306 && n <= 12307) ||
              12308 === n ||
              12309 === n ||
              12310 === n ||
              12311 === n ||
              12312 === n ||
              12313 === n ||
              12314 === n ||
              12315 === n ||
              12316 === n ||
              12317 === n ||
              (n >= 12318 && n <= 12319) ||
              12320 === n ||
              12336 === n ||
              64830 === n ||
              64831 === n ||
              (n >= 65093 && n <= 65094)
            )
              break;
            r.push(i), (t += i >= 65536 ? 2 : 1);
          }
          return z.apply(void 0, r);
        };
      var X = (function () {
        function e(e, t) {
          void 0 === t && (t = {}),
            (this.message = e),
            (this.position = { offset: 0, line: 1, column: 1 }),
            (this.ignoreTag = !!t.ignoreTag),
            (this.locale = t.locale),
            (this.requiresOtherClause = !!t.requiresOtherClause),
            (this.shouldParseSkeletons = !!t.shouldParseSkeletons);
        }
        return (
          (e.prototype.parse = function () {
            if (0 !== this.offset())
              throw Error("parser can only be used once");
            return this.parseMessage(0, "", !1);
          }),
          (e.prototype.parseMessage = function (e, t, r) {
            for (var o = []; !this.isEOF(); ) {
              var a = this.char();
              if (123 === a) {
                var s = this.parseArgument(e, r);
                if (s.err) return s;
                o.push(s.val);
              } else if (125 === a && e > 0) break;
              else if (35 === a && ("plural" === t || "selectordinal" === t)) {
                var l = this.clonePosition();
                this.bump(),
                  o.push({
                    type: i.pound,
                    location: R(l, this.clonePosition()),
                  });
              } else if (60 !== a || this.ignoreTag || 47 !== this.peek()) {
                if (60 === a && !this.ignoreTag && $(this.peek() || 0)) {
                  var s = this.parseTag(e, t);
                  if (s.err) return s;
                  o.push(s.val);
                } else {
                  var s = this.parseLiteral(e, t);
                  if (s.err) return s;
                  o.push(s.val);
                }
              } else {
                if (!r)
                  return this.error(
                    n.UNMATCHED_CLOSING_TAG,
                    R(this.clonePosition(), this.clonePosition())
                  );
                break;
              }
            }
            return { val: o, err: null };
          }),
          (e.prototype.parseTag = function (e, t) {
            var r = this.clonePosition();
            this.bump();
            var o = this.parseTagName();
            if ((this.bumpSpace(), this.bumpIf("/>")))
              return {
                val: {
                  type: i.literal,
                  value: "<".concat(o, "/>"),
                  location: R(r, this.clonePosition()),
                },
                err: null,
              };
            if (!this.bumpIf(">"))
              return this.error(n.INVALID_TAG, R(r, this.clonePosition()));
            var a = this.parseMessage(e + 1, t, !0);
            if (a.err) return a;
            var s = a.val,
              l = this.clonePosition();
            if (!this.bumpIf("</"))
              return this.error(n.UNCLOSED_TAG, R(r, this.clonePosition()));
            if (this.isEOF() || !$(this.char()))
              return this.error(n.INVALID_TAG, R(l, this.clonePosition()));
            var c = this.clonePosition();
            return o !== this.parseTagName()
              ? this.error(n.UNMATCHED_CLOSING_TAG, R(c, this.clonePosition()))
              : (this.bumpSpace(), this.bumpIf(">"))
              ? {
                  val: {
                    type: i.tag,
                    value: o,
                    children: s,
                    location: R(r, this.clonePosition()),
                  },
                  err: null,
                }
              : this.error(n.INVALID_TAG, R(l, this.clonePosition()));
          }),
          (e.prototype.parseTagName = function () {
            var e,
              t = this.offset();
            for (
              this.bump();
              !this.isEOF() &&
              (45 === (e = this.char()) ||
                46 === e ||
                (e >= 48 && e <= 57) ||
                95 === e ||
                (e >= 97 && e <= 122) ||
                (e >= 65 && e <= 90) ||
                183 == e ||
                (e >= 192 && e <= 214) ||
                (e >= 216 && e <= 246) ||
                (e >= 248 && e <= 893) ||
                (e >= 895 && e <= 8191) ||
                (e >= 8204 && e <= 8205) ||
                (e >= 8255 && e <= 8256) ||
                (e >= 8304 && e <= 8591) ||
                (e >= 11264 && e <= 12271) ||
                (e >= 12289 && e <= 55295) ||
                (e >= 63744 && e <= 64975) ||
                (e >= 65008 && e <= 65533) ||
                (e >= 65536 && e <= 983039));

            )
              this.bump();
            return this.message.slice(t, this.offset());
          }),
          (e.prototype.parseLiteral = function (e, t) {
            for (var r = this.clonePosition(), n = ""; ; ) {
              var o = this.tryParseQuote(t);
              if (o) {
                n += o;
                continue;
              }
              var a = this.tryParseUnquoted(e, t);
              if (a) {
                n += a;
                continue;
              }
              var s = this.tryParseLeftAngleBracket();
              if (s) {
                n += s;
                continue;
              }
              break;
            }
            var l = R(r, this.clonePosition());
            return {
              val: { type: i.literal, value: n, location: l },
              err: null,
            };
          }),
          (e.prototype.tryParseLeftAngleBracket = function () {
            var e;
            return this.isEOF() ||
              60 !== this.char() ||
              (!this.ignoreTag && ($((e = this.peek() || 0)) || 47 === e))
              ? null
              : (this.bump(), "<");
          }),
          (e.prototype.tryParseQuote = function (e) {
            if (this.isEOF() || 39 !== this.char()) return null;
            switch (this.peek()) {
              case 39:
                return this.bump(), this.bump(), "'";
              case 123:
              case 60:
              case 62:
              case 125:
                break;
              case 35:
                if ("plural" === e || "selectordinal" === e) break;
                return null;
              default:
                return null;
            }
            this.bump();
            var t = [this.char()];
            for (this.bump(); !this.isEOF(); ) {
              var r = this.char();
              if (39 === r) {
                if (39 === this.peek()) t.push(39), this.bump();
                else {
                  this.bump();
                  break;
                }
              } else t.push(r);
              this.bump();
            }
            return z.apply(void 0, t);
          }),
          (e.prototype.tryParseUnquoted = function (e, t) {
            if (this.isEOF()) return null;
            var r = this.char();
            return 60 === r ||
              123 === r ||
              (35 === r && ("plural" === t || "selectordinal" === t)) ||
              (125 === r && e > 0)
              ? null
              : (this.bump(), z(r));
          }),
          (e.prototype.parseArgument = function (e, t) {
            var r = this.clonePosition();
            if ((this.bump(), this.bumpSpace(), this.isEOF()))
              return this.error(
                n.EXPECT_ARGUMENT_CLOSING_BRACE,
                R(r, this.clonePosition())
              );
            if (125 === this.char())
              return (
                this.bump(),
                this.error(n.EMPTY_ARGUMENT, R(r, this.clonePosition()))
              );
            var o = this.parseIdentifierIfPossible().value;
            if (!o)
              return this.error(
                n.MALFORMED_ARGUMENT,
                R(r, this.clonePosition())
              );
            if ((this.bumpSpace(), this.isEOF()))
              return this.error(
                n.EXPECT_ARGUMENT_CLOSING_BRACE,
                R(r, this.clonePosition())
              );
            switch (this.char()) {
              case 125:
                return (
                  this.bump(),
                  {
                    val: {
                      type: i.argument,
                      value: o,
                      location: R(r, this.clonePosition()),
                    },
                    err: null,
                  }
                );
              case 44:
                if ((this.bump(), this.bumpSpace(), this.isEOF()))
                  return this.error(
                    n.EXPECT_ARGUMENT_CLOSING_BRACE,
                    R(r, this.clonePosition())
                  );
                return this.parseArgumentOptions(e, t, o, r);
              default:
                return this.error(
                  n.MALFORMED_ARGUMENT,
                  R(r, this.clonePosition())
                );
            }
          }),
          (e.prototype.parseIdentifierIfPossible = function () {
            var e = this.clonePosition(),
              t = this.offset(),
              r = s(this.message, t),
              n = t + r.length;
            return (
              this.bumpTo(n), { value: r, location: R(e, this.clonePosition()) }
            );
          }),
          (e.prototype.parseArgumentOptions = function (e, t, r, a) {
            var s,
              l = this.clonePosition(),
              c = this.parseIdentifierIfPossible().value,
              d = this.clonePosition();
            switch (c) {
              case "":
                return this.error(n.EXPECT_ARGUMENT_TYPE, R(l, d));
              case "number":
              case "date":
              case "time":
                this.bumpSpace();
                var h = null;
                if (this.bumpIf(",")) {
                  this.bumpSpace();
                  var p = this.clonePosition(),
                    f = this.parseSimpleArgStyleIfPossible();
                  if (f.err) return f;
                  var m = V(f.val);
                  if (0 === m.length)
                    return this.error(
                      n.EXPECT_ARGUMENT_STYLE,
                      R(this.clonePosition(), this.clonePosition())
                    );
                  h = { style: m, styleLocation: R(p, this.clonePosition()) };
                }
                var g = this.tryParseArgumentClose(a);
                if (g.err) return g;
                var y = R(a, this.clonePosition());
                if (h && W(null == h ? void 0 : h.style, "::", 0)) {
                  var b,
                    w = K(h.style.slice(2));
                  if ("number" === c) {
                    var f = this.parseNumberSkeletonFromString(
                      w,
                      h.styleLocation
                    );
                    if (f.err) return f;
                    return {
                      val: {
                        type: i.number,
                        value: r,
                        location: y,
                        style: f.val,
                      },
                      err: null,
                    };
                  }
                  if (0 === w.length)
                    return this.error(n.EXPECT_DATE_TIME_SKELETON, y);
                  var v = w;
                  this.locale &&
                    (v = (function (e, t) {
                      for (var r = "", n = 0; n < e.length; n++) {
                        var i = e.charAt(n);
                        if ("j" === i) {
                          for (
                            var o = 0;
                            n + 1 < e.length && e.charAt(n + 1) === i;

                          )
                            o++, n++;
                          var a = 1 + (1 & o),
                            s = o < 2 ? 1 : 3 + (o >> 1),
                            l = (function (e) {
                              var t,
                                r = e.hourCycle;
                              if (
                                (void 0 === r &&
                                  e.hourCycles &&
                                  e.hourCycles.length &&
                                  (r = e.hourCycles[0]),
                                r)
                              )
                                switch (r) {
                                  case "h24":
                                    return "k";
                                  case "h23":
                                    return "H";
                                  case "h12":
                                    return "h";
                                  case "h11":
                                    return "K";
                                  default:
                                    throw Error("Invalid hourCycle");
                                }
                              var n = e.language;
                              return (
                                "root" !== n && (t = e.maximize().region),
                                (B[t || ""] ||
                                  B[n || ""] ||
                                  B["".concat(n, "-001")] ||
                                  B["001"])[0]
                              );
                            })(t);
                          for (("H" == l || "k" == l) && (s = 0); s-- > 0; )
                            r += "a";
                          for (; a-- > 0; ) r = l + r;
                        } else "J" === i ? (r += "H") : (r += i);
                      }
                      return r;
                    })(w, this.locale));
                  var m = {
                    type: o.dateTime,
                    pattern: v,
                    location: h.styleLocation,
                    parsedOptions: this.shouldParseSkeletons
                      ? ((b = {}),
                        v.replace(E, function (e) {
                          var t = e.length;
                          switch (e[0]) {
                            case "G":
                              b.era =
                                4 === t ? "long" : 5 === t ? "narrow" : "short";
                              break;
                            case "y":
                              b.year = 2 === t ? "2-digit" : "numeric";
                              break;
                            case "Y":
                            case "u":
                            case "U":
                            case "r":
                              throw RangeError(
                                "`Y/u/U/r` (year) patterns are not supported, use `y` instead"
                              );
                            case "q":
                            case "Q":
                              throw RangeError(
                                "`q/Q` (quarter) patterns are not supported"
                              );
                            case "M":
                            case "L":
                              b.month = [
                                "numeric",
                                "2-digit",
                                "short",
                                "long",
                                "narrow",
                              ][t - 1];
                              break;
                            case "w":
                            case "W":
                              throw RangeError(
                                "`w/W` (week) patterns are not supported"
                              );
                            case "d":
                              b.day = ["numeric", "2-digit"][t - 1];
                              break;
                            case "D":
                            case "F":
                            case "g":
                              throw RangeError(
                                "`D/F/g` (day) patterns are not supported, use `d` instead"
                              );
                            case "E":
                              b.weekday =
                                4 === t ? "long" : 5 === t ? "narrow" : "short";
                              break;
                            case "e":
                              if (t < 4)
                                throw RangeError(
                                  "`e..eee` (weekday) patterns are not supported"
                                );
                              b.weekday = ["short", "long", "narrow", "short"][
                                t - 4
                              ];
                              break;
                            case "c":
                              if (t < 4)
                                throw RangeError(
                                  "`c..ccc` (weekday) patterns are not supported"
                                );
                              b.weekday = ["short", "long", "narrow", "short"][
                                t - 4
                              ];
                              break;
                            case "a":
                              b.hour12 = !0;
                              break;
                            case "b":
                            case "B":
                              throw RangeError(
                                "`b/B` (period) patterns are not supported, use `a` instead"
                              );
                            case "h":
                              (b.hourCycle = "h12"),
                                (b.hour = ["numeric", "2-digit"][t - 1]);
                              break;
                            case "H":
                              (b.hourCycle = "h23"),
                                (b.hour = ["numeric", "2-digit"][t - 1]);
                              break;
                            case "K":
                              (b.hourCycle = "h11"),
                                (b.hour = ["numeric", "2-digit"][t - 1]);
                              break;
                            case "k":
                              (b.hourCycle = "h24"),
                                (b.hour = ["numeric", "2-digit"][t - 1]);
                              break;
                            case "j":
                            case "J":
                            case "C":
                              throw RangeError(
                                "`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead"
                              );
                            case "m":
                              b.minute = ["numeric", "2-digit"][t - 1];
                              break;
                            case "s":
                              b.second = ["numeric", "2-digit"][t - 1];
                              break;
                            case "S":
                            case "A":
                              throw RangeError(
                                "`S/A` (second) patterns are not supported, use `s` instead"
                              );
                            case "z":
                              b.timeZoneName = t < 4 ? "short" : "long";
                              break;
                            case "Z":
                            case "O":
                            case "v":
                            case "V":
                            case "X":
                            case "x":
                              throw RangeError(
                                "`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead"
                              );
                          }
                          return "";
                        }),
                        b)
                      : {},
                  };
                  return {
                    val: {
                      type: "date" === c ? i.date : i.time,
                      value: r,
                      location: y,
                      style: m,
                    },
                    err: null,
                  };
                }
                return {
                  val: {
                    type:
                      "number" === c
                        ? i.number
                        : "date" === c
                        ? i.date
                        : i.time,
                    value: r,
                    location: y,
                    style:
                      null !== (s = null == h ? void 0 : h.style) &&
                      void 0 !== s
                        ? s
                        : null,
                  },
                  err: null,
                };
              case "plural":
              case "selectordinal":
              case "select":
                var A = this.clonePosition();
                if ((this.bumpSpace(), !this.bumpIf(",")))
                  return this.error(
                    n.EXPECT_SELECT_ARGUMENT_OPTIONS,
                    R(A, (0, u.__assign)({}, A))
                  );
                this.bumpSpace();
                var C = this.parseIdentifierIfPossible(),
                  x = 0;
                if ("select" !== c && "offset" === C.value) {
                  if (!this.bumpIf(":"))
                    return this.error(
                      n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                      R(this.clonePosition(), this.clonePosition())
                    );
                  this.bumpSpace();
                  var f = this.tryParseDecimalInteger(
                    n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                    n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE
                  );
                  if (f.err) return f;
                  this.bumpSpace(),
                    (C = this.parseIdentifierIfPossible()),
                    (x = f.val);
                }
                var _ = this.tryParsePluralOrSelectOptions(e, c, t, C);
                if (_.err) return _;
                var g = this.tryParseArgumentClose(a);
                if (g.err) return g;
                var k = R(a, this.clonePosition());
                if ("select" === c)
                  return {
                    val: {
                      type: i.select,
                      value: r,
                      options: G(_.val),
                      location: k,
                    },
                    err: null,
                  };
                return {
                  val: {
                    type: i.plural,
                    value: r,
                    options: G(_.val),
                    offset: x,
                    pluralType: "plural" === c ? "cardinal" : "ordinal",
                    location: k,
                  },
                  err: null,
                };
              default:
                return this.error(n.INVALID_ARGUMENT_TYPE, R(l, d));
            }
          }),
          (e.prototype.tryParseArgumentClose = function (e) {
            return this.isEOF() || 125 !== this.char()
              ? this.error(
                  n.EXPECT_ARGUMENT_CLOSING_BRACE,
                  R(e, this.clonePosition())
                )
              : (this.bump(), { val: !0, err: null });
          }),
          (e.prototype.parseSimpleArgStyleIfPossible = function () {
            for (var e = 0, t = this.clonePosition(); !this.isEOF(); )
              switch (this.char()) {
                case 39:
                  this.bump();
                  var r = this.clonePosition();
                  if (!this.bumpUntil("'"))
                    return this.error(
                      n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
                      R(r, this.clonePosition())
                    );
                  this.bump();
                  break;
                case 123:
                  (e += 1), this.bump();
                  break;
                case 125:
                  if (!(e > 0))
                    return {
                      val: this.message.slice(t.offset, this.offset()),
                      err: null,
                    };
                  e -= 1;
                  break;
                default:
                  this.bump();
              }
            return {
              val: this.message.slice(t.offset, this.offset()),
              err: null,
            };
          }),
          (e.prototype.parseNumberSkeletonFromString = function (e, t) {
            var r = [];
            try {
              r = (function (e) {
                if (0 === e.length)
                  throw Error("Number skeleton cannot be empty");
                for (
                  var t = e.split(C).filter(function (e) {
                      return e.length > 0;
                    }),
                    r = [],
                    n = 0;
                  n < t.length;
                  n++
                ) {
                  var i = t[n].split("/");
                  if (0 === i.length) throw Error("Invalid number skeleton");
                  for (var o = i[0], a = i.slice(1), s = 0; s < a.length; s++)
                    if (0 === a[s].length)
                      throw Error("Invalid number skeleton");
                  r.push({ stem: o, options: a });
                }
                return r;
              })(e);
            } catch (e) {
              return this.error(n.INVALID_NUMBER_SKELETON, t);
            }
            return {
              val: {
                type: o.number,
                tokens: r,
                location: t,
                parsedOptions: this.shouldParseSkeletons
                  ? (function (e) {
                      for (var t = {}, r = 0; r < e.length; r++) {
                        var n = e[r];
                        switch (n.stem) {
                          case "percent":
                          case "%":
                            t.style = "percent";
                            continue;
                          case "%x100":
                            (t.style = "percent"), (t.scale = 100);
                            continue;
                          case "currency":
                            (t.style = "currency"), (t.currency = n.options[0]);
                            continue;
                          case "group-off":
                          case ",_":
                            t.useGrouping = !1;
                            continue;
                          case "precision-integer":
                          case ".":
                            t.maximumFractionDigits = 0;
                            continue;
                          case "measure-unit":
                          case "unit":
                            (t.style = "unit"),
                              (t.unit = n.options[0].replace(/^(.*?)-/, ""));
                            continue;
                          case "compact-short":
                          case "K":
                            (t.notation = "compact"),
                              (t.compactDisplay = "short");
                            continue;
                          case "compact-long":
                          case "KK":
                            (t.notation = "compact"),
                              (t.compactDisplay = "long");
                            continue;
                          case "scientific":
                            t = (0, u.__assign)(
                              (0, u.__assign)((0, u.__assign)({}, t), {
                                notation: "scientific",
                              }),
                              n.options.reduce(function (e, t) {
                                return (0,
                                u.__assign)((0, u.__assign)({}, e), S(t) || {});
                              }, {})
                            );
                            continue;
                          case "engineering":
                            t = (0, u.__assign)(
                              (0, u.__assign)((0, u.__assign)({}, t), {
                                notation: "engineering",
                              }),
                              n.options.reduce(function (e, t) {
                                return (0,
                                u.__assign)((0, u.__assign)({}, e), S(t) || {});
                              }, {})
                            );
                            continue;
                          case "notation-simple":
                            t.notation = "standard";
                            continue;
                          case "unit-width-narrow":
                            (t.currencyDisplay = "narrowSymbol"),
                              (t.unitDisplay = "narrow");
                            continue;
                          case "unit-width-short":
                            (t.currencyDisplay = "code"),
                              (t.unitDisplay = "short");
                            continue;
                          case "unit-width-full-name":
                            (t.currencyDisplay = "name"),
                              (t.unitDisplay = "long");
                            continue;
                          case "unit-width-iso-code":
                            t.currencyDisplay = "symbol";
                            continue;
                          case "scale":
                            t.scale = parseFloat(n.options[0]);
                            continue;
                          case "rounding-mode-floor":
                            t.roundingMode = "floor";
                            continue;
                          case "rounding-mode-ceiling":
                            t.roundingMode = "ceil";
                            continue;
                          case "rounding-mode-down":
                            t.roundingMode = "trunc";
                            continue;
                          case "rounding-mode-up":
                            t.roundingMode = "expand";
                            continue;
                          case "rounding-mode-half-even":
                            t.roundingMode = "halfEven";
                            continue;
                          case "rounding-mode-half-down":
                            t.roundingMode = "halfTrunc";
                            continue;
                          case "rounding-mode-half-up":
                            t.roundingMode = "halfExpand";
                            continue;
                          case "integer-width":
                            if (n.options.length > 1)
                              throw RangeError(
                                "integer-width stems only accept a single optional option"
                              );
                            n.options[0].replace(
                              k,
                              function (e, r, n, i, o, a) {
                                if (r) t.minimumIntegerDigits = n.length;
                                else if (i && o)
                                  throw Error(
                                    "We currently do not support maximum integer digits"
                                  );
                                else if (a)
                                  throw Error(
                                    "We currently do not support exact integer digits"
                                  );
                                return "";
                              }
                            );
                            continue;
                        }
                        if (I.test(n.stem)) {
                          t.minimumIntegerDigits = n.stem.length;
                          continue;
                        }
                        if (x.test(n.stem)) {
                          if (n.options.length > 1)
                            throw RangeError(
                              "Fraction-precision stems only accept a single optional option"
                            );
                          n.stem.replace(x, function (e, r, n, i, o, a) {
                            return (
                              "*" === n
                                ? (t.minimumFractionDigits = r.length)
                                : i && "#" === i[0]
                                ? (t.maximumFractionDigits = i.length)
                                : o && a
                                ? ((t.minimumFractionDigits = o.length),
                                  (t.maximumFractionDigits =
                                    o.length + a.length))
                                : ((t.minimumFractionDigits = r.length),
                                  (t.maximumFractionDigits = r.length)),
                              ""
                            );
                          });
                          var i = n.options[0];
                          "w" === i
                            ? (t = (0, u.__assign)((0, u.__assign)({}, t), {
                                trailingZeroDisplay: "stripIfInteger",
                              }))
                            : i &&
                              (t = (0, u.__assign)(
                                (0, u.__assign)({}, t),
                                T(i)
                              ));
                          continue;
                        }
                        if (_.test(n.stem)) {
                          t = (0, u.__assign)(
                            (0, u.__assign)({}, t),
                            T(n.stem)
                          );
                          continue;
                        }
                        var o = S(n.stem);
                        o && (t = (0, u.__assign)((0, u.__assign)({}, t), o));
                        var a = (function (e) {
                          var t;
                          if (
                            ("E" === e[0] && "E" === e[1]
                              ? ((t = { notation: "engineering" }),
                                (e = e.slice(2)))
                              : "E" === e[0] &&
                                ((t = { notation: "scientific" }),
                                (e = e.slice(1))),
                            t)
                          ) {
                            var r = e.slice(0, 2);
                            if (
                              ("+!" === r
                                ? ((t.signDisplay = "always"), (e = e.slice(2)))
                                : "+?" === r &&
                                  ((t.signDisplay = "exceptZero"),
                                  (e = e.slice(2))),
                              !I.test(e))
                            )
                              throw Error(
                                "Malformed concise eng/scientific notation"
                              );
                            t.minimumIntegerDigits = e.length;
                          }
                          return t;
                        })(n.stem);
                        a && (t = (0, u.__assign)((0, u.__assign)({}, t), a));
                      }
                      return t;
                    })(r)
                  : {},
              },
              err: null,
            };
          }),
          (e.prototype.tryParsePluralOrSelectOptions = function (e, t, r, i) {
            for (
              var o, a = !1, s = [], l = new Set(), c = i.value, u = i.location;
              ;

            ) {
              if (0 === c.length) {
                var d = this.clonePosition();
                if ("select" !== t && this.bumpIf("=")) {
                  var h = this.tryParseDecimalInteger(
                    n.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                    n.INVALID_PLURAL_ARGUMENT_SELECTOR
                  );
                  if (h.err) return h;
                  (u = R(d, this.clonePosition())),
                    (c = this.message.slice(d.offset, this.offset()));
                } else break;
              }
              if (l.has(c))
                return this.error(
                  "select" === t
                    ? n.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
                  u
                );
              "other" === c && (a = !0), this.bumpSpace();
              var p = this.clonePosition();
              if (!this.bumpIf("{"))
                return this.error(
                  "select" === t
                    ? n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
                  R(this.clonePosition(), this.clonePosition())
                );
              var f = this.parseMessage(e + 1, t, r);
              if (f.err) return f;
              var m = this.tryParseArgumentClose(p);
              if (m.err) return m;
              s.push([
                c,
                { value: f.val, location: R(p, this.clonePosition()) },
              ]),
                l.add(c),
                this.bumpSpace(),
                (c = (o = this.parseIdentifierIfPossible()).value),
                (u = o.location);
            }
            return 0 === s.length
              ? this.error(
                  "select" === t
                    ? n.EXPECT_SELECT_ARGUMENT_SELECTOR
                    : n.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  R(this.clonePosition(), this.clonePosition())
                )
              : this.requiresOtherClause && !a
              ? this.error(
                  n.MISSING_OTHER_CLAUSE,
                  R(this.clonePosition(), this.clonePosition())
                )
              : { val: s, err: null };
          }),
          (e.prototype.tryParseDecimalInteger = function (e, t) {
            var r = 1,
              n = this.clonePosition();
            this.bumpIf("+") || (this.bumpIf("-") && (r = -1));
            for (var i = !1, o = 0; !this.isEOF(); ) {
              var a = this.char();
              if (a >= 48 && a <= 57)
                (i = !0), (o = 10 * o + (a - 48)), this.bump();
              else break;
            }
            var s = R(n, this.clonePosition());
            return i
              ? H((o *= r))
                ? { val: o, err: null }
                : this.error(t, s)
              : this.error(e, s);
          }),
          (e.prototype.offset = function () {
            return this.position.offset;
          }),
          (e.prototype.isEOF = function () {
            return this.offset() === this.message.length;
          }),
          (e.prototype.clonePosition = function () {
            return {
              offset: this.position.offset,
              line: this.position.line,
              column: this.position.column,
            };
          }),
          (e.prototype.char = function () {
            var e = this.position.offset;
            if (e >= this.message.length) throw Error("out of bound");
            var t = Z(this.message, e);
            if (void 0 === t)
              throw Error(
                "Offset ".concat(e, " is at invalid UTF-16 code unit boundary")
              );
            return t;
          }),
          (e.prototype.error = function (e, t) {
            return {
              val: null,
              err: { kind: e, message: this.message, location: t },
            };
          }),
          (e.prototype.bump = function () {
            if (!this.isEOF()) {
              var e = this.char();
              10 === e
                ? ((this.position.line += 1),
                  (this.position.column = 1),
                  (this.position.offset += 1))
                : ((this.position.column += 1),
                  (this.position.offset += e < 65536 ? 1 : 2));
            }
          }),
          (e.prototype.bumpIf = function (e) {
            if (W(this.message, e, this.offset())) {
              for (var t = 0; t < e.length; t++) this.bump();
              return !0;
            }
            return !1;
          }),
          (e.prototype.bumpUntil = function (e) {
            var t = this.offset(),
              r = this.message.indexOf(e, t);
            return r >= 0
              ? (this.bumpTo(r), !0)
              : (this.bumpTo(this.message.length), !1);
          }),
          (e.prototype.bumpTo = function (e) {
            if (this.offset() > e)
              throw Error(
                "targetOffset "
                  .concat(
                    e,
                    " must be greater than or equal to the current offset "
                  )
                  .concat(this.offset())
              );
            for (e = Math.min(e, this.message.length); ; ) {
              var t = this.offset();
              if (t === e) break;
              if (t > e)
                throw Error(
                  "targetOffset ".concat(
                    e,
                    " is at invalid UTF-16 code unit boundary"
                  )
                );
              if ((this.bump(), this.isEOF())) break;
            }
          }),
          (e.prototype.bumpSpace = function () {
            for (; !this.isEOF() && ee(this.char()); ) this.bump();
          }),
          (e.prototype.peek = function () {
            if (this.isEOF()) return null;
            var e = this.char(),
              t = this.offset(),
              r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
            return null != r ? r : null;
          }),
          e
        );
      })();
      function $(e) {
        return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
      }
      function ee(e) {
        return (
          (e >= 9 && e <= 13) ||
          32 === e ||
          133 === e ||
          (e >= 8206 && e <= 8207) ||
          8232 === e ||
          8233 === e
        );
      }
      function et(e, t) {
        void 0 === t && (t = {});
        var r = new X(
          e,
          (t = (0, u.__assign)(
            { shouldParseSkeletons: !0, requiresOtherClause: !0 },
            t
          ))
        ).parse();
        if (r.err) {
          var i = SyntaxError(n[r.err.kind]);
          throw (
            ((i.location = r.err.location),
            (i.originalMessage = r.err.message),
            i)
          );
        }
        return (
          (null == t ? void 0 : t.captureLocation) ||
            (function e(t) {
              t.forEach(function (t) {
                if ((delete t.location, g(t) || y(t)))
                  for (var r in t.options)
                    delete t.options[r].location, e(t.options[r].value);
                else
                  p(t) && w(t.style)
                    ? delete t.style.location
                    : (f(t) || m(t)) && v(t.style)
                    ? delete t.style.location
                    : b(t) && e(t.children);
              });
            })(r.val),
          r.val
        );
      }
      !(function (e) {
        (e.MISSING_VALUE = "MISSING_VALUE"),
          (e.INVALID_VALUE = "INVALID_VALUE"),
          (e.MISSING_INTL_API = "MISSING_INTL_API");
      })(l || (l = {}));
      var er = (function (e) {
          function t(t, r, n) {
            var i = e.call(this, t) || this;
            return (i.code = r), (i.originalMessage = n), i;
          }
          return (
            (0, u.__extends)(t, e),
            (t.prototype.toString = function () {
              return "[formatjs Error: "
                .concat(this.code, "] ")
                .concat(this.message);
            }),
            t
          );
        })(Error),
        en = (function (e) {
          function t(t, r, n, i) {
            return (
              e.call(
                this,
                'Invalid values for "'
                  .concat(t, '": "')
                  .concat(r, '". Options are "')
                  .concat(Object.keys(n).join('", "'), '"'),
                l.INVALID_VALUE,
                i
              ) || this
            );
          }
          return (0, u.__extends)(t, e), t;
        })(er),
        ei = (function (e) {
          function t(t, r, n) {
            return (
              e.call(
                this,
                'Value for "'.concat(t, '" must be of type ').concat(r),
                l.INVALID_VALUE,
                n
              ) || this
            );
          }
          return (0, u.__extends)(t, e), t;
        })(er),
        eo = (function (e) {
          function t(t, r) {
            return (
              e.call(
                this,
                'The intl string context variable "'
                  .concat(t, '" was not provided to the string "')
                  .concat(r, '"'),
                l.MISSING_VALUE,
                r
              ) || this
            );
          }
          return (0, u.__extends)(t, e), t;
        })(er);
      function ea(e) {
        return "function" == typeof e;
      }
      function es(e, t, r, n, o, a, s) {
        if (1 === e.length && h(e[0]))
          return [{ type: c.literal, value: e[0].value }];
        for (var u = [], d = 0; d < e.length; d++) {
          var A = e[d];
          if (h(A)) {
            u.push({ type: c.literal, value: A.value });
            continue;
          }
          if (A.type === i.pound) {
            "number" == typeof a &&
              u.push({
                type: c.literal,
                value: r.getNumberFormat(t).format(a),
              });
            continue;
          }
          var E = A.value;
          if (!(o && E in o)) throw new eo(E, s);
          var C = o[E];
          if (A.type === i.argument) {
            (C && "string" != typeof C && "number" != typeof C) ||
              (C =
                "string" == typeof C || "number" == typeof C ? String(C) : ""),
              u.push({
                type: "string" == typeof C ? c.literal : c.object,
                value: C,
              });
            continue;
          }
          if (f(A)) {
            var x =
              "string" == typeof A.style
                ? n.date[A.style]
                : v(A.style)
                ? A.style.parsedOptions
                : void 0;
            u.push({
              type: c.literal,
              value: r.getDateTimeFormat(t, x).format(C),
            });
            continue;
          }
          if (m(A)) {
            var x =
              "string" == typeof A.style
                ? n.time[A.style]
                : v(A.style)
                ? A.style.parsedOptions
                : n.time.medium;
            u.push({
              type: c.literal,
              value: r.getDateTimeFormat(t, x).format(C),
            });
            continue;
          }
          if (p(A)) {
            var x =
              "string" == typeof A.style
                ? n.number[A.style]
                : w(A.style)
                ? A.style.parsedOptions
                : void 0;
            x && x.scale && (C *= x.scale || 1),
              u.push({
                type: c.literal,
                value: r.getNumberFormat(t, x).format(C),
              });
            continue;
          }
          if (b(A)) {
            var _ = A.children,
              k = A.value,
              I = o[k];
            if (!ea(I)) throw new ei(k, "function", s);
            var T = I(
              es(_, t, r, n, o, a).map(function (e) {
                return e.value;
              })
            );
            Array.isArray(T) || (T = [T]),
              u.push.apply(
                u,
                T.map(function (e) {
                  return {
                    type: "string" == typeof e ? c.literal : c.object,
                    value: e,
                  };
                })
              );
          }
          if (g(A)) {
            var S = A.options[C] || A.options.other;
            if (!S) throw new en(A.value, C, Object.keys(A.options), s);
            u.push.apply(u, es(S.value, t, r, n, o));
            continue;
          }
          if (y(A)) {
            var S = A.options["=".concat(C)];
            if (!S) {
              if (!Intl.PluralRules)
                throw new er(
                  'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                  l.MISSING_INTL_API,
                  s
                );
              var O = r
                .getPluralRules(t, { type: A.pluralType })
                .select(C - (A.offset || 0));
              S = A.options[O] || A.options.other;
            }
            if (!S) throw new en(A.value, C, Object.keys(A.options), s);
            u.push.apply(u, es(S.value, t, r, n, o, C - (A.offset || 0)));
            continue;
          }
        }
        return u.length < 2
          ? u
          : u.reduce(function (e, t) {
              var r = e[e.length - 1];
              return (
                r && r.type === c.literal && t.type === c.literal
                  ? (r.value += t.value)
                  : e.push(t),
                e
              );
            }, []);
      }
      function el(e) {
        return {
          create: function () {
            return {
              get: function (t) {
                return e[t];
              },
              set: function (t, r) {
                e[t] = r;
              },
            };
          },
        };
      }
      !(function (e) {
        (e[(e.literal = 0)] = "literal"), (e[(e.object = 1)] = "object");
      })(c || (c = {}));
      var ec = (function () {
        function e(t, r, n, i) {
          void 0 === r && (r = e.defaultLocale);
          var o,
            a,
            s = this;
          if (
            ((this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {},
            }),
            (this.format = function (e) {
              var t = s.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var r = t.reduce(function (e, t) {
                return (
                  e.length &&
                  t.type === c.literal &&
                  "string" == typeof e[e.length - 1]
                    ? (e[e.length - 1] += t.value)
                    : e.push(t.value),
                  e
                );
              }, []);
              return r.length <= 1 ? r[0] || "" : r;
            }),
            (this.formatToParts = function (e) {
              return es(
                s.ast,
                s.locales,
                s.formatters,
                s.formats,
                e,
                void 0,
                s.message
              );
            }),
            (this.resolvedOptions = function () {
              var e;
              return {
                locale:
                  (null === (e = s.resolvedLocale) || void 0 === e
                    ? void 0
                    : e.toString()) ||
                  Intl.NumberFormat.supportedLocalesOf(s.locales)[0],
              };
            }),
            (this.getAst = function () {
              return s.ast;
            }),
            (this.locales = r),
            (this.resolvedLocale = e.resolveLocale(r)),
            "string" == typeof t)
          ) {
            if (((this.message = t), !e.__parse))
              throw TypeError(
                "IntlMessageFormat.__parse must be set to process `message` of type `string`"
              );
            var l = i || {},
              h = (l.formatters, (0, u.__rest)(l, ["formatters"]));
            this.ast = e.__parse(
              t,
              (0, u.__assign)((0, u.__assign)({}, h), {
                locale: this.resolvedLocale,
              })
            );
          } else this.ast = t;
          if (!Array.isArray(this.ast))
            throw TypeError("A message must be provided as a String or AST.");
          (this.formats =
            ((o = e.formats),
            n
              ? Object.keys(o).reduce(function (e, t) {
                  var r, i;
                  return (
                    (e[t] =
                      ((r = o[t]),
                      (i = n[t])
                        ? (0, u.__assign)(
                            (0, u.__assign)(
                              (0, u.__assign)({}, r || {}),
                              i || {}
                            ),
                            Object.keys(r).reduce(function (e, t) {
                              return (
                                (e[t] = (0, u.__assign)(
                                  (0, u.__assign)({}, r[t]),
                                  i[t] || {}
                                )),
                                e
                              );
                            }, {})
                          )
                        : r)),
                    e
                  );
                }, (0, u.__assign)({}, o))
              : o)),
            (this.formatters =
              (i && i.formatters) ||
              (void 0 === (a = this.formatterCache) &&
                (a = { number: {}, dateTime: {}, pluralRules: {} }),
              {
                getNumberFormat: (0, d.memoize)(
                  function () {
                    for (var e, t = [], r = 0; r < arguments.length; r++)
                      t[r] = arguments[r];
                    return new ((e = Intl.NumberFormat).bind.apply(
                      e,
                      (0, u.__spreadArray)([void 0], t, !1)
                    ))();
                  },
                  { cache: el(a.number), strategy: d.strategies.variadic }
                ),
                getDateTimeFormat: (0, d.memoize)(
                  function () {
                    for (var e, t = [], r = 0; r < arguments.length; r++)
                      t[r] = arguments[r];
                    return new ((e = Intl.DateTimeFormat).bind.apply(
                      e,
                      (0, u.__spreadArray)([void 0], t, !1)
                    ))();
                  },
                  { cache: el(a.dateTime), strategy: d.strategies.variadic }
                ),
                getPluralRules: (0, d.memoize)(
                  function () {
                    for (var e, t = [], r = 0; r < arguments.length; r++)
                      t[r] = arguments[r];
                    return new ((e = Intl.PluralRules).bind.apply(
                      e,
                      (0, u.__spreadArray)([void 0], t, !1)
                    ))();
                  },
                  { cache: el(a.pluralRules), strategy: d.strategies.variadic }
                ),
              }));
        }
        return (
          Object.defineProperty(e, "defaultLocale", {
            get: function () {
              return (
                e.memoizedDefaultLocale ||
                  (e.memoizedDefaultLocale =
                    new Intl.NumberFormat().resolvedOptions().locale),
                e.memoizedDefaultLocale
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.memoizedDefaultLocale = null),
          (e.resolveLocale = function (e) {
            if (void 0 !== Intl.Locale) {
              var t = Intl.NumberFormat.supportedLocalesOf(e);
              return new Intl.Locale(
                t.length > 0 ? t[0] : "string" == typeof e ? e : e[0]
              );
            }
          }),
          (e.__parse = et),
          (e.formats = {
            number: {
              integer: { maximumFractionDigits: 0 },
              currency: { style: "currency" },
              percent: { style: "percent" },
            },
            date: {
              short: { month: "numeric", day: "numeric", year: "2-digit" },
              medium: { month: "short", day: "numeric", year: "numeric" },
              long: { month: "long", day: "numeric", year: "numeric" },
              full: {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              },
            },
            time: {
              short: { hour: "numeric", minute: "numeric" },
              medium: { hour: "numeric", minute: "numeric", second: "numeric" },
              long: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short",
              },
              full: {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                timeZoneName: "short",
              },
            },
          }),
          e
        );
      })();
      let eu = ec;
    },
    58175: (e, t) => {
      "use strict";
      function r() {
        return (r = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}.hasOwnProperty.call(r, n) && (e[n] = r[n]));
              }
              return e;
            }).apply(null, arguments);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.extends = r);
    },
    7266: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(70407),
        i = r(97430),
        o = r(74773),
        a = r(39735);
      (t.useFormatter = n.useFormatter),
        (t.useTranslations = n.useTranslations),
        (t.useLocale = i.default),
        (t.NextIntlClientProvider = o.default),
        Object.keys(a).forEach(function (e) {
          "default" === e ||
            Object.prototype.hasOwnProperty.call(t, e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return a[e];
              },
            });
        });
    },
    70407: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(39735);
      function i(e, t) {
        return function () {
          try {
            return t(...arguments);
          } catch (e) {
            throw Error(void 0);
          }
        };
      }
      let o = i(0, n.useTranslations),
        a = i(0, n.useFormatter);
      (t.useFormatter = a),
        (t.useTranslations = o),
        Object.keys(n).forEach(function (e) {
          "default" === e ||
            Object.prototype.hasOwnProperty.call(t, e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
    },
    97430: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(76046),
        i = r(62343),
        o = r(63582);
      t.default = function () {
        let e;
        let t = n.useParams();
        try {
          e = i.useLocale();
        } catch (r) {
          if (
            "string" != typeof (null == t ? void 0 : t[o.LOCALE_SEGMENT_NAME])
          )
            throw r;
          e = t[o.LOCALE_SEGMENT_NAME];
        }
        return e;
      };
    },
    74773: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(58175),
        i = r(12115),
        o = r(4496),
        a = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(i);
      t.default = function (e) {
        let { locale: t, ...r } = e;
        if (!t) throw Error(void 0);
        return a.default.createElement(
          o.IntlProvider,
          n.extends({ locale: t }, r)
        );
      };
    },
    63582: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HEADER_LOCALE_NAME = "X-NEXT-INTL-LOCALE"),
        (t.LOCALE_SEGMENT_NAME = "locale");
    },
    87970: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return v;
          },
        });
      let n = r(60306),
        i = r(29955),
        o = r(95155),
        a = i._(r(12115)),
        s = n._(r(47650)),
        l = n._(r(36107)),
        c = r(40666),
        u = r(41159),
        d = r(83621);
      r(42363);
      let h = r(63576),
        p = n._(r(65514)),
        f = r(45353),
        m = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function g(e, t, r, n, i, o, a) {
        let s = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== s &&
          ((e["data-loaded-src"] = s),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && i(!0), null == r ? void 0 : r.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let n = !1,
                    i = !1;
                  r.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => i,
                    persist: () => {},
                    preventDefault: () => {
                      (n = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (i = !0), t.stopPropagation();
                    },
                  });
                }
                (null == n ? void 0 : n.current) && n.current(e);
              }
            }));
      }
      function y(e) {
        return a.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let b = (0, a.forwardRef)((e, t) => {
        let {
            src: r,
            srcSet: n,
            sizes: i,
            height: s,
            width: l,
            decoding: c,
            className: u,
            style: d,
            fetchPriority: h,
            placeholder: p,
            loading: m,
            unoptimized: b,
            fill: w,
            onLoadRef: v,
            onLoadingCompleteRef: A,
            setBlurComplete: E,
            setShowAltText: C,
            sizesInput: x,
            onLoad: _,
            onError: k,
            ...I
          } = e,
          T = (0, a.useCallback)(
            (e) => {
              e && (k && (e.src = e.src), e.complete && g(e, p, v, A, E, b, x));
            },
            [r, p, v, A, E, k, b, x]
          ),
          S = (0, f.useMergedRef)(t, T);
        return (0, o.jsx)("img", {
          ...I,
          ...y(h),
          loading: m,
          width: l,
          height: s,
          decoding: c,
          "data-nimg": w ? "fill" : "1",
          className: u,
          style: d,
          sizes: i,
          srcSet: n,
          src: r,
          ref: S,
          onLoad: (e) => {
            g(e.currentTarget, p, v, A, E, b, x);
          },
          onError: (e) => {
            C(!0), "empty" !== p && E(!0), k && k(e);
          },
        });
      });
      function w(e) {
        let { isAppRouter: t, imgAttributes: r } = e,
          n = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...y(r.fetchPriority),
          };
        return t && s.default.preload
          ? (s.default.preload(r.src, n), null)
          : (0, o.jsx)(l.default, {
              children: (0, o.jsx)(
                "link",
                { rel: "preload", href: r.srcSet ? void 0 : r.src, ...n },
                "__nimg-" + r.src + r.srcSet + r.sizes
              ),
            });
      }
      let v = (0, a.forwardRef)((e, t) => {
        let r = (0, a.useContext)(h.RouterContext),
          n = (0, a.useContext)(d.ImageConfigContext),
          i = (0, a.useMemo)(() => {
            let e = m || n || u.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              r = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: r };
          }, [n]),
          { onLoad: s, onLoadingComplete: l } = e,
          f = (0, a.useRef)(s);
        (0, a.useEffect)(() => {
          f.current = s;
        }, [s]);
        let g = (0, a.useRef)(l);
        (0, a.useEffect)(() => {
          g.current = l;
        }, [l]);
        let [y, v] = (0, a.useState)(!1),
          [A, E] = (0, a.useState)(!1),
          { props: C, meta: x } = (0, c.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: i,
            blurComplete: y,
            showAltText: A,
          });
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(b, {
              ...C,
              unoptimized: x.unoptimized,
              placeholder: x.placeholder,
              fill: x.fill,
              onLoadRef: f,
              onLoadingCompleteRef: g,
              setBlurComplete: v,
              setShowAltText: E,
              sizesInput: e.sizes,
              ref: t,
            }),
            x.priority
              ? (0, o.jsx)(w, { isAppRouter: !r, imgAttributes: C })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    53003: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(60306)._(r(12115)).default.createContext({});
    },
    675: (e, t) => {
      "use strict";
      function r(e) {
        let {
          ampFirst: t = !1,
          hybrid: r = !1,
          hasQuery: n = !1,
        } = void 0 === e ? {} : e;
        return t || (r && n);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    40666: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }),
        r(42363);
      let n = r(35859),
        i = r(41159);
      function o(e) {
        return void 0 !== e.default;
      }
      function a(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function s(e, t) {
        var r;
        let s,
          l,
          c,
          {
            src: u,
            sizes: d,
            unoptimized: h = !1,
            priority: p = !1,
            loading: f,
            className: m,
            quality: g,
            width: y,
            height: b,
            fill: w = !1,
            style: v,
            overrideSrc: A,
            onLoad: E,
            onLoadingComplete: C,
            placeholder: x = "empty",
            blurDataURL: _,
            fetchPriority: k,
            decoding: I = "async",
            layout: T,
            objectFit: S,
            objectPosition: O,
            lazyBoundary: B,
            lazyRoot: N,
            ...P
          } = e,
          { imgConf: R, showAltText: M, blurComplete: D, defaultLoader: L } = t,
          F = R || i.imageConfigDefault;
        if ("allSizes" in F) s = F;
        else {
          let e = [...F.deviceSizes, ...F.imageSizes].sort((e, t) => e - t),
            t = F.deviceSizes.sort((e, t) => e - t);
          s = { ...F, allSizes: e, deviceSizes: t };
        }
        if (void 0 === L)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let j = P.loader || L;
        delete P.loader, delete P.srcSet;
        let U = "__next_img_default" in j;
        if (U) {
          if ("custom" === s.loader)
            throw Error(
              'Image with src "' +
                u +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = j;
          j = (t) => {
            let { config: r, ...n } = t;
            return e(n);
          };
        }
        if (T) {
          "fill" === T && (w = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[T];
          e && (v = { ...v, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[T];
          t && !d && (d = t);
        }
        let H = "",
          Q = a(y),
          q = a(b);
        if ((r = u) && "object" == typeof r && (o(r) || void 0 !== r.src)) {
          let e = o(u) ? u.default : u;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((l = e.blurWidth),
            (c = e.blurHeight),
            (_ = _ || e.blurDataURL),
            (H = e.src),
            !w)
          ) {
            if (Q || q) {
              if (Q && !q) {
                let t = Q / e.width;
                q = Math.round(e.height * t);
              } else if (!Q && q) {
                let t = q / e.height;
                Q = Math.round(e.width * t);
              }
            } else (Q = e.width), (q = e.height);
          }
        }
        let W = !p && ("lazy" === f || void 0 === f);
        (!(u = "string" == typeof u ? u : H) ||
          u.startsWith("data:") ||
          u.startsWith("blob:")) &&
          ((h = !0), (W = !1)),
          s.unoptimized && (h = !0),
          U &&
            !s.dangerouslyAllowSVG &&
            u.split("?", 1)[0].endsWith(".svg") &&
            (h = !0);
        let z = a(g),
          G = Object.assign(
            w
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: S,
                  objectPosition: O,
                }
              : {},
            M ? {} : { color: "transparent" },
            v
          ),
          Z =
            D || "empty" === x
              ? null
              : "blur" === x
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, n.getImageBlurSvg)({
                  widthInt: Q,
                  heightInt: q,
                  blurWidth: l,
                  blurHeight: c,
                  blurDataURL: _ || "",
                  objectFit: G.objectFit,
                }) +
                '")'
              : 'url("' + x + '")',
          K = Z
            ? {
                backgroundSize: G.objectFit || "cover",
                backgroundPosition: G.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: Z,
              }
            : {},
          V = (function (e) {
            let {
              config: t,
              src: r,
              unoptimized: n,
              width: i,
              quality: o,
              sizes: a,
              loader: s,
            } = e;
            if (n) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: c } = (function (e, t, r) {
                let { deviceSizes: n, allSizes: i } = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let n; (n = e.exec(r)); n) t.push(parseInt(n[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: i.filter((t) => t >= n[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: i, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: n, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => i.find((t) => t >= e) || i[i.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, i, a),
              u = l.length - 1;
            return {
              sizes: a || "w" !== c ? a : "100vw",
              srcSet: l
                .map(
                  (e, n) =>
                    s({ config: t, src: r, quality: o, width: e }) +
                    " " +
                    ("w" === c ? e : n + 1) +
                    c
                )
                .join(", "),
              src: s({ config: t, src: r, quality: o, width: l[u] }),
            };
          })({
            config: s,
            src: u,
            unoptimized: h,
            width: Q,
            quality: z,
            sizes: d,
            loader: j,
          });
        return {
          props: {
            ...P,
            loading: W ? "lazy" : f,
            fetchPriority: k,
            width: Q,
            height: q,
            decoding: I,
            className: m,
            style: { ...G, ...K },
            sizes: V.sizes,
            srcSet: V.srcSet,
            src: A || V.src,
          },
          meta: { unoptimized: h, priority: p, placeholder: x, fill: w },
        };
      }
    },
    36107: (e, t, r) => {
      "use strict";
      var n = r(2818);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return g;
          },
          defaultHead: function () {
            return h;
          },
        });
      let i = r(60306),
        o = r(29955),
        a = r(95155),
        s = o._(r(12115)),
        l = i._(r(31172)),
        c = r(53003),
        u = r(81147),
        d = r(675);
      function h(e) {
        void 0 === e && (e = !1);
        let t = [(0, a.jsx)("meta", { charSet: "utf-8" }, "charset")];
        return (
          e ||
            t.push(
              (0, a.jsx)(
                "meta",
                { name: "viewport", content: "width=device-width" },
                "viewport"
              )
            ),
          t
        );
      }
      function p(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === s.default.Fragment
          ? e.concat(
              s.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      r(42363);
      let f = ["name", "httpEquiv", "charSet", "itemProp"];
      function m(e, t) {
        let { inAmpMode: r } = t;
        return e
          .reduce(p, [])
          .reverse()
          .concat(h(r).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {};
              return (i) => {
                let o = !0,
                  a = !1;
                if (
                  i.key &&
                  "number" != typeof i.key &&
                  i.key.indexOf("$") > 0
                ) {
                  a = !0;
                  let t = i.key.slice(i.key.indexOf("$") + 1);
                  e.has(t) ? (o = !1) : e.add(t);
                }
                switch (i.type) {
                  case "title":
                  case "base":
                    t.has(i.type) ? (o = !1) : t.add(i.type);
                    break;
                  case "meta":
                    for (let e = 0, t = f.length; e < t; e++) {
                      let t = f[e];
                      if (i.props.hasOwnProperty(t)) {
                        if ("charSet" === t) r.has(t) ? (o = !1) : r.add(t);
                        else {
                          let e = i.props[t],
                            r = n[t] || new Set();
                          ("name" !== t || !a) && r.has(e)
                            ? (o = !1)
                            : (r.add(e), (n[t] = r));
                        }
                      }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let i = e.key || t;
            if (
              n.env.__NEXT_OPTIMIZE_FONTS &&
              !r &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                s.default.cloneElement(e, t)
              );
            }
            return s.default.cloneElement(e, { key: i });
          });
      }
      let g = function (e) {
        let { children: t } = e,
          r = (0, s.useContext)(c.AmpStateContext),
          n = (0, s.useContext)(u.HeadManagerContext);
        return (0, a.jsx)(l.default, {
          reduceComponentsToState: m,
          headManager: n,
          inAmpMode: (0, d.isInAmpMode)(r),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    35859: (e, t) => {
      "use strict";
      function r(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: n,
            blurHeight: i,
            blurDataURL: o,
            objectFit: a,
          } = e,
          s = n ? 40 * n : t,
          l = i ? 40 * i : r,
          c = s && l ? "viewBox='0 0 " + s + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          c +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (c
            ? "none"
            : "contain" === a
            ? "xMidYMid"
            : "cover" === a
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          o +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    83621: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(60306)._(r(12115)),
        i = r(41159),
        o = n.default.createContext(i.imageConfigDefault);
    },
    41159: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          VALID_LOADERS: function () {
            return r;
          },
          imageConfigDefault: function () {
            return n;
          },
        });
      let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
        n = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "attachment",
          localPatterns: void 0,
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    65514: (e, t) => {
      "use strict";
      function r(e) {
        let { config: t, src: r, width: n, quality: i } = e;
        return (
          r
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (r.__next_img_default = !0);
      let n = r;
    },
    63576: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(60306)._(r(12115)).default.createContext(null);
    },
    31172: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = r(12115),
        i = "undefined" == typeof window,
        o = i ? () => {} : n.useLayoutEffect,
        a = i ? () => {} : n.useEffect;
      function s(e) {
        let { headManager: t, reduceComponentsToState: r } = e;
        function s() {
          if (t && t.mountedInstances) {
            let i = n.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(r(i, e));
          }
        }
        if (i) {
          var l;
          null == t || null == (l = t.mountedInstances) || l.add(e.children),
            s();
        }
        return (
          o(() => {
            var r;
            return (
              null == t ||
                null == (r = t.mountedInstances) ||
                r.add(e.children),
              () => {
                var r;
                null == t ||
                  null == (r = t.mountedInstances) ||
                  r.delete(e.children);
              }
            );
          }),
          o(
            () => (
              t && (t._pendingUpdate = s),
              () => {
                t && (t._pendingUpdate = s);
              }
            )
          ),
          a(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    79995: (e, t, r) => {
      let n = r(47685),
        i = r(77245),
        o = r(16383),
        a = r(40934);
      function s(e, t, r, o, a) {
        let s = [].slice.call(arguments, 1),
          l = s.length,
          c = "function" == typeof s[l - 1];
        if (!c && !n()) throw Error("Callback required as last argument");
        if (c) {
          if (l < 2) throw Error("Too few arguments provided");
          2 === l
            ? ((a = r), (r = t), (t = o = void 0))
            : 3 === l &&
              (t.getContext && void 0 === a
                ? ((a = o), (o = void 0))
                : ((a = o), (o = r), (r = t), (t = void 0)));
        } else {
          if (l < 1) throw Error("Too few arguments provided");
          return (
            1 === l
              ? ((r = t), (t = o = void 0))
              : 2 !== l || t.getContext || ((o = r), (r = t), (t = void 0)),
            new Promise(function (n, a) {
              try {
                let a = i.create(r, o);
                n(e(a, t, o));
              } catch (e) {
                a(e);
              }
            })
          );
        }
        try {
          let n = i.create(r, o);
          a(null, e(n, t, o));
        } catch (e) {
          a(e);
        }
      }
      (t.create = i.create),
        (t.toCanvas = s.bind(null, o.render)),
        (t.toDataURL = s.bind(null, o.renderToDataURL)),
        (t.toString = s.bind(null, function (e, t, r) {
          return a.render(e, r);
        }));
    },
    47685: (e) => {
      e.exports = function () {
        return (
          "function" == typeof Promise &&
          Promise.prototype &&
          Promise.prototype.then
        );
      };
    },
    863: (e, t, r) => {
      let n = r(56880).getSymbolSize;
      (t.getRowColCoords = function (e) {
        if (1 === e) return [];
        let t = Math.floor(e / 7) + 2,
          r = n(e),
          i = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * t - 2)),
          o = [r - 7];
        for (let e = 1; e < t - 1; e++) o[e] = o[e - 1] - i;
        return o.push(6), o.reverse();
      }),
        (t.getPositions = function (e) {
          let r = [],
            n = t.getRowColCoords(e),
            i = n.length;
          for (let e = 0; e < i; e++)
            for (let t = 0; t < i; t++)
              (0 !== e || 0 !== t) &&
                (0 !== e || t !== i - 1) &&
                (e !== i - 1 || 0 !== t) &&
                r.push([n[e], n[t]]);
          return r;
        });
    },
    22115: (e, t, r) => {
      let n = r(71932),
        i = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          " ",
          "$",
          "%",
          "*",
          "+",
          "-",
          ".",
          "/",
          ":",
        ];
      function o(e) {
        (this.mode = n.ALPHANUMERIC), (this.data = e);
      }
      (o.getBitsLength = function (e) {
        return 11 * Math.floor(e / 2) + (e % 2) * 6;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (e) {
          let t;
          for (t = 0; t + 2 <= this.data.length; t += 2) {
            let r = 45 * i.indexOf(this.data[t]);
            (r += i.indexOf(this.data[t + 1])), e.put(r, 11);
          }
          this.data.length % 2 && e.put(i.indexOf(this.data[t]), 6);
        }),
        (e.exports = o);
    },
    70452: (e) => {
      function t() {
        (this.buffer = []), (this.length = 0);
      }
      (t.prototype = {
        get: function (e) {
          let t = Math.floor(e / 8);
          return ((this.buffer[t] >>> (7 - (e % 8))) & 1) == 1;
        },
        put: function (e, t) {
          for (let r = 0; r < t; r++)
            this.putBit(((e >>> (t - r - 1)) & 1) == 1);
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (e) {
          let t = Math.floor(this.length / 8);
          this.buffer.length <= t && this.buffer.push(0),
            e && (this.buffer[t] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (e.exports = t);
    },
    53972: (e) => {
      function t(e) {
        if (!e || e < 1)
          throw Error("BitMatrix size must be defined and greater than 0");
        (this.size = e),
          (this.data = new Uint8Array(e * e)),
          (this.reservedBit = new Uint8Array(e * e));
      }
      (t.prototype.set = function (e, t, r, n) {
        let i = e * this.size + t;
        (this.data[i] = r), n && (this.reservedBit[i] = !0);
      }),
        (t.prototype.get = function (e, t) {
          return this.data[e * this.size + t];
        }),
        (t.prototype.xor = function (e, t, r) {
          this.data[e * this.size + t] ^= r;
        }),
        (t.prototype.isReserved = function (e, t) {
          return this.reservedBit[e * this.size + t];
        }),
        (e.exports = t);
    },
    85688: (e, t, r) => {
      let n = r(71932);
      function i(e) {
        (this.mode = n.BYTE),
          "string" == typeof e
            ? (this.data = new TextEncoder().encode(e))
            : (this.data = new Uint8Array(e));
      }
      (i.getBitsLength = function (e) {
        return 8 * e;
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (e) {
          for (let t = 0, r = this.data.length; t < r; t++)
            e.put(this.data[t], 8);
        }),
        (e.exports = i);
    },
    93684: (e, t, r) => {
      let n = r(20865),
        i = [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4,
          4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8,
          10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6,
          11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23,
          25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12,
          23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29,
          40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51,
          60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74,
          24, 47, 65, 77, 25, 49, 68, 81,
        ],
        o = [
          7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48,
          72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110,
          160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308,
          104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280,
          408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650,
          224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504,
          750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952,
          1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140,
          1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350,
          1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590,
          1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
          2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
        ];
      (t.getBlocksCount = function (e, t) {
        switch (t) {
          case n.L:
            return i[(e - 1) * 4 + 0];
          case n.M:
            return i[(e - 1) * 4 + 1];
          case n.Q:
            return i[(e - 1) * 4 + 2];
          case n.H:
            return i[(e - 1) * 4 + 3];
          default:
            return;
        }
      }),
        (t.getTotalCodewordsCount = function (e, t) {
          switch (t) {
            case n.L:
              return o[(e - 1) * 4 + 0];
            case n.M:
              return o[(e - 1) * 4 + 1];
            case n.Q:
              return o[(e - 1) * 4 + 2];
            case n.H:
              return o[(e - 1) * 4 + 3];
            default:
              return;
          }
        });
    },
    20865: (e, t) => {
      (t.L = { bit: 1 }),
        (t.M = { bit: 0 }),
        (t.Q = { bit: 3 }),
        (t.H = { bit: 2 }),
        (t.isValid = function (e) {
          return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4;
        }),
        (t.from = function (e, r) {
          if (t.isValid(e)) return e;
          try {
            return (function (e) {
              if ("string" != typeof e) throw Error("Param is not a string");
              switch (e.toLowerCase()) {
                case "l":
                case "low":
                  return t.L;
                case "m":
                case "medium":
                  return t.M;
                case "q":
                case "quartile":
                  return t.Q;
                case "h":
                case "high":
                  return t.H;
                default:
                  throw Error("Unknown EC Level: " + e);
              }
            })(e);
          } catch (e) {
            return r;
          }
        });
    },
    87428: (e, t, r) => {
      let n = r(56880).getSymbolSize;
      t.getPositions = function (e) {
        let t = n(e);
        return [
          [0, 0],
          [t - 7, 0],
          [0, t - 7],
        ];
      };
    },
    73335: (e, t, r) => {
      let n = r(56880),
        i = n.getBCHDigit(1335);
      t.getEncodedBits = function (e, t) {
        let r = (e.bit << 3) | t,
          o = r << 10;
        for (; n.getBCHDigit(o) - i >= 0; ) o ^= 1335 << (n.getBCHDigit(o) - i);
        return ((r << 10) | o) ^ 21522;
      };
    },
    3455: (e, t) => {
      let r = new Uint8Array(512),
        n = new Uint8Array(256);
      !(function () {
        let e = 1;
        for (let t = 0; t < 255; t++)
          (r[t] = e), (n[e] = t), 256 & (e <<= 1) && (e ^= 285);
        for (let e = 255; e < 512; e++) r[e] = r[e - 255];
      })(),
        (t.log = function (e) {
          if (e < 1) throw Error("log(" + e + ")");
          return n[e];
        }),
        (t.exp = function (e) {
          return r[e];
        }),
        (t.mul = function (e, t) {
          return 0 === e || 0 === t ? 0 : r[n[e] + n[t]];
        });
    },
    47873: (e, t, r) => {
      let n = r(71932),
        i = r(56880);
      function o(e) {
        (this.mode = n.KANJI), (this.data = e);
      }
      (o.getBitsLength = function (e) {
        return 13 * e;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (e) {
          let t;
          for (t = 0; t < this.data.length; t++) {
            let r = i.toSJIS(this.data[t]);
            if (r >= 33088 && r <= 40956) r -= 33088;
            else if (r >= 57408 && r <= 60351) r -= 49472;
            else
              throw Error(
                "Invalid SJIS character: " +
                  this.data[t] +
                  "\nMake sure your charset is UTF-8"
              );
            (r = ((r >>> 8) & 255) * 192 + (255 & r)), e.put(r, 13);
          }
        }),
        (e.exports = o);
    },
    69616: (e, t) => {
      t.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      };
      let r = { N1: 3, N2: 3, N3: 40, N4: 10 };
      (t.isValid = function (e) {
        return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7;
      }),
        (t.from = function (e) {
          return t.isValid(e) ? parseInt(e, 10) : void 0;
        }),
        (t.getPenaltyN1 = function (e) {
          let t = e.size,
            n = 0,
            i = 0,
            o = 0,
            a = null,
            s = null;
          for (let l = 0; l < t; l++) {
            (i = o = 0), (a = s = null);
            for (let c = 0; c < t; c++) {
              let t = e.get(l, c);
              t === a
                ? i++
                : (i >= 5 && (n += r.N1 + (i - 5)), (a = t), (i = 1)),
                (t = e.get(c, l)) === s
                  ? o++
                  : (o >= 5 && (n += r.N1 + (o - 5)), (s = t), (o = 1));
            }
            i >= 5 && (n += r.N1 + (i - 5)), o >= 5 && (n += r.N1 + (o - 5));
          }
          return n;
        }),
        (t.getPenaltyN2 = function (e) {
          let t = e.size,
            n = 0;
          for (let r = 0; r < t - 1; r++)
            for (let i = 0; i < t - 1; i++) {
              let t =
                e.get(r, i) +
                e.get(r, i + 1) +
                e.get(r + 1, i) +
                e.get(r + 1, i + 1);
              (4 === t || 0 === t) && n++;
            }
          return n * r.N2;
        }),
        (t.getPenaltyN3 = function (e) {
          let t = e.size,
            n = 0,
            i = 0,
            o = 0;
          for (let r = 0; r < t; r++) {
            i = o = 0;
            for (let a = 0; a < t; a++)
              (i = ((i << 1) & 2047) | e.get(r, a)),
                a >= 10 && (1488 === i || 93 === i) && n++,
                (o = ((o << 1) & 2047) | e.get(a, r)),
                a >= 10 && (1488 === o || 93 === o) && n++;
          }
          return n * r.N3;
        }),
        (t.getPenaltyN4 = function (e) {
          let t = 0,
            n = e.data.length;
          for (let r = 0; r < n; r++) t += e.data[r];
          return Math.abs(Math.ceil((100 * t) / n / 5) - 10) * r.N4;
        }),
        (t.applyMask = function (e, r) {
          let n = r.size;
          for (let i = 0; i < n; i++)
            for (let o = 0; o < n; o++)
              r.isReserved(o, i) ||
                r.xor(
                  o,
                  i,
                  (function (e, r, n) {
                    switch (e) {
                      case t.Patterns.PATTERN000:
                        return (r + n) % 2 == 0;
                      case t.Patterns.PATTERN001:
                        return r % 2 == 0;
                      case t.Patterns.PATTERN010:
                        return n % 3 == 0;
                      case t.Patterns.PATTERN011:
                        return (r + n) % 3 == 0;
                      case t.Patterns.PATTERN100:
                        return (Math.floor(r / 2) + Math.floor(n / 3)) % 2 == 0;
                      case t.Patterns.PATTERN101:
                        return ((r * n) % 2) + ((r * n) % 3) == 0;
                      case t.Patterns.PATTERN110:
                        return (((r * n) % 2) + ((r * n) % 3)) % 2 == 0;
                      case t.Patterns.PATTERN111:
                        return (((r * n) % 3) + ((r + n) % 2)) % 2 == 0;
                      default:
                        throw Error("bad maskPattern:" + e);
                    }
                  })(e, o, i)
                );
        }),
        (t.getBestMask = function (e, r) {
          let n = Object.keys(t.Patterns).length,
            i = 0,
            o = 1 / 0;
          for (let a = 0; a < n; a++) {
            r(a), t.applyMask(a, e);
            let n =
              t.getPenaltyN1(e) +
              t.getPenaltyN2(e) +
              t.getPenaltyN3(e) +
              t.getPenaltyN4(e);
            t.applyMask(a, e), n < o && ((o = n), (i = a));
          }
          return i;
        });
    },
    71932: (e, t, r) => {
      let n = r(35040),
        i = r(26734);
      (t.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
        (t.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
        (t.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
        (t.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
        (t.MIXED = { bit: -1 }),
        (t.getCharCountIndicator = function (e, t) {
          if (!e.ccBits) throw Error("Invalid mode: " + e);
          if (!n.isValid(t)) throw Error("Invalid version: " + t);
          return t >= 1 && t < 10
            ? e.ccBits[0]
            : t < 27
            ? e.ccBits[1]
            : e.ccBits[2];
        }),
        (t.getBestModeForData = function (e) {
          return i.testNumeric(e)
            ? t.NUMERIC
            : i.testAlphanumeric(e)
            ? t.ALPHANUMERIC
            : i.testKanji(e)
            ? t.KANJI
            : t.BYTE;
        }),
        (t.toString = function (e) {
          if (e && e.id) return e.id;
          throw Error("Invalid mode");
        }),
        (t.isValid = function (e) {
          return e && e.bit && e.ccBits;
        }),
        (t.from = function (e, r) {
          if (t.isValid(e)) return e;
          try {
            return (function (e) {
              if ("string" != typeof e) throw Error("Param is not a string");
              switch (e.toLowerCase()) {
                case "numeric":
                  return t.NUMERIC;
                case "alphanumeric":
                  return t.ALPHANUMERIC;
                case "kanji":
                  return t.KANJI;
                case "byte":
                  return t.BYTE;
                default:
                  throw Error("Unknown mode: " + e);
              }
            })(e);
          } catch (e) {
            return r;
          }
        });
    },
    53773: (e, t, r) => {
      let n = r(71932);
      function i(e) {
        (this.mode = n.NUMERIC), (this.data = e.toString());
      }
      (i.getBitsLength = function (e) {
        return 10 * Math.floor(e / 3) + (e % 3 ? (e % 3) * 3 + 1 : 0);
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (e) {
          let t, r;
          for (t = 0; t + 3 <= this.data.length; t += 3)
            (r = parseInt(this.data.substr(t, 3), 10)), e.put(r, 10);
          let n = this.data.length - t;
          n > 0 &&
            ((r = parseInt(this.data.substr(t), 10)), e.put(r, 3 * n + 1));
        }),
        (e.exports = i);
    },
    90177: (e, t, r) => {
      let n = r(3455);
      (t.mul = function (e, t) {
        let r = new Uint8Array(e.length + t.length - 1);
        for (let i = 0; i < e.length; i++)
          for (let o = 0; o < t.length; o++) r[i + o] ^= n.mul(e[i], t[o]);
        return r;
      }),
        (t.mod = function (e, t) {
          let r = new Uint8Array(e);
          for (; r.length - t.length >= 0; ) {
            let e = r[0];
            for (let i = 0; i < t.length; i++) r[i] ^= n.mul(t[i], e);
            let i = 0;
            for (; i < r.length && 0 === r[i]; ) i++;
            r = r.slice(i);
          }
          return r;
        }),
        (t.generateECPolynomial = function (e) {
          let r = new Uint8Array([1]);
          for (let i = 0; i < e; i++)
            r = t.mul(r, new Uint8Array([1, n.exp(i)]));
          return r;
        });
    },
    77245: (e, t, r) => {
      let n = r(56880),
        i = r(20865),
        o = r(70452),
        a = r(53972),
        s = r(863),
        l = r(87428),
        c = r(69616),
        u = r(93684),
        d = r(78928),
        h = r(54557),
        p = r(73335),
        f = r(71932),
        m = r(28181);
      function g(e, t, r) {
        let n, i;
        let o = e.size,
          a = p.getEncodedBits(t, r);
        for (n = 0; n < 15; n++)
          (i = ((a >> n) & 1) == 1),
            n < 6
              ? e.set(n, 8, i, !0)
              : n < 8
              ? e.set(n + 1, 8, i, !0)
              : e.set(o - 15 + n, 8, i, !0),
            n < 8
              ? e.set(8, o - n - 1, i, !0)
              : n < 9
              ? e.set(8, 15 - n - 1 + 1, i, !0)
              : e.set(8, 15 - n - 1, i, !0);
        e.set(o - 8, 8, 1, !0);
      }
      t.create = function (e, t) {
        let r, p;
        if (void 0 === e || "" === e) throw Error("No input text");
        let y = i.M;
        return (
          void 0 !== t &&
            ((y = i.from(t.errorCorrectionLevel, i.M)),
            (r = h.from(t.version)),
            (p = c.from(t.maskPattern)),
            t.toSJISFunc && n.setToSJISFunction(t.toSJISFunc)),
          (function (e, t, r, i) {
            let p;
            if (Array.isArray(e)) p = m.fromArray(e);
            else if ("string" == typeof e) {
              let n = t;
              if (!n) {
                let t = m.rawSplit(e);
                n = h.getBestVersionForData(t, r);
              }
              p = m.fromString(e, n || 40);
            } else throw Error("Invalid data");
            let y = h.getBestVersionForData(p, r);
            if (!y)
              throw Error(
                "The amount of data is too big to be stored in a QR Code"
              );
            if (t) {
              if (t < y)
                throw Error(
                  "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                    y +
                    ".\n"
                );
            } else t = y;
            let b = (function (e, t, r) {
                let i = new o();
                r.forEach(function (t) {
                  i.put(t.mode.bit, 4),
                    i.put(t.getLength(), f.getCharCountIndicator(t.mode, e)),
                    t.write(i);
                });
                let a =
                  (n.getSymbolTotalCodewords(e) -
                    u.getTotalCodewordsCount(e, t)) *
                  8;
                for (
                  i.getLengthInBits() + 4 <= a && i.put(0, 4);
                  i.getLengthInBits() % 8 != 0;

                )
                  i.putBit(0);
                let s = (a - i.getLengthInBits()) / 8;
                for (let e = 0; e < s; e++) i.put(e % 2 ? 17 : 236, 8);
                return (function (e, t, r) {
                  let i, o;
                  let a = n.getSymbolTotalCodewords(t),
                    s = a - u.getTotalCodewordsCount(t, r),
                    l = u.getBlocksCount(t, r),
                    c = a % l,
                    h = l - c,
                    p = Math.floor(a / l),
                    f = Math.floor(s / l),
                    m = f + 1,
                    g = p - f,
                    y = new d(g),
                    b = 0,
                    w = Array(l),
                    v = Array(l),
                    A = 0,
                    E = new Uint8Array(e.buffer);
                  for (let e = 0; e < l; e++) {
                    let t = e < h ? f : m;
                    (w[e] = E.slice(b, b + t)),
                      (v[e] = y.encode(w[e])),
                      (b += t),
                      (A = Math.max(A, t));
                  }
                  let C = new Uint8Array(a),
                    x = 0;
                  for (i = 0; i < A; i++)
                    for (o = 0; o < l; o++)
                      i < w[o].length && (C[x++] = w[o][i]);
                  for (i = 0; i < g; i++)
                    for (o = 0; o < l; o++) C[x++] = v[o][i];
                  return C;
                })(i, e, t);
              })(t, r, p),
              w = new a(n.getSymbolSize(t));
            return (
              (function (e, t) {
                let r = e.size,
                  n = l.getPositions(t);
                for (let t = 0; t < n.length; t++) {
                  let i = n[t][0],
                    o = n[t][1];
                  for (let t = -1; t <= 7; t++)
                    if (!(i + t <= -1) && !(r <= i + t))
                      for (let n = -1; n <= 7; n++)
                        o + n <= -1 ||
                          r <= o + n ||
                          ((t >= 0 && t <= 6 && (0 === n || 6 === n)) ||
                          (n >= 0 && n <= 6 && (0 === t || 6 === t)) ||
                          (t >= 2 && t <= 4 && n >= 2 && n <= 4)
                            ? e.set(i + t, o + n, !0, !0)
                            : e.set(i + t, o + n, !1, !0));
                }
              })(w, t),
              (function (e) {
                let t = e.size;
                for (let r = 8; r < t - 8; r++) {
                  let t = r % 2 == 0;
                  e.set(r, 6, t, !0), e.set(6, r, t, !0);
                }
              })(w),
              (function (e, t) {
                let r = s.getPositions(t);
                for (let t = 0; t < r.length; t++) {
                  let n = r[t][0],
                    i = r[t][1];
                  for (let t = -2; t <= 2; t++)
                    for (let r = -2; r <= 2; r++)
                      -2 === t ||
                      2 === t ||
                      -2 === r ||
                      2 === r ||
                      (0 === t && 0 === r)
                        ? e.set(n + t, i + r, !0, !0)
                        : e.set(n + t, i + r, !1, !0);
                }
              })(w, t),
              g(w, r, 0),
              t >= 7 &&
                (function (e, t) {
                  let r, n, i;
                  let o = e.size,
                    a = h.getEncodedBits(t);
                  for (let t = 0; t < 18; t++)
                    (r = Math.floor(t / 3)),
                      (n = (t % 3) + o - 8 - 3),
                      (i = ((a >> t) & 1) == 1),
                      e.set(r, n, i, !0),
                      e.set(n, r, i, !0);
                })(w, t),
              (function (e, t) {
                let r = e.size,
                  n = -1,
                  i = r - 1,
                  o = 7,
                  a = 0;
                for (let s = r - 1; s > 0; s -= 2)
                  for (6 === s && s--; ; ) {
                    for (let r = 0; r < 2; r++)
                      if (!e.isReserved(i, s - r)) {
                        let n = !1;
                        a < t.length && (n = ((t[a] >>> o) & 1) == 1),
                          e.set(i, s - r, n),
                          -1 == --o && (a++, (o = 7));
                      }
                    if ((i += n) < 0 || r <= i) {
                      (i -= n), (n = -n);
                      break;
                    }
                  }
              })(w, b),
              isNaN(i) && (i = c.getBestMask(w, g.bind(null, w, r))),
              c.applyMask(i, w),
              g(w, r, i),
              {
                modules: w,
                version: t,
                errorCorrectionLevel: r,
                maskPattern: i,
                segments: p,
              }
            );
          })(e, r, y, p)
        );
      };
    },
    78928: (e, t, r) => {
      let n = r(90177);
      function i(e) {
        (this.genPoly = void 0),
          (this.degree = e),
          this.degree && this.initialize(this.degree);
      }
      (i.prototype.initialize = function (e) {
        (this.degree = e), (this.genPoly = n.generateECPolynomial(this.degree));
      }),
        (i.prototype.encode = function (e) {
          if (!this.genPoly) throw Error("Encoder not initialized");
          let t = new Uint8Array(e.length + this.degree);
          t.set(e);
          let r = n.mod(t, this.genPoly),
            i = this.degree - r.length;
          if (i > 0) {
            let e = new Uint8Array(this.degree);
            return e.set(r, i), e;
          }
          return r;
        }),
        (e.exports = i);
    },
    26734: (e, t) => {
      let r = "[0-9]+",
        n =
          "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
        i =
          "(?:(?![A-Z0-9 $%*+\\-./:]|" +
          (n = n.replace(/u/g, "\\u")) +
          ")(?:.|[\r\n]))+";
      (t.KANJI = RegExp(n, "g")),
        (t.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
        (t.BYTE = RegExp(i, "g")),
        (t.NUMERIC = RegExp(r, "g")),
        (t.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g"));
      let o = RegExp("^" + n + "$"),
        a = RegExp("^" + r + "$"),
        s = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      (t.testKanji = function (e) {
        return o.test(e);
      }),
        (t.testNumeric = function (e) {
          return a.test(e);
        }),
        (t.testAlphanumeric = function (e) {
          return s.test(e);
        });
    },
    28181: (e, t, r) => {
      let n = r(71932),
        i = r(53773),
        o = r(22115),
        a = r(85688),
        s = r(47873),
        l = r(26734),
        c = r(56880),
        u = r(45130);
      function d(e) {
        return unescape(encodeURIComponent(e)).length;
      }
      function h(e, t, r) {
        let n;
        let i = [];
        for (; null !== (n = e.exec(r)); )
          i.push({ data: n[0], index: n.index, mode: t, length: n[0].length });
        return i;
      }
      function p(e) {
        let t, r;
        let i = h(l.NUMERIC, n.NUMERIC, e),
          o = h(l.ALPHANUMERIC, n.ALPHANUMERIC, e);
        return (
          c.isKanjiModeEnabled()
            ? ((t = h(l.BYTE, n.BYTE, e)), (r = h(l.KANJI, n.KANJI, e)))
            : ((t = h(l.BYTE_KANJI, n.BYTE, e)), (r = [])),
          i
            .concat(o, t, r)
            .sort(function (e, t) {
              return e.index - t.index;
            })
            .map(function (e) {
              return { data: e.data, mode: e.mode, length: e.length };
            })
        );
      }
      function f(e, t) {
        switch (t) {
          case n.NUMERIC:
            return i.getBitsLength(e);
          case n.ALPHANUMERIC:
            return o.getBitsLength(e);
          case n.KANJI:
            return s.getBitsLength(e);
          case n.BYTE:
            return a.getBitsLength(e);
        }
      }
      function m(e, t) {
        let r;
        let l = n.getBestModeForData(e);
        if ((r = n.from(t, l)) !== n.BYTE && r.bit < l.bit)
          throw Error(
            '"' +
              e +
              '" cannot be encoded with mode ' +
              n.toString(r) +
              ".\n Suggested mode is: " +
              n.toString(l)
          );
        switch ((r !== n.KANJI || c.isKanjiModeEnabled() || (r = n.BYTE), r)) {
          case n.NUMERIC:
            return new i(e);
          case n.ALPHANUMERIC:
            return new o(e);
          case n.KANJI:
            return new s(e);
          case n.BYTE:
            return new a(e);
        }
      }
      (t.fromArray = function (e) {
        return e.reduce(function (e, t) {
          return (
            "string" == typeof t
              ? e.push(m(t, null))
              : t.data && e.push(m(t.data, t.mode)),
            e
          );
        }, []);
      }),
        (t.fromString = function (e, r) {
          let i = (function (e, t) {
              let r = {},
                i = { start: {} },
                o = ["start"];
              for (let a = 0; a < e.length; a++) {
                let s = e[a],
                  l = [];
                for (let e = 0; e < s.length; e++) {
                  let c = s[e],
                    u = "" + a + e;
                  l.push(u), (r[u] = { node: c, lastCount: 0 }), (i[u] = {});
                  for (let e = 0; e < o.length; e++) {
                    let a = o[e];
                    r[a] && r[a].node.mode === c.mode
                      ? ((i[a][u] =
                          f(r[a].lastCount + c.length, c.mode) -
                          f(r[a].lastCount, c.mode)),
                        (r[a].lastCount += c.length))
                      : (r[a] && (r[a].lastCount = c.length),
                        (i[a][u] =
                          f(c.length, c.mode) +
                          4 +
                          n.getCharCountIndicator(c.mode, t)));
                  }
                }
                o = l;
              }
              for (let e = 0; e < o.length; e++) i[o[e]].end = 0;
              return { map: i, table: r };
            })(
              (function (e) {
                let t = [];
                for (let r = 0; r < e.length; r++) {
                  let i = e[r];
                  switch (i.mode) {
                    case n.NUMERIC:
                      t.push([
                        i,
                        {
                          data: i.data,
                          mode: n.ALPHANUMERIC,
                          length: i.length,
                        },
                        { data: i.data, mode: n.BYTE, length: i.length },
                      ]);
                      break;
                    case n.ALPHANUMERIC:
                      t.push([
                        i,
                        { data: i.data, mode: n.BYTE, length: i.length },
                      ]);
                      break;
                    case n.KANJI:
                      t.push([
                        i,
                        { data: i.data, mode: n.BYTE, length: d(i.data) },
                      ]);
                      break;
                    case n.BYTE:
                      t.push([
                        { data: i.data, mode: n.BYTE, length: d(i.data) },
                      ]);
                  }
                }
                return t;
              })(p(e, c.isKanjiModeEnabled())),
              r
            ),
            o = u.find_path(i.map, "start", "end"),
            a = [];
          for (let e = 1; e < o.length - 1; e++) a.push(i.table[o[e]].node);
          return t.fromArray(
            a.reduce(function (e, t) {
              let r = e.length - 1 >= 0 ? e[e.length - 1] : null;
              return (
                r && r.mode === t.mode
                  ? (e[e.length - 1].data += t.data)
                  : e.push(t),
                e
              );
            }, [])
          );
        }),
        (t.rawSplit = function (e) {
          return t.fromArray(p(e, c.isKanjiModeEnabled()));
        });
    },
    56880: (e, t) => {
      let r;
      let n = [
        0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
        655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828,
        1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532,
        3706,
      ];
      (t.getSymbolSize = function (e) {
        if (!e) throw Error('"version" cannot be null or undefined');
        if (e < 1 || e > 40)
          throw Error('"version" should be in range from 1 to 40');
        return 4 * e + 17;
      }),
        (t.getSymbolTotalCodewords = function (e) {
          return n[e];
        }),
        (t.getBCHDigit = function (e) {
          let t = 0;
          for (; 0 !== e; ) t++, (e >>>= 1);
          return t;
        }),
        (t.setToSJISFunction = function (e) {
          if ("function" != typeof e)
            throw Error('"toSJISFunc" is not a valid function.');
          r = e;
        }),
        (t.isKanjiModeEnabled = function () {
          return void 0 !== r;
        }),
        (t.toSJIS = function (e) {
          return r(e);
        });
    },
    35040: (e, t) => {
      t.isValid = function (e) {
        return !isNaN(e) && e >= 1 && e <= 40;
      };
    },
    54557: (e, t, r) => {
      let n = r(56880),
        i = r(93684),
        o = r(20865),
        a = r(71932),
        s = r(35040),
        l = n.getBCHDigit(7973);
      function c(e, t) {
        return a.getCharCountIndicator(e, t) + 4;
      }
      (t.from = function (e, t) {
        return s.isValid(e) ? parseInt(e, 10) : t;
      }),
        (t.getCapacity = function (e, t, r) {
          if (!s.isValid(e)) throw Error("Invalid QR Code version");
          void 0 === r && (r = a.BYTE);
          let o =
            (n.getSymbolTotalCodewords(e) - i.getTotalCodewordsCount(e, t)) * 8;
          if (r === a.MIXED) return o;
          let l = o - c(r, e);
          switch (r) {
            case a.NUMERIC:
              return Math.floor((l / 10) * 3);
            case a.ALPHANUMERIC:
              return Math.floor((l / 11) * 2);
            case a.KANJI:
              return Math.floor(l / 13);
            case a.BYTE:
            default:
              return Math.floor(l / 8);
          }
        }),
        (t.getBestVersionForData = function (e, r) {
          let n;
          let i = o.from(r, o.M);
          if (Array.isArray(e)) {
            if (e.length > 1)
              return (function (e, r) {
                for (let n = 1; n <= 40; n++)
                  if (
                    (function (e, t) {
                      let r = 0;
                      return (
                        e.forEach(function (e) {
                          let n = c(e.mode, t);
                          r += n + e.getBitsLength();
                        }),
                        r
                      );
                    })(e, n) <= t.getCapacity(n, r, a.MIXED)
                  )
                    return n;
              })(e, i);
            if (0 === e.length) return 1;
            n = e[0];
          } else n = e;
          return (function (e, r, n) {
            for (let i = 1; i <= 40; i++)
              if (r <= t.getCapacity(i, n, e)) return i;
          })(n.mode, n.getLength(), i);
        }),
        (t.getEncodedBits = function (e) {
          if (!s.isValid(e) || e < 7) throw Error("Invalid QR Code version");
          let t = e << 12;
          for (; n.getBCHDigit(t) - l >= 0; )
            t ^= 7973 << (n.getBCHDigit(t) - l);
          return (e << 12) | t;
        });
    },
    16383: (e, t, r) => {
      let n = r(62172);
      (t.render = function (e, t, r) {
        var i;
        let o = r,
          a = t;
        void 0 !== o || (t && t.getContext) || ((o = t), (t = void 0)),
          t ||
            (a = (function () {
              try {
                return document.createElement("canvas");
              } catch (e) {
                throw Error("You need to specify a canvas element");
              }
            })()),
          (o = n.getOptions(o));
        let s = n.getImageWidth(e.modules.size, o),
          l = a.getContext("2d"),
          c = l.createImageData(s, s);
        return (
          n.qrToImageData(c.data, e, o),
          (i = a),
          l.clearRect(0, 0, i.width, i.height),
          i.style || (i.style = {}),
          (i.height = s),
          (i.width = s),
          (i.style.height = s + "px"),
          (i.style.width = s + "px"),
          l.putImageData(c, 0, 0),
          a
        );
      }),
        (t.renderToDataURL = function (e, r, n) {
          let i = n;
          void 0 !== i || (r && r.getContext) || ((i = r), (r = void 0)),
            i || (i = {});
          let o = t.render(e, r, i),
            a = i.type || "image/png",
            s = i.rendererOpts || {};
          return o.toDataURL(a, s.quality);
        });
    },
    40934: (e, t, r) => {
      let n = r(62172);
      function i(e, t) {
        let r = e.a / 255,
          n = t + '="' + e.hex + '"';
        return r < 1
          ? n + " " + t + '-opacity="' + r.toFixed(2).slice(1) + '"'
          : n;
      }
      function o(e, t, r) {
        let n = e + t;
        return void 0 !== r && (n += " " + r), n;
      }
      t.render = function (e, t, r) {
        let a = n.getOptions(t),
          s = e.modules.size,
          l = e.modules.data,
          c = s + 2 * a.margin,
          u = a.color.light.a
            ? "<path " +
              i(a.color.light, "fill") +
              ' d="M0 0h' +
              c +
              "v" +
              c +
              'H0z"/>'
            : "",
          d =
            "<path " +
            i(a.color.dark, "stroke") +
            ' d="' +
            (function (e, t, r) {
              let n = "",
                i = 0,
                a = !1,
                s = 0;
              for (let l = 0; l < e.length; l++) {
                let c = Math.floor(l % t),
                  u = Math.floor(l / t);
                c || a || (a = !0),
                  e[l]
                    ? (s++,
                      (l > 0 && c > 0 && e[l - 1]) ||
                        ((n += a ? o("M", c + r, 0.5 + u + r) : o("m", i, 0)),
                        (i = 0),
                        (a = !1)),
                      (c + 1 < t && e[l + 1]) || ((n += o("h", s)), (s = 0)))
                    : i++;
              }
              return n;
            })(l, s, a.margin) +
            '"/>',
          h =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            (a.width
              ? 'width="' + a.width + '" height="' + a.width + '" '
              : "") +
            ('viewBox="0 0 ' + c) +
            " " +
            c +
            '" shape-rendering="crispEdges">' +
            u +
            d +
            "</svg>\n";
        return "function" == typeof r && r(null, h), h;
      };
    },
    62172: (e, t) => {
      function r(e) {
        if (("number" == typeof e && (e = e.toString()), "string" != typeof e))
          throw Error("Color should be defined as hex string");
        let t = e.slice().replace("#", "").split("");
        if (t.length < 3 || 5 === t.length || t.length > 8)
          throw Error("Invalid hex color: " + e);
        (3 === t.length || 4 === t.length) &&
          (t = Array.prototype.concat.apply(
            [],
            t.map(function (e) {
              return [e, e];
            })
          )),
          6 === t.length && t.push("F", "F");
        let r = parseInt(t.join(""), 16);
        return {
          r: (r >> 24) & 255,
          g: (r >> 16) & 255,
          b: (r >> 8) & 255,
          a: 255 & r,
          hex: "#" + t.slice(0, 6).join(""),
        };
      }
      (t.getOptions = function (e) {
        e || (e = {}), e.color || (e.color = {});
        let t =
            void 0 === e.margin || null === e.margin || e.margin < 0
              ? 4
              : e.margin,
          n = e.width && e.width >= 21 ? e.width : void 0,
          i = e.scale || 4;
        return {
          width: n,
          scale: n ? 4 : i,
          margin: t,
          color: {
            dark: r(e.color.dark || "#000000ff"),
            light: r(e.color.light || "#ffffffff"),
          },
          type: e.type,
          rendererOpts: e.rendererOpts || {},
        };
      }),
        (t.getScale = function (e, t) {
          return t.width && t.width >= e + 2 * t.margin
            ? t.width / (e + 2 * t.margin)
            : t.scale;
        }),
        (t.getImageWidth = function (e, r) {
          let n = t.getScale(e, r);
          return Math.floor((e + 2 * r.margin) * n);
        }),
        (t.qrToImageData = function (e, r, n) {
          let i = r.modules.size,
            o = r.modules.data,
            a = t.getScale(i, n),
            s = Math.floor((i + 2 * n.margin) * a),
            l = n.margin * a,
            c = [n.color.light, n.color.dark];
          for (let t = 0; t < s; t++)
            for (let r = 0; r < s; r++) {
              let u = (t * s + r) * 4,
                d = n.color.light;
              t >= l &&
                r >= l &&
                t < s - l &&
                r < s - l &&
                (d =
                  c[
                    o[Math.floor((t - l) / a) * i + Math.floor((r - l) / a)]
                      ? 1
                      : 0
                  ]),
                (e[u++] = d.r),
                (e[u++] = d.g),
                (e[u++] = d.b),
                (e[u] = d.a);
            }
        });
    },
    95714: (e, t, r) => {
      "use strict";
      r.d(t, { E9: () => o, Mi: () => n, pN: () => i, xi: () => a });
      var n = "right-scroll-bar-position",
        i = "width-before-scroll-bar",
        o = "with-scroll-bars-hidden",
        a = "--removed-body-scroll-bar-size";
    },
    10101: (e, t, r) => {
      "use strict";
      r.d(t, { jp: () => m });
      var n = r(12115),
        i = r(75219),
        o = r(95714),
        a = { left: 0, top: 0, right: 0, gap: 0 },
        s = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        l = function (e) {
          var t = window.getComputedStyle(document.body),
            r = t["padding" === e ? "paddingLeft" : "marginLeft"],
            n = t["padding" === e ? "paddingTop" : "marginTop"],
            i = t["padding" === e ? "paddingRight" : "marginRight"];
          return [s(r), s(n), s(i)];
        },
        c = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return a;
          var t = l(e),
            r = document.documentElement.clientWidth,
            n = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, n - r + t[2] - t[0]),
          };
        },
        u = (0, i.T0)(),
        d = "data-scroll-locked",
        h = function (e, t, r, n) {
          var i = e.left,
            a = e.top,
            s = e.right,
            l = e.gap;
          return (
            void 0 === r && (r = "margin"),
            "\n  ."
              .concat(o.E9, " {\n   overflow: hidden ")
              .concat(n, ";\n   padding-right: ")
              .concat(l, "px ")
              .concat(n, ";\n  }\n  body[")
              .concat(d, "] {\n    overflow: hidden ")
              .concat(n, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(n, ";"),
                  "margin" === r &&
                    "\n    padding-left: "
                      .concat(i, "px;\n    padding-top: ")
                      .concat(a, "px;\n    padding-right: ")
                      .concat(
                        s,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(l, "px ")
                      .concat(n, ";\n    "),
                  "padding" === r &&
                    "padding-right: ".concat(l, "px ").concat(n, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(o.Mi, " {\n    right: ")
              .concat(l, "px ")
              .concat(n, ";\n  }\n  \n  .")
              .concat(o.pN, " {\n    margin-right: ")
              .concat(l, "px ")
              .concat(n, ";\n  }\n  \n  .")
              .concat(o.Mi, " .")
              .concat(o.Mi, " {\n    right: 0 ")
              .concat(n, ";\n  }\n  \n  .")
              .concat(o.pN, " .")
              .concat(o.pN, " {\n    margin-right: 0 ")
              .concat(n, ";\n  }\n  \n  body[")
              .concat(d, "] {\n    ")
              .concat(o.xi, ": ")
              .concat(l, "px;\n  }\n")
          );
        },
        p = function () {
          var e = parseInt(document.body.getAttribute(d) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        f = function () {
          n.useEffect(function () {
            return (
              document.body.setAttribute(d, (p() + 1).toString()),
              function () {
                var e = p() - 1;
                e <= 0
                  ? document.body.removeAttribute(d)
                  : document.body.setAttribute(d, e.toString());
              }
            );
          }, []);
        },
        m = function (e) {
          var t = e.noRelative,
            r = e.noImportant,
            i = e.gapMode,
            o = void 0 === i ? "margin" : i;
          f();
          var a = n.useMemo(
            function () {
              return c(o);
            },
            [o]
          );
          return n.createElement(u, {
            styles: h(a, !t, o, r ? "" : "!important"),
          });
        };
    },
    75219: (e, t, r) => {
      "use strict";
      r.d(t, { T0: () => s });
      var n,
        i = r(12115),
        o = function () {
          var e = 0,
            t = null;
          return {
            add: function (i) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = n || r.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var o, a;
                (o = t).styleSheet
                  ? (o.styleSheet.cssText = i)
                  : o.appendChild(document.createTextNode(i)),
                  (a = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(a);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        a = function () {
          var e = o();
          return function (t, r) {
            i.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && r]
            );
          };
        },
        s = function () {
          var e = a();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        };
    },
    55720: function (e, t, r) {
      var n;
      !(function (i, o) {
        "use strict";
        var a = "function",
          s = "undefined",
          l = "object",
          c = "string",
          u = "major",
          d = "model",
          h = "name",
          p = "type",
          f = "vendor",
          m = "version",
          g = "architecture",
          y = "console",
          b = "mobile",
          w = "tablet",
          v = "smarttv",
          A = "wearable",
          E = "embedded",
          C = "Amazon",
          x = "Apple",
          _ = "ASUS",
          k = "BlackBerry",
          I = "Browser",
          T = "Chrome",
          S = "Firefox",
          O = "Google",
          B = "Huawei",
          N = "Microsoft",
          P = "Motorola",
          R = "Opera",
          M = "Samsung",
          D = "Sharp",
          L = "Sony",
          F = "Xiaomi",
          j = "Zebra",
          U = "Facebook",
          H = "Chromium OS",
          Q = "Mac OS",
          q = " Browser",
          W = function (e, t) {
            var r = {};
            for (var n in e)
              t[n] && t[n].length % 2 == 0
                ? (r[n] = t[n].concat(e[n]))
                : (r[n] = e[n]);
            return r;
          },
          z = function (e) {
            for (var t = {}, r = 0; r < e.length; r++)
              t[e[r].toUpperCase()] = e[r];
            return t;
          },
          G = function (e, t) {
            return typeof e === c && -1 !== Z(t).indexOf(Z(e));
          },
          Z = function (e) {
            return e.toLowerCase();
          },
          K = function (e, t) {
            if (typeof e === c)
              return (
                (e = e.replace(/^\s\s*/, "")),
                typeof t === s ? e : e.substring(0, 500)
              );
          },
          V = function (e, t) {
            for (var r, n, i, s, c, u, d = 0; d < t.length && !c; ) {
              var h = t[d],
                p = t[d + 1];
              for (r = n = 0; r < h.length && !c && h[r]; )
                if ((c = h[r++].exec(e)))
                  for (i = 0; i < p.length; i++)
                    (u = c[++n]),
                      typeof (s = p[i]) === l && s.length > 0
                        ? 2 === s.length
                          ? typeof s[1] == a
                            ? (this[s[0]] = s[1].call(this, u))
                            : (this[s[0]] = s[1])
                          : 3 === s.length
                          ? typeof s[1] !== a || (s[1].exec && s[1].test)
                            ? (this[s[0]] = u ? u.replace(s[1], s[2]) : void 0)
                            : (this[s[0]] = u
                                ? s[1].call(this, u, s[2])
                                : void 0)
                          : 4 === s.length &&
                            (this[s[0]] = u
                              ? s[3].call(this, u.replace(s[1], s[2]))
                              : void 0)
                        : (this[s] = u || o);
              d += 2;
            }
          },
          Y = function (e, t) {
            for (var r in t)
              if (typeof t[r] === l && t[r].length > 0) {
                for (var n = 0; n < t[r].length; n++)
                  if (G(t[r][n], e)) return "?" === r ? o : r;
              } else if (G(t[r], e)) return "?" === r ? o : r;
            return t.hasOwnProperty("*") ? t["*"] : e;
          },
          J = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM",
          },
          X = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [m, [h, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [m, [h, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [h, m],
              [/opios[\/ ]+([\w\.]+)/i],
              [m, [h, R + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [m, [h, R + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [m, [h, R]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [m, [h, "Baidu"]],
              [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
              [m, [h, "Maxthon"]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
                /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
                /(heytap|ovi|115)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [h, m],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [m, [h, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [m, [h, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [m, [h, "UC" + I]],
              [
                /microm.+\bqbcore\/([\w\.]+)/i,
                /\bqbcore\/([\w\.]+).+microm/i,
                /micromessenger\/([\w\.]+)/i,
              ],
              [m, [h, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [m, [h, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [m, [h, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [m, [h, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [m, [h, "Smart Lenovo " + I]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[h, /(.+)/, "$1 Secure " + I], m],
              [/\bfocus\/([\w\.]+)/i],
              [m, [h, S + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [m, [h, R + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [m, [h, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [m, [h, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [m, [h, R + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [m, [h, "MIUI" + q]],
              [/fxios\/([\w\.-]+)/i],
              [m, [h, S]],
              [/\bqihoobrowser\/?([\w\.]*)/i],
              [m, [h, "360"]],
              [/\b(qq)\/([\w\.]+)/i],
              [[h, /(.+)/, "$1Browser"], m],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [[h, /(.+)/, "$1" + q], m],
              [/samsungbrowser\/([\w\.]+)/i],
              [m, [h, M + " Internet"]],
              [/metasr[\/ ]?([\d\.]+)/i],
              [m, [h, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [[h, "Sogou Mobile"], m],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
              ],
              [h, m],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [h],
              [
                /ome\/([\w\.]+) \w* ?(iron) saf/i,
                /ome\/([\w\.]+).+qihu (360)[es]e/i,
              ],
              [m, h],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[h, U], m],
              [
                /(Klarna)\/([\w\.]+)/i,
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(alipay)client\/([\w\.]+)/i,
                /(twitter)(?:and| f.+e\/([\w\.]+))/i,
                /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
              ],
              [h, m],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [m, [h, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [m, [h, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [m, [h, T + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[h, T + " WebView"], m],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [m, [h, "Android " + I]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [h, m],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [m, [h, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [m, h],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                h,
                [
                  m,
                  Y,
                  {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/",
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [h, m],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[h, "Netscape"], m],
              [/(wolvic|librewolf)\/([\w\.]+)/i],
              [h, m],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [m, [h, S + " Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i,
              ],
              [h, [m, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [h, [m, /master.|lts./, ""]],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[g, "amd64"]],
              [/(ia32(?=;))/i],
              [[g, Z]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[g, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[g, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[g, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[g, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[g, /ower/, "", Z]],
              [/(sun4\w)[;\)]/i],
              [[g, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[g, Z]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [d, [f, M], [p, w]],
              [
                /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]((?!sm-[lr])[-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [d, [f, M], [p, b]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [d, [f, x], [p, b]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [d, [f, x], [p, w]],
              [/(macintosh);/i],
              [d, [f, x]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [d, [f, D], [p, b]],
              [/(?:honor)([-\w ]+)[;\)]/i],
              [d, [f, "Honor"], [p, b]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [d, [f, B], [p, w]],
              [
                /(?:huawei)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [d, [f, B], [p, b]],
              [
                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
              ],
              [
                [d, /_/g, " "],
                [f, F],
                [p, b],
              ],
              [
                /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
                /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i,
              ],
              [
                [d, /_/g, " "],
                [f, F],
                [p, w],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [d, [f, "OPPO"], [p, b]],
              [/\b(opd2\d{3}a?) bui/i],
              [d, [f, "OPPO"], [p, w]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [d, [f, "Vivo"], [p, b]],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [d, [f, "Realme"], [p, b]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [d, [f, P], [p, b]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [d, [f, P], [p, w]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [d, [f, "LG"], [p, w]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [d, [f, "LG"], [p, b]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [d, [f, "Lenovo"], [p, w]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [d, /_/g, " "],
                [f, "Nokia"],
                [p, b],
              ],
              [/(pixel c)\b/i],
              [d, [f, O], [p, w]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [d, [f, O], [p, b]],
              [
                /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [d, [f, L], [p, b]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [d, "Xperia Tablet"],
                [f, L],
                [p, w],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [d, [f, "OnePlus"], [p, b]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [d, [f, C], [p, w]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [d, /(.+)/g, "Fire Phone $1"],
                [f, C],
                [p, b],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [d, f, [p, w]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [d, [f, k], [p, b]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [d, [f, _], [p, w]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [d, [f, _], [p, b]],
              [/(nexus 9)/i],
              [d, [f, "HTC"], [p, w]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [f, [d, /_/g, " "], [p, b]],
              [
                /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
              ],
              [d, [f, "TCL"], [p, w]],
              [/(itel) ((\w+))/i],
              [
                [f, Z],
                d,
                [p, Y, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [d, [f, "Acer"], [p, w]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [d, [f, "Meizu"], [p, b]],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [d, [f, "Ulefone"], [p, b]],
              [
                /; (energy ?\w+)(?: bui|\))/i,
                /; energizer ([\w ]+)(?: bui|\))/i,
              ],
              [d, [f, "Energizer"], [p, b]],
              [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
              [d, [f, "Cat"], [p, b]],
              [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
              [d, [f, "Smartfren"], [p, b]],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [d, [f, "Nothing"], [p, b]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
                /; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [f, d, [p, b]],
              [
                /(imo) (tab \w+)/i,
                /(kobo)\s(ereader|touch)/i,
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [f, d, [p, w]],
              [/(surface duo)/i],
              [d, [f, N], [p, w]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [d, [f, "Fairphone"], [p, b]],
              [/(u304aa)/i],
              [d, [f, "AT&T"], [p, b]],
              [/\bsie-(\w*)/i],
              [d, [f, "Siemens"], [p, b]],
              [/\b(rct\w+) b/i],
              [d, [f, "RCA"], [p, w]],
              [/\b(venue[\d ]{2,7}) b/i],
              [d, [f, "Dell"], [p, w]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [d, [f, "Verizon"], [p, w]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [d, [f, "Barnes & Noble"], [p, w]],
              [/\b(tm\d{3}\w+) b/i],
              [d, [f, "NuVision"], [p, w]],
              [/\b(k88) b/i],
              [d, [f, "ZTE"], [p, w]],
              [/\b(nx\d{3}j) b/i],
              [d, [f, "ZTE"], [p, b]],
              [/\b(gen\d{3}) b.+49h/i],
              [d, [f, "Swiss"], [p, b]],
              [/\b(zur\d{3}) b/i],
              [d, [f, "Swiss"], [p, w]],
              [/\b((zeki)?tb.*\b) b/i],
              [d, [f, "Zeki"], [p, w]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[f, "Dragon Touch"], d, [p, w]],
              [/\b(ns-?\w{0,9}) b/i],
              [d, [f, "Insignia"], [p, w]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [d, [f, "NextBook"], [p, w]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[f, "Voice"], d, [p, b]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[f, "LvTel"], d, [p, b]],
              [/\b(ph-1) /i],
              [d, [f, "Essential"], [p, b]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [d, [f, "Envizen"], [p, w]],
              [/\b(trio[-\w\. ]+) b/i],
              [d, [f, "MachSpeed"], [p, w]],
              [/\btu_(1491) b/i],
              [d, [f, "Rotor"], [p, w]],
              [/(shield[\w ]+) b/i],
              [d, [f, "Nvidia"], [p, w]],
              [/(sprint) (\w+)/i],
              [f, d, [p, b]],
              [/(kin\.[onetw]{3})/i],
              [
                [d, /\./g, " "],
                [f, N],
                [p, b],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [d, [f, j], [p, w]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [d, [f, j], [p, b]],
              [/smart-tv.+(samsung)/i],
              [f, [p, v]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [d, /^/, "SmartTV"],
                [f, M],
                [p, v],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [f, "LG"],
                [p, v],
              ],
              [/(apple) ?tv/i],
              [f, [d, x + " TV"], [p, v]],
              [/crkey/i],
              [
                [d, T + "cast"],
                [f, O],
                [p, v],
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [d, [f, C], [p, v]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [d, [f, D], [p, v]],
              [/(bravia[\w ]+)( bui|\))/i],
              [d, [f, L], [p, v]],
              [/(mitv-\w{5}) bui/i],
              [d, [f, F], [p, v]],
              [/Hbbtv.*(technisat) (.*);/i],
              [f, d, [p, v]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [f, K],
                [d, K],
                [p, v],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[p, v]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [f, d, [p, y]],
              [/droid.+; (shield) bui/i],
              [d, [f, "Nvidia"], [p, y]],
              [/(playstation [345portablevi]+)/i],
              [d, [f, L], [p, y]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [d, [f, N], [p, y]],
              [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
              [d, [f, M], [p, A]],
              [/((pebble))app/i],
              [f, d, [p, A]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [d, [f, x], [p, A]],
              [/droid.+; (glass) \d/i],
              [d, [f, O], [p, A]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [d, [f, j], [p, A]],
              [/droid.+; (glass) \d/i],
              [d, [f, O], [p, A]],
              [/(pico) (4|neo3(?: link|pro)?)/i],
              [f, d, [p, A]],
              [/; (quest( \d| pro)?)/i],
              [d, [f, U], [p, A]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [f, [p, E]],
              [/(aeobc)\b/i],
              [d, [f, C], [p, E]],
              [
                /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i,
              ],
              [d, [p, b]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [d, [p, w]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[p, w]],
              [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
              ],
              [[p, b]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [d, [f, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [m, [h, "EdgeHTML"]],
              [/(arkweb)\/([\w\.]+)/i],
              [h, m],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [m, [h, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
              ],
              [h, m],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [m, h],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [h, m],
              [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
              [h, [m, Y, J]],
              [
                /windows nt 6\.2; (arm)/i,
                /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
              ],
              [
                [m, Y, J],
                [h, "Windows"],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [m, /_/g, "."],
                [h, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [h, Q],
                [m, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [m, h],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [h, m],
              [/\(bb(10);/i],
              [m, [h, k]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [m, [h, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [m, [h, S + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [m, [h, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [m, [h, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [m, [h, T + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[h, H], m],
              [
                /panasonic;(viera)/i,
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [h, m],
              [/(sunos) ?([\w\.\d]*)/i],
              [[h, "Solaris"], m],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [h, m],
            ],
          },
          $ = function (e, t) {
            if ((typeof e === l && ((t = e), (e = o)), !(this instanceof $)))
              return new $(e, t).getResult();
            var r = typeof i !== s && i.navigator ? i.navigator : o,
              n = e || (r && r.userAgent ? r.userAgent : ""),
              y = r && r.userAgentData ? r.userAgentData : o,
              v = t ? W(X, t) : X,
              A = r && r.userAgent == n;
            return (
              (this.getBrowser = function () {
                var e,
                  t = {};
                return (
                  (t[h] = o),
                  (t[m] = o),
                  V.call(t, n, v.browser),
                  (t[u] =
                    typeof (e = t[m]) === c
                      ? e.replace(/[^\d\.]/g, "").split(".")[0]
                      : o),
                  A &&
                    r &&
                    r.brave &&
                    typeof r.brave.isBrave == a &&
                    (t[h] = "Brave"),
                  t
                );
              }),
              (this.getCPU = function () {
                var e = {};
                return (e[g] = o), V.call(e, n, v.cpu), e;
              }),
              (this.getDevice = function () {
                var e = {};
                return (
                  (e[f] = o),
                  (e[d] = o),
                  (e[p] = o),
                  V.call(e, n, v.device),
                  A && !e[p] && y && y.mobile && (e[p] = b),
                  A &&
                    "Macintosh" == e[d] &&
                    r &&
                    typeof r.standalone !== s &&
                    r.maxTouchPoints &&
                    r.maxTouchPoints > 2 &&
                    ((e[d] = "iPad"), (e[p] = w)),
                  e
                );
              }),
              (this.getEngine = function () {
                var e = {};
                return (e[h] = o), (e[m] = o), V.call(e, n, v.engine), e;
              }),
              (this.getOS = function () {
                var e = {};
                return (
                  (e[h] = o),
                  (e[m] = o),
                  V.call(e, n, v.os),
                  A &&
                    !e[h] &&
                    y &&
                    y.platform &&
                    "Unknown" != y.platform &&
                    (e[h] = y.platform
                      .replace(/chrome os/i, H)
                      .replace(/macos/i, Q)),
                  e
                );
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return n;
              }),
              (this.setUA = function (e) {
                return (
                  (n = typeof e === c && e.length > 500 ? K(e, 500) : e), this
                );
              }),
              this.setUA(n),
              this
            );
          };
        ($.VERSION = "1.0.40"),
          ($.BROWSER = z([h, m, u])),
          ($.CPU = z([g])),
          ($.DEVICE = z([d, f, p, y, b, v, w, A, E])),
          ($.ENGINE = $.OS = z([h, m])),
          typeof t !== s
            ? (e.exports && (t = e.exports = $), (t.UAParser = $))
            : r.amdO
            ? o !==
                (n = function () {
                  return $;
                }.call(t, r, t, e)) && (e.exports = n)
            : typeof i !== s && (i.UAParser = $);
        var ee = typeof i !== s && (i.jQuery || i.Zepto);
        if (ee && !ee.ua) {
          var et = new $();
          (ee.ua = et.getResult()),
            (ee.ua.get = function () {
              return et.getUA();
            }),
            (ee.ua.set = function (e) {
              et.setUA(e);
              var t = et.getResult();
              for (var r in t) ee.ua[r] = t[r];
            });
        }
      })("object" == typeof window ? window : this);
    },
    42607: (e, t, r) => {
      "use strict";
      r.d(t, { S: () => s });
      var n = r(12115);
      function i(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var o = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect,
        a = new WeakMap();
      function s(e, t) {
        var r,
          s,
          l,
          c =
            ((r = t || null),
            (s = function (t) {
              return e.forEach(function (e) {
                return i(e, t);
              });
            }),
            ((l = (0, n.useState)(function () {
              return {
                value: r,
                callback: s,
                facade: {
                  get current() {
                    return l.value;
                  },
                  set current(value) {
                    var e = l.value;
                    e !== value && ((l.value = value), l.callback(value, e));
                  },
                },
              };
            })[0]).callback = s),
            l.facade);
        return (
          o(
            function () {
              var t = a.get(c);
              if (t) {
                var r = new Set(t),
                  n = new Set(e),
                  o = c.current;
                r.forEach(function (e) {
                  n.has(e) || i(e, null);
                }),
                  n.forEach(function (e) {
                    r.has(e) || i(e, o);
                  });
              }
              a.set(c, e);
            },
            [e]
          ),
          c
        );
      }
    },
    4496: (e, t, r) => {
      "use strict";
      e.exports = r(67878);
    },
    62343: (e, t, r) => {
      "use strict";
      e.exports = r(30985);
    },
    39735: (e, t, r) => {
      "use strict";
      e.exports = r(44281);
    },
    67878: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(12115),
        i = r(53398),
        o = r(3351);
      r(21535);
      var a = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(n);
      t.IntlProvider = function (e) {
        let {
            children: t,
            defaultTranslationValues: r,
            formats: s,
            getMessageFallback: l,
            locale: c,
            messages: u,
            now: d,
            onError: h,
            timeZone: p,
          } = e,
          f = n.useMemo(() => i.createCache(), [c]),
          m = n.useMemo(() => i.createIntlFormatters(f), [f]),
          g = n.useMemo(
            () => ({
              ...i.initializeConfig({
                locale: c,
                defaultTranslationValues: r,
                formats: s,
                getMessageFallback: l,
                messages: u,
                now: d,
                onError: h,
                timeZone: p,
              }),
              formatters: m,
              cache: f,
            }),
            [f, r, s, m, l, c, u, d, h, p]
          );
        return a.default.createElement(o.IntlContext.Provider, { value: g }, t);
      };
    },
    77392: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(87646),
        i = r(53398);
      r(49290),
        r(12115),
        r(21535),
        (t.IntlError = n.IntlError),
        (t.IntlErrorCode = n.IntlErrorCode),
        (t.createFormatter = n.createFormatter),
        (t._createCache = i.createCache),
        (t._createIntlFormatters = i.createIntlFormatters),
        (t.initializeConfig = i.initializeConfig),
        (t.createTranslator = function (e) {
          let {
            _cache: t = i.createCache(),
            _formatters: r = i.createIntlFormatters(t),
            getMessageFallback: o = i.defaultGetMessageFallback,
            messages: a,
            namespace: s,
            onError: l = i.defaultOnError,
            ...c
          } = e;
          return (function (e, t) {
            let { messages: r, namespace: i, ...o } = e;
            return (
              (r = r["!"]),
              (i = n.resolveNamespace(i, "!")),
              n.createBaseTranslator({ ...o, messages: r, namespace: i })
            );
          })(
            {
              ...c,
              onError: l,
              cache: t,
              formatters: r,
              getMessageFallback: o,
              messages: { "!": a },
              namespace: s ? "!.".concat(s) : "!",
            },
            0
          );
        });
    },
    87646: (e, t, r) => {
      "use strict";
      var n = r(49290),
        i = r(12115),
        o = r(53398),
        a = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n);
      function s(e, t, r) {
        var n;
        return (
          (t =
            "symbol" ==
            typeof (n = (function (e, t) {
              if ("object" != typeof e || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != typeof n) return n;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t ? String : Number)(e);
            })(t, "string"))
              ? n
              : n + "") in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      let l = (function (e) {
        return (
          (e.MISSING_MESSAGE = "MISSING_MESSAGE"),
          (e.MISSING_FORMAT = "MISSING_FORMAT"),
          (e.ENVIRONMENT_FALLBACK = "ENVIRONMENT_FALLBACK"),
          (e.INSUFFICIENT_PATH = "INSUFFICIENT_PATH"),
          (e.INVALID_MESSAGE = "INVALID_MESSAGE"),
          (e.INVALID_KEY = "INVALID_KEY"),
          (e.FORMATTING_ERROR = "FORMATTING_ERROR"),
          e
        );
      })({});
      class c extends Error {
        constructor(e, t) {
          let r = e;
          t && (r += ": " + t),
            super(r),
            s(this, "code", void 0),
            s(this, "originalMessage", void 0),
            (this.code = e),
            t && (this.originalMessage = t);
        }
      }
      function u(e, t) {
        return e
          ? Object.keys(e).reduce(
              (r, n) => ((r[n] = { timeZone: t, ...e[n] }), r),
              {}
            )
          : e;
      }
      function d(e, t, r, n) {
        let i = o.joinPath(n, r);
        if (!t) throw Error(i);
        let a = t;
        return (
          r.split(".").forEach((t) => {
            let r = a[t];
            if (null == t || null == r) throw Error(i + " (".concat(e, ")"));
            a = r;
          }),
          a
        );
      }
      let h = (365 / 12) * 86400,
        p = {
          second: 1,
          seconds: 1,
          minute: 60,
          minutes: 60,
          hour: 3600,
          hours: 3600,
          day: 86400,
          days: 86400,
          week: 604800,
          weeks: 604800,
          month: (365 / 12) * 86400,
          months: (365 / 12) * 86400,
          quarter: (365 / 12) * 259200,
          quarters: (365 / 12) * 259200,
          year: 31536e3,
          years: 31536e3,
        };
      (t.IntlError = c),
        (t.IntlErrorCode = l),
        (t.createBaseTranslator = function (e) {
          let t = (function (e, t, r) {
            let n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : o.defaultOnError;
            try {
              if (!t) throw Error(void 0);
              let n = r ? d(e, t, r) : t;
              if (!n) throw Error(r);
              return n;
            } catch (t) {
              let e = new c(l.MISSING_MESSAGE, t.message);
              return n(e), e;
            }
          })(e.locale, e.messages, e.namespace, e.onError);
          return (function (e) {
            let {
                cache: t,
                defaultTranslationValues: r,
                formats: n,
                formatters: s,
                getMessageFallback: h = o.defaultGetMessageFallback,
                locale: p,
                messagesOrError: f,
                namespace: m,
                onError: g,
                timeZone: y,
              } = e,
              b = f instanceof c;
            function w(e, t, r) {
              let n = new c(t, r);
              return g(n), h({ error: n, key: e, namespace: m });
            }
            function v(e, c, g) {
              let v, A;
              if (b) return h({ error: f, key: e, namespace: m });
              try {
                v = d(p, f, e, m);
              } catch (t) {
                return w(e, l.MISSING_MESSAGE, t.message);
              }
              if ("object" == typeof v) {
                let t;
                return w(
                  e,
                  Array.isArray(v) ? l.INVALID_MESSAGE : l.INSUFFICIENT_PATH,
                  t
                );
              }
              let E = (function (e, t) {
                if (t) return;
                let r = e.replace(/'([{}])/gi, "$1");
                return /<|{/.test(r) ? void 0 : r;
              })(v, c);
              if (E) return E;
              s.getMessageFormat ||
                (s.getMessageFormat = o.memoFn(function () {
                  return new a.default(
                    arguments.length <= 0 ? void 0 : arguments[0],
                    arguments.length <= 1 ? void 0 : arguments[1],
                    arguments.length <= 2 ? void 0 : arguments[2],
                    {
                      formatters: s,
                      ...(arguments.length <= 3 ? void 0 : arguments[3]),
                    }
                  );
                }, t.message));
              try {
                A = s.getMessageFormat(
                  v,
                  p,
                  (function (e, t) {
                    let r = t ? { ...e, dateTime: u(e.dateTime, t) } : e,
                      n = a.default.formats.date,
                      i = t ? u(n, t) : n,
                      o = a.default.formats.time,
                      s = t ? u(o, t) : o;
                    return {
                      ...r,
                      date: { ...i, ...r.dateTime },
                      time: { ...s, ...r.dateTime },
                    };
                  })({ ...n, ...g }, y),
                  {
                    formatters: {
                      ...s,
                      getDateTimeFormat: (e, t) =>
                        s.getDateTimeFormat(e, { timeZone: y, ...t }),
                    },
                  }
                );
              } catch (t) {
                return w(e, l.INVALID_MESSAGE, t.message);
              }
              try {
                let e = A.format(
                  (function (e) {
                    if (0 === Object.keys(e).length) return;
                    let t = {};
                    return (
                      Object.keys(e).forEach((r) => {
                        let n,
                          o = 0,
                          a = e[r];
                        (n =
                          "function" == typeof a
                            ? (e) => {
                                let t = a(e);
                                return i.isValidElement(t)
                                  ? i.cloneElement(t, { key: r + o++ })
                                  : t;
                              }
                            : a),
                          (t[r] = n);
                      }),
                      t
                    );
                  })({ ...r, ...c })
                );
                if (null == e) throw Error(void 0);
                return i.isValidElement(e) ||
                  Array.isArray(e) ||
                  "string" == typeof e
                  ? e
                  : String(e);
              } catch (t) {
                return w(e, l.FORMATTING_ERROR, t.message);
              }
            }
            function A(e, t, r) {
              let n = v(e, t, r);
              return "string" != typeof n ? w(e, l.INVALID_MESSAGE, void 0) : n;
            }
            return (
              (A.rich = v),
              (A.markup = (e, t, r) => {
                let n = v(e, t, r);
                if ("string" != typeof n) {
                  let t = new c(l.FORMATTING_ERROR, void 0);
                  return g(t), h({ error: t, key: e, namespace: m });
                }
                return n;
              }),
              (A.raw = (e) => {
                if (b) return h({ error: f, key: e, namespace: m });
                try {
                  return d(p, f, e, m);
                } catch (t) {
                  return w(e, l.MISSING_MESSAGE, t.message);
                }
              }),
              (A.has = (e) => {
                if (b) return !1;
                try {
                  return d(p, f, e, m), !0;
                } catch (e) {
                  return !1;
                }
              }),
              A
            );
          })({ ...e, messagesOrError: t });
        }),
        (t.createFormatter = function (e) {
          let {
            _cache: t = o.createCache(),
            _formatters: r = o.createIntlFormatters(t),
            formats: n,
            locale: i,
            now: a,
            onError: s = o.defaultOnError,
            timeZone: u,
          } = e;
          function d(e) {
            var t;
            return (
              (null !== (t = e) && void 0 !== t && t.timeZone) ||
                (u
                  ? (e = { ...e, timeZone: u })
                  : s(new c(l.ENVIRONMENT_FALLBACK, void 0))),
              e
            );
          }
          function f(e, t, r, n) {
            let i;
            try {
              i = (function (e, t) {
                let r;
                if ("string" == typeof t) {
                  if (!(r = null == e ? void 0 : e[t])) {
                    let e = new c(l.MISSING_FORMAT, void 0);
                    throw (s(e), e);
                  }
                } else r = t;
                return r;
              })(t, e);
            } catch (e) {
              return n();
            }
            try {
              return r(i);
            } catch (e) {
              return s(new c(l.FORMATTING_ERROR, e.message)), n();
            }
          }
          function m(e, t) {
            return f(
              t,
              null == n ? void 0 : n.dateTime,
              (t) => ((t = d(t)), r.getDateTimeFormat(i, t).format(e)),
              () => String(e)
            );
          }
          function g() {
            return a || (s(new c(l.ENVIRONMENT_FALLBACK, void 0)), new Date());
          }
          return {
            dateTime: m,
            number: function (e, t) {
              return f(
                t,
                null == n ? void 0 : n.number,
                (t) => r.getNumberFormat(i, t).format(e),
                () => String(e)
              );
            },
            relativeTime: function (e, t) {
              try {
                var n;
                let o, a;
                let s = {};
                t instanceof Date || "number" == typeof t
                  ? (o = new Date(t))
                  : t &&
                    ((o = null != t.now ? new Date(t.now) : g()),
                    (a = t.unit),
                    (s.style = t.style),
                    (s.numberingSystem = t.numberingSystem)),
                  o || (o = g());
                let l = (new Date(e).getTime() - o.getTime()) / 1e3;
                a ||
                  (a = (function (e) {
                    let t = Math.abs(e);
                    return t < 60
                      ? "second"
                      : t < 3600
                      ? "minute"
                      : t < 86400
                      ? "hour"
                      : t < 604800
                      ? "day"
                      : t < h
                      ? "week"
                      : t < 31536e3
                      ? "month"
                      : "year";
                  })(l)),
                  (s.numeric = "second" === a ? "auto" : "always");
                let c = ((n = a), Math.round(l / p[n]));
                return r.getRelativeTimeFormat(i, s).format(c, a);
              } catch (t) {
                return s(new c(l.FORMATTING_ERROR, t.message)), String(e);
              }
            },
            list: function (e, t) {
              let o = [],
                a = new Map(),
                s = 0;
              for (let t of e) {
                let e;
                "object" == typeof t
                  ? ((e = String(s)), a.set(e, t))
                  : (e = String(t)),
                  o.push(e),
                  s++;
              }
              return f(
                t,
                null == n ? void 0 : n.list,
                (e) => {
                  let t = r
                    .getListFormat(i, e)
                    .formatToParts(o)
                    .map((e) =>
                      "literal" === e.type ? e.value : a.get(e.value) || e.value
                    );
                  return a.size > 0 ? t : t.join("");
                },
                () => String(e)
              );
            },
            dateTimeRange: function (e, t, o) {
              return f(
                o,
                null == n ? void 0 : n.dateTime,
                (n) => (
                  (n = d(n)), r.getDateTimeFormat(i, n).formatRange(e, t)
                ),
                () => [m(e), m(t)].join(" – ")
              );
            },
          };
        }),
        (t.resolveNamespace = function (e, t) {
          return e === t ? void 0 : e.slice((t + ".").length);
        });
    },
    44281: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(87646),
        i = r(77392),
        o = r(53398),
        a = r(67878),
        s = r(7994),
        l = r(10310);
      r(49290),
        r(12115),
        r(21535),
        r(3351),
        (t.IntlError = n.IntlError),
        (t.IntlErrorCode = n.IntlErrorCode),
        (t.createFormatter = n.createFormatter),
        (t.createTranslator = i.createTranslator),
        (t._createCache = o.createCache),
        (t._createIntlFormatters = o.createIntlFormatters),
        (t.initializeConfig = o.initializeConfig),
        (t.IntlProvider = a.IntlProvider),
        (t.useFormatter = s.useFormatter),
        (t.useMessages = s.useMessages),
        (t.useNow = s.useNow),
        (t.useTimeZone = s.useTimeZone),
        (t.useTranslations = s.useTranslations),
        (t.useLocale = l.useLocale);
    },
    53398: (e, t, r) => {
      "use strict";
      var n = r(21535);
      function i() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return t.filter(Boolean).join(".");
      }
      function o(e) {
        return i(e.namespace, e.key);
      }
      function a(e) {
        console.error(e);
      }
      function s(e, t) {
        return n.memoize(e, {
          cache: {
            create: () => ({
              get: (e) => t[e],
              set(e, r) {
                t[e] = r;
              },
            }),
          },
          strategy: n.strategies.variadic,
        });
      }
      function l(e, t) {
        return s(function () {
          for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          return new e(...r);
        }, t);
      }
      (t.createCache = function () {
        return {
          dateTime: {},
          number: {},
          message: {},
          relativeTime: {},
          pluralRules: {},
          list: {},
          displayNames: {},
        };
      }),
        (t.createIntlFormatters = function (e) {
          return {
            getDateTimeFormat: l(Intl.DateTimeFormat, e.dateTime),
            getNumberFormat: l(Intl.NumberFormat, e.number),
            getPluralRules: l(Intl.PluralRules, e.pluralRules),
            getRelativeTimeFormat: l(Intl.RelativeTimeFormat, e.relativeTime),
            getListFormat: l(Intl.ListFormat, e.list),
            getDisplayNames: l(Intl.DisplayNames, e.displayNames),
          };
        }),
        (t.defaultGetMessageFallback = o),
        (t.defaultOnError = a),
        (t.initializeConfig = function (e) {
          let { getMessageFallback: t, messages: r, onError: n, ...i } = e;
          return {
            ...i,
            messages: r,
            onError: n || a,
            getMessageFallback: t || o,
          };
        }),
        (t.joinPath = i),
        (t.memoFn = s);
    },
    7994: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(67878),
        i = r(10310),
        o = r(12115),
        a = r(87646);
      r(53398), r(21535), r(3351), r(49290);
      let s = !1,
        l = "undefined" == typeof window;
      (t.IntlProvider = n.IntlProvider),
        (t.useLocale = i.useLocale),
        (t.useFormatter = function () {
          let {
            formats: e,
            formatters: t,
            locale: r,
            now: n,
            onError: s,
            timeZone: l,
          } = i.useIntlContext();
          return o.useMemo(
            () =>
              a.createFormatter({
                formats: e,
                locale: r,
                now: n,
                onError: s,
                timeZone: l,
                _formatters: t,
              }),
            [e, t, n, r, s, l]
          );
        }),
        (t.useMessages = function () {
          let e = i.useIntlContext();
          if (!e.messages) throw Error(void 0);
          return e.messages;
        }),
        (t.useNow = function (e) {
          let t = null == e ? void 0 : e.updateInterval,
            { now: r } = i.useIntlContext(),
            [n, a] = o.useState(r || new Date());
          return (
            o.useEffect(() => {
              if (!t) return;
              let e = setInterval(() => {
                a(new Date());
              }, t);
              return () => {
                clearInterval(e);
              };
            }, [r, t]),
            null == t && r ? r : n
          );
        }),
        (t.useTimeZone = function () {
          return i.useIntlContext().timeZone;
        }),
        (t.useTranslations = function (e) {
          return (function (e, t, r) {
            let {
                cache: n,
                defaultTranslationValues: c,
                formats: u,
                formatters: d,
                getMessageFallback: h,
                locale: p,
                onError: f,
                timeZone: m,
              } = i.useIntlContext(),
              g = e["!"],
              y = a.resolveNamespace(t, "!");
            return (
              m ||
                s ||
                !l ||
                ((s = !0),
                f(
                  new a.IntlError(a.IntlErrorCode.ENVIRONMENT_FALLBACK, void 0)
                )),
              o.useMemo(
                () =>
                  a.createBaseTranslator({
                    cache: n,
                    formatters: d,
                    getMessageFallback: h,
                    messages: g,
                    defaultTranslationValues: c,
                    namespace: y,
                    onError: f,
                    formats: u,
                    locale: p,
                    timeZone: m,
                  }),
                [n, d, h, g, c, y, f, u, p, m]
              )
            );
          })({ "!": i.useIntlContext().messages }, e ? "!.".concat(e) : "!", 0);
        });
    },
    66377: (e, t, r) => {
      "use strict";
      r.d(t, { m: () => a });
      var n = r(6476),
        i = r(12115),
        o = function (e) {
          var t = e.sideCar,
            r = (0, n.__rest)(e, ["sideCar"]);
          if (!t)
            throw Error(
              "Sidecar: please provide `sideCar` property to import the right car"
            );
          var o = t.read();
          if (!o) throw Error("Sidecar medium not found");
          return i.createElement(o, (0, n.__assign)({}, r));
        };
      function a(e, t) {
        return e.useMedium(t), o;
      }
      o.isSideCarExport = !0;
    },
    44577: (e, t, r) => {
      "use strict";
      r.d(t, { f: () => o });
      var n = r(6476);
      function i(e) {
        return e;
      }
      function o(e) {
        void 0 === e && (e = {});
        var t,
          r,
          o,
          a =
            (void 0 === t && (t = i),
            (r = []),
            (o = !1),
            {
              read: function () {
                if (o)
                  throw Error(
                    "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                  );
                return r.length ? r[r.length - 1] : null;
              },
              useMedium: function (e) {
                var n = t(e, o);
                return (
                  r.push(n),
                  function () {
                    r = r.filter(function (e) {
                      return e !== n;
                    });
                  }
                );
              },
              assignSyncMedium: function (e) {
                for (o = !0; r.length; ) {
                  var t = r;
                  (r = []), t.forEach(e);
                }
                r = {
                  push: function (t) {
                    return e(t);
                  },
                  filter: function () {
                    return r;
                  },
                };
              },
              assignMedium: function (e) {
                o = !0;
                var t = [];
                if (r.length) {
                  var n = r;
                  (r = []), n.forEach(e), (t = r);
                }
                var i = function () {
                    var r = t;
                    (t = []), r.forEach(e);
                  },
                  a = function () {
                    return Promise.resolve().then(i);
                  };
                a(),
                  (r = {
                    push: function (e) {
                      t.push(e), a();
                    },
                    filter: function (e) {
                      return (t = t.filter(e)), r;
                    },
                  });
              },
            });
        return (a.options = (0, n.__assign)({ async: !0, ssr: !1 }, e)), a;
      }
    },
    88068: (e, t, r) => {
      "use strict";
      r.d(t, { s: () => a, t: () => o });
      var n = r(12115);
      function i(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function o(...e) {
        return (t) => {
          let r = !1,
            n = e.map((e) => {
              let n = i(e, t);
              return r || "function" != typeof n || (r = !0), n;
            });
          if (r)
            return () => {
              for (let t = 0; t < n.length; t++) {
                let r = n[t];
                "function" == typeof r ? r() : i(e[t], null);
              }
            };
        };
      }
      function a(...e) {
        return n.useCallback(o(...e), e);
      }
    },
    12317: (e, t, r) => {
      "use strict";
      r.d(t, { DX: () => a });
      var n = r(12115),
        i = r(88068),
        o = r(95155),
        a = n.forwardRef((e, t) => {
          let { children: r, ...i } = e,
            a = n.Children.toArray(r),
            l = a.find(c);
          if (l) {
            let e = l.props.children,
              r = a.map((t) =>
                t !== l
                  ? t
                  : n.Children.count(e) > 1
                  ? n.Children.only(null)
                  : n.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, o.jsx)(s, {
              ...i,
              ref: t,
              children: n.isValidElement(e)
                ? n.cloneElement(e, void 0, r)
                : null,
            });
          }
          return (0, o.jsx)(s, { ...i, ref: t, children: r });
        });
      a.displayName = "Slot";
      var s = n.forwardRef((e, t) => {
        let { children: r, ...o } = e;
        if (n.isValidElement(r)) {
          let e = (function (e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              r = t && "isReactWarning" in t && t.isReactWarning;
            return r
              ? e.ref
              : (r =
                  (t = Object.getOwnPropertyDescriptor(e, "ref")?.get) &&
                  "isReactWarning" in t &&
                  t.isReactWarning)
              ? e.props.ref
              : e.props.ref || e.ref;
          })(r);
          return n.cloneElement(r, {
            ...(function (e, t) {
              let r = { ...t };
              for (let n in t) {
                let i = e[n],
                  o = t[n];
                /^on[A-Z]/.test(n)
                  ? i && o
                    ? (r[n] = (...e) => {
                        o(...e), i(...e);
                      })
                    : i && (r[n] = i)
                  : "style" === n
                  ? (r[n] = { ...i, ...o })
                  : "className" === n &&
                    (r[n] = [i, o].filter(Boolean).join(" "));
              }
              return { ...e, ...r };
            })(o, r.props),
            ref: t ? (0, i.t)(t, e) : e,
          });
        }
        return n.Children.count(r) > 1 ? n.Children.only(null) : null;
      });
      s.displayName = "SlotClone";
      var l = ({ children: e }) => (0, o.jsx)(o.Fragment, { children: e });
      function c(e) {
        return n.isValidElement(e) && e.type === l;
      }
    },
    150: (e, t, r) => {
      "use strict";
      r.d(t, { _: () => a });
      var n = r(36063),
        i = {
          blue: { accentColor: "#0E76FD", accentColorForeground: "#FFF" },
          green: { accentColor: "#1DB847", accentColorForeground: "#FFF" },
          orange: { accentColor: "#FF801F", accentColorForeground: "#FFF" },
          pink: { accentColor: "#FF5CA0", accentColorForeground: "#FFF" },
          purple: { accentColor: "#5F5AFA", accentColorForeground: "#FFF" },
          red: { accentColor: "#FA423C", accentColorForeground: "#FFF" },
        },
        o = i.blue,
        a = function () {
          let {
            accentColor: e = o.accentColor,
            accentColorForeground: t = o.accentColorForeground,
            ...r
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          return {
            ...(0, n.$)(r),
            colors: {
              accentColor: e,
              accentColorForeground: t,
              actionButtonBorder: "rgba(0, 0, 0, 0.04)",
              actionButtonBorderMobile: "rgba(0, 0, 0, 0.06)",
              actionButtonSecondaryBackground: "rgba(0, 0, 0, 0.06)",
              closeButton: "rgba(60, 66, 66, 0.8)",
              closeButtonBackground: "rgba(0, 0, 0, 0.06)",
              connectButtonBackground: "#FFF",
              connectButtonBackgroundError: "#FF494A",
              connectButtonInnerBackground:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06))",
              connectButtonText: "#25292E",
              connectButtonTextError: "#FFF",
              connectionIndicator: "#30E000",
              downloadBottomCardBackground:
                "linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF",
              downloadTopCardBackground:
                "linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF",
              error: "#FF494A",
              generalBorder: "rgba(0, 0, 0, 0.06)",
              generalBorderDim: "rgba(0, 0, 0, 0.03)",
              menuItemBackground: "rgba(60, 66, 66, 0.1)",
              modalBackdrop: "rgba(0, 0, 0, 0.3)",
              modalBackground: "#FFF",
              modalBorder: "transparent",
              modalText: "#25292E",
              modalTextDim: "rgba(60, 66, 66, 0.3)",
              modalTextSecondary: "rgba(60, 66, 66, 0.6)",
              profileAction: "#FFF",
              profileActionHover: "rgba(255, 255, 255, 0.5)",
              profileForeground: "rgba(60, 66, 66, 0.06)",
              selectedOptionBorder: "rgba(60, 66, 66, 0.1)",
              standby: "#FFD641",
            },
            shadows: {
              connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
              profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
              selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
              selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.12)",
              walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)",
            },
          };
        };
      a.accentColors = i;
    },
    36063: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => s });
      var n =
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        i = {
          rounded: 'SFRounded, ui-rounded, "SF Pro Rounded", '.concat(n),
          system: n,
        },
        o = {
          large: {
            actionButton: "9999px",
            connectButton: "12px",
            modal: "24px",
            modalMobile: "28px",
          },
          medium: {
            actionButton: "10px",
            connectButton: "8px",
            modal: "16px",
            modalMobile: "18px",
          },
          none: {
            actionButton: "0px",
            connectButton: "0px",
            modal: "0px",
            modalMobile: "0px",
          },
          small: {
            actionButton: "4px",
            connectButton: "4px",
            modal: "8px",
            modalMobile: "8px",
          },
        },
        a = {
          large: { modalOverlay: "blur(20px)" },
          none: { modalOverlay: "blur(0px)" },
          small: { modalOverlay: "blur(4px)" },
        },
        s = (e) => {
          let {
            borderRadius: t = "large",
            fontStack: r = "rounded",
            overlayBlur: n = "none",
          } = e;
          return {
            blurs: { modalOverlay: a[n].modalOverlay },
            fonts: { body: i[r] },
            radii: {
              actionButton: o[t].actionButton,
              connectButton: o[t].connectButton,
              menuButton: o[t].connectButton,
              modal: o[t].modal,
              modalMobile: o[t].modalMobile,
            },
          };
        };
    },
    27341: (e, t, r) => {
      "use strict";
      r.d(t, { n: () => n });
      var n =
        '{\n  "connect_wallet": {\n    "label": "Connect Wallet",\n    "wrong_network": {\n      "label": "Wrong network"\n    }\n  },\n\n  "intro": {\n    "title": "What is a Wallet?",\n    "description": "A wallet is used to send, receive, store, and display digital assets. It\'s also a new way to log in, without needing to create new accounts and passwords on every website.",\n    "digital_asset": {\n      "title": "A Home for your Digital Assets",\n      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."\n    },\n    "login": {\n      "title": "A New Way to Log In",\n      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."\n    },\n    "get": {\n      "label": "Get a Wallet"\n    },\n    "learn_more": {\n      "label": "Learn More"\n    }\n  },\n\n  "sign_in": {\n    "label": "Verify your account",\n    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",\n    "message": {\n      "send": "Sign message",\n      "preparing": "Preparing message...",\n      "cancel": "Cancel",\n      "preparing_error": "Error preparing message, please retry!"\n    },\n    "signature": {\n      "waiting": "Waiting for signature...",\n      "verifying": "Verifying signature...",\n      "signing_error": "Error signing message, please retry!",\n      "verifying_error": "Error verifying signature, please retry!",\n      "oops_error": "Oops, something went wrong!"\n    }\n  },\n\n  "connect": {\n    "label": "Connect",\n    "title": "Connect a Wallet",\n    "new_to_ethereum": {\n      "description": "New to Ethereum wallets?",\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "learn_more": {\n      "label": "Learn more"\n    },\n    "recent": "Recent",\n    "status": {\n      "opening": "Opening %{wallet}...",\n      "connecting": "Connecting",\n      "connect_mobile": "Continue in %{wallet}",\n      "not_installed": "%{wallet} is not installed",\n      "not_available": "%{wallet} is not available",\n      "confirm": "Confirm connection in the extension",\n      "confirm_mobile": "Accept connection request in the wallet"\n    },\n    "secondary_action": {\n      "get": {\n        "description": "Don\'t have %{wallet}?",\n        "label": "GET"\n      },\n      "install": {\n        "label": "INSTALL"\n      },\n      "retry": {\n        "label": "RETRY"\n      }\n    },\n    "walletconnect": {\n      "description": {\n        "full": "Need the official WalletConnect modal?",\n        "compact": "Need the WalletConnect modal?"\n      },\n      "open": {\n        "label": "OPEN"\n      }\n    }\n  },\n\n  "connect_scan": {\n    "title": "Scan with %{wallet}",\n    "fallback_title": "Scan with your phone"\n  },\n\n  "connector_group": {\n    "installed": "Installed",\n    "recommended": "Recommended",\n    "other": "Other",\n    "popular": "Popular",\n    "more": "More",\n    "others": "Others"\n  },\n\n  "get": {\n    "title": "Get a Wallet",\n    "action": {\n      "label": "GET"\n    },\n    "mobile": {\n      "description": "Mobile Wallet"\n    },\n    "extension": {\n      "description": "Browser Extension"\n    },\n    "mobile_and_extension": {\n      "description": "Mobile Wallet and Extension"\n    },\n    "mobile_and_desktop": {\n      "description": "Mobile and Desktop Wallet"\n    },\n    "looking_for": {\n      "title": "Not what you\'re looking for?",\n      "mobile": {\n        "description": "Select a wallet on the main screen to get started with a different wallet provider."\n      },\n      "desktop": {\n        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",\n        "wide_description": "Select a wallet on the left to get started with a different wallet provider."\n      }\n    }\n  },\n\n  "get_options": {\n    "title": "Get started with %{wallet}",\n    "short_title": "Get %{wallet}",\n    "mobile": {\n      "title": "%{wallet} for Mobile",\n      "description": "Use the mobile wallet to explore the world of Ethereum.",\n      "download": {\n        "label": "Get the app"\n      }\n    },\n    "extension": {\n      "title": "%{wallet} for %{browser}",\n      "description": "Access your wallet right from your favorite web browser.",\n      "download": {\n        "label": "Add to %{browser}"\n      }\n    },\n    "desktop": {\n      "title": "%{wallet} for %{platform}",\n      "description": "Access your wallet natively from your powerful desktop.",\n      "download": {\n        "label": "Add to %{platform}"\n      }\n    }\n  },\n\n  "get_mobile": {\n    "title": "Install %{wallet}",\n    "description": "Scan with your phone to download on iOS or Android",\n    "continue": {\n      "label": "Continue"\n    }\n  },\n\n  "get_instructions": {\n    "mobile": {\n      "connect": {\n        "label": "Connect"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "extension": {\n      "refresh": {\n        "label": "Refresh"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    },\n    "desktop": {\n      "connect": {\n        "label": "Connect"\n      },\n      "learn_more": {\n        "label": "Learn More"\n      }\n    }\n  },\n\n  "chains": {\n    "title": "Switch Networks",\n    "wrong_network": "Wrong network detected, switch or disconnect to continue.",\n    "confirm": "Confirm in Wallet",\n    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",\n    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",\n    "disconnect": "Disconnect",\n    "connected": "Connected"\n  },\n\n  "profile": {\n    "disconnect": {\n      "label": "Disconnect"\n    },\n    "copy_address": {\n      "label": "Copy Address",\n      "copied": "Copied!"\n    },\n    "explorer": {\n      "label": "View more on explorer"\n    },\n    "transactions": {\n      "description": "%{appName} transactions will appear here...",\n      "description_fallback": "Your transactions will appear here...",\n      "recent": {\n        "title": "Recent Transactions"\n      },\n      "clear": {\n        "label": "Clear All"\n      }\n    }\n  },\n\n  "wallet_connectors": {\n    "argent": {\n      "qr_code": {\n        "step1": {\n          "description": "Put Argent on your home screen for faster access to your wallet.",\n          "title": "Open the Argent app"\n        },\n        "step2": {\n          "description": "Create a wallet and username, or import an existing wallet.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the Scan QR button"\n        }\n      }\n    },\n\n    "berasig": {\n      "extension": {\n        "step1": {\n          "title": "Install the BeraSig extension",\n          "description": "We recommend pinning BeraSig to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "best": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Best Wallet app",\n          "description": "Add Best Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "bifrost": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",\n          "title": "Open the Bifrost Wallet app"\n        },\n        "step2": {\n          "description": "Create or import a wallet using your recovery phrase.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      }\n    },\n\n    "bitget": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",\n          "title": "Open the Bitget Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Bitget Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "bitski": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",\n          "title": "Install the Bitski extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "bitverse": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Bitverse Wallet app",\n          "description": "Add Bitverse Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "bloom": {\n      "desktop": {\n        "step1": {\n          "title": "Open the Bloom Wallet app",\n          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "description": "Create or import a wallet using your recovery phrase.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",\n          "title": "Click on Connect"\n        }\n      }\n    },\n\n    "bybit": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Bybit on your home screen for faster access to your wallet.",\n          "title": "Open the Bybit app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "Click at the top right of your browser and pin Bybit Wallet for easy access.",\n          "title": "Install the Bybit Wallet extension"\n        },\n        "step2": {\n          "description": "Create a new wallet or import an existing one.",\n          "title": "Create or Import a wallet"\n        },\n        "step3": {\n          "description": "Once you set up Bybit Wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "binance": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Binance on your home screen for faster access to your wallet.",\n          "title": "Open the Binance app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      }\n    },\n\n    "coin98": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",\n          "title": "Open the Coin98 Wallet app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",\n          "title": "Install the Coin98 Wallet extension"\n        },\n        "step2": {\n          "description": "Create a new wallet or import an existing one.",\n          "title": "Create or Import a wallet"\n        },\n        "step3": {\n          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "coinbase": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",\n          "title": "Open the Coinbase Wallet app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using the cloud backup feature.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Coinbase Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "compass": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Compass Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Compass Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "core": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Core on your home screen for faster access to your wallet.",\n          "title": "Open the Core app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",\n          "title": "Install the Core extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "fox": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting FoxWallet on your home screen for quicker access.",\n          "title": "Open the FoxWallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      }\n    },\n\n    "frontier": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",\n          "title": "Open the Frontier Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Frontier Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "im_token": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the imToken app",\n          "description": "Put imToken app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "iopay": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting ioPay on your home screen for faster access to your wallet.",\n          "title": "Open the ioPay app"\n        },\n        "step2": {\n          "description": "You can easily backup your wallet using our backup feature on your phone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the WalletConnect button"\n        }\n      }\n    },\n\n    "kaikas": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Kaikas to your taskbar for quicker access to your wallet.",\n          "title": "Install the Kaikas extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kaikas app",\n          "description": "Put Kaikas app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kaia": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Kaia to your taskbar for quicker access to your wallet.",\n          "title": "Install the Kaia extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kaia app",\n          "description": "Put Kaia app on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap Scanner Icon in top right corner",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kraken": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kraken Wallet app",\n          "description": "Add Kraken Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "kresus": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Kresus Wallet app",\n          "description": "Add Kresus Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "magicEden": {\n      "extension": {\n        "step1": {\n          "title": "Install the Magic Eden extension",\n          "description": "We recommend pinning Magic Eden to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "metamask": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the MetaMask app",\n          "description": "We recommend putting MetaMask on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the MetaMask extension",\n          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "nestwallet": {\n      "extension": {\n        "step1": {\n          "title": "Install the NestWallet extension",\n          "description": "We recommend pinning NestWallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "okx": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the OKX Wallet app",\n          "description": "We recommend putting OKX Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the OKX Wallet extension",\n          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "omni": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Omni app",\n          "description": "Add Omni to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "1inch": {\n      "qr_code": {\n        "step1": {\n          "description": "Put 1inch Wallet on your home screen for faster access to your wallet.",\n          "title": "Open the 1inch Wallet app"\n        },\n        "step2": {\n          "description": "Create a wallet and username, or import an existing wallet.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the Scan QR button"\n        }\n      }\n    },\n\n    "token_pocket": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the TokenPocket app",\n          "description": "We recommend putting TokenPocket on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the TokenPocket extension",\n          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "trust": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Trust Wallet app",\n          "description": "Put Trust Wallet on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the Trust Wallet extension",\n          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."\n        },\n        "step2": {\n          "title": "Create or Import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "uniswap": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Uniswap app",\n          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "zerion": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Zerion app",\n          "description": "We recommend putting Zerion on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "title": "Install the Zerion extension",\n          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "rainbow": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Rainbow app",\n          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "You can easily backup your wallet using our backup feature on your phone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "enkrypt": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Enkrypt Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "frame": {\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",\n          "title": "Install Frame & the companion extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "one_key": {\n      "extension": {\n        "step1": {\n          "title": "Install the OneKey Wallet extension",\n          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "paraswap": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the ParaSwap app",\n          "description": "Add ParaSwap Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "phantom": {\n      "extension": {\n        "step1": {\n          "title": "Install the Phantom extension",\n          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "rabby": {\n      "extension": {\n        "step1": {\n          "title": "Install the Rabby extension",\n          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "ronin": {\n      "qr_code": {\n        "step1": {\n          "description": "We recommend putting Ronin Wallet on your home screen for quicker access.",\n          "title": "Open the Ronin Wallet app"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",\n          "title": "Tap the scan button"\n        }\n      },\n\n      "extension": {\n        "step1": {\n          "description": "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",\n          "title": "Install the Ronin Wallet extension"\n        },\n        "step2": {\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",\n          "title": "Create or Import a Wallet"\n        },\n        "step3": {\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",\n          "title": "Refresh your browser"\n        }\n      }\n    },\n\n    "ramper": {\n      "extension": {\n        "step1": {\n          "title": "Install the Ramper extension",\n          "description": "We recommend pinning Ramper to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "safeheron": {\n      "extension": {\n        "step1": {\n          "title": "Install the Core extension",\n          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "taho": {\n      "extension": {\n        "step1": {\n          "title": "Install the Taho extension",\n          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "wigwam": {\n      "extension": {\n        "step1": {\n          "title": "Install the Wigwam extension",\n          "description": "We recommend pinning Wigwam to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "talisman": {\n      "extension": {\n        "step1": {\n          "title": "Install the Talisman extension",\n          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import an Ethereum Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "xdefi": {\n      "extension": {\n        "step1": {\n          "title": "Install the XDEFI Wallet extension",\n          "description": "We recommend pinning XDEFI Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "zeal": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Zeal app",\n          "description": "Add Zeal Wallet to your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the QR icon and scan",\n          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."\n        }\n      },\n      "extension": {\n        "step1": {\n          "title": "Install the Zeal extension",\n          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "safepal": {\n      "extension": {\n        "step1": {\n          "title": "Install the SafePal Wallet extension",\n          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."\n        },\n        "step2": {\n          "title": "Create or Import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the SafePal Wallet app",\n          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "desig": {\n      "extension": {\n        "step1": {\n          "title": "Install the Desig extension",\n          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."\n        },\n        "step2": {\n          "title": "Create a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      }\n    },\n\n    "subwallet": {\n      "extension": {\n        "step1": {\n          "title": "Install the SubWallet extension",\n          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the SubWallet app",\n          "description": "We recommend putting SubWallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "clv": {\n      "extension": {\n        "step1": {\n          "title": "Install the CLV Wallet extension",\n          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Refresh your browser",\n          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the CLV Wallet app",\n          "description": "We recommend putting CLV Wallet on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or Import a Wallet",\n          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "okto": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Okto app",\n          "description": "Add Okto to your home screen for quick access"\n        },\n        "step2": {\n          "title": "Create an MPC Wallet",\n          "description": "Create an account and generate a wallet"\n        },\n        "step3": {\n          "title": "Tap WalletConnect in Settings",\n          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."\n        }\n      }\n    },\n\n    "ledger": {\n      "desktop": {\n        "step1": {\n          "title": "Open the Ledger Live app",\n          "description": "We recommend putting Ledger Live on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Set up your Ledger",\n          "description": "Set up a new Ledger or connect to an existing one."\n        },\n        "step3": {\n          "title": "Connect",\n          "description": "A connection prompt will appear for you to connect your wallet."\n        }\n      },\n      "qr_code": {\n        "step1": {\n          "title": "Open the Ledger Live app",\n          "description": "We recommend putting Ledger Live on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Set up your Ledger",\n          "description": "You can either sync with the desktop app or connect your Ledger."\n        },\n        "step3": {\n          "title": "Scan the code",\n          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    },\n\n    "valora": {\n      "qr_code": {\n        "step1": {\n          "title": "Open the Valora app",\n          "description": "We recommend putting Valora on your home screen for quicker access."\n        },\n        "step2": {\n          "title": "Create or import a wallet",\n          "description": "Create a new wallet or import an existing one."\n        },\n        "step3": {\n          "title": "Tap the scan button",\n          "description": "After you scan, a connection prompt will appear for you to connect your wallet."\n        }\n      }\n    }\n  }\n}\n';
    },
    23576: (e, t, r) => {
      "use strict";
      r.d(t, { w: () => a });
      var n = r(43415),
        i = r(2818),
        o = r(2818);
      function a(e) {
        let t = "object" == typeof e.client ? e.client : {},
          r = "object" == typeof e.server ? e.server : {},
          a = e.shared,
          s = e.runtimeEnv
            ? e.runtimeEnv
            : { ...o.env, ...e.experimental__runtimeEnv };
        return (function (e) {
          let t = e.runtimeEnvStrict ?? e.runtimeEnv ?? i.env;
          if (e.emptyStringAsUndefined)
            for (let [e, r] of Object.entries(t)) "" === r && delete t[e];
          if (e.skipValidation) return t;
          let r = "object" == typeof e.client ? e.client : {},
            o = "object" == typeof e.server ? e.server : {},
            a = "object" == typeof e.shared ? e.shared : {},
            s = (0, n.Ik)(r),
            l = (0, n.Ik)(o),
            c = (0, n.Ik)(a),
            u =
              e.isServer ?? ("undefined" == typeof window || "Deno" in window),
            d = s.merge(c),
            h = l.merge(c).merge(s),
            p = u ? h.safeParse(t) : d.safeParse(t),
            f =
              e.onValidationError ??
              ((e) => {
                throw (
                  (console.error(
                    "❌ Invalid environment variables:",
                    e.flatten().fieldErrors
                  ),
                  Error("Invalid environment variables"))
                );
              }),
            m =
              e.onInvalidAccess ??
              ((e) => {
                throw Error(
                  "❌ Attempted to access a server-side environment variable on the client"
                );
              });
          if (!1 === p.success) return f(p.error);
          let g = (t) =>
              !e.clientPrefix ||
              (!t.startsWith(e.clientPrefix) && !(t in c.shape)),
            y = (e) => u || !g(e),
            b = (e) => "__esModule" === e || "$$typeof" === e,
            w = (e.extends ?? []).reduce((e, t) => Object.assign(e, t), {});
          return new Proxy(Object.assign(p.data, w), {
            get(e, t) {
              if ("string" == typeof t && !b(t))
                return y(t) ? Reflect.get(e, t) : m(t);
            },
          });
        })({
          ...e,
          shared: a,
          client: t,
          server: r,
          clientPrefix: "NEXT_PUBLIC_",
          runtimeEnv: s,
        });
      }
    },
    79876: (e, t, r) => {
      "use strict";
      function n(e) {
        return e;
      }
      function i(e) {
        return "success" === e.state.status;
      }
      function o(e, t, r) {
        if ("object" != typeof t || null === t) return;
        let i = e.getMutationCache(),
          o = e.getQueryCache(),
          a =
            r?.defaultOptions?.deserializeData ??
            e.getDefaultOptions().hydrate?.deserializeData ??
            n,
          s = t.mutations || [],
          l = t.queries || [];
        s.forEach(({ state: t, ...n }) => {
          i.build(
            e,
            {
              ...e.getDefaultOptions().hydrate?.mutations,
              ...r?.defaultOptions?.mutations,
              ...n,
            },
            t
          );
        }),
          l.forEach(
            ({ queryKey: t, state: n, queryHash: i, meta: s, promise: l }) => {
              let c = o.get(i),
                u = void 0 === n.data ? n.data : a(n.data);
              if (c) {
                if (c.state.dataUpdatedAt < n.dataUpdatedAt) {
                  let { fetchStatus: e, ...t } = n;
                  c.setState({ ...t, data: u });
                }
              } else
                c = o.build(
                  e,
                  {
                    ...e.getDefaultOptions().hydrate?.queries,
                    ...r?.defaultOptions?.queries,
                    queryKey: t,
                    queryHash: i,
                    meta: s,
                  },
                  { ...n, data: u, fetchStatus: "idle" }
                );
              if (l) {
                let e = Promise.resolve(l).then(a);
                c.fetch(void 0, { initialPromise: e });
              }
            }
          );
      }
      r.d(t, { Qv: () => o, XS: () => i });
    },
    13223: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => f });
      var n = r(84403),
        i = r(47702),
        o = r(15586),
        a = r(99323),
        s = class extends a.Q {
          constructor(e = {}) {
            super(), (this.config = e), (this.#e = new Map());
          }
          #e;
          build(e, t, r) {
            let o = t.queryKey,
              a = t.queryHash ?? (0, n.F$)(o, t),
              s = this.get(a);
            return (
              s ||
                ((s = new i.X({
                  cache: this,
                  queryKey: o,
                  queryHash: a,
                  options: e.defaultQueryOptions(t),
                  state: r,
                  defaultOptions: e.getQueryDefaults(o),
                })),
                this.add(s)),
              s
            );
          }
          add(e) {
            this.#e.has(e.queryHash) ||
              (this.#e.set(e.queryHash, e),
              this.notify({ type: "added", query: e }));
          }
          remove(e) {
            let t = this.#e.get(e.queryHash);
            t &&
              (e.destroy(),
              t === e && this.#e.delete(e.queryHash),
              this.notify({ type: "removed", query: e }));
          }
          clear() {
            o.j.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          get(e) {
            return this.#e.get(e);
          }
          getAll() {
            return [...this.#e.values()];
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, n.MK)(t, e));
          }
          findAll(e = {}) {
            let t = this.getAll();
            return Object.keys(e).length > 0
              ? t.filter((t) => (0, n.MK)(e, t))
              : t;
          }
          notify(e) {
            o.j.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          onFocus() {
            o.j.batch(() => {
              this.getAll().forEach((e) => {
                e.onFocus();
              });
            });
          }
          onOnline() {
            o.j.batch(() => {
              this.getAll().forEach((e) => {
                e.onOnline();
              });
            });
          }
        },
        l = r(1049),
        c = class extends a.Q {
          constructor(e = {}) {
            super(),
              (this.config = e),
              (this.#t = new Set()),
              (this.#r = new Map()),
              (this.#n = 0);
          }
          #t;
          #r;
          #n;
          build(e, t, r) {
            let n = new l.s({
              mutationCache: this,
              mutationId: ++this.#n,
              options: e.defaultMutationOptions(t),
              state: r,
            });
            return this.add(n), n;
          }
          add(e) {
            this.#t.add(e);
            let t = u(e);
            if ("string" == typeof t) {
              let r = this.#r.get(t);
              r ? r.push(e) : this.#r.set(t, [e]);
            }
            this.notify({ type: "added", mutation: e });
          }
          remove(e) {
            if (this.#t.delete(e)) {
              let t = u(e);
              if ("string" == typeof t) {
                let r = this.#r.get(t);
                if (r) {
                  if (r.length > 1) {
                    let t = r.indexOf(e);
                    -1 !== t && r.splice(t, 1);
                  } else r[0] === e && this.#r.delete(t);
                }
              }
            }
            this.notify({ type: "removed", mutation: e });
          }
          canRun(e) {
            let t = u(e);
            if ("string" != typeof t) return !0;
            {
              let r = this.#r.get(t),
                n = r?.find((e) => "pending" === e.state.status);
              return !n || n === e;
            }
          }
          runNext(e) {
            let t = u(e);
            if ("string" != typeof t) return Promise.resolve();
            {
              let r = this.#r.get(t)?.find((t) => t !== e && t.state.isPaused);
              return r?.continue() ?? Promise.resolve();
            }
          }
          clear() {
            o.j.batch(() => {
              this.#t.forEach((e) => {
                this.notify({ type: "removed", mutation: e });
              }),
                this.#t.clear(),
                this.#r.clear();
            });
          }
          getAll() {
            return Array.from(this.#t);
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, n.nJ)(t, e));
          }
          findAll(e = {}) {
            return this.getAll().filter((t) => (0, n.nJ)(e, t));
          }
          notify(e) {
            o.j.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          resumePausedMutations() {
            let e = this.getAll().filter((e) => e.state.isPaused);
            return o.j.batch(() =>
              Promise.all(e.map((e) => e.continue().catch(n.lQ)))
            );
          }
        };
      function u(e) {
        return e.options.scope?.id;
      }
      var d = r(34017),
        h = r(38248),
        p = r(5020),
        f = class {
          #i;
          #o;
          #a;
          #s;
          #l;
          #c;
          #u;
          #d;
          constructor(e = {}) {
            (this.#i = e.queryCache || new s()),
              (this.#o = e.mutationCache || new c()),
              (this.#a = e.defaultOptions || {}),
              (this.#s = new Map()),
              (this.#l = new Map()),
              (this.#c = 0);
          }
          mount() {
            this.#c++,
              1 === this.#c &&
                ((this.#u = d.m.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#i.onFocus());
                })),
                (this.#d = h.t.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#i.onOnline());
                })));
          }
          unmount() {
            this.#c--,
              0 === this.#c &&
                (this.#u?.(),
                (this.#u = void 0),
                this.#d?.(),
                (this.#d = void 0));
          }
          isFetching(e) {
            return this.#i.findAll({ ...e, fetchStatus: "fetching" }).length;
          }
          isMutating(e) {
            return this.#o.findAll({ ...e, status: "pending" }).length;
          }
          getQueryData(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#i.get(t.queryHash)?.state.data;
          }
          ensureQueryData(e) {
            let t = this.defaultQueryOptions(e),
              r = this.#i.build(this, t),
              i = r.state.data;
            return void 0 === i
              ? this.fetchQuery(e)
              : (e.revalidateIfStale &&
                  r.isStaleByTime((0, n.d2)(t.staleTime, r)) &&
                  this.prefetchQuery(t),
                Promise.resolve(i));
          }
          getQueriesData(e) {
            return this.#i
              .findAll(e)
              .map(({ queryKey: e, state: t }) => [e, t.data]);
          }
          setQueryData(e, t, r) {
            let i = this.defaultQueryOptions({ queryKey: e }),
              o = this.#i.get(i.queryHash),
              a = o?.state.data,
              s = (0, n.Zw)(t, a);
            if (void 0 !== s)
              return this.#i.build(this, i).setData(s, { ...r, manual: !0 });
          }
          setQueriesData(e, t, r) {
            return o.j.batch(() =>
              this.#i
                .findAll(e)
                .map(({ queryKey: e }) => [e, this.setQueryData(e, t, r)])
            );
          }
          getQueryState(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#i.get(t.queryHash)?.state;
          }
          removeQueries(e) {
            let t = this.#i;
            o.j.batch(() => {
              t.findAll(e).forEach((e) => {
                t.remove(e);
              });
            });
          }
          resetQueries(e, t) {
            let r = this.#i,
              n = { type: "active", ...e };
            return o.j.batch(
              () => (
                r.findAll(e).forEach((e) => {
                  e.reset();
                }),
                this.refetchQueries(n, t)
              )
            );
          }
          cancelQueries(e, t = {}) {
            let r = { revert: !0, ...t };
            return Promise.all(
              o.j.batch(() => this.#i.findAll(e).map((e) => e.cancel(r)))
            )
              .then(n.lQ)
              .catch(n.lQ);
          }
          invalidateQueries(e, t = {}) {
            return o.j.batch(() => {
              if (
                (this.#i.findAll(e).forEach((e) => {
                  e.invalidate();
                }),
                e?.refetchType === "none")
              )
                return Promise.resolve();
              let r = { ...e, type: e?.refetchType ?? e?.type ?? "active" };
              return this.refetchQueries(r, t);
            });
          }
          refetchQueries(e, t = {}) {
            let r = { ...t, cancelRefetch: t.cancelRefetch ?? !0 };
            return Promise.all(
              o.j.batch(() =>
                this.#i
                  .findAll(e)
                  .filter((e) => !e.isDisabled())
                  .map((e) => {
                    let t = e.fetch(void 0, r);
                    return (
                      r.throwOnError || (t = t.catch(n.lQ)),
                      "paused" === e.state.fetchStatus ? Promise.resolve() : t
                    );
                  })
              )
            ).then(n.lQ);
          }
          fetchQuery(e) {
            let t = this.defaultQueryOptions(e);
            void 0 === t.retry && (t.retry = !1);
            let r = this.#i.build(this, t);
            return r.isStaleByTime((0, n.d2)(t.staleTime, r))
              ? r.fetch(t)
              : Promise.resolve(r.state.data);
          }
          prefetchQuery(e) {
            return this.fetchQuery(e).then(n.lQ).catch(n.lQ);
          }
          fetchInfiniteQuery(e) {
            return (e.behavior = (0, p.PL)(e.pages)), this.fetchQuery(e);
          }
          prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(n.lQ).catch(n.lQ);
          }
          ensureInfiniteQueryData(e) {
            return (e.behavior = (0, p.PL)(e.pages)), this.ensureQueryData(e);
          }
          resumePausedMutations() {
            return h.t.isOnline()
              ? this.#o.resumePausedMutations()
              : Promise.resolve();
          }
          getQueryCache() {
            return this.#i;
          }
          getMutationCache() {
            return this.#o;
          }
          getDefaultOptions() {
            return this.#a;
          }
          setDefaultOptions(e) {
            this.#a = e;
          }
          setQueryDefaults(e, t) {
            this.#s.set((0, n.EN)(e), { queryKey: e, defaultOptions: t });
          }
          getQueryDefaults(e) {
            let t = [...this.#s.values()],
              r = {};
            return (
              t.forEach((t) => {
                (0, n.Cp)(e, t.queryKey) && Object.assign(r, t.defaultOptions);
              }),
              r
            );
          }
          setMutationDefaults(e, t) {
            this.#l.set((0, n.EN)(e), { mutationKey: e, defaultOptions: t });
          }
          getMutationDefaults(e) {
            let t = [...this.#l.values()],
              r = {};
            return (
              t.forEach((t) => {
                (0, n.Cp)(e, t.mutationKey) &&
                  (r = { ...r, ...t.defaultOptions });
              }),
              r
            );
          }
          defaultQueryOptions(e) {
            if (e._defaulted) return e;
            let t = {
              ...this.#a.queries,
              ...this.getQueryDefaults(e.queryKey),
              ...e,
              _defaulted: !0,
            };
            return (
              t.queryHash || (t.queryHash = (0, n.F$)(t.queryKey, t)),
              void 0 === t.refetchOnReconnect &&
                (t.refetchOnReconnect = "always" !== t.networkMode),
              void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
              !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
              t.queryFn === n.hT && (t.enabled = !1),
              t
            );
          }
          defaultMutationOptions(e) {
            return e?._defaulted
              ? e
              : {
                  ...this.#a.mutations,
                  ...(e?.mutationKey &&
                    this.getMutationDefaults(e.mutationKey)),
                  ...e,
                  _defaulted: !0,
                };
          }
          clear() {
            this.#i.clear(), this.#o.clear();
          }
        };
    },
    57695: (e, t, r) => {
      "use strict";
      r.d(t, { useQueries: () => g });
      var n = r(12115),
        i = r(15586),
        o = r(24724),
        a = r(99323),
        s = r(84403);
      function l(e, t) {
        return e.filter((e) => !t.includes(e));
      }
      var c = class extends a.Q {
          #h;
          #p;
          #e;
          #f;
          #m;
          #g;
          #y;
          #b;
          constructor(e, t, r) {
            super(),
              (this.#h = e),
              (this.#f = r),
              (this.#e = []),
              (this.#m = []),
              (this.#p = []),
              this.setQueries(t);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#m.forEach((e) => {
                e.subscribe((t) => {
                  this.#w(e, t);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#m.forEach((e) => {
                e.destroy();
              });
          }
          setQueries(e, t, r) {
            (this.#e = e),
              (this.#f = t),
              i.j.batch(() => {
                let e = this.#m,
                  t = this.#v(this.#e);
                t.forEach((e) =>
                  e.observer.setOptions(e.defaultedQueryOptions, r)
                );
                let n = t.map((e) => e.observer),
                  i = n.map((e) => e.getCurrentResult()),
                  o = n.some((t, r) => t !== e[r]);
                (e.length !== n.length || o) &&
                  ((this.#m = n),
                  (this.#p = i),
                  this.hasListeners() &&
                    (l(e, n).forEach((e) => {
                      e.destroy();
                    }),
                    l(n, e).forEach((e) => {
                      e.subscribe((t) => {
                        this.#w(e, t);
                      });
                    }),
                    this.#A()));
              });
          }
          getCurrentResult() {
            return this.#p;
          }
          getQueries() {
            return this.#m.map((e) => e.getCurrentQuery());
          }
          getObservers() {
            return this.#m;
          }
          getOptimisticResult(e, t) {
            let r = this.#v(e).map((e) =>
              e.observer.getOptimisticResult(e.defaultedQueryOptions)
            );
            return [r, (e) => this.#E(e ?? r, t), () => this.#C(r, e)];
          }
          #C(e, t) {
            let r = this.#v(t);
            return r.map((t, n) => {
              let i = e[n];
              return t.defaultedQueryOptions.notifyOnChangeProps
                ? i
                : t.observer.trackResult(i, (e) => {
                    r.forEach((t) => {
                      t.observer.trackProp(e);
                    });
                  });
            });
          }
          #E(e, t) {
            return t
              ? ((this.#g && this.#p === this.#b && t === this.#y) ||
                  ((this.#y = t),
                  (this.#b = this.#p),
                  (this.#g = (0, s.BH)(this.#g, t(e)))),
                this.#g)
              : e;
          }
          #v(e) {
            let t = new Map(this.#m.map((e) => [e.options.queryHash, e])),
              r = [];
            return (
              e.forEach((e) => {
                let n = this.#h.defaultQueryOptions(e),
                  i = t.get(n.queryHash);
                i
                  ? r.push({ defaultedQueryOptions: n, observer: i })
                  : r.push({
                      defaultedQueryOptions: n,
                      observer: new o.$(this.#h, n),
                    });
              }),
              r
            );
          }
          #w(e, t) {
            let r = this.#m.indexOf(e);
            -1 !== r &&
              ((this.#p = (function (e, t, r) {
                let n = e.slice(0);
                return (n[t] = r), n;
              })(this.#p, r, t)),
              this.#A());
          }
          #A() {
            this.hasListeners() &&
              this.#g !==
                this.#E(this.#C(this.#p, this.#e), this.#f?.combine) &&
              i.j.batch(() => {
                this.listeners.forEach((e) => {
                  e(this.#p);
                });
              });
          }
        },
        u = r(35906),
        d = r(81997),
        h = r(99435),
        p = r(8861),
        f = r(74760),
        m = r(96373);
      function g(e, t) {
        let { queries: r, ...a } = e,
          s = (0, u.useQueryClient)(t),
          l = (0, d.useIsRestoring)(),
          g = (0, h.useQueryErrorResetBoundary)(),
          y = n.useMemo(
            () =>
              r.map((e) => {
                let t = s.defaultQueryOptions(e);
                return (
                  (t._optimisticResults = l ? "isRestoring" : "optimistic"), t
                );
              }),
            [r, s, l]
          );
        y.forEach((e) => {
          (0, f.jv)(e), (0, p.LJ)(e, g);
        }),
          (0, p.wZ)(g);
        let [b] = n.useState(() => new c(s, y, a)),
          [w, v, A] = b.getOptimisticResult(y, a.combine);
        n.useSyncExternalStore(
          n.useCallback(
            (e) => (l ? m.l : b.subscribe(i.j.batchCalls(e))),
            [b, l]
          ),
          () => b.getCurrentResult(),
          () => b.getCurrentResult()
        ),
          n.useEffect(() => {
            b.setQueries(y, a, { listeners: !1 });
          }, [y, a, b]);
        let E = w.some((e, t) => (0, f.EU)(y[t], e))
          ? w.flatMap((e, t) => {
              let r = y[t];
              if (r) {
                let t = new o.$(s, r);
                if ((0, f.EU)(r, e)) return (0, f.iL)(r, t, g);
                (0, f.nE)(e, l) && (0, f.iL)(r, t, g);
              }
              return [];
            })
          : [];
        if (E.length > 0) throw Promise.all(E);
        let C = w.find((e, t) => {
          let r = y[t];
          return (
            r &&
            (0, p.$1)({
              result: e,
              errorResetBoundary: g,
              throwOnError: r.throwOnError,
              query: s.getQueryCache().get(r.queryHash),
            })
          );
        });
        if (null == C ? void 0 : C.error) throw C.error;
        return v(A());
      }
    },
    33097: (e, t, r) => {
      "use strict";
      r.d(t, { useSuspenseInfiniteQuery: () => a });
      var n = r(6124),
        i = r(81514),
        o = r(74760);
      function a(e, t) {
        return (0, i.t)(
          { ...e, enabled: !0, suspense: !0, throwOnError: o.R3 },
          n.z,
          t
        );
      }
    },
    97969: (e, t, r) => {
      "use strict";
      r.d(t, { useSuspenseQueries: () => o });
      var n = r(57695),
        i = r(74760);
      function o(e, t) {
        return (0, n.useQueries)(
          {
            ...e,
            queries: e.queries.map((e) => ({
              ...e,
              suspense: !0,
              throwOnError: i.R3,
              enabled: !0,
              placeholderData: void 0,
            })),
          },
          t
        );
      }
    },
    76273: (e, t, r) => {
      "use strict";
      r.d(t, { useSuspenseQuery: () => a });
      var n = r(24724),
        i = r(81514),
        o = r(74760);
      function a(e, t) {
        return (0, i.t)(
          {
            ...e,
            enabled: !0,
            suspense: !0,
            throwOnError: o.R3,
            placeholderData: void 0,
          },
          n.$,
          t
        );
      }
    },
    95145: (e, t, r) => {
      "use strict";
      function n(e) {
        let t = {
          subscribe(t) {
            let r = null,
              n = !1,
              i = !1,
              o = !1;
            function a() {
              if (null === r) {
                o = !0;
                return;
              }
              !i &&
                ((i = !0), "function" == typeof r ? r() : r && r.unsubscribe());
            }
            return (
              (r = e({
                next(e) {
                  n || t.next?.(e);
                },
                error(e) {
                  n || ((n = !0), t.error?.(e), a());
                },
                complete() {
                  n || ((n = !0), t.complete?.(), a());
                },
              })),
              o && a(),
              { unsubscribe: a }
            );
          },
          pipe: (...e) => e.reduce(i, t),
        };
        return t;
      }
      function i(e, t) {
        return t(e);
      }
      r.d(t, {
        Ke: () => c,
        XT: () => p,
        Xq: () => h,
        n2: () => f,
        $H: () => T,
        kM: () => _,
      }),
        Symbol();
      var o = r(70145);
      function a(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      class s extends Error {
        static from(e, t = {}) {
          return e instanceof s ||
            (e instanceof Error && "TRPCClientError" === e.name)
            ? (t.meta && (e.meta = { ...e.meta, ...t.meta }), e)
            : (0, o.Gv)(e) &&
              (0, o.Gv)(e.error) &&
              "number" == typeof e.error.code &&
              "string" == typeof e.error.message
            ? new s(e.error.message, { ...t, result: e })
            : new s(
                "string" == typeof e
                  ? e
                  : (0, o.Gv)(e) && "string" == typeof e.message
                  ? e.message
                  : "Unknown error",
                { ...t, cause: e }
              );
        }
        constructor(e, t) {
          let r = t?.cause;
          super(e, { cause: r }),
            a(this, "cause", void 0),
            a(this, "shape", void 0),
            a(this, "data", void 0),
            a(this, "meta", void 0),
            (this.meta = t?.meta),
            (this.cause = r),
            (this.shape = t?.result?.error),
            (this.data = t?.result?.error.data),
            (this.name = "TRPCClientError"),
            Object.setPrototypeOf(this, s.prototype);
        }
      }
      function l(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      class c {
        $request(e) {
          var t;
          return ((t = {
            links: this.links,
            op: { ...e, context: e.context ?? {}, id: ++this.requestId },
          }),
          n((e) =>
            (function e(r = 0, n = t.op) {
              let i = t.links[r];
              if (!i)
                throw Error(
                  "No more links to execute - did you forget to add an ending link?"
                );
              return i({ op: n, next: (t) => e(r + 1, t) });
            })().subscribe(e)
          )).pipe((e) => {
            let t = 0,
              r = null,
              i = [];
            return n(
              (n) => (
                t++,
                i.push(n),
                r ||
                  (r = e.subscribe({
                    next(e) {
                      for (let t of i) t.next?.(e);
                    },
                    error(e) {
                      for (let t of i) t.error?.(e);
                    },
                    complete() {
                      for (let e of i) e.complete?.();
                    },
                  })),
                {
                  unsubscribe() {
                    t--,
                      (function () {
                        if (0 === t && r) {
                          let e = r;
                          (r = null), e.unsubscribe();
                        }
                      })();
                    let e = i.findIndex((e) => e === n);
                    e > -1 && i.splice(e, 1);
                  },
                }
              )
            );
          });
        }
        async requestAsPromise(e) {
          try {
            let t = this.$request(e);
            return (
              await (function (e) {
                let t = new AbortController();
                return new Promise((r, n) => {
                  let i = !1;
                  function o() {
                    i || ((i = !0), a.unsubscribe());
                  }
                  t.signal.addEventListener("abort", () => {
                    n(t.signal.reason);
                  });
                  let a = e.subscribe({
                    next(e) {
                      (i = !0), r(e), o();
                    },
                    error(e) {
                      n(e);
                    },
                    complete() {
                      t.abort(), o();
                    },
                  });
                });
              })(t)
            ).result.data;
          } catch (e) {
            throw s.from(e);
          }
        }
        query(e, t, r) {
          return this.requestAsPromise({
            type: "query",
            path: e,
            input: t,
            context: r?.context,
            signal: r?.signal,
          });
        }
        mutation(e, t, r) {
          return this.requestAsPromise({
            type: "mutation",
            path: e,
            input: t,
            context: r?.context,
            signal: r?.signal,
          });
        }
        subscription(e, t, r) {
          return this.$request({
            type: "subscription",
            path: e,
            input: t,
            context: r.context,
            signal: r.signal,
          }).subscribe({
            next(e) {
              switch (e.result.type) {
                case "state":
                  r.onConnectionStateChange?.(e.result);
                  break;
                case "started":
                  r.onStarted?.({ context: e.context });
                  break;
                case "stopped":
                  r.onStopped?.();
                  break;
                case "data":
                case void 0:
                  r.onData?.(e.result.data);
              }
            },
            error(e) {
              r.onError?.(e);
            },
            complete() {
              r.onComplete?.();
            },
          });
        }
        constructor(e) {
          l(this, "links", void 0),
            l(this, "runtime", void 0),
            l(this, "requestId", void 0),
            (this.requestId = 0),
            (this.runtime = {}),
            (this.links = e.links.map((e) => e(this.runtime)));
        }
      }
      let u = { query: "query", mutate: "mutation", subscribe: "subscription" },
        d = (e) => u[e];
      function h(e) {
        let t = (0, o.vX)(({ path: t, args: r }) => {
          let n = [...t],
            i = d(n.pop()),
            o = n.join(".");
          return e[i](o, ...r);
        });
        return (0, o.U6)((r) =>
          e.hasOwnProperty(r) ? e[r] : "__untypedClient" === r ? e : t[r]
        );
      }
      function p(e) {
        return h(new c(e));
      }
      function f(e) {
        return e.__untypedClient;
      }
      let m = (e) => "function" == typeof e,
        g = { query: "GET", mutation: "POST", subscription: "PATCH" };
      function y(e) {
        return "input" in e
          ? e.transformer.input.serialize(e.input)
          : (function (e) {
              let t = {};
              for (let r = 0; r < e.length; r++) {
                let n = e[r];
                t[r] = n;
              }
              return t;
            })(e.inputs.map((t) => e.transformer.input.serialize(t)));
      }
      let b = (e) => {
          let t = e.url.split("?"),
            r = t[0].replace(/\/$/, "") + "/" + e.path,
            n = [];
          if (
            (t[1] && n.push(t[1]),
            "inputs" in e && n.push("batch=1"),
            "query" === e.type || "subscription" === e.type)
          ) {
            let t = y(e);
            void 0 !== t &&
              "POST" !== e.methodOverride &&
              n.push(`input=${encodeURIComponent(JSON.stringify(t))}`);
          }
          return n.length && (r += "?" + n.join("&")), r;
        },
        w = (e) => {
          if ("query" === e.type && "POST" !== e.methodOverride) return;
          let t = y(e);
          return void 0 !== t ? JSON.stringify(t) : void 0;
        };
      class v extends Error {
        constructor() {
          let e = "AbortError";
          super(e), (this.name = e), (this.message = e);
        }
      }
      let A = (e) => {
        if (e?.aborted) {
          if ((e.throwIfAborted?.(), "undefined" != typeof DOMException))
            throw new DOMException("AbortError", "AbortError");
          throw new v();
        }
      };
      async function E(e) {
        A(e.signal);
        let t = e.getUrl(e),
          r = e.getBody(e),
          { type: n } = e,
          i = await (async () => {
            let t = await e.headers();
            return Symbol.iterator in t ? Object.fromEntries(t) : t;
          })(),
          o = {
            ...(e.contentTypeHeader
              ? { "content-type": e.contentTypeHeader }
              : {}),
            ...(e.trpcAcceptHeader
              ? { "trpc-accept": e.trpcAcceptHeader }
              : void 0),
            ...i,
          };
        return (function (e) {
          if (e) return e;
          if ("undefined" != typeof window && m(window.fetch))
            return window.fetch;
          if ("undefined" != typeof globalThis && m(globalThis.fetch))
            return globalThis.fetch;
          throw Error("No fetch implementation found");
        })(e.fetch)(t, {
          method: e.methodOverride ?? g[n],
          signal: e.signal,
          body: r,
          headers: o,
        });
      }
      let C = () => {
        throw Error(
          "Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new"
        );
      };
      function x(e) {
        let t = null,
          r = null,
          n = () => {
            clearTimeout(r), (r = null), (t = null);
          };
        function i() {
          let r = (function (t) {
            let r = [[]],
              n = 0;
            for (;;) {
              let i = t[n];
              if (!i) break;
              let o = r[r.length - 1];
              if (i.aborted) {
                i.reject?.(Error("Aborted")), n++;
                continue;
              }
              if (e.validate(o.concat(i).map((e) => e.key))) {
                o.push(i), n++;
                continue;
              }
              if (0 === o.length) {
                i.reject?.(Error("Input is too big for a single dispatch")),
                  n++;
                continue;
              }
              r.push([]);
            }
            return r;
          })(t);
          for (let t of (n(), r)) {
            if (!t.length) continue;
            let r = { items: t };
            for (let e of t) e.batch = r;
            e.fetch(r.items.map((e) => e.key))
              .then(async (e) => {
                for (let t of (await Promise.all(
                  e.map(async (e, t) => {
                    let n = r.items[t];
                    try {
                      let t = await Promise.resolve(e);
                      n.resolve?.(t);
                    } catch (e) {
                      n.reject?.(e);
                    }
                    (n.batch = null), (n.reject = null), (n.resolve = null);
                  })
                ),
                r.items))
                  t.reject?.(Error("Missing result")), (t.batch = null);
              })
              .catch((e) => {
                for (let t of r.items) t.reject?.(e), (t.batch = null);
              });
          }
        }
        return {
          load: function (e) {
            let n = { aborted: !1, key: e, batch: null, resolve: C, reject: C },
              o = new Promise((e, r) => {
                (n.reject = r), (n.resolve = e), t || (t = []), t.push(n);
              });
            return r || (r = setTimeout(i)), o;
          },
        };
      }
      function _(e) {
        var t;
        let r = {
            url: e.url.toString(),
            fetch: e.fetch,
            transformer: (t = e.transformer)
              ? "input" in t
                ? t
                : { input: t, output: t }
              : {
                  input: { serialize: (e) => e, deserialize: (e) => e },
                  output: { serialize: (e) => e, deserialize: (e) => e },
                },
            methodOverride: e.methodOverride,
          },
          i = e.maxURLLength ?? 1 / 0,
          a = e.maxItems ?? 1 / 0;
        return () => {
          let t = (t) => ({
              validate(e) {
                if (i === 1 / 0 && a === 1 / 0) return !0;
                if (e.length > a) return !1;
                let n = e.map((e) => e.path).join(","),
                  o = e.map((e) => e.input);
                return (
                  b({ ...r, type: t, path: n, inputs: o, signal: null })
                    .length <= i
                );
              },
              async fetch(n) {
                let i = n.map((e) => e.path).join(","),
                  a = n.map((e) => e.input),
                  l = (function (...e) {
                    let t = new AbortController(),
                      r = e.length,
                      n = 0,
                      i = () => {
                        ++n === r && t.abort();
                      };
                    for (let t of e)
                      t?.aborted
                        ? i()
                        : t?.addEventListener("abort", i, { once: !0 });
                    return t.signal;
                  })(...n.map((e) => e.signal)),
                  c = new AbortController(),
                  u = E({
                    ...r,
                    signal: (function (...e) {
                      let t = new AbortController();
                      for (let r of e)
                        r?.aborted
                          ? t.abort()
                          : r?.addEventListener("abort", () => t.abort(), {
                              once: !0,
                            });
                      return t.signal;
                    })(l, c.signal),
                    type: t,
                    contentTypeHeader: "application/json",
                    trpcAcceptHeader: "application/jsonl",
                    getUrl: b,
                    getBody: w,
                    inputs: a,
                    path: i,
                    headers: () =>
                      e.headers
                        ? "function" == typeof e.headers
                          ? e.headers({ opList: n })
                          : e.headers
                        : {},
                  }),
                  d = await u,
                  [h] = await (0, o.le)({
                    from: d.body,
                    deserialize: r.transformer.output.deserialize,
                    formatError(e) {
                      let t = e.error;
                      return s.from({ error: t });
                    },
                    abortController: c,
                  });
                return Object.keys(n).map(async (e) => {
                  let t = await Promise.resolve(h[e]);
                  if ("result" in t) {
                    let e = await Promise.resolve(t.result);
                    t = { result: { data: await Promise.resolve(e.data) } };
                  }
                  return { json: t, meta: { response: d } };
                });
              },
            }),
            l = { query: x(t("query")), mutation: x(t("mutation")) };
          return ({ op: e }) =>
            n((t) => {
              let r;
              if ("subscription" === e.type)
                throw Error(
                  "Subscriptions are unsupported by `httpLink` - use `httpSubscriptionLink` or `wsLink`"
                );
              return (
                l[e.type]
                  .load(e)
                  .then((e) => {
                    if (((r = e), "error" in e.json)) {
                      t.error(s.from(e.json, { meta: e.meta }));
                      return;
                    }
                    if ("result" in e.json) {
                      t.next({ context: e.meta, result: e.json.result }),
                        t.complete();
                      return;
                    }
                    t.complete();
                  })
                  .catch((e) => {
                    t.error(s.from(e, { meta: r?.meta }));
                  }),
                () => {}
              );
            });
        };
      }
      let k = {
          css: {
            query: ["72e3ff", "3fb0d8"],
            mutation: ["c5a3fc", "904dfc"],
            subscription: ["ff49e1", "d83fbe"],
          },
          ansi: {
            regular: {
              query: ["\x1b[30;46m", "\x1b[97;46m"],
              mutation: ["\x1b[30;45m", "\x1b[97;45m"],
              subscription: ["\x1b[30;42m", "\x1b[97;42m"],
            },
            bold: {
              query: ["\x1b[1;30;46m", "\x1b[1;97;46m"],
              mutation: ["\x1b[1;30;45m", "\x1b[1;97;45m"],
              subscription: ["\x1b[1;30;42m", "\x1b[1;97;42m"],
            },
          },
        },
        I =
          ({ c: e = console, colorMode: t = "css", withContext: r }) =>
          (n) => {
            let i = n.input,
              o =
                "undefined" != typeof FormData && i instanceof FormData
                  ? Object.fromEntries(i)
                  : i,
              { parts: a, args: s } = (function (e) {
                let {
                    direction: t,
                    type: r,
                    withContext: n,
                    path: i,
                    id: o,
                    input: a,
                  } = e,
                  s = [],
                  l = [];
                if ("none" === e.colorMode)
                  s.push("up" === t ? ">>" : "<<", r, `#${o}`, i);
                else if ("ansi" === e.colorMode) {
                  let [e, n] = k.ansi.regular[r],
                    [a, l] = k.ansi.bold[r];
                  s.push(
                    "up" === t ? e : n,
                    "up" === t ? ">>" : "<<",
                    r,
                    "up" === t ? a : l,
                    `#${o}`,
                    i,
                    "\x1b[0m"
                  );
                } else {
                  let [e, n] = k.css[r],
                    a = `
    background-color: #${"up" === t ? e : n};
    color: ${"up" === t ? "black" : "white"};
    padding: 2px;
  `;
                  s.push(
                    "%c",
                    "up" === t ? ">>" : "<<",
                    r,
                    `#${o}`,
                    `%c${i}%c`,
                    "%O"
                  ),
                    l.push(
                      a,
                      `${a}; font-weight: bold;`,
                      `${a}; font-weight: normal;`
                    );
                }
                return (
                  "up" === t
                    ? l.push(
                        n ? { input: a, context: e.context } : { input: a }
                      )
                    : l.push({
                        input: a,
                        result: e.result,
                        elapsedMs: e.elapsedMs,
                        ...(n && { context: e.context }),
                      }),
                  { parts: s, args: l }
                );
              })({ ...n, colorMode: t, input: o, withContext: r });
            e[
              "down" === n.direction &&
              n.result &&
              (n.result instanceof Error ||
                ("error" in n.result.result && n.result.result.error))
                ? "error"
                : "log"
            ].apply(null, [a.join(" ")].concat(s));
          };
      function T(e = {}) {
        let { enabled: t = () => !0 } = e,
          r = e.colorMode ?? ("undefined" == typeof window ? "ansi" : "css"),
          i = e.withContext ?? "css" === r,
          { logger: o = I({ c: e.console, colorMode: r, withContext: i }) } = e;
        return () =>
          ({ op: e, next: r }) =>
            n((i) => {
              var a;
              t({ ...e, direction: "up" }) && o({ ...e, direction: "up" });
              let s = Date.now();
              function l(r) {
                let n = Date.now() - s;
                t({ ...e, direction: "down", result: r }) &&
                  o({ ...e, direction: "down", elapsedMs: n, result: r });
              }
              return r(e)
                .pipe(
                  ((a = {
                    next(e) {
                      l(e);
                    },
                    error(e) {
                      l(e);
                    },
                  }),
                  (e) =>
                    n((t) =>
                      e.subscribe({
                        next(e) {
                          a.next?.(e), t.next(e);
                        },
                        error(e) {
                          a.error?.(e), t.error(e);
                        },
                        complete() {
                          a.complete?.(), t.complete();
                        },
                      })
                    ))
                )
                .subscribe(i);
            });
      }
      class S extends Error {
        constructor(e) {
          super(e?.message ?? "WebSocket closed", { cause: e?.cause }),
            (this.name = "TRPCWebSocketClosedError"),
            Object.setPrototypeOf(this, S.prototype);
        }
      }
      var O = r(73755);
      r(12456),
        r(36552),
        r(19862),
        r(37151),
        O.Y.BAD_GATEWAY,
        O.Y.SERVICE_UNAVAILABLE,
        O.Y.GATEWAY_TIMEOUT,
        O.Y.INTERNAL_SERVER_ERROR;
    },
    61456: (e, t, r) => {
      "use strict";
      r.d(t, { pY: () => k });
      var n = r(95145),
        i = r(84403),
        o = r(70145);
      function a(e, t, r) {
        let n = e.flatMap((e) => e.split("."));
        if (!t && (!r || "any" === r)) return n.length ? [n] : [];
        if (
          "infinite" === r &&
          (0, o.Gv)(t) &&
          ("direction" in t || "cursor" in t)
        ) {
          let { cursor: e, direction: r, ...i } = t;
          return [n, { input: i, type: "infinite" }];
        }
        return [
          n,
          {
            ...(void 0 !== t && t !== i.hT && { input: t }),
            ...(r && "any" !== r && { type: r }),
          },
        ];
      }
      function s(e) {
        return a(e, void 0, "any");
      }
      var l = r(12115);
      let c = ["client", "ssrContext", "ssrState", "abortOnUnmount"],
        u = l.createContext?.(null),
        d = (e) => {
          switch (e) {
            case "queryOptions":
            case "fetch":
            case "ensureData":
            case "prefetch":
            case "getData":
            case "setData":
            case "setQueriesData":
              return "query";
            case "infiniteQueryOptions":
            case "fetchInfinite":
            case "prefetchInfinite":
            case "getInfiniteData":
            case "setInfiniteData":
              return "infinite";
            case "setMutationDefaults":
            case "getMutationDefaults":
            case "isMutating":
            case "cancel":
            case "invalidate":
            case "refetch":
            case "reset":
              return "any";
          }
        };
      var h = r(93233),
        p = r(35906),
        f = r(76273),
        m = r(25848),
        g = r(12009),
        y = r(33097),
        b = r(57695),
        w = r(97969);
      function v(e, t, r) {
        let n = e[0],
          i = e[1]?.input;
        return (
          r &&
            (i = {
              ...(i ?? {}),
              ...(r.pageParam ? { cursor: r.pageParam } : {}),
              direction: r.direction,
            }),
          [n.join("."), i, t?.trpc]
        );
      }
      function A(e) {
        return { path: e.path.join(".") };
      }
      function E(e) {
        let t = A(e);
        return l.useMemo(() => t, [t]);
      }
      async function C(e, t, r) {
        let n = t.getQueryCache().build(t, { queryKey: r });
        n.setState({ data: [], status: "success" });
        let i = [];
        for await (let t of e) i.push(t), n.setState({ data: [...i] });
        return i;
      }
      function x(e) {
        let t = e instanceof n.Ke ? e : (0, n.n2)(e);
        return (0, o.vX)((e) => {
          let r = e.path,
            n = r.join("."),
            [i, o] = e.args;
          return {
            queryKey: a(r, i, "query"),
            queryFn: () => t.query(n, i, o?.trpc),
            ...o,
          };
        });
      }
      let _ = (e, t) => new Proxy(e, { get: (e, r) => (t(r), e[r]) });
      function k(e) {
        return (function (e) {
          let t = (0, o.vX)(({ path: t, args: r }) => {
            let n = [...t],
              i = n.pop();
            if ("useMutation" === i) return e[i](n, ...r);
            if ("_def" === i) return { path: n };
            let [o, ...a] = r,
              s = a[0] || {};
            return e[i](n, o, s);
          });
          return (0, o.U6)((r) =>
            "useContext" === r || "useUtils" === r
              ? () => {
                  let t = e.useUtils();
                  return l.useMemo(
                    () =>
                      (function (e) {
                        let t = (0, n.Xq)(e.client),
                          r = (0, o.vX)((t) => {
                            let r = [...t.path],
                              n = r.pop(),
                              i = [...t.args],
                              o = i.shift(),
                              l = a(r, o, d(n));
                            return {
                              infiniteQueryOptions: () =>
                                e.infiniteQueryOptions(r, l, i[0]),
                              queryOptions: () => e.queryOptions(r, l, ...i),
                              fetch: () => e.fetchQuery(l, ...i),
                              fetchInfinite: () =>
                                e.fetchInfiniteQuery(l, i[0]),
                              prefetch: () => e.prefetchQuery(l, ...i),
                              prefetchInfinite: () =>
                                e.prefetchInfiniteQuery(l, i[0]),
                              ensureData: () => e.ensureQueryData(l, ...i),
                              invalidate: () => e.invalidateQueries(l, ...i),
                              reset: () => e.resetQueries(l, ...i),
                              refetch: () => e.refetchQueries(l, ...i),
                              cancel: () => e.cancelQuery(l, ...i),
                              setData: () => {
                                e.setQueryData(l, i[0], i[1]);
                              },
                              setQueriesData: () =>
                                e.setQueriesData(l, i[0], i[1], i[2]),
                              setInfiniteData: () => {
                                e.setInfiniteQueryData(l, i[0], i[1]);
                              },
                              getData: () => e.getQueryData(l),
                              getInfiniteData: () => e.getInfiniteQueryData(l),
                              setMutationDefaults: () =>
                                e.setMutationDefaults(s(r), o),
                              getMutationDefaults: () =>
                                e.getMutationDefaults(s(r)),
                              isMutating: () =>
                                e.isMutating({ mutationKey: s(r) }),
                            }[n]();
                          });
                        return (0, o.U6)((n) =>
                          "client" === n ? t : c.includes(n) ? e[n] : r[n]
                        );
                      })(t),
                    [t]
                  );
                }
              : e.hasOwnProperty(r)
              ? e[r]
              : t[r]
          );
        })(
          (function (e) {
            let t =
                e?.overrides?.useMutation?.onSuccess ?? ((e) => e.originalFn()),
              r = e?.context ?? u;
            function c() {
              let e = l.useContext(r);
              if (!e)
                throw Error(
                  "Unable to find tRPC Context. Did you forget to wrap your App inside `withTRPC` HoC?"
                );
              return e;
            }
            function d(e, t) {
              let { queryClient: r, ssrState: n } = c();
              return n &&
                "mounted" !== n &&
                r.getQueryCache().find({ queryKey: e })?.state.status ===
                  "error"
                ? { retryOnMount: !1, ...t }
                : t;
            }
            return {
              Provider: (e) => {
                let {
                    abortOnUnmount: t = !1,
                    queryClient: a,
                    ssrContext: s,
                  } = e,
                  [c, u] = l.useState(e.ssrState ?? !1),
                  d = e.client instanceof n.Ke ? e.client : (0, n.n2)(e.client),
                  h = l.useMemo(
                    () =>
                      (function (e) {
                        let { client: t, queryClient: r } = e,
                          a = t instanceof n.Ke ? t : (0, n.n2)(t);
                        return {
                          infiniteQueryOptions: (e, t, r) => {
                            let n = t[1]?.input === i.hT,
                              o = async (e) => {
                                let n = {
                                  ...r,
                                  trpc: {
                                    ...r?.trpc,
                                    ...(r?.trpc?.abortOnUnmount
                                      ? { signal: e.signal }
                                      : { signal: null }),
                                  },
                                };
                                return await a.query(
                                  ...v(t, n, {
                                    direction: e.direction,
                                    pageParam: e.pageParam,
                                  })
                                );
                              };
                            return Object.assign(
                              {
                                ...r,
                                initialData: r?.initialData,
                                queryKey: t,
                                queryFn: n ? i.hT : o,
                                initialPageParam: r?.initialCursor ?? null,
                              },
                              { trpc: A({ path: e }) }
                            );
                          },
                          queryOptions: (e, t, n) => {
                            let s = t[1]?.input === i.hT,
                              l = async (e) => {
                                let i = {
                                    ...n,
                                    trpc: {
                                      ...n?.trpc,
                                      ...(n?.trpc?.abortOnUnmount
                                        ? { signal: e.signal }
                                        : { signal: null }),
                                    },
                                  },
                                  s = await a.query(...v(t, i));
                                return (0, o.Td)(s) ? C(s, r, t) : s;
                              };
                            return Object.assign(
                              {
                                ...n,
                                initialData: n?.initialData,
                                queryKey: t,
                                queryFn: s ? i.hT : l,
                              },
                              { trpc: A({ path: e }) }
                            );
                          },
                          fetchQuery: (e, t) =>
                            r.fetchQuery({
                              ...t,
                              queryKey: e,
                              queryFn: () => a.query(...v(e, t)),
                            }),
                          fetchInfiniteQuery: (e, t) =>
                            r.fetchInfiniteQuery({
                              ...t,
                              queryKey: e,
                              queryFn: ({ pageParam: r, direction: n }) =>
                                a.query(
                                  ...v(e, t, { pageParam: r, direction: n })
                                ),
                              initialPageParam: t?.initialCursor ?? null,
                            }),
                          prefetchQuery: (e, t) =>
                            r.prefetchQuery({
                              ...t,
                              queryKey: e,
                              queryFn: () => a.query(...v(e, t)),
                            }),
                          prefetchInfiniteQuery: (e, t) =>
                            r.prefetchInfiniteQuery({
                              ...t,
                              queryKey: e,
                              queryFn: ({ pageParam: r, direction: n }) =>
                                a.query(
                                  ...v(e, t, { pageParam: r, direction: n })
                                ),
                              initialPageParam: t?.initialCursor ?? null,
                            }),
                          ensureQueryData: (e, t) =>
                            r.ensureQueryData({
                              ...t,
                              queryKey: e,
                              queryFn: () => a.query(...v(e, t)),
                            }),
                          invalidateQueries: (e, t, n) =>
                            r.invalidateQueries({ ...t, queryKey: e }, n),
                          resetQueries: (e, t, n) =>
                            r.resetQueries({ ...t, queryKey: e }, n),
                          refetchQueries: (e, t, n) =>
                            r.refetchQueries({ ...t, queryKey: e }, n),
                          cancelQuery: (e, t) =>
                            r.cancelQueries({ queryKey: e }, t),
                          setQueryData: (e, t, n) => r.setQueryData(e, t, n),
                          setQueriesData: (e, t, n, i) =>
                            r.setQueriesData({ ...t, queryKey: e }, n, i),
                          getQueryData: (e) => r.getQueryData(e),
                          setInfiniteQueryData: (e, t, n) =>
                            r.setQueryData(e, t, n),
                          getInfiniteQueryData: (e) => r.getQueryData(e),
                          setMutationDefaults: (t, n) => {
                            let i = t[0];
                            return r.setMutationDefaults(
                              t,
                              "function" == typeof n
                                ? n({
                                    canonicalMutationFn: (t) =>
                                      a.mutation(...v([i, { input: t }], e)),
                                  })
                                : n
                            );
                          },
                          getMutationDefaults: (e) => r.getMutationDefaults(e),
                          isMutating: (e) => r.isMutating({ ...e, exact: !0 }),
                        };
                      })({ client: d, queryClient: a }),
                    [d, a]
                  ),
                  p = l.useMemo(
                    () => ({
                      abortOnUnmount: t,
                      queryClient: a,
                      client: d,
                      ssrContext: s ?? null,
                      ssrState: c,
                      ...h,
                    }),
                    [t, d, h, a, s, c]
                  );
                return (
                  l.useEffect(() => {
                    u((e) => !!e && "mounted");
                  }, []),
                  l.createElement(r.Provider, { value: p }, e.children)
                );
              },
              createClient: n.XT,
              useContext: c,
              useUtils: c,
              useQuery: function (t, r, n) {
                let {
                    abortOnUnmount: s,
                    client: l,
                    ssrState: u,
                    queryClient: p,
                    prefetchQuery: f,
                  } = c(),
                  m = a(t, r, "query"),
                  g = p.getQueryDefaults(m),
                  y = r === i.hT;
                "undefined" != typeof window ||
                  "prepass" !== u ||
                  n?.trpc?.ssr === !1 ||
                  (n?.enabled ?? g?.enabled) === !1 ||
                  y ||
                  p.getQueryCache().find({ queryKey: m }) ||
                  f(m, n);
                let b = d(m, { ...g, ...n }),
                  w = n?.trpc?.abortOnUnmount ?? e?.abortOnUnmount ?? s,
                  A = (0, h.useQuery)(
                    {
                      ...b,
                      queryKey: m,
                      queryFn: y
                        ? r
                        : async (e) => {
                            let t = {
                                ...b,
                                trpc: {
                                  ...b?.trpc,
                                  ...(w
                                    ? { signal: e.signal }
                                    : { signal: null }),
                                },
                              },
                              r = await l.query(...v(m, t));
                            return (0, o.Td)(r) ? C(r, p, m) : r;
                          },
                    },
                    p
                  );
                return (A.trpc = E({ path: t })), A;
              },
              usePrefetchQuery: function (t, r, n) {
                let o = c(),
                  s = a(t, r, "query"),
                  l = r === i.hT,
                  u =
                    n?.trpc?.abortOnUnmount ??
                    e?.abortOnUnmount ??
                    o.abortOnUnmount;
                !(function (e, t) {
                  let r = (0, p.useQueryClient)(void 0);
                  r.getQueryState(e.queryKey) || r.prefetchQuery(e);
                })({
                  ...n,
                  queryKey: s,
                  queryFn: l
                    ? r
                    : (e) => {
                        let t = {
                          trpc: {
                            ...n?.trpc,
                            ...(u ? { signal: e.signal } : {}),
                          },
                        };
                        return o.client.query(...v(s, t));
                      },
                });
              },
              useSuspenseQuery: function (t, r, n) {
                let i = c(),
                  o = a(t, r, "query"),
                  s =
                    n?.trpc?.abortOnUnmount ??
                    e?.abortOnUnmount ??
                    i.abortOnUnmount,
                  l = (0, f.useSuspenseQuery)(
                    {
                      ...n,
                      queryKey: o,
                      queryFn: (e) => {
                        let t = {
                          ...n,
                          trpc: {
                            ...n?.trpc,
                            ...(s ? { signal: e.signal } : { signal: null }),
                          },
                        };
                        return i.client.query(...v(o, t));
                      },
                    },
                    i.queryClient
                  );
                return (l.trpc = E({ path: t })), [l.data, l];
              },
              useQueries: (e) => {
                let {
                    ssrState: t,
                    queryClient: r,
                    prefetchQuery: n,
                    client: i,
                  } = c(),
                  o = e(x(i));
                if ("undefined" == typeof window && "prepass" === t)
                  for (let e of o)
                    e.trpc?.ssr === !1 ||
                      r.getQueryCache().find({ queryKey: e.queryKey }) ||
                      n(e.queryKey, e);
                return (0, b.useQueries)(
                  { queries: o.map((e) => ({ ...e, queryKey: e.queryKey })) },
                  r
                );
              },
              useSuspenseQueries: (e) => {
                let { queryClient: t, client: r } = c(),
                  n = e(x(r)),
                  i = (0, w.useSuspenseQueries)(
                    {
                      queries: n.map((e) => ({
                        ...e,
                        queryFn: e.queryFn,
                        queryKey: e.queryKey,
                      })),
                    },
                    t
                  );
                return [i.map((e) => e.data), i];
              },
              useMutation: function (e, r) {
                let { client: n, queryClient: i } = c(),
                  o = s(e),
                  a = i.defaultMutationOptions(i.getMutationDefaults(o)),
                  l = (0, m.useMutation)(
                    {
                      ...r,
                      mutationKey: o,
                      mutationFn: (t) => n.mutation(...v([e, { input: t }], r)),
                      onSuccess: (...e) =>
                        t({
                          originalFn: () =>
                            r?.onSuccess?.(...e) ?? a?.onSuccess?.(...e),
                          queryClient: i,
                          meta: r?.meta ?? a?.meta ?? {},
                        }),
                    },
                    i
                  );
                return (l.trpc = E({ path: e })), l;
              },
              useSubscription: function (e, t, r) {
                let n = r?.enabled ?? t !== i.hT,
                  o = (0, i.EN)(a(e, t, "any")),
                  { client: s } = c(),
                  u = l.useRef(r);
                u.current = r;
                let d = l.useRef(new Set([])),
                  h = l.useCallback((e) => {
                    d.current.add(e);
                  }, []),
                  p = l.useRef(null),
                  f = l.useCallback(() => {
                    if ((p.current?.(), w(m), !n)) return;
                    let r = !1,
                      i = s.subscription(e.join("."), t ?? void 0, {
                        onStarted: () => {
                          r ||
                            (u.current.onStarted?.(),
                            w((e) => ({
                              ...e,
                              status: "pending",
                              error: null,
                            })));
                        },
                        onData: (e) => {
                          r ||
                            (u.current.onData?.(e),
                            w((t) => ({
                              ...t,
                              status: "pending",
                              data: e,
                              error: null,
                            })));
                        },
                        onError: (e) => {
                          r ||
                            (u.current.onError?.(e),
                            w((t) => ({ ...t, status: "error", error: e })));
                        },
                        onConnectionStateChange: (e) => {
                          let t = { status: e.state, error: e.error };
                          w((e) => ({ ...e, ...t }));
                        },
                      });
                    p.current = () => {
                      (r = !0), i.unsubscribe();
                    };
                  }, [o, n]),
                  m = l.useCallback(
                    () =>
                      n
                        ? {
                            data: void 0,
                            error: null,
                            status: "connecting",
                            reset: f,
                          }
                        : {
                            data: void 0,
                            error: null,
                            status: "idle",
                            reset: f,
                          },
                    [n, f]
                  ),
                  g = l.useRef(m()),
                  [y, b] = l.useState(_(g.current, h));
                y.reset = f;
                let w = l.useCallback(
                  (e) => {
                    let t = g.current,
                      r = (g.current = e(t)),
                      n = !1;
                    for (let e of d.current)
                      if (t[e] !== r[e]) {
                        n = !0;
                        break;
                      }
                    n && b(_(r, h));
                  },
                  [h]
                );
                return (
                  l.useEffect(() => {
                    if (n)
                      return (
                        f(),
                        () => {
                          p.current?.();
                        }
                      );
                  }, [f, n]),
                  y
                );
              },
              useInfiniteQuery: function (e, t, r) {
                let {
                    client: n,
                    ssrState: o,
                    prefetchInfiniteQuery: s,
                    queryClient: l,
                    abortOnUnmount: u,
                  } = c(),
                  h = a(e, t, "infinite"),
                  p = l.getQueryDefaults(h),
                  f = t === i.hT;
                "undefined" != typeof window ||
                  "prepass" !== o ||
                  r?.trpc?.ssr === !1 ||
                  (r?.enabled ?? p?.enabled) === !1 ||
                  f ||
                  l.getQueryCache().find({ queryKey: h }) ||
                  s(h, { ...p, ...r });
                let m = d(h, { ...p, ...r }),
                  y = r?.trpc?.abortOnUnmount ?? u,
                  b = (0, g.useInfiniteQuery)(
                    {
                      ...m,
                      initialPageParam: r.initialCursor ?? null,
                      persister: r.persister,
                      queryKey: h,
                      queryFn: f
                        ? t
                        : (e) => {
                            let t = {
                              ...m,
                              trpc: {
                                ...m?.trpc,
                                ...(y
                                  ? { signal: e.signal }
                                  : { signal: null }),
                              },
                            };
                            return n.query(
                              ...v(h, t, {
                                pageParam: e.pageParam ?? r.initialCursor,
                                direction: e.direction,
                              })
                            );
                          },
                    },
                    l
                  );
                return (b.trpc = E({ path: e })), b;
              },
              usePrefetchInfiniteQuery: function (e, t, r) {
                let n = c(),
                  o = a(e, t, "infinite"),
                  s = n.queryClient.getQueryDefaults(o),
                  l = t === i.hT,
                  u = d(o, { ...s, ...r }),
                  h = r?.trpc?.abortOnUnmount ?? n.abortOnUnmount;
                !(function (e, t) {
                  let r = (0, p.useQueryClient)(void 0);
                  r.getQueryState(e.queryKey) || r.prefetchInfiniteQuery(e);
                })({
                  ...r,
                  initialPageParam: r.initialCursor ?? null,
                  queryKey: o,
                  queryFn: l
                    ? t
                    : (e) => {
                        let t = {
                          ...u,
                          trpc: {
                            ...u?.trpc,
                            ...(h ? { signal: e.signal } : {}),
                          },
                        };
                        return n.client.query(
                          ...v(o, t, {
                            pageParam: e.pageParam ?? r.initialCursor,
                            direction: e.direction,
                          })
                        );
                      },
                });
              },
              useSuspenseInfiniteQuery: function (e, t, r) {
                let n = c(),
                  i = a(e, t, "infinite"),
                  o = n.queryClient.getQueryDefaults(i),
                  s = d(i, { ...o, ...r }),
                  l = r?.trpc?.abortOnUnmount ?? n.abortOnUnmount,
                  u = (0, y.useSuspenseInfiniteQuery)(
                    {
                      ...r,
                      initialPageParam: r.initialCursor ?? null,
                      queryKey: i,
                      queryFn: (e) => {
                        let t = {
                          ...s,
                          trpc: {
                            ...s?.trpc,
                            ...(l ? { signal: e.signal } : {}),
                          },
                        };
                        return n.client.query(
                          ...v(i, t, {
                            pageParam: e.pageParam ?? r.initialCursor,
                            direction: e.direction,
                          })
                        );
                      },
                    },
                    n.queryClient
                  );
                return (u.trpc = E({ path: e })), [u.data, u];
              },
            };
          })(e)
        );
      }
    },
    70145: (e, t, r) => {
      "use strict";
      r.d(t, {
        U6: () => a,
        vX: () => o,
        Td: () => s.Td,
        Gv: () => s.Gv,
        le: () => w,
      });
      let n = () => {},
        i = (e) => {
          Object.freeze && Object.freeze(e);
        },
        o = (e) =>
          (function e(t, r, o) {
            let a = r.join(".");
            return (
              o[a] ??
                (o[a] = new Proxy(n, {
                  get(n, i) {
                    if ("string" == typeof i && "then" !== i)
                      return e(t, [...r, i], o);
                  },
                  apply(e, n, o) {
                    let a = r[r.length - 1],
                      s = { args: o, path: r };
                    return (
                      "call" === a
                        ? (s = {
                            args: o.length >= 2 ? [o[1]] : [],
                            path: r.slice(0, -1),
                          })
                        : "apply" === a &&
                          (s = {
                            args: o.length >= 2 ? o[1] : [],
                            path: r.slice(0, -1),
                          }),
                      i(s.args),
                      i(s.path),
                      t(s)
                    );
                  },
                })),
              o[a]
            );
          })(e, [], Object.create(null)),
        a = (e) =>
          new Proxy(n, {
            get(t, r) {
              if ("string" == typeof r && "then" !== r) return e(r);
            },
          });
      r(73755);
      var s = r(15074);
      function l(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      class c extends Error {}
      function u(e) {
        if (e instanceof d || (e instanceof Error && "TRPCError" === e.name))
          return e;
        let t = new d({ code: "INTERNAL_SERVER_ERROR", cause: e });
        return e instanceof Error && e.stack && (t.stack = e.stack), t;
      }
      class d extends Error {
        constructor(e) {
          let t = (function (e) {
            if (e instanceof Error) return e;
            let t = typeof e;
            if ("undefined" !== t && "function" !== t && null !== e) {
              if ("object" !== t) return Error(String(e));
              if ((0, s.Gv)(e)) {
                let t = new c();
                for (let r in e) t[r] = e[r];
                return t;
              }
            }
          })(e.cause);
          super(e.message ?? t?.message ?? e.code, { cause: t }),
            l(this, "cause", void 0),
            l(this, "code", void 0),
            (this.code = e.code),
            (this.name = "TRPCError"),
            this.cause || (this.cause = t);
        }
      }
      r(36552);
      var h = r(19862);
      function p(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function f(e, t, r) {
        if (null != t) {
          var n, i;
          if ("object" != typeof t && "function" != typeof t)
            throw TypeError("Object expected.");
          if (r) {
            if (!Symbol.asyncDispose)
              throw TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
          }
          if (void 0 === n) {
            if (!Symbol.dispose)
              throw TypeError("Symbol.dispose is not defined.");
            (n = t[Symbol.dispose]), r && (i = n);
          }
          if ("function" != typeof n) throw TypeError("Object not disposable.");
          i &&
            (n = function () {
              try {
                i.call(this);
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            e.stack.push({ value: t, dispose: n, async: r });
        } else r && e.stack.push({ async: !0 });
        return t;
      }
      function m(e) {
        var t =
          "function" == typeof SuppressedError
            ? SuppressedError
            : function (e, t, r) {
                var n = Error(r);
                return (
                  (n.name = "SuppressedError"),
                  (n.error = e),
                  (n.suppressed = t),
                  n
                );
              };
        return (m = function (e) {
          function r(r) {
            (e.error = e.hasError
              ? new t(r, e.error, "An error was suppressed during disposal.")
              : r),
              (e.hasError = !0);
          }
          var n,
            i = 0;
          return (function t() {
            for (; (n = e.stack.pop()); )
              try {
                if (!n.async && 1 === i)
                  return (i = 0), e.stack.push(n), Promise.resolve().then(t);
                if (n.dispose) {
                  var o = n.dispose.call(n.value);
                  if (n.async)
                    return (
                      (i |= 2),
                      Promise.resolve(o).then(t, function (e) {
                        return r(e), t();
                      })
                    );
                } else i |= 1;
              } catch (e) {
                r(e);
              }
            if (1 === i)
              return e.hasError ? Promise.reject(e.error) : Promise.resolve();
            if (e.hasError) throw e.error;
          })();
        })(e);
      }
      Symbol();
      class g extends Error {
        constructor(e) {
          super("Invalid response or stream interrupted", { cause: e });
        }
      }
      class y extends Error {
        constructor(e) {
          super("Received error from server"),
            p(this, "data", void 0),
            (this.data = e);
        }
      }
      let b = (e) => ({
        getReader: () =>
          new ReadableStream({
            start(t) {
              e.on("data", (e) => {
                t.enqueue(e);
              }),
                e.on("end", () => {
                  t.close();
                }),
                e.on("error", (e) => {
                  t.error(e);
                });
            },
          }).getReader(),
      });
      async function w(e) {
        let t, r;
        let { deserialize: n = (e) => e } = e,
          i = (function (e) {
            let t = (function (e) {
                let t = "getReader" in e ? e.getReader() : b(e).getReader(),
                  r = "";
                return new ReadableStream({
                  async pull(e) {
                    let { done: r, value: n } = await t.read();
                    r ? e.close() : e.enqueue(n);
                  },
                  cancel: () => t.cancel(),
                })
                  .pipeThrough(new TextDecoderStream())
                  .pipeThrough(
                    new TransformStream({
                      transform(e, t) {
                        let n = (r += e).split("\n");
                        for (let e of ((r = n.pop() ?? ""), n)) t.enqueue(e);
                      },
                    })
                  );
              })(e),
              r = !1;
            return t.pipeThrough(
              new TransformStream({
                transform(e, t) {
                  if (r) {
                    let r = JSON.parse(e);
                    t.enqueue(r);
                  } else {
                    let n = JSON.parse(e);
                    t.enqueue(n), (r = !0);
                  }
                },
              })
            );
          })(e.from);
        n &&
          (i = i.pipeThrough(
            new TransformStream({
              transform(e, t) {
                t.enqueue(n(e));
              },
            })
          ));
        let o = {
            promise: new Promise((e, n) => {
              (t = e), (r = n);
            }),
            resolve: t,
            reject: r,
          },
          a = (function (e) {
            let t = new Map();
            function r() {
              return Array.from(t.values()).every((e) => e.closed);
            }
            return {
              getOrCreate: function (n) {
                let i = t.get(n);
                return (
                  i ||
                    ((i = (function () {
                      let t;
                      let n = new ReadableStream({
                          start(e) {
                            t = e;
                          },
                        }),
                        i = {
                          enqueue: (e) => t.enqueue(e),
                          close: () => {
                            t.close(),
                              Object.assign(i, {
                                closed: !0,
                                close: () => {},
                                enqueue: () => {},
                                getReaderResource: null,
                              }),
                              r() && e.abort();
                          },
                          closed: !1,
                          getReaderResource: () => {
                            let e = n.getReader();
                            return (0, h.T)(e, () => {
                              e.releaseLock(), i.close();
                            });
                          },
                        };
                      return i;
                    })()),
                    t.set(n, i)),
                  i
                );
              },
              isEmpty: r,
              cancelAll: function (e) {
                let r = new g(e);
                for (let e of t.values()) e.enqueue(r), e.close();
              },
            };
          })(e.abortController),
          l = (e) => {
            let t = new g(e);
            o?.reject(t), a.cancelAll(t);
          };
        return (
          i
            .pipeTo(
              new WritableStream({
                write(t) {
                  if (o) {
                    for (let [r, n] of Object.entries(t)) {
                      let i = (function t(r) {
                        let [[n], ...i] = r;
                        for (let r of i) {
                          let [i] = r,
                            o = (function (r) {
                              let [n, i, o] = r,
                                l = a.getOrCreate(o);
                              switch (i) {
                                case 0:
                                  return (0, s.eF)(async () => {
                                    let r = {
                                      stack: [],
                                      error: void 0,
                                      hasError: !1,
                                    };
                                    try {
                                      let n = f(r, l.getReaderResource(), !1),
                                        { value: i } = await n.read();
                                      if (i instanceof g) throw i;
                                      let [o, a, s] = i;
                                      switch (a) {
                                        case 0:
                                          return t(s);
                                        case 1:
                                          throw (
                                            e.formatError?.({ error: s }) ??
                                            new y(s)
                                          );
                                      }
                                    } catch (e) {
                                      (r.error = e), (r.hasError = !0);
                                    } finally {
                                      m(r);
                                    }
                                  });
                                case 1:
                                  return (0, s.eF)(async function* () {
                                    let r = {
                                      stack: [],
                                      error: void 0,
                                      hasError: !1,
                                    };
                                    try {
                                      let n = f(r, l.getReaderResource(), !1);
                                      for (;;) {
                                        let { value: r } = await n.read();
                                        if (r instanceof g) throw r;
                                        let [i, o, a] = r;
                                        switch (o) {
                                          case 1:
                                            yield t(a);
                                            break;
                                          case 0:
                                            return t(a);
                                          case 2:
                                            throw (
                                              e.formatError?.({ error: a }) ??
                                              new y(a)
                                            );
                                        }
                                      }
                                    } catch (e) {
                                      (r.error = e), (r.hasError = !0);
                                    } finally {
                                      m(r);
                                    }
                                  });
                              }
                            })(r);
                          if (null === i) return o;
                          n[i] = o;
                        }
                        return n;
                      })(n);
                      t[r] = i;
                    }
                    o.resolve(t), (o = null);
                    return;
                  }
                  let [r] = t;
                  a.getOrCreate(r).enqueue(t);
                },
                close: l,
                abort: l,
              }),
              { signal: e.abortController.signal }
            )
            .catch((t) => {
              e.onError?.({ error: t }), l(t);
            }),
          [await o.promise, a]
        );
      }
      Symbol(), Symbol("ping");
      let v = {
          input: { serialize: (e) => e, deserialize: (e) => e },
          output: { serialize: (e) => e, deserialize: (e) => e },
        },
        A = ({ shape: e }) => e,
        E = "middlewareMarker";
      function C(e) {
        if ("function" == typeof e && "function" == typeof e.assert)
          return e.assert.bind(e);
        if ("function" == typeof e) return e;
        if ("function" == typeof e.parseAsync) return e.parseAsync.bind(e);
        if ("function" == typeof e.parse) return e.parse.bind(e);
        if ("function" == typeof e.validateSync) return e.validateSync.bind(e);
        if ("function" == typeof e.create) return e.create.bind(e);
        if ("function" == typeof e.assert) return (t) => (e.assert(t), t);
        throw Error("Could not find a validator fn");
      }
      function x(e, t) {
        let { middlewares: r = [], inputs: n, meta: i, ...o } = t;
        return _({
          ...(0, s.uf)(e, o),
          inputs: [...e.inputs, ...(n ?? [])],
          middlewares: [...e.middlewares, ...r],
          meta: e.meta && i ? { ...e.meta, ...i } : i ?? e.meta,
        });
      }
      function _(e = {}) {
        let t = { procedure: !0, inputs: [], middlewares: [], ...e };
        return {
          _def: t,
          input(e) {
            let r = C(e);
            return x(t, {
              inputs: [e],
              middlewares: [
                (function (e) {
                  let t = async function (t) {
                    let r;
                    let n = await t.getRawInput();
                    try {
                      r = await e(n);
                    } catch (e) {
                      throw new d({ code: "BAD_REQUEST", cause: e });
                    }
                    let i =
                      (0, s.Gv)(t.input) && (0, s.Gv)(r)
                        ? { ...t.input, ...r }
                        : r;
                    return t.next({ input: i });
                  };
                  return (t._type = "input"), t;
                })(r),
              ],
            });
          },
          output(e) {
            let r = C(e);
            return x(t, {
              output: e,
              middlewares: [
                (function (e) {
                  let t = async function ({ next: t }) {
                    let r = await t();
                    if (!r.ok) return r;
                    try {
                      let t = await e(r.data);
                      return { ...r, data: t };
                    } catch (e) {
                      throw new d({
                        message: "Output validation failed",
                        code: "INTERNAL_SERVER_ERROR",
                        cause: e,
                      });
                    }
                  };
                  return (t._type = "output"), t;
                })(r),
              ],
            });
          },
          meta: (e) => x(t, { meta: e }),
          use: (e) =>
            x(t, { middlewares: "_middlewares" in e ? e._middlewares : [e] }),
          unstable_concat: (e) => x(t, e._def),
          query: (e) => k({ ...t, type: "query" }, e),
          mutation: (e) => k({ ...t, type: "mutation" }, e),
          subscription: (e) => k({ ...t, type: "subscription" }, e),
          experimental_caller: (e) => x(t, { caller: e }),
        };
      }
      function k(e, t) {
        let r = x(e, {
            resolver: t,
            middlewares: [
              async function (e) {
                return { marker: E, ok: !0, data: await t(e), ctx: e.ctx };
              },
            ],
          }),
          n = {
            ...r._def,
            type: e.type,
            experimental_caller: !!r._def.caller,
            meta: r._def.meta,
            $types: null,
          },
          i = (function (e) {
            async function t(t) {
              if (!t || !("getRawInput" in t)) throw Error(I);
              let r = await T(0, e, t);
              if (!r)
                throw new d({
                  code: "INTERNAL_SERVER_ERROR",
                  message:
                    "No result from middlewares - did you forget to `return next()`?",
                });
              if (!r.ok) throw r.error;
              return r.data;
            }
            return (t._def = e), t;
          })(r._def),
          o = r._def.caller;
        if (!o) return i;
        let a = async (...e) => await o({ args: e, invoke: i, _def: n });
        return (a._def = n), a;
      }
      let I = `
This is a client-only function.
If you want to call this function on the server, see https://trpc.io/docs/v11/server/server-side-calls
`.trim();
      async function T(e, t, r) {
        try {
          let n = t.middlewares[e];
          return await n({
            ...r,
            meta: t.meta,
            input: r.input,
            next: (n) =>
              T(e + 1, t, {
                ...r,
                ctx: n?.ctx ? { ...r.ctx, ...n.ctx } : r.ctx,
                input: n && "input" in n ? n.input : r.input,
                getRawInput: n?.getRawInput ?? r.getRawInput,
              }),
          });
        } catch (e) {
          return { ok: !1, error: u(e), marker: E };
        }
      }
      var S = r(37151);
      let O = {
          _ctx: null,
          _errorShape: null,
          _meta: null,
          queries: {},
          mutations: {},
          subscriptions: {},
          errorFormatter: A,
          transformer: v,
        },
        B = ["then", "call", "apply"];
      function N(e) {
        return function (t) {
          let r = new Set(Object.keys(t).filter((e) => B.includes(e)));
          if (r.size > 0)
            throw Error(
              "Reserved words used in `router({})` call: " +
                Array.from(r).join(", ")
            );
          let n = (0, s.QQ)({}),
            i = (function e(t, r = []) {
              let i = (0, s.QQ)({});
              for (let [o, a] of Object.entries(t ?? {})) {
                if (a._def && "router" in a._def) {
                  i[o] = e(a._def.record, [...r, o]);
                  continue;
                }
                if ("function" != typeof a) {
                  i[o] = e(a, [...r, o]);
                  continue;
                }
                let t = [...r, o].join(".");
                if (n[t]) throw Error(`Duplicate key: ${t}`);
                (n[t] = a), (i[o] = a);
              }
              return i;
            })(t),
            o = { _config: e, router: !0, procedures: n, ...O, record: i };
          return { ...i, _def: o, createCaller: P()({ _def: o }) };
        };
      }
      function P() {
        return function (e) {
          let t = e._def;
          return function (e, r) {
            return o(async ({ path: n, args: i }) => {
              let o;
              let a = n.join(".");
              if (1 === n.length && "_def" === n[0]) return t;
              let l = t.procedures[a];
              try {
                return (
                  (o = (0, s.Tn)(e) ? await Promise.resolve(e()) : e),
                  await l({
                    path: a,
                    getRawInput: async () => i[0],
                    ctx: o,
                    type: l._def.type,
                    signal: r?.signal,
                  })
                );
              } catch (e) {
                throw (
                  (r?.onError?.({
                    ctx: o,
                    error: u(e),
                    input: i[0],
                    path: a,
                    type: l._def.type,
                  }),
                  e)
                );
              }
            });
          };
        };
      }
      function R(...e) {
        let t = (0, s.uf)({}, ...e.map((e) => e._def.record));
        return N({
          errorFormatter: e.reduce((e, t) => {
            if (
              t._def._config.errorFormatter &&
              t._def._config.errorFormatter !== A
            ) {
              if (e !== A && e !== t._def._config.errorFormatter)
                throw Error("You seem to have several error formatters");
              return t._def._config.errorFormatter;
            }
            return e;
          }, A),
          transformer: e.reduce((e, t) => {
            if (
              t._def._config.transformer &&
              t._def._config.transformer !== v
            ) {
              if (e !== v && e !== t._def._config.transformer)
                throw Error("You seem to have several transformers");
              return t._def._config.transformer;
            }
            return e;
          }, v),
          isDev: e.every((e) => e._def._config.isDev),
          allowOutsideOfServer: e.every(
            (e) => e._def._config.allowOutsideOfServer
          ),
          isServer: e.every((e) => e._def._config.isServer),
          $types: e[0]?._def._config.$types,
        })(t);
      }
      class M {
        context() {
          return new M();
        }
        meta() {
          return new M();
        }
        create(e) {
          var t;
          let r = {
            ...e,
            transformer:
              "input" in (t = e?.transformer ?? v)
                ? t
                : { input: t, output: t },
            isDev:
              e?.isDev ?? globalThis.process?.env.NODE_ENV !== "production",
            allowOutsideOfServer: e?.allowOutsideOfServer ?? !1,
            errorFormatter: e?.errorFormatter ?? A,
            isServer: e?.isServer ?? S.N,
            $types: null,
          };
          if (!(e?.isServer ?? S.N) && e?.allowOutsideOfServer !== !0)
            throw Error(
              "You're trying to use @trpc/server in a non-server environment. This is not supported by default."
            );
          return {
            _config: r,
            procedure: _({ meta: e?.defaultMeta }),
            middleware: function (e) {
              return (function e(t) {
                return {
                  _middlewares: t,
                  unstable_pipe: (r) =>
                    e([...t, ...("_middlewares" in r ? r._middlewares : [r])]),
                };
              })([e]);
            },
            router: N(r),
            mergeRouters: R,
            createCallerFactory: P(),
          };
        }
      }
      new M(), r(12456);
    },
    37151: (e, t, r) => {
      "use strict";
      r.d(t, { N: () => n });
      let n =
        "undefined" == typeof window ||
        "Deno" in window ||
        globalThis.process?.env?.NODE_ENV === "test" ||
        !!globalThis.process?.env?.JEST_WORKER_ID ||
        !!globalThis.process?.env?.VITEST_WORKER_ID;
    },
    73755: (e, t, r) => {
      "use strict";
      r.d(t, { Y: () => n });
      let n = {
        PARSE_ERROR: -32700,
        BAD_REQUEST: -32600,
        INTERNAL_SERVER_ERROR: -32603,
        NOT_IMPLEMENTED: -32603,
        BAD_GATEWAY: -32603,
        SERVICE_UNAVAILABLE: -32603,
        GATEWAY_TIMEOUT: -32603,
        UNAUTHORIZED: -32001,
        FORBIDDEN: -32003,
        NOT_FOUND: -32004,
        METHOD_NOT_SUPPORTED: -32005,
        TIMEOUT: -32008,
        CONFLICT: -32009,
        PRECONDITION_FAILED: -32012,
        PAYLOAD_TOO_LARGE: -32013,
        UNSUPPORTED_MEDIA_TYPE: -32015,
        UNPROCESSABLE_CONTENT: -32022,
        TOO_MANY_REQUESTS: -32029,
        CLIENT_CLOSED_REQUEST: -32099,
      };
    },
    12456: (e, t, r) => {
      "use strict";
      r(15074);
    },
    19862: (e, t, r) => {
      "use strict";
      var n, i;
      function o(e, t) {
        if (e[Symbol.dispose]) throw Error("Symbol.dispose already exists");
        return (e[Symbol.dispose] = t), e;
      }
      r.d(t, { T: () => o }),
        (n = Symbol).dispose ?? (n.dispose = Symbol()),
        (i = Symbol).asyncDispose ?? (i.asyncDispose = Symbol());
    },
    15074: (e, t, r) => {
      "use strict";
      r.d(t, {
        Gv: () => o,
        IT: () => n,
        QQ: () => s,
        Td: () => c,
        Tn: () => a,
        eF: () => u,
        uf: () => i,
      });
      let n = Symbol();
      function i(e, ...t) {
        let r = Object.assign(Object.create(null), e);
        for (let e of t)
          for (let t in e) {
            if (t in r && r[t] !== e[t]) throw Error(`Duplicate key ${t}`);
            r[t] = e[t];
          }
        return r;
      }
      function o(e) {
        return !!e && !Array.isArray(e) && "object" == typeof e;
      }
      function a(e) {
        return "function" == typeof e;
      }
      function s(e) {
        return Object.assign(Object.create(null), e);
      }
      let l = "function" == typeof Symbol && !!Symbol.asyncIterator;
      function c(e) {
        return l && o(e) && Symbol.asyncIterator in e;
      }
      let u = (e) => e();
    },
    36552: (e, t, r) => {
      "use strict";
      new WeakMap(), Symbol.toStringTag;
    },
    98023: (e, t, r) => {
      "use strict";
      r.d(t, { m: () => l });
      var n = r(20289),
        i = r(22537),
        o = r(40814),
        a = r(76790),
        s = r(98979);
      function l(e = {}) {
        let t, c, u, d, h, p, f, m, g;
        return "3" === e.version || e.headlessMode
          ? (0, n.U)((n) => ({
              id: "coinbaseWalletSDK",
              name: "Coinbase Wallet",
              type: l.type,
              async connect({ chainId: e } = {}) {
                try {
                  let t = await this.getProvider(),
                    r = (
                      await t.request({ method: "eth_requestAccounts" })
                    ).map((e) => (0, o.b)(e));
                  u ||
                    ((u = this.onAccountsChanged.bind(this)),
                    t.on("accountsChanged", u)),
                    d ||
                      ((d = this.onChainChanged.bind(this)),
                      t.on("chainChanged", d)),
                    h ||
                      ((h = this.onDisconnect.bind(this)),
                      t.on("disconnect", h));
                  let n = await this.getChainId();
                  if (e && n !== e) {
                    let t = await this.switchChain({ chainId: e }).catch(
                      (e) => {
                        if (e.code === a.vx.code) throw e;
                        return { id: n };
                      }
                    );
                    n = t?.id ?? n;
                  }
                  return { accounts: r, chainId: n };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account)/i.test(
                      e.message
                    )
                  )
                    throw new a.vx(e);
                  throw e;
                }
              },
              async disconnect() {
                let e = await this.getProvider();
                u && (e.removeListener("accountsChanged", u), (u = void 0)),
                  d && (e.removeListener("chainChanged", d), (d = void 0)),
                  h && (e.removeListener("disconnect", h), (h = void 0)),
                  e.disconnect(),
                  e.close();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, o.b)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              async getProvider() {
                if (!c) {
                  t = new (await (async () => {
                    let { default: e } = await Promise.all([
                      r.e(5927),
                      r.e(8101),
                      r.e(9466),
                    ]).then(r.t.bind(r, 48101, 19));
                    return "function" != typeof e &&
                      "function" == typeof e.default
                      ? e.default
                      : e;
                  })())({ ...e, reloadOnDisconnect: !1 });
                  let i = t.walletExtension?.getChainId(),
                    o =
                      n.chains.find((t) =>
                        e.chainId ? t.id === e.chainId : t.id === i
                      ) || n.chains[0],
                    a = e.chainId || o?.id,
                    s = e.jsonRpcUrl || o?.rpcUrls.default.http[0];
                  c = t.makeWeb3Provider(s, a);
                }
                return c;
              },
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch {
                  return !1;
                }
              },
              async switchChain({ addEthereumChainParameter: e, chainId: t }) {
                let r = n.chains.find((e) => e.id === t);
                if (!r) throw new a.ch(new i.nk());
                let o = await this.getProvider();
                try {
                  return (
                    await o.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, s.cK)(r.id) }],
                    }),
                    r
                  );
                } catch (n) {
                  if (4902 === n.code)
                    try {
                      let n, i;
                      (n = e?.blockExplorerUrls
                        ? e.blockExplorerUrls
                        : r.blockExplorers?.default.url
                        ? [r.blockExplorers?.default.url]
                        : []),
                        (i = e?.rpcUrls?.length
                          ? e.rpcUrls
                          : [r.rpcUrls.default?.http[0] ?? ""]);
                      let a = {
                        blockExplorerUrls: n,
                        chainId: (0, s.cK)(t),
                        chainName: e?.chainName ?? r.name,
                        iconUrls: e?.iconUrls,
                        nativeCurrency: e?.nativeCurrency ?? r.nativeCurrency,
                        rpcUrls: i,
                      };
                      return (
                        await o.request({
                          method: "wallet_addEthereumChain",
                          params: [a],
                        }),
                        r
                      );
                    } catch (e) {
                      throw new a.vx(e);
                    }
                  throw new a.ch(n);
                }
              },
              onAccountsChanged(e) {
                0 === e.length
                  ? this.onDisconnect()
                  : n.emitter.emit("change", {
                      accounts: e.map((e) => (0, o.b)(e)),
                    });
              },
              onChainChanged(e) {
                let t = Number(e);
                n.emitter.emit("change", { chainId: t });
              },
              async onDisconnect(e) {
                n.emitter.emit("disconnect");
                let t = await this.getProvider();
                u && (t.removeListener("accountsChanged", u), (u = void 0)),
                  d && (t.removeListener("chainChanged", d), (d = void 0)),
                  h && (t.removeListener("disconnect", h), (h = void 0));
              },
            }))
          : (0, n.U)((t) => ({
              id: "coinbaseWalletSDK",
              name: "Coinbase Wallet",
              rdns: "com.coinbase.wallet",
              type: l.type,
              async connect({ chainId: e, ...t } = {}) {
                try {
                  let r = await this.getProvider(),
                    n = (
                      await r.request({
                        method: "eth_requestAccounts",
                        params:
                          "instantOnboarding" in t && t.instantOnboarding
                            ? [{ onboarding: "instant" }]
                            : [],
                      })
                    ).map((e) => (0, o.b)(e));
                  f ||
                    ((f = this.onAccountsChanged.bind(this)),
                    r.on("accountsChanged", f)),
                    m ||
                      ((m = this.onChainChanged.bind(this)),
                      r.on("chainChanged", m)),
                    g ||
                      ((g = this.onDisconnect.bind(this)),
                      r.on("disconnect", g));
                  let i = await this.getChainId();
                  if (e && i !== e) {
                    let t = await this.switchChain({ chainId: e }).catch(
                      (e) => {
                        if (e.code === a.vx.code) throw e;
                        return { id: i };
                      }
                    );
                    i = t?.id ?? i;
                  }
                  return { accounts: n, chainId: i };
                } catch (e) {
                  if (
                    /(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(
                      e.message
                    )
                  )
                    throw new a.vx(e);
                  throw e;
                }
              },
              async disconnect() {
                let e = await this.getProvider();
                f && (e.removeListener("accountsChanged", f), (f = void 0)),
                  m && (e.removeListener("chainChanged", m), (m = void 0)),
                  g && (e.removeListener("disconnect", g), (g = void 0)),
                  e.disconnect(),
                  e.close?.();
              },
              async getAccounts() {
                let e = await this.getProvider();
                return (await e.request({ method: "eth_accounts" })).map((e) =>
                  (0, o.b)(e)
                );
              },
              async getChainId() {
                let e = await this.getProvider();
                return Number(await e.request({ method: "eth_chainId" }));
              },
              async getProvider() {
                if (!p) {
                  let n =
                      "string" == typeof e.preference
                        ? { options: e.preference }
                        : {
                            ...e.preference,
                            options: e.preference?.options ?? "all",
                          },
                    { createCoinbaseWalletSDK: i } = await Promise.all([
                      r.e(5927),
                      r.e(8307),
                      r.e(2361),
                    ]).then(r.bind(r, 22361));
                  p = i({
                    ...e,
                    appChainIds: t.chains.map((e) => e.id),
                    preference: n,
                  }).getProvider();
                }
                return p;
              },
              async isAuthorized() {
                try {
                  return !!(await this.getAccounts()).length;
                } catch {
                  return !1;
                }
              },
              async switchChain({ addEthereumChainParameter: e, chainId: r }) {
                let n = t.chains.find((e) => e.id === r);
                if (!n) throw new a.ch(new i.nk());
                let o = await this.getProvider();
                try {
                  return (
                    await o.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, s.cK)(n.id) }],
                    }),
                    n
                  );
                } catch (t) {
                  if (4902 === t.code)
                    try {
                      let t, i;
                      (t = e?.blockExplorerUrls
                        ? e.blockExplorerUrls
                        : n.blockExplorers?.default.url
                        ? [n.blockExplorers?.default.url]
                        : []),
                        (i = e?.rpcUrls?.length
                          ? e.rpcUrls
                          : [n.rpcUrls.default?.http[0] ?? ""]);
                      let a = {
                        blockExplorerUrls: t,
                        chainId: (0, s.cK)(r),
                        chainName: e?.chainName ?? n.name,
                        iconUrls: e?.iconUrls,
                        nativeCurrency: e?.nativeCurrency ?? n.nativeCurrency,
                        rpcUrls: i,
                      };
                      return (
                        await o.request({
                          method: "wallet_addEthereumChain",
                          params: [a],
                        }),
                        n
                      );
                    } catch (e) {
                      throw new a.vx(e);
                    }
                  throw new a.ch(t);
                }
              },
              onAccountsChanged(e) {
                0 === e.length
                  ? this.onDisconnect()
                  : t.emitter.emit("change", {
                      accounts: e.map((e) => (0, o.b)(e)),
                    });
              },
              onChainChanged(e) {
                let r = Number(e);
                t.emitter.emit("change", { chainId: r });
              },
              async onDisconnect(e) {
                t.emitter.emit("disconnect");
                let r = await this.getProvider();
                f && (r.removeListener("accountsChanged", f), (f = void 0)),
                  m && (r.removeListener("chainChanged", m), (m = void 0)),
                  g && (r.removeListener("disconnect", g), (g = void 0));
              },
            }));
      }
      l.type = "coinbaseWallet";
    },
    70559: (e, t, r) => {
      "use strict";
      r.d(t, { g: () => s });
      var n = r(20289),
        i = r(77434),
        o = r(40814),
        a = r(40772);
      function s(e = {}) {
        let t, l;
        let { shimDisconnect: c = !1 } = e;
        return (0, n.U)((n) => ({
          id: "safe",
          name: "Safe",
          type: s.type,
          async connect() {
            let e = await this.getProvider();
            if (!e) throw new i.N();
            let t = await this.getAccounts(),
              r = await this.getChainId();
            return (
              l || ((l = this.onDisconnect.bind(this)), e.on("disconnect", l)),
              c && (await n.storage?.removeItem("safe.disconnected")),
              { accounts: t, chainId: r }
            );
          },
          async disconnect() {
            let e = await this.getProvider();
            if (!e) throw new i.N();
            l && (e.removeListener("disconnect", l), (l = void 0)),
              c && (await n.storage?.setItem("safe.disconnected", !0));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new i.N();
            return (await e.request({ method: "eth_accounts" })).map(o.b);
          },
          async getProvider() {
            if ("undefined" != typeof window && window?.parent !== window) {
              if (!t) {
                let { default: n } = await Promise.all([
                    r.e(6897),
                    r.e(3344),
                  ]).then(r.bind(r, 43344)),
                  i = new n(e),
                  o = await (0, a.w)(() => i.safe.getInfo(), {
                    timeout: e.unstable_getInfoTimeout ?? 10,
                  });
                if (!o) throw Error("Could not load Safe information");
                t = new (await (async () => {
                  let e = await Promise.all([
                    r.e(6897),
                    r.e(8307),
                    r.e(3190),
                  ]).then(r.t.bind(r, 3190, 19));
                  return "function" != typeof e.SafeAppProvider &&
                    "function" == typeof e.default.SafeAppProvider
                    ? e.default.SafeAppProvider
                    : e.SafeAppProvider;
                })())(o, i);
              }
              return t;
            }
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new i.N();
            return Number(e.chainId);
          },
          async isAuthorized() {
            try {
              if (c && (await n.storage?.getItem("safe.disconnected")))
                return !1;
              return !!(await this.getAccounts()).length;
            } catch {
              return !1;
            }
          },
          onAccountsChanged() {},
          onChainChanged() {},
          onDisconnect() {
            n.emitter.emit("disconnect");
          },
        }));
      }
      s.type = "safe";
    },
    48833: (e, t, r) => {
      "use strict";
      r.d(t, { u: () => c });
      var n = r(20289),
        i = r(77434),
        o = r(22537),
        a = r(40814),
        s = r(76790),
        l = r(98979);
      function c(e) {
        let t, u, d, h, p, f, m, g;
        let y = e.isNewChainsStale ?? !0;
        return (0, n.U)((n) => ({
          id: "walletConnect",
          name: "WalletConnect",
          type: c.type,
          async setup() {
            let e = await this.getProvider().catch(() => null);
            e &&
              (p || ((p = this.onConnect.bind(this)), e.on("connect", p)),
              m ||
                ((m = this.onSessionDelete.bind(this)),
                e.on("session_delete", m)));
          },
          async connect({ chainId: e, ...t } = {}) {
            try {
              let r = await this.getProvider();
              if (!r) throw new i.N();
              f || ((f = this.onDisplayUri), r.on("display_uri", f));
              let o = e;
              if (!o) {
                let e = (await n.storage?.getItem("state")) ?? {};
                o = n.chains.some((t) => t.id === e.chainId)
                  ? e.chainId
                  : n.chains[0]?.id;
              }
              if (!o) throw Error("No chains found on connector.");
              let s = await this.isChainsStale();
              if ((r.session && s && (await r.disconnect()), !r.session || s)) {
                let e = n.chains.filter((e) => e.id !== o).map((e) => e.id);
                await r.connect({
                  optionalChains: [o, ...e],
                  ...("pairingTopic" in t
                    ? { pairingTopic: t.pairingTopic }
                    : {}),
                }),
                  this.setRequestedChainsIds(n.chains.map((e) => e.id));
              }
              let l = (await r.enable()).map((e) => (0, a.b)(e)),
                c = await this.getChainId();
              return (
                f && (r.removeListener("display_uri", f), (f = void 0)),
                p && (r.removeListener("connect", p), (p = void 0)),
                d ||
                  ((d = this.onAccountsChanged.bind(this)),
                  r.on("accountsChanged", d)),
                h ||
                  ((h = this.onChainChanged.bind(this)),
                  r.on("chainChanged", h)),
                g ||
                  ((g = this.onDisconnect.bind(this)), r.on("disconnect", g)),
                m ||
                  ((m = this.onSessionDelete.bind(this)),
                  r.on("session_delete", m)),
                { accounts: l, chainId: c }
              );
            } catch (e) {
              if (/(user rejected|connection request reset)/i.test(e?.message))
                throw new s.vx(e);
              throw e;
            }
          },
          async disconnect() {
            let e = await this.getProvider();
            try {
              await e?.disconnect();
            } catch (e) {
              if (!/No matching key/i.test(e.message)) throw e;
            } finally {
              h && (e?.removeListener("chainChanged", h), (h = void 0)),
                g && (e?.removeListener("disconnect", g), (g = void 0)),
                p || ((p = this.onConnect.bind(this)), e?.on("connect", p)),
                d && (e?.removeListener("accountsChanged", d), (d = void 0)),
                m && (e?.removeListener("session_delete", m), (m = void 0)),
                this.setRequestedChainsIds([]);
            }
          },
          async getAccounts() {
            return (await this.getProvider()).accounts.map((e) => (0, a.b)(e));
          },
          async getProvider({ chainId: i } = {}) {
            async function o() {
              let t = n.chains.map((e) => e.id);
              if (!t.length) return;
              let { EthereumProvider: i } = await Promise.all([
                r.e(6237),
                r.e(5927),
                r.e(5855),
                r.e(1968),
              ]).then(r.bind(r, 96379));
              return await i.init({
                ...e,
                disableProviderPing: !0,
                optionalChains: t,
                projectId: e.projectId,
                rpcMap: Object.fromEntries(
                  n.chains.map((e) => {
                    let [t] = (function (e) {
                      let { chain: t } = e,
                        r = t.rpcUrls.default.http[0];
                      if (!e.transports) return [r];
                      let n = e.transports?.[t.id]?.({ chain: t });
                      return (n?.value?.transports || [n]).map(
                        ({ value: e }) => e?.url || r
                      );
                    })({ chain: e, transports: n.transports });
                    return [e.id, t];
                  })
                ),
                showQrModal: e.showQrModal ?? !0,
              });
            }
            return (
              t ||
                (u || (u = o()),
                (t = await u),
                t?.events.setMaxListeners(Number.POSITIVE_INFINITY)),
              i && (await this.switchChain?.({ chainId: i })),
              t
            );
          },
          async getChainId() {
            return (await this.getProvider()).chainId;
          },
          async isAuthorized() {
            try {
              let [e, t] = await Promise.all([
                this.getAccounts(),
                this.getProvider(),
              ]);
              if (!e.length) return !1;
              if ((await this.isChainsStale()) && t.session)
                return await t.disconnect().catch(() => {}), !1;
              return !0;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let r = await this.getProvider();
            if (!r) throw new i.N();
            let a = n.chains.find((e) => e.id === t);
            if (!a) throw new s.ch(new o.nk());
            try {
              await Promise.all([
                new Promise((e) => {
                  let r = ({ chainId: i }) => {
                    i === t && (n.emitter.off("change", r), e());
                  };
                  n.emitter.on("change", r);
                }),
                r.request({
                  method: "wallet_switchEthereumChain",
                  params: [{ chainId: (0, l.cK)(t) }],
                }),
              ]);
              let e = await this.getRequestedChainsIds();
              return this.setRequestedChainsIds([...e, t]), a;
            } catch (n) {
              if (/(user rejected)/i.test(n.message)) throw new s.vx(n);
              try {
                let n, i;
                (n = e?.blockExplorerUrls
                  ? e.blockExplorerUrls
                  : a.blockExplorers?.default.url
                  ? [a.blockExplorers?.default.url]
                  : []),
                  (i = e?.rpcUrls?.length
                    ? e.rpcUrls
                    : [...a.rpcUrls.default.http]);
                let o = {
                  blockExplorerUrls: n,
                  chainId: (0, l.cK)(t),
                  chainName: e?.chainName ?? a.name,
                  iconUrls: e?.iconUrls,
                  nativeCurrency: e?.nativeCurrency ?? a.nativeCurrency,
                  rpcUrls: i,
                };
                await r.request({
                  method: "wallet_addEthereumChain",
                  params: [o],
                });
                let s = await this.getRequestedChainsIds();
                return this.setRequestedChainsIds([...s, t]), a;
              } catch (e) {
                throw new s.vx(e);
              }
            }
          },
          onAccountsChanged(e) {
            0 === e.length
              ? this.onDisconnect()
              : n.emitter.emit("change", {
                  accounts: e.map((e) => (0, a.b)(e)),
                });
          },
          onChainChanged(e) {
            let t = Number(e);
            n.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let t = Number(e.chainId),
              r = await this.getAccounts();
            n.emitter.emit("connect", { accounts: r, chainId: t });
          },
          async onDisconnect(e) {
            this.setRequestedChainsIds([]), n.emitter.emit("disconnect");
            let t = await this.getProvider();
            d && (t.removeListener("accountsChanged", d), (d = void 0)),
              h && (t.removeListener("chainChanged", h), (h = void 0)),
              g && (t.removeListener("disconnect", g), (g = void 0)),
              m && (t.removeListener("session_delete", m), (m = void 0)),
              p || ((p = this.onConnect.bind(this)), t.on("connect", p));
          },
          onDisplayUri(e) {
            n.emitter.emit("message", { type: "display_uri", data: e });
          },
          onSessionDelete() {
            this.onDisconnect();
          },
          getNamespaceChainsIds: () =>
            t
              ? t.session?.namespaces.eip155?.accounts?.map((e) =>
                  Number.parseInt(e.split(":")[1] || "")
                ) ?? []
              : [],
          async getRequestedChainsIds() {
            return (
              (await n.storage?.getItem(this.requestedChainsStorageKey)) ?? []
            );
          },
          async isChainsStale() {
            if (!y) return !1;
            let e = n.chains.map((e) => e.id),
              t = this.getNamespaceChainsIds();
            if (t.length && !t.some((t) => e.includes(t))) return !1;
            let r = await this.getRequestedChainsIds();
            return !e.every((e) => r.includes(e));
          },
          async setRequestedChainsIds(e) {
            await n.storage?.setItem(this.requestedChainsStorageKey, e);
          },
          get requestedChainsStorageKey() {
            return `${this.id}.requestedChains`;
          },
        }));
      }
      c.type = "walletConnect";
    },
    20289: (e, t, r) => {
      "use strict";
      function n(e) {
        return e;
      }
      r.d(t, { U: () => n });
    },
    83202: (e, t, r) => {
      "use strict";
      r.d(t, { b: () => d });
      var n = r(40814),
        i = r(76790),
        o = r(40772),
        a = r(9869),
        s = r(98979),
        l = r(22537),
        c = r(77434),
        u = r(20289);
      function d(e = {}) {
        let t, r, f, m;
        let { shimDisconnect: g = !0, unstable_shimAsyncInject: y } = e;
        function b() {
          let t = e.target;
          if ("function" == typeof t) {
            let e = t();
            if (e) return e;
          }
          return "object" == typeof t
            ? t
            : "string" == typeof t
            ? {
                ...(h[t] ?? {
                  id: t,
                  name: `${t[0].toUpperCase()}${t.slice(1)}`,
                  provider: `is${t[0].toUpperCase()}${t.slice(1)}`,
                }),
              }
            : {
                id: "injected",
                name: "Injected",
                provider: (e) => e?.ethereum,
              };
        }
        return (0, u.U)((u) => ({
          get icon() {
            return b().icon;
          },
          get id() {
            return b().id;
          },
          get name() {
            return b().name;
          },
          get supportsSimulation() {
            return !0;
          },
          type: d.type,
          async setup() {
            let r = await this.getProvider();
            r?.on &&
              e.target &&
              (f || ((f = this.onConnect.bind(this)), r.on("connect", f)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                r.on("accountsChanged", t)));
          },
          async connect({ chainId: o, isReconnecting: a } = {}) {
            let s = await this.getProvider();
            if (!s) throw new c.N();
            let l = [];
            if (a) l = await this.getAccounts().catch(() => []);
            else if (g)
              try {
                let e = await s.request({
                  method: "wallet_requestPermissions",
                  params: [{ eth_accounts: {} }],
                });
                (l = e[0]?.caveats?.[0]?.value?.map((e) => n.b(e))).length >
                  0 && (l = await this.getAccounts());
              } catch (e) {
                if (e.code === i.vx.code) throw new i.vx(e);
                if (e.code === i.qZ.code) throw e;
              }
            try {
              l?.length ||
                a ||
                (l = (await s.request({ method: "eth_requestAccounts" })).map(
                  (e) => (0, n.b)(e)
                )),
                f && (s.removeListener("connect", f), (f = void 0)),
                t ||
                  ((t = this.onAccountsChanged.bind(this)),
                  s.on("accountsChanged", t)),
                r ||
                  ((r = this.onChainChanged.bind(this)),
                  s.on("chainChanged", r)),
                m ||
                  ((m = this.onDisconnect.bind(this)), s.on("disconnect", m));
              let c = await this.getChainId();
              if (o && c !== o) {
                let e = await this.switchChain({ chainId: o }).catch((e) => {
                  if (e.code === i.vx.code) throw e;
                  return { id: c };
                });
                c = e?.id ?? c;
              }
              return (
                g && (await u.storage?.removeItem(`${this.id}.disconnected`)),
                e.target ||
                  (await u.storage?.setItem("injected.connected", !0)),
                { accounts: l, chainId: c }
              );
            } catch (e) {
              if (e.code === i.vx.code) throw new i.vx(e);
              if (e.code === i.qZ.code) throw new i.qZ(e);
              throw e;
            }
          },
          async disconnect() {
            let t = await this.getProvider();
            if (!t) throw new c.N();
            r && (t.removeListener("chainChanged", r), (r = void 0)),
              m && (t.removeListener("disconnect", m), (m = void 0)),
              f || ((f = this.onConnect.bind(this)), t.on("connect", f));
            try {
              await (0, o.w)(
                () =>
                  t.request({
                    method: "wallet_revokePermissions",
                    params: [{ eth_accounts: {} }],
                  }),
                { timeout: 100 }
              );
            } catch {}
            g && (await u.storage?.setItem(`${this.id}.disconnected`, !0)),
              e.target || (await u.storage?.removeItem("injected.connected"));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new c.N();
            return (await e.request({ method: "eth_accounts" })).map((e) =>
              (0, n.b)(e)
            );
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new c.N();
            return Number(await e.request({ method: "eth_chainId" }));
          },
          async getProvider() {
            let e;
            if ("undefined" == typeof window) return;
            let t = b();
            return (
              (e =
                "function" == typeof t.provider
                  ? t.provider(window)
                  : "string" == typeof t.provider
                  ? p(window, t.provider)
                  : t.provider) &&
                !e.removeListener &&
                ("off" in e && "function" == typeof e.off
                  ? (e.removeListener = e.off)
                  : (e.removeListener = () => {})),
              e
            );
          },
          async isAuthorized() {
            try {
              if (
                (g && (await u.storage?.getItem(`${this.id}.disconnected`))) ||
                (!e.target && !(await u.storage?.getItem("injected.connected")))
              )
                return !1;
              if (!(await this.getProvider())) {
                if (void 0 !== y && !1 !== y) {
                  let e = async () => (
                      "undefined" != typeof window &&
                        window.removeEventListener("ethereum#initialized", e),
                      !!(await this.getProvider())
                    ),
                    t = "number" == typeof y ? y : 1e3;
                  if (
                    await Promise.race([
                      ...("undefined" != typeof window
                        ? [
                            new Promise((t) =>
                              window.addEventListener(
                                "ethereum#initialized",
                                () => t(e()),
                                { once: !0 }
                              )
                            ),
                          ]
                        : []),
                      new Promise((r) => setTimeout(() => r(e()), t)),
                    ])
                  )
                    return !0;
                }
                throw new c.N();
              }
              return !!(await (0, a.b)(() => this.getAccounts())).length;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let r = await this.getProvider();
            if (!r) throw new c.N();
            let n = u.chains.find((e) => e.id === t);
            if (!n) throw new i.ch(new l.nk());
            let o = new Promise((e) => {
              let r = (n) => {
                "chainId" in n &&
                  n.chainId === t &&
                  (u.emitter.off("change", r), e());
              };
              u.emitter.on("change", r);
            });
            try {
              return (
                await Promise.all([
                  r
                    .request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, s.cK)(t) }],
                    })
                    .then(async () => {
                      (await this.getChainId()) === t &&
                        u.emitter.emit("change", { chainId: t });
                    }),
                  o,
                ]),
                n
              );
            } catch (a) {
              if (4902 === a.code || a?.data?.originalError?.code === 4902)
                try {
                  let a, l;
                  let { default: c, ...d } = n.blockExplorers ?? {};
                  e?.blockExplorerUrls
                    ? (a = e.blockExplorerUrls)
                    : c && (a = [c.url, ...Object.values(d).map((e) => e.url)]),
                    (l = e?.rpcUrls?.length
                      ? e.rpcUrls
                      : [n.rpcUrls.default?.http[0] ?? ""]);
                  let h = {
                    blockExplorerUrls: a,
                    chainId: (0, s.cK)(t),
                    chainName: e?.chainName ?? n.name,
                    iconUrls: e?.iconUrls,
                    nativeCurrency: e?.nativeCurrency ?? n.nativeCurrency,
                    rpcUrls: l,
                  };
                  return (
                    await Promise.all([
                      r
                        .request({
                          method: "wallet_addEthereumChain",
                          params: [h],
                        })
                        .then(async () => {
                          if ((await this.getChainId()) === t)
                            u.emitter.emit("change", { chainId: t });
                          else
                            throw new i.vx(
                              Error(
                                "User rejected switch after adding network."
                              )
                            );
                        }),
                      o,
                    ]),
                    n
                  );
                } catch (e) {
                  throw new i.vx(e);
                }
              if (a.code === i.vx.code) throw new i.vx(a);
              throw new i.ch(a);
            }
          },
          async onAccountsChanged(e) {
            if (0 === e.length) this.onDisconnect();
            else if (u.emitter.listenerCount("connect")) {
              let e = (await this.getChainId()).toString();
              this.onConnect({ chainId: e }),
                g && (await u.storage?.removeItem(`${this.id}.disconnected`));
            } else
              u.emitter.emit("change", { accounts: e.map((e) => (0, n.b)(e)) });
          },
          onChainChanged(e) {
            let t = Number(e);
            u.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let n = await this.getAccounts();
            if (0 === n.length) return;
            let i = Number(e.chainId);
            u.emitter.emit("connect", { accounts: n, chainId: i });
            let o = await this.getProvider();
            o &&
              (f && (o.removeListener("connect", f), (f = void 0)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                o.on("accountsChanged", t)),
              r ||
                ((r = this.onChainChanged.bind(this)), o.on("chainChanged", r)),
              m || ((m = this.onDisconnect.bind(this)), o.on("disconnect", m)));
          },
          async onDisconnect(e) {
            let t = await this.getProvider();
            (e && 1013 === e.code && t && (await this.getAccounts()).length) ||
              (u.emitter.emit("disconnect"),
              t &&
                (r && (t.removeListener("chainChanged", r), (r = void 0)),
                m && (t.removeListener("disconnect", m), (m = void 0)),
                f || ((f = this.onConnect.bind(this)), t.on("connect", f))));
          },
        }));
      }
      d.type = "injected";
      let h = {
        coinbaseWallet: {
          id: "coinbaseWallet",
          name: "Coinbase Wallet",
          provider: (e) =>
            e?.coinbaseWalletExtension
              ? e.coinbaseWalletExtension
              : p(e, "isCoinbaseWallet"),
        },
        metaMask: {
          id: "metaMask",
          name: "MetaMask",
          provider: (e) =>
            p(e, (e) => {
              if (!e.isMetaMask || (e.isBraveWallet && !e._events && !e._state))
                return !1;
              for (let t of [
                "isApexWallet",
                "isAvalanche",
                "isBitKeep",
                "isBlockWallet",
                "isKuCoinWallet",
                "isMathWallet",
                "isOkxWallet",
                "isOKExWallet",
                "isOneInchIOSWallet",
                "isOneInchAndroidWallet",
                "isOpera",
                "isPortal",
                "isRabby",
                "isTokenPocket",
                "isTokenary",
                "isUniswapWallet",
                "isZerion",
              ])
                if (e[t]) return !1;
              return !0;
            }),
        },
        phantom: {
          id: "phantom",
          name: "Phantom",
          provider: (e) =>
            e?.phantom?.ethereum ? e.phantom?.ethereum : p(e, "isPhantom"),
        },
      };
      function p(e, t) {
        function r(e) {
          return "function" == typeof t ? t(e) : "string" != typeof t || e[t];
        }
        let n = e.ethereum;
        return n?.providers
          ? n.providers.find((e) => r(e))
          : n && r(n)
          ? n
          : void 0;
      }
    },
    57024: (e, t, r) => {
      "use strict";
      let n;
      r.d(t, { Z: () => A });
      var i = r(44711);
      let o = (e) => (t, r, n) => {
          let i = n.subscribe;
          return (
            (n.subscribe = (e, t, r) => {
              let o = e;
              if (t) {
                let i = (null == r ? void 0 : r.equalityFn) || Object.is,
                  a = e(n.getState());
                (o = (r) => {
                  let n = e(r);
                  if (!i(a, n)) {
                    let e = a;
                    t((a = n), e);
                  }
                }),
                  (null == r ? void 0 : r.fireImmediately) && t(a, a);
              }
              return i(o);
            }),
            e(t, r, n)
          );
        },
        a = (e) => (t) => {
          try {
            let r = e(t);
            if (r instanceof Promise) return r;
            return {
              then: (e) => a(e)(r),
              catch(e) {
                return this;
              },
            };
          } catch (e) {
            return {
              then(e) {
                return this;
              },
              catch: (t) => a(t)(e),
            };
          }
        },
        s = (e, t) => (r, n, i) => {
          let o,
            s = {
              storage: (function (e, t) {
                let r;
                try {
                  r = e();
                } catch (e) {
                  return;
                }
                return {
                  getItem: (e) => {
                    var t;
                    let n = (e) => (null === e ? null : JSON.parse(e, void 0)),
                      i = null != (t = r.getItem(e)) ? t : null;
                    return i instanceof Promise ? i.then(n) : n(i);
                  },
                  setItem: (e, t) => r.setItem(e, JSON.stringify(t, void 0)),
                  removeItem: (e) => r.removeItem(e),
                };
              })(() => localStorage),
              partialize: (e) => e,
              version: 0,
              merge: (e, t) => ({ ...t, ...e }),
              ...t,
            },
            l = !1,
            c = new Set(),
            u = new Set(),
            d = s.storage;
          if (!d)
            return e(
              (...e) => {
                console.warn(
                  `[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`
                ),
                  r(...e);
              },
              n,
              i
            );
          let h = () => {
              let e = s.partialize({ ...n() });
              return d.setItem(s.name, { state: e, version: s.version });
            },
            p = i.setState;
          i.setState = (e, t) => {
            p(e, t), h();
          };
          let f = e(
            (...e) => {
              r(...e), h();
            },
            n,
            i
          );
          i.getInitialState = () => f;
          let m = () => {
            var e, t;
            if (!d) return;
            (l = !1),
              c.forEach((e) => {
                var t;
                return e(null != (t = n()) ? t : f);
              });
            let i =
              (null == (t = s.onRehydrateStorage)
                ? void 0
                : t.call(s, null != (e = n()) ? e : f)) || void 0;
            return a(d.getItem.bind(d))(s.name)
              .then((e) => {
                if (e) {
                  if ("number" != typeof e.version || e.version === s.version)
                    return [!1, e.state];
                  if (s.migrate) return [!0, s.migrate(e.state, e.version)];
                  console.error(
                    "State loaded from storage couldn't be migrated since no migrate function was provided"
                  );
                }
                return [!1, void 0];
              })
              .then((e) => {
                var t;
                let [i, a] = e;
                if ((r((o = s.merge(a, null != (t = n()) ? t : f)), !0), i))
                  return h();
              })
              .then(() => {
                null == i || i(o, void 0),
                  (o = n()),
                  (l = !0),
                  u.forEach((e) => e(o));
              })
              .catch((e) => {
                null == i || i(void 0, e);
              });
          };
          return (
            (i.persist = {
              setOptions: (e) => {
                (s = { ...s, ...e }), e.storage && (d = e.storage);
              },
              clearStorage: () => {
                null == d || d.removeItem(s.name);
              },
              getOptions: () => s,
              rehydrate: () => m(),
              hasHydrated: () => l,
              onHydrate: (e) => (
                c.add(e),
                () => {
                  c.delete(e);
                }
              ),
              onFinishHydration: (e) => (
                u.add(e),
                () => {
                  u.delete(e);
                }
              ),
            }),
            s.skipHydration || m(),
            o || f
          );
        },
        l = (e) => {
          let t;
          let r = new Set(),
            n = (e, n) => {
              let i = "function" == typeof e ? e(t) : e;
              if (!Object.is(i, t)) {
                let e = t;
                (t = (null != n ? n : "object" != typeof i || null === i)
                  ? i
                  : Object.assign({}, t, i)),
                  r.forEach((r) => r(t, e));
              }
            },
            i = () => t,
            o = {
              setState: n,
              getState: i,
              getInitialState: () => a,
              subscribe: (e) => (r.add(e), () => r.delete(e)),
            },
            a = (t = e(n, i, o));
          return o;
        },
        c = (e) => (e ? l(e) : l);
      var u = r(83202),
        d = r(29761);
      class h {
        constructor(e) {
          Object.defineProperty(this, "uid", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          }),
            Object.defineProperty(this, "_emitter", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new d.b(),
            });
        }
        on(e, t) {
          this._emitter.on(e, t);
        }
        once(e, t) {
          this._emitter.once(e, t);
        }
        off(e, t) {
          this._emitter.off(e, t);
        }
        emit(e, ...t) {
          let r = t[0];
          this._emitter.emit(e, { uid: this.uid, ...r });
        }
        listenerCount(e) {
          return this._emitter.listenerCount(e);
        }
      }
      function p(e, t) {
        return JSON.parse(e, (e, r) => {
          let n = r;
          return (
            n?.__type === "bigint" && (n = BigInt(n.value)),
            n?.__type === "Map" && (n = new Map(n.value)),
            t?.(e, n) ?? n
          );
        });
      }
      function f(e, t) {
        return e.slice(0, t).join(".") || ".";
      }
      function m(e, t) {
        let { length: r } = e;
        for (let n = 0; n < r; ++n) if (e[n] === t) return n + 1;
        return 0;
      }
      function g(e, t, r, n) {
        return JSON.stringify(
          e,
          (function (e, t) {
            let r = "function" == typeof e,
              n = "function" == typeof t,
              i = [],
              o = [];
            return function (a, s) {
              if ("object" == typeof s) {
                if (i.length) {
                  let e = m(i, this);
                  0 === e ? (i[i.length] = this) : (i.splice(e), o.splice(e)),
                    (o[o.length] = a);
                  let r = m(i, s);
                  if (0 !== r)
                    return n ? t.call(this, a, s, f(o, r)) : `[ref=${f(o, r)}]`;
                } else (i[0] = s), (o[0] = a);
              }
              return r ? e.call(this, a, s) : s;
            };
          })((e, r) => {
            let n = r;
            return (
              "bigint" == typeof n &&
                (n = { __type: "bigint", value: r.toString() }),
              n instanceof Map &&
                (n = { __type: "Map", value: Array.from(r.entries()) }),
              t?.(e, n) ?? n
            );
          }, n),
          r ?? void 0
        );
      }
      let y = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
      var b = r(22537);
      let w = 256;
      var v = r(45259);
      function A(e) {
        let t;
        let {
            multiInjectedProviderDiscovery: r = !0,
            storage: a = (function (e) {
              let {
                deserialize: t = p,
                key: r = "wagmi",
                serialize: n = g,
                storage: i = y,
              } = e;
              function o(e) {
                return e instanceof Promise
                  ? e.then((e) => e).catch(() => null)
                  : e;
              }
              return {
                ...i,
                key: r,
                async getItem(e, n) {
                  let a = i.getItem(`${r}.${e}`),
                    s = await o(a);
                  return s ? t(s) ?? null : n ?? null;
                },
                async setItem(e, t) {
                  let a = `${r}.${e}`;
                  null === t
                    ? await o(i.removeItem(a))
                    : await o(i.setItem(a, n(t)));
                },
                async removeItem(e) {
                  await o(i.removeItem(`${r}.${e}`));
                },
              };
            })({
              storage: (function () {
                let e =
                  "undefined" != typeof window && window.localStorage
                    ? window.localStorage
                    : y;
                return {
                  getItem: (t) => e.getItem(t),
                  removeItem(t) {
                    e.removeItem(t);
                  },
                  setItem(t, r) {
                    try {
                      e.setItem(t, r);
                    } catch {}
                  },
                };
              })(),
            }),
            syncConnectedChain: l = !0,
            ssr: d = !1,
            ...f
          } = e,
          m =
            "undefined" != typeof window && r
              ? (function () {
                  let e = new Set(),
                    t = [],
                    r = () =>
                      (function (e) {
                        if ("undefined" == typeof window) return;
                        let t = (t) => e(t.detail);
                        return (
                          window.addEventListener(
                            "eip6963:announceProvider",
                            t
                          ),
                          window.dispatchEvent(
                            new CustomEvent("eip6963:requestProvider")
                          ),
                          () =>
                            window.removeEventListener(
                              "eip6963:announceProvider",
                              t
                            )
                        );
                      })((r) => {
                        t.some(({ info: e }) => e.uuid === r.info.uuid) ||
                          ((t = [...t, r]),
                          e.forEach((e) => e(t, { added: [r] })));
                      }),
                    n = r();
                  return {
                    _listeners: () => e,
                    clear() {
                      e.forEach((e) => e([], { removed: [...t] })), (t = []);
                    },
                    destroy() {
                      this.clear(), e.clear(), n?.();
                    },
                    findProvider: ({ rdns: e }) =>
                      t.find((t) => t.info.rdns === e),
                    getProviders: () => t,
                    reset() {
                      this.clear(), n?.(), (n = r());
                    },
                    subscribe: (r, { emitImmediately: n } = {}) => (
                      e.add(r), n && r(t, { added: t }), () => e.delete(r)
                    ),
                  };
                })()
              : void 0,
          A = c(() => f.chains),
          E = c(() => {
            let e = [],
              t = new Set();
            for (let r of f.connectors ?? []) {
              let n = C(r);
              if ((e.push(n), !d && n.rdns))
                for (let e of "string" == typeof n.rdns ? [n.rdns] : n.rdns)
                  t.add(e);
            }
            if (!d && m)
              for (let r of m.getProviders())
                t.has(r.info.rdns) || e.push(C(x(r)));
            return e;
          });
        function C(e) {
          let t = new h(
              (function (e = 11) {
                if (!n || w + e > 512) {
                  (n = ""), (w = 0);
                  for (let e = 0; e < 256; e++)
                    n += ((256 + 256 * Math.random()) | 0)
                      .toString(16)
                      .substring(1);
                }
                return n.substring(w, w++ + e);
              })()
            ),
            r = {
              ...e({
                emitter: t,
                chains: A.getState(),
                storage: a,
                transports: f.transports,
              }),
              emitter: t,
              uid: t.uid,
            };
          return t.on("connect", B), r.setup?.(), r;
        }
        function x(e) {
          let { info: t } = e,
            r = e.provider;
          return (0, u.b)({ target: { ...t, id: t.rdns, provider: r } });
        }
        let _ = new Map();
        function k() {
          return {
            chainId: A.getState()[0].id,
            connections: new Map(),
            current: null,
            status: "disconnected",
          };
        }
        let I = "0.0.0-canary-";
        t = v.r.startsWith(I)
          ? Number.parseInt(v.r.replace(I, ""))
          : Number.parseInt(v.r.split(".")[0] ?? "0");
        let T = c(
          o(
            a
              ? s(k, {
                  migrate(e, r) {
                    if (r === t) return e;
                    let n = k(),
                      i = S(e, n.chainId);
                    return { ...n, chainId: i };
                  },
                  name: "store",
                  partialize: (e) => ({
                    connections: {
                      __type: "Map",
                      value: Array.from(e.connections.entries()).map(
                        ([e, t]) => {
                          let { id: r, name: n, type: i, uid: o } = t.connector;
                          return [
                            e,
                            {
                              ...t,
                              connector: { id: r, name: n, type: i, uid: o },
                            },
                          ];
                        }
                      ),
                    },
                    chainId: e.chainId,
                    current: e.current,
                  }),
                  merge(e, t) {
                    "object" == typeof e &&
                      e &&
                      "status" in e &&
                      delete e.status;
                    let r = S(e, t.chainId);
                    return { ...t, ...e, chainId: r };
                  },
                  skipHydration: d,
                  storage: a,
                  version: t,
                })
              : k
          )
        );
        function S(e, t) {
          return e &&
            "object" == typeof e &&
            "chainId" in e &&
            "number" == typeof e.chainId &&
            A.getState().some((t) => t.id === e.chainId)
            ? e.chainId
            : t;
        }
        function O(e) {
          T.setState((t) => {
            let r = t.connections.get(e.uid);
            return r
              ? {
                  ...t,
                  connections: new Map(t.connections).set(e.uid, {
                    accounts: e.accounts ?? r.accounts,
                    chainId: e.chainId ?? r.chainId,
                    connector: r.connector,
                  }),
                }
              : t;
          });
        }
        function B(e) {
          "connecting" !== T.getState().status &&
            "reconnecting" !== T.getState().status &&
            T.setState((t) => {
              let r = E.getState().find((t) => t.uid === e.uid);
              return r
                ? (r.emitter.listenerCount("connect") &&
                    r.emitter.off("connect", O),
                  r.emitter.listenerCount("change") ||
                    r.emitter.on("change", O),
                  r.emitter.listenerCount("disconnect") ||
                    r.emitter.on("disconnect", N),
                  {
                    ...t,
                    connections: new Map(t.connections).set(e.uid, {
                      accounts: e.accounts,
                      chainId: e.chainId,
                      connector: r,
                    }),
                    current: e.uid,
                    status: "connected",
                  })
                : t;
            });
        }
        function N(e) {
          T.setState((t) => {
            let r = t.connections.get(e.uid);
            if (r) {
              let e = r.connector;
              e.emitter.listenerCount("change") &&
                r.connector.emitter.off("change", O),
                e.emitter.listenerCount("disconnect") &&
                  r.connector.emitter.off("disconnect", N),
                e.emitter.listenerCount("connect") ||
                  r.connector.emitter.on("connect", B);
            }
            if ((t.connections.delete(e.uid), 0 === t.connections.size))
              return {
                ...t,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            let n = t.connections.values().next().value;
            return {
              ...t,
              connections: new Map(t.connections),
              current: n.connector.uid,
            };
          });
        }
        return (
          T.setState(k()),
          l &&
            T.subscribe(
              ({ connections: e, current: t }) =>
                t ? e.get(t)?.chainId : void 0,
              (e) => {
                if (A.getState().some((t) => t.id === e))
                  return T.setState((t) => ({ ...t, chainId: e ?? t.chainId }));
              }
            ),
          m?.subscribe((e) => {
            let t = new Set(),
              r = new Set();
            for (let e of E.getState())
              if ((t.add(e.id), e.rdns))
                for (let t of "string" == typeof e.rdns ? [e.rdns] : e.rdns)
                  r.add(t);
            let n = [];
            for (let i of e) {
              if (r.has(i.info.rdns)) continue;
              let e = C(x(i));
              t.has(e.id) || n.push(e);
            }
            (!a || T.persist.hasHydrated()) &&
              E.setState((e) => [...e, ...n], !0);
          }),
          {
            get chains() {
              return A.getState();
            },
            get connectors() {
              return E.getState();
            },
            storage: a,
            getClient: function (e = {}) {
              let t;
              let r = e.chainId ?? T.getState().chainId,
                n = A.getState().find((e) => e.id === r);
              if (e.chainId && !n) throw new b.nk();
              {
                let e = _.get(T.getState().chainId);
                if (e && !n) return e;
                if (!n) throw new b.nk();
              }
              {
                let e = _.get(r);
                if (e) return e;
              }
              if (f.client) t = f.client({ chain: n });
              else {
                let e = n.id,
                  r = A.getState().map((e) => e.id),
                  o = {};
                for (let [t, n] of Object.entries(f))
                  if (
                    "chains" !== t &&
                    "client" !== t &&
                    "connectors" !== t &&
                    "transports" !== t
                  ) {
                    if ("object" == typeof n) {
                      if (e in n) o[t] = n[e];
                      else {
                        if (r.some((e) => e in n)) continue;
                        o[t] = n;
                      }
                    } else o[t] = n;
                  }
                t = (0, i.U)({
                  ...o,
                  chain: n,
                  batch: o.batch ?? { multicall: !0 },
                  transport: (t) => f.transports[e]({ ...t, connectors: E }),
                });
              }
              return _.set(r, t), t;
            },
            get state() {
              return T.getState();
            },
            setState(e) {
              let t;
              t = "function" == typeof e ? e(T.getState()) : e;
              let r = k();
              "object" != typeof t && (t = r),
                Object.keys(r).some((e) => !(e in t)) && (t = r),
                T.setState(t, !0);
            },
            subscribe: (e, t, r) =>
              T.subscribe(
                e,
                t,
                r ? { ...r, fireImmediately: r.emitImmediately } : void 0
              ),
            _internal: {
              mipd: m,
              store: T,
              ssr: !!d,
              syncConnectedChain: l,
              transports: f.transports,
              chains: {
                setState(e) {
                  let t = "function" == typeof e ? e(A.getState()) : e;
                  if (0 !== t.length) return A.setState(t, !0);
                },
                subscribe: (e) => A.subscribe(e),
              },
              connectors: {
                providerDetailToConnector: x,
                setup: C,
                setState: (e) =>
                  E.setState("function" == typeof e ? e(E.getState()) : e, !0),
                subscribe: (e) => E.subscribe(e),
              },
              events: { change: O, connect: B, disconnect: N },
            },
          }
        );
      }
    },
    31027: (e, t, r) => {
      "use strict";
      r.d(t, { F: () => a });
      var n = r(43463);
      let i = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
        o = n.$,
        a = (e, t) => (r) => {
          var n;
          if ((null == t ? void 0 : t.variants) == null)
            return o(
              e,
              null == r ? void 0 : r.class,
              null == r ? void 0 : r.className
            );
          let { variants: a, defaultVariants: s } = t,
            l = Object.keys(a).map((e) => {
              let t = null == r ? void 0 : r[e],
                n = null == s ? void 0 : s[e];
              if (null === t) return null;
              let o = i(t) || i(n);
              return a[e][o];
            }),
            c =
              r &&
              Object.entries(r).reduce((e, t) => {
                let [r, n] = t;
                return void 0 === n || (e[r] = n), e;
              }, {});
          return o(
            e,
            l,
            null == t
              ? void 0
              : null === (n = t.compoundVariants) || void 0 === n
              ? void 0
              : n.reduce((e, t) => {
                  let { class: r, className: n, ...i } = t;
                  return Object.entries(i).every((e) => {
                    let [t, r] = e;
                    return Array.isArray(r)
                      ? r.includes({ ...s, ...c }[t])
                      : { ...s, ...c }[t] === r;
                  })
                    ? [...e, r, n]
                    : e;
                }, []),
            null == r ? void 0 : r.class,
            null == r ? void 0 : r.className
          );
        };
    },
    43463: (e, t, r) => {
      "use strict";
      function n() {
        for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)
          (e = arguments[r]) &&
            (t = (function e(t) {
              var r,
                n,
                i = "";
              if ("string" == typeof t || "number" == typeof t) i += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var o = t.length;
                  for (r = 0; r < o; r++)
                    t[r] && (n = e(t[r])) && (i && (i += " "), (i += n));
                } else for (n in t) t[n] && (i && (i += " "), (i += n));
              }
              return i;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      }
      r.d(t, { $: () => n, A: () => i });
      let i = n;
    },
    29761: (e, t, r) => {
      "use strict";
      r.d(t, { b: () => n });
      var n = r(25778);
    },
    30814: (e, t, r) => {
      "use strict";
      r.d(t, { l$: () => E, oR: () => y });
      var n = r(12115),
        i = r(47650),
        o = (e) => {
          switch (e) {
            case "success":
              return l;
            case "info":
              return u;
            case "warning":
              return c;
            case "error":
              return d;
            default:
              return null;
          }
        },
        a = Array(12).fill(0),
        s = (e) => {
          let { visible: t, className: r } = e;
          return n.createElement(
            "div",
            {
              className: ["sonner-loading-wrapper", r]
                .filter(Boolean)
                .join(" "),
              "data-visible": t,
            },
            n.createElement(
              "div",
              { className: "sonner-spinner" },
              a.map((e, t) =>
                n.createElement("div", {
                  className: "sonner-loading-bar",
                  key: "spinner-bar-".concat(t),
                })
              )
            )
          );
        },
        l = n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          n.createElement("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
            clipRule: "evenodd",
          })
        ),
        c = n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          n.createElement("path", {
            fillRule: "evenodd",
            d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
            clipRule: "evenodd",
          })
        ),
        u = n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          n.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
            clipRule: "evenodd",
          })
        ),
        d = n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            height: "20",
            width: "20",
          },
          n.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
            clipRule: "evenodd",
          })
        ),
        h = n.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "12",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          n.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
          n.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
        ),
        p = () => {
          let [e, t] = n.useState(document.hidden);
          return (
            n.useEffect(() => {
              let e = () => {
                t(document.hidden);
              };
              return (
                document.addEventListener("visibilitychange", e),
                () => window.removeEventListener("visibilitychange", e)
              );
            }, []),
            e
          );
        },
        f = 1,
        m = new (class {
          constructor() {
            (this.subscribe = (e) => (
              this.subscribers.push(e),
              () => {
                let t = this.subscribers.indexOf(e);
                this.subscribers.splice(t, 1);
              }
            )),
              (this.publish = (e) => {
                this.subscribers.forEach((t) => t(e));
              }),
              (this.addToast = (e) => {
                this.publish(e), (this.toasts = [...this.toasts, e]);
              }),
              (this.create = (e) => {
                var t;
                let { message: r, ...n } = e,
                  i =
                    "number" == typeof (null == e ? void 0 : e.id) ||
                    (null == (t = e.id) ? void 0 : t.length) > 0
                      ? e.id
                      : f++,
                  o = this.toasts.find((e) => e.id === i),
                  a = void 0 === e.dismissible || e.dismissible;
                return (
                  o
                    ? (this.toasts = this.toasts.map((t) =>
                        t.id === i
                          ? (this.publish({ ...t, ...e, id: i, title: r }),
                            { ...t, ...e, id: i, dismissible: a, title: r })
                          : t
                      ))
                    : this.addToast({ title: r, ...n, dismissible: a, id: i }),
                  i
                );
              }),
              (this.dismiss = (e) => (
                e ||
                  this.toasts.forEach((e) => {
                    this.subscribers.forEach((t) =>
                      t({ id: e.id, dismiss: !0 })
                    );
                  }),
                this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
                e
              )),
              (this.message = (e, t) => this.create({ ...t, message: e })),
              (this.error = (e, t) =>
                this.create({ ...t, message: e, type: "error" })),
              (this.success = (e, t) =>
                this.create({ ...t, type: "success", message: e })),
              (this.info = (e, t) =>
                this.create({ ...t, type: "info", message: e })),
              (this.warning = (e, t) =>
                this.create({ ...t, type: "warning", message: e })),
              (this.loading = (e, t) =>
                this.create({ ...t, type: "loading", message: e })),
              (this.promise = (e, t) => {
                let r;
                if (!t) return;
                void 0 !== t.loading &&
                  (r = this.create({
                    ...t,
                    promise: e,
                    type: "loading",
                    message: t.loading,
                    description:
                      "function" != typeof t.description
                        ? t.description
                        : void 0,
                  }));
                let i = e instanceof Promise ? e : e(),
                  o = void 0 !== r,
                  a,
                  s = i
                    .then(async (e) => {
                      if (((a = ["resolve", e]), n.isValidElement(e)))
                        (o = !1),
                          this.create({ id: r, type: "default", message: e });
                      else if (g(e) && !e.ok) {
                        o = !1;
                        let n =
                            "function" == typeof t.error
                              ? await t.error(
                                  "HTTP error! status: ".concat(e.status)
                                )
                              : t.error,
                          i =
                            "function" == typeof t.description
                              ? await t.description(
                                  "HTTP error! status: ".concat(e.status)
                                )
                              : t.description;
                        this.create({
                          id: r,
                          type: "error",
                          message: n,
                          description: i,
                        });
                      } else if (void 0 !== t.success) {
                        o = !1;
                        let n =
                            "function" == typeof t.success
                              ? await t.success(e)
                              : t.success,
                          i =
                            "function" == typeof t.description
                              ? await t.description(e)
                              : t.description;
                        this.create({
                          id: r,
                          type: "success",
                          message: n,
                          description: i,
                        });
                      }
                    })
                    .catch(async (e) => {
                      if (((a = ["reject", e]), void 0 !== t.error)) {
                        o = !1;
                        let n =
                            "function" == typeof t.error
                              ? await t.error(e)
                              : t.error,
                          i =
                            "function" == typeof t.description
                              ? await t.description(e)
                              : t.description;
                        this.create({
                          id: r,
                          type: "error",
                          message: n,
                          description: i,
                        });
                      }
                    })
                    .finally(() => {
                      var e;
                      o && (this.dismiss(r), (r = void 0)),
                        null == (e = t.finally) || e.call(t);
                    }),
                  l = () =>
                    new Promise((e, t) =>
                      s
                        .then(() => ("reject" === a[0] ? t(a[1]) : e(a[1])))
                        .catch(t)
                    );
                return "string" != typeof r && "number" != typeof r
                  ? { unwrap: l }
                  : Object.assign(r, { unwrap: l });
              }),
              (this.custom = (e, t) => {
                let r = (null == t ? void 0 : t.id) || f++;
                return this.create({ jsx: e(r), id: r, ...t }), r;
              }),
              (this.subscribers = []),
              (this.toasts = []);
          }
        })(),
        g = (e) =>
          e &&
          "object" == typeof e &&
          "ok" in e &&
          "boolean" == typeof e.ok &&
          "status" in e &&
          "number" == typeof e.status,
        y = Object.assign(
          (e, t) => {
            let r = (null == t ? void 0 : t.id) || f++;
            return m.addToast({ title: e, ...t, id: r }), r;
          },
          {
            success: m.success,
            info: m.info,
            warning: m.warning,
            error: m.error,
            custom: m.custom,
            message: m.message,
            promise: m.promise,
            dismiss: m.dismiss,
            loading: m.loading,
          },
          { getHistory: () => m.toasts }
        );
      function b(e) {
        return void 0 !== e.label;
      }
      function w() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return t.filter(Boolean).join(" ");
      }
      !(function (e) {
        let { insertAt: t } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!e || "undefined" == typeof document) return;
        let r = document.head || document.getElementsByTagName("head")[0],
          n = document.createElement("style");
        (n.type = "text/css"),
          "top" === t && r.firstChild
            ? r.insertBefore(n, r.firstChild)
            : r.appendChild(n),
          n.styleSheet
            ? (n.styleSheet.cssText = e)
            : n.appendChild(document.createTextNode(e));
      })(
        ':where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}\n'
      );
      var v = (e) => {
        var t, r, i, a, l, c, u, d, f, m, g;
        let {
            invert: y,
            toast: w,
            unstyled: v,
            interacting: A,
            setHeights: E,
            visibleToasts: C,
            heights: x,
            index: _,
            toasts: k,
            expanded: I,
            removeToast: T,
            defaultRichColors: S,
            closeButton: O,
            style: B,
            cancelButtonStyle: N,
            actionButtonStyle: P,
            className: R = "",
            descriptionClassName: M = "",
            duration: D,
            position: L,
            gap: F,
            loadingIcon: j,
            expandByDefault: U,
            classNames: H,
            icons: Q,
            closeButtonAriaLabel: q = "Close toast",
            pauseWhenPageIsHidden: W,
            cn: z,
          } = e,
          [G, Z] = n.useState(!1),
          [K, V] = n.useState(!1),
          [Y, J] = n.useState(!1),
          [X, $] = n.useState(!1),
          [ee, et] = n.useState(!1),
          [er, en] = n.useState(0),
          [ei, eo] = n.useState(0),
          ea = n.useRef(w.duration || D || 4e3),
          es = n.useRef(null),
          el = n.useRef(null),
          ec = 0 === _,
          eu = _ + 1 <= C,
          ed = w.type,
          eh = !1 !== w.dismissible,
          ep = w.className || "",
          ef = w.descriptionClassName || "",
          em = n.useMemo(
            () => x.findIndex((e) => e.toastId === w.id) || 0,
            [x, w.id]
          ),
          eg = n.useMemo(() => {
            var e;
            return null != (e = w.closeButton) ? e : O;
          }, [w.closeButton, O]),
          ey =
            (n.useMemo(() => w.duration || D || 4e3, [w.duration, D]),
            n.useRef(0)),
          eb = n.useRef(0),
          ew = n.useRef(0),
          ev = n.useRef(null),
          [eA, eE] = L.split("-"),
          eC = n.useMemo(
            () => x.reduce((e, t, r) => (r >= em ? e : e + t.height), 0),
            [x, em]
          ),
          ex = p(),
          e_ = w.invert || y,
          ek = "loading" === ed;
        (eb.current = n.useMemo(() => em * F + eC, [em, eC])),
          n.useEffect(() => {
            Z(!0);
          }, []),
          n.useEffect(() => {
            let e = el.current;
            if (e) {
              let t = e.getBoundingClientRect().height;
              return (
                eo(t),
                E((e) => [
                  { toastId: w.id, height: t, position: w.position },
                  ...e,
                ]),
                () => E((e) => e.filter((e) => e.toastId !== w.id))
              );
            }
          }, [E, w.id]),
          n.useLayoutEffect(() => {
            if (!G) return;
            let e = el.current,
              t = e.style.height;
            e.style.height = "auto";
            let r = e.getBoundingClientRect().height;
            (e.style.height = t),
              eo(r),
              E((e) =>
                e.find((e) => e.toastId === w.id)
                  ? e.map((e) => (e.toastId === w.id ? { ...e, height: r } : e))
                  : [{ toastId: w.id, height: r, position: w.position }, ...e]
              );
          }, [G, w.title, w.description, E, w.id]);
        let eI = n.useCallback(() => {
          V(!0),
            en(eb.current),
            E((e) => e.filter((e) => e.toastId !== w.id)),
            setTimeout(() => {
              T(w);
            }, 200);
        }, [w, T, E, eb]);
        return (
          n.useEffect(() => {
            let e;
            if (
              (!w.promise || "loading" !== ed) &&
              w.duration !== 1 / 0 &&
              "loading" !== w.type
            )
              return (
                I || A || (W && ex)
                  ? (() => {
                      if (ew.current < ey.current) {
                        let e = new Date().getTime() - ey.current;
                        ea.current = ea.current - e;
                      }
                      ew.current = new Date().getTime();
                    })()
                  : ea.current !== 1 / 0 &&
                    ((ey.current = new Date().getTime()),
                    (e = setTimeout(() => {
                      var e;
                      null == (e = w.onAutoClose) || e.call(w, w), eI();
                    }, ea.current))),
                () => clearTimeout(e)
              );
          }, [I, A, w, ed, W, ex, eI]),
          n.useEffect(() => {
            w.delete && eI();
          }, [eI, w.delete]),
          n.createElement(
            "li",
            {
              tabIndex: 0,
              ref: el,
              className: z(
                R,
                ep,
                null == H ? void 0 : H.toast,
                null == (t = null == w ? void 0 : w.classNames)
                  ? void 0
                  : t.toast,
                null == H ? void 0 : H.default,
                null == H ? void 0 : H[ed],
                null == (r = null == w ? void 0 : w.classNames) ? void 0 : r[ed]
              ),
              "data-sonner-toast": "",
              "data-rich-colors": null != (i = w.richColors) ? i : S,
              "data-styled": !(w.jsx || w.unstyled || v),
              "data-mounted": G,
              "data-promise": !!w.promise,
              "data-swiped": ee,
              "data-removed": K,
              "data-visible": eu,
              "data-y-position": eA,
              "data-x-position": eE,
              "data-index": _,
              "data-front": ec,
              "data-swiping": Y,
              "data-dismissible": eh,
              "data-type": ed,
              "data-invert": e_,
              "data-swipe-out": X,
              "data-expanded": !!(I || (U && G)),
              style: {
                "--index": _,
                "--toasts-before": _,
                "--z-index": k.length - _,
                "--offset": "".concat(K ? er : eb.current, "px"),
                "--initial-height": U ? "auto" : "".concat(ei, "px"),
                ...B,
                ...w.style,
              },
              onPointerDown: (e) => {
                ek ||
                  !eh ||
                  ((es.current = new Date()),
                  en(eb.current),
                  e.target.setPointerCapture(e.pointerId),
                  "BUTTON" !== e.target.tagName &&
                    (J(!0), (ev.current = { x: e.clientX, y: e.clientY })));
              },
              onPointerUp: () => {
                var e, t, r, n;
                if (X || !eh) return;
                ev.current = null;
                let i = Number(
                    (null == (e = el.current)
                      ? void 0
                      : e.style
                          .getPropertyValue("--swipe-amount")
                          .replace("px", "")) || 0
                  ),
                  o =
                    Math.abs(i) /
                    (new Date().getTime() -
                      (null == (t = es.current) ? void 0 : t.getTime()));
                if (Math.abs(i) >= 20 || o > 0.11) {
                  en(eb.current),
                    null == (r = w.onDismiss) || r.call(w, w),
                    eI(),
                    $(!0),
                    et(!1);
                  return;
                }
                null == (n = el.current) ||
                  n.style.setProperty("--swipe-amount", "0px"),
                  J(!1);
              },
              onPointerMove: (e) => {
                var t, r;
                if (!ev.current || !eh) return;
                let n = e.clientY - ev.current.y,
                  i =
                    (null == (t = window.getSelection())
                      ? void 0
                      : t.toString().length) > 0,
                  o = "top" === eA ? Math.min(0, n) : Math.max(0, n);
                Math.abs(o) > 0 && et(!0),
                  i ||
                    null == (r = el.current) ||
                    r.style.setProperty("--swipe-amount", "".concat(o, "px"));
              },
            },
            eg && !w.jsx
              ? n.createElement(
                  "button",
                  {
                    "aria-label": q,
                    "data-disabled": ek,
                    "data-close-button": !0,
                    onClick:
                      ek || !eh
                        ? () => {}
                        : () => {
                            var e;
                            eI(), null == (e = w.onDismiss) || e.call(w, w);
                          },
                    className: z(
                      null == H ? void 0 : H.closeButton,
                      null == (a = null == w ? void 0 : w.classNames)
                        ? void 0
                        : a.closeButton
                    ),
                  },
                  null != (l = null == Q ? void 0 : Q.close) ? l : h
                )
              : null,
            w.jsx || n.isValidElement(w.title)
              ? w.jsx
                ? w.jsx
                : "function" == typeof w.title
                ? w.title()
                : w.title
              : n.createElement(
                  n.Fragment,
                  null,
                  ed || w.icon || w.promise
                    ? n.createElement(
                        "div",
                        {
                          "data-icon": "",
                          className: z(
                            null == H ? void 0 : H.icon,
                            null == (c = null == w ? void 0 : w.classNames)
                              ? void 0
                              : c.icon
                          ),
                        },
                        w.promise || ("loading" === w.type && !w.icon)
                          ? w.icon ||
                              (function () {
                                var e, t, r;
                                return null != Q && Q.loading
                                  ? n.createElement(
                                      "div",
                                      {
                                        className: z(
                                          null == H ? void 0 : H.loader,
                                          null ==
                                            (e =
                                              null == w ? void 0 : w.classNames)
                                            ? void 0
                                            : e.loader,
                                          "sonner-loader"
                                        ),
                                        "data-visible": "loading" === ed,
                                      },
                                      Q.loading
                                    )
                                  : j
                                  ? n.createElement(
                                      "div",
                                      {
                                        className: z(
                                          null == H ? void 0 : H.loader,
                                          null ==
                                            (t =
                                              null == w ? void 0 : w.classNames)
                                            ? void 0
                                            : t.loader,
                                          "sonner-loader"
                                        ),
                                        "data-visible": "loading" === ed,
                                      },
                                      j
                                    )
                                  : n.createElement(s, {
                                      className: z(
                                        null == H ? void 0 : H.loader,
                                        null ==
                                          (r =
                                            null == w ? void 0 : w.classNames)
                                          ? void 0
                                          : r.loader
                                      ),
                                      visible: "loading" === ed,
                                    });
                              })()
                          : null,
                        "loading" !== w.type
                          ? w.icon || (null == Q ? void 0 : Q[ed]) || o(ed)
                          : null
                      )
                    : null,
                  n.createElement(
                    "div",
                    {
                      "data-content": "",
                      className: z(
                        null == H ? void 0 : H.content,
                        null == (u = null == w ? void 0 : w.classNames)
                          ? void 0
                          : u.content
                      ),
                    },
                    n.createElement(
                      "div",
                      {
                        "data-title": "",
                        className: z(
                          null == H ? void 0 : H.title,
                          null == (d = null == w ? void 0 : w.classNames)
                            ? void 0
                            : d.title
                        ),
                      },
                      "function" == typeof w.title ? w.title() : w.title
                    ),
                    w.description
                      ? n.createElement(
                          "div",
                          {
                            "data-description": "",
                            className: z(
                              M,
                              ef,
                              null == H ? void 0 : H.description,
                              null == (f = null == w ? void 0 : w.classNames)
                                ? void 0
                                : f.description
                            ),
                          },
                          "function" == typeof w.description
                            ? w.description()
                            : w.description
                        )
                      : null
                  ),
                  n.isValidElement(w.cancel)
                    ? w.cancel
                    : w.cancel && b(w.cancel)
                    ? n.createElement(
                        "button",
                        {
                          "data-button": !0,
                          "data-cancel": !0,
                          style: w.cancelButtonStyle || N,
                          onClick: (e) => {
                            var t, r;
                            b(w.cancel) &&
                              eh &&
                              (null == (r = (t = w.cancel).onClick) ||
                                r.call(t, e),
                              eI());
                          },
                          className: z(
                            null == H ? void 0 : H.cancelButton,
                            null == (m = null == w ? void 0 : w.classNames)
                              ? void 0
                              : m.cancelButton
                          ),
                        },
                        w.cancel.label
                      )
                    : null,
                  n.isValidElement(w.action)
                    ? w.action
                    : w.action && b(w.action)
                    ? n.createElement(
                        "button",
                        {
                          "data-button": !0,
                          "data-action": !0,
                          style: w.actionButtonStyle || P,
                          onClick: (e) => {
                            var t, r;
                            b(w.action) &&
                              (null == (r = (t = w.action).onClick) ||
                                r.call(t, e),
                              e.defaultPrevented || eI());
                          },
                          className: z(
                            null == H ? void 0 : H.actionButton,
                            null == (g = null == w ? void 0 : w.classNames)
                              ? void 0
                              : g.actionButton
                          ),
                        },
                        w.action.label
                      )
                    : null
                )
          )
        );
      };
      function A() {
        if ("undefined" == typeof window || "undefined" == typeof document)
          return "ltr";
        let e = document.documentElement.getAttribute("dir");
        return "auto" !== e && e
          ? e
          : window.getComputedStyle(document.documentElement).direction;
      }
      var E = (0, n.forwardRef)(function (e, t) {
        let {
            invert: r,
            position: o = "bottom-right",
            hotkey: a = ["altKey", "KeyT"],
            expand: s,
            closeButton: l,
            className: c,
            offset: u,
            theme: d = "light",
            richColors: h,
            duration: p,
            style: f,
            visibleToasts: g = 3,
            toastOptions: y,
            dir: b = A(),
            gap: E = 14,
            loadingIcon: C,
            icons: x,
            containerAriaLabel: _ = "Notifications",
            pauseWhenPageIsHidden: k,
            cn: I = w,
          } = e,
          [T, S] = n.useState([]),
          O = n.useMemo(
            () =>
              Array.from(
                new Set(
                  [o].concat(T.filter((e) => e.position).map((e) => e.position))
                )
              ),
            [T, o]
          ),
          [B, N] = n.useState([]),
          [P, R] = n.useState(!1),
          [M, D] = n.useState(!1),
          [L, F] = n.useState(
            "system" !== d
              ? d
              : "undefined" != typeof window &&
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light"
          ),
          j = n.useRef(null),
          U = a.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
          H = n.useRef(null),
          Q = n.useRef(!1),
          q = n.useCallback((e) => {
            S((t) => {
              var r;
              return (
                (null != (r = t.find((t) => t.id === e.id)) && r.delete) ||
                  m.dismiss(e.id),
                t.filter((t) => {
                  let { id: r } = t;
                  return r !== e.id;
                })
              );
            });
          }, []);
        return (
          n.useEffect(
            () =>
              m.subscribe((e) => {
                if (e.dismiss) {
                  S((t) =>
                    t.map((t) => (t.id === e.id ? { ...t, delete: !0 } : t))
                  );
                  return;
                }
                setTimeout(() => {
                  i.flushSync(() => {
                    S((t) => {
                      let r = t.findIndex((t) => t.id === e.id);
                      return -1 !== r
                        ? [
                            ...t.slice(0, r),
                            { ...t[r], ...e },
                            ...t.slice(r + 1),
                          ]
                        : [e, ...t];
                    });
                  });
                });
              }),
            []
          ),
          n.useEffect(() => {
            if ("system" !== d) {
              F(d);
              return;
            }
            if (
              ("system" === d &&
                (window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? F("dark")
                  : F("light")),
              "undefined" == typeof window)
            )
              return;
            let e = window.matchMedia("(prefers-color-scheme: dark)");
            try {
              e.addEventListener("change", (e) => {
                let { matches: t } = e;
                F(t ? "dark" : "light");
              });
            } catch (t) {
              e.addListener((e) => {
                let { matches: t } = e;
                try {
                  F(t ? "dark" : "light");
                } catch (e) {
                  console.error(e);
                }
              });
            }
          }, [d]),
          n.useEffect(() => {
            T.length <= 1 && R(!1);
          }, [T]),
          n.useEffect(() => {
            let e = (e) => {
              var t, r;
              a.every((t) => e[t] || e.code === t) &&
                (R(!0), null == (t = j.current) || t.focus()),
                "Escape" === e.code &&
                  (document.activeElement === j.current ||
                    (null != (r = j.current) &&
                      r.contains(document.activeElement))) &&
                  R(!1);
            };
            return (
              document.addEventListener("keydown", e),
              () => document.removeEventListener("keydown", e)
            );
          }, [a]),
          n.useEffect(() => {
            if (j.current)
              return () => {
                H.current &&
                  (H.current.focus({ preventScroll: !0 }),
                  (H.current = null),
                  (Q.current = !1));
              };
          }, [j.current]),
          n.createElement(
            "section",
            {
              "aria-label": "".concat(_, " ").concat(U),
              tabIndex: -1,
              "aria-live": "polite",
              "aria-relevant": "additions text",
              "aria-atomic": "false",
            },
            O.map((e, t) => {
              var i;
              let [o, a] = e.split("-");
              return T.length
                ? n.createElement(
                    "ol",
                    {
                      key: e,
                      dir: "auto" === b ? A() : b,
                      tabIndex: -1,
                      ref: j,
                      className: c,
                      "data-sonner-toaster": !0,
                      "data-theme": L,
                      "data-y-position": o,
                      "data-lifted": P && T.length > 1 && !s,
                      "data-x-position": a,
                      style: {
                        "--front-toast-height": "".concat(
                          (null == (i = B[0]) ? void 0 : i.height) || 0,
                          "px"
                        ),
                        "--offset":
                          "number" == typeof u
                            ? "".concat(u, "px")
                            : u || "32px",
                        "--width": "".concat(356, "px"),
                        "--gap": "".concat(E, "px"),
                        ...f,
                      },
                      onBlur: (e) => {
                        Q.current &&
                          !e.currentTarget.contains(e.relatedTarget) &&
                          ((Q.current = !1),
                          H.current &&
                            (H.current.focus({ preventScroll: !0 }),
                            (H.current = null)));
                      },
                      onFocus: (e) => {
                        (e.target instanceof HTMLElement &&
                          "false" === e.target.dataset.dismissible) ||
                          Q.current ||
                          ((Q.current = !0), (H.current = e.relatedTarget));
                      },
                      onMouseEnter: () => R(!0),
                      onMouseMove: () => R(!0),
                      onMouseLeave: () => {
                        M || R(!1);
                      },
                      onPointerDown: (e) => {
                        (e.target instanceof HTMLElement &&
                          "false" === e.target.dataset.dismissible) ||
                          D(!0);
                      },
                      onPointerUp: () => D(!1),
                    },
                    T.filter(
                      (r) => (!r.position && 0 === t) || r.position === e
                    ).map((t, i) => {
                      var o, a;
                      return n.createElement(v, {
                        key: t.id,
                        icons: x,
                        index: i,
                        toast: t,
                        defaultRichColors: h,
                        duration:
                          null != (o = null == y ? void 0 : y.duration) ? o : p,
                        className: null == y ? void 0 : y.className,
                        descriptionClassName:
                          null == y ? void 0 : y.descriptionClassName,
                        invert: r,
                        visibleToasts: g,
                        closeButton:
                          null != (a = null == y ? void 0 : y.closeButton)
                            ? a
                            : l,
                        interacting: M,
                        position: e,
                        style: null == y ? void 0 : y.style,
                        unstyled: null == y ? void 0 : y.unstyled,
                        classNames: null == y ? void 0 : y.classNames,
                        cancelButtonStyle:
                          null == y ? void 0 : y.cancelButtonStyle,
                        actionButtonStyle:
                          null == y ? void 0 : y.actionButtonStyle,
                        removeToast: q,
                        toasts: T.filter((e) => e.position == t.position),
                        heights: B.filter((e) => e.position == t.position),
                        setHeights: N,
                        expandByDefault: s,
                        gap: E,
                        loadingIcon: C,
                        expanded: P,
                        pauseWhenPageIsHidden: k,
                        cn: I,
                      });
                    })
                  )
                : null;
            })
          )
        );
      });
    },
    23806: (e, t, r) => {
      "use strict";
      r.d(t, { Ay: () => V });
      class n {
        constructor() {
          (this.keyToValue = new Map()), (this.valueToKey = new Map());
        }
        set(e, t) {
          this.keyToValue.set(e, t), this.valueToKey.set(t, e);
        }
        getByKey(e) {
          return this.keyToValue.get(e);
        }
        getByValue(e) {
          return this.valueToKey.get(e);
        }
        clear() {
          this.keyToValue.clear(), this.valueToKey.clear();
        }
      }
      class i {
        constructor(e) {
          (this.generateIdentifier = e), (this.kv = new n());
        }
        register(e, t) {
          this.kv.getByValue(e) ||
            (t || (t = this.generateIdentifier(e)), this.kv.set(t, e));
        }
        clear() {
          this.kv.clear();
        }
        getIdentifier(e) {
          return this.kv.getByValue(e);
        }
        getValue(e) {
          return this.kv.getByKey(e);
        }
      }
      class o extends i {
        constructor() {
          super((e) => e.name), (this.classToAllowedProps = new Map());
        }
        register(e, t) {
          "object" == typeof t
            ? (t.allowProps && this.classToAllowedProps.set(e, t.allowProps),
              super.register(e, t.identifier))
            : super.register(e, t);
        }
        getAllowedProps(e) {
          return this.classToAllowedProps.get(e);
        }
      }
      function a(e, t) {
        Object.entries(e).forEach(([e, r]) => t(r, e));
      }
      function s(e, t) {
        return -1 !== e.indexOf(t);
      }
      function l(e, t) {
        for (let r = 0; r < e.length; r++) {
          let n = e[r];
          if (t(n)) return n;
        }
      }
      class c {
        constructor() {
          this.transfomers = {};
        }
        register(e) {
          this.transfomers[e.name] = e;
        }
        findApplicable(e) {
          return (function (e, t) {
            let r = (function (e) {
              if ("values" in Object) return Object.values(e);
              let t = [];
              for (let r in e) e.hasOwnProperty(r) && t.push(e[r]);
              return t;
            })(e);
            if ("find" in r) return r.find(t);
            for (let e = 0; e < r.length; e++) {
              let n = r[e];
              if (t(n)) return n;
            }
          })(this.transfomers, (t) => t.isApplicable(e));
        }
        findByName(e) {
          return this.transfomers[e];
        }
      }
      let u = (e) => Object.prototype.toString.call(e).slice(8, -1),
        d = (e) => void 0 === e,
        h = (e) => null === e,
        p = (e) =>
          "object" == typeof e &&
          null !== e &&
          e !== Object.prototype &&
          (null === Object.getPrototypeOf(e) ||
            Object.getPrototypeOf(e) === Object.prototype),
        f = (e) => p(e) && 0 === Object.keys(e).length,
        m = (e) => Array.isArray(e),
        g = (e) => "string" == typeof e,
        y = (e) => "number" == typeof e && !isNaN(e),
        b = (e) => "boolean" == typeof e,
        w = (e) => e instanceof Map,
        v = (e) => e instanceof Set,
        A = (e) => "Symbol" === u(e),
        E = (e) => "number" == typeof e && isNaN(e),
        C = (e) => b(e) || h(e) || d(e) || y(e) || g(e) || A(e),
        x = (e) => e === 1 / 0 || e === -1 / 0,
        _ = (e) => e.replace(/\./g, "\\."),
        k = (e) => e.map(String).map(_).join("."),
        I = (e) => {
          let t = [],
            r = "";
          for (let n = 0; n < e.length; n++) {
            let i = e.charAt(n);
            if ("\\" === i && "." === e.charAt(n + 1)) {
              (r += "."), n++;
              continue;
            }
            if ("." === i) {
              t.push(r), (r = "");
              continue;
            }
            r += i;
          }
          let n = r;
          return t.push(n), t;
        };
      function T(e, t, r, n) {
        return { isApplicable: e, annotation: t, transform: r, untransform: n };
      }
      let S = [
        T(
          d,
          "undefined",
          () => null,
          () => void 0
        ),
        T(
          (e) => "bigint" == typeof e,
          "bigint",
          (e) => e.toString(),
          (e) =>
            "undefined" != typeof BigInt
              ? BigInt(e)
              : (console.error("Please add a BigInt polyfill."), e)
        ),
        T(
          (e) => e instanceof Date && !isNaN(e.valueOf()),
          "Date",
          (e) => e.toISOString(),
          (e) => new Date(e)
        ),
        T(
          (e) => e instanceof Error,
          "Error",
          (e, t) => {
            let r = { name: e.name, message: e.message };
            return (
              t.allowedErrorProps.forEach((t) => {
                r[t] = e[t];
              }),
              r
            );
          },
          (e, t) => {
            let r = Error(e.message);
            return (
              (r.name = e.name),
              (r.stack = e.stack),
              t.allowedErrorProps.forEach((t) => {
                r[t] = e[t];
              }),
              r
            );
          }
        ),
        T(
          (e) => e instanceof RegExp,
          "regexp",
          (e) => "" + e,
          (e) =>
            new RegExp(
              e.slice(1, e.lastIndexOf("/")),
              e.slice(e.lastIndexOf("/") + 1)
            )
        ),
        T(
          v,
          "set",
          (e) => [...e.values()],
          (e) => new Set(e)
        ),
        T(
          w,
          "map",
          (e) => [...e.entries()],
          (e) => new Map(e)
        ),
        T(
          (e) => E(e) || x(e),
          "number",
          (e) => (E(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity"),
          Number
        ),
        T(
          (e) => 0 === e && 1 / e == -1 / 0,
          "number",
          () => "-0",
          Number
        ),
        T(
          (e) => e instanceof URL,
          "URL",
          (e) => e.toString(),
          (e) => new URL(e)
        ),
      ];
      function O(e, t, r, n) {
        return { isApplicable: e, annotation: t, transform: r, untransform: n };
      }
      let B = O(
          (e, t) => !!A(e) && !!t.symbolRegistry.getIdentifier(e),
          (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)],
          (e) => e.description,
          (e, t, r) => {
            let n = r.symbolRegistry.getValue(t[1]);
            if (!n) throw Error("Trying to deserialize unknown symbol");
            return n;
          }
        ),
        N = [
          Int8Array,
          Uint8Array,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array,
          Uint8ClampedArray,
        ].reduce((e, t) => ((e[t.name] = t), e), {}),
        P = O(
          (e) => ArrayBuffer.isView(e) && !(e instanceof DataView),
          (e) => ["typed-array", e.constructor.name],
          (e) => [...e],
          (e, t) => {
            let r = N[t[1]];
            if (!r) throw Error("Trying to deserialize unknown typed array");
            return new r(e);
          }
        );
      function R(e, t) {
        return (
          !!e?.constructor && !!t.classRegistry.getIdentifier(e.constructor)
        );
      }
      let M = O(
          R,
          (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)],
          (e, t) => {
            let r = t.classRegistry.getAllowedProps(e.constructor);
            if (!r) return { ...e };
            let n = {};
            return (
              r.forEach((t) => {
                n[t] = e[t];
              }),
              n
            );
          },
          (e, t, r) => {
            let n = r.classRegistry.getValue(t[1]);
            if (!n)
              throw Error(
                `Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`
              );
            return Object.assign(Object.create(n.prototype), e);
          }
        ),
        D = O(
          (e, t) => !!t.customTransformerRegistry.findApplicable(e),
          (e, t) => [
            "custom",
            t.customTransformerRegistry.findApplicable(e).name,
          ],
          (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e),
          (e, t, r) => {
            let n = r.customTransformerRegistry.findByName(t[1]);
            if (!n) throw Error("Trying to deserialize unknown custom value");
            return n.deserialize(e);
          }
        ),
        L = [M, B, D, P],
        F = (e, t) => {
          let r = l(L, (r) => r.isApplicable(e, t));
          if (r) return { value: r.transform(e, t), type: r.annotation(e, t) };
          let n = l(S, (r) => r.isApplicable(e, t));
          if (n) return { value: n.transform(e, t), type: n.annotation };
        },
        j = {};
      S.forEach((e) => {
        j[e.annotation] = e;
      });
      let U = (e, t, r) => {
          if (m(t))
            switch (t[0]) {
              case "symbol":
                return B.untransform(e, t, r);
              case "class":
                return M.untransform(e, t, r);
              case "custom":
                return D.untransform(e, t, r);
              case "typed-array":
                return P.untransform(e, t, r);
              default:
                throw Error("Unknown transformation: " + t);
            }
          else {
            let n = j[t];
            if (!n) throw Error("Unknown transformation: " + t);
            return n.untransform(e, r);
          }
        },
        H = (e, t) => {
          if (t > e.size) throw Error("index out of bounds");
          let r = e.keys();
          for (; t > 0; ) r.next(), t--;
          return r.next().value;
        };
      function Q(e) {
        if (s(e, "__proto__"))
          throw Error("__proto__ is not allowed as a property");
        if (s(e, "prototype"))
          throw Error("prototype is not allowed as a property");
        if (s(e, "constructor"))
          throw Error("constructor is not allowed as a property");
      }
      let q = (e, t) => {
          Q(t);
          for (let r = 0; r < t.length; r++) {
            let n = t[r];
            if (v(e)) e = H(e, +n);
            else if (w(e)) {
              let i = +n,
                o = 0 == +t[++r] ? "key" : "value",
                a = H(e, i);
              switch (o) {
                case "key":
                  e = a;
                  break;
                case "value":
                  e = e.get(a);
              }
            } else e = e[n];
          }
          return e;
        },
        W = (e, t, r) => {
          if ((Q(t), 0 === t.length)) return r(e);
          let n = e;
          for (let e = 0; e < t.length - 1; e++) {
            let r = t[e];
            if (m(n)) n = n[+r];
            else if (p(n)) n = n[r];
            else if (v(n)) n = H(n, +r);
            else if (w(n)) {
              if (e === t.length - 2) break;
              let i = +r,
                o = 0 == +t[++e] ? "key" : "value",
                a = H(n, i);
              switch (o) {
                case "key":
                  n = a;
                  break;
                case "value":
                  n = n.get(a);
              }
            }
          }
          let i = t[t.length - 1];
          if ((m(n) ? (n[+i] = r(n[+i])) : p(n) && (n[i] = r(n[i])), v(n))) {
            let e = H(n, +i),
              t = r(e);
            e !== t && (n.delete(e), n.add(t));
          }
          if (w(n)) {
            let e = H(n, +t[t.length - 2]);
            switch (0 == +i ? "key" : "value") {
              case "key": {
                let t = r(e);
                n.set(t, n.get(e)), t !== e && n.delete(e);
                break;
              }
              case "value":
                n.set(e, r(n.get(e)));
            }
          }
          return e;
        },
        z = (e, t) => p(e) || m(e) || w(e) || v(e) || R(e, t),
        G = (e, t, r, n, i = [], o = [], l = new Map()) => {
          let c = C(e);
          if (!c) {
            !(function (e, t, r) {
              let n = r.get(e);
              n ? n.push(t) : r.set(e, [t]);
            })(e, i, t);
            let r = l.get(e);
            if (r) return n ? { transformedValue: null } : r;
          }
          if (!z(e, r)) {
            let t = F(e, r),
              n = t
                ? { transformedValue: t.value, annotations: [t.type] }
                : { transformedValue: e };
            return c || l.set(e, n), n;
          }
          if (s(o, e)) return { transformedValue: null };
          let u = F(e, r),
            d = u?.value ?? e,
            h = m(d) ? [] : {},
            g = {};
          a(d, (s, c) => {
            if ("__proto__" === c || "constructor" === c || "prototype" === c)
              throw Error(
                `Detected property ${c}. This is a prototype pollution risk, please remove it from your object.`
              );
            let u = G(s, t, r, n, [...i, c], [...o, e], l);
            (h[c] = u.transformedValue),
              m(u.annotations)
                ? (g[c] = u.annotations)
                : p(u.annotations) &&
                  a(u.annotations, (e, t) => {
                    g[_(c) + "." + t] = e;
                  });
          });
          let y = f(g)
            ? { transformedValue: h, annotations: u ? [u.type] : void 0 }
            : { transformedValue: h, annotations: u ? [u.type, g] : g };
          return c || l.set(e, y), y;
        };
      function Z(e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      }
      function K(e) {
        return "Array" === Z(e);
      }
      class V {
        constructor({ dedupe: e = !1 } = {}) {
          (this.classRegistry = new o()),
            (this.symbolRegistry = new i((e) => e.description ?? "")),
            (this.customTransformerRegistry = new c()),
            (this.allowedErrorProps = []),
            (this.dedupe = e);
        }
        serialize(e) {
          let t = new Map(),
            r = G(e, t, this, this.dedupe),
            n = { json: r.transformedValue };
          r.annotations && (n.meta = { ...n.meta, values: r.annotations });
          let i = (function (e, t) {
            let r;
            let n = {};
            return (e.forEach((e) => {
              if (e.length <= 1) return;
              t ||
                (e = e
                  .map((e) => e.map(String))
                  .sort((e, t) => e.length - t.length));
              let [i, ...o] = e;
              0 === i.length ? (r = o.map(k)) : (n[k(i)] = o.map(k));
            }),
            r)
              ? f(n)
                ? [r]
                : [r, n]
              : f(n)
              ? void 0
              : n;
          })(t, this.dedupe);
          return i && (n.meta = { ...n.meta, referentialEqualities: i }), n;
        }
        deserialize(e) {
          let { json: t, meta: r } = e,
            n = (function e(t, r = {}) {
              return K(t)
                ? t.map((t) => e(t, r))
                : !(function (e) {
                    if ("Object" !== Z(e)) return !1;
                    let t = Object.getPrototypeOf(e);
                    return (
                      !!t && t.constructor === Object && t === Object.prototype
                    );
                  })(t)
                ? t
                : [
                    ...Object.getOwnPropertyNames(t),
                    ...Object.getOwnPropertySymbols(t),
                  ].reduce((n, i) => {
                    if (K(r.props) && !r.props.includes(i)) return n;
                    let o = e(t[i], r);
                    return (
                      !(function (e, t, r, n, i) {
                        let o = {}.propertyIsEnumerable.call(n, t)
                          ? "enumerable"
                          : "nonenumerable";
                        "enumerable" === o && (e[t] = r),
                          i &&
                            "nonenumerable" === o &&
                            Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !1,
                              writable: !0,
                              configurable: !0,
                            });
                      })(n, i, o, t, r.nonenumerable),
                      n
                    );
                  }, {});
            })(t);
          if (r?.values) {
            var i, o, s;
            (i = n),
              (o = r.values),
              (s = this),
              (function e(t, r, n = []) {
                if (!t) return;
                if (!m(t)) {
                  a(t, (t, i) => e(t, r, [...n, ...I(i)]));
                  return;
                }
                let [i, o] = t;
                o &&
                  a(o, (t, i) => {
                    e(t, r, [...n, ...I(i)]);
                  }),
                  r(i, n);
              })(o, (e, t) => {
                i = W(i, t, (t) => U(t, e, s));
              }),
              (n = i);
          }
          return (
            r?.referentialEqualities &&
              (n = (function (e, t) {
                function r(t, r) {
                  let n = q(e, I(r));
                  t.map(I).forEach((t) => {
                    e = W(e, t, () => n);
                  });
                }
                if (m(t)) {
                  let [n, i] = t;
                  n.forEach((t) => {
                    e = W(e, I(t), () => e);
                  }),
                    i && a(i, r);
                } else a(t, r);
                return e;
              })(n, r.referentialEqualities)),
            n
          );
        }
        stringify(e) {
          return JSON.stringify(this.serialize(e));
        }
        parse(e) {
          return this.deserialize(JSON.parse(e));
        }
        registerClass(e, t) {
          this.classRegistry.register(e, t);
        }
        registerSymbol(e, t) {
          this.symbolRegistry.register(e, t);
        }
        registerCustom(e, t) {
          this.customTransformerRegistry.register({ name: t, ...e });
        }
        allowErrorProps(...e) {
          this.allowedErrorProps.push(...e);
        }
      }
      (V.defaultInstance = new V()),
        (V.serialize = V.defaultInstance.serialize.bind(V.defaultInstance)),
        (V.deserialize = V.defaultInstance.deserialize.bind(V.defaultInstance)),
        (V.stringify = V.defaultInstance.stringify.bind(V.defaultInstance)),
        (V.parse = V.defaultInstance.parse.bind(V.defaultInstance)),
        (V.registerClass = V.defaultInstance.registerClass.bind(
          V.defaultInstance
        )),
        (V.registerSymbol = V.defaultInstance.registerSymbol.bind(
          V.defaultInstance
        )),
        (V.registerCustom = V.defaultInstance.registerCustom.bind(
          V.defaultInstance
        )),
        (V.allowErrorProps = V.defaultInstance.allowErrorProps.bind(
          V.defaultInstance
        )),
        V.serialize,
        V.deserialize,
        V.stringify,
        V.parse,
        V.registerClass,
        V.registerCustom,
        V.registerSymbol,
        V.allowErrorProps;
    },
    69795: (e, t, r) => {
      "use strict";
      r.d(t, { QP: () => V });
      let n = (e) => {
          let t = s(e),
            { conflictingClassGroups: r, conflictingClassGroupModifiers: n } =
              e;
          return {
            getClassGroupId: (e) => {
              let r = e.split("-");
              return (
                "" === r[0] && 1 !== r.length && r.shift(), i(r, t) || a(e)
              );
            },
            getConflictingClassGroupIds: (e, t) => {
              let i = r[e] || [];
              return t && n[e] ? [...i, ...n[e]] : i;
            },
          };
        },
        i = (e, t) => {
          if (0 === e.length) return t.classGroupId;
          let r = e[0],
            n = t.nextPart.get(r),
            o = n ? i(e.slice(1), n) : void 0;
          if (o) return o;
          if (0 === t.validators.length) return;
          let a = e.join("-");
          return t.validators.find(({ validator: e }) => e(a))?.classGroupId;
        },
        o = /^\[(.+)\]$/,
        a = (e) => {
          if (o.test(e)) {
            let t = o.exec(e)[1],
              r = t?.substring(0, t.indexOf(":"));
            if (r) return "arbitrary.." + r;
          }
        },
        s = (e) => {
          let { theme: t, prefix: r } = e,
            n = { nextPart: new Map(), validators: [] };
          return (
            d(Object.entries(e.classGroups), r).forEach(([e, r]) => {
              l(r, n, e, t);
            }),
            n
          );
        },
        l = (e, t, r, n) => {
          e.forEach((e) => {
            if ("string" == typeof e) {
              ("" === e ? t : c(t, e)).classGroupId = r;
              return;
            }
            if ("function" == typeof e) {
              if (u(e)) {
                l(e(n), t, r, n);
                return;
              }
              t.validators.push({ validator: e, classGroupId: r });
              return;
            }
            Object.entries(e).forEach(([e, i]) => {
              l(i, c(t, e), r, n);
            });
          });
        },
        c = (e, t) => {
          let r = e;
          return (
            t.split("-").forEach((e) => {
              r.nextPart.has(e) ||
                r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
                (r = r.nextPart.get(e));
            }),
            r
          );
        },
        u = (e) => e.isThemeGetter,
        d = (e, t) =>
          t
            ? e.map(([e, r]) => [
                e,
                r.map((e) =>
                  "string" == typeof e
                    ? t + e
                    : "object" == typeof e
                    ? Object.fromEntries(
                        Object.entries(e).map(([e, r]) => [t + e, r])
                      )
                    : e
                ),
              ])
            : e,
        h = (e) => {
          if (e < 1) return { get: () => void 0, set: () => {} };
          let t = 0,
            r = new Map(),
            n = new Map(),
            i = (i, o) => {
              r.set(i, o), ++t > e && ((t = 0), (n = r), (r = new Map()));
            };
          return {
            get(e) {
              let t = r.get(e);
              return void 0 !== t
                ? t
                : void 0 !== (t = n.get(e))
                ? (i(e, t), t)
                : void 0;
            },
            set(e, t) {
              r.has(e) ? r.set(e, t) : i(e, t);
            },
          };
        },
        p = (e) => {
          let { separator: t, experimentalParseClassName: r } = e,
            n = 1 === t.length,
            i = t[0],
            o = t.length,
            a = (e) => {
              let r;
              let a = [],
                s = 0,
                l = 0;
              for (let c = 0; c < e.length; c++) {
                let u = e[c];
                if (0 === s) {
                  if (u === i && (n || e.slice(c, c + o) === t)) {
                    a.push(e.slice(l, c)), (l = c + o);
                    continue;
                  }
                  if ("/" === u) {
                    r = c;
                    continue;
                  }
                }
                "[" === u ? s++ : "]" === u && s--;
              }
              let c = 0 === a.length ? e : e.substring(l),
                u = c.startsWith("!"),
                d = u ? c.substring(1) : c;
              return {
                modifiers: a,
                hasImportantModifier: u,
                baseClassName: d,
                maybePostfixModifierPosition: r && r > l ? r - l : void 0,
              };
            };
          return r ? (e) => r({ className: e, parseClassName: a }) : a;
        },
        f = (e) => {
          if (e.length <= 1) return e;
          let t = [],
            r = [];
          return (
            e.forEach((e) => {
              "[" === e[0] ? (t.push(...r.sort(), e), (r = [])) : r.push(e);
            }),
            t.push(...r.sort()),
            t
          );
        },
        m = (e) => ({ cache: h(e.cacheSize), parseClassName: p(e), ...n(e) }),
        g = /\s+/,
        y = (e, t) => {
          let {
              parseClassName: r,
              getClassGroupId: n,
              getConflictingClassGroupIds: i,
            } = t,
            o = [],
            a = e.trim().split(g),
            s = "";
          for (let e = a.length - 1; e >= 0; e -= 1) {
            let t = a[e],
              {
                modifiers: l,
                hasImportantModifier: c,
                baseClassName: u,
                maybePostfixModifierPosition: d,
              } = r(t),
              h = !!d,
              p = n(h ? u.substring(0, d) : u);
            if (!p) {
              if (!h || !(p = n(u))) {
                s = t + (s.length > 0 ? " " + s : s);
                continue;
              }
              h = !1;
            }
            let m = f(l).join(":"),
              g = c ? m + "!" : m,
              y = g + p;
            if (o.includes(y)) continue;
            o.push(y);
            let b = i(p, h);
            for (let e = 0; e < b.length; ++e) {
              let t = b[e];
              o.push(g + t);
            }
            s = t + (s.length > 0 ? " " + s : s);
          }
          return s;
        };
      function b() {
        let e,
          t,
          r = 0,
          n = "";
        for (; r < arguments.length; )
          (e = arguments[r++]) && (t = w(e)) && (n && (n += " "), (n += t));
        return n;
      }
      let w = (e) => {
          let t;
          if ("string" == typeof e) return e;
          let r = "";
          for (let n = 0; n < e.length; n++)
            e[n] && (t = w(e[n])) && (r && (r += " "), (r += t));
          return r;
        },
        v = (e) => {
          let t = (t) => t[e] || [];
          return (t.isThemeGetter = !0), t;
        },
        A = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        E = /^\d+\/\d+$/,
        C = new Set(["px", "full", "screen"]),
        x = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        _ =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        k = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        I = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        T =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        S = (e) => B(e) || C.has(e) || E.test(e),
        O = (e) => W(e, "length", z),
        B = (e) => !!e && !Number.isNaN(Number(e)),
        N = (e) => W(e, "number", B),
        P = (e) => !!e && Number.isInteger(Number(e)),
        R = (e) => e.endsWith("%") && B(e.slice(0, -1)),
        M = (e) => A.test(e),
        D = (e) => x.test(e),
        L = new Set(["length", "size", "percentage"]),
        F = (e) => W(e, L, G),
        j = (e) => W(e, "position", G),
        U = new Set(["image", "url"]),
        H = (e) => W(e, U, K),
        Q = (e) => W(e, "", Z),
        q = () => !0,
        W = (e, t, r) => {
          let n = A.exec(e);
          return (
            !!n &&
            (n[1] ? ("string" == typeof t ? n[1] === t : t.has(n[1])) : r(n[2]))
          );
        },
        z = (e) => _.test(e) && !k.test(e),
        G = () => !1,
        Z = (e) => I.test(e),
        K = (e) => T.test(e);
      Symbol.toStringTag;
      let V = (function (e, ...t) {
        let r, n, i;
        let o = function (s) {
          return (
            (n = (r = m(t.reduce((e, t) => t(e), e()))).cache.get),
            (i = r.cache.set),
            (o = a),
            a(s)
          );
        };
        function a(e) {
          let t = n(e);
          if (t) return t;
          let o = y(e, r);
          return i(e, o), o;
        }
        return function () {
          return o(b.apply(null, arguments));
        };
      })(() => {
        let e = v("colors"),
          t = v("spacing"),
          r = v("blur"),
          n = v("brightness"),
          i = v("borderColor"),
          o = v("borderRadius"),
          a = v("borderSpacing"),
          s = v("borderWidth"),
          l = v("contrast"),
          c = v("grayscale"),
          u = v("hueRotate"),
          d = v("invert"),
          h = v("gap"),
          p = v("gradientColorStops"),
          f = v("gradientColorStopPositions"),
          m = v("inset"),
          g = v("margin"),
          y = v("opacity"),
          b = v("padding"),
          w = v("saturate"),
          A = v("scale"),
          E = v("sepia"),
          C = v("skew"),
          x = v("space"),
          _ = v("translate"),
          k = () => ["auto", "contain", "none"],
          I = () => ["auto", "hidden", "clip", "visible", "scroll"],
          T = () => ["auto", M, t],
          L = () => [M, t],
          U = () => ["", S, O],
          W = () => ["auto", B, M],
          z = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          G = () => ["solid", "dashed", "dotted", "double", "none"],
          Z = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          K = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
          V = () => ["", "0", M],
          Y = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          J = () => [B, M];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [q],
            spacing: [S, O],
            blur: ["none", "", D, M],
            brightness: J(),
            borderColor: [e],
            borderRadius: ["none", "", "full", D, M],
            borderSpacing: L(),
            borderWidth: U(),
            contrast: J(),
            grayscale: V(),
            hueRotate: J(),
            invert: V(),
            gap: L(),
            gradientColorStops: [e],
            gradientColorStopPositions: [R, O],
            inset: T(),
            margin: T(),
            opacity: J(),
            padding: L(),
            saturate: J(),
            scale: J(),
            sepia: V(),
            skew: J(),
            space: L(),
            translate: L(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", M] }],
            container: ["container"],
            columns: [{ columns: [D] }],
            "break-after": [{ "break-after": Y() }],
            "break-before": [{ "break-before": Y() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [...z(), M] }],
            overflow: [{ overflow: I() }],
            "overflow-x": [{ "overflow-x": I() }],
            "overflow-y": [{ "overflow-y": I() }],
            overscroll: [{ overscroll: k() }],
            "overscroll-x": [{ "overscroll-x": k() }],
            "overscroll-y": [{ "overscroll-y": k() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [m] }],
            "inset-x": [{ "inset-x": [m] }],
            "inset-y": [{ "inset-y": [m] }],
            start: [{ start: [m] }],
            end: [{ end: [m] }],
            top: [{ top: [m] }],
            right: [{ right: [m] }],
            bottom: [{ bottom: [m] }],
            left: [{ left: [m] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", P, M] }],
            basis: [{ basis: T() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", M] }],
            grow: [{ grow: V() }],
            shrink: [{ shrink: V() }],
            order: [{ order: ["first", "last", "none", P, M] }],
            "grid-cols": [{ "grid-cols": [q] }],
            "col-start-end": [{ col: ["auto", { span: ["full", P, M] }, M] }],
            "col-start": [{ "col-start": W() }],
            "col-end": [{ "col-end": W() }],
            "grid-rows": [{ "grid-rows": [q] }],
            "row-start-end": [{ row: ["auto", { span: [P, M] }, M] }],
            "row-start": [{ "row-start": W() }],
            "row-end": [{ "row-end": W() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", M] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", M] }],
            gap: [{ gap: [h] }],
            "gap-x": [{ "gap-x": [h] }],
            "gap-y": [{ "gap-y": [h] }],
            "justify-content": [{ justify: ["normal", ...K()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [{ content: ["normal", ...K(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [{ "place-content": [...K(), "baseline"] }],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [b] }],
            px: [{ px: [b] }],
            py: [{ py: [b] }],
            ps: [{ ps: [b] }],
            pe: [{ pe: [b] }],
            pt: [{ pt: [b] }],
            pr: [{ pr: [b] }],
            pb: [{ pb: [b] }],
            pl: [{ pl: [b] }],
            m: [{ m: [g] }],
            mx: [{ mx: [g] }],
            my: [{ my: [g] }],
            ms: [{ ms: [g] }],
            me: [{ me: [g] }],
            mt: [{ mt: [g] }],
            mr: [{ mr: [g] }],
            mb: [{ mb: [g] }],
            ml: [{ ml: [g] }],
            "space-x": [{ "space-x": [x] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [x] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", M, t] },
            ],
            "min-w": [{ "min-w": [M, t, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  M,
                  t,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [D] },
                  D,
                ],
              },
            ],
            h: [
              { h: [M, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [M, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [M, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [M, t, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", D, O] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  N,
                ],
              },
            ],
            "font-family": [{ font: [q] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  M,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", B, N] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  S,
                  M,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", M] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", M] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [y] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [y] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...G(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", S, O] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", S, M] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: L() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  M,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", M] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [y] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...z(), j] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", F] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  H,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [f] }],
            "gradient-via-pos": [{ via: [f] }],
            "gradient-to-pos": [{ to: [f] }],
            "gradient-from": [{ from: [p] }],
            "gradient-via": [{ via: [p] }],
            "gradient-to": [{ to: [p] }],
            rounded: [{ rounded: [o] }],
            "rounded-s": [{ "rounded-s": [o] }],
            "rounded-e": [{ "rounded-e": [o] }],
            "rounded-t": [{ "rounded-t": [o] }],
            "rounded-r": [{ "rounded-r": [o] }],
            "rounded-b": [{ "rounded-b": [o] }],
            "rounded-l": [{ "rounded-l": [o] }],
            "rounded-ss": [{ "rounded-ss": [o] }],
            "rounded-se": [{ "rounded-se": [o] }],
            "rounded-ee": [{ "rounded-ee": [o] }],
            "rounded-es": [{ "rounded-es": [o] }],
            "rounded-tl": [{ "rounded-tl": [o] }],
            "rounded-tr": [{ "rounded-tr": [o] }],
            "rounded-br": [{ "rounded-br": [o] }],
            "rounded-bl": [{ "rounded-bl": [o] }],
            "border-w": [{ border: [s] }],
            "border-w-x": [{ "border-x": [s] }],
            "border-w-y": [{ "border-y": [s] }],
            "border-w-s": [{ "border-s": [s] }],
            "border-w-e": [{ "border-e": [s] }],
            "border-w-t": [{ "border-t": [s] }],
            "border-w-r": [{ "border-r": [s] }],
            "border-w-b": [{ "border-b": [s] }],
            "border-w-l": [{ "border-l": [s] }],
            "border-opacity": [{ "border-opacity": [y] }],
            "border-style": [{ border: [...G(), "hidden"] }],
            "divide-x": [{ "divide-x": [s] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [s] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [y] }],
            "divide-style": [{ divide: G() }],
            "border-color": [{ border: [i] }],
            "border-color-x": [{ "border-x": [i] }],
            "border-color-y": [{ "border-y": [i] }],
            "border-color-s": [{ "border-s": [i] }],
            "border-color-e": [{ "border-e": [i] }],
            "border-color-t": [{ "border-t": [i] }],
            "border-color-r": [{ "border-r": [i] }],
            "border-color-b": [{ "border-b": [i] }],
            "border-color-l": [{ "border-l": [i] }],
            "divide-color": [{ divide: [i] }],
            "outline-style": [{ outline: ["", ...G()] }],
            "outline-offset": [{ "outline-offset": [S, M] }],
            "outline-w": [{ outline: [S, O] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: U() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [y] }],
            "ring-offset-w": [{ "ring-offset": [S, O] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", D, Q] }],
            "shadow-color": [{ shadow: [q] }],
            opacity: [{ opacity: [y] }],
            "mix-blend": [
              { "mix-blend": [...Z(), "plus-lighter", "plus-darker"] },
            ],
            "bg-blend": [{ "bg-blend": Z() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [r] }],
            brightness: [{ brightness: [n] }],
            contrast: [{ contrast: [l] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", D, M] }],
            grayscale: [{ grayscale: [c] }],
            "hue-rotate": [{ "hue-rotate": [u] }],
            invert: [{ invert: [d] }],
            saturate: [{ saturate: [w] }],
            sepia: [{ sepia: [E] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [r] }],
            "backdrop-brightness": [{ "backdrop-brightness": [n] }],
            "backdrop-contrast": [{ "backdrop-contrast": [l] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
            "backdrop-invert": [{ "backdrop-invert": [d] }],
            "backdrop-opacity": [{ "backdrop-opacity": [y] }],
            "backdrop-saturate": [{ "backdrop-saturate": [w] }],
            "backdrop-sepia": [{ "backdrop-sepia": [E] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [a] }],
            "border-spacing-x": [{ "border-spacing-x": [a] }],
            "border-spacing-y": [{ "border-spacing-y": [a] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  M,
                ],
              },
            ],
            duration: [{ duration: J() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", M] }],
            delay: [{ delay: J() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", M] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [A] }],
            "scale-x": [{ "scale-x": [A] }],
            "scale-y": [{ "scale-y": [A] }],
            rotate: [{ rotate: [P, M] }],
            "translate-x": [{ "translate-x": [_] }],
            "translate-y": [{ "translate-y": [_] }],
            "skew-x": [{ "skew-x": [C] }],
            "skew-y": [{ "skew-y": [C] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  M,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  M,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": L() }],
            "scroll-mx": [{ "scroll-mx": L() }],
            "scroll-my": [{ "scroll-my": L() }],
            "scroll-ms": [{ "scroll-ms": L() }],
            "scroll-me": [{ "scroll-me": L() }],
            "scroll-mt": [{ "scroll-mt": L() }],
            "scroll-mr": [{ "scroll-mr": L() }],
            "scroll-mb": [{ "scroll-mb": L() }],
            "scroll-ml": [{ "scroll-ml": L() }],
            "scroll-p": [{ "scroll-p": L() }],
            "scroll-px": [{ "scroll-px": L() }],
            "scroll-py": [{ "scroll-py": L() }],
            "scroll-ps": [{ "scroll-ps": L() }],
            "scroll-pe": [{ "scroll-pe": L() }],
            "scroll-pt": [{ "scroll-pt": L() }],
            "scroll-pr": [{ "scroll-pr": L() }],
            "scroll-pb": [{ "scroll-pb": L() }],
            "scroll-pl": [{ "scroll-pl": L() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", M] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [S, O, N] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-s",
              "border-color-e",
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      });
    },
    6476: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          __addDisposableResource: () => M,
          __assign: () => o,
          __asyncDelegator: () => _,
          __asyncGenerator: () => x,
          __asyncValues: () => k,
          __await: () => C,
          __awaiter: () => f,
          __classPrivateFieldGet: () => N,
          __classPrivateFieldIn: () => R,
          __classPrivateFieldSet: () => P,
          __createBinding: () => g,
          __decorate: () => s,
          __disposeResources: () => L,
          __esDecorate: () => c,
          __exportStar: () => y,
          __extends: () => i,
          __generator: () => m,
          __importDefault: () => B,
          __importStar: () => O,
          __makeTemplateObject: () => I,
          __metadata: () => p,
          __param: () => l,
          __propKey: () => d,
          __read: () => w,
          __rest: () => a,
          __rewriteRelativeImportExtension: () => F,
          __runInitializers: () => u,
          __setFunctionName: () => h,
          __spread: () => v,
          __spreadArray: () => E,
          __spreadArrays: () => A,
          __values: () => b,
          default: () => j,
        });
      var n = function (e, t) {
        return (n =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t)
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          })(e, t);
      };
      function i(e, t) {
        if ("function" != typeof t && null !== t)
          throw TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function r() {
          this.constructor = e;
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var o = function () {
        return (o =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      function a(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            0 > t.indexOf(n) &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, n = Object.getOwnPropertySymbols(e);
            i < n.length;
            i++
          )
            0 > t.indexOf(n[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
              (r[n[i]] = e[n[i]]);
        return r;
      }
      function s(e, t, r, n) {
        var i,
          o = arguments.length,
          a =
            o < 3
              ? t
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(t, r))
              : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, r, n);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) &&
              (a = (o < 3 ? i(a) : o > 3 ? i(t, r, a) : i(t, r)) || a);
        return o > 3 && a && Object.defineProperty(t, r, a), a;
      }
      function l(e, t) {
        return function (r, n) {
          t(r, n, e);
        };
      }
      function c(e, t, r, n, i, o) {
        function a(e) {
          if (void 0 !== e && "function" != typeof e)
            throw TypeError("Function expected");
          return e;
        }
        for (
          var s,
            l = n.kind,
            c = "getter" === l ? "get" : "setter" === l ? "set" : "value",
            u = !t && e ? (n.static ? e : e.prototype) : null,
            d = t || (u ? Object.getOwnPropertyDescriptor(u, n.name) : {}),
            h = !1,
            p = r.length - 1;
          p >= 0;
          p--
        ) {
          var f = {};
          for (var m in n) f[m] = "access" === m ? {} : n[m];
          for (var m in n.access) f.access[m] = n.access[m];
          f.addInitializer = function (e) {
            if (h)
              throw TypeError(
                "Cannot add initializers after decoration has completed"
              );
            o.push(a(e || null));
          };
          var g = (0, r[p])(
            "accessor" === l ? { get: d.get, set: d.set } : d[c],
            f
          );
          if ("accessor" === l) {
            if (void 0 === g) continue;
            if (null === g || "object" != typeof g)
              throw TypeError("Object expected");
            (s = a(g.get)) && (d.get = s),
              (s = a(g.set)) && (d.set = s),
              (s = a(g.init)) && i.unshift(s);
          } else (s = a(g)) && ("field" === l ? i.unshift(s) : (d[c] = s));
        }
        u && Object.defineProperty(u, n.name, d), (h = !0);
      }
      function u(e, t, r) {
        for (var n = arguments.length > 2, i = 0; i < t.length; i++)
          r = n ? t[i].call(e, r) : t[i].call(e);
        return n ? r : void 0;
      }
      function d(e) {
        return "symbol" == typeof e ? e : "".concat(e);
      }
      function h(e, t, r) {
        return (
          "symbol" == typeof t &&
            (t = t.description ? "[".concat(t.description, "]") : ""),
          Object.defineProperty(e, "name", {
            configurable: !0,
            value: r ? "".concat(r, " ", t) : t,
          })
        );
      }
      function p(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function f(e, t, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function a(e) {
            try {
              l(n.next(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            try {
              l(n.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })
                ).then(a, s);
          }
          l((n = n.apply(e, t || [])).next());
        });
      }
      function m(e, t) {
        var r,
          n,
          i,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          },
          a = Object.create(
            ("function" == typeof Iterator ? Iterator : Object).prototype
          );
        return (
          (a.next = s(0)),
          (a.throw = s(1)),
          (a.return = s(2)),
          "function" == typeof Symbol &&
            (a[Symbol.iterator] = function () {
              return this;
            }),
          a
        );
        function s(s) {
          return function (l) {
            return (function (s) {
              if (r) throw TypeError("Generator is already executing.");
              for (; a && ((a = 0), s[0] && (o = 0)), o; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i =
                        2 & s[0]
                          ? n.return
                          : s[0]
                          ? n.throw || ((i = n.return) && i.call(n), 0)
                          : n.next) &&
                      !(i = i.call(n, s[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                    case 0:
                    case 1:
                      i = s;
                      break;
                    case 4:
                      return o.label++, { value: s[1], done: !1 };
                    case 5:
                      o.label++, (n = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                        (6 === s[0] || 2 === s[0])
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                        o.label = s[1];
                        break;
                      }
                      if (6 === s[0] && o.label < i[1]) {
                        (o.label = i[1]), (i = s);
                        break;
                      }
                      if (i && o.label < i[2]) {
                        (o.label = i[2]), o.ops.push(s);
                        break;
                      }
                      i[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  s = t.call(e, o);
                } catch (e) {
                  (s = [6, e]), (n = 0);
                } finally {
                  r = i = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, l]);
          };
        }
      }
      var g = Object.create
        ? function (e, t, r, n) {
            void 0 === n && (n = r);
            var i = Object.getOwnPropertyDescriptor(t, r);
            (!i ||
              ("get" in i ? !t.__esModule : i.writable || i.configurable)) &&
              (i = {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              }),
              Object.defineProperty(e, n, i);
          }
        : function (e, t, r, n) {
            void 0 === n && (n = r), (e[n] = t[r]);
          };
      function y(e, t) {
        for (var r in e)
          "default" === r ||
            Object.prototype.hasOwnProperty.call(t, r) ||
            g(t, e, r);
      }
      function b(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && n >= e.length && (e = void 0),
                { value: e && e[n++], done: !e }
              );
            },
          };
        throw TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function w(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          i,
          o = r.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
            a.push(n.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            n && !n.done && (r = o.return) && r.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      function v() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(w(arguments[t]));
        return e;
      }
      function A() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        for (var n = Array(e), i = 0, t = 0; t < r; t++)
          for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++)
            n[i] = o[a];
        return n;
      }
      function E(e, t, r) {
        if (r || 2 == arguments.length)
          for (var n, i = 0, o = t.length; i < o; i++)
            (!n && i in t) ||
              (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
        return e.concat(n || Array.prototype.slice.call(t));
      }
      function C(e) {
        return this instanceof C ? ((this.v = e), this) : new C(e);
      }
      function x(e, t, r) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var n,
          i = r.apply(e, t || []),
          o = [];
        return (
          (n = Object.create(
            ("function" == typeof AsyncIterator ? AsyncIterator : Object)
              .prototype
          )),
          a("next"),
          a("throw"),
          a("return", function (e) {
            return function (t) {
              return Promise.resolve(t).then(e, c);
            };
          }),
          (n[Symbol.asyncIterator] = function () {
            return this;
          }),
          n
        );
        function a(e, t) {
          i[e] &&
            ((n[e] = function (t) {
              return new Promise(function (r, n) {
                o.push([e, t, r, n]) > 1 || s(e, t);
              });
            }),
            t && (n[e] = t(n[e])));
        }
        function s(e, t) {
          try {
            var r;
            (r = i[e](t)).value instanceof C
              ? Promise.resolve(r.value.v).then(l, c)
              : u(o[0][2], r);
          } catch (e) {
            u(o[0][3], e);
          }
        }
        function l(e) {
          s("next", e);
        }
        function c(e) {
          s("throw", e);
        }
        function u(e, t) {
          e(t), o.shift(), o.length && s(o[0][0], o[0][1]);
        }
      }
      function _(e) {
        var t, r;
        return (
          (t = {}),
          n("next"),
          n("throw", function (e) {
            throw e;
          }),
          n("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function n(n, i) {
          t[n] = e[n]
            ? function (t) {
                return (r = !r)
                  ? { value: C(e[n](t)), done: !1 }
                  : i
                  ? i(t)
                  : t;
              }
            : i;
        }
      }
      function k(e) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = b(e)),
            (t = {}),
            n("next"),
            n("throw"),
            n("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function n(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (n, i) {
                !(function (e, t, r, n) {
                  Promise.resolve(n).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(n, i, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function I(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      var T = Object.create
          ? function (e, t) {
              Object.defineProperty(e, "default", { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            },
        S = function (e) {
          return (S =
            Object.getOwnPropertyNames ||
            function (e) {
              var t = [];
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
              return t;
            })(e);
        };
      function O(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = S(e), n = 0; n < r.length; n++)
            "default" !== r[n] && g(t, e, r[n]);
        return T(t, e), t;
      }
      function B(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function N(e, t, r, n) {
        if ("a" === r && !n)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
      }
      function P(e, t, r, n, i) {
        if ("m" === n) throw TypeError("Private method is not writable");
        if ("a" === n && !i)
          throw TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !i : !t.has(e))
          throw TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === n ? i.call(e, r) : i ? (i.value = r) : t.set(e, r), r;
      }
      function R(e, t) {
        if (null === t || ("object" != typeof t && "function" != typeof t))
          throw TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t);
      }
      function M(e, t, r) {
        if (null != t) {
          var n, i;
          if ("object" != typeof t && "function" != typeof t)
            throw TypeError("Object expected.");
          if (r) {
            if (!Symbol.asyncDispose)
              throw TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
          }
          if (void 0 === n) {
            if (!Symbol.dispose)
              throw TypeError("Symbol.dispose is not defined.");
            (n = t[Symbol.dispose]), r && (i = n);
          }
          if ("function" != typeof n) throw TypeError("Object not disposable.");
          i &&
            (n = function () {
              try {
                i.call(this);
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            e.stack.push({ value: t, dispose: n, async: r });
        } else r && e.stack.push({ async: !0 });
        return t;
      }
      var D =
        "function" == typeof SuppressedError
          ? SuppressedError
          : function (e, t, r) {
              var n = Error(r);
              return (
                (n.name = "SuppressedError"),
                (n.error = e),
                (n.suppressed = t),
                n
              );
            };
      function L(e) {
        function t(t) {
          (e.error = e.hasError
            ? new D(t, e.error, "An error was suppressed during disposal.")
            : t),
            (e.hasError = !0);
        }
        var r,
          n = 0;
        return (function i() {
          for (; (r = e.stack.pop()); )
            try {
              if (!r.async && 1 === n)
                return (n = 0), e.stack.push(r), Promise.resolve().then(i);
              if (r.dispose) {
                var o = r.dispose.call(r.value);
                if (r.async)
                  return (
                    (n |= 2),
                    Promise.resolve(o).then(i, function (e) {
                      return t(e), i();
                    })
                  );
              } else n |= 1;
            } catch (e) {
              t(e);
            }
          if (1 === n)
            return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error;
        })();
      }
      function F(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e)
          ? e.replace(
              /\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,
              function (e, r, n, i, o) {
                return r
                  ? t
                    ? ".jsx"
                    : ".js"
                  : !n || (i && o)
                  ? n + i + "." + o.toLowerCase() + "js"
                  : e;
              }
            )
          : e;
      }
      let j = {
        __extends: i,
        __assign: o,
        __rest: a,
        __decorate: s,
        __param: l,
        __esDecorate: c,
        __runInitializers: u,
        __propKey: d,
        __setFunctionName: h,
        __metadata: p,
        __awaiter: f,
        __generator: m,
        __createBinding: g,
        __exportStar: y,
        __values: b,
        __read: w,
        __spread: v,
        __spreadArrays: A,
        __spreadArray: E,
        __await: C,
        __asyncGenerator: x,
        __asyncDelegator: _,
        __asyncValues: k,
        __makeTemplateObject: I,
        __importStar: O,
        __importDefault: B,
        __classPrivateFieldGet: N,
        __classPrivateFieldSet: P,
        __classPrivateFieldIn: R,
        __addDisposableResource: M,
        __disposeResources: L,
        __rewriteRelativeImportExtension: F,
      };
    },
    22469: (e, t, r) => {
      "use strict";
      r.d(t, { r: () => n });
      let n = {
        formatters: void 0,
        fees: void 0,
        serializers: void 0,
        id: 1,
        name: "Ethereum",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: { default: { http: ["https://eth.merkle.io"] } },
        blockExplorers: {
          default: {
            name: "Etherscan",
            url: "https://etherscan.io",
            apiUrl: "https://api.etherscan.io/api",
          },
        },
        contracts: {
          ensRegistry: {
            address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
          },
          ensUniversalResolver: {
            address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
            blockCreated: 0x125db65,
          },
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 0xdb04c1,
          },
        },
      };
    },
    96355: (e, t, r) => {
      "use strict";
      r.d(t, { L: () => l });
      var n = r(40928),
        i = r(89296),
        o = r(40304),
        a = r(68219),
        s = r(67128);
      function l(e, t = {}) {
        let {
          batch: r,
          fetchOptions: c,
          key: u = "http",
          name: d = "HTTP JSON-RPC",
          onFetchRequest: h,
          onFetchResponse: p,
          retryDelay: f,
        } = t;
        return ({ chain: l, retryCount: m, timeout: g }) => {
          let { batchSize: y = 1e3, wait: b = 0 } =
              "object" == typeof r ? r : {},
            w = t.retryCount ?? m,
            v = g ?? t.timeout ?? 1e4,
            A = e || l?.rpcUrls.default.http[0];
          if (!A) throw new i.b();
          let E = (0, a.d)(A, {
            fetchOptions: c,
            onRequest: h,
            onResponse: p,
            timeout: v,
          });
          return (0, s.o)(
            {
              key: u,
              name: d,
              async request({ method: e, params: t }) {
                let i = { method: e, params: t },
                  { schedule: a } = (0, o.u)({
                    id: A,
                    wait: b,
                    shouldSplitBatch: (e) => e.length > y,
                    fn: (e) => E.request({ body: e }),
                    sort: (e, t) => e.id - t.id,
                  }),
                  s = async (e) => (r ? a(e) : [await E.request({ body: e })]),
                  [{ error: l, result: c }] = await s(i);
                if (l) throw new n.J8({ body: i, error: l, url: A });
                return c;
              },
              retryCount: w,
              retryDelay: f,
              timeout: v,
              type: "http",
            },
            { fetchOptions: c, url: A }
          );
        };
      }
    },
    89296: (e, t, r) => {
      "use strict";
      r.d(t, { b: () => i });
      var n = r(80477);
      class i extends n.C {
        constructor() {
          super(
            "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
            { docsPath: "/docs/clients/intro", name: "UrlRequiredError" }
          );
        }
      }
    },
    85892: (e, t, r) => {
      "use strict";
      let n, i, o, a, s, l, c, u, d, h, p, f, m, g, y, b;
      r.d(t, { S: () => G });
      let w = new Map([
        [8217, "apostrophe"],
        [8260, "fraction slash"],
        [12539, "middle dot"],
      ]);
      function v(e) {
        var t;
        let r;
        return (
          (t = (function (e) {
            let t = 0;
            function r() {
              return (e[t++] << 8) | e[t++];
            }
            let n = r(),
              i = 1,
              o = [0, 1];
            for (let e = 1; e < n; e++) o.push((i += r()));
            let a = r(),
              s = t;
            t += a;
            let l = 0,
              c = 0;
            function u() {
              return (
                0 == l && ((c = (c << 8) | e[t++]), (l = 8)), (c >> --l) & 1
              );
            }
            let d = 0x80000000 - 1,
              h = 0;
            for (let e = 0; e < 31; e++) h = (h << 1) | u();
            let p = [],
              f = 0,
              m = 0x80000000;
            for (;;) {
              let e = Math.floor(((h - f + 1) * i - 1) / m),
                t = 0,
                r = n;
              for (; r - t > 1; ) {
                let n = (t + r) >>> 1;
                e < o[n] ? (r = n) : (t = n);
              }
              if (0 == t) break;
              p.push(t);
              let a = f + Math.floor((m * o[t]) / i),
                s = f + Math.floor((m * o[t + 1]) / i) - 1;
              for (; ((a ^ s) & 0x40000000) == 0; )
                (h = ((h << 1) & d) | u()),
                  (a = (a << 1) & d),
                  (s = ((s << 1) & d) | 1);
              for (; a & ~s & 0x20000000; )
                (h = (0x40000000 & h) | ((h << 1) & (d >>> 1)) | u()),
                  (a = (a << 1) ^ 0x40000000),
                  (s = ((0x40000000 ^ s) << 1) | 0x40000001);
              (f = a), (m = 1 + s - a);
            }
            let g = n - 4;
            return p.map((t) => {
              switch (t - g) {
                case 3:
                  return g + 65792 + ((e[s++] << 16) | (e[s++] << 8) | e[s++]);
                case 2:
                  return g + 256 + ((e[s++] << 8) | e[s++]);
                case 1:
                  return g + e[s++];
                default:
                  return t - 1;
              }
            });
          })(
            (function (e) {
              let t = [];
              [
                ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              ].forEach((e, r) => (t[e.charCodeAt(0)] = r));
              let r = e.length,
                n = new Uint8Array((6 * r) >> 3);
              for (let i = 0, o = 0, a = 0, s = 0; i < r; i++)
                (s = (s << 6) | t[e.charCodeAt(i)]),
                  (a += 6) >= 8 && (n[o++] = s >> (a -= 8));
              return n;
            })(e)
          )),
          (r = 0),
          () => t[r++]
        );
      }
      function A(e, t = 0) {
        let r = [];
        for (;;) {
          let n = e(),
            i = e();
          if (!i) break;
          t += n;
          for (let e = 0; e < i; e++) r.push(t + e);
          t += i + 1;
        }
        return r;
      }
      function E(e) {
        return x(() => {
          let t = A(e);
          if (t.length) return t;
        });
      }
      function C(e) {
        let t = [];
        for (;;) {
          let r = e();
          if (0 == r) break;
          t.push(
            (function (e, t) {
              let r = 1 + t(),
                n = t(),
                i = x(t);
              return _(i.length, 1 + e, t).flatMap((e, t) => {
                let [o, ...a] = e;
                return Array(i[t])
                  .fill()
                  .map((e, t) => {
                    let i = t * n;
                    return [o + t * r, a.map((e) => e + i)];
                  });
              });
            })(r, e)
          );
        }
        for (;;) {
          let r = e() - 1;
          if (r < 0) break;
          t.push(_(1 + e(), 1 + r, e).map((e) => [e[0], e.slice(1)]));
        }
        return t.flat();
      }
      function x(e) {
        let t = [];
        for (;;) {
          let r = e(t.length);
          if (!r) break;
          t.push(r);
        }
        return t;
      }
      function _(e, t, r) {
        let n = Array(e)
          .fill()
          .map(() => []);
        for (let i = 0; i < t; i++)
          (function (e, t) {
            let r = Array(e);
            for (let i = 0, o = 0; i < e; i++) {
              var n;
              r[i] = o += 1 & (n = t()) ? ~n >> 1 : n >> 1;
            }
            return r;
          })(e, r).forEach((e, t) => n[t].push(e));
        return n;
      }
      function k(e) {
        return `{${e.toString(16).toUpperCase().padStart(2, "0")}}`;
      }
      function I(e) {
        let t = e.length;
        if (t < 4096) return String.fromCodePoint(...e);
        let r = [];
        for (let n = 0; n < t; )
          r.push(String.fromCodePoint(...e.slice(n, (n += 4096))));
        return r.join("");
      }
      function T(e, t) {
        let r = e.length,
          n = r - t.length;
        for (let i = 0; 0 == n && i < r; i++) n = e[i] - t[i];
        return n;
      }
      function S(e) {
        return (e >> 24) & 255;
      }
      function O(e) {
        return 0xffffff & e;
      }
      function B(e) {
        return e >= 44032 && e < 55204;
      }
      function N(e) {
        n ||
          (function () {
            let e = v(
              "AEUDVgHLCGMATwDUADIAdAAhADQAFAAtABQAIQAPACcADQASAAoAGAAJABIACQARAAUACwAFAAwABQAQAAMABwAEAAoABQAJAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACwANAA0AAwAKAAkABAAdAAYAZwDTAeYDMwCxCl8B8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgPi89uj00MsvBXxEPAGPCDwBnQKoEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJF8AJpIBpob5AERSMAKNoAXqaQLUBMCzEiC+AZ4EWRJJFbEu7QDQLARtEbgECxDwAb/RyAk1AV4nD2cEQQKTAzsAGpobWgAahAGPCrysdy0OAKwAfFIcBAQFUmoA/PtZADkBIadVj2UMUgx5Il4ANQC9vAITAdQZWxDzALN9AhsZVwIcGSkCBAgXOhG7AqMZ4M7+1M0UAPDNAWsC+mcJDe8AAQA99zkEXLICyQozAo6lAobcP5JvjQLFzwKD9gU/OD8FEQCtEQL6bW+nAKUEvzjDHsuRyUvOFHcacUz5AqIFRSE2kzsBEQCuaQL5DQTlcgO6twSpTiUgCwIFCAUXBHQEqQV6swAVxUlmTmsCwjqsP/wKJQmXb793UgZBEBsnpRD3DDMBtQE7De1L2ATxBjsEyR99GRkPzZWcCKUt3QztJuMuoYBaI/UqgwXtS/Q83QtNUWgPWQtlCeM6Y4FOAyEBDSKLCt0NOQhtEPMKyWsN5RFFBzkD1UmaAKUHAQsRHTUVtSYQYqwLCTl3Bvsa9guPJq8TKXr8BdMaIQZNASka/wDPLueFsFoxXBxPXwYDCyUjxxSoUCANJUC3eEgaGwcVJakCkUNwSodRNh6TIfY8PQ1mLhNRfAf1PAUZTwuBPJ5Gq0UOEdI+jT1IIklMLAQ1fywvJ4sJzw+FDLl8cgFZCSEJsQxxEzERFzfFCDkHGS2XJCcVCCFGlWCaBPefA/MT0QMLBT8JQQcTA7UcLRMuFSkFDYEk1wLzNtUuswKPVoABFwXLDyUf3xBQR+AO6QibAmUDgyXrAC0VIQAXIpsIQ2MAX4/YUwUuywjHamwjdANnFOdhEXMHkQ5XB6ccMxW/HOFwyF4Lhggoo68JWwF1CZkBXwTjCAk1W4ygIEFnU4tYGJsgYUE/XfwCMQxlFZ9EvYd4AosPaxIbATUBcwc5DQECdxHtEWsQlQjrhgQ1tTP4OiUETyGDIBEKJwNPbM4LJyb5DPhpAaMSYgMMND137merYLYkF/0HGTLFQWAh8QuST80MnBrBGEJULhnkB78D8xrzJ+pBVwX/A6MDEzpNM+4EvQtpCIsJPwBJDqMXB9cYagpxjNABMYsBt5kDV5GDAm+PBjcHCwBnC4cFeeUAHQKnCKMABQDPA1cAOQKtB50AGQCFQQE9AycvASHlAo8DkwgxywGVLwHzKQQbwwwVAPc3bkoCw7ECgGpmogXdWAKOAkk1AU0lBAVOR1EDr3HhANsASwYT30cBFatKyxrjQwHfbysAxwD7AAU1BwVBAc0B820AtwFfCzEJorO1AU3pKQCDABVrAdcCiQDdADUAf/EBUwBNBVn5BdMCT0kBETEYK1dhAbsDHwEzAQ0AeQbLjaXJBx8EbQfTAhAbFeEC7y4HtQEDIt8TzULFAr3eVaFgAmSBAmJCW02vWzcgAqH3AmiYAmYJAp+EOBsLAmY7AmYmBG4EfwN/EwN+kjkGOXcXOYI6IyMCbB0CMjY4CgJtxwJtru+KM2dFKwFnAN4A4QBKBQeYDI0A/gvCAA21AncvAnaiPwJ5S0MCeLodXNtFrkbXAnw/AnrIAn0JAnzwBVkFIEgASH1jJAKBbQKAAAKABQJ/rklYSlsVF0rMAtEBAtDMSycDiE8Dh+ZExZEyAvKhXQMDA65LzkwtJQPPTUxNrwKLPwKK2MEbBx1DZwW3Ao43Ao5cQJeBAo7ZAo5ceFG0UzUKUtRUhQKT+wKTDADpABxVHlWvVdAGLBsplYYy4XhmRTs5ApefAu+yWCGoAFklApaPApZ8nACpWaxaCYFNADsClrUClk5cRFzRApnLAplkXMpdBxkCnJs5wjqdApwWAp+bAp64igAdDzEqDwKd8QKekgC1PWE0Ye8CntMCoG4BqQKenx8Cnk6lY8hkJyUrAievAiZ+AqD7AqBMAqLdAqHEAqYvAqXOAqf/AH0Cp/JofGixAANJahxq0QKs4wKsrgKtZwKtAgJXHQJV3AKx4dcDH05slwKyvQ0CsugXbOBtY21IXwMlzQK2XDs/bpADKUUCuF4CuUcVArkqd3A2cOECvRkCu9pwlgMyEQK+iHICAzNxAr4acyJzTwLDywLDBHOCdEs1RXTgAzynAzyaAz2/AsV8AsZHAsYQiQLIaVECyEQCyU8CyS4CZJ0C3dJ4eWF4rnklS9ADGKNnAgJh9BnzlSR7C16SXrsRAs9rAs9sL0tT0vMTnwDGrQLPcwEp6gNOEn5LBQLcJwLbigLSTwNSXANTXwEBA1WMgIk/AMsW7WBFghyC04LOg40C2scC2d6EEIRJpzwDhqUALwNkDoZxWfkAVQLfZQLeuHN3AuIv7RQB8zAnAfSbAfLShwLr8wLpcHkC6vkC6uQA+UcBuQLuiQLrnJaqlwMC7j8DheCYeXDgcaEC8wMAaQOOFpmTAvcTA5FuA5KHAveYAvnZAvhmmhyaq7s3mx4DnYMC/voBGwA5nxyfswMFjQOmagOm2QDRxQMGaqGIogUJAwxJAtQAPwMA4UEXUwER8wNrB5dnBQCTLSu3r73bAYmZFH8RBDkB+ykFIQ6dCZ8Akv0TtRQrxQL3LScApQC3BbmOkRc/xqdtQS4UJo0uAUMBgPwBtSYAdQMOBG0ALAIWDKEAAAoCPQJqA90DfgSRASBFBSF8CgAFAEQAEwA2EgJ3AQAF1QNr7wrFAgD3Cp8nv7G35QGRIUFCAekUfxE0wIkABAAbAFoCRQKEiwAGOlM6lI1tALg6jzrQAI04wTrcAKUA6ADLATqBOjs5/Dn5O3aJOls7nok6bzkYAVYBMwFsBS81XTWeNa01ZjV1NbY1xTWCNZE10jXhNZ41rTXuNf01sjXBNgI2ETXGNdU2FjYnNd417TYuNj02LjUtITY6Nj02PDbJNwgEkDxXNjg23TcgNw82yiA3iTcwCgSwPGc2JDcZN2w6jTchQtRDB0LgQwscDw8JmyhtKFFVBgDpfwDpsAD+mxQ91wLpNSMArQC9BbeOkRdLxptzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgELgEaJZkC7aMAoQCjBcGOmxdNxrsBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUHqSvAj5Gqwr7YrMUACT9AN3rlr3JG9m8w9lIAXltp/v8kfWaIaaR9OwpAES/I3ZVamDXSgB/UsOgAG6D0tq+5CIqE15FiAhV3yA2VhCQ7tj+m6xXaF53FIfGi/IAZIskMGAi2MU7MDVJNCbMzERyHZi+osdPtnFVbvq653O8rwaCy4IAf9OOok65AqJUtUriUfYsGPPVbe6jm0s9lbKlPCUKjdkHsFsEhvX4kT39ZCtAAbwQdn/h4TpO5hTByWAmr5n+Wuwhdegv6bmvX4LyOes3z2+cuHv2JFYwVMNuq2gzn8YHTjlUQd39osyWei4NKl3LAdfxlO876hh5ENp/cOvpuI9bF55guEthLLPOXjD4dktTH04P5TvZrWTM0e4+BHJxj7MLApXIFOs0sWKhNkG8iwuM5wR83my6V3wW06abhDzTXYfOr/ZpFXgXzmv4d12FFyP00/dPGbIVGV5ao8UufGzUwp/IHx6v/wDWJr9iaoCulhWwlZ7A8q/NMoD12+mBdNRgJYnThRLtMx1Bgwttn8/4Qn2CDfOSup9GVXEvA21ILgp0owHYxNOkpwLWz0G7K+WREIDjIzUzSn8I99CuJSmSpPyH0Ke6/NERYiNx+3dncSebPnOUnnWD61AhJ1n/tSLZmU5wYO5GfgzyAYJm6VL91LxZ8hL1lfximQxIDMRhIecQZBmeE5R0XlrpvwplVrJwpa8BBCdp93GPP9lyBeZ2zkRr920CR3cYbKpKHfogvm0nV7XdDz6EbjzlxADCMjSLXuXpIpyuizy39yY+I+H9rmpoIF3YwEjlH9MgGgWcCNTjHEWMqAbprn2Ox7rOHupaVE3lNyg3nt5XaZID6Y+uml5Ja+aOPu+BI+DZbiJVfaspUadakWUX6TA4dETkIqdJJHYnU4Z4yKpt5y8rVIahoMUf8A8kWtAQNCTbjp71gx3/zVdqNz1Sutkw0gFIMVm2BF4Xdv/0olw+NaDIR9Bb3DPweZA2K/cw+/b+AwyWl9ZOP67A9nexmeTNjfdzPGf9J6E6BMPKa5lJh+qNsdUz3HBUevU71eQFCqOcxiIYhacAhh/8PX0J5DdSViZ6WazDDx7cukJNpMfEkYLJ5Ao4vLoVd3d25Pg4qaVa2p2D2L3WvYPJ5Yf/A/MSxptjlgXL/KJtP2U0cRv2I09ATAiWCJYuRwiapeKFsqmi18yMMulDp3HdcIldq+7jkwsJUOHLHCzzzBw5XFvL0CAmo1ub456z7zb7shk3KPGCLZzr47oT1k/j06XNnJvG3Udv6XrP+wsqTBlZ5MaNPt9FOs/4Bt/ja/vbVhTNpBFl9Gq7MqINvGlWKOAwQzwOZy+EzSdjAqKJVV2YcskTuM94aIK+kc/AZaXiZLPREUDpkXIV947IFfj+85TrqPqLfkGcxgboMQjosf+az+odLNXdyp1mDNGsqSdK/pJ2Ca04mt/4d6s1X+lncOEYaGBBeW4pApGcjf7/XJCFbj3N3mFb+BtlIcw8ZiDKoClFX9Rf0bxCqtLpicObKJzBVVHr/6u4siH2hK75RNv7w9GfTbhJOQBYiFUZAByY4rn37tZBHT//kqKsNi3ryL9AqXJRzqiMIJMhILjoi/i8LVEsbu+Ih9bsyW16sgQqjYLO0qda6KaCPKj3DQcu6CfV5lKtjS3ZCdqLAZkOey9MR+QutJBGiz/r15GVD6rCVwJR4UUKC4GNJkfDf00OMW8aQtLSAGLXV8MIi9mbbl/qQEpxCm2L5hutFX4ekeLH4QgBWUFKs/2VVMKy46WtFE6AbwgmYm/Z0yHk5veDIrcl2HpVqb/rSE0PC9EbDzJEWqeaPhh7vF369Umq2kSiB3s5rBI6c/7N9bkRu4h2n+/h5nSwy+7n+/I+6oXQVANo2Jb5zDwtiBPf1ySCzHdT6yJShMzqSRZfnykX49CaFaxhoVF4PBhEuECJ1PrFYSpmHuyYsl14DTAV9ZxRms1XiR/kBrjhZjidOt0UNe+GSml7XNgpVw8YsUTmZXLTK+6iYnyW/wYR1W4UXwOi14xpFROHb6HcZzksgF5DbL2AFXzKNwHU2adjdAY+KCyM/cwRTBkkq/a227NI0q6DR2MkMCRu620t79bGcYUmACtqN3mk/0uNwd3JSXHqE1kzf6Yyj0W2083JNDRnIXDlgBxJ6uf58NN1f6FQiRCWB4egF8QDx74AixV8oTyw7PluIjr3/rj/WzgwPSq4xPojaF7V0xqG2u5ti2L1h6yYHv73Isrukr0kURDIEjClBsBx7kdcXUxaYMS0syT3ymLzDzslNDWQOT1Tao1YNmJHARUenhCkmV9tqCPGI5GqZaRpkiPxyjoncWjyOHYGqvbvRX+Bn1pn7EhRNXa1lqJPmoeN5VqdqIDPhEVhFsyG0d4iQEIYX0wZUbY2XbZWYlpZ/l66IrDDY0q1C1YzBDpHC4h05YqHQLqS9anyl22JQ6lEvjvdBwMHfE7z0luCXD34/rFeDa2TmSeEAykSpYO5j1G/nsgpR3qn0qaQEmLjnnLfcz+veoYqPnRqmRGwCJ6FJ3Gm/Z1/aVX5PSb03MMnjAf41ww54sD5k8FrkfBP+K0b1MrYpapWjtpZfve2HVf4ickX3LKSOhu7qI1Vd4c1kNrn2ajy1t4y93JhV4fnWCKq7OmFpcr7FjdJCXPTql0Drr14Ho3Z87+GPQ4Z/DcTiGqtvZxlRYi8cNuhXABveZIwNl/BX1huhVLaFax5OqypUrQRyb9OE3SSkPlDdy5uo5XGg2EIGEjLY1MO5cr1ibfiFWV7zspcTgkBKkwo5jPyAin04LqizZXb2tDRgwKJjGx4cVk3ngAQixwcxjYAg2Q7vmUR/hpwInMdw7OhC2qyf41vTPkudQAORS0DdLtOGQxb4fH2VYGsvJCkeWPeUwtf1/tuIhzXEThoCZzzSJqqjUtbaPI3ntHm3T5uf849hGUA0zU8ni5W+EEn3/0Y6oUhQFw9z0aGjkljBbAlFXc0y82G2wkd7VdgWa5KTgJJNjNwZMfmdnUIUn1JU5LiWX5UZEZbVlKSN76mlmjUR2ku+fucTNlO4IAAahnLjBhlvQNR9pe9swGBgq0YR7P3VCyI/seYwQ4QBzy9X+HPePgoF8WfKaJ4MBOhLCGHae6Z8xkNXwni9QAKvTNtVA56x8YJflZ/VvONRSlsSLmiSyNMnTjTaE1ko81zkzGEnVwEhjCzlwIqpxmpDAqwsEmtpdr3xpc7i/ZX3f2TzT3M0FdxIEQvO1jgmmiN+D1YpMduAzEhBtj2OBkMN/rv6p7Th4pSH6f5aH3aTvwFTl7EOSgGASI7ttyMehzpm4AVyK+bFEaFg9gnZsSUPpsbAe/0RFhrH+EXZ12Z7thf4dzN1+Sn+G8QrDA1VKaN4IFxD1rQz9Xq9Coii9S9/hPbTGjyBwFH3H1UdQuz5KsgPDEHua4/kPg2Gp/IIItsaLWBqiT9XH45MiQxSosGJ56H/0F2cjcCFd72l1665RNHURdC3lspI77esfJsl+rXXabkAy7vxDXG/XGGcKpwiKDPFfvMEgjkAHil4Za1F36RnyxxvdIAzvgfH8knukYDck07tc++DP4TdWeI7HXuq5Yl6VVFrUQtf64/dkXewlKZSHQo6YvCSpREB0GDrz+Ys2GfO8nw2SwrYwaf88AifzlPvP17bf1mI3AuccJvAjZIpBmqvharKFAebEjVKfGAwpQjWoXlm9LROsq9bCk1UeQ3CJxJqprzssS/Q04JeS1ReCCubL3J7sx86spkP4eNpp95UF+8K748icIs8vdILFklk9skQqi1So6cx3X906pvy1vz+KipTJ8fiVJxsV5MmT0XwA"
            );
            for (let [t, r] of ((n = new Map(
              E(e).flatMap((e, t) => e.map((e) => [e, (t + 1) << 24]))
            )),
            (i = new Set(A(e))),
            (o = new Map()),
            (a = new Map()),
            C(e))) {
              if (!i.has(t) && 2 == r.length) {
                let [e, n] = r,
                  i = a.get(e);
                i || ((i = new Map()), a.set(e, i)), i.set(n, t);
              }
              o.set(t, r.reverse());
            }
          })();
        let t = [],
          r = [],
          s = !1;
        function l(e) {
          let r = n.get(e);
          r && ((s = !0), (e |= r)), t.push(e);
        }
        for (let n of e)
          for (;;) {
            if (n < 128) t.push(n);
            else if (B(n)) {
              let e = n - 44032,
                t = (e / 588) | 0,
                r = ((e % 588) / 28) | 0,
                i = e % 28;
              l(4352 + t), l(4449 + r), i > 0 && l(4519 + i);
            } else {
              let e = o.get(n);
              e ? r.push(...e) : l(n);
            }
            if (!r.length) break;
            n = r.pop();
          }
        if (s && t.length > 1) {
          let e = S(t[0]);
          for (let r = 1; r < t.length; r++) {
            let n = S(t[r]);
            if (0 == n || e <= n) {
              e = n;
              continue;
            }
            let i = r - 1;
            for (;;) {
              let r = t[i + 1];
              if (((t[i + 1] = t[i]), (t[i] = r), !i || (e = S(t[--i])) <= n))
                break;
            }
            e = S(t[r]);
          }
        }
        return t;
      }
      function P(e) {
        return (function (e) {
          let t = [],
            r = [],
            n = -1,
            i = 0;
          for (let o of e) {
            let e = S(o),
              s = O(o);
            if (-1 == n) 0 == e ? (n = s) : t.push(s);
            else if (i > 0 && i >= e)
              0 == e ? (t.push(n, ...r), (r.length = 0), (n = s)) : r.push(s),
                (i = e);
            else {
              let o = (function (e, t) {
                if (e >= 4352 && e < 4371 && t >= 4449 && t < 4470)
                  return 44032 + (e - 4352) * 588 + (t - 4449) * 28;
                if (B(e) && t > 4519 && t < 4547 && (e - 44032) % 28 == 0)
                  return e + (t - 4519);
                {
                  let r = a.get(e);
                  return r && (r = r.get(t)) ? r : -1;
                }
              })(n, s);
              o >= 0
                ? (n = o)
                : 0 == i && 0 == e
                ? (t.push(n), (n = s))
                : (r.push(s), (i = e));
            }
          }
          return n >= 0 && t.push(n, ...r), t;
        })(N(e));
      }
      let R = (e) => Array.from(e);
      function M(e, t) {
        return e.P.has(t) || e.Q.has(t);
      }
      class D extends Array {
        get is_emoji() {
          return !0;
        }
      }
      function L() {
        let e, t;
        if (s) return;
        let r = v(
            "AEkU4AngDVgB0QKRAQYBOwDqATEAnwDbAIUApABsAOAAbwCRAEYAiQBPAHYAPgA+ACsANwAlAGMAHwAvACsAJQAWAC8AGwAiACIALwAUACsAEQAiAAsAGwARABcAGAA6ACkALAAsADUAFgAsABEAHQAhAA8AGwAdABUAFgAZAA0ADQAXABAAGQAUABIEqgYJAR4UFjfDBdMAsQCuPwFnAKUBA10jAK5/Ly8vLwE/pwUJ6/0HPwbkMQVXBVgAPSs5APa2EQbIwQuUCkEDyJ4zAsUKLwKOoQKG2D+Ob4kCxcsCg/IBH98JAPKtAUECLY0KP48A4wDiChUAF9S5yAwLPZ0EG3cA/QI5GL0P6wkGKekFBIFnDRsHLQCrAGmR76WcfwBbBpMjBukAGwA7DJMAWxVbqfu75wzbIM8IuykDsRQ7APcta6MAoX0YABcEJdcWAR0AuRnNBPoJIEw3CZcJiB4bVllM44NCABMADAAVAA5rVAAhAA4AR+4V2D3zOVjKleYuChAdX01YPewAEwAMABUADmsgXECXAMPrABsAOQzFABsVW6n7Adq4HB0FWwXiAtCfAsSwCkwcpGUUcxptTPUAuw1nAuEACy00iRfJkQKBewETGwC9DWcC4QALLQFIUCWRTAoDLfsFMgnXaRetAddDAEkrEncCMRYhAusnuTdrADnhAfUlAMcOy7UBG2OBALEFAAUAitNJBRvDHwcXAKgn0QGhKy0DmwBnAQoZPu03dAQYFwCqAccCIQDTKxJzOvNQsAWQOncnNUgF+icFWQVYr7gFaTtdQhI6WEGXe5NmX6H4CxMDxQcl8XcjBKNLAlNTAnUbqycBj6OlNVsDRRcEg2EJANEGqz8vIwcpAjldAGsBYR9xAIMdGQCVAUm3ACdpFwGvxQM3LSFDUwFvWQZlAmUA8UkXAykBBQBJQQCrAF0AcwArtQYH8+8ZjX8ACSEAKQCzG0cB0QHbBwsxl3iB6AAKABEANAA9ADgzd3nTwBBfEFwBTQlMbDoVCwKsD6YL5REVDNEqy9PYADSpB+sDUwfrA1MDUwfrB+sDUwfrA1MDUwNTA1McCvAa08AQXw9IBG0FjgWLBNYIgyZJEYEHKAjSVA10HhxHA0UA/CMlSRw7kzMLJUJMDE0DB/w2QmynfTgDRzGrVPWQogPLMk85bAEecRKgACoPcxw1tU5+ekdxoApLT661f0liTmcCvjqoP/gKIQmTb7t3TgY9EBcnoRDzDC8BsQE3DelL1ATtBjcExR95GRUPyZWYCKEt2QzpJt8unYBWI/EqfwXpS/A82QtJUWQPVQthCd86X4FKAx0BCSKHCtkNNQhpEO8KxWcN4RFBBzUD0UmWAKEG/QsNHTEVsSYMYqgLBTlzBvca8guLJqsTJXr4Bc8aHQZJASUa+wDLLuOFrFotXBhPWwX/CyEjwxSkUBwNIUCzeEQaFwcRJaUCjUNsSoNRMh6PIfI8OQ1iLg9ReAfxPAEZSwt9PJpGp0UKEc4+iT1EIkVMKAQxeywrJ4cJyw+BDLV8bgFVCR0JrQxtEy0REzfBCDUHFSmXICcRCB1GkWCWBPObA+8TzQMHBTsJPQcPA7EcKRMqFSUFCYEg0wLvNtEurwKLVnwBEwXHDyEf2xBMR9wO5QiXAmEDfyXnACkVHQATIpcIP18AW4/UUwEuxwjDamgjcANjFONdEW8HjQ5TB6McLxW7HN1wxF4HhgQon6sJVwFxCZUBWwTfCAU1V4ycID1nT4tUGJcgXUE7XfgCLQxhFZtEuYd0AocPZxIXATEBbwc1DP0CcxHpEWcQkQjnhgA1sTP0OiEESyF/IA0KIwNLbMoLIyb1DPRlAZ8SXgMINDl36menYLIgF/kHFTLBQVwh7QuOT8kMmBq9GD5UKhngB7sD7xrvJ+ZBUwX7A58POkkz6gS5C2UIhwk7AEUOnxMH0xhmCm2MzAEthwGzlQNTjX8Ca4sGMwcHAGMHgwV14QAZAqMInwABAMsDUwA1AqkHmQAVAIE9ATkDIysBHeECiwOPCC3HAZErAe8lBBe/DBEA8zNuRgLDrQKAZmaeBdlUAooCRTEBSSEEAUpDTQOrbd0A1wBHBg/bQwERp0bHFt8/AdtrJwDDAPcAATEHAT0ByQHvaQCzAVsLLQmer7EBSeUlAH8AEWcB0wKFANkAMQB77QFPAEkFVfUFzwJLRQENLRQnU10BtwMbAS8BCQB1BseJocUDGwRpB88CEBcV3QLvKgexAyLbE8lCwQK92lEAMhIKNAq1CrQfX/NcLwItbj1MAAofpD7DP0oFTTtPO1Q7TztUO087VDtPO1Q7TztUA5O73rveCmhfQWHnDKIN0ETEOkUT12BNYC4TxC2zFL0VyiVSGTkauCcBJeBVBQ8ALc9mLAgoNHEXuAA7KWSDPWOCHiwKRxzjU41U9C0XAK1LnjOrDagbEUQ8BUN16WImFgoKHgJkfQJiPldJq1c3HAKh8wJolAJmBQKfgDgXBwJmNwJmIgRqBHsDfw8Dfo45AjlzEzl+Oh8fAmwZAjIyOAYCbcMCbarrhi9jQScBYwDaAN0ARgEHlAyJAPoHvgAJsQJ3KwJ2njsCeUc/Ani2GVjXRapG0wJ8OwJ6xAJ9BQJ87AVVBRxH/Eh5XyAAJxFJVEpXERNKyALQ/QLQyEsjA4hLA4fiRMGRLgLynVz/AwOqS8pMKSHLTUhNqwKLOwKK1L0XAxk/YwGzAo4zAo5YPJN9Ao7VAo5YdFGwUzEGUtBUgQKT9wKTCADlABhVGlWrVcwCLBcpkYIy3XhiRTc1ApebAu+uWB2kAFUhApaLApZ4mAClWahaBX1JADcClrEClkpcQFzNApnHAplgXMZdAxUCnJc5vjqZApwSAp+XAp60hgAZCy0mCwKd7QKejgCxOWEwYesCns8CoGoBpQKemxsCnkqhY8RkIyEnAierAiZ6AqD3AqBIAqLZAqHAAqYrAqXKAqf7AHkCp+5oeGit/0VqGGrNAqzfAqyqAq1jAqz+AlcZAlXYArHd0wMfSmyTArK5CQKy5BNs3G1fbURbAyXJArZYNztujAMpQQK4WgK5QxECuSZzcDJw3QK9FQK71nCSAzINAr6Ecf4DM20CvhZzHnNLAsPHAsMAc350RzFBdNwDPKMDPJYDPbsCxXgCxkMCxgyFAshlTQLIQALJSwLJKgJkmQLdznh1XXiqeSFLzAMYn2b+AmHwGe+VIHsHXo5etw0Cz2cCz2grR0/O7w+bAMKpAs9vASXmA04OfkcBAtwjAtuGAtJLA1JYA1NbAP0DVYiAhTvHEulcQYIYgs+CyoOJAtrDAtnahAyERac4A4ahACsDZAqGbVX1AFEC32EC3rRvcwLiK+0QAfMsIwH0lwHyzoMC6+8C6Wx1Aur1AurgAPVDAbUC7oUC65iWppb/Au47A4XcmHVw3HGdAvL/AGUDjhKZjwL3DwORagOSgwL3lAL51QL4YpoYmqe3M5saA51/Av72ARcANZ8Yn68DBYkDpmYDptUAzcEDBmahhKIBBQMMRQELARsHaQZdtWMBALcEZ7sNhx6vCQATcTUAHwMvEkkDhXsBXyMdAIzrAB0A5p8Dm40IswYbn8EApwURu+kdPT4WeAVoNz5AK0IhQrRfcRFfvACWxQUyAJBMGZu5OyZgMhG6zw4vGMYYicn2BVcFWAVXBVgFYwVYBVcFWAVXBVgFVwVYBVcFWEYVCNeFZwICAgpkXukrBMkDsQYvu7sAuwSnuwDnQCkWsgVGPmk+cEI/QrZfdTdf6ABYETOrAIz+zGvL/KbnRno9JiMEKxYnNjV+bd9qwfEZwixpAWvXbjAXBV8FasnBybgIz0lbAAAACnxefYu+ADM/gQADFtEG5a0jBQCMwwsDAQ0A5WUdPSQfSkKxQrxBOCNfJ2A2JzgjCcE9CkQ/Qz54PoE+cD5xAolCvElCO1/LTk9qTQosa1QvagtuH1/gMzobCWebCmIjKzwdJkKrQrwrzAHL/F/JDh8uCQgJIn6d32o6LUoXyavJrAllwcvMCmBBXw/lEKMRAJONHUVCJRupbTnOOAozP0M+cEI/HAcKHUxHbFssLVrhvBIKfe0dK0I/HF0ISgkOM1RDQjcEO0OcLAqBGy1CPxv1CFMiIxgwMQAFj2HwXgpxZMlgC2AtI25DYBk5AhseYLMGAmsQZU5gTREBZOdgFWCVYH1gs2BLYJFoFhcGtQ7cVam8WgtDFqsBuyvNwQIfFQAcAx4BeQJsLzCVUoABigq4RxoA5CN0jgrKDaZN6gGbAoecTwVAXwD39wkANBZXDAulDCQfuq9HAE8MNAAVE58rggh6AtILS2URGwDYTgZ1BAoeWgAxALa4AZonCxZvqyQ4nxkBWwGGCfwD2e0PBqoGSga5AB3LValaCbthE4kLLT8OuwG7ASICR1ooKCggHh8hLBImBiEMjQBUAm5XkEmVAW4fD3FHAdN1D85RIBmpsE3qBxEFTF8A9/cKAHoGJGwKKwulODAtx69WDQsAX7wLAGNAlQh6AOpN7yIbvwAxALa4AZonLTsOzgKQGHtQu1jIdHKO16WbDvWZFT0b7AEpEFwSBg8bAccJOhCTBRArDDYLABEAs84BAgCkAOEAmIIABWtXLwAUAFsbxi5sdioNwRACOyQz0+EcHgsbfQJ7Ls6hHATBCqrxbAA3OS0Opge7CQAQOi7OERkAfavaHA+7GkcczaF3HgE9Kl8cAuugCAHCAULz5B9lAb4Jtwz6CDwKPgAFwAs9AksNuwi8DTwKvC7OoSoJPA67BZgBG2sKD4sa4QHDARELuxY7AKALOxC7BBige9wAO2sMPAACpgm8BRvQ9QUBvgH6bsoGewAHuwG7D00RErwBAQDqAQAAdBVbBhbLFPxvF7sYOwAuuwLrDlaouwAeuwJVICp/AAG7AALjAAg7FTwVuwAbuwG9KOClWw6/xAD0AGj7L7ZtvgNIo7vIqDsDAbuVJ0sAAlsACrsEAOfdGbsIGnsIoQUK/3AA37unuxjbGruji3lyBvupm4MAErsGGwsBvAAAhgBtuwYAC7unOwEaO7oIoZzKAbsL7QfAqTsA4XsBvwAA5QAVuwAG+wAJuwBpiwAauwAOuwIYu45pFfsAAVsADmsALkseAAa7ABe7CCEADUoBwgC3ryYBwAAAtAAOmwG+J+QAsloAHBsBv/7hCqEABcYLFRXbAAebAEK7AQIAabsAC3sAHbsACLsJoQAFygBunxnVAJEIIQAFygABOwAH2wAdmwghAAaaAAl7ABsrAG0bAOa7gAAIWwAUuwkhAAbKAOOLAAk7C6EOxPtfAAc7AG6cQEgARwADOwAJrQM3AAcbABl7Abv/Aab7AAobAAo7AAn7p+sGuwAJGwADCwAQOwAAFDsAEWsAD4sADesADbsAGQsGFhsAFTsAbpsWswG7ALoAEzsDAGkrCgDhSwACOwAEUgAXewUbAAbQABi7AAv7AF+7AGv7AOSLAbsAF3YBvAABcguhAAVKHgF7KFIAOUUA/gcNDHIAKCpwAaQFCF4BvF4jDAkHb0tsXyqJHzwUYi02A6EKtAHYABYC0QNuAXZyR1IUIQNPAhU+ASwGA3NGvHtSekAAKQAxAfsAUwrbAHuQLAErAHblDREyRgFKAFcFAAFQAQeKzAB4OwQgpQBaANYVAJVoNx+LAM1rsQDP1BYIwnVzGxhWHQnRAYiQqyJTU01IEjzCifkAfxw3QCkr4BGXTwByASksMClCGQ8DMFUE98XuAEtl3ABqAnECPxF6Osd4LjXVBgUAEBsdCggMKgQfHSlOU04IuboAChLNACYAARoAhgCJAI41AO4AtADgAJ08ALsAqwCmAKEA8gCfANMAnADrAQwBBwDAAHkAWgDLAM0BBwDXAOsAiACiATUA4wDYANUDAQcqM9TU1NS2wNzN0M5DMhcBTQFXL0cBVQFkAWMBVgFHS0NFaA0BThUHCAMyNgwHACINJCYpLDg6Oj09PT4/DkAeUVFRUVNTUlMpVFVXVlYcXWFhYGJhI2ZocG9ycnJycnJ0dHR0dHR0dHR0dHZ2d3Z1WwBA7ABFAJYAdAAuAGLyAIoAUwBTADMCc+kAh//y8gBgAI/sAJsASwBeAGD5+aoAgQCBAGUAUgCtAB4AsgB/AjwCPwD4AOMA+gD6AOQA+wDlAOUA5ADiACkCdwFNATwBOgFQAToBOgE6ATUBNAE0ATQBGAFUDwArCAAATRcKFgMVFg4AigCSAKIASwBkGAItAHAAaQCRAxIDJCoDHkE+RykAiwJLAMMCUwKgALoCkgKSApICkgKSApIChwKSApICkgKSApICkgKRApEClAKcApMCkgKSApACkAKQApACjgKRAnEB0AKTApsCkgKSApEWeQsA+gUDpwJdAjYXAVAQNQLeEQorEwFKNxNNkQF3pDwBZVkA/wM9RwEAAJMpHhiPagApYABpAC4AiQOUzIvwroRaBborDsIRAZ3VdCoLBCMxbAEzWmwBsgDdfoB/foB+gYKCfoOGhH6FiIaAh4KIgol+in6LfoyKjX6Ofo+CkH6RfpJ+k36Ug5WIloKXftoC2WzhAtdsAIJsJGygAINsbARCBD8EQQREBEIESARFBEAERgRIBEcEQwRFBEgAlmZsAKMDh2wAtGYBBWwAyVFsbADPbAIMbAD2WmwA9gEZAPYA9AD0APUA9AN8XmzUhCNlvwD2APQA9AD1APQcbGwAiVpsAPYAiQEZAPYAiQLsAPYAiQN8XmzUhCNlvxxsAPdabAEZAPYA9gD0APQA9QD0APcA9AD0APUA9AN8XmzUhCNlvxxsbACJWmwBGQD2AIkA9gCJAuwA9gCJA3xebNSEI2W/HGwCQwE2bAJKATlsAkvBbGwCV2xsA54C7AOeA54DnwOfA58DnwN8XmzUhCNlvxxsbACJWmwBGQOeAIkDngCJAuwDngCJA3xebNSEI2W/HGwEN2wAiQQ4AIkGjTFtIC9s1m4DJmwA/QDGWgJsbABVWv4UMgJsbACJAmwAVAEAuV5sAmxebGwAiV5sAmxebD3YAEls1gJsbEZFNiJ9FGVAe8xvEZKvxVfKZszAVTBzYBH2d1iyUXEHH7twNw7eZF5JJRHI5EgaRr5D20/3dfONrFLSq5qSrrgd2CEUq722WBQ/LzpA+bx1oREI5xy4BDSZNun0ZWORUJqInZSyMaioyvfSI0l5uFDzbWaQ28/zdB0hwR4OQZ0/jn9ALSLNikjFYGfqR389qtFlhD3a6KdIh97rhZYpywuLc7o8ql5/X8KCbPU3L/QlmCowhRXhsGDvg6wUNprA9bM/49uxlAj7ZVy3ouEY/BgFXBNyK0TLrSjZWeJm/T4nz6QGLT3cJNtWRZVZTvIdtaxMMJRHgig9+S11LjBh7Inr06ykoch1U097Rw0hvgmOrydQyaWcEQDg0RavuMuT0zYabUZl1e33HNSK1oNUCS03eh+9C2EvF3fq9h+XBaAMFuoWeZf+mfZgL4HzyiKDIUtfNU4oFu0aE9qt3VA3U4D3fOSrAcYVnjG3cSkp1vhXZnp3JQm4JknKdBitO2NVnGCYQwU3YMWHWB87NEd+4AHuOKI8BSIH92reW0pfs+kWCTJxDCbRjFv8Cfc4/DSBYJScJYTeAEgg9wTEvcwd/QuHRHqGzAQ4fXf5FUI1lPrO+fvEcPl4JInM1z9AtBT2bL4QYEREe7KiSnnxTwtmAFjn8lqT3mND8qTktX2F16Ae9cakqJ6/pEQsHURqyqWlRMCzKXRKfCHT7sYHWx9/T/ugYTFY6iVN3Btm58ATJR5alYZybKMWojwOw3HbFn23NFyeLl7+Er82RchyYuBoGQ3j7SAWNxiYvp5U+Fq/DEzB9cG5DlJWsqkosRze92OVlCtQEYo1S1lF72Z8xWc4ld/+fFcfTEDTFb9d8tJGQ75dpJEvcWyGmGBiTbiWDdGOcw93Dmxq5ISUrmasygONfHLvhgo83HQZenbdBtSzBkvYrCEQ/xEDMhMZsN6gqplx5jGG9mSQLhM81UEdEeJ59sdNJDAFy/gPyJoKlwPZgB/MkC/kICLiCB8va+nCdO2ry4aDfkmPFpF/H/SGQ3LJ6aAv9dtJ8DniHtLOckZix0BVb0iR5V3LAp521LBSIi6AtV7r2ZB/hQEvAw54EFNOQcFnl1xGUIc67tqK1INNwD2n/RbwgzO9h45LM6VMuN8V1ZNIQ6t+Xy3lTqyVCD5kqLy/t3/b8MLbgDg8JIWDkSZ+LrGhhr+gYpH+pr1TnCUnZPjpUdw6bSL6MWVXoDDciQDWECwU2e6VEpfrcOBbrSOijqGkEIoJPbpmeJLkcwbvA0yWIixQVjo0HnYh7fji+Dfdq1mtV1lG2Zz9R7eFMHS+FK7nybutu2fwzDpFldO2pZBshsHJWaltn3PWOoGJpCT2jE8EHOuC6FkejNWcfsWCqNqMLP9xTwcWArj2EiiI7D+EaDi7/2cqHL1gPiF6C/J7aUo7RQqogPZ11WqbyP97nsoMxPOC78wZMF7B1Y0g7JNXJV/nN1m4xx8hbqWz07KSaqr5hE4icB326DMR/vUKX9LoNjle/ZWtbUhrTAcsdgrLlG5Ne8aiR0bS/2ZhpNOVVxavWIZsEM/rd68EB4vjbbD13NkMK1qvMk74vGbSkL7ULO0sZ9R6APSCo6KH+Xn98wEdw1bCPAnDTaBsD6sidAGN58uiH4a3ovG1KyZAu2XtyGgF/vgWKGxw9R1lfAVcfuYE71DHuxtTzfGZnHaDpDGWmfEq0N4GawE7yIkaoz8jcmVmzJe1ydM8q0p08YIxFcY1YcqQc1djWBEoNETDFcgk5waRftEJasPREkrV++N/TOKkERF1fCLrXS8DFGYGRBeECMQRNEs0ES3FzUtXCcNxpYEM3Uei6XodZruXUIRnn+UXf2b/r7n1vQutoi6WoIbW7svDNWBbUWcDUc7F9SJK3bvSy9KIqhgyJHoW2Kpvv0J4ob14HFXGWWVsYXJzjwxS+SADShTgCRjhoDgjAYRGxwJ1Vonw+cpnCKhz8NQPrb0SFxHIRbmG95Q2hlC4mDxvPBRbkFa60cvWakd7f0kVBxxktzZ9agPJEWyA63RSHYVqt8cPrs2uFJ3rS3k9ETGKn5+A6F9IOrdZHfT1biEyUJKEvwzuscwshGCBJvd16TrefW03xVnJf4xvs72PdxrMidjJO8EiWyN/VWyB3fv9kc34YIuZTFtXGo9DuG3H1Uka5FgBMwDPEvRcSabi3WakNQkXFecJlFk6buLVk5YHpuKWTw6oF632FPPSVIVl5hgUAeHhj0t/sw/PEEvThLQDDFE34eCg/rLOyXT3r+L98oRKrlTO0MdALYQ3rRQqC7d822dJPGxF1K4J2TtfPSMFaCAg0n0NGk9yiaKKOJD1v2aBX9HUOIawjjfvwCmjHZJTR62R9c9x33JnBjWrN4QYEOmehy0oZMP9XM9Zyi6TYoe07PaLceRXcCWZiY/imRUWW6+mci7+wMxSdwMdbXckXtvhJH8sc4iQcTwm7yp+3f7CaesTTQB2qkgeXh+wFiSMXfMlH7Yil0OoZ2QTtRLTip2O0cLZ4SstqWHZ6H+8A2kZXhpm0kPbL9dUanTOvziqIUh6Ambwa3WrCb2eWbuCN3L1hgWUmjRC3JoL3dBhR3imSQI8xuCMfsszlji7cSShNSYdqCXPxEVwbqO9i5B6hf93YI7aeyI8jxgcVXK0I/klbvhSXjkjOIwZgPdVwmsFW7HGPLUAvDRuKm+itybRg7c8+Yqqjg824Qf+/NxsBSUNAK9KCoJpauFqK0XQULrWYj4FnxeKDuvr54iokpi+D57e6Y1zxRJJdsHnDR3JyraCUufHBRTKODWBVzthjm4k3/Hv+Q990XDVR+KW+TcJX045LW86EKhz/97aqj89A8ZvTk1//tczosU90loIPVaHuWegJU3wP//7XHcO7c0yQM2jM/IhQKrf8hiObHWiWDZManF8Uf/HzbmDfC2wT//aiZ4hGTv/xzgKwdb1sD6cGEkceow0s3b89/zg+3plyRm0HlZi886j5wUwFhdHiDTaBidZRo5cx/tMeLyguOATbzq17ydhzbrpxunuHx6lbFGiO97gsd4dk//7iCIo+Ew+hG2so5kvv+ITG4c1fzHPtu1Xn5QfUnqY3/uByVmB7gmnE/E+5zdm+6nDmoews5fr+NzThdSHzK4bBQOL9c4O8OI0xLSqjJ4lbniLJg1aFpQRLwaSMZmpkC9e/j6FOVrTQ6a/a4alGgfrl2ZL1sbHUQ3DOI7ntq9diHFfm3t1mul3rdJEJCHnlW/hlQntipMrpeMs7fUr6wK370D7VbXH0DUHzdYfRg/6Z11Ult1sffJS+heHbco15Sxy3+rDnPesqH1lajk0yu02hPUvEUqvcUXWXL7Ad0wNGMx5gOle4XJxq/r/YY0xdco2wRSEGwcT7YADlBrHc9ZbvzOL0QwyWCWWChB9Obg800v7tyBWaNvdwz+fL7Ph9i2irEeJkRgOzeEDw+JiD/V93vH9FgMEoFIJMoIuogmicZohf94SBuPn6hXaV9jP4VVVA/bu+Wg8S88GLtmEPSNRLdtlXx2XL/nuM8nKkhnlnjaropiKKLIH94pLIASci0pDBfj9Hi5BfaTSXQg5+PMjQX91Ktk4MOqK1K99l4BRPv5+vNovGZ3IxQv8ICvjV4/diThpoaM8uvd3D9d/DE477w3yAbW3IDm2i73pZ9aEj38JqS6h/s8/xgmUIVcuq2JTgefAyuoafzQxAuRASeg3NtG3ach/JEkyuX+JDt2PnDZTShUhyHHG3ttBg/6lhAchGjLJBtopj4e01MlCp2yqQRTr4sBBXru+lKaoanwYX8y2aWCJiR3KnhCOkYVFSvsO0oDRujUFOEptiNDTYrJoUbvOyvl4AhC9h3wORiTXK1MrpMfnvdnndnR/HRVSusMBgIxwrLdn3vq1VcncPiD0SquTx/kNmxeFyCT4uXVUd9AL+rSGmuq7OOCzDKeVPjiNWVaoP5KOFqYq5Xcuf/xW9S+u9eIq9GAtZWtQlgkRecjRtvG1NR4WXXpn+pwsTBTIy079Ikg8rSef1aVapIFcXCd6C2wHVjLXR+N0tw4Taw6x6H90BFRgNrtlq2up6hHKuV3inM5RJaQWZHd84e6RsKkk9po3dk9by54tpPw7cBkFas/G+GbHwuG+AwP55BZyXILTHCIVrPpXHEaUPYfL6nphJP1Rc10xG4UaCeY4IHCwuur8xmSQDgY4aVwhzWhjbtSHG8JO6P2i2nC9/0Bfx0zk6dYQq3aw7k5vIObD7SEKrxhz0fQ0+YTOfHW23CBNeZci1qNsUDhoeqmfyP6PvjoEjHk8QbrFyQVZPHVWijnb8YCM65iYNoEbvnchStZ/9cKg5Vd45j8KnB6UjzXl/bkyZx7VoD47ocUUi117WwgySSb4rXgLJ52Mv5XJbp3I+uBP81BUvOjy4Cacgi+GWWlC/8dwgqwiojjUBDnEOxyRyowwLQfytFra1OZS4XvRYr4uoamAfG3I/p2bA7G90yqKThH8Ke00Tqd+3l3dmJpaCZelBMYjGqNLVa3SM4+LQeL56gY6Bymy2LQPVOxjWfj5tq4o74swcxhyGJPynkS5xAjOXZP1/FAYcBT3u6qLoIkEfErwo4gozmyI1YCvM0oyI3ghjGPQSsof2sKUhq91WsKy9cYWN+4A2v4pG/Mxpdc6w6kI/HX7Xb0TuihmsiOy2wQIsrZbUmr3OBSUo6oDJNgQp+YqYkgTgYcWZDgawJw3DFfdzT//PhVUidgB2qa8uw/j9ToHBAS33iT8YLhhAfyXG0bQUFp7QmH7oQ3i6Flf4OTZLvJdh8pfuflmWu2ohm5pTiSg1pl3vq9uluTJwqXfh1hqy8e2iHoD+Y35gCIViTo6VOtK5dD8HYClucJucXASzwe2kPj4S4eYQtmkYHagXhAzp/F541xE8YFYqSPszDuz3soWzHy0p3E2jwZNQaIcGU9FNQwQxeDw0ZlK9dxXrj9IUHGUPTOyib8CqXmbZ7Ex54bn1rLx3qqAavu/gh6XjV0GmN1p+yyMK9HN5uYEvxgbAk43tsheREhyI+Q5WLIneKTGPmYiM/lxOp8fvqHy8YgXK0TlMiX0tliLI2JtfmWZP8eVV732sdYm+pcWzDzEmKLJZyeelyaZKkjPnnUO9keDwtgiLnmd5+t+Sr5y8brRnlvxcWEWfCqIALQYHvaXx6jTg4dAlye469uGwwOZVZCILLfGjaMg4LUCNMTtMSp1aC2y/3wR2t1v3w/iNBRQ+bNbtDqL2NAr7K4rUcyqbSpNrXZgAWXvjxBBtfYLK1uRYt3q2pfXJOAL0HtWcEwJLddOSJKV1SwvcvEuzg/4MPnA8MIUJOLqm3qI6wFyN99Ck6zYaV/zGSAzF/PGsaNa4vPLe5QnyuqVUnVQ6xELA6gbe53aGgeke+R/ycb2LJVyc7BhuzI90zA+c6wUDTb7NH//gdDSl2u/aW7lRJm8m1fLtPxcNuEM5JbkOCZKPM88HUsLRoC1pmKKlvWyeAXuxILbu0snpSxf8N+RgtLUSe5n2gdjOjoSTaN7mMZ7bF+cWk/MS8mFD4pcyl5UN7CbpFZH2a+Pm1VAnUTVfbw8qrmz1G9m5aKmRzY1SMhhPrlCn2t4uNUXNA3IFe6NOjSC1DEaAFZAfDlEkQCsbNhsZPj6NQPDSB3tLiTo0ZYoEbIeEIaKtU3Wk60rEszawTFuyHVd365LA/c/uarABN5M5rGq/dqTG3Ilye/5EKiYisisuzqNaZjmWv0z9TORc0CKbaTea214oNM9u2sXUZub/eqM3Pi/PjRSyQiOSwPWif2asTgu6hS6fb5UGosCWxdedMqdViIUUSSdIJx+qQ4KShfTT39VAWZbi+mB+iKICNwpt6cflY57Rcbs6d1kA26Iru73cuxYVlSvuJdcR5VfDYZRk8X0AXePROyw3Le6LaUdmTLzYsoNhhgQpd67xVNiHgk3pakmndeIAtTC4DCXy9oS6eU4CWxDdVmY53pKNbdAKmQsP37lrJZC6iDXMELGKcHjNuuZgcDyY8W/yv6ha3DX7OWm/35fpvhw55oitf4V+GULlcPWYyGGuVBdro19c8u0RDddDun40W7G5cSIzHLh/qZxb59R+EPY+wZ2XerkUim92hhXpKyW6WtAh6zQS97DrPyjCvKi3pCw96LeKynOpyjtsMQc2RmI/20zFOZcSa2AK++PoRcT6zeJyxlBZ7kk5mhqXGkLlM2hFKc+/T544xXP0Ua38Q6xdPTLTeG1PHnLMaOvksUQMrEFTB/lizCirmFQL8zYVU+OTeYQEFaITsBSMMYexS9HkajO2gGIf2micvntCZJsZQEwIH3/4JGJQGflBuH5rNXmnRRYXDQs3ZoEQoMtYDr1kFKUS/siiQSUxcTH9XYeBZiKDDFQoExREO9dddKQLO3BwMHvymCSTFyY+vxn3D27NDx6OlU092D5EDUwilttqVHpjJQDUceJYCLsK2swfXeNUVrBJT/w/sk+7si8rPtiMFis+oxvGdGQxirMBID700T39mULuNHzOyN+xBfcFACZcyngF1aSpv0JPkNUrAZTqfplv509cGXFUiEEm5dZb+OsP/blizqdK45/dSsIrufYTrCPY2lgJD6k6QljTfXVlHfYKSq+MsagyUcaMintyr95bD8kdTAeYNLNsMmo/Wdd8a2nStBP49ARIjqqpUHWY4q4mvO5Cq/CgCP+4/B+5zutGwX5pssgVLr1+fIM7WWLfiUQDk4c6ZdHZOWv5hG3g2dgQ5NXnpIY+BWwJpaouf25bXnjDzbHnQNofH/c6m+dEAS9Gs2h7pFRPKOBDnqswZ8KZjhId1ytHUTs533KwBoSiImoxKQUgZ7z6pA9QB3sZ8Cq0vwutJTTkfbX8AzCpm2cFXx/P22niUMHauU8IGc+78R6TsutoonoqFuoNA3l80t387YHMoL5KGAT1JO4zmx+vJ0LbLHlicHraSVYvJjnO9p++qnWgKw9OwFVVUagvZuf9qfiuum+hIicxP1q4zDnzkHsCNriLxBpxY9N+UOmqzdY1MunLMDgkMyi3uvnN3UBXJeZ8YLs5xr8QrOhimYoKuGBebZHAiBIkViv3DG8k2oNpp5OIgX6ulqaRN8V62QUPjn5tl1kPXhT9bcd8qIm8gi4or/FGbvQ6pgGSHmnayrugmf5E0upGxPRf/3xOtitGMaHLKJVm5zhglmVfI91o0yxhJZVS/5wQ8zfxK8Ylw0WmHXoGfRkoBRx9Hsnl/6sgTjAVwpmNuSeZtBwlX4qB8Bh8lxjqBDIuFGJ4I1wxN0XRlAAslzqMKwQfyA7OkuivCXfv+i+3XmhcBFM2n4jdT+NyUmBnQJPV3F2sZfKvJhUlXzSosFR4VevVVcOkFnnjdiRWc0TeSYxj41sJGYMbZTeLI3GvyZ8/gAAudQ1+4oFX+enX5V49MczGCYVBuoC4kHjp7ZVxj+clBwPr9k+v05SsezQK3enxLs1Nt/N7c7AImVUysjGou4iOohHo83Zs9/MI/OWB+OyXzOBD93NbApGHXrv8CVRHp2bwH+xB55cfNrdqFD35HSMx4iVmtzYAmSCIV8kXsHoq3DIb93riTWbubnjxbBW5zConVtbxLRStXHkIyAByaozME952Gc9aAdAbBpZSVCH88Uwb/4bPTVOVl+WoMYD7JIvK8VcMrJ8zHV4bbG0Dg7Kx17A4ej/ZcZ2Z5pVuVLUH1E/AccUTKm81SE+LQ6STTUDscUk0x2OWIbEORhg69tdoTGNkA1RfkGIRZHr5mCXOpLC55WWzCZoGPFUVtZRHwh0nq039CDdjEPo+JyaxSQAvDgR6Iqvxy0frrtEG1A385N81l05SSzN+IDm9bypF9m92EUqblnauZ5sjc37wRykOdl7w4o8WMgQsjii3EE/aJYDfHs1cH6DNBEujjcCc8qAefYFyIAURDcDnzun5UmkbBQsU4eu/W8I9nBE0qJKTdg2hwjq0+XV7a3TJ7R+alvJZCRia9lJ+grNB9dbrOmWEvUotMjvDhq4wV/kq4fvIBkzUGpDeYH74rne8uU3dgoNZdR9pUL6q9YDNRfOiF6Dyk+SYXQIghTjm9qR4tBHh0gnmF/9q3Qv22EzaLhSvDlDOxMrrCNRmLCl1jApzLrBCPn2mjn5zqK7OYK7VxOfQ5GfBfoPdyQwqFEgCVHkJ9oTnagRM3R0+rsuN5jQv9icCav/p1WqiEXSzCdLd/WEA6z6dDP7tPqPbeDYKAkVcz1lLGbFOC9b7cBd3MV0Ve8dZ89oR7OnxGS7uVpSry8banVZwpJg+nkH1jRBYa2BvBMY2xITH9ERXCjHzdZxs+ipdXP2DY7X+eWiBhtT2L0RRGTLPeazn5tpl4tu8iE2rWig731iuJDRbCHHy+g/Mb9+miAyVqfIpXT/iZeOxOxODO0hEpLM78I1+G2Z45yi3lS1K3m4WMQ559Lp4UML5vZUjYGJuxl+OPpUH5klpyBujkjprhei0TmUik10gjvNUp8mDkWlNKikmYspaVTqewbnOzJrmz8FLIpsT67EJLHIIfeDcWEfiP+DJrZ1jfxpoAb2abeMqLx+9RuZGzQoYtYVGgAWwEM9Kek2vPIeBNAKD6ao7nw6sgvfeLZPoXkbYO/tStHJdKzk+WFSFEU2NcALJAEP6S8pcnqqBBt57dwTrzQNCIdk2SocK4dLRbD/pu/VryKnm65ZYXiJCfHJk3mx9MRSl+nSK6OqEBSoGjz0/LADddwF/HqcfK3K3O+6YUGQcmj8pZL4PhZ6KrGkb8B38FmDvvLd3XQXbvS/FQmrXFTvJNkaN/FGo83KuS43BK1UfVnIqigGkCoP5fBda2MwAGTGNKX9K9t4Bx83pMFc5KSORmWKv+8VoVggWxoaBz3/9IBh6RwLd1tebwy89xvE5z6EEpXpDfrXWfRsMs6+ekUHH6idVosno55+xQ8Zqzelh0bxtJTgCcH3Z3/Cxlx9eNIS4JIFKOAVrDqbrXRszmY55a5+niJGHtkO3b6mnIDxLa1WXc7BAe33mt2KyM4Fbc3R6/WVTQN8QhlqAtave2WsQTqzWeSlKuGUVIJRqtObpv294rS0kDN1RKzdstZTXJebR2HlzsQ4P3NbMHUqFZMZw+/IKXnh4t+lY8qocp/B1oMszR03EFs3bPeND8QkItMvllObeCz3SZAjqZrobmLcrpFyQV7mwBjg3C3C8/bc5goQhv8j/IXMLGnt4mF7tybRDG5G0polxoUScQkPvmnga2/K+aapKeqSL0BTmo1Cm5g+booNOtdyKva2KoefRURaBk7113QKo3y+WTuFKtgETIK8HRluYS9DvlcciCDvnG8UaJRfZE2siZsiTHvRmN80xkUIInHeRZl5Re/+ATL6VhKFi8CZ/n/jbFV6T5pZ+Uoppvsi3qjacVFOJgWWfdlwVHKPW/TJO3na9hRM9bS2yo2rEsC6IBzRReVO6IesJU7PItzOamr+ROFfwGZmZ7ue8HNxAgLJKb7P3p8dMqk6Be5PJaT/5Rdc1deYVihWH9cjVKc9uz5EnfHqxLUkOO8iJUENBNVf5LyNy8zjLu/78k5WNTywiPfYeX3CPk7yc6CI3lum/CEZwfUaNpcI3KsPqfn2lmz3kd/acQjKA1ebkJaiuLD+epQ/Fc1llHXXMzofWzz/Kd29SNmOhcjMWw1jq1g3YfrXZ9rzXDYW4ZttfgfMi6oCUtBs0PkMVuxmq5lxEoCaSXPSqCJJ7MlKdRDidVt0AFlxk5cTdX++sBF2+E35mjwfm8ERVxH0FvuAQtsfA4V2G0TKTUxeyRGVjd/u6F1SvuAiU2/WaQjcNCU4Ep7VunXCYSbZj3U3wzu/LWM5MPlYuyQ3FOOCD/zt7K295hY2JhwF+ODDIZ676vGQFKveEQYkWj7lkK7rVmD7MhU0Y/tF8EcTTpo4/yqOufbd/zWIpMajnbDuWK2vn6OPPtz2rc9MIBNlPd8tt+yf+7SC4wqEPbozKMCwY5Bygx4JmoIEDsixWRDcdHd6S3/dZMHXOJAAv7+NIstl00crgSqHZKAEe4g3G4dzIV51EeZB01r7p8GNlfUnG/GjZgNGsqXZdYMBVtAtFNv3hJWPve4GvqZ2XxuiNkHTz5kxWgr0PjQdJlVywJ9Zf2ZvqeeTbolKtvK54re2Lq5BoyzfsRtvDfyao3kmyFzDQ88nM+qx83w74RDlkngtYiArI05Epre3GgBeSlMig0pE6RGQaFznKkGeb0SozLCyiOtxh7hgwZlbKbClzUUfC8ntMiHUOZE375RhTy9c4DA+oMLkUDkztSybZbdmP1xpaIbjUpPAHBq3cIq+CBFzbMlMMCCkUQ6d9LGV6GYCsYiEWZIy3nBnuxOYXeU4YTGDSin9e4/pCjPtQSHlg5LMEvIlF0ElthqrF129iK2RPBEWd3XWOl3SWV5uz5VUyZYp5kEFmz7QfP/B1W1BBzQ2iTGbSVT79lUHzcGXz3PJceSgz4uknETUwo0xffpr2KUvZF0i/r2sL3IFIClYx8CbIZE6Qt7MDJbOPB3xMScwaOcWG66IJfCnDkb0D2Mb+PHzX+oiCbxeTIogtyN+s2NJirNACk/OACSOTtV6vscwbzW4M168xqaI+RzR47S1nlV/rOoZnid87n/Ima2XYa3un3BuGAisNjb8eLMT9OnMtazQROFCuO1HiZXaOc0oUDbNC4eKLToOx8DzVhMgGA8XIAQ2x3b6I0uEyLssQjJX3QphcUMx4KsMgJ+72km4N2aqkBF2coKmUEt1eqIMGn+5txMT4kYVGd3ALO+y9Z4PP3d3l48JQK8s9ZZ/Qx/+NBKgBEJFlQ32psoJiihGO7FSYM5L81q72kaAYcilEFMG+ZK1BcMqELkflyCV7v8JEXLO4Rf/oZYNZHZVjJhfL6fnpP9Tio3Euue5uS7FMkfGOeRCTrBZ06Caev7tgufeTrX34Ur/Vvc+b8ksiIShNJtuF9WmYxOZ4xg8y6zTdy3KAB2y5kYkcRnXsptWwAFyKZ2I/QGySNeoQLkINUMloC+5L3WuMMx297Q1xUYLKqZ9XHavaobo6QQv4auMm+i84IhxRpPt9nUmcav9NcjCcP+TcMmxsQZ/F3mgeoA0fQgwvTsyXuuTaM3Sqtv2jaaajmaFQpK9W6uIbeqwvSDo34ZrY6elDUHwSCjHRRmlwmyy+eOra64Ssq0XSXYljMHtKY+FShcMkHsEUY/4Bw63dJ6KpwDaxmthlDdbdE+TvYF3v33cGSKqO+1H1pKYhJMvZD5ckQcHyNF8zrtiR5b0ko6NPGoRexUZTYP6VbUdn3zzxGBOi8Z0OqHjGqYxRXwN3mYi0GYEEZYq+Q3QvdKcEHILLLj8S+VFepSfErtmfZCdvxbfIifFSpEzKi+7VJsLMT+zEFeyp1OdwRC1VZrfTLIyR7xTPUcZFYPD9qI7D70uTb4hdpqPXsJIRNYbZtNwch1OI3trh3u2ScoQyM9POnInsUa+OovcwkUP1UfIzPb95n4BaF2ev57NHAej0+BVMF9/Cj9663HN2/JN3SQgslL914bKfiTTDFAz9PlQEL/dSv1H8xl3mtWxh1McFO9EJXlRDaKQDsyKO4vOJW90NFE6yw2tjbc2GeF95sbs0I9enAa6QwQVf/kJQhAD2BzUDKggOyjy1TEhED6sfk+418lQy3c/uj8aw8UEzZ6hIMCd8RohAkumMtIj9m73l2yPWoGHVTPaywkC7Yj9tBM1NxMgcrDwRtk4RO2WHT7Ql5kQCKdJj6kNuOTeyEBYBjLMhGz+O5/YGa84HEiTYEpZ6fFzy26GG2hWtTyteuYrhSyG56BjsT/wQeLRytpTY3D7sIMqZnJ9z1FDrfyjFlGl2TNw9BQysbaxOuwYYZs/7I6BANgkqCknWZC7/BBXvaeKwAmC959I+G39BUE9bExkNlbRoFRyEtNzv+NJ91FuisG3JCS6uYBeRnfv8AkAfKTeg9EYamqnsGfAV7d0f9DghHEQ5IsPGDIUhgoSj7obM4Bu5uhQ3/CYEDTHc92AsFvDK4XGrwUeGBWBHPlS+f4x+CxmmHz2sAGmSFNt65kwZC64mnaoWlu2310laYn8r62AqsR5dfjyK18MEdurdagldzfJtjFXlZs7St4QhdPiye6TPh2/ZAQLU/Fip5s7TDEM16KtRWrK9hmxnQ7bmfa/+7pa10Z8WDPK3NuJ+NN/RAbQ5vHx2uX0Lm7/w7cAEH/hvZA+mt7J7zGw7YtQYwnNN6dpgwkGjjrS3yQoeoYt1EnczmtmJfQZWzUlP3Hlg9Wzlr9IH23q3thGth+QNEANFettxKfskkGOlLk8AqoKJwDqOxAa6UzAx07plSSyNBJSGco9zjnC5gGbDoKvsMDuBR6bGRlGzJ+hFsGa/Izt78aI+WZ6dJlZKp4pGISuv9rV0sAS0MWEwCmfauO7oQZMiakHU35LBxiyJoOMddhUWgcZuC8r4Ksvn75TTcQXLJ7kWtYhGuGqPd9dZuFjBWQHNwosXY5snbHFQq72CvHXhIg+shQxycuLOuWYErwCLZeF24b7F78pO7xw4X6lIAR02hUOf5087Rl0nOaeb6CK4i/KA/EZv76ftOWZtjwxslNr0E/u8rWUmnf3amfg6UZmBAluuoj3Dd7UV+9IAJ6iYcDfSJlgmIImohjfIUMJ27z+opj50Ak9af2LCNrWrBJvMovA1OeNO+MF/MwZvnaCxTgG7Cw4QfSPF6AYCGFt21M8PySZFeV3t2Rqqs5JMzMYzGRgq4o+UaKRgBf9GHi/9X9HXA3wxkCsd/UhnHSh2zUVDiraio/6nP4y3XJqs8ABfALAtCYU7DHPMPRjgcM6Ad/HiSXDAbOdSMkvGZPAkHs8wuQTy6X2Ov/JFvcPuKfV3/r9Q28"
          ),
          n = () => A(r),
          i = () => new Set(n()),
          o = (e, t) => t.forEach((t) => e.add(t));
        (s = new Map(C(r))),
          (l = i()),
          (c = n()),
          (u = new Set(n().map((e) => c[e]))),
          (c = new Set(c)),
          (d = i()),
          i();
        let a = E(r),
          h = r(),
          w = () => {
            let e = new Set();
            return n().forEach((t) => o(e, a[t])), o(e, n()), e;
          };
        (p = x((e) => {
          let t = x(r).map((e) => e + 96);
          if (t.length) {
            let n = e >= h;
            return (
              (t[0] -= 32),
              (t = I(t)),
              n && (t = `Restricted[${t}]`),
              { N: t, P: w(), Q: w(), M: !r(), R: n }
            );
          }
        })),
          (f = i()),
          (m = new Map());
        let _ = n()
          .concat(R(f))
          .sort((e, t) => e - t);
        for (let { V: e, M: t } of (_.forEach((e, t) => {
          let n = r(),
            i = (_[t] = n ? _[t - n] : { V: [], M: new Map() });
          i.V.push(e), f.has(e) || m.set(e, i);
        }),
        new Set(m.values()))) {
          let r = [];
          for (let t of e) {
            let e = p.filter((e) => M(e, t)),
              n = r.find(({ G: t }) => e.some((e) => t.has(e)));
            n || ((n = { G: new Set(), V: [] }), r.push(n)),
              n.V.push(t),
              o(n.G, e);
          }
          let n = r.flatMap((e) => R(e.G));
          for (let { G: e, V: i } of r) {
            let r = new Set(n.filter((t) => !e.has(t)));
            for (let e of i) t.set(e, r);
          }
        }
        g = new Set();
        let k = new Set(),
          S = (e) => (g.has(e) ? k.add(e) : g.add(e));
        for (let e of p) {
          for (let t of e.P) S(t);
          for (let t of e.Q) S(t);
        }
        for (let e of g) m.has(e) || k.has(e) || m.set(e, 1);
        for (let n of (o(g, N(g).map(O)),
        (y = ((e = []),
        (t = A(r)),
        (function t({ S: r, B: n }, i, o) {
          if (!(4 & r) || o !== i[i.length - 1])
            for (let a of (2 & r && (o = i[i.length - 1]),
            1 & r && e.push(i),
            n))
              for (let e of a.Q) t(a, [...i, e], o);
        })(
          (function e(n) {
            return {
              S: r(),
              B: x(() => {
                let n = A(r).map((e) => t[e]);
                if (n.length) return e(n);
              }),
              Q: n,
            };
          })([]),
          []
        ),
        e)
          .map((e) => D.from(e))
          .sort(T)),
        (b = new Map()),
        y)) {
          let e = [b];
          for (let t of n) {
            let r = e.map((e) => {
              let r = e.get(t);
              return r || ((r = new Map()), e.set(t, r)), r;
            });
            65039 === t ? e.push(...r) : (e = r);
          }
          for (let t of e) t.V = n;
        }
      }
      function F(e) {
        return (H(e) ? "" : `${j(U([e]))} `) + k(e);
      }
      function j(e) {
        return `"${e}"\u200E`;
      }
      function U(e, t = 1 / 0, r = k) {
        var n;
        let i = [];
        (n = e[0]),
          L(),
          c.has(n) && i.push("◌"),
          e.length > t &&
            ((t >>= 1), (e = [...e.slice(0, t), 8230, ...e.slice(-t)]));
        let o = 0,
          a = e.length;
        for (let t = 0; t < a; t++) {
          let n = e[t];
          H(n) && (i.push(I(e.slice(o, t))), i.push(r(n)), (o = t + 1));
        }
        return i.push(I(e.slice(o, a))), i.join("");
      }
      function H(e) {
        return L(), d.has(e);
      }
      function Q(e) {
        return Error(`disallowed character: ${F(e)}`);
      }
      function q(e, t) {
        let r = F(t),
          n = p.find((e) => e.P.has(t));
        return (
          n && (r = `${n.N} ${r}`), Error(`illegal mixture: ${e.N} + ${r}`)
        );
      }
      function W(e) {
        return Error(`illegal placement: ${e}`);
      }
      function z(e) {
        return e.filter((e) => 65039 != e);
      }
      function G(e) {
        var t;
        return (t = (function (e, t, r) {
          if (!e) return [];
          L();
          let n = 0;
          return e.split(".").map((e) => {
            let i = (function (e) {
                let t = [];
                for (let r = 0, n = e.length; r < n; ) {
                  let n = e.codePointAt(r);
                  (r += n < 65536 ? 1 : 2), t.push(n);
                }
                return t;
              })(e),
              o = { input: i, offset: n };
            n += i.length + 1;
            try {
              let e,
                n = (o.tokens = (function (e, t, r) {
                  let n = [],
                    i = [];
                  for (e = e.slice().reverse(); e.length; ) {
                    let o = (function (e, t) {
                      let r,
                        n = b,
                        i = e.length;
                      for (; i && (n = n.get(e[--i])); ) {
                        let { V: t } = n;
                        t && ((r = t), (e.length = i));
                      }
                      return r;
                    })(e);
                    if (o) i.length && (n.push(t(i)), (i = [])), n.push(r(o));
                    else {
                      let t = e.pop();
                      if (g.has(t)) i.push(t);
                      else {
                        let e = s.get(t);
                        if (e) i.push(...e);
                        else if (!l.has(t)) throw Q(t);
                      }
                    }
                  }
                  return i.length && n.push(t(i)), n;
                })(i, t, r)),
                a = n.length;
              if (!a) throw Error("empty label");
              let d = (o.output = n.flat());
              if (
                (!(function (e) {
                  for (let t = e.lastIndexOf(95); t > 0; )
                    if (95 !== e[--t])
                      throw Error("underscore allowed only at start");
                })(d),
                !(o.emoji = a > 1 || n[0].is_emoji) && d.every((e) => e < 128))
              )
                !(function (e) {
                  if (e.length >= 4 && 45 == e[2] && 45 == e[3])
                    throw Error(
                      `invalid label extension: "${I(e.slice(0, 4))}"`
                    );
                })(d),
                  (e = "ASCII");
              else {
                let t = n.flatMap((e) => (e.is_emoji ? [] : e));
                if (t.length) {
                  if (c.has(d[0])) throw W("leading combining mark");
                  for (let e = 1; e < a; e++) {
                    let t = n[e];
                    if (!t.is_emoji && c.has(t[0]))
                      throw W(
                        `emoji + combining mark: "${I(n[e - 1])} + ${U([
                          t[0],
                        ])}"`
                      );
                  }
                  !(function (e) {
                    let t = e[0],
                      r = w.get(t);
                    if (r) throw W(`leading ${r}`);
                    let n = e.length,
                      i = -1;
                    for (let o = 1; o < n; o++) {
                      t = e[o];
                      let n = w.get(t);
                      if (n) {
                        if (i == o) throw W(`${r} + ${n}`);
                        (i = o + 1), (r = n);
                      }
                    }
                    if (i == n) throw W(`trailing ${r}`);
                  })(d);
                  let r = R(new Set(t)),
                    [i] = (function (e) {
                      let t = p;
                      for (let r of e) {
                        let e = t.filter((e) => M(e, r));
                        if (!e.length) {
                          if (p.some((e) => M(e, r))) throw q(t[0], r);
                          throw Q(r);
                        }
                        if (((t = e), 1 == e.length)) break;
                      }
                      return t;
                    })(r);
                  (function (e, t) {
                    for (let r of t) if (!M(e, r)) throw q(e, r);
                    if (e.M) {
                      let e = N(t).map(O);
                      for (let t = 1, r = e.length; t < r; t++)
                        if (u.has(e[t])) {
                          let n = t + 1;
                          for (let i; n < r && u.has((i = e[n])); n++)
                            for (let r = t; r < n; r++)
                              if (e[r] == i)
                                throw Error(
                                  `duplicate non-spacing marks: ${F(i)}`
                                );
                          if (n - t > 4)
                            throw Error(
                              `excessive non-spacing marks: ${j(
                                U(e.slice(t - 1, n))
                              )} (${n - t}/4)`
                            );
                          t = n;
                        }
                    }
                  })(i, t),
                    (function (e, t) {
                      let r;
                      let n = [];
                      for (let e of t) {
                        let t = m.get(e);
                        if (1 === t) return;
                        if (t) {
                          let n = t.M.get(e);
                          if (
                            !(r = r ? r.filter((e) => n.has(e)) : R(n)).length
                          )
                            return;
                        } else n.push(e);
                      }
                      if (r) {
                        for (let t of r)
                          if (n.every((e) => M(t, e)))
                            throw Error(
                              `whole-script confusable: ${e.N}/${t.N}`
                            );
                      }
                    })(i, r),
                    (e = i.N);
                } else e = "Emoji";
              }
              o.type = e;
            } catch (e) {
              o.error = e;
            }
            return o;
          });
        })(e, P, z))
          .map(({ input: e, error: r, output: n }) => {
            if (r) {
              let n = r.message;
              throw Error(
                1 == t.length ? n : `Invalid label ${j(U(e, 63))}: ${n}`
              );
            }
            return I(n);
          })
          .join(".");
      }
    },
    40772: (e, t, r) => {
      "use strict";
      function n(
        e,
        { errorInstance: t = Error("timed out"), timeout: r, signal: n }
      ) {
        return new Promise((i, o) => {
          (async () => {
            let a;
            try {
              let s = new AbortController();
              r > 0 &&
                (a = setTimeout(() => {
                  n ? s.abort() : o(t);
                }, r)),
                i(await e({ signal: s?.signal || null }));
            } catch (e) {
              e?.name === "AbortError" && o(t), o(e);
            } finally {
              clearTimeout(a);
            }
          })();
        });
      }
      r.d(t, { w: () => n });
    },
    68219: (e, t, r) => {
      "use strict";
      r.d(t, { d: () => s });
      var n = r(40928),
        i = r(40772),
        o = r(66692),
        a = r(64602);
      function s(e, t = {}) {
        return {
          async request(r) {
            let {
                body: s,
                onRequest: l = t.onRequest,
                onResponse: c = t.onResponse,
                timeout: u = t.timeout ?? 1e4,
              } = r,
              d = { ...(t.fetchOptions ?? {}), ...(r.fetchOptions ?? {}) },
              { headers: h, method: p, signal: f } = d;
            try {
              let t;
              let r = await (0, i.w)(
                async ({ signal: t }) => {
                  let r = {
                      ...d,
                      body: Array.isArray(s)
                        ? (0, o.A)(
                            s.map((e) => ({
                              jsonrpc: "2.0",
                              id: e.id ?? a.q.take(),
                              ...e,
                            }))
                          )
                        : (0, o.A)({
                            jsonrpc: "2.0",
                            id: s.id ?? a.q.take(),
                            ...s,
                          }),
                      headers: { "Content-Type": "application/json", ...h },
                      method: p || "POST",
                      signal: f || (u > 0 ? t : null),
                    },
                    n = new Request(e, r),
                    i = (await l?.(n, r)) ?? { ...r, url: e };
                  return await fetch(i.url ?? e, i);
                },
                {
                  errorInstance: new n.MU({ body: s, url: e }),
                  timeout: u,
                  signal: !0,
                }
              );
              if (
                (c && (await c(r)),
                r.headers.get("Content-Type")?.startsWith("application/json"))
              )
                t = await r.json();
              else {
                t = await r.text();
                try {
                  t = JSON.parse(t || "{}");
                } catch (e) {
                  if (r.ok) throw e;
                  t = { error: t };
                }
              }
              if (!r.ok)
                throw new n.Ci({
                  body: s,
                  details: (0, o.A)(t.error) || r.statusText,
                  headers: r.headers,
                  status: r.status,
                  url: e,
                });
              return t;
            } catch (t) {
              if (t instanceof n.Ci || t instanceof n.MU) throw t;
              throw new n.Ci({ body: s, cause: t, url: e });
            }
          },
        };
      }
    },
    64602: (e, t, r) => {
      "use strict";
      r.d(t, { q: () => n });
      let n = {
        current: 0,
        take() {
          return this.current++;
        },
        reset() {
          this.current = 0;
        },
      };
    },
    43415: (e, t, r) => {
      "use strict";
      let n;
      r.d(t, { Ik: () => eG, z: () => tl }),
        (function (e) {
          (e.assertEqual = (e) => e),
            (e.assertIs = function (e) {}),
            (e.assertNever = function (e) {
              throw Error();
            }),
            (e.arrayToEnum = (e) => {
              let t = {};
              for (let r of e) t[r] = r;
              return t;
            }),
            (e.getValidEnumValues = (t) => {
              let r = e.objectKeys(t).filter((e) => "number" != typeof t[t[e]]),
                n = {};
              for (let e of r) n[e] = t[e];
              return e.objectValues(n);
            }),
            (e.objectValues = (t) =>
              e.objectKeys(t).map(function (e) {
                return t[e];
              })),
            (e.objectKeys =
              "function" == typeof Object.keys
                ? (e) => Object.keys(e)
                : (e) => {
                    let t = [];
                    for (let r in e)
                      Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                    return t;
                  }),
            (e.find = (e, t) => {
              for (let r of e) if (t(r)) return r;
            }),
            (e.isInteger =
              "function" == typeof Number.isInteger
                ? (e) => Number.isInteger(e)
                : (e) =>
                    "number" == typeof e && isFinite(e) && Math.floor(e) === e),
            (e.joinValues = function (e, t = " | ") {
              return e
                .map((e) => ("string" == typeof e ? `'${e}'` : e))
                .join(t);
            }),
            (e.jsonStringifyReplacer = (e, t) =>
              "bigint" == typeof t ? t.toString() : t);
        })(tr || (tr = {})),
        ((tn || (tn = {})).mergeShapes = (e, t) => ({ ...e, ...t }));
      let i = tr.arrayToEnum([
          "string",
          "nan",
          "number",
          "integer",
          "float",
          "boolean",
          "date",
          "bigint",
          "symbol",
          "function",
          "undefined",
          "null",
          "array",
          "object",
          "unknown",
          "promise",
          "void",
          "never",
          "map",
          "set",
        ]),
        o = (e) => {
          switch (typeof e) {
            case "undefined":
              return i.undefined;
            case "string":
              return i.string;
            case "number":
              return isNaN(e) ? i.nan : i.number;
            case "boolean":
              return i.boolean;
            case "function":
              return i.function;
            case "bigint":
              return i.bigint;
            case "symbol":
              return i.symbol;
            case "object":
              if (Array.isArray(e)) return i.array;
              if (null === e) return i.null;
              if (
                e.then &&
                "function" == typeof e.then &&
                e.catch &&
                "function" == typeof e.catch
              )
                return i.promise;
              if ("undefined" != typeof Map && e instanceof Map) return i.map;
              if ("undefined" != typeof Set && e instanceof Set) return i.set;
              if ("undefined" != typeof Date && e instanceof Date)
                return i.date;
              return i.object;
            default:
              return i.unknown;
          }
        },
        a = tr.arrayToEnum([
          "invalid_type",
          "invalid_literal",
          "custom",
          "invalid_union",
          "invalid_union_discriminator",
          "invalid_enum_value",
          "unrecognized_keys",
          "invalid_arguments",
          "invalid_return_type",
          "invalid_date",
          "invalid_string",
          "too_small",
          "too_big",
          "invalid_intersection_types",
          "not_multiple_of",
          "not_finite",
        ]);
      class s extends Error {
        get errors() {
          return this.issues;
        }
        constructor(e) {
          super(),
            (this.issues = []),
            (this.addIssue = (e) => {
              this.issues = [...this.issues, e];
            }),
            (this.addIssues = (e = []) => {
              this.issues = [...this.issues, ...e];
            });
          let t = new.target.prototype;
          Object.setPrototypeOf
            ? Object.setPrototypeOf(this, t)
            : (this.__proto__ = t),
            (this.name = "ZodError"),
            (this.issues = e);
        }
        format(e) {
          let t =
              e ||
              function (e) {
                return e.message;
              },
            r = { _errors: [] },
            n = (e) => {
              for (let i of e.issues)
                if ("invalid_union" === i.code) i.unionErrors.map(n);
                else if ("invalid_return_type" === i.code) n(i.returnTypeError);
                else if ("invalid_arguments" === i.code) n(i.argumentsError);
                else if (0 === i.path.length) r._errors.push(t(i));
                else {
                  let e = r,
                    n = 0;
                  for (; n < i.path.length; ) {
                    let r = i.path[n];
                    n === i.path.length - 1
                      ? ((e[r] = e[r] || { _errors: [] }),
                        e[r]._errors.push(t(i)))
                      : (e[r] = e[r] || { _errors: [] }),
                      (e = e[r]),
                      n++;
                  }
                }
            };
          return n(this), r;
        }
        static assert(e) {
          if (!(e instanceof s)) throw Error(`Not a ZodError: ${e}`);
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, tr.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return 0 === this.issues.length;
        }
        flatten(e = (e) => e.message) {
          let t = {},
            r = [];
          for (let n of this.issues)
            n.path.length > 0
              ? ((t[n.path[0]] = t[n.path[0]] || []), t[n.path[0]].push(e(n)))
              : r.push(e(n));
          return { formErrors: r, fieldErrors: t };
        }
        get formErrors() {
          return this.flatten();
        }
      }
      s.create = (e) => new s(e);
      let l = (e, t) => {
          let r;
          switch (e.code) {
            case a.invalid_type:
              r =
                e.received === i.undefined
                  ? "Required"
                  : `Expected ${e.expected}, received ${e.received}`;
              break;
            case a.invalid_literal:
              r = `Invalid literal value, expected ${JSON.stringify(
                e.expected,
                tr.jsonStringifyReplacer
              )}`;
              break;
            case a.unrecognized_keys:
              r = `Unrecognized key(s) in object: ${tr.joinValues(
                e.keys,
                ", "
              )}`;
              break;
            case a.invalid_union:
              r = "Invalid input";
              break;
            case a.invalid_union_discriminator:
              r = `Invalid discriminator value. Expected ${tr.joinValues(
                e.options
              )}`;
              break;
            case a.invalid_enum_value:
              r = `Invalid enum value. Expected ${tr.joinValues(
                e.options
              )}, received '${e.received}'`;
              break;
            case a.invalid_arguments:
              r = "Invalid function arguments";
              break;
            case a.invalid_return_type:
              r = "Invalid function return type";
              break;
            case a.invalid_date:
              r = "Invalid date";
              break;
            case a.invalid_string:
              "object" == typeof e.validation
                ? "includes" in e.validation
                  ? ((r = `Invalid input: must include "${e.validation.includes}"`),
                    "number" == typeof e.validation.position &&
                      (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`))
                  : "startsWith" in e.validation
                  ? (r = `Invalid input: must start with "${e.validation.startsWith}"`)
                  : "endsWith" in e.validation
                  ? (r = `Invalid input: must end with "${e.validation.endsWith}"`)
                  : tr.assertNever(e.validation)
                : (r =
                    "regex" !== e.validation
                      ? `Invalid ${e.validation}`
                      : "Invalid");
              break;
            case a.too_small:
              r =
                "array" === e.type
                  ? `Array must contain ${
                      e.exact
                        ? "exactly"
                        : e.inclusive
                        ? "at least"
                        : "more than"
                    } ${e.minimum} element(s)`
                  : "string" === e.type
                  ? `String must contain ${
                      e.exact ? "exactly" : e.inclusive ? "at least" : "over"
                    } ${e.minimum} character(s)`
                  : "number" === e.type
                  ? `Number must be ${
                      e.exact
                        ? "exactly equal to "
                        : e.inclusive
                        ? "greater than or equal to "
                        : "greater than "
                    }${e.minimum}`
                  : "date" === e.type
                  ? `Date must be ${
                      e.exact
                        ? "exactly equal to "
                        : e.inclusive
                        ? "greater than or equal to "
                        : "greater than "
                    }${new Date(Number(e.minimum))}`
                  : "Invalid input";
              break;
            case a.too_big:
              r =
                "array" === e.type
                  ? `Array must contain ${
                      e.exact
                        ? "exactly"
                        : e.inclusive
                        ? "at most"
                        : "less than"
                    } ${e.maximum} element(s)`
                  : "string" === e.type
                  ? `String must contain ${
                      e.exact ? "exactly" : e.inclusive ? "at most" : "under"
                    } ${e.maximum} character(s)`
                  : "number" === e.type
                  ? `Number must be ${
                      e.exact
                        ? "exactly"
                        : e.inclusive
                        ? "less than or equal to"
                        : "less than"
                    } ${e.maximum}`
                  : "bigint" === e.type
                  ? `BigInt must be ${
                      e.exact
                        ? "exactly"
                        : e.inclusive
                        ? "less than or equal to"
                        : "less than"
                    } ${e.maximum}`
                  : "date" === e.type
                  ? `Date must be ${
                      e.exact
                        ? "exactly"
                        : e.inclusive
                        ? "smaller than or equal to"
                        : "smaller than"
                    } ${new Date(Number(e.maximum))}`
                  : "Invalid input";
              break;
            case a.custom:
              r = "Invalid input";
              break;
            case a.invalid_intersection_types:
              r = "Intersection results could not be merged";
              break;
            case a.not_multiple_of:
              r = `Number must be a multiple of ${e.multipleOf}`;
              break;
            case a.not_finite:
              r = "Number must be finite";
              break;
            default:
              (r = t.defaultError), tr.assertNever(e);
          }
          return { message: r };
        },
        c = l;
      function u() {
        return c;
      }
      let d = (e) => {
        let { data: t, path: r, errorMaps: n, issueData: i } = e,
          o = [...r, ...(i.path || [])],
          a = { ...i, path: o };
        if (void 0 !== i.message) return { ...i, path: o, message: i.message };
        let s = "";
        for (let e of n
          .filter((e) => !!e)
          .slice()
          .reverse())
          s = e(a, { data: t, defaultError: s }).message;
        return { ...i, path: o, message: s };
      };
      function h(e, t) {
        let r = u(),
          n = d({
            issueData: t,
            data: e.data,
            path: e.path,
            errorMaps: [
              e.common.contextualErrorMap,
              e.schemaErrorMap,
              r,
              r === l ? void 0 : l,
            ].filter((e) => !!e),
          });
        e.common.issues.push(n);
      }
      class p {
        constructor() {
          this.value = "valid";
        }
        dirty() {
          "valid" === this.value && (this.value = "dirty");
        }
        abort() {
          "aborted" !== this.value && (this.value = "aborted");
        }
        static mergeArray(e, t) {
          let r = [];
          for (let n of t) {
            if ("aborted" === n.status) return f;
            "dirty" === n.status && e.dirty(), r.push(n.value);
          }
          return { status: e.value, value: r };
        }
        static async mergeObjectAsync(e, t) {
          let r = [];
          for (let e of t) {
            let t = await e.key,
              n = await e.value;
            r.push({ key: t, value: n });
          }
          return p.mergeObjectSync(e, r);
        }
        static mergeObjectSync(e, t) {
          let r = {};
          for (let n of t) {
            let { key: t, value: i } = n;
            if ("aborted" === t.status || "aborted" === i.status) return f;
            "dirty" === t.status && e.dirty(),
              "dirty" === i.status && e.dirty(),
              "__proto__" !== t.value &&
                (void 0 !== i.value || n.alwaysSet) &&
                (r[t.value] = i.value);
          }
          return { status: e.value, value: r };
        }
      }
      let f = Object.freeze({ status: "aborted" }),
        m = (e) => ({ status: "dirty", value: e }),
        g = (e) => ({ status: "valid", value: e }),
        y = (e) => "aborted" === e.status,
        b = (e) => "dirty" === e.status,
        w = (e) => "valid" === e.status,
        v = (e) => "undefined" != typeof Promise && e instanceof Promise;
      function A(e, t, r, n) {
        if ("a" === r && !n)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
      }
      function E(e, t, r, n, i) {
        if ("m" === n) throw TypeError("Private method is not writable");
        if ("a" === n && !i)
          throw TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !i : !t.has(e))
          throw TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === n ? i.call(e, r) : i ? (i.value = r) : t.set(e, r), r;
      }
      "function" == typeof SuppressedError && SuppressedError,
        (function (e) {
          (e.errToObj = (e) =>
            "string" == typeof e ? { message: e } : e || {}),
            (e.toString = (e) =>
              "string" == typeof e ? e : null == e ? void 0 : e.message);
        })(ti || (ti = {}));
      class C {
        constructor(e, t, r, n) {
          (this._cachedPath = []),
            (this.parent = e),
            (this.data = t),
            (this._path = r),
            (this._key = n);
        }
        get path() {
          return (
            this._cachedPath.length ||
              (this._key instanceof Array
                ? this._cachedPath.push(...this._path, ...this._key)
                : this._cachedPath.push(...this._path, this._key)),
            this._cachedPath
          );
        }
      }
      let x = (e, t) => {
        if (w(t)) return { success: !0, data: t.value };
        if (!e.common.issues.length)
          throw Error("Validation failed but no issues detected.");
        return {
          success: !1,
          get error() {
            if (this._error) return this._error;
            let t = new s(e.common.issues);
            return (this._error = t), this._error;
          },
        };
      };
      function _(e) {
        if (!e) return {};
        let {
          errorMap: t,
          invalid_type_error: r,
          required_error: n,
          description: i,
        } = e;
        if (t && (r || n))
          throw Error(
            'Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.'
          );
        return t
          ? { errorMap: t, description: i }
          : {
              errorMap: (t, i) => {
                var o, a;
                let { message: s } = e;
                return "invalid_enum_value" === t.code
                  ? { message: null != s ? s : i.defaultError }
                  : void 0 === i.data
                  ? {
                      message:
                        null !== (o = null != s ? s : n) && void 0 !== o
                          ? o
                          : i.defaultError,
                    }
                  : "invalid_type" !== t.code
                  ? { message: i.defaultError }
                  : {
                      message:
                        null !== (a = null != s ? s : r) && void 0 !== a
                          ? a
                          : i.defaultError,
                    };
              },
              description: i,
            };
      }
      class k {
        get description() {
          return this._def.description;
        }
        _getType(e) {
          return o(e.data);
        }
        _getOrReturnCtx(e, t) {
          return (
            t || {
              common: e.parent.common,
              data: e.data,
              parsedType: o(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            }
          );
        }
        _processInputParams(e) {
          return {
            status: new p(),
            ctx: {
              common: e.parent.common,
              data: e.data,
              parsedType: o(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            },
          };
        }
        _parseSync(e) {
          let t = this._parse(e);
          if (v(t)) throw Error("Synchronous parse encountered promise.");
          return t;
        }
        _parseAsync(e) {
          return Promise.resolve(this._parse(e));
        }
        parse(e, t) {
          let r = this.safeParse(e, t);
          if (r.success) return r.data;
          throw r.error;
        }
        safeParse(e, t) {
          var r;
          let n = {
              common: {
                issues: [],
                async:
                  null !== (r = null == t ? void 0 : t.async) &&
                  void 0 !== r &&
                  r,
                contextualErrorMap: null == t ? void 0 : t.errorMap,
              },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: o(e),
            },
            i = this._parseSync({ data: e, path: n.path, parent: n });
          return x(n, i);
        }
        "~validate"(e) {
          var t, r;
          let n = {
            common: { issues: [], async: !!this["~standard"].async },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: o(e),
          };
          if (!this["~standard"].async)
            try {
              let t = this._parseSync({ data: e, path: [], parent: n });
              return w(t) ? { value: t.value } : { issues: n.common.issues };
            } catch (e) {
              (null ===
                (r =
                  null === (t = null == e ? void 0 : e.message) || void 0 === t
                    ? void 0
                    : t.toLowerCase()) || void 0 === r
                ? void 0
                : r.includes("encountered")) && (this["~standard"].async = !0),
                (n.common = { issues: [], async: !0 });
            }
          return this._parseAsync({ data: e, path: [], parent: n }).then((e) =>
            w(e) ? { value: e.value } : { issues: n.common.issues }
          );
        }
        async parseAsync(e, t) {
          let r = await this.safeParseAsync(e, t);
          if (r.success) return r.data;
          throw r.error;
        }
        async safeParseAsync(e, t) {
          let r = {
              common: {
                issues: [],
                contextualErrorMap: null == t ? void 0 : t.errorMap,
                async: !0,
              },
              path: (null == t ? void 0 : t.path) || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: o(e),
            },
            n = this._parse({ data: e, path: r.path, parent: r });
          return x(r, await (v(n) ? n : Promise.resolve(n)));
        }
        refine(e, t) {
          let r = (e) =>
            "string" == typeof t || void 0 === t
              ? { message: t }
              : "function" == typeof t
              ? t(e)
              : t;
          return this._refinement((t, n) => {
            let i = e(t),
              o = () => n.addIssue({ code: a.custom, ...r(t) });
            return "undefined" != typeof Promise && i instanceof Promise
              ? i.then((e) => !!e || (o(), !1))
              : !!i || (o(), !1);
          });
        }
        refinement(e, t) {
          return this._refinement(
            (r, n) =>
              !!e(r) || (n.addIssue("function" == typeof t ? t(r, n) : t), !1)
          );
        }
        _refinement(e) {
          return new ev({
            schema: this,
            typeName: ts.ZodEffects,
            effect: { type: "refinement", refinement: e },
          });
        }
        superRefine(e) {
          return this._refinement(e);
        }
        constructor(e) {
          (this.spa = this.safeParseAsync),
            (this._def = e),
            (this.parse = this.parse.bind(this)),
            (this.safeParse = this.safeParse.bind(this)),
            (this.parseAsync = this.parseAsync.bind(this)),
            (this.safeParseAsync = this.safeParseAsync.bind(this)),
            (this.spa = this.spa.bind(this)),
            (this.refine = this.refine.bind(this)),
            (this.refinement = this.refinement.bind(this)),
            (this.superRefine = this.superRefine.bind(this)),
            (this.optional = this.optional.bind(this)),
            (this.nullable = this.nullable.bind(this)),
            (this.nullish = this.nullish.bind(this)),
            (this.array = this.array.bind(this)),
            (this.promise = this.promise.bind(this)),
            (this.or = this.or.bind(this)),
            (this.and = this.and.bind(this)),
            (this.transform = this.transform.bind(this)),
            (this.brand = this.brand.bind(this)),
            (this.default = this.default.bind(this)),
            (this.catch = this.catch.bind(this)),
            (this.describe = this.describe.bind(this)),
            (this.pipe = this.pipe.bind(this)),
            (this.readonly = this.readonly.bind(this)),
            (this.isNullable = this.isNullable.bind(this)),
            (this.isOptional = this.isOptional.bind(this)),
            (this["~standard"] = {
              version: 1,
              vendor: "zod",
              validate: (e) => this["~validate"](e),
            });
        }
        optional() {
          return eA.create(this, this._def);
        }
        nullable() {
          return eE.create(this, this._def);
        }
        nullish() {
          return this.nullable().optional();
        }
        array() {
          return en.create(this);
        }
        promise() {
          return ew.create(this, this._def);
        }
        or(e) {
          return eo.create([this, e], this._def);
        }
        and(e) {
          return el.create(this, e, this._def);
        }
        transform(e) {
          return new ev({
            ..._(this._def),
            schema: this,
            typeName: ts.ZodEffects,
            effect: { type: "transform", transform: e },
          });
        }
        default(e) {
          return new eC({
            ..._(this._def),
            innerType: this,
            defaultValue: "function" == typeof e ? e : () => e,
            typeName: ts.ZodDefault,
          });
        }
        brand() {
          return new eI({
            typeName: ts.ZodBranded,
            type: this,
            ..._(this._def),
          });
        }
        catch(e) {
          return new ex({
            ..._(this._def),
            innerType: this,
            catchValue: "function" == typeof e ? e : () => e,
            typeName: ts.ZodCatch,
          });
        }
        describe(e) {
          return new this.constructor({ ...this._def, description: e });
        }
        pipe(e) {
          return eT.create(this, e);
        }
        readonly() {
          return eS.create(this);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      }
      let I = /^c[^\s-]{8,}$/i,
        T = /^[0-9a-z]+$/,
        S = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
        O =
          /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
        B = /^[a-z0-9_-]{21}$/i,
        N = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
        P =
          /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
        R =
          /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
        M =
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
        D =
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
        L =
          /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
        F =
          /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
        j = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
        U =
          /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
        H =
          "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
        Q = RegExp(`^${H}$`);
      function q(e) {
        let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
        return (
          e.precision
            ? (t = `${t}\\.\\d{${e.precision}}`)
            : null == e.precision && (t = `${t}(\\.\\d+)?`),
          t
        );
      }
      function W(e) {
        let t = `${H}T${q(e)}`,
          r = [];
        return (
          r.push(e.local ? "Z?" : "Z"),
          e.offset && r.push("([+-]\\d{2}:?\\d{2})"),
          (t = `${t}(${r.join("|")})`),
          RegExp(`^${t}$`)
        );
      }
      class z extends k {
        _parse(e) {
          var t, r, o, s;
          let l;
          if (
            (this._def.coerce && (e.data = String(e.data)),
            this._getType(e) !== i.string)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: a.invalid_type,
                expected: i.string,
                received: t.parsedType,
              }),
              f
            );
          }
          let c = new p();
          for (let i of this._def.checks)
            if ("min" === i.kind)
              e.data.length < i.value &&
                (h((l = this._getOrReturnCtx(e, l)), {
                  code: a.too_small,
                  minimum: i.value,
                  type: "string",
                  inclusive: !0,
                  exact: !1,
                  message: i.message,
                }),
                c.dirty());
            else if ("max" === i.kind)
              e.data.length > i.value &&
                (h((l = this._getOrReturnCtx(e, l)), {
                  code: a.too_big,
                  maximum: i.value,
                  type: "string",
                  inclusive: !0,
                  exact: !1,
                  message: i.message,
                }),
                c.dirty());
            else if ("length" === i.kind) {
              let t = e.data.length > i.value,
                r = e.data.length < i.value;
              (t || r) &&
                ((l = this._getOrReturnCtx(e, l)),
                t
                  ? h(l, {
                      code: a.too_big,
                      maximum: i.value,
                      type: "string",
                      inclusive: !0,
                      exact: !0,
                      message: i.message,
                    })
                  : r &&
                    h(l, {
                      code: a.too_small,
                      minimum: i.value,
                      type: "string",
                      inclusive: !0,
                      exact: !0,
                      message: i.message,
                    }),
                c.dirty());
            } else if ("email" === i.kind)
              R.test(e.data) ||
                (h((l = this._getOrReturnCtx(e, l)), {
                  validation: "email",
                  code: a.invalid_string,
                  message: i.message,
                }),
                c.dirty());
            else if ("emoji" === i.kind)
              n ||
                (n = RegExp(
                  "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
                  "u"
                )),
                n.test(e.data) ||
                  (h((l = this._getOrReturnCtx(e, l)), {
                    validation: "emoji",
                    code: a.invalid_string,
                    message: i.message,
                  }),
                  c.dirty());
            else if ("uuid" === i.kind)
              O.test(e.data) ||
                (h((l = this._getOrReturnCtx(e, l)), {
                  validation: "uuid",
                  code: a.invalid_string,
                  message: i.message,
                }),
                c.dirty());
            else if ("nanoid" === i.kind)
              B.test(e.data) ||
                (h((l = this._getOrReturnCtx(e, l)), {
                  validation: "nanoid",
                  code: a.invalid_string,
                  message: i.message,
                }),
                c.dirty());
            else if ("cuid" === i.kind)
              I.test(e.data) ||
                (h((l = this._getOrReturnCtx(e, l)), {
                  validation: "cuid",
                  code: a.invalid_string,
                  message: i.message,
                }),
                c.dirty());
            else if ("cuid2" === i.kind)
              T.test(e.data) ||
                (h((l = this._getOrReturnCtx(e, l)), {
                  validation: "cuid2",
                  code: a.invalid_string,
                  message: i.message,
                }),
                c.dirty());
            else if ("ulid" === i.kind)
              S.test(e.data) ||
                (h((l = this._getOrReturnCtx(e, l)), {
                  validation: "ulid",
                  code: a.invalid_string,
                  message: i.message,
                }),
                c.dirty());
            else if ("url" === i.kind)
              try {
                new URL(e.data);
              } catch (t) {
                h((l = this._getOrReturnCtx(e, l)), {
                  validation: "url",
                  code: a.invalid_string,
                  message: i.message,
                }),
                  c.dirty();
              }
            else
              "regex" === i.kind
                ? ((i.regex.lastIndex = 0),
                  i.regex.test(e.data) ||
                    (h((l = this._getOrReturnCtx(e, l)), {
                      validation: "regex",
                      code: a.invalid_string,
                      message: i.message,
                    }),
                    c.dirty()))
                : "trim" === i.kind
                ? (e.data = e.data.trim())
                : "includes" === i.kind
                ? e.data.includes(i.value, i.position) ||
                  (h((l = this._getOrReturnCtx(e, l)), {
                    code: a.invalid_string,
                    validation: { includes: i.value, position: i.position },
                    message: i.message,
                  }),
                  c.dirty())
                : "toLowerCase" === i.kind
                ? (e.data = e.data.toLowerCase())
                : "toUpperCase" === i.kind
                ? (e.data = e.data.toUpperCase())
                : "startsWith" === i.kind
                ? e.data.startsWith(i.value) ||
                  (h((l = this._getOrReturnCtx(e, l)), {
                    code: a.invalid_string,
                    validation: { startsWith: i.value },
                    message: i.message,
                  }),
                  c.dirty())
                : "endsWith" === i.kind
                ? e.data.endsWith(i.value) ||
                  (h((l = this._getOrReturnCtx(e, l)), {
                    code: a.invalid_string,
                    validation: { endsWith: i.value },
                    message: i.message,
                  }),
                  c.dirty())
                : "datetime" === i.kind
                ? W(i).test(e.data) ||
                  (h((l = this._getOrReturnCtx(e, l)), {
                    code: a.invalid_string,
                    validation: "datetime",
                    message: i.message,
                  }),
                  c.dirty())
                : "date" === i.kind
                ? Q.test(e.data) ||
                  (h((l = this._getOrReturnCtx(e, l)), {
                    code: a.invalid_string,
                    validation: "date",
                    message: i.message,
                  }),
                  c.dirty())
                : "time" === i.kind
                ? RegExp(`^${q(i)}$`).test(e.data) ||
                  (h((l = this._getOrReturnCtx(e, l)), {
                    code: a.invalid_string,
                    validation: "time",
                    message: i.message,
                  }),
                  c.dirty())
                : "duration" === i.kind
                ? P.test(e.data) ||
                  (h((l = this._getOrReturnCtx(e, l)), {
                    validation: "duration",
                    code: a.invalid_string,
                    message: i.message,
                  }),
                  c.dirty())
                : "ip" === i.kind
                ? ((t = e.data),
                  (("v4" === (r = i.version) || !r) && M.test(t)) ||
                    (("v6" === r || !r) && L.test(t)) ||
                    (h((l = this._getOrReturnCtx(e, l)), {
                      validation: "ip",
                      code: a.invalid_string,
                      message: i.message,
                    }),
                    c.dirty()))
                : "jwt" === i.kind
                ? !(function (e, t) {
                    if (!N.test(e)) return !1;
                    try {
                      let [r] = e.split("."),
                        n = r
                          .replace(/-/g, "+")
                          .replace(/_/g, "/")
                          .padEnd(r.length + ((4 - (r.length % 4)) % 4), "="),
                        i = JSON.parse(atob(n));
                      if (
                        "object" != typeof i ||
                        null === i ||
                        !i.typ ||
                        !i.alg ||
                        (t && i.alg !== t)
                      )
                        return !1;
                      return !0;
                    } catch (e) {
                      return !1;
                    }
                  })(e.data, i.alg) &&
                  (h((l = this._getOrReturnCtx(e, l)), {
                    validation: "jwt",
                    code: a.invalid_string,
                    message: i.message,
                  }),
                  c.dirty())
                : "cidr" === i.kind
                ? ((o = e.data),
                  (("v4" === (s = i.version) || !s) && D.test(o)) ||
                    (("v6" === s || !s) && F.test(o)) ||
                    (h((l = this._getOrReturnCtx(e, l)), {
                      validation: "cidr",
                      code: a.invalid_string,
                      message: i.message,
                    }),
                    c.dirty()))
                : "base64" === i.kind
                ? j.test(e.data) ||
                  (h((l = this._getOrReturnCtx(e, l)), {
                    validation: "base64",
                    code: a.invalid_string,
                    message: i.message,
                  }),
                  c.dirty())
                : "base64url" === i.kind
                ? U.test(e.data) ||
                  (h((l = this._getOrReturnCtx(e, l)), {
                    validation: "base64url",
                    code: a.invalid_string,
                    message: i.message,
                  }),
                  c.dirty())
                : tr.assertNever(i);
          return { status: c.value, value: e.data };
        }
        _regex(e, t, r) {
          return this.refinement((t) => e.test(t), {
            validation: t,
            code: a.invalid_string,
            ...ti.errToObj(r),
          });
        }
        _addCheck(e) {
          return new z({ ...this._def, checks: [...this._def.checks, e] });
        }
        email(e) {
          return this._addCheck({ kind: "email", ...ti.errToObj(e) });
        }
        url(e) {
          return this._addCheck({ kind: "url", ...ti.errToObj(e) });
        }
        emoji(e) {
          return this._addCheck({ kind: "emoji", ...ti.errToObj(e) });
        }
        uuid(e) {
          return this._addCheck({ kind: "uuid", ...ti.errToObj(e) });
        }
        nanoid(e) {
          return this._addCheck({ kind: "nanoid", ...ti.errToObj(e) });
        }
        cuid(e) {
          return this._addCheck({ kind: "cuid", ...ti.errToObj(e) });
        }
        cuid2(e) {
          return this._addCheck({ kind: "cuid2", ...ti.errToObj(e) });
        }
        ulid(e) {
          return this._addCheck({ kind: "ulid", ...ti.errToObj(e) });
        }
        base64(e) {
          return this._addCheck({ kind: "base64", ...ti.errToObj(e) });
        }
        base64url(e) {
          return this._addCheck({ kind: "base64url", ...ti.errToObj(e) });
        }
        jwt(e) {
          return this._addCheck({ kind: "jwt", ...ti.errToObj(e) });
        }
        ip(e) {
          return this._addCheck({ kind: "ip", ...ti.errToObj(e) });
        }
        cidr(e) {
          return this._addCheck({ kind: "cidr", ...ti.errToObj(e) });
        }
        datetime(e) {
          var t, r;
          return "string" == typeof e
            ? this._addCheck({
                kind: "datetime",
                precision: null,
                offset: !1,
                local: !1,
                message: e,
              })
            : this._addCheck({
                kind: "datetime",
                precision:
                  void 0 === (null == e ? void 0 : e.precision)
                    ? null
                    : null == e
                    ? void 0
                    : e.precision,
                offset:
                  null !== (t = null == e ? void 0 : e.offset) &&
                  void 0 !== t &&
                  t,
                local:
                  null !== (r = null == e ? void 0 : e.local) &&
                  void 0 !== r &&
                  r,
                ...ti.errToObj(null == e ? void 0 : e.message),
              });
        }
        date(e) {
          return this._addCheck({ kind: "date", message: e });
        }
        time(e) {
          return "string" == typeof e
            ? this._addCheck({ kind: "time", precision: null, message: e })
            : this._addCheck({
                kind: "time",
                precision:
                  void 0 === (null == e ? void 0 : e.precision)
                    ? null
                    : null == e
                    ? void 0
                    : e.precision,
                ...ti.errToObj(null == e ? void 0 : e.message),
              });
        }
        duration(e) {
          return this._addCheck({ kind: "duration", ...ti.errToObj(e) });
        }
        regex(e, t) {
          return this._addCheck({ kind: "regex", regex: e, ...ti.errToObj(t) });
        }
        includes(e, t) {
          return this._addCheck({
            kind: "includes",
            value: e,
            position: null == t ? void 0 : t.position,
            ...ti.errToObj(null == t ? void 0 : t.message),
          });
        }
        startsWith(e, t) {
          return this._addCheck({
            kind: "startsWith",
            value: e,
            ...ti.errToObj(t),
          });
        }
        endsWith(e, t) {
          return this._addCheck({
            kind: "endsWith",
            value: e,
            ...ti.errToObj(t),
          });
        }
        min(e, t) {
          return this._addCheck({ kind: "min", value: e, ...ti.errToObj(t) });
        }
        max(e, t) {
          return this._addCheck({ kind: "max", value: e, ...ti.errToObj(t) });
        }
        length(e, t) {
          return this._addCheck({
            kind: "length",
            value: e,
            ...ti.errToObj(t),
          });
        }
        nonempty(e) {
          return this.min(1, ti.errToObj(e));
        }
        trim() {
          return new z({
            ...this._def,
            checks: [...this._def.checks, { kind: "trim" }],
          });
        }
        toLowerCase() {
          return new z({
            ...this._def,
            checks: [...this._def.checks, { kind: "toLowerCase" }],
          });
        }
        toUpperCase() {
          return new z({
            ...this._def,
            checks: [...this._def.checks, { kind: "toUpperCase" }],
          });
        }
        get isDatetime() {
          return !!this._def.checks.find((e) => "datetime" === e.kind);
        }
        get isDate() {
          return !!this._def.checks.find((e) => "date" === e.kind);
        }
        get isTime() {
          return !!this._def.checks.find((e) => "time" === e.kind);
        }
        get isDuration() {
          return !!this._def.checks.find((e) => "duration" === e.kind);
        }
        get isEmail() {
          return !!this._def.checks.find((e) => "email" === e.kind);
        }
        get isURL() {
          return !!this._def.checks.find((e) => "url" === e.kind);
        }
        get isEmoji() {
          return !!this._def.checks.find((e) => "emoji" === e.kind);
        }
        get isUUID() {
          return !!this._def.checks.find((e) => "uuid" === e.kind);
        }
        get isNANOID() {
          return !!this._def.checks.find((e) => "nanoid" === e.kind);
        }
        get isCUID() {
          return !!this._def.checks.find((e) => "cuid" === e.kind);
        }
        get isCUID2() {
          return !!this._def.checks.find((e) => "cuid2" === e.kind);
        }
        get isULID() {
          return !!this._def.checks.find((e) => "ulid" === e.kind);
        }
        get isIP() {
          return !!this._def.checks.find((e) => "ip" === e.kind);
        }
        get isCIDR() {
          return !!this._def.checks.find((e) => "cidr" === e.kind);
        }
        get isBase64() {
          return !!this._def.checks.find((e) => "base64" === e.kind);
        }
        get isBase64url() {
          return !!this._def.checks.find((e) => "base64url" === e.kind);
        }
        get minLength() {
          let e = null;
          for (let t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxLength() {
          let e = null;
          for (let t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      z.create = (e) => {
        var t;
        return new z({
          checks: [],
          typeName: ts.ZodString,
          coerce:
            null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
          ..._(e),
        });
      };
      class G extends k {
        constructor() {
          super(...arguments),
            (this.min = this.gte),
            (this.max = this.lte),
            (this.step = this.multipleOf);
        }
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = Number(e.data)),
            this._getType(e) !== i.number)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: a.invalid_type,
                expected: i.number,
                received: t.parsedType,
              }),
              f
            );
          }
          let r = new p();
          for (let n of this._def.checks)
            "int" === n.kind
              ? tr.isInteger(e.data) ||
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: a.invalid_type,
                  expected: "integer",
                  received: "float",
                  message: n.message,
                }),
                r.dirty())
              : "min" === n.kind
              ? (n.inclusive ? e.data < n.value : e.data <= n.value) &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: a.too_small,
                  minimum: n.value,
                  type: "number",
                  inclusive: n.inclusive,
                  exact: !1,
                  message: n.message,
                }),
                r.dirty())
              : "max" === n.kind
              ? (n.inclusive ? e.data > n.value : e.data >= n.value) &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: a.too_big,
                  maximum: n.value,
                  type: "number",
                  inclusive: n.inclusive,
                  exact: !1,
                  message: n.message,
                }),
                r.dirty())
              : "multipleOf" === n.kind
              ? 0 !==
                  (function (e, t) {
                    let r = (e.toString().split(".")[1] || "").length,
                      n = (t.toString().split(".")[1] || "").length,
                      i = r > n ? r : n;
                    return (
                      (parseInt(e.toFixed(i).replace(".", "")) %
                        parseInt(t.toFixed(i).replace(".", ""))) /
                      Math.pow(10, i)
                    );
                  })(e.data, n.value) &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: a.not_multiple_of,
                  multipleOf: n.value,
                  message: n.message,
                }),
                r.dirty())
              : "finite" === n.kind
              ? Number.isFinite(e.data) ||
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: a.not_finite,
                  message: n.message,
                }),
                r.dirty())
              : tr.assertNever(n);
          return { status: r.value, value: e.data };
        }
        gte(e, t) {
          return this.setLimit("min", e, !0, ti.toString(t));
        }
        gt(e, t) {
          return this.setLimit("min", e, !1, ti.toString(t));
        }
        lte(e, t) {
          return this.setLimit("max", e, !0, ti.toString(t));
        }
        lt(e, t) {
          return this.setLimit("max", e, !1, ti.toString(t));
        }
        setLimit(e, t, r, n) {
          return new G({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: r, message: ti.toString(n) },
            ],
          });
        }
        _addCheck(e) {
          return new G({ ...this._def, checks: [...this._def.checks, e] });
        }
        int(e) {
          return this._addCheck({ kind: "int", message: ti.toString(e) });
        }
        positive(e) {
          return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: ti.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: ti.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: ti.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: ti.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: ti.toString(t),
          });
        }
        finite(e) {
          return this._addCheck({ kind: "finite", message: ti.toString(e) });
        }
        safe(e) {
          return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: ti.toString(e),
          })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: ti.toString(e),
          });
        }
        get minValue() {
          let e = null;
          for (let t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (let t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
        get isInt() {
          return !!this._def.checks.find(
            (e) =>
              "int" === e.kind ||
              ("multipleOf" === e.kind && tr.isInteger(e.value))
          );
        }
        get isFinite() {
          let e = null,
            t = null;
          for (let r of this._def.checks) {
            if (
              "finite" === r.kind ||
              "int" === r.kind ||
              "multipleOf" === r.kind
            )
              return !0;
            "min" === r.kind
              ? (null === t || r.value > t) && (t = r.value)
              : "max" === r.kind &&
                (null === e || r.value < e) &&
                (e = r.value);
          }
          return Number.isFinite(t) && Number.isFinite(e);
        }
      }
      G.create = (e) =>
        new G({
          checks: [],
          typeName: ts.ZodNumber,
          coerce: (null == e ? void 0 : e.coerce) || !1,
          ..._(e),
        });
      class Z extends k {
        constructor() {
          super(...arguments), (this.min = this.gte), (this.max = this.lte);
        }
        _parse(e) {
          let t;
          if (this._def.coerce)
            try {
              e.data = BigInt(e.data);
            } catch (t) {
              return this._getInvalidInput(e);
            }
          if (this._getType(e) !== i.bigint) return this._getInvalidInput(e);
          let r = new p();
          for (let n of this._def.checks)
            "min" === n.kind
              ? (n.inclusive ? e.data < n.value : e.data <= n.value) &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: a.too_small,
                  type: "bigint",
                  minimum: n.value,
                  inclusive: n.inclusive,
                  message: n.message,
                }),
                r.dirty())
              : "max" === n.kind
              ? (n.inclusive ? e.data > n.value : e.data >= n.value) &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: a.too_big,
                  type: "bigint",
                  maximum: n.value,
                  inclusive: n.inclusive,
                  message: n.message,
                }),
                r.dirty())
              : "multipleOf" === n.kind
              ? e.data % n.value !== BigInt(0) &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: a.not_multiple_of,
                  multipleOf: n.value,
                  message: n.message,
                }),
                r.dirty())
              : tr.assertNever(n);
          return { status: r.value, value: e.data };
        }
        _getInvalidInput(e) {
          let t = this._getOrReturnCtx(e);
          return (
            h(t, {
              code: a.invalid_type,
              expected: i.bigint,
              received: t.parsedType,
            }),
            f
          );
        }
        gte(e, t) {
          return this.setLimit("min", e, !0, ti.toString(t));
        }
        gt(e, t) {
          return this.setLimit("min", e, !1, ti.toString(t));
        }
        lte(e, t) {
          return this.setLimit("max", e, !0, ti.toString(t));
        }
        lt(e, t) {
          return this.setLimit("max", e, !1, ti.toString(t));
        }
        setLimit(e, t, r, n) {
          return new Z({
            ...this._def,
            checks: [
              ...this._def.checks,
              { kind: e, value: t, inclusive: r, message: ti.toString(n) },
            ],
          });
        }
        _addCheck(e) {
          return new Z({ ...this._def, checks: [...this._def.checks, e] });
        }
        positive(e) {
          return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: ti.toString(e),
          });
        }
        negative(e) {
          return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: ti.toString(e),
          });
        }
        nonpositive(e) {
          return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: ti.toString(e),
          });
        }
        nonnegative(e) {
          return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: ti.toString(e),
          });
        }
        multipleOf(e, t) {
          return this._addCheck({
            kind: "multipleOf",
            value: e,
            message: ti.toString(t),
          });
        }
        get minValue() {
          let e = null;
          for (let t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return e;
        }
        get maxValue() {
          let e = null;
          for (let t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return e;
        }
      }
      Z.create = (e) => {
        var t;
        return new Z({
          checks: [],
          typeName: ts.ZodBigInt,
          coerce:
            null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
          ..._(e),
        });
      };
      class K extends k {
        _parse(e) {
          if (
            (this._def.coerce && (e.data = !!e.data),
            this._getType(e) !== i.boolean)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: a.invalid_type,
                expected: i.boolean,
                received: t.parsedType,
              }),
              f
            );
          }
          return g(e.data);
        }
      }
      K.create = (e) =>
        new K({
          typeName: ts.ZodBoolean,
          coerce: (null == e ? void 0 : e.coerce) || !1,
          ..._(e),
        });
      class V extends k {
        _parse(e) {
          let t;
          if (
            (this._def.coerce && (e.data = new Date(e.data)),
            this._getType(e) !== i.date)
          ) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: a.invalid_type,
                expected: i.date,
                received: t.parsedType,
              }),
              f
            );
          }
          if (isNaN(e.data.getTime()))
            return h(this._getOrReturnCtx(e), { code: a.invalid_date }), f;
          let r = new p();
          for (let n of this._def.checks)
            "min" === n.kind
              ? e.data.getTime() < n.value &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: a.too_small,
                  message: n.message,
                  inclusive: !0,
                  exact: !1,
                  minimum: n.value,
                  type: "date",
                }),
                r.dirty())
              : "max" === n.kind
              ? e.data.getTime() > n.value &&
                (h((t = this._getOrReturnCtx(e, t)), {
                  code: a.too_big,
                  message: n.message,
                  inclusive: !0,
                  exact: !1,
                  maximum: n.value,
                  type: "date",
                }),
                r.dirty())
              : tr.assertNever(n);
          return { status: r.value, value: new Date(e.data.getTime()) };
        }
        _addCheck(e) {
          return new V({ ...this._def, checks: [...this._def.checks, e] });
        }
        min(e, t) {
          return this._addCheck({
            kind: "min",
            value: e.getTime(),
            message: ti.toString(t),
          });
        }
        max(e, t) {
          return this._addCheck({
            kind: "max",
            value: e.getTime(),
            message: ti.toString(t),
          });
        }
        get minDate() {
          let e = null;
          for (let t of this._def.checks)
            "min" === t.kind && (null === e || t.value > e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
        get maxDate() {
          let e = null;
          for (let t of this._def.checks)
            "max" === t.kind && (null === e || t.value < e) && (e = t.value);
          return null != e ? new Date(e) : null;
        }
      }
      V.create = (e) =>
        new V({
          checks: [],
          coerce: (null == e ? void 0 : e.coerce) || !1,
          typeName: ts.ZodDate,
          ..._(e),
        });
      class Y extends k {
        _parse(e) {
          if (this._getType(e) !== i.symbol) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: a.invalid_type,
                expected: i.symbol,
                received: t.parsedType,
              }),
              f
            );
          }
          return g(e.data);
        }
      }
      Y.create = (e) => new Y({ typeName: ts.ZodSymbol, ..._(e) });
      class J extends k {
        _parse(e) {
          if (this._getType(e) !== i.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: a.invalid_type,
                expected: i.undefined,
                received: t.parsedType,
              }),
              f
            );
          }
          return g(e.data);
        }
      }
      J.create = (e) => new J({ typeName: ts.ZodUndefined, ..._(e) });
      class X extends k {
        _parse(e) {
          if (this._getType(e) !== i.null) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: a.invalid_type,
                expected: i.null,
                received: t.parsedType,
              }),
              f
            );
          }
          return g(e.data);
        }
      }
      X.create = (e) => new X({ typeName: ts.ZodNull, ..._(e) });
      class $ extends k {
        constructor() {
          super(...arguments), (this._any = !0);
        }
        _parse(e) {
          return g(e.data);
        }
      }
      $.create = (e) => new $({ typeName: ts.ZodAny, ..._(e) });
      class ee extends k {
        constructor() {
          super(...arguments), (this._unknown = !0);
        }
        _parse(e) {
          return g(e.data);
        }
      }
      ee.create = (e) => new ee({ typeName: ts.ZodUnknown, ..._(e) });
      class et extends k {
        _parse(e) {
          let t = this._getOrReturnCtx(e);
          return (
            h(t, {
              code: a.invalid_type,
              expected: i.never,
              received: t.parsedType,
            }),
            f
          );
        }
      }
      et.create = (e) => new et({ typeName: ts.ZodNever, ..._(e) });
      class er extends k {
        _parse(e) {
          if (this._getType(e) !== i.undefined) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: a.invalid_type,
                expected: i.void,
                received: t.parsedType,
              }),
              f
            );
          }
          return g(e.data);
        }
      }
      er.create = (e) => new er({ typeName: ts.ZodVoid, ..._(e) });
      class en extends k {
        _parse(e) {
          let { ctx: t, status: r } = this._processInputParams(e),
            n = this._def;
          if (t.parsedType !== i.array)
            return (
              h(t, {
                code: a.invalid_type,
                expected: i.array,
                received: t.parsedType,
              }),
              f
            );
          if (null !== n.exactLength) {
            let e = t.data.length > n.exactLength.value,
              i = t.data.length < n.exactLength.value;
            (e || i) &&
              (h(t, {
                code: e ? a.too_big : a.too_small,
                minimum: i ? n.exactLength.value : void 0,
                maximum: e ? n.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: n.exactLength.message,
              }),
              r.dirty());
          }
          if (
            (null !== n.minLength &&
              t.data.length < n.minLength.value &&
              (h(t, {
                code: a.too_small,
                minimum: n.minLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: n.minLength.message,
              }),
              r.dirty()),
            null !== n.maxLength &&
              t.data.length > n.maxLength.value &&
              (h(t, {
                code: a.too_big,
                maximum: n.maxLength.value,
                type: "array",
                inclusive: !0,
                exact: !1,
                message: n.maxLength.message,
              }),
              r.dirty()),
            t.common.async)
          )
            return Promise.all(
              [...t.data].map((e, r) =>
                n.type._parseAsync(new C(t, e, t.path, r))
              )
            ).then((e) => p.mergeArray(r, e));
          let o = [...t.data].map((e, r) =>
            n.type._parseSync(new C(t, e, t.path, r))
          );
          return p.mergeArray(r, o);
        }
        get element() {
          return this._def.type;
        }
        min(e, t) {
          return new en({
            ...this._def,
            minLength: { value: e, message: ti.toString(t) },
          });
        }
        max(e, t) {
          return new en({
            ...this._def,
            maxLength: { value: e, message: ti.toString(t) },
          });
        }
        length(e, t) {
          return new en({
            ...this._def,
            exactLength: { value: e, message: ti.toString(t) },
          });
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      en.create = (e, t) =>
        new en({
          type: e,
          minLength: null,
          maxLength: null,
          exactLength: null,
          typeName: ts.ZodArray,
          ..._(t),
        });
      class ei extends k {
        constructor() {
          super(...arguments),
            (this._cached = null),
            (this.nonstrict = this.passthrough),
            (this.augment = this.extend);
        }
        _getCached() {
          if (null !== this._cached) return this._cached;
          let e = this._def.shape(),
            t = tr.objectKeys(e);
          return (this._cached = { shape: e, keys: t });
        }
        _parse(e) {
          if (this._getType(e) !== i.object) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: a.invalid_type,
                expected: i.object,
                received: t.parsedType,
              }),
              f
            );
          }
          let { status: t, ctx: r } = this._processInputParams(e),
            { shape: n, keys: o } = this._getCached(),
            s = [];
          if (
            !(
              this._def.catchall instanceof et &&
              "strip" === this._def.unknownKeys
            )
          )
            for (let e in r.data) o.includes(e) || s.push(e);
          let l = [];
          for (let e of o) {
            let t = n[e],
              i = r.data[e];
            l.push({
              key: { status: "valid", value: e },
              value: t._parse(new C(r, i, r.path, e)),
              alwaysSet: e in r.data,
            });
          }
          if (this._def.catchall instanceof et) {
            let e = this._def.unknownKeys;
            if ("passthrough" === e)
              for (let e of s)
                l.push({
                  key: { status: "valid", value: e },
                  value: { status: "valid", value: r.data[e] },
                });
            else if ("strict" === e)
              s.length > 0 &&
                (h(r, { code: a.unrecognized_keys, keys: s }), t.dirty());
            else if ("strip" === e);
            else
              throw Error(
                "Internal ZodObject error: invalid unknownKeys value."
              );
          } else {
            let e = this._def.catchall;
            for (let t of s) {
              let n = r.data[t];
              l.push({
                key: { status: "valid", value: t },
                value: e._parse(new C(r, n, r.path, t)),
                alwaysSet: t in r.data,
              });
            }
          }
          return r.common.async
            ? Promise.resolve()
                .then(async () => {
                  let e = [];
                  for (let t of l) {
                    let r = await t.key,
                      n = await t.value;
                    e.push({ key: r, value: n, alwaysSet: t.alwaysSet });
                  }
                  return e;
                })
                .then((e) => p.mergeObjectSync(t, e))
            : p.mergeObjectSync(t, l);
        }
        get shape() {
          return this._def.shape();
        }
        strict(e) {
          return (
            ti.errToObj,
            new ei({
              ...this._def,
              unknownKeys: "strict",
              ...(void 0 !== e
                ? {
                    errorMap: (t, r) => {
                      var n, i, o, a;
                      let s =
                        null !==
                          (o =
                            null === (i = (n = this._def).errorMap) ||
                            void 0 === i
                              ? void 0
                              : i.call(n, t, r).message) && void 0 !== o
                          ? o
                          : r.defaultError;
                      return "unrecognized_keys" === t.code
                        ? {
                            message:
                              null !== (a = ti.errToObj(e).message) &&
                              void 0 !== a
                                ? a
                                : s,
                          }
                        : { message: s };
                    },
                  }
                : {}),
            })
          );
        }
        strip() {
          return new ei({ ...this._def, unknownKeys: "strip" });
        }
        passthrough() {
          return new ei({ ...this._def, unknownKeys: "passthrough" });
        }
        extend(e) {
          return new ei({
            ...this._def,
            shape: () => ({ ...this._def.shape(), ...e }),
          });
        }
        merge(e) {
          return new ei({
            unknownKeys: e._def.unknownKeys,
            catchall: e._def.catchall,
            shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
            typeName: ts.ZodObject,
          });
        }
        setKey(e, t) {
          return this.augment({ [e]: t });
        }
        catchall(e) {
          return new ei({ ...this._def, catchall: e });
        }
        pick(e) {
          let t = {};
          return (
            tr.objectKeys(e).forEach((r) => {
              e[r] && this.shape[r] && (t[r] = this.shape[r]);
            }),
            new ei({ ...this._def, shape: () => t })
          );
        }
        omit(e) {
          let t = {};
          return (
            tr.objectKeys(this.shape).forEach((r) => {
              e[r] || (t[r] = this.shape[r]);
            }),
            new ei({ ...this._def, shape: () => t })
          );
        }
        deepPartial() {
          return (function e(t) {
            if (t instanceof ei) {
              let r = {};
              for (let n in t.shape) {
                let i = t.shape[n];
                r[n] = eA.create(e(i));
              }
              return new ei({ ...t._def, shape: () => r });
            }
            return t instanceof en
              ? new en({ ...t._def, type: e(t.element) })
              : t instanceof eA
              ? eA.create(e(t.unwrap()))
              : t instanceof eE
              ? eE.create(e(t.unwrap()))
              : t instanceof ec
              ? ec.create(t.items.map((t) => e(t)))
              : t;
          })(this);
        }
        partial(e) {
          let t = {};
          return (
            tr.objectKeys(this.shape).forEach((r) => {
              let n = this.shape[r];
              e && !e[r] ? (t[r] = n) : (t[r] = n.optional());
            }),
            new ei({ ...this._def, shape: () => t })
          );
        }
        required(e) {
          let t = {};
          return (
            tr.objectKeys(this.shape).forEach((r) => {
              if (e && !e[r]) t[r] = this.shape[r];
              else {
                let e = this.shape[r];
                for (; e instanceof eA; ) e = e._def.innerType;
                t[r] = e;
              }
            }),
            new ei({ ...this._def, shape: () => t })
          );
        }
        keyof() {
          return eg(tr.objectKeys(this.shape));
        }
      }
      (ei.create = (e, t) =>
        new ei({
          shape: () => e,
          unknownKeys: "strip",
          catchall: et.create(),
          typeName: ts.ZodObject,
          ..._(t),
        })),
        (ei.strictCreate = (e, t) =>
          new ei({
            shape: () => e,
            unknownKeys: "strict",
            catchall: et.create(),
            typeName: ts.ZodObject,
            ..._(t),
          })),
        (ei.lazycreate = (e, t) =>
          new ei({
            shape: e,
            unknownKeys: "strip",
            catchall: et.create(),
            typeName: ts.ZodObject,
            ..._(t),
          }));
      class eo extends k {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = this._def.options;
          if (t.common.async)
            return Promise.all(
              r.map(async (e) => {
                let r = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                };
                return {
                  result: await e._parseAsync({
                    data: t.data,
                    path: t.path,
                    parent: r,
                  }),
                  ctx: r,
                };
              })
            ).then(function (e) {
              for (let t of e) if ("valid" === t.result.status) return t.result;
              for (let r of e)
                if ("dirty" === r.result.status)
                  return t.common.issues.push(...r.ctx.common.issues), r.result;
              let r = e.map((e) => new s(e.ctx.common.issues));
              return h(t, { code: a.invalid_union, unionErrors: r }), f;
            });
          {
            let e;
            let n = [];
            for (let i of r) {
              let r = {
                  ...t,
                  common: { ...t.common, issues: [] },
                  parent: null,
                },
                o = i._parseSync({ data: t.data, path: t.path, parent: r });
              if ("valid" === o.status) return o;
              "dirty" !== o.status || e || (e = { result: o, ctx: r }),
                r.common.issues.length && n.push(r.common.issues);
            }
            if (e)
              return t.common.issues.push(...e.ctx.common.issues), e.result;
            let i = n.map((e) => new s(e));
            return h(t, { code: a.invalid_union, unionErrors: i }), f;
          }
        }
        get options() {
          return this._def.options;
        }
      }
      eo.create = (e, t) =>
        new eo({ options: e, typeName: ts.ZodUnion, ..._(t) });
      let ea = (e) => {
        if (e instanceof ef) return ea(e.schema);
        if (e instanceof ev) return ea(e.innerType());
        if (e instanceof em) return [e.value];
        if (e instanceof ey) return e.options;
        if (e instanceof eb) return tr.objectValues(e.enum);
        if (e instanceof eC) return ea(e._def.innerType);
        if (e instanceof J) return [void 0];
        else if (e instanceof X) return [null];
        else if (e instanceof eA) return [void 0, ...ea(e.unwrap())];
        else if (e instanceof eE) return [null, ...ea(e.unwrap())];
        else if (e instanceof eI) return ea(e.unwrap());
        else if (e instanceof eS) return ea(e.unwrap());
        else if (e instanceof ex) return ea(e._def.innerType);
        else return [];
      };
      class es extends k {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== i.object)
            return (
              h(t, {
                code: a.invalid_type,
                expected: i.object,
                received: t.parsedType,
              }),
              f
            );
          let r = this.discriminator,
            n = t.data[r],
            o = this.optionsMap.get(n);
          return o
            ? t.common.async
              ? o._parseAsync({ data: t.data, path: t.path, parent: t })
              : o._parseSync({ data: t.data, path: t.path, parent: t })
            : (h(t, {
                code: a.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [r],
              }),
              f);
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get options() {
          return this._def.options;
        }
        get optionsMap() {
          return this._def.optionsMap;
        }
        static create(e, t, r) {
          let n = new Map();
          for (let r of t) {
            let t = ea(r.shape[e]);
            if (!t.length)
              throw Error(
                `A discriminator value for key \`${e}\` could not be extracted from all schema options`
              );
            for (let i of t) {
              if (n.has(i))
                throw Error(
                  `Discriminator property ${String(
                    e
                  )} has duplicate value ${String(i)}`
                );
              n.set(i, r);
            }
          }
          return new es({
            typeName: ts.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: n,
            ..._(r),
          });
        }
      }
      class el extends k {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e),
            n = (e, n) => {
              if (y(e) || y(n)) return f;
              let s = (function e(t, r) {
                let n = o(t),
                  a = o(r);
                if (t === r) return { valid: !0, data: t };
                if (n === i.object && a === i.object) {
                  let n = tr.objectKeys(r),
                    i = tr.objectKeys(t).filter((e) => -1 !== n.indexOf(e)),
                    o = { ...t, ...r };
                  for (let n of i) {
                    let i = e(t[n], r[n]);
                    if (!i.valid) return { valid: !1 };
                    o[n] = i.data;
                  }
                  return { valid: !0, data: o };
                }
                if (n === i.array && a === i.array) {
                  if (t.length !== r.length) return { valid: !1 };
                  let n = [];
                  for (let i = 0; i < t.length; i++) {
                    let o = e(t[i], r[i]);
                    if (!o.valid) return { valid: !1 };
                    n.push(o.data);
                  }
                  return { valid: !0, data: n };
                }
                return n === i.date && a === i.date && +t == +r
                  ? { valid: !0, data: t }
                  : { valid: !1 };
              })(e.value, n.value);
              return s.valid
                ? ((b(e) || b(n)) && t.dirty(),
                  { status: t.value, value: s.data })
                : (h(r, { code: a.invalid_intersection_types }), f);
            };
          return r.common.async
            ? Promise.all([
                this._def.left._parseAsync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
                this._def.right._parseAsync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
              ]).then(([e, t]) => n(e, t))
            : n(
                this._def.left._parseSync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                }),
                this._def.right._parseSync({
                  data: r.data,
                  path: r.path,
                  parent: r,
                })
              );
        }
      }
      el.create = (e, t, r) =>
        new el({ left: e, right: t, typeName: ts.ZodIntersection, ..._(r) });
      class ec extends k {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== i.array)
            return (
              h(r, {
                code: a.invalid_type,
                expected: i.array,
                received: r.parsedType,
              }),
              f
            );
          if (r.data.length < this._def.items.length)
            return (
              h(r, {
                code: a.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array",
              }),
              f
            );
          !this._def.rest &&
            r.data.length > this._def.items.length &&
            (h(r, {
              code: a.too_big,
              maximum: this._def.items.length,
              inclusive: !0,
              exact: !1,
              type: "array",
            }),
            t.dirty());
          let n = [...r.data]
            .map((e, t) => {
              let n = this._def.items[t] || this._def.rest;
              return n ? n._parse(new C(r, e, r.path, t)) : null;
            })
            .filter((e) => !!e);
          return r.common.async
            ? Promise.all(n).then((e) => p.mergeArray(t, e))
            : p.mergeArray(t, n);
        }
        get items() {
          return this._def.items;
        }
        rest(e) {
          return new ec({ ...this._def, rest: e });
        }
      }
      ec.create = (e, t) => {
        if (!Array.isArray(e))
          throw Error("You must pass an array of schemas to z.tuple([ ... ])");
        return new ec({ items: e, typeName: ts.ZodTuple, rest: null, ..._(t) });
      };
      class eu extends k {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== i.object)
            return (
              h(r, {
                code: a.invalid_type,
                expected: i.object,
                received: r.parsedType,
              }),
              f
            );
          let n = [],
            o = this._def.keyType,
            s = this._def.valueType;
          for (let e in r.data)
            n.push({
              key: o._parse(new C(r, e, r.path, e)),
              value: s._parse(new C(r, r.data[e], r.path, e)),
              alwaysSet: e in r.data,
            });
          return r.common.async
            ? p.mergeObjectAsync(t, n)
            : p.mergeObjectSync(t, n);
        }
        get element() {
          return this._def.valueType;
        }
        static create(e, t, r) {
          return new eu(
            t instanceof k
              ? { keyType: e, valueType: t, typeName: ts.ZodRecord, ..._(r) }
              : {
                  keyType: z.create(),
                  valueType: e,
                  typeName: ts.ZodRecord,
                  ..._(t),
                }
          );
        }
      }
      class ed extends k {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== i.map)
            return (
              h(r, {
                code: a.invalid_type,
                expected: i.map,
                received: r.parsedType,
              }),
              f
            );
          let n = this._def.keyType,
            o = this._def.valueType,
            s = [...r.data.entries()].map(([e, t], i) => ({
              key: n._parse(new C(r, e, r.path, [i, "key"])),
              value: o._parse(new C(r, t, r.path, [i, "value"])),
            }));
          if (r.common.async) {
            let e = new Map();
            return Promise.resolve().then(async () => {
              for (let r of s) {
                let n = await r.key,
                  i = await r.value;
                if ("aborted" === n.status || "aborted" === i.status) return f;
                ("dirty" === n.status || "dirty" === i.status) && t.dirty(),
                  e.set(n.value, i.value);
              }
              return { status: t.value, value: e };
            });
          }
          {
            let e = new Map();
            for (let r of s) {
              let n = r.key,
                i = r.value;
              if ("aborted" === n.status || "aborted" === i.status) return f;
              ("dirty" === n.status || "dirty" === i.status) && t.dirty(),
                e.set(n.value, i.value);
            }
            return { status: t.value, value: e };
          }
        }
      }
      ed.create = (e, t, r) =>
        new ed({ valueType: t, keyType: e, typeName: ts.ZodMap, ..._(r) });
      class eh extends k {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.parsedType !== i.set)
            return (
              h(r, {
                code: a.invalid_type,
                expected: i.set,
                received: r.parsedType,
              }),
              f
            );
          let n = this._def;
          null !== n.minSize &&
            r.data.size < n.minSize.value &&
            (h(r, {
              code: a.too_small,
              minimum: n.minSize.value,
              type: "set",
              inclusive: !0,
              exact: !1,
              message: n.minSize.message,
            }),
            t.dirty()),
            null !== n.maxSize &&
              r.data.size > n.maxSize.value &&
              (h(r, {
                code: a.too_big,
                maximum: n.maxSize.value,
                type: "set",
                inclusive: !0,
                exact: !1,
                message: n.maxSize.message,
              }),
              t.dirty());
          let o = this._def.valueType;
          function s(e) {
            let r = new Set();
            for (let n of e) {
              if ("aborted" === n.status) return f;
              "dirty" === n.status && t.dirty(), r.add(n.value);
            }
            return { status: t.value, value: r };
          }
          let l = [...r.data.values()].map((e, t) =>
            o._parse(new C(r, e, r.path, t))
          );
          return r.common.async ? Promise.all(l).then((e) => s(e)) : s(l);
        }
        min(e, t) {
          return new eh({
            ...this._def,
            minSize: { value: e, message: ti.toString(t) },
          });
        }
        max(e, t) {
          return new eh({
            ...this._def,
            maxSize: { value: e, message: ti.toString(t) },
          });
        }
        size(e, t) {
          return this.min(e, t).max(e, t);
        }
        nonempty(e) {
          return this.min(1, e);
        }
      }
      eh.create = (e, t) =>
        new eh({
          valueType: e,
          minSize: null,
          maxSize: null,
          typeName: ts.ZodSet,
          ..._(t),
        });
      class ep extends k {
        constructor() {
          super(...arguments), (this.validate = this.implement);
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== i.function)
            return (
              h(t, {
                code: a.invalid_type,
                expected: i.function,
                received: t.parsedType,
              }),
              f
            );
          function r(e, r) {
            return d({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                u(),
                l,
              ].filter((e) => !!e),
              issueData: { code: a.invalid_arguments, argumentsError: r },
            });
          }
          function n(e, r) {
            return d({
              data: e,
              path: t.path,
              errorMaps: [
                t.common.contextualErrorMap,
                t.schemaErrorMap,
                u(),
                l,
              ].filter((e) => !!e),
              issueData: { code: a.invalid_return_type, returnTypeError: r },
            });
          }
          let o = { errorMap: t.common.contextualErrorMap },
            c = t.data;
          if (this._def.returns instanceof ew) {
            let e = this;
            return g(async function (...t) {
              let i = new s([]),
                a = await e._def.args.parseAsync(t, o).catch((e) => {
                  throw (i.addIssue(r(t, e)), i);
                }),
                l = await Reflect.apply(c, this, a);
              return await e._def.returns._def.type
                .parseAsync(l, o)
                .catch((e) => {
                  throw (i.addIssue(n(l, e)), i);
                });
            });
          }
          {
            let e = this;
            return g(function (...t) {
              let i = e._def.args.safeParse(t, o);
              if (!i.success) throw new s([r(t, i.error)]);
              let a = Reflect.apply(c, this, i.data),
                l = e._def.returns.safeParse(a, o);
              if (!l.success) throw new s([n(a, l.error)]);
              return l.data;
            });
          }
        }
        parameters() {
          return this._def.args;
        }
        returnType() {
          return this._def.returns;
        }
        args(...e) {
          return new ep({ ...this._def, args: ec.create(e).rest(ee.create()) });
        }
        returns(e) {
          return new ep({ ...this._def, returns: e });
        }
        implement(e) {
          return this.parse(e);
        }
        strictImplement(e) {
          return this.parse(e);
        }
        static create(e, t, r) {
          return new ep({
            args: e || ec.create([]).rest(ee.create()),
            returns: t || ee.create(),
            typeName: ts.ZodFunction,
            ..._(r),
          });
        }
      }
      class ef extends k {
        get schema() {
          return this._def.getter();
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return this._def
            .getter()
            ._parse({ data: t.data, path: t.path, parent: t });
        }
      }
      ef.create = (e, t) =>
        new ef({ getter: e, typeName: ts.ZodLazy, ..._(t) });
      class em extends k {
        _parse(e) {
          if (e.data !== this._def.value) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                received: t.data,
                code: a.invalid_literal,
                expected: this._def.value,
              }),
              f
            );
          }
          return { status: "valid", value: e.data };
        }
        get value() {
          return this._def.value;
        }
      }
      function eg(e, t) {
        return new ey({ values: e, typeName: ts.ZodEnum, ..._(t) });
      }
      em.create = (e, t) =>
        new em({ value: e, typeName: ts.ZodLiteral, ..._(t) });
      class ey extends k {
        constructor() {
          super(...arguments), to.set(this, void 0);
        }
        _parse(e) {
          if ("string" != typeof e.data) {
            let t = this._getOrReturnCtx(e),
              r = this._def.values;
            return (
              h(t, {
                expected: tr.joinValues(r),
                received: t.parsedType,
                code: a.invalid_type,
              }),
              f
            );
          }
          if (
            (A(this, to, "f") || E(this, to, new Set(this._def.values), "f"),
            !A(this, to, "f").has(e.data))
          ) {
            let t = this._getOrReturnCtx(e),
              r = this._def.values;
            return (
              h(t, {
                received: t.data,
                code: a.invalid_enum_value,
                options: r,
              }),
              f
            );
          }
          return g(e.data);
        }
        get options() {
          return this._def.values;
        }
        get enum() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        get Values() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        get Enum() {
          let e = {};
          for (let t of this._def.values) e[t] = t;
          return e;
        }
        extract(e, t = this._def) {
          return ey.create(e, { ...this._def, ...t });
        }
        exclude(e, t = this._def) {
          return ey.create(
            this.options.filter((t) => !e.includes(t)),
            { ...this._def, ...t }
          );
        }
      }
      (to = new WeakMap()), (ey.create = eg);
      class eb extends k {
        constructor() {
          super(...arguments), ta.set(this, void 0);
        }
        _parse(e) {
          let t = tr.getValidEnumValues(this._def.values),
            r = this._getOrReturnCtx(e);
          if (r.parsedType !== i.string && r.parsedType !== i.number) {
            let e = tr.objectValues(t);
            return (
              h(r, {
                expected: tr.joinValues(e),
                received: r.parsedType,
                code: a.invalid_type,
              }),
              f
            );
          }
          if (
            (A(this, ta, "f") ||
              E(
                this,
                ta,
                new Set(tr.getValidEnumValues(this._def.values)),
                "f"
              ),
            !A(this, ta, "f").has(e.data))
          ) {
            let e = tr.objectValues(t);
            return (
              h(r, {
                received: r.data,
                code: a.invalid_enum_value,
                options: e,
              }),
              f
            );
          }
          return g(e.data);
        }
        get enum() {
          return this._def.values;
        }
      }
      (ta = new WeakMap()),
        (eb.create = (e, t) =>
          new eb({ values: e, typeName: ts.ZodNativeEnum, ..._(t) }));
      class ew extends k {
        unwrap() {
          return this._def.type;
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return t.parsedType !== i.promise && !1 === t.common.async
            ? (h(t, {
                code: a.invalid_type,
                expected: i.promise,
                received: t.parsedType,
              }),
              f)
            : g(
                (t.parsedType === i.promise
                  ? t.data
                  : Promise.resolve(t.data)
                ).then((e) =>
                  this._def.type.parseAsync(e, {
                    path: t.path,
                    errorMap: t.common.contextualErrorMap,
                  })
                )
              );
        }
      }
      ew.create = (e, t) =>
        new ew({ type: e, typeName: ts.ZodPromise, ..._(t) });
      class ev extends k {
        innerType() {
          return this._def.schema;
        }
        sourceType() {
          return this._def.schema._def.typeName === ts.ZodEffects
            ? this._def.schema.sourceType()
            : this._def.schema;
        }
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e),
            n = this._def.effect || null,
            i = {
              addIssue: (e) => {
                h(r, e), e.fatal ? t.abort() : t.dirty();
              },
              get path() {
                return r.path;
              },
            };
          if (((i.addIssue = i.addIssue.bind(i)), "preprocess" === n.type)) {
            let e = n.transform(r.data, i);
            if (r.common.async)
              return Promise.resolve(e).then(async (e) => {
                if ("aborted" === t.value) return f;
                let n = await this._def.schema._parseAsync({
                  data: e,
                  path: r.path,
                  parent: r,
                });
                return "aborted" === n.status
                  ? f
                  : "dirty" === n.status || "dirty" === t.value
                  ? m(n.value)
                  : n;
              });
            {
              if ("aborted" === t.value) return f;
              let n = this._def.schema._parseSync({
                data: e,
                path: r.path,
                parent: r,
              });
              return "aborted" === n.status
                ? f
                : "dirty" === n.status || "dirty" === t.value
                ? m(n.value)
                : n;
            }
          }
          if ("refinement" === n.type) {
            let e = (e) => {
              let t = n.refinement(e, i);
              if (r.common.async) return Promise.resolve(t);
              if (t instanceof Promise)
                throw Error(
                  "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
                );
              return e;
            };
            if (!1 !== r.common.async)
              return this._def.schema
                ._parseAsync({ data: r.data, path: r.path, parent: r })
                .then((r) =>
                  "aborted" === r.status
                    ? f
                    : ("dirty" === r.status && t.dirty(),
                      e(r.value).then(() => ({
                        status: t.value,
                        value: r.value,
                      })))
                );
            {
              let n = this._def.schema._parseSync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              return "aborted" === n.status
                ? f
                : ("dirty" === n.status && t.dirty(),
                  e(n.value),
                  { status: t.value, value: n.value });
            }
          }
          if ("transform" === n.type) {
            if (!1 !== r.common.async)
              return this._def.schema
                ._parseAsync({ data: r.data, path: r.path, parent: r })
                .then((e) =>
                  w(e)
                    ? Promise.resolve(n.transform(e.value, i)).then((e) => ({
                        status: t.value,
                        value: e,
                      }))
                    : e
                );
            {
              let e = this._def.schema._parseSync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              if (!w(e)) return e;
              let o = n.transform(e.value, i);
              if (o instanceof Promise)
                throw Error(
                  "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
                );
              return { status: t.value, value: o };
            }
          }
          tr.assertNever(n);
        }
      }
      (ev.create = (e, t, r) =>
        new ev({ schema: e, typeName: ts.ZodEffects, effect: t, ..._(r) })),
        (ev.createWithPreprocess = (e, t, r) =>
          new ev({
            schema: t,
            effect: { type: "preprocess", transform: e },
            typeName: ts.ZodEffects,
            ..._(r),
          }));
      class eA extends k {
        _parse(e) {
          return this._getType(e) === i.undefined
            ? g(void 0)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      eA.create = (e, t) =>
        new eA({ innerType: e, typeName: ts.ZodOptional, ..._(t) });
      class eE extends k {
        _parse(e) {
          return this._getType(e) === i.null
            ? g(null)
            : this._def.innerType._parse(e);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      eE.create = (e, t) =>
        new eE({ innerType: e, typeName: ts.ZodNullable, ..._(t) });
      class eC extends k {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = t.data;
          return (
            t.parsedType === i.undefined && (r = this._def.defaultValue()),
            this._def.innerType._parse({ data: r, path: t.path, parent: t })
          );
        }
        removeDefault() {
          return this._def.innerType;
        }
      }
      eC.create = (e, t) =>
        new eC({
          innerType: e,
          typeName: ts.ZodDefault,
          defaultValue:
            "function" == typeof t.default ? t.default : () => t.default,
          ..._(t),
        });
      class ex extends k {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = { ...t, common: { ...t.common, issues: [] } },
            n = this._def.innerType._parse({
              data: r.data,
              path: r.path,
              parent: { ...r },
            });
          return v(n)
            ? n.then((e) => ({
                status: "valid",
                value:
                  "valid" === e.status
                    ? e.value
                    : this._def.catchValue({
                        get error() {
                          return new s(r.common.issues);
                        },
                        input: r.data,
                      }),
              }))
            : {
                status: "valid",
                value:
                  "valid" === n.status
                    ? n.value
                    : this._def.catchValue({
                        get error() {
                          return new s(r.common.issues);
                        },
                        input: r.data,
                      }),
              };
        }
        removeCatch() {
          return this._def.innerType;
        }
      }
      ex.create = (e, t) =>
        new ex({
          innerType: e,
          typeName: ts.ZodCatch,
          catchValue: "function" == typeof t.catch ? t.catch : () => t.catch,
          ..._(t),
        });
      class e_ extends k {
        _parse(e) {
          if (this._getType(e) !== i.nan) {
            let t = this._getOrReturnCtx(e);
            return (
              h(t, {
                code: a.invalid_type,
                expected: i.nan,
                received: t.parsedType,
              }),
              f
            );
          }
          return { status: "valid", value: e.data };
        }
      }
      e_.create = (e) => new e_({ typeName: ts.ZodNaN, ..._(e) });
      let ek = Symbol("zod_brand");
      class eI extends k {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            r = t.data;
          return this._def.type._parse({ data: r, path: t.path, parent: t });
        }
        unwrap() {
          return this._def.type;
        }
      }
      class eT extends k {
        _parse(e) {
          let { status: t, ctx: r } = this._processInputParams(e);
          if (r.common.async)
            return (async () => {
              let e = await this._def.in._parseAsync({
                data: r.data,
                path: r.path,
                parent: r,
              });
              return "aborted" === e.status
                ? f
                : "dirty" === e.status
                ? (t.dirty(), m(e.value))
                : this._def.out._parseAsync({
                    data: e.value,
                    path: r.path,
                    parent: r,
                  });
            })();
          {
            let e = this._def.in._parseSync({
              data: r.data,
              path: r.path,
              parent: r,
            });
            return "aborted" === e.status
              ? f
              : "dirty" === e.status
              ? (t.dirty(), { status: "dirty", value: e.value })
              : this._def.out._parseSync({
                  data: e.value,
                  path: r.path,
                  parent: r,
                });
          }
        }
        static create(e, t) {
          return new eT({ in: e, out: t, typeName: ts.ZodPipeline });
        }
      }
      class eS extends k {
        _parse(e) {
          let t = this._def.innerType._parse(e),
            r = (e) => (w(e) && (e.value = Object.freeze(e.value)), e);
          return v(t) ? t.then((e) => r(e)) : r(t);
        }
        unwrap() {
          return this._def.innerType;
        }
      }
      function eO(e, t = {}, r) {
        return e
          ? $.create().superRefine((n, i) => {
              var o, a;
              if (!e(n)) {
                let e =
                    "function" == typeof t
                      ? t(n)
                      : "string" == typeof t
                      ? { message: t }
                      : t,
                  s =
                    null ===
                      (a = null !== (o = e.fatal) && void 0 !== o ? o : r) ||
                    void 0 === a ||
                    a,
                  l = "string" == typeof e ? { message: e } : e;
                i.addIssue({ code: "custom", ...l, fatal: s });
              }
            })
          : $.create();
      }
      eS.create = (e, t) =>
        new eS({ innerType: e, typeName: ts.ZodReadonly, ..._(t) });
      let eB = { object: ei.lazycreate };
      !(function (e) {
        (e.ZodString = "ZodString"),
          (e.ZodNumber = "ZodNumber"),
          (e.ZodNaN = "ZodNaN"),
          (e.ZodBigInt = "ZodBigInt"),
          (e.ZodBoolean = "ZodBoolean"),
          (e.ZodDate = "ZodDate"),
          (e.ZodSymbol = "ZodSymbol"),
          (e.ZodUndefined = "ZodUndefined"),
          (e.ZodNull = "ZodNull"),
          (e.ZodAny = "ZodAny"),
          (e.ZodUnknown = "ZodUnknown"),
          (e.ZodNever = "ZodNever"),
          (e.ZodVoid = "ZodVoid"),
          (e.ZodArray = "ZodArray"),
          (e.ZodObject = "ZodObject"),
          (e.ZodUnion = "ZodUnion"),
          (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
          (e.ZodIntersection = "ZodIntersection"),
          (e.ZodTuple = "ZodTuple"),
          (e.ZodRecord = "ZodRecord"),
          (e.ZodMap = "ZodMap"),
          (e.ZodSet = "ZodSet"),
          (e.ZodFunction = "ZodFunction"),
          (e.ZodLazy = "ZodLazy"),
          (e.ZodLiteral = "ZodLiteral"),
          (e.ZodEnum = "ZodEnum"),
          (e.ZodEffects = "ZodEffects"),
          (e.ZodNativeEnum = "ZodNativeEnum"),
          (e.ZodOptional = "ZodOptional"),
          (e.ZodNullable = "ZodNullable"),
          (e.ZodDefault = "ZodDefault"),
          (e.ZodCatch = "ZodCatch"),
          (e.ZodPromise = "ZodPromise"),
          (e.ZodBranded = "ZodBranded"),
          (e.ZodPipeline = "ZodPipeline"),
          (e.ZodReadonly = "ZodReadonly");
      })(ts || (ts = {}));
      let eN = z.create,
        eP = G.create,
        eR = e_.create,
        eM = Z.create,
        eD = K.create,
        eL = V.create,
        eF = Y.create,
        ej = J.create,
        eU = X.create,
        eH = $.create,
        eQ = ee.create,
        eq = et.create,
        eW = er.create,
        ez = en.create,
        eG = ei.create,
        eZ = ei.strictCreate,
        eK = eo.create,
        eV = es.create,
        eY = el.create,
        eJ = ec.create,
        eX = eu.create,
        e$ = ed.create,
        e0 = eh.create,
        e1 = ep.create,
        e2 = ef.create,
        e3 = em.create,
        e4 = ey.create,
        e5 = eb.create,
        e6 = ew.create,
        e8 = ev.create,
        e9 = eA.create,
        e7 = eE.create,
        te = ev.createWithPreprocess,
        tt = eT.create;
      var tr,
        tn,
        ti,
        to,
        ta,
        ts,
        tl = Object.freeze({
          __proto__: null,
          defaultErrorMap: l,
          setErrorMap: function (e) {
            c = e;
          },
          getErrorMap: u,
          makeIssue: d,
          EMPTY_PATH: [],
          addIssueToContext: h,
          ParseStatus: p,
          INVALID: f,
          DIRTY: m,
          OK: g,
          isAborted: y,
          isDirty: b,
          isValid: w,
          isAsync: v,
          get util() {
            return tr;
          },
          get objectUtil() {
            return tn;
          },
          ZodParsedType: i,
          getParsedType: o,
          ZodType: k,
          datetimeRegex: W,
          ZodString: z,
          ZodNumber: G,
          ZodBigInt: Z,
          ZodBoolean: K,
          ZodDate: V,
          ZodSymbol: Y,
          ZodUndefined: J,
          ZodNull: X,
          ZodAny: $,
          ZodUnknown: ee,
          ZodNever: et,
          ZodVoid: er,
          ZodArray: en,
          ZodObject: ei,
          ZodUnion: eo,
          ZodDiscriminatedUnion: es,
          ZodIntersection: el,
          ZodTuple: ec,
          ZodRecord: eu,
          ZodMap: ed,
          ZodSet: eh,
          ZodFunction: ep,
          ZodLazy: ef,
          ZodLiteral: em,
          ZodEnum: ey,
          ZodNativeEnum: eb,
          ZodPromise: ew,
          ZodEffects: ev,
          ZodTransformer: ev,
          ZodOptional: eA,
          ZodNullable: eE,
          ZodDefault: eC,
          ZodCatch: ex,
          ZodNaN: e_,
          BRAND: ek,
          ZodBranded: eI,
          ZodPipeline: eT,
          ZodReadonly: eS,
          custom: eO,
          Schema: k,
          ZodSchema: k,
          late: eB,
          get ZodFirstPartyTypeKind() {
            return ts;
          },
          coerce: {
            string: (e) => z.create({ ...e, coerce: !0 }),
            number: (e) => G.create({ ...e, coerce: !0 }),
            boolean: (e) => K.create({ ...e, coerce: !0 }),
            bigint: (e) => Z.create({ ...e, coerce: !0 }),
            date: (e) => V.create({ ...e, coerce: !0 }),
          },
          any: eH,
          array: ez,
          bigint: eM,
          boolean: eD,
          date: eL,
          discriminatedUnion: eV,
          effect: e8,
          enum: e4,
          function: e1,
          instanceof: (e, t = { message: `Input not instance of ${e.name}` }) =>
            eO((t) => t instanceof e, t),
          intersection: eY,
          lazy: e2,
          literal: e3,
          map: e$,
          nan: eR,
          nativeEnum: e5,
          never: eq,
          null: eU,
          nullable: e7,
          number: eP,
          object: eG,
          oboolean: () => eD().optional(),
          onumber: () => eP().optional(),
          optional: e9,
          ostring: () => eN().optional(),
          pipeline: tt,
          preprocess: te,
          promise: e6,
          record: eX,
          set: e0,
          strictObject: eZ,
          string: eN,
          symbol: eF,
          transformer: e8,
          tuple: eJ,
          undefined: ej,
          union: eK,
          unknown: eQ,
          void: eW,
          NEVER: f,
          ZodIssueCode: a,
          quotelessJson: (e) =>
            JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:"),
          ZodError: s,
        });
    },
  },
]);
