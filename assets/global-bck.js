function getFocusableElements(e) {
    return Array.from(e.querySelectorAll("summary, a[href], button:enabled, [tabindex]:not([tabindex^='-']), [draggable], area, input:not([type=hidden]):enabled, select:enabled, textarea:enabled, object, iframe"));
}
$(document).ready(function () {
$('.custom_checkout_btn').on('click', function(){
    window.location = '/checkout';
    $('.custom_checkout_btn').addClass('hide');
    $('.checkout-loading').removeClass('hide');
    setTimeout(function(){
      $('.custom_checkout_btn').removeClass('hide');
      $('.checkout-loading').addClass('hide');    
    },2500)
}); 
    $(".color-swatch").each(function () {
        var e = $(this).attr("data-clrid");
        if ("checkedx" == $(this).attr("data-status")) {
            var t = window.location.origin,
                i = window.location.pathname;
            window.history.pushState({}, "", t + i + "?variant=" + e);
            var s = $(this).attr("data-personalize");
            !1 == s || "false" == s ? $(this).parents(".customproduct_wrap").find(".engrave-s-product").removeClass("nomonogramshows") : $(this).parents(".customproduct_wrap").find(".engrave-s-product").addClass("nomonogramshows");
        }
    }),
        /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) &&
            $(".mobile-facets__close-button").click(function () {
                $(this).parents(".mobile-facets__details").removeAttr("open");
            }),
        $(".mobile-facets__open").click(function () {
            $("body").addClass("overflow_hidden_html");
        }),
        $(".mobile-facets__open-wrapper .mobile-facets__close, .mobile-facets__footer .button.no-js-hidden.button.button--primary").click(function () {
            $("body").removeClass("overflow_hidden_html");
        }),
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
        console.log(e),
            "black-caviar" == e &&
                ($(".viewbtn1").show(), $(".viewbtn2").hide(), $(".viewbtn3").hide(), $(".viewbtn4").hide(), $(".viewbtn5").hide(), $(".viewbtn6").hide(), $(".viewbtn7").hide(), $(".viewbtn8").hide(), $(".viewbtn9").hide()),
            "lapis-blue" == e &&
                ($(".viewbtn2").show(), $(".viewbtn1").hide(), $(".viewbtn3").hide(), $(".viewbtn4").hide(), $(".viewbtn5").hide(), $(".viewbtn6").hide(), $(".viewbtn7").hide(), $(".viewbtn8").hide(), $(".viewbtn9").hide()),
            "emerald-green" == e &&
                ($(".viewbtn2").hide(), $(".viewbtn1").hide(), $(".viewbtn3").show(), $(".viewbtn4").hide(), $(".viewbtn5").hide(), $(".viewbtn6").hide(), $(".viewbtn7").hide(), $(".viewbtn8").hide(), $(".viewbtn9").hide()),
            "pomegranate-red" == e &&
                ($(".viewbtn2").hide(), $(".viewbtn1").hide(), $(".viewbtn3").hide(), $(".viewbtn4").show(), $(".viewbtn5").hide(), $(".viewbtn6").hide(), $(".viewbtn7").hide(), $(".viewbtn8").hide(), $(".viewbtn9").hide()),
            "pink-lily" == e && ($(".viewbtn2").hide(), $(".viewbtn1").hide(), $(".viewbtn3").hide(), $(".viewbtn4").hide(), $(".viewbtn5").show(), $(".viewbtn6").hide(), $(".viewbtn7").hide(), $(".viewbtn8").hide(), $(".viewbtn9").hide()),
            "pink-lily" == e && ($(".viewbtn2").hide(), $(".viewbtn1").hide(), $(".viewbtn3").hide(), $(".viewbtn4").hide(), $(".viewbtn5").show(), $(".viewbtn6").hide(), $(".viewbtn7").hide(), $(".viewbtn8").hide(), $(".viewbtn9").hide()),
            "saharan-nude" == e &&
                ($(".viewbtn2").hide(), $(".viewbtn1").hide(), $(".viewbtn3").hide(), $(".viewbtn4").hide(), $(".viewbtn5").hide(), $(".viewbtn6").show(), $(".viewbtn7").hide(), $(".viewbtn8").hide(), $(".viewbtn9").hide()),
            "bondi-blue" == e &&
                ($(".viewbtn2").hide(), $(".viewbtn1").hide(), $(".viewbtn3").hide(), $(".viewbtn4").hide(), $(".viewbtn5").hide(), $(".viewbtn6").hide(), $(".viewbtn7").show(), $(".viewbtn8").hide(), $(".viewbtn9").hide()),
            "manhattan-orange" == e &&
                ($(".viewbtn2").hide(), $(".viewbtn1").hide(), $(".viewbtn3").hide(), $(".viewbtn4").hide(), $(".viewbtn5").hide(), $(".viewbtn6").hide(), $(".viewbtn7").hide(), $(".viewbtn8").show(), $(".viewbtn9").hide()),
            "shibuya-fuchsia" == e &&
                ($(".viewbtn2").hide(), $(".viewbtn1").hide(), $(".viewbtn3").hide(), $(".viewbtn4").hide(), $(".viewbtn5").hide(), $(".viewbtn6").hide(), $(".viewbtn7").hide(), $(".viewbtn8").hide(), $(".viewbtn9").show());
    }),
    document.querySelectorAll('[id^="Details-"] summary').forEach((e) => {
        e.setAttribute("role", "button"),
            e.setAttribute("aria-expanded", "false"),
            e.nextElementSibling.getAttribute("id") && e.setAttribute("aria-controls", e.nextElementSibling.id),
            e.addEventListener("click", (e) => {
                e.currentTarget.setAttribute("aria-expanded", !e.currentTarget.closest("details").hasAttribute("open")), console.log("check");
            }),
            e.closest("header-drawer") || e.parentElement.addEventListener("keyup", onKeyUpEscape);
    });
