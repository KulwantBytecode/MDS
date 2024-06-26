$(document).ready(function () {
  $(".color-option span").click(function () {
    $(".custom_badge_show").removeClass("out_of_stock");
    $(".custom_badge_show").removeClass("in_stock");
    $(".custom_badge_show").removeClass("low_stock ");
    var shippingtextattr = $(this).attr("data-checketxt");
    var defaultshiptext = $(this).attr("data-defaulttext");
    var metatext = $(this).attr("data-metatext");
    if (shippingtextattr == "emptyfield") {
      $(this)
        .parents(".customizer_wrap")
        .find(".variantsshippingtext")
        .text(defaultshiptext);
    } else {
      $(this)
        .parents(".customizer_wrap")
        .find(".variantsshippingtext")
        .text(metatext);
    }
  });
  $(".color-swatch").each(function () {
    var metaonloadatt = $(this).attr("data-personalize");
    var data_value = $(this).attr("data-color");
    var data_status = $(this).attr("data-status");
    var availablityCheck = $(this).attr("data-available");
    var inventoryquantity = $(this).attr("data-inventoryquantity");
    if (data_status == "checkedx") {
      $(".product_variantcolor").text(data_value);

      if (inventoryquantity > 0 && inventoryquantity < 30) {
        $(".custom_badge_show").addClass("low_stock ");
        $(".custom_badge_show").text("LOW IN STOCK");
      } else if (inventoryquantity >= 30) {
        $(".custom_badge_show").addClass("in_stock");
        $(".custom_badge_show").text("In Stock");
      } else {
        $(".custom_badge_show").addClass("out_of_stock");
        $(".custom_badge_show").text("Out of Stock");
      }
      // if(availablityCheck == 'true'){
      //   $(".custom_badge_show").addClass('in_stock');
      //   $(".custom_badge_show").text('In Stock');
      // }
      // else
      // {
      //   $(".custom_badge_show").addClass('out_of_stock');
      //   $(".custom_badge_show").text('Out of Stock');
      // }
    }
    if (metaonloadatt == "true") {
      $("body").addClass("check-remove");
      setTimeout(function () {
        // $('.pr_color').val('');
        // $('.pr_text').val('');
        // $('#input_foil-color').val('');
        // $('#input_text').val('');
      }, 1500);
    } else {
      var pr_color = localStorage.getItem("mdsFoil");
      var pr_text = localStorage.getItem("mdsEngraving");
      $("body").removeClass("check-remove");
    }
  });

  $(".variant_product_description.show").each(function () {
    if ($(this).text().trim().length == 0) {
      $(this).hide();
      $(".product_main_description").show();
    } else {
      $(".product_main_description").hide();
    }
  });

  $(".variant_core_description.show").each(function () {
    if ($(this).text().trim().length == 0) {
      $(this).hide();
      $(".product_main_core_feature").show();
    } else {
      $(".product_main_core_feature").hide();
    }
  });
});

// ♈︎♉︎♊︎♋︎♌︎♍︎♎︎♏︎♐︎♑︎♒︎♓︎
var regex = new RegExp("^[a-zA-Z0-9!@*^#.=~$#♡&-]+$");
var clearInvalid;
// Personalise Initials
function isShortMonogram(shortMonogram) {
  if (
    shortMonogram == "Airpods" ||
    shortMonogram == "Sling Bag" ||
    shortMonogram == "Statement Strap" ||
    shortMonogram == "Backpacks" ||
    shortMonogram == "Soft Tote" ||
    shortMonogram == "Camera Bag" ||
    shortMonogram == "Sling Bag" ||
    shortMonogram == "Mini Tote" ||
    shortMonogram == "Mini Hobo Bag" ||
    shortMonogram == "Apple Watch Band" ||
    shortMonogram == "shortMonogram" ||
    shortMonogram == "Crossbody Phone Pouch" ||
    shortMonogram == "Laptop Bag" ||
    shortMonogram == "Card Holder" ||
    shortMonogram == "Card Case" ||
    shortMonogram == "Zipped Wallet"
  )
    return true;
  return false;
}

function validateIconMonogram(monogram, shortMonogram = false) {
  monogram = monogram.replaceAll("@", "");
  monogram = monogram.replaceAll("!", "");
  monogram = monogram.replaceAll("=", "");
  monogram = monogram.replaceAll("-", "");
  monogram = monogram.replaceAll("*", "");
  monogram = monogram.replaceAll("^", "");
  monogram = monogram.replaceAll("$", "");
  monogram = monogram.replaceAll("~", "");
  if (shortMonogram) {
    monogram = validateShortMonogram(monogram);
  }
  return monogram;
}

function validateShortMonogram2(Monogram) {
  if (Monogram == "" || Monogram == null) {
    return "";
  } else {
    if (Monogram.length <= 2) {
      return Monogram;
    } else {
      Monogram = Monogram.substring(0, 4);
      if (Monogram.includes(".")) {
        return Monogram;
      } else {
        return Monogram.substring(0, 3);
      }
    }
  }
  return Monogram;
}

function validateIconMonogram(monogram, shortMonogram = false) {
  monogram = monogram.replaceAll("@", "");
  monogram = monogram.replaceAll("!", "");
  monogram = monogram.replaceAll("=", "");
  monogram = monogram.replaceAll("-", "");
  monogram = monogram.replaceAll("*", "");
  monogram = monogram.replaceAll("^", "");
  monogram = monogram.replaceAll("$", "");
  monogram = monogram.replaceAll("~", "");
  if (shortMonogram) {
    monogram = validateShortMonogram(monogram);
  }
  return monogram;
}
function checkIcons() {
  var text = localStorage.getItem("mdsEngraving");
  if (text != null) {
    for (var position = 0; position < text.length; position++) {
      if (text.charAt(position) == "@") {
        localStorage.setItem(
          "mdsEngraving",
          localStorage.getItem("mdsEngraving").replaceAll("@", "")
        );
      }
      if (text.charAt(position) == "-") {
        localStorage.setItem(
          "mdsEngraving",
          localStorage.getItem("mdsEngraving").replaceAll("-", "")
        );
      }
      if (text.charAt(position) == "~") {
        localStorage.setItem(
          "mdsEngraving",
          localStorage.getItem("mdsEngraving").replaceAll("~", "")
        );
      }
      if (text.charAt(position) == "=") {
        localStorage.setItem(
          "mdsEngraving",
          localStorage.getItem("mdsEngraving").replaceAll("=", "")
        );
      }
      if (text.charAt(position) == "!") {
        localStorage.setItem(
          "mdsEngraving",
          localStorage.getItem("mdsEngraving").replaceAll("!", "")
        );
      }
      if (text.charAt(position) == "^") {
        localStorage.setItem(
          "mdsEngraving",
          localStorage.getItem("mdsEngraving").replaceAll("^", "")
        );
      }
      if (text.charAt(position) == "$") {
        localStorage.setItem(
          "mdsEngraving",
          localStorage.getItem("mdsEngraving").replaceAll("$", "")
        );
      }
      if (text.charAt(position) == "*") {
        localStorage.setItem(
          "mdsEngraving",
          localStorage.getItem("mdsEngraving").replaceAll("*", "")
        );
      }
    }
  }
}
function validateShortMonogram(Monogram) {
  if (Monogram == "" || Monogram == null) {
    return "";
  } else {
    if (Monogram.length <= 2) {
      return Monogram;
    } else {
      Monogram = Monogram.substring(0, 3);
      if (Monogram.includes(".")) {
        return Monogram;
      } else {
        return Monogram.substring(0, 2);
      }
    }
  }
  return Monogram;
}
function validateShortMonogram2(Monogram) {
  if (Monogram == "" || Monogram == null) {
    return "";
  } else {
    if (Monogram.length <= 2) {
      return Monogram;
    } else {
      Monogram = Monogram.substring(0, 4);
      if (Monogram.includes(".")) {
        return Monogram;
      } else {
        return Monogram.substring(0, 3);
      }
    }
  }
  return Monogram;
}
function checkDot(text) {
  for (var position = 0; position < text.length; position++) {
    if (text.charAt(position) == ".") {
      return true;
    }
  }
  return false;
}

