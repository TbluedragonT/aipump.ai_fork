"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [548],
  {
    19125: (e, t, r) => {
      var n = r(12115),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        s = n.useState,
        a = n.useEffect,
        o = n.useLayoutEffect,
        c = n.useDebugValue;
      function u(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !i(e, r);
        } catch (e) {
          return !0;
        }
      }
      var l =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var r = t(),
                n = s({ inst: { value: r, getSnapshot: t } }),
                i = n[0].inst,
                l = n[1];
              return (
                o(
                  function () {
                    (i.value = r), (i.getSnapshot = t), u(i) && l({ inst: i });
                  },
                  [e, r, t]
                ),
                a(
                  function () {
                    return (
                      u(i) && l({ inst: i }),
                      e(function () {
                        u(i) && l({ inst: i });
                      })
                    );
                  },
                  [e]
                ),
                c(r),
                r
              );
            };
      t.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : l;
    },
    96854: (e, t, r) => {
      var n = r(12115),
        i = r(94236),
        s =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        a = i.useSyncExternalStore,
        o = n.useRef,
        c = n.useEffect,
        u = n.useMemo,
        l = n.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, r, n, i) {
        var d = o(null);
        if (null === d.current) {
          var h = { hasValue: !1, value: null };
          d.current = h;
        } else h = d.current;
        var f = a(
          e,
          (d = u(
            function () {
              function e(e) {
                if (!c) {
                  if (
                    ((c = !0), (a = e), (e = n(e)), void 0 !== i && h.hasValue)
                  ) {
                    var t = h.value;
                    if (i(t, e)) return (o = t);
                  }
                  return (o = e);
                }
                if (((t = o), s(a, e))) return t;
                var r = n(e);
                return void 0 !== i && i(t, r) ? t : ((a = e), (o = r));
              }
              var a,
                o,
                c = !1,
                u = void 0 === r ? null : r;
              return [
                function () {
                  return e(t());
                },
                null === u
                  ? void 0
                  : function () {
                      return e(u());
                    },
              ];
            },
            [t, r, n, i]
          ))[0],
          d[1]
        );
        return (
          c(
            function () {
              (h.hasValue = !0), (h.value = f);
            },
            [f]
          ),
          l(f),
          f
        );
      };
    },
    94236: (e, t, r) => {
      e.exports = r(19125);
    },
    18010: (e, t, r) => {
      e.exports = r(96854);
    },
    75908: (e, t, r) => {
      r.d(t, { secp256k1: () => eN });
      var n = {};
      function i(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function s(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function a(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      r.r(n),
        r.d(n, {
          aK: () => _,
          e8: () => A,
          DO: () => $,
          dJ: () => H,
          OG: () => K,
          My: () => S,
          Ph: () => N,
          lX: () => j,
          Id: () => L,
          fg: () => Z,
          qj: () => z,
          aT: () => k,
          r4: () => G,
          aY: () => B,
          x: () => Y,
          lq: () => U,
          z: () => q,
          zW: () => M,
          Q5: () => J,
        });
      let o =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0,
        c = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
        u = (e, t) => (e << (32 - t)) | (e >>> t);
      function l(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error("utf8ToBytes expected string, got " + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          s(e),
          e
        );
      }
      class d {
        clone() {
          return this._cloneInto();
        }
      }
      function h(e = 32) {
        if (o && "function" == typeof o.getRandomValues)
          return o.getRandomValues(new Uint8Array(e));
        if (o && "function" == typeof o.randomBytes) return o.randomBytes(e);
        throw Error("crypto.getRandomValues must be defined");
      }
      let f = (e, t, r) => (e & t) ^ (~e & r),
        p = (e, t, r) => (e & t) ^ (e & r) ^ (t & r);
      class y extends d {
        constructor(e, t, r, n) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = c(this.buffer));
        }
        update(e) {
          a(this);
          let { view: t, buffer: r, blockLen: n } = this,
            i = (e = l(e)).length;
          for (let s = 0; s < i; ) {
            let a = Math.min(n - this.pos, i - s);
            if (a === n) {
              let t = c(e);
              for (; n <= i - s; s += n) this.process(t, s);
              continue;
            }
            r.set(e.subarray(s, s + a), this.pos),
              (this.pos += a),
              (s += a),
              this.pos === n && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          a(this),
            (function (e, t) {
              s(e);
              let r = t.outputLen;
              if (e.length < r)
                throw Error(
                  "digestInto() expects output buffer of length at least " + r
                );
            })(e, this),
            (this.finished = !0);
          let { buffer: t, view: r, blockLen: n, isLE: i } = this,
            { pos: o } = this;
          (t[o++] = 128),
            this.buffer.subarray(o).fill(0),
            this.padOffset > n - o && (this.process(r, 0), (o = 0));
          for (let e = o; e < n; e++) t[e] = 0;
          !(function (e, t, r, n) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, r, n);
            let i = BigInt(32),
              s = BigInt(0xffffffff),
              a = Number((r >> i) & s),
              o = Number(r & s),
              c = n ? 4 : 0,
              u = n ? 0 : 4;
            e.setUint32(t + c, a, n), e.setUint32(t + u, o, n);
          })(r, n - 8, BigInt(8 * this.length), i),
            this.process(r, 0);
          let u = c(e),
            l = this.outputLen;
          if (l % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let d = l / 4,
            h = this.get();
          if (d > h.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < d; e++) u.setUint32(4 * e, h[e], i);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: r,
            length: n,
            finished: i,
            destroyed: s,
            pos: a,
          } = this;
          return (
            (e.length = n),
            (e.pos = a),
            (e.finished = i),
            (e.destroyed = s),
            n % t && e.buffer.set(r),
            e
          );
        }
      }
      let b = new Uint32Array([
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
          0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
          0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
          0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d,
          0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967,
          0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354,
          0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585,
          0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
          0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee,
          0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb,
          0xbef9a3f7, 0xc67178f2,
        ]),
        m = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        g = new Uint32Array(64);
      class v extends y {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | m[0]),
            (this.B = 0 | m[1]),
            (this.C = 0 | m[2]),
            (this.D = 0 | m[3]),
            (this.E = 0 | m[4]),
            (this.F = 0 | m[5]),
            (this.G = 0 | m[6]),
            (this.H = 0 | m[7]);
        }
        get() {
          let { A: e, B: t, C: r, D: n, E: i, F: s, G: a, H: o } = this;
          return [e, t, r, n, i, s, a, o];
        }
        set(e, t, r, n, i, s, a, o) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | i),
            (this.F = 0 | s),
            (this.G = 0 | a),
            (this.H = 0 | o);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4) g[r] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = g[e - 15],
              r = g[e - 2],
              n = u(t, 7) ^ u(t, 18) ^ (t >>> 3),
              i = u(r, 17) ^ u(r, 19) ^ (r >>> 10);
            g[e] = (i + g[e - 7] + n + g[e - 16]) | 0;
          }
          let { A: r, B: n, C: i, D: s, E: a, F: o, G: c, H: l } = this;
          for (let e = 0; e < 64; e++) {
            let t =
                (l +
                  (u(a, 6) ^ u(a, 11) ^ u(a, 25)) +
                  f(a, o, c) +
                  b[e] +
                  g[e]) |
                0,
              d = ((u(r, 2) ^ u(r, 13) ^ u(r, 22)) + p(r, n, i)) | 0;
            (l = c),
              (c = o),
              (o = a),
              (a = (s + t) | 0),
              (s = i),
              (i = n),
              (n = r),
              (r = (t + d) | 0);
          }
          (r = (r + this.A) | 0),
            (n = (n + this.B) | 0),
            (i = (i + this.C) | 0),
            (s = (s + this.D) | 0),
            (a = (a + this.E) | 0),
            (o = (o + this.F) | 0),
            (c = (c + this.G) | 0),
            (l = (l + this.H) | 0),
            this.set(r, n, i, s, a, o, c, l);
        }
        roundClean() {
          g.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let w = (function (e) {
        let t = (t) => e().update(l(t)).digest(),
          r = e();
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = () => e()),
          t
        );
      })(() => new v());
      class x extends d {
        constructor(e, t) {
          super(),
            (this.finished = !1),
            (this.destroyed = !1),
            (function (e) {
              if ("function" != typeof e || "function" != typeof e.create)
                throw Error("Hash should be wrapped by utils.wrapConstructor");
              i(e.outputLen), i(e.blockLen);
            })(e);
          let r = l(t);
          if (
            ((this.iHash = e.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let n = this.blockLen,
            s = new Uint8Array(n);
          s.set(r.length > n ? e.create().update(r).digest() : r);
          for (let e = 0; e < s.length; e++) s[e] ^= 54;
          this.iHash.update(s), (this.oHash = e.create());
          for (let e = 0; e < s.length; e++) s[e] ^= 106;
          this.oHash.update(s), s.fill(0);
        }
        update(e) {
          return a(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          a(this),
            s(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy();
        }
        digest() {
          let e = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(e), e;
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: t,
            iHash: r,
            finished: n,
            destroyed: i,
            blockLen: s,
            outputLen: a,
          } = this;
          return (
            (e.finished = n),
            (e.destroyed = i),
            (e.blockLen = s),
            (e.outputLen = a),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = r._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let E = (e, t, r) => new x(e, t).update(r).digest();
      E.create = (e, t) => new x(e, t);
      let P = BigInt(0),
        I = BigInt(1),
        C = BigInt(2);
      function B(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function $(e) {
        if (!B(e)) throw Error("Uint8Array expected");
      }
      function A(e, t) {
        if ("boolean" != typeof t)
          throw Error(e + " boolean expected, got " + t);
      }
      let O = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function S(e) {
        $(e);
        let t = "";
        for (let r = 0; r < e.length; r++) t += O[e[r]];
        return t;
      }
      function M(e) {
        let t = e.toString(16);
        return 1 & t.length ? "0" + t : t;
      }
      function R(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        return "" === e ? P : BigInt("0x" + e);
      }
      let T = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function F(e) {
        return e >= T._0 && e <= T._9
          ? e - T._0
          : e >= T.A && e <= T.F
          ? e - (T.A - 10)
          : e >= T.a && e <= T.f
          ? e - (T.a - 10)
          : void 0;
      }
      function k(e) {
        if ("string" != typeof e)
          throw Error("hex string expected, got " + typeof e);
        let t = e.length,
          r = t / 2;
        if (t % 2)
          throw Error("hex string expected, got unpadded hex of length " + t);
        let n = new Uint8Array(r);
        for (let t = 0, i = 0; t < r; t++, i += 2) {
          let r = F(e.charCodeAt(i)),
            s = F(e.charCodeAt(i + 1));
          if (void 0 === r || void 0 === s)
            throw Error(
              'hex string expected, got non-hex character "' +
                (e[i] + e[i + 1]) +
                '" at index ' +
                i
            );
          n[t] = 16 * r + s;
        }
        return n;
      }
      function N(e) {
        return R(S(e));
      }
      function j(e) {
        return $(e), R(S(Uint8Array.from(e).reverse()));
      }
      function U(e, t) {
        return k(e.toString(16).padStart(2 * t, "0"));
      }
      function q(e, t) {
        return U(e, t).reverse();
      }
      function z(e, t, r) {
        let n;
        if ("string" == typeof t)
          try {
            n = k(t);
          } catch (t) {
            throw Error(e + " must be hex string or Uint8Array, cause: " + t);
          }
        else if (B(t)) n = Uint8Array.from(t);
        else throw Error(e + " must be hex string or Uint8Array");
        let i = n.length;
        if ("number" == typeof r && i !== r)
          throw Error(e + " of length " + r + " expected, got " + i);
        return n;
      }
      function L(...e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let n = e[r];
          $(n), (t += n.length);
        }
        let r = new Uint8Array(t);
        for (let t = 0, n = 0; t < e.length; t++) {
          let i = e[t];
          r.set(i, n), (n += i.length);
        }
        return r;
      }
      let D = (e) => "bigint" == typeof e && P <= e;
      function G(e, t, r) {
        return D(e) && D(t) && D(r) && t <= e && e < r;
      }
      function _(e, t, r, n) {
        if (!G(t, r, n))
          throw Error(
            "expected valid " + e + ": " + r + " <= n < " + n + ", got " + t
          );
      }
      function H(e) {
        let t;
        for (t = 0; e > P; e >>= I, t += 1);
        return t;
      }
      let K = (e) => (C << BigInt(e - 1)) - I,
        Q = (e) => new Uint8Array(e),
        V = (e) => Uint8Array.from(e);
      function Z(e, t, r) {
        if ("number" != typeof e || e < 2)
          throw Error("hashLen must be a number");
        if ("number" != typeof t || t < 2)
          throw Error("qByteLen must be a number");
        if ("function" != typeof r) throw Error("hmacFn must be a function");
        let n = Q(e),
          i = Q(e),
          s = 0,
          a = () => {
            n.fill(1), i.fill(0), (s = 0);
          },
          o = (...e) => r(i, n, ...e),
          c = (e = Q()) => {
            (i = o(V([0]), e)),
              (n = o()),
              0 !== e.length && ((i = o(V([1]), e)), (n = o()));
          },
          u = () => {
            if (s++ >= 1e3) throw Error("drbg: tried 1000 values");
            let e = 0,
              r = [];
            for (; e < t; ) {
              let t = (n = o()).slice();
              r.push(t), (e += n.length);
            }
            return L(...r);
          };
        return (e, t) => {
          let r;
          for (a(), c(e); !(r = t(u())); ) c();
          return a(), r;
        };
      }
      let W = {
        bigint: (e) => "bigint" == typeof e,
        function: (e) => "function" == typeof e,
        boolean: (e) => "boolean" == typeof e,
        string: (e) => "string" == typeof e,
        stringOrUint8Array: (e) => "string" == typeof e || B(e),
        isSafeInteger: (e) => Number.isSafeInteger(e),
        array: (e) => Array.isArray(e),
        field: (e, t) => t.Fp.isValid(e),
        hash: (e) =>
          "function" == typeof e && Number.isSafeInteger(e.outputLen),
      };
      function J(e, t, r = {}) {
        let n = (t, r, n) => {
          let i = W[r];
          if ("function" != typeof i) throw Error("invalid validator function");
          let s = e[t];
          if ((!n || void 0 !== s) && !i(s, e))
            throw Error(
              "param " + String(t) + " is invalid. Expected " + r + ", got " + s
            );
        };
        for (let [e, r] of Object.entries(t)) n(e, r, !1);
        for (let [e, t] of Object.entries(r)) n(e, t, !0);
        return e;
      }
      function Y(e) {
        let t = new WeakMap();
        return (r, ...n) => {
          let i = t.get(r);
          if (void 0 !== i) return i;
          let s = e(r, ...n);
          return t.set(r, s), s;
        };
      }
      let X = BigInt(0),
        ee = BigInt(1),
        et = BigInt(2),
        er = BigInt(3),
        en = BigInt(4),
        ei = BigInt(5),
        es = BigInt(8);
      function ea(e, t) {
        let r = e % t;
        return r >= X ? r : t + r;
      }
      function eo(e, t, r) {
        let n = e;
        for (; t-- > X; ) (n *= n), (n %= r);
        return n;
      }
      function ec(e, t) {
        if (e === X) throw Error("invert: expected non-zero number");
        if (t <= X) throw Error("invert: expected positive modulus, got " + t);
        let r = ea(e, t),
          n = t,
          i = X,
          s = ee,
          a = ee,
          o = X;
        for (; r !== X; ) {
          let e = n / r,
            t = n % r,
            c = i - a * e,
            u = s - o * e;
          (n = r), (r = t), (i = a), (s = o), (a = c), (o = u);
        }
        if (n !== ee) throw Error("invert: does not exist");
        return ea(i, t);
      }
      let eu = [
        "create",
        "isValid",
        "is0",
        "neg",
        "inv",
        "sqrt",
        "sqr",
        "eql",
        "add",
        "sub",
        "mul",
        "pow",
        "div",
        "addN",
        "subN",
        "mulN",
        "sqrN",
      ];
      function el(e, t) {
        let r = void 0 !== t ? t : e.toString(2).length,
          n = Math.ceil(r / 8);
        return { nBitLength: r, nByteLength: n };
      }
      function ed(e, t, r = !1, n = {}) {
        let i;
        if (e <= X) throw Error("invalid field: expected ORDER > 0, got " + e);
        let { nBitLength: s, nByteLength: a } = el(e, t);
        if (a > 2048)
          throw Error("invalid field: expected ORDER of <= 2048 bytes");
        let o = Object.freeze({
          ORDER: e,
          BITS: s,
          BYTES: a,
          MASK: K(s),
          ZERO: X,
          ONE: ee,
          create: (t) => ea(t, e),
          isValid: (t) => {
            if ("bigint" != typeof t)
              throw Error(
                "invalid field element: expected bigint, got " + typeof t
              );
            return X <= t && t < e;
          },
          is0: (e) => e === X,
          isOdd: (e) => (e & ee) === ee,
          neg: (t) => ea(-t, e),
          eql: (e, t) => e === t,
          sqr: (t) => ea(t * t, e),
          add: (t, r) => ea(t + r, e),
          sub: (t, r) => ea(t - r, e),
          mul: (t, r) => ea(t * r, e),
          pow: (e, t) =>
            (function (e, t, r) {
              if (r < X) throw Error("invalid exponent, negatives unsupported");
              if (r === X) return e.ONE;
              if (r === ee) return t;
              let n = e.ONE,
                i = t;
              for (; r > X; )
                r & ee && (n = e.mul(n, i)), (i = e.sqr(i)), (r >>= ee);
              return n;
            })(o, e, t),
          div: (t, r) => ea(t * ec(r, e), e),
          sqrN: (e) => e * e,
          addN: (e, t) => e + t,
          subN: (e, t) => e - t,
          mulN: (e, t) => e * t,
          inv: (t) => ec(t, e),
          sqrt:
            n.sqrt ||
            ((t) => (
              i ||
                (i = (function (e) {
                  if (e % en === er) {
                    let t = (e + ee) / en;
                    return function (e, r) {
                      let n = e.pow(r, t);
                      if (!e.eql(e.sqr(n), r))
                        throw Error("Cannot find square root");
                      return n;
                    };
                  }
                  if (e % es === ei) {
                    let t = (e - ei) / es;
                    return function (e, r) {
                      let n = e.mul(r, et),
                        i = e.pow(n, t),
                        s = e.mul(r, i),
                        a = e.mul(e.mul(s, et), i),
                        o = e.mul(s, e.sub(a, e.ONE));
                      if (!e.eql(e.sqr(o), r))
                        throw Error("Cannot find square root");
                      return o;
                    };
                  }
                  return (function (e) {
                    let t, r, n;
                    let i = (e - ee) / et;
                    for (t = e - ee, r = 0; t % et === X; t /= et, r++);
                    for (
                      n = et;
                      n < e &&
                      (function (e, t, r) {
                        if (t < X)
                          throw Error(
                            "invalid exponent, negatives unsupported"
                          );
                        if (r <= X) throw Error("invalid modulus");
                        if (r === ee) return X;
                        let n = ee;
                        for (; t > X; )
                          t & ee && (n = (n * e) % r),
                            (e = (e * e) % r),
                            (t >>= ee);
                        return n;
                      })(n, i, e) !==
                        e - ee;
                      n++
                    )
                      if (n > 1e3)
                        throw Error(
                          "Cannot find square root: likely non-prime P"
                        );
                    if (1 === r) {
                      let t = (e + ee) / en;
                      return function (e, r) {
                        let n = e.pow(r, t);
                        if (!e.eql(e.sqr(n), r))
                          throw Error("Cannot find square root");
                        return n;
                      };
                    }
                    let s = (t + ee) / et;
                    return function (e, a) {
                      if (e.pow(a, i) === e.neg(e.ONE))
                        throw Error("Cannot find square root");
                      let o = r,
                        c = e.pow(e.mul(e.ONE, n), t),
                        u = e.pow(a, s),
                        l = e.pow(a, t);
                      for (; !e.eql(l, e.ONE); ) {
                        if (e.eql(l, e.ZERO)) return e.ZERO;
                        let t = 1;
                        for (let r = e.sqr(l); t < o && !e.eql(r, e.ONE); t++)
                          r = e.sqr(r);
                        let r = e.pow(c, ee << BigInt(o - t - 1));
                        (c = e.sqr(r)),
                          (u = e.mul(u, r)),
                          (l = e.mul(l, c)),
                          (o = t);
                      }
                      return u;
                    };
                  })(e);
                })(e)),
              i(o, t)
            )),
          invertBatch: (e) =>
            (function (e, t) {
              let r = Array(t.length),
                n = t.reduce(
                  (t, n, i) => (e.is0(n) ? t : ((r[i] = t), e.mul(t, n))),
                  e.ONE
                ),
                i = e.inv(n);
              return (
                t.reduceRight(
                  (t, n, i) =>
                    e.is0(n) ? t : ((r[i] = e.mul(t, r[i])), e.mul(t, n)),
                  i
                ),
                r
              );
            })(o, e),
          cmov: (e, t, r) => (r ? t : e),
          toBytes: (e) => (r ? q(e, a) : U(e, a)),
          fromBytes: (e) => {
            if (e.length !== a)
              throw Error(
                "Field.fromBytes: expected " + a + " bytes, got " + e.length
              );
            return r ? j(e) : N(e);
          },
        });
        return Object.freeze(o);
      }
      function eh(e) {
        if ("bigint" != typeof e) throw Error("field order must be bigint");
        return Math.ceil(e.toString(2).length / 8);
      }
      function ef(e) {
        let t = eh(e);
        return t + Math.ceil(t / 2);
      }
      let ep = BigInt(0),
        ey = BigInt(1);
      function eb(e, t) {
        let r = t.negate();
        return e ? r : t;
      }
      function em(e, t) {
        if (!Number.isSafeInteger(e) || e <= 0 || e > t)
          throw Error(
            "invalid window size, expected [1.." + t + "], got W=" + e
          );
      }
      function eg(e, t) {
        return (
          em(e, t), { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) }
        );
      }
      let ev = new WeakMap(),
        ew = new WeakMap();
      function ex(e) {
        return ew.get(e) || 1;
      }
      function eE(e) {
        return (
          J(
            e.Fp,
            eu.reduce((e, t) => ((e[t] = "function"), e), {
              ORDER: "bigint",
              MASK: "bigint",
              BYTES: "isSafeInteger",
              BITS: "isSafeInteger",
            })
          ),
          J(
            e,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
          ),
          Object.freeze({ ...el(e.n, e.nBitLength), ...e, p: e.Fp.ORDER })
        );
      }
      function eP(e) {
        void 0 !== e.lowS && A("lowS", e.lowS),
          void 0 !== e.prehash && A("prehash", e.prehash);
      }
      let { Ph: eI, aT: eC } = n,
        eB = {
          Err: class extends Error {
            constructor(e = "") {
              super(e);
            }
          },
          _tlv: {
            encode: (e, t) => {
              let { Err: r } = eB;
              if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
              if (1 & t.length) throw new r("tlv.encode: unpadded data");
              let n = t.length / 2,
                i = M(n);
              if ((i.length / 2) & 128)
                throw new r("tlv.encode: long form length too big");
              let s = n > 127 ? M((i.length / 2) | 128) : "";
              return M(e) + s + i + t;
            },
            decode(e, t) {
              let { Err: r } = eB,
                n = 0;
              if (e < 0 || e > 256) throw new r("tlv.encode: wrong tag");
              if (t.length < 2 || t[n++] !== e)
                throw new r("tlv.decode: wrong tlv");
              let i = t[n++],
                s = 0;
              if (128 & i) {
                let e = 127 & i;
                if (!e)
                  throw new r(
                    "tlv.decode(long): indefinite length not supported"
                  );
                if (e > 4)
                  throw new r("tlv.decode(long): byte length is too big");
                let a = t.subarray(n, n + e);
                if (a.length !== e)
                  throw new r("tlv.decode: length bytes not complete");
                if (0 === a[0])
                  throw new r("tlv.decode(long): zero leftmost byte");
                for (let e of a) s = (s << 8) | e;
                if (((n += e), s < 128))
                  throw new r("tlv.decode(long): not minimal encoding");
              } else s = i;
              let a = t.subarray(n, n + s);
              if (a.length !== s) throw new r("tlv.decode: wrong value length");
              return { v: a, l: t.subarray(n + s) };
            },
          },
          _int: {
            encode(e) {
              let { Err: t } = eB;
              if (e < e$)
                throw new t("integer: negative integers are not allowed");
              let r = M(e);
              if (
                (8 & Number.parseInt(r[0], 16) && (r = "00" + r), 1 & r.length)
              )
                throw new t("unexpected DER parsing assertion: unpadded hex");
              return r;
            },
            decode(e) {
              let { Err: t } = eB;
              if (128 & e[0])
                throw new t("invalid signature integer: negative");
              if (0 === e[0] && !(128 & e[1]))
                throw new t(
                  "invalid signature integer: unnecessary leading zero"
                );
              return eI(e);
            },
          },
          toSig(e) {
            let { Err: t, _int: r, _tlv: n } = eB,
              i = "string" == typeof e ? eC(e) : e;
            $(i);
            let { v: s, l: a } = n.decode(48, i);
            if (a.length)
              throw new t("invalid signature: left bytes after parsing");
            let { v: o, l: c } = n.decode(2, s),
              { v: u, l: l } = n.decode(2, c);
            if (l.length)
              throw new t("invalid signature: left bytes after parsing");
            return { r: r.decode(o), s: r.decode(u) };
          },
          hexFromSig(e) {
            let { _tlv: t, _int: r } = eB,
              n = t.encode(2, r.encode(e.r)),
              i = t.encode(2, r.encode(e.s));
            return t.encode(48, n + i);
          },
        },
        e$ = BigInt(0),
        eA = BigInt(1),
        eO = (BigInt(2), BigInt(3)),
        eS =
          (BigInt(4),
          BigInt(
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
          )),
        eM = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        eR = BigInt(1),
        eT = BigInt(2),
        eF = (e, t) => (e + t / eT) / t,
        ek = ed(eS, void 0, void 0, {
          sqrt: function (e) {
            let t = BigInt(3),
              r = BigInt(6),
              n = BigInt(11),
              i = BigInt(22),
              s = BigInt(23),
              a = BigInt(44),
              o = BigInt(88),
              c = (e * e * e) % eS,
              u = (c * c * e) % eS,
              l = (eo(u, t, eS) * u) % eS,
              d = (eo(l, t, eS) * u) % eS,
              h = (eo(d, eT, eS) * c) % eS,
              f = (eo(h, n, eS) * h) % eS,
              p = (eo(f, i, eS) * f) % eS,
              y = (eo(p, a, eS) * p) % eS,
              b = (eo(y, o, eS) * y) % eS,
              m = (eo(b, a, eS) * p) % eS,
              g = (eo(m, t, eS) * u) % eS,
              v = (eo(g, s, eS) * f) % eS,
              w = (eo(v, r, eS) * c) % eS,
              x = eo(w, eT, eS);
            if (!ek.eql(ek.sqr(x), e)) throw Error("Cannot find square root");
            return x;
          },
        }),
        eN = (function (e, t) {
          let r = (t) =>
            (function (e) {
              let t = (function (e) {
                  let t = eE(e);
                  return (
                    J(
                      t,
                      {
                        hash: "hash",
                        hmac: "function",
                        randomBytes: "function",
                      },
                      {
                        bits2int: "function",
                        bits2int_modN: "function",
                        lowS: "boolean",
                      }
                    ),
                    Object.freeze({ lowS: !0, ...t })
                  );
                })(e),
                { Fp: r, n: n } = t,
                i = r.BYTES + 1,
                s = 2 * r.BYTES + 1;
              function a(e) {
                return ea(e, n);
              }
              let {
                  ProjectivePoint: o,
                  normPrivateKeyToScalar: c,
                  weierstrassEquation: u,
                  isWithinCurveOrder: l,
                } = (function (e) {
                  var t;
                  let r = (function (e) {
                      let t = eE(e);
                      J(
                        t,
                        { a: "field", b: "field" },
                        {
                          allowedPrivateKeyLengths: "array",
                          wrapPrivateKey: "boolean",
                          isTorsionFree: "function",
                          clearCofactor: "function",
                          allowInfinityPoint: "boolean",
                          fromBytes: "function",
                          toBytes: "function",
                        }
                      );
                      let { endo: r, Fp: n, a: i } = t;
                      if (r) {
                        if (!n.eql(i, n.ZERO))
                          throw Error(
                            "invalid endomorphism, can only be defined for Koblitz curves that have a=0"
                          );
                        if (
                          "object" != typeof r ||
                          "bigint" != typeof r.beta ||
                          "function" != typeof r.splitScalar
                        )
                          throw Error(
                            "invalid endomorphism, expected beta: bigint and splitScalar: function"
                          );
                      }
                      return Object.freeze({ ...t });
                    })(e),
                    { Fp: n } = r,
                    i = ed(r.n, r.nBitLength),
                    s =
                      r.toBytes ||
                      ((e, t, r) => {
                        let i = t.toAffine();
                        return L(
                          Uint8Array.from([4]),
                          n.toBytes(i.x),
                          n.toBytes(i.y)
                        );
                      }),
                    a =
                      r.fromBytes ||
                      ((e) => {
                        let t = e.subarray(1);
                        return {
                          x: n.fromBytes(t.subarray(0, n.BYTES)),
                          y: n.fromBytes(t.subarray(n.BYTES, 2 * n.BYTES)),
                        };
                      });
                  function o(e) {
                    let { a: t, b: i } = r,
                      s = n.sqr(e),
                      a = n.mul(s, e);
                    return n.add(n.add(a, n.mul(e, t)), i);
                  }
                  if (!n.eql(n.sqr(r.Gy), o(r.Gx)))
                    throw Error("bad generator point: equation left != right");
                  function c(e) {
                    let t;
                    let {
                      allowedPrivateKeyLengths: n,
                      nByteLength: i,
                      wrapPrivateKey: s,
                      n: a,
                    } = r;
                    if (n && "bigint" != typeof e) {
                      if (
                        (B(e) && (e = S(e)),
                        "string" != typeof e || !n.includes(e.length))
                      )
                        throw Error("invalid private key");
                      e = e.padStart(2 * i, "0");
                    }
                    try {
                      t = "bigint" == typeof e ? e : N(z("private key", e, i));
                    } catch (t) {
                      throw Error(
                        "invalid private key, expected hex or " +
                          i +
                          " bytes, got " +
                          typeof e
                      );
                    }
                    return s && (t = ea(t, a)), _("private key", t, eA, a), t;
                  }
                  function u(e) {
                    if (!(e instanceof h))
                      throw Error("ProjectivePoint expected");
                  }
                  let l = Y((e, t) => {
                      let { px: r, py: i, pz: s } = e;
                      if (n.eql(s, n.ONE)) return { x: r, y: i };
                      let a = e.is0();
                      null == t && (t = a ? n.ONE : n.inv(s));
                      let o = n.mul(r, t),
                        c = n.mul(i, t),
                        u = n.mul(s, t);
                      if (a) return { x: n.ZERO, y: n.ZERO };
                      if (!n.eql(u, n.ONE)) throw Error("invZ was invalid");
                      return { x: o, y: c };
                    }),
                    d = Y((e) => {
                      if (e.is0()) {
                        if (r.allowInfinityPoint && !n.is0(e.py)) return;
                        throw Error("bad point: ZERO");
                      }
                      let { x: t, y: i } = e.toAffine();
                      if (!n.isValid(t) || !n.isValid(i))
                        throw Error("bad point: x or y not FE");
                      let s = n.sqr(i),
                        a = o(t);
                      if (!n.eql(s, a))
                        throw Error("bad point: equation left != right");
                      if (!e.isTorsionFree())
                        throw Error("bad point: not in prime-order subgroup");
                      return !0;
                    });
                  class h {
                    constructor(e, t, r) {
                      if (
                        ((this.px = e),
                        (this.py = t),
                        (this.pz = r),
                        null == e || !n.isValid(e))
                      )
                        throw Error("x required");
                      if (null == t || !n.isValid(t)) throw Error("y required");
                      if (null == r || !n.isValid(r)) throw Error("z required");
                      Object.freeze(this);
                    }
                    static fromAffine(e) {
                      let { x: t, y: r } = e || {};
                      if (!e || !n.isValid(t) || !n.isValid(r))
                        throw Error("invalid affine point");
                      if (e instanceof h)
                        throw Error("projective point not allowed");
                      let i = (e) => n.eql(e, n.ZERO);
                      return i(t) && i(r) ? h.ZERO : new h(t, r, n.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(e) {
                      let t = n.invertBatch(e.map((e) => e.pz));
                      return e
                        .map((e, r) => e.toAffine(t[r]))
                        .map(h.fromAffine);
                    }
                    static fromHex(e) {
                      let t = h.fromAffine(a(z("pointHex", e)));
                      return t.assertValidity(), t;
                    }
                    static fromPrivateKey(e) {
                      return h.BASE.multiply(c(e));
                    }
                    static msm(e, t) {
                      return (function (e, t, r, n) {
                        if (
                          ((function (e, t) {
                            if (!Array.isArray(e))
                              throw Error("array expected");
                            e.forEach((e, r) => {
                              if (!(e instanceof t))
                                throw Error("invalid point at index " + r);
                            });
                          })(r, e),
                          (function (e, t) {
                            if (!Array.isArray(e))
                              throw Error("array of scalars expected");
                            e.forEach((e, r) => {
                              if (!t.isValid(e))
                                throw Error("invalid scalar at index " + r);
                            });
                          })(n, t),
                          r.length !== n.length)
                        )
                          throw Error(
                            "arrays of points and scalars must have equal length"
                          );
                        let i = e.ZERO,
                          s = H(BigInt(r.length)),
                          a = s > 12 ? s - 3 : s > 4 ? s - 2 : s ? 2 : 1,
                          o = (1 << a) - 1,
                          c = Array(o + 1).fill(i),
                          u = Math.floor((t.BITS - 1) / a) * a,
                          l = i;
                        for (let e = u; e >= 0; e -= a) {
                          c.fill(i);
                          for (let t = 0; t < n.length; t++) {
                            let i = Number((n[t] >> BigInt(e)) & BigInt(o));
                            c[i] = c[i].add(r[t]);
                          }
                          let t = i;
                          for (let e = c.length - 1, r = i; e > 0; e--)
                            (r = r.add(c[e])), (t = t.add(r));
                          if (((l = l.add(t)), 0 !== e))
                            for (let e = 0; e < a; e++) l = l.double();
                        }
                        return l;
                      })(h, i, e, t);
                    }
                    _setWindowSize(e) {
                      p.setWindowSize(this, e);
                    }
                    assertValidity() {
                      d(this);
                    }
                    hasEvenY() {
                      let { y: e } = this.toAffine();
                      if (n.isOdd) return !n.isOdd(e);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(e) {
                      u(e);
                      let { px: t, py: r, pz: i } = this,
                        { px: s, py: a, pz: o } = e,
                        c = n.eql(n.mul(t, o), n.mul(s, i)),
                        l = n.eql(n.mul(r, o), n.mul(a, i));
                      return c && l;
                    }
                    negate() {
                      return new h(this.px, n.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: e, b: t } = r,
                        i = n.mul(t, eO),
                        { px: s, py: a, pz: o } = this,
                        c = n.ZERO,
                        u = n.ZERO,
                        l = n.ZERO,
                        d = n.mul(s, s),
                        f = n.mul(a, a),
                        p = n.mul(o, o),
                        y = n.mul(s, a);
                      return (
                        (y = n.add(y, y)),
                        (l = n.mul(s, o)),
                        (l = n.add(l, l)),
                        (c = n.mul(e, l)),
                        (u = n.mul(i, p)),
                        (u = n.add(c, u)),
                        (c = n.sub(f, u)),
                        (u = n.add(f, u)),
                        (u = n.mul(c, u)),
                        (c = n.mul(y, c)),
                        (l = n.mul(i, l)),
                        (p = n.mul(e, p)),
                        (y = n.sub(d, p)),
                        (y = n.mul(e, y)),
                        (y = n.add(y, l)),
                        (l = n.add(d, d)),
                        (d = n.add(l, d)),
                        (d = n.add(d, p)),
                        (d = n.mul(d, y)),
                        (u = n.add(u, d)),
                        (p = n.mul(a, o)),
                        (p = n.add(p, p)),
                        (d = n.mul(p, y)),
                        (c = n.sub(c, d)),
                        (l = n.mul(p, f)),
                        (l = n.add(l, l)),
                        new h(c, u, (l = n.add(l, l)))
                      );
                    }
                    add(e) {
                      u(e);
                      let { px: t, py: i, pz: s } = this,
                        { px: a, py: o, pz: c } = e,
                        l = n.ZERO,
                        d = n.ZERO,
                        f = n.ZERO,
                        p = r.a,
                        y = n.mul(r.b, eO),
                        b = n.mul(t, a),
                        m = n.mul(i, o),
                        g = n.mul(s, c),
                        v = n.add(t, i),
                        w = n.add(a, o);
                      (v = n.mul(v, w)),
                        (w = n.add(b, m)),
                        (v = n.sub(v, w)),
                        (w = n.add(t, s));
                      let x = n.add(a, c);
                      return (
                        (w = n.mul(w, x)),
                        (x = n.add(b, g)),
                        (w = n.sub(w, x)),
                        (x = n.add(i, s)),
                        (l = n.add(o, c)),
                        (x = n.mul(x, l)),
                        (l = n.add(m, g)),
                        (x = n.sub(x, l)),
                        (f = n.mul(p, w)),
                        (l = n.mul(y, g)),
                        (f = n.add(l, f)),
                        (l = n.sub(m, f)),
                        (f = n.add(m, f)),
                        (d = n.mul(l, f)),
                        (m = n.add(b, b)),
                        (m = n.add(m, b)),
                        (g = n.mul(p, g)),
                        (w = n.mul(y, w)),
                        (m = n.add(m, g)),
                        (g = n.sub(b, g)),
                        (g = n.mul(p, g)),
                        (w = n.add(w, g)),
                        (b = n.mul(m, w)),
                        (d = n.add(d, b)),
                        (b = n.mul(x, w)),
                        (l = n.mul(v, l)),
                        (l = n.sub(l, b)),
                        (b = n.mul(v, m)),
                        (f = n.mul(x, f)),
                        new h(l, d, (f = n.add(f, b)))
                      );
                    }
                    subtract(e) {
                      return this.add(e.negate());
                    }
                    is0() {
                      return this.equals(h.ZERO);
                    }
                    wNAF(e) {
                      return p.wNAFCached(this, e, h.normalizeZ);
                    }
                    multiplyUnsafe(e) {
                      let { endo: t, n: i } = r;
                      _("scalar", e, e$, i);
                      let s = h.ZERO;
                      if (e === e$) return s;
                      if (this.is0() || e === eA) return this;
                      if (!t || p.hasPrecomputes(this))
                        return p.wNAFCachedUnsafe(this, e, h.normalizeZ);
                      let {
                          k1neg: a,
                          k1: o,
                          k2neg: c,
                          k2: u,
                        } = t.splitScalar(e),
                        l = s,
                        d = s,
                        f = this;
                      for (; o > e$ || u > e$; )
                        o & eA && (l = l.add(f)),
                          u & eA && (d = d.add(f)),
                          (f = f.double()),
                          (o >>= eA),
                          (u >>= eA);
                      return (
                        a && (l = l.negate()),
                        c && (d = d.negate()),
                        (d = new h(n.mul(d.px, t.beta), d.py, d.pz)),
                        l.add(d)
                      );
                    }
                    multiply(e) {
                      let t, i;
                      let { endo: s, n: a } = r;
                      if ((_("scalar", e, eA, a), s)) {
                        let {
                            k1neg: r,
                            k1: a,
                            k2neg: o,
                            k2: c,
                          } = s.splitScalar(e),
                          { p: u, f: l } = this.wNAF(a),
                          { p: d, f: f } = this.wNAF(c);
                        (u = p.constTimeNegate(r, u)),
                          (d = p.constTimeNegate(o, d)),
                          (d = new h(n.mul(d.px, s.beta), d.py, d.pz)),
                          (t = u.add(d)),
                          (i = l.add(f));
                      } else {
                        let { p: r, f: n } = this.wNAF(e);
                        (t = r), (i = n);
                      }
                      return h.normalizeZ([t, i])[0];
                    }
                    multiplyAndAddUnsafe(e, t, r) {
                      let n = h.BASE,
                        i = (e, t) =>
                          t !== e$ && t !== eA && e.equals(n)
                            ? e.multiply(t)
                            : e.multiplyUnsafe(t),
                        s = i(this, t).add(i(e, r));
                      return s.is0() ? void 0 : s;
                    }
                    toAffine(e) {
                      return l(this, e);
                    }
                    isTorsionFree() {
                      let { h: e, isTorsionFree: t } = r;
                      if (e === eA) return !0;
                      if (t) return t(h, this);
                      throw Error(
                        "isTorsionFree() has not been declared for the elliptic curve"
                      );
                    }
                    clearCofactor() {
                      let { h: e, clearCofactor: t } = r;
                      return e === eA
                        ? this
                        : t
                        ? t(h, this)
                        : this.multiplyUnsafe(r.h);
                    }
                    toRawBytes(e = !0) {
                      return (
                        A("isCompressed", e),
                        this.assertValidity(),
                        s(h, this, e)
                      );
                    }
                    toHex(e = !0) {
                      return A("isCompressed", e), S(this.toRawBytes(e));
                    }
                  }
                  (h.BASE = new h(r.Gx, r.Gy, n.ONE)),
                    (h.ZERO = new h(n.ZERO, n.ONE, n.ZERO));
                  let f = r.nBitLength,
                    p =
                      ((t = r.endo ? Math.ceil(f / 2) : f),
                      {
                        constTimeNegate: eb,
                        hasPrecomputes: (e) => 1 !== ex(e),
                        unsafeLadder(e, t, r = h.ZERO) {
                          let n = e;
                          for (; t > ep; )
                            t & ey && (r = r.add(n)),
                              (n = n.double()),
                              (t >>= ey);
                          return r;
                        },
                        precomputeWindow(e, r) {
                          let { windows: n, windowSize: i } = eg(r, t),
                            s = [],
                            a = e,
                            o = a;
                          for (let e = 0; e < n; e++) {
                            (o = a), s.push(o);
                            for (let e = 1; e < i; e++)
                              (o = o.add(a)), s.push(o);
                            a = o.double();
                          }
                          return s;
                        },
                        wNAF(e, r, n) {
                          let { windows: i, windowSize: s } = eg(e, t),
                            a = h.ZERO,
                            o = h.BASE,
                            c = BigInt(2 ** e - 1),
                            u = 2 ** e,
                            l = BigInt(e);
                          for (let e = 0; e < i; e++) {
                            let t = e * s,
                              i = Number(n & c);
                            (n >>= l), i > s && ((i -= u), (n += ey));
                            let d = t + Math.abs(i) - 1,
                              h = e % 2 != 0,
                              f = i < 0;
                            0 === i
                              ? (o = o.add(eb(h, r[t])))
                              : (a = a.add(eb(f, r[d])));
                          }
                          return { p: a, f: o };
                        },
                        wNAFUnsafe(e, r, n, i = h.ZERO) {
                          let { windows: s, windowSize: a } = eg(e, t),
                            o = BigInt(2 ** e - 1),
                            c = 2 ** e,
                            u = BigInt(e);
                          for (let e = 0; e < s; e++) {
                            let t = e * a;
                            if (n === ep) break;
                            let s = Number(n & o);
                            if (
                              ((n >>= u),
                              s > a && ((s -= c), (n += ey)),
                              0 === s)
                            )
                              continue;
                            let l = r[t + Math.abs(s) - 1];
                            s < 0 && (l = l.negate()), (i = i.add(l));
                          }
                          return i;
                        },
                        getPrecomputes(e, t, r) {
                          let n = ev.get(t);
                          return (
                            n ||
                              ((n = this.precomputeWindow(t, e)),
                              1 !== e && ev.set(t, r(n))),
                            n
                          );
                        },
                        wNAFCached(e, t, r) {
                          let n = ex(e);
                          return this.wNAF(n, this.getPrecomputes(n, e, r), t);
                        },
                        wNAFCachedUnsafe(e, t, r, n) {
                          let i = ex(e);
                          return 1 === i
                            ? this.unsafeLadder(e, t, n)
                            : this.wNAFUnsafe(
                                i,
                                this.getPrecomputes(i, e, r),
                                t,
                                n
                              );
                        },
                        setWindowSize(e, r) {
                          em(r, t), ew.set(e, r), ev.delete(e);
                        },
                      });
                  return {
                    CURVE: r,
                    ProjectivePoint: h,
                    normPrivateKeyToScalar: c,
                    weierstrassEquation: o,
                    isWithinCurveOrder: function (e) {
                      return G(e, eA, r.n);
                    },
                  };
                })({
                  ...t,
                  toBytes(e, t, n) {
                    let i = t.toAffine(),
                      s = r.toBytes(i.x),
                      a = L;
                    return (A("isCompressed", n), n)
                      ? a(Uint8Array.from([t.hasEvenY() ? 2 : 3]), s)
                      : a(Uint8Array.from([4]), s, r.toBytes(i.y));
                  },
                  fromBytes(e) {
                    let t = e.length,
                      n = e[0],
                      a = e.subarray(1);
                    if (t === i && (2 === n || 3 === n)) {
                      let e;
                      let t = N(a);
                      if (!G(t, eA, r.ORDER))
                        throw Error("Point is not on curve");
                      let i = u(t);
                      try {
                        e = r.sqrt(i);
                      } catch (e) {
                        throw Error(
                          "Point is not on curve" +
                            (e instanceof Error ? ": " + e.message : "")
                        );
                      }
                      return (
                        ((1 & n) == 1) != ((e & eA) === eA) && (e = r.neg(e)),
                        { x: t, y: e }
                      );
                    }
                    if (t === s && 4 === n)
                      return {
                        x: r.fromBytes(a.subarray(0, r.BYTES)),
                        y: r.fromBytes(a.subarray(r.BYTES, 2 * r.BYTES)),
                      };
                    throw Error(
                      "invalid Point, expected length of " +
                        i +
                        ", or uncompressed " +
                        s +
                        ", got " +
                        t
                    );
                  },
                }),
                d = (e) => S(U(e, t.nByteLength)),
                h = (e, t, r) => N(e.slice(t, r));
              class f {
                constructor(e, t, r) {
                  (this.r = e),
                    (this.s = t),
                    (this.recovery = r),
                    this.assertValidity();
                }
                static fromCompact(e) {
                  let r = t.nByteLength;
                  return new f(
                    h((e = z("compactSignature", e, 2 * r)), 0, r),
                    h(e, r, 2 * r)
                  );
                }
                static fromDER(e) {
                  let { r: t, s: r } = eB.toSig(z("DER", e));
                  return new f(t, r);
                }
                assertValidity() {
                  _("r", this.r, eA, n), _("s", this.s, eA, n);
                }
                addRecoveryBit(e) {
                  return new f(this.r, this.s, e);
                }
                recoverPublicKey(e) {
                  let { r: i, s, recovery: c } = this,
                    u = b(z("msgHash", e));
                  if (null == c || ![0, 1, 2, 3].includes(c))
                    throw Error("recovery id invalid");
                  let l = 2 === c || 3 === c ? i + t.n : i;
                  if (l >= r.ORDER) throw Error("recovery id 2 or 3 invalid");
                  let h = (1 & c) == 0 ? "02" : "03",
                    f = o.fromHex(h + d(l)),
                    p = ec(l, n),
                    y = a(-u * p),
                    m = a(s * p),
                    g = o.BASE.multiplyAndAddUnsafe(f, y, m);
                  if (!g) throw Error("point at infinify");
                  return g.assertValidity(), g;
                }
                hasHighS() {
                  return this.s > n >> eA;
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new f(this.r, a(-this.s), this.recovery)
                    : this;
                }
                toDERRawBytes() {
                  return k(this.toDERHex());
                }
                toDERHex() {
                  return eB.hexFromSig({ r: this.r, s: this.s });
                }
                toCompactRawBytes() {
                  return k(this.toCompactHex());
                }
                toCompactHex() {
                  return d(this.r) + d(this.s);
                }
              }
              function p(e) {
                let t = B(e),
                  r = "string" == typeof e,
                  n = (t || r) && e.length;
                return t
                  ? n === i || n === s
                  : r
                  ? n === 2 * i || n === 2 * s
                  : e instanceof o;
              }
              let y =
                  t.bits2int ||
                  function (e) {
                    if (e.length > 8192) throw Error("input is too large");
                    let r = N(e),
                      n = 8 * e.length - t.nBitLength;
                    return n > 0 ? r >> BigInt(n) : r;
                  },
                b =
                  t.bits2int_modN ||
                  function (e) {
                    return a(y(e));
                  },
                m = K(t.nBitLength);
              function g(e) {
                return (
                  _("num < 2^" + t.nBitLength, e, e$, m), U(e, t.nByteLength)
                );
              }
              let v = { lowS: t.lowS, prehash: !1 },
                w = { lowS: t.lowS, prehash: !1 };
              return (
                o.BASE._setWindowSize(8),
                {
                  CURVE: t,
                  getPublicKey: function (e, t = !0) {
                    return o.fromPrivateKey(e).toRawBytes(t);
                  },
                  getSharedSecret: function (e, t, r = !0) {
                    if (p(e)) throw Error("first arg must be private key");
                    if (!p(t)) throw Error("second arg must be public key");
                    return o.fromHex(t).multiply(c(e)).toRawBytes(r);
                  },
                  sign: function (e, i, s = v) {
                    let { seed: u, k2sig: d } = (function (e, i, s = v) {
                      if (["recovered", "canonical"].some((e) => e in s))
                        throw Error("sign() legacy options not supported");
                      let { hash: u, randomBytes: d } = t,
                        { lowS: h, prehash: p, extraEntropy: m } = s;
                      null == h && (h = !0),
                        (e = z("msgHash", e)),
                        eP(s),
                        p && (e = z("prehashed msgHash", u(e)));
                      let w = b(e),
                        x = c(i),
                        E = [g(x), g(w)];
                      if (null != m && !1 !== m) {
                        let e = !0 === m ? d(r.BYTES) : m;
                        E.push(z("extraEntropy", e));
                      }
                      return {
                        seed: L(...E),
                        k2sig: function (e) {
                          let t = y(e);
                          if (!l(t)) return;
                          let r = ec(t, n),
                            i = o.BASE.multiply(t).toAffine(),
                            s = a(i.x);
                          if (s === e$) return;
                          let c = a(r * a(w + s * x));
                          if (c === e$) return;
                          let u = (i.x === s ? 0 : 2) | Number(i.y & eA),
                            d = c;
                          if (h && c > n >> eA)
                            (d = c > n >> eA ? a(-c) : c), (u ^= 1);
                          return new f(s, d, u);
                        },
                      };
                    })(e, i, s);
                    return Z(t.hash.outputLen, t.nByteLength, t.hmac)(u, d);
                  },
                  verify: function (e, r, i, s = w) {
                    let c, u;
                    (r = z("msgHash", r)), (i = z("publicKey", i));
                    let { lowS: l, prehash: d, format: h } = s;
                    if ((eP(s), "strict" in s))
                      throw Error("options.strict was renamed to lowS");
                    if (void 0 !== h && "compact" !== h && "der" !== h)
                      throw Error("format must be compact or der");
                    let p = "string" == typeof e || B(e),
                      y =
                        !p &&
                        !h &&
                        "object" == typeof e &&
                        null !== e &&
                        "bigint" == typeof e.r &&
                        "bigint" == typeof e.s;
                    if (!p && !y)
                      throw Error(
                        "invalid signature, expected Uint8Array, hex string or Signature instance"
                      );
                    try {
                      if ((y && (u = new f(e.r, e.s)), p)) {
                        try {
                          "compact" !== h && (u = f.fromDER(e));
                        } catch (e) {
                          if (!(e instanceof eB.Err)) throw e;
                        }
                        u || "der" === h || (u = f.fromCompact(e));
                      }
                      c = o.fromHex(i);
                    } catch (e) {
                      return !1;
                    }
                    if (!u || (l && u.hasHighS())) return !1;
                    d && (r = t.hash(r));
                    let { r: m, s: g } = u,
                      v = b(r),
                      x = ec(g, n),
                      E = a(v * x),
                      P = a(m * x),
                      I = o.BASE.multiplyAndAddUnsafe(c, E, P)?.toAffine();
                    return !!I && a(I.x) === m;
                  },
                  ProjectivePoint: o,
                  Signature: f,
                  utils: {
                    isValidPrivateKey(e) {
                      try {
                        return c(e), !0;
                      } catch (e) {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: c,
                    randomPrivateKey: () => {
                      let e = ef(t.n);
                      return (function (e, t, r = !1) {
                        let n = e.length,
                          i = eh(t),
                          s = ef(t);
                        if (n < 16 || n < s || n > 1024)
                          throw Error(
                            "expected " + s + "-1024 bytes of input, got " + n
                          );
                        let a = ea(r ? N(e) : j(e), t - ee) + ee;
                        return r ? q(a, i) : U(a, i);
                      })(t.randomBytes(e), t.n);
                    },
                    precompute: (e = 8, t = o.BASE) => (
                      t._setWindowSize(e), t.multiply(BigInt(3)), t
                    ),
                  },
                }
              );
            })({
              ...e,
              hash: t,
              hmac: (e, ...r) =>
                E(
                  t,
                  e,
                  (function (...e) {
                    let t = 0;
                    for (let r = 0; r < e.length; r++) {
                      let n = e[r];
                      s(n), (t += n.length);
                    }
                    let r = new Uint8Array(t);
                    for (let t = 0, n = 0; t < e.length; t++) {
                      let i = e[t];
                      r.set(i, n), (n += i.length);
                    }
                    return r;
                  })(...r)
                ),
              randomBytes: h,
            });
          return Object.freeze({ ...r(t), create: r });
        })(
          {
            a: BigInt(0),
            b: BigInt(7),
            Fp: ek,
            n: eM,
            Gx: BigInt(
              "55066263022277343669578718895168534326250603453777594175500187360389116729240"
            ),
            Gy: BigInt(
              "32670510020758816978083085130507043184471273380659243275938904335757337482424"
            ),
            h: BigInt(1),
            lowS: !0,
            endo: {
              beta: BigInt(
                "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
              ),
              splitScalar: (e) => {
                let t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                  r = -eR * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                  n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                  i = BigInt("0x100000000000000000000000000000000"),
                  s = eF(t * e, eM),
                  a = eF(-r * e, eM),
                  o = ea(e - s * t - a * n, eM),
                  c = ea(-s * r - a * t, eM),
                  u = o > i,
                  l = c > i;
                if ((u && (o = eM - o), l && (c = eM - c), o > i || c > i))
                  throw Error("splitScalar: Endomorphism failed, k=" + e);
                return { k1neg: u, k1: o, k2neg: l, k2: c };
              },
            },
          },
          w
        );
      BigInt(0), eN.ProjectivePoint;
    },
    99393: (e, t, r) => {
      function n(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error("positive integer expected, got " + e);
      }
      function i(e, ...t) {
        if (
          !(
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            "Uint8Array expected of length " + t + ", got length=" + e.length
          );
      }
      function s(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      function a(e, t) {
        i(e);
        let r = t.outputLen;
        if (e.length < r)
          throw Error(
            "digestInto() expects output buffer of length at least " + r
          );
      }
      r.d(t, { CC: () => s, DO: () => i, Fe: () => n, Ht: () => a });
    },
    48775: (e, t, r) => {
      r.d(t, { sc: () => h });
      var n = r(99393),
        i = r(98071);
      let s = (e, t, r) => (e & t) ^ (~e & r),
        a = (e, t, r) => (e & t) ^ (e & r) ^ (t & r);
      class o extends i.Vw {
        constructor(e, t, r, n) {
          super(),
            (this.blockLen = e),
            (this.outputLen = t),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(e)),
            (this.view = (0, i.O8)(this.buffer));
        }
        update(e) {
          (0, n.CC)(this);
          let { view: t, buffer: r, blockLen: s } = this,
            a = (e = (0, i.ZJ)(e)).length;
          for (let n = 0; n < a; ) {
            let o = Math.min(s - this.pos, a - n);
            if (o === s) {
              let t = (0, i.O8)(e);
              for (; s <= a - n; n += s) this.process(t, n);
              continue;
            }
            r.set(e.subarray(n, n + o), this.pos),
              (this.pos += o),
              (n += o),
              this.pos === s && (this.process(t, 0), (this.pos = 0));
          }
          return (this.length += e.length), this.roundClean(), this;
        }
        digestInto(e) {
          (0, n.CC)(this), (0, n.Ht)(e, this), (this.finished = !0);
          let { buffer: t, view: r, blockLen: s, isLE: a } = this,
            { pos: o } = this;
          (t[o++] = 128),
            this.buffer.subarray(o).fill(0),
            this.padOffset > s - o && (this.process(r, 0), (o = 0));
          for (let e = o; e < s; e++) t[e] = 0;
          !(function (e, t, r, n) {
            if ("function" == typeof e.setBigUint64)
              return e.setBigUint64(t, r, n);
            let i = BigInt(32),
              s = BigInt(0xffffffff),
              a = Number((r >> i) & s),
              o = Number(r & s),
              c = n ? 4 : 0,
              u = n ? 0 : 4;
            e.setUint32(t + c, a, n), e.setUint32(t + u, o, n);
          })(r, s - 8, BigInt(8 * this.length), a),
            this.process(r, 0);
          let c = (0, i.O8)(e),
            u = this.outputLen;
          if (u % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let l = u / 4,
            d = this.get();
          if (l > d.length) throw Error("_sha2: outputLen bigger than state");
          for (let e = 0; e < l; e++) c.setUint32(4 * e, d[e], a);
        }
        digest() {
          let { buffer: e, outputLen: t } = this;
          this.digestInto(e);
          let r = e.slice(0, t);
          return this.destroy(), r;
        }
        _cloneInto(e) {
          e || (e = new this.constructor()), e.set(...this.get());
          let {
            blockLen: t,
            buffer: r,
            length: n,
            finished: i,
            destroyed: s,
            pos: a,
          } = this;
          return (
            (e.length = n),
            (e.pos = a),
            (e.finished = i),
            (e.destroyed = s),
            n % t && e.buffer.set(r),
            e
          );
        }
      }
      let c = new Uint32Array([
          0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
          0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
          0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
          0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f,
          0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d,
          0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967,
          0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354,
          0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b,
          0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585,
          0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
          0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee,
          0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb,
          0xbef9a3f7, 0xc67178f2,
        ]),
        u = new Uint32Array([
          0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
          0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
        ]),
        l = new Uint32Array(64);
      class d extends o {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | u[0]),
            (this.B = 0 | u[1]),
            (this.C = 0 | u[2]),
            (this.D = 0 | u[3]),
            (this.E = 0 | u[4]),
            (this.F = 0 | u[5]),
            (this.G = 0 | u[6]),
            (this.H = 0 | u[7]);
        }
        get() {
          let { A: e, B: t, C: r, D: n, E: i, F: s, G: a, H: o } = this;
          return [e, t, r, n, i, s, a, o];
        }
        set(e, t, r, n, i, s, a, o) {
          (this.A = 0 | e),
            (this.B = 0 | t),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | i),
            (this.F = 0 | s),
            (this.G = 0 | a),
            (this.H = 0 | o);
        }
        process(e, t) {
          for (let r = 0; r < 16; r++, t += 4) l[r] = e.getUint32(t, !1);
          for (let e = 16; e < 64; e++) {
            let t = l[e - 15],
              r = l[e - 2],
              n = (0, i.Ow)(t, 7) ^ (0, i.Ow)(t, 18) ^ (t >>> 3),
              s = (0, i.Ow)(r, 17) ^ (0, i.Ow)(r, 19) ^ (r >>> 10);
            l[e] = (s + l[e - 7] + n + l[e - 16]) | 0;
          }
          let { A: r, B: n, C: o, D: u, E: d, F: h, G: f, H: p } = this;
          for (let e = 0; e < 64; e++) {
            let t =
                (p +
                  ((0, i.Ow)(d, 6) ^ (0, i.Ow)(d, 11) ^ (0, i.Ow)(d, 25)) +
                  s(d, h, f) +
                  c[e] +
                  l[e]) |
                0,
              y =
                (((0, i.Ow)(r, 2) ^ (0, i.Ow)(r, 13) ^ (0, i.Ow)(r, 22)) +
                  a(r, n, o)) |
                0;
            (p = f),
              (f = h),
              (h = d),
              (d = (u + t) | 0),
              (u = o),
              (o = n),
              (n = r),
              (r = (t + y) | 0);
          }
          (r = (r + this.A) | 0),
            (n = (n + this.B) | 0),
            (o = (o + this.C) | 0),
            (u = (u + this.D) | 0),
            (d = (d + this.E) | 0),
            (h = (h + this.F) | 0),
            (f = (f + this.G) | 0),
            (p = (p + this.H) | 0),
            this.set(r, n, o, u, d, h, f, p);
        }
        roundClean() {
          l.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let h = (0, i.ld)(() => new d());
    },
    98071: (e, t, r) => {
      r.d(t, {
        DH: () => i,
        Fc: () => u,
        My: () => d,
        O8: () => s,
        Ow: () => a,
        Vw: () => f,
        ZJ: () => h,
        ld: () => p,
        qv: () => o,
      });
      var n = r(99393);
      let i = (e) =>
          new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
        s = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
        a = (e, t) => (e << (32 - t)) | (e >>> t),
        o = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0],
        c = (e) =>
          ((e << 24) & 0xff000000) |
          ((e << 8) & 0xff0000) |
          ((e >>> 8) & 65280) |
          ((e >>> 24) & 255);
      function u(e) {
        for (let t = 0; t < e.length; t++) e[t] = c(e[t]);
      }
      let l = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function d(e) {
        (0, n.DO)(e);
        let t = "";
        for (let r = 0; r < e.length; r++) t += l[e[r]];
        return t;
      }
      function h(e) {
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error("utf8ToBytes expected string, got " + typeof e);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          (0, n.DO)(e),
          e
        );
      }
      class f {
        clone() {
          return this._cloneInto();
        }
      }
      function p(e) {
        let t = (t) => e().update(h(t)).digest(),
          r = e();
        return (
          (t.outputLen = r.outputLen),
          (t.blockLen = r.blockLen),
          (t.create = () => e()),
          t
        );
      }
    },
    34017: (e, t, r) => {
      r.d(t, { m: () => s });
      var n = r(99323),
        i = r(84403),
        s = new (class extends n.Q {
          #e;
          #t;
          #r;
          constructor() {
            super(),
              (this.#r = (e) => {
                if (!i.S$ && window.addEventListener) {
                  let t = () => e();
                  return (
                    window.addEventListener("visibilitychange", t, !1),
                    () => {
                      window.removeEventListener("visibilitychange", t);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#t || this.setEventListener(this.#r);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#t?.(), (this.#t = void 0));
          }
          setEventListener(e) {
            (this.#r = e),
              this.#t?.(),
              (this.#t = e((e) => {
                "boolean" == typeof e ? this.setFocused(e) : this.onFocus();
              }));
          }
          setFocused(e) {
            this.#e !== e && ((this.#e = e), this.onFocus());
          }
          onFocus() {
            let e = this.isFocused();
            this.listeners.forEach((t) => {
              t(e);
            });
          }
          isFocused() {
            return "boolean" == typeof this.#e
              ? this.#e
              : globalThis.document?.visibilityState !== "hidden";
          }
        })();
    },
    5020: (e, t, r) => {
      r.d(t, { PL: () => i, RQ: () => c, rB: () => o });
      var n = r(84403);
      function i(e) {
        return {
          onFetch: (t, r) => {
            let i = t.options,
              o = t.fetchOptions?.meta?.fetchMore?.direction,
              c = t.state.data?.pages || [],
              u = t.state.data?.pageParams || [],
              l = { pages: [], pageParams: [] },
              d = 0,
              h = async () => {
                let r = !1,
                  h = (e) => {
                    Object.defineProperty(e, "signal", {
                      enumerable: !0,
                      get: () => (
                        t.signal.aborted
                          ? (r = !0)
                          : t.signal.addEventListener("abort", () => {
                              r = !0;
                            }),
                        t.signal
                      ),
                    });
                  },
                  f = (0, n.ZM)(t.options, t.fetchOptions),
                  p = async (e, i, s) => {
                    if (r) return Promise.reject();
                    if (null == i && e.pages.length) return Promise.resolve(e);
                    let a = {
                      queryKey: t.queryKey,
                      pageParam: i,
                      direction: s ? "backward" : "forward",
                      meta: t.options.meta,
                    };
                    h(a);
                    let o = await f(a),
                      { maxPages: c } = t.options,
                      u = s ? n.ZZ : n.y9;
                    return {
                      pages: u(e.pages, o, c),
                      pageParams: u(e.pageParams, i, c),
                    };
                  };
                if (o && c.length) {
                  let e = "backward" === o,
                    t = { pages: c, pageParams: u },
                    r = (e ? a : s)(i, t);
                  l = await p(t, r, e);
                } else {
                  let t = e ?? c.length;
                  do {
                    let e = 0 === d ? u[0] ?? i.initialPageParam : s(i, l);
                    if (d > 0 && null == e) break;
                    (l = await p(l, e)), d++;
                  } while (d < t);
                }
                return l;
              };
            t.options.persister
              ? (t.fetchFn = () =>
                  t.options.persister?.(
                    h,
                    {
                      queryKey: t.queryKey,
                      meta: t.options.meta,
                      signal: t.signal,
                    },
                    r
                  ))
              : (t.fetchFn = h);
          },
        };
      }
      function s(e, { pages: t, pageParams: r }) {
        let n = t.length - 1;
        return t.length > 0 ? e.getNextPageParam(t[n], t, r[n], r) : void 0;
      }
      function a(e, { pages: t, pageParams: r }) {
        return t.length > 0
          ? e.getPreviousPageParam?.(t[0], t, r[0], r)
          : void 0;
      }
      function o(e, t) {
        return !!t && null != s(e, t);
      }
      function c(e, t) {
        return !!t && !!e.getPreviousPageParam && null != a(e, t);
      }
    },
    6124: (e, t, r) => {
      r.d(t, { z: () => s });
      var n = r(24724),
        i = r(5020),
        s = class extends n.$ {
          constructor(e, t) {
            super(e, t);
          }
          bindMethods() {
            super.bindMethods(),
              (this.fetchNextPage = this.fetchNextPage.bind(this)),
              (this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
          }
          setOptions(e, t) {
            super.setOptions({ ...e, behavior: (0, i.PL)() }, t);
          }
          getOptimisticResult(e) {
            return (e.behavior = (0, i.PL)()), super.getOptimisticResult(e);
          }
          fetchNextPage(e) {
            return this.fetch({
              ...e,
              meta: { fetchMore: { direction: "forward" } },
            });
          }
          fetchPreviousPage(e) {
            return this.fetch({
              ...e,
              meta: { fetchMore: { direction: "backward" } },
            });
          }
          createResult(e, t) {
            let { state: r } = e,
              n = super.createResult(e, t),
              {
                isFetching: s,
                isRefetching: a,
                isError: o,
                isRefetchError: c,
              } = n,
              u = r.fetchMeta?.fetchMore?.direction,
              l = o && "forward" === u,
              d = s && "forward" === u,
              h = o && "backward" === u,
              f = s && "backward" === u;
            return {
              ...n,
              fetchNextPage: this.fetchNextPage,
              fetchPreviousPage: this.fetchPreviousPage,
              hasNextPage: (0, i.rB)(t, r.data),
              hasPreviousPage: (0, i.RQ)(t, r.data),
              isFetchNextPageError: l,
              isFetchingNextPage: d,
              isFetchPreviousPageError: h,
              isFetchingPreviousPage: f,
              isRefetchError: c && !l && !h,
              isRefetching: a && !d && !f,
            };
          }
        };
    },
    1049: (e, t, r) => {
      r.d(t, { $: () => o, s: () => a });
      var n = r(15586),
        i = r(2955),
        s = r(14267),
        a = class extends i.k {
          #n;
          #i;
          #s;
          constructor(e) {
            super(),
              (this.mutationId = e.mutationId),
              (this.#i = e.mutationCache),
              (this.#n = []),
              (this.state = e.state || o()),
              this.setOptions(e.options),
              this.scheduleGc();
          }
          setOptions(e) {
            (this.options = e), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(e) {
            this.#n.includes(e) ||
              (this.#n.push(e),
              this.clearGcTimeout(),
              this.#i.notify({
                type: "observerAdded",
                mutation: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            (this.#n = this.#n.filter((t) => t !== e)),
              this.scheduleGc(),
              this.#i.notify({
                type: "observerRemoved",
                mutation: this,
                observer: e,
              });
          }
          optionalRemove() {
            this.#n.length ||
              ("pending" === this.state.status
                ? this.scheduleGc()
                : this.#i.remove(this));
          }
          continue() {
            return this.#s?.continue() ?? this.execute(this.state.variables);
          }
          async execute(e) {
            this.#s = (0, s.II)({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(e)
                  : Promise.reject(Error("No mutationFn found")),
              onFail: (e, t) => {
                this.#a({ type: "failed", failureCount: e, error: t });
              },
              onPause: () => {
                this.#a({ type: "pause" });
              },
              onContinue: () => {
                this.#a({ type: "continue" });
              },
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#i.canRun(this),
            });
            let t = "pending" === this.state.status,
              r = !this.#s.canStart();
            try {
              if (!t) {
                this.#a({ type: "pending", variables: e, isPaused: r }),
                  await this.#i.config.onMutate?.(e, this);
                let t = await this.options.onMutate?.(e);
                t !== this.state.context &&
                  this.#a({
                    type: "pending",
                    context: t,
                    variables: e,
                    isPaused: r,
                  });
              }
              let n = await this.#s.start();
              return (
                await this.#i.config.onSuccess?.(
                  n,
                  e,
                  this.state.context,
                  this
                ),
                await this.options.onSuccess?.(n, e, this.state.context),
                await this.#i.config.onSettled?.(
                  n,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                ),
                await this.options.onSettled?.(n, null, e, this.state.context),
                this.#a({ type: "success", data: n }),
                n
              );
            } catch (t) {
              try {
                throw (
                  (await this.#i.config.onError?.(
                    t,
                    e,
                    this.state.context,
                    this
                  ),
                  await this.options.onError?.(t, e, this.state.context),
                  await this.#i.config.onSettled?.(
                    void 0,
                    t,
                    this.state.variables,
                    this.state.context,
                    this
                  ),
                  await this.options.onSettled?.(
                    void 0,
                    t,
                    e,
                    this.state.context
                  ),
                  t)
                );
              } finally {
                this.#a({ type: "error", error: t });
              }
            } finally {
              this.#i.runNext(this);
            }
          }
          #a(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case "failed":
                  return {
                    ...t,
                    failureCount: e.failureCount,
                    failureReason: e.error,
                  };
                case "pause":
                  return { ...t, isPaused: !0 };
                case "continue":
                  return { ...t, isPaused: !1 };
                case "pending":
                  return {
                    ...t,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: e.isPaused,
                    status: "pending",
                    variables: e.variables,
                    submittedAt: Date.now(),
                  };
                case "success":
                  return {
                    ...t,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1,
                  };
                case "error":
                  return {
                    ...t,
                    data: void 0,
                    error: e.error,
                    failureCount: t.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: "error",
                  };
              }
            })(this.state)),
              n.j.batch(() => {
                this.#n.forEach((t) => {
                  t.onMutationUpdate(e);
                }),
                  this.#i.notify({
                    mutation: this,
                    type: "updated",
                    action: e,
                  });
              });
          }
        };
      function o() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: "idle",
          variables: void 0,
          submittedAt: 0,
        };
      }
    },
    15586: (e, t, r) => {
      r.d(t, { j: () => n });
      var n = (function () {
        let e = [],
          t = 0,
          r = (e) => {
            e();
          },
          n = (e) => {
            e();
          },
          i = (e) => setTimeout(e, 0),
          s = (n) => {
            t
              ? e.push(n)
              : i(() => {
                  r(n);
                });
          },
          a = () => {
            let t = e;
            (e = []),
              t.length &&
                i(() => {
                  n(() => {
                    t.forEach((e) => {
                      r(e);
                    });
                  });
                });
          };
        return {
          batch: (e) => {
            let r;
            t++;
            try {
              r = e();
            } finally {
              --t || a();
            }
            return r;
          },
          batchCalls:
            (e) =>
            (...t) => {
              s(() => {
                e(...t);
              });
            },
          schedule: s,
          setNotifyFunction: (e) => {
            r = e;
          },
          setBatchNotifyFunction: (e) => {
            n = e;
          },
          setScheduler: (e) => {
            i = e;
          },
        };
      })();
    },
    38248: (e, t, r) => {
      r.d(t, { t: () => s });
      var n = r(99323),
        i = r(84403),
        s = new (class extends n.Q {
          #o = !0;
          #t;
          #r;
          constructor() {
            super(),
              (this.#r = (e) => {
                if (!i.S$ && window.addEventListener) {
                  let t = () => e(!0),
                    r = () => e(!1);
                  return (
                    window.addEventListener("online", t, !1),
                    window.addEventListener("offline", r, !1),
                    () => {
                      window.removeEventListener("online", t),
                        window.removeEventListener("offline", r);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#t || this.setEventListener(this.#r);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#t?.(), (this.#t = void 0));
          }
          setEventListener(e) {
            (this.#r = e),
              this.#t?.(),
              (this.#t = e(this.setOnline.bind(this)));
          }
          setOnline(e) {
            this.#o !== e &&
              ((this.#o = e),
              this.listeners.forEach((t) => {
                t(e);
              }));
          }
          isOnline() {
            return this.#o;
          }
        })();
    },
    47702: (e, t, r) => {
      r.d(t, { X: () => o, k: () => c });
      var n = r(84403),
        i = r(15586),
        s = r(14267),
        a = r(2955),
        o = class extends a.k {
          #c;
          #u;
          #l;
          #s;
          #d;
          #h;
          constructor(e) {
            super(),
              (this.#h = !1),
              (this.#d = e.defaultOptions),
              this.setOptions(e.options),
              (this.observers = []),
              (this.#l = e.cache),
              (this.queryKey = e.queryKey),
              (this.queryHash = e.queryHash),
              (this.#c = (function (e) {
                let t =
                    "function" == typeof e.initialData
                      ? e.initialData()
                      : e.initialData,
                  r = void 0 !== t,
                  n = r
                    ? "function" == typeof e.initialDataUpdatedAt
                      ? e.initialDataUpdatedAt()
                      : e.initialDataUpdatedAt
                    : 0;
                return {
                  data: t,
                  dataUpdateCount: 0,
                  dataUpdatedAt: r ? n ?? Date.now() : 0,
                  error: null,
                  errorUpdateCount: 0,
                  errorUpdatedAt: 0,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: null,
                  isInvalidated: !1,
                  status: r ? "success" : "pending",
                  fetchStatus: "idle",
                };
              })(this.options)),
              (this.state = e.state ?? this.#c),
              this.scheduleGc();
          }
          get meta() {
            return this.options.meta;
          }
          get promise() {
            return this.#s?.promise;
          }
          setOptions(e) {
            (this.options = { ...this.#d, ...e }),
              this.updateGcTime(this.options.gcTime);
          }
          optionalRemove() {
            this.observers.length ||
              "idle" !== this.state.fetchStatus ||
              this.#l.remove(this);
          }
          setData(e, t) {
            let r = (0, n.pl)(this.state.data, e, this.options);
            return (
              this.#a({
                data: r,
                type: "success",
                dataUpdatedAt: t?.updatedAt,
                manual: t?.manual,
              }),
              r
            );
          }
          setState(e, t) {
            this.#a({ type: "setState", state: e, setStateOptions: t });
          }
          cancel(e) {
            let t = this.#s?.promise;
            return (
              this.#s?.cancel(e),
              t ? t.then(n.lQ).catch(n.lQ) : Promise.resolve()
            );
          }
          destroy() {
            super.destroy(), this.cancel({ silent: !0 });
          }
          reset() {
            this.destroy(), this.setState(this.#c);
          }
          isActive() {
            return this.observers.some(
              (e) => !1 !== (0, n.Eh)(e.options.enabled, this)
            );
          }
          isDisabled() {
            return this.getObserversCount() > 0
              ? !this.isActive()
              : this.options.queryFn === n.hT ||
                  this.state.dataUpdateCount + this.state.errorUpdateCount ===
                    0;
          }
          isStale() {
            return (
              !!this.state.isInvalidated ||
              (this.getObserversCount() > 0
                ? this.observers.some((e) => e.getCurrentResult().isStale)
                : void 0 === this.state.data)
            );
          }
          isStaleByTime(e = 0) {
            return (
              this.state.isInvalidated ||
              void 0 === this.state.data ||
              !(0, n.j3)(this.state.dataUpdatedAt, e)
            );
          }
          onFocus() {
            let e = this.observers.find((e) => e.shouldFetchOnWindowFocus());
            e?.refetch({ cancelRefetch: !1 }), this.#s?.continue();
          }
          onOnline() {
            let e = this.observers.find((e) => e.shouldFetchOnReconnect());
            e?.refetch({ cancelRefetch: !1 }), this.#s?.continue();
          }
          addObserver(e) {
            this.observers.includes(e) ||
              (this.observers.push(e),
              this.clearGcTimeout(),
              this.#l.notify({
                type: "observerAdded",
                query: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            this.observers.includes(e) &&
              ((this.observers = this.observers.filter((t) => t !== e)),
              this.observers.length ||
                (this.#s &&
                  (this.#h
                    ? this.#s.cancel({ revert: !0 })
                    : this.#s.cancelRetry()),
                this.scheduleGc()),
              this.#l.notify({
                type: "observerRemoved",
                query: this,
                observer: e,
              }));
          }
          getObserversCount() {
            return this.observers.length;
          }
          invalidate() {
            this.state.isInvalidated || this.#a({ type: "invalidate" });
          }
          fetch(e, t) {
            if ("idle" !== this.state.fetchStatus) {
              if (void 0 !== this.state.data && t?.cancelRefetch)
                this.cancel({ silent: !0 });
              else if (this.#s) return this.#s.continueRetry(), this.#s.promise;
            }
            if ((e && this.setOptions(e), !this.options.queryFn)) {
              let e = this.observers.find((e) => e.options.queryFn);
              e && this.setOptions(e.options);
            }
            let r = new AbortController(),
              i = (e) => {
                Object.defineProperty(e, "signal", {
                  enumerable: !0,
                  get: () => ((this.#h = !0), r.signal),
                });
              },
              a = {
                fetchOptions: t,
                options: this.options,
                queryKey: this.queryKey,
                state: this.state,
                fetchFn: () => {
                  let e = (0, n.ZM)(this.options, t),
                    r = { queryKey: this.queryKey, meta: this.meta };
                  return (i(r), (this.#h = !1), this.options.persister)
                    ? this.options.persister(e, r, this)
                    : e(r);
                },
              };
            i(a),
              this.options.behavior?.onFetch(a, this),
              (this.#u = this.state),
              ("idle" === this.state.fetchStatus ||
                this.state.fetchMeta !== a.fetchOptions?.meta) &&
                this.#a({ type: "fetch", meta: a.fetchOptions?.meta });
            let o = (e) => {
              ((0, s.wm)(e) && e.silent) ||
                this.#a({ type: "error", error: e }),
                (0, s.wm)(e) ||
                  (this.#l.config.onError?.(e, this),
                  this.#l.config.onSettled?.(this.state.data, e, this)),
                this.scheduleGc();
            };
            return (
              (this.#s = (0, s.II)({
                initialPromise: t?.initialPromise,
                fn: a.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: (e) => {
                  if (void 0 === e) {
                    o(Error(`${this.queryHash} data is undefined`));
                    return;
                  }
                  try {
                    this.setData(e);
                  } catch (e) {
                    o(e);
                    return;
                  }
                  this.#l.config.onSuccess?.(e, this),
                    this.#l.config.onSettled?.(e, this.state.error, this),
                    this.scheduleGc();
                },
                onError: o,
                onFail: (e, t) => {
                  this.#a({ type: "failed", failureCount: e, error: t });
                },
                onPause: () => {
                  this.#a({ type: "pause" });
                },
                onContinue: () => {
                  this.#a({ type: "continue" });
                },
                retry: a.options.retry,
                retryDelay: a.options.retryDelay,
                networkMode: a.options.networkMode,
                canRun: () => !0,
              })),
              this.#s.start()
            );
          }
          #a(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case "failed":
                  return {
                    ...t,
                    fetchFailureCount: e.failureCount,
                    fetchFailureReason: e.error,
                  };
                case "pause":
                  return { ...t, fetchStatus: "paused" };
                case "continue":
                  return { ...t, fetchStatus: "fetching" };
                case "fetch":
                  return {
                    ...t,
                    ...c(t.data, this.options),
                    fetchMeta: e.meta ?? null,
                  };
                case "success":
                  return {
                    ...t,
                    data: e.data,
                    dataUpdateCount: t.dataUpdateCount + 1,
                    dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success",
                    ...(!e.manual && {
                      fetchStatus: "idle",
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                    }),
                  };
                case "error":
                  let r = e.error;
                  if ((0, s.wm)(r) && r.revert && this.#u)
                    return { ...this.#u, fetchStatus: "idle" };
                  return {
                    ...t,
                    error: r,
                    errorUpdateCount: t.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: t.fetchFailureCount + 1,
                    fetchFailureReason: r,
                    fetchStatus: "idle",
                    status: "error",
                  };
                case "invalidate":
                  return { ...t, isInvalidated: !0 };
                case "setState":
                  return { ...t, ...e.state };
              }
            })(this.state)),
              i.j.batch(() => {
                this.observers.forEach((e) => {
                  e.onQueryUpdate();
                }),
                  this.#l.notify({ query: this, type: "updated", action: e });
              });
          }
        };
      function c(e, t) {
        return {
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchStatus: (0, s.v_)(t.networkMode) ? "fetching" : "paused",
          ...(void 0 === e && { error: null, status: "pending" }),
        };
      }
    },
    24724: (e, t, r) => {
      r.d(t, { $: () => u });
      var n = r(34017),
        i = r(15586),
        s = r(47702),
        a = r(99323),
        o = r(41277),
        c = r(84403),
        u = class extends a.Q {
          constructor(e, t) {
            super(),
              (this.options = t),
              (this.#f = e),
              (this.#p = null),
              (this.#y = (0, o.T)()),
              this.options.experimental_prefetchInRender ||
                this.#y.reject(
                  Error(
                    "experimental_prefetchInRender feature flag is not enabled"
                  )
                ),
              this.bindMethods(),
              this.setOptions(t);
          }
          #f;
          #b = void 0;
          #m = void 0;
          #g = void 0;
          #v;
          #w;
          #y;
          #p;
          #x;
          #E;
          #P;
          #I;
          #C;
          #B;
          #$ = new Set();
          bindMethods() {
            this.refetch = this.refetch.bind(this);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              (this.#b.addObserver(this),
              l(this.#b, this.options) ? this.#A() : this.updateResult(),
              this.#O());
          }
          onUnsubscribe() {
            this.hasListeners() || this.destroy();
          }
          shouldFetchOnReconnect() {
            return d(this.#b, this.options, this.options.refetchOnReconnect);
          }
          shouldFetchOnWindowFocus() {
            return d(this.#b, this.options, this.options.refetchOnWindowFocus);
          }
          destroy() {
            (this.listeners = new Set()),
              this.#S(),
              this.#M(),
              this.#b.removeObserver(this);
          }
          setOptions(e, t) {
            let r = this.options,
              n = this.#b;
            if (
              ((this.options = this.#f.defaultQueryOptions(e)),
              void 0 !== this.options.enabled &&
                "boolean" != typeof this.options.enabled &&
                "function" != typeof this.options.enabled &&
                "boolean" != typeof (0, c.Eh)(this.options.enabled, this.#b))
            )
              throw Error(
                "Expected enabled to be a boolean or a callback that returns a boolean"
              );
            this.#R(),
              this.#b.setOptions(this.options),
              r._defaulted &&
                !(0, c.f8)(this.options, r) &&
                this.#f
                  .getQueryCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    query: this.#b,
                    observer: this,
                  });
            let i = this.hasListeners();
            i && h(this.#b, n, this.options, r) && this.#A(),
              this.updateResult(t),
              i &&
                (this.#b !== n ||
                  (0, c.Eh)(this.options.enabled, this.#b) !==
                    (0, c.Eh)(r.enabled, this.#b) ||
                  (0, c.d2)(this.options.staleTime, this.#b) !==
                    (0, c.d2)(r.staleTime, this.#b)) &&
                this.#T();
            let s = this.#F();
            i &&
              (this.#b !== n ||
                (0, c.Eh)(this.options.enabled, this.#b) !==
                  (0, c.Eh)(r.enabled, this.#b) ||
                s !== this.#B) &&
              this.#k(s);
          }
          getOptimisticResult(e) {
            let t = this.#f.getQueryCache().build(this.#f, e),
              r = this.createResult(t, e);
            return (
              (0, c.f8)(this.getCurrentResult(), r) ||
                ((this.#g = r),
                (this.#w = this.options),
                (this.#v = this.#b.state)),
              r
            );
          }
          getCurrentResult() {
            return this.#g;
          }
          trackResult(e, t) {
            let r = {};
            return (
              Object.keys(e).forEach((n) => {
                Object.defineProperty(r, n, {
                  configurable: !1,
                  enumerable: !0,
                  get: () => (this.trackProp(n), t?.(n), e[n]),
                });
              }),
              r
            );
          }
          trackProp(e) {
            this.#$.add(e);
          }
          getCurrentQuery() {
            return this.#b;
          }
          refetch({ ...e } = {}) {
            return this.fetch({ ...e });
          }
          fetchOptimistic(e) {
            let t = this.#f.defaultQueryOptions(e),
              r = this.#f.getQueryCache().build(this.#f, t);
            return r.fetch().then(() => this.createResult(r, t));
          }
          fetch(e) {
            return this.#A({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
              () => (this.updateResult(), this.#g)
            );
          }
          #A(e) {
            this.#R();
            let t = this.#b.fetch(this.options, e);
            return e?.throwOnError || (t = t.catch(c.lQ)), t;
          }
          #T() {
            this.#S();
            let e = (0, c.d2)(this.options.staleTime, this.#b);
            if (c.S$ || this.#g.isStale || !(0, c.gn)(e)) return;
            let t = (0, c.j3)(this.#g.dataUpdatedAt, e);
            this.#I = setTimeout(() => {
              this.#g.isStale || this.updateResult();
            }, t + 1);
          }
          #F() {
            return (
              ("function" == typeof this.options.refetchInterval
                ? this.options.refetchInterval(this.#b)
                : this.options.refetchInterval) ?? !1
            );
          }
          #k(e) {
            this.#M(),
              (this.#B = e),
              !c.S$ &&
                !1 !== (0, c.Eh)(this.options.enabled, this.#b) &&
                (0, c.gn)(this.#B) &&
                0 !== this.#B &&
                (this.#C = setInterval(() => {
                  (this.options.refetchIntervalInBackground ||
                    n.m.isFocused()) &&
                    this.#A();
                }, this.#B));
          }
          #O() {
            this.#T(), this.#k(this.#F());
          }
          #S() {
            this.#I && (clearTimeout(this.#I), (this.#I = void 0));
          }
          #M() {
            this.#C && (clearInterval(this.#C), (this.#C = void 0));
          }
          createResult(e, t) {
            let r;
            let n = this.#b,
              i = this.options,
              a = this.#g,
              u = this.#v,
              d = this.#w,
              p = e !== n ? e.state : this.#m,
              { state: y } = e,
              b = { ...y },
              m = !1;
            if (t._optimisticResults) {
              let r = this.hasListeners(),
                a = !r && l(e, t),
                o = r && h(e, n, t, i);
              (a || o) && (b = { ...b, ...(0, s.k)(y.data, e.options) }),
                "isRestoring" === t._optimisticResults &&
                  (b.fetchStatus = "idle");
            }
            let { error: g, errorUpdatedAt: v, status: w } = b;
            if (t.select && void 0 !== b.data) {
              if (a && b.data === u?.data && t.select === this.#x) r = this.#E;
              else
                try {
                  (this.#x = t.select),
                    (r = t.select(b.data)),
                    (r = (0, c.pl)(a?.data, r, t)),
                    (this.#E = r),
                    (this.#p = null);
                } catch (e) {
                  this.#p = e;
                }
            } else r = b.data;
            if (
              void 0 !== t.placeholderData &&
              void 0 === r &&
              "pending" === w
            ) {
              let e;
              if (
                a?.isPlaceholderData &&
                t.placeholderData === d?.placeholderData
              )
                e = a.data;
              else if (
                ((e =
                  "function" == typeof t.placeholderData
                    ? t.placeholderData(this.#P?.state.data, this.#P)
                    : t.placeholderData),
                t.select && void 0 !== e)
              )
                try {
                  (e = t.select(e)), (this.#p = null);
                } catch (e) {
                  this.#p = e;
                }
              void 0 !== e &&
                ((w = "success"), (r = (0, c.pl)(a?.data, e, t)), (m = !0));
            }
            this.#p &&
              ((g = this.#p), (r = this.#E), (v = Date.now()), (w = "error"));
            let x = "fetching" === b.fetchStatus,
              E = "pending" === w,
              P = "error" === w,
              I = E && x,
              C = void 0 !== r,
              B = {
                status: w,
                fetchStatus: b.fetchStatus,
                isPending: E,
                isSuccess: "success" === w,
                isError: P,
                isInitialLoading: I,
                isLoading: I,
                data: r,
                dataUpdatedAt: b.dataUpdatedAt,
                error: g,
                errorUpdatedAt: v,
                failureCount: b.fetchFailureCount,
                failureReason: b.fetchFailureReason,
                errorUpdateCount: b.errorUpdateCount,
                isFetched: b.dataUpdateCount > 0 || b.errorUpdateCount > 0,
                isFetchedAfterMount:
                  b.dataUpdateCount > p.dataUpdateCount ||
                  b.errorUpdateCount > p.errorUpdateCount,
                isFetching: x,
                isRefetching: x && !E,
                isLoadingError: P && !C,
                isPaused: "paused" === b.fetchStatus,
                isPlaceholderData: m,
                isRefetchError: P && C,
                isStale: f(e, t),
                refetch: this.refetch,
                promise: this.#y,
              };
            if (this.options.experimental_prefetchInRender) {
              let t = (e) => {
                  "error" === B.status
                    ? e.reject(B.error)
                    : void 0 !== B.data && e.resolve(B.data);
                },
                r = () => {
                  t((this.#y = B.promise = (0, o.T)()));
                },
                i = this.#y;
              switch (i.status) {
                case "pending":
                  e.queryHash === n.queryHash && t(i);
                  break;
                case "fulfilled":
                  ("error" === B.status || B.data !== i.value) && r();
                  break;
                case "rejected":
                  ("error" !== B.status || B.error !== i.reason) && r();
              }
            }
            return B;
          }
          updateResult(e) {
            let t = this.#g,
              r = this.createResult(this.#b, this.options);
            if (
              ((this.#v = this.#b.state),
              (this.#w = this.options),
              void 0 !== this.#v.data && (this.#P = this.#b),
              (0, c.f8)(r, t))
            )
              return;
            this.#g = r;
            let n = {};
            e?.listeners !== !1 &&
              (() => {
                if (!t) return !0;
                let { notifyOnChangeProps: e } = this.options,
                  r = "function" == typeof e ? e() : e;
                if ("all" === r || (!r && !this.#$.size)) return !0;
                let n = new Set(r ?? this.#$);
                return (
                  this.options.throwOnError && n.add("error"),
                  Object.keys(this.#g).some(
                    (e) => this.#g[e] !== t[e] && n.has(e)
                  )
                );
              })() &&
              (n.listeners = !0),
              this.#N({ ...n, ...e });
          }
          #R() {
            let e = this.#f.getQueryCache().build(this.#f, this.options);
            if (e === this.#b) return;
            let t = this.#b;
            (this.#b = e),
              (this.#m = e.state),
              this.hasListeners() &&
                (t?.removeObserver(this), e.addObserver(this));
          }
          onQueryUpdate() {
            this.updateResult(), this.hasListeners() && this.#O();
          }
          #N(e) {
            i.j.batch(() => {
              e.listeners &&
                this.listeners.forEach((e) => {
                  e(this.#g);
                }),
                this.#f
                  .getQueryCache()
                  .notify({ query: this.#b, type: "observerResultsUpdated" });
            });
          }
        };
      function l(e, t) {
        return (
          (!1 !== (0, c.Eh)(t.enabled, e) &&
            void 0 === e.state.data &&
            !("error" === e.state.status && !1 === t.retryOnMount)) ||
          (void 0 !== e.state.data && d(e, t, t.refetchOnMount))
        );
      }
      function d(e, t, r) {
        if (!1 !== (0, c.Eh)(t.enabled, e)) {
          let n = "function" == typeof r ? r(e) : r;
          return "always" === n || (!1 !== n && f(e, t));
        }
        return !1;
      }
      function h(e, t, r, n) {
        return (
          (e !== t || !1 === (0, c.Eh)(n.enabled, e)) &&
          (!r.suspense || "error" !== e.state.status) &&
          f(e, r)
        );
      }
      function f(e, t) {
        return (
          !1 !== (0, c.Eh)(t.enabled, e) &&
          e.isStaleByTime((0, c.d2)(t.staleTime, e))
        );
      }
    },
    2955: (e, t, r) => {
      r.d(t, { k: () => i });
      var n = r(84403),
        i = class {
          #j;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout(),
              (0, n.gn)(this.gcTime) &&
                (this.#j = setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (n.S$ ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            this.#j && (clearTimeout(this.#j), (this.#j = void 0));
          }
        };
    },
    14267: (e, t, r) => {
      r.d(t, { II: () => d, v_: () => c, wm: () => l });
      var n = r(34017),
        i = r(38248),
        s = r(41277),
        a = r(84403);
      function o(e) {
        return Math.min(1e3 * 2 ** e, 3e4);
      }
      function c(e) {
        return (e ?? "online") !== "online" || i.t.isOnline();
      }
      var u = class extends Error {
        constructor(e) {
          super("CancelledError"),
            (this.revert = e?.revert),
            (this.silent = e?.silent);
        }
      };
      function l(e) {
        return e instanceof u;
      }
      function d(e) {
        let t,
          r = !1,
          l = 0,
          d = !1,
          h = (0, s.T)(),
          f = () =>
            n.m.isFocused() &&
            ("always" === e.networkMode || i.t.isOnline()) &&
            e.canRun(),
          p = () => c(e.networkMode) && e.canRun(),
          y = (r) => {
            d || ((d = !0), e.onSuccess?.(r), t?.(), h.resolve(r));
          },
          b = (r) => {
            d || ((d = !0), e.onError?.(r), t?.(), h.reject(r));
          },
          m = () =>
            new Promise((r) => {
              (t = (e) => {
                (d || f()) && r(e);
              }),
                e.onPause?.();
            }).then(() => {
              (t = void 0), d || e.onContinue?.();
            }),
          g = () => {
            let t;
            if (d) return;
            let n = 0 === l ? e.initialPromise : void 0;
            try {
              t = n ?? e.fn();
            } catch (e) {
              t = Promise.reject(e);
            }
            Promise.resolve(t)
              .then(y)
              .catch((t) => {
                if (d) return;
                let n = e.retry ?? (a.S$ ? 0 : 3),
                  i = e.retryDelay ?? o,
                  s = "function" == typeof i ? i(l, t) : i,
                  c =
                    !0 === n ||
                    ("number" == typeof n && l < n) ||
                    ("function" == typeof n && n(l, t));
                if (r || !c) {
                  b(t);
                  return;
                }
                l++,
                  e.onFail?.(l, t),
                  (0, a.yy)(s)
                    .then(() => (f() ? void 0 : m()))
                    .then(() => {
                      r ? b(t) : g();
                    });
              });
          };
        return {
          promise: h,
          cancel: (t) => {
            d || (b(new u(t)), e.abort?.());
          },
          continue: () => (t?.(), h),
          cancelRetry: () => {
            r = !0;
          },
          continueRetry: () => {
            r = !1;
          },
          canStart: p,
          start: () => (p() ? g() : m().then(g), h),
        };
      }
    },
    99323: (e, t, r) => {
      r.d(t, { Q: () => n });
      var n = class {
        constructor() {
          (this.listeners = new Set()),
            (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(e) {
          return (
            this.listeners.add(e),
            this.onSubscribe(),
            () => {
              this.listeners.delete(e), this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      };
    },
    41277: (e, t, r) => {
      r.d(t, { T: () => n });
      function n() {
        let e, t;
        let r = new Promise((r, n) => {
          (e = r), (t = n);
        });
        function n(e) {
          Object.assign(r, e), delete r.resolve, delete r.reject;
        }
        return (
          (r.status = "pending"),
          r.catch(() => {}),
          (r.resolve = (t) => {
            n({ status: "fulfilled", value: t }), e(t);
          }),
          (r.reject = (e) => {
            n({ status: "rejected", reason: e }), t(e);
          }),
          r
        );
      }
    },
    84403: (e, t, r) => {
      r.d(t, {
        BH: () => y,
        Cp: () => p,
        EN: () => f,
        Eh: () => u,
        F$: () => h,
        MK: () => l,
        S$: () => n,
        ZM: () => C,
        ZZ: () => P,
        Zw: () => s,
        d2: () => c,
        f8: () => b,
        gn: () => a,
        hT: () => I,
        j3: () => o,
        lQ: () => i,
        nJ: () => d,
        pl: () => x,
        y9: () => E,
        yy: () => w,
      });
      var n = "undefined" == typeof window || "Deno" in globalThis;
      function i() {}
      function s(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function a(e) {
        return "number" == typeof e && e >= 0 && e !== 1 / 0;
      }
      function o(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0);
      }
      function c(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function u(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function l(e, t) {
        let {
          type: r = "all",
          exact: n,
          fetchStatus: i,
          predicate: s,
          queryKey: a,
          stale: o,
        } = e;
        if (a) {
          if (n) {
            if (t.queryHash !== h(a, t.options)) return !1;
          } else if (!p(t.queryKey, a)) return !1;
        }
        if ("all" !== r) {
          let e = t.isActive();
          if (("active" === r && !e) || ("inactive" === r && e)) return !1;
        }
        return (
          ("boolean" != typeof o || t.isStale() === o) &&
          (!i || i === t.state.fetchStatus) &&
          (!s || !!s(t))
        );
      }
      function d(e, t) {
        let { exact: r, status: n, predicate: i, mutationKey: s } = e;
        if (s) {
          if (!t.options.mutationKey) return !1;
          if (r) {
            if (f(t.options.mutationKey) !== f(s)) return !1;
          } else if (!p(t.options.mutationKey, s)) return !1;
        }
        return (!n || t.state.status === n) && (!i || !!i(t));
      }
      function h(e, t) {
        return (t?.queryKeyHashFn || f)(e);
      }
      function f(e) {
        return JSON.stringify(e, (e, t) =>
          g(t)
            ? Object.keys(t)
                .sort()
                .reduce((e, r) => ((e[r] = t[r]), e), {})
            : t
        );
      }
      function p(e, t) {
        return (
          e === t ||
          (typeof e == typeof t &&
            !!e &&
            !!t &&
            "object" == typeof e &&
            "object" == typeof t &&
            !Object.keys(t).some((r) => !p(e[r], t[r])))
        );
      }
      function y(e, t) {
        if (e === t) return e;
        let r = m(e) && m(t);
        if (r || (g(e) && g(t))) {
          let n = r ? e : Object.keys(e),
            i = n.length,
            s = r ? t : Object.keys(t),
            a = s.length,
            o = r ? [] : {},
            c = 0;
          for (let i = 0; i < a; i++) {
            let a = r ? i : s[i];
            ((!r && n.includes(a)) || r) && void 0 === e[a] && void 0 === t[a]
              ? ((o[a] = void 0), c++)
              : ((o[a] = y(e[a], t[a])),
                o[a] === e[a] && void 0 !== e[a] && c++);
          }
          return i === a && c === i ? e : o;
        }
        return t;
      }
      function b(e, t) {
        if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
        for (let r in e) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function m(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length;
      }
      function g(e) {
        if (!v(e)) return !1;
        let t = e.constructor;
        if (void 0 === t) return !0;
        let r = t.prototype;
        return (
          !!(v(r) && r.hasOwnProperty("isPrototypeOf")) &&
          Object.getPrototypeOf(e) === Object.prototype
        );
      }
      function v(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function w(e) {
        return new Promise((t) => {
          setTimeout(t, e);
        });
      }
      function x(e, t, r) {
        return "function" == typeof r.structuralSharing
          ? r.structuralSharing(e, t)
          : !1 !== r.structuralSharing
          ? y(e, t)
          : t;
      }
      function E(e, t, r = 0) {
        let n = [...e, t];
        return r && n.length > r ? n.slice(1) : n;
      }
      function P(e, t, r = 0) {
        let n = [t, ...e];
        return r && n.length > r ? n.slice(0, -1) : n;
      }
      var I = Symbol();
      function C(e, t) {
        return !e.queryFn && t?.initialPromise
          ? () => t.initialPromise
          : e.queryFn && e.queryFn !== I
          ? e.queryFn
          : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
      }
    },
    35906: (e, t, r) => {
      r.r(t),
        r.d(t, {
          QueryClientContext: () => s,
          QueryClientProvider: () => o,
          useQueryClient: () => a,
        });
      var n = r(12115),
        i = r(95155),
        s = n.createContext(void 0),
        a = (e) => {
          let t = n.useContext(s);
          if (e) return e;
          if (!t)
            throw Error(
              "No QueryClient set, use QueryClientProvider to set one"
            );
          return t;
        },
        o = (e) => {
          let { client: t, children: r } = e;
          return (
            n.useEffect(
              () => (
                t.mount(),
                () => {
                  t.unmount();
                }
              ),
              [t]
            ),
            (0, i.jsx)(s.Provider, { value: t, children: r })
          );
        };
    },
    99435: (e, t, r) => {
      r.d(t, {
        QueryErrorResetBoundary: () => c,
        useQueryErrorResetBoundary: () => o,
      });
      var n = r(12115),
        i = r(95155);
      function s() {
        let e = !1;
        return {
          clearReset: () => {
            e = !1;
          },
          reset: () => {
            e = !0;
          },
          isReset: () => e,
        };
      }
      var a = n.createContext(s()),
        o = () => n.useContext(a),
        c = (e) => {
          let { children: t } = e,
            [r] = n.useState(() => s());
          return (0, i.jsx)(a.Provider, {
            value: r,
            children: "function" == typeof t ? t(r) : t,
          });
        };
    },
    8861: (e, t, r) => {
      r.d(t, { $1: () => o, LJ: () => s, wZ: () => a });
      var n = r(12115),
        i = r(96373),
        s = (e, t) => {
          (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
            !t.isReset() &&
            (e.retryOnMount = !1);
        },
        a = (e) => {
          n.useEffect(() => {
            e.clearReset();
          }, [e]);
        },
        o = (e) => {
          let {
            result: t,
            errorResetBoundary: r,
            throwOnError: n,
            query: s,
          } = e;
          return (
            t.isError &&
            !r.isReset() &&
            !t.isFetching &&
            s &&
            (0, i.G)(n, [t.error, s])
          );
        };
    },
    81997: (e, t, r) => {
      r.d(t, { IsRestoringProvider: () => a, useIsRestoring: () => s });
      var n = r(12115),
        i = n.createContext(!1),
        s = () => n.useContext(i),
        a = i.Provider;
    },
    74760: (e, t, r) => {
      r.d(t, {
        EU: () => a,
        R3: () => n,
        iL: () => o,
        jv: () => i,
        nE: () => s,
      });
      var n = (e, t) => void 0 === t.state.data,
        i = (e) => {
          let t = e.staleTime;
          e.suspense &&
            ((e.staleTime =
              "function" == typeof t
                ? (...e) => Math.max(t(...e), 1e3)
                : Math.max(t ?? 1e3, 1e3)),
            "number" == typeof e.gcTime &&
              (e.gcTime = Math.max(e.gcTime, 1e3)));
        },
        s = (e, t) => e.isLoading && e.isFetching && !t,
        a = (e, t) => e?.suspense && t.isPending,
        o = (e, t, r) =>
          t.fetchOptimistic(e).catch(() => {
            r.clearReset();
          });
    },
    81514: (e, t, r) => {
      r.d(t, { t: () => h });
      var n = r(12115),
        i = r(15586),
        s = r(84403),
        a = r(35906),
        o = r(99435),
        c = r(8861),
        u = r(81997),
        l = r(74760),
        d = r(96373);
      function h(e, t, r) {
        var h, f, p, y, b;
        let m = (0, a.useQueryClient)(r),
          g = (0, u.useIsRestoring)(),
          v = (0, o.useQueryErrorResetBoundary)(),
          w = m.defaultQueryOptions(e);
        null === (f = m.getDefaultOptions().queries) ||
          void 0 === f ||
          null === (h = f._experimental_beforeQuery) ||
          void 0 === h ||
          h.call(f, w),
          (w._optimisticResults = g ? "isRestoring" : "optimistic"),
          (0, l.jv)(w),
          (0, c.LJ)(w, v),
          (0, c.wZ)(v);
        let x = !m.getQueryCache().get(w.queryHash),
          [E] = n.useState(() => new t(m, w)),
          P = E.getOptimisticResult(w);
        if (
          (n.useSyncExternalStore(
            n.useCallback(
              (e) => {
                let t = g ? d.l : E.subscribe(i.j.batchCalls(e));
                return E.updateResult(), t;
              },
              [E, g]
            ),
            () => E.getCurrentResult(),
            () => E.getCurrentResult()
          ),
          n.useEffect(() => {
            E.setOptions(w, { listeners: !1 });
          }, [w, E]),
          (0, l.EU)(w, P))
        )
          throw (0, l.iL)(w, E, v);
        if (
          (0, c.$1)({
            result: P,
            errorResetBoundary: v,
            throwOnError: w.throwOnError,
            query: m.getQueryCache().get(w.queryHash),
          })
        )
          throw P.error;
        if (
          (null === (y = m.getDefaultOptions().queries) ||
            void 0 === y ||
            null === (p = y._experimental_afterQuery) ||
            void 0 === p ||
            p.call(y, w, P),
          w.experimental_prefetchInRender && !s.S$ && (0, l.nE)(P, g))
        ) {
          let e = x
            ? (0, l.iL)(w, E, v)
            : null === (b = m.getQueryCache().get(w.queryHash)) || void 0 === b
            ? void 0
            : b.promise;
          null == e ||
            e.catch(d.l).finally(() => {
              E.updateResult();
            });
        }
        return w.notifyOnChangeProps ? P : E.trackResult(P);
      }
    },
    12009: (e, t, r) => {
      r.d(t, { useInfiniteQuery: () => s });
      var n = r(6124),
        i = r(81514);
      function s(e, t) {
        return (0, i.t)(e, n.z, t);
      }
    },
    25848: (e, t, r) => {
      r.d(t, { useMutation: () => d });
      var n = r(12115),
        i = r(1049),
        s = r(15586),
        a = r(99323),
        o = r(84403),
        c = class extends a.Q {
          #f;
          #g = void 0;
          #U;
          #q;
          constructor(e, t) {
            super(),
              (this.#f = e),
              this.setOptions(t),
              this.bindMethods(),
              this.#z();
          }
          bindMethods() {
            (this.mutate = this.mutate.bind(this)),
              (this.reset = this.reset.bind(this));
          }
          setOptions(e) {
            let t = this.options;
            (this.options = this.#f.defaultMutationOptions(e)),
              (0, o.f8)(this.options, t) ||
                this.#f
                  .getMutationCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    mutation: this.#U,
                    observer: this,
                  }),
              t?.mutationKey &&
              this.options.mutationKey &&
              (0, o.EN)(t.mutationKey) !== (0, o.EN)(this.options.mutationKey)
                ? this.reset()
                : this.#U?.state.status === "pending" &&
                  this.#U.setOptions(this.options);
          }
          onUnsubscribe() {
            this.hasListeners() || this.#U?.removeObserver(this);
          }
          onMutationUpdate(e) {
            this.#z(), this.#N(e);
          }
          getCurrentResult() {
            return this.#g;
          }
          reset() {
            this.#U?.removeObserver(this),
              (this.#U = void 0),
              this.#z(),
              this.#N();
          }
          mutate(e, t) {
            return (
              (this.#q = t),
              this.#U?.removeObserver(this),
              (this.#U = this.#f
                .getMutationCache()
                .build(this.#f, this.options)),
              this.#U.addObserver(this),
              this.#U.execute(e)
            );
          }
          #z() {
            let e = this.#U?.state ?? (0, i.$)();
            this.#g = {
              ...e,
              isPending: "pending" === e.status,
              isSuccess: "success" === e.status,
              isError: "error" === e.status,
              isIdle: "idle" === e.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          }
          #N(e) {
            s.j.batch(() => {
              if (this.#q && this.hasListeners()) {
                let t = this.#g.variables,
                  r = this.#g.context;
                e?.type === "success"
                  ? (this.#q.onSuccess?.(e.data, t, r),
                    this.#q.onSettled?.(e.data, null, t, r))
                  : e?.type === "error" &&
                    (this.#q.onError?.(e.error, t, r),
                    this.#q.onSettled?.(void 0, e.error, t, r));
              }
              this.listeners.forEach((e) => {
                e(this.#g);
              });
            });
          }
        },
        u = r(35906),
        l = r(96373);
      function d(e, t) {
        let r = (0, u.useQueryClient)(t),
          [i] = n.useState(() => new c(r, e));
        n.useEffect(() => {
          i.setOptions(e);
        }, [i, e]);
        let a = n.useSyncExternalStore(
            n.useCallback((e) => i.subscribe(s.j.batchCalls(e)), [i]),
            () => i.getCurrentResult(),
            () => i.getCurrentResult()
          ),
          o = n.useCallback(
            (e, t) => {
              i.mutate(e, t).catch(l.l);
            },
            [i]
          );
        if (a.error && (0, l.G)(i.options.throwOnError, [a.error]))
          throw a.error;
        return { ...a, mutate: o, mutateAsync: a.mutate };
      }
    },
    93233: (e, t, r) => {
      r.d(t, { useQuery: () => s });
      var n = r(24724),
        i = r(81514);
      function s(e, t) {
        return (0, i.t)(e, n.$, t);
      }
    },
    96373: (e, t, r) => {
      function n(e, t) {
        return "function" == typeof e ? e(...t) : !!e;
      }
      function i() {}
      r.d(t, { G: () => n, l: () => i });
    },
    23454: (e, t, r) => {
      r.d(t, { s: () => n });
      function n(e) {
        let t = e.state.current,
          r = e.state.connections.get(t),
          n = r?.accounts,
          i = n?.[0],
          s = e.chains.find((e) => e.id === r?.chainId),
          a = e.state.status;
        switch (a) {
          case "connected":
            return {
              address: i,
              addresses: n,
              chain: s,
              chainId: r?.chainId,
              connector: r?.connector,
              isConnected: !0,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !1,
              status: a,
            };
          case "reconnecting":
            return {
              address: i,
              addresses: n,
              chain: s,
              chainId: r?.chainId,
              connector: r?.connector,
              isConnected: !!i,
              isConnecting: !1,
              isDisconnected: !1,
              isReconnecting: !0,
              status: a,
            };
          case "connecting":
            return {
              address: i,
              addresses: n,
              chain: s,
              chainId: r?.chainId,
              connector: r?.connector,
              isConnected: !1,
              isConnecting: !0,
              isDisconnected: !1,
              isReconnecting: !1,
              status: a,
            };
          case "disconnected":
            return {
              address: void 0,
              addresses: void 0,
              chain: void 0,
              chainId: void 0,
              connector: void 0,
              isConnected: !1,
              isConnecting: !1,
              isDisconnected: !0,
              isReconnecting: !1,
              status: a,
            };
        }
      }
    },
    74076: (e, t, r) => {
      r.d(t, { K: () => n });
      function n(e, t = {}) {
        let r;
        try {
          r = e.getClient(t);
        } catch {}
        return r;
      }
    },
    16942: (e, t, r) => {
      r.d(t, { r: () => c });
      var n = r(44711),
        i = r(67128),
        s = r(98722),
        a = r(40814),
        o = r(22537);
      async function c(e, t = {}) {
        let r;
        if (t.connector) {
          let { connector: n } = t;
          if (
            "reconnecting" === e.state.status &&
            !n.getAccounts &&
            !n.getChainId
          )
            throw new o.HF({ connector: n });
          let [i, s] = await Promise.all([n.getAccounts(), n.getChainId()]);
          r = { accounts: i, chainId: s, connector: n };
        } else r = e.state.connections.get(e.state.current);
        if (!r) throw new o.gC();
        let u = t.chainId ?? r.chainId,
          l = await r.connector.getChainId();
        if (l !== r.chainId)
          throw new o.xU({ connectionChainId: r.chainId, connectorChainId: l });
        let d = r.connector;
        if (d.getClient) return d.getClient({ chainId: u });
        let h = (0, s.J)(t.account ?? r.accounts[0]);
        if (
          ((h.address = (0, a.b)(h.address)),
          t.account &&
            !r.accounts.some(
              (e) => e.toLowerCase() === h.address.toLowerCase()
            ))
        )
          throw new o.aj({ address: h.address, connector: d });
        let f = e.chains.find((e) => e.id === u),
          p = await r.connector.getProvider({ chainId: u });
        return (0, n.U)({
          account: h,
          chain: f,
          name: "Connector Client",
          transport: (e) =>
            (function (e, t = {}) {
              let {
                key: r = "custom",
                name: n = "Custom Provider",
                retryDelay: s,
              } = t;
              return ({ retryCount: a }) =>
                (0, i.o)({
                  key: r,
                  name: n,
                  request: e.request.bind(e),
                  retryCount: t.retryCount ?? a,
                  retryDelay: s,
                  type: "custom",
                });
            })(p)({ ...e, retryCount: 0 }),
        });
      }
    },
    41047: (e, t, r) => {
      r.d(t, { J: () => s });
      var n = r(88215),
        i = r(43247);
      function s(e, t) {
        let { chainId: r, ...s } = t,
          a = e.getClient({ chainId: r });
        return (0, i.T)(a, n.J, "readContract")(s);
      }
    },
    81992: (e, t, r) => {
      r.d(t, { I: () => c });
      var n = r(88085),
        i = r(49838),
        s = r(43247);
      async function a(e, t) {
        let { allowFailure: r = !0, chainId: n, contracts: a, ...o } = t,
          c = e.getClient({ chainId: n });
        return (0, s.T)(
          c,
          i.C,
          "multicall"
        )({ allowFailure: r, contracts: a, ...o });
      }
      var o = r(41047);
      async function c(e, t) {
        let { allowFailure: r = !0, blockNumber: i, blockTag: s, ...c } = t,
          u = t.contracts;
        try {
          let t = {};
          for (let [r, n] of u.entries()) {
            let i = n.chainId ?? e.state.chainId;
            t[i] || (t[i] = []), t[i]?.push({ contract: n, index: r });
          }
          let n = (
              await Promise.all(
                Object.entries(t).map(([t, n]) =>
                  a(e, {
                    ...c,
                    allowFailure: r,
                    blockNumber: i,
                    blockTag: s,
                    chainId: Number.parseInt(t),
                    contracts: n.map(({ contract: e }) => e),
                  })
                )
              )
            ).flat(),
            o = Object.values(t).flatMap((e) => e.map(({ index: e }) => e));
          return n.reduce((e, t, r) => (e && (e[o[r]] = t), e), []);
        } catch (a) {
          if (a instanceof n.bG) throw a;
          let t = () =>
            u.map((t) => (0, o.J)(e, { ...t, blockNumber: i, blockTag: s }));
          if (r)
            return (await Promise.allSettled(t())).map((e) =>
              "fulfilled" === e.status
                ? { result: e.value, status: "success" }
                : { error: e.reason, result: void 0, status: "failure" }
            );
          return await Promise.all(t());
        }
      }
    },
    19362: (e, t, r) => {
      r.d(t, { M: () => i });
      let n = !1;
      async function i(e, t = {}) {
        let r;
        if (n) return [];
        (n = !0),
          e.setState((e) => ({
            ...e,
            status: e.current ? "reconnecting" : "connecting",
          }));
        let s = [];
        if (t.connectors?.length)
          for (let r of t.connectors) {
            let t;
            (t = "function" == typeof r ? e._internal.connectors.setup(r) : r),
              s.push(t);
          }
        else s.push(...e.connectors);
        try {
          r = await e.storage?.getItem("recentConnectorId");
        } catch {}
        let a = {};
        for (let [, t] of e.state.connections) a[t.connector.id] = 1;
        r && (a[r] = 0);
        let o =
            Object.keys(a).length > 0
              ? [...s].sort((e, t) => (a[e.id] ?? 10) - (a[t.id] ?? 10))
              : s,
          c = !1,
          u = [],
          l = [];
        for (let t of o) {
          let r = await t.getProvider().catch(() => void 0);
          if (!r || l.some((e) => e === r) || !(await t.isAuthorized()))
            continue;
          let n = await t.connect({ isReconnecting: !0 }).catch(() => null);
          n &&
            (t.emitter.off("connect", e._internal.events.connect),
            t.emitter.on("change", e._internal.events.change),
            t.emitter.on("disconnect", e._internal.events.disconnect),
            e.setState((e) => {
              let r = new Map(c ? e.connections : new Map()).set(t.uid, {
                accounts: n.accounts,
                chainId: n.chainId,
                connector: t,
              });
              return { ...e, current: c ? e.current : t.uid, connections: r };
            }),
            u.push({ accounts: n.accounts, chainId: n.chainId, connector: t }),
            l.push(r),
            (c = !0));
        }
        return (
          ("reconnecting" === e.state.status ||
            "connecting" === e.state.status) &&
            (c
              ? e.setState((e) => ({ ...e, status: "connected" }))
              : e.setState((e) => ({
                  ...e,
                  connections: new Map(),
                  current: null,
                  status: "disconnected",
                }))),
          (n = !1),
          u
        );
      }
    },
    12443: (e, t, r) => {
      r.d(t, { F: () => s });
      var n = r(36919),
        i = r(23454);
      function s(e, t) {
        let { onChange: r } = t;
        return e.subscribe(() => (0, i.s)(e), r, {
          equalityFn(e, t) {
            let { connector: r, ...i } = e,
              { connector: s, ...a } = t;
            return (0, n.b)(i, a) && r?.id === s?.id && r?.uid === s?.uid;
          },
        });
      }
    },
    36674: (e, t, r) => {
      r.d(t, { C: () => c });
      var n,
        i,
        s = r(45259);
      let a = () => `@wagmi/core@${s.r}`;
      var o = function (e, t, r, n) {
        if ("a" === r && !n)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
      };
      class c extends Error {
        get docsBaseUrl() {
          return "https://wagmi.sh/core";
        }
        get version() {
          return a();
        }
        constructor(e, t = {}) {
          super(),
            n.add(this),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiCoreError",
            });
          let r =
              t.cause instanceof c
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            i = (t.cause instanceof c && t.cause.docsPath) || t.docsPath;
          (this.message = [
            e || "An error occurred.",
            "",
            ...(t.metaMessages ? [...t.metaMessages, ""] : []),
            ...(i
              ? [
                  `Docs: ${this.docsBaseUrl}${i}.html${
                    t.docsSlug ? `#${t.docsSlug}` : ""
                  }`,
                ]
              : []),
            ...(r ? [`Details: ${r}`] : []),
            `Version: ${this.version}`,
          ].join("\n")),
            t.cause && (this.cause = t.cause),
            (this.details = r),
            (this.docsPath = i),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
        walk(e) {
          return o(this, n, "m", i).call(this, this, e);
        }
      }
      (n = new WeakSet()),
        (i = function e(t, r) {
          return r?.(t)
            ? t
            : t.cause
            ? o(this, n, "m", e).call(this, t.cause, r)
            : t;
        });
    },
    22537: (e, t, r) => {
      r.d(t, {
        HF: () => u,
        aj: () => o,
        gC: () => a,
        nM: () => s,
        nk: () => i,
        xU: () => c,
      });
      var n = r(36674);
      class i extends n.C {
        constructor() {
          super("Chain not configured."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ChainNotConfiguredError",
            });
        }
      }
      class s extends n.C {
        constructor() {
          super("Connector already connected."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorAlreadyConnectedError",
            });
        }
      }
      class a extends n.C {
        constructor() {
          super("Connector not connected."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorNotConnectedError",
            });
        }
      }
      class o extends n.C {
        constructor({ address: e, connector: t }) {
          super(`Account "${e}" not found for connector "${t.name}".`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorAccountNotFoundError",
            });
        }
      }
      class c extends n.C {
        constructor({ connectionChainId: e, connectorChainId: t }) {
          super(
            `The current chain of the connector (id: ${t}) does not match the connection's chain (id: ${e}).`,
            {
              metaMessages: [
                `Current Chain ID:  ${t}`,
                `Expected Chain ID: ${e}`,
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorChainMismatchError",
            });
        }
      }
      class u extends n.C {
        constructor({ connector: e }) {
          super(`Connector "${e.name}" unavailable while reconnecting.`, {
            details:
              "During the reconnection step, the only connector methods guaranteed to be available are: `id`, `name`, `type`, `uid`. All other methods are not guaranteed to be available until reconnection completes and connectors are fully restored. This error commonly occurs for connectors that asynchronously inject after reconnection has already started.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ConnectorUnavailableReconnectingError",
            });
        }
      }
    },
    77434: (e, t, r) => {
      r.d(t, { N: () => i, V: () => s });
      var n = r(36674);
      class i extends n.C {
        constructor() {
          super("Provider not found."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ProviderNotFoundError",
            });
        }
      }
      class s extends n.C {
        constructor({ connector: e }) {
          super(`"${e.name}" does not support programmatic chain switching.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SwitchChainNotSupportedError",
            });
        }
      }
    },
    23905: (e, t, r) => {
      r.d(t, { I_: () => i, Zi: () => s, xO: () => o });
      var n = r(84403);
      function i(e, t) {
        return (0, n.BH)(e, t);
      }
      function s(e) {
        return JSON.stringify(e, (e, t) =>
          !(function (e) {
            if (!a(e)) return !1;
            let t = e.constructor;
            if (void 0 === t) return !0;
            let r = t.prototype;
            return !!(a(r) && r.hasOwnProperty("isPrototypeOf"));
          })(t)
            ? "bigint" == typeof t
              ? t.toString()
              : t
            : Object.keys(t)
                .sort()
                .reduce((e, r) => ((e[r] = t[r]), e), {})
        );
      }
      function a(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function o(e) {
        let {
          _defaulted: t,
          behavior: r,
          gcTime: n,
          initialData: i,
          initialDataUpdatedAt: s,
          maxPages: a,
          meta: o,
          networkMode: c,
          queryFn: u,
          queryHash: l,
          queryKey: d,
          queryKeyHashFn: h,
          retry: f,
          retryDelay: p,
          structuralSharing: y,
          getPreviousPageParam: b,
          getNextPageParam: m,
          initialPageParam: g,
          _optimisticResults: v,
          enabled: w,
          notifyOnChangeProps: x,
          placeholderData: E,
          refetchInterval: P,
          refetchIntervalInBackground: I,
          refetchOnMount: C,
          refetchOnReconnect: B,
          refetchOnWindowFocus: $,
          retryOnMount: A,
          select: O,
          staleTime: S,
          suspense: M,
          throwOnError: R,
          config: T,
          connector: F,
          query: k,
          ...N
        } = e;
        return N;
      }
    },
    36919: (e, t, r) => {
      r.d(t, {
        b: () =>
          function e(t, r) {
            if (t === r) return !0;
            if (t && r && "object" == typeof t && "object" == typeof r) {
              let n, i;
              if (t.constructor !== r.constructor) return !1;
              if (Array.isArray(t) && Array.isArray(r)) {
                if ((n = t.length) !== r.length) return !1;
                for (i = n; 0 != i--; ) if (!e(t[i], r[i])) return !1;
                return !0;
              }
              if (t.valueOf !== Object.prototype.valueOf)
                return t.valueOf() === r.valueOf();
              if (t.toString !== Object.prototype.toString)
                return t.toString() === r.toString();
              let s = Object.keys(t);
              if ((n = s.length) !== Object.keys(r).length) return !1;
              for (i = n; 0 != i--; )
                if (!Object.prototype.hasOwnProperty.call(r, s[i])) return !1;
              for (i = n; 0 != i--; ) {
                let n = s[i];
                if (n && !e(t[n], r[n])) return !1;
              }
              return !0;
            }
            return t != t && r != r;
          },
      });
    },
    43247: (e, t, r) => {
      r.d(t, { T: () => n });
      function n(e, t, r) {
        let n = e[t.name];
        if ("function" == typeof n) return n;
        let i = e[r];
        return "function" == typeof i ? i : (r) => t(e, r);
      }
    },
    87831: (e, t, r) => {
      r.d(t, { l: () => i });
      var n = r(57317);
      function i(e) {
        return "number" == typeof e ? e : "wei" === e ? 0 : Math.abs(n.pj[e]);
      }
    },
    45259: (e, t, r) => {
      r.d(t, { r: () => n });
      let n = "2.16.3";
    },
    6463: (e, t, r) => {
      function n(e, t) {
        let r = e.exec(t);
        return r?.groups;
      }
      r.d(t, { BD: () => i, Ge: () => s, Yv: () => n, wj: () => a });
      let i = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        s =
          /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
        a = /^\(.+?\).*?$/;
    },
    98722: (e, t, r) => {
      r.d(t, { J: () => n });
      function n(e) {
        return "string" == typeof e ? { address: e, type: "json-rpc" } : e;
      }
    },
    5756: (e, t, r) => {
      r.d(t, { B: () => p });
      var n = r(38472),
        i = r(59719),
        s = r(74046),
        a = r(40874),
        o = r(67368),
        c = r(98979),
        u = r(7617),
        l = r(30517),
        d = r(35055),
        h = r(72447),
        f = r(88215);
      async function p(
        e,
        {
          blockNumber: t,
          blockTag: r,
          coinType: p,
          name: y,
          gatewayUrls: b,
          strict: m,
          universalResolverAddress: g,
        }
      ) {
        let v = g;
        if (!v) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          v = (0, a.M)({
            blockNumber: t,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        try {
          let a = (0, s.p)({
              abi: n.Rm,
              functionName: "addr",
              ...(null != p
                ? { args: [(0, l.k)(y), BigInt(p)] }
                : { args: [(0, l.k)(y)] }),
            }),
            u = {
              address: v,
              abi: n.Ag,
              functionName: "resolve",
              args: [(0, c.nj)((0, d.F)(y)), a],
              blockNumber: t,
              blockTag: r,
            },
            m = (0, h.T)(e, f.J, "readContract"),
            g = b ? await m({ ...u, args: [...u.args, b] }) : await m(u);
          if ("0x" === g[0]) return null;
          let w = (0, i.e)({
            abi: n.Rm,
            args: null != p ? [(0, l.k)(y), BigInt(p)] : void 0,
            functionName: "addr",
            data: g[0],
          });
          if ("0x" === w || "0x00" === (0, o.B)(w)) return null;
          return w;
        } catch (e) {
          if (m) throw e;
          if ((0, u.J)(e, "resolve")) return null;
          throw e;
        }
      }
    },
    16816: (e, t, r) => {
      r.d(t, { i: () => I });
      var n = r(88215),
        i = r(80477);
      class s extends i.C {
        constructor({ data: e }) {
          super(
            "Unable to extract image from metadata. The metadata may be malformed or invalid.",
            {
              metaMessages: [
                "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
                "",
                `Provided data: ${JSON.stringify(e)}`,
              ],
              name: "EnsAvatarInvalidMetadataError",
            }
          );
        }
      }
      class a extends i.C {
        constructor({ reason: e }) {
          super(`ENS NFT avatar URI is invalid. ${e}`, {
            name: "EnsAvatarInvalidNftUriError",
          });
        }
      }
      class o extends i.C {
        constructor({ uri: e }) {
          super(
            `Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`,
            { name: "EnsAvatarUriResolutionError" }
          );
        }
      }
      class c extends i.C {
        constructor({ namespace: e }) {
          super(
            `ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`,
            { name: "EnsAvatarUnsupportedNamespaceError" }
          );
        }
      }
      let u =
          /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
        l =
          /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
        d = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
        h = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
      async function f(e) {
        try {
          let t = await fetch(e, { method: "HEAD" });
          if (200 === t.status) {
            let e = t.headers.get("content-type");
            return e?.startsWith("image/");
          }
          return !1;
        } catch (t) {
          if (
            ("object" == typeof t && void 0 !== t.response) ||
            !globalThis.hasOwnProperty("Image")
          )
            return !1;
          return new Promise((t) => {
            let r = new Image();
            (r.onload = () => {
              t(!0);
            }),
              (r.onerror = () => {
                t(!1);
              }),
              (r.src = e);
          });
        }
      }
      function p(e, t) {
        return e ? (e.endsWith("/") ? e.slice(0, -1) : e) : t;
      }
      function y({ uri: e, gatewayUrls: t }) {
        let r = d.test(e);
        if (r) return { uri: e, isOnChain: !0, isEncoded: r };
        let n = p(t?.ipfs, "https://ipfs.io"),
          i = p(t?.arweave, "https://arweave.net"),
          s = e.match(u),
          {
            protocol: a,
            subpath: c,
            target: f,
            subtarget: y = "",
          } = s?.groups || {},
          b = "ipns:/" === a || "ipns/" === c,
          m = "ipfs:/" === a || "ipfs/" === c || l.test(e);
        if (e.startsWith("http") && !b && !m) {
          let r = e;
          return (
            t?.arweave && (r = e.replace(/https:\/\/arweave.net/g, t?.arweave)),
            { uri: r, isOnChain: !1, isEncoded: !1 }
          );
        }
        if ((b || m) && f)
          return {
            uri: `${n}/${b ? "ipns" : "ipfs"}/${f}${y}`,
            isOnChain: !1,
            isEncoded: !1,
          };
        if ("ar:/" === a && f)
          return { uri: `${i}/${f}${y || ""}`, isOnChain: !1, isEncoded: !1 };
        let g = e.replace(h, "");
        if (
          (g.startsWith("<svg") && (g = `data:image/svg+xml;base64,${btoa(g)}`),
          g.startsWith("data:") || g.startsWith("{"))
        )
          return { uri: g, isOnChain: !0, isEncoded: !1 };
        throw new o({ uri: e });
      }
      function b(e) {
        if (
          "object" != typeof e ||
          (!("image" in e) && !("image_url" in e) && !("image_data" in e))
        )
          throw new s({ data: e });
        return e.image || e.image_url || e.image_data;
      }
      async function m({ gatewayUrls: e, uri: t }) {
        try {
          let r = await fetch(t).then((e) => e.json());
          return await g({ gatewayUrls: e, uri: b(r) });
        } catch {
          throw new o({ uri: t });
        }
      }
      async function g({ gatewayUrls: e, uri: t }) {
        let { uri: r, isOnChain: n } = y({ uri: t, gatewayUrls: e });
        if (n || (await f(r))) return r;
        throw new o({ uri: t });
      }
      async function v(e, { nft: t }) {
        if ("erc721" === t.namespace)
          return (0, n.J)(e, {
            address: t.contractAddress,
            abi: [
              {
                name: "tokenURI",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "tokenId", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "tokenURI",
            args: [BigInt(t.tokenID)],
          });
        if ("erc1155" === t.namespace)
          return (0, n.J)(e, {
            address: t.contractAddress,
            abi: [
              {
                name: "uri",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "_id", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "uri",
            args: [BigInt(t.tokenID)],
          });
        throw new c({ namespace: t.namespace });
      }
      async function w(e, { gatewayUrls: t, record: r }) {
        return /eip155:/i.test(r)
          ? x(e, { gatewayUrls: t, record: r })
          : g({ uri: r, gatewayUrls: t });
      }
      async function x(e, { gatewayUrls: t, record: r }) {
        let n = (function (e) {
            let t = e;
            t.startsWith("did:nft:") &&
              (t = t.replace("did:nft:", "").replace(/_/g, "/"));
            let [r, n, i] = t.split("/"),
              [s, o] = r.split(":"),
              [c, u] = n.split(":");
            if (!s || "eip155" !== s.toLowerCase())
              throw new a({ reason: "Only EIP-155 supported" });
            if (!o) throw new a({ reason: "Chain ID not found" });
            if (!u) throw new a({ reason: "Contract address not found" });
            if (!i) throw new a({ reason: "Token ID not found" });
            if (!c) throw new a({ reason: "ERC namespace not found" });
            return {
              chainID: Number.parseInt(o),
              namespace: c.toLowerCase(),
              contractAddress: u,
              tokenID: i,
            };
          })(r),
          {
            uri: i,
            isOnChain: s,
            isEncoded: o,
          } = y({ uri: await v(e, { nft: n }), gatewayUrls: t });
        if (
          s &&
          (i.includes("data:application/json;base64,") || i.startsWith("{"))
        )
          return g({
            uri: b(
              JSON.parse(
                o ? atob(i.replace("data:application/json;base64,", "")) : i
              )
            ),
            gatewayUrls: t,
          });
        let c = n.tokenID;
        return (
          "erc1155" === n.namespace &&
            (c = c.replace("0x", "").padStart(64, "0")),
          m({ gatewayUrls: t, uri: i.replace(/(?:0x)?{id}/, c) })
        );
      }
      var E = r(72447),
        P = r(53107);
      async function I(
        e,
        {
          blockNumber: t,
          blockTag: r,
          assetGatewayUrls: n,
          name: i,
          gatewayUrls: s,
          strict: a,
          universalResolverAddress: o,
        }
      ) {
        let c = await (0, E.T)(
          e,
          P.m,
          "getEnsText"
        )({
          blockNumber: t,
          blockTag: r,
          key: "avatar",
          name: i,
          universalResolverAddress: o,
          gatewayUrls: s,
          strict: a,
        });
        if (!c) return null;
        try {
          return await w(e, { record: c, gatewayUrls: n });
        } catch {
          return null;
        }
      }
    },
    99283: (e, t, r) => {
      r.d(t, { s: () => l });
      var n = r(38472),
        i = r(40874),
        s = r(98979),
        a = r(7617),
        o = r(35055),
        c = r(72447),
        u = r(88215);
      async function l(
        e,
        {
          address: t,
          blockNumber: r,
          blockTag: l,
          gatewayUrls: d,
          strict: h,
          universalResolverAddress: f,
        }
      ) {
        let p = f;
        if (!p) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          p = (0, i.M)({
            blockNumber: r,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        let y = `${t.toLowerCase().substring(2)}.addr.reverse`;
        try {
          let i = {
              address: p,
              abi: n.oX,
              functionName: "reverse",
              args: [(0, s.nj)((0, o.F)(y))],
              blockNumber: r,
              blockTag: l,
            },
            a = (0, c.T)(e, u.J, "readContract"),
            [h, f] = d ? await a({ ...i, args: [...i.args, d] }) : await a(i);
          if (t.toLowerCase() !== f.toLowerCase()) return null;
          return h;
        } catch (e) {
          if (h) throw e;
          if ((0, a.J)(e, "reverse")) return null;
          throw e;
        }
      }
    },
    5326: (e, t, r) => {
      r.d(t, { D: () => c });
      var n = r(40874),
        i = r(98979),
        s = r(35055),
        a = r(72447),
        o = r(88215);
      async function c(
        e,
        { blockNumber: t, blockTag: r, name: c, universalResolverAddress: u }
      ) {
        let l = u;
        if (!l) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          l = (0, n.M)({
            blockNumber: t,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        let [d] = await (0, a.T)(
          e,
          o.J,
          "readContract"
        )({
          address: l,
          abi: [
            {
              inputs: [{ type: "bytes" }],
              name: "findResolver",
              outputs: [{ type: "address" }, { type: "bytes32" }],
              stateMutability: "view",
              type: "function",
            },
          ],
          functionName: "findResolver",
          args: [(0, i.nj)((0, s.F)(c))],
          blockNumber: t,
          blockTag: r,
        });
        return d;
      }
    },
    53107: (e, t, r) => {
      r.d(t, { m: () => f });
      var n = r(38472),
        i = r(59719),
        s = r(74046),
        a = r(40874),
        o = r(98979),
        c = r(7617),
        u = r(30517),
        l = r(35055),
        d = r(72447),
        h = r(88215);
      async function f(
        e,
        {
          blockNumber: t,
          blockTag: r,
          name: f,
          key: p,
          gatewayUrls: y,
          strict: b,
          universalResolverAddress: m,
        }
      ) {
        let g = m;
        if (!g) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          g = (0, a.M)({
            blockNumber: t,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        try {
          let a = {
              address: g,
              abi: n.Ag,
              functionName: "resolve",
              args: [
                (0, o.nj)((0, l.F)(f)),
                (0, s.p)({
                  abi: n.SJ,
                  functionName: "text",
                  args: [(0, u.k)(f), p],
                }),
              ],
              blockNumber: t,
              blockTag: r,
            },
            c = (0, d.T)(e, h.J, "readContract"),
            b = y ? await c({ ...a, args: [...a.args, y] }) : await c(a);
          if ("0x" === b[0]) return null;
          let m = (0, i.e)({ abi: n.SJ, functionName: "text", data: b[0] });
          return "" === m ? null : m;
        } catch (e) {
          if (b) throw e;
          if ((0, c.J)(e, "resolve")) return null;
          throw e;
        }
      }
    },
    91488: (e, t, r) => {
      r.d(t, { T: () => X });
      var n = r(6463);
      let i = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/,
        s = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/,
        a =
          /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/,
        o = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/,
        c =
          /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/,
        u = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/,
        l = /^receive\(\) external payable$/,
        d = new Set(["indexed"]),
        h = new Set(["calldata", "memory", "storage"]);
      class f extends Error {
        constructor(e, t = {}) {
          let r =
              t.cause instanceof f
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            n = (t.cause instanceof f && t.cause.docsPath) || t.docsPath;
          super(
            [
              e || "An error occurred.",
              "",
              ...(t.metaMessages ? [...t.metaMessages, ""] : []),
              ...(n ? [`Docs: https://abitype.dev${n}`] : []),
              ...(r ? [`Details: ${r}`] : []),
              "Version: abitype@1.0.7",
            ].join("\n")
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiTypeError",
            }),
            t.cause && (this.cause = t.cause),
            (this.details = r),
            (this.docsPath = n),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
      }
      class p extends f {
        constructor({ type: e }) {
          super("Unknown type.", {
            metaMessages: [
              `Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownTypeError",
            });
        }
      }
      class y extends f {
        constructor({ type: e }) {
          super("Unknown type.", {
            metaMessages: [`Type "${e}" is not a valid ABI type.`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownSolidityTypeError",
            });
        }
      }
      class b extends f {
        constructor({ param: e }) {
          super("Invalid ABI parameter.", { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidParameterError",
            });
        }
      }
      class m extends f {
        constructor({ param: e, name: t }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `"${t}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SolidityProtectedKeywordError",
            });
        }
      }
      class g extends f {
        constructor({ param: e, type: t, modifier: r }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `Modifier "${r}" not allowed${t ? ` in "${t}" type` : ""}.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidModifierError",
            });
        }
      }
      class v extends f {
        constructor({ param: e, type: t, modifier: r }) {
          super("Invalid ABI parameter.", {
            details: e,
            metaMessages: [
              `Modifier "${r}" not allowed${t ? ` in "${t}" type` : ""}.`,
              `Data location can only be specified for array, struct, or mapping types, but "${r}" was given.`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidFunctionModifierError",
            });
        }
      }
      class w extends f {
        constructor({ abiParameter: e }) {
          super("Invalid ABI parameter.", {
            details: JSON.stringify(e, null, 2),
            metaMessages: ["ABI parameter type is invalid."],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiTypeParameterError",
            });
        }
      }
      class x extends f {
        constructor({ signature: e, type: t }) {
          super(`Invalid ${t} signature.`, { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidSignatureError",
            });
        }
      }
      class E extends f {
        constructor({ signature: e }) {
          super("Unknown signature.", { details: e }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownSignatureError",
            });
        }
      }
      class P extends f {
        constructor({ signature: e }) {
          super("Invalid struct signature.", {
            details: e,
            metaMessages: ["No properties exist."],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidStructSignatureError",
            });
        }
      }
      class I extends f {
        constructor({ type: e }) {
          super("Circular reference detected.", {
            metaMessages: [`Struct "${e}" is a circular reference.`],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "CircularReferenceError",
            });
        }
      }
      class C extends f {
        constructor({ current: e, depth: t }) {
          super("Unbalanced parentheses.", {
            metaMessages: [
              `"${e.trim()}" has too many ${
                t > 0 ? "opening" : "closing"
              } parentheses.`,
            ],
            details: `Depth "${t}"`,
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidParenthesisError",
            });
        }
      }
      let B = new Map([
          ["address", { type: "address" }],
          ["bool", { type: "bool" }],
          ["bytes", { type: "bytes" }],
          ["bytes32", { type: "bytes32" }],
          ["int", { type: "int256" }],
          ["int256", { type: "int256" }],
          ["string", { type: "string" }],
          ["uint", { type: "uint256" }],
          ["uint8", { type: "uint8" }],
          ["uint16", { type: "uint16" }],
          ["uint24", { type: "uint24" }],
          ["uint32", { type: "uint32" }],
          ["uint64", { type: "uint64" }],
          ["uint96", { type: "uint96" }],
          ["uint112", { type: "uint112" }],
          ["uint160", { type: "uint160" }],
          ["uint192", { type: "uint192" }],
          ["uint256", { type: "uint256" }],
          ["address owner", { type: "address", name: "owner" }],
          ["address to", { type: "address", name: "to" }],
          ["bool approved", { type: "bool", name: "approved" }],
          ["bytes _data", { type: "bytes", name: "_data" }],
          ["bytes data", { type: "bytes", name: "data" }],
          ["bytes signature", { type: "bytes", name: "signature" }],
          ["bytes32 hash", { type: "bytes32", name: "hash" }],
          ["bytes32 r", { type: "bytes32", name: "r" }],
          ["bytes32 root", { type: "bytes32", name: "root" }],
          ["bytes32 s", { type: "bytes32", name: "s" }],
          ["string name", { type: "string", name: "name" }],
          ["string symbol", { type: "string", name: "symbol" }],
          ["string tokenURI", { type: "string", name: "tokenURI" }],
          ["uint tokenId", { type: "uint256", name: "tokenId" }],
          ["uint8 v", { type: "uint8", name: "v" }],
          ["uint256 balance", { type: "uint256", name: "balance" }],
          ["uint256 tokenId", { type: "uint256", name: "tokenId" }],
          ["uint256 value", { type: "uint256", name: "value" }],
          [
            "event:address indexed from",
            { type: "address", name: "from", indexed: !0 },
          ],
          [
            "event:address indexed to",
            { type: "address", name: "to", indexed: !0 },
          ],
          [
            "event:uint indexed tokenId",
            { type: "uint256", name: "tokenId", indexed: !0 },
          ],
          [
            "event:uint256 indexed tokenId",
            { type: "uint256", name: "tokenId", indexed: !0 },
          ],
        ]),
        $ =
          /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
        A =
          /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
        O = /^u?int$/;
      function S(e, t) {
        var r, i;
        let s;
        let a = (function (e, t, r) {
          let n = "";
          if (r)
            for (let e of Object.entries(r)) {
              if (!e) continue;
              let t = "";
              for (let r of e[1])
                t += `[${r.type}${r.name ? `:${r.name}` : ""}]`;
              n += `(${e[0]}{${t}})`;
            }
          return t ? `${t}:${e}${n}` : e;
        })(e, t?.type, t?.structs);
        if (B.has(a)) return B.get(a);
        let o = n.wj.test(e),
          c = (0, n.Yv)(o ? A : $, e);
        if (!c) throw new b({ param: e });
        if (
          c.name &&
          ("address" === (r = c.name) ||
            "bool" === r ||
            "function" === r ||
            "string" === r ||
            "tuple" === r ||
            n.BD.test(r) ||
            n.Ge.test(r) ||
            T.test(r))
        )
          throw new m({ param: e, name: c.name });
        let u = c.name ? { name: c.name } : {},
          l = "indexed" === c.modifier ? { indexed: !0 } : {},
          d = t?.structs ?? {},
          f = {};
        if (o) {
          s = "tuple";
          let e = M(c.type),
            t = [],
            r = e.length;
          for (let n = 0; n < r; n++) t.push(S(e[n], { structs: d }));
          f = { components: t };
        } else if (c.type in d) (s = "tuple"), (f = { components: d[c.type] });
        else if (O.test(c.type)) s = `${c.type}256`;
        else if (((s = c.type), t?.type !== "struct" && !R(s)))
          throw new y({ type: s });
        if (c.modifier) {
          if (!t?.modifiers?.has?.(c.modifier))
            throw new g({ param: e, type: t?.type, modifier: c.modifier });
          if (
            h.has(c.modifier) &&
            ((i = s),
            !c.array && "bytes" !== i && "string" !== i && "tuple" !== i)
          )
            throw new v({ param: e, type: t?.type, modifier: c.modifier });
        }
        let p = { type: `${s}${c.array ?? ""}`, ...u, ...l, ...f };
        return B.set(a, p), p;
      }
      function M(e, t = [], r = "", n = 0) {
        let i = e.trim().length;
        for (let s = 0; s < i; s++) {
          let i = e[s],
            a = e.slice(s + 1);
          switch (i) {
            case ",":
              return 0 === n ? M(a, [...t, r.trim()]) : M(a, t, `${r}${i}`, n);
            case "(":
              return M(a, t, `${r}${i}`, n + 1);
            case ")":
              return M(a, t, `${r}${i}`, n - 1);
            default:
              return M(a, t, `${r}${i}`, n);
          }
        }
        if ("" === r) return t;
        if (0 !== n) throw new C({ current: r, depth: n });
        return t.push(r.trim()), t;
      }
      function R(e) {
        return (
          "address" === e ||
          "bool" === e ||
          "function" === e ||
          "string" === e ||
          n.BD.test(e) ||
          n.Ge.test(e)
        );
      }
      let T =
          /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/,
        F = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;
      function k(e) {
        let t = (function (e) {
            let t = {},
              r = e.length;
            for (let i = 0; i < r; i++) {
              let r = e[i];
              if (!o.test(r)) continue;
              let s = (0, n.Yv)(o, r);
              if (!s) throw new x({ signature: r, type: "struct" });
              let a = s.properties.split(";"),
                c = [],
                u = a.length;
              for (let e = 0; e < u; e++) {
                let t = a[e].trim();
                if (!t) continue;
                let r = S(t, { type: "struct" });
                c.push(r);
              }
              if (!c.length) throw new P({ signature: r });
              t[s.name] = c;
            }
            let i = {},
              s = Object.entries(t),
              a = s.length;
            for (let e = 0; e < a; e++) {
              let [r, a] = s[e];
              i[r] = (function e(t, r, i = new Set()) {
                let s = [],
                  a = t.length;
                for (let o = 0; o < a; o++) {
                  let a = t[o];
                  if (n.wj.test(a.type)) s.push(a);
                  else {
                    let t = (0, n.Yv)(F, a.type);
                    if (!t?.type) throw new w({ abiParameter: a });
                    let { array: o, type: c } = t;
                    if (c in r) {
                      if (i.has(c)) throw new I({ type: c });
                      s.push({
                        ...a,
                        type: `tuple${o ?? ""}`,
                        components: e(r[c] ?? [], r, new Set([...i, c])),
                      });
                    } else if (R(c)) s.push(a);
                    else throw new p({ type: c });
                  }
                }
                return s;
              })(a, t);
            }
            return i;
          })(e),
          r = [],
          f = e.length;
        for (let p = 0; p < f; p++) {
          let f = e[p];
          o.test(f) ||
            r.push(
              (function (e, t = {}) {
                if (a.test(e)) {
                  let r = (0, n.Yv)(a, e);
                  if (!r) throw new x({ signature: e, type: "function" });
                  let i = M(r.parameters),
                    s = [],
                    o = i.length;
                  for (let e = 0; e < o; e++)
                    s.push(
                      S(i[e], { modifiers: h, structs: t, type: "function" })
                    );
                  let c = [];
                  if (r.returns) {
                    let e = M(r.returns),
                      n = e.length;
                    for (let r = 0; r < n; r++)
                      c.push(
                        S(e[r], { modifiers: h, structs: t, type: "function" })
                      );
                  }
                  return {
                    name: r.name,
                    type: "function",
                    stateMutability: r.stateMutability ?? "nonpayable",
                    inputs: s,
                    outputs: c,
                  };
                }
                if (s.test(e)) {
                  let r = (0, n.Yv)(s, e);
                  if (!r) throw new x({ signature: e, type: "event" });
                  let i = M(r.parameters),
                    a = [],
                    o = i.length;
                  for (let e = 0; e < o; e++)
                    a.push(
                      S(i[e], { modifiers: d, structs: t, type: "event" })
                    );
                  return { name: r.name, type: "event", inputs: a };
                }
                if (i.test(e)) {
                  let r = (0, n.Yv)(i, e);
                  if (!r) throw new x({ signature: e, type: "error" });
                  let s = M(r.parameters),
                    a = [],
                    o = s.length;
                  for (let e = 0; e < o; e++)
                    a.push(S(s[e], { structs: t, type: "error" }));
                  return { name: r.name, type: "error", inputs: a };
                }
                if (c.test(e)) {
                  let r = (0, n.Yv)(c, e);
                  if (!r) throw new x({ signature: e, type: "constructor" });
                  let i = M(r.parameters),
                    s = [],
                    a = i.length;
                  for (let e = 0; e < a; e++)
                    s.push(S(i[e], { structs: t, type: "constructor" }));
                  return {
                    type: "constructor",
                    stateMutability: r.stateMutability ?? "nonpayable",
                    inputs: s,
                  };
                }
                if (u.test(e)) return { type: "fallback" };
                if (l.test(e))
                  return { type: "receive", stateMutability: "payable" };
                throw new E({ signature: e });
              })(f, t)
            );
        }
        return r;
      }
      var N = r(98722),
        j = r(38472),
        U = r(33726),
        q = r(80477),
        z = r(89780),
        L = r(88085),
        D = r(59719),
        G = r(62937),
        _ = r(74046),
        H = r(40874),
        K = r(98979),
        Q = r(14303),
        V = r(24058),
        Z = r(53864),
        W = r(40304),
        J = r(52368),
        Y = r(73056);
      async function X(e, t) {
        let {
            account: n = e.account,
            batch: i = !!e.batch?.multicall,
            blockNumber: s,
            blockTag: a = "latest",
            accessList: o,
            blobs: c,
            code: u,
            data: l,
            factory: d,
            factoryData: h,
            gas: f,
            gasPrice: p,
            maxFeePerBlobGas: y,
            maxFeePerGas: b,
            maxPriorityFeePerGas: m,
            nonce: g,
            to: v,
            value: w,
            stateOverride: x,
            ...E
          } = t,
          P = n ? (0, N.J)(n) : void 0;
        if (u && (d || h))
          throw new q.C(
            "Cannot provide both `code` & `factory`/`factoryData` as parameters."
          );
        if (u && v)
          throw new q.C("Cannot provide both `code` & `to` as parameters.");
        let I = u && l,
          C = d && h && v && l,
          B = I || C,
          $ = I
            ? (function (e) {
                let { code: t, data: r } = e;
                return (0, G.m)({
                  abi: k(["constructor(bytes, bytes)"]),
                  bytecode: U.LX,
                  args: [t, r],
                });
              })({ code: u, data: l })
            : C
            ? (function (e) {
                let { data: t, factory: r, factoryData: n, to: i } = e;
                return (0, G.m)({
                  abi: k(["constructor(address, bytes, address, bytes)"]),
                  bytecode: U.WN,
                  args: [i, t, r, n],
                });
              })({ data: l, factory: d, factoryData: h, to: v })
            : l;
        try {
          (0, Y.c)(t);
          let r = (s ? (0, K.cK)(s) : void 0) || a,
            n = (0, J.yH)(x),
            u = e.chain?.formatters?.transactionRequest?.format,
            l = (u || Z.Bv)({
              ...(0, V.o)(E, { format: u }),
              from: P?.address,
              accessList: o,
              blobs: c,
              data: $,
              gas: f,
              gasPrice: p,
              maxFeePerBlobGas: y,
              maxFeePerGas: b,
              maxPriorityFeePerGas: m,
              nonce: g,
              to: B ? void 0 : v,
              value: w,
            });
          if (
            i &&
            (function ({ request: e }) {
              let { data: t, to: r, ...n } = e;
              return (
                !(!t || t.startsWith("0x82ad56cb")) &&
                !!r &&
                !(Object.values(n).filter((e) => void 0 !== e).length > 0)
              );
            })({ request: l }) &&
            !n
          )
            try {
              return await ee(e, { ...l, blockNumber: s, blockTag: a });
            } catch (e) {
              if (!(e instanceof z.YE) && !(e instanceof z.rj)) throw e;
            }
          let d = await e.request({
            method: "eth_call",
            params: n ? [l, r, n] : [l, r],
          });
          if ("0x" === d) return { data: void 0 };
          return { data: d };
        } catch (a) {
          let n = (function (e) {
              if (!(e instanceof q.C)) return;
              let t = e.walk();
              return "object" == typeof t?.data ? t.data?.data : t.data;
            })(a),
            { offchainLookup: i, offchainLookupSignature: s } = await r
              .e(4496)
              .then(r.bind(r, 54496));
          if (!1 !== e.ccipRead && n?.slice(0, 10) === s && v)
            return { data: await i(e, { data: n, to: v }) };
          if (B && n?.slice(0, 10) === "0x101bb98d")
            throw new L.Po({ factory: d });
          throw (0, Q.d)(a, { ...t, account: P, chain: e.chain });
        }
      }
      async function ee(e, t) {
        let { batchSize: r = 1024, wait: n = 0 } =
            "object" == typeof e.batch?.multicall ? e.batch.multicall : {},
          {
            blockNumber: i,
            blockTag: s = "latest",
            data: a,
            multicallAddress: o,
            to: c,
          } = t,
          u = o;
        if (!u) {
          if (!e.chain) throw new z.YE();
          u = (0, H.M)({
            blockNumber: i,
            chain: e.chain,
            contract: "multicall3",
          });
        }
        let l = (i ? (0, K.cK)(i) : void 0) || s,
          { schedule: d } = (0, W.u)({
            id: `${e.uid}.${l}`,
            wait: n,
            shouldSplitBatch: (e) =>
              e.reduce((e, { data: t }) => e + (t.length - 2), 0) > 2 * r,
            fn: async (t) => {
              let r = t.map((e) => ({
                  allowFailure: !0,
                  callData: e.data,
                  target: e.to,
                })),
                n = (0, _.p)({
                  abi: j.v2,
                  args: [r],
                  functionName: "aggregate3",
                }),
                i = await e.request({
                  method: "eth_call",
                  params: [{ data: n, to: u }, l],
                });
              return (0, D.e)({
                abi: j.v2,
                args: [r],
                functionName: "aggregate3",
                data: i || "0x",
              });
            },
          }),
          [{ returnData: h, success: f }] = await d({ data: a, to: c });
        if (!f) throw new L.$S({ data: h });
        return "0x" === h ? { data: void 0 } : { data: h };
      }
    },
    83631: (e, t, r) => {
      r.d(t, { X: () => a });
      var n = r(98619),
        i = r(98979),
        s = r(50910);
      async function a(e, t) {
        let {
            address: r,
            abi: a,
            args: o,
            eventName: c,
            fromBlock: u,
            strict: l,
            toBlock: d,
          } = t,
          h = (0, s.g)(e, { method: "eth_newFilter" }),
          f = c ? (0, n.R)({ abi: a, args: o, eventName: c }) : void 0,
          p = await e.request({
            method: "eth_newFilter",
            params: [
              {
                address: r,
                fromBlock: "bigint" == typeof u ? (0, i.cK)(u) : u,
                toBlock: "bigint" == typeof d ? (0, i.cK)(d) : d,
                topics: f,
              },
            ],
          });
        return {
          abi: a,
          args: o,
          eventName: c,
          id: p,
          request: h(p),
          strict: !!l,
          type: "event",
        };
      }
    },
    72458: (e, t, r) => {
      r.d(t, { O: () => i });
      var n = r(50910);
      async function i(e) {
        let t = (0, n.g)(e, { method: "eth_newPendingTransactionFilter" }),
          r = await e.request({ method: "eth_newPendingTransactionFilter" });
        return { id: r, request: t(r), type: "transaction" };
      }
    },
    60710: (e, t, r) => {
      r.d(t, { O: () => u, _: () => c });
      var n = r(62333),
        i = r(72447),
        s = r(50801),
        a = r(84208),
        o = r(8269);
      async function c(e, t) {
        return u(e, t);
      }
      async function u(e, t) {
        let {
            block: r,
            chain: c = e.chain,
            request: u,
            type: l = "eip1559",
          } = t || {},
          d = await (async () =>
            "function" == typeof c?.fees?.baseFeeMultiplier
              ? c.fees.baseFeeMultiplier({ block: r, client: e, request: u })
              : c?.fees?.baseFeeMultiplier ?? 1.2)();
        if (d < 1) throw new n.sM();
        let h = d.toString().split(".")[1]?.length ?? 0,
          f = 10 ** h,
          p = (e) => (e * BigInt(Math.ceil(d * f))) / BigInt(f),
          y = r || (await (0, i.T)(e, a.g, "getBlock")({}));
        if ("function" == typeof c?.fees?.estimateFeesPerGas) {
          let t = await c.fees.estimateFeesPerGas({
            block: r,
            client: e,
            multiply: p,
            request: u,
            type: l,
          });
          if (null !== t) return t;
        }
        if ("eip1559" === l) {
          if ("bigint" != typeof y.baseFeePerGas) throw new n.pw();
          let t =
              "bigint" == typeof u?.maxPriorityFeePerGas
                ? u.maxPriorityFeePerGas
                : await (0, s.N)(e, { block: y, chain: c, request: u }),
            r = p(y.baseFeePerGas);
          return {
            maxFeePerGas: u?.maxFeePerGas ?? r + t,
            maxPriorityFeePerGas: t,
          };
        }
        return {
          gasPrice: u?.gasPrice ?? p(await (0, i.T)(e, o.L, "getGasPrice")({})),
        };
      }
    },
    35679: (e, t, r) => {
      r.d(t, { Q: () => v });
      var n = r(98722),
        i = r(80477),
        s = r(53559),
        a = r(98979),
        o = r(69595),
        c = r(18773),
        u = r(45757);
      class l extends i.C {
        constructor(
          e,
          {
            account: t,
            docsPath: r,
            chain: n,
            data: i,
            gas: s,
            gasPrice: a,
            maxFeePerGas: l,
            maxPriorityFeePerGas: d,
            nonce: h,
            to: f,
            value: p,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: r,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Estimate Gas Arguments:",
              (0, u.aO)({
                from: t?.address,
                to: f,
                value:
                  void 0 !== p &&
                  `${(0, o.c)(p)} ${n?.nativeCurrency?.symbol || "ETH"}`,
                data: i,
                gas: s,
                gasPrice: void 0 !== a && `${(0, c.Q)(a)} gwei`,
                maxFeePerGas: void 0 !== l && `${(0, c.Q)(l)} gwei`,
                maxPriorityFeePerGas: void 0 !== d && `${(0, c.Q)(d)} gwei`,
                nonce: h,
              }),
            ].filter(Boolean),
            name: "EstimateGasExecutionError",
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      var d = r(87939),
        h = r(90563),
        f = r(24058),
        p = r(53864),
        y = r(52368),
        b = r(73056),
        m = r(46636),
        g = r(53765);
      async function v(e, t) {
        let { account: r = e.account } = t,
          o = r ? (0, n.J)(r) : void 0;
        try {
          let {
              accessList: r,
              authorizationList: n,
              blobs: u,
              blobVersionedHashes: l,
              blockNumber: d,
              blockTag: h,
              data: v,
              gas: w,
              gasPrice: x,
              maxFeePerBlobGas: E,
              maxFeePerGas: P,
              maxPriorityFeePerGas: I,
              nonce: C,
              value: B,
              stateOverride: $,
              ...A
            } = await (0, m.f)(e, {
              ...t,
              parameters:
                o?.type === "local" ? void 0 : ["blobVersionedHashes"],
            }),
            O = (d ? (0, a.cK)(d) : void 0) || h,
            S = (0, y.yH)($),
            M = await (async () =>
              A.to
                ? A.to
                : n && n.length > 0
                ? await (0, s.g)({ authorization: n[0] }).catch(() => {
                    throw new i.C(
                      "`to` is required. Could not infer from `authorizationList`"
                    );
                  })
                : void 0)();
          (0, b.c)(t);
          let R = e.chain?.formatters?.transactionRequest?.format,
            T = (R || p.Bv)({
              ...(0, f.o)(A, { format: R }),
              from: o?.address,
              accessList: r,
              authorizationList: n,
              blobs: u,
              blobVersionedHashes: l,
              data: v,
              gas: w,
              gasPrice: x,
              maxFeePerBlobGas: E,
              maxFeePerGas: P,
              maxPriorityFeePerGas: I,
              nonce: C,
              to: M,
              value: B,
            });
          function c(t) {
            let { block: r, request: n, rpcStateOverride: i } = t;
            return e.request({
              method: "eth_estimateGas",
              params: i ? [n, r ?? "latest", i] : r ? [n, r] : [n],
            });
          }
          let F = BigInt(
            await c({ block: O, request: T, rpcStateOverride: S })
          );
          if (n) {
            let t = await (0, g.r)(e, { address: T.from }),
              r = await Promise.all(
                n.map(async (e) => {
                  let { contractAddress: r } = e,
                    n = await c({
                      block: O,
                      request: {
                        authorizationList: void 0,
                        data: v,
                        from: o?.address,
                        to: r,
                        value: (0, a.cK)(t),
                      },
                      rpcStateOverride: S,
                    }).catch(() => 100000n);
                  return 2n * BigInt(n);
                })
              );
            F += r.reduce((e, t) => e + t, 0n);
          }
          return F;
        } catch (r) {
          throw (function (e, { docsPath: t, ...r }) {
            return new l(
              (() => {
                let t = (0, h.l)(e, r);
                return t instanceof d.RM ? e : t;
              })(),
              { docsPath: t, ...r }
            );
          })(r, { ...t, account: o, chain: e.chain });
        }
      }
    },
    50801: (e, t, r) => {
      r.d(t, { N: () => u, b: () => c });
      var n = r(62333),
        i = r(45732),
        s = r(72447),
        a = r(84208),
        o = r(8269);
      async function c(e, t) {
        return u(e, t);
      }
      async function u(e, t) {
        let { block: r, chain: c = e.chain, request: u } = t || {};
        try {
          let t = c?.fees?.maxPriorityFeePerGas ?? c?.fees?.defaultPriorityFee;
          if ("function" == typeof t) {
            let n = r || (await (0, s.T)(e, a.g, "getBlock")({})),
              i = await t({ block: n, client: e, request: u });
            if (null === i) throw Error();
            return i;
          }
          if (void 0 !== t) return t;
          let n = await e.request({ method: "eth_maxPriorityFeePerGas" });
          return (0, i.uU)(n);
        } catch {
          let [t, i] = await Promise.all([
            r ? Promise.resolve(r) : (0, s.T)(e, a.g, "getBlock")({}),
            (0, s.T)(e, o.L, "getGasPrice")({}),
          ]);
          if ("bigint" != typeof t.baseFeePerGas) throw new n.pw();
          let c = i - t.baseFeePerGas;
          if (c < 0n) return 0n;
          return c;
        }
      }
    },
    53765: (e, t, r) => {
      r.d(t, { r: () => i });
      var n = r(98979);
      async function i(
        e,
        { address: t, blockNumber: r, blockTag: i = "latest" }
      ) {
        let s = r ? (0, n.cK)(r) : void 0;
        return BigInt(
          await e.request({ method: "eth_getBalance", params: [t, s || i] })
        );
      }
    },
    84208: (e, t, r) => {
      r.d(t, { g: () => a });
      var n = r(62496),
        i = r(98979),
        s = r(55878);
      async function a(
        e,
        {
          blockHash: t,
          blockNumber: r,
          blockTag: o,
          includeTransactions: c,
        } = {}
      ) {
        let u = c ?? !1,
          l = void 0 !== r ? (0, i.cK)(r) : void 0,
          d = null;
        if (
          !(d = t
            ? await e.request(
                { method: "eth_getBlockByHash", params: [t, u] },
                { dedupe: !0 }
              )
            : await e.request(
                {
                  method: "eth_getBlockByNumber",
                  params: [l || (o ?? "latest"), u],
                },
                { dedupe: !!l }
              ))
        )
          throw new n.l({ blockHash: t, blockNumber: r });
        return (e.chain?.formatters?.block?.format || s.$)(d);
      }
    },
    60398: (e, t, r) => {
      r.d(t, { G: () => o });
      let n = new Map(),
        i = new Map();
      async function s(
        e,
        { cacheKey: t, cacheTime: r = Number.POSITIVE_INFINITY }
      ) {
        let s = (function (e) {
            let t = (e, t) => ({
                clear: () => t.delete(e),
                get: () => t.get(e),
                set: (r) => t.set(e, r),
              }),
              r = t(e, n),
              s = t(e, i);
            return {
              clear: () => {
                r.clear(), s.clear();
              },
              promise: r,
              response: s,
            };
          })(t),
          a = s.response.get();
        if (a && r > 0 && new Date().getTime() - a.created.getTime() < r)
          return a.data;
        let o = s.promise.get();
        o || ((o = e()), s.promise.set(o));
        try {
          let e = await o;
          return s.response.set({ created: new Date(), data: e }), e;
        } finally {
          s.promise.clear();
        }
      }
      let a = (e) => `blockNumber.${e}`;
      async function o(e, { cacheTime: t = e.cacheTime } = {}) {
        return BigInt(
          await s(() => e.request({ method: "eth_blockNumber" }), {
            cacheKey: a(e.uid),
            cacheTime: t,
          })
        );
      }
    },
    3267: (e, t, r) => {
      r.d(t, { L: () => s });
      var n = r(45732),
        i = r(98979);
      async function s(
        e,
        { blockHash: t, blockNumber: r, blockTag: a = "latest" } = {}
      ) {
        let o;
        let c = void 0 !== r ? (0, i.cK)(r) : void 0;
        return (
          (o = t
            ? await e.request(
                { method: "eth_getBlockTransactionCountByHash", params: [t] },
                { dedupe: !0 }
              )
            : await e.request(
                {
                  method: "eth_getBlockTransactionCountByNumber",
                  params: [c || a],
                },
                { dedupe: !!c }
              )),
          (0, n.ME)(o)
        );
      }
    },
    30733: (e, t, r) => {
      r.d(t, { T: () => i });
      var n = r(45732);
      async function i(e) {
        let t = await e.request({ method: "eth_chainId" }, { dedupe: !0 });
        return (0, n.ME)(t);
      }
    },
    25478: (e, t, r) => {
      r.d(t, { Q: () => i });
      var n = r(98979);
      async function i(
        e,
        { address: t, blockNumber: r, blockTag: i = "latest" }
      ) {
        let s = void 0 !== r ? (0, n.cK)(r) : void 0,
          a = await e.request(
            { method: "eth_getCode", params: [t, s || i] },
            { dedupe: !!s }
          );
        if ("0x" !== a) return a;
      }
    },
    66876: (e, t, r) => {
      r.d(t, { u: () => a });
      var n = r(4617),
        i = r(72447),
        s = r(45468);
      async function a(e, t) {
        let {
            abi: r,
            address: a,
            args: o,
            blockHash: c,
            eventName: u,
            fromBlock: l,
            toBlock: d,
            strict: h,
          } = t,
          f = u ? (0, n.iY)({ abi: r, name: u }) : void 0,
          p = f ? void 0 : r.filter((e) => "event" === e.type);
        return (0, i.T)(
          e,
          s.a,
          "getLogs"
        )({
          address: a,
          args: o,
          blockHash: c,
          event: f,
          events: p,
          fromBlock: l,
          toBlock: d,
          strict: h,
        });
      }
    },
    87309: (e, t, r) => {
      r.d(t, { T: () => i });
      var n = r(98979);
      async function i(
        e,
        {
          blockCount: t,
          blockNumber: r,
          blockTag: i = "latest",
          rewardPercentiles: s,
        }
      ) {
        var a;
        let o = r ? (0, n.cK)(r) : void 0;
        return {
          baseFeePerGas: (a = await e.request(
            { method: "eth_feeHistory", params: [(0, n.cK)(t), o || i, s] },
            { dedupe: !!o }
          )).baseFeePerGas.map((e) => BigInt(e)),
          gasUsedRatio: a.gasUsedRatio,
          oldestBlock: BigInt(a.oldestBlock),
          reward: a.reward?.map((e) => e.map((e) => BigInt(e))),
        };
      }
    },
    26514: (e, t, r) => {
      r.d(t, { I: () => s });
      var n = r(29946),
        i = r(58981);
      async function s(e, { filter: t }) {
        let r = "strict" in t && t.strict,
          s = await t.request({
            method: "eth_getFilterChanges",
            params: [t.id],
          });
        if ("string" == typeof s[0]) return s;
        let a = s.map((e) => (0, i.e)(e));
        return "abi" in t && t.abi
          ? (0, n.p)({ abi: t.abi, logs: a, strict: r })
          : a;
      }
    },
    8269: (e, t, r) => {
      r.d(t, { L: () => n });
      async function n(e) {
        return BigInt(await e.request({ method: "eth_gasPrice" }));
      }
    },
    45468: (e, t, r) => {
      r.d(t, { a: () => o });
      var n = r(98619),
        i = r(29946),
        s = r(98979),
        a = r(58981);
      async function o(
        e,
        {
          address: t,
          blockHash: r,
          fromBlock: c,
          toBlock: u,
          event: l,
          events: d,
          args: h,
          strict: f,
        } = {}
      ) {
        let p = d ?? (l ? [l] : void 0),
          y = [];
        p &&
          ((y = [
            p.flatMap((e) =>
              (0, n.R)({ abi: [e], eventName: e.name, args: d ? void 0 : h })
            ),
          ]),
          l && (y = y[0]));
        let b = (
          r
            ? await e.request({
                method: "eth_getLogs",
                params: [{ address: t, topics: y, blockHash: r }],
              })
            : await e.request({
                method: "eth_getLogs",
                params: [
                  {
                    address: t,
                    topics: y,
                    fromBlock: "bigint" == typeof c ? (0, s.cK)(c) : c,
                    toBlock: "bigint" == typeof u ? (0, s.cK)(u) : u,
                  },
                ],
              })
        ).map((e) => (0, a.e)(e));
        return p ? (0, i.p)({ abi: p, args: h, logs: b, strict: f ?? !1 }) : b;
      }
    },
    44082: (e, t, r) => {
      r.d(t, { l: () => s });
      var n = r(98979),
        i = r(45732);
      async function s(
        e,
        { address: t, blockNumber: r, blockTag: s, storageKeys: a }
      ) {
        var o;
        let c = void 0 !== r ? (0, n.cK)(r) : void 0;
        return {
          ...(o = await e.request({
            method: "eth_getProof",
            params: [t, a, c || (s ?? "latest")],
          })),
          balance: o.balance ? BigInt(o.balance) : void 0,
          nonce: o.nonce ? (0, i.ME)(o.nonce) : void 0,
          storageProof: o.storageProof
            ? o.storageProof.map((e) => ({ ...e, value: BigInt(e.value) }))
            : void 0,
        };
      }
    },
    85933: (e, t, r) => {
      r.d(t, { P: () => i });
      var n = r(98979);
      async function i(
        e,
        { address: t, blockNumber: r, blockTag: i = "latest", slot: s }
      ) {
        let a = void 0 !== r ? (0, n.cK)(r) : void 0;
        return await e.request({
          method: "eth_getStorageAt",
          params: [t, s, a || i],
        });
      }
    },
    71885: (e, t, r) => {
      r.d(t, { x: () => a });
      var n = r(45757),
        i = r(98979),
        s = r(6035);
      async function a(
        e,
        { blockHash: t, blockNumber: r, blockTag: a, hash: o, index: c }
      ) {
        let u = a || "latest",
          l = void 0 !== r ? (0, i.cK)(r) : void 0,
          d = null;
        if (
          (o
            ? (d = await e.request(
                { method: "eth_getTransactionByHash", params: [o] },
                { dedupe: !0 }
              ))
            : t
            ? (d = await e.request(
                {
                  method: "eth_getTransactionByBlockHashAndIndex",
                  params: [t, (0, i.cK)(c)],
                },
                { dedupe: !0 }
              ))
            : (l || u) &&
              (d = await e.request(
                {
                  method: "eth_getTransactionByBlockNumberAndIndex",
                  params: [l || u, (0, i.cK)(c)],
                },
                { dedupe: !!l }
              )),
          !d)
        )
          throw new n.Kz({
            blockHash: t,
            blockNumber: r,
            blockTag: u,
            hash: o,
            index: c,
          });
        return (e.chain?.formatters?.transaction?.format || s.uP)(d);
      }
    },
    59353: (e, t, r) => {
      r.d(t, { d: () => a });
      var n = r(72447),
        i = r(60398),
        s = r(71885);
      async function a(e, { hash: t, transactionReceipt: r }) {
        let [a, o] = await Promise.all([
            (0, n.T)(e, i.G, "getBlockNumber")({}),
            t ? (0, n.T)(e, s.x, "getTransaction")({ hash: t }) : void 0,
          ]),
          c = r?.blockNumber || o?.blockNumber;
        return c ? a - c + 1n : 0n;
      }
    },
    77184: (e, t, r) => {
      r.d(t, { y: () => s });
      var n = r(45732),
        i = r(98979);
      async function s(
        e,
        { address: t, blockTag: r = "latest", blockNumber: s }
      ) {
        let a = await e.request(
          {
            method: "eth_getTransactionCount",
            params: [t, s ? (0, i.cK)(s) : r],
          },
          { dedupe: !!s }
        );
        return (0, n.ME)(a);
      }
    },
    3369: (e, t, r) => {
      r.d(t, { h: () => c });
      var n = r(45757),
        i = r(45732),
        s = r(58981),
        a = r(6035);
      let o = { "0x0": "reverted", "0x1": "success" };
      async function c(e, { hash: t }) {
        let r = await e.request(
          { method: "eth_getTransactionReceipt", params: [t] },
          { dedupe: !0 }
        );
        if (!r) throw new n.Kc({ hash: t });
        return (
          e.chain?.formatters?.transactionReceipt?.format ||
          function (e) {
            let t = {
              ...e,
              blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
              contractAddress: e.contractAddress ? e.contractAddress : null,
              cumulativeGasUsed: e.cumulativeGasUsed
                ? BigInt(e.cumulativeGasUsed)
                : null,
              effectiveGasPrice: e.effectiveGasPrice
                ? BigInt(e.effectiveGasPrice)
                : null,
              gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
              logs: e.logs ? e.logs.map((e) => (0, s.e)(e)) : null,
              to: e.to ? e.to : null,
              transactionIndex: e.transactionIndex
                ? (0, i.ME)(e.transactionIndex)
                : null,
              status: e.status ? o[e.status] : null,
              type: e.type ? a.b4[e.type] || e.type : null,
            };
            return (
              e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)),
              e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)),
              t
            );
          }
        )(r);
      }
    },
    49838: (e, t, r) => {
      r.d(t, { C: () => f });
      var n = r(38472),
        i = r(36991),
        s = r(80477),
        a = r(88085),
        o = r(59719),
        c = r(74046),
        u = r(40874),
        l = r(80305),
        d = r(72447),
        h = r(88215);
      async function f(e, t) {
        let {
            allowFailure: r = !0,
            batchSize: f,
            blockNumber: p,
            blockTag: y,
            multicallAddress: b,
            stateOverride: m,
          } = t,
          g = t.contracts,
          v =
            f ??
            (("object" == typeof e.batch?.multicall &&
              e.batch.multicall.batchSize) ||
              1024),
          w = b;
        if (!w) {
          if (!e.chain)
            throw Error(
              "client chain not configured. multicallAddress is required."
            );
          w = (0, u.M)({
            blockNumber: p,
            chain: e.chain,
            contract: "multicall3",
          });
        }
        let x = [[]],
          E = 0,
          P = 0;
        for (let e = 0; e < g.length; e++) {
          let { abi: t, address: n, args: i, functionName: s } = g[e];
          try {
            let e = (0, c.p)({ abi: t, args: i, functionName: s });
            (P += (e.length - 2) / 2),
              v > 0 &&
                P > v &&
                x[E].length > 0 &&
                (E++, (P = (e.length - 2) / 2), (x[E] = [])),
              (x[E] = [...x[E], { allowFailure: !0, callData: e, target: n }]);
          } catch (a) {
            let e = (0, l.j)(a, {
              abi: t,
              address: n,
              args: i,
              docsPath: "/docs/contract/multicall",
              functionName: s,
            });
            if (!r) throw e;
            x[E] = [...x[E], { allowFailure: !0, callData: "0x", target: n }];
          }
        }
        let I = await Promise.allSettled(
            x.map((t) =>
              (0, d.T)(
                e,
                h.J,
                "readContract"
              )({
                abi: n.v2,
                address: w,
                args: [t],
                blockNumber: p,
                blockTag: y,
                functionName: "aggregate3",
                stateOverride: m,
              })
            )
          ),
          C = [];
        for (let e = 0; e < I.length; e++) {
          let t = I[e];
          if ("rejected" === t.status) {
            if (!r) throw t.reason;
            for (let r = 0; r < x[e].length; r++)
              C.push({ status: "failure", error: t.reason, result: void 0 });
            continue;
          }
          let n = t.value;
          for (let t = 0; t < n.length; t++) {
            let { returnData: s, success: c } = n[t],
              { callData: u } = x[e][t],
              { abi: d, address: h, functionName: f, args: p } = g[C.length];
            try {
              if ("0x" === u) throw new i.O();
              if (!c) throw new a.$S({ data: s });
              let e = (0, o.e)({ abi: d, args: p, data: s, functionName: f });
              C.push(r ? { result: e, status: "success" } : e);
            } catch (t) {
              let e = (0, l.j)(t, {
                abi: d,
                address: h,
                args: p,
                docsPath: "/docs/contract/multicall",
                functionName: f,
              });
              if (!r) throw e;
              C.push({ error: e, result: void 0, status: "failure" });
            }
          }
        }
        if (C.length !== g.length) throw new s.C("multicall results mismatch");
        return C;
      }
    },
    88215: (e, t, r) => {
      r.d(t, { J: () => c });
      var n = r(59719),
        i = r(74046),
        s = r(80305),
        a = r(72447),
        o = r(91488);
      async function c(e, t) {
        let { abi: r, address: c, args: u, functionName: l, ...d } = t,
          h = (0, i.p)({ abi: r, args: u, functionName: l });
        try {
          let { data: t } = await (0, a.T)(
            e,
            o.T,
            "call"
          )({ ...d, data: h, to: c });
          return (0, n.e)({
            abi: r,
            args: u,
            functionName: l,
            data: t || "0x",
          });
        } catch (e) {
          throw (0, s.j)(e, {
            abi: r,
            address: c,
            args: u,
            docsPath: "/docs/contract/readContract",
            functionName: l,
          });
        }
      }
    },
    23729: (e, t, r) => {
      r.d(t, { v: () => u });
      var n = r(98722),
        i = r(59719),
        s = r(74046),
        a = r(80305),
        o = r(72447),
        c = r(91488);
      async function u(e, t) {
        let {
            abi: r,
            address: u,
            args: l,
            dataSuffix: d,
            functionName: h,
            ...f
          } = t,
          p = f.account ? (0, n.J)(f.account) : e.account,
          y = (0, s.p)({ abi: r, args: l, functionName: h });
        try {
          let { data: n } = await (0, o.T)(
              e,
              c.T,
              "call"
            )({
              batch: !1,
              data: `${y}${d ? d.replace("0x", "") : ""}`,
              to: u,
              ...f,
              account: p,
            }),
            s = (0, i.e)({ abi: r, args: l, functionName: h, data: n || "0x" }),
            a = r.filter((e) => "name" in e && e.name === t.functionName);
          return {
            result: s,
            request: {
              abi: a,
              address: u,
              args: l,
              dataSuffix: d,
              functionName: h,
              ...f,
              account: p,
            },
          };
        } catch (e) {
          throw (0, a.j)(e, {
            abi: r,
            address: u,
            args: l,
            docsPath: "/docs/contract/simulateContract",
            functionName: h,
            sender: p?.address,
          });
        }
      }
    },
    91175: (e, t, r) => {
      r.d(t, { Z: () => n });
      async function n(e, { filter: t }) {
        return t.request({ method: "eth_uninstallFilter", params: [t.id] });
      }
    },
    30869: (e, t, r) => {
      r.d(t, { K: () => E });
      var n = r(38472),
        i = r(33726),
        s = r(88085),
        a = r(62937),
        o = r(40814),
        c = r(81770),
        u = r(11601),
        l = r(98979),
        d = r(72447),
        h = r(74046),
        f = r(45732);
      let p =
        "0x6492649264926492649264926492649264926492649264926492649264926492";
      var y = r(22162),
        b = r(29157),
        m = r(46304),
        g = r(16704),
        v = r(76397),
        w = r(75908),
        x = r(91488);
      async function E(e, t) {
        let {
            address: r,
            factory: E,
            factoryData: P,
            hash: I,
            signature: C,
            universalSignatureVerifierAddress: B = e.chain?.contracts
              ?.universalSignatureVerifier?.address,
            ...$
          } = t,
          A = (0, u.q)(C)
            ? C
            : "object" == typeof C && "r" in C && "s" in C
            ? (function ({ r: e, s: t, to: r = "hex", v: n, yParity: i }) {
                let s = (() => {
                    if (0 === i || 1 === i) return i;
                    if (n && (27n === n || 28n === n || n >= 35n))
                      return n % 2n === 0n ? 1 : 0;
                    throw Error("Invalid `v` or `yParity` value");
                  })(),
                  a = `0x${new w.secp256k1.Signature(
                    (0, f.uU)(e),
                    (0, f.uU)(t)
                  ).toCompactHex()}${0 === s ? "1b" : "1c"}`;
                return "hex" === r ? a : (0, v.aT)(a);
              })(C)
            : (0, l.My)(C),
          O = await (async () =>
            E || P
              ? (0, y.iN)(A, -32) === p
                ? A
                : (function (e) {
                    let {
                        address: t,
                        data: r,
                        signature: n,
                        to: i = "hex",
                      } = e,
                      s = (0, g.aP)([
                        (0, m.h)(
                          [
                            { type: "address" },
                            { type: "bytes" },
                            { type: "bytes" },
                          ],
                          [t, r, n]
                        ),
                        p,
                      ]);
                    return "hex" === i ? s : (0, v.aT)(s);
                  })({ address: E, data: P, signature: A })
              : A)();
        try {
          let t = B
              ? {
                  to: B,
                  data: (0, h.p)({
                    abi: n._,
                    functionName: "isValidSig",
                    args: [r, I, O],
                  }),
                  ...$,
                }
              : {
                  data: (0, a.m)({ abi: n._, args: [r, I, O], bytecode: i.nP }),
                  ...$,
                },
            { data: s } = await (0, d.T)(e, x.T, "call")(t);
          return (0, f.Nx)(s ?? "0x0");
        } catch (e) {
          try {
            if (
              (0, c.h)((0, o.b)(r), await (0, b.x)({ hash: I, signature: C }))
            )
              return !0;
          } catch {}
          if (e instanceof s.zX) return !1;
          throw e;
        }
      }
    },
    40619: (e, t, r) => {
      r.d(t, { l: () => s });
      var n = r(34540),
        i = r(30869);
      async function s(
        e,
        {
          address: t,
          message: r,
          factory: s,
          factoryData: a,
          signature: o,
          ...c
        }
      ) {
        let u = (0, n.A)(r);
        return (0, i.K)(e, {
          address: t,
          factory: s,
          factoryData: a,
          hash: u,
          signature: o,
          ...c,
        });
      }
    },
    12444: (e, t, r) => {
      r.d(t, { w: () => s });
      var n = r(41132),
        i = r(30869);
      async function s(e, t) {
        let {
            address: r,
            factory: s,
            factoryData: a,
            signature: o,
            message: c,
            primaryType: u,
            types: l,
            domain: d,
            ...h
          } = t,
          f = (0, n.Zh)({ message: c, primaryType: u, types: l, domain: d });
        return (0, i.K)(e, {
          address: r,
          factory: s,
          factoryData: a,
          hash: f,
          signature: o,
          ...h,
        });
      }
    },
    48071: (e, t, r) => {
      r.d(t, { n: () => p });
      var n = r(62496),
        i = r(45757),
        s = r(72447),
        a = r(88429),
        o = r(30400),
        c = r(9869),
        u = r(66692),
        l = r(84208),
        d = r(71885),
        h = r(3369),
        f = r(65724);
      async function p(
        e,
        {
          confirmations: t = 1,
          hash: r,
          onReplaced: p,
          pollingInterval: y = e.pollingInterval,
          retryCount: b = 6,
          retryDelay: m = ({ count: e }) => 200 * ~~(1 << e),
          timeout: g = 18e4,
        }
      ) {
        let v, w, x;
        let E = (0, u.A)(["waitForTransactionReceipt", e.uid, r]),
          P = !1,
          { promise: I, resolve: C, reject: B } = (0, o.Y)(),
          $ = g ? setTimeout(() => B(new i.WA({ hash: r })), g) : void 0,
          A = (0, a.lB)(E, { onReplaced: p, resolve: C, reject: B }, (a) => {
            let o = (0, s.T)(
              e,
              f.q,
              "watchBlockNumber"
            )({
              emitMissed: !0,
              emitOnBegin: !0,
              poll: !0,
              pollingInterval: y,
              async onBlockNumber(u) {
                let f = (e) => {
                    clearTimeout($), o(), e(), A();
                  },
                  p = u;
                if (!P)
                  try {
                    if (x) {
                      if (
                        t > 1 &&
                        (!x.blockNumber || p - x.blockNumber + 1n < t)
                      )
                        return;
                      f(() => a.resolve(x));
                      return;
                    }
                    if (
                      (v ||
                        ((P = !0),
                        await (0, c.b)(
                          async () => {
                            (v = await (0, s.T)(
                              e,
                              d.x,
                              "getTransaction"
                            )({ hash: r })).blockNumber && (p = v.blockNumber);
                          },
                          { delay: m, retryCount: b }
                        ),
                        (P = !1)),
                      (x = await (0, s.T)(
                        e,
                        h.h,
                        "getTransactionReceipt"
                      )({ hash: r })),
                      t > 1 && (!x.blockNumber || p - x.blockNumber + 1n < t))
                    )
                      return;
                    f(() => a.resolve(x));
                  } catch (r) {
                    if (r instanceof i.Kz || r instanceof i.Kc) {
                      if (!v) {
                        P = !1;
                        return;
                      }
                      try {
                        (w = v), (P = !0);
                        let r = await (0, c.b)(
                          () =>
                            (0, s.T)(
                              e,
                              l.g,
                              "getBlock"
                            )({ blockNumber: p, includeTransactions: !0 }),
                          {
                            delay: m,
                            retryCount: b,
                            shouldRetry: ({ error: e }) => e instanceof n.l,
                          }
                        );
                        P = !1;
                        let i = r.transactions.find(
                          ({ from: e, nonce: t }) =>
                            e === w.from && t === w.nonce
                        );
                        if (
                          !i ||
                          ((x = await (0, s.T)(
                            e,
                            h.h,
                            "getTransactionReceipt"
                          )({ hash: i.hash })),
                          t > 1 &&
                            (!x.blockNumber || p - x.blockNumber + 1n < t))
                        )
                          return;
                        let o = "replaced";
                        i.to === w.to && i.value === w.value
                          ? (o = "repriced")
                          : i.from === i.to &&
                            0n === i.value &&
                            (o = "cancelled"),
                          f(() => {
                            a.onReplaced?.({
                              reason: o,
                              replacedTransaction: w,
                              transaction: i,
                              transactionReceipt: x,
                            }),
                              a.resolve(x);
                          });
                      } catch (e) {
                        f(() => a.reject(e));
                      }
                    } else f(() => a.reject(r));
                  }
              },
            });
          });
        return I;
      }
    },
    65724: (e, t, r) => {
      r.d(t, { q: () => u });
      var n = r(45732),
        i = r(72447),
        s = r(88429),
        a = r(92342),
        o = r(66692),
        c = r(60398);
      function u(
        e,
        {
          emitOnBegin: t = !1,
          emitMissed: r = !1,
          onBlockNumber: u,
          onError: l,
          poll: d,
          pollingInterval: h = e.pollingInterval,
        }
      ) {
        let f;
        return (
          void 0 !== d
            ? d
            : "webSocket" !== e.transport.type &&
              ("fallback" !== e.transport.type ||
                "webSocket" !== e.transport.transports[0].config.type)
        )
          ? (() => {
              let n = (0, o.A)(["watchBlockNumber", e.uid, t, r, h]);
              return (0, s.lB)(n, { onBlockNumber: u, onError: l }, (n) =>
                (0, a.w)(
                  async () => {
                    try {
                      let t = await (0, i.T)(
                        e,
                        c.G,
                        "getBlockNumber"
                      )({ cacheTime: 0 });
                      if (f) {
                        if (t === f) return;
                        if (t - f > 1 && r)
                          for (let e = f + 1n; e < t; e++)
                            n.onBlockNumber(e, f), (f = e);
                      }
                      (!f || t > f) && (n.onBlockNumber(t, f), (f = t));
                    } catch (e) {
                      n.onError?.(e);
                    }
                  },
                  { emitOnBegin: t, interval: h }
                )
              );
            })()
          : (() => {
              let i = (0, o.A)(["watchBlockNumber", e.uid, t, r]);
              return (0, s.lB)(i, { onBlockNumber: u, onError: l }, (t) => {
                let r = !0,
                  i = () => (r = !1);
                return (
                  (async () => {
                    try {
                      let s = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => "webSocket" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        { unsubscribe: a } = await s.subscribe({
                          params: ["newHeads"],
                          onData(e) {
                            if (!r) return;
                            let i = (0, n.uU)(e.result?.number);
                            t.onBlockNumber(i, f), (f = i);
                          },
                          onError(e) {
                            t.onError?.(e);
                          },
                        });
                      (i = a), r || i();
                    } catch (e) {
                      l?.(e);
                    }
                  })(),
                  () => i()
                );
              });
            })();
      }
    },
    26758: (e, t, r) => {
      r.d(t, { O: () => c });
      var n = r(72447),
        i = r(88429),
        s = r(92342),
        a = r(66692),
        o = r(84208);
      function c(
        e,
        {
          blockTag: t = "latest",
          emitMissed: r = !1,
          emitOnBegin: c = !1,
          onBlock: u,
          onError: l,
          includeTransactions: d,
          poll: h,
          pollingInterval: f = e.pollingInterval,
        }
      ) {
        let p, y, b, m;
        let g =
            void 0 !== h
              ? h
              : "webSocket" !== e.transport.type &&
                ("fallback" !== e.transport.type ||
                  "webSocket" !== e.transport.transports[0].config.type),
          v = d ?? !1;
        return g
          ? (() => {
              let d = (0, a.A)(["watchBlocks", e.uid, t, r, c, v, f]);
              return (0, i.lB)(d, { onBlock: u, onError: l }, (i) =>
                (0, s.w)(
                  async () => {
                    try {
                      let s = await (0, n.T)(
                        e,
                        o.g,
                        "getBlock"
                      )({ blockTag: t, includeTransactions: v });
                      if (s.number && p?.number) {
                        if (s.number === p.number) return;
                        if (s.number - p.number > 1 && r)
                          for (let t = p?.number + 1n; t < s.number; t++) {
                            let r = await (0, n.T)(
                              e,
                              o.g,
                              "getBlock"
                            )({ blockNumber: t, includeTransactions: v });
                            i.onBlock(r, p), (p = r);
                          }
                      }
                      (!p?.number ||
                        ("pending" === t && !s?.number) ||
                        (s.number && s.number > p.number)) &&
                        (i.onBlock(s, p), (p = s));
                    } catch (e) {
                      i.onError?.(e);
                    }
                  },
                  { emitOnBegin: c, interval: f }
                )
              );
            })()
          : ((y = !0),
            (b = !0),
            (m = () => (y = !1)),
            (async () => {
              try {
                c &&
                  (0, n.T)(
                    e,
                    o.g,
                    "getBlock"
                  )({ blockTag: t, includeTransactions: v }).then((e) => {
                    y && b && (u(e, void 0), (b = !1));
                  });
                let r = (() => {
                    if ("fallback" === e.transport.type) {
                      let t = e.transport.transports.find(
                        (e) => "webSocket" === e.config.type
                      );
                      return t ? t.value : e.transport;
                    }
                    return e.transport;
                  })(),
                  { unsubscribe: i } = await r.subscribe({
                    params: ["newHeads"],
                    async onData(t) {
                      if (!y) return;
                      let r = await (0, n.T)(
                        e,
                        o.g,
                        "getBlock"
                      )({
                        blockNumber: t.blockNumber,
                        includeTransactions: v,
                      }).catch(() => {});
                      y && (u(r, p), (b = !1), (p = r));
                    },
                    onError(e) {
                      l?.(e);
                    },
                  });
                (m = i), y || m();
              } catch (e) {
                l?.(e);
              }
            })(),
            () => m());
      }
    },
    45898: (e, t, r) => {
      r.d(t, { q: () => m });
      var n = r(36991),
        i = r(76790),
        s = r(17848),
        a = r(98619),
        o = r(58981),
        c = r(72447),
        u = r(88429),
        l = r(92342),
        d = r(66692),
        h = r(83631),
        f = r(60398),
        p = r(66876),
        y = r(26514),
        b = r(91175);
      function m(e, t) {
        let {
          abi: r,
          address: m,
          args: g,
          batch: v = !0,
          eventName: w,
          fromBlock: x,
          onError: E,
          onLogs: P,
          poll: I,
          pollingInterval: C = e.pollingInterval,
          strict: B,
        } = t;
        return (
          void 0 !== I
            ? I
            : "bigint" == typeof x ||
              ("webSocket" !== e.transport.type &&
                ("fallback" !== e.transport.type ||
                  "webSocket" !== e.transport.transports[0].config.type))
        )
          ? (() => {
              let t = B ?? !1,
                n = (0, d.A)([
                  "watchContractEvent",
                  m,
                  g,
                  v,
                  e.uid,
                  w,
                  C,
                  t,
                  x,
                ]);
              return (0, u.lB)(n, { onLogs: P, onError: E }, (n) => {
                let s, a;
                void 0 !== x && (s = x - 1n);
                let o = !1,
                  u = (0, l.w)(
                    async () => {
                      if (!o) {
                        try {
                          a = await (0, c.T)(
                            e,
                            h.X,
                            "createContractEventFilter"
                          )({
                            abi: r,
                            address: m,
                            args: g,
                            eventName: w,
                            strict: t,
                            fromBlock: x,
                          });
                        } catch {}
                        o = !0;
                        return;
                      }
                      try {
                        let i;
                        if (a)
                          i = await (0, c.T)(
                            e,
                            y.I,
                            "getFilterChanges"
                          )({ filter: a });
                        else {
                          let n = await (0, c.T)(e, f.G, "getBlockNumber")({});
                          (i =
                            s && s < n
                              ? await (0, c.T)(
                                  e,
                                  p.u,
                                  "getContractEvents"
                                )({
                                  abi: r,
                                  address: m,
                                  args: g,
                                  eventName: w,
                                  fromBlock: s + 1n,
                                  toBlock: n,
                                  strict: t,
                                })
                              : []),
                            (s = n);
                        }
                        if (0 === i.length) return;
                        if (v) n.onLogs(i);
                        else for (let e of i) n.onLogs([e]);
                      } catch (e) {
                        a && e instanceof i.Di && (o = !1), n.onError?.(e);
                      }
                    },
                    { emitOnBegin: !0, interval: C }
                  );
                return async () => {
                  a &&
                    (await (0, c.T)(e, b.Z, "uninstallFilter")({ filter: a })),
                    u();
                };
              });
            })()
          : (() => {
              let t = (0, d.A)([
                  "watchContractEvent",
                  m,
                  g,
                  v,
                  e.uid,
                  w,
                  C,
                  B ?? !1,
                ]),
                i = !0,
                c = () => (i = !1);
              return (0, u.lB)(
                t,
                { onLogs: P, onError: E },
                (t) => (
                  (async () => {
                    try {
                      let u = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => "webSocket" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        l = w
                          ? (0, a.R)({ abi: r, eventName: w, args: g })
                          : [],
                        { unsubscribe: d } = await u.subscribe({
                          params: ["logs", { address: m, topics: l }],
                          onData(e) {
                            if (!i) return;
                            let a = e.result;
                            try {
                              let { eventName: e, args: n } = (0, s.j)({
                                  abi: r,
                                  data: a.data,
                                  topics: a.topics,
                                  strict: B,
                                }),
                                i = (0, o.e)(a, { args: n, eventName: e });
                              t.onLogs([i]);
                            } catch (s) {
                              let e, r;
                              if (s instanceof n.fo || s instanceof n.l3) {
                                if (B) return;
                                (e = s.abiItem.name),
                                  (r = s.abiItem.inputs?.some(
                                    (e) => !("name" in e && e.name)
                                  ));
                              }
                              let i = (0, o.e)(a, {
                                args: r ? [] : {},
                                eventName: e,
                              });
                              t.onLogs([i]);
                            }
                          },
                          onError(e) {
                            t.onError?.(e);
                          },
                        });
                      (c = d), i || c();
                    } catch (e) {
                      E?.(e);
                    }
                  })(),
                  () => c()
                )
              );
            })();
      }
    },
    75066: (e, t, r) => {
      r.d(t, { u: () => l });
      var n = r(72447),
        i = r(88429),
        s = r(92342),
        a = r(66692),
        o = r(72458),
        c = r(26514),
        u = r(91175);
      function l(
        e,
        {
          batch: t = !0,
          onError: r,
          onTransactions: l,
          poll: d,
          pollingInterval: h = e.pollingInterval,
        }
      ) {
        let f, p;
        return (void 0 !== d ? d : "webSocket" !== e.transport.type)
          ? (() => {
              let d = (0, a.A)(["watchPendingTransactions", e.uid, t, h]);
              return (0, i.lB)(d, { onTransactions: l, onError: r }, (r) => {
                let i;
                let a = (0, s.w)(
                  async () => {
                    try {
                      if (!i)
                        try {
                          i = await (0, n.T)(
                            e,
                            o.O,
                            "createPendingTransactionFilter"
                          )({});
                          return;
                        } catch (e) {
                          throw (a(), e);
                        }
                      let s = await (0, n.T)(
                        e,
                        c.I,
                        "getFilterChanges"
                      )({ filter: i });
                      if (0 === s.length) return;
                      if (t) r.onTransactions(s);
                      else for (let e of s) r.onTransactions([e]);
                    } catch (e) {
                      r.onError?.(e);
                    }
                  },
                  { emitOnBegin: !0, interval: h }
                );
                return async () => {
                  i &&
                    (await (0, n.T)(e, u.Z, "uninstallFilter")({ filter: i })),
                    a();
                };
              });
            })()
          : ((f = !0),
            (p = () => (f = !1)),
            (async () => {
              try {
                let { unsubscribe: t } = await e.transport.subscribe({
                  params: ["newPendingTransactions"],
                  onData(e) {
                    if (!f) return;
                    let t = e.result;
                    l([t]);
                  },
                  onError(e) {
                    r?.(e);
                  },
                });
                (p = t), f || p();
              } catch (e) {
                r?.(e);
              }
            })(),
            () => p());
      }
    },
    46636: (e, t, r) => {
      r.d(t, { M: () => I, f: () => C });
      var n = r(98722),
        i = r(60710),
        s = r(35679),
        a = r(84208),
        o = r(77184),
        c = r(62333),
        u = r(76397),
        l = r(98979);
      function d(e) {
        let { kzg: t } = e,
          r = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
          n =
            "string" == typeof e.blobs[0]
              ? e.blobs.map((e) => (0, u.aT)(e))
              : e.blobs,
          i = [];
        for (let e of n) i.push(Uint8Array.from(t.blobToKzgCommitment(e)));
        return "bytes" === r ? i : i.map((e) => (0, l.My)(e));
      }
      function h(e) {
        let { kzg: t } = e,
          r = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
          n =
            "string" == typeof e.blobs[0]
              ? e.blobs.map((e) => (0, u.aT)(e))
              : e.blobs,
          i =
            "string" == typeof e.commitments[0]
              ? e.commitments.map((e) => (0, u.aT)(e))
              : e.commitments,
          s = [];
        for (let e = 0; e < n.length; e++) {
          let r = n[e],
            a = i[e];
          s.push(Uint8Array.from(t.computeBlobKzgProof(r, a)));
        }
        return "bytes" === r ? s : s.map((e) => (0, l.My)(e));
      }
      var f = r(48775),
        p = r(11601),
        y = r(80477);
      class b extends y.C {
        constructor({ maxSize: e, size: t }) {
          super("Blob size is too large.", {
            metaMessages: [`Max: ${e} bytes`, `Given: ${t} bytes`],
            name: "BlobSizeTooLargeError",
          });
        }
      }
      class m extends y.C {
        constructor() {
          super("Blob data must not be empty.", { name: "EmptyBlobError" });
        }
      }
      var g = r(95389),
        v = r(91149),
        w = r(72447),
        x = r(73056),
        E = r(45757),
        P = r(30733);
      let I = [
        "blobVersionedHashes",
        "chainId",
        "fees",
        "gas",
        "nonce",
        "type",
      ];
      async function C(e, t) {
        let r, y;
        let {
            account: C = e.account,
            blobs: B,
            chain: $,
            gas: A,
            kzg: O,
            nonce: S,
            nonceManager: M,
            parameters: R = I,
            type: T,
          } = t,
          F = C ? (0, n.J)(C) : C,
          k = { ...t, ...(F ? { from: F?.address } : {}) };
        async function N() {
          return (
            r ||
            (r = await (0, w.T)(e, a.g, "getBlock")({ blockTag: "latest" }))
          );
        }
        async function j() {
          return (
            y ||
            ($
              ? $.id
              : void 0 !== t.chainId
              ? t.chainId
              : (y = await (0, w.T)(e, P.T, "getChainId")({})))
          );
        }
        if (
          (R.includes("blobVersionedHashes") || R.includes("sidecars")) &&
          B &&
          O
        ) {
          let e = d({ blobs: B, kzg: O });
          if (R.includes("blobVersionedHashes")) {
            let t = (function (e) {
              let { commitments: t, version: r } = e,
                n = e.to ?? ("string" == typeof t[0] ? "hex" : "bytes"),
                i = [];
              for (let e of t)
                i.push(
                  (function (e) {
                    let { commitment: t, version: r = 1 } = e,
                      n = e.to ?? ("string" == typeof t ? "hex" : "bytes"),
                      i = (function (e, t) {
                        let r = (0, f.sc)(
                          (0, p.q)(e, { strict: !1 }) ? (0, u.ZJ)(e) : e
                        );
                        return "bytes" === (t || "hex") ? r : (0, l.nj)(r);
                      })(t, "bytes");
                    return i.set([r], 0), "bytes" === n ? i : (0, l.My)(i);
                  })({ commitment: e, to: n, version: r })
                );
              return i;
            })({ commitments: e, to: "hex" });
            k.blobVersionedHashes = t;
          }
          if (R.includes("sidecars")) {
            let t = h({ blobs: B, commitments: e, kzg: O }),
              r = (function (e) {
                let { data: t, kzg: r, to: n } = e,
                  i =
                    e.blobs ??
                    (function (e) {
                      let t =
                          e.to ?? ("string" == typeof e.data ? "hex" : "bytes"),
                        r =
                          "string" == typeof e.data
                            ? (0, u.aT)(e.data)
                            : e.data,
                        n = (0, v.E)(r);
                      if (!n) throw new m();
                      if (n > 761855) throw new b({ maxSize: 761855, size: n });
                      let i = [],
                        s = !0,
                        a = 0;
                      for (; s; ) {
                        let e = (0, g.l)(new Uint8Array(131072)),
                          t = 0;
                        for (; t < 4096; ) {
                          let n = r.slice(a, a + 31);
                          if ((e.pushByte(0), e.pushBytes(n), n.length < 31)) {
                            e.pushByte(128), (s = !1);
                            break;
                          }
                          t++, (a += 31);
                        }
                        i.push(e);
                      }
                      return "bytes" === t
                        ? i.map((e) => e.bytes)
                        : i.map((e) => (0, l.My)(e.bytes));
                    })({ data: t, to: n }),
                  s = e.commitments ?? d({ blobs: i, kzg: r, to: n }),
                  a =
                    e.proofs ?? h({ blobs: i, commitments: s, kzg: r, to: n }),
                  o = [];
                for (let e = 0; e < i.length; e++)
                  o.push({ blob: i[e], commitment: s[e], proof: a[e] });
                return o;
              })({ blobs: B, commitments: e, proofs: t, to: "hex" });
            k.sidecars = r;
          }
        }
        if (
          (R.includes("chainId") && (k.chainId = await j()),
          R.includes("nonce") && void 0 === S && F)
        ) {
          if (M) {
            let t = await j();
            k.nonce = await M.consume({
              address: F.address,
              chainId: t,
              client: e,
            });
          } else
            k.nonce = await (0, w.T)(
              e,
              o.y,
              "getTransactionCount"
            )({ address: F.address, blockTag: "pending" });
        }
        if ((R.includes("fees") || R.includes("type")) && void 0 === T)
          try {
            k.type = (function (e) {
              if (e.type) return e.type;
              if (void 0 !== e.authorizationList) return "eip7702";
              if (
                void 0 !== e.blobs ||
                void 0 !== e.blobVersionedHashes ||
                void 0 !== e.maxFeePerBlobGas ||
                void 0 !== e.sidecars
              )
                return "eip4844";
              if (
                void 0 !== e.maxFeePerGas ||
                void 0 !== e.maxPriorityFeePerGas
              )
                return "eip1559";
              if (void 0 !== e.gasPrice)
                return void 0 !== e.accessList ? "eip2930" : "legacy";
              throw new E.Vg({ transaction: e });
            })(k);
          } catch {
            let e = await N();
            k.type = "bigint" == typeof e?.baseFeePerGas ? "eip1559" : "legacy";
          }
        if (R.includes("fees")) {
          if ("legacy" !== k.type && "eip2930" !== k.type) {
            if (
              void 0 === k.maxFeePerGas ||
              void 0 === k.maxPriorityFeePerGas
            ) {
              let r = await N(),
                { maxFeePerGas: n, maxPriorityFeePerGas: s } = await (0, i.O)(
                  e,
                  { block: r, chain: $, request: k }
                );
              if (
                void 0 === t.maxPriorityFeePerGas &&
                t.maxFeePerGas &&
                t.maxFeePerGas < s
              )
                throw new c.RR({ maxPriorityFeePerGas: s });
              (k.maxPriorityFeePerGas = s), (k.maxFeePerGas = n);
            }
          } else {
            if (void 0 !== t.maxFeePerGas || void 0 !== t.maxPriorityFeePerGas)
              throw new c.pw();
            let r = await N(),
              { gasPrice: n } = await (0, i.O)(e, {
                block: r,
                chain: $,
                request: k,
                type: "legacy",
              });
            k.gasPrice = n;
          }
        }
        return (
          R.includes("gas") &&
            void 0 === A &&
            (k.gas = await (0, w.T)(
              e,
              s.Q,
              "estimateGas"
            )({
              ...k,
              account: F ? { address: F.address, type: "json-rpc" } : F,
            })),
          (0, x.c)(k),
          delete k.parameters,
          k
        );
      }
    },
    29665: (e, t, r) => {
      r.d(t, { L: () => n });
      async function n(e, { serializedTransaction: t }) {
        return e.request(
          { method: "eth_sendRawTransaction", params: [t] },
          { retryCount: 0 }
        );
      }
    },
    87027: (e, t, r) => {
      r.d(t, { l: () => a });
      var n = r(98722),
        i = r(66734),
        s = r(98979);
      async function a(e, { account: t = e.account, message: r }) {
        if (!t) throw new i.T({ docsPath: "/docs/actions/wallet/signMessage" });
        let a = (0, n.J)(t);
        if (a.signMessage) return a.signMessage({ message: r });
        let o =
          "string" == typeof r
            ? (0, s.i3)(r)
            : r.raw instanceof Uint8Array
            ? (0, s.nj)(r.raw)
            : r.raw;
        return e.request(
          { method: "personal_sign", params: [o, a.address] },
          { retryCount: 0 }
        );
      }
    },
    44711: (e, t, r) => {
      r.d(t, { U: () => s });
      var n = r(98722),
        i = r(43071);
      function s(e) {
        let {
            batch: t,
            cacheTime: r = e.pollingInterval ?? 4e3,
            ccipRead: s,
            key: a = "base",
            name: o = "Base Client",
            pollingInterval: c = 4e3,
            type: u = "base",
          } = e,
          l = e.chain,
          d = e.account ? (0, n.J)(e.account) : void 0,
          {
            config: h,
            request: f,
            value: p,
          } = e.transport({ chain: l, pollingInterval: c }),
          y = {
            account: d,
            batch: t,
            cacheTime: r,
            ccipRead: s,
            chain: l,
            key: a,
            name: o,
            pollingInterval: c,
            request: f,
            transport: { ...h, ...p },
            type: u,
            uid: (0, i.L)(),
          };
        return Object.assign(y, {
          extend: (function e(t) {
            return (r) => {
              let n = r(t);
              for (let e in y) delete n[e];
              let i = { ...t, ...n };
              return Object.assign(i, { extend: e(i) });
            };
          })(y),
        });
      }
    },
    67128: (e, t, r) => {
      r.d(t, { o: () => h });
      var n = r(80477),
        i = r(40928),
        s = r(76790),
        a = r(98979),
        o = r(36933);
      let c = new (r(46140).A)(8192);
      var u = r(9869),
        l = r(66692),
        d = r(43071);
      function h(
        {
          key: e,
          name: t,
          request: r,
          retryCount: h = 3,
          retryDelay: f = 150,
          timeout: p,
          type: y,
        },
        b
      ) {
        return {
          config: {
            key: e,
            name: t,
            request: r,
            retryCount: h,
            retryDelay: f,
            timeout: p,
            type: y,
          },
          request: (function (e, t = {}) {
            return async (r, d = {}) => {
              let {
                  dedupe: h = !1,
                  retryDelay: f = 150,
                  retryCount: p = 3,
                  uid: y,
                } = { ...t, ...d },
                b = h ? (0, o.S)((0, a.i3)(`${y}.${(0, l.A)(r)}`)) : void 0;
              return (function (e, { enabled: t = !0, id: r }) {
                if (!t || !r) return e();
                if (c.get(r)) return c.get(r);
                let n = e().finally(() => c.delete(r));
                return c.set(r, n), n;
              })(
                () =>
                  (0, u.b)(
                    async () => {
                      try {
                        return await e(r);
                      } catch (e) {
                        switch (e.code) {
                          case s.XU.code:
                            throw new s.XU(e);
                          case s.CL.code:
                            throw new s.CL(e);
                          case s.Gi.code:
                            throw new s.Gi(e, { method: r.method });
                          case s.D5.code:
                            throw new s.D5(e);
                          case s.bq.code:
                            throw new s.bq(e);
                          case s.Di.code:
                            throw new s.Di(e);
                          case s.hA.code:
                            throw new s.hA(e);
                          case s.qZ.code:
                            throw new s.qZ(e);
                          case s.YW.code:
                            throw new s.YW(e);
                          case s.ab.code:
                            throw new s.ab(e, { method: r.method });
                          case s.s0.code:
                            throw new s.s0(e);
                          case s.xQ.code:
                            throw new s.xQ(e);
                          case s.vx.code:
                            throw new s.vx(e);
                          case s.sV.code:
                            throw new s.sV(e);
                          case s.Sf.code:
                            throw new s.Sf(e);
                          case s.RV.code:
                            throw new s.RV(e);
                          case s.xq.code:
                            throw new s.xq(e);
                          case s.ch.code:
                            throw new s.ch(e);
                          case 5e3:
                            throw new s.vx(e);
                          default:
                            if (e instanceof n.C) throw e;
                            throw new s.MI(e);
                        }
                      }
                    },
                    {
                      delay: ({ count: e, error: t }) => {
                        if (t && t instanceof i.Ci) {
                          let e = t?.headers?.get("Retry-After");
                          if (e?.match(/\d/)) return 1e3 * Number.parseInt(e);
                        }
                        return ~~(1 << e) * f;
                      },
                      retryCount: p,
                      shouldRetry: ({ error: e }) =>
                        "code" in e && "number" == typeof e.code
                          ? -1 === e.code ||
                            e.code === s.s0.code ||
                            e.code === s.bq.code
                          : !(e instanceof i.Ci) ||
                            !e.status ||
                            403 === e.status ||
                            408 === e.status ||
                            413 === e.status ||
                            429 === e.status ||
                            500 === e.status ||
                            502 === e.status ||
                            503 === e.status ||
                            504 === e.status,
                    }
                  ),
                { enabled: h, id: b }
              );
            };
          })(r, { retryCount: h, retryDelay: f, uid: (0, d.L)() }),
          value: b,
        };
      }
    },
    38472: (e, t, r) => {
      r.d(t, {
        Ag: () => s,
        Rm: () => c,
        SJ: () => o,
        _: () => u,
        oX: () => a,
        v2: () => n,
        xw: () => l,
      });
      let n = [
          {
            inputs: [
              {
                components: [
                  { name: "target", type: "address" },
                  { name: "allowFailure", type: "bool" },
                  { name: "callData", type: "bytes" },
                ],
                name: "calls",
                type: "tuple[]",
              },
            ],
            name: "aggregate3",
            outputs: [
              {
                components: [
                  { name: "success", type: "bool" },
                  { name: "returnData", type: "bytes" },
                ],
                name: "returnData",
                type: "tuple[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        i = [
          { inputs: [], name: "ResolverNotFound", type: "error" },
          { inputs: [], name: "ResolverWildcardNotSupported", type: "error" },
          { inputs: [], name: "ResolverNotContract", type: "error" },
          {
            inputs: [{ name: "returnData", type: "bytes" }],
            name: "ResolverError",
            type: "error",
          },
          {
            inputs: [
              {
                components: [
                  { name: "status", type: "uint16" },
                  { name: "message", type: "string" },
                ],
                name: "errors",
                type: "tuple[]",
              },
            ],
            name: "HttpError",
            type: "error",
          },
        ],
        s = [
          ...i,
          {
            name: "resolve",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes" },
              { name: "data", type: "bytes" },
            ],
            outputs: [
              { name: "", type: "bytes" },
              { name: "address", type: "address" },
            ],
          },
          {
            name: "resolve",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes" },
              { name: "data", type: "bytes" },
              { name: "gateways", type: "string[]" },
            ],
            outputs: [
              { name: "", type: "bytes" },
              { name: "address", type: "address" },
            ],
          },
        ],
        a = [
          ...i,
          {
            name: "reverse",
            type: "function",
            stateMutability: "view",
            inputs: [{ type: "bytes", name: "reverseName" }],
            outputs: [
              { type: "string", name: "resolvedName" },
              { type: "address", name: "resolvedAddress" },
              { type: "address", name: "reverseResolver" },
              { type: "address", name: "resolver" },
            ],
          },
          {
            name: "reverse",
            type: "function",
            stateMutability: "view",
            inputs: [
              { type: "bytes", name: "reverseName" },
              { type: "string[]", name: "gateways" },
            ],
            outputs: [
              { type: "string", name: "resolvedName" },
              { type: "address", name: "resolvedAddress" },
              { type: "address", name: "reverseResolver" },
              { type: "address", name: "resolver" },
            ],
          },
        ],
        o = [
          {
            name: "text",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "key", type: "string" },
            ],
            outputs: [{ name: "", type: "string" }],
          },
        ],
        c = [
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [{ name: "name", type: "bytes32" }],
            outputs: [{ name: "", type: "address" }],
          },
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "coinType", type: "uint256" },
            ],
            outputs: [{ name: "", type: "bytes" }],
          },
        ],
        u = [
          {
            inputs: [
              { name: "_signer", type: "address" },
              { name: "_hash", type: "bytes32" },
              { name: "_signature", type: "bytes" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              { name: "_signer", type: "address" },
              { name: "_hash", type: "bytes32" },
              { name: "_signature", type: "bytes" },
            ],
            outputs: [{ type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
            name: "isValidSig",
          },
        ],
        l = [
          {
            type: "event",
            name: "Approval",
            inputs: [
              { indexed: !0, name: "owner", type: "address" },
              { indexed: !0, name: "spender", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
          },
          {
            type: "event",
            name: "Transfer",
            inputs: [
              { indexed: !0, name: "from", type: "address" },
              { indexed: !0, name: "to", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
          },
          {
            type: "function",
            name: "allowance",
            stateMutability: "view",
            inputs: [
              { name: "owner", type: "address" },
              { name: "spender", type: "address" },
            ],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "approve",
            stateMutability: "nonpayable",
            inputs: [
              { name: "spender", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
          {
            type: "function",
            name: "balanceOf",
            stateMutability: "view",
            inputs: [{ name: "account", type: "address" }],
            outputs: [{ type: "uint256" }],
          },
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
            outputs: [{ type: "string" }],
          },
          {
            type: "function",
            name: "symbol",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "string" }],
          },
          {
            type: "function",
            name: "totalSupply",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "transfer",
            stateMutability: "nonpayable",
            inputs: [
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
          {
            type: "function",
            name: "transferFrom",
            stateMutability: "nonpayable",
            inputs: [
              { name: "sender", type: "address" },
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
        ];
    },
    33726: (e, t, r) => {
      r.d(t, { LX: () => n, WN: () => i, nP: () => s });
      let n =
          "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
        i =
          "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe",
        s =
          "0x608060405234801561001057600080fd5b5060405161069438038061069483398101604081905261002f9161051e565b600061003c848484610048565b9050806000526001601ff35b60007f64926492649264926492649264926492649264926492649264926492649264926100748361040c565b036101e7576000606080848060200190518101906100929190610577565b60405192955090935091506000906001600160a01b038516906100b69085906105dd565b6000604051808303816000865af19150503d80600081146100f3576040519150601f19603f3d011682016040523d82523d6000602084013e6100f8565b606091505b50509050876001600160a01b03163b60000361016057806101605760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90610190908b9087906004016105f9565b602060405180830381865afa1580156101ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d19190610633565b6001600160e01b03191614945050505050610405565b6001600160a01b0384163b1561027a57604051630b135d3f60e11b808252906001600160a01b03861690631626ba7e9061022790879087906004016105f9565b602060405180830381865afa158015610244573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102689190610633565b6001600160e01b031916149050610405565b81516041146102df5760405162461bcd60e51b815260206004820152603a602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e6774680000000000006064820152608401610157565b6102e7610425565b5060208201516040808401518451859392600091859190811061030c5761030c61065d565b016020015160f81c9050601b811480159061032b57508060ff16601c14155b1561038c5760405162461bcd60e51b815260206004820152603b602482015260008051602061067483398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c756500000000006064820152608401610157565b60408051600081526020810180835289905260ff83169181019190915260608101849052608081018390526001600160a01b0389169060019060a0016020604051602081039080840390855afa1580156103ea573d6000803e3d6000fd5b505050602060405103516001600160a01b0316149450505050505b9392505050565b600060208251101561041d57600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b038116811461045857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561048c578181015183820152602001610474565b50506000910152565b600082601f8301126104a657600080fd5b81516001600160401b038111156104bf576104bf61045b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156104ed576104ed61045b565b60405281815283820160200185101561050557600080fd5b610516826020830160208701610471565b949350505050565b60008060006060848603121561053357600080fd5b835161053e81610443565b6020850151604086015191945092506001600160401b0381111561056157600080fd5b61056d86828701610495565b9150509250925092565b60008060006060848603121561058c57600080fd5b835161059781610443565b60208501519093506001600160401b038111156105b357600080fd5b6105bf86828701610495565b604086015190935090506001600160401b0381111561056157600080fd5b600082516105ef818460208701610471565b9190910192915050565b828152604060208201526000825180604084015261061e816060850160208701610471565b601f01601f1916919091016060019392505050565b60006020828403121561064557600080fd5b81516001600160e01b03198116811461040557600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";
    },
    4382: (e, t, r) => {
      r.d(t, { J9: () => s, Mc: () => i, fD: () => n });
      let n = {
          1: "An `assert` condition failed.",
          17: "Arithmetic operation resulted in underflow or overflow.",
          18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
          33: "Attempted to convert to an invalid type.",
          34: "Attempted to access a storage byte array that is incorrectly encoded.",
          49: "Performed `.pop()` on an empty array",
          50: "Array index is out of bounds.",
          65: "Allocated too much memory or created an array which is too large.",
          81: "Attempted to call a zero-initialized variable of internal function type.",
        },
        i = {
          inputs: [{ name: "message", type: "string" }],
          name: "Error",
          type: "error",
        },
        s = {
          inputs: [{ name: "reason", type: "uint256" }],
          name: "Panic",
          type: "error",
        };
    },
    57317: (e, t, r) => {
      r.d(t, { eL: () => n, pj: () => s, sz: () => i });
      let n = { gwei: 9, wei: 18 },
        i = { ether: -9, wei: 9 },
        s = { ether: -18, gwei: -9 };
    },
    36991: (e, t, r) => {
      r.d(t, {
        BI: () => w,
        Iy: () => c,
        Iz: () => m,
        MR: () => g,
        M_: () => b,
        Nc: () => l,
        O: () => u,
        Wq: () => f,
        YE: () => h,
        YF: () => o,
        YW: () => a,
        _z: () => p,
        d_: () => B,
        dm: () => C,
        fo: () => x,
        gH: () => d,
        j: () => I,
        kE: () => y,
        l3: () => E,
        nK: () => P,
        nM: () => v,
      });
      var n = r(57880),
        i = r(91149),
        s = r(80477);
      class a extends s.C {
        constructor({ docsPath: e }) {
          super(
            "A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",
            { docsPath: e, name: "AbiConstructorNotFoundError" }
          );
        }
      }
      class o extends s.C {
        constructor({ docsPath: e }) {
          super(
            "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
            { docsPath: e, name: "AbiConstructorParamsNotFoundError" }
          );
        }
      }
      class c extends s.C {
        constructor({ data: e, params: t, size: r }) {
          super(`Data size of ${r} bytes is too small for given parameters.`, {
            metaMessages: [
              `Params: (${(0, n.A)(t, { includeName: !0 })})`,
              `Data:   ${e} (${r} bytes)`,
            ],
            name: "AbiDecodingDataSizeTooSmallError",
          }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e),
            (this.params = t),
            (this.size = r);
        }
      }
      class u extends s.C {
        constructor() {
          super('Cannot decode zero data ("0x") with ABI parameters.', {
            name: "AbiDecodingZeroDataError",
          });
        }
      }
      class l extends s.C {
        constructor({ expectedLength: e, givenLength: t, type: r }) {
          super(
            `ABI encoding array length mismatch for type ${r}.
Expected length: ${e}
Given length: ${t}`,
            { name: "AbiEncodingArrayLengthMismatchError" }
          );
        }
      }
      class d extends s.C {
        constructor({ expectedSize: e, value: t }) {
          super(
            `Size of bytes "${t}" (bytes${(0, i.E)(
              t
            )}) does not match expected size (bytes${e}).`,
            { name: "AbiEncodingBytesSizeMismatchError" }
          );
        }
      }
      class h extends s.C {
        constructor({ expectedLength: e, givenLength: t }) {
          super(
            `ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`,
            { name: "AbiEncodingLengthMismatchError" }
          );
        }
      }
      class f extends s.C {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: "AbiErrorSignatureNotFoundError" }
          ),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.signature = e);
        }
      }
      class p extends s.C {
        constructor({ docsPath: e }) {
          super("Cannot extract event signature from empty topics.", {
            docsPath: e,
            name: "AbiEventSignatureEmptyTopicsError",
          });
        }
      }
      class y extends s.C {
        constructor(e, { docsPath: t }) {
          super(
            `Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,
            { docsPath: t, name: "AbiEventSignatureNotFoundError" }
          );
        }
      }
      class b extends s.C {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Event ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,
            { docsPath: t, name: "AbiEventNotFoundError" }
          );
        }
      }
      class m extends s.C {
        constructor(e, { docsPath: t } = {}) {
          super(
            `Function ${e ? `"${e}" ` : ""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: "AbiFunctionNotFoundError" }
          );
        }
      }
      class g extends s.C {
        constructor(e, { docsPath: t }) {
          super(
            `Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,
            { docsPath: t, name: "AbiFunctionOutputsNotFoundError" }
          );
        }
      }
      class v extends s.C {
        constructor(e, t) {
          super("Found ambiguous types in overloaded ABI items.", {
            metaMessages: [
              `\`${e.type}\` in \`${(0, n.B)(e.abiItem)}\`, and`,
              `\`${t.type}\` in \`${(0, n.B)(t.abiItem)}\``,
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
            name: "AbiItemAmbiguityError",
          });
        }
      }
      class w extends s.C {
        constructor({ expectedSize: e, givenSize: t }) {
          super(`Expected bytes${e}, got bytes${t}.`, {
            name: "BytesSizeMismatchError",
          });
        }
      }
      class x extends s.C {
        constructor({ abiItem: e, data: t, params: r, size: i }) {
          super(
            `Data size of ${i} bytes is too small for non-indexed event parameters.`,
            {
              metaMessages: [
                `Params: (${(0, n.A)(r, { includeName: !0 })})`,
                `Data:   ${t} (${i} bytes)`,
              ],
              name: "DecodeLogDataMismatch",
            }
          ),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e),
            (this.data = t),
            (this.params = r),
            (this.size = i);
        }
      }
      class E extends s.C {
        constructor({ abiItem: e, param: t }) {
          super(
            `Expected a topic for indexed event parameter${
              t.name ? ` "${t.name}"` : ""
            } on event "${(0, n.B)(e, { includeName: !0 })}".`,
            { name: "DecodeLogTopicsMismatch" }
          ),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e);
        }
      }
      class P extends s.C {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: "InvalidAbiEncodingType" }
          );
        }
      }
      class I extends s.C {
        constructor(e, { docsPath: t }) {
          super(
            `Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,
            { docsPath: t, name: "InvalidAbiDecodingType" }
          );
        }
      }
      class C extends s.C {
        constructor(e) {
          super(`Value "${e}" is not a valid array.`, {
            name: "InvalidArrayError",
          });
        }
      }
      class B extends s.C {
        constructor(e) {
          super(
            `"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`,
            { name: "InvalidDefinitionTypeError" }
          );
        }
      }
    },
    66734: (e, t, r) => {
      r.d(t, { T: () => i, Z: () => s });
      var n = r(80477);
      class i extends n.C {
        constructor({ docsPath: e } = {}) {
          super(
            "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the Client.",
            { docsPath: e, docsSlug: "account", name: "AccountNotFoundError" }
          );
        }
      }
      class s extends n.C {
        constructor({ docsPath: e, metaMessages: t, type: r }) {
          super(`Account type "${r}" is not supported.`, {
            docsPath: e,
            metaMessages: t,
            name: "AccountTypeNotSupportedError",
          });
        }
      }
    },
    61117: (e, t, r) => {
      r.d(t, { M: () => i });
      var n = r(80477);
      class i extends n.C {
        constructor({ address: e }) {
          super(`Address "${e}" is invalid.`, {
            metaMessages: [
              "- Address must be a hex value of 20 bytes (40 hex characters).",
              "- Address must match its checksum counterpart.",
            ],
            name: "InvalidAddressError",
          });
        }
      }
    },
    80477: (e, t, r) => {
      r.d(t, { C: () => s });
      let n = "2.22.2",
        i = {
          getDocsUrl: ({ docsBaseUrl: e, docsPath: t = "", docsSlug: r }) =>
            t ? `${e ?? "https://viem.sh"}${t}${r ? `#${r}` : ""}` : void 0,
          version: `viem@${n}`,
        };
      class s extends Error {
        constructor(e, t = {}) {
          let r =
              t.cause instanceof s
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            a = (t.cause instanceof s && t.cause.docsPath) || t.docsPath,
            o = i.getDocsUrl?.({ ...t, docsPath: a });
          super(
            [
              e || "An error occurred.",
              "",
              ...(t.metaMessages ? [...t.metaMessages, ""] : []),
              ...(o ? [`Docs: ${o}`] : []),
              ...(r ? [`Details: ${r}`] : []),
              ...(i.version ? [`Version: ${i.version}`] : []),
            ].join("\n"),
            t.cause ? { cause: t.cause } : void 0
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            (this.details = r),
            (this.docsPath = a),
            (this.metaMessages = t.metaMessages),
            (this.name = t.name ?? this.name),
            (this.shortMessage = e),
            (this.version = n);
        }
        walk(e) {
          return (function e(t, r) {
            return r?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t && void 0 !== t.cause
              ? e(t.cause, r)
              : r
              ? null
              : t;
          })(this, e);
        }
      }
    },
    62496: (e, t, r) => {
      r.d(t, { l: () => i });
      var n = r(80477);
      class i extends n.C {
        constructor({ blockHash: e, blockNumber: t }) {
          let r = "Block";
          e && (r = `Block at hash "${e}"`),
            t && (r = `Block at number "${t}"`),
            super(`${r} could not be found.`, { name: "BlockNotFoundError" });
        }
      }
    },
    89780: (e, t, r) => {
      r.d(t, { EH: () => s, YE: () => o, jF: () => a, rj: () => i });
      var n = r(80477);
      class i extends n.C {
        constructor({ blockNumber: e, chain: t, contract: r }) {
          super(`Chain "${t.name}" does not support contract "${r.name}".`, {
            metaMessages: [
              "This could be due to any of the following:",
              ...(e && r.blockCreated && r.blockCreated > e
                ? [
                    `- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`,
                  ]
                : [
                    `- The chain does not have the contract "${r.name}" configured.`,
                  ]),
            ],
            name: "ChainDoesNotSupportContract",
          });
        }
      }
      class s extends n.C {
        constructor({ chain: e, currentChainId: t }) {
          super(
            `The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,
            {
              metaMessages: [
                `Current Chain ID:  ${t}`,
                `Expected Chain ID: ${e.id} – ${e.name}`,
              ],
              name: "ChainMismatchError",
            }
          );
        }
      }
      class a extends n.C {
        constructor() {
          super(
            "No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient.",
            { name: "ChainNotFoundError" }
          );
        }
      }
      class o extends n.C {
        constructor() {
          super("No chain was provided to the Client.", {
            name: "ClientChainNotConfiguredError",
          });
        }
      }
    },
    88085: (e, t, r) => {
      r.d(t, {
        zX: () => m,
        bG: () => g,
        M: () => v,
        rR: () => w,
        Po: () => x,
        $S: () => E,
      });
      var n = r(98722),
        i = r(4382),
        s = r(17169),
        a = r(57880),
        o = r(66692);
      function c({
        abiItem: e,
        args: t,
        includeFunctionName: r = !0,
        includeName: n = !1,
      }) {
        if ("name" in e && "inputs" in e && e.inputs)
          return `${r ? e.name : ""}(${e.inputs
            .map(
              (e, r) =>
                `${n && e.name ? `${e.name}: ` : ""}${
                  "object" == typeof t[r] ? (0, o.A)(t[r]) : t[r]
                }`
            )
            .join(", ")})`;
      }
      var u = r(4617),
        l = r(69595),
        d = r(18773),
        h = r(36991),
        f = r(80477),
        p = r(56044),
        y = r(45757),
        b = r(9740);
      class m extends f.C {
        constructor(
          e,
          {
            account: t,
            docsPath: r,
            chain: i,
            data: s,
            gas: a,
            gasPrice: o,
            maxFeePerGas: c,
            maxPriorityFeePerGas: u,
            nonce: h,
            to: f,
            value: b,
            stateOverride: m,
          }
        ) {
          let g = t ? (0, n.J)(t) : void 0,
            v = (0, y.aO)({
              from: g?.address,
              to: f,
              value:
                void 0 !== b &&
                `${(0, l.c)(b)} ${i?.nativeCurrency?.symbol || "ETH"}`,
              data: s,
              gas: a,
              gasPrice: void 0 !== o && `${(0, d.Q)(o)} gwei`,
              maxFeePerGas: void 0 !== c && `${(0, d.Q)(c)} gwei`,
              maxPriorityFeePerGas: void 0 !== u && `${(0, d.Q)(u)} gwei`,
              nonce: h,
            });
          m &&
            (v += `
${(0, p.uj)(m)}`),
            super(e.shortMessage, {
              cause: e,
              docsPath: r,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                "Raw Call Arguments:",
                v,
              ].filter(Boolean),
              name: "CallExecutionError",
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      class g extends f.C {
        constructor(
          e,
          {
            abi: t,
            args: r,
            contractAddress: n,
            docsPath: i,
            functionName: s,
            sender: o,
          }
        ) {
          let l = (0, u.iY)({ abi: t, args: r, name: s }),
            d = l
              ? c({
                  abiItem: l,
                  args: r,
                  includeFunctionName: !1,
                  includeName: !1,
                })
              : void 0,
            h = l ? (0, a.B)(l, { includeName: !0 }) : void 0,
            f = (0, y.aO)({
              address: n && (0, b.R)(n),
              function: h,
              args:
                d &&
                "()" !== d &&
                `${[...Array(s?.length ?? 0).keys()]
                  .map(() => " ")
                  .join("")}${d}`,
              sender: o,
            });
          super(
            e.shortMessage ||
              `An unknown error occurred while executing the contract function "${s}".`,
            {
              cause: e,
              docsPath: i,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                f && "Contract Call:",
                f,
              ].filter(Boolean),
              name: "ContractFunctionExecutionError",
            }
          ),
            Object.defineProperty(this, "abi", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "args", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "contractAddress", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "formattedArgs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "functionName", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "sender", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abi = t),
            (this.args = r),
            (this.cause = e),
            (this.contractAddress = n),
            (this.functionName = s),
            (this.sender = o);
        }
      }
      class v extends f.C {
        constructor({ abi: e, data: t, functionName: r, message: n }) {
          let o, u, l, d, f;
          if (t && "0x" !== t)
            try {
              let {
                abiItem: r,
                errorName: n,
                args: o,
              } = (f = (0, s.W)({ abi: e, data: t }));
              if ("Error" === n) l = o[0];
              else if ("Panic" === n) {
                let [e] = o;
                l = i.fD[e];
              } else {
                let e = r ? (0, a.B)(r, { includeName: !0 }) : void 0,
                  t =
                    r && o
                      ? c({
                          abiItem: r,
                          args: o,
                          includeFunctionName: !1,
                          includeName: !1,
                        })
                      : void 0;
                u = [
                  e ? `Error: ${e}` : "",
                  t && "()" !== t
                    ? `       ${[...Array(n?.length ?? 0).keys()]
                        .map(() => " ")
                        .join("")}${t}`
                    : "",
                ];
              }
            } catch (e) {
              o = e;
            }
          else n && (l = n);
          o instanceof h.Wq &&
            ((d = o.signature),
            (u = [
              `Unable to decode signature "${d}" as it was not found on the provided ABI.`,
              "Make sure you are using the correct ABI and that the error exists on it.",
              `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`,
            ])),
            super(
              (l && "execution reverted" !== l) || d
                ? [
                    `The contract function "${r}" reverted with the following ${
                      d ? "signature" : "reason"
                    }:`,
                    l || d,
                  ].join("\n")
                : `The contract function "${r}" reverted.`,
              {
                cause: o,
                metaMessages: u,
                name: "ContractFunctionRevertedError",
              }
            ),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "reason", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = f),
            (this.reason = l),
            (this.signature = d);
        }
      }
      class w extends f.C {
        constructor({ functionName: e }) {
          super(`The contract function "${e}" returned no data ("0x").`, {
            metaMessages: [
              "This could be due to any of the following:",
              `  - The contract does not have the function "${e}",`,
              "  - The parameters passed to the contract function may be invalid, or",
              "  - The address is not a contract.",
            ],
            name: "ContractFunctionZeroDataError",
          });
        }
      }
      class x extends f.C {
        constructor({ factory: e }) {
          super(
            `Deployment for counterfactual contract call failed${
              e ? ` for factory "${e}".` : ""
            }`,
            {
              metaMessages: [
                "Please ensure:",
                "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).",
                "- The `factoryData` is a valid encoded function call for contract deployment function on the factory.",
              ],
              name: "CounterfactualDeploymentFailedError",
            }
          );
        }
      }
      class E extends f.C {
        constructor({ data: e, message: t }) {
          super(t || "", { name: "RawContractError" }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 3,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e);
        }
      }
    },
    90305: (e, t, r) => {
      r.d(t, { B4: () => i, SK: () => s, hX: () => a });
      var n = r(80477);
      class i extends n.C {
        constructor({ offset: e }) {
          super(`Offset \`${e}\` cannot be negative.`, {
            name: "NegativeOffsetError",
          });
        }
      }
      class s extends n.C {
        constructor({ length: e, position: t }) {
          super(
            `Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`,
            { name: "PositionOutOfBoundsError" }
          );
        }
      }
      class a extends n.C {
        constructor({ count: e, limit: t }) {
          super(
            `Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`,
            { name: "RecursiveReadLimitExceededError" }
          );
        }
      }
    },
    57643: (e, t, r) => {
      r.d(t, { Fl: () => s, NV: () => a, ii: () => i });
      var n = r(80477);
      class i extends n.C {
        constructor({ offset: e, position: t, size: r }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset "${e}" is out-of-bounds (size: ${r}).`,
            { name: "SliceOffsetOutOfBoundsError" }
          );
        }
      }
      class s extends n.C {
        constructor({ size: e, targetSize: t, type: r }) {
          super(
            `${r.charAt(0).toUpperCase()}${r
              .slice(1)
              .toLowerCase()} size (${e}) exceeds padding size (${t}).`,
            { name: "SizeExceedsPaddingSizeError" }
          );
        }
      }
      class a extends n.C {
        constructor({ size: e, targetSize: t, type: r }) {
          super(
            `${r.charAt(0).toUpperCase()}${r
              .slice(1)
              .toLowerCase()} is expected to be ${t} ${r} long, but is ${e} ${r} long.`,
            { name: "InvalidBytesLengthError" }
          );
        }
      }
    },
    93970: (e, t, r) => {
      r.d(t, { H2: () => a, Ty: () => i, u: () => o, xO: () => s });
      var n = r(80477);
      class i extends n.C {
        constructor({ max: e, min: t, signed: r, size: n, value: i }) {
          super(
            `Number "${i}" is not in safe ${
              n ? `${8 * n}-bit ${r ? "signed" : "unsigned"} ` : ""
            }integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`,
            { name: "IntegerOutOfRangeError" }
          );
        }
      }
      class s extends n.C {
        constructor(e) {
          super(
            `Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`,
            { name: "InvalidBytesBooleanError" }
          );
        }
      }
      class a extends n.C {
        constructor(e) {
          super(
            `Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`,
            { name: "InvalidHexBooleanError" }
          );
        }
      }
      class o extends n.C {
        constructor({ givenSize: e, maxSize: t }) {
          super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`, {
            name: "SizeOverflowError",
          });
        }
      }
    },
    62333: (e, t, r) => {
      r.d(t, { RR: () => o, pw: () => a, sM: () => s });
      var n = r(18773),
        i = r(80477);
      class s extends i.C {
        constructor() {
          super("`baseFeeMultiplier` must be greater than 1.", {
            name: "BaseFeeScalarError",
          });
        }
      }
      class a extends i.C {
        constructor() {
          super("Chain does not support EIP-1559 fees.", {
            name: "Eip1559FeesNotSupportedError",
          });
        }
      }
      class o extends i.C {
        constructor({ maxPriorityFeePerGas: e }) {
          super(
            `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,
            n.Q)(e)} gwei).`,
            { name: "MaxFeePerGasTooLowError" }
          );
        }
      }
    },
    87939: (e, t, r) => {
      r.d(t, {
        A7: () => s,
        BG: () => a,
        Fo: () => f,
        K0: () => c,
        Oh: () => u,
        RM: () => b,
        jj: () => o,
        k5: () => d,
        lN: () => y,
        lY: () => h,
        uC: () => p,
        vW: () => l,
      });
      var n = r(18773),
        i = r(80477);
      class s extends i.C {
        constructor({ cause: e, message: t } = {}) {
          let r = t
            ?.replace("execution reverted: ", "")
            ?.replace("execution reverted", "");
          super(
            `Execution reverted ${
              r ? `with reason: ${r}` : "for an unknown reason"
            }.`,
            { cause: e, name: "ExecutionRevertedError" }
          );
        }
      }
      Object.defineProperty(s, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 3,
      }),
        Object.defineProperty(s, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /execution reverted/,
        });
      class a extends i.C {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, n.Q)(t)} gwei` : ""
            }) cannot be higher than the maximum allowed value (2^256-1).`,
            { cause: e, name: "FeeCapTooHighError" }
          );
        }
      }
      Object.defineProperty(a, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
      });
      class o extends i.C {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            `The fee cap (\`maxFeePerGas\`${
              t ? ` = ${(0, n.Q)(t)}` : ""
            } gwei) cannot be lower than the block base fee.`,
            { cause: e, name: "FeeCapTooLowError" }
          );
        }
      }
      Object.defineProperty(o, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
      });
      class c extends i.C {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }is higher than the next one expected.`,
            { cause: e, name: "NonceTooHighError" }
          );
        }
      }
      Object.defineProperty(c, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too high/,
      });
      class u extends i.C {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,
            { cause: e, name: "NonceTooLowError" }
          );
        }
      }
      Object.defineProperty(u, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too low|transaction already imported|already known/,
      });
      class l extends i.C {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            `Nonce provided for the transaction ${
              t ? `(${t}) ` : ""
            }exceeds the maximum allowed nonce.`,
            { cause: e, name: "NonceMaxValueError" }
          );
        }
      }
      Object.defineProperty(l, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce has max value/,
      });
      class d extends i.C {
        constructor({ cause: e } = {}) {
          super(
            "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",
            {
              cause: e,
              metaMessages: [
                "This error could arise when the account does not have enough funds to:",
                " - pay for the total gas fee,",
                " - pay for the value to send.",
                " ",
                "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
                " - `gas` is the amount of gas needed for transaction to execute,",
                " - `gas fee` is the gas fee,",
                " - `value` is the amount of ether to send to the recipient.",
              ],
              name: "InsufficientFundsError",
            }
          );
        }
      }
      Object.defineProperty(d, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /insufficient funds|exceeds transaction sender account balance/,
      });
      class h extends i.C {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction exceeds the limit allowed for the block.`,
            { cause: e, name: "IntrinsicGasTooHighError" }
          );
        }
      }
      Object.defineProperty(h, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too high|gas limit reached/,
      });
      class f extends i.C {
        constructor({ cause: e, gas: t } = {}) {
          super(
            `The amount of gas ${
              t ? `(${t}) ` : ""
            }provided for the transaction is too low.`,
            { cause: e, name: "IntrinsicGasTooLowError" }
          );
        }
      }
      Object.defineProperty(f, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too low/,
      });
      class p extends i.C {
        constructor({ cause: e }) {
          super("The transaction type is not supported for this chain.", {
            cause: e,
            name: "TransactionTypeNotSupportedError",
          });
        }
      }
      Object.defineProperty(p, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /transaction type not valid/,
      });
      class y extends i.C {
        constructor({
          cause: e,
          maxPriorityFeePerGas: t,
          maxFeePerGas: r,
        } = {}) {
          super(
            `The provided tip (\`maxPriorityFeePerGas\`${
              t ? ` = ${(0, n.Q)(t)} gwei` : ""
            }) cannot be higher than the fee cap (\`maxFeePerGas\`${
              r ? ` = ${(0, n.Q)(r)} gwei` : ""
            }).`,
            { cause: e, name: "TipAboveFeeCapError" }
          );
        }
      }
      Object.defineProperty(y, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
      });
      class b extends i.C {
        constructor({ cause: e }) {
          super(`An error occurred while executing: ${e?.shortMessage}`, {
            cause: e,
            name: "UnknownNodeError",
          });
        }
      }
    },
    40928: (e, t, r) => {
      r.d(t, {
        Ci: () => a,
        J8: () => c,
        MU: () => l,
        Oz: () => u,
        Pr: () => o,
      });
      var n = r(66692),
        i = r(80477),
        s = r(9740);
      class a extends i.C {
        constructor({
          body: e,
          cause: t,
          details: r,
          headers: i,
          status: a,
          url: o,
        }) {
          super("HTTP request failed.", {
            cause: t,
            details: r,
            metaMessages: [
              a && `Status: ${a}`,
              `URL: ${(0, s.I)(o)}`,
              e && `Request body: ${(0, n.A)(e)}`,
            ].filter(Boolean),
            name: "HttpRequestError",
          }),
            Object.defineProperty(this, "body", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "headers", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "status", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "url", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.body = e),
            (this.headers = i),
            (this.status = a),
            (this.url = o);
        }
      }
      class o extends i.C {
        constructor({ body: e, cause: t, details: r, url: i }) {
          super("WebSocket request failed.", {
            cause: t,
            details: r,
            metaMessages: [
              `URL: ${(0, s.I)(i)}`,
              e && `Request body: ${(0, n.A)(e)}`,
            ].filter(Boolean),
            name: "WebSocketRequestError",
          });
        }
      }
      class c extends i.C {
        constructor({ body: e, error: t, url: r }) {
          super("RPC Request failed.", {
            cause: t,
            details: t.message,
            metaMessages: [
              `URL: ${(0, s.I)(r)}`,
              `Request body: ${(0, n.A)(e)}`,
            ],
            name: "RpcRequestError",
          }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.code = t.code),
            (this.data = t.data);
        }
      }
      class u extends i.C {
        constructor({ url: e } = {}) {
          super("The socket has been closed.", {
            metaMessages: [e && `URL: ${(0, s.I)(e)}`].filter(Boolean),
            name: "SocketClosedError",
          });
        }
      }
      class l extends i.C {
        constructor({ body: e, url: t }) {
          super("The request took too long to respond.", {
            details: "The request timed out.",
            metaMessages: [
              `URL: ${(0, s.I)(t)}`,
              `Request body: ${(0, n.A)(e)}`,
            ],
            name: "TimeoutError",
          });
        }
      }
    },
    76790: (e, t, r) => {
      r.d(t, {
        CL: () => c,
        D5: () => l,
        Di: () => h,
        Gi: () => u,
        MI: () => C,
        RV: () => E,
        Sf: () => x,
        XU: () => o,
        YW: () => y,
        ab: () => b,
        bq: () => d,
        ch: () => I,
        hA: () => f,
        qZ: () => p,
        s0: () => m,
        sV: () => w,
        vx: () => v,
        xQ: () => g,
        xq: () => P,
      });
      var n = r(80477),
        i = r(40928);
      class s extends n.C {
        constructor(
          e,
          { code: t, docsPath: r, metaMessages: n, name: s, shortMessage: a }
        ) {
          super(a, {
            cause: e,
            docsPath: r,
            metaMessages: n || e?.metaMessages,
            name: s || "RpcError",
          }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.name = s || e.name),
            (this.code = e instanceof i.J8 ? e.code : t ?? -1);
        }
      }
      class a extends s {
        constructor(e, t) {
          super(e, t),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = t.data);
        }
      }
      class o extends s {
        constructor(e) {
          super(e, {
            code: o.code,
            name: "ParseRpcError",
            shortMessage:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          });
        }
      }
      Object.defineProperty(o, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32700,
      });
      class c extends s {
        constructor(e) {
          super(e, {
            code: c.code,
            name: "InvalidRequestRpcError",
            shortMessage: "JSON is not a valid request object.",
          });
        }
      }
      Object.defineProperty(c, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32600,
      });
      class u extends s {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: u.code,
            name: "MethodNotFoundRpcError",
            shortMessage: `The method${
              t ? ` "${t}"` : ""
            } does not exist / is not available.`,
          });
        }
      }
      Object.defineProperty(u, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32601,
      });
      class l extends s {
        constructor(e) {
          super(e, {
            code: l.code,
            name: "InvalidParamsRpcError",
            shortMessage:
              "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(l, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32602,
      });
      class d extends s {
        constructor(e) {
          super(e, {
            code: d.code,
            name: "InternalRpcError",
            shortMessage: "An internal error was received.",
          });
        }
      }
      Object.defineProperty(d, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32603,
      });
      class h extends s {
        constructor(e) {
          super(e, {
            code: h.code,
            name: "InvalidInputRpcError",
            shortMessage:
              "Missing or invalid parameters.\nDouble check you have provided the correct parameters.",
          });
        }
      }
      Object.defineProperty(h, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32e3,
      });
      class f extends s {
        constructor(e) {
          super(e, {
            code: f.code,
            name: "ResourceNotFoundRpcError",
            shortMessage: "Requested resource not found.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ResourceNotFoundRpcError",
            });
        }
      }
      Object.defineProperty(f, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32001,
      });
      class p extends s {
        constructor(e) {
          super(e, {
            code: p.code,
            name: "ResourceUnavailableRpcError",
            shortMessage: "Requested resource not available.",
          });
        }
      }
      Object.defineProperty(p, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32002,
      });
      class y extends s {
        constructor(e) {
          super(e, {
            code: y.code,
            name: "TransactionRejectedRpcError",
            shortMessage: "Transaction creation failed.",
          });
        }
      }
      Object.defineProperty(y, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32003,
      });
      class b extends s {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: b.code,
            name: "MethodNotSupportedRpcError",
            shortMessage: `Method${t ? ` "${t}"` : ""} is not implemented.`,
          });
        }
      }
      Object.defineProperty(b, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32004,
      });
      class m extends s {
        constructor(e) {
          super(e, {
            code: m.code,
            name: "LimitExceededRpcError",
            shortMessage: "Request exceeds defined limit.",
          });
        }
      }
      Object.defineProperty(m, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32005,
      });
      class g extends s {
        constructor(e) {
          super(e, {
            code: g.code,
            name: "JsonRpcVersionUnsupportedError",
            shortMessage: "Version of JSON-RPC protocol is not supported.",
          });
        }
      }
      Object.defineProperty(g, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32006,
      });
      class v extends a {
        constructor(e) {
          super(e, {
            code: v.code,
            name: "UserRejectedRequestError",
            shortMessage: "User rejected the request.",
          });
        }
      }
      Object.defineProperty(v, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4001,
      });
      class w extends a {
        constructor(e) {
          super(e, {
            code: w.code,
            name: "UnauthorizedProviderError",
            shortMessage:
              "The requested method and/or account has not been authorized by the user.",
          });
        }
      }
      Object.defineProperty(w, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4100,
      });
      class x extends a {
        constructor(e, { method: t } = {}) {
          super(e, {
            code: x.code,
            name: "UnsupportedProviderMethodError",
            shortMessage: `The Provider does not support the requested method${
              t ? ` " ${t}"` : ""
            }.`,
          });
        }
      }
      Object.defineProperty(x, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4200,
      });
      class E extends a {
        constructor(e) {
          super(e, {
            code: E.code,
            name: "ProviderDisconnectedError",
            shortMessage: "The Provider is disconnected from all chains.",
          });
        }
      }
      Object.defineProperty(E, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4900,
      });
      class P extends a {
        constructor(e) {
          super(e, {
            code: P.code,
            name: "ChainDisconnectedError",
            shortMessage:
              "The Provider is not connected to the requested chain.",
          });
        }
      }
      Object.defineProperty(P, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4901,
      });
      class I extends a {
        constructor(e) {
          super(e, {
            code: I.code,
            name: "SwitchChainError",
            shortMessage: "An error occurred when attempting to switch chain.",
          });
        }
      }
      Object.defineProperty(I, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4902,
      });
      class C extends s {
        constructor(e) {
          super(e, {
            name: "UnknownRpcError",
            shortMessage: "An unknown RPC error occurred.",
          });
        }
      }
    },
    56044: (e, t, r) => {
      r.d(t, { Hi: () => i, ft: () => s, uj: () => o });
      var n = r(80477);
      class i extends n.C {
        constructor({ address: e }) {
          super(`State for account "${e}" is set multiple times.`, {
            name: "AccountStateConflictError",
          });
        }
      }
      class s extends n.C {
        constructor() {
          super("state and stateDiff are set on the same account.", {
            name: "StateAssignmentConflictError",
          });
        }
      }
      function a(e) {
        return e.reduce(
          (e, { slot: t, value: r }) => `${e}        ${t}: ${r}
`,
          ""
        );
      }
      function o(e) {
        return e
          .reduce((e, { address: t, ...r }) => {
            let n = `${e}    ${t}:
`;
            return (
              r.nonce &&
                (n += `      nonce: ${r.nonce}
`),
              r.balance &&
                (n += `      balance: ${r.balance}
`),
              r.code &&
                (n += `      code: ${r.code}
`),
              r.state && ((n += "      state:\n"), (n += a(r.state))),
              r.stateDiff &&
                ((n += "      stateDiff:\n"), (n += a(r.stateDiff))),
              n
            );
          }, "  State Override:\n")
          .slice(0, -1);
      }
    },
    45757: (e, t, r) => {
      r.d(t, {
        $s: () => u,
        Kc: () => d,
        Kz: () => l,
        Vg: () => c,
        WA: () => h,
        aO: () => a,
        n3: () => o,
      });
      var n = r(69595),
        i = r(18773),
        s = r(80477);
      function a(e) {
        let t = Object.entries(e)
            .map(([e, t]) => (void 0 === t || !1 === t ? null : [e, t]))
            .filter(Boolean),
          r = t.reduce((e, [t]) => Math.max(e, t.length), 0);
        return t.map(([e, t]) => `  ${`${e}:`.padEnd(r + 1)}  ${t}`).join("\n");
      }
      class o extends s.C {
        constructor() {
          super(
            "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others.",
            { name: "FeeConflictError" }
          );
        }
      }
      class c extends s.C {
        constructor({ transaction: e }) {
          super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: [
              "Provided Transaction:",
              "{",
              a(e),
              "}",
              "",
              "To infer the type, either provide:",
              "- a `type` to the Transaction, or",
              "- an EIP-1559 Transaction with `maxFeePerGas`, or",
              "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
              "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or",
              "- an EIP-7702 Transaction with `authorizationList`, or",
              "- a Legacy Transaction with `gasPrice`",
            ],
            name: "InvalidSerializableTransactionError",
          });
        }
      }
      class u extends s.C {
        constructor(
          e,
          {
            account: t,
            docsPath: r,
            chain: s,
            data: o,
            gas: c,
            gasPrice: u,
            maxFeePerGas: l,
            maxPriorityFeePerGas: d,
            nonce: h,
            to: f,
            value: p,
          }
        ) {
          super(e.shortMessage, {
            cause: e,
            docsPath: r,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Request Arguments:",
              a({
                chain: s && `${s?.name} (id: ${s?.id})`,
                from: t?.address,
                to: f,
                value:
                  void 0 !== p &&
                  `${(0, n.c)(p)} ${s?.nativeCurrency?.symbol || "ETH"}`,
                data: o,
                gas: c,
                gasPrice: void 0 !== u && `${(0, i.Q)(u)} gwei`,
                maxFeePerGas: void 0 !== l && `${(0, i.Q)(l)} gwei`,
                maxPriorityFeePerGas: void 0 !== d && `${(0, i.Q)(d)} gwei`,
                nonce: h,
              }),
            ].filter(Boolean),
            name: "TransactionExecutionError",
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.cause = e);
        }
      }
      class l extends s.C {
        constructor({
          blockHash: e,
          blockNumber: t,
          blockTag: r,
          hash: n,
          index: i,
        }) {
          let s = "Transaction";
          r &&
            void 0 !== i &&
            (s = `Transaction at block time "${r}" at index "${i}"`),
            e &&
              void 0 !== i &&
              (s = `Transaction at block hash "${e}" at index "${i}"`),
            t &&
              void 0 !== i &&
              (s = `Transaction at block number "${t}" at index "${i}"`),
            n && (s = `Transaction with hash "${n}"`),
            super(`${s} could not be found.`, {
              name: "TransactionNotFoundError",
            });
        }
      }
      class d extends s.C {
        constructor({ hash: e }) {
          super(
            `Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`,
            { name: "TransactionReceiptNotFoundError" }
          );
        }
      }
      class h extends s.C {
        constructor({ hash: e }) {
          super(
            `Timed out while waiting for transaction with hash "${e}" to be confirmed.`,
            { name: "WaitForTransactionReceiptTimeoutError" }
          );
        }
      }
    },
    9740: (e, t, r) => {
      r.d(t, { I: () => i, R: () => n });
      let n = (e) => e,
        i = (e) => e;
    },
    53559: (e, t, r) => {
      r.d(t, { g: () => d });
      var n = r(29157),
        i = r(16704),
        s = r(76397),
        a = r(98979),
        o = r(80477),
        c = r(95389);
      function u(e) {
        if (e < 256) return 1;
        if (e < 65536) return 2;
        if (e < 0x1000000) return 3;
        if (e < 0x100000000) return 4;
        throw new o.C("Length is too large.");
      }
      var l = r(36933);
      async function d(e) {
        let { authorization: t, signature: r } = e;
        return (0, n.x)({
          hash: (function (e) {
            let { chainId: t, contractAddress: r, nonce: n, to: o } = e,
              d = (0, l.S)(
                (0, i.aP)([
                  "0x05",
                  (function (e, t = "hex") {
                    let r = (function e(t) {
                        return Array.isArray(t)
                          ? (function (e) {
                              let t = e.reduce((e, t) => e + t.length, 0),
                                r = u(t);
                              return {
                                length: t <= 55 ? 1 + t : 1 + r + t,
                                encode(n) {
                                  for (let { encode: i } of (t <= 55
                                    ? n.pushByte(192 + t)
                                    : (n.pushByte(247 + r),
                                      1 === r
                                        ? n.pushUint8(t)
                                        : 2 === r
                                        ? n.pushUint16(t)
                                        : 3 === r
                                        ? n.pushUint24(t)
                                        : n.pushUint32(t)),
                                  e))
                                    i(n);
                                },
                              };
                            })(t.map((t) => e(t)))
                          : (function (e) {
                              let t = "string" == typeof e ? (0, s.aT)(e) : e,
                                r = u(t.length);
                              return {
                                length:
                                  1 === t.length && t[0] < 128
                                    ? 1
                                    : t.length <= 55
                                    ? 1 + t.length
                                    : 1 + r + t.length,
                                encode(e) {
                                  (1 === t.length && t[0] < 128) ||
                                    (t.length <= 55
                                      ? e.pushByte(128 + t.length)
                                      : (e.pushByte(183 + r),
                                        1 === r
                                          ? e.pushUint8(t.length)
                                          : 2 === r
                                          ? e.pushUint16(t.length)
                                          : 3 === r
                                          ? e.pushUint24(t.length)
                                          : e.pushUint32(t.length))),
                                    e.pushBytes(t);
                                },
                              };
                            })(t);
                      })(e),
                      n = (0, c.l)(new Uint8Array(r.length));
                    return (r.encode(n), "hex" === t)
                      ? (0, a.My)(n.bytes)
                      : n.bytes;
                  })([t ? (0, a.cK)(t) : "0x", r, n ? (0, a.cK)(n) : "0x"]),
                ])
              );
            return "bytes" === o ? (0, s.aT)(d) : d;
          })(t),
          signature: r ?? t,
        });
      }
    },
    68424: (e, t, r) => {
      r.d(t, { n: () => y });
      var n = r(36991),
        i = r(40814),
        s = r(95389),
        a = r(91149),
        o = r(22162),
        c = r(67368),
        u = r(93970),
        l = r(45732),
        d = r(98979);
      function h(e, t = {}) {
        void 0 !== t.size && (0, l.Sl)(e, { size: t.size });
        let r = (0, d.My)(e, t);
        return (0, l.ME)(r, t);
      }
      var f = r(76397),
        p = r(46304);
      function y(e, t) {
        let r = "string" == typeof t ? (0, f.aT)(t) : t,
          y = (0, s.l)(r);
        if (0 === (0, a.E)(r) && e.length > 0) throw new n.O();
        if ((0, a.E)(t) && 32 > (0, a.E)(t))
          throw new n.Iy({
            data: "string" == typeof t ? t : (0, d.My)(t),
            params: e,
            size: (0, a.E)(t),
          });
        let m = 0,
          g = [];
        for (let t = 0; t < e.length; ++t) {
          let r = e[t];
          y.setPosition(m);
          let [s, a] = (function e(t, r, { staticPosition: s }) {
            let a = (0, p.k)(r.type);
            if (a) {
              let [n, i] = a;
              return (function (t, r, { length: n, staticPosition: i }) {
                if (!n) {
                  let n = i + h(t.readBytes(32)),
                    s = n + 32;
                  t.setPosition(n);
                  let a = h(t.readBytes(32)),
                    o = b(r),
                    c = 0,
                    u = [];
                  for (let n = 0; n < a; ++n) {
                    t.setPosition(s + (o ? 32 * n : c));
                    let [i, a] = e(t, r, { staticPosition: s });
                    (c += a), u.push(i);
                  }
                  return t.setPosition(i + 32), [u, 32];
                }
                if (b(r)) {
                  let s = i + h(t.readBytes(32)),
                    a = [];
                  for (let i = 0; i < n; ++i) {
                    t.setPosition(s + 32 * i);
                    let [n] = e(t, r, { staticPosition: s });
                    a.push(n);
                  }
                  return t.setPosition(i + 32), [a, 32];
                }
                let s = 0,
                  a = [];
                for (let o = 0; o < n; ++o) {
                  let [n, o] = e(t, r, { staticPosition: i + s });
                  (s += o), a.push(n);
                }
                return [a, s];
              })(t, { ...r, type: i }, { length: n, staticPosition: s });
            }
            if ("tuple" === r.type)
              return (function (t, r, { staticPosition: n }) {
                let i =
                    0 === r.components.length ||
                    r.components.some(({ name: e }) => !e),
                  s = i ? [] : {},
                  a = 0;
                if (b(r)) {
                  let o = n + h(t.readBytes(32));
                  for (let n = 0; n < r.components.length; ++n) {
                    let c = r.components[n];
                    t.setPosition(o + a);
                    let [u, l] = e(t, c, { staticPosition: o });
                    (a += l), (s[i ? n : c?.name] = u);
                  }
                  return t.setPosition(n + 32), [s, 32];
                }
                for (let o = 0; o < r.components.length; ++o) {
                  let c = r.components[o],
                    [u, l] = e(t, c, { staticPosition: n });
                  (s[i ? o : c?.name] = u), (a += l);
                }
                return [s, a];
              })(t, r, { staticPosition: s });
            if ("address" === r.type)
              return (function (e) {
                let t = e.readBytes(32);
                return [(0, i.o)((0, d.My)((0, o.A1)(t, -20))), 32];
              })(t);
            if ("bool" === r.type)
              return [
                (function (e, t = {}) {
                  let r = e;
                  if (
                    (void 0 !== t.size &&
                      ((0, l.Sl)(r, { size: t.size }), (r = (0, c.B)(r))),
                    r.length > 1 || r[0] > 1)
                  )
                    throw new u.xO(r);
                  return !!r[0];
                })(t.readBytes(32), { size: 32 }),
                32,
              ];
            if (r.type.startsWith("bytes"))
              return (function (e, t, { staticPosition: r }) {
                let [n, i] = t.type.split("bytes");
                if (!i) {
                  let t = h(e.readBytes(32));
                  e.setPosition(r + t);
                  let n = h(e.readBytes(32));
                  if (0 === n) return e.setPosition(r + 32), ["0x", 32];
                  let i = e.readBytes(n);
                  return e.setPosition(r + 32), [(0, d.My)(i), 32];
                }
                return [(0, d.My)(e.readBytes(Number.parseInt(i), 32)), 32];
              })(t, r, { staticPosition: s });
            if (r.type.startsWith("uint") || r.type.startsWith("int"))
              return (function (e, t) {
                let r = t.type.startsWith("int"),
                  n = Number.parseInt(t.type.split("int")[1] || "256"),
                  i = e.readBytes(32);
                return [
                  n > 48
                    ? (function (e, t = {}) {
                        void 0 !== t.size && (0, l.Sl)(e, { size: t.size });
                        let r = (0, d.My)(e, t);
                        return (0, l.uU)(r, t);
                      })(i, { signed: r })
                    : h(i, { signed: r }),
                  32,
                ];
              })(t, r);
            if ("string" === r.type)
              return (function (e, { staticPosition: t }) {
                let r = h(e.readBytes(32));
                e.setPosition(t + r);
                let n = h(e.readBytes(32));
                if (0 === n) return e.setPosition(t + 32), ["", 32];
                let i = e.readBytes(n, 32),
                  s = (function (e, t = {}) {
                    let r = e;
                    return (
                      void 0 !== t.size &&
                        ((0, l.Sl)(r, { size: t.size }),
                        (r = (0, c.B)(r, { dir: "right" }))),
                      new TextDecoder().decode(r)
                    );
                  })((0, c.B)(i));
                return e.setPosition(t + 32), [s, 32];
              })(t, { staticPosition: s });
            throw new n.j(r.type, {
              docsPath: "/docs/contract/decodeAbiParameters",
            });
          })(y, r, { staticPosition: 0 });
          (m += a), g.push(s);
        }
        return g;
      }
      function b(e) {
        let { type: t } = e;
        if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
        if ("tuple" === t) return e.components?.some(b);
        let r = (0, p.k)(e.type);
        return !!(r && b({ ...e, type: r[1] }));
      }
    },
    17169: (e, t, r) => {
      r.d(t, { W: () => u });
      var n = r(4382),
        i = r(36991),
        s = r(22162),
        a = r(44720),
        o = r(68424),
        c = r(57880);
      function u(e) {
        let { abi: t, data: r } = e,
          u = (0, s.di)(r, 0, 4);
        if ("0x" === u) throw new i.O();
        let l = [...(t || []), n.Mc, n.J9].find(
          (e) => "error" === e.type && u === (0, a.V)((0, c.B)(e))
        );
        if (!l)
          throw new i.Wq(u, { docsPath: "/docs/contract/decodeErrorResult" });
        return {
          abiItem: l,
          args:
            "inputs" in l && l.inputs && l.inputs.length > 0
              ? (0, o.n)(l.inputs, (0, s.di)(r, 4))
              : void 0,
          errorName: l.name,
        };
      }
    },
    17848: (e, t, r) => {
      r.d(t, { j: () => l });
      var n = r(36991),
        i = r(91149),
        s = r(94490),
        a = r(90305),
        o = r(68424),
        c = r(57880);
      let u = "/docs/contract/decodeEventLog";
      function l(e) {
        let { abi: t, data: r, strict: l, topics: d } = e,
          h = l ?? !0,
          [f, ...p] = d;
        if (!f) throw new n._z({ docsPath: u });
        let y =
          1 === t.length
            ? t[0]
            : t.find((e) => "event" === e.type && f === (0, s.h)((0, c.B)(e)));
        if (!(y && "name" in y) || "event" !== y.type)
          throw new n.kE(f, { docsPath: u });
        let { name: b, inputs: m } = y,
          g = m?.some((e) => !("name" in e && e.name)),
          v = g ? [] : {},
          w = m.filter((e) => "indexed" in e && e.indexed);
        for (let e = 0; e < w.length; e++) {
          let t = w[e],
            r = p[e];
          if (!r) throw new n.l3({ abiItem: y, param: t });
          v[g ? e : t.name || e] = (function ({ param: e, value: t }) {
            return "string" === e.type ||
              "bytes" === e.type ||
              "tuple" === e.type ||
              e.type.match(/^(.*)\[(\d+)?\]$/)
              ? t
              : ((0, o.n)([e], t) || [])[0];
          })({ param: t, value: r });
        }
        let x = m.filter((e) => !("indexed" in e && e.indexed));
        if (x.length > 0) {
          if (r && "0x" !== r)
            try {
              let e = (0, o.n)(x, r);
              if (e) {
                if (g) v = [...v, ...e];
                else for (let t = 0; t < x.length; t++) v[x[t].name] = e[t];
              }
            } catch (e) {
              if (h) {
                if (e instanceof n.Iy || e instanceof a.SK)
                  throw new n.fo({
                    abiItem: y,
                    data: r,
                    params: x,
                    size: (0, i.E)(r),
                  });
                throw e;
              }
            }
          else if (h)
            throw new n.fo({ abiItem: y, data: "0x", params: x, size: 0 });
        }
        return { eventName: b, args: Object.values(v).length > 0 ? v : void 0 };
      }
    },
    59719: (e, t, r) => {
      r.d(t, { e: () => o });
      var n = r(36991),
        i = r(68424),
        s = r(4617);
      let a = "/docs/contract/decodeFunctionResult";
      function o(e) {
        let { abi: t, args: r, functionName: o, data: c } = e,
          u = t[0];
        if (o) {
          let e = (0, s.iY)({ abi: t, args: r, name: o });
          if (!e) throw new n.Iz(o, { docsPath: a });
          u = e;
        }
        if ("function" !== u.type) throw new n.Iz(void 0, { docsPath: a });
        if (!u.outputs) throw new n.MR(u.name, { docsPath: a });
        let l = (0, i.n)(u.outputs, c);
        return l && l.length > 1 ? l : l && 1 === l.length ? l[0] : void 0;
      }
    },
    46304: (e, t, r) => {
      r.d(t, { h: () => p, k: () => b });
      var n = r(36991),
        i = r(61117),
        s = r(80477),
        a = r(93970),
        o = r(34354),
        c = r(16704),
        u = r(33085),
        l = r(91149),
        d = r(22162),
        h = r(98979),
        f = r(7702);
      function p(e, t) {
        if (e.length !== t.length)
          throw new n.YE({ expectedLength: e.length, givenLength: t.length });
        let r = y(
          (function ({ params: e, values: t }) {
            let r = [];
            for (let p = 0; p < e.length; p++)
              r.push(
                (function e({ param: t, value: r }) {
                  let p = b(t.type);
                  if (p) {
                    let [i, s] = p;
                    return (function (t, { length: r, param: i }) {
                      let s = null === r;
                      if (!Array.isArray(t)) throw new n.dm(t);
                      if (!s && t.length !== r)
                        throw new n.Nc({
                          expectedLength: r,
                          givenLength: t.length,
                          type: `${i.type}[${r}]`,
                        });
                      let a = !1,
                        o = [];
                      for (let r = 0; r < t.length; r++) {
                        let n = e({ param: i, value: t[r] });
                        n.dynamic && (a = !0), o.push(n);
                      }
                      if (s || a) {
                        let e = y(o);
                        if (s) {
                          let t = (0, h.cK)(o.length, { size: 32 });
                          return {
                            dynamic: !0,
                            encoded: o.length > 0 ? (0, c.xW)([t, e]) : t,
                          };
                        }
                        if (a) return { dynamic: !0, encoded: e };
                      }
                      return {
                        dynamic: !1,
                        encoded: (0, c.xW)(o.map(({ encoded: e }) => e)),
                      };
                    })(r, { length: i, param: { ...t, type: s } });
                  }
                  if ("tuple" === t.type)
                    return (function (t, { param: r }) {
                      let n = !1,
                        i = [];
                      for (let s = 0; s < r.components.length; s++) {
                        let a = r.components[s],
                          o = Array.isArray(t) ? s : a.name,
                          c = e({ param: a, value: t[o] });
                        i.push(c), c.dynamic && (n = !0);
                      }
                      return {
                        dynamic: n,
                        encoded: n
                          ? y(i)
                          : (0, c.xW)(i.map(({ encoded: e }) => e)),
                      };
                    })(r, { param: t });
                  if ("address" === t.type)
                    return (function (e) {
                      if (!(0, o.P)(e)) throw new i.M({ address: e });
                      return {
                        dynamic: !1,
                        encoded: (0, u.db)(e.toLowerCase()),
                      };
                    })(r);
                  if ("bool" === t.type)
                    return (function (e) {
                      if ("boolean" != typeof e)
                        throw new s.C(
                          `Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`
                        );
                      return { dynamic: !1, encoded: (0, u.db)((0, h.$P)(e)) };
                    })(r);
                  if (t.type.startsWith("uint") || t.type.startsWith("int")) {
                    let e = t.type.startsWith("int"),
                      [, , n = "256"] = f.Ge.exec(t.type) ?? [];
                    return (function (e, { signed: t, size: r = 256 }) {
                      if ("number" == typeof r) {
                        let n = 2n ** (BigInt(r) - (t ? 1n : 0n)) - 1n,
                          i = t ? -n - 1n : 0n;
                        if (e > n || e < i)
                          throw new a.Ty({
                            max: n.toString(),
                            min: i.toString(),
                            signed: t,
                            size: r / 8,
                            value: e.toString(),
                          });
                      }
                      return {
                        dynamic: !1,
                        encoded: (0, h.cK)(e, { size: 32, signed: t }),
                      };
                    })(r, { signed: e, size: Number(n) });
                  }
                  if (t.type.startsWith("bytes"))
                    return (function (e, { param: t }) {
                      let [, r] = t.type.split("bytes"),
                        i = (0, l.E)(e);
                      if (!r) {
                        let t = e;
                        return (
                          i % 32 != 0 &&
                            (t = (0, u.db)(t, {
                              dir: "right",
                              size: 32 * Math.ceil((e.length - 2) / 2 / 32),
                            })),
                          {
                            dynamic: !0,
                            encoded: (0, c.xW)([
                              (0, u.db)((0, h.cK)(i, { size: 32 })),
                              t,
                            ]),
                          }
                        );
                      }
                      if (i !== Number.parseInt(r))
                        throw new n.gH({
                          expectedSize: Number.parseInt(r),
                          value: e,
                        });
                      return {
                        dynamic: !1,
                        encoded: (0, u.db)(e, { dir: "right" }),
                      };
                    })(r, { param: t });
                  if ("string" === t.type)
                    return (function (e) {
                      let t = (0, h.i3)(e),
                        r = Math.ceil((0, l.E)(t) / 32),
                        n = [];
                      for (let e = 0; e < r; e++)
                        n.push(
                          (0, u.db)((0, d.di)(t, 32 * e, (e + 1) * 32), {
                            dir: "right",
                          })
                        );
                      return {
                        dynamic: !0,
                        encoded: (0, c.xW)([
                          (0, u.db)((0, h.cK)((0, l.E)(t), { size: 32 })),
                          ...n,
                        ]),
                      };
                    })(r);
                  throw new n.nK(t.type, {
                    docsPath: "/docs/contract/encodeAbiParameters",
                  });
                })({ param: e[p], value: t[p] })
              );
            return r;
          })({ params: e, values: t })
        );
        return 0 === r.length ? "0x" : r;
      }
      function y(e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) {
          let { dynamic: n, encoded: i } = e[r];
          n ? (t += 32) : (t += (0, l.E)(i));
        }
        let r = [],
          n = [],
          i = 0;
        for (let s = 0; s < e.length; s++) {
          let { dynamic: a, encoded: o } = e[s];
          a
            ? (r.push((0, h.cK)(t + i, { size: 32 })),
              n.push(o),
              (i += (0, l.E)(o)))
            : r.push(o);
        }
        return (0, c.xW)([...r, ...n]);
      }
      function b(e) {
        let t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
    },
    62937: (e, t, r) => {
      r.d(t, { m: () => o });
      var n = r(36991),
        i = r(16704),
        s = r(46304);
      let a = "/docs/contract/encodeDeployData";
      function o(e) {
        let { abi: t, args: r, bytecode: o } = e;
        if (!r || 0 === r.length) return o;
        let c = t.find((e) => "type" in e && "constructor" === e.type);
        if (!c) throw new n.YW({ docsPath: a });
        if (!("inputs" in c) || !c.inputs || 0 === c.inputs.length)
          throw new n.YF({ docsPath: a });
        let u = (0, s.h)(c.inputs, r);
        return (0, i.aP)([o, u]);
      }
    },
    98619: (e, t, r) => {
      r.d(t, { R: () => f });
      var n = r(36991),
        i = r(80477);
      class s extends i.C {
        constructor(e) {
          super(`Filter type "${e}" is not supported.`, {
            name: "FilterTypeNotSupportedError",
          });
        }
      }
      var a = r(76397),
        o = r(36933),
        c = r(94490),
        u = r(46304),
        l = r(57880),
        d = r(4617);
      let h = "/docs/contract/encodeEventTopics";
      function f(e) {
        let { abi: t, eventName: r, args: i } = e,
          s = t[0];
        if (r) {
          let e = (0, d.iY)({ abi: t, name: r });
          if (!e) throw new n.M_(r, { docsPath: h });
          s = e;
        }
        if ("event" !== s.type) throw new n.M_(void 0, { docsPath: h });
        let a = (0, l.B)(s),
          o = (0, c.h)(a),
          u = [];
        if (i && "inputs" in s) {
          let e = s.inputs?.filter((e) => "indexed" in e && e.indexed),
            t = Array.isArray(i)
              ? i
              : Object.values(i).length > 0
              ? e?.map((e) => i[e.name]) ?? []
              : [];
          t.length > 0 &&
            (u =
              e?.map((e, r) =>
                Array.isArray(t[r])
                  ? t[r].map((n, i) => p({ param: e, value: t[r][i] }))
                  : t[r]
                  ? p({ param: e, value: t[r] })
                  : null
              ) ?? []);
        }
        return [o, ...u];
      }
      function p({ param: e, value: t }) {
        if ("string" === e.type || "bytes" === e.type)
          return (0, o.S)((0, a.ZJ)(t));
        if ("tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/))
          throw new s(e.type);
        return (0, u.h)([e], [t]);
      }
    },
    74046: (e, t, r) => {
      r.d(t, { p: () => l });
      var n = r(16704),
        i = r(46304),
        s = r(36991),
        a = r(44720),
        o = r(57880),
        c = r(4617);
      let u = "/docs/contract/encodeFunctionData";
      function l(e) {
        let { args: t } = e,
          { abi: r, functionName: l } =
            1 === e.abi.length && e.functionName?.startsWith("0x")
              ? e
              : (function (e) {
                  let { abi: t, args: r, functionName: n } = e,
                    i = t[0];
                  if (n) {
                    let e = (0, c.iY)({ abi: t, args: r, name: n });
                    if (!e) throw new s.Iz(n, { docsPath: u });
                    i = e;
                  }
                  if ("function" !== i.type)
                    throw new s.Iz(void 0, { docsPath: u });
                  return { abi: [i], functionName: (0, a.V)((0, o.B)(i)) };
                })(e),
          d = r[0],
          h = "inputs" in d && d.inputs ? (0, i.h)(d.inputs, t ?? []) : void 0;
        return (0, n.aP)([l, h ?? "0x"]);
      }
    },
    57880: (e, t, r) => {
      r.d(t, { A: () => s, B: () => i });
      var n = r(36991);
      function i(e, { includeName: t = !1 } = {}) {
        if ("function" !== e.type && "event" !== e.type && "error" !== e.type)
          throw new n.d_(e.type);
        return `${e.name}(${s(e.inputs, { includeName: t })})`;
      }
      function s(e, { includeName: t = !1 } = {}) {
        return e
          ? e
              .map((e) =>
                (function (e, { includeName: t }) {
                  return e.type.startsWith("tuple")
                    ? `(${s(e.components, { includeName: t })})${e.type.slice(
                        5
                      )}`
                    : e.type + (t && e.name ? ` ${e.name}` : "");
                })(e, { includeName: t })
              )
              .join(t ? ", " : ",")
          : "";
      }
    },
    4617: (e, t, r) => {
      r.d(t, { iY: () => c });
      var n = r(36991),
        i = r(11601),
        s = r(34354),
        a = r(94490),
        o = r(44720);
      function c(e) {
        let t;
        let { abi: r, args: c = [], name: u } = e,
          l = (0, i.q)(u, { strict: !1 }),
          d = r.filter((e) =>
            l
              ? "function" === e.type
                ? (0, o.V)(e) === u
                : "event" === e.type && (0, a.h)(e) === u
              : "name" in e && e.name === u
          );
        if (0 !== d.length) {
          if (1 === d.length) return d[0];
          for (let e of d)
            if ("inputs" in e) {
              if (!c || 0 === c.length) {
                if (!e.inputs || 0 === e.inputs.length) return e;
                continue;
              }
              if (
                e.inputs &&
                0 !== e.inputs.length &&
                e.inputs.length === c.length &&
                c.every((t, r) => {
                  let n = "inputs" in e && e.inputs[r];
                  return (
                    !!n &&
                    (function e(t, r) {
                      let n = typeof t,
                        i = r.type;
                      switch (i) {
                        case "address":
                          return (0, s.P)(t, { strict: !1 });
                        case "bool":
                          return "boolean" === n;
                        case "function":
                        case "string":
                          return "string" === n;
                        default:
                          if ("tuple" === i && "components" in r)
                            return Object.values(r.components).every((r, n) =>
                              e(Object.values(t)[n], r)
                            );
                          if (
                            /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                              i
                            )
                          )
                            return "number" === n || "bigint" === n;
                          if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i))
                            return "string" === n || t instanceof Uint8Array;
                          if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i))
                            return (
                              Array.isArray(t) &&
                              t.every((t) =>
                                e(t, {
                                  ...r,
                                  type: i.replace(/(\[[0-9]{0,}\])$/, ""),
                                })
                              )
                            );
                          return !1;
                      }
                    })(t, n)
                  );
                })
              ) {
                if (t && "inputs" in t && t.inputs) {
                  let r = (function e(t, r, n) {
                    for (let i in t) {
                      let a = t[i],
                        o = r[i];
                      if (
                        "tuple" === a.type &&
                        "tuple" === o.type &&
                        "components" in a &&
                        "components" in o
                      )
                        return e(a.components, o.components, n[i]);
                      let c = [a.type, o.type];
                      if (
                        (c.includes("address") && c.includes("bytes20")) ||
                        (((c.includes("address") && c.includes("string")) ||
                          (c.includes("address") && c.includes("bytes"))) &&
                          (0, s.P)(n[i], { strict: !1 }))
                      )
                        return c;
                    }
                  })(e.inputs, t.inputs, c);
                  if (r)
                    throw new n.nM(
                      { abiItem: e, type: r[0] },
                      { abiItem: t, type: r[1] }
                    );
                }
                t = e;
              }
            }
          return t || d[0];
        }
      }
    },
    29946: (e, t, r) => {
      r.d(t, { p: () => u });
      var n = r(36991),
        i = r(81770),
        s = r(76397),
        a = r(36933),
        o = r(94490),
        c = r(17848);
      function u(e) {
        let { abi: t, args: r, logs: u, strict: l = !0 } = e,
          d = (() => {
            if (e.eventName)
              return Array.isArray(e.eventName) ? e.eventName : [e.eventName];
          })();
        return u
          .map((e) => {
            try {
              let n = t.find(
                (t) => "event" === t.type && e.topics[0] === (0, o.h)(t)
              );
              if (!n) return null;
              let u = (0, c.j)({ ...e, abi: [n], strict: l });
              if (
                (d && !d.includes(u.eventName)) ||
                !(function (e) {
                  let { args: t, inputs: r, matchArgs: n } = e;
                  if (!n) return !0;
                  if (!t) return !1;
                  function o(e, t, r) {
                    try {
                      if ("address" === e.type) return (0, i.h)(t, r);
                      if ("string" === e.type || "bytes" === e.type)
                        return (0, a.S)((0, s.ZJ)(t)) === r;
                      return t === r;
                    } catch {
                      return !1;
                    }
                  }
                  return Array.isArray(t) && Array.isArray(n)
                    ? n.every((e, n) => {
                        if (null == e) return !0;
                        let i = r[n];
                        return (
                          !!i &&
                          (Array.isArray(e) ? e : [e]).some((e) =>
                            o(i, e, t[n])
                          )
                        );
                      })
                    : !(
                        "object" != typeof t ||
                        Array.isArray(t) ||
                        "object" != typeof n ||
                        Array.isArray(n)
                      ) &&
                        Object.entries(n).every(([e, n]) => {
                          if (null == n) return !0;
                          let i = r.find((t) => t.name === e);
                          return (
                            !!i &&
                            (Array.isArray(n) ? n : [n]).some((r) =>
                              o(i, r, t[e])
                            )
                          );
                        });
                })({ args: u.args, inputs: n.inputs, matchArgs: r })
              )
                return null;
              return { ...u, ...e };
            } catch (i) {
              let t, r;
              if (i instanceof n.kE) return null;
              if (i instanceof n.fo || i instanceof n.l3) {
                if (l) return null;
                (t = i.abiItem.name),
                  (r = i.abiItem.inputs?.some((e) => !("name" in e && e.name)));
              }
              return { ...e, args: r ? [] : {}, eventName: t };
            }
          })
          .filter(Boolean);
      }
    },
    40814: (e, t, r) => {
      r.d(t, { b: () => l, o: () => u });
      var n = r(61117),
        i = r(76397),
        s = r(36933),
        a = r(46140),
        o = r(34354);
      let c = new a.A(8192);
      function u(e, t) {
        if (c.has(`${e}.${t}`)) return c.get(`${e}.${t}`);
        let r = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
          n = (0, s.S)((0, i.Af)(r), "bytes"),
          a = (t ? r.substring(`${t}0x`.length) : r).split("");
        for (let e = 0; e < 40; e += 2)
          n[e >> 1] >> 4 >= 8 && a[e] && (a[e] = a[e].toUpperCase()),
            (15 & n[e >> 1]) >= 8 &&
              a[e + 1] &&
              (a[e + 1] = a[e + 1].toUpperCase());
        let o = `0x${a.join("")}`;
        return c.set(`${e}.${t}`, o), o;
      }
      function l(e, t) {
        if (!(0, o.P)(e, { strict: !1 })) throw new n.M({ address: e });
        return u(e, t);
      }
    },
    34354: (e, t, r) => {
      r.d(t, { P: () => o });
      var n = r(46140),
        i = r(40814);
      let s = /^0x[a-fA-F0-9]{40}$/,
        a = new n.A(8192);
      function o(e, t) {
        let { strict: r = !0 } = t ?? {},
          n = `${e}.${r}`;
        if (a.has(n)) return a.get(n);
        let o =
          !!s.test(e) && (e.toLowerCase() === e || !r || (0, i.o)(e) === e);
        return a.set(n, o), o;
      }
    },
    81770: (e, t, r) => {
      r.d(t, { h: () => s });
      var n = r(61117),
        i = r(34354);
      function s(e, t) {
        if (!(0, i.P)(e, { strict: !1 })) throw new n.M({ address: e });
        if (!(0, i.P)(t, { strict: !1 })) throw new n.M({ address: t });
        return e.toLowerCase() === t.toLowerCase();
      }
    },
    40874: (e, t, r) => {
      r.d(t, { M: () => i });
      var n = r(89780);
      function i({ blockNumber: e, chain: t, contract: r }) {
        let i = t?.contracts?.[r];
        if (!i) throw new n.rj({ chain: t, contract: { name: r } });
        if (e && i.blockCreated && i.blockCreated > e)
          throw new n.rj({
            blockNumber: e,
            chain: t,
            contract: { name: r, blockCreated: i.blockCreated },
          });
        return i.address;
      }
    },
    95389: (e, t, r) => {
      r.d(t, { l: () => s });
      var n = r(90305);
      let i = {
        bytes: new Uint8Array(),
        dataView: new DataView(new ArrayBuffer(0)),
        position: 0,
        positionReadCount: new Map(),
        recursiveReadCount: 0,
        recursiveReadLimit: Number.POSITIVE_INFINITY,
        assertReadLimit() {
          if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new n.hX({
              count: this.recursiveReadCount + 1,
              limit: this.recursiveReadLimit,
            });
        },
        assertPosition(e) {
          if (e < 0 || e > this.bytes.length - 1)
            throw new n.SK({ length: this.bytes.length, position: e });
        },
        decrementPosition(e) {
          if (e < 0) throw new n.B4({ offset: e });
          let t = this.position - e;
          this.assertPosition(t), (this.position = t);
        },
        getReadCount(e) {
          return this.positionReadCount.get(e || this.position) || 0;
        },
        incrementPosition(e) {
          if (e < 0) throw new n.B4({ offset: e });
          let t = this.position + e;
          this.assertPosition(t), (this.position = t);
        },
        inspectByte(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectBytes(e, t) {
          let r = t ?? this.position;
          return this.assertPosition(r + e - 1), this.bytes.subarray(r, r + e);
        },
        inspectUint8(e) {
          let t = e ?? this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectUint16(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 1), this.dataView.getUint16(t);
        },
        inspectUint24(e) {
          let t = e ?? this.position;
          return (
            this.assertPosition(t + 2),
            (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
          );
        },
        inspectUint32(e) {
          let t = e ?? this.position;
          return this.assertPosition(t + 3), this.dataView.getUint32(t);
        },
        pushByte(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushBytes(e) {
          this.assertPosition(this.position + e.length - 1),
            this.bytes.set(e, this.position),
            (this.position += e.length);
        },
        pushUint8(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushUint16(e) {
          this.assertPosition(this.position + 1),
            this.dataView.setUint16(this.position, e),
            (this.position += 2);
        },
        pushUint24(e) {
          this.assertPosition(this.position + 2),
            this.dataView.setUint16(this.position, e >> 8),
            this.dataView.setUint8(this.position + 2, 255 & e),
            (this.position += 3);
        },
        pushUint32(e) {
          this.assertPosition(this.position + 3),
            this.dataView.setUint32(this.position, e),
            (this.position += 4);
        },
        readByte() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectByte();
          return this.position++, e;
        },
        readBytes(e, t) {
          this.assertReadLimit(), this._touch();
          let r = this.inspectBytes(e);
          return (this.position += t ?? e), r;
        },
        readUint8() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint8();
          return (this.position += 1), e;
        },
        readUint16() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint16();
          return (this.position += 2), e;
        },
        readUint24() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint24();
          return (this.position += 3), e;
        },
        readUint32() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint32();
          return (this.position += 4), e;
        },
        get remaining() {
          return this.bytes.length - this.position;
        },
        setPosition(e) {
          let t = this.position;
          return (
            this.assertPosition(e),
            (this.position = e),
            () => (this.position = t)
          );
        },
        _touch() {
          if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
          let e = this.getReadCount();
          this.positionReadCount.set(this.position, e + 1),
            e > 0 && this.recursiveReadCount++;
        },
      };
      function s(e, { recursiveReadLimit: t = 8192 } = {}) {
        let r = Object.create(i);
        return (
          (r.bytes = e),
          (r.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
          (r.positionReadCount = new Map()),
          (r.recursiveReadLimit = t),
          r
        );
      }
    },
    16704: (e, t, r) => {
      function n(e) {
        return "string" == typeof e[0]
          ? i(e)
          : (function (e) {
              let t = 0;
              for (let r of e) t += r.length;
              let r = new Uint8Array(t),
                n = 0;
              for (let t of e) r.set(t, n), (n += t.length);
              return r;
            })(e);
      }
      function i(e) {
        return `0x${e.reduce((e, t) => e + t.replace("0x", ""), "")}`;
      }
      r.d(t, { aP: () => i, xW: () => n });
    },
    11601: (e, t, r) => {
      r.d(t, { q: () => n });
      function n(e, { strict: t = !0 } = {}) {
        return (
          !!e &&
          "string" == typeof e &&
          (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
        );
      }
    },
    33085: (e, t, r) => {
      r.d(t, { db: () => s, eV: () => i });
      var n = r(57643);
      function i(e, { dir: t, size: r = 32 } = {}) {
        return "string" == typeof e
          ? s(e, { dir: t, size: r })
          : (function (e, { dir: t, size: r = 32 } = {}) {
              if (null === r) return e;
              if (e.length > r)
                throw new n.Fl({
                  size: e.length,
                  targetSize: r,
                  type: "bytes",
                });
              let i = new Uint8Array(r);
              for (let n = 0; n < r; n++) {
                let s = "right" === t;
                i[s ? n : r - n - 1] = e[s ? n : e.length - n - 1];
              }
              return i;
            })(e, { dir: t, size: r });
      }
      function s(e, { dir: t, size: r = 32 } = {}) {
        if (null === r) return e;
        let i = e.replace("0x", "");
        if (i.length > 2 * r)
          throw new n.Fl({
            size: Math.ceil(i.length / 2),
            targetSize: r,
            type: "hex",
          });
        return `0x${i["right" === t ? "padEnd" : "padStart"](2 * r, "0")}`;
      }
    },
    91149: (e, t, r) => {
      r.d(t, { E: () => i });
      var n = r(11601);
      function i(e) {
        return (0, n.q)(e, { strict: !1 })
          ? Math.ceil((e.length - 2) / 2)
          : e.length;
      }
    },
    22162: (e, t, r) => {
      r.d(t, { A1: () => u, di: () => a, iN: () => l });
      var n = r(57643),
        i = r(11601),
        s = r(91149);
      function a(e, t, r, { strict: n } = {}) {
        return (0, i.q)(e, { strict: !1 })
          ? l(e, t, r, { strict: n })
          : u(e, t, r, { strict: n });
      }
      function o(e, t) {
        if ("number" == typeof t && t > 0 && t > (0, s.E)(e) - 1)
          throw new n.ii({ offset: t, position: "start", size: (0, s.E)(e) });
      }
      function c(e, t, r) {
        if (
          "number" == typeof t &&
          "number" == typeof r &&
          (0, s.E)(e) !== r - t
        )
          throw new n.ii({ offset: r, position: "end", size: (0, s.E)(e) });
      }
      function u(e, t, r, { strict: n } = {}) {
        o(e, t);
        let i = e.slice(t, r);
        return n && c(i, t, r), i;
      }
      function l(e, t, r, { strict: n } = {}) {
        o(e, t);
        let i = `0x${e
          .replace("0x", "")
          .slice((t ?? 0) * 2, (r ?? e.length) * 2)}`;
        return n && c(i, t, r), i;
      }
    },
    67368: (e, t, r) => {
      r.d(t, { B: () => n });
      function n(e, { dir: t = "left" } = {}) {
        let r = "string" == typeof e ? e.replace("0x", "") : e,
          i = 0;
        for (
          let e = 0;
          e < r.length - 1 &&
          "0" === r["left" === t ? e : r.length - e - 1].toString();
          e++
        )
          i++;
        return ((r = "left" === t ? r.slice(i) : r.slice(0, r.length - i)),
        "string" == typeof e)
          ? (1 === r.length && "right" === t && (r = `${r}0`),
            `0x${r.length % 2 == 1 ? `0${r}` : r}`)
          : r;
      }
    },
    45732: (e, t, r) => {
      r.d(t, {
        IQ: () => d,
        ME: () => l,
        Nx: () => u,
        Sl: () => o,
        uU: () => c,
      });
      var n = r(93970),
        i = r(91149),
        s = r(67368),
        a = r(76397);
      function o(e, { size: t }) {
        if ((0, i.E)(e) > t)
          throw new n.u({ givenSize: (0, i.E)(e), maxSize: t });
      }
      function c(e, t = {}) {
        let { signed: r } = t;
        t.size && o(e, { size: t.size });
        let n = BigInt(e);
        if (!r) return n;
        let i = (e.length - 2) / 2;
        return n <= (1n << (8n * BigInt(i) - 1n)) - 1n
          ? n
          : n - BigInt(`0x${"f".padStart(2 * i, "f")}`) - 1n;
      }
      function u(e, t = {}) {
        let r = e;
        if (
          (t.size && (o(r, { size: t.size }), (r = (0, s.B)(r))),
          "0x00" === (0, s.B)(r))
        )
          return !1;
        if ("0x01" === (0, s.B)(r)) return !0;
        throw new n.H2(r);
      }
      function l(e, t = {}) {
        return Number(c(e, t));
      }
      function d(e, t = {}) {
        let r = (0, a.aT)(e);
        return (
          t.size &&
            (o(r, { size: t.size }), (r = (0, s.B)(r, { dir: "right" }))),
          new TextDecoder().decode(r)
        );
      }
    },
    76397: (e, t, r) => {
      r.d(t, { Af: () => f, ZJ: () => u, aT: () => h });
      var n = r(80477),
        i = r(11601),
        s = r(33085),
        a = r(45732),
        o = r(98979);
      let c = new TextEncoder();
      function u(e, t = {}) {
        return "number" == typeof e || "bigint" == typeof e
          ? h((0, o.cK)(e, t))
          : "boolean" == typeof e
          ? (function (e, t = {}) {
              let r = new Uint8Array(1);
              return ((r[0] = Number(e)), "number" == typeof t.size)
                ? ((0, a.Sl)(r, { size: t.size }),
                  (0, s.eV)(r, { size: t.size }))
                : r;
            })(e, t)
          : (0, i.q)(e)
          ? h(e, t)
          : f(e, t);
      }
      let l = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function d(e) {
        return e >= l.zero && e <= l.nine
          ? e - l.zero
          : e >= l.A && e <= l.F
          ? e - (l.A - 10)
          : e >= l.a && e <= l.f
          ? e - (l.a - 10)
          : void 0;
      }
      function h(e, t = {}) {
        let r = e;
        t.size &&
          ((0, a.Sl)(r, { size: t.size }),
          (r = (0, s.eV)(r, { dir: "right", size: t.size })));
        let i = r.slice(2);
        i.length % 2 && (i = `0${i}`);
        let o = i.length / 2,
          c = new Uint8Array(o);
        for (let e = 0, t = 0; e < o; e++) {
          let r = d(i.charCodeAt(t++)),
            s = d(i.charCodeAt(t++));
          if (void 0 === r || void 0 === s)
            throw new n.C(
              `Invalid byte sequence ("${i[t - 2]}${i[t - 1]}" in "${i}").`
            );
          c[e] = 16 * r + s;
        }
        return c;
      }
      function f(e, t = {}) {
        let r = c.encode(e);
        return "number" == typeof t.size
          ? ((0, a.Sl)(r, { size: t.size }),
            (0, s.eV)(r, { dir: "right", size: t.size }))
          : r;
      }
    },
    98979: (e, t, r) => {
      r.d(t, {
        $P: () => c,
        My: () => u,
        cK: () => l,
        i3: () => h,
        nj: () => o,
      });
      var n = r(93970),
        i = r(33085),
        s = r(45732);
      let a = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function o(e, t = {}) {
        return "number" == typeof e || "bigint" == typeof e
          ? l(e, t)
          : "string" == typeof e
          ? h(e, t)
          : "boolean" == typeof e
          ? c(e, t)
          : u(e, t);
      }
      function c(e, t = {}) {
        let r = `0x${Number(e)}`;
        return "number" == typeof t.size
          ? ((0, s.Sl)(r, { size: t.size }), (0, i.eV)(r, { size: t.size }))
          : r;
      }
      function u(e, t = {}) {
        let r = "";
        for (let t = 0; t < e.length; t++) r += a[e[t]];
        let n = `0x${r}`;
        return "number" == typeof t.size
          ? ((0, s.Sl)(n, { size: t.size }),
            (0, i.eV)(n, { dir: "right", size: t.size }))
          : n;
      }
      function l(e, t = {}) {
        let r;
        let { signed: s, size: a } = t,
          o = BigInt(e);
        a
          ? (r = s
              ? (1n << (8n * BigInt(a) - 1n)) - 1n
              : 2n ** (8n * BigInt(a)) - 1n)
          : "number" == typeof e && (r = BigInt(Number.MAX_SAFE_INTEGER));
        let c = "bigint" == typeof r && s ? -r - 1n : 0;
        if ((r && o > r) || o < c) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new n.Ty({
            max: r ? `${r}${t}` : void 0,
            min: `${c}${t}`,
            signed: s,
            size: a,
            value: `${e}${t}`,
          });
        }
        let u = `0x${(s && o < 0
          ? (1n << BigInt(8 * a)) + BigInt(o)
          : o
        ).toString(16)}`;
        return a ? (0, i.eV)(u, { size: a }) : u;
      }
      let d = new TextEncoder();
      function h(e, t = {}) {
        return u(d.encode(e), t);
      }
    },
    68843: (e, t, r) => {
      r.d(t, { q: () => i });
      var n = r(11601);
      function i(e) {
        if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]"))
          return null;
        let t = `0x${e.slice(1, 65)}`;
        return (0, n.q)(t) ? t : null;
      }
    },
    7617: (e, t, r) => {
      r.d(t, { J: () => a });
      var n = r(4382),
        i = r(80477),
        s = r(88085);
      function a(e, t) {
        if (!(e instanceof i.C)) return !1;
        let r = e.walk((e) => e instanceof s.M);
        return (
          r instanceof s.M &&
          (!!(
            r.data?.errorName === "ResolverNotFound" ||
            r.data?.errorName === "ResolverWildcardNotSupported" ||
            r.data?.errorName === "ResolverNotContract" ||
            r.data?.errorName === "ResolverError" ||
            r.data?.errorName === "HttpError" ||
            r.reason?.includes(
              "Wildcard on non-extended resolvers is not supported"
            )
          ) ||
            ("reverse" === t && r.reason === n.fD[50]))
        );
      }
    },
    30517: (e, t, r) => {
      r.d(t, { k: () => c });
      var n = r(16704),
        i = r(76397),
        s = r(98979),
        a = r(36933),
        o = r(68843);
      function c(e) {
        let t = new Uint8Array(32).fill(0);
        if (!e) return (0, s.My)(t);
        let r = e.split(".");
        for (let e = r.length - 1; e >= 0; e -= 1) {
          let s = (0, o.q)(r[e]),
            c = s ? (0, i.ZJ)(s) : (0, a.S)((0, i.Af)(r[e]), "bytes");
          t = (0, a.S)((0, n.xW)([t, c]), "bytes");
        }
        return (0, s.My)(t);
      }
    },
    35055: (e, t, r) => {
      r.d(t, { F: () => o });
      var n = r(76397),
        i = r(98979),
        s = r(36933),
        a = r(68843);
      function o(e) {
        let t = e.replace(/^\.|\.$/gm, "");
        if (0 === t.length) return new Uint8Array(1);
        let r = new Uint8Array((0, n.Af)(t).byteLength + 2),
          o = 0,
          c = t.split(".");
        for (let e = 0; e < c.length; e++) {
          let t = (0, n.Af)(c[e]);
          if (t.byteLength > 255) {
            var u;
            t = (0, n.Af)(
              ((u = (function (e) {
                let t = new Uint8Array(32).fill(0);
                return e ? (0, a.q)(e) || (0, s.S)((0, n.Af)(e)) : (0, i.My)(t);
              })(c[e])),
              `[${u.slice(2)}]`)
            );
          }
          (r[o] = t.length), r.set(t, o + 1), (o += t.length + 1);
        }
        return r.byteLength !== o + 1 ? r.slice(0, o + 1) : r;
      }
    },
    14303: (e, t, r) => {
      r.d(t, { d: () => a });
      var n = r(88085),
        i = r(87939),
        s = r(90563);
      function a(e, { docsPath: t, ...r }) {
        let a = (() => {
          let t = (0, s.l)(e, r);
          return t instanceof i.RM ? e : t;
        })();
        return new n.zX(a, { docsPath: t, ...r });
      }
    },
    80305: (e, t, r) => {
      r.d(t, { j: () => c });
      var n = r(36991),
        i = r(80477),
        s = r(88085),
        a = r(40928),
        o = r(76790);
      function c(
        e,
        { abi: t, address: r, args: c, docsPath: u, functionName: l, sender: d }
      ) {
        let h =
            e instanceof s.$S
              ? e
              : e instanceof i.C
              ? e.walk((e) => "data" in e) || e.walk()
              : {},
          { code: f, data: p, details: y, message: b, shortMessage: m } = h,
          g =
            e instanceof n.O
              ? new s.rR({ functionName: l })
              : [3, o.bq.code].includes(f) && (p || y || b || m)
              ? new s.M({
                  abi: t,
                  data: "object" == typeof p ? p.data : p,
                  functionName: l,
                  message: h instanceof a.J8 ? y : m ?? b,
                })
              : e;
        return new s.bG(g, {
          abi: t,
          args: c,
          contractAddress: r,
          docsPath: u,
          functionName: l,
          sender: d,
        });
      }
    },
    90563: (e, t, r) => {
      r.d(t, { l: () => s });
      var n = r(80477),
        i = r(87939);
      function s(e, t) {
        let r = (e.details || "").toLowerCase(),
          s = e instanceof n.C ? e.walk((e) => e?.code === i.A7.code) : e;
        return s instanceof n.C
          ? new i.A7({ cause: e, message: s.details })
          : i.A7.nodeMessage.test(r)
          ? new i.A7({ cause: e, message: e.details })
          : i.BG.nodeMessage.test(r)
          ? new i.BG({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : i.jj.nodeMessage.test(r)
          ? new i.jj({ cause: e, maxFeePerGas: t?.maxFeePerGas })
          : i.K0.nodeMessage.test(r)
          ? new i.K0({ cause: e, nonce: t?.nonce })
          : i.Oh.nodeMessage.test(r)
          ? new i.Oh({ cause: e, nonce: t?.nonce })
          : i.vW.nodeMessage.test(r)
          ? new i.vW({ cause: e, nonce: t?.nonce })
          : i.k5.nodeMessage.test(r)
          ? new i.k5({ cause: e })
          : i.lY.nodeMessage.test(r)
          ? new i.lY({ cause: e, gas: t?.gas })
          : i.Fo.nodeMessage.test(r)
          ? new i.Fo({ cause: e, gas: t?.gas })
          : i.uC.nodeMessage.test(r)
          ? new i.uC({ cause: e })
          : i.lN.nodeMessage.test(r)
          ? new i.lN({
              cause: e,
              maxFeePerGas: t?.maxFeePerGas,
              maxPriorityFeePerGas: t?.maxPriorityFeePerGas,
            })
          : new i.RM({ cause: e });
      }
    },
    50910: (e, t, r) => {
      r.d(t, { g: () => n });
      function n(e, { method: t }) {
        let r = {};
        return (
          "fallback" === e.transport.type &&
            e.transport.onResponse?.(
              ({ method: e, response: n, status: i, transport: s }) => {
                "success" === i && t === e && (r[n] = s.request);
              }
            ),
          (t) => r[t] || e.request
        );
      }
    },
    55878: (e, t, r) => {
      r.d(t, { $: () => i });
      var n = r(6035);
      function i(e) {
        let t = (e.transactions ?? []).map((e) =>
          "string" == typeof e ? e : (0, n.uP)(e)
        );
        return {
          ...e,
          baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
          blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
          difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
          excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
          gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
          gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
          hash: e.hash ? e.hash : null,
          logsBloom: e.logsBloom ? e.logsBloom : null,
          nonce: e.nonce ? e.nonce : null,
          number: e.number ? BigInt(e.number) : null,
          size: e.size ? BigInt(e.size) : void 0,
          timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
          transactions: t,
          totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null,
        };
      }
    },
    24058: (e, t, r) => {
      r.d(t, { o: () => n });
      function n(e, { format: t }) {
        if (!t) return {};
        let r = {};
        return (
          !(function t(n) {
            for (let i of Object.keys(n))
              i in e && (r[i] = e[i]),
                n[i] &&
                  "object" == typeof n[i] &&
                  !Array.isArray(n[i]) &&
                  t(n[i]);
          })(t(e || {})),
          r
        );
      }
    },
    58981: (e, t, r) => {
      r.d(t, { e: () => n });
      function n(e, { args: t, eventName: r } = {}) {
        return {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          logIndex: e.logIndex ? Number(e.logIndex) : null,
          transactionHash: e.transactionHash ? e.transactionHash : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          ...(r ? { args: t, eventName: r } : {}),
        };
      }
    },
    6035: (e, t, r) => {
      r.d(t, { b4: () => i, uP: () => s });
      var n = r(45732);
      let i = {
        "0x0": "legacy",
        "0x1": "eip2930",
        "0x2": "eip1559",
        "0x3": "eip4844",
        "0x4": "eip7702",
      };
      function s(e) {
        let t = {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          chainId: e.chainId ? (0, n.ME)(e.chainId) : void 0,
          gas: e.gas ? BigInt(e.gas) : void 0,
          gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
          maxFeePerBlobGas: e.maxFeePerBlobGas
            ? BigInt(e.maxFeePerBlobGas)
            : void 0,
          maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
          maxPriorityFeePerGas: e.maxPriorityFeePerGas
            ? BigInt(e.maxPriorityFeePerGas)
            : void 0,
          nonce: e.nonce ? (0, n.ME)(e.nonce) : void 0,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          type: e.type ? i[e.type] : void 0,
          typeHex: e.type ? e.type : void 0,
          value: e.value ? BigInt(e.value) : void 0,
          v: e.v ? BigInt(e.v) : void 0,
        };
        return (
          e.authorizationList &&
            (t.authorizationList = e.authorizationList.map((e) => ({
              contractAddress: e.address,
              chainId: Number(e.chainId),
              nonce: Number(e.nonce),
              r: e.r,
              s: e.s,
              yParity: Number(e.yParity),
            }))),
          (t.yParity = (() => {
            if (e.yParity) return Number(e.yParity);
            if ("bigint" == typeof t.v) {
              if (0n === t.v || 27n === t.v) return 0;
              if (1n === t.v || 28n === t.v) return 1;
              if (t.v >= 35n) return t.v % 2n === 0n ? 1 : 0;
            }
          })()),
          "legacy" === t.type &&
            (delete t.accessList,
            delete t.maxFeePerBlobGas,
            delete t.maxFeePerGas,
            delete t.maxPriorityFeePerGas,
            delete t.yParity),
          "eip2930" === t.type &&
            (delete t.maxFeePerBlobGas,
            delete t.maxFeePerGas,
            delete t.maxPriorityFeePerGas),
          "eip1559" === t.type && delete t.maxFeePerBlobGas,
          t
        );
      }
    },
    53864: (e, t, r) => {
      r.d(t, { Bv: () => s });
      var n = r(98979);
      let i = {
        legacy: "0x0",
        eip2930: "0x1",
        eip1559: "0x2",
        eip4844: "0x3",
        eip7702: "0x4",
      };
      function s(e) {
        let t = {};
        return (
          void 0 !== e.authorizationList &&
            (t.authorizationList = e.authorizationList.map((e) => ({
              address: e.contractAddress,
              r: e.r,
              s: e.s,
              chainId: (0, n.cK)(e.chainId),
              nonce: (0, n.cK)(e.nonce),
              ...(void 0 !== e.yParity
                ? { yParity: (0, n.cK)(e.yParity) }
                : {}),
              ...(void 0 !== e.v && void 0 === e.yParity
                ? { v: (0, n.cK)(e.v) }
                : {}),
            }))),
          void 0 !== e.accessList && (t.accessList = e.accessList),
          void 0 !== e.blobVersionedHashes &&
            (t.blobVersionedHashes = e.blobVersionedHashes),
          void 0 !== e.blobs &&
            ("string" != typeof e.blobs[0]
              ? (t.blobs = e.blobs.map((e) => (0, n.My)(e)))
              : (t.blobs = e.blobs)),
          void 0 !== e.data && (t.data = e.data),
          void 0 !== e.from && (t.from = e.from),
          void 0 !== e.gas && (t.gas = (0, n.cK)(e.gas)),
          void 0 !== e.gasPrice && (t.gasPrice = (0, n.cK)(e.gasPrice)),
          void 0 !== e.maxFeePerBlobGas &&
            (t.maxFeePerBlobGas = (0, n.cK)(e.maxFeePerBlobGas)),
          void 0 !== e.maxFeePerGas &&
            (t.maxFeePerGas = (0, n.cK)(e.maxFeePerGas)),
          void 0 !== e.maxPriorityFeePerGas &&
            (t.maxPriorityFeePerGas = (0, n.cK)(e.maxPriorityFeePerGas)),
          void 0 !== e.nonce && (t.nonce = (0, n.cK)(e.nonce)),
          void 0 !== e.to && (t.to = e.to),
          void 0 !== e.type && (t.type = i[e.type]),
          void 0 !== e.value && (t.value = (0, n.cK)(e.value)),
          t
        );
      }
    },
    72447: (e, t, r) => {
      r.d(t, { T: () => n });
      function n(e, t, r) {
        let n = e[t.name];
        if ("function" == typeof n) return n;
        let i = e[r];
        return "function" == typeof i ? i : (r) => t(e, r);
      }
    },
    36933: (e, t, r) => {
      r.d(t, { S: () => O });
      var n = r(99393);
      let i = BigInt(0x100000000 - 1),
        s = BigInt(32),
        a = (e, t, r) => (e << r) | (t >>> (32 - r)),
        o = (e, t, r) => (t << r) | (e >>> (32 - r)),
        c = (e, t, r) => (t << (r - 32)) | (e >>> (64 - r)),
        u = (e, t, r) => (e << (r - 32)) | (t >>> (64 - r));
      var l = r(98071);
      let d = [],
        h = [],
        f = [],
        p = BigInt(0),
        y = BigInt(1),
        b = BigInt(2),
        m = BigInt(7),
        g = BigInt(256),
        v = BigInt(113);
      for (let e = 0, t = y, r = 1, n = 0; e < 24; e++) {
        ([r, n] = [n, (2 * r + 3 * n) % 5]),
          d.push(2 * (5 * n + r)),
          h.push((((e + 1) * (e + 2)) / 2) % 64);
        let i = p;
        for (let e = 0; e < 7; e++)
          (t = ((t << y) ^ ((t >> m) * v)) % g) & b &&
            (i ^= y << ((y << BigInt(e)) - y));
        f.push(i);
      }
      let [w, x] = (function (e, t = !1) {
          let r = new Uint32Array(e.length),
            n = new Uint32Array(e.length);
          for (let a = 0; a < e.length; a++) {
            let { h: o, l: c } = (function (e, t = !1) {
              return t
                ? { h: Number(e & i), l: Number((e >> s) & i) }
                : { h: 0 | Number((e >> s) & i), l: 0 | Number(e & i) };
            })(e[a], t);
            [r[a], n[a]] = [o, c];
          }
          return [r, n];
        })(f, !0),
        E = (e, t, r) => (r > 32 ? c(e, t, r) : a(e, t, r)),
        P = (e, t, r) => (r > 32 ? u(e, t, r) : o(e, t, r));
      class I extends l.Vw {
        constructor(e, t, r, i = !1, s = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = r),
            (this.enableXOF = i),
            (this.rounds = s),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, n.Fe)(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, l.DH)(this.state));
        }
        keccak() {
          l.qv || (0, l.Fc)(this.state32),
            (function (e, t = 24) {
              let r = new Uint32Array(10);
              for (let n = 24 - t; n < 24; n++) {
                for (let t = 0; t < 10; t++)
                  r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                for (let t = 0; t < 10; t += 2) {
                  let n = (t + 8) % 10,
                    i = (t + 2) % 10,
                    s = r[i],
                    a = r[i + 1],
                    o = E(s, a, 1) ^ r[n],
                    c = P(s, a, 1) ^ r[n + 1];
                  for (let r = 0; r < 50; r += 10)
                    (e[t + r] ^= o), (e[t + r + 1] ^= c);
                }
                let t = e[2],
                  i = e[3];
                for (let r = 0; r < 24; r++) {
                  let n = h[r],
                    s = E(t, i, n),
                    a = P(t, i, n),
                    o = d[r];
                  (t = e[o]), (i = e[o + 1]), (e[o] = s), (e[o + 1] = a);
                }
                for (let t = 0; t < 50; t += 10) {
                  for (let n = 0; n < 10; n++) r[n] = e[t + n];
                  for (let n = 0; n < 10; n++)
                    e[t + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10];
                }
                (e[0] ^= w[n]), (e[1] ^= x[n]);
              }
              r.fill(0);
            })(this.state32, this.rounds),
            l.qv || (0, l.Fc)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          (0, n.CC)(this);
          let { blockLen: t, state: r } = this,
            i = (e = (0, l.ZJ)(e)).length;
          for (let n = 0; n < i; ) {
            let s = Math.min(t - this.pos, i - n);
            for (let t = 0; t < s; t++) r[this.pos++] ^= e[n++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: r, blockLen: n } = this;
          (e[r] ^= t),
            (128 & t) != 0 && r === n - 1 && this.keccak(),
            (e[n - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          (0, n.CC)(this, !1), (0, n.DO)(e), this.finish();
          let t = this.state,
            { blockLen: r } = this;
          for (let n = 0, i = e.length; n < i; ) {
            this.posOut >= r && this.keccak();
            let s = Math.min(r - this.posOut, i - n);
            e.set(t.subarray(this.posOut, this.posOut + s), n),
              (this.posOut += s),
              (n += s);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return (0, n.Fe)(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (((0, n.Ht)(e, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: r,
            outputLen: n,
            rounds: i,
            enableXOF: s,
          } = this;
          return (
            e || (e = new I(t, r, n, s, i)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = i),
            (e.suffix = r),
            (e.outputLen = n),
            (e.enableXOF = s),
            (e.destroyed = this.destroyed),
            e
          );
        }
      }
      let C = (0, l.ld)(() => new I(136, 1, 32));
      var B = r(11601),
        $ = r(76397),
        A = r(98979);
      function O(e, t) {
        let r = C((0, B.q)(e, { strict: !1 }) ? (0, $.ZJ)(e) : e);
        return "bytes" === (t || "hex") ? r : (0, A.nj)(r);
      }
    },
    94490: (e, t, r) => {
      r.d(t, { h: () => n });
      let n = r(82018).k;
    },
    44720: (e, t, r) => {
      r.d(t, { V: () => s });
      var n = r(22162),
        i = r(82018);
      let s = (e) => (0, n.di)((0, i.k)(e), 0, 4);
    },
    82018: (e, t, r) => {
      r.d(t, { k: () => d });
      var n = r(76397),
        i = r(36933);
      let s = (e) => (0, i.S)((0, n.ZJ)(e));
      var a = r(6463);
      let o = /^tuple(?<array>(\[(\d*)\])*)$/;
      function c(e) {
        let t = "",
          r = e.length;
        for (let n = 0; n < r; n++)
          (t += (function e(t) {
            let r = t.type;
            if (o.test(t.type) && "components" in t) {
              r = "(";
              let n = t.components.length;
              for (let i = 0; i < n; i++)
                (r += e(t.components[i])), i < n - 1 && (r += ", ");
              let i = (0, a.Yv)(o, t.type);
              return (r += `)${i?.array ?? ""}`), e({ ...t, type: r });
            }
            return ("indexed" in t && t.indexed && (r = `${r} indexed`), t.name)
              ? `${r} ${t.name}`
              : r;
          })(e[n])),
            n !== r - 1 && (t += ", ");
        return t;
      }
      var u = r(80477);
      let l = (e) =>
        (function (e) {
          let t = !0,
            r = "",
            n = 0,
            i = "",
            s = !1;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            if (
              (["(", ")", ","].includes(o) && (t = !0),
              "(" === o && n++,
              ")" === o && n--,
              t)
            ) {
              if (0 === n) {
                if (" " === o && ["event", "function", ""].includes(i)) i = "";
                else if (((i += o), ")" === o)) {
                  s = !0;
                  break;
                }
                continue;
              }
              if (" " === o) {
                "," !== e[a - 1] &&
                  "," !== r &&
                  ",(" !== r &&
                  ((r = ""), (t = !1));
                continue;
              }
              (i += o), (r += o);
            }
          }
          if (!s) throw new u.C("Unable to normalize signature.");
          return i;
        })(
          "string" == typeof e
            ? e
            : (function (e) {
                return "function" === e.type
                  ? `function ${e.name}(${c(e.inputs)})${
                      e.stateMutability && "nonpayable" !== e.stateMutability
                        ? ` ${e.stateMutability}`
                        : ""
                    }${e.outputs?.length ? ` returns (${c(e.outputs)})` : ""}`
                  : "event" === e.type
                  ? `event ${e.name}(${c(e.inputs)})`
                  : "error" === e.type
                  ? `error ${e.name}(${c(e.inputs)})`
                  : "constructor" === e.type
                  ? `constructor(${c(e.inputs)})${
                      "payable" === e.stateMutability ? " payable" : ""
                    }`
                  : "fallback" === e.type
                  ? `fallback() external${
                      "payable" === e.stateMutability ? " payable" : ""
                    }`
                  : "receive() external payable";
              })(e)
        );
      function d(e) {
        return s(l(e));
      }
    },
    46140: (e, t, r) => {
      r.d(t, { A: () => n });
      class n extends Map {
        constructor(e) {
          super(),
            Object.defineProperty(this, "maxSize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
        get(e) {
          let t = super.get(e);
          return (
            super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t
          );
        }
        set(e, t) {
          if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
            let e = this.keys().next().value;
            e && this.delete(e);
          }
          return this;
        }
      }
    },
    88429: (e, t, r) => {
      r.d(t, { lB: () => a });
      let n = new Map(),
        i = new Map(),
        s = 0;
      function a(e, t, r) {
        let a = ++s,
          o = () => n.get(e) || [],
          c = () => {
            let t = o();
            n.set(
              e,
              t.filter((e) => e.id !== a)
            );
          },
          u = () => {
            let t = o();
            if (!t.some((e) => e.id === a)) return;
            let r = i.get(e);
            1 === t.length && r && r(), c();
          },
          l = o();
        if ((n.set(e, [...l, { id: a, fns: t }]), l && l.length > 0)) return u;
        let d = {};
        for (let e in t)
          d[e] = (...t) => {
            let r = o();
            if (0 !== r.length) for (let n of r) n.fns[e]?.(...t);
          };
        let h = r(d);
        return "function" == typeof h && i.set(e, h), u;
      }
    },
    92342: (e, t, r) => {
      r.d(t, { w: () => i });
      var n = r(23646);
      function i(e, { emitOnBegin: t, initialWaitTime: r, interval: i }) {
        let s = !0,
          a = () => (s = !1);
        return (
          (async () => {
            let o;
            t && (o = await e({ unpoll: a }));
            let c = (await r?.(o)) ?? i;
            await (0, n.u)(c);
            let u = async () => {
              s && (await e({ unpoll: a }), await (0, n.u)(i), u());
            };
            u();
          })(),
          a
        );
      }
    },
    40304: (e, t, r) => {
      r.d(t, { u: () => s });
      var n = r(30400);
      let i = new Map();
      function s({ fn: e, id: t, shouldSplitBatch: r, wait: s = 0, sort: a }) {
        let o = async () => {
            let t = l();
            c();
            let r = t.map(({ args: e }) => e);
            0 !== r.length &&
              e(r)
                .then((e) => {
                  a && Array.isArray(e) && e.sort(a);
                  for (let r = 0; r < t.length; r++) {
                    let { resolve: n } = t[r];
                    n?.([e[r], e]);
                  }
                })
                .catch((e) => {
                  for (let r = 0; r < t.length; r++) {
                    let { reject: n } = t[r];
                    n?.(e);
                  }
                });
          },
          c = () => i.delete(t),
          u = () => l().map(({ args: e }) => e),
          l = () => i.get(t) || [],
          d = (e) => i.set(t, [...l(), e]);
        return {
          flush: c,
          async schedule(e) {
            let { promise: t, resolve: i, reject: a } = (0, n.Y)();
            return (
              (r?.([...u(), e]) && o(), l().length > 0)
                ? d({ args: e, resolve: i, reject: a })
                : (d({ args: e, resolve: i, reject: a }), setTimeout(o, s)),
              t
            );
          },
        };
      }
    },
    30400: (e, t, r) => {
      r.d(t, { Y: () => n });
      function n() {
        let e = () => void 0,
          t = () => void 0;
        return {
          promise: new Promise((r, n) => {
            (e = r), (t = n);
          }),
          resolve: e,
          reject: t,
        };
      }
    },
    9869: (e, t, r) => {
      r.d(t, { b: () => i });
      var n = r(23646);
      function i(
        e,
        { delay: t = 100, retryCount: r = 2, shouldRetry: s = () => !0 } = {}
      ) {
        return new Promise((i, a) => {
          let o = async ({ count: c = 0 } = {}) => {
            let u = async ({ error: e }) => {
              let r = "function" == typeof t ? t({ count: c, error: e }) : t;
              r && (await (0, n.u)(r)), o({ count: c + 1 });
            };
            try {
              let t = await e();
              i(t);
            } catch (e) {
              if (c < r && (await s({ count: c, error: e })))
                return u({ error: e });
              a(e);
            }
          };
          o();
        });
      }
    },
    7702: (e, t, r) => {
      r.d(t, { BD: () => n, Ge: () => i });
      let n = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        i =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
    },
    34540: (e, t, r) => {
      r.d(t, { A: () => o });
      var n = r(36933),
        i = r(16704),
        s = r(91149),
        a = r(98979);
      function o(e, t) {
        return (0, n.S)(
          (function (e) {
            let t =
                "string" == typeof e
                  ? (0, a.i3)(e)
                  : "string" == typeof e.raw
                  ? e.raw
                  : (0, a.My)(e.raw),
              r = (0, a.i3)(`\x19Ethereum Signed Message:
${(0, s.E)(t)}`);
            return (0, i.xW)([r, t]);
          })(e),
          t
        );
      }
    },
    41132: (e, t, r) => {
      r.d(t, { Zh: () => c });
      var n = r(46304),
        i = r(16704),
        s = r(98979),
        a = r(36933),
        o = r(37939);
      function c(e) {
        let { domain: t = {}, message: r, primaryType: n } = e,
          s = { EIP712Domain: (0, o.H4)({ domain: t }), ...e.types };
        (0, o.$$)({ domain: t, message: r, primaryType: n, types: s });
        let c = ["0x1901"];
        return (
          t &&
            c.push(
              (function ({ domain: e, types: t }) {
                return u({ data: e, primaryType: "EIP712Domain", types: t });
              })({ domain: t, types: s })
            ),
          "EIP712Domain" !== n &&
            c.push(u({ data: r, primaryType: n, types: s })),
          (0, a.S)((0, i.xW)(c))
        );
      }
      function u({ data: e, primaryType: t, types: r }) {
        let i = (function e({ data: t, primaryType: r, types: i }) {
          let o = [{ type: "bytes32" }],
            c = [
              (function ({ primaryType: e, types: t }) {
                let r = (0, s.nj)(
                  (function ({ primaryType: e, types: t }) {
                    let r = "",
                      n = (function e(
                        { primaryType: t, types: r },
                        n = new Set()
                      ) {
                        let i = t.match(/^\w*/u),
                          s = i?.[0];
                        if (n.has(s) || void 0 === r[s]) return n;
                        for (let t of (n.add(s), r[s]))
                          e({ primaryType: t.type, types: r }, n);
                        return n;
                      })({ primaryType: e, types: t });
                    for (let i of (n.delete(e), [e, ...Array.from(n).sort()]))
                      r += `${i}(${t[i]
                        .map(({ name: e, type: t }) => `${t} ${e}`)
                        .join(",")})`;
                    return r;
                  })({ primaryType: e, types: t })
                );
                return (0, a.S)(r);
              })({ primaryType: r, types: i }),
            ];
          for (let u of i[r]) {
            let [r, l] = (function t({ types: r, name: i, type: o, value: c }) {
              if (void 0 !== r[o])
                return [
                  { type: "bytes32" },
                  (0, a.S)(e({ data: c, primaryType: o, types: r })),
                ];
              if ("bytes" === o) {
                let e = c.length % 2 ? "0" : "";
                return (
                  (c = `0x${e + c.slice(2)}`),
                  [{ type: "bytes32" }, (0, a.S)(c)]
                );
              }
              if ("string" === o)
                return [{ type: "bytes32" }, (0, a.S)((0, s.nj)(c))];
              if (o.lastIndexOf("]") === o.length - 1) {
                let e = o.slice(0, o.lastIndexOf("[")),
                  s = c.map((n) => t({ name: i, type: e, types: r, value: n }));
                return [
                  { type: "bytes32" },
                  (0, a.S)(
                    (0, n.h)(
                      s.map(([e]) => e),
                      s.map(([, e]) => e)
                    )
                  ),
                ];
              }
              return [{ type: o }, c];
            })({ types: i, name: u.name, type: u.type, value: t[u.name] });
            o.push(r), c.push(l);
          }
          return (0, n.h)(o, c);
        })({ data: e, primaryType: t, types: r });
        return (0, a.S)(i);
      }
    },
    29157: (e, t, r) => {
      r.d(t, { x: () => l });
      var n = r(40814),
        i = r(36933),
        s = r(11601),
        a = r(45732),
        o = r(98979);
      async function c({ hash: e, signature: t }) {
        let n = (0, s.q)(e) ? e : (0, o.nj)(e),
          { secp256k1: i } = await Promise.resolve().then(r.bind(r, 75908)),
          c = (() => {
            if ("object" == typeof t && "r" in t && "s" in t) {
              let { r: e, s: r, v: n, yParity: s } = t,
                o = u(Number(s ?? n));
              return new i.Signature((0, a.uU)(e), (0, a.uU)(r)).addRecoveryBit(
                o
              );
            }
            let e = (0, s.q)(t) ? t : (0, o.nj)(t),
              r = u((0, a.ME)(`0x${e.slice(130)}`));
            return i.Signature.fromCompact(e.substring(2, 130)).addRecoveryBit(
              r
            );
          })()
            .recoverPublicKey(n.substring(2))
            .toHex(!1);
        return `0x${c}`;
      }
      function u(e) {
        if (0 === e || 1 === e) return e;
        if (27 === e) return 0;
        if (28 === e) return 1;
        throw Error("Invalid yParityOrV value");
      }
      async function l({ hash: e, signature: t }) {
        return (function (e) {
          let t = (0, i.S)(`0x${e.substring(4)}`).substring(26);
          return (0, n.o)(`0x${t}`);
        })(await c({ hash: e, signature: t }));
      }
    },
    52368: (e, t, r) => {
      r.d(t, { yH: () => u });
      var n = r(61117),
        i = r(57643),
        s = r(56044),
        a = r(34354),
        o = r(98979);
      function c(e) {
        if (e && 0 !== e.length)
          return e.reduce((e, { slot: t, value: r }) => {
            if (66 !== t.length)
              throw new i.NV({ size: t.length, targetSize: 66, type: "hex" });
            if (66 !== r.length)
              throw new i.NV({ size: r.length, targetSize: 66, type: "hex" });
            return (e[t] = r), e;
          }, {});
      }
      function u(e) {
        if (!e) return;
        let t = {};
        for (let { address: r, ...i } of e) {
          if (!(0, a.P)(r, { strict: !1 })) throw new n.M({ address: r });
          if (t[r]) throw new s.Hi({ address: r });
          t[r] = (function (e) {
            let { balance: t, nonce: r, state: n, stateDiff: i, code: a } = e,
              u = {};
            if (
              (void 0 !== a && (u.code = a),
              void 0 !== t && (u.balance = (0, o.cK)(t)),
              void 0 !== r && (u.nonce = (0, o.cK)(r)),
              void 0 !== n && (u.state = c(n)),
              void 0 !== i)
            ) {
              if (u.state) throw new s.ft();
              u.stateDiff = c(i);
            }
            return u;
          })(i);
        }
        return t;
      }
    },
    66692: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (e, t, r) =>
        JSON.stringify(
          e,
          (e, r) => {
            let n = "bigint" == typeof r ? r.toString() : r;
            return "function" == typeof t ? t(e, n) : n;
          },
          r
        );
    },
    73056: (e, t, r) => {
      r.d(t, { c: () => u });
      var n = r(98722);
      let i = 2n ** 256n - 1n;
      var s = r(61117),
        a = r(87939),
        o = r(45757),
        c = r(34354);
      function u(e) {
        let {
            account: t,
            gasPrice: r,
            maxFeePerGas: u,
            maxPriorityFeePerGas: l,
            to: d,
          } = e,
          h = t ? (0, n.J)(t) : void 0;
        if (h && !(0, c.P)(h.address)) throw new s.M({ address: h.address });
        if (d && !(0, c.P)(d)) throw new s.M({ address: d });
        if (void 0 !== r && (void 0 !== u || void 0 !== l)) throw new o.n3();
        if (u && u > i) throw new a.BG({ maxFeePerGas: u });
        if (l && u && l > u)
          throw new a.lN({ maxFeePerGas: u, maxPriorityFeePerGas: l });
      }
    },
    37939: (e, t, r) => {
      r.d(t, { H4: () => b, v8: () => p, $$: () => y });
      var n = r(36991),
        i = r(61117),
        s = r(66692),
        a = r(80477);
      class o extends a.C {
        constructor({ domain: e }) {
          super(`Invalid domain "${(0, s.A)(e)}".`, {
            metaMessages: ["Must be a valid EIP-712 domain."],
          });
        }
      }
      class c extends a.C {
        constructor({ primaryType: e, types: t }) {
          super(
            `Invalid primary type \`${e}\` must be one of \`${JSON.stringify(
              Object.keys(t)
            )}\`.`,
            {
              docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
              metaMessages: [
                "Check that the primary type is a key in `types`.",
              ],
            }
          );
        }
      }
      class u extends a.C {
        constructor({ type: e }) {
          super(`Struct type "${e}" is invalid.`, {
            metaMessages: ["Struct type must not be a Solidity type."],
            name: "InvalidStructTypeError",
          });
        }
      }
      var l = r(34354),
        d = r(91149),
        h = r(98979),
        f = r(7702);
      function p(e) {
        let { domain: t, message: r, primaryType: n, types: i } = e,
          a = (e, t) => {
            let r = { ...t };
            for (let t of e) {
              let { name: e, type: n } = t;
              "address" === n && (r[e] = r[e].toLowerCase());
            }
            return r;
          },
          o = i.EIP712Domain && t ? a(i.EIP712Domain, t) : {},
          c = (() => {
            if ("EIP712Domain" !== n) return a(i[n], r);
          })();
        return (0, s.A)({ domain: o, message: c, primaryType: n, types: i });
      }
      function y(e) {
        let { domain: t, message: r, primaryType: s, types: a } = e,
          p = (e, t) => {
            for (let r of e) {
              let { name: e, type: s } = r,
                o = t[e],
                c = s.match(f.Ge);
              if (c && ("number" == typeof o || "bigint" == typeof o)) {
                let [e, t, r] = c;
                (0, h.cK)(o, {
                  signed: "int" === t,
                  size: Number.parseInt(r) / 8,
                });
              }
              if ("address" === s && "string" == typeof o && !(0, l.P)(o))
                throw new i.M({ address: o });
              let y = s.match(f.BD);
              if (y) {
                let [e, t] = y;
                if (t && (0, d.E)(o) !== Number.parseInt(t))
                  throw new n.BI({
                    expectedSize: Number.parseInt(t),
                    givenSize: (0, d.E)(o),
                  });
              }
              let b = a[s];
              b &&
                ((function (e) {
                  if (
                    "address" === e ||
                    "bool" === e ||
                    "string" === e ||
                    e.startsWith("bytes") ||
                    e.startsWith("uint") ||
                    e.startsWith("int")
                  )
                    throw new u({ type: e });
                })(s),
                p(b, o));
            }
          };
        if (a.EIP712Domain && t) {
          if ("object" != typeof t) throw new o({ domain: t });
          p(a.EIP712Domain, t);
        }
        if ("EIP712Domain" !== s) {
          if (a[s]) p(a[s], r);
          else throw new c({ primaryType: s, types: a });
        }
      }
      function b({ domain: e }) {
        return [
          "string" == typeof e?.name && { name: "name", type: "string" },
          e?.version && { name: "version", type: "string" },
          "number" == typeof e?.chainId && { name: "chainId", type: "uint256" },
          e?.verifyingContract && {
            name: "verifyingContract",
            type: "address",
          },
          e?.salt && { name: "salt", type: "bytes32" },
        ].filter(Boolean);
      }
    },
    43071: (e, t, r) => {
      let n;
      r.d(t, { L: () => s });
      let i = 256;
      function s(e = 11) {
        if (!n || i + e > 512) {
          (n = ""), (i = 0);
          for (let e = 0; e < 256; e++)
            n += ((256 + 256 * Math.random()) | 0).toString(16).substring(1);
        }
        return n.substring(i, i++ + e);
      }
    },
    69595: (e, t, r) => {
      r.d(t, { c: () => s });
      var n = r(57317),
        i = r(89888);
      function s(e, t = "wei") {
        return (0, i.J)(e, n.eL[t]);
      }
    },
    18773: (e, t, r) => {
      r.d(t, { Q: () => s });
      var n = r(57317),
        i = r(89888);
      function s(e, t = "wei") {
        return (0, i.J)(e, n.sz[t]);
      }
    },
    89888: (e, t, r) => {
      r.d(t, { J: () => n });
      function n(e, t) {
        let r = e.toString(),
          n = r.startsWith("-");
        n && (r = r.slice(1));
        let [i, s] = [
          (r = r.padStart(t, "0")).slice(0, r.length - t),
          r.slice(r.length - t),
        ];
        return (
          (s = s.replace(/(0+)$/, "")),
          `${n ? "-" : ""}${i || "0"}${s ? `.${s}` : ""}`
        );
      }
    },
    23646: (e, t, r) => {
      r.d(t, { u: () => n });
      async function n(e) {
        return new Promise((t) => setTimeout(t, e));
      }
    },
    33832: (e, t, r) => {
      r.d(t, { WagmiContext: () => s, WagmiProvider: () => a });
      var n = r(12115),
        i = r(71953);
      let s = (0, n.createContext)(void 0);
      function a(e) {
        let { children: t, config: r } = e;
        return (0, n.createElement)(
          i.Hydrate,
          e,
          (0, n.createElement)(s.Provider, { value: r }, t)
        );
      }
    },
    35965: (e, t, r) => {
      r.d(t, { useAccount: () => l });
      var n = r(12443),
        i = r(23454),
        s = r(57342),
        a = r(36919),
        o = r(12115),
        c = r(18010);
      let u = (e) => "object" == typeof e && !Array.isArray(e);
      function l() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, s.useConfig)(e);
        return (function (e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : t,
            n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : a.b,
            i = (0, o.useRef)([]),
            s = (0, c.useSyncExternalStoreWithSelector)(
              e,
              t,
              r,
              (e) => e,
              (e, t) => {
                if (u(e) && u(t) && i.current.length) {
                  for (let r of i.current) if (!n(e[r], t[r])) return !1;
                  return !0;
                }
                return n(e, t);
              }
            );
          return (0, o.useMemo)(() => {
            if (u(s)) {
              let e = { ...s },
                t = {};
              for (let [r, n] of Object.entries(e))
                t = {
                  ...t,
                  [r]: {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (i.current.includes(r) || i.current.push(r), n),
                  },
                };
              return Object.defineProperties(e, t), e;
            }
            return s;
          }, [s]);
        })(
          (e) => (0, n.F)(t, { onChange: e }),
          () => (0, i.s)(t)
        );
      }
    },
    38759: (e, t, r) => {
      r.d(t, { useAccountEffect: () => a });
      var n = r(12443),
        i = r(12115),
        s = r(57342);
      function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { onConnect: t, onDisconnect: r } = e,
          a = (0, s.useConfig)(e);
        (0, i.useEffect)(
          () =>
            (0, n.F)(a, {
              onChange(e, n) {
                if (
                  ("reconnecting" === n.status ||
                    ("connecting" === n.status && void 0 === n.address)) &&
                  "connected" === e.status
                ) {
                  let {
                      address: r,
                      addresses: i,
                      chain: s,
                      chainId: a,
                      connector: o,
                    } = e,
                    c = "reconnecting" === n.status || void 0 === n.status;
                  null == t ||
                    t({
                      address: r,
                      addresses: i,
                      chain: s,
                      chainId: a,
                      connector: o,
                      isReconnected: c,
                    });
                } else
                  "connected" === n.status &&
                    "disconnected" === e.status &&
                    (null == r || r());
              },
            }),
          [a, t, r]
        );
      }
    },
    91616: (e, t, r) => {
      r.d(t, { useBalance: () => b });
      var n = r(45732),
        i = r(67368),
        s = r(89888),
        a = r(53765),
        o = r(43247),
        c = r(87831),
        u = r(81992);
      async function l(e, t) {
        let {
          address: r,
          blockNumber: u,
          blockTag: l,
          chainId: h,
          token: f,
          unit: p = "ether",
        } = t;
        if (f)
          try {
            return await d(e, {
              balanceAddress: r,
              chainId: h,
              symbolType: "string",
              tokenAddress: f,
            });
          } catch (t) {
            if ("ContractFunctionExecutionError" === t.name) {
              let t = await d(e, {
                  balanceAddress: r,
                  chainId: h,
                  symbolType: "bytes32",
                  tokenAddress: f,
                }),
                s = (0, n.IQ)((0, i.B)(t.symbol, { dir: "right" }));
              return { ...t, symbol: s };
            }
            throw t;
          }
        let y = e.getClient({ chainId: h }),
          b = (0, o.T)(y, a.r, "getBalance"),
          m = await b(
            u ? { address: r, blockNumber: u } : { address: r, blockTag: l }
          ),
          g = e.chains.find((e) => e.id === h) ?? y.chain;
        return {
          decimals: g.nativeCurrency.decimals,
          formatted: (0, s.J)(m, (0, c.l)(p)),
          symbol: g.nativeCurrency.symbol,
          value: m,
        };
      }
      async function d(e, t) {
        let {
            balanceAddress: r,
            chainId: n,
            symbolType: i,
            tokenAddress: a,
            unit: o,
          } = t,
          l = {
            abi: [
              {
                type: "function",
                name: "balanceOf",
                stateMutability: "view",
                inputs: [{ type: "address" }],
                outputs: [{ type: "uint256" }],
              },
              {
                type: "function",
                name: "decimals",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: "uint8" }],
              },
              {
                type: "function",
                name: "symbol",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: i }],
              },
            ],
            address: a,
          },
          [d, h, f] = await (0, u.I)(e, {
            allowFailure: !1,
            contracts: [
              { ...l, functionName: "balanceOf", args: [r], chainId: n },
              { ...l, functionName: "decimals", chainId: n },
              { ...l, functionName: "symbol", chainId: n },
            ],
          }),
          p = (0, s.J)(d ?? "0", (0, c.l)(o ?? h));
        return { decimals: h, formatted: p, symbol: f, value: d };
      }
      var h = r(23905),
        f = r(97489),
        p = r(48517),
        y = r(57342);
      function b() {
        var e, t;
        let r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: n, query: i = {} } = r,
          s = (0, y.useConfig)(r),
          a = (0, p.useChainId)({ config: s }),
          o = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: r, scopeKey: n, ...i } = t[1];
                if (!r) throw Error("address is required");
                return (await l(e, { ...i, address: r })) ?? null;
              },
              queryKey: (function (e = {}) {
                return ["balance", (0, h.xO)(e)];
              })(t),
            };
          })(s, {
            ...r,
            chainId: null !== (e = r.chainId) && void 0 !== e ? e : a,
          }),
          c = !!(n && (null === (t = i.enabled) || void 0 === t || t));
        return (0, f.IT)({ ...i, ...o, enabled: c });
      }
    },
    48517: (e, t, r) => {
      function n(e) {
        return e.state.chainId;
      }
      r.d(t, { useChainId: () => a });
      var i = r(12115),
        s = r(57342);
      function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, s.useConfig)(e);
        return (0, i.useSyncExternalStore)(
          (e) =>
            (function (e, t) {
              let { onChange: r } = t;
              return e.subscribe((e) => e.chainId, r);
            })(t, { onChange: e }),
          () => n(t),
          () => n(t)
        );
      }
    },
    23308: (e, t, r) => {
      r.d(t, { useChains: () => c });
      var n = r(36919);
      let i = [];
      function s(e) {
        let t = e.chains;
        return (0, n.b)(i, t) ? i : ((i = t), t);
      }
      var a = r(12115),
        o = r(57342);
      function c() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, o.useConfig)(e);
        return (0, a.useSyncExternalStore)(
          (e) =>
            (function (e, t) {
              let { onChange: r } = t;
              return e._internal.chains.subscribe((e, t) => {
                r(e, t);
              });
            })(t, { onChange: e }),
          () => s(t),
          () => s(t)
        );
      }
    },
    57342: (e, t, r) => {
      r.d(t, { useConfig: () => u });
      var n = r(12115),
        i = r(33832),
        s = r(36674);
      let a = () => "wagmi@2.14.6";
      class o extends s.C {
        constructor() {
          super(...arguments),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiError",
            });
        }
        get docsBaseUrl() {
          return "https://wagmi.sh/react";
        }
        get version() {
          return a();
        }
      }
      class c extends o {
        constructor() {
          super("`useConfig` must be used within `WagmiProvider`.", {
            docsPath: "/api/WagmiProvider",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiProviderNotFoundError",
            });
        }
      }
      function u() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r =
            null !== (e = t.config) && void 0 !== e
              ? e
              : (0, n.useContext)(i.WagmiContext);
        if (!r) throw new c();
        return r;
      }
    },
    10577: (e, t, r) => {
      r.d(t, { useConnect: () => u });
      var n = r(25848),
        i = r(22537);
      async function s(e, t) {
        let r;
        if (
          (r =
            "function" == typeof t.connector
              ? e._internal.connectors.setup(t.connector)
              : t.connector).uid === e.state.current
        )
          throw new i.nM();
        try {
          e.setState((e) => ({ ...e, status: "connecting" })),
            r.emitter.emit("message", { type: "connecting" });
          let { connector: n, ...i } = t,
            s = await r.connect(i),
            a = s.accounts;
          return (
            r.emitter.off("connect", e._internal.events.connect),
            r.emitter.on("change", e._internal.events.change),
            r.emitter.on("disconnect", e._internal.events.disconnect),
            await e.storage?.setItem("recentConnectorId", r.id),
            e.setState((e) => ({
              ...e,
              connections: new Map(e.connections).set(r.uid, {
                accounts: a,
                chainId: s.chainId,
                connector: r,
              }),
              current: r.uid,
              status: "connected",
            })),
            { accounts: a, chainId: s.chainId }
          );
        } catch (t) {
          throw (
            (e.setState((e) => ({
              ...e,
              status: e.current ? "connected" : "disconnected",
            })),
            t)
          );
        }
      }
      var a = r(12115),
        o = r(57342),
        c = r(55310);
      function u() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          r = (0, o.useConfig)(e),
          {
            mutate: i,
            mutateAsync: u,
            ...l
          } = (0, n.useMutation)({
            ...t,
            mutationFn: (e) => s(r, e),
            mutationKey: ["connect"],
          });
        return (
          (0, a.useEffect)(
            () =>
              r.subscribe(
                (e) => {
                  let { status: t } = e;
                  return t;
                },
                (e, t) => {
                  "connected" === t && "disconnected" === e && l.reset();
                }
              ),
            [r, l.reset]
          ),
          {
            ...l,
            connect: i,
            connectAsync: u,
            connectors: (0, c.useConnectors)({ config: r }),
          }
        );
      }
    },
    87653: (e, t, r) => {
      r.d(t, { useConnections: () => c });
      var n = r(36919);
      let i = [];
      function s(e) {
        let t = [...e.state.connections.values()];
        return "reconnecting" === e.state.status || (0, n.b)(i, t)
          ? i
          : ((i = t), t);
      }
      var a = r(12115),
        o = r(57342);
      function c() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, o.useConfig)(e);
        return (0, a.useSyncExternalStore)(
          (e) =>
            (function (e, t) {
              let { onChange: r } = t;
              return e.subscribe(() => s(e), r, { equalityFn: n.b });
            })(t, { onChange: e }),
          () => s(t),
          () => s(t)
        );
      }
    },
    55310: (e, t, r) => {
      r.d(t, { useConnectors: () => c });
      var n = r(36919);
      let i = [];
      function s(e) {
        let t = e.connectors;
        return (0, n.b)(i, t) ? i : ((i = t), t);
      }
      var a = r(12115),
        o = r(57342);
      function c() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, o.useConfig)(e);
        return (0, a.useSyncExternalStore)(
          (e) =>
            (function (e, t) {
              let { onChange: r } = t;
              return e._internal.connectors.subscribe((e, t) => {
                r(Object.values(e), t);
              });
            })(t, { onChange: e }),
          () => s(t),
          () => s(t)
        );
      }
    },
    87486: (e, t, r) => {
      r.d(t, { useDisconnect: () => o });
      var n = r(25848);
      async function i(e, t = {}) {
        let r;
        if (t.connector) r = t.connector;
        else {
          let { connections: t, current: n } = e.state,
            i = t.get(n);
          r = i?.connector;
        }
        let n = e.state.connections;
        r &&
          (await r.disconnect(),
          r.emitter.off("change", e._internal.events.change),
          r.emitter.off("disconnect", e._internal.events.disconnect),
          r.emitter.on("connect", e._internal.events.connect),
          n.delete(r.uid)),
          e.setState((e) => {
            if (0 === n.size)
              return {
                ...e,
                connections: new Map(),
                current: null,
                status: "disconnected",
              };
            let t = n.values().next().value;
            return { ...e, connections: new Map(n), current: t.connector.uid };
          });
        {
          let t = e.state.current;
          if (!t) return;
          let r = e.state.connections.get(t)?.connector;
          if (!r) return;
          await e.storage?.setItem("recentConnectorId", r.id);
        }
      }
      var s = r(57342),
        a = r(87653);
      function o() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          r = (0, s.useConfig)(e),
          {
            mutate: o,
            mutateAsync: c,
            ...u
          } = (0, n.useMutation)({
            ...t,
            mutationFn: (e) => i(r, e),
            mutationKey: ["disconnect"],
          });
        return {
          ...u,
          connectors: (0, a.useConnections)({ config: r }).map(
            (e) => e.connector
          ),
          disconnect: o,
          disconnectAsync: c,
        };
      }
    },
    33571: (e, t, r) => {
      r.d(t, { useEnsAvatar: () => u });
      var n = r(16816),
        i = r(43247),
        s = r(23905),
        a = r(97489),
        o = r(48517),
        c = r(57342);
      function u() {
        var e, t;
        let r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { name: u, query: l = {} } = r,
          d = (0, c.useConfig)(r),
          h = (0, o.useChainId)({ config: d }),
          f = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { name: r, scopeKey: s, ...a } = t[1];
                if (!r) throw Error("name is required");
                return (function (e, t) {
                  let { chainId: r, ...s } = t,
                    a = e.getClient({ chainId: r });
                  return (0, i.T)(a, n.i, "getEnsAvatar")(s);
                })(e, { ...a, name: r });
              },
              queryKey: (function (e = {}) {
                return ["ensAvatar", (0, s.xO)(e)];
              })(t),
            };
          })(d, {
            ...r,
            chainId: null !== (e = r.chainId) && void 0 !== e ? e : h,
          }),
          p = !!(u && (null === (t = l.enabled) || void 0 === t || t));
        return (0, a.IT)({ ...l, ...f, enabled: p });
      }
    },
    98231: (e, t, r) => {
      r.d(t, { useEnsName: () => u });
      var n = r(99283),
        i = r(43247),
        s = r(23905),
        a = r(97489),
        o = r(48517),
        c = r(57342);
      function u() {
        var e, t;
        let r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: u, query: l = {} } = r,
          d = (0, c.useConfig)(r),
          h = (0, o.useChainId)({ config: d }),
          f = (function (e, t = {}) {
            return {
              async queryFn({ queryKey: t }) {
                let { address: r, scopeKey: s, ...a } = t[1];
                if (!r) throw Error("address is required");
                return (function (e, t) {
                  let { chainId: r, ...s } = t,
                    a = e.getClient({ chainId: r });
                  return (0, i.T)(a, n.s, "getEnsName")(s);
                })(e, { ...a, address: r });
              },
              queryKey: (function (e = {}) {
                return ["ensName", (0, s.xO)(e)];
              })(t),
            };
          })(d, {
            ...r,
            chainId: null !== (e = r.chainId) && void 0 !== e ? e : h,
          }),
          p = !!(u && (null === (t = l.enabled) || void 0 === t || t));
        return (0, a.IT)({ ...l, ...f, enabled: p });
      }
    },
    69237: (e, t, r) => {
      r.d(t, { usePublicClient: () => eD });
      var n = r(5756),
        i = r(16816),
        s = r(99283),
        a = r(5326),
        o = r(53107),
        c = r(91488),
        u = r(98722),
        l = r(98979),
        d = r(14303),
        h = r(24058),
        f = r(53864),
        p = r(73056);
      async function y(e, t) {
        let {
            account: r = e.account,
            blockNumber: n,
            blockTag: i = "latest",
            blobs: s,
            data: a,
            gas: o,
            gasPrice: c,
            maxFeePerBlobGas: y,
            maxFeePerGas: b,
            maxPriorityFeePerGas: m,
            to: g,
            value: v,
            ...w
          } = t,
          x = r ? (0, u.J)(r) : void 0;
        try {
          (0, p.c)(t);
          let r = n ? (0, l.cK)(n) : void 0,
            u = e.chain?.formatters?.transactionRequest?.format,
            d = (u || f.Bv)({
              ...(0, h.o)(w, { format: u }),
              from: x?.address,
              blobs: s,
              data: a,
              gas: o,
              gasPrice: c,
              maxFeePerBlobGas: y,
              maxFeePerGas: b,
              maxPriorityFeePerGas: m,
              to: g,
              value: v,
            }),
            E = await e.request({
              method: "eth_createAccessList",
              params: [d, r || i],
            });
          return { accessList: E.accessList, gasUsed: BigInt(E.gasUsed) };
        } catch (r) {
          throw (0, d.d)(r, { ...t, account: x, chain: e.chain });
        }
      }
      var b = r(50910);
      async function m(e) {
        let t = (0, b.g)(e, { method: "eth_newBlockFilter" }),
          r = await e.request({ method: "eth_newBlockFilter" });
        return { id: r, request: t(r), type: "block" };
      }
      var g = r(83631),
        v = r(98619);
      async function w(
        e,
        {
          address: t,
          args: r,
          event: n,
          events: i,
          fromBlock: s,
          strict: a,
          toBlock: o,
        } = {}
      ) {
        let c = i ?? (n ? [n] : void 0),
          u = (0, b.g)(e, { method: "eth_newFilter" }),
          d = [];
        c &&
          ((d = [
            c.flatMap((e) =>
              (0, v.R)({ abi: [e], eventName: e.name, args: r })
            ),
          ]),
          n && (d = d[0]));
        let h = await e.request({
          method: "eth_newFilter",
          params: [
            {
              address: t,
              fromBlock: "bigint" == typeof s ? (0, l.cK)(s) : s,
              toBlock: "bigint" == typeof o ? (0, l.cK)(o) : o,
              ...(d.length ? { topics: d } : {}),
            },
          ],
        });
        return {
          abi: c,
          args: r,
          eventName: n ? n.name : void 0,
          fromBlock: s,
          id: h,
          request: u(h),
          strict: !!a,
          toBlock: o,
          type: "event",
        };
      }
      var x = r(72458),
        E = r(74046),
        P = r(80305),
        I = r(72447),
        C = r(35679);
      async function B(e, t) {
        let {
            abi: r,
            address: n,
            args: i,
            functionName: s,
            dataSuffix: a,
            ...o
          } = t,
          c = (0, E.p)({ abi: r, args: i, functionName: s });
        try {
          return await (0, I.T)(
            e,
            C.Q,
            "estimateGas"
          )({ data: `${c}${a ? a.replace("0x", "") : ""}`, to: n, ...o });
        } catch (t) {
          let e = o.account ? (0, u.J)(o.account) : void 0;
          throw (0, P.j)(t, {
            abi: r,
            address: n,
            args: i,
            docsPath: "/docs/contract/estimateContractGas",
            functionName: s,
            sender: e?.address,
          });
        }
      }
      var $ = r(60710),
        A = r(50801),
        O = r(53765);
      async function S(e) {
        return BigInt(await e.request({ method: "eth_blobBaseFee" }));
      }
      var M = r(84208),
        R = r(60398),
        T = r(3267),
        F = r(30733),
        k = r(25478),
        N = r(66876),
        j = r(80477);
      class U extends j.C {
        constructor({ address: e }) {
          super(`No EIP-712 domain found on contract "${e}".`, {
            metaMessages: [
              "Ensure that:",
              `- The contract is deployed at the address "${e}".`,
              "- `eip712Domain()` function exists on the contract.",
              "- `eip712Domain()` function matches signature to ERC-5267 specification.",
            ],
            name: "Eip712DomainNotFoundError",
          });
        }
      }
      var q = r(88215);
      async function z(e, t) {
        let { address: r, factory: n, factoryData: i } = t;
        try {
          let [t, s, a, o, c, u, l] = await (0, I.T)(
            e,
            q.J,
            "readContract"
          )({
            abi: L,
            address: r,
            functionName: "eip712Domain",
            factory: n,
            factoryData: i,
          });
          return {
            domain: {
              name: s,
              version: a,
              chainId: Number(o),
              verifyingContract: c,
              salt: u,
            },
            extensions: l,
            fields: t,
          };
        } catch (e) {
          if (
            "ContractFunctionExecutionError" === e.name &&
            "ContractFunctionZeroDataError" === e.cause.name
          )
            throw new U({ address: r });
          throw e;
        }
      }
      let L = [
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            { name: "fields", type: "bytes1" },
            { name: "name", type: "string" },
            { name: "version", type: "string" },
            { name: "chainId", type: "uint256" },
            { name: "verifyingContract", type: "address" },
            { name: "salt", type: "bytes32" },
            { name: "extensions", type: "uint256[]" },
          ],
          stateMutability: "view",
          type: "function",
        },
      ];
      var D = r(87309),
        G = r(26514),
        _ = r(29946),
        H = r(58981);
      async function K(e, { filter: t }) {
        let r = t.strict ?? !1,
          n = (
            await t.request({ method: "eth_getFilterLogs", params: [t.id] })
          ).map((e) => (0, H.e)(e));
        return t.abi ? (0, _.p)({ abi: t.abi, logs: n, strict: r }) : n;
      }
      var Q = r(8269),
        V = r(45468),
        Z = r(44082),
        W = r(85933),
        J = r(71885),
        Y = r(59353),
        X = r(77184),
        ee = r(3369),
        et = r(49838);
      class er extends Error {
        constructor(e, t = {}) {
          let r = (() => {
              if (t.cause instanceof er) {
                if (t.cause.details) return t.cause.details;
                if (t.cause.shortMessage) return t.cause.shortMessage;
              }
              return t.cause?.message ? t.cause.message : t.details;
            })(),
            n = (t.cause instanceof er && t.cause.docsPath) || t.docsPath,
            i = `https://oxlib.sh${n ?? ""}`;
          super(
            [
              e || "An error occurred.",
              ...(t.metaMessages ? ["", ...t.metaMessages] : []),
              ...(r || n
                ? ["", r ? `Details: ${r}` : void 0, n ? `See: ${i}` : void 0]
                : []),
            ]
              .filter((e) => "string" == typeof e)
              .join("\n"),
            t.cause ? { cause: t.cause } : void 0
          ),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ox@0.1.1",
            }),
            (this.cause = t.cause),
            (this.details = r),
            (this.docs = i),
            (this.docsPath = n),
            (this.shortMessage = e);
        }
        walk(e) {
          return (function e(t, r) {
            return r?.(t)
              ? t
              : t && "object" == typeof t && "cause" in t && t.cause
              ? e(t.cause, r)
              : r
              ? null
              : t;
          })(this, e);
        }
      }
      function en(e, t = {}) {
        var r;
        let n;
        let { signed: i, size: s } = t,
          a = BigInt(e);
        s
          ? (n = i
              ? (1n << (8n * BigInt(s) - 1n)) - 1n
              : 2n ** (8n * BigInt(s)) - 1n)
          : "number" == typeof e && (n = BigInt(Number.MAX_SAFE_INTEGER));
        let o = "bigint" == typeof n && i ? -n - 1n : 0;
        if ((n && a > n) || a < o) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new ei({
            max: n ? `${n}${t}` : void 0,
            min: `${o}${t}`,
            signed: i,
            size: s,
            value: `${e}${t}`,
          });
        }
        let c = (i && a < 0 ? (1n << BigInt(8 * s)) + BigInt(a) : a).toString(
            16
          ),
          u = `0x${c}`;
        return s
          ? ((r = u),
            (function (e, t = {}) {
              let { dir: r, size: n = 32 } = t;
              if (0 === n) return e;
              let i = e.replace("0x", "");
              if (i.length > 2 * n)
                throw new es({
                  size: Math.ceil(i.length / 2),
                  targetSize: n,
                  type: "Hex",
                });
              return `0x${i["right" === r ? "padEnd" : "padStart"](
                2 * n,
                "0"
              )}`;
            })(r, { dir: "left", size: s }))
          : u;
      }
      (e, t) => t.toString(16).padStart(2, "0");
      class ei extends er {
        constructor({ max: e, min: t, signed: r, size: n, value: i }) {
          super(
            `Number \`${i}\` is not in safe${n ? ` ${8 * n}-bit` : ""}${
              r ? " signed" : " unsigned"
            } integer range ${
              e ? `(\`${t}\` to \`${e}\`)` : `(above \`${t}\`)`
            }`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.IntegerOutOfRangeError",
            });
        }
      }
      class es extends er {
        constructor({ size: e, targetSize: t, type: r }) {
          super(
            `${r.charAt(0).toUpperCase()}${r
              .slice(1)
              .toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Hex.SizeExceedsPaddingSizeError",
            });
        }
      }
      function ea(e) {
        return {
          address: e.address,
          amount: en(e.amount),
          index: en(e.index),
          validatorIndex: en(e.validatorIndex),
        };
      }
      var eo = r(36991),
        ec = r(88085),
        eu = r(87939),
        el = r(59719),
        ed = r(90563),
        eh = r(55878),
        ef = r(52368);
      async function ep(e, t) {
        let {
          blockNumber: r,
          blockTag: n = "latest",
          blocks: i,
          returnFullTransactions: s,
          traceTransfers: a,
          validation: o,
        } = t;
        try {
          let t = [];
          for (let e of i) {
            var c;
            let r = e.blockOverrides
                ? ((c = e.blockOverrides),
                  {
                    ...("bigint" == typeof c.baseFeePerGas && {
                      baseFeePerGas: en(c.baseFeePerGas),
                    }),
                    ...("bigint" == typeof c.blobBaseFee && {
                      blobBaseFee: en(c.blobBaseFee),
                    }),
                    ...("string" == typeof c.feeRecipient && {
                      feeRecipient: c.feeRecipient,
                    }),
                    ...("bigint" == typeof c.gasLimit && {
                      gasLimit: en(c.gasLimit),
                    }),
                    ...("bigint" == typeof c.number && {
                      number: en(c.number),
                    }),
                    ...("bigint" == typeof c.prevRandao && {
                      prevRandao: en(c.prevRandao),
                    }),
                    ...("bigint" == typeof c.time && { time: en(c.time) }),
                    ...(c.withdrawals && {
                      withdrawals: c.withdrawals.map(ea),
                    }),
                  })
                : void 0,
              n = e.calls.map((e) => {
                let t = e.account ? (0, u.J)(e.account) : void 0,
                  r = {
                    ...e,
                    data: e.abi ? (0, E.p)(e) : e.data,
                    from: e.from ?? t?.address,
                  };
                return (0, p.c)(r), (0, f.Bv)(r);
              }),
              i = e.stateOverrides ? (0, ef.yH)(e.stateOverrides) : void 0;
            t.push({ blockOverrides: r, calls: n, stateOverrides: i });
          }
          let d = r ? (0, l.cK)(r) : void 0;
          return (
            await e.request({
              method: "eth_simulateV1",
              params: [
                {
                  blockStateCalls: t,
                  returnFullTransactions: s,
                  traceTransfers: a,
                  validation: o,
                },
                d || n,
              ],
            })
          ).map((e, t) => ({
            ...(0, eh.$)(e),
            calls: e.calls.map((e, r) => {
              let { abi: n, args: s, functionName: a, to: o } = i[t].calls[r],
                c = e.error?.data ?? e.returnData,
                u = BigInt(e.gasUsed),
                l = e.logs?.map((e) => H.e(e)),
                d = "0x1" === e.status ? "success" : "failure",
                h = n ? (0, el.e)({ abi: n, data: c, functionName: a }) : null,
                f = (() => {
                  let t;
                  if (
                    "success" !== d &&
                    (e.error?.data === "0x"
                      ? (t = new eo.O())
                      : e.error && (t = new ec.$S(e.error)),
                    t)
                  )
                    return (0, P.j)(t, {
                      abi: n ?? [],
                      address: o,
                      args: s,
                      functionName: a ?? "<unknown>",
                    });
                })();
              return {
                data: c,
                gasUsed: u,
                logs: l,
                status: d,
                ...("success" === d ? { result: h } : { error: f }),
              };
            }),
          }));
        } catch (t) {
          let e = (0, ed.l)(t, {});
          if (e instanceof eu.RM) throw t;
          throw e;
        }
      }
      var ey = r(23729),
        eb = r(91175),
        em = r(40619),
        eg = r(12444),
        ev = r(48071),
        ew = r(65724),
        ex = r(26758),
        eE = r(45898),
        eP = r(88429),
        eI = r(92342),
        eC = r(66692),
        eB = r(76790),
        e$ = r(17848),
        eA = r(75066),
        eO = r(34540);
      let eS =
          /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
        eM =
          /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
      var eR = r(81770),
        eT = r(30869);
      async function eF(e, t) {
        let {
            address: r,
            domain: n,
            message: i,
            nonce: s,
            scheme: a,
            signature: o,
            time: c = new Date(),
            ...u
          } = t,
          l = (function (e) {
            let { scheme: t, statement: r, ...n } = e.match(eS)?.groups ?? {},
              {
                chainId: i,
                expirationTime: s,
                issuedAt: a,
                notBefore: o,
                requestId: c,
                ...u
              } = e.match(eM)?.groups ?? {},
              l = e.split("Resources:")[1]?.split("\n- ").slice(1);
            return {
              ...n,
              ...u,
              ...(i ? { chainId: Number(i) } : {}),
              ...(s ? { expirationTime: new Date(s) } : {}),
              ...(a ? { issuedAt: new Date(a) } : {}),
              ...(o ? { notBefore: new Date(o) } : {}),
              ...(c ? { requestId: c } : {}),
              ...(l ? { resources: l } : {}),
              ...(t ? { scheme: t } : {}),
              ...(r ? { statement: r } : {}),
            };
          })(i);
        if (
          !l.address ||
          !(function (e) {
            let {
              address: t,
              domain: r,
              message: n,
              nonce: i,
              scheme: s,
              time: a = new Date(),
            } = e;
            if (
              (r && n.domain !== r) ||
              (i && n.nonce !== i) ||
              (s && n.scheme !== s) ||
              (n.expirationTime && a >= n.expirationTime) ||
              (n.notBefore && a < n.notBefore)
            )
              return !1;
            try {
              if (!n.address || (t && !(0, eR.h)(n.address, t))) return !1;
            } catch {
              return !1;
            }
            return !0;
          })({
            address: r,
            domain: n,
            message: l,
            nonce: s,
            scheme: a,
            time: c,
          })
        )
          return !1;
        let d = (0, eO.A)(i);
        return (0, eT.K)(e, {
          address: l.address,
          hash: d,
          signature: o,
          ...u,
        });
      }
      var ek = r(46636),
        eN = r(29665);
      function ej(e) {
        return {
          call: (t) => (0, c.T)(e, t),
          createAccessList: (t) => y(e, t),
          createBlockFilter: () => m(e),
          createContractEventFilter: (t) => (0, g.X)(e, t),
          createEventFilter: (t) => w(e, t),
          createPendingTransactionFilter: () => (0, x.O)(e),
          estimateContractGas: (t) => B(e, t),
          estimateGas: (t) => (0, C.Q)(e, t),
          getBalance: (t) => (0, O.r)(e, t),
          getBlobBaseFee: () => S(e),
          getBlock: (t) => (0, M.g)(e, t),
          getBlockNumber: (t) => (0, R.G)(e, t),
          getBlockTransactionCount: (t) => (0, T.L)(e, t),
          getBytecode: (t) => (0, k.Q)(e, t),
          getChainId: () => (0, F.T)(e),
          getCode: (t) => (0, k.Q)(e, t),
          getContractEvents: (t) => (0, N.u)(e, t),
          getEip712Domain: (t) => z(e, t),
          getEnsAddress: (t) => (0, n.B)(e, t),
          getEnsAvatar: (t) => (0, i.i)(e, t),
          getEnsName: (t) => (0, s.s)(e, t),
          getEnsResolver: (t) => (0, a.D)(e, t),
          getEnsText: (t) => (0, o.m)(e, t),
          getFeeHistory: (t) => (0, D.T)(e, t),
          estimateFeesPerGas: (t) => (0, $._)(e, t),
          getFilterChanges: (t) => (0, G.I)(e, t),
          getFilterLogs: (t) => K(e, t),
          getGasPrice: () => (0, Q.L)(e),
          getLogs: (t) => (0, V.a)(e, t),
          getProof: (t) => (0, Z.l)(e, t),
          estimateMaxPriorityFeePerGas: (t) => (0, A.b)(e, t),
          getStorageAt: (t) => (0, W.P)(e, t),
          getTransaction: (t) => (0, J.x)(e, t),
          getTransactionConfirmations: (t) => (0, Y.d)(e, t),
          getTransactionCount: (t) => (0, X.y)(e, t),
          getTransactionReceipt: (t) => (0, ee.h)(e, t),
          multicall: (t) => (0, et.C)(e, t),
          prepareTransactionRequest: (t) => (0, ek.f)(e, t),
          readContract: (t) => (0, q.J)(e, t),
          sendRawTransaction: (t) => (0, eN.L)(e, t),
          simulate: (t) => ep(e, t),
          simulateContract: (t) => (0, ey.v)(e, t),
          verifyMessage: (t) => (0, em.l)(e, t),
          verifySiweMessage: (t) => eF(e, t),
          verifyTypedData: (t) => (0, eg.w)(e, t),
          uninstallFilter: (t) => (0, eb.Z)(e, t),
          waitForTransactionReceipt: (t) => (0, ev.n)(e, t),
          watchBlocks: (t) => (0, ex.O)(e, t),
          watchBlockNumber: (t) => (0, ew.q)(e, t),
          watchContractEvent: (t) => (0, eE.q)(e, t),
          watchEvent: (t) =>
            (function (
              e,
              {
                address: t,
                args: r,
                batch: n = !0,
                event: i,
                events: s,
                fromBlock: a,
                onError: o,
                onLogs: c,
                poll: u,
                pollingInterval: l = e.pollingInterval,
                strict: d,
              }
            ) {
              let h, f;
              let p =
                  void 0 !== u
                    ? u
                    : "bigint" == typeof a ||
                      ("webSocket" !== e.transport.type &&
                        ("fallback" !== e.transport.type ||
                          "webSocket" !==
                            e.transport.transports[0].config.type)),
                y = d ?? !1;
              return p
                ? (() => {
                    let u = (0, eC.A)(["watchEvent", t, r, n, e.uid, i, l, a]);
                    return (0, eP.lB)(u, { onLogs: c, onError: o }, (o) => {
                      let c, u;
                      void 0 !== a && (c = a - 1n);
                      let d = !1,
                        h = (0, eI.w)(
                          async () => {
                            if (!d) {
                              try {
                                u = await (0, I.T)(
                                  e,
                                  w,
                                  "createEventFilter"
                                )({
                                  address: t,
                                  args: r,
                                  event: i,
                                  events: s,
                                  strict: y,
                                  fromBlock: a,
                                });
                              } catch {}
                              d = !0;
                              return;
                            }
                            try {
                              let a;
                              if (u)
                                a = await (0, I.T)(
                                  e,
                                  G.I,
                                  "getFilterChanges"
                                )({ filter: u });
                              else {
                                let n = await (0, I.T)(
                                  e,
                                  R.G,
                                  "getBlockNumber"
                                )({});
                                (a =
                                  c && c !== n
                                    ? await (0, I.T)(
                                        e,
                                        V.a,
                                        "getLogs"
                                      )({
                                        address: t,
                                        args: r,
                                        event: i,
                                        events: s,
                                        fromBlock: c + 1n,
                                        toBlock: n,
                                      })
                                    : []),
                                  (c = n);
                              }
                              if (0 === a.length) return;
                              if (n) o.onLogs(a);
                              else for (let e of a) o.onLogs([e]);
                            } catch (e) {
                              u && e instanceof eB.Di && (d = !1),
                                o.onError?.(e);
                            }
                          },
                          { emitOnBegin: !0, interval: l }
                        );
                      return async () => {
                        u &&
                          (await (0, I.T)(
                            e,
                            eb.Z,
                            "uninstallFilter"
                          )({ filter: u })),
                          h();
                      };
                    });
                  })()
                : ((h = !0),
                  (f = () => (h = !1)),
                  (async () => {
                    try {
                      let n = (() => {
                          if ("fallback" === e.transport.type) {
                            let t = e.transport.transports.find(
                              (e) => "webSocket" === e.config.type
                            );
                            return t ? t.value : e.transport;
                          }
                          return e.transport;
                        })(),
                        a = s ?? (i ? [i] : void 0),
                        u = [];
                      a &&
                        ((u = [
                          a.flatMap((e) =>
                            (0, v.R)({ abi: [e], eventName: e.name, args: r })
                          ),
                        ]),
                        i && (u = u[0]));
                      let { unsubscribe: l } = await n.subscribe({
                        params: ["logs", { address: t, topics: u }],
                        onData(e) {
                          if (!h) return;
                          let t = e.result;
                          try {
                            let { eventName: e, args: r } = (0, e$.j)({
                                abi: a ?? [],
                                data: t.data,
                                topics: t.topics,
                                strict: y,
                              }),
                              n = (0, H.e)(t, { args: r, eventName: e });
                            c([n]);
                          } catch (i) {
                            let e, r;
                            if (i instanceof eo.fo || i instanceof eo.l3) {
                              if (d) return;
                              (e = i.abiItem.name),
                                (r = i.abiItem.inputs?.some(
                                  (e) => !("name" in e && e.name)
                                ));
                            }
                            let n = (0, H.e)(t, {
                              args: r ? [] : {},
                              eventName: e,
                            });
                            c([n]);
                          }
                        },
                        onError(e) {
                          o?.(e);
                        },
                      });
                      (f = l), h || f();
                    } catch (e) {
                      o?.(e);
                    }
                  })(),
                  () => f());
            })(e, t),
          watchPendingTransactions: (t) => (0, eA.u)(e, t),
        };
      }
      var eU = r(74076);
      function eq(e, t = {}) {
        let r = (0, eU.K)(e, t);
        return r?.extend(ej);
      }
      var ez = r(18010),
        eL = r(57342);
      function eD() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, eL.useConfig)(e);
        return (0, ez.useSyncExternalStoreWithSelector)(
          (e) =>
            (function (e, t) {
              let { onChange: r } = t;
              return e.subscribe(() => eq(e), r, {
                equalityFn: (e, t) => e?.uid === t?.uid,
              });
            })(t, { onChange: e }),
          () => eq(t, e),
          () => eq(t, e),
          (e) => e,
          (e, t) =>
            (null == e ? void 0 : e.uid) === (null == t ? void 0 : t.uid)
        );
      }
    },
    86330: (e, t, r) => {
      r.d(t, { useSignMessage: () => u });
      var n = r(25848),
        i = r(87027),
        s = r(43247),
        a = r(16942);
      async function o(e, t) {
        let r;
        let { account: n, connector: o, ...c } = t;
        return (
          (r =
            "object" == typeof n && "local" === n.type
              ? e.getClient()
              : await (0, a.r)(e, { account: n, connector: o })),
          (0, s.T)(
            r,
            i.l,
            "signMessage"
          )({ ...c, ...(n ? { account: n } : {}) })
        );
      }
      var c = r(57342);
      function u() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: r } = t,
          i =
            ((e = (0, c.useConfig)(t)),
            { mutationFn: (t) => o(e, t), mutationKey: ["signMessage"] }),
          {
            mutate: s,
            mutateAsync: a,
            ...u
          } = (0, n.useMutation)({ ...r, ...i });
        return { ...u, signMessage: s, signMessageAsync: a };
      }
    },
    73103: (e, t, r) => {
      r.d(t, { useSwitchChain: () => u });
      var n = r(25848),
        i = r(22537),
        s = r(77434);
      async function a(e, t) {
        let { addEthereumChainParameter: r, chainId: n } = t,
          a = e.state.connections.get(t.connector?.uid ?? e.state.current);
        if (a) {
          let e = a.connector;
          if (!e.switchChain) throw new s.V({ connector: e });
          return await e.switchChain({
            addEthereumChainParameter: r,
            chainId: n,
          });
        }
        let o = e.chains.find((e) => e.id === n);
        if (!o) throw new i.nk();
        return e.setState((e) => ({ ...e, chainId: n })), o;
      }
      var o = r(23308),
        c = r(57342);
      function u() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          r = (0, c.useConfig)(e),
          {
            mutate: i,
            mutateAsync: s,
            ...u
          } = (0, n.useMutation)({
            ...t,
            mutationFn: (e) => a(r, e),
            mutationKey: ["switchChain"],
          });
        return {
          ...u,
          chains: (0, o.useChains)({ config: r }),
          switchChain: i,
          switchChainAsync: s,
        };
      }
    },
    71953: (e, t, r) => {
      r.d(t, { Hydrate: () => s });
      var n = r(19362),
        i = r(12115);
      function s(e) {
        let {
            children: t,
            config: r,
            initialState: s,
            reconnectOnMount: a = !0,
          } = e,
          { onMount: o } = (function (e, t) {
            let { initialState: r, reconnectOnMount: i } = t;
            return (
              r &&
                !e._internal.store.persist.hasHydrated() &&
                e.setState({
                  ...r,
                  chainId: e.chains.some((e) => e.id === r.chainId)
                    ? r.chainId
                    : e.chains[0].id,
                  connections: i ? r.connections : new Map(),
                  status: i ? "reconnecting" : "disconnected",
                }),
              {
                async onMount() {
                  e._internal.ssr &&
                    (await e._internal.store.persist.rehydrate(),
                    e._internal.mipd &&
                      e._internal.connectors.setState((t) => {
                        let r = new Set();
                        for (let e of t ?? [])
                          if (e.rdns)
                            for (let t of Array.isArray(e.rdns)
                              ? e.rdns
                              : [e.rdns])
                              r.add(t);
                        let n = [];
                        for (let t of e._internal.mipd?.getProviders() ?? []) {
                          if (r.has(t.info.rdns)) continue;
                          let i =
                              e._internal.connectors.providerDetailToConnector(
                                t
                              ),
                            s = e._internal.connectors.setup(i);
                          n.push(s);
                        }
                        return [...t, ...n];
                      })),
                    i
                      ? (0, n.M)(e)
                      : e.storage &&
                        e.setState((e) => ({ ...e, connections: new Map() }));
                },
              }
            );
          })(r, { initialState: s, reconnectOnMount: a });
        r._internal.ssr || o();
        let c = (0, i.useRef)(!0);
        return (
          (0, i.useEffect)(() => {
            if (c.current && r._internal.ssr)
              return (
                o(),
                () => {
                  c.current = !1;
                }
              );
          }, []),
          t
        );
      }
    },
    97489: (e, t, r) => {
      r.d(t, { IT: () => a, qu: () => o });
      var n = r(93233),
        i = r(12009),
        s = r(23905);
      function a(e) {
        let t = (0, n.useQuery)({ ...e, queryKeyHashFn: s.Zi });
        return (t.queryKey = e.queryKey), t;
      }
      function o(e) {
        let t = (0, i.useInfiniteQuery)({ ...e, queryKeyHashFn: s.Zi });
        return (t.queryKey = e.queryKey), t;
      }
    },
  },
]);
