$(document).ready(function(){
  	$('.viewbtn2').hide();
	$('.viewbtn3').hide();
	$('.viewbtn4').hide();
	$('.viewbtn5').hide();
	$('.viewbtn6').hide();
	$('.viewbtn7').hide();
	$('.viewbtn8').hide();
	$('.viewbtn9').hide();
});
$('.tab-index').click(function(){
    var clrwheel = $(this).attr('data-clr');
    console.log(clrwheel);
    if(clrwheel == "black-caviar"){
    $('.viewbtn1').show();
	$('.viewbtn2').hide();
	$('.viewbtn3').hide();
	$('.viewbtn4').hide();
	$('.viewbtn5').hide();
	$('.viewbtn6').hide();
	$('.viewbtn7').hide();
	$('.viewbtn8').hide();
	$('.viewbtn9').hide();
    }
    if(clrwheel == "lapis-blue"){
    $('.viewbtn2').show();
    $('.viewbtn1').hide();
	$('.viewbtn3').hide();
	$('.viewbtn4').hide();
	$('.viewbtn5').hide();
	$('.viewbtn6').hide();
	$('.viewbtn7').hide();
	$('.viewbtn8').hide();
	$('.viewbtn9').hide();
}
if(clrwheel == "emerald-green"){
    $('.viewbtn2').hide();
    $('.viewbtn1').hide();
	$('.viewbtn3').show();
	$('.viewbtn4').hide();
	$('.viewbtn5').hide();
	$('.viewbtn6').hide();
	$('.viewbtn7').hide();
	$('.viewbtn8').hide();
	$('.viewbtn9').hide();
}
if(clrwheel == "pomegranate-red"){
    $('.viewbtn2').hide();
    $('.viewbtn1').hide();
	$('.viewbtn3').hide();
	$('.viewbtn4').show();
	$('.viewbtn5').hide();
	$('.viewbtn6').hide();
	$('.viewbtn7').hide();
	$('.viewbtn8').hide();
	$('.viewbtn9').hide();
}
if(clrwheel == "pink-lily"){
    $('.viewbtn2').hide();
    $('.viewbtn1').hide();
	$('.viewbtn3').hide();
	$('.viewbtn4').hide();
	$('.viewbtn5').show();
	$('.viewbtn6').hide();
	$('.viewbtn7').hide();
	$('.viewbtn8').hide();
	$('.viewbtn9').hide();
}
if(clrwheel == "pink-lily"){
    $('.viewbtn2').hide();
    $('.viewbtn1').hide();
	$('.viewbtn3').hide();
	$('.viewbtn4').hide();
	$('.viewbtn5').show();
	$('.viewbtn6').hide();
	$('.viewbtn7').hide();
	$('.viewbtn8').hide();
	$('.viewbtn9').hide();
}
if(clrwheel == "saharan-nude"){
    $('.viewbtn2').hide();
    $('.viewbtn1').hide();
	$('.viewbtn3').hide();
	$('.viewbtn4').hide();
	$('.viewbtn5').hide();
	$('.viewbtn6').show();
	$('.viewbtn7').hide();
	$('.viewbtn8').hide();
	$('.viewbtn9').hide();
}
if(clrwheel == "bondi-blue"){
    $('.viewbtn2').hide();
    $('.viewbtn1').hide();
	$('.viewbtn3').hide();
	$('.viewbtn4').hide();
	$('.viewbtn5').hide();
	$('.viewbtn6').hide();
	$('.viewbtn7').show();
	$('.viewbtn8').hide();
	$('.viewbtn9').hide();
}
if(clrwheel == "manhattan-orange"){
    $('.viewbtn2').hide();
    $('.viewbtn1').hide();
	$('.viewbtn3').hide();
	$('.viewbtn4').hide();
	$('.viewbtn5').hide();
	$('.viewbtn6').hide();
	$('.viewbtn7').hide();
	$('.viewbtn8').show();
	$('.viewbtn9').hide();
}
if(clrwheel == "shibuya-fuchsia"){
    $('.viewbtn2').hide();
    $('.viewbtn1').hide();
	$('.viewbtn3').hide();
	$('.viewbtn4').hide();
	$('.viewbtn5').hide();
	$('.viewbtn6').hide();
	$('.viewbtn7').hide();
	$('.viewbtn8').hide();
	$('.viewbtn9').show();
}
});

$(document).ready(function() {
   $(".product-sizes-watch").change(function(){
   var selected_size_value = $(this).val();
   var selected_color_value = "";
   $(".color-swatch").each(function(){
     if($(this).attr('data-status') == "checkedx")
     {
       selected_color_value = $(this).attr('data-value');
     }
   });
    $('#custom_option_hide span').each(function(){
     if($(this).attr('data-title2') == selected_size_value && $(this).attr('data-title') == selected_color_value){
       var selected_variant_id = $(this).attr('data-value');
       $('.product-form__buttons .cart_add_btn').attr('data-id', selected_variant_id);
     }
   });
 });
});

function getFocusableElements(container) {
  return Array.from(
    container.querySelectorAll(
      "summary, a[href], button:enabled, [tabindex]:not([tabindex^='-']), [draggable], area, input:not([type=hidden]):enabled, select:enabled, textarea:enabled, object, iframe"
    )
  );
}

document.querySelectorAll('[id^="Details-"] summary').forEach((summary) => {
  summary.setAttribute('role', 'button');
  summary.setAttribute('aria-expanded', 'false');

  if(summary.nextElementSibling.getAttribute('id')) {
    summary.setAttribute('aria-controls', summary.nextElementSibling.id);
  }

  summary.addEventListener('click', (event) => {
    event.currentTarget.setAttribute('aria-expanded', !event.currentTarget.closest('details').hasAttribute('open'));
  });

  if (summary.closest('header-drawer')) return;
  summary.parentElement.addEventListener('keyup', onKeyUpEscape);
});

