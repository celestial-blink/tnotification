const x = '<div class="twrapper-message" id="{{data-position}}"></div>';
const $ = `<div class="tmessage {{data-theme}}">\r
    <i class="fas {{data-icon}} tmessage__icon"></i>\r
    <section class="tmessage__content" id="talk">\r
        <div>\r
            <h3>{{data-tittle-content}}</h3>\r
            <p>{{data-text-content}}</p>\r
        </div>\r
    </section>\r
    <button class="tmessage__close">\r
        <i class="fas fa-times-circle"></i>\r
    </button>\r
</div>`, C = ({ data: s = {}, template: e = "" }) => {
  let r = e;
  return Object.entries(s).forEach((a) => {
    r = r.replaceAll(a[0], a[1]);
  }), r;
}, w = ({ title: s = "", content: e = "", type: r = "", animateIn: a = "", animateOut: n = "", timeout: c = 8e3, removeEmpty: i = !1 }) => {
  var u, h, f;
  const o = {
    error: "fa-times",
    warning: "fa-exclamation",
    success: "fa-check",
    info: "fa-info"
  }, L = {
    error: `tmessage--error ${a}`,
    warning: `tmessage--warning ${a}`,
    success: `tmessage--success ${a}`,
    info: `tmessage--info ${a}`
  }, E = C({
    data: {
      "{{data-tittle-content}}": s,
      "{{data-text-content}}": e,
      "{{data-icon}}": (u = o[r == null ? void 0 : r.toLowerCase()]) != null ? u : "",
      "{{data-theme}}": (h = L[r == null ? void 0 : r.toLowerCase()]) != null ? h : ""
    },
    template: $
  }), m = new DOMParser().parseFromString(E, "text/html").body.firstChild, _ = new Event("beginBuild"), g = (t) => {
    t.classList.replace(a, n);
  }, p = (t) => {
    setTimeout((b) => {
      var l;
      ((l = t == null ? void 0 : t.textContent) == null ? void 0 : l.trim()) === "" && i && t.remove();
    }, 100, t);
  }, v = (t) => {
    setTimeout((b) => {
      var l;
      (l = t.target.querySelector("button")) == null || l.removeEventListener("click", d), g(t.target), setTimeout((O) => {
        p(t.target.closest(".twrapper-message")), t.target.remove();
      }, 390, t);
    }, c, t);
  }, d = (t) => {
    g(t.target.parentElement), setTimeout((b) => {
      p(t.target.closest(".twrapper-message")), t.target.parentElement.remove();
    }, 390, t);
  };
  return m.addEventListener("beginBuild", v, { once: !0 }), (f = m.querySelector("button")) == null || f.addEventListener("click", d, { once: !0 }), m.dispatchEvent(_), m;
};
function k(s) {
  var n;
  const r = (n = {
    bottomleft: "twrapper-message--bottom-left",
    bottomcenter: "twrapper-message--bottom-center",
    bottomright: "twrapper-message--bottom-right",
    topleft: "twrapper-message--top-left",
    topcenter: "twrapper-message--top-center",
    topright: "twrapper-message--top-right"
  }[s == null ? void 0 : s.toLowerCase()]) != null ? n : "twrapper-message--bottom-left";
  let a = document.getElementById(r);
  if (!a) {
    const c = new DOMParser(), i = C({
      data: {
        "{{data-position}}": r
      },
      template: x
    }), o = c.parseFromString(i, "text/html").body.firstChild;
    document.body.insertAdjacentElement("beforeend", o), a = o;
  }
  return a;
}
const T = ({ data: s = {}, position: e = "bottomleft" }) => {
  const r = {
    get left() {
      return "animate--in-left";
    },
    get right() {
      return "animate--in-right";
    },
    get bottomleft() {
      return this.left;
    },
    get bottomright() {
      return this.right;
    },
    bottomcenter: "animate--in-bottom-center",
    topcenter: "animate--in-top-center",
    get topleft() {
      return this.left;
    },
    get topright() {
      return this.right;
    }
  }, a = {
    get left() {
      return "animate--out-left";
    },
    get right() {
      return "animate--out-right";
    },
    get bottomleft() {
      return this.left;
    },
    get bottomright() {
      return this.right;
    },
    bottomcenter: "animate--out-bottom-center",
    topcenter: "animate--out-top-center",
    get topleft() {
      return this.left;
    },
    get topright() {
      return this.right;
    }
  }, n = r[e == null ? void 0 : e.toLowerCase()], c = a[e == null ? void 0 : e.toLowerCase()], i = { ...s, ...n && { animateIn: n }, ...c && { animateOut: c } }, o = k(e);
  (e == null ? void 0 : e.toLocaleLowerCase()) === "topcenter" ? o.prepend(w(i)) : o.appendChild(w(i));
};
export {
  T as addMessage
};
