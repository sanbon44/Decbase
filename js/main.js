$(document).ready(function () {
    $('.what-we-do__items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 1,
            }
            }
        ]
    });
    $('.testimonials__row').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 1,
            }
            }
        ]
    });
});

const menuBurder = document.querySelector('.menu__burger');
const menuNav = document.querySelector('.menu__nav');
const body = document.querySelector('body');
const linkNavs = document.querySelectorAll('.menu__link');
if (menuBurder &&menuNav) {
    menuBurder.addEventListener("click", function (e) {
        menuBurder.classList.toggle('menu-active');
    menuNav.classList.toggle('menu-active');
        body.classList.toggle('lock');
    });
}
console.log(linkNavs.length);
if (linkNavs.length && menuNav && body && menuBurder) {
    linkNavs.forEach(element => {
        element.addEventListener("click", function (e) {
            menuNav.classList.remove('menu-active')
            body.classList.remove('lock');
            menuBurder.classList.remove('menu-active');
        });
    });

}
// Модуль "показать еще" =======================================================================================================================================================================================================================
/*
Документация по работе в шаблоне:
data-showmore-media = "768,min"
data-showmore="size/items"
data-showmore-content="размер/кол-во"
data-showmore-button="скорость"
Сниппет (HTML): showmore
стили модуля находятся в "base_style/_showmore"
*/

// Если скрипт не работает то нужно задать медиазапрос в html файл: data-showmore-media="300,min"

