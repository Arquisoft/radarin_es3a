
      !(function (e) {
        var t = {};
        function n(r) {
          if (t[r]) return t[r].exports;
          var i = (t[r] = { i: r, l: !1, exports: {} });
          return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
        }
        (n.m = e),
          (n.c = t),
          (n.d = function (e, t, r) {
            n.o(e, t) ||
              Object.defineProperty(e, t, { enumerable: !0, get: r });
          }),
          (n.r = function (e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (
              (n.r(r),
              Object.defineProperty(r, "default", { enumerable: !0, value: e }),
              2 & t && "string" != typeof e)
            )
              for (var i in e)
                n.d(
                  r,
                  i,
                  function (t) {
                    return e[t];
                  }.bind(null, i)
                );
            return r;
          }),
          (n.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return n.d(t, "a", t), t;
          }),
          (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (n.p = ""),
          n((n.s = 83));
      })([
        function (e, t, n) {
          var r = n(1);
          e.exports = function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols &&
                (i = i.concat(
                  Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                  })
                )),
                i.forEach(function (t) {
                  r(e, t, n[t]);
                });
            }
            return e;
          };
        },
        function (e, t) {
          e.exports = function (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          };
        },
        function (e, t, n) {
          "use strict";
          e.exports = {
            Formats: n(20),
            Initializer: n(21),
            JSONDocument: n(51),
            JSONMapping: n(52),
            JSONPatch: n(22),
            JSONPointer: n(13),
            JSONSchema: n(53),
            Validator: n(23),
          };
        },
        function (e, t, n) {
          (e.exports = n(54).default), (e.exports.default = e.exports);
        },
        function (e, t) {
          var n;
          n = (function () {
            return this;
          })();
          try {
            n = n || Function("return this")() || (0, eval)("this");
          } catch (e) {
            "object" == typeof window && (n = window);
          }
          e.exports = n;
        },
        function (e, t, n) {
          "use strict";
          var r = n(14),
            i = n(28),
            o = n(66),
            a = n(67),
            s = n(34),
            u = n(31),
            c = n(33),
            l = n(11),
            f = n(29),
            p = n(32),
            h = n(30);
          e.exports = {
            JWA: r,
            JWK: i,
            JWKSet: o,
            JWT: a,
            JWS: s,
            Base64URLSchema: u,
            JOSEHeaderSchema: c,
            JWKSchema: l,
            JWKSetSchema: f,
            JWTClaimsSetSchema: p,
            JWTSchema: h,
          };
        },
        function (e, t, n) {
          "use strict";
          (function (e) {
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
             * @license  MIT
             */
            var r = n(55),
              i = n(56),
              o = n(57);
            function a() {
              return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
            }
            function s(e, t) {
              if (a() < t) throw new RangeError("Invalid typed array length");
              return (
                u.TYPED_ARRAY_SUPPORT
                  ? ((e = new Uint8Array(t)).__proto__ = u.prototype)
                  : (null === e && (e = new u(t)), (e.length = t)),
                e
              );
            }
            function u(e, t, n) {
              if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
                return new u(e, t, n);
              if ("number" == typeof e) {
                if ("string" == typeof t)
                  throw new Error(
                    "If encoding is specified then the first argument must be a string"
                  );
                return f(this, e);
              }
              return c(this, e, t, n);
            }
            function c(e, t, n, r) {
              if ("number" == typeof t)
                throw new TypeError('"value" argument must not be a number');
              return "undefined" != typeof ArrayBuffer &&
                t instanceof ArrayBuffer
                ? (function (e, t, n, r) {
                    if ((t.byteLength, n < 0 || t.byteLength < n))
                      throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < n + (r || 0))
                      throw new RangeError("'length' is out of bounds");
                    t =
                      void 0 === n && void 0 === r
                        ? new Uint8Array(t)
                        : void 0 === r
                        ? new Uint8Array(t, n)
                        : new Uint8Array(t, n, r);
                    u.TYPED_ARRAY_SUPPORT
                      ? ((e = t).__proto__ = u.prototype)
                      : (e = p(e, t));
                    return e;
                  })(e, t, n, r)
                : "string" == typeof t
                ? (function (e, t, n) {
                    ("string" == typeof n && "" !== n) || (n = "utf8");
                    if (!u.isEncoding(n))
                      throw new TypeError(
                        '"encoding" must be a valid string encoding'
                      );
                    var r = 0 | d(t, n),
                      i = (e = s(e, r)).write(t, n);
                    i !== r && (e = e.slice(0, i));
                    return e;
                  })(e, t, n)
                : (function (e, t) {
                    if (u.isBuffer(t)) {
                      var n = 0 | h(t.length);
                      return 0 === (e = s(e, n)).length
                        ? e
                        : (t.copy(e, 0, 0, n), e);
                    }
                    if (t) {
                      if (
                        ("undefined" != typeof ArrayBuffer &&
                          t.buffer instanceof ArrayBuffer) ||
                        "length" in t
                      )
                        return "number" != typeof t.length ||
                          (function (e) {
                            return e != e;
                          })(t.length)
                          ? s(e, 0)
                          : p(e, t);
                      if ("Buffer" === t.type && o(t.data)) return p(e, t.data);
                    }
                    throw new TypeError(
                      "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                    );
                  })(e, t);
            }
            function l(e) {
              if ("number" != typeof e)
                throw new TypeError('"size" argument must be a number');
              if (e < 0)
                throw new RangeError('"size" argument must not be negative');
            }
            function f(e, t) {
              if (
                (l(t), (e = s(e, t < 0 ? 0 : 0 | h(t))), !u.TYPED_ARRAY_SUPPORT)
              )
                for (var n = 0; n < t; ++n) e[n] = 0;
              return e;
            }
            function p(e, t) {
              var n = t.length < 0 ? 0 : 0 | h(t.length);
              e = s(e, n);
              for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
              return e;
            }
            function h(e) {
              if (e >= a())
                throw new RangeError(
                  "Attempt to allocate Buffer larger than maximum size: 0x" +
                    a().toString(16) +
                    " bytes"
                );
              return 0 | e;
            }
            function d(e, t) {
              if (u.isBuffer(e)) return e.length;
              if (
                "undefined" != typeof ArrayBuffer &&
                "function" == typeof ArrayBuffer.isView &&
                (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
              )
                return e.byteLength;
              "string" != typeof e && (e = "" + e);
              var n = e.length;
              if (0 === n) return 0;
              for (var r = !1; ; )
                switch (t) {
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return n;
                  case "utf8":
                  case "utf-8":
                  case void 0:
                    return z(e).length;
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return 2 * n;
                  case "hex":
                    return n >>> 1;
                  case "base64":
                    return J(e).length;
                  default:
                    if (r) return z(e).length;
                    (t = ("" + t).toLowerCase()), (r = !0);
                }
            }
            function y(e, t, n) {
              var r = e[t];
              (e[t] = e[n]), (e[n] = r);
            }
            function m(e, t, n, r, i) {
              if (0 === e.length) return -1;
              if (
                ("string" == typeof n
                  ? ((r = n), (n = 0))
                  : n > 2147483647
                  ? (n = 2147483647)
                  : n < -2147483648 && (n = -2147483648),
                (n = +n),
                isNaN(n) && (n = i ? 0 : e.length - 1),
                n < 0 && (n = e.length + n),
                n >= e.length)
              ) {
                if (i) return -1;
                n = e.length - 1;
              } else if (n < 0) {
                if (!i) return -1;
                n = 0;
              }
              if (("string" == typeof t && (t = u.from(t, r)), u.isBuffer(t)))
                return 0 === t.length ? -1 : v(e, t, n, r, i);
              if ("number" == typeof t)
                return (
                  (t &= 255),
                  u.TYPED_ARRAY_SUPPORT &&
                  "function" == typeof Uint8Array.prototype.indexOf
                    ? i
                      ? Uint8Array.prototype.indexOf.call(e, t, n)
                      : Uint8Array.prototype.lastIndexOf.call(e, t, n)
                    : v(e, [t], n, r, i)
                );
              throw new TypeError("val must be string, number or Buffer");
            }
            function v(e, t, n, r, i) {
              var o,
                a = 1,
                s = e.length,
                u = t.length;
              if (
                void 0 !== r &&
                ("ucs2" === (r = String(r).toLowerCase()) ||
                  "ucs-2" === r ||
                  "utf16le" === r ||
                  "utf-16le" === r)
              ) {
                if (e.length < 2 || t.length < 2) return -1;
                (a = 2), (s /= 2), (u /= 2), (n /= 2);
              }
              function c(e, t) {
                return 1 === a ? e[t] : e.readUInt16BE(t * a);
              }
              if (i) {
                var l = -1;
                for (o = n; o < s; o++)
                  if (c(e, o) === c(t, -1 === l ? 0 : o - l)) {
                    if ((-1 === l && (l = o), o - l + 1 === u)) return l * a;
                  } else -1 !== l && (o -= o - l), (l = -1);
              } else
                for (n + u > s && (n = s - u), o = n; o >= 0; o--) {
                  for (var f = !0, p = 0; p < u; p++)
                    if (c(e, o + p) !== c(t, p)) {
                      f = !1;
                      break;
                    }
                  if (f) return o;
                }
              return -1;
            }
            function g(e, t, n, r) {
              n = Number(n) || 0;
              var i = e.length - n;
              r ? (r = Number(r)) > i && (r = i) : (r = i);
              var o = t.length;
              if (o % 2 != 0) throw new TypeError("Invalid hex string");
              r > o / 2 && (r = o / 2);
              for (var a = 0; a < r; ++a) {
                var s = parseInt(t.substr(2 * a, 2), 16);
                if (isNaN(s)) return a;
                e[n + a] = s;
              }
              return a;
            }
            function w(e, t, n, r) {
              return q(z(t, e.length - n), e, n, r);
            }
            function b(e, t, n, r) {
              return q(
                (function (e) {
                  for (var t = [], n = 0; n < e.length; ++n)
                    t.push(255 & e.charCodeAt(n));
                  return t;
                })(t),
                e,
                n,
                r
              );
            }
            function _(e, t, n, r) {
              return b(e, t, n, r);
            }
            function S(e, t, n, r) {
              return q(J(t), e, n, r);
            }
            function k(e, t, n, r) {
              return q(
                (function (e, t) {
                  for (
                    var n, r, i, o = [], a = 0;
                    a < e.length && !((t -= 2) < 0);
                    ++a
                  )
                    (n = e.charCodeAt(a)),
                      (r = n >> 8),
                      (i = n % 256),
                      o.push(i),
                      o.push(r);
                  return o;
                })(t, e.length - n),
                e,
                n,
                r
              );
            }
            function E(e, t, n) {
              return 0 === t && n === e.length
                ? r.fromByteArray(e)
                : r.fromByteArray(e.slice(t, n));
            }
            function O(e, t, n) {
              n = Math.min(e.length, n);
              for (var r = [], i = t; i < n; ) {
                var o,
                  a,
                  s,
                  u,
                  c = e[i],
                  l = null,
                  f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                if (i + f <= n)
                  switch (f) {
                    case 1:
                      c < 128 && (l = c);
                      break;
                    case 2:
                      128 == (192 & (o = e[i + 1])) &&
                        (u = ((31 & c) << 6) | (63 & o)) > 127 &&
                        (l = u);
                      break;
                    case 3:
                      (o = e[i + 1]),
                        (a = e[i + 2]),
                        128 == (192 & o) &&
                          128 == (192 & a) &&
                          (u = ((15 & c) << 12) | ((63 & o) << 6) | (63 & a)) >
                            2047 &&
                          (u < 55296 || u > 57343) &&
                          (l = u);
                      break;
                    case 4:
                      (o = e[i + 1]),
                        (a = e[i + 2]),
                        (s = e[i + 3]),
                        128 == (192 & o) &&
                          128 == (192 & a) &&
                          128 == (192 & s) &&
                          (u =
                            ((15 & c) << 18) |
                            ((63 & o) << 12) |
                            ((63 & a) << 6) |
                            (63 & s)) > 65535 &&
                          u < 1114112 &&
                          (l = u);
                  }
                null === l
                  ? ((l = 65533), (f = 1))
                  : l > 65535 &&
                    ((l -= 65536),
                    r.push(((l >>> 10) & 1023) | 55296),
                    (l = 56320 | (1023 & l))),
                  r.push(l),
                  (i += f);
              }
              return (function (e) {
                var t = e.length;
                if (t <= A) return String.fromCharCode.apply(String, e);
                var n = "",
                  r = 0;
                for (; r < t; )
                  n += String.fromCharCode.apply(String, e.slice(r, (r += A)));
                return n;
              })(r);
            }
            (t.Buffer = u),
              (t.SlowBuffer = function (e) {
                +e != e && (e = 0);
                return u.alloc(+e);
              }),
              (t.INSPECT_MAX_BYTES = 50),
              (u.TYPED_ARRAY_SUPPORT =
                void 0 !== e.TYPED_ARRAY_SUPPORT
                  ? e.TYPED_ARRAY_SUPPORT
                  : (function () {
                      try {
                        var e = new Uint8Array(1);
                        return (
                          (e.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function () {
                              return 42;
                            },
                          }),
                          42 === e.foo() &&
                            "function" == typeof e.subarray &&
                            0 === e.subarray(1, 1).byteLength
                        );
                      } catch (e) {
                        return !1;
                      }
                    })()),
              (t.kMaxLength = a()),
              (u.poolSize = 8192),
              (u._augment = function (e) {
                return (e.__proto__ = u.prototype), e;
              }),
              (u.from = function (e, t, n) {
                return c(null, e, t, n);
              }),
              u.TYPED_ARRAY_SUPPORT &&
                ((u.prototype.__proto__ = Uint8Array.prototype),
                (u.__proto__ = Uint8Array),
                "undefined" != typeof Symbol &&
                  Symbol.species &&
                  u[Symbol.species] === u &&
                  Object.defineProperty(u, Symbol.species, {
                    value: null,
                    configurable: !0,
                  })),
              (u.alloc = function (e, t, n) {
                return (function (e, t, n, r) {
                  return (
                    l(t),
                    t <= 0
                      ? s(e, t)
                      : void 0 !== n
                      ? "string" == typeof r
                        ? s(e, t).fill(n, r)
                        : s(e, t).fill(n)
                      : s(e, t)
                  );
                })(null, e, t, n);
              }),
              (u.allocUnsafe = function (e) {
                return f(null, e);
              }),
              (u.allocUnsafeSlow = function (e) {
                return f(null, e);
              }),
              (u.isBuffer = function (e) {
                return !(null == e || !e._isBuffer);
              }),
              (u.compare = function (e, t) {
                if (!u.isBuffer(e) || !u.isBuffer(t))
                  throw new TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (
                  var n = e.length, r = t.length, i = 0, o = Math.min(n, r);
                  i < o;
                  ++i
                )
                  if (e[i] !== t[i]) {
                    (n = e[i]), (r = t[i]);
                    break;
                  }
                return n < r ? -1 : r < n ? 1 : 0;
              }),
              (u.isEncoding = function (e) {
                switch (String(e).toLowerCase()) {
                  case "hex":
                  case "utf8":
                  case "utf-8":
                  case "ascii":
                  case "latin1":
                  case "binary":
                  case "base64":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return !0;
                  default:
                    return !1;
                }
              }),
              (u.concat = function (e, t) {
                if (!o(e))
                  throw new TypeError(
                    '"list" argument must be an Array of Buffers'
                  );
                if (0 === e.length) return u.alloc(0);
                var n;
                if (void 0 === t)
                  for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                var r = u.allocUnsafe(t),
                  i = 0;
                for (n = 0; n < e.length; ++n) {
                  var a = e[n];
                  if (!u.isBuffer(a))
                    throw new TypeError(
                      '"list" argument must be an Array of Buffers'
                    );
                  a.copy(r, i), (i += a.length);
                }
                return r;
              }),
              (u.byteLength = d),
              (u.prototype._isBuffer = !0),
              (u.prototype.swap16 = function () {
                var e = this.length;
                if (e % 2 != 0)
                  throw new RangeError(
                    "Buffer size must be a multiple of 16-bits"
                  );
                for (var t = 0; t < e; t += 2) y(this, t, t + 1);
                return this;
              }),
              (u.prototype.swap32 = function () {
                var e = this.length;
                if (e % 4 != 0)
                  throw new RangeError(
                    "Buffer size must be a multiple of 32-bits"
                  );
                for (var t = 0; t < e; t += 4)
                  y(this, t, t + 3), y(this, t + 1, t + 2);
                return this;
              }),
              (u.prototype.swap64 = function () {
                var e = this.length;
                if (e % 8 != 0)
                  throw new RangeError(
                    "Buffer size must be a multiple of 64-bits"
                  );
                for (var t = 0; t < e; t += 8)
                  y(this, t, t + 7),
                    y(this, t + 1, t + 6),
                    y(this, t + 2, t + 5),
                    y(this, t + 3, t + 4);
                return this;
              }),
              (u.prototype.toString = function () {
                var e = 0 | this.length;
                return 0 === e
                  ? ""
                  : 0 === arguments.length
                  ? O(this, 0, e)
                  : function (e, t, n) {
                      var r = !1;
                      if (((void 0 === t || t < 0) && (t = 0), t > this.length))
                        return "";
                      if (
                        ((void 0 === n || n > this.length) && (n = this.length),
                        n <= 0)
                      )
                        return "";
                      if ((n >>>= 0) <= (t >>>= 0)) return "";
                      for (e || (e = "utf8"); ; )
                        switch (e) {
                          case "hex":
                            return j(this, t, n);
                          case "utf8":
                          case "utf-8":
                            return O(this, t, n);
                          case "ascii":
                            return P(this, t, n);
                          case "latin1":
                          case "binary":
                            return x(this, t, n);
                          case "base64":
                            return E(this, t, n);
                          case "ucs2":
                          case "ucs-2":
                          case "utf16le":
                          case "utf-16le":
                            return T(this, t, n);
                          default:
                            if (r)
                              throw new TypeError("Unknown encoding: " + e);
                            (e = (e + "").toLowerCase()), (r = !0);
                        }
                    }.apply(this, arguments);
              }),
              (u.prototype.equals = function (e) {
                if (!u.isBuffer(e))
                  throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === u.compare(this, e);
              }),
              (u.prototype.inspect = function () {
                var e = "",
                  n = t.INSPECT_MAX_BYTES;
                return (
                  this.length > 0 &&
                    ((e = this.toString("hex", 0, n).match(/.{2}/g).join(" ")),
                    this.length > n && (e += " ... ")),
                  "<Buffer " + e + ">"
                );
              }),
              (u.prototype.compare = function (e, t, n, r, i) {
                if (!u.isBuffer(e))
                  throw new TypeError("Argument must be a Buffer");
                if (
                  (void 0 === t && (t = 0),
                  void 0 === n && (n = e ? e.length : 0),
                  void 0 === r && (r = 0),
                  void 0 === i && (i = this.length),
                  t < 0 || n > e.length || r < 0 || i > this.length)
                )
                  throw new RangeError("out of range index");
                if (r >= i && t >= n) return 0;
                if (r >= i) return -1;
                if (t >= n) return 1;
                if (
                  ((t >>>= 0), (n >>>= 0), (r >>>= 0), (i >>>= 0), this === e)
                )
                  return 0;
                for (
                  var o = i - r,
                    a = n - t,
                    s = Math.min(o, a),
                    c = this.slice(r, i),
                    l = e.slice(t, n),
                    f = 0;
                  f < s;
                  ++f
                )
                  if (c[f] !== l[f]) {
                    (o = c[f]), (a = l[f]);
                    break;
                  }
                return o < a ? -1 : a < o ? 1 : 0;
              }),
              (u.prototype.includes = function (e, t, n) {
                return -1 !== this.indexOf(e, t, n);
              }),
              (u.prototype.indexOf = function (e, t, n) {
                return m(this, e, t, n, !0);
              }),
              (u.prototype.lastIndexOf = function (e, t, n) {
                return m(this, e, t, n, !1);
              }),
              (u.prototype.write = function (e, t, n, r) {
                if (void 0 === t) (r = "utf8"), (n = this.length), (t = 0);
                else if (void 0 === n && "string" == typeof t)
                  (r = t), (n = this.length), (t = 0);
                else {
                  if (!isFinite(t))
                    throw new Error(
                      "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                    );
                  (t |= 0),
                    isFinite(n)
                      ? ((n |= 0), void 0 === r && (r = "utf8"))
                      : ((r = n), (n = void 0));
                }
                var i = this.length - t;
                if (
                  ((void 0 === n || n > i) && (n = i),
                  (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
                )
                  throw new RangeError(
                    "Attempt to write outside buffer bounds"
                  );
                r || (r = "utf8");
                for (var o = !1; ; )
                  switch (r) {
                    case "hex":
                      return g(this, e, t, n);
                    case "utf8":
                    case "utf-8":
                      return w(this, e, t, n);
                    case "ascii":
                      return b(this, e, t, n);
                    case "latin1":
                    case "binary":
                      return _(this, e, t, n);
                    case "base64":
                      return S(this, e, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return k(this, e, t, n);
                    default:
                      if (o) throw new TypeError("Unknown encoding: " + r);
                      (r = ("" + r).toLowerCase()), (o = !0);
                  }
              }),
              (u.prototype.toJSON = function () {
                return {
                  type: "Buffer",
                  data: Array.prototype.slice.call(this._arr || this, 0),
                };
              });
            var A = 4096;
            function P(e, t, n) {
              var r = "";
              n = Math.min(e.length, n);
              for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
              return r;
            }
            function x(e, t, n) {
              var r = "";
              n = Math.min(e.length, n);
              for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
              return r;
            }
            function j(e, t, n) {
              var r = e.length;
              (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
              for (var i = "", o = t; o < n; ++o) i += B(e[o]);
              return i;
            }
            function T(e, t, n) {
              for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2)
                i += String.fromCharCode(r[o] + 256 * r[o + 1]);
              return i;
            }
            function C(e, t, n) {
              if (e % 1 != 0 || e < 0)
                throw new RangeError("offset is not uint");
              if (e + t > n)
                throw new RangeError("Trying to access beyond buffer length");
            }
            function R(e, t, n, r, i, o) {
              if (!u.isBuffer(e))
                throw new TypeError(
                  '"buffer" argument must be a Buffer instance'
                );
              if (t > i || t < o)
                throw new RangeError('"value" argument is out of bounds');
              if (n + r > e.length) throw new RangeError("Index out of range");
            }
            function I(e, t, n, r) {
              t < 0 && (t = 65535 + t + 1);
              for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i)
                e[n + i] =
                  (t & (255 << (8 * (r ? i : 1 - i)))) >>>
                  (8 * (r ? i : 1 - i));
            }
            function N(e, t, n, r) {
              t < 0 && (t = 4294967295 + t + 1);
              for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i)
                e[n + i] = (t >>> (8 * (r ? i : 3 - i))) & 255;
            }
            function U(e, t, n, r, i, o) {
              if (n + r > e.length) throw new RangeError("Index out of range");
              if (n < 0) throw new RangeError("Index out of range");
            }
            function L(e, t, n, r, o) {
              return o || U(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4;
            }
            function M(e, t, n, r, o) {
              return o || U(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8;
            }
            (u.prototype.slice = function (e, t) {
              var n,
                r = this.length;
              if (
                ((e = ~~e),
                (t = void 0 === t ? r : ~~t),
                e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
                t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
                t < e && (t = e),
                u.TYPED_ARRAY_SUPPORT)
              )
                (n = this.subarray(e, t)).__proto__ = u.prototype;
              else {
                var i = t - e;
                n = new u(i, void 0);
                for (var o = 0; o < i; ++o) n[o] = this[o + e];
              }
              return n;
            }),
              (u.prototype.readUIntLE = function (e, t, n) {
                (e |= 0), (t |= 0), n || C(e, t, this.length);
                for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
                  r += this[e + o] * i;
                return r;
              }),
              (u.prototype.readUIntBE = function (e, t, n) {
                (e |= 0), (t |= 0), n || C(e, t, this.length);
                for (var r = this[e + --t], i = 1; t > 0 && (i *= 256); )
                  r += this[e + --t] * i;
                return r;
              }),
              (u.prototype.readUInt8 = function (e, t) {
                return t || C(e, 1, this.length), this[e];
              }),
              (u.prototype.readUInt16LE = function (e, t) {
                return t || C(e, 2, this.length), this[e] | (this[e + 1] << 8);
              }),
              (u.prototype.readUInt16BE = function (e, t) {
                return t || C(e, 2, this.length), (this[e] << 8) | this[e + 1];
              }),
              (u.prototype.readUInt32LE = function (e, t) {
                return (
                  t || C(e, 4, this.length),
                  (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                    16777216 * this[e + 3]
                );
              }),
              (u.prototype.readUInt32BE = function (e, t) {
                return (
                  t || C(e, 4, this.length),
                  16777216 * this[e] +
                    ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
                );
              }),
              (u.prototype.readIntLE = function (e, t, n) {
                (e |= 0), (t |= 0), n || C(e, t, this.length);
                for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
                  r += this[e + o] * i;
                return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
              }),
              (u.prototype.readIntBE = function (e, t, n) {
                (e |= 0), (t |= 0), n || C(e, t, this.length);
                for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256); )
                  o += this[e + --r] * i;
                return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
              }),
              (u.prototype.readInt8 = function (e, t) {
                return (
                  t || C(e, 1, this.length),
                  128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                );
              }),
              (u.prototype.readInt16LE = function (e, t) {
                t || C(e, 2, this.length);
                var n = this[e] | (this[e + 1] << 8);
                return 32768 & n ? 4294901760 | n : n;
              }),
              (u.prototype.readInt16BE = function (e, t) {
                t || C(e, 2, this.length);
                var n = this[e + 1] | (this[e] << 8);
                return 32768 & n ? 4294901760 | n : n;
              }),
              (u.prototype.readInt32LE = function (e, t) {
                return (
                  t || C(e, 4, this.length),
                  this[e] |
                    (this[e + 1] << 8) |
                    (this[e + 2] << 16) |
                    (this[e + 3] << 24)
                );
              }),
              (u.prototype.readInt32BE = function (e, t) {
                return (
                  t || C(e, 4, this.length),
                  (this[e] << 24) |
                    (this[e + 1] << 16) |
                    (this[e + 2] << 8) |
                    this[e + 3]
                );
              }),
              (u.prototype.readFloatLE = function (e, t) {
                return t || C(e, 4, this.length), i.read(this, e, !0, 23, 4);
              }),
              (u.prototype.readFloatBE = function (e, t) {
                return t || C(e, 4, this.length), i.read(this, e, !1, 23, 4);
              }),
              (u.prototype.readDoubleLE = function (e, t) {
                return t || C(e, 8, this.length), i.read(this, e, !0, 52, 8);
              }),
              (u.prototype.readDoubleBE = function (e, t) {
                return t || C(e, 8, this.length), i.read(this, e, !1, 52, 8);
              }),
              (u.prototype.writeUIntLE = function (e, t, n, r) {
                ((e = +e), (t |= 0), (n |= 0), r) ||
                  R(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var i = 1,
                  o = 0;
                for (this[t] = 255 & e; ++o < n && (i *= 256); )
                  this[t + o] = (e / i) & 255;
                return t + n;
              }),
              (u.prototype.writeUIntBE = function (e, t, n, r) {
                ((e = +e), (t |= 0), (n |= 0), r) ||
                  R(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var i = n - 1,
                  o = 1;
                for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
                  this[t + i] = (e / o) & 255;
                return t + n;
              }),
              (u.prototype.writeUInt8 = function (e, t, n) {
                return (
                  (e = +e),
                  (t |= 0),
                  n || R(this, e, t, 1, 255, 0),
                  u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                  (this[t] = 255 & e),
                  t + 1
                );
              }),
              (u.prototype.writeUInt16LE = function (e, t, n) {
                return (
                  (e = +e),
                  (t |= 0),
                  n || R(this, e, t, 2, 65535, 0),
                  u.TYPED_ARRAY_SUPPORT
                    ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                    : I(this, e, t, !0),
                  t + 2
                );
              }),
              (u.prototype.writeUInt16BE = function (e, t, n) {
                return (
                  (e = +e),
                  (t |= 0),
                  n || R(this, e, t, 2, 65535, 0),
                  u.TYPED_ARRAY_SUPPORT
                    ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                    : I(this, e, t, !1),
                  t + 2
                );
              }),
              (u.prototype.writeUInt32LE = function (e, t, n) {
                return (
                  (e = +e),
                  (t |= 0),
                  n || R(this, e, t, 4, 4294967295, 0),
                  u.TYPED_ARRAY_SUPPORT
                    ? ((this[t + 3] = e >>> 24),
                      (this[t + 2] = e >>> 16),
                      (this[t + 1] = e >>> 8),
                      (this[t] = 255 & e))
                    : N(this, e, t, !0),
                  t + 4
                );
              }),
              (u.prototype.writeUInt32BE = function (e, t, n) {
                return (
                  (e = +e),
                  (t |= 0),
                  n || R(this, e, t, 4, 4294967295, 0),
                  u.TYPED_ARRAY_SUPPORT
                    ? ((this[t] = e >>> 24),
                      (this[t + 1] = e >>> 16),
                      (this[t + 2] = e >>> 8),
                      (this[t + 3] = 255 & e))
                    : N(this, e, t, !1),
                  t + 4
                );
              }),
              (u.prototype.writeIntLE = function (e, t, n, r) {
                if (((e = +e), (t |= 0), !r)) {
                  var i = Math.pow(2, 8 * n - 1);
                  R(this, e, t, n, i - 1, -i);
                }
                var o = 0,
                  a = 1,
                  s = 0;
                for (this[t] = 255 & e; ++o < n && (a *= 256); )
                  e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1),
                    (this[t + o] = (((e / a) >> 0) - s) & 255);
                return t + n;
              }),
              (u.prototype.writeIntBE = function (e, t, n, r) {
                if (((e = +e), (t |= 0), !r)) {
                  var i = Math.pow(2, 8 * n - 1);
                  R(this, e, t, n, i - 1, -i);
                }
                var o = n - 1,
                  a = 1,
                  s = 0;
                for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); )
                  e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1),
                    (this[t + o] = (((e / a) >> 0) - s) & 255);
                return t + n;
              }),
              (u.prototype.writeInt8 = function (e, t, n) {
                return (
                  (e = +e),
                  (t |= 0),
                  n || R(this, e, t, 1, 127, -128),
                  u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                  e < 0 && (e = 255 + e + 1),
                  (this[t] = 255 & e),
                  t + 1
                );
              }),
              (u.prototype.writeInt16LE = function (e, t, n) {
                return (
                  (e = +e),
                  (t |= 0),
                  n || R(this, e, t, 2, 32767, -32768),
                  u.TYPED_ARRAY_SUPPORT
                    ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                    : I(this, e, t, !0),
                  t + 2
                );
              }),
              (u.prototype.writeInt16BE = function (e, t, n) {
                return (
                  (e = +e),
                  (t |= 0),
                  n || R(this, e, t, 2, 32767, -32768),
                  u.TYPED_ARRAY_SUPPORT
                    ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                    : I(this, e, t, !1),
                  t + 2
                );
              }),
              (u.prototype.writeInt32LE = function (e, t, n) {
                return (
                  (e = +e),
                  (t |= 0),
                  n || R(this, e, t, 4, 2147483647, -2147483648),
                  u.TYPED_ARRAY_SUPPORT
                    ? ((this[t] = 255 & e),
                      (this[t + 1] = e >>> 8),
                      (this[t + 2] = e >>> 16),
                      (this[t + 3] = e >>> 24))
                    : N(this, e, t, !0),
                  t + 4
                );
              }),
              (u.prototype.writeInt32BE = function (e, t, n) {
                return (
                  (e = +e),
                  (t |= 0),
                  n || R(this, e, t, 4, 2147483647, -2147483648),
                  e < 0 && (e = 4294967295 + e + 1),
                  u.TYPED_ARRAY_SUPPORT
                    ? ((this[t] = e >>> 24),
                      (this[t + 1] = e >>> 16),
                      (this[t + 2] = e >>> 8),
                      (this[t + 3] = 255 & e))
                    : N(this, e, t, !1),
                  t + 4
                );
              }),
              (u.prototype.writeFloatLE = function (e, t, n) {
                return L(this, e, t, !0, n);
              }),
              (u.prototype.writeFloatBE = function (e, t, n) {
                return L(this, e, t, !1, n);
              }),
              (u.prototype.writeDoubleLE = function (e, t, n) {
                return M(this, e, t, !0, n);
              }),
              (u.prototype.writeDoubleBE = function (e, t, n) {
                return M(this, e, t, !1, n);
              }),
              (u.prototype.copy = function (e, t, n, r) {
                if (
                  (n || (n = 0),
                  r || 0 === r || (r = this.length),
                  t >= e.length && (t = e.length),
                  t || (t = 0),
                  r > 0 && r < n && (r = n),
                  r === n)
                )
                  return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length)
                  throw new RangeError("sourceStart out of bounds");
                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length),
                  e.length - t < r - n && (r = e.length - t + n);
                var i,
                  o = r - n;
                if (this === e && n < t && t < r)
                  for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];
                else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                  for (i = 0; i < o; ++i) e[i + t] = this[i + n];
                else
                  Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
                return o;
              }),
              (u.prototype.fill = function (e, t, n, r) {
                if ("string" == typeof e) {
                  if (
                    ("string" == typeof t
                      ? ((r = t), (t = 0), (n = this.length))
                      : "string" == typeof n && ((r = n), (n = this.length)),
                    1 === e.length)
                  ) {
                    var i = e.charCodeAt(0);
                    i < 256 && (e = i);
                  }
                  if (void 0 !== r && "string" != typeof r)
                    throw new TypeError("encoding must be a string");
                  if ("string" == typeof r && !u.isEncoding(r))
                    throw new TypeError("Unknown encoding: " + r);
                } else "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < n)
                  throw new RangeError("Out of range index");
                if (n <= t) return this;
                var o;
                if (
                  ((t >>>= 0),
                  (n = void 0 === n ? this.length : n >>> 0),
                  e || (e = 0),
                  "number" == typeof e)
                )
                  for (o = t; o < n; ++o) this[o] = e;
                else {
                  var a = u.isBuffer(e) ? e : z(new u(e, r).toString()),
                    s = a.length;
                  for (o = 0; o < n - t; ++o) this[o + t] = a[o % s];
                }
                return this;
              });
            var D = /[^+\/0-9A-Za-z-_]/g;
            function B(e) {
              return e < 16 ? "0" + e.toString(16) : e.toString(16);
            }
            function z(e, t) {
              var n;
              t = t || 1 / 0;
              for (var r = e.length, i = null, o = [], a = 0; a < r; ++a) {
                if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
                  if (!i) {
                    if (n > 56319) {
                      (t -= 3) > -1 && o.push(239, 191, 189);
                      continue;
                    }
                    if (a + 1 === r) {
                      (t -= 3) > -1 && o.push(239, 191, 189);
                      continue;
                    }
                    i = n;
                    continue;
                  }
                  if (n < 56320) {
                    (t -= 3) > -1 && o.push(239, 191, 189), (i = n);
                    continue;
                  }
                  n = 65536 + (((i - 55296) << 10) | (n - 56320));
                } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                if (((i = null), n < 128)) {
                  if ((t -= 1) < 0) break;
                  o.push(n);
                } else if (n < 2048) {
                  if ((t -= 2) < 0) break;
                  o.push((n >> 6) | 192, (63 & n) | 128);
                } else if (n < 65536) {
                  if ((t -= 3) < 0) break;
                  o.push(
                    (n >> 12) | 224,
                    ((n >> 6) & 63) | 128,
                    (63 & n) | 128
                  );
                } else {
                  if (!(n < 1114112)) throw new Error("Invalid code point");
                  if ((t -= 4) < 0) break;
                  o.push(
                    (n >> 18) | 240,
                    ((n >> 12) & 63) | 128,
                    ((n >> 6) & 63) | 128,
                    (63 & n) | 128
                  );
                }
              }
              return o;
            }
            function J(e) {
              return r.toByteArray(
                (function (e) {
                  if (
                    (e = (function (e) {
                      return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
                    })(e).replace(D, "")).length < 2
                  )
                    return "";
                  for (; e.length % 4 != 0; ) e += "=";
                  return e;
                })(e)
              );
            }
            function q(e, t, n, r) {
              for (
                var i = 0;
                i < r && !(i + n >= t.length || i >= e.length);
                ++i
              )
                t[i + n] = e[i];
              return i;
            }
          }.call(this, n(4)));
        },
        function (e, t) {
          e.exports = window;
        },
        function (e, t, n) {
          e.exports = n(42)();
        },
        function (e, t) {
          e.exports = fetch;
        },
        function (e, t) {
          e.exports = crypto;
        },
        function (e, t, n) {
          "use strict";
          var r = n(2).JSONSchema,
            i =
              (n(65).BASE64_REGEXP,
              new r({
                type: "object",
                properties: {
                  kty: { type: "string", enum: ["RSA", "EC", "oct"] },
                  use: { type: "string", enum: ["sig", "enc"] },
                  key_ops: {
                    type: "array",
                    items: {
                      enum: [
                        "sign",
                        "verify",
                        "encrypt",
                        "decrypt",
                        "wrapKey",
                        "unwrapKey",
                        "deriveKey",
                        "deriveBits",
                      ],
                    },
                  },
                  alg: {
                    type: "string",
                    enum: [
                      "HS256",
                      "HS384",
                      "HS512",
                      "RS256",
                      "RS384",
                      "RS512",
                      "ES256",
                      "ES384",
                      "ES512",
                      "PS256",
                      "PS384",
                      "PS512",
                      "none",
                    ],
                  },
                  kid: { type: "string" },
                  x5u: { type: "string" },
                  x5c: { type: "array" },
                  x5t: { type: "string" },
                },
              }));
          e.exports = i;
        },
        function (e, t, n) {
          "use strict";
          (function (t) {
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
             * @license  MIT
             */
            function r(e, t) {
              if (e === t) return 0;
              for (
                var n = e.length, r = t.length, i = 0, o = Math.min(n, r);
                i < o;
                ++i
              )
                if (e[i] !== t[i]) {
                  (n = e[i]), (r = t[i]);
                  break;
                }
              return n < r ? -1 : r < n ? 1 : 0;
            }
            function i(e) {
              return t.Buffer && "function" == typeof t.Buffer.isBuffer
                ? t.Buffer.isBuffer(e)
                : !(null == e || !e._isBuffer);
            }
            var o = n(47),
              a = Object.prototype.hasOwnProperty,
              s = Array.prototype.slice,
              u = "foo" === function () {}.name;
            function c(e) {
              return Object.prototype.toString.call(e);
            }
            function l(e) {
              return (
                !i(e) &&
                "function" == typeof t.ArrayBuffer &&
                ("function" == typeof ArrayBuffer.isView
                  ? ArrayBuffer.isView(e)
                  : !!e &&
                    (e instanceof DataView ||
                      !!(e.buffer && e.buffer instanceof ArrayBuffer)))
              );
            }
            var f = (e.exports = v),
              p = /\s*function\s+([^\(\s]*)\s*/;
            function h(e) {
              if (o.isFunction(e)) {
                if (u) return e.name;
                var t = e.toString().match(p);
                return t && t[1];
              }
            }
            function d(e, t) {
              return "string" == typeof e
                ? e.length < t
                  ? e
                  : e.slice(0, t)
                : e;
            }
            function y(e) {
              if (u || !o.isFunction(e)) return o.inspect(e);
              var t = h(e);
              return "[Function" + (t ? ": " + t : "") + "]";
            }
            function m(e, t, n, r, i) {
              throw new f.AssertionError({
                message: n,
                actual: e,
                expected: t,
                operator: r,
                stackStartFunction: i,
              });
            }
            function v(e, t) {
              e || m(e, !0, t, "==", f.ok);
            }
            function g(e, t, n, a) {
              if (e === t) return !0;
              if (i(e) && i(t)) return 0 === r(e, t);
              if (o.isDate(e) && o.isDate(t))
                return e.getTime() === t.getTime();
              if (o.isRegExp(e) && o.isRegExp(t))
                return (
                  e.source === t.source &&
                  e.global === t.global &&
                  e.multiline === t.multiline &&
                  e.lastIndex === t.lastIndex &&
                  e.ignoreCase === t.ignoreCase
                );
              if (
                (null !== e && "object" == typeof e) ||
                (null !== t && "object" == typeof t)
              ) {
                if (
                  l(e) &&
                  l(t) &&
                  c(e) === c(t) &&
                  !(e instanceof Float32Array || e instanceof Float64Array)
                )
                  return (
                    0 === r(new Uint8Array(e.buffer), new Uint8Array(t.buffer))
                  );
                if (i(e) !== i(t)) return !1;
                var u = (a = a || { actual: [], expected: [] }).actual.indexOf(
                  e
                );
                return (
                  (-1 !== u && u === a.expected.indexOf(t)) ||
                  (a.actual.push(e),
                  a.expected.push(t),
                  (function (e, t, n, r) {
                    if (
                      null === e ||
                      void 0 === e ||
                      null === t ||
                      void 0 === t
                    )
                      return !1;
                    if (o.isPrimitive(e) || o.isPrimitive(t)) return e === t;
                    if (
                      n &&
                      Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)
                    )
                      return !1;
                    var i = w(e),
                      a = w(t);
                    if ((i && !a) || (!i && a)) return !1;
                    if (i) return (e = s.call(e)), (t = s.call(t)), g(e, t, n);
                    var u,
                      c,
                      l = S(e),
                      f = S(t);
                    if (l.length !== f.length) return !1;
                    for (l.sort(), f.sort(), c = l.length - 1; c >= 0; c--)
                      if (l[c] !== f[c]) return !1;
                    for (c = l.length - 1; c >= 0; c--)
                      if (((u = l[c]), !g(e[u], t[u], n, r))) return !1;
                    return !0;
                  })(e, t, n, a))
                );
              }
              return n ? e === t : e == t;
            }
            function w(e) {
              return "[object Arguments]" == Object.prototype.toString.call(e);
            }
            function b(e, t) {
              if (!e || !t) return !1;
              if ("[object RegExp]" == Object.prototype.toString.call(t))
                return t.test(e);
              try {
                if (e instanceof t) return !0;
              } catch (e) {}
              return !Error.isPrototypeOf(t) && !0 === t.call({}, e);
            }
            function _(e, t, n, r) {
              var i;
              if ("function" != typeof t)
                throw new TypeError('"block" argument must be a function');
              "string" == typeof n && ((r = n), (n = null)),
                (i = (function (e) {
                  var t;
                  try {
                    e();
                  } catch (e) {
                    t = e;
                  }
                  return t;
                })(t)),
                (r =
                  (n && n.name ? " (" + n.name + ")." : ".") +
                  (r ? " " + r : ".")),
                e && !i && m(i, n, "Missing expected exception" + r);
              var a = "string" == typeof r,
                s = !e && o.isError(i),
                u = !e && i && !n;
              if (
                (((s && a && b(i, n)) || u) &&
                  m(i, n, "Got unwanted exception" + r),
                (e && i && n && !b(i, n)) || (!e && i))
              )
                throw i;
            }
            (f.AssertionError = function (e) {
              (this.name = "AssertionError"),
                (this.actual = e.actual),
                (this.expected = e.expected),
                (this.operator = e.operator),
                e.message
                  ? ((this.message = e.message), (this.generatedMessage = !1))
                  : ((this.message = (function (e) {
                      return (
                        d(y(e.actual), 128) +
                        " " +
                        e.operator +
                        " " +
                        d(y(e.expected), 128)
                      );
                    })(this)),
                    (this.generatedMessage = !0));
              var t = e.stackStartFunction || m;
              if (Error.captureStackTrace) Error.captureStackTrace(this, t);
              else {
                var n = new Error();
                if (n.stack) {
                  var r = n.stack,
                    i = h(t),
                    o = r.indexOf("\n" + i);
                  if (o >= 0) {
                    var a = r.indexOf("\n", o + 1);
                    r = r.substring(a + 1);
                  }
                  this.stack = r;
                }
              }
            }),
              o.inherits(f.AssertionError, Error),
              (f.fail = m),
              (f.ok = v),
              (f.equal = function (e, t, n) {
                e != t && m(e, t, n, "==", f.equal);
              }),
              (f.notEqual = function (e, t, n) {
                e == t && m(e, t, n, "!=", f.notEqual);
              }),
              (f.deepEqual = function (e, t, n) {
                g(e, t, !1) || m(e, t, n, "deepEqual", f.deepEqual);
              }),
              (f.deepStrictEqual = function (e, t, n) {
                g(e, t, !0) || m(e, t, n, "deepStrictEqual", f.deepStrictEqual);
              }),
              (f.notDeepEqual = function (e, t, n) {
                g(e, t, !1) && m(e, t, n, "notDeepEqual", f.notDeepEqual);
              }),
              (f.notDeepStrictEqual = function e(t, n, r) {
                g(t, n, !0) && m(t, n, r, "notDeepStrictEqual", e);
              }),
              (f.strictEqual = function (e, t, n) {
                e !== t && m(e, t, n, "===", f.strictEqual);
              }),
              (f.notStrictEqual = function (e, t, n) {
                e === t && m(e, t, n, "!==", f.notStrictEqual);
              }),
              (f.throws = function (e, t, n) {
                _(!0, e, t, n);
              }),
              (f.doesNotThrow = function (e, t, n) {
                _(!1, e, t, n);
              }),
              (f.ifError = function (e) {
                if (e) throw e;
              });
            var S =
              Object.keys ||
              function (e) {
                var t = [];
                for (var n in e) a.call(e, n) && t.push(n);
                return t;
              };
          }.call(this, n(4)));
        },
        function (e, t, n) {
          "use strict";
          var r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })();
          var i = 0,
            o = (function () {
              function e(t, n) {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this.expr = t),
                  (this.mode = n || i),
                  (this.tokens =
                    t && "#" === t.charAt(0)
                      ? this.parseURIFragmentIdentifier(t)
                      : this.parseJSONString(t));
              }
              return (
                r(
                  e,
                  [
                    {
                      key: "escape",
                      value: function (e) {
                        return e.replace(/~/g, "~0").replace(/\//g, "~1");
                      },
                    },
                    {
                      key: "unescape",
                      value: function (e) {
                        return e.replace(/~1/g, "/").replace(/~0/g, "~");
                      },
                    },
                    {
                      key: "parseJSONString",
                      value: function (e) {
                        if ("string" != typeof e)
                          throw new Error("JSON Pointer must be a string");
                        if ("" === e) return [];
                        if ("/" !== e.charAt(0))
                          throw new Error("Invalid JSON Pointer");
                        return "/" === e
                          ? [""]
                          : e.substr(1).split("/").map(this.unescape);
                      },
                    },
                    {
                      key: "toJSONString",
                      value: function () {
                        return "/" + this.tokens.map(this.escape).join("/");
                      },
                    },
                    {
                      key: "parseURIFragmentIdentifier",
                      value: function (e) {
                        if ("string" != typeof e)
                          throw new Error("JSON Pointer must be a string");
                        if ("#" !== e.charAt(0))
                          throw new Error(
                            "Invalid JSON Pointer URI Fragment Identifier"
                          );
                        return this.parseJSONString(
                          decodeURIComponent(e.substr(1))
                        );
                      },
                    },
                    {
                      key: "toURIFragmentIdentifier",
                      value: function () {
                        var e = this;
                        return (
                          "#/" +
                          this.tokens
                            .map(function (t) {
                              return encodeURIComponent(e.escape(t));
                            })
                            .join("/")
                        );
                      },
                    },
                    {
                      key: "get",
                      value: function (e) {
                        for (
                          var t = e, n = this.tokens, r = 0;
                          r < n.length;
                          r++
                        ) {
                          if (!t || void 0 === t[n[r]]) {
                            if (this.mode !== i) return;
                            throw new Error("Invalid JSON Pointer reference");
                          }
                          t = t[n[r]];
                        }
                        return t;
                      },
                    },
                    {
                      key: "add",
                      value: function (e, t) {
                        for (
                          var n = this.tokens, r = e, o = 0;
                          o < n.length;
                          o++
                        ) {
                          var a = n[o];
                          if (o === n.length - 1)
                            "-" === a
                              ? r.push(t)
                              : Array.isArray(r)
                              ? r.splice(a, 0, t)
                              : void 0 !== t && (r[a] = t);
                          else if (r[a]) r = r[a];
                          else
                            switch (this.mode) {
                              case i:
                                throw new Error(
                                  "Invalid JSON Pointer reference"
                                );
                              case 1:
                                r = r[a] = parseInt(a) ? [] : {};
                                break;
                              case 2:
                                return;
                              default:
                                throw new Error("Invalid pointer mode");
                            }
                        }
                      },
                    },
                    {
                      key: "replace",
                      value: function (e, t) {
                        for (
                          var n = this.tokens, r = e, i = 0;
                          i < n.length;
                          i++
                        ) {
                          var o = n[i];
                          i === n.length - 1
                            ? (r[o] = t)
                            : (r = r[o]
                                ? r[o]
                                : (r[o] = parseInt(o) ? [] : {}));
                        }
                      },
                    },
                    {
                      key: "remove",
                      value: function (e) {
                        for (
                          var t = this.tokens, n = e, r = 0;
                          r < t.length;
                          r++
                        ) {
                          var i = t[r];
                          if (void 0 === n || void 0 === n[i]) return;
                          if (Array.isArray(n)) return void n.splice(i, 1);
                          r === t.length - 1 && delete n[i], (n = n[i]);
                        }
                      },
                    },
                  ],
                  [
                    {
                      key: "parse",
                      value: function (t) {
                        return new e(t);
                      },
                    },
                  ]
                ),
                e
              );
            })();
          e.exports = o;
        },
        function (e, t, n) {
          "use strict";
          var r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })();
          n(3);
          var i = n(59),
            o = n(26).NotSupportedError,
            a = (function () {
              function e() {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e);
              }
              return (
                r(e, null, [
                  {
                    key: "sign",
                    value: function (e, t, n) {
                      var r = i.normalize("sign", e);
                      return r instanceof Error
                        ? Promise.reject(new o(e))
                        : r.sign(t, n);
                    },
                  },
                  {
                    key: "verify",
                    value: function (e, t, n, r) {
                      var a = i.normalize("verify", e);
                      return a instanceof Error
                        ? Promise.reject(new o(e))
                        : a.verify(t, n, r);
                    },
                  },
                  {
                    key: "importKey",
                    value: function (e) {
                      return i.normalize("importKey", e.alg).importKey(e);
                    },
                  },
                ]),
                e
              );
            })();
          e.exports = a;
        },
        function (e, t) {
          e.exports = class {
            static encode(e) {
              let t = [];
              return (
                Object.keys(e).forEach(function (n) {
                  t.push(
                    encodeURIComponent(n) + "=" + encodeURIComponent(e[n])
                  );
                }),
                t.join("&")
              );
            }
            static decode(e) {
              let t = {};
              return (
                e.split("&").forEach(function (e) {
                  let n = e.split("="),
                    r = decodeURIComponent(n[0]),
                    i = decodeURIComponent(n[1]);
                  t[r] = i;
                }),
                t
              );
            }
          };
        },
        function (e, t, n) {
          "use strict";
          e.exports = function (e = "fetch error") {
            return (t) => {
              if (t.status >= 200 && t.status < 300) return t;
              let n = `${e}: ${t.status} ${t.statusText}`,
                r = new Error(n);
              throw ((r.response = t), (r.statusCode = t.status), r);
            };
          };
        },
        function (e, t, n) {
          "use strict";
          e.exports = n(19);
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.unquote = t.quote = t.isScheme = t.isToken = void 0);
          var r = /^[^\u0000-\u001F\u007F()<>@,;:\\"/?={}\[\]\u0020\u0009]+$/,
            i = function (e) {
              return "string" == typeof e && r.test(e);
            };
          t.isToken = i;
          var o = i;
          t.isScheme = o;
          t.quote = function (e) {
            return `"${e.replace(/"/g, '\\"')}"`;
          };
          t.unquote = function (e) {
            return e.substr(1, e.length - 2).replace(/\\"/g, '"');
          };
        },
        function (e, t, n) {
          (function (t) {
            const r = n(12),
              i = n(9),
              { URL: o } = n(7),
              a = i.Headers ? i.Headers : t.Headers,
              { JSONDocument: s } = n(2),
              { JWKSet: u } = n(5),
              c = n(68),
              l = n(69),
              f = n(77),
              p = n(16),
              h = n(15);
            class d extends s {
              static get schema() {
                return f;
              }
              static from(e) {
                let t = new d(e),
                  n = t.validate();
                if (!n.valid)
                  return Promise.reject(new Error(JSON.stringify(n)));
                let r = t.provider.jwks;
                return r
                  ? u.importKeys(r).then((e) => ((t.provider.jwks = e), t))
                  : t.jwks().then(() => t);
              }
              static register(e, t, n) {
                let r = new d({
                  provider: { url: e },
                  defaults: Object.assign({}, n.defaults),
                  store: n.store,
                });
                return Promise.resolve()
                  .then(() => r.discover())
                  .then(() => r.jwks())
                  .then(() => r.register(t))
                  .then(() => r);
              }
              discover() {
                try {
                  let e = this.provider.url;
                  r(e, 'RelyingParty provider must define "url"');
                  let t = new o(e);
                  return (
                    (t.pathname = ".well-known/openid-configuration"),
                    i(t.toString())
                      .then(p("Error fetching openid configuration"))
                      .then((e) =>
                        e.json().then((e) => (this.provider.configuration = e))
                      )
                  );
                } catch (e) {
                  return Promise.reject(e);
                }
              }
              register(e) {
                try {
                  let t = this.provider.configuration;
                  r(t, "OpenID Configuration is not initialized."),
                    r(
                      t.registration_endpoint,
                      "OpenID Configuration is missing registration_endpoint."
                    );
                  let n = t.registration_endpoint,
                    o = "post",
                    s = new a({ "Content-Type": "application/json" }),
                    u = this.defaults.register,
                    c = JSON.stringify(Object.assign({}, u, e));
                  return i(n, { method: o, headers: s, body: c })
                    .then(p("Error registering client"))
                    .then((e) => e.json().then((e) => (this.registration = e)));
                } catch (e) {
                  return Promise.reject(e);
                }
              }
              serialize() {
                return JSON.stringify(this);
              }
              jwks() {
                try {
                  let e = this.provider.configuration;
                  r(e, "OpenID Configuration is not initialized."),
                    r(e.jwks_uri, "OpenID Configuration is missing jwks_uri.");
                  let t = e.jwks_uri;
                  return i(t)
                    .then(p("Error resolving provider keys"))
                    .then((e) =>
                      e
                        .json()
                        .then((e) => u.importKeys(e))
                        .then((e) => (this.provider.jwks = e))
                    );
                } catch (e) {
                  return Promise.reject(e);
                }
              }
              createRequest(e, t) {
                return c.create(this, e, t || this.store);
              }
              validateResponse(e, t = this.store) {
                let n;
                n = e.match(/^http(s?):\/\//)
                  ? { rp: this, redirect: e, session: t }
                  : { rp: this, body: e, session: t };
                const r = new l(n);
                return l.validateResponse(r);
              }
              userinfo() {
                try {
                  let e = this.provider.configuration;
                  r(e, "OpenID Configuration is not initialized."),
                    r(
                      e.userinfo_endpoint,
                      "OpenID Configuration is missing userinfo_endpoint."
                    );
                  let t = e.userinfo_endpoint,
                    n = this.store.access_token;
                  r(n, "Missing access token.");
                  let o = new a({
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${n}`,
                  });
                  return i(t, { headers: o })
                    .then(p("Error fetching userinfo"))
                    .then((e) => e.json());
                } catch (e) {
                  return Promise.reject(e);
                }
              }
              logoutRequest(e = {}) {
                const {
                  id_token_hint: t,
                  post_logout_redirect_uri: n,
                  state: i,
                } = e;
                let a;
                if (
                  (r(this.provider, "OpenID Configuration is not initialized"),
                  (a = this.provider.configuration),
                  r(a, "OpenID Configuration is not initialized"),
                  !a.end_session_endpoint)
                )
                  return (
                    console.log(
                      "OpenId Configuration for " +
                        `${a.issuer} is missing end_session_endpoint`
                    ),
                    null
                  );
                if (n && !t)
                  throw new Error(
                    "id_token_hint is required when using post_logout_redirect_uri"
                  );
                const s = {};
                t && (s.id_token_hint = t),
                  n && (s.post_logout_redirect_uri = n),
                  i && (s.state = i);
                const u = new o(a.end_session_endpoint);
                return (u.search = h.encode(s)), u.href;
              }
              logout() {
                let e;
                try {
                  r(this.provider, "OpenID Configuration is not initialized."),
                    (e = this.provider.configuration),
                    r(e, "OpenID Configuration is not initialized."),
                    r(
                      e.end_session_endpoint,
                      "OpenID Configuration is missing end_session_endpoint."
                    );
                } catch (e) {
                  return Promise.reject(e);
                }
                if (!e.end_session_endpoint)
                  return this.clearSession(), Promise.resolve(void 0);
                let t = e.end_session_endpoint;
                return i(t, { method: "get", credentials: "include" })
                  .then(p("Error logging out"))
                  .then(() => this.clearSession());
              }
              clearSession() {
                let e = this.store;
                e && delete e[y];
              }
              popTokenFor(e, t) {
                return PoPToken.issueFor(e, t);
              }
            }
            const y = "oidc.session.privateKey";
            (d.SESSION_PRIVATE_KEY = y), (e.exports = d);
          }.call(this, n(4)));
        },
        function (e, t, n) {
          "use strict";
          var r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })();
          var i = /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s][0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:z|[+-]\d\d:\d\d)$/i,
            o = /^(?:[a-z][a-z0-9+-.]*)?(?:\:|\/)\/?[^\s]*$/i,
            a = /^[a-z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
            s = /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
            u = /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
            c = /^[a-z](?:(?:[-0-9a-z]{0,61})?[0-9a-z])?(\.[a-z](?:(?:[-0-9a-z]{0,61})?[0-9a-z])?)*$/i,
            l = (function () {
              function e() {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e);
              }
              return (
                r(
                  e,
                  [
                    {
                      key: "register",
                      value: function (e, t) {
                        if ("string" != typeof e)
                          throw new Error("Format name must be a string");
                        return (
                          "string" == typeof t && (t = new RegExp(t)),
                          (this[e] = t)
                        );
                      },
                    },
                    {
                      key: "resolve",
                      value: function (e) {
                        var t = this[e];
                        if (!t) throw new Error("Unknown JSON Schema format.");
                        return t;
                      },
                    },
                    {
                      key: "test",
                      value: function (e, t) {
                        return this.resolve(e).test(t);
                      },
                    },
                  ],
                  [
                    {
                      key: "initialize",
                      value: function () {
                        var t = new e();
                        return (
                          t.register("date-time", i),
                          t.register("uri", o),
                          t.register("email", a),
                          t.register("ipv4", s),
                          t.register("ipv6", u),
                          t.register("hostname", c),
                          t
                        );
                      },
                    },
                  ]
                ),
                e
              );
            })();
          e.exports = l.initialize();
        },
        function (e, t, n) {
          "use strict";
          var r =
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
                  },
            i = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })();
          var o = (function () {
            function e(t, n) {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                Object.assign(this, n || {}),
                (this.root = this.root || this),
                (this.root.depth = this.root.depth || 1),
                this.level > this.root.depth && (this.root.depth = this.level),
                (this.level = this.level || 0),
                (this.schema = t);
            }
            return (
              i(
                e,
                [
                  {
                    key: "compile",
                    value: function () {
                      var e = this.root,
                        t = (this.depth, this.level, ""),
                        n = "";
                      if (
                        ((n += this.default()),
                        (n += this.properties()),
                        (n += this.items()),
                        (n += this.member()),
                        (n += this.item()),
                        e === this)
                      ) {
                        for (var r = 1; r <= this.root.depth; r++)
                          t += this.declaration(r);
                        return (
                          "\n        options = options || {}\n\n        if (options.filter === false) {\n          Object.assign(target, JSON.parse(JSON.stringify(source)))\n        }\n\n        " +
                          t +
                          "\n        " +
                          n +
                          "\n      "
                        );
                      }
                      return n;
                    },
                  },
                  {
                    key: "declaration",
                    value: function (e) {
                      return (
                        "\n      var target" +
                        e +
                        "\n      var source" +
                        e +
                        "\n      var count" +
                        e +
                        "\n    "
                      );
                    },
                  },
                  {
                    key: "default",
                    value: function () {
                      var e = this.schema,
                        t = this.level,
                        n = this.key,
                        r = this.index,
                        i = e.default,
                        o = "";
                      return (
                        e.hasOwnProperty("default") &&
                          (n &&
                            (o +=
                              "\n          target" +
                              t +
                              "['" +
                              n +
                              "'] = " +
                              JSON.stringify(i) +
                              "\n        "),
                          r &&
                            (o +=
                              "\n          target" +
                              t +
                              "[" +
                              r +
                              "] = " +
                              JSON.stringify(i) +
                              "\n        "),
                          t > 1 &&
                            (o += "\n          count" + t + "++\n        "),
                          (o =
                            "\n        if (options.defaults !== false) {\n          " +
                            o +
                            "\n        }\n      ")),
                        o
                      );
                    },
                  },
                  {
                    key: "member",
                    value: function () {
                      var e = this.schema,
                        t = (this.root, this.level),
                        n = this.key,
                        r = e.properties,
                        i = e.additionalProperties,
                        o = e.items,
                        a = e.additionalItems,
                        s = "";
                      return (
                        !n ||
                          r ||
                          i ||
                          o ||
                          a ||
                          ((s +=
                            "\n        target" +
                            t +
                            "['" +
                            n +
                            "'] = source" +
                            t +
                            "['" +
                            n +
                            "']\n      "),
                          t > 1 &&
                            (s += "\n          count" + t + "++\n        "),
                          (s =
                            "\n        if (source" +
                            t +
                            ".hasOwnProperty('" +
                            n +
                            "')) {\n          " +
                            s +
                            "\n        }\n      ")),
                        s
                      );
                    },
                  },
                  {
                    key: "item",
                    value: function () {
                      var e = this.schema,
                        t = (this.root, this.level),
                        n = this.index,
                        r = e.properties,
                        i = e.additionalProperties,
                        o = e.items,
                        a = e.additionalItems,
                        s = "";
                      return (
                        !n ||
                          r ||
                          i ||
                          o ||
                          a ||
                          ((s +=
                            "\n        target" +
                            t +
                            "[" +
                            n +
                            "] = source" +
                            t +
                            "[" +
                            n +
                            "]\n      "),
                          t > 1 &&
                            (s += "\n          count" + t + "++\n        "),
                          (s =
                            "\n        if (" +
                            n +
                            " < len) {\n          " +
                            s +
                            "\n        }\n      ")),
                        s
                      );
                    },
                  },
                  {
                    key: "properties",
                    value: function () {
                      var t = this.schema,
                        n = this.root,
                        r = this.level,
                        i = this.key,
                        o = this.index,
                        a = t.properties,
                        s = "";
                      return (
                        a &&
                          (Object.keys(a).forEach(function (t) {
                            var i = new e(a[t], {
                              key: t,
                              root: n,
                              level: r + 1,
                            });
                            s += i.compile();
                          }),
                          n === this
                            ? (s =
                                "\n          if (typeof source === 'object' && source !== null && !Array.isArray(source)) {\n            if (typeof target !== 'object') {\n              throw new Error('?')\n            }\n\n            source1 = source\n            target1 = target\n            count1 = 0\n\n            " +
                                s +
                                "\n          }\n        ")
                            : (o &&
                                (s =
                                  "\n            if (" +
                                  o +
                                  " < source" +
                                  r +
                                  ".length || typeof source" +
                                  r +
                                  "[" +
                                  o +
                                  "] === 'object') {\n\n              source" +
                                  (r + 1) +
                                  " = source" +
                                  r +
                                  "[" +
                                  o +
                                  "] || {}\n              count" +
                                  (r + 1) +
                                  " = 0\n\n              if (" +
                                  o +
                                  " < target" +
                                  r +
                                  ".length || typeof target" +
                                  r +
                                  "[" +
                                  o +
                                  "] !== 'object') {\n                target" +
                                  (r + 1) +
                                  " = {}\n                if (" +
                                  o +
                                  " < source" +
                                  r +
                                  ".length) {\n                  count" +
                                  (r + 1) +
                                  "++\n                }\n              } else {\n                target" +
                                  (r + 1) +
                                  " = target" +
                                  r +
                                  "[" +
                                  o +
                                  "]\n              }\n\n              " +
                                  s +
                                  "\n\n              if (count" +
                                  (r + 1) +
                                  " > 0) {\n                target" +
                                  r +
                                  "[" +
                                  o +
                                  "] = target" +
                                  (r + 1) +
                                  "\n                count" +
                                  r +
                                  "++\n              }\n\n            } else {\n              target" +
                                  r +
                                  "[" +
                                  o +
                                  "] = source" +
                                  r +
                                  "[" +
                                  o +
                                  "]\n              count" +
                                  r +
                                  "++\n            }\n          "),
                              i &&
                                (s =
                                  "\n            if ((typeof source" +
                                  r +
                                  "['" +
                                  i +
                                  "'] === 'object'\n                  && source" +
                                  r +
                                  "['" +
                                  i +
                                  "'] !== null\n                  && !Array.isArray(source" +
                                  r +
                                  "['" +
                                  i +
                                  "']))\n                || !source" +
                                  r +
                                  ".hasOwnProperty('" +
                                  i +
                                  "')) {\n\n              source" +
                                  (r + 1) +
                                  " = source" +
                                  r +
                                  "['" +
                                  i +
                                  "'] || {}\n              count" +
                                  (r + 1) +
                                  " = 0\n\n              if (!target" +
                                  r +
                                  ".hasOwnProperty('" +
                                  i +
                                  "')\n                  || typeof target" +
                                  r +
                                  "['" +
                                  i +
                                  "'] !== 'object'\n                  || target" +
                                  r +
                                  "['" +
                                  i +
                                  "'] === null\n                  || Array.isArray(target" +
                                  r +
                                  "['" +
                                  i +
                                  "'])) {\n                target" +
                                  (r + 1) +
                                  " = {}\n                if (source" +
                                  r +
                                  ".hasOwnProperty('" +
                                  i +
                                  "')) {\n                  count" +
                                  (r + 1) +
                                  "++\n                }\n              } else {\n                target" +
                                  (r + 1) +
                                  " = target" +
                                  r +
                                  "['" +
                                  i +
                                  "']\n                count" +
                                  (r + 1) +
                                  "++\n              }\n\n              " +
                                  s +
                                  "\n\n              if (count" +
                                  (r + 1) +
                                  " > 0) {\n                target" +
                                  r +
                                  "['" +
                                  i +
                                  "'] = target" +
                                  (r + 1) +
                                  "\n                count" +
                                  r +
                                  "++\n              }\n\n            } else {\n              target" +
                                  r +
                                  "['" +
                                  i +
                                  "'] = source" +
                                  r +
                                  "['" +
                                  i +
                                  "']\n              count" +
                                  r +
                                  "++\n            }\n          "))),
                        s
                      );
                    },
                  },
                  { key: "additionalProperties", value: function () {} },
                  {
                    key: "items",
                    value: function () {
                      var t = this.schema,
                        n = this.root,
                        i = this.level,
                        o = this.key,
                        a = (this.index, t.items),
                        s = "";
                      if (a) {
                        if (Array.isArray(a));
                        else if (
                          "object" === (void 0 === a ? "undefined" : r(a)) &&
                          null !== a
                        ) {
                          var u = "i" + (i + 1);
                          s +=
                            "\n          var sLen = source" +
                            (i + 1) +
                            ".length || 0\n          var tLen = target" +
                            (i + 1) +
                            ".length || 0\n          var len = 0\n\n          if (sLen > len) { len = sLen }\n          // THIS IS WRONG, CAUSED SIMPLE ARRAY INIT TO FAIL (OVERWRITE\n          // EXISTING TARGET VALUES WITH UNDEFINED WHEN SOURCE IS SHORTER THAN\n          // TARGET). LEAVING HERE UNTIL WE FINISH TESTING AND SEE WHY IT MIGHT\n          // HAVE BEEN HERE IN THE FIRST PLACE.\n          //\n          // if (tLen > len) { len = tLen }\n\n          for (var " +
                            u +
                            " = 0; " +
                            u +
                            " < len; " +
                            u +
                            "++) {\n            " +
                            new e(a, {
                              index: u,
                              root: n,
                              level: i + 1,
                            }).compile() +
                            "\n          }\n        ";
                        }
                        s =
                          n === this
                            ? "\n          if (Array.isArray(source)) {\n            if (!Array.isArray(target)) {\n              throw new Error('?')\n            }\n\n            source1 = source\n            target1 = target\n\n            " +
                              s +
                              "\n          }\n        "
                            : "\n          if (Array.isArray(source" +
                              i +
                              "['" +
                              o +
                              "']) || !source" +
                              i +
                              ".hasOwnProperty('" +
                              o +
                              "')) {\n\n            source" +
                              (i + 1) +
                              " = source" +
                              i +
                              "['" +
                              o +
                              "'] || []\n            count" +
                              (i + 1) +
                              " = 0\n\n            if (!target" +
                              i +
                              ".hasOwnProperty('" +
                              o +
                              "') || !Array.isArray(target" +
                              i +
                              "['" +
                              o +
                              "'])) {\n              target" +
                              (i + 1) +
                              " = []\n                if (source" +
                              i +
                              ".hasOwnProperty('" +
                              o +
                              "')) {\n                  count" +
                              (i + 1) +
                              "++\n                }\n\n            } else {\n              target" +
                              (i + 1) +
                              " = target" +
                              i +
                              "['" +
                              o +
                              "']\n              count" +
                              (i + 1) +
                              "++\n            }\n\n            " +
                              s +
                              "\n\n            if (count" +
                              (i + 1) +
                              " > 0) {\n              target" +
                              i +
                              "['" +
                              o +
                              "'] = target" +
                              (i + 1) +
                              "\n              count" +
                              i +
                              "++\n            }\n\n          } else {\n            target" +
                              i +
                              "['" +
                              o +
                              "'] = source" +
                              i +
                              "['" +
                              o +
                              "']\n            count" +
                              i +
                              "++\n          }\n        ";
                      }
                      return s;
                    },
                  },
                  { key: "additionalItems", value: function () {} },
                ],
                [
                  {
                    key: "compile",
                    value: function (t) {
                      var n = new e(t).compile();
                      try {
                        return new Function("target", "source", "options", n);
                      } catch (e) {
                        console.log(e, e.stack);
                      }
                    },
                  },
                ]
              ),
              e
            );
          })();
          e.exports = o;
        },
        function (e, t, n) {
          "use strict";
          var r =
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
                  },
            i = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })();
          var o = n(13),
            a = ["add", "remove", "replace", "move", "copy", "test"],
            s = (function () {
              function e(t) {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this.ops = t || []);
              }
              return (
                i(e, [
                  {
                    key: "apply",
                    value: function (e) {
                      var t = this;
                      this.ops.forEach(function (n) {
                        var r = n.op;
                        if (!r)
                          throw new Error(
                            'Missing "op" in JSON Patch operation'
                          );
                        if (-1 === a.indexOf(r))
                          throw new Error(
                            'Invalid "op" in JSON Patch operation'
                          );
                        if (!n.path)
                          throw new Error(
                            'Missing "path" in JSON Patch operation'
                          );
                        t[r](n, e);
                      });
                    },
                  },
                  {
                    key: "add",
                    value: function (e, t) {
                      if (void 0 === e.value)
                        throw new Error(
                          'Missing "value" in JSON Patch add operation'
                        );
                      new o(e.path, 2).add(t, e.value);
                    },
                  },
                  {
                    key: "remove",
                    value: function (e, t) {
                      new o(e.path).remove(t);
                    },
                  },
                  {
                    key: "replace",
                    value: function (e, t) {
                      if (void 0 === e.value)
                        throw new Error(
                          'Missing "value" in JSON Patch replace operation'
                        );
                      new o(e.path).replace(t, e.value);
                    },
                  },
                  {
                    key: "move",
                    value: function (e, t) {
                      if (void 0 === e.from)
                        throw new Error(
                          'Missing "from" in JSON Patch move operation'
                        );
                      if (e.path.match(new RegExp("^" + e.from)))
                        throw new Error(
                          'Invalid "from" in JSON Patch move operation'
                        );
                      var n = new o(e.path),
                        r = new o(e.from),
                        i = r.get(t);
                      r.remove(t), n.add(t, i);
                    },
                  },
                  {
                    key: "copy",
                    value: function (e, t) {
                      if (void 0 === e.from)
                        throw new Error(
                          'Missing "from" in JSON Patch copy operation'
                        );
                      var n = new o(e.path),
                        r = new o(e.from).get(t);
                      n.add(t, r);
                    },
                  },
                  {
                    key: "test",
                    value: function (e, t) {
                      if (void 0 === e.value)
                        throw new Error(
                          'Missing "value" in JSON Patch test operation'
                        );
                      var n = new o(e.path).get(t);
                      if ((r(e.value), n !== e.value))
                        throw new Error("Mismatching JSON Patch test value");
                    },
                  },
                ]),
                e
              );
            })();
          e.exports = s;
        },
        function (e, t, n) {
          "use strict";
          var r =
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
                  },
            i = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })();
          var o = n(20),
            a = 0,
            s = (function () {
              function e(t) {
                var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this.schema = t),
                  Object.assign(this, n),
                  this.address || (this.address = ""),
                  !0 !== this.require && (this.require = !1);
              }
              return (
                i(e, null, [
                  {
                    key: "compile",
                    value: function (t) {
                      var n =
                        '\n      // "cursor"\n      let value = data\n      let container\n      let stack = []\n      let top = -1\n\n      // error state\n      let valid = true\n      let errors = []\n\n      // complex schema state\n      let initialValidity\n      let anyValid\n      let notValid\n      let countOfValid\n      let initialErrorCount\n      let accumulatedErrorCount\n\n      // validation code\n      ' +
                        new e(t).compile() +
                        "\n\n      // validation result\n      return {\n        valid,\n        errors\n      }\n    ";
                      return new Function("data", n);
                    },
                  },
                  {
                    key: "counter",
                    get: function () {
                      return a++;
                    },
                  },
                ]),
                i(e, [
                  {
                    key: "compile",
                    value: function () {
                      var e = "";
                      return (
                        this.require && (e += this.required()),
                        (e += this.type()),
                        (e += this.array()),
                        (e += this.number()),
                        (e += this.object()),
                        (e += this.string()),
                        (e += this.enum()),
                        (e += this.anyOf()),
                        (e += this.allOf()),
                        (e += this.not()),
                        (e += this.oneOf())
                      );
                    },
                  },
                  {
                    key: "push",
                    value: function () {
                      return "\n      stack.push(value)\n      container = value\n      top++\n    ";
                    },
                  },
                  {
                    key: "pop",
                    value: function () {
                      return "\n      if (stack.length > 1) {\n        top--\n        stack.pop()\n      }\n\n      value = container = stack[top]\n    ";
                    },
                  },
                  {
                    key: "type",
                    value: function () {
                      var e = this.schema.type,
                        t = this.address,
                        n = "";
                      e &&
                        (n +=
                          "\n      // " +
                          t +
                          " type checking\n      if (value !== undefined && " +
                          (Array.isArray(e) ? e : [e])
                            .map(function (e) {
                              return "array" === e
                                ? "!Array.isArray(value)"
                                : "boolean" === e
                                ? "typeof value !== 'boolean'"
                                : "integer" === e
                                ? "!Number.isInteger(value)"
                                : "null" === e
                                ? "value !== null"
                                : "number" === e
                                ? "typeof value !== 'number'"
                                : "object" === e
                                ? "(typeof value !== 'object' || Array.isArray(value) || value === null)"
                                : "string" === e
                                ? "typeof value !== 'string'"
                                : void 0;
                            })
                            .join(" && ") +
                          ") {\n        valid = false\n        errors.push({\n          keyword: 'type',\n          message: 'invalid type'\n        })\n      }\n      ");
                      return n;
                    },
                  },
                  {
                    key: "array",
                    value: function () {
                      var e = this.validations([
                          "additionalItems",
                          "items",
                          "minItems",
                          "maxItems",
                          "uniqueItems",
                        ]),
                        t = "";
                      return (
                        e.length > 0 &&
                          (t +=
                            "\n      /**\n       * Array validations\n       */\n      if (Array.isArray(value)) {\n      " +
                            e +
                            "\n      }\n      "),
                        t
                      );
                    },
                  },
                  {
                    key: "number",
                    value: function () {
                      var e = this.validations([
                          "minimum",
                          "maximum",
                          "multipleOf",
                        ]),
                        t = "";
                      return (
                        e.length > 0 &&
                          (t +=
                            "\n      /**\n       * Number validations\n       */\n      if (typeof value === 'number') {\n      " +
                            e +
                            "\n      }\n      "),
                        t
                      );
                    },
                  },
                  {
                    key: "object",
                    value: function () {
                      var e = this.validations([
                          "maxProperties",
                          "minProperties",
                          "additionalProperties",
                          "properties",
                          "patternProperties",
                          "dependencies",
                          "schemaDependencies",
                          "propertyDependencies",
                        ]),
                        t = "";
                      return (
                        e.length > 0 &&
                          (t +=
                            "\n      /**\n       * Object validations\n       */\n      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {\n      " +
                            e +
                            "\n      }\n      "),
                        t
                      );
                    },
                  },
                  {
                    key: "string",
                    value: function () {
                      var e = this.validations([
                          "maxLength",
                          "minLength",
                          "pattern",
                          "format",
                        ]),
                        t = "";
                      return (
                        e.length > 0 &&
                          (t +=
                            "\n      /**\n       * String validations\n       */\n      if (typeof value === 'string') {\n      " +
                            e +
                            "\n      }\n      "),
                        t
                      );
                    },
                  },
                  {
                    key: "validations",
                    value: function (e) {
                      var t = this,
                        n = this.schema,
                        r = "";
                      return (
                        Object.keys(n)
                          .filter(function (t) {
                            return -1 !== e.indexOf(t);
                          })
                          .forEach(function (e) {
                            r += t[e]();
                          }),
                        r
                      );
                    },
                  },
                  {
                    key: "enum",
                    value: function () {
                      var e = this.schema.enum,
                        t = this.address,
                        n = ["value !== undefined"],
                        i = "";
                      return (
                        e &&
                          (e.forEach(function (e) {
                            switch (void 0 === e ? "undefined" : r(e)) {
                              case "boolean":
                              case "number":
                                n.push("value !== " + e);
                                break;
                              case "string":
                                n.push('value !== "' + e + '"');
                                break;
                              case "object":
                                null === e
                                  ? n.push("value !== null")
                                  : n.push(
                                      "'" +
                                        JSON.stringify(e) +
                                        "' !== JSON.stringify(value)"
                                    );
                                break;
                              default:
                                throw new Error(
                                  "Things are not well in the land of enum"
                                );
                            }
                          }),
                          (i +=
                            '\n      /**\n       * Validate "' +
                            t +
                            '" enum\n       */\n      if (' +
                            n.join(" && ") +
                            ") {\n        valid = false\n        errors.push({\n          keyword: 'enum',\n          message: JSON.stringify(value) + ' is not an enumerated value'\n        })\n      }\n      ")),
                        i
                      );
                    },
                  },
                  {
                    key: "anyOf",
                    value: function () {
                      var t = this.schema.anyOf,
                        n = this.address,
                        r = "";
                      return (
                        Array.isArray(t) &&
                          ((r +=
                            "\n        initialValidity = valid\n        initialErrorCount = errors.length\n        anyValid = false\n      "),
                          t.forEach(function (t) {
                            var i = new e(t, { address: n });
                            r +=
                              "\n        accumulatedErrorCount = errors.length\n        " +
                              i.compile() +
                              "\n        if (accumulatedErrorCount === errors.length) {\n          anyValid = true\n        }\n        ";
                          }),
                          (r +=
                            "\n          if (anyValid === true) {\n            valid = initialValidity\n            errors = errors.slice(0, initialErrorCount)\n          }\n      ")),
                        r
                      );
                    },
                  },
                  {
                    key: "allOf",
                    value: function () {
                      var t = this.schema.allOf,
                        n = this.address,
                        r = "";
                      return (
                        Array.isArray(t) &&
                          t.forEach(function (t) {
                            var i = new e(t, { address: n });
                            r += "\n        " + i.compile() + "\n        ";
                          }),
                        r
                      );
                    },
                  },
                  {
                    key: "oneOf",
                    value: function () {
                      var t = this.schema.oneOf,
                        n = this.address,
                        r = "";
                      return (
                        Array.isArray(t) &&
                          ((r +=
                            "\n        /**\n         * Validate " +
                            n +
                            " oneOf\n         */\n        initialValidity = valid\n        initialErrorCount = errors.length\n        countOfValid = 0\n      "),
                          t.forEach(function (t) {
                            var i = new e(t, { address: n });
                            r +=
                              "\n        accumulatedErrorCount = errors.length\n        " +
                              i.compile() +
                              "\n        if (accumulatedErrorCount === errors.length) {\n          countOfValid += 1\n        }\n        ";
                          }),
                          (r +=
                            "\n          if (countOfValid === 1) {\n            valid = initialValidity\n            errors = errors.slice(0, initialErrorCount)\n          } else {\n            valid = false\n            errors.push({\n              keyword: 'oneOf',\n              message: 'what is a reasonable error message for this case?'\n            })\n          }\n      ")),
                        r
                      );
                    },
                  },
                  {
                    key: "not",
                    value: function () {
                      var t = this.schema.not,
                        n = this.address,
                        i = "";
                      "object" !== (void 0 === t ? "undefined" : r(t)) ||
                        null === t ||
                        Array.isArray(t) ||
                        (i +=
                          "\n        /**\n         * NOT\n         */\n        if (value !== undefined) {\n          initialValidity = valid\n          initialErrorCount = errors.length\n          notValid = true\n\n          accumulatedErrorCount = errors.length\n\n          " +
                          new e(t, { address: n }).compile() +
                          "\n\n          if (accumulatedErrorCount === errors.length) {\n            notValid = false\n          }\n\n          if (notValid === true) {\n            valid = initialValidity\n            errors = errors.slice(0, initialErrorCount)\n          } else {\n            valid = false\n            errors = errors.slice(0, initialErrorCount)\n            errors.push({\n              keyword: 'not',\n              message: 'hmm...'\n            })\n          }\n        }\n      ");
                      return i;
                    },
                  },
                  {
                    key: "properties",
                    value: function () {
                      var t = this.schema,
                        n = this.address,
                        i = t.properties,
                        o = t.required,
                        a = this.push();
                      return (
                        (o = Array.isArray(o) ? o : []),
                        "object" === (void 0 === i ? "undefined" : r(i)) &&
                          Object.keys(i).forEach(function (t) {
                            var r = i[t],
                              s = -1 !== o.indexOf(t),
                              u = new e(r, {
                                address: [n, t]
                                  .filter(function (e) {
                                    return !!e;
                                  })
                                  .join("."),
                                require: s,
                              });
                            (a +=
                              "\n        value = container['" +
                              t +
                              "']\n        "),
                              (a += u.compile());
                          }),
                        (a += this.pop())
                      );
                    },
                  },
                  {
                    key: "otherProperties",
                    value: function () {
                      return (
                        "\n      /**\n       * Validate Other Properties\n       */\n      " +
                        this.push() +
                        "\n\n      for (let key in container) {\n        value = container[key]\n        matched = false\n\n        " +
                        this.patternValidations() +
                        "\n        " +
                        this.additionalValidations() +
                        "\n      }\n\n      " +
                        this.pop() +
                        "\n    "
                      );
                    },
                  },
                  {
                    key: "patternValidations",
                    value: function () {
                      var t = this.schema.patternProperties,
                        n = "";
                      return (
                        "object" === (void 0 === t ? "undefined" : r(t)) &&
                          Object.keys(t).forEach(function (r) {
                            var i = new e(t[r]);
                            n +=
                              "\n          if (key.match('" +
                              r +
                              "')) {\n            matched = true\n            " +
                              i.compile() +
                              "\n          }\n        ";
                          }),
                        n
                      );
                    },
                  },
                  {
                    key: "additionalValidations",
                    value: function () {
                      var t = this.schema,
                        n = t.properties,
                        i = t.additionalProperties,
                        o = this.address,
                        a = "",
                        s = ["matched !== true"];
                      if (
                        (Object.keys(n || {}).forEach(function (e) {
                          s.push("key !== '" + e + "'");
                        }),
                        "object" === (void 0 === i ? "undefined" : r(i)))
                      ) {
                        var u = new e(i, { address: o + "[APKey]" });
                        a +=
                          "\n        // validate additional properties\n        if (" +
                          s.join(" && ") +
                          ") {\n          " +
                          u.compile() +
                          "\n        }\n      ";
                      }
                      return (
                        !1 === i &&
                          (a +=
                            "\n        // validate non-presence of additional properties\n        if (" +
                            s.join(" && ") +
                            ") {\n          valid = false\n          errors.push({\n            keyword: 'additionalProperties',\n            message: key + ' is not a defined property'\n          })\n        }\n      "),
                        a
                      );
                    },
                  },
                  {
                    key: "patternProperties",
                    value: function () {
                      var e = "";
                      return (
                        this.otherPropertiesCalled ||
                          ((this.otherPropertiesCalled = !0),
                          (e += this.otherProperties())),
                        e
                      );
                    },
                  },
                  {
                    key: "additionalProperties",
                    value: function () {
                      var e = "";
                      return (
                        this.otherPropertiesCalled ||
                          ((this.otherPropertiesCalled = !0),
                          (e += this.otherProperties())),
                        e
                      );
                    },
                  },
                  {
                    key: "minProperties",
                    value: function () {
                      var e = this.schema.minProperties;
                      return (
                        "\n        // " +
                        this.address +
                        " min properties\n        if (Object.keys(value).length < " +
                        e +
                        ") {\n          valid = false\n          errors.push({\n            keyword: 'minProperties',\n            message: 'too few properties'\n          })\n        }\n    "
                      );
                    },
                  },
                  {
                    key: "maxProperties",
                    value: function () {
                      var e = this.schema.maxProperties;
                      return (
                        "\n        // " +
                        this.address +
                        " max properties\n        if (Object.keys(value).length > " +
                        e +
                        ") {\n          valid = false\n          errors.push({\n            keyword: 'maxProperties',\n            message: 'too many properties'\n          })\n        }\n    "
                      );
                    },
                  },
                  {
                    key: "dependencies",
                    value: function () {
                      var t = this.schema.dependencies,
                        n = this.address,
                        i = this.push();
                      return (
                        "object" === (void 0 === t ? "undefined" : r(t)) &&
                          Object.keys(t).forEach(function (o) {
                            var a = t[o],
                              s = [];
                            if (Array.isArray(a))
                              a.forEach(function (e) {
                                s.push("container['" + e + "'] === undefined");
                              }),
                                (i +=
                                  "\n            if (container['" +
                                  o +
                                  "'] !== undefined && (" +
                                  s.join(" || ") +
                                  ")) {\n              valid = false\n              errors.push({\n                keyword: 'dependencies',\n                message: 'unmet dependencies'\n              })\n            }\n          ");
                            else if (
                              "object" === (void 0 === a ? "undefined" : r(a))
                            ) {
                              var u = new e(a, { address: n });
                              i +=
                                "\n            if (container['" +
                                o +
                                "'] !== undefined) {\n              " +
                                u.compile() +
                                "\n            }\n          ";
                            }
                          }),
                        (i += this.pop())
                      );
                    },
                  },
                  {
                    key: "required",
                    value: function () {
                      this.schema.properties;
                      var e = "";
                      return (e +=
                        "\n      // validate " +
                        this.address +
                        " presence\n      if (value === undefined) {\n        valid = false\n        errors.push({\n          keyword: 'required',\n          message: 'is required'\n        })\n      }\n    ");
                    },
                  },
                  {
                    key: "additionalItems",
                    value: function () {
                      var t = this.schema,
                        n = t.items,
                        i = t.additionalItems,
                        o = (this.address, "");
                      if (
                        (!1 === i &&
                          Array.isArray(n) &&
                          (o +=
                            "\n        // don't allow additional items\n        if (value.length > " +
                            n.length +
                            ") {\n          valid = false\n          errors.push({\n            keyword: 'additionalItems',\n            message: 'additional items not allowed'\n          })\n        }\n      "),
                        "object" === (void 0 === i ? "undefined" : r(i)) &&
                          null !== i &&
                          Array.isArray(n))
                      ) {
                        var a = new e(i),
                          s = e.counter;
                        o +=
                          "\n        // additional items\n        " +
                          this.push() +
                          "\n\n        for (var i" +
                          s +
                          " = " +
                          n.length +
                          "; i" +
                          s +
                          " <= container.length; i" +
                          s +
                          "++) {\n          value = container[i" +
                          s +
                          "]\n          " +
                          a.compile() +
                          "\n        }\n\n        " +
                          this.pop() +
                          "\n      ";
                      }
                      return o;
                    },
                  },
                  {
                    key: "items",
                    value: function () {
                      var t = this.schema.items,
                        n = this.address,
                        i = "";
                      if (Array.isArray(t))
                        (i += this.push()),
                          t.forEach(function (t, r) {
                            var o = new e(t, { address: n + "[" + r + "]" });
                            i +=
                              "\n          // item #" +
                              r +
                              "\n          value = container[" +
                              r +
                              "]\n          " +
                              o.compile() +
                              "\n        ";
                          }),
                          (i += this.pop());
                      else if (
                        "object" === (void 0 === t ? "undefined" : r(t)) &&
                        null !== t
                      ) {
                        var o = new e(t),
                          a = e.counter;
                        i +=
                          "\n        // items\n        " +
                          this.push() +
                          "\n\n        for (var i" +
                          a +
                          " = 0; i" +
                          a +
                          " < container.length; i" +
                          a +
                          "++) {\n          // read array element\n          value = container[i" +
                          a +
                          "]\n          " +
                          o.compile() +
                          "\n        }\n\n        " +
                          this.pop() +
                          "\n      ";
                      }
                      return i;
                    },
                  },
                  {
                    key: "minItems",
                    value: function () {
                      var e = this.schema.minItems;
                      return (
                        "\n        // " +
                        this.address +
                        " min items\n        if (value.length < " +
                        e +
                        ") {\n          valid = false\n          errors.push({\n            keyword: 'minItems',\n            message: 'too few properties'\n          })\n        }\n    "
                      );
                    },
                  },
                  {
                    key: "maxItems",
                    value: function () {
                      var e = this.schema.maxItems;
                      return (
                        "\n        // " +
                        this.address +
                        " max items\n        if (value.length > " +
                        e +
                        ") {\n          valid = false\n          errors.push({\n            keyword: 'maxItems',\n            message: 'too many properties'\n          })\n        }\n    "
                      );
                    },
                  },
                  {
                    key: "uniqueItems",
                    value: function () {
                      var e = this.schema.uniqueItems,
                        t = this.address,
                        n = "";
                      return (
                        !0 === e &&
                          (n +=
                            "\n        // validate " +
                            t +
                            " unique items\n        let values = value.map(v => JSON.stringify(v)) // TODO: optimize\n        let set = new Set(values)\n        if (values.length !== set.size) {\n          valid = false\n          errors.push({\n            keyword: 'uniqueItems',\n            message: 'items must be unique'\n          })\n        }\n      "),
                        n
                      );
                    },
                  },
                  {
                    key: "minLength",
                    value: function () {
                      var e = this.schema.minLength;
                      return (
                        "\n        // " +
                        this.address +
                        " validate minLength\n        if (Array.from(value).length < " +
                        e +
                        ") {\n          valid = false\n          errors.push({\n            keyword: 'minLength',\n            message: 'too short'\n          })\n        }\n    "
                      );
                    },
                  },
                  {
                    key: "maxLength",
                    value: function () {
                      var e = this.schema.maxLength;
                      return (
                        "\n        // " +
                        this.address +
                        " validate maxLength\n        if (Array.from(value).length > " +
                        e +
                        ") {\n          valid = false\n          errors.push({\n            keyword: 'maxLength',\n            message: 'too long'\n          })\n        }\n    "
                      );
                    },
                  },
                  {
                    key: "pattern",
                    value: function () {
                      var e = this.schema.pattern,
                        t = this.address;
                      if (e)
                        return (
                          "\n          // " +
                          t +
                          " validate pattern\n          if (!value.match(new RegExp('" +
                          e +
                          "'))) {\n            valid = false\n            errors.push({\n              keyword: 'pattern',\n              message: 'does not match the required pattern'\n            })\n          }\n      "
                        );
                    },
                  },
                  {
                    key: "format",
                    value: function () {
                      var e = this.schema.format,
                        t = this.address,
                        n = o.resolve(e);
                      if (n)
                        return (
                          "\n      // " +
                          t +
                          " validate format\n      if (!value.match(" +
                          n +
                          ")) {\n        valid = false\n        errors.push({\n          keyword: 'format',\n          message: 'is not \"" +
                          e +
                          "\" format'\n        })\n      }\n      "
                        );
                    },
                  },
                  {
                    key: "minimum",
                    value: function () {
                      var e = this.schema,
                        t = e.minimum,
                        n = e.exclusiveMinimum;
                      return (
                        "\n        // " +
                        this.address +
                        " validate minimum\n        if (value " +
                        (!0 === n ? "<=" : "<") +
                        " " +
                        t +
                        ") {\n          valid = false\n          errors.push({\n            keyword: 'minimum',\n            message: 'too small'\n          })\n        }\n    "
                      );
                    },
                  },
                  {
                    key: "maximum",
                    value: function () {
                      var e = this.schema,
                        t = e.maximum,
                        n = e.exclusiveMaximum;
                      return (
                        "\n        // " +
                        this.address +
                        " validate maximum\n        if (value " +
                        (!0 === n ? ">=" : ">") +
                        " " +
                        t +
                        ") {\n          valid = false\n          errors.push({\n            keyword: 'maximum',\n            message: 'too large'\n          })\n        }\n    "
                      );
                    },
                  },
                  {
                    key: "multipleOf",
                    value: function () {
                      var e = this.schema.multipleOf,
                        t = "";
                      if ("number" == typeof e) {
                        var n = e.toString().length - e.toFixed(0).length - 1,
                          r = n > 0 ? Math.pow(10, n) : 1;
                        t +=
                          "\n        if (" +
                          (n > 0
                            ? "(value * " + r + ") % " + e * r + " !== 0"
                            : "value % " + e + " !== 0") +
                          ") {\n          valid = false\n          errors.push({\n            keyword: 'multipleOf',\n            message: 'must be a multiple of " +
                          e +
                          "'\n          })\n        }\n      ";
                      }
                      return t;
                    },
                  },
                ]),
                e
              );
            })();
          e.exports = s;
        },
        function (e, t, n) {
          "use strict";
          (function (t) {
            var r = t.TextEncoder ? t.TextEncoder : n(62).TextEncoder;
            e.exports = r;
          }.call(this, n(4)));
        },
        function (e, t, n) {
          "use strict";
          var r = (function (e) {
            function t(e) {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t);
              var n = (function (e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !t || ("object" != typeof t && "function" != typeof t)
                  ? e
                  : t;
              })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
              return (n.message = e + " is not a supported algorithm"), n;
            }
            return (
              (function (e, t) {
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
              })(t, Error),
              t
            );
          })();
          e.exports = r;
        },
        function (e, t, n) {
          "use strict";
          e.exports = { DataError: n(27), NotSupportedError: n(25) };
        },
        function (e, t, n) {
          "use strict";
          var r = (function (e) {
            function t(e) {
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                (function (e, t) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !t || ("object" != typeof t && "function" != typeof t)
                    ? e
                    : t;
                })(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                )
              );
            }
            return (
              (function (e, t) {
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
              })(t, Error),
              t
            );
          })();
          e.exports = r;
        },
        function (e, t, n) {
          "use strict";
          var r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })();
          var i = n(2).JSONDocument,
            o = n(11),
            a = n(14),
            s = (function (e) {
              function t() {
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                  (function (e, t) {
                    if (!e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !t ||
                      ("object" != typeof t && "function" != typeof t)
                      ? e
                      : t;
                  })(
                    this,
                    (t.__proto__ || Object.getPrototypeOf(t)).apply(
                      this,
                      arguments
                    )
                  )
                );
              }
              return (
                (function (e, t) {
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
                })(t, i),
                r(t, null, [
                  {
                    key: "importKey",
                    value: function (e) {
                      return a.importKey(e);
                    },
                  },
                  {
                    key: "schema",
                    get: function () {
                      return o;
                    },
                  },
                ]),
                t
              );
            })();
          e.exports = s;
        },
        function (e, t, n) {
          "use strict";
          var r = new (0, n(2).JSONSchema)({
            type: "object",
            properties: { keys: { type: "array", items: n(11) } },
          });
          e.exports = r;
        },
        function (e, t, n) {
          "use strict";
          var r = n(31),
            i = n(32),
            o = n(33),
            a = new (0, n(2).JSONSchema)({
              type: "object",
              properties: {
                type: { type: "string", enum: ["JWS", "JWE"] },
                segments: { type: "array" },
                header: o,
                protected: o,
                unprotected: o,
                iv: r,
                aad: r,
                ciphertext: r,
                tag: r,
                recipients: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: { header: o, encrypted_key: r },
                  },
                },
                payload: i,
                signatures: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      protected: o,
                      header: o,
                      signature: r,
                      key: { type: "object" },
                    },
                  },
                },
                signature: r,
                verified: { type: "boolean", default: !1 },
                key: { type: "object" },
                serialization: {
                  type: "string",
                  enum: ["compact", "json", "flattened"],
                  default: "compact",
                },
              },
            });
          e.exports = a;
        },
        function (e, t, n) {
          "use strict";
          var r = new (0, n(2).JSONSchema)({
            type: "string",
            format: "base64url",
          });
          e.exports = r;
        },
        function (e, t, n) {
          "use strict";
          var r = new (0, n(2).JSONSchema)({
            properties: {
              iss: { type: "string", format: "StringOrURI" },
              sub: { type: "string", format: "StringOrURI" },
              aud: {
                type: ["array", "string"],
                format: "StringOrURI",
                items: { format: "StringOrURI" },
              },
              exp: { type: "number", format: "NumericDate" },
              nbf: { type: "number", format: "NumericDate" },
              iat: { type: "number", format: "NumericDate" },
              jti: { type: "string" },
            },
          });
          e.exports = r;
        },
        function (e, t, n) {
          "use strict";
          n(11);
          var r = new (0, n(2).JSONSchema)({
            type: "object",
            properties: {
              typ: { type: "string" },
              cty: { type: "string", enum: ["JWT"] },
              alg: { type: "string", format: "StringOrURI" },
              jku: { type: "string", format: "URI" },
              kid: { type: "string" },
              x5u: { type: "string", format: "URI" },
              x5c: {
                type: "array",
                items: { type: "string", format: "base64" },
              },
              x5t: { type: "string", format: "base64url" },
              crit: { type: "array", items: { type: "string" }, minItems: 1 },
              enc: { type: "string", format: "StringOrURI" },
              zip: { type: "string" },
            },
          });
          e.exports = r;
        },
        function (e, t, n) {
          "use strict";
          var r = (function () {
              return function (e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e))
                  return (function (e, t) {
                    var n = [],
                      r = !0,
                      i = !1,
                      o = void 0;
                    try {
                      for (
                        var a, s = e[Symbol.iterator]();
                        !(r = (a = s.next()).done) &&
                        (n.push(a.value), !t || n.length !== t);
                        r = !0
                      );
                    } catch (e) {
                      (i = !0), (o = e);
                    } finally {
                      try {
                        !r && s.return && s.return();
                      } finally {
                        if (i) throw o;
                      }
                    }
                    return n;
                  })(e, t);
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance"
                );
              };
            })(),
            i = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })();
          var o = n(3),
            a = n(14),
            s = n(26).DataError,
            u = (function () {
              function e() {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e);
              }
              return (
                i(e, null, [
                  {
                    key: "sign",
                    value: function (e) {
                      var t = o(JSON.stringify(e.payload));
                      if ("compact" === e.serialization) {
                        var n = e.key,
                          r = e.header.alg,
                          i = o(JSON.stringify(e.header)) + "." + t;
                        return a.sign(r, n, i).then(function (e) {
                          return i + "." + e;
                        });
                      }
                      return (
                        e.serialization,
                        e.serialization,
                        Promise.reject(new s("Unsupported serialization"))
                      );
                    },
                  },
                  {
                    key: "verify",
                    value: function (e) {
                      e.signatures;
                      var t = e.key,
                        n = e.signature,
                        i = e.header.alg;
                      if (e.signature) {
                        var o = r(e.segments, 2),
                          u = o[0] + "." + o[1];
                        return "none" === i
                          ? Promise.reject(
                              new s(
                                "Signature provided to verify with alg: none"
                              )
                            )
                          : a.verify(i, t, n, u).then(function (t) {
                              return (e.verified = t), t;
                            });
                      }
                      if ("none" === i) {
                        if (!t && !n)
                          return (e.verified = !0), Promise.resolve(!0);
                        if (t)
                          return Promise.reject(
                            new s(
                              "Key provided to verify signature with alg: none"
                            )
                          );
                      }
                      return Promise.reject(new s("Missing signature(s)"));
                    },
                  },
                ]),
                e
              );
            })();
          e.exports = u;
        },
        function (e, t) {
          e.exports = function (e) {
            var t = [];
            return (
              (t.toString = function () {
                return this.map(function (t) {
                  var n = (function (e, t) {
                    var n = e[1] || "",
                      r = e[3];
                    if (!r) return n;
                    if (t && "function" == typeof btoa) {
                      var i = (function (e) {
                          return (
                            "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                            btoa(
                              unescape(encodeURIComponent(JSON.stringify(e)))
                            ) +
                            " */"
                          );
                        })(r),
                        o = r.sources.map(function (e) {
                          return "/*# sourceURL=" + r.sourceRoot + e + " */";
                        });
                      return [n].concat(o).concat([i]).join("\n");
                    }
                    return [n].join("\n");
                  })(t, e);
                  return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
                }).join("");
              }),
              (t.i = function (e, n) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var r = {}, i = 0; i < this.length; i++) {
                  var o = this[i][0];
                  "number" == typeof o && (r[o] = !0);
                }
                for (i = 0; i < e.length; i++) {
                  var a = e[i];
                  ("number" == typeof a[0] && r[a[0]]) ||
                    (n && !a[2]
                      ? (a[2] = n)
                      : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                    t.push(a));
                }
              }),
              t
            );
          };
        },
        function (e, t, n) {
          var r = {},
            i = (function (e) {
              var t;
              return function () {
                return void 0 === t && (t = e.apply(this, arguments)), t;
              };
            })(function () {
              return window && document && document.all && !window.atob;
            }),
            o = (function (e) {
              var t = {};
              return function (e, n) {
                if ("function" == typeof e) return e();
                if (void 0 === t[e]) {
                  var r = function (e, t) {
                    return t ? t.querySelector(e) : document.querySelector(e);
                  }.call(this, e, n);
                  if (
                    window.HTMLIFrameElement &&
                    r instanceof window.HTMLIFrameElement
                  )
                    try {
                      r = r.contentDocument.head;
                    } catch (e) {
                      r = null;
                    }
                  t[e] = r;
                }
                return t[e];
              };
            })(),
            a = null,
            s = 0,
            u = [],
            c = n(80);
          function l(e, t) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n],
                o = r[i.id];
              if (o) {
                o.refs++;
                for (var a = 0; a < o.parts.length; a++) o.parts[a](i.parts[a]);
                for (; a < i.parts.length; a++) o.parts.push(m(i.parts[a], t));
              } else {
                var s = [];
                for (a = 0; a < i.parts.length; a++) s.push(m(i.parts[a], t));
                r[i.id] = { id: i.id, refs: 1, parts: s };
              }
            }
          }
          function f(e, t) {
            for (var n = [], r = {}, i = 0; i < e.length; i++) {
              var o = e[i],
                a = t.base ? o[0] + t.base : o[0],
                s = { css: o[1], media: o[2], sourceMap: o[3] };
              r[a]
                ? r[a].parts.push(s)
                : n.push((r[a] = { id: a, parts: [s] }));
            }
            return n;
          }
          function p(e, t) {
            var n = o(e.insertInto);
            if (!n)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
              );
            var r = u[u.length - 1];
            if ("top" === e.insertAt)
              r
                ? r.nextSibling
                  ? n.insertBefore(t, r.nextSibling)
                  : n.appendChild(t)
                : n.insertBefore(t, n.firstChild),
                u.push(t);
            else if ("bottom" === e.insertAt) n.appendChild(t);
            else {
              if ("object" != typeof e.insertAt || !e.insertAt.before)
                throw new Error(
                  "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
                );
              var i = o(e.insertAt.before, n);
              n.insertBefore(t, i);
            }
          }
          function h(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
            var t = u.indexOf(e);
            t >= 0 && u.splice(t, 1);
          }
          function d(e) {
            var t = document.createElement("style");
            if (
              (void 0 === e.attrs.type && (e.attrs.type = "text/css"),
              void 0 === e.attrs.nonce)
            ) {
              var r = (function () {
                0;
                return n.nc;
              })();
              r && (e.attrs.nonce = r);
            }
            return y(t, e.attrs), p(e, t), t;
          }
          function y(e, t) {
            Object.keys(t).forEach(function (n) {
              e.setAttribute(n, t[n]);
            });
          }
          function m(e, t) {
            var n, r, i, o;
            if (t.transform && e.css) {
              if (!(o = t.transform(e.css))) return function () {};
              e.css = o;
            }
            if (t.singleton) {
              var u = s++;
              (n = a || (a = d(t))),
                (r = g.bind(null, n, u, !1)),
                (i = g.bind(null, n, u, !0));
            } else
              e.sourceMap &&
              "function" == typeof URL &&
              "function" == typeof URL.createObjectURL &&
              "function" == typeof URL.revokeObjectURL &&
              "function" == typeof Blob &&
              "function" == typeof btoa
                ? ((n = (function (e) {
                    var t = document.createElement("link");
                    return (
                      void 0 === e.attrs.type && (e.attrs.type = "text/css"),
                      (e.attrs.rel = "stylesheet"),
                      y(t, e.attrs),
                      p(e, t),
                      t
                    );
                  })(t)),
                  (r = function (e, t, n) {
                    var r = n.css,
                      i = n.sourceMap,
                      o = void 0 === t.convertToAbsoluteUrls && i;
                    (t.convertToAbsoluteUrls || o) && (r = c(r));
                    i &&
                      (r +=
                        "\n/*# sourceMappingURL=data:application/json;base64," +
                        btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
                        " */");
                    var a = new Blob([r], { type: "text/css" }),
                      s = e.href;
                    (e.href = URL.createObjectURL(a)),
                      s && URL.revokeObjectURL(s);
                  }.bind(null, n, t)),
                  (i = function () {
                    h(n), n.href && URL.revokeObjectURL(n.href);
                  }))
                : ((n = d(t)),
                  (r = function (e, t) {
                    var n = t.css,
                      r = t.media;
                    r && e.setAttribute("media", r);
                    if (e.styleSheet) e.styleSheet.cssText = n;
                    else {
                      for (; e.firstChild; ) e.removeChild(e.firstChild);
                      e.appendChild(document.createTextNode(n));
                    }
                  }.bind(null, n)),
                  (i = function () {
                    h(n);
                  }));
            return (
              r(e),
              function (t) {
                if (t) {
                  if (
                    t.css === e.css &&
                    t.media === e.media &&
                    t.sourceMap === e.sourceMap
                  )
                    return;
                  r((e = t));
                } else i();
              }
            );
          }
          e.exports = function (e, t) {
            if (
              "undefined" != typeof DEBUG &&
              DEBUG &&
              "object" != typeof document
            )
              throw new Error(
                "The style-loader cannot be used in a non-browser environment"
              );
            ((t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}),
              t.singleton ||
                "boolean" == typeof t.singleton ||
                (t.singleton = i()),
              t.insertInto || (t.insertInto = "head"),
              t.insertAt || (t.insertAt = "bottom");
            var n = f(e, t);
            return (
              l(n, t),
              function (e) {
                for (var i = [], o = 0; o < n.length; o++) {
                  var a = n[o];
                  (s = r[a.id]).refs--, i.push(s);
                }
                e && l(f(e, t), t);
                for (o = 0; o < i.length; o++) {
                  var s;
                  if (0 === (s = i[o]).refs) {
                    for (var u = 0; u < s.parts.length; u++) s.parts[u]();
                    delete r[s.id];
                  }
                }
              }
            );
          };
          var v = (function () {
            var e = [];
            return function (t, n) {
              return (e[t] = n), e.filter(Boolean).join("\n");
            };
          })();
          function g(e, t, n, r) {
            var i = n ? "" : r.css;
            if (e.styleSheet) e.styleSheet.cssText = v(t, i);
            else {
              var o = document.createTextNode(i),
                a = e.childNodes;
              a[t] && e.removeChild(a[t]),
                a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
            }
          }
        },
        function (e, t) {
          function n() {
            (this._events = this._events || {}),
              (this._maxListeners = this._maxListeners || void 0);
          }
          function r(e) {
            return "function" == typeof e;
          }
          function i(e) {
            return "object" == typeof e && null !== e;
          }
          function o(e) {
            return void 0 === e;
          }
          (e.exports = n),
            (n.EventEmitter = n),
            (n.prototype._events = void 0),
            (n.prototype._maxListeners = void 0),
            (n.defaultMaxListeners = 10),
            (n.prototype.setMaxListeners = function (e) {
              if (
                !(function (e) {
                  return "number" == typeof e;
                })(e) ||
                e < 0 ||
                isNaN(e)
              )
                throw TypeError("n must be a positive number");
              return (this._maxListeners = e), this;
            }),
            (n.prototype.emit = function (e) {
              var t, n, a, s, u, c;
              if (
                (this._events || (this._events = {}),
                "error" === e &&
                  (!this._events.error ||
                    (i(this._events.error) && !this._events.error.length)))
              ) {
                if ((t = arguments[1]) instanceof Error) throw t;
                var l = new Error(
                  'Uncaught, unspecified "error" event. (' + t + ")"
                );
                throw ((l.context = t), l);
              }
              if (o((n = this._events[e]))) return !1;
              if (r(n))
                switch (arguments.length) {
                  case 1:
                    n.call(this);
                    break;
                  case 2:
                    n.call(this, arguments[1]);
                    break;
                  case 3:
                    n.call(this, arguments[1], arguments[2]);
                    break;
                  default:
                    (s = Array.prototype.slice.call(arguments, 1)),
                      n.apply(this, s);
                }
              else if (i(n))
                for (
                  s = Array.prototype.slice.call(arguments, 1),
                    a = (c = n.slice()).length,
                    u = 0;
                  u < a;
                  u++
                )
                  c[u].apply(this, s);
              return !0;
            }),
            (n.prototype.addListener = function (e, t) {
              var a;
              if (!r(t)) throw TypeError("listener must be a function");
              return (
                this._events || (this._events = {}),
                this._events.newListener &&
                  this.emit("newListener", e, r(t.listener) ? t.listener : t),
                this._events[e]
                  ? i(this._events[e])
                    ? this._events[e].push(t)
                    : (this._events[e] = [this._events[e], t])
                  : (this._events[e] = t),
                i(this._events[e]) &&
                  !this._events[e].warned &&
                  (a = o(this._maxListeners)
                    ? n.defaultMaxListeners
                    : this._maxListeners) &&
                  a > 0 &&
                  this._events[e].length > a &&
                  ((this._events[e].warned = !0),
                  console.error(
                    "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
                    this._events[e].length
                  ),
                  "function" == typeof console.trace && console.trace()),
                this
              );
            }),
            (n.prototype.on = n.prototype.addListener),
            (n.prototype.once = function (e, t) {
              if (!r(t)) throw TypeError("listener must be a function");
              var n = !1;
              function i() {
                this.removeListener(e, i),
                  n || ((n = !0), t.apply(this, arguments));
              }
              return (i.listener = t), this.on(e, i), this;
            }),
            (n.prototype.removeListener = function (e, t) {
              var n, o, a, s;
              if (!r(t)) throw TypeError("listener must be a function");
              if (!this._events || !this._events[e]) return this;
              if (
                ((a = (n = this._events[e]).length),
                (o = -1),
                n === t || (r(n.listener) && n.listener === t))
              )
                delete this._events[e],
                  this._events.removeListener &&
                    this.emit("removeListener", e, t);
              else if (i(n)) {
                for (s = a; s-- > 0; )
                  if (n[s] === t || (n[s].listener && n[s].listener === t)) {
                    o = s;
                    break;
                  }
                if (o < 0) return this;
                1 === n.length
                  ? ((n.length = 0), delete this._events[e])
                  : n.splice(o, 1),
                  this._events.removeListener &&
                    this.emit("removeListener", e, t);
              }
              return this;
            }),
            (n.prototype.removeAllListeners = function (e) {
              var t, n;
              if (!this._events) return this;
              if (!this._events.removeListener)
                return (
                  0 === arguments.length
                    ? (this._events = {})
                    : this._events[e] && delete this._events[e],
                  this
                );
              if (0 === arguments.length) {
                for (t in this._events)
                  "removeListener" !== t && this.removeAllListeners(t);
                return (
                  this.removeAllListeners("removeListener"),
                  (this._events = {}),
                  this
                );
              }
              if (r((n = this._events[e]))) this.removeListener(e, n);
              else if (n)
                for (; n.length; ) this.removeListener(e, n[n.length - 1]);
              return delete this._events[e], this;
            }),
            (n.prototype.listeners = function (e) {
              return this._events && this._events[e]
                ? r(this._events[e])
                  ? [this._events[e]]
                  : this._events[e].slice()
                : [];
            }),
            (n.prototype.listenerCount = function (e) {
              if (this._events) {
                var t = this._events[e];
                if (r(t)) return 1;
                if (t) return t.length;
              }
              return 0;
            }),
            (n.listenerCount = function (e, t) {
              return e.listenerCount(t);
            });
        },
        function (e, t, n) {
          var r = n(44);
          e.exports = function (e, t) {
            if (null == e) return {};
            var n,
              i,
              o = r(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (i = 0; i < a.length; i++)
                (n = a[i]),
                  t.indexOf(n) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, n) &&
                      (o[n] = e[n]));
            }
            return o;
          };
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            Object.defineProperty(t, "format", {
              enumerable: !0,
              get: function () {
                return r.default;
              },
            }),
            Object.defineProperty(t, "parse", {
              enumerable: !0,
              get: function () {
                return i.default;
              },
            });
          var r = o(n(45)),
            i = o(n(46));
          function o(e) {
            return e && e.__esModule ? e : { default: e };
          }
        },
        function (e, t, n) {
          "use strict";
          var r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })();
          var i = n(7).URL,
            o = n(5),
            a = o.JWT,
            s = o.JWK,
            u = (function (e) {
              function t() {
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                  (function (e, t) {
                    if (!e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !t ||
                      ("object" != typeof t && "function" != typeof t)
                      ? e
                      : t;
                  })(
                    this,
                    (t.__proto__ || Object.getPrototypeOf(t)).apply(
                      this,
                      arguments
                    )
                  )
                );
              }
              return (
                (function (e, t) {
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
                })(t, a),
                r(t, null, [
                  {
                    key: "issueFor",
                    value: function (e, n) {
                      if (!e)
                        throw new Error(
                          "Cannot issue PoPToken - missing resource server URI"
                        );
                      if (!n.sessionKey)
                        throw new Error(
                          "Cannot issue PoPToken - missing session key"
                        );
                      if (!n.authorization.id_token)
                        throw new Error(
                          "Cannot issue PoPToken - missing id token"
                        );
                      var r = JSON.parse(n.sessionKey);
                      return s
                        .importKey(r)
                        .then(function (r) {
                          var o = {
                            aud: new i(e).origin,
                            key: r,
                            iss: n.authorization.client_id,
                            id_token: n.authorization.id_token,
                          };
                          return t.issue(o);
                        })
                        .then(function (e) {
                          return e.encode();
                        });
                    },
                  },
                  {
                    key: "issue",
                    value: function (e) {
                      var n = e.aud,
                        r = e.iss,
                        i = e.key,
                        o = i.alg,
                        a = e.iat || Math.floor(Date.now() / 1e3);
                      return new t(
                        {
                          header: { alg: o },
                          payload: {
                            iss: r,
                            aud: n,
                            exp: a + (e.max || 3600),
                            iat: a,
                            id_token: e.id_token,
                            token_type: "pop",
                          },
                          key: i.cryptoKey,
                        },
                        { filter: !1 }
                      );
                    },
                  },
                ]),
                t
              );
            })();
          e.exports = u;
        },
        function (e) {
          e.exports = [
            { displayName: "Solid Community", url: "https://solid.community/" },
            {
              displayName: "Solid Test Space",
              url: "https://solidtest.space/",
            },
            { displayName: "Inrupt", url: "https://inrupt.net/" },
          ];
        },
        function (e, t, n) {
          "use strict";
          var r = n(43);
          function i() {}
          e.exports = function () {
            function e(e, t, n, i, o, a) {
              if (a !== r) {
                var s = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((s.name = "Invariant Violation"), s);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
            };
            return (n.checkPropTypes = i), (n.PropTypes = n), n;
          };
        },
        function (e, t, n) {
          "use strict";
          e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        },
        function (e, t) {
          e.exports = function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          };
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = void 0);
          var r = n(18);
          function i(e) {
            return (
              (function (e) {
                if (Array.isArray(e)) {
                  for (var t = 0, n = new Array(e.length); t < e.length; t++)
                    n[t] = e[t];
                  return n;
                }
              })(e) ||
              (function (e) {
                if (
                  Symbol.iterator in Object(e) ||
                  "[object Arguments]" === Object.prototype.toString.call(e)
                )
                  return Array.from(e);
              })(e) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance"
                );
              })()
            );
          }
          function o(e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                var n = [],
                  r = !0,
                  i = !1,
                  o = void 0;
                try {
                  for (
                    var a, s = e[Symbol.iterator]();
                    !(r = (a = s.next()).done) &&
                    (n.push(a.value), !t || n.length !== t);
                    r = !0
                  );
                } catch (e) {
                  (i = !0), (o = e);
                } finally {
                  try {
                    r || null == s.return || s.return();
                  } finally {
                    if (i) throw o;
                  }
                }
                return n;
              })(e, t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance"
                );
              })()
            );
          }
          var a = function (e) {
            return e.reduce(function (e, t) {
              var n = o(t, 2),
                a = n[0],
                s = n[1],
                u = (function (e) {
                  return function (t) {
                    return `${e}=${
                      t && !(0, r.isToken)(t) ? (0, r.quote)(t) : t
                    }`;
                  };
                })(a);
              if (!(0, r.isToken)(a)) throw new TypeError();
              return Array.isArray(s)
                ? i(e).concat(i(s.map(u)))
                : i(e).concat([u(s)]);
            }, []);
          };
          t.default = function (e, t, n) {
            var o =
              "string" == typeof e ? { scheme: e, token: t, params: n } : e;
            if ("object" != typeof o) throw new TypeError();
            if (!(0, r.isScheme)(o.scheme))
              throw new TypeError("Invalid scheme.");
            return [o.scheme]
              .concat(
                i(void 0 !== o.token ? [o.token] : []),
                i(
                  void 0 !== o.params
                    ? (function e(t, n) {
                        if (Array.isArray(t)) return a(t);
                        if ("object" == typeof t) {
                          var r = t;
                          return e(
                            Object.keys(t).map(function (e) {
                              return [e, r[e]];
                            }),
                            n
                          );
                        }
                        throw new TypeError();
                      })(o.params)
                    : []
                )
              )
              .join(" ");
          };
        },
        function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = void 0);
          var r = n(18),
            i = /((?:[a-zA-Z0-9._~+\/-]+=*(?:\s+|$))|[^\u0000-\u001F\u007F()<>@,;:\\"/?={}\[\]\u0020\u0009]+)(?:=([^\\"=\s,]+|"(?:[^"\\]|\\.)*"))?/g,
            o = function (e, t) {
              var n = '"' === t.charAt(0) ? (0, r.unquote)(t) : t.trim();
              return Array.isArray(e)
                ? e.concat(n)
                : "string" == typeof e
                ? [e, n]
                : n;
            };
          t.default = function (e) {
            if ("string" != typeof e)
              throw new TypeError("Header value must be a string.");
            var t = e.indexOf(" "),
              n = e.substr(0, t);
            if (!(0, r.isScheme)(n)) throw new TypeError(`Invalid scheme ${n}`);
            return (function (e, t) {
              for (var n = null, r = {}; ; ) {
                var a = i.exec(t);
                if (null === a) break;
                a[2] ? (r[a[1]] = o(r[a[1]], a[2])) : (n = o(n, a[1]));
              }
              return { scheme: e, params: r, token: n };
            })(n, e.substr(t));
          };
        },
        function (e, t, n) {
          (function (e, r) {
            var i = /%[sdj%]/g;
            (t.format = function (e) {
              if (!v(e)) {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t.push(s(arguments[n]));
                return t.join(" ");
              }
              n = 1;
              for (
                var r = arguments,
                  o = r.length,
                  a = String(e).replace(i, function (e) {
                    if ("%%" === e) return "%";
                    if (n >= o) return e;
                    switch (e) {
                      case "%s":
                        return String(r[n++]);
                      case "%d":
                        return Number(r[n++]);
                      case "%j":
                        try {
                          return JSON.stringify(r[n++]);
                        } catch (e) {
                          return "[Circular]";
                        }
                      default:
                        return e;
                    }
                  }),
                  u = r[n];
                n < o;
                u = r[++n]
              )
                y(u) || !b(u) ? (a += " " + u) : (a += " " + s(u));
              return a;
            }),
              (t.deprecate = function (n, i) {
                if (g(e.process))
                  return function () {
                    return t.deprecate(n, i).apply(this, arguments);
                  };
                if (!0 === r.noDeprecation) return n;
                var o = !1;
                return function () {
                  if (!o) {
                    if (r.throwDeprecation) throw new Error(i);
                    r.traceDeprecation ? console.trace(i) : console.error(i),
                      (o = !0);
                  }
                  return n.apply(this, arguments);
                };
              });
            var o,
              a = {};
            function s(e, n) {
              var r = { seen: [], stylize: c };
              return (
                arguments.length >= 3 && (r.depth = arguments[2]),
                arguments.length >= 4 && (r.colors = arguments[3]),
                d(n) ? (r.showHidden = n) : n && t._extend(r, n),
                g(r.showHidden) && (r.showHidden = !1),
                g(r.depth) && (r.depth = 2),
                g(r.colors) && (r.colors = !1),
                g(r.customInspect) && (r.customInspect = !0),
                r.colors && (r.stylize = u),
                l(r, e, r.depth)
              );
            }
            function u(e, t) {
              var n = s.styles[t];
              return n
                ? "[" + s.colors[n][0] + "m" + e + "[" + s.colors[n][1] + "m"
                : e;
            }
            function c(e, t) {
              return e;
            }
            function l(e, n, r) {
              if (
                e.customInspect &&
                n &&
                k(n.inspect) &&
                n.inspect !== t.inspect &&
                (!n.constructor || n.constructor.prototype !== n)
              ) {
                var i = n.inspect(r, e);
                return v(i) || (i = l(e, i, r)), i;
              }
              var o = (function (e, t) {
                if (g(t)) return e.stylize("undefined", "undefined");
                if (v(t)) {
                  var n =
                    "'" +
                    JSON.stringify(t)
                      .replace(/^"|"$/g, "")
                      .replace(/'/g, "\\'")
                      .replace(/\\"/g, '"') +
                    "'";
                  return e.stylize(n, "string");
                }
                if (m(t)) return e.stylize("" + t, "number");
                if (d(t)) return e.stylize("" + t, "boolean");
                if (y(t)) return e.stylize("null", "null");
              })(e, n);
              if (o) return o;
              var a = Object.keys(n),
                s = (function (e) {
                  var t = {};
                  return (
                    e.forEach(function (e, n) {
                      t[e] = !0;
                    }),
                    t
                  );
                })(a);
              if (
                (e.showHidden && (a = Object.getOwnPropertyNames(n)),
                S(n) &&
                  (a.indexOf("message") >= 0 || a.indexOf("description") >= 0))
              )
                return f(n);
              if (0 === a.length) {
                if (k(n)) {
                  var u = n.name ? ": " + n.name : "";
                  return e.stylize("[Function" + u + "]", "special");
                }
                if (w(n))
                  return e.stylize(RegExp.prototype.toString.call(n), "regexp");
                if (_(n))
                  return e.stylize(Date.prototype.toString.call(n), "date");
                if (S(n)) return f(n);
              }
              var c,
                b = "",
                E = !1,
                O = ["{", "}"];
              (h(n) && ((E = !0), (O = ["[", "]"])), k(n)) &&
                (b = " [Function" + (n.name ? ": " + n.name : "") + "]");
              return (
                w(n) && (b = " " + RegExp.prototype.toString.call(n)),
                _(n) && (b = " " + Date.prototype.toUTCString.call(n)),
                S(n) && (b = " " + f(n)),
                0 !== a.length || (E && 0 != n.length)
                  ? r < 0
                    ? w(n)
                      ? e.stylize(RegExp.prototype.toString.call(n), "regexp")
                      : e.stylize("[Object]", "special")
                    : (e.seen.push(n),
                      (c = E
                        ? (function (e, t, n, r, i) {
                            for (var o = [], a = 0, s = t.length; a < s; ++a)
                              P(t, String(a))
                                ? o.push(p(e, t, n, r, String(a), !0))
                                : o.push("");
                            return (
                              i.forEach(function (i) {
                                i.match(/^\d+$/) ||
                                  o.push(p(e, t, n, r, i, !0));
                              }),
                              o
                            );
                          })(e, n, r, s, a)
                        : a.map(function (t) {
                            return p(e, n, r, s, t, E);
                          })),
                      e.seen.pop(),
                      (function (e, t, n) {
                        if (
                          e.reduce(function (e, t) {
                            return (
                              0,
                              t.indexOf("\n") >= 0 && 0,
                              e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                            );
                          }, 0) > 60
                        )
                          return (
                            n[0] +
                            ("" === t ? "" : t + "\n ") +
                            " " +
                            e.join(",\n  ") +
                            " " +
                            n[1]
                          );
                        return n[0] + t + " " + e.join(", ") + " " + n[1];
                      })(c, b, O))
                  : O[0] + b + O[1]
              );
            }
            function f(e) {
              return "[" + Error.prototype.toString.call(e) + "]";
            }
            function p(e, t, n, r, i, o) {
              var a, s, u;
              if (
                ((u = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] })
                  .get
                  ? (s = u.set
                      ? e.stylize("[Getter/Setter]", "special")
                      : e.stylize("[Getter]", "special"))
                  : u.set && (s = e.stylize("[Setter]", "special")),
                P(r, i) || (a = "[" + i + "]"),
                s ||
                  (e.seen.indexOf(u.value) < 0
                    ? (s = y(n)
                        ? l(e, u.value, null)
                        : l(e, u.value, n - 1)).indexOf("\n") > -1 &&
                      (s = o
                        ? s
                            .split("\n")
                            .map(function (e) {
                              return "  " + e;
                            })
                            .join("\n")
                            .substr(2)
                        : "\n" +
                          s
                            .split("\n")
                            .map(function (e) {
                              return "   " + e;
                            })
                            .join("\n"))
                    : (s = e.stylize("[Circular]", "special"))),
                g(a))
              ) {
                if (o && i.match(/^\d+$/)) return s;
                (a = JSON.stringify("" + i)).match(
                  /^"([a-zA-Z_][a-zA-Z_0-9]*)"$/
                )
                  ? ((a = a.substr(1, a.length - 2)),
                    (a = e.stylize(a, "name")))
                  : ((a = a
                      .replace(/'/g, "\\'")
                      .replace(/\\"/g, '"')
                      .replace(/(^"|"$)/g, "'")),
                    (a = e.stylize(a, "string")));
              }
              return a + ": " + s;
            }
            function h(e) {
              return Array.isArray(e);
            }
            function d(e) {
              return "boolean" == typeof e;
            }
            function y(e) {
              return null === e;
            }
            function m(e) {
              return "number" == typeof e;
            }
            function v(e) {
              return "string" == typeof e;
            }
            function g(e) {
              return void 0 === e;
            }
            function w(e) {
              return b(e) && "[object RegExp]" === E(e);
            }
            function b(e) {
              return "object" == typeof e && null !== e;
            }
            function _(e) {
              return b(e) && "[object Date]" === E(e);
            }
            function S(e) {
              return b(e) && ("[object Error]" === E(e) || e instanceof Error);
            }
            function k(e) {
              return "function" == typeof e;
            }
            function E(e) {
              return Object.prototype.toString.call(e);
            }
            function O(e) {
              return e < 10 ? "0" + e.toString(10) : e.toString(10);
            }
            (t.debuglog = function (e) {
              if (
                (g(o) && (o = r.env.NODE_DEBUG || ""),
                (e = e.toUpperCase()),
                !a[e])
              )
                if (new RegExp("\\b" + e + "\\b", "i").test(o)) {
                  var n = r.pid;
                  a[e] = function () {
                    var r = t.format.apply(t, arguments);
                    console.error("%s %d: %s", e, n, r);
                  };
                } else a[e] = function () {};
              return a[e];
            }),
              (t.inspect = s),
              (s.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39],
              }),
              (s.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red",
              }),
              (t.isArray = h),
              (t.isBoolean = d),
              (t.isNull = y),
              (t.isNullOrUndefined = function (e) {
                return null == e;
              }),
              (t.isNumber = m),
              (t.isString = v),
              (t.isSymbol = function (e) {
                return "symbol" == typeof e;
              }),
              (t.isUndefined = g),
              (t.isRegExp = w),
              (t.isObject = b),
              (t.isDate = _),
              (t.isError = S),
              (t.isFunction = k),
              (t.isPrimitive = function (e) {
                return (
                  null === e ||
                  "boolean" == typeof e ||
                  "number" == typeof e ||
                  "string" == typeof e ||
                  "symbol" == typeof e ||
                  void 0 === e
                );
              }),
              (t.isBuffer = n(49));
            var A = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ];
            function P(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }
            (t.log = function () {
              console.log(
                "%s - %s",
                (function () {
                  var e = new Date(),
                    t = [
                      O(e.getHours()),
                      O(e.getMinutes()),
                      O(e.getSeconds()),
                    ].join(":");
                  return [e.getDate(), A[e.getMonth()], t].join(" ");
                })(),
                t.format.apply(t, arguments)
              );
            }),
              (t.inherits = n(50)),
              (t._extend = function (e, t) {
                if (!t || !b(t)) return e;
                for (var n = Object.keys(t), r = n.length; r--; )
                  e[n[r]] = t[n[r]];
                return e;
              });
          }.call(this, n(4), n(48)));
        },
        function (e, t) {
          var n,
            r,
            i = (e.exports = {});
          function o() {
            throw new Error("setTimeout has not been defined");
          }
          function a() {
            throw new Error("clearTimeout has not been defined");
          }
          function s(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === o || !n) && setTimeout)
              return (n = setTimeout), setTimeout(e, 0);
            try {
              return n(e, 0);
            } catch (t) {
              try {
                return n.call(null, e, 0);
              } catch (t) {
                return n.call(this, e, 0);
              }
            }
          }
          !(function () {
            try {
              n = "function" == typeof setTimeout ? setTimeout : o;
            } catch (e) {
              n = o;
            }
            try {
              r = "function" == typeof clearTimeout ? clearTimeout : a;
            } catch (e) {
              r = a;
            }
          })();
          var u,
            c = [],
            l = !1,
            f = -1;
          function p() {
            l &&
              u &&
              ((l = !1),
              u.length ? (c = u.concat(c)) : (f = -1),
              c.length && h());
          }
          function h() {
            if (!l) {
              var e = s(p);
              l = !0;
              for (var t = c.length; t; ) {
                for (u = c, c = []; ++f < t; ) u && u[f].run();
                (f = -1), (t = c.length);
              }
              (u = null),
                (l = !1),
                (function (e) {
                  if (r === clearTimeout) return clearTimeout(e);
                  if ((r === a || !r) && clearTimeout)
                    return (r = clearTimeout), clearTimeout(e);
                  try {
                    r(e);
                  } catch (t) {
                    try {
                      return r.call(null, e);
                    } catch (t) {
                      return r.call(this, e);
                    }
                  }
                })(e);
            }
          }
          function d(e, t) {
            (this.fun = e), (this.array = t);
          }
          function y() {}
          (i.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
            c.push(new d(e, t)), 1 !== c.length || l || s(h);
          }),
            (d.prototype.run = function () {
              this.fun.apply(null, this.array);
            }),
            (i.title = "browser"),
            (i.browser = !0),
            (i.env = {}),
            (i.argv = []),
            (i.version = ""),
            (i.versions = {}),
            (i.on = y),
            (i.addListener = y),
            (i.once = y),
            (i.off = y),
            (i.removeListener = y),
            (i.removeAllListeners = y),
            (i.emit = y),
            (i.prependListener = y),
            (i.prependOnceListener = y),
            (i.listeners = function (e) {
              return [];
            }),
            (i.binding = function (e) {
              throw new Error("process.binding is not supported");
            }),
            (i.cwd = function () {
              return "/";
            }),
            (i.chdir = function (e) {
              throw new Error("process.chdir is not supported");
            }),
            (i.umask = function () {
              return 0;
            });
        },
        function (e, t) {
          e.exports = function (e) {
            return (
              e &&
              "object" == typeof e &&
              "function" == typeof e.copy &&
              "function" == typeof e.fill &&
              "function" == typeof e.readUInt8
            );
          };
        },
        function (e, t) {
          "function" == typeof Object.create
            ? (e.exports = function (e, t) {
                (e.super_ = t),
                  (e.prototype = Object.create(t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  }));
              })
            : (e.exports = function (e, t) {
                e.super_ = t;
                var n = function () {};
                (n.prototype = t.prototype),
                  (e.prototype = new n()),
                  (e.prototype.constructor = e);
              });
        },
        function (e, t, n) {
          "use strict";
          var r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })();
          var i = n(22),
            o = (function () {
              function e() {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  this.initialize(t, n);
              }
              return (
                r(e, null, [
                  {
                    key: "schema",
                    get: function () {
                      throw new Error(
                        "Schema must be defined by classes extending JSONDocument"
                      );
                    },
                  },
                ]),
                r(
                  e,
                  [
                    {
                      key: "initialize",
                      value: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {};
                        this.constructor.schema.initialize(this, e, t);
                      },
                    },
                    {
                      key: "validate",
                      value: function (e) {
                        var t = this.constructor.schema;
                        return (e || t).validate(this);
                      },
                    },
                    {
                      key: "patch",
                      value: function (e) {
                        var t = new i(e);
                        t.apply(this);
                      },
                    },
                    { key: "select", value: function () {} },
                    {
                      key: "project",
                      value: function (e) {
                        return e.project(this);
                      },
                    },
                  ],
                  [
                    {
                      key: "serialize",
                      value: function (e) {
                        return JSON.stringify(e);
                      },
                    },
                    {
                      key: "deserialize",
                      value: function (e) {
                        try {
                          return JSON.parse(e);
                        } catch (e) {
                          throw new Error("Failed to parse JSON");
                        }
                      },
                    },
                  ]
                ),
                e
              );
            })();
          e.exports = o;
        },
        function (e, t, n) {
          "use strict";
          var r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })();
          var i = n(13),
            o = 1,
            a = (function () {
              function e(t) {
                var n = this;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  Object.defineProperty(this, "mapping", {
                    enumerable: !1,
                    value: new Map(),
                  }),
                  Object.keys(t).forEach(function (e) {
                    var r = t[e];
                    n.mapping.set(new i(e, o), new i(r, o));
                  });
              }
              return (
                r(e, [
                  {
                    key: "map",
                    value: function (e, t) {
                      this.mapping.forEach(function (n, r) {
                        r.add(e, n.get(t));
                      });
                    },
                  },
                  {
                    key: "project",
                    value: function (e, t) {
                      this.mapping.forEach(function (n, r) {
                        n.add(t, r.get(e));
                      });
                    },
                  },
                ]),
                e
              );
            })();
          e.exports = a;
        },
        function (e, t, n) {
          "use strict";
          var r =
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
                  },
            i = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })();
          function o(e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          }
          var a = n(21),
            s = n(23),
            u = (function () {
              function e(t) {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  Object.assign(this, t),
                  Object.defineProperties(this, {
                    initialize: {
                      enumerable: !1,
                      writeable: !1,
                      value: a.compile(t),
                    },
                    validate: {
                      enumerable: !1,
                      writeable: !1,
                      value: s.compile(t),
                    },
                  });
              }
              return (
                i(e, [
                  {
                    key: "extend",
                    value: function (t) {
                      function n(e) {
                        return (
                          e &&
                          "object" === (void 0 === e ? "undefined" : r(e)) &&
                          null !== e &&
                          !Array.isArray(e)
                        );
                      }
                      return new e(
                        (function e(t, r) {
                          var i = Object.assign({}, t);
                          return (
                            n(t) &&
                              n(r) &&
                              Object.keys(r).forEach(function (a) {
                                n(r[a]) && a in t
                                  ? (i[a] = e(t[a], r[a]))
                                  : Object.assign(i, o({}, a, r[a]));
                              }),
                            i
                          );
                        })(this, t)
                      );
                    },
                  },
                ]),
                e
              );
            })();
          e.exports = u;
        },
        function (e, t, n) {
          "use strict";
          (function (e) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const r = n(58);
            function i(t, n = "utf8") {
              return e.isBuffer(t)
                ? a(t.toString("base64"))
                : a(e.from(t, n).toString("base64"));
            }
            function o(e) {
              return (
                (e = e.toString()),
                r.default(e).replace(/\-/g, "+").replace(/_/g, "/")
              );
            }
            function a(e) {
              return e
                .replace(/=/g, "")
                .replace(/\+/g, "-")
                .replace(/\//g, "_");
            }
            let s = i;
            (s.encode = i),
              (s.decode = function (t, n = "utf8") {
                return e.from(o(t), "base64").toString(n);
              }),
              (s.toBase64 = o),
              (s.fromBase64 = a),
              (s.toBuffer = function (t) {
                return e.from(o(t), "base64");
              }),
              (t.default = s);
          }.call(this, n(6).Buffer));
        },
        function (e, t, n) {
          "use strict";
          (t.byteLength = function (e) {
            var t = c(e),
              n = t[0],
              r = t[1];
            return (3 * (n + r)) / 4 - r;
          }),
            (t.toByteArray = function (e) {
              for (
                var t,
                  n = c(e),
                  r = n[0],
                  a = n[1],
                  s = new o(
                    (function (e, t, n) {
                      return (3 * (t + n)) / 4 - n;
                    })(0, r, a)
                  ),
                  u = 0,
                  l = a > 0 ? r - 4 : r,
                  f = 0;
                f < l;
                f += 4
              )
                (t =
                  (i[e.charCodeAt(f)] << 18) |
                  (i[e.charCodeAt(f + 1)] << 12) |
                  (i[e.charCodeAt(f + 2)] << 6) |
                  i[e.charCodeAt(f + 3)]),
                  (s[u++] = (t >> 16) & 255),
                  (s[u++] = (t >> 8) & 255),
                  (s[u++] = 255 & t);
              2 === a &&
                ((t =
                  (i[e.charCodeAt(f)] << 2) | (i[e.charCodeAt(f + 1)] >> 4)),
                (s[u++] = 255 & t));
              1 === a &&
                ((t =
                  (i[e.charCodeAt(f)] << 10) |
                  (i[e.charCodeAt(f + 1)] << 4) |
                  (i[e.charCodeAt(f + 2)] >> 2)),
                (s[u++] = (t >> 8) & 255),
                (s[u++] = 255 & t));
              return s;
            }),
            (t.fromByteArray = function (e) {
              for (
                var t, n = e.length, i = n % 3, o = [], a = 0, s = n - i;
                a < s;
                a += 16383
              )
                o.push(f(e, a, a + 16383 > s ? s : a + 16383));
              1 === i
                ? ((t = e[n - 1]), o.push(r[t >> 2] + r[(t << 4) & 63] + "=="))
                : 2 === i &&
                  ((t = (e[n - 2] << 8) + e[n - 1]),
                  o.push(
                    r[t >> 10] + r[(t >> 4) & 63] + r[(t << 2) & 63] + "="
                  ));
              return o.join("");
            });
          for (
            var r = [],
              i = [],
              o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
              a =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              s = 0,
              u = a.length;
            s < u;
            ++s
          )
            (r[s] = a[s]), (i[a.charCodeAt(s)] = s);
          function c(e) {
            var t = e.length;
            if (t % 4 > 0)
              throw new Error("Invalid string. Length must be a multiple of 4");
            var n = e.indexOf("=");
            return -1 === n && (n = t), [n, n === t ? 0 : 4 - (n % 4)];
          }
          function l(e) {
            return (
              r[(e >> 18) & 63] +
              r[(e >> 12) & 63] +
              r[(e >> 6) & 63] +
              r[63 & e]
            );
          }
          function f(e, t, n) {
            for (var r, i = [], o = t; o < n; o += 3)
              (r =
                ((e[o] << 16) & 16711680) +
                ((e[o + 1] << 8) & 65280) +
                (255 & e[o + 2])),
                i.push(l(r));
            return i.join("");
          }
          (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
        },
        function (e, t) {
          (t.read = function (e, t, n, r, i) {
            var o,
              a,
              s = 8 * i - r - 1,
              u = (1 << s) - 1,
              c = u >> 1,
              l = -7,
              f = n ? i - 1 : 0,
              p = n ? -1 : 1,
              h = e[t + f];
            for (
              f += p, o = h & ((1 << -l) - 1), h >>= -l, l += s;
              l > 0;
              o = 256 * o + e[t + f], f += p, l -= 8
            );
            for (
              a = o & ((1 << -l) - 1), o >>= -l, l += r;
              l > 0;
              a = 256 * a + e[t + f], f += p, l -= 8
            );
            if (0 === o) o = 1 - c;
            else {
              if (o === u) return a ? NaN : (1 / 0) * (h ? -1 : 1);
              (a += Math.pow(2, r)), (o -= c);
            }
            return (h ? -1 : 1) * a * Math.pow(2, o - r);
          }),
            (t.write = function (e, t, n, r, i, o) {
              var a,
                s,
                u,
                c = 8 * o - i - 1,
                l = (1 << c) - 1,
                f = l >> 1,
                p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                h = r ? 0 : o - 1,
                d = r ? 1 : -1,
                y = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
              for (
                t = Math.abs(t),
                  isNaN(t) || t === 1 / 0
                    ? ((s = isNaN(t) ? 1 : 0), (a = l))
                    : ((a = Math.floor(Math.log(t) / Math.LN2)),
                      t * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                      (t += a + f >= 1 ? p / u : p * Math.pow(2, 1 - f)) * u >=
                        2 && (a++, (u /= 2)),
                      a + f >= l
                        ? ((s = 0), (a = l))
                        : a + f >= 1
                        ? ((s = (t * u - 1) * Math.pow(2, i)), (a += f))
                        : ((s = t * Math.pow(2, f - 1) * Math.pow(2, i)),
                          (a = 0)));
                i >= 8;
                e[n + h] = 255 & s, h += d, s /= 256, i -= 8
              );
              for (
                a = (a << i) | s, c += i;
                c > 0;
                e[n + h] = 255 & a, h += d, a /= 256, c -= 8
              );
              e[n + h - d] |= 128 * y;
            });
        },
        function (e, t) {
          var n = {}.toString;
          e.exports =
            Array.isArray ||
            function (e) {
              return "[object Array]" == n.call(e);
            };
        },
        function (e, t, n) {
          "use strict";
          (function (e) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.default = function (t) {
                let n = t.length,
                  r = n % 4;
                if (!r) return t;
                let i = n,
                  o = 4 - r,
                  a = n + o,
                  s = e.alloc(a);
                for (s.write(t); o--; ) s.write("=", i++);
                return s.toString();
              });
          }.call(this, n(6).Buffer));
        },
        function (e, t, n) {
          "use strict";
          var r = n(60),
            i = n(61),
            o = n(63),
            a = new (n(64))();
          a.define(
            "HS256",
            "sign",
            new i({ name: "HMAC", hash: { name: "SHA-256" } })
          ),
            a.define(
              "HS384",
              "sign",
              new i({ name: "HMAC", hash: { name: "SHA-384" } })
            ),
            a.define(
              "HS512",
              "sign",
              new i({ name: "HMAC", hash: { name: "SHA-512" } })
            ),
            a.define(
              "RS256",
              "sign",
              new o({ name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } })
            ),
            a.define(
              "RS384",
              "sign",
              new o({ name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-384" } })
            ),
            a.define(
              "RS512",
              "sign",
              new o({ name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-512" } })
            ),
            a.define("none", "sign", new r({})),
            a.define(
              "HS256",
              "verify",
              new i({ name: "HMAC", hash: { name: "SHA-256" } })
            ),
            a.define(
              "HS384",
              "verify",
              new i({ name: "HMAC", hash: { name: "SHA-384" } })
            ),
            a.define(
              "HS512",
              "verify",
              new i({ name: "HMAC", hash: { name: "SHA-512" } })
            ),
            a.define(
              "RS256",
              "verify",
              new o({ name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } })
            ),
            a.define(
              "RS384",
              "verify",
              new o({ name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-384" } })
            ),
            a.define(
              "RS512",
              "verify",
              new o({ name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-512" } })
            ),
            a.define("none", "verify", new r({})),
            a.define(
              "RS256",
              "importKey",
              new o({ name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } })
            ),
            a.define(
              "RS384",
              "importKey",
              new o({ name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-384" } })
            ),
            a.define(
              "RS512",
              "importKey",
              new o({ name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-512" } })
            ),
            (e.exports = a);
        },
        function (e, t, n) {
          "use strict";
          var r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })();
          var i = (function () {
            function e() {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e);
            }
            return (
              r(e, [
                {
                  key: "sign",
                  value: function () {
                    return Promise.resolve("");
                  },
                },
                { key: "verify", value: function () {} },
              ]),
              e
            );
          })();
          e.exports = i;
        },
        function (e, t, n) {
          "use strict";
          (function (t) {
            var r = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })();
            var i = n(3),
              o = n(10),
              a = n(24),
              s = (function () {
                function e(t) {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                    (this.params = t);
                }
                return (
                  r(e, [
                    {
                      key: "sign",
                      value: function (e, n) {
                        var r = this.params;
                        return (
                          (n = new a().encode(n)),
                          o.subtle.sign(r, e, n).then(function (e) {
                            return i(t.from(e));
                          })
                        );
                      },
                    },
                    {
                      key: "verify",
                      value: function (e, t, n) {
                        var r = this.params;
                        return (
                          "string" == typeof t &&
                            (t = Uint8Array.from(i.toBuffer(t))),
                          "string" == typeof n && (n = new a().encode(n)),
                          o.subtle.verify(r, e, t, n)
                        );
                      },
                    },
                    {
                      key: "assertSufficientKeyLength",
                      value: function (e) {
                        if (e.length < this.bitlength)
                          throw new Error("The key is too short.");
                      },
                    },
                  ]),
                  e
                );
              })();
            e.exports = s;
          }.call(this, n(6).Buffer));
        },
        function (e, t) {
          e.exports = TextEncoder;
        },
        function (e, t, n) {
          "use strict";
          (function (t) {
            var r = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })();
            var i = n(3),
              o = n(10),
              a = n(24),
              s = (function () {
                function e(t) {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                    (this.params = t);
                }
                return (
                  r(e, [
                    {
                      key: "sign",
                      value: function (e, n) {
                        var r = this.params;
                        return (
                          (n = new a().encode(n)),
                          o.subtle.sign(r, e, n).then(function (e) {
                            return i(t.from(e));
                          })
                        );
                      },
                    },
                    {
                      key: "verify",
                      value: function (e, t, n) {
                        var r = this.params;
                        return (
                          "string" == typeof t &&
                            (t = Uint8Array.from(i.toBuffer(t))),
                          "string" == typeof n && (n = new a().encode(n)),
                          o.subtle.verify(r, e, t, n)
                        );
                      },
                    },
                    {
                      key: "importKey",
                      value: function (e) {
                        var t = Object.assign({}, e),
                          n = this.params,
                          r = e.key_ops || [];
                        return (
                          "sig" === e.use && r.push("verify"),
                          "enc" === e.use
                            ? Promise.resolve(e)
                            : (e.key_ops && (r = e.key_ops),
                              o.subtle
                                .importKey("jwk", t, n, !0, r)
                                .then(function (e) {
                                  return (
                                    Object.defineProperty(t, "cryptoKey", {
                                      enumerable: !1,
                                      value: e,
                                    }),
                                    t
                                  );
                                }))
                        );
                      },
                    },
                  ]),
                  e
                );
              })();
            e.exports = s;
          }.call(this, n(6).Buffer));
        },
        function (e, t, n) {
          "use strict";
          var r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })();
          var i = n(25),
            o = ["sign", "verify", "encrypt", "decrypt", "importKey"],
            a = (function () {
              function e() {
                var t = this;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  o.forEach(function (e) {
                    t[e] = {};
                  });
              }
              return (
                r(
                  e,
                  [
                    {
                      key: "define",
                      value: function (e, t, n) {
                        this[t][e] = n;
                      },
                    },
                    {
                      key: "normalize",
                      value: function (e, t) {
                        var n = this[e];
                        if (!n) return new SyntaxError();
                        var r = n[t];
                        return r || new i(t);
                      },
                    },
                  ],
                  [
                    {
                      key: "operations",
                      get: function () {
                        return o;
                      },
                    },
                  ]
                ),
                e
              );
            })();
          e.exports = a;
        },
        function (e, t, n) {
          "use strict";
          var r = n(2).Formats;
          r.register("StringOrURI", new RegExp()),
            r.register("NumericDate", new RegExp()),
            r.register("URI", new RegExp()),
            r.register("url", new RegExp()),
            r.register("base64", new RegExp()),
            r.register("base64url", new RegExp()),
            r.register("MediaType", new RegExp());
        },
        function (e, t, n) {
          "use strict";
          var r = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })();
          var i = n(2).JSONDocument,
            o = n(29),
            a = n(28),
            s = (function (e) {
              function t() {
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                  (function (e, t) {
                    if (!e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !t ||
                      ("object" != typeof t && "function" != typeof t)
                      ? e
                      : t;
                  })(
                    this,
                    (t.__proto__ || Object.getPrototypeOf(t)).apply(
                      this,
                      arguments
                    )
                  )
                );
              }
              return (
                (function (e, t) {
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
                })(t, i),
                r(t, null, [
                  {
                    key: "importKeys",
                    value: function (e) {
                      var n = this.schema.validate(e);
                      if (!n.valid)
                        return Promise.reject(
                          new Error(
                            "Invalid JWKSet: " + JSON.stringify(n, null, 2)
                          )
                        );
                      if (!e.keys)
                        return Promise.reject(
                          new Error(
                            "Cannot import JWKSet: keys property is empty"
                          )
                        );
                      var r = void 0,
                        i = void 0;
                      try {
                        (r = new t(e)),
                          (i = e.keys.map(function (e) {
                            return a.importKey(e);
                          }));
                      } catch (e) {
                        return Promise.reject(e);
                      }
                      return Promise.all(i).then(function (e) {
                        return (r.keys = e), r;
                      });
                    },
                  },
                  {
                    key: "schema",
                    get: function () {
                      return o;
                    },
                  },
                ]),
                t
              );
            })();
          e.exports = s;
        },
        function (e, t, n) {
          "use strict";
          var r =
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
                  },
            i = (function () {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })();
          var o = n(3),
            a = n(2).JSONDocument,
            s = n(30),
            u = n(34),
            c = n(27),
            l = (function (e) {
              function t() {
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                  (function (e, t) {
                    if (!e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return !t ||
                      ("object" != typeof t && "function" != typeof t)
                      ? e
                      : t;
                  })(
                    this,
                    (t.__proto__ || Object.getPrototypeOf(t)).apply(
                      this,
                      arguments
                    )
                  )
                );
              }
              return (
                (function (e, t) {
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
                })(t, a),
                i(
                  t,
                  [
                    {
                      key: "isJWE",
                      value: function () {
                        return !!this.header.enc;
                      },
                    },
                    {
                      key: "resolveKeys",
                      value: function (e) {
                        var t = this.header.kid,
                          n = void 0,
                          i = void 0;
                        if (
                          (Array.isArray(e) && (n = e),
                          e.keys && (n = e.keys),
                          e.keys ||
                            "object" !== (void 0 === e ? "undefined" : r(e)) ||
                            (n = [e]),
                          !n)
                        )
                          throw new c("Invalid JWK argument");
                        return (
                          !!(i = t
                            ? n.find(function (e) {
                                return e.kid === t;
                              })
                            : n.find(function (e) {
                                return "sig" === e.use;
                              })) && ((this.key = i.cryptoKey), !0)
                        );
                      },
                    },
                    {
                      key: "encode",
                      value: function () {
                        var e = this.validate();
                        if (!e.valid) return Promise.reject(e);
                        return this.isJWE() ? JWE.encrypt(this) : u.sign(this);
                      },
                    },
                    {
                      key: "verify",
                      value: function () {
                        var e = this.validate();
                        return e.valid ? u.verify(this) : Promise.reject(e);
                      },
                    },
                  ],
                  [
                    {
                      key: "decode",
                      value: function (e) {
                        var t = void 0;
                        if ("string" != typeof e)
                          throw new c("JWT must be a string");
                        if (e.startsWith("{")) {
                          try {
                            e = JSON.parse(e, function () {});
                          } catch (e) {
                            throw new c("Invalid JWT serialization");
                          }
                          e.signatures || e.recipients
                            ? (e.serialization = "json")
                            : (e.serialization = "flattened"),
                            (t = new this(e, { filter: !1 }));
                        } else
                          try {
                            var n = e.split("."),
                              r = n.length;
                            if (3 !== r && 5 !== r)
                              throw new Error("Malformed JWT");
                            var i = JSON.parse(o.decode(n[0]));
                            if (3 === r) {
                              t = new this(
                                {
                                  type: "JWS",
                                  segments: n,
                                  header: i,
                                  payload: JSON.parse(o.decode(n[1])),
                                  signature: n[2],
                                  serialization: "compact",
                                },
                                { filter: !1 }
                              );
                            }
                          } catch (e) {
                            throw new c("Invalid JWT compact serialization");
                          }
                        return t;
                      },
                    },
                    {
                      key: "encode",
                      value: function (e, n, r) {
                        return new t(e, n).encode(r);
                      },
                    },
                    {
                      key: "verify",
                      value: function (e, n) {
                        var r = t.decode(n);
                        return (
                          (r.key = e),
                          r.verify().then(function (e) {
                            return r;
                          })
                        );
                      },
                    },
                    {
                      key: "schema",
                      get: function () {
                        return s;
                      },
                    },
                  ]
                ),
                t
              );
            })();
          e.exports = l;
        },
        function (e, t, n) {
          (function (t) {
            const r = n(12),
              i = n(3),
              o = n(10),
              { JWT: a } = n(5),
              s = n(15),
              { URL: u } = n(7);
            class c {
              static create(e, n, a) {
                const { provider: l, defaults: f, registration: p } = e;
                let h, d, y, m;
                return Promise.resolve()
                  .then(
                    () => (
                      r(
                        l.configuration,
                        "RelyingParty provider OpenID Configuration is missing"
                      ),
                      r(
                        f.authenticate,
                        "RelyingParty default authentication parameters are missing"
                      ),
                      r(p, "RelyingParty client registration is missing"),
                      (h = l.configuration.issuer),
                      (d = l.configuration.authorization_endpoint),
                      (y = { client_id: p.client_id }),
                      (m = Object.assign(f.authenticate, y, n)),
                      r(h, "Missing issuer in provider OpenID Configuration"),
                      r(
                        d,
                        "Missing authorization_endpoint in provider OpenID Configuration"
                      ),
                      r(
                        m.scope,
                        "Missing scope parameter in authentication request"
                      ),
                      r(
                        m.response_type,
                        "Missing response_type parameter in authentication request"
                      ),
                      r(
                        m.client_id,
                        "Missing client_id parameter in authentication request"
                      ),
                      r(
                        m.redirect_uri,
                        "Missing redirect_uri parameter in authentication request"
                      ),
                      (m.state = Array.from(
                        o.getRandomValues(new Uint8Array(16))
                      )),
                      (m.nonce = Array.from(
                        o.getRandomValues(new Uint8Array(16))
                      )),
                      Promise.all([
                        o.subtle.digest(
                          { name: "SHA-256" },
                          new Uint8Array(m.state)
                        ),
                        o.subtle.digest(
                          { name: "SHA-256" },
                          new Uint8Array(m.nonce)
                        ),
                      ])
                    )
                  )
                  .then((e) => {
                    let n = i(t.from(e[0])),
                      r = i(t.from(e[1]));
                    (a[`${h}/requestHistory/${n}`] = JSON.stringify(m)),
                      (m.state = n),
                      (m.nonce = r);
                  })
                  .then(() => c.generateSessionKeys())
                  .then((e) => {
                    c.storeSessionKeys(e, m, a);
                  })
                  .then(() => {
                    if (l.configuration.request_parameter_supported)
                      return c.encodeRequestParams(m).then((e) => {
                        m = e;
                      });
                  })
                  .then(() => {
                    let e = new u(d);
                    return (e.search = s.encode(m)), e.href;
                  });
              }
              static generateSessionKeys() {
                return o.subtle
                  .generateKey(
                    {
                      name: "RSASSA-PKCS1-v1_5",
                      modulusLength: 2048,
                      publicExponent: new Uint8Array([1, 0, 1]),
                      hash: { name: "SHA-256" },
                    },
                    !0,
                    ["sign", "verify"]
                  )
                  .then((e) =>
                    Promise.all([
                      o.subtle.exportKey("jwk", e.publicKey),
                      o.subtle.exportKey("jwk", e.privateKey),
                    ])
                  )
                  .then((e) => {
                    let [t, n] = e;
                    return { public: t, private: n };
                  });
              }
              static storeSessionKeys(e, t, n) {
                (n["oidc.session.privateKey"] = JSON.stringify(e.private)),
                  (t.key = e.public);
              }
              static encodeRequestParams(e) {
                const t = ["scope", "client_id", "response_type", "state"];
                let n = {};
                return (
                  Object.keys(e)
                    .filter((e) => !t.includes(e))
                    .forEach((t) => {
                      n[t] = e[t];
                    }),
                  new a({ header: { alg: "none" }, payload: n }, { filter: !1 })
                    .encode()
                    .then((t) => {
                      return {
                        scope: e.scope,
                        client_id: e.client_id,
                        response_type: e.response_type,
                        request: t,
                        state: e.state,
                      };
                    })
                );
              }
            }
            e.exports = c;
          }.call(this, n(6).Buffer));
        },
        function (e, t, n) {
          (function (t, r) {
            const { URL: i } = n(7),
              o = n(12),
              a = n(10),
              s = n(3),
              u = n(9),
              c = u.Headers ? u.Headers : t.Headers,
              l = n(15),
              f = n(70),
              p = n(72),
              h = n(16),
              d = n(74);
            class y {
              constructor({
                rp: e,
                redirect: t,
                body: n,
                session: r,
                mode: i,
                params: o = {},
              }) {
                (this.rp = e),
                  (this.redirect = t),
                  (this.body = n),
                  (this.session = r),
                  (this.mode = i),
                  (this.params = o);
              }
              static validateResponse(e) {
                return Promise.resolve(e)
                  .then(this.parseResponse)
                  .then(this.errorResponse)
                  .then(this.matchRequest)
                  .then(this.validateStateParam)
                  .then(this.validateResponseMode)
                  .then(this.validateResponseParams)
                  .then(this.exchangeAuthorizationCode)
                  .then(this.validateIDToken)
                  .then(p.fromAuthResponse);
              }
              static parseResponse(e) {
                let { redirect: t, body: n } = e;
                if ((t && n) || (!t && !n))
                  throw new d(400, "Invalid response mode");
                if (t) {
                  let n = new i(t),
                    { search: r, hash: o } = n;
                  if ((r && o) || (!r && !o))
                    throw new d(400, "Invalid response mode");
                  r &&
                    ((e.params = l.decode(r.substring(1))), (e.mode = "query")),
                    o &&
                      ((e.params = l.decode(o.substring(1))),
                      (e.mode = "fragment"));
                }
                return (
                  n && ((e.params = l.decode(n)), (e.mode = "form_post")), e
                );
              }
              static errorResponse(e) {
                const t = e.params.error;
                if (t) {
                  const n = {};
                  (n.error = t),
                    (n.error_description = e.params.error_description),
                    (n.error_uri = e.params.error_uri),
                    (n.state = e.params.state);
                  const r = new Error(`AuthenticationResponse error: ${t}`);
                  throw ((r.info = n), r);
                }
                return e;
              }
              static matchRequest(e) {
                let { rp: t, params: n, session: r } = e,
                  i = n.state,
                  o = t.provider.configuration.issuer;
                if (!i)
                  throw new Error(
                    "Missing state parameter in authentication response"
                  );
                let a = r[`${o}/requestHistory/${i}`];
                if (!a)
                  throw new Error(
                    "Mismatching state parameter in authentication response"
                  );
                return (e.request = JSON.parse(a)), e;
              }
              static validateStateParam(e) {
                let t = new Uint8Array(e.request.state),
                  n = e.params.state;
                return a.subtle.digest({ name: "SHA-256" }, t).then((t) => {
                  if (n !== s(r.from(t)))
                    throw new Error(
                      "Mismatching state parameter in authentication response"
                    );
                  return e;
                });
              }
              static validateResponseMode(e) {
                if ("code" !== e.request.response_type && "query" === e.mode)
                  throw new Error("Invalid response mode");
                return e;
              }
              static validateResponseParams(e) {
                let { request: t, params: n } = e,
                  r = t.response_type.split(" ");
                return (
                  r.includes("code") &&
                    o(
                      n.code,
                      "Missing authorization code in authentication response"
                    ),
                  r.includes("id_token") &&
                    o(
                      n.id_token,
                      "Missing id_token in authentication response"
                    ),
                  r.includes("token") &&
                    (o(
                      n.access_token,
                      "Missing access_token in authentication response"
                    ),
                    o(
                      n.token_type,
                      "Missing token_type in authentication response"
                    )),
                  e
                );
              }
              static exchangeAuthorizationCode(e) {
                let { rp: t, params: n, request: i } = e,
                  a = n.code;
                if (!a || "code" !== i.response_type) return Promise.resolve(e);
                let { provider: s, registration: f } = t,
                  p = f.client_id,
                  d = f.client_secret;
                if (!d)
                  return Promise.reject(
                    new Error(
                      "Client cannot exchange authorization code because it is not a confidential client"
                    )
                  );
                let y = s.configuration.token_endpoint,
                  m = new c({
                    "Content-Type": "application/x-www-form-urlencoded",
                  }),
                  v = {
                    grant_type: "authorization_code",
                    code: a,
                    redirect_uri: i.redirect_uri,
                  },
                  g = f.token_endpoint_auth_method || "client_secret_basic";
                if ("client_secret_basic" === g) {
                  let e = new r(`${p}:${d}`).toString("base64");
                  m.set("Authorization", `Basic ${e}`);
                }
                "client_secret_post" === g &&
                  ((v.client_id = p), (v.client_secret = d));
                let w = l.encode(v);
                return u(y, { method: "POST", headers: m, body: w })
                  .then(h("Error exchanging authorization code"))
                  .then((e) => e.json())
                  .then(
                    (t) => (
                      o(
                        t.access_token,
                        "Missing access_token in token response"
                      ),
                      o(t.token_type, "Missing token_type in token response"),
                      o(t.id_token, "Missing id_token in token response"),
                      (e.params = Object.assign(e.params, t)),
                      e
                    )
                  );
              }
              static validateIDToken(e) {
                return e.params.id_token
                  ? Promise.resolve(e)
                      .then(y.decryptIDToken)
                      .then(y.decodeIDToken)
                      .then(y.validateIssuer)
                      .then(y.validateAudience)
                      .then(y.resolveKeys)
                      .then(y.verifySignature)
                      .then(y.validateExpires)
                      .then(y.verifyNonce)
                      .then(y.validateAcr)
                      .then(y.validateAuthTime)
                      .then(y.validateAccessTokenHash)
                      .then(y.validateAuthorizationCodeHash)
                  : Promise.resolve(e);
              }
              static decryptIDToken(e) {
                return Promise.resolve(e);
              }
              static decodeIDToken(e) {
                let t = e.params.id_token;
                try {
                  e.decoded = f.decode(t);
                } catch (e) {
                  const n = new d(400, "Error decoding ID Token");
                  throw ((n.cause = e), (n.info = { id_token: t }), n);
                }
                return e;
              }
              static validateIssuer(e) {
                let t = e.rp.provider.configuration;
                if (e.decoded.payload.iss !== t.issuer)
                  throw new Error("Mismatching issuer in ID Token");
                return e;
              }
              static validateAudience(e) {
                let t = e.rp.registration,
                  { aud: n, azp: r } = e.decoded.payload;
                if ("string" == typeof n && n !== t.client_id)
                  throw new Error("Mismatching audience in id_token");
                if (Array.isArray(n) && !n.includes(t.client_id))
                  throw new Error("Mismatching audience in id_token");
                if (Array.isArray(n) && !r)
                  throw new Error("Missing azp claim in id_token");
                if (r && r !== t.client_id)
                  throw new Error("Mismatching azp claim in id_token");
                return e;
              }
              static resolveKeys(e) {
                let t = e.rp,
                  n = t.provider,
                  r = e.decoded;
                return Promise.resolve(n.jwks)
                  .then((e) => e || t.jwks())
                  .then((t) => {
                    if (r.resolveKeys(t)) return Promise.resolve(e);
                    throw new Error("Cannot resolve signing key for ID Token");
                  });
              }
              static verifySignature(e) {
                let t = e.decoded.header.alg,
                  n = e.rp.registration.id_token_signed_response_alg || "RS256";
                if (t !== n)
                  throw new Error(`Expected ID Token to be signed with ${n}`);
                return e.decoded.verify().then((t) => {
                  if (!t) throw new Error("Invalid ID Token signature");
                  return e;
                });
              }
              static validateExpires(e) {
                if (e.decoded.payload.exp <= Math.floor(Date.now() / 1e3))
                  throw new Error("Expired ID Token");
                return e;
              }
              static verifyNonce(e) {
                let t = new Uint8Array(e.request.nonce),
                  n = e.decoded.payload.nonce;
                if (!n) throw new Error("Missing nonce in ID Token");
                return a.subtle.digest({ name: "SHA-256" }, t).then((t) => {
                  if (n !== s(r.from(t)))
                    throw new Error("Mismatching nonce in ID Token");
                  return e;
                });
              }
              static validateAcr(e) {
                return e;
              }
              static validateAuthTime(e) {
                return e;
              }
              static validateAccessTokenHash(e) {
                return e;
              }
              static validateAuthorizationCodeHash(e) {
                return e;
              }
            }
            e.exports = y;
          }.call(this, n(4), n(6).Buffer));
        },
        function (e, t, n) {
          const { JWT: r } = n(5),
            i = n(71);
          e.exports = class extends r {
            static get schema() {
              return i;
            }
          };
        },
        function (e, t, n) {
          const { JWTSchema: r } = n(5),
            i = r.extend({
              properties: {
                header: {},
                payload: {
                  properties: {
                    iss: { type: "string", format: "url" },
                    sub: { type: "string", maxLength: 255 },
                    auth_time: { type: "integer", format: "NumericDate" },
                    nonce: { type: "string" },
                    acr: { type: "string" },
                    amr: { type: "array", items: { type: "string" } },
                    azp: { type: "string", format: "StringOrURI" },
                  },
                  required: ["iss", "sub", "aud", "exp", "iat"],
                },
              },
            });
          e.exports = i;
        },
        function (e, t, n) {
          "use strict";
          const r = n(9),
            i = n(16),
            o = n(73);
          class a {
            constructor(e) {
              (this.credentialType = e.credentialType || "access_token"),
                (this.issuer = e.issuer),
                (this.authorization = e.authorization || {}),
                (this.sessionKey = e.sessionKey),
                (this.idClaims = e.idClaims),
                (this.accessClaims = e.accessClaims);
            }
            static from(e) {
              return new a(e);
            }
            static fromAuthResponse(e) {
              const t = n(19);
              let r = (e.decoded && e.decoded.payload) || {},
                { rp: i } = e,
                o = i.registration,
                s = {
                  credentialType:
                    (i.defaults.authenticate || {}).credential_type ||
                    i.defaults.popToken
                      ? "pop_token"
                      : "access_token",
                  sessionKey: e.session[t.SESSION_PRIVATE_KEY],
                  issuer: r.iss,
                  idClaims: r,
                  authorization: {
                    client_id: o.client_id,
                    access_token: e.params.access_token,
                    id_token: e.params.id_token,
                    refresh_token: e.params.refresh_token,
                  },
                };
              return a.from(s);
            }
            get fetch() {
              return (e, t) =>
                Promise.resolve()
                  .then(() =>
                    this.hasCredentials()
                      ? this.fetchWithCredentials(e, t)
                      : r(e, t)
                  )
                  .then(i("Error while fetching resource"));
            }
            bearerTokenFor(e) {
              switch (this.credentialType) {
                case "pop_token":
                  return o.issueFor(e, this);
                default:
                  return Promise.resolve(
                    this.authorization[this.credentialType]
                  );
              }
            }
            hasCredentials() {
              switch (this.credentialType) {
                case "pop_token":
                  return !!this.authorization.id_token;
                default:
                  return !!this.authorization[this.credentialType];
              }
            }
            fetchWithCredentials(e, t = {}) {
              return (
                (t.headers = t.headers || {}),
                this.bearerTokenFor(e).then(
                  (n) => ((t.headers.authorization = `Bearer ${n}`), r(e, t))
                )
              );
            }
          }
          e.exports = a;
        },
        function (e, t, n) {
          "use strict";
          const { URL: r } = n(7),
            { JWT: i, JWK: o } = n(5),
            a = 3600;
          class s extends i {
            static issueFor(e, t) {
              if (!e)
                throw new Error(
                  "Cannot issue PoPToken - missing resource server URI"
                );
              if (!t.sessionKey)
                throw new Error("Cannot issue PoPToken - missing session key");
              if (!t.authorization.id_token)
                throw new Error("Cannot issue PoPToken - missing id token");
              let n = JSON.parse(t.sessionKey);
              return o
                .importKey(n)
                .then((n) => {
                  let i = {
                    aud: new r(e).origin,
                    key: n,
                    iss: t.authorization.client_id,
                    id_token: t.authorization.id_token,
                  };
                  return s.issue(i);
                })
                .then((e) => e.encode());
            }
            static issue(e) {
              let { aud: t, iss: n, key: r } = e,
                i = r.alg,
                o = e.iat || Math.floor(Date.now() / 1e3),
                u = { alg: i },
                c = {
                  iss: n,
                  aud: t,
                  exp: o + (e.max || a),
                  iat: o,
                  id_token: e.id_token,
                  token_type: "pop",
                };
              return new s(
                { header: u, payload: c, key: r.cryptoKey },
                { filter: !1 }
              );
            }
          }
          e.exports = s;
        },
        function (e, t, n) {
          t = e.exports = a;
          var r = n(75),
            i = n(76),
            o = t;
          function a(e, t, n) {
            if (("string" == typeof e && (e = o[e]), "number" != typeof e))
              throw new TypeError("Non-numeric HTTP code");
            "object" == typeof t && null != t && ((n = t), (t = null)),
              r.call(this, t || i[e], n),
              (this.code = e);
          }
          for (var s in ((a.prototype = Object.create(r.prototype, {
            constructor: { value: a, configurable: !0, writable: !0 },
          })),
          (a.prototype.name = "HttpError"),
          Object.defineProperties(a.prototype, {
            statusCode: u("code"),
            statusMessage: u("message"),
            status: {
              configurable: !0,
              get: function () {
                return this.code;
              },
              set: function (e) {
                Object.defineProperty(this, "status", {
                  value: e,
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                });
              },
            },
          }),
          (a.prototype.toString = function () {
            return this.name + ": " + this.code + " " + this.message;
          }),
          i)) {
            t[i[s].replace("'", "").replace(/[- ]/g, "_").toUpperCase()] = +s;
          }
          function u(e) {
            return {
              configurable: !0,
              get: function () {
                return this[e];
              },
              set: function (t) {
                return (this[e] = t);
              },
            };
          }
        },
        function (e, t) {
          var n = Object.hasOwnProperty,
            r = Object.getPrototypeOf,
            i = Error.captureStackTrace;
          function o(e, t) {
            if (
              (e && "object" == typeof e
                ? ((t = e), (e = void 0))
                : (this.message = e),
              t)
            )
              for (var o in t) this[o] = t[o];
            n.call(this, "name") ||
              (this.name = n.call(r(this), "name")
                ? this.name
                : this.constructor.name),
              !i || "stack" in this || i(this, this.constructor);
          }
          (e.exports = o),
            (o.prototype = Object.create(Error.prototype, {
              constructor: { value: o, configurable: !0, writable: !0 },
            })),
            (o.prototype.name = "StandardError");
        },
        function (e) {
          e.exports = {
            100: "Continue",
            101: "Switching Protocols",
            102: "Processing",
            200: "OK",
            201: "Created",
            202: "Accepted",
            203: "Non-Authoritative Information",
            204: "No Content",
            205: "Reset Content",
            206: "Partial Content",
            207: "Multi-Status",
            208: "Already Reported",
            226: "IM Used",
            300: "Multiple Choices",
            301: "Moved Permanently",
            302: "Found",
            303: "See Other",
            304: "Not Modified",
            305: "Use Proxy",
            307: "Temporary Redirect",
            308: "Permanent Redirect",
            400: "Bad Request",
            401: "Unauthorized",
            402: "Payment Required",
            403: "Forbidden",
            404: "Not Found",
            405: "Method Not Allowed",
            406: "Not Acceptable",
            407: "Proxy Authentication Required",
            408: "Request Timeout",
            409: "Conflict",
            410: "Gone",
            411: "Length Required",
            412: "Precondition Failed",
            413: "Payload Too Large",
            414: "URI Too Long",
            415: "Unsupported Media Type",
            416: "Range Not Satisfiable",
            417: "Expectation Failed",
            418: "I'm a teapot",
            421: "Misdirected Request",
            422: "Unprocessable Entity",
            423: "Locked",
            424: "Failed Dependency",
            425: "Unordered Collection",
            426: "Upgrade Required",
            428: "Precondition Required",
            429: "Too Many Requests",
            431: "Request Header Fields Too Large",
            500: "Internal Server Error",
            501: "Not Implemented",
            502: "Bad Gateway",
            503: "Service Unavailable",
            504: "Gateway Timeout",
            505: "HTTP Version Not Supported",
            506: "Variant Also Negotiates",
            507: "Insufficient Storage",
            508: "Loop Detected",
            509: "Bandwidth Limit Exceeded",
            510: "Not Extended",
            511: "Network Authentication Required",
          };
        },
        function (e, t, n) {
          const { JSONSchema: r } = n(2),
            i = new r({
              type: "object",
              properties: {
                provider: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    url: { type: "string", format: "uri" },
                    configuration: {},
                    jwks: {},
                  },
                  required: ["url"],
                },
                defaults: {
                  type: "object",
                  properties: {
                    popToken: { type: "boolean", default: !1 },
                    authenticate: {
                      type: "object",
                      properties: {
                        redirect_uri: { type: "string", format: "uri" },
                        response_type: {
                          type: "string",
                          default: "id_token token",
                          enum: [
                            "code",
                            "token",
                            "id_token token",
                            "id_token token code",
                          ],
                        },
                        display: {
                          type: "string",
                          default: "page",
                          enum: ["page", "popup"],
                        },
                        scope: {
                          type: ["string", "array"],
                          default: ["openid"],
                        },
                      },
                    },
                    register: {},
                  },
                },
                registration: {},
                store: { type: "object", default: {} },
              },
            });
          e.exports = i;
        },
        function (e, t, n) {
          var r = n(79);
          "string" == typeof r && (r = [[e.i, r, ""]]);
          var i = { hmr: !0, transform: void 0, insertInto: void 0 };
          n(36)(r, i);
          r.locals && (e.exports = r.locals);
        },
        function (e, t, n) {
          (e.exports = n(35)(!1)).push([
            e.i,
            ".custom-idp {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  margin: 0 0 2em;\n}\n.custom-idp input {\n  flex-grow: 2;\n  margin-right: .5em;\n}\n\n.idp-list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin: -.25em -.5em;\n}\n.idp {\n  flex: 1 100%;\n  margin: .25em;\n  padding: .75em .5em;\n  border-radius: 10px;\n}\n\n@media all and (min-width: 500px) {\n  .idp {\n    flex: 1 200px;\n  }\n}\n",
            "",
          ]);
        },
        function (e, t) {
          e.exports = function (e) {
            var t = "undefined" != typeof window && window.location;
            if (!t) throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e) return e;
            var n = t.protocol + "//" + t.host,
              r = n + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(
              /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
              function (e, t) {
                var i,
                  o = t
                    .trim()
                    .replace(/^"(.*)"$/, function (e, t) {
                      return t;
                    })
                    .replace(/^'(.*)'$/, function (e, t) {
                      return t;
                    });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(
                  o
                )
                  ? e
                  : ((i =
                      0 === o.indexOf("//")
                        ? o
                        : 0 === o.indexOf("/")
                        ? n + o
                        : r + o.replace(/^\.\//, "")),
                    "url(" + JSON.stringify(i) + ")");
              }
            );
          };
        },
        function (e, t, n) {
          var r = n(82);
          "string" == typeof r && (r = [[e.i, r, ""]]);
          var i = { hmr: !0, transform: void 0, insertInto: void 0 };
          n(36)(r, i);
          r.locals && (e.exports = r.locals);
        },
        function (e, t, n) {
          (e.exports = n(35)(!1)).push([
            e.i,
            "body {\n  margin: 20px;\n}\n\nbody, button, input {\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 11pt;\n}\n\nh1 {\n  font-weight: normal;\n  padding-bottom: 10px;\n}\n\np {\n  margin: .75em 0;\n}\n\nbutton {\n  font-weight: bold;\n  border: none;\n  border-radius: 7px;\n  background-color: rgb(61, 109, 211);\n  color: #fff;\n  transition: background-color 0.4s;\n  cursor: pointer;\n}\nbutton:hover,\nbutton:focus {\n  background-color: rgb(55, 97, 188);\n}\n\n:focus {\n  outline: none;\n}\n\n#app-container {\n  max-width: 600px;\n  margin: auto;\n}\n\n.error {\n  background-color: #ff8e8e;\n  color: #323232;\n  padding: 8px;\n  border-radius: 2px;\n}\n\n.app-name {\n  font-weight: bold;\n}\n",
            "",
          ]);
        },
        function (e, t, n) {
          "use strict";
          n.r(t);
          var r = n(0),
            i = n.n(r),
            o = n(8),
            a = n.n(o),
            s = function () {},
            u = {},
            c = [],
            l = [];
          function f(e, t) {
            var n,
              r,
              i,
              o,
              a = l;
            for (o = arguments.length; o-- > 2; ) c.push(arguments[o]);
            for (
              t &&
              null != t.children &&
              (c.length || c.push(t.children), delete t.children);
              c.length;

            )
              if ((r = c.pop()) && void 0 !== r.pop)
                for (o = r.length; o--; ) c.push(r[o]);
              else
                "boolean" == typeof r && (r = null),
                  (i = "function" != typeof e) &&
                    (null == r
                      ? (r = "")
                      : "number" == typeof r
                      ? (r = String(r))
                      : "string" != typeof r && (i = !1)),
                  i && n
                    ? (a[a.length - 1] += r)
                    : a === l
                    ? (a = [r])
                    : a.push(r),
                  (n = i);
            var f = new s();
            return (
              (f.nodeName = e),
              (f.children = a),
              (f.attributes = null == t ? void 0 : t),
              (f.key = null == t ? void 0 : t.key),
              void 0 !== u.vnode && u.vnode(f),
              f
            );
          }
          function p(e, t) {
            for (var n in t) e[n] = t[n];
            return e;
          }
          var h =
            "function" == typeof Promise
              ? Promise.resolve().then.bind(Promise.resolve())
              : setTimeout;
          function d(e, t) {
            return f(
              e.nodeName,
              p(p({}, e.attributes), t),
              arguments.length > 2 ? [].slice.call(arguments, 2) : e.children
            );
          }
          var y = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
            m = [];
          function v(e) {
            !e._dirty &&
              (e._dirty = !0) &&
              1 == m.push(e) &&
              (u.debounceRendering || h)(g);
          }
          function g() {
            var e,
              t = m;
            for (m = []; (e = t.pop()); ) e._dirty && D(e);
          }
          function w(e, t, n) {
            return "string" == typeof t || "number" == typeof t
              ? void 0 !== e.splitText
              : "string" == typeof t.nodeName
              ? !e._componentConstructor && b(e, t.nodeName)
              : n || e._componentConstructor === t.nodeName;
          }
          function b(e, t) {
            return (
              e.normalizedNodeName === t ||
              e.nodeName.toLowerCase() === t.toLowerCase()
            );
          }
          function _(e) {
            var t = p({}, e.attributes);
            t.children = e.children;
            var n = e.nodeName.defaultProps;
            if (void 0 !== n) for (var r in n) void 0 === t[r] && (t[r] = n[r]);
            return t;
          }
          function S(e) {
            var t = e.parentNode;
            t && t.removeChild(e);
          }
          function k(e, t, n, r, i) {
            if (("className" === t && (t = "class"), "key" === t));
            else if ("ref" === t) n && n(null), r && r(e);
            else if ("class" !== t || i)
              if ("style" === t) {
                if (
                  ((r && "string" != typeof r && "string" != typeof n) ||
                    (e.style.cssText = r || ""),
                  r && "object" == typeof r)
                ) {
                  if ("string" != typeof n)
                    for (var o in n) o in r || (e.style[o] = "");
                  for (var o in r)
                    e.style[o] =
                      "number" == typeof r[o] && !1 === y.test(o)
                        ? r[o] + "px"
                        : r[o];
                }
              } else if ("dangerouslySetInnerHTML" === t)
                r && (e.innerHTML = r.__html || "");
              else if ("o" == t[0] && "n" == t[1]) {
                var a = t !== (t = t.replace(/Capture$/, ""));
                (t = t.toLowerCase().substring(2)),
                  r
                    ? n || e.addEventListener(t, E, a)
                    : e.removeEventListener(t, E, a),
                  ((e._listeners || (e._listeners = {}))[t] = r);
              } else if ("list" !== t && "type" !== t && !i && t in e) {
                try {
                  e[t] = null == r ? "" : r;
                } catch (e) {}
                (null != r && !1 !== r) ||
                  "spellcheck" == t ||
                  e.removeAttribute(t);
              } else {
                var s = i && t !== (t = t.replace(/^xlink:?/, ""));
                null == r || !1 === r
                  ? s
                    ? e.removeAttributeNS(
                        "http://www.w3.org/1999/xlink",
                        t.toLowerCase()
                      )
                    : e.removeAttribute(t)
                  : "function" != typeof r &&
                    (s
                      ? e.setAttributeNS(
                          "http://www.w3.org/1999/xlink",
                          t.toLowerCase(),
                          r
                        )
                      : e.setAttribute(t, r));
              }
            else e.className = r || "";
          }
          function E(e) {
            return this._listeners[e.type]((u.event && u.event(e)) || e);
          }
          var O = [],
            A = 0,
            P = !1,
            x = !1;
          function j() {
            for (var e; (e = O.pop()); )
              u.afterMount && u.afterMount(e),
                e.componentDidMount && e.componentDidMount();
          }
          function T(e, t, n, r, i, o) {
            A++ ||
              ((P = null != i && void 0 !== i.ownerSVGElement),
              (x = null != e && !("__preactattr_" in e)));
            var a = C(e, t, n, r, o);
            return (
              i && a.parentNode !== i && i.appendChild(a),
              --A || ((x = !1), o || j()),
              a
            );
          }
          function C(e, t, n, r, i) {
            var o = e,
              a = P;
            if (
              ((null != t && "boolean" != typeof t) || (t = ""),
              "string" == typeof t || "number" == typeof t)
            )
              return (
                e &&
                void 0 !== e.splitText &&
                e.parentNode &&
                (!e._component || i)
                  ? e.nodeValue != t && (e.nodeValue = t)
                  : ((o = document.createTextNode(t)),
                    e &&
                      (e.parentNode && e.parentNode.replaceChild(o, e),
                      R(e, !0))),
                (o.__preactattr_ = !0),
                o
              );
            var s = t.nodeName;
            if ("function" == typeof s)
              return (function (e, t, n, r) {
                var i = e && e._component,
                  o = i,
                  a = e,
                  s = i && e._componentConstructor === t.nodeName,
                  u = s,
                  c = _(t);
                for (; i && !u && (i = i._parentComponent); )
                  u = i.constructor === t.nodeName;
                i && u && (!r || i._component)
                  ? (M(i, c, 3, n, r), (e = i.base))
                  : (o && !s && (B(o), (e = a = null)),
                    (i = U(t.nodeName, c, n)),
                    e && !i.nextBase && ((i.nextBase = e), (a = null)),
                    M(i, c, 1, n, r),
                    (e = i.base),
                    a && e !== a && ((a._component = null), R(a, !1)));
                return e;
              })(e, t, n, r);
            if (
              ((P = "svg" === s || ("foreignObject" !== s && P)),
              (s = String(s)),
              (!e || !b(e, s)) &&
                ((o = (function (e, t) {
                  var n = t
                    ? document.createElementNS("http://www.w3.org/2000/svg", e)
                    : document.createElement(e);
                  return (n.normalizedNodeName = e), n;
                })(s, P)),
                e))
            ) {
              for (; e.firstChild; ) o.appendChild(e.firstChild);
              e.parentNode && e.parentNode.replaceChild(o, e), R(e, !0);
            }
            var u = o.firstChild,
              c = o.__preactattr_,
              l = t.children;
            if (null == c) {
              c = o.__preactattr_ = {};
              for (var f = o.attributes, p = f.length; p--; )
                c[f[p].name] = f[p].value;
            }
            return (
              !x &&
              l &&
              1 === l.length &&
              "string" == typeof l[0] &&
              null != u &&
              void 0 !== u.splitText &&
              null == u.nextSibling
                ? u.nodeValue != l[0] && (u.nodeValue = l[0])
                : ((l && l.length) || null != u) &&
                  (function (e, t, n, r, i) {
                    var o,
                      a,
                      s,
                      u,
                      c,
                      l = e.childNodes,
                      f = [],
                      p = {},
                      h = 0,
                      d = 0,
                      y = l.length,
                      m = 0,
                      v = t ? t.length : 0;
                    if (0 !== y)
                      for (var g = 0; g < y; g++) {
                        var b = l[g],
                          _ = b.__preactattr_,
                          k =
                            v && _
                              ? b._component
                                ? b._component.__key
                                : _.key
                              : null;
                        null != k
                          ? (h++, (p[k] = b))
                          : (_ ||
                              (void 0 !== b.splitText
                                ? !i || b.nodeValue.trim()
                                : i)) &&
                            (f[m++] = b);
                      }
                    if (0 !== v)
                      for (var g = 0; g < v; g++) {
                        (u = t[g]), (c = null);
                        var k = u.key;
                        if (null != k)
                          h &&
                            void 0 !== p[k] &&
                            ((c = p[k]), (p[k] = void 0), h--);
                        else if (d < m)
                          for (o = d; o < m; o++)
                            if (void 0 !== f[o] && w((a = f[o]), u, i)) {
                              (c = a),
                                (f[o] = void 0),
                                o === m - 1 && m--,
                                o === d && d++;
                              break;
                            }
                        (c = C(c, u, n, r)),
                          (s = l[g]),
                          c &&
                            c !== e &&
                            c !== s &&
                            (null == s
                              ? e.appendChild(c)
                              : c === s.nextSibling
                              ? S(s)
                              : e.insertBefore(c, s));
                      }
                    if (h) for (var g in p) void 0 !== p[g] && R(p[g], !1);
                    for (; d <= m; ) void 0 !== (c = f[m--]) && R(c, !1);
                  })(o, l, n, r, x || null != c.dangerouslySetInnerHTML),
              (function (e, t, n) {
                var r;
                for (r in n)
                  (t && null != t[r]) ||
                    null == n[r] ||
                    k(e, r, n[r], (n[r] = void 0), P);
                for (r in t)
                  "children" === r ||
                    "innerHTML" === r ||
                    (r in n &&
                      t[r] ===
                        ("value" === r || "checked" === r ? e[r] : n[r])) ||
                    k(e, r, n[r], (n[r] = t[r]), P);
              })(o, t.attributes, c),
              (P = a),
              o
            );
          }
          function R(e, t) {
            var n = e._component;
            n
              ? B(n)
              : (null != e.__preactattr_ &&
                  e.__preactattr_.ref &&
                  e.__preactattr_.ref(null),
                (!1 !== t && null != e.__preactattr_) || S(e),
                I(e));
          }
          function I(e) {
            for (e = e.lastChild; e; ) {
              var t = e.previousSibling;
              R(e, !0), (e = t);
            }
          }
          var N = [];
          function U(e, t, n) {
            var r,
              i = N.length;
            for (
              e.prototype && e.prototype.render
                ? ((r = new e(t, n)), z.call(r, t, n))
                : (((r = new z(t, n)).constructor = e), (r.render = L));
              i--;

            )
              if (N[i].constructor === e)
                return (r.nextBase = N[i].nextBase), N.splice(i, 1), r;
            return r;
          }
          function L(e, t, n) {
            return this.constructor(e, n);
          }
          function M(e, t, n, r, i) {
            e._disable ||
              ((e._disable = !0),
              (e.__ref = t.ref),
              (e.__key = t.key),
              delete t.ref,
              delete t.key,
              void 0 === e.constructor.getDerivedStateFromProps &&
                (!e.base || i
                  ? e.componentWillMount && e.componentWillMount()
                  : e.componentWillReceiveProps &&
                    e.componentWillReceiveProps(t, r)),
              r &&
                r !== e.context &&
                (e.prevContext || (e.prevContext = e.context), (e.context = r)),
              e.prevProps || (e.prevProps = e.props),
              (e.props = t),
              (e._disable = !1),
              0 !== n &&
                (1 !== n && !1 === u.syncComponentUpdates && e.base
                  ? v(e)
                  : D(e, 1, i)),
              e.__ref && e.__ref(e));
          }
          function D(e, t, n, r) {
            if (!e._disable) {
              var i,
                o,
                a,
                s = e.props,
                c = e.state,
                l = e.context,
                f = e.prevProps || s,
                h = e.prevState || c,
                d = e.prevContext || l,
                y = e.base,
                m = e.nextBase,
                v = y || m,
                g = e._component,
                w = !1,
                b = d;
              if (
                (e.constructor.getDerivedStateFromProps &&
                  ((c = p(
                    p({}, c),
                    e.constructor.getDerivedStateFromProps(s, c)
                  )),
                  (e.state = c)),
                y &&
                  ((e.props = f),
                  (e.state = h),
                  (e.context = d),
                  2 !== t &&
                  e.shouldComponentUpdate &&
                  !1 === e.shouldComponentUpdate(s, c, l)
                    ? (w = !0)
                    : e.componentWillUpdate && e.componentWillUpdate(s, c, l),
                  (e.props = s),
                  (e.state = c),
                  (e.context = l)),
                (e.prevProps = e.prevState = e.prevContext = e.nextBase = null),
                (e._dirty = !1),
                !w)
              ) {
                (i = e.render(s, c, l)),
                  e.getChildContext && (l = p(p({}, l), e.getChildContext())),
                  y &&
                    e.getSnapshotBeforeUpdate &&
                    (b = e.getSnapshotBeforeUpdate(f, h));
                var S,
                  k,
                  E = i && i.nodeName;
                if ("function" == typeof E) {
                  var P = _(i);
                  (o = g) && o.constructor === E && P.key == o.__key
                    ? M(o, P, 1, l, !1)
                    : ((S = o),
                      (e._component = o = U(E, P, l)),
                      (o.nextBase = o.nextBase || m),
                      (o._parentComponent = e),
                      M(o, P, 0, l, !1),
                      D(o, 1, n, !0)),
                    (k = o.base);
                } else
                  (a = v),
                    (S = g) && (a = e._component = null),
                    (v || 1 === t) &&
                      (a && (a._component = null),
                      (k = T(a, i, l, n || !y, v && v.parentNode, !0)));
                if (v && k !== v && o !== g) {
                  var x = v.parentNode;
                  x &&
                    k !== x &&
                    (x.replaceChild(k, v),
                    S || ((v._component = null), R(v, !1)));
                }
                if ((S && B(S), (e.base = k), k && !r)) {
                  for (var C = e, I = e; (I = I._parentComponent); )
                    (C = I).base = k;
                  (k._component = C), (k._componentConstructor = C.constructor);
                }
              }
              for (
                !y || n
                  ? O.unshift(e)
                  : w ||
                    (e.componentDidUpdate && e.componentDidUpdate(f, h, b),
                    u.afterUpdate && u.afterUpdate(e));
                e._renderCallbacks.length;

              )
                e._renderCallbacks.pop().call(e);
              A || r || j();
            }
          }
          function B(e) {
            u.beforeUnmount && u.beforeUnmount(e);
            var t = e.base;
            (e._disable = !0),
              e.componentWillUnmount && e.componentWillUnmount(),
              (e.base = null);
            var n = e._component;
            n
              ? B(n)
              : t &&
                (t.__preactattr_ &&
                  t.__preactattr_.ref &&
                  t.__preactattr_.ref(null),
                (e.nextBase = t),
                S(t),
                N.push(e),
                I(t)),
              e.__ref && e.__ref(null);
          }
          function z(e, t) {
            (this._dirty = !0),
              (this.context = t),
              (this.props = e),
              (this.state = this.state || {}),
              (this._renderCallbacks = []);
          }
          function J(e, t, n) {
            return T(n, e, {}, !1, t, !1);
          }
          p(z.prototype, {
            setState: function (e, t) {
              this.prevState || (this.prevState = this.state),
                (this.state = p(
                  p({}, this.state),
                  "function" == typeof e ? e(this.state, this.props) : e
                )),
                t && this._renderCallbacks.push(t),
                v(this);
            },
            forceUpdate: function (e) {
              e && this._renderCallbacks.push(e), D(this, 2);
            },
            render: function () {},
          });
          var q = "a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(
              " "
            ),
            H =
              ("undefined" != typeof Symbol &&
                Symbol.for &&
                Symbol.for("react.element")) ||
              60103,
            K =
              "undefined" != typeof Symbol && Symbol.for
                ? Symbol.for("__preactCompatWrapper")
                : "__preactCompatWrapper",
            W = {
              constructor: 1,
              render: 1,
              shouldComponentUpdate: 1,
              componentWillReceiveProps: 1,
              componentWillUpdate: 1,
              componentDidUpdate: 1,
              componentWillMount: 1,
              componentDidMount: 1,
              componentWillUnmount: 1,
              componentDidUnmount: 1,
            },
            F = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/,
            $ = {},
            V = !1;
          try {
            V = !1;
          } catch (e) {}
          function Y() {
            return null;
          }
          var G = f("a", null).constructor;
          (G.prototype.$$typeof = H),
            (G.prototype.preactCompatUpgraded = !1),
            (G.prototype.preactCompatNormalized = !1),
            Object.defineProperty(G.prototype, "type", {
              get: function () {
                return this.nodeName;
              },
              set: function (e) {
                this.nodeName = e;
              },
              configurable: !0,
            }),
            Object.defineProperty(G.prototype, "props", {
              get: function () {
                return this.attributes;
              },
              set: function (e) {
                this.attributes = e;
              },
              configurable: !0,
            });
          var Z = u.event;
          u.event = function (e) {
            return (
              Z && (e = Z(e)), (e.persist = Object), (e.nativeEvent = e), e
            );
          };
          var X = u.vnode;
          function Q(e, t, n) {
            var r =
              t && t._preactCompatRendered && t._preactCompatRendered.base;
            r && r.parentNode !== t && (r = null),
              !r && t && (r = t.firstElementChild);
            for (var i = t.childNodes.length; i--; )
              t.childNodes[i] !== r && t.removeChild(t.childNodes[i]);
            var o = J(e, t, r);
            return (
              t &&
                (t._preactCompatRendered = o && (o._component || { base: o })),
              "function" == typeof n && n(),
              (o && o._component) || o
            );
          }
          u.vnode = function (e) {
            if (!e.preactCompatUpgraded) {
              e.preactCompatUpgraded = !0;
              var t = e.nodeName,
                n = (e.attributes =
                  null == e.attributes ? {} : de({}, e.attributes));
              "function" == typeof t
                ? (!0 === t[K] ||
                    (t.prototype && "isReactComponent" in t.prototype)) &&
                  (e.children &&
                    "" === String(e.children) &&
                    (e.children = void 0),
                  e.children && (n.children = e.children),
                  e.preactCompatNormalized || fe(e),
                  (function (e) {
                    var t = e.nodeName,
                      n = e.attributes;
                    (e.attributes = {}),
                      t.defaultProps && de(e.attributes, t.defaultProps);
                    n && de(e.attributes, n);
                  })(e))
                : (e.children &&
                    "" === String(e.children) &&
                    (e.children = void 0),
                  e.children && (n.children = e.children),
                  n.defaultValue &&
                    (n.value || 0 === n.value || (n.value = n.defaultValue),
                    delete n.defaultValue),
                  (function (e, t) {
                    var n, r, i;
                    if (t) {
                      for (i in t) if ((n = F.test(i))) break;
                      if (n)
                        for (i in ((r = e.attributes = {}), t))
                          t.hasOwnProperty(i) &&
                            (r[
                              F.test(i)
                                ? i.replace(/([A-Z0-9])/, "-$1").toLowerCase()
                                : i
                            ] = t[i]);
                    }
                  })(e, n));
            }
            X && X(e);
          };
          var ee = function () {};
          function te(e, t, n, r) {
            var i = Q(f(ee, { context: e.context }, t), n),
              o = i._component || i.base;
            return r && r.call(o, i), o;
          }
          function ne(e) {
            te(this, e.vnode, e.container);
          }
          (ee.prototype.getChildContext = function () {
            return this.props.context;
          }),
            (ee.prototype.render = function (e) {
              return e.children[0];
            });
          var re,
            ie = [],
            oe = {
              map: function (e, t, n) {
                return null == e
                  ? null
                  : ((e = oe.toArray(e)),
                    n && n !== e && (t = t.bind(n)),
                    e.map(t));
              },
              forEach: function (e, t, n) {
                if (null == e) return null;
                (e = oe.toArray(e)),
                  n && n !== e && (t = t.bind(n)),
                  e.forEach(t);
              },
              count: function (e) {
                return (e && e.length) || 0;
              },
              only: function (e) {
                if (1 !== (e = oe.toArray(e)).length)
                  throw new Error("Children.only() expects only one child.");
                return e[0];
              },
              toArray: function (e) {
                return null == e ? [] : ie.concat(e);
              },
            };
          function ae(e) {
            return le.bind(null, e);
          }
          for (var se = {}, ue = q.length; ue--; ) se[q[ue]] = ae(q[ue]);
          function ce(e) {
            var t = e[K];
            return t
              ? !0 === t
                ? e
                : t
              : ((t = (function (e) {
                  return ve({
                    displayName: e.displayName || e.name,
                    render: function () {
                      return e(this.props, this.context);
                    },
                  });
                })(e)),
                Object.defineProperty(t, K, { configurable: !0, value: !0 }),
                (t.displayName = e.displayName),
                (t.propTypes = e.propTypes),
                (t.defaultProps = e.defaultProps),
                Object.defineProperty(e, K, { configurable: !0, value: t }),
                t);
          }
          function le() {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            return (
              (function e(t, n) {
                for (var r = n || 0; r < t.length; r++) {
                  var i = t[r];
                  Array.isArray(i)
                    ? e(i)
                    : i &&
                      "object" == typeof i &&
                      !pe(i) &&
                      ((i.props && i.type) ||
                        (i.attributes && i.nodeName) ||
                        i.children) &&
                      (t[r] = le(
                        i.type || i.nodeName,
                        i.props || i.attributes,
                        i.children
                      ));
                }
              })(e, 2),
              fe(f.apply(void 0, e))
            );
          }
          function fe(e) {
            (e.preactCompatNormalized = !0),
              (function (e) {
                var t = e.attributes || (e.attributes = {});
                (he.enumerable = "className" in t),
                  t.className && (t.class = t.className);
                Object.defineProperty(t, "className", he);
              })(e),
              (function (e) {
                return (
                  "function" == typeof e && !(e.prototype && e.prototype.render)
                );
              })(e.nodeName) && (e.nodeName = ce(e.nodeName));
            var t = e.attributes.ref,
              n = t && typeof t;
            return (
              !re ||
                ("string" !== n && "number" !== n) ||
                (e.attributes.ref = (function (e, t) {
                  return (
                    t._refProxies[e] ||
                    (t._refProxies[e] = function (n) {
                      t &&
                        t.refs &&
                        ((t.refs[e] = n),
                        null === n && (delete t._refProxies[e], (t = null)));
                    })
                  );
                })(t, re)),
              (function (e) {
                var t = e.nodeName,
                  n = e.attributes;
                if (!n || "string" != typeof t) return;
                var r = {};
                for (var i in n) r[i.toLowerCase()] = i;
                r.ondoubleclick &&
                  ((n.ondblclick = n[r.ondoubleclick]),
                  delete n[r.ondoubleclick]);
                if (
                  r.onchange &&
                  ("textarea" === t ||
                    ("input" === t.toLowerCase() &&
                      !/^fil|che|rad/i.test(n.type)))
                ) {
                  var o = r.oninput || "oninput";
                  n[o] ||
                    ((n[o] = we([n[o], n[r.onchange]])), delete n[r.onchange]);
                }
              })(e),
              e
            );
          }
          function pe(e) {
            return e && (e instanceof G || e.$$typeof === H);
          }
          var he = {
            configurable: !0,
            get: function () {
              return this.class;
            },
            set: function (e) {
              this.class = e;
            },
          };
          function de(e, t) {
            for (
              var n = arguments, r = 1, i = void 0;
              r < arguments.length;
              r++
            )
              if ((i = n[r]))
                for (var o in i) i.hasOwnProperty(o) && (e[o] = i[o]);
            return e;
          }
          function ye(e, t) {
            for (var n in e) if (!(n in t)) return !0;
            for (var r in t) if (e[r] !== t[r]) return !0;
            return !1;
          }
          function me() {}
          function ve(e) {
            function t(e, t) {
              !(function (e) {
                for (var t in e) {
                  var n = e[t];
                  "function" != typeof n ||
                    n.__bound ||
                    W.hasOwnProperty(t) ||
                    ((e[t] = n.bind(e)).__bound = !0);
                }
              })(this),
                Ee.call(this, e, t, $),
                be.call(this, e, t);
            }
            return (
              (e = de({ constructor: t }, e)).mixins &&
                (function (e, t) {
                  for (var n in t)
                    t.hasOwnProperty(n) &&
                      (e[n] = we(
                        t[n].concat(e[n] || ie),
                        "getDefaultProps" === n ||
                          "getInitialState" === n ||
                          "getChildContext" === n
                      ));
                })(
                  e,
                  (function (e) {
                    for (var t = {}, n = 0; n < e.length; n++) {
                      var r = e[n];
                      for (var i in r)
                        r.hasOwnProperty(i) &&
                          "function" == typeof r[i] &&
                          (t[i] || (t[i] = [])).push(r[i]);
                    }
                    return t;
                  })(e.mixins)
                ),
              e.statics && de(t, e.statics),
              e.propTypes && (t.propTypes = e.propTypes),
              e.defaultProps && (t.defaultProps = e.defaultProps),
              e.getDefaultProps && (t.defaultProps = e.getDefaultProps.call(t)),
              (me.prototype = Ee.prototype),
              (t.prototype = de(new me(), e)),
              (t.displayName = e.displayName || "Component"),
              t
            );
          }
          function ge(e, t, n) {
            if (
              ("string" == typeof t && (t = e.constructor.prototype[t]),
              "function" == typeof t)
            )
              return t.apply(e, n);
          }
          function we(e, t) {
            return function () {
              for (var n, r = arguments, i = 0; i < e.length; i++) {
                var o = ge(this, e[i], r);
                if (t && null != o)
                  for (var a in (n || (n = {}), o))
                    o.hasOwnProperty(a) && (n[a] = o[a]);
                else void 0 !== o && (n = o);
              }
              return n;
            };
          }
          function be(e, t) {
            _e.call(this, e, t),
              (this.componentWillReceiveProps = we([
                _e,
                this.componentWillReceiveProps || "componentWillReceiveProps",
              ])),
              (this.render = we([_e, Se, this.render || "render", ke]));
          }
          function _e(e, t) {
            if (e) {
              var n = e.children;
              if (
                (n &&
                  Array.isArray(n) &&
                  1 === n.length &&
                  ("string" == typeof n[0] ||
                    "function" == typeof n[0] ||
                    n[0] instanceof G) &&
                  ((e.children = n[0]),
                  e.children &&
                    "object" == typeof e.children &&
                    ((e.children.length = 1), (e.children[0] = e.children))),
                V)
              ) {
                var r = "function" == typeof this ? this : this.constructor,
                  i = this.propTypes || r.propTypes,
                  o = this.displayName || r.name;
                i && a.a.checkPropTypes(i, e, "prop", o);
              }
            }
          }
          function Se(e) {
            re = this;
          }
          function ke() {
            re === this && (re = null);
          }
          function Ee(e, t, n) {
            z.call(this, e, t),
              (this.state = this.getInitialState ? this.getInitialState() : {}),
              (this.refs = {}),
              (this._refProxies = {}),
              n !== $ && be.call(this, e, t);
          }
          function Oe(e, t) {
            Ee.call(this, e, t);
          }
          de((Ee.prototype = new z()), {
            constructor: Ee,
            isReactComponent: {},
            replaceState: function (e, t) {
              for (var n in (this.setState(e, t), this.state))
                n in e || delete this.state[n];
            },
            getDOMNode: function () {
              return this.base;
            },
            isMounted: function () {
              return !!this.base;
            },
          }),
            (me.prototype = Ee.prototype),
            (Oe.prototype = new me()),
            (Oe.prototype.isPureReactComponent = !0),
            (Oe.prototype.shouldComponentUpdate = function (e, t) {
              return ye(this.props, e) || ye(this.state, t);
            });
          var Ae = {
              version: "15.1.0",
              DOM: se,
              PropTypes: a.a,
              Children: oe,
              render: Q,
              createClass: ve,
              createPortal: function (e, t) {
                return f(ne, { vnode: e, container: t });
              },
              createFactory: ae,
              createElement: le,
              cloneElement: function (e, t) {
                for (var n = [], r = arguments.length - 2; r-- > 0; )
                  n[r] = arguments[r + 2];
                if (!pe(e)) return e;
                var i = e.attributes || e.props,
                  o = [
                    f(
                      e.nodeName || e.type,
                      de({}, i),
                      e.children || (i && i.children)
                    ),
                    t,
                  ];
                return (
                  n && n.length
                    ? o.push(n)
                    : t && t.children && o.push(t.children),
                  fe(d.apply(void 0, o))
                );
              },
              isValidElement: pe,
              findDOMNode: function (e) {
                return (e && (e.base || (1 === e.nodeType && e))) || null;
              },
              unmountComponentAtNode: function (e) {
                var t = e._preactCompatRendered && e._preactCompatRendered.base;
                return !(!t || t.parentNode !== e || (J(f(Y), e, t), 0));
              },
              Component: Ee,
              PureComponent: Oe,
              unstable_renderSubtreeIntoContainer: te,
              unstable_batchedUpdates: function (e) {
                e();
              },
              __spread: de,
            },
            Pe = n(1),
            xe = n.n(Pe);
          const je = "solid-auth-client";
          class Te {
            constructor(e, t, n) {
              xe()(this, "_clientWindow", void 0),
                xe()(this, "_clientOrigin", void 0),
                xe()(this, "_handler", void 0),
                xe()(this, "_messageListener", void 0),
                (this._clientWindow = e),
                (this._clientOrigin = t),
                (this._handler = n),
                (this._messageListener = (e) => this._handleMessage(e));
            }
            async _handleMessage({ data: e, origin: t }) {
              if (t !== this._clientOrigin)
                return void console.warn(
                  `solid-auth-client is listening to ${this._clientOrigin} ` +
                    `so ignored a message received from ${t}.`
                );
              const n = e && e[je];
              if (n && n.method) {
                const e = n,
                  t = e.id,
                  r = e.method,
                  i = e.args,
                  o = await this._handler(r, ...i);
                this._clientWindow.postMessage(
                  { [je]: { id: t, ret: o } },
                  this._clientOrigin
                );
              }
            }
            start() {
              window.addEventListener("message", this._messageListener);
            }
            stop() {
              window.removeEventListener("message", this._messageListener);
            }
          }
          class Ce {
            constructor(e, t) {
              xe()(this, "_serverWindow", void 0),
                xe()(this, "_serverOrigin", void 0),
                (this._serverWindow = e),
                (this._serverOrigin = t);
            }
            request(e, ...t) {
              const n = Math.random();
              return (
                this._serverWindow.postMessage(
                  { [je]: { id: n, method: e, args: t } },
                  this._serverOrigin
                ),
                new Promise((e, t) => {
                  window.addEventListener("message", i);
                  const r = setTimeout(() => {
                    t(new Error("Could not connect to main window.")),
                      window.removeEventListener("message", i);
                  }, 2e3);
                  function i({ data: t }) {
                    const o = t && t[je];
                    o &&
                      o.id === n &&
                      o.hasOwnProperty("ret") &&
                      (e(o.ret),
                      clearTimeout(r),
                      window.removeEventListener("message", i));
                  }
                })
              );
            }
          }
          const Re = "solid-auth-client",
            Ie = () => {
              try {
                if (window && window.localStorage)
                  return Le(window.localStorage);
              } catch (e) {
                if (!(e instanceof ReferenceError)) throw e;
              }
              return (
                console.warn(
                  "'window.localStorage' unavailable.  Creating a (not very useful) in-memory storage object as the default storage interface."
                ),
                Le(Me())
              );
            };
          async function Ne(e) {
            let t, n;
            try {
              (t = await e.getItem(Re)), (n = JSON.parse(t || "{}"));
            } catch (e) {
              console.warn("Could not deserialize data:", t),
                console.error(e),
                (n = {});
            }
            return n;
          }
          async function Ue(e, t) {
            const n = t(await Ne(e));
            return await e.setItem(Re, JSON.stringify(n)), n;
          }
          function Le(e) {
            return {
              getItem: (t) => Promise.resolve(e.getItem(t)),
              setItem: (t, n) => Promise.resolve(e.setItem(t, n)),
              removeItem: (t) => Promise.resolve(e.removeItem(t)),
            };
          }
          const Me = () => {
            const e = {};
            return {
              getItem: (t) => (void 0 === e[t] ? null : e[t]),
              setItem: (t, n) => {
                e[t] = n;
              },
              removeItem: (t) => {
                delete e[t];
              },
            };
          };
          function De(e) {
            return {
              getItem: (t) => e.request("storage/getItem", t),
              setItem: (t, n) => e.request("storage/setItem", t, n),
              removeItem: (t) => e.request("storage/removeItem", t),
            };
          }
          var Be = n(37),
            ze = n.n(Be);
          n(9);
          const Je = () => window.location.href,
            qe = () => window.location.origin + window.location.pathname,
            He = (e) => {
              window.location.href = e;
            },
            Ke = (e) => new URL(e).origin,
            We = (e) => (
              "string" != typeof e && (e = "url" in e ? e.url : e.toString()),
              new URL(e, Je()).toString()
            );
          async function Fe(e) {
            return (await Ne(e)).session || null;
          }
          var $e = n(38),
            Ve = n.n($e),
            Ye = n(39),
            Ge = n(17),
            Ze = n.n(Ge),
            Xe = n(40),
            Qe = n.n(Xe);
          async function et(e, t) {
            try {
              const n = await (async function (e, t) {
                let n = await nt(t.storage);
                (n &&
                  n.provider.url === e &&
                  n.registration.redirect_uris.includes(t.callbackUri)) ||
                  ((n = await (function (e, { storage: t, callbackUri: n }) {
                    const r = {
                        issuer: e,
                        grant_types: ["implicit"],
                        redirect_uris: [n],
                        response_types: ["id_token token"],
                        scope: "openid profile",
                      },
                      i = {
                        defaults: {
                          authenticate: {
                            redirect_uri: n,
                            response_type: "id_token token",
                          },
                        },
                        store: t,
                      };
                    return Ze.a.register(e, r, i);
                  })(e, t)),
                  await (async function (e, t, n) {
                    return await Ue(e, (e) => i()({}, e, { rpConfig: n })), n;
                  })(t.storage, 0, n));
                return n;
              })(e, t);
              return (
                await (async function (e) {
                  await Ue(e, (e) =>
                    i()({}, e, { appHashFragment: window.location.hash })
                  );
                })(t.storage),
                (async function (e, { callbackUri: t, storage: n }) {
                  const r = await Ne(n),
                    i = await e.createRequest({ redirect_uri: t }, r);
                  return await Ue(n, () => r), He(i);
                })(n, t)
              );
            } catch (e) {
              return (
                console.warn("Error logging in with WebID-OIDC"),
                console.error(e),
                null
              );
            }
          }
          async function tt(e = Ie()) {
            try {
              const t = await nt(e);
              if (!t) return null;
              const n = Je();
              if (!/#(.*&)?access_token=/.test(n)) return null;
              (window.location.hash = ""),
                await (async function (e) {
                  await Ue(e, (e) => {
                    let t = e.appHashFragment,
                      n = void 0 === t ? "" : t,
                      r = Ve()(e, ["appHashFragment"]);
                    return (window.location.hash = n), r;
                  });
                })(e);
              const r = await Ne(e),
                o = await t.validateResponse(n, r);
              return o
                ? i()({}, o, { webId: o.idClaims.sub, idp: o.issuer })
                : null;
            } catch (e) {
              return (
                console.warn("Error finding a WebID-OIDC session"),
                console.error(e),
                null
              );
            }
          }
          async function nt(e) {
            const t = (await Ne(e)).rpConfig;
            return t ? ((t.store = e), Ze.a.from(t)) : null;
          }
          async function rt(e, t, n, r) {
            const o = await Qe.a.issueFor(We(n), e);
            return t(
              n,
              i()({}, r, {
                credentials: "include",
                headers: i()({}, r && r.headers ? r.headers : {}, {
                  authorization: `Bearer ${o}`,
                }),
              })
            );
          }
          function it(e) {
            return async (t) => {
              if (
                (function (e) {
                  if (401 !== e.status) return !1;
                  const t = e.headers.get("www-authenticate");
                  if (!t) return !1;
                  const n = Ye.parse(t);
                  return (
                    "Bearer" === n.scheme &&
                    n.params &&
                    "openid webid" === n.params.scope
                  );
                })(t)
              ) {
                const n = new URL(t.url).host;
                await (function (e) {
                  return async ({ url: t, requiresAuth: n }) => {
                    await Ue(e, (e) =>
                      i()({}, e, {
                        hosts: i()({}, e.hosts, { [t]: { requiresAuth: n } }),
                      })
                    );
                  };
                })(e)({ url: n, requiresAuth: !0 });
              }
            };
          }
          async function ot(e, t) {
            const n = await (function (e) {
              return async (t) => {
                const n = new URL(t).host,
                  r = await Fe(e);
                if (r && n === new URL(r.idp).host)
                  return { url: n, requiresAuth: !0 };
                const i = (await Ne(e)).hosts;
                return i && i[n];
              };
            })(e)(We(t));
            return null != n && n.requiresAuth;
          }
          function at(e, t, n) {
            return new Promise((r, i) => {
              const o = new Te(
                t,
                Ke(n.popupUri || ""),
                (function (e, { popupUri: t, callbackUri: n }, r) {
                  return async (i, ...o) => {
                    switch (i) {
                      case "getAppOrigin":
                        return window.location.origin;
                      case "storage/getItem":
                        return e.getItem(...o);
                      case "storage/setItem":
                        return e.setItem(...o);
                      case "storage/removeItem":
                        return e.removeItem(...o);
                      case "getLoginOptions":
                        return { popupUri: t, callbackUri: n };
                      case "foundSession":
                        r(...o);
                    }
                  };
                })(e, n, (e) => {
                  o.stop(), r(e);
                })
              );
              o.start();
            });
          }
          const st = fetch;
          class ut extends ze.a {
            constructor(...e) {
              super(...e), xe()(this, "_pendingSession", void 0);
            }
            fetch(e, t) {
              return (
                this.emit("request", We(e)),
                (async function (e, t, n, r) {
                  const i = await Fe(e);
                  if (!i) return t(n, r);
                  if (await ot(e, n)) return rt(i, t, n, r);
                  let o = await t(n, r);
                  return (
                    401 === o.status &&
                      (await it(e)(o),
                      (await ot(e, n)) && (o = rt(i, t, n, r))),
                    o
                  );
                })(Ie(), st, e, t)
              );
            }
            login(e, t) {
              return et(e, (t = i()({}, ct(qe()), t)));
            }
            async popupLogin(e) {
              (e = i()({}, ct(), e)),
                /https?:/.test(e.popupUri) ||
                  (e.popupUri = new URL(
                    e.popupUri || "/.well-known/solid/login",
                    window.location
                  ).toString()),
                e.callbackUri || (e.callbackUri = e.popupUri);
              const t = (function (e) {
                  const t = `width=650,height=400,left=${
                    window.screenX + (window.innerWidth - 650) / 2
                  },top=${window.screenY + (window.innerHeight - 400) / 2}`;
                  return window.open(e, "solid-auth-client", t);
                })(e.popupUri),
                n = await at(e.storage, t, e);
              return this.emit("login", n), this.emit("session", n), n;
            }
            async currentSession(e = Ie()) {
              let t = this._pendingSession || (await Fe(e));
              if (!t) {
                try {
                  (this._pendingSession = tt(e)),
                    (t = await this._pendingSession);
                } catch (e) {
                  console.error(e);
                }
                t &&
                  (await (function (e) {
                    return async (t) =>
                      (await Ue(e, (e) => i()({}, e, { session: t }))).session;
                  })(e)(t),
                  this.emit("login", t),
                  this.emit("session", t)),
                  delete this._pendingSession;
              }
              return t;
            }
            async trackSession(e) {
              e(await this.currentSession()), this.on("session", e);
            }
            async logout(e = Ie()) {
              if (await Fe(e)) {
                try {
                  await (async function (e, t) {
                    const n = await nt(e);
                    if (n)
                      try {
                        await n.logout();
                        try {
                          await t("/.well-known/solid/logout", {
                            credentials: "include",
                          });
                        } catch (e) {}
                      } catch (e) {
                        console.warn(
                          "Error logging out of the WebID-OIDC session"
                        ),
                          console.error(e);
                      }
                  })(e, st),
                    this.emit("logout"),
                    this.emit("session", null);
                } catch (e) {
                  console.warn("Error logging out:"), console.error(e);
                }
                await (async function (e) {
                  await Ue(e, (e) => i()({}, e, { session: null }));
                })(e);
              }
            }
          }
          function ct(e) {
            return {
              callbackUri: e ? e.split("#")[0] : "",
              popupUri: "",
              storage: Ie(),
            };
          }
          const lt = new ut();
          var ft = lt;
          if (
            (Object.getOwnPropertyNames(ut.prototype).forEach((e) => {
              const t = lt[e];
              "function" == typeof t && (lt[e] = t.bind(lt));
            }),
            "undefined" != typeof window)
          )
            if ("SolidAuthClient" in window)
              console.warn(
                "Caution: multiple versions of solid-auth-client active."
              );
            else {
              let e = !1;
              Object.defineProperty(window, "SolidAuthClient", {
                enumerable: !0,
                get: () => (
                  e ||
                    ((e = !0),
                    console.warn("window.SolidAuthClient has been deprecated."),
                    console.warn("Please use window.solid.auth instead.")),
                  lt
                ),
              });
            }
          class pt extends Ee {
            constructor(...e) {
              super(...e),
                xe()(this, "state", { loggedIn: !1 }),
                xe()(
                  this,
                  "client",
                  new Ce(window.opener, this.props.appOrigin)
                );
            }
            async componentDidMount() {
              const e = De(this.client),
                t = await ft.currentSession(e);
              await this.client.request("foundSession", t),
                this.setState({ loggedIn: !0 });
            }
            componentDidUpdate() {
              const e = this.props.afterLoggedIn;
              this.state.loggedIn && e();
            }
            render() {
              const e = this.state.loggedIn ? "Logged in!" : "Logging in…";
              return Ae.createElement("h1", { class: "center" }, e);
            }
          }
          n(78);
          class ht extends Ae.Component {
            constructor(...e) {
              super(...e),
                xe()(this, "state", { idp: "", error: null }),
                xe()(this, "handleChangeIdp", (e) => {
                  let t = e.target.value;
                  /^($|h$|ht)/.test(t) || (t = `https://${t}`),
                    this.setState({ idp: t });
                }),
                xe()(this, "handleBlurIdp", (e) => {
                  let t = e.target.value;
                  /^(https?:\/\/|$)/.test(t) ||
                    (t = t.replace(/^([a-z]*:\/*)?/, "https://")),
                    this.setState({ idp: t });
                }),
                xe()(this, "handleSelectIdp", (e) => async (t) => {
                  if (
                    (t.preventDefault(),
                    this.setState({ idp: e }),
                    !window.opener)
                  )
                    return (
                      console.warn("No parent window"),
                      void this.setState({
                        error:
                          "Couldn't find the application window.  Try closing this popup window and logging in again.",
                      })
                    );
                  const n = i()(
                    {},
                    await this.getClient().request("getLoginOptions"),
                    { storage: this.getStorage() }
                  );
                  await ft.login(e, n);
                });
            }
            getClient() {
              return new Ce(window.opener, this.props.appOrigin);
            }
            getStorage() {
              return De(this.getClient());
            }
            async componentDidMount() {
              const e = (await Ne(this.getStorage())).rpConfig;
              e && this.setState({ idp: e.provider.url }),
                this.idpInput.focus();
            }
            render() {
              const e = this.props,
                t = e.appName,
                n = e.idps,
                r = this.state,
                i = r.idp,
                o = r.error;
              return Ae.createElement(
                "div",
                null,
                Ae.createElement(
                  "h1",
                  null,
                  "Log in to ",
                  Ae.createElement("span", { className: "app-name" }, t)
                ),
                o && Ae.createElement("p", { className: "error" }, o),
                Ae.createElement(
                  "p",
                  null,
                  "Please enter your WebID or the URL of your identity provider:"
                ),
                Ae.createElement(
                  "form",
                  {
                    className: "custom-idp",
                    onSubmit: this.handleSelectIdp(i),
                  },
                  Ae.createElement("input", {
                    ref: (e) => (this.idpInput = e),
                    type: "url",
                    placeholder: "https://my-identity.provider",
                    value: i,
                    onChange: this.handleChangeIdp,
                    onBlur: this.handleBlurIdp,
                  }),
                  Ae.createElement(
                    "button",
                    { type: "submit", disabled: !i },
                    "Go"
                  )
                ),
                Ae.createElement(
                  "p",
                  null,
                  "Or pick an identity provider from the list below:"
                ),
                Ae.createElement(
                  "div",
                  { className: "idp-list" },
                  n.map((e) =>
                    Ae.createElement(
                      "button",
                      {
                        className: "idp",
                        onClick: this.handleSelectIdp(e.url),
                        key: e.url,
                      },
                      e.displayName
                    )
                  )
                )
              );
            }
          }
          var dt = ({ appName: e }) =>
              Ae.createElement(
                "div",
                null,
                Ae.createElement(
                  "p",
                  null,
                  "This window was opened to log you in to",
                  " ",
                  Ae.createElement("span", { className: "app-name" }, e),
                  ", but that app is no longer open."
                ),
                Ae.createElement(
                  "p",
                  null,
                  "If you're trying to log in to ",
                  Ae.createElement("span", { className: "app-name" }, e),
                  ", close this window, then go back to the app and log in again."
                ),
                Ae.createElement(
                  "p",
                  null,
                  "If you opened this window by accident, close it."
                )
              ),
            yt = n(41);
          n(81);
          (async function () {
            if (!window.opener) return null;
            let e = await (async function () {
              return (await Ne(sessionStorage)).appOrigin;
            })();
            if (e) return e;
            const t = new Ce(window.opener, "*");
            return (
              (e = await t.request("getAppOrigin")),
              await (function (e) {
                return Ue(sessionStorage, (t) => i()({}, t, { appOrigin: e }));
              })(e),
              e
            );
          })()
            .then((e) => {
              const t = window.location.href.replace(/(\/\/[^/]*\/).*/, "$1"),
                n = t.replace(/^[^:]+:|\//g, ""),
                r = "".trim() || n;
              let i;
              if (e)
                if (window.location.hash)
                  i = Ae.createElement(pt, {
                    appOrigin: e,
                    afterLoggedIn: () => setTimeout(window.close, 750),
                  });
                else {
                  const o = [...yt];
                  o.some((e) => e.url === t) ||
                    o.unshift({ displayName: n, url: t }),
                    (i = Ae.createElement(ht, {
                      idps: o,
                      appOrigin: e,
                      appName: r,
                    }));
                }
              else i = Ae.createElement(dt, { appName: r });
              Ae.render(i, document.getElementById("app-container"));
            })
            .catch((e) => {
              window.alert(e), window.close();
            });
        },
      ]);