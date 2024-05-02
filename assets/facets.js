class FacetFiltersForm extends HTMLElement {
  constructor() {
    super(),
      (this.onActiveFilterClick = this.onActiveFilterClick.bind(this)),
      (this.debouncedOnSubmit = debounce((e) => {
        this.onSubmitHandler(e);
      }, 500)),
      this.querySelector("form"),
      this.querySelector("form").addEventListener(
        "input",
        this.debouncedOnSubmit.bind(this)
      );
    let e = this.querySelector("#FacetsWrapperDesktop");
    e && e.addEventListener("keyup", onKeyUpEscape);
  }
  static setListeners() {
    let e = (e) => {
      let t = e.state
        ? e.state.searchParams
        : FacetFiltersForm.searchParamsInitial;
      t !== FacetFiltersForm.searchParamsPrev &&
        FacetFiltersForm.renderPage(t, null, !1);
    };
    window.addEventListener("popstate", e);
  }
  static toggleActiveFacets(e = !0) {
    document.querySelectorAll(".js-facet-remove").forEach((t) => {
      t.classList.toggle("disabled", e);
    });
  }
  static renderPage(e, t, i = !0) {
    FacetFiltersForm.searchParamsPrev = e;
    let r = FacetFiltersForm.getSections(),
      n = document.getElementById("ProductCount"),
      s = document.getElementById("ProductCountDesktop");
    document
      .getElementById("ProductGridContainer")
      .querySelector(".collection")
      .classList.add("loading"),
      n && n.classList.add("loading"),
      s && s.classList.add("loading"),
      r.forEach((i) => {
        let r = `${window.location.pathname}?section_id=${i.section}&${e}`,
          n = (e) => e.url === r;
        FacetFiltersForm.filterData.some(n)
          ? FacetFiltersForm.renderSectionFromCache(n, t)
          : FacetFiltersForm.renderSectionFromFetch(r, t);
      }),
      i && FacetFiltersForm.updateURLHash(e);
  }
  static renderSectionFromFetch(e, t) {
    fetch(e)
      .then((e) => e.text())
      .then((i) => {
        let r = i;
        (FacetFiltersForm.filterData = [
          ...FacetFiltersForm.filterData,
          { html: r, url: e },
        ]),
          FacetFiltersForm.renderFilters(r, t),
          FacetFiltersForm.renderProductGridContainer(r),
          FacetFiltersForm.renderProductCount(r);
      });
  }
  static renderSectionFromCache(e, t) {
    let i = FacetFiltersForm.filterData.find(e).html;
    FacetFiltersForm.renderFilters(i, t),
      FacetFiltersForm.renderProductGridContainer(i),
      FacetFiltersForm.renderProductCount(i);
  }
  static renderProductGridContainer(e) {
    document.getElementById("ProductGridContainer").innerHTML = new DOMParser()
      .parseFromString(e, "text/html")
      .getElementById("ProductGridContainer").innerHTML;
  }
  static renderProductCount(e) {
    let t = new DOMParser()
        .parseFromString(e, "text/html")
        .getElementById("ProductCount").innerHTML,
      i = document.getElementById("ProductCount"),
      r = document.getElementById("ProductCountDesktop");
    (i.innerHTML = t),
      i.classList.remove("loading"),
      r && ((r.innerHTML = t), r.classList.remove("loading"));
  }
  static renderFilters(e, t) {
    let i = new DOMParser().parseFromString(e, "text/html"),
      r = i.querySelectorAll(
        "#FacetFiltersForm .js-filter, #FacetFiltersFormMobile .js-filter"
      ),
      n = (e) => {
        let i = t ? t.target.closest(".js-filter") : void 0;
        return !!i && e.dataset.index === i.dataset.index;
      },
      s = Array.from(r).filter((e) => !n(e)),
      o = Array.from(r).find(n);
    s.forEach((e) => {
      document.querySelector(
        `.js-filter[data-index="${e.dataset.index}"]`
      ).innerHTML = e.innerHTML;
    }),
      FacetFiltersForm.renderActiveFacets(i),
      FacetFiltersForm.renderAdditionalElements(i),
      o && FacetFiltersForm.renderCounts(o, t.target.closest(".js-filter"));
  }
  static renderActiveFacets(e) {
    [".active-facets-mobile", ".active-facets-desktop"].forEach((t) => {
      let i = e.querySelector(t);
      i && (document.querySelector(t).innerHTML = i.innerHTML);
    }),
      FacetFiltersForm.toggleActiveFacets(!1);
  }
  static renderAdditionalElements(e) {
    [".mobile-facets__open", ".mobile-facets__count", ".sorting"].forEach(
      (t) => {
        e.querySelector(t) &&
          (document.querySelector(t).innerHTML = e.querySelector(t).innerHTML);
      }
    ),
      document
        .getElementById("FacetFiltersFormMobile")
        .closest("menu-drawer")
        .bindEvents();
  }
  static renderCounts(e, t) {
    let i = t.querySelector(".facets__selected");
    e.querySelector(".facets__selected") &&
      i &&
      (t.querySelector(".facets__selected").outerHTML =
        e.querySelector(".facets__selected").outerHTML);
  }
  static updateURLHash(e) {
    history.pushState(
      { searchParams: e },
      "",
      `${window.location.pathname}${e && "?".concat(e)}`
    );
  }
  static getSections() {
    return [{ section: document.getElementById("product-grid").dataset.id }];
  }
  onSubmitHandler(e) {
    e.preventDefault();
    let t = new FormData(e.target.closest("form")),
      i = new URLSearchParams(t).toString();
    FacetFiltersForm.renderPage(i, e),
      setTimeout(function () {
        var e = new Swiper(".list_product-colors", {
          slidesPerView: 4,
          cssMode: !0,
          slidesPerGroup: 4,
          loopedSlides: 4,
          navigation: {
            nextEl: ".icon-next",
            breakpoints: {
              1920: { slidesPerView: 4 },
              1028: { slidesPerView: 4 },
              480: { slidesPerView: 4 },
            },
          },
        });
        function t(e) {
          var t = $(e.currentTarget);
          t[0].scrollWidth - t.scrollLeft() <= t.outerWidth() + 3
            ? ($(this).parent().find(".icon-prev").css("display", "block"),
              $(this).parent().find(".icon-next").css("display", "none"))
            : ($(this).parent().find(".icon-prev").css("display", "none"),
              $(this).parent().find(".icon-next").css("display", "block"));
        }
        $(document).ready(function () {
          $(".swiper-wrapper").each(function (e) {
            $(this).on("scroll", t);
          });
        }),
          $(".icon-prev").click(function () {
            let t = $(".icon-prev").index(this);
            setTimeout(function () {
              e[t].slideTo(1);
            }, 175);
          });
      }, 3e3);
  }
  onActiveFilterClick(e) {
    e.preventDefault(), FacetFiltersForm.toggleActiveFacets();
    let t =
      -1 == e.currentTarget.href.indexOf("?")
        ? ""
        : e.currentTarget.href.slice(e.currentTarget.href.indexOf("?") + 1);
    FacetFiltersForm.renderPage(t);
  }
}
(FacetFiltersForm.filterData = []),
  (FacetFiltersForm.searchParamsInitial = window.location.search.slice(1)),
  (FacetFiltersForm.searchParamsPrev = window.location.search.slice(1)),
  customElements.define("facet-filters-form", FacetFiltersForm),
  FacetFiltersForm.setListeners();