var initials = {
  load: function () {
    $(".engrave:not(.cart-engrave)").text(this.get("null", false));
    $(
      ".engrave.airpods-bundle-set:not(.cart-engrave) ,.engrave.mini-tote:not(.cart-engrave)"
    ).text(this.get("shortMonogram", false)); //this one
    //$('.engrave.phone-case:not(.cart-engrave)').text(this.get("null",true));

    $(
      ".engrave.airpods:not(.cart-engrave):not(.airpods-pro) ,.engrave.mini-tote:not(.cart-engrave),.engrave.apple-watch-band:not(.cart-engrave),.engrave.the-apple-watch-band:not(.cart-engrave)"
    ).text(this.get("shortMonogram", false));
    $(
      ".engrave.airpods-bundle-set:not(.cart-engrave) ,.engrave.mini-tote:not(.cart-engrave)"
    ).text(this.get("shortMonogram", false)); //this one
    $(".engrave.airpods:not(.cart-engrave):not(.airpods-pro)").text(
      this.get("shortMonogram2", false)
    );
    $(".engrave.phone-case-bundle:not(.cart-engrave)").text(
      this.get("null", true)
    );
    $(".engrave.notebook:not(.cart-engrave)").text(this.get("null", true));

    if (
      $(".initials").hasClass("phone-case-bundle") ||
      $(".initials").hasClass("notebook")
    ) {
      $(".initials").val(this.get("null", true));
    } else {
      $(".initials").val(this.get("null", false));
    }

    this.update();
  },
  update: function () {
    let field = $(".initials");
    let limit = 2;
    if ($(".initials").hasClass("airpods")) {
      limit = 3;
    }
    if ($(".initials").hasClass("airpods-sling-case")) {
      limit = 3;
    }
    if ($(".initials").hasClass("airpods-belt")) {
      limit = 3;
    }
    if ($(".initials").hasClass("keybell-keychain")) {
      limit = 3;
    }
    if ($(".initials").hasClass("card-holder")) {
      limit = 4;
    }
    if ($(".initials").hasClass("card-case")) {
      limit = 4;
    }
    if ($(".initials").hasClass("zipped-wallet")) {
      limit = 4;
    }
    if ($(".initials").hasClass("magsafe-wallet")) {
      limit = 4;
    }
    if ($(".initials").hasClass("passport-holder")) {
      limit = 4;
    }
    if (field.length != 0) {
      let text = $(field).val();
      if (checkDot(text)) {
        limit = limit + 1;
      }
      $(".initials-limit").html(text.length + "/" + 5);
      $(".initials-limit-shortMonogram").html(text.length + "/" + limit);
      $(".initials-limit-airpods").html(text.length + "/" + limit);
      $(".initials-limit-airpods-sling-case").html(text.length + "/" + limit);
      $(".initials-limit-airpods-belt").html(text.length + "/" + limit);
      $(".initials-limit-keybell-keychain").html(text.length + "/" + limit);
      $(".initials-limit-card-holder").html(text.length + "/" + limit);
      $(".initials-limit-card-case").html(text.length + "/" + limit);
      $(".initials-limit-zipped-wallet").html(text.length + "/" + limit);
      $(".initials-limit-magsafe-wallet").html(text.length + "/" + limit);
      $(".initials-limit-passport-holder").html(text.length + "/" + limit);
      if (text.length != 0) {
        $(".initials_field").addClass("has-value");
      } else {
        $(".initials_field").removeClass("has-value");
      }
    }
  },
  get: function (shortMonogram = "null", phone_case = false) {
    let airpods_mono = shortMonogram;

    if (shortMonogram == "Phone Case" || shortMonogram == "Phone Case Bundle") {
      phone_case = true;
    }
    shortMonogram = isShortMonogram(shortMonogram);

    if (
      $(".initials").hasClass("phone-case") ||
      $(".initials").hasClass("dog-leash") ||
      $(".initials").hasClass("dog-collar") ||
      $(".initials").hasClass("laptop-case") ||
      $(".initials").hasClass("laptop-sleeve") ||
      $(".initials").hasClass("pocket-notebook") ||
      $(".initials").hasClass("notebook") ||
      $(".initials").hasClass("airpods-belt") ||
      $(".initials").hasClass("card-phone-case") ||
      $(".initials").hasClass("sling-phone-case") ||
      $(".initials").hasClass("airpods-pro") ||
      $(".initials").hasClass("keychain") ||
      $(".initials").hasClass("phone-case-bundle") ||
      $(".initials").hasClass("ipad-sleeve") ||
      $(".initials").hasClass("ipad-case")
    ) {
      if (!phone_case) {
        if (airpods_mono == "shortMonogram2") {
          return validateShortMonogram2(
            localStorage.getItem("mdsEngraving") != null
              ? localStorage.getItem("mdsEngraving")
              : ""
          );
        }
        return validateIconMonogram(
          localStorage.getItem("mdsEngraving") != null
            ? localStorage.getItem("mdsEngraving")
            : "",
          shortMonogram
        );
      } else {
        return localStorage.getItem("mdsEngraving") != null
          ? localStorage.getItem("mdsEngraving")
          : "";
      }
    } else if (
      $(".initials").hasClass("airpods") ||
      $(".initials").hasClass("airpods-belt") ||
      $(".initials").hasClass("airpods-sling-case") ||
      $(".initials").hasClass("keybell-keychain")
    ) {
      return validateShortMonogram2(
        localStorage.getItem("mdsEngraving") != null
          ? localStorage.getItem("mdsEngraving")
          : ""
      );
    } else if (airpods_mono == "shortMonogram2") {
      return validateShortMonogram2(
        localStorage.getItem("mdsEngraving") != null
          ? localStorage.getItem("mdsEngraving")
          : ""
      );
    } else if (shortMonogram) {
      return validateShortMonogram(
        localStorage.getItem("mdsEngraving") != null
          ? localStorage.getItem("mdsEngraving")
          : ""
      );
    } else {
      checkIcons();
      if (airpods_mono == "shortMonogram2") {
        return validateShortMonogram2(
          localStorage.getItem("mdsEngraving") != null
            ? localStorage.getItem("mdsEngraving")
            : ""
        );
      } else {
        if ($(".initials").hasClass("shortMonogram")) {
          return validateShortMonogram(
            localStorage.getItem("mdsEngraving") != null
              ? localStorage.getItem("mdsEngraving")
              : ""
          );
        } else {
          return localStorage.getItem("mdsEngraving") != null
            ? localStorage.getItem("mdsEngraving").substr(0, 4)
            : "";
        }
      }
    }
  },
  getMonogram: function () {
    return $(".initials").val();
  },
  set: function (letters) {
    localStorage.setItem("mdsEngraving", letters.toUpperCase());
    this.load();
  },
  invalid: function (e, t) {
    e.preventDefault();
    window.clearTimeout(clearInvalid);
    $(".initials").addClass("invalid");
    $(".tooltip").addClass("active");
    clearInvalid = window.setTimeout(function () {
      $(".initials").removeClass("invalid");
      $(".tooltip").removeClass("active");
    }, 1000 * t);
  },
  showSlide: function () {
    const productSliders = $(
      ".product-images, .product-images-nav, .product-images-mobile"
    ).find(".p-slider");
    if ($(productSlider)[0] != null) {
      try {
        $(productSliders).slick("slickGoTo", 0, true);
        if (window.matchMedia("(max-width:991px)").matches) {
          let mobileSlider = document.querySelector(".product-images-mobile");
          if (mobileSlider != null) {
            $("html, body").animate({ scrollTop: mobileSlider.offsetTop }, 300);
          }
        }
      } catch (error) {}
    }
  },
};

var artwork = {
  load: function () {
    $(".artwork-engrave:not(.cart-engrave)").removeClass("inner-strength");
    $(".artwork-engrave:not(.cart-engrave)").removeClass("bit-of-sunshine");
    $(".artwork-engrave:not(.cart-engrave)").addClass(
      this.get().toLowerCase().replace(/ /g, "-")
    );
    $(".artwork-engrave:not(.cart-engrave)").removeClass("no-artwork");
    if ($("#artwork")[0] != null) {
      $("#artwork").val(this.get());
      $(".drop-down-artwork .drop-down-btn").text(this.get());
      initials.showSlide();
    }
  },
  get: function () {
    return localStorage.getItem("mdsArtwork") != null
      ? localStorage.getItem("mdsArtwork")
      : "No Artwork";
  },
  set: function (art) {
    localStorage.setItem("mdsArtwork", art);
    this.load();
  },
};

function setZodiacUrl() {
  var is_zodiac_url = window.location.href.split("#");
  if (is_zodiac_url[1] != null) {
    var horoscopes = is_zodiac_url[1].split("-");
    if (horoscopes[0] == "leo" || horoscopes[0] == "Leo") {
      current_zodiac = "Leo";
      localStorage.setItem("mdsZodiac", current_zodiac);
      localStorage.setItem("mdsEngraving", "");
      localStorage.setItem("mdsCustomize", "horoscopes");
      initials.set("");
      return current_zodiac;
    }
  }
  return null;
}
//Zodiac
var zodiac = {
  load: function () {
    if ($("#zodiac")[0] != null) {
      $("#zodiac").val(this.get());
      initials.showSlide();
    }
  },
  get: function () {
    if (setZodiacUrl() != null) {
      return setZodiacUrl();
    }
    return localStorage.getItem("mdsZodiac") != null
      ? localStorage.getItem("mdsZodiac")
      : "No Zodiac";
  },
  set: function (zod, mym_variant = false) {
    if (!mym_variant) {
      localStorage.setItem("mdsZodiac", zod);
    }
    this.load();
    foil.load();
  },
};
var foil = {
  load: function (clickTarget) {
    $(".engrave:not(.cart-engrave), .zodiac-engrave:not(.cart-engrave)")
      .removeClass("gold")
      .removeClass("silver")
      .addClass(this.get().toLowerCase());
    if (!$("body").hasClass("nylonproducts")) {
      if (this.get() == "Gold") {
        $(".silver-warning").addClass("hidden");
        $(".customizer-color-text").text("Color - Gold");
      } else {
        $(".silver-warning").removeClass("hidden");
        $(".customizer-color-text").text("Color - Silver");
      }
      if (clickTarget) {
        $(".foil-list input").removeClass("checked");
        $('.foil-list input[value="' + this.get() + '"]')
          .addClass("checked")
          .prop("checked", true);
      }
    }
  },
  get: function () {
    return localStorage.getItem("mdsFoil") != null
      ? localStorage.getItem("mdsFoil")
      : "Gold";
  },
  set: function (colour) {
    // console.log(colour);
    if (colour) {
      localStorage.setItem("mdsFoil", colour);
      $(".foil-list input").removeClass("checked");
      $('.foil-list input[value="' + colour + '"]')
        .addClass("checked")
        .prop("checked", true);
      this.load(false);
    }
  },
};

var valentine = {
  load: function () {
    if (
      document.querySelector(".valentine-engrave:not(.cart-engrave)") == null
    ) {
      $(".load-valentine")
        .parent()
        .append(
          '<div class="engrave valentine-engrave ' +
            foil.get().toLowerCase() +
            '"></div>'
        );
    }

    $(".valentine-engrave:not(.cart-engrave)").removeClass("him-her");
    $(".valentine-engrave:not(.cart-engrave)").removeClass("him-him");
    $(".valentine-engrave:not(.cart-engrave)").removeClass("her-her");
    $(".valentine-engrave:not(.cart-engrave)").removeClass("you");
    $(".valentine-engrave:not(.cart-engrave)").removeClass("no-valentine");
    $(".valentine-engrave:not(.cart-engrave)").addClass(
      this.get().toLowerCase().replace(/ /g, "-")
    );

    if ($("#valentine")[0] != null) {
      if (this.get() == "no-valentine") {
        $("#valentine").val("");
      } else {
        $("#valentine").val(this.get());
      }
      $(".drop-down-valentine .drop-down-btn").text(this.get());
      $(".valentine-btn").text(this.get().replace(/-/g, "/"));

      initials.showSlide();
    }
  },
  get: function () {
    return localStorage.getItem("mdsCNY") != null ? "him-her" : "no-valentine";
  },
  set: function (alias) {
    $(".valentine-prompt").addClass("hidden");
    //  localStorage.setItem('mdsValentine', alias);
    this.load();
  },
  drop: function () {
    $(".valentine-btn").toggleClass("active");
    $(".drop-down-valentine").toggleClass("active");
    $(".valentine-prompt").addClass("hidden");

    if (window.matchMedia("(max-width:991px)").matches) {
      let target = document.querySelector(".personalise-form");
      if (target != null) {
        $("html, body").animate({ scrollTop: $(target).offset().top }, 300);
      }
    }
  },
};

// CUSTOMIZER
var customizer = {
  load: function (update) {
    if (update) {
      let last_open = localStorage.getItem("mdsCustomize");
      let target = document.querySelector("[data-tab]");
      if (last_open != null) {
        let temp = document.querySelector('[data-tab="' + last_open + '"]');
        if (temp != null) {
          target = temp;
        }
      }
      let id = target.dataset.tab;
      if (id == "text") {
        artwork.set("No Artwork");
      }
      if (id == "artwork") {
        initials.set("");
      }
      localStorage.setItem("mdsCustomize", id);
      $(".customizer_tab.active").removeClass("active");
      $(".customizer_panel.active").removeClass("active");
      $('[data-tab="' + id + '"]').addClass("active");
      $('[data-panel="' + id + '"]').addClass("active");

      var isInstagram = navigator.userAgent.indexOf("Instagram") != -1;
      var isBugged = navigator.userAgent.indexOf("iPhone11") != -1;
      if (isInstagram && isBugged) {
        $(".customizer")
          .css("max-height", "calc(100% - 36px)")
          .css("overflow", "scroll");
        $(".customizer_wrap").css("padding-bottom", "4rem");
      }
    }
    customizer.update();

    if (update) {
      setInterval(function () {
        if ($(".customizer").hasClass("open")) {
          if ($(".customizer_tab.active").length != 0) {
            $(".customizer_tab-active").css(
              "width",
              $(".customizer_tab.active").width()
            );
            $(".customizer_tab-active").css(
              "left",
              $(".customizer_tab.active").offset().left -
                $(".customizer_tab.active").offsetParent().offset().left
            );
          }
        }
      }, 100);
    }
  },
  update: function () {
    if ($("#mym_variant").val() != "true") {
      if (
        $(".initials").hasClass("phone-case") ||
        $(".initials").hasClass("notebook") ||
        $(".initials").hasClass("ipad-sleeve") ||
        $(".initials").hasClass("ipad-case")
      ) {
        $("#input_text").val(initials.get("null", true));
      } else {
        $("#input_text").val(initials.get());
      }
      if ($(".initials").hasClass("silicone-phone-case")) {
        $("#input_text").val("");
      }
      if (initials.get() != "") {
        $(".customizer__text--preset").text(initials.get());
      }
      $("#input_foil-color").val(foil.get());

      if (zodiac.get() == "No Zodiac") {
      } else {
        $(".customizer__zodiac--preset").text(zodiac.get());
      }
      $("#input_valentine").val(valentine.get());

      if ($("[data-artwork]").length == 0) {
        artwork.set("No Artwork");
      }
      if ($("[data-zodiac]").length == 0) {
        zodiac.set("No Zodiac");
      }

      $('[data-artwork="' + artwork.get() + '"]').addClass("active");
      $('[data-zodiac="' + zodiac.get() + '"]').addClass("active");

      $(".customizer_input").removeAttr("disabled");
    }

    let customized = false;

    if (artwork.get() != "No Artwork" || zodiac.get() != "No Zodiac") {
      $(".customizer_choice").html(
        '<img src="' + $(".item-icon.active img").attr("src") + '" />'
      );
      $("#input_text").attr("disabled", true);
      customized = true;
    }
    if (initials.get("null", true) != "") {
      if (
        $(".initials").hasClass("phone-case") ||
        $(".initials").hasClass("notebook") ||
        $(".initials").hasClass("ipad-sleeve") ||
        $(".initials").hasClass("ipad-case")
      ) {
        $(".customizer_choice").html(initials.get("null", true));
      } else {
        var mono_gra = initials.get();
        const searchTerm = "🐇";
        if (mono_gra.indexOf(searchTerm) != -1) {
          var final_mono_gra = mono_gra.replace(
            searchTerm,
            '<img style="width: 15px;" src="https://cdn.shopify.com/s/files/1/0242/7060/2321/files/Bunny-finalversion.png?v=1673421947">'
          );
        } else {
          var final_mono_gra = mono_gra;
        }
        $(".customizer_choice").html(final_mono_gra);
      }
      customized = true;
    }
    if (customized && $("#mym_variant").val() != "true") {
      $(".customizer_edit").removeClass("hide");
      $(".customizer_personalize").addClass("hide");
    }
    // else {
    //   $(".customizer_edit").addClass("hide");
    //   $(".customizer_personalize").removeClass("hide");
    // }
  },
  open: function () {
    let last_open = localStorage.getItem("mdsCustomize");
    let checkmdsFoil = localStorage.getItem("mdsFoil");
    //console.log(checkmdsFoil);
    if (checkmdsFoil == null) {
      localStorage.setItem("mdsFoil", "Gold");
    }
    if (last_open != null) {
      customizer.change.tab(last_open);
    }
    if (!$("body").hasClass("template-page-valentines")) {
      scrollLock(function () {
        $(".customizer").addClass("open");
        $("html").addClass("c-open").addClass("no-scroll");
        $("body").css("height", "100vh");
      });
    } else {
      $(".customizer").addClass("open");
      $("html").addClass("c-open").addClass("no-scroll");
      $("body").css("height", "100vh");
    }
  },
  close: function () {
    $(".matching-initials").removeClass("invalid");
    customizer.update();
    if (!$("body").hasClass("template-page-valentines")) {
      scrollLock(function () {
        $(".customizer").removeClass("open");
        $("html").removeClass("c-open").removeClass("no-scroll");
      });
    } else {
      $(".customizer").removeClass("open");
      $("html").removeClass("c-open").removeClass("no-scroll");
    }
    if (!$("body").hasClass("template-page-valentines")) {
      if (window.matchMedia("(max-width:991px)").matches) {
        if (
          initials.get() != "" ||
          artwork.get() != "No Artwork" ||
          zodiac.get() != "No Zodiac"
        ) {
          // window.scrollTo(0, $('.product-images-mobile').offset().top);
        }
      }
    }
    if ($("body").hasClass("template-page-valentines")) {
      if ($(".set_2_product select").attr("disabled")) {
        $(".set_main:not(.hide) .set_btn_1").trigger("click");
      } else if (
        $(".set_3_product button").attr("disabled") &&
        !$(".set_2_product select").attr("disabled")
      ) {
        $(".set_main:not(.hide) .set_btn_2").trigger("click");
      }
    }
  },
  reset: function (tabchange = false, tabtext = "null") {
    //saving text changes
    if (tabchange) {
      //saving text changes
      //do nothing
      if (tabtext == "text") {
        //saving text changes
        zodiac.set("No Zodiac"); //saving text changes
        initials.set($(".customizer__text--preset").text()); //saving text changes
      }
      if (tabtext == "horoscopes") {
        //saving text changes
        initials.set(""); //saving text changes
        zodiac.set($(".customizer__zodiac--preset").text()); //saving text changes
      }
    } else {
      //saving text changes
      foil.set("Gold"); //saving text changes
      initials.set(""); //saving text changes
      $(".customizer__zodiac--preset").text("No Zodiac"); //saving text changes
      $(".customizer__text--preset").text(""); //saving text changes
      zodiac.set("No Zodiac"); //saving text changes
      $(".customizer_panel.active .active").removeClass("active"); //saving text changes
    }
    this.validation.text(false);
  },
  validation: {
    text: function (hasError) {
      if (hasError) {
        $(".initials,.initials_text").addClass("invalid");
        if ($(".initials").hasClass("shortMonogram")) {
          $(".initials_text .error").text(
            "Maximum 2 Characters with only English letters, numbers and the symbols: . & and ♡ (no spaces)"
          );
        } else if (
          $(".initials").hasClass("card-holder") ||
          $(".initials").hasClass("zipped-wallet") ||
          $(".initials").hasClass("card-case") ||
          $(".initials").hasClass("magsafe-wallet") ||
          $(".initials").hasClass("passport-holder")
        ) {
          $(".initials_text .error").text(
            "Maximum 4 Characters with only English letters, numbers and the symbols: . & and ♡ (no spaces)"
          );
        } else if (
          $(".initials").hasClass("airpods") ||
          $(".initials").hasClass("airpods-belt") ||
          $(".initials").hasClass("airpods-sling-case") ||
          $(".initials").hasClass("keybell-keychain")
        ) {
          $(".initials_text .error").text(
            "Maximum 3 Characters with only English letters, numbers and the symbols: . & and ♡ (no spaces)"
          );
        } else {
          $(".initials_text .error").text(
            "Maximum 5 Characters with only English letters, numbers and the symbols: . & and ♡ (no spaces)"
          );
        }
        $(".customizer_save").attr("disabled", true);
        $(".customizer_save").attr("aria-disabled", true);
      } else {
        $(".initials,.initials_text").removeClass("invalid");
        $(".customizer_save").removeAttr("disabled");
        $(".customizer_save").removeAttr("aria-disabled");
      }
    },
  },
  focus: function () {
    $(".initials_field").addClass("has-focus");

    // $("#error_Curated").css("display", "block");
  },
  unfocus: function () {
    if (!$("body").hasClass("template-page-valentines")) {
      if (window.matchMedia("(max-width:991px)").matches) {
        // Scroll up
        if ($(".customizer").hasClass("open")) {
          window.scrollTo(0, 0);
        }
      }
    }
    $(".initials_field").removeClass("has-focus");
    $(".initials_field").removeClass("has-rabbit");
  },
  onkeyup: function () {
    var product_idd = document.getElementById("product_id_for_phrase").value;
    console.log(product_idd);
    if (
      product_idd == 7216038117457 ||
      product_idd == 7216038805585 ||
      product_idd == 7216039166033 ||
      product_idd == 7216039198801 ||
      product_idd == 7216039231569
    ) {
      var input_field_fetch = jQuery('input[data-fetch="cust"]').val();
      var input_field_fetch = jQuery('input[data-fetch="cust"]').val();
      if (input_field_fetch !== "") {
        localStorage.setItem("mdsengraving2", "");
        $(".hide_customizer_personalize").addClass("hide");
        $(".hide_customizer_edit").removeClass("hide");
        $(".curated_phrases_css_style").addClass("hide");
        $("#curatedList .curatedOption").each(function () {
          var dataValue = $(this).data("value");
          $(this).removeClass("selected");
        });
        $("#curated_phrase_product").text("");
        $("#curated_phrase").text("");
        $("#input_text").val(input_field_fetch);
        $("#input_curate_text").val("");
      } else {
        console.log();
        localStorage.setItem("mdsengraving2", "");
        $("#input_text").text("");
        $(".hide_customizer_personalize").removeClass("hide");
        $(".hide_customizer_edit").addClass("hide");
        $(".curated_phrases_css_style").addClass("hide");
      }
    } else {
      var input_field = jQuery('input[data-fetch="cust"]').val();
      console.log(input_field);
      if (input_field !== "") {
        console.log("has value input field");
        $(".customizer_personalize").addClass("hide");
        $(".customizer_edit").removeClass("hide");
      } else {
        console.log("has not value input field");
        $(".customizer_personalize").removeClass("hide");
        $(".customizer_edit").addClass("hide");
      }
    }
  },
  change: {
    variant: function (color, color_full) {
      // console.log("color_full",color_full);

      //$('.color-swatch[title="'+color+'"]').click();

      var color = color.split("mm / ").pop();

      $(".color-list input").each(function () {
        $(this).prop("checked", false);
        $(this).next("span").css("border-color", "transparent");
      });

      $('.color-list input[value="' + color + '"]').each(function () {
        $(this).trigger("click");
        $(this).prop("checked", true);
        $(this).next("span").css("border-color", "#000");
      });

      $(".color-swatch").each(function () {
        var pdp_color_input = $(this).attr("data-value");
        // console.log('color',color);
        if (pdp_color_input == color) {
          $(this).trigger("click");
        }
      });

      $(".list_product-images .active").removeClass("active");
      $(
        '[data-color="' + color.replace(/\W+/g, "-").toLowerCase() + '"]'
      ).addClass("active");
      document
        .querySelector(".container_product-images")
        .setAttribute(
          "class",
          "container_product-images " + color.replace(/\W+/g, "-").toLowerCase()
        );
      if (
        color.includes("Bondi") ||
        color.includes("Fuchsia") ||
        color.includes("White") ||
        color.includes("Ivory") ||
        color.includes("Manhattan") ||
        color.includes("Lavender")
      ) {
        $(".limited_variant_handles").removeClass("hide");
      } else {
        $(".limited_variant_handles").addClass("hide");
      }
      $(".label_current-color").text(color_full);
      // Code Of Make it a Match Styling End
    },
    tab: function (id) {
      let last_open = localStorage.getItem("mdsCustomize");
      if (last_open == null || last_open != id) {
        localStorage.setItem("mdsCustomize", id);
        customizer.reset(true, id); //saving text changes
      }
      $(".customizer_tab.active").removeClass("active");
      $(".customizer_panel.active").removeClass("active");
      $('[data-tab="' + id + '"]').addClass("active");
      $('[data-panel="' + id + '"]').addClass("active");
    },
    text: function (e) {
      let text = $(".initials").val().toUpperCase();
      let limit = 6; //for airpods
      var is_rabbit = false;
      let dotcounter = 0;
      if ($(".initials").hasClass("shortMonogram")) {
        //for airpods
        for (var position = 0; position < text.length; position++) {
          if (text.charAt(position) == ".") {
            limit = 4; //for airpods
            dotcounter++;
          }
        }
        if (dotcounter == 0) {
          limit = 3;
          $(".initials.shortMonogram").attr("maxlength", 3);
        } else {
          $(".initials.shortMonogram").attr("maxlength", 4);
        }
      } //for airpods
      if (
        $(".initials").hasClass("airpods") ||
        $(".initials").hasClass("airpods-belt") ||
        $(".initials").hasClass("airpods-sling-case") ||
        $(".initials").hasClass("keybell-keychain")
      ) {
        //for airpods
        for (var position = 0; position < text.length; position++) {
          if (text.charAt(position) == ".") {
            limit = 5; //for airpods
            dotcounter++;
          }
        }
        if (dotcounter == 0) {
          limit = 4;
          $(".initials.airpods").attr("maxlength", 4);
          $(".initials.airpods-sling-case").attr("maxlength", 4);
          $(".initials.airpods-belt").attr("maxlength", 4);
        } else {
          $(".initials.airpods").attr("maxlength", 5);
          $(".initials.airpods-sling-case").attr("maxlength", 5);
          $(".initials.keybell-keychain").attr("maxlength", 5);
          $(".initials.airpods-belt").attr("maxlength", 4);
        }
      }
      // for card holder length 4
      if (
        $(".initials").hasClass("card-holder") ||
        $(".initials").hasClass("zipped-wallet") ||
        $(".initials").hasClass("card-case") ||
        $(".initials").hasClass("magsafe-wallet") ||
        $(".initials").hasClass("passport-holder")
      ) {
        //for airpods
        for (var position = 0; position < text.length; position++) {
          if (text.charAt(position) == ".") {
            limit = 6; //for airpods
            dotcounter++;
          }
        }
        if (dotcounter == 0) {
          limit = 5;
          $(".initials.card-case").attr("maxlength", 5);
          $(".initials.card-holder").attr("maxlength", 5);
          $(".initials.zipped-wallet").attr("maxlength", 5);
          $(".initials.magsafe-wallet").attr("maxlength", 5);
          $(".initials.passport-holder").attr("maxlength", 5);
        } else {
          $(".initials.card-holder").attr("maxlength", 6);
          $(".initials.zipped-wallet").attr("maxlength", 6);
          $(".initials.card-case").attr("maxlength", 6);
          $(".initials.magsafe-wallet").attr("maxlength", 6);
          $(".initials.passport-holder").attr("maxlength", 6);
        }
      }
      // ends
      if ($(".initials").hasClass("rabbit_icon")) {
        var is_rabbit = true;
      }
      if ($(".initials").hasClass("apple-watch-band")) {
        regex = new RegExp("^[a-zA-Z0-9.]+$");
      }
      //const regex = new RegExp('^[a-zA-Z0-9.!@*^#=~$#♡&\-]+$');
      if (text.length <= limit) {
        if (
          text.length <= limit - 1 &&
          (regex.test(text) || text == "" || is_rabbit) &&
          (limit == 6 || limit < 6)
        ) {
          //for airpods

          initials.set(text);
          initials.update();
          $(".customizer__text--preset").text(text); //saving text changes
          customizer.validation.text(false);
        } else {
          $(".initials").val(text);
          initials.update();
          customizer.validation.text(true);
        }
      } else {
        e.preventDefault();
        initials.load();
        customizer.validation.text(true);
      }
      if (text.length != 0) {
        // motherDayAvailable(false);
      } else {
        //   motherDayAvailable(true);
      }
    },
    emoji: function (event) {
      let text = $(".customizer_panel.active .initials").val().toUpperCase();
      let limit = 6;
      if (
        $(".initials").hasClass("airpods") ||
        $(".initials").hasClass("airpods-bundle-set")
      ) {
        limit = 4;
      }
      if (text.length < limit) {
        var emjoi_text = $(event).data("emoji");

        if (emjoi_text == "@") {
          emjoi_text = "\u0040";
        }
        if (emjoi_text == "-") {
          emjoi_text = "\u002D";
        }
        if (emjoi_text == "!") {
          emjoi_text = "\u0021";
        }
        if (emjoi_text == "=") {
          emjoi_text = "\u003D";
        }
        if (emjoi_text == "$") {
          emjoi_text = "\u0024";
        }
        if (emjoi_text == "^") {
          emjoi_text = "\u005E";
        }
        if (emjoi_text == "~") {
          emjoi_text = "\u007E";
        }
        if (emjoi_text == "*") {
          emjoi_text = "\u002A";
        }
        $(".initials").val(text + emjoi_text);
      }
      this.text(null);

      $(".customizer_panel.active .initials").addClass("has-focus");
      $(".customizer_panel.active .initials").focus();
    },
    heart: function () {
      let text = $(".initials").val().toUpperCase();
      if (text.length < 6) {
        $(".initials").val(text + "\u2661");
      }
      this.text(null);

      $(".initials_field").addClass("has-focus");
      $(".initials").focus();
    },

    rabbit: function () {
      //console.log("rabbit");
      let text = $(".initials").val().toUpperCase();
      if (text.length < 6) {
        $(".initials").val(text + "%");
      }
      this.text(null);

      $(".initials_field").addClass("has-focus");
      $(".initials_field").addClass("has-rabbit");
      $(".initials").focus();
    },

    moon: function () {
      let text = $(".initials").val().toUpperCase();
      if (text.length < 5) {
        $(".initials").val(text + "\ue800");
      }
      this.text(null);

      $(".initials_field").addClass("has-focus");
      $(".initials").focus();
    },
    foil: function (color) {
      // $('#curated_phrase').addClass(color)
      var foilOption = document.getElementById("curated_phrase");
      var foilOption1 = document.getElementById("curated_phrase_product");
      foilOption.classList.remove("gold", "silver");
      foilOption1.classList.remove("gold", "silver");
      if (color === "Gold") {
        // foilOptions.forEach(function(foilOption) {
        foilOption.classList.add("gold");
        foilOption1.classList.add("gold");
        // });
      } else if (color === "Silver") {
        // foilOptions.forEach(function(foilOption) {
        foilOption.classList.add("silver");
        foilOption1.classList.add("silver");
        // });
      }
      foil.set(color);
    },
    zodiac: function (sign) {
      if (zodiac.get() == sign) {
        zodiac.set("No Zodiac");
        $(".customizer__zodiac--preset").text("No Zodiac"); //saving text changes
      } else {
        zodiac.set(sign);
        $(".customizer__zodiac--preset").text(sign); //saving text changes
      }
    },
    artwork: function (art) {
      if (artwork.get() == art) {
        artwork.set("No Artwork");
      } else {
        artwork.set(art);
      }
    },
  },
};

