(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2784],
  {
    2784: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 83401)),
        Promise.resolve().then(a.bind(a, 78193)),
        Promise.resolve().then(a.bind(a, 88379)),
        Promise.resolve().then(a.t.bind(a, 48173, 23)),
        Promise.resolve().then(a.t.bind(a, 87970, 23)),
        Promise.resolve().then(a.bind(a, 46369)),
        Promise.resolve().then(a.bind(a, 65960)),
        Promise.resolve().then(a.bind(a, 36060)),
        Promise.resolve().then(a.bind(a, 37528)),
        Promise.resolve().then(a.bind(a, 76795)),
        Promise.resolve().then(a.bind(a, 28469)),
        Promise.resolve().then(a.bind(a, 63786)),
        Promise.resolve().then(a.bind(a, 97810));
    },
    46369: (e, t, a) => {
      "use strict";
      a.d(t, { HeaderLink: () => o });
      var r = a(95155),
        s = a(48173),
        n = a.n(s),
        l = a(45887),
        i = a(21567);
      let o = (e) => {
        let { link: t, className: a, ...s } = e,
          o = (0, l.a8)() === t.href;
        return (0, r.jsx)(n(), {
          ...s,
          href: t.href,
          className: (0, i.cn)(
            "whitespace-nowrap text-[14px] leading-none hover:underline",
            { "text-primary": !o, "pointer-events-none text-white": o },
            a
          ),
          children: t.title,
        });
      };
    },
    65960: (e, t, a) => {
      "use strict";
      a.d(t, { HeaderMobile: () => z });
      var r = a(95155),
        s = a(86710),
        n = a(12115),
        l = a(21567),
        i = a(28469),
        o = a(73312),
        d = a(51344),
        c = a(69847);
      let p = (e) => {
        let { shouldScaleBackground: t = !0, ...a } = e;
        return (0, r.jsx)(c._s.Root, { shouldScaleBackground: t, ...a });
      };
      p.displayName = "Drawer";
      let u = c._s.Trigger,
        m = c._s.Portal;
      c._s.Close;
      let h = n.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)(c._s.Overlay, {
          ref: t,
          className: (0, l.cn)("z-drawer fixed inset-0 bg-black/80", a),
          ...s,
        });
      });
      h.displayName = c._s.Overlay.displayName;
      let x = n.forwardRef((e, t) => {
        let { className: a, children: s, ...n } = e;
        return (0, r.jsxs)(m, {
          children: [
            (0, r.jsx)(h, {}),
            (0, r.jsxs)(c._s.Content, {
              ref: t,
              className: (0, l.cn)(
                "z-drawer fixed inset-x-0 bottom-0 mt-24 flex h-auto flex-col rounded-t-[10px] border border-neutral-900 bg-neutral-900",
                a
              ),
              ...n,
              children: [
                (0, r.jsx)("div", {
                  className:
                    "mx-auto mt-4 h-2 w-[100px] rounded-full bg-white/10",
                }),
                s,
              ],
            }),
          ],
        });
      });
      x.displayName = "DrawerContent";
      let f = (e) => {
        let { className: t, ...a } = e;
        return (0, r.jsx)("div", {
          className: (0, l.cn)("grid gap-1.5 p-4 text-center sm:text-left", t),
          ...a,
        });
      };
      (f.displayName = "DrawerHeader"),
        (n.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, r.jsx)(c._s.Title, {
            ref: t,
            className: (0, l.cn)(
              "text-lg font-semibold leading-none tracking-tight",
              a
            ),
            ...s,
          });
        }).displayName = c._s.Title.displayName),
        (n.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, r.jsx)(c._s.Description, {
            ref: t,
            className: (0, l.cn)(
              "text-sm text-neutral-500 dark:text-neutral-400",
              a
            ),
            ...s,
          });
        }).displayName = c._s.Description.displayName);
      var b = a(46369),
        g = a(5565),
        v = a(48173),
        y = a.n(v),
        N = a(76874);
      let w = (e) => {
        let { className: t, as: a = "div", asLink: s } = e;
        return s
          ? (0, r.jsx)(y(), {
              href: "/",
              className: (0, l.cn)(t),
              children: (0, r.jsx)(g.default, {
                src: "/logo.png",
                alt: N.XZ.title,
                width: 120,
                height: 35,
                quality: 100,
              }),
            })
          : (0, r.jsx)(a, {
              className: (0, l.cn)(t),
              children: (0, r.jsx)(g.default, {
                src: "/logo.png",
                alt: N.XZ.title,
                width: 120,
                height: 35,
                quality: 100,
              }),
            });
      };
      var j = a(31027);
      let C = (e) => {
          let { children: t, className: a } = e;
          return (0, r.jsx)("div", {
            className: (0, l.cn)(
              "flex size-12 items-center justify-center rounded-full bg-white/90 text-black",
              a
            ),
            children: t,
          });
        },
        L = (e) => {
          let {
            width: t = 15,
            height: a = 16,
            alt: s,
            fill: n = "currentColor",
            iconName: l = "icon-social-x",
            className: i,
          } = e;
          return (0, r.jsxs)("svg", {
            width: t,
            height: a,
            className: i,
            viewBox: "0 0 ".concat(15, " ").concat(16),
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            role: s ? "img" : void 0,
            "aria-labelledby": "title-svg-".concat(l),
            children: [
              s &&
                (0, r.jsx)("title", {
                  id: "title-svg-".concat(l),
                  children: s,
                }),
              (0, r.jsx)("path", {
                fill: n,
                d: "M1.46548 6.32849C4.91039 4.82758 7.20754 3.83809 8.35692 3.36002C11.6386 1.99503 12.3206 1.75791 12.765 1.75008C12.8628 1.74836 13.0814 1.77259 13.2229 1.88747C13.3425 1.98448 13.3754 2.11552 13.3911 2.2075C13.4069 2.29947 13.4265 2.50899 13.4109 2.6727C13.233 4.54127 12.4635 9.0758 12.0721 11.1686C11.9064 12.0542 11.5802 12.3511 11.2645 12.3802C10.5782 12.4433 10.0571 11.9266 9.39248 11.491C8.35243 10.8092 7.76486 10.3848 6.75531 9.71949C5.58859 8.95063 6.34492 8.52806 7.00983 7.83745C7.18384 7.65672 10.2074 4.90651 10.2659 4.65703C10.2733 4.62583 10.2801 4.50952 10.211 4.4481C10.1419 4.38669 10.0399 4.40769 9.9663 4.42439C9.86198 4.44807 8.20048 5.54627 4.98179 7.71899C4.51018 8.04284 4.08301 8.20063 3.70028 8.19236C3.27835 8.18324 2.46672 7.95379 1.86336 7.75766C1.12332 7.5171 0.535144 7.38991 0.586361 6.98137C0.613038 6.76857 0.906076 6.55094 1.46548 6.32849Z",
              }),
            ],
          });
        },
        k = (e) => {
          let {
            width: t = 18,
            height: a = 20,
            alt: s,
            fill: n = "currentColor",
            iconName: l = "icon-social-x",
            className: i,
          } = e;
          return (0, r.jsxs)("svg", {
            width: t,
            height: a,
            className: i,
            viewBox: "0 0 ".concat(18, " ").concat(20),
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            role: s ? "img" : void 0,
            "aria-labelledby": "title-svg-".concat(l),
            children: [
              s &&
                (0, r.jsx)("title", {
                  id: "title-svg-".concat(l),
                  children: s,
                }),
              (0, r.jsx)("path", {
                fill: n,
                d: "M13.7447 1.42798H16.2748L10.7473 7.7456L17.25 16.3425H12.1584L8.17053 11.1285L3.60746 16.3425H1.07582L6.98808 9.58505L0.75 1.42798H5.97083L9.57555 6.19373L13.7447 1.42798ZM12.8567 14.8281H14.2587L5.20905 2.86283H3.7046L12.8567 14.8281Z",
              }),
            ],
          });
        },
        _ = (0, j.F)("transition-all", {
          variants: {
            variant: {
              light:
                "bg-white/90 text-black hover:bg-[#ede9df1a] hover:text-white",
              dark: "bg-[#ede9df1a] text-white hover:bg-white/90 hover:text-black",
            },
            size: { header: "size-[40px]", footer: "size-[50px]" },
            sizeIcon: { header: "size-[14px]", footer: "size-[18px]" },
          },
        }),
        E = (e) => {
          let { variant: t, size: a, sizeIcon: s, className: n } = e;
          return (0, r.jsxs)("div", {
            className: (0, l.cn)("flex gap-2", n),
            children: [
              (0, r.jsx)(y(), {
                target: "_blank",
                href: N.XZ.socials.x,
                children: (0, r.jsx)(C, {
                  className: (0, l.cn)(_({ variant: t, size: a })),
                  children: (0, r.jsx)(k, {
                    className: (0, l.cn)(
                      "transition-all",
                      _({ sizeIcon: null != s ? s : a })
                    ),
                  }),
                }),
              }),
              (0, r.jsx)(y(), {
                target: "_blank",
                href: N.XZ.socials.telegram,
                children: (0, r.jsx)(C, {
                  className: (0, l.cn)(_({ variant: t, size: a })),
                  children: (0, r.jsx)(L, {
                    className: (0, l.cn)(
                      "transition-all",
                      _({ sizeIcon: null != s ? s : a })
                    ),
                  }),
                }),
              }),
            ],
          });
        };
      var P = a(7266),
        A = a(37528),
        T = a(45887),
        B = a(36060);
      function I(e) {
        let { className: t } = e,
          a = (0, P.useTranslations)(),
          s = (0, P.useLocale)();
        return (0, r.jsx)(B.default, {
          className: t,
          defaultValue: s,
          label: a("LocaleSwitcher.label"),
          children: T.DT.locales.map((e) =>
            (0, r.jsx)(
              A.SelectItem,
              {
                value: e,
                className: "whitespace-nowrap",
                children: (0, r.jsxs)("span", {
                  className: "inline-flex items-center gap-2",
                  children: [
                    (0, r.jsx)("img", {
                      src: "/assets/images/flags/".concat(e, "_flag.png"),
                      className: "inline-flex size-6",
                      alt: "".concat(e, " flag"),
                    }),
                    " ",
                    (0, r.jsx)("span", {
                      className: "translate-y-[2px] leading-none",
                      children: a("LocaleSwitcher.locale", { locale: e }),
                    }),
                  ],
                }),
              },
              e
            )
          ),
        });
      }
      let z = (e) => {
        let { className: t, links: a } = e,
          [c, m] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            let e = () => {
              window.innerWidth > 1024 && m(!1);
            };
            return (
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          (0, r.jsx)("div", {
            className: (0, l.cn)(t),
            children: (0, r.jsxs)(p, {
              open: c,
              onOpenChange: m,
              children: [
                (0, r.jsx)(u, {
                  asChild: !0,
                  children: (0, r.jsx)("div", {
                    children: (0, r.jsx)(o.$, {
                      variant: "default-outline",
                      size: "buy",
                      children: (0, r.jsx)("span", {
                        className: "py-[1px]",
                        children: (0, r.jsx)(s.A, {}),
                      }),
                    }),
                  }),
                }),
                (0, r.jsxs)(x, {
                  children: [
                    (0, r.jsxs)(f, {
                      className: "px-0",
                      children: [
                        (0, r.jsx)(d.L3, {
                          className: "sr-only",
                          children: "aiPump Menu",
                        }),
                        (0, r.jsxs)("div", {
                          className:
                            "container flex items-center justify-between",
                          children: [
                            (0, r.jsx)(w, { asLink: !0 }),
                            (0, r.jsx)(I, {}),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)(d.rr, {
                      className: "sr-only",
                      children: "Menu Items and Socials",
                    }),
                    (0, r.jsx)("div", {
                      className: "",
                      children: (0, r.jsxs)("div", {
                        className:
                          "container flex flex-col items-center justify-center gap-4 pb-8 pt-4",
                        children: [
                          (0, r.jsx)(i.Web3ConnectMain, {
                            className: "w-full",
                            fullOnMobile: !0,
                          }),
                          a.map((e) =>
                            (0, r.jsx)(
                              b.HeaderLink,
                              { className: "w-full", link: e },
                              e.href
                            )
                          ),
                          (0, r.jsx)(E, { variant: "dark", size: "header" }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    95567: (e, t, a) => {
      "use strict";
      a.d(t, { a: () => i });
      var r = a(95155),
        s = a(31027),
        n = a(21567);
      let l = (0, s.F)(
          "inline-block animate-spin rounded-[50%] border-[0.15em] border-transparent",
          {
            variants: {
              variant: {
                default: "border-primary/10 border-t-primary",
                primary: "border-primary/10 border-t-primary",
                black: "border-black/10 border-t-black",
                white: "border-white/10 border-t-white",
              },
              size: {
                sm: "h-[8px] w-[8px] text-[8px]",
                12: "h-[12px] w-[12px] text-[12px]",
                16: "h-[16px] w-[16px] text-[16px]",
                md: "h-[20px] w-[20px] text-[20px]",
                default: "h-[20px] w-[20px] text-[20px]",
                lg: "h-[24px] w-[24px] text-[24px]",
                xl: "h-[48px] w-[48px] text-[48px]",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        i = (e) => {
          let { className: t, ...a } = e;
          return (0, r.jsx)("span", { className: (0, n.cn)(l(a), t) });
        };
    },
    36060: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => c });
      var r = a(95155),
        s = a(7266),
        n = a(76046),
        l = a(12115),
        i = a(37528),
        o = a(45887),
        d = a(21567);
      function c(e) {
        let { className: t, children: a, defaultValue: c, label: p } = e,
          u = (0, s.useLocale)(),
          m = (0, o.rd)(),
          [h, x] = (0, l.useTransition)(),
          f = (0, o.a8)(),
          b = (0, n.useParams)();
        return (0, r.jsxs)(i.l6, {
          defaultValue: c,
          onValueChange: function (e) {
            e !== u &&
              x(() => {
                m.replace({ pathname: f, params: b }, { locale: e });
              });
          },
          children: [
            (0, r.jsx)(i.bq, {
              className: (0, d.cn)("w-[100px] flex-none p-0", t),
              children: (0, r.jsx)(i.yv, {
                className: "items-center whitespace-nowrap",
                placeholder: p,
              }),
            }),
            (0, r.jsx)(i.gC, { children: a }),
          ],
        });
      }
    },
    73312: (e, t, a) => {
      "use strict";
      a.d(t, { $: () => c, r: () => d });
      var r = a(95155),
        s = a(12317),
        n = a(31027),
        l = a(12115),
        i = a(21567),
        o = a(95567);
      let d = (0, n.F)(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground hover:bg-primary/10 uppercase hover:text-primary border border-primary",
                "default-outline":
                  "border border-primary text-primary bg-transparent hover:bg-primary hover:text-black",
                destructive:
                  "bg-red-500 text-primary-foreground hover:bg-red-500/90",
                outline:
                  "border border-neutral-200 bg-white hover:bg-neutral-100",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                "secondary-transparent":
                  "bg-transparent text-secondary-foreground/80 hover:bg-secondary/80 hover:text-secondary-foreground",
                "primary-text": "text-primary hover:underline !px-0 !py-0",
                ghost:
                  "hover:bg-secondary hover:text-primary dark:hover:bg-neutral-800",
                "white-outline":
                  "border border-white text-white bg-transparent hover:bg-white hover:text-black",
              },
              size: {
                default: "px-6 py-3 rounded-[30px]",
                buy: "px-6 py-4 rounded-[30px] text-[12px]",
                xs: "rounded-[20px] py-1 px-2 text-[14px] font-light leading-none",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        c = (0, l.forwardRef)((e, t) => {
          let {
              className: a,
              variant: n,
              size: l,
              asChild: c = !1,
              isLoading: p,
              type: u,
              children: m,
              ...h
            } = e,
            x = c ? s.DX : "button";
          return (0, r.jsx)(x, {
            ...h,
            className: (0, i.cn)(
              d({ variant: n, size: l }),
              { "pointer-events-none relative text-opacity-0": p },
              a
            ),
            ref: t,
            type: null != u ? u : "button",
            children: (0, r.jsxs)(r.Fragment, {
              children: [
                m,
                p &&
                  (0, r.jsx)("span", {
                    className:
                      "_abs0000 inline-flex items-center justify-center",
                    children: (0, r.jsx)(o.a, { variant: "black" }),
                  }),
              ],
            }),
          });
        });
      c.displayName = "Button";
    },
    51344: (e, t, a) => {
      "use strict";
      a.d(t, {
        Cf: () => u,
        Gj: () => f,
        L3: () => h,
        c7: () => m,
        lG: () => o,
        rr: () => x,
        zM: () => d,
      });
      var r = a(95155),
        s = a(42833),
        n = a(40767),
        l = a(12115),
        i = a(21567);
      let o = s.bL,
        d = s.l9,
        c = s.ZL;
      s.bm;
      let p = (0, l.forwardRef)((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)(s.hJ, {
          ref: t,
          className: (0, i.cn)(
            "z-dialog fixed inset-0 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            a
          ),
          ...n,
        });
      });
      p.displayName = s.hJ.displayName;
      let u = (0, l.forwardRef)((e, t) => {
        let { className: a, children: l, ...o } = e;
        return (0, r.jsxs)(c, {
          children: [
            (0, r.jsx)(p, {}),
            (0, r.jsxs)(s.UC, {
              ref: t,
              className: (0, i.cn)(
                "z-dialog fixed left-[50%] top-[50%] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 overflow-hidden border border-primary bg-black p-6 text-white shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                a
              ),
              ...o,
              children: [
                l,
                (0, r.jsxs)(s.bm, {
                  className:
                    "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-500 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-400",
                  children: [
                    (0, r.jsx)(n.A, { className: "h-4 w-4" }),
                    (0, r.jsx)("span", {
                      className: "sr-only",
                      children: "Close",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      });
      u.displayName = s.UC.displayName;
      let m = (e) => {
        let { className: t, ...a } = e;
        return (0, r.jsx)("div", {
          className: (0, i.cn)(
            "flex flex-col space-y-1.5 text-center sm:text-left",
            t
          ),
          ...a,
        });
      };
      m.displayName = "DialogHeader";
      let h = (0, l.forwardRef)((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)(s.hE, {
          ref: t,
          className: (0, i.cn)(
            "text-lg font-semibold leading-none tracking-tight",
            a
          ),
          ...n,
        });
      });
      h.displayName = s.hE.displayName;
      let x = (0, l.forwardRef)((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)(s.VY, {
          ref: t,
          className: (0, i.cn)(
            "text-sm text-neutral-500 dark:text-neutral-400",
            a
          ),
          ...n,
        });
      });
      x.displayName = s.VY.displayName;
      let f = (e) => {
        let {
          className: t,
          noPadding: a,
          children: s,
          autoOverflow: n = !0,
        } = e;
        return (0, r.jsx)("div", {
          className: (0, i.cn)(
            {
              "flex-auto overflow-auto": n,
              "flex-none": !n,
              "py-2": !a,
              "-mx-6 w-[calc(100%+3rem)]": a,
            },
            t
          ),
          children: s,
        });
      };
      f.displayName = "DialogPadding";
    },
    37528: (e, t, a) => {
      "use strict";
      a.d(t, {
        SelectItem: () => f,
        bq: () => u,
        gC: () => x,
        l6: () => c,
        yv: () => p,
      });
      var r = a(95155),
        s = a(72691),
        n = a(51719),
        l = a(91902),
        i = a(98867),
        o = a(12115),
        d = a(21567);
      let c = s.bL;
      s.YJ;
      let p = s.WT,
        u = o.forwardRef((e, t) => {
          let { className: a, children: l, ...i } = e;
          return (0, r.jsxs)(s.l9, {
            ref: t,
            className: (0, d.cn)(
              "placeholder:secondary-foreground flex min-h-6 w-full items-center justify-between whitespace-nowrap rounded-md bg-transparent px-3 py-2 leading-none shadow-sm ring-offset-black focus:outline-none focus:ring-1 focus:ring-black disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
              a
            ),
            ...i,
            children: [
              l,
              (0, r.jsx)(s.In, {
                asChild: !0,
                children: (0, r.jsx)(n.A, { className: "h-4 w-4 opacity-50" }),
              }),
            ],
          });
        });
      u.displayName = s.l9.displayName;
      let m = o.forwardRef((e, t) => {
        let { className: a, ...n } = e;
        return (0, r.jsx)(s.PP, {
          ref: t,
          className: (0, d.cn)(
            "flex cursor-default items-center justify-center py-1",
            a
          ),
          ...n,
          children: (0, r.jsx)(l.A, { className: "h-4 w-4" }),
        });
      });
      m.displayName = s.PP.displayName;
      let h = o.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, r.jsx)(s.wn, {
          ref: t,
          className: (0, d.cn)(
            "flex cursor-default items-center justify-center py-1",
            a
          ),
          ...l,
          children: (0, r.jsx)(n.A, { className: "h-4 w-4" }),
        });
      });
      h.displayName = s.wn.displayName;
      let x = o.forwardRef((e, t) => {
        let { className: a, children: n, position: l = "popper", ...i } = e;
        return (0, r.jsx)(s.ZL, {
          children: (0, r.jsxs)(s.UC, {
            ref: t,
            className: (0, d.cn)(
              "z-headerSelect border-secondary-border relative max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-secondary text-secondary-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              "popper" === l &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
              a
            ),
            position: l,
            ...i,
            children: [
              (0, r.jsx)(m, {}),
              (0, r.jsx)(s.LM, {
                className: (0, d.cn)(
                  "p-1",
                  "popper" === l &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                ),
                children: n,
              }),
              (0, r.jsx)(h, {}),
            ],
          }),
        });
      });
      (x.displayName = s.UC.displayName),
        (o.forwardRef((e, t) => {
          let { className: a, ...n } = e;
          return (0, r.jsx)(s.JU, {
            ref: t,
            className: (0, d.cn)("px-2 py-1.5 font-semibold", a),
            ...n,
          });
        }).displayName = s.JU.displayName);
      let f = o.forwardRef((e, t) => {
        let { className: a, children: n, ...l } = e;
        return (0, r.jsxs)(s.q7, {
          ref: t,
          className: (0, d.cn)(
            "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 outline-none focus:bg-neutral-100/10 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            a
          ),
          ...l,
          children: [
            (0, r.jsx)("span", {
              className:
                "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
              children: (0, r.jsx)(s.VF, {
                children: (0, r.jsx)(i.A, { className: "h-4 w-4" }),
              }),
            }),
            (0, r.jsx)(s.p4, { children: n }),
          ],
        });
      });
      (f.displayName = s.q7.displayName),
        (o.forwardRef((e, t) => {
          let { className: a, ...n } = e;
          return (0, r.jsx)(s.wv, {
            ref: t,
            className: (0, d.cn)(
              "-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-800",
              a
            ),
            ...n,
          });
        }).displayName = s.wv.displayName);
    },
    76795: (e, t, a) => {
      "use strict";
      a.d(t, { Toaster: () => l });
      var r = a(95155),
        s = a(67113),
        n = a(30814);
      let l = (e) => {
        let { ...t } = e,
          { theme: a = "system" } = (0, s.D)();
        return (0, r.jsx)(n.l$, {
          theme: a,
          className: "toaster group",
          toastOptions: {
            classNames: {
              toast:
                "group toast group-[.toaster]:bg-white group-[.toaster]:text-neutral-950 group-[.toaster]:border-neutral-200 group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-neutral-950 dark:group-[.toaster]:text-neutral-50 dark:group-[.toaster]:border-neutral-800",
              description:
                "group-[.toast]:text-neutral-500 dark:group-[.toast]:text-neutral-400",
              actionButton:
                "group-[.toast]:bg-neutral-900 group-[.toast]:text-neutral-50 dark:group-[.toast]:bg-neutral-50 dark:group-[.toast]:text-neutral-900",
              cancelButton:
                "group-[.toast]:bg-neutral-100 group-[.toast]:text-neutral-500 dark:group-[.toast]:bg-neutral-800 dark:group-[.toast]:text-neutral-400",
            },
          },
          ...t,
        });
      };
    },
    76874: (e, t, a) => {
      "use strict";
      a.d(t, { XZ: () => r, aU: () => s });
      let r = {
        title: "AI Pump",
        appUrl: "https://app.aipump.ai",
        homeUrl: "https://www.aipump.ai",
        tokenSymbol: "AIPUMP",
        support: { email: "support@aipump.ai" },
        socials: {
          x: "https://x.com/aiPump__",
          telegram: "http://t.me/aiPumpchat",
        },
      };
      r.title, r.title;
      let s = { nodePointsPerHPerK: 100, nodePointsPerRedemption: 1e5 };
    },
    45887: (e, t, a) => {
      "use strict";
      a.d(t, { DT: () => s, a8: () => o, rd: () => d });
      var r = a(31182);
      let s = (0, a(55433).o)({ locales: ["en", "zh"], defaultLocale: "en" }),
        {
          Link: n,
          getPathname: l,
          redirect: i,
          usePathname: o,
          useRouter: d,
        } = (0, r.xp)(s);
    },
    21567: (e, t, a) => {
      "use strict";
      a.d(t, { cn: () => n });
      var r = a(43463),
        s = a(69795);
      function n() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, s.QP)((0, r.$)(t));
      }
    },
    63786: (e, t, a) => {
      "use strict";
      let r;
      a.d(t, { Web3Providers: () => A });
      var s,
        n,
        l,
        i,
        o,
        d,
        c,
        p = a(95155),
        u = a(64276),
        m = a(22779);
      a(85035);
      var h = a(13223),
        x = a(35906),
        f = a(33832),
        b = a(5565);
      let g = (e) => {
        let { ensImage: t, size: a } = e;
        return t
          ? (0, p.jsx)("img", {
              src: t,
              width: a,
              height: a,
              style: { borderRadius: 999 },
              alt: "Avatar",
            })
          : (0, p.jsx)("div", {
              className: "relative overflow-hidden rounded-[50%]",
              style: { height: a, width: a },
              children: (0, p.jsx)(b.default, {
                src: "/favicon.ico",
                quality: 100,
                width: a,
                height: a,
                className: "object-cover object-center",
                alt: "Avatar",
              }),
            });
      };
      var v = a(76874),
        y = a(57101),
        N = a(65248),
        w = a(92188),
        j = a(96355),
        C = a(45125);
      let L = {
          1: [
            (0, w.K)("wss://ethereum-rpc.publicnode.com"),
            (0, j.L)("https://eth.llamarpc.com"),
            (0, j.L)("https://eth-pokt.nodies.app"),
            (0, j.L)("https://ethereum-rpc.publicnode.com"),
            (0, j.L)("https://rpc.ankr.com/eth"),
          ],
          56: [
            (0, w.K)("wss://bsc-rpc.publicnode.com"),
            (0, j.L)("https://binance.llamarpc.com"),
            (0, j.L)("https://bsc-pokt.nodies.app"),
            (0, j.L)("https://endpoints.omniatech.io/v1/bsc/mainnet/public"),
          ],
          97: [
            (0, w.K)("wss://bsc-testnet-rpc.publicnode.com"),
            (0, j.L)("https://bsc-testnet-rpc.publicnode.com"),
            (0, j.L)("https://endpoints.omniatech.io/v1/bsc/testnet/public"),
          ],
          2800: [(0, j.L)("https://rpc.layerai.org")],
          2828: [(0, j.L)("https://rpc-testnet.layerai.org")],
          8453: [
            (0, j.L)("https://base.llamarpc.com"),
            (0, j.L)("https://base-rpc.publicnode.com"),
          ],
          84532: [(0, j.L)("https://sepolia.base.org")],
        },
        k = {
          1: (0, C.N)(null !== (s = L[1]) && void 0 !== s ? s : []),
          56: (0, C.N)(null !== (n = L[56]) && void 0 !== n ? n : []),
          97: (0, C.N)(null !== (l = L[97]) && void 0 !== l ? l : []),
          2800: (0, C.N)(null !== (i = L[2800]) && void 0 !== i ? i : []),
          2828: (0, C.N)(null !== (o = L[2828]) && void 0 !== o ? o : []),
          8453: (0, C.N)(null !== (d = L[8453]) && void 0 !== d ? d : []),
          84532: (0, C.N)(null !== (c = L[84532]) && void 0 !== c ? c : []),
        },
        _ = N.hL.reduce((e, t) => ((e[t] = k[t]), e), {}),
        E = (0, u.Y8)({
          chains: N.Km,
          appName: v.XZ.title,
          projectId: y._.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
          ssr: !0,
          transports: _,
        }),
        P = () => (null != r ? r : (r = new h.E())),
        A = (e) => {
          let { children: t } = e,
            a = P();
          return (0, p.jsx)(f.WagmiProvider, {
            config: E,
            children: (0, p.jsx)(x.QueryClientProvider, {
              client: a,
              children: (0, p.jsx)(u.qL, {
                avatar: g,
                modalSize: "compact",
                theme: (0, m.A)({
                  accentColor: "#FF9228",
                  accentColorForeground: "#000",
                  fontStack: "system",
                }),
                children: t,
              }),
            }),
          });
        };
    },
    28469: (e, t, a) => {
      "use strict";
      a.d(t, { Web3ConnectMain: () => c });
      var r = a(95155),
        s = a(64276),
        n = a(51719),
        l = a(7266),
        i = a(5565),
        o = a(73312),
        d = a(21567);
      let c = (e) => {
        let { className: t, fullOnMobile: a } = e,
          { openConnectModal: c } = (0, s.Vx)(),
          p = (0, l.useTranslations)();
        return (0, r.jsx)(s.pK.Custom, {
          children: (e) => {
            let {
                account: s,
                chain: l,
                openChainModal: u,
                openAccountModal: m,
                authenticationStatus: h,
                mounted: x,
              } = e,
              f = x && "loading" !== h,
              b = f && s && l && (!h || "authenticated" === h);
            return (0, r.jsx)("div", {
              ...(!f && {
                "aria-hidden": !0,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              }),
              className: t,
              children: (() => {
                var e, t;
                return b
                  ? (0, r.jsxs)("div", {
                      className: (0, d.cn)(
                        (0, o.r)({ variant: "default-outline" }),
                        "flex-stretch bg-theme-black/20 flex gap-4 rounded-[30px] p-2 hover:bg-transparent hover:text-primary"
                      ),
                      children: [
                        (0, r.jsx)("button", {
                          onClick: u,
                          className: (0, d.cn)(
                            "flex h-[36px] w-[36px] flex-none items-center justify-center gap-[4px] rounded-[30px] bg-transparent bg-none transition-all hover:scale-125",
                            { "bg-red-600": l.unsupported }
                          ),
                          type: "button",
                          title: l.name,
                          style: l.unsupported
                            ? {}
                            : {
                                backgroundColor:
                                  null !== (e = l.iconBackground) &&
                                  void 0 !== e
                                    ? e
                                    : "transparent",
                              },
                          children:
                            !l.unsupported &&
                            l.hasIcon &&
                            l.iconUrl &&
                            (0, r.jsx)(i.default, {
                              alt:
                                null !== (t = l.name) && void 0 !== t
                                  ? t
                                  : "Chain icon",
                              src: l.iconUrl,
                              width: 32,
                              height: 32,
                              className: "block",
                            }),
                        }),
                        (0, r.jsxs)("button", {
                          className: (0, d.cn)(
                            "flex flex-auto flex-nowrap items-center justify-between gap-2 text-primary transition-all hover:text-white"
                          ),
                          onClick: l.unsupported ? u : m,
                          children: [
                            (0, r.jsxs)("span", {
                              className: (0, d.cn)(
                                "flex-auto flex-col items-start text-[14px] leading-[1em]",
                                { "hidden sm:flex": !a, flex: a }
                              ),
                              children: [
                                (0, r.jsx)("span", {
                                  title: l.unsupported ? void 0 : l.name,
                                  className: (0, d.cn)(
                                    "overflow-hidden text-ellipsis text-nowrap",
                                    {
                                      "max-w-[150px] font-semibold uppercase text-red-600":
                                        l.unsupported,
                                      "opacity-80 sm:max-w-[100px]":
                                        !l.unsupported,
                                    }
                                  ),
                                  children: l.unsupported
                                    ? p("Wallet.WrongNetwork")
                                    : l.name,
                                }),
                                (0, r.jsx)("span", {
                                  title: s.address,
                                  className: "font-medium",
                                  children: s.displayName,
                                }),
                              ],
                            }),
                            (0, r.jsx)("span", {
                              className: "flex-none",
                              children: (0, r.jsx)(n.A, { className: "" }),
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, r.jsx)(o.$, {
                      className: "flex items-center gap-4 uppercase",
                      onClick: c,
                      size: "buy",
                      children: p("Wallet.ConnectWallet"),
                    });
              })(),
            });
          },
        });
      };
    },
    65248: (e, t, a) => {
      "use strict";
      a.d(t, {
        Km: () => y,
        Pw: () => n,
        eL: () => d,
        hL: () => g,
        nU: () => s,
        yk: () => i,
      });
      var r = a(57101),
        s = (function (e) {
          return (
            (e[(e.Mainnet = 1)] = "Mainnet"),
            (e[(e.Binance = 56)] = "Binance"),
            (e[(e.BinanceTestnet = 97)] = "BinanceTestnet"),
            (e[(e.LaiMainnet = 2800)] = "LaiMainnet"),
            (e[(e.LaiTestnet = 2828)] = "LaiTestnet"),
            (e[(e.Base = 8453)] = "Base"),
            (e[(e.BaseTestnet = 84532)] = "BaseTestnet"),
            e
          );
        })({});
      let n = r._.NEXT_PUBLIC_EVM_CHAINS,
        l = {
          1: "Ethereum Mainnet",
          56: "Binance Smart Chain",
          97: "Binance Smart Chain Testnet",
          2800: "LAI Mainnet",
          2828: "LAI Testnet",
          8453: "Base",
          84532: "Base Testnet",
        };
      function i(e) {
        var t;
        return void 0 === e
          ? "unknown"
          : null !== (t = l[e]) && void 0 !== t
          ? t
          : "unknown";
      }
      let o = {
        1: "ETH",
        56: "BSC",
        97: "BSCT",
        2800: "LAI",
        2828: "LAIT",
        8453: "BASE",
        84532: "BASET",
      };
      function d(e) {
        var t;
        return void 0 === e
          ? "unknown"
          : null !== (t = o[e]) && void 0 !== t
          ? t
          : "unknown";
      }
      let c = {
          id: 1,
          name: i(1),
          nativeCurrency: { decimals: 18, name: "Ethereum", symbol: "ETH" },
          rpcUrls: {
            default: { http: ["https://eth.llamarpc.com"] },
            public: { http: ["https://eth.llamarpc.com"] },
          },
          blockExplorers: {
            default: { name: "Etherscan", url: "https://https://etherscan.io" },
          },
        },
        p = {
          id: 56,
          name: i(56),
          nativeCurrency: { name: "Binance Coin", symbol: "BNB", decimals: 18 },
          rpcUrls: {
            default: { http: ["https://bsc-dataseed.binance.org/"] },
            public: { http: ["https://bsc-dataseed.binance.org/"] },
          },
          blockExplorers: {
            default: {
              name: "BNB Smart Chain Explorer",
              url: "https://bscscan.com",
            },
          },
        },
        u = {
          id: 97,
          name: i(97),
          nativeCurrency: {
            name: "Binance Coin Test",
            symbol: "tBNB",
            decimals: 18,
          },
          rpcUrls: {
            default: {
              http: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
            },
            public: {
              http: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
            },
          },
          blockExplorers: {
            default: {
              name: "BNB Smart Chain Testnet Explorer",
              url: "https://testnet.bscscan.com",
            },
          },
          testnet: !0,
        },
        m = {
          id: 2800,
          name: i(2800),
          nativeCurrency: { decimals: 18, name: "LayerAI", symbol: "LAI" },
          rpcUrls: {
            default: { http: ["https://rpc.layerai.org"] },
            public: { http: ["https://rpc.layerai.org"] },
          },
          blockExplorers: {
            default: { name: "Explorer", url: "https://explorer.layerai.org" },
          },
        },
        h = {
          id: 2828,
          name: i(2828),
          nativeCurrency: { decimals: 18, name: "LayerAI", symbol: "LAIT" },
          rpcUrls: {
            default: { http: ["https://rpc-testnet.layerai.org"] },
            public: { http: ["https://rpc-testnet.layerai.org"] },
          },
          blockExplorers: {
            default: {
              name: "Explorer",
              url: "https://explorer-testnet.layerai.org",
            },
          },
          testnet: !0,
        },
        x = {
          id: 8453,
          name: i(8453),
          nativeCurrency: { decimals: 18, name: "Base", symbol: "BASE" },
          rpcUrls: {
            default: { http: ["https://base.llamarpc.com"] },
            public: { http: ["https://base.llamarpc.com"] },
          },
          blockExplorers: {
            default: { name: "Explorer", url: "https://base.blockscout.com/" },
          },
        };
      function f(e) {
        return {
          ...e,
          iconUrl: (function (e) {
            let t = "/assets/networks/";
            switch (e) {
              case 1:
                return "".concat(t, "eth.svg");
              case 97:
              case 56:
                return "".concat(t, "bsc.svg");
              case 2800:
              case 2828:
                return "".concat(t, "lai.png");
              case 8453:
              case 84532:
                return "".concat(t, "base.png");
              default:
                return "";
            }
          })(e.id),
          iconBackground: (function (e) {
            switch (e) {
              case 1:
                return "#517BE8";
              case 56:
              case 97:
                return "#f4bb2b";
              case 2800:
              case 2828:
                return "#000";
              default:
                return "#fff";
            }
          })(e.id),
        };
      }
      let b = [
          c,
          p,
          u,
          m,
          h,
          x,
          {
            id: 84532,
            name: i(84532),
            nativeCurrency: { decimals: 18, name: "BaseT", symbol: "BASET" },
            rpcUrls: {
              default: { http: ["https://sepolia.base.org"] },
              public: { http: ["https://sepolia.base.org"] },
            },
            blockExplorers: {
              default: {
                name: "Explorer",
                url: "https://sepolia-explorer.base.org",
              },
            },
          },
        ],
        g = b.filter((e) => n.includes(e.id)).map((e) => e.id),
        v = b.filter((e) => n.includes(e.id));
      b.map(f);
      let y = v.map(f);
    },
    97810: (e, t, a) => {
      "use strict";
      let r;
      a.d(t, { TRPCReactProvider: () => x, F: () => h });
      var s = a(95155),
        n = a(35906),
        l = a(95145),
        i = a(61456),
        o = a(12115),
        d = a(23806),
        c = a(13223),
        p = a(79876);
      let u = () =>
        new c.E({
          defaultOptions: {
            queries: { staleTime: 3e4 },
            dehydrate: {
              serializeData: d.Ay.serialize,
              shouldDehydrateQuery: (e) =>
                (0, p.XS)(e) || "pending" === e.state.status,
            },
            hydrate: { deserializeData: d.Ay.deserialize },
          },
        });
      a(2818);
      let m = () => (null != r ? r : (r = u())),
        h = (0, i.pY)();
      function x(e) {
        let t = m(),
          [a] = (0, o.useState)(() =>
            h.createClient({
              links: [
                (0, l.$H)({
                  enabled: (e) =>
                    "down" === e.direction && e.result instanceof Error,
                }),
                (0, l.kM)({
                  transformer: d.Ay,
                  url: window.location.origin + "/api/trpc",
                  headers: () => {
                    let e = new Headers();
                    return e.set("x-trpc-source", "nextjs-react"), e;
                  },
                }),
              ],
            })
          );
        return (0, s.jsx)(n.QueryClientProvider, {
          client: t,
          children: (0, s.jsx)(h.Provider, {
            client: a,
            queryClient: t,
            children: e.children,
          }),
        });
      }
    },
    57101: (e, t, a) => {
      "use strict";
      a.d(t, { _: () => l });
      var r = a(23576),
        s = a(43415),
        n = a(2818);
      let l = (0, r.w)({
        server: {
          DATABASE_URL: s.z.string().url(),
          NODE_ENV: s.z
            .enum(["development", "test", "production"])
            .default("development"),
          API_PSK: s.z.string().default(""),
          MORALIS_API_KEY: s.z.string(),
        },
        client: {
          NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID: s.z.string().default("todo"),
          NEXT_PUBLIC_EVM_CHAINS: s.z.string().transform((e) =>
            e
              .split(",")
              .filter((e) => !isNaN(parseInt(e)))
              .map((e) => parseInt(e))
          ),
          NEXT_PUBLIC_VERCEL_ENV: s.z.string().default("development"),
        },
        runtimeEnv: {
          DATABASE_URL: n.env.DATABASE_URL,
          NODE_ENV: "production",
          API_PSK: n.env.API_PSK,
          MORALIS_API_KEY: n.env.MORALIS_API_KEY,
          NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID:
            n.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
          NEXT_PUBLIC_EVM_CHAINS: "8453",
          NEXT_PUBLIC_VERCEL_ENV: "production",
        },
        skipValidation: !!n.env.SKIP_ENV_VALIDATION,
        emptyStringAsUndefined: !0,
      });
    },
  },
]);