const trapFocusHandlers = {};

function trapFocus(container, elementToFocus = container) {
  var elements = getFocusableElements(container);
  var first = elements[0];
  var last = elements[elements.length - 1];

  removeTrapFocus();

  trapFocusHandlers.focusin = (event) => {
    if (
      event.target !== container &&
      event.target !== last &&
      event.target !== first
    )
      return;

    document.addEventListener('keydown', trapFocusHandlers.keydown);
  };

  trapFocusHandlers.focusout = function() {
    document.removeEventListener('keydown', trapFocusHandlers.keydown);
  };

  trapFocusHandlers.keydown = function(event) {
    if (event.code.toUpperCase() !== 'TAB') return; // If not TAB key
    // On the last focusable element and tab forward, focus the first element.
    if (event.target === last && !event.shiftKey) {
      event.preventDefault();
      first.focus();
    }

    //  On the first focusable element and tab backward, focus the last element.
    if (
      (event.target === container || event.target === first) &&
      event.shiftKey
    ) {
      event.preventDefault();
      last.focus();
    }
  };

  document.addEventListener('focusout', trapFocusHandlers.focusout);
  document.addEventListener('focusin', trapFocusHandlers.focusin);

  elementToFocus.focus();
}

// Here run the querySelector to figure out if the browser supports :focus-visible or not and run code based on it.
try {
  document.querySelector(":focus-visible");
} catch {
  focusVisiblePolyfill();
}

function focusVisiblePolyfill() {
  const navKeys = ['ARROWUP', 'ARROWDOWN', 'ARROWLEFT', 'ARROWRIGHT', 'TAB', 'ENTER', 'SPACE', 'ESCAPE', 'HOME', 'END', 'PAGEUP', 'PAGEDOWN']
  let currentFocusedElement = null;
  let mouseClick = null;

  window.addEventListener('keydown', (event) => {
    if(navKeys.includes(event.code.toUpperCase())) {
      mouseClick = false;
    }
  });

  window.addEventListener('mousedown', (event) => {
    mouseClick = true;
  });

  window.addEventListener('focus', () => {
    if (currentFocusedElement) currentFocusedElement.classList.remove('focused');

    if (mouseClick) return;

    currentFocusedElement = document.activeElement;
    currentFocusedElement.classList.add('focused');

  }, true);
}

function pauseAllMedia() {
  document.querySelectorAll('.js-youtube').forEach((video) => {
    video.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
  });
  document.querySelectorAll('.js-vimeo').forEach((video) => {
    video.contentWindow.postMessage('{"method":"pause"}', '*');
  });
  document.querySelectorAll('video').forEach((video) => video.pause());
  document.querySelectorAll('product-model').forEach((model) => {
    if (model.modelViewerUI) model.modelViewerUI.pause();
  });
}

function removeTrapFocus(elementToFocus = null) {
  document.removeEventListener('focusin', trapFocusHandlers.focusin);
  document.removeEventListener('focusout', trapFocusHandlers.focusout);
  document.removeEventListener('keydown', trapFocusHandlers.keydown);

  if (elementToFocus) elementToFocus.focus();
}

function onKeyUpEscape(event) {
  if (event.code.toUpperCase() !== 'ESCAPE') return;

  const openDetailsElement = event.target.closest('details[open]');
  if (!openDetailsElement) return;

  const summaryElement = openDetailsElement.querySelector('summary');
  openDetailsElement.removeAttribute('open');
  summaryElement.setAttribute('aria-expanded', false);
  summaryElement.focus();
}

class QuantityInput extends HTMLElement {
  constructor() {
    super();
    this.input = this.querySelector('input');
    this.changeEvent = new Event('change', { bubbles: true })

    this.querySelectorAll('button').forEach(
      (button) => button.addEventListener('click', this.onButtonClick.bind(this))
    );
  }

  onButtonClick(event) {
    event.preventDefault();
    const previousValue = this.input.value;

    event.target.name === 'plus' ? this.input.stepUp() : this.input.stepDown();
    if (previousValue !== this.input.value) this.input.dispatchEvent(this.changeEvent);
  }
}

customElements.define('quantity-input', QuantityInput);

function debounce(fn, wait) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

function fetchConfig(type = 'json') {
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': `application/${type}` }
  };
}

/*
 * Shopify Common JS
 *
 */
if ((typeof window.Shopify) == 'undefined') {
  window.Shopify = {};
}

Shopify.bind = function(fn, scope) {
  return function() {
    return fn.apply(scope, arguments);
  }
};

Shopify.setSelectorByValue = function(selector, value) {
  for (var i = 0, count = selector.options.length; i < count; i++) {
    var option = selector.options[i];
    if (value == option.value || value == option.innerHTML) {
      selector.selectedIndex = i;
      return i;
    }
  }
};

Shopify.addListener = function(target, eventName, callback) {
  target.addEventListener ? target.addEventListener(eventName, callback, false) : target.attachEvent('on'+eventName, callback);
};

Shopify.postLink = function(path, options) {
  options = options || {};
  var method = options['method'] || 'post';
  var params = options['parameters'] || {};

  var form = document.createElement("form");
  form.setAttribute("method", method);
  form.setAttribute("action", path);

  for(var key in params) {
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", key);
    hiddenField.setAttribute("value", params[key]);
    form.appendChild(hiddenField);
  }
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
};