class PriceRange extends HTMLElement {
  constructor() {
    super(),
      this.querySelectorAll("input").forEach((e) =>
        e.addEventListener("change", this.onRangeChange.bind(this))
      ),
      this.setMinAndMaxValues();
  }
  onRangeChange(e) {
    this.adjustToValidValues(e.currentTarget), this.setMinAndMaxValues();
    var t = new Swiper(".list_product-colors", {
      slidesPerView: 4,
      cssMode: !0,
      slidesPerGroup: 4,
      loopedSlides: 4,
      navigation: { nextEl: ".icon-next" },
    });
    function i(e) {
      var t = $(e.currentTarget);
      t[0].scrollWidth - t.scrollLeft() <= t.outerWidth() + 3
        ? ($(this).parent().find(".icon-prev").css("display", "block"),
          $(this).parent().find(".icon-next").css("display", "none"))
        : ($(this).parent().find(".icon-prev").css("display", "none"),
          $(this).parent().find(".icon-next").css("display", "block"));
    }
    $(document).ready(function () {
      $(".swiper-wrapper").each(function (e) {
        $(this).on("scroll", i);
      });
    }),
      second_image_alt,
      $(".icon-prev").click(function () {
        let e = $(".icon-prev").index(this);
        setTimeout(function () {
          t[e].slideTo(1);
        }, 175);
      });
  }
  setMinAndMaxValues() {
    let e = this.querySelectorAll("input"),
      t = e[0],
      i = e[1];
    i.value && t.setAttribute("max", i.value),
      t.value && i.setAttribute("min", t.value),
      "" === t.value && i.setAttribute("min", 0),
      "" === i.value && t.setAttribute("max", i.getAttribute("max"));
  }
  adjustToValidValues(e) {
    let t = Number(e.value),
      i = Number(e.getAttribute("min")),
      r = Number(e.getAttribute("max"));
    t < i && (e.value = i), t > r && (e.value = r);
  }
}
customElements.define("price-range", PriceRange);
class FacetRemove extends HTMLElement {
  constructor() {
    super(),
      this.querySelector("a").addEventListener("click", (e) => {
        e.preventDefault();
        (
          this.closest("facet-filters-form") ||
          document.querySelector("facet-filters-form")
        ).onActiveFilterClick(e),
          setTimeout(function () {
            var e = new Swiper(".list_product-colors", {
              slidesPerView: 5,
              cssMode: !0,
              slidesPerGroup: 5,
              loopedSlides: 5,
              navigation: { nextEl: ".icon-next" },
            });
            function t(e) {
              var t = $(e.currentTarget);
              t[0].scrollWidth - t.scrollLeft() <= t.outerWidth() + 3
                ? ($(this).parent().find(".icon-prev").css("display", "block"),
                  $(this).parent().find(".icon-next").css("display", "none"))
                : ($(this).parent().find(".icon-prev").css("display", "none"),
                  $(this).parent().find(".icon-next").css("display", "block"));
            }
            $(document).ready(function () {
              $(".swiper-wrapper").each(function (e) {
                $(this).on("scroll", t);
              });
            }),
              $(".icon-prev").click(function () {
                let t = $(".icon-prev").index(this);
                setTimeout(function () {
                  e[t].slideTo(1);
                }, 175);
              });
          }, 1500);
      });
  }
}
customElements.define("facet-remove", FacetRemove),
  $(document).ready(function () {
    $(".apple_watch_product .product-sizes-watch").change(function () {
      var e = $(this).val(),
        t = $(".option_input[name='Color']:checked").val(),
        i = e + " / " + t,
        r = "",
        n = "";
      $(".product-form__input input:checked").each(function (t) {
        0 == t
          ? (n = $(this).val())
          : ((n = e + " / " + $(this).val()), (r = e + "&" + $(this).val()));
      });
      var s = r.split("&"),
        o = s[0],
        c = s[1];
      document
        .querySelectorAll(".product-tag-list .newbadge_discount")
        .forEach((e) => {
          o == e.getAttribute("data-option1") &&
          c == e.getAttribute("data-option2")
            ? e.classList.remove("hide")
            : e.classList.contains("hide") || e.classList.add("hide");
        }),
        $(".ctm_product_form_variants option").each(function () {
          var e = $(this).attr("data-price"),
            t = $(this).attr("data-compareprice");
          if ($(this).text().trim() == i) {
            void 0 !== t && "" != t
              ? ($(".price:not(.cust_make_it_price) .price-item--regular").text(
                  t
                ),
                $(".price:not(.cust_make_it_price) .price-item--sale").text(e),
                $(".newpricecustomgs").show(),
                $(".without_sale_price").hide())
              : ($(".newpricecustomgs").hide(),
                $(".without_sale_price").show(),
                $(".price:not(.cust_make_it_price) .price-item--regular").text(
                  e
                ),
                $(".price__badge-sale").hide());
            var r = $(this).attr("data-avalilability");
            "true" == r ||
              !0 == r ||
              $(".color-swatch[data-value=" + dd_val + "]").attr(
                "data-stock-status",
                "out_of_stock"
              );
          }
        }),
        $(".apple_watch_product .color-swatch").click(function () {
          var e = $(".product-sizes-watch").val(),
            t = (e + "&" + $(this).attr("data-color")).split("&");
          if ((t[0], t[1], "" != e || void 0 !== e)) {
            var i = e + " / " + $(this).attr("data-color");
            document
              .querySelectorAll(".product-tag-list .newbadge_discount")
              .forEach((t) => {
                e == t.getAttribute("data-option1") &&
                $(this).attr("data-color") == t.getAttribute("data-option2")
                  ? t.classList.remove("hide")
                  : t.classList.contains("hide") || t.classList.add("hide");
              }),
              $(".ctm_product_form_variants option").each(function () {
                if ($(this).text().trim() == i) {
                  var e = $(this).attr("data-idvalue"),
                    t = $(this).attr("data-avalilability"),
                    r = $(this).attr("data-price"),
                    n = $(this).attr("data-compareprice");
                  void 0 !== n && "" != n
                    ? ($(
                        ".price:not(.cust_make_it_price) .price-item--regular"
                      ).text(n),
                      $(
                        ".price:not(.cust_make_it_price) .price-item--sale"
                      ).text(r),
                      $(".newpricecustomgs").show(),
                      $(".without_sale_price").hide())
                    : ($(".newpricecustomgs").hide(),
                      $(".without_sale_price").show(),
                      $(".without_sale_price").addClass("itsworkingg"),
                      $(".without_sale_price").addClass("elsecond"),
                      $(
                        ".price:not(.cust_make_it_price) .price-item--regular"
                      ).text(r),
                      $(".price__badge-sale").hide()),
                    "true" == t || !0 == t
                      ? setTimeout(function () {
                          $(".customcartbtn").attr("data-id", e),
                            $(".customcartbtn").text("ADD TO CART"),
                            $(".customcartbtn .custom-atc").attr("id", ""),
                            $(".customcartbtn").attr("type", "submit"),
                            $(".customcartbtn").removeAttr(
                              "disabled",
                              "disabled"
                            );
                        }, 500)
                      : setTimeout(function () {
                          $(".customcartbtn").attr("data-id", e),
                            $(".customcartbtn .custom-atc").attr(
                              "id",
                              "BIS_trigger"
                            ),
                            $(".customcartbtn").attr("type", "button"),
                            $(".customcartbtn").text("Join the Waitlist"),
                            $(".customcartbtn").removeAttr(
                              "disabled",
                              "disabled"
                            );
                        }, 500);
                }
              });
          }
        });
    });
  }),
  $(document).ready(function () {
    $(".custom_checkout_btn").on("click", function () {
      $(this).addClass("hide"), $(".checkout-loading").removeClass("hide");
    });
  });
