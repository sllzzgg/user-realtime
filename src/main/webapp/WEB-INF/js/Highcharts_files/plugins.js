	function updateIsXs() {
	isXs = $(window).width() < 746
}
function switchOS(t) {
	$(".os-main").css("display", t ? "none" : "block"), $(".os-open").css("display", t ? "block" : "none"), osShow = !t
}
function init() {
	return isShop ? ($("body").css("padding-top", "87px"), $(".nav-shop").addClass("active"), !1) : void window.addEventListener("scroll", function() {
		didScroll || (didScroll = !0, setTimeout(scrollPage, 250))
	}, !1)
}
function scrollPage() {
	var t = scrollY();
	return cureentSroll > t ? header.removeClass("fadeOutUp").addClass("fadeInDown") : t >= changeHeaderOn && header.removeClass("fadeInDown").addClass("fadeOutUp"), Math.abs(t - cureentSroll) > 300 && osShow && switchOS(!0), cureentSroll = t, didScroll = !1, 1200 > documentHeight ? !1 : void(t > 600 && !imTopShow ? (imTop.show(), imTopShow = !0) : 600 >= t && imTopShow && (imTop.hide(), imTopShow = !1))
}
function scrollY() {
	return window.pageYOffset || docElem.scrollTop
}
function dateFormat(t) {
	t = t ? new Date(t) : new Date;
	var e = t.getFullYear(),
		i = t.getMonth() + 1,
		n = t.getUTCDate();
	return e + "-" + (10 > i ? "0" + i : i) + "-" + (10 > n ? "0" + n : n)
}!
function(t, e) {
	function i(t) {
		var e = t.length,
			i = lt.type(t);
		return lt.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || "function" !== i && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)
	}
	function n(t) {
		var e = At[t] = {};
		return lt.each(t.match(ht) || [], function(t, i) {
			e[i] = !0
		}), e
	}
	function r(t, i, n, r) {
		if (lt.acceptData(t)) {
			var o, s, a = lt.expando,
				l = "string" == typeof i,
				c = t.nodeType,
				h = c ? lt.cache : t,
				u = c ? t[a] : t[a] && a;
			if (u && h[u] && (r || h[u].data) || !l || n !== e) return u || (c ? t[a] = u = J.pop() || lt.guid++ : u = a), h[u] || (h[u] = {}, c || (h[u].toJSON = lt.noop)), "object" != typeof i && "function" != typeof i || (r ? h[u] = lt.extend(h[u], i) : h[u].data = lt.extend(h[u].data, i)), o = h[u], r || (o.data || (o.data = {}), o = o.data), n !== e && (o[lt.camelCase(i)] = n), l ? (s = o[i], null == s && (s = o[lt.camelCase(i)])) : s = o, s
		}
	}
	function o(t, e, i) {
		if (lt.acceptData(t)) {
			var n, r, o, s = t.nodeType,
				l = s ? lt.cache : t,
				c = s ? t[lt.expando] : lt.expando;
			if (l[c]) {
				if (e && (o = i ? l[c] : l[c].data)) {
					lt.isArray(e) ? e = e.concat(lt.map(e, lt.camelCase)) : e in o ? e = [e] : (e = lt.camelCase(e), e = e in o ? [e] : e.split(" "));
					for (n = 0, r = e.length; r > n; n++) delete o[e[n]];
					if (!(i ? a : lt.isEmptyObject)(o)) return
				}(i || (delete l[c].data, a(l[c]))) && (s ? lt.cleanData([t], !0) : lt.support.deleteExpando || l != l.window ? delete l[c] : l[c] = null)
			}
		}
	}
	function s(t, i, n) {
		if (n === e && 1 === t.nodeType) {
			var r = "data-" + i.replace(Ct, "-$1").toLowerCase();
			if (n = t.getAttribute(r), "string" == typeof n) {
				try {
					n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : St.test(n) ? lt.parseJSON(n) : n
				} catch (o) {}
				lt.data(t, i, n)
			} else n = e
		}
		return n
	}
	function a(t) {
		var e;
		for (e in t) if (("data" !== e || !lt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
		return !0
	}
	function l() {
		return !0
	}
	function c() {
		return !1
	}
	function h(t, e) {
		do t = t[e];
		while (t && 1 !== t.nodeType);
		return t
	}
	function u(t, e, i) {
		if (e = e || 0, lt.isFunction(e)) return lt.grep(t, function(t, n) {
			var r = !! e.call(t, n, t);
			return r === i
		});
		if (e.nodeType) return lt.grep(t, function(t) {
			return t === e === i
		});
		if ("string" == typeof e) {
			var n = lt.grep(t, function(t) {
				return 1 === t.nodeType
			});
			if (Xt.test(e)) return lt.filter(e, n, !i);
			e = lt.filter(e, n)
		}
		return lt.grep(t, function(t) {
			return lt.inArray(t, e) >= 0 === i
		})
	}
	function p(t) {
		var e = Gt.split("|"),
			i = t.createDocumentFragment();
		if (i.createElement) for (; e.length;) i.createElement(e.pop());
		return i
	}
	function d(t, e) {
		return t.getElementsByTagName(e)[0] || t.appendChild(t.ownerDocument.createElement(e))
	}
	function f(t) {
		var e = t.getAttributeNode("type");
		return t.type = (e && e.specified) + "/" + t.type, t
	}
	function g(t) {
		var e = re.exec(t.type);
		return e ? t.type = e[1] : t.removeAttribute("type"), t
	}
	function m(t, e) {
		for (var i, n = 0; null != (i = t[n]); n++) lt._data(i, "globalEval", !e || lt._data(e[n], "globalEval"))
	}
	function v(t, e) {
		if (1 === e.nodeType && lt.hasData(t)) {
			var i, n, r, o = lt._data(t),
				s = lt._data(e, o),
				a = o.events;
			if (a) {
				delete s.handle, s.events = {};
				for (i in a) for (n = 0, r = a[i].length; r > n; n++) lt.event.add(e, i, a[i][n])
			}
			s.data && (s.data = lt.extend({}, s.data))
		}
	}
	function y(t, e) {
		var i, n, r;
		if (1 === e.nodeType) {
			if (i = e.nodeName.toLowerCase(), !lt.support.noCloneEvent && e[lt.expando]) {
				r = lt._data(e);
				for (n in r.events) lt.removeEvent(e, n, r.handle);
				e.removeAttribute(lt.expando)
			}
			"script" === i && e.text !== t.text ? (f(e).text = t.text, g(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), lt.support.html5Clone && t.innerHTML && !lt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && ee.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
		}
	}
	function b(t, i) {
		var n, r, o = 0,
			s = typeof t.getElementsByTagName !== U ? t.getElementsByTagName(i || "*") : typeof t.querySelectorAll !== U ? t.querySelectorAll(i || "*") : e;
		if (!s) for (s = [], n = t.childNodes || t; null != (r = n[o]); o++)!i || lt.nodeName(r, i) ? s.push(r) : lt.merge(s, b(r, i));
		return i === e || i && lt.nodeName(t, i) ? lt.merge([t], s) : s
	}
	function x(t) {
		ee.test(t.type) && (t.defaultChecked = t.checked)
	}
	function w(t, e) {
		if (e in t) return e;
		for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, r = Se.length; r--;) if (e = Se[r] + i, e in t) return e;
		return n
	}
	function k(t, e) {
		return t = e || t, "none" === lt.css(t, "display") || !lt.contains(t.ownerDocument, t)
	}
	function A(t, e) {
		for (var i, n, r, o = [], s = 0, a = t.length; a > s; s++) n = t[s], n.style && (o[s] = lt._data(n, "olddisplay"), i = n.style.display, e ? (o[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && k(n) && (o[s] = lt._data(n, "olddisplay", _(n.nodeName)))) : o[s] || (r = k(n), (i && "none" !== i || !r) && lt._data(n, "olddisplay", r ? i : lt.css(n, "display"))));
		for (s = 0; a > s; s++) n = t[s], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[s] || "" : "none"));
		return t
	}
	function S(t, e, i) {
		var n = ve.exec(e);
		return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
	}
	function C(t, e, i, n, r) {
		for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2)"margin" === i && (s += lt.css(t, i + Ae[o], !0, r)), n ? ("content" === i && (s -= lt.css(t, "padding" + Ae[o], !0, r)), "margin" !== i && (s -= lt.css(t, "border" + Ae[o] + "Width", !0, r))) : (s += lt.css(t, "padding" + Ae[o], !0, r), "padding" !== i && (s += lt.css(t, "border" + Ae[o] + "Width", !0, r)));
		return s
	}
	function T(t, e, i) {
		var n = !0,
			r = "width" === e ? t.offsetWidth : t.offsetHeight,
			o = he(t),
			s = lt.support.boxSizing && "border-box" === lt.css(t, "boxSizing", !1, o);
		if (0 >= r || null == r) {
			if (r = ue(t, e, o), (0 > r || null == r) && (r = t.style[e]), ye.test(r)) return r;
			n = s && (lt.support.boxSizingReliable || r === t.style[e]), r = parseFloat(r) || 0
		}
		return r + C(t, e, i || (s ? "border" : "content"), n, o) + "px"
	}
	function _(t) {
		var e = q,
			i = xe[t];
		return i || (i = M(t, e), "none" !== i && i || (ce = (ce || lt("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (ce[0].contentWindow || ce[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), i = M(t, e), ce.detach()), xe[t] = i), i
	}
	function M(t, e) {
		var i = lt(e.createElement(t)).appendTo(e.body),
			n = lt.css(i[0], "display");
		return i.remove(), n
	}
	function L(t, e, i, n) {
		var r;
		if (lt.isArray(e)) lt.each(e, function(e, r) {
			i || Te.test(t) ? n(t, r) : L(t + "[" + ("object" == typeof r ? e : "") + "]", r, i, n)
		});
		else if (i || "object" !== lt.type(e)) n(t, e);
		else for (r in e) L(t + "[" + r + "]", e[r], i, n)
	}
	function P(t) {
		return function(e, i) {
			"string" != typeof e && (i = e, e = "*");
			var n, r = 0,
				o = e.toLowerCase().match(ht) || [];
			if (lt.isFunction(i)) for (; n = o[r++];)"+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
		}
	}
	function E(t, e, i, n) {
		function r(a) {
			var l;
			return o[a] = !0, lt.each(t[a] || [], function(t, a) {
				var c = a(e, i, n);
				return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
			}), l
		}
		var o = {},
			s = t === Xe;
		return r(e.dataTypes[0]) || !o["*"] && r("*")
	}
	function D(t, i) {
		var n, r, o = lt.ajaxSettings.flatOptions || {};
		for (r in i) i[r] !== e && ((o[r] ? t : n || (n = {}))[r] = i[r]);
		return n && lt.extend(!0, t, n), t
	}
	function I(t, i, n) {
		var r, o, s, a, l = t.contents,
			c = t.dataTypes,
			h = t.responseFields;
		for (a in h) a in n && (i[h[a]] = n[a]);
		for (;
		"*" === c[0];) c.shift(), o === e && (o = t.mimeType || i.getResponseHeader("Content-Type"));
		if (o) for (a in l) if (l[a] && l[a].test(o)) {
			c.unshift(a);
			break
		}
		if (c[0] in n) s = c[0];
		else {
			for (a in n) {
				if (!c[0] || t.converters[a + " " + c[0]]) {
					s = a;
					break
				}
				r || (r = a)
			}
			s = s || r
		}
		return s ? (s !== c[0] && c.unshift(s), n[s]) : void 0
	}
	function N(t, e) {
		var i, n, r, o, s = {},
			a = 0,
			l = t.dataTypes.slice(),
			c = l[0];
		if (t.dataFilter && (e = t.dataFilter(e, t.dataType)), l[1]) for (r in t.converters) s[r.toLowerCase()] = t.converters[r];
		for (; n = l[++a];) if ("*" !== n) {
			if ("*" !== c && c !== n) {
				if (r = s[c + " " + n] || s["* " + n], !r) for (i in s) if (o = i.split(" "), o[1] === n && (r = s[c + " " + o[0]] || s["* " + o[0]])) {
					r === !0 ? r = s[i] : s[i] !== !0 && (n = o[0], l.splice(a--, 0, n));
					break
				}
				if (r !== !0) if (r && t["throws"]) e = r(e);
				else try {
					e = r(e)
				} catch (h) {
					return {
						state: "parsererror",
						error: r ? h : "No conversion from " + c + " to " + n
					}
				}
			}
			c = n
		}
		return {
			state: "success",
			data: e
		}
	}
	function O() {
		try {
			return new t.XMLHttpRequest
		} catch (e) {}
	}
	function B() {
		try {
			return new t.ActiveXObject("Microsoft.XMLHTTP")
		} catch (e) {}
	}
	function R() {
		return setTimeout(function() {
			Qe = e
		}), Qe = lt.now()
	}
	function z(t, e) {
		lt.each(e, function(e, i) {
			for (var n = (ri[e] || []).concat(ri["*"]), r = 0, o = n.length; o > r; r++) if (n[r].call(t, e, i)) return
		})
	}
	function j(t, e, i) {
		var n, r, o = 0,
			s = ni.length,
			a = lt.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (r) return !1;
				for (var e = Qe || R(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, o = 1 - n, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(o);
				return a.notifyWith(t, [c, o, i]), 1 > o && l ? i : (a.resolveWith(t, [c]), !1)
			},
			c = a.promise({
				elem: t,
				props: lt.extend({}, e),
				opts: lt.extend(!0, {
					specialEasing: {}
				}, i),
				originalProperties: e,
				originalOptions: i,
				startTime: Qe || R(),
				duration: i.duration,
				tweens: [],
				createTween: function(e, i) {
					var n = lt.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
					return c.tweens.push(n), n
				},
				stop: function(e) {
					var i = 0,
						n = e ? c.tweens.length : 0;
					if (r) return this;
					for (r = !0; n > i; i++) c.tweens[i].run(1);
					return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
				}
			}),
			h = c.props;
		for (H(h, c.opts.specialEasing); s > o; o++) if (n = ni[o].call(c, t, h, c.opts)) return n;
		return z(c, h), lt.isFunction(c.opts.start) && c.opts.start.call(t, c), lt.fx.timer(lt.extend(l, {
			elem: t,
			anim: c,
			queue: c.opts.queue
		})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
	}
	function H(t, e) {
		var i, n, r, o, s;
		for (r in t) if (n = lt.camelCase(r), o = e[n], i = t[r], lt.isArray(i) && (o = i[1], i = t[r] = i[0]), r !== n && (t[n] = i, delete t[r]), s = lt.cssHooks[n], s && "expand" in s) {
			i = s.expand(i), delete t[n];
			for (r in i) r in t || (t[r] = i[r], e[r] = o)
		} else e[n] = o
	}
	function W(t, e, i) {
		var n, r, o, s, a, l, c, h, u, p = this,
			d = t.style,
			f = {},
			g = [],
			m = t.nodeType && k(t);
		i.queue || (h = lt._queueHooks(t, "fx"), null == h.unqueued && (h.unqueued = 0, u = h.empty.fire, h.empty.fire = function() {
			h.unqueued || u()
		}), h.unqueued++, p.always(function() {
			p.always(function() {
				h.unqueued--, lt.queue(t, "fx").length || h.empty.fire()
			})
		})), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === lt.css(t, "display") && "none" === lt.css(t, "float") && (lt.support.inlineBlockNeedsLayout && "inline" !== _(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")), i.overflow && (d.overflow = "hidden", lt.support.shrinkWrapBlocks || p.always(function() {
			d.overflow = i.overflow[0], d.overflowX = i.overflow[1], d.overflowY = i.overflow[2]
		}));
		for (r in e) if (s = e[r], ti.exec(s)) {
			if (delete e[r], l = l || "toggle" === s, s === (m ? "hide" : "show")) continue;
			g.push(r)
		}
		if (o = g.length) {
			a = lt._data(t, "fxshow") || lt._data(t, "fxshow", {}), "hidden" in a && (m = a.hidden), l && (a.hidden = !m), m ? lt(t).show() : p.done(function() {
				lt(t).hide()
			}), p.done(function() {
				var e;
				lt._removeData(t, "fxshow");
				for (e in f) lt.style(t, e, f[e])
			});
			for (r = 0; o > r; r++) n = g[r], c = p.createTween(n, m ? a[n] : 0), f[n] = a[n] || lt.style(t, n), n in a || (a[n] = c.start, m && (c.end = c.start, c.start = "width" === n || "height" === n ? 1 : 0))
		}
	}
	function F(t, e, i, n, r) {
		return new F.prototype.init(t, e, i, n, r)
	}
	function X(t, e) {
		var i, n = {
			height: t
		},
			r = 0;
		for (e = e ? 1 : 0; 4 > r; r += 2 - e) i = Ae[r], n["margin" + i] = n["padding" + i] = t;
		return e && (n.opacity = n.width = t), n
	}
	function $(t) {
		return lt.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
	}
	var Y, G, U = typeof e,
		q = t.document,
		V = t.location,
		Z = t.jQuery,
		K = t.$,
		Q = {},
		J = [],
		tt = "1.9.1",
		et = J.concat,
		it = J.push,
		nt = J.slice,
		rt = J.indexOf,
		ot = Q.toString,
		st = Q.hasOwnProperty,
		at = tt.trim,
		lt = function(t, e) {
			return new lt.fn.init(t, e, G)
		},
		ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		ht = /\S+/g,
		ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		pt = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		ft = /^[\],:{}\s]*$/,
		gt = /(?:^|:|,)(?:\s*\[)+/g,
		mt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		vt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
		yt = /^-ms-/,
		bt = /-([\da-z])/gi,
		xt = function(t, e) {
			return e.toUpperCase()
		},
		wt = function(t) {
			(q.addEventListener || "load" === t.type || "complete" === q.readyState) && (kt(), lt.ready())
		},
		kt = function() {
			q.addEventListener ? (q.removeEventListener("DOMContentLoaded", wt, !1), t.removeEventListener("load", wt, !1)) : (q.detachEvent("onreadystatechange", wt), t.detachEvent("onload", wt))
		};
	lt.fn = lt.prototype = {
		jquery: tt,
		constructor: lt,
		init: function(t, i, n) {
			var r, o;
			if (!t) return this;
			if ("string" == typeof t) {
				if (r = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : pt.exec(t), !r || !r[1] && i) return !i || i.jquery ? (i || n).find(t) : this.constructor(i).find(t);
				if (r[1]) {
					if (i = i instanceof lt ? i[0] : i, lt.merge(this, lt.parseHTML(r[1], i && i.nodeType ? i.ownerDocument || i : q, !0)), dt.test(r[1]) && lt.isPlainObject(i)) for (r in i) lt.isFunction(this[r]) ? this[r](i[r]) : this.attr(r, i[r]);
					return this
				}
				if (o = q.getElementById(r[2]), o && o.parentNode) {
					if (o.id !== r[2]) return n.find(t);
					this.length = 1, this[0] = o
				}
				return this.context = q, this.selector = t, this
			}
			return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : lt.isFunction(t) ? n.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), lt.makeArray(t, this))
		},
		selector: "",
		length: 0,
		size: function() {
			return this.length
		},
		toArray: function() {
			return nt.call(this)
		},
		get: function(t) {
			return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
		},
		pushStack: function(t) {
			var e = lt.merge(this.constructor(), t);
			return e.prevObject = this, e.context = this.context, e
		},
		each: function(t, e) {
			return lt.each(this, t, e)
		},
		ready: function(t) {
			return lt.ready.promise().done(t), this
		},
		slice: function() {
			return this.pushStack(nt.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(t) {
			var e = this.length,
				i = +t + (0 > t ? e : 0);
			return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
		},
		map: function(t) {
			return this.pushStack(lt.map(this, function(e, i) {
				return t.call(e, i, e)
			}))
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: it,
		sort: [].sort,
		splice: [].splice
	}, lt.fn.init.prototype = lt.fn, lt.extend = lt.fn.extend = function() {
		var t, i, n, r, o, s, a = arguments[0] || {},
			l = 1,
			c = arguments.length,
			h = !1;
		for ("boolean" == typeof a && (h = a, a = arguments[1] || {}, l = 2), "object" == typeof a || lt.isFunction(a) || (a = {}), c === l && (a = this, --l); c > l; l++) if (null != (o = arguments[l])) for (r in o) t = a[r], n = o[r], a !== n && (h && n && (lt.isPlainObject(n) || (i = lt.isArray(n))) ? (i ? (i = !1, s = t && lt.isArray(t) ? t : []) : s = t && lt.isPlainObject(t) ? t : {}, a[r] = lt.extend(h, s, n)) : n !== e && (a[r] = n));
		return a
	}, lt.extend({
		noConflict: function(e) {
			return t.$ === lt && (t.$ = K), e && t.jQuery === lt && (t.jQuery = Z), lt
		},
		isReady: !1,
		readyWait: 1,
		holdReady: function(t) {
			t ? lt.readyWait++ : lt.ready(!0)
		},
		ready: function(t) {
			if (t === !0 ? !--lt.readyWait : !lt.isReady) {
				if (!q.body) return setTimeout(lt.ready);
				lt.isReady = !0, t !== !0 && --lt.readyWait > 0 || (Y.resolveWith(q, [lt]), lt.fn.trigger && lt(q).trigger("ready").off("ready"))
			}
		},
		isFunction: function(t) {
			return "function" === lt.type(t)
		},
		isArray: Array.isArray ||
		function(t) {
			return "array" === lt.type(t)
		},
		isWindow: function(t) {
			return null != t && t == t.window
		},
		isNumeric: function(t) {
			return !isNaN(parseFloat(t)) && isFinite(t)
		},
		type: function(t) {
			return null == t ? String(t) : "object" == typeof t || "function" == typeof t ? Q[ot.call(t)] || "object" : typeof t
		},
		isPlainObject: function(t) {
			if (!t || "object" !== lt.type(t) || t.nodeType || lt.isWindow(t)) return !1;
			try {
				if (t.constructor && !st.call(t, "constructor") && !st.call(t.constructor.prototype, "isPrototypeOf")) return !1
			} catch (i) {
				return !1
			}
			var n;
			for (n in t);
			return n === e || st.call(t, n)
		},
		isEmptyObject: function(t) {
			var e;
			for (e in t) return !1;
			return !0
		},
		error: function(t) {
			throw new Error(t)
		},
		parseHTML: function(t, e, i) {
			if (!t || "string" != typeof t) return null;
			"boolean" == typeof e && (i = e, e = !1), e = e || q;
			var n = dt.exec(t),
				r = !i && [];
			return n ? [e.createElement(n[1])] : (n = lt.buildFragment([t], e, r), r && lt(r).remove(), lt.merge([], n.childNodes))
		},
		parseJSON: function(e) {
			return t.JSON && t.JSON.parse ? t.JSON.parse(e) : null === e ? e : "string" == typeof e && (e = lt.trim(e), e && ft.test(e.replace(mt, "@").replace(vt, "]").replace(gt, ""))) ? new Function("return " + e)() : void lt.error("Invalid JSON: " + e)
		},
		parseXML: function(i) {
			var n, r;
			if (!i || "string" != typeof i) return null;
			try {
				t.DOMParser ? (r = new DOMParser, n = r.parseFromString(i, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(i))
			} catch (o) {
				n = e
			}
			return n && n.documentElement && !n.getElementsByTagName("parsererror").length || lt.error("Invalid XML: " + i), n
		},
		noop: function() {},
		globalEval: function(e) {
			e && lt.trim(e) && (t.execScript ||
			function(e) {
				t.eval.call(t, e)
			})(e)
		},
		camelCase: function(t) {
			return t.replace(yt, "ms-").replace(bt, xt)
		},
		nodeName: function(t, e) {
			return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
		},
		each: function(t, e, n) {
			var r, o = 0,
				s = t.length,
				a = i(t);
			if (n) {
				if (a) for (; s > o && (r = e.apply(t[o], n), r !== !1); o++);
				else for (o in t) if (r = e.apply(t[o], n), r === !1) break
			} else if (a) for (; s > o && (r = e.call(t[o], o, t[o]), r !== !1); o++);
			else for (o in t) if (r = e.call(t[o], o, t[o]), r === !1) break;
			return t
		},
		trim: at && !at.call("\ufeff ") ?
		function(t) {
			return null == t ? "" : at.call(t)
		} : function(t) {
			return null == t ? "" : (t + "").replace(ut, "")
		},
		makeArray: function(t, e) {
			var n = e || [];
			return null != t && (i(Object(t)) ? lt.merge(n, "string" == typeof t ? [t] : t) : it.call(n, t)), n
		},
		inArray: function(t, e, i) {
			var n;
			if (e) {
				if (rt) return rt.call(e, t, i);
				for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++) if (i in e && e[i] === t) return i
			}
			return -1
		},
		merge: function(t, i) {
			var n = i.length,
				r = t.length,
				o = 0;
			if ("number" == typeof n) for (; n > o; o++) t[r++] = i[o];
			else for (; i[o] !== e;) t[r++] = i[o++];
			return t.length = r, t
		},
		grep: function(t, e, i) {
			var n, r = [],
				o = 0,
				s = t.length;
			for (i = !! i; s > o; o++) n = !! e(t[o], o), i !== n && r.push(t[o]);
			return r
		},
		map: function(t, e, n) {
			var r, o = 0,
				s = t.length,
				a = i(t),
				l = [];
			if (a) for (; s > o; o++) r = e(t[o], o, n), null != r && (l[l.length] = r);
			else for (o in t) r = e(t[o], o, n), null != r && (l[l.length] = r);
			return et.apply([], l)
		},
		guid: 1,
		proxy: function(t, i) {
			var n, r, o;
			return "string" == typeof i && (o = t[i], i = t, t = o), lt.isFunction(t) ? (n = nt.call(arguments, 2), r = function() {
				return t.apply(i || this, n.concat(nt.call(arguments)))
			}, r.guid = t.guid = t.guid || lt.guid++, r) : e
		},
		access: function(t, i, n, r, o, s, a) {
			var l = 0,
				c = t.length,
				h = null == n;
			if ("object" === lt.type(n)) {
				o = !0;
				for (l in n) lt.access(t, i, l, n[l], !0, s, a)
			} else if (r !== e && (o = !0, lt.isFunction(r) || (a = !0), h && (a ? (i.call(t, r), i = null) : (h = i, i = function(t, e, i) {
				return h.call(lt(t), i)
			})), i)) for (; c > l; l++) i(t[l], n, a ? r : r.call(t[l], l, i(t[l], n)));
			return o ? t : h ? i.call(t) : c ? i(t[0], n) : s
		},
		now: function() {
			return (new Date).getTime()
		}
	}), lt.ready.promise = function(e) {
		if (!Y) if (Y = lt.Deferred(), "complete" === q.readyState) setTimeout(lt.ready);
		else if (q.addEventListener) q.addEventListener("DOMContentLoaded", wt, !1), t.addEventListener("load", wt, !1);
		else {
			q.attachEvent("onreadystatechange", wt), t.attachEvent("onload", wt);
			var i = !1;
			try {
				i = null == t.frameElement && q.documentElement
			} catch (n) {}
			i && i.doScroll && !
			function r() {
				if (!lt.isReady) {
					try {
						i.doScroll("left")
					} catch (t) {
						return setTimeout(r, 50)
					}
					kt(), lt.ready()
				}
			}()
		}
		return Y.promise(e)
	}, lt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
		Q["[object " + e + "]"] = e.toLowerCase()
	}), G = lt(q);
	var At = {};
	lt.Callbacks = function(t) {
		t = "string" == typeof t ? At[t] || n(t) : lt.extend({}, t);
		var i, r, o, s, a, l, c = [],
			h = !t.once && [],
			u = function(e) {
				for (r = t.memory && e, o = !0, a = l || 0, l = 0, s = c.length, i = !0; c && s > a; a++) if (c[a].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
					r = !1;
					break
				}
				i = !1, c && (h ? h.length && u(h.shift()) : r ? c = [] : p.disable())
			},
			p = {
				add: function() {
					if (c) {
						var e = c.length;
						!
						function n(e) {
							lt.each(e, function(e, i) {
								var r = lt.type(i);
								"function" === r ? t.unique && p.has(i) || c.push(i) : i && i.length && "string" !== r && n(i)
							})
						}(arguments), i ? s = c.length : r && (l = e, u(r))
					}
					return this
				},
				remove: function() {
					return c && lt.each(arguments, function(t, e) {
						for (var n;
						(n = lt.inArray(e, c, n)) > -1;) c.splice(n, 1), i && (s >= n && s--, a >= n && a--)
					}), this
				},
				has: function(t) {
					return t ? lt.inArray(t, c) > -1 : !(!c || !c.length)
				},
				empty: function() {
					return c = [], this
				},
				disable: function() {
					return c = h = r = e, this
				},
				disabled: function() {
					return !c
				},
				lock: function() {
					return h = e, r || p.disable(), this
				},
				locked: function() {
					return !h
				},
				fireWith: function(t, e) {
					return e = e || [], e = [t, e.slice ? e.slice() : e], !c || o && !h || (i ? h.push(e) : u(e)), this
				},
				fire: function() {
					return p.fireWith(this, arguments), this
				},
				fired: function() {
					return !!o
				}
			};
		return p
	}, lt.extend({
		Deferred: function(t) {
			var e = [
				["resolve", "done", lt.Callbacks("once memory"), "resolved"],
				["reject", "fail", lt.Callbacks("once memory"), "rejected"],
				["notify", "progress", lt.Callbacks("memory")]
			],
				i = "pending",
				n = {
					state: function() {
						return i
					},
					always: function() {
						return r.done(arguments).fail(arguments), this
					},
					then: function() {
						var t = arguments;
						return lt.Deferred(function(i) {
							lt.each(e, function(e, o) {
								var s = o[0],
									a = lt.isFunction(t[e]) && t[e];
								r[o[1]](function() {
									var t = a && a.apply(this, arguments);
									t && lt.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s + "With"](this === n ? i.promise() : this, a ? [t] : arguments)
								})
							}), t = null
						}).promise()
					},
					promise: function(t) {
						return null != t ? lt.extend(t, n) : n
					}
				},
				r = {};
			return n.pipe = n.then, lt.each(e, function(t, o) {
				var s = o[2],
					a = o[3];
				n[o[1]] = s.add, a && s.add(function() {
					i = a
				}, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
					return r[o[0] + "With"](this === r ? n : this, arguments), this
				}, r[o[0] + "With"] = s.fireWith
			}), n.promise(r), t && t.call(r, r), r
		},
		when: function(t) {
			var e, i, n, r = 0,
				o = nt.call(arguments),
				s = o.length,
				a = 1 !== s || t && lt.isFunction(t.promise) ? s : 0,
				l = 1 === a ? t : lt.Deferred(),
				c = function(t, i, n) {
					return function(r) {
						i[t] = this, n[t] = arguments.length > 1 ? nt.call(arguments) : r, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
					}
				};
			if (s > 1) for (e = new Array(s), i = new Array(s), n = new Array(s); s > r; r++) o[r] && lt.isFunction(o[r].promise) ? o[r].promise().done(c(r, n, o)).fail(l.reject).progress(c(r, i, e)) : --a;
			return a || l.resolveWith(n, o), l.promise()
		}
	}), lt.support = function() {
		var e, i, n, r, o, s, a, l, c, h, u = q.createElement("div");
		if (u.setAttribute("className", "t"), u.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = u.getElementsByTagName("*"), n = u.getElementsByTagName("a")[0], !i || !n || !i.length) return {};
		o = q.createElement("select"), a = o.appendChild(q.createElement("option")), r = u.getElementsByTagName("input")[0], n.style.cssText = "top:1px;float:left;opacity:.5", e = {
			getSetAttribute: "t" !== u.className,
			leadingWhitespace: 3 === u.firstChild.nodeType,
			tbody: !u.getElementsByTagName("tbody").length,
			htmlSerialize: !! u.getElementsByTagName("link").length,
			style: /top/.test(n.getAttribute("style")),
			hrefNormalized: "/a" === n.getAttribute("href"),
			opacity: /^0.5/.test(n.style.opacity),
			cssFloat: !! n.style.cssFloat,
			checkOn: !! r.value,
			optSelected: a.selected,
			enctype: !! q.createElement("form").enctype,
			html5Clone: "<:nav></:nav>" !== q.createElement("nav").cloneNode(!0).outerHTML,
			boxModel: "CSS1Compat" === q.compatMode,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0,
			boxSizingReliable: !0,
			pixelPosition: !1
		}, r.checked = !0, e.noCloneChecked = r.cloneNode(!0).checked, o.disabled = !0, e.optDisabled = !a.disabled;
		try {
			delete u.test
		} catch (p) {
			e.deleteExpando = !1
		}
		r = q.createElement("input"), r.setAttribute("value", ""), e.input = "" === r.getAttribute("value"), r.value = "t", r.setAttribute("type", "radio"), e.radioValue = "t" === r.value, r.setAttribute("checked", "t"), r.setAttribute("name", "t"), s = q.createDocumentFragment(), s.appendChild(r), e.appendChecked = r.checked, e.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, u.attachEvent && (u.attachEvent("onclick", function() {
			e.noCloneEvent = !1
		}), u.cloneNode(!0).click());
		for (h in {
			submit: !0,
			change: !0,
			focusin: !0
		}) u.setAttribute(l = "on" + h, "t"), e[h + "Bubbles"] = l in t || u.attributes[l].expando === !1;
		return u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === u.style.backgroundClip, lt(function() {
			var i, n, r, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
				s = q.getElementsByTagName("body")[0];
			s && (i = q.createElement("div"), i.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(i).appendChild(u), u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = u.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", e.reliableHiddenOffsets = c && 0 === r[0].offsetHeight, u.innerHTML = "", u.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", e.boxSizing = 4 === u.offsetWidth, e.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(u, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(u, null) || {
				width: "4px"
			}).width, n = u.appendChild(q.createElement("div")), n.style.cssText = u.style.cssText = o, n.style.marginRight = n.style.width = "0", u.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(n, null) || {}).marginRight)), typeof u.style.zoom !== U && (u.innerHTML = "", u.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === u.offsetWidth, u.style.display = "block", u.innerHTML = "<div></div>", u.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== u.offsetWidth, e.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(i), i = u = r = n = null)
		}), i = o = s = a = n = r = null, e
	}();
	var St = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		Ct = /([A-Z])/g;
	lt.extend({
		cache: {},
		expando: "jQuery" + (tt + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(t) {
			return t = t.nodeType ? lt.cache[t[lt.expando]] : t[lt.expando], !! t && !a(t)
		},
		data: function(t, e, i) {
			return r(t, e, i)
		},
		removeData: function(t, e) {
			return o(t, e)
		},
		_data: function(t, e, i) {
			return r(t, e, i, !0)
		},
		_removeData: function(t, e) {
			return o(t, e, !0)
		},
		acceptData: function(t) {
			if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return !1;
			var e = t.nodeName && lt.noData[t.nodeName.toLowerCase()];
			return !e || e !== !0 && t.getAttribute("classid") === e
		}
	}), lt.fn.extend({
		data: function(t, i) {
			var n, r, o = this[0],
				a = 0,
				l = null;
			if (t === e) {
				if (this.length && (l = lt.data(o), 1 === o.nodeType && !lt._data(o, "parsedAttrs"))) {
					for (n = o.attributes; a < n.length; a++) r = n[a].name, r.indexOf("data-") || (r = lt.camelCase(r.slice(5)), s(o, r, l[r]));
					lt._data(o, "parsedAttrs", !0)
				}
				return l
			}
			return "object" == typeof t ? this.each(function() {
				lt.data(this, t)
			}) : lt.access(this, function(i) {
				return i === e ? o ? s(o, t, lt.data(o, t)) : null : void this.each(function() {
					lt.data(this, t, i)
				})
			}, null, i, arguments.length > 1, null, !0)
		},
		removeData: function(t) {
			return this.each(function() {
				lt.removeData(this, t)
			})
		}
	}), lt.extend({
		queue: function(t, e, i) {
			var n;
			return t ? (e = (e || "fx") + "queue", n = lt._data(t, e), i && (!n || lt.isArray(i) ? n = lt._data(t, e, lt.makeArray(i)) : n.push(i)), n || []) : void 0
		},
		dequeue: function(t, e) {
			e = e || "fx";
			var i = lt.queue(t, e),
				n = i.length,
				r = i.shift(),
				o = lt._queueHooks(t, e),
				s = function() {
					lt.dequeue(t, e)
				};
			"inprogress" === r && (r = i.shift(), n--), o.cur = r, r && ("fx" === e && i.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !n && o && o.empty.fire()
		},
		_queueHooks: function(t, e) {
			var i = e + "queueHooks";
			return lt._data(t, i) || lt._data(t, i, {
				empty: lt.Callbacks("once memory").add(function() {
					lt._removeData(t, e + "queue"), lt._removeData(t, i)
				})
			})
		}
	}), lt.fn.extend({
		queue: function(t, i) {
			var n = 2;
			return "string" != typeof t && (i = t, t = "fx", n--), arguments.length < n ? lt.queue(this[0], t) : i === e ? this : this.each(function() {
				var e = lt.queue(this, t, i);
				lt._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && lt.dequeue(this, t)
			})
		},
		dequeue: function(t) {
			return this.each(function() {
				lt.dequeue(this, t)
			})
		},
		delay: function(t, e) {
			return t = lt.fx ? lt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
				var n = setTimeout(e, t);
				i.stop = function() {
					clearTimeout(n)
				}
			})
		},
		clearQueue: function(t) {
			return this.queue(t || "fx", [])
		},
		promise: function(t, i) {
			var n, r = 1,
				o = lt.Deferred(),
				s = this,
				a = this.length,
				l = function() {
					--r || o.resolveWith(s, [s])
				};
			for ("string" != typeof t && (i = t, t = e), t = t || "fx"; a--;) n = lt._data(s[a], t + "queueHooks"), n && n.empty && (r++, n.empty.add(l));
			return l(), o.promise(i)
		}
	});
	var Tt, _t, Mt = /[\t\r\n]/g,
		Lt = /\r/g,
		Pt = /^(?:input|select|textarea|button|object)$/i,
		Et = /^(?:a|area)$/i,
		Dt = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
		It = /^(?:checked|selected)$/i,
		Nt = lt.support.getSetAttribute,
		Ot = lt.support.input;
	lt.fn.extend({
		attr: function(t, e) {
			return lt.access(this, lt.attr, t, e, arguments.length > 1)
		},
		removeAttr: function(t) {
			return this.each(function() {
				lt.removeAttr(this, t)
			})
		},
		prop: function(t, e) {
			return lt.access(this, lt.prop, t, e, arguments.length > 1)
		},
		removeProp: function(t) {
			return t = lt.propFix[t] || t, this.each(function() {
				try {
					this[t] = e, delete this[t]
				} catch (i) {}
			})
		},
		addClass: function(t) {
			var e, i, n, r, o, s = 0,
				a = this.length,
				l = "string" == typeof t && t;
			if (lt.isFunction(t)) return this.each(function(e) {
				lt(this).addClass(t.call(this, e, this.className))
			});
			if (l) for (e = (t || "").match(ht) || []; a > s; s++) if (i = this[s], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Mt, " ") : " ")) {
				for (o = 0; r = e[o++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
				i.className = lt.trim(n)
			}
			return this
		},
		removeClass: function(t) {
			var e, i, n, r, o, s = 0,
				a = this.length,
				l = 0 === arguments.length || "string" == typeof t && t;
			if (lt.isFunction(t)) return this.each(function(e) {
				lt(this).removeClass(t.call(this, e, this.className))
			});
			if (l) for (e = (t || "").match(ht) || []; a > s; s++) if (i = this[s], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Mt, " ") : "")) {
				for (o = 0; r = e[o++];) for (; n.indexOf(" " + r + " ") >= 0;) n = n.replace(" " + r + " ", " ");
				i.className = t ? lt.trim(n) : ""
			}
			return this
		},
		toggleClass: function(t, e) {
			var i = typeof t,
				n = "boolean" == typeof e;
			return lt.isFunction(t) ? this.each(function(i) {
				lt(this).toggleClass(t.call(this, i, this.className, e), e)
			}) : this.each(function() {
				if ("string" === i) for (var r, o = 0, s = lt(this), a = e, l = t.match(ht) || []; r = l[o++];) a = n ? a : !s.hasClass(r), s[a ? "addClass" : "removeClass"](r);
				else i !== U && "boolean" !== i || (this.className && lt._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : lt._data(this, "__className__") || "")
			})
		},
		hasClass: function(t) {
			for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++) if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Mt, " ").indexOf(e) >= 0) return !0;
			return !1
		},
		val: function(t) {
			var i, n, r, o = this[0]; {
				if (arguments.length) return r = lt.isFunction(t), this.each(function(i) {
					var o, s = lt(this);
					1 === this.nodeType && (o = r ? t.call(this, i, s.val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : lt.isArray(o) && (o = lt.map(o, function(t) {
						return null == t ? "" : t + ""
					})), n = lt.valHooks[this.type] || lt.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== e || (this.value = o))
				});
				if (o) return n = lt.valHooks[o.type] || lt.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (i = n.get(o, "value")) !== e ? i : (i = o.value, "string" == typeof i ? i.replace(Lt, "") : null == i ? "" : i)
			}
		}
	}), lt.extend({
		valHooks: {
			option: {
				get: function(t) {
					var e = t.attributes.value;
					return !e || e.specified ? t.value : t.text
				}
			},
			select: {
				get: function(t) {
					for (var e, i, n = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : n.length, l = 0 > r ? a : o ? r : 0; a > l; l++) if (i = n[l], (i.selected || l === r) && (lt.support.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !lt.nodeName(i.parentNode, "optgroup"))) {
						if (e = lt(i).val(), o) return e;
						s.push(e)
					}
					return s
				},
				set: function(t, e) {
					var i = lt.makeArray(e);
					return lt(t).find("option").each(function() {
						this.selected = lt.inArray(lt(this).val(), i) >= 0
					}), i.length || (t.selectedIndex = -1), i
				}
			}
		},
		attr: function(t, i, n) {
			var r, o, s, a = t.nodeType;
			if (t && 3 !== a && 8 !== a && 2 !== a) return typeof t.getAttribute === U ? lt.prop(t, i, n) : (o = 1 !== a || !lt.isXMLDoc(t), o && (i = i.toLowerCase(), r = lt.attrHooks[i] || (Dt.test(i) ? _t : Tt)), n === e ? r && o && "get" in r && null !== (s = r.get(t, i)) ? s : (typeof t.getAttribute !== U && (s = t.getAttribute(i)), null == s ? e : s) : null !== n ? r && o && "set" in r && (s = r.set(t, n, i)) !== e ? s : (t.setAttribute(i, n + ""), n) : void lt.removeAttr(t, i))
		},
		removeAttr: function(t, e) {
			var i, n, r = 0,
				o = e && e.match(ht);
			if (o && 1 === t.nodeType) for (; i = o[r++];) n = lt.propFix[i] || i, Dt.test(i) ? !Nt && It.test(i) ? t[lt.camelCase("default-" + i)] = t[n] = !1 : t[n] = !1 : lt.attr(t, i, ""), t.removeAttribute(Nt ? i : n)
		},
		attrHooks: {
			type: {
				set: function(t, e) {
					if (!lt.support.radioValue && "radio" === e && lt.nodeName(t, "input")) {
						var i = t.value;
						return t.setAttribute("type", e), i && (t.value = i), e
					}
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function(t, i, n) {
			var r, o, s, a = t.nodeType;
			if (t && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !lt.isXMLDoc(t), s && (i = lt.propFix[i] || i, o = lt.propHooks[i]), n !== e ? o && "set" in o && (r = o.set(t, n, i)) !== e ? r : t[i] = n : o && "get" in o && null !== (r = o.get(t, i)) ? r : t[i]
		},
		propHooks: {
			tabIndex: {
				get: function(t) {
					var i = t.getAttributeNode("tabindex");
					return i && i.specified ? parseInt(i.value, 10) : Pt.test(t.nodeName) || Et.test(t.nodeName) && t.href ? 0 : e
				}
			}
		}
	}), _t = {
		get: function(t, i) {
			var n = lt.prop(t, i),
				r = "boolean" == typeof n && t.getAttribute(i),
				o = "boolean" == typeof n ? Ot && Nt ? null != r : It.test(i) ? t[lt.camelCase("default-" + i)] : !! r : t.getAttributeNode(i);
			return o && o.value !== !1 ? i.toLowerCase() : e
		},
		set: function(t, e, i) {
			return e === !1 ? lt.removeAttr(t, i) : Ot && Nt || !It.test(i) ? t.setAttribute(!Nt && lt.propFix[i] || i, i) : t[lt.camelCase("default-" + i)] = t[i] = !0, i
		}
	}, Ot && Nt || (lt.attrHooks.value = {
		get: function(t, i) {
			var n = t.getAttributeNode(i);
			return lt.nodeName(t, "input") ? t.defaultValue : n && n.specified ? n.value : e
		},
		set: function(t, e, i) {
			return lt.nodeName(t, "input") ? void(t.defaultValue = e) : Tt && Tt.set(t, e, i)
		}
	}), Nt || (Tt = lt.valHooks.button = {
		get: function(t, i) {
			var n = t.getAttributeNode(i);
			return n && ("id" === i || "name" === i || "coords" === i ? "" !== n.value : n.specified) ? n.value : e
		},
		set: function(t, i, n) {
			var r = t.getAttributeNode(n);
			return r || t.setAttributeNode(r = t.ownerDocument.createAttribute(n)), r.value = i += "", "value" === n || i === t.getAttribute(n) ? i : e
		}
	}, lt.attrHooks.contenteditable = {
		get: Tt.get,
		set: function(t, e, i) {
			Tt.set(t, "" === e ? !1 : e, i)
		}
	}, lt.each(["width", "height"], function(t, e) {
		lt.attrHooks[e] = lt.extend(lt.attrHooks[e], {
			set: function(t, i) {
				return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
			}
		})
	})), lt.support.hrefNormalized || (lt.each(["href", "src", "width", "height"], function(t, i) {
		lt.attrHooks[i] = lt.extend(lt.attrHooks[i], {
			get: function(t) {
				var n = t.getAttribute(i, 2);
				return null == n ? e : n
			}
		})
	}), lt.each(["href", "src"], function(t, e) {
		lt.propHooks[e] = {
			get: function(t) {
				return t.getAttribute(e, 4)
			}
		}
	})), lt.support.style || (lt.attrHooks.style = {
		get: function(t) {
			return t.style.cssText || e
		},
		set: function(t, e) {
			return t.style.cssText = e + ""
		}
	}), lt.support.optSelected || (lt.propHooks.selected = lt.extend(lt.propHooks.selected, {
		get: function(t) {
			var e = t.parentNode;
			return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
		}
	})), lt.support.enctype || (lt.propFix.enctype = "encoding"), lt.support.checkOn || lt.each(["radio", "checkbox"], function() {
		lt.valHooks[this] = {
			get: function(t) {
				return null === t.getAttribute("value") ? "on" : t.value
			}
		}
	}), lt.each(["radio", "checkbox"], function() {
		lt.valHooks[this] = lt.extend(lt.valHooks[this], {
			set: function(t, e) {
				return lt.isArray(e) ? t.checked = lt.inArray(lt(t).val(), e) >= 0 : void 0
			}
		})
	});
	var Bt = /^(?:input|select|textarea)$/i,
		Rt = /^key/,
		zt = /^(?:mouse|contextmenu)|click/,
		jt = /^(?:focusinfocus|focusoutblur)$/,
		Ht = /^([^.]*)(?:\.(.+)|)$/;
	lt.event = {
		global: {},
		add: function(t, i, n, r, o) {
			var s, a, l, c, h, u, p, d, f, g, m, v = lt._data(t);
			if (v) {
				for (n.handler && (c = n, n = c.handler, o = c.selector), n.guid || (n.guid = lt.guid++), (a = v.events) || (a = v.events = {}), (u = v.handle) || (u = v.handle = function(t) {
					return typeof lt === U || t && lt.event.triggered === t.type ? e : lt.event.dispatch.apply(u.elem, arguments)
				}, u.elem = t), i = (i || "").match(ht) || [""], l = i.length; l--;) s = Ht.exec(i[l]) || [], f = m = s[1], g = (s[2] || "").split(".").sort(), h = lt.event.special[f] || {}, f = (o ? h.delegateType : h.bindType) || f, h = lt.event.special[f] || {}, p = lt.extend({
					type: f,
					origType: m,
					data: r,
					handler: n,
					guid: n.guid,
					selector: o,
					needsContext: o && lt.expr.match.needsContext.test(o),
					namespace: g.join(".")
				}, c), (d = a[f]) || (d = a[f] = [], d.delegateCount = 0, h.setup && h.setup.call(t, r, g, u) !== !1 || (t.addEventListener ? t.addEventListener(f, u, !1) : t.attachEvent && t.attachEvent("on" + f, u))), h.add && (h.add.call(t, p), p.handler.guid || (p.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), lt.event.global[f] = !0;
				t = null
			}
		},
		remove: function(t, e, i, n, r) {
			var o, s, a, l, c, h, u, p, d, f, g, m = lt.hasData(t) && lt._data(t);
			if (m && (h = m.events)) {
				for (e = (e || "").match(ht) || [""], c = e.length; c--;) if (a = Ht.exec(e[c]) || [], d = g = a[1], f = (a[2] || "").split(".").sort(), d) {
					for (u = lt.event.special[d] || {}, d = (n ? u.delegateType : u.bindType) || d, p = h[d] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = p.length; o--;) s = p[o], !r && g !== s.origType || i && i.guid !== s.guid || a && !a.test(s.namespace) || n && n !== s.selector && ("**" !== n || !s.selector) || (p.splice(o, 1), s.selector && p.delegateCount--, u.remove && u.remove.call(t, s));
					l && !p.length && (u.teardown && u.teardown.call(t, f, m.handle) !== !1 || lt.removeEvent(t, d, m.handle), delete h[d])
				} else for (d in h) lt.event.remove(t, d + e[c], i, n, !0);
				lt.isEmptyObject(h) && (delete m.handle, lt._removeData(t, "events"))
			}
		},
		trigger: function(i, n, r, o) {
			var s, a, l, c, h, u, p, d = [r || q],
				f = st.call(i, "type") ? i.type : i,
				g = st.call(i, "namespace") ? i.namespace.split(".") : [];
			if (l = u = r = r || q, 3 !== r.nodeType && 8 !== r.nodeType && !jt.test(f + lt.event.triggered) && (f.indexOf(".") >= 0 && (g = f.split("."), f = g.shift(), g.sort()), a = f.indexOf(":") < 0 && "on" + f, i = i[lt.expando] ? i : new lt.Event(f, "object" == typeof i && i), i.isTrigger = !0, i.namespace = g.join("."), i.namespace_re = i.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, i.result = e, i.target || (i.target = r), n = null == n ? [i] : lt.makeArray(n, [i]), h = lt.event.special[f] || {}, o || !h.trigger || h.trigger.apply(r, n) !== !1)) {
				if (!o && !h.noBubble && !lt.isWindow(r)) {
					for (c = h.delegateType || f, jt.test(c + f) || (l = l.parentNode); l; l = l.parentNode) d.push(l), u = l;
					u === (r.ownerDocument || q) && d.push(u.defaultView || u.parentWindow || t)
				}
				for (p = 0;
				(l = d[p++]) && !i.isPropagationStopped();) i.type = p > 1 ? c : h.bindType || f, s = (lt._data(l, "events") || {})[i.type] && lt._data(l, "handle"), s && s.apply(l, n), s = a && l[a], s && lt.acceptData(l) && s.apply && s.apply(l, n) === !1 && i.preventDefault();
				if (i.type = f, !o && !i.isDefaultPrevented() && (!h._default || h._default.apply(r.ownerDocument, n) === !1) && ("click" !== f || !lt.nodeName(r, "a")) && lt.acceptData(r) && a && r[f] && !lt.isWindow(r)) {
					u = r[a], u && (r[a] = null), lt.event.triggered = f;
					try {
						r[f]()
					} catch (m) {}
					lt.event.triggered = e, u && (r[a] = u)
				}
				return i.result
			}
		},
		dispatch: function(t) {
			t = lt.event.fix(t);
			var i, n, r, o, s, a = [],
				l = nt.call(arguments),
				c = (lt._data(this, "events") || {})[t.type] || [],
				h = lt.event.special[t.type] || {};
			if (l[0] = t, t.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, t) !== !1) {
				for (a = lt.event.handlers.call(this, t, c), i = 0;
				(o = a[i++]) && !t.isPropagationStopped();) for (t.currentTarget = o.elem, s = 0;
				(r = o.handlers[s++]) && !t.isImmediatePropagationStopped();) t.namespace_re && !t.namespace_re.test(r.namespace) || (t.handleObj = r, t.data = r.data, n = ((lt.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l), n !== e && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
				return h.postDispatch && h.postDispatch.call(this, t), t.result
			}
		},
		handlers: function(t, i) {
			var n, r, o, s, a = [],
				l = i.delegateCount,
				c = t.target;
			if (l && c.nodeType && (!t.button || "click" !== t.type)) for (; c != this; c = c.parentNode || this) if (1 === c.nodeType && (c.disabled !== !0 || "click" !== t.type)) {
				for (o = [], s = 0; l > s; s++) r = i[s], n = r.selector + " ", o[n] === e && (o[n] = r.needsContext ? lt(n, this).index(c) >= 0 : lt.find(n, this, null, [c]).length), o[n] && o.push(r);
				o.length && a.push({
					elem: c,
					handlers: o
				})
			}
			return l < i.length && a.push({
				elem: this,
				handlers: i.slice(l)
			}), a
		},
		fix: function(t) {
			if (t[lt.expando]) return t;
			var e, i, n, r = t.type,
				o = t,
				s = this.fixHooks[r];
			for (s || (this.fixHooks[r] = s = zt.test(r) ? this.mouseHooks : Rt.test(r) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new lt.Event(o), e = n.length; e--;) i = n[e], t[i] = o[i];
			return t.target || (t.target = o.srcElement || q), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !! t.metaKey, s.filter ? s.filter(t, o) : t
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(t, e) {
				return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(t, i) {
				var n, r, o, s = i.button,
					a = i.fromElement;
				return null == t.pageX && null != i.clientX && (r = t.target.ownerDocument || q, o = r.documentElement, n = r.body, t.pageX = i.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = i.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? i.toElement : a), t.which || s === e || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			click: {
				trigger: function() {
					return lt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
				}
			},
			focus: {
				trigger: function() {
					if (this !== q.activeElement && this.focus) try {
						return this.focus(), !1
					} catch (t) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === q.activeElement && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			beforeunload: {
				postDispatch: function(t) {
					t.result !== e && (t.originalEvent.returnValue = t.result)
				}
			}
		},
		simulate: function(t, e, i, n) {
			var r = lt.extend(new lt.Event, i, {
				type: t,
				isSimulated: !0,
				originalEvent: {}
			});
			n ? lt.event.trigger(r, null, e) : lt.event.dispatch.call(e, r), r.isDefaultPrevented() && i.preventDefault()
		}
	}, lt.removeEvent = q.removeEventListener ?
	function(t, e, i) {
		t.removeEventListener && t.removeEventListener(e, i, !1)
	} : function(t, e, i) {
		var n = "on" + e;
		t.detachEvent && (typeof t[n] === U && (t[n] = null), t.detachEvent(n, i))
	}, lt.Event = function(t, e) {
		return this instanceof lt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? l : c) : this.type = t, e && lt.extend(this, e), this.timeStamp = t && t.timeStamp || lt.now(), void(this[lt.expando] = !0)) : new lt.Event(t, e)
	}, lt.Event.prototype = {
		isDefaultPrevented: c,
		isPropagationStopped: c,
		isImmediatePropagationStopped: c,
		preventDefault: function() {
			var t = this.originalEvent;
			this.isDefaultPrevented = l, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
		},
		stopPropagation: function() {
			var t = this.originalEvent;
			this.isPropagationStopped = l, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = l, this.stopPropagation()
		}
	}, lt.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(t, e) {
		lt.event.special[t] = {
			delegateType: e,
			bindType: e,
			handle: function(t) {
				var i, n = this,
					r = t.relatedTarget,
					o = t.handleObj;
				return r && (r === n || lt.contains(n, r)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
			}
		}
	}), lt.support.submitBubbles || (lt.event.special.submit = {
		setup: function() {
			return lt.nodeName(this, "form") ? !1 : void lt.event.add(this, "click._submit keypress._submit", function(t) {
				var i = t.target,
					n = lt.nodeName(i, "input") || lt.nodeName(i, "button") ? i.form : e;
				n && !lt._data(n, "submitBubbles") && (lt.event.add(n, "submit._submit", function(t) {
					t._submit_bubble = !0
				}), lt._data(n, "submitBubbles", !0))
			})
		},
		postDispatch: function(t) {
			t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && lt.event.simulate("submit", this.parentNode, t, !0))
		},
		teardown: function() {
			return lt.nodeName(this, "form") ? !1 : void lt.event.remove(this, "._submit")
		}
	}), lt.support.changeBubbles || (lt.event.special.change = {
		setup: function() {
			return Bt.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (lt.event.add(this, "propertychange._change", function(t) {
				"checked" === t.originalEvent.propertyName && (this._just_changed = !0)
			}), lt.event.add(this, "click._change", function(t) {
				this._just_changed && !t.isTrigger && (this._just_changed = !1), lt.event.simulate("change", this, t, !0)
			})), !1) : void lt.event.add(this, "beforeactivate._change", function(t) {
				var e = t.target;
				Bt.test(e.nodeName) && !lt._data(e, "changeBubbles") && (lt.event.add(e, "change._change", function(t) {
					!this.parentNode || t.isSimulated || t.isTrigger || lt.event.simulate("change", this.parentNode, t, !0)
				}), lt._data(e, "changeBubbles", !0))
			})
		},
		handle: function(t) {
			var e = t.target;
			return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
		},
		teardown: function() {
			return lt.event.remove(this, "._change"), !Bt.test(this.nodeName)
		}
	}), lt.support.focusinBubbles || lt.each({
		focus: "focusin",
		blur: "focusout"
	}, function(t, e) {
		var i = 0,
			n = function(t) {
				lt.event.simulate(e, t.target, lt.event.fix(t), !0)
			};
		lt.event.special[e] = {
			setup: function() {
				0 === i++ && q.addEventListener(t, n, !0)
			},
			teardown: function() {
				0 === --i && q.removeEventListener(t, n, !0)
			}
		}
	}), lt.fn.extend({
		on: function(t, i, n, r, o) {
			var s, a;
			if ("object" == typeof t) {
				"string" != typeof i && (n = n || i, i = e);
				for (s in t) this.on(s, i, n, t[s], o);
				return this
			}
			if (null == n && null == r ? (r = i, n = i = e) : null == r && ("string" == typeof i ? (r = n, n = e) : (r = n, n = i, i = e)), r === !1) r = c;
			else if (!r) return this;
			return 1 === o && (a = r, r = function(t) {
				return lt().off(t), a.apply(this, arguments)
			}, r.guid = a.guid || (a.guid = lt.guid++)), this.each(function() {
				lt.event.add(this, t, r, n, i)
			})
		},
		one: function(t, e, i, n) {
			return this.on(t, e, i, n, 1)
		},
		off: function(t, i, n) {
			var r, o;
			if (t && t.preventDefault && t.handleObj) return r = t.handleObj, lt(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof t) {
				for (o in t) this.off(o, i, t[o]);
				return this
			}
			return i !== !1 && "function" != typeof i || (n = i, i = e), n === !1 && (n = c), this.each(function() {
				lt.event.remove(this, t, n, i)
			})
		},
		bind: function(t, e, i) {
			return this.on(t, null, e, i)
		},
		unbind: function(t, e) {
			return this.off(t, null, e)
		},
		delegate: function(t, e, i, n) {
			return this.on(e, t, i, n)
		},
		undelegate: function(t, e, i) {
			return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
		},
		trigger: function(t, e) {
			return this.each(function() {
				lt.event.trigger(t, e, this)
			})
		},
		triggerHandler: function(t, e) {
			var i = this[0];
			return i ? lt.event.trigger(t, e, i, !0) : void 0
		}
	}), function(t, e) {
		function i(t) {
			return ft.test(t + "")
		}
		function n() {
			var t, e = [];
			return t = function(i, n) {
				return e.push(i += " ") > S.cacheLength && delete t[e.shift()], t[i] = n
			}
		}
		function r(t) {
			return t[j] = !0, t
		}
		function o(t) {
			var e = E.createElement("div");
			try {
				return t(e)
			} catch (i) {
				return !1
			} finally {
				e = null
			}
		}
		function s(t, e, i, n) {
			var r, o, s, a, l, c, h, d, f, g;
			if ((e ? e.ownerDocument || e : H) !== E && P(e), e = e || E, i = i || [], !t || "string" != typeof t) return i;
			if (1 !== (a = e.nodeType) && 9 !== a) return [];
			if (!I && !n) {
				if (r = gt.exec(t)) if (s = r[1]) {
					if (9 === a) {
						if (o = e.getElementById(s), !o || !o.parentNode) return i;
						if (o.id === s) return i.push(o), i
					} else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && R(e, o) && o.id === s) return i.push(o), i
				} else {
					if (r[2]) return K.apply(i, Q.call(e.getElementsByTagName(t), 0)), i;
					if ((s = r[3]) && W.getByClassName && e.getElementsByClassName) return K.apply(i, Q.call(e.getElementsByClassName(s), 0)), i
				}
				if (W.qsa && !N.test(t)) {
					if (h = !0, d = j, f = e, g = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
						for (c = u(t), (h = e.getAttribute("id")) ? d = h.replace(yt, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", l = c.length; l--;) c[l] = d + p(c[l]);
						f = dt.test(t) && e.parentNode || e, g = c.join(",")
					}
					if (g) try {
						return K.apply(i, Q.call(f.querySelectorAll(g), 0)), i
					} catch (m) {} finally {
						h || e.removeAttribute("id")
					}
				}
			}
			return x(t.replace(st, "$1"), e, i, n)
		}
		function a(t, e) {
			var i = e && t,
				n = i && (~e.sourceIndex || q) - (~t.sourceIndex || q);
			if (n) return n;
			if (i) for (; i = i.nextSibling;) if (i === e) return -1;
			return t ? 1 : -1
		}
		function l(t) {
			return function(e) {
				var i = e.nodeName.toLowerCase();
				return "input" === i && e.type === t
			}
		}
		function c(t) {
			return function(e) {
				var i = e.nodeName.toLowerCase();
				return ("input" === i || "button" === i) && e.type === t
			}
		}
		function h(t) {
			return r(function(e) {
				return e = +e, r(function(i, n) {
					for (var r, o = t([], i.length, e), s = o.length; s--;) i[r = o[s]] && (i[r] = !(n[r] = i[r]))
				})
			})
		}
		function u(t, e) {
			var i, n, r, o, a, l, c, h = Y[t + " "];
			if (h) return e ? 0 : h.slice(0);
			for (a = t, l = [], c = S.preFilter; a;) {
				i && !(n = at.exec(a)) || (n && (a = a.slice(n[0].length) || a), l.push(r = [])), i = !1, (n = ct.exec(a)) && (i = n.shift(), r.push({
					value: i,
					type: n[0].replace(st, " ")
				}), a = a.slice(i.length));
				for (o in S.filter)!(n = pt[o].exec(a)) || c[o] && !(n = c[o](n)) || (i = n.shift(), r.push({
					value: i,
					type: o,
					matches: n
				}), a = a.slice(i.length));
				if (!i) break
			}
			return e ? a.length : a ? s.error(t) : Y(t, l).slice(0)
		}
		function p(t) {
			for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
			return n
		}
		function d(t, e, i) {
			var n = e.dir,
				r = i && "parentNode" === n,
				o = X++;
			return e.first ?
			function(e, i, o) {
				for (; e = e[n];) if (1 === e.nodeType || r) return t(e, i, o)
			} : function(e, i, s) {
				var a, l, c, h = F + " " + o;
				if (s) {
					for (; e = e[n];) if ((1 === e.nodeType || r) && t(e, i, s)) return !0
				} else for (; e = e[n];) if (1 === e.nodeType || r) if (c = e[j] || (e[j] = {}), (l = c[n]) && l[0] === h) {
					if ((a = l[1]) === !0 || a === A) return a === !0
				} else if (l = c[n] = [h], l[1] = t(e, i, s) || A, l[1] === !0) return !0
			}
		}
		function f(t) {
			return t.length > 1 ?
			function(e, i, n) {
				for (var r = t.length; r--;) if (!t[r](e, i, n)) return !1;
				return !0
			} : t[0]
		}
		function g(t, e, i, n, r) {
			for (var o, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(o = t[a]) && (i && !i(o, n, r) || (s.push(o), c && e.push(a)));
			return s
		}
		function m(t, e, i, n, o, s) {
			return n && !n[j] && (n = m(n)), o && !o[j] && (o = m(o, s)), r(function(r, s, a, l) {
				var c, h, u, p = [],
					d = [],
					f = s.length,
					m = r || b(e || "*", a.nodeType ? [a] : a, []),
					v = !t || !r && e ? m : g(m, p, t, a, l),
					y = i ? o || (r ? t : f || n) ? [] : s : v;
				if (i && i(v, y, a, l), n) for (c = g(y, d), n(c, [], a, l), h = c.length; h--;)(u = c[h]) && (y[d[h]] = !(v[d[h]] = u));
				if (r) {
					if (o || t) {
						if (o) {
							for (c = [], h = y.length; h--;)(u = y[h]) && c.push(v[h] = u);
							o(null, y = [], c, l)
						}
						for (h = y.length; h--;)(u = y[h]) && (c = o ? J.call(r, u) : p[h]) > -1 && (r[c] = !(s[c] = u))
					}
				} else y = g(y === s ? y.splice(f, y.length) : y), o ? o(null, s, y, l) : K.apply(s, y)
			})
		}
		function v(t) {
			for (var e, i, n, r = t.length, o = S.relative[t[0].type], s = o || S.relative[" "], a = o ? 1 : 0, l = d(function(t) {
				return t === e
			}, s, !0), c = d(function(t) {
				return J.call(e, t) > -1
			}, s, !0), h = [function(t, i, n) {
				return !o && (n || i !== L) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n))
			}]; r > a; a++) if (i = S.relative[t[a].type]) h = [d(f(h), i)];
			else {
				if (i = S.filter[t[a].type].apply(null, t[a].matches), i[j]) {
					for (n = ++a; r > n && !S.relative[t[n].type]; n++);
					return m(a > 1 && f(h), a > 1 && p(t.slice(0, a - 1)).replace(st, "$1"), i, n > a && v(t.slice(a, n)), r > n && v(t = t.slice(n)), r > n && p(t))
				}
				h.push(i)
			}
			return f(h)
		}
		function y(t, e) {
			var i = 0,
				n = e.length > 0,
				o = t.length > 0,
				a = function(r, a, l, c, h) {
					var u, p, d, f = [],
						m = 0,
						v = "0",
						y = r && [],
						b = null != h,
						x = L,
						w = r || o && S.find.TAG("*", h && a.parentNode || a),
						k = F += null == x ? 1 : Math.random() || .1;
					for (b && (L = a !== E && a, A = i); null != (u = w[v]); v++) {
						if (o && u) {
							for (p = 0; d = t[p++];) if (d(u, a, l)) {
								c.push(u);
								break
							}
							b && (F = k, A = ++i)
						}
						n && ((u = !d && u) && m--, r && y.push(u))
					}
					if (m += v, n && v !== m) {
						for (p = 0; d = e[p++];) d(y, f, a, l);
						if (r) {
							if (m > 0) for (; v--;) y[v] || f[v] || (f[v] = Z.call(c));
							f = g(f)
						}
						K.apply(c, f), b && !r && f.length > 0 && m + e.length > 1 && s.uniqueSort(c)
					}
					return b && (F = k, L = x), y
				};
			return n ? r(a) : a
		}
		function b(t, e, i) {
			for (var n = 0, r = e.length; r > n; n++) s(t, e[n], i);
			return i
		}
		function x(t, e, i, n) {
			var r, o, s, a, l, c = u(t);
			if (!n && 1 === c.length) {
				if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && 9 === e.nodeType && !I && S.relative[o[1].type]) {
					if (e = S.find.ID(s.matches[0].replace(xt, wt), e)[0], !e) return i;
					t = t.slice(o.shift().value.length)
				}
				for (r = pt.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !S.relative[a = s.type]);) if ((l = S.find[a]) && (n = l(s.matches[0].replace(xt, wt), dt.test(o[0].type) && e.parentNode || e))) {
					if (o.splice(r, 1), t = n.length && p(o), !t) return K.apply(i, Q.call(n, 0)), i;
					break
				}
			}
			return _(t, c)(n, e, I, i, dt.test(t)), i
		}
		function w() {}
		var k, A, S, C, T, _, M, L, P, E, D, I, N, O, B, R, z, j = "sizzle" + -new Date,
			H = t.document,
			W = {},
			F = 0,
			X = 0,
			$ = n(),
			Y = n(),
			G = n(),
			U = typeof e,
			q = 1 << 31,
			V = [],
			Z = V.pop,
			K = V.push,
			Q = V.slice,
			J = V.indexOf ||
		function(t) {
			for (var e = 0, i = this.length; i > e; e++) if (this[e] === t) return e;
			return -1
		}, tt = "[\\x20\\t\\r\\n\\f]", et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", it = et.replace("w", "w#"), nt = "([*^$|!~]?=)", rt = "\\[" + tt + "*(" + et + ")" + tt + "*(?:" + nt + tt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + it + ")|)|)" + tt + "*\\]", ot = ":(" + et + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + rt.replace(3, 8) + ")*)|.*)\\)|)", st = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"), at = new RegExp("^" + tt + "*," + tt + "*"), ct = new RegExp("^" + tt + "*([\\x20\\t\\r\\n\\f>+~])" + tt + "*"), ht = new RegExp(ot), ut = new RegExp("^" + it + "$"), pt = {
			ID: new RegExp("^#(" + et + ")"),
			CLASS: new RegExp("^\\.(" + et + ")"),
			NAME: new RegExp("^\\[name=['\"]?(" + et + ")['\"]?\\]"),
			TAG: new RegExp("^(" + et.replace("w", "w*") + ")"),
			ATTR: new RegExp("^" + rt),
			PSEUDO: new RegExp("^" + ot),
			CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
			needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
		}, dt = /[\x20\t\r\n\f]*[+~]/, ft = /^[^{]+\{\s*\[native code/, gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, mt = /^(?:input|select|textarea|button)$/i, vt = /^h\d$/i, yt = /'|\\/g, bt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, xt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, wt = function(t, e) {
			var i = "0x" + e - 65536;
			return i !== i ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
		};
		try {
			Q.call(H.documentElement.childNodes, 0)[0].nodeType
		} catch (kt) {
			Q = function(t) {
				for (var e, i = []; e = this[t++];) i.push(e);
				return i
			}
		}
		T = s.isXML = function(t) {
			var e = t && (t.ownerDocument || t).documentElement;
			return e ? "HTML" !== e.nodeName : !1
		}, P = s.setDocument = function(t) {
			var n = t ? t.ownerDocument || t : H;
			return n !== E && 9 === n.nodeType && n.documentElement ? (E = n, D = n.documentElement, I = T(n), W.tagNameNoComments = o(function(t) {
				return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
			}), W.attributes = o(function(t) {
				t.innerHTML = "<select></select>";
				var e = typeof t.lastChild.getAttribute("multiple");
				return "boolean" !== e && "string" !== e
			}), W.getByClassName = o(function(t) {
				return t.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", t.getElementsByClassName && t.getElementsByClassName("e").length ? (t.lastChild.className = "e", 2 === t.getElementsByClassName("e").length) : !1
			}), W.getByName = o(function(t) {
				t.id = j + 0, t.innerHTML = "<a name='" + j + "'></a><div name='" + j + "'></div>", D.insertBefore(t, D.firstChild);
				var e = n.getElementsByName && n.getElementsByName(j).length === 2 + n.getElementsByName(j + 0).length;
				return W.getIdNotName = !n.getElementById(j), D.removeChild(t), e
			}), S.attrHandle = o(function(t) {
				return t.innerHTML = "<a href='#'></a>", t.firstChild && typeof t.firstChild.getAttribute !== U && "#" === t.firstChild.getAttribute("href")
			}) ? {} : {
				href: function(t) {
					return t.getAttribute("href", 2)
				},
				type: function(t) {
					return t.getAttribute("type")
				}
			}, W.getIdNotName ? (S.find.ID = function(t, e) {
				if (typeof e.getElementById !== U && !I) {
					var i = e.getElementById(t);
					return i && i.parentNode ? [i] : []
				}
			}, S.filter.ID = function(t) {
				var e = t.replace(xt, wt);
				return function(t) {
					return t.getAttribute("id") === e
				}
			}) : (S.find.ID = function(t, i) {
				if (typeof i.getElementById !== U && !I) {
					var n = i.getElementById(t);
					return n ? n.id === t || typeof n.getAttributeNode !== U && n.getAttributeNode("id").value === t ? [n] : e : []
				}
			}, S.filter.ID = function(t) {
				var e = t.replace(xt, wt);
				return function(t) {
					var i = typeof t.getAttributeNode !== U && t.getAttributeNode("id");
					return i && i.value === e
				}
			}), S.find.TAG = W.tagNameNoComments ?
			function(t, e) {
				return typeof e.getElementsByTagName !== U ? e.getElementsByTagName(t) : void 0
			} : function(t, e) {
				var i, n = [],
					r = 0,
					o = e.getElementsByTagName(t);
				if ("*" === t) {
					for (; i = o[r++];) 1 === i.nodeType && n.push(i);
					return n
				}
				return o
			}, S.find.NAME = W.getByName &&
			function(t, e) {
				return typeof e.getElementsByName !== U ? e.getElementsByName(name) : void 0
			}, S.find.CLASS = W.getByClassName &&
			function(t, e) {
				return typeof e.getElementsByClassName === U || I ? void 0 : e.getElementsByClassName(t)
			}, O = [], N = [":focus"], (W.qsa = i(n.querySelectorAll)) && (o(function(t) {
				t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || N.push("\\[" + tt + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), t.querySelectorAll(":checked").length || N.push(":checked")
			}), o(function(t) {
				t.innerHTML = "<input type='hidden' i=''/>", t.querySelectorAll("[i^='']").length && N.push("[*^$]=" + tt + "*(?:\"\"|'')"), t.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), N.push(",.*:")
			})), (W.matchesSelector = i(B = D.matchesSelector || D.mozMatchesSelector || D.webkitMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function(t) {
				W.disconnectedMatch = B.call(t, "div"), B.call(t, "[s!='']:x"), O.push("!=", ot)
			}), N = new RegExp(N.join("|")), O = new RegExp(O.join("|")), R = i(D.contains) || D.compareDocumentPosition ?
			function(t, e) {
				var i = 9 === t.nodeType ? t.documentElement : t,
					n = e && e.parentNode;
				return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
			} : function(t, e) {
				if (e) for (; e = e.parentNode;) if (e === t) return !0;
				return !1
			}, z = D.compareDocumentPosition ?
			function(t, e) {
				var i;
				return t === e ? (M = !0, 0) : (i = e.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(e)) ? 1 & i || t.parentNode && 11 === t.parentNode.nodeType ? t === n || R(H, t) ? -1 : e === n || R(H, e) ? 1 : 0 : 4 & i ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
			} : function(t, e) {
				var i, r = 0,
					o = t.parentNode,
					s = e.parentNode,
					l = [t],
					c = [e];
				if (t === e) return M = !0, 0;
				if (!o || !s) return t === n ? -1 : e === n ? 1 : o ? -1 : s ? 1 : 0;
				if (o === s) return a(t, e);
				for (i = t; i = i.parentNode;) l.unshift(i);
				for (i = e; i = i.parentNode;) c.unshift(i);
				for (; l[r] === c[r];) r++;
				return r ? a(l[r], c[r]) : l[r] === H ? -1 : c[r] === H ? 1 : 0
			}, M = !1, [0, 0].sort(z), W.detectDuplicates = M, E) : E
		}, s.matches = function(t, e) {
			return s(t, null, null, e)
		}, s.matchesSelector = function(t, e) {
			if ((t.ownerDocument || t) !== E && P(t), e = e.replace(bt, "='$1']"), W.matchesSelector && !I && (!O || !O.test(e)) && !N.test(e)) try {
				var i = B.call(t, e);
				if (i || W.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
			} catch (n) {}
			return s(e, E, null, [t]).length > 0
		}, s.contains = function(t, e) {
			return (t.ownerDocument || t) !== E && P(t), R(t, e)
		}, s.attr = function(t, e) {
			var i;
			return (t.ownerDocument || t) !== E && P(t), I || (e = e.toLowerCase()), (i = S.attrHandle[e]) ? i(t) : I || W.attributes ? t.getAttribute(e) : ((i = t.getAttributeNode(e)) || t.getAttribute(e)) && t[e] === !0 ? e : i && i.specified ? i.value : null
		}, s.error = function(t) {
			throw new Error("Syntax error, unrecognized expression: " + t)
		}, s.uniqueSort = function(t) {
			var e, i = [],
				n = 1,
				r = 0;
			if (M = !W.detectDuplicates, t.sort(z), M) {
				for (; e = t[n]; n++) e === t[n - 1] && (r = i.push(n));
				for (; r--;) t.splice(i[r], 1)
			}
			return t
		}, C = s.getText = function(t) {
			var e, i = "",
				n = 0,
				r = t.nodeType;
			if (r) {
				if (1 === r || 9 === r || 11 === r) {
					if ("string" == typeof t.textContent) return t.textContent;
					for (t = t.firstChild; t; t = t.nextSibling) i += C(t)
				} else if (3 === r || 4 === r) return t.nodeValue
			} else for (; e = t[n]; n++) i += C(e);
			return i
		}, S = s.selectors = {
			cacheLength: 50,
			createPseudo: r,
			match: pt,
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(t) {
					return t[1] = t[1].replace(xt, wt), t[3] = (t[4] || t[5] || "").replace(xt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
				},
				CHILD: function(t) {
					return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || s.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && s.error(t[0]), t
				},
				PSEUDO: function(t) {
					var e, i = !t[5] && t[2];
					return pt.CHILD.test(t[0]) ? null : (t[4] ? t[2] = t[4] : i && ht.test(i) && (e = u(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
				}
			},
			filter: {
				TAG: function(t) {
					return "*" === t ?
					function() {
						return !0
					} : (t = t.replace(xt, wt).toLowerCase(), function(e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					})
				},
				CLASS: function(t) {
					var e = $[t + " "];
					return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && $(t, function(t) {
						return e.test(t.className || typeof t.getAttribute !== U && t.getAttribute("class") || "")
					})
				},
				ATTR: function(t, e, i) {
					return function(n) {
						var r = s.attr(n, t);
						return null == r ? "!=" === e : e ? (r += "", "=" === e ? r === i : "!=" === e ? r !== i : "^=" === e ? i && 0 === r.indexOf(i) : "*=" === e ? i && r.indexOf(i) > -1 : "$=" === e ? i && r.slice(-i.length) === i : "~=" === e ? (" " + r + " ").indexOf(i) > -1 : "|=" === e ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
					}
				},
				CHILD: function(t, e, i, n, r) {
					var o = "nth" !== t.slice(0, 3),
						s = "last" !== t.slice(-4),
						a = "of-type" === e;
					return 1 === n && 0 === r ?
					function(t) {
						return !!t.parentNode
					} : function(e, i, l) {
						var c, h, u, p, d, f, g = o !== s ? "nextSibling" : "previousSibling",
							m = e.parentNode,
							v = a && e.nodeName.toLowerCase(),
							y = !l && !a;
						if (m) {
							if (o) {
								for (; g;) {
									for (u = e; u = u[g];) if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
									f = g = "only" === t && !f && "nextSibling"
								}
								return !0
							}
							if (f = [s ? m.firstChild : m.lastChild], s && y) {
								for (h = m[j] || (m[j] = {}), c = h[t] || [], d = c[0] === F && c[1], p = c[0] === F && c[2], u = d && m.childNodes[d]; u = ++d && u && u[g] || (p = d = 0) || f.pop();) if (1 === u.nodeType && ++p && u === e) {
									h[t] = [F, d, p];
									break
								}
							} else if (y && (c = (e[j] || (e[j] = {}))[t]) && c[0] === F) p = c[1];
							else for (;
							(u = ++d && u && u[g] || (p = d = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++p || (y && ((u[j] || (u[j] = {}))[t] = [F, p]), u !== e)););
							return p -= r, p === n || p % n === 0 && p / n >= 0
						}
					}
				},
				PSEUDO: function(t, e) {
					var i, n = S.pseudos[t] || S.setFilters[t.toLowerCase()] || s.error("unsupported pseudo: " + t);
					return n[j] ? n(e) : n.length > 1 ? (i = [t, t, "", e], S.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, i) {
						for (var r, o = n(t, e), s = o.length; s--;) r = J.call(t, o[s]), t[r] = !(i[r] = o[s])
					}) : function(t) {
						return n(t, 0, i)
					}) : n
				}
			},
			pseudos: {
				not: r(function(t) {
					var e = [],
						i = [],
						n = _(t.replace(st, "$1"));
					return n[j] ? r(function(t, e, i, r) {
						for (var o, s = n(t, null, r, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
					}) : function(t, r, o) {
						return e[0] = t, n(e, null, o, i), !i.pop()
					}
				}),
				has: r(function(t) {
					return function(e) {
						return s(t, e).length > 0
					}
				}),
				contains: r(function(t) {
					return function(e) {
						return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
					}
				}),
				lang: r(function(t) {
					return ut.test(t || "") || s.error("unsupported lang: " + t), t = t.replace(xt, wt).toLowerCase(), function(e) {
						var i;
						do
						if (i = I ? e.getAttribute("xml:lang") || e.getAttribute("lang") : e.lang) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
						while ((e = e.parentNode) && 1 === e.nodeType);
						return !1
					}
				}),
				target: function(e) {
					var i = t.location && t.location.hash;
					return i && i.slice(1) === e.id
				},
				root: function(t) {
					return t === D
				},
				focus: function(t) {
					return t === E.activeElement && (!E.hasFocus || E.hasFocus()) && !! (t.type || t.href || ~t.tabIndex)
				},
				enabled: function(t) {
					return t.disabled === !1
				},
				disabled: function(t) {
					return t.disabled === !0
				},
				checked: function(t) {
					var e = t.nodeName.toLowerCase();
					return "input" === e && !! t.checked || "option" === e && !! t.selected
				},
				selected: function(t) {
					return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
				},
				empty: function(t) {
					for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return !1;
					return !0
				},
				parent: function(t) {
					return !S.pseudos.empty(t)
				},
				header: function(t) {
					return vt.test(t.nodeName)
				},
				input: function(t) {
					return mt.test(t.nodeName)
				},
				button: function(t) {
					var e = t.nodeName.toLowerCase();
					return "input" === e && "button" === t.type || "button" === e
				},
				text: function(t) {
					var e;
					return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
				},
				first: h(function() {
					return [0]
				}),
				last: h(function(t, e) {
					return [e - 1]
				}),
				eq: h(function(t, e, i) {
					return [0 > i ? i + e : i]
				}),
				even: h(function(t, e) {
					for (var i = 0; e > i; i += 2) t.push(i);
					return t
				}),
				odd: h(function(t, e) {
					for (var i = 1; e > i; i += 2) t.push(i);
					return t
				}),
				lt: h(function(t, e, i) {
					for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
					return t
				}),
				gt: h(function(t, e, i) {
					for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
					return t
				})
			}
		};
		for (k in {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) S.pseudos[k] = l(k);
		for (k in {
			submit: !0,
			reset: !0
		}) S.pseudos[k] = c(k);
		_ = s.compile = function(t, e) {
			var i, n = [],
				r = [],
				o = G[t + " "];
			if (!o) {
				for (e || (e = u(t)), i = e.length; i--;) o = v(e[i]), o[j] ? n.push(o) : r.push(o);
				o = G(t, y(r, n))
			}
			return o
		}, S.pseudos.nth = S.pseudos.eq, S.filters = w.prototype = S.pseudos, S.setFilters = new w, P(), s.attr = lt.attr, lt.find = s, lt.expr = s.selectors, lt.expr[":"] = lt.expr.pseudos, lt.unique = s.uniqueSort, lt.text = s.getText, lt.isXMLDoc = s.isXML, lt.contains = s.contains
	}(t);
	var Wt = /Until$/,
		Ft = /^(?:parents|prev(?:Until|All))/,
		Xt = /^.[^:#\[\.,]*$/,
		$t = lt.expr.match.needsContext,
		Yt = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	lt.fn.extend({
		find: function(t) {
			var e, i, n, r = this.length;
			if ("string" != typeof t) return n = this, this.pushStack(lt(t).filter(function() {
				for (e = 0; r > e; e++) if (lt.contains(n[e], this)) return !0
			}));
			for (i = [], e = 0; r > e; e++) lt.find(t, this[e], i);
			return i = this.pushStack(r > 1 ? lt.unique(i) : i), i.selector = (this.selector ? this.selector + " " : "") + t, i
		},
		has: function(t) {
			var e, i = lt(t, this),
				n = i.length;
			return this.filter(function() {
				for (e = 0; n > e; e++) if (lt.contains(this, i[e])) return !0
			})
		},
		not: function(t) {
			return this.pushStack(u(this, t, !1))
		},
		filter: function(t) {
			return this.pushStack(u(this, t, !0))
		},
		is: function(t) {
			return !!t && ("string" == typeof t ? $t.test(t) ? lt(t, this.context).index(this[0]) >= 0 : lt.filter(t, this).length > 0 : this.filter(t).length > 0)
		},
		closest: function(t, e) {
			for (var i, n = 0, r = this.length, o = [], s = $t.test(t) || "string" != typeof t ? lt(t, e || this.context) : 0; r > n; n++) for (i = this[n]; i && i.ownerDocument && i !== e && 11 !== i.nodeType;) {
				if (s ? s.index(i) > -1 : lt.find.matchesSelector(i, t)) {
					o.push(i);
					break
				}
				i = i.parentNode
			}
			return this.pushStack(o.length > 1 ? lt.unique(o) : o)
		},
		index: function(t) {
			return t ? "string" == typeof t ? lt.inArray(this[0], lt(t)) : lt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(t, e) {
			var i = "string" == typeof t ? lt(t, e) : lt.makeArray(t && t.nodeType ? [t] : t),
				n = lt.merge(this.get(), i);
			return this.pushStack(lt.unique(n))
		},
		addBack: function(t) {
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
		}
	}), lt.fn.andSelf = lt.fn.addBack, lt.each({
		parent: function(t) {
			var e = t.parentNode;
			return e && 11 !== e.nodeType ? e : null
		},
		parents: function(t) {
			return lt.dir(t, "parentNode")
		},
		parentsUntil: function(t, e, i) {
			return lt.dir(t, "parentNode", i)
		},
		next: function(t) {
			return h(t, "nextSibling")
		},
		prev: function(t) {
			return h(t, "previousSibling")
		},
		nextAll: function(t) {
			return lt.dir(t, "nextSibling")
		},
		prevAll: function(t) {
			return lt.dir(t, "previousSibling")
		},
		nextUntil: function(t, e, i) {
			return lt.dir(t, "nextSibling", i)
		},
		prevUntil: function(t, e, i) {
			return lt.dir(t, "previousSibling", i)
		},
		siblings: function(t) {
			return lt.sibling((t.parentNode || {}).firstChild, t)
		},
		children: function(t) {
			return lt.sibling(t.firstChild)
		},
		contents: function(t) {
			return lt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : lt.merge([], t.childNodes)
		}
	}, function(t, e) {
		lt.fn[t] = function(i, n) {
			var r = lt.map(this, e, i);
			return Wt.test(t) || (n = i), n && "string" == typeof n && (r = lt.filter(n, r)), r = this.length > 1 && !Yt[t] ? lt.unique(r) : r, this.length > 1 && Ft.test(t) && (r = r.reverse()), this.pushStack(r)
		}
	}), lt.extend({
		filter: function(t, e, i) {
			return i && (t = ":not(" + t + ")"), 1 === e.length ? lt.find.matchesSelector(e[0], t) ? [e[0]] : [] : lt.find.matches(t, e)
		},
		dir: function(t, i, n) {
			for (var r = [], o = t[i]; o && 9 !== o.nodeType && (n === e || 1 !== o.nodeType || !lt(o).is(n));) 1 === o.nodeType && r.push(o), o = o[i];
			return r
		},
		sibling: function(t, e) {
			for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
			return i
		}
	});
	var Gt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		Ut = / jQuery\d+="(?:null|\d+)"/g,
		qt = new RegExp("<(?:" + Gt + ")[\\s/>]", "i"),
		Vt = /^\s+/,
		Zt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Kt = /<([\w:]+)/,
		Qt = /<tbody/i,
		Jt = /<|&#?\w+;/,
		te = /<(?:script|style|link)/i,
		ee = /^(?:checkbox|radio)$/i,
		ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
		ne = /^$|\/(?:java|ecma)script/i,
		re = /^true\/(.*)/,
		oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		se = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: lt.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		ae = p(q),
		le = ae.appendChild(q.createElement("div"));
	se.optgroup = se.option, se.tbody = se.tfoot = se.colgroup = se.caption = se.thead, se.th = se.td, lt.fn.extend({
		text: function(t) {
			return lt.access(this, function(t) {
				return t === e ? lt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || q).createTextNode(t))
			}, null, t, arguments.length)
		},
		wrapAll: function(t) {
			if (lt.isFunction(t)) return this.each(function(e) {
				lt(this).wrapAll(t.call(this, e))
			});
			if (this[0]) {
				var e = lt(t, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
					for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
					return t
				}).append(this)
			}
			return this
		},
		wrapInner: function(t) {
			return lt.isFunction(t) ? this.each(function(e) {
				lt(this).wrapInner(t.call(this, e))
			}) : this.each(function() {
				var e = lt(this),
					i = e.contents();
				i.length ? i.wrapAll(t) : e.append(t)
			})
		},
		wrap: function(t) {
			var e = lt.isFunction(t);
			return this.each(function(i) {
				lt(this).wrapAll(e ? t.call(this, i) : t)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				lt.nodeName(this, "body") || lt(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, !0, function(t) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.appendChild(t)
			})
		},
		prepend: function() {
			return this.domManip(arguments, !0, function(t) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.insertBefore(t, this.firstChild)
			})
		},
		before: function() {
			return this.domManip(arguments, !1, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this)
			})
		},
		after: function() {
			return this.domManip(arguments, !1, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
			})
		},
		remove: function(t, e) {
			for (var i, n = 0; null != (i = this[n]); n++)(!t || lt.filter(t, [i]).length > 0) && (e || 1 !== i.nodeType || lt.cleanData(b(i)), i.parentNode && (e && lt.contains(i.ownerDocument, i) && m(b(i, "script")), i.parentNode.removeChild(i)));
			return this
		},
		empty: function() {
			for (var t, e = 0; null != (t = this[e]); e++) {
				for (1 === t.nodeType && lt.cleanData(b(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
				t.options && lt.nodeName(t, "select") && (t.options.length = 0)
			}
			return this
		},
		clone: function(t, e) {
			return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
				return lt.clone(this, t, e)
			})
		},
		html: function(t) {
			return lt.access(this, function(t) {
				var i = this[0] || {},
					n = 0,
					r = this.length;
				if (t === e) return 1 === i.nodeType ? i.innerHTML.replace(Ut, "") : e;
				if ("string" == typeof t && !te.test(t) && (lt.support.htmlSerialize || !qt.test(t)) && (lt.support.leadingWhitespace || !Vt.test(t)) && !se[(Kt.exec(t) || ["", ""])[1].toLowerCase()]) {
					t = t.replace(Zt, "<$1></$2>");
					try {
						for (; r > n; n++) i = this[n] || {}, 1 === i.nodeType && (lt.cleanData(b(i, !1)), i.innerHTML = t);
						i = 0
					} catch (o) {}
				}
				i && this.empty().append(t)
			}, null, t, arguments.length)
		},
		replaceWith: function(t) {
			var e = lt.isFunction(t);
			return e || "string" == typeof t || (t = lt(t).not(this).detach()), this.domManip([t], !0, function(t) {
				var e = this.nextSibling,
					i = this.parentNode;
				i && (lt(this).remove(), i.insertBefore(t, e))
			})
		},
		detach: function(t) {
			return this.remove(t, !0)
		},
		domManip: function(t, i, n) {
			t = et.apply([], t);
			var r, o, s, a, l, c, h = 0,
				u = this.length,
				p = this,
				m = u - 1,
				v = t[0],
				y = lt.isFunction(v);
			if (y || !(1 >= u || "string" != typeof v || lt.support.checkClone) && ie.test(v)) return this.each(function(r) {
				var o = p.eq(r);
				y && (t[0] = v.call(this, r, i ? o.html() : e)), o.domManip(t, i, n)
			});
			if (u && (c = lt.buildFragment(t, this[0].ownerDocument, !1, this), r = c.firstChild, 1 === c.childNodes.length && (c = r), r)) {
				for (i = i && lt.nodeName(r, "tr"), a = lt.map(b(c, "script"), f), s = a.length; u > h; h++) o = c, h !== m && (o = lt.clone(o, !0, !0), s && lt.merge(a, b(o, "script"))), n.call(i && lt.nodeName(this[h], "table") ? d(this[h], "tbody") : this[h], o, h);
				if (s) for (l = a[a.length - 1].ownerDocument, lt.map(a, g), h = 0; s > h; h++) o = a[h], ne.test(o.type || "") && !lt._data(o, "globalEval") && lt.contains(l, o) && (o.src ? lt.ajax({
					url: o.src,
					type: "GET",
					dataType: "script",
					async: !1,
					global: !1,
					"throws": !0
				}) : lt.globalEval((o.text || o.textContent || o.innerHTML || "").replace(oe, "")));
				c = r = null
			}
			return this
		}
	}), lt.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(t, e) {
		lt.fn[t] = function(t) {
			for (var i, n = 0, r = [], o = lt(t), s = o.length - 1; s >= n; n++) i = n === s ? this : this.clone(!0), lt(o[n])[e](i), it.apply(r, i.get());
			return this.pushStack(r)
		}
	}), lt.extend({
		clone: function(t, e, i) {
			var n, r, o, s, a, l = lt.contains(t.ownerDocument, t);
			if (lt.support.html5Clone || lt.isXMLDoc(t) || !qt.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (le.innerHTML = t.outerHTML, le.removeChild(o = le.firstChild)), !(lt.support.noCloneEvent && lt.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || lt.isXMLDoc(t))) for (n = b(o), a = b(t), s = 0; null != (r = a[s]); ++s) n[s] && y(r, n[s]);
			if (e) if (i) for (a = a || b(t), n = n || b(o), s = 0; null != (r = a[s]); s++) v(r, n[s]);
			else v(t, o);
			return n = b(o, "script"), n.length > 0 && m(n, !l && b(t, "script")), n = a = r = null, o
		},
		buildFragment: function(t, e, i, n) {
			for (var r, o, s, a, l, c, h, u = t.length, d = p(e), f = [], g = 0; u > g; g++) if (o = t[g], o || 0 === o) if ("object" === lt.type(o)) lt.merge(f, o.nodeType ? [o] : o);
			else if (Jt.test(o)) {
				for (a = a || d.appendChild(e.createElement("div")), l = (Kt.exec(o) || ["", ""])[1].toLowerCase(), h = se[l] || se._default, a.innerHTML = h[1] + o.replace(Zt, "<$1></$2>") + h[2], r = h[0]; r--;) a = a.lastChild;
				if (!lt.support.leadingWhitespace && Vt.test(o) && f.push(e.createTextNode(Vt.exec(o)[0])), !lt.support.tbody) for (o = "table" !== l || Qt.test(o) ? "<table>" !== h[1] || Qt.test(o) ? 0 : a : a.firstChild, r = o && o.childNodes.length; r--;) lt.nodeName(c = o.childNodes[r], "tbody") && !c.childNodes.length && o.removeChild(c);
				for (lt.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
				a = d.lastChild
			} else f.push(e.createTextNode(o));
			for (a && d.removeChild(a), lt.support.appendChecked || lt.grep(b(f, "input"), x), g = 0; o = f[g++];) if ((!n || -1 === lt.inArray(o, n)) && (s = lt.contains(o.ownerDocument, o), a = b(d.appendChild(o), "script"), s && m(a), i)) for (r = 0; o = a[r++];) ne.test(o.type || "") && i.push(o);
			return a = null, d
		},
		cleanData: function(t, e) {
			for (var i, n, r, o, s = 0, a = lt.expando, l = lt.cache, c = lt.support.deleteExpando, h = lt.event.special; null != (i = t[s]); s++) if ((e || lt.acceptData(i)) && (r = i[a], o = r && l[r])) {
				if (o.events) for (n in o.events) h[n] ? lt.event.remove(i, n) : lt.removeEvent(i, n, o.handle);
				l[r] && (delete l[r], c ? delete i[a] : typeof i.removeAttribute !== U ? i.removeAttribute(a) : i[a] = null, J.push(r))
			}
		}
	});
	var ce, he, ue, pe = /alpha\([^)]*\)/i,
		de = /opacity\s*=\s*([^)]*)/,
		fe = /^(top|right|bottom|left)$/,
		ge = /^(none|table(?!-c[ea]).+)/,
		me = /^margin/,
		ve = new RegExp("^(" + ct + ")(.*)$", "i"),
		ye = new RegExp("^(" + ct + ")(?!px)[a-z%]+$", "i"),
		be = new RegExp("^([+-])=(" + ct + ")", "i"),
		xe = {
			BODY: "block"
		},
		we = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		ke = {
			letterSpacing: 0,
			fontWeight: 400
		},
		Ae = ["Top", "Right", "Bottom", "Left"],
		Se = ["Webkit", "O", "Moz", "ms"];
	lt.fn.extend({
		css: function(t, i) {
			return lt.access(this, function(t, i, n) {
				var r, o, s = {},
					a = 0;
				if (lt.isArray(i)) {
					for (o = he(t), r = i.length; r > a; a++) s[i[a]] = lt.css(t, i[a], !1, o);
					return s
				}
				return n !== e ? lt.style(t, i, n) : lt.css(t, i)
			}, t, i, arguments.length > 1)
		},
		show: function() {
			return A(this, !0)
		},
		hide: function() {
			return A(this)
		},
		toggle: function(t) {
			var e = "boolean" == typeof t;
			return this.each(function() {
				(e ? t : k(this)) ? lt(this).show() : lt(this).hide()
			})
		}
	}), lt.extend({
		cssHooks: {
			opacity: {
				get: function(t, e) {
					if (e) {
						var i = ue(t, "opacity");
						return "" === i ? "1" : i
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": lt.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(t, i, n, r) {
			if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var o, s, a, l = lt.camelCase(i),
					c = t.style;
				if (i = lt.cssProps[l] || (lt.cssProps[l] = w(c, l)), a = lt.cssHooks[i] || lt.cssHooks[l], n === e) return a && "get" in a && (o = a.get(t, !1, r)) !== e ? o : c[i];
				if (s = typeof n, "string" === s && (o = be.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(lt.css(t, i)), s = "number"), !(null == n || "number" === s && isNaN(n) || ("number" !== s || lt.cssNumber[l] || (n += "px"), lt.support.clearCloneStyle || "" !== n || 0 !== i.indexOf("background") || (c[i] = "inherit"), a && "set" in a && (n = a.set(t, n, r)) === e))) try {
					c[i] = n
				} catch (h) {}
			}
		},
		css: function(t, i, n, r) {
			var o, s, a, l = lt.camelCase(i);
			return i = lt.cssProps[l] || (lt.cssProps[l] = w(t.style, l)), a = lt.cssHooks[i] || lt.cssHooks[l], a && "get" in a && (s = a.get(t, !0, n)), s === e && (s = ue(t, i, r)), "normal" === s && i in ke && (s = ke[i]), "" === n || n ? (o = parseFloat(s), n === !0 || lt.isNumeric(o) ? o || 0 : s) : s
		},
		swap: function(t, e, i, n) {
			var r, o, s = {};
			for (o in e) s[o] = t.style[o], t.style[o] = e[o];
			r = i.apply(t, n || []);
			for (o in e) t.style[o] = s[o];
			return r
		}
	}), t.getComputedStyle ? (he = function(e) {
		return t.getComputedStyle(e, null)
	}, ue = function(t, i, n) {
		var r, o, s, a = n || he(t),
			l = a ? a.getPropertyValue(i) || a[i] : e,
			c = t.style;
		return a && ("" !== l || lt.contains(t.ownerDocument, t) || (l = lt.style(t, i)), ye.test(l) && me.test(i) && (r = c.width, o = c.minWidth, s = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = a.width, c.width = r, c.minWidth = o, c.maxWidth = s)), l
	}) : q.documentElement.currentStyle && (he = function(t) {
		return t.currentStyle
	}, ue = function(t, i, n) {
		var r, o, s, a = n || he(t),
			l = a ? a[i] : e,
			c = t.style;
		return null == l && c && c[i] && (l = c[i]), ye.test(l) && !fe.test(i) && (r = c.left, o = t.runtimeStyle, s = o && o.left, s && (o.left = t.currentStyle.left), c.left = "fontSize" === i ? "1em" : l, l = c.pixelLeft + "px", c.left = r, s && (o.left = s)), "" === l ? "auto" : l
	}), lt.each(["height", "width"], function(t, e) {
		lt.cssHooks[e] = {
			get: function(t, i, n) {
				return i ? 0 === t.offsetWidth && ge.test(lt.css(t, "display")) ? lt.swap(t, we, function() {
					return T(t, e, n)
				}) : T(t, e, n) : void 0
			},
			set: function(t, i, n) {
				var r = n && he(t);
				return S(t, i, n ? C(t, e, n, lt.support.boxSizing && "border-box" === lt.css(t, "boxSizing", !1, r), r) : 0)
			}
		}
	}), lt.support.opacity || (lt.cssHooks.opacity = {
		get: function(t, e) {
			return de.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
		},
		set: function(t, e) {
			var i = t.style,
				n = t.currentStyle,
				r = lt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
				o = n && n.filter || i.filter || "";
			i.zoom = 1, (e >= 1 || "" === e) && "" === lt.trim(o.replace(pe, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = pe.test(o) ? o.replace(pe, r) : o + " " + r)
		}
	}), lt(function() {
		lt.support.reliableMarginRight || (lt.cssHooks.marginRight = {
			get: function(t, e) {
				return e ? lt.swap(t, {
					display: "inline-block"
				}, ue, [t, "marginRight"]) : void 0
			}
		}), !lt.support.pixelPosition && lt.fn.position && lt.each(["top", "left"], function(t, e) {
			lt.cssHooks[e] = {
				get: function(t, i) {
					return i ? (i = ue(t, e), ye.test(i) ? lt(t).position()[e] + "px" : i) : void 0
				}
			}
		})
	}), lt.expr && lt.expr.filters && (lt.expr.filters.hidden = function(t) {
		return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !lt.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || lt.css(t, "display"))
	}, lt.expr.filters.visible = function(t) {
		return !lt.expr.filters.hidden(t)
	}), lt.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(t, e) {
		lt.cssHooks[t + e] = {
			expand: function(i) {
				for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[t + Ae[n] + e] = o[n] || o[n - 2] || o[0];
				return r
			}
		}, me.test(t) || (lt.cssHooks[t + e].set = S)
	});
	var Ce = /%20/g,
		Te = /\[\]$/,
		_e = /\r?\n/g,
		Me = /^(?:submit|button|image|reset|file)$/i,
		Le = /^(?:input|select|textarea|keygen)/i;
	lt.fn.extend({
		serialize: function() {
			return lt.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var t = lt.prop(this, "elements");
				return t ? lt.makeArray(t) : this
			}).filter(function() {
				var t = this.type;
				return this.name && !lt(this).is(":disabled") && Le.test(this.nodeName) && !Me.test(t) && (this.checked || !ee.test(t))
			}).map(function(t, e) {
				var i = lt(this).val();
				return null == i ? null : lt.isArray(i) ? lt.map(i, function(t) {
					return {
						name: e.name,
						value: t.replace(_e, "\r\n")
					}
				}) : {
					name: e.name,
					value: i.replace(_e, "\r\n")
				}
			}).get()
		}
	}), lt.param = function(t, i) {
		var n, r = [],
			o = function(t, e) {
				e = lt.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
			};
		if (i === e && (i = lt.ajaxSettings && lt.ajaxSettings.traditional), lt.isArray(t) || t.jquery && !lt.isPlainObject(t)) lt.each(t, function() {
			o(this.name, this.value)
		});
		else for (n in t) L(n, t[n], i, o);
		return r.join("&").replace(Ce, "+")
	}, lt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
		lt.fn[e] = function(t, i) {
			return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
		}
	}), lt.fn.hover = function(t, e) {
		return this.mouseenter(t).mouseleave(e || t)
	};
	var Pe, Ee, De = lt.now(),
		Ie = /\?/,
		Ne = /#.*$/,
		Oe = /([?&])_=[^&]*/,
		Be = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Re = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		ze = /^(?:GET|HEAD)$/,
		je = /^\/\//,
		He = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		We = lt.fn.load,
		Fe = {},
		Xe = {},
		$e = "*/".concat("*");
	try {
		Ee = V.href
	} catch (Ye) {
		Ee = q.createElement("a"), Ee.href = "", Ee = Ee.href
	}
	Pe = He.exec(Ee.toLowerCase()) || [], lt.fn.load = function(t, i, n) {
		if ("string" != typeof t && We) return We.apply(this, arguments);
		var r, o, s, a = this,
			l = t.indexOf(" ");
		return l >= 0 && (r = t.slice(l, t.length), t = t.slice(0, l)), lt.isFunction(i) ? (n = i, i = e) : i && "object" == typeof i && (s = "POST"), a.length > 0 && lt.ajax({
			url: t,
			type: s,
			dataType: "html",
			data: i
		}).done(function(t) {
			o = arguments, a.html(r ? lt("<div>").append(lt.parseHTML(t)).find(r) : t)
		}).complete(n &&
		function(t, e) {
			a.each(n, o || [t.responseText, e, t])
		}), this
	}, lt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
		lt.fn[e] = function(t) {
			return this.on(e, t)
		}
	}), lt.each(["get", "post"], function(t, i) {
		lt[i] = function(t, n, r, o) {
			return lt.isFunction(n) && (o = o || r, r = n, n = e), lt.ajax({
				url: t,
				type: i,
				dataType: o,
				data: n,
				success: r
			})
		}
	}), lt.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Ee,
			type: "GET",
			isLocal: Re.test(Pe[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": $e,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": t.String,
				"text html": !0,
				"text json": lt.parseJSON,
				"text xml": lt.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(t, e) {
			return e ? D(D(t, lt.ajaxSettings), e) : D(lt.ajaxSettings, t)
		},
		ajaxPrefilter: P(Fe),
		ajaxTransport: P(Xe),
		ajax: function(t, i) {
			function n(t, i, n, r) {
				var o, u, y, b, w, A = i;
				2 !== x && (x = 2, l && clearTimeout(l), h = e, a = r || "", k.readyState = t > 0 ? 4 : 0, n && (b = I(p, k, n)), t >= 200 && 300 > t || 304 === t ? (p.ifModified && (w = k.getResponseHeader("Last-Modified"), w && (lt.lastModified[s] = w), w = k.getResponseHeader("etag"), w && (lt.etag[s] = w)), 204 === t ? (o = !0, A = "nocontent") : 304 === t ? (o = !0, A = "notmodified") : (o = N(p, b), A = o.state, u = o.data, y = o.error, o = !y)) : (y = A, !t && A || (A = "error", 0 > t && (t = 0))), k.status = t, k.statusText = (i || A) + "", o ? g.resolveWith(d, [u, A, k]) : g.rejectWith(d, [k, A, y]), k.statusCode(v), v = e, c && f.trigger(o ? "ajaxSuccess" : "ajaxError", [k, p, o ? u : y]), m.fireWith(d, [k, A]), c && (f.trigger("ajaxComplete", [k, p]), --lt.active || lt.event.trigger("ajaxStop")))
			}
			"object" == typeof t && (i = t, t = e), i = i || {};
			var r, o, s, a, l, c, h, u, p = lt.ajaxSetup({}, i),
				d = p.context || p,
				f = p.context && (d.nodeType || d.jquery) ? lt(d) : lt.event,
				g = lt.Deferred(),
				m = lt.Callbacks("once memory"),
				v = p.statusCode || {},
				y = {},
				b = {},
				x = 0,
				w = "canceled",
				k = {
					readyState: 0,
					getResponseHeader: function(t) {
						var e;
						if (2 === x) {
							if (!u) for (u = {}; e = Be.exec(a);) u[e[1].toLowerCase()] = e[2];
							e = u[t.toLowerCase()]
						}
						return null == e ? null : e
					},
					getAllResponseHeaders: function() {
						return 2 === x ? a : null
					},
					setRequestHeader: function(t, e) {
						var i = t.toLowerCase();
						return x || (t = b[i] = b[i] || t, y[t] = e), this
					},
					overrideMimeType: function(t) {
						return x || (p.mimeType = t), this
					},
					statusCode: function(t) {
						var e;
						if (t) if (2 > x) for (e in t) v[e] = [v[e], t[e]];
						else k.always(t[k.status]);
						return this
					},
					abort: function(t) {
						var e = t || w;
						return h && h.abort(e), n(0, e), this
					}
				};
			if (g.promise(k).complete = m.add, k.success = k.done, k.error = k.fail, p.url = ((t || p.url || Ee) + "").replace(Ne, "").replace(je, Pe[1] + "//"), p.type = i.method || i.type || p.method || p.type, p.dataTypes = lt.trim(p.dataType || "*").toLowerCase().match(ht) || [""], null == p.crossDomain && (r = He.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === Pe[1] && r[2] === Pe[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (Pe[3] || ("http:" === Pe[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = lt.param(p.data, p.traditional)), E(Fe, p, i, k), 2 === x) return k;
			c = p.global, c && 0 === lt.active++ && lt.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !ze.test(p.type), s = p.url, p.hasContent || (p.data && (s = p.url += (Ie.test(s) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Oe.test(s) ? s.replace(Oe, "$1_=" + De++) : s + (Ie.test(s) ? "&" : "?") + "_=" + De++)), p.ifModified && (lt.lastModified[s] && k.setRequestHeader("If-Modified-Since", lt.lastModified[s]), lt.etag[s] && k.setRequestHeader("If-None-Match", lt.etag[s])), (p.data && p.hasContent && p.contentType !== !1 || i.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + $e + "; q=0.01" : "") : p.accepts["*"]);
			for (o in p.headers) k.setRequestHeader(o, p.headers[o]);
			if (p.beforeSend && (p.beforeSend.call(d, k, p) === !1 || 2 === x)) return k.abort();
			w = "abort";
			for (o in {
				success: 1,
				error: 1,
				complete: 1
			}) k[o](p[o]);
			if (h = E(Xe, p, i, k)) {
				k.readyState = 1, c && f.trigger("ajaxSend", [k, p]), p.async && p.timeout > 0 && (l = setTimeout(function() {
					k.abort("timeout")
				}, p.timeout));
				try {
					x = 1, h.send(y, n)
				} catch (A) {
					if (!(2 > x)) throw A;
					n(-1, A)
				}
			} else n(-1, "No Transport");
			return k
		},
		getScript: function(t, i) {
			return lt.get(t, e, i, "script")
		},
		getJSON: function(t, e, i) {
			return lt.get(t, e, i, "json")
		}
	}), lt.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(t) {
				return lt.globalEval(t), t
			}
		}
	}), lt.ajaxPrefilter("script", function(t) {
		t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
	}), lt.ajaxTransport("script", function(t) {
		if (t.crossDomain) {
			var i, n = q.head || lt("head")[0] || q.documentElement;
			return {
				send: function(e, r) {
					i = q.createElement("script"), i.async = !0, t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function(t, e) {
						(e || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, e || r(200, "success"))
					}, n.insertBefore(i, n.firstChild)
				},
				abort: function() {
					i && i.onload(e, !0)
				}
			}
		}
	});
	var Ge = [],
		Ue = /(=)\?(?=&|$)|\?\?/;
	lt.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var t = Ge.pop() || lt.expando + "_" + De++;
			return this[t] = !0, t
		}
	}), lt.ajaxPrefilter("json jsonp", function(i, n, r) {
		var o, s, a, l = i.jsonp !== !1 && (Ue.test(i.url) ? "url" : "string" == typeof i.data && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && Ue.test(i.data) && "data");
		return l || "jsonp" === i.dataTypes[0] ? (o = i.jsonpCallback = lt.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, l ? i[l] = i[l].replace(Ue, "$1" + o) : i.jsonp !== !1 && (i.url += (Ie.test(i.url) ? "&" : "?") + i.jsonp + "=" + o), i.converters["script json"] = function() {
			return a || lt.error(o + " was not called"), a[0]
		}, i.dataTypes[0] = "json", s = t[o], t[o] = function() {
			a = arguments
		}, r.always(function() {
			t[o] = s, i[o] && (i.jsonpCallback = n.jsonpCallback, Ge.push(o)), a && lt.isFunction(s) && s(a[0]), a = s = e
		}), "script") : void 0
	});
	var qe, Ve, Ze = 0,
		Ke = t.ActiveXObject &&
	function() {
		var t;
		for (t in qe) qe[t](e, !0)
	};
	lt.ajaxSettings.xhr = t.ActiveXObject ?
	function() {
		return !this.isLocal && O() || B()
	} : O, Ve = lt.ajaxSettings.xhr(), lt.support.cors = !! Ve && "withCredentials" in Ve, Ve = lt.support.ajax = !! Ve, Ve && lt.ajaxTransport(function(i) {
		if (!i.crossDomain || lt.support.cors) {
			var n;
			return {
				send: function(r, o) {
					var s, a, l = i.xhr();
					if (i.username ? l.open(i.type, i.url, i.async, i.username, i.password) : l.open(i.type, i.url, i.async), i.xhrFields) for (a in i.xhrFields) l[a] = i.xhrFields[a];
					i.mimeType && l.overrideMimeType && l.overrideMimeType(i.mimeType), i.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (a in r) l.setRequestHeader(a, r[a])
					} catch (c) {}
					l.send(i.hasContent && i.data || null), n = function(t, r) {
						var a, c, h, u;
						try {
							if (n && (r || 4 === l.readyState)) if (n = e, s && (l.onreadystatechange = lt.noop, Ke && delete qe[s]), r) 4 !== l.readyState && l.abort();
							else {
								u = {}, a = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (u.text = l.responseText);
								try {
									h = l.statusText
								} catch (p) {
									h = ""
								}
								a || !i.isLocal || i.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
							}
						} catch (d) {
							r || o(-1, d)
						}
						u && o(a, h, u, c)
					}, i.async ? 4 === l.readyState ? setTimeout(n) : (s = ++Ze, Ke && (qe || (qe = {}, lt(t).unload(Ke)), qe[s] = n), l.onreadystatechange = n) : n()
				},
				abort: function() {
					n && n(e, !0)
				}
			}
		}
	});
	var Qe, Je, ti = /^(?:toggle|show|hide)$/,
		ei = new RegExp("^(?:([+-])=|)(" + ct + ")([a-z%]*)$", "i"),
		ii = /queueHooks$/,
		ni = [W],
		ri = {
			"*": [function(t, e) {
				var i, n, r = this.createTween(t, e),
					o = ei.exec(e),
					s = r.cur(),
					a = +s || 0,
					l = 1,
					c = 20;
				if (o) {
					if (i = +o[2], n = o[3] || (lt.cssNumber[t] ? "" : "px"), "px" !== n && a) {
						a = lt.css(r.elem, t, !0) || i || 1;
						do l = l || ".5", a /= l, lt.style(r.elem, t, a + n);
						while (l !== (l = r.cur() / s) && 1 !== l && --c)
					}
					r.unit = n, r.start = a, r.end = o[1] ? a + (o[1] + 1) * i : i
				}
				return r
			}]
		};
	lt.Animation = lt.extend(j, {
		tweener: function(t, e) {
			lt.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
			for (var i, n = 0, r = t.length; r > n; n++) i = t[n], ri[i] = ri[i] || [], ri[i].unshift(e)
		},
		prefilter: function(t, e) {
			e ? ni.unshift(t) : ni.push(t)
		}
	}), lt.Tween = F, F.prototype = {
		constructor: F,
		init: function(t, e, i, n, r, o) {
			this.elem = t, this.prop = i, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (lt.cssNumber[i] ? "" : "px")
		},
		cur: function() {
			var t = F.propHooks[this.prop];
			return t && t.get ? t.get(this) : F.propHooks._default.get(this)
		},
		run: function(t) {
			var e, i = F.propHooks[this.prop];
			return this.options.duration ? this.pos = e = lt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : F.propHooks._default.set(this), this
		}
	}, F.prototype.init.prototype = F.prototype, F.propHooks = {
		_default: {
			get: function(t) {
				var e;
				return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = lt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
			},
			set: function(t) {
				lt.fx.step[t.prop] ? lt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[lt.cssProps[t.prop]] || lt.cssHooks[t.prop]) ? lt.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
			}
		}
	}, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
		set: function(t) {
			t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
		}
	}, lt.each(["toggle", "show", "hide"], function(t, e) {
		var i = lt.fn[e];
		lt.fn[e] = function(t, n, r) {
			return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(X(e, !0), t, n, r)
		}
	}), lt.fn.extend({
		fadeTo: function(t, e, i, n) {
			return this.filter(k).css("opacity", 0).show().end().animate({
				opacity: e
			}, t, i, n)
		},
		animate: function(t, e, i, n) {
			var r = lt.isEmptyObject(t),
				o = lt.speed(e, i, n),
				s = function() {
					var e = j(this, lt.extend({}, t), o);
					s.finish = function() {
						e.stop(!0)
					}, (r || lt._data(this, "finish")) && e.stop(!0)
				};
			return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
		},
		stop: function(t, i, n) {
			var r = function(t) {
					var e = t.stop;
					delete t.stop, e(n)
				};
			return "string" != typeof t && (n = i, i = t, t = e), i && t !== !1 && this.queue(t || "fx", []), this.each(function() {
				var e = !0,
					i = null != t && t + "queueHooks",
					o = lt.timers,
					s = lt._data(this);
				if (i) s[i] && s[i].stop && r(s[i]);
				else for (i in s) s[i] && s[i].stop && ii.test(i) && r(s[i]);
				for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
				!e && n || lt.dequeue(this, t)
			})
		},
		finish: function(t) {
			return t !== !1 && (t = t || "fx"), this.each(function() {
				var e, i = lt._data(this),
					n = i[t + "queue"],
					r = i[t + "queueHooks"],
					o = lt.timers,
					s = n ? n.length : 0;
				for (i.finish = !0, lt.queue(this, t, []), r && r.cur && r.cur.finish && r.cur.finish.call(this), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
				for (e = 0; s > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
				delete i.finish
			})
		}
	}), lt.each({
		slideDown: X("show"),
		slideUp: X("hide"),
		slideToggle: X("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(t, e) {
		lt.fn[t] = function(t, i, n) {
			return this.animate(e, t, i, n)
		}
	}), lt.speed = function(t, e, i) {
		var n = t && "object" == typeof t ? lt.extend({}, t) : {
			complete: i || !i && e || lt.isFunction(t) && t,
			duration: t,
			easing: i && e || e && !lt.isFunction(e) && e
		};
		return n.duration = lt.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in lt.fx.speeds ? lt.fx.speeds[n.duration] : lt.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
			lt.isFunction(n.old) && n.old.call(this), n.queue && lt.dequeue(this, n.queue)
		}, n
	}, lt.easing = {
		linear: function(t) {
			return t
		},
		swing: function(t) {
			return .5 - Math.cos(t * Math.PI) / 2
		}
	}, lt.timers = [], lt.fx = F.prototype.init, lt.fx.tick = function() {
		var t, i = lt.timers,
			n = 0;
		for (Qe = lt.now(); n < i.length; n++) t = i[n], t() || i[n] !== t || i.splice(n--, 1);
		i.length || lt.fx.stop(), Qe = e
	}, lt.fx.timer = function(t) {
		t() && lt.timers.push(t) && lt.fx.start()
	}, lt.fx.interval = 13, lt.fx.start = function() {
		Je || (Je = setInterval(lt.fx.tick, lt.fx.interval))
	}, lt.fx.stop = function() {
		clearInterval(Je), Je = null
	}, lt.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, lt.fx.step = {}, lt.expr && lt.expr.filters && (lt.expr.filters.animated = function(t) {
		return lt.grep(lt.timers, function(e) {
			return t === e.elem
		}).length
	}), lt.fn.offset = function(t) {
		if (arguments.length) return t === e ? this : this.each(function(e) {
			lt.offset.setOffset(this, t, e)
		});
		var i, n, r = {
			top: 0,
			left: 0
		},
			o = this[0],
			s = o && o.ownerDocument;
		if (s) return i = s.documentElement, lt.contains(i, o) ? (typeof o.getBoundingClientRect !== U && (r = o.getBoundingClientRect()), n = $(s), {
			top: r.top + (n.pageYOffset || i.scrollTop) - (i.clientTop || 0),
			left: r.left + (n.pageXOffset || i.scrollLeft) - (i.clientLeft || 0)
		}) : r
	}, lt.offset = {
		setOffset: function(t, e, i) {
			var n = lt.css(t, "position");
			"static" === n && (t.style.position = "relative");
			var r, o, s = lt(t),
				a = s.offset(),
				l = lt.css(t, "top"),
				c = lt.css(t, "left"),
				h = ("absolute" === n || "fixed" === n) && lt.inArray("auto", [l, c]) > -1,
				u = {},
				p = {};
			h ? (p = s.position(), r = p.top, o = p.left) : (r = parseFloat(l) || 0, o = parseFloat(c) || 0), lt.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (u.top = e.top - a.top + r), null != e.left && (u.left = e.left - a.left + o), "using" in e ? e.using.call(t, u) : s.css(u)
		}
	}, lt.fn.extend({
		position: function() {
			if (this[0]) {
				var t, e, i = {
					top: 0,
					left: 0
				},
					n = this[0];
				return "fixed" === lt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), lt.nodeName(t[0], "html") || (i = t.offset()), i.top += lt.css(t[0], "borderTopWidth", !0), i.left += lt.css(t[0], "borderLeftWidth", !0)), {
					top: e.top - i.top - lt.css(n, "marginTop", !0),
					left: e.left - i.left - lt.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var t = this.offsetParent || q.documentElement; t && !lt.nodeName(t, "html") && "static" === lt.css(t, "position");) t = t.offsetParent;
				return t || q.documentElement
			})
		}
	}), lt.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, i) {
		var n = /Y/.test(i);
		lt.fn[t] = function(r) {
			return lt.access(this, function(t, r, o) {
				var s = $(t);
				return o === e ? s ? i in s ? s[i] : s.document.documentElement[r] : t[r] : void(s ? s.scrollTo(n ? lt(s).scrollLeft() : o, n ? o : lt(s).scrollTop()) : t[r] = o)
			}, t, r, arguments.length, null)
		}
	}), lt.each({
		Height: "height",
		Width: "width"
	}, function(t, i) {
		lt.each({
			padding: "inner" + t,
			content: i,
			"": "outer" + t
		}, function(n, r) {
			lt.fn[r] = function(r, o) {
				var s = arguments.length && (n || "boolean" != typeof r),
					a = n || (r === !0 || o === !0 ? "margin" : "border");
				return lt.access(this, function(i, n, r) {
					var o;
					return lt.isWindow(i) ? i.document.documentElement["client" + t] : 9 === i.nodeType ? (o = i.documentElement, Math.max(i.body["scroll" + t], o["scroll" + t], i.body["offset" + t], o["offset" + t], o["client" + t])) : r === e ? lt.css(i, n, a) : lt.style(i, n, r, a)
				}, i, s ? r : e, s, null)
			}
		})
	}), t.jQuery = t.$ = lt, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
		return lt
	})
}(window), +
function(t) {
	"use strict";

	function e(e) {
		return this.each(function() {
			var n = t(this),
				r = n.data("bs.affix"),
				o = "object" == typeof e && e;
			r || n.data("bs.affix", r = new i(this, o)), "string" == typeof e && r[e]()
		})
	}
	var i = function(e, n) {
			this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
		};
	i.VERSION = "3.3.6", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
		offset: 0,
		target: window
	}, i.prototype.getState = function(t, e, i, n) {
		var r = this.$target.scrollTop(),
			o = this.$element.offset(),
			s = this.$target.height();
		if (null != i && "top" == this.affixed) return i > r ? "top" : !1;
		if ("bottom" == this.affixed) return null != i ? r + this.unpin <= o.top ? !1 : "bottom" : t - n >= r + s ? !1 : "bottom";
		var a = null == this.affixed,
			l = a ? r : o.top,
			c = a ? s : e;
		return null != i && i >= r ? "top" : null != n && l + c >= t - n ? "bottom" : !1
	}, i.prototype.getPinnedOffset = function() {
		if (this.pinnedOffset) return this.pinnedOffset;
		this.$element.removeClass(i.RESET).addClass("affix");
		var t = this.$target.scrollTop(),
			e = this.$element.offset();
		return this.pinnedOffset = e.top - t
	}, i.prototype.checkPositionWithEventLoop = function() {
		setTimeout(t.proxy(this.checkPosition, this), 1)
	}, i.prototype.checkPosition = function() {
		if (this.$element.is(":visible")) {
			var e = this.$element.height(),
				n = this.options.offset,
				r = n.top,
				o = n.bottom,
				s = Math.max(t(document).height(), t(document.body).height());
			"object" != typeof n && (o = r = n), "function" == typeof r && (r = n.top(this.$element)), "function" == typeof o && (o = n.bottom(this.$element));
			var a = this.getState(s, e, r, o);
			if (this.affixed != a) {
				null != this.unpin && this.$element.css("top", "");
				var l = "affix" + (a ? "-" + a : ""),
					c = t.Event(l + ".bs.affix");
				if (this.$element.trigger(c), c.isDefaultPrevented()) return;
				this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == a && this.$element.offset({
				top: s - e - o
			})
		}
	};
	var n = t.fn.affix;
	t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
		return t.fn.affix = n, this
	}, t(window).on("load", function() {
		t('[data-spy="affix"]').each(function() {
			var i = t(this),
				n = i.data();
			n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
		})
	})
}(jQuery), +
function(t) {
	"use strict";

	function e(e) {
		return this.each(function() {
			var i = t(this),
				r = i.data("bs.alert");
			r || i.data("bs.alert", r = new n(this)), "string" == typeof e && r[e].call(i)
		})
	}
	var i = '[data-dismiss="alert"]',
		n = function(e) {
			t(e).on("click", i, this.close)
		};
	n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
		function i() {
			s.detach().trigger("closed.bs.alert").remove()
		}
		var r = t(this),
			o = r.attr("data-target");
		o || (o = r.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
		var s = t(o);
		e && e.preventDefault(), s.length || (s = r.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
	};
	var r = t.fn.alert;
	t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
		return t.fn.alert = r, this
	}, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
}(jQuery), +
function(t) {
	"use strict";

	function e(e) {
		return this.each(function() {
			var n = t(this),
				r = n.data("bs.tooltip"),
				o = "object" == typeof e && e;
			!r && /destroy|hide/.test(e) || (r || n.data("bs.tooltip", r = new i(this, o)), "string" == typeof e && r[e]())
		})
	}
	var i = function(t, e) {
			this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
		};
	i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	}, i.prototype.init = function(e, i, n) {
		if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
			click: !1,
			hover: !1,
			focus: !1
		}, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
		for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
			var s = r[o];
			if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
			else if ("manual" != s) {
				var a = "hover" == s ? "mouseenter" : "focusin",
					l = "hover" == s ? "mouseleave" : "focusout";
				this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = t.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, i.prototype.getDefaults = function() {
		return i.DEFAULTS
	}, i.prototype.getOptions = function(e) {
		return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
			show: e.delay,
			hide: e.delay
		}), e
	}, i.prototype.getDelegateOptions = function() {
		var e = {},
			i = this.getDefaults();
		return this._options && t.each(this._options, function(t, n) {
			i[t] != n && (e[t] = n)
		}), e
	}, i.prototype.enter = function(e) {
		var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
		return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
			"in" == i.hoverState && i.show()
		}, i.options.delay.show)) : i.show())
	}, i.prototype.isInStateTrue = function() {
		for (var t in this.inState) if (this.inState[t]) return !0;
		return !1
	}, i.prototype.leave = function(e) {
		var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
		return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
			"out" == i.hoverState && i.hide()
		}, i.options.delay.hide)) : i.hide())
	}, i.prototype.show = function() {
		var e = t.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(e);
			var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (e.isDefaultPrevented() || !n) return;
			var r = this,
				o = this.tip(),
				s = this.getUID(this.type);
			this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("fade");
			var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
				l = /\s?auto?\s?/i,
				c = l.test(a);
			c && (a = a.replace(l, "") || "top"), o.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
			var h = this.getPosition(),
				u = o[0].offsetWidth,
				p = o[0].offsetHeight;
			if (c) {
				var d = a,
					f = this.getPosition(this.$viewport);
				a = "bottom" == a && h.bottom + p > f.bottom ? "top" : "top" == a && h.top - p < f.top ? "bottom" : "right" == a && h.right + u > f.width ? "left" : "left" == a && h.left - u < f.left ? "right" : a, o.removeClass(d).addClass(a)
			}
			var g = this.getCalculatedOffset(a, h, u, p);
			this.applyPlacement(g, a);
			var m = function() {
					var t = r.hoverState;
					r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == t && r.leave(r)
				};
			t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m()
		}
	}, i.prototype.applyPlacement = function(e, i) {
		var n = this.tip(),
			r = n[0].offsetWidth,
			o = n[0].offsetHeight,
			s = parseInt(n.css("margin-top"), 10),
			a = parseInt(n.css("margin-left"), 10);
		isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(n[0], t.extend({
			using: function(t) {
				n.css({
					top: Math.round(t.top),
					left: Math.round(t.left)
				})
			}
		}, e), 0), n.addClass("in");
		var l = n[0].offsetWidth,
			c = n[0].offsetHeight;
		"top" == i && c != o && (e.top = e.top + o - c);
		var h = this.getViewportAdjustedDelta(i, e, l, c);
		h.left ? e.left += h.left : e.top += h.top;
		var u = /top|bottom/.test(i),
			p = u ? 2 * h.left - r + l : 2 * h.top - o + c,
			d = u ? "offsetWidth" : "offsetHeight";
		n.offset(e), this.replaceArrow(p, n[0][d], u)
	}, i.prototype.replaceArrow = function(t, e, i) {
		this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
	}, i.prototype.setContent = function() {
		var t = this.tip(),
			e = this.getTitle();
		t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
	}, i.prototype.hide = function(e) {
		function n() {
			"in" != r.hoverState && o.detach(), r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), e && e()
		}
		var r = this,
			o = t(this.$tip),
			s = t.Event("hide.bs." + this.type);
		return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this)
	}, i.prototype.fixTitle = function() {
		var t = this.$element;
		(t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
	}, i.prototype.hasContent = function() {
		return this.getTitle()
	}, i.prototype.getPosition = function(e) {
		e = e || this.$element;
		var i = e[0],
			n = "BODY" == i.tagName,
			r = i.getBoundingClientRect();
		null == r.width && (r = t.extend({}, r, {
			width: r.right - r.left,
			height: r.bottom - r.top
		}));
		var o = n ? {
			top: 0,
			left: 0
		} : e.offset(),
			s = {
				scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
			},
			a = n ? {
				width: t(window).width(),
				height: t(window).height()
			} : null;
		return t.extend({}, r, s, a, o)
	}, i.prototype.getCalculatedOffset = function(t, e, i, n) {
		return "bottom" == t ? {
			top: e.top + e.height,
			left: e.left + e.width / 2 - i / 2
		} : "top" == t ? {
			top: e.top - n,
			left: e.left + e.width / 2 - i / 2
		} : "left" == t ? {
			top: e.top + e.height / 2 - n / 2,
			left: e.left - i
		} : {
			top: e.top + e.height / 2 - n / 2,
			left: e.left + e.width
		}
	}, i.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
		var r = {
			top: 0,
			left: 0
		};
		if (!this.$viewport) return r;
		var o = this.options.viewport && this.options.viewport.padding || 0,
			s = this.getPosition(this.$viewport);
		if (/right|left/.test(t)) {
			var a = e.top - o - s.scroll,
				l = e.top + o - s.scroll + n;
			a < s.top ? r.top = s.top - a : l > s.top + s.height && (r.top = s.top + s.height - l)
		} else {
			var c = e.left - o,
				h = e.left + o + i;
			c < s.left ? r.left = s.left - c : h > s.right && (r.left = s.left + s.width - h)
		}
		return r
	}, i.prototype.getTitle = function() {
		var t, e = this.$element,
			i = this.options;
		return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
	}, i.prototype.getUID = function(t) {
		do t += ~~ (1e6 * Math.random());
		while (document.getElementById(t));
		return t
	}, i.prototype.tip = function() {
		if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
		return this.$tip
	}, i.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, i.prototype.enable = function() {
		this.enabled = !0
	}, i.prototype.disable = function() {
		this.enabled = !1
	}, i.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	}, i.prototype.toggle = function(e) {
		var i = this;
		e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
	}, i.prototype.destroy = function() {
		var t = this;
		clearTimeout(this.timeout), this.hide(function() {
			t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
		})
	};
	var n = t.fn.tooltip;
	t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
		return t.fn.tooltip = n, this
	}
}(jQuery), +
function(t) {
	"use strict";

	function e(e, n) {
		return this.each(function() {
			var r = t(this),
				o = r.data("bs.modal"),
				s = t.extend({}, i.DEFAULTS, r.data(), "object" == typeof e && e);
			o || r.data("bs.modal", o = new i(this, s)), "string" == typeof e ? o[e](n) : s.show && o.show(n)
		})
	}
	var i = function(e, i) {
			this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
				this.$element.trigger("loaded.bs.modal")
			}, this))
		};
	i.VERSION = "3.3.6", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, i.prototype.toggle = function(t) {
		return this.isShown ? this.hide() : this.show(t)
	}, i.prototype.show = function(e) {
		var n = this,
			r = t.Event("show.bs.modal", {
				relatedTarget: e
			});
		this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
			n.$element.one("mouseup.dismiss.bs.modal", function(e) {
				t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
			})
		}), this.backdrop(function() {
			var r = t.support.transition && n.$element.hasClass("fade");
			n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), r && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
			var o = t.Event("shown.bs.modal", {
				relatedTarget: e
			});
			r ? n.$dialog.one("bsTransitionEnd", function() {
				n.$element.trigger("focus").trigger(o)
			}).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(o)
		}))
	}, i.prototype.hide = function(e) {
		e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
	}, i.prototype.enforceFocus = function() {
		t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
			this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
		}, this))
	}, i.prototype.escape = function() {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
			27 == t.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	}, i.prototype.resize = function() {
		this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
	}, i.prototype.hideModal = function() {
		var t = this;
		this.$element.hide(), this.backdrop(function() {
			t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
		})
	}, i.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, i.prototype.backdrop = function(e) {
		var n = this,
			r = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var o = t.support.transition && r;
			if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
				return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
			}, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
			o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var s = function() {
					n.removeBackdrop(), e && e()
				};
			t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : s()
		} else e && e()
	}, i.prototype.handleUpdate = function() {
		this.adjustDialog()
	}, i.prototype.adjustDialog = function() {
		var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
			paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
		})
	}, i.prototype.resetAdjustments = function() {
		this.$element.css({
			paddingLeft: "",
			paddingRight: ""
		})
	}, i.prototype.checkScrollbar = function() {
		var t = window.innerWidth;
		if (!t) {
			var e = document.documentElement.getBoundingClientRect();
			t = e.right - Math.abs(e.left)
		}
		this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
	}, i.prototype.setScrollbar = function() {
		var t = parseInt(this.$body.css("padding-right") || 0, 10);
		this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
	}, i.prototype.resetScrollbar = function() {
		this.$body.css("padding-right", this.originalBodyPad)
	}, i.prototype.measureScrollbar = function() {
		var t = document.createElement("div");
		t.className = "modal-scrollbar-measure", this.$body.append(t);
		var e = t.offsetWidth - t.clientWidth;
		return this.$body[0].removeChild(t), e
	};
	var n = t.fn.modal;
	t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
		return t.fn.modal = n, this
	}, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
		var n = t(this),
			r = n.attr("href"),
			o = t(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
			s = o.data("bs.modal") ? "toggle" : t.extend({
				remote: !/#/.test(r) && r
			}, o.data(), n.data());
		n.is("a") && i.preventDefault(), o.one("show.bs.modal", function(t) {
			t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
				n.is(":visible") && n.trigger("focus")
			})
		}), e.call(o, s, this)
	})
}(jQuery), +
function(t) {
	"use strict";

	function e() {
		var t = document.createElement("bootstrap"),
			e = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var i in e) if (void 0 !== t.style[i]) return {
			end: e[i]
		};
		return !1
	}
	t.fn.emulateTransitionEnd = function(e) {
		var i = !1,
			n = this;
		t(this).one("bsTransitionEnd", function() {
			i = !0
		});
		var r = function() {
				i || t(n).trigger(t.support.transition.end)
			};
		return setTimeout(r, e), this
	}, t(function() {
		t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
			bindType: t.support.transition.end,
			delegateType: t.support.transition.end,
			handle: function(e) {
				return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
			}
		})
	})
}(jQuery), +
function(t) {
	"use strict";

	function e(e) {
		return this.each(function() {
			var n = t(this),
				r = n.data("bs.button"),
				o = "object" == typeof e && e;
			r || n.data("bs.button", r = new i(this, o)), "toggle" == e ? r.toggle() : e && r.setState(e)
		})
	}
	var i = function(e, n) {
			this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
		};
	i.VERSION = "3.3.6", i.DEFAULTS = {
		loadingText: "loading..."
	}, i.prototype.setState = function(e) {
		var i = "disabled",
			n = this.$element,
			r = n.is("input") ? "val" : "html",
			o = n.data();
		e += "Text", null == o.resetText && n.data("resetText", n[r]()), setTimeout(t.proxy(function() {
			n[r](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
		}, this), 0)
	}, i.prototype.toggle = function() {
		var t = !0,
			e = this.$element.closest('[data-toggle="buttons"]');
		if (e.length) {
			var i = this.$element.find("input");
			"radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
	};
	var n = t.fn.button;
	t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
		return t.fn.button = n, this
	}, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
		var n = t(i.target);
		n.hasClass("btn") || (n = n.closest(".btn")), e.call(n, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
		t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
	})
}(jQuery), +
function(t) {
	"use strict";

	function e(e) {
		return this.each(function() {
			var n = t(this),
				r = n.data("bs.popover"),
				o = "object" == typeof e && e;
			!r && /destroy|hide/.test(e) || (r || n.data("bs.popover", r = new i(this, o)), "string" == typeof e && r[e]())
		})
	}
	var i = function(t, e) {
			this.init("popover", t, e)
		};
	if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
	i.VERSION = "3.3.6", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
		return i.DEFAULTS
	}, i.prototype.setContent = function() {
		var t = this.tip(),
			e = this.getTitle(),
			i = this.getContent();
		t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
	}, i.prototype.hasContent = function() {
		return this.getTitle() || this.getContent()
	}, i.prototype.getContent = function() {
		var t = this.$element,
			e = this.options;
		return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
	}, i.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	};
	var n = t.fn.popover;
	t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
		return t.fn.popover = n, this
	}
}(jQuery), +
function(t) {
	"use strict";

	function e(e) {
		return this.each(function() {
			var n = t(this),
				r = n.data("bs.carousel"),
				o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
				s = "string" == typeof e ? e : o.slide;
			r || n.data("bs.carousel", r = new i(this, o)), "number" == typeof e ? r.to(e) : s ? r[s]() : o.interval && r.pause().cycle()
		})
	}
	var i = function(e, i) {
			this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
		};
	i.VERSION = "3.3.6", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0,
		keyboard: !0
	}, i.prototype.keydown = function(t) {
		if (!/input|textarea/i.test(t.target.tagName)) {
			switch (t.which) {
			case 37:
				this.prev();
				break;
			case 39:
				this.next();
				break;
			default:
				return
			}
			t.preventDefault()
		}
	}, i.prototype.cycle = function(e) {
		return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
	}, i.prototype.getItemIndex = function(t) {
		return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
	}, i.prototype.getItemForDirection = function(t, e) {
		var i = this.getItemIndex(e),
			n = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
		if (n && !this.options.wrap) return e;
		var r = "prev" == t ? -1 : 1,
			o = (i + r) % this.$items.length;
		return this.$items.eq(o)
	}, i.prototype.to = function(t) {
		var e = this,
			i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
			e.to(t)
		}) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
	}, i.prototype.pause = function(e) {
		return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, i.prototype.next = function() {
		return this.sliding ? void 0 : this.slide("next")
	}, i.prototype.prev = function() {
		return this.sliding ? void 0 : this.slide("prev")
	}, i.prototype.slide = function(e, n) {
		var r = this.$element.find(".item.active"),
			o = n || this.getItemForDirection(e, r),
			s = this.interval,
			a = "next" == e ? "left" : "right",
			l = this;
		if (o.hasClass("active")) return this.sliding = !1;
		var c = o[0],
			h = t.Event("slide.bs.carousel", {
				relatedTarget: c,
				direction: a
			});
		if (this.$element.trigger(h), !h.isDefaultPrevented()) {
			if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var u = t(this.$indicators.children()[this.getItemIndex(o)]);
				u && u.addClass("active")
			}
			var p = t.Event("slid.bs.carousel", {
				relatedTarget: c,
				direction: a
			});
			return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, r.addClass(a), o.addClass(a), r.one("bsTransitionEnd", function() {
				o.removeClass([e, a].join(" ")).addClass("active"), r.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
					l.$element.trigger(p)
				}, 0)
			}).emulateTransitionEnd(i.TRANSITION_DURATION)) : (r.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(p)), s && this.cycle(), this
		}
	};
	var n = t.fn.carousel;
	t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
		return t.fn.carousel = n, this
	};
	var r = function(i) {
			var n, r = t(this),
				o = t(r.attr("data-target") || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
			if (o.hasClass("carousel")) {
				var s = t.extend({}, o.data(), r.data()),
					a = r.attr("data-slide-to");
				a && (s.interval = !1), e.call(o, s), a && o.data("bs.carousel").to(a), i.preventDefault()
			}
		};
	t(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), t(window).on("load", function() {
		t('[data-ride="carousel"]').each(function() {
			var i = t(this);
			e.call(i, i.data())
		})
	})
}(jQuery), +
function(t) {
	"use strict";

	function e(i, n) {
		this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
	}
	function i(i) {
		return this.each(function() {
			var n = t(this),
				r = n.data("bs.scrollspy"),
				o = "object" == typeof i && i;
			r || n.data("bs.scrollspy", r = new e(this, o)), "string" == typeof i && r[i]()
		})
	}
	e.VERSION = "3.3.6", e.DEFAULTS = {
		offset: 10
	}, e.prototype.getScrollHeight = function() {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	}, e.prototype.refresh = function() {
		var e = this,
			i = "offset",
			n = 0;
		this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
			var e = t(this),
				r = e.data("target") || e.attr("href"),
				o = /^#./.test(r) && t(r);
			return o && o.length && o.is(":visible") && [
				[o[i]().top + n, r]
			] || null
		}).sort(function(t, e) {
			return t[0] - e[0]
		}).each(function() {
			e.offsets.push(this[0]), e.targets.push(this[1])
		})
	}, e.prototype.process = function() {
		var t, e = this.$scrollElement.scrollTop() + this.options.offset,
			i = this.getScrollHeight(),
			n = this.options.offset + i - this.$scrollElement.height(),
			r = this.offsets,
			o = this.targets,
			s = this.activeTarget;
		if (this.scrollHeight != i && this.refresh(), e >= n) return s != (t = o[o.length - 1]) && this.activate(t);
		if (s && e < r[0]) return this.activeTarget = null, this.clear();
		for (t = r.length; t--;) s != o[t] && e >= r[t] && (void 0 === r[t + 1] || e < r[t + 1]) && this.activate(o[t])
	}, e.prototype.activate = function(e) {
		this.activeTarget = e, this.clear();
		var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
			n = t(i).parents("li").addClass("active");
		n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
	}, e.prototype.clear = function() {
		t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var n = t.fn.scrollspy;
	t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
		return t.fn.scrollspy = n, this
	}, t(window).on("load.bs.scrollspy.data-api", function() {
		t('[data-spy="scroll"]').each(function() {
			var e = t(this);
			i.call(e, e.data())
		})
	})
}(jQuery), +
function(t) {
	"use strict";

	function e(e) {
		var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
		return t(n)
	}
	function i(e) {
		return this.each(function() {
			var i = t(this),
				r = i.data("bs.collapse"),
				o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
			!r && o.toggle && /show|hide/.test(e) && (o.toggle = !1), r || i.data("bs.collapse", r = new n(this, o)), "string" == typeof e && r[e]()
		})
	}
	var n = function(e, i) {
			this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
		};
	n.VERSION = "3.3.6", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
		toggle: !0
	}, n.prototype.dimension = function() {
		var t = this.$element.hasClass("width");
		return t ? "width" : "height"
	}, n.prototype.show = function() {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var e, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
			if (!(r && r.length && (e = r.data("bs.collapse"), e && e.transitioning))) {
				var o = t.Event("show.bs.collapse");
				if (this.$element.trigger(o), !o.isDefaultPrevented()) {
					r && r.length && (i.call(r, "hide"), e || r.data("bs.collapse", null));
					var s = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
					var a = function() {
							this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
						};
					if (!t.support.transition) return a.call(this);
					var l = t.camelCase(["scroll", s].join("-"));
					this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[s](this.$element[0][l])
				}
			}
		}
	}, n.prototype.hide = function() {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var e = t.Event("hide.bs.collapse");
			if (this.$element.trigger(e), !e.isDefaultPrevented()) {
				var i = this.dimension();
				this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
				var r = function() {
						this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
					};
				return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : r.call(this)
			}
		}
	}, n.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	}, n.prototype.getParent = function() {
		return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
			var r = t(n);
			this.addAriaAndCollapsedClass(e(r), r)
		}, this)).end()
	}, n.prototype.addAriaAndCollapsedClass = function(t, e) {
		var i = t.hasClass("in");
		t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
	};
	var r = t.fn.collapse;
	t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
		return t.fn.collapse = r, this
	}, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
		var r = t(this);
		r.attr("data-target") || n.preventDefault();
		var o = e(r),
			s = o.data("bs.collapse"),
			a = s ? "toggle" : r.data();
		i.call(o, a)
	})
}(jQuery), +
function(t) {
	"use strict";

	function e(e) {
		return this.each(function() {
			var n = t(this),
				r = n.data("bs.tab");
			r || n.data("bs.tab", r = new i(this)), "string" == typeof e && r[e]()
		})
	}
	var i = function(e) {
			this.element = t(e)
		};
	i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
		var e = this.element,
			i = e.closest("ul:not(.dropdown-menu)"),
			n = e.data("target");
		if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
			var r = i.find(".active:last a"),
				o = t.Event("hide.bs.tab", {
					relatedTarget: e[0]
				}),
				s = t.Event("show.bs.tab", {
					relatedTarget: r[0]
				});
			if (r.trigger(o), e.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
				var a = t(n);
				this.activate(e.closest("li"), i), this.activate(a, a.parent(), function() {
					r.trigger({
						type: "hidden.bs.tab",
						relatedTarget: e[0]
					}), e.trigger({
						type: "shown.bs.tab",
						relatedTarget: r[0]
					})
				})
			}
		}
	}, i.prototype.activate = function(e, n, r) {
		function o() {
			s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r()
		}
		var s = n.find("> .active"),
			a = r && t.support.transition && (s.length && s.hasClass("fade") || !! n.find("> .fade").length);
		s.length && a ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), s.removeClass("in")
	};
	var n = t.fn.tab;
	t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
		return t.fn.tab = n, this
	};
	var r = function(i) {
			i.preventDefault(), e.call(t(this), "show")
		};
	t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
}(jQuery), function(t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], function(i) {
		return e(i, t, t.document, t.Math)
	}) : "object" == typeof exports && exports ? module.exports = e(require("jquery"), t, t.document, t.Math) : e(jQuery, t, t.document, t.Math)
}("undefined" != typeof window ? window : this, function(t, e, i, n, r) {
	"use strict";
	var o = "fullpage-wrapper",
		s = "." + o,
		a = "fp-scrollable",
		l = "." + a,
		c = "fp-responsive",
		h = "fp-notransition",
		u = "fp-destroyed",
		p = "fp-enabled",
		d = "fp-viewing",
		f = "active",
		g = "." + f,
		m = "fp-completely",
		v = "." + m,
		y = ".section",
		b = "fp-section",
		x = "." + b,
		w = x + g,
		k = x + ":first",
		A = x + ":last",
		S = "fp-tableCell",
		C = "." + S,
		T = "fp-auto-height",
		_ = "fp-normal-scroll",
		M = "fp-nav",
		L = "#" + M,
		P = "fp-tooltip",
		E = "." + P,
		D = "fp-show-active",
		I = ".slide",
		N = "fp-slide",
		O = "." + N,
		B = O + g,
		R = "fp-slides",
		z = "." + R,
		j = "fp-slidesContainer",
		H = "." + j,
		W = "fp-table",
		F = "fp-slidesNav",
		X = "." + F,
		$ = X + " a",
		Y = "fp-controlArrow",
		G = "." + Y,
		U = "fp-prev",
		q = "." + U,
		V = Y + " " + U,
		Z = G + q,
		K = "fp-next",
		Q = "." + K,
		J = Y + " " + K,
		tt = G + Q,
		et = t(e),
		it = t(i),
		nt = {
			scrollbars: !0,
			mouseWheel: !0,
			hideScrollbars: !1,
			fadeScrollbars: !1,
			disableMouse: !0,
			interactiveScrollbars: !0
		};
	t.fn.fullpage = function(a) {
		function l(e, i) {
			ri("autoScrolling", e, i);
			var n = t(w);
			a.autoScrolling && !a.scrollBar ? (ai.css({
				overflow: "hidden",
				height: "100%"
			}), Y(Li.recordHistory, "internal"), mi.css({
				"-ms-touch-action": "none",
				"touch-action": "none"
			}), n.length && Je(n.position().top)) : (ai.css({
				overflow: "visible",
				height: "initial"
			}), Y(!1, "internal"), mi.css({
				"-ms-touch-action": "",
				"touch-action": ""
			}), Je(0), n.length && ai.scrollTop(n.position().top))
		}
		function Y(t, e) {
			ri("recordHistory", t, e)
		}
		function q(t, e) {
			"internal" !== e && a.fadingEffect && ci.fadingEffect && ci.fadingEffect.update(t), ri("scrollingSpeed", t, e)
		}
		function K(t, e) {
			ri("fitToSection", t, e)
		}
		function Q(t) {
			a.lockAnchors = t
		}
		function ot(t) {
			t ? (Ye(), Ge()) : ($e(), Ue())
		}
		function st(e, i) {
			"undefined" != typeof i ? (i = i.replace(/ /g, "").split(","), t.each(i, function(t, i) {
				ei(e, i, "m")
			})) : e ? (ot(!0), qe()) : (ot(!1), Ve())
		}
		function at(e, i) {
			"undefined" != typeof i ? (i = i.replace(/ /g, "").split(","), t.each(i, function(t, i) {
				ei(e, i, "k")
			})) : a.keyboardScrolling = e
		}
		function lt() {
			var e = t(w).prev(x);
			e.length || !a.loopTop && !a.continuousVertical || (e = t(x).last()), e.length && Ut(e, null, !0)
		}
		function ct() {
			var e = t(w).next(x);
			e.length || !a.loopBottom && !a.continuousVertical || (e = t(x).first()), e.length && Ut(e, null, !1)
		}
		function ht(t, e) {
			q(0, "internal"), ut(t, e), q(Li.scrollingSpeed, "internal")
		}
		function ut(t, e) {
			var i = Ne(t);
			"undefined" != typeof e ? Be(t, e) : i.length > 0 && Ut(i)
		}
		function pt(t) {
			$t("right", t)
		}
		function dt(t) {
			$t("left", t)
		}
		function ft(e) {
			if (!mi.hasClass(u)) {
				yi = !0, vi = et.height(), t(x).each(function() {
					var e = t(this).find(z),
						i = t(this).find(O);
					a.verticalCentered && t(this).find(C).css("height", De(t(this)) + "px"), t(this).css("height", vi + "px"), a.scrollOverflow && (i.length ? i.each(function() {
						Pe(t(this))
					}) : Pe(t(this))), i.length > 1 && ve(e, e.find(B))
				});
				var i = t(w),
					n = i.index(x);
				n && ht(n + 1), yi = !1, t.isFunction(a.afterResize) && e && a.afterResize.call(mi), t.isFunction(a.afterReBuild) && !e && a.afterReBuild.call(mi)
			}
		}
		function gt(e) {
			var i = li.hasClass(c);
			e ? i || (l(!1, "internal"), K(!1, "internal"), t(L).hide(), li.addClass(c), t.isFunction(a.afterResponsive) && a.afterResponsive.call(mi, e), a.responsiveSlides && ci.responsiveSlides && ci.responsiveSlides.toSections()) : i && (l(Li.autoScrolling, "internal"), K(Li.autoScrolling, "internal"), t(L).show(), li.removeClass(c), t.isFunction(a.afterResponsive) && a.afterResponsive.call(mi, e), a.responsiveSlides && ci.responsiveSlides && ci.responsiveSlides.toSlides())
		}
		function mt() {
			return {
				options: a,
				internals: {
					getXmovement: Le,
					removeAnimation: Se,
					getTransforms: ti,
					lazyLoad: Jt,
					addAnimation: Ae,
					performHorizontalMove: be,
					silentLandscapeScroll: Qe,
					keepSlidesPosition: Yt,
					silentScroll: Je,
					styleSlides: kt
				}
			}
		}
		function vt() {
			a.css3 && (a.css3 = Xe()), a.scrollBar = a.scrollBar || a.hybrid, xt(), wt(), st(!0), l(a.autoScrolling, "internal");
			var e = t(w).find(B);
			e.length && (0 !== t(w).index(x) || 0 === t(w).index(x) && 0 !== e.index()) && Qe(e), ke(), Fe(), "complete" === i.readyState && re(), et.on("load", re)
		}
		function yt() {
			et.on("scroll", Nt).on("hashchange", oe).blur(pe).resize(we), it.keydown(se).keyup(le).on("click touchstart", L + " a", de).on("click touchstart", $, fe).on("click", E, ae), t(x).on("click touchstart", G, ue), a.normalScrollElements && (it.on("mouseenter", a.normalScrollElements, function() {
				ot(!1)
			}), it.on("mouseleave", a.normalScrollElements, function() {
				ot(!0)
			}))
		}
		function bt(t) {
			var i = "fp_" + t + "Extension";
			ci[t] = "undefined" != typeof e[i] ? new e[i] : null
		}
		function xt() {
			var e = mi.find(a.sectionSelector);
			a.anchors.length || (a.anchors = e.filter("[data-anchor]").map(function() {
				return t(this).data("anchor").toString()
			}).get()), a.navigationTooltips.length || (a.navigationTooltips = e.filter("[data-tooltip]").map(function() {
				return t(this).data("tooltip").toString()
			}).get())
		}
		function wt() {
			mi.css({
				height: "100%",
				position: "relative"
			}), mi.addClass(o), t("html").addClass(p), vi = et.height(), mi.removeClass(u), Ct(), t(x).each(function(e) {
				var i = t(this),
					n = i.find(O),
					r = n.length;
				At(i, e), St(i, e), r > 0 ? kt(i, n, r) : a.verticalCentered && Ee(i)
			}), a.fixedElements && a.css3 && t(a.fixedElements).appendTo(li), a.navigation && _t(), Lt(), Pt(), a.fadingEffect && ci.fadingEffect && ci.fadingEffect.apply(), a.scrollOverflow ? ("complete" === i.readyState && Mt(), et.on("load", Mt)) : It()
		}
		function kt(e, i, n) {
			var r = 100 * n,
				o = 100 / n;
			i.wrapAll('<div class="' + j + '" />'), i.parent().wrap('<div class="' + R + '" />'), e.find(H).css("width", r + "%"), n > 1 && (a.controlArrows && Tt(e), a.slidesNavigation && ze(e, n)), i.each(function(e) {
				t(this).css("width", o + "%"), a.verticalCentered && Ee(t(this))
			});
			var s = e.find(B);
			s.length && (0 !== t(w).index(x) || 0 === t(w).index(x) && 0 !== s.index()) ? Qe(s) : i.eq(0).addClass(f)
		}
		function At(e, i) {
			i || 0 !== t(w).length || e.addClass(f), e.css("height", vi + "px"), a.paddingTop && e.css("padding-top", a.paddingTop), a.paddingBottom && e.css("padding-bottom", a.paddingBottom), "undefined" != typeof a.sectionsColor[i] && e.css("background-color", a.sectionsColor[i]), "undefined" != typeof a.anchors[i] && e.attr("data-anchor", a.anchors[i])
		}
		function St(e, i) {
			"undefined" != typeof a.anchors[i] && e.hasClass(f) && _e(a.anchors[i], i), a.menu && a.css3 && t(a.menu).closest(s).length && t(a.menu).appendTo(li)
		}
		function Ct() {
			mi.find(a.sectionSelector).addClass(b), mi.find(a.slideSelector).addClass(N)
		}
		function Tt(t) {
			t.find(z).after('<div class="' + V + '"></div><div class="' + J + '"></div>'), "#fff" != a.controlArrowColor && (t.find(tt).css("border-color", "transparent transparent transparent " + a.controlArrowColor), t.find(Z).css("border-color", "transparent " + a.controlArrowColor + " transparent transparent")), a.loopHorizontal || t.find(Z).hide()
		}
		function _t() {
			li.append('<div id="' + M + '"><ul></ul></div>');
			var e = t(L);
			e.addClass(function() {
				return a.showActiveTooltip ? D + " " + a.navigationPosition : a.navigationPosition
			});
			for (var i = 0; i < t(x).length; i++) {
				var n = "";
				a.anchors.length && (n = a.anchors[i]);
				var r = '<li><a href="#' + n + '"><span></span></a>',
					o = a.navigationTooltips[i];
				"undefined" != typeof o && "" !== o && (r += '<div class="' + P + " " + a.navigationPosition + '">' + o + "</div>"), r += "</li>", e.find("ul").append(r)
			}
			t(L).css("margin-top", "-" + t(L).height() / 2 + "px"), t(L).find("li").eq(t(w).index(x)).find("a").addClass(f)
		}
		function Mt() {
			t(x).each(function() {
				var e = t(this).find(O);
				e.length ? e.each(function() {
					Pe(t(this))
				}) : Pe(t(this))
			}), It()
		}
		function Lt() {
			mi.find('iframe[src*="youtube.com/embed/"]').each(function() {
				Et(t(this), "enablejsapi=1")
			})
		}
		function Pt() {
			mi.find('iframe[src*="player.vimeo.com/"]').each(function() {
				Et(t(this), "api=1")
			})
		}
		function Et(t, e) {
			var i = t.attr("src");
			t.attr("src", i + Dt(i) + e)
		}
		function Dt(t) {
			return /\?/.test(t) ? "&" : "?"
		}
		function It() {
			var e = t(w);
			e.addClass(m), a.scrollOverflowHandler.afterRender && a.scrollOverflowHandler.afterRender(e), Jt(e), te(e), t.isFunction(a.afterLoad) && a.afterLoad.call(e, e.data("anchor"), e.index(x) + 1), t.isFunction(a.afterRender) && a.afterRender.call(mi)
		}
		function Nt() {
			var e;
			if (!a.autoScrolling || a.scrollBar) {
				var n = et.scrollTop(),
					r = Bt(n),
					o = 0,
					s = n + et.height() / 2,
					l = li.height() - et.height() === n,
					c = i.querySelectorAll(x);
				if (l) o = c.length - 1;
				else for (var h = 0; h < c.length; ++h) {
					var u = c[h];
					u.offsetTop <= s && (o = h)
				}
				if (Ot(r) && (t(w).hasClass(m) || t(w).addClass(m).siblings().removeClass(m)), e = t(c).eq(o), !e.hasClass(f)) {
					Pi = !0;
					var p = t(w),
						d = p.index(x) + 1,
						g = Me(e),
						v = e.data("anchor"),
						y = e.index(x) + 1,
						b = e.find(B);
					if (b.length) var k = b.data("anchor"),
						A = b.index();
					xi && (e.addClass(f).siblings().removeClass(f), t.isFunction(a.onLeave) && a.onLeave.call(p, d, y, g), t.isFunction(a.afterLoad) && a.afterLoad.call(e, v, y), ie(p), Jt(e), te(e), _e(v, y - 1), a.anchors.length && (hi = v), je(A, k, v, y)), clearTimeout(Ti), Ti = setTimeout(function() {
						Pi = !1
					}, 100)
				}
				a.fitToSection && (clearTimeout(_i), _i = setTimeout(function() {
					xi && a.fitToSection && (t(w).is(e) && (yi = !0), Ut(t(w)), yi = !1)
				}, a.fitToSectionDelay))
			}
		}
		function Ot(e) {
			var i = t(w).position().top,
				n = i + et.height();
			return "up" == e ? n >= et.scrollTop() + et.height() : i <= et.scrollTop()
		}
		function Bt(t) {
			var e = t > Ei ? "down" : "up";
			return Ei = t, Ri = t, e
		}
		function Rt(t, e) {
			if (ki.m[t]) {
				var i = "down" === t ? "bottom" : "top",
					n = "down" === t ? ct : lt;
				if (ci.scrollHorizontally && (n = ci.scrollHorizontally.getScrollSection(t, n)), e.length > 0) {
					if (!a.scrollOverflowHandler.isScrolled(i, e)) return !0;
					n()
				} else n()
			}
		}
		function zt(e) {
			var i = e.originalEvent,
				r = t(i.target).closest(x);
			if (!jt(e.target) && Ht(i)) {
				a.autoScrolling && e.preventDefault();
				var o = a.scrollOverflowHandler.scrollable(r);
				if (xi && !di) {
					var s = Ke(i);
					Ni = s.y, Oi = s.x, r.find(z).length && n.abs(Ii - Oi) > n.abs(Di - Ni) ? n.abs(Ii - Oi) > et.outerWidth() / 100 * a.touchSensitivity && (Ii > Oi ? ki.m.right && pt(r) : ki.m.left && dt(r)) : a.autoScrolling && n.abs(Di - Ni) > et.height() / 100 * a.touchSensitivity && (Di > Ni ? Rt("down", o) : Ni > Di && Rt("up", o))
				}
			}
		}
		function jt(e, i) {
			i = i || 0;
			var n = t(e).parent();
			return i < a.normalScrollElementTouchThreshold && n.is(a.normalScrollElements) ? !0 : i == a.normalScrollElementTouchThreshold ? !1 : jt(n, ++i)
		}
		function Ht(t) {
			return "undefined" == typeof t.pointerType || "mouse" != t.pointerType
		}
		function Wt(t) {
			var e = t.originalEvent;
			if (a.fitToSection && ai.stop(), Ht(e)) {
				var i = Ke(e);
				Di = i.y, Ii = i.x
			}
		}
		function Ft(t, e) {
			for (var i = 0, r = t.slice(n.max(t.length - e, 1)), o = 0; o < r.length; o++) i += r[o];
			return n.ceil(i / e)
		}
		function Xt(i) {
			var r = (new Date).getTime(),
				o = t(v).hasClass(_);
			if (a.autoScrolling && !pi && !o) {
				i = i || e.event;
				var s = i.wheelDelta || -i.deltaY || -i.detail,
					l = n.max(-1, n.min(1, s)),
					c = "undefined" != typeof i.wheelDeltaX || "undefined" != typeof i.deltaX,
					h = n.abs(i.wheelDeltaX) < n.abs(i.wheelDelta) || n.abs(i.deltaX) < n.abs(i.deltaY) || !c;
				wi.length > 149 && wi.shift(), wi.push(n.abs(s)), a.scrollBar && (i.preventDefault ? i.preventDefault() : i.returnValue = !1);
				var u = t(w),
					p = a.scrollOverflowHandler.scrollable(u),
					d = r - Bi;
				if (Bi = r, d > 200 && (wi = []), xi) {
					var f = Ft(wi, 10),
						g = Ft(wi, 70),
						m = f >= g;
					m && h && (0 > l ? Rt("down", p) : Rt("up", p))
				}
				return !1
			}
			a.fitToSection && ai.stop()
		}
		function $t(e, i) {
			var n = "undefined" == typeof i ? t(w) : i,
				r = n.find(z),
				o = r.find(O).length;
			if (!(!r.length || di || 2 > o)) {
				var s = r.find(B),
					l = null;
				if (l = "left" === e ? s.prev(O) : s.next(O), !l.length) {
					if (!a.loopHorizontal) return;
					l = "left" === e ? s.siblings(":last") : s.siblings(":first")
				}
				di = !0, ve(r, l, e)
			}
		}
		function Yt() {
			t(B).each(function() {
				Qe(t(this), "internal")
			})
		}
		function Gt(t) {
			var e = t.position(),
				i = e.top,
				n = e.top > Ri,
				r = i - vi + t.outerHeight(),
				o = a.bigSectionsDestination;
			return t.outerHeight() > vi ? (n || o) && "bottom" !== o || (i = r) : (n || yi && t.is(":last-child")) && (i = r), Ri = i, i
		}
		function Ut(e, i, n) {
			if ("undefined" != typeof e) {
				var r = Gt(e),
					o = {
						element: e,
						callback: i,
						isMovementUp: n,
						dtop: r,
						yMovement: Me(e),
						anchorLink: e.data("anchor"),
						sectionIndex: e.index(x),
						activeSlide: e.find(B),
						activeSection: t(w),
						leavingSection: t(w).index(x) + 1,
						localIsResizing: yi
					};
				if (!(o.activeSection.is(e) && !yi || a.scrollBar && et.scrollTop() === o.dtop && !e.hasClass(T))) {
					if (o.activeSlide.length) var s = o.activeSlide.data("anchor"),
						l = o.activeSlide.index();
					a.autoScrolling && a.continuousVertical && "undefined" != typeof o.isMovementUp && (!o.isMovementUp && "up" == o.yMovement || o.isMovementUp && "down" == o.yMovement) && (o = Zt(o)), t.isFunction(a.onLeave) && !o.localIsResizing && a.onLeave.call(o.activeSection, o.leavingSection, o.sectionIndex + 1, o.yMovement) === !1 || (ie(o.activeSection), e.addClass(f).siblings().removeClass(f), Jt(e), a.scrollOverflowHandler.onLeave(), xi = !1, je(l, s, o.anchorLink, o.sectionIndex), qt(o), hi = o.anchorLink, _e(o.anchorLink, o.sectionIndex))
				}
			}
		}
		function qt(e) {
			if (a.css3 && a.autoScrolling && !a.scrollBar) {
				var i = "translate3d(0px, -" + e.dtop + "px, 0px)";
				Ie(i, !0), a.scrollingSpeed ? Si = setTimeout(function() {
					Qt(e)
				}, a.scrollingSpeed) : Qt(e)
			} else {
				var n = Vt(e);
				t(n.element).animate(n.options, a.scrollingSpeed, a.easing).promise().done(function() {
					a.scrollBar ? setTimeout(function() {
						Qt(e)
					}, 30) : Qt(e)
				})
			}
		}
		function Vt(t) {
			var e = {};
			return a.autoScrolling && !a.scrollBar ? (e.options = {
				top: -t.dtop
			}, e.element = s) : (e.options = {
				scrollTop: t.dtop
			}, e.element = "html, body"), e
		}
		function Zt(e) {
			return e.isMovementUp ? t(w).before(e.activeSection.nextAll(x)) : t(w).after(e.activeSection.prevAll(x).get().reverse()), Je(t(w).position().top), Yt(), e.wrapAroundElements = e.activeSection, e.dtop = e.element.position().top, e.yMovement = Me(e.element), e
		}
		function Kt(e) {
			e.wrapAroundElements && e.wrapAroundElements.length && (e.isMovementUp ? t(k).before(e.wrapAroundElements) : t(A).after(e.wrapAroundElements), Je(t(w).position().top), Yt())
		}
		function Qt(e) {
			Kt(e), t.isFunction(a.afterLoad) && !e.localIsResizing && a.afterLoad.call(e.element, e.anchorLink, e.sectionIndex + 1), a.scrollOverflowHandler.afterLoad(), a.resetSliders && ci.resetSliders && ci.resetSliders.apply(e), te(e.element), e.element.addClass(m).siblings().removeClass(m), xi = !0, t.isFunction(e.callback) && e.callback.call(this)
		}
		function Jt(e) {
			var e = ne(e);
			e.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
				t(this).attr("src", t(this).data("src")), t(this).removeAttr("data-src"), t(this).is("source") && t(this).closest("video").get(0).load()
			})
		}
		function te(e) {
			var e = ne(e);
			e.find("video, audio").each(function() {
				var e = t(this).get(0);
				e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play()
			}), e.find('iframe[src*="youtube.com/embed/"]').each(function() {
				var e = t(this).get(0);
				e.hasAttribute("data-autoplay") && ee(e), e.onload = function() {
					e.hasAttribute("data-autoplay") && ee(e)
				}
			})
		}
		function ee(t) {
			t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
		}
		function ie(e) {
			var e = ne(e);
			e.find("video, audio").each(function() {
				var e = t(this).get(0);
				e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause()
			}), e.find('iframe[src*="youtube.com/embed/"]').each(function() {
				var e = t(this).get(0);
				/youtube\.com\/embed\//.test(t(this).attr("src")) && !e.hasAttribute("data-keepplaying") && t(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
			})
		}
		function ne(e) {
			var i = e.find(B);
			return i.length && (e = t(i)), e
		}
		function re() {
			var t = e.location.hash.replace("#", "").split("/"),
				i = decodeURIComponent(t[0]),
				n = decodeURIComponent(t[1]);
			i && (a.animateAnchor ? Be(i, n) : ht(i, n))
		}
		function oe() {
			if (!Pi && !a.lockAnchors) {
				var t = e.location.hash.replace("#", "").split("/"),
					i = decodeURIComponent(t[0]),
					n = decodeURIComponent(t[1]),
					r = "undefined" == typeof hi,
					o = "undefined" == typeof hi && "undefined" == typeof n && !di;
				i.length && (i && i !== hi && !r || o || !di && ui != n) && Be(i, n)
			}
		}
		function se(e) {
			clearTimeout(Mi);
			var i = t(":focus");
			if (!i.is("textarea") && !i.is("input") && !i.is("select") && "true" !== i.attr("contentEditable") && "" !== i.attr("contentEditable") && a.keyboardScrolling && a.autoScrolling) {
				var n = e.which,
					r = [40, 38, 32, 33, 34];
				t.inArray(n, r) > -1 && e.preventDefault(), pi = e.ctrlKey, Mi = setTimeout(function() {
					ge(e)
				}, 150)
			}
		}
		function ae() {
			t(this).prev().trigger("click")
		}
		function le(t) {
			bi && (pi = t.ctrlKey)
		}
		function ce(t) {
			2 == t.which && (zi = t.pageY, mi.on("mousemove", me))
		}
		function he(t) {
			2 == t.which && mi.off("mousemove")
		}
		function ue() {
			var e = t(this).closest(x);
			t(this).hasClass(U) ? ki.m.left && dt(e) : ki.m.right && pt(e)
		}
		function pe() {
			bi = !1, pi = !1
		}
		function de(e) {
			e.preventDefault();
			var i = t(this).parent().index();
			Ut(t(x).eq(i))
		}
		function fe(e) {
			e.preventDefault();
			var i = t(this).closest(x).find(z),
				n = i.find(O).eq(t(this).closest("li").index());
			ve(i, n)
		}
		function ge(e) {
			var i = e.shiftKey;
			switch (e.which) {
			case 38:
			case 33:
				ki.k.up && lt();
				break;
			case 32:
				if (i && ki.k.up) {
					lt();
					break
				}
			case 40:
			case 34:
				ki.k.down && ct();
				break;
			case 36:
				ki.k.up && ut(1);
				break;
			case 35:
				ki.k.down && ut(t(x).length);
				break;
			case 37:
				ki.k.left && dt();
				break;
			case 39:
				ki.k.right && pt();
				break;
			default:
				return
			}
		}
		function me(t) {
			xi && (t.pageY < zi && ki.m.up ? lt() : t.pageY > zi && ki.m.down && ct()), zi = t.pageY
		}
		function ve(e, i, n) {
			var r = e.closest(x),
				o = {
					slides: e,
					destiny: i,
					direction: n,
					destinyPos: i.position(),
					slideIndex: i.index(),
					section: r,
					sectionIndex: r.index(x),
					anchorLink: r.data("anchor"),
					slidesNav: r.find(X),
					slideAnchor: We(i),
					prevSlide: r.find(B),
					prevSlideIndex: r.find(B).index(),
					localIsResizing: yi
				};
			return o.xMovement = Le(o.prevSlideIndex, o.slideIndex), o.localIsResizing || (xi = !1), a.onSlideLeave && !o.localIsResizing && "none" !== o.xMovement && t.isFunction(a.onSlideLeave) && a.onSlideLeave.call(o.prevSlide, o.anchorLink, o.sectionIndex + 1, o.prevSlideIndex, o.xMovement, o.slideIndex) === !1 ? void(di = !1) : (ie(o.prevSlide), i.addClass(f).siblings().removeClass(f), o.localIsResizing || Jt(i), !a.loopHorizontal && a.controlArrows && (r.find(Z).toggle(0 !== o.slideIndex), r.find(tt).toggle(!i.is(":last-child"))), r.hasClass(f) && je(o.slideIndex, o.slideAnchor, o.anchorLink, o.sectionIndex), ci.continuousHorizontal && ci.continuousHorizontal.apply(o), be(e, o, !0), void(a.interlockedSlides && ci.interlockedSlides && ci.interlockedSlides.apply(o)))
		}
		function ye(e) {
			ci.continuousHorizontal && ci.continuousHorizontal.afterSlideLoads(e), xe(e.slidesNav, e.slideIndex), e.localIsResizing || (t.isFunction(a.afterSlideLoad) && a.afterSlideLoad.call(e.destiny, e.anchorLink, e.sectionIndex + 1, e.slideAnchor, e.slideIndex), xi = !0), te(e.destiny), di = !1, ci.interlockedSlides && ci.interlockedSlides.apply(e)
		}
		function be(t, e, i) {
			var r = e.destinyPos;
			if (a.css3) {
				var o = "translate3d(-" + n.round(r.left) + "px, 0px, 0px)";
				Ae(t.find(H)).css(ti(o)), Ci = setTimeout(function() {
					i && ye(e)
				}, a.scrollingSpeed, a.easing)
			} else t.animate({
				scrollLeft: n.round(r.left)
			}, a.scrollingSpeed, a.easing, function() {
				i && ye(e)
			})
		}
		function xe(t, e) {
			t.find(g).removeClass(f), t.find("li").eq(e).find("a").addClass(f)
		}
		function we() {
			if (ke(), fi) {
				var e = t(i.activeElement);
				if (!e.is("textarea") && !e.is("input") && !e.is("select")) {
					var r = et.height();
					n.abs(r - ji) > 20 * n.max(ji, r) / 100 && (ft(!0), ji = r)
				}
			} else clearTimeout(Ai), Ai = setTimeout(function() {
				ft(!0)
			}, 350)
		}
		function ke() {
			var t = a.responsive || a.responsiveWidth,
				e = a.responsiveHeight,
				i = t && et.outerWidth() < t,
				n = e && et.height() < e;
			t && e ? gt(i || n) : t ? gt(i) : e && gt(n)
		}
		function Ae(t) {
			var e = "all " + a.scrollingSpeed + "ms " + a.easingcss3;
			return t.removeClass(h), t.css({
				"-webkit-transition": e,
				transition: e
			})
		}
		function Se(t) {
			return t.addClass(h)
		}
		function Ce(e, i) {
			a.navigation && (t(L).find(g).removeClass(f), e ? t(L).find('a[href="#' + e + '"]').addClass(f) : t(L).find("li").eq(i).find("a").addClass(f))
		}
		function Te(e) {
			a.menu && (t(a.menu).find(g).removeClass(f), t(a.menu).find('[data-menuanchor="' + e + '"]').addClass(f))
		}
		function _e(t, e) {
			Te(t), Ce(t, e)
		}
		function Me(e) {
			var i = t(w).index(x),
				n = e.index(x);
			return i == n ? "none" : i > n ? "up" : "down"
		}
		function Le(t, e) {
			return t == e ? "none" : t > e ? "left" : "right"
		}
		function Pe(t) {
			if (!t.hasClass("fp-noscroll")) {
				t.css("overflow", "hidden");
				var e, i = a.scrollOverflowHandler,
					n = i.wrapContent(),
					r = t.closest(x),
					o = i.scrollable(t);
				o.length ? e = i.scrollHeight(t) : (e = t.get(0).scrollHeight, a.verticalCentered && (e = t.find(C).get(0).scrollHeight));
				var s = vi - parseInt(r.css("padding-bottom")) - parseInt(r.css("padding-top"));
				e > s ? o.length ? i.update(t, s) : (a.verticalCentered ? t.find(C).wrapInner(n) : t.wrapInner(n), i.create(t, s)) : i.remove(t), t.css("overflow", "")
			}
		}
		function Ee(t) {
			t.hasClass(W) || t.addClass(W).wrapInner('<div class="' + S + '" style="height:' + De(t) + 'px;" />')
		}
		function De(t) {
			var e = vi;
			if (a.paddingTop || a.paddingBottom) {
				var i = t;
				i.hasClass(b) || (i = t.closest(x));
				var n = parseInt(i.css("padding-top")) + parseInt(i.css("padding-bottom"));
				e = vi - n
			}
			return e
		}
		function Ie(t, e) {
			e ? Ae(mi) : Se(mi), mi.css(ti(t)), setTimeout(function() {
				mi.removeClass(h)
			}, 10)
		}
		function Ne(e) {
			var i = mi.find(x + '[data-anchor="' + e + '"]');
			return i.length || (i = t(x).eq(e - 1)), i
		}
		function Oe(t, e) {
			var i = e.find(z),
				n = i.find(O + '[data-anchor="' + t + '"]');
			return n.length || (n = i.find(O).eq(t)), n
		}
		function Be(t, e) {
			var i = Ne(t);
			"undefined" == typeof e && (e = 0), t === hi || i.hasClass(f) ? Re(i, e) : Ut(i, function() {
				Re(i, e)
			})
		}
		function Re(t, e) {
			if ("undefined" != typeof e) {
				var i = t.find(z),
					n = Oe(e, t);
				n.length && ve(i, n)
			}
		}
		function ze(t, e) {
			t.append('<div class="' + F + '"><ul></ul></div>');
			var i = t.find(X);
			i.addClass(a.slidesNavPosition);
			for (var n = 0; e > n; n++) i.find("ul").append('<li><a href="#"><span></span></a></li>');
			i.css("margin-left", "-" + i.width() / 2 + "px"), i.find("li").first().find("a").addClass(f)
		}
		function je(t, e, i, n) {
			var r = "";
			a.anchors.length && !a.lockAnchors && (t ? ("undefined" != typeof i && (r = i), "undefined" == typeof e && (e = t), ui = e, He(r + "/" + e)) : "undefined" != typeof t ? (ui = e, He(i)) : He(i)), Fe()
		}
		function He(t) {
			if (a.recordHistory) location.hash = t;
			else if (fi || gi) e.history.replaceState(r, r, "#" + t);
			else {
				var i = e.location.href.split("#")[0];
				e.location.replace(i + "#" + t)
			}
		}
		function We(t) {
			var e = t.data("anchor"),
				i = t.index();
			return "undefined" == typeof e && (e = i), e
		}
		function Fe() {
			var e = t(w),
				i = e.find(B),
				n = We(e),
				r = We(i),
				o = String(n);
			i.length && (o = o + "-" + r), o = o.replace("/", "-").replace("#", "");
			var s = new RegExp("\\b\\s?" + d + "-[^\\s]+\\b", "g");
			li[0].className = li[0].className.replace(s, ""), li.addClass(d + "-" + o)
		}
		function Xe() {
			var t, n = i.createElement("p"),
				o = {
					webkitTransform: "-webkit-transform",
					OTransform: "-o-transform",
					msTransform: "-ms-transform",
					MozTransform: "-moz-transform",
					transform: "transform"
				};
			i.body.insertBefore(n, null);
			for (var s in o) n.style[s] !== r && (n.style[s] = "translate3d(1px,1px,1px)", t = e.getComputedStyle(n).getPropertyValue(o[s]));
			return i.body.removeChild(n), t !== r && t.length > 0 && "none" !== t
		}
		function $e() {
			i.addEventListener ? (i.removeEventListener("mousewheel", Xt, !1), i.removeEventListener("wheel", Xt, !1), i.removeEventListener("MozMousePixelScroll", Xt, !1)) : i.detachEvent("onmousewheel", Xt)
		}
		function Ye() {
			var t, n = "";
			e.addEventListener ? t = "addEventListener" : (t = "attachEvent", n = "on");
			var o = "onwheel" in i.createElement("div") ? "wheel" : i.onmousewheel !== r ? "mousewheel" : "DOMMouseScroll";
			"DOMMouseScroll" == o ? i[t](n + "MozMousePixelScroll", Xt, !1) : i[t](n + o, Xt, !1)
		}
		function Ge() {
			mi.on("mousedown", ce).on("mouseup", he)
		}
		function Ue() {
			mi.off("mousedown", ce).off("mouseup", he)
		}
		function qe() {
			if (fi || gi) {
				var e = Ze();
				t(s).off("touchstart " + e.down).on("touchstart " + e.down, Wt).off("touchmove " + e.move).on("touchmove " + e.move, zt)
			}
		}
		function Ve() {
			if (fi || gi) {
				var e = Ze();
				t(s).off("touchstart " + e.down).off("touchmove " + e.move)
			}
		}
		function Ze() {
			var t;
			return t = e.PointerEvent ? {
				down: "pointerdown",
				move: "pointermove"
			} : {
				down: "MSPointerDown",
				move: "MSPointerMove"
			}
		}
		function Ke(t) {
			var e = [];
			return e.y = "undefined" != typeof t.pageY && (t.pageY || t.pageX) ? t.pageY : t.touches[0].pageY, e.x = "undefined" != typeof t.pageX && (t.pageY || t.pageX) ? t.pageX : t.touches[0].pageX, gi && Ht(t) && a.scrollBar && (e.y = t.touches[0].pageY, e.x = t.touches[0].pageX), e
		}
		function Qe(t, e) {
			q(0, "internal"), "undefined" != typeof e && (yi = !0), ve(t.closest(z), t), "undefined" != typeof e && (yi = !1), q(Li.scrollingSpeed, "internal")
		}
		function Je(t) {
			if (a.scrollBar) mi.scrollTop(t);
			else if (a.css3) {
				var e = "translate3d(0px, -" + t + "px, 0px)";
				Ie(e, !1)
			} else mi.css("top", -t)
		}
		function ti(t) {
			return {
				"-webkit-transform": t,
				"-moz-transform": t,
				"-ms-transform": t,
				transform: t
			}
		}
		function ei(t, e, i) {
			switch (e) {
			case "up":
				ki[i].up = t;
				break;
			case "down":
				ki[i].down = t;
				break;
			case "left":
				ki[i].left = t;
				break;
			case "right":
				ki[i].right = t;
				break;
			case "all":
				"m" == i ? st(t) : at(t)
			}
		}
		function ii(e) {
			l(!1, "internal"), st(!1), at(!1), mi.addClass(u), clearTimeout(Ci), clearTimeout(Si), clearTimeout(Ai), clearTimeout(Ti), clearTimeout(_i), et.off("scroll", Nt).off("hashchange", oe).off("resize", we), it.off("click", L + " a").off("mouseenter", L + " li").off("mouseleave", L + " li").off("click", $).off("mouseover", a.normalScrollElements).off("mouseout", a.normalScrollElements), t(x).off("click", G), clearTimeout(Ci), clearTimeout(Si), e && ni()
		}
		function ni() {
			Je(0), mi.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
				t(this).attr("src", t(this).data("src")), t(this).removeAttr("data-src")
			}), t(L + ", " + X + ", " + G).remove(), t(x).css({
				height: "",
				"background-color": "",
				padding: ""
			}), t(O).css({
				width: ""
			}), mi.css({
				height: "",
				position: "",
				"-ms-touch-action": "",
				"touch-action": ""
			}), ai.css({
				overflow: "",
				height: ""
			}), t("html").removeClass(p), li.removeClass(c), t.each(li.get(0).className.split(/\s+/), function(t, e) {
				0 === e.indexOf(d) && li.removeClass(e)
			}), t(x + ", " + O).each(function() {
				a.scrollOverflowHandler.remove(t(this)), t(this).removeClass(W + " " + f)
			}), Se(mi), mi.find(C + ", " + H + ", " + z).each(function() {
				t(this).replaceWith(this.childNodes)
			}), ai.scrollTop(0);
			var e = [b, N, j];
			t.each(e, function(e, i) {
				t("." + i).removeClass(i)
			})
		}
		function ri(t, e, i) {
			a[t] = e, "internal" !== i && (Li[t] = e)
		}
		function oi() {
			return t("html").hasClass(p) ? void si("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (a.continuousVertical && (a.loopTop || a.loopBottom) && (a.continuousVertical = !1, si("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), a.scrollBar && a.scrollOverflow && si("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), a.continuousVertical && a.scrollBar && (a.continuousVertical = !1, si("warn", "Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), void t.each(a.anchors, function(e, i) {
				var n = it.find("[name]").filter(function() {
					return t(this).attr("name") && t(this).attr("name").toLowerCase() == i.toLowerCase()
				}),
					r = it.find("[id]").filter(function() {
						return t(this).attr("id") && t(this).attr("id").toLowerCase() == i.toLowerCase()
					});
				(r.length || n.length) && (si("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), r.length && si("error", '"' + i + '" is is being used by another element `id` property'), n.length && si("error", '"' + i + '" is is being used by another element `name` property'))
			}))
		}
		function si(t, e) {
			console && console[t] && console[t]("fullPage: " + e)
		}
		if (t("html").hasClass(p)) return void oi();
		var ai = t("html, body"),
			li = t("body"),
			ci = t.fn.fullpage;
		a = t.extend({
			menu: !1,
			anchors: [],
			lockAnchors: !1,
			navigation: !1,
			navigationPosition: "right",
			navigationTooltips: [],
			showActiveTooltip: !1,
			slidesNavigation: !1,
			slidesNavPosition: "bottom",
			scrollBar: !1,
			hybrid: !1,
			css3: !0,
			scrollingSpeed: 700,
			autoScrolling: !0,
			fitToSection: !0,
			fitToSectionDelay: 1e3,
			easing: "easeInOutCubic",
			easingcss3: "ease",
			loopBottom: !1,
			loopTop: !1,
			loopHorizontal: !0,
			continuousVertical: !1,
			continuousHorizontal: !0,
			scrollHorizontally: !0,
			interlockedSlides: !1,
			resetSliders: !1,
			fadingEffect: !1,
			normalScrollElements: null,
			scrollOverflow: !1,
			scrollOverflowHandler: rt,
			scrollOverflowOptions: null,
			touchSensitivity: 5,
			normalScrollElementTouchThreshold: 5,
			bigSectionsDestination: null,
			keyboardScrolling: !0,
			animateAnchor: !0,
			recordHistory: !0,
			controlArrows: !0,
			controlArrowColor: "#fff",
			verticalCentered: !0,
			sectionsColor: [],
			paddingTop: 0,
			paddingBottom: 0,
			fixedElements: null,
			responsive: 0,
			responsiveWidth: 0,
			responsiveHeight: 0,
			responsiveSlides: !1,
			sectionSelector: y,
			slideSelector: I,
			afterLoad: null,
			onLeave: null,
			afterRender: null,
			afterResize: null,
			afterReBuild: null,
			afterSlideLoad: null,
			onSlideLeave: null,
			afterResponsive: null
		}, a);
		var hi, ui, pi, di = !1,
			fi = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
			gi = "ontouchstart" in e || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
			mi = t(this),
			vi = et.height(),
			yi = !1,
			bi = !0,
			xi = !0,
			wi = [],
			ki = {};
		ki.m = {
			up: !0,
			down: !0,
			left: !0,
			right: !0
		}, ki.k = t.extend(!0, {}, ki.m);
		var Ai, Si, Ci, Ti, _i, Mi, Li = t.extend(!0, {}, a);
		oi(), nt.click = gi, nt = t.extend(nt, a.scrollOverflowOptions), t.extend(t.easing, {
			easeInOutCubic: function(t, e, i, n, r) {
				return (e /= r / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
			}
		}), t(this).length && (ci.setAutoScrolling = l, ci.setRecordHistory = Y, ci.setScrollingSpeed = q, ci.setFitToSection = K, ci.setLockAnchors = Q, ci.setMouseWheelScrolling = ot, ci.setAllowScrolling = st, ci.setKeyboardScrolling = at, ci.moveSectionUp = lt, ci.moveSectionDown = ct, ci.silentMoveTo = ht, ci.moveTo = ut, ci.moveSlideRight = pt, ci.moveSlideLeft = dt, ci.reBuild = ft, ci.setResponsive = gt, ci.getFullpageData = mt, ci.destroy = ii, bt("continuousHorizontal"), bt("scrollHorizontally"), bt("resetSliders"), bt("interlockedSlides"), bt("responsiveSlides"), bt("fadingEffect"), vt(), yt());
		var Pi = !1,
			Ei = 0,
			Di = 0,
			Ii = 0,
			Ni = 0,
			Oi = 0,
			Bi = (new Date).getTime(),
			Ri = 0,
			zi = 0,
			ji = vi
	}, "undefined" != typeof IScroll && (IScroll.prototype.wheelOn = function() {
		this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this)
	}, IScroll.prototype.wheelOff = function() {
		this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this)
	});
	var rt = {
		refreshId: null,
		iScrollInstances: [],
		onLeave: function() {
			var e = t(w).find(l).data("iscrollInstance");
			"undefined" != typeof e && e && e.wheelOff()
		},
		afterLoad: function() {
			var e = t(w).find(l).data("iscrollInstance");
			"undefined" != typeof e && e && e.wheelOn()
		},
		create: function(e, i) {
			var n = e.find(l);
			n.height(i), n.each(function() {
				var e = jQuery(this),
					i = e.data("iscrollInstance");
				i && t.each(rt.iScrollInstances, function() {
					t(this).destroy()
				}), i = new IScroll(e.get(0), nt), rt.iScrollInstances.push(i), e.data("iscrollInstance", i)
			})
		},
		isScrolled: function(t, e) {
			var i = e.data("iscrollInstance");
			return i ? "top" === t ? i.y >= 0 && !e.scrollTop() : "bottom" === t ? 0 - i.y + e.scrollTop() + 1 + e.innerHeight() >= e[0].scrollHeight : void 0 : !0
		},
		scrollable: function(t) {
			return t.find(z).length ? t.find(B).find(l) : t.find(l)
		},
		scrollHeight: function(t) {
			return t.find(l).children().first().get(0).scrollHeight
		},
		remove: function(t) {
			var e = t.find(l);
			if (e.length) {
				var i = e.data("iscrollInstance");
				i.destroy(), e.data("iscrollInstance", null)
			}
			t.find(l).children().first().children().first().unwrap().unwrap()
		},
		update: function(e, i) {
			clearTimeout(rt.refreshId), rt.refreshId = setTimeout(function() {
				t.each(rt.iScrollInstances, function() {
					t(this).get(0).refresh()
				})
			}, 150), e.find(l).css("height", i + "px").parent().css("height", i + "px")
		},
		wrapContent: function() {
			return '<div class="' + a + '"><div class="fp-scroller"></div></div>'
		}
	}
}), function() {
	function t(t, e) {
		return t.set(e[0], e[1]), t
	}
	function e(t, e) {
		return t.add(e), t
	}
	function i(t, e, i) {
		switch (i.length) {
		case 0:
			return t.call(e);
		case 1:
			return t.call(e, i[0]);
		case 2:
			return t.call(e, i[0], i[1]);
		case 3:
			return t.call(e, i[0], i[1], i[2])
		}
		return t.apply(e, i)
	}
	function n(t, e, i, n) {
		for (var r = -1, o = t ? t.length : 0; ++r < o;) {
			var s = t[r];
			e(n, s, i(s), t)
		}
		return n
	}
	function r(t, e) {
		for (var i = -1, n = t ? t.length : 0; ++i < n && !1 !== e(t[i], i, t););
		return t
	}
	function o(t, e) {
		for (var i = t ? t.length : 0; i-- && !1 !== e(t[i], i, t););
		return t
	}
	function s(t, e) {
		for (var i = -1, n = t ? t.length : 0; ++i < n;) if (!e(t[i], i, t)) return !1;
		return !0
	}
	function a(t, e) {
		for (var i = -1, n = t ? t.length : 0, r = 0, o = []; ++i < n;) {
			var s = t[i];
			e(s, i, t) && (o[r++] = s)
		}
		return o
	}
	function l(t, e) {
		return !(!t || !t.length) && -1 < v(t, e, 0)
	}
	function c(t, e, i) {
		for (var n = -1, r = t ? t.length : 0; ++n < r;) if (i(e, t[n])) return !0;
		return !1
	}
	function h(t, e) {
		for (var i = -1, n = t ? t.length : 0, r = Array(n); ++i < n;) r[i] = e(t[i], i, t);
		return r
	}
	function u(t, e) {
		for (var i = -1, n = e.length, r = t.length; ++i < n;) t[r + i] = e[i];
		return t
	}
	function p(t, e, i, n) {
		var r = -1,
			o = t ? t.length : 0;
		for (n && o && (i = t[++r]); ++r < o;) i = e(i, t[r], r, t);
		return i
	}
	function d(t, e, i, n) {
		var r = t ? t.length : 0;
		for (n && r && (i = t[--r]); r--;) i = e(i, t[r], r, t);
		return i
	}
	function f(t, e) {
		for (var i = -1, n = t ? t.length : 0; ++i < n;) if (e(t[i], i, t)) return !0;
		return !1
	}
	function g(t, e, i) {
		var n;
		return i(t, function(t, i, r) {
			return e(t, i, r) ? (n = i, !1) : void 0
		}), n
	}
	function m(t, e, i, n) {
		var r = t.length;
		for (i += n ? 1 : -1; n ? i-- : ++i < r;) if (e(t[i], i, t)) return i;
		return -1
	}
	function v(t, e, i) {
		if (e !== e) return N(t, i);
		--i;
		for (var n = t.length; ++i < n;) if (t[i] === e) return i;
		return -1
	}
	function y(t, e, i, n) {
		--i;
		for (var r = t.length; ++i < r;) if (n(t[i], e)) return i;
		return -1
	}
	function b(t, e) {
		var i = t ? t.length : 0;
		return i ? k(t, e) / i : G
	}
	function x(t, e, i, n, r) {
		return r(t, function(t, r, o) {
			i = n ? (n = !1, t) : e(i, t, r, o)
		}), i
	}
	function w(t, e) {
		var i = t.length;
		for (t.sort(e); i--;) t[i] = t[i].c;
		return t
	}
	function k(t, e) {
		for (var i, n = -1, r = t.length; ++n < r;) {
			var o = e(t[n]);
			o !== $ && (i = i === $ ? o : i + o)
		}
		return i;
	}
	function A(t, e) {
		for (var i = -1, n = Array(t); ++i < t;) n[i] = e(i);
		return n
	}
	function S(t, e) {
		return h(e, function(e) {
			return [e, t[e]]
		})
	}
	function C(t) {
		return function(e) {
			return t(e)
		}
	}
	function T(t, e) {
		return h(e, function(e) {
			return t[e]
		})
	}
	function _(t, e) {
		return t.has(e)
	}
	function M(t, e) {
		for (var i = -1, n = t.length; ++i < n && -1 < v(e, t[i], 0););
		return i
	}
	function L(t, e) {
		for (var i = t.length; i-- && -1 < v(e, t[i], 0););
		return i
	}
	function P(t) {
		return t && t.Object === Object ? t : null
	}
	function E(t) {
		return Bt[t]
	}
	function D(t) {
		return Rt[t]
	}
	function I(t) {
		return "\\" + jt[t]
	}
	function N(t, e, i) {
		var n = t.length;
		for (e += i ? 1 : -1; i ? e-- : ++e < n;) {
			var r = t[e];
			if (r !== r) return e
		}
		return -1
	}
	function O(t) {
		var e = !1;
		if (null != t && "function" != typeof t.toString) try {
			e = !! (t + "")
		} catch (i) {}
		return e
	}
	function B(t) {
		for (var e, i = []; !(e = t.next()).done;) i.push(e.value);
		return i
	}
	function R(t) {
		var e = -1,
			i = Array(t.size);
		return t.forEach(function(t, n) {
			i[++e] = [n, t]
		}), i
	}
	function z(t, e) {
		for (var i = -1, n = t.length, r = 0, o = []; ++i < n;) {
			var s = t[i];
			s !== e && "__lodash_placeholder__" !== s || (t[i] = "__lodash_placeholder__", o[r++] = i)
		}
		return o
	}
	function j(t) {
		var e = -1,
			i = Array(t.size);
		return t.forEach(function(t) {
			i[++e] = t
		}), i
	}
	function H(t) {
		var e = -1,
			i = Array(t.size);
		return t.forEach(function(t) {
			i[++e] = [t, t]
		}), i
	}
	function W(t) {
		if (!t || !Et.test(t)) return t.length;
		for (var e = Lt.lastIndex = 0; Lt.test(t);) e++;
		return e
	}
	function F(t) {
		return zt[t]
	}
	function X(P) {
		function St(t, e) {
			return P.setTimeout.call(Ut, t, e)
		}
		function Ct(t) {
			if ($n(t) && !ys(t) && !(t instanceof Rt)) {
				if (t instanceof Bt) return t;
				if (Er.call(t, "__wrapped__")) return cn(t)
			}
			return new Bt(t)
		}
		function Tt() {}
		function Bt(t, e) {
			this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !! e, this.__index__ = 0, this.__values__ = $
		}
		function Rt(t) {
			this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
		}
		function zt(t) {
			var e = -1,
				i = t ? t.length : 0;
			for (this.clear(); ++e < i;) {
				var n = t[e];
				this.set(n[0], n[1])
			}
		}
		function jt(t) {
			var e = -1,
				i = t ? t.length : 0;
			for (this.clear(); ++e < i;) {
				var n = t[e];
				this.set(n[0], n[1])
			}
		}
		function Ft(t) {
			var e = -1,
				i = t ? t.length : 0;
			for (this.clear(); ++e < i;) {
				var n = t[e];
				this.set(n[0], n[1])
			}
		}
		function Xt(t) {
			var e = -1,
				i = t ? t.length : 0;
			for (this.__data__ = new Ft; ++e < i;) this.add(t[e])
		}
		function Yt(t) {
			this.__data__ = new jt(t)
		}
		function Gt(t, e, i, n) {
			return t === $ || On(t, Tr[i]) && !Er.call(n, i) ? e : t
		}
		function Vt(t, e, i) {
			(i === $ || On(t[e], i)) && ("number" != typeof e || i !== $ || e in t) || (t[e] = i)
		}
		function Zt(t, e, i) {
			var n = t[e];
			Er.call(t, e) && On(n, i) && (i !== $ || e in t) || (t[e] = i)
		}
		function Kt(t, e) {
			for (var i = t.length; i--;) if (On(t[i][0], e)) return i;
			return -1
		}
		function Qt(t, e, i, n) {
			return So(t, function(t, r, o) {
				e(n, t, i(t), o)
			}), n
		}
		function Jt(t, e) {
			return t && hi(e, sr(e), t)
		}
		function te(t, e) {
			for (var i = -1, n = null == t, r = e.length, o = Array(r); ++i < r;) o[i] = n ? $ : rr(t, e[i]);
			return o
		}
		function ee(t, e, i) {
			return t === t && (i !== $ && (t = i >= t ? t : i), e !== $ && (t = t >= e ? t : e)), t
		}
		function ie(t, e, i, n, o, s, a) {
			var l;
			if (n && (l = s ? n(t, o, s, a) : n(t)), l !== $) return l;
			if (!Xn(t)) return t;
			if (o = ys(t)) {
				if (l = Gi(t), !e) return ci(t, l)
			} else {
				var c = $i(t),
					h = "[object Function]" == c || "[object GeneratorFunction]" == c;
				if (bs(t)) return ri(t, e);
				if ("[object Object]" == c || "[object Arguments]" == c || h && !s) {
					if (O(t)) return s ? t : {};
					if (l = Ui(h ? {} : t), !e) return ui(t, Jt(l, t))
				} else {
					if (!Ot[c]) return s ? t : {};
					l = qi(t, c, ie, e)
				}
			}
			if (a || (a = new Yt), s = a.get(t)) return s;
			if (a.set(t, l), !o) var u = i ? ge(t, sr, Xi) : sr(t);
			return r(u || t, function(r, o) {
				u && (o = r, r = t[o]), Zt(l, o, ie(r, e, i, n, o, t, a))
			}), l
		}
		function ne(t) {
			var e = sr(t),
				i = e.length;
			return function(n) {
				if (null == n) return !i;
				for (var r = i; r--;) {
					var o = e[r],
						s = t[o],
						a = n[o];
					if (a === $ && !(o in Object(n)) || !s(a)) return !1
				}
				return !0
			}
		}
		function re(t) {
			return Xn(t) ? $r(t) : {}
		}
		function oe(t, e, i) {
			if ("function" != typeof t) throw new Sr("Expected a function");
			return St(function() {
				t.apply($, i)
			}, e)
		}
		function se(t, e, i, n) {
			var r = -1,
				o = l,
				s = !0,
				a = t.length,
				u = [],
				p = e.length;
			if (!a) return u;
			i && (e = h(e, C(i))), n ? (o = c, s = !1) : e.length >= 200 && (o = _, s = !1, e = new Xt(e));
			t: for (; ++r < a;) {
				var d = t[r],
					f = i ? i(d) : d,
					d = n || 0 !== d ? d : 0;
				if (s && f === f) {
					for (var g = p; g--;) if (e[g] === f) continue t;
					u.push(d)
				} else o(e, f, n) || u.push(d)
			}
			return u
		}
		function ae(t, e) {
			var i = !0;
			return So(t, function(t, n, r) {
				return i = !! e(t, n, r)
			}), i
		}
		function le(t, e, i) {
			for (var n = -1, r = t.length; ++n < r;) {
				var o = t[n],
					s = e(o);
				if (null != s && (a === $ ? s === s && !Vn(s) : i(s, a))) var a = s,
					l = o
			}
			return l
		}
		function ce(t, e) {
			var i = [];
			return So(t, function(t, n, r) {
				e(t, n, r) && i.push(t)
			}), i
		}
		function he(t, e, i, n, r) {
			var o = -1,
				s = t.length;
			for (i || (i = Zi), r || (r = []); ++o < s;) {
				var a = t[o];
				e > 0 && i(a) ? e > 1 ? he(a, e - 1, i, n, r) : u(r, a) : n || (r[r.length] = a)
			}
			return r
		}
		function ue(t, e) {
			return t && To(t, e, sr)
		}
		function pe(t, e) {
			return t && _o(t, e, sr)
		}
		function de(t, e) {
			return a(e, function(e) {
				return Hn(t[e])
			})
		}
		function fe(t, e) {
			e = tn(e, t) ? [e] : ii(e);
			for (var i = 0, n = e.length; null != t && n > i;) t = t[an(e[i++])];
			return i && i == n ? t : $
		}
		function ge(t, e, i) {
			return e = e(t), ys(t) ? e : u(e, i(t))
		}
		function me(t, e) {
			return t > e
		}
		function ve(t, e) {
			return null != t && (Er.call(t, e) || "object" == typeof t && e in t && null === Vr(Object(t)))
		}
		function ye(t, e) {
			return null != t && e in Object(t)
		}
		function be(t, e, i) {
			for (var n = i ? c : l, r = t[0].length, o = t.length, s = o, a = Array(o), u = 1 / 0, p = []; s--;) {
				var d = t[s];
				s && e && (d = h(d, C(e))), u = to(d.length, u), a[s] = !i && (e || r >= 120 && d.length >= 120) ? new Xt(s && d) : $
			}
			var d = t[0],
				f = -1,
				g = a[0];
			t: for (; ++f < r && u > p.length;) {
				var m = d[f],
					v = e ? e(m) : m,
					m = i || 0 !== m ? m : 0;
				if (g ? !_(g, v) : !n(p, v, i)) {
					for (s = o; --s;) {
						var y = a[s];
						if (y ? !_(y, v) : !n(t[s], v, i)) continue t
					}
					g && g.push(v), p.push(m)
				}
			}
			return p
		}
		function xe(t, e, i) {
			var n = {};
			return ue(t, function(t, r, o) {
				e(n, i(t), r, o)
			}), n
		}
		function we(t, e, n) {
			return tn(e, t) || (e = ii(e), t = sn(t, e), e = gn(e)), e = null == t ? t : t[an(e)], null == e ? $ : i(e, t, n)
		}
		function ke(t, e, i, n, r) {
			if (t === e) e = !0;
			else if (null == t || null == e || !Xn(t) && !$n(e)) e = t !== t && e !== e;
			else t: {
				var o = ys(t),
					s = ys(e),
					a = "[object Array]",
					l = "[object Array]";
				o || (a = $i(t), a = "[object Arguments]" == a ? "[object Object]" : a), s || (l = $i(e), l = "[object Arguments]" == l ? "[object Object]" : l);
				var c = "[object Object]" == a && !O(t),
					s = "[object Object]" == l && !O(e);
				if ((l = a == l) && !c) r || (r = new Yt), e = o || Zn(t) ? Oi(t, e, ke, i, n, r) : Bi(t, e, a, ke, i, n, r);
				else {
					if (!(2 & n) && (o = c && Er.call(t, "__wrapped__"), a = s && Er.call(e, "__wrapped__"), o || a)) {
						t = o ? t.value() : t, e = a ? e.value() : e, r || (r = new Yt), e = ke(t, e, i, n, r);
						break t
					}
					if (l) e: if (r || (r = new Yt), o = 2 & n, a = sr(t), s = a.length, l = sr(e).length, s == l || o) {
						for (c = s; c--;) {
							var h = a[c];
							if (!(o ? h in e : ve(e, h))) {
								e = !1;
								break e
							}
						}
						if (l = r.get(t)) e = l == e;
						else {
							l = !0, r.set(t, e);
							for (var u = o; ++c < s;) {
								var h = a[c],
									p = t[h],
									d = e[h];
								if (i) var f = o ? i(d, p, h, e, t, r) : i(p, d, h, t, e, r);
								if (f === $ ? p !== d && !ke(p, d, i, n, r) : !f) {
									l = !1;
									break
								}
								u || (u = "constructor" == h)
							}
							l && !u && (i = t.constructor, n = e.constructor, i != n && "constructor" in t && "constructor" in e && !("function" == typeof i && i instanceof i && "function" == typeof n && n instanceof n) && (l = !1)), r["delete"](t), e = l
						}
					} else e = !1;
					else e = !1
				}
			}
			return e
		}
		function Ae(t, e, i, n) {
			var r = i.length,
				o = r,
				s = !n;
			if (null == t) return !o;
			for (t = Object(t); r--;) {
				var a = i[r];
				if (s && a[2] ? a[1] !== t[a[0]] : !(a[0] in t)) return !1
			}
			for (; ++r < o;) {
				var a = i[r],
					l = a[0],
					c = t[l],
					h = a[1];
				if (s && a[2]) {
					if (c === $ && !(l in t)) return !1
				} else {
					if (a = new Yt, n) var u = n(c, h, l, t, e, a);
					if (u === $ ? !ke(h, c, n, 3, a) : !u) return !1
				}
			}
			return !0
		}
		function Se(t) {
			return !Xn(t) || Lr && Lr in t ? !1 : (Hn(t) || O(t) ? Br : yt).test(ln(t))
		}
		function Ce(t) {
			return "function" == typeof t ? t : null == t ? dr : "object" == typeof t ? ys(t) ? Pe(t[0], t[1]) : Le(t) : vr(t)
		}
		function Te(t) {
			t = null == t ? t : Object(t);
			var e, i = [];
			for (e in t) i.push(e);
			return i
		}
		function _e(t, e) {
			return e > t
		}
		function Me(t, e) {
			var i = -1,
				n = Rn(t) ? Array(t.length) : [];
			return So(t, function(t, r, o) {
				n[++i] = e(t, r, o)
			}), n
		}
		function Le(t) {
			var e = Wi(t);
			return 1 == e.length && e[0][2] ? rn(e[0][0], e[0][1]) : function(i) {
				return i === t || Ae(i, t, e)
			}
		}
		function Pe(t, e) {
			return tn(t) && e === e && !Xn(e) ? rn(an(t), e) : function(i) {
				var n = rr(i, t);
				return n === $ && n === e ? or(i, t) : ke(e, n, $, 3)
			}
		}
		function Ee(t, e, i, n, o) {
			if (t !== e) {
				if (!ys(e) && !Zn(e)) var s = ar(e);
				r(s || e, function(r, a) {
					if (s && (a = r, r = e[a]), Xn(r)) {
						o || (o = new Yt);
						var l = a,
							c = o,
							h = t[l],
							u = e[l],
							p = c.get(u);
						if (p) Vt(t, l, p);
						else {
							var p = n ? n(h, u, l + "", t, e, c) : $,
								d = p === $;
							d && (p = u, ys(u) || Zn(u) ? ys(h) ? p = h : zn(h) ? p = ci(h) : (d = !1, p = ie(u, !0)) : Gn(u) || Bn(u) ? Bn(h) ? p = ir(h) : !Xn(h) || i && Hn(h) ? (d = !1, p = ie(u, !0)) : p = h : d = !1), c.set(u, p), d && Ee(p, u, i, n, c), c["delete"](u), Vt(t, l, p)
						}
					} else l = n ? n(t[a], r, a + "", t, e, o) : $, l === $ && (l = r), Vt(t, a, l)
				})
			}
		}
		function De(t, e) {
			var i = t.length;
			return i ? (e += 0 > e ? i : 0, Qi(e, i) ? t[e] : $) : void 0
		}
		function Ie(t, e, i) {
			var n = -1;
			return e = h(e.length ? e : [dr], C(ji())), t = Me(t, function(t) {
				return {
					a: h(e, function(e) {
						return e(t)
					}),
					b: ++n,
					c: t
				}
			}), w(t, function(t, e) {
				var n;
				t: {
					n = -1;
					for (var r = t.a, o = e.a, s = r.length, a = i.length; ++n < s;) {
						var l = si(r[n], o[n]);
						if (l) {
							n = n >= a ? l : l * ("desc" == i[n] ? -1 : 1);
							break t
						}
					}
					n = t.b - e.b
				}
				return n
			})
		}
		function Ne(t, e) {
			return t = Object(t), p(e, function(e, i) {
				return i in t && (e[i] = t[i]), e
			}, {})
		}
		function Oe(t, e) {
			for (var i = -1, n = ge(t, ar, Do), r = n.length, o = {}; ++i < r;) {
				var s = n[i],
					a = t[s];
				e(a, s) && (o[s] = a)
			}
			return o
		}
		function Be(t) {
			return function(e) {
				return null == e ? $ : e[t]
			}
		}
		function Re(t) {
			return function(e) {
				return fe(e, t)
			}
		}
		function ze(t, e, i, n) {
			var r = n ? y : v,
				o = -1,
				s = e.length,
				a = t;
			for (t === e && (e = ci(e)), i && (a = h(t, C(i))); ++o < s;) for (var l = 0, c = e[o], c = i ? i(c) : c; - 1 < (l = r(a, c, l, n));) a !== t && Gr.call(a, l, 1), Gr.call(t, l, 1);
			return t
		}
		function je(t, e) {
			for (var i = t ? e.length : 0, n = i - 1; i--;) {
				var r = e[i];
				if (i == n || r !== o) {
					var o = r;
					if (Qi(r)) Gr.call(t, r, 1);
					else if (tn(r, t)) delete t[an(r)];
					else {
						var r = ii(r),
							s = sn(t, r);
						null != s && delete s[an(gn(r))]
					}
				}
			}
		}
		function He(t, e) {
			return t + qr(io() * (e - t + 1))
		}
		function We(t, e) {
			var i = "";
			if (!t || 1 > e || e > 9007199254740991) return i;
			do e % 2 && (i += t), (e = qr(e / 2)) && (t += t);
			while (e);
			return i
		}
		function Fe(t, e, i, n) {
			e = tn(e, t) ? [e] : ii(e);
			for (var r = -1, o = e.length, s = o - 1, a = t; null != a && ++r < o;) {
				var l = an(e[r]);
				if (Xn(a)) {
					var c = i;
					if (r != s) {
						var h = a[l],
							c = n ? n(h, l, a) : $;
						c === $ && (c = null == h ? Qi(e[r + 1]) ? [] : {} : h)
					}
					Zt(a, l, c)
				}
				a = a[l]
			}
			return t
		}
		function Xe(t, e, i) {
			var n = -1,
				r = t.length;
			for (0 > e && (e = -e > r ? 0 : r + e), i = i > r ? r : i, 0 > i && (i += r), r = e > i ? 0 : i - e >>> 0, e >>>= 0, i = Array(r); ++n < r;) i[n] = t[n + e];
			return i
		}
		function $e(t, e) {
			var i;
			return So(t, function(t, n, r) {
				return i = e(t, n, r), !i
			}), !! i
		}
		function Ye(t, e, i) {
			var n = 0,
				r = t ? t.length : n;
			if ("number" == typeof e && e === e && 2147483647 >= r) {
				for (; r > n;) {
					var o = n + r >>> 1,
						s = t[o];
					null !== s && !Vn(s) && (i ? e >= s : e > s) ? n = o + 1 : r = o
				}
				return r
			}
			return Ge(t, e, dr, i)
		}
		function Ge(t, e, i, n) {
			e = i(e);
			for (var r = 0, o = t ? t.length : 0, s = e !== e, a = null === e, l = Vn(e), c = e === $; o > r;) {
				var h = qr((r + o) / 2),
					u = i(t[h]),
					p = u !== $,
					d = null === u,
					f = u === u,
					g = Vn(u);
				(s ? n || f : c ? f && (n || p) : a ? f && p && (n || !d) : l ? f && p && !d && (n || !g) : d || g ? 0 : n ? e >= u : e > u) ? r = h + 1 : o = h
			}
			return to(o, 4294967294)
		}
		function Ue(t, e) {
			for (var i = -1, n = t.length, r = 0, o = []; ++i < n;) {
				var s = t[i],
					a = e ? e(s) : s;
				if (!i || !On(a, l)) {
					var l = a;
					o[r++] = 0 === s ? 0 : s
				}
			}
			return o
		}
		function qe(t) {
			return "number" == typeof t ? t : Vn(t) ? G : +t
		}
		function Ve(t) {
			if ("string" == typeof t) return t;
			if (Vn(t)) return Ao ? Ao.call(t) : "";
			var e = t + "";
			return "0" == e && 1 / t == -Y ? "-0" : e
		}
		function Ze(t, e, i) {
			var n = -1,
				r = l,
				o = t.length,
				s = !0,
				a = [],
				h = a;
			if (i) s = !1, r = c;
			else if (o >= 200) {
				if (r = e ? null : Lo(t)) return j(r);
				s = !1, r = _, h = new Xt
			} else h = e ? [] : a;
			t: for (; ++n < o;) {
				var u = t[n],
					p = e ? e(u) : u,
					u = i || 0 !== u ? u : 0;
				if (s && p === p) {
					for (var d = h.length; d--;) if (h[d] === p) continue t;
					e && h.push(p), a.push(u)
				} else r(h, p, i) || (h !== a && h.push(p), a.push(u))
			}
			return a
		}
		function Ke(t, e, i, n) {
			for (var r = t.length, o = n ? r : -1;
			(n ? o-- : ++o < r) && e(t[o], o, t););
			return i ? Xe(t, n ? 0 : o, n ? o + 1 : r) : Xe(t, n ? o + 1 : 0, n ? r : o)
		}
		function Qe(t, e) {
			var i = t;
			return i instanceof Rt && (i = i.value()), p(e, function(t, e) {
				return e.func.apply(e.thisArg, u([t], e.args))
			}, i)
		}
		function Je(t, e, i) {
			for (var n = -1, r = t.length; ++n < r;) var o = o ? u(se(o, t[n], e, i), se(t[n], o, e, i)) : t[n];
			return o && o.length ? Ze(o, e, i) : []
		}
		function ti(t, e, i) {
			for (var n = -1, r = t.length, o = e.length, s = {}; ++n < r;) i(s, t[n], o > n ? e[n] : $);
			return s
		}
		function ei(t) {
			return zn(t) ? t : []
		}
		function ii(t) {
			return ys(t) ? t : Oo(t)
		}
		function ni(t, e, i) {
			var n = t.length;
			return i = i === $ ? n : i, !e && i >= n ? t : Xe(t, e, i)
		}
		function ri(t, e) {
			if (e) return t.slice();
			var i = new t.constructor(t.length);
			return t.copy(i), i
		}
		function oi(t) {
			var e = new t.constructor(t.byteLength);
			return new Hr(e).set(new Hr(t)), e
		}
		function si(t, e) {
			if (t !== e) {
				var i = t !== $,
					n = null === t,
					r = t === t,
					o = Vn(t),
					s = e !== $,
					a = null === e,
					l = e === e,
					c = Vn(e);
				if (!a && !c && !o && t > e || o && s && l && !a && !c || n && s && l || !i && l || !r) return 1;
				if (!n && !o && !c && e > t || c && i && r && !n && !o || a && i && r || !s && r || !l) return -1
			}
			return 0
		}
		function ai(t, e, i, n) {
			var r = -1,
				o = t.length,
				s = i.length,
				a = -1,
				l = e.length,
				c = Jr(o - s, 0),
				h = Array(l + c);
			for (n = !n; ++a < l;) h[a] = e[a];
			for (; ++r < s;)(n || o > r) && (h[i[r]] = t[r]);
			for (; c--;) h[a++] = t[r++];
			return h
		}
		function li(t, e, i, n) {
			var r = -1,
				o = t.length,
				s = -1,
				a = i.length,
				l = -1,
				c = e.length,
				h = Jr(o - a, 0),
				u = Array(h + c);
			for (n = !n; ++r < h;) u[r] = t[r];
			for (h = r; ++l < c;) u[h + l] = e[l];
			for (; ++s < a;)(n || o > r) && (u[h + i[s]] = t[r++]);
			return u
		}
		function ci(t, e) {
			var i = -1,
				n = t.length;
			for (e || (e = Array(n)); ++i < n;) e[i] = t[i];
			return e
		}
		function hi(t, e, i, n) {
			i || (i = {});
			for (var r = -1, o = e.length; ++r < o;) {
				var s = e[r],
					a = n ? n(i[s], t[s], s, i, t) : t[s];
				Zt(i, s, a)
			}
			return i
		}
		function ui(t, e) {
			return hi(t, Xi(t), e)
		}
		function pi(t, e) {
			return function(i, r) {
				var o = ys(i) ? n : Qt,
					s = e ? e() : {};
				return o(i, t, ji(r), s)
			}
		}
		function di(t) {
			return Nn(function(e, i) {
				var n = -1,
					r = i.length,
					o = r > 1 ? i[r - 1] : $,
					s = r > 2 ? i[2] : $,
					o = t.length > 3 && "function" == typeof o ? (r--, o) : $;
				for (s && Ji(i[0], i[1], s) && (o = 3 > r ? $ : o, r = 1), e = Object(e); ++n < r;)(s = i[n]) && t(e, s, n, o);
				return e
			})
		}
		function fi(t, e) {
			return function(i, n) {
				if (null == i) return i;
				if (!Rn(i)) return t(i, n);
				for (var r = i.length, o = e ? r : -1, s = Object(i);
				(e ? o-- : ++o < r) && !1 !== n(s[o], o, s););
				return i
			}
		}
		function gi(t) {
			return function(e, i, n) {
				var r = -1,
					o = Object(e);
				n = n(e);
				for (var s = n.length; s--;) {
					var a = n[t ? s : ++r];
					if (!1 === i(o[a], a, o)) break
				}
				return e
			}
		}
		function mi(t, e, i) {
			function n() {
				return (this && this !== Ut && this instanceof n ? o : t).apply(r ? i : this, arguments)
			}
			var r = 1 & e,
				o = bi(t);
			return n
		}
		function vi(t) {
			return function(e) {
				e = nr(e);
				var i = Et.test(e) ? e.match(Lt) : $,
					n = i ? i[0] : e.charAt(0);
				return e = i ? ni(i, 1).join("") : e.slice(1), n[t]() + e
			}
		}
		function yi(t) {
			return function(e) {
				return p(ur(hr(e).replace(_t, "")), t, "")
			}
		}
		function bi(t) {
			return function() {
				var e = arguments;
				switch (e.length) {
				case 0:
					return new t;
				case 1:
					return new t(e[0]);
				case 2:
					return new t(e[0], e[1]);
				case 3:
					return new t(e[0], e[1], e[2]);
				case 4:
					return new t(e[0], e[1], e[2], e[3]);
				case 5:
					return new t(e[0], e[1], e[2], e[3], e[4]);
				case 6:
					return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
				case 7:
					return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
				}
				var i = re(t.prototype),
					e = t.apply(i, e);
				return Xn(e) ? e : i
			}
		}
		function xi(t, e, n) {
			function r() {
				for (var s = arguments.length, a = Array(s), l = s, c = zi(r); l--;) a[l] = arguments[l];
				return l = 3 > s && a[0] !== c && a[s - 1] !== c ? [] : z(a, c), s -= l.length, n > s ? Ei(t, e, Ai, r.placeholder, $, a, l, $, $, n - s) : i(this && this !== Ut && this instanceof r ? o : t, this, a)
			}
			var o = bi(t);
			return r
		}
		function wi(t) {
			return function(e, i, n) {
				var r = Object(e);
				if (i = ji(i, 3), !Rn(e)) var o = sr(e);
				return n = t(o || e, function(t, e) {
					return o && (e = t, t = r[e]), i(t, e, r)
				}, n), n > -1 ? e[o ? o[n] : n] : $
			}
		}
		function ki(t) {
			return Nn(function(e) {
				e = he(e, 1);
				var i = e.length,
					n = i,
					r = Bt.prototype.thru;
				for (t && e.reverse(); n--;) {
					var o = e[n];
					if ("function" != typeof o) throw new Sr("Expected a function");
					if (r && !s && "wrapper" == Ri(o)) var s = new Bt([], !0)
				}
				for (n = s ? n : i; ++n < i;) var o = e[n],
					r = Ri(o),
					a = "wrapper" == r ? Po(o) : $,
					s = a && en(a[0]) && 424 == a[1] && !a[4].length && 1 == a[9] ? s[Ri(a[0])].apply(s, a[3]) : 1 == o.length && en(o) ? s[r]() : s.thru(o);
				return function() {
					var t = arguments,
						n = t[0];
					if (s && 1 == t.length && ys(n) && n.length >= 200) return s.plant(n).value();
					for (var r = 0, t = i ? e[r].apply(this, t) : n; ++r < i;) t = e[r].call(this, t);
					return t
				}
			})
		}
		function Ai(t, e, i, n, r, o, s, a, l, c) {
			function h() {
				for (var v = arguments.length, y = Array(v), b = v; b--;) y[b] = arguments[b];
				if (f) {
					var x, w = zi(h),
						b = y.length;
					for (x = 0; b--;) y[b] === w && x++
				}
				if (n && (y = ai(y, n, r, f)), o && (y = li(y, o, s, f)), v -= x, f && c > v) return w = z(y, w), Ei(t, e, Ai, h.placeholder, i, y, w, a, l, c - v);
				if (w = p ? i : this, b = d ? w[t] : t, v = y.length, a) {
					x = y.length;
					for (var k = to(a.length, x), A = ci(y); k--;) {
						var S = a[k];
						y[k] = Qi(S, x) ? A[S] : $
					}
				} else g && v > 1 && y.reverse();
				return u && v > l && (y.length = l), this && this !== Ut && this instanceof h && (b = m || bi(b)), b.apply(w, y)
			}
			var u = 128 & e,
				p = 1 & e,
				d = 2 & e,
				f = 24 & e,
				g = 512 & e,
				m = d ? $ : bi(t);
			return h
		}
		function Si(t, e) {
			return function(i, n) {
				return xe(i, t, e(n))
			}
		}
		function Ci(t) {
			return function(e, i) {
				var n;
				if (e === $ && i === $) return 0;
				if (e !== $ && (n = e), i !== $) {
					if (n === $) return i;
					"string" == typeof e || "string" == typeof i ? (e = Ve(e), i = Ve(i)) : (e = qe(e), i = qe(i)), n = t(e, i)
				}
				return n
			}
		}
		function Ti(t) {
			return Nn(function(e) {
				return e = 1 == e.length && ys(e[0]) ? h(e[0], C(ji())) : h(he(e, 1, Ki), C(ji())), Nn(function(n) {
					var r = this;
					return t(e, function(t) {
						return i(t, r, n)
					})
				})
			})
		}
		function _i(t, e) {
			e = e === $ ? " " : Ve(e);
			var i = e.length;
			return 2 > i ? i ? We(e, t) : e : (i = We(e, Ur(t / W(e))), Et.test(e) ? ni(i.match(Lt), 0, t).join("") : i.slice(0, t))
		}
		function Mi(t, e, n, r) {
			function o() {
				for (var e = -1, l = arguments.length, c = -1, h = r.length, u = Array(h + l), p = this && this !== Ut && this instanceof o ? a : t; ++c < h;) u[c] = r[c];
				for (; l--;) u[c++] = arguments[++e];
				return i(p, s ? n : this, u)
			}
			var s = 1 & e,
				a = bi(t);
			return o
		}
		function Li(t) {
			return function(e, i, n) {
				n && "number" != typeof n && Ji(e, i, n) && (i = n = $), e = er(e), e = e === e ? e : 0, i === $ ? (i = e, e = 0) : i = er(i) || 0, n = n === $ ? i > e ? 1 : -1 : er(n) || 0;
				var r = -1;
				i = Jr(Ur((i - e) / (n || 1)), 0);
				for (var o = Array(i); i--;) o[t ? i : ++r] = e, e += n;
				return o
			}
		}
		function Pi(t) {
			return function(e, i) {
				return "string" == typeof e && "string" == typeof i || (e = er(e), i = er(i)), t(e, i)
			}
		}
		function Ei(t, e, i, n, r, o, s, a, l, c) {
			var h = 8 & e,
				u = h ? s : $;
			s = h ? $ : s;
			var p = h ? o : $;
			return o = h ? $ : o, e = (e | (h ? 32 : 64)) & ~ (h ? 64 : 32), 4 & e || (e &= -4), e = [t, e, r, p, u, o, s, a, l, c], i = i.apply($, e), en(t) && No(i, e), i.placeholder = n, i
		}
		function Di(t) {
			var e = kr[t];
			return function(t, i) {
				if (t = er(t), i = to(Jn(i), 292)) {
					var n = (nr(t) + "e").split("e"),
						n = e(n[0] + "e" + (+n[1] + i)),
						n = (nr(n) + "e").split("e");
					return +(n[0] + "e" + (+n[1] - i))
				}
				return e(t)
			}
		}
		function Ii(t) {
			return function(e) {
				var i = $i(e);
				return "[object Map]" == i ? R(e) : "[object Set]" == i ? H(e) : S(e, t(e))
			}
		}
		function Ni(t, e, i, n, r, o, s, a) {
			var l = 2 & e;
			if (!l && "function" != typeof t) throw new Sr("Expected a function");
			var c = n ? n.length : 0;
			if (c || (e &= -97, n = r = $), s = s === $ ? s : Jr(Jn(s), 0), a = a === $ ? a : Jn(a), c -= r ? r.length : 0, 64 & e) {
				var h = n,
					u = r;
				n = r = $
			}
			var p = l ? $ : Po(t);
			return o = [t, e, i, n, r, h, u, o, s, a], p && (i = o[1], t = p[1], e = i | t, n = 128 == t && 8 == i || 128 == t && 256 == i && p[8] >= o[7].length || 384 == t && p[8] >= p[7].length && 8 == i, 131 > e || n) && (1 & t && (o[2] = p[2], e |= 1 & i ? 0 : 4), (i = p[3]) && (n = o[3], o[3] = n ? ai(n, i, p[4]) : i, o[4] = n ? z(o[3], "__lodash_placeholder__") : p[4]), (i = p[5]) && (n = o[5], o[5] = n ? li(n, i, p[6]) : i, o[6] = n ? z(o[5], "__lodash_placeholder__") : p[6]), (i = p[7]) && (o[7] = i), 128 & t && (o[8] = null == o[8] ? p[8] : to(o[8], p[8])), null == o[9] && (o[9] = p[9]), o[0] = p[0], o[1] = e), t = o[0], e = o[1], i = o[2], n = o[3], r = o[4], a = o[9] = null == o[9] ? l ? 0 : t.length : Jr(o[9] - c, 0), !a && 24 & e && (e &= -25), (p ? Mo : No)(e && 1 != e ? 8 == e || 16 == e ? xi(t, e, a) : 32 != e && 33 != e || r.length ? Ai.apply($, o) : Mi(t, e, i, n) : mi(t, e, i), o)
		}
		function Oi(t, e, i, n, r, o) {
			var s = 2 & r,
				a = t.length,
				l = e.length;
			if (a != l && !(s && l > a)) return !1;
			if (l = o.get(t)) return l == e;
			var l = -1,
				c = !0,
				h = 1 & r ? new Xt : $;
			for (o.set(t, e); ++l < a;) {
				var u = t[l],
					p = e[l];
				if (n) var d = s ? n(p, u, l, e, t, o) : n(u, p, l, t, e, o);
				if (d !== $) {
					if (d) continue;
					c = !1;
					break
				}
				if (h) {
					if (!f(e, function(t, e) {
						return h.has(e) || u !== t && !i(u, t, n, r, o) ? void 0 : h.add(e)
					})) {
						c = !1;
						break
					}
				} else if (u !== p && !i(u, p, n, r, o)) {
					c = !1;
					break
				}
			}
			return o["delete"](t), c
		}
		function Bi(t, e, i, n, r, o, s) {
			switch (i) {
			case "[object DataView]":
				if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) break;
				t = t.buffer, e = e.buffer;
			case "[object ArrayBuffer]":
				if (t.byteLength != e.byteLength || !n(new Hr(t), new Hr(e))) break;
				return !0;
			case "[object Boolean]":
			case "[object Date]":
				return +t == +e;
			case "[object Error]":
				return t.name == e.name && t.message == e.message;
			case "[object Number]":
				return t != +t ? e != +e : t == +e;
			case "[object RegExp]":
			case "[object String]":
				return t == e + "";
			case "[object Map]":
				var a = R;
			case "[object Set]":
				if (a || (a = j), t.size != e.size && !(2 & o)) break;
				return (i = s.get(t)) ? i == e : (o |= 1, s.set(t, e), Oi(a(t), a(e), n, r, o, s));
			case "[object Symbol]":
				if (ko) return ko.call(t) == ko.call(e)
			}
			return !1
		}
		function Ri(t) {
			for (var e = t.name + "", i = go[e], n = Er.call(go, e) ? i.length : 0; n--;) {
				var r = i[n],
					o = r.func;
				if (null == o || o == t) return r.name
			}
			return e
		}
		function zi(t) {
			return (Er.call(Ct, "placeholder") ? Ct : t).placeholder
		}
		function ji() {
			var t = Ct.iteratee || fr,
				t = t === fr ? Ce : t;
			return arguments.length ? t(arguments[0], arguments[1]) : t
		}
		function Hi(t, e) {
			var i = t.__data__,
				n = typeof e;
			return ("string" == n || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== e : null === e) ? i["string" == typeof e ? "string" : "hash"] : i.map
		}
		function Wi(t) {
			for (var e = sr(t), i = e.length; i--;) {
				var n = e[i],
					r = t[n];
				e[i] = [n, r, r === r && !Xn(r)]
			}
			return e
		}
		function Fi(t, e) {
			var i = null == t ? $ : t[e];
			return Se(i) ? i : $
		}
		function Xi(t) {
			return Fr(Object(t))
		}
		function $i(t) {
			return Nr.call(t)
		}
		function Yi(t, e, i) {
			e = tn(e, t) ? [e] : ii(e);
			for (var n, r = -1, o = e.length; ++r < o;) {
				var s = an(e[r]);
				if (!(n = null != t && i(t, s))) break;
				t = t[s]
			}
			return n ? n : (o = t ? t.length : 0, !! o && Fn(o) && Qi(s, o) && (ys(t) || qn(t) || Bn(t)))
		}
		function Gi(t) {
			var e = t.length,
				i = t.constructor(e);
			return e && "string" == typeof t[0] && Er.call(t, "index") && (i.index = t.index, i.input = t.input), i
		}
		function Ui(t) {
			return "function" != typeof t.constructor || nn(t) ? {} : re(Vr(Object(t)))
		}
		function qi(i, n, r, o) {
			var s = i.constructor;
			switch (n) {
			case "[object ArrayBuffer]":
				return oi(i);
			case "[object Boolean]":
			case "[object Date]":
				return new s(+i);
			case "[object DataView]":
				return n = o ? oi(i.buffer) : i.buffer, new i.constructor(n, i.byteOffset, i.byteLength);
			case "[object Float32Array]":
			case "[object Float64Array]":
			case "[object Int8Array]":
			case "[object Int16Array]":
			case "[object Int32Array]":
			case "[object Uint8Array]":
			case "[object Uint8ClampedArray]":
			case "[object Uint16Array]":
			case "[object Uint32Array]":
				return n = o ? oi(i.buffer) : i.buffer, new i.constructor(n, i.byteOffset, i.length);
			case "[object Map]":
				return n = o ? r(R(i), !0) : R(i), p(n, t, new i.constructor);
			case "[object Number]":
			case "[object String]":
				return new s(i);
			case "[object RegExp]":
				return n = new i.constructor(i.source, ft.exec(i)), n.lastIndex = i.lastIndex, n;
			case "[object Set]":
				return n = o ? r(j(i), !0) : j(i), p(n, e, new i.constructor);
			case "[object Symbol]":
				return ko ? Object(ko.call(i)) : {}
			}
		}
		function Vi(t) {
			var e = t ? t.length : $;
			return Fn(e) && (ys(t) || qn(t) || Bn(t)) ? A(e, String) : null
		}
		function Zi(t) {
			return ys(t) || Bn(t)
		}
		function Ki(t) {
			return ys(t) && !(2 == t.length && !Hn(t[0]))
		}
		function Qi(t, e) {
			return e = null == e ? 9007199254740991 : e, !! e && ("number" == typeof t || xt.test(t)) && t > -1 && 0 == t % 1 && e > t
		}
		function Ji(t, e, i) {
			if (!Xn(i)) return !1;
			var n = typeof e;
			return ("number" == n ? Rn(i) && Qi(e, i.length) : "string" == n && e in i) ? On(i[e], t) : !1
		}
		function tn(t, e) {
			if (ys(t)) return !1;
			var i = typeof t;
			return "number" == i || "symbol" == i || "boolean" == i || null == t || Vn(t) ? !0 : rt.test(t) || !nt.test(t) || null != e && t in Object(e)
		}
		function en(t) {
			var e = Ri(t),
				i = Ct[e];
			return "function" == typeof i && e in Rt.prototype ? t === i ? !0 : (e = Po(i), !! e && t === e[0]) : !1
		}
		function nn(t) {
			var e = t && t.constructor;
			return t === ("function" == typeof e && e.prototype || Tr)
		}
		function rn(t, e) {
			return function(i) {
				return null == i ? !1 : i[t] === e && (e !== $ || t in Object(i))
			}
		}
		function on(t, e, i, n, r, o) {
			return Xn(t) && Xn(e) && Ee(t, e, $, on, o.set(e, t)), t
		}
		function sn(t, e) {
			return 1 == e.length ? t : fe(t, Xe(e, 0, -1))
		}
		function an(t) {
			if ("string" == typeof t || Vn(t)) return t;
			var e = t + "";
			return "0" == e && 1 / t == -Y ? "-0" : e
		}
		function ln(t) {
			if (null != t) {
				try {
					return Pr.call(t)
				} catch (e) {}
				return t + ""
			}
			return ""
		}
		function cn(t) {
			if (t instanceof Rt) return t.clone();
			var e = new Bt(t.__wrapped__, t.__chain__);
			return e.__actions__ = ci(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
		}
		function hn(t, e, i) {
			var n = t ? t.length : 0;
			return n ? (e = i || e === $ ? 1 : Jn(e), Xe(t, 0 > e ? 0 : e, n)) : []
		}
		function un(t, e, i) {
			var n = t ? t.length : 0;
			return n ? (e = i || e === $ ? 1 : Jn(e), e = n - e, Xe(t, 0, 0 > e ? 0 : e)) : []
		}
		function pn(t, e, i) {
			var n = t ? t.length : 0;
			return n ? (i = null == i ? 0 : Jn(i), 0 > i && (i = Jr(n + i, 0)), m(t, ji(e, 3), i)) : -1
		}
		function dn(t, e, i) {
			var n = t ? t.length : 0;
			if (!n) return -1;
			var r = n - 1;
			return i !== $ && (r = Jn(i), r = 0 > i ? Jr(n + r, 0) : to(r, n - 1)), m(t, ji(e, 3), r, !0)
		}
		function fn(t) {
			return t && t.length ? t[0] : $
		}
		function gn(t) {
			var e = t ? t.length : 0;
			return e ? t[e - 1] : $
		}
		function mn(t, e) {
			return t && t.length && e && e.length ? ze(t, e) : t
		}
		function vn(t) {
			return t ? ro.call(t) : t
		}
		function yn(t) {
			if (!t || !t.length) return [];
			var e = 0;
			return t = a(t, function(t) {
				return zn(t) ? (e = Jr(t.length, e), !0) : void 0
			}), A(e, function(e) {
				return h(t, Be(e))
			})
		}
		function bn(t, e) {
			if (!t || !t.length) return [];
			var n = yn(t);
			return null == e ? n : h(n, function(t) {
				return i(e, $, t)
			})
		}
		function xn(t) {
			return t = Ct(t), t.__chain__ = !0, t
		}
		function wn(t, e) {
			return e(t)
		}
		function kn() {
			return this
		}
		function An(t, e) {
			return (ys(t) ? r : So)(t, ji(e, 3))
		}
		function Sn(t, e) {
			return (ys(t) ? o : Co)(t, ji(e, 3))
		}
		function Cn(t, e) {
			return (ys(t) ? h : Me)(t, ji(e, 3))
		}
		function Tn(t, e, i) {
			var n = -1,
				r = Kn(t),
				o = r.length,
				s = o - 1;
			for (e = (i ? Ji(t, e, i) : e === $) ? 1 : ee(Jn(e), 0, o); ++n < e;) t = He(n, s), i = r[t], r[t] = r[n], r[n] = i;
			return r.length = e, r
		}
		function _n() {
			return xr.now()
		}
		function Mn(t, e, i) {
			return e = i ? $ : e, e = t && null == e ? t.length : e, Ni(t, 128, $, $, $, $, e)
		}
		function Ln(t, e) {
			var i;
			if ("function" != typeof e) throw new Sr("Expected a function");
			return t = Jn(t), function() {
				return 0 < --t && (i = e.apply(this, arguments)), 1 >= t && (e = $), i
			}
		}
		function Pn(t, e, i) {
			return e = i ? $ : e, t = Ni(t, 8, $, $, $, $, $, e), t.placeholder = Pn.placeholder, t
		}
		function En(t, e, i) {
			return e = i ? $ : e, t = Ni(t, 16, $, $, $, $, $, e), t.placeholder = En.placeholder, t
		}
		function Dn(t, e, i) {
			function n(e) {
				var i = l,
					n = c;
				return l = c = $, f = e, u = t.apply(n, i)
			}
			function r(t) {
				var i = t - d;
				return t -= f, d === $ || i >= e || 0 > i || m && t >= h
			}
			function o() {
				var t = _n();
				if (r(t)) return s(t);
				var i;
				i = t - f, t = e - (t - d), i = m ? to(t, h - i) : t, p = St(o, i)
			}
			function s(t) {
				return p = $, v && l ? n(t) : (l = c = $, u)
			}
			function a() {
				var t = _n(),
					i = r(t);
				if (l = arguments, c = this, d = t, i) {
					if (p === $) return f = t = d, p = St(o, e), g ? n(t) : u;
					if (m) return p = St(o, e), n(d)
				}
				return p === $ && (p = St(o, e)), u
			}
			var l, c, h, u, p, d, f = 0,
				g = !1,
				m = !1,
				v = !0;
			if ("function" != typeof t) throw new Sr("Expected a function");
			return e = er(e) || 0, Xn(i) && (g = !! i.leading, h = (m = "maxWait" in i) ? Jr(er(i.maxWait) || 0, e) : h, v = "trailing" in i ? !! i.trailing : v), a.cancel = function() {
				f = 0, l = d = c = p = $
			}, a.flush = function() {
				return p === $ ? u : s(_n())
			}, a
		}
		function In(t, e) {
			function i() {
				var n = arguments,
					r = e ? e.apply(this, n) : n[0],
					o = i.cache;
				return o.has(r) ? o.get(r) : (n = t.apply(this, n), i.cache = o.set(r, n), n)
			}
			if ("function" != typeof t || e && "function" != typeof e) throw new Sr("Expected a function");
			return i.cache = new(In.Cache || Ft), i
		}
		function Nn(t, e) {
			if ("function" != typeof t) throw new Sr("Expected a function");
			return e = Jr(e === $ ? t.length - 1 : Jn(e), 0), function() {
				for (var n = arguments, r = -1, o = Jr(n.length - e, 0), s = Array(o); ++r < o;) s[r] = n[e + r];
				switch (e) {
				case 0:
					return t.call(this, s);
				case 1:
					return t.call(this, n[0], s);
				case 2:
					return t.call(this, n[0], n[1], s)
				}
				for (o = Array(e + 1), r = -1; ++r < e;) o[r] = n[r];
				return o[e] = s, i(t, this, o)
			}
		}
		function On(t, e) {
			return t === e || t !== t && e !== e
		}
		function Bn(t) {
			return zn(t) && Er.call(t, "callee") && (!Yr.call(t, "callee") || "[object Arguments]" == Nr.call(t))
		}
		function Rn(t) {
			return null != t && Fn(Eo(t)) && !Hn(t)
		}
		function zn(t) {
			return $n(t) && Rn(t)
		}
		function jn(t) {
			return $n(t) ? "[object Error]" == Nr.call(t) || "string" == typeof t.message && "string" == typeof t.name : !1
		}
		function Hn(t) {
			return t = Xn(t) ? Nr.call(t) : "", "[object Function]" == t || "[object GeneratorFunction]" == t
		}
		function Wn(t) {
			return "number" == typeof t && t == Jn(t)
		}
		function Fn(t) {
			return "number" == typeof t && t > -1 && 0 == t % 1 && 9007199254740991 >= t
		}
		function Xn(t) {
			var e = typeof t;
			return !!t && ("object" == e || "function" == e)
		}
		function $n(t) {
			return !!t && "object" == typeof t
		}
		function Yn(t) {
			return "number" == typeof t || $n(t) && "[object Number]" == Nr.call(t)
		}
		function Gn(t) {
			return !$n(t) || "[object Object]" != Nr.call(t) || O(t) ? !1 : (t = Vr(Object(t)), null === t ? !0 : (t = Er.call(t, "constructor") && t.constructor, "function" == typeof t && t instanceof t && Pr.call(t) == Ir))
		}
		function Un(t) {
			return Xn(t) && "[object RegExp]" == Nr.call(t)
		}
		function qn(t) {
			return "string" == typeof t || !ys(t) && $n(t) && "[object String]" == Nr.call(t)
		}
		function Vn(t) {
			return "symbol" == typeof t || $n(t) && "[object Symbol]" == Nr.call(t)
		}
		function Zn(t) {
			return $n(t) && Fn(t.length) && !! Nt[Nr.call(t)]
		}
		function Kn(t) {
			if (!t) return [];
			if (Rn(t)) return qn(t) ? t.match(Lt) : ci(t);
			if (Xr && t[Xr]) return B(t[Xr]());
			var e = $i(t);
			return ("[object Map]" == e ? R : "[object Set]" == e ? j : lr)(t)
		}
		function Qn(t) {
			return t ? (t = er(t), t === Y || t === -Y ? 1.7976931348623157e308 * (0 > t ? -1 : 1) : t === t ? t : 0) : 0 === t ? t : 0
		}
		function Jn(t) {
			t = Qn(t);
			var e = t % 1;
			return t === t ? e ? t - e : t : 0
		}
		function tr(t) {
			return t ? ee(Jn(t), 0, 4294967295) : 0
		}
		function er(t) {
			if ("number" == typeof t) return t;
			if (Vn(t)) return G;
			if (Xn(t) && (t = Hn(t.valueOf) ? t.valueOf() : t, t = Xn(t) ? t + "" : t), "string" != typeof t) return 0 === t ? t : +t;
			t = t.replace(lt, "");
			var e = vt.test(t);
			return e || bt.test(t) ? Wt(t.slice(2), e ? 2 : 8) : mt.test(t) ? G : +t
		}
		function ir(t) {
			return hi(t, ar(t))
		}
		function nr(t) {
			return null == t ? "" : Ve(t)
		}
		function rr(t, e, i) {
			return t = null == t ? $ : fe(t, e), t === $ ? i : t
		}
		function or(t, e) {
			return null != t && Yi(t, e, ye)
		}
		function sr(t) {
			var e = nn(t);
			if (!e && !Rn(t)) return Qr(Object(t));
			var i, n = Vi(t),
				r = !! n,
				n = n || [],
				o = n.length;
			for (i in t)!ve(t, i) || r && ("length" == i || Qi(i, o)) || e && "constructor" == i || n.push(i);
			return n
		}
		function ar(t) {
			for (var e = -1, i = nn(t), n = Te(t), r = n.length, o = Vi(t), s = !! o, o = o || [], a = o.length; ++e < r;) {
				var l = n[e];
				s && ("length" == l || Qi(l, a)) || "constructor" == l && (i || !Er.call(t, l)) || o.push(l)
			}
			return o
		}
		function lr(t) {
			return t ? T(t, sr(t)) : []
		}
		function cr(t) {
			return Ys(nr(t).toLowerCase())
		}
		function hr(t) {
			return (t = nr(t)) && t.replace(wt, E).replace(Mt, "")
		}
		function ur(t, e, i) {
			return t = nr(t), e = i ? $ : e, e === $ && (e = Dt.test(t) ? Pt : ut), t.match(e) || []
		}
		function pr(t) {
			return function() {
				return t
			}
		}
		function dr(t) {
			return t
		}
		function fr(t) {
			return Ce("function" == typeof t ? t : ie(t, !0))
		}
		function gr(t, e, i) {
			var n = sr(e),
				o = de(e, n);
			null != i || Xn(e) && (o.length || !n.length) || (i = e, e = t, t = this, o = de(e, sr(e)));
			var s = !(Xn(i) && "chain" in i && !i.chain),
				a = Hn(t);
			return r(o, function(i) {
				var n = e[i];
				t[i] = n, a && (t.prototype[i] = function() {
					var e = this.__chain__;
					if (s || e) {
						var i = t(this.__wrapped__);
						return (i.__actions__ = ci(this.__actions__)).push({
							func: n,
							args: arguments,
							thisArg: t
						}), i.__chain__ = e, i
					}
					return n.apply(t, u([this.value()], arguments))
				})
			}), t
		}
		function mr() {}
		function vr(t) {
			return tn(t) ? Be(an(t)) : Re(t)
		}
		function yr() {
			return []
		}
		function br() {
			return !1
		}
		P = P ? qt.defaults({}, P, qt.pick(Ut, It)) : Ut;
		var xr = P.Date,
			wr = P.Error,
			kr = P.Math,
			Ar = P.RegExp,
			Sr = P.TypeError,
			Cr = P.Array.prototype,
			Tr = P.Object.prototype,
			_r = P.String.prototype,
			Mr = P["__core-js_shared__"],
			Lr = function() {
				var t = /[^.]+$/.exec(Mr && Mr.keys && Mr.keys.IE_PROTO || "");
				return t ? "Symbol(src)_1." + t : ""
			}(),
			Pr = P.Function.prototype.toString,
			Er = Tr.hasOwnProperty,
			Dr = 0,
			Ir = Pr.call(Object),
			Nr = Tr.toString,
			Or = Ut._,
			Br = Ar("^" + Pr.call(Er).replace(st, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
			Rr = $t ? P.Buffer : $,
			zr = P.Reflect,
			jr = P.Symbol,
			Hr = P.Uint8Array,
			Wr = zr ? zr.f : $,
			Fr = Object.getOwnPropertySymbols,
			Xr = "symbol" == typeof(Xr = jr && jr.iterator) ? Xr : $,
			$r = Object.create,
			Yr = Tr.propertyIsEnumerable,
			Gr = Cr.splice,
			Ur = kr.ceil,
			qr = kr.floor,
			Vr = Object.getPrototypeOf,
			Zr = P.isFinite,
			Kr = Cr.join,
			Qr = Object.keys,
			Jr = kr.max,
			to = kr.min,
			eo = P.parseInt,
			io = kr.random,
			no = _r.replace,
			ro = Cr.reverse,
			oo = _r.split,
			so = Fi(P, "DataView"),
			ao = Fi(P, "Map"),
			lo = Fi(P, "Promise"),
			co = Fi(P, "Set"),
			ho = Fi(P, "WeakMap"),
			uo = Fi(Object, "create"),
			po = ho && new ho,
			fo = !Yr.call({
				valueOf: 1
			}, "valueOf"),
			go = {},
			mo = ln(so),
			vo = ln(ao),
			yo = ln(lo),
			bo = ln(co),
			xo = ln(ho),
			wo = jr ? jr.prototype : $,
			ko = wo ? wo.valueOf : $,
			Ao = wo ? wo.toString : $;
		Ct.templateSettings = {
			escape: tt,
			evaluate: et,
			interpolate: it,
			variable: "",
			imports: {
				_: Ct
			}
		}, Ct.prototype = Tt.prototype, Ct.prototype.constructor = Ct, Bt.prototype = re(Tt.prototype), Bt.prototype.constructor = Bt, Rt.prototype = re(Tt.prototype), Rt.prototype.constructor = Rt, zt.prototype.clear = function() {
			this.__data__ = uo ? uo(null) : {}
		}, zt.prototype["delete"] = function(t) {
			return this.has(t) && delete this.__data__[t]
		}, zt.prototype.get = function(t) {
			var e = this.__data__;
			return uo ? (t = e[t], "__lodash_hash_undefined__" === t ? $ : t) : Er.call(e, t) ? e[t] : $
		}, zt.prototype.has = function(t) {
			var e = this.__data__;
			return uo ? e[t] !== $ : Er.call(e, t)
		}, zt.prototype.set = function(t, e) {
			return this.__data__[t] = uo && e === $ ? "__lodash_hash_undefined__" : e, this
		}, jt.prototype.clear = function() {
			this.__data__ = []
		}, jt.prototype["delete"] = function(t) {
			var e = this.__data__;
			return t = Kt(e, t), 0 > t ? !1 : (t == e.length - 1 ? e.pop() : Gr.call(e, t, 1), !0)
		}, jt.prototype.get = function(t) {
			var e = this.__data__;
			return t = Kt(e, t), 0 > t ? $ : e[t][1]
		}, jt.prototype.has = function(t) {
			return -1 < Kt(this.__data__, t)
		}, jt.prototype.set = function(t, e) {
			var i = this.__data__,
				n = Kt(i, t);
			return 0 > n ? i.push([t, e]) : i[n][1] = e, this
		}, Ft.prototype.clear = function() {
			this.__data__ = {
				hash: new zt,
				map: new(ao || jt),
				string: new zt
			}
		}, Ft.prototype["delete"] = function(t) {
			return Hi(this, t)["delete"](t)
		}, Ft.prototype.get = function(t) {
			return Hi(this, t).get(t)
		}, Ft.prototype.has = function(t) {
			return Hi(this, t).has(t)
		}, Ft.prototype.set = function(t, e) {
			return Hi(this, t).set(t, e), this
		}, Xt.prototype.add = Xt.prototype.push = function(t) {
			return this.__data__.set(t, "__lodash_hash_undefined__"), this
		}, Xt.prototype.has = function(t) {
			return this.__data__.has(t)
		}, Yt.prototype.clear = function() {
			this.__data__ = new jt
		}, Yt.prototype["delete"] = function(t) {
			return this.__data__["delete"](t)
		}, Yt.prototype.get = function(t) {
			return this.__data__.get(t)
		}, Yt.prototype.has = function(t) {
			return this.__data__.has(t)
		}, Yt.prototype.set = function(t, e) {
			var i = this.__data__;
			return i instanceof jt && 200 == i.__data__.length && (i = this.__data__ = new Ft(i.__data__)), i.set(t, e), this
		};
		var So = fi(ue),
			Co = fi(pe, !0),
			To = gi(),
			_o = gi(!0);
		Wr && !Yr.call({
			valueOf: 1
		}, "valueOf") && (Te = function(t) {
			return B(Wr(t))
		});
		var Mo = po ?
		function(t, e) {
			return po.set(t, e), t
		} : dr, Lo = co && 1 / j(new co([, -0]))[1] == Y ?
		function(t) {
			return new co(t)
		} : mr, Po = po ?
		function(t) {
			return po.get(t)
		} : mr, Eo = Be("length");
		Fr || (Xi = yr);
		var Do = Fr ?
		function(t) {
			for (var e = []; t;) u(e, Xi(t)), t = Vr(Object(t));
			return e
		} : Xi;
		(so && "[object DataView]" != $i(new so(new ArrayBuffer(1))) || ao && "[object Map]" != $i(new ao) || lo && "[object Promise]" != $i(lo.resolve()) || co && "[object Set]" != $i(new co) || ho && "[object WeakMap]" != $i(new ho)) && ($i = function(t) {
			var e = Nr.call(t);
			if (t = (t = "[object Object]" == e ? t.constructor : $) ? ln(t) : $) switch (t) {
			case mo:
				return "[object DataView]";
			case vo:
				return "[object Map]";
			case yo:
				return "[object Promise]";
			case bo:
				return "[object Set]";
			case xo:
				return "[object WeakMap]"
			}
			return e
		});
		var Io = Mr ? Hn : br,
			No = function() {
				var t = 0,
					e = 0;
				return function(i, n) {
					var r = _n(),
						o = 16 - (r - e);
					if (e = r, o > 0) {
						if (150 <= ++t) return i
					} else t = 0;
					return Mo(i, n)
				}
			}(),
			Oo = In(function(t) {
				var e = [];
				return nr(t).replace(ot, function(t, i, n, r) {
					e.push(n ? r.replace(pt, "$1") : i || t)
				}), e
			}),
			Bo = Nn(function(t, e) {
				return zn(t) ? se(t, he(e, 1, zn, !0)) : []
			}),
			Ro = Nn(function(t, e) {
				var i = gn(e);
				return zn(i) && (i = $), zn(t) ? se(t, he(e, 1, zn, !0), ji(i)) : []
			}),
			zo = Nn(function(t, e) {
				var i = gn(e);
				return zn(i) && (i = $), zn(t) ? se(t, he(e, 1, zn, !0), $, i) : []
			}),
			jo = Nn(function(t) {
				var e = h(t, ei);
				return e.length && e[0] === t[0] ? be(e) : []
			}),
			Ho = Nn(function(t) {
				var e = gn(t),
					i = h(t, ei);
				return e === gn(i) ? e = $ : i.pop(), i.length && i[0] === t[0] ? be(i, ji(e)) : []
			}),
			Wo = Nn(function(t) {
				var e = gn(t),
					i = h(t, ei);
				return e === gn(i) ? e = $ : i.pop(), i.length && i[0] === t[0] ? be(i, $, e) : []
			}),
			Fo = Nn(mn),
			Xo = Nn(function(t, e) {
				e = he(e, 1);
				var i = t ? t.length : 0,
					n = te(t, e);
				return je(t, h(e, function(t) {
					return Qi(t, i) ? +t : t
				}).sort(si)), n
			}),
			$o = Nn(function(t) {
				return Ze(he(t, 1, zn, !0))
			}),
			Yo = Nn(function(t) {
				var e = gn(t);
				return zn(e) && (e = $), Ze(he(t, 1, zn, !0), ji(e))
			}),
			Go = Nn(function(t) {
				var e = gn(t);
				return zn(e) && (e = $), Ze(he(t, 1, zn, !0), $, e)
			}),
			Uo = Nn(function(t, e) {
				return zn(t) ? se(t, e) : []
			}),
			qo = Nn(function(t) {
				return Je(a(t, zn))
			}),
			Vo = Nn(function(t) {
				var e = gn(t);
				return zn(e) && (e = $), Je(a(t, zn), ji(e))
			}),
			Zo = Nn(function(t) {
				var e = gn(t);
				return zn(e) && (e = $), Je(a(t, zn), $, e)
			}),
			Ko = Nn(yn),
			Qo = Nn(function(t) {
				var e = t.length,
					e = e > 1 ? t[e - 1] : $,
					e = "function" == typeof e ? (t.pop(), e) : $;
				return bn(t, e)
			}),
			Jo = Nn(function(t) {
				function e(e) {
					return te(e, t)
				}
				t = he(t, 1);
				var i = t.length,
					n = i ? t[0] : 0,
					r = this.__wrapped__;
				return !(i > 1 || this.__actions__.length) && r instanceof Rt && Qi(n) ? (r = r.slice(n, +n + (i ? 1 : 0)), r.__actions__.push({
					func: wn,
					args: [e],
					thisArg: $
				}), new Bt(r, this.__chain__).thru(function(t) {
					return i && !t.length && t.push($), t
				})) : this.thru(e)
			}),
			ts = pi(function(t, e, i) {
				Er.call(t, i) ? ++t[i] : t[i] = 1
			}),
			es = wi(pn),
			is = wi(dn),
			ns = pi(function(t, e, i) {
				Er.call(t, i) ? t[i].push(e) : t[i] = [e]
			}),
			rs = Nn(function(t, e, n) {
				var r = -1,
					o = "function" == typeof e,
					s = tn(e),
					a = Rn(t) ? Array(t.length) : [];
				return So(t, function(t) {
					var l = o ? e : s && null != t ? t[e] : $;
					a[++r] = l ? i(l, t, n) : we(t, e, n)
				}), a
			}),
			os = pi(function(t, e, i) {
				t[i] = e
			}),
			ss = pi(function(t, e, i) {
				t[i ? 0 : 1].push(e)
			}, function() {
				return [[], []]
			}),
			as = Nn(function(t, e) {
				if (null == t) return [];
				var i = e.length;
				return i > 1 && Ji(t, e[0], e[1]) ? e = [] : i > 2 && Ji(e[0], e[1], e[2]) && (e = [e[0]]), e = 1 == e.length && ys(e[0]) ? e[0] : he(e, 1, Ki), Ie(t, e, [])
			}),
			ls = Nn(function(t, e, i) {
				var n = 1;
				if (i.length) var r = z(i, zi(ls)),
					n = 32 | n;
				return Ni(t, n, e, i, r)
			}),
			cs = Nn(function(t, e, i) {
				var n = 3;
				if (i.length) var r = z(i, zi(cs)),
					n = 32 | n;
				return Ni(e, n, t, i, r)
			}),
			hs = Nn(function(t, e) {
				return oe(t, 1, e)
			}),
			us = Nn(function(t, e, i) {
				return oe(t, er(e) || 0, i)
			});
		In.Cache = Ft;
		var ps = Nn(function(t, e) {
			e = 1 == e.length && ys(e[0]) ? h(e[0], C(ji())) : h(he(e, 1, Ki), C(ji()));
			var n = e.length;
			return Nn(function(r) {
				for (var o = -1, s = to(r.length, n); ++o < s;) r[o] = e[o].call(this, r[o]);
				return i(t, this, r)
			})
		}),
			ds = Nn(function(t, e) {
				var i = z(e, zi(ds));
				return Ni(t, 32, $, e, i)
			}),
			fs = Nn(function(t, e) {
				var i = z(e, zi(fs));
				return Ni(t, 64, $, e, i)
			}),
			gs = Nn(function(t, e) {
				return Ni(t, 256, $, $, $, he(e, 1))
			}),
			ms = Pi(me),
			vs = Pi(function(t, e) {
				return t >= e
			}),
			ys = Array.isArray,
			bs = Rr ?
		function(t) {
			return t instanceof Rr
		} : br, xs = Pi(_e), ws = Pi(function(t, e) {
			return e >= t
		}), ks = di(function(t, e) {
			if (fo || nn(e) || Rn(e)) hi(e, sr(e), t);
			else for (var i in e) Er.call(e, i) && Zt(t, i, e[i])
		}), As = di(function(t, e) {
			if (fo || nn(e) || Rn(e)) hi(e, ar(e), t);
			else for (var i in e) Zt(t, i, e[i])
		}), Ss = di(function(t, e, i, n) {
			hi(e, ar(e), t, n)
		}), Cs = di(function(t, e, i, n) {
			hi(e, sr(e), t, n)
		}), Ts = Nn(function(t, e) {
			return te(t, he(e, 1))
		}), _s = Nn(function(t) {
			return t.push($, Gt), i(Ss, $, t)
		}), Ms = Nn(function(t) {
			return t.push($, on), i(Is, $, t)
		}), Ls = Si(function(t, e, i) {
			t[e] = i
		}, pr(dr)), Ps = Si(function(t, e, i) {
			Er.call(t, e) ? t[e].push(i) : t[e] = [i]
		}, ji), Es = Nn(we), Ds = di(function(t, e, i) {
			Ee(t, e, i)
		}), Is = di(function(t, e, i, n) {
			Ee(t, e, i, n)
		}), Ns = Nn(function(t, e) {
			return null == t ? {} : (e = h(he(e, 1), an), Ne(t, se(ge(t, ar, Do), e)))
		}), Os = Nn(function(t, e) {
			return null == t ? {} : Ne(t, h(he(e, 1), an))
		}), Bs = Ii(sr), Rs = Ii(ar), zs = yi(function(t, e, i) {
			return e = e.toLowerCase(), t + (i ? cr(e) : e)
		}), js = yi(function(t, e, i) {
			return t + (i ? "-" : "") + e.toLowerCase()
		}), Hs = yi(function(t, e, i) {
			return t + (i ? " " : "") + e.toLowerCase()
		}), Ws = vi("toLowerCase"), Fs = yi(function(t, e, i) {
			return t + (i ? "_" : "") + e.toLowerCase()
		}), Xs = yi(function(t, e, i) {
			return t + (i ? " " : "") + Ys(e)
		}), $s = yi(function(t, e, i) {
			return t + (i ? " " : "") + e.toUpperCase()
		}), Ys = vi("toUpperCase"), Gs = Nn(function(t, e) {
			try {
				return i(t, $, e)
			} catch (n) {
				return jn(n) ? n : new wr(n)
			}
		}), Us = Nn(function(t, e) {
			return r(he(e, 1), function(e) {
				e = an(e), t[e] = ls(t[e], t)
			}), t
		}), qs = ki(), Vs = ki(!0), Zs = Nn(function(t, e) {
			return function(i) {
				return we(i, t, e)
			}
		}), Ks = Nn(function(t, e) {
			return function(i) {
				return we(t, i, e)
			}
		}), Qs = Ti(h), Js = Ti(s), ta = Ti(f), ea = Li(), ia = Li(!0), na = Ci(function(t, e) {
			return t + e
		}), ra = Di("ceil"), oa = Ci(function(t, e) {
			return t / e
		}), sa = Di("floor"), aa = Ci(function(t, e) {
			return t * e
		}), la = Di("round"), ca = Ci(function(t, e) {
			return t - e
		});
		return Ct.after = function(t, e) {
			if ("function" != typeof e) throw new Sr("Expected a function");
			return t = Jn(t), function() {
				return 1 > --t ? e.apply(this, arguments) : void 0
			}
		}, Ct.ary = Mn, Ct.assign = ks, Ct.assignIn = As, Ct.assignInWith = Ss, Ct.assignWith = Cs, Ct.at = Ts, Ct.before = Ln, Ct.bind = ls, Ct.bindAll = Us, Ct.bindKey = cs, Ct.castArray = function() {
			if (!arguments.length) return [];
			var t = arguments[0];
			return ys(t) ? t : [t]
		}, Ct.chain = xn, Ct.chunk = function(t, e, i) {
			if (e = (i ? Ji(t, e, i) : e === $) ? 1 : Jr(Jn(e), 0), i = t ? t.length : 0, !i || 1 > e) return [];
			for (var n = 0, r = 0, o = Array(Ur(i / e)); i > n;) o[r++] = Xe(t, n, n += e);
			return o
		}, Ct.compact = function(t) {
			for (var e = -1, i = t ? t.length : 0, n = 0, r = []; ++e < i;) {
				var o = t[e];
				o && (r[n++] = o)
			}
			return r
		}, Ct.concat = function() {
			for (var t = arguments.length, e = Array(t ? t - 1 : 0), i = arguments[0], n = t; n--;) e[n - 1] = arguments[n];
			return t ? u(ys(i) ? ci(i) : [i], he(e, 1)) : []
		}, Ct.cond = function(t) {
			var e = t ? t.length : 0,
				n = ji();
			return t = e ? h(t, function(t) {
				if ("function" != typeof t[1]) throw new Sr("Expected a function");
				return [n(t[0]), t[1]]
			}) : [], Nn(function(n) {
				for (var r = -1; ++r < e;) {
					var o = t[r];
					if (i(o[0], this, n)) return i(o[1], this, n)
				}
			})
		}, Ct.conforms = function(t) {
			return ne(ie(t, !0))
		}, Ct.constant = pr, Ct.countBy = ts, Ct.create = function(t, e) {
			var i = re(t);
			return e ? Jt(i, e) : i
		}, Ct.curry = Pn, Ct.curryRight = En, Ct.debounce = Dn, Ct.defaults = _s, Ct.defaultsDeep = Ms, Ct.defer = hs, Ct.delay = us, Ct.difference = Bo, Ct.differenceBy = Ro, Ct.differenceWith = zo, Ct.drop = hn, Ct.dropRight = un, Ct.dropRightWhile = function(t, e) {
			return t && t.length ? Ke(t, ji(e, 3), !0, !0) : []
		}, Ct.dropWhile = function(t, e) {
			return t && t.length ? Ke(t, ji(e, 3), !0) : []
		}, Ct.fill = function(t, e, i, n) {
			var r = t ? t.length : 0;
			if (!r) return [];
			for (i && "number" != typeof i && Ji(t, e, i) && (i = 0, n = r), r = t.length, i = Jn(i), 0 > i && (i = -i > r ? 0 : r + i), n = n === $ || n > r ? r : Jn(n), 0 > n && (n += r), n = i > n ? 0 : tr(n); n > i;) t[i++] = e;
			return t
		}, Ct.filter = function(t, e) {
			return (ys(t) ? a : ce)(t, ji(e, 3))
		}, Ct.flatMap = function(t, e) {
			return he(Cn(t, e), 1)
		}, Ct.flatMapDeep = function(t, e) {
			return he(Cn(t, e), Y)
		}, Ct.flatMapDepth = function(t, e, i) {
			return i = i === $ ? 1 : Jn(i), he(Cn(t, e), i)
		}, Ct.flatten = function(t) {
			return t && t.length ? he(t, 1) : []
		}, Ct.flattenDeep = function(t) {
			return t && t.length ? he(t, Y) : []
		}, Ct.flattenDepth = function(t, e) {
			return t && t.length ? (e = e === $ ? 1 : Jn(e), he(t, e)) : []
		}, Ct.flip = function(t) {
			return Ni(t, 512)
		}, Ct.flow = qs, Ct.flowRight = Vs, Ct.fromPairs = function(t) {
			for (var e = -1, i = t ? t.length : 0, n = {}; ++e < i;) {
				var r = t[e];
				n[r[0]] = r[1]
			}
			return n
		}, Ct.functions = function(t) {
			return null == t ? [] : de(t, sr(t))
		}, Ct.functionsIn = function(t) {
			return null == t ? [] : de(t, ar(t))
		}, Ct.groupBy = ns, Ct.initial = function(t) {
			return un(t, 1)
		}, Ct.intersection = jo, Ct.intersectionBy = Ho, Ct.intersectionWith = Wo, Ct.invert = Ls, Ct.invertBy = Ps, Ct.invokeMap = rs, Ct.iteratee = fr, Ct.keyBy = os, Ct.keys = sr, Ct.keysIn = ar, Ct.map = Cn, Ct.mapKeys = function(t, e) {
			var i = {};
			return e = ji(e, 3), ue(t, function(t, n, r) {
				i[e(t, n, r)] = t
			}), i
		}, Ct.mapValues = function(t, e) {
			var i = {};
			return e = ji(e, 3), ue(t, function(t, n, r) {
				i[n] = e(t, n, r)
			}), i
		}, Ct.matches = function(t) {
			return Le(ie(t, !0))
		}, Ct.matchesProperty = function(t, e) {
			return Pe(t, ie(e, !0))
		}, Ct.memoize = In, Ct.merge = Ds, Ct.mergeWith = Is, Ct.method = Zs, Ct.methodOf = Ks, Ct.mixin = gr, Ct.negate = function(t) {
			if ("function" != typeof t) throw new Sr("Expected a function");
			return function() {
				return !t.apply(this, arguments)
			}
		}, Ct.nthArg = function(t) {
			return t = Jn(t), Nn(function(e) {
				return De(e, t)
			})
		}, Ct.omit = Ns, Ct.omitBy = function(t, e) {
			return e = ji(e), Oe(t, function(t, i) {
				return !e(t, i)
			})
		}, Ct.once = function(t) {
			return Ln(2, t)
		}, Ct.orderBy = function(t, e, i, n) {
			return null == t ? [] : (ys(e) || (e = null == e ? [] : [e]), i = n ? $ : i, ys(i) || (i = null == i ? [] : [i]), Ie(t, e, i))
		}, Ct.over = Qs, Ct.overArgs = ps, Ct.overEvery = Js, Ct.overSome = ta, Ct.partial = ds, Ct.partialRight = fs, Ct.partition = ss, Ct.pick = Os, Ct.pickBy = function(t, e) {
			return null == t ? {} : Oe(t, ji(e))
		}, Ct.property = vr, Ct.propertyOf = function(t) {
			return function(e) {
				return null == t ? $ : fe(t, e)
			}
		}, Ct.pull = Fo, Ct.pullAll = mn, Ct.pullAllBy = function(t, e, i) {
			return t && t.length && e && e.length ? ze(t, e, ji(i)) : t
		}, Ct.pullAllWith = function(t, e, i) {
			return t && t.length && e && e.length ? ze(t, e, $, i) : t
		}, Ct.pullAt = Xo, Ct.range = ea, Ct.rangeRight = ia, Ct.rearg = gs, Ct.reject = function(t, e) {
			var i = ys(t) ? a : ce;
			return e = ji(e, 3), i(t, function(t, i, n) {
				return !e(t, i, n)
			})
		}, Ct.remove = function(t, e) {
			var i = [];
			if (!t || !t.length) return i;
			var n = -1,
				r = [],
				o = t.length;
			for (e = ji(e, 3); ++n < o;) {
				var s = t[n];
				e(s, n, t) && (i.push(s), r.push(n))
			}
			return je(t, r), i
		}, Ct.rest = Nn, Ct.reverse = vn, Ct.sampleSize = Tn, Ct.set = function(t, e, i) {
			return null == t ? t : Fe(t, e, i)
		}, Ct.setWith = function(t, e, i, n) {
			return n = "function" == typeof n ? n : $, null == t ? t : Fe(t, e, i, n)
		}, Ct.shuffle = function(t) {
			return Tn(t, 4294967295)
		}, Ct.slice = function(t, e, i) {
			var n = t ? t.length : 0;
			return n ? (i && "number" != typeof i && Ji(t, e, i) ? (e = 0, i = n) : (e = null == e ? 0 : Jn(e), i = i === $ ? n : Jn(i)), Xe(t, e, i)) : []
		}, Ct.sortBy = as, Ct.sortedUniq = function(t) {
			return t && t.length ? Ue(t) : []
		}, Ct.sortedUniqBy = function(t, e) {
			return t && t.length ? Ue(t, ji(e)) : []
		}, Ct.split = function(t, e, i) {
			return i && "number" != typeof i && Ji(t, e, i) && (e = i = $), i = i === $ ? 4294967295 : i >>> 0, i ? (t = nr(t)) && ("string" == typeof e || null != e && !Un(e)) && (e = Ve(e), "" == e && Et.test(t)) ? ni(t.match(Lt), 0, i) : oo.call(t, e, i) : []
		}, Ct.spread = function(t, e) {
			if ("function" != typeof t) throw new Sr("Expected a function");
			return e = e === $ ? 0 : Jr(Jn(e), 0), Nn(function(n) {
				var r = n[e];
				return n = ni(n, 0, e), r && u(n, r), i(t, this, n)
			})
		}, Ct.tail = function(t) {
			return hn(t, 1)
		}, Ct.take = function(t, e, i) {
			return t && t.length ? (e = i || e === $ ? 1 : Jn(e), Xe(t, 0, 0 > e ? 0 : e)) : []
		}, Ct.takeRight = function(t, e, i) {
			var n = t ? t.length : 0;
			return n ? (e = i || e === $ ? 1 : Jn(e), e = n - e, Xe(t, 0 > e ? 0 : e, n)) : []
		}, Ct.takeRightWhile = function(t, e) {
			return t && t.length ? Ke(t, ji(e, 3), !1, !0) : []
		}, Ct.takeWhile = function(t, e) {
			return t && t.length ? Ke(t, ji(e, 3)) : []
		}, Ct.tap = function(t, e) {
			return e(t), t
		}, Ct.throttle = function(t, e, i) {
			var n = !0,
				r = !0;
			if ("function" != typeof t) throw new Sr("Expected a function");
			return Xn(i) && (n = "leading" in i ? !! i.leading : n, r = "trailing" in i ? !! i.trailing : r), Dn(t, e, {
				leading: n,
				maxWait: e,
				trailing: r
			})
		}, Ct.thru = wn, Ct.toArray = Kn, Ct.toPairs = Bs, Ct.toPairsIn = Rs, Ct.toPath = function(t) {
			return ys(t) ? h(t, an) : Vn(t) ? [t] : ci(Oo(t))
		}, Ct.toPlainObject = ir, Ct.transform = function(t, e, i) {
			var n = ys(t) || Zn(t);
			if (e = ji(e, 4), null == i) if (n || Xn(t)) {
				var o = t.constructor;
				i = n ? ys(t) ? new o : [] : Hn(o) ? re(Vr(Object(t))) : {}
			} else i = {};
			return (n ? r : ue)(t, function(t, n, r) {
				return e(i, t, n, r)
			}), i
		}, Ct.unary = function(t) {
			return Mn(t, 1)
		}, Ct.union = $o, Ct.unionBy = Yo, Ct.unionWith = Go, Ct.uniq = function(t) {
			return t && t.length ? Ze(t) : []
		}, Ct.uniqBy = function(t, e) {
			return t && t.length ? Ze(t, ji(e)) : []
		}, Ct.uniqWith = function(t, e) {
			return t && t.length ? Ze(t, $, e) : []
		}, Ct.unset = function(t, e) {
			var i;
			if (null == t) i = !0;
			else {
				i = t;
				var n = e,
					n = tn(n, i) ? [n] : ii(n);
				i = sn(i, n), n = an(gn(n)), i = !(null != i && ve(i, n)) || delete i[n]
			}
			return i
		}, Ct.unzip = yn, Ct.unzipWith = bn, Ct.update = function(t, e, i) {
			return null == t ? t : Fe(t, e, ("function" == typeof i ? i : dr)(fe(t, e)), void 0)
		}, Ct.updateWith = function(t, e, i, n) {
			return n = "function" == typeof n ? n : $, null != t && (t = Fe(t, e, ("function" == typeof i ? i : dr)(fe(t, e)), n)), t
		}, Ct.values = lr, Ct.valuesIn = function(t) {
			return null == t ? [] : T(t, ar(t))
		}, Ct.without = Uo, Ct.words = ur, Ct.wrap = function(t, e) {
			return e = null == e ? dr : e, ds(e, t)
		}, Ct.xor = qo, Ct.xorBy = Vo, Ct.xorWith = Zo, Ct.zip = Ko, Ct.zipObject = function(t, e) {
			return ti(t || [], e || [], Zt)
		}, Ct.zipObjectDeep = function(t, e) {
			return ti(t || [], e || [], Fe)
		}, Ct.zipWith = Qo, Ct.entries = Bs, Ct.entriesIn = Rs, Ct.extend = As, Ct.extendWith = Ss, gr(Ct, Ct), Ct.add = na, Ct.attempt = Gs, Ct.camelCase = zs, Ct.capitalize = cr, Ct.ceil = ra, Ct.clamp = function(t, e, i) {
			return i === $ && (i = e, e = $), i !== $ && (i = er(i), i = i === i ? i : 0), e !== $ && (e = er(e), e = e === e ? e : 0), ee(er(t), e, i)
		}, Ct.clone = function(t) {
			return ie(t, !1, !0)
		}, Ct.cloneDeep = function(t) {
			return ie(t, !0, !0)
		}, Ct.cloneDeepWith = function(t, e) {
			return ie(t, !0, !0, e)
		}, Ct.cloneWith = function(t, e) {
			return ie(t, !1, !0, e)
		}, Ct.deburr = hr, Ct.divide = oa, Ct.endsWith = function(t, e, i) {
			t = nr(t), e = Ve(e);
			var n = t.length;
			return i = i === $ ? n : ee(Jn(i), 0, n), i -= e.length, i >= 0 && t.indexOf(e, i) == i
		}, Ct.eq = On, Ct.escape = function(t) {
			return (t = nr(t)) && J.test(t) ? t.replace(K, D) : t
		}, Ct.escapeRegExp = function(t) {
			return (t = nr(t)) && at.test(t) ? t.replace(st, "\\$&") : t
		}, Ct.every = function(t, e, i) {
			var n = ys(t) ? s : ae;
			return i && Ji(t, e, i) && (e = $), n(t, ji(e, 3))
		}, Ct.find = es, Ct.findIndex = pn, Ct.findKey = function(t, e) {
			return g(t, ji(e, 3), ue)
		}, Ct.findLast = is, Ct.findLastIndex = dn, Ct.findLastKey = function(t, e) {
			return g(t, ji(e, 3), pe)
		}, Ct.floor = sa, Ct.forEach = An, Ct.forEachRight = Sn, Ct.forIn = function(t, e) {
			return null == t ? t : To(t, ji(e, 3), ar)
		}, Ct.forInRight = function(t, e) {
			return null == t ? t : _o(t, ji(e, 3), ar)
		}, Ct.forOwn = function(t, e) {
			return t && ue(t, ji(e, 3))
		}, Ct.forOwnRight = function(t, e) {
			return t && pe(t, ji(e, 3))
		}, Ct.get = rr, Ct.gt = ms, Ct.gte = vs, Ct.has = function(t, e) {
			return null != t && Yi(t, e, ve)
		}, Ct.hasIn = or, Ct.head = fn, Ct.identity = dr, Ct.includes = function(t, e, i, n) {
			return t = Rn(t) ? t : lr(t), i = i && !n ? Jn(i) : 0, n = t.length, 0 > i && (i = Jr(n + i, 0)), qn(t) ? n >= i && -1 < t.indexOf(e, i) : !! n && -1 < v(t, e, i)
		}, Ct.indexOf = function(t, e, i) {
			var n = t ? t.length : 0;
			return n ? (i = null == i ? 0 : Jn(i), 0 > i && (i = Jr(n + i, 0)), v(t, e, i)) : -1
		}, Ct.inRange = function(t, e, i) {
			return e = er(e) || 0, i === $ ? (i = e, e = 0) : i = er(i) || 0, t = er(t), t >= to(e, i) && t < Jr(e, i)
		}, Ct.invoke = Es, Ct.isArguments = Bn, Ct.isArray = ys, Ct.isArrayBuffer = function(t) {
			return $n(t) && "[object ArrayBuffer]" == Nr.call(t)
		}, Ct.isArrayLike = Rn, Ct.isArrayLikeObject = zn, Ct.isBoolean = function(t) {
			return !0 === t || !1 === t || $n(t) && "[object Boolean]" == Nr.call(t)
		}, Ct.isBuffer = bs, Ct.isDate = function(t) {
			return $n(t) && "[object Date]" == Nr.call(t)
		}, Ct.isElement = function(t) {
			return !!t && 1 === t.nodeType && $n(t) && !Gn(t)
		}, Ct.isEmpty = function(t) {
			if (Rn(t) && (ys(t) || qn(t) || Hn(t.splice) || Bn(t) || bs(t))) return !t.length;
			if ($n(t)) {
				var e = $i(t);
				if ("[object Map]" == e || "[object Set]" == e) return !t.size
			}
			for (var i in t) if (Er.call(t, i)) return !1;
			return !(fo && sr(t).length)
		}, Ct.isEqual = function(t, e) {
			return ke(t, e)
		}, Ct.isEqualWith = function(t, e, i) {
			var n = (i = "function" == typeof i ? i : $) ? i(t, e) : $;
			return n === $ ? ke(t, e, i) : !! n
		}, Ct.isError = jn, Ct.isFinite = function(t) {
			return "number" == typeof t && Zr(t)
		}, Ct.isFunction = Hn, Ct.isInteger = Wn, Ct.isLength = Fn, Ct.isMap = function(t) {
			return $n(t) && "[object Map]" == $i(t)
		}, Ct.isMatch = function(t, e) {
			return t === e || Ae(t, e, Wi(e))
		}, Ct.isMatchWith = function(t, e, i) {
			return i = "function" == typeof i ? i : $, Ae(t, e, Wi(e), i)
		}, Ct.isNaN = function(t) {
			return Yn(t) && t != +t
		}, Ct.isNative = function(t) {
			if (Io(t)) throw new wr("This method is not supported with `core-js`. Try https://github.com/es-shims.");
			return Se(t)
		}, Ct.isNil = function(t) {
			return null == t
		}, Ct.isNull = function(t) {
			return null === t
		}, Ct.isNumber = Yn, Ct.isObject = Xn, Ct.isObjectLike = $n, Ct.isPlainObject = Gn, Ct.isRegExp = Un, Ct.isSafeInteger = function(t) {
			return Wn(t) && t >= -9007199254740991 && 9007199254740991 >= t
		}, Ct.isSet = function(t) {
			return $n(t) && "[object Set]" == $i(t)
		}, Ct.isString = qn, Ct.isSymbol = Vn, Ct.isTypedArray = Zn, Ct.isUndefined = function(t) {
			return t === $
		}, Ct.isWeakMap = function(t) {
			return $n(t) && "[object WeakMap]" == $i(t)
		}, Ct.isWeakSet = function(t) {
			return $n(t) && "[object WeakSet]" == Nr.call(t)
		}, Ct.join = function(t, e) {
			return t ? Kr.call(t, e) : ""
		}, Ct.kebabCase = js, Ct.last = gn, Ct.lastIndexOf = function(t, e, i) {
			var n = t ? t.length : 0;
			if (!n) return -1;
			var r = n;
			if (i !== $ && (r = Jn(i), r = (0 > r ? Jr(n + r, 0) : to(r, n - 1)) + 1), e !== e) return N(t, r - 1, !0);
			for (; r--;) if (t[r] === e) return r;
			return -1
		}, Ct.lowerCase = Hs, Ct.lowerFirst = Ws, Ct.lt = xs, Ct.lte = ws, Ct.max = function(t) {
			return t && t.length ? le(t, dr, me) : $
		}, Ct.maxBy = function(t, e) {
			return t && t.length ? le(t, ji(e), me) : $
		}, Ct.mean = function(t) {
			return b(t, dr)
		}, Ct.meanBy = function(t, e) {
			return b(t, ji(e))
		}, Ct.min = function(t) {
			return t && t.length ? le(t, dr, _e) : $
		}, Ct.minBy = function(t, e) {
			return t && t.length ? le(t, ji(e), _e) : $
		}, Ct.stubArray = yr, Ct.stubFalse = br, Ct.stubObject = function() {
			return {}
		}, Ct.stubString = function() {
			return ""
		}, Ct.stubTrue = function() {
			return !0
		}, Ct.multiply = aa, Ct.nth = function(t, e) {
			return t && t.length ? De(t, Jn(e)) : $
		}, Ct.noConflict = function() {
			return Ut._ === this && (Ut._ = Or), this
		}, Ct.noop = mr, Ct.now = _n, Ct.pad = function(t, e, i) {
			t = nr(t);
			var n = (e = Jn(e)) ? W(t) : 0;
			return !e || n >= e ? t : (e = (e - n) / 2, _i(qr(e), i) + t + _i(Ur(e), i))
		}, Ct.padEnd = function(t, e, i) {
			t = nr(t);
			var n = (e = Jn(e)) ? W(t) : 0;
			return e && e > n ? t + _i(e - n, i) : t
		}, Ct.padStart = function(t, e, i) {
			t = nr(t);
			var n = (e = Jn(e)) ? W(t) : 0;
			return e && e > n ? _i(e - n, i) + t : t
		}, Ct.parseInt = function(t, e, i) {
			return i || null == e ? e = 0 : e && (e = +e), t = nr(t).replace(lt, ""), eo(t, e || (gt.test(t) ? 16 : 10))
		}, Ct.random = function(t, e, i) {
			if (i && "boolean" != typeof i && Ji(t, e, i) && (e = i = $), i === $ && ("boolean" == typeof e ? (i = e, e = $) : "boolean" == typeof t && (i = t, t = $)), t === $ && e === $ ? (t = 0, e = 1) : (t = er(t) || 0, e === $ ? (e = t, t = 0) : e = er(e) || 0), t > e) {
				var n = t;
				t = e, e = n
			}
			return i || t % 1 || e % 1 ? (i = io(), to(t + i * (e - t + Ht("1e-" + ((i + "").length - 1))), e)) : He(t, e)
		}, Ct.reduce = function(t, e, i) {
			var n = ys(t) ? p : x,
				r = 3 > arguments.length;
			return n(t, ji(e, 4), i, r, So)
		}, Ct.reduceRight = function(t, e, i) {
			var n = ys(t) ? d : x,
				r = 3 > arguments.length;
			return n(t, ji(e, 4), i, r, Co)
		}, Ct.repeat = function(t, e, i) {
			return e = (i ? Ji(t, e, i) : e === $) ? 1 : Jn(e), We(nr(t), e)
		}, Ct.replace = function() {
			var t = arguments,
				e = nr(t[0]);
			return 3 > t.length ? e : no.call(e, t[1], t[2])
		}, Ct.result = function(t, e, i) {
			e = tn(e, t) ? [e] : ii(e);
			var n = -1,
				r = e.length;
			for (r || (t = $, r = 1); ++n < r;) {
				var o = null == t ? $ : t[an(e[n])];
				o === $ && (n = r, o = i), t = Hn(o) ? o.call(t) : o
			}
			return t
		}, Ct.round = la, Ct.runInContext = X, Ct.sample = function(t) {
			t = Rn(t) ? t : lr(t);
			var e = t.length;
			return e > 0 ? t[He(0, e - 1)] : $
		}, Ct.size = function(t) {
			if (null == t) return 0;
			if (Rn(t)) {
				var e = t.length;
				return e && qn(t) ? W(t) : e
			}
			return $n(t) && (e = $i(t), "[object Map]" == e || "[object Set]" == e) ? t.size : sr(t).length
		}, Ct.snakeCase = Fs, Ct.some = function(t, e, i) {
			var n = ys(t) ? f : $e;
			return i && Ji(t, e, i) && (e = $), n(t, ji(e, 3))
		}, Ct.sortedIndex = function(t, e) {
			return Ye(t, e)
		}, Ct.sortedIndexBy = function(t, e, i) {
			return Ge(t, e, ji(i))
		}, Ct.sortedIndexOf = function(t, e) {
			var i = t ? t.length : 0;
			if (i) {
				var n = Ye(t, e);
				if (i > n && On(t[n], e)) return n
			}
			return -1
		}, Ct.sortedLastIndex = function(t, e) {
			return Ye(t, e, !0)
		}, Ct.sortedLastIndexBy = function(t, e, i) {
			return Ge(t, e, ji(i), !0)
		}, Ct.sortedLastIndexOf = function(t, e) {
			if (t && t.length) {
				var i = Ye(t, e, !0) - 1;
				if (On(t[i], e)) return i
			}
			return -1
		}, Ct.startCase = Xs, Ct.startsWith = function(t, e, i) {
			return t = nr(t), i = ee(Jn(i), 0, t.length), t.lastIndexOf(Ve(e), i) == i
		}, Ct.subtract = ca, Ct.sum = function(t) {
			return t && t.length ? k(t, dr) : 0
		}, Ct.sumBy = function(t, e) {
			return t && t.length ? k(t, ji(e)) : 0
		}, Ct.template = function(t, e, i) {
			var n = Ct.templateSettings;
			i && Ji(t, e, i) && (e = $), t = nr(t), e = Ss({}, e, n, Gt), i = Ss({}, e.imports, n.imports, Gt);
			var r, o, s = sr(i),
				a = T(i, s),
				l = 0;
			i = e.interpolate || kt;
			var c = "__p+='";
			i = Ar((e.escape || kt).source + "|" + i.source + "|" + (i === it ? dt : kt).source + "|" + (e.evaluate || kt).source + "|$", "g");
			var h = "sourceURL" in e ? "//# sourceURL=" + e.sourceURL + "\n" : "";
			if (t.replace(i, function(e, i, n, s, a, h) {
				return n || (n = s), c += t.slice(l, h).replace(At, I), i && (r = !0, c += "'+__e(" + i + ")+'"), a && (o = !0, c += "';" + a + ";\n__p+='"), n && (c += "'+((__t=(" + n + "))==null?'':__t)+'"), l = h + e.length, e
			}), c += "';", (e = e.variable) || (c = "with(obj){" + c + "}"), c = (o ? c.replace(U, "") : c).replace(q, "$1").replace(V, "$1;"), c = "function(" + (e || "obj") + "){" + (e ? "" : "obj||(obj={});") + "var __t,__p=''" + (r ? ",__e=_.escape" : "") + (o ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + c + "return __p}", e = Gs(function() {
				return Function(s, h + "return " + c).apply($, a)
			}), e.source = c, jn(e)) throw e;
			return e
		}, Ct.times = function(t, e) {
			if (t = Jn(t), 1 > t || t > 9007199254740991) return [];
			var i = 4294967295,
				n = to(t, 4294967295);
			for (e = ji(e), t -= 4294967295, n = A(n, e); ++i < t;) e(i);
			return n
		}, Ct.toFinite = Qn, Ct.toInteger = Jn, Ct.toLength = tr, Ct.toLower = function(t) {
			return nr(t).toLowerCase()
		}, Ct.toNumber = er, Ct.toSafeInteger = function(t) {
			return ee(Jn(t), -9007199254740991, 9007199254740991)
		}, Ct.toString = nr, Ct.toUpper = function(t) {
			return nr(t).toUpperCase()
		}, Ct.trim = function(t, e, i) {
			return (t = nr(t)) && (i || e === $) ? t.replace(lt, "") : t && (e = Ve(e)) ? (t = t.match(Lt), e = e.match(Lt), ni(t, M(t, e), L(t, e) + 1).join("")) : t
		}, Ct.trimEnd = function(t, e, i) {
			return (t = nr(t)) && (i || e === $) ? t.replace(ht, "") : t && (e = Ve(e)) ? (t = t.match(Lt), e = L(t, e.match(Lt)) + 1, ni(t, 0, e).join("")) : t
		}, Ct.trimStart = function(t, e, i) {
			return (t = nr(t)) && (i || e === $) ? t.replace(ct, "") : t && (e = Ve(e)) ? (t = t.match(Lt), e = M(t, e.match(Lt)), ni(t, e).join("")) : t
		}, Ct.truncate = function(t, e) {
			var i = 30,
				n = "...";
			if (Xn(e)) var r = "separator" in e ? e.separator : r,
				i = "length" in e ? Jn(e.length) : i,
				n = "omission" in e ? Ve(e.omission) : n;
			t = nr(t);
			var o = t.length;
			if (Et.test(t)) var s = t.match(Lt),
				o = s.length;
			if (i >= o) return t;
			if (o = i - W(n), 1 > o) return n;
			if (i = s ? ni(s, 0, o).join("") : t.slice(0, o), r === $) return i + n;
			if (s && (o += i.length - o), Un(r)) {
				if (t.slice(o).search(r)) {
					var a = i;
					for (r.global || (r = Ar(r.source, nr(ft.exec(r)) + "g")), r.lastIndex = 0; s = r.exec(a);) var l = s.index;
					i = i.slice(0, l === $ ? o : l)
				}
			} else t.indexOf(Ve(r), o) != o && (r = i.lastIndexOf(r), r > -1 && (i = i.slice(0, r)));
			return i + n
		}, Ct.unescape = function(t) {
			return (t = nr(t)) && Q.test(t) ? t.replace(Z, F) : t
		}, Ct.uniqueId = function(t) {
			var e = ++Dr;
			return nr(t) + e
		}, Ct.upperCase = $s, Ct.upperFirst = Ys, Ct.each = An, Ct.eachRight = Sn, Ct.first = fn, gr(Ct, function() {
			var t = {};
			return ue(Ct, function(e, i) {
				Er.call(Ct.prototype, i) || (t[i] = e)
			}), t
		}(), {
			chain: !1
		}), Ct.VERSION = "4.13.1", r("bind bindKey curry curryRight partial partialRight".split(" "), function(t) {
			Ct[t].placeholder = Ct
		}), r(["drop", "take"], function(t, e) {
			Rt.prototype[t] = function(i) {
				var n = this.__filtered__;
				if (n && !e) return new Rt(this);
				i = i === $ ? 1 : Jr(Jn(i), 0);
				var r = this.clone();
				return n ? r.__takeCount__ = to(i, r.__takeCount__) : r.__views__.push({
					size: to(i, 4294967295),
					type: t + (0 > r.__dir__ ? "Right" : "")
				}), r
			}, Rt.prototype[t + "Right"] = function(e) {
				return this.reverse()[t](e).reverse()
			}
		}), r(["filter", "map", "takeWhile"], function(t, e) {
			var i = e + 1,
				n = 1 == i || 3 == i;
			Rt.prototype[t] = function(t) {
				var e = this.clone();
				return e.__iteratees__.push({
					iteratee: ji(t, 3),
					type: i
				}), e.__filtered__ = e.__filtered__ || n, e
			}
		}), r(["head", "last"], function(t, e) {
			var i = "take" + (e ? "Right" : "");
			Rt.prototype[t] = function() {
				return this[i](1).value()[0]
			}
		}), r(["initial", "tail"], function(t, e) {
			var i = "drop" + (e ? "" : "Right");
			Rt.prototype[t] = function() {
				return this.__filtered__ ? new Rt(this) : this[i](1)
			}
		}), Rt.prototype.compact = function() {
			return this.filter(dr)
		}, Rt.prototype.find = function(t) {
			return this.filter(t).head()
		}, Rt.prototype.findLast = function(t) {
			return this.reverse().find(t)
		}, Rt.prototype.invokeMap = Nn(function(t, e) {
			return "function" == typeof t ? new Rt(this) : this.map(function(i) {
				return we(i, t, e)
			})
		}), Rt.prototype.reject = function(t) {
			return t = ji(t, 3), this.filter(function(e) {
				return !t(e)
			})
		}, Rt.prototype.slice = function(t, e) {
			t = Jn(t);
			var i = this;
			return i.__filtered__ && (t > 0 || 0 > e) ? new Rt(i) : (0 > t ? i = i.takeRight(-t) : t && (i = i.drop(t)), e !== $ && (e = Jn(e), i = 0 > e ? i.dropRight(-e) : i.take(e - t)), i)
		}, Rt.prototype.takeRightWhile = function(t) {
			return this.reverse().takeWhile(t).reverse()
		}, Rt.prototype.toArray = function() {
			return this.take(4294967295)
		}, ue(Rt.prototype, function(t, e) {
			var i = /^(?:filter|find|map|reject)|While$/.test(e),
				n = /^(?:head|last)$/.test(e),
				r = Ct[n ? "take" + ("last" == e ? "Right" : "") : e],
				o = n || /^find/.test(e);
			r && (Ct.prototype[e] = function() {
				function e(t) {
					return t = r.apply(Ct, u([t], a)), n && p ? t[0] : t
				}
				var s = this.__wrapped__,
					a = n ? [1] : arguments,
					l = s instanceof Rt,
					c = a[0],
					h = l || ys(s);
				h && i && "function" == typeof c && 1 != c.length && (l = h = !1);
				var p = this.__chain__,
					d = !! this.__actions__.length,
					c = o && !p,
					l = l && !d;
				return !o && h ? (s = l ? s : new Rt(this), s = t.apply(s, a), s.__actions__.push({
					func: wn,
					args: [e],
					thisArg: $
				}), new Bt(s, p)) : c && l ? t.apply(this, a) : (s = this.thru(e), c ? n ? s.value()[0] : s.value() : s)
			})
		}), r("pop push shift sort splice unshift".split(" "), function(t) {
			var e = Cr[t],
				i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
				n = /^(?:pop|shift)$/.test(t);
			Ct.prototype[t] = function() {
				var t = arguments;
				if (n && !this.__chain__) {
					var r = this.value();
					return e.apply(ys(r) ? r : [], t)
				}
				return this[i](function(i) {
					return e.apply(ys(i) ? i : [], t)
				})
			}
		}), ue(Rt.prototype, function(t, e) {
			var i = Ct[e];
			if (i) {
				var n = i.name + "";
				(go[n] || (go[n] = [])).push({
					name: e,
					func: i
				})
			}
		}), go[Ai($, 2).name] = [{
			name: "wrapper",
			func: $
		}], Rt.prototype.clone = function() {
			var t = new Rt(this.__wrapped__);
			return t.__actions__ = ci(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = ci(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = ci(this.__views__), t
		}, Rt.prototype.reverse = function() {
			if (this.__filtered__) {
				var t = new Rt(this);
				t.__dir__ = -1, t.__filtered__ = !0
			} else t = this.clone(), t.__dir__ *= -1;
			return t
		}, Rt.prototype.value = function() {
			var t, e = this.__wrapped__.value(),
				i = this.__dir__,
				n = ys(e),
				r = 0 > i,
				o = n ? e.length : 0;
			t = o;
			for (var s = this.__views__, a = 0, l = -1, c = s.length; ++l < c;) {
				var h = s[l],
					u = h.size;
				switch (h.type) {
				case "drop":
					a += u;
					break;
				case "dropRight":
					t -= u;
					break;
				case "take":
					t = to(t, a + u);
					break;
				case "takeRight":
					a = Jr(a, t - u)
				}
			}
			if (t = {
				start: a,
				end: t
			}, s = t.start, a = t.end, t = a - s, r = r ? a : s - 1, s = this.__iteratees__, a = s.length, l = 0, c = to(t, this.__takeCount__), !n || 200 > o || o == t && c == t) return Qe(e, this.__actions__);
			n = [];
			t: for (; t-- && c > l;) {
				for (r += i, o = -1, h = e[r]; ++o < a;) {
					var p = s[o],
						u = p.type,
						p = (0, p.iteratee)(h);
					if (2 == u) h = p;
					else if (!p) {
						if (1 == u) continue t;
						break t
					}
				}
				n[l++] = h
			}
			return n
		}, Ct.prototype.at = Jo, Ct.prototype.chain = function() {
			return xn(this)
		}, Ct.prototype.commit = function() {
			return new Bt(this.value(), this.__chain__)
		}, Ct.prototype.next = function() {
			this.__values__ === $ && (this.__values__ = Kn(this.value()));
			var t = this.__index__ >= this.__values__.length,
				e = t ? $ : this.__values__[this.__index__++];
			return {
				done: t,
				value: e
			}
		}, Ct.prototype.plant = function(t) {
			for (var e, i = this; i instanceof Tt;) {
				var n = cn(i);
				n.__index__ = 0, n.__values__ = $, e ? r.__wrapped__ = n : e = n;
				var r = n,
					i = i.__wrapped__
			}
			return r.__wrapped__ = t, e
		}, Ct.prototype.reverse = function() {
			var t = this.__wrapped__;
			return t instanceof Rt ? (this.__actions__.length && (t = new Rt(this)), t = t.reverse(), t.__actions__.push({
				func: wn,
				args: [vn],
				thisArg: $
			}), new Bt(t, this.__chain__)) : this.thru(vn)
		}, Ct.prototype.toJSON = Ct.prototype.valueOf = Ct.prototype.value = function() {
			return Qe(this.__wrapped__, this.__actions__)
		}, Xr && (Ct.prototype[Xr] = kn), Ct
	}
	var $, Y = 1 / 0,
		G = NaN,
		U = /\b__p\+='';/g,
		q = /\b(__p\+=)''\+/g,
		V = /(__e\(.*?\)|\b__t\))\+'';/g,
		Z = /&(?:amp|lt|gt|quot|#39|#96);/g,
		K = /[&<>"'`]/g,
		Q = RegExp(Z.source),
		J = RegExp(K.source),
		tt = /<%-([\s\S]+?)%>/g,
		et = /<%([\s\S]+?)%>/g,
		it = /<%=([\s\S]+?)%>/g,
		nt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
		rt = /^\w*$/,
		ot = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(\.|\[\])(?:\4|$))/g,
		st = /[\\^$.*+?()[\]{}|]/g,
		at = RegExp(st.source),
		lt = /^\s+|\s+$/g,
		ct = /^\s+/,
		ht = /\s+$/,
		ut = /[a-zA-Z0-9]+/g,
		pt = /\\(\\)?/g,
		dt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
		ft = /\w*$/,
		gt = /^0x/i,
		mt = /^[-+]0x[0-9a-f]+$/i,
		vt = /^0b[01]+$/i,
		yt = /^\[object .+?Constructor\]$/,
		bt = /^0o[0-7]+$/i,
		xt = /^(?:0|[1-9]\d*)$/,
		wt = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
		kt = /($^)/,
		At = /['\n\r\u2028\u2029\\]/g,
		St = "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?)*",
		Ct = "(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])" + St,
		Tt = "(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]?|[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",
		_t = RegExp("['’]", "g"),
		Mt = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]", "g"),
		Lt = RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" + Tt + St, "g"),
		Pt = RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\\d+", Ct].join("|"), "g"),
		Et = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),
		Dt = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
		It = "Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise Reflect RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ isFinite parseInt setTimeout".split(" "),
		Nt = {};
	Nt["[object Float32Array]"] = Nt["[object Float64Array]"] = Nt["[object Int8Array]"] = Nt["[object Int16Array]"] = Nt["[object Int32Array]"] = Nt["[object Uint8Array]"] = Nt["[object Uint8ClampedArray]"] = Nt["[object Uint16Array]"] = Nt["[object Uint32Array]"] = !0, Nt["[object Arguments]"] = Nt["[object Array]"] = Nt["[object ArrayBuffer]"] = Nt["[object Boolean]"] = Nt["[object DataView]"] = Nt["[object Date]"] = Nt["[object Error]"] = Nt["[object Function]"] = Nt["[object Map]"] = Nt["[object Number]"] = Nt["[object Object]"] = Nt["[object RegExp]"] = Nt["[object Set]"] = Nt["[object String]"] = Nt["[object WeakMap]"] = !1;
	var Ot = {};
	Ot["[object Arguments]"] = Ot["[object Array]"] = Ot["[object ArrayBuffer]"] = Ot["[object DataView]"] = Ot["[object Boolean]"] = Ot["[object Date]"] = Ot["[object Float32Array]"] = Ot["[object Float64Array]"] = Ot["[object Int8Array]"] = Ot["[object Int16Array]"] = Ot["[object Int32Array]"] = Ot["[object Map]"] = Ot["[object Number]"] = Ot["[object Object]"] = Ot["[object RegExp]"] = Ot["[object Set]"] = Ot["[object String]"] = Ot["[object Symbol]"] = Ot["[object Uint8Array]"] = Ot["[object Uint8ClampedArray]"] = Ot["[object Uint16Array]"] = Ot["[object Uint32Array]"] = !0, Ot["[object Error]"] = Ot["[object Function]"] = Ot["[object WeakMap]"] = !1;
	var Bt = {
		"À": "A",
		"Á": "A",
		"Â": "A",
		"Ã": "A",
		"Ä": "A",
		"Å": "A",
		"à": "a",
		"á": "a",
		"â": "a",
		"ã": "a",
		"ä": "a",
		"å": "a",
		"Ç": "C",
		"ç": "c",
		"Ð": "D",
		"ð": "d",
		"È": "E",
		"É": "E",
		"Ê": "E",
		"Ë": "E",
		"è": "e",
		"é": "e",
		"ê": "e",
		"ë": "e",
		"Ì": "I",
		"Í": "I",
		"Î": "I",
		"Ï": "I",
		"ì": "i",
		"í": "i",
		"î": "i",
		"ï": "i",
		"Ñ": "N",
		"ñ": "n",
		"Ò": "O",
		"Ó": "O",
		"Ô": "O",
		"Õ": "O",
		"Ö": "O",
		"Ø": "O",
		"ò": "o",
		"ó": "o",
		"ô": "o",
		"õ": "o",
		"ö": "o",
		"ø": "o",
		"Ù": "U",
		"Ú": "U",
		"Û": "U",
		"Ü": "U",
		"ù": "u",
		"ú": "u",
		"û": "u",
		"ü": "u",
		"Ý": "Y",
		"ý": "y",
		"ÿ": "y",
		"Æ": "Ae",
		"æ": "ae",
		"Þ": "Th",
		"þ": "th",
		"ß": "ss"
	},
		Rt = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#39;",
			"`": "&#96;"
		},
		zt = {
			"&amp;": "&",
			"&lt;": "<",
			"&gt;": ">",
			"&quot;": '"',
			"&#39;": "'",
			"&#96;": "`"
		},
		jt = {
			"\\": "\\",
			"'": "'",
			"\n": "n",
			"\r": "r",
			"\u2028": "u2028",
			"\u2029": "u2029"
		},
		Ht = parseFloat,
		Wt = parseInt,
		Ft = "object" == typeof exports && exports,
		Xt = Ft && "object" == typeof module && module,
		$t = Xt && Xt.exports === Ft,
		Yt = P("object" == typeof self && self),
		Gt = P("object" == typeof this && this),
		Ut = P("object" == typeof global && global) || Yt || Gt || Function("return this")(),
		qt = X();
	(Yt || {})._ = qt, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
		return qt
	}) : Xt ? ((Xt.exports = qt)._ = qt, Ft._ = qt) : Ut._ = qt
}.call(this), function(t) {
	function e() {
		o = !1;
		for (var e = 0, i = n.length; i > e; e++) {
			var r = t(n[e]).filter(function() {
				return t(this).is(":appeared")
			});
			if (r.trigger("appear", [r]), l[e]) {
				var s = l[e].not(r);
				s.trigger("disappear", [s])
			}
			l[e] = r
		}
	}
	function i(t) {
		n.push(t), l.push()
	}
	var n = [],
		r = !1,
		o = !1,
		s = {
			interval: 250,
			force_process: !1
		},
		a = t(window),
		l = [];
	t.expr[":"].appeared = function(e) {
		var i = t(e);
		if (!i.is(":visible")) return !1;
		var n = a.scrollLeft(),
			r = a.scrollTop(),
			o = i.offset(),
			s = o.left,
			l = o.top;
		return l + i.height() >= r && l - (i.data("appear-top-offset") || 0) <= r + a.height() && s + i.width() >= n && s - (i.data("appear-left-offset") || 0) <= n + a.width()
	}, t.fn.extend({
		appear: function(n) {
			var a = t.extend({}, s, n || {}),
				l = this.selector || this;
			if (!r) {
				var c = function() {
						o || (o = !0, setTimeout(e, a.interval))
					};
				t(window).scroll(c).resize(c), r = !0
			}
			return a.force_process && setTimeout(e, a.interval), i(l), t(l)
		}
	}), t.extend({
		force_appear: function() {
			return r ? (e(), !0) : !1
		}
	})
}(function() {
	return "undefined" != typeof module ? require("jquery") : jQuery
}()), function(t) {
	t.fn.unveil = function(e, i) {
		function n() {
			var e = c.filter(function() {
				var e = t(this);
				if (!e.is(":hidden")) {
					var i = o.scrollTop(),
						n = i + o.height(),
						r = e.offset().top,
						a = r + e.height();
					return a >= i - s && n + s >= r
				}
			});
			r = e.trigger("unveil"), c = c.not(r)
		}
		var r, o = t(window),
			s = e || 0,
			a = window.devicePixelRatio > 1,
			l = a ? "data-src-retina" : "data-src",
			c = this;
		return this.one("unveil", function() {
			var t = this.getAttribute(l);
			t = t || this.getAttribute("data-src"), t && (this.setAttribute("src", t), "function" == typeof i && i.call(this))
		}), o.scroll(n), o.resize(n), n(), this
	}
}(window.jQuery || window.Zepto), function(t, e) {
	"object" == typeof module && module.exports ? module.exports = t.document ? e(t) : e : t.Highcharts = e(t)
}("undefined" != typeof window ? window : this, function(t) {
	function e(e, i) {
		var n = "Highcharts error #" + e + ": www.highcharts.com/errors/" + e;
		if (i) throw Error(n);
		t.console && console.log(n)
	}
	function i(t, e, i) {
		this.options = e, this.elem = t, this.prop = i
	}
	function n() {
		var t, e, i = arguments,
			n = {},
			r = function(t, e) {
				var i, n;
				"object" != typeof t && (t = {});
				for (n in e) e.hasOwnProperty(n) && (i = e[n], t[n] = i && "object" == typeof i && "[object Array]" !== Object.prototype.toString.call(i) && "renderTo" !== n && "number" != typeof i.nodeType ? r(t[n] || {}, i) : e[n]);
				return t
			};
		for (i[0] === !0 && (n = i[1], i = Array.prototype.slice.call(i, 2)), e = i.length, t = 0; e > t; t++) n = r(n, i[t]);
		return n
	}
	function r(t, e) {
		return parseInt(t, e || 10)
	}
	function o(t) {
		return "string" == typeof t
	}
	function s(t) {
		return t && "object" == typeof t
	}
	function a(t) {
		return "[object Array]" === Object.prototype.toString.call(t)
	}
	function l(t, e) {
		for (var i = t.length; i--;) if (t[i] === e) {
			t.splice(i, 1);
			break
		}
	}
	function c(t) {
		return t !== B && null !== t
	}
	function h(t, e, i) {
		var n, r;
		if (o(e)) c(i) ? t.setAttribute(e, i) : t && t.getAttribute && (r = t.getAttribute(e));
		else if (c(e) && s(e)) for (n in e) t.setAttribute(n, e[n]);
		return r
	}
	function u(t) {
		return a(t) ? t : [t]
	}
	function p(t, e, i) {
		return e ? setTimeout(t, e, i) : void t.call(0, i)
	}
	function d(t, e) {
		wt && !_t && e && e.opacity !== B && (e.filter = "alpha(opacity=" + 100 * e.opacity + ")"), Kt(t.style, e)
	}
	function f(t, e, i, n, r) {
		return t = at.createElement(t), e && Kt(t, e), r && d(t, {
			padding: 0,
			border: "none",
			margin: 0
		}), i && d(t, i), n && n.appendChild(t), t
	}
	function g(t, e) {
		var i = function() {};
		return i.prototype = new t, Kt(i.prototype, e), i
	}
	function m(t, e, i) {
		return Array((e || 2) + 1 - String(t).length).join(i || 0) + t
	}
	function v(t) {
		return 6e4 * (G && G(t) || Y || 0)
	}
	function y(t, e) {
		for (var i, n, r, o, s, a = "{", l = !1, c = []; - 1 !== (a = t.indexOf(a));) {
			if (i = t.slice(0, a), l) {
				for (n = i.split(":"), r = n.shift().split("."), s = r.length, i = e, o = 0; s > o; o++) i = i[r[o]];
				n.length && (n = n.join(":"), r = /\.([0-9])/, o = H.lang, s = void 0, /f$/.test(n) ? (s = (s = n.match(r)) ? s[1] : -1, null !== i && (i = st.numberFormat(i, s, o.decimalPoint, n.indexOf(",") > -1 ? o.thousandsSep : ""))) : i = W(n, i))
			}
			c.push(i), t = t.slice(a + 1), a = (l = !l) ? "}" : "{"
		}
		return c.push(t), c.join("")
	}
	function b(t) {
		return lt.pow(10, ht(lt.log(t) / lt.LN10))
	}
	function x(t, e, i, n, r) {
		var o, s = t,
			i = Jt(i, 1);
		for (o = t / i, e || (e = [1, 2, 2.5, 5, 10], n === !1 && (1 === i ? e = [1, 2, 5, 10] : .1 >= i && (e = [1 / i]))), n = 0; n < e.length && (s = e[n], !(r && s * i >= t || !r && o <= (e[n] + (e[n + 1] || e[n])) / 2)); n++);
		return s *= i
	}
	function w(t, e) {
		var i, n, r = t.length;
		for (n = 0; r > n; n++) t[n].safeI = n;
		for (t.sort(function(t, n) {
			return i = e(t, n), 0 === i ? t.safeI - n.safeI : i
		}), n = 0; r > n; n++) delete t[n].safeI
	}
	function k(t) {
		for (var e = t.length, i = t[0]; e--;) t[e] < i && (i = t[e]);
		return i
	}
	function A(t) {
		for (var e = t.length, i = t[0]; e--;) t[e] > i && (i = t[e]);
		return i
	}
	function S(t, e) {
		for (var i in t) t[i] && t[i] !== e && t[i].destroy && t[i].destroy(), delete t[i]
	}
	function C(t) {
		j || (j = f(Ot)), t && j.appendChild(t), j.innerHTML = ""
	}
	function T(t, e) {
		return parseFloat(t.toPrecision(e || 14))
	}
	function _(t, e) {
		e.renderer.globalAnimation = Jt(t, e.animation)
	}
	function M(t) {
		return s(t) ? n(t) : {
			duration: t ? 500 : 0
		}
	}
	function L() {
		var e = H.global,
			i = e.useUTC,
			n = i ? "getUTC" : "get",
			r = i ? "setUTC" : "set";
		X = e.Date || t.Date, Y = i && e.timezoneOffset, G = i && e.getTimezoneOffset, $ = function(t, e, n, r, o, s) {
			var a;
			return i ? (a = X.UTC.apply(0, arguments), a += v(a)) : a = new X(t, e, Jt(n, 1), Jt(r, 0), Jt(o, 0), Jt(s, 0)).getTime(), a
		}, U = n + "Minutes", q = n + "Hours", V = n + "Day", Z = n + "Date", K = n + "Month", Q = n + "FullYear", J = r + "Milliseconds", tt = r + "Seconds", et = r + "Minutes", it = r + "Hours", nt = r + "Date", rt = r + "Month", ot = r + "FullYear"
	}
	function P(t) {
		return this instanceof P ? void this.init(t) : new P(t)
	}
	function E() {}
	function D(t, e, i, n) {
		this.axis = t, this.pos = e, this.type = i || "", this.isNew = !0, !i && !n && this.addLabel()
	}
	function I(t, e, i, n, r) {
		var o = t.chart.inverted;
		this.axis = t, this.isNegative = i, this.options = e, this.x = n, this.total = null, this.points = {}, this.stack = r, this.rightCliff = this.leftCliff = 0, this.alignOptions = {
			align: e.align || (o ? i ? "left" : "right" : "center"),
			verticalAlign: e.verticalAlign || (o ? "middle" : i ? "bottom" : "top"),
			y: Jt(e.y, o ? 4 : i ? 14 : -6),
			x: Jt(e.x, o ? i ? -6 : 6 : 0)
		}, this.textAlign = e.textAlign || (o ? i ? "right" : "left" : "center")
	}
	function N(t) {
		var e = t.options,
			i = e.navigator,
			n = i.enabled,
			e = e.scrollbar,
			r = e.enabled,
			o = n ? i.height : 0,
			s = r ? e.height : 0;
		this.handles = [], this.scrollbarButtons = [], this.elementsToDestroy = [], this.chart = t, this.setBaseSeries(), this.height = o, this.scrollbarHeight = s, this.scrollbarEnabled = r, this.navigatorEnabled = n, this.navigatorOptions = i, this.scrollbarOptions = e, this.outlineHeight = o + s, this.init()
	}
	function O(t) {
		this.init(t)
	}
	var B, R, z, j, H, W, F, X, $, Y, G, U, q, V, Z, K, Q, J, tt, et, it, nt, rt, ot, st, at = t.document,
		lt = Math,
		ct = lt.round,
		ht = lt.floor,
		ut = lt.ceil,
		pt = lt.max,
		dt = lt.min,
		ft = lt.abs,
		gt = lt.cos,
		mt = lt.sin,
		vt = lt.PI,
		yt = 2 * vt / 360,
		bt = t.navigator && t.navigator.userAgent || "",
		xt = t.opera,
		wt = /(msie|trident|edge)/i.test(bt) && !xt,
		kt = at && 8 === at.documentMode,
		At = !wt && /AppleWebKit/.test(bt),
		St = /Firefox/.test(bt),
		Ct = /(Mobile|Android|Windows Phone)/.test(bt),
		Tt = "http://www.w3.org/2000/svg",
		_t = at && at.createElementNS && !! at.createElementNS(Tt, "svg").createSVGRect,
		Mt = St && parseInt(bt.split("Firefox/")[1], 10) < 4,
		Lt = at && !_t && !wt && !! at.createElement("canvas").getContext,
		Pt = {},
		Et = 0,
		Dt = function() {},
		It = [],
		Nt = 0,
		Ot = "div",
		Bt = /^[0-9]+$/,
		Rt = ["plotTop", "marginRight", "marginBottom", "plotLeft"],
		zt = {};
	st = t.Highcharts ? e(16, !0) : {
		win: t
	}, st.seriesTypes = zt;
	var jt, Ht, Wt, Ft, Xt, $t, Yt, Gt, Ut, qt, Vt, Zt = [];
	i.prototype = {
		dSetter: function() {
			var t, e = this.paths[0],
				i = this.paths[1],
				n = [],
				r = this.now,
				o = e.length;
			if (1 === r) n = this.toD;
			else if (o === i.length && 1 > r) for (; o--;) t = parseFloat(e[o]), n[o] = isNaN(t) ? e[o] : r * parseFloat(i[o] - t) + t;
			else n = i;
			this.elem.attr("d", n)
		},
		update: function() {
			var t = this.elem,
				e = this.prop,
				i = this.now,
				n = this.options.step;
			this[e + "Setter"] ? this[e + "Setter"]() : t.attr ? t.element && t.attr(e, i) : t.style[e] = i + this.unit, n && n.call(t, i, this)
		},
		run: function(t, e, i) {
			var n, r = this,
				o = function(t) {
					return o.stopped ? !1 : r.step(t)
				};
			this.startTime = +new X, this.start = t, this.end = e, this.unit = i, this.now = this.start, this.pos = 0, o.elem = this.elem, o() && 1 === Zt.push(o) && (o.timerId = setInterval(function() {
				for (n = 0; n < Zt.length; n++) Zt[n]() || Zt.splice(n--, 1);
				Zt.length || clearInterval(o.timerId)
			}, 13))
		},
		step: function(t) {
			var e, i = +new X,
				n = this.options;
			e = this.elem;
			var r, o = n.complete,
				s = n.duration,
				a = n.curAnim;
			if (e.attr && !e.element) e = !1;
			else if (t || i >= s + this.startTime) {
				this.now = this.end, this.pos = 1, this.update(), t = a[this.prop] = !0;
				for (r in a) a[r] !== !0 && (t = !1);
				t && o && o.call(e), e = !1
			} else this.pos = n.easing((i - this.startTime) / s), this.now = this.start + (this.end - this.start) * this.pos, this.update(), e = !0;
			return e
		},
		initPath: function(t, e, i) {
			var n, e = e || "",
				r = t.shift,
				o = e.indexOf("C") > -1,
				s = o ? 7 : 3,
				e = e.split(" "),
				i = [].concat(i),
				a = t.isArea,
				l = a ? 2 : 1,
				c = function(t) {
					for (n = t.length; n--;)("M" === t[n] || "L" === t[n]) && t.splice(n + 1, 0, t[n + 1], t[n + 2], t[n + 1], t[n + 2])
				};
			if (o && (c(e), c(i)), r <= i.length / s && e.length === i.length) for (; r--;) i = i.slice(0, s).concat(i), a && (i = i.concat(i.slice(i.length - s)));
			if (t.shift = 0, e.length) for (t = i.length; e.length < t;) r = e.slice().splice(e.length / l - s, s * l), o && (r[s - 6] = r[s - 2], r[s - 5] = r[s - 1]), [].splice.apply(e, [e.length / l, 0].concat(r));
			return [e, i]
		}
	};
	var Kt = st.extend = function(t, e) {
			var i;
			t || (t = {});
			for (i in e) t[i] = e[i];
			return t
		},
		Qt = st.isNumber = function(t) {
			return "number" == typeof t && !isNaN(t)
		},
		Jt = st.pick = function() {
			var t, e, i = arguments,
				n = i.length;
			for (t = 0; n > t; t++) if (e = i[t], e !== B && null !== e) return e
		},
		te = st.wrap = function(t, e, i) {
			var n = t[e];
			t[e] = function() {
				var t = Array.prototype.slice.call(arguments);
				return t.unshift(n), i.apply(this, t)
			}
		};
	W = function(t, e, i) {
		if (!Qt(e)) return H.lang.invalidDate || "";
		var n, t = Jt(t, "%Y-%m-%d %H:%M:%S"),
			r = new X(e - v(e)),
			o = r[q](),
			s = r[V](),
			a = r[Z](),
			l = r[K](),
			c = r[Q](),
			h = H.lang,
			u = h.weekdays,
			p = h.shortWeekdays,
			r = Kt({
				a: p ? p[s] : u[s].substr(0, 3),
				A: u[s],
				d: m(a),
				e: m(a, 2, " "),
				w: s,
				b: h.shortMonths[l],
				B: h.months[l],
				m: m(l + 1),
				y: c.toString().substr(2, 2),
				Y: c,
				H: m(o),
				k: o,
				I: m(o % 12 || 12),
				l: o % 12 || 12,
				M: m(r[U]()),
				p: 12 > o ? "AM" : "PM",
				P: 12 > o ? "am" : "pm",
				S: m(r.getSeconds()),
				L: m(ct(e % 1e3), 3)
			}, st.dateFormats);
		for (n in r) for (; - 1 !== t.indexOf("%" + n);) t = t.replace("%" + n, "function" == typeof r[n] ? r[n](e) : r[n]);
		return i ? t.substr(0, 1).toUpperCase() + t.substr(1) : t
	}, F = {
		millisecond: 1,
		second: 1e3,
		minute: 6e4,
		hour: 36e5,
		day: 864e5,
		week: 6048e5,
		month: 24192e5,
		year: 314496e5
	}, st.numberFormat = function(t, e, i, n) {
		var o, s, t = +t || 0,
			e = +e,
			a = H.lang,
			l = (t.toString().split(".")[1] || "").length,
			c = Math.abs(t);
		return -1 === e ? e = Math.min(l, 20) : Qt(e) || (e = 2), o = String(r(c.toFixed(e))), s = o.length > 3 ? o.length % 3 : 0, i = Jt(i, a.decimalPoint), n = Jt(n, a.thousandsSep), t = 0 > t ? "-" : "", t += s ? o.substr(0, s) + n : "", t += o.substr(s).replace(/(\d{3})(?=\d)/g, "$1" + n), e && (n = Math.abs(c - o + Math.pow(10, -Math.max(e, l) - 1)), t += i + n.toFixed(e).slice(2)), t
	}, Math.easeInOutSine = function(t) {
		return -.5 * (Math.cos(Math.PI * t) - 1)
	}, jt = function(e, i) {
		var n;
		return "width" === i ? Math.min(e.offsetWidth, e.scrollWidth) - jt(e, "padding-left") - jt(e, "padding-right") : "height" === i ? Math.min(e.offsetHeight, e.scrollHeight) - jt(e, "padding-top") - jt(e, "padding-bottom") : (n = t.getComputedStyle(e, void 0)) && r(n.getPropertyValue(i))
	}, Ht = function(t, e) {
		return e.indexOf ? e.indexOf(t) : [].indexOf.call(e, t)
	}, Ft = function(t, e) {
		return [].filter.call(t, e)
	}, $t = function(t, e) {
		for (var i = [], n = 0, r = t.length; r > n; n++) i[n] = e.call(t[n], t[n], n, t);
		return i
	}, Xt = function(e) {
		var i = at.documentElement,
			e = e.getBoundingClientRect();
		return {
			top: e.top + (t.pageYOffset || i.scrollTop) - (i.clientTop || 0),
			left: e.left + (t.pageXOffset || i.scrollLeft) - (i.clientLeft || 0)
		}
	}, Vt = function(t) {
		for (var e = Zt.length; e--;) Zt[e].elem === t && (Zt[e].stopped = !0)
	}, Wt = function(t, e) {
		return Array.prototype.forEach.call(t, e)
	}, Yt = function(e, i, n) {
		function r(i) {
			i.target = i.srcElement || t, n.call(e, i)
		}
		var o = e.hcEvents = e.hcEvents || {};
		e.addEventListener ? e.addEventListener(i, n, !1) : e.attachEvent && (e.hcEventsIE || (e.hcEventsIE = {}), e.hcEventsIE[n.toString()] = r, e.attachEvent("on" + i, r)), o[i] || (o[i] = []), o[i].push(n)
	}, Gt = function(t, e, i) {
		function n(e, i) {
			t.removeEventListener ? t.removeEventListener(e, i, !1) : t.attachEvent && (i = t.hcEventsIE[i.toString()], t.detachEvent("on" + e, i))
		}
		function r() {
			var i, r, o;
			if (t.nodeName) for (o in e ? (i = {}, i[e] = !0) : i = a, i) if (a[o]) for (r = a[o].length; r--;) n(o, a[o][r])
		}
		var o, s, a = t.hcEvents;
		a && (e ? (o = a[e] || [], i ? (s = Ht(i, o), s > -1 && (o.splice(s, 1), a[e] = o), n(e, i)) : (r(), a[e] = [])) : (r(), t.hcEvents = {}))
	}, Ut = function(t, e, i, n) {
		var r;
		r = t.hcEvents;
		var o, s, i = i || {};
		if (at.createEvent && (t.dispatchEvent || t.fireEvent)) r = at.createEvent("Events"), r.initEvent(e, !0, !0), r.target = t, Kt(r, i), t.dispatchEvent ? t.dispatchEvent(r) : t.fireEvent(e, r);
		else if (r) for (r = r[e] || [], o = r.length, i.preventDefault || (i.preventDefault = function() {
			i.defaultPrevented = !0
		}), i.target = t, i.type || (i.type = e), e = 0; o > e; e++) s = r[e], s.call(t, i) === !1 && i.preventDefault();
		n && !i.defaultPrevented && n(i)
	}, qt = function(t, e, r) {
		var o, a, l, c, h = "";
		s(r) || (o = arguments, r = {
			duration: o[2],
			easing: o[3],
			complete: o[4]
		}), Qt(r.duration) || (r.duration = 400), r.easing = "function" == typeof r.easing ? r.easing : Math[r.easing] || Math.easeInOutSine, r.curAnim = n(e);
		for (c in e) l = new i(t, r, c), a = null, "d" === c ? (l.paths = l.initPath(t, t.d, e.d), l.toD = e.d, o = 0, a = 1) : t.attr ? o = t.attr(c) : (o = parseFloat(jt(t, c)) || 0, "opacity" !== c && (h = "px")), a || (a = e[c]), a.match && a.match("px") && (a = a.replace(/px/g, "")), l.run(o, a, h)
	}, t.jQuery && (t.jQuery.fn.highcharts = function() {
		var t = [].slice.call(arguments);
		return this[0] ? t[0] ? (new(st[o(t[0]) ? t.shift() : "Chart"])(this[0], t[0], t[1]), this) : It[h(this[0], "data-highcharts-chart")] : void 0
	}), at && !at.defaultView && (jt = function(t, e) {
		var i;
		return i = {
			width: "clientWidth",
			height: "clientHeight"
		}[e], t.style[e] ? r(t.style[e]) : ("opacity" === e && (e = "filter"), i ? (t.style.zoom = 1, Math.max(t[i] - 2 * jt(t, "padding"), 0)) : (i = t.currentStyle[e.replace(/\-(\w)/g, function(t, e) {
			return e.toUpperCase()
		})], "filter" === e && (i = i.replace(/alpha\(opacity=([0-9]+)\)/, function(t, e) {
			return e / 100
		})), "" === i ? 1 : r(i)))
	}), Array.prototype.forEach || (Wt = function(t, e) {
		for (var i = 0, n = t.length; n > i; i++) if (e.call(t[i], t[i], i, t) === !1) return i
	}), Array.prototype.indexOf || (Ht = function(t, e) {
		var i, n = 0;
		if (e) for (i = e.length; i > n; n++) if (e[n] === t) return n;
		return -1
	}), Array.prototype.filter || (Ft = function(t, e) {
		for (var i = [], n = 0, r = t.length; r > n; n++) e(t[n], n) && i.push(t[n]);
		return i
	}), st.Fx = i, st.inArray = Ht, st.each = Wt, st.grep = Ft, st.offset = Xt, st.map = $t, st.addEvent = Yt, st.removeEvent = Gt, st.fireEvent = Ut, st.animate = qt, st.animObject = M, st.stop = Vt, H = {
		colors: "#7cb5ec,#434348,#90ed7d,#f7a35c,#8085e9,#f15c80,#e4d354,#2b908f,#f45b5b,#91e8e1".split(","),
		symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
		lang: {
			loading: "Loading...",
			months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
			shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
			weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
			decimalPoint: ".",
			numericSymbols: "k,M,G,T,P,E".split(","),
			resetZoom: "Reset zoom",
			resetZoomTitle: "Reset zoom level 1:1",
			thousandsSep: " "
		},
		global: {
			useUTC: !0,
			canvasToolsURL: "http://code.highcharts.com/modules/canvas-tools.js",
			VMLRadialGradientURL: "http://code.highcharts.com/stock/4.2.5/gfx/vml-radial-gradient.png"
		},
		chart: {
			borderColor: "#4572A7",
			borderRadius: 0,
			defaultSeriesType: "line",
			ignoreHiddenSeries: !0,
			spacing: [10, 10, 15, 10],
			backgroundColor: "#FFFFFF",
			plotBorderColor: "#C0C0C0",
			resetZoomButton: {
				theme: {
					zIndex: 20
				},
				position: {
					align: "right",
					x: -10,
					y: 10
				}
			}
		},
		title: {
			text: "Chart title",
			align: "center",
			margin: 15,
			style: {
				color: "#333333",
				fontSize: "18px"
			},
			widthAdjust: -44
		},
		subtitle: {
			text: "",
			align: "center",
			style: {
				color: "#555555"
			},
			widthAdjust: -44
		},
		plotOptions: {
			line: {
				allowPointSelect: !1,
				showCheckbox: !1,
				animation: {
					duration: 1e3
				},
				events: {},
				lineWidth: 2,
				marker: {
					lineWidth: 0,
					radius: 4,
					lineColor: "#FFFFFF",
					states: {
						hover: {
							enabled: !0,
							lineWidthPlus: 1,
							radiusPlus: 2
						},
						select: {
							fillColor: "#FFFFFF",
							lineColor: "#000000",
							lineWidth: 2
						}
					}
				},
				point: {
					events: {}
				},
				dataLabels: {
					align: "center",
					formatter: function() {
						return null === this.y ? "" : st.numberFormat(this.y, -1)
					},
					style: {
						color: "contrast",
						fontSize: "11px",
						fontWeight: "bold",
						textShadow: "0 0 6px contrast, 0 0 3px contrast"
					},
					verticalAlign: "bottom",
					x: 0,
					y: 0,
					padding: 5
				},
				cropThreshold: 300,
				pointRange: 0,
				softThreshold: !0,
				states: {
					hover: {
						lineWidthPlus: 1,
						marker: {},
						halo: {
							size: 10,
							opacity: .25
						}
					},
					select: {
						marker: {}
					}
				},
				stickyTracking: !0,
				turboThreshold: 1e3
			}
		},
		labels: {
			style: {
				position: "absolute",
				color: "#3E576F"
			}
		},
		legend: {
			enabled: !0,
			align: "center",
			layout: "horizontal",
			labelFormatter: function() {
				return this.name
			},
			borderColor: "#909090",
			borderRadius: 0,
			navigation: {
				activeColor: "#274b6d",
				inactiveColor: "#CCC"
			},
			shadow: !1,
			itemStyle: {
				color: "#333333",
				fontSize: "12px",
				fontWeight: "bold"
			},
			itemHoverStyle: {
				color: "#000"
			},
			itemHiddenStyle: {
				color: "#CCC"
			},
			itemCheckboxStyle: {
				position: "absolute",
				width: "13px",
				height: "13px"
			},
			symbolPadding: 5,
			verticalAlign: "bottom",
			x: 0,
			y: 0,
			title: {
				style: {
					fontWeight: "bold"
				}
			}
		},
		loading: {
			labelStyle: {
				fontWeight: "bold",
				position: "relative",
				top: "45%"
			},
			style: {
				position: "absolute",
				backgroundColor: "white",
				opacity: .5,
				textAlign: "center"
			}
		},
		tooltip: {
			enabled: !0,
			animation: _t,
			backgroundColor: "rgba(249, 249, 249, .85)",
			borderWidth: 1,
			borderRadius: 3,
			dateTimeLabelFormats: {
				millisecond: "%A, %b %e, %H:%M:%S.%L",
				second: "%A, %b %e, %H:%M:%S",
				minute: "%A, %b %e, %H:%M",
				hour: "%A, %b %e, %H:%M",
				day: "%A, %b %e, %Y",
				week: "Week from %A, %b %e, %Y",
				month: "%B %Y",
				year: "%Y"
			},
			footerFormat: "",
			headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
			pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
			shadow: !0,
			snap: Ct ? 25 : 10,
			style: {
				color: "#333333",
				cursor: "default",
				fontSize: "12px",
				padding: "8px",
				pointerEvents: "none",
				whiteSpace: "nowrap"
			}
		},
		credits: {
			enabled: !0,
			text: "",
			href: "http://www.highcharts.com",
			position: {
				align: "right",
				x: -10,
				verticalAlign: "bottom",
				y: -5
			},
			style: {
				cursor: "pointer",
				color: "#909090",
				fontSize: "9px"
			}
		}
	};
	var ee = H.plotOptions,
		ie = ee.line;
	L(), P.prototype = {
		parsers: [{
			regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
			parse: function(t) {
				return [r(t[1]), r(t[2]), r(t[3]), parseFloat(t[4], 10)]
			}
		}, {
			regex: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
			parse: function(t) {
				return [r(t[1], 16), r(t[2], 16), r(t[3], 16), 1]
			}
		}, {
			regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
			parse: function(t) {
				return [r(t[1]), r(t[2]), r(t[3]), 1]
			}
		}],
		init: function(t) {
			var e, i, n, r;
			if ((this.input = t) && t.stops) this.stops = $t(t.stops, function(t) {
				return new P(t[1])
			});
			else for (n = this.parsers.length; n-- && !i;) r = this.parsers[n], (e = r.regex.exec(t)) && (i = r.parse(e));
			this.rgba = i || []
		},
		get: function(t) {
			var e, i = this.input,
				r = this.rgba;
			return this.stops ? (e = n(i), e.stops = [].concat(e.stops), Wt(this.stops, function(i, n) {
				e.stops[n] = [e.stops[n][0], i.get(t)]
			})) : e = r && Qt(r[0]) ? "rgb" === t || !t && 1 === r[3] ? "rgb(" + r[0] + "," + r[1] + "," + r[2] + ")" : "a" === t ? r[3] : "rgba(" + r.join(",") + ")" : i, e
		},
		brighten: function(t) {
			var e, i = this.rgba;
			if (this.stops) Wt(this.stops, function(e) {
				e.brighten(t)
			});
			else if (Qt(t) && 0 !== t) for (e = 0; 3 > e; e++) i[e] += r(255 * t), i[e] < 0 && (i[e] = 0), i[e] > 255 && (i[e] = 255);
			return this
		},
		setOpacity: function(t) {
			return this.rgba[3] = t, this
		}
	}, E.prototype = {
		opacity: 1,
		textProps: "direction,fontSize,fontWeight,fontFamily,fontStyle,color,lineHeight,width,textDecoration,textOverflow,textShadow".split(","),
		init: function(t, e) {
			this.element = "span" === e ? f(e) : at.createElementNS(Tt, e), this.renderer = t
		},
		animate: function(t, e, i) {
			return e = Jt(e, this.renderer.globalAnimation, !0), Vt(this), e ? (i && (e.complete = i), qt(this, t, e)) : this.attr(t, null, i), this
		},
		colorGradient: function(t, e, i) {
			var r, o, s, l, h, u, p, d, f, g, m, v, y = this.renderer,
				b = [];
			if (t.linearGradient ? o = "linearGradient" : t.radialGradient && (o = "radialGradient"), o) {
				s = t[o], h = y.gradients, p = t.stops, g = i.radialReference, a(s) && (t[o] = s = {
					x1: s[0],
					y1: s[1],
					x2: s[2],
					y2: s[3],
					gradientUnits: "userSpaceOnUse"
				}), "radialGradient" === o && g && !c(s.gradientUnits) && (l = s, s = n(s, y.getRadialAttr(g, l), {
					gradientUnits: "userSpaceOnUse"
				}));
				for (m in s)"id" !== m && b.push(m, s[m]);
				for (m in p) b.push(p[m]);
				b = b.join(","), h[b] ? g = h[b].attr("id") : (s.id = g = "highcharts-" + Et++, h[b] = u = y.createElement(o).attr(s).add(y.defs), u.radAttr = l, u.stops = [], Wt(p, function(t) {
					0 === t[1].indexOf("rgba") ? (r = P(t[1]), d = r.get("rgb"), f = r.get("a")) : (d = t[1], f = 1), t = y.createElement("stop").attr({
						offset: t[0],
						"stop-color": d,
						"stop-opacity": f
					}).add(u), u.stops.push(t)
				})), v = "url(" + y.url + "#" + g + ")", i.setAttribute(e, v), i.gradient = b, t.toString = function() {
					return v
				}
			}
		},
		applyTextShadow: function(t) {
			var e, i = this.element,
				n = -1 !== t.indexOf("contrast"),
				o = {},
				s = this.renderer.forExport,
				a = s || i.style.textShadow !== B && !wt;
			n && (o.textShadow = t = t.replace(/contrast/g, this.renderer.getContrast(i.style.fill))), (At || s) && (o.textRendering = "geometricPrecision"), a ? this.css(o) : (this.fakeTS = !0, this.ySetter = this.xSetter, e = [].slice.call(i.getElementsByTagName("tspan")), Wt(t.split(/\s?,\s?/g), function(t) {
				var n, o, s = i.firstChild,
					t = t.split(" ");
				n = t[t.length - 1], (o = t[t.length - 2]) && Wt(e, function(t, e) {
					var a;
					0 === e && (t.setAttribute("x", i.getAttribute("x")), e = i.getAttribute("y"), t.setAttribute("y", e || 0), null === e && i.setAttribute("y", 0)), a = t.cloneNode(1), h(a, {
						"class": "highcharts-text-shadow",
						fill: n,
						stroke: n,
						"stroke-opacity": 1 / pt(r(o), 3),
						"stroke-width": o,
						"stroke-linejoin": "round"
					}), i.insertBefore(a, s)
				})
			}))
		},
		attr: function(t, e, i) {
			var n, r, o, s = this.element,
				a = this;
			if ("string" == typeof t && e !== B && (n = t, t = {}, t[n] = e), "string" == typeof t) a = (this[t + "Getter"] || this._defaultGetter).call(this, t, s);
			else {
				for (n in t) e = t[n], o = !1, this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(n) && (r || (this.symbolAttr(t), r = !0), o = !0), !this.rotation || "x" !== n && "y" !== n || (this.doTransform = !0), o || (o = this[n + "Setter"] || this._defaultSetter, o.call(this, e, n, s), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(n) && this.updateShadows(n, e, o));
				this.doTransform && (this.updateTransform(), this.doTransform = !1)
			}
			return i && i(), a
		},
		updateShadows: function(t, e, i) {
			for (var n = this.shadows, r = n.length; r--;) i.call(n[r], "height" === t ? Math.max(e - (n[r].cutHeight || 0), 0) : "d" === t ? this.d : e, t, n[r])
		},
		addClass: function(t) {
			var e = this.element,
				i = h(e, "class") || "";
			return -1 === i.indexOf(t) && h(e, "class", i + " " + t), this
		},
		symbolAttr: function(t) {
			var e = this;
			Wt("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","), function(i) {
				e[i] = Jt(t[i], e[i])
			}), e.attr({
				d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e)
			})
		},
		clip: function(t) {
			return this.attr("clip-path", t ? "url(" + this.renderer.url + "#" + t.id + ")" : "none")
		},
		crisp: function(t) {
			var e, i, n = {},
				r = this.strokeWidth || 0;
			i = ct(r) % 2 / 2, t.x = ht(t.x || this.x || 0) + i, t.y = ht(t.y || this.y || 0) + i, t.width = ht((t.width || this.width || 0) - 2 * i), t.height = ht((t.height || this.height || 0) - 2 * i), t.strokeWidth = r;
			for (e in t) this[e] !== t[e] && (this[e] = n[e] = t[e]);
			return n
		},
		css: function(t) {
			var e, i, n = this.styles,
				o = {},
				s = this.element,
				a = "";
			if (e = !n, t && t.color && (t.fill = t.color), n) for (i in t) t[i] !== n[i] && (o[i] = t[i], e = !0);
			if (e) {
				if (e = this.textWidth = t && t.width && "text" === s.nodeName.toLowerCase() && r(t.width) || this.textWidth, n && (t = Kt(n, o)), this.styles = t, e && (Lt || !_t && this.renderer.forExport) && delete t.width, wt && !_t) d(this.element, t);
				else {
					n = function(t, e) {
						return "-" + e.toLowerCase()
					};
					for (i in t) a += i.replace(/([A-Z])/g, n) + ":" + t[i] + ";";
					h(s, "style", a)
				}
				e && this.added && this.renderer.buildText(this)
			}
			return this
		},
		on: function(t, e) {
			var i = this,
				n = i.element;
			return z && "click" === t ? (n.ontouchstart = function(t) {
				i.touchEventFired = X.now(), t.preventDefault(), e.call(n, t)
			}, n.onclick = function(t) {
				(-1 === bt.indexOf("Android") || X.now() - (i.touchEventFired || 0) > 1100) && e.call(n, t)
			}) : n["on" + t] = e, this
		},
		setRadialReference: function(t) {
			var e = this.renderer.gradients[this.element.gradient];
			return this.element.radialReference = t, e && e.radAttr && e.animate(this.renderer.getRadialAttr(t, e.radAttr)), this
		},
		translate: function(t, e) {
			return this.attr({
				translateX: t,
				translateY: e
			})
		},
		invert: function() {
			return this.inverted = !0, this.updateTransform(), this
		},
		updateTransform: function() {
			var t = this.translateX || 0,
				e = this.translateY || 0,
				i = this.scaleX,
				n = this.scaleY,
				r = this.inverted,
				o = this.rotation,
				s = this.element;
			r && (t += this.attr("width"), e += this.attr("height")), t = ["translate(" + t + "," + e + ")"], r ? t.push("rotate(90) scale(-1,1)") : o && t.push("rotate(" + o + " " + (s.getAttribute("x") || 0) + " " + (s.getAttribute("y") || 0) + ")"), (c(i) || c(n)) && t.push("scale(" + Jt(i, 1) + " " + Jt(n, 1) + ")"), t.length && s.setAttribute("transform", t.join(" "))
		},
		toFront: function() {
			var t = this.element;
			return t.parentNode.appendChild(t), this
		},
		align: function(t, e, i) {
			var n, r, s, a, c = {};
			return r = this.renderer, s = r.alignedObjects, t ? (this.alignOptions = t, this.alignByTranslate = e, (!i || o(i)) && (this.alignTo = n = i || "renderer", l(s, this), s.push(this), i = null)) : (t = this.alignOptions, e = this.alignByTranslate, n = this.alignTo), i = Jt(i, r[n], r), n = t.align, r = t.verticalAlign, s = (i.x || 0) + (t.x || 0), a = (i.y || 0) + (t.y || 0), "right" !== n && "center" !== n || (s += (i.width - (t.width || 0)) / {
				right: 1,
				center: 2
			}[n]), c[e ? "translateX" : "x"] = ct(s), "bottom" !== r && "middle" !== r || (a += (i.height - (t.height || 0)) / ({
				bottom: 1,
				middle: 2
			}[r] || 1)), c[e ? "translateY" : "y"] = ct(a), this[this.placed ? "animate" : "attr"](c), this.placed = !0, this.alignAttr = c, this
		},
		getBBox: function(t, e) {
			var i, n, r, o, s = this.renderer,
				a = this.element,
				l = this.styles;
			n = this.textStr;
			var c, h, u, p = a.style,
				d = s.cache,
				f = s.cacheKeys;
			if (r = Jt(e, this.rotation), o = r * yt, n !== B && (u = ["", r || 0, l && l.fontSize, a.style.width].join(","), u = "" === n || Bt.test(n) ? "num:" + n.toString().length + u : n + u), u && !t && (i = d[u]), !i) {
				if (a.namespaceURI === Tt || s.forExport) {
					try {
						h = this.fakeTS &&
						function(t) {
							Wt(a.querySelectorAll(".highcharts-text-shadow"), function(e) {
								e.style.display = t
							})
						}, St && p.textShadow ? (c = p.textShadow, p.textShadow = "") : h && h("none"), i = a.getBBox ? Kt({}, a.getBBox()) : {
							width: a.offsetWidth,
							height: a.offsetHeight
						}, c ? p.textShadow = c : h && h("")
					} catch (g) {}(!i || i.width < 0) && (i = {
						width: 0,
						height: 0
					})
				} else i = this.htmlGetBBox();
				if (s.isSVG && (s = i.width, n = i.height, wt && l && "11px" === l.fontSize && "16.9" === n.toPrecision(3) && (i.height = n = 14), r && (i.width = ft(n * mt(o)) + ft(s * gt(o)), i.height = ft(n * gt(o)) + ft(s * mt(o)))), u) {
					for (; f.length > 250;) delete d[f.shift()];
					d[u] || f.push(u), d[u] = i
				}
			}
			return i
		},
		show: function(t) {
			return this.attr({
				visibility: t ? "inherit" : "visible"
			})
		},
		hide: function() {
			return this.attr({
				visibility: "hidden"
			})
		},
		fadeOut: function(t) {
			var e = this;
			e.animate({
				opacity: 0
			}, {
				duration: t || 150,
				complete: function() {
					e.attr({
						y: -9999
					})
				}
			})
		},
		add: function(t) {
			var e, i = this.renderer,
				n = this.element;
			return t && (this.parentGroup = t), this.parentInverted = t && t.inverted, void 0 !== this.textStr && i.buildText(this), this.added = !0, (!t || t.handleZ || this.zIndex) && (e = this.zIndexSetter()), e || (t ? t.element : i.box).appendChild(n), this.onAdd && this.onAdd(), this
		},
		safeRemoveChild: function(t) {
			var e = t.parentNode;
			e && e.removeChild(t)
		},
		destroy: function() {
			var t, e, i = this,
				n = i.element || {},
				r = i.shadows,
				o = i.renderer.isSVG && "SPAN" === n.nodeName && i.parentGroup;
			for (i.safeRemoveChild(n), r && Wt(r, function(t) {
				i.safeRemoveChild(t)
			}); o && o.div && 0 === o.div.childNodes.length;) n = o.parentGroup, i.safeRemoveChild(o.div), delete o.div, o = n;
			i.alignTo && l(i.renderer.alignedObjects, i);
			for (t in i) delete i[t];
			return null
		},
		shadow: function(t, e, i) {
			var n, r, o, s, a, l, c = [],
				u = this.element;
			if (t) {
				for (s = Jt(t.width, 3), a = (t.opacity || .15) / s, l = this.parentInverted ? "(-1,-1)" : "(" + Jt(t.offsetX, 1) + ", " + Jt(t.offsetY, 1) + ")", n = 1; s >= n; n++) r = u.cloneNode(0), o = 2 * s + 1 - 2 * n, h(r, {
					isShadow: "true",
					stroke: t.color || "black",
					"stroke-opacity": a * n,
					"stroke-width": o,
					transform: "translate" + l,
					fill: "none"
				}), i && (h(r, "height", pt(h(r, "height") - o, 0)), r.cutHeight = o), e ? e.element.appendChild(r) : u.parentNode.insertBefore(r, u), c.push(r);
				this.shadows = c
			}
			return this
		},
		xGetter: function(t) {
			return "circle" === this.element.nodeName && (t = {
				x: "cx",
				y: "cy"
			}[t] || t), this._defaultGetter(t)
		},
		_defaultGetter: function(t) {
			return t = Jt(this[t], this.element ? this.element.getAttribute(t) : null, 0), /^[\-0-9\.]+$/.test(t) && (t = parseFloat(t)), t
		},
		dSetter: function(t, e, i) {
			t && t.join && (t = t.join(" ")), /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"), i.setAttribute(e, t), this[e] = t
		},
		dashstyleSetter: function(t) {
			var e, i = this["stroke-width"];
			if ("inherit" === i && (i = 1), t = t && t.toLowerCase()) {
				for (t = t.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","), e = t.length; e--;) t[e] = r(t[e]) * i;
				t = t.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", t)
			}
		},
		alignSetter: function(t) {
			this.element.setAttribute("text-anchor", {
				left: "start",
				center: "middle",
				right: "end"
			}[t])
		},
		opacitySetter: function(t, e, i) {
			this[e] = t, i.setAttribute(e, t)
		},
		titleSetter: function(t) {
			var e = this.element.getElementsByTagName("title")[0];
			e || (e = at.createElementNS(Tt, "title"), this.element.appendChild(e)), e.firstChild && e.removeChild(e.firstChild), e.appendChild(at.createTextNode(String(Jt(t), "").replace(/<[^>]*>/g, "")))
		},
		textSetter: function(t) {
			t !== this.textStr && (delete this.bBox, this.textStr = t, this.added && this.renderer.buildText(this))
		},
		fillSetter: function(t, e, i) {
			"string" == typeof t ? i.setAttribute(e, t) : t && this.colorGradient(t, e, i)
		},
		visibilitySetter: function(t, e, i) {
			"inherit" === t ? i.removeAttribute(e) : i.setAttribute(e, t)
		},
		zIndexSetter: function(t, e) {
			var i, n, o, s = this.renderer,
				a = this.parentGroup,
				s = (a || s).element || s.box,
				l = this.element;
			i = this.added;
			var h;
			if (c(t) && (l.zIndex = t, t = +t, this[e] === t && (i = !1), this[e] = t), i) {
				for ((t = this.zIndex) && a && (a.handleZ = !0), a = s.childNodes, h = 0; h < a.length && !o; h++) i = a[h], n = i.zIndex, i !== l && (r(n) > t || !c(t) && c(n)) && (s.insertBefore(l, i), o = !0);
				o || s.appendChild(l)
			}
			return o
		},
		_defaultSetter: function(t, e, i) {
			i.setAttribute(e, t)
		}
	}, E.prototype.yGetter = E.prototype.xGetter, E.prototype.translateXSetter = E.prototype.translateYSetter = E.prototype.rotationSetter = E.prototype.verticalAlignSetter = E.prototype.scaleXSetter = E.prototype.scaleYSetter = function(t, e) {
		this[e] = t, this.doTransform = !0
	}, E.prototype["stroke-widthSetter"] = E.prototype.strokeSetter = function(t, e, i) {
		this[e] = t, this.stroke && this["stroke-width"] ? (this.strokeWidth = this["stroke-width"], E.prototype.fillSetter.call(this, this.stroke, "stroke", i), i.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === e && 0 === t && this.hasStroke && (i.removeAttribute("stroke"), this.hasStroke = !1)
	};
	var ne = function() {
			this.init.apply(this, arguments)
		};
	ne.prototype = {
		Element: E,
		init: function(e, i, n, r, o, s) {
			var a, r = this.createElement("svg").attr({
				version: "1.1"
			}).css(this.getStyle(r));
			a = r.element, e.appendChild(a), -1 === e.innerHTML.indexOf("xmlns") && h(a, "xmlns", Tt), this.isSVG = !0, this.box = a, this.boxWrapper = r, this.alignedObjects = [], this.url = (St || At) && at.getElementsByTagName("base").length ? t.location.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "", this.createElement("desc").add().element.appendChild(at.createTextNode("Created with Highstock 4.2.5")), this.defs = this.createElement("defs").add(), this.allowHTML = s, this.forExport = o, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.setSize(i, n, !1);
			var l;
			St && e.getBoundingClientRect && (this.subPixelFix = i = function() {
				d(e, {
					left: 0,
					top: 0
				}), l = e.getBoundingClientRect(), d(e, {
					left: ut(l.left) - l.left + "px",
					top: ut(l.top) - l.top + "px"
				})
			}, i(), Yt(t, "resize", i))
		},
		getStyle: function(t) {
			return this.style = Kt({
				fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
				fontSize: "12px"
			}, t)
		},
		isHidden: function() {
			return !this.boxWrapper.getBBox().width
		},
		destroy: function() {
			var e = this.defs;
			return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), S(this.gradients || {}), this.gradients = null, e && (this.defs = e.destroy()), this.subPixelFix && Gt(t, "resize", this.subPixelFix), this.alignedObjects = null
		},
		createElement: function(t) {
			var e = new this.Element;
			return e.init(this, t), e
		},
		draw: function() {},
		getRadialAttr: function(t, e) {
			return {
				cx: t[0] - t[2] / 2 + e.cx * t[2],
				cy: t[1] - t[2] / 2 + e.cy * t[2],
				r: e.r * t[2]
			}
		},
		buildText: function(t) {
			for (var e, i, n, o = t.element, s = this, a = s.forExport, l = Jt(t.textStr, "").toString(), c = -1 !== l.indexOf("<"), u = o.childNodes, p = h(o, "x"), f = t.styles, g = t.textWidth, m = f && f.lineHeight, v = f && f.textShadow, y = f && "ellipsis" === f.textOverflow, b = u.length, x = g && !t.added && this.box, w = function(t) {
					return m ? r(m) : s.fontMetrics(/(px|em)$/.test(t && t.style.fontSize) ? t.style.fontSize : f && f.fontSize || s.style.fontSize || 12, t).h
				}, k = function(t) {
					return t.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
				}; b--;) o.removeChild(u[b]);
			c || v || y || -1 !== l.indexOf(" ") ? (e = /<.*style="([^"]+)".*>/, i = /<.*href="(http[^"]+)".*>/, x && x.appendChild(o), l = c ? l.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [l], l = Ft(l, function(t) {
				return "" !== t
			}), Wt(l, function(r, l) {
				var c, u = 0,
					r = r.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
				c = r.split("|||"), Wt(c, function(r) {
					if ("" !== r || 1 === c.length) {
						var m, v = {},
							b = at.createElementNS(Tt, "tspan");
						if (e.test(r) && (m = r.match(e)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), h(b, "style", m)), i.test(r) && !a && (h(b, "onclick", 'location.href="' + r.match(i)[1] + '"'), d(b, {
							cursor: "pointer"
						})), r = k(r.replace(/<(.|\n)*?>/g, "") || " "), " " !== r) {
							if (b.appendChild(at.createTextNode(r)), u ? v.dx = 0 : l && null !== p && (v.x = p), h(b, v), o.appendChild(b), !u && l && (!_t && a && d(b, {
								display: "block"
							}), h(b, "dy", w(b))), g) {
								for (var x, A, v = r.replace(/([^\^])-/g, "$1- ").split(" "), S = c.length > 1 || l || v.length > 1 && "nowrap" !== f.whiteSpace, C = [], T = w(b), _ = 1, M = t.rotation, L = r, P = L.length;
								(S || y) && (v.length || C.length);) t.rotation = 0, x = t.getBBox(!0), A = x.width, !_t && s.forExport && (A = s.measureSpanWidth(b.firstChild.data, t.styles)), x = A > g, void 0 === n && (n = x), y && n ? (P /= 2, "" === L || !x && .5 > P ? v = [] : (L = r.substring(0, L.length + (x ? -1 : 1) * ut(P)), v = [L + (g > 3 ? "…" : "")], b.removeChild(b.firstChild))) : x && 1 !== v.length ? (b.removeChild(b.firstChild), C.unshift(v.pop())) : (v = C, C = [], v.length && (_++, b = at.createElementNS(Tt, "tspan"), h(b, {
									dy: T,
									x: p
								}), m && h(b, "style", m), o.appendChild(b)), A > g && (g = A)), v.length && b.appendChild(at.createTextNode(v.join(" ").replace(/- /g, "-")));
								t.rotation = M
							}
							u++
						}
					}
				})
			}), n && t.attr("title", t.textStr), x && x.removeChild(o), v && t.applyTextShadow && t.applyTextShadow(v)) : o.appendChild(at.createTextNode(k(l)))
		},
		getContrast: function(t) {
			return t = P(t).rgba, t[0] + t[1] + t[2] > 384 ? "#000000" : "#FFFFFF"
		},
		button: function(t, e, i, r, o, s, a, l, c) {
			var h, u, p, d, f, g, m = this.label(t, e, i, c, null, null, null, null, "button"),
				v = 0,
				t = {
					x1: 0,
					y1: 0,
					x2: 0,
					y2: 1
				},
				o = n({
					"stroke-width": 1,
					stroke: "#CCCCCC",
					fill: {
						linearGradient: t,
						stops: [
							[0, "#FEFEFE"],
							[1, "#F6F6F6"]
						]
					},
					r: 2,
					padding: 5,
					style: {
						color: "black"
					}
				}, o);
			return p = o.style, delete o.style, s = n(o, {
				stroke: "#68A",
				fill: {
					linearGradient: t,
					stops: [
						[0, "#FFF"],
						[1, "#ACF"]
					]
				}
			}, s), d = s.style, delete s.style, a = n(o, {
				stroke: "#68A",
				fill: {
					linearGradient: t,
					stops: [
						[0, "#9BD"],
						[1, "#CDF"]
					]
				}
			}, a), f = a.style, delete a.style, l = n(o, {
				style: {
					color: "#CCC"
				}
			}, l), g = l.style, delete l.style, Yt(m.element, wt ? "mouseover" : "mouseenter", function() {
				3 !== v && m.attr(s).css(d)
			}), Yt(m.element, wt ? "mouseout" : "mouseleave", function() {
				3 !== v && (h = [o, s, a][v], u = [p, d, f][v], m.attr(h).css(u))
			}), m.setState = function(t) {
				(m.state = v = t) ? 2 === t ? m.attr(a).css(f) : 3 === t && m.attr(l).css(g) : m.attr(o).css(p)
			}, m.on("click", function(t) {
				3 !== v && r.call(m, t)
			}).attr(o).css(Kt({
				cursor: "default"
			}, p))
		},
		crispLine: function(t, e) {
			return t[1] === t[4] && (t[1] = t[4] = ct(t[1]) - e % 2 / 2), t[2] === t[5] && (t[2] = t[5] = ct(t[2]) + e % 2 / 2), t
		},
		path: function(t) {
			var e = {
				fill: "none"
			};
			return a(t) ? e.d = t : s(t) && Kt(e, t), this.createElement("path").attr(e)
		},
		circle: function(t, e, i) {
			return t = s(t) ? t : {
				x: t,
				y: e,
				r: i
			}, e = this.createElement("circle"), e.xSetter = e.ySetter = function(t, e, i) {
				i.setAttribute("c" + e, t)
			}, e.attr(t)
		},
		arc: function(t, e, i, n, r, o) {
			return s(t) && (e = t.y, i = t.r, n = t.innerR, r = t.start, o = t.end, t = t.x), t = this.symbol("arc", t || 0, e || 0, i || 0, i || 0, {
				innerR: n || 0,
				start: r || 0,
				end: o || 0
			}), t.r = i, t
		},
		rect: function(t, e, i, n, r, o) {
			var r = s(t) ? t.r : r,
				a = this.createElement("rect"),
				t = s(t) ? t : t === B ? {} : {
					x: t,
					y: e,
					width: pt(i, 0),
					height: pt(n, 0)
				};
			return o !== B && (a.strokeWidth = o, t = a.crisp(t)), r && (t.r = r), a.rSetter = function(t, e, i) {
				h(i, {
					rx: t,
					ry: t
				})
			}, a.attr(t)
		},
		setSize: function(t, e, i) {
			var n = this.alignedObjects,
				r = n.length;
			for (this.width = t, this.height = e, this.boxWrapper[Jt(i, !0) ? "animate" : "attr"]({
				width: t,
				height: e
			}); r--;) n[r].align()
		},
		g: function(t) {
			var e = this.createElement("g");
			return c(t) ? e.attr({
				"class": "highcharts-" + t
			}) : e
		},
		image: function(t, e, i, n, r) {
			var o = {
				preserveAspectRatio: "none"
			};
			return arguments.length > 1 && Kt(o, {
				x: e,
				y: i,
				width: n,
				height: r
			}), o = this.createElement("image").attr(o), o.element.setAttributeNS ? o.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", t) : o.element.setAttribute("hc-svg-href", t), o
		},
		symbol: function(t, e, i, n, r, o) {
			var s, a, l, c = this,
				h = this.symbols[t],
				h = h && h(ct(e), ct(i), n, r, o),
				u = /^url\((.*?)\)$/;
			return h ? (s = this.path(h), Kt(s, {
				symbolName: t,
				x: e,
				y: i,
				width: n,
				height: r
			}), o && Kt(s, o)) : u.test(t) && (l = function(t, e) {
				t.element && (t.attr({
					width: e[0],
					height: e[1]
				}), t.alignByTranslate || t.translate(ct((n - e[0]) / 2), ct((r - e[1]) / 2)))
			}, a = t.match(u)[1], t = Pt[a] || o && o.width && o.height && [o.width, o.height], s = this.image(a).attr({
				x: e,
				y: i
			}), s.isImg = !0, t ? l(s, t) : (s.attr({
				width: 0,
				height: 0
			}), f("img", {
				onload: function() {
					0 === this.width && (d(this, {
						position: "absolute",
						top: "-999em"
					}), at.body.appendChild(this)), l(s, Pt[a] = [this.width, this.height]), this.parentNode && this.parentNode.removeChild(this), c.imgCount--, !c.imgCount && It[c.chartIndex].onload && It[c.chartIndex].onload()
				},
				src: a
			}), this.imgCount++)), s
		},
		symbols: {
			circle: function(t, e, i, n) {
				var r = .166 * i;
				return ["M", t + i / 2, e, "C", t + i + r, e, t + i + r, e + n, t + i / 2, e + n, "C", t - r, e + n, t - r, e, t + i / 2, e, "Z"]
			},
			square: function(t, e, i, n) {
				return ["M", t, e, "L", t + i, e, t + i, e + n, t, e + n, "Z"]
			},
			triangle: function(t, e, i, n) {
				return ["M", t + i / 2, e, "L", t + i, e + n, t, e + n, "Z"]
			},
			"triangle-down": function(t, e, i, n) {
				return ["M", t, e, "L", t + i, e, t + i / 2, e + n, "Z"]
			},
			diamond: function(t, e, i, n) {
				return ["M", t + i / 2, e, "L", t + i, e + n / 2, t + i / 2, e + n, t, e + n / 2, "Z"]
			},
			arc: function(t, e, i, n, r) {
				var o = r.start,
					i = r.r || i || n,
					s = r.end - .001,
					n = r.innerR,
					a = r.open,
					l = gt(o),
					c = mt(o),
					h = gt(s),
					s = mt(s),
					r = r.end - o < vt ? 0 : 1;
				return ["M", t + i * l, e + i * c, "A", i, i, 0, r, 1, t + i * h, e + i * s, a ? "M" : "L", t + n * h, e + n * s, "A", n, n, 0, r, 0, t + n * l, e + n * c, a ? "" : "Z"]
			},
			callout: function(t, e, i, n, r) {
				var o, s = dt(r && r.r || 0, i, n),
					a = s + 6,
					l = r && r.anchorX,
					r = r && r.anchorY;
				return o = ["M", t + s, e, "L", t + i - s, e, "C", t + i, e, t + i, e, t + i, e + s, "L", t + i, e + n - s, "C", t + i, e + n, t + i, e + n, t + i - s, e + n, "L", t + s, e + n, "C", t, e + n, t, e + n, t, e + n - s, "L", t, e + s, "C", t, e, t, e, t + s, e], l && l > i && r > e + a && e + n - a > r ? o.splice(13, 3, "L", t + i, r - 6, t + i + 6, r, t + i, r + 6, t + i, e + n - s) : l && 0 > l && r > e + a && e + n - a > r ? o.splice(33, 3, "L", t, r + 6, t - 6, r, t, r - 6, t, e + s) : r && r > n && l > t + a && t + i - a > l ? o.splice(23, 3, "L", l + 6, e + n, l, e + n + 6, l - 6, e + n, t + s, e + n) : r && 0 > r && l > t + a && t + i - a > l && o.splice(3, 3, "L", l - 6, e, l, e - 6, l + 6, e, i - s, e), o
			}
		},
		clipRect: function(t, e, i, n) {
			var r = "highcharts-" + Et++,
				o = this.createElement("clipPath").attr({
					id: r
				}).add(this.defs),
				t = this.rect(t, e, i, n, 0).add(o);
			return t.id = r, t.clipPath = o, t.count = 0, t
		},
		text: function(t, e, i, n) {
			var r = Lt || !_t && this.forExport,
				o = {};
			return !n || !this.allowHTML && this.forExport ? (o.x = Math.round(e || 0), i && (o.y = Math.round(i)), (t || 0 === t) && (o.text = t), t = this.createElement("text").attr(o), r && t.css({
				position: "absolute"
			}), n || (t.xSetter = function(t, e, i) {
				var n, r, o = i.getElementsByTagName("tspan"),
					s = i.getAttribute(e);
				for (r = 0; r < o.length; r++) n = o[r], n.getAttribute(e) === s && n.setAttribute(e, t);
				i.setAttribute(e, t)
			}), t) : this.html(t, e, i)
		},
		fontMetrics: function(e, i) {
			var n, o, e = e || this.style.fontSize;
			return !e && i && t.getComputedStyle && (i = i.element || i, e = (n = t.getComputedStyle(i, "")) && n.fontSize), e = /px/.test(e) ? r(e) : /em/.test(e) ? 12 * parseFloat(e) : 12, n = 24 > e ? e + 3 : ct(1.2 * e), o = ct(.8 * n), {
				h: n,
				b: o,
				f: e
			}
		},
		rotCorr: function(t, e, i) {
			var n = t;
			return e && i && (n = pt(n * gt(e * yt), 4)), {
				x: -t / 3 * mt(e * yt),
				y: n
			}
		},
		label: function(t, e, i, r, o, s, a, l, h) {
			var u, p, d, f, g, m, v, y, b, x, w, k = this,
				A = k.g(h),
				S = k.text("", 0, 0, a).attr({
					zIndex: 1
				}),
				C = 0,
				T = 3,
				_ = 0,
				M = 0,
				L = {};
			b = function() {
				var t, e;
				t = S.element.style, p = (void 0 === d || void 0 === f || A.styles.textAlign) && c(S.textStr) && S.getBBox(), A.width = (d || p.width || 0) + 2 * T + _, A.height = (f || p.height || 0) + 2 * T, v = T + k.fontMetrics(t && t.fontSize, S).b, y && (u || (t = M, e = (l ? -v : 0) + M, A.box = u = r ? k.symbol(r, t, e, A.width, A.height, L) : k.rect(t, e, A.width, A.height, 0, L["stroke-width"]), u.isImg || u.attr("fill", "none"), u.add(A)), u.isImg || u.attr(Kt({
					width: ct(A.width),
					height: ct(A.height)
				}, L)), L = null)
			}, x = function() {
				var t, e = A.styles,
					e = e && e.textAlign,
					i = _ + T;
				t = l ? 0 : v, c(d) && p && ("center" === e || "right" === e) && (i += {
					center: .5,
					right: 1
				}[e] * (d - p.width)), i === S.x && t === S.y || (S.attr("x", i), t !== B && S.attr("y", t)), S.x = i, S.y = t
			}, w = function(t, e) {
				u ? u.attr(t, e) : L[t] = e
			}, A.onAdd = function() {
				S.add(A), A.attr({
					text: t || 0 === t ? t : "",
					x: e,
					y: i
				}), u && c(o) && A.attr({
					anchorX: o,
					anchorY: s
				})
			}, A.widthSetter = function(t) {
				d = t
			}, A.heightSetter = function(t) {
				f = t
			}, A.paddingSetter = function(t) {
				c(t) && t !== T && (T = A.padding = t, x())
			}, A.paddingLeftSetter = function(t) {
				c(t) && t !== _ && (_ = t, x())
			}, A.alignSetter = function(t) {
				t = {
					left: 0,
					center: .5,
					right: 1
				}[t], t !== C && (C = t, p && A.attr({
					x: g
				}))
			}, A.textSetter = function(t) {
				t !== B && S.textSetter(t), b(), x()
			}, A["stroke-widthSetter"] = function(t, e) {
				t && (y = !0), M = t % 2 / 2, w(e, t)
			}, A.strokeSetter = A.fillSetter = A.rSetter = function(t, e) {
				"fill" === e && t && (y = !0), w(e, t)
			}, A.anchorXSetter = function(t, e) {
				o = t, w(e, ct(t) - M - g)
			}, A.anchorYSetter = function(t, e) {
				s = t, w(e, t - m)
			}, A.xSetter = function(t) {
				A.x = t, C && (t -= C * ((d || p.width) + 2 * T)), g = ct(t), A.attr("translateX", g)
			}, A.ySetter = function(t) {
				m = A.y = ct(t), A.attr("translateY", m)
			};
			var P = A.css;
			return Kt(A, {
				css: function(t) {
					if (t) {
						var e = {},
							t = n(t);
						Wt(A.textProps, function(i) {
							t[i] !== B && (e[i] = t[i], delete t[i])
						}), S.css(e)
					}
					return P.call(A, t)
				},
				getBBox: function() {
					return {
						width: p.width + 2 * T,
						height: p.height + 2 * T,
						x: p.x - T,
						y: p.y - T
					}
				},
				shadow: function(t) {
					return u && u.shadow(t), A
				},
				destroy: function() {
					Gt(A.element, "mouseenter"), Gt(A.element, "mouseleave"), S && (S = S.destroy()), u && (u = u.destroy()), E.prototype.destroy.call(A), A = k = b = x = w = null
				}
			})
		}
	}, R = ne, Kt(E.prototype, {
		htmlCss: function(t) {
			var e = this.element;
			return (e = t && "SPAN" === e.tagName && t.width) && (delete t.width, this.textWidth = e, this.updateTransform()), t && "ellipsis" === t.textOverflow && (t.whiteSpace = "nowrap", t.overflow = "hidden"), this.styles = Kt(this.styles, t), d(this.element, t), this
		},
		htmlGetBBox: function() {
			var t = this.element;
			return "text" === t.nodeName && (t.style.position = "absolute"), {
				x: t.offsetLeft,
				y: t.offsetTop,
				width: t.offsetWidth,
				height: t.offsetHeight
			}
		},
		htmlUpdateTransform: function() {
			if (this.added) {
				var t = this.renderer,
					e = this.element,
					i = this.translateX || 0,
					n = this.translateY || 0,
					o = this.x || 0,
					s = this.y || 0,
					a = this.textAlign || "left",
					l = {
						left: 0,
						center: .5,
						right: 1
					}[a],
					h = this.shadows,
					u = this.styles;
				if (d(e, {
					marginLeft: i,
					marginTop: n
				}), h && Wt(h, function(t) {
					d(t, {
						marginLeft: i + 1,
						marginTop: n + 1
					})
				}), this.inverted && Wt(e.childNodes, function(i) {
					t.invertChild(i, e)
				}), "SPAN" === e.tagName) {
					var h = this.rotation,
						p = r(this.textWidth),
						f = u && u.whiteSpace,
						g = [h, a, e.innerHTML, this.textWidth, this.textAlign].join(",");
					g !== this.cTT && (u = t.fontMetrics(e.style.fontSize).b, c(h) && this.setSpanRotation(h, l, u), e.offsetWidth > p && /[ \-]/.test(e.textContent || e.innerText) ? (d(e, {
						width: p + "px",
						display: "block",
						whiteSpace: f || "normal"
					}), this.hasTextWidth = !0) : this.hasTextWidth && (d(e, {
						width: "",
						display: "",
						whiteSpace: f || "nowrap"
					}), this.hasTextWidth = !1), this.getSpanCorrection(this.hasTextWidth ? p : e.offsetWidth, u, l, h, a)), d(e, {
						left: o + (this.xCorr || 0) + "px",
						top: s + (this.yCorr || 0) + "px"
					}), At && (u = e.offsetHeight), this.cTT = g
				}
			} else this.alignOnAdd = !0
		},
		setSpanRotation: function(t, e, i) {
			var n = {},
				r = wt ? "-ms-transform" : At ? "-webkit-transform" : St ? "MozTransform" : xt ? "-o-transform" : "";
			n[r] = n.transform = "rotate(" + t + "deg)", n[r + (St ? "Origin" : "-origin")] = n.transformOrigin = 100 * e + "% " + i + "px", d(this.element, n)
		},
		getSpanCorrection: function(t, e, i) {
			this.xCorr = -t * i, this.yCorr = -e
		}
	}), Kt(ne.prototype, {
		html: function(t, e, i) {
			var n = this.createElement("span"),
				r = n.element,
				o = n.renderer,
				s = o.isSVG,
				a = function(t, e) {
					Wt(["opacity", "visibility"], function(i) {
						te(t, i + "Setter", function(t, i, n, r) {
							t.call(this, i, n, r), e[n] = i
						})
					})
				};
			return n.textSetter = function(t) {
				t !== r.innerHTML && delete this.bBox, r.innerHTML = this.textStr = t, n.htmlUpdateTransform()
			}, s && a(n, n.element.style), n.xSetter = n.ySetter = n.alignSetter = n.rotationSetter = function(t, e) {
				"align" === e && (e = "textAlign"), n[e] = t, n.htmlUpdateTransform()
			}, n.attr({
				text: t,
				x: ct(e),
				y: ct(i)
			}).css({
				position: "absolute",
				fontFamily: this.style.fontFamily,
				fontSize: this.style.fontSize
			}), r.style.whiteSpace = "nowrap", n.css = n.htmlCss, s && (n.add = function(t) {
				var e, i = o.box.parentNode,
					s = [];
				if (this.parentGroup = t) {
					if (e = t.div, !e) {
						for (; t;) s.push(t), t = t.parentGroup;
						Wt(s.reverse(), function(t) {
							var n, r = h(t.element, "class");
							r && (r = {
								className: r
							}), e = t.div = t.div || f(Ot, r, {
								position: "absolute",
								left: (t.translateX || 0) + "px",
								top: (t.translateY || 0) + "px",
								opacity: t.opacity
							}, e || i), n = e.style, Kt(t, {
								translateXSetter: function(e, i) {
									n.left = e + "px", t[i] = e, t.doTransform = !0
								},
								translateYSetter: function(e, i) {
									n.top = e + "px", t[i] = e, t.doTransform = !0
								}
							}), a(t, n)
						})
					}
				} else e = i;
				return e.appendChild(r), n.added = !0, n.alignOnAdd && n.htmlUpdateTransform(), n
			}), n
		}
	});
	var re, oe;
	_t || Lt || (oe = {
		init: function(t, e) {
			var i = ["<", e, ' filled="f" stroked="f"'],
				n = ["position: ", "absolute", ";"],
				r = e === Ot;
			("shape" === e || r) && n.push("left:0;top:0;width:1px;height:1px;"), n.push("visibility: ", r ? "hidden" : "visible"), i.push(' style="', n.join(""), '"/>'), e && (i = r || "span" === e || "img" === e ? i.join("") : t.prepVML(i), this.element = f(i)), this.renderer = t
		},
		add: function(t) {
			var e = this.renderer,
				i = this.element,
				n = e.box,
				r = t && t.inverted,
				n = t ? t.element || t : n;
			return t && (this.parentGroup = t), r && e.invertChild(i, n), n.appendChild(i), this.added = !0, this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform(), this.onAdd && this.onAdd(), this
		},
		updateTransform: E.prototype.htmlUpdateTransform,
		setSpanRotation: function() {
			var t = this.rotation,
				e = gt(t * yt),
				i = mt(t * yt);
			d(this.element, {
				filter: t ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", e, ", M12=", -i, ", M21=", i, ", M22=", e, ", sizingMethod='auto expand')"].join("") : "none"
			})
		},
		getSpanCorrection: function(t, e, i, n, r) {
			var o, s = n ? gt(n * yt) : 1,
				a = n ? mt(n * yt) : 0,
				l = Jt(this.elemHeight, this.element.offsetHeight);
			this.xCorr = 0 > s && -t, this.yCorr = 0 > a && -l, o = 0 > s * a, this.xCorr += a * e * (o ? 1 - i : i), this.yCorr -= s * e * (n ? o ? i : 1 - i : 1), r && "left" !== r && (this.xCorr -= t * i * (0 > s ? -1 : 1), n && (this.yCorr -= l * i * (0 > a ? -1 : 1)), d(this.element, {
				textAlign: r
			}))
		},
		pathToVML: function(t) {
			for (var e = t.length, i = []; e--;) Qt(t[e]) ? i[e] = ct(10 * t[e]) - 5 : "Z" === t[e] ? i[e] = "x" : (i[e] = t[e], !t.isArc || "wa" !== t[e] && "at" !== t[e] || (i[e + 5] === i[e + 7] && (i[e + 7] += t[e + 7] > t[e + 5] ? 1 : -1), i[e + 6] === i[e + 8] && (i[e + 8] += t[e + 8] > t[e + 6] ? 1 : -1)));
			return i.join(" ") || "x"
		},
		clip: function(t) {
			var e, i = this;
			return t ? (e = t.members, l(e, i), e.push(i), i.destroyClip = function() {
				l(e, i)
			}, t = t.getCSS(i)) : (i.destroyClip && i.destroyClip(), t = {
				clip: kt ? "inherit" : "rect(auto)"
			}), i.css(t)
		},
		css: E.prototype.htmlCss,
		safeRemoveChild: function(t) {
			t.parentNode && C(t)
		},
		destroy: function() {
			return this.destroyClip && this.destroyClip(), E.prototype.destroy.apply(this)
		},
		on: function(e, i) {
			return this.element["on" + e] = function() {
				var e = t.event;
				e.target = e.srcElement, i(e)
			}, this
		},
		cutOffPath: function(t, e) {
			var i, t = t.split(/[ ,]/);
			return i = t.length, 9 !== i && 11 !== i || (t[i - 4] = t[i - 2] = r(t[i - 2]) - 10 * e), t.join(" ")
		},
		shadow: function(t, e, i) {
			var n, o, s, a, l, c, h, u = [],
				p = this.element,
				d = this.renderer,
				g = p.style,
				m = p.path;
			if (m && "string" != typeof m.value && (m = "x"), l = m, t) {
				for (c = Jt(t.width, 3), h = (t.opacity || .15) / c, n = 1; 3 >= n; n++) a = 2 * c + 1 - 2 * n, i && (l = this.cutOffPath(m.value, a + .5)), s = ['<shape isShadow="true" strokeweight="', a, '" filled="false" path="', l, '" coordsize="10 10" style="', p.style.cssText, '" />'], o = f(d.prepVML(s), null, {
					left: r(g.left) + Jt(t.offsetX, 1),
					top: r(g.top) + Jt(t.offsetY, 1)
				}), i && (o.cutOff = a + 1), s = ['<stroke color="', t.color || "black", '" opacity="', h * n, '"/>'], f(d.prepVML(s), null, null, o), e ? e.element.appendChild(o) : p.parentNode.insertBefore(o, p), u.push(o);
				this.shadows = u
			}
			return this
		},
		updateShadows: Dt,
		setAttr: function(t, e) {
			kt ? this.element[t] = e : this.element.setAttribute(t, e)
		},
		classSetter: function(t) {
			this.element.className = t
		},
		dashstyleSetter: function(t, e, i) {
			(i.getElementsByTagName("stroke")[0] || f(this.renderer.prepVML(["<stroke/>"]), null, null, i))[e] = t || "solid", this[e] = t
		},
		dSetter: function(t, e, i) {
			var n = this.shadows,
				t = t || [];
			if (this.d = t.join && t.join(" "), i.path = t = this.pathToVML(t), n) for (i = n.length; i--;) n[i].path = n[i].cutOff ? this.cutOffPath(t, n[i].cutOff) : t;
			this.setAttr(e, t)
		},
		fillSetter: function(t, e, i) {
			var n = i.nodeName;
			"SPAN" === n ? i.style.color = t : "IMG" !== n && (i.filled = "none" !== t, this.setAttr("fillcolor", this.renderer.color(t, i, e, this)))
		},
		"fill-opacitySetter": function(t, e, i) {
			f(this.renderer.prepVML(["<", e.split("-")[0], ' opacity="', t, '"/>']), null, null, i)
		},
		opacitySetter: Dt,
		rotationSetter: function(t, e, i) {
			i = i.style, this[e] = i[e] = t, i.left = -ct(mt(t * yt) + 1) + "px", i.top = ct(gt(t * yt)) + "px"
		},
		strokeSetter: function(t, e, i) {
			this.setAttr("strokecolor", this.renderer.color(t, i, e, this))
		},
		"stroke-widthSetter": function(t, e, i) {
			i.stroked = !! t, this[e] = t, Qt(t) && (t += "px"), this.setAttr("strokeweight", t)
		},
		titleSetter: function(t, e) {
			this.setAttr(e, t)
		},
		visibilitySetter: function(t, e, i) {
			"inherit" === t && (t = "visible"), this.shadows && Wt(this.shadows, function(i) {
				i.style[e] = t
			}), "DIV" === i.nodeName && (t = "hidden" === t ? "-999em" : 0, kt || (i.style[e] = t ? "visible" : "hidden"), e = "top"), i.style[e] = t
		},
		xSetter: function(t, e, i) {
			this[e] = t, "x" === e ? e = "left" : "y" === e && (e = "top"), this.updateClipping ? (this[e] = t, this.updateClipping()) : i.style[e] = t
		},
		zIndexSetter: function(t, e, i) {
			i.style[e] = t
		}
	}, oe["stroke-opacitySetter"] = oe["fill-opacitySetter"], st.VMLElement = oe = g(E, oe), oe.prototype.ySetter = oe.prototype.widthSetter = oe.prototype.heightSetter = oe.prototype.xSetter, oe = {
		Element: oe,
		isIE8: bt.indexOf("MSIE 8.0") > -1,
		init: function(t, e, i, n) {
			var r;
			if (this.alignedObjects = [], n = this.createElement(Ot).css(Kt(this.getStyle(n), {
				position: "relative"
			})), r = n.element, t.appendChild(n.element), this.isVML = !0, this.box = r, this.boxWrapper = n, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.setSize(e, i, !1), !at.namespaces.hcv) {
				at.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
				try {
					at.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
				} catch (o) {
					at.styleSheets[0].cssText += "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
				}
			}
		},
		isHidden: function() {
			return !this.box.offsetWidth
		},
		clipRect: function(t, e, i, n) {
			var r = this.createElement(),
				o = s(t);
			return Kt(r, {
				members: [],
				count: 0,
				left: (o ? t.x : t) + 1,
				top: (o ? t.y : e) + 1,
				width: (o ? t.width : i) - 1,
				height: (o ? t.height : n) - 1,
				getCSS: function(t) {
					var e = t.element,
						i = e.nodeName,
						t = t.inverted,
						n = this.top - ("shape" === i ? e.offsetTop : 0),
						r = this.left,
						e = r + this.width,
						o = n + this.height,
						n = {
							clip: "rect(" + ct(t ? r : n) + "px," + ct(t ? o : e) + "px," + ct(t ? e : o) + "px," + ct(t ? n : r) + "px)"
						};
					return !t && kt && "DIV" === i && Kt(n, {
						width: e + "px",
						height: o + "px"
					}), n
				},
				updateClipping: function() {
					Wt(r.members, function(t) {
						t.element && t.css(r.getCSS(t))
					})
				}
			})
		},
		color: function(t, e, i, n) {
			var r, o, s, a = this,
				l = /^rgba/,
				c = "none";
			if (t && t.linearGradient ? s = "gradient" : t && t.radialGradient && (s = "pattern"), s) {
				var h, u, p, d, g, m, v, y, b = t.linearGradient || t.radialGradient,
					x = "",
					t = t.stops,
					w = [],
					k = function() {
						o = ['<fill colors="' + w.join(",") + '" opacity="', g, '" o:opacity2="', d, '" type="', s, '" ', x, 'focus="100%" method="any" />'], f(a.prepVML(o), null, null, e)
					};
				if (p = t[0], y = t[t.length - 1], p[0] > 0 && t.unshift([0, p[1]]), y[0] < 1 && t.push([1, y[1]]), Wt(t, function(t, e) {
					l.test(t[1]) ? (r = P(t[1]), h = r.get("rgb"), u = r.get("a")) : (h = t[1], u = 1), w.push(100 * t[0] + "% " + h), e ? (g = u, m = h) : (d = u, v = h)
				}), "fill" === i) if ("gradient" === s) i = b.x1 || b[0] || 0, t = b.y1 || b[1] || 0, p = b.x2 || b[2] || 0, b = b.y2 || b[3] || 0, x = 'angle="' + (90 - 180 * lt.atan((b - t) / (p - i)) / vt) + '"', k();
				else {
					var A, c = b.r,
						S = 2 * c,
						C = 2 * c,
						T = b.cx,
						_ = b.cy,
						M = e.radialReference,
						c = function() {
							M && (A = n.getBBox(), T += (M[0] - A.x) / A.width - .5, _ += (M[1] - A.y) / A.height - .5, S *= M[2] / A.width, C *= M[2] / A.height), x = 'src="' + H.global.VMLRadialGradientURL + '" size="' + S + "," + C + '" origin="0.5,0.5" position="' + T + "," + _ + '" color2="' + v + '" ', k()
						};
					n.added ? c() : n.onAdd = c, c = m
				} else c = h
			} else l.test(t) && "IMG" !== e.tagName ? (r = P(t), n[i + "-opacitySetter"](r.get("a"), i, e), c = r.get("rgb")) : (c = e.getElementsByTagName(i), c.length && (c[0].opacity = 1, c[0].type = "solid"), c = t);
			return c
		},
		prepVML: function(t) {
			var e = this.isIE8,
				t = t.join("");
			return e ? (t = t.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), t = -1 === t.indexOf('style="') ? t.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : t.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : t = t.replace("<", "<hcv:"), t
		},
		text: ne.prototype.html,
		path: function(t) {
			var e = {
				coordsize: "10 10"
			};
			return a(t) ? e.d = t : s(t) && Kt(e, t), this.createElement("shape").attr(e)
		},
		circle: function(t, e, i) {
			var n = this.symbol("circle");
			return s(t) && (i = t.r, e = t.y, t = t.x), n.isCircle = !0, n.r = i, n.attr({
				x: t,
				y: e
			})
		},
		g: function(t) {
			var e;
			return t && (e = {
				className: "highcharts-" + t,
				"class": "highcharts-" + t
			}), this.createElement(Ot).attr(e)
		},
		image: function(t, e, i, n, r) {
			var o = this.createElement("img").attr({
				src: t
			});
			return arguments.length > 1 && o.attr({
				x: e,
				y: i,
				width: n,
				height: r
			}), o
		},
		createElement: function(t) {
			return "rect" === t ? this.symbol(t) : ne.prototype.createElement.call(this, t)
		},
		invertChild: function(t, e) {
			var i = this,
				n = e.style,
				o = "IMG" === t.tagName && t.style;
			d(t, {
				flip: "x",
				left: r(n.width) - (o ? r(o.top) : 1),
				top: r(n.height) - (o ? r(o.left) : 1),
				rotation: -90
			}), Wt(t.childNodes, function(e) {
				i.invertChild(e, t)
			})
		},
		symbols: {
			arc: function(t, e, i, n, r) {
				var o = r.start,
					s = r.end,
					a = r.r || i || n,
					i = r.innerR,
					n = gt(o),
					l = mt(o),
					c = gt(s),
					h = mt(s);
				return s - o === 0 ? ["x"] : (o = ["wa", t - a, e - a, t + a, e + a, t + a * n, e + a * l, t + a * c, e + a * h], r.open && !i && o.push("e", "M", t, e), o.push("at", t - i, e - i, t + i, e + i, t + i * c, e + i * h, t + i * n, e + i * l, "x", "e"), o.isArc = !0, o)
			},
			circle: function(t, e, i, n, r) {
				return r && (i = n = 2 * r.r), r && r.isCircle && (t -= i / 2, e -= n / 2), ["wa", t, e, t + i, e + n, t + i, e + n / 2, t + i, e + n / 2, "e"]
			},
			rect: function(t, e, i, n, r) {
				return ne.prototype.symbols[c(r) && r.r ? "callout" : "square"].call(0, t, e, i, n, r)
			}
		}
	}, st.VMLRenderer = re = function() {
		this.init.apply(this, arguments)
	}, re.prototype = n(ne.prototype, oe), R = re), ne.prototype.measureSpanWidth = function(t, e) {
		var i, n = at.createElement("span");
		return i = at.createTextNode(t), n.appendChild(i), d(n, e), this.box.appendChild(n), i = n.offsetWidth, C(n), i
	};
	var se;
	Lt && (st.CanVGRenderer = oe = function() {
		Tt = "http://www.w3.org/1999/xhtml"
	}, oe.prototype.symbols = {}, se = function() {
		function t() {
			var t, i = e.length;
			for (t = 0; i > t; t++) e[t]();
			e = []
		}
		var e = [];
		return {
			push: function(i, n) {
				if (0 === e.length) {
					var r = at.getElementsByTagName("head")[0],
						o = at.createElement("script");
					o.type = "text/javascript", o.src = n, o.onload = t, r.appendChild(o)
				}
				e.push(i)
			}
		}
	}(), R = oe), D.prototype = {
		addLabel: function() {
			var t, e = this.axis,
				i = e.options,
				r = e.chart,
				o = e.categories,
				s = e.names,
				a = this.pos,
				l = i.labels,
				h = e.tickPositions,
				u = a === h[0],
				p = a === h[h.length - 1],
				s = o ? Jt(o[a], s[a], a) : a,
				o = this.label,
				h = h.info;
			e.isDatetimeAxis && h && (t = i.dateTimeLabelFormats[h.higherRanks[a] || h.unitName]), this.isFirst = u, this.isLast = p, i = e.labelFormatter.call({
				axis: e,
				chart: r,
				isFirst: u,
				isLast: p,
				dateTimeLabelFormat: t,
				value: e.isLog ? T(e.lin2log(s)) : s
			}), c(o) ? o && o.attr({
				text: i
			}) : (this.labelLength = (this.label = o = c(i) && l.enabled ? r.renderer.text(i, 0, 0, l.useHTML).css(n(l.style)).add(e.labelGroup) : null) && o.getBBox().width, this.rotation = 0)
		},
		getLabelSize: function() {
			return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
		},
		handleOverflow: function(t) {
			var e, i = this.axis,
				n = t.x,
				r = i.chart.chartWidth,
				o = i.chart.spacing,
				s = Jt(i.labelLeft, dt(i.pos, o[3])),
				o = Jt(i.labelRight, pt(i.pos + i.len, r - o[1])),
				a = this.label,
				l = this.rotation,
				c = {
					left: 0,
					center: .5,
					right: 1
				}[i.labelAlign],
				h = a.getBBox().width,
				u = i.getSlotWidth(),
				p = u,
				d = 1,
				f = {};
			l ? 0 > l && s > n - c * h ? e = ct(n / gt(l * yt) - s) : l > 0 && n + c * h > o && (e = ct((r - n) / gt(l * yt))) : (r = n + (1 - c) * h, s > n - c * h ? p = t.x + p * (1 - c) - s : r > o && (p = o - t.x + p * c, d = -1), p = dt(u, p), u > p && "center" === i.labelAlign && (t.x += d * (u - p - c * (u - dt(h, p)))), (h > p || i.autoRotation && a.styles.width) && (e = p)), e && (f.width = e, i.options.labels.style.textOverflow || (f.textOverflow = "ellipsis"), a.css(f))
		},
		getPosition: function(t, e, i, n) {
			var r = this.axis,
				o = r.chart,
				s = n && o.oldChartHeight || o.chartHeight;
			return {
				x: t ? r.translate(e + i, null, null, n) + r.transB : r.left + r.offset + (r.opposite ? (n && o.oldChartWidth || o.chartWidth) - r.right - r.left : 0),
				y: t ? s - r.bottom + r.offset - (r.opposite ? r.height : 0) : s - r.translate(e + i, null, null, n) - r.transB
			}
		},
		getLabelPosition: function(t, e, i, n, r, o, s, a) {
			var l = this.axis,
				h = l.transA,
				u = l.reversed,
				p = l.staggerLines,
				d = l.tickRotCorr || {
					x: 0,
					y: 0
				},
				f = r.y;
			return c(f) || (f = 0 === l.side ? i.rotation ? -8 : -i.getBBox().height : 2 === l.side ? d.y + 8 : gt(i.rotation * yt) * (d.y - i.getBBox(!1, 0).height / 2)), t = t + r.x + d.x - (o && n ? o * h * (u ? -1 : 1) : 0), e = e + f - (o && !n ? o * h * (u ? 1 : -1) : 0), p && (i = s / (a || 1) % p, l.opposite && (i = p - i - 1), e += i * (l.labelOffset / p)), {
				x: t,
				y: ct(e)
			}
		},
		getMarkPath: function(t, e, i, n, r, o) {
			return o.crispLine(["M", t, e, "L", t + (r ? 0 : -i), e + (r ? i : 0)], n)
		},
		render: function(t, e, i) {
			var n = this.axis,
				r = n.options,
				o = n.chart.renderer,
				s = n.horiz,
				a = this.type,
				l = this.label,
				c = this.pos,
				h = r.labels,
				u = this.gridLine,
				p = a ? a + "Grid" : "grid",
				d = a ? a + "Tick" : "tick",
				f = r[p + "LineWidth"],
				g = r[p + "LineColor"],
				m = r[p + "LineDashStyle"],
				p = n.tickSize(d),
				d = r[d + "Color"],
				v = this.mark,
				y = h.step,
				b = !0,
				x = n.tickmarkOffset,
				w = this.getPosition(s, c, x, e),
				k = w.x,
				w = w.y,
				A = s && k === n.pos + n.len || !s && w === n.pos ? -1 : 1,
				i = Jt(i, 1);
			this.isActive = !0, f && (c = n.getPlotLinePath(c + x, f * A, e, !0), u === B && (u = {
				stroke: g,
				"stroke-width": f
			}, m && (u.dashstyle = m), a || (u.zIndex = 1), e && (u.opacity = 0), this.gridLine = u = f ? o.path(c).attr(u).add(n.gridGroup) : null), !e && u && c && u[this.isNew ? "attr" : "animate"]({
				d: c,
				opacity: i
			})), p && (n.opposite && (p[0] = -p[0]), a = this.getMarkPath(k, w, p[0], p[1] * A, s, o), v ? v.animate({
				d: a,
				opacity: i
			}) : this.mark = o.path(a).attr({
				stroke: d,
				"stroke-width": p[1],
				opacity: i
			}).add(n.axisGroup)), l && Qt(k) && (l.xy = w = this.getLabelPosition(k, w, l, s, h, x, t, y), this.isFirst && !this.isLast && !Jt(r.showFirstLabel, 1) || this.isLast && !this.isFirst && !Jt(r.showLastLabel, 1) ? b = !1 : s && !n.isRadial && !h.step && !h.rotation && !e && 0 !== i && this.handleOverflow(w), y && t % y && (b = !1), b && Qt(w.y) ? (w.opacity = i, l[this.isNew ? "attr" : "animate"](w), this.isNew = !1) : l.attr("y", -9999))
		},
		destroy: function() {
			S(this, this.axis)
		}
	}, st.PlotLineOrBand = function(t, e) {
		this.axis = t, e && (this.options = e, this.id = e.id)
	}, st.PlotLineOrBand.prototype = {
		render: function() {
			var t, e = this,
				i = e.axis,
				r = i.horiz,
				o = e.options,
				s = o.label,
				a = e.label,
				l = o.width,
				h = o.to,
				u = o.from,
				p = c(u) && c(h),
				d = o.value,
				f = o.dashStyle,
				g = e.svgElem,
				m = [],
				v = o.color,
				y = Jt(o.zIndex, 0),
				b = o.events,
				x = {},
				w = i.chart.renderer,
				m = i.log2lin;
			if (i.isLog && (u = m(u), h = m(h), d = m(d)), l) m = i.getPlotLinePath(d, l), x = {
				stroke: v,
				"stroke-width": l
			}, f && (x.dashstyle = f);
			else {
				if (!p) return;
				m = i.getPlotBandPath(u, h, o), v && (x.fill = v), o.borderWidth && (x.stroke = o.borderColor, x["stroke-width"] = o.borderWidth)
			}
			if (x.zIndex = y, g) m ? (g.show(), g.animate({
				d: m
			})) : (g.hide(), a && (e.label = a = a.destroy()));
			else if (m && m.length && (e.svgElem = g = w.path(m).attr(x).add(), b)) for (t in o = function(t) {
				g.on(t, function(i) {
					b[t].apply(e, [i])
				})
			}, b) o(t);
			return s && c(s.text) && m && m.length && i.width > 0 && i.height > 0 && !m.flat ? (s = n({
				align: r && p && "center",
				x: r ? !p && 4 : 10,
				verticalAlign: !r && p && "middle",
				y: r ? p ? 16 : 10 : p ? 6 : -4,
				rotation: r && !p && 90
			}, s), this.renderLabel(s, m, p, y)) : a && a.hide(), e
		},
		renderLabel: function(t, e, i, n) {
			var r = this.label,
				o = this.axis.chart.renderer;
			r || (r = {
				align: t.textAlign || t.align,
				rotation: t.rotation
			}, r.zIndex = n, this.label = r = o.text(t.text, 0, 0, t.useHTML).attr(r).css(t.style).add()), n = [e[1], e[4], i ? e[6] : e[1]], e = [e[2], e[5], i ? e[7] : e[2]], i = k(n), o = k(e), r.align(t, !1, {
				x: i,
				y: o,
				width: A(n) - i,
				height: A(e) - o
			}), r.show()
		},
		destroy: function() {
			l(this.axis.plotLinesAndBands, this), delete this.axis, S(this)
		}
	};
	var ae = st.Axis = function() {
			this.init.apply(this, arguments)
		};
	ae.prototype = {
		defaultOptions: {
			dateTimeLabelFormats: {
				millisecond: "%H:%M:%S.%L",
				second: "%H:%M:%S",
				minute: "%H:%M",
				hour: "%H:%M",
				day: "%e. %b",
				week: "%e. %b",
				month: "%b '%y",
				year: "%Y"
			},
			endOnTick: !1,
			gridLineColor: "#D8D8D8",
			labels: {
				enabled: !0,
				style: {
					color: "#606060",
					cursor: "default",
					fontSize: "11px"
				},
				x: 0
			},
			lineColor: "#C0D0E0",
			lineWidth: 1,
			minPadding: .01,
			maxPadding: .01,
			minorGridLineColor: "#E0E0E0",
			minorGridLineWidth: 1,
			minorTickColor: "#A0A0A0",
			minorTickLength: 2,
			minorTickPosition: "outside",
			startOfWeek: 1,
			startOnTick: !1,
			tickColor: "#C0D0E0",
			tickLength: 10,
			tickmarkPlacement: "between",
			tickPixelInterval: 100,
			tickPosition: "outside",
			title: {
				align: "middle",
				style: {
					color: "#707070"
				}
			},
			type: "linear"
		},
		defaultYAxisOptions: {
			endOnTick: !0,
			gridLineWidth: 1,
			tickPixelInterval: 72,
			showLastLabel: !0,
			labels: {
				x: -8
			},
			lineWidth: 0,
			maxPadding: .05,
			minPadding: .05,
			startOnTick: !0,
			title: {
				rotation: 270,
				text: "Values"
			},
			stackLabels: {
				enabled: !1,
				formatter: function() {
					return st.numberFormat(this.total, -1)
				},
				style: n(ee.line.dataLabels.style, {
					color: "#000000"
				})
			}
		},
		defaultLeftAxisOptions: {
			labels: {
				x: -15
			},
			title: {
				rotation: 270
			}
		},
		defaultRightAxisOptions: {
			labels: {
				x: 15
			},
			title: {
				rotation: 90
			}
		},
		defaultBottomAxisOptions: {
			labels: {
				autoRotation: [-45],
				x: 0
			},
			title: {
				rotation: 0
			}
		},
		defaultTopAxisOptions: {
			labels: {
				autoRotation: [-45],
				x: 0
			},
			title: {
				rotation: 0
			}
		},
		init: function(t, e) {
			var i = e.isX;
			this.chart = t, this.horiz = t.inverted ? !i : i, this.coll = (this.isXAxis = i) ? "xAxis" : "yAxis", this.opposite = e.opposite, this.side = e.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3), this.setOptions(e);
			var n = this.options,
				r = n.type;
			this.labelFormatter = n.labels.formatter || this.defaultLabelFormatter, this.userOptions = e, this.minPixelPadding = 0, this.reversed = n.reversed, this.visible = n.visible !== !1, this.zoomEnabled = n.zoomEnabled !== !1, this.categories = n.categories || "category" === r, this.names = this.names || [], this.isLog = "logarithmic" === r, this.isDatetimeAxis = "datetime" === r, this.isLinked = c(n.linkedTo), this.ticks = {}, this.labelEdge = [], this.minorTicks = {}, this.plotLinesAndBands = [], this.alternateBands = {}, this.len = 0, this.minRange = this.userMinRange = n.minRange || n.maxZoom, this.range = n.range, this.offset = n.offset || 0, this.stacks = {}, this.oldStacks = {}, this.stacksTouched = 0, this.min = this.max = null, this.crosshair = Jt(n.crosshair, u(t.options.tooltip.crosshairs)[i ? 0 : 1], !1);
			var o, n = this.options.events; - 1 === Ht(this, t.axes) && (i && !this.isColorAxis ? t.axes.splice(t.xAxis.length, 0, this) : t.axes.push(this), t[this.coll].push(this)), this.series = this.series || [], t.inverted && i && this.reversed === B && (this.reversed = !0), this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
			for (o in n) Yt(this, o, n[o]);
			this.isLog && (this.val2lin = this.log2lin, this.lin2val = this.lin2log)
		},
		setOptions: function(t) {
			this.options = n(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], n(H[this.coll], t))
		},
		defaultLabelFormatter: function() {
			var t, e = this.axis,
				i = this.value,
				n = e.categories,
				r = this.dateTimeLabelFormat,
				o = H.lang.numericSymbols,
				s = o && o.length,
				a = e.options.labels.format,
				e = e.isLog ? i : e.tickInterval;
			if (a) t = y(a, this);
			else if (n) t = i;
			else if (r) t = W(r, i);
			else if (s && e >= 1e3) for (; s-- && t === B;) n = Math.pow(1e3, s + 1), e >= n && 10 * i % n === 0 && null !== o[s] && (t = st.numberFormat(i / n, -1) + o[s]);
			return t === B && (t = ft(i) >= 1e4 ? st.numberFormat(i, -1) : st.numberFormat(i, -1, B, "")), t
		},
		getSeriesExtremes: function() {
			var t = this,
				e = t.chart;
			t.hasVisibleSeries = !1, t.dataMin = t.dataMax = t.threshold = null, t.softThreshold = !t.isXAxis, t.buildStacks && t.buildStacks(), Wt(t.series, function(i) {
				if (i.visible || !e.options.chart.ignoreHiddenSeries) {
					var n, r = i.options,
						o = r.threshold;
					t.hasVisibleSeries = !0, t.isLog && 0 >= o && (o = null), t.isXAxis ? (r = i.xData, r.length && (i = k(r), !Qt(i) && !(i instanceof X) && (r = Ft(r, function(t) {
						return Qt(t)
					}), i = k(r)), t.dataMin = dt(Jt(t.dataMin, r[0]), i), t.dataMax = pt(Jt(t.dataMax, r[0]), A(r)))) : (i.getExtremes(), n = i.dataMax, i = i.dataMin, c(i) && c(n) && (t.dataMin = dt(Jt(t.dataMin, i), i), t.dataMax = pt(Jt(t.dataMax, n), n)), c(o) && (t.threshold = o), r.softThreshold && !t.isLog || (t.softThreshold = !1))
				}
			})
		},
		translate: function(t, e, i, n, r, o) {
			var s = this.linkedParent || this,
				a = 1,
				l = 0,
				c = n ? s.oldTransA : s.transA,
				n = n ? s.oldMin : s.min,
				h = s.minPixelPadding,
				r = (s.isOrdinal || s.isBroken || s.isLog && r) && s.lin2val;
			return c || (c = s.transA), i && (a *= -1, l = s.len), s.reversed && (a *= -1, l -= a * (s.sector || s.len)), e ? (t = t * a + l, t -= h, t = t / c + n, r && (t = s.lin2val(t))) : (r && (t = s.val2lin(t)), "between" === o && (o = .5), t = a * (t - n) * c + l + a * h + (Qt(o) ? c * o * s.pointRange : 0)), t
		},
		toPixels: function(t, e) {
			return this.translate(t, !1, !this.horiz, null, !0) + (e ? 0 : this.pos)
		},
		toValue: function(t, e) {
			return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, null, !0)
		},
		getPlotLinePath: function(t, e, i, n, r) {
			var o, s, a, l = this.chart,
				c = this.left,
				h = this.top,
				u = i && l.oldChartHeight || l.chartHeight,
				p = i && l.oldChartWidth || l.chartWidth;
			o = this.transB;
			var d = function(t, e, i) {
					return (e > t || t > i) && (n ? t = dt(pt(e, t), i) : a = !0), t
				},
				r = Jt(r, this.translate(t, null, null, i)),
				t = i = ct(r + o);
			return o = s = ct(u - r - o), Qt(r) ? this.horiz ? (o = h, s = u - this.bottom, t = i = d(t, c, c + this.width)) : (t = c, i = p - this.right, o = s = d(o, h, h + this.height)) : a = !0, a && !n ? null : l.renderer.crispLine(["M", t, o, "L", i, s], e || 1)
		},
		getLinearTickPositions: function(t, e, i) {
			var n, r = T(ht(e / t) * t),
				o = T(ut(i / t) * t),
				s = [];
			if (e === i && Qt(e)) return [e];
			for (e = r; o >= e && (s.push(e), e = T(e + t), e !== n);) n = e;
			return s
		},
		getMinorTickPositions: function() {
			var t, e = this.options,
				i = this.tickPositions,
				n = this.minorTickInterval,
				r = [],
				o = this.pointRangePadding || 0;
			t = this.min - o;
			var o = this.max + o,
				s = o - t;
			if (s && s / n < this.len / 3) if (this.isLog) for (o = i.length, t = 1; o > t; t++) r = r.concat(this.getLogTickPositions(n, i[t - 1], i[t], !0));
			else if (this.isDatetimeAxis && "auto" === e.minorTickInterval) r = r.concat(this.getTimeTicks(this.normalizeTimeTickInterval(n), t, o, e.startOfWeek));
			else for (i = t + (i[0] - t) % n; o >= i; i += n) r.push(i);
			return 0 !== r.length && this.trimTicks(r, e.startOnTick, e.endOnTick), r
		},
		adjustForMinRange: function() {
			var t, e, i, n, r, o, s, a = this.options,
				l = this.min,
				h = this.max,
				u = this.dataMax - this.dataMin >= this.minRange;
			this.isXAxis && this.minRange === B && !this.isLog && (c(a.min) || c(a.max) ? this.minRange = null : (Wt(this.series, function(t) {
				for (r = t.xData, i = o = t.xIncrement ? 1 : r.length - 1; i > 0; i--) n = r[i] - r[i - 1], (e === B || e > n) && (e = n)
			}), this.minRange = dt(5 * e, this.dataMax - this.dataMin))), h - l < this.minRange && (s = this.minRange, t = (s - h + l) / 2, t = [l - t, Jt(a.min, l - t)], u && (t[2] = this.dataMin), l = A(t), h = [l + s, Jt(a.max, l + s)], u && (h[2] = this.dataMax), h = k(h), s > h - l && (t[0] = h - s, t[1] = Jt(a.min, h - s), l = A(t))), this.min = l, this.max = h
		},
		getClosest: function() {
			var t;
			return Wt(this.series, function(e) {
				var i = e.closestPointRange;
				!e.noSharedTooltip && c(i) && (t = c(t) ? dt(t, i) : i)
			}), t
		},
		setAxisTranslation: function(t) {
			var e, i = this,
				n = i.max - i.min,
				r = i.axisPointRange || 0,
				s = 0,
				a = 0,
				l = i.linkedParent,
				c = !! i.categories,
				h = i.transA,
				u = i.isXAxis;
			(u || c || r) && (l ? (s = l.minPointOffset, a = l.pointRangePadding) : (e = i.getClosest(), Wt(i.series, function(t) {
				var n = c ? 1 : u ? Jt(t.options.pointRange, e, 0) : i.axisPointRange || 0,
					t = t.options.pointPlacement;
				r = pt(r, n), i.single || (s = pt(s, o(t) ? 0 : n / 2), a = pt(a, "on" === t ? 0 : n))
			})), l = i.ordinalSlope && e ? i.ordinalSlope / e : 1, i.minPointOffset = s *= l, i.pointRangePadding = a *= l, i.pointRange = dt(r, n), u && (i.closestPointRange = e)), t && (i.oldTransA = h), i.translationSlope = i.transA = h = i.len / (n + a || 1), i.transB = i.horiz ? i.left : i.bottom, i.minPixelPadding = h * s
		},
		minFromRange: function() {
			return this.max - this.range
		},
		setTickInterval: function(t) {
			var i, n, r, o, s = this,
				a = s.chart,
				l = s.options,
				h = s.isLog,
				u = s.log2lin,
				p = s.isDatetimeAxis,
				d = s.isXAxis,
				f = s.isLinked,
				g = l.maxPadding,
				m = l.minPadding,
				v = l.tickInterval,
				y = l.tickPixelInterval,
				w = s.categories,
				k = s.threshold,
				A = s.softThreshold;
			!p && !w && !f && this.getTickAmount(), r = Jt(s.userMin, l.min), o = Jt(s.userMax, l.max), f ? (s.linkedParent = a[s.coll][l.linkedTo], a = s.linkedParent.getExtremes(), s.min = Jt(a.min, a.dataMin), s.max = Jt(a.max, a.dataMax), l.type !== s.linkedParent.options.type && e(11, 1)) : (!A && c(k) && (s.dataMin >= k ? (i = k, m = 0) : s.dataMax <= k && (n = k, g = 0)), s.min = Jt(r, i, s.dataMin), s.max = Jt(o, n, s.dataMax)), h && (!t && dt(s.min, Jt(s.dataMin, s.min)) <= 0 && e(10, 1), s.min = T(u(s.min), 15), s.max = T(u(s.max), 15)), s.range && c(s.max) && (s.userMin = s.min = r = pt(s.min, s.minFromRange()), s.userMax = o = s.max, s.range = null), Ut(s, "foundExtremes"), s.beforePadding && s.beforePadding(), s.adjustForMinRange(), w || s.axisPointRange || s.usePercentage || f || !c(s.min) || !c(s.max) || !(u = s.max - s.min) || (!c(r) && m && (s.min -= u * m), !c(o) && g && (s.max += u * g)), Qt(l.floor) && (s.min = pt(s.min, l.floor)), Qt(l.ceiling) && (s.max = dt(s.max, l.ceiling)), A && c(s.dataMin) && (k = k || 0, !c(r) && s.min < k && s.dataMin >= k ? s.min = k : !c(o) && s.max > k && s.dataMax <= k && (s.max = k)), s.tickInterval = s.min === s.max || void 0 === s.min || void 0 === s.max ? 1 : f && !v && y === s.linkedParent.options.tickPixelInterval ? v = s.linkedParent.tickInterval : Jt(v, this.tickAmount ? (s.max - s.min) / pt(this.tickAmount - 1, 1) : void 0, w ? 1 : (s.max - s.min) * y / pt(s.len, y)), d && !t && Wt(s.series, function(t) {
				t.processData(s.min !== s.oldMin || s.max !== s.oldMax)
			}), s.setAxisTranslation(!0), s.beforeSetTickPositions && s.beforeSetTickPositions(), s.postProcessTickInterval && (s.tickInterval = s.postProcessTickInterval(s.tickInterval)), s.pointRange && !v && (s.tickInterval = pt(s.pointRange, s.tickInterval)), t = Jt(l.minTickInterval, s.isDatetimeAxis && s.closestPointRange), !v && s.tickInterval < t && (s.tickInterval = t), p || h || v || (s.tickInterval = x(s.tickInterval, null, b(s.tickInterval), Jt(l.allowDecimals, !(s.tickInterval > .5 && s.tickInterval < 5 && s.max > 1e3 && s.max < 9999)), !! this.tickAmount)), !this.tickAmount && this.len && (s.tickInterval = s.unsquish()), this.setTickPositions()
		},
		setTickPositions: function() {
			var t, e, i = this.options,
				n = i.tickPositions,
				r = i.tickPositioner,
				o = i.startOnTick,
				s = i.endOnTick;
			this.tickmarkOffset = this.categories && "between" === i.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0, this.minorTickInterval = "auto" === i.minorTickInterval && this.tickInterval ? this.tickInterval / 5 : i.minorTickInterval, this.tickPositions = t = n && n.slice(), !t && (t = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, i.units), this.min, this.max, i.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), t.length > this.len && (t = [t[0], t.pop()]), this.tickPositions = t, r && (r = r.apply(this, [this.min, this.max]))) && (this.tickPositions = t = r), this.isLinked || (this.trimTicks(t, o, s), this.min === this.max && c(this.min) && !this.tickAmount && (e = !0, this.min -= .5, this.max += .5), this.single = e, !n && !r && this.adjustTickAmount())
		},
		trimTicks: function(t, e, i) {
			var n = t[0],
				r = t[t.length - 1],
				o = this.minPointOffset || 0;
			if (e) this.min = n;
			else for (; this.min - o > t[0];) t.shift();
			if (i) this.max = r;
			else for (; this.max + o < t[t.length - 1];) t.pop();
			0 === t.length && c(n) && t.push((r + n) / 2)
		},
		alignToOthers: function() {
			var t, e = {},
				i = this.options;
			return this.chart.options.chart.alignTicks !== !1 && i.alignTicks !== !1 && Wt(this.chart[this.coll], function(i) {
				var n = i.options,
					n = [i.horiz ? n.left : n.top, n.width, n.height, n.pane].join(",");
				i.series.length && (e[n] ? t = !0 : e[n] = 1)
			}), t
		},
		getTickAmount: function() {
			var t = this.options,
				e = t.tickAmount,
				i = t.tickPixelInterval;
			!c(t.tickInterval) && this.len < i && !this.isRadial && !this.isLog && t.startOnTick && t.endOnTick && (e = 2), !e && this.alignToOthers() && (e = ut(this.len / i) + 1), 4 > e && (this.finalTickAmt = e, e = 5), this.tickAmount = e
		},
		adjustTickAmount: function() {
			var t = this.tickInterval,
				e = this.tickPositions,
				i = this.tickAmount,
				n = this.finalTickAmt,
				r = e && e.length;
			if (i > r) {
				for (; e.length < i;) e.push(T(e[e.length - 1] + t));
				this.transA *= (r - 1) / (i - 1), this.max = e[e.length - 1]
			} else r > i && (this.tickInterval *= 2, this.setTickPositions());
			if (c(n)) {
				for (t = i = e.length; t--;)(3 === n && t % 2 === 1 || 2 >= n && t > 0 && i - 1 > t) && e.splice(t, 1);
				this.finalTickAmt = B
			}
		},
		setScale: function() {
			var t, e;
			this.oldMin = this.min, this.oldMax = this.max, this.oldAxisLength = this.len, this.setAxisSize(), e = this.len !== this.oldAxisLength, Wt(this.series, function(e) {
				(e.isDirtyData || e.isDirty || e.xAxis.isDirty) && (t = !0)
			}), e || t || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = e || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks()
		},
		setExtremes: function(t, e, i, n, r) {
			var o = this,
				s = o.chart,
				i = Jt(i, !0);
			Wt(o.series, function(t) {
				delete t.kdTree
			}), r = Kt(r, {
				min: t,
				max: e
			}), Ut(o, "setExtremes", r, function() {
				o.userMin = t, o.userMax = e, o.eventArgs = r, i && s.redraw(n)
			})
		},
		zoom: function(t, e) {
			var i = this.dataMin,
				n = this.dataMax,
				r = this.options,
				o = dt(i, Jt(r.min, i)),
				r = pt(n, Jt(r.max, n));
			return this.allowZoomOutside || (c(i) && o >= t && (t = o), c(n) && e >= r && (e = r)), this.displayBtn = t !== B || e !== B, this.setExtremes(t, e, !1, B, {
				trigger: "zoom"
			}), !0
		},
		setAxisSize: function() {
			var t = this.chart,
				e = this.options,
				i = e.offsetLeft || 0,
				n = this.horiz,
				r = Jt(e.width, t.plotWidth - i + (e.offsetRight || 0)),
				o = Jt(e.height, t.plotHeight),
				s = Jt(e.top, t.plotTop),
				e = Jt(e.left, t.plotLeft + i),
				i = /%$/;
			i.test(o) && (o = Math.round(parseFloat(o) / 100 * t.plotHeight)), i.test(s) && (s = Math.round(parseFloat(s) / 100 * t.plotHeight + t.plotTop)), this.left = e, this.top = s, this.width = r, this.height = o, this.bottom = t.chartHeight - o - s, this.right = t.chartWidth - r - e, this.len = pt(n ? r : o, 0), this.pos = n ? e : s
		},
		getExtremes: function() {
			var t = this.isLog,
				e = this.lin2log;
			return {
				min: t ? T(e(this.min)) : this.min,
				max: t ? T(e(this.max)) : this.max,
				dataMin: this.dataMin,
				dataMax: this.dataMax,
				userMin: this.userMin,
				userMax: this.userMax
			}
		},
		getThreshold: function(t) {
			var e = this.isLog,
				i = this.lin2log,
				n = e ? i(this.min) : this.min,
				e = e ? i(this.max) : this.max;
			return null === t ? t = 0 > e ? e : n : n > t ? t = n : t > e && (t = e), this.translate(t, 0, 1, 0, 1)
		},
		autoLabelAlign: function(t) {
			return t = (Jt(t, 0) - 90 * this.side + 720) % 360, t > 15 && 165 > t ? "right" : t > 195 && 345 > t ? "left" : "center"
		},
		tickSize: function(t) {
			var e = this.options,
				i = e[t + "Length"],
				n = Jt(e[t + "Width"], "tick" === t && this.isXAxis ? 1 : 0);
			return n && i ? ("inside" === e[t + "Position"] && (i = -i), [i, n]) : void 0
		},
		labelMetrics: function() {
			return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize, this.ticks[0] && this.ticks[0].label)
		},
		unsquish: function() {
			var t, e, i, n = this.options.labels,
				r = this.horiz,
				o = this.tickInterval,
				s = o,
				a = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / o),
				l = n.rotation,
				h = this.labelMetrics(),
				u = Number.MAX_VALUE,
				p = function(t) {
					return t /= a || 1, t = t > 1 ? ut(t) : 1, t * o
				};
			return r ? (i = !n.staggerLines && !n.step && (c(l) ? [l] : a < Jt(n.autoRotationLimit, 80) && n.autoRotation)) && Wt(i, function(i) {
				var n;
				(i === l || i && i >= -90 && 90 >= i) && (e = p(ft(h.h / mt(yt * i))), n = e + ft(i / 360), u > n && (u = n, t = i, s = e))
			}) : n.step || (s = p(h.h)), this.autoRotation = i, this.labelRotation = Jt(t, l), s
		},
		getSlotWidth: function() {
			var t = this.chart,
				e = this.horiz,
				i = this.options.labels,
				n = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
				r = t.margin[3];
			return e && (i.step || 0) < 2 && !i.rotation && (this.staggerLines || 1) * t.plotWidth / n || !e && (r && r - t.spacing[3] || .33 * t.chartWidth)
		},
		renderUnsquish: function() {
			var t, e, i, r = this.chart,
				s = r.renderer,
				a = this.tickPositions,
				l = this.ticks,
				c = this.options.labels,
				h = this.horiz,
				u = this.getSlotWidth(),
				p = pt(1, ct(u - 2 * (c.padding || 5))),
				d = {},
				f = this.labelMetrics(),
				g = c.style.textOverflow,
				m = 0;
			if (o(c.rotation) || (d.rotation = c.rotation || 0), this.autoRotation) Wt(a, function(t) {
				(t = l[t]) && t.labelLength > m && (m = t.labelLength)
			}), m > p && m > f.h ? d.rotation = this.labelRotation : this.labelRotation = 0;
			else if (u && (t = {
				width: p + "px"
			}, !g)) for (t.textOverflow = "clip", e = a.length; !h && e--;) i = a[e], (p = l[i].label) && ("ellipsis" === p.styles.textOverflow ? p.css({
				textOverflow: "clip"
			}) : l[i].labelLength > u && p.css({
				width: u + "px"
			}), p.getBBox().height > this.len / a.length - (f.h - f.f) && (p.specCss = {
				textOverflow: "ellipsis"
			}));
			d.rotation && (t = {
				width: (m > .5 * r.chartHeight ? .33 * r.chartHeight : r.chartHeight) + "px"
			}, !g) && (t.textOverflow = "ellipsis"), (this.labelAlign = c.align || this.autoLabelAlign(this.labelRotation)) && (d.align = this.labelAlign), Wt(a, function(e) {
				var i = (e = l[e]) && e.label;
				i && (i.attr(d), t && i.css(n(t, i.specCss)), delete i.specCss, e.rotation = d.rotation)
			}), this.tickRotCorr = s.rotCorr(f.b, this.labelRotation || 0, 0 !== this.side)
		},
		hasData: function() {
			return this.hasVisibleSeries || c(this.min) && c(this.max) && !! this.tickPositions
		},
		getOffset: function() {
			var t, e, i, n, r = this,
				o = r.chart,
				s = o.renderer,
				a = r.options,
				l = r.tickPositions,
				h = r.ticks,
				u = r.horiz,
				p = r.side,
				d = o.inverted ? [1, 0, 3, 2][p] : p,
				f = 0,
				g = 0,
				m = a.title,
				v = a.labels,
				y = 0,
				b = r.opposite,
				x = o.axisOffset,
				o = o.clipOffset,
				w = [-1, 1, 1, -1][p],
				k = r.axisParent,
				A = this.tickSize("tick");
			if (t = r.hasData(), r.showAxis = e = t || Jt(a.showEmpty, !0), r.staggerLines = r.horiz && v.staggerLines, r.axisGroup || (r.gridGroup = s.g("grid").attr({
				zIndex: a.gridZIndex || 1
			}).add(k), r.axisGroup = s.g("axis").attr({
				zIndex: a.zIndex || 2
			}).add(k), r.labelGroup = s.g("axis-labels").attr({
				zIndex: v.zIndex || 7
			}).addClass("highcharts-" + r.coll.toLowerCase() + "-labels").add(k)), t || r.isLinked) Wt(l, function(t) {
				h[t] ? h[t].addLabel() : h[t] = new D(r, t)
			}), r.renderUnsquish(), v.reserveSpace !== !1 && (0 === p || 2 === p || {
				1: "left",
				3: "right"
			}[p] === r.labelAlign || "center" === r.labelAlign) && Wt(l, function(t) {
				y = pt(h[t].getLabelSize(), y)
			}), r.staggerLines && (y *= r.staggerLines, r.labelOffset = y * (r.opposite ? -1 : 1));
			else for (n in h) h[n].destroy(), delete h[n];
			m && m.text && m.enabled !== !1 && (r.axisTitle || ((n = m.textAlign) || (n = (u ? {
				low: "left",
				middle: "center",
				high: "right"
			} : {
				low: b ? "right" : "left",
				middle: "center",
				high: b ? "left" : "right"
			})[m.align]), r.axisTitle = s.text(m.text, 0, 0, m.useHTML).attr({
				zIndex: 7,
				rotation: m.rotation || 0,
				align: n
			}).addClass("highcharts-" + this.coll.toLowerCase() + "-title").css(m.style).add(r.axisGroup), r.axisTitle.isNew = !0), e && (f = r.axisTitle.getBBox()[u ? "height" : "width"], i = m.offset, g = c(i) ? 0 : Jt(m.margin, u ? 5 : 10)), r.axisTitle[e ? "show" : "hide"](!0)), r.offset = w * Jt(a.offset, x[p]), r.tickRotCorr = r.tickRotCorr || {
				x: 0,
				y: 0
			}, s = 0 === p ? -r.labelMetrics().h : 2 === p ? r.tickRotCorr.y : 0, g = Math.abs(y) + g, y && (g -= s, g += w * (u ? Jt(v.y, r.tickRotCorr.y + 8 * w) : v.x)), r.axisTitleMargin = Jt(i, g), x[p] = pt(x[p], r.axisTitleMargin + f + w * r.offset, g, t && l.length && A ? A[0] : 0), a = a.offset ? 0 : 2 * ht(a.lineWidth / 2), o[d] = pt(o[d], a)
		},
		getLinePath: function(t) {
			var e = this.chart,
				i = this.opposite,
				n = this.offset,
				r = this.horiz,
				o = this.left + (i ? this.width : 0) + n,
				n = e.chartHeight - this.bottom - (i ? this.height : 0) + n;
			return i && (t *= -1), e.renderer.crispLine(["M", r ? this.left : o, r ? n : this.top, "L", r ? e.chartWidth - this.right : o, r ? n : e.chartHeight - this.bottom], t)
		},
		getTitlePosition: function() {
			var t = this.horiz,
				e = this.left,
				i = this.top,
				n = this.len,
				o = this.options.title,
				s = t ? e : i,
				a = this.opposite,
				l = this.offset,
				c = o.x || 0,
				h = o.y || 0,
				u = r(o.style.fontSize || 12),
				n = {
					low: s + (t ? 0 : n),
					middle: s + n / 2,
					high: s + (t ? n : 0)
				}[o.align],
				e = (t ? i + this.height : e) + (t ? 1 : -1) * (a ? -1 : 1) * this.axisTitleMargin + (2 === this.side ? u : 0);
			return {
				x: t ? n + c : e + (a ? this.width : 0) + l + c,
				y: t ? e + h - (a ? this.height : 0) + l : n + h
			}
		},
		render: function() {
			var t, e, i, n = this,
				r = n.chart,
				o = r.renderer,
				s = n.options,
				a = n.isLog,
				l = n.lin2log,
				c = n.isLinked,
				h = n.tickPositions,
				u = n.axisTitle,
				d = n.ticks,
				f = n.minorTicks,
				g = n.alternateBands,
				m = s.stackLabels,
				v = s.alternateGridColor,
				y = n.tickmarkOffset,
				b = s.lineWidth,
				x = r.hasRendered && Qt(n.oldMin),
				w = n.showAxis,
				k = M(o.globalAnimation);
			n.labelEdge.length = 0, n.overlap = !1, Wt([d, f, g], function(t) {
				for (var e in t) t[e].isActive = !1
			}), (n.hasData() || c) && (n.minorTickInterval && !n.categories && Wt(n.getMinorTickPositions(), function(t) {
				f[t] || (f[t] = new D(n, t, "minor")), x && f[t].isNew && f[t].render(null, !0), f[t].render(null, !1, 1)
			}), h.length && (Wt(h, function(t, e) {
				(!c || t >= n.min && t <= n.max) && (d[t] || (d[t] = new D(n, t)), x && d[t].isNew && d[t].render(e, !0, .1), d[t].render(e))
			}), y && (0 === n.min || n.single)) && (d[-1] || (d[-1] = new D(n, -1, null, !0)), d[-1].render(-1)), v && Wt(h, function(t, o) {
				i = h[o + 1] !== B ? h[o + 1] + y : n.max - y, o % 2 === 0 && t < n.max && i <= n.max + (r.polar ? -y : y) && (g[t] || (g[t] = new st.PlotLineOrBand(n)), e = t + y, g[t].options = {
					from: a ? l(e) : e,
					to: a ? l(i) : i,
					color: v
				}, g[t].render(), g[t].isActive = !0)
			}), n._addedPlotLB || (Wt((s.plotLines || []).concat(s.plotBands || []), function(t) {
				n.addPlotBandOrLine(t)
			}), n._addedPlotLB = !0)), Wt([d, f, g], function(t) {
				var e, i, n = [],
					o = k.duration;
				for (e in t) t[e].isActive || (t[e].render(e, !1, 0), t[e].isActive = !1, n.push(e));
				p(function() {
					for (i = n.length; i--;) t[n[i]] && !t[n[i]].isActive && (t[n[i]].destroy(), delete t[n[i]])
				}, t !== g && r.hasRendered && o ? o : 0)
			}), b && (t = n.getLinePath(b), n.axisLine ? n.axisLine.animate({
				d: t
			}) : n.axisLine = o.path(t).attr({
				stroke: s.lineColor,
				"stroke-width": b,
				zIndex: 7
			}).add(n.axisGroup), n.axisLine[w ? "show" : "hide"](!0)), u && w && (u[u.isNew ? "attr" : "animate"](n.getTitlePosition()), u.isNew = !1), m && m.enabled && n.renderStackTotals(), n.isDirty = !1
		},
		redraw: function() {
			this.visible && (this.render(), Wt(this.plotLinesAndBands, function(t) {
				t.render()
			})), Wt(this.series, function(t) {
				t.isDirty = !0
			})
		},
		destroy: function(t) {
			var e, i = this,
				n = i.stacks,
				r = i.plotLinesAndBands;
			t || Gt(i);
			for (e in n) S(n[e]), n[e] = null;
			for (Wt([i.ticks, i.minorTicks, i.alternateBands], function(t) {
				S(t)
			}), t = r.length; t--;) r[t].destroy();
			Wt("stackTotalGroup,axisLine,axisTitle,axisGroup,cross,gridGroup,labelGroup".split(","), function(t) {
				i[t] && (i[t] = i[t].destroy())
			}), this.cross && this.cross.destroy()
		},
		drawCrosshair: function(t, e) {
			var i, n, r, o = this.crosshair;
			this.crosshair && (c(e) || !Jt(o.snap, !0)) !== !1 ? (Jt(o.snap, !0) ? c(e) && (i = this.isXAxis ? e.plotX : this.len - e.plotY) : i = this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos, i = this.isRadial ? this.getPlotLinePath(this.isXAxis ? e.x : Jt(e.stackY, e.y)) || null : this.getPlotLinePath(null, null, null, null, i) || null, null === i ? this.hideCrosshair() : (n = this.categories && !this.isRadial, r = Jt(o.width, n ? this.transA : 1), this.cross ? this.cross.attr({
				d: i,
				visibility: "visible",
				"stroke-width": r
			}) : (n = {
				"pointer-events": "none",
				"stroke-width": r,
				stroke: o.color || (n ? "rgba(155,200,255,0.2)" : "#C0C0C0"),
				zIndex: Jt(o.zIndex, 2)
			}, o.dashStyle && (n.dashstyle = o.dashStyle), this.cross = this.chart.renderer.path(i).attr(n).add()))) : this.hideCrosshair()
		},
		hideCrosshair: function() {
			this.cross && this.cross.hide()
		}
	}, Kt(ae.prototype, {
		getPlotBandPath: function(t, e) {
			var i = this.getPlotLinePath(e, null, null, !0),
				n = this.getPlotLinePath(t, null, null, !0);
			return n && i ? (n.flat = n.toString() === i.toString(), n.push(i[4], i[5], i[1], i[2])) : n = null, n
		},
		addPlotBand: function(t) {
			return this.addPlotBandOrLine(t, "plotBands")
		},
		addPlotLine: function(t) {
			return this.addPlotBandOrLine(t, "plotLines")
		},
		addPlotBandOrLine: function(t, e) {
			var i = new st.PlotLineOrBand(this, t).render(),
				n = this.userOptions;
			return i && (e && (n[e] = n[e] || [], n[e].push(t)), this.plotLinesAndBands.push(i)), i
		},
		removePlotBandOrLine: function(t) {
			for (var e = this.plotLinesAndBands, i = this.options, n = this.userOptions, r = e.length; r--;) e[r].id === t && e[r].destroy();
			Wt([i.plotLines || [], n.plotLines || [], i.plotBands || [], n.plotBands || []], function(e) {
				for (r = e.length; r--;) e[r].id === t && l(e, e[r])
			})
		}
	}), ae.prototype.getTimeTicks = function(t, e, i, n) {
		var r, o = [],
			s = {},
			a = H.global.useUTC,
			l = new X(e - v(e)),
			h = t.unitRange,
			u = t.count;
		if (c(e)) {
			l[J](h >= F.second ? 0 : u * ht(l.getMilliseconds() / u)), h >= F.second && l[tt](h >= F.minute ? 0 : u * ht(l.getSeconds() / u)), h >= F.minute && l[et](h >= F.hour ? 0 : u * ht(l[U]() / u)), h >= F.hour && l[it](h >= F.day ? 0 : u * ht(l[q]() / u)), h >= F.day && l[nt](h >= F.month ? 1 : u * ht(l[Z]() / u)), h >= F.month && (l[rt](h >= F.year ? 0 : u * ht(l[K]() / u)), r = l[Q]()), h >= F.year && (r -= r % u, l[ot](r)), h === F.week && l[nt](l[Z]() - l[V]() + Jt(n, 1)), e = 1, (Y || G) && (l = l.getTime(), l = new X(l + v(l))), r = l[Q]();
			for (var n = l.getTime(), p = l[K](), d = l[Z](), f = !a || !! G, g = (F.day + (a ? v(l) : 6e4 * l.getTimezoneOffset())) % F.day; i > n;) o.push(n), h === F.year ? n = $(r + e * u, 0) : h === F.month ? n = $(r, p + e * u) : !f || h !== F.day && h !== F.week ? n += h * u : n = $(r, p, d + e * u * (h === F.day ? 1 : 7)), e++;
			o.push(n), Wt(Ft(o, function(t) {
				return h <= F.hour && t % F.day === g
			}), function(t) {
				s[t] = "day"
			})
		}
		return o.info = Kt(t, {
			higherRanks: s,
			totalRange: h * u
		}), o
	}, ae.prototype.normalizeTimeTickInterval = function(t, e) {
		var i, n = e || [
			["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
			["second", [1, 2, 5, 10, 15, 30]],
			["minute", [1, 2, 5, 10, 15, 30]],
			["hour", [1, 2, 3, 4, 6, 8, 12]],
			["day", [1, 2]],
			["week", [1, 2]],
			["month", [1, 2, 3, 4, 6]],
			["year", null]
		],
			r = n[n.length - 1],
			o = F[r[0]],
			s = r[1];
		for (i = 0; i < n.length && (r = n[i], o = F[r[0]], s = r[1], !(n[i + 1] && t <= (o * s[s.length - 1] + F[n[i + 1][0]]) / 2)); i++);
		return o === F.year && 5 * o > t && (s = [1, 2, 5]), n = x(t / o, s, "year" === r[0] ? pt(b(t / o), 1) : 1), {
			unitRange: o,
			count: n,
			unitName: r[0]
		}
	}, ae.prototype.getLogTickPositions = function(t, e, i, n) {
		var r = this.options,
			o = this.len,
			s = this.lin2log,
			a = this.log2lin,
			l = [];
		if (n || (this._minorAutoInterval = null), t >= .5) t = ct(t), l = this.getLinearTickPositions(t, e, i);
		else if (t >= .08) for (var c, h, u, p, d, o = ht(e), r = t > .3 ? [1, 2, 4] : t > .15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; i + 1 > o && !d; o++) for (h = r.length, c = 0; h > c && !d; c++) u = a(s(o) * r[c]), u > e && (!n || i >= p) && p !== B && l.push(p), p > i && (d = !0), p = u;
		else e = s(e), i = s(i), t = r[n ? "minorTickInterval" : "tickInterval"], t = Jt("auto" === t ? null : t, this._minorAutoInterval, (i - e) * (r.tickPixelInterval / (n ? 5 : 1)) / ((n ? o / this.tickPositions.length : o) || 1)), t = x(t, null, b(t)), l = $t(this.getLinearTickPositions(t, e, i), a), n || (this._minorAutoInterval = t / 5);
		return n || (this.tickInterval = t), l
	}, ae.prototype.log2lin = function(t) {
		return lt.log(t) / lt.LN10
	}, ae.prototype.lin2log = function(t) {
		return lt.pow(10, t)
	};
	var le = st.Tooltip = function() {
			this.init.apply(this, arguments)
		};
	le.prototype = {
		init: function(t, e) {
			var i = e.borderWidth,
				n = e.style,
				o = r(n.padding);
			this.chart = t, this.options = e, this.crosshairs = [], this.now = {
				x: 0,
				y: 0
			}, this.isHidden = !0, this.label = t.renderer.label("", 0, 0, e.shape || "callout", null, null, e.useHTML, null, "tooltip").attr({
				padding: o,
				fill: e.backgroundColor,
				"stroke-width": i,
				r: e.borderRadius,
				zIndex: 8
			}).css(n).css({
				padding: 0
			}).add().attr({
				y: -9999
			}), Lt || this.label.shadow(e.shadow), this.shared = e.shared
		},
		destroy: function() {
			this.label && (this.label = this.label.destroy()), clearTimeout(this.hideTimer), clearTimeout(this.tooltipTimeout)
		},
		move: function(t, e, i, n) {
			var r = this,
				o = r.now,
				s = r.options.animation !== !1 && !r.isHidden && (ft(t - o.x) > 1 || ft(e - o.y) > 1),
				a = r.followPointer || r.len > 1;
			Kt(o, {
				x: s ? (2 * o.x + t) / 3 : t,
				y: s ? (o.y + e) / 2 : e,
				anchorX: a ? B : s ? (2 * o.anchorX + i) / 3 : i,
				anchorY: a ? B : s ? (o.anchorY + n) / 2 : n
			}), r.label.attr(o), s && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
				r && r.move(t, e, i, n)
			}, 32))
		},
		hide: function(t) {
			var e = this;
			clearTimeout(this.hideTimer), t = Jt(t, this.options.hideDelay, 500), this.isHidden || (this.hideTimer = p(function() {
				e.label[t ? "fadeOut" : "hide"](), e.isHidden = !0
			}, t))
		},
		getAnchor: function(t, e) {
			var i, n, r, o = this.chart,
				s = o.inverted,
				a = o.plotTop,
				l = o.plotLeft,
				c = 0,
				h = 0,
				t = u(t);
			return i = t[0].tooltipPos, this.followPointer && e && (e.chartX === B && (e = o.pointer.normalize(e)), i = [e.chartX - o.plotLeft, e.chartY - a]), i || (Wt(t, function(t) {
				n = t.series.yAxis, r = t.series.xAxis, c += t.plotX + (!s && r ? r.left - l : 0), h += (t.plotLow ? (t.plotLow + t.plotHigh) / 2 : t.plotY) + (!s && n ? n.top - a : 0)
			}), c /= t.length, h /= t.length, i = [s ? o.plotWidth - h : c, this.shared && !s && t.length > 1 && e ? e.chartY - a : s ? o.plotHeight - c : h]), $t(i, ct)
		},
		getPosition: function(t, e, i) {
			var n, r = this.chart,
				o = this.distance,
				s = {},
				a = i.h || 0,
				l = ["y", r.chartHeight, e, i.plotY + r.plotTop, r.plotTop, r.plotTop + r.plotHeight],
				c = ["x", r.chartWidth, t, i.plotX + r.plotLeft, r.plotLeft, r.plotLeft + r.plotWidth],
				h = !this.followPointer && Jt(i.ttBelow, !r.inverted == !! i.negative),
				u = function(t, e, i, n, r, l) {
					var c = n - o > i,
						u = e > n + o + i,
						p = n - o - i;
					if (n += o, h && u) s[t] = n;
					else if (!h && c) s[t] = p;
					else if (c) s[t] = dt(l - i, 0 > p - a ? p : p - a);
					else {
						if (!u) return !1;
						s[t] = pt(r, n + a + i > e ? n : n + a)
					}
				},
				p = function(t, e, i, n) {
					var r;
					return o > n || n > e - o ? r = !1 : s[t] = i / 2 > n ? 1 : n > e - i / 2 ? e - i - 2 : n - i / 2, r
				},
				d = function(t) {
					var e = l;
					l = c, c = e, n = t
				},
				f = function() {
					u.apply(0, l) !== !1 ? p.apply(0, c) === !1 && !n && (d(!0), f()) : n ? s.x = s.y = 0 : (d(!0), f())
				};
			return (r.inverted || this.len > 1) && d(), f(), s
		},
		defaultFormatter: function(t) {
			var e, i = this.points || u(this);
			return e = [t.tooltipFooterHeaderFormatter(i[0])], e = e.concat(t.bodyFormatter(i)), e.push(t.tooltipFooterHeaderFormatter(i[0], !0)), e.join("")
		},
		refresh: function(t, e) {
			var i, n, r, o, s = this.chart,
				a = this.label,
				l = this.options,
				c = {},
				h = [];
			o = l.formatter || this.defaultFormatter;
			var p, c = s.hoverPoints,
				d = this.shared;
			clearTimeout(this.hideTimer), this.followPointer = u(t)[0].series.tooltipOptions.followPointer, r = this.getAnchor(t, e), i = r[0], n = r[1], !d || t.series && t.series.noSharedTooltip ? c = t.getLabelConfig() : (s.hoverPoints = t, c && Wt(c, function(t) {
				t.setState()
			}), Wt(t, function(t) {
				t.setState("hover"), h.push(t.getLabelConfig())
			}), c = {
				x: t[0].category,
				y: t[0].y
			}, c.points = h, this.len = h.length, t = t[0]), o = o.call(c, this), c = t.series, this.distance = Jt(c.tooltipOptions.distance, 16), o === !1 ? this.hide() : (this.isHidden && (Vt(a), a.attr("opacity", 1).show()), a.attr({
				text: o
			}), p = l.borderColor || t.color || c.color || "#606060", a.attr({
				stroke: p
			}), this.updatePosition({
				plotX: i,
				plotY: n,
				negative: t.negative,
				ttBelow: t.ttBelow,
				h: r[2] || 0
			}), this.isHidden = !1), Ut(s, "tooltipRefresh", {
				text: o,
				x: i + s.plotLeft,
				y: n + s.plotTop,
				borderColor: p
			})
		},
		updatePosition: function(t) {
			var e = this.chart,
				i = this.label,
				i = (this.options.positioner || this.getPosition).call(this, i.width, i.height, t);
			this.move(ct(i.x), ct(i.y || 0), t.plotX + e.plotLeft, t.plotY + e.plotTop)
		},
		getXDateFormat: function(t, e, i) {
			var n, r, o, e = e.dateTimeLabelFormats,
				s = i && i.closestPointRange,
				a = {
					millisecond: 15,
					second: 12,
					minute: 9,
					hour: 6,
					day: 3
				},
				l = "millisecond";
			if (s) {
				o = W("%m-%d %H:%M:%S.%L", t.x);
				for (r in F) {
					if (s === F.week && +W("%w", t.x) === i.options.startOfWeek && "00:00:00.000" === o.substr(6)) {
						r = "week";
						break
					}
					if (F[r] > s) {
						r = l;
						break
					}
					if (a[r] && o.substr(a[r]) !== "01-01 00:00:00.000".substr(a[r])) break;
					"week" !== r && (l = r)
				}
				r && (n = e[r])
			} else n = e.day;
			return n || e.year
		},
		tooltipFooterHeaderFormatter: function(t, e) {
			var i = e ? "footer" : "header",
				n = t.series,
				r = n.tooltipOptions,
				o = r.xDateFormat,
				s = n.xAxis,
				a = s && "datetime" === s.options.type && Qt(t.key),
				i = r[i + "Format"];
			return a && !o && (o = this.getXDateFormat(t, r, s)), a && o && (i = i.replace("{point.key}", "{point.key:" + o + "}")), y(i, {
				point: t,
				series: n
			})
		},
		bodyFormatter: function(t) {
			return $t(t, function(t) {
				var e = t.series.tooltipOptions;
				return (e.pointFormatter || t.point.tooltipFormatter).call(t.point, e.pointFormat)
			})
		}
	};
	var ce;
	z = at && at.documentElement.ontouchstart !== B;
	var he = st.Pointer = function(t, e) {
			this.init(t, e)
		};
	if (he.prototype = {
		init: function(t, e) {
			var i, n = e.chart,
				r = n.events,
				o = Lt ? "" : n.zoomType,
				n = t.inverted;
			this.options = e, this.chart = t, this.zoomX = i = /x/.test(o), this.zoomY = o = /y/.test(o), this.zoomHor = i && !n || o && n, this.zoomVert = o && !n || i && n, this.hasZoom = i || o, this.runChartClick = r && !! r.click, this.pinchDown = [], this.lastValidTouch = {}, st.Tooltip && e.tooltip.enabled && (t.tooltip = new le(t, e.tooltip), this.followTouchMove = Jt(e.tooltip.followTouchMove, !0)), this.setDOMEvents()
		},
		normalize: function(e, i) {
			var n, r, e = e || t.event;
			return e.target || (e.target = e.srcElement), r = e.touches ? e.touches.length ? e.touches.item(0) : e.changedTouches[0] : e, i || (this.chartPosition = i = Xt(this.chart.container)), r.pageX === B ? (n = pt(e.x, e.clientX - i.left), r = e.y) : (n = r.pageX - i.left, r = r.pageY - i.top), Kt(e, {
				chartX: ct(n),
				chartY: ct(r)
			})
		},
		getCoordinates: function(t) {
			var e = {
				xAxis: [],
				yAxis: []
			};
			return Wt(this.chart.axes, function(i) {
				e[i.isXAxis ? "xAxis" : "yAxis"].push({
					axis: i,
					value: i.toValue(t[i.horiz ? "chartX" : "chartY"])
				})
			}), e
		},
		runPointActions: function(t) {
			var e, i, n, r, o = this.chart,
				s = o.series,
				a = o.tooltip,
				l = a ? a.shared : !1,
				c = o.hoverPoint,
				h = o.hoverSeries,
				u = [Number.MAX_VALUE, Number.MAX_VALUE],
				p = [],
				d = [];
			if (!l && !h) for (e = 0; e < s.length; e++)!s[e].directTouch && s[e].options.stickyTracking || (s = []);
			if (h && (l ? h.noSharedTooltip : h.directTouch) && c ? d = [c] : (Wt(s, function(e) {
				i = e.noSharedTooltip && l, n = !l && e.directTouch, e.visible && !i && !n && Jt(e.options.enableMouseTracking, !0) && (r = e.searchPoint(t, !i && 1 === e.kdDimensions)) && p.push(r)
			}), Wt(p, function(t) {
				t && Wt(["dist", "distX"], function(e, i) {
					if (Qt(t[e])) {
						var n = t[e] === u[i] && t.series.group.zIndex >= d[i].series.group.zIndex;
						(t[e] < u[i] || n) && (u[i] = t[e], d[i] = t)
					}
				})
			})), l) for (e = p.length; e--;)(p[e].clientX !== d[1].clientX || p[e].series.noSharedTooltip) && p.splice(e, 1);
			d[0] && (d[0] !== this.prevKDPoint || a && a.isHidden) ? l && !d[0].series.noSharedTooltip ? (p.length && a && a.refresh(p, t), Wt(p, function(e) {
				e.onMouseOver(t, e !== (h && h.directTouch && c || d[0]))
			}), this.prevKDPoint = d[1]) : (a && a.refresh(d[0], t), h && h.directTouch || d[0].onMouseOver(t), this.prevKDPoint = d[0]) : (s = h && h.tooltipOptions.followPointer, a && s && !a.isHidden && (s = a.getAnchor([{}], t), a.updatePosition({
				plotX: s[0],
				plotY: s[1]
			}))), this._onDocumentMouseMove || (this._onDocumentMouseMove = function(t) {
				It[ce] && It[ce].pointer.onDocumentMouseMove(t)
			}, Yt(at, "mousemove", this._onDocumentMouseMove)), Wt(l ? p : [Jt(c, d[1])], function(e) {
				Wt(o.axes, function(i) {
					(!e || e.series[i.coll] === i) && i.drawCrosshair(t, e)
				})
			})
		},
		reset: function(t, e) {
			var i = this.chart,
				n = i.hoverSeries,
				r = i.hoverPoint,
				o = i.hoverPoints,
				s = i.tooltip,
				a = s && s.shared ? o : r;
			t && a && Wt(u(a), function(e) {
				e.series.isCartesian && void 0 === e.plotX && (t = !1)
			}), t ? s && a && (s.refresh(a), r && (r.setState(r.state, !0), Wt(i.axes, function(t) {
				Jt(t.crosshair && t.crosshair.snap, !0) ? t.drawCrosshair(null, r) : t.hideCrosshair()
			}))) : (r && r.onMouseOut(), o && Wt(o, function(t) {
				t.setState()
			}), n && n.onMouseOut(), s && s.hide(e), this._onDocumentMouseMove && (Gt(at, "mousemove", this._onDocumentMouseMove), this._onDocumentMouseMove = null), Wt(i.axes, function(t) {
				t.hideCrosshair()
			}), this.hoverX = i.hoverPoints = i.hoverPoint = null)
		},
		scaleGroups: function(t, e) {
			var i, n = this.chart;
			Wt(n.series, function(r) {
				i = t || r.getPlotBox(), r.xAxis && r.xAxis.zoomEnabled && (r.group.attr(i), r.markerGroup && (r.markerGroup.attr(i), r.markerGroup.clip(e ? n.clipRect : null)), r.dataLabelsGroup && r.dataLabelsGroup.attr(i))
			}), n.clipRect.attr(e || n.clipBox)
		},
		dragStart: function(t) {
			var e = this.chart;
			e.mouseIsDown = t.type, e.cancelClick = !1, e.mouseDownX = this.mouseDownX = t.chartX, e.mouseDownY = this.mouseDownY = t.chartY
		},
		drag: function(t) {
			var e, i = this.chart,
				n = i.options.chart,
				r = t.chartX,
				o = t.chartY,
				s = this.zoomHor,
				a = this.zoomVert,
				l = i.plotLeft,
				c = i.plotTop,
				h = i.plotWidth,
				u = i.plotHeight,
				p = this.selectionMarker,
				d = this.mouseDownX,
				f = this.mouseDownY,
				g = n.panKey && t[n.panKey + "Key"];
			p && p.touch || (l > r ? r = l : r > l + h && (r = l + h), c > o ? o = c : o > c + u && (o = c + u), this.hasDragged = Math.sqrt(Math.pow(d - r, 2) + Math.pow(f - o, 2)), this.hasDragged > 10 && (e = i.isInsidePlot(d - l, f - c), i.hasCartesianSeries && (this.zoomX || this.zoomY) && e && !g && !p && (this.selectionMarker = p = i.renderer.rect(l, c, s ? 1 : h, a ? 1 : u, 0).attr({
				fill: n.selectionMarkerFill || "rgba(69,114,167,0.25)",
				zIndex: 7
			}).add()), p && s && (r -= d, p.attr({
				width: ft(r),
				x: (r > 0 ? 0 : r) + d
			})), p && a && (r = o - f, p.attr({
				height: ft(r),
				y: (r > 0 ? 0 : r) + f
			})), e && !p && n.panning && i.pan(t, n.panning)))
		},
		drop: function(t) {
			var e = this,
				i = this.chart,
				n = this.hasPinched;
			if (this.selectionMarker) {
				var r, o = {
					originalEvent: t,
					xAxis: [],
					yAxis: []
				},
					s = this.selectionMarker,
					a = s.attr ? s.attr("x") : s.x,
					l = s.attr ? s.attr("y") : s.y,
					h = s.attr ? s.attr("width") : s.width,
					u = s.attr ? s.attr("height") : s.height;
				(this.hasDragged || n) && (Wt(i.axes, function(i) {
					if (i.zoomEnabled && c(i.min) && (n || e[{
						xAxis: "zoomX",
						yAxis: "zoomY"
					}[i.coll]])) {
						var s = i.horiz,
							p = "touchend" === t.type ? i.minPixelPadding : 0,
							d = i.toValue((s ? a : l) + p),
							s = i.toValue((s ? a + h : l + u) - p);
						o[i.coll].push({
							axis: i,
							min: dt(d, s),
							max: pt(d, s)
						}), r = !0
					}
				}), r && Ut(i, "selection", o, function(t) {
					i.zoom(Kt(t, n ? {
						animation: !1
					} : null))
				})), this.selectionMarker = this.selectionMarker.destroy(), n && this.scaleGroups()
			}
			i && (d(i.container, {
				cursor: i._cursor
			}), i.cancelClick = this.hasDragged > 10, i.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
		},
		onContainerMouseDown: function(t) {
			t = this.normalize(t), t.preventDefault && t.preventDefault(), this.dragStart(t)
		},
		onDocumentMouseUp: function(t) {
			It[ce] && It[ce].pointer.drop(t)
		},
		onDocumentMouseMove: function(t) {
			var e = this.chart,
				i = this.chartPosition,
				t = this.normalize(t, i);
			i && !this.inClass(t.target, "highcharts-tracker") && !e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) && this.reset()
		},
		onContainerMouseLeave: function(t) {
			var e = It[ce];
			e && (t.relatedTarget || t.toElement) && (e.pointer.reset(), e.pointer.chartPosition = null)
		},
		onContainerMouseMove: function(t) {
			var e = this.chart;
			c(ce) && It[ce] && It[ce].mouseIsDown || (ce = e.index), t = this.normalize(t), t.returnValue = !1, "mousedown" === e.mouseIsDown && this.drag(t), (this.inClass(t.target, "highcharts-tracker") || e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop)) && !e.openMenu && this.runPointActions(t)
		},
		inClass: function(t, e) {
			for (var i; t;) {
				if (i = h(t, "class")) {
					if (-1 !== i.indexOf(e)) return !0;
					if (-1 !== i.indexOf("highcharts-container")) return !1
				}
				t = t.parentNode
			}
		},
		onTrackerMouseOut: function(t) {
			var e = this.chart.hoverSeries,
				t = t.relatedTarget || t.toElement;
			!e || !t || e.options.stickyTracking || this.inClass(t, "highcharts-tooltip") || this.inClass(t, "highcharts-series-" + e.index) || e.onMouseOut()
		},
		onContainerClick: function(t) {
			var e = this.chart,
				i = e.hoverPoint,
				n = e.plotLeft,
				r = e.plotTop,
				t = this.normalize(t);
			e.cancelClick || (i && this.inClass(t.target, "highcharts-tracker") ? (Ut(i.series, "click", Kt(t, {
				point: i
			})), e.hoverPoint && i.firePointEvent("click", t)) : (Kt(t, this.getCoordinates(t)), e.isInsidePlot(t.chartX - n, t.chartY - r) && Ut(e, "click", t)))
		},
		setDOMEvents: function() {
			var t = this,
				e = t.chart.container;
			e.onmousedown = function(e) {
				t.onContainerMouseDown(e)
			}, e.onmousemove = function(e) {
				t.onContainerMouseMove(e)
			}, e.onclick = function(e) {
				t.onContainerClick(e)
			}, Yt(e, "mouseleave", t.onContainerMouseLeave), 1 === Nt && Yt(at, "mouseup", t.onDocumentMouseUp), z && (e.ontouchstart = function(e) {
				t.onContainerTouchStart(e)
			}, e.ontouchmove = function(e) {
				t.onContainerTouchMove(e)
			}, 1 === Nt && Yt(at, "touchend", t.onDocumentTouchEnd))
		},
		destroy: function() {
			var t;
			Gt(this.chart.container, "mouseleave", this.onContainerMouseLeave), Nt || (Gt(at, "mouseup", this.onDocumentMouseUp), Gt(at, "touchend", this.onDocumentTouchEnd)), clearInterval(this.tooltipTimeout);
			for (t in this) this[t] = null
		}
	}, Kt(st.Pointer.prototype, {
		pinchTranslate: function(t, e, i, n, r, o) {
			(this.zoomHor || this.pinchHor) && this.pinchTranslateDirection(!0, t, e, i, n, r, o), (this.zoomVert || this.pinchVert) && this.pinchTranslateDirection(!1, t, e, i, n, r, o)
		},
		pinchTranslateDirection: function(t, e, i, n, r, o, s, a) {
			var l, c, h, u = this.chart,
				p = t ? "x" : "y",
				d = t ? "X" : "Y",
				f = "chart" + d,
				g = t ? "width" : "height",
				m = u["plot" + (t ? "Left" : "Top")],
				v = a || 1,
				y = u.inverted,
				b = u.bounds[t ? "h" : "v"],
				x = 1 === e.length,
				w = e[0][f],
				k = i[0][f],
				A = !x && e[1][f],
				S = !x && i[1][f],
				i = function() {
					!x && ft(w - A) > 20 && (v = a || ft(k - S) / ft(w - A)), c = (m - k) / v + w, l = u["plot" + (t ? "Width" : "Height")] / v
				};
			i(), e = c, e < b.min ? (e = b.min, h = !0) : e + l > b.max && (e = b.max - l, h = !0), h ? (k -= .8 * (k - s[p][0]), x || (S -= .8 * (S - s[p][1])), i()) : s[p] = [k, S], y || (o[p] = c - m, o[g] = l), o = y ? 1 / v : v, r[g] = l, r[p] = e, n[y ? t ? "scaleY" : "scaleX" : "scale" + d] = v, n["translate" + d] = o * m + (k - o * w)
		},
		pinch: function(t) {
			var e = this,
				i = e.chart,
				n = e.pinchDown,
				r = t.touches,
				o = r.length,
				s = e.lastValidTouch,
				a = e.hasZoom,
				l = e.selectionMarker,
				c = {},
				h = 1 === o && (e.inClass(t.target, "highcharts-tracker") && i.runTrackerClick || e.runChartClick),
				u = {};
			o > 1 && (e.initiated = !0), a && e.initiated && !h && t.preventDefault(), $t(r, function(t) {
				return e.normalize(t)
			}), "touchstart" === t.type ? (Wt(r, function(t, e) {
				n[e] = {
					chartX: t.chartX,
					chartY: t.chartY
				}
			}), s.x = [n[0].chartX, n[1] && n[1].chartX], s.y = [n[0].chartY, n[1] && n[1].chartY], Wt(i.axes, function(t) {
				if (t.zoomEnabled) {
					var e = i.bounds[t.horiz ? "h" : "v"],
						n = t.minPixelPadding,
						r = t.toPixels(Jt(t.options.min, t.dataMin)),
						o = t.toPixels(Jt(t.options.max, t.dataMax)),
						s = dt(r, o),
						r = pt(r, o);
					e.min = dt(t.pos, s - n), e.max = pt(t.pos + t.len, r + n)
				}
			}), e.res = !0) : n.length && (l || (e.selectionMarker = l = Kt({
				destroy: Dt,
				touch: !0
			}, i.plotBox)), e.pinchTranslate(n, r, c, l, u, s), e.hasPinched = a, e.scaleGroups(c, u), !a && e.followTouchMove && 1 === o ? this.runPointActions(e.normalize(t)) : e.res && (e.res = !1, this.reset(!1, 0)))
		},
		touch: function(t, e) {
			var i, n = this.chart;
			ce = n.index, 1 === t.touches.length ? (t = this.normalize(t), n.isInsidePlot(t.chartX - n.plotLeft, t.chartY - n.plotTop) && !n.openMenu ? (e && this.runPointActions(t), "touchmove" === t.type && (n = this.pinchDown, i = n[0] ? Math.sqrt(Math.pow(n[0].chartX - t.chartX, 2) + Math.pow(n[0].chartY - t.chartY, 2)) >= 4 : !1), Jt(i, !0) && this.pinch(t)) : e && this.reset()) : 2 === t.touches.length && this.pinch(t)
		},
		onContainerTouchStart: function(t) {
			this.touch(t, !0)
		},
		onContainerTouchMove: function(t) {
			this.touch(t)
		},
		onDocumentTouchEnd: function(t) {
			It[ce] && It[ce].pointer.drop(t)
		}
	}), t.PointerEvent || t.MSPointerEvent) {
		var ue = {},
			pe = !! t.PointerEvent,
			de = function() {
				var t, e = [];
				e.item = function(t) {
					return this[t]
				};
				for (t in ue) ue.hasOwnProperty(t) && e.push({
					pageX: ue[t].pageX,
					pageY: ue[t].pageY,
					target: ue[t].target
				});
				return e
			},
			fe = function(t, e, i, n) {
				"touch" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_TOUCH || !It[ce] || (n(t), n = It[ce].pointer, n[e]({
					type: i,
					target: t.currentTarget,
					preventDefault: Dt,
					touches: de()
				}))
			};
		Kt(he.prototype, {
			onContainerPointerDown: function(t) {
				fe(t, "onContainerTouchStart", "touchstart", function(t) {
					ue[t.pointerId] = {
						pageX: t.pageX,
						pageY: t.pageY,
						target: t.currentTarget
					}
				})
			},
			onContainerPointerMove: function(t) {
				fe(t, "onContainerTouchMove", "touchmove", function(t) {
					ue[t.pointerId] = {
						pageX: t.pageX,
						pageY: t.pageY
					}, ue[t.pointerId].target || (ue[t.pointerId].target = t.currentTarget)
				})
			},
			onDocumentPointerUp: function(t) {
				fe(t, "onDocumentTouchEnd", "touchend", function(t) {
					delete ue[t.pointerId]
				})
			},
			batchMSEvents: function(t) {
				t(this.chart.container, pe ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown), t(this.chart.container, pe ? "pointermove" : "MSPointerMove", this.onContainerPointerMove), t(at, pe ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
			}
		}), te(he.prototype, "init", function(t, e, i) {
			t.call(this, e, i), this.hasZoom && d(e.container, {
				"-ms-touch-action": "none",
				"touch-action": "none"
			})
		}), te(he.prototype, "setDOMEvents", function(t) {
			t.apply(this), (this.hasZoom || this.followTouchMove) && this.batchMSEvents(Yt)
		}), te(he.prototype, "destroy", function(t) {
			this.batchMSEvents(Gt), t.call(this)
		})
	}
	var ge = st.Legend = function(t, e) {
			this.init(t, e)
		};
	ge.prototype = {
		init: function(t, e) {
			var i = this,
				r = e.itemStyle,
				o = e.itemMarginTop || 0;
			this.options = e, e.enabled && (i.itemStyle = r, i.itemHiddenStyle = n(r, e.itemHiddenStyle), i.itemMarginTop = o, i.padding = r = Jt(e.padding, 8), i.initialItemX = r, i.initialItemY = r - 5, i.maxItemWidth = 0, i.chart = t, i.itemHeight = 0, i.symbolWidth = Jt(e.symbolWidth, 16), i.pages = [], i.render(), Yt(i.chart, "endResize", function() {
				i.positionCheckboxes()
			}))
		},
		colorizeItem: function(t, e) {
			var i, n = this.options,
				r = t.legendItem,
				o = t.legendLine,
				s = t.legendSymbol,
				a = this.itemHiddenStyle.color,
				n = e ? n.itemStyle.color : a,
				l = e ? t.legendColor || t.color || "#CCC" : a,
				a = t.options && t.options.marker,
				c = {
					fill: l
				};
			if (r && r.css({
				fill: n,
				color: n
			}), o && o.attr({
				stroke: l
			}), s) {
				if (a && s.isMarker) for (i in c.stroke = l, a = t.convertAttribs(a)) r = a[i], r !== B && (c[i] = r);
				s.attr(c)
			}
		},
		positionItem: function(t) {
			var e = this.options,
				i = e.symbolPadding,
				e = !e.rtl,
				n = t._legendItemPos,
				r = n[0],
				n = n[1],
				o = t.checkbox;
			(t = t.legendGroup) && t.element && t.translate(e ? r : this.legendWidth - r - 2 * i - 4, n), o && (o.x = r, o.y = n)
		},
		destroyItem: function(t) {
			var e = t.checkbox;
			Wt(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function(e) {
				t[e] && (t[e] = t[e].destroy())
			}), e && C(t.checkbox)
		},
		destroy: function() {
			var t = this.group,
				e = this.box;
			e && (this.box = e.destroy()), t && (this.group = t.destroy())
		},
		positionCheckboxes: function(t) {
			var e, i = this.group.alignAttr,
				n = this.clipHeight || this.legendHeight,
				r = this.titleHeight;
			i && (e = i.translateY, Wt(this.allItems, function(o) {
				var s, a = o.checkbox;
				a && (s = e + r + a.y + (t || 0) + 3, d(a, {
					left: i.translateX + o.checkboxOffset + a.x - 20 + "px",
					top: s + "px",
					display: s > e - 6 && e + n - 6 > s ? "" : "none"
				}))
			}))
		},
		renderTitle: function() {
			var t = this.padding,
				e = this.options.title,
				i = 0;
			e.text && (this.title || (this.title = this.chart.renderer.label(e.text, t - 3, t - 4, null, null, null, null, null, "legend-title").attr({
				zIndex: 1
			}).css(e.style).add(this.group)), t = this.title.getBBox(), i = t.height, this.offsetWidth = t.width, this.contentGroup.attr({
				translateY: i
			})), this.titleHeight = i
		},
		setText: function(t) {
			var e = this.options;
			t.legendItem.attr({
				text: e.labelFormat ? y(e.labelFormat, t) : e.labelFormatter.call(t)
			})
		},
		renderItem: function(t) {
			var e = this.chart,
				i = e.renderer,
				r = this.options,
				o = "horizontal" === r.layout,
				s = this.symbolWidth,
				a = r.symbolPadding,
				l = this.itemStyle,
				c = this.itemHiddenStyle,
				h = this.padding,
				u = o ? Jt(r.itemDistance, 20) : 0,
				p = !r.rtl,
				d = r.width,
				f = r.itemMarginBottom || 0,
				g = this.itemMarginTop,
				m = this.initialItemX,
				v = t.legendItem,
				y = t.series && t.series.drawLegendSymbol ? t.series : t,
				b = y.options,
				b = this.createCheckboxForItem && b && b.showCheckbox,
				x = r.useHTML;
			v || (t.legendGroup = i.g("legend-item").attr({
				zIndex: 1
			}).add(this.scrollGroup), t.legendItem = v = i.text("", p ? s + a : -a, this.baseline || 0, x).css(n(t.visible ? l : c)).attr({
				align: p ? "left" : "right",
				zIndex: 2
			}).add(t.legendGroup), this.baseline || (this.fontMetrics = i.fontMetrics(l.fontSize, v), this.baseline = this.fontMetrics.f + 3 + g, v.attr("y", this.baseline)), y.drawLegendSymbol(this, t), this.setItemEvents && this.setItemEvents(t, v, x, l, c), b && this.createCheckboxForItem(t)), this.colorizeItem(t, t.visible), this.setText(t), i = v.getBBox(), s = t.checkboxOffset = r.itemWidth || t.legendItemWidth || s + a + i.width + u + (b ? 20 : 0), this.itemHeight = a = ct(t.legendItemHeight || i.height), o && this.itemX - m + s > (d || e.chartWidth - 2 * h - m - r.x) && (this.itemX = m, this.itemY += g + this.lastLineHeight + f, this.lastLineHeight = 0), this.maxItemWidth = pt(this.maxItemWidth, s), this.lastItemY = g + this.itemY + f, this.lastLineHeight = pt(a, this.lastLineHeight), t._legendItemPos = [this.itemX, this.itemY], o ? this.itemX += s : (this.itemY += g + a + f, this.lastLineHeight = a), this.offsetWidth = d || pt((o ? this.itemX - m - u : s) + h, this.offsetWidth)
		},
		getAllItems: function() {
			var t = [];
			return Wt(this.chart.series, function(e) {
				var i = e.options;
				Jt(i.showInLegend, c(i.linkedTo) ? !1 : B, !0) && (t = t.concat(e.legendItems || ("point" === i.legendType ? e.data : e)))
			}), t
		},
		adjustMargins: function(t, e) {
			var i = this.chart,
				n = this.options,
				r = n.align.charAt(0) + n.verticalAlign.charAt(0) + n.layout.charAt(0);
			this.display && !n.floating && Wt([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function(o, s) {
				o.test(r) && !c(t[s]) && (i[Rt[s]] = pt(i[Rt[s]], i.legend[(s + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][s] * n[s % 2 ? "x" : "y"] + Jt(n.margin, 12) + e[s]))
			})
		},
		render: function() {
			var t, e, i, n, r = this,
				o = r.chart,
				s = o.renderer,
				a = r.group,
				l = r.box,
				c = r.options,
				h = r.padding,
				u = c.borderWidth,
				p = c.backgroundColor;
			r.itemX = r.initialItemX, r.itemY = r.initialItemY, r.offsetWidth = 0, r.lastItemY = 0, a || (r.group = a = s.g("legend").attr({
				zIndex: 7
			}).add(), r.contentGroup = s.g().attr({
				zIndex: 1
			}).add(a), r.scrollGroup = s.g().add(r.contentGroup)), r.renderTitle(), t = r.getAllItems(), w(t, function(t, e) {
				return (t.options && t.options.legendIndex || 0) - (e.options && e.options.legendIndex || 0)
			}), c.reversed && t.reverse(), r.allItems = t, r.display = e = !! t.length, r.lastLineHeight = 0, Wt(t, function(t) {
				r.renderItem(t)
			}), i = (c.width || r.offsetWidth) + h, n = r.lastItemY + r.lastLineHeight + r.titleHeight, n = r.handleOverflow(n), n += h, (u || p) && (l ? i > 0 && n > 0 && (l[l.isNew ? "attr" : "animate"](l.crisp({
				width: i,
				height: n
			})), l.isNew = !1) : (r.box = l = s.rect(0, 0, i, n, c.borderRadius, u || 0).attr({
				stroke: c.borderColor,
				"stroke-width": u || 0,
				fill: p || "none"
			}).add(a).shadow(c.shadow), l.isNew = !0), l[e ? "show" : "hide"]()), r.legendWidth = i, r.legendHeight = n, Wt(t, function(t) {
				r.positionItem(t)
			}), e && a.align(Kt({
				width: i,
				height: n
			}, c), !0, "spacingBox"), o.isResizing || this.positionCheckboxes()
		},
		handleOverflow: function(t) {
			var e, i, n = this,
				r = this.chart,
				o = r.renderer,
				s = this.options,
				a = s.y,
				a = r.spacingBox.height + ("top" === s.verticalAlign ? -a : a) - this.padding,
				l = s.maxHeight,
				c = this.clipRect,
				h = s.navigation,
				u = Jt(h.animation, !0),
				p = h.arrowSize || 12,
				d = this.nav,
				f = this.pages,
				g = this.padding,
				m = this.allItems,
				v = function(t) {
					c.attr({
						height: t
					}), n.contentGroup.div && (n.contentGroup.div.style.clip = "rect(" + g + "px,9999px," + (g + t) + "px,0)")
				};
			return "horizontal" === s.layout && (a /= 2), l && (a = dt(a, l)), f.length = 0, t > a && h.enabled !== !1 ? (this.clipHeight = e = pt(a - 20 - this.titleHeight - g, 0), this.currentPage = Jt(this.currentPage, 1), this.fullHeight = t, Wt(m, function(t, n) {
				var r = t._legendItemPos[1],
					o = ct(t.legendItem.getBBox().height),
					s = f.length;
				(!s || r - f[s - 1] > e && (i || r) !== f[s - 1]) && (f.push(i || r), s++), n === m.length - 1 && r + o - f[s - 1] > e && f.push(r), r !== i && (i = r)
			}), c || (c = n.clipRect = o.clipRect(0, g, 9999, 0), n.contentGroup.clip(c)), v(e), d || (this.nav = d = o.g().attr({
				zIndex: 1
			}).add(this.group), this.up = o.symbol("triangle", 0, 0, p, p).on("click", function() {
				n.scroll(-1, u)
			}).add(d), this.pager = o.text("", 15, 10).css(h.style).add(d), this.down = o.symbol("triangle-down", 0, 0, p, p).on("click", function() {
				n.scroll(1, u)
			}).add(d)), n.scroll(0), t = a) : d && (v(r.chartHeight), d.hide(), this.scrollGroup.attr({
				translateY: 1
			}), this.clipHeight = 0), t
		},
		scroll: function(t, e) {
			var i = this.pages,
				n = i.length,
				r = this.currentPage + t,
				o = this.clipHeight,
				s = this.options.navigation,
				a = s.activeColor,
				s = s.inactiveColor,
				l = this.pager,
				c = this.padding;
			r > n && (r = n), r > 0 && (e !== B && _(e, this.chart), this.nav.attr({
				translateX: c,
				translateY: o + this.padding + 7 + this.titleHeight,
				visibility: "visible"
			}), this.up.attr({
				fill: 1 === r ? s : a
			}).css({
				cursor: 1 === r ? "default" : "pointer"
			}), l.attr({
				text: r + "/" + n
			}), this.down.attr({
				x: 18 + this.pager.getBBox().width,
				fill: r === n ? s : a
			}).css({
				cursor: r === n ? "default" : "pointer"
			}), i = -i[r - 1] + this.initialItemY, this.scrollGroup.animate({
				translateY: i
			}), this.currentPage = r, this.positionCheckboxes(i))
		}
	}, oe = st.LegendSymbolMixin = {
		drawRectangle: function(t, e) {
			var i = t.options.symbolHeight || t.fontMetrics.f;
			e.legendSymbol = this.chart.renderer.rect(0, t.baseline - i + 1, t.symbolWidth, i, t.options.symbolRadius || 0).attr({
				zIndex: 3
			}).add(e.legendGroup)
		},
		drawLineMarker: function(t) {
			var e, i = this.options,
				n = i.marker,
				r = t.symbolWidth,
				o = this.chart.renderer,
				s = this.legendGroup,
				t = t.baseline - ct(.3 * t.fontMetrics.b);
			i.lineWidth && (e = {
				"stroke-width": i.lineWidth
			}, i.dashStyle && (e.dashstyle = i.dashStyle), this.legendLine = o.path(["M", 0, t, "L", r, t]).attr(e).add(s)), n && n.enabled !== !1 && (i = n.radius, this.legendSymbol = n = o.symbol(this.symbol, r / 2 - i, t - i, 2 * i, 2 * i, n).add(s), n.isMarker = !0)
		}
	}, (/Trident\/7\.0/.test(bt) || St) && te(ge.prototype, "positionItem", function(t, e) {
		var i = this,
			n = function() {
				e._legendItemPos && t.call(i, e)
			};
		n(), setTimeout(n)
	});
	var me = st.Chart = function() {
			this.getArgs.apply(this, arguments)
		};
	st.chart = function(t, e, i) {
		return new me(t, e, i)
	}, me.prototype = {
		callbacks: [],
		getArgs: function() {
			var t = [].slice.call(arguments);
			(o(t[0]) || t[0].nodeName) && (this.renderTo = t.shift()), this.init(t[0], t[1])
		},
		init: function(t, e) {
			var i, r = t.series;
			t.series = null, i = n(H, t), i.series = t.series = r, this.userOptions = t, r = i.chart, this.margin = this.splashArray("margin", r), this.spacing = this.splashArray("spacing", r);
			var o = r.events;
			this.bounds = {
				h: {},
				v: {}
			}, this.callback = e, this.isResizing = 0, this.options = i, this.axes = [], this.series = [], this.hasCartesianSeries = r.showAxes;
			var s, a = this;
			if (a.index = It.length, It.push(a), Nt++, r.reflow !== !1 && Yt(a, "load", function() {
				a.initReflow()
			}), o) for (s in o) Yt(a, s, o[s]);
			a.xAxis = [], a.yAxis = [], a.animation = Lt ? !1 : Jt(r.animation, !0), a.pointCount = a.colorCounter = a.symbolCounter = 0, a.firstRender()
		},
		initSeries: function(t) {
			var i = this.options.chart;
			return (i = zt[t.type || i.type || i.defaultSeriesType]) || e(17, !0), i = new i, i.init(this, t), i
		},
		isInsidePlot: function(t, e, i) {
			var n = i ? e : t,
				t = i ? t : e;
			return n >= 0 && n <= this.plotWidth && t >= 0 && t <= this.plotHeight
		},
		redraw: function(t) {
			var e, i, n = this.axes,
				r = this.series,
				o = this.pointer,
				s = this.legend,
				a = this.isDirtyLegend,
				l = this.hasCartesianSeries,
				c = this.isDirtyBox,
				h = r.length,
				u = h,
				p = this.renderer,
				d = p.isHidden(),
				f = [];
			for (_(t, this), d && this.cloneRenderTo(), this.layOutTitles(); u--;) if (t = r[u], t.options.stacking && (e = !0, t.isDirty)) {
				i = !0;
				break
			}
			if (i) for (u = h; u--;) t = r[u], t.options.stacking && (t.isDirty = !0);
			Wt(r, function(t) {
				t.isDirty && "point" === t.options.legendType && (t.updateTotals && t.updateTotals(), a = !0), t.isDirtyData && Ut(t, "updatedData")
			}), a && s.options.enabled && (s.render(), this.isDirtyLegend = !1), e && this.getStacks(), l && !this.isResizing && (this.maxTicks = null, Wt(n, function(t) {
				t.setScale()
			})), this.getMargins(), l && (Wt(n, function(t) {
				t.isDirty && (c = !0)
			}), Wt(n, function(t) {
				var i = t.min + "," + t.max;
				t.extKey !== i && (t.extKey = i, f.push(function() {
					Ut(t, "afterSetExtremes", Kt(t.eventArgs, t.getExtremes())), delete t.eventArgs
				})), (c || e) && t.redraw()
			})), c && this.drawChartBox(), Wt(r, function(t) {
				t.isDirty && t.visible && (!t.isCartesian || t.xAxis) && t.redraw()
			}), o && o.reset(!0), p.draw(), Ut(this, "redraw"), d && this.cloneRenderTo(!0), Wt(f, function(t) {
				t.call()
			})
		},
		get: function(t) {
			var e, i, n = this.axes,
				r = this.series;
			for (e = 0; e < n.length; e++) if (n[e].options.id === t) return n[e];
			for (e = 0; e < r.length; e++) if (r[e].options.id === t) return r[e];
			for (e = 0; e < r.length; e++) for (i = r[e].points || [], n = 0; n < i.length; n++) if (i[n].id === t) return i[n];
			return null
		},
		getAxes: function() {
			var t = this,
				e = this.options,
				i = e.xAxis = u(e.xAxis || {}),
				e = e.yAxis = u(e.yAxis || {});
			Wt(i, function(t, e) {
				t.index = e, t.isX = !0
			}), Wt(e, function(t, e) {
				t.index = e
			}), i = i.concat(e), Wt(i, function(e) {
				new ae(t, e)
			})
		},
		getSelectedPoints: function() {
			var t = [];
			return Wt(this.series, function(e) {
				t = t.concat(Ft(e.points || [], function(t) {
					return t.selected
				}))
			}), t
		},
		getSelectedSeries: function() {
			return Ft(this.series, function(t) {
				return t.selected
			})
		},
		setTitle: function(t, e, i) {
			var r, o, s = this,
				a = s.options;
			o = a.title = n(a.title, t), r = a.subtitle = n(a.subtitle, e), a = r, Wt([
				["title", t, o],
				["subtitle", e, a]
			], function(t) {
				var e = t[0],
					i = s[e],
					n = t[1],
					t = t[2];
				i && n && (s[e] = i = i.destroy()), t && t.text && !i && (s[e] = s.renderer.text(t.text, 0, 0, t.useHTML).attr({
					align: t.align,
					"class": "highcharts-" + e,
					zIndex: t.zIndex || 4
				}).css(t.style).add())
			}), s.layOutTitles(i)
		},
		layOutTitles: function(t) {
			var e = 0,
				i = this.title,
				n = this.subtitle,
				r = this.options,
				o = r.title,
				r = r.subtitle,
				s = this.renderer,
				a = this.spacingBox;
			!i || (i.css({
				width: (o.width || a.width + o.widthAdjust) + "px"
			}).align(Kt({
				y: s.fontMetrics(o.style.fontSize, i).b - 3
			}, o), !1, a), o.floating || o.verticalAlign) || (e = i.getBBox().height), n && (n.css({
				width: (r.width || a.width + r.widthAdjust) + "px"
			}).align(Kt({
				y: e + (o.margin - 13) + s.fontMetrics(r.style.fontSize, i).b
			}, r), !1, a), !r.floating && !r.verticalAlign && (e = ut(e + n.getBBox().height))), i = this.titleOffset !== e, this.titleOffset = e, !this.isDirtyBox && i && (this.isDirtyBox = i, this.hasRendered && Jt(t, !0) && this.isDirtyBox && this.redraw())
		},
		getChartSize: function() {
			var t = this.options.chart,
				e = t.width,
				t = t.height,
				i = this.renderToClone || this.renderTo;
			c(e) || (this.containerWidth = jt(i, "width")), c(t) || (this.containerHeight = jt(i, "height")), this.chartWidth = pt(0, e || this.containerWidth || 600), this.chartHeight = pt(0, Jt(t, this.containerHeight > 19 ? this.containerHeight : 400))
		},
		cloneRenderTo: function(t) {
			var e = this.renderToClone,
				i = this.container;
			t ? e && (this.renderTo.appendChild(i), C(e), delete this.renderToClone) : (i && i.parentNode === this.renderTo && this.renderTo.removeChild(i), this.renderToClone = e = this.renderTo.cloneNode(0), d(e, {
				position: "absolute",
				top: "-9999px",
				display: "block"
			}), e.style.setProperty && e.style.setProperty("display", "block", "important"), at.body.appendChild(e), i && e.appendChild(i))
		},
		getContainer: function() {
			var t, i, n, s = this.options,
				a = s.chart;
			t = this.renderTo;
			var l = "highcharts-" + Et++;
			t || (this.renderTo = t = a.renderTo), o(t) && (this.renderTo = t = at.getElementById(t)), t || e(13, !0), i = r(h(t, "data-highcharts-chart")), Qt(i) && It[i] && It[i].hasRendered && It[i].destroy(), h(t, "data-highcharts-chart", this.index), t.innerHTML = "", !a.skipClone && !t.offsetWidth && this.cloneRenderTo(), this.getChartSize(), i = this.chartWidth, n = this.chartHeight, this.container = t = f(Ot, {
				className: "highcharts-container" + (a.className ? " " + a.className : ""),
				id: l
			}, Kt({
				position: "relative",
				overflow: "hidden",
				width: i + "px",
				height: n + "px",
				textAlign: "left",
				lineHeight: "normal",
				zIndex: 0,
				"-webkit-tap-highlight-color": "rgba(0,0,0,0)"
			}, a.style), this.renderToClone || t), this._cursor = t.style.cursor, this.renderer = new(st[a.renderer] || R)(t, i, n, a.style, a.forExport, s.exporting && s.exporting.allowHTML), Lt && this.renderer.create(this, t, i, n), this.renderer.chartIndex = this.index
		},
		getMargins: function(t) {
			var e = this.spacing,
				i = this.margin,
				n = this.titleOffset;
			this.resetMargins(), n && !c(i[0]) && (this.plotTop = pt(this.plotTop, n + this.options.title.margin + e[0])), this.legend.adjustMargins(i, e), this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin), this.extraTopMargin && (this.plotTop += this.extraTopMargin), t || this.getAxisMargins()
		},
		getAxisMargins: function() {
			var t = this,
				e = t.axisOffset = [0, 0, 0, 0],
				i = t.margin;
			t.hasCartesianSeries && Wt(t.axes, function(t) {
				t.visible && t.getOffset()
			}), Wt(Rt, function(n, r) {
				c(i[r]) || (t[n] += e[r])
			}), t.setChartSize()
		},
		reflow: function(e) {
			var i = this,
				n = i.options.chart,
				r = i.renderTo,
				o = n.width || jt(r, "width"),
				s = n.height || jt(r, "height"),
				n = e ? e.target : t;
			i.hasUserSize || i.isPrinting || !o || !s || n !== t && n !== at || (o === i.containerWidth && s === i.containerHeight || (clearTimeout(i.reflowTimeout), i.reflowTimeout = p(function() {
				i.container && (i.setSize(o, s, !1), i.hasUserSize = null)
			}, e ? 100 : 0)), i.containerWidth = o, i.containerHeight = s)
		},
		initReflow: function() {
			var e = this,
				i = function(t) {
					e.reflow(t)
				};
			Yt(t, "resize", i), Yt(e, "destroy", function() {
				Gt(t, "resize", i)
			})
		},
		setSize: function(t, e, i) {
			var n, r, o = this,
				s = o.renderer;
			o.isResizing += 1, _(i, o), o.oldChartHeight = o.chartHeight, o.oldChartWidth = o.chartWidth, c(t) && (o.chartWidth = n = pt(0, ct(t)), o.hasUserSize = !! n), c(e) && (o.chartHeight = r = pt(0, ct(e))), t = s.globalAnimation, (t ? qt : d)(o.container, {
				width: n + "px",
				height: r + "px"
			}, t), o.setChartSize(!0), s.setSize(n, r, i), o.maxTicks = null, Wt(o.axes, function(t) {
				t.isDirty = !0, t.setScale()
			}), Wt(o.series, function(t) {
				t.isDirty = !0
			}), o.isDirtyLegend = !0, o.isDirtyBox = !0, o.layOutTitles(), o.getMargins(), o.redraw(i), o.oldChartHeight = null, Ut(o, "resize"), p(function() {
				o && Ut(o, "endResize", null, function() {
					o.isResizing -= 1
				})
			}, M(t).duration)
		},
		setChartSize: function(t) {
			var e, i, n, r, o = this.inverted,
				s = this.renderer,
				a = this.chartWidth,
				l = this.chartHeight,
				c = this.options.chart,
				h = this.spacing,
				u = this.clipOffset;
			this.plotLeft = e = ct(this.plotLeft), this.plotTop = i = ct(this.plotTop), this.plotWidth = n = pt(0, ct(a - e - this.marginRight)), this.plotHeight = r = pt(0, ct(l - i - this.marginBottom)), this.plotSizeX = o ? r : n, this.plotSizeY = o ? n : r, this.plotBorderWidth = c.plotBorderWidth || 0, this.spacingBox = s.spacingBox = {
				x: h[3],
				y: h[0],
				width: a - h[3] - h[1],
				height: l - h[0] - h[2]
			}, this.plotBox = s.plotBox = {
				x: e,
				y: i,
				width: n,
				height: r
			}, a = 2 * ht(this.plotBorderWidth / 2), o = ut(pt(a, u[3]) / 2), s = ut(pt(a, u[0]) / 2), this.clipBox = {
				x: o,
				y: s,
				width: ht(this.plotSizeX - pt(a, u[1]) / 2 - o),
				height: pt(0, ht(this.plotSizeY - pt(a, u[2]) / 2 - s))
			}, t || Wt(this.axes, function(t) {
				t.setAxisSize(), t.setAxisTranslation()
			})
		},
		resetMargins: function() {
			var t = this;
			Wt(Rt, function(e, i) {
				t[e] = Jt(t.margin[i], t.spacing[i])
			}), t.axisOffset = [0, 0, 0, 0], t.clipOffset = [0, 0, 0, 0]
		},
		drawChartBox: function() {
			var t, e = this.options.chart,
				i = this.renderer,
				n = this.chartWidth,
				r = this.chartHeight,
				o = this.chartBackground,
				s = this.plotBackground,
				a = this.plotBorder,
				l = this.plotBGImage,
				c = e.borderWidth || 0,
				h = e.backgroundColor,
				u = e.plotBackgroundColor,
				p = e.plotBackgroundImage,
				d = e.plotBorderWidth || 0,
				f = this.plotLeft,
				g = this.plotTop,
				m = this.plotWidth,
				v = this.plotHeight,
				y = this.plotBox,
				b = this.clipRect,
				x = this.clipBox;
			t = c + (e.shadow ? 8 : 0), (c || h) && (o ? o.animate(o.crisp({
				width: n - t,
				height: r - t
			})) : (o = {
				fill: h || "none"
			}, c && (o.stroke = e.borderColor, o["stroke-width"] = c), this.chartBackground = i.rect(t / 2, t / 2, n - t, r - t, e.borderRadius, c).attr(o).addClass("highcharts-background").add().shadow(e.shadow))), u && (s ? s.animate(y) : this.plotBackground = i.rect(f, g, m, v, 0).attr({
				fill: u
			}).add().shadow(e.plotShadow)), p && (l ? l.animate(y) : this.plotBGImage = i.image(p, f, g, m, v).add()), b ? b.animate({
				width: x.width,
				height: x.height
			}) : this.clipRect = i.clipRect(x), d && (a ? (a.strokeWidth = -d, a.animate(a.crisp({
				x: f,
				y: g,
				width: m,
				height: v
			}))) : this.plotBorder = i.rect(f, g, m, v, 0, -d).attr({
				stroke: e.plotBorderColor,
				"stroke-width": d,
				fill: "none",
				zIndex: 1
			}).add()), this.isDirtyBox = !1
		},
		propFromSeries: function() {
			var t, e, i, n = this,
				r = n.options.chart,
				o = n.options.series;
			Wt(["inverted", "angular", "polar"], function(s) {
				for (t = zt[r.type || r.defaultSeriesType], i = n[s] || r[s] || t && t.prototype[s], e = o && o.length; !i && e--;)(t = zt[o[e].type]) && t.prototype[s] && (i = !0);
				n[s] = i
			})
		},
		linkSeries: function() {
			var t = this,
				e = t.series;
			Wt(e, function(t) {
				t.linkedSeries.length = 0
			}), Wt(e, function(e) {
				var i = e.options.linkedTo;
				o(i) && (i = ":previous" === i ? t.series[e.index - 1] : t.get(i)) && (i.linkedSeries.push(e), e.linkedParent = i, e.visible = Jt(e.options.visible, i.options.visible, e.visible))
			})
		},
		renderSeries: function() {
			Wt(this.series, function(t) {
				t.translate(), t.render()
			})
		},
		renderLabels: function() {
			var t = this,
				e = t.options.labels;
			e.items && Wt(e.items, function(i) {
				var n = Kt(e.style, i.style),
					o = r(n.left) + t.plotLeft,
					s = r(n.top) + t.plotTop + 12;
				delete n.left, delete n.top, t.renderer.text(i.html, o, s).attr({
					zIndex: 2
				}).css(n).add()
			})
		},
		render: function() {
			var t, e, i, n, r = this.axes,
				o = this.renderer,
				s = this.options;
			this.setTitle(), this.legend = new ge(this, s.legend), this.getStacks && this.getStacks(), this.getMargins(!0), this.setChartSize(), t = this.plotWidth, e = this.plotHeight -= 21, Wt(r, function(t) {
				t.setScale()
			}), this.getAxisMargins(), i = t / this.plotWidth > 1.1, n = e / this.plotHeight > 1.05, (i || n) && (this.maxTicks = null, Wt(r, function(t) {
				(t.horiz && i || !t.horiz && n) && t.setTickInterval(!0)
			}), this.getMargins()), this.drawChartBox(), this.hasCartesianSeries && Wt(r, function(t) {
				t.visible && t.render()
			}), this.seriesGroup || (this.seriesGroup = o.g("series-group").attr({
				zIndex: 3
			}).add()), this.renderSeries(), this.renderLabels(), this.showCredits(s.credits), this.hasRendered = !0
		},
		showCredits: function(e) {
			e.enabled && !this.credits && (this.credits = this.renderer.text(e.text, 0, 0).on("click", function() {
				e.href && (t.location.href = e.href)
			}).attr({
				align: e.position.align,
				zIndex: 8
			}).css(e.style).add().align(e.position))
		},
		destroy: function() {
			var t, e = this,
				i = e.axes,
				n = e.series,
				r = e.container,
				o = r && r.parentNode;
			for (Ut(e, "destroy"), It[e.index] = B, Nt--, e.renderTo.removeAttribute("data-highcharts-chart"), Gt(e), t = i.length; t--;) i[t] = i[t].destroy();
			for (t = n.length; t--;) n[t] = n[t].destroy();
			Wt("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,pointer,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","), function(t) {
				var i = e[t];
				i && i.destroy && (e[t] = i.destroy())
			}), r && (r.innerHTML = "", Gt(r), o && C(r));
			for (t in e) delete e[t]
		},
		isReadyToRender: function() {
			var e = this;
			return !_t && t == t.top && "complete" !== at.readyState || Lt && !t.canvg ? (Lt ? se.push(function() {
				e.firstRender()
			}, e.options.global.canvasToolsURL) : at.attachEvent("onreadystatechange", function() {
				at.detachEvent("onreadystatechange", e.firstRender), "complete" === at.readyState && e.firstRender()
			}), !1) : !0
		},
		firstRender: function() {
			var t = this,
				e = t.options;
			t.isReadyToRender() && (t.getContainer(), Ut(t, "init"), t.resetMargins(), t.setChartSize(), t.propFromSeries(), t.getAxes(), Wt(e.series || [], function(e) {
				t.initSeries(e)
			}), t.linkSeries(), Ut(t, "beforeRender"), st.Pointer && (t.pointer = new he(t, e)), t.render(), t.renderer.draw(), !t.renderer.imgCount && t.onload && t.onload(), t.cloneRenderTo(!0))
		},
		onload: function() {
			var t = this;
			Wt([this.callback].concat(this.callbacks), function(e) {
				e && void 0 !== t.index && e.apply(t, [t])
			}), Ut(t, "load"), this.onload = null
		},
		splashArray: function(t, e) {
			var i = e[t],
				i = s(i) ? i : [i, i, i, i];
			return [Jt(e[t + "Top"], i[0]), Jt(e[t + "Right"], i[1]), Jt(e[t + "Bottom"], i[2]), Jt(e[t + "Left"], i[3])]
		}
	};
	var ve = st.CenteredSeriesMixin = {
		getCenter: function() {
			var t, e, i = this.options,
				n = this.chart,
				r = 2 * (i.slicedOffset || 0),
				o = n.plotWidth - 2 * r,
				n = n.plotHeight - 2 * r,
				s = i.center,
				s = [Jt(s[0], "50%"), Jt(s[1], "50%"), i.size || "100%", i.innerSize || 0],
				a = dt(o, n);
			for (t = 0; 4 > t; ++t) e = s[t], i = 2 > t || 2 === t && /%$/.test(e), s[t] = (/%$/.test(e) ? [o, n, a, s[2]][t] * parseFloat(e) / 100 : parseFloat(e)) + (i ? r : 0);
			return s[3] > s[2] && (s[3] = s[2]), s
		}
	},
		ye = function() {};
	ye.prototype = {
		init: function(t, e, i) {
			return this.series = t, this.color = t.color, this.applyOptions(e, i), this.pointAttr = {}, t.options.colorByPoint && (e = t.options.colors || t.chart.options.colors, this.color = this.color || e[t.colorCounter++], t.colorCounter === e.length) && (t.colorCounter = 0), t.chart.pointCount++, this
		},
		applyOptions: function(t, e) {
			var i = this.series,
				n = i.options.pointValKey || i.pointValKey,
				t = ye.prototype.optionsToObject.call(this, t);
			return Kt(this, t), this.options = this.options ? Kt(this.options, t) : t, n && (this.y = this[n]), this.isNull = null === this.x || null === this.y, void 0 === this.x && i && (this.x = void 0 === e ? i.autoIncrement() : e), this
		},
		optionsToObject: function(t) {
			var e = {},
				i = this.series,
				n = i.options.keys,
				r = n || i.pointArrayMap || ["y"],
				o = r.length,
				s = 0,
				l = 0;
			if (Qt(t) || null === t) e[r[0]] = t;
			else if (a(t)) for (!n && t.length > o && (i = typeof t[0], "string" === i ? e.name = t[0] : "number" === i && (e.x = t[0]), s++); o > l;) n && void 0 === t[s] || (e[r[l]] = t[s]), s++, l++;
			else "object" == typeof t && (e = t, t.dataLabels && (i._hasPointLabels = !0), t.marker && (i._hasPointMarkers = !0));
			return e
		},
		destroy: function() {
			var t, e = this.series.chart,
				i = e.hoverPoints;
			e.pointCount--, i && (this.setState(), l(i, this), !i.length) && (e.hoverPoints = null), this === e.hoverPoint && this.onMouseOut(), (this.graphic || this.dataLabel) && (Gt(this), this.destroyElements()), this.legendItem && e.legend.destroyItem(this);
			for (t in this) this[t] = null
		},
		destroyElements: function() {
			for (var t, e = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], i = 6; i--;) t = e[i], this[t] && (this[t] = this[t].destroy())
		},
		getLabelConfig: function() {
			return {
				x: this.category,
				y: this.y,
				color: this.color,
				key: this.name || this.category,
				series: this.series,
				point: this,
				percentage: this.percentage,
				total: this.total || this.stackTotal
			}
		},
		tooltipFormatter: function(t) {
			var e = this.series,
				i = e.tooltipOptions,
				n = Jt(i.valueDecimals, ""),
				r = i.valuePrefix || "",
				o = i.valueSuffix || "";
			return Wt(e.pointArrayMap || ["y"], function(e) {
				e = "{point." + e, (r || o) && (t = t.replace(e + "}", r + e + "}" + o)), t = t.replace(e + "}", e + ":,." + n + "f}")
			}), y(t, {
				point: this,
				series: this.series
			})
		},
		firePointEvent: function(t, e, i) {
			var n = this,
				r = this.series.options;
			(r.point.events[t] || n.options && n.options.events && n.options.events[t]) && this.importEvents(), "click" === t && r.allowPointSelect && (i = function(t) {
				n.select && n.select(null, t.ctrlKey || t.metaKey || t.shiftKey)
			}), Ut(this, t, e, i)
		},
		visible: !0
	};
	var be = st.Series = function() {};
	be.prototype = {
		isCartesian: !0,
		type: "line",
		pointClass: ye,
		sorted: !0,
		requireSorting: !0,
		pointAttrToOptions: {
			stroke: "lineColor",
			"stroke-width": "lineWidth",
			fill: "fillColor",
			r: "radius"
		},
		directTouch: !1,
		axisTypes: ["xAxis", "yAxis"],
		colorCounter: 0,
		parallelArrays: ["x", "y"],
		init: function(t, e) {
			var i, n, r = this,
				o = t.series,
				s = function(t, e) {
					return Jt(t.options.index, t._i) - Jt(e.options.index, e._i)
				};
			r.chart = t, r.options = e = r.setOptions(e), r.linkedSeries = [], r.bindAxes(), Kt(r, {
				name: e.name,
				state: "",
				pointAttr: {},
				visible: e.visible !== !1,
				selected: e.selected === !0
			}), Lt && (e.animation = !1), n = e.events;
			for (i in n) Yt(r, i, n[i]);
			(n && n.click || e.point && e.point.events && e.point.events.click || e.allowPointSelect) && (t.runTrackerClick = !0), r.getColor(), r.getSymbol(), Wt(r.parallelArrays, function(t) {
				r[t + "Data"] = []
			}), r.setData(e.data, !1), r.isCartesian && (t.hasCartesianSeries = !0), o.push(r), r._i = o.length - 1, w(o, s), this.yAxis && w(this.yAxis.series, s), Wt(o, function(t, e) {
				t.index = e, t.name = t.name || "Series " + (e + 1)
			})
		},
		bindAxes: function() {
			var t, i = this,
				n = i.options,
				r = i.chart;
			Wt(i.axisTypes || [], function(o) {
				Wt(r[o], function(e) {
					t = e.options, (n[o] === t.index || n[o] !== B && n[o] === t.id || n[o] === B && 0 === t.index) && (e.series.push(i), i[o] = e, e.isDirty = !0)
				}), !i[o] && i.optionalAxis !== o && e(18, !0)
			})
		},
		updateParallelArrays: function(t, e) {
			var i = t.series,
				n = arguments,
				r = Qt(e) ?
			function(n) {
				var r = "y" === n && i.toYData ? i.toYData(t) : t[n];
				i[n + "Data"][e] = r
			} : function(t) {
				Array.prototype[e].apply(i[t + "Data"], Array.prototype.slice.call(n, 2))
			};
			Wt(i.parallelArrays, r)
		},
		autoIncrement: function() {
			var t, e = this.options,
				i = this.xIncrement,
				n = e.pointIntervalUnit,
				i = Jt(i, e.pointStart, 0);
			return this.pointInterval = t = Jt(this.pointInterval, e.pointInterval, 1), n && (e = new X(i), "day" === n ? e = +e[nt](e[Z]() + t) : "month" === n ? e = +e[rt](e[K]() + t) : "year" === n && (e = +e[ot](e[Q]() + t)), t = e - i), this.xIncrement = i + t, i
		},
		setOptions: function(t) {
			var e = this.chart,
				i = e.options.plotOptions,
				e = e.userOptions || {},
				r = e.plotOptions || {},
				o = i[this.type];
			return this.userOptions = t, i = n(o, i.series, t), this.tooltipOptions = n(H.tooltip, H.plotOptions[this.type].tooltip, e.tooltip, r.series && r.series.tooltip, r[this.type] && r[this.type].tooltip, t.tooltip), null === o.marker && delete i.marker, this.zoneAxis = i.zoneAxis, t = this.zones = (i.zones || []).slice(), !i.negativeColor && !i.negativeFillColor || i.zones || t.push({
				value: i[this.zoneAxis + "Threshold"] || i.threshold || 0,
				color: i.negativeColor,
				fillColor: i.negativeFillColor
			}), t.length && c(t[t.length - 1].value) && t.push({
				color: this.color,
				fillColor: this.fillColor
			}), i
		},
		getCyclic: function(t, e, i) {
			var n = this.userOptions,
				r = "_" + t + "Index",
				o = t + "Counter";
			e || (c(n[r]) ? e = n[r] : (n[r] = e = this.chart[o] % i.length, this.chart[o] += 1), e = i[e]), this[t] = e
		},
		getColor: function() {
			this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || ee[this.type].color, this.chart.options.colors)
		},
		getSymbol: function() {
			var t = this.options.marker;
			this.getCyclic("symbol", t.symbol, this.chart.options.symbols), /^url/.test(this.symbol) && (t.radius = 0)
		},
		drawLegendSymbol: oe.drawLineMarker,
		setData: function(t, i, n, r) {
			var s, l = this,
				h = l.points,
				u = h && h.length || 0,
				p = l.options,
				d = l.chart,
				f = null,
				g = l.xAxis,
				m = g && !! g.categories,
				v = p.turboThreshold,
				y = this.xData,
				b = this.yData,
				x = (s = l.pointArrayMap) && s.length,
				t = t || [];
			if (s = t.length, i = Jt(i, !0), r !== !1 && s && u === s && !l.cropped && !l.hasGroupedData && l.visible) Wt(t, function(t, e) {
				h[e].update && t !== p.data[e] && h[e].update(t, !1, null, !1)
			});
			else {
				if (l.xIncrement = null, l.colorCounter = 0, Wt(this.parallelArrays, function(t) {
					l[t + "Data"].length = 0
				}), v && s > v) {
					for (n = 0; null === f && s > n;) f = t[n], n++;
					if (Qt(f)) {
						for (m = Jt(p.pointStart, 0), f = Jt(p.pointInterval, 1), n = 0; s > n; n++) y[n] = m, b[n] = t[n], m += f;
						l.xIncrement = m
					} else if (a(f)) if (x) for (n = 0; s > n; n++) f = t[n], y[n] = f[0], b[n] = f.slice(1, x + 1);
					else for (n = 0; s > n; n++) f = t[n], y[n] = f[0], b[n] = f[1];
					else e(12)
				} else for (n = 0; s > n; n++) t[n] !== B && (f = {
					series: l
				}, l.pointClass.prototype.applyOptions.apply(f, [t[n]]), l.updateParallelArrays(f, n), m && c(f.name)) && (g.names[f.x] = f.name);
				for (o(b[0]) && e(14, !0), l.data = [], l.options.data = l.userOptions.data = t, n = u; n--;) h[n] && h[n].destroy && h[n].destroy();
				g && (g.minRange = g.userMinRange), l.isDirty = l.isDirtyData = d.isDirtyBox = !0, n = !1
			}
			"point" === p.legendType && (this.processData(), this.generatePoints()), i && d.redraw(n)
		},
		processData: function(t) {
			var i, n = this.xData,
				r = this.yData,
				o = n.length;
			i = 0;
			var s, a, l, c = this.xAxis,
				h = this.options;
			l = h.cropThreshold;
			var u, p, d = this.getExtremesFromAll || h.getExtremesFromAll,
				f = this.isCartesian,
				h = c && c.val2lin,
				g = c && c.isLog;
			if (f && !this.isDirty && !c.isDirty && !this.yAxis.isDirty && !t) return !1;
			for (c && (t = c.getExtremes(), u = t.min, p = t.max), f && this.sorted && !d && (!l || o > l || this.forceCrop) && (n[o - 1] < u || n[0] > p ? (n = [], r = []) : (n[0] < u || n[o - 1] > p) && (i = this.cropData(this.xData, this.yData, u, p), n = i.xData, r = i.yData, i = i.start, s = !0)), l = n.length || 1; --l;) o = g ? h(n[l]) - h(n[l - 1]) : n[l] - n[l - 1], o > 0 && (a === B || a > o) ? a = o : 0 > o && this.requireSorting && e(15);
			this.cropped = s, this.cropStart = i, this.processedXData = n, this.processedYData = r, this.closestPointRange = a
		},
		cropData: function(t, e, i, n) {
			var r, o = t.length,
				s = 0,
				a = o,
				l = Jt(this.cropShoulder, 1);
			for (r = 0; o > r; r++) if (t[r] >= i) {
				s = pt(0, r - l);
				break
			}
			for (i = r; o > i; i++) if (t[i] > n) {
				a = i + l;
				break
			}
			return {
				xData: t.slice(s, a),
				yData: e.slice(s, a),
				start: s,
				end: a
			}
		},
		generatePoints: function() {
			var t, e, i, n, r = this.options.data,
				o = this.data,
				s = this.processedXData,
				a = this.processedYData,
				l = this.pointClass,
				c = s.length,
				h = this.cropStart || 0,
				p = this.hasGroupedData,
				d = [];
			for (o || p || (o = [], o.length = r.length, o = this.data = o), n = 0; c > n; n++) e = h + n, p ? (d[n] = (new l).init(this, [s[n]].concat(u(a[n]))), d[n].dataGroup = this.groupMap[n]) : (o[e] ? i = o[e] : r[e] !== B && (o[e] = i = (new l).init(this, r[e], s[n])), d[n] = i), d[n].index = e;
			if (o && (c !== (t = o.length) || p)) for (n = 0; t > n; n++) n === h && !p && (n += c), o[n] && (o[n].destroyElements(), o[n].plotX = B);
			this.data = o, this.points = d
		},
		getExtremes: function(t) {
			var e, i = this.yAxis,
				n = this.processedXData,
				r = [],
				o = 0;
			e = this.xAxis.getExtremes();
			var s, a, l, c, h = e.min,
				u = e.max,
				t = t || this.stackedYData || this.processedYData || [];
			for (e = t.length, c = 0; e > c; c++) if (a = n[c], l = t[c], s = null !== l && l !== B && (!i.isLog || l.length || l > 0), a = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (n[c + 1] || a) >= h && (n[c - 1] || a) <= u, s && a) if (s = l.length) for (; s--;) null !== l[s] && (r[o++] = l[s]);
			else r[o++] = l;
			this.dataMin = k(r), this.dataMax = A(r)
		},
		translate: function() {
			this.processedXData || this.processData(), this.generatePoints();
			for (var t, i, n, r, o = this.options, s = o.stacking, a = this.xAxis, l = a.categories, h = this.yAxis, u = this.points, p = u.length, d = !! this.modifyValue, f = o.pointPlacement, g = "between" === f || Qt(f), m = o.threshold, v = o.startFromThreshold ? m : 0, y = Number.MAX_VALUE, o = 0; p > o; o++) {
				var b = u[o],
					x = b.x,
					w = b.y;
				i = b.low;
				var k = s && h.stacks[(this.negStacks && (v ? 0 : m) > w ? "-" : "") + this.stackKey];
				h.isLog && null !== w && 0 >= w && (b.y = w = null, e(10)), b.plotX = t = T(dt(pt(-1e5, a.translate(x, 0, 0, 0, 1, f, "flags" === this.type)), 1e5)), s && this.visible && !b.isNull && k && k[x] && (r = this.getStackIndicator(r, x, this.index), k = k[x], w = k.points[r.key], i = w[0], w = w[1], i === v && (i = Jt(m, h.min)), h.isLog && 0 >= i && (i = null), b.total = b.stackTotal = k.total, b.percentage = k.total && b.y / k.total * 100, b.stackY = w, k.setOffset(this.pointXOffset || 0, this.barW || 0)), b.yBottom = c(i) ? h.translate(i, 0, 1, 0, 1) : null, d && (w = this.modifyValue(w, b)), b.plotY = i = "number" == typeof w && w !== 1 / 0 ? dt(pt(-1e5, h.translate(w, 0, 1, 0, 1)), 1e5) : B, b.isInside = i !== B && i >= 0 && i <= h.len && t >= 0 && t <= a.len, b.clientX = g ? a.translate(x, 0, 0, 0, 1) : t, b.negative = b.y < (m || 0), b.category = l && l[b.x] !== B ? l[b.x] : b.x, b.isNull || (void 0 !== n && (y = dt(y, ft(t - n))), n = t)
			}
			this.closestPointRangePx = y
		},
		getValidPoints: function(t, e) {
			var i = this.chart;
			return Ft(t || this.points || [], function(t) {
				return e && !i.isInsidePlot(t.plotX, t.plotY, i.inverted) ? !1 : !t.isNull
			})
		},
		setClip: function(t) {
			var e = this.chart,
				i = this.options,
				n = e.renderer,
				r = e.inverted,
				o = this.clipBox,
				s = o || e.clipBox,
				a = this.sharedClipKey || ["_sharedClip", t && t.duration, t && t.easing, s.height, i.xAxis, i.yAxis].join(","),
				l = e[a],
				c = e[a + "m"];
			l || (t && (s.width = 0, e[a + "m"] = c = n.clipRect(-99, r ? -e.plotLeft : -e.plotTop, 99, r ? e.chartWidth : e.chartHeight)), e[a] = l = n.clipRect(s)), t && (l.count += 1), i.clip !== !1 && (this.group.clip(t || o ? l : e.clipRect), this.markerGroup.clip(c), this.sharedClipKey = a), t || (l.count -= 1, l.count <= 0 && a && e[a] && (o || (e[a] = e[a].destroy()), e[a + "m"] && (e[a + "m"] = e[a + "m"].destroy())))
		},
		animate: function(t) {
			var e, i = this.chart,
				n = this.options.animation;
			n && !s(n) && (n = ee[this.type].animation), t ? this.setClip(n) : (e = this.sharedClipKey, (t = i[e]) && t.animate({
				width: i.plotSizeX
			}, n), i[e + "m"] && i[e + "m"].animate({
				width: i.plotSizeX + 99
			}, n), this.animate = null)
		},
		afterAnimate: function() {
			this.setClip(), Ut(this, "afterAnimate")
		},
		drawPoints: function() {
			var t, e, i, n, r, o, s, a, l, c, h, u, p = this.points,
				d = this.chart,
				f = this.options.marker,
				g = this.pointAttr[""],
				m = this.markerGroup,
				v = Jt(f.enabled, this.xAxis.isRadial, this.closestPointRangePx > 2 * f.radius);
			if (f.enabled !== !1 || this._hasPointMarkers) for (n = p.length; n--;) r = p[n], e = ht(r.plotX), i = r.plotY, l = r.graphic, c = r.marker || {}, h = !! r.marker, t = v && c.enabled === B || c.enabled, u = r.isInside, t && Qt(i) && null !== r.y ? (t = r.pointAttr[r.selected ? "select" : ""] || g, o = t.r, s = Jt(c.symbol, this.symbol), a = 0 === s.indexOf("url"), l ? l[u ? "show" : "hide"](!0).attr(t).animate(Kt({
				x: e - o,
				y: i - o
			}, l.symbolName ? {
				width: 2 * o,
				height: 2 * o
			} : {})) : u && (o > 0 || a) && (r.graphic = d.renderer.symbol(s, e - o, i - o, 2 * o, 2 * o, h ? c : f).attr(t).add(m))) : l && (r.graphic = l.destroy())
		},
		convertAttribs: function(t, e, i, n) {
			var r, o, s = this.pointAttrToOptions,
				a = {},
				t = t || {},
				e = e || {},
				i = i || {},
				n = n || {};
			for (r in s) o = s[r], a[r] = Jt(t[o], e[r], i[r], n[r]);
			return a
		},
		getAttribs: function() {
			var t, e, i, n = this,
				r = n.options,
				o = ee[n.type].marker ? r.marker : r,
				s = o.states,
				a = s.hover,
				l = n.color,
				h = n.options.negativeColor,
				u = {
					stroke: l,
					fill: l
				},
				p = n.points || [],
				d = [],
				f = n.pointAttrToOptions;
			t = n.hasPointSpecificOptions;
			var g = o.lineColor,
				m = o.fillColor;
			e = r.turboThreshold;
			var v, y, b = n.zones,
				x = n.zoneAxis || "y";
			if (r.marker ? (a.radius = a.radius || o.radius + a.radiusPlus, a.lineWidth = a.lineWidth || o.lineWidth + a.lineWidthPlus) : (a.color = a.color || P(a.color || l).brighten(a.brightness).get(), a.negativeColor = a.negativeColor || P(a.negativeColor || h).brighten(a.brightness).get()), d[""] = n.convertAttribs(o, u), Wt(["hover", "select"], function(t) {
				d[t] = n.convertAttribs(s[t], d[""])
			}), n.pointAttr = d, l = p.length, !e || e > l || t) for (; l--;) {
				if (e = p[l], (o = e.options && e.options.marker || e.options) && o.enabled === !1 && (o.radius = 0), u = null, b.length) {
					for (t = 0, u = b[t]; e[x] >= u.value;) u = b[++t];
					e.color = e.fillColor = u = Jt(u.color, n.color)
				}
				if (t = r.colorByPoint || e.color, e.options) for (y in f) c(o[f[y]]) && (t = !0);
				t ? (o = o || {}, i = [], s = o.states || {}, t = s.hover = s.hover || {}, r.marker && (!e.negative || t.fillColor || a.fillColor) || (t[n.pointAttrToOptions.fill] = t.color || !e.options.color && a[e.negative && h ? "negativeColor" : "color"] || P(e.color).brighten(t.brightness || a.brightness).get()), v = {
					color: e.color
				}, m || (v.fillColor = e.color), g || (v.lineColor = e.color), o.hasOwnProperty("color") && !o.color && delete o.color, u && !a.fillColor && (t.fillColor = u), i[""] = n.convertAttribs(Kt(v, o), d[""]), i.hover = n.convertAttribs(s.hover, d.hover, i[""]), i.select = n.convertAttribs(s.select, d.select, i[""])) : i = d, e.pointAttr = i
			}
		},
		destroy: function() {
			var t, e, i, n, r = this,
				o = r.chart,
				s = /AppleWebKit\/533/.test(bt),
				a = r.data || [];
			for (Ut(r, "destroy"), Gt(r), Wt(r.axisTypes || [], function(t) {
				(n = r[t]) && (l(n.series, r), n.isDirty = n.forceRedraw = !0)
			}), r.legendItem && r.chart.legend.destroyItem(r), t = a.length; t--;)(e = a[t]) && e.destroy && e.destroy();
			r.points = null, clearTimeout(r.animationTimeout);
			for (i in r) r[i] instanceof E && !r[i].survive && (t = s && "group" === i ? "hide" : "destroy", r[i][t]());
			o.hoverSeries === r && (o.hoverSeries = null), l(o.series, r);
			for (i in r) delete r[i]
		},
		getGraphPath: function(t, e, i) {
			var n, r, o = this,
				s = o.options,
				a = s.step,
				l = [],
				t = t || o.points;
			return (n = t.reversed) && t.reverse(), (a = {
				right: 1,
				center: 2
			}[a] || a && 3) && n && (a = 4 - a), s.connectNulls && !e && !i && (t = this.getValidPoints(t)), Wt(t, function(n, h) {
				var u = n.plotX,
					p = n.plotY,
					d = t[h - 1];
				(n.leftCliff || d && d.rightCliff) && !i && (r = !0), n.isNull && !c(e) && h > 0 ? r = !s.connectNulls : n.isNull && !e ? r = !0 : (0 === h || r ? d = ["M", n.plotX, n.plotY] : o.getPointSpline ? d = o.getPointSpline(t, n, h) : a ? (d = 1 === a ? ["L", d.plotX, p] : 2 === a ? ["L", (d.plotX + u) / 2, d.plotY, "L", (d.plotX + u) / 2, p] : ["L", u, d.plotY], d.push("L", u, p)) : d = ["L", u, p], l.push.apply(l, d), r = !1)
			}), o.graphPath = l
		},
		drawGraph: function() {
			var t = this,
				e = this.options,
				i = [
					["graph", e.lineColor || this.color, e.dashStyle]
				],
				n = e.lineWidth,
				r = "square" !== e.linecap,
				o = (this.gappedPath || this.getGraphPath).call(this),
				s = this.fillGraph && this.color || "none";
			Wt(this.zones, function(n, r) {
				i.push(["zoneGraph" + r, n.color || t.color, n.dashStyle || e.dashStyle])
			}), Wt(i, function(i, a) {
				var l = i[0],
					c = t[l];
				c ? c.animate({
					d: o
				}) : (n || s) && o.length && (c = {
					stroke: i[1],
					"stroke-width": n,
					fill: s,
					zIndex: 1
				}, i[2] ? c.dashstyle = i[2] : r && (c["stroke-linecap"] = c["stroke-linejoin"] = "round"), t[l] = t.chart.renderer.path(o).attr(c).add(t.group).shadow(2 > a && e.shadow))
			})
		},
		applyZones: function() {
			var t, e, i, n, r, o, s, a = this,
				l = this.chart,
				c = l.renderer,
				h = this.zones,
				u = this.clips || [],
				p = this.graph,
				d = this.area,
				f = pt(l.chartWidth, l.chartHeight),
				g = this[(this.zoneAxis || "y") + "Axis"],
				m = g.reversed,
				v = l.inverted,
				y = g.horiz,
				b = !1;
			h.length && (p || d) && g.min !== B && (p && p.hide(), d && d.hide(), n = g.getExtremes(), Wt(h, function(h, x) {
				t = m ? y ? l.plotWidth : 0 : y ? 0 : g.toPixels(n.min), t = dt(pt(Jt(e, t), 0), f), e = dt(pt(ct(g.toPixels(Jt(h.value, n.max), !0)), 0), f), b && (t = e = g.toPixels(n.max)), r = Math.abs(t - e), o = dt(t, e), s = pt(t, e), g.isXAxis ? (i = {
					x: v ? s : o,
					y: 0,
					width: r,
					height: f
				}, y || (i.x = l.plotHeight - i.x)) : (i = {
					x: 0,
					y: v ? s : o,
					width: f,
					height: r
				}, y && (i.y = l.plotWidth - i.y)), l.inverted && c.isVML && (i = g.isXAxis ? {
					x: 0,
					y: m ? o : s,
					height: i.width,
					width: l.chartWidth
				} : {
					x: i.y - l.plotLeft - l.spacingBox.x,
					y: 0,
					width: i.height,
					height: l.chartHeight
				}), u[x] ? u[x].animate(i) : (u[x] = c.clipRect(i), p && a["zoneGraph" + x].clip(u[x]), d && a["zoneArea" + x].clip(u[x])), b = h.value > n.max
			}), this.clips = u)
		},
		invertGroups: function() {
			function t() {
				var t = {
					width: e.yAxis.len,
					height: e.xAxis.len
				};
				Wt(["group", "markerGroup"], function(i) {
					e[i] && e[i].attr(t).invert()
				})
			}
			var e = this,
				i = e.chart;
			e.xAxis && (Yt(i, "resize", t), Yt(e, "destroy", function() {
				Gt(i, "resize", t)
			}), t(), e.invertGroups = t)
		},
		plotGroup: function(t, e, i, n, r) {
			var o = this[t],
				s = !o;
			return s && (this[t] = o = this.chart.renderer.g(e).attr({
				zIndex: n || .1
			}).add(r), o.addClass("highcharts-series-" + this.index)), o.attr({
				visibility: i
			})[s ? "attr" : "animate"](this.getPlotBox()), o
		},
		getPlotBox: function() {
			var t = this.chart,
				e = this.xAxis,
				i = this.yAxis;
			return t.inverted && (e = i, i = this.xAxis), {
				translateX: e ? e.left : t.plotLeft,
				translateY: i ? i.top : t.plotTop,
				scaleX: 1,
				scaleY: 1
			}
		},
		render: function() {
			var t, e = this,
				i = e.chart,
				n = e.options,
				r = !! e.animate && i.renderer.isSVG && M(n.animation).duration,
				o = e.visible ? "inherit" : "hidden",
				s = n.zIndex,
				a = e.hasRendered,
				l = i.seriesGroup;
			t = e.plotGroup("group", "series", o, s, l), e.markerGroup = e.plotGroup("markerGroup", "markers", o, s, l), r && e.animate(!0), e.getAttribs(), t.inverted = e.isCartesian ? i.inverted : !1, e.drawGraph && (e.drawGraph(), e.applyZones()), Wt(e.points, function(t) {
				t.redraw && t.redraw()
			}), e.drawDataLabels && e.drawDataLabels(), e.visible && e.drawPoints(), e.drawTracker && e.options.enableMouseTracking !== !1 && e.drawTracker(), i.inverted && e.invertGroups(), n.clip !== !1 && !e.sharedClipKey && !a && t.clip(i.clipRect), r && e.animate(), a || (e.animationTimeout = p(function() {
				e.afterAnimate()
			}, r)), e.isDirty = e.isDirtyData = !1, e.hasRendered = !0
		},
		redraw: function() {
			var t = this.chart,
				e = this.isDirty || this.isDirtyData,
				i = this.group,
				n = this.xAxis,
				r = this.yAxis;
			i && (t.inverted && i.attr({
				width: t.plotWidth,
				height: t.plotHeight
			}), i.animate({
				translateX: Jt(n && n.left, t.plotLeft),
				translateY: Jt(r && r.top, t.plotTop)
			})), this.translate(), this.render(), e && delete this.kdTree
		},
		kdDimensions: 1,
		kdAxisArray: ["clientX", "plotY"],
		searchPoint: function(t, e) {
			var i = this.xAxis,
				n = this.yAxis,
				r = this.chart.inverted;
			return this.searchKDTree({
				clientX: r ? i.len - t.chartY + i.pos : t.chartX - i.pos,
				plotY: r ? n.len - t.chartX + n.pos : t.chartY - n.pos
			}, e)
		},
		buildKDTree: function() {
			function t(i, n, r) {
				var o, s;
				return (s = i && i.length) ? (o = e.kdAxisArray[n % r], i.sort(function(t, e) {
					return t[o] - e[o]
				}), s = Math.floor(s / 2), {
					point: i[s],
					left: t(i.slice(0, s), n + 1, r),
					right: t(i.slice(s + 1), n + 1, r)
				}) : void 0
			}
			var e = this,
				i = e.kdDimensions;
			delete e.kdTree, p(function() {
				e.kdTree = t(e.getValidPoints(null, !e.directTouch), i, i)
			}, e.options.kdNow ? 0 : 1)
		},
		searchKDTree: function(t, e) {
			function i(t, e, a, l) {
				var h, u, p = e.point,
					d = n.kdAxisArray[a % l],
					f = p;
				return u = c(t[r]) && c(p[r]) ? Math.pow(t[r] - p[r], 2) : null, h = c(t[o]) && c(p[o]) ? Math.pow(t[o] - p[o], 2) : null, h = (u || 0) + (h || 0), p.dist = c(h) ? Math.sqrt(h) : Number.MAX_VALUE, p.distX = c(u) ? Math.sqrt(u) : Number.MAX_VALUE, d = t[d] - p[d], h = 0 > d ? "left" : "right", u = 0 > d ? "right" : "left", e[h] && (h = i(t, e[h], a + 1, l), f = h[s] < f[s] ? h : p), e[u] && Math.sqrt(d * d) < f[s] && (t = i(t, e[u], a + 1, l), f = t[s] < f[s] ? t : f), f
			}
			var n = this,
				r = this.kdAxisArray[0],
				o = this.kdAxisArray[1],
				s = e ? "distX" : "dist";
			return this.kdTree || this.buildKDTree(), this.kdTree ? i(t, this.kdTree, this.kdDimensions, this.kdDimensions) : void 0
		}
	}, I.prototype = {
		destroy: function() {
			S(this, this.axis)
		},
		render: function(t) {
			var e = this.options,
				i = e.format,
				i = i ? y(i, this) : e.formatter.call(this);
			this.label ? this.label.attr({
				text: i,
				visibility: "hidden"
			}) : this.label = this.axis.chart.renderer.text(i, null, null, e.useHTML).css(e.style).attr({
				align: this.textAlign,
				rotation: e.rotation,
				visibility: "hidden"
			}).add(t)
		},
		setOffset: function(t, e) {
			var i = this.axis,
				n = i.chart,
				r = n.inverted,
				o = i.reversed,
				o = this.isNegative && !o || !this.isNegative && o,
				s = i.translate(i.usePercentage ? 100 : this.total, 0, 0, 0, 1),
				i = i.translate(0),
				i = ft(s - i),
				a = n.xAxis[0].translate(this.x) + t,
				l = n.plotHeight,
				o = {
					x: r ? o ? s : s - i : a,
					y: r ? l - a - e : o ? l - s - i : l - s,
					width: r ? i : e,
					height: r ? e : i
				};
			(r = this.label) && (r.align(this.alignOptions, null, o), o = r.alignAttr, r[this.options.crop === !1 || n.isInsidePlot(o.x, o.y) ? "show" : "hide"](!0))
		}
	}, me.prototype.getStacks = function() {
		var t = this;
		Wt(t.yAxis, function(t) {
			t.stacks && t.hasVisibleSeries && (t.oldStacks = t.stacks)
		}), Wt(t.series, function(e) {
			!e.options.stacking || e.visible !== !0 && t.options.chart.ignoreHiddenSeries !== !1 || (e.stackKey = e.type + Jt(e.options.stack, ""))
		})
	}, ae.prototype.buildStacks = function() {
		var t, e, i = this.series,
			n = Jt(this.options.reversedStacks, !0),
			r = i.length;
		if (!this.isXAxis) {
			for (this.usePercentage = !1, e = r; e--;) i[n ? e : r - e - 1].setStackedPoints();
			for (e = r; e--;) t = i[n ? e : r - e - 1], t.setStackCliffs && t.setStackCliffs();
			if (this.usePercentage) for (e = 0; r > e; e++) i[e].setPercentStacks()
		}
	}, ae.prototype.renderStackTotals = function() {
		var t, e, i = this.chart,
			n = i.renderer,
			r = this.stacks,
			o = this.stackTotalGroup;
		o || (this.stackTotalGroup = o = n.g("stack-labels").attr({
			visibility: "visible",
			zIndex: 6
		}).add()), o.translate(i.plotLeft, i.plotTop);
		for (t in r) for (e in i = r[t]) i[e].render(o)
	}, ae.prototype.resetStacks = function() {
		var t, e, i = this.stacks;
		if (!this.isXAxis) for (t in i) for (e in i[t]) i[t][e].touched < this.stacksTouched ? (i[t][e].destroy(), delete i[t][e]) : (i[t][e].total = null, i[t][e].cum = 0)
	}, ae.prototype.cleanStacks = function() {
		var t, e, i;
		if (!this.isXAxis) {
			this.oldStacks && (t = this.stacks = this.oldStacks);
			for (e in t) for (i in t[e]) t[e][i].cum = t[e][i].total
		}
	}, be.prototype.setStackedPoints = function() {
		if (this.options.stacking && (this.visible === !0 || this.chart.options.chart.ignoreHiddenSeries === !1)) {
			var t, e, i, n, r, o, s, a = this.processedXData,
				l = this.processedYData,
				c = [],
				h = l.length,
				u = this.options,
				p = u.threshold,
				d = u.startFromThreshold ? p : 0,
				f = u.stack,
				u = u.stacking,
				g = this.stackKey,
				m = "-" + g,
				v = this.negStacks,
				y = this.yAxis,
				b = y.stacks,
				x = y.oldStacks;
			for (y.stacksTouched += 1, r = 0; h > r; r++) o = a[r], s = l[r], t = this.getStackIndicator(t, o, this.index), n = t.key, i = (e = v && (d ? 0 : p) > s) ? m : g, b[i] || (b[i] = {}), b[i][o] || (x[i] && x[i][o] ? (b[i][o] = x[i][o], b[i][o].total = null) : b[i][o] = new I(y, y.options.stackLabels, e, o, f)), i = b[i][o], null !== s && (i.points[n] = i.points[this.index] = [Jt(i.cum, d)], i.touched = y.stacksTouched, t.index > 0 && this.singleStacks === !1 && (i.points[n][0] = i.points[this.index + "," + o + ",0"][0])), "percent" === u ? (e = e ? g : m, v && b[e] && b[e][o] ? (e = b[e][o], i.total = e.total = pt(e.total, i.total) + ft(s) || 0) : i.total = T(i.total + (ft(s) || 0))) : i.total = T(i.total + (s || 0)), i.cum = Jt(i.cum, d) + (s || 0), null !== s && (i.points[n].push(i.cum), c[r] = i.cum);
			"percent" === u && (y.usePercentage = !0), this.stackedYData = c, y.oldStacks = {}
		}
	}, be.prototype.setPercentStacks = function() {
		var t, e = this,
			i = e.stackKey,
			n = e.yAxis.stacks,
			r = e.processedXData;
		Wt([i, "-" + i], function(i) {
			for (var o, s, a, l = r.length; l--;) s = r[l], t = e.getStackIndicator(t, s, e.index), o = (a = n[i] && n[i][s]) && a.points[t.key], (s = o) && (a = a.total ? 100 / a.total : 0, s[0] = T(s[0] * a), s[1] = T(s[1] * a), e.stackedYData[l] = s[1])
		})
	}, be.prototype.getStackIndicator = function(t, e, i) {
		return c(t) && t.x === e ? t.index++ : t = {
			x: e,
			index: 0
		}, t.key = [i, e, t.index].join(","), t
	}, Kt(me.prototype, {
		addSeries: function(t, e, i) {
			var n, r = this;
			return t && (e = Jt(e, !0), Ut(r, "addSeries", {
				options: t
			}, function() {
				n = r.initSeries(t), r.isDirtyLegend = !0, r.linkSeries(), e && r.redraw(i)
			})), n
		},
		addAxis: function(t, e, i, r) {
			var o = e ? "xAxis" : "yAxis",
				s = this.options,
				t = n(t, {
					index: this[o].length,
					isX: e
				});
			new ae(this, t), s[o] = u(s[o] || {}), s[o].push(t), Jt(i, !0) && this.redraw(r)
		},
		showLoading: function(t) {
			var e = this,
				i = e.options,
				n = e.loadingDiv,
				r = i.loading,
				o = function() {
					n && d(n, {
						left: e.plotLeft + "px",
						top: e.plotTop + "px",
						width: e.plotWidth + "px",
						height: e.plotHeight + "px"
					})
				};
			n || (e.loadingDiv = n = f(Ot, {
				className: "highcharts-loading"
			}, Kt(r.style, {
				zIndex: 10,
				display: "none"
			}), e.container), e.loadingSpan = f("span", null, r.labelStyle, n), Yt(e, "redraw", o)), e.loadingSpan.innerHTML = t || i.lang.loading, e.loadingShown || (d(n, {
				opacity: 0,
				display: ""
			}), qt(n, {
				opacity: r.style.opacity
			}, {
				duration: r.showDuration || 0
			}), e.loadingShown = !0), o()
		},
		hideLoading: function() {
			var t = this.options,
				e = this.loadingDiv;
			e && qt(e, {
				opacity: 0
			}, {
				duration: t.loading.hideDuration || 100,
				complete: function() {
					d(e, {
						display: "none"
					})
				}
			}), this.loadingShown = !1
		}
	}), Kt(ye.prototype, {
		update: function(t, e, i, n) {
			function r() {
				l.applyOptions(t), null === l.y && h && (l.graphic = h.destroy()), s(t) && !a(t) && (l.redraw = function() {
					h && h.element && t && t.marker && t.marker.symbol && (l.graphic = h.destroy()), t && t.dataLabels && l.dataLabel && (l.dataLabel = l.dataLabel.destroy()), l.redraw = null
				}), o = l.index, c.updateParallelArrays(l, o), d && l.name && (d[l.x] = l.name), p.data[o] = s(p.data[o]) && !a(p.data[o]) ? l.options : t, c.isDirty = c.isDirtyData = !0, !c.fixedBox && c.hasCartesianSeries && (u.isDirtyBox = !0), "point" === p.legendType && (u.isDirtyLegend = !0), e && u.redraw(i)
			}
			var o, l = this,
				c = l.series,
				h = l.graphic,
				u = c.chart,
				p = c.options,
				d = c.xAxis && c.xAxis.names,
				e = Jt(e, !0);
			n === !1 ? r() : l.firePointEvent("update", {
				options: t
			}, r)
		},
		remove: function(t, e) {
			this.series.removePoint(Ht(this, this.series.data), t, e)
		}
	}), Kt(be.prototype, {
		addPoint: function(t, e, i, n) {
			var r, o = this,
				s = o.options,
				a = o.data,
				l = o.graph,
				c = o.area,
				h = o.chart,
				u = o.xAxis && o.xAxis.names,
				p = l && l.shift || 0,
				d = ["graph", "area"],
				l = s.data,
				f = o.xData;
			if (_(n, h), i) {
				for (n = o.zones.length; n--;) d.push("zoneGraph" + n, "zoneArea" + n);
				Wt(d, function(t) {
					o[t] && (o[t].shift = p + (s.step ? 2 : 1))
				})
			}
			if (c && (c.isArea = !0), e = Jt(e, !0), c = {
				series: o
			}, o.pointClass.prototype.applyOptions.apply(c, [t]), d = c.x, n = f.length, o.requireSorting && d < f[n - 1]) for (r = !0; n && f[n - 1] > d;) n--;
			o.updateParallelArrays(c, "splice", n, 0, 0), o.updateParallelArrays(c, n), u && c.name && (u[d] = c.name), l.splice(n, 0, t), r && (o.data.splice(n, 0, null), o.processData()), "point" === s.legendType && o.generatePoints(), i && (a[0] && a[0].remove ? a[0].remove(!1) : (a.shift(), o.updateParallelArrays(c, "shift"), l.shift())), o.isDirty = !0, o.isDirtyData = !0, e && (o.getAttribs(), h.redraw())
		},
		removePoint: function(t, e, i) {
			var n = this,
				r = n.data,
				o = r[t],
				s = n.points,
				a = n.chart,
				l = function() {
					s && s.length === r.length && s.splice(t, 1), r.splice(t, 1), n.options.data.splice(t, 1), n.updateParallelArrays(o || {
						series: n
					}, "splice", t, 1), o && o.destroy(), n.isDirty = !0, n.isDirtyData = !0, e && a.redraw()
				};
			_(i, a), e = Jt(e, !0), o ? o.firePointEvent("remove", null, l) : l()
		},
		remove: function(t, e) {
			var i = this,
				n = i.chart;
			Ut(i, "remove", null, function() {
				i.destroy(), n.isDirtyLegend = n.isDirtyBox = !0, n.linkSeries(), Jt(t, !0) && n.redraw(e)
			})
		},
		update: function(t, e) {
			var i, r = this,
				o = this.chart,
				s = this.userOptions,
				a = this.type,
				l = zt[a].prototype,
				c = ["group", "markerGroup", "dataLabelsGroup"];
			(t.type && t.type !== a || void 0 !== t.zIndex) && (c.length = 0), Wt(c, function(t) {
				c[t] = r[t], delete r[t]
			}), t = n(s, {
				animation: !1,
				index: this.index,
				pointStart: this.xData[0]
			}, {
				data: this.options.data
			}, t), this.remove(!1);
			for (i in l) this[i] = B;
			Kt(this, zt[t.type || a].prototype), Wt(c, function(t) {
				r[t] = c[t]
			}), this.init(o, t), o.linkSeries(), Jt(e, !0) && o.redraw(!1)
		}
	}), Kt(ae.prototype, {
		update: function(t, e) {
			var i = this.chart,
				t = i.options[this.coll][this.options.index] = n(this.userOptions, t);
			this.destroy(!0), this._addedPlotLB = this.chart._labelPanes = B, this.init(i, Kt(t, {
				events: B
			})), i.isDirtyBox = !0, Jt(e, !0) && i.redraw()
		},
		remove: function(t) {
			for (var e = this.chart, i = this.coll, n = this.series, r = n.length; r--;) n[r] && n[r].remove(!1);
			l(e.axes, this), l(e[i], this), e.options[i].splice(this.options.index, 1), Wt(e[i], function(t, e) {
				t.options.index = e
			}), this.destroy(), e.isDirtyBox = !0, Jt(t, !0) && e.redraw()
		},
		setTitle: function(t, e) {
			this.update({
				title: t
			}, e)
		},
		setCategories: function(t, e) {
			this.update({
				categories: t
			}, e)
		}
	});
	var xe = g(be);
	zt.line = xe, ee.area = n(ie, {
		softThreshold: !1,
		threshold: 0
	});
	var we = g(be, {
		type: "area",
		singleStacks: !1,
		getStackPoints: function() {
			var t, e, i, n = [],
				r = [],
				o = this.xAxis,
				s = this.yAxis,
				a = s.stacks[this.stackKey],
				l = {},
				c = this.points,
				h = this.index,
				u = s.series,
				p = u.length,
				d = Jt(s.options.reversedStacks, !0) ? 1 : -1;
			if (this.options.stacking) {
				for (e = 0; e < c.length; e++) l[c[e].x] = c[e];
				for (i in a) null !== a[i].total && r.push(i);
				r.sort(function(t, e) {
					return t - e
				}), t = $t(u, function() {
					return this.visible
				}), Wt(r, function(i, c) {
					var u, f, g = 0;
					if (l[i] && !l[i].isNull) n.push(l[i]), Wt([-1, 1], function(n) {
						var o = 1 === n ? "rightNull" : "leftNull",
							s = 0,
							g = a[r[c + n]];
						if (g) for (e = h; e >= 0 && p > e;) u = g.points[e], u || (e === h ? l[i][o] = !0 : t[e] && (f = a[i].points[e]) && (s -= f[1] - f[0])), e += d;
						l[i][1 === n ? "rightCliff" : "leftCliff"] = s
					});
					else {
						for (e = h; e >= 0 && p > e;) {
							if (u = a[i].points[e]) {
								g = u[1];
								break
							}
							e += d
						}
						g = s.toPixels(g, !0), n.push({
							isNull: !0,
							plotX: o.toPixels(i, !0),
							plotY: g,
							yBottom: g
						})
					}
				})
			}
			return n
		},
		getGraphPath: function(t) {
			var e, i, n, r, o = be.prototype.getGraphPath,
				s = this.options,
				a = s.stacking,
				l = this.yAxis,
				c = [],
				h = [],
				u = this.index,
				p = l.stacks[this.stackKey],
				d = s.threshold,
				f = l.getThreshold(s.threshold),
				s = s.connectNulls || "percent" === a,
				g = function(e, i, r) {
					var o, s, g = t[e],
						e = a && p[g.x].points[u],
						m = g[r + "Null"] || 0,
						r = g[r + "Cliff"] || 0,
						g = !0;
					r || m ? (o = (m ? e[0] : e[1]) + r, s = e[0] + r, g = !! m) : !a && t[i] && t[i].isNull && (o = s = d), void 0 !== o && (h.push({
						plotX: n,
						plotY: null === o ? f : l.getThreshold(o),
						isNull: g
					}), c.push({
						plotX: n,
						plotY: null === s ? f : l.getThreshold(s)
					}))
				},
				t = t || this.points;
			for (a && (t = this.getStackPoints()), e = 0; e < t.length; e++) i = t[e].isNull, n = Jt(t[e].rectPlotX, t[e].plotX), r = Jt(t[e].yBottom, f), (!i || s) && (s || g(e, e - 1, "left"), i && !a && s || (h.push(t[e]), c.push({
				x: e,
				plotX: n,
				plotY: r
			})), s || g(e, e + 1, "right"));
			return e = o.call(this, h, !0, !0), c.reversed = !0, i = o.call(this, c, !0, !0), i.length && (i[0] = "L"), e = e.concat(i), o = o.call(this, h, !1, s), this.areaPath = e, o
		},
		drawGraph: function() {
			this.areaPath = [], be.prototype.drawGraph.apply(this);
			var t = this,
				e = this.areaPath,
				i = this.options,
				n = [
					["area", this.color, i.fillColor]
				];
			Wt(this.zones, function(e, r) {
				n.push(["zoneArea" + r, e.color || t.color, e.fillColor || i.fillColor])
			}), Wt(n, function(n) {
				var r = n[0],
					o = t[r];
				o ? o.animate({
					d: e
				}) : (o = {
					fill: n[2] || n[1],
					zIndex: 0
				}, n[2] || (o["fill-opacity"] = Jt(i.fillOpacity, .75)), t[r] = t.chart.renderer.path(e).attr(o).add(t.group))
			})
		},
		drawLegendSymbol: oe.drawRectangle
	});
	zt.area = we, ee.spline = n(ie), xe = g(be, {
		type: "spline",
		getPointSpline: function(t, e, i) {
			var n, r, o, s, a = e.plotX,
				l = e.plotY,
				c = t[i - 1],
				i = t[i + 1];
			if (c && !c.isNull && i && !i.isNull) {
				t = c.plotY, o = i.plotX;
				var i = i.plotY,
					h = 0;
				n = (1.5 * a + c.plotX) / 2.5, r = (1.5 * l + t) / 2.5, o = (1.5 * a + o) / 2.5, s = (1.5 * l + i) / 2.5, o !== n && (h = (s - r) * (o - a) / (o - n) + l - s), r += h, s += h, r > t && r > l ? (r = pt(t, l), s = 2 * l - r) : t > r && l > r && (r = dt(t, l), s = 2 * l - r), s > i && s > l ? (s = pt(i, l), r = 2 * l - s) : i > s && l > s && (s = dt(i, l), r = 2 * l - s), e.rightContX = o, e.rightContY = s
			}
			return e = ["C", Jt(c.rightContX, c.plotX), Jt(c.rightContY, c.plotY), Jt(n, a), Jt(r, l), a, l], c.rightContX = c.rightContY = null, e
		}
	}), zt.spline = xe, ee.areaspline = n(ee.area), we = we.prototype, xe = g(xe, {
		type: "areaspline",
		getStackPoints: we.getStackPoints,
		getGraphPath: we.getGraphPath,
		setStackCliffs: we.setStackCliffs,
		drawGraph: we.drawGraph,
		drawLegendSymbol: oe.drawRectangle
	}), zt.areaspline = xe, ee.column = n(ie, {
		borderColor: "#FFFFFF",
		borderRadius: 0,
		groupPadding: .2,
		marker: null,
		pointPadding: .1,
		minPointLength: 0,
		cropThreshold: 50,
		pointRange: null,
		states: {
			hover: {
				brightness: .1,
				shadow: !1,
				halo: !1
			},
			select: {
				color: "#C0C0C0",
				borderColor: "#000000",
				shadow: !1
			}
		},
		dataLabels: {
			align: null,
			verticalAlign: null,
			y: null
		},
		softThreshold: !1,
		startFromThreshold: !0,
		stickyTracking: !1,
		tooltip: {
			distance: 6
		},
		threshold: 0
	}), xe = g(be, {
		type: "column",
		pointAttrToOptions: {
			stroke: "borderColor",
			fill: "color",
			r: "borderRadius"
		},
		cropShoulder: 0,
		directTouch: !0,
		trackerGroups: ["group", "dataLabelsGroup"],
		negStacks: !0,
		init: function() {
			be.prototype.init.apply(this, arguments);
			var t = this,
				e = t.chart;
			e.hasRendered && Wt(e.series, function(e) {
				e.type === t.type && (e.isDirty = !0)
			})
		},
		getColumnMetrics: function() {
			var t, e = this,
				i = e.options,
				n = e.xAxis,
				r = e.yAxis,
				o = n.reversed,
				s = {},
				a = 0;
			i.grouping === !1 ? a = 1 : Wt(e.chart.series, function(i) {
				var n, o = i.options,
					l = i.yAxis;
				i.type === e.type && i.visible && r.len === l.len && r.pos === l.pos && (o.stacking ? (t = i.stackKey, s[t] === B && (s[t] = a++), n = s[t]) : o.grouping !== !1 && (n = a++), i.columnIndex = n)
			});
			var l = dt(ft(n.transA) * (n.ordinalSlope || i.pointRange || n.closestPointRange || n.tickInterval || 1), n.len),
				c = l * i.groupPadding,
				h = (l - 2 * c) / a,
				i = dt(i.maxPointWidth || n.len, Jt(i.pointWidth, h * (1 - 2 * i.pointPadding)));
			return e.columnMetrics = {
				width: i,
				offset: (h - i) / 2 + (c + ((e.columnIndex || 0) + (o ? 1 : 0)) * h - l / 2) * (o ? -1 : 1)
			}, e.columnMetrics
		},
		crispCol: function(t, e, i, n) {
			var r = this.chart,
				o = this.borderWidth,
				s = -(o % 2 ? .5 : 0),
				o = o % 2 ? .5 : 1;
			return r.inverted && r.renderer.isVML && (o += 1), i = Math.round(t + i) + s, t = Math.round(t) + s, i -= t, n = Math.round(e + n) + o, s = ft(e) <= .5 && n > .5, e = Math.round(e) + o, n -= e, s && n && (e -= 1, n += 1), {
				x: t,
				y: e,
				width: i,
				height: n
			}
		},
		translate: function() {
			var t = this,
				e = t.chart,
				i = t.options,
				n = t.borderWidth = Jt(i.borderWidth, t.closestPointRange * t.xAxis.transA < 2 ? 0 : 1),
				r = t.yAxis,
				o = t.translatedThreshold = r.getThreshold(i.threshold),
				s = Jt(i.minPointLength, 5),
				a = t.getColumnMetrics(),
				l = a.width,
				c = t.barW = pt(l, 1 + 2 * n),
				h = t.pointXOffset = a.offset;
			e.inverted && (o -= .5), i.pointPadding && (c = ut(c)), be.prototype.translate.apply(t), Wt(t.points, function(i) {
				var n, a = dt(Jt(i.yBottom, o), 9e4),
					u = 999 + ft(a),
					u = dt(pt(-u, i.plotY), r.len + u),
					p = i.plotX + h,
					d = c,
					f = dt(u, a),
					g = pt(u, a) - f;
				ft(g) < s && s && (g = s, n = !r.reversed && !i.negative || r.reversed && i.negative, f = ft(f - o) > s ? a - s : o - (n ? s : 0)), i.barX = p, i.pointWidth = l, i.tooltipPos = e.inverted ? [r.len + r.pos - e.plotLeft - u, t.xAxis.len - p - d / 2, g] : [p + d / 2, u + r.pos - e.plotTop, g], i.shapeType = "rect", i.shapeArgs = t.crispCol(p, f, d, g)
			})
		},
		getSymbol: Dt,
		drawLegendSymbol: oe.drawRectangle,
		drawGraph: Dt,
		drawPoints: function() {
			var t, e, i = this,
				r = this.chart,
				o = i.options,
				s = r.renderer,
				a = o.animationLimit || 250;
			Wt(i.points, function(l) {
				var h, u = l.graphic;
				Qt(l.plotY) && null !== l.y ? (t = l.shapeArgs, h = c(i.borderWidth) ? {
					"stroke-width": i.borderWidth
				} : {}, e = l.pointAttr[l.selected ? "select" : ""] || i.pointAttr[""], u ? (Vt(u), u.attr(h).attr(e)[r.pointCount < a ? "animate" : "attr"](n(t))) : l.graphic = s[l.shapeType](t).attr(h).attr(e).add(l.group || i.group).shadow(o.shadow, null, o.stacking && !o.borderRadius)) : u && (l.graphic = u.destroy())
			})
		},
		animate: function(t) {
			var e = this,
				i = this.yAxis,
				n = e.options,
				r = this.chart.inverted,
				o = {};
			_t && (t ? (o.scaleY = .001, t = dt(i.pos + i.len, pt(i.pos, i.toPixels(n.threshold))), r ? o.translateX = t - i.len : o.translateY = t, e.group.attr(o)) : (o[r ? "translateX" : "translateY"] = i.pos, e.group.animate(o, Kt(M(e.options.animation), {
				step: function(t, i) {
					e.group.attr({
						scaleY: pt(.001, i.pos)
					})
				}
			})), e.animate = null))
		},
		remove: function() {
			var t = this,
				e = t.chart;
			e.hasRendered && Wt(e.series, function(e) {
				e.type === t.type && (e.isDirty = !0)
			}), be.prototype.remove.apply(t, arguments)
		}
	}), zt.column = xe, ee.bar = n(ee.column), we = g(xe, {
		type: "bar",
		inverted: !0
	}), zt.bar = we, ee.scatter = n(ie, {
		lineWidth: 0,
		marker: {
			enabled: !0
		},
		tooltip: {
			headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 10px;"> {series.name}</span><br/>',
			pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
		}
	}), we = g(be, {
		type: "scatter",
		sorted: !1,
		requireSorting: !1,
		noSharedTooltip: !0,
		trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
		takeOrdinalPosition: !1,
		kdDimensions: 2,
		drawGraph: function() {
			this.options.lineWidth && be.prototype.drawGraph.call(this)
		}
	}), zt.scatter = we, ee.pie = n(ie, {
		borderColor: "#FFFFFF",
		borderWidth: 1,
		center: [null, null],
		clip: !1,
		colorByPoint: !0,
		dataLabels: {
			distance: 30,
			enabled: !0,
			formatter: function() {
				return null === this.y ? void 0 : this.point.name
			},
			x: 0
		},
		ignoreHiddenPoint: !0,
		legendType: "point",
		marker: null,
		size: null,
		showInLegend: !1,
		slicedOffset: 10,
		states: {
			hover: {
				brightness: .1,
				shadow: !1
			}
		},
		stickyTracking: !1,
		tooltip: {
			followPointer: !0
		}
	}), ie = {
		type: "pie",
		isCartesian: !1,
		pointClass: g(ye, {
			init: function() {
				ye.prototype.init.apply(this, arguments);
				var t, e = this;
				return e.name = Jt(e.name, "Slice"), t = function(t) {
					e.slice("select" === t.type)
				}, Yt(e, "select", t), Yt(e, "unselect", t), e
			},
			setVisible: function(t, e) {
				var i = this,
					n = i.series,
					r = n.chart,
					o = n.options.ignoreHiddenPoint,
					e = Jt(e, o);
				t !== i.visible && (i.visible = i.options.visible = t = t === B ? !i.visible : t, n.options.data[Ht(i, n.data)] = i.options, Wt(["graphic", "dataLabel", "connector", "shadowGroup"], function(e) {
					i[e] && i[e][t ? "show" : "hide"](!0)
				}), i.legendItem && r.legend.colorizeItem(i, t), !t && "hover" === i.state && i.setState(""), o && (n.isDirty = !0), e && r.redraw())
			},
			slice: function(t, e, i) {
				var n = this.series;
				_(i, n.chart), Jt(e, !0), this.sliced = this.options.sliced = t = c(t) ? t : !this.sliced, n.options.data[Ht(this, n.data)] = this.options, t = t ? this.slicedTranslation : {
					translateX: 0,
					translateY: 0
				}, this.graphic.animate(t), this.shadowGroup && this.shadowGroup.animate(t)
			},
			haloPath: function(t) {
				var e = this.shapeArgs,
					i = this.series.chart;
				return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(i.plotLeft + e.x, i.plotTop + e.y, e.r + t, e.r + t, {
					innerR: this.shapeArgs.r,
					start: e.start,
					end: e.end
				})
			}
		}),
		requireSorting: !1,
		directTouch: !0,
		noSharedTooltip: !0,
		trackerGroups: ["group", "dataLabelsGroup"],
		axisTypes: [],
		pointAttrToOptions: {
			stroke: "borderColor",
			"stroke-width": "borderWidth",
			fill: "color"
		},
		animate: function(t) {
			var e = this,
				i = e.points,
				n = e.startAngleRad;
			t || (Wt(i, function(t) {
				var i = t.graphic,
					r = t.shapeArgs;
				i && (i.attr({
					r: t.startR || e.center[3] / 2,
					start: n,
					end: n
				}), i.animate({
					r: r.r,
					start: r.start,
					end: r.end
				}, e.options.animation))
			}), e.animate = null)
		},
		updateTotals: function() {
			var t, e, i = 0,
				n = this.points,
				r = n.length,
				o = this.options.ignoreHiddenPoint;
			for (t = 0; r > t; t++) e = n[t], i += o && !e.visible ? 0 : e.y;
			for (this.total = i, t = 0; r > t; t++) e = n[t], e.percentage = i > 0 && (e.visible || !o) ? e.y / i * 100 : 0, e.total = i
		},
		generatePoints: function() {
			be.prototype.generatePoints.call(this), this.updateTotals()
		},
		translate: function(t) {
			this.generatePoints();
			var e, i, n, r, o, s = 0,
				a = this.options,
				l = a.slicedOffset,
				c = l + a.borderWidth,
				h = a.startAngle || 0,
				u = this.startAngleRad = vt / 180 * (h - 90),
				h = (this.endAngleRad = vt / 180 * (Jt(a.endAngle, h + 360) - 90)) - u,
				p = this.points,
				d = a.dataLabels.distance,
				a = a.ignoreHiddenPoint,
				f = p.length;
			for (t || (this.center = t = this.getCenter()), this.getX = function(e, i) {
				return n = lt.asin(dt((e - t[1]) / (t[2] / 2 + d), 1)), t[0] + (i ? -1 : 1) * gt(n) * (t[2] / 2 + d)
			}, r = 0; f > r; r++) o = p[r], e = u + s * h, a && !o.visible || (s += o.percentage / 100), i = u + s * h, o.shapeType = "arc", o.shapeArgs = {
				x: t[0],
				y: t[1],
				r: t[2] / 2,
				innerR: t[3] / 2,
				start: ct(1e3 * e) / 1e3,
				end: ct(1e3 * i) / 1e3
			}, n = (i + e) / 2, n > 1.5 * vt ? n -= 2 * vt : -vt / 2 > n && (n += 2 * vt), o.slicedTranslation = {
				translateX: ct(gt(n) * l),
				translateY: ct(mt(n) * l)
			}, e = gt(n) * t[2] / 2, i = mt(n) * t[2] / 2, o.tooltipPos = [t[0] + .7 * e, t[1] + .7 * i], o.half = -vt / 2 > n || n > vt / 2 ? 1 : 0, o.angle = n, c = dt(c, d / 2), o.labelPos = [t[0] + e + gt(n) * d, t[1] + i + mt(n) * d, t[0] + e + gt(n) * c, t[1] + i + mt(n) * c, t[0] + e, t[1] + i, 0 > d ? "center" : o.half ? "right" : "left", n]
		},
		drawGraph: null,
		drawPoints: function() {
			var t, e, i, n, r, o, s = this,
				a = s.chart.renderer,
				l = s.options.shadow;
			l && !s.shadowGroup && (s.shadowGroup = a.g("shadow").add(s.group)), Wt(s.points, function(c) {
				null !== c.y && (e = c.graphic, r = c.shapeArgs, i = c.shadowGroup, n = c.pointAttr[c.selected ? "select" : ""], n.stroke || (n.stroke = n.fill), l && !i && (i = c.shadowGroup = a.g("shadow").add(s.shadowGroup)), t = c.sliced ? c.slicedTranslation : {
					translateX: 0,
					translateY: 0
				}, i && i.attr(t), e ? e.setRadialReference(s.center).attr(n).animate(Kt(r, t)) : (o = {
					"stroke-linejoin": "round"
				}, c.visible || (o.visibility = "hidden"), c.graphic = e = a[c.shapeType](r).setRadialReference(s.center).attr(n).attr(o).attr(t).add(s.group).shadow(l, i)))
			})
		},
		searchPoint: Dt,
		sortByAngle: function(t, e) {
			t.sort(function(t, i) {
				return void 0 !== t.angle && (i.angle - t.angle) * e
			})
		},
		drawLegendSymbol: oe.drawRectangle,
		getCenter: ve.getCenter,
		getSymbol: Dt
	}, ie = g(be, ie), zt.pie = ie, be.prototype.drawDataLabels = function() {
		var t, e, i, r, o = this,
			s = o.options,
			a = s.cursor,
			l = s.dataLabels,
			h = o.points,
			u = o.hasRendered || 0,
			p = Jt(l.defer, !0),
			d = o.chart.renderer;
		(l.enabled || o._hasPointLabels) && (o.dlProcessOptions && o.dlProcessOptions(l), r = o.plotGroup("dataLabelsGroup", "data-labels", p && !u ? "hidden" : "visible", l.zIndex || 6), p && (r.attr({
			opacity: +u
		}), u || Yt(o, "afterAnimate", function() {
			o.visible && r.show(), r[s.animation ? "animate" : "attr"]({
				opacity: 1
			}, {
				duration: 200
			})
		})), e = l, Wt(h, function(h) {
			var u, p, f, g, m = h.dataLabel,
				v = h.connector,
				b = !0,
				x = {};
			if (t = h.dlOptions || h.options && h.options.dataLabels, u = Jt(t && t.enabled, e.enabled) && null !== h.y, m && !u) h.dataLabel = m.destroy();
			else if (u) {
				if (l = n(e, t), g = l.style, u = l.rotation, p = h.getLabelConfig(), i = l.format ? y(l.format, p) : l.formatter.call(p, l), g.color = Jt(l.color, g.color, o.color, "black"), m) c(i) ? (m.attr({
					text: i
				}), b = !1) : (h.dataLabel = m = m.destroy(), v && (h.connector = v.destroy()));
				else if (c(i)) {
					m = {
						fill: l.backgroundColor,
						stroke: l.borderColor,
						"stroke-width": l.borderWidth,
						r: l.borderRadius || 0,
						rotation: u,
						padding: l.padding,
						zIndex: 1
					}, "contrast" === g.color && (x.color = l.inside || l.distance < 0 || s.stacking ? d.getContrast(h.color || o.color) : "#000000"), a && (x.cursor = a);
					for (f in m) m[f] === B && delete m[f];
					m = h.dataLabel = d[u ? "text" : "label"](i, 0, -9999, l.shape, null, null, l.useHTML).attr(m).css(Kt(g, x)).add(r).shadow(l.shadow)
				}
				m && o.alignDataLabel(h, m, l, null, b)
			}
		}))
	}, be.prototype.alignDataLabel = function(t, e, i, n, r) {
		var o = this.chart,
			s = o.inverted,
			a = Jt(t.plotX, -9999),
			l = Jt(t.plotY, -9999),
			c = e.getBBox(),
			h = o.renderer.fontMetrics(i.style.fontSize).b,
			u = i.rotation,
			p = i.align,
			d = this.visible && (t.series.forceDL || o.isInsidePlot(a, ct(l), s) || n && o.isInsidePlot(a, s ? n.x + 1 : n.y + n.height - 1, s)),
			f = "justify" === Jt(i.overflow, "justify");
		d && (n = Kt({
			x: s ? o.plotWidth - l : a,
			y: ct(s ? o.plotHeight - a : l),
			width: 0,
			height: 0
		}, n), Kt(i, {
			width: c.width,
			height: c.height
		}), u ? (f = !1, s = o.renderer.rotCorr(h, u), s = {
			x: n.x + i.x + n.width / 2 + s.x,
			y: n.y + i.y + {
				top: 0,
				middle: .5,
				bottom: 1
			}[i.verticalAlign] * n.height
		}, e[r ? "attr" : "animate"](s).attr({
			align: p
		}), a = (u + 720) % 360, a = a > 180 && 360 > a, "left" === p ? s.y -= a ? c.height : 0 : "center" === p ? (s.x -= c.width / 2, s.y -= c.height / 2) : "right" === p && (s.x -= c.width, s.y -= a ? 0 : c.height)) : (e.align(i, null, n), s = e.alignAttr), f ? this.justifyDataLabel(e, i, s, c, n, r) : Jt(i.crop, !0) && (d = o.isInsidePlot(s.x, s.y) && o.isInsidePlot(s.x + c.width, s.y + c.height)), i.shape && !u && e.attr({
			anchorX: t.plotX,
			anchorY: t.plotY
		})), d || (Vt(e), e.attr({
			y: -9999
		}), e.placed = !1)
	}, be.prototype.justifyDataLabel = function(t, e, i, n, r, o) {
		var s, a, l = this.chart,
			c = e.align,
			h = e.verticalAlign,
			u = t.box ? 0 : t.padding || 0;
		s = i.x + u, 0 > s && ("right" === c ? e.align = "left" : e.x = -s, a = !0), s = i.x + n.width - u, s > l.plotWidth && ("left" === c ? e.align = "right" : e.x = l.plotWidth - s, a = !0), s = i.y + u, 0 > s && ("bottom" === h ? e.verticalAlign = "top" : e.y = -s, a = !0), s = i.y + n.height - u, s > l.plotHeight && ("top" === h ? e.verticalAlign = "bottom" : e.y = l.plotHeight - s, a = !0), a && (t.placed = !o, t.align(e, null, r))
	}, zt.pie && (zt.pie.prototype.drawDataLabels = function() {
		var t, e, i, n, r, o, s, a, l, c, h, u = this,
			p = u.data,
			d = u.chart,
			f = u.options.dataLabels,
			g = Jt(f.connectorPadding, 10),
			m = Jt(f.connectorWidth, 1),
			v = d.plotWidth,
			y = d.plotHeight,
			b = Jt(f.softConnector, !0),
			x = f.distance,
			w = u.center,
			k = w[2] / 2,
			S = w[1],
			C = x > 0,
			T = [
				[],
				[]
			],
			_ = [0, 0, 0, 0],
			M = function(t, e) {
				return e.y - t.y
			};
		if (u.visible && (f.enabled || u._hasPointLabels)) {
			for (be.prototype.drawDataLabels.apply(u), Wt(p, function(t) {
				t.dataLabel && t.visible && (T[t.half].push(t), t.dataLabel._pos = null)
			}), c = 2; c--;) {
				var L, P = [],
					E = [],
					D = T[c],
					I = D.length;
				if (I) {
					for (u.sortByAngle(D, c - .5), h = p = 0; !p && D[h];) p = D[h] && D[h].dataLabel && (D[h].dataLabel.getBBox().height || 21), h++;
					if (x > 0) {
						for (r = dt(S + k + x, d.plotHeight), h = pt(0, S - k - x); r >= h; h += p) P.push(h);
						if (r = P.length, I > r) {
							for (t = [].concat(D), t.sort(M), h = I; h--;) t[h].rank = h;
							for (h = I; h--;) D[h].rank >= r && D.splice(h, 1);
							I = D.length
						}
						for (h = 0; I > h; h++) {
							t = D[h], o = t.labelPos, t = 9999;
							var N, O;
							for (O = 0; r > O; O++) N = ft(P[O] - o[1]), t > N && (t = N, L = O);
							if (h > L && null !== P[h]) L = h;
							else for (I - h + L > r && null !== P[h] && (L = r - I + h); null === P[L];) L++;
							E.push({
								i: L,
								y: P[L]
							}), P[L] = null
						}
						E.sort(M)
					}
					for (h = 0; I > h; h++) t = D[h], o = t.labelPos, n = t.dataLabel, l = t.visible === !1 ? "hidden" : "inherit", t = o[1], x > 0 ? (r = E.pop(), L = r.i, a = r.y, (t > a && null !== P[L + 1] || a > t && null !== P[L - 1]) && (a = dt(pt(0, t), d.plotHeight))) : a = t, s = f.justify ? w[0] + (c ? -1 : 1) * (k + x) : u.getX(a === S - k - x || a === S + k + x ? t : a, c), n._attr = {
						visibility: l,
						align: o[6]
					}, n._pos = {
						x: s + f.x + ({
							left: g,
							right: -g
						}[o[6]] || 0),
						y: a + f.y - 10
					}, n.connX = s, n.connY = a, null === this.options.size && (r = n.width, g > s - r ? _[3] = pt(ct(r - s + g), _[3]) : s + r > v - g && (_[1] = pt(ct(s + r - v + g), _[1])), 0 > a - p / 2 ? _[0] = pt(ct(-a + p / 2), _[0]) : a + p / 2 > y && (_[2] = pt(ct(a + p / 2 - y), _[2])))
				}
			}(0 === A(_) || this.verifyDataLabelOverflow(_)) && (this.placeDataLabels(), C && m && Wt(this.points, function(t) {
				e = t.connector, o = t.labelPos, (n = t.dataLabel) && n._pos && t.visible ? (l = n._attr.visibility, s = n.connX, a = n.connY, i = b ? ["M", s + ("left" === o[6] ? 5 : -5), a, "C", s, a, 2 * o[2] - o[4], 2 * o[3] - o[5], o[2], o[3], "L", o[4], o[5]] : ["M", s + ("left" === o[6] ? 5 : -5), a, "L", o[2], o[3], "L", o[4], o[5]], e ? (e.animate({
					d: i
				}), e.attr("visibility", l)) : t.connector = e = u.chart.renderer.path(i).attr({
					"stroke-width": m,
					stroke: f.connectorColor || t.color || "#606060",
					visibility: l
				}).add(u.dataLabelsGroup)) : e && (t.connector = e.destroy())
			}))
		}
	}, zt.pie.prototype.placeDataLabels = function() {
		Wt(this.points, function(t) {
			var e = t.dataLabel;
			e && t.visible && ((t = e._pos) ? (e.attr(e._attr), e[e.moved ? "animate" : "attr"](t), e.moved = !0) : e && e.attr({
				y: -9999
			}))
		})
	}, zt.pie.prototype.alignDataLabel = Dt, zt.pie.prototype.verifyDataLabelOverflow = function(t) {
		var e, i = this.center,
			n = this.options,
			r = n.center,
			o = n.minSize || 80,
			s = o;
		return null !== r[0] ? s = pt(i[2] - pt(t[1], t[3]), o) : (s = pt(i[2] - t[1] - t[3], o), i[0] += (t[3] - t[1]) / 2), null !== r[1] ? s = pt(dt(s, i[2] - pt(t[0], t[2])), o) : (s = pt(dt(s, i[2] - t[0] - t[2]), o), i[1] += (t[0] - t[2]) / 2), s < i[2] ? (i[2] = s, i[3] = Math.min(/%$/.test(n.innerSize || 0) ? s * parseFloat(n.innerSize || 0) / 100 : parseFloat(n.innerSize || 0), s), this.translate(i), this.drawDataLabels && this.drawDataLabels()) : e = !0, e
	}), zt.column && (zt.column.prototype.alignDataLabel = function(t, e, i, r, o) {
		var s = this.chart.inverted,
			a = t.series,
			l = t.dlBox || t.shapeArgs,
			c = Jt(t.below, t.plotY > Jt(this.translatedThreshold, a.yAxis.len)),
			h = Jt(i.inside, !! this.options.stacking);
		l && (r = n(l), r.y < 0 && (r.height += r.y, r.y = 0), l = r.y + r.height - a.yAxis.len, l > 0 && (r.height -= l), s && (r = {
			x: a.yAxis.len - r.y - r.height,
			y: a.xAxis.len - r.x - r.width,
			width: r.height,
			height: r.width
		}), h || (s ? (r.x += c ? 0 : r.width, r.width = 0) : (r.y += c ? r.height : 0, r.height = 0))), i.align = Jt(i.align, !s || h ? "center" : c ? "right" : "left"), i.verticalAlign = Jt(i.verticalAlign, s || h ? "middle" : c ? "top" : "bottom"), be.prototype.alignDataLabel.call(this, t, e, i, r, o)
	}), function(t) {
		var e = t.Chart,
			i = t.each,
			n = t.pick,
			r = t.addEvent;
		e.prototype.callbacks.push(function(t) {
			function e() {
				var e = [];
				i(t.series, function(t) {
					var r = t.options.dataLabels,
						o = t.dataLabelCollections || ["dataLabel"];
					(r.enabled || t._hasPointLabels) && !r.allowOverlap && t.visible && i(o, function(r) {
						i(t.points, function(t) {
							t[r] && (t[r].labelrank = n(t.labelrank, t.shapeArgs && t.shapeArgs.height), e.push(t[r]))
						})
					})
				}), t.hideOverlappingLabels(e)
			}
			e(), r(t, "redraw", e)
		}), e.prototype.hideOverlappingLabels = function(t) {
			var e, n, r, o, s, a, l, c, h, u = t.length;
			for (n = 0; u > n; n++)(e = t[n]) && (e.oldOpacity = e.opacity, e.newOpacity = 1);
			for (t.sort(function(t, e) {
				return (e.labelrank || 0) - (t.labelrank || 0)
			}), n = 0; u > n; n++) for (r = t[n], e = n + 1; u > e; ++e) o = t[e], r && o && r.placed && o.placed && 0 !== r.newOpacity && 0 !== o.newOpacity && (s = r.alignAttr, a = o.alignAttr, l = r.parentGroup, c = o.parentGroup, h = 2 * (r.box ? 0 : r.padding), s = !(a.x + c.translateX > s.x + l.translateX + (r.width - h) || a.x + c.translateX + (o.width - h) < s.x + l.translateX || a.y + c.translateY > s.y + l.translateY + (r.height - h) || a.y + c.translateY + (o.height - h) < s.y + l.translateY)) && ((r.labelrank < o.labelrank ? r : o).newOpacity = 0);
			i(t, function(t) {
				var e, i;
				t && (i = t.newOpacity, t.oldOpacity !== i && t.placed && (i ? t.show(!0) : e = function() {
					t.hide()
				}, t.alignAttr.opacity = i, t[t.isOld ? "animate" : "attr"](t.alignAttr, null, e)), t.isOld = !0)
			})
		}
	}(st);
	var ke = st.TrackerMixin = {
		drawTrackerPoint: function() {
			var t = this,
				e = t.chart,
				i = e.pointer,
				n = t.options.cursor,
				r = n && {
					cursor: n
				},
				o = function(t) {
					for (var i, n = t.target; n && !i;) i = n.point, n = n.parentNode;
					i !== B && i !== e.hoverPoint && i.onMouseOver(t)
				};
			Wt(t.points, function(t) {
				t.graphic && (t.graphic.element.point = t), t.dataLabel && (t.dataLabel.element.point = t)
			}), t._hasTracking || (Wt(t.trackerGroups, function(e) {
				t[e] && (t[e].addClass("highcharts-tracker").on("mouseover", o).on("mouseout", function(t) {
					i.onTrackerMouseOut(t)
				}).css(r), z) && t[e].on("touchstart", o)
			}), t._hasTracking = !0)
		},
		drawTrackerGraph: function() {
			var t = this,
				e = t.options,
				i = e.trackByArea,
				n = [].concat(i ? t.areaPath : t.graphPath),
				r = n.length,
				o = t.chart,
				s = o.pointer,
				a = o.renderer,
				l = o.options.tooltip.snap,
				c = t.tracker,
				h = e.cursor,
				u = h && {
					cursor: h
				},
				p = function() {
					o.hoverSeries !== t && t.onMouseOver()
				},
				d = "rgba(192,192,192," + (_t ? 1e-4 : .002) + ")";
			if (r && !i) for (h = r + 1; h--;)"M" === n[h] && n.splice(h + 1, 0, n[h + 1] - l, n[h + 2], "L"), (h && "M" === n[h] || h === r) && n.splice(h, 0, "L", n[h - 2] + l, n[h - 1]);
			c ? c.attr({
				d: n
			}) : (t.tracker = a.path(n).attr({
				"stroke-linejoin": "round",
				visibility: t.visible ? "visible" : "hidden",
				stroke: d,
				fill: i ? d : "none",
				"stroke-width": e.lineWidth + (i ? 0 : 2 * l),
				zIndex: 2
			}).add(t.group), Wt([t.tracker, t.markerGroup], function(t) {
				t.addClass("highcharts-tracker").on("mouseover", p).on("mouseout", function(t) {
					s.onTrackerMouseOut(t)
				}).css(u), z && t.on("touchstart", p)
			}))
		}
	};
	zt.column && (xe.prototype.drawTracker = ke.drawTrackerPoint), zt.pie && (zt.pie.prototype.drawTracker = ke.drawTrackerPoint), zt.scatter && (we.prototype.drawTracker = ke.drawTrackerPoint), Kt(ge.prototype, {
		setItemEvents: function(t, e, i, n, r) {
			var o = this;
			(i ? e : t.legendGroup).on("mouseover", function() {
				t.setState("hover"), e.css(o.options.itemHoverStyle)
			}).on("mouseout", function() {
				e.css(t.visible ? n : r), t.setState()
			}).on("click", function(e) {
				var i = function() {
						t.setVisible && t.setVisible()
					},
					e = {
						browserEvent: e
					};
				t.firePointEvent ? t.firePointEvent("legendItemClick", e, i) : Ut(t, "legendItemClick", e, i)
			})
		},
		createCheckboxForItem: function(t) {
			t.checkbox = f("input", {
				type: "checkbox",
				checked: t.selected,
				defaultChecked: t.selected
			}, this.options.itemCheckboxStyle, this.chart.container), Yt(t.checkbox, "click", function(e) {
				Ut(t.series || t, "checkboxClick", {
					checked: e.target.checked,
					item: t
				}, function() {
					t.select()
				})
			})
		}
	}), H.legend.itemStyle.cursor = "pointer", Kt(me.prototype, {
		showResetZoom: function() {
			var t = this,
				e = H.lang,
				i = t.options.chart.resetZoomButton,
				n = i.theme,
				r = n.states,
				o = "chart" === i.relativeTo ? null : "plotBox";
			this.resetZoomButton = t.renderer.button(e.resetZoom, null, null, function() {
				t.zoomOut()
			}, n, r && r.hover).attr({
				align: i.position.align,
				title: e.resetZoomTitle
			}).add().align(i.position, !1, o)
		},
		zoomOut: function() {
			var t = this;
			Ut(t, "selection", {
				resetSelection: !0
			}, function() {
				t.zoom()
			})
		},
		zoom: function(t) {
			var e, i, n = this.pointer,
				r = !1;
			!t || t.resetSelection ? Wt(this.axes, function(t) {
				e = t.zoom()
			}) : Wt(t.xAxis.concat(t.yAxis), function(t) {
				var i = t.axis,
					o = i.isXAxis;
				(n[o ? "zoomX" : "zoomY"] || n[o ? "pinchX" : "pinchY"]) && (e = i.zoom(t.min, t.max), i.displayBtn && (r = !0))
			}), i = this.resetZoomButton, r && !i ? this.showResetZoom() : !r && s(i) && (this.resetZoomButton = i.destroy()), e && this.redraw(Jt(this.options.chart.animation, t && t.animation, this.pointCount < 100))
		},
		pan: function(t, e) {
			var i, n = this,
				r = n.hoverPoints;
			r && Wt(r, function(t) {
				t.setState()
			}), Wt("xy" === e ? [1, 0] : [1], function(e) {
				var e = n[e ? "xAxis" : "yAxis"][0],
					r = e.horiz,
					o = t[r ? "chartX" : "chartY"],
					r = r ? "mouseDownX" : "mouseDownY",
					s = n[r],
					a = (e.pointRange || 0) / 2,
					l = e.getExtremes(),
					c = e.toValue(s - o, !0) + a,
					a = e.toValue(s + e.len - o, !0) - a,
					s = s > o;
				e.series.length && (s || c > dt(l.dataMin, l.min)) && (!s || a < pt(l.dataMax, l.max)) && (e.setExtremes(c, a, !1, !1, {
					trigger: "pan"
				}), i = !0), n[r] = o
			}), i && n.redraw(!1), d(n.container, {
				cursor: "move"
			})
		}
	}), Kt(ye.prototype, {
		select: function(t, e) {
			var i = this,
				n = i.series,
				r = n.chart,
				t = Jt(t, !i.selected);
			i.firePointEvent(t ? "select" : "unselect", {
				accumulate: e
			}, function() {
				i.selected = i.options.selected = t, n.options.data[Ht(i, n.data)] = i.options, i.setState(t && "select"), e || Wt(r.getSelectedPoints(), function(t) {
					t.selected && t !== i && (t.selected = t.options.selected = !1, n.options.data[Ht(t, n.data)] = t.options, t.setState(""), t.firePointEvent("unselect"))
				})
			})
		},
		onMouseOver: function(t, e) {
			var i = this.series,
				n = i.chart,
				r = n.tooltip,
				o = n.hoverPoint;
			n.hoverSeries !== i && i.onMouseOver(), o && o !== this && o.onMouseOut(), this.series && (this.firePointEvent("mouseOver"), r && (!r.shared || i.noSharedTooltip) && r.refresh(this, t), this.setState("hover"), !e) && (n.hoverPoint = this)
		},
		onMouseOut: function() {
			var t = this.series.chart,
				e = t.hoverPoints;
			this.firePointEvent("mouseOut"), e && -1 !== Ht(this, e) || (this.setState(), t.hoverPoint = null)
		},
		importEvents: function() {
			if (!this.hasImportedEvents) {
				var t, e = n(this.series.options.point, this.options).events;
				this.events = e;
				for (t in e) Yt(this, t, e[t]);
				this.hasImportedEvents = !0
			}
		},
		setState: function(t, e) {
			var i, r = ht(this.plotX),
				o = this.plotY,
				s = this.series,
				a = s.options.states,
				l = ee[s.type].marker && s.options.marker,
				c = l && !l.enabled,
				h = l && l.states[t],
				u = h && h.enabled === !1,
				p = s.stateMarkerGraphic,
				d = this.marker || {},
				f = s.chart,
				g = s.halo,
				t = t || "";
			i = this.pointAttr[t] || s.pointAttr[t], t === this.state && !e || this.selected && "select" !== t || a[t] && a[t].enabled === !1 || t && (u || c && h.enabled === !1) || t && d.states && d.states[t] && d.states[t].enabled === !1 || (this.graphic ? (l = l && this.graphic.symbolName && i.r, this.graphic.attr(n(i, l ? {
				x: r - l,
				y: o - l,
				width: 2 * l,
				height: 2 * l
			} : {})), p && p.hide()) : (t && h && (l = h.radius, d = d.symbol || s.symbol, p && p.currentSymbol !== d && (p = p.destroy()), p ? p[e ? "animate" : "attr"]({
				x: r - l,
				y: o - l
			}) : d && (s.stateMarkerGraphic = p = f.renderer.symbol(d, r - l, o - l, 2 * l, 2 * l).attr(i).add(s.markerGroup), p.currentSymbol = d)), p && (p[t && f.isInsidePlot(r, o, f.inverted) ? "show" : "hide"](), p.element.point = this)), (r = a[t] && a[t].halo) && r.size ? (g || (s.halo = g = f.renderer.path().add(f.seriesGroup)), g.attr(Kt({
				fill: this.color || s.color,
				"fill-opacity": r.opacity,
				zIndex: -1
			}, r.attributes))[e ? "animate" : "attr"]({
				d: this.haloPath(r.size)
			})) : g && g.attr({
				d: []
			}), this.state = t)
		},
		haloPath: function(t) {
			var e = this.series,
				i = e.chart,
				n = e.getPlotBox(),
				r = i.inverted,
				o = Math.floor(this.plotX);
			return i.renderer.symbols.circle(n.translateX + (r ? e.yAxis.len - this.plotY : o) - t, n.translateY + (r ? e.xAxis.len - o : this.plotY) - t, 2 * t, 2 * t)
		}
	}), Kt(be.prototype, {
		onMouseOver: function() {
			var t = this.chart,
				e = t.hoverSeries;
			e && e !== this && e.onMouseOut(), this.options.events.mouseOver && Ut(this, "mouseOver"), this.setState("hover"), t.hoverSeries = this
		},
		onMouseOut: function() {
			var t = this.options,
				e = this.chart,
				i = e.tooltip,
				n = e.hoverPoint;
			e.hoverSeries = null, n && n.onMouseOut(), this && t.events.mouseOut && Ut(this, "mouseOut"), i && !t.stickyTracking && (!i.shared || this.noSharedTooltip) && i.hide(), this.setState()
		},
		setState: function(t) {
			var e = this.options,
				i = this.graph,
				n = e.states,
				r = e.lineWidth,
				e = 0,
				t = t || "";
			if (this.state !== t && (this.state = t, !(n[t] && n[t].enabled === !1) && (t && (r = n[t].lineWidth || r + (n[t].lineWidthPlus || 0)), i && !i.dashstyle))) for (t = {
				"stroke-width": r
			}, i.attr(t); this["zoneGraph" + e];) this["zoneGraph" + e].attr(t), e += 1
		},
		setVisible: function(t, e) {
			var i, n = this,
				r = n.chart,
				o = n.legendItem,
				s = r.options.chart.ignoreHiddenSeries,
				a = n.visible;
			i = (n.visible = t = n.userOptions.visible = t === B ? !a : t) ? "show" : "hide", Wt(["group", "dataLabelsGroup", "markerGroup", "tracker"], function(t) {
				n[t] && n[t][i]()
			}), r.hoverSeries !== n && (r.hoverPoint && r.hoverPoint.series) !== n || n.onMouseOut(), o && r.legend.colorizeItem(n, t), n.isDirty = !0, n.options.stacking && Wt(r.series, function(t) {
				t.options.stacking && t.visible && (t.isDirty = !0)
			}), Wt(n.linkedSeries, function(e) {
				e.setVisible(t, !1)
			}), s && (r.isDirtyBox = !0), e !== !1 && r.redraw(), Ut(n, i)
		},
		show: function() {
			this.setVisible(!0)
		},
		hide: function() {
			this.setVisible(!1)
		},
		select: function(t) {
			this.selected = t = t === B ? !this.selected : t, this.checkbox && (this.checkbox.checked = t), Ut(this, t ? "select" : "unselect")
		},
		drawTracker: ke.drawTrackerGraph
	}), te(be.prototype, "init", function(t) {
		var e;
		t.apply(this, Array.prototype.slice.call(arguments, 1)), (e = this.xAxis) && e.options.ordinal && Yt(this, "updatedData", function() {
			delete e.ordinalIndex
		})
	}), te(ae.prototype, "getTimeTicks", function(t, e, i, n, r, o, s, a) {
		var l, h, u, p, d, f = 0,
			g = {},
			m = [],
			v = -Number.MAX_VALUE,
			y = this.options.tickPixelInterval;
		if (!this.options.ordinal && !this.options.breaks || !o || o.length < 3 || i === B) return t.call(this, e, i, n, r);
		for (p = o.length, l = 0; p > l; l++) {
			if (d = l && o[l - 1] > n, o[l] < i && (f = l), l === p - 1 || o[l + 1] - o[l] > 5 * s || d) {
				if (o[l] > v) {
					for (h = t.call(this, e, o[f], o[l], r); h.length && h[0] <= v;) h.shift();
					h.length && (v = h[h.length - 1]), m = m.concat(h)
				}
				f = l + 1
			}
			if (d) break
		}
		if (t = h.info, a && t.unitRange <= F.hour) {
			for (l = m.length - 1, f = 1; l > f; f++) W("%d", m[f]) !== W("%d", m[f - 1]) && (g[m[f]] = "day", u = !0);
			u && (g[m[0]] = "day"), t.higherRanks = g
		}
		if (m.info = t, a && c(y)) {
			a = t = m.length, l = [];
			var b;
			for (u = []; a--;) f = this.translate(m[a]), b && (u[a] = b - f), l[a] = b = f;
			for (u.sort(), u = u[ht(u.length / 2)], .6 * y > u && (u = null), a = m[t - 1] > n ? t - 1 : t, b = void 0; a--;) f = l[a], n = b - f, b && .8 * y > n && (null === u || .8 * u > n) ? (g[m[a]] && !g[m[a + 1]] ? (n = a + 1, b = f) : n = a, m.splice(n, 1)) : b = f
		}
		return m
	}), Kt(ae.prototype, {
		beforeSetTickPositions: function() {
			var t, e, i, n = [],
				r = !1,
				o = this.getExtremes(),
				s = o.min,
				a = o.max,
				l = this.isXAxis && !! this.options.breaks;
			if ((o = this.options.ordinal) || l) {
				if (Wt(this.series, function(e, i) {
					if (e.visible !== !1 && (e.takeOrdinalPosition !== !1 || l) && (n = n.concat(e.processedXData), t = n.length, n.sort(function(t, e) {
						return t - e
					}), t)) for (i = t - 1; i--;) n[i] === n[i + 1] && n.splice(i, 1)
				}), t = n.length, t > 2) {
					for (e = n[1] - n[0], i = t - 1; i-- && !r;) n[i + 1] - n[i] !== e && (r = !0);
					!this.options.keepOrdinalPadding && (n[0] - s > e || a - n[n.length - 1] > e) && (r = !0)
				}
				r ? (this.ordinalPositions = n, e = this.val2lin(pt(s, n[0]), !0), i = pt(this.val2lin(dt(a, n[n.length - 1]), !0), 1), this.ordinalSlope = a = (a - s) / (i - e), this.ordinalOffset = s - e * a) : this.ordinalPositions = this.ordinalSlope = this.ordinalOffset = B
			}
			this.isOrdinal = o && r, this.groupIntervalFactor = null
		},
		val2lin: function(t, e) {
			var i, n = this.ordinalPositions;
			if (n) {
				var r, o = n.length;
				for (i = o; i--;) if (n[i] === t) {
					r = i;
					break
				}
				for (i = o - 1; i--;) if (t > n[i] || 0 === i) {
					n = (t - n[i]) / (n[i + 1] - n[i]), r = i + n;
					break
				}
				i = e ? r : this.ordinalSlope * (r || 0) + this.ordinalOffset
			} else i = t;
			return i
		},
		lin2val: function(t, e) {
			var i = this.ordinalPositions;
			if (i) {
				var n, r, o = this.ordinalSlope,
					s = this.ordinalOffset,
					a = i.length - 1;
				if (e) 0 > t ? t = i[0] : t > a ? t = i[a] : (a = ht(t), r = t - a);
				else for (; a--;) if (n = o * a + s, t >= n) {
					o = o * (a + 1) + s, r = (t - n) / (o - n);
					break
				}
				i = r !== B && i[a] !== B ? i[a] + (r ? r * (i[a + 1] - i[a]) : 0) : t
			} else i = t;
			return i
		},
		getExtendedPositions: function() {
			var t, e, i = this.chart,
				n = this.series[0].currentDataGrouping,
				r = this.ordinalIndex,
				o = n ? n.count + n.unitName : "raw",
				s = this.getExtremes();
			return r || (r = this.ordinalIndex = {}), r[o] || (t = {
				series: [],
				getExtremes: function() {
					return {
						min: s.dataMin,
						max: s.dataMax
					}
				},
				options: {
					ordinal: !0
				},
				val2lin: ae.prototype.val2lin
			}, Wt(this.series, function(r) {
				e = {
					xAxis: t,
					xData: r.xData,
					chart: i,
					destroyGroupedData: Dt
				}, e.options = {
					dataGrouping: n ? {
						enabled: !0,
						forced: !0,
						approximation: "open",
						units: [
							[n.unitName, [n.count]]
						]
					} : {
						enabled: !1
					}
				}, r.processData.apply(e), t.series.push(e)
			}), this.beforeSetTickPositions.apply(t), r[o] = t.ordinalPositions), r[o]
		},
		getGroupIntervalFactor: function(t, e, i) {
			var n, i = i.processedXData,
				r = i.length,
				o = [];
			if (n = this.groupIntervalFactor, !n) {
				for (n = 0; r - 1 > n; n++) o[n] = i[n + 1] - i[n];
				o.sort(function(t, e) {
					return t - e
				}), o = o[ht(r / 2)], t = pt(t, i[0]), e = dt(e, i[r - 1]), this.groupIntervalFactor = n = r * o / (e - t)
			}
			return n
		},
		postProcessTickInterval: function(t) {
			var e = this.ordinalSlope;
			return e ? this.options.breaks ? this.closestPointRange : t / (e / this.closestPointRange) : t
		}
	}), te(me.prototype, "pan", function(t, e) {
		var i = this.xAxis[0],
			n = e.chartX,
			r = !1;
		if (i.options.ordinal && i.series.length) {
			var o, s = this.mouseDownX,
				a = i.getExtremes(),
				l = a.dataMax,
				c = a.min,
				h = a.max,
				u = this.hoverPoints,
				p = i.closestPointRange,
				s = (s - n) / (i.translationSlope * (i.ordinalSlope || p)),
				f = {
					ordinalPositions: i.getExtendedPositions()
				},
				p = i.lin2val,
				g = i.val2lin;
			f.ordinalPositions ? ft(s) > 1 && (u && Wt(u, function(t) {
				t.setState()
			}), 0 > s ? (u = f, o = i.ordinalPositions ? i : f) : (u = i.ordinalPositions ? i : f, o = f), f = o.ordinalPositions, l > f[f.length - 1] && f.push(l), this.fixedRange = h - c, s = i.toFixedRange(null, null, p.apply(u, [g.apply(u, [c, !0]) + s, !0]), p.apply(o, [g.apply(o, [h, !0]) + s, !0])), s.min >= dt(a.dataMin, c) && s.max <= pt(l, h) && i.setExtremes(s.min, s.max, !0, !1, {
				trigger: "pan"
			}), this.mouseDownX = n, d(this.container, {
				cursor: "move"
			})) : r = !0
		} else r = !0;
		r && t.apply(this, Array.prototype.slice.call(arguments, 1))
	}), be.prototype.gappedPath = function() {
		var t = this.options.gapSize,
			e = this.points.slice(),
			i = e.length - 1;
		if (t && i > 0) for (; i--;) e[i + 1].x - e[i].x > this.closestPointRange * t && e.splice(i + 1, 0, {
			isNull: !0
		});
		return this.getGraphPath(e)
	}, function(t) {
		t(st)
	}(function(t) {
		function e() {
			return Array.prototype.slice.call(arguments, 1)
		}
		function i(t) {
			t.apply(this), this.drawBreaks(this.xAxis, ["x"]), this.drawBreaks(this.yAxis, n(this.pointArrayMap, ["y"]))
		}
		var n = t.pick,
			r = t.wrap,
			o = t.each,
			s = t.extend,
			a = t.fireEvent,
			l = t.Axis,
			c = t.Series;
		s(l.prototype, {
			isInBreak: function(t, e) {
				var i = t.repeat || 1 / 0,
					n = t.from,
					r = t.to - t.from,
					i = e >= n ? (e - n) % i : i - (n - e) % i;
				return t.inclusive ? r >= i : r > i && 0 !== i
			},
			isInAnyBreak: function(t, e) {
				var i, r, o, s = this.options.breaks,
					a = s && s.length;
				if (a) {
					for (; a--;) this.isInBreak(s[a], t) && (i = !0, r || (r = n(s[a].showPoints, !this.isXAxis)));
					o = i && e ? i && !r : i
				}
				return o
			}
		}), r(l.prototype, "setTickPositions", function(t) {
			if (t.apply(this, Array.prototype.slice.call(arguments, 1)), this.options.breaks) {
				var e, i = this.tickPositions,
					n = this.tickPositions.info,
					r = [];
				for (e = 0; e < i.length; e++) this.isInAnyBreak(i[e]) || r.push(i[e]);
				this.tickPositions = r, this.tickPositions.info = n
			}
		}), r(l.prototype, "init", function(t, e, i) {
			if (i.breaks && i.breaks.length && (i.ordinal = !1), t.call(this, e, i), this.options.breaks) {
				var n = this;
				n.isBroken = !0, this.val2lin = function(t) {
					var e, i, r = t;
					for (i = 0; i < n.breakArray.length; i++) if (e = n.breakArray[i], e.to <= t) r -= e.len;
					else {
						if (e.from >= t) break;
						if (n.isInBreak(e, t)) {
							r -= t - e.from;
							break
						}
					}
					return r
				}, this.lin2val = function(t) {
					var e, i;
					for (i = 0; i < n.breakArray.length && (e = n.breakArray[i], !(e.from >= t)); i++) e.to < t ? t += e.len : n.isInBreak(e, t) && (t += e.len);
					return t
				}, this.setExtremes = function(t, e, i, n, r) {
					for (; this.isInAnyBreak(t);) t -= this.closestPointRange;
					for (; this.isInAnyBreak(e);) e -= this.closestPointRange;
					l.prototype.setExtremes.call(this, t, e, i, n, r)
				}, this.setAxisTranslation = function(t) {
					l.prototype.setAxisTranslation.call(this, t);
					var e, i, r, o, s = n.options.breaks,
						t = [],
						c = [],
						h = 0,
						u = n.userMin || n.min,
						p = n.userMax || n.max;
					for (o in s) i = s[o], e = i.repeat || 1 / 0, n.isInBreak(i, u) && (u += i.to % e - u % e), n.isInBreak(i, p) && (p -= p % e - i.from % e);
					for (o in s) {
						for (i = s[o], r = i.from, e = i.repeat || 1 / 0; r - e > u;) r -= e;
						for (; u > r;) r += e;
						for (; p > r; r += e) t.push({
							value: r,
							move: "in"
						}), t.push({
							value: r + (i.to - i.from),
							move: "out",
							size: i.breakSize
						})
					}
					t.sort(function(t, e) {
						return t.value === e.value ? ("in" === t.move ? 0 : 1) - ("in" === e.move ? 0 : 1) : t.value - e.value
					}), s = 0, r = u;
					for (o in t) i = t[o], s += "in" === i.move ? 1 : -1, 1 === s && "in" === i.move && (r = i.value), 0 === s && (c.push({
						from: r,
						to: i.value,
						len: i.value - r - (i.size || 0)
					}), h += i.value - r - (i.size || 0));
					n.breakArray = c, a(n, "afterBreaks"), n.transA *= (p - n.min) / (p - u - h), n.min = u, n.max = p
				}
			}
		}), r(c.prototype, "generatePoints", function(t) {
			t.apply(this, e(arguments));
			var i, n, r = this.xAxis,
				o = this.yAxis,
				s = this.points,
				a = s.length,
				l = this.options.connectNulls;
			if (r && o && (r.options.breaks || o.options.breaks)) for (; a--;) i = s[a], n = null === i.y && l === !1, n || !r.isInAnyBreak(i.x, !0) && !o.isInAnyBreak(i.y, !0) || (s.splice(a, 1), this.data[a] && this.data[a].destroyElements())
		}), t.Series.prototype.drawBreaks = function(t, e) {
			var i, r, s, l, c = this,
				h = c.points;
			o(e, function(e) {
				i = t.breakArray || [], r = t.isXAxis ? t.min : n(c.options.threshold, t.min), o(h, function(c) {
					l = n(c["stack" + e.toUpperCase()], c[e]), o(i, function(e) {
						s = !1, r < e.from && l > e.to || r > e.from && l < e.from ? s = "pointBreak" : (r < e.from && l > e.from && l < e.to || r > e.from && l > e.to && l < e.from) && (s = "pointInBreak"), s && a(t, s, {
							point: c,
							brk: e
						})
					})
				})
			})
		}, r(t.seriesTypes.column.prototype, "drawPoints", i), r(t.Series.prototype, "drawPoints", i)
	});
	var Ae = be.prototype,
		Se = Ae.processData,
		Ce = Ae.generatePoints,
		Te = Ae.destroy,
		_e = {
			approximation: "average",
			groupPixelWidth: 2,
			dateTimeLabelFormats: {
				millisecond: ["%A, %b %e, %H:%M:%S.%L", "%A, %b %e, %H:%M:%S.%L", "-%H:%M:%S.%L"],
				second: ["%A, %b %e, %H:%M:%S", "%A, %b %e, %H:%M:%S", "-%H:%M:%S"],
				minute: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"],
				hour: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"],
				day: ["%A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"],
				week: ["Week from %A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"],
				month: ["%B %Y", "%B", "-%B %Y"],
				year: ["%Y", "%Y", "-%Y"]
			}
		},
		Me = {
			line: {},
			spline: {},
			area: {},
			areaspline: {},
			column: {
				approximation: "sum",
				groupPixelWidth: 10
			},
			arearange: {
				approximation: "range"
			},
			areasplinerange: {
				approximation: "range"
			},
			columnrange: {
				approximation: "range",
				groupPixelWidth: 10
			},
			candlestick: {
				approximation: "ohlc",
				groupPixelWidth: 10
			},
			ohlc: {
				approximation: "ohlc",
				groupPixelWidth: 5
			}
		},
		Le = [
			["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
			["second", [1, 2, 5, 10, 15, 30]],
			["minute", [1, 2, 5, 10, 15, 30]],
			["hour", [1, 2, 3, 4, 6, 8, 12]],
			["day", [1]],
			["week", [1]],
			["month", [1, 3, 6]],
			["year", null]
		],
		Pe = {
			sum: function(t) {
				var e, i = t.length;
				if (!i && t.hasNulls) e = null;
				else if (i) for (e = 0; i--;) e += t[i];
				return e
			},
			average: function(t) {
				var e = t.length,
					t = Pe.sum(t);
				return Qt(t) && e && (t /= e), t
			},
			open: function(t) {
				return t.length ? t[0] : t.hasNulls ? null : B
			},
			high: function(t) {
				return t.length ? A(t) : t.hasNulls ? null : B
			},
			low: function(t) {
				return t.length ? k(t) : t.hasNulls ? null : B
			},
			close: function(t) {
				return t.length ? t[t.length - 1] : t.hasNulls ? null : B
			},
			ohlc: function(t, e, i, n) {
				return t = Pe.open(t), e = Pe.high(e), i = Pe.low(i), n = Pe.close(n), Qt(t) || Qt(e) || Qt(i) || Qt(n) ? [t, e, i, n] : void 0
			},
			range: function(t, e) {
				return t = Pe.low(t), e = Pe.high(e), Qt(t) || Qt(e) ? [t, e] : void 0
			}
		};
	Ae.groupData = function(t, e, i, n) {
		var r, o, s, a = this.data,
			l = this.options.data,
			c = [],
			h = [],
			u = [],
			p = t.length,
			d = !! e,
			f = [
				[],
				[],
				[],
				[]
			],
			n = "function" == typeof n ? n : Pe[n],
			g = this.pointArrayMap,
			m = g && g.length,
			v = 0;
		for (s = 0; p >= s && !(t[s] >= i[0]); s++);
		for (; p >= s; s++) {
			for (;
			(i[1] !== B && t[s] >= i[1] || s === p) && (r = i.shift(), o = n.apply(0, f), o !== B && (c.push(r), h.push(o), u.push({
				start: v,
				length: f[0].length
			})), v = s, f[0] = [], f[1] = [], f[2] = [], f[3] = [], s !== p););
			if (s === p) break;
			if (g) {
				r = this.cropStart + s, r = a && a[r] || this.pointClass.prototype.applyOptions.apply({
					series: this
				}, [l[r]]);
				var y;
				for (o = 0; m > o; o++) y = r[g[o]], Qt(y) ? f[o].push(y) : null === y && (f[o].hasNulls = !0)
			} else r = d ? e[s] : null, Qt(r) ? f[0].push(r) : null === r && (f[0].hasNulls = !0)
		}
		return [c, h, u]
	}, Ae.processData = function() {
		var t, e = this.chart,
			i = this.options.dataGrouping,
			n = this.allowDG !== !1 && i && Jt(i.enabled, e.options._stock);
		if (this.forceCrop = n, this.groupPixelWidth = null, this.hasProcessed = !0, Se.apply(this, arguments) !== !1 && n) {
			this.destroyGroupedData();
			var r = this.processedXData,
				o = this.processedYData,
				s = e.plotSizeX,
				e = this.xAxis,
				a = e.options.ordinal,
				l = this.groupPixelWidth = e.getGroupPixelWidth && e.getGroupPixelWidth();
			if (l) {
				t = !0, this.points = null;
				var h = e.getExtremes(),
					n = h.min,
					h = h.max,
					a = a && e.getGroupIntervalFactor(n, h, this) || 1,
					s = l * (h - n) / s * a,
					l = e.getTimeTicks(e.normalizeTimeTickInterval(s, i.units || Le), Math.min(n, r[0]), Math.max(h, r[r.length - 1]), e.options.startOfWeek, r, this.closestPointRange),
					r = Ae.groupData.apply(this, [r, o, l, i.approximation]),
					o = r[0],
					a = r[1];
				if (i.smoothed) {
					for (i = o.length - 1, o[i] = Math.min(o[i], h); i-- && i > 0;) o[i] += s / 2;
					o[0] = Math.max(o[0], n)
				}
				this.currentDataGrouping = l.info, this.closestPointRange = l.info.totalRange, this.groupMap = r[2], c(o[0]) && o[0] < e.dataMin && (e.min === e.dataMin && (e.min = o[0]), e.dataMin = o[0]), this.processedXData = o, this.processedYData = a
			} else this.currentDataGrouping = this.groupMap = null;
			this.hasGroupedData = t
		}
	}, Ae.destroyGroupedData = function() {
		var t = this.groupedData;
		Wt(t || [], function(e, i) {
			e && (t[i] = e.destroy ? e.destroy() : null)
		}), this.groupedData = null
	}, Ae.generatePoints = function() {
		Ce.apply(this), this.destroyGroupedData(), this.groupedData = this.hasGroupedData ? this.points : null
	}, te(le.prototype, "tooltipFooterHeaderFormatter", function(t, e, i) {
		var n, r = e.series,
			o = r.tooltipOptions,
			s = r.options.dataGrouping,
			a = o.xDateFormat,
			l = r.xAxis;
		return l && "datetime" === l.options.type && s && Qt(e.key) ? (t = r.currentDataGrouping, s = s.dateTimeLabelFormats, t ? (l = s[t.unitName], 1 === t.count ? a = l[0] : (a = l[1], n = l[2])) : !a && s && (a = this.getXDateFormat(e, o, l)), a = W(a, e.key), n && (a += W(n, e.key + t.totalRange - 1)), y(o[(i ? "footer" : "header") + "Format"], {
			point: Kt(e, {
				key: a
			}),
			series: r
		})) : t.call(this, e, i)
	}), Ae.destroy = function() {
		for (var t = this.groupedData || [], e = t.length; e--;) t[e] && t[e].destroy();
		Te.apply(this)
	}, te(Ae, "setOptions", function(t, e) {
		var i = t.call(this, e),
			r = this.type,
			o = this.chart.options.plotOptions,
			s = ee[r].dataGrouping;
		return Me[r] && (s || (s = n(_e, Me[r])), i.dataGrouping = n(s, o.series && o.series.dataGrouping, o[r].dataGrouping, e.dataGrouping)), this.chart.options._stock && (this.requireSorting = !0), i
	}), te(ae.prototype, "setScale", function(t) {
		t.call(this), Wt(this.series, function(t) {
			t.hasProcessed = !1
		})
	}), ae.prototype.getGroupPixelWidth = function() {
		var t, e, i = this.series,
			n = i.length,
			r = 0,
			o = !1;
		for (t = n; t--;)(e = i[t].options.dataGrouping) && (r = pt(r, e.groupPixelWidth));
		for (t = n; t--;)(e = i[t].options.dataGrouping) && i[t].hasProcessed && (n = (i[t].processedXData || i[t].data).length, (i[t].groupPixelWidth || n > this.chart.plotSizeX / r || n && e.forced) && (o = !0));
		return o ? r : 0
	}, ae.prototype.setDataGrouping = function(t, e) {
		var i, e = Jt(e, !0);
		if (t || (t = {
			forced: !1,
			units: null
		}), this instanceof ae) for (i = this.series.length; i--;) this.series[i].update({
			dataGrouping: t
		}, !1);
		else Wt(this.chart.options.series, function(e) {
			e.dataGrouping = t
		}, !1);
		e && this.chart.redraw()
	}, ee.ohlc = n(ee.column, {
		lineWidth: 1,
		tooltip: {
			pointFormat: '<span style="color:{point.color}">●</span> <b> {series.name}</b><br/>Open: {point.open}<br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>'
		},
		states: {
			hover: {
				lineWidth: 3
			}
		},
		threshold: null
	}), ie = g(zt.column, {
		type: "ohlc",
		pointArrayMap: ["open", "high", "low", "close"],
		toYData: function(t) {
			return [t.open, t.high, t.low, t.close]
		},
		pointValKey: "high",
		pointAttrToOptions: {
			stroke: "color",
			"stroke-width": "lineWidth"
		},
		upColorProp: "stroke",
		getAttribs: function() {
			zt.column.prototype.getAttribs.apply(this, arguments);
			var t = this.options,
				e = t.states,
				t = t.upColor || this.color,
				i = n(this.pointAttr),
				r = this.upColorProp;
			i[""][r] = t, i.hover[r] = e.hover.upColor || t, i.select[r] = e.select.upColor || t, Wt(this.points, function(t) {
				t.open < t.close && !t.options.color && (t.pointAttr = i)
			})
		},
		translate: function() {
			var t = this.yAxis;
			zt.column.prototype.translate.apply(this), Wt(this.points, function(e) {
				null !== e.open && (e.plotOpen = t.translate(e.open, 0, 1, 0, 1)), null !== e.close && (e.plotClose = t.translate(e.close, 0, 1, 0, 1))
			})
		},
		drawPoints: function() {
			var t, e, i, n, r, o, s, a, l = this,
				c = l.chart;
			Wt(l.points, function(h) {
				h.plotY !== B && (s = h.graphic, t = h.pointAttr[h.selected ? "selected" : ""] || l.pointAttr[""], n = t["stroke-width"] % 2 / 2, a = ct(h.plotX) - n, r = ct(h.shapeArgs.width / 2), o = ["M", a, ct(h.yBottom), "L", a, ct(h.plotY)], null !== h.open && (e = ct(h.plotOpen) + n, o.push("M", a, e, "L", a - r, e)), null !== h.close && (i = ct(h.plotClose) + n, o.push("M", a, i, "L", a + r, i)), s ? s.attr(t).animate({
					d: o
				}) : h.graphic = c.renderer.path(o).attr(t).add(l.group))
			})
		},
		animate: null
	}), zt.ohlc = ie, ee.candlestick = n(ee.column, {
		lineColor: "black",
		lineWidth: 1,
		states: {
			hover: {
				lineWidth: 2
			}
		},
		tooltip: ee.ohlc.tooltip,
		threshold: null,
		upColor: "white"
	}), ie = g(ie, {
		type: "candlestick",
		pointAttrToOptions: {
			fill: "color",
			stroke: "lineColor",
			"stroke-width": "lineWidth"
		},
		upColorProp: "fill",
		getAttribs: function() {
			zt.ohlc.prototype.getAttribs.apply(this, arguments);
			var t = this.options,
				e = t.states,
				i = t.upLineColor || t.lineColor,
				r = e.hover.upLineColor || i,
				o = e.select.upLineColor || i;
			Wt(this.points, function(t) {
				t.open < t.close && (t.lineColor && (t.pointAttr = n(t.pointAttr), i = t.lineColor), t.pointAttr[""].stroke = i, t.pointAttr.hover.stroke = r, t.pointAttr.select.stroke = o)
			})
		},
		drawPoints: function() {
			var t, e, i, n, r, o, s, a, l, c, h, u, p = this,
				d = p.chart,
				f = p.pointAttr[""];
			Wt(p.points, function(g) {
				c = g.graphic, g.plotY !== B && (t = g.pointAttr[g.selected ? "selected" : ""] || f, a = t["stroke-width"] % 2 / 2, l = ct(g.plotX) - a, e = g.plotOpen, i = g.plotClose, n = lt.min(e, i), r = lt.max(e, i), u = ct(g.shapeArgs.width / 2), o = ct(n) !== ct(g.plotY), s = r !== g.yBottom, n = ct(n) + a, r = ct(r) + a, h = [], h.push("M", l - u, r, "L", l - u, n, "L", l + u, n, "L", l + u, r, "Z", "M", l, n, "L", l, o ? ct(g.plotY) : n, "M", l, r, "L", l, s ? ct(g.yBottom) : r), c ? c.attr(t).animate({
					d: h
				}) : g.graphic = d.renderer.path(h).attr(t).add(p.group).shadow(p.options.shadow))
			})
		}
	}), zt.candlestick = ie;
	var Ee = ne.prototype.symbols;
	ee.flags = n(ee.column, {
		fillColor: "white",
		lineWidth: 1,
		pointRange: 0,
		shape: "flag",
		stackDistance: 12,
		states: {
			hover: {
				lineColor: "black",
				fillColor: "#FCFFC5"
			}
		},
		style: {
			fontSize: "11px",
			fontWeight: "bold",
			textAlign: "center"
		},
		tooltip: {
			pointFormat: "{point.text}<br/>"
		},
		threshold: null,
		y: -30
	}), zt.flags = g(zt.column, {
		type: "flags",
		sorted: !1,
		noSharedTooltip: !0,
		allowDG: !1,
		takeOrdinalPosition: !1,
		trackerGroups: ["markerGroup"],
		forceCrop: !0,
		init: be.prototype.init,
		pointAttrToOptions: {
			fill: "fillColor",
			stroke: "color",
			"stroke-width": "lineWidth",
			r: "radius"
		},
		translate: function() {
			zt.column.prototype.translate.apply(this);
			var t, e, i = this.options,
				n = this.chart,
				r = this.points,
				o = r.length - 1,
				s = i.onSeries;
			t = s && n.get(s);
			var a, l, c, i = i.onKey || "y",
				s = t && t.options.step,
				h = t && t.points,
				u = h && h.length,
				p = this.xAxis,
				d = p.getExtremes();
			if (t && t.visible && u) for (t = t.currentDataGrouping, l = h[u - 1].x + (t ? t.totalRange : 0), r.sort(function(t, e) {
				return t.x - e.x
			}), i = "plot" + i[0].toUpperCase() + i.substr(1); u-- && r[o] && (t = r[o], a = h[u], !(a.x <= t.x && void 0 !== a[i] && (t.x <= l && (t.plotY = a[i], a.x < t.x && !s && (c = h[u + 1]) && c[i] !== B && (t.plotY += (t.x - a.x) / (c.x - a.x) * (c[i] - a[i]))), o--, u++, 0 > o))););
			Wt(r, function(t, i) {
				var o;
				t.plotY === B && (t.x >= d.min && t.x <= d.max ? t.plotY = n.chartHeight - p.bottom - (p.opposite ? p.height : 0) + p.offset - n.plotTop : t.shapeArgs = {}), (e = r[i - 1]) && e.plotX === t.plotX && (e.stackIndex === B && (e.stackIndex = 0), o = e.stackIndex + 1), t.stackIndex = o
			})
		},
		drawPoints: function() {
			var t, e, i, r, o, s, a, l, c, h = this.pointAttr[""],
				u = this.points,
				p = this.chart,
				d = p.renderer,
				f = this.options,
				g = f.y,
				m = this.yAxis;
			for (o = u.length; o--;) s = u[o], t = s.plotX > this.xAxis.len, e = s.plotX, e > 0 && (e -= Jt(s.lineWidth, f.lineWidth) % 2), a = s.stackIndex, r = s.options.shape || f.shape, i = s.plotY, i !== B && (i = s.plotY + g - (a !== B && a * f.stackDistance)), l = a ? B : s.plotX, c = a ? B : s.plotY, a = s.graphic, i !== B && e >= 0 && !t ? (t = s.pointAttr[s.selected ? "select" : ""] || h, a ? a.attr({
				x: e,
				y: i,
				r: t.r,
				anchorX: l,
				anchorY: c
			}) : s.graphic = d.label(s.options.title || f.title || "A", e, i, r, l, c, f.useHTML).css(n(f.style, s.style)).attr(t).attr({
				align: "flag" === r ? "left" : "center",
				width: f.width,
				height: f.height
			}).add(this.markerGroup).shadow(f.shadow), s.tooltipPos = p.inverted ? [m.len + m.pos - p.plotLeft - i, this.xAxis.len - e] : [e, i]) : a && (s.graphic = a.destroy())
		},
		drawTracker: function() {
			var t = this.points;
			ke.drawTrackerPoint.apply(this), Wt(t, function(e) {
				var i = e.graphic;
				i && Yt(i.element, "mouseover", function() {
					e.stackIndex > 0 && !e.raised && (e._y = i.y, i.attr({
						y: e._y - 8
					}), e.raised = !0), Wt(t, function(t) {
						t !== e && t.raised && t.graphic && (t.graphic.attr({
							y: t._y
						}), t.raised = !1)
					})
				})
			})
		},
		animate: Dt,
		buildKDTree: Dt,
		setClip: Dt
	}), Ee.flag = function(t, e, i, n, r) {
		return ["M", r && r.anchorX || t, r && r.anchorY || e, "L", t, e + n, t, e, t + i, e, t + i, e + n, t, e + n, "Z"]
	}, Wt(["circle", "square"], function(t) {
		Ee[t + "pin"] = function(e, i, n, r, o) {
			var s = o && o.anchorX,
				o = o && o.anchorY;
			return "circle" === t && r > n && (e -= ct((r - n) / 2), n = r), e = Ee[t](e, i, n, r), s && o && e.push("M", s, i > o ? i : i + r, "L", s, o), e
		}
	}), R === st.VMLRenderer && Wt(["flag", "circlepin", "squarepin"], function(t) {
		re.prototype.symbols[t] = Ee[t]
	});
	var ie = [].concat(Le),
		De = function(t) {
			var e = Ft(arguments, function(t) {
				return Qt(t)
			});
			return e.length ? Math[t].apply(0, e) : void 0
		};
	ie[4] = ["day", [1, 2, 3, 4]], ie[5] = ["week", [1, 2, 3]], Kt(H, {
		navigator: {
			handles: {
				backgroundColor: "#ebe7e8",
				borderColor: "#b2b1b6"
			},
			height: 40,
			margin: 25,
			maskFill: "rgba(128,179,236,0.3)",
			maskInside: !0,
			outlineColor: "#b2b1b6",
			outlineWidth: 1,
			series: {
				type: zt.areaspline === B ? "line" : "areaspline",
				color: "#4572A7",
				compare: null,
				fillOpacity: .05,
				dataGrouping: {
					approximation: "average",
					enabled: !0,
					groupPixelWidth: 2,
					smoothed: !0,
					units: ie
				},
				dataLabels: {
					enabled: !1,
					zIndex: 2
				},
				id: "highcharts-navigator-series",
				lineColor: null,
				lineWidth: 1,
				marker: {
					enabled: !1
				},
				pointRange: 0,
				shadow: !1,
				threshold: null
			},
			xAxis: {
				tickWidth: 0,
				lineWidth: 0,
				gridLineColor: "#EEE",
				gridLineWidth: 1,
				tickPixelInterval: 200,
				labels: {
					align: "left",
					style: {
						color: "#888"
					},
					x: 3,
					y: -4
				},
				crosshair: !1
			},
			yAxis: {
				gridLineWidth: 0,
				startOnTick: !1,
				endOnTick: !1,
				minPadding: .1,
				maxPadding: .1,
				labels: {
					enabled: !1
				},
				crosshair: !1,
				title: {
					text: null
				},
				tickWidth: 0
			}
		},
		scrollbar: {
			height: Ct ? 20 : 14,
			barBackgroundColor: "#bfc8d1",
			barBorderRadius: 0,
			barBorderWidth: 1,
			barBorderColor: "#bfc8d1",
			buttonArrowColor: "#666",
			buttonBackgroundColor: "#ebe7e8",
			buttonBorderColor: "#bbb",
			buttonBorderRadius: 0,
			buttonBorderWidth: 1,
			minWidth: 6,
			rifleColor: "#666",
			trackBackgroundColor: "#eeeeee",
			trackBorderColor: "#eeeeee",
			trackBorderWidth: 1,
			liveRedraw: _t && !Ct
		}
	}), N.prototype = {
		drawHandle: function(t, e) {
			var i, n = this.chart.renderer,
				r = this.elementsToDestroy,
				o = this.handles,
				s = this.navigatorOptions.handles,
				s = {
					fill: s.backgroundColor,
					stroke: s.borderColor,
					"stroke-width": 1
				};
			this.rendered || (o[e] = n.g("navigator-handle-" + ["left", "right"][e]).css({
				cursor: "ew-resize"
			}).attr({
				zIndex: 10 - e
			}).add(), i = n.rect(-4.5, 0, 9, 16, 0, 1).attr(s).add(o[e]), r.push(i), i = n.path(["M", -1.5, 4, "L", -1.5, 12, "M", .5, 4, "L", .5, 12]).attr(s).add(o[e]), r.push(i)), o[e][this.rendered ? "animate" : "attr"]({
				translateX: this.scrollerLeft + this.scrollbarHeight + parseInt(t, 10),
				translateY: this.top + this.height / 2 - 8
			})
		},
		drawScrollbarButton: function(t) {
			var e, i = this.chart.renderer,
				n = this.elementsToDestroy,
				r = this.scrollbarButtons,
				o = this.scrollbarHeight,
				s = this.scrollbarOptions;
			this.rendered || (r[t] = i.g().add(this.scrollbarGroup), e = i.rect(-.5, -.5, o + 1, o + 1, s.buttonBorderRadius, s.buttonBorderWidth).attr({
				stroke: s.buttonBorderColor,
				"stroke-width": s.buttonBorderWidth,
				fill: s.buttonBackgroundColor
			}).add(r[t]), n.push(e), e = i.path(["M", o / 2 + (t ? -1 : 1), o / 2 - 3, "L", o / 2 + (t ? -1 : 1), o / 2 + 3, o / 2 + (t ? 2 : -2), o / 2]).attr({
				fill: s.buttonArrowColor
			}).add(r[t]), n.push(e)), t && r[t].attr({
				translateX: this.scrollerWidth - o
			})
		},
		render: function(t, e, i, n) {
			var r, o, s, a, l = this.chart,
				h = l.renderer,
				u = this.scrollbarGroup,
				p = this.navigatorGroup,
				d = this.scrollbar,
				p = this.xAxis,
				f = this.scrollbarTrack,
				g = this.scrollbarHeight,
				m = this.scrollbarEnabled,
				v = this.navigatorOptions,
				y = this.scrollbarOptions,
				b = y.minWidth,
				x = this.height,
				w = this.top,
				k = this.navigatorEnabled,
				A = v.outlineWidth,
				S = A / 2,
				C = 0,
				T = this.outlineHeight,
				_ = y.barBorderRadius,
				M = y.barBorderWidth,
				L = w + S,
				P = this.rendered;
			Qt(t) && Qt(e) && (!this.hasDragged || c(i)) && (this.navigatorLeft = r = Jt(p.left, l.plotLeft + g), this.navigatorWidth = o = Jt(p.len, l.plotWidth - 2 * g), this.scrollerLeft = s = r - g, this.scrollerWidth = a = a = o + 2 * g, i = Jt(i, p.translate(t)), n = Jt(n, p.translate(e)), Qt(i) && ft(i) !== 1 / 0 || (i = 0, n = a), p.translate(n, !0) - p.translate(i, !0) < l.xAxis[0].minRange || (this.zoomedMax = dt(pt(i, n, 0), o), this.zoomedMin = dt(pt(this.fixedWidth ? this.zoomedMax - this.fixedWidth : dt(i, n), 0), o), this.range = this.zoomedMax - this.zoomedMin, i = ct(this.zoomedMax), e = ct(this.zoomedMin), t = i - e, P || (k && (this.navigatorGroup = p = h.g("navigator").attr({
				zIndex: 3
			}).add(), this.leftShade = h.rect().attr({
				fill: v.maskFill
			}).add(p), v.maskInside ? this.leftShade.css({
				cursor: "ew-resize"
			}) : this.rightShade = h.rect().attr({
				fill: v.maskFill
			}).add(p), this.outline = h.path().attr({
				"stroke-width": A,
				stroke: v.outlineColor
			}).add(p)), m && (this.scrollbarGroup = u = h.g("scrollbar").add(), d = y.trackBorderWidth, this.scrollbarTrack = f = h.rect().attr({
				x: 0,
				y: -d % 2 / 2,
				fill: y.trackBackgroundColor,
				stroke: y.trackBorderColor,
				"stroke-width": d,
				r: y.trackBorderRadius || 0,
				height: g
			}).add(u), this.scrollbar = d = h.rect().attr({
				y: -M % 2 / 2,
				height: g,
				fill: y.barBackgroundColor,
				stroke: y.barBorderColor,
				"stroke-width": M,
				r: _
			}).add(u), this.scrollbarRifles = h.path().attr({
				stroke: y.rifleColor,
				"stroke-width": 1
			}).add(u))), h = P ? "animate" : "attr", k && (this.leftShade[h](v.maskInside ? {
				x: r + e,
				y: w,
				width: i - e,
				height: x
			} : {
				x: r,
				y: w,
				width: e,
				height: x
			}), this.rightShade && this.rightShade[h]({
				x: r + i,
				y: w,
				width: o - i,
				height: x
			}), this.outline[h]({
				d: ["M", s, L, "L", r + e - S, L, r + e - S, L + T, "L", r + i - S, L + T, "L", r + i - S, L, s + a, L].concat(v.maskInside ? ["M", r + e + S, L, "L", r + i - S, L] : [])
			}), this.drawHandle(e + S, 0), this.drawHandle(i + S, 1)), m && u && (this.drawScrollbarButton(0), this.drawScrollbarButton(1), u[h]({
				translateX: s,
				translateY: ct(L + x)
			}), f[h]({
				width: a
			}), r = g + e, o = t - M, b > o && (C = (b - o) / 2, o = b, r -= C), this.scrollbarPad = C, d[h]({
				x: ht(r) + M % 2 / 2,
				width: o
			}), b = g + e + t / 2 - .5, this.scrollbarRifles.attr({
				visibility: t > 12 ? "visible" : "hidden"
			})[h]({
				d: ["M", b - 3, g / 4, "L", b - 3, 2 * g / 3, "M", b, g / 4, "L", b, 2 * g / 3, "M", b + 3, g / 4, "L", b + 3, 2 * g / 3]
			})), this.scrollbarPad = C, this.rendered = !0))
		},
		addEvents: function() {
			var t, e = this.chart,
				i = e.container,
				n = this.mouseDownHandler,
				r = this.mouseMoveHandler,
				o = this.mouseUpHandler;
			t = [
				[i, "mousedown", n],
				[i, "mousemove", r],
				[at, "mouseup", o]
			], z && t.push([i, "touchstart", n], [i, "touchmove", r], [at, "touchend", o]), Wt(t, function(t) {
				Yt.apply(null, t)
			}), this._events = t, this.series && Yt(this.series.xAxis, "foundExtremes", function() {
				e.scroller.modifyNavigatorAxisExtremes()
			}), Yt(e, "redraw", function() {
				var t, e = this.scroller;
				e && (t = e.baseSeries.xAxis) && e.render(t.min, t.max)
			})
		},
		removeEvents: function() {
			Wt(this._events, function(t) {
				Gt.apply(null, t)
			}), this._events = B, this.navigatorEnabled && this.baseSeries && Gt(this.baseSeries, "updatedData", this.updatedDataHandler)
		},
		init: function() {
			var t, e, i, r = this,
				o = r.chart,
				s = r.scrollbarHeight,
				a = r.navigatorOptions,
				l = r.height,
				h = r.top,
				u = r.baseSeries;
			r.mouseDownHandler = function(e) {
				var n, e = o.pointer.normalize(e),
					s = r.zoomedMin,
					a = r.zoomedMax,
					c = r.top,
					h = r.scrollbarHeight,
					u = r.scrollerLeft,
					p = r.scrollerWidth,
					d = r.navigatorLeft,
					f = r.navigatorWidth,
					g = r.scrollbarPad,
					m = r.range,
					v = e.chartX,
					y = e.chartY,
					e = o.xAxis[0],
					b = Ct ? 10 : 7;
				y > c && c + l + h > y && ((c = !r.scrollbarEnabled || c + l > y) && lt.abs(v - s - d) < b ? (r.grabbedLeft = !0, r.otherHandlePos = a, r.fixedExtreme = e.max, o.fixedRange = null) : c && lt.abs(v - a - d) < b ? (r.grabbedRight = !0, r.otherHandlePos = s, r.fixedExtreme = e.min, o.fixedRange = null) : v > d + s - g && d + a + g > v ? (r.grabbedCenter = v, r.fixedWidth = m, i = v - s) : v > u && u + p > v && (a = c ? v - d - m / 2 : d > v ? s - .2 * m : v > u + p - h ? s + .2 * m : d + s > v ? s - m : a, 0 > a ? a = 0 : a + m >= f && (a = f - m, n = r.getUnionExtremes().dataMax), a !== s && (r.fixedWidth = m, s = t.toFixedRange(a, a + m, null, n), e.setExtremes(s.min, s.max, !0, !1, {
					trigger: "navigator"
				}))))
			}, r.mouseMoveHandler = function(t) {
				var e, n, s = r.scrollbarHeight,
					a = r.navigatorLeft,
					l = r.navigatorWidth,
					c = r.scrollerLeft,
					h = r.scrollerWidth,
					u = r.range;
				t.touches && 0 === t.touches[0].pageX || (t = o.pointer.normalize(t), e = t.chartX, a > e ? e = a : e > c + h - s && (e = c + h - s), r.grabbedLeft ? (n = !0, r.render(0, 0, e - a, r.otherHandlePos)) : r.grabbedRight ? (n = !0, r.render(0, 0, r.otherHandlePos, e - a)) : r.grabbedCenter && (n = !0, i > e ? e = i : e > l + i - u && (e = l + i - u), r.render(0, 0, e - i, e - i + u)), n && r.scrollbarOptions.liveRedraw && setTimeout(function() {
					r.mouseUpHandler(t)
				}, 0), r.hasDragged = n)
			}, r.mouseUpHandler = function(e) {
				var n, s;
				r.hasDragged && (r.zoomedMin === r.otherHandlePos ? n = r.fixedExtreme : r.zoomedMax === r.otherHandlePos && (s = r.fixedExtreme), r.zoomedMax === r.navigatorWidth && (s = r.getUnionExtremes().dataMax), n = t.toFixedRange(r.zoomedMin, r.zoomedMax, n, s), c(n.min) && o.xAxis[0].setExtremes(n.min, n.max, !0, !1, {
					trigger: "navigator",
					triggerOp: "navigator-drag",
					DOMEvent: e
				})), "mousemove" !== e.type && (r.grabbedLeft = r.grabbedRight = r.grabbedCenter = r.fixedWidth = r.fixedExtreme = r.otherHandlePos = r.hasDragged = i = null)
			};
			var p = o.xAxis.length,
				d = o.yAxis.length;
			o.extraBottomMargin = r.outlineHeight + a.margin, r.navigatorEnabled ? (r.xAxis = t = new ae(o, n({
				breaks: u && u.xAxis.options.breaks,
				ordinal: u && u.xAxis.options.ordinal
			}, a.xAxis, {
				id: "navigator-x-axis",
				isX: !0,
				type: "datetime",
				index: p,
				height: l,
				offset: 0,
				offsetLeft: s,
				offsetRight: -s,
				keepOrdinalPadding: !0,
				startOnTick: !1,
				endOnTick: !1,
				minPadding: 0,
				maxPadding: 0,
				zoomEnabled: !1
			})), r.yAxis = e = new ae(o, n(a.yAxis, {
				id: "navigator-y-axis",
				alignTicks: !1,
				height: l,
				offset: 0,
				index: d,
				zoomEnabled: !1
			})), u || a.series.data ? r.addBaseSeries() : 0 === o.series.length && te(o, "redraw", function(t, e) {
				o.series.length > 0 && !r.series && (r.setBaseSeries(), o.redraw = t), t.call(o, e)
			})) : r.xAxis = t = {
				translate: function(t, e) {
					var i = o.xAxis[0],
						n = i.getExtremes(),
						r = o.plotWidth - 2 * s,
						a = De("min", i.options.min, n.dataMin),
						i = De("max", i.options.max, n.dataMax) - a;
					return e ? t * i / r + a : r * (t - a) / i
				},
				toFixedRange: ae.prototype.toFixedRange
			}, u && u.xAxis && this.navigatorOptions.adaptToUpdatedData !== !1 && (Yt(u, "updatedData", this.updatedDataHandler), Yt(u.xAxis, "foundExtremes", function() {
				u.xAxis && this.chart.scroller.modifyBaseAxisExtremes()
			}), u.userOptions.events = Kt(u.userOptions.event, {
				updatedData: this.updatedDataHandler
			})), te(o, "getMargins", function(i) {
				var n = this.legend,
					o = n.options;
				i.apply(this, [].slice.call(arguments, 1)), r.top = h = r.navigatorOptions.top || this.chartHeight - r.height - r.scrollbarHeight - this.spacing[2] - ("bottom" === o.verticalAlign && o.enabled && !o.floating ? n.legendHeight + Jt(o.margin, 10) : 0), t && e && (t.options.top = e.options.top = h, t.setAxisSize(), e.setAxisSize())
			}), r.addEvents()
		},
		getUnionExtremes: function(t) {
			var e, i = this.chart.xAxis[0],
				n = this.xAxis,
				r = n.options,
				o = i.options;
			return t && null === i.dataMin || (e = {
				dataMin: Jt(r && r.min, De("min", o.min, i.dataMin, n.dataMin, n.min)),
				dataMax: Jt(r && r.max, De("max", o.max, i.dataMax, n.dataMax, n.max))
			}), e
		},
		setBaseSeries: function(t) {
			var e = this.chart,
				t = t || e.options.navigator.baseSeries;
			this.series && this.series.remove(), this.baseSeries = e.series[t] || "string" == typeof t && e.get(t) || e.series[0], this.xAxis && this.addBaseSeries()
		},
		addBaseSeries: function() {
			var t, e = this.baseSeries,
				i = e ? e.options : {},
				e = i.data,
				r = this.navigatorOptions.series;
			t = r.data, this.hasNavigatorData = !! t, i = n(i, r, {
				enableMouseTracking: !1,
				group: "nav",
				padXAxis: !1,
				xAxis: "navigator-x-axis",
				yAxis: "navigator-y-axis",
				name: "Navigator",
				showInLegend: !1,
				stacking: !1,
				isInternal: !0,
				visible: !0
			}), i.data = t || e.slice(0), this.series = this.chart.initSeries(i)
		},
		modifyNavigatorAxisExtremes: function() {
			var t, e = this.xAxis;
			e.getExtremes && (t = this.getUnionExtremes(!0)) && (t.dataMin !== e.min || t.dataMax !== e.max) && (e.min = t.dataMin, e.max = t.dataMax)
		},
		modifyBaseAxisExtremes: function() {
			var t, e, i = this.baseSeries.xAxis,
				n = i.getExtremes(),
				r = n.dataMin,
				o = n.dataMax,
				n = n.max - n.min,
				s = this.stickToMin,
				a = this.stickToMax,
				l = this.series,
				c = !! i.setExtremes;
			s && (e = r, t = e + n), a && (t = o, s || (e = pt(t - n, l ? l.xData[0] : -Number.MAX_VALUE))), c && (s || a) && Qt(e) && (i.min = i.userMin = e, i.max = i.userMax = t), this.stickToMin = this.stickToMax = null
		},
		updatedDataHandler: function() {
			var t = this.chart.scroller,
				e = t.baseSeries,
				i = t.series;
			t.stickToMin = e.xAxis.min <= e.xData[0], t.stickToMax = t.zoomedMax >= t.navigatorWidth, i && !t.hasNavigatorData && (i.options.pointStart = e.xData[0], i.setData(e.options.data, !1), i.graph && e.graph) && (i.graph.shift = e.graph.shift)
		},
		destroy: function() {
			this.removeEvents(), Wt([this.xAxis, this.yAxis, this.leftShade, this.rightShade, this.outline, this.scrollbarTrack, this.scrollbarRifles, this.scrollbarGroup, this.scrollbar], function(t) {
				t && t.destroy && t.destroy()
			}), this.xAxis = this.yAxis = this.leftShade = this.rightShade = this.outline = this.scrollbarTrack = this.scrollbarRifles = this.scrollbarGroup = this.scrollbar = null, Wt([this.scrollbarButtons, this.handles, this.elementsToDestroy], function(t) {
				S(t)
			})
		}
	}, st.Scroller = N, te(ae.prototype, "zoom", function(t, e, i) {
		var n, r = this.chart,
			o = r.options,
			s = o.chart.zoomType,
			a = o.navigator,
			o = o.rangeSelector;
		return this.isXAxis && (a && a.enabled || o && o.enabled) && ("x" === s ? r.resetZoomButton = "blocked" : "y" === s ? n = !1 : "xy" === s && (r = this.previousZoom, c(e) ? this.previousZoom = [this.min, this.max] : r && (e = r[0], i = r[1], delete this.previousZoom))), n !== B ? n : t.call(this, e, i)
	}), te(me.prototype, "init", function(t, e, i) {
		Yt(this, "beforeRender", function() {
			var t = this.options;
			(t.navigator.enabled || t.scrollbar.enabled) && (this.scroller = new N(this))
		}), t.call(this, e, i)
	}), te(be.prototype, "addPoint", function(t, i, n, r, o) {
		var l = this.options.turboThreshold;
		l && this.xData.length > l && s(i) && !a(i) && this.chart.scroller && e(20, !0), t.call(this, i, n, r, o)
	}), Kt(H, {
		rangeSelector: {
			buttonTheme: {
				width: 28,
				height: 18,
				fill: "#f7f7f7",
				padding: 2,
				r: 0,
				"stroke-width": 0,
				style: {
					color: "#444",
					cursor: "pointer",
					fontWeight: "normal"
				},
				zIndex: 7,
				states: {
					hover: {
						fill: "#e7e7e7"
					},
					select: {
						fill: "#e7f0f9",
						style: {
							color: "black",
							fontWeight: "bold"
						}
					}
				}
			},
			height: 35,
			inputPosition: {
				align: "right"
			},
			labelStyle: {
				color: "#666"
			}
		}
	}), H.lang = n(H.lang, {
		rangeSelectorZoom: "Zoom",
		rangeSelectorFrom: "From",
		rangeSelectorTo: "To"
	}), O.prototype = {
		clickButton: function(t, e) {
			var i, n, r, o, s, a = this,
				l = a.selected,
				c = a.chart,
				h = a.buttons,
				u = a.buttonOptions[t],
				p = c.xAxis[0],
				d = c.scroller && c.scroller.getUnionExtremes() || p || {},
				f = d.dataMin,
				g = d.dataMax,
				m = p && ct(dt(p.max, Jt(g, p.max))),
				v = u.type,
				d = u._range,
				y = u.dataGrouping;
			if (null !== f && null !== g && t !== a.selected) {
				if (c.fixedRange = d, y && (this.forcedDataGrouping = !0, ae.prototype.setDataGrouping.call(p || {
					chart: this.chart
				}, y, !1)), "month" === v || "year" === v) p ? (v = {
					range: u,
					max: m,
					dataMin: f,
					dataMax: g
				}, i = p.minFromRange.call(v), Qt(v.newMax) && (m = v.newMax)) : d = u;
				else if (d) i = pt(m - d, f), m = dt(i + d, g);
				else if ("ytd" === v) {
					if (!p) return void Yt(c, "beforeRender", function() {
						a.clickButton(t)
					});
					g === B && (f = Number.MAX_VALUE, g = Number.MIN_VALUE, Wt(c.series, function(t) {
						t = t.xData, f = dt(t[0], f), g = pt(t[t.length - 1], g)
					}), e = !1), m = new X(g), i = m.getFullYear(), i = r = pt(f || 0, X.UTC(i, 0, 1)), m = m.getTime(), m = dt(g || m, m)
				} else "all" === v && p && (i = f, m = g);
				h[l] && h[l].setState(0), h[t] && (h[t].setState(2), a.lastSelected = t), p ? (p.setExtremes(i, m, Jt(e, 1), 0, {
					trigger: "rangeSelectorButton",
					rangeSelectorButton: u
				}), a.setSelected(t)) : (n = c.options.xAxis[0], s = n.range, n.range = d, o = n.min, n.min = r, a.setSelected(t), Yt(c, "load", function() {
					n.range = s, n.min = o
				}))
			}
		},
		setSelected: function(t) {
			this.selected = this.options.selected = t
		},
		defaultButtons: [{
			type: "month",
			count: 1,
			text: "1m"
		}, {
			type: "month",
			count: 3,
			text: "3m"
		}, {
			type: "month",
			count: 6,
			text: "6m"
		}, {
			type: "ytd",
			text: "YTD"
		}, {
			type: "year",
			count: 1,
			text: "1y"
		}, {
			type: "all",
			text: "All"
		}],
		init: function(t) {
			var e = this,
				i = t.options.rangeSelector,
				n = i.buttons || [].concat(e.defaultButtons),
				r = i.selected,
				o = e.blurInputs = function() {
					var t = e.minInput,
						i = e.maxInput;
					t && t.blur && Ut(t, "blur"), i && i.blur && Ut(i, "blur")
				};
			e.chart = t, e.options = i, e.buttons = [], t.extraTopMargin = i.height, e.buttonOptions = n, Yt(t.container, "mousedown", o), Yt(t, "resize", o), Wt(n, e.computeButtonRange), r !== B && n[r] && this.clickButton(r, !1), Yt(t, "load", function() {
				Yt(t.xAxis[0], "setExtremes", function(i) {
					this.max - this.min !== t.fixedRange && "rangeSelectorButton" !== i.trigger && "updatedData" !== i.trigger && e.forcedDataGrouping && this.setDataGrouping(!1, !1)
				}), Yt(t.xAxis[0], "afterSetExtremes", function() {
					e.updateButtonStates(!0)
				})
			})
		},
		updateButtonStates: function(t) {
			var e = this,
				i = this.chart,
				n = i.xAxis[0],
				r = i.scroller && i.scroller.getUnionExtremes() || n,
				o = r.dataMin,
				s = r.dataMax,
				a = e.selected,
				l = e.options.allButtonsEnabled,
				c = e.buttons;
			t && i.fixedRange !== ct(n.max - n.min) && (c[a] && c[a].setState(0), e.setSelected(null)), Wt(e.buttonOptions, function(t, r) {
				var h = ct(n.max - n.min),
					u = t._range,
					p = t.type,
					d = t.count || 1,
					f = u > s - o,
					g = u < n.minRange,
					m = "all" === t.type && n.max - n.min >= s - o && 2 !== c[r].state,
					v = "ytd" === t.type && W("%Y", o) === W("%Y", s),
					y = i.renderer.forExport && r === a,
					u = u === h,
					b = !n.hasVisibleSeries;
				("month" === p || "year" === p) && h >= 864e5 * {
					month: 28,
					year: 365
				}[p] * d && h <= 864e5 * {
					month: 31,
					year: 366
				}[p] * d && (u = !0), y || u && r !== a && r === e.lastSelected ? (e.setSelected(r), c[r].setState(2)) : !l && (f || g || m || v || b) ? c[r].setState(3) : 3 === c[r].state && c[r].setState(0)
			})
		},
		computeButtonRange: function(t) {
			var e = t.type,
				i = t.count || 1,
				n = {
					millisecond: 1,
					second: 1e3,
					minute: 6e4,
					hour: 36e5,
					day: 864e5,
					week: 6048e5
				};
			n[e] ? t._range = n[e] * i : "month" !== e && "year" !== e || (t._range = 864e5 * {
				month: 30,
				year: 365
			}[e] * i)
		},
		setInputValue: function(t, e) {
			var i = this.chart.options.rangeSelector;
			c(e) && (this[t + "Input"].HCTime = e), this[t + "Input"].value = W(i.inputEditDateFormat || "%Y-%m-%d", this[t + "Input"].HCTime), this[t + "DateBox"].attr({
				text: W(i.inputDateFormat || "%b %e, %Y", this[t + "Input"].HCTime)
			})
		},
		showInput: function(t) {
			var e = this.inputGroup,
				i = this[t + "DateBox"];
			d(this[t + "Input"], {
				left: e.translateX + i.x + "px",
				top: e.translateY + "px",
				width: i.width - 2 + "px",
				height: i.height - 2 + "px",
				border: "1px solid #5F6061"
			})
		},
		hideInput: function(t) {
			d(this[t + "Input"], {
				border: 0,
				width: "1px",
				height: "1px"
			}), this.setInputValue(t)
		},
		drawInput: function(t) {
			function e() {
				var t = i.value,
					e = (h.inputDateParser || X.parse)(t),
					n = a.xAxis[0],
					o = n.dataMin,
					l = n.dataMax;
				e !== i.previousValue && (i.previousValue = e, Qt(e) || (e = t.split("-"), e = X.UTC(r(e[0]), r(e[1]) - 1, r(e[2]))), Qt(e) && (H.global.useUTC || (e += 6e4 * (new X).getTimezoneOffset()), p ? e > s.maxInput.HCTime ? e = B : o > e && (e = o) : e < s.minInput.HCTime ? e = B : e > l && (e = l), e !== B && a.xAxis[0].setExtremes(p ? e : n.min, p ? n.max : e, B, B, {
					trigger: "rangeSelectorInput"
				})))
			}
			var i, o, s = this,
				a = s.chart,
				l = a.renderer.style,
				c = a.renderer,
				h = a.options.rangeSelector,
				u = s.div,
				p = "min" === t,
				d = this.inputGroup;
			this[t + "Label"] = o = c.label(H.lang[p ? "rangeSelectorFrom" : "rangeSelectorTo"], this.inputGroup.offset).attr({
				padding: 2
			}).css(n(l, h.labelStyle)).add(d), d.offset += o.width + 5, this[t + "DateBox"] = c = c.label("", d.offset).attr({
				padding: 2,
				width: h.inputBoxWidth || 90,
				height: h.inputBoxHeight || 17,
				stroke: h.inputBoxBorderColor || "#5F6061",
				"stroke-width": 1
			}).css(n({
				textAlign: "center",
				color: "#444"
			}, l, h.inputStyle)).on("click", function() {
				s.showInput(t), s[t + "Input"].focus()
			}).add(d), d.offset += c.width + (p ? 10 : 0), this[t + "Input"] = i = f("input", {
				name: t,
				className: "highcharts-range-selector",
				type: "text"
			}, Kt({
				position: "absolute",
				border: 0,
				width: "1px",
				height: "1px",
				padding: 0,
				textAlign: "center",
				fontSize: l.fontSize,
				fontFamily: l.fontFamily,
				left: "-9em",
				top: a.plotTop + "px"
			}, h.inputStyle), u), i.onfocus = function() {
				s.showInput(t)
			}, i.onblur = function() {
				s.hideInput(t)
			}, i.onchange = e, i.onkeypress = function(t) {
				13 === t.keyCode && e()
			}
		},
		getPosition: function() {
			var t = this.chart,
				e = t.options.rangeSelector,
				t = Jt((e.buttonPosition || {}).y, t.plotTop - t.axisOffset[0] - e.height);
			return {
				buttonTop: t,
				inputTop: t - 10
			}
		},
		render: function(t, e) {
			var i, n = this,
				r = n.chart,
				o = r.renderer,
				s = r.container,
				a = r.options,
				l = a.exporting && a.exporting.enabled !== !1 && a.navigation && a.navigation.buttonOptions,
				h = a.rangeSelector,
				u = n.buttons,
				a = H.lang,
				p = n.div,
				p = n.inputGroup,
				d = h.buttonTheme,
				g = h.buttonPosition || {},
				m = h.inputEnabled,
				v = d && d.states,
				y = r.plotLeft,
				b = this.getPosition(),
				x = n.group,
				w = n.rendered;
			w || (n.group = x = o.g("range-selector-buttons").add(), n.zoomText = o.text(a.rangeSelectorZoom, Jt(g.x, y), 15).css(h.labelStyle).add(x), i = Jt(g.x, y) + n.zoomText.getBBox().width + 5, Wt(n.buttonOptions, function(t, e) {
				u[e] = o.button(t.text, i, 0, function() {
					n.clickButton(e), n.isActive = !0
				}, d, v && v.hover, v && v.select, v && v.disabled).css({
					textAlign: "center"
				}).add(x), i += u[e].width + Jt(h.buttonSpacing, 5), n.selected === e && u[e].setState(2)
			}), n.updateButtonStates(), m === !1) || (n.div = p = f("div", null, {
				position: "relative",
				height: 0,
				zIndex: 1
			}), s.parentNode.insertBefore(p, s), n.inputGroup = p = o.g("input-group").add(), p.offset = 0, n.drawInput("min"), n.drawInput("max")), x[w ? "animate" : "attr"]({
				translateY: b.buttonTop
			}), m !== !1 && (p.align(Kt({
				y: b.inputTop,
				width: p.offset,
				x: l && b.inputTop < (l.y || 0) + l.height - r.spacing[0] ? -40 : 0
			}, h.inputPosition), !0, r.spacingBox), c(m) || (r = x.getBBox(), p[p.translateX < r.x + r.width + 10 ? "hide" : "show"]()), n.setInputValue("min", t), n.setInputValue("max", e)), n.rendered = !0
		},
		destroy: function() {
			var t, e = this.minInput,
				i = this.maxInput,
				n = this.chart,
				r = this.blurInputs;
			Gt(n.container, "mousedown", r), Gt(n, "resize", r), S(this.buttons), e && (e.onfocus = e.onblur = e.onchange = null), i && (i.onfocus = i.onblur = i.onchange = null);
			for (t in this) this[t] && "chart" !== t && (this[t].destroy ? this[t].destroy() : this[t].nodeType && C(this[t])), this[t] = null
		}
	}, ae.prototype.toFixedRange = function(t, e, i, n) {
		var r = this.chart && this.chart.fixedRange,
			t = Jt(i, this.translate(t, !0)),
			e = Jt(n, this.translate(e, !0)),
			i = r && (e - t) / r;
		return i > .7 && 1.3 > i && (n ? t = e - r : e = t + r), Qt(t) || (t = e = void 0), {
			min: t,
			max: e
		}
	}, ae.prototype.minFromRange = function() {
		var t, e, i, n = this.range,
			r = {
				month: "Month",
				year: "FullYear"
			}[n.type],
			o = this.max,
			s = function(t, e) {
				var i = new X(t);
				return i["set" + r](i["get" + r]() + e), i.getTime() - t
			};
		return Qt(n) ? (t = this.max - n, i = n) : t = o + s(o, -n.count), e = Jt(this.dataMin, Number.MIN_VALUE), Qt(t) || (t = e), e >= t && (t = e, void 0 === i && (i = s(t, n.count)), this.newMax = dt(t + i, this.dataMax)), Qt(o) || (t = void 0), t
	}, te(me.prototype, "init", function(t, e, i) {
		Yt(this, "init", function() {
			this.options.rangeSelector.enabled && (this.rangeSelector = new O(this))
		}), t.call(this, e, i)
	}), st.RangeSelector = O, me.prototype.callbacks.push(function(t) {
		function e() {
			n = t.xAxis[0].getExtremes(), Qt(n.min) && o.render(n.min, n.max)
		}
		function i(t) {
			o.render(t.min, t.max)
		}
		var n, r = t.scroller,
			o = t.rangeSelector;
		r && (n = t.xAxis[0].getExtremes(), r.render(n.min, n.max)), o && (Yt(t.xAxis[0], "afterSetExtremes", i), Yt(t, "resize", e), e()), Yt(t, "destroy", function() {
			o && (Gt(t, "resize", e), Gt(t.xAxis[0], "afterSetExtremes", i))
		})
	}), st.StockChart = st.stockChart = function(t, e, i) {
		var r, s = o(t) || t.nodeName,
			a = arguments[s ? 1 : 0],
			l = a.series,
			c = Jt(a.navigator && a.navigator.enabled, !0) ? {
				startOnTick: !1,
				endOnTick: !1
			} : null,
			h = {
				marker: {
					enabled: !1,
					radius: 2
				}
			},
			p = {
				shadow: !1,
				borderWidth: 0
			};
		return a.xAxis = $t(u(a.xAxis || {}), function(t) {
			return n({
				minPadding: 0,
				maxPadding: 0,
				ordinal: !0,
				title: {
					text: null
				},
				labels: {
					overflow: "justify"
				},
				showLastLabel: !0
			}, t, {
				type: "datetime",
				categories: null
			}, c)
		}), a.yAxis = $t(u(a.yAxis || {}), function(t) {
			return r = Jt(t.opposite, !0), n({
				labels: {
					y: -2
				},
				opposite: r,
				showLastLabel: !1,
				title: {
					text: null
				}
			}, t)
		}), a.series = null, a = n({
			chart: {
				panning: !0,
				pinchType: "x"
			},
			navigator: {
				enabled: !0
			},
			scrollbar: {
				enabled: !0
			},
			rangeSelector: {
				enabled: !0
			},
			title: {
				text: null,
				style: {
					fontSize: "16px"
				}
			},
			tooltip: {
				shared: !0,
				crosshairs: !0
			},
			legend: {
				enabled: !1
			},
			plotOptions: {
				line: h,
				spline: h,
				area: h,
				areaspline: h,
				arearange: h,
				areasplinerange: h,
				column: p,
				columnrange: p,
				candlestick: p,
				ohlc: p
			}
		}, a, {
			_stock: !0,
			chart: {
				inverted: !1
			}
		}), a.series = l, s ? new me(t, a, i) : new me(a, e)
	}, te(he.prototype, "init", function(t, e, i) {
		var n = i.chart.pinchType || "";
		t.call(this, e, i), this.pinchX = this.pinchHor = -1 !== n.indexOf("x"), this.pinchY = this.pinchVert = -1 !== n.indexOf("y"), this.hasZoom = this.hasZoom || this.pinchHor || this.pinchVert
	}), te(ae.prototype, "autoLabelAlign", function(t) {
		var e = this.chart,
			i = this.options,
			e = e._labelPanes = e._labelPanes || {},
			n = this.options.labels;
		return this.chart.options._stock && "yAxis" === this.coll && (i = i.top + "," + i.height, !e[i] && n.enabled) ? (15 === n.x && (n.x = 0), void 0 === n.align && (n.align = "right"), e[i] = 1, "right") : t.call(this, [].slice.call(arguments, 1))
	}), te(ae.prototype, "getPlotLinePath", function(t, e, i, n, r, o) {
		var s, a, l, h, u, p, d = this,
			f = this.isLinked && !this.series ? this.linkedParent.series : this.series,
			g = d.chart,
			m = g.renderer,
			v = d.left,
			y = d.top,
			b = [],
			x = [];
		return "colorAxis" === d.coll ? t.apply(this, [].slice.call(arguments, 1)) : (x = d.isXAxis ? c(d.options.yAxis) ? [g.yAxis[d.options.yAxis]] : $t(f, function(t) {
			return t.yAxis
		}) : c(d.options.xAxis) ? [g.xAxis[d.options.xAxis]] : $t(f, function(t) {
			return t.xAxis
		}), Wt(d.isXAxis ? g.yAxis : g.xAxis, function(t) {
			if (c(t.options.id) ? -1 === t.options.id.indexOf("navigator") : 1) {
				var e = t.isXAxis ? "yAxis" : "xAxis",
					e = c(t.options[e]) ? g[e][t.options[e]] : g[e][0];
				d === e && x.push(t)
			}
		}), u = x.length ? [] : [d.isXAxis ? g.yAxis[0] : g.xAxis[0]], Wt(x, function(t) {
			-1 === Ht(t, u) && u.push(t)
		}), p = Jt(o, d.translate(e, null, null, n)), Qt(p) && (d.horiz ? Wt(u, function(t) {
			var e;
			a = t.pos, h = a + t.len, s = l = ct(p + d.transB), (v > s || s > v + d.width) && (r ? s = l = dt(pt(v, s), v + d.width) : e = !0), e || b.push("M", s, a, "L", l, h)
		}) : Wt(u, function(t) {
			var e;
			s = t.pos, l = s + t.len, a = h = ct(y + d.height - p), (y > a || a > y + d.height) && (r ? a = h = dt(pt(y, a), d.top + d.height) : e = !0), e || b.push("M", s, a, "L", l, h)
		})), b.length > 0 ? m.crispPolyLine(b, i || 1) : null)
	}), ae.prototype.getPlotBandPath = function(t, e) {
		var i, n = this.getPlotLinePath(e, null, null, !0),
			r = this.getPlotLinePath(t, null, null, !0),
			o = [];
		if (r && n && r.toString() !== n.toString()) for (i = 0; i < r.length; i += 6) o.push("M", r[i + 1], r[i + 2], "L", r[i + 4], r[i + 5], n[i + 4], n[i + 5], n[i + 1], n[i + 2]);
		else o = null;
		return o
	}, ne.prototype.crispPolyLine = function(t, e) {
		var i;
		for (i = 0; i < t.length; i += 6) t[i + 1] === t[i + 4] && (t[i + 1] = t[i + 4] = ct(t[i + 1]) - e % 2 / 2), t[i + 2] === t[i + 5] && (t[i + 2] = t[i + 5] = ct(t[i + 2]) + e % 2 / 2);
		return t
	}, R === st.VMLRenderer && (re.prototype.crispPolyLine = ne.prototype.crispPolyLine), te(ae.prototype, "hideCrosshair", function(t, e) {
		t.call(this, e), this.crossLabel && (this.crossLabel = this.crossLabel.hide())
	}), te(ae.prototype, "drawCrosshair", function(t, e, i) {
		var n, r;
		if (t.call(this, e, i), c(this.crosshair.label) && this.crosshair.label.enabled) {
			var o, t = this.chart,
				s = this.options.crosshair.label,
				a = this.horiz,
				l = this.opposite,
				h = this.left,
				u = this.top,
				p = this.crossLabel,
				d = s.format,
				f = "",
				g = "inside" === this.options.tickPosition,
				m = this.crosshair.snap !== !1;
			o = a ? "center" : l ? "right" === this.labelAlign ? "right" : "left" : "left" === this.labelAlign ? "left" : "center", p || (p = this.crossLabel = t.renderer.label(null, null, null, s.shape || "callout").attr({
				align: s.align || o,
				zIndex: 12,
				fill: s.backgroundColor || this.series[0] && this.series[0].color || "gray",
				padding: Jt(s.padding, 8),
				stroke: s.borderColor || "",
				"stroke-width": s.borderWidth || 0,
				r: Jt(s.borderRadius, 3)
			}).css(Kt({
				color: "white",
				fontWeight: "normal",
				fontSize: "11px",
				textAlign: "center"
			}, s.style)).add()), a ? (o = m ? i.plotX + h : e.chartX, u += l ? 0 : this.height) : (o = l ? this.width + h : 0, u = m ? i.plotY + u : e.chartY), !d && !s.formatter && (this.isDatetimeAxis && (f = "%b %d, %Y"), d = "{value" + (f ? ":" + f : "") + "}"), e = m ? i[this.isXAxis ? "x" : "y"] : this.toValue(a ? e.chartX : e.chartY), p.attr({
				text: d ? y(d, {
					value: e
				}) : s.formatter.call(this, e),
				anchorX: a ? o : this.opposite ? 0 : t.chartWidth,
				anchorY: a ? this.opposite ? t.chartHeight : 0 : u,
				x: o,
				y: u,
				visibility: "visible"
			}), e = p.getBBox(), a ? (g && !l || !g && l) && (u = p.y - e.height) : u = p.y - e.height / 2, a ? (n = h - e.x, r = h + this.width - e.x) : (n = "left" === this.labelAlign ? h : 0, r = "right" === this.labelAlign ? h + this.width : t.chartWidth), p.translateX < n && (o += n - p.translateX), p.translateX + e.width >= r && (o -= p.translateX + e.width - r), p.attr({
				x: o,
				y: u,
				visibility: "visible"
			})
		}
	});
	var Ie = Ae.init,
		Ne = Ae.processData,
		Oe = ye.prototype.tooltipFormatter;
	return Ae.init = function() {
		Ie.apply(this, arguments), this.setCompare(this.options.compare)
	}, Ae.setCompare = function(t) {
		this.modifyValue = "value" === t || "percent" === t ?
		function(e, i) {
			var n = this.compareValue;
			return e !== B && (e = "value" === t ? e - n : e = 100 * (e / n) - 100, i) && (i.change = e), e
		} : null, this.chart.hasRendered && (this.isDirty = !0)
	}, Ae.processData = function() {
		var t, e, i, n, r, o = -1;
		if (Ne.apply(this, arguments), this.xAxis && this.processedYData) for (e = this.processedXData, i = this.processedYData, n = i.length, this.pointArrayMap && (o = Ht(this.pointValKey || "y", this.pointArrayMap)), t = 0; n > t; t++) if (r = o > -1 ? i[t][o] : i[t], Qt(r) && e[t] >= this.xAxis.min && 0 !== r) {
			this.compareValue = r;
			break
		}
	}, te(Ae, "getExtremes", function(t) {
		var e;
		t.apply(this, [].slice.call(arguments, 1)), this.modifyValue && (e = [this.modifyValue(this.dataMin), this.modifyValue(this.dataMax)], this.dataMin = k(e), this.dataMax = A(e))
	}), ae.prototype.setCompare = function(t, e) {
		this.isXAxis || (Wt(this.series, function(e) {
			e.setCompare(t)
		}), Jt(e, !0) && this.chart.redraw())
	}, ye.prototype.tooltipFormatter = function(t) {
		return t = t.replace("{point.change}", (this.change > 0 ? "+" : "") + st.numberFormat(this.change, Jt(this.series.tooltipOptions.changeDecimals, 2))), Oe.apply(this, [t])
	}, te(be.prototype, "render", function(t) {
		this.chart.options._stock && this.xAxis && (!this.clipBox && this.animate ? (this.clipBox = n(this.chart.clipBox), this.clipBox.width = this.xAxis.len, this.clipBox.height = this.yAxis.len) : this.chart[this.sharedClipKey] && (Vt(this.chart[this.sharedClipKey]), this.chart[this.sharedClipKey].attr({
			width: this.xAxis.len,
			height: this.yAxis.len
		}))), t.call(this)
	}), Kt(st, {
		Color: P,
		Point: ye,
		Tick: D,
		Renderer: R,
		SVGElement: E,
		SVGRenderer: ne,
		arrayMin: k,
		arrayMax: A,
		charts: It,
		correctFloat: T,
		dateFormat: W,
		error: e,
		format: y,
		pathAnim: void 0,
		getOptions: function() {
			return H
		},
		hasBidiBug: Mt,
		isTouchDevice: Ct,
		setOptions: function(t) {
			return H = n(!0, H, t), L(), H
		},
		addEvent: Yt,
		removeEvent: Gt,
		createElement: f,
		discardElement: C,
		css: d,
		each: Wt,
		map: $t,
		merge: n,
		splat: u,
		stableSort: w,
		extendClass: g,
		pInt: r,
		svg: _t,
		canvas: Lt,
		vml: !_t && !Lt,
		product: "Highstock",
		version: "4.2.5"
	}), st
}), function(t) {
	"object" == typeof module && module.exports ? module.exports = t : t(Highcharts)
}(function(t) {
	function e(t, e, i) {
		this.init(t, e, i)
	}
	var i = t.arrayMin,
		n = t.arrayMax,
		r = t.each,
		o = t.extend,
		s = t.isNumber,
		a = t.merge,
		l = t.map,
		c = t.pick,
		h = t.pInt,
		u = t.correctFloat,
		p = t.getOptions().plotOptions,
		d = t.seriesTypes,
		f = t.extendClass,
		g = t.splat,
		m = t.wrap,
		v = t.Axis,
		y = t.Tick,
		b = t.Point,
		x = t.Pointer,
		w = t.CenteredSeriesMixin,
		k = t.TrackerMixin,
		A = t.Series,
		S = Math,
		C = S.round,
		T = S.floor,
		_ = S.max,
		M = t.Color,
		L = function() {};
	o(e.prototype, {
		init: function(t, e, i) {
			var n = this,
				o = n.defaultOptions;
			n.chart = e, n.options = t = a(o, e.angular ? {
				background: {}
			} : void 0, t), (t = t.background) && r([].concat(g(t)).reverse(), function(t) {
				var e = t.backgroundColor,
					r = i.userOptions,
					t = a(n.defaultBackgroundOptions, t);
				e && (t.backgroundColor = e), t.color = t.backgroundColor, i.options.plotBands.unshift(t), r.plotBands = r.plotBands || [], r.plotBands !== i.options.plotBands && r.plotBands.unshift(t)
			})
		},
		defaultOptions: {
			center: ["50%", "50%"],
			size: "85%",
			startAngle: 0
		},
		defaultBackgroundOptions: {
			shape: "circle",
			borderWidth: 1,
			borderColor: "#5F6061",
			backgroundColor: {
				linearGradient: {
					x1: 0,
					y1: 0,
					x2: 0,
					y2: 1
				},
				stops: [
					[0, "#FFF"],
					[1, "#DDD"]
				]
			},
			from: -Number.MAX_VALUE,
			innerRadius: 0,
			to: Number.MAX_VALUE,
			outerRadius: "105%"
		}
	});
	var P = v.prototype,
		y = y.prototype,
		E = {
			getOffset: L,
			redraw: function() {
				this.isDirty = !1
			},
			render: function() {
				this.isDirty = !1
			},
			setScale: L,
			setCategories: L,
			setTitle: L
		},
		D = {
			isRadial: !0,
			defaultRadialGaugeOptions: {
				labels: {
					align: "center",
					x: 0,
					y: null
				},
				minorGridLineWidth: 0,
				minorTickInterval: "auto",
				minorTickLength: 10,
				minorTickPosition: "inside",
				minorTickWidth: 1,
				tickLength: 10,
				tickPosition: "inside",
				tickWidth: 2,
				title: {
					rotation: 0
				},
				zIndex: 2
			},
			defaultRadialXOptions: {
				gridLineWidth: 1,
				labels: {
					align: null,
					distance: 15,
					x: 0,
					y: null
				},
				maxPadding: 0,
				minPadding: 0,
				showLastLabel: !1,
				tickLength: 0
			},
			defaultRadialYOptions: {
				gridLineInterpolation: "circle",
				labels: {
					align: "right",
					x: -3,
					y: -2
				},
				showLastLabel: !1,
				title: {
					x: 4,
					text: null,
					rotation: 90
				}
			},
			setOptions: function(t) {
				t = this.options = a(this.defaultOptions, this.defaultRadialOptions, t), t.plotBands || (t.plotBands = [])
			},
			getOffset: function() {
				P.getOffset.call(this), this.chart.axisOffset[this.side] = 0, this.center = this.pane.center = w.getCenter.call(this.pane)
			},
			getLinePath: function(t, e) {
				var i = this.center,
					e = c(e, i[2] / 2 - this.offset);
				return this.chart.renderer.symbols.arc(this.left + i[0], this.top + i[1], e, e, {
					start: this.startAngleRad,
					end: this.endAngleRad,
					open: !0,
					innerR: 0
				})
			},
			setAxisTranslation: function() {
				P.setAxisTranslation.call(this), this.center && (this.transA = this.isCircular ? (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1) : this.center[2] / 2 / (this.max - this.min || 1), this.minPixelPadding = this.isXAxis ? this.transA * this.minPointOffset : 0)
			},
			beforeSetTickPositions: function() {
				this.autoConnect && (this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0)
			},
			setAxisSize: function() {
				P.setAxisSize.call(this), this.isRadial && (this.center = this.pane.center = t.CenteredSeriesMixin.getCenter.call(this.pane), this.isCircular && (this.sector = this.endAngleRad - this.startAngleRad), this.len = this.width = this.height = this.center[2] * c(this.sector, 1) / 2)
			},
			getPosition: function(t, e) {
				return this.postTranslate(this.isCircular ? this.translate(t) : 0, c(this.isCircular ? e : this.translate(t), this.center[2] / 2) - this.offset)
			},
			postTranslate: function(t, e) {
				var i = this.chart,
					n = this.center,
					t = this.startAngleRad + t;
				return {
					x: i.plotLeft + n[0] + Math.cos(t) * e,
					y: i.plotTop + n[1] + Math.sin(t) * e
				}
			},
			getPlotBandPath: function(t, e, i) {
				var n, r = this.center,
					o = this.startAngleRad,
					s = r[2] / 2,
					a = [c(i.outerRadius, "100%"), i.innerRadius, c(i.thickness, 10)],
					u = /%$/,
					p = this.isCircular;
				return "polygon" === this.options.gridLineInterpolation ? r = this.getPlotLinePath(t).concat(this.getPlotLinePath(e, !0)) : (t = Math.max(t, this.min), e = Math.min(e, this.max), p || (a[0] = this.translate(t), a[1] = this.translate(e)), a = l(a, function(t) {
					return u.test(t) && (t = h(t, 10) * s / 100), t
				}), "circle" !== i.shape && p ? (t = o + this.translate(t), e = o + this.translate(e)) : (t = -Math.PI / 2, e = 1.5 * Math.PI, n = !0), r = this.chart.renderer.symbols.arc(this.left + r[0], this.top + r[1], a[0], a[0], {
					start: Math.min(t, e),
					end: Math.max(t, e),
					innerR: c(a[1], a[0] - a[2]),
					open: n
				})), r
			},
			getPlotLinePath: function(t, e) {
				var i, n, o, s = this,
					a = s.center,
					l = s.chart,
					c = s.getPosition(t);
				return s.isCircular ? o = ["M", a[0] + l.plotLeft, a[1] + l.plotTop, "L", c.x, c.y] : "circle" === s.options.gridLineInterpolation ? (t = s.translate(t)) && (o = s.getLinePath(0, t)) : (r(l.xAxis, function(t) {
					t.pane === s.pane && (i = t)
				}), o = [], t = s.translate(t), a = i.tickPositions, i.autoConnect && (a = a.concat([a[0]])), e && (a = [].concat(a).reverse()), r(a, function(e, r) {
					n = i.getPosition(e, t), o.push(r ? "L" : "M", n.x, n.y)
				})), o
			},
			getTitlePosition: function() {
				var t = this.center,
					e = this.chart,
					i = this.options.title;
				return {
					x: e.plotLeft + t[0] + (i.x || 0),
					y: e.plotTop + t[1] - {
						high: .5,
						middle: .25,
						low: 0
					}[i.align] * t[2] + (i.y || 0)
				}
			}
		};
	m(P, "init", function(t, i, n) {
		var r, s, l, h = i.angular,
			u = i.polar,
			p = n.isX,
			d = h && p;
		l = i.options;
		var f = n.pane || 0;
		h ? (o(this, d ? E : D), (s = !p) && (this.defaultRadialOptions = this.defaultRadialGaugeOptions)) : u && (o(this, D), this.defaultRadialOptions = (s = p) ? this.defaultRadialXOptions : a(this.defaultYAxisOptions, this.defaultRadialYOptions)), (h || u) && (i.inverted = !1, l.chart.zoomType = null), t.call(this, i, n), d || !h && !u || (t = this.options, i.panes || (i.panes = []), this.pane = (r = i.panes[f] = i.panes[f] || new e(g(l.pane)[f], i, this), i = r), l = i.options, this.startAngleRad = i = (l.startAngle - 90) * Math.PI / 180, this.endAngleRad = l = (c(l.endAngle, l.startAngle + 360) - 90) * Math.PI / 180, this.offset = t.offset || 0, (this.isCircular = s) && void 0 === n.max && l - i === 2 * Math.PI && (this.autoConnect = !0))
	}), m(P, "autoLabelAlign", function(t) {
		return this.isRadial ? void 0 : t.apply(this, [].slice.call(arguments, 1))
	}), m(y, "getPosition", function(t, e, i, n, r) {
		var o = this.axis;
		return o.getPosition ? o.getPosition(i) : t.call(this, e, i, n, r)
	}), m(y, "getLabelPosition", function(t, e, i, n, r, o, s, a, l) {
		var h = this.axis,
			u = o.y,
			p = 20,
			d = o.align,
			f = (h.translate(this.pos) + h.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360;
		return h.isRadial ? (t = h.getPosition(this.pos, h.center[2] / 2 + c(o.distance, -25)), "auto" === o.rotation ? n.attr({
			rotation: f
		}) : null === u && (u = h.chart.renderer.fontMetrics(n.styles.fontSize).b - n.getBBox().height / 2), null === d && (h.isCircular ? (this.label.getBBox().width > h.len * h.tickInterval / (h.max - h.min) && (p = 0), d = f > p && 180 - p > f ? "left" : f > 180 + p && 360 - p > f ? "right" : "center") : d = "center", n.attr({
			align: d
		})), t.x += o.x, t.y += u) : t = t.call(this, e, i, n, r, o, s, a, l), t
	}), m(y, "getMarkPath", function(t, e, i, n, r, o, s) {
		var a = this.axis;
		return a.isRadial ? (t = a.getPosition(this.pos, a.center[2] / 2 + n), e = ["M", e, i, "L", t.x, t.y]) : e = t.call(this, e, i, n, r, o, s), e
	}), p.arearange = a(p.area, {
		lineWidth: 1,
		marker: null,
		threshold: null,
		tooltip: {
			pointFormat: '<span style="color:{series.color}">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'
		},
		trackByArea: !0,
		dataLabels: {
			align: null,
			verticalAlign: null,
			xLow: 0,
			xHigh: 0,
			yLow: 0,
			yHigh: 0
		},
		states: {
			hover: {
				halo: !1
			}
		}
	}), d.arearange = f(d.area, {
		type: "arearange",
		pointArrayMap: ["low", "high"],
		dataLabelCollections: ["dataLabel", "dataLabelUpper"],
		toYData: function(t) {
			return [t.low, t.high]
		},
		pointValKey: "low",
		deferTranslatePolar: !0,
		highToXY: function(t) {
			var e = this.chart,
				i = this.xAxis.postTranslate(t.rectPlotX, this.yAxis.len - t.plotHigh);
			t.plotHighX = i.x - e.plotLeft, t.plotHigh = i.y - e.plotTop
		},
		translate: function() {
			var t = this,
				e = t.yAxis;
			d.area.prototype.translate.apply(t), r(t.points, function(t) {
				var i = t.low,
					n = t.high,
					r = t.plotY;
				null === n || null === i ? t.isNull = !0 : (t.plotLow = r, t.plotHigh = e.translate(n, 0, 1, 0, 1))
			}), this.chart.polar && r(this.points, function(e) {
				t.highToXY(e)
			})
		},
		getGraphPath: function() {
			var t, e, i, n = this.points,
				r = [],
				o = [],
				s = n.length,
				a = A.prototype.getGraphPath;
			i = this.options;
			for (var l = i.step, s = n.length; s--;) t = n[s], !t.isNull && (!n[s + 1] || n[s + 1].isNull) && o.push({
				plotX: t.plotX,
				plotY: t.plotLow
			}), e = {
				plotX: t.plotX,
				plotY: t.plotHigh,
				isNull: t.isNull
			}, o.push(e), r.push(e), !t.isNull && (!n[s - 1] || n[s - 1].isNull) && o.push({
				plotX: t.plotX,
				plotY: t.plotLow
			});
			return n = a.call(this, n), l && (l === !0 && (l = "left"), i.step = {
				left: "right",
				center: "center",
				right: "left"
			}[l]), r = a.call(this, r), o = a.call(this, o), i.step = l, i = [].concat(n, r), !this.chart.polar && "M" === o[0] && (o[0] = "L"), this.areaPath = this.areaPath.concat(n, o), i
		},
		drawDataLabels: function() {
			var t, e, i, n = this.data,
				r = n.length,
				o = [],
				s = A.prototype,
				a = this.options.dataLabels,
				l = a.align,
				c = a.verticalAlign,
				h = a.inside,
				u = this.chart.inverted;
			if (a.enabled || this._hasPointLabels) {
				for (t = r; t--;)(e = n[t]) && (i = h ? e.plotHigh < e.plotLow : e.plotHigh > e.plotLow, e.y = e.high, e._plotY = e.plotY, e.plotY = e.plotHigh, o[t] = e.dataLabel, e.dataLabel = e.dataLabelUpper, e.below = i, u ? l || (a.align = i ? "right" : "left") : c || (a.verticalAlign = i ? "top" : "bottom"), a.x = a.xHigh, a.y = a.yHigh);
				for (s.drawDataLabels && s.drawDataLabels.apply(this, arguments), t = r; t--;)(e = n[t]) && (i = h ? e.plotHigh < e.plotLow : e.plotHigh > e.plotLow, e.dataLabelUpper = e.dataLabel, e.dataLabel = o[t], e.y = e.low, e.plotY = e._plotY, e.below = !i, u ? l || (a.align = i ? "left" : "right") : c || (a.verticalAlign = i ? "bottom" : "top"), a.x = a.xLow, a.y = a.yLow);
				s.drawDataLabels && s.drawDataLabels.apply(this, arguments)
			}
			a.align = l, a.verticalAlign = c
		},
		alignDataLabel: function() {
			d.column.prototype.alignDataLabel.apply(this, arguments)
		},
		setStackedPoints: L,
		getSymbol: L,
		drawPoints: L
	}), p.areasplinerange = a(p.arearange), d.areasplinerange = f(d.arearange, {
		type: "areasplinerange",
		getPointSpline: d.spline.prototype.getPointSpline
	}), function() {
		var t = d.column.prototype;
		p.columnrange = a(p.column, p.arearange, {
			lineWidth: 1,
			pointRange: null
		}), d.columnrange = f(d.arearange, {
			type: "columnrange",
			translate: function() {
				var e, i, n = this,
					o = n.yAxis,
					s = n.xAxis,
					a = s.startAngleRad,
					l = n.chart,
					h = n.xAxis.isRadial;
				t.translate.apply(n), r(n.points, function(t) {
					var r, u, p = t.shapeArgs,
						d = n.options.minPointLength;
					t.plotHigh = i = o.translate(t.high, 0, 1, 0, 1), t.plotLow = t.plotY, u = i, r = c(t.rectPlotY, t.plotY) - i, Math.abs(r) < d ? (d -= r, r += d, u -= d / 2) : 0 > r && (r *= -1, u -= r), h ? (e = t.barX + a, t.shapeType = "path", t.shapeArgs = {
						d: n.polarArc(u + r, u, e, e + t.pointWidth)
					}) : (p.height = r, p.y = u, t.tooltipPos = l.inverted ? [o.len + o.pos - l.plotLeft - u - r / 2, s.len + s.pos - l.plotTop - p.x - p.width / 2, r] : [s.left - l.plotLeft + p.x + p.width / 2, o.pos - l.plotTop + u + r / 2, r])
				})
			},
			directTouch: !0,
			trackerGroups: ["group", "dataLabelsGroup"],
			drawGraph: L,
			crispCol: t.crispCol,
			pointAttrToOptions: t.pointAttrToOptions,
			drawPoints: t.drawPoints,
			drawTracker: t.drawTracker,
			getColumnMetrics: t.getColumnMetrics,
			animate: function() {
				return t.animate.apply(this, arguments)
			},
			polarArc: function() {
				return t.polarArc.apply(this, arguments)
			}
		})
	}(), p.gauge = a(p.line, {
		dataLabels: {
			enabled: !0,
			defer: !1,
			y: 15,
			borderWidth: 1,
			borderColor: "#5F6061",
			borderRadius: 3,
			crop: !1,
			verticalAlign: "top",
			zIndex: 2
		},
		dial: {},
		pivot: {},
		tooltip: {
			headerFormat: ""
		},
		showInLegend: !1
	}), k = {
		type: "gauge",
		pointClass: f(b, {
			setState: function(t) {
				this.state = t
			}
		}),
		angular: !0,
		directTouch: !0,
		drawGraph: L,
		fixedBox: !0,
		forceDL: !0,
		trackerGroups: ["group", "dataLabelsGroup"],
		translate: function() {
			var t = this.yAxis,
				e = this.options,
				i = t.center;
			this.generatePoints(), r(this.points, function(n) {
				var r = a(e.dial, n.dial),
					o = h(c(r.radius, 80)) * i[2] / 200,
					l = h(c(r.baseLength, 70)) * o / 100,
					u = h(c(r.rearLength, 10)) * o / 100,
					p = r.baseWidth || 3,
					d = r.topWidth || 1,
					f = e.overshoot,
					g = t.startAngleRad + t.translate(n.y, null, null, null, !0);
				s(f) ? (f = f / 180 * Math.PI, g = Math.max(t.startAngleRad - f, Math.min(t.endAngleRad + f, g))) : e.wrap === !1 && (g = Math.max(t.startAngleRad, Math.min(t.endAngleRad, g))), g = 180 * g / Math.PI, n.shapeType = "path", n.shapeArgs = {
					d: r.path || ["M", -u, -p / 2, "L", l, -p / 2, o, -d / 2, o, d / 2, l, p / 2, -u, p / 2, "z"],
					translateX: i[0],
					translateY: i[1],
					rotation: g
				}, n.plotX = i[0], n.plotY = i[1]
			})
		},
		drawPoints: function() {
			var t = this,
				e = t.yAxis.center,
				i = t.pivot,
				n = t.options,
				o = n.pivot,
				s = t.chart.renderer;
			r(t.points, function(e) {
				var i = e.graphic,
					r = e.shapeArgs,
					o = r.d,
					l = a(n.dial, e.dial);
				i ? (i.animate(r), r.d = o) : e.graphic = s[e.shapeType](r).attr({
					stroke: l.borderColor || "none",
					"stroke-width": l.borderWidth || 0,
					fill: l.backgroundColor || "black",
					rotation: r.rotation,
					zIndex: 1
				}).add(t.group)
			}), i ? i.animate({
				translateX: e[0],
				translateY: e[1]
			}) : t.pivot = s.circle(0, 0, c(o.radius, 5)).attr({
				"stroke-width": o.borderWidth || 0,
				stroke: o.borderColor || "#5F6061",
				fill: o.backgroundColor || "black",
				zIndex: 2
			}).translate(e[0], e[1]).add(t.group)
		},
		animate: function(t) {
			var e = this;
			t || (r(e.points, function(t) {
				var i = t.graphic;
				i && (i.attr({
					rotation: 180 * e.yAxis.startAngleRad / Math.PI
				}), i.animate({
					rotation: t.shapeArgs.rotation
				}, e.options.animation))
			}), e.animate = null)
		},
		render: function() {
			this.group = this.plotGroup("group", "series", this.visible ? "visible" : "hidden", this.options.zIndex, this.chart.seriesGroup), A.prototype.render.call(this), this.group.clip(this.chart.clipRect)
		},
		setData: function(t, e) {
			A.prototype.setData.call(this, t, !1), this.processData(), this.generatePoints(), c(e, !0) && this.chart.redraw()
		},
		drawTracker: k && k.drawTrackerPoint
	}, d.gauge = f(d.line, k), p.boxplot = a(p.column, {
		fillColor: "#FFFFFF",
		lineWidth: 1,
		medianWidth: 2,
		states: {
			hover: {
				brightness: -.3
			}
		},
		threshold: null,
		tooltip: {
			pointFormat: '<span style="color:{point.color}">●</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'
		},
		whiskerLength: "50%",
		whiskerWidth: 2
	}), d.boxplot = f(d.column, {
		type: "boxplot",
		pointArrayMap: ["low", "q1", "median", "q3", "high"],
		toYData: function(t) {
			return [t.low, t.q1, t.median, t.q3, t.high]
		},
		pointValKey: "high",
		pointAttrToOptions: {
			fill: "fillColor",
			stroke: "color",
			"stroke-width": "lineWidth"
		},
		drawDataLabels: L,
		translate: function() {
			var t = this.yAxis,
				e = this.pointArrayMap;
			d.column.prototype.translate.apply(this), r(this.points, function(i) {
				r(e, function(e) {
					null !== i[e] && (i[e + "Plot"] = t.translate(i[e], 0, 1, 0, 1))
				})
			})
		},
		drawPoints: function() {
			var t, e, i, n, o, s, a, l, h, u, p, d, f, g, m, v, y, b, x, w, k, A, S, _ = this,
				M = _.options,
				L = _.chart.renderer,
				P = _.doQuartiles !== !1,
				E = _.options.whiskerLength;
			r(_.points, function(r) {
				h = r.graphic, k = r.shapeArgs, p = {}, g = {}, v = {}, A = r.color || _.color, void 0 !== r.plotY && (t = r.pointAttr[r.selected ? "selected" : ""], y = k.width, b = T(k.x), x = b + y, w = C(y / 2), e = T(P ? r.q1Plot : r.lowPlot), i = T(P ? r.q3Plot : r.lowPlot), n = T(r.highPlot), o = T(r.lowPlot), p.stroke = r.stemColor || M.stemColor || A, p["stroke-width"] = c(r.stemWidth, M.stemWidth, M.lineWidth), p.dashstyle = r.stemDashStyle || M.stemDashStyle, g.stroke = r.whiskerColor || M.whiskerColor || A, g["stroke-width"] = c(r.whiskerWidth, M.whiskerWidth, M.lineWidth), v.stroke = r.medianColor || M.medianColor || A, v["stroke-width"] = c(r.medianWidth, M.medianWidth, M.lineWidth), a = p["stroke-width"] % 2 / 2, l = b + w + a, u = ["M", l, i, "L", l, n, "M", l, e, "L", l, o], P && (a = t["stroke-width"] % 2 / 2, l = T(l) + a, e = T(e) + a, i = T(i) + a, b += a, x += a, d = ["M", b, i, "L", b, e, "L", x, e, "L", x, i, "L", b, i, "z"]), E && (a = g["stroke-width"] % 2 / 2, n += a, o += a, S = /%$/.test(E) ? w * parseFloat(E) / 100 : E / 2, f = ["M", l - S, n, "L", l + S, n, "M", l - S, o, "L", l + S, o]), a = v["stroke-width"] % 2 / 2, s = C(r.medianPlot) + a, m = ["M", b, s, "L", x, s], h ? (r.stem.animate({
					d: u
				}), E && r.whiskers.animate({
					d: f
				}), P && r.box.animate({
					d: d
				}), r.medianShape.animate({
					d: m
				})) : (r.graphic = h = L.g().add(_.group), r.stem = L.path(u).attr(p).add(h), E && (r.whiskers = L.path(f).attr(g).add(h)), P && (r.box = L.path(d).attr(t).add(h)), r.medianShape = L.path(m).attr(v).add(h)))
			})
		},
		setStackedPoints: L
	}), p.errorbar = a(p.boxplot, {
		color: "#000000",
		grouping: !1,
		linkedTo: ":previous",
		tooltip: {
			pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'
		},
		whiskerWidth: null
	}), d.errorbar = f(d.boxplot, {
		type: "errorbar",
		pointArrayMap: ["low", "high"],
		toYData: function(t) {
			return [t.low, t.high]
		},
		pointValKey: "high",
		doQuartiles: !1,
		drawDataLabels: d.arearange ? d.arearange.prototype.drawDataLabels : L,
		getColumnMetrics: function() {
			return this.linkedParent && this.linkedParent.columnMetrics || d.column.prototype.getColumnMetrics.call(this)
		}
	}), p.waterfall = a(p.column, {
		lineWidth: 1,
		lineColor: "#333",
		dashStyle: "dot",
		borderColor: "#333",
		dataLabels: {
			inside: !0
		},
		states: {
			hover: {
				lineWidthPlus: 0
			}
		}
	}), d.waterfall = f(d.column, {
		type: "waterfall",
		upColorProp: "fill",
		pointValKey: "y",
		translate: function() {
			var t, e, i, n, r, o, s, a, l, h = this.options,
				p = this.yAxis,
				f = c(h.minPointLength, 5),
				g = h.threshold,
				m = h.stacking;
			for (d.column.prototype.translate.apply(this), this.minPointLengthOffset = 0, s = a = g, e = this.points, t = 0, h = e.length; h > t; t++) i = e[t], o = this.processedYData[t], n = i.shapeArgs, l = (r = m && p.stacks[(this.negStacks && g > o ? "-" : "") + this.stackKey]) ? r[i.x].points[this.index + "," + t] : [0, o], i.isSum ? i.y = u(o) : i.isIntermediateSum && (i.y = u(o - a)), r = _(s, s + i.y) + l[0], n.y = p.translate(r, 0, 1), i.isSum ? (n.y = p.translate(l[1], 0, 1), n.height = Math.min(p.translate(l[0], 0, 1), p.len) - n.y + this.minPointLengthOffset) : i.isIntermediateSum ? (n.y = p.translate(l[1], 0, 1), n.height = Math.min(p.translate(a, 0, 1), p.len) - n.y + this.minPointLengthOffset, a = l[1]) : (0 !== s && (n.height = o > 0 ? p.translate(s, 0, 1) - n.y : p.translate(s, 0, 1) - p.translate(s - o, 0, 1)), s += o), n.height < 0 && (n.y += n.height, n.height *= -1), i.plotY = n.y = C(n.y) - this.borderWidth % 2 / 2, n.height = _(C(n.height), .001), i.yBottom = n.y + n.height, n.height <= f && (n.height = f, this.minPointLengthOffset += f), n.y -= this.minPointLengthOffset, n = i.plotY + (i.negative ? n.height : 0) - this.minPointLengthOffset, this.chart.inverted ? i.tooltipPos[0] = p.len - n : i.tooltipPos[1] = n
		},
		processData: function(t) {
			var e, i, n, r, o, s, a, l = this.yData,
				c = this.options.data,
				h = l.length;
			for (n = i = r = o = this.options.threshold || 0, a = 0; h > a; a++) s = l[a], e = c && c[a] ? c[a] : {}, "sum" === s || e.isSum ? l[a] = u(n) : "intermediateSum" === s || e.isIntermediateSum ? l[a] = u(i) : (n += s, i += s), r = Math.min(n, r), o = Math.max(n, o);
			A.prototype.processData.call(this, t), this.dataMin = r, this.dataMax = o
		},
		toYData: function(t) {
			return t.isSum ? 0 === t.x ? null : "sum" : t.isIntermediateSum ? 0 === t.x ? null : "intermediateSum" : t.y
		},
		getAttribs: function() {
			d.column.prototype.getAttribs.apply(this, arguments);
			var e = this,
				i = e.options,
				n = i.states,
				o = i.upColor || e.color,
				i = t.Color(o).brighten(.1).get(),
				s = a(e.pointAttr),
				l = e.upColorProp;
			s[""][l] = o, s.hover[l] = n.hover.upColor || i, s.select[l] = n.select.upColor || o, r(e.points, function(t) {
				t.options.color || (t.y > 0 ? (t.pointAttr = s, t.color = o) : t.pointAttr = e.pointAttr)
			})
		},
		getGraphPath: function() {
			var t, e, i, n = this.data,
				r = n.length,
				o = C(this.options.lineWidth + this.borderWidth) % 2 / 2,
				s = [];
			for (i = 1; r > i; i++) e = n[i].shapeArgs, t = n[i - 1].shapeArgs, e = ["M", t.x + t.width, t.y + o, "L", e.x, t.y + o], n[i - 1].y < 0 && (e[2] += t.height, e[5] += t.height), s = s.concat(e);
			return s
		},
		getExtremes: L,
		drawGraph: A.prototype.drawGraph
	}), p.polygon = a(p.scatter, {
		marker: {
			enabled: !1
		}
	}), d.polygon = f(d.scatter, {
		type: "polygon",
		fillGraph: !0,
		getSegmentPath: function(t) {
			return A.prototype.getSegmentPath.call(this, t).concat("z")
		},
		drawGraph: A.prototype.drawGraph,
		drawLegendSymbol: t.LegendSymbolMixin.drawRectangle
	}), p.bubble = a(p.scatter, {
		dataLabels: {
			formatter: function() {
				return this.point.z
			},
			inside: !0,
			verticalAlign: "middle"
		},
		marker: {
			lineColor: null,
			lineWidth: 1
		},
		minSize: 8,
		maxSize: "20%",
		softThreshold: !1,
		states: {
			hover: {
				halo: {
					size: 5
				}
			}
		},
		tooltip: {
			pointFormat: "({point.x}, {point.y}), Size: {point.z}"
		},
		turboThreshold: 0,
		zThreshold: 0,
		zoneAxis: "z"
	}), k = f(b, {
		haloPath: function() {
			return b.prototype.haloPath.call(this, this.shapeArgs.r + this.series.options.states.hover.halo.size)
		},
		ttBelow: !1
	}), d.bubble = f(d.scatter, {
		type: "bubble",
		pointClass: k,
		pointArrayMap: ["y", "z"],
		parallelArrays: ["x", "y", "z"],
		trackerGroups: ["group", "dataLabelsGroup"],
		bubblePadding: !0,
		zoneAxis: "z",
		pointAttrToOptions: {
			stroke: "lineColor",
			"stroke-width": "lineWidth",
			fill: "fillColor"
		},
		applyOpacity: function(t) {
			var e = this.options.marker,
				i = c(e.fillOpacity, .5),
				t = t || e.fillColor || this.color;
			return 1 !== i && (t = M(t).setOpacity(i).get("rgba")), t
		},
		convertAttribs: function() {
			var t = A.prototype.convertAttribs.apply(this, arguments);
			return t.fill = this.applyOpacity(t.fill), t
		},
		getRadii: function(t, e, i, n) {
			var r, o, s, a = this.zData,
				l = [],
				c = this.options,
				h = "width" !== c.sizeBy,
				u = c.zThreshold,
				p = e - t;
			for (o = 0, r = a.length; r > o; o++) s = a[o], c.sizeByAbsoluteValue && null !== s && (s = Math.abs(s - u), e = Math.max(e - u, Math.abs(t - u)), t = 0), null === s ? s = null : t > s ? s = i / 2 - 1 : (s = p > 0 ? (s - t) / p : .5, h && s >= 0 && (s = Math.sqrt(s)), s = S.ceil(i + s * (n - i)) / 2), l.push(s);
			this.radii = l
		},
		animate: function(t) {
			var e = this.options.animation;
			t || (r(this.points, function(t) {
				var i = t.graphic,
					t = t.shapeArgs;
				i && t && (i.attr("r", 1), i.animate({
					r: t.r
				}, e))
			}), this.animate = null)
		},
		translate: function() {
			var t, e, i, n = this.data,
				r = this.radii;
			for (d.scatter.prototype.translate.call(this), t = n.length; t--;) e = n[t], i = r ? r[t] : 0, s(i) && i >= this.minPxSize / 2 ? (e.shapeType = "circle", e.shapeArgs = {
				x: e.plotX,
				y: e.plotY,
				r: i
			}, e.dlBox = {
				x: e.plotX - i,
				y: e.plotY - i,
				width: 2 * i,
				height: 2 * i
			}) : e.shapeArgs = e.plotY = e.dlBox = void 0
		},
		drawLegendSymbol: function(t, e) {
			var i = this.chart.renderer,
				n = i.fontMetrics(t.itemStyle.fontSize).f / 2;
			e.legendSymbol = i.circle(n, t.baseline - n, n).attr({
				zIndex: 3
			}).add(e.legendGroup), e.legendSymbol.isMarker = !0
		},
		drawPoints: d.column.prototype.drawPoints,
		alignDataLabel: d.column.prototype.alignDataLabel,
		buildKDTree: L,
		applyZones: L
	}), v.prototype.beforePadding = function() {
		var t = this,
			e = this.len,
			o = this.chart,
			a = 0,
			l = e,
			u = this.isXAxis,
			p = u ? "xData" : "yData",
			d = this.min,
			f = {},
			g = S.min(o.plotWidth, o.plotHeight),
			m = Number.MAX_VALUE,
			v = -Number.MAX_VALUE,
			y = this.max - d,
			b = e / y,
			x = [];
		r(this.series, function(e) {
			var s = e.options;
			!e.bubblePadding || !e.visible && o.options.chart.ignoreHiddenSeries || (t.allowZoomOutside = !0, x.push(e), u && (r(["minSize", "maxSize"], function(t) {
				var e = s[t],
					i = /%$/.test(e),
					e = h(e);
				f[t] = i ? g * e / 100 : e
			}), e.minPxSize = f.minSize, e.maxPxSize = f.maxSize, e = e.zData, e.length && (m = c(s.zMin, S.min(m, S.max(i(e), s.displayNegative === !1 ? s.zThreshold : -Number.MAX_VALUE))), v = c(s.zMax, S.max(v, n(e))))))
		}), r(x, function(e) {
			var i, n = e[p],
				r = n.length;
			if (u && e.getRadii(m, v, e.minPxSize, e.maxPxSize), y > 0) for (; r--;) s(n[r]) && t.dataMin <= n[r] && n[r] <= t.dataMax && (i = e.radii[r], a = Math.min((n[r] - d) * b - i, a), l = Math.max((n[r] - d) * b + i, l))
		}), x.length && y > 0 && !this.isLog && (l -= e, b *= (e + a - l) / e, r([
			["min", "userMin", a],
			["max", "userMax", l]
		], function(e) {
			void 0 === c(t.options[e[0]], t[e[1]]) && (t[e[0]] += e[2] / b)
		}))
	}, function() {
		function t(t, e) {
			var i = this.chart,
				n = this.options.animation,
				r = this.group,
				o = this.markerGroup,
				s = this.xAxis.center,
				a = i.plotLeft,
				l = i.plotTop;
			i.polar ? i.renderer.isSVG && (n === !0 && (n = {}), e ? (i = {
				translateX: s[0] + a,
				translateY: s[1] + l,
				scaleX: .001,
				scaleY: .001
			}, r.attr(i), o && o.attr(i)) : (i = {
				translateX: a,
				translateY: l,
				scaleX: 1,
				scaleY: 1
			}, r.animate(i, n), o && o.animate(i, n), this.animate = null)) : t.call(this, e)
		}
		var e, i = A.prototype,
			n = x.prototype;
		i.searchPointByAngle = function(t) {
			var e = this.chart,
				i = this.xAxis.pane.center;
			return this.searchKDTree({
				clientX: 180 + Math.atan2(t.chartX - i[0] - e.plotLeft, t.chartY - i[1] - e.plotTop) * (-180 / Math.PI)
			})
		}, m(i, "buildKDTree", function(t) {
			this.chart.polar && (this.kdByAngle ? this.searchPoint = this.searchPointByAngle : this.kdDimensions = 2), t.apply(this)
		}), i.toXY = function(t) {
			var e, i = this.chart,
				n = t.plotX;
			e = t.plotY, t.rectPlotX = n, t.rectPlotY = e, e = this.xAxis.postTranslate(t.plotX, this.yAxis.len - e), t.plotX = t.polarPlotX = e.x - i.plotLeft, t.plotY = t.polarPlotY = e.y - i.plotTop, this.kdByAngle ? (i = (n / Math.PI * 180 + this.xAxis.pane.options.startAngle) % 360, 0 > i && (i += 360), t.clientX = i) : t.clientX = t.plotX
		}, d.spline && m(d.spline.prototype, "getPointSpline", function(t, e, i, n) {
			var r, o, s, a, l, c, h;
			return this.chart.polar ? (r = i.plotX, o = i.plotY, t = e[n - 1], s = e[n + 1], this.connectEnds && (t || (t = e[e.length - 2]), s || (s = e[1])), t && s && (a = t.plotX, l = t.plotY, e = s.plotX, c = s.plotY, a = (1.5 * r + a) / 2.5, l = (1.5 * o + l) / 2.5, s = (1.5 * r + e) / 2.5, h = (1.5 * o + c) / 2.5, e = Math.sqrt(Math.pow(a - r, 2) + Math.pow(l - o, 2)), c = Math.sqrt(Math.pow(s - r, 2) + Math.pow(h - o, 2)), a = Math.atan2(l - o, a - r), l = Math.atan2(h - o, s - r), h = Math.PI / 2 + (a + l) / 2, Math.abs(a - h) > Math.PI / 2 && (h -= Math.PI), a = r + Math.cos(h) * e, l = o + Math.sin(h) * e, s = r + Math.cos(Math.PI + h) * c, h = o + Math.sin(Math.PI + h) * c, i.rightContX = s, i.rightContY = h), n ? (i = ["C", t.rightContX || t.plotX, t.rightContY || t.plotY, a || r, l || o, r, o], t.rightContX = t.rightContY = null) : i = ["M", r, o]) : i = t.call(this, e, i, n), i
		}), m(i, "translate", function(t) {
			var e = this.chart;
			if (t.call(this), e.polar && (this.kdByAngle = e.tooltip && e.tooltip.shared, !this.preventPostTranslate)) for (t = this.points, e = t.length; e--;) this.toXY(t[e])
		}), m(i, "getGraphPath", function(t, e) {
			var i = this;
			return this.chart.polar && (e = e || this.points, this.options.connectEnds !== !1 && e[0] && null !== e[0].y && (this.connectEnds = !0, e.splice(e.length, 0, e[0])), r(e, function(t) {
				void 0 === t.polarPlotY && i.toXY(t)
			})), t.apply(this, [].slice.call(arguments, 1))
		}), m(i, "animate", t), d.column && (e = d.column.prototype, e.polarArc = function(t, e, i, n) {
			var r = this.xAxis.center,
				o = this.yAxis.len;
			return this.chart.renderer.symbols.arc(r[0], r[1], o - e, null, {
				start: i,
				end: n,
				innerR: o - c(t, o)
			})
		}, m(e, "animate", t), m(e, "translate", function(t) {
			var e, i, n, r = this.xAxis,
				o = r.startAngleRad;
			if (this.preventPostTranslate = !0, t.call(this), r.isRadial) for (e = this.points, n = e.length; n--;) i = e[n], t = i.barX + o, i.shapeType = "path", i.shapeArgs = {
				d: this.polarArc(i.yBottom, i.plotY, t, t + i.pointWidth)
			}, this.toXY(i), i.tooltipPos = [i.plotX, i.plotY], i.ttBelow = i.plotY > r.center[1]
		}), m(e, "alignDataLabel", function(t, e, n, r, o, s) {
			this.chart.polar ? (t = e.rectPlotX / Math.PI * 180, null === r.align && (r.align = t > 20 && 160 > t ? "left" : t > 200 && 340 > t ? "right" : "center"), null === r.verticalAlign && (r.verticalAlign = 45 > t || t > 315 ? "bottom" : t > 135 && 225 > t ? "top" : "middle"), i.alignDataLabel.call(this, e, n, r, o, s)) : t.call(this, e, n, r, o, s)
		})), m(n, "getCoordinates", function(t, e) {
			var i = this.chart,
				n = {
					xAxis: [],
					yAxis: []
				};
			return i.polar ? r(i.axes, function(t) {
				var r = t.isXAxis,
					o = t.center,
					s = e.chartX - o[0] - i.plotLeft,
					o = e.chartY - o[1] - i.plotTop;
				n[r ? "xAxis" : "yAxis"].push({
					axis: t,
					value: t.translate(r ? Math.PI - Math.atan2(s, o) : Math.sqrt(Math.pow(s, 2) + Math.pow(o, 2)), !0)
				})
			}) : n = t.call(this, e), n
		})
	}()
}), function(t) {
	"object" == typeof module && module.exports ? module.exports = t : t(Highcharts)
}(function(t) {
	function e(t, e) {
		var i, n, r, o, s = !1,
			a = t.x,
			l = t.y;
		for (i = 0, n = e.length - 1; i < e.length; n = i++) r = e[i][1] > l, o = e[n][1] > l, r !== o && a < (e[n][0] - e[i][0]) * (l - e[i][1]) / (e[n][1] - e[i][1]) + e[i][0] && (s = !s);
		return s
	}
	function i(t, e, i, n, r, o, s, a) {
		return ["M", t + r, e, "L", t + i - o, e, "C", t + i - o / 2, e, t + i, e + o / 2, t + i, e + o, "L", t + i, e + n - s, "C", t + i, e + n - s / 2, t + i - s / 2, e + n, t + i - s, e + n, "L", t + a, e + n, "C", t + a / 2, e + n, t, e + n - a / 2, t, e + n - a, "L", t, e + r, "C", t, e + r / 2, t + r / 2, e, t + r, e, "Z"]
	}
	var n = t.animObject,
		r = t.Axis,
		o = t.Chart,
		s = t.Color,
		a = t.Point,
		l = t.Pointer,
		c = t.Legend,
		h = t.LegendSymbolMixin,
		u = t.Renderer,
		p = t.Series,
		d = t.SVGRenderer,
		f = t.VMLRenderer,
		g = t.win,
		m = g.document,
		v = t.addEvent,
		y = t.each,
		b = t.error,
		x = t.extend,
		w = t.extendClass,
		k = t.format,
		A = t.map,
		S = t.isNumber,
		C = t.merge,
		T = t.pick,
		_ = t.getOptions(),
		M = t.seriesTypes,
		L = _.plotOptions,
		P = t.wrap,
		E = function() {};
	P(r.prototype, "getSeriesExtremes", function(t) {
		var e, i, n, r = this.isXAxis,
			o = [];
		r && y(this.series, function(t, e) {
			t.useMapGeometry && (o[e] = t.xData, t.xData = [])
		}), t.call(this), r && (e = T(this.dataMin, Number.MAX_VALUE), i = T(this.dataMax, -Number.MAX_VALUE), y(this.series, function(t, r) {
			t.useMapGeometry && (e = Math.min(e, T(t.minX, e)), i = Math.max(i, T(t.maxX, e)), t.xData = o[r], n = !0)
		}), n) && (this.dataMin = e, this.dataMax = i)
	}), P(r.prototype, "setAxisTranslation", function(t) {
		var e, i = this.chart,
			n = i.plotWidth / i.plotHeight,
			i = i.xAxis[0];
		t.call(this), "yAxis" === this.coll && void 0 !== i.transA && y(this.series, function(t) {
			t.preserveAspectRatio && (e = !0)
		}), e && (this.transA = i.transA = Math.min(this.transA, i.transA), t = n / ((i.max - i.min) / (this.max - this.min)), t = 1 > t ? this : i, n = (t.max - t.min) * t.transA, t.pixelPadding = t.len - n, t.minPixelPadding = t.pixelPadding / 2, n = t.fixTo) && (n = n[1] - t.toValue(n[0], !0), n *= t.transA, (Math.abs(n) > t.minPixelPadding || t.min === t.dataMin && t.max === t.dataMax) && (n = 0), t.minPixelPadding -= n)
	}), P(r.prototype, "render", function(t) {
		t.call(this), this.fixTo = null
	});
	var D = t.ColorAxis = function() {
			this.isColorAxis = !0, this.init.apply(this, arguments)
		};
	x(D.prototype, r.prototype), x(D.prototype, {
		defaultColorAxisOptions: {
			lineWidth: 0,
			minPadding: 0,
			maxPadding: 0,
			gridLineWidth: 1,
			tickPixelInterval: 72,
			startOnTick: !0,
			endOnTick: !0,
			offset: 0,
			marker: {
				animation: {
					duration: 50
				},
				color: "gray",
				width: .01
			},
			labels: {
				overflow: "justify"
			},
			minColor: "#EFEFFF",
			maxColor: "#003875",
			tickLength: 5
		},
		init: function(t, e) {
			var i, n = "vertical" !== t.options.legend.layout;
			i = C(this.defaultColorAxisOptions, {
				side: n ? 2 : 1,
				reversed: !n
			}, e, {
				opposite: !n,
				showEmpty: !1,
				title: null,
				isColor: !0
			}), r.prototype.init.call(this, t, i), e.dataClasses && this.initDataClasses(e), this.initStops(e), this.horiz = n, this.zoomEnabled = !1
		},
		tweenColors: function(t, e, i) {
			var n;
			return e.rgba.length && t.rgba.length ? (t = t.rgba, e = e.rgba, n = 1 !== e[3] || 1 !== t[3], t = (n ? "rgba(" : "rgb(") + Math.round(e[0] + (t[0] - e[0]) * (1 - i)) + "," + Math.round(e[1] + (t[1] - e[1]) * (1 - i)) + "," + Math.round(e[2] + (t[2] - e[2]) * (1 - i)) + (n ? "," + (e[3] + (t[3] - e[3]) * (1 - i)) : "") + ")") : t = e.input || "none", t
		},
		initDataClasses: function(t) {
			var e, i = this,
				n = this.chart,
				r = 0,
				o = this.options,
				a = t.dataClasses.length;
			this.dataClasses = e = [], this.legendItems = [], y(t.dataClasses, function(t, l) {
				var c, t = C(t);
				e.push(t), t.color || ("category" === o.dataClassColor ? (c = n.options.colors, t.color = c[r++], r === c.length && (r = 0)) : t.color = i.tweenColors(s(o.minColor), s(o.maxColor), 2 > a ? .5 : l / (a - 1)))
			})
		},
		initStops: function(t) {
			this.stops = t.stops || [
				[0, this.options.minColor],
				[1, this.options.maxColor]
			], y(this.stops, function(t) {
				t.color = s(t[1])
			})
		},
		setOptions: function(t) {
			r.prototype.setOptions.call(this, t), this.options.crosshair = this.options.marker, this.coll = "colorAxis"
		},
		setAxisSize: function() {
			var t, e, i, n = this.legendSymbol,
				r = this.chart;
			n && (this.left = t = n.attr("x"), this.top = e = n.attr("y"), this.width = i = n.attr("width"), this.height = n = n.attr("height"), this.right = r.chartWidth - t - i, this.bottom = r.chartHeight - e - n, this.len = this.horiz ? i : n, this.pos = this.horiz ? t : e)
		},
		toColor: function(t, e) {
			var i, n, r, o, s = this.stops,
				a = this.dataClasses;
			if (a) {
				for (o = a.length; o--;) if (r = a[o], n = r.from, s = r.to, (void 0 === n || t >= n) && (void 0 === s || s >= t)) {
					i = r.color, e && (e.dataClass = o);
					break
				}
			} else {
				for (this.isLog && (t = this.val2lin(t)), i = 1 - (this.max - t) / (this.max - this.min || 1), o = s.length; o-- && !(i > s[o][0]););
				n = s[o] || s[o + 1], s = s[o + 1] || n, i = 1 - (s[0] - i) / (s[0] - n[0] || 1), i = this.tweenColors(n.color, s.color, i)
			}
			return i
		},
		getOffset: function() {
			var t = this.legendGroup,
				e = this.chart.axisOffset[this.side];
			t && (this.axisParent = t, r.prototype.getOffset.call(this), this.added || (this.added = !0, this.labelLeft = 0, this.labelRight = this.width), this.chart.axisOffset[this.side] = e)
		},
		setLegendColor: function() {
			var t, e = this.options,
				i = this.reversed;
			t = i ? 1 : 0, i = i ? 0 : 1, t = this.horiz ? [t, 0, i, 0] : [0, i, 0, t], this.legendColor = {
				linearGradient: {
					x1: t[0],
					y1: t[1],
					x2: t[2],
					y2: t[3]
				},
				stops: e.stops || [
					[0, e.minColor],
					[1, e.maxColor]
				]
			}
		},
		drawLegendSymbol: function(t, e) {
			var i = t.padding,
				n = t.options,
				r = this.horiz,
				o = T(n.symbolWidth, r ? 200 : 12),
				s = T(n.symbolHeight, r ? 12 : 200),
				a = T(n.labelPadding, r ? 16 : 30),
				n = T(n.itemDistance, 10);
			this.setLegendColor(), e.legendSymbol = this.chart.renderer.rect(0, t.baseline - 11, o, s).attr({
				zIndex: 1
			}).add(e.legendGroup), this.legendItemWidth = o + i + (r ? n : a), this.legendItemHeight = s + i + (r ? a : 0)
		},
		setState: E,
		visible: !0,
		setVisible: E,
		getSeriesExtremes: function() {
			var t;
			this.series.length && (t = this.series[0], this.dataMin = t.valueMin, this.dataMax = t.valueMax)
		},
		drawCrosshair: function(t, e) {
			var i, n = e && e.plotX,
				o = e && e.plotY,
				s = this.pos,
				a = this.len;
			e && (i = this.toPixels(e[e.series.colorKey]), s > i ? i = s - 2 : i > s + a && (i = s + a + 2), e.plotX = i, e.plotY = this.len - i, r.prototype.drawCrosshair.call(this, t, e), e.plotX = n, e.plotY = o, this.cross && this.cross.attr({
				fill: this.crosshair.color
			}).add(this.legendGroup))
		},
		getPlotLinePath: function(t, e, i, n, o) {
			return S(o) ? this.horiz ? ["M", o - 4, this.top - 6, "L", o + 4, this.top - 6, o, this.top, "Z"] : ["M", this.left, o, "L", this.left - 6, o + 6, this.left - 6, o - 6, "Z"] : r.prototype.getPlotLinePath.call(this, t, e, i, n)
		},
		update: function(t, e) {
			var i = this.chart,
				n = i.legend;
			y(this.series, function(t) {
				t.isDirtyData = !0
			}), t.dataClasses && n.allItems && (y(n.allItems, function(t) {
				t.isDataClass && t.legendGroup.destroy()
			}), i.isDirtyLegend = !0), i.options[this.coll] = C(this.userOptions, t), r.prototype.update.call(this, t, e), this.legendItem && (this.setLegendColor(), n.colorizeItem(this, !0))
		},
		getDataClassLegendSymbols: function() {
			var e, i = this,
				n = this.chart,
				r = this.legendItems,
				o = n.options.legend,
				s = o.valueDecimals,
				a = o.valueSuffix || "";
			return r.length || y(this.dataClasses, function(o, l) {
				var c = !0,
					u = o.from,
					p = o.to;
				e = "", void 0 === u ? e = "< " : void 0 === p && (e = "> "), void 0 !== u && (e += t.numberFormat(u, s) + a), void 0 !== u && void 0 !== p && (e += " - "), void 0 !== p && (e += t.numberFormat(p, s) + a), r.push(x({
					chart: n,
					name: e,
					options: {},
					drawLegendSymbol: h.drawRectangle,
					visible: !0,
					setState: E,
					isDataClass: !0,
					setVisible: function() {
						c = this.visible = !c, y(i.series, function(t) {
							y(t.points, function(t) {
								t.dataClass === l && t.setVisible(c)
							})
						}), n.legend.colorizeItem(this, c)
					}
				}, o))
			}), r
		},
		name: ""
	}), y(["fill", "stroke"], function(e) {
		t.Fx.prototype[e + "Setter"] = function() {
			this.elem.attr(e, D.prototype.tweenColors(s(this.start), s(this.end), this.pos))
		}
	}), P(o.prototype, "getAxes", function(t) {
		var e = this.options.colorAxis;
		t.call(this), this.colorAxis = [], e && new D(this, e)
	}), P(c.prototype, "getAllItems", function(t) {
		var e = [],
			i = this.chart.colorAxis[0];
		return i && (i.options.dataClasses ? e = e.concat(i.getDataClassLegendSymbols()) : e.push(i), y(i.series, function(t) {
			t.options.showInLegend = !1
		})), e.concat(t.call(this))
	});
	var c = {
		setVisible: function(t) {
			var e = this,
				i = t ? "show" : "hide";
			y(["graphic", "dataLabel"], function(t) {
				e[t] && e[t][i]()
			})
		}
	},
		I = {
			pointAttrToOptions: {
				stroke: "borderColor",
				"stroke-width": "borderWidth",
				fill: "color",
				dashstyle: "dashStyle"
			},
			pointArrayMap: ["value"],
			axisTypes: ["xAxis", "yAxis", "colorAxis"],
			optionalAxis: "colorAxis",
			trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
			getSymbol: E,
			parallelArrays: ["x", "y", "value"],
			colorKey: "value",
			translateColors: function() {
				var t = this,
					e = this.options.nullColor,
					i = this.colorAxis,
					n = this.colorKey;
				y(this.data, function(r) {
					var o = r[n];
					(o = r.options.color || (null === o ? e : i && void 0 !== o ? i.toColor(o, r) : r.color || t.color)) && (r.color = o)
				})
			}
		};
	x(o.prototype, {
		renderMapNavigation: function() {
			var t, e, i, n, r = this,
				o = this.options.mapNavigation,
				s = o.buttons,
				a = function(t) {
					t && (t.preventDefault && t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
				},
				l = function(t) {
					this.handler.call(r, t), a(t)
				};
			if (T(o.enableButtons, o.enabled) && !r.renderer.forExport) for (t in r.mapNavButtons = [], s) s.hasOwnProperty(t) && (i = C(o.buttonOptions, s[t]), e = i.theme, e.style = C(i.theme.style, i.style), n = e.states, e = r.renderer.button(i.text, 0, 0, l, e, n && n.hover, n && n.select, 0, "zoomIn" === t ? "topbutton" : "bottombutton").attr({
				width: i.width,
				height: i.height,
				title: r.options.lang[t],
				zIndex: 5
			}).add(), e.handler = i.onclick, e.align(x(i, {
				width: e.width,
				height: 2 * e.height
			}), null, i.alignTo), v(e.element, "dblclick", a), r.mapNavButtons.push(e))
		},
		fitToBox: function(t, e) {
			return y([
				["x", "width"],
				["y", "height"]
			], function(i) {
				var n = i[0],
					i = i[1];
				t[n] + t[i] > e[n] + e[i] && (t[i] > e[i] ? (t[i] = e[i], t[n] = e[n]) : t[n] = e[n] + e[i] - t[i]), t[i] > e[i] && (t[i] = e[i]), t[n] < e[n] && (t[n] = e[n])
			}), t
		},
		mapZoom: function(t, e, i, n, r) {
			var o = this.xAxis[0],
				s = o.max - o.min,
				a = T(e, o.min + s / 2),
				l = s * t,
				s = this.yAxis[0],
				c = s.max - s.min,
				h = T(i, s.min + c / 2);
			c *= t, a = this.fitToBox({
				x: a - l * (n ? (n - o.pos) / o.len : .5),
				y: h - c * (r ? (r - s.pos) / s.len : .5),
				width: l,
				height: c
			}, {
				x: o.dataMin,
				y: s.dataMin,
				width: o.dataMax - o.dataMin,
				height: s.dataMax - s.dataMin
			}), n && (o.fixTo = [n - o.pos, e]), r && (s.fixTo = [r - s.pos, i]), void 0 !== t ? (o.setExtremes(a.x, a.x + a.width, !1), s.setExtremes(a.y, a.y + a.height, !1)) : (o.setExtremes(void 0, void 0, !1), s.setExtremes(void 0, void 0, !1)), this.redraw()
		}
	}), P(o.prototype, "render", function(t) {
		var e = this,
			i = e.options.mapNavigation;
		e.renderMapNavigation(), t.call(e), (T(i.enableDoubleClickZoom, i.enabled) || i.enableDoubleClickZoomTo) && v(e.container, "dblclick", function(t) {
			e.pointer.onContainerDblClick(t)
		}), T(i.enableMouseWheelZoom, i.enabled) && v(e.container, void 0 === m.onmousewheel ? "DOMMouseScroll" : "mousewheel", function(t) {
			return e.pointer.onContainerMouseWheel(t), !1
		})
	}), x(l.prototype, {
		onContainerDblClick: function(t) {
			var e = this.chart,
				t = this.normalize(t);
			e.options.mapNavigation.enableDoubleClickZoomTo ? e.pointer.inClass(t.target, "highcharts-tracker") && e.hoverPoint && e.hoverPoint.zoomTo() : e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) && e.mapZoom(.5, e.xAxis[0].toValue(t.chartX), e.yAxis[0].toValue(t.chartY), t.chartX, t.chartY)
		},
		onContainerMouseWheel: function(t) {
			var e, i = this.chart,
				t = this.normalize(t);
			e = t.detail || -(t.wheelDelta / 120), i.isInsidePlot(t.chartX - i.plotLeft, t.chartY - i.plotTop) && i.mapZoom(Math.pow(i.options.mapNavigation.mouseWheelSensitivity, e), i.xAxis[0].toValue(t.chartX), i.yAxis[0].toValue(t.chartY), t.chartX, t.chartY)
		}
	}), P(l.prototype, "init", function(t, e, i) {
		t.call(this, e, i), T(i.mapNavigation.enableTouchZoom, i.mapNavigation.enabled) && (this.pinchX = this.pinchHor = this.pinchY = this.pinchVert = this.hasZoom = !0)
	}), P(l.prototype, "pinchTranslate", function(t, e, i, n, r, o, s) {
		t.call(this, e, i, n, r, o, s), "map" === this.chart.options.chart.type && this.hasZoom && (t = n.scaleX > n.scaleY, this.pinchTranslateDirection(!t, e, i, n, r, o, s, t ? n.scaleX : n.scaleY))
	});
	var N = void 0 !== m.documentElement.style.vectorEffect;
	L.map = C(L.scatter, {
		allAreas: !0,
		animation: !1,
		nullColor: "#F8F8F8",
		borderColor: "#5F6061",
		borderWidth: 1,
		marker: null,
		stickyTracking: !1,
		dataLabels: {
			formatter: function() {
				return this.point.value
			},
			inside: !0,
			verticalAlign: "middle",
			crop: !1,
			overflow: !1,
			padding: 0
		},
		turboThreshold: 0,
		tooltip: {
			followPointer: !0,
			pointFormat: "{point.name}: {point.value}<br/>"
		},
		states: {
			normal: {
				animation: !0
			},
			hover: {
				brightness: .2,
				halo: null
			}
		}
	});
	var O = w(a, x({
		applyOptions: function(t, e) {
			var i = a.prototype.applyOptions.call(this, t, e),
				n = this.series,
				r = n.joinBy;
			return n.mapData && ((r = void 0 !== i[r[1]] && n.mapMap[i[r[1]]]) ? (n.xyFromShape && (i.x = r._midX, i.y = r._midY), x(i, r)) : i.value = i.value || null), i
		},
		onMouseOver: function(t) {
			clearTimeout(this.colorInterval), null !== this.value ? a.prototype.onMouseOver.call(this, t) : this.series.onMouseOut(t)
		},
		onMouseOut: function() {
			var t, e = this,
				i = +new Date,
				r = s(e.color),
				o = s(e.pointAttr.hover.fill),
				l = n(e.series.options.states.normal.animation).duration;
			l && 4 === r.rgba.length && 4 === o.rgba.length && "select" !== e.state && (t = e.pointAttr[""].fill, delete e.pointAttr[""].fill, clearTimeout(e.colorInterval), e.colorInterval = setInterval(function() {
				var t = (new Date - i) / l,
					n = e.graphic;
				t > 1 && (t = 1), n && n.attr("fill", D.prototype.tweenColors.call(0, o, r, t)), t >= 1 && clearTimeout(e.colorInterval)
			}, 13)), a.prototype.onMouseOut.call(e), t && (e.pointAttr[""].fill = t)
		},
		zoomTo: function() {
			var t = this.series;
			t.xAxis.setExtremes(this._minX, this._maxX, !1), t.yAxis.setExtremes(this._minY, this._maxY, !1), t.chart.redraw()
		}
	}, c));
	M.map = w(M.scatter, C(I, {
		type: "map",
		pointClass: O,
		supportsDrilldown: !0,
		getExtremesFromAll: !0,
		useMapGeometry: !0,
		forceDL: !0,
		searchPoint: E,
		directTouch: !0,
		preserveAspectRatio: !0,
		getBox: function(e) {
			var i, n = Number.MAX_VALUE,
				r = -n,
				o = n,
				s = -n,
				a = n,
				l = n,
				c = this.xAxis,
				h = this.yAxis;
			y(e || [], function(e) {
				if (e.path) {
					"string" == typeof e.path && (e.path = t.splitPath(e.path));
					var c = e.path || [],
						h = c.length,
						u = !1,
						p = -n,
						d = n,
						f = -n,
						g = n,
						m = e.properties;
					if (!e._foundBox) {
						for (; h--;) S(c[h]) && (u ? (p = Math.max(p, c[h]), d = Math.min(d, c[h])) : (f = Math.max(f, c[h]), g = Math.min(g, c[h])), u = !u);
						e._midX = d + (p - d) * (e.middleX || m && m["hc-middle-x"] || .5), e._midY = g + (f - g) * (e.middleY || m && m["hc-middle-y"] || .5), e._maxX = p, e._minX = d, e._maxY = f, e._minY = g, e.labelrank = T(e.labelrank, (p - d) * (f - g)), e._foundBox = !0
					}
					r = Math.max(r, e._maxX), o = Math.min(o, e._minX), s = Math.max(s, e._maxY), a = Math.min(a, e._minY), l = Math.min(e._maxX - e._minX, e._maxY - e._minY, l), i = !0
				}
			}), i && (this.minY = Math.min(a, T(this.minY, n)), this.maxY = Math.max(s, T(this.maxY, -n)), this.minX = Math.min(o, T(this.minX, n)), this.maxX = Math.max(r, T(this.maxX, -n)), c && void 0 === c.options.minRange && (c.minRange = Math.min(5 * l, (this.maxX - this.minX) / 5, c.minRange || n)), h && void 0 === h.options.minRange && (h.minRange = Math.min(5 * l, (this.maxY - this.minY) / 5, h.minRange || n)))
		},
		getExtremes: function() {
			p.prototype.getExtremes.call(this, this.valueData), this.chart.hasRendered && this.isDirtyData && this.getBox(this.options.data), this.valueMin = this.dataMin, this.valueMax = this.dataMax, this.dataMin = this.minY, this.dataMax = this.maxY
		},
		translatePath: function(t) {
			var e, i = !1,
				n = this.xAxis,
				r = this.yAxis,
				o = n.min,
				s = n.transA,
				n = n.minPixelPadding,
				a = r.min,
				l = r.transA,
				r = r.minPixelPadding,
				c = [];
			if (t) for (e = t.length; e--;) S(t[e]) ? (c[e] = i ? (t[e] - o) * s + n : (t[e] - a) * l + r, i = !i) : c[e] = t[e];
			return c
		},
		setData: function(e, i, n, r) {
			var o, s, a, l = this.options,
				c = l.mapData,
				h = l.joinBy,
				u = null === h,
				d = [],
				f = {};
			if (u && (h = "_i"), h = this.joinBy = t.splat(h), h[1] || (h[1] = h[0]), e && y(e, function(t, i) {
				S(t) && (e[i] = {
					value: t
				}), u && (e[i]._i = i)
			}), this.getBox(e), c) {
				if ("FeatureCollection" === c.type) {
					if (c["hc-transform"]) for (o in this.chart.mapTransforms = s = c["hc-transform"], s) s.hasOwnProperty(o) && o.rotation && (o.cosAngle = Math.cos(o.rotation), o.sinAngle = Math.sin(o.rotation));
					c = t.geojson(c, this.type, this)
				}
				for (this.mapData = c, a = 0; a < c.length; a++) o = c[a], s = o.properties, o._i = a, h[0] && s && s[h[0]] && (o[h[0]] = s[h[0]]), f[o[h[0]]] = o;
				this.mapMap = f, e && h[1] && y(e, function(t) {
					f[t[h[1]]] && d.push(f[t[h[1]]])
				}), l.allAreas ? (this.getBox(c), e = e || [], d = "|" + A(d, function(t) {
					return t[h[0]]
				}).join("|") + "|", y(c, function(t) {
					h[0] && -1 !== d.indexOf("|" + t[h[0]] + "|") || (e.push(C(t, {
						value: null
					})), r = !1)
				})) : this.getBox(d)
			}
			p.prototype.setData.call(this, e, i, n, r)
		},
		drawGraph: E,
		drawDataLabels: E,
		doFullTranslate: function() {
			return this.isDirtyData || this.chart.isResizing || this.chart.renderer.isVML || !this.baseTrans
		},
		translate: function() {
			var t = this,
				e = t.xAxis,
				i = t.yAxis,
				n = t.doFullTranslate();
			t.generatePoints(), y(t.data, function(r) {
				r.plotX = e.toPixels(r._midX, !0), r.plotY = i.toPixels(r._midY, !0), n && (r.shapeType = "path", r.shapeArgs = {
					d: t.translatePath(r.path)
				}, N && (r.shapeArgs["vector-effect"] = "non-scaling-stroke"))
			}), t.translateColors()
		},
		drawPoints: function() {
			var t, e = this,
				i = e.xAxis,
				n = e.yAxis,
				r = e.group,
				o = e.chart,
				s = o.renderer,
				a = this.baseTrans;
			e.transformGroup || (e.transformGroup = s.g().attr({
				scaleX: 1,
				scaleY: 1
			}).add(r), e.transformGroup.survive = !0), e.doFullTranslate() ? (o.hasRendered && "color" === e.pointAttrToOptions.fill && y(e.points, function(t) {
				t.shapeArgs && (t.shapeArgs.fill = t.pointAttr[T(t.state, "")].fill)
			}), N || y(e.points, function(t) {
				t = t.pointAttr[""], t["stroke-width"] === e.pointAttr[""]["stroke-width"] && (t["stroke-width"] = "inherit")
			}), e.group = e.transformGroup, M.column.prototype.drawPoints.apply(e), e.group = r, y(e.points, function(t) {
				t.graphic && (t.name && t.graphic.addClass("highcharts-name-" + t.name.replace(" ", "-").toLowerCase()), t.properties && t.properties["hc-key"] && t.graphic.addClass("highcharts-key-" + t.properties["hc-key"].toLowerCase()), N || (t.graphic["stroke-widthSetter"] = E))
			}), this.baseTrans = {
				originX: i.min - i.minPixelPadding / i.transA,
				originY: n.min - n.minPixelPadding / n.transA + (n.reversed ? 0 : n.len / n.transA),
				transAX: i.transA,
				transAY: n.transA
			}, this.transformGroup.animate({
				translateX: 0,
				translateY: 0,
				scaleX: 1,
				scaleY: 1
			})) : (t = i.transA / a.transAX, r = n.transA / a.transAY, i = i.toPixels(a.originX, !0), n = n.toPixels(a.originY, !0), t > .99 && 1.01 > t && r > .99 && 1.01 > r && (r = t = 1, i = Math.round(i), n = Math.round(n)), this.transformGroup.animate({
				translateX: i,
				translateY: n,
				scaleX: t,
				scaleY: r
			})), N || e.group.element.setAttribute("stroke-width", e.options.borderWidth / (t || 1)), this.drawMapDataLabels()
		},
		drawMapDataLabels: function() {
			p.prototype.drawDataLabels.call(this), this.dataLabelsGroup && this.dataLabelsGroup.clip(this.chart.clipRect)
		},
		render: function() {
			var t = this,
				e = p.prototype.render;
			t.chart.renderer.isVML && t.data.length > 3e3 ? setTimeout(function() {
				e.call(t)
			}) : e.call(t)
		},
		animate: function(t) {
			var e = this.options.animation,
				i = this.group,
				n = this.xAxis,
				r = this.yAxis,
				o = n.pos,
				s = r.pos;
			this.chart.renderer.isSVG && (e === !0 && (e = {
				duration: 1e3
			}), t ? i.attr({
				translateX: o + n.len / 2,
				translateY: s + r.len / 2,
				scaleX: .001,
				scaleY: .001
			}) : (i.animate({
				translateX: o,
				translateY: s,
				scaleX: 1,
				scaleY: 1
			}, e), this.animate = null))
		},
		animateDrilldown: function(t) {
			var e = this.chart.plotBox,
				i = this.chart.drilldownLevels[this.chart.drilldownLevels.length - 1],
				n = i.bBox,
				r = this.chart.options.drilldown.animation;
			t || (t = Math.min(n.width / e.width, n.height / e.height), i.shapeArgs = {
				scaleX: t,
				scaleY: t,
				translateX: n.x,
				translateY: n.y
			}, y(this.points, function(t) {
				t.graphic && t.graphic.attr(i.shapeArgs).animate({
					scaleX: 1,
					scaleY: 1,
					translateX: 0,
					translateY: 0
				}, r)
			}), this.animate = null)
		},
		drawLegendSymbol: h.drawRectangle,
		animateDrillupFrom: function(t) {
			M.column.prototype.animateDrillupFrom.call(this, t)
		},
		animateDrillupTo: function(t) {
			M.column.prototype.animateDrillupTo.call(this, t)
		}
	})), L.mapline = C(L.map, {
		lineWidth: 1,
		fillColor: "none"
	}), M.mapline = w(M.map, {
		type: "mapline",
		pointAttrToOptions: {
			stroke: "color",
			"stroke-width": "lineWidth",
			fill: "fillColor",
			dashstyle: "dashStyle"
		},
		drawLegendSymbol: M.line.prototype.drawLegendSymbol
	}), L.mappoint = C(L.scatter, {
		dataLabels: {
			enabled: !0,
			formatter: function() {
				return this.point.name
			},
			crop: !1,
			defer: !1,
			overflow: !1,
			style: {
				color: "#000000"
			}
		}
	}), M.mappoint = w(M.scatter, {
		type: "mappoint",
		forceDL: !0,
		pointClass: w(a, {
			applyOptions: function(t, e) {
				var i = a.prototype.applyOptions.call(this, t, e);
				return void 0 !== t.lat && void 0 !== t.lon && (i = x(i, this.series.chart.fromLatLonToPoint(i))), i
			}
		})
	}), M.bubble && (L.mapbubble = C(L.bubble, {
		animationLimit: 500,
		tooltip: {
			pointFormat: "{point.name}: {point.z}"
		}
	}), M.mapbubble = w(M.bubble, {
		pointClass: w(a, {
			applyOptions: function(t, e) {
				var i;
				return t && void 0 !== t.lat && void 0 !== t.lon ? (i = a.prototype.applyOptions.call(this, t, e), i = x(i, this.series.chart.fromLatLonToPoint(i))) : i = O.prototype.applyOptions.call(this, t, e), i
			},
			ttBelow: !1
		}),
		xyFromShape: !0,
		type: "mapbubble",
		pointArrayMap: ["z"],
		getMapData: M.map.prototype.getMapData,
		getBox: M.map.prototype.getBox,
		setData: M.map.prototype.setData
	})), _.plotOptions.heatmap = C(_.plotOptions.scatter, {
		animation: !1,
		borderWidth: 0,
		nullColor: "#F8F8F8",
		dataLabels: {
			formatter: function() {
				return this.point.value
			},
			inside: !0,
			verticalAlign: "middle",
			crop: !1,
			overflow: !1,
			padding: 0
		},
		marker: null,
		pointRange: null,
		tooltip: {
			pointFormat: "{point.x}, {point.y}: {point.value}<br/>"
		},
		states: {
			normal: {
				animation: !0
			},
			hover: {
				halo: !1,
				brightness: .2
			}
		}
	}), M.heatmap = w(M.scatter, C(I, {
		type: "heatmap",
		pointArrayMap: ["y", "value"],
		hasPointSpecificOptions: !0,
		pointClass: w(a, c),
		supportsDrilldown: !0,
		getExtremesFromAll: !0,
		directTouch: !0,
		init: function() {
			var t;
			M.scatter.prototype.init.apply(this, arguments), t = this.options, t.pointRange = T(t.pointRange, t.colsize || 1), this.yAxis.axisPointRange = t.rowsize || 1
		},
		translate: function() {
			var t = this.options,
				e = this.xAxis,
				i = this.yAxis,
				n = function(t, e, i) {
					return Math.min(Math.max(e, t), i)
				};
			this.generatePoints(), y(this.points, function(r) {
				var o = (t.colsize || 1) / 2,
					s = (t.rowsize || 1) / 2,
					a = n(Math.round(e.len - e.translate(r.x - o, 0, 1, 0, 1)), -e.len, 2 * e.len),
					o = n(Math.round(e.len - e.translate(r.x + o, 0, 1, 0, 1)), -e.len, 2 * e.len),
					l = n(Math.round(i.translate(r.y - s, 0, 1, 0, 1)), -i.len, 2 * i.len),
					s = n(Math.round(i.translate(r.y + s, 0, 1, 0, 1)), -i.len, 2 * i.len);
				r.plotX = r.clientX = (a + o) / 2, r.plotY = (l + s) / 2, r.shapeType = "rect", r.shapeArgs = {
					x: Math.min(a, o),
					y: Math.min(l, s),
					width: Math.abs(o - a),
					height: Math.abs(s - l)
				}
			}), this.translateColors(), this.chart.hasRendered && y(this.points, function(t) {
				t.shapeArgs.fill = t.options.color || t.color
			})
		},
		drawPoints: M.column.prototype.drawPoints,
		animate: E,
		getBox: E,
		drawLegendSymbol: h.drawRectangle,
		alignDataLabel: M.column.prototype.alignDataLabel,
		getExtremes: function() {
			p.prototype.getExtremes.call(this, this.valueData), this.valueMin = this.dataMin, this.valueMax = this.dataMax, p.prototype.getExtremes.call(this)
		}
	})), o.prototype.transformFromLatLon = function(t, e) {
		if (void 0 === g.proj4) return b(21), {
			x: 0,
			y: null
		};
		var i = g.proj4(e.crs, [t.lon, t.lat]),
			n = e.cosAngle || e.rotation && Math.cos(e.rotation),
			r = e.sinAngle || e.rotation && Math.sin(e.rotation),
			i = e.rotation ? [i[0] * n + i[1] * r, -i[0] * r + i[1] * n] : i;
		return {
			x: ((i[0] - (e.xoffset || 0)) * (e.scale || 1) + (e.xpan || 0)) * (e.jsonres || 1) + (e.jsonmarginX || 0),
			y: (((e.yoffset || 0) - i[1]) * (e.scale || 1) + (e.ypan || 0)) * (e.jsonres || 1) - (e.jsonmarginY || 0)
		}
	}, o.prototype.transformToLatLon = function(t, e) {
		if (void 0 !== g.proj4) {
			var i = {
				x: ((t.x - (e.jsonmarginX || 0)) / (e.jsonres || 1) - (e.xpan || 0)) / (e.scale || 1) + (e.xoffset || 0),
				y: ((-t.y - (e.jsonmarginY || 0)) / (e.jsonres || 1) + (e.ypan || 0)) / (e.scale || 1) + (e.yoffset || 0)
			},
				n = e.cosAngle || e.rotation && Math.cos(e.rotation),
				r = e.sinAngle || e.rotation && Math.sin(e.rotation),
				i = g.proj4(e.crs, "WGS84", e.rotation ? {
					x: i.x * n + i.y * -r,
					y: i.x * r + i.y * n
				} : i);
			return {
				lat: i.y,
				lon: i.x
			}
		}
		b(21)
	}, o.prototype.fromPointToLatLon = function(t) {
		var i, n = this.mapTransforms;
		if (n) {
			for (i in n) if (n.hasOwnProperty(i) && n[i].hitZone && e({
				x: t.x,
				y: -t.y
			}, n[i].hitZone.coordinates[0])) return this.transformToLatLon(t, n[i]);
			return this.transformToLatLon(t, n["default"])
		}
		b(22)
	}, o.prototype.fromLatLonToPoint = function(t) {
		var i, n, r = this.mapTransforms;
		if (!r) return b(22), {
			x: 0,
			y: null
		};
		for (i in r) if (r.hasOwnProperty(i) && r[i].hitZone && (n = this.transformFromLatLon(t, r[i]), e({
			x: n.x,
			y: -n.y
		}, r[i].hitZone.coordinates[0]))) return n;
		return this.transformFromLatLon(t, r["default"])
	}, t.geojson = function(t, e, i) {
		var n = [],
			r = [],
			o = function(t) {
				var e, i = t.length;
				for (r.push("M"), e = 0; i > e; e++) 1 === e && r.push("L"), r.push(t[e][0], -t[e][1])
			},
			e = e || "map";
		return y(t.features, function(t) {
			var i, s = t.geometry,
				a = s.type,
				s = s.coordinates,
				t = t.properties;
			r = [], "map" === e || "mapbubble" === e ? ("Polygon" === a ? (y(s, o), r.push("Z")) : "MultiPolygon" === a && (y(s, function(t) {
				y(t, o)
			}), r.push("Z")), r.length && (i = {
				path: r
			})) : "mapline" === e ? ("LineString" === a ? o(s) : "MultiLineString" === a && y(s, o), r.length && (i = {
				path: r
			})) : "mappoint" === e && "Point" === a && (i = {
				x: s[0],
				y: -s[1]
			}), i && n.push(x(i, {
				name: t.name || t.NAME,
				properties: t
			}))
		}), i && t.copyrightShort && (i.chart.mapCredits = k(i.chart.options.credits.mapText, {
			geojson: t
		}), i.chart.mapCreditsFull = k(i.chart.options.credits.mapTextFull, {
			geojson: t
		})), n
	}, P(o.prototype, "showCredits", function(e, i) {
		this.mapCredits && (i.href = null), e.call(this, t.merge(i, {
			text: i.text + (this.mapCredits || "")
		})), this.credits && this.mapCreditsFull && this.credits.attr({
			title: this.mapCreditsFull
		})
	}), x(_.lang, {
		zoomIn: "Zoom in",
		zoomOut: "Zoom out"
	}), _.mapNavigation = {
		buttonOptions: {
			alignTo: "plotBox",
			align: "left",
			verticalAlign: "top",
			x: 0,
			width: 18,
			height: 18,
			style: {
				fontSize: "15px",
				fontWeight: "bold",
				textAlign: "center"
			},
			theme: {
				"stroke-width": 1
			}
		},
		buttons: {
			zoomIn: {
				onclick: function() {
					this.mapZoom(.5)
				},
				text: "+",
				y: -220
			},
			zoomOut: {
				onclick: function() {
					this.mapZoom(2)
				},
				text: "-",
				y: -192
			}
		},
		mouseWheelSensitivity: 1.1
	}, t.splitPath = function(t) {
		var e, t = t.replace(/([A-Za-z])/g, " $1 "),
			t = t.replace(/^\s*/, "").replace(/\s*$/, ""),
			t = t.split(/[ ,]+/);
		for (e = 0; e < t.length; e++) / [a - zA - Z] / .test(t[e]) || (t[e] = parseFloat(t[e]));
		return t
	}, t.maps = {}, d.prototype.symbols.topbutton = function(t, e, n, r, o) {
		return i(t - 1, e - 1, n, r, o.r, o.r, 0, 0)
	}, d.prototype.symbols.bottombutton = function(t, e, n, r, o) {
		return i(t - 1, e - 1, n, r, 0, 0, o.r, o.r)
	}, u === f && y(["topbutton", "bottombutton"], function(t) {
		f.prototype.symbols[t] = d.prototype.symbols[t]
	}), t.Map = t.mapChart = function(e, i, n) {
		var r, s = "string" == typeof e || e.nodeName,
			a = arguments[s ? 1 : 0],
			l = {
				endOnTick: !1,
				gridLineWidth: 0,
				lineWidth: 0,
				minPadding: 0,
				maxPadding: 0,
				startOnTick: !1,
				title: null,
				tickPositions: []
			},
			c = t.getOptions().credits;
		return r = a.series, a.series = null, a = C({
			chart: {
				panning: "xy",
				type: "map"
			},
			credits: {
				mapText: T(c.mapText, '  <a href="{geojson.copyrightUrl}">{geojson.copyrightShort}</a>'),
				mapTextFull: T(c.mapTextFull, "{geojson.copyright}")
			},
			xAxis: l,
			yAxis: C(l, {
				reversed: !0
			})
		}, a, {
			chart: {
				inverted: !1,
				alignTicks: !1
			}
		}), a.series = r, s ? new o(e, a, n) : new o(a, i)
	}
}), function(t) {
	"object" == typeof module && module.exports ? module.exports = t : t(Highcharts)
}(function(t) {
	var e, i = t.win,
		n = i.document,
		r = t.Chart,
		o = t.addEvent,
		s = t.removeEvent,
		a = t.fireEvent,
		l = t.createElement,
		c = t.discardElement,
		h = t.css,
		u = t.merge,
		p = t.each,
		d = t.extend,
		f = t.splat,
		g = Math.max,
		m = t.isTouchDevice,
		v = t.Renderer.prototype.symbols,
		y = t.getOptions();
	 t.post = function(t, e, i) {
		var r, t = l("form", u({
			method: "post",
			action: t,
			enctype: "multipart/form-data"
		}, i), {
			display: "none"
		}, n.body);
		for (r in e) l("input", {
			type: "hidden",
			name: r,
			value: e[r]
		}, null, t);
		t.submit(), c(t)
	}, d(r.prototype, {
		sanitizeSVG: function(t) {
			return t.replace(/zIndex="[^"]+"/g, "").replace(/isShadow="[^"]+"/g, "").replace(/symbolName="[^"]+"/g, "").replace(/jQuery[0-9]+="[^"]+"/g, "").replace(/url\([^#]+#/g, "url(#").replace(/<svg /, '<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (NS[0-9]+\:)?href=/g, " xlink:href=").replace(/\n/, " ").replace(/<\/svg>.*?$/, "</svg>").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g, '$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g, " ").replace(/&shy;/g, "­").replace(/<IMG /g, "<image ").replace(/<(\/?)TITLE>/g, "<$1title>").replace(/height=([^" ]+)/g, 'height="$1"').replace(/width=([^" ]+)/g, 'width="$1"').replace(/hc-svg-href="([^"]+)">/g, 'xlink:href="$1"/>').replace(/ id=([^" >]+)/g, ' id="$1"').replace(/class=([^" >]+)/g, 'class="$1"').replace(/ transform /g, " ").replace(/:(path|rect)/g, "$1").replace(/style="([^"]+)"/g, function(t) {
				return t.toLowerCase()
			})
		},
		getChartHTML: function() {
			return this.container.innerHTML
		},
		getSVG: function(e) {
			var i, r, o, s, a, h = this,
				g = u(h.options, e),
				m = g.exporting.allowHTML;
			return n.createElementNS || (n.createElementNS = function(t, e) {
				return n.createElement(e)
			}), r = l("div", null, {
				position: "absolute",
				top: "-9999em",
				width: h.chartWidth + "px",
				height: h.chartHeight + "px"
			}, n.body), o = h.renderTo.style.width, a = h.renderTo.style.height, o = g.exporting.sourceWidth || g.chart.width || /px$/.test(o) && parseInt(o, 10) || 600, a = g.exporting.sourceHeight || g.chart.height || /px$/.test(a) && parseInt(a, 10) || 400, d(g.chart, {
				animation: !1,
				renderTo: r,
				forExport: !0,
				renderer: "SVGRenderer",
				width: o,
				height: a
			}), g.exporting.enabled = !1, delete g.data, g.series = [], p(h.series, function(t) {
				s = u(t.userOptions, {
					animation: !1,
					enableMouseTracking: !1,
					showCheckbox: !1,
					visible: t.visible
				}), s.isInternal || g.series.push(s)
			}), e && p(["xAxis", "yAxis"], function(t) {
				p(f(e[t]), function(e, i) {
					g[t][i] = u(g[t][i], e)
				})
			}), i = new t.Chart(g, h.callback), p(["xAxis", "yAxis"], function(t) {
				p(h[t], function(e, n) {
					var r = i[t][n],
						o = e.getExtremes(),
						s = o.userMin,
						o = o.userMax;
					r && (void 0 !== s || void 0 !== o) && r.setExtremes(s, o, !0, !1)
				})
			}), o = i.getChartHTML(), g = null, i.destroy(), c(r), m && (r = o.match(/<\/svg>(.*?$)/)) && (r = '<foreignObject x="0" y="0" width="200" height="200"><body xmlns="http://www.w3.org/1999/xhtml">' + r[1] + "</body></foreignObject>", o = o.replace("</svg>", r + "</svg>")), o = this.sanitizeSVG(o), o = o.replace(/(url\(#highcharts-[0-9]+)&quot;/g, "$1").replace(/&quot;/g, "'")
		},
		getSVGForExport: function(t, e) {
			var i = this.options.exporting;
			return this.getSVG(u({
				chart: {
					borderRadius: 0
				}
			}, i.chartOptions, e, {
				exporting: {
					sourceWidth: t && t.sourceWidth || i.sourceWidth,
					sourceHeight: t && t.sourceHeight || i.sourceHeight
				}
			}))
		},
		exportChart: function(e, i) {
			var n = this.getSVGForExport(e, i),
				e = u(this.options.exporting, e);
			t.post(e.url, {
				filename: e.filename || "chart",
				type: e.type,
				width: e.width || 0,
				scale: e.scale || 2,
				svg: n
			}, e.formAttributes)
		},
		print: function() {
			var t, e, r, o = this,
				s = o.container,
				l = [],
				c = s.parentNode,
				h = n.body,
				u = h.childNodes,
				d = o.options.exporting.printMaxWidth;
			o.isPrinting || (o.isPrinting = !0, o.pointer.reset(null, 0), a(o, "beforePrint"), (r = d && o.chartWidth > d) && (t = o.hasUserSize, e = [o.chartWidth, o.chartHeight, !1], o.setSize(d, o.chartHeight, !1)), p(u, function(t, e) {
				1 === t.nodeType && (l[e] = t.style.display, t.style.display = "none")
			}), h.appendChild(s), i.focus(), i.print(), setTimeout(function() {
				c.appendChild(s), p(u, function(t, e) {
					1 === t.nodeType && (t.style.display = l[e])
				}), o.isPrinting = !1, r && (o.setSize.apply(o, e), o.hasUserSize = t), a(o, "afterPrint")
			}, 1e3))
		},
		contextMenu: function(t, e, i, r, a, c, u) {
			var f, m, v, y = this,
				b = y.options.navigation,
				x = b.menuItemStyle,
				w = y.chartWidth,
				k = y.chartHeight,
				A = "cache-" + t,
				S = y[A],
				C = g(a, c),
				T = function(e) {
					y.pointer.inClass(e.target, t) || m()
				};
			S || (y[A] = S = l("div", {
				className: t
			}, {
				position: "absolute",
				zIndex: 1e3,
				padding: C + "px"
			}, y.container), f = l("div", null, d({
				MozBoxShadow: "3px 3px 10px #888",
				WebkitBoxShadow: "3px 3px 10px #888",
				boxShadow: "3px 3px 10px #888"
			}, b.menuStyle), S), m = function() {
				h(S, {
					display: "none"
				}), u && u.setState(0), y.openMenu = !1
			}, o(S, "mouseleave", function() {
				v = setTimeout(m, 500)
			}), o(S, "mouseenter", function() {
				clearTimeout(v)
			}), o(n, "mouseup", T), o(y, "destroy", function() {
				s(n, "mouseup", T)
			}), p(e, function(t) {
				if (t) {
					var e = t.separator ? l("hr", null, null, f) : l("div", {
						onmouseover: function() {
							h(this, b.menuItemHoverStyle)
						},
						onmouseout: function() {
							h(this, x)
						},
						onclick: function(e) {
							e && e.stopPropagation(), m(), t.onclick && t.onclick.apply(y, arguments)
						},
						innerHTML: t.text || y.options.lang[t.textKey]
					}, d({
						cursor: "pointer"
					}, x), f);
					y.exportDivElements.push(e)
				}
			}), y.exportDivElements.push(f, S), y.exportMenuWidth = S.offsetWidth, y.exportMenuHeight = S.offsetHeight), e = {
				display: "block"
			}, i + y.exportMenuWidth > w ? e.right = w - i - a - C + "px" : e.left = i - C + "px", r + c + y.exportMenuHeight > k && "top" !== u.alignOptions.verticalAlign ? e.bottom = k - r - C + "px" : e.top = r + c - C + "px", h(S, e), y.openMenu = !0
		},
		addButton: function(i) {
			var n, r, o = this,
				s = o.renderer,
				a = u(o.options.navigation.buttonOptions, i),
				l = a.onclick,
				c = a.menuItems,
				h = {
					stroke: a.symbolStroke,
					fill: a.symbolFill
				},
				p = a.symbolSize || 12;
			if (o.btnCount || (o.btnCount = 0), o.exportDivElements || (o.exportDivElements = [], o.exportSVGElements = []), a.enabled !== !1) {
				var f, g = a.theme,
					m = g.states,
					v = m && m.hover,
					m = m && m.select;
				delete g.states, l ? f = function(t) {
					t.stopPropagation(), l.call(o, t)
				} : c && (f = function() {
					o.contextMenu(r.menuClassName, c, r.translateX, r.translateY, r.width, r.height, r), r.setState(2)
				}), a.text && a.symbol ? g.paddingLeft = t.pick(g.paddingLeft, 25) : a.text || d(g, {
					width: a.width,
					height: a.height,
					padding: 0
				}), r = s.button(a.text, 0, 0, f, g, v, m).attr({
					title: o.options.lang[a._titleKey],
					"stroke-linecap": "round",
					zIndex: 3
				}), r.menuClassName = i.menuClassName || "highcharts-menu-" + o.btnCount++, a.symbol && (n = s.symbol(a.symbol, a.symbolX - p / 2, a.symbolY - p / 2, p, p).attr(d(h, {
					"stroke-width": a.symbolStrokeWidth || 1,
					zIndex: 1
				})).add(r)), r.add().align(d(a, {
					width: r.width,
					x: t.pick(a.x, e)
				}), !0, "spacingBox"), e += (r.width + a.buttonSpacing) * ("right" === a.align ? -1 : 1), o.exportSVGElements.push(r, n)
			}
		},
		destroyExport: function(t) {
			var e, i, t = t.target;
			for (e = 0; e < t.exportSVGElements.length; e++)(i = t.exportSVGElements[e]) && (i.onclick = i.ontouchstart = null, t.exportSVGElements[e] = i.destroy());
			for (e = 0; e < t.exportDivElements.length; e++) i = t.exportDivElements[e], s(i, "mouseleave"), t.exportDivElements[e] = i.onmouseout = i.onmouseover = i.ontouchstart = i.onclick = null, c(i)
		}
	}), v.menu = function(t, e, i, n) {
		return ["M", t, e + 2.5, "L", t + i, e + 2.5, "M", t, e + n / 2 + .5, "L", t + i, e + n / 2 + .5, "M", t, e + n - 1.5, "L", t + i, e + n - 1.5]
	}, r.prototype.callbacks.push(function(t) {
		/*var i, n = t.options.exporting,
			r = n.buttons;
		if (e = 0, n.enabled !== !1) {
			for (i in r) t.addButton(r[i]);
			o(t, "destroy", t.destroyExport)
		}*/
	})
}), !
function(t) {
	var e = "object" == typeof window && window || "object" == typeof self && self;
	"undefined" != typeof exports ? t(exports) : e && (e.hljs = t({}), "function" == typeof define && define.amd && define([], function() {
		return e.hljs
	}))
}(function(t) {
	function e(t) {
		return t.replace(/[&<>]/gm, function(t) {
			return P[t]
		})
	}
	function i(t) {
		return t.nodeName.toLowerCase()
	}
	function n(t, e) {
		var i = t && t.exec(e);
		return i && 0 === i.index
	}
	function r(t) {
		return C.test(t)
	}
	function o(t) {
		var e, i, n, o, s = t.className + " ";
		if (s += t.parentNode ? t.parentNode.className : "", i = T.exec(s)) return x(i[1]) ? i[1] : "no-highlight";
		for (s = s.split(/\s+/), e = 0, n = s.length; n > e; e++) if (o = s[e], r(o) || x(o)) return o
	}
	function s(t, e) {
		var i, n = {};
		for (i in t) n[i] = t[i];
		if (e) for (i in e) n[i] = e[i];
		return n
	}
	function a(t) {
		var e = [];
		return function n(t, r) {
			for (var o = t.firstChild; o; o = o.nextSibling) 3 === o.nodeType ? r += o.nodeValue.length : 1 === o.nodeType && (e.push({
				event: "start",
				offset: r,
				node: o
			}), r = n(o, r), i(o).match(/br|hr|img|input/) || e.push({
				event: "stop",
				offset: r,
				node: o
			}));
			return r
		}(t, 0), e
	}
	function l(t, n, r) {
		function o() {
			return t.length && n.length ? t[0].offset !== n[0].offset ? t[0].offset < n[0].offset ? t : n : "start" === n[0].event ? t : n : t.length ? t : n
		}
		function s(t) {
			function n(t) {
				return " " + t.nodeName + '="' + e(t.value) + '"'
			}
			h += "<" + i(t) + w.map.call(t.attributes, n).join("") + ">"
		}
		function a(t) {
			h += "</" + i(t) + ">"
		}
		function l(t) {
			("start" === t.event ? s : a)(t.node)
		}
		for (var c = 0, h = "", u = []; t.length || n.length;) {
			var p = o();
			if (h += e(r.substr(c, p[0].offset - c)), c = p[0].offset, p === t) {
				u.reverse().forEach(a);
				do l(p.splice(0, 1)[0]), p = o();
				while (p === t && p.length && p[0].offset === c);
				u.reverse().forEach(s)
			} else "start" === p[0].event ? u.push(p[0].node) : u.pop(), l(p.splice(0, 1)[0])
		}
		return h + e(r.substr(c))
	}
	function c(t) {
		function e(t) {
			return t && t.source || t
		}
		function i(i, n) {
			return new RegExp(e(i), "m" + (t.cI ? "i" : "") + (n ? "g" : ""))
		}
		function n(r, o) {
			if (!r.compiled) {
				if (r.compiled = !0, r.k = r.k || r.bK, r.k) {
					var a = {},
						l = function(e, i) {
							t.cI && (i = i.toLowerCase()), i.split(" ").forEach(function(t) {
								var i = t.split("|");
								a[i[0]] = [e, i[1] ? Number(i[1]) : 1]
							})
						};
					"string" == typeof r.k ? l("keyword", r.k) : k(r.k).forEach(function(t) {
						l(t, r.k[t])
					}), r.k = a
				}
				r.lR = i(r.l || /\w+/, !0), o && (r.bK && (r.b = "\\b(" + r.bK.split(" ").join("|") + ")\\b"), r.b || (r.b = /\B|\b/), r.bR = i(r.b), r.e || r.eW || (r.e = /\B|\b/), r.e && (r.eR = i(r.e)), r.tE = e(r.e) || "", r.eW && o.tE && (r.tE += (r.e ? "|" : "") + o.tE)), r.i && (r.iR = i(r.i)), null == r.r && (r.r = 1), r.c || (r.c = []);
				var c = [];
				r.c.forEach(function(t) {
					t.v ? t.v.forEach(function(e) {
						c.push(s(t, e))
					}) : c.push("self" === t ? r : t)
				}), r.c = c, r.c.forEach(function(t) {
					n(t, r)
				}), r.starts && n(r.starts, o);
				var h = r.c.map(function(t) {
					return t.bK ? "\\.?(" + t.b + ")\\.?" : t.b
				}).concat([r.tE, r.i]).map(e).filter(Boolean);
				r.t = h.length ? i(h.join("|"), !0) : {
					exec: function() {
						return null
					}
				}
			}
		}
		n(t)
	}
	function h(t, i, r, o) {
		function s(t, e) {
			var i, r;
			for (i = 0, r = e.c.length; r > i; i++) if (n(e.c[i].bR, t)) return e.c[i]
		}
		function a(t, e) {
			if (n(t.eR, e)) {
				for (; t.endsParent && t.parent;) t = t.parent;
				return t
			}
			return t.eW ? a(t.parent, e) : void 0
		}
		function l(t, e) {
			return !r && n(e.iR, t)
		}
		function p(t, e) {
			var i = b.cI ? e[0].toLowerCase() : e[0];
			return t.k.hasOwnProperty(i) && t.k[i]
		}
		function d(t, e, i, n) {
			var r = n ? "" : L.classPrefix,
				o = '<span class="' + r,
				s = i ? "" : M;
			return o += t + '">', o + e + s
		}
		function f() {
			var t, i, n, r;
			if (!k.k) return e(T);
			for (r = "", i = 0, k.lR.lastIndex = 0, n = k.lR.exec(T); n;) r += e(T.substr(i, n.index - i)), t = p(k, n), t ? (_ += t[1], r += d(t[0], e(n[0]))) : r += e(n[0]), i = k.lR.lastIndex, n = k.lR.exec(T);
			return r + e(T.substr(i))
		}
		function g() {
			var t = "string" == typeof k.sL;
			if (t && !A[k.sL]) return e(T);
			var i = t ? h(k.sL, T, !0, S[k.sL]) : u(T, k.sL.length ? k.sL : void 0);
			return k.r > 0 && (_ += i.r), t && (S[k.sL] = i.top), d(i.language, i.value, !1, !0)
		}
		function m() {
			C += null != k.sL ? g() : f(), T = ""
		}
		function v(t) {
			C += t.cN ? d(t.cN, "", !0) : "", k = Object.create(t, {
				parent: {
					value: k
				}
			})
		}
		function y(t, e) {
			if (T += t, null == e) return m(), 0;
			var i = s(e, k);
			if (i) return i.skip ? T += e : (i.eB && (T += e), m(), i.rB || i.eB || (T = e)), v(i, e), i.rB ? 0 : e.length;
			var n = a(k, e);
			if (n) {
				var r = k;
				r.skip ? T += e : (r.rE || r.eE || (T += e), m(), r.eE && (T = e));
				do k.cN && (C += M), k.skip || (_ += k.r), k = k.parent;
				while (k !== n.parent);
				return n.starts && v(n.starts, ""), r.rE ? 0 : e.length
			}
			if (l(e, k)) throw new Error('Illegal lexeme "' + e + '" for mode "' + (k.cN || "<unnamed>") + '"');
			return T += e, e.length || 1
		}
		var b = x(t);
		if (!b) throw new Error('Unknown language: "' + t + '"');
		c(b);
		var w, k = o || b,
			S = {},
			C = "";
		for (w = k; w !== b; w = w.parent) w.cN && (C = d(w.cN, "", !0) + C);
		var T = "",
			_ = 0;
		try {
			for (var P, E, D = 0; k.t.lastIndex = D, P = k.t.exec(i), P;) E = y(i.substr(D, P.index - D), P[0]), D = P.index + E;
			for (y(i.substr(D)), w = k; w.parent; w = w.parent) w.cN && (C += M);
			return {
				r: _,
				value: C,
				language: t,
				top: k
			}
		} catch (I) {
			if (I.message && -1 !== I.message.indexOf("Illegal")) return {
				r: 0,
				value: e(i)
			};
			throw I
		}
	}
	function u(t, i) {
		i = i || L.languages || k(A);
		var n = {
			r: 0,
			value: e(t)
		},
			r = n;
		return i.filter(x).forEach(function(e) {
			var i = h(e, t, !1);
			i.language = e, i.r > r.r && (r = i), i.r > n.r && (r = n, n = i)
		}), r.language && (n.second_best = r), n
	}
	function p(t) {
		return L.tabReplace || L.useBR ? t.replace(_, function(t, e) {
			return L.useBR && "\n" === t ? "<br>" : L.tabReplace ? e.replace(/\t/g, L.tabReplace) : void 0
		}) : t
	}
	function d(t, e, i) {
		var n = e ? S[e] : i,
			r = [t.trim()];
		return t.match(/\bhljs\b/) || r.push("hljs"), -1 === t.indexOf(n) && r.push(n), r.join(" ").trim()
	}
	function f(t) {
		var e, i, n, s, c, f = o(t);
		r(f) || (L.useBR ? (e = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), e.innerHTML = t.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : e = t, c = e.textContent, n = f ? h(f, c, !0) : u(c), i = a(e), i.length && (s = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), s.innerHTML = n.value, n.value = l(i, a(s), c)), n.value = p(n.value), t.innerHTML = n.value, t.className = d(t.className, f, n.language), t.result = {
			language: n.language,
			re: n.r
		}, n.second_best && (t.second_best = {
			language: n.second_best.language,
			re: n.second_best.r
		}))
	}
	function g(t) {
		L = s(L, t)
	}
	function m() {
		if (!m.called) {
			m.called = !0;
			var t = document.querySelectorAll("pre code");
			w.forEach.call(t, f)
		}
	}
	function v() {
		addEventListener("DOMContentLoaded", m, !1), addEventListener("load", m, !1)
	}
	function y(e, i) {
		var n = A[e] = i(t);
		n.aliases && n.aliases.forEach(function(t) {
			S[t] = e
		})
	}
	function b() {
		return k(A)
	}
	function x(t) {
		return t = (t || "").toLowerCase(), A[t] || A[S[t]]
	}
	var w = [],
		k = Object.keys,
		A = {},
		S = {},
		C = /^(no-?highlight|plain|text)$/i,
		T = /\blang(?:uage)?-([\w-]+)\b/i,
		_ = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
		M = "</span>",
		L = {
			classPrefix: "hljs-",
			tabReplace: null,
			useBR: !1,
			languages: void 0
		},
		P = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;"
		};
	return t.highlight = h, t.highlightAuto = u, t.fixMarkup = p, t.highlightBlock = f, t.configure = g, t.initHighlighting = m, t.initHighlightingOnLoad = v, t.registerLanguage = y, t.listLanguages = b, t.getLanguage = x, t.inherit = s, t.IR = "[a-zA-Z]\\w*", t.UIR = "[a-zA-Z_]\\w*", t.NR = "\\b\\d+(\\.\\d+)?", t.CNR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", t.BNR = "\\b(0b[01]+)", t.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", t.BE = {
		b: "\\\\[\\s\\S]",
		r: 0
	}, t.ASM = {
		cN: "string",
		b: "'",
		e: "'",
		i: "\\n",
		c: [t.BE]
	}, t.QSM = {
		cN: "string",
		b: '"',
		e: '"',
		i: "\\n",
		c: [t.BE]
	}, t.PWM = {
		b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/
	}, t.C = function(e, i, n) {
		var r = t.inherit({
			cN: "comment",
			b: e,
			e: i,
			c: []
		}, n || {});
		return r.c.push(t.PWM), r.c.push({
			cN: "doctag",
			b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
			r: 0
		}), r
	}, t.CLCM = t.C("//", "$"), t.CBCM = t.C("/\\*", "\\*/"), t.HCM = t.C("#", "$"), t.NM = {
		cN: "number",
		b: t.NR,
		r: 0
	}, t.CNM = {
		cN: "number",
		b: t.CNR,
		r: 0
	}, t.BNM = {
		cN: "number",
		b: t.BNR,
		r: 0
	}, t.CSSNM = {
		cN: "number",
		b: t.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
		r: 0
	}, t.RM = {
		cN: "regexp",
		b: /\//,
		e: /\/[gimuy]*/,
		i: /\n/,
		c: [t.BE,
		{
			b: /\[/,
			e: /\]/,
			r: 0,
			c: [t.BE]
		}]
	}, t.TM = {
		cN: "title",
		b: t.IR,
		r: 0
	}, t.UTM = {
		cN: "title",
		b: t.UIR,
		r: 0
	}, t.METHOD_GUARD = {
		b: "\\.\\s*" + t.UIR,
		r: 0
	}, t
}), hljs.registerLanguage("css", function(t) {
	var e = "[a-zA-Z-][a-zA-Z0-9_-]*",
		i = {
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
					eW: !0,
					eE: !0,
					c: [{
						b: /[\w-]+\(/,
						rB: !0,
						c: [{
							cN: "built_in",
							b: /[\w-]+/
						}, {
							b: /\(/,
							e: /\)/,
							c: [t.ASM, t.QSM]
						}]
					},
					t.CSSNM, t.QSM, t.ASM, t.CBCM,
					{
						cN: "number",
						b: "#[0-9A-Fa-f]+"
					}, {
						cN: "meta",
						b: "!important"
					}]
				}
			}]
		};
	return {
		cI: !0,
		i: /[=\/|'\$]/,
		c: [t.CBCM,
		{
			cN: "selector-id",
			b: /#[A-Za-z0-9_-]+/
		}, {
			cN: "selector-class",
			b: /\.[A-Za-z0-9_-]+/
		}, {
			cN: "selector-attr",
			b: /\[/,
			e: /\]/,
			i: "$"
		}, {
			cN: "selector-pseudo",
			b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
		}, {
			b: "@(font-face|page)",
			l: "[a-z-]+",
			k: "font-face page"
		}, {
			b: "@",
			e: "[{;]",
			i: /:/,
			c: [{
				cN: "keyword",
				b: /\w+/
			}, {
				b: /\s/,
				eW: !0,
				eE: !0,
				r: 0,
				c: [t.ASM, t.QSM, t.CSSNM]
			}]
		}, {
			cN: "selector-tag",
			b: e,
			r: 0
		}, {
			b: "{",
			e: "}",
			i: /\S/,
			c: [t.CBCM, i]
		}]
	}
}), hljs.registerLanguage("javascript", function(t) {
	return {
		aliases: ["js", "jsx"],
		k: {
			keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
			literal: "true false null undefined NaN Infinity",
			built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
		},
		c: [{
			cN: "meta",
			r: 10,
			b: /^\s*['"]use (strict|asm)['"]/
		}, {
			cN: "meta",
			b: /^#!/,
			e: /$/
		},
		t.ASM, t.QSM,
		{
			cN: "string",
			b: "`",
			e: "`",
			c: [t.BE,
			{
				cN: "subst",
				b: "\\$\\{",
				e: "\\}"
			}]
		},
		t.CLCM, t.CBCM,
		{
			cN: "number",
			v: [{
				b: "\\b(0[bB][01]+)"
			}, {
				b: "\\b(0[oO][0-7]+)"
			}, {
				b: t.CNR
			}],
			r: 0
		}, {
			b: "(" + t.RSR + "|\\b(case|return|throw)\\b)\\s*",
			k: "return throw case",
			c: [t.CLCM, t.CBCM, t.RM,
			{
				b: /</,
				e: /(\/\w+|\w+\/)>/,
				sL: "xml",
				c: [{
					b: /<\w+\s*\/>/,
					skip: !0
				}, {
					b: /<\w+/,
					e: /(\/\w+|\w+\/)>/,
					skip: !0,
					c: ["self"]
				}]
			}],
			r: 0
		}, {
			cN: "function",
			bK: "function",
			e: /\{/,
			eE: !0,
			c: [t.inherit(t.TM, {
				b: /[A-Za-z$_][0-9A-Za-z$_]*/
			}),
			{
				cN: "params",
				b: /\(/,
				e: /\)/,
				eB: !0,
				eE: !0,
				c: [t.CLCM, t.CBCM]
			}],
			i: /\[|%/
		}, {
			b: /\$[(.]/
		},
		t.METHOD_GUARD,
		{
			cN: "class",
			bK: "class",
			e: /[{;=]/,
			eE: !0,
			i: /[:"\[\]]/,
			c: [{
				bK: "extends"
			},
			t.UTM]
		}, {
			bK: "constructor",
			e: /\{/,
			eE: !0
		}],
		i: /#(?!!)/
	}
}), hljs.registerLanguage("java", function(t) {
	var e = t.UIR + "(<" + t.UIR + "(\\s*,\\s*" + t.UIR + ")*>)?",
		i = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports",
		n = "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
		r = {
			cN: "number",
			b: n,
			r: 0
		};
	return {
		aliases: ["jsp"],
		k: i,
		i: /<\/|#/,
		c: [t.C("/\\*\\*", "\\*/", {
			r: 0,
			c: [{
				b: /\w+@/,
				r: 0
			}, {
				cN: "doctag",
				b: "@[A-Za-z]+"
			}]
		}), t.CLCM, t.CBCM, t.ASM, t.QSM,
		{
			cN: "class",
			bK: "class interface",
			e: /[{;=]/,
			eE: !0,
			k: "class interface",
			i: /[:"\[\]]/,
			c: [{
				bK: "extends implements"
			},
			t.UTM]
		}, {
			bK: "new throw return else",
			r: 0
		}, {
			cN: "function",
			b: "(" + e + "\\s+)+" + t.UIR + "\\s*\\(",
			rB: !0,
			e: /[{;=]/,
			eE: !0,
			k: i,
			c: [{
				b: t.UIR + "\\s*\\(",
				rB: !0,
				r: 0,
				c: [t.UTM]
			}, {
				cN: "params",
				b: /\(/,
				e: /\)/,
				k: i,
				r: 0,
				c: [t.ASM, t.QSM, t.CNM, t.CBCM]
			},
			t.CLCM, t.CBCM]
		},
		r,
		{
			cN: "meta",
			b: "@[A-Za-z]+"
		}]
	}
}), hljs.registerLanguage("go", function(t) {
	var e = {
		keyword: "break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",
		literal: "true false iota nil",
		built_in: "append cap close complex copy imag len make new panic print println real recover delete"
	};
	return {
		aliases: ["golang"],
		k: e,
		i: "</",
		c: [t.CLCM, t.CBCM,
		{
			cN: "string",
			v: [t.QSM,
			{
				b: "'",
				e: "[^\\\\]'"
			}, {
				b: "`",
				e: "`"
			}]
		}, {
			cN: "number",
			v: [{
				b: t.CNR + "[dflsi]",
				r: 1
			},
			t.CNM]
		}, {
			b: /:=/
		}, {
			cN: "function",
			bK: "func",
			e: /\s*\{/,
			eE: !0,
			c: [t.TM,
			{
				cN: "params",
				b: /\(/,
				e: /\)/,
				k: e,
				i: /["']/
			}]
		}]
	}
}), hljs.registerLanguage("xml", function(t) {
	var e = "[A-Za-z0-9\\._:-]+",
		i = {
			eW: !0,
			i: /</,
			r: 0,
			c: [{
				cN: "attr",
				b: e,
				r: 0
			}, {
				b: /=\s*/,
				r: 0,
				c: [{
					cN: "string",
					endsParent: !0,
					v: [{
						b: /"/,
						e: /"/
					}, {
						b: /'/,
						e: /'/
					}, {
						b: /[^\s"'=<>`]+/
					}]
				}]
			}]
		};
	return {
		aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
		cI: !0,
		c: [{
			cN: "meta",
			b: "<!DOCTYPE",
			e: ">",
			r: 10,
			c: [{
				b: "\\[",
				e: "\\]"
			}]
		},
		t.C("<!--", "-->", {
			r: 10
		}),
		{
			b: "<\\!\\[CDATA\\[",
			e: "\\]\\]>",
			r: 10
		}, {
			b: /<\?(php)?/,
			e: /\?>/,
			sL: "php",
			c: [{
				b: "/\\*",
				e: "\\*/",
				skip: !0
			}]
		}, {
			cN: "tag",
			b: "<style(?=\\s|>|$)",
			e: ">",
			k: {
				name: "style"
			},
			c: [i],
			starts: {
				e: "</style>",
				rE: !0,
				sL: ["css", "xml"]
			}
		}, {
			cN: "tag",
			b: "<script(?=\\s|>|$)",
			e: ">",
			k: {
				name: "script"
			},
			c: [i],
			starts: {
				e: "</script>",
				rE: !0,
				sL: ["actionscript", "javascript", "handlebars", "xml"]
			}
		}, {
			cN: "meta",
			v: [{
				b: /<\?xml/,
				e: /\?>/,
				r: 10
			}, {
				b: /<\?\w+/,
				e: /\?>/
			}]
		}, {
			cN: "tag",
			b: "</?",
			e: "/?>",
			c: [{
				cN: "name",
				b: /[^\/><\s]+/,
				r: 0
			},
			i]
		}]
	}
}), hljs.registerLanguage("sql", function(t) {
	var e = t.C("--", "$");
	return {
		cI: !0,
		i: /[<>{}*#]/,
		c: [{
			bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment",
			e: /;/,
			eW: !0,
			l: /[\w\.]+/,
			k: {
				keyword: "abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
				literal: "true false null",
				built_in: "array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"
			},
			c: [{
				cN: "string",
				b: "'",
				e: "'",
				c: [t.BE,
				{
					b: "''"
				}]
			}, {
				cN: "string",
				b: '"',
				e: '"',
				c: [t.BE,
				{
					b: '""'
				}]
			}, {
				cN: "string",
				b: "`",
				e: "`",
				c: [t.BE]
			},
			t.CNM, t.CBCM, e]
		},
		t.CBCM, e]
	}
}), hljs.registerLanguage("http", function(t) {
	var e = "HTTP/[0-9\\.]+";
	return {
		aliases: ["https"],
		i: "\\S",
		c: [{
			b: "^" + e,
			e: "$",
			c: [{
				cN: "number",
				b: "\\b\\d{3}\\b"
			}]
		}, {
			b: "^[A-Z]+ (.*?) " + e + "$",
			rB: !0,
			e: "$",
			c: [{
				cN: "string",
				b: " ",
				e: " ",
				eB: !0,
				eE: !0
			}, {
				b: e
			}, {
				cN: "keyword",
				b: "[A-Z]+"
			}]
		}, {
			cN: "attribute",
			b: "^\\w",
			e: ": ",
			eE: !0,
			i: "\\n|\\s|=",
			starts: {
				e: "$",
				r: 0
			}
		}, {
			b: "\\n\\n",
			starts: {
				sL: [],
				eW: !0
			}
		}]
	}
}), hljs.registerLanguage("r", function(t) {
	var e = "([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*";
	return {
		c: [t.HCM,
		{
			b: e,
			l: e,
			k: {
				keyword: "function if in break next repeat else for return switch while try tryCatch stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ...",
				literal: "NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10"
			},
			r: 0
		}, {
			cN: "number",
			b: "0[xX][0-9a-fA-F]+[Li]?\\b",
			r: 0
		}, {
			cN: "number",
			b: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
			r: 0
		}, {
			cN: "number",
			b: "\\d+\\.(?!\\d)(?:i\\b)?",
			r: 0
		}, {
			cN: "number",
			b: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
			r: 0
		}, {
			cN: "number",
			b: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
			r: 0
		}, {
			b: "`",
			e: "`",
			r: 0
		}, {
			cN: "string",
			c: [t.BE],
			v: [{
				b: '"',
				e: '"'
			}, {
				b: "'",
				e: "'"
			}]
		}]
	}
}), hljs.registerLanguage("markdown", function(t) {
	return {
		aliases: ["md", "mkdown", "mkd"],
		c: [{
			cN: "section",
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
			cN: "quote",
			b: "^>\\s+",
			e: "$"
		}, {
			cN: "code",
			v: [{
				b: "^```w*s*$",
				e: "^```s*$"
			}, {
				b: "`.+?`"
			}, {
				b: "^( {4}|	)",
				e: "$",
				r: 0
			}]
		}, {
			b: "^[-\\*]{3,}",
			e: "$"
		}, {
			b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
			rB: !0,
			c: [{
				cN: "string",
				b: "\\[",
				e: "\\]",
				eB: !0,
				rE: !0,
				r: 0
			}, {
				cN: "link",
				b: "\\]\\(",
				e: "\\)",
				eB: !0,
				eE: !0
			}, {
				cN: "symbol",
				b: "\\]\\[",
				e: "\\]",
				eB: !0,
				eE: !0
			}],
			r: 10
		}, {
			b: /^\[[^\n]+\]:/,
			rB: !0,
			c: [{
				cN: "symbol",
				b: /\[/,
				e: /\]/,
				eB: !0,
				eE: !0
			}, {
				cN: "link",
				b: /:\s*/,
				e: /$/,
				eB: !0
			}]
		}]
	}
}), hljs.registerLanguage("nginx", function(t) {
	var e = {
		cN: "variable",
		v: [{
			b: /\$\d+/
		}, {
			b: /\$\{/,
			e: /}/
		}, {
			b: "[\\$\\@]" + t.UIR
		}]
	},
		i = {
			eW: !0,
			l: "[a-z/_]+",
			k: {
				literal: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
			},
			r: 0,
			i: "=>",
			c: [t.HCM,
			{
				cN: "string",
				c: [t.BE, e],
				v: [{
					b: /"/,
					e: /"/
				}, {
					b: /'/,
					e: /'/
				}]
			}, {
				b: "([a-z]+):/",
				e: "\\s",
				eW: !0,
				eE: !0,
				c: [e]
			}, {
				cN: "regexp",
				c: [t.BE, e],
				v: [{
					b: "\\s\\^",
					e: "\\s|{|;",
					rE: !0
				}, {
					b: "~\\*?\\s+",
					e: "\\s|{|;",
					rE: !0
				}, {
					b: "\\*(\\.[a-z\\-]+)+"
				}, {
					b: "([a-z\\-]+\\.)+\\*"
				}]
			}, {
				cN: "number",
				b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
			}, {
				cN: "number",
				b: "\\b\\d+[kKmMgGdshdwy]*\\b",
				r: 0
			},
			e]
		};
	return {
		aliases: ["nginxconf"],
		c: [t.HCM,
		{
			b: t.UIR + "\\s+{",
			rB: !0,
			e: "{",
			c: [{
				cN: "section",
				b: t.UIR
			}],
			r: 0
		}, {
			b: t.UIR + "\\s",
			e: ";|{",
			rB: !0,
			c: [{
				cN: "attribute",
				b: t.UIR,
				starts: i
			}],
			r: 0
		}],
		i: "[^\\s\\}]"
	}
}), hljs.registerLanguage("bash", function(t) {
	var e = {
		cN: "variable",
		v: [{
			b: /\$[\w\d#@][\w\d_]*/
		}, {
			b: /\$\{(.*?)}/
		}]
	},
		i = {
			cN: "string",
			b: /"/,
			e: /"/,
			c: [t.BE, e,
			{
				cN: "variable",
				b: /\$\(/,
				e: /\)/,
				c: [t.BE]
			}]
		},
		n = {
			cN: "string",
			b: /'/,
			e: /'/
		};
	return {
		aliases: ["sh", "zsh"],
		l: /-?[a-z\._]+/,
		k: {
			keyword: "if then else elif fi for while in do done case esac function",
			literal: "true false",
			built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
			_: "-ne -eq -lt -gt -f -d -e -s -l -a"
		},
		c: [{
			cN: "meta",
			b: /^#![^\n]+sh\s*$/,
			r: 10
		}, {
			cN: "function",
			b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
			rB: !0,
			c: [t.inherit(t.TM, {
				b: /\w[\w\d_]*/
			})],
			r: 0
		},
		t.HCM, i, n, e]
	}
}), hljs.registerLanguage("cs", function(t) {
	var e = {
		keyword: "abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async nameof ascending descending from get group into join let orderby partial select set value var where yield",
		literal: "null false true"
	},
		i = {
			cN: "string",
			b: '@"',
			e: '"',
			c: [{
				b: '""'
			}]
		},
		n = t.inherit(i, {
			i: /\n/
		}),
		r = {
			cN: "subst",
			b: "{",
			e: "}",
			k: e
		},
		o = t.inherit(r, {
			i: /\n/
		}),
		s = {
			cN: "string",
			b: /\$"/,
			e: '"',
			i: /\n/,
			c: [{
				b: "{{"
			}, {
				b: "}}"
			},
			t.BE, o]
		},
		a = {
			cN: "string",
			b: /\$@"/,
			e: '"',
			c: [{
				b: "{{"
			}, {
				b: "}}"
			}, {
				b: '""'
			},
			r]
		},
		l = t.inherit(a, {
			i: /\n/,
			c: [{
				b: "{{"
			}, {
				b: "}}"
			}, {
				b: '""'
			},
			o]
		});
	r.c = [a, s, i, t.ASM, t.QSM, t.CNM, t.CBCM], o.c = [l, s, n, t.ASM, t.QSM, t.CNM, t.inherit(t.CBCM, {
		i: /\n/
	})];
	var c = {
		v: [a, s, i, t.ASM, t.QSM]
	},
		h = t.IR + "(<" + t.IR + ">)?(\\[\\])?";
	return {
		aliases: ["csharp"],
		k: e,
		i: /::/,
		c: [t.C("///", "$", {
			rB: !0,
			c: [{
				cN: "doctag",
				v: [{
					b: "///",
					r: 0
				}, {
					b: "<!--|-->"
				}, {
					b: "</?",
					e: ">"
				}]
			}]
		}), t.CLCM, t.CBCM,
		{
			cN: "meta",
			b: "#",
			e: "$",
			k: {
				"meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum"
			}
		},
		c, t.CNM,
		{
			bK: "class interface",
			e: /[{;=]/,
			i: /[^\s:]/,
			c: [t.TM, t.CLCM, t.CBCM]
		}, {
			bK: "namespace",
			e: /[{;=]/,
			i: /[^\s:]/,
			c: [t.inherit(t.TM, {
				b: "[a-zA-Z](\\.?\\w)*"
			}), t.CLCM, t.CBCM]
		}, {
			bK: "new return throw await",
			r: 0
		}, {
			cN: "function",
			b: "(" + h + "\\s+)+" + t.IR + "\\s*\\(",
			rB: !0,
			e: /[{;=]/,
			eE: !0,
			k: e,
			c: [{
				b: t.IR + "\\s*\\(",
				rB: !0,
				c: [t.TM],
				r: 0
			}, {
				cN: "params",
				b: /\(/,
				e: /\)/,
				eB: !0,
				eE: !0,
				k: e,
				r: 0,
				c: [c, t.CNM, t.CBCM]
			},
			t.CLCM, t.CBCM]
		}]
	}
}), hljs.registerLanguage("php", function(t) {
	var e = {
		b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"
	},
		i = {
			cN: "meta",
			b: /<\?(php)?|\?>/
		},
		n = {
			cN: "string",
			c: [t.BE, i],
			v: [{
				b: 'b"',
				e: '"'
			}, {
				b: "b'",
				e: "'"
			},
			t.inherit(t.ASM, {
				i: null
			}), t.inherit(t.QSM, {
				i: null
			})]
		},
		r = {
			v: [t.BNM, t.CNM]
		};
	return {
		aliases: ["php3", "php4", "php5", "php6"],
		cI: !0,
		k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
		c: [t.HCM, t.C("//", "$", {
			c: [i]
		}), t.C("/\\*", "\\*/", {
			c: [{
				cN: "doctag",
				b: "@[A-Za-z]+"
			}]
		}), t.C("__halt_compiler.+?;", !1, {
			eW: !0,
			k: "__halt_compiler",
			l: t.UIR
		}),
		{
			cN: "string",
			b: /<<<['"]?\w+['"]?$/,
			e: /^\w+;?$/,
			c: [t.BE,
			{
				cN: "subst",
				v: [{
					b: /\$\w+/
				}, {
					b: /\{\$/,
					e: /\}/
				}]
			}]
		},
		i,
		{
			cN: "keyword",
			b: /\$this\b/
		},
		e,
		{
			b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
		}, {
			cN: "function",
			bK: "function",
			e: /[;{]/,
			eE: !0,
			i: "\\$|\\[|%",
			c: [t.UTM,
			{
				cN: "params",
				b: "\\(",
				e: "\\)",
				c: ["self", e, t.CBCM, n, r]
			}]
		}, {
			cN: "class",
			bK: "class interface",
			e: "{",
			eE: !0,
			i: /[:\(\$"]/,
			c: [{
				bK: "extends implements"
			},
			t.UTM]
		}, {
			bK: "namespace",
			e: ";",
			i: /[\.']/,
			c: [t.UTM]
		}, {
			bK: "use",
			e: ";",
			c: [t.UTM]
		}, {
			b: "=>"
		},
		n, r]
	}
}), hljs.registerLanguage("json", function(t) {
	var e = {
		literal: "true false null"
	},
		i = [t.QSM, t.CNM],
		n = {
			e: ",",
			eW: !0,
			eE: !0,
			c: i,
			k: e
		},
		r = {
			b: "{",
			e: "}",
			c: [{
				cN: "attr",
				b: /"/,
				e: /"/,
				c: [t.BE],
				i: "\\n"
			},
			t.inherit(n, {
				b: /:/
			})],
			i: "\\S"
		},
		o = {
			b: "\\[",
			e: "\\]",
			c: [t.inherit(n)],
			i: "\\S"
		};
	return i.splice(i.length, 0, r, o), {
		c: i,
		k: e,
		i: "\\S"
	}
});
var docElem = document.documentElement,
	header = $("header"),
	body = $("body"),
	didScroll = !1,
	inited = !1,
	changeHeaderOn = 150,
	cureentSroll = 0,
	documentHeight = $(document).height(),
	imTop = $(".os-top"),
	imTopShow = !1,
	osShow = !1,
	osDrag = {
		isDragging: !1,
		startX: null,
		startY: null,
		endX: null,
		endY: null,
		x: null,
		y: null,
		el: $(".os-main"),
		docHeight: null,
		docWidth: null
	},
	isXs = !1,
	emailReg = /^[a-zA-Z0-9]+[a-zA-Z\d\.\-\_]+@[a-zA-Z\d\-]+(\.[a-zA-Z]+)$/,
	nav = null,
	isShop = !1;
if ($(".lazy-load").length > 0 && $(".lazy-load").unveil(200), $('[data-toggle="tooltip"]').tooltip(), $("a.dropdown-toggle, .dropdown-menu").hover(function() {
	isXs || $(this).parent().addClass("open")
}, function() {
	isXs || $(this).parent().removeClass("open")
}), $("a.dropdown-toggle, .dropdown-menu").click(function() {
	if (isXs) {
		var t = $(this).parent();
		t.hasClass("open") || $(".navbar-nav .open").removeClass("open"), $(this).parent().toggleClass("open")
	}
}), $(".os-top").click(function() {
	$("body").animate({
		scrollTop: "0px"
	}, 500)
}), $(".os-close").click(function() {
	switchOS(!0)
}), $(".os-open-icon,.os-open-text").click(function() {
	switchOS(!1)
}), updateIsXs(), $(window).resize(updateIsXs), $(".os-main").mousemove(function(t) {
	if (console.log(osDrag.isDragging), osDrag.isDragging) {
		if (osDrag.endX = t.clientX, osDrag.endY = t.clientY, osDrag.startX === osDrag.endX && osDrag.startY === osDrag.endY) return !1;
		null !== osDrag.x && null !== osDrag.y || (osDrag.x = osDrag.el.offset().left, osDrag.y = parseInt(osDrag.el.css("top"))), null !== osDrag.docHeight && null !== osDrag.docWidth || (osDrag.docHeight = $(window).height() - osDrag.el.height() - 70, osDrag.docWidth = $(document).width() - osDrag.el.width() - 70), osDrag.x = osDrag.x + (osDrag.endX - osDrag.startX), osDrag.y = osDrag.y + (osDrag.endY - osDrag.startY), osDrag.x <= 20 && (osDrag.x = 20), osDrag.y <= 20 && (osDrag.y = 20), osDrag.x >= osDrag.docWidth && (osDrag.x = osDrag.docWidth), osDrag.y >= osDrag.docHeight && (osDrag.y = osDrag.docHeight), osDrag.el.css({
			left: osDrag.x,
			top: osDrag.y
		}), osDrag.startX = osDrag.endX, osDrag.startY = osDrag.endY
	}
}), $(".os-title").mousedown(function(t) {
	osDrag.startX = t.clientX, osDrag.startY = t.clientY, osDrag.isDragging = !0
}), $(".nav-sidebar>li>div").click(function() {
	return $(this).parent().hasClass("active") ? !1 : ($(".nav-sidebar>li.active").find("ul").slideUp("slow"), $(".nav-sidebar>li.active").removeClass("active"), $(this).parent().addClass("active"), void $(this).parent().find("ul").slideDown("slow"))
}), $("#sidebar-open").click(function() {
	$(".sidebar-wrapper").addClass("toggled")
}), $("#sidebar-close").click(function() {
	$(".sidebar-wrapper").removeClass("toggled")
}), $(document).mouseup(function() {
	osDrag.isDragging = !1
}), nav = $("header").data("nav"), isShop = /^shop-[a-z]+/.test(nav), null !== nav && "" !== nav) {
	var navEl = $('.navbar-nav li[data-nav="' + nav + '"]');
	navEl.length > 0 && (navEl.addClass("active"), navEl.parent().hasClass("dropdown-menu") && navEl.parent().parent().addClass("active"))
}
$(".pagination li.disabled, .pagination li.active").click(function() {
	return !1
}), init();
var _hmt = _hmt || [];
!
function() {
	var t = document.createElement("script");
	t.src = "//hm.baidu.com/hm.js?e561159f9fc1f6dcc181c90202d3353a";
	var e = document.getElementsByTagName("script")[0];
	e.parentNode.insertBefore(t, e)
}();