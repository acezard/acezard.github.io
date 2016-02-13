$(window).resize(function() {
    $('.home-header').height($(window).height());
    var heroHeight = parseInt($('.home-header').css('height'), 10);
    $('#content-wrapper').css('margin-top', heroHeight+'px');
}).resize();
! function(e) {
    "undefined" != typeof exports ? e(exports) : (window.hljs = e({}), "function" == typeof define && define.amd && define("hljs", [], function() {
        return window.hljs
    }))
}(function(e) {
    function n(e) {
        return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
    }

    function t(e) {
        return e.nodeName.toLowerCase()
    }

    function r(e, n) {
        var t = e && e.exec(n);
        return t && 0 == t.index
    }

    function a(e) {
        return /no-?highlight|plain|text/.test(e)
    }

    function i(e) {
        var n, t, r, i = e.className + " ";
        if (i += e.parentNode ? e.parentNode.className : "", t = /\blang(?:uage)?-([\w-]+)\b/.exec(i)) return E(t[1]) ? t[1] : "no-highlight";
        for (i = i.split(/\s+/), n = 0, r = i.length; r > n; n++)
            if (E(i[n]) || a(i[n])) return i[n]
    }

    function o(e, n) {
        var t, r = {};
        for (t in e) r[t] = e[t];
        if (n)
            for (t in n) r[t] = n[t];
        return r
    }

    function u(e) {
        var n = [];
        return function r(e, a) {
            for (var i = e.firstChild; i; i = i.nextSibling) 3 == i.nodeType ? a += i.nodeValue.length : 1 == i.nodeType && (n.push({
                event: "start",
                offset: a,
                node: i
            }), a = r(i, a), t(i).match(/br|hr|img|input/) || n.push({
                event: "stop",
                offset: a,
                node: i
            }));
            return a
        }(e, 0), n
    }

    function c(e, r, a) {
        function i() {
            return e.length && r.length ? e[0].offset != r[0].offset ? e[0].offset < r[0].offset ? e : r : "start" == r[0].event ? e : r : e.length ? e : r
        }

        function o(e) {
            function r(e) {
                return " " + e.nodeName + '="' + n(e.value) + '"'
            }
            f += "<" + t(e) + Array.prototype.map.call(e.attributes, r).join("") + ">"
        }

        function u(e) {
            f += "</" + t(e) + ">"
        }

        function c(e) {
            ("start" == e.event ? o : u)(e.node)
        }
        for (var s = 0, f = "", l = []; e.length || r.length;) {
            var g = i();
            if (f += n(a.substr(s, g[0].offset - s)), s = g[0].offset, g == e) {
                l.reverse().forEach(u);
                do c(g.splice(0, 1)[0]), g = i(); while (g == e && g.length && g[0].offset == s);
                l.reverse().forEach(o)
            } else "start" == g[0].event ? l.push(g[0].node) : l.pop(), c(g.splice(0, 1)[0])
        }
        return f + n(a.substr(s))
    }

    function s(e) {
        function n(e) {
            return e && e.source || e
        }

        function t(t, r) {
            return new RegExp(n(t), "m" + (e.cI ? "i" : "") + (r ? "g" : ""))
        }

        function r(a, i) {
            if (!a.compiled) {
                if (a.compiled = !0, a.k = a.k || a.bK, a.k) {
                    var u = {},
                        c = function(n, t) {
                            e.cI && (t = t.toLowerCase()), t.split(" ").forEach(function(e) {
                                var t = e.split("|");
                                u[t[0]] = [n, t[1] ? Number(t[1]) : 1]
                            })
                        };
                    "string" == typeof a.k ? c("keyword", a.k) : Object.keys(a.k).forEach(function(e) {
                        c(e, a.k[e])
                    }), a.k = u
                }
                a.lR = t(a.l || /\b\w+\b/, !0), i && (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"), a.b || (a.b = /\B|\b/), a.bR = t(a.b), a.e || a.eW || (a.e = /\B|\b/), a.e && (a.eR = t(a.e)), a.tE = n(a.e) || "", a.eW && i.tE && (a.tE += (a.e ? "|" : "") + i.tE)), a.i && (a.iR = t(a.i)), void 0 === a.r && (a.r = 1), a.c || (a.c = []);
                var s = [];
                a.c.forEach(function(e) {
                    e.v ? e.v.forEach(function(n) {
                        s.push(o(e, n))
                    }) : s.push("self" == e ? a : e)
                }), a.c = s, a.c.forEach(function(e) {
                    r(e, a)
                }), a.starts && r(a.starts, i);
                var f = a.c.map(function(e) {
                    return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
                }).concat([a.tE, a.i]).map(n).filter(Boolean);
                a.t = f.length ? t(f.join("|"), !0) : {
                    exec: function() {
                        return null
                    }
                }
            }
        }
        r(e)
    }

    function f(e, t, a, i) {
        function o(e, n) {
            for (var t = 0; t < n.c.length; t++)
                if (r(n.c[t].bR, e)) return n.c[t]
        }

        function u(e, n) {
            if (r(e.eR, n)) {
                for (; e.endsParent && e.parent;) e = e.parent;
                return e
            }
            return e.eW ? u(e.parent, n) : void 0
        }

        function c(e, n) {
            return !a && r(n.iR, e)
        }

        function g(e, n) {
            var t = N.cI ? n[0].toLowerCase() : n[0];
            return e.k.hasOwnProperty(t) && e.k[t]
        }

        function h(e, n, t, r) {
            var a = r ? "" : w.classPrefix,
                i = '<span class="' + a,
                o = t ? "" : "</span>";
            return i += e + '">', i + n + o
        }

        function p() {
            if (!L.k) return n(y);
            var e = "",
                t = 0;
            L.lR.lastIndex = 0;
            for (var r = L.lR.exec(y); r;) {
                e += n(y.substr(t, r.index - t));
                var a = g(L, r);
                a ? (B += a[1], e += h(a[0], n(r[0]))) : e += n(r[0]), t = L.lR.lastIndex, r = L.lR.exec(y)
            }
            return e + n(y.substr(t))
        }

        function d() {
            var e = "string" == typeof L.sL;
            if (e && !x[L.sL]) return n(y);
            var t = e ? f(L.sL, y, !0, M[L.sL]) : l(y, L.sL.length ? L.sL : void 0);
            return L.r > 0 && (B += t.r), e && (M[L.sL] = t.top), h(t.language, t.value, !1, !0)
        }

        function b() {
            return void 0 !== L.sL ? d() : p()
        }

        function v(e, t) {
            var r = e.cN ? h(e.cN, "", !0) : "";
            e.rB ? (k += r, y = "") : e.eB ? (k += n(t) + r, y = "") : (k += r, y = t), L = Object.create(e, {
                parent: {
                    value: L
                }
            })
        }

        function m(e, t) {
            if (y += e, void 0 === t) return k += b(), 0;
            var r = o(t, L);
            if (r) return k += b(), v(r, t), r.rB ? 0 : t.length;
            var a = u(L, t);
            if (a) {
                var i = L;
                i.rE || i.eE || (y += t), k += b();
                do L.cN && (k += "</span>"), B += L.r, L = L.parent; while (L != a.parent);
                return i.eE && (k += n(t)), y = "", a.starts && v(a.starts, ""), i.rE ? 0 : t.length
            }
            if (c(t, L)) throw new Error('Illegal lexeme "' + t + '" for mode "' + (L.cN || "<unnamed>") + '"');
            return y += t, t.length || 1
        }
        var N = E(e);
        if (!N) throw new Error('Unknown language: "' + e + '"');
        s(N);
        var R, L = i || N,
            M = {},
            k = "";
        for (R = L; R != N; R = R.parent) R.cN && (k = h(R.cN, "", !0) + k);
        var y = "",
            B = 0;
        try {
            for (var C, j, I = 0;;) {
                if (L.t.lastIndex = I, C = L.t.exec(t), !C) break;
                j = m(t.substr(I, C.index - I), C[0]), I = C.index + j
            }
            for (m(t.substr(I)), R = L; R.parent; R = R.parent) R.cN && (k += "</span>");
            return {
                r: B,
                value: k,
                language: e,
                top: L
            }
        } catch (O) {
            if (-1 != O.message.indexOf("Illegal")) return {
                r: 0,
                value: n(t)
            };
            throw O
        }
    }

    function l(e, t) {
        t = t || w.languages || Object.keys(x);
        var r = {
                r: 0,
                value: n(e)
            },
            a = r;
        return t.forEach(function(n) {
            if (E(n)) {
                var t = f(n, e, !1);
                t.language = n, t.r > a.r && (a = t), t.r > r.r && (a = r, r = t)
            }
        }), a.language && (r.second_best = a), r
    }

    function g(e) {
        return w.tabReplace && (e = e.replace(/^((<[^>]+>|\t)+)/gm, function(e, n) {
            return n.replace(/\t/g, w.tabReplace)
        })), w.useBR && (e = e.replace(/\n/g, "<br>")), e
    }

    function h(e, n, t) {
        var r = n ? R[n] : t,
            a = [e.trim()];
        return e.match(/\bhljs\b/) || a.push("hljs"), -1 === e.indexOf(r) && a.push(r), a.join(" ").trim()
    }

    function p(e) {
        var n = i(e);
        if (!a(n)) {
            var t;
            w.useBR ? (t = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), t.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : t = e;
            var r = t.textContent,
                o = n ? f(n, r, !0) : l(r),
                s = u(t);
            if (s.length) {
                var p = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
                p.innerHTML = o.value, o.value = c(s, u(p), r)
            }
            o.value = g(o.value), e.innerHTML = o.value, e.className = h(e.className, n, o.language), e.result = {
                language: o.language,
                re: o.r
            }, o.second_best && (e.second_best = {
                language: o.second_best.language,
                re: o.second_best.r
            })
        }
    }

    function d(e) {
        w = o(w, e)
    }

    function b() {
        if (!b.called) {
            b.called = !0;
            var e = document.querySelectorAll("pre code");
            Array.prototype.forEach.call(e, p)
        }
    }

    function v() {
        addEventListener("DOMContentLoaded", b, !1), addEventListener("load", b, !1)
    }

    function m(n, t) {
        var r = x[n] = t(e);
        r.aliases && r.aliases.forEach(function(e) {
            R[e] = n
        })
    }

    function N() {
        return Object.keys(x)
    }

    function E(e) {
        return x[e] || x[R[e]]
    }
    var w = {
            classPrefix: "hljs-",
            tabReplace: null,
            useBR: !1,
            languages: void 0
        },
        x = {},
        R = {};
    return e.highlight = f, e.highlightAuto = l, e.fixMarkup = g, e.highlightBlock = p, e.configure = d, e.initHighlighting = b, e.initHighlightingOnLoad = v, e.registerLanguage = m, e.listLanguages = N, e.getLanguage = E, e.inherit = o, e.IR = "[a-zA-Z]\\w*", e.UIR = "[a-zA-Z_]\\w*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = {
        b: "\\\\[\\s\\S]",
        r: 0
    }, e.ASM = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n",
        c: [e.BE]
    }, e.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [e.BE]
    }, e.PWM = {
        b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/
    }, e.C = function(n, t, r) {
        var a = e.inherit({
            cN: "comment",
            b: n,
            e: t,
            c: []
        }, r || {});
        return a.c.push(e.PWM), a.c.push({
            cN: "doctag",
            b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
            r: 0
        }), a
    }, e.CLCM = e.C("//", "$"), e.CBCM = e.C("/\\*", "\\*/"), e.HCM = e.C("#", "$"), e.NM = {
        cN: "number",
        b: e.NR,
        r: 0
    }, e.CNM = {
        cN: "number",
        b: e.CNR,
        r: 0
    }, e.BNM = {
        cN: "number",
        b: e.BNR,
        r: 0
    }, e.CSSNM = {
        cN: "number",
        b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0
    }, e.RM = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [e.BE, {
            b: /\[/,
            e: /\]/,
            r: 0,
            c: [e.BE]
        }]
    }, e.TM = {
        cN: "title",
        b: e.IR,
        r: 0
    }, e.UTM = {
        cN: "title",
        b: e.UIR,
        r: 0
    }, e
});
hljs.registerLanguage("scss", function(e) {
    var t = "[a-zA-Z-][a-zA-Z0-9_-]*",
        i = {
            cN: "variable",
            b: "(\\$" + t + ")\\b"
        },
        r = {
            cN: "function",
            b: t + "\\(",
            rB: !0,
            eE: !0,
            e: "\\("
        },
        o = {
            cN: "hexcolor",
            b: "#[0-9A-Fa-f]+"
        };
    ({
        cN: "attribute",
        b: "[A-Z\\_\\.\\-]+",
        e: ":",
        eE: !0,
        i: "[^\\s]",
        starts: {
            cN: "value",
            eW: !0,
            eE: !0,
            c: [r, o, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
                cN: "important",
                b: "!important"
            }]
        }
    });
    return {
        cI: !0,
        i: "[=/|']",
        c: [e.CLCM, e.CBCM, r, {
            cN: "id",
            b: "\\#[A-Za-z0-9_-]+",
            r: 0
        }, {
            cN: "class",
            b: "\\.[A-Za-z0-9_-]+",
            r: 0
        }, {
            cN: "attr_selector",
            b: "\\[",
            e: "\\]",
            i: "$"
        }, {
            cN: "tag",
            b: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
            r: 0
        }, {
            cN: "pseudo",
            b: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"
        }, {
            cN: "pseudo",
            b: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"
        }, i, {
            cN: "attribute",
            b: "\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
            i: "[^\\s]"
        }, {
            cN: "value",
            b: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
        }, {
            cN: "value",
            b: ":",
            e: ";",
            c: [r, i, o, e.CSSNM, e.QSM, e.ASM, {
                cN: "important",
                b: "!important"
            }]
        }, {
            cN: "at_rule",
            b: "@",
            e: "[{;]",
            k: "mixin include extend for if else each while charset import debug media page content font-face namespace warn",
            c: [r, i, e.QSM, e.ASM, o, e.CSSNM, {
                cN: "preprocessor",
                b: "\\s[A-Za-z0-9_.-]+",
                r: 0
            }]
        }]
    }
});
hljs.registerLanguage("javascript", function(e) {
    return {
        aliases: ["js"],
        k: {
            keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
        },
        c: [{
            cN: "pi",
            r: 10,
            b: /^\s*['"]use (strict|asm)['"]/
        }, e.ASM, e.QSM, {
            cN: "string",
            b: "`",
            e: "`",
            c: [e.BE, {
                cN: "subst",
                b: "\\$\\{",
                e: "\\}"
            }]
        }, e.CLCM, e.CBCM, {
            cN: "number",
            v: [{
                b: "\\b(0[bB][01]+)"
            }, {
                b: "\\b(0[oO][0-7]+)"
            }, {
                b: e.CNR
            }],
            r: 0
        }, {
            b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [e.CLCM, e.CBCM, e.RM, {
                b: /</,
                e: />\s*[);\]]/,
                r: 0,
                sL: "xml"
            }],
            r: 0
        }, {
            cN: "function",
            bK: "function",
            e: /\{/,
            eE: !0,
            c: [e.inherit(e.TM, {
                b: /[A-Za-z$_][0-9A-Za-z$_]*/
            }), {
                cN: "params",
                b: /\(/,
                e: /\)/,
                eB: !0,
                eE: !0,
                c: [e.CLCM, e.CBCM],
                i: /["'\(]/
            }],
            i: /\[|%/
        }, {
            b: /\$[(.]/
        }, {
            b: "\\." + e.IR,
            r: 0
        }, {
            bK: "import",
            e: "[;$]",
            k: "import from as",
            c: [e.ASM, e.QSM]
        }, {
            cN: "class",
            bK: "class",
            e: /[{;=]/,
            eE: !0,
            i: /[:"\[\]]/,
            c: [{
                bK: "extends"
            }, e.UTM]
        }],
        i: /#/
    }
});
hljs.registerLanguage("less", function(e) {
    var r = "[\\w-]+",
        t = "(" + r + "|@{" + r + "})",
        a = [],
        c = [],
        n = function(e) {
            return {
                cN: "string",
                b: "~?" + e + ".*?" + e
            }
        },
        i = function(e, r, t) {
            return {
                cN: e,
                b: r,
                r: t
            }
        },
        s = function(r, t, a) {
            return e.inherit({
                cN: r,
                b: t + "\\(",
                e: "\\(",
                rB: !0,
                eE: !0,
                r: 0
            }, a)
        },
        b = {
            b: "\\(",
            e: "\\)",
            c: c,
            r: 0
        };
    c.push(e.CLCM, e.CBCM, n("'"), n('"'), e.CSSNM, i("hexcolor", "#[0-9A-Fa-f]+\\b"), s("function", "(url|data-uri)", {
        starts: {
            cN: "string",
            e: "[\\)\\n]",
            eE: !0
        }
    }), s("function", r), b, i("variable", "@@?" + r, 10), i("variable", "@{" + r + "}"), i("built_in", "~?`[^`]*?`"), {
        cN: "attribute",
        b: r + "\\s*:",
        e: ":",
        rB: !0,
        eE: !0
    });
    var o = c.concat({
            b: "{",
            e: "}",
            c: a
        }),
        u = {
            bK: "when",
            eW: !0,
            c: [{
                bK: "and not"
            }].concat(c)
        },
        C = {
            cN: "attribute",
            b: t,
            e: ":",
            eE: !0,
            c: [e.CLCM, e.CBCM],
            i: /\S/,
            starts: {
                e: "[;}]",
                rE: !0,
                c: c,
                i: "[<=$]"
            }
        },
        l = {
            cN: "at_rule",
            b: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
            starts: {
                e: "[;{}]",
                rE: !0,
                c: c,
                r: 0
            }
        },
        d = {
            cN: "variable",
            v: [{
                b: "@" + r + "\\s*:",
                r: 15
            }, {
                b: "@" + r
            }],
            starts: {
                e: "[;}]",
                rE: !0,
                c: o
            }
        },
        p = {
            v: [{
                b: "[\\.#:&\\[]",
                e: "[;{}]"
            }, {
                b: t + "[^;]*{",
                e: "{"
            }],
            rB: !0,
            rE: !0,
            i: "[<='$\"]",
            c: [e.CLCM, e.CBCM, u, i("keyword", "all\\b"), i("variable", "@{" + r + "}"), i("tag", t + "%?", 0), i("id", "#" + t), i("class", "\\." + t, 0), i("keyword", "&", 0), s("pseudo", ":not"), s("keyword", ":extend"), i("pseudo", "::?" + t), {
                cN: "attr_selector",
                b: "\\[",
                e: "\\]"
            }, {
                b: "\\(",
                e: "\\)",
                c: o
            }, {
                b: "!important"
            }]
        };
    return a.push(e.CLCM, e.CBCM, l, d, p, C), {
        cI: !0,
        i: "[=>'/<($\"]",
        c: a
    }
});
hljs.registerLanguage("css", function(e) {
    var c = "[a-zA-Z-][a-zA-Z0-9_-]*",
        a = {
            cN: "function",
            b: c + "\\(",
            rB: !0,
            eE: !0,
            e: "\\("
        },
        r = {
            cN: "rule",
            b: /[A-Z\_\.\-]+\s*:/,
            rB: !0,
            e: ";",
            eW: !0,
            c: [{
                cN: "attribute",
                b: /\S/,
                e: ":",
                eE: !0,
                starts: {
                    cN: "value",
                    eW: !0,
                    eE: !0,
                    c: [a, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
                        cN: "hexcolor",
                        b: "#[0-9A-Fa-f]+"
                    }, {
                        cN: "important",
                        b: "!important"
                    }]
                }
            }]
        };
    return {
        cI: !0,
        i: /[=\/|'\$]/,
        c: [e.CBCM, r, {
            cN: "id",
            b: /\#[A-Za-z0-9_-]+/
        }, {
            cN: "class",
            b: /\.[A-Za-z0-9_-]+/
        }, {
            cN: "attr_selector",
            b: /\[/,
            e: /\]/,
            i: "$"
        }, {
            cN: "pseudo",
            b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"']+/
        }, {
            cN: "at_rule",
            b: "@(font-face|page)",
            l: "[a-z-]+",
            k: "font-face page"
        }, {
            cN: "at_rule",
            b: "@",
            e: "[{;]",
            c: [{
                cN: "keyword",
                b: /\S+/
            }, {
                b: /\s/,
                eW: !0,
                eE: !0,
                r: 0,
                c: [a, e.ASM, e.QSM, e.CSSNM]
            }]
        }, {
            cN: "tag",
            b: c,
            r: 0
        }, {
            cN: "rules",
            b: "{",
            e: "}",
            i: /\S/,
            c: [e.CBCM, r]
        }]
    }
});
hljs.registerLanguage("markdown", function(e) {
    return {
        aliases: ["md", "mkdown", "mkd"],
        c: [{
            cN: "header",
            v: [{
                b: "^#{1,6}",
                e: "$"
            }, {
                b: "^.+?\\n[=-]{2,}$"
            }]
        }, {
            b: "<",
            e: ">",
            sL: "xml",
            r: 0
        }, {
            cN: "bullet",
            b: "^([*+-]|(\\d+\\.))\\s+"
        }, {
            cN: "strong",
            b: "[*_]{2}.+?[*_]{2}"
        }, {
            cN: "emphasis",
            v: [{
                b: "\\*.+?\\*"
            }, {
                b: "_.+?_",
                r: 0
            }]
        }, {
            cN: "blockquote",
            b: "^>\\s+",
            e: "$"
        }, {
            cN: "code",
            v: [{
                b: "`.+?`"
            }, {
                b: "^( {4}| )",
                e: "$",
                r: 0
            }]
        }, {
            cN: "horizontal_rule",
            b: "^[-\\*]{3,}",
            e: "$"
        }, {
            b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
            rB: !0,
            c: [{
                cN: "link_label",
                b: "\\[",
                e: "\\]",
                eB: !0,
                rE: !0,
                r: 0
            }, {
                cN: "link_url",
                b: "\\]\\(",
                e: "\\)",
                eB: !0,
                eE: !0
            }, {
                cN: "link_reference",
                b: "\\]\\[",
                e: "\\]",
                eB: !0,
                eE: !0
            }],
            r: 10
        }, {
            b: "^\\[.+\\]:",
            rB: !0,
            c: [{
                cN: "link_reference",
                b: "\\[",
                e: "\\]:",
                eB: !0,
                eE: !0,
                starts: {
                    cN: "link_url",
                    e: "$"
                }
            }]
        }]
    }
});
hljs.registerLanguage("json", function(e) {
    var t = {
            literal: "true false null"
        },
        i = [e.QSM, e.CNM],
        l = {
            cN: "value",
            e: ",",
            eW: !0,
            eE: !0,
            c: i,
            k: t
        },
        c = {
            b: "{",
            e: "}",
            c: [{
                cN: "attribute",
                b: '\\s*"',
                e: '"\\s*:\\s*',
                eB: !0,
                eE: !0,
                c: [e.BE],
                i: "\\n",
                starts: l
            }],
            i: "\\S"
        },
        n = {
            b: "\\[",
            e: "\\]",
            c: [e.inherit(l, {
                cN: null
            })],
            i: "\\S"
        };
    return i.splice(i.length, 0, c, n), {
        c: i,
        k: t,
        i: "\\S"
    }
});
hljs.registerLanguage("xml", function(t) {
    var s = "[A-Za-z0-9\\._:-]+",
        c = {
            b: /<\?(php)?(?!\w)/,
            e: /\?>/,
            sL: "php"
        },
        e = {
            eW: !0,
            i: /</,
            r: 0,
            c: [c, {
                cN: "attribute",
                b: s,
                r: 0
            }, {
                b: "=",
                r: 0,
                c: [{
                    cN: "value",
                    c: [c],
                    v: [{
                        b: /"/,
                        e: /"/
                    }, {
                        b: /'/,
                        e: /'/
                    }, {
                        b: /[^\s\/>]+/
                    }]
                }]
            }]
        };
    return {
        aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"],
        cI: !0,
        c: [{
            cN: "doctype",
            b: "<!DOCTYPE",
            e: ">",
            r: 10,
            c: [{
                b: "\\[",
                e: "\\]"
            }]
        }, t.C("<!--", "-->", {
            r: 10
        }), {
            cN: "cdata",
            b: "<\\!\\[CDATA\\[",
            e: "\\]\\]>",
            r: 10
        }, {
            cN: "tag",
            b: "<style(?=\\s|>|$)",
            e: ">",
            k: {
                title: "style"
            },
            c: [e],
            starts: {
                e: "</style>",
                rE: !0,
                sL: "css"
            }
        }, {
            cN: "tag",
            b: "<script(?=\\s|>|$)",
            e: ">",
            k: {
                title: "script"
            },
            c: [e],
            starts: {
                e: "</script>",
                rE: !0,
                sL: ["actionscript", "javascript", "handlebars"]
            }
        }, c, {
            cN: "pi",
            b: /<\?\w+/,
            e: /\?>/,
            r: 10
        }, {
            cN: "tag",
            b: "</?",
            e: "/?>",
            c: [{
                cN: "title",
                b: /[^ \/><\n\t]+/,
                r: 0
            }, e]
        }]
    }
});

//
// NAVBAR
// --------------------------------------------------

/*$('.nav a').on('click', function(){
    $(".btn-navbar").click(); //bootstrap 2.x
    $(".navbar-toggle").click() //bootstrap 3.x by Richard
});*/

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('#menu').addClass('shrink');
  } else {
    $('#menu').removeClass('shrink');
  }
});
//
// RIPPLE EFFECT
// --------------------------------------------------

$(".actionbutton").click(function(t) {
    $(".ripple").remove();
    var e = $(this).offset().left,
        i = $(this).offset().top,
        p = $(this).width(),
        s = $(this).height();
    $(this).prepend("<span class='ripple'></span>"), p >= s ? s = p : p = s;
    var a = t.pageX - e - p / 2,
        o = t.pageY - i - s / 2;
    $(".ripple").css({
        width: p,
        height: s,
        top: o + "px",
        left: a + "px"
    }).addClass("rippleEffect")
}), $(".actionbutton2").click(function(t) {
    $(".ripple2").remove();
    var e = $(this).offset().left,
        i = $(this).offset().top,
        p = $(this).width(),
        s = $(this).height();
    $(this).prepend("<span class='ripple2'></span>"), p >= s ? s = p : p = s;
    var a = t.pageX - e - p / 2,
        o = t.pageY - i - s / 2;
    $(".ripple2").css({
        width: p,
        height: s,
        top: o + "px",
        left: a + "px"
    }).addClass("rippleEffect2")
}),$(".actionbutton3").click(function(t) {
    $(".ripple3").remove();
    var e = $(this).offset().left,
        i = $(this).offset().top,
        p = $(this).width(),
        s = $(this).height();
    $(this).prepend("<span class='ripple3'></span>"), p >= s ? s = p : p = s;
    var a = t.pageX - e - p / 2,
        o = t.pageY - i - s / 2;
    $(".ripple3").css({
        width: p,
        height: s,
        top: o + "px",
        left: a + "px"
    }).addClass("rippleEffect3")
}), $('.actionbutton2').click(function() {
        $(this).addClass('visited');
}), $('.actionbutton3').click(function() {
        $(this).addClass('visited');
}), $('body').click(function() {
        $('a > i').removeClass('visited');
})
/*------------------------------------------------------------------
SCROLLING.JS
-------------------------------------------------------------------*/
// Scrolling animation - anchor buttons
$('.teaser-wrapper, .nav-block').addClass("hiddenCSS").viewportChecker({
    classToAdd: 'visibleCSS animated fadeIn',
    offset: 0
});
$(".scrollTo").click(function() {
    var t = $(this).attr("href");
    return $("html, body").animate({
        scrollTop: $(t).offset().top - 0
    }, {
        duration: 1e3,
        easing: "easeInOutQuint"
    }), !1
});
$("a[href='#top']").click(function() {
    return $("html, body").animate({
        scrollTop: 0
    }, {
        duration: 1e3,
        easing: "easeInOutQuint"
    }), !1
});

/*------------------------------------------------------------------
SLIDERS.JS
-------------------------------------------------------------------*/
// INIT FONCTIONNALITES SLIDER
$('.fct-slide').slick({
    initialSlide: 1,
    arrows: false,
    swipe: false,
    infinite: false,
    cssEase: 'ease-in-out',
    easing: 'ease-in-out',
    speed: 250
});

// ANIMATION SETTINGS
// Expanded
$('#go-to-fonctionnalite, #go-to-fonctionnalite a').on('click', function() {
    $('.fct-slide').slick('slickGoTo', 0);
    $('.evol-title').addClass('disappear');
    $('.fonctionnalites').addClass('change-after');
});
$('#go-to-evolution, #go-to-evolution a').on('click', function() {
    $('.fct-slide').slick('slickGoTo', 2);
    $('.fonction-title').addClass('disappear');
    $('.evol-title > .animation').addClass('replace');
    $('.fonctionnalites').addClass('change-after-2');
});
// Retracted
$('#go-back-fonctionnalite, #go-back-fonctionnalite a').on('click', function() {
    $('.fct-slide').slick('slickGoTo', 1);
    $('.evol-title').removeClass('disappear');
    $('.fonctionnalites').removeClass('change-after');
});
$('#go-back-evolution, #go-back-evolution a').on('click', function() {
    $('.fct-slide').slick('slickGoTo', 1);
    $('.fonction-title').removeClass('disappear');
    $('.evol-title > .animation').removeClass('replace');
    $('.fonctionnalites').removeClass('change-after-2');
});

// INIT CONFIANCE SLIDER
$('.confiance-slide').slick({
    arrows: true,
    dots: true
});