let prevScroll = 0;
function scrollLock(func) {
  let scrollLocked = $("html").hasClass("no-scroll");
  let scrollCustomizer = $("html").hasClass("c-open");
  if (!scrollLocked) {
    prevScroll = window.scrollY;
    if (scrollCustomizer) {
      $("body").css("height", "100vh");
    }
    window.scrollTo(0, 0);
    $("html").css("margin-top", "-" + prevScroll + "px");
  }

  func();

  if (scrollLocked) {
    $("body").css("height", "");
    $("html").css("margin-top", "");
    window.scrollTo(0, prevScroll);
  }
}

function scrollLock(func) {
  let scrollLocked = $("html").hasClass("no-scroll");
  if (!scrollLocked) {
    prevScroll = window.scrollY;
    window.scrollTo(0, 0);
    $("html").css("marginTop", "-" + prevScroll + "px");
  }

  func();

  if (scrollLocked) {
    $("body").css("height", "");
    $("html").css("marginTop", "");
    window.scrollTo(0, prevScroll);
  }
}

function isIE() {
  return typeof MSCSSMatrix != "undefined";
}

// MAISON
$(document).ready(function () {
  // percent: Amount of element required in view:
  // 0.5 - half of the element
  // 1.0 - the entire element
  $.fn.isInViewport = function (percent) {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight() * percent;
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return (
      (elementBottom > viewportTop && elementBottom < viewportBottom) ||
      viewportTop > elementBottom
    );
  };

  $(".initials").on("keydown", function (e) {
    if (e.key.length == 2) {
      e.preventDefault();
    } else {
      if (!regex.test(e.key)) {
        customizer.validation.text(true);
      }
    }
  });
  $(document).on("input", ".initials", function (e) {
    customizer.change.text(e);
  });
  $(document).on("mousedown", ".initials-heart", function () {
    customizer.change.heart();
  });
  $(document).on("mousedown", ".initials-emoji", function () {
    customizer.change.emoji(this);
  });

  $(document).on("click", ".insert-emoji", function () {
    let monogram = document.querySelector(".initials");
    if (monogram.value.length < 4) {
      initials.set(monogram.value + "\u0025");
      initials.update();
    }
    initials.showSlide();
  });
  $(document).on("click", ".insert-heart", function () {
    let monogram = document.querySelector(".initials");
    if (monogram.value.length < 4) {
      initials.set(monogram.value + "\u2661");
      initials.update();
    }
    initials.showSlide();
  });

  // Navigation Menus
  $(".site-nav--has-dropdown button").click(function () {
    if (isIE()) {
      window.location = this.dataset.href;
    } else {
      let isActive = $(this).parent().hasClass("site-nav--active-dropdown");
      if (!isActive) {
        $(".site-nav--active-dropdown").removeClass(
          "site-nav--active-dropdown"
        );
      }
      $(this).parent().toggleClass("site-nav--active-dropdown");
    }
  });
  $(document).click(function (e) {
    let mega = $(e.target).closest(".mega-menu")[0];
    if (mega == null) {
      $(".site-nav--has-dropdown").removeClass("site-nav--active-dropdown");
    }
  });
  $(".js-modal-open-login-modal").click(function (e) {
    e.preventDefault();
    $("#LoginModal").addClass("show");
  });
  $(".js-modal-close").click(function (e) {
    e.preventDefault();
    $(this).closest(".modal").removeClass("show");
  });

  $(".foil-list input").change(function () {
    foil.set(this.value);
  });

  $("#mobile_sizes").change(function () {
    let url = window.location.origin + this.value;
    window.location = url;
  });

  // Tabs
  function changeTab(tab, link) {
    $(".tabs .active").removeClass("active");

    $(link).parent().addClass("active");
    $(tab).addClass("active");

    let w = 100 / 4;
    let line = $(".tab-active-display .line-wrap");
    $(line).css("left", link.dataset.index * w + "%");
    $(line).addClass("sliding");
    setTimeout(function () {
      $(line).removeClass("sliding");
    }, 200);
  }
  $(".tabs ul a, .info-dot").click(function (e) {
    e.preventDefault();
    changeTab($(this.getAttribute("href")), this);
    $(".info-dot.active").removeClass("active");
    $(".info-dot[data-index=" + this.dataset.index + "]").addClass("active");
  });

  function fixTabHeight() {
    let tabs = $(".tabs-content .tab");
    if (tabs.length) {
      let maxTab = null;
      let height = 0;
      for (let i = 0; i < tabs.length; i++) {
        let rte = $(tabs[i]).find(".rte");
        let h = rte[0].clientHeight;
        if (h > height) {
          height = h;
          maxTab = tabs[i];
        }
      }
      $(maxTab).addClass("bigboy");
    }
  }
  fixTabHeight();

  $(".product-tabs ul a").click(function (e) {
    e.preventDefault();
    if (this.dataset.type != "reviews") {
      $(".product-tabs .active").removeClass("active");
      $(this).parent().addClass("active");
      $(this.getAttribute("href")).addClass("active");
    }
  });
  $(".product-tab-link").click(function (e) {
    if (this.dataset.type == "reviews") {
      document.querySelector(".okeReviews-reviewsSummary").click();
    }
  });

  if (isIE()) {
    $("html").addClass("ie-sucks");
  }

  function loadCustom() {
    initials.load();
    foil.load(true);
    if ($(".customizer_personalize").length) {
      customizer.load(true);
    }

    // If it hasn't been closed today
    var now = new Date();

    $(document).click(function (e) {
      let dropdown = $(e.target).closest(".drop-down-wrapper")[0];
      if (dropdown == null) {
        $(".drop-down-btn").removeClass("active");
        $(".drop-down").removeClass("active");
      }
    });

    $(".drop-down-btn").click(function () {
      // Can't just toggle since there may be multiple and one could be active
      let isActive = $(this).hasClass("active");

      $(".drop-down-btn").removeClass("active");
      $(".drop-down").removeClass("active");

      if (!isActive) {
        $(this).addClass("active");
        $(this).next(".drop-down").addClass("active");
      }
    });

    $(".drop-down-wrapper .drop-down a").click(function () {
      $(".drop-down-btn").removeClass("active");
      $(".drop-down").removeClass("active");
    });

    $(".drop-down-amount .drop-down a").click(function (e) {
      e.preventDefault();
      $(".drop-down-amount .drop-down-btn").text(this.innerText);
      $("#Amount").val(this.dataset.variant);
      $("#Amount").trigger("change");
    });
    if ($("#Amount")[0] != null) {
      var targetAmount = $(".drop-down-amount a")[3];
      $(targetAmount).click();
      $(".drop-down-amount .drop-down-btn").text(targetAmount.text);
    }

    // Account page, load active
    if (window.location.hash != "") {
      var accountLink = $(
        '.account-navlink[href="' + window.location.hash + '"]'
      );
      if (accountLink != null) {
        swapAccountPage(window.location.hash);
      }
    }

    var add_to_bags = document.querySelectorAll(".add-to-bag");
    for (let i = 0; i < add_to_bags.length; i++) {
      let add_to_bag = add_to_bags[i];
      add_to_bag.addEventListener("click", function (e) {
        e.preventDefault();
        let btn_text = $(this).find("[data-add-to-cart-text]");
        let btn_loader = $(this).find("[data-loader]");
        if (btn_text != null && btn_loader != null) {
          $(btn_text).addClass("hide");
          $(btn_loader).removeClass("hide");
        }
        let props = {
          Text: initials.get($(this).attr("p-type")),
          "Foil Colour": foil.get(),
          "Pre-order":
            $(this).attr("preorder-text") != "null"
              ? $(this).attr("preorder-text")
              : null,
        };

        if (initials.get($(this).attr("p-type")) != "") {
          props = {
            Text: initials.get($(this).attr("p-type")),
            "Foil Colour": foil.get(),
            "Pre-order":
              $(this).attr("preorder-text") != "null"
                ? $(this).attr("preorder-text")
                : null,
          };
        }
        $.post(
          "/cart/add.js",
          {
            quantity: 1,
            id: this.dataset.variant,
            properties: props,
          },
          function (item) {
            loadCart(0);
            if (btn_text != null && btn_loader != null) {
              $(btn_text).removeClass("hide");
              $(btn_loader).addClass("hide");
            }
            $("#cartMenu").addClass("open");
            $("html").addClass("no-scroll");
          },
          "json"
        );
      });
    }
  }

  if (document.readyState == "complete") {
    loadCustom();
  } else {
    $(window).bind("load", loadCustom);
  }
});

