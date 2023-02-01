const O = '<div class="twrapper-message" id="{{data-position}}"></div>';
const k = `<div class="tmessage {{data-theme}}" {{data-custom-style}}>\r
    <i class="{{data-icon}} tmessage__icon"></i>\r
    <section class="tmessage__content" id="talk">\r
        <div>\r
            <h3>{{data-tittle-content}}</h3>\r
            <p>{{data-text-content}}</p>\r
        </div>\r
    </section>\r
    <button class="tmessage__close">\r
        <i class="icon-times-circle"></i>\r
    </button>\r
</div>`, L = ({ data: o = {}, template: a = "" }) => {
  let t = a;
  return Object.entries(o).forEach((r) => {
    t = t.replaceAll(r[0], r[1]);
  }), t;
}, C = ({ title: o = "", content: a = "", type: t = "", animateIn: r = "", animateOut: n = "", timeout: c = 8e3, removeEmpty: i = !1, style: s = "" }) => {
  var h, f, b;
  const m = {
    error: "icon-times",
    warning: "icon-exclamation",
    success: "icon-check",
    info: "icon-info"
  }, v = {
    error: `tmessage--error ${r}`,
    warning: `tmessage--warning ${r}`,
    success: `tmessage--success ${r}`,
    info: `tmessage--info ${r}`
  }, _ = L({
    data: {
      "{{data-custom-style}}": !!s && `style="${s}"` || "",
      "{{data-tittle-content}}": o,
      "{{data-text-content}}": a,
      "{{data-icon}}": (h = m[t == null ? void 0 : t.toLowerCase()]) != null ? h : "icon-info",
      "{{data-theme}}": (f = v[t == null ? void 0 : t.toLowerCase()]) != null ? f : ""
    },
    template: k
  }), g = new DOMParser().parseFromString(_, "text/html").body.firstChild, x = new Event("beginBuild"), p = (e) => {
    e.classList.replace(r, n);
  }, d = (e) => {
    setTimeout((w) => {
      var l;
      ((l = e == null ? void 0 : e.textContent) == null ? void 0 : l.trim()) === "" && i && e.remove();
    }, 100, e);
  }, $ = (e) => {
    setTimeout((w) => {
      var l;
      (l = e.target.querySelector("button")) == null || l.removeEventListener("click", u), p(e.target), setTimeout((A) => {
        d(e.target.closest(".twrapper-message")), e.target.remove();
      }, 400, e);
    }, c, e);
  }, u = (e) => {
    p(e.target.parentElement), setTimeout((w) => {
      d(e.target.closest(".twrapper-message")), e.target.parentElement.remove();
    }, 400, e);
  };
  return g.addEventListener("beginBuild", $, { once: !0 }), (b = g.querySelector("button")) == null || b.addEventListener("click", u, { once: !0 }), g.dispatchEvent(x), g;
};
function M(o) {
  var n;
  const t = (n = {
    bottomleft: "twrapper-message--bottom-left",
    bottomcenter: "twrapper-message--bottom-center",
    bottomright: "twrapper-message--bottom-right",
    topleft: "twrapper-message--top-left",
    topcenter: "twrapper-message--top-center",
    topright: "twrapper-message--top-right"
  }[o == null ? void 0 : o.toLowerCase()]) != null ? n : "twrapper-message--bottom-left";
  let r = document.getElementById(t);
  if (!r) {
    const c = new DOMParser(), i = L({
      data: {
        "{{data-position}}": t
      },
      template: O
    }), s = c.parseFromString(i, "text/html").body.firstChild;
    document.body.insertAdjacentElement("beforeend", s), r = s;
  }
  return r;
}
const E = {
  data: {
    title: "",
    content: "",
    timeout: 8e3,
    type: "info",
    removeEmpty: !0
  },
  position: "bottomleft"
}, B = (o = E) => {
  const { data: a, position: t } = Object.assign({}, E, o), r = {
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
  }, n = {
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
  }, c = r[t == null ? void 0 : t.toLowerCase()], i = n[t == null ? void 0 : t.toLowerCase()], s = { ...a, ...c && { animateIn: c }, ...i && { animateOut: i } }, m = M(t);
  (t == null ? void 0 : t.toLocaleLowerCase()) === "topcenter" ? m.prepend(C(s)) : m.appendChild(C(s));
};
export {
  B as addMessage
};