var prev_scroll = window.scrollY;
function dateDiffInDays(e, t) {
  let i = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate());
  return Math.floor(
    (Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()) - i) / 864e5
  );
}
// $(window).scroll(function (e) {
//   var t = window.scrollY;
//   t > prev_scroll && t > 100
//     ? $("body").addClass("header_bar_hidden")
//     : $("body").removeClass("header_bar_hidden"),
//     (prev_scroll = t),
//     $(this).scrollTop() > 5
//       ? $("body").addClass("mobile_sticky_only")
//       : $("body").removeClass("mobile_sticky_only");
     }),
  $(".list-inline-color li:first-child").addClass("active"),
  $(".tab-content").hide(),
  $(".tab-content:first").show(),
  $(".list-inline-color").click(function () {
    $(".list-inline-color").removeClass("active"),
      $(this).addClass("active"),
      $(".tab-content").hide();
    var e = $(this).find("a").attr("href");
    return $(e).fadeIn(), !1;
  }),
  $(document).ready(function () {
    $(".onhovereffect").mouseenter(function () {
      $(this).parents(".customhome-collection").addClass("hoverSecondImage");
    }),
      $(".onhovereffect").mouseleave(function () {
        $(this)
          .parents(".customhome-collection")
          .hasClass("hoverSecondImage") &&
          $(this)
            .parents(".customhome-collection")
            .removeClass("hoverSecondImage");
      }),
      $(".color-swatch").click(function () {
        $("body")
          .find(
            '.similar_products .price-item--last:contains("AUD"), .similar_products .with_sale_price:contains("AUD"), .newregularprice:contains("AUD")'
          )
          .each(function () {
            $(this).html($(this).html().split("AUD").join(""));
          });
        var e = $(this).attr("data-personalize");
        !0 == e || "true" == e
          ? $(this)
              .parents(".customproduct_wrap")
              .find(".engrave-s-product")
              .addClass("nomonogramshows")
          : $(this)
              .parents(".customproduct_wrap")
              .find(".engrave-s-product")
              .removeClass("nomonogramshows");
      });
  });