$("a.btn--secondary").click(function () {
  var target = $(this).attr("data");
  $("html, body").animate(
    {
      scrollTop: $(target).offset().top - 100,
    },
    800
  );
});

$("a.btn--secondary").click(function () {
  var target = $(this).attr("data");
  $("html, body").animate(
    {
      scrollTop: $(target).offset().top - 100,
    },
    800
  );
});

$(".more_characters").on("click", function () {
  if ($(".extra-svgs .svgs").is(":visible")) {
    $(".extra-svgs .svgs").slideUp();
  } else {
    $(".extra-svgs .svgs").slideDown();
  }
});

function loadCustom() {
  initials.load();
  foil.load(true);
  if ($(".customizer_personalize").length) {
    customizer.load(true);
  }
}
if (document.readyState == "complete") {
  loadCustom();
} else {
  $(window).bind("load", loadCustom);
}
$(window).on("load", function () {
  initials.load();
  foil.load(true);
  if ($(".customizer_personalize").length) {
    customizer.load(true);
  }
});

$(document).ready(function () {
  //$('#shopify-section-template--14653356408913__main .slider-mobile-gutter .product__media-list li img.hasactive').removeClass('notactive');
  $('.customizer_panels input[type="radio"]').on("change", function () {
    const getcolorvall = $(".customizer-color-text");
    if ($(this).attr("value") == "Rose") {
      getcolorvall.html("Color - Rose Gold");
    } else {
      getcolorvall.html("Color - " + $(this).attr("value"));
    }
  });
});

