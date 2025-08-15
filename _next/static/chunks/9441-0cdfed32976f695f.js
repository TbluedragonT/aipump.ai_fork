"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9441],
  {
    36487: (e, n, t) => {
      t.d(n, { n: () => c });
      var r = t(45732),
        a = t(48071),
        i = t(71885),
        o = t(91488),
        u = t(43247);
      async function c(e, n) {
        let { chainId: t, timeout: c = 0, ...s } = n,
          l = e.getClient({ chainId: t }),
          d = (0, u.T)(l, a.n, "waitForTransactionReceipt"),
          h = await d({ ...s, timeout: c });
        if ("reverted" === h.status) {
          let e = (0, u.T)(l, i.x, "getTransaction"),
            n = await e({ hash: h.transactionHash }),
            t = (0, u.T)(l, o.T, "call"),
            a = await t({
              ...n,
              data: n.input,
              gasPrice: "eip1559" !== n.type ? n.gasPrice : void 0,
              maxFeePerGas: "eip1559" === n.type ? n.maxFeePerGas : void 0,
              maxPriorityFeePerGas:
                "eip1559" === n.type ? n.maxPriorityFeePerGas : void 0,
            });
          throw Error(
            a?.data ? (0, r.IQ)(`0x${a.data.substring(138)}`) : "unknown reason"
          );
        }
        return { ...h, chainId: l.chain.id };
      }
    },
    21382: (e, n, t) => {
      t.d(n, { E: () => o });
      var r = t(43926),
        a = t(43247),
        i = t(16942);
      async function o(e, n) {
        let t;
        let { account: o, chainId: u, connector: c, ...s } = n;
        t =
          "object" == typeof o && o?.type === "local"
            ? e.getClient({ chainId: u })
            : await (0, i.r)(e, {
                account: o ?? void 0,
                chainId: u,
                connector: c,
              });
        let l = (0, a.T)(t, r.E, "writeContract");
        return await l({
          ...s,
          ...(o ? { account: o } : {}),
          chain: u ? { id: u } : null,
        });
      }
    },
    24152: (e, n, t) => {
      t.d(n, { c: () => i });
      var r = t(62937),
        a = t(51587);
      function i(e, n) {
        let { abi: t, args: i, bytecode: o, ...u } = n,
          c = (0, r.m)({ abi: t, args: i, bytecode: o });
        return (0, a.v)(e, { ...u, data: c });
      }
    },
    51587: (e, n, t) => {
      t.d(n, { v: () => w });
      var r = t(98722),
        a = t(66734),
        i = t(80477),
        o = t(53559),
        u = t(57325),
        c = t(87939),
        s = t(45757),
        l = t(90563),
        d = t(24058),
        h = t(53864),
        f = t(72447),
        y = t(46140),
        v = t(73056),
        g = t(30733),
        C = t(46636),
        I = t(29665);
      let p = new y.A(128);
      async function w(e, n) {
        let {
          account: t = e.account,
          chain: y = e.chain,
          accessList: w,
          authorizationList: m,
          blobs: T,
          data: q,
          gas: b,
          gasPrice: K,
          maxFeePerBlobGas: E,
          maxFeePerGas: F,
          maxPriorityFeePerGas: P,
          nonce: x,
          value: O,
          ...k
        } = n;
        if (void 0 === t)
          throw new a.T({ docsPath: "/docs/actions/wallet/sendTransaction" });
        let R = t ? (0, r.J)(t) : null;
        try {
          (0, v.c)(n);
          let t = await (async () =>
            n.to
              ? n.to
              : m && m.length > 0
              ? await (0, o.g)({ authorization: m[0] }).catch(() => {
                  throw new i.C(
                    "`to` is required. Could not infer from `authorizationList`."
                  );
                })
              : void 0)();
          if (R?.type === "json-rpc" || null === R) {
            let n;
            null !== y &&
              ((n = await (0, f.T)(e, g.T, "getChainId")({})),
              (0, u.v)({ currentChainId: n, chain: y }));
            let r = e.chain?.formatters?.transactionRequest?.format,
              a = (r || h.Bv)({
                ...(0, d.o)(k, { format: r }),
                accessList: w,
                authorizationList: m,
                blobs: T,
                chainId: n,
                data: q,
                from: R?.address,
                gas: b,
                gasPrice: K,
                maxFeePerBlobGas: E,
                maxFeePerGas: F,
                maxPriorityFeePerGas: P,
                nonce: x,
                to: t,
                value: O,
              }),
              i = p.get(e.uid);
            try {
              return await e.request(
                {
                  method: i ? "wallet_sendTransaction" : "eth_sendTransaction",
                  params: [a],
                },
                { retryCount: 0 }
              );
            } catch (n) {
              if (!1 === i) throw n;
              if (
                "InvalidInputRpcError" === n.name ||
                "InvalidParamsRpcError" === n.name ||
                "MethodNotFoundRpcError" === n.name ||
                "MethodNotSupportedRpcError" === n.name
              )
                return await e
                  .request(
                    { method: "wallet_sendTransaction", params: [a] },
                    { retryCount: 0 }
                  )
                  .then((n) => (p.set(e.uid, !0), n))
                  .catch((t) => {
                    if (
                      "MethodNotFoundRpcError" === t.name ||
                      "MethodNotSupportedRpcError" === t.name
                    )
                      throw (p.set(e.uid, !1), n);
                    throw t;
                  });
              throw n;
            }
          }
          if (R?.type === "local") {
            let n = await (0, f.T)(
                e,
                C.f,
                "prepareTransactionRequest"
              )({
                account: R,
                accessList: w,
                authorizationList: m,
                blobs: T,
                chain: y,
                data: q,
                gas: b,
                gasPrice: K,
                maxFeePerBlobGas: E,
                maxFeePerGas: F,
                maxPriorityFeePerGas: P,
                nonce: x,
                nonceManager: R.nonceManager,
                parameters: [...C.M, "sidecars"],
                value: O,
                ...k,
                to: t,
              }),
              r = y?.serializers?.transaction,
              a = await R.signTransaction(n, { serializer: r });
            return await (0, f.T)(
              e,
              I.L,
              "sendRawTransaction"
            )({ serializedTransaction: a });
          }
          if (R?.type === "smart")
            throw new a.Z({
              metaMessages: [
                "Consider using the `sendUserOperation` Action instead.",
              ],
              docsPath: "/docs/actions/bundler/sendUserOperation",
              type: "smart",
            });
          throw new a.Z({
            docsPath: "/docs/actions/wallet/sendTransaction",
            type: R?.type,
          });
        } catch (e) {
          if (e instanceof a.Z) throw e;
          throw (function (e, { docsPath: n, ...t }) {
            let r = (() => {
              let n = (0, l.l)(e, t);
              return n instanceof c.RM ? e : n;
            })();
            return new s.$s(r, { docsPath: n, ...t });
          })(e, { ...n, account: R, chain: n.chain || void 0 });
        }
      }
    },
    40164: (e, n, t) => {
      t.d(n, { C: () => o });
      var r = t(98722),
        a = t(66734),
        i = t(37939);
      async function o(e, n) {
        let {
          account: t = e.account,
          domain: o,
          message: u,
          primaryType: c,
        } = n;
        if (!t)
          throw new a.T({ docsPath: "/docs/actions/wallet/signTypedData" });
        let s = (0, r.J)(t),
          l = { EIP712Domain: (0, i.H4)({ domain: o }), ...n.types };
        if (
          ((0, i.$$)({ domain: o, message: u, primaryType: c, types: l }),
          s.signTypedData)
        )
          return s.signTypedData({
            domain: o,
            message: u,
            primaryType: c,
            types: l,
          });
        let d = (0, i.v8)({ domain: o, message: u, primaryType: c, types: l });
        return e.request(
          { method: "eth_signTypedData_v4", params: [s.address, d] },
          { retryCount: 0 }
        );
      }
    },
    66924: (e, n, t) => {
      t.d(n, { w: () => r });
      async function r(e, n) {
        return await e.request(
          { method: "wallet_watchAsset", params: n },
          { retryCount: 0 }
        );
      }
    },
    43926: (e, n, t) => {
      t.d(n, { E: () => s });
      var r = t(98722),
        a = t(66734),
        i = t(74046),
        o = t(80305),
        u = t(72447),
        c = t(51587);
      async function s(e, n) {
        let {
          abi: t,
          account: s = e.account,
          address: l,
          args: d,
          dataSuffix: h,
          functionName: f,
          ...y
        } = n;
        if (void 0 === s)
          throw new a.T({ docsPath: "/docs/contract/writeContract" });
        let v = s ? (0, r.J)(s) : null,
          g = (0, i.p)({ abi: t, args: d, functionName: f });
        try {
          return await (0, u.T)(
            e,
            c.v,
            "sendTransaction"
          )({
            data: `${g}${h ? h.replace("0x", "") : ""}`,
            to: l,
            account: v,
            ...y,
          });
        } catch (e) {
          throw (0, o.j)(e, {
            abi: t,
            address: l,
            args: d,
            docsPath: "/docs/contract/writeContract",
            functionName: f,
            sender: v?.address,
          });
        }
      }
    },
    57325: (e, n, t) => {
      t.d(n, { v: () => a });
      var r = t(89780);
      function a({ chain: e, currentChainId: n }) {
        if (!e) throw new r.jF();
        if (n !== e.id) throw new r.EH({ chain: e, currentChainId: n });
      }
    },
    23133: (e, n, t) => {
      t.d(n, { useBlock: () => h });
      var r = t(35906),
        a = t(84208),
        i = t(43247);
      async function o(e, n = {}) {
        let { chainId: t, ...r } = n,
          u = e.getClient({ chainId: t }),
          c = (0, i.T)(u, a.g, "getBlock");
        return { ...(await c(r)), chainId: u.chain.id };
      }
      var u = t(23905),
        c = t(97489),
        s = t(48517),
        l = t(57342),
        d = t(28131);
      function h() {
        var e, n;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: a = {}, watch: i } = t,
          h = (0, l.useConfig)(t),
          f = (0, r.useQueryClient)(),
          y = (0, s.useChainId)({ config: h }),
          v = null !== (e = t.chainId) && void 0 !== e ? e : y,
          g = (function (e, n = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let { scopeKey: t, ...r } = n[1];
                return (await o(e, r)) ?? null;
              },
              queryKey: (function (e = {}) {
                return ["block", (0, u.xO)(e)];
              })(n),
            };
          })(h, { ...t, chainId: v }),
          C = !!(null === (n = a.enabled) || void 0 === n || n);
        return (
          (0, d.useWatchBlocks)({
            ...{
              config: t.config,
              chainId: t.chainId,
              ...("object" == typeof i ? i : {}),
            },
            enabled: !!(C && ("object" == typeof i ? i.enabled : i)),
            onBlock(e) {
              f.setQueryData(g.queryKey, e);
            },
          }),
          (0, c.IT)({ ...a, ...g, enabled: C })
        );
      }
    },
    28697: (e, n, t) => {
      t.d(n, { useBlockNumber: () => d });
      var r = t(35906),
        a = t(60398),
        i = t(43247),
        o = t(23905),
        u = t(97489),
        c = t(48517),
        s = t(57342),
        l = t(33856);
      function d() {
        var e, n;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: d = {}, watch: h } = t,
          f = (0, s.useConfig)(t),
          y = (0, r.useQueryClient)(),
          v = (0, c.useChainId)({ config: f }),
          g = null !== (e = t.chainId) && void 0 !== e ? e : v,
          C = (function (e, n = {}) {
            return {
              gcTime: 0,
              async queryFn({ queryKey: n }) {
                let { scopeKey: t, ...r } = n[1];
                return (
                  (await (function (e, n = {}) {
                    let { chainId: t, ...r } = n,
                      o = e.getClient({ chainId: t });
                    return (0, i.T)(o, a.G, "getBlockNumber")(r);
                  })(e, r)) ?? null
                );
              },
              queryKey: (function (e = {}) {
                return ["blockNumber", (0, o.xO)(e)];
              })(n),
            };
          })(f, { ...t, chainId: g });
        return (
          (0, l.useWatchBlockNumber)({
            ...{
              config: t.config,
              chainId: t.chainId,
              ...("object" == typeof h ? h : {}),
            },
            enabled: !!(
              (null === (n = d.enabled) || void 0 === n || n) &&
              ("object" == typeof h ? h.enabled : h)
            ),
            onBlockNumber(e) {
              y.setQueryData(C.queryKey, e);
            },
          }),
          (0, u.IT)({ ...d, ...C })
        );
      }
    },
    32152: (e, n, t) => {
      t.d(n, { useBlockTransactionCount: () => s });
      var r = t(3267),
        a = t(43247),
        i = t(23905),
        o = t(97489),
        u = t(48517),
        c = t(57342);
      function s() {
        var e;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: t = {} } = n,
          s = (0, c.useConfig)(n),
          l = (0, u.useChainId)({ config: s }),
          d = null !== (e = n.chainId) && void 0 !== e ? e : l,
          h = (function (e, n = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let { scopeKey: t, ...i } = n[1];
                return (
                  (await (function (e, n = {}) {
                    let { chainId: t, ...i } = n,
                      o = e.getClient({ chainId: t });
                    return (0, a.T)(o, r.L, "getBlockTransactionCount")(i);
                  })(e, i)) ?? null
                );
              },
              queryKey: (function (e = {}) {
                return ["blockTransactionCount", (0, i.xO)(e)];
              })(n),
            };
          })(s, { ...n, chainId: d });
        return (0, o.IT)({ ...t, ...h });
      }
    },
    21138: (e, n, t) => {
      t.d(n, { useBytecode: () => l });
      var r = t(25478),
        a = t(43247);
      async function i(e, n) {
        let { chainId: t, ...i } = n,
          o = e.getClient({ chainId: t });
        return (0, a.T)(o, r.Q, "getBytecode")(i);
      }
      var o = t(23905),
        u = t(97489),
        c = t(48517),
        s = t(57342);
      function l() {
        var e, n;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, query: a = {} } = t,
          l = (0, s.useConfig)(t),
          d = (0, c.useChainId)({ config: l }),
          h = (function (e, n = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let { address: t, scopeKey: r, ...a } = n[1];
                if (!t) throw Error("address is required");
                return (await i(e, { ...a, address: t })) ?? null;
              },
              queryKey: ["getBytecode", (0, o.xO)(n)],
            };
          })(l, {
            ...t,
            chainId: null !== (e = t.chainId) && void 0 !== e ? e : d,
          }),
          f = !!(r && (null === (n = a.enabled) || void 0 === n || n));
        return (0, u.IT)({ ...a, ...h, enabled: f });
      }
    },
    99190: (e, n, t) => {
      t.d(n, { useCall: () => l });
      var r = t(91488),
        a = t(43247);
      async function i(e, n) {
        let { chainId: t, ...i } = n,
          o = e.getClient({ chainId: t });
        return (0, a.T)(o, r.T, "call")(i);
      }
      var o = t(23905),
        u = t(97489),
        c = t(48517),
        s = t(57342);
      function l() {
        var e;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: t = {} } = n,
          r = (0, s.useConfig)(n),
          a = (0, c.useChainId)({ config: r }),
          l = (function (e, n = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let { scopeKey: t, ...r } = n[1];
                return (await i(e, { ...r })) ?? null;
              },
              queryKey: ["call", (0, o.xO)(n)],
            };
          })(r, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : a,
          });
        return (0, u.IT)({ ...t, ...l });
      }
    },
    85981: (e, n, t) => {
      t.d(n, { useClient: () => o });
      var r = t(74076),
        a = t(18010),
        i = t(57342);
      function o() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = (0, i.useConfig)(e);
        return (0, a.useSyncExternalStoreWithSelector)(
          (e) =>
            (function (e, n) {
              let { onChange: t } = n;
              return e.subscribe(() => (0, r.K)(e), t, {
                equalityFn: (e, n) => e?.uid === n?.uid,
              });
            })(n, { onChange: e }),
          () => (0, r.K)(n, e),
          () => (0, r.K)(n, e),
          (e) => e,
          (e, n) =>
            (null == e ? void 0 : e.uid) === (null == n ? void 0 : n.uid)
        );
      }
    },
    81623: (e, n, t) => {
      t.d(n, { useConnectorClient: () => d });
      var r = t(35906),
        a = t(16942),
        i = t(23905),
        o = t(12115),
        u = t(97489),
        c = t(35965),
        s = t(48517),
        l = t(57342);
      function d() {
        var e, n, t;
        let d =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: h = {}, ...f } = d,
          y = (0, l.useConfig)(f),
          v = (0, r.useQueryClient)(),
          {
            address: g,
            connector: C,
            status: I,
          } = (0, c.useAccount)({ config: y }),
          p = (0, s.useChainId)({ config: y }),
          w = null !== (e = d.connector) && void 0 !== e ? e : C,
          { queryKey: m, ...T } = (function (e, n = {}) {
            return {
              gcTime: 0,
              async queryFn({ queryKey: t }) {
                let { connector: r } = n,
                  { connectorUid: i, scopeKey: o, ...u } = t[1];
                return (0, a.r)(e, { ...u, connector: r });
              },
              queryKey: (function (e = {}) {
                let { connector: n, ...t } = e;
                return [
                  "connectorClient",
                  { ...(0, i.xO)(t), connectorUid: n?.uid },
                ];
              })(n),
            };
          })(y, {
            ...d,
            chainId: null !== (n = d.chainId) && void 0 !== n ? n : p,
            connector: w,
          }),
          q = !!(
            ("connected" === I ||
              ("reconnecting" === I && (null == w ? void 0 : w.getProvider))) &&
            (null === (t = h.enabled) || void 0 === t || t)
          ),
          b = (0, o.useRef)(g);
        return (
          (0, o.useEffect)(() => {
            let e = b.current;
            !g && e
              ? (v.removeQueries({ queryKey: m }), (b.current = void 0))
              : g !== e &&
                (v.invalidateQueries({ queryKey: m }), (b.current = g));
          }, [g, v]),
          (0, u.IT)({
            ...h,
            ...T,
            queryKey: m,
            enabled: q,
            staleTime: Number.POSITIVE_INFINITY,
          })
        );
      }
    },
    74269: (e, n, t) => {
      t.d(n, { useDeployContract: () => s });
      var r = t(25848),
        a = t(24152),
        i = t(43247),
        o = t(16942);
      async function u(e, n) {
        let t;
        let { account: r, chainId: u, connector: c, ...s } = n;
        t =
          "object" == typeof r && r?.type === "local"
            ? e.getClient({ chainId: u })
            : await (0, o.r)(e, {
                account: r ?? void 0,
                chainId: u,
                connector: c,
              });
        let l = (0, i.T)(t, a.c, "deployContract");
        return await l({
          ...s,
          ...(r ? { account: r } : {}),
          chain: u ? { id: u } : null,
        });
      }
      var c = t(57342);
      function s() {
        var e;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = n,
          a =
            ((e = (0, c.useConfig)(n)),
            { mutationFn: (n) => u(e, n), mutationKey: ["deployContract"] }),
          {
            mutate: i,
            mutateAsync: o,
            ...s
          } = (0, r.useMutation)({ ...t, ...a });
        return { ...s, deployContract: i, deployContractAsync: o };
      }
    },
    51272: (e, n, t) => {
      t.d(n, { useEnsAddress: () => s });
      var r = t(5756),
        a = t(43247),
        i = t(23905),
        o = t(97489),
        u = t(48517),
        c = t(57342);
      function s() {
        var e, n;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { name: s, query: l = {} } = t,
          d = (0, c.useConfig)(t),
          h = (0, u.useChainId)({ config: d }),
          f = (function (e, n = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let { name: t, scopeKey: i, ...o } = n[1];
                if (!t) throw Error("name is required");
                return (function (e, n) {
                  let { chainId: t, ...i } = n,
                    o = e.getClient({ chainId: t });
                  return (0, a.T)(o, r.B, "getEnsAddress")(i);
                })(e, { ...o, name: t });
              },
              queryKey: (function (e = {}) {
                return ["ensAddress", (0, i.xO)(e)];
              })(n),
            };
          })(d, {
            ...t,
            chainId: null !== (e = t.chainId) && void 0 !== e ? e : h,
          }),
          y = !!(s && (null === (n = l.enabled) || void 0 === n || n));
        return (0, o.IT)({ ...l, ...f, enabled: y });
      }
    },
    16263: (e, n, t) => {
      t.d(n, { useEnsResolver: () => s });
      var r = t(5326),
        a = t(43247),
        i = t(23905),
        o = t(97489),
        u = t(48517),
        c = t(57342);
      function s() {
        var e, n;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { name: s, query: l = {} } = t,
          d = (0, c.useConfig)(t),
          h = (0, u.useChainId)({ config: d }),
          f = (function (e, n = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let { name: t, scopeKey: i, ...o } = n[1];
                if (!t) throw Error("name is required");
                return (function (e, n) {
                  let { chainId: t, ...i } = n,
                    o = e.getClient({ chainId: t });
                  return (0, a.T)(o, r.D, "getEnsResolver")(i);
                })(e, { ...o, name: t });
              },
              queryKey: (function (e = {}) {
                return ["ensResolver", (0, i.xO)(e)];
              })(n),
            };
          })(d, {
            ...t,
            chainId: null !== (e = t.chainId) && void 0 !== e ? e : h,
          }),
          y = !!(s && (null === (n = l.enabled) || void 0 === n || n));
        return (0, o.IT)({ ...l, ...f, enabled: y });
      }
    },
    24735: (e, n, t) => {
      t.d(n, { useEnsText: () => s });
      var r = t(53107),
        a = t(43247),
        i = t(23905),
        o = t(97489),
        u = t(48517),
        c = t(57342);
      function s() {
        var e, n;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { key: s, name: l, query: d = {} } = t,
          h = (0, c.useConfig)(t),
          f = (0, u.useChainId)({ config: h }),
          y = (function (e, n = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let { key: t, name: i, scopeKey: o, ...u } = n[1];
                if (!t || !i) throw Error("key and name are required");
                return (function (e, n) {
                  let { chainId: t, ...i } = n,
                    o = e.getClient({ chainId: t });
                  return (0, a.T)(o, r.m, "getEnsText")(i);
                })(e, { ...u, key: t, name: i });
              },
              queryKey: (function (e = {}) {
                return ["ensText", (0, i.xO)(e)];
              })(n),
            };
          })(h, {
            ...t,
            chainId: null !== (e = t.chainId) && void 0 !== e ? e : f,
          }),
          v = !!(s && l && (null === (n = d.enabled) || void 0 === n || n));
        return (0, o.IT)({ ...d, ...y, enabled: v });
      }
    },
    73817: (e, n, t) => {
      t.d(n, { useEstimateFeesPerGas: () => h });
      var r = t(89888),
        a = t(60710),
        i = t(43247),
        o = t(87831);
      async function u(e, n = {}) {
        let { chainId: t, formatUnits: c = "gwei", ...s } = n,
          l = e.getClient({ chainId: t }),
          d = (0, i.T)(l, a._, "estimateFeesPerGas"),
          {
            gasPrice: h,
            maxFeePerGas: f,
            maxPriorityFeePerGas: y,
          } = await d({ ...s, chain: l.chain }),
          v = (0, o.l)(c);
        return {
          formatted: {
            gasPrice: h ? (0, r.J)(h, v) : void 0,
            maxFeePerGas: f ? (0, r.J)(f, v) : void 0,
            maxPriorityFeePerGas: y ? (0, r.J)(y, v) : void 0,
          },
          gasPrice: h,
          maxFeePerGas: f,
          maxPriorityFeePerGas: y,
        };
      }
      var c = t(23905),
        s = t(97489),
        l = t(48517),
        d = t(57342);
      function h() {
        var e;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: t = {} } = n,
          r = (0, d.useConfig)(n),
          a = (0, l.useChainId)({ config: r }),
          i = (function (e, n = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let { scopeKey: t, ...r } = n[1];
                return u(e, r);
              },
              queryKey: (function (e = {}) {
                return ["estimateFeesPerGas", (0, c.xO)(e)];
              })(n),
            };
          })(r, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : a,
          });
        return (0, s.IT)({ ...t, ...i });
      }
    },
    38730: (e, n, t) => {
      t.d(n, { useEstimateGas: () => h });
      var r = t(35679),
        a = t(43247),
        i = t(16942);
      async function o(e, n) {
        let t;
        let { chainId: o, connector: u, ...c } = n;
        t = n.account
          ? n.account
          : (
              await (0, i.r)(e, {
                account: n.account,
                chainId: o,
                connector: u,
              })
            ).account;
        let s = e.getClient({ chainId: o });
        return (0, a.T)(s, r.Q, "estimateGas")({ ...c, account: t });
      }
      var u = t(23905),
        c = t(97489),
        s = t(48517),
        l = t(57342),
        d = t(81623);
      function h() {
        var e, n, t;
        let r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { connector: a, query: i = {} } = r,
          h = (0, l.useConfig)(r),
          { data: f } = (0, d.useConnectorClient)({
            config: h,
            connector: a,
            query: { enabled: void 0 === r.account },
          }),
          y =
            null !== (e = r.account) && void 0 !== e
              ? e
              : null == f
              ? void 0
              : f.account,
          v = (0, s.useChainId)({ config: h }),
          g = (function (e, n = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { connector: r } = n,
                  { account: a, scopeKey: i, ...u } = t[1];
                if (!a && !r) throw Error("account or connector is required");
                return o(e, { account: a, connector: r, ...u });
              },
              queryKey: (function (e = {}) {
                let { connector: n, ...t } = e;
                return ["estimateGas", (0, u.xO)(t)];
              })(n),
            };
          })(h, {
            ...r,
            account: y,
            chainId: null !== (n = r.chainId) && void 0 !== n ? n : v,
            connector: a,
          }),
          C = !!((y || a) && (null === (t = i.enabled) || void 0 === t || t));
        return (0, c.IT)({ ...i, ...g, enabled: C });
      }
    },
    22149: (e, n, t) => {
      t.d(n, { useEstimateMaxPriorityFeePerGas: () => l });
      var r = t(50801),
        a = t(43247);
      async function i(e, n = {}) {
        let { chainId: t } = n,
          o = e.getClient({ chainId: t });
        return (0, a.T)(
          o,
          r.b,
          "estimateMaxPriorityFeePerGas"
        )({ chain: o.chain });
      }
      var o = t(23905),
        u = t(97489),
        c = t(48517),
        s = t(57342);
      function l() {
        var e;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: t = {} } = n,
          r = (0, s.useConfig)(n),
          a = (0, c.useChainId)({ config: r }),
          l = (function (e, n = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let { scopeKey: t, ...r } = n[1];
                return i(e, r);
              },
              queryKey: (function (e = {}) {
                return ["estimateMaxPriorityFeePerGas", (0, o.xO)(e)];
              })(n),
            };
          })(r, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : a,
          });
        return (0, u.IT)({ ...t, ...l });
      }
    },
    81529: (e, n, t) => {
      t.d(n, { useFeeHistory: () => s });
      var r = t(87309),
        a = t(43247),
        i = t(23905),
        o = t(97489),
        u = t(48517),
        c = t(57342);
      function s() {
        var e, n;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { blockCount: s, rewardPercentiles: l, query: d = {} } = t,
          h = (0, c.useConfig)(t),
          f = (0, u.useChainId)({ config: h }),
          y = (function (e, n = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let {
                  blockCount: t,
                  rewardPercentiles: i,
                  scopeKey: o,
                  ...u
                } = n[1];
                if (!t) throw Error("blockCount is required");
                if (!i) throw Error("rewardPercentiles is required");
                return (
                  (await (function (e, n) {
                    let { chainId: t, ...i } = n,
                      o = e.getClient({ chainId: t });
                    return (0, a.T)(o, r.T, "getFeeHistory")(i);
                  })(e, { ...u, blockCount: t, rewardPercentiles: i })) ?? null
                );
              },
              queryKey: (function (e = {}) {
                return ["feeHistory", (0, i.xO)(e)];
              })(n),
            };
          })(h, {
            ...t,
            chainId: null !== (e = t.chainId) && void 0 !== e ? e : f,
          }),
          v = !!(s && l && (null === (n = d.enabled) || void 0 === n || n));
        return (0, o.IT)({ ...d, ...y, enabled: v });
      }
    },
    81344: (e, n, t) => {
      t.d(n, { useGasPrice: () => s });
      var r = t(8269),
        a = t(43247),
        i = t(23905),
        o = t(97489),
        u = t(48517),
        c = t(57342);
      function s() {
        var e;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: t = {} } = n,
          s = (0, c.useConfig)(n),
          l = (0, u.useChainId)({ config: s }),
          d = null !== (e = n.chainId) && void 0 !== e ? e : l,
          h = (function (e, n = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let { scopeKey: t, ...i } = n[1];
                return (
                  (await (function (e, n = {}) {
                    let { chainId: t } = n,
                      i = e.getClient({ chainId: t });
                    return (0, a.T)(i, r.L, "getGasPrice")({});
                  })(e, i)) ?? null
                );
              },
              queryKey: (function (e = {}) {
                return ["gasPrice", (0, i.xO)(e)];
              })(n),
            };
          })(s, { ...n, chainId: d });
        return (0, o.IT)({ ...t, ...h });
      }
    },
    33660: (e, n, t) => {
      t.d(n, { useInfiniteReadContracts: () => c });
      var r = t(81992),
        a = t(23905),
        i = t(97489),
        o = t(48517),
        u = t(57342);
      function c(e) {
        var n, t;
        let { contracts: c = [], query: s } = e,
          l = (0, u.useConfig)(e),
          d = (0, o.useChainId)({ config: l }),
          h = {
            ...(t = { ...e, chainId: d, contracts: c, query: s }).query,
            async queryFn({ pageParam: e, queryKey: n }) {
              let { contracts: a } = t,
                { cacheKey: i, scopeKey: o, ...u } = n[1];
              return await (0, r.I)(l, { ...u, contracts: a(e) });
            },
            queryKey: (function (e) {
              let { contracts: n, query: t, ...r } = e;
              return ["infiniteReadContracts", (0, a.xO)(r)];
            })(t),
          };
        return (0, i.qu)({
          ...s,
          ...h,
          initialPageParam: h.initialPageParam,
          structuralSharing:
            null !== (n = s.structuralSharing) && void 0 !== n ? n : a.I_,
        });
      }
    },
    39189: (e, n, t) => {
      t.d(n, { usePrepareTransactionRequest: () => d });
      var r = t(46636),
        a = t(43247),
        i = t(23454);
      async function o(e, n) {
        let { account: t, chainId: o, ...u } = n,
          c = t ?? (0, i.s)(e).address,
          s = e.getClient({ chainId: o });
        return (0, a.T)(
          s,
          r.f,
          "prepareTransactionRequest"
        )({ ...u, ...(c ? { account: c } : {}) });
      }
      var u = t(23905),
        c = t(97489),
        s = t(48517),
        l = t(57342);
      function d() {
        var e, n;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { to: r, query: a = {} } = t,
          i = (0, l.useConfig)(t),
          d = (0, s.useChainId)({ config: i }),
          h = (function (e, n = {}) {
            return {
              queryFn({ queryKey: n }) {
                let { scopeKey: t, to: r, ...a } = n[1];
                if (!r) throw Error("to is required");
                return o(e, { to: r, ...a });
              },
              queryKey: ["prepareTransactionRequest", (0, u.xO)(n)],
            };
          })(i, {
            ...t,
            chainId: null !== (e = t.chainId) && void 0 !== e ? e : d,
          }),
          f = !!(r && (null === (n = a.enabled) || void 0 === n || n));
        return (0, c.IT)({ ...a, ...h, enabled: f });
      }
    },
    64115: (e, n, t) => {
      t.d(n, { useProof: () => l });
      var r = t(44082),
        a = t(43247);
      async function i(e, n) {
        let { chainId: t, ...i } = n,
          o = e.getClient({ chainId: t });
        return (0, a.T)(o, r.l, "getProof")(i);
      }
      var o = t(23905),
        u = t(97489),
        c = t(48517),
        s = t(57342);
      function l() {
        var e, n;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, storageKeys: a, query: l = {} } = t,
          d = (0, s.useConfig)(t),
          h = (0, c.useChainId)({ config: d }),
          f = (function (e, n = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let { address: t, scopeKey: r, storageKeys: a, ...o } = n[1];
                if (!t || !a)
                  throw Error("address and storageKeys are required");
                return i(e, { ...o, address: t, storageKeys: a });
              },
              queryKey: ["getProof", (0, o.xO)(n)],
            };
          })(d, {
            ...t,
            chainId: null !== (e = t.chainId) && void 0 !== e ? e : h,
          }),
          y = !!(r && a && (null === (n = l.enabled) || void 0 === n || n));
        return (0, u.IT)({ ...l, ...f, enabled: y });
      }
    },
    89984: (e, n, t) => {
      t.d(n, { useReadContract: () => c });
      var r = t(41047),
        a = t(23905),
        i = t(97489),
        o = t(48517),
        u = t(57342);
      function c() {
        var e, n, t;
        let c =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { abi: s, address: l, functionName: d, query: h = {} } = c,
          f = c.code,
          y = (0, u.useConfig)(c),
          v = (0, o.useChainId)({ config: y }),
          g = (function (e, n = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let a = n.abi;
                if (!a) throw Error("abi is required");
                let { functionName: i, scopeKey: o, ...u } = t[1],
                  c = (() => {
                    let e = t[1];
                    if (e.address) return { address: e.address };
                    if (e.code) return { code: e.code };
                    throw Error("address or code is required");
                  })();
                if (!i) throw Error("functionName is required");
                return (0, r.J)(e, {
                  abi: a,
                  functionName: i,
                  args: u.args,
                  ...c,
                  ...u,
                });
              },
              queryKey: (function (e = {}) {
                let { abi: n, ...t } = e;
                return ["readContract", (0, a.xO)(t)];
              })(n),
            };
          })(y, {
            ...c,
            chainId: null !== (e = c.chainId) && void 0 !== e ? e : v,
          }),
          C = !!(
            (l || f) &&
            s &&
            d &&
            (null === (n = h.enabled) || void 0 === n || n)
          );
        return (0, i.IT)({
          ...h,
          ...g,
          enabled: C,
          structuralSharing:
            null !== (t = h.structuralSharing) && void 0 !== t ? t : a.I_,
        });
      }
    },
    15004: (e, n, t) => {
      t.d(n, { useReadContracts: () => s });
      var r = t(81992),
        a = t(23905),
        i = t(12115),
        o = t(97489),
        u = t(48517),
        c = t(57342);
      function s() {
        var e;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { contracts: t = [], query: s = {} } = n,
          l = (0, c.useConfig)(n),
          d = (0, u.useChainId)({ config: l }),
          h = (function (e, n = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let a = [],
                  i = t[1].contracts.length;
                for (let e = 0; e < i; e++) {
                  let r = t[1].contracts[e],
                    i = (n.contracts?.[e]).abi;
                  a.push({ ...r, abi: i });
                }
                let { scopeKey: o, ...u } = t[1];
                return (0, r.I)(e, { ...u, contracts: a });
              },
              queryKey: (function (e = {}) {
                let n = [];
                for (let t of e.contracts ?? []) {
                  let { abi: r, ...a } = t;
                  n.push({ ...a, chainId: a.chainId ?? e.chainId });
                }
                return ["readContracts", (0, a.xO)({ ...e, contracts: n })];
              })(n),
            };
          })(l, { ...n, chainId: d }),
          f = (0, i.useMemo)(() => {
            var e;
            let n = !1;
            for (let e of t) {
              let { abi: t, address: r, functionName: a } = e;
              if (!t || !r || !a) {
                n = !1;
                break;
              }
              n = !0;
            }
            return !!(n && (null === (e = s.enabled) || void 0 === e || e));
          }, [t, s.enabled]);
        return (0, o.IT)({
          ...h,
          ...s,
          enabled: f,
          structuralSharing:
            null !== (e = s.structuralSharing) && void 0 !== e ? e : a.I_,
        });
      }
    },
    17341: (e, n, t) => {
      t.d(n, { useReconnect: () => o });
      var r = t(25848),
        a = t(19362),
        i = t(57342);
      function o() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = e,
          t = (0, i.useConfig)(e),
          {
            mutate: o,
            mutateAsync: u,
            ...c
          } = (0, r.useMutation)({
            ...n,
            mutationFn: (e) => (0, a.M)(t, e),
            mutationKey: ["reconnect"],
          });
        return {
          ...c,
          connectors: t.connectors,
          reconnect: o,
          reconnectAsync: u,
        };
      }
    },
    37678: (e, n, t) => {
      t.d(n, { useSendTransaction: () => s });
      var r = t(25848),
        a = t(51587),
        i = t(43247),
        o = t(16942);
      async function u(e, n) {
        let t;
        let { account: r, chainId: u, connector: c, ...s } = n;
        t =
          "object" == typeof r && r?.type === "local"
            ? e.getClient({ chainId: u })
            : await (0, o.r)(e, {
                account: r ?? void 0,
                chainId: u,
                connector: c,
              });
        let l = (0, i.T)(t, a.v, "sendTransaction");
        return await l({
          ...s,
          ...(r ? { account: r } : {}),
          chain: u ? { id: u } : null,
          gas: s.gas ?? void 0,
        });
      }
      var c = t(57342);
      function s() {
        var e;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = n,
          a =
            ((e = (0, c.useConfig)(n)),
            { mutationFn: (n) => u(e, n), mutationKey: ["sendTransaction"] }),
          {
            mutate: i,
            mutateAsync: o,
            ...s
          } = (0, r.useMutation)({ ...t, ...a });
        return { ...s, sendTransaction: i, sendTransactionAsync: o };
      }
    },
    4916: (e, n, t) => {
      t.d(n, { useSignTypedData: () => s });
      var r = t(25848),
        a = t(40164),
        i = t(43247),
        o = t(16942);
      async function u(e, n) {
        let t;
        let { account: r, connector: u, ...c } = n;
        return (
          (t =
            "object" == typeof r && "local" === r.type
              ? e.getClient()
              : await (0, o.r)(e, { account: r, connector: u })),
          (0, i.T)(
            t,
            a.C,
            "signTypedData"
          )({ ...c, ...(r ? { account: r } : {}) })
        );
      }
      var c = t(57342);
      function s() {
        var e;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = n,
          a =
            ((e = (0, c.useConfig)(n)),
            { mutationFn: (n) => u(e, n), mutationKey: ["signTypedData"] }),
          {
            mutate: i,
            mutateAsync: o,
            ...s
          } = (0, r.useMutation)({ ...t, ...a });
        return { ...s, signTypedData: i, signTypedDataAsync: o };
      }
    },
    47425: (e, n, t) => {
      t.d(n, { useSimulateContract: () => h });
      var r = t(23729),
        a = t(43247),
        i = t(16942);
      async function o(e, n) {
        let t;
        let { abi: o, chainId: u, connector: c, ...s } = n;
        t = n.account
          ? n.account
          : (await (0, i.r)(e, { chainId: u, connector: c })).account;
        let l = e.getClient({ chainId: u }),
          d = (0, a.T)(l, r.v, "simulateContract"),
          { result: h, request: f } = await d({ ...s, abi: o, account: t });
        return {
          chainId: l.chain.id,
          result: h,
          request: { ...f, chainId: u },
        };
      }
      var u = t(23905),
        c = t(97489),
        s = t(48517),
        l = t(57342),
        d = t(81623);
      function h() {
        var e, n, t;
        let r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            abi: a,
            address: i,
            connector: h,
            functionName: f,
            query: y = {},
          } = r,
          v = (0, l.useConfig)(r),
          { data: g } = (0, d.useConnectorClient)({
            config: v,
            connector: h,
            query: { enabled: void 0 === r.account },
          }),
          C = (0, s.useChainId)({ config: v }),
          I = (function (e, n = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { abi: r, connector: a } = n;
                if (!r) throw Error("abi is required");
                let { scopeKey: i, ...u } = t[1],
                  { address: c, functionName: s } = u;
                if (!c) throw Error("address is required");
                if (!s) throw Error("functionName is required");
                return o(e, { abi: r, connector: a, ...u });
              },
              queryKey: (function (e = {}) {
                let { abi: n, connector: t, ...r } = e;
                return ["simulateContract", (0, u.xO)(r)];
              })(n),
            };
          })(v, {
            ...r,
            account:
              null !== (e = r.account) && void 0 !== e
                ? e
                : null == g
                ? void 0
                : g.account,
            chainId: null !== (n = r.chainId) && void 0 !== n ? n : C,
          }),
          p = !!(
            a &&
            i &&
            f &&
            (null === (t = y.enabled) || void 0 === t || t)
          );
        return (0, c.IT)({ ...y, ...I, enabled: p });
      }
    },
    54630: (e, n, t) => {
      t.d(n, { useStorageAt: () => l });
      var r = t(85933),
        a = t(43247);
      async function i(e, n) {
        let { chainId: t, ...i } = n,
          o = e.getClient({ chainId: t });
        return (0, a.T)(o, r.P, "getStorageAt")(i);
      }
      var o = t(23905),
        u = t(97489),
        c = t(48517),
        s = t(57342);
      function l() {
        var e, n;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, slot: a, query: l = {} } = t,
          d = (0, s.useConfig)(t),
          h = (0, c.useChainId)({ config: d }),
          f = (function (e, n = {}) {
            return {
              queryFn({ queryKey: n }) {
                let { address: t, slot: r, scopeKey: a, ...o } = n[1];
                if (!t || !r) throw Error("address and slot are required");
                return i(e, { ...o, address: t, slot: r });
              },
              queryKey: ["getStorageAt", (0, o.xO)(n)],
            };
          })(d, {
            ...t,
            chainId: null !== (e = t.chainId) && void 0 !== e ? e : h,
          }),
          y = !!(r && a && (null === (n = l.enabled) || void 0 === n || n));
        return (0, u.IT)({ ...l, ...f, enabled: y });
      }
    },
    96915: (e, n, t) => {
      t.d(n, { useSwitchAccount: () => c });
      var r = t(25848),
        a = t(22537);
      async function i(e, n) {
        let { connector: t } = n,
          r = e.state.connections.get(t.uid);
        if (!r) throw new a.gC();
        return (
          await e.storage?.setItem("recentConnectorId", t.id),
          e.setState((e) => ({ ...e, current: t.uid })),
          { accounts: r.accounts, chainId: r.chainId }
        );
      }
      var o = t(57342),
        u = t(87653);
      function c() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = e,
          t = (0, o.useConfig)(e),
          {
            mutate: a,
            mutateAsync: c,
            ...s
          } = (0, r.useMutation)({
            ...n,
            mutationFn: (e) => i(t, e),
            mutationKey: ["switchAccount"],
          });
        return {
          ...s,
          connectors: (0, u.useConnections)({ config: t }).map(
            (e) => e.connector
          ),
          switchAccount: a,
          switchAccountAsync: c,
        };
      }
    },
    78585: (e, n, t) => {
      t.d(n, { useToken: () => y });
      var r = t(88085),
        a = t(89888),
        i = t(45732),
        o = t(67368),
        u = t(87831),
        c = t(81992);
      async function s(e, n) {
        let { address: t, chainId: s, formatUnits: l = 18 } = n;
        function d(e) {
          return [
            {
              type: "function",
              name: "decimals",
              stateMutability: "view",
              inputs: [],
              outputs: [{ type: "uint8" }],
            },
            {
              type: "function",
              name: "name",
              stateMutability: "view",
              inputs: [],
              outputs: [{ type: e }],
            },
            {
              type: "function",
              name: "symbol",
              stateMutability: "view",
              inputs: [],
              outputs: [{ type: e }],
            },
            {
              type: "function",
              name: "totalSupply",
              stateMutability: "view",
              inputs: [],
              outputs: [{ type: "uint256" }],
            },
          ];
        }
        try {
          let n = d("string"),
            i = { address: t, abi: n, chainId: s },
            [o, h, f, y] = await (0, c.I)(e, {
              allowFailure: !0,
              contracts: [
                { ...i, functionName: "decimals" },
                { ...i, functionName: "name" },
                { ...i, functionName: "symbol" },
                { ...i, functionName: "totalSupply" },
              ],
            });
          if (h.error instanceof r.bG) throw h.error;
          if (f.error instanceof r.bG) throw f.error;
          if (o.error) throw o.error;
          if (y.error) throw y.error;
          return {
            address: t,
            decimals: o.result,
            name: h.result,
            symbol: f.result,
            totalSupply: {
              formatted: (0, a.J)(y.result, (0, u.l)(l)),
              value: y.result,
            },
          };
        } catch (n) {
          if (n instanceof r.bG) {
            let n = { address: t, abi: d("bytes32"), chainId: s },
              [r, h, f, y] = await (0, c.I)(e, {
                allowFailure: !1,
                contracts: [
                  { ...n, functionName: "decimals" },
                  { ...n, functionName: "name" },
                  { ...n, functionName: "symbol" },
                  { ...n, functionName: "totalSupply" },
                ],
              });
            return {
              address: t,
              decimals: r,
              name: (0, i.IQ)((0, o.B)(h, { dir: "right" })),
              symbol: (0, i.IQ)((0, o.B)(f, { dir: "right" })),
              totalSupply: { formatted: (0, a.J)(y, (0, u.l)(l)), value: y },
            };
          }
          throw n;
        }
      }
      var l = t(23905),
        d = t(97489),
        h = t(48517),
        f = t(57342);
      function y() {
        var e, n;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, query: a = {} } = t,
          i = (0, f.useConfig)(t),
          o = (0, h.useChainId)({ config: i }),
          u = (function (e, n = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let { address: t, scopeKey: r, ...a } = n[1];
                if (!t) throw Error("address is required");
                return s(e, { ...a, address: t });
              },
              queryKey: (function (e = {}) {
                return ["token", (0, l.xO)(e)];
              })(n),
            };
          })(i, {
            ...t,
            chainId: null !== (e = t.chainId) && void 0 !== e ? e : o,
          }),
          c = !!(r && (null === (n = a.enabled) || void 0 === n || n));
        return (0, d.IT)({ ...a, ...u, enabled: c });
      }
    },
    52909: (e, n, t) => {
      t.d(n, { useTransaction: () => s });
      var r = t(71885),
        a = t(43247),
        i = t(23905),
        o = t(97489),
        u = t(48517),
        c = t(57342);
      function s() {
        var e, n;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            blockHash: s,
            blockNumber: l,
            blockTag: d,
            hash: h,
            query: f = {},
          } = t,
          y = (0, c.useConfig)(t),
          v = (0, u.useChainId)({ config: y }),
          g = (function (e, n = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let {
                  blockHash: t,
                  blockNumber: i,
                  blockTag: o,
                  hash: u,
                  index: c,
                } = n[1];
                if (!t && !i && !o && !u)
                  throw Error(
                    "blockHash, blockNumber, blockTag, or hash is required"
                  );
                if (!u && !c)
                  throw Error(
                    "index is required for blockHash, blockNumber, or blockTag"
                  );
                let { scopeKey: s, ...l } = n[1];
                return (function (e, n) {
                  let { chainId: t, ...i } = n,
                    o = e.getClient({ chainId: t });
                  return (0, a.T)(o, r.x, "getTransaction")(i);
                })(e, l);
              },
              queryKey: (function (e = {}) {
                return ["transaction", (0, i.xO)(e)];
              })(n),
            };
          })(y, {
            ...t,
            chainId: null !== (e = t.chainId) && void 0 !== e ? e : v,
          }),
          C = !!(
            !(s && l && d && h) &&
            (null === (n = f.enabled) || void 0 === n || n)
          );
        return (0, o.IT)({ ...f, ...g, enabled: C });
      }
    },
    31428: (e, n, t) => {
      t.d(n, { useTransactionConfirmations: () => s });
      var r = t(59353),
        a = t(43247),
        i = t(23905),
        o = t(97489),
        u = t(48517),
        c = t(57342);
      function s() {
        var e, n;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { hash: s, transactionReceipt: l, query: d = {} } = t,
          h = (0, c.useConfig)(t),
          f = (0, u.useChainId)({ config: h }),
          y = (function (e, n = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let {
                  hash: t,
                  transactionReceipt: i,
                  scopeKey: o,
                  ...u
                } = n[1];
                if (!t && !i)
                  throw Error("hash or transactionReceipt is required");
                return (
                  (await (function (e, n) {
                    let { chainId: t, ...i } = n,
                      o = e.getClient({ chainId: t });
                    return (0, a.T)(o, r.d, "getTransactionConfirmations")(i);
                  })(e, { hash: t, transactionReceipt: i, ...u })) ?? null
                );
              },
              queryKey: (function (e = {}) {
                return ["transactionConfirmations", (0, i.xO)(e)];
              })(n),
            };
          })(h, {
            ...t,
            chainId: null !== (e = t.chainId) && void 0 !== e ? e : f,
          }),
          v = !!(
            !(s && l) &&
            (s || l) &&
            (null === (n = d.enabled) || void 0 === n || n)
          );
        return (0, o.IT)({ ...d, ...y, enabled: v });
      }
    },
    54307: (e, n, t) => {
      t.d(n, { useTransactionCount: () => l });
      var r = t(77184),
        a = t(43247);
      async function i(e, n) {
        let { address: t, blockNumber: i, blockTag: o, chainId: u } = n,
          c = e.getClient({ chainId: u });
        return (0, a.T)(
          c,
          r.y,
          "getTransactionCount"
        )(i ? { address: t, blockNumber: i } : { address: t, blockTag: o });
      }
      var o = t(23905),
        u = t(97489),
        c = t(48517),
        s = t(57342);
      function l() {
        var e, n;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, query: a = {} } = t,
          l = (0, s.useConfig)(t),
          d = (0, c.useChainId)({ config: l }),
          h = (function (e, n = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let { address: t, scopeKey: r, ...a } = n[1];
                if (!t) throw Error("address is required");
                return (await i(e, { ...a, address: t })) ?? null;
              },
              queryKey: (function (e = {}) {
                return ["transactionCount", (0, o.xO)(e)];
              })(n),
            };
          })(l, {
            ...t,
            chainId: null !== (e = t.chainId) && void 0 !== e ? e : d,
          }),
          f = !!(r && (null === (n = a.enabled) || void 0 === n || n));
        return (0, u.IT)({ ...a, ...h, enabled: f });
      }
    },
    35379: (e, n, t) => {
      t.d(n, { useTransactionReceipt: () => l });
      var r = t(3369),
        a = t(43247);
      async function i(e, n) {
        let { chainId: t, ...i } = n,
          o = e.getClient({ chainId: t });
        return (0, a.T)(o, r.h, "getTransactionReceipt")(i);
      }
      var o = t(23905),
        u = t(97489),
        c = t(48517),
        s = t(57342);
      function l() {
        var e, n;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { hash: r, query: a = {} } = t,
          l = (0, s.useConfig)(t),
          d = (0, c.useChainId)({ config: l }),
          h = (function (e, n = {}) {
            return {
              queryFn({ queryKey: n }) {
                let { hash: t, scopeKey: r, ...a } = n[1];
                if (!t) throw Error("hash is required");
                return i(e, { ...a, hash: t });
              },
              queryKey: ["getTransactionReceipt", (0, o.xO)(n)],
            };
          })(l, {
            ...t,
            chainId: null !== (e = t.chainId) && void 0 !== e ? e : d,
          }),
          f = !!(r && (null === (n = a.enabled) || void 0 === n || n));
        return (0, u.IT)({ ...a, ...h, enabled: f });
      }
    },
    95861: (e, n, t) => {
      t.d(n, { useVerifyMessage: () => l });
      var r = t(40619),
        a = t(43247);
      async function i(e, n) {
        let { chainId: t, ...i } = n,
          o = e.getClient({ chainId: t });
        return (0, a.T)(o, r.l, "verifyMessage")(i);
      }
      var o = t(23905),
        u = t(97489),
        c = t(48517),
        s = t(57342);
      function l() {
        var e, n;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, message: a, signature: l, query: d = {} } = t,
          h = (0, s.useConfig)(t),
          f = (0, c.useChainId)({ config: h }),
          y = (function (e, n = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let { address: t, message: r, signature: a } = n[1];
                if (!t || !r || !a)
                  throw Error("address, message, and signature are required");
                let { scopeKey: o, ...u } = n[1];
                return (await i(e, u)) ?? null;
              },
              queryKey: ["verifyMessage", (0, o.xO)(n)],
            };
          })(h, {
            ...t,
            chainId: null !== (e = t.chainId) && void 0 !== e ? e : f,
          }),
          v = !!(
            r &&
            a &&
            l &&
            (null === (n = d.enabled) || void 0 === n || n)
          );
        return (0, u.IT)({ ...d, ...y, enabled: v });
      }
    },
    67484: (e, n, t) => {
      t.d(n, { useVerifyTypedData: () => l });
      var r = t(12444),
        a = t(43247);
      async function i(e, n) {
        let { chainId: t, ...i } = n,
          o = e.getClient({ chainId: t });
        return (0, a.T)(o, r.w, "verifyTypedData")(i);
      }
      var o = t(23905),
        u = t(97489),
        c = t(48517),
        s = t(57342);
      function l() {
        var e, n;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            address: r,
            message: a,
            primaryType: l,
            signature: d,
            types: h,
            query: f = {},
          } = t,
          y = (0, s.useConfig)(t),
          v = (0, c.useChainId)({ config: y }),
          g = (function (e, n = {}) {
            return {
              async queryFn({ queryKey: n }) {
                let {
                  address: t,
                  message: r,
                  primaryType: a,
                  signature: o,
                  types: u,
                  scopeKey: c,
                  ...s
                } = n[1];
                if (!t) throw Error("address is required");
                if (!r) throw Error("message is required");
                if (!a) throw Error("primaryType is required");
                if (!o) throw Error("signature is required");
                if (!u) throw Error("types is required");
                return (
                  (await i(e, {
                    ...s,
                    address: t,
                    message: r,
                    primaryType: a,
                    signature: o,
                    types: u,
                  })) ?? null
                );
              },
              queryKey: ["verifyTypedData", (0, o.xO)(n)],
            };
          })(y, {
            ...t,
            chainId: null !== (e = t.chainId) && void 0 !== e ? e : v,
          }),
          C = !!(
            r &&
            a &&
            l &&
            d &&
            h &&
            (null === (n = f.enabled) || void 0 === n || n)
          );
        return (0, u.IT)({ ...f, ...g, enabled: C });
      }
    },
    34122: (e, n, t) => {
      t.d(n, { useWaitForTransactionReceipt: () => c });
      var r = t(36487),
        a = t(23905),
        i = t(97489),
        o = t(48517),
        u = t(57342);
      function c() {
        var e, n;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { hash: c, query: s = {} } = t,
          l = (0, u.useConfig)(t),
          d = (0, o.useChainId)({ config: l }),
          h = (function (e, n = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { hash: a, ...i } = t[1];
                if (!a) throw Error("hash is required");
                return (0, r.n)(e, { ...i, onReplaced: n.onReplaced, hash: a });
              },
              queryKey: (function (e = {}) {
                let { onReplaced: n, ...t } = e;
                return ["waitForTransactionReceipt", (0, a.xO)(t)];
              })(n),
            };
          })(l, {
            ...t,
            chainId: null !== (e = t.chainId) && void 0 !== e ? e : d,
          }),
          f = !!(c && (null === (n = s.enabled) || void 0 === n || n));
        return (0, i.IT)({ ...s, ...h, enabled: f });
      }
    },
    10537: (e, n, t) => {
      t.d(n, { useWalletClient: () => S });
      var r = t(35906),
        a = t(30733),
        i = t(98979);
      async function o(e, { chain: n }) {
        let {
          id: t,
          name: r,
          nativeCurrency: a,
          rpcUrls: o,
          blockExplorers: u,
        } = n;
        await e.request(
          {
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: (0, i.cK)(t),
                chainName: r,
                nativeCurrency: a,
                rpcUrls: o.default.http,
                blockExplorerUrls: u
                  ? Object.values(u).map(({ url: e }) => e)
                  : void 0,
              },
            ],
          },
          { dedupe: !0, retryCount: 0 }
        );
      }
      var u = t(24152),
        c = t(40814);
      async function s(e) {
        return e.account?.type === "local"
          ? [e.account.address]
          : (await e.request({ method: "eth_accounts" }, { dedupe: !0 })).map(
              (e) => (0, c.o)(e)
            );
      }
      async function l(e) {
        return await e.request(
          { method: "wallet_getPermissions" },
          { dedupe: !0 }
        );
      }
      var d = t(46636);
      async function h(e) {
        return (
          await e.request(
            { method: "eth_requestAccounts" },
            { dedupe: !0, retryCount: 0 }
          )
        ).map((e) => (0, c.b)(e));
      }
      async function f(e, n) {
        return e.request(
          { method: "wallet_requestPermissions", params: [n] },
          { retryCount: 0 }
        );
      }
      var y = t(29665),
        v = t(51587),
        g = t(87027),
        C = t(98722),
        I = t(66734),
        p = t(57325),
        w = t(53864),
        m = t(72447),
        T = t(73056);
      async function q(e, n) {
        let { account: t = e.account, chain: r = e.chain, ...o } = n;
        if (!t)
          throw new I.T({ docsPath: "/docs/actions/wallet/signTransaction" });
        let u = (0, C.J)(t);
        (0, T.c)({ account: u, ...n });
        let c = await (0, m.T)(e, a.T, "getChainId")({});
        null !== r && (0, p.v)({ currentChainId: c, chain: r });
        let s = r?.formatters || e.chain?.formatters,
          l = s?.transactionRequest?.format || w.Bv;
        return u.signTransaction
          ? u.signTransaction(
              { ...o, chainId: c },
              { serializer: e.chain?.serializers?.transaction }
            )
          : await e.request(
              {
                method: "eth_signTransaction",
                params: [{ ...l(o), chainId: (0, i.cK)(c), from: u.address }],
              },
              { retryCount: 0 }
            );
      }
      var b = t(40164);
      async function K(e, { id: n }) {
        await e.request(
          {
            method: "wallet_switchEthereumChain",
            params: [{ chainId: (0, i.cK)(n) }],
          },
          { retryCount: 0 }
        );
      }
      var E = t(66924),
        F = t(43926);
      function P(e) {
        return {
          addChain: (n) => o(e, n),
          deployContract: (n) => (0, u.c)(e, n),
          getAddresses: () => s(e),
          getChainId: () => (0, a.T)(e),
          getPermissions: () => l(e),
          prepareTransactionRequest: (n) => (0, d.f)(e, n),
          requestAddresses: () => h(e),
          requestPermissions: (n) => f(e, n),
          sendRawTransaction: (n) => (0, y.L)(e, n),
          sendTransaction: (n) => (0, v.v)(e, n),
          signMessage: (n) => (0, g.l)(e, n),
          signTransaction: (n) => q(e, n),
          signTypedData: (n) => (0, b.C)(e, n),
          switchChain: (n) => K(e, n),
          watchAsset: (n) => (0, E.w)(e, n),
          writeContract: (n) => (0, F.E)(e, n),
        };
      }
      var x = t(16942);
      async function O(e, n = {}) {
        return (await (0, x.r)(e, n)).extend(P);
      }
      var k = t(23905),
        R = t(12115),
        N = t(97489),
        A = t(35965),
        M = t(48517),
        _ = t(57342);
      function S() {
        var e, n, t, a;
        let i =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: o = {}, ...u } = i,
          c = (0, _.useConfig)(u),
          s = (0, r.useQueryClient)(),
          {
            address: l,
            connector: d,
            status: h,
          } = (0, A.useAccount)({ config: c }),
          f = (0, M.useChainId)({ config: c }),
          y = null !== (e = i.connector) && void 0 !== e ? e : d,
          { queryKey: v, ...g } = (function (e, n = {}) {
            return {
              gcTime: 0,
              async queryFn({ queryKey: t }) {
                let { connector: r } = n,
                  { connectorUid: a, scopeKey: i, ...o } = t[1];
                return O(e, { ...o, connector: r });
              },
              queryKey: (function (e = {}) {
                let { connector: n, ...t } = e;
                return [
                  "walletClient",
                  { ...(0, k.xO)(t), connectorUid: n?.uid },
                ];
              })(n),
            };
          })(c, {
            ...i,
            chainId: null !== (n = i.chainId) && void 0 !== n ? n : f,
            connector: null !== (t = i.connector) && void 0 !== t ? t : d,
          }),
          C = !!(
            ("connected" === h ||
              ("reconnecting" === h && (null == y ? void 0 : y.getProvider))) &&
            (null === (a = o.enabled) || void 0 === a || a)
          ),
          I = (0, R.useRef)(l);
        return (
          (0, R.useEffect)(() => {
            let e = I.current;
            !l && e
              ? (s.removeQueries({ queryKey: v }), (I.current = void 0))
              : l !== e &&
                (s.invalidateQueries({ queryKey: v }), (I.current = l));
          }, [l, s]),
          (0, N.IT)({
            ...o,
            ...g,
            queryKey: v,
            enabled: C,
            staleTime: Number.POSITIVE_INFINITY,
          })
        );
      }
    },
    28454: (e, n, t) => {
      t.d(n, { useWatchAsset: () => s });
      var r = t(25848),
        a = t(66924),
        i = t(43247),
        o = t(16942);
      async function u(e, n) {
        let { connector: t, ...r } = n,
          u = await (0, o.r)(e, { connector: t });
        return (0, i.T)(u, a.w, "watchAsset")(r);
      }
      var c = t(57342);
      function s() {
        var e;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = n,
          a =
            ((e = (0, c.useConfig)(n)),
            { mutationFn: (n) => u(e, n), mutationKey: ["watchAsset"] }),
          {
            mutate: i,
            mutateAsync: o,
            ...s
          } = (0, r.useMutation)({ ...t, ...a });
        return { ...s, watchAsset: i, watchAssetAsync: o };
      }
    },
    33856: (e, n, t) => {
      t.d(n, { useWatchBlockNumber: () => c });
      var r = t(65724),
        a = t(43247),
        i = t(12115),
        o = t(48517),
        u = t(57342);
      function c() {
        var e;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { enabled: t = !0, onBlockNumber: c, config: s, ...l } = n,
          d = (0, u.useConfig)(n),
          h = (0, o.useChainId)({ config: d }),
          f = null !== (e = n.chainId) && void 0 !== e ? e : h;
        (0, i.useEffect)(() => {
          if (t && c)
            return (function (e, n) {
              let t, i;
              let {
                  syncConnectedChain: o = e._internal.syncConnectedChain,
                  ...u
                } = n,
                c = (n) => {
                  t && t();
                  let i = e.getClient({ chainId: n });
                  return (t = (0, a.T)(i, r.q, "watchBlockNumber")(u));
                },
                s = c(n.chainId);
              return (
                o &&
                  !n.chainId &&
                  (i = e.subscribe(
                    ({ chainId: e }) => e,
                    async (e) => c(e)
                  )),
                () => {
                  s?.(), i?.();
                }
              );
            })(d, { ...l, chainId: f, onBlockNumber: c });
        }, [
          f,
          d,
          t,
          c,
          l.onError,
          l.emitMissed,
          l.emitOnBegin,
          l.poll,
          l.pollingInterval,
          l.syncConnectedChain,
        ]);
      }
    },
    28131: (e, n, t) => {
      t.d(n, { useWatchBlocks: () => c });
      var r = t(26758),
        a = t(43247),
        i = t(12115),
        o = t(48517),
        u = t(57342);
      function c() {
        var e;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { enabled: t = !0, onBlock: c, config: s, ...l } = n,
          d = (0, u.useConfig)(n),
          h = (0, o.useChainId)({ config: d }),
          f = null !== (e = n.chainId) && void 0 !== e ? e : h;
        (0, i.useEffect)(() => {
          if (t && c)
            return (function (e, n) {
              let t, i;
              let {
                  syncConnectedChain: o = e._internal.syncConnectedChain,
                  ...u
                } = n,
                c = (n) => {
                  t && t();
                  let i = e.getClient({ chainId: n });
                  return (t = (0, a.T)(i, r.O, "watchBlocks")(u));
                },
                s = c(n.chainId);
              return (
                o &&
                  !n.chainId &&
                  (i = e.subscribe(
                    ({ chainId: e }) => e,
                    async (e) => c(e)
                  )),
                () => {
                  s?.(), i?.();
                }
              );
            })(d, { ...l, chainId: f, onBlock: c });
        }, [
          f,
          d,
          t,
          c,
          l.blockTag,
          l.emitMissed,
          l.emitOnBegin,
          l.includeTransactions,
          l.onError,
          l.poll,
          l.pollingInterval,
          l.syncConnectedChain,
        ]);
      }
    },
    13735: (e, n, t) => {
      t.d(n, { useWatchContractEvent: () => c });
      var r = t(45898),
        a = t(43247),
        i = t(12115),
        o = t(48517),
        u = t(57342);
      function c() {
        var e;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { enabled: t = !0, onLogs: c, config: s, ...l } = n,
          d = (0, u.useConfig)(n),
          h = (0, o.useChainId)({ config: d }),
          f = null !== (e = n.chainId) && void 0 !== e ? e : h;
        (0, i.useEffect)(() => {
          if (t && c)
            return (function (e, n) {
              let t, i;
              let {
                  syncConnectedChain: o = e._internal.syncConnectedChain,
                  ...u
                } = n,
                c = (n) => {
                  t && t();
                  let i = e.getClient({ chainId: n });
                  return (t = (0, a.T)(i, r.q, "watchContractEvent")(u));
                },
                s = c(n.chainId);
              return (
                o &&
                  !n.chainId &&
                  (i = e.subscribe(
                    ({ chainId: e }) => e,
                    async (e) => c(e)
                  )),
                () => {
                  s?.(), i?.();
                }
              );
            })(d, { ...l, chainId: f, onLogs: c });
        }, [
          f,
          d,
          t,
          c,
          l.abi,
          l.address,
          l.args,
          l.batch,
          l.eventName,
          l.fromBlock,
          l.onError,
          l.poll,
          l.pollingInterval,
          l.strict,
          l.syncConnectedChain,
        ]);
      }
    },
    49152: (e, n, t) => {
      t.d(n, { useWatchPendingTransactions: () => c });
      var r = t(75066),
        a = t(43247),
        i = t(12115),
        o = t(48517),
        u = t(57342);
      function c() {
        var e;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { enabled: t = !0, onTransactions: c, config: s, ...l } = n,
          d = (0, u.useConfig)(n),
          h = (0, o.useChainId)({ config: d }),
          f = null !== (e = n.chainId) && void 0 !== e ? e : h;
        (0, i.useEffect)(() => {
          if (t && c)
            return (function (e, n) {
              let t, i;
              let {
                  syncConnectedChain: o = e._internal.syncConnectedChain,
                  ...u
                } = n,
                c = (n) => {
                  t && t();
                  let i = e.getClient({ chainId: n });
                  return (t = (0, a.T)(i, r.u, "watchPendingTransactions")(u));
                },
                s = c(n.chainId);
              return (
                o &&
                  !n.chainId &&
                  (i = e.subscribe(
                    ({ chainId: e }) => e,
                    async (e) => c(e)
                  )),
                () => {
                  s?.(), i?.();
                }
              );
            })(d, { ...l, chainId: f, onTransactions: c });
        }, [
          f,
          d,
          t,
          c,
          l.batch,
          l.onError,
          l.poll,
          l.pollingInterval,
          l.syncConnectedChain,
        ]);
      }
    },
    33764: (e, n, t) => {
      t.d(n, { useWriteContract: () => o });
      var r = t(25848),
        a = t(21382),
        i = t(57342);
      function o() {
        var e;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = n,
          o =
            ((e = (0, i.useConfig)(n)),
            {
              mutationFn: (n) => (0, a.E)(e, n),
              mutationKey: ["writeContract"],
            }),
          {
            mutate: u,
            mutateAsync: c,
            ...s
          } = (0, r.useMutation)({ ...t, ...o });
        return { ...s, writeContract: u, writeContractAsync: c };
      }
    },
  },
]);