Shopify.CountryProvinceSelector = function(country_domid, province_domid, options) {
  this.countryEl         = document.getElementById(country_domid);
  this.provinceEl        = document.getElementById(province_domid);
  this.provinceContainer = document.getElementById(options['hideElement'] || province_domid);

  Shopify.addListener(this.countryEl, 'change', Shopify.bind(this.countryHandler,this));

  this.initCountry();
  this.initProvince();
};

Shopify.CountryProvinceSelector.prototype = {
  initCountry: function() {
    var value = this.countryEl.getAttribute('data-default');
    Shopify.setSelectorByValue(this.countryEl, value);
    this.countryHandler();
  },

  initProvince: function() {
    var value = this.provinceEl.getAttribute('data-default');
    if (value && this.provinceEl.options.length > 0) {
      Shopify.setSelectorByValue(this.provinceEl, value);
    }
  },

  countryHandler: function(e) {
    var opt       = this.countryEl.options[this.countryEl.selectedIndex];
    var raw       = opt.getAttribute('data-provinces');
    var provinces = JSON.parse(raw);

    this.clearOptions(this.provinceEl);
    if (provinces && provinces.length == 0) {
      this.provinceContainer.style.display = 'none';
    } else {
      for (var i = 0; i < provinces.length; i++) {
        var opt = document.createElement('option');
        opt.value = provinces[i][0];
        opt.innerHTML = provinces[i][1];
        this.provinceEl.appendChild(opt);
      }

      this.provinceContainer.style.display = "";
    }
  },

  clearOptions: function(selector) {
    while (selector.firstChild) {
      selector.removeChild(selector.firstChild);
    }
  },

  setOptions: function(selector, values) {
    for (var i = 0, count = values.length; i < values.length; i++) {
      var opt = document.createElement('option');
      opt.value = values[i];
      opt.innerHTML = values[i];
      selector.appendChild(opt);
    }
  }
};

class MenuDrawer extends HTMLElement {
  constructor() {
    super();

    this.mainDetailsToggle = this.querySelector('details');

    if (navigator.platform === 'iPhone') document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);

    this.addEventListener('keyup', this.onKeyUp.bind(this));
    this.addEventListener('focusout', this.onFocusOut.bind(this));
    this.bindEvents();
  }

  bindEvents() {
    this.querySelectorAll('summary').forEach(summary => summary.addEventListener('click', this.onSummaryClick.bind(this)));
    this.querySelectorAll('button').forEach(button => button.addEventListener('click', this.onCloseButtonClick.bind(this)));
  }

  onKeyUp(event) {
    if(event.code.toUpperCase() !== 'ESCAPE') return;

    const openDetailsElement = event.target.closest('details[open]');
    if(!openDetailsElement) return;

    openDetailsElement === this.mainDetailsToggle ? this.closeMenuDrawer(event, this.mainDetailsToggle.querySelector('summary')) : this.closeSubmenu(openDetailsElement);
  }

  onSummaryClick(event) {
    const summaryElement = event.currentTarget;
    const detailsElement = summaryElement.parentNode;
    const isOpen = detailsElement.hasAttribute('open');
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    function addTrapFocus() {
      trapFocus(summaryElement.nextElementSibling, detailsElement.querySelector('button'));
      summaryElement.nextElementSibling.removeEventListener('transitionend', addTrapFocus);
    }

    if (detailsElement === this.mainDetailsToggle) {
      if(isOpen) event.preventDefault();
      isOpen ? this.closeMenuDrawer(event, summaryElement) : this.openMenuDrawer(summaryElement);
    } else {
      setTimeout(() => {
        detailsElement.classList.add('menu-opening');
        summaryElement.setAttribute('aria-expanded', true);
        !reducedMotion || reducedMotion.matches ? addTrapFocus() : summaryElement.nextElementSibling.addEventListener('transitionend', addTrapFocus);
      }, 100);
    }
  }

  openMenuDrawer(summaryElement) {
    setTimeout(() => {
      this.mainDetailsToggle.classList.add('menu-opening');
    });
    summaryElement.setAttribute('aria-expanded', true);
    trapFocus(this.mainDetailsToggle, summaryElement);
    document.body.classList.add(`overflow-hidden-${this.dataset.breakpoint}`);
  }

  closeMenuDrawer(event, elementToFocus = false) {
    if (event !== undefined) {
      this.mainDetailsToggle.classList.remove('menu-opening');
      this.mainDetailsToggle.querySelectorAll('details').forEach(details =>  {
        details.removeAttribute('open');
        details.classList.remove('menu-opening');
      });
      document.body.classList.remove(`overflow-hidden-${this.dataset.breakpoint}`);
      removeTrapFocus(elementToFocus);
      this.closeAnimation(this.mainDetailsToggle);
    }
  }

  onFocusOut(event) {
    setTimeout(() => {
      if (this.mainDetailsToggle.hasAttribute('open') && !this.mainDetailsToggle.contains(document.activeElement)) this.closeMenuDrawer();
    });
  }

  onCloseButtonClick(event) {
    const detailsElement = event.currentTarget.closest('details');
    this.closeSubmenu(detailsElement);
  }

  closeSubmenu(detailsElement) {
    detailsElement.classList.remove('menu-opening');
    detailsElement.querySelector('summary').setAttribute('aria-expanded', false);
    removeTrapFocus();
    this.closeAnimation(detailsElement);
  }

  closeAnimation(detailsElement) {
    let animationStart;

    const handleAnimation = (time) => {
      if (animationStart === undefined) {
        animationStart = time;
      }

      const elapsedTime = time - animationStart;

      if (elapsedTime < 400) {
        window.requestAnimationFrame(handleAnimation);
      } else {
        detailsElement.removeAttribute('open');
        if (detailsElement.closest('details[open]')) {
          trapFocus(detailsElement.closest('details[open]'), detailsElement.querySelector('summary'));
        }
      }
    }

    window.requestAnimationFrame(handleAnimation);
  }
}