// hasMatchingItems
// 0 means load a new set of items
// 1 keep old set and don't hide
// 2 hide matching items
// matchingfilter
// 0 mean upsell
// 1 color
// 2 mean specific tag
function updateCartItems(cart, hasMatchingItems) {
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
  for (var x = 0; x < cart.items.length; x++) {
    // console.log(cart.items[x]);
    if (cart.items[x].variant_options[0].includes("Emerald")) {
      emerald = 1;
    }
    if (cart.items[x].handle.includes("disney-leather-sticker")) {
      sticker_qty = cart.items[x].quantity + sticker_qty;
    }
    if (cart.items[x].id == valId) {
      valInCart = true;
      valQty = cart.items[x].quantity;
    }
    if (cart.items[x].id == valId2) {
      valInCart2 = true;
      val2Qty = cart.items[x].quantity;
    }
    if (cart.items[x].id == valId3) {
      valInCart3 = true;
      val3Qty = cart.items[x].quantity;
    }
    if (cart.items[x].handle.includes("easy-apply-screen-protector-1")) {
      protector_is = cart.items[x].quantity;
      pro_var_id = cart.items[x].variant_id;
    }
    if (
      cart.items[x].product_type == "Phone Case" ||
      cart.items[x].product_type == "Card Phone Case" ||
      cart.items[x].product_type == "Sling Phone Case" ||
      cart.items[x].product_type == "Silicone Phone Case"
    ) {
      phone_case = true;
    }
    if (cart.items[x].product_title.includes("Day Card")) {
      card_qty = card_qty + cart.items[x].quantity;
      card_qty_id = cart.items[x].variant_id;
    }
    if (cart.items[x].product_title.includes("Phone")) {
      phone_cases_qty = phone_cases_qty + cart.items[x].quantity;
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
        loadCart(0);
      },
      "json"
    );
  }
  if (sticker_qty != 0 && cart.item_count == sticker_qty) {
    $.post(
      "/cart/clear.js",
      function (cart) {
        updateCartItems(cart, 2);
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
        loadCart(0);
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
        loadCart(0);
      },
      "json"
    );
  }
  let caritemCount = cart.item_count;
  if (alreadyIncart) {
    caritemCount = caritemCount - 1;
  }

  let matchingFilter = 0;
  let total_save = 0;
  const cartMenu = document.querySelector("#cartMenu");
  const cartContents = cartMenu.querySelector(".cart__contents");
  const emptyCartContents = cartMenu.querySelector(".emptycart__contents");
  const matchingItems = cartMenu.querySelector(".cart-matching-slider");
  const cartPrice = cartMenu.querySelector(".cart-subtotal__price");
  const ap_Price = cartMenu.querySelector(".cart-ap-price");
  // console.log("ap" ,ap_Price);
  const cartDiscount = cartMenu.querySelector(".cart-discount");
  var cart_price = theme.Currency.formatMoney(
    cart.total_price,
    theme.moneyFormat
  );
  if (cartContents != null) {
    cartContents.innerHTML = "";
    emptyCartContents.innerHTML = "";
  }
  $("[data-cart-count]").text(cart.item_count);
  if (cart.items.length > 0) {
    $(".main_emptycart").addClass("hide");
    $(
      "[data-cart-count-bubble], .cart__has-items, .checkout-wrap, .cart-banner"
    ).removeClass("hide");
    for (var i = cart.items.length - 1; i >= 0; i--) {
      let line_item = cart.items[i];
      valGiftCounter = valetineGiftCheck(line_item, valGiftCounter, i);
      let pop_up = false;
      let small_leather_limit = 0;
      if ($("#gift_redirect").length == 0) {
        small_leather_limit = 0.5;
      }
      for (var pop = 0; pop < valGiftCounter.length; pop++) {
        if (valGiftCounter[pop] > small_leather_limit) {
          pop_up = true;
          break;
        }
      }
      if (pop_up && i == 0 && !valInCart && !valInCart2 && !valInCart3) {
        // $('.valentine_card').fadeIn(400);
        if ($("#bp_gift").length > 0 || $(".lp-product-1").length > 0) {
        } else {
          if ($("#gift_redirect").length > 0) {
            $(".btn--val").trigger("click");
          } else {
            $(".valentine_card").fadeIn(400);
            $(".checkout-wrap").addClass("borderunset");
          }
        }
      } else if (
        (i == 0 && (valInCart || valInCart2 || valInCart3)) ||
        !pop_up
      ) {
        $(".valentine_card").fadeOut(400);
        $(".checkout-wrap").removeClass("borderunset");
      }
      let props = line_item.properties;
      let cart_item = document.createElement("div");
      let compare_at_price = calcCompareAtPrice(line_item);
      if (compare_at_price > line_item.original_price) {
        total_save =
          total_save +
          (compare_at_price - line_item.original_price) * line_item.quantity;
      }

      if (cart.items[i].product_type == "Gift") {
        if (cart.item_count == 1) {
          $.post(
            "/cart/clear.js",
            function (cart) {
              updateCartItems(cart, 2);
            },
            "json"
          );
        }
      } //gifting ends here
      else {
        cart_item.classList.add("cart__item");
        if (!line_item.product_type.toLowerCase() == "gift card") {
          cart_item.classList.add(
            line_item.product_type.toLowerCase().replace(/ /g, "-")
          );
        }
        cart_item.classList.add("item" + i.toString());
        cart_item.classList.add("border-bottom");
        cartContents.appendChild(cart_item);

        let loading_cart = document.createElement("div");
        loading_cart.classList.add("cart__loading");
        loading_cart.classList.add("hide");
        var loading_icon =
          '<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-spinner" viewBox="0 0 20 20"><path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z" fill="#919EAB"></path></svg>';
        loading_cart.innerHTML = loading_icon;
        cart_item.appendChild(loading_cart);
        let cart_remove = document.createElement("div");
        cart_remove.classList.add("cart__remove");
        cart_item.appendChild(cart_remove);
        let cart_remove_btn = document.createElement("a");
        cart_remove_btn.setAttribute(
          "href",
          window.location.origin +
            "/cart/change?line=" +
            i.toString() +
            "&amp;quantity=0"
        );
        var trash =
          '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1080 1080" style="enable-background:new 0 0 1080 1080;" xml:space="preserve">';
        trash = trash + '<g id="Layer_1" class="st0">';
        trash =
          trash +
          '<path class="trash1" d="M208.3,205.1l53.3,758.2c1.8,19.6,16.8,34.6,34.7,34.6h244.2h244.2c17.9,0,32.9-14.9,34.7-34.6l53.3-758.2"/>';
        trash =
          trash +
          '<path class="trash2" d="M907.6,206.1H540.5c0,0-367.1,0-367.1,0"/><path class="trash1" d="M672.9,206.1v-42.6c0-36.7-26.9-66.5-60.2-66.5h-72.2h-72.2c-33.2,0-60.2,29.8-60.2,66.5v42.6"/>';
        trash =
          trash +
          '<line class="trash3" x1="540.5" y1="343" x2="540.5" y2="860.5"/><line class="trash3" x1="692.9" y1="343" x2="672.9" y2="860.5"/><line class="trash3" x1="388.1" y1="343" x2="408.1" y2="860.5"/>';
        trash = trash + "</g> </svg>";
        cart_remove_btn.innerHTML = " " + trash;
        cart_remove.appendChild(cart_remove_btn);
        setQty(cart_remove_btn, i, null, 0, 1);
        let engraving = "";
        let foil = "";
        let art = "";
        let zod = "";
        let v = "";
        if (props != null) {
          if (props["Foil Color"] != null) {
            foil = props["Foil Color"];
          }
          if (props["Text"] != null) {
            engraving = props["Text"];
          }

          if (props["Zodiac"] != null) {
            zod = props["Zodiac"];
          }
        }
        let cart_item_image = document.createElement("div");
        cart_item_image.classList.add("cart__item__image");
        cart_item.appendChild(cart_item_image);

        let image_link = document.createElement("a");
        image_link.classList.add("product-image-fix");
        if (
          !(
            line_item.product_type.includes("Screen") ||
            line_item.product_type.includes("Gift")
          )
        ) {
          image_link.setAttribute("href", line_item.url);
        }
        cart_item_image.appendChild(image_link);
        let image_wrapper = document.createElement("div");
        image_wrapper.classList.add("relative");
        image_link.appendChild(image_wrapper);

        let item_image = document.createElement("img");
        item_image.classList.add("active");
        item_image.setAttribute(
          "src",
          line_item.featured_image.url.replaceAll(".jpg", "_360x.jpg")
        );
        image_wrapper.appendChild(item_image);
        if (art != "") {
          let image_text = document.createElement("div");
          image_text.classList.add("cart-engrave");
          image_text.classList.add("artwork-engrave");
          image_text.classList.add(
            line_item.product_type.toLowerCase().replace(/ /g, "-")
          );
          image_text.classList.add(art.toLowerCase().replace(/ /g, "-"));
          image_wrapper.appendChild(image_text);
        } else if (zod != "") {
          let image_text = document.createElement("div");
          image_text.classList.add("cart-engrave");
          image_text.classList.add("zodiac-engrave");
          image_text.classList.add(
            line_item.product_type.toLowerCase().replace(/ /g, "-")
          );
          image_text.classList.add(
            zod.toLowerCase().replace(/ /g, "-").replace("'", "")
          );
          image_text.classList.add(foil.toLowerCase().replace(" ", "-"));
          image_wrapper.appendChild(image_text);
        } else {
          if (engraving != "" && foil != "") {
            let image_text = document.createElement("div");
            image_text.classList.add("cart-engrave");
            image_text.classList.add("icon-chess-piece");
            image_text.classList.add("engrave");
            image_text.classList.add(
              line_item.product_type.toLowerCase().replace(/ /g, "-")
            );
            image_text.classList.add(foil.toLowerCase().replace(" ", "-"));
            image_text.innerHTML = engraving;
            image_wrapper.appendChild(image_text);
          }
          if (v != "") {
            let valentine_text = document.createElement("div");
            valentine_text.classList.add("cart-engrave");
            valentine_text.classList.add("engrave");
            valentine_text.classList.add("valentine-engrave");
            if (foil.toLowerCase().replace(/ /g, "-") == "gold") {
              valentine_text.classList.add("silver");
              valentine_text.classList.add("fake");
            } else {
              valentine_text.classList.add(
                foil.toLowerCase().replace(/ /g, "-")
              );
            }
            valentine_text.classList.add("him-her");
            image_wrapper.appendChild(valentine_text);
          }
        }
        let item_details = document.createElement("div");
        item_details.classList.add("cart__item__details");
        item_details.classList.add(line_item.product_type.split(" ")[0]);
        cart_item.appendChild(item_details);
        let title_link = document.createElement("a");
        title_link.classList.add("cart__product-title");
        title_link.classList.add("md_text");
        title_link.classList.add("bold");
        if (
          !(
            line_item.product_type.includes("Screen") ||
            line_item.product_type.includes("Gift")
          )
        ) {
          title_link.setAttribute("href", line_item.url);
        }
        if (line_item.gift_card) {
          title_link.innerHTML = line_item.product_title;
        } else if (line_item.product_type.includes("Screen")) {
          title_link.innerHTML = line_item.title.replace(
            " - ",
            '<br><span class="cart_text">'
          );
        } else if (
          line_item.product_type.includes("Gift Boxes") &&
          !line_item.url.includes("love-club")
        ) {
          title_link.innerHTML =
            line_item.product_title +
            '<br> <p class="free_gift"> Free <span>' +
            theme.Currency.formatMoney(compare_at_price, "NO_CURRENCY") +
            '</span></p><p class="free-price"> Complimentary Free Express Shipping </p>';
        } else {
          title_link.innerHTML = line_item.title.replace(
            /-/,
            '<br><span class="cart_text">'
          );
        }
        item_details.appendChild(title_link);

        let item_price_wrapper = document.createElement("div");
        item_price_wrapper.classList.add("cart__price-wrapper");
        item_price_wrapper.classList.add("cart_text");
        item_details.appendChild(item_price_wrapper);
        let item_price = document.createElement("span");
        item_price.classList.add("price");
        item_price.classList.add("cart_text");
        item_price.innerHTML = theme.Currency.formatMoney(
          line_item.original_price,
          "NO_CURRENCY"
        ); // original_line_price
        item_price_wrapper.appendChild(item_price);
        if (compare_at_price > line_item.original_price) {
          item_price_wrapper.classList.add("cart__price-wrapper_discount");
          let item_price_discount = document.createElement("span");
          item_price_discount.classList.add("price");
          item_price_discount.classList.add("compare_price");
          item_price_discount.innerHTML = theme.Currency.formatMoney(
            compare_at_price,
            "NO_CURRENCY"
          ); // original_line_price
          item_price_wrapper.appendChild(item_price_discount);
          let price_discount = line_item.original_price / compare_at_price;
          let percent_off = 1 - price_discount;
          let item_percent_discount = document.createElement("span");
          item_percent_discount.classList.add("discount_percent");
          item_percent_discount.innerHTML =
            Math.round(percent_off * 100) + "% OFF";
          item_price_wrapper.appendChild(item_percent_discount);
        }
        if (props != null) {
          let cart_props = document.createElement("div");
          cart_props.classList.add("cart__props");
          item_details.appendChild(cart_props);

          if (props["Artwork"] != null) {
            let cart_props_artwork = document.createElement("div");
            cart_props_artwork.classList.add("cart__prop");
            cart_props_artwork.classList.add("cart_text");
            cart_props.appendChild(cart_props_artwork);
            let cart_props_artwork_name = document.createElement("span");
            cart_props_artwork_name.innerHTML = "Artwork:";
            cart_props_artwork.appendChild(cart_props_artwork_name);

            let cart_props_artwork_text = document.createElement("span");
            cart_props_artwork_text.innerHTML = art;
            cart_props_artwork.appendChild(cart_props_artwork_text);
          } else if (props["Zodiac"] != null && props["Zodiac"] != "") {
            let cart_props_zodiac = document.createElement("div");
            cart_props_zodiac.classList.add("cart__prop");
            cart_props_zodiac.classList.add("cart_text");
            cart_props.appendChild(cart_props_zodiac);

            let cart_props_zodiac_name = document.createElement("span");
            cart_props_zodiac_name.innerHTML = "Personalization:";
            cart_props_zodiac.appendChild(cart_props_zodiac_name);

            let cart_props_zodiac_text = document.createElement("span");
            cart_props_zodiac_text.innerHTML = zod;
            cart_props_zodiac.appendChild(cart_props_zodiac_text);
            if (props["Foil Color"] != null) {
              let cart_props_foil = document.createElement("div");
              cart_props_foil.classList.add("cart__prop");
              cart_props_foil.classList.add("cart_text");
              cart_props_zodiac.appendChild(cart_props_foil);
              let cart_props_foil_text = document.createElement("span");
              cart_props_foil_text.classList.add("cart-colour");
              cart_props_foil_text.classList.add(
                foil.toLowerCase().replace(" ", "-")
              );
              cart_props_zodiac.appendChild(cart_props_foil_text);
            }
          } else {
            if (props["Text"] != null && engraving != "") {
              let cart_props_engraving = document.createElement("div");
              cart_props_engraving.classList.add("cart__prop");
              cart_props_engraving.classList.add("cart_text");
              cart_props.appendChild(cart_props_engraving);

              let cart_props_engraving_name = document.createElement("span");
              let cart_props_foil_text = document.createElement("span");
              cart_props_engraving_name.innerHTML = "Personalization:";
              cart_props_engraving.appendChild(cart_props_engraving_name);

              let cart_props_engraving_text = document.createElement("span");
              cart_props_engraving_text.classList.add("text-upper");
              cart_props_engraving_text.innerHTML =
                engraving != "" ? engraving : "No Personalization";
              cart_props_foil_text.classList.add("cart-colour");
              cart_props_engraving_text.classList.add("chess_text");
              if (foil.toLowerCase().replace(" ", "-") != "") {
                cart_props_foil_text.classList.add(
                  foil.toLowerCase().replace(" ", "-")
                );
              }
              cart_props_engraving.appendChild(cart_props_engraving_text);
              cart_props_engraving.appendChild(cart_props_foil_text);
            }
          }
          if (props["Pre-order"] != null && props["Pre-order"].length > 0) {
            let cart_props_preorder = document.createElement("div");
            cart_props_preorder.classList.add("cart__prop");
            cart_props_preorder.classList.add("cart_text");
            cart_props.appendChild(cart_props_preorder);

            let cart_props_preorder_name = document.createElement("span");
            cart_props_preorder_name.innerHTML = "Preorder:";
            cart_props_preorder.appendChild(cart_props_preorder_name);

            let cart_props_preorder_text = document.createElement("span");
            cart_props_preorder_text.innerHTML = props["Pre-order"];
            cart_props_preorder.appendChild(cart_props_preorder_text);
          }
        }

        if (!line_item.product_type.includes("Gift Boxes")) {
          let item_qty = document.createElement("div");
          item_qty.classList.add("cart__qty");
          item_details.appendChild(item_qty);

          let qty_num = document.createElement("span");
          qty_num.classList.add("qty-num");
          qty_num.innerHTML = line_item.quantity;
          qty_num.dataset.qty = line_item.quantity;

          let qty_down = document.createElement("a");
          qty_down.classList.add("qty-btn");
          qty_down.classList.add("qty-down");
          qty_down.innerHTML = "-";
          qty_down.setAttribute("href", "javascript:void(0);");
          item_qty.appendChild(qty_down);
          setQty(qty_down, i, qty_num, -1, 1);
          item_qty.appendChild(qty_num);

          let qty_up = document.createElement("a");
          qty_up.classList.add("qty-btn");
          qty_up.classList.add("qty-up");
          qty_up.innerHTML = "+";
          qty_up.setAttribute("href", "javascript:void(0);");
          item_qty.appendChild(qty_up);
          setQty(qty_up, i, qty_num, 1, 1); //last 1 is for color filter
        }
      }

      $(".btn--val").removeClass("hide");
      $(".btn--val-load").addClass("hide");
      var small_leather =
        valGiftCounter[0] + valGiftCounter[1] + valGiftCounter[2];
      if ($("#gift_redirect").length == 0) {
        small_leather = valGiftCounter[0];
      }
      if (small_leather > 0) {
        $(".btn--val").attr("data-val", "true");
        if (!valInCart && (valInCart3 || valInCart2) && i == 0) {
        } else if (valInCart && small_leather != valQty && i == 0) {
        }
      } else {
        $(".btn--val").attr("data-val", "false");
      }
      if (valGiftCounter[3] > 0) {
        $(".btn--val").attr("data-val1", "true");
        if (!valInCart2 && (valInCart || valInCart3) && i == 0) {
        } else if (valInCart2 && valGiftCounter[3] != val2Qty && i == 0) {
        }
      } else {
        $(".btn--val").attr("data-val1", "false");
      }
      if (valGiftCounter[4] > 0) {
        $(".btn--val").attr("data-val2", "true");
        if (!valInCart3 && (valInCart || valInCart2) && i == 0) {
          // addFreeGift(valId3);
        } else if (valInCart3 && valGiftCounter[4] != val3Qty && i == 0) {
        }
      } else {
        $(".btn--val").attr("data-val2", "false");
      }
      if (pop_up && i == 0 && (valInCart || valInCart2 || valInCart3)) {
        // valGiftItem(cartContents,line_item,small_leather +  valGiftCounter[3] + valGiftCounter[4]);
        $(".valentine_card").fadeOut(400);
      }
      if (!pop_up && $(".valentine_card").is(":visible")) {
        $(".valentine_card").fadeOut(400);
      }
      if (small_leather <= small_leather_limit && i == 0 && valInCart) {
        $.post(
          "/cart/change.js",
          {
            quantity: 0,
            id: valId,
            properties: "",
          },
          function (item) {
            loadCart(0);
          },
          "json"
        );
      }
      if (valGiftCounter[3] <= 0 && i == 0 && valInCart2) {
        $.post(
          "/cart/change.js",
          {
            quantity: 0,
            id: valId2,
            properties: "",
          },
          function (item) {
            loadCart(0);
          },
          "json"
        );
      }
      if (valGiftCounter[4] <= 0 && i == 0 && valInCart3) {
        $.post(
          "/cart/change.js",
          {
            quantity: 0,
            id: valId3,
            properties: "",
          },
          function (item) {
            loadCart(0);
          },
          "json"
        );
      }
    }
    if (cartPrice != null) {
      var itemCounter = cart.item_count;
      var htmlap = (ap_Price.innerHTML = Math.round(cart.total_price / 400));
      if (total_save > 0) {
        cartPrice.innerHTML = cart_price;
      } else {
        cartPrice.innerHTML = cart_price;
        cartDiscount.classList.add("hide");
      }
      if (emerald > 0) {
        // $('.cart-banner p:first-child').addClass('hide');
        $(".cart-banner p:not(:first-child)").removeClass("hide");
      } else {
        $(".cart-banner p:first-child").removeClass("hide");
        $(".cart-banner p:not(:first-child)").addClass("hide");
      }
      if (itemCounter >= 2) {
        $(".progressbar__cart--fill").addClass("full-bar");

        $(".progressbar__cart--fill").removeClass("full-bar-down");
      } else if (cart.item_count == 1) {
        if ($(".progressbar__cart--fill").hasClass("full-bar")) {
          $(".progressbar__cart--fill").removeClass("full-bar");
          $(".progressbar__cart--fill").addClass("full-bar-down");
        } else {
          $(".progressbar__cart--fill").removeClass("full-bar-down");
        }
      } else {
        $(".progressbar__cart--fill").removeClass("full-bar-down");
        $(".progressbar__cart--fill").removeClass("full-bar");
      }
    }

    if (hasMatchingItems == 0) {
      $(".cart-matching-slider").scrollLeft(0);
      let is_gift_wrap = false;
      let items = cart.items;
      for (var i = 0; i < items.length; i++) {
        if (items[i].title == "Make it a Gift - Gift Wrap") {
          items.splice(i, 1);
          is_gift_wrap = true;
        }
      }
      getMatchingItems(matchingItems, cart);
      // if(is_gift_wrap == false){
      //   getMatchingItems(matchingItems, cart);
      // }
    } else if (hasMatchingItems == 1) {
      // do nothing
    } else if (hasMatchingItems == 2) {
      $(".cart__matching").addClass("hide");
    }
  } else {
    $(".cart__has-items, .checkout-wrap, .cart-banner").addClass("hide");
    cartContents.innerHTML = "";
    emptyCartContents.innerHTML = $(".main_emptycart").html();
    emptyCartContents.classList.remove("hide");
  }
}