const trapFocusHandlers = {};
function trapFocus(e, t = e) {
    var i = getFocusableElements(e),
        s = i[0],
        a = i[i.length - 1];
    removeTrapFocus(),
        (trapFocusHandlers.focusin = (t) => {
            (t.target === e || t.target === a || t.target === s) && document.addEventListener("keydown", trapFocusHandlers.keydown);
        }),
        (trapFocusHandlers.focusout = function () {
            document.removeEventListener("keydown", trapFocusHandlers.keydown);
        }),
        (trapFocusHandlers.keydown = function (t) {
            "TAB" === t.code.toUpperCase() && (t.target !== a || t.shiftKey || (t.preventDefault(), s.focus()), (t.target === e || t.target === s) && t.shiftKey && (t.preventDefault(), a.focus()));
        }),
        document.addEventListener("focusout", trapFocusHandlers.focusout),
        document.addEventListener("focusin", trapFocusHandlers.focusin),
        t.focus();
}
try {
    document.querySelector(":focus-visible");
} catch {
    focusVisiblePolyfill();
}
function focusVisiblePolyfill() {
    let e = ["ARROWUP", "ARROWDOWN", "ARROWLEFT", "ARROWRIGHT", "TAB", "ENTER", "SPACE", "ESCAPE", "HOME", "END", "PAGEUP", "PAGEDOWN"],
        t = null,
        i = null;
    window.addEventListener("keydown", (t) => {
        e.includes(t.code.toUpperCase()) && (i = !1);
    }),
        window.addEventListener("mousedown", (e) => {
            i = !0;
        }),
        window.addEventListener(
            "focus",
            () => {
                t && t.classList.remove("focused"), i || (t = document.activeElement).classList.add("focused");
            },
            !0
        );
}
function pauseAllMedia() {
    document.querySelectorAll(".js-youtube").forEach((e) => {
        e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
    }),
        document.querySelectorAll(".js-vimeo").forEach((e) => {
            e.contentWindow.postMessage('{"method":"pause"}', "*");
        }),
        document.querySelectorAll("video").forEach((e) => e.pause()),
        document.querySelectorAll("product-model").forEach((e) => {
            e.modelViewerUI && e.modelViewerUI.pause();
        });
}
function removeTrapFocus(e = null) {
    document.removeEventListener("focusin", trapFocusHandlers.focusin), document.removeEventListener("focusout", trapFocusHandlers.focusout), document.removeEventListener("keydown", trapFocusHandlers.keydown), e && e.focus();
}
function onKeyUpEscape(e) {
    if ("ESCAPE" !== e.code.toUpperCase()) return;
    let t = e.target.closest("details[open]");
    if (!t) return;
    console.log("open1");
    let i = t.querySelector("summary");
    t.removeAttribute("open"), i.setAttribute("aria-expanded", !1), i.focus();
}
class QuantityInput extends HTMLElement {
    constructor() {
        super(), (this.input = this.querySelector("input")), (this.changeEvent = new Event("change", { bubbles: !0 })), this.querySelectorAll("button").forEach((e) => e.addEventListener("click", this.onButtonClick.bind(this)));
    }
    onButtonClick(e) {
        e.preventDefault();
        let t = this.input.value;
        "plus" === e.target.name ? this.input.stepUp() : this.input.stepDown(), t !== this.input.value && this.input.dispatchEvent(this.changeEvent);
    }
}
function debounce(e, t) {
    let i;
    return (...s) => {
        clearTimeout(i), (i = setTimeout(() => e.apply(this, s), t));
    };
}
function fetchConfig(e = "json") {
    return { method: "POST", headers: { "Content-Type": "application/json", Accept: `application/${e}` } };
}
customElements.define("quantity-input", QuantityInput),
    void 0 === window.Shopify && (window.Shopify = {}),
    (Shopify.bind = function (e, t) {
        return function () {
            return e.apply(t, arguments);
        };
    }),
    (Shopify.setSelectorByValue = function (e, t) {
        for (var i = 0, s = e.options.length; i < s; i++) {
            var a = e.options[i];
            if (t == a.value || t == a.innerHTML) return (e.selectedIndex = i), i;
        }
    }),
    (Shopify.addListener = function (e, t, i) {
        e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent("on" + t, i);
    }),
    (Shopify.postLink = function (e, t) {
        var i = (t = t || {}).method || "post",
            s = t.parameters || {},
            a = document.createElement("form");
        for (var n in (a.setAttribute("method", i), a.setAttribute("action", e), s)) {
            var r = document.createElement("input");
            r.setAttribute("type", "hidden"), r.setAttribute("name", n), r.setAttribute("value", s[n]), a.appendChild(r);
        }
        document.body.appendChild(a), a.submit(), document.body.removeChild(a);
    }),
    (Shopify.CountryProvinceSelector = function (e, t, i) {
        (this.countryEl = document.getElementById(e)),
            (this.provinceEl = document.getElementById(t)),
            (this.provinceContainer = document.getElementById(i.hideElement || t)),
            Shopify.addListener(this.countryEl, "change", Shopify.bind(this.countryHandler, this)),
            this.initCountry(),
            this.initProvince();
    }),
    (Shopify.CountryProvinceSelector.prototype = {
        initCountry: function () {
            var e = this.countryEl.getAttribute("data-default");
            Shopify.setSelectorByValue(this.countryEl, e), this.countryHandler();
        },
        initProvince: function () {
            var e = this.provinceEl.getAttribute("data-default");
            e && this.provinceEl.options.length > 0 && Shopify.setSelectorByValue(this.provinceEl, e);
        },
        countryHandler: function (e) {
            var t = this.countryEl.options[this.countryEl.selectedIndex],
                i = JSON.parse(t.getAttribute("data-provinces"));
            if ((this.clearOptions(this.provinceEl), i && 0 == i.length)) this.provinceContainer.style.display = "none";
            else {
                for (var s = 0; s < i.length; s++) {
                    var t = document.createElement("option");
                    (t.value = i[s][0]), (t.innerHTML = i[s][1]), this.provinceEl.appendChild(t);
                }
                this.provinceContainer.style.display = "";
            }
        },
        clearOptions: function (e) {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
        },
        setOptions: function (e, t) {
            for (var i = 0; i < t.length; i++) {
                var s = document.createElement("option");
                (s.value = t[i]), (s.innerHTML = t[i]), e.appendChild(s);
            }
            t.length;
        },
    });