(() => {
  "use strict";
  let t = (t, e = 500, o = 0) => {
    t.classList.contains("_slide") ||
      (t.classList.add("_slide"),
        (t.style.transitionProperty = "height, margin, padding"),
        (t.style.transitionDuration = e + "ms"),
        (t.style.height = `${t.offsetHeight}px`),
        t.offsetHeight,
        (t.style.overflow = "hidden"),
        (t.style.height = o ? `${o}px` : "0px"),
        (t.style.paddingTop = 0),
        (t.style.paddingBottom = 0),
        (t.style.marginTop = 0),
        (t.style.marginBottom = 0),
        window.setTimeout(() => {
          (t.hidden = !o),
            !o && t.style.removeProperty("height"),
            t.style.removeProperty("padding-top"),
            t.style.removeProperty("padding-bottom"),
            t.style.removeProperty("margin-top"),
            t.style.removeProperty("margin-bottom"),
            !o && t.style.removeProperty("overflow"),
            t.style.removeProperty("transition-duration"),
            t.style.removeProperty("transition-property"),
            t.classList.remove("_slide");
        }, e));
  },
    e = (t, e = 500, o = 0) => {
      if (!t.classList.contains("_slide")) {
        t.classList.add("_slide"),
          (t.hidden = !t.hidden && null),
          o && t.style.removeProperty("height");
        let r = t.offsetHeight;
        (t.style.overflow = "hidden"),
          (t.style.height = o ? `${o}px` : "0px"),
          (t.style.paddingTop = 0),
          (t.style.paddingBottom = 0),
          (t.style.marginTop = 0),
          (t.style.marginBottom = 0),
          t.offsetHeight,
          (t.style.transitionProperty = "height, margin, padding"),
          (t.style.transitionDuration = e + "ms"),
          (t.style.height = r + "px"),
          t.style.removeProperty("padding-top"),
          t.style.removeProperty("padding-bottom"),
          t.style.removeProperty("margin-top"),
          t.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            t.style.removeProperty("height"),
              t.style.removeProperty("overflow"),
              t.style.removeProperty("transition-duration"),
              t.style.removeProperty("transition-property"),
              t.classList.remove("_slide");
          }, e);
      }
    };
  function o(t, e) {
    const o = Array.from(t).filter(function (t, o, r) {
      if (t.dataset[e]) return t.dataset[e].split(",")[0];
    });
    if (o.length) {
      const t = [];
      o.forEach((o) => {
        const r = {},
          s = o.dataset[e].split(",");
        (r.value = s[0]),
          (r.type = s[1] ? s[1].trim() : "max"),
          (r.item = o),
          t.push(r);
      });
      let r = t.map(function (t) {
        return (
          "(" + t.type + "-width: " + t.value + "px)," + t.value + "," + t.type
        );
      });
      r = (function (t) {
        return t.filter(function (t, e, o) {
          return o.indexOf(t) === e;
        });
      })(r);
      const s = [];
      if (r.length)
        return (
          r.forEach((e) => {
            const o = e.split(","),
              r = o[1],
              n = o[2],
              i = window.matchMedia(o[0]),
              a = t.filter(function (t) {
                if (t.value === r && t.type === n) return !0;
              });
            s.push({ itemsArray: a, matchMedia: i });
          }),
          s
        );
    }
  }
  let r = !1;
  setTimeout(() => {
    if (r) {
      let t = new Event("windowScroll");
      window.addEventListener("scroll", function (e) {
        document.dispatchEvent(t);
      });
    }
  }, 0),
    (window.FLS = !0),
    (function (t) {
      let e = new Image();
      (e.onload = e.onerror =
        function () {
          t(2 == e.height);
        }),
        (e.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (t) {
      let e = !0 === t ? "webp" : "no-webp";
      document.documentElement.classList.add(e);
    }),
    (function () {
      const r = document.querySelectorAll("[data-showmore]");
      let s, n;
      function i(t) {
        t.forEach((t) => {
          a(t.itemsArray, t.matchMedia);
        });
      }
      function a(o, r) {
        o.forEach((o) => {
          !(function (o, r = !1) {
            o = r ? o.item : o;
            const s = o.querySelector("[data-showmore-content]"),
              n = o.querySelector("[data-showmore-button]"),
              i = l(o, s);
            (r.matches || !r) &&
              i <
              (function (t) {
                let e = t.offsetHeight;
                t.style.removeProperty("height");
                let o = t.offsetHeight;
                return (t.style.height = `${e}px`), o;
              })(s)
              ? (t(s, 0, i), (n.hidden = !1))
              : (e(s, 0, i), (n.hidden = !0));
          })(o, r);
        });
      }
      function l(t, e) {
        let o = 0;
        if ("items" === (t.dataset.showmore ? t.dataset.showmore : "size")) {
          const t = e.dataset.showmoreContent ? e.dataset.showmoreContent : 3,
            r = e.children;
          for (let e = 1; e < r.length; e++) {
            if (((o += r[e - 1].offsetHeight), e === t)) break;
          }
        } else {
          o = e.dataset.showmoreContent ? e.dataset.showmoreContent : 150;
        }
        return o;
      }
      function d(o) {
        const r = o.target,
          d = o.type;
        if ("click" === d) {
          if (r.closest("[data-showmore-button]")) {
            const o = r
              .closest("[data-showmore-button]")
              .closest("[data-showmore]"),
              s = o.querySelector("[data-showmore-content]"),
              n = o.dataset.showmoreButton ? o.dataset.showmoreButton : "500",
              i = l(o, s);
            s.classList.contains("_slide") ||
              (o.classList.contains("_showmore-active")
                ? t(s, n, i)
                : e(s, n, i),
                o.classList.toggle("_showmore-active"));
          }
        } else "resize" === d && (s.length && a(s), n.length && i(n));
      }
      r.length &&
        ((s = Array.from(r).filter(function (t, e, o) {
          return !t.dataset.showmoreMedia;
        })),
          s.length && a(s),
          document.addEventListener("click", d),
          window.addEventListener("resize", d),
          (n = o(r, "showmoreMedia")),
          n &&
          n.length &&
          (n.forEach((t) => {
            t.matchMedia.addEventListener("change", function () {
              a(t.itemsArray, t.matchMedia);
            });
          }),
            i(n)));
    })();
})();