function setQty(btn, key, qty_num, to_add, filterMatchingItems) {
  if (filterMatchingItems == 0) {
    localStorage.setItem("puzzleDelete", "true");
  }
  btn.addEventListener("click", function (e) {
    if ($(this).hasClass("qty-btn")) {
      $(this).parent().parent().parent().addClass("cart_loading");
      $(this)
        .parent()
        .parent()
        .parent()
        .find(".cart__loading")
        .removeClass("hide");
    } else {
      $(this).parent().parent().addClass("cart_loading");
      $(this).parent().parent().find(".cart__loading").removeClass("hide");
    }
    e.preventDefault();
    let qty = to_add;
    if (qty_num != null) {
      qty = parseInt(qty_num.dataset.qty) + parseInt(to_add);
    }
    // show cart loader
    $.post(
      "/cart/change.js",
      { quantity: qty, line: key + 1 },
      function (cart) {
        updateCartItems(cart, 0);
        var shippingtext = $("#min_shipping").attr("data-varlu");
        $(this).find(".dyn_price").text(shippingtext);
        var final_total = cart.total_price.toFixed(2) / 100;
        // for cart price less than 50
        if (final_total < 50) {
          $(".progress-bar__fill").css("width", "25%");
        }
        // for cart price less than or equals to 50
        else if (final_total >= 50 && final_total < 75) {
          $(".progress-bar__fill").css("width", "50%");
        }
        // for cart price reaches to 75
        else if (final_total >= 75 && final_total < 90) {
          $(".progress-bar__fill").css("width", "85%");
        }
        // for cart price equals to 100 or greater than 100
        else if (final_total >= 90) {
          $(".progress-bar__fill").css("width", "100%");
        }
        if (final_total < shippingtext) {
          var diff_price = Math.round(shippingtext - final_total);
          $(".fullprogressbar").addClass("hide");
          $(".customprogressbar").removeClass("hide");
          $(".progress-bar__fill").removeClass("full-bar");
          $(".progress-bar__fill").removeClass("full-bar");
          $(".progress-bar__fill").addClass("full-bar-down");
          $(".dyn_price").html(diff_price);
        } else {
          $(".fullprogressbar").removeClass("hide");
          $(".customprogressbar").addClass("hide");
          $(".progress-bar__fill").addClass("full-bar");
          $(".progress-bar__fill").removeClass("full-bar-down");
        }
        // hide cart loader
      },
      "json"
    );
  });
}