class MenuDrawer extends HTMLElement {
    constructor() {
        super(),
            (this.mainDetailsToggle = this.querySelector("details")),
            "iPhone" === navigator.platform && document.documentElement.style.setProperty("--viewport-height", `${window.innerHeight}px`),
            this.addEventListener("keyup", this.onKeyUp.bind(this)),
            this.addEventListener("focusout", this.onFocusOut.bind(this)),
            this.bindEvents();
    }
    bindEvents() {
        this.querySelectorAll("summary").forEach((e) => e.addEventListener("click", this.onSummaryClick.bind(this))), this.querySelectorAll("button").forEach((e) => e.addEventListener("click", this.onCloseButtonClick.bind(this)));
    }
    onKeyUp(e) {
        if ("ESCAPE" !== e.code.toUpperCase()) return;
        let t = e.target.closest("details[open]");
        t && (console.log("open2"), t === this.mainDetailsToggle ? this.closeMenuDrawer(e, this.mainDetailsToggle.querySelector("summary")) : this.closeSubmenu(t));
    }
    onSummaryClick(e) {
        let t = e.currentTarget,
            i = t.parentNode,
            s = i.hasAttribute("open"),
            a = window.matchMedia("(prefers-reduced-motion: reduce)");
        function n() {
            trapFocus(t.nextElementSibling, i.querySelector("button")), t.nextElementSibling.removeEventListener("transitionend", n);
        }
        i === this.mainDetailsToggle
            ? (s && e.preventDefault(), s ? this.closeMenuDrawer(e, t) : this.openMenuDrawer(t))
            : setTimeout(() => {
                  i.classList.add("menu-opening"), t.setAttribute("aria-expanded", !0), !a || a.matches ? n() : t.nextElementSibling.addEventListener("transitionend", n);
              }, 100);
    }
    openMenuDrawer(e) {
        setTimeout(() => {
            this.mainDetailsToggle.classList.add("menu-opening");
        }),
            e.setAttribute("aria-expanded", !0),
            trapFocus(this.mainDetailsToggle, e),
            document.body.classList.add(`overflow-hidden-${this.dataset.breakpoint}`);
    }
    closeMenuDrawer(e, t = !1) {
        void 0 !== e &&
            (this.mainDetailsToggle.classList.remove("menu-opening"),
            this.mainDetailsToggle.querySelectorAll("details").forEach((e) => {
                e.removeAttribute("open"), e.classList.remove("menu-opening");
            }),
            document.body.classList.remove(`overflow-hidden-${this.dataset.breakpoint}`),
            removeTrapFocus(t),
            this.closeAnimation(this.mainDetailsToggle));
    }
    onFocusOut(e) {
        setTimeout(() => {
            this.mainDetailsToggle.hasAttribute("open") && !this.mainDetailsToggle.contains(document.activeElement) && this.closeMenuDrawer();
        });
    }
    onCloseButtonClick(e) {
        let t = e.currentTarget.closest("details");
        this.closeSubmenu(t);
    }
    closeSubmenu(e) {
        e.classList.remove("menu-opening"), e.querySelector("summary").setAttribute("aria-expanded", !1), removeTrapFocus(), this.closeAnimation(e);
    }
    closeAnimation(e) {
        let t,
            i = (s) => {
                void 0 === t && (t = s);
                let a = s - t;
                a < 400 ? window.requestAnimationFrame(i) : (e.removeAttribute("open"), e.closest("details[open]") && trapFocus(e.closest("details[open]"), e.querySelector("summary")));
            };
        window.requestAnimationFrame(i);
    }
}
customElements.define("menu-drawer", MenuDrawer);
class HeaderDrawer extends MenuDrawer {
    constructor() {
        super();
    }
    openMenuDrawer(e) {
        (this.header = this.header || document.getElementById("shopify-section-header")),
            (this.borderOffset = this.borderOffset || this.closest(".header-wrapper").classList.contains("header-wrapper--border-bottom") ? 1 : 0),
            document.documentElement.style.setProperty("--header-bottom-position", `${parseInt(this.header.getBoundingClientRect().bottom - this.borderOffset)}px`),
            setTimeout(() => {
                this.mainDetailsToggle.classList.add("menu-opening");
            }),
            e.setAttribute("aria-expanded", !0),
            trapFocus(this.mainDetailsToggle, e),
            document.body.classList.add(`overflow-hidden-${this.dataset.breakpoint}`);
    }
}
customElements.define("header-drawer", HeaderDrawer);
class ModalDialog extends HTMLElement {
    constructor() {
        super(),
            this.querySelector('[id^="ModalClose-"]').addEventListener("click", this.hide.bind(this)),
            this.addEventListener("keyup", (e) => {
                "ESCAPE" === e.code.toUpperCase() && this.hide();
            }),
            this.classList.contains("media-modal")
                ? this.addEventListener("pointerup", (e) => {
                      "mouse" !== e.pointerType || e.target.closest("deferred-media, product-model") || this.hide();
                  })
                : this.addEventListener("click", (e) => {
                      "MODAL-DIALOG" === e.target.nodeName && this.hide();
                  });
    }
    show(e) {
        this.openedBy = e;
        let t = this.querySelector(".template-popup");
        document.body.classList.add("overflow-hidden"), this.setAttribute("open", ""), this.classList.add("menu-opening"), t && t.loadContent(), trapFocus(this, this.querySelector('[role="dialog"]')), window.pauseAllMedia();
    }
    hide() {
        document.body.classList.remove("overflow-hidden"), this.removeAttribute("open"), removeTrapFocus(this.openedBy), window.pauseAllMedia();
    }
}
customElements.define("modal-dialog", ModalDialog);
class ModalOpener extends HTMLElement {
    constructor() {
        super();
        let e = this.querySelector("button");
        if (!e) return;
        e.addEventListener("click", () => {
            let t = document.querySelector(this.getAttribute("data-modal"));
            t && t.show(e);
        });
    }
}
customElements.define("modal-opener", ModalOpener);
class DeferredMedia extends HTMLElement {
    constructor() {
        super();
        let e = this.querySelector('[id^="Deferred-Poster-"]');
        if (!e) return;
        e.addEventListener("click", this.loadContent.bind(this));
    }
    loadContent() {
        if ((window.pauseAllMedia(), !this.getAttribute("loaded"))) {
            let e = document.createElement("div");
            e.appendChild(this.querySelector("template").content.firstElementChild.cloneNode(!0)), this.setAttribute("loaded", !0), this.appendChild(e.querySelector("video, model-viewer, iframe")).focus();
        }
    }
}
customElements.define("deferred-media", DeferredMedia);
class SliderComponent extends HTMLElement {
    constructor() {
        if (
            (super(),
            (this.slider = this.querySelector("ul")),
            (this.sliderItems = this.querySelectorAll("li")),
            (this.pageCount = this.querySelector(".slider-counter--current")),
            (this.pageTotal = this.querySelector(".slider-counter--total")),
            (this.prevButton = this.querySelector('button[name="previous"]')),
            (this.nextButton = this.querySelector('button[name="next"]')),
            !this.slider || !this.nextButton)
        )
            return;
        let e = new ResizeObserver((e) => this.initPages());
        e.observe(this.slider),
            this.slider.addEventListener("scroll", this.update.bind(this)),
            this.prevButton.addEventListener("click", this.onButtonClick.bind(this)),
            this.nextButton.addEventListener("click", this.onButtonClick.bind(this));
    }
    initPages() {
        let e = Array.from(this.sliderItems).filter((e) => e.clientWidth > 0);
        (this.sliderLastItem = e[e.length - 1]), 0 !== e.length && ((this.slidesPerPage = Math.floor(this.slider.clientWidth / e[0].clientWidth)), (this.totalPages = e.length - this.slidesPerPage + 1), this.update());
    }
    update() {
        this.pageCount &&
            this.pageTotal &&
            ((this.currentPage = Math.round(this.slider.scrollLeft / this.sliderLastItem.clientWidth) + 1),
            1 === this.currentPage ? this.prevButton.setAttribute("disabled", "disabled") : this.prevButton.removeAttribute("disabled"),
            this.currentPage === this.totalPages ? this.nextButton.setAttribute("disabled", "disabled") : this.nextButton.removeAttribute("disabled"),
            (this.pageCount.textContent = this.currentPage),
            (this.pageTotal.textContent = this.totalPages));
    }
    onButtonClick(e) {
        e.preventDefault();
        let t = "next" === e.currentTarget.name ? this.slider.scrollLeft + this.sliderLastItem.clientWidth : this.slider.scrollLeft - this.sliderLastItem.clientWidth;
        this.slider.scrollTo({ left: t });
    }
}
customElements.define("slider-component", SliderComponent);
class VariantSelects extends HTMLElement {
    constructor() {
        super(), this.addEventListener("change", this.onVariantChange);
    }
    onVariantChange() {
        this.updateOptions(),
            this.updateMasterId(),
            this.toggleAddButton(!0, "", !1),
            this.updatePickupAvailability(),
            this.removeErrorMessage(),
            this.currentVariant ? (this.updateMedia(), this.updateURL(), this.updateVariantInput(), this.renderProductInfo(), this.updateShareUrl()) : (this.toggleAddButton(!0, "", !0), this.setUnavailable());
    }
    updateOptions() {
        this.options = Array.from(this.querySelectorAll("select"), (e) => e.value);
    }
    updateMasterId() {
        this.currentVariant = this.getVariantData().find((e) => !e.options.map((e, t) => this.options[t] === e).includes(!1));
    }
    updateMedia() {
        if (!this.currentVariant || !this.currentVariant.featured_media) return;
        let e = document.querySelector(`[data-media-id="${this.dataset.section}-${this.currentVariant.featured_media.id}"]`);
        if (!e) return;
        let t = document.querySelector(`#ProductModal-${this.dataset.section} .product-media-modal__content`),
            i = t.querySelector(`[data-media-id="${this.currentVariant.featured_media.id}"]`),
            s = e.parentElement;
        s.firstChild != e &&
            (t.prepend(i),
            s.prepend(e),
            (this.stickyHeader = this.stickyHeader || document.querySelector("sticky-header")),
            this.stickyHeader && this.stickyHeader.dispatchEvent(new Event("preventHeaderReveal")),
            window.setTimeout(() => {
                (s.scrollLeft = 0), s.querySelector("li.product__media-item").scrollIntoView({ behavior: "smooth" });
            }));
    }
    updateURL() {
        this.currentVariant && "false" !== this.dataset.updateUrl && window.history.replaceState({}, "", `${this.dataset.url}?variant=${this.currentVariant.id}`);
    }
    updateShareUrl() {
        let e = document.getElementById(`Share-${this.dataset.section}`);
        e && e.updateUrl(`${window.shopUrl}${this.dataset.url}?variant=${this.currentVariant.id}`);
    }
    updateVariantInput() {
        let e = document.querySelectorAll(`#product-form-${this.dataset.section}, #product-form-installment`);
        e.forEach((e) => {
            let t = e.querySelector('input[name="id"]');
            (t.value = this.currentVariant.id), t.dispatchEvent(new Event("change", { bubbles: !0 }));
        });
    }
    updatePickupAvailability() {
        let e = document.querySelector("pickup-availability");
        e && (this.currentVariant && this.currentVariant.available ? e.fetchAvailability(this.currentVariant.id) : (e.removeAttribute("available"), (e.innerHTML = "")));
    }
    removeErrorMessage() {
        let e = this.closest("section");
        if (!e) return;
        let t = e.querySelector("product-form");
        t && t.handleErrorMessage();
    }
    renderProductInfo() {
        fetch(`${this.dataset.url}?variant=${this.currentVariant.id}&section_id=${this.dataset.section}`)
            .then((e) => e.text())
            .then((e) => {
                console.log(e);
                let t = `price-${this.dataset.section}`,
                    i = new DOMParser().parseFromString(e, "text/html"),
                    s = document.getElementById(t),
                    a = i.getElementById(t);
                a && s && (s.innerHTML = a.innerHTML);
                let n = document.getElementById(`price-${this.dataset.section}`);
                n && n.classList.remove("visibility-hidden"), this.toggleAddButton(!this.currentVariant.available, window.variantStrings.soldOut);
            });
    }
    toggleAddButton(e = !0, t, i = !0) {
        let s = document.getElementById(`product-form-${this.dataset.section}`);
        if (!s) return;
        let a = s.querySelector('[name="add"]'),
            n = s.querySelector('[name="add"] > span');
        if (a && (e ? (a.setAttribute("disabled", "disabled"), t && (n.textContent = t)) : (a.removeAttribute("disabled"), (n.textContent = window.variantStrings.addToCart)), !i)) return;
    }
    setUnavailable() {
        let e = document.getElementById(`product-form-${this.dataset.section}`),
            t = e.querySelector('[name="add"]'),
            i = e.querySelector('[name="add"] > span'),
            s = document.getElementById(`price-${this.dataset.section}`);
        t && ((i.textContent = window.variantStrings.unavailable), s && s.classList.add("visibility-hidden"));
    }
    getVariantData() {
        return (this.variantData = this.variantData || JSON.parse(this.querySelector('[type="application/json"]').textContent)), this.variantData;
    }
}
customElements.define("variant-selects", VariantSelects);
class VariantRadios extends VariantSelects {
    constructor() {
        super();
    }
    updateOptions() {
        let e = Array.from(this.querySelectorAll("fieldset"));
        this.options = e.map((e) => Array.from(e.querySelectorAll("input")).find((e) => e.checked).value);
    }
}
customElements.define("variant-radios", VariantRadios);

   
   
  function openBlogCategory(evt, catName,home=null) {
    var i, tabcontent, tablinks, signupblock;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    if(catName == "all_blogs") {
      for (i = 0; i <  document.getElementsByClassName(catName).length; i++) {
         $('.signup-block').css('display','none');
         document.getElementById('signup-block--all').style.display = "block";
         document.getElementsByClassName(catName)[i].style.display = "block";
      }
    }
    else {
      $('.'+catName +' .signup-block').css('display','block');
      document.getElementById('signup-block--all').style.display = "none";
      document.getElementsByClassName(catName)[0].style.display = "block";
  }
if(home != null) {
    $('.mds-thinks .content-block').addClass('hide');
    $( ".mds-thinks .content-block:nth-child(2)" ).removeClass('hide');
    $( ".mds-thinks .content-block:nth-child(4)" ).removeClass('hide');
    $( ".mds-thinks .content-block:nth-child(6)" ).removeClass('hide');
    $( ".mds-thinks .content-block:nth-child(8)" ).removeClass('hide');
}
else {
    $('.mds-thinks .content-block').removeClass('hide');
    }
    evt.currentTarget.className += " active";
  }

// Get the element with id="defaultOpen" and click on it
if(document.getElementById("defaultOpen") != null) {
	document.getElementById("defaultOpen").click();
}

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
        if ($(window).width() < 767) {

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 350);
function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.headerSection').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.headerSection').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
        }

