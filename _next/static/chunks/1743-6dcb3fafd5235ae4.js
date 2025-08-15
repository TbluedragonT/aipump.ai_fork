(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1743],
  {
    98867: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(67401).A)("Check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    51719: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(67401).A)("ChevronDown", [
        ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
      ]);
    },
    91902: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(67401).A)("ChevronUp", [
        ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
      ]);
    },
    86710: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(67401).A)("Menu", [
        ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
        ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
        ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
      ]);
    },
    31182: (e, t, n) => {
      "use strict";
      var r = n(83142),
        o = n(81662),
        a = n(10796);
      r.default, o.default, (t.xp = a.default);
    },
    30477: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(58175),
        o = n(12115),
        a = n(97430),
        i = n(11070),
        l = n(79472),
        u = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(o);
      let c = o.forwardRef(function (e, t) {
        let { locale: n, localePrefix: o, ...c } = e,
          s = a.default(),
          d = n || s,
          f = i.getLocalePrefix(d, o);
        return u.default.createElement(
          l.default,
          r.extends(
            { ref: t, locale: d, localePrefixMode: o.mode, prefix: f },
            c
          )
        );
      });
      (c.displayName = "ClientLink"), (t.default = c);
    },
    81662: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(58175),
        o = n(12115),
        a = n(97430),
        i = n(99860),
        l = n(45923),
        u = n(30477),
        c = n(95559),
        s = n(20532),
        d = n(10897),
        f = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(o);
      t.default = function (e) {
        let t = i.receiveRoutingConfig(e),
          n = i.receiveLocaleCookie(e.localeCookie);
        function p() {
          let e = a.default();
          if (!t.locales.includes(e)) throw Error(void 0);
          return e;
        }
        let m = o.forwardRef(function (e, o) {
          let { href: a, locale: i, ...c } = e,
            s = p(),
            d = i || s;
          return f.default.createElement(
            u.default,
            r.extends(
              {
                ref: o,
                href: l.compileLocalizedPathname({
                  locale: d,
                  pathname: a,
                  params: "object" == typeof a ? a.params : void 0,
                  pathnames: t.pathnames,
                }),
                locale: i,
                localeCookie: n,
                localePrefix: t.localePrefix,
              },
              c
            )
          );
        });
        function h(e) {
          let { href: n, locale: r } = e;
          return l.compileLocalizedPathname({
            ...l.normalizeNameOrNameWithParams(n),
            locale: r,
            pathnames: t.pathnames,
          });
        }
        return (
          (m.displayName = "Link"),
          {
            Link: m,
            redirect: function (e) {
              let n = h({ href: e, locale: p() });
              for (
                var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), a = 1;
                a < r;
                a++
              )
                o[a - 1] = arguments[a];
              return c.clientRedirect(
                { pathname: n, localePrefix: t.localePrefix },
                ...o
              );
            },
            permanentRedirect: function (e) {
              let n = h({ href: e, locale: p() });
              for (
                var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), a = 1;
                a < r;
                a++
              )
                o[a - 1] = arguments[a];
              return c.clientPermanentRedirect(
                { pathname: n, localePrefix: t.localePrefix },
                ...o
              );
            },
            usePathname: function () {
              let e = s.default(t),
                n = p();
              return o.useMemo(
                () => (e ? l.getRoute(n, e, t.pathnames) : e),
                [n, e]
              );
            },
            useRouter: function () {
              let e = d.default(t.localePrefix, n),
                r = p();
              return o.useMemo(
                () => ({
                  ...e,
                  push(t) {
                    for (
                      var n,
                        o = arguments.length,
                        a = Array(o > 1 ? o - 1 : 0),
                        i = 1;
                      i < o;
                      i++
                    )
                      a[i - 1] = arguments[i];
                    let l = h({
                      href: t,
                      locale:
                        (null === (n = a[0]) || void 0 === n
                          ? void 0
                          : n.locale) || r,
                    });
                    return e.push(l, ...a);
                  },
                  replace(t) {
                    for (
                      var n,
                        o = arguments.length,
                        a = Array(o > 1 ? o - 1 : 0),
                        i = 1;
                      i < o;
                      i++
                    )
                      a[i - 1] = arguments[i];
                    let l = h({
                      href: t,
                      locale:
                        (null === (n = a[0]) || void 0 === n
                          ? void 0
                          : n.locale) || r,
                    });
                    return e.replace(l, ...a);
                  },
                  prefetch(t) {
                    for (
                      var n,
                        o = arguments.length,
                        a = Array(o > 1 ? o - 1 : 0),
                        i = 1;
                      i < o;
                      i++
                    )
                      a[i - 1] = arguments[i];
                    let l = h({
                      href: t,
                      locale:
                        (null === (n = a[0]) || void 0 === n
                          ? void 0
                          : n.locale) || r,
                    });
                    return e.prefetch(l, ...a);
                  },
                }),
                [e, r]
              );
            },
            getPathname: h,
          }
        );
      };
    },
    10796: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(76046),
        o = n(12115),
        a = n(97430),
        i = n(94126),
        l = n(27657),
        u = n(45923),
        c = n(20532);
      t.default = function (e) {
        function t() {
          return a.default();
        }
        let { Link: n, config: s, getPathname: d, ...f } = i.default(t, e);
        return {
          ...f,
          Link: n,
          usePathname: function () {
            let e = c.default(s),
              n = t();
            return o.useMemo(
              () => (e && s.pathnames ? u.getRoute(n, e, s.pathnames) : e),
              [n, e]
            );
          },
          useRouter: function () {
            let e = r.useRouter(),
              n = t(),
              a = r.usePathname();
            return o.useMemo(() => {
              function t(e) {
                return function (t, r) {
                  let { locale: o, ...i } = r || {},
                    u = [
                      d({
                        href: t,
                        locale: o || n,
                        domain: window.location.host,
                      }),
                    ];
                  Object.keys(i).length > 0 && u.push(i),
                    e(...u),
                    l.default(s.localeCookie, a, n, o);
                };
              }
              return {
                ...e,
                push: t(e.push),
                replace: t(e.replace),
                prefetch: t(e.prefetch),
              };
            }, [n, a, e]);
          },
          getPathname: d,
        };
      };
    },
    83142: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(58175),
        o = n(12115),
        a = n(99860),
        i = n(30477),
        l = n(95559),
        u = n(20532),
        c = n(10897),
        s = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(o);
      t.default = function (e) {
        let t = a.receiveLocalePrefixConfig(
            null == e ? void 0 : e.localePrefix
          ),
          n = a.receiveLocaleCookie(null == e ? void 0 : e.localeCookie),
          d = o.forwardRef(function (e, o) {
            return s.default.createElement(
              i.default,
              r.extends({ ref: o, localeCookie: n, localePrefix: t }, e)
            );
          });
        return (
          (d.displayName = "Link"),
          {
            Link: d,
            redirect: function (e) {
              for (
                var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1;
                o < n;
                o++
              )
                r[o - 1] = arguments[o];
              return l.clientRedirect({ pathname: e, localePrefix: t }, ...r);
            },
            permanentRedirect: function (e) {
              for (
                var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1;
                o < n;
                o++
              )
                r[o - 1] = arguments[o];
              return l.clientPermanentRedirect(
                { pathname: e, localePrefix: t },
                ...r
              );
            },
            usePathname: function () {
              return u.default({
                localePrefix: t,
                defaultLocale: null == e ? void 0 : e.defaultLocale,
              });
            },
            useRouter: function () {
              return c.default(t, n);
            },
          }
        );
      };
    },
    95559: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(97430),
        o = n(94487);
      function a(e) {
        return function (t) {
          let n;
          try {
            n = r.default();
          } catch (e) {
            throw e;
          }
          for (
            var o = arguments.length, a = Array(o > 1 ? o - 1 : 0), i = 1;
            i < o;
            i++
          )
            a[i - 1] = arguments[i];
          return e({ ...t, locale: n }, ...a);
        };
      }
      let i = a(o.baseRedirect),
        l = a(o.basePermanentRedirect);
      (t.clientPermanentRedirect = l), (t.clientRedirect = i);
    },
    20532: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(76046),
        o = n(12115),
        a = n(97430),
        i = n(11070);
      t.default = function (e) {
        let t = r.usePathname(),
          n = a.default();
        return o.useMemo(() => {
          if (!t) return t;
          let r = t,
            o = i.getLocalePrefix(n, e.localePrefix);
          if (i.hasPathnamePrefixed(o, t)) r = i.unprefixPathname(t, o);
          else if (
            "as-needed" === e.localePrefix.mode &&
            e.localePrefix.prefixes
          ) {
            let e = i.getLocaleAsPrefix(n);
            i.hasPathnamePrefixed(e, t) && (r = i.unprefixPathname(t, e));
          }
          return r;
        }, [e.localePrefix, n, t]);
      };
    },
    10897: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(76046),
        o = n(12115),
        a = n(97430),
        i = n(11070),
        l = n(27657),
        u = n(45923);
      t.default = function (e, t) {
        let n = r.useRouter(),
          c = a.default(),
          s = r.usePathname();
        return o.useMemo(() => {
          function r(n) {
            return function (r, o) {
              let { locale: a, ...d } = o || {};
              l.default(t, s, c, a);
              let f = [
                (function (t, n) {
                  let r = window.location.pathname,
                    o = u.getBasePath(s);
                  o && (r = r.replace(o, ""));
                  let a = n || c,
                    l = i.getLocalePrefix(a, e);
                  return i.localizeHref(t, a, c, r, l);
                })(r, a),
              ];
              return Object.keys(d).length > 0 && f.push(d), n(...f);
            };
          }
          return {
            ...n,
            push: r(n.push),
            replace: r(n.replace),
            prefetch: r(n.prefetch),
          };
        }, [c, t, e, s, n]);
      };
    },
    4095: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(58175),
        o = n(48173),
        a = n(76046),
        i = n(12115),
        l = n(97430),
        u = n(27657);
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var s = c(o),
        d = c(i),
        f = i.forwardRef(function (e, t) {
          let {
              defaultLocale: n,
              href: o,
              locale: c,
              localeCookie: f,
              onClick: p,
              prefetch: m,
              unprefixed: h,
              ...v
            } = e,
            g = l.default(),
            w = null != c && c !== g,
            y = c || g,
            b = (function () {
              let [e, t] = i.useState();
              return (
                i.useEffect(() => {
                  t(window.location.host);
                }, []),
                e
              );
            })(),
            x =
              b &&
              h &&
              (h.domains[b] === y ||
                (!Object.keys(h.domains).includes(b) && g === n && !c))
                ? h.pathname
                : o,
            P = a.usePathname();
          return (
            w && (m = !1),
            d.default.createElement(
              s.default,
              r.extends(
                {
                  ref: t,
                  href: x,
                  hrefLang: w ? c : void 0,
                  onClick: function (e) {
                    u.default(f, P, g, c), p && p(e);
                  },
                  prefetch: m,
                },
                v
              )
            )
          );
        });
      t.default = f;
    },
    79472: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(58175),
        o = n(76046),
        a = n(12115),
        i = n(97430),
        l = n(11070),
        u = n(4095),
        c = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(a);
      let s = a.forwardRef(function (e, t) {
        let {
            href: n,
            locale: s,
            localeCookie: d,
            localePrefixMode: f,
            prefix: p,
            ...m
          } = e,
          h = o.usePathname(),
          v = i.default(),
          g = s !== v,
          [w, y] = a.useState(() =>
            l.isLocalizableHref(n) && ("never" !== f || g)
              ? l.prefixHref(n, p)
              : n
          );
        return (
          a.useEffect(() => {
            h && y(l.localizeHref(n, s, v, h, p));
          }, [v, n, s, h, p]),
          c.default.createElement(
            u.default,
            r.extends({ ref: t, href: w, locale: s, localeCookie: d }, m)
          )
        );
      });
      (s.displayName = "ClientLink"), (t.default = s);
    },
    94126: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(58175),
        o = n(76046),
        a = n(12115),
        i = n(99860),
        l = n(11070),
        u = n(4095),
        c = n(45923),
        s = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(a);
      t.default = function (e, t) {
        let n = i.receiveRoutingConfig(t || {}),
          d = n.pathnames,
          f = ("as-needed" === n.localePrefix.mode && n.domains) || void 0,
          p = a.forwardRef(function (t, o) {
            let i,
              c,
              { href: p, locale: h, ...v } = t;
            "object" == typeof p ? ((i = p.pathname), (c = p.params)) : (i = p);
            let g = l.isLocalizableHref(p),
              w = e(),
              y = w instanceof Promise ? a.use(w) : w,
              b = g
                ? m(
                    {
                      locale: h || y,
                      href: null == d ? i : { pathname: i, params: c },
                    },
                    null != h || f || void 0
                  )
                : i;
            return s.default.createElement(
              u.default,
              r.extends(
                {
                  ref: o,
                  defaultLocale: n.defaultLocale,
                  href: "object" == typeof p ? { ...p, pathname: b } : b,
                  locale: h,
                  localeCookie: n.localeCookie,
                  unprefixed:
                    f && g
                      ? {
                          domains: n.domains.reduce(
                            (e, t) => ((e[t.domain] = t.defaultLocale), e),
                            {}
                          ),
                          pathname: m(
                            {
                              locale: y,
                              href: null == d ? i : { pathname: i, params: c },
                            },
                            !1
                          ),
                        }
                      : void 0,
                },
                v
              )
            );
          });
        function m(e, t) {
          let r;
          let { href: o, locale: a } = e;
          return (
            null == d
              ? "object" == typeof o
                ? ((r = o.pathname),
                  o.query && (r += c.serializeSearchParams(o.query)))
                : (r = o)
              : (r = c.compileLocalizedPathname({
                  locale: a,
                  ...c.normalizeNameOrNameWithParams(o),
                  pathnames: n.pathnames,
                })),
            c.applyPathnamePrefix(r, a, n, e.domain, t)
          );
        }
        function h(e) {
          return function (t) {
            for (
              var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1;
              o < n;
              o++
            )
              r[o - 1] = arguments[o];
            return e(m(t, t.domain ? void 0 : f), ...r);
          };
        }
        return {
          config: n,
          Link: p,
          redirect: h(o.redirect),
          permanentRedirect: h(o.permanentRedirect),
          getPathname: m,
        };
      };
    },
    94487: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(76046),
        o = n(11070);
      function a(e) {
        return function (t) {
          let n = o.getLocalePrefix(t.locale, t.localePrefix),
            r =
              "never" !== t.localePrefix.mode && o.isLocalizableHref(t.pathname)
                ? o.prefixPathname(n, t.pathname)
                : t.pathname;
          for (
            var a = arguments.length, i = Array(a > 1 ? a - 1 : 0), l = 1;
            l < a;
            l++
          )
            i[l - 1] = arguments[l];
          return e(r, ...i);
        };
      }
      let i = a(r.redirect),
        l = a(r.permanentRedirect);
      (t.basePermanentRedirect = l), (t.baseRedirect = i);
    },
    27657: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(45923);
      t.default = function (e, t, n, o) {
        if (!e || !(o !== n && null != o) || !t) return;
        let a = r.getBasePath(t),
          { name: i, ...l } = e;
        l.path || (l.path = "" !== a ? a : "/");
        let u = "".concat(i, "=").concat(o, ";");
        for (let [e, t] of Object.entries(l))
          (u += "".concat("maxAge" === e ? "max-age" : e)),
            "boolean" != typeof t && (u += "=" + t),
            (u += ";");
        document.cookie = u;
      };
    },
    45923: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(11070);
      function o(e) {
        let t = new URLSearchParams();
        for (let [n, r] of Object.entries(e))
          Array.isArray(r)
            ? r.forEach((e) => {
                t.append(n, String(e));
              })
            : t.set(n, String(r));
        return "?" + t.toString();
      }
      (t.applyPathnamePrefix = function (e, t, n, o, a) {
        let i;
        let { mode: l } = n.localePrefix;
        if (void 0 !== a) i = a;
        else if (r.isLocalizableHref(e)) {
          if ("always" === l) i = !0;
          else if ("as-needed" === l) {
            let e = n.defaultLocale;
            if (n.domains) {
              let t = n.domains.find((e) => e.domain === o);
              t && (e = t.defaultLocale);
            }
            i = e !== t;
          }
        }
        return i
          ? r.prefixPathname(r.getLocalePrefix(t, n.localePrefix), e)
          : e;
      }),
        (t.compileLocalizedPathname = function (e) {
          let { pathname: t, locale: n, params: a, pathnames: i, query: l } = e;
          function u(e) {
            let t = i[e];
            return t || (t = e), t;
          }
          function c(e) {
            let t = "string" == typeof e ? e : e[n];
            return (
              a &&
                Object.entries(a).forEach((e) => {
                  let n,
                    r,
                    [o, a] = e;
                  Array.isArray(a)
                    ? ((n = "(\\[)?\\[...".concat(o, "\\](\\])?")),
                      (r = a.map((e) => String(e)).join("/")))
                    : ((n = "\\[".concat(o, "\\]")), (r = String(a))),
                    (t = t.replace(RegExp(n, "g"), r));
                }),
              (t = t.replace(/\[\[\.\.\..+\]\]/g, "")),
              (t = r.normalizeTrailingSlash(t)),
              l && (t += o(l)),
              t
            );
          }
          if ("string" == typeof t) return c(u(t));
          {
            let { pathname: e, ...n } = t;
            return { ...n, pathname: c(u(e)) };
          }
        }),
        (t.getBasePath = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : window.location.pathname;
          return "/" === e ? t : t.replace(e, "");
        }),
        (t.getRoute = function (e, t, n) {
          let o = r.getSortedPathnames(Object.keys(n)),
            a = decodeURI(t);
          for (let t of o) {
            let o = n[t];
            if ("string" == typeof o) {
              if (r.matchesPathname(o, a)) return t;
            } else if (r.matchesPathname(o[e], a)) return t;
          }
          return t;
        }),
        (t.normalizeNameOrNameWithParams = function (e) {
          return "string" == typeof e ? { pathname: e } : e;
        }),
        (t.serializeSearchParams = o);
    },
    55433: (e, t, n) => {
      "use strict";
      var r = n(67645);
      t.o = r.default;
    },
    99860: (e, t) => {
      "use strict";
      function n(e) {
        return (
          !(null != e && !e) && {
            name: "NEXT_LOCALE",
            maxAge: 31536e3,
            sameSite: "lax",
            ...("object" == typeof e && e),
          }
        );
      }
      function r(e) {
        return "object" == typeof e ? e : { mode: e || "always" };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.receiveLocaleCookie = n),
        (t.receiveLocalePrefixConfig = r),
        (t.receiveRoutingConfig = function (e) {
          var t, o;
          return {
            ...e,
            localePrefix: r(e.localePrefix),
            localeCookie: n(e.localeCookie),
            localeDetection:
              null === (t = e.localeDetection) || void 0 === t || t,
            alternateLinks:
              null === (o = e.alternateLinks) || void 0 === o || o,
          };
        });
    },
    67645: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return e;
        });
    },
    11070: (e, t, n) => {
      "use strict";
      var r = n(2818);
      function o(e) {
        return (
          ("object" == typeof e
            ? null == e.host && null == e.hostname
            : !/^[a-z]+:/i.test(e)) &&
          !(function (e) {
            let t = "object" == typeof e ? e.pathname : e;
            return null != t && !t.startsWith("/");
          })(e)
        );
      }
      function a(e, t) {
        let n;
        return (
          "string" == typeof e
            ? (n = i(t, e))
            : ((n = { ...e }), e.pathname && (n.pathname = i(t, e.pathname))),
          n
        );
      }
      function i(e, t) {
        let n = e;
        return /^\/(\?.*)?$/.test(t) && (t = t.slice(1)), (n += t);
      }
      function l(e, t) {
        return t === e || t.startsWith("".concat(e, "/"));
      }
      function u(e) {
        let t = (function () {
          try {
            return "true" === r.env._next_intl_trailing_slash;
          } catch (e) {
            return !1;
          }
        })();
        if ("/" !== e) {
          let n = e.endsWith("/");
          t && !n ? (e += "/") : !t && n && (e = e.slice(0, -1));
        }
        return e;
      }
      function c(e) {
        return "/" + e;
      }
      function s(e) {
        let t = e
          .replace(/\[\[(\.\.\.[^\]]+)\]\]/g, "?(.*)")
          .replace(/\[(\.\.\.[^\]]+)\]/g, "(.+)")
          .replace(/\[([^\]]+)\]/g, "([^/]+)");
        return new RegExp("^".concat(t, "$"));
      }
      function d(e) {
        return e.includes("[[...");
      }
      function f(e) {
        return e.includes("[...");
      }
      function p(e) {
        return e.includes("[");
      }
      function m(e, t) {
        let n = e.split("/"),
          r = t.split("/"),
          o = Math.max(n.length, r.length);
        for (let e = 0; e < o; e++) {
          let t = n[e],
            o = r[e];
          if (!t && o) return -1;
          if (t && !o) return 1;
          if (t || o) {
            if (!p(t) && p(o)) return -1;
            if (p(t) && !p(o)) return 1;
            if (!f(t) && f(o)) return -1;
            if (f(t) && !f(o)) return 1;
            if (!d(t) && d(o)) return -1;
            if (d(t) && !d(o)) return 1;
          }
        }
        return 0;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getLocaleAsPrefix = c),
        (t.getLocalePrefix = function (e, t) {
          var n;
          return (
            ("never" !== t.mode &&
              (null === (n = t.prefixes) || void 0 === n ? void 0 : n[e])) ||
            c(e)
          );
        }),
        (t.getSortedPathnames = function (e) {
          return e.sort(m);
        }),
        (t.hasPathnamePrefixed = l),
        (t.isLocalizableHref = o),
        (t.localizeHref = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : t,
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = arguments.length > 4 ? arguments[4] : void 0;
          if (!o(e)) return e;
          let u = l(i, r);
          return (t !== n || u) && null != i ? a(e, i) : e;
        }),
        (t.matchesPathname = function (e, t) {
          let n = u(e),
            r = u(t);
          return s(n).test(r);
        }),
        (t.normalizeTrailingSlash = u),
        (t.prefixHref = a),
        (t.prefixPathname = i),
        (t.templateToRegex = s),
        (t.unprefixPathname = function (e, t) {
          return e.replace(new RegExp("^".concat(t)), "") || "/";
        });
    },
    5565: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => o.a });
      var r = n(4146),
        o = n.n(r);
    },
    4146: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return u;
          },
          getImageProps: function () {
            return l;
          },
        });
      let r = n(60306),
        o = n(40666),
        a = n(87970),
        i = r._(n(65514));
      function l(e) {
        let { props: t } = (0, o.getImgProps)(e, {
          defaultLoader: i.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return { props: t };
      }
      let u = a.Image;
    },
    85035: () => {},
    72691: (e, t, n) => {
      "use strict";
      n.d(t, {
        UC: () => ne,
        YJ: () => nn,
        In: () => t9,
        q7: () => no,
        VF: () => ni,
        p4: () => na,
        JU: () => nr,
        ZL: () => t8,
        bL: () => t6,
        wn: () => nu,
        PP: () => nl,
        wv: () => nc,
        l9: () => t4,
        WT: () => t7,
        LM: () => nt,
      });
      var r,
        o = n(12115),
        a = n(47650);
      function i(e, [t, n]) {
        return Math.min(n, Math.max(t, e));
      }
      var l = n(93610),
        u = n(18166),
        c = n(88068),
        s = n(12317),
        d = n(95155),
        f = o.createContext(void 0),
        p = n(23360),
        m = n(41524),
        h = n(95630),
        v = "dismissableLayer.update",
        g = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        w = o.forwardRef((e, t) => {
          var n, a;
          let {
              disableOutsidePointerEvents: i = !1,
              onEscapeKeyDown: u,
              onPointerDownOutside: s,
              onFocusOutside: f,
              onInteractOutside: w,
              onDismiss: x,
              ...P
            } = e,
            C = o.useContext(g),
            [R, E] = o.useState(null),
            S =
              null !== (a = null == R ? void 0 : R.ownerDocument) &&
              void 0 !== a
                ? a
                : null === (n = globalThis) || void 0 === n
                ? void 0
                : n.document,
            [, T] = o.useState({}),
            k = (0, c.s)(t, (e) => E(e)),
            A = Array.from(C.layers),
            [L] = [...C.layersWithOutsidePointerEventsDisabled].slice(-1),
            O = A.indexOf(L),
            D = R ? A.indexOf(R) : -1,
            M = C.layersWithOutsidePointerEventsDisabled.size > 0,
            j = D >= O,
            N = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, m.c)(e),
                a = o.useRef(!1),
                i = o.useRef(() => {});
              return (
                o.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !a.current) {
                        let t = function () {
                            b("dismissableLayer.pointerDownOutside", r, o, {
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
              !j ||
                n ||
                (null == s || s(e),
                null == w || w(e),
                e.defaultPrevented || null == x || x());
            }, S),
            F = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, m.c)(e),
                a = o.useRef(!1);
              return (
                o.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !a.current &&
                      b(
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
                (null == f || f(e),
                null == w || w(e),
                e.defaultPrevented || null == x || x());
            }, S);
          return (
            (0, h.U)((e) => {
              D !== C.layers.size - 1 ||
                (null == u || u(e),
                !e.defaultPrevented && x && (e.preventDefault(), x()));
            }, S),
            o.useEffect(() => {
              if (R)
                return (
                  i &&
                    (0 === C.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = S.body.style.pointerEvents),
                      (S.body.style.pointerEvents = "none")),
                    C.layersWithOutsidePointerEventsDisabled.add(R)),
                  C.layers.add(R),
                  y(),
                  () => {
                    i &&
                      1 === C.layersWithOutsidePointerEventsDisabled.size &&
                      (S.body.style.pointerEvents = r);
                  }
                );
            }, [R, S, i, C]),
            o.useEffect(
              () => () => {
                R &&
                  (C.layers.delete(R),
                  C.layersWithOutsidePointerEventsDisabled.delete(R),
                  y());
              },
              [R, C]
            ),
            o.useEffect(() => {
              let e = () => T({});
              return (
                document.addEventListener(v, e),
                () => document.removeEventListener(v, e)
              );
            }, []),
            (0, d.jsx)(p.sG.div, {
              ...P,
              ref: k,
              style: {
                pointerEvents: M ? (j ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, l.m)(e.onFocusCapture, F.onFocusCapture),
              onBlurCapture: (0, l.m)(e.onBlurCapture, F.onBlurCapture),
              onPointerDownCapture: (0, l.m)(
                e.onPointerDownCapture,
                N.onPointerDownCapture
              ),
            })
          );
        });
      function y() {
        let e = new CustomEvent(v);
        document.dispatchEvent(e);
      }
      function b(e, t, n, r) {
        let { discrete: o } = r,
          a = n.originalEvent.target,
          i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && a.addEventListener(e, t, { once: !0 }),
          o ? (0, p.hO)(a, i) : a.dispatchEvent(i);
      }
      (w.displayName = "DismissableLayer"),
        (o.forwardRef((e, t) => {
          let n = o.useContext(g),
            r = o.useRef(null),
            a = (0, c.s)(t, r);
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
            (0, d.jsx)(p.sG.div, { ...e, ref: a })
          );
        }).displayName = "DismissableLayerBranch");
      var x = n(62292),
        P = n(20196),
        C = n(67668);
      let R = ["top", "right", "bottom", "left"],
        E = Math.min,
        S = Math.max,
        T = Math.round,
        k = Math.floor,
        A = (e) => ({ x: e, y: e }),
        L = { left: "right", right: "left", bottom: "top", top: "bottom" },
        O = { start: "end", end: "start" };
      function D(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function M(e) {
        return e.split("-")[0];
      }
      function j(e) {
        return e.split("-")[1];
      }
      function N(e) {
        return "x" === e ? "y" : "x";
      }
      function F(e) {
        return "y" === e ? "height" : "width";
      }
      function B(e) {
        return ["top", "bottom"].includes(M(e)) ? "y" : "x";
      }
      function _(e) {
        return e.replace(/start|end/g, (e) => O[e]);
      }
      function I(e) {
        return e.replace(/left|right|bottom|top/g, (e) => L[e]);
      }
      function H(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function z(e) {
        let { x: t, y: n, width: r, height: o } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n,
        };
      }
      function W(e, t, n) {
        let r,
          { reference: o, floating: a } = e,
          i = B(t),
          l = N(B(t)),
          u = F(l),
          c = M(t),
          s = "y" === i,
          d = o.x + o.width / 2 - a.width / 2,
          f = o.y + o.height / 2 - a.height / 2,
          p = o[u] / 2 - a[u] / 2;
        switch (c) {
          case "top":
            r = { x: d, y: o.y - a.height };
            break;
          case "bottom":
            r = { x: d, y: o.y + o.height };
            break;
          case "right":
            r = { x: o.x + o.width, y: f };
            break;
          case "left":
            r = { x: o.x - a.width, y: f };
            break;
          default:
            r = { x: o.x, y: o.y };
        }
        switch (j(t)) {
          case "start":
            r[l] -= p * (n && s ? -1 : 1);
            break;
          case "end":
            r[l] += p * (n && s ? -1 : 1);
        }
        return r;
      }
      let q = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: a = [],
            platform: i,
          } = n,
          l = a.filter(Boolean),
          u = await (null == i.isRTL ? void 0 : i.isRTL(t)),
          c = await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: s, y: d } = W(c, r, u),
          f = r,
          p = {},
          m = 0;
        for (let n = 0; n < l.length; n++) {
          let { name: a, fn: h } = l[n],
            {
              x: v,
              y: g,
              data: w,
              reset: y,
            } = await h({
              x: s,
              y: d,
              initialPlacement: r,
              placement: f,
              strategy: o,
              middlewareData: p,
              rects: c,
              platform: i,
              elements: { reference: e, floating: t },
            });
          (s = null != v ? v : s),
            (d = null != g ? g : d),
            (p = { ...p, [a]: { ...p[a], ...w } }),
            y &&
              m <= 50 &&
              (m++,
              "object" == typeof y &&
                (y.placement && (f = y.placement),
                y.rects &&
                  (c =
                    !0 === y.rects
                      ? await i.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : y.rects),
                ({ x: s, y: d } = W(c, f, u))),
              (n = -1));
        }
        return { x: s, y: d, placement: f, strategy: o, middlewareData: p };
      };
      async function U(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: o, platform: a, rects: i, elements: l, strategy: u } = e,
          {
            boundary: c = "clippingAncestors",
            rootBoundary: s = "viewport",
            elementContext: d = "floating",
            altBoundary: f = !1,
            padding: p = 0,
          } = D(t, e),
          m = H(p),
          h = l[f ? ("floating" === d ? "reference" : "floating") : d],
          v = z(
            await a.getClippingRect({
              element:
                null ==
                  (n = await (null == a.isElement ? void 0 : a.isElement(h))) ||
                n
                  ? h
                  : h.contextElement ||
                    (await (null == a.getDocumentElement
                      ? void 0
                      : a.getDocumentElement(l.floating))),
              boundary: c,
              rootBoundary: s,
              strategy: u,
            })
          ),
          g =
            "floating" === d
              ? {
                  x: r,
                  y: o,
                  width: i.floating.width,
                  height: i.floating.height,
                }
              : i.reference,
          w = await (null == a.getOffsetParent
            ? void 0
            : a.getOffsetParent(l.floating)),
          y = ((await (null == a.isElement ? void 0 : a.isElement(w))) &&
            (await (null == a.getScale ? void 0 : a.getScale(w)))) || {
            x: 1,
            y: 1,
          },
          b = z(
            a.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: l,
                  rect: g,
                  offsetParent: w,
                  strategy: u,
                })
              : g
          );
        return {
          top: (v.top - b.top + m.top) / y.y,
          bottom: (b.bottom - v.bottom + m.bottom) / y.y,
          left: (v.left - b.left + m.left) / y.x,
          right: (b.right - v.right + m.right) / y.x,
        };
      }
      function V(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function G(e) {
        return R.some((t) => e[t] >= 0);
      }
      async function Y(e, t) {
        let { placement: n, platform: r, elements: o } = e,
          a = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
          i = M(n),
          l = j(n),
          u = "y" === B(n),
          c = ["left", "top"].includes(i) ? -1 : 1,
          s = a && u ? -1 : 1,
          d = D(t, e),
          {
            mainAxis: f,
            crossAxis: p,
            alignmentAxis: m,
          } = "number" == typeof d
            ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: d.mainAxis || 0,
                crossAxis: d.crossAxis || 0,
                alignmentAxis: d.alignmentAxis,
              };
        return (
          l && "number" == typeof m && (p = "end" === l ? -1 * m : m),
          u ? { x: p * s, y: f * c } : { x: f * c, y: p * s }
        );
      }
      function X() {
        return "undefined" != typeof window;
      }
      function $(e) {
        return Z(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function K(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function J(e) {
        var t;
        return null ==
          (t = (Z(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function Z(e) {
        return !!X() && (e instanceof Node || e instanceof K(e).Node);
      }
      function Q(e) {
        return !!X() && (e instanceof Element || e instanceof K(e).Element);
      }
      function ee(e) {
        return (
          !!X() && (e instanceof HTMLElement || e instanceof K(e).HTMLElement)
        );
      }
      function et(e) {
        return (
          !!X() &&
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof K(e).ShadowRoot)
        );
      }
      function en(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = el(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(o)
        );
      }
      function er(e) {
        return [":popover-open", ":modal"].some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function eo(e) {
        let t = ea(),
          n = Q(e) ? el(e) : e;
        return (
          ["transform", "translate", "scale", "rotate", "perspective"].some(
            (e) => !!n[e] && "none" !== n[e]
          ) ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          [
            "transform",
            "translate",
            "scale",
            "rotate",
            "perspective",
            "filter",
          ].some((e) => (n.willChange || "").includes(e)) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e)
          )
        );
      }
      function ea() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function ei(e) {
        return ["html", "body", "#document"].includes($(e));
      }
      function el(e) {
        return K(e).getComputedStyle(e);
      }
      function eu(e) {
        return Q(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function ec(e) {
        if ("html" === $(e)) return e;
        let t = e.assignedSlot || e.parentNode || (et(e) && e.host) || J(e);
        return et(t) ? t.host : t;
      }
      function es(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let o = (function e(t) {
            let n = ec(t);
            return ei(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : ee(n) && en(n)
              ? n
              : e(n);
          })(e),
          a = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          i = K(o);
        if (a) {
          let e = ed(i);
          return t.concat(
            i,
            i.visualViewport || [],
            en(o) ? o : [],
            e && n ? es(e) : []
          );
        }
        return t.concat(o, es(o, [], n));
      }
      function ed(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function ef(e) {
        let t = el(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = ee(e),
          a = o ? e.offsetWidth : n,
          i = o ? e.offsetHeight : r,
          l = T(n) !== a || T(r) !== i;
        return l && ((n = a), (r = i)), { width: n, height: r, $: l };
      }
      function ep(e) {
        return Q(e) ? e : e.contextElement;
      }
      function em(e) {
        let t = ep(e);
        if (!ee(t)) return A(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: o, $: a } = ef(t),
          i = (a ? T(n.width) : n.width) / r,
          l = (a ? T(n.height) : n.height) / o;
        return (
          (i && Number.isFinite(i)) || (i = 1),
          (l && Number.isFinite(l)) || (l = 1),
          { x: i, y: l }
        );
      }
      let eh = A(0);
      function ev(e) {
        let t = K(e);
        return ea() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : eh;
      }
      function eg(e, t, n, r) {
        var o;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let a = e.getBoundingClientRect(),
          i = ep(e),
          l = A(1);
        t && (r ? Q(r) && (l = em(r)) : (l = em(e)));
        let u = (void 0 === (o = n) && (o = !1), r && (!o || r === K(i)) && o)
            ? ev(i)
            : A(0),
          c = (a.left + u.x) / l.x,
          s = (a.top + u.y) / l.y,
          d = a.width / l.x,
          f = a.height / l.y;
        if (i) {
          let e = K(i),
            t = r && Q(r) ? K(r) : r,
            n = e,
            o = ed(n);
          for (; o && r && t !== n; ) {
            let e = em(o),
              t = o.getBoundingClientRect(),
              r = el(o),
              a = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              i = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            (c *= e.x),
              (s *= e.y),
              (d *= e.x),
              (f *= e.y),
              (c += a),
              (s += i),
              (o = ed((n = K(o))));
          }
        }
        return z({ width: d, height: f, x: c, y: s });
      }
      function ew(e, t) {
        let n = eu(e).scrollLeft;
        return t ? t.left + n : eg(J(e)).left + n;
      }
      function ey(e, t, n) {
        void 0 === n && (n = !1);
        let r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - (n ? 0 : ew(e, r)),
          y: r.top + t.scrollTop,
        };
      }
      function eb(e, t, n) {
        let r;
        if ("viewport" === t)
          r = (function (e, t) {
            let n = K(e),
              r = J(e),
              o = n.visualViewport,
              a = r.clientWidth,
              i = r.clientHeight,
              l = 0,
              u = 0;
            if (o) {
              (a = o.width), (i = o.height);
              let e = ea();
              (!e || (e && "fixed" === t)) &&
                ((l = o.offsetLeft), (u = o.offsetTop));
            }
            return { width: a, height: i, x: l, y: u };
          })(e, n);
        else if ("document" === t)
          r = (function (e) {
            let t = J(e),
              n = eu(e),
              r = e.ownerDocument.body,
              o = S(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              a = S(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight
              ),
              i = -n.scrollLeft + ew(e),
              l = -n.scrollTop;
            return (
              "rtl" === el(r).direction &&
                (i += S(t.clientWidth, r.clientWidth) - o),
              { width: o, height: a, x: i, y: l }
            );
          })(J(e));
        else if (Q(t))
          r = (function (e, t) {
            let n = eg(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              a = ee(e) ? em(e) : A(1),
              i = e.clientWidth * a.x;
            return {
              width: i,
              height: e.clientHeight * a.y,
              x: o * a.x,
              y: r * a.y,
            };
          })(t, n);
        else {
          let n = ev(e);
          r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
        }
        return z(r);
      }
      function ex(e) {
        return "static" === el(e).position;
      }
      function eP(e, t) {
        if (!ee(e) || "fixed" === el(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return J(e) === n && (n = n.ownerDocument.body), n;
      }
      function eC(e, t) {
        let n = K(e);
        if (er(e)) return n;
        if (!ee(e)) {
          let t = ec(e);
          for (; t && !ei(t); ) {
            if (Q(t) && !ex(t)) return t;
            t = ec(t);
          }
          return n;
        }
        let r = eP(e, t);
        for (; r && ["table", "td", "th"].includes($(r)) && ex(r); )
          r = eP(r, t);
        return r && ei(r) && ex(r) && !eo(r)
          ? n
          : r ||
              (function (e) {
                let t = ec(e);
                for (; ee(t) && !ei(t); ) {
                  if (eo(t)) return t;
                  if (er(t)) break;
                  t = ec(t);
                }
                return null;
              })(e) ||
              n;
      }
      let eR = async function (e) {
          let t = this.getOffsetParent || eC,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: (function (e, t, n) {
              let r = ee(t),
                o = J(t),
                a = "fixed" === n,
                i = eg(e, !0, a, t),
                l = { scrollLeft: 0, scrollTop: 0 },
                u = A(0);
              if (r || (!r && !a)) {
                if ((("body" !== $(t) || en(o)) && (l = eu(t)), r)) {
                  let e = eg(t, !0, a, t);
                  (u.x = e.x + t.clientLeft), (u.y = e.y + t.clientTop);
                } else o && (u.x = ew(o));
              }
              let c = !o || r || a ? A(0) : ey(o, l);
              return {
                x: i.left + l.scrollLeft - u.x - c.x,
                y: i.top + l.scrollTop - u.y - c.y,
                width: i.width,
                height: i.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        eE = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
              a = "fixed" === o,
              i = J(r),
              l = !!t && er(t.floating);
            if (r === i || (l && a)) return n;
            let u = { scrollLeft: 0, scrollTop: 0 },
              c = A(1),
              s = A(0),
              d = ee(r);
            if (
              (d || (!d && !a)) &&
              (("body" !== $(r) || en(i)) && (u = eu(r)), ee(r))
            ) {
              let e = eg(r);
              (c = em(r)),
                (s.x = e.x + r.clientLeft),
                (s.y = e.y + r.clientTop);
            }
            let f = !i || d || a ? A(0) : ey(i, u, !0);
            return {
              width: n.width * c.x,
              height: n.height * c.y,
              x: n.x * c.x - u.scrollLeft * c.x + s.x + f.x,
              y: n.y * c.y - u.scrollTop * c.y + s.y + f.y,
            };
          },
          getDocumentElement: J,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
              a = [
                ...("clippingAncestors" === n
                  ? er(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = es(e, [], !1).filter(
                            (e) => Q(e) && "body" !== $(e)
                          ),
                          o = null,
                          a = "fixed" === el(e).position,
                          i = a ? ec(e) : e;
                        for (; Q(i) && !ei(i); ) {
                          let t = el(i),
                            n = eo(i);
                          n || "fixed" !== t.position || (o = null),
                            (
                              a
                                ? !n && !o
                                : (!n &&
                                    "static" === t.position &&
                                    !!o &&
                                    ["absolute", "fixed"].includes(
                                      o.position
                                    )) ||
                                  (en(i) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = ec(t);
                                      return (
                                        !(r === n || !Q(r) || ei(r)) &&
                                        ("fixed" === el(r).position || e(r, n))
                                      );
                                    })(e, i))
                            )
                              ? (r = r.filter((e) => e !== i))
                              : (o = t),
                            (i = ec(i));
                        }
                        return t.set(e, r), r;
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              i = a[0],
              l = a.reduce((e, n) => {
                let r = eb(t, n, o);
                return (
                  (e.top = S(r.top, e.top)),
                  (e.right = E(r.right, e.right)),
                  (e.bottom = E(r.bottom, e.bottom)),
                  (e.left = S(r.left, e.left)),
                  e
                );
              }, eb(t, i, o));
            return {
              width: l.right - l.left,
              height: l.bottom - l.top,
              x: l.left,
              y: l.top,
            };
          },
          getOffsetParent: eC,
          getElementRects: eR,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = ef(e);
            return { width: t, height: n };
          },
          getScale: em,
          isElement: Q,
          isRTL: function (e) {
            return "rtl" === el(e).direction;
          },
        };
      function eS(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      let eT = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: o,
                rects: a,
                platform: i,
                elements: l,
                middlewareData: u,
              } = t,
              { element: c, padding: s = 0 } = D(e, t) || {};
            if (null == c) return {};
            let d = H(s),
              f = { x: n, y: r },
              p = N(B(o)),
              m = F(p),
              h = await i.getDimensions(c),
              v = "y" === p,
              g = v ? "clientHeight" : "clientWidth",
              w = a.reference[m] + a.reference[p] - f[p] - a.floating[m],
              y = f[p] - a.reference[p],
              b = await (null == i.getOffsetParent
                ? void 0
                : i.getOffsetParent(c)),
              x = b ? b[g] : 0;
            (x && (await (null == i.isElement ? void 0 : i.isElement(b)))) ||
              (x = l.floating[g] || a.floating[m]);
            let P = x / 2 - h[m] / 2 - 1,
              C = E(d[v ? "top" : "left"], P),
              R = E(d[v ? "bottom" : "right"], P),
              T = x - h[m] - R,
              k = x / 2 - h[m] / 2 + (w / 2 - y / 2),
              A = S(C, E(k, T)),
              L =
                !u.arrow &&
                null != j(o) &&
                k !== A &&
                a.reference[m] / 2 - (k < C ? C : R) - h[m] / 2 < 0,
              O = L ? (k < C ? k - C : k - T) : 0;
            return {
              [p]: f[p] + O,
              data: {
                [p]: A,
                centerOffset: k - A - O,
                ...(L && { alignmentOffset: O }),
              },
              reset: L,
            };
          },
        }),
        ek = (e, t, n) => {
          let r = new Map(),
            o = { platform: eE, ...n },
            a = { ...o.platform, _c: r };
          return q(e, t, { ...o, platform: a });
        };
      var eA = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
      function eL(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!eL(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !eL(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function eO(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function eD(e, t) {
        let n = eO(e);
        return Math.round(t * n) / n;
      }
      function eM(e) {
        let t = o.useRef(e);
        return (
          eA(() => {
            t.current = e;
          }),
          t
        );
      }
      let ej = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: n, padding: r } = "function" == typeof e ? e(t) : e;
            return n && {}.hasOwnProperty.call(n, "current")
              ? null != n.current
                ? eT({ element: n.current, padding: r }).fn(t)
                : {}
              : n
              ? eT({ element: n, padding: r }).fn(t)
              : {};
          },
        }),
        eN = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = 0),
              {
                name: "offset",
                options: e,
                async fn(t) {
                  var n, r;
                  let { x: o, y: a, placement: i, middlewareData: l } = t,
                    u = await Y(t, e);
                  return i ===
                    (null == (n = l.offset) ? void 0 : n.placement) &&
                    null != (r = l.arrow) &&
                    r.alignmentOffset
                    ? {}
                    : { x: o + u.x, y: a + u.y, data: { ...u, placement: i } };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eF = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "shift",
                options: e,
                async fn(t) {
                  let { x: n, y: r, placement: o } = t,
                    {
                      mainAxis: a = !0,
                      crossAxis: i = !1,
                      limiter: l = {
                        fn: (e) => {
                          let { x: t, y: n } = e;
                          return { x: t, y: n };
                        },
                      },
                      ...u
                    } = D(e, t),
                    c = { x: n, y: r },
                    s = await U(t, u),
                    d = B(M(o)),
                    f = N(d),
                    p = c[f],
                    m = c[d];
                  if (a) {
                    let e = "y" === f ? "top" : "left",
                      t = "y" === f ? "bottom" : "right",
                      n = p + s[e],
                      r = p - s[t];
                    p = S(n, E(p, r));
                  }
                  if (i) {
                    let e = "y" === d ? "top" : "left",
                      t = "y" === d ? "bottom" : "right",
                      n = m + s[e],
                      r = m - s[t];
                    m = S(n, E(m, r));
                  }
                  let h = l.fn({ ...t, [f]: p, [d]: m });
                  return {
                    ...h,
                    data: {
                      x: h.x - n,
                      y: h.y - r,
                      enabled: { [f]: a, [d]: i },
                    },
                  };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eB = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                options: e,
                fn(t) {
                  let {
                      x: n,
                      y: r,
                      placement: o,
                      rects: a,
                      middlewareData: i,
                    } = t,
                    {
                      offset: l = 0,
                      mainAxis: u = !0,
                      crossAxis: c = !0,
                    } = D(e, t),
                    s = { x: n, y: r },
                    d = B(o),
                    f = N(d),
                    p = s[f],
                    m = s[d],
                    h = D(l, t),
                    v =
                      "number" == typeof h
                        ? { mainAxis: h, crossAxis: 0 }
                        : { mainAxis: 0, crossAxis: 0, ...h };
                  if (u) {
                    let e = "y" === f ? "height" : "width",
                      t = a.reference[f] - a.floating[e] + v.mainAxis,
                      n = a.reference[f] + a.reference[e] - v.mainAxis;
                    p < t ? (p = t) : p > n && (p = n);
                  }
                  if (c) {
                    var g, w;
                    let e = "y" === f ? "width" : "height",
                      t = ["top", "left"].includes(M(o)),
                      n =
                        a.reference[d] -
                        a.floating[e] +
                        ((t && (null == (g = i.offset) ? void 0 : g[d])) || 0) +
                        (t ? 0 : v.crossAxis),
                      r =
                        a.reference[d] +
                        a.reference[e] +
                        (t
                          ? 0
                          : (null == (w = i.offset) ? void 0 : w[d]) || 0) -
                        (t ? v.crossAxis : 0);
                    m < n ? (m = n) : m > r && (m = r);
                  }
                  return { [f]: p, [d]: m };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        e_ = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "flip",
                options: e,
                async fn(t) {
                  var n, r, o, a, i;
                  let {
                      placement: l,
                      middlewareData: u,
                      rects: c,
                      initialPlacement: s,
                      platform: d,
                      elements: f,
                    } = t,
                    {
                      mainAxis: p = !0,
                      crossAxis: m = !0,
                      fallbackPlacements: h,
                      fallbackStrategy: v = "bestFit",
                      fallbackAxisSideDirection: g = "none",
                      flipAlignment: w = !0,
                      ...y
                    } = D(e, t);
                  if (null != (n = u.arrow) && n.alignmentOffset) return {};
                  let b = M(l),
                    x = B(s),
                    P = M(s) === s,
                    C = await (null == d.isRTL ? void 0 : d.isRTL(f.floating)),
                    R =
                      h ||
                      (P || !w
                        ? [I(s)]
                        : (function (e) {
                            let t = I(e);
                            return [_(e), t, _(t)];
                          })(s)),
                    E = "none" !== g;
                  !h &&
                    E &&
                    R.push(
                      ...(function (e, t, n, r) {
                        let o = j(e),
                          a = (function (e, t, n) {
                            let r = ["left", "right"],
                              o = ["right", "left"];
                            switch (e) {
                              case "top":
                              case "bottom":
                                if (n) return t ? o : r;
                                return t ? r : o;
                              case "left":
                              case "right":
                                return t
                                  ? ["top", "bottom"]
                                  : ["bottom", "top"];
                              default:
                                return [];
                            }
                          })(M(e), "start" === n, r);
                        return (
                          o &&
                            ((a = a.map((e) => e + "-" + o)),
                            t && (a = a.concat(a.map(_)))),
                          a
                        );
                      })(s, w, g, C)
                    );
                  let S = [s, ...R],
                    T = await U(t, y),
                    k = [],
                    A = (null == (r = u.flip) ? void 0 : r.overflows) || [];
                  if ((p && k.push(T[b]), m)) {
                    let e = (function (e, t, n) {
                      void 0 === n && (n = !1);
                      let r = j(e),
                        o = N(B(e)),
                        a = F(o),
                        i =
                          "x" === o
                            ? r === (n ? "end" : "start")
                              ? "right"
                              : "left"
                            : "start" === r
                            ? "bottom"
                            : "top";
                      return (
                        t.reference[a] > t.floating[a] && (i = I(i)), [i, I(i)]
                      );
                    })(l, c, C);
                    k.push(T[e[0]], T[e[1]]);
                  }
                  if (
                    ((A = [...A, { placement: l, overflows: k }]),
                    !k.every((e) => e <= 0))
                  ) {
                    let e =
                        ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1,
                      t = S[e];
                    if (t)
                      return {
                        data: { index: e, overflows: A },
                        reset: { placement: t },
                      };
                    let n =
                      null ==
                      (a = A.filter((e) => e.overflows[0] <= 0).sort(
                        (e, t) => e.overflows[1] - t.overflows[1]
                      )[0])
                        ? void 0
                        : a.placement;
                    if (!n)
                      switch (v) {
                        case "bestFit": {
                          let e =
                            null ==
                            (i = A.filter((e) => {
                              if (E) {
                                let t = B(e.placement);
                                return t === x || "y" === t;
                              }
                              return !0;
                            })
                              .map((e) => [
                                e.placement,
                                e.overflows
                                  .filter((e) => e > 0)
                                  .reduce((e, t) => e + t, 0),
                              ])
                              .sort((e, t) => e[1] - t[1])[0])
                              ? void 0
                              : i[0];
                          e && (n = e);
                          break;
                        }
                        case "initialPlacement":
                          n = s;
                      }
                    if (l !== n) return { reset: { placement: n } };
                  }
                  return {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eI = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "size",
                options: e,
                async fn(t) {
                  var n, r;
                  let o, a;
                  let { placement: i, rects: l, platform: u, elements: c } = t,
                    { apply: s = () => {}, ...d } = D(e, t),
                    f = await U(t, d),
                    p = M(i),
                    m = j(i),
                    h = "y" === B(i),
                    { width: v, height: g } = l.floating;
                  "top" === p || "bottom" === p
                    ? ((o = p),
                      (a =
                        m ===
                        ((await (null == u.isRTL
                          ? void 0
                          : u.isRTL(c.floating)))
                          ? "start"
                          : "end")
                          ? "left"
                          : "right"))
                    : ((a = p), (o = "end" === m ? "top" : "bottom"));
                  let w = g - f.top - f.bottom,
                    y = v - f.left - f.right,
                    b = E(g - f[o], w),
                    x = E(v - f[a], y),
                    P = !t.middlewareData.shift,
                    C = b,
                    R = x;
                  if (
                    (null != (n = t.middlewareData.shift) &&
                      n.enabled.x &&
                      (R = y),
                    null != (r = t.middlewareData.shift) &&
                      r.enabled.y &&
                      (C = w),
                    P && !m)
                  ) {
                    let e = S(f.left, 0),
                      t = S(f.right, 0),
                      n = S(f.top, 0),
                      r = S(f.bottom, 0);
                    h
                      ? (R =
                          v -
                          2 * (0 !== e || 0 !== t ? e + t : S(f.left, f.right)))
                      : (C =
                          g -
                          2 *
                            (0 !== n || 0 !== r ? n + r : S(f.top, f.bottom)));
                  }
                  await s({ ...t, availableWidth: R, availableHeight: C });
                  let T = await u.getDimensions(c.floating);
                  return v !== T.width || g !== T.height
                    ? { reset: { rects: !0 } }
                    : {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eH = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "hide",
                options: e,
                async fn(t) {
                  let { rects: n } = t,
                    { strategy: r = "referenceHidden", ...o } = D(e, t);
                  switch (r) {
                    case "referenceHidden": {
                      let e = V(
                        await U(t, { ...o, elementContext: "reference" }),
                        n.reference
                      );
                      return {
                        data: {
                          referenceHiddenOffsets: e,
                          referenceHidden: G(e),
                        },
                      };
                    }
                    case "escaped": {
                      let e = V(
                        await U(t, { ...o, altBoundary: !0 }),
                        n.floating
                      );
                      return { data: { escapedOffsets: e, escaped: G(e) } };
                    }
                    default:
                      return {};
                  }
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        ez = (e, t) => ({ ...ej(e), options: [e, t] });
      var eW = o.forwardRef((e, t) => {
        let { children: n, width: r = 10, height: o = 5, ...a } = e;
        return (0, d.jsx)(p.sG.svg, {
          ...a,
          ref: t,
          width: r,
          height: o,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: e.asChild
            ? n
            : (0, d.jsx)("polygon", { points: "0,0 30,0 15,10" }),
        });
      });
      eW.displayName = "Arrow";
      var eq = n(46611),
        eU = "Popper",
        [eV, eG] = (0, u.A)(eU),
        [eY, eX] = eV(eU),
        e$ = (e) => {
          let { __scopePopper: t, children: n } = e,
            [r, a] = o.useState(null);
          return (0, d.jsx)(eY, {
            scope: t,
            anchor: r,
            onAnchorChange: a,
            children: n,
          });
        };
      e$.displayName = eU;
      var eK = "PopperAnchor",
        eJ = o.forwardRef((e, t) => {
          let { __scopePopper: n, virtualRef: r, ...a } = e,
            i = eX(eK, n),
            l = o.useRef(null),
            u = (0, c.s)(t, l);
          return (
            o.useEffect(() => {
              i.onAnchorChange((null == r ? void 0 : r.current) || l.current);
            }),
            r ? null : (0, d.jsx)(p.sG.div, { ...a, ref: u })
          );
        });
      eJ.displayName = eK;
      var eZ = "PopperContent",
        [eQ, e0] = eV(eZ),
        e1 = o.forwardRef((e, t) => {
          var n, r, i, l, u, s, f, h;
          let {
              __scopePopper: v,
              side: g = "bottom",
              sideOffset: w = 0,
              align: y = "center",
              alignOffset: b = 0,
              arrowPadding: x = 0,
              avoidCollisions: P = !0,
              collisionBoundary: C = [],
              collisionPadding: R = 0,
              sticky: T = "partial",
              hideWhenDetached: A = !1,
              updatePositionStrategy: L = "optimized",
              onPlaced: O,
              ...D
            } = e,
            M = eX(eZ, v),
            [j, N] = o.useState(null),
            F = (0, c.s)(t, (e) => N(e)),
            [B, _] = o.useState(null),
            I = (function (e) {
              let [t, n] = o.useState(void 0);
              return (
                (0, eq.N)(() => {
                  if (e) {
                    n({ width: e.offsetWidth, height: e.offsetHeight });
                    let t = new ResizeObserver((t) => {
                      let r, o;
                      if (!Array.isArray(t) || !t.length) return;
                      let a = t[0];
                      if ("borderBoxSize" in a) {
                        let e = a.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        (r = t.inlineSize), (o = t.blockSize);
                      } else (r = e.offsetWidth), (o = e.offsetHeight);
                      n({ width: r, height: o });
                    });
                    return (
                      t.observe(e, { box: "border-box" }), () => t.unobserve(e)
                    );
                  }
                  n(void 0);
                }, [e]),
                t
              );
            })(B),
            H =
              null !== (f = null == I ? void 0 : I.width) && void 0 !== f
                ? f
                : 0,
            z =
              null !== (h = null == I ? void 0 : I.height) && void 0 !== h
                ? h
                : 0,
            W =
              "number" == typeof R
                ? R
                : { top: 0, right: 0, bottom: 0, left: 0, ...R },
            q = Array.isArray(C) ? C : [C],
            U = q.length > 0,
            V = { padding: W, boundary: q.filter(e6), altBoundary: U },
            {
              refs: G,
              floatingStyles: Y,
              placement: X,
              isPositioned: $,
              middlewareData: K,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: n = "absolute",
                  middleware: r = [],
                  platform: i,
                  elements: { reference: l, floating: u } = {},
                  transform: c = !0,
                  whileElementsMounted: s,
                  open: d,
                } = e,
                [f, p] = o.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [m, h] = o.useState(r);
              eL(m, r) || h(r);
              let [v, g] = o.useState(null),
                [w, y] = o.useState(null),
                b = o.useCallback((e) => {
                  e !== R.current && ((R.current = e), g(e));
                }, []),
                x = o.useCallback((e) => {
                  e !== E.current && ((E.current = e), y(e));
                }, []),
                P = l || v,
                C = u || w,
                R = o.useRef(null),
                E = o.useRef(null),
                S = o.useRef(f),
                T = null != s,
                k = eM(s),
                A = eM(i),
                L = eM(d),
                O = o.useCallback(() => {
                  if (!R.current || !E.current) return;
                  let e = { placement: t, strategy: n, middleware: m };
                  A.current && (e.platform = A.current),
                    ek(R.current, E.current, e).then((e) => {
                      let t = { ...e, isPositioned: !1 !== L.current };
                      D.current &&
                        !eL(S.current, t) &&
                        ((S.current = t),
                        a.flushSync(() => {
                          p(t);
                        }));
                    });
                }, [m, t, n, A, L]);
              eA(() => {
                !1 === d &&
                  S.current.isPositioned &&
                  ((S.current.isPositioned = !1),
                  p((e) => ({ ...e, isPositioned: !1 })));
              }, [d]);
              let D = o.useRef(!1);
              eA(
                () => (
                  (D.current = !0),
                  () => {
                    D.current = !1;
                  }
                ),
                []
              ),
                eA(() => {
                  if ((P && (R.current = P), C && (E.current = C), P && C)) {
                    if (k.current) return k.current(P, C, O);
                    O();
                  }
                }, [P, C, O, k, T]);
              let M = o.useMemo(
                  () => ({
                    reference: R,
                    floating: E,
                    setReference: b,
                    setFloating: x,
                  }),
                  [b, x]
                ),
                j = o.useMemo(() => ({ reference: P, floating: C }), [P, C]),
                N = o.useMemo(() => {
                  let e = { position: n, left: 0, top: 0 };
                  if (!j.floating) return e;
                  let t = eD(j.floating, f.x),
                    r = eD(j.floating, f.y);
                  return c
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...(eO(j.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, c, j.floating, f.x, f.y]);
              return o.useMemo(
                () => ({
                  ...f,
                  update: O,
                  refs: M,
                  elements: j,
                  floatingStyles: N,
                }),
                [f, O, M, j, N]
              );
            })({
              strategy: "fixed",
              placement: g + ("center" !== y ? "-" + y : ""),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return (function (e, t, n, r) {
                  let o;
                  void 0 === r && (r = {});
                  let {
                      ancestorScroll: a = !0,
                      ancestorResize: i = !0,
                      elementResize: l = "function" == typeof ResizeObserver,
                      layoutShift: u = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: c = !1,
                    } = r,
                    s = ep(e),
                    d = a || i ? [...(s ? es(s) : []), ...es(t)] : [];
                  d.forEach((e) => {
                    a && e.addEventListener("scroll", n, { passive: !0 }),
                      i && e.addEventListener("resize", n);
                  });
                  let f =
                      s && u
                        ? (function (e, t) {
                            let n,
                              r = null,
                              o = J(e);
                            function a() {
                              var e;
                              clearTimeout(n),
                                null == (e = r) || e.disconnect(),
                                (r = null);
                            }
                            return (
                              !(function i(l, u) {
                                void 0 === l && (l = !1),
                                  void 0 === u && (u = 1),
                                  a();
                                let c = e.getBoundingClientRect(),
                                  { left: s, top: d, width: f, height: p } = c;
                                if ((l || t(), !f || !p)) return;
                                let m = k(d),
                                  h = k(o.clientWidth - (s + f)),
                                  v = {
                                    rootMargin:
                                      -m +
                                      "px " +
                                      -h +
                                      "px " +
                                      -k(o.clientHeight - (d + p)) +
                                      "px " +
                                      -k(s) +
                                      "px",
                                    threshold: S(0, E(1, u)) || 1,
                                  },
                                  g = !0;
                                function w(t) {
                                  let r = t[0].intersectionRatio;
                                  if (r !== u) {
                                    if (!g) return i();
                                    r
                                      ? i(!1, r)
                                      : (n = setTimeout(() => {
                                          i(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  1 !== r ||
                                    eS(c, e.getBoundingClientRect()) ||
                                    i(),
                                    (g = !1);
                                }
                                try {
                                  r = new IntersectionObserver(w, {
                                    ...v,
                                    root: o.ownerDocument,
                                  });
                                } catch (e) {
                                  r = new IntersectionObserver(w, v);
                                }
                                r.observe(e);
                              })(!0),
                              a
                            );
                          })(s, n)
                        : null,
                    p = -1,
                    m = null;
                  l &&
                    ((m = new ResizeObserver((e) => {
                      let [r] = e;
                      r &&
                        r.target === s &&
                        m &&
                        (m.unobserve(t),
                        cancelAnimationFrame(p),
                        (p = requestAnimationFrame(() => {
                          var e;
                          null == (e = m) || e.observe(t);
                        }))),
                        n();
                    })),
                    s && !c && m.observe(s),
                    m.observe(t));
                  let h = c ? eg(e) : null;
                  return (
                    c &&
                      (function t() {
                        let r = eg(e);
                        h && !eS(h, r) && n(),
                          (h = r),
                          (o = requestAnimationFrame(t));
                      })(),
                    n(),
                    () => {
                      var e;
                      d.forEach((e) => {
                        a && e.removeEventListener("scroll", n),
                          i && e.removeEventListener("resize", n);
                      }),
                        null == f || f(),
                        null == (e = m) || e.disconnect(),
                        (m = null),
                        c && cancelAnimationFrame(o);
                    }
                  );
                })(...t, { animationFrame: "always" === L });
              },
              elements: { reference: M.anchor },
              middleware: [
                eN({ mainAxis: w + z, alignmentAxis: b }),
                P &&
                  eF({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === T ? eB() : void 0,
                    ...V,
                  }),
                P && e_({ ...V }),
                eI({
                  ...V,
                  apply: (e) => {
                    let {
                        elements: t,
                        rects: n,
                        availableWidth: r,
                        availableHeight: o,
                      } = e,
                      { width: a, height: i } = n.reference,
                      l = t.floating.style;
                    l.setProperty(
                      "--radix-popper-available-width",
                      "".concat(r, "px")
                    ),
                      l.setProperty(
                        "--radix-popper-available-height",
                        "".concat(o, "px")
                      ),
                      l.setProperty(
                        "--radix-popper-anchor-width",
                        "".concat(a, "px")
                      ),
                      l.setProperty(
                        "--radix-popper-anchor-height",
                        "".concat(i, "px")
                      );
                  },
                }),
                B && ez({ element: B, padding: x }),
                e4({ arrowWidth: H, arrowHeight: z }),
                A && eH({ strategy: "referenceHidden", ...V }),
              ],
            }),
            [Z, Q] = e7(X),
            ee = (0, m.c)(O);
          (0, eq.N)(() => {
            $ && (null == ee || ee());
          }, [$, ee]);
          let et = null === (n = K.arrow) || void 0 === n ? void 0 : n.x,
            en = null === (r = K.arrow) || void 0 === r ? void 0 : r.y,
            er =
              (null === (i = K.arrow) || void 0 === i
                ? void 0
                : i.centerOffset) !== 0,
            [eo, ea] = o.useState();
          return (
            (0, eq.N)(() => {
              j && ea(window.getComputedStyle(j).zIndex);
            }, [j]),
            (0, d.jsx)("div", {
              ref: G.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...Y,
                transform: $ ? Y.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: eo,
                "--radix-popper-transform-origin": [
                  null === (l = K.transformOrigin) || void 0 === l
                    ? void 0
                    : l.x,
                  null === (u = K.transformOrigin) || void 0 === u
                    ? void 0
                    : u.y,
                ].join(" "),
                ...((null === (s = K.hide) || void 0 === s
                  ? void 0
                  : s.referenceHidden) && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, d.jsx)(eQ, {
                scope: v,
                placedSide: Z,
                onArrowChange: _,
                arrowX: et,
                arrowY: en,
                shouldHideArrow: er,
                children: (0, d.jsx)(p.sG.div, {
                  "data-side": Z,
                  "data-align": Q,
                  ...D,
                  ref: F,
                  style: { ...D.style, animation: $ ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      e1.displayName = eZ;
      var e2 = "PopperArrow",
        e5 = { top: "bottom", right: "left", bottom: "top", left: "right" },
        e3 = o.forwardRef(function (e, t) {
          let { __scopePopper: n, ...r } = e,
            o = e0(e2, n),
            a = e5[o.placedSide];
          return (0,
          d.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [a]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, d.jsx)(eW, { ...r, ref: t, style: { ...r.style, display: "block" } }) });
        });
      function e6(e) {
        return null !== e;
      }
      e3.displayName = e2;
      var e4 = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, o, a, i;
          let { placement: l, rects: u, middlewareData: c } = t,
            s =
              (null === (n = c.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            d = s ? 0 : e.arrowWidth,
            f = s ? 0 : e.arrowHeight,
            [p, m] = e7(l),
            h = { start: "0%", center: "50%", end: "100%" }[m],
            v =
              (null !==
                (a = null === (r = c.arrow) || void 0 === r ? void 0 : r.x) &&
              void 0 !== a
                ? a
                : 0) +
              d / 2,
            g =
              (null !==
                (i = null === (o = c.arrow) || void 0 === o ? void 0 : o.y) &&
              void 0 !== i
                ? i
                : 0) +
              f / 2,
            w = "",
            y = "";
          return (
            "bottom" === p
              ? ((w = s ? h : "".concat(v, "px")), (y = "".concat(-f, "px")))
              : "top" === p
              ? ((w = s ? h : "".concat(v, "px")),
                (y = "".concat(u.floating.height + f, "px")))
              : "right" === p
              ? ((w = "".concat(-f, "px")), (y = s ? h : "".concat(g, "px")))
              : "left" === p &&
                ((w = "".concat(u.floating.width + f, "px")),
                (y = s ? h : "".concat(g, "px"))),
            { data: { x: w, y } }
          );
        },
      });
      function e7(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      var e9 = n(17323),
        e8 = n(1488),
        te = o.forwardRef((e, t) =>
          (0, d.jsx)(p.sG.span, {
            ...e,
            ref: t,
            style: {
              position: "absolute",
              border: 0,
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              wordWrap: "normal",
              ...e.style,
            },
          })
        );
      te.displayName = "VisuallyHidden";
      var tt = n(15587),
        tn = n(74073),
        tr = [" ", "Enter", "ArrowUp", "ArrowDown"],
        to = [" ", "Enter"],
        ta = "Select",
        [ti, tl, tu] = (function (e) {
          let t = e + "CollectionProvider",
            [n, r] = (0, u.A)(t),
            [a, i] = n(t, {
              collectionRef: { current: null },
              itemMap: new Map(),
            }),
            l = (e) => {
              let { scope: t, children: n } = e,
                r = o.useRef(null),
                i = o.useRef(new Map()).current;
              return (0, d.jsx)(a, {
                scope: t,
                itemMap: i,
                collectionRef: r,
                children: n,
              });
            };
          l.displayName = t;
          let f = e + "CollectionSlot",
            p = o.forwardRef((e, t) => {
              let { scope: n, children: r } = e,
                o = i(f, n),
                a = (0, c.s)(t, o.collectionRef);
              return (0, d.jsx)(s.DX, { ref: a, children: r });
            });
          p.displayName = f;
          let m = e + "CollectionItemSlot",
            h = "data-radix-collection-item",
            v = o.forwardRef((e, t) => {
              let { scope: n, children: r, ...a } = e,
                l = o.useRef(null),
                u = (0, c.s)(t, l),
                f = i(m, n);
              return (
                o.useEffect(
                  () => (
                    f.itemMap.set(l, { ref: l, ...a }),
                    () => void f.itemMap.delete(l)
                  )
                ),
                (0, d.jsx)(s.DX, { [h]: "", ref: u, children: r })
              );
            });
          return (
            (v.displayName = m),
            [
              { Provider: l, Slot: p, ItemSlot: v },
              function (t) {
                let n = i(e + "CollectionConsumer", t);
                return o.useCallback(() => {
                  let e = n.collectionRef.current;
                  if (!e) return [];
                  let t = Array.from(e.querySelectorAll("[".concat(h, "]")));
                  return Array.from(n.itemMap.values()).sort(
                    (e, n) =>
                      t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
                  );
                }, [n.collectionRef, n.itemMap]);
              },
              r,
            ]
          );
        })(ta),
        [tc, ts] = (0, u.A)(ta, [tu, eG]),
        td = eG(),
        [tf, tp] = tc(ta),
        [tm, th] = tc(ta),
        tv = (e) => {
          let {
              __scopeSelect: t,
              children: n,
              open: r,
              defaultOpen: a,
              onOpenChange: i,
              value: l,
              defaultValue: u,
              onValueChange: c,
              dir: s,
              name: p,
              autoComplete: m,
              disabled: h,
              required: v,
              form: g,
            } = e,
            w = td(t),
            [y, b] = o.useState(null),
            [x, P] = o.useState(null),
            [R, E] = o.useState(!1),
            S = (function (e) {
              let t = o.useContext(f);
              return e || t || "ltr";
            })(s),
            [T = !1, k] = (0, e8.i)({ prop: r, defaultProp: a, onChange: i }),
            [A, L] = (0, e8.i)({ prop: l, defaultProp: u, onChange: c }),
            O = o.useRef(null),
            D = !y || g || !!y.closest("form"),
            [M, j] = o.useState(new Set()),
            N = Array.from(M)
              .map((e) => e.props.value)
              .join(";");
          return (0, d.jsx)(e$, {
            ...w,
            children: (0, d.jsxs)(tf, {
              required: v,
              scope: t,
              trigger: y,
              onTriggerChange: b,
              valueNode: x,
              onValueNodeChange: P,
              valueNodeHasChildren: R,
              onValueNodeHasChildrenChange: E,
              contentId: (0, C.B)(),
              value: A,
              onValueChange: L,
              open: T,
              onOpenChange: k,
              dir: S,
              triggerPointerDownPosRef: O,
              disabled: h,
              children: [
                (0, d.jsx)(ti.Provider, {
                  scope: t,
                  children: (0, d.jsx)(tm, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: o.useCallback((e) => {
                      j((t) => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: o.useCallback((e) => {
                      j((t) => {
                        let n = new Set(t);
                        return n.delete(e), n;
                      });
                    }, []),
                    children: n,
                  }),
                }),
                D
                  ? (0, d.jsxs)(
                      t2,
                      {
                        "aria-hidden": !0,
                        required: v,
                        tabIndex: -1,
                        name: p,
                        autoComplete: m,
                        value: A,
                        onChange: (e) => L(e.target.value),
                        disabled: h,
                        form: g,
                        children: [
                          void 0 === A
                            ? (0, d.jsx)("option", { value: "" })
                            : null,
                          Array.from(M),
                        ],
                      },
                      N
                    )
                  : null,
              ],
            }),
          });
        };
      tv.displayName = ta;
      var tg = "SelectTrigger",
        tw = o.forwardRef((e, t) => {
          let { __scopeSelect: n, disabled: r = !1, ...a } = e,
            i = td(n),
            u = tp(tg, n),
            s = u.disabled || r,
            f = (0, c.s)(t, u.onTriggerChange),
            m = tl(n),
            h = o.useRef("touch"),
            [v, g, w] = t5((e) => {
              let t = m().filter((e) => !e.disabled),
                n = t.find((e) => e.value === u.value),
                r = t3(t, e, n);
              void 0 !== r && u.onValueChange(r.value);
            }),
            y = (e) => {
              s || (u.onOpenChange(!0), w()),
                e &&
                  (u.triggerPointerDownPosRef.current = {
                    x: Math.round(e.pageX),
                    y: Math.round(e.pageY),
                  });
            };
          return (0, d.jsx)(eJ, {
            asChild: !0,
            ...i,
            children: (0, d.jsx)(p.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": u.contentId,
              "aria-expanded": u.open,
              "aria-required": u.required,
              "aria-autocomplete": "none",
              dir: u.dir,
              "data-state": u.open ? "open" : "closed",
              disabled: s,
              "data-disabled": s ? "" : void 0,
              "data-placeholder": t1(u.value) ? "" : void 0,
              ...a,
              ref: f,
              onClick: (0, l.m)(a.onClick, (e) => {
                e.currentTarget.focus(), "mouse" !== h.current && y(e);
              }),
              onPointerDown: (0, l.m)(a.onPointerDown, (e) => {
                h.current = e.pointerType;
                let t = e.target;
                t.hasPointerCapture(e.pointerId) &&
                  t.releasePointerCapture(e.pointerId),
                  0 === e.button &&
                    !1 === e.ctrlKey &&
                    "mouse" === e.pointerType &&
                    (y(e), e.preventDefault());
              }),
              onKeyDown: (0, l.m)(a.onKeyDown, (e) => {
                let t = "" !== v.current;
                e.ctrlKey ||
                  e.altKey ||
                  e.metaKey ||
                  1 !== e.key.length ||
                  g(e.key),
                  (!t || " " !== e.key) &&
                    tr.includes(e.key) &&
                    (y(), e.preventDefault());
              }),
            }),
          });
        });
      tw.displayName = tg;
      var ty = "SelectValue",
        tb = o.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              className: r,
              style: o,
              children: a,
              placeholder: i = "",
              ...l
            } = e,
            u = tp(ty, n),
            { onValueNodeHasChildrenChange: s } = u,
            f = void 0 !== a,
            m = (0, c.s)(t, u.onValueNodeChange);
          return (
            (0, eq.N)(() => {
              s(f);
            }, [s, f]),
            (0, d.jsx)(p.sG.span, {
              ...l,
              ref: m,
              style: { pointerEvents: "none" },
              children: t1(u.value)
                ? (0, d.jsx)(d.Fragment, { children: i })
                : a,
            })
          );
        });
      tb.displayName = ty;
      var tx = o.forwardRef((e, t) => {
        let { __scopeSelect: n, children: r, ...o } = e;
        return (0, d.jsx)(p.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: r || "▼",
        });
      });
      tx.displayName = "SelectIcon";
      var tP = (e) => (0, d.jsx)(e9.Z, { asChild: !0, ...e });
      tP.displayName = "SelectPortal";
      var tC = "SelectContent",
        tR = o.forwardRef((e, t) => {
          let n = tp(tC, e.__scopeSelect),
            [r, i] = o.useState();
          return ((0, eq.N)(() => {
            i(new DocumentFragment());
          }, []),
          n.open)
            ? (0, d.jsx)(tT, { ...e, ref: t })
            : r
            ? a.createPortal(
                (0, d.jsx)(tE, {
                  scope: e.__scopeSelect,
                  children: (0, d.jsx)(ti.Slot, {
                    scope: e.__scopeSelect,
                    children: (0, d.jsx)("div", { children: e.children }),
                  }),
                }),
                r
              )
            : null;
        });
      tR.displayName = tC;
      var [tE, tS] = tc(tC),
        tT = o.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              position: r = "item-aligned",
              onCloseAutoFocus: a,
              onEscapeKeyDown: i,
              onPointerDownOutside: u,
              side: f,
              sideOffset: p,
              align: m,
              alignOffset: h,
              arrowPadding: v,
              collisionBoundary: g,
              collisionPadding: y,
              sticky: b,
              hideWhenDetached: C,
              avoidCollisions: R,
              ...E
            } = e,
            S = tp(tC, n),
            [T, k] = o.useState(null),
            [A, L] = o.useState(null),
            O = (0, c.s)(t, (e) => k(e)),
            [D, M] = o.useState(null),
            [j, N] = o.useState(null),
            F = tl(n),
            [B, _] = o.useState(!1),
            I = o.useRef(!1);
          o.useEffect(() => {
            if (T) return (0, tt.Eq)(T);
          }, [T]),
            (0, x.Oh)();
          let H = o.useCallback(
              (e) => {
                let [t, ...n] = F().map((e) => e.ref.current),
                  [r] = n.slice(-1),
                  o = document.activeElement;
                for (let n of e)
                  if (
                    n === o ||
                    (null == n || n.scrollIntoView({ block: "nearest" }),
                    n === t && A && (A.scrollTop = 0),
                    n === r && A && (A.scrollTop = A.scrollHeight),
                    null == n || n.focus(),
                    document.activeElement !== o)
                  )
                    return;
              },
              [F, A]
            ),
            z = o.useCallback(() => H([D, T]), [H, D, T]);
          o.useEffect(() => {
            B && z();
          }, [B, z]);
          let { onOpenChange: W, triggerPointerDownPosRef: q } = S;
          o.useEffect(() => {
            if (T) {
              let e = { x: 0, y: 0 },
                t = (t) => {
                  var n, r, o, a;
                  e = {
                    x: Math.abs(
                      Math.round(t.pageX) -
                        (null !==
                          (o =
                            null === (n = q.current) || void 0 === n
                              ? void 0
                              : n.x) && void 0 !== o
                          ? o
                          : 0)
                    ),
                    y: Math.abs(
                      Math.round(t.pageY) -
                        (null !==
                          (a =
                            null === (r = q.current) || void 0 === r
                              ? void 0
                              : r.y) && void 0 !== a
                          ? a
                          : 0)
                    ),
                  };
                },
                n = (n) => {
                  e.x <= 10 && e.y <= 10
                    ? n.preventDefault()
                    : T.contains(n.target) || W(!1),
                    document.removeEventListener("pointermove", t),
                    (q.current = null);
                };
              return (
                null !== q.current &&
                  (document.addEventListener("pointermove", t),
                  document.addEventListener("pointerup", n, {
                    capture: !0,
                    once: !0,
                  })),
                () => {
                  document.removeEventListener("pointermove", t),
                    document.removeEventListener("pointerup", n, {
                      capture: !0,
                    });
                }
              );
            }
          }, [T, W, q]),
            o.useEffect(() => {
              let e = () => W(!1);
              return (
                window.addEventListener("blur", e),
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("blur", e),
                    window.removeEventListener("resize", e);
                }
              );
            }, [W]);
          let [U, V] = t5((e) => {
              let t = F().filter((e) => !e.disabled),
                n = t.find((e) => e.ref.current === document.activeElement),
                r = t3(t, e, n);
              r && setTimeout(() => r.ref.current.focus());
            }),
            G = o.useCallback(
              (e, t, n) => {
                let r = !I.current && !n;
                ((void 0 !== S.value && S.value === t) || r) &&
                  (M(e), r && (I.current = !0));
              },
              [S.value]
            ),
            Y = o.useCallback(() => (null == T ? void 0 : T.focus()), [T]),
            X = o.useCallback(
              (e, t, n) => {
                let r = !I.current && !n;
                ((void 0 !== S.value && S.value === t) || r) && N(e);
              },
              [S.value]
            ),
            $ = "popper" === r ? tA : tk,
            K =
              $ === tA
                ? {
                    side: f,
                    sideOffset: p,
                    align: m,
                    alignOffset: h,
                    arrowPadding: v,
                    collisionBoundary: g,
                    collisionPadding: y,
                    sticky: b,
                    hideWhenDetached: C,
                    avoidCollisions: R,
                  }
                : {};
          return (0, d.jsx)(tE, {
            scope: n,
            content: T,
            viewport: A,
            onViewportChange: L,
            itemRefCallback: G,
            selectedItem: D,
            onItemLeave: Y,
            itemTextRefCallback: X,
            focusSelectedItem: z,
            selectedItemText: j,
            position: r,
            isPositioned: B,
            searchRef: U,
            children: (0, d.jsx)(tn.A, {
              as: s.DX,
              allowPinchZoom: !0,
              children: (0, d.jsx)(P.n, {
                asChild: !0,
                trapped: S.open,
                onMountAutoFocus: (e) => {
                  e.preventDefault();
                },
                onUnmountAutoFocus: (0, l.m)(a, (e) => {
                  var t;
                  null === (t = S.trigger) ||
                    void 0 === t ||
                    t.focus({ preventScroll: !0 }),
                    e.preventDefault();
                }),
                children: (0, d.jsx)(w, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: i,
                  onPointerDownOutside: u,
                  onFocusOutside: (e) => e.preventDefault(),
                  onDismiss: () => S.onOpenChange(!1),
                  children: (0, d.jsx)($, {
                    role: "listbox",
                    id: S.contentId,
                    "data-state": S.open ? "open" : "closed",
                    dir: S.dir,
                    onContextMenu: (e) => e.preventDefault(),
                    ...E,
                    ...K,
                    onPlaced: () => _(!0),
                    ref: O,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...E.style,
                    },
                    onKeyDown: (0, l.m)(E.onKeyDown, (e) => {
                      let t = e.ctrlKey || e.altKey || e.metaKey;
                      if (
                        ("Tab" === e.key && e.preventDefault(),
                        t || 1 !== e.key.length || V(e.key),
                        ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))
                      ) {
                        let t = F()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        if (
                          (["ArrowUp", "End"].includes(e.key) &&
                            (t = t.slice().reverse()),
                          ["ArrowUp", "ArrowDown"].includes(e.key))
                        ) {
                          let n = e.target,
                            r = t.indexOf(n);
                          t = t.slice(r + 1);
                        }
                        setTimeout(() => H(t)), e.preventDefault();
                      }
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      tT.displayName = "SelectContentImpl";
      var tk = o.forwardRef((e, t) => {
        let { __scopeSelect: n, onPlaced: r, ...a } = e,
          l = tp(tC, n),
          u = tS(tC, n),
          [s, f] = o.useState(null),
          [m, h] = o.useState(null),
          v = (0, c.s)(t, (e) => h(e)),
          g = tl(n),
          w = o.useRef(!1),
          y = o.useRef(!0),
          {
            viewport: b,
            selectedItem: x,
            selectedItemText: P,
            focusSelectedItem: C,
          } = u,
          R = o.useCallback(() => {
            if (l.trigger && l.valueNode && s && m && b && x && P) {
              let e = l.trigger.getBoundingClientRect(),
                t = m.getBoundingClientRect(),
                n = l.valueNode.getBoundingClientRect(),
                o = P.getBoundingClientRect();
              if ("rtl" !== l.dir) {
                let r = o.left - t.left,
                  a = n.left - r,
                  l = e.left - a,
                  u = e.width + l,
                  c = Math.max(u, t.width),
                  d = i(a, [10, Math.max(10, window.innerWidth - 10 - c)]);
                (s.style.minWidth = u + "px"), (s.style.left = d + "px");
              } else {
                let r = t.right - o.right,
                  a = window.innerWidth - n.right - r,
                  l = window.innerWidth - e.right - a,
                  u = e.width + l,
                  c = Math.max(u, t.width),
                  d = i(a, [10, Math.max(10, window.innerWidth - 10 - c)]);
                (s.style.minWidth = u + "px"), (s.style.right = d + "px");
              }
              let a = g(),
                u = window.innerHeight - 20,
                c = b.scrollHeight,
                d = window.getComputedStyle(m),
                f = parseInt(d.borderTopWidth, 10),
                p = parseInt(d.paddingTop, 10),
                h = parseInt(d.borderBottomWidth, 10),
                v = f + p + c + parseInt(d.paddingBottom, 10) + h,
                y = Math.min(5 * x.offsetHeight, v),
                C = window.getComputedStyle(b),
                R = parseInt(C.paddingTop, 10),
                E = parseInt(C.paddingBottom, 10),
                S = e.top + e.height / 2 - 10,
                T = x.offsetHeight / 2,
                k = f + p + (x.offsetTop + T);
              if (k <= S) {
                let e = a.length > 0 && x === a[a.length - 1].ref.current;
                s.style.bottom = "0px";
                let t = Math.max(
                  u - S,
                  T +
                    (e ? E : 0) +
                    (m.clientHeight - b.offsetTop - b.offsetHeight) +
                    h
                );
                s.style.height = k + t + "px";
              } else {
                let e = a.length > 0 && x === a[0].ref.current;
                s.style.top = "0px";
                let t = Math.max(S, f + b.offsetTop + (e ? R : 0) + T);
                (s.style.height = t + (v - k) + "px"),
                  (b.scrollTop = k - S + b.offsetTop);
              }
              (s.style.margin = "".concat(10, "px 0")),
                (s.style.minHeight = y + "px"),
                (s.style.maxHeight = u + "px"),
                null == r || r(),
                requestAnimationFrame(() => (w.current = !0));
            }
          }, [g, l.trigger, l.valueNode, s, m, b, x, P, l.dir, r]);
        (0, eq.N)(() => R(), [R]);
        let [E, S] = o.useState();
        (0, eq.N)(() => {
          m && S(window.getComputedStyle(m).zIndex);
        }, [m]);
        let T = o.useCallback(
          (e) => {
            e && !0 === y.current && (R(), null == C || C(), (y.current = !1));
          },
          [R, C]
        );
        return (0, d.jsx)(tL, {
          scope: n,
          contentWrapper: s,
          shouldExpandOnScrollRef: w,
          onScrollButtonChange: T,
          children: (0, d.jsx)("div", {
            ref: f,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: E,
            },
            children: (0, d.jsx)(p.sG.div, {
              ...a,
              ref: v,
              style: { boxSizing: "border-box", maxHeight: "100%", ...a.style },
            }),
          }),
        });
      });
      tk.displayName = "SelectItemAlignedPosition";
      var tA = o.forwardRef((e, t) => {
        let {
            __scopeSelect: n,
            align: r = "start",
            collisionPadding: o = 10,
            ...a
          } = e,
          i = td(n);
        return (0, d.jsx)(e1, {
          ...i,
          ...a,
          ref: t,
          align: r,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...a.style,
            "--radix-select-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-select-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        });
      });
      tA.displayName = "SelectPopperPosition";
      var [tL, tO] = tc(tC, {}),
        tD = "SelectViewport",
        tM = o.forwardRef((e, t) => {
          let { __scopeSelect: n, nonce: r, ...a } = e,
            i = tS(tD, n),
            u = tO(tD, n),
            s = (0, c.s)(t, i.onViewportChange),
            f = o.useRef(0);
          return (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
                },
                nonce: r,
              }),
              (0, d.jsx)(ti.Slot, {
                scope: n,
                children: (0, d.jsx)(p.sG.div, {
                  "data-radix-select-viewport": "",
                  role: "presentation",
                  ...a,
                  ref: s,
                  style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...a.style,
                  },
                  onScroll: (0, l.m)(a.onScroll, (e) => {
                    let t = e.currentTarget,
                      { contentWrapper: n, shouldExpandOnScrollRef: r } = u;
                    if ((null == r ? void 0 : r.current) && n) {
                      let e = Math.abs(f.current - t.scrollTop);
                      if (e > 0) {
                        let r = window.innerHeight - 20,
                          o = Math.max(
                            parseFloat(n.style.minHeight),
                            parseFloat(n.style.height)
                          );
                        if (o < r) {
                          let a = o + e,
                            i = Math.min(r, a),
                            l = a - i;
                          (n.style.height = i + "px"),
                            "0px" === n.style.bottom &&
                              ((t.scrollTop = l > 0 ? l : 0),
                              (n.style.justifyContent = "flex-end"));
                        }
                      }
                    }
                    f.current = t.scrollTop;
                  }),
                }),
              }),
            ],
          });
        });
      tM.displayName = tD;
      var tj = "SelectGroup",
        [tN, tF] = tc(tj),
        tB = o.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e,
            o = (0, C.B)();
          return (0, d.jsx)(tN, {
            scope: n,
            id: o,
            children: (0, d.jsx)(p.sG.div, {
              role: "group",
              "aria-labelledby": o,
              ...r,
              ref: t,
            }),
          });
        });
      tB.displayName = tj;
      var t_ = "SelectLabel",
        tI = o.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e,
            o = tF(t_, n);
          return (0, d.jsx)(p.sG.div, { id: o.id, ...r, ref: t });
        });
      tI.displayName = t_;
      var tH = "SelectItem",
        [tz, tW] = tc(tH),
        tq = o.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              value: r,
              disabled: a = !1,
              textValue: i,
              ...u
            } = e,
            s = tp(tH, n),
            f = tS(tH, n),
            m = s.value === r,
            [h, v] = o.useState(null != i ? i : ""),
            [g, w] = o.useState(!1),
            y = (0, c.s)(t, (e) => {
              var t;
              return null === (t = f.itemRefCallback) || void 0 === t
                ? void 0
                : t.call(f, e, r, a);
            }),
            b = (0, C.B)(),
            x = o.useRef("touch"),
            P = () => {
              a || (s.onValueChange(r), s.onOpenChange(!1));
            };
          if ("" === r)
            throw Error(
              "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
            );
          return (0, d.jsx)(tz, {
            scope: n,
            value: r,
            disabled: a,
            textId: b,
            isSelected: m,
            onItemTextChange: o.useCallback((e) => {
              v((t) => {
                var n;
                return (
                  t ||
                  (null !== (n = null == e ? void 0 : e.textContent) &&
                  void 0 !== n
                    ? n
                    : ""
                  ).trim()
                );
              });
            }, []),
            children: (0, d.jsx)(ti.ItemSlot, {
              scope: n,
              value: r,
              disabled: a,
              textValue: h,
              children: (0, d.jsx)(p.sG.div, {
                role: "option",
                "aria-labelledby": b,
                "data-highlighted": g ? "" : void 0,
                "aria-selected": m && g,
                "data-state": m ? "checked" : "unchecked",
                "aria-disabled": a || void 0,
                "data-disabled": a ? "" : void 0,
                tabIndex: a ? void 0 : -1,
                ...u,
                ref: y,
                onFocus: (0, l.m)(u.onFocus, () => w(!0)),
                onBlur: (0, l.m)(u.onBlur, () => w(!1)),
                onClick: (0, l.m)(u.onClick, () => {
                  "mouse" !== x.current && P();
                }),
                onPointerUp: (0, l.m)(u.onPointerUp, () => {
                  "mouse" === x.current && P();
                }),
                onPointerDown: (0, l.m)(u.onPointerDown, (e) => {
                  x.current = e.pointerType;
                }),
                onPointerMove: (0, l.m)(u.onPointerMove, (e) => {
                  if (((x.current = e.pointerType), a)) {
                    var t;
                    null === (t = f.onItemLeave) || void 0 === t || t.call(f);
                  } else
                    "mouse" === x.current &&
                      e.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: (0, l.m)(u.onPointerLeave, (e) => {
                  if (e.currentTarget === document.activeElement) {
                    var t;
                    null === (t = f.onItemLeave) || void 0 === t || t.call(f);
                  }
                }),
                onKeyDown: (0, l.m)(u.onKeyDown, (e) => {
                  var t;
                  ((null === (t = f.searchRef) || void 0 === t
                    ? void 0
                    : t.current) !== "" &&
                    " " === e.key) ||
                    (to.includes(e.key) && P(),
                    " " === e.key && e.preventDefault());
                }),
              }),
            }),
          });
        });
      tq.displayName = tH;
      var tU = "SelectItemText",
        tV = o.forwardRef((e, t) => {
          let { __scopeSelect: n, className: r, style: i, ...l } = e,
            u = tp(tU, n),
            s = tS(tU, n),
            f = tW(tU, n),
            m = th(tU, n),
            [h, v] = o.useState(null),
            g = (0, c.s)(
              t,
              (e) => v(e),
              f.onItemTextChange,
              (e) => {
                var t;
                return null === (t = s.itemTextRefCallback) || void 0 === t
                  ? void 0
                  : t.call(s, e, f.value, f.disabled);
              }
            ),
            w = null == h ? void 0 : h.textContent,
            y = o.useMemo(
              () =>
                (0, d.jsx)(
                  "option",
                  { value: f.value, disabled: f.disabled, children: w },
                  f.value
                ),
              [f.disabled, f.value, w]
            ),
            { onNativeOptionAdd: b, onNativeOptionRemove: x } = m;
          return (
            (0, eq.N)(() => (b(y), () => x(y)), [b, x, y]),
            (0, d.jsxs)(d.Fragment, {
              children: [
                (0, d.jsx)(p.sG.span, { id: f.textId, ...l, ref: g }),
                f.isSelected && u.valueNode && !u.valueNodeHasChildren
                  ? a.createPortal(l.children, u.valueNode)
                  : null,
              ],
            })
          );
        });
      tV.displayName = tU;
      var tG = "SelectItemIndicator",
        tY = o.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e;
          return tW(tG, n).isSelected
            ? (0, d.jsx)(p.sG.span, { "aria-hidden": !0, ...r, ref: t })
            : null;
        });
      tY.displayName = tG;
      var tX = "SelectScrollUpButton",
        t$ = o.forwardRef((e, t) => {
          let n = tS(tX, e.__scopeSelect),
            r = tO(tX, e.__scopeSelect),
            [a, i] = o.useState(!1),
            l = (0, c.s)(t, r.onScrollButtonChange);
          return (
            (0, eq.N)(() => {
              if (n.viewport && n.isPositioned) {
                let e = function () {
                    i(t.scrollTop > 0);
                  },
                  t = n.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            a
              ? (0, d.jsx)(tZ, {
                  ...e,
                  ref: l,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = n;
                    e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
                  },
                })
              : null
          );
        });
      t$.displayName = tX;
      var tK = "SelectScrollDownButton",
        tJ = o.forwardRef((e, t) => {
          let n = tS(tK, e.__scopeSelect),
            r = tO(tK, e.__scopeSelect),
            [a, i] = o.useState(!1),
            l = (0, c.s)(t, r.onScrollButtonChange);
          return (
            (0, eq.N)(() => {
              if (n.viewport && n.isPositioned) {
                let e = function () {
                    let e = t.scrollHeight - t.clientHeight;
                    i(Math.ceil(t.scrollTop) < e);
                  },
                  t = n.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            a
              ? (0, d.jsx)(tZ, {
                  ...e,
                  ref: l,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = n;
                    e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
                  },
                })
              : null
          );
        });
      tJ.displayName = tK;
      var tZ = o.forwardRef((e, t) => {
          let { __scopeSelect: n, onAutoScroll: r, ...a } = e,
            i = tS("SelectScrollButton", n),
            u = o.useRef(null),
            c = tl(n),
            s = o.useCallback(() => {
              null !== u.current &&
                (window.clearInterval(u.current), (u.current = null));
            }, []);
          return (
            o.useEffect(() => () => s(), [s]),
            (0, eq.N)(() => {
              var e;
              let t = c().find((e) => e.ref.current === document.activeElement);
              null == t ||
                null === (e = t.ref.current) ||
                void 0 === e ||
                e.scrollIntoView({ block: "nearest" });
            }, [c]),
            (0, d.jsx)(p.sG.div, {
              "aria-hidden": !0,
              ...a,
              ref: t,
              style: { flexShrink: 0, ...a.style },
              onPointerDown: (0, l.m)(a.onPointerDown, () => {
                null === u.current && (u.current = window.setInterval(r, 50));
              }),
              onPointerMove: (0, l.m)(a.onPointerMove, () => {
                var e;
                null === (e = i.onItemLeave) || void 0 === e || e.call(i),
                  null === u.current && (u.current = window.setInterval(r, 50));
              }),
              onPointerLeave: (0, l.m)(a.onPointerLeave, () => {
                s();
              }),
            })
          );
        }),
        tQ = o.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e;
          return (0, d.jsx)(p.sG.div, { "aria-hidden": !0, ...r, ref: t });
        });
      tQ.displayName = "SelectSeparator";
      var t0 = "SelectArrow";
      function t1(e) {
        return "" === e || void 0 === e;
      }
      o.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
          o = td(n),
          a = tp(t0, n),
          i = tS(t0, n);
        return a.open && "popper" === i.position
          ? (0, d.jsx)(e3, { ...o, ...r, ref: t })
          : null;
      }).displayName = t0;
      var t2 = o.forwardRef((e, t) => {
        let { value: n, ...r } = e,
          a = o.useRef(null),
          i = (0, c.s)(t, a),
          l = (function (e) {
            let t = o.useRef({ value: e, previous: e });
            return o.useMemo(
              () => (
                t.current.value !== e &&
                  ((t.current.previous = t.current.value),
                  (t.current.value = e)),
                t.current.previous
              ),
              [e]
            );
          })(n);
        return (
          o.useEffect(() => {
            let e = a.current,
              t = Object.getOwnPropertyDescriptor(
                window.HTMLSelectElement.prototype,
                "value"
              ).set;
            if (l !== n && t) {
              let r = new Event("change", { bubbles: !0 });
              t.call(e, n), e.dispatchEvent(r);
            }
          }, [l, n]),
          (0, d.jsx)(te, {
            asChild: !0,
            children: (0, d.jsx)("select", { ...r, ref: i, defaultValue: n }),
          })
        );
      });
      function t5(e) {
        let t = (0, m.c)(e),
          n = o.useRef(""),
          r = o.useRef(0),
          a = o.useCallback(
            (e) => {
              let o = n.current + e;
              t(o),
                (function e(t) {
                  (n.current = t),
                    window.clearTimeout(r.current),
                    "" !== t &&
                      (r.current = window.setTimeout(() => e(""), 1e3));
                })(o);
            },
            [t]
          ),
          i = o.useCallback(() => {
            (n.current = ""), window.clearTimeout(r.current);
          }, []);
        return (
          o.useEffect(() => () => window.clearTimeout(r.current), []), [n, a, i]
        );
      }
      function t3(e, t, n) {
        var r;
        let o =
            t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
          a =
            ((r = Math.max(n ? e.indexOf(n) : -1, 0)),
            e.map((t, n) => e[(r + n) % e.length]));
        1 === o.length && (a = a.filter((e) => e !== n));
        let i = a.find((e) =>
          e.textValue.toLowerCase().startsWith(o.toLowerCase())
        );
        return i !== n ? i : void 0;
      }
      t2.displayName = "BubbleSelect";
      var t6 = tv,
        t4 = tw,
        t7 = tb,
        t9 = tx,
        t8 = tP,
        ne = tR,
        nt = tM,
        nn = tB,
        nr = tI,
        no = tq,
        na = tV,
        ni = tY,
        nl = t$,
        nu = tJ,
        nc = tQ;
    },
    22779: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => i });
      var r = n(36063),
        o = {
          blue: { accentColor: "#3898FF", accentColorForeground: "#FFF" },
          green: { accentColor: "#4BD166", accentColorForeground: "#000" },
          orange: { accentColor: "#FF983D", accentColorForeground: "#000" },
          pink: { accentColor: "#FF7AB8", accentColorForeground: "#000" },
          purple: { accentColor: "#7A70FF", accentColorForeground: "#FFF" },
          red: { accentColor: "#FF6257", accentColorForeground: "#FFF" },
        },
        a = o.blue,
        i = function () {
          let {
            accentColor: e = a.accentColor,
            accentColorForeground: t = a.accentColorForeground,
            ...n
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          return {
            ...(0, r.$)(n),
            colors: {
              accentColor: e,
              accentColorForeground: t,
              actionButtonBorder: "rgba(255, 255, 255, 0.04)",
              actionButtonBorderMobile: "rgba(255, 255, 255, 0.1)",
              actionButtonSecondaryBackground: "rgba(255, 255, 255, 0.08)",
              closeButton: "rgba(255, 255, 255, 0.7)",
              closeButtonBackground: "rgba(255, 255, 255, 0.08)",
              connectButtonBackground: "#000",
              connectButtonBackgroundError: "#FF494A",
              connectButtonInnerBackground:
                "linear-gradient(0deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.12))",
              connectButtonText: "#FFF",
              connectButtonTextError: "#FFF",
              connectionIndicator: "#30E000",
              downloadBottomCardBackground:
                "linear-gradient(126deg, rgba(0, 0, 0, 0) 9.49%, rgba(120, 120, 120, 0.1) 71.04%), #050505",
              downloadTopCardBackground:
                "linear-gradient(126deg, rgba(120, 120, 120, 0.1) 9.49%, rgba(0, 0, 0, 0) 71.04%), #050505",
              error: "#FF494A",
              generalBorder: "rgba(255, 255, 255, 0.08)",
              generalBorderDim: "rgba(255, 255, 255, 0.04)",
              menuItemBackground: "rgba(255, 255, 255, 0.08)",
              modalBackdrop: "rgba(0, 0, 0, 0.7)",
              modalBackground: "#000",
              modalBorder: "rgba(255, 255, 255, 0.08)",
              modalText: "#FFF",
              modalTextDim: "rgba(255, 255, 255, 0.2)",
              modalTextSecondary: "rgba(255, 255, 255, 0.6)",
              profileAction: "rgba(255, 255, 255, 0.1)",
              profileActionHover: "rgba(255, 255, 255, 0.2)",
              profileForeground: "rgba(255, 255, 255, 0.06)",
              selectedOptionBorder: "rgba(224, 232, 255, 0.1)",
              standby: "#FFD641",
            },
            shadows: {
              connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
              profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
              selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
              selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.24)",
              walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)",
            },
          };
        };
      i.accentColors = o;
    },
    67113: (e, t, n) => {
      "use strict";
      n.d(t, { D: () => l });
      var r = n(12115),
        o = "undefined" == typeof window,
        a = r.createContext(void 0),
        i = { setTheme: (e) => {}, themes: [] },
        l = () => {
          var e;
          return null != (e = r.useContext(a)) ? e : i;
        };
    },
    69847: (e, t, n) => {
      "use strict";
      let r;
      n.d(t, { _s: () => B });
      var o = n(42833),
        a = n(12115);
      let i = a.createContext({
          drawerRef: { current: null },
          overlayRef: { current: null },
          onPress: () => {},
          onRelease: () => {},
          onDrag: () => {},
          onNestedDrag: () => {},
          onNestedOpenChange: () => {},
          onNestedRelease: () => {},
          openProp: void 0,
          dismissible: !1,
          isOpen: !1,
          isDragging: !1,
          keyboardIsOpen: { current: !1 },
          snapPointsOffset: null,
          snapPoints: null,
          handleOnly: !1,
          modal: !1,
          shouldFade: !1,
          activeSnapPoint: null,
          onOpenChange: () => {},
          setActiveSnapPoint: () => {},
          closeDrawer: () => {},
          direction: "bottom",
          shouldAnimate: { current: !0 },
          shouldScaleBackground: !1,
          setBackgroundColorOnScale: !0,
          noBodyStyles: !1,
          container: null,
          autoFocus: !1,
        }),
        l = () => {
          let e = a.useContext(i);
          if (!e)
            throw Error("useDrawerContext must be used within a Drawer.Root");
          return e;
        };
      function u() {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      }
      function c() {
        return (
          s(/^iPhone/) ||
          s(/^iPad/) ||
          (s(/^Mac/) && navigator.maxTouchPoints > 1)
        );
      }
      function s(e) {
        return "undefined" != typeof window && null != window.navigator
          ? e.test(window.navigator.platform)
          : void 0;
      }
      !(function (e) {
        if (!e || "undefined" == typeof document) return;
        let t = document.head || document.getElementsByTagName("head")[0],
          n = document.createElement("style");
        (n.type = "text/css"),
          t.appendChild(n),
          n.styleSheet
            ? (n.styleSheet.cssText = e)
            : n.appendChild(document.createTextNode(e));
      })(
        "[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(\n[data-state=closed]\n){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}"
      );
      let d = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect;
      function f() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function () {
          for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          for (let e of t) "function" == typeof e && e(...n);
        };
      }
      let p = "undefined" != typeof document && window.visualViewport;
      function m(e) {
        let t = window.getComputedStyle(e);
        return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
      }
      function h(e) {
        for (m(e) && (e = e.parentElement); e && !m(e); ) e = e.parentElement;
        return e || document.scrollingElement || document.documentElement;
      }
      let v = new Set([
          "checkbox",
          "radio",
          "range",
          "color",
          "file",
          "image",
          "button",
          "submit",
          "reset",
        ]),
        g = 0;
      function w(e, t, n, r) {
        return (
          e.addEventListener(t, n, r),
          () => {
            e.removeEventListener(t, n, r);
          }
        );
      }
      function y(e) {
        let t = document.scrollingElement || document.documentElement;
        for (; e && e !== t; ) {
          let t = h(e);
          if (
            t !== document.documentElement &&
            t !== document.body &&
            t !== e
          ) {
            let n = t.getBoundingClientRect().top,
              r = e.getBoundingClientRect().top;
            e.getBoundingClientRect().bottom >
              t.getBoundingClientRect().bottom + 24 && (t.scrollTop += r - n);
          }
          e = t.parentElement;
        }
      }
      function b(e) {
        return (
          (e instanceof HTMLInputElement && !v.has(e.type)) ||
          e instanceof HTMLTextAreaElement ||
          (e instanceof HTMLElement && e.isContentEditable)
        );
      }
      function x() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return a.useCallback(
          (function () {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return (e) =>
              t.forEach((t) => {
                "function" == typeof t ? t(e) : null != t && (t.current = e);
              });
          })(...t),
          t
        );
      }
      let P = new WeakMap();
      function C(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!e || !(e instanceof HTMLElement)) return;
        let r = {};
        Object.entries(t).forEach((t) => {
          let [n, o] = t;
          if (n.startsWith("--")) {
            e.style.setProperty(n, o);
            return;
          }
          (r[n] = e.style[n]), (e.style[n] = o);
        }),
          n || P.set(e, r);
      }
      let R = (e) => {
        switch (e) {
          case "top":
          case "bottom":
            return !0;
          case "left":
          case "right":
            return !1;
          default:
            return e;
        }
      };
      function E(e, t) {
        if (!e) return null;
        let n = window.getComputedStyle(e),
          r = n.transform || n.webkitTransform || n.mozTransform,
          o = r.match(/^matrix3d\((.+)\)$/);
        return o
          ? parseFloat(o[1].split(", ")[R(t) ? 13 : 12])
          : (o = r.match(/^matrix\((.+)\)$/))
          ? parseFloat(o[1].split(", ")[R(t) ? 5 : 4])
          : null;
      }
      function S(e, t) {
        if (!e) return () => {};
        let n = e.style.cssText;
        return (
          Object.assign(e.style, t),
          () => {
            e.style.cssText = n;
          }
        );
      }
      let T = { DURATION: 0.5, EASE: [0.32, 0.72, 0, 1] },
        k = "vaul-dragging";
      function A(e) {
        let t = a.useRef(e);
        return (
          a.useEffect(() => {
            t.current = e;
          }),
          a.useMemo(
            () =>
              function () {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                  n[r] = arguments[r];
                return null == t.current ? void 0 : t.current.call(t, ...n);
              },
            []
          )
        );
      }
      function L(e) {
        let { prop: t, defaultProp: n, onChange: r = () => {} } = e,
          [o, i] = (function (e) {
            let { defaultProp: t, onChange: n } = e,
              r = a.useState(t),
              [o] = r,
              i = a.useRef(o),
              l = A(n);
            return (
              a.useEffect(() => {
                i.current !== o && (l(o), (i.current = o));
              }, [o, i, l]),
              r
            );
          })({ defaultProp: n, onChange: r }),
          l = void 0 !== t,
          u = l ? t : o,
          c = A(r);
        return [
          u,
          a.useCallback(
            (e) => {
              if (l) {
                let n = "function" == typeof e ? e(t) : e;
                n !== t && c(n);
              } else i(e);
            },
            [l, t, i, c]
          ),
        ];
      }
      let O = () => () => {},
        D = null;
      function M(e) {
        var t, n;
        let {
            open: l,
            onOpenChange: s,
            children: m,
            onDrag: v,
            onRelease: x,
            snapPoints: S,
            shouldScaleBackground: A = !1,
            setBackgroundColorOnScale: O = !0,
            closeThreshold: M = 0.25,
            scrollLockTimeout: j = 100,
            dismissible: N = !0,
            handleOnly: F = !1,
            fadeFromIndex: B = S && S.length - 1,
            activeSnapPoint: _,
            setActiveSnapPoint: I,
            fixed: H,
            modal: z = !0,
            onClose: W,
            nested: q,
            noBodyStyles: U = !1,
            direction: V = "bottom",
            defaultOpen: G = !1,
            disablePreventScroll: Y = !0,
            snapToSequentialPoint: X = !1,
            preventScrollRestoration: $ = !1,
            repositionInputs: K = !0,
            onAnimationEnd: J,
            container: Z,
            autoFocus: Q = !1,
          } = e,
          [ee = !1, et] = L({
            defaultProp: G,
            prop: l,
            onChange: (e) => {
              null == s || s(e),
                e || q || eD(),
                setTimeout(() => {
                  null == J || J(e);
                }, 1e3 * T.DURATION),
                e &&
                  !z &&
                  "undefined" != typeof window &&
                  window.requestAnimationFrame(() => {
                    document.body.style.pointerEvents = "auto";
                  }),
                e || (document.body.style.pointerEvents = "auto");
            },
          }),
          [en, er] = a.useState(!1),
          [eo, ea] = a.useState(!1),
          [ei, el] = a.useState(!1),
          eu = a.useRef(null),
          ec = a.useRef(null),
          es = a.useRef(null),
          ed = a.useRef(null),
          ef = a.useRef(null),
          ep = a.useRef(!1),
          em = a.useRef(null),
          eh = a.useRef(0),
          ev = a.useRef(!1),
          eg = a.useRef(!G),
          ew = a.useRef(0),
          ey = a.useRef(null),
          eb = a.useRef(
            (null == (t = ey.current)
              ? void 0
              : t.getBoundingClientRect().height) || 0
          ),
          ex = a.useRef(
            (null == (n = ey.current)
              ? void 0
              : n.getBoundingClientRect().width) || 0
          ),
          eP = a.useRef(0),
          eC = a.useCallback((e) => {
            S && e === ek.length - 1 && (ec.current = new Date());
          }, []),
          {
            activeSnapPoint: eR,
            activeSnapPointIndex: eE,
            setActiveSnapPoint: eS,
            onRelease: eT,
            snapPointsOffset: ek,
            onDrag: eA,
            shouldFade: eL,
            getPercentageDragged: eO,
          } = (function (e) {
            let {
                activeSnapPointProp: t,
                setActiveSnapPointProp: n,
                snapPoints: r,
                drawerRef: o,
                overlayRef: i,
                fadeFromIndex: l,
                onSnapPointChange: u,
                direction: c = "bottom",
                container: s,
                snapToSequentialPoint: d,
              } = e,
              [f, p] = L({
                prop: t,
                defaultProp: null == r ? void 0 : r[0],
                onChange: n,
              }),
              [m, h] = a.useState(
                "undefined" != typeof window
                  ? {
                      innerWidth: window.innerWidth,
                      innerHeight: window.innerHeight,
                    }
                  : void 0
              );
            a.useEffect(() => {
              function e() {
                h({
                  innerWidth: window.innerWidth,
                  innerHeight: window.innerHeight,
                });
              }
              return (
                window.addEventListener("resize", e),
                () => window.removeEventListener("resize", e)
              );
            }, []);
            let v = a.useMemo(
                () => f === (null == r ? void 0 : r[r.length - 1]) || null,
                [r, f]
              ),
              g = a.useMemo(() => {
                var e;
                return null !=
                  (e = null == r ? void 0 : r.findIndex((e) => e === f))
                  ? e
                  : null;
              }, [r, f]),
              w =
                (r &&
                  r.length > 0 &&
                  (l || 0 === l) &&
                  !Number.isNaN(l) &&
                  r[l] === f) ||
                !r,
              y = a.useMemo(() => {
                var e;
                let t = s
                  ? {
                      width: s.getBoundingClientRect().width,
                      height: s.getBoundingClientRect().height,
                    }
                  : "undefined" != typeof window
                  ? { width: window.innerWidth, height: window.innerHeight }
                  : { width: 0, height: 0 };
                return null !=
                  (e =
                    null == r
                      ? void 0
                      : r.map((e) => {
                          let n = "string" == typeof e,
                            r = 0;
                          if ((n && (r = parseInt(e, 10)), R(c))) {
                            let o = n ? r : m ? e * t.height : 0;
                            return m
                              ? "bottom" === c
                                ? t.height - o
                                : -t.height + o
                              : o;
                          }
                          let o = n ? r : m ? e * t.width : 0;
                          return m
                            ? "right" === c
                              ? t.width - o
                              : -t.width + o
                            : o;
                        }))
                  ? e
                  : [];
              }, [r, m, s]),
              b = a.useMemo(
                () => (null !== g ? (null == y ? void 0 : y[g]) : null),
                [y, g]
              ),
              x = a.useCallback(
                (e) => {
                  var t;
                  let n =
                    null !=
                    (t = null == y ? void 0 : y.findIndex((t) => t === e))
                      ? t
                      : null;
                  u(n),
                    C(o.current, {
                      transition: "transform "
                        .concat(T.DURATION, "s cubic-bezier(")
                        .concat(T.EASE.join(","), ")"),
                      transform: R(c)
                        ? "translate3d(0, ".concat(e, "px, 0)")
                        : "translate3d(".concat(e, "px, 0, 0)"),
                    }),
                    y && n !== y.length - 1 && void 0 !== l && n !== l && n < l
                      ? C(i.current, {
                          transition: "opacity "
                            .concat(T.DURATION, "s cubic-bezier(")
                            .concat(T.EASE.join(","), ")"),
                          opacity: "0",
                        })
                      : C(i.current, {
                          transition: "opacity "
                            .concat(T.DURATION, "s cubic-bezier(")
                            .concat(T.EASE.join(","), ")"),
                          opacity: "1",
                        }),
                    p(null == r ? void 0 : r[Math.max(n, 0)]);
                },
                [o.current, r, y, l, i, p]
              );
            return (
              a.useEffect(() => {
                if (f || t) {
                  var e;
                  let n =
                    null !=
                    (e =
                      null == r
                        ? void 0
                        : r.findIndex((e) => e === t || e === f))
                      ? e
                      : -1;
                  y && -1 !== n && "number" == typeof y[n] && x(y[n]);
                }
              }, [f, t, r, y, x]),
              {
                isLastSnapPoint: v,
                activeSnapPoint: f,
                shouldFade: w,
                getPercentageDragged: function (e, t) {
                  if (!r || "number" != typeof g || !y || void 0 === l)
                    return null;
                  let n = g === l - 1;
                  if (g >= l && t) return 0;
                  if (n && !t) return 1;
                  if (!w && !n) return null;
                  let o = n ? g + 1 : g - 1,
                    a = e / Math.abs(n ? y[o] - y[o - 1] : y[o + 1] - y[o]);
                  return n ? 1 - a : a;
                },
                setActiveSnapPoint: p,
                activeSnapPointIndex: g,
                onRelease: function (e) {
                  let {
                    draggedDistance: t,
                    closeDrawer: n,
                    velocity: o,
                    dismissible: a,
                  } = e;
                  if (void 0 === l) return;
                  let u =
                      "bottom" === c || "right" === c
                        ? (null != b ? b : 0) - t
                        : (null != b ? b : 0) + t,
                    s = g === l - 1,
                    f = 0 === g,
                    p = t > 0;
                  if (
                    (s &&
                      C(i.current, {
                        transition: "opacity "
                          .concat(T.DURATION, "s cubic-bezier(")
                          .concat(T.EASE.join(","), ")"),
                      }),
                    !d && o > 2 && !p)
                  ) {
                    a ? n() : x(y[0]);
                    return;
                  }
                  if (!d && o > 2 && p && y && r) {
                    x(y[r.length - 1]);
                    return;
                  }
                  let m =
                      null == y
                        ? void 0
                        : y.reduce((e, t) =>
                            "number" != typeof e || "number" != typeof t
                              ? e
                              : Math.abs(t - u) < Math.abs(e - u)
                              ? t
                              : e
                          ),
                    h = R(c) ? window.innerHeight : window.innerWidth;
                  if (o > 0.4 && Math.abs(t) < 0.4 * h) {
                    let e = p ? 1 : -1;
                    if (e > 0 && v && r) {
                      x(y[r.length - 1]);
                      return;
                    }
                    if ((f && e < 0 && a && n(), null === g)) return;
                    x(y[g + e]);
                    return;
                  }
                  x(m);
                },
                onDrag: function (e) {
                  let { draggedDistance: t } = e;
                  if (null === b) return;
                  let n = "bottom" === c || "right" === c ? b - t : b + t;
                  (("bottom" === c || "right" === c) && n < y[y.length - 1]) ||
                    (("top" === c || "left" === c) && n > y[y.length - 1]) ||
                    C(o.current, {
                      transform: R(c)
                        ? "translate3d(0, ".concat(n, "px, 0)")
                        : "translate3d(".concat(n, "px, 0, 0)"),
                    });
                },
                snapPointsOffset: y,
              }
            );
          })({
            snapPoints: S,
            activeSnapPointProp: _,
            setActiveSnapPointProp: I,
            drawerRef: ey,
            fadeFromIndex: B,
            overlayRef: eu,
            onSnapPointChange: eC,
            direction: V,
            container: Z,
            snapToSequentialPoint: X,
          });
        !(function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            { isDisabled: t } = e;
          d(() => {
            if (!t) {
              var e, n, o;
              let t, a, i, l, u, s, d;
              return (
                1 == ++g &&
                  c() &&
                  ((i = 0),
                  (l = window.pageXOffset),
                  (u = window.pageYOffset),
                  (s = f(
                    ((e = document.documentElement),
                    (n = "paddingRight"),
                    (o = "".concat(
                      window.innerWidth - document.documentElement.clientWidth,
                      "px"
                    )),
                    (a = e.style[n]),
                    (e.style[n] = o),
                    () => {
                      e.style[n] = a;
                    })
                  )),
                  window.scrollTo(0, 0),
                  (d = f(
                    w(
                      document,
                      "touchstart",
                      (e) => {
                        ((t = h(e.target)) !== document.documentElement ||
                          t !== document.body) &&
                          (i = e.changedTouches[0].pageY);
                      },
                      { passive: !1, capture: !0 }
                    ),
                    w(
                      document,
                      "touchmove",
                      (e) => {
                        if (
                          !t ||
                          t === document.documentElement ||
                          t === document.body
                        ) {
                          e.preventDefault();
                          return;
                        }
                        let n = e.changedTouches[0].pageY,
                          r = t.scrollTop,
                          o = t.scrollHeight - t.clientHeight;
                        0 !== o &&
                          (((r <= 0 && n > i) || (r >= o && n < i)) &&
                            e.preventDefault(),
                          (i = n));
                      },
                      { passive: !1, capture: !0 }
                    ),
                    w(
                      document,
                      "touchend",
                      (e) => {
                        let t = e.target;
                        b(t) &&
                          t !== document.activeElement &&
                          (e.preventDefault(),
                          (t.style.transform = "translateY(-2000px)"),
                          t.focus(),
                          requestAnimationFrame(() => {
                            t.style.transform = "";
                          }));
                      },
                      { passive: !1, capture: !0 }
                    ),
                    w(
                      document,
                      "focus",
                      (e) => {
                        let t = e.target;
                        b(t) &&
                          ((t.style.transform = "translateY(-2000px)"),
                          requestAnimationFrame(() => {
                            (t.style.transform = ""),
                              p &&
                                (p.height < window.innerHeight
                                  ? requestAnimationFrame(() => {
                                      y(t);
                                    })
                                  : p.addEventListener("resize", () => y(t), {
                                      once: !0,
                                    }));
                          }));
                      },
                      !0
                    ),
                    w(window, "scroll", () => {
                      window.scrollTo(0, 0);
                    })
                  )),
                  (r = () => {
                    s(), d(), window.scrollTo(l, u);
                  })),
                () => {
                  0 == --g && (null == r || r());
                }
              );
            }
          }, [t]);
        })({ isDisabled: !ee || eo || !z || ei || !en || !K || !Y });
        let { restorePositionSetting: eD } = (function (e) {
          let {
              isOpen: t,
              modal: n,
              nested: r,
              hasBeenOpened: o,
              preventScrollRestoration: i,
              noBodyStyles: l,
            } = e,
            [c, s] = a.useState(() =>
              "undefined" != typeof window ? window.location.href : ""
            ),
            d = a.useRef(0),
            f = a.useCallback(() => {
              if (u() && null === D && t && !l) {
                D = {
                  position: document.body.style.position,
                  top: document.body.style.top,
                  left: document.body.style.left,
                  height: document.body.style.height,
                  right: "unset",
                };
                let { scrollX: e, innerHeight: t } = window;
                document.body.style.setProperty(
                  "position",
                  "fixed",
                  "important"
                ),
                  Object.assign(document.body.style, {
                    top: "".concat(-d.current, "px"),
                    left: "".concat(-e, "px"),
                    right: "0px",
                    height: "auto",
                  }),
                  window.setTimeout(
                    () =>
                      window.requestAnimationFrame(() => {
                        let e = t - window.innerHeight;
                        e &&
                          d.current >= t &&
                          (document.body.style.top = "".concat(
                            -(d.current + e),
                            "px"
                          ));
                      }),
                    300
                  );
              }
            }, [t]),
            p = a.useCallback(() => {
              if (u() && null !== D && !l) {
                let e = -parseInt(document.body.style.top, 10),
                  t = -parseInt(document.body.style.left, 10);
                Object.assign(document.body.style, D),
                  window.requestAnimationFrame(() => {
                    if (i && c !== window.location.href) {
                      s(window.location.href);
                      return;
                    }
                    window.scrollTo(t, e);
                  }),
                  (D = null);
              }
            }, [c]);
          return (
            a.useEffect(() => {
              function e() {
                d.current = window.scrollY;
              }
              return (
                e(),
                window.addEventListener("scroll", e),
                () => {
                  window.removeEventListener("scroll", e);
                }
              );
            }, []),
            a.useEffect(() => {
              if (n)
                return () => {
                  "undefined" != typeof document &&
                    (document.querySelector("[data-vaul-drawer]") || p());
                };
            }, [n, p]),
            a.useEffect(() => {
              r ||
                !o ||
                (t
                  ? (window.matchMedia("(display-mode: standalone)").matches ||
                      f(),
                    n ||
                      window.setTimeout(() => {
                        p();
                      }, 500))
                  : p());
            }, [t, o, c, n, r, f, p]),
            { restorePositionSetting: p }
          );
        })({
          isOpen: ee,
          modal: z,
          nested: null != q && q,
          hasBeenOpened: en,
          preventScrollRestoration: $,
          noBodyStyles: U,
        });
        function eM() {
          return (window.innerWidth - 26) / window.innerWidth;
        }
        function ej(e, t) {
          var n;
          let r = e,
            o = null == (n = window.getSelection()) ? void 0 : n.toString(),
            a = ey.current ? E(ey.current, V) : null,
            i = new Date();
          if (
            "SELECT" === r.tagName ||
            r.hasAttribute("data-vaul-no-drag") ||
            r.closest("[data-vaul-no-drag]")
          )
            return !1;
          if ("right" === V || "left" === V) return !0;
          if (ec.current && i.getTime() - ec.current.getTime() < 500) return !1;
          if (null !== a && ("bottom" === V ? a > 0 : a < 0)) return !0;
          if (o && o.length > 0) return !1;
          if (
            (ef.current && i.getTime() - ef.current.getTime() < j && 0 === a) ||
            t
          )
            return (ef.current = i), !1;
          for (; r; ) {
            if (r.scrollHeight > r.clientHeight) {
              if (0 !== r.scrollTop) return (ef.current = new Date()), !1;
              if ("dialog" === r.getAttribute("role")) break;
            }
            r = r.parentNode;
          }
          return !0;
        }
        function eN(e) {
          eo &&
            ey.current &&
            (ey.current.classList.remove(k),
            (ep.current = !1),
            ea(!1),
            (ed.current = new Date())),
            null == W || W(),
            e || et(!1),
            setTimeout(() => {
              S && eS(S[0]);
            }, 1e3 * T.DURATION);
        }
        function eF() {
          if (!ey.current) return;
          let e = document.querySelector("[data-vaul-drawer-wrapper]"),
            t = E(ey.current, V);
          C(ey.current, {
            transform: "translate3d(0, 0, 0)",
            transition: "transform "
              .concat(T.DURATION, "s cubic-bezier(")
              .concat(T.EASE.join(","), ")"),
          }),
            C(eu.current, {
              transition: "opacity "
                .concat(T.DURATION, "s cubic-bezier(")
                .concat(T.EASE.join(","), ")"),
              opacity: "1",
            }),
            A &&
              t &&
              t > 0 &&
              ee &&
              C(
                e,
                {
                  borderRadius: "".concat(8, "px"),
                  overflow: "hidden",
                  ...(R(V)
                    ? {
                        transform: "scale(".concat(
                          eM(),
                          ") translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)"
                        ),
                        transformOrigin: "top",
                      }
                    : {
                        transform: "scale(".concat(
                          eM(),
                          ") translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)"
                        ),
                        transformOrigin: "left",
                      }),
                  transitionProperty: "transform, border-radius",
                  transitionDuration: "".concat(T.DURATION, "s"),
                  transitionTimingFunction: "cubic-bezier(".concat(
                    T.EASE.join(","),
                    ")"
                  ),
                },
                !0
              );
        }
        return (
          a.useEffect(() => {
            window.requestAnimationFrame(() => {
              eg.current = !0;
            });
          }, []),
          a.useEffect(() => {
            var e;
            function t() {
              if (
                ey.current &&
                K &&
                (b(document.activeElement) || ev.current)
              ) {
                var e;
                let t =
                    (null == (e = window.visualViewport) ? void 0 : e.height) ||
                    0,
                  n = window.innerHeight,
                  r = n - t,
                  o = ey.current.getBoundingClientRect().height || 0;
                eP.current || (eP.current = o);
                let a = ey.current.getBoundingClientRect().top;
                if (
                  (Math.abs(ew.current - r) > 60 && (ev.current = !ev.current),
                  S && S.length > 0 && ek && eE && (r += ek[eE] || 0),
                  (ew.current = r),
                  o > t || ev.current)
                ) {
                  let e = ey.current.getBoundingClientRect().height,
                    i = e;
                  e > t && (i = t - (o > 0.8 * n ? a : 26)),
                    H
                      ? (ey.current.style.height = "".concat(
                          e - Math.max(r, 0),
                          "px"
                        ))
                      : (ey.current.style.height = "".concat(
                          Math.max(i, t - a),
                          "px"
                        ));
                } else
                  !(function () {
                    let e = navigator.userAgent;
                    return (
                      "undefined" != typeof window &&
                      ((/Firefox/.test(e) && /Mobile/.test(e)) ||
                        /FxiOS/.test(e))
                    );
                  })() &&
                    (ey.current.style.height = "".concat(eP.current, "px"));
                S && S.length > 0 && !ev.current
                  ? (ey.current.style.bottom = "0px")
                  : (ey.current.style.bottom = "".concat(Math.max(r, 0), "px"));
              }
            }
            return (
              null == (e = window.visualViewport) ||
                e.addEventListener("resize", t),
              () => {
                var e;
                return null == (e = window.visualViewport)
                  ? void 0
                  : e.removeEventListener("resize", t);
              }
            );
          }, [eE, S, ek]),
          a.useEffect(
            () => (
              ee &&
                (C(document.documentElement, { scrollBehavior: "auto" }),
                (ec.current = new Date())),
              () => {
                !(function (e, t) {
                  if (!e || !(e instanceof HTMLElement)) return;
                  let n = P.get(e);
                  n && (e.style[t] = n[t]);
                })(document.documentElement, "scrollBehavior");
              }
            ),
            [ee]
          ),
          a.useEffect(() => {
            z ||
              window.requestAnimationFrame(() => {
                document.body.style.pointerEvents = "auto";
              });
          }, [z]),
          a.createElement(
            o.bL,
            {
              defaultOpen: G,
              onOpenChange: (e) => {
                (N || e) && (e ? er(!0) : eN(!0), et(e));
              },
              open: ee,
            },
            a.createElement(
              i.Provider,
              {
                value: {
                  activeSnapPoint: eR,
                  snapPoints: S,
                  setActiveSnapPoint: eS,
                  drawerRef: ey,
                  overlayRef: eu,
                  onOpenChange: s,
                  onPress: function (e) {
                    var t, n;
                    (N || S) &&
                      (!ey.current || ey.current.contains(e.target)) &&
                      ((eb.current =
                        (null == (t = ey.current)
                          ? void 0
                          : t.getBoundingClientRect().height) || 0),
                      (ex.current =
                        (null == (n = ey.current)
                          ? void 0
                          : n.getBoundingClientRect().width) || 0),
                      ea(!0),
                      (es.current = new Date()),
                      c() &&
                        window.addEventListener(
                          "touchend",
                          () => (ep.current = !1),
                          { once: !0 }
                        ),
                      e.target.setPointerCapture(e.pointerId),
                      (eh.current = R(V) ? e.pageY : e.pageX));
                  },
                  onRelease: function (e) {
                    var t, n;
                    if (!eo || !ey.current) return;
                    ey.current.classList.remove(k),
                      (ep.current = !1),
                      ea(!1),
                      (ed.current = new Date());
                    let r = E(ey.current, V);
                    if (
                      !e ||
                      !ej(e.target, !1) ||
                      !r ||
                      Number.isNaN(r) ||
                      null === es.current
                    )
                      return;
                    let o = ed.current.getTime() - es.current.getTime(),
                      a = eh.current - (R(V) ? e.pageY : e.pageX),
                      i = Math.abs(a) / o;
                    if (
                      (i > 0.05 &&
                        (el(!0),
                        setTimeout(() => {
                          el(!1);
                        }, 200)),
                      S)
                    ) {
                      eT({
                        draggedDistance:
                          a * ("bottom" === V || "right" === V ? 1 : -1),
                        closeDrawer: eN,
                        velocity: i,
                        dismissible: N,
                      }),
                        null == x || x(e, !0);
                      return;
                    }
                    if ("bottom" === V || "right" === V ? a > 0 : a < 0) {
                      eF(), null == x || x(e, !0);
                      return;
                    }
                    if (i > 0.4) {
                      eN(), null == x || x(e, !1);
                      return;
                    }
                    let l = Math.min(
                        null != (t = ey.current.getBoundingClientRect().height)
                          ? t
                          : 0,
                        window.innerHeight
                      ),
                      u = Math.min(
                        null != (n = ey.current.getBoundingClientRect().width)
                          ? n
                          : 0,
                        window.innerWidth
                      );
                    if (
                      Math.abs(r) >=
                      ("left" === V || "right" === V ? u : l) * M
                    ) {
                      eN(), null == x || x(e, !1);
                      return;
                    }
                    null == x || x(e, !0), eF();
                  },
                  onDrag: function (e) {
                    if (ey.current && eo) {
                      let t = "bottom" === V || "right" === V ? 1 : -1,
                        n = (eh.current - (R(V) ? e.pageY : e.pageX)) * t,
                        r = n > 0,
                        o = S && !N && !r;
                      if (o && 0 === eE) return;
                      let a = Math.abs(n),
                        i = document.querySelector(
                          "[data-vaul-drawer-wrapper]"
                        ),
                        l =
                          a /
                          ("bottom" === V || "top" === V
                            ? eb.current
                            : ex.current),
                        u = eO(a, r);
                      if (
                        (null !== u && (l = u),
                        (o && l >= 1) || (!ep.current && !ej(e.target, r)))
                      )
                        return;
                      if (
                        (ey.current.classList.add(k),
                        (ep.current = !0),
                        C(ey.current, { transition: "none" }),
                        C(eu.current, { transition: "none" }),
                        S && eA({ draggedDistance: n }),
                        r && !S)
                      ) {
                        let e =
                          Math.min(-(8 * (Math.log(n + 1) - 2) * 1), 0) * t;
                        C(ey.current, {
                          transform: R(V)
                            ? "translate3d(0, ".concat(e, "px, 0)")
                            : "translate3d(".concat(e, "px, 0, 0)"),
                        });
                        return;
                      }
                      let c = 1 - l;
                      if (
                        ((eL || (B && eE === B - 1)) &&
                          (null == v || v(e, l),
                          C(
                            eu.current,
                            { opacity: "".concat(c), transition: "none" },
                            !0
                          )),
                        i && eu.current && A)
                      ) {
                        let e = Math.min(eM() + l * (1 - eM()), 1),
                          t = 8 - 8 * l,
                          n = Math.max(0, 14 - 14 * l);
                        C(
                          i,
                          {
                            borderRadius: "".concat(t, "px"),
                            transform: R(V)
                              ? "scale("
                                  .concat(e, ") translate3d(0, ")
                                  .concat(n, "px, 0)")
                              : "scale("
                                  .concat(e, ") translate3d(")
                                  .concat(n, "px, 0, 0)"),
                            transition: "none",
                          },
                          !0
                        );
                      }
                      if (!S) {
                        let e = a * t;
                        C(ey.current, {
                          transform: R(V)
                            ? "translate3d(0, ".concat(e, "px, 0)")
                            : "translate3d(".concat(e, "px, 0, 0)"),
                        });
                      }
                    }
                  },
                  dismissible: N,
                  shouldAnimate: eg,
                  handleOnly: F,
                  isOpen: ee,
                  isDragging: eo,
                  shouldFade: eL,
                  closeDrawer: eN,
                  onNestedDrag: function (e, t) {
                    if (t < 0) return;
                    let n = (window.innerWidth - 16) / window.innerWidth,
                      r = n + t * (1 - n),
                      o = -16 + 16 * t;
                    C(ey.current, {
                      transform: R(V)
                        ? "scale("
                            .concat(r, ") translate3d(0, ")
                            .concat(o, "px, 0)")
                        : "scale("
                            .concat(r, ") translate3d(")
                            .concat(o, "px, 0, 0)"),
                      transition: "none",
                    });
                  },
                  onNestedOpenChange: function (e) {
                    let t = e
                        ? (window.innerWidth - 16) / window.innerWidth
                        : 1,
                      n = e ? -16 : 0;
                    em.current && window.clearTimeout(em.current),
                      C(ey.current, {
                        transition: "transform "
                          .concat(T.DURATION, "s cubic-bezier(")
                          .concat(T.EASE.join(","), ")"),
                        transform: R(V)
                          ? "scale("
                              .concat(t, ") translate3d(0, ")
                              .concat(n, "px, 0)")
                          : "scale("
                              .concat(t, ") translate3d(")
                              .concat(n, "px, 0, 0)"),
                      }),
                      !e &&
                        ey.current &&
                        (em.current = setTimeout(() => {
                          let e = E(ey.current, V);
                          C(ey.current, {
                            transition: "none",
                            transform: R(V)
                              ? "translate3d(0, ".concat(e, "px, 0)")
                              : "translate3d(".concat(e, "px, 0, 0)"),
                          });
                        }, 500));
                  },
                  onNestedRelease: function (e, t) {
                    let n = R(V) ? window.innerHeight : window.innerWidth,
                      r = t ? (n - 16) / n : 1,
                      o = t ? -16 : 0;
                    t &&
                      C(ey.current, {
                        transition: "transform "
                          .concat(T.DURATION, "s cubic-bezier(")
                          .concat(T.EASE.join(","), ")"),
                        transform: R(V)
                          ? "scale("
                              .concat(r, ") translate3d(0, ")
                              .concat(o, "px, 0)")
                          : "scale("
                              .concat(r, ") translate3d(")
                              .concat(o, "px, 0, 0)"),
                      });
                  },
                  keyboardIsOpen: ev,
                  modal: z,
                  snapPointsOffset: ek,
                  activeSnapPointIndex: eE,
                  direction: V,
                  shouldScaleBackground: A,
                  setBackgroundColorOnScale: O,
                  noBodyStyles: U,
                  container: Z,
                  autoFocus: Q,
                },
              },
              m
            )
          )
        );
      }
      let j = a.forwardRef(function (e, t) {
        let { ...n } = e,
          {
            overlayRef: r,
            snapPoints: i,
            onRelease: u,
            shouldFade: c,
            isOpen: s,
            modal: d,
            shouldAnimate: f,
          } = l(),
          p = x(t, r),
          m = i && i.length > 0;
        if (!d) return null;
        let h = a.useCallback((e) => u(e), [u]);
        return a.createElement(o.hJ, {
          onMouseUp: h,
          ref: p,
          "data-vaul-overlay": "",
          "data-vaul-snap-points": s && m ? "true" : "false",
          "data-vaul-snap-points-overlay": s && c ? "true" : "false",
          "data-vaul-animate": (null == f ? void 0 : f.current)
            ? "true"
            : "false",
          ...n,
        });
      });
      j.displayName = "Drawer.Overlay";
      let N = a.forwardRef(function (e, t) {
        let { onPointerDownOutside: n, style: r, onOpenAutoFocus: i, ...u } = e,
          {
            drawerRef: c,
            onPress: s,
            onRelease: d,
            onDrag: f,
            keyboardIsOpen: p,
            snapPointsOffset: m,
            activeSnapPointIndex: h,
            modal: v,
            isOpen: g,
            direction: w,
            snapPoints: y,
            container: b,
            handleOnly: P,
            shouldAnimate: C,
            autoFocus: E,
          } = l(),
          [k, A] = a.useState(!1),
          L = x(t, c),
          D = a.useRef(null),
          M = a.useRef(null),
          j = a.useRef(!1),
          N = y && y.length > 0;
        !(function () {
          let {
              direction: e,
              isOpen: t,
              shouldScaleBackground: n,
              setBackgroundColorOnScale: r,
              noBodyStyles: o,
            } = l(),
            i = a.useRef(null),
            u = (0, a.useMemo)(() => document.body.style.backgroundColor, []);
          function c() {
            return (window.innerWidth - 26) / window.innerWidth;
          }
          a.useEffect(() => {
            if (t && n) {
              i.current && clearTimeout(i.current);
              let t =
                document.querySelector("[data-vaul-drawer-wrapper]") ||
                document.querySelector("[vaul-drawer-wrapper]");
              if (!t) return;
              !(function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
              })(
                r && !o ? S(document.body, { background: "black" }) : O,
                S(t, {
                  transformOrigin: R(e) ? "top" : "left",
                  transitionProperty: "transform, border-radius",
                  transitionDuration: "".concat(T.DURATION, "s"),
                  transitionTimingFunction: "cubic-bezier(".concat(
                    T.EASE.join(","),
                    ")"
                  ),
                })
              );
              let n = S(t, {
                borderRadius: "".concat(8, "px"),
                overflow: "hidden",
                ...(R(e)
                  ? {
                      transform: "scale(".concat(
                        c(),
                        ") translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)"
                      ),
                    }
                  : {
                      transform: "scale(".concat(
                        c(),
                        ") translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)"
                      ),
                    }),
              });
              return () => {
                n(),
                  (i.current = window.setTimeout(() => {
                    u
                      ? (document.body.style.background = u)
                      : document.body.style.removeProperty("background");
                  }, 1e3 * T.DURATION));
              };
            }
          }, [t, n, u]);
        })();
        let F = function (e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          if (j.current) return !0;
          let r = Math.abs(e.y),
            o = Math.abs(e.x),
            a = o > r,
            i = ["bottom", "right"].includes(t) ? 1 : -1;
          if ("left" === t || "right" === t) {
            if (!(e.x * i < 0) && o >= 0 && o <= n) return a;
          } else if (!(e.y * i < 0) && r >= 0 && r <= n) return !a;
          return (j.current = !0), !0;
        };
        function B(e) {
          (D.current = null), (j.current = !1), d(e);
        }
        return (
          a.useEffect(() => {
            N &&
              window.requestAnimationFrame(() => {
                A(!0);
              });
          }, []),
          a.createElement(o.UC, {
            "data-vaul-drawer-direction": w,
            "data-vaul-drawer": "",
            "data-vaul-delayed-snap-points": k ? "true" : "false",
            "data-vaul-snap-points": g && N ? "true" : "false",
            "data-vaul-custom-container": b ? "true" : "false",
            "data-vaul-animate": (null == C ? void 0 : C.current)
              ? "true"
              : "false",
            ...u,
            ref: L,
            style:
              m && m.length > 0
                ? {
                    "--snap-point-height": "".concat(
                      m[null != h ? h : 0],
                      "px"
                    ),
                    ...r,
                  }
                : r,
            onPointerDown: (e) => {
              P ||
                (null == u.onPointerDown || u.onPointerDown.call(u, e),
                (D.current = { x: e.pageX, y: e.pageY }),
                s(e));
            },
            onOpenAutoFocus: (e) => {
              null == i || i(e), E || e.preventDefault();
            },
            onPointerDownOutside: (e) => {
              if ((null == n || n(e), !v || e.defaultPrevented)) {
                e.preventDefault();
                return;
              }
              p.current && (p.current = !1);
            },
            onFocusOutside: (e) => {
              if (!v) {
                e.preventDefault();
                return;
              }
            },
            onPointerMove: (e) => {
              if (
                ((M.current = e),
                P ||
                  (null == u.onPointerMove || u.onPointerMove.call(u, e),
                  !D.current))
              )
                return;
              let t = e.pageY - D.current.y,
                n = e.pageX - D.current.x,
                r = "touch" === e.pointerType ? 10 : 2;
              F({ x: n, y: t }, w, r)
                ? f(e)
                : (Math.abs(n) > r || Math.abs(t) > r) && (D.current = null);
            },
            onPointerUp: (e) => {
              null == u.onPointerUp || u.onPointerUp.call(u, e),
                (D.current = null),
                (j.current = !1),
                d(e);
            },
            onPointerOut: (e) => {
              null == u.onPointerOut || u.onPointerOut.call(u, e), B(M.current);
            },
            onContextMenu: (e) => {
              null == u.onContextMenu || u.onContextMenu.call(u, e),
                M.current && B(M.current);
            },
          })
        );
      });
      N.displayName = "Drawer.Content";
      let F = a.forwardRef(function (e, t) {
        let { preventCycle: n = !1, children: r, ...o } = e,
          {
            closeDrawer: i,
            isDragging: u,
            snapPoints: c,
            activeSnapPoint: s,
            setActiveSnapPoint: d,
            dismissible: f,
            handleOnly: p,
            isOpen: m,
            onPress: h,
            onDrag: v,
          } = l(),
          g = a.useRef(null),
          w = a.useRef(!1);
        function y() {
          g.current && window.clearTimeout(g.current), (w.current = !1);
        }
        return a.createElement(
          "div",
          {
            onClick: function () {
              if (w.current) {
                y();
                return;
              }
              window.setTimeout(() => {
                !(function () {
                  if (u || n || w.current) {
                    y();
                    return;
                  }
                  if ((y(), !c || 0 === c.length)) {
                    f || i();
                    return;
                  }
                  if (s === c[c.length - 1] && f) {
                    i();
                    return;
                  }
                  let e = c.findIndex((e) => e === s);
                  -1 !== e && d(c[e + 1]);
                })();
              }, 120);
            },
            onPointerCancel: y,
            onPointerDown: (e) => {
              p && h(e),
                (g.current = window.setTimeout(() => {
                  w.current = !0;
                }, 250));
            },
            onPointerMove: (e) => {
              p && v(e);
            },
            ref: t,
            "data-vaul-drawer-visible": m ? "true" : "false",
            "data-vaul-handle": "",
            "aria-hidden": "true",
            ...o,
          },
          a.createElement(
            "span",
            { "data-vaul-handle-hitarea": "", "aria-hidden": "true" },
            r
          )
        );
      });
      F.displayName = "Drawer.Handle";
      let B = {
        Root: M,
        NestedRoot: function (e) {
          let { onDrag: t, onOpenChange: n, open: r, ...o } = e,
            {
              onNestedDrag: i,
              onNestedOpenChange: u,
              onNestedRelease: c,
            } = l();
          if (!i)
            throw Error("Drawer.NestedRoot must be placed in another drawer");
          return a.createElement(M, {
            nested: !0,
            open: r,
            onClose: () => {
              u(!1);
            },
            onDrag: (e, n) => {
              i(e, n), null == t || t(e, n);
            },
            onOpenChange: (e) => {
              e && u(e), null == n || n(e);
            },
            onRelease: c,
            ...o,
          });
        },
        Content: N,
        Overlay: j,
        Trigger: o.l9,
        Portal: function (e) {
          let t = l(),
            { container: n = t.container, ...r } = e;
          return a.createElement(o.ZL, { container: n, ...r });
        },
        Handle: F,
        Close: o.bm,
        Title: o.hE,
        Description: o.VY,
      };
    },
    45125: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => i });
      var r = n(76790),
        o = n(23646),
        a = n(67128);
      function i(e, t = {}) {
        let {
          key: n = "fallback",
          name: l = "Fallback",
          rank: u = !1,
          retryCount: c,
          retryDelay: s,
        } = t;
        return ({ chain: t, pollingInterval: i = 4e3, timeout: d, ...f }) => {
          let p = e,
            m = () => {},
            h = (0, a.o)(
              {
                key: n,
                name: l,
                async request({ method: e, params: n }) {
                  let o = async (a = 0) => {
                    let i = p[a]({ ...f, chain: t, retryCount: 0, timeout: d });
                    try {
                      let t = await i.request({ method: e, params: n });
                      return (
                        m({
                          method: e,
                          params: n,
                          response: t,
                          transport: i,
                          status: "success",
                        }),
                        t
                      );
                    } catch (t) {
                      if (
                        (m({
                          error: t,
                          method: e,
                          params: n,
                          transport: i,
                          status: "error",
                        }),
                        ("code" in t &&
                          "number" == typeof t.code &&
                          (t.code === r.YW.code ||
                            t.code === r.vx.code ||
                            5e3 === t.code)) ||
                          a === p.length - 1)
                      )
                        throw t;
                      return o(a + 1);
                    }
                  };
                  return o();
                },
                retryCount: c,
                retryDelay: s,
                type: "fallback",
              },
              {
                onResponse: (e) => (m = e),
                transports: p.map((e) => e({ chain: t, retryCount: 0 })),
              }
            );
          if (u) {
            let e = "object" == typeof u ? u : {};
            !(function ({
              chain: e,
              interval: t = 4e3,
              onTransports: n,
              ping: r,
              sampleCount: a = 10,
              timeout: i = 1e3,
              transports: l,
              weights: u = {},
            }) {
              let { stability: c = 0.7, latency: s = 0.3 } = u,
                d = [],
                f = async () => {
                  let u = await Promise.all(
                    l.map(async (t) => {
                      let n, o;
                      let a = t({ chain: e, retryCount: 0, timeout: i }),
                        l = Date.now();
                      try {
                        await (r
                          ? r({ transport: a })
                          : a.request({ method: "net_listening" })),
                          (o = 1);
                      } catch {
                        o = 0;
                      } finally {
                        n = Date.now();
                      }
                      return { latency: n - l, success: o };
                    })
                  );
                  d.push(u), d.length > a && d.shift();
                  let p = Math.max(
                    ...d.map((e) => Math.max(...e.map(({ latency: e }) => e)))
                  );
                  n(
                    l
                      .map((e, t) => {
                        let n = d.map((e) => e[t].latency),
                          r = n.reduce((e, t) => e + t, 0) / n.length,
                          o = d.map((e) => e[t].success),
                          a = o.reduce((e, t) => e + t, 0) / o.length;
                        return 0 === a ? [0, t] : [s * (1 - r / p) + c * a, t];
                      })
                      .sort((e, t) => t[0] - e[0])
                      .map(([, e]) => l[e])
                  ),
                    await (0, o.u)(t),
                    f();
                };
              f();
            })({
              chain: t,
              interval: e.interval ?? i,
              onTransports: (e) => (p = e),
              ping: e.ping,
              sampleCount: e.sampleCount,
              timeout: e.timeout,
              transports: p,
              weights: e.weights,
            });
          }
          return h;
        };
      }
    },
    92188: (e, t, n) => {
      "use strict";
      n.d(t, { K: () => p });
      var r = n(40928),
        o = n(89296);
      n(68219);
      var a = n(40304),
        i = n(40772),
        l = n(64602);
      let u = new Map();
      async function c(e) {
        let {
            getSocket: t,
            keepAlive: n = !0,
            key: o = "socket",
            reconnect: c = !0,
            url: s,
          } = e,
          { interval: d = 3e4 } = "object" == typeof n ? n : {},
          { attempts: f = 5, delay: p = 2e3 } = "object" == typeof c ? c : {},
          m = u.get(`${o}:${s}`);
        if (m) return m;
        let h = 0,
          { schedule: v } = (0, a.u)({
            id: `${o}:${s}`,
            fn: async () => {
              let e, a, v;
              let g = new Map(),
                w = new Map();
              async function y() {
                let o = await t({
                  onClose() {
                    for (let e of g.values()) e.onError?.(new r.Oz({ url: s }));
                    for (let e of w.values()) e.onError?.(new r.Oz({ url: s }));
                    g.clear(),
                      w.clear(),
                      c &&
                        h < f &&
                        setTimeout(async () => {
                          h++, await y().catch(console.error);
                        }, p);
                  },
                  onError(t) {
                    for (let n of ((e = t), g.values())) n.onError?.(e);
                    for (let t of w.values()) t.onError?.(e);
                    g.clear(),
                      w.clear(),
                      c &&
                        h < f &&
                        setTimeout(async () => {
                          h++, await y().catch(console.error);
                        }, p);
                  },
                  onOpen() {
                    (e = void 0), (h = 0);
                  },
                  onResponse(e) {
                    let t = "eth_subscription" === e.method,
                      n = t ? e.params.subscription : e.id,
                      r = t ? w : g,
                      o = r.get(n);
                    o && o.onResponse(e), t || r.delete(n);
                  },
                });
                return (
                  (a = o),
                  n &&
                    (v && clearInterval(v),
                    (v = setInterval(() => a.ping?.(), d))),
                  o
                );
              }
              return (
                await y(),
                (e = void 0),
                (m = {
                  close() {
                    v && clearInterval(v), a.close(), u.delete(`${o}:${s}`);
                  },
                  get socket() {
                    return a;
                  },
                  request({ body: t, onError: n, onResponse: r }) {
                    e && n && n(e);
                    let o = t.id ?? l.q.take(),
                      i = (e) => {
                        ("number" != typeof e.id || o === e.id) &&
                          ("eth_subscribe" === t.method &&
                            "string" == typeof e.result &&
                            w.set(e.result, { onResponse: i, onError: n }),
                          "eth_unsubscribe" === t.method &&
                            w.delete(t.params?.[0]),
                          r(e));
                      };
                    g.set(o, { onResponse: i, onError: n });
                    try {
                      a.request({ body: { jsonrpc: "2.0", id: o, ...t } });
                    } catch (e) {
                      n?.(e);
                    }
                  },
                  requestAsync({ body: e, timeout: t = 1e4 }) {
                    return (0, i.w)(
                      () =>
                        new Promise((t, n) =>
                          this.request({ body: e, onError: n, onResponse: t })
                        ),
                      {
                        errorInstance: new r.MU({ body: e, url: s }),
                        timeout: t,
                      }
                    );
                  },
                  requests: g,
                  subscriptions: w,
                  url: s,
                }),
                u.set(`${o}:${s}`, m),
                [m]
              );
            },
          }),
          [g, [w]] = await v();
        return w;
      }
      async function s(e, t = {}) {
        let { keepAlive: o, reconnect: a } = t;
        return c({
          async getSocket({
            onClose: t,
            onError: o,
            onOpen: a,
            onResponse: i,
          }) {
            let l = await n
                .e(8065)
                .then(n.bind(n, 98065))
                .then((e) => e.WebSocket),
              u = new l(e);
            function c({ data: e }) {
              i(JSON.parse(e));
            }
            u.addEventListener("close", function e() {
              t(),
                u.removeEventListener("close", e),
                u.removeEventListener("message", c),
                u.removeEventListener("error", o),
                u.removeEventListener("open", a);
            }),
              u.addEventListener("message", c),
              u.addEventListener("error", o),
              u.addEventListener("open", a),
              u.readyState === l.CONNECTING &&
                (await new Promise((e, t) => {
                  u && ((u.onopen = e), (u.onerror = t));
                }));
            let { close: s } = u;
            return Object.assign(u, {
              close() {
                s.bind(u)(), t();
              },
              ping() {
                try {
                  if (u.readyState === u.CLOSED || u.readyState === u.CLOSING)
                    throw new r.Pr({
                      url: u.url,
                      cause: new r.Oz({ url: u.url }),
                    });
                  u.send(
                    JSON.stringify({
                      jsonrpc: "2.0",
                      method: "net_version",
                      params: [],
                    })
                  );
                } catch (e) {
                  o(e);
                }
              },
              request({ body: e }) {
                if (u.readyState === u.CLOSED || u.readyState === u.CLOSING)
                  throw new r.Pr({
                    body: e,
                    url: u.url,
                    cause: new r.Oz({ url: u.url }),
                  });
                return u.send(JSON.stringify(e));
              },
            });
          },
          keepAlive: o,
          reconnect: a,
          url: e,
        });
      }
      async function d(e) {
        let t = await s(e);
        return Object.assign(t.socket, {
          requests: t.requests,
          subscriptions: t.subscriptions,
        });
      }
      var f = n(67128);
      function p(e, t = {}) {
        let {
          keepAlive: n,
          key: a = "webSocket",
          name: i = "WebSocket JSON-RPC",
          reconnect: l,
          retryDelay: u,
        } = t;
        return ({ chain: c, retryCount: p, timeout: m }) => {
          let h = t.retryCount ?? p,
            v = m ?? t.timeout ?? 1e4,
            g = e || c?.rpcUrls.default.webSocket?.[0];
          if (!g) throw new o.b();
          return (0, f.o)(
            {
              key: a,
              name: i,
              async request({ method: e, params: t }) {
                let o = { method: e, params: t },
                  a = await s(g, { keepAlive: n, reconnect: l }),
                  { error: i, result: u } = await a.requestAsync({
                    body: o,
                    timeout: v,
                  });
                if (i) throw new r.J8({ body: o, error: i, url: g });
                return u;
              },
              retryCount: h,
              retryDelay: u,
              timeout: v,
              type: "webSocket",
            },
            {
              getSocket: () => d(g),
              getRpcClient: () => s(g),
              async subscribe({ params: e, onData: t, onError: n }) {
                let r = await s(g),
                  { result: o } = await new Promise((o, a) =>
                    r.request({
                      body: { method: "eth_subscribe", params: e },
                      onError(e) {
                        a(e), n?.(e);
                      },
                      onResponse(e) {
                        if (e.error) {
                          a(e.error), n?.(e.error);
                          return;
                        }
                        if ("number" == typeof e.id) {
                          o(e);
                          return;
                        }
                        "eth_subscription" === e.method && t(e.params);
                      },
                    })
                  );
                return {
                  subscriptionId: o,
                  unsubscribe: async () =>
                    new Promise((e) =>
                      r.request({
                        body: { method: "eth_unsubscribe", params: [o] },
                        onResponse: e,
                      })
                    ),
                };
              },
            }
          );
        };
      }
    },
  },
]);