function loadCart(hasMatchingItems) {
  $.getJSON("/cart.js").then(
    function (cart) {
      updateCartItems(cart, 0); //last 0 is for upsell
      var shippingtext = $("#min_shipping").attr("data-varlu");
      $(this).find(".dyn_price").text(shippingtext);
      var final_total = cart.total_price.toFixed(2) / 100;
      // for cart price less than 50
      if (final_total < 50) {
        $(".progress-bar__fill").css("width", "25%");
      }
      // for cart price less than or equals to 50
      else if (final_total >= 50 && final_total < 75) {
        $(".progress-bar__fill").css("width", "50%");
      }
      // for cart price reaches to 75
      else if (final_total >= 75 && final_total < 90) {
        $(".progress-bar__fill").css("width", "85%");
      }
      // for cart price equals to 100 or greater than 100
      else if (final_total >= 90) {
        $(".progress-bar__fill").css("width", "100%");
      }
      if (final_total < shippingtext) {
        var diff_price = Math.round(shippingtext - final_total);
        $(".fullprogressbar").addClass("hide");
        $(".customprogressbar").removeClass("hide");
        $(".progress-bar__fill").removeClass("full-bar");
        $(".progress-bar__fill").removeClass("full-bar");
        $(".progress-bar__fill").addClass("full-bar-down");
        $(".dyn_price").html(diff_price);
      } else {
        $(".fullprogressbar").removeClass("hide");
        $(".customprogressbar").addClass("hide");
        $(".progress-bar__fill").addClass("full-bar");
        $(".progress-bar__fill").removeClass("full-bar-down");
      }
    }.bind(this)
  );
}
loadCart(0);
// Cart end
$(document).ready(function () {
  $(".foil-list input:checked").each(function () {
    var colorseval = $(this).val();
    $(".customizer_save").click(function () {
      if (!$("body").find(".initials_field").hasClass("has-value")) {
        $("body").find(".customizer_personalize").removeClass("hide");
        $("body").find(".customizer_edit").addClass("hide");
      } else {
        $("body").find(".customizer_personalize").addClass("hide");
        $("body").find(".customizer_edit").removeClass("hide");
      }
      localStorage.setItem("mdsfoilss", colorseval);
      localStorage.getItem("mdsfoilss");
    });
  });
  $(".foil-list input").change(function () {
    var colorseval = $(this).val();
    $(".customizer_save").click(function () {
      localStorage.setItem("mdsfoilss", colorseval);
      localStorage.getItem("mdsfoilss");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var product_idd = document.getElementById("product_id_for_phrase").value;
  console.log(product_idd);
  if (
    product_idd == 7216038117457 ||
    product_idd == 7216038805585 ||
    product_idd == 7216039166033 ||
    product_idd == 7216039198801 ||
    product_idd == 7216039231569
  ) {
    function handleCuratedOptionClick(option) {
      const selectedOption = event.target;
      var curatedPhraseShow = document.getElementById("curated_phrase");
      var curatedOptions = document.querySelectorAll(".curatedOption");

      var initialsField = document.querySelector(".initials_field");
      var inputField = document.querySelector(".initials");
      var selectedValue = option.getAttribute("data-value");
      //    var error_Curated = document.getElementById("error_Curated");
      // curatedPhraseShow.innerHTML = localStorageValue2;
      var customizer_personalize = document.querySelector(
        ".hide_customizer_personalize"
      );
      var curated_phrases_css_style = document.querySelector(
        ".curated_phrases_css_style"
      );
      var customizer_edit = document.querySelector(".hide_customizer_edit");
      var customizer_choice = document.getElementById("cusomizer-choiceee");
      var input_field_fetch = jQuery('input[data-fetch="cust"]').val();

      $(".customizer_save").click(function () {
        var input_field_fetch_2 = jQuery('input[data-fetch="cust"]').val();
        var selectedOptionElement = document.querySelector(
          "#curatedList .curatedOption.selected"
        );
        var selectedOption = selectedOptionElement
          ? selectedOptionElement.getAttribute("data-value")
          : "";
        if (selectedOption == "" && input_field_fetch_2 == "") {
          console.log("both field has no value");
          //  jQuery('input[data-fetch="cust"]').val("");
          $(".hide_customizer_personalize").removeClass("hide");
          $(".hide_customizer_edit").addClass("hide");
          $(".curated_phrases_css_style").addClass("hide");
        } else if (selectedOption != "" && input_field_fetch_2 == "") {
          console.log("selected field has value");
          $(".hide_customizer_personalize").addClass("hide");
          $(".hide_customizer_edit").addClass("hide");
          $(".curated_phrases_css_style").removeClass("hide");
        } else if (selectedOption == "" && input_field_fetch_2 != "") {
          console.log("input filed value");
          $(".hide_customizer_personalize").addClass("hide");
          $(".hide_customizer_edit").removeClass("hide");
          $(".curated_phrases_css_style").addClass("hide");
        }
      });
      curatedOptions.forEach(function (opt) {
        // Remove the "selected" class from all other options
        if (opt !== option) {
          opt.classList.remove("selected");
        }
      });
      if (input_field_fetch !== "") {
        // customizer_personalize.classList.add("hide");
        // customizer_edit.classList.remove("hide");
        // curated_phrases_css_style.classList.add("hide");
        $(".hide_customizer_personalize").addClass("hide");
        $(".hide_customizer_edit").removeClass("hide");
        $(".curated_phrases_css_style").addClass("hide");
        jQuery('input[data-fetch="cust"]').val("");
        var fff = jQuery(".engrave").text("");
        localStorage.setItem("mdsEngraving", "");
        option.classList.toggle("selected");
      } else {
        // customizer_personalize.classList.remove("hide");
        // customizer_edit.classList.add("hide");
        // curated_phrases_css_style.classList.add("hide");
        option.classList.toggle("selected");
      }
      // Enable or disable input fields based on the selected option
      if (selectedOption.classList.contains("selected")) {
        console.log("selected");
        $(".hide_customizer_personalize").addClass("hide");
        $(".hide_customizer_edit").addClass("hide");
        $(".curated_phrases_css_style").removeClass("hide");
        curated_phrase_product.innerHTML = selectedValue;
        curatedPhraseShow.innerHTML = selectedValue;
        customizer.innerHTML = selectedValue;
        curated_phrase_product.innerHTML = selectedValue;
        curatedPhraseShow.innerHTML = selectedValue;
        document.getElementById("input_curate_text").value = selectedValue;
        document.getElementById("input_text").value = "";
        jQuery('input[data-fetch="cust"]').val("");
        customizer.innerHTML = selectedValue;
        localStorage.setItem("mdsengraving2", selectedValue);
      } else {
        console.log("unselected");
        $(".hide_customizer_personalize").removeClass("hide");
        $(".hide_customizer_edit").addClass("hide");
        $(".curated_phrases_css_style").addClass("hide");
        // customizer_personalize.classList.remove("hide");
        // customizer_edit.classList.add("hide");
        // curated_phrases_css_style.classList.add("hide");
        curated_phrase_product.innerHTML = "";
        // option.classList.toggle("selected");
        // $("body").find(".hide_customizer_edit").removeClass("hide");
        $("#customizer-choiceee").html("");
        curatedPhraseShow.innerHTML = "";
        document.getElementById("input_text").value = input_field_fetch;
        document.getElementById("input_curate_text").value = "";
        customizer_edit.classList.add("hide");
        localStorage.setItem("mdsengraving2", "");
      }
    }

    var curatedOptions = document.querySelectorAll(".curatedOption");

    curatedOptions.forEach(function (option) {
      option.addEventListener("click", function () {
        handleCuratedOptionClick(option);
      });
    });

    var localStorageValue = localStorage.getItem("mdsEngraving"); // Replace 'yourKey' with the actual key you are using
    var localStorageValue2 = localStorage.getItem("mdsengraving2"); // Replace 'yourKey' with the actual key you are using
    var curatedPhraseShow = document.getElementById("curated_phrase");
    var customizer_personalize = document.querySelector(
      ".hide_customizer_personalize"
    );
    var curated_phrases_css_style = document.querySelector(
      ".curated_phrases_css_style"
    );
    var customizer_edit = document.querySelector(".hide_customizer_edit");
    var customizer_choice = document.getElementById("cusomizer-choiceee");

    var customizer = document.getElementById("customizer-choiceee");
    var curated_phrase = document.getElementById("curated_phrase");
    var curated_phrase_product = document.getElementById(
      "curated_phrase_product"
    );
    if (localStorageValue2 !== "" && localStorageValue2 != null) {
      console.log("mdsengraving2");
      customizer_personalize.classList.add("hide");
      curated_phrases_css_style.classList.remove("hide");
      customizer_edit.classList.add("hide");
      customizer.innerHTML = localStorageValue2;
      curated_phrase.innerHTML = localStorageValue2;
      curated_phrase_product.innerHTML = localStorageValue2;
      localStorage.setItem("mdsEngraving", "");
      var curatedList = document.getElementById("curatedList");

      // Select all <li> elements inside the <ul>
      var curatedOptions = curatedList.querySelectorAll(".curatedOption");

      // Loop through each <li> element and check if the data-value matches the localStorage value
      for (var i = 0; i < curatedOptions.length; i++) {
        var listItem = curatedOptions[i];
        var dataValue = listItem.getAttribute("data-value");

        // Check if the data-value matches the localStorage value
        if (dataValue === localStorageValue2) {
          // Add the 'selected' class to the matching <li> element
          listItem.classList.add("selected");
        }
      }
    } else if (localStorageValue !== "" && localStorageValue != null) {
      console.log("mdsengraving");

      localStorage.setItem("mdsengraving2", "");
      customizer_personalize.classList.add("hide");
      curated_phrases_css_style.classList.add("hide");
      customizer_edit.classList.remove("hide");
      customizer_edit.classList.remove("hidden");
    } else {
      customizer_personalize;
      console.log("not have value");
      customizer_personalize.classList.remove("hide");
      customizer_personalize.classList.remove("hidden");
      curated_phrases_css_style.classList.add("hide");
      customizer_edit.classList.add("hide");
    }
  } else {
    localStorage.setItem("mdsengraving2", "");

    if (
      localStorage.getItem("mdsEngraving") !== "" &&
      localStorageValue != null
    ) {
      console.log("mdsengraving");
      // document.querySelector(".customizer_personalize").classList.add("hide");
      // document.querySelector(".customizer_edit").classList.remove("hide");
      $(".customizer_personalize").addClass("hide");
      $(".customizer_edit").removeClass("hide");
    } else {
      console.log("mdsengraving not ");
      $(".customizer_personalize").removeClass("hide");
      $(".customizer_edit").addClass("hide");
      // document.querySelector(".customizer_edit").classList.add("hide");
      // document
      //   .querySelector(".customizer_personalize")
      //   .classList.remove("hide");
      // $("body").find(".customizer_edit").addClass("hide");
    }
  }
});
