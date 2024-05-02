$(document).ready(function () {
  $(document).click(function (event) {
    $(
      ".product-form__error-message-wrapper.product-form__main-error-message"
    ).hide();
    $(
      ".product-form__error-message-wrapper.product-form__sticky-error-message"
    ).hide();
  });
  $("digitalgift").click(function () {
    $("#cartpopupboxnav").removeClass("activenav loader_active");
    $("html").removeClass("cart-open");
  });
  // apple watch js

  // ends
  window.theme = window.theme || {};
  $(".size_help").click(function () {
    $(".size_help-popup").addClass("open");
    $(".size_help-popup").css("display", "flex");
    $("html").addClass("no-scroll");
  });

  $(
    ".size_help-close, .size_help_mask, .preorder-popup_mask, .size_help-btn"
  ).click(function (e) {
    e.preventDefault();
    $(".size_help-popup").removeClass("open");
    $("html").removeClass("no-scroll");
  });
  $.getJSON("https://api.db-ip.com/v2/free/self", function (data) {
    if (data.countryCode == "US") {
      $(".cart-status.cart-afterpay").removeClass("hide");
    }
  });

  $(".afterpay .afterpay-svg, .cart-status.cart-afterpay p").click(function () {
    $(".afterpay-popup").addClass("open");
    $("html").addClass("no-scroll");
  });

  $(".afterpay-close, .preorder-popup_mask").click(function () {
    $(".afterpay-popup").removeClass("open");
    $("html").removeClass("no-scroll");
  });

  $(".empty-cart-only").hide();
  //////////////////// cart drawer custom js
  // dom update cart
  updateCart();

  // ends

  $(document).on("click", "#cartopennav, #cartopennavmov", function (e) {
    e.preventDefault();
    var cart_count = $(".btn-cart-trigger__count").text();
    if (cart_count == 00) {
      $("#cartpopupboxnav").addClass("activenav");
      $("html").addClass("cart-open");
      $(".header-cart__progg").show();
      $(".emptycart__contents").show();
      $(".content-cart-nav").show();
      $("#cart_container_id").empty();
      $(".cart-footer-nav").hide();
      $(".gift_product").hide();
      $(".upsellempy").hide();
      $(".cart_gift_box").addClass("hide");
      $(".content-cart-nav .not-empty-cart").hide();
      $("#cartpopupboxnav").removeClass("loader_active");
      $(".cart__matching").hide();
    } else {
      $("html").addClass("cart-open");
      $("#cartpopupboxnav").addClass("activenav loader_active");
      $("#cartpopupboxnav").removeClass("loader_active");

      // updateCart();
    }
  });

  $(".modal-header-nav .close, .menu-mask").click(function () {
    $("#cartpopupboxnav").removeClass("activenav loader_active");
    $("html").removeClass("cart-open");
  });

  $(document).on("change", ".dropdown-btn", function (e) {
    var variantid = $("option:selected", this).attr("variantid");
    $.post(
      "/cart/add.js",
      {
        quantity: 1,
        id: variantid,
      },
      function (item) {
        updateCart();
      },
      "json"
    );
  });

  // new gift js
  $(".listvar-id a").click(function () {
    var newvar_id = $(this).attr("data-varoption");
    $(".product-form__cart-submit").attr("data-id", newvar_id);
  });

  $(".digitalgift .product-form__cart-submit").click(function (event) {
    $("html").addClass("cart-open");
    event.preventDefault();
    $(".loading-overlay__spinner").removeClass("hidden");
    $(".loading-overlay__spinner").addClass("hidden");

    $.post(
      "/cart/add.js",
      {
        quantity: 1,
        id: $(this).attr("data-id"),
      },
      function (item) {
        $(".cart_popup_wrap").addClass("activenav");
        $(".full_cart_loader").addClass("active");
        updateCart();
      },
      "json"
    );
  });

  // ends
  var shop_url = window.origin;

  function addToCart(variant_id, qty, props = null, ButtonName) {
    // if(props.Text == '')
    // {
    //   props = null;
    // }

    //   else if(props.Text == '' && props.PreOrder != '')
    //   {
    //     props = props
    //   }
    // else
    // {
    //   props = props
    // }
    $(".product-form__error-message").text("");
    $.post(shop_url + "/cart/add.js", {
      quantity: qty,
      id: variant_id,
      properties: props,
    })
      .done(function () {
        updateCart();
        $(".loading-overlay__spinner").addClass("hidden");
        $(".gift-spin").addClass("hide");
        $("#cartpopupboxnav").addClass("activenav loader_active");
        $("html").addClass("cart-open");
      }, "json")
      .fail(function (XMLHttpRequest) {
        // console.log("responseText",XMLHttpRequest.responseText);
        var response = JSON.parse(XMLHttpRequest.responseText);
        // console.log("description",response.description);
        $(".loading-overlay__spinner").addClass("hidden");
        $(
          ".product-form__error-message-wrapper.product-form__main-error-message"
        ).hide();
        $(
          ".product-form__error-message-wrapper.product-form__sticky-error-message"
        ).hide();

        if (ButtonName == "main-atc") {
          $(
            ".product-form__error-message-wrapper.product-form__main-error-message"
          ).show();
          $(
            ".product-form__error-message-wrapper.product-form__main-error-message .product-form__error-message"
          ).text(response.description);
        }
        if (ButtonName == "sticky-atc") {
          $(
            ".product-form__error-message-wrapper.product-form__sticky-error-message"
          ).show();
          $(
            ".product-form__error-message-wrapper.product-form__sticky-error-message .product-form__error-message"
          ).text(response.description);
        }
      });
  }

  $(document).on("click", ".cart_add_btn", function (e) {
    e.preventDefault();
    var Ptext = $("input[name='properties[Text]']").val();
    var Pcolor = $("input[name='properties[Foil Colour]").val();
    var redcta = $("input[name='properties[Pre-Order]']").val();
    if ($("#input_curate_text").val() !== "") {
      var curatedtext = $("#input_curate_text").val();
    } else {
      var curatedtext = localStorage.getItem("mdsengraving2");
    }
    var variant_id = $(this).attr("data-id");
    var prohandle = $(this).attr("data-prodhandle");
    var redcta = $("input[name='properties[Pre-Order]']").val();
    var ButtonName = "main-atc";
    $(".loading-overlay__spinner").removeClass("hidden");
    $(this).children(".gift-spin").removeClass("hide");
    if (
      variant_id == 40353994113105 ||
      variant_id == 40485027676241 ||
      variant_id == 40266306224209 ||
      Ptext == "" ||
      Pcolor == "" ||
      variant_id == 40329240936529
    ) {
      var props = {
        Text: "",
        "Foil Colour": "",
        PreOrder: redcta,
        Phrase: "",
      };
    } else {
      var props = {
        Text: Ptext,
        "Foil Colour": Pcolor,
        PreOrder: redcta,
        Phrase: "",
      };
    }
    if (curatedtext !== "") {
      var props = {
        Text: "",
        "Foil Colour": Pcolor,
        PreOrder: redcta,
        Phrase: curatedtext,
      };
    }
    let properties = props;
    var qty = 1;
    $(".full_cart_loader").addClass("active");
    if (
      props.Text != "" &&
      props.Text != null &&
      $(this).parent().find(".cart__props").hasClass("hide") == false
    ) {
      addToCart(variant_id, qty, properties, ButtonName);
    } else {
      addToCart(variant_id, qty, properties, ButtonName);
    }
  });
  $(document).on("click", ".floating_atc_button", function (e) {
    e.preventDefault();
    var Ptext = $("input[name='properties[Text]']").val();
    var Pcolor = $("input[name='properties[Foil Colour]").val();
    if ($("#input_curate_text").val() !== "") {
      var curatedtext = $("#input_curate_text").val();
    } else {
      var curatedtext = localStorage.getItem("mdsengraving2");
    }

    var variant_id = $(this).attr("data-id");
    var ButtonName = "sticky-atc";
    var redcta = $("input[name='properties[Pre-Order]']").val();
    if ($(this).attr("id") == "BIS_trigger") {
    } else {
      $(".loading-overlay__spinner").removeClass("hidden");

      if (
        variant_id == 40485027676241 ||
        variant_id == 40266306224209 ||
        Ptext == "" ||
        Pcolor == "" ||
        curatedtext == ""
      ) {
        var props = {
          Text: "",
          "Foil Colour": "",
          PreOrder: redcta,
          Phrase: "",
        };
      } else {
        var props = {
          Text: "",
          "Foil Colour": "",
          PreOrder: redcta,
          Phrase: "",
        };
      }
      if (curatedtext !== "") {
        var props = {
          Text: "",
          "Foil Colour": Pcolor,
          PreOrder: redcta,
          Phrase: curatedtext,
        };
      }
      let properties = props;
      var qty = 1;
      console.log("propertiescurated", properties);
      $(".full_cart_loader").addClass("active");
      if (
        props.Text != "" &&
        props.Text != null &&
        $(this).parent().find(".cart__props").hasClass("hide") == false
      ) {
        addToCart(variant_id, qty, properties, ButtonName);
      } else {
        addToCart(variant_id, qty, properties, ButtonName);
      }
    }
  });

  $(document).on("click", ".free_gift_product_aus", function (e) {
    e.preventDefault();
    var variant_id = $(this).attr("data-id");
    $(".loading-overlay__spinner").removeClass("hidden");
    $(this).children(".gift-spin").removeClass("hide");
    var ButtonName = "";
    if (variant_id == 40485027676241) {
      var props = {
        Text: "",
        "Foil Colour": "",
        curated: "",
      };
    } else {
      var props = {
        Text:
          localStorage.getItem("mdsEngraving") != null
            ? localStorage.getItem("mdsEngraving")
            : "",
        "Foil Colour":
          localStorage.getItem("mdsEngraving") != null
            ? localStorage.getItem("mdsFoil")
            : "",
        curated:
          localStorage.getItem("mdsengraving2") != null
            ? localStorage.getItem("mdsengraving2")
            : "",
      };
    }
    let properties = props;
    console.log(properties, "kdfnkdnf");
    var qty = 1;
    if (
      props.Text != "" &&
      props.Text != null &&
      $(this).parent().find(".cart__props").hasClass("hide") == false
    ) {
      addToCart(variant_id, qty, properties, ButtonName);
    } else {
      addToCart(variant_id, qty, properties, ButtonName);
    }
  });
  $(document).on("click", ".cart_add_btn_gift_cart", function (e) {
    e.preventDefault();
    $(".loading-overlay__spinner").removeClass("hidden");
    $(this).children(".gift-spin").removeClass("hide");
    var variant_id = $(this).attr("data-id");
    var ButtonName = "";
    if (variant_id == 40485027676241 || variant_id == 40255413420113) {
      var props = {
        Text: "",
        "Foil Colour": "",
        curated: "",
      };
    } else {
      var props = {
        Text:
          localStorage.getItem("mdsEngraving") != null
            ? localStorage.getItem("mdsEngraving")
            : "",
        "Foil Colour":
          localStorage.getItem("mdsEngraving") != null
            ? localStorage.getItem("mdsFoil")
            : "",
        curated:
          localStorage.getItem("mdsengraving2") != null
            ? localStorage.getItem("mdsengraving2")
            : "",
      };
    }

    let properties = props;
    var qty = 1;
    console.log("properties2", properties);
    if (
      props.Text != "" &&
      props.Text != null &&
      $(this).parent().find(".cart__props").hasClass("hide") == false
    ) {
      addToCart(variant_id, qty, properties, ButtonName);
    } else {
      addToCart(variant_id, qty, properties, ButtonName);
    }
  });

  function makeitmatchpdp(color) {
    var x = 0;
    $(
      ".grid__item .card-wrapper .container_product-colors .list_product-colors .swiper-wrapper .swiper-slide .color-option span"
    ).each(function () {
      var input_color_value = $(this).attr("data-color");
      if (input_color_value == color) {
        var split_data = $(this)
          .parents()
          .parents(".swiper-slide")
          .attr("aria-label")
          .split("/");
        if (typeof split_data != "undefined") {
          var index = $(this)
            .parents()
            .parents()
            .parents()
            .parents()
            .parents()
            .parents(".grid__item")
            .attr("data-index");
          $(this).trigger("mouseenter");
          x++;
          swiper[index].slideTo(split_data[0]);
        }
      }
    });
  }
  function generateMatchingItems(items, parent_class, item_class, colour) {
    let output = document.createElement("div");
    output.setAttribute("class", parent_class);
    if (items.length == 1) {
      output.classList.add("lefty");
    }
    const limit = 4;
    let toShow = items.length < limit ? items.length : limit;
    for (let i = 0; i < toShow; i++) {
      let product = items[i];
      let variant = "";
      if (product.product_type.includes("Watch")) {
        variant = product.variants.filter(function (variant) {
          return variant.option2 == colour;
        })[0];
      } else {
        variant = product.variants.filter(function (variant) {
          return variant.option1 == colour;
        })[0];
      }
      let varURL = "/products/" + product.handle + "?variant=" + variant.id;
      var preorder_matching = document.querySelector("#preorder" + product.id);
      let is_preorder_matching = false;
      var preorder_text = null;
      if (preorder_matching != null) {
        let variants_matching = preorder_matching.value.split(",");
        //  console.log(variants_matching);
        for (var j = 0; j < variants_matching.length; j++) {
          let values = variants_matching[j].split(":");
          if (values[0] == variant.id) {
            preorder_matching = values[1] == "true";
          }
        }
      }
      if (preorder_matching) {
        for (var x = 0; x < product.tags.length; x++) {
          if (product.tags[x].includes("eta:")) {
            preorder_text = product.tags[x].split(":")[1];
          }
        }
      }

      let product_wrapper = document.createElement("div");
      product_wrapper.setAttribute("class", item_class);
      output.appendChild(product_wrapper);

      let featured_item = document.createElement("div");
      featured_item.classList.add("featured-item");
      product_wrapper.appendChild(featured_item);

      let featured_product_image = document.createElement("div");
      featured_product_image.classList.add("feautred-product-image");
      featured_item.appendChild(featured_product_image);

      let image_link = document.createElement("a");
      image_link.classList.add("image-link");
      image_link.setAttribute("href", varURL);
      featured_product_image.appendChild(image_link);

      let image_wrapper = document.createElement("div");
      image_wrapper.setAttribute(
        "class",
        "grid-view-item__image-wrapper product-card__image-wrapper js product-image-fix"
      );
      image_wrapper.classList.add(
        variant.option1.replace(/ /g, "-").toLowerCase()
      );
      image_link.appendChild(image_wrapper);

      let rel = document.createElement("div");
      rel.classList.add("relative");
      image_wrapper.appendChild(rel);

      let image = document.createElement("img");
      image.setAttribute("class", "grid-view-item__image active");
      image.setAttribute("src", variant.featured_image.src);
      rel.appendChild(image);

      let is_art_series = product.tags.indexOf("customize_artwork") != -1;
      // zodiac
      let is_zodiac_series = product.tags.indexOf("customize_zodiac") != -1;

      let is_airpods_pro = product.tags.indexOf("airpods_pro") != -1;
      let mini_clutch = product.tags.indexOf("mini_clutch") != -1;

      let eng = is_zodiac_series
        ? "engrave icon-chess-piece"
        : is_art_series
        ? "artwork-engrave"
        : is_airpods_pro
        ? "engrave icon-chess-piece airpods-pro"
        : mini_clutch
        ? "engrave icon-chess-piece mini-clutch"
        : "engrave icon-chess-piece";

      let text_class =
        eng +
        " " +
        product.product_type.replace(/ /g, "-").toLowerCase() +
        " " +
        foil.get();
      let text = document.createElement("div");

      if (is_zodiac_series) {
        text.classList.add(zodiac.get().replace(/ /g, "-").toLowerCase());
      }
      if (is_art_series) {
        text.classList.add(artwork.get().replace(/ /g, "-").toLowerCase());
      } else {
        text.innerText = initials.get(product.product_type);
      }
      text.setAttribute("class", text_class);
      rel.appendChild(text);

      let featured_details = document.createElement("div");
      featured_details.classList.add("featured-details");
      featured_details.classList.add("rte");
      featured_item.appendChild(featured_details);

      let p_link = document.createElement("a");
      p_link.setAttribute("href", varURL);
      featured_details.appendChild(p_link);

      let p_title = document.createElement("h4");
      p_title.innerHTML = variant.option1 + "<br>" + product.title;
      p_link.appendChild(p_title);

      let p_price_wrap = document.createElement("div");
      p_price_wrap.classList.add("price");
      featured_details.appendChild(p_price_wrap);

      if (
        variant.compare_at_price != null &&
        product.product_type != "Gift Boxes & Tins"
      ) {
        let variant_compare_price = document.createElement("span");
        variant_compare_price.classList.add("price");
        variant_compare_price.classList.add("compare_price_matching");
        variant_compare_price.classList.add("cart_text");
        variant_compare_price.innerHTML = "$" + variant.compare_at_price;
        p_price_wrap.appendChild(variant_compare_price);
      }

      let p_price = document.createElement("span");
      p_price.setAttribute("class", "price-item price-item--regular");
      if (variant.compare_at_price != null) {
        p_price.setAttribute("class", "compare_price_color");
      }
      p_price.innerText = "$" + parseInt(variant.price) * 100;
      p_price_wrap.appendChild(p_price);

      let p_info = document.createElement("p");
      p_info.innerHTML = product.body_html;

      p_info.innerHTML = mdsProductDes(product.product_type, mini_clutch);
      featured_details.appendChild(p_info);
      p_info.outerHTML += "<br>";

      let p_add = document.createElement("a");
      p_add.setAttribute(
        "class",
        "btn btn--pill text-upper add-to-bag ajax-atc"
      );
      p_add.setAttribute("href", varURL);
      p_add.setAttribute("data-variant", variant.id);
      p_add.setAttribute("data-art", is_art_series);
      p_add.setAttribute("data-zodiac", is_zodiac_series);
      p_add.setAttribute("p-type", product.product_type);
      p_add.setAttribute("preorder-text", preorder_text);
      p_add.innerText = preorder_matching ? "Pre-Order" : cart_add;
      featured_details.appendChild(p_add);
    }

    return output;
  }
  function updateMatchingItems(type, colour) {
    const forNotMatchTag = "notmatch2"; //for airpods
    $.getJSON(
      "/collections/matching-slider/products.json",
      function (recommendations) {
        var items = [];
        var recommendedProducts = recommendations.products.filter(function (
          product
        ) {
          return product.product_type != type;
        });
        if (recommendedProducts.length > 0) {
          recommendedProducts.map(function (product) {
            if (!(product.tags.indexOf(forNotMatchTag) != -1)) {
              //for airpods
              let sameColour =
                product.options[product.options.length - 1].values.indexOf(
                  colour
                ) != -1;
              if (sameColour) {
                items.push(product);
              }
            }
          });
          if (items.length > 0) {
            let matching_items_desktop = generateMatchingItems(
              items,
              "grid grid--uniform",
              "grid__item medium-up--one-half",
              colour
            );
            let matching_items_mobile = generateMatchingItems(
              items,
              "css-slider",
              "css-slider_slide",
              colour
            );

            document.querySelector("#product-matching-desktop").innerHTML =
              matching_items_desktop.outerHTML;
            document.querySelector("#product-matching-mobile").innerHTML =
              matching_items_mobile.outerHTML;

            $(".ajax-atc").click(function (e) {
              e.preventDefault();

              let props = {
                Text: initials.get($(this).attr("p-type")),
                "Foil Color": foil.get(),
                "Pre-order":
                  $(this).attr("preorder-text") != "null"
                    ? $(this).attr("preorder-text")
                    : "",
              };
              if (this.dataset.art == "true") {
                props = {
                  Artwork: artwork.get(),
                  "Foil Color": "Gold",
                };
              }
              if (this.dataset.zodiac == "true") {
                props = {
                  Zodiac: zodiac.get(),
                  "Foil Color": foil.get(),
                };
              }

              let form_data = {
                quantity: 1,
                id: this.dataset.variant,
                properties: props,
              };

              $.post(
                "/cart/add.js",
                form_data,
                function (item) {
                  loadCart(2);

                  $("#cartMenu").addClass("open");
                  $("html").addClass("no-scroll");
                },
                "json"
              );
            });

            //createFlickity(matching_items_mobile);
          } else {
            updateMatchingItems(type, "Black Caviar");
          }
        }
      }
    );
  }
  function updateCartItem(line, qty) {
    $.post(
      shop_url + "/cart/change.js",
      {
        line: line,
        quantity: qty,
      },
      function (result) {
        updateCart();
      },
      "json"
    );
  }

  // matching items on change
  $(".color-swatch").click(function () {
    var personalizationtext = $(this).attr("data-personalize");
    if (personalizationtext == true || personalizationtext == "true") {
      var Ptext = $("input[name='properties[Text]']").val("");
      var Pcolor = $("input[name='properties[Foil Colour]").val("");
    }
    var type = $(this).attr("data-pdtype");
    var colour = $(this).attr("data-color");
    var clrswatchid = $(this).attr("data-clrid");
    var checkavailabilitynew = $(this).attr("data-available");
    console.log("checkavailabilitynew", checkavailabilitynew);
    $("body").find(".customcartbtn").attr("data-id", clrswatchid);
    $("body").find(".floating_atc_button").attr("data-id", clrswatchid);
    if (checkavailabilitynew == "false" || checkavailabilitynew == false) {
      setTimeout(function () {
        $("body").find(".floating_atc_button").attr("id", "BIS_trigger");
        $("body")
          .find(".floating_atc_button .custom_atc_text_name")
          .text("Join the Waitlist");
      }, 500);
    } else {
      setTimeout(function () {
        $("body")
          .find(".floating_atc_button .custom_atc_text_name")
          .text("Add To Bag");
        $("body").find(".floating_atc_button").attr("id", "");
        $("body").find(".customcartbtn").attr("id", "");
      }, 500);
    }
    makeitmatchpdp(colour);
  });

  // var product_selected_title = $(".product_selected_title").attr('data-color');
  // if(product_selected_title !== "")
  // {
  //   makeitmatchpdp(product_selected_title);
  // }
  // ends

  // Remove Item from Cart
  $(document).on("click", ".remove_cart_item", function () {
    $(this).parent().parent().parent().parent().addClass("cart_loading");
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .find(".cart_popup_bg")
      .removeClass("hide");
    var line = $(this).attr("data-line");
    var qty = 0;
    updateCartItem(line, qty);
  });

  $(".matching-heading").click(function (event, empty = null) {
    if (empty != null && empty == "open") {
      $(this).addClass("open");
    } else {
      $(this).toggleClass("open");
    }
    if ($(this).hasClass("open")) {
      $(".cart__matching").css("background", "#f4f4f4");
      $(".css-slider").slideDown(300, function () {});
    } else {
      $(".cart__matching").css("background", "#fff");
      $(".css-slider").slideUp(300, function () {});
    }
  });

  // Increment Item IN Cart
  $(document).on("click", ".cart_item_plus", function () {
    //console.log($(this).parent().parent().parent());
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .addClass("cart_loading");
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .find(".cart_popup_bg")
      .removeClass("hide");
    var input_val = $(this)
      .closest(".QuantityBox")
      .find(".QuantityInput")
      .val();
    input_val = Number(input_val) + 1;
    $(this).closest(".QuantityBox").find(".QuantityInput").val(input_val);
    var variant_id = $(this).attr("variant_id");
    var qty = $(this).closest(".QuantityBox").find(".QuantityInput").val();
    var line = $(this).attr("data-line");
    //console.log(line);
    updateCartItem(line, qty);
  });

  // Decrement Item IN Cart
  $(document).on("click", ".cart_item_minus", function () {
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .addClass("cart_loading");
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .find(".cart_popup_bg")
      .removeClass("hide");
    var input_val = $(this)
      .closest(".QuantityBox")
      .find(".QuantityInput")
      .val();
    input_val = Number(input_val) - 1;
    $(this).closest(".QuantityBox").find(".QuantityInput").val(input_val);
    var qty = $(this).closest(".QuantityBox").find(".QuantityInput").val();
    var line = $(this).attr("data-line");
    updateCartItem(line, qty);
  });

  //updateCart();

  function addMatchingItem(
    btn,
    variant,
    is_art_series,
    is_zodiac_series,
    is_upsell,
    productType,
    preorder_text,
    curated
  ) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      $(".matching-heading").trigger("click");
      $(".matching__atc").addClass("hide");
      $(".adding_atc").removeClass("hide");
      $(".adding_atc").attr("disabled", true);
      let btn_text = $(this).find("[data-add-to-cart-text]")[0];
      let btn_loader = $(this).find("[data-loader]")[0];
      if (btn_text != null && btn_loader != null) {
        btn_text.classList.add("hide");
        btn_loader.classList.remove("hide");
      }

      let props = {
        Text: initials.get(productType),
        "Foil Color": foil.get(),
        "Pre-order": preorder_text,
      };

      if (
        $(btn).hasClass("upsell_item--add") ||
        $(".slider_matching--items").hasClass("screen-protector") ||
        $(".slider_matching--items").hasClass("leather-protectant")
      ) {
        props = {
          Text: "",
          "Foil Color": "",
          Phrase: "",
        };
      }
      if (is_art_series) {
        props = {
          Artwork: artwork.get(),
          "Foil Color": "Gold",
        };
      }

      //Zodiac
      if (is_zodiac_series) {
        props = {
          Zodiac: zodiac.get(),
          "Foil Color": "Gold",
        };
      }

      $.post(
        "/cart/add.js",
        {
          quantity: 1,
          id: variant.id,
          properties: props,
        },
        function (item) {
          updateCart();
          if (btn_text != null && btn_loader != null) {
            btn_text.classList.remove("hide");
            btn_loader.classList.add("hide");
          }
        },
        "json"
      );
    });
  }

  function checkDisneycolor(col) {
    if (
      col.includes("Pluto") ||
      col.includes("Donald") ||
      col.includes("Daisy") ||
      col.includes("Mickey") ||
      col.includes("Minnie") ||
      col.includes("Goofy") ||
      col.includes("Tempered")
    ) {
      return true;
    }
    return false;
  }

  function checkdisneycolour(col) {
    if (col.includes("Pluto")) {
      return "Emerald Green";
    }
    if (col.includes("Donald")) {
      return "Sky Blue";
    }
    if (col.includes("Daisy")) {
      return "Lavender Purple";
    }
    if (col.includes("Mickey")) {
      return "Pomegranate Red";
    }
    if (col.includes("Minnie")) {
      return "Pink Lily";
    }
    if (col.includes("Goofy")) {
      return "Manhattan Orange";
    }
    return col;
  }

  function checkForMatch(cart, product, itemToMatch) {
    let notInCart =
      cart.items.filter(function (line_item) {
        return line_item.product_id == product.id;
      }).length <= 0;
    let differentType = product.product_type != itemToMatch.product_type;
    let typeNotInCart =
      cart.items.filter(function (line_item) {
        return line_item.product_type == product.product_type;
      }).length <= 0;
    if (product.product_type == "Screen Protector") {
      typeNotInCart = true;
      differentType = true;
    }

    return notInCart && differentType && typeNotInCart;
  }

  function getMatchingItems(container = "", cart) {
    var itemindex = 0;
    if (container != null) {
      container.innerHTML = "";

      if (cart.items[0].product_type == "Gift Cards" && cart.items[1] != null) {
        itemindex = 1;
      }
      const itemToMatch = cart.items[itemindex];
      // console.log('itemToMatch', itemToMatch);
      const collectionHandle = "makeitmatch";
      const GetItemTitle = itemToMatch.product_title;
      const ItemProductType = itemToMatch.product_type;
      const GetItemProductId = itemToMatch.product_id;
      const SplitTitle = GetItemTitle.split("-");
      const ItemHandle = SplitTitle[0]
        .toLowerCase()
        .trim()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
      const CreateSearchTag = "mim-all";

      //console.log(SplitTitle[0]);

      if (SplitTitle[0].trim() == "iPhone 7/8/SE Case") {
        var PhoneCaseNumber = "iPhone 7/8/SE";
      }
      // else if(SplitTitle[0].trim() == 'iPhone 14 Plus Case' || SplitTitle[0].trim() == 'The Card Phone Case iPhone 14 Plus' || SplitTitle[0].trim() == 'The Sling Phone Case iPhone 14 Plus' || SplitTitle[0].trim() == 'The Jelligrain™ Phone Case iPhone 14 Plus')
      // {
      //   var PhoneCaseNumber = 'iPhone 7/8 Plus';
      // }
      else if (
        SplitTitle[0].trim() == "iPhone 11 Pro Case" ||
        SplitTitle[0].trim() == "The Card Phone Case iPhone 11 Pro" ||
        SplitTitle[0].trim() == "The Sling Phone Case iPhone 11 Pro" ||
        SplitTitle[0].trim() == "The Jelligrain™ Phone Case iPhone 11 Pro"
      ) {
        var PhoneCaseNumber = "iPhone XS/11 Pro";
      } else if (
        SplitTitle[0].trim() == "iPhone 11 Case" ||
        SplitTitle[0].trim() == "The Card Phone Case iPhone 11" ||
        SplitTitle[0].trim() == "The Sling Phone Case iPhone 11" ||
        SplitTitle[0].trim() == "The Jelligrain™ Phone Case iPhone 11"
      ) {
        var PhoneCaseNumber = "iPhone 11";
      } else if (
        SplitTitle[0].trim() == "iPhone 11 Pro Max" ||
        SplitTitle[0].trim() == "iPhone 11 Pro Max Case" ||
        SplitTitle[0].trim() == "The Card Phone Case iPhone 11 Pro Max" ||
        SplitTitle[0].trim() == "The Card Phone Case iPhone 11 Pro Max" ||
        SplitTitle[0].trim() == "The Sling Phone Case iPhone 11 Pro Max" ||
        SplitTitle[0].trim() == "The Sling Phone Case iPhone 11 Pro Max" ||
        SplitTitle[0].trim() ==
          "The Jelligrain™ Phone Case iPhone 11 Pro Max" ||
        SplitTitle[0].trim() == "The Jelligrain™ Phone Case iPhone 11 Pro Max"
      ) {
        var PhoneCaseNumber = "iPhone 11 Pro Max";
      } else if (
        SplitTitle[0].trim() == "iPhone 12 Mini Case" ||
        SplitTitle[0].trim() == "iPhone 13 Mini Case" ||
        SplitTitle[0].trim() == "The Card Phone Case iPhone 13 Mini" ||
        SplitTitle[0].trim() == "The Card Phone Case iPhone 12 Mini" ||
        SplitTitle[0].trim() == "The Sling Phone Case iPhone 13 Mini" ||
        SplitTitle[0].trim() == "The Sling Phone Case iPhone 12 Mini" ||
        SplitTitle[0].trim() == "The Jelligrain™ Phone Case iPhone 13 Mini" ||
        SplitTitle[0].trim() == "The Jelligrain™ Phone Case iPhone 12 Mini"
      ) {
        var PhoneCaseNumber = "iPhone 12/13 Mini";
      } else if (
        SplitTitle[0].trim() == "iPhone 12 Case" ||
        SplitTitle[0].trim() == "iPhone 12 Pro Case" ||
        SplitTitle[0].trim() == "The Card Phone Case iPhone 12" ||
        SplitTitle[0].trim() == "The Card Phone Case iPhone 12 Pro" ||
        SplitTitle[0].trim() == "The Sling Phone Case iPhone 12" ||
        SplitTitle[0].trim() == "The Sling Phone Case iPhone 12 Pro" ||
        SplitTitle[0].trim() == "The Jelligrain™ Phone Case iPhone 12" ||
        SplitTitle[0].trim() == "The Jelligrain™ Phone Case iPhone 12 Pro"
      ) {
        var PhoneCaseNumber = "iPhone 12/12 Pro";
      } else if (
        SplitTitle[0].trim() == "iPhone 13 Pro" ||
        SplitTitle[0].trim() == "iPhone 13 Pro Case" ||
        SplitTitle[0].trim() == "The Card Phone Case iPhone 13 Pro" ||
        SplitTitle[0].trim() == "The Sling Phone Case iPhone 13 Pro" ||
        SplitTitle[0].trim() == "The Card Phone Case iPhone 13 Pro Case" ||
        SplitTitle[0].trim() == "The Jelligrain™ Phone Case iPhone 13 Pro" ||
        SplitTitle[0].trim() == "The Jelligrain™ Phone Case iPhone 13 Pro Case"
      ) {
        var PhoneCaseNumber = "iPhone 13 Pro";
      } else if (
        SplitTitle[0].trim() == "iPhone 12 Pro Max Case" ||
        SplitTitle[0].trim() == "iPhone 13 Pro Max Case" ||
        SplitTitle[0].trim() == "The Card Phone Case iPhone 12 Pro Max" ||
        SplitTitle[0].trim() == "The Card Phone Case iPhone 13 Pro Max" ||
        SplitTitle[0].trim() == "The Sling Phone Case iPhone 12 Pro Max" ||
        SplitTitle[0].trim() == "The Sling Phone Case iPhone 13 Pro Max" ||
        SplitTitle[0].trim() ==
          "The Jelligrain™ Phone Case iPhone 12 Pro Max" ||
        SplitTitle[0].trim() == "The Jelligrain™ Phone Case iPhone 13 Pro Max"
      ) {
        var PhoneCaseNumber = "12/13 Pro Max";
      } else if (
        SplitTitle[0].trim() == "iPhone 14 Pro Max Case" ||
        SplitTitle[0].trim() == "The Card Phone Case iPhone 14 Pro Max" ||
        SplitTitle[0].trim() == "The Sling Phone Case iPhone 14 Pro Max" ||
        SplitTitle[0].trim() == "The Jelligrain™ Phone Case iPhone 14 Pro Max"
      ) {
        var PhoneCaseNumber = "iPhone 14 Pro Max";
      } else if (
        SplitTitle[0].trim() == "iPhone 14 Pro Case" ||
        SplitTitle[0].trim() == "The Card Phone Case iPhone 14 Pro" ||
        SplitTitle[0].trim() == "The Sling Phone Case iPhone 14 Pro" ||
        SplitTitle[0].trim() == "The Jelligrain™ Phone Case iPhone 14 Pro"
      ) {
        var PhoneCaseNumber = "iPhone 14 Pro";
      } else if (
        SplitTitle[0].trim() == "iPhone 14 Plus Case" ||
        SplitTitle[0].trim() == "The Card Phone Case iPhone 14 Plus" ||
        SplitTitle[0].trim() == "The Sling Phone Case iPhone 14 Plus" ||
        SplitTitle[0].trim() == "The Jelligrain™ Phone Case iPhone 14 Plus"
      ) {
        var PhoneCaseNumber = "iPhone 14 Plus";
      } else if (
        SplitTitle[0].trim() == "iPhone 14" ||
        SplitTitle[0].trim() == "iPhone 14 Case" ||
        SplitTitle[0].trim() == "The Card Phone Case iPhone 14" ||
        SplitTitle[0].trim() == "The Sling Phone Case iPhone 14" ||
        SplitTitle[0].trim() == "The Jelligrain™ Phone Case iPhone 14"
      ) {
        var PhoneCaseNumber = "iPhone 14";
      } else if (
        SplitTitle[0].trim() == "iPhone 15" ||
        SplitTitle[0].trim() == "iPhone 15 Case" ||
        SplitTitle[0].trim() == "The Card Phone Case iPhone 15" ||
        SplitTitle[0].trim() == "The Sling Phone Case iPhone 15" ||
        SplitTitle[0].trim() == "The Jelligrain™ Phone Case iPhone 15"
      ) {
        var PhoneCaseNumber = "iPhone 15";
      } else if (
        SplitTitle[0].trim() == "iPhone 15 Pro Case" ||
        SplitTitle[0].trim() == "The Card Phone Case iPhone 15 Pro" ||
        SplitTitle[0].trim() == "The Sling Phone Case iPhone 15 Pro" ||
        SplitTitle[0].trim() == "The Jelligrain™ Phone Case iPhone 14 Pro"
      ) {
        var PhoneCaseNumber = "iPhone 15 Pro";
      } else if (
        SplitTitle[0].trim() == "iPhone 15 Pro Max Case" ||
        SplitTitle[0].trim() == "The Card Phone Case iPhone 15 Pro Max Case" ||
        SplitTitle[0].trim() == "The Sling Phone Case iPhone 15 Pro Max" ||
        SplitTitle[0].trim() == "The Jelligrain™ Phone iPhone 15 Po Max Case"
      ) {
        var PhoneCaseNumber = "iPhone 15 Pro Max";
      } else if (
        SplitTitle[0].trim() == "iPhone 15 Plus Case" ||
        SplitTitle[0].trim() == "The Card Phone Case iPhone 15 Plus" ||
        SplitTitle[0].trim() == "The Sling Phone Case iPhone 15 Plus" ||
        SplitTitle[0].trim() == "The Jelligrain™ Phone Case iPhone 15 Plus"
      ) {
        var PhoneCaseNumber = "iPhone 15 Plus";
      } else if (
        SplitTitle[0].trim() == "iPhone 13" ||
        SplitTitle[0].trim() == "The Card Phone Case iPhone 13" ||
        SplitTitle[0].trim() == "The Sling Phone Case iPhone 13" ||
        SplitTitle[0].trim() == "The Jelligrain™ Phone Case iPhone 13"
      ) {
        var PhoneCaseNumber = "iPhone 13";
      }
      // console.log(SplitTitle[0].trim())
      // console.log(PhoneCaseNumber);

      $.getJSON(
        "/collections/" + collectionHandle + "/products.json",
        function (products) {
          for (let index = 0; index < products["products"].length; index++) {
            if (products["products"][index].id == 6667625267281) {
              products["products"].splice(
                $.inArray(products["products"][index], products["products"]),
                1
              );
            }
            if (ItemProductType != "Apple Watch Band") {
              if (products["products"][index].id == 6891756486737) {
                products["products"].splice(
                  $.inArray(products["products"][index], products["products"]),
                  1
                );
              }
            }
            // console.log('all-products', products['products'][index]);
            const CreatePhaseCaseHandle =
              "Easy Apply Screen Protector - " + PhoneCaseNumber;
            const FetchTags = products["products"][index].tags;
            let is_art_series =
              products["products"][index].tags.indexOf("amber-vittoria") != -1;
            let is_zodiac_series =
              products["products"][index].tags.indexOf("zodiac-series") != -1;
            var preorder_matching = document.querySelector(
              "#preorder" + products["products"][index].id
            );
            let is_preorder_matching = false;
            var preorder_text = null;

            if (preorder_matching != null) {
              let variants_matching = preorder_matching.value.split(",");
              //  console.log(variants_matching);
              for (var i = 0; i < variants_matching.length; i++) {
                let values = variants_matching[i].split(":");
                if (values[0] == variant.id) {
                  preorder_matching = values[1] == "true";
                }
              }
            }

            if (preorder_matching) {
              for (i = 0; i < products["products"][index].tags.length; i++) {
                if (products["products"][index].tags[i].includes("eta:")) {
                  preorder_text =
                    products["products"][index].tags[i].split(":")[1];
                }
              }
            }
            if (
              (FetchTags.includes(CreateSearchTag) ||
                products["products"][index].title == CreatePhaseCaseHandle ||
                products["products"][index].title ==
                  "Apple Watch Screen Protector") &&
              GetItemProductId != products["products"][index].id
            )
              if (GetItemProductId != products["products"][index].id) {
                let productURL =
                  "/products/" + products["products"][index].handle;
                let matching_item = document.createElement("div");
                matching_item.classList.add("css-slider_slide");
                matching_item.classList.add("slider_matching--items");
                matching_item.classList.add(
                  products["products"][index].product_type
                    .toLowerCase()
                    .replaceAll(" ", "-")
                );

                let matching__outer = document.createElement("div");
                matching__outer.classList.add("matching_itemcart_main");
                matching_item.appendChild(matching__outer);

                let matching__inner = document.createElement("div");
                matching__inner.classList.add("matching__item__image");
                matching__inner.classList.add("cart__item__image");
                matching__inner.classList.add(
                  products["products"][index].title
                    .toLowerCase()
                    .replaceAll(" ", "-")
                );
                matching__outer.appendChild(matching__inner);

                let image_link = document.createElement("a");
                image_link.classList.add("product-image-fix");
                image_link.classList.add("matching-image-fix-link");
                if (
                  products["products"][index].product_type ==
                    "Screen Protector" ||
                  products["products"][index].product_type == "Gift Cards" ||
                  products["products"][index].product_type ==
                    "Leather Protector"
                ) {
                  image_link.setAttribute("href", "javascript:void(0)");
                } else {
                  image_link.setAttribute(
                    "href",
                    "/products/" + products["products"][index].handle
                  );
                }
                matching__inner.appendChild(image_link);

                let image_wrap = document.createElement("div");
                image_wrap.classList.add("relative");
                image_link.appendChild(image_wrap);

                let matching_item_image = document.createElement("img");
                let image_src = products["products"][index].images[0].src;
                matching_item_image.setAttribute(
                  "src",
                  image_src.replace(".jpg", "_360x.jpg")
                );
                matching_item_image.setAttribute(
                  "alt",
                  products["products"][index].title
                );
                image_wrap.appendChild(matching_item_image);
                let engraving = document.createElement("div");
                engraving.classList.add("matching-engrave");
                engraving.classList.add("engrave");

                if (is_art_series) {
                  engraving.classList.add("artwork-engrave");
                } else if (is_zodiac_series) {
                  engraving.classList.add("zodiac-engrave");
                } else {
                  engraving.classList.add("icon-chess-piece");
                }
                engraving.classList.add(
                  products["products"][index].product_type
                    .toLowerCase()
                    .replaceAll(" ", "-")
                );
                if (is_art_series) {
                  engraving.classList.add(
                    artwork.get().toLowerCase().replaceAll(/ /g, "-")
                  );
                } else if (is_zodiac_series) {
                  engraving.classList.add(
                    zodiac.get().toLowerCase().replaceAll(/ /g, "-")
                  );
                } else {
                  engraving.classList.add(foil.get().toLowerCase());
                  if (products["products"][index].product_type == "Airpods") {
                    engraving.innerHTML = initials.get("shortMonogram2");
                  } else {
                    engraving.innerHTML = initials.get(
                      products["products"][index].product_type
                    );
                  }
                }
                if (
                  products["products"][index].id != "7089160454225" ||
                  products["products"][index].handle !=
                    "apple-watch-screen-protector"
                ) {
                  image_wrap.appendChild(engraving);
                }

                let matching_form = document.createElement("div");
                matching_form.classList.add("cart__item__details");
                matching__outer.appendChild(matching_form);

                let product_info = document.createElement("div");
                product_info.classList.add("matching__product-info");
                matching_form.appendChild(product_info);

                var MakeItMatchPtitle =
                  products["products"][index].title.split("-");
                let product_title = document.createElement("a");
                product_title.classList.add("cart__product-title");
                product_title.classList.add("md_text");
                product_title.classList.add("bold");
                if (
                  products["products"][index].product_type ==
                    "Screen Protector" ||
                  products["products"][index].product_type == "Gift Cards" ||
                  products["products"][index].product_type ==
                    "Leather Protector"
                ) {
                  product_title.setAttribute("href", "javascript:void(0)");
                } else {
                  product_title.setAttribute("href", productURL);
                }
                product_title.innerHTML = MakeItMatchPtitle[0];
                product_info.appendChild(product_title);

                let variant_color = document.createElement("span");
                variant_color.classList.add("cart_text");
                if (typeof MakeItMatchPtitle[1] != "undefined") {
                  variant_color.innerHTML = "<br>" + MakeItMatchPtitle[1];
                }
                product_title.appendChild(variant_color);

                let price_wrapper = document.createElement("div");
                price_wrapper.classList.add("cart__price-wrapper");
                price_wrapper.classList.add("price_matching_item");
                matching_form.appendChild(price_wrapper);

                let ProductPrice = products["products"][index].variants[0];

                if (ProductPrice.compare_at_price != null) {
                  let product_compare_price = document.createElement("span");
                  product_compare_price.classList.add("price");
                  product_compare_price.classList.add("compare_price_matching");
                  product_compare_price.classList.add("cart_text");
                  product_compare_price.innerHTML = Math.trunc(
                    ProductPrice.compare_at_price
                  );
                  price_wrapper.appendChild(product_compare_price);
                }

                let product_price = document.createElement("span");
                product_price.classList.add("price");
                product_price.classList.add("cart_text");
                if (ProductPrice.compare_at_price != null) {
                  product_price.classList.add("compare_price_color");
                }
                // for % tags append elements
                let price_discounts =
                  ProductPrice.price / ProductPrice.compare_at_price;
                let percent_offss = 1 - price_discounts;
                let item_percent_discount = document.createElement("span");
                var on_sale = false;
                item_percent_discount.classList.add("discount_percent");
                var setprice = (item_percent_discount.innerHTML =
                  Math.round(percent_offss * 100) + "% OFF");

                if (ProductPrice.compare_at_price > ProductPrice.price) {
                  on_sale = true;
                }
                if (on_sale == true) {
                  matching__inner.appendChild(item_percent_discount);
                } else {
                  //console.log("Works");
                }

                if (
                  products["products"][index].product_type !=
                  "Gift Boxes & Tins"
                ) {
                  product_price.innerHTML =
                    "$" + Math.trunc(ProductPrice.price);
                } else {
                  product_price.innerHTML = "Free";
                }
                price_wrapper.appendChild(product_price);

                if (products["products"][index].id == "6891756486737") {
                  let atc_size_btn = document.createElement("select");
                  atc_size_btn.classList.add("btn");
                  atc_size_btn.classList.add("btn--alternate");
                  atc_size_btn.classList.add("matching__atc");
                  atc_size_btn.classList.add("dropdown-btn");
                  var atc_size_option_default =
                    document.createElement("option");
                  atc_size_option_default.value = "Select Size";
                  atc_size_option_default.text = "+ ADD";
                  atc_size_option_default.setAttribute("disabled", true);
                  atc_size_option_default.setAttribute("selected", true);
                  atc_size_btn.appendChild(atc_size_option_default);
                  for (
                    var atc_i = 0;
                    atc_i < products["products"][index].variants.length;
                    atc_i++
                  ) {
                    variantURL =
                      "/products/" +
                      products["products"][index].handle +
                      "?variant=" +
                      products["products"][index].variants[atc_i].id;
                    var atc_size_option = document.createElement("option");
                    var option_text =
                      products["products"][index].variants[atc_i].option1;

                    if (
                      !products["products"][index].variants[atc_i].available
                    ) {
                      atc_size_option.setAttribute("disabled", true);
                      option_text = option_text + "(Out of Stock)";
                    }
                    atc_size_option.value =
                      products["products"][index].variants[atc_i].option1;
                    atc_size_option.text = option_text;
                    atc_size_option.setAttribute(
                      "variantID",
                      products["products"][index].variants[atc_i].id
                    );
                    atc_size_btn.appendChild(atc_size_option);
                  }
                  matching_form.appendChild(atc_size_btn);
                } else {
                  let atc = document.createElement("a");
                  atc.classList.add("btn");
                  atc.classList.add("btn--alternate");
                  atc.classList.add("matching__atc");
                  atc.setAttribute("href", productURL);
                  addMatchingItem(
                    atc,
                    ProductPrice,
                    is_art_series,
                    is_zodiac_series,
                    false,
                    products["products"][index].product_type,
                    preorder_text
                  );
                  matching_form.appendChild(atc);

                  let adding_atc = document.createElement("a");
                  adding_atc.classList.add("btn");
                  adding_atc.classList.add("btn--alternate");
                  adding_atc.classList.add("adding_atc");
                  adding_atc.classList.add("hide");
                  adding_atc.setAttribute("href", "#");
                  matching_form.appendChild(adding_atc);

                  let atc_text = document.createElement("span");
                  atc_text.setAttribute("data-add-to-cart-text", "");
                  atc_text.innerHTML = preorder_matching
                    ? "Pre-Order"
                    : "+ Add";
                  atc.appendChild(atc_text);

                  let atc_loader = document.createElement("span");
                  atc_loader.setAttribute("data-loader", "");
                  atc_loader.classList.add("hide");
                  atc.appendChild(atc_loader);

                  let atc_loader_svg = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "svg"
                  );
                  atc_loader_svg.classList.add("icon");
                  atc_loader_svg.classList.add("icon-spinner");
                  atc_loader.appendChild(atc_loader_svg);

                  let atc_loader_path = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "path"
                  );
                  atc_loader_path.setAttribute(
                    "d",
                    "M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z"
                  );
                  atc_loader_svg.appendChild(atc_loader_path);
                  adding_atc.innerHTML = "";
                  adding_atc.appendChild(atc_loader_svg);
                }

                container.appendChild(matching_item);
                $(".cart__matching-loader").hide();
              }
          }
        }
      );

      if (container.childElementCount === 0) {
        container.parentElement.classList.add("hide");
        $(".cart__matching").addClass("hide");
      }
      $(".cart__matching").removeClass("hide");
    }
  }

  function updateCart() {
    let valGiftCounter = new Array(1);
    valGiftCounter.fill(0);
    let valInCart = false;
    let valInCart2 = false;
    let valInCart3 = false;
    let alreadyIncart = false;
    let addFreeItem = false;
    let valId = "41108196393142";
    let valId3 = "41108196425910";
    let valId2 = "3955601139320ddd6";
    let card_id = "";
    let valQty = 0;
    let val2Qty = 0;
    let val3Qty = 0;
    let emerald = 0;
    let gift_outer = null;
    var gift_counter = 0;
    let gift_line_item = new Array(15);
    let counter = 0;
    let card_qty = 0;
    let phone_cases_qty = 0;
    let protector_is = 0;
    let card_qty_id = 0;
    let pro_var_id = "";
    let phone_case = false;
    let sticker_qty = 0;
    var cartItems = [];
    var cartAppendata = "";
    var shop_currency = $("#shop_currency_val").text();
    var shop_currency_sym = shop_currency.split(".")[0];
    $("#upsell-cart-items-add").empty();
    const matchingItems = document.querySelector(".cart-matching-slider");
    const ap_Price = document.querySelector(".cart-ap-price");
    jQuery.getJSON(window.origin + "/cart.js", function (cart) {
      let items_custome = cart.items;
      var total_cart_length = cart.item_count;
      $("#cart-title span").text(cart.item_count);
      $("#cartopennavmov span.btn-cart-trigger__count").text(cart.item_count);
      if (cart.item_count > 0) {
        $("#cartopennav span.btn-cart-trigger__count").text(cart.item_count);
      }
      var subtotalCart = Number(cart.total_price) / 100;
      var subtotal = subtotalCart.toFixed(2);
      var splittotal = subtotal.split(".");
      if (splittotal[1] == 00) {
        var nodecimaltotal = "$" + Math.trunc(subtotal) + " AUD";
      } else {
        var nodecimaltotal = "$" + subtotal + " AUD";
      }
      $(".cart_final_subtotal_price").text(nodecimaltotal);
      if (subtotalCart != null) {
        ap_Price.innerHTML = Math.round(cart.total_price / 400);
      }
      if (total_cart_length == 0) {
        $(".btn-cart-trigger__count").addClass("hide");
        $(".header-cart__progg").show();
        $(".emptycart__contents").show();
        $(".content-cart-nav").show();
        $("#cart_container_id").empty();
        $(".cart-footer-nav").hide();
        $(".gift_product").hide();
        $(".upsellempy").hide();
        $(".cart_gift_box").addClass("hide");
        $(".content-cart-nav .not-empty-cart").hide();
        $(".cart__matching").hide();
        $(".full_cart_loader").removeClass("active");
      } else {
        $(".btn-cart-trigger__count").removeClass("hide");
        $("#cartpopupboxnav").removeClass("loader_active");
        var is_mini_tote_free_gift = false;
        if (total_cart_length == 1) {
          if (cart.items[0].id == "40485027676241") {
            $.post(
              "/cart/clear.js",
              function (cart) {
                updateCart();
              },
              "json"
            );
          }
        }
        $(".cart__matching").show();
        getMatchingItems(matchingItems, cart);
        $(".header-cart__progg").hide();
        $(".emptycart__contents").hide();
        $(".cart-footer-nav").show();
        $(".upsellempy").show();
        $(".cart_gift_box").removeClass("hide");
        $(".content-cart-nav .not-empty-cart").show();
        cartItems = cart.items;

        let props = {
          Text:
            localStorage.getItem("mdsEngraving") != null
              ? localStorage.getItem("mdsEngraving")
              : "",
          "Foil Colour":
            localStorage.getItem("mdsEngraving") != null
              ? localStorage.getItem("mdsFoil")
              : "",
          Phrase:
            localStorage.getItem("mdsengraving2") != null
              ? localStorage.getItem("mdsengraving2")
              : "",
        };
        var prsnlize_clr = props["Foil Colour"];
        var p = 1;
        $("#cart_container_id").empty();
        var sale_text = "";
        for (var i = 0; i < cartItems.length; i++) {
          if (cart.items[i].id == 40485027676241) {
            is_mini_tote_free_gift = true;
          }
          if (cart.items[i].variant_options[0].includes("Emerald")) {
            emerald = 1;
          }
          if (cart.items[i].handle.includes("disney-leather-sticker")) {
            sticker_qty = cart.items[i].quantity + sticker_qty;
          }
          if (cart.items[i].id == valId) {
            valInCart = true;
            valQty = cart.items[i].quantity;
          }
          if (cart.items[i].id == valId2) {
            valInCart2 = true;
            val2Qty = cart.items[i].quantity;
          }
          if (cart.items[i].id == valId3) {
            valInCart3 = true;
            val3Qty = cart.items[i].quantity;
          }
          if (cart.items[i].handle.includes("easy-apply-screen-protector-1")) {
            protector_is = cart.items[i].quantity;
            pro_var_id = cart.items[i].variant_id;
          }
          if (
            cart.items[i].product_type == "Phone Case" ||
            cart.items[i].product_type == "Card Phone Case" ||
            cart.items[i].product_type == "Sling Phone Case" ||
            cart.items[i].product_type == "Silicone Phone Case"
          ) {
            phone_case = true;
          }
          if (cart.items[i].product_title.includes("Day Card")) {
            card_qty = card_qty + cart.items[i].quantity;
            card_qty_id = cart.items[i].variant_id;
          }
          if (cart.items[i].product_title.includes("Phone")) {
            phone_cases_qty = phone_cases_qty + cart.items[i].quantity;
          }

          var line_count = i + 1;
          var cart_item = cartItems[i];
          var properties = cart_item.properties;
          var image = cart_item.featured_image.url;
          var title = cart_item.product_title;
          var price = cart_item.price;
          var quantity = cart_item.quantity;
          var op_price = cart_item.price;
          price = Number(price) / 100;
          price = price * quantity;
          var variant_id = cart_item.variant_id;
          var prd_url = cart_item.url;
          var prd_type = cart_item.product_type;
          var var_title = cart_item.variant_title;
          var shippingtext = $(".min_free_values").attr("data-varlu");
          var shippingtextgift = $(".min_free_valuesforfreegift").attr(
            "data-varlu"
          );
          var min_texts = $(".min_free_values").attr("data-text");
          var max_texts = $(".min_free_values").attr("data-maxfree");
          var final_total = cart.total_price.toFixed(2) / 100;
          console.log("properties33", properties);
          if (final_total >= 300) {
            $(".cart_gift_item")
              .find(".cart_add_btn")
              .addClass("cartbtnvisible");
          } else {
            $(".cart_gift_item")
              .find(".cart_add_btn")
              .removeClass("cartbtnvisible");
          }
          var minimumshipprice = $(".dyn_price").text();
          var minimumshippriceforgift = $(".dyn_priceforgift").text();
          if (final_total < shippingtext) {
            var diff_price = Math.round(shippingtext - final_total);
            $(".fullprogressbar").addClass("hide");
            $(".customprogressbar").removeClass("hide");
            $(".progress-bar__fill").removeClass("full-bar");
            $(".progress-bar__fill").removeClass("full-bar");
            // $('.progress-bar__fill').addClass('full-bar-down');
            $(".dyn_price").html(diff_price);
          } else {
            $(".fullprogressbar").removeClass("hide");
            $(".customprogressbar").addClass("hide");
            $(".progress-bar__fill").addClass("full-bar");
            // $('.progress-bar__fill').removeClass('full-bar-down');
          }
          // for cart price less than 50
          // for cart price less than 50
          if (final_total < 40) {
            $(".progress-bar__fill").css("width", "40%");
          } else if (final_total >= 40 && final_total < 50) {
            $(".progress-bar__fill").css("width", "50%");
          }
          // for cart price less than or equals to 50
          else if (final_total >= 50 && final_total < 60) {
            $(".progress-bar__fill").css("width", "60%");
          } else if (final_total >= 60 && final_total < 70) {
            $(".progress-bar__fill").css("width", "70%");
          }
          // for cart price reaches to 75
          else if (final_total >= 70 && final_total <= 80) {
            $(".progress-bar__fill").css("width", "80%");
          } else if (final_total >= 80 && final_total <= 89) {
            $(".progress-bar__fill").css("width", "95%");
          }
          // for cart price equals to 100 or greater than 100
          else if (final_total >= 90) {
            $(".progress-bar__fill").css("width", "100%");
          } // new progress bar mini cart
          // new progress bar mini cart
          if (final_total < 20) {
            $(".progress-bar__fillforfreegift").css("width", "20%");
          }
          // for cart price less than or equals to 50
          else if (final_total >= 20 && final_total < 35) {
            $(".progress-bar__fillforfreegift").css("width", "25%");
          }
          // for cart price reaches to 75
          else if (final_total >= 35 && final_total < 50) {
            $(".progress-bar__fillforfreegift").css("width", "30%");
          }
          // for cart price equals to 100 or greater than 100
          else if (final_total >= 50 && final_total < 70) {
            $(".progress-bar__fillforfreegift").css("width", "35%");
          } else if (final_total >= 70 && final_total < 90) {
            $(".progress-bar__fillforfreegift").css("width", "40%");
          } else if (final_total >= 90 && final_total < 100) {
            $(".progress-bar__fillforfreegift").css("width", "50%");
          } else if (final_total >= 100 && final_total < 110) {
            $(".progress-bar__fillforfreegift").css("width", "60%");
          } else if (final_total >= 110 && final_total < 130) {
            $(".progress-bar__fillforfreegift").css("width", "70%");
          } else if (final_total >= 130 && final_total < 150) {
            $(".progress-bar__fillforfreegift").css("width", "75%");
          } else if (final_total >= 150 && final_total < 170) {
            $(".progress-bar__fillforfreegift").css("width", "80%");
          } else if (final_total >= 170 && final_total < 180) {
            $(".progress-bar__fillforfreegift").css("width", "85%");
          } else if (final_total >= 180 && final_total < 190) {
            $(".progress-bar__fillforfreegift").css("width", "90%");
          } else if (final_total >= 180 && final_total < 199) {
            $(".progress-bar__fillforfreegift").css("width", "95%");
          } else if (final_total >= 200) {
            $(".progress-bar__fillforfreegift").css("width", "100%");
          }
          if (final_total < shippingtextgift) {
            var diff_pricefreegift = Math.round(shippingtextgift - final_total);
            $(".fullprogressbarfreegift").addClass("hide");
            $(".customprogressbarfreegift").removeClass("hide");
            $(".dyn_priceforgift").html(diff_pricefreegift);
            if (!$(".free_gift_product_aus").hasClass("disabled")) {
              $(".free_gift_product_aus").addClass("disabled");
            }
            if (is_mini_tote_free_gift) {
              $.post(
                "/cart/change.js",
                {
                  quantity: 0,
                  id: 40485027676241,
                  properties: "",
                },
                function (item) {
                  updateCart();
                },
                "json"
              );
            }
          } else {
            $(".fullprogressbarfreegift").removeClass("hide");
            $(".customprogressbarfreegift").addClass("hide");
            $(".free_gift_product_aus").removeClass("disabled");
          }
          var variant_title_new = "";
          if (var_title != null) {
            var variant_title_new = var_title;
          }
          var SplitTitle = title.split("-");
          if (typeof SplitTitle[1] !== "undefined") {
            var ColNAme = SplitTitle[1];
          } else {
            var ColNAme = "";
          }
          var cart_item_div_new =
            "<div class='item-cart-fill-main0 cart_items_div kp-" +
            variant_id +
            "' data-id=" +
            variant_id +
            " data-type='" +
            prd_type +
            "' data-value='" +
            var_title +
            "'>";
          cart_item_div_new +=
            "<div class='cart_popup_bg hide'><svg aria-hidden='true' focusable='false' role='presentation' class='icon icon-spinner' viewBox='0 0 20 20'><path d='M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z' fill='#919EAB'></path></svg></div>";
          if (
            cart.items[i].product_type == "Screen Protector" ||
            cart.items[i].product_type == "Gift Cards" ||
            cart.items[i].product_type == "Leather Protector" ||
            cart.items[i].product_type == "newfreegift"
          ) {
            cart_item_div_new +=
              "<div class='cart-fill-product-image'><a class='cart-image'><img src='" +
              image +
              "' alt='" +
              title +
              "'> </a>";
          } else {
            cart_item_div_new +=
              "<div class='cart-fill-product-image'><a class='cart-image' href='" +
              prd_url +
              "'><img src='" +
              image +
              "' alt='" +
              title +
              "'> </a>";
          }

          if (
            properties !== null &&
            properties["Text"] != null &&
            properties["Text"] != ""
          ) {
            if (properties["Foil Colour"]) {
              var pro_color = properties["Foil Colour"];
            }
            if (properties["Foil Color"]) {
              var pro_color = properties["Foil Color"];
            }
            cart_item_div_new +=
              "<div class ='cart-engrave engrave chess_text " +
              pro_color +
              " " +
              prd_type.replace(/\s+/g, "-").toLowerCase() +
              "'>" +
              properties["Text"] +
              "</div>";
          }
          if (
            properties !== null &&
            properties["Phrase"] != null &&
            properties["Phrase"] != ""
          ) {
            if (properties["Foil Colour"]) {
              var pro_color = properties["Foil Colour"];
            }
            if (properties["Foil Color"]) {
              var pro_color = properties["Foil Color"];
            }
            cart_item_div_new +=
              "<div class ='cart-engrave engrave chess_text curated_engrave_text " +
              pro_color +
              " " +
              prd_type.replace(/\s+/g, "-").toLowerCase() +
              "'>" +
              properties["Phrase"] +
              "</div>";
          }
          cart_item_div_new +=
            "</div><div class='cart-fill-product-detail'><div class='cart-fill-detail-01'>";

          //cart_item_div_new += "<a href='" + prd_url + "'><p>" + SplitTitle[0] + "</p></a>"
          if (
            cart.items[i].product_type == "Screen Protector" ||
            cart.items[i].product_type == "Gift Cards" ||
            cart.items[i].product_type == "newfreegift"
          ) {
            cart_item_div_new +=
              "<a><p>" +
              SplitTitle[0] +
              "</p></a><span class='ajaxcart__product-meta minishoppergift'>" +
              ColNAme +
              "</span>";
          } else {
            cart_item_div_new +=
              "<a href='" +
              prd_url +
              "'><p>" +
              SplitTitle[0] +
              "</p></a><span class='ajaxcart__product-meta minishoppergift'>" +
              ColNAme +
              "</span>";
          }
          if (variant_title_new == "Gift") {
            cart_item_div_new +=
              "<span class='ajaxcart__product-meta'>" +
              "Limited Time Only | Valued at $69" +
              "</span>";
          }
          cart_item_div_new +=
            "<div class='delate-cart-item'><button class='grey-5 header-cart-item__remove__btn cart_remove_item remove_cart_item' data-phandle=" +
            cart_item.handle +
            " data-line=" +
            line_count +
            ">";
          cart_item_div_new +=
            '<svg width="13" height="15" viewBox="0 0 13 15" fill="none"> <path d="M1.75004 13.0417C1.75004 13.9125 2.46254 14.625 3.33337 14.625H9.66671C10.5375 14.625 11.25 13.9125 11.25 13.0417V3.54167H1.75004V13.0417ZM3.33337 5.125H9.66671V13.0417H3.33337V5.125ZM9.27087 1.16667L8.47921 0.375H4.52087L3.72921 1.16667H0.958374V2.75H12.0417V1.16667H9.27087Z" fill="#727272"/></svg></button></div>';
          cart_item_div_new +=
            "</div><div class='cart-fill=discription'></div>";
          if (properties != null && properties["PreOrder"] != "") {
            if (properties["curated text"]) {
              cart_item_div_new +=
                "<div class='cart__props'><div class='cart__prop cart_text'><span class='cartcta_text'>" +
                properties["Phrase"] +
                "</span></div></div>";
            }
          }
          if (properties != null && properties["PreOrder"] != "") {
            if (properties["PreOrder"]) {
              cart_item_div_new +=
                "<div class='cart__props'><div class='cart__prop cart_text'><span class='cartcta_text'>" +
                properties["PreOrder"] +
                "</span></div></div>";
            }
          }

          if (
            properties !== null &&
            properties["Text"] != null &&
            properties["Text"] != ""
          ) {
            if (properties["Foil Colour"]) {
              var pro_color_new = properties["Foil Colour"];
            }
            if (properties["Foil Color"]) {
              var pro_color_new = properties["Foil Color"];
            }

            cart_item_div_new +=
              "<div class='cart__props'><div class='cart__prop cart_text'><span>Personalisation:</span><span class='foil-option prsnlizer_color " +
              pro_color_new +
              "' ddts='" +
              pro_color_new +
              "' style='order: 3;'></span><span class='chess_text'>" +
              properties["Text"] +
              "</span></div></div>";
          }
          if (
            properties !== null &&
            properties["Phrase"] != null &&
            properties["Phrase"] != ""
          ) {
            if (properties["Foil Colour"]) {
              var pro_color_new = properties["Foil Colour"];
            }
            if (properties["Foil Color"]) {
              var pro_color_new = properties["Foil Color"];
            }

            cart_item_div_new +=
              "<div class='cart__props'><div class='cart__prop cart_text curated_text'><span>Personalisation:</span><span class='foil-option prsnlizer_color " +
              pro_color_new +
              "' ddts='" +
              pro_color_new +
              "' style='order: 3;'></span><span class='chess_text'>" +
              properties["Phrase"] +
              "</span></div></div>";
          }

          if (variant_title_new == "Gift") {
            cart_item_div_new +=
              "<span class='freetext_meta'>" + "Free" + "</span>";
          }
          if (variant_title_new == "Gift") {
            cart_item_div_new += "<div class='wc_qty_box quantity-box'>";
            cart_item_div_new +=
              "<ul class='QuantityBox cart_p_quantity'><li class=''>";
            cart_item_div_new += "</li></ul></div>";
          } else {
            cart_item_div_new +=
              "<div class='wc_qty_box quantity-box'><div class='num-block skin-3'>";

            cart_item_div_new +=
              "<ul class='QuantityBox cart_p_quantity'><li class='minus-box'>";

            cart_item_div_new +=
              "<a href='javascript:void(0)' data-line=" +
              line_count +
              " class='cart_item_minus minus ajaxcart__qty-adjust cart-slider-decrease-qty ajaxcart__qty--minus'>";

            cart_item_div_new +=
              "<img src='//cdn.shopify.com/s/files/1/0619/2575/3081/t/5/assets/minu.svg?v=419654119375667803' class='img-fluid'></a>";

            cart_item_div_new += "</li><li class='input-box'>";

            cart_item_div_new +=
              "<input readonly type='number' name='updates' class='QuantityInput Quantity_cart_slider ajaxcart__qty-num' value=" +
              quantity +
              " min='0'>";

            cart_item_div_new +=
              "</li><li class='plus-box'><a data-line=" +
              line_count +
              " href='javascript:void(0)' variant_id=" +
              variant_id +
              " class='cart_item_plus plus ajaxcart__qty-adjust cart-slider-increase-qty ajaxcart__qty--plus'>";

            cart_item_div_new +=
              "<img src='//cdn.shopify.com/s/files/1/0619/2575/3081/t/5/assets/plus.svg?v=14305593096000451169' class='img-fluid'></a>";

            cart_item_div_new += "</li></ul></div>";
          }

          cart_item_div_new += "<div class='price'>";
          $.ajax({
            url: cart_item.url + ".js",
            dataType: "json",
            async: false,
            timeout: 800,
            success: function (data, status, xhr) {
              var varinats = data.product.variants;
              varinats.forEach(function (variant) {
                if (parseInt(variant.id) == parseInt(variant_id)) {
                  var variantprice = variant.price;
                  var splitprice = variantprice.split(".");
                  if (splitprice[1] == 00) {
                    var nozerodecimal = Math.trunc(variantprice);
                  } else {
                    var nozerodecimal = variantprice;
                  }
                  var compareprice = Math.trunc(variant.compare_at_price);
                  let price_discount = variantprice / compareprice;
                  var prodcp = variant.compare_at_price;
                  var prodprice = variant.price;
                  var salesprice = prodprice / prodcp;
                  let percent_off = 1 - price_discount;
                  sale_text = Math.round(percent_off * 100) + "% OFF";
                  if (variant_title_new != "Gift") {
                    if (
                      parseInt(variant.compare_at_price) >
                      parseInt(variant.price)
                    ) {
                      cart_item_div_new +=
                        "<span class='regular_price price-item--sale' > $" +
                        nozerodecimal +
                        " </span>";
                      cart_item_div_new +=
                        "<span class='compare_oldprice'>" +
                        "$" +
                        compareprice +
                        " </span>";
                      cart_item_div_new +=
                        "<span class='salestext_price'>" +
                        sale_text +
                        " </span>";
                    } else {
                      cart_item_div_new +=
                        "<span class='regular_price' > $" +
                        nozerodecimal +
                        " </span>";
                    }
                  }
                } else {
                }
              });
              cart_item_div_new += "</div>";
              cart_item_div_new += "</div></div></div>";
              $(".full_cart_loader").removeClass("active");
              $("#cart_container_id").append(cart_item_div_new);
            },
            error: function (jqXhr, textStatus, errorMessage) {},
          });

          if (is_mini_tote_free_gift) {
            $(".c_free_gift_box").hide();
          } else {
            $(".c_free_gift_box").show();
          }
        }

        if (protector_is > 0 && phone_case == false) {
          $.post(
            "/cart/change.js",
            {
              quantity: 0,
              id: pro_var_id,
              properties: "",
            },
            function (item) {
              updateCart();
            },
            "json"
          );
        }
        if (sticker_qty != 0 && cart.item_count == sticker_qty) {
          $.post(
            "/cart/clear.js",
            function (cart) {
              updateCart();
            },
            "json"
          );
        }
        if (card_qty > 0 && phone_case == false) {
          $.post(
            "/cart/change.js",
            {
              quantity: 0,
              id: card_qty_id,
              properties: "",
            },
            function (item) {
              updateCart();
            },
            "json"
          );
        }
        if (card_qty > phone_cases_qty && phone_case) {
          $.post(
            "/cart/change.js",
            {
              quantity: phone_cases_qty,
              id: card_qty_id,
              properties: "",
            },
            function (item) {
              updateCart();
            },
            "json"
          );
        }
      }
    });
  }
  // updateCart();

  $(".color-option span").hover(function () {
    let colorClicked = $(this).attr("class");
    let vid = $(this).attr("id");
    let vurl = $(this).attr("v-url");

    //  $('img[img-id="'+vid+'"]').addClass('hide');
    // $('img[img-id="'+vid+'"][img-text~="'+colorClicked+'"]').removeClass('hide');
    $(
      '.card-wrapper[p-id="' +
        vid +
        '"] .card-information__wrapper .card-information__text a'
    ).attr("href", vurl);
  });

  //////////// product recommandation js

  if ($("body").hasClass("pys_product")) {
    var id = $(".product_selected_id").val();
    var title = $(".product_selected_title").val();
    var myInterval = setInterval(function () {
      var len = $(".relate_product_pys li").length;
      if (len > 0) {
        clearInterval(myInterval);
        $(".related_image_pys").each(function () {
          var img_src = $(this)
            .find('.related_pys_img[data-alt="' + title + '"]')
            .attr("data-src");
          var src_len = $(this).find(
            '.related_pys_img[data-alt="' + title + '"]'
          );
          if (src_len.length > 0) {
            $(this)
              .closest(".relate_product_grid_pys")
              .find(".related_media_pys img")
              .attr("srcset", img_src);
          } else {
            var img_default_src = $(this)
              .find('.related_pys_img[data-alt="black-caviar"]')
              .attr("data-src");
            $(this)
              .closest(".relate_product_grid_pys")
              .find(".related_media_pys img")
              .attr("srcset", img_default_src);
          }
        });
      }
    }, 1000);
  }
});