const a = new Date(),
  b = new Date("2023-03-19"),
  difference = dateDiffInDays(a, b);
function pysslidenext() {
  let e = document.querySelector(".product__media-list");
  e.scrollLeft = e.scrollLeft + 400;
}
function pysslideprev() {
  let e = document.querySelector(".product__media-list");
  e.scrollLeft = e.scrollLeft - 400;
}
$(document).ready(function () {
  $(".viewbtn2").hide(),
    $(".viewbtn3").hide(),
    $(".viewbtn4").hide(),
    $(".viewbtn5").hide(),
    $(".viewbtn6").hide(),
    $(".viewbtn7").hide(),
    $(".viewbtn8").hide(),
    $(".viewbtn9").hide();
}),
  $(".tab-index").click(function () {
    var e = $(this).attr("data-clr");
    "black-caviar" == e &&
      ($(".viewbtn1").show(),
      $(".viewbtn2").hide(),
      $(".viewbtn3").hide(),
      $(".viewbtn4").hide(),
      $(".viewbtn5").hide(),
      $(".viewbtn6").hide(),
      $(".viewbtn7").hide(),
      $(".viewbtn8").hide(),
      $(".viewbtn9").hide()),
      "lapis-blue" == e &&
        ($(".viewbtn2").show(),
        $(".viewbtn1").hide(),
        $(".viewbtn3").hide(),
        $(".viewbtn4").hide(),
        $(".viewbtn5").hide(),
        $(".viewbtn6").hide(),
        $(".viewbtn7").hide(),
        $(".viewbtn8").hide(),
        $(".viewbtn9").hide()),
      "emerald-green" == e &&
        ($(".viewbtn2").hide(),
        $(".viewbtn1").hide(),
        $(".viewbtn3").show(),
        $(".viewbtn4").hide(),
        $(".viewbtn5").hide(),
        $(".viewbtn6").hide(),
        $(".viewbtn7").hide(),
        $(".viewbtn8").hide(),
        $(".viewbtn9").hide()),
      "pomegranate-red" == e &&
        ($(".viewbtn2").hide(),
        $(".viewbtn1").hide(),
        $(".viewbtn3").hide(),
        $(".viewbtn4").show(),
        $(".viewbtn5").hide(),
        $(".viewbtn6").hide(),
        $(".viewbtn7").hide(),
        $(".viewbtn8").hide(),
        $(".viewbtn9").hide()),
      "pink-lily" == e &&
        ($(".viewbtn2").hide(),
        $(".viewbtn1").hide(),
        $(".viewbtn3").hide(),
        $(".viewbtn4").hide(),
        $(".viewbtn5").show(),
        $(".viewbtn6").hide(),
        $(".viewbtn7").hide(),
        $(".viewbtn8").hide(),
        $(".viewbtn9").hide()),
      "pink-lily" == e &&
        ($(".viewbtn2").hide(),
        $(".viewbtn1").hide(),
        $(".viewbtn3").hide(),
        $(".viewbtn4").hide(),
        $(".viewbtn5").show(),
        $(".viewbtn6").hide(),
        $(".viewbtn7").hide(),
        $(".viewbtn8").hide(),
        $(".viewbtn9").hide()),
      "saharan-nude" == e &&
        ($(".viewbtn2").hide(),
        $(".viewbtn1").hide(),
        $(".viewbtn3").hide(),
        $(".viewbtn4").hide(),
        $(".viewbtn5").hide(),
        $(".viewbtn6").show(),
        $(".viewbtn7").hide(),
        $(".viewbtn8").hide(),
        $(".viewbtn9").hide()),
      "bondi-blue" == e &&
        ($(".viewbtn2").hide(),
        $(".viewbtn1").hide(),
        $(".viewbtn3").hide(),
        $(".viewbtn4").hide(),
        $(".viewbtn5").hide(),
        $(".viewbtn6").hide(),
        $(".viewbtn7").show(),
        $(".viewbtn8").hide(),
        $(".viewbtn9").hide()),
      "manhattan-orange" == e &&
        ($(".viewbtn2").hide(),
        $(".viewbtn1").hide(),
        $(".viewbtn3").hide(),
        $(".viewbtn4").hide(),
        $(".viewbtn5").hide(),
        $(".viewbtn6").hide(),
        $(".viewbtn7").hide(),
        $(".viewbtn8").show(),
        $(".viewbtn9").hide()),
      "shibuya-fuchsia" == e &&
        ($(".viewbtn2").hide(),
        $(".viewbtn1").hide(),
        $(".viewbtn3").hide(),
        $(".viewbtn4").hide(),
        $(".viewbtn5").hide(),
        $(".viewbtn6").hide(),
        $(".viewbtn7").hide(),
        $(".viewbtn8").hide(),
        $(".viewbtn9").show());
  }),
  $(document).ready(function () {
    $(".product-sizes-watch").change(function () {
      var e = $(this).val(),
        t = "";
      $(".color-swatch").each(function () {
        "checkedx" == $(this).attr("data-status") &&
          (t = $(this).attr("data-value"));
      }),
        $("#custom_option_hide span").each(function () {
          if (
            $(this).attr("data-title2") == e &&
            $(this).attr("data-title") == t
          ) {
            var i = $(this).attr("data-value");
            $(".product-form__buttons .cart_add_btn").attr("data-id", i);
          }
        });
    }),
      $("#size_product").change(function () {
        window.location = $(this).val();
      });
  });
var bodyElement = document.body;
-1 != navigator.userAgent.indexOf("Safari") &&
  -1 == navigator.userAgent.indexOf("Chrome") &&
  bodyElement.classList.add("safaribrowser");