customElements.define('menu-drawer', MenuDrawer);

class HeaderDrawer extends MenuDrawer {
  constructor() {
    super();
  }

  openMenuDrawer(summaryElement) {
    this.header = this.header || document.getElementById('shopify-section-header');
    this.borderOffset = this.borderOffset || this.closest('.header-wrapper').classList.contains('header-wrapper--border-bottom') ? 1 : 0;
    document.documentElement.style.setProperty('--header-bottom-position', `${parseInt(this.header.getBoundingClientRect().bottom - this.borderOffset)}px`);

    setTimeout(() => {
      this.mainDetailsToggle.classList.add('menu-opening');
    });

    summaryElement.setAttribute('aria-expanded', true);
    trapFocus(this.mainDetailsToggle, summaryElement);
    document.body.classList.add(`overflow-hidden-${this.dataset.breakpoint}`);
  }
}

customElements.define('header-drawer', HeaderDrawer);

class ModalDialog extends HTMLElement {
  constructor() {
    super();
    this.querySelector('[id^="ModalClose-"]').addEventListener(
      'click',
      this.hide.bind(this)
    );
    this.addEventListener('keyup', (event) => {
      if (event.code.toUpperCase() === 'ESCAPE') this.hide();
    });
    if (this.classList.contains('media-modal')) {
      this.addEventListener('pointerup', (event) => {
        if (event.pointerType === 'mouse' && !event.target.closest('deferred-media, product-model')) this.hide();
      });
    } else {
      this.addEventListener('click', (event) => {
        if (event.target.nodeName === 'MODAL-DIALOG') this.hide();
      });
    }
  }

  show(opener) {
    this.openedBy = opener;
    const popup = this.querySelector('.template-popup');
    document.body.classList.add('overflow-hidden');
    this.setAttribute('open', '');
    if (popup) popup.loadContent();
    trapFocus(this, this.querySelector('[role="dialog"]'));
    window.pauseAllMedia();
  }

  hide() {
    document.body.classList.remove('overflow-hidden');
    this.removeAttribute('open');
    removeTrapFocus(this.openedBy);
    window.pauseAllMedia();
  }
}
customElements.define('modal-dialog', ModalDialog);

class ModalOpener extends HTMLElement {
  constructor() {
    super();

    const button = this.querySelector('button');

    if (!button) return;
    button.addEventListener('click', () => {
      const modal = document.querySelector(this.getAttribute('data-modal'));
      if (modal) modal.show(button);
    });
  }
}
customElements.define('modal-opener', ModalOpener);

class DeferredMedia extends HTMLElement {
  constructor() {
    super();
    const poster = this.querySelector('[id^="Deferred-Poster-"]');
    if (!poster) return;
    poster.addEventListener('click', this.loadContent.bind(this));
  }

  loadContent() {
    window.pauseAllMedia();
    if (!this.getAttribute('loaded')) {
      const content = document.createElement('div');
      content.appendChild(this.querySelector('template').content.firstElementChild.cloneNode(true));

      this.setAttribute('loaded', true);
      this.appendChild(content.querySelector('video, model-viewer, iframe')).focus();
    }
  }
}

customElements.define('deferred-media', DeferredMedia);

class SliderComponent extends HTMLElement {
  constructor() {
    super();
    this.slider = this.querySelector('ul');
    this.sliderItems = this.querySelectorAll('li');
    this.pageCount = this.querySelector('.slider-counter--current');
    this.pageTotal = this.querySelector('.slider-counter--total');
    this.prevButton = this.querySelector('button[name="previous"]');
    this.nextButton = this.querySelector('button[name="next"]');

    if (!this.slider || !this.nextButton) return;

    const resizeObserver = new ResizeObserver(entries => this.initPages());
    resizeObserver.observe(this.slider);

    this.slider.addEventListener('scroll', this.update.bind(this));
    this.prevButton.addEventListener('click', this.onButtonClick.bind(this));
    this.nextButton.addEventListener('click', this.onButtonClick.bind(this));
  }

  initPages() {
    const sliderItemsToShow = Array.from(this.sliderItems).filter(element => element.clientWidth > 0);
    this.sliderLastItem = sliderItemsToShow[sliderItemsToShow.length - 1];
    if (sliderItemsToShow.length === 0) return;
    this.slidesPerPage = Math.floor(this.slider.clientWidth / sliderItemsToShow[0].clientWidth);
    this.totalPages = sliderItemsToShow.length - this.slidesPerPage + 1;
    this.update();
  }

  update() {
    if (!this.pageCount || !this.pageTotal) return;
    this.currentPage = Math.round(this.slider.scrollLeft / this.sliderLastItem.clientWidth) + 1;

    if (this.currentPage === 1) {
      this.prevButton.setAttribute('disabled', 'disabled');
    } else {
      this.prevButton.removeAttribute('disabled');
    }

    if (this.currentPage === this.totalPages) {
      this.nextButton.setAttribute('disabled', 'disabled');
    } else {
      this.nextButton.removeAttribute('disabled');
    }

    this.pageCount.textContent = this.currentPage;
    this.pageTotal.textContent = this.totalPages;
  }

  onButtonClick(event) {
    event.preventDefault();
    const slideScrollPosition = event.currentTarget.name === 'next' ? this.slider.scrollLeft + this.sliderLastItem.clientWidth : this.slider.scrollLeft - this.sliderLastItem.clientWidth;
    this.slider.scrollTo({
      left: slideScrollPosition
    });
  }
}

