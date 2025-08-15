(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2396],
  {
    7801: function (e, t, r) {
      var n, i;
      void 0 !==
        (i =
          "function" ==
          typeof (n = function () {
            var e,
              t,
              r,
              n,
              i,
              a = {},
              o = {},
              u = {
                currentLocale: "en",
                zeroFormat: null,
                nullFormat: null,
                defaultFormat: "0,0",
                scalePercentBy100: !0,
              },
              l = {
                currentLocale: u.currentLocale,
                zeroFormat: u.zeroFormat,
                nullFormat: u.nullFormat,
                defaultFormat: u.defaultFormat,
                scalePercentBy100: u.scalePercentBy100,
              };
            function s(e, t) {
              (this._input = e), (this._value = t);
            }
            return (
              ((n = function (e) {
                var t, r, o, u;
                if (n.isNumeral(e)) t = e.value();
                else if (0 === e || void 0 === e) t = 0;
                else if (null === e || i.isNaN(e)) t = null;
                else if ("string" == typeof e) {
                  if (l.zeroFormat && e === l.zeroFormat) t = 0;
                  else if (
                    (l.nullFormat && e === l.nullFormat) ||
                    !e.replace(/[^0-9]+/g, "").length
                  )
                    t = null;
                  else {
                    for (r in a)
                      if (
                        (u =
                          "function" == typeof a[r].regexps.unformat
                            ? a[r].regexps.unformat()
                            : a[r].regexps.unformat) &&
                        e.match(u)
                      ) {
                        o = a[r].unformat;
                        break;
                      }
                    t = (o = o || n._.stringToNumber)(e);
                  }
                } else t = Number(e) || null;
                return new s(e, t);
              }).version = "2.0.6"),
              (n.isNumeral = function (e) {
                return e instanceof s;
              }),
              (n._ = i =
                {
                  numberToFormat: function (e, t, r) {
                    var i,
                      a,
                      u,
                      l,
                      s,
                      c,
                      f,
                      m = o[n.options.currentLocale],
                      h = !1,
                      d = !1,
                      b = 0,
                      p = "",
                      g = "",
                      v = !1;
                    if (
                      ((a = Math.abs((e = e || 0))),
                      n._.includes(t, "(")
                        ? ((h = !0), (t = t.replace(/[\(|\)]/g, "")))
                        : (n._.includes(t, "+") || n._.includes(t, "-")) &&
                          ((s = n._.includes(t, "+")
                            ? t.indexOf("+")
                            : e < 0
                            ? t.indexOf("-")
                            : -1),
                          (t = t.replace(/[\+|\-]/g, ""))),
                      n._.includes(t, "a") &&
                        ((i = !!(i = t.match(/a(k|m|b|t)?/)) && i[1]),
                        n._.includes(t, " a") && (p = " "),
                        (t = t.replace(RegExp(p + "a[kmbt]?"), "")),
                        (a >= 1e12 && !i) || "t" === i
                          ? ((p += m.abbreviations.trillion), (e /= 1e12))
                          : (a < 1e12 && a >= 1e9 && !i) || "b" === i
                          ? ((p += m.abbreviations.billion), (e /= 1e9))
                          : (a < 1e9 && a >= 1e6 && !i) || "m" === i
                          ? ((p += m.abbreviations.million), (e /= 1e6))
                          : ((a < 1e6 && a >= 1e3 && !i) || "k" === i) &&
                            ((p += m.abbreviations.thousand), (e /= 1e3))),
                      n._.includes(t, "[.]") &&
                        ((d = !0), (t = t.replace("[.]", "."))),
                      (u = e.toString().split(".")[0]),
                      (l = t.split(".")[1]),
                      (c = t.indexOf(",")),
                      (b = (t.split(".")[0].split(",")[0].match(/0/g) || [])
                        .length),
                      l
                        ? (n._.includes(l, "[")
                            ? ((l = (l = l.replace("]", "")).split("[")),
                              (g = n._.toFixed(
                                e,
                                l[0].length + l[1].length,
                                r,
                                l[1].length
                              )))
                            : (g = n._.toFixed(e, l.length, r)),
                          (u = g.split(".")[0]),
                          (g = n._.includes(g, ".")
                            ? m.delimiters.decimal + g.split(".")[1]
                            : ""),
                          d && 0 === Number(g.slice(1)) && (g = ""))
                        : (u = n._.toFixed(e, 0, r)),
                      p &&
                        !i &&
                        Number(u) >= 1e3 &&
                        p !== m.abbreviations.trillion)
                    )
                      switch (((u = String(Number(u) / 1e3)), p)) {
                        case m.abbreviations.thousand:
                          p = m.abbreviations.million;
                          break;
                        case m.abbreviations.million:
                          p = m.abbreviations.billion;
                          break;
                        case m.abbreviations.billion:
                          p = m.abbreviations.trillion;
                      }
                    if (
                      (n._.includes(u, "-") && ((u = u.slice(1)), (v = !0)),
                      u.length < b)
                    )
                      for (var _ = b - u.length; _ > 0; _--) u = "0" + u;
                    return (
                      c > -1 &&
                        (u = u
                          .toString()
                          .replace(
                            /(\d)(?=(\d{3})+(?!\d))/g,
                            "$1" + m.delimiters.thousands
                          )),
                      0 === t.indexOf(".") && (u = ""),
                      (f = u + g + (p || "")),
                      h
                        ? (f = (h && v ? "(" : "") + f + (h && v ? ")" : ""))
                        : s >= 0
                        ? (f =
                            0 === s ? (v ? "-" : "+") + f : f + (v ? "-" : "+"))
                        : v && (f = "-" + f),
                      f
                    );
                  },
                  stringToNumber: function (e) {
                    var t,
                      r,
                      n,
                      i = o[l.currentLocale],
                      a = e,
                      u = { thousand: 3, million: 6, billion: 9, trillion: 12 };
                    if (l.zeroFormat && e === l.zeroFormat) r = 0;
                    else if (
                      (l.nullFormat && e === l.nullFormat) ||
                      !e.replace(/[^0-9]+/g, "").length
                    )
                      r = null;
                    else {
                      for (t in ((r = 1),
                      "." !== i.delimiters.decimal &&
                        (e = e
                          .replace(/\./g, "")
                          .replace(i.delimiters.decimal, ".")),
                      u))
                        if (
                          ((n = RegExp(
                            "[^a-zA-Z]" +
                              i.abbreviations[t] +
                              "(?:\\)|(\\" +
                              i.currency.symbol +
                              ")?(?:\\))?)?$"
                          )),
                          a.match(n))
                        ) {
                          r *= Math.pow(10, u[t]);
                          break;
                        }
                      r *=
                        ((e.split("-").length +
                          Math.min(
                            e.split("(").length - 1,
                            e.split(")").length - 1
                          )) %
                        2
                          ? 1
                          : -1) * Number((e = e.replace(/[^0-9\.]+/g, "")));
                    }
                    return r;
                  },
                  isNaN: function (e) {
                    return "number" == typeof e && isNaN(e);
                  },
                  includes: function (e, t) {
                    return -1 !== e.indexOf(t);
                  },
                  insert: function (e, t, r) {
                    return e.slice(0, r) + t + e.slice(r);
                  },
                  reduce: function (e, t) {
                    if (this === null)
                      throw TypeError(
                        "Array.prototype.reduce called on null or undefined"
                      );
                    if ("function" != typeof t)
                      throw TypeError(t + " is not a function");
                    var r,
                      n = Object(e),
                      i = n.length >>> 0,
                      a = 0;
                    if (3 == arguments.length) r = arguments[2];
                    else {
                      for (; a < i && !(a in n); ) a++;
                      if (a >= i)
                        throw TypeError(
                          "Reduce of empty array with no initial value"
                        );
                      r = n[a++];
                    }
                    for (; a < i; a++) a in n && (r = t(r, n[a], a, n));
                    return r;
                  },
                  multiplier: function (e) {
                    var t = e.toString().split(".");
                    return t.length < 2 ? 1 : Math.pow(10, t[1].length);
                  },
                  correctionFactor: function () {
                    var e = Array.prototype.slice.call(arguments);
                    return e.reduce(function (e, t) {
                      var r = i.multiplier(t);
                      return e > r ? e : r;
                    }, 1);
                  },
                  toFixed: function (e, t, r, n) {
                    var i,
                      a,
                      o,
                      u,
                      l = e.toString().split("."),
                      s = t - (n || 0);
                    return (
                      (o = Math.pow(
                        10,
                        (i =
                          2 === l.length
                            ? Math.min(Math.max(l[1].length, s), t)
                            : s)
                      )),
                      (u = (r(e + "e+" + i) / o).toFixed(i)),
                      n > t - i &&
                        ((a = RegExp("\\.?0{1," + (n - (t - i)) + "}$")),
                        (u = u.replace(a, ""))),
                      u
                    );
                  },
                }),
              (n.options = l),
              (n.formats = a),
              (n.locales = o),
              (n.locale = function (e) {
                return (
                  e && (l.currentLocale = e.toLowerCase()), l.currentLocale
                );
              }),
              (n.localeData = function (e) {
                if (!e) return o[l.currentLocale];
                if (!o[(e = e.toLowerCase())])
                  throw Error("Unknown locale : " + e);
                return o[e];
              }),
              (n.reset = function () {
                for (var e in u) l[e] = u[e];
              }),
              (n.zeroFormat = function (e) {
                l.zeroFormat = "string" == typeof e ? e : null;
              }),
              (n.nullFormat = function (e) {
                l.nullFormat = "string" == typeof e ? e : null;
              }),
              (n.defaultFormat = function (e) {
                l.defaultFormat = "string" == typeof e ? e : "0.0";
              }),
              (n.register = function (e, t, r) {
                if (((t = t.toLowerCase()), this[e + "s"][t]))
                  throw TypeError(t + " " + e + " already registered.");
                return (this[e + "s"][t] = r), r;
              }),
              (n.validate = function (e, t) {
                var r, i, a, o, u, l, s, c;
                if (
                  ("string" != typeof e &&
                    ((e += ""),
                    console.warn &&
                      console.warn(
                        "Numeral.js: Value is not string. It has been co-erced to: ",
                        e
                      )),
                  (e = e.trim()).match(/^\d+$/))
                )
                  return !0;
                if ("" === e) return !1;
                try {
                  s = n.localeData(t);
                } catch (e) {
                  s = n.localeData(n.locale());
                }
                return (
                  (a = s.currency.symbol),
                  (u = s.abbreviations),
                  (r = s.delimiters.decimal),
                  (i =
                    "." === s.delimiters.thousands
                      ? "\\."
                      : s.delimiters.thousands),
                  (null === (c = e.match(/^[^\d]+/)) ||
                    ((e = e.substr(1)), c[0] === a)) &&
                    (null === (c = e.match(/[^\d]+$/)) ||
                      ((e = e.slice(0, -1)),
                      c[0] === u.thousand ||
                        c[0] === u.million ||
                        c[0] === u.billion ||
                        c[0] === u.trillion)) &&
                    ((l = RegExp(i + "{2}")),
                    !e.match(/[^\d.,]/g) &&
                      !((o = e.split(r)).length > 2) &&
                      (o.length < 2
                        ? !!o[0].match(/^\d+.*\d$/) && !o[0].match(l)
                        : 1 === o[0].length
                        ? !!o[0].match(/^\d+$/) &&
                          !o[0].match(l) &&
                          !!o[1].match(/^\d+$/)
                        : !!o[0].match(/^\d+.*\d$/) &&
                          !o[0].match(l) &&
                          !!o[1].match(/^\d+$/)))
                );
              }),
              (n.fn = s.prototype =
                {
                  clone: function () {
                    return n(this);
                  },
                  format: function (e, t) {
                    var r,
                      i,
                      o,
                      u = this._value,
                      s = e || l.defaultFormat;
                    if (
                      ((t = t || Math.round), 0 === u && null !== l.zeroFormat)
                    )
                      i = l.zeroFormat;
                    else if (null === u && null !== l.nullFormat)
                      i = l.nullFormat;
                    else {
                      for (r in a)
                        if (s.match(a[r].regexps.format)) {
                          o = a[r].format;
                          break;
                        }
                      i = (o = o || n._.numberToFormat)(u, s, t);
                    }
                    return i;
                  },
                  value: function () {
                    return this._value;
                  },
                  input: function () {
                    return this._input;
                  },
                  set: function (e) {
                    return (this._value = Number(e)), this;
                  },
                  add: function (e) {
                    var t = i.correctionFactor.call(null, this._value, e);
                    return (
                      (this._value =
                        i.reduce(
                          [this._value, e],
                          function (e, r, n, i) {
                            return e + Math.round(t * r);
                          },
                          0
                        ) / t),
                      this
                    );
                  },
                  subtract: function (e) {
                    var t = i.correctionFactor.call(null, this._value, e);
                    return (
                      (this._value =
                        i.reduce(
                          [e],
                          function (e, r, n, i) {
                            return e - Math.round(t * r);
                          },
                          Math.round(this._value * t)
                        ) / t),
                      this
                    );
                  },
                  multiply: function (e) {
                    return (
                      (this._value = i.reduce(
                        [this._value, e],
                        function (e, t, r, n) {
                          var a = i.correctionFactor(e, t);
                          return (
                            (Math.round(e * a) * Math.round(t * a)) /
                            Math.round(a * a)
                          );
                        },
                        1
                      )),
                      this
                    );
                  },
                  divide: function (e) {
                    return (
                      (this._value = i.reduce(
                        [this._value, e],
                        function (e, t, r, n) {
                          var a = i.correctionFactor(e, t);
                          return Math.round(e * a) / Math.round(t * a);
                        }
                      )),
                      this
                    );
                  },
                  difference: function (e) {
                    return Math.abs(n(this._value).subtract(e).value());
                  },
                }),
              n.register("locale", "en", {
                delimiters: { thousands: ",", decimal: "." },
                abbreviations: {
                  thousand: "k",
                  million: "m",
                  billion: "b",
                  trillion: "t",
                },
                ordinal: function (e) {
                  var t = e % 10;
                  return 1 == ~~((e % 100) / 10)
                    ? "th"
                    : 1 === t
                    ? "st"
                    : 2 === t
                    ? "nd"
                    : 3 === t
                    ? "rd"
                    : "th";
                },
                currency: { symbol: "$" },
              }),
              n.register("format", "bps", {
                regexps: { format: /(BPS)/, unformat: /(BPS)/ },
                format: function (e, t, r) {
                  var i,
                    a = n._.includes(t, " BPS") ? " " : "";
                  return (
                    (e *= 1e4),
                    (t = t.replace(/\s?BPS/, "")),
                    (i = n._.numberToFormat(e, t, r)),
                    n._.includes(i, ")")
                      ? ((i = i.split("")).splice(-1, 0, a + "BPS"),
                        (i = i.join("")))
                      : (i = i + a + "BPS"),
                    i
                  );
                },
                unformat: function (e) {
                  return +(1e-4 * n._.stringToNumber(e)).toFixed(15);
                },
              }),
              (t = {
                base: 1024,
                suffixes: [
                  "B",
                  "KiB",
                  "MiB",
                  "GiB",
                  "TiB",
                  "PiB",
                  "EiB",
                  "ZiB",
                  "YiB",
                ],
              }),
              (r =
                "(" +
                (r = (e = {
                  base: 1e3,
                  suffixes: [
                    "B",
                    "KB",
                    "MB",
                    "GB",
                    "TB",
                    "PB",
                    "EB",
                    "ZB",
                    "YB",
                  ],
                }).suffixes
                  .concat(
                    t.suffixes.filter(function (t) {
                      return 0 > e.suffixes.indexOf(t);
                    })
                  )
                  .join("|")).replace("B", "B(?!PS)") +
                ")"),
              n.register("format", "bytes", {
                regexps: { format: /([0\s]i?b)/, unformat: new RegExp(r) },
                format: function (r, i, a) {
                  var o,
                    u,
                    l,
                    s = n._.includes(i, "ib") ? t : e,
                    c =
                      n._.includes(i, " b") || n._.includes(i, " ib")
                        ? " "
                        : "";
                  for (
                    o = 0, i = i.replace(/\s?i?b/, "");
                    o <= s.suffixes.length;
                    o++
                  )
                    if (
                      ((u = Math.pow(s.base, o)),
                      (l = Math.pow(s.base, o + 1)),
                      null === r || 0 === r || (r >= u && r < l))
                    ) {
                      (c += s.suffixes[o]), u > 0 && (r /= u);
                      break;
                    }
                  return n._.numberToFormat(r, i, a) + c;
                },
                unformat: function (r) {
                  var i,
                    a,
                    o = n._.stringToNumber(r);
                  if (o) {
                    for (i = e.suffixes.length - 1; i >= 0; i--) {
                      if (n._.includes(r, e.suffixes[i])) {
                        a = Math.pow(e.base, i);
                        break;
                      }
                      if (n._.includes(r, t.suffixes[i])) {
                        a = Math.pow(t.base, i);
                        break;
                      }
                    }
                    o *= a || 1;
                  }
                  return o;
                },
              }),
              n.register("format", "currency", {
                regexps: { format: /(\$)/ },
                format: function (e, t, r) {
                  var i,
                    a,
                    o = n.locales[n.options.currentLocale],
                    u = {
                      before: t.match(/^([\+|\-|\(|\s|\$]*)/)[0],
                      after: t.match(/([\+|\-|\)|\s|\$]*)$/)[0],
                    };
                  for (
                    t = t.replace(/\s?\$\s?/, ""),
                      i = n._.numberToFormat(e, t, r),
                      e >= 0
                        ? ((u.before = u.before.replace(/[\-\(]/, "")),
                          (u.after = u.after.replace(/[\-\)]/, "")))
                        : !(e < 0) ||
                          n._.includes(u.before, "-") ||
                          n._.includes(u.before, "(") ||
                          (u.before = "-" + u.before),
                      a = 0;
                    a < u.before.length;
                    a++
                  )
                    switch (u.before[a]) {
                      case "$":
                        i = n._.insert(i, o.currency.symbol, a);
                        break;
                      case " ":
                        i = n._.insert(
                          i,
                          " ",
                          a + o.currency.symbol.length - 1
                        );
                    }
                  for (a = u.after.length - 1; a >= 0; a--)
                    switch (u.after[a]) {
                      case "$":
                        i =
                          a === u.after.length - 1
                            ? i + o.currency.symbol
                            : n._.insert(
                                i,
                                o.currency.symbol,
                                -(u.after.length - (1 + a))
                              );
                        break;
                      case " ":
                        i =
                          a === u.after.length - 1
                            ? i + " "
                            : n._.insert(
                                i,
                                " ",
                                -(
                                  u.after.length -
                                  (1 + a) +
                                  o.currency.symbol.length -
                                  1
                                )
                              );
                    }
                  return i;
                },
              }),
              n.register("format", "exponential", {
                regexps: { format: /(e\+|e-)/, unformat: /(e\+|e-)/ },
                format: function (e, t, r) {
                  var i = (
                    "number" != typeof e || n._.isNaN(e)
                      ? "0e+0"
                      : e.toExponential()
                  ).split("e");
                  return (
                    (t = t.replace(/e[\+|\-]{1}0/, "")),
                    n._.numberToFormat(Number(i[0]), t, r) + "e" + i[1]
                  );
                },
                unformat: function (e) {
                  var t = n._.includes(e, "e+") ? e.split("e+") : e.split("e-"),
                    r = Number(t[0]),
                    i = Number(t[1]);
                  return (
                    (i = n._.includes(e, "e-") ? (i *= -1) : i),
                    n._.reduce(
                      [r, Math.pow(10, i)],
                      function (e, t, r, i) {
                        var a = n._.correctionFactor(e, t);
                        return (e * a * (t * a)) / (a * a);
                      },
                      1
                    )
                  );
                },
              }),
              n.register("format", "ordinal", {
                regexps: { format: /(o)/ },
                format: function (e, t, r) {
                  var i = n.locales[n.options.currentLocale],
                    a = n._.includes(t, " o") ? " " : "";
                  return (
                    (t = t.replace(/\s?o/, "")),
                    (a += i.ordinal(e)),
                    n._.numberToFormat(e, t, r) + a
                  );
                },
              }),
              n.register("format", "percentage", {
                regexps: { format: /(%)/, unformat: /(%)/ },
                format: function (e, t, r) {
                  var i,
                    a = n._.includes(t, " %") ? " " : "";
                  return (
                    n.options.scalePercentBy100 && (e *= 100),
                    (t = t.replace(/\s?\%/, "")),
                    (i = n._.numberToFormat(e, t, r)),
                    n._.includes(i, ")")
                      ? ((i = i.split("")).splice(-1, 0, a + "%"),
                        (i = i.join("")))
                      : (i = i + a + "%"),
                    i
                  );
                },
                unformat: function (e) {
                  var t = n._.stringToNumber(e);
                  return n.options.scalePercentBy100 ? 0.01 * t : t;
                },
              }),
              n.register("format", "time", {
                regexps: { format: /(:)/, unformat: /(:)/ },
                format: function (e, t, r) {
                  var n = Math.floor(e / 60 / 60),
                    i = Math.floor((e - 3600 * n) / 60),
                    a = Math.round(e - 3600 * n - 60 * i);
                  return (
                    n +
                    ":" +
                    (i < 10 ? "0" + i : i) +
                    ":" +
                    (a < 10 ? "0" + a : a)
                  );
                },
                unformat: function (e) {
                  var t = e.split(":"),
                    r = 0;
                  return (
                    3 === t.length
                      ? ((r += 3600 * Number(t[0])),
                        (r += 60 * Number(t[1])),
                        (r += Number(t[2])))
                      : 2 === t.length &&
                        ((r += 60 * Number(t[0])), (r += Number(t[1]))),
                    Number(r)
                  );
                },
              }),
              n
            );
          })
            ? n.call(t, r, t, e)
            : n) && (e.exports = i);
    },
    34416: (e, t, r) => {
      "use strict";
      r.d(t, { HydrationBoundary: () => o });
      var n = r(12115),
        i = r(79876),
        a = r(35906),
        o = (e) => {
          let { children: t, options: r = {}, state: o, queryClient: u } = e,
            l = (0, a.useQueryClient)(u),
            [s, c] = n.useState(),
            f = n.useRef(r);
          return (
            (f.current = r),
            n.useMemo(() => {
              if (o) {
                if ("object" != typeof o) return;
                let e = l.getQueryCache(),
                  t = o.queries || [],
                  r = [],
                  n = [];
                for (let i of t) {
                  let t = e.get(i.queryHash);
                  if (t) {
                    let e = i.state.dataUpdatedAt > t.state.dataUpdatedAt,
                      r =
                        null == s
                          ? void 0
                          : s.find((e) => e.queryHash === i.queryHash);
                    e &&
                      (!r || i.state.dataUpdatedAt > r.state.dataUpdatedAt) &&
                      n.push(i);
                  } else r.push(i);
                }
                r.length > 0 && (0, i.Qv)(l, { queries: r }, f.current),
                  n.length > 0 && c((e) => (e ? [...e, ...n] : n));
              }
            }, [l, s, o]),
            n.useEffect(() => {
              s && ((0, i.Qv)(l, { queries: s }, f.current), c(void 0));
            }, [l, s]),
            t
          );
        };
    },
    47583: (e, t, r) => {
      "use strict";
      r.d(t, { useIsFetching: () => o });
      var n = r(12115),
        i = r(15586),
        a = r(35906);
      function o(e, t) {
        let r = (0, a.useQueryClient)(t),
          o = r.getQueryCache();
        return n.useSyncExternalStore(
          n.useCallback((e) => o.subscribe(i.j.batchCalls(e)), [o]),
          () => r.isFetching(e),
          () => r.isFetching(e)
        );
      }
    },
    67885: (e, t, r) => {
      "use strict";
      r.d(t, { useIsMutating: () => u, useMutationState: () => s });
      var n = r(12115),
        i = r(84403),
        a = r(15586),
        o = r(35906);
      function u(e, t) {
        let r = (0, o.useQueryClient)(t);
        return s({ filters: { ...e, status: "pending" } }, r).length;
      }
      function l(e, t) {
        return e
          .findAll(t.filters)
          .map((e) => (t.select ? t.select(e) : e.state));
      }
      function s() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0,
          r = (0, o.useQueryClient)(t).getMutationCache(),
          u = n.useRef(e),
          s = n.useRef(null);
        return (
          s.current || (s.current = l(r, e)),
          n.useEffect(() => {
            u.current = e;
          }),
          n.useSyncExternalStore(
            n.useCallback(
              (e) =>
                r.subscribe(() => {
                  let t = (0, i.BH)(s.current, l(r, u.current));
                  s.current !== t && ((s.current = t), a.j.schedule(e));
                }),
              [r]
            ),
            () => s.current,
            () => s.current
          )
        );
      }
    },
  },
]);
