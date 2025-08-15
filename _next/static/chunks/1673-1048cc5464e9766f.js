"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1673],
  {
    69481: (e, t, r) => {
      r.d(t, { a: () => i });
      var n = r(95155),
        a = r(31027),
        l = r(21567);
      let s = (0, a.F)("", {
          variants: {
            variant: {
              default: "border border-primary bg-black/50",
              secondary: "bg-secondary border border-[#908D864D]",
            },
            size: {
              default: "p-4 md:p-6 rounded-[40px]",
              sm: "p-4 md:p-6 rounded-[20px]",
            },
          },
          defaultVariants: { variant: "default", size: "default" },
        }),
        i = (e) => {
          let {
            variant: t,
            size: r,
            as: a = "div",
            className: i,
            children: o,
          } = e;
          return (0, n.jsx)(a, {
            className: (0, l.cn)(s({ variant: t, size: r }), i),
            children: o,
          });
        };
    },
    95567: (e, t, r) => {
      r.d(t, { a: () => i });
      var n = r(95155),
        a = r(31027),
        l = r(21567);
      let s = (0, a.F)(
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
          let { className: t, ...r } = e;
          return (0, n.jsx)("span", { className: (0, l.cn)(s(r), t) });
        };
    },
    87977: (e, t, r) => {
      r.d(t, { m: () => l });
      var n = r(95155),
        a = r(21567);
      let l = (e) => {
        let {
          title: t,
          value: r,
          valueHover: l,
          classNameTitle: s,
          classNameValue: i,
        } = e;
        return (0, n.jsxs)("div", {
          className:
            "flex flex-col items-start justify-start gap-2 xl:flex-col-reverse xl:items-center xl:justify-end",
          children: [
            (0, n.jsx)("div", {
              className: (0, a.cn)(
                "text-[18px] uppercase leading-none text-white xl:max-w-[150px] xl:text-center",
                s
              ),
              children: t,
            }),
            (0, n.jsx)("div", {
              className: (0, a.cn)("text-[60px] leading-none text-white", i),
              title: l,
              children: null != r ? r : "-",
            }),
          ],
        });
      };
    },
    42612: (e, t, r) => {
      r.d(t, { K: () => a, t: () => l });
      var n = r(30814);
      function a(e) {
        n.oR.error(
          (function (e) {
            if (
              "object" == typeof e &&
              null !== e &&
              "message" in e &&
              "string" == typeof e.message
            )
              return e;
            try {
              return Error(JSON.stringify(e));
            } catch (t) {
              return Error(String(e));
            }
          })(e).message,
          { duration: 3e4 }
        );
      }
      function l(e) {
        n.oR.success(e);
      }
    },
    73312: (e, t, r) => {
      r.d(t, { $: () => u, r: () => c });
      var n = r(95155),
        a = r(12317),
        l = r(31027),
        s = r(12115),
        i = r(21567),
        o = r(95567);
      let c = (0, l.F)(
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
        u = (0, s.forwardRef)((e, t) => {
          let {
              className: r,
              variant: l,
              size: s,
              asChild: u = !1,
              isLoading: d,
              type: p,
              children: h,
              ...m
            } = e,
            x = u ? a.DX : "button";
          return (0, n.jsx)(x, {
            ...m,
            className: (0, i.cn)(
              c({ variant: l, size: s }),
              { "pointer-events-none relative text-opacity-0": d },
              r
            ),
            ref: t,
            type: null != p ? p : "button",
            children: (0, n.jsxs)(n.Fragment, {
              children: [
                h,
                d &&
                  (0, n.jsx)("span", {
                    className:
                      "_abs0000 inline-flex items-center justify-center",
                    children: (0, n.jsx)(o.a, { variant: "black" }),
                  }),
              ],
            }),
          });
        });
      u.displayName = "Button";
    },
    21567: (e, t, r) => {
      r.d(t, { cn: () => l });
      var n = r(43463),
        a = r(69795);
      function l() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, a.QP)((0, n.$)(t));
      }
    },
    74736: (e, t, r) => {
      r.d(t, { Dy: () => o, Pt: () => s, bC: () => i });
      var n = r(7801),
        a = r.n(n);
      function l(e) {
        let {
          value: t,
          symbol: r = "",
          maxDecimals: n = 3,
          showAllDecimals: l = !1,
          withAbbreviation: s = !1,
          abbreviationLowerBound: i = 1e5,
          withThousandsSeparator: o = !0,
          placeholder: c = "-.--",
          debug: u,
        } = e;
        if (null == t) return c;
        let d = String(t),
          p = a()(d).value(),
          h = o ? "0,0" : "0",
          m = "";
        if (n > 0) {
          m = "";
          for (let e = 0; e < n; e++) m += "0";
          m = l ? ".".concat(m) : ".[".concat(m, "]");
        }
        let x = !!p && p >= i && s,
          f = ""
            .concat(h)
            .concat(m)
            .concat(x ? "a" : ""),
          b = a()(d).format(f),
          v =
            l || a()(b).value() !== parseInt(d)
              ? b
              : a()(d).format(
                  ""
                    .concat(h)
                    .concat(m)
                    .concat(x ? "a" : "")
                ),
          y = a()(v).value(),
          g =
            "NaN" === v || (null != y && 0 === y && null != p && p > 0)
              ? "<0".concat(m.replace(/\[|\]/gm, "").replace(/0$/gm, "1"))
              : v;
        return (
          u &&
            console.log({
              value: t,
              parsed: d,
              parsedValue: p,
              wholeFormat: h,
              decimalsFormat: m,
              withAbbreviation: x,
              format: f,
              result_: b,
              result__: v,
              result: g,
            }),
          "".concat(g.toUpperCase()).concat(r ? " " + r : "")
        );
      }
      function s(e) {
        let {
          maxDecimals: t = 2,
          showAllDecimals: r = !0,
          withAbbreviation: n = !0,
          abbreviationLowerBound: a = 1e5,
          withThousandsSeparator: s = !0,
          ...i
        } = e;
        return l({
          maxDecimals: t,
          showAllDecimals: r,
          withAbbreviation: n,
          abbreviationLowerBound: a,
          withThousandsSeparator: s,
          ...i,
        });
      }
      function i(e) {
        var t;
        let {
            maxDecimals: r = 1,
            showAllDecimals: n = !1,
            withAbbreviation: s = !0,
            abbreviationLowerBound: i = 1e3,
            withThousandsSeparator: o = !0,
            ...c
          } = e,
          u = l({
            ...c,
            maxDecimals: r,
            showAllDecimals: n,
            withAbbreviation: s,
            abbreviationLowerBound: i,
            withThousandsSeparator: o,
          }),
          d =
            null !== (t = a()(u.toLowerCase()).value()) && void 0 !== t ? t : 0;
        if (d < i || d <= Number(c.value))
          return (
            c.debug &&
              console.log("displayAmountRoundDown EARLY", {
                parsed: d,
                result: u,
                value: c.value,
                maxDecimals: r,
                abbreviationLowerBound: i,
              }),
            u
          );
        let p = u.replace(/[^a-zA-Z]/g, ""),
          h = (function (e) {
            switch (e) {
              case "K":
                return 1e3;
              case "M":
                return 1e6;
              case "B":
                return 1e9;
              case "T":
                return 1e12;
              default:
                return 1;
            }
          })(p),
          m =
            h <= 2
              ? Math.floor(Number(c.value))
              : Math.floor(Number(c.value) / (h / 10 ** r)) * (h / 10 ** r);
        return (
          c.debug &&
            console.log("displayAmountRoundDown LATE", {
              floor: m,
              parsed: d,
              result: u,
              value: c.value,
              maxDecimals: r,
              abbreviationLowerBound: i,
              abbreviationLetter: p,
            }),
          l({
            ...c,
            value: m,
            maxDecimals: r,
            showAllDecimals: n,
            withAbbreviation: s,
            abbreviationLowerBound: i,
            withThousandsSeparator: o,
          })
        );
      }
      function o(e) {
        let t = Math.max(e.lastIndexOf("."), e.lastIndexOf(","));
        return t > 0 ? e.substring(t + 1) : "";
      }
    },
    84046: (e, t, r) => {
      r.d(t, { q: () => a });
      var n = r(12115);
      function a() {
        let [e, t] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            t(!0);
          }, []),
          e
        );
      }
    },
    41832: (e, t, r) => {
      r.d(t, { l: () => f });
      var n = r(95155),
        a = r(12115),
        l = r(35965),
        s = r(95567),
        i = r(84046),
        o = r(65248),
        c = r(7266),
        u = r(73103),
        d = r(73312),
        p = r(21567);
      let h = (e) => {
        let {
            className: t,
            chainId: r,
            size: a,
            preventDefault: l,
            networkNameLong: s,
          } = e,
          i = (0, c.useTranslations)(),
          { switchChain: h } = (0, u.useSwitchChain)(),
          m = s ? (0, o.yk)(r) : (0, o.eL)(r);
        return (0, n.jsx)(d.$, {
          className: (0, p.cn)(t),
          size: a,
          color: "gradient",
          onClick: (e) => {
            l && e.preventDefault(), h({ chainId: r });
          },
          children: i("Wallet.SwitchToChain", { chain: m }),
        });
      };
      var m = r(64276);
      let x = (e) => {
        let { classNameWrapper: t, className: r, preventDefault: s } = e,
          i = (0, c.useTranslations)(),
          { openConnectModal: o } = (0, m.Vx)(),
          { isConnected: u, isConnecting: h } = (0, l.useAccount)(),
          x = (0, a.useCallback)(
            (e) => {
              s && e.preventDefault(), null == o || o();
            },
            [s, o]
          );
        return u
          ? null
          : (0, n.jsx)(m.pK.Custom, {
              children: (e) => {
                let {
                    account: a,
                    chain: l,
                    authenticationStatus: s,
                    mounted: o,
                  } = e,
                  c = o && "loading" !== s,
                  u = c && a && l && (!s || "authenticated" === s);
                return (0, n.jsx)("div", {
                  ...(!c && {
                    "aria-hidden": !0,
                    style: {
                      opacity: 0,
                      pointerEvents: "none",
                      userSelect: "none",
                    },
                  }),
                  className: t,
                  children: (() => {
                    if (!u)
                      return (0, n.jsx)(d.$, {
                        isLoading: h,
                        onClick: x,
                        className: (0, p.cn)("uppercase", r),
                        size: "buy",
                        children: i("Wallet.ConnectWallet"),
                      });
                  })(),
                });
              },
            });
      };
      function f(e) {
        let {
            children: t,
            GuardWrapperComponent: r,
            guardWrapperProps: c,
            loaderProps: u,
            guardEnabled: d = !0,
            buttonProps: p,
            chainIds: m,
            childrenConnectWallet: f,
            childrenChangeChain: b,
            buttonChangeChainProps: v,
          } = e,
          { isConnected: y, chainId: g } = (0, l.useAccount)(),
          E = (0, i.q)(),
          _ = null != r ? r : "div",
          C = (0, a.useMemo)(
            () =>
              !g ||
              ((null == m ? void 0 : m.length)
                ? !m.includes(g)
                : !o.Pw.includes(g)),
            [m, g]
          );
        if (!d) return t;
        if (!E) {
          var A, N;
          return (0, n.jsx)(_, {
            ...c,
            children: (0, n.jsx)(s.a, {
              ...u,
              variant:
                null !== (A = null == u ? void 0 : u.variant) && void 0 !== A
                  ? A
                  : "default",
              size:
                null !== (N = null == u ? void 0 : u.size) && void 0 !== N
                  ? N
                  : "default",
            }),
          });
        }
        return y
          ? C
            ? (0, n.jsxs)(_, {
                ...c,
                children: [
                  b,
                  (0, n.jsx)("div", {
                    className:
                      "flex flex-wrap items-center justify-center gap-3",
                    children:
                      null == m
                        ? void 0
                        : m.map((e) =>
                            (0, n.jsx)(
                              h,
                              { chainId: e, size: "buy", ...p, ...v },
                              e
                            )
                          ),
                  }),
                ],
              })
            : t
          : (0, n.jsxs)(_, { ...c, children: [f, (0, n.jsx)(x, { ...p })] });
      }
    },
    65248: (e, t, r) => {
      r.d(t, {
        Km: () => g,
        Pw: () => l,
        eL: () => c,
        hL: () => v,
        nU: () => a,
        yk: () => i,
      });
      var n = r(57101),
        a = (function (e) {
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
      let l = n._.NEXT_PUBLIC_EVM_CHAINS,
        s = {
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
          : null !== (t = s[e]) && void 0 !== t
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
      function c(e) {
        var t;
        return void 0 === e
          ? "unknown"
          : null !== (t = o[e]) && void 0 !== t
          ? t
          : "unknown";
      }
      let u = {
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
        d = {
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
        p = {
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
        h = {
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
        m = {
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
          u,
          d,
          p,
          h,
          m,
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
        v = b.filter((e) => l.includes(e.id)).map((e) => e.id),
        y = b.filter((e) => l.includes(e.id));
      b.map(f);
      let g = y.map(f);
    },
    97810: (e, t, r) => {
      let n;
      r.d(t, { TRPCReactProvider: () => x, F: () => m });
      var a = r(95155),
        l = r(35906),
        s = r(95145),
        i = r(61456),
        o = r(12115),
        c = r(23806),
        u = r(13223),
        d = r(79876);
      let p = () =>
        new u.E({
          defaultOptions: {
            queries: { staleTime: 3e4 },
            dehydrate: {
              serializeData: c.Ay.serialize,
              shouldDehydrateQuery: (e) =>
                (0, d.XS)(e) || "pending" === e.state.status,
            },
            hydrate: { deserializeData: c.Ay.deserialize },
          },
        });
      r(2818);
      let h = () => (null != n ? n : (n = p())),
        m = (0, i.pY)();
      function x(e) {
        let t = h(),
          [r] = (0, o.useState)(() =>
            m.createClient({
              links: [
                (0, s.$H)({
                  enabled: (e) =>
                    "down" === e.direction && e.result instanceof Error,
                }),
                (0, s.kM)({
                  transformer: c.Ay,
                  url: window.location.origin + "/api/trpc",
                  headers: () => {
                    let e = new Headers();
                    return e.set("x-trpc-source", "nextjs-react"), e;
                  },
                }),
              ],
            })
          );
        return (0, a.jsx)(l.QueryClientProvider, {
          client: t,
          children: (0, a.jsx)(m.Provider, {
            client: r,
            queryClient: t,
            children: e.children,
          }),
        });
      }
    },
    57101: (e, t, r) => {
      r.d(t, { _: () => s });
      var n = r(23576),
        a = r(43415),
        l = r(2818);
      let s = (0, n.w)({
        server: {
          DATABASE_URL: a.z.string().url(),
          NODE_ENV: a.z
            .enum(["development", "test", "production"])
            .default("development"),
          API_PSK: a.z.string().default(""),
          MORALIS_API_KEY: a.z.string(),
        },
        client: {
          NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID: a.z.string().default("todo"),
          NEXT_PUBLIC_EVM_CHAINS: a.z.string().transform((e) =>
            e
              .split(",")
              .filter((e) => !isNaN(parseInt(e)))
              .map((e) => parseInt(e))
          ),
          NEXT_PUBLIC_VERCEL_ENV: a.z.string().default("development"),
        },
        runtimeEnv: {
          DATABASE_URL: l.env.DATABASE_URL,
          NODE_ENV: "production",
          API_PSK: l.env.API_PSK,
          MORALIS_API_KEY: l.env.MORALIS_API_KEY,
          NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID:
            l.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
          NEXT_PUBLIC_EVM_CHAINS: "8453",
          NEXT_PUBLIC_VERCEL_ENV: "production",
        },
        skipValidation: !!l.env.SKIP_ENV_VALIDATION,
        emptyStringAsUndefined: !0,
      });
    },
  },
]);