customElements.define('slider-component', SliderComponent);

class VariantSelects extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('change', this.onVariantChange);
  }

  onVariantChange() {
    this.updateOptions();
    this.updateMasterId();
    this.toggleAddButton(true, '', false);
    this.updatePickupAvailability();
    this.removeErrorMessage();

    if (!this.currentVariant) {
      this.toggleAddButton(true, '', true);
      this.setUnavailable();
    } else {
      this.updateMedia();
      this.updateURL();
      this.updateVariantInput();
      this.renderProductInfo();
      this.updateShareUrl();
    }
  }

  updateOptions() {
    this.options = Array.from(this.querySelectorAll('select'), (select) => select.value);
  }

  updateMasterId() {
    this.currentVariant = this.getVariantData().find((variant) => {
      return !variant.options.map((option, index) => {
        return this.options[index] === option;
      }).includes(false);
    });
    // console.log(this.currentVariant)
  }

  updateMedia() {
    if (!this.currentVariant) return;
    if (!this.currentVariant.featured_media) return;
    const newMedia = document.querySelector(
      `[data-media-id="${this.dataset.section}-${this.currentVariant.featured_media.id}"]`
    );

    if (!newMedia) return;
    const modalContent = document.querySelector(`#ProductModal-${this.dataset.section} .product-media-modal__content`);
    const newMediaModal = modalContent.querySelector( `[data-media-id="${this.currentVariant.featured_media.id}"]`);
    const parent = newMedia.parentElement;
    if (parent.firstChild == newMedia) return;
    modalContent.prepend(newMediaModal);
    parent.prepend(newMedia);
    this.stickyHeader = this.stickyHeader || document.querySelector('sticky-header');
    if(this.stickyHeader) {
      this.stickyHeader.dispatchEvent(new Event('preventHeaderReveal'));
    }
    window.setTimeout(() => {
      parent.scrollLeft = 0;
      parent.querySelector('li.product__media-item').scrollIntoView({behavior: 'smooth'});
    });
  }

  updateURL() {
    if (!this.currentVariant || this.dataset.updateUrl === 'false') return;
    window.history.replaceState({ }, '', `${this.dataset.url}?variant=${this.currentVariant.id}`);
  }

  updateShareUrl() {
    const shareButton = document.getElementById(`Share-${this.dataset.section}`);
    if (!shareButton) return;
    shareButton.updateUrl(`${window.shopUrl}${this.dataset.url}?variant=${this.currentVariant.id}`);
  }

  updateVariantInput() {
    const productForms = document.querySelectorAll(`#product-form-${this.dataset.section}, #product-form-installment`);
    productForms.forEach((productForm) => {
      const input = productForm.querySelector('input[name="id"]');
      input.value = this.currentVariant.id;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
  }

  updatePickupAvailability() {
    const pickUpAvailability = document.querySelector('pickup-availability');
    if (!pickUpAvailability) return;

    if (this.currentVariant && this.currentVariant.available) {
      pickUpAvailability.fetchAvailability(this.currentVariant.id);
    } else {
      pickUpAvailability.removeAttribute('available');
      pickUpAvailability.innerHTML = '';
    }
  }

  removeErrorMessage() {
    const section = this.closest('section');
    if (!section) return;

    const productForm = section.querySelector('product-form');
    if (productForm) productForm.handleErrorMessage();
  }

  renderProductInfo() {
    fetch(`${this.dataset.url}?variant=${this.currentVariant.id}&section_id=${this.dataset.section}`)
      .then((response) => response.text())
      .then((responseText) => {
        const id = `price-${this.dataset.section}`;
        const html = new DOMParser().parseFromString(responseText, 'text/html')
        const destination = document.getElementById(id);
        const source = html.getElementById(id);

        if (source && destination) destination.innerHTML = source.innerHTML;

        const price = document.getElementById(`price-${this.dataset.section}`);

        if (price) price.classList.remove('visibility-hidden');
        this.toggleAddButton(!this.currentVariant.available, window.variantStrings.soldOut);
      });
  }

  toggleAddButton(disable = true, text, modifyClass = true) {
    const productForm = document.getElementById(`product-form-${this.dataset.section}`);
    if (!productForm) return;
    const addButton = productForm.querySelector('[name="add"]');
    const addButtonText = productForm.querySelector('[name="add"] > span');

    if (!addButton) return;

    if (disable) {
      addButton.setAttribute('disabled', 'disabled');
      if (text) addButtonText.textContent = text;
    } else {
      addButton.removeAttribute('disabled');
      addButtonText.textContent = window.variantStrings.addToCart;
    }

    if (!modifyClass) return;
  }

  setUnavailable() {
    const button = document.getElementById(`product-form-${this.dataset.section}`);
    const addButton = button.querySelector('[name="add"]');
    const addButtonText = button.querySelector('[name="add"] > span');
    const price = document.getElementById(`price-${this.dataset.section}`);
    if (!addButton) return;
    addButtonText.textContent = window.variantStrings.unavailable;
    if (price) price.classList.add('visibility-hidden');
  }

  getVariantData() {
    this.variantData = this.variantData || JSON.parse(this.querySelector('[type="application/json"]').textContent);
    return this.variantData;
  }
}

customElements.define('variant-selects', VariantSelects);

class VariantRadios extends VariantSelects {
  constructor() {
    super();
  }

  updateOptions() {
    const fieldsets = Array.from(this.querySelectorAll('fieldset'));
    this.options = fieldsets.map((fieldset) => {
     return Array.from(fieldset.querySelectorAll('input')).find((radio) => radio.checked).value;
    });
  }
}

customElements.define('variant-radios', VariantRadios);



// var initials = {
//   load: function() {
//           $('.engrave:not(.cart-engrave)').text(this.get('null',false));
//       $('.engrave.airpods-bundle-set:not(.cart-engrave),.engrave.mini-tote:not(.cart-engrave)').text(this.get("shortMonogram",false));   //this one  
//   $('.engrave.phone-case-bundle:not(.cart-engrave)').text(this.get("null",true)); 
//   $('.engrave.phone-case:not(.cart-engrave)').text(this.get("null",true)); 
// $('.engrave.airpods:not(.cart-engrave):not(.airpods-pro) ,.engrave.mini-tote:not(.cart-engrave),.engrave.apple-watch-band:not(.cart-engrave),.engrave.the-apple-watch-band:not(.cart-engrave)').text(this.get("shortMonogram",false)); 
//     $('.engrave.airpods-bundle-set:not(.cart-engrave) ,.engrave.mini-tote:not(.cart-engrave)').text(this.get("shortMonogram",false));   //this one  
//     $('.engrave.airpods:not(.cart-engrave):not(.airpods-pro)').text(this.get("shortMonogram2",false)); 
//   if($('.initials').hasClass('phone-case') || $('.initials').hasClass('phone-case-bundle')) {
//     $('.initials').val(this.get("null",true));
//   }
//   else {
//     $('.initials').val(this.get('null',false));
//   }
//     if(this.get('null',false).length != 0) {
//     motherDayAvailable(false);
//   }
//     this.update();
//   },
//   update: function() {
//     let field = $('.initials');
//     let limit = 2;
//     if($('.initials').hasClass('airpods') ) {
//        limit = 3;
//     }
//     if(field.length != 0) {
//       let text = $(field).val();
//       if(checkDot(text)) {
//       	limit = limit+  1;
//       }
//       $('.initials-limit').html(text.length + '/' + 5);
//       $('.initials-limit-shortMonogram').html(text.length + '/' + limit);
//       $('.initials-limit-airpods').html(text.length + '/' + limit);
//       if(text.length != 0) {
//         $('.initials_field').addClass('has-value');
//       } else {
//         $('.initials_field').removeClass('has-value');
//       }
//     }
//   },
//     get: function(shortMonogram = "null", phone_case = false) {
//             	return localStorage.getItem('mdsEngraving') != null ? localStorage.getItem('mdsEngraving') : ''; 

//   },
//   getMonogram: function() {
//     return $('.initials').val();
//   },
//   set: function(letters) {
//     localStorage.setItem('mdsEngraving', letters.toUpperCase()); 
//     this.load();
//   },
//   invalid: function(e, t) {
//     e.preventDefault();
//     window.clearTimeout(clearInvalid);
//     $('.initials').addClass('invalid');
//     $('.tooltip').addClass('active');
//     clearInvalid = window.setTimeout(function() {
//       $('.initials').removeClass('invalid');
//       $('.tooltip').removeClass('active');
//     }, 1000 * t);
//   },
//   showSlide: function() {
//       const productSliders = $('.product-images, .product-images-nav, .product-images-mobile').find('.p-slider');
//       if($(productSlider)[0] != null) {
//         try {
//           $(productSliders).slick('slickGoTo', 0, true);
//           if(window.matchMedia('(max-width:991px)').matches) {
//             let mobileSlider = document.querySelector('.product-images-mobile');
//             if(mobileSlider != null) {
//               $('html, body').animate({scrollTop: mobileSlider.offsetTop}, 300);
//             }
//           }
//         } catch (error) {

//         }
//       }
//   }
// };
// var foil = {
//   load: function(clickTarget) {
//     $('.engrave:not(.cart-engrave), .zodiac-engrave:not(.cart-engrave)').removeClass('gold').removeClass('silver').removeClass('rose').addClass(this.get().toLowerCase());

//     if(this.get() == 'Gold') {
//       $('.silver-warning').addClass('hidden');
//       $('.customizer-color-text').text('Colour - Gold');
//     }
//     else if(this.get() == 'Rose') {
//       $('.customizer-color-text').text('Colour - Rose Gold');
//       $('.silver-warning').removeClass('hidden');
//     }
//     else {
//       $('.silver-warning').removeClass('hidden');
//       $('.customizer-color-text').text('Colour - Silver');
//     }

//     if(clickTarget) {
//       $('.foil-list input').removeClass('checked');
//       $('.foil-list input[value="'+this.get()+'"]').addClass('checked').prop('checked', true);
//     }
//   },
//   get: function() {
//     return localStorage.getItem('mdsFoil') != null ? localStorage.getItem('mdsFoil') : 'Gold';
//   },
//   set: function(colour) {
//     localStorage.setItem('mdsFoil', colour);
//     $('.foil-list input').removeClass('checked');
//     $('.foil-list input[value="'+colour+'"]').addClass('checked').prop('checked', true);
//     this.load(false);
//   }
// };
// // CUSTOMIZER
// var customizer = {
//   load: function(update) {
//     if(update) {
//       let last_open = localStorage.getItem('mdsCustomize');
//       let target = document.querySelector('[data-tab]');
//       if(last_open != null) {
//         let temp = document.querySelector('[data-tab="'+ last_open +'"]');
//         if(temp != null) {
//           target = temp;
//         }
//       }
//       let id = target.dataset.tab;
   
//       localStorage.setItem('mdsCustomize', id);
//       $('.customizer_tab.active').removeClass('active');
//       $('.customizer_panel.active').removeClass('active');
//       $('[data-tab="'+id+'"]').addClass('active');
//       $('[data-panel="'+id+'"]').addClass('active');

//       var isInstagram = navigator.userAgent.indexOf('Instagram') != -1;
//       var isBugged = navigator.userAgent.indexOf('iPhone11') != -1;
//       if (isInstagram && isBugged) {
//         $('.customizer').css('max-height', 'calc(100% - 36px)').css('overflow', 'scroll');
//         $('.customizer_wrap').css('padding-bottom', '4rem');
//       }
//     }
//     customizer.update();

//     if(update) {
//       setInterval(function() {
//         if($('.customizer').hasClass('open')) {
//           if($('.customizer_tab.active').length != 0) {
//             $('.customizer_tab-active').css('width', $('.customizer_tab.active').width());
//             $('.customizer_tab-active').css('left', $('.customizer_tab.active').offset().left - $('.customizer_tab.active').offsetParent().offset().left);
//           }
//         }
//       }, 100);
//     }
//   },
//   update: function() {
//    if($('#mym_variant').val() != "true") {
//   	if($('.initials').hasClass('phone-case')) {
//       $('#input_text').val(initials.get('null',true));
//      }
//       else {
//   	$('#input_text').val(initials.get());
//   }
//     if(initials.get()!=''){
// 	$('.customizer__text--preset').text(initials.get());
//     }
//     $('#input_foil-color').val(foil.get());

//    }
//     $('.customizer_input').removeAttr('disabled');

//     let customized = false;

//      if(initials.get('null',true) != "") {
//       if($('.initials').hasClass('phone-case')) {
//        $('.customizer_choice').html(initials.get('null',true));
//      }
//      else {
//        $('.customizer_choice').html(initials.get());
//      }
//       customized = true;
//     }
//     if(customized && $('#mym_variant').val() != "true" || $('.item-icon').hasClass('active')) {
//       $('.customizer_edit').removeClass('hide');
//       $('.customizer_personalize').addClass('hide');
//     } else {
//       $('.customizer_edit').addClass('hide');
//       $('.customizer_personalize').removeClass('hide');
//     }
//   },
//   open: function() {
//     let last_open = localStorage.getItem('mdsCustomize');

//     if(last_open != null) {
//       customizer.change.tab(last_open);
//     }
//     if(! $('body').hasClass('template-page-valentines')) {


//         $('.customizer').addClass('open');
//         $('html').addClass('c-open').addClass('no-scroll');
//         $('body').css('height', '100vh');

//     }
//     else {

//         $('.customizer').addClass('open');
//         $('html').addClass('c-open').addClass('no-scroll');
//         $('body').css('height', '100vh');
//     }

//   },
//   close: function() {

//     $('.matching-initials').removeClass('invalid');
//     customizer.update();
//      if(! $('body').hasClass('template-page-valentines')) {

//         $('.customizer').removeClass('open');
//         $('html').removeClass('c-open').removeClass('no-scroll');

//   }
//   else {
//     $('.customizer').removeClass('open');
//         $('html').removeClass('c-open').removeClass('no-scroll');
//   }
//    if(! $('body').hasClass('template-page-valentines')) {
//     if(window.matchMedia("(max-width:991px)").matches ) {
//       if(initials.get() != "") {
//         window.scrollTo(0, $('.product-images-mobile').offset().top);
//       }
//     }
//   }
//     if($('body').hasClass('template-page-valentines')) {
//         if($('.set_2_product select').attr('disabled')) {
//           $('.set_main:not(.hide) .set_btn_1').trigger('click');
//       }
//     else if($('.set_3_product button').attr('disabled') && (!$('.set_2_product select').attr('disabled'))) {
//            $('.set_main:not(.hide) .set_btn_2').trigger('click');
//       }
//     }
//   },
//   reset: function(tabchange=false,tabtext="null") {
//     if(tabchange) {
//     //do nothing
//       if(tabtext=="text" || "fathers" ){
//         initials.set($('.customizer__text--preset').text());
//       }
    
//     }
//     else {
//       foil.set('Gold');
//       initials.set('');
//       $('.customizer__zodiac--preset').text('No Zodiac');
//       $('.customizer__text--preset').text('');
//       $('.customizer_panel.active .active').removeClass('active');
//        $('.item-icon').removeClass('active');
     
//     }
//     this.validation.text(false);

//   },
//   validation: {
//     text: function(hasError,chess=null) {

//       if(hasError) {
//         $('.initials,.initials_text').addClass('invalid');
//           if($('.initials').hasClass('shortMonogram')) {
//             $('.initials_text .error').text('Maximum 2 Characters with only English letters, numbers and the symbols: . & and ♡ (no spaces)');
//           }
//           else if($('.initials').hasClass('airpods')) {
//             $('.initials_text .error').text('Maximum 3 Characters with only English letters, numbers and the symbols: . & and ♡ (no spaces)');
//           }
//           else {
//           $('.initials_text .error').text('Maximum 5 Characters with only English letters, numbers and the symbols:  # & @ - ~ ! = $ ^ * and ♡ (no spaces)');
//           }
//         $('.customizer_save').attr('disabled', true);
//         $('.customizer_save').attr('aria-disabled', true);
//       } else {
//         $('.initials,.initials_text').removeClass('invalid');
//         $('.customizer_save').removeAttr('disabled');
//         $('.customizer_save').removeAttr('aria-disabled');
//       }
//     }
//   },
//   focus: function() {
//     $('.initials_field').addClass('has-focus');
//   },
//   unfocus: function() {
//     if(! $('body').hasClass('template-page-valentines')) {
//       if(window.matchMedia('(max-width:991px)').matches) {
//         // Scroll up
//         if($('.customizer').hasClass('open')) {
//           window.scrollTo(0, 0);
//         }
//       }
//     }
//     $('.initials_field').removeClass('has-focus');
//   },
//   change: {
//     variant: function(color) {
// color = color.split("mm / ").pop();
//       $('.color-list input').each(function(){
//         $(this).prop('checked', false);
//         $(this).next('span').css('border-color','transparent');
//       });
//       $('.color-list input[value="'+color+'"]').each(function(){
//         $(this).prop('checked', true);
//         $(this).next('span').css('border-color','#000');
//       });
//       $('.list_product-images .active').removeClass('active');
//       $('[data-color="'+color.replace(/\W+/g, "-").toLowerCase()+'"]').addClass('active');
//       document.querySelector('.container_product-images').setAttribute('class', 'container_product-images ' + color.replace(/\W+/g, "-").toLowerCase());
//       if(color.includes('Bondi') || color.includes('Fuchsia') || color.includes('White') || color.includes('Ivory') || color.includes('Manhattan') || color.includes('Lavender')) {
//          $('.limited_variant_handles').removeClass('hide');
//       }
//       else {
//         $('.limited_variant_handles').addClass('hide');
//       }
//       $('.label_current-color').text(color);
//     },
//     tab: function(id) {
//       let last_open = localStorage.getItem('mdsCustomize');
//       if(last_open == null || last_open != id) {
//         localStorage.setItem('mdsCustomize', id);
//         customizer.reset(true,id);
//       }
//       $('.customizer_tab.active').removeClass('active');
//       $('.customizer_panel.active').removeClass('active');
//       $('[data-tab="'+id+'"]').addClass('active');
//       $('[data-panel="'+id+'"]').addClass('active');
//     },
//     text: function(e) {
//       let chess_counter=0;
//       let text = $('.customizer_panel.active .initials').val().toUpperCase();
//       let limit=6; //for airpods
//       let dotcounter=0;
//       if($('.initials').hasClass('shortMonogram')) { //for airpods
//        for (var position = 0; position < text.length; position++) {
//       	if (text.charAt(position) == '.') {
//           limit = 4; //for airpods
//           dotcounter++;
//         }
//    	  }
//         if(dotcounter==0) {
//         	limit = 3;
//           	$('.initials.shortMonogram').attr('maxlength',3);
//         }
//         else {
//         	$('.initials.shortMonogram').attr('maxlength',4);
//         }

//      } //for airpods
//      if($('.initials').hasClass('airpods')) { //for airpods
//        for (var position = 0; position < text.length; position++) {
//         if (text.charAt(position) == '.') {
//           limit = 5; //for airpods
//           dotcounter++;
//         }
//       }
//         if(dotcounter==0) {
//           limit = 4;
//             $('.initials.airpods').attr('maxlength',4);
//         }
//         else {
//           $('.initials.airpods').attr('maxlength',5);
//         }

//      }
//       if($('.initials').hasClass('apple-watch-band') || $('.initials').hasClass('Tech')){
//          	regex = new RegExp('^[a-zA-Z0-9.]+$');
//          }

//         if(text.length <= limit) {
//           if(text.length <= (limit-1) && (regex.test(text) || text == '') && (limit==6 || (limit<6 ))) {  //for airpods
//             initials.set(text);
//             initials.update();
//             $('.customizer__text--preset').text(text);
//             customizer.validation.text(false);
//           } else {
//             $('.initials').val(text);
//             initials.update();
//             customizer.validation.text(true);
//           }
//         } else {
//             if(e.preventDefault() != null){
//               e.preventDefault();
//             }
//           initials.load();
//           customizer.validation.text(true);
//         }

//     },
//     heart: function() {
//       let text = $('.customizer_panel.active .initials').val().toUpperCase();
//       let limit=6;
//       if($('.initials').hasClass('airpods') || $('.initials').hasClass('airpods-bundle-set')) {
//      	 limit=4;
//       }
//       if(text.length < limit) {
//         $('.initials').val(text + "\u2661")
//       }
//       this.text(null);

//       $('.customizer_panel.active .initials').addClass('has-focus');
//       $('.customizer_panel.active .initials').focus();
//     },
//     emoji: function(event) {

//       let text = $('.customizer_panel.active .initials').val().toUpperCase();
//       let limit=6;
//       if($('.initials').hasClass('airpods') || $('.initials').hasClass('airpods-bundle-set')) {
//        limit=4;
//       }
//       if(text.length < limit) {

//         var emjoi_text = $(event).data( "emoji" ); 
//           if(emjoi_text == '@') {
//            emjoi_text= '\u0040';
//           }
//           if(emjoi_text == '-') {
//            emjoi_text= '\u002D';
//           }
//           if(emjoi_text == '!') {
//            emjoi_text= '\u0021';
//           }
//           if(emjoi_text == '=') {
//            emjoi_text= '\u003D';
//           }
//           if(emjoi_text == '$') {
//            emjoi_text= '\u0024';
//           }
//           if(emjoi_text == '^') {
//            emjoi_text= '\u005E';
//           }
//           if(emjoi_text == '~') {
//            emjoi_text= '\u007E';
//           }
//           if(emjoi_text == '*') {
//            emjoi_text= '\u002A';
//           }
          
         
//         $('.initials').val(text + emjoi_text);
//       }
//       this.text(null);

//       $('.customizer_panel.active .initials').addClass('has-focus');
//       $('.customizer_panel.active .initials').focus();
//     },
//     foil: function(color) {
//       foil.set(color);
//     },
//   }
// };

// var productvariant = document.querySelector('[name=Color]').value;
// document.querySelector('.product_variantcolor').textContent = productvariant;