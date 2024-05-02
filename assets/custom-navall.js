$(document).ready(function () {
    $(function () {
        $(".toggle-section").on("click", function (a) {
        const minusIcon = $(this).children('.minus_icon');
        const plusIcon = $(this).children('.plus_icon');
        var sectionContent = $(this).parent('.section-header').next('.section-content');
        console.log(sectionContent)
        if (sectionContent.css('display') == 'none') {
        // Show plus icon and hide minus icon
          minusIcon.css("display","inline-block");
          plusIcon.css("display","none");
        } else {
        // Show minus icon and hide plus icon
          minusIcon.css("display","none");
          plusIcon.css("display","inline-block");
        }
        $(`#${$(this).data("toggle-content")}`)
            .stop()
            .slideToggle();
        });
    }),
        $(".carousel").flickity({ cellSelector: ".carousel__slide", wrapAround: !0, autoPlay: !0, imagesLoaded: !0 }),
        $(".top_bar_slider").slick({ dots: !1, arrows: !1, infinite: !0, fade: !0, speed: 300, slidesToShow: 1, autoplay: !0, autoplaySpeed: 5e3, cssEase: "ease-in-out", adaptiveHeight: !0 }),
        $(".colorwheel-slider").flickity({ cellSelector: ".flickty_item", wrapAround: !1, autoPlay: !1, fade: !1, freeScroll: !0, contain: !0, pageDots: !1, cellAlign: "left", groupCells: !0 }),
        $("#newarrival_slider").flickity({
            cellSelector: ".newarrival_slide",
            wrapAround: !1,
            autoPlay: !1,
            fade: !1,
            contain: !0,
            pageDots: !1,
            cellAlign: "left",
            groupCells: !0,
            imagesLoaded: !0,
            selectedAttraction: 0.05,
            freeScroll: !0,
            freeScrollFriction: 0.03,
        }),
        $("#corporate_slider").flickity({
            cellSelector: ".newarrival_slide",
            wrapAround: !1,
            autoPlay: !1,
            fade: !1,
            contain: !0,
            pageDots: !1,
            cellAlign: "left",
            groupCells: !0,
            imagesLoaded: !0,
            selectedAttraction: 0.05,
            freeScroll: !0,
            freeScrollFriction: 0.03,
        }),
        $(".custom-carousel-slider").flickity({
            cellSelector: ".newarrival_slide",
            wrapAround: !1,
            autoPlay: !1,
            fade: !1,
            contain: !0,
            pageDots: !1,
            cellAlign: "left",
            groupCells: !0,
            imagesLoaded: !0,
            selectedAttraction: 0.05,
            freeScroll: !0,
            freeScrollFriction: 0.03,
        }),
        $(".home_review_slider").flickity({ cellSelector: ".home_review_slide", wrapAround: !1, autoPlay: 1e4, fade: !1, imagesLoaded: !0, selectedAttraction: 0.01, friction: 0.15 }),
        $(".color-wheel-box.tab-menu ul li.tab-a a").click(function () {
            $(".colorwheel-slider").flickity().flickity("destroy"),
                $(".colorwheel-slider").flickity({ cellSelector: ".flickty_item", wrapAround: !1, autoPlay: !1, fade: !1, freeScroll: !0, contain: !0, pageDots: !1, cellAlign: "left", groupCells: !0 });
        }),
        $(".tab-p").click(function () {
            $(".tab.prtab").removeClass("tab-active"), $(".tab.prtab[data-id='" + $(this).attr("data-id") + "']").addClass("tab-active"), $(".tab-p").removeClass("active-p"), $(this).parent().find(".tab-p").addClass("active-p");
        }),
        $(".tab-a").click(function () {
            var a = $(this).attr("data-id");
            $(".tab.colotab").removeClass("tab-active"),
                $(".tab.colotab[data-id='" + $(this).attr("data-id") + "']").addClass("tab-active"),
                $(".tab-a").removeClass("active-a"),
                $("ul")
                    .find("[data-id='" + a + "']")
                    .addClass("active-a");
        }),
        $(".js-hamburgernav").click(function () {
            $(".navmm").toggleClass("is-activenav"), $("body").addClass("header_sticky");
        }),
        $(".num-in span").click(function () {
            var a = $(this).parents(".num-block").find("input.in-num");
            if ($(this).hasClass("minus")) {
                var e = parseFloat(a.val()) - 1;
                (e = e < 1 ? 1 : e) < 2 ? $(this).addClass("dis") : $(this).removeClass("dis"), a.val(e);
            } else {
                var e = parseFloat(a.val()) + 1;
                a.val(e), e > 1 && $(this).parents(".num-block").find(".minus").removeClass("dis");
            }
            return a.change(), !1;
        }),
        $(window).scroll(function () {
            $(this).scrollTop() > 0 ? $(".header_Nav").addClass("fixed-nav-container") : $(".header_Nav").removeClass("fixed-nav-container");
        }),
        $(".btn-search, button.clear-btn").click(function () {
            $(".modal-search").slideDown().addClass("show"),
                $("body").addClass("overflow_hide"),
                setTimeout(function () {
                    $(".search-form-navv .search_input").focus();
                }, 1e3);
        }),
        $(".close-search-modal").click(function () {
            $(".modal-search").slideUp().removeClass("show"), $("body").removeClass("overflow_hide"), $(".all_product_search").hide(), $(".search-form-navv .search_input").val("");
        }),
        $(".search-form-navv .clear-search").on("click", function () {
            $(this).parent(".search-form-navv").find(".search_input").val(""), $(".all_product_search").hide();
        });
    var a = $(".accrodian-change-images img").attr("src");
    $(".set > a").on("click", function () {
        var e = $(this).attr("data-video-src"),
            t = $(this).attr("data-img-src");
        $(this).hasClass("active")
            ? ($(this).removeClass("active"),
              $(this).siblings(".content").slideUp(300),
              $(".set > a i").removeClass("fa-minus").addClass("fa-plus"),
              $(".our_video-work").fadeOut(1e3),
              $(".accrodian-change-images img").attr("src", a),
              $(".accrodian-change-images img").fadeIn(1e3))
            : ($(".set > a i").removeClass("fa-minus").addClass("fa-plus"),
              $(this).find("i").removeClass("fa-plus").addClass("fa-minus"),
              $(".set > a").removeClass("active"),
              $(this).addClass("active"),
              $(".content").slideUp(300),
              $(this).siblings(".content").slideDown(300),
              e
                  ? ($(".our_video-work").fadeIn(1e3), $(".accrodian-change-images img").fadeOut(1e3), $(".accrodian-change-images video").attr("src", e))
                  : ($(".our_video-work").fadeOut(1e3), $(".accrodian-change-images img").attr("src", t), $(".accrodian-change-images img").fadeIn(1e3)));
    }),
        $("#newbtnShowLess").click(function () {
            $(".product-desc-data").removeClass("showmore"), $(".product-desc-data").fadeIn("slow").addClass("showless");
        }),
        $("#newbtnShowMore").click(function () {
            $(".product-desc-data").removeClass("showless"), $(".product-desc-data").fadeIn("slow").addClass("showmore");
        });
    var e = $(".ourwork_feafult").attr("src");
    if (
        ($(function () {
            $(".storytoggle-section").on("click", function (a) {
                var t = $(this).attr("data-toggle-content"),
                    s = $(this).attr("data-toggle-icon"),
                    i = $(this).attr("data-video"),
                    o = $(this).attr("content-ty"),
                    l = $("#" + i).attr("src");
                $("#" + t).attr("style")
                    ? ($("#" + s).removeClass("fa-minus"), $("#" + s).addClass("fa-plus"), $(".section-content").removeAttr("style"), $(".ourwork_feafult").attr("src", e))
                    : ($(".accr").removeClass("fa-minus"),
                      $(".accr").addClass("fa-plus"),
                      $(".section-content").removeAttr("style"),
                      $("#" + t).css("display", "block"),
                      $("#" + s).removeClass("fa-plus"),
                      $("#" + s).addClass("fa-minus"),
                      "video" == o
                          ? ($(".ourwork_feafult").css("display", "none"), $(".our_video-work").css("display", "block"), $(".videosrc-our").attr("src", l))
                          : ($(".our_video-work").css("display", "none"), $(".ourwork_feafult").css("display", "block"), $(".ourwork_feafult").attr("src", l)));
            });
        }),
        setTimeout(function () {
            $(document).find(".tab").addClass("tab_hide");
        }, 3200),
        Modernizr.meter)
    )
        var t = $("#progressbar"),
            s = t.attr("max"),
            i = t.val(),
            o = function () {
                (i += 1),
                    (addValue = t.val(i)),
                    (getop = i / 100) > 0.8 && $(".color-wheel-section-homepagenav").removeAttr("style"),
                    getop > 0.99 && ($(".html5-progress-bar").hide(), $("#MainContent").removeClass("opacity_0")),
                    $(".progress-value").html(i + "%"),
                    i == s && clearInterval(l);
            },
            l = setInterval(function () {
                o();
            }, (500 / s) * 5);
    else alert("Sorry your brower does not support HTML5 progress bar");
    $(".js-hamburgernav").on("click", function () {
        1 == $(".gradient").attr("data-click-state") ? ($(".gradient").attr("data-click-state", 0), $(".gradient").removeAttr("style")) : ($(".gradient").attr("data-click-state", 1), $(".gradient").css("overflow", "hidden"));
    }),
        $("body").on("click", ".btn-search__text", function () {
            1 == $(".search-mobile").attr("data-click-state")
                ? ($(".search-mobile").attr("data-click-state", 0), $(".search-mobile").removeClass("is-active"))
                : ($(".search-mobile").attr("data-click-state", 1), $(".search-mobile").addClass("is-active"));
        }),
        $("body").on("click", ".search-mobile__back", function () {
            1 == $(".search-mobile").attr("data-click-state")
                ? ($(".search-mobile").attr("data-click-state", 0),
                  $(".search-mobile").removeClass("is-active"),
                  setTimeout(function () {
                      $(".gradient").attr("data-click-state", 1), $(".gradient").css("overflow", "hidden");
                  }, 2500))
                : ($(".search-mobile").attr("data-click-state", 1), $(".search-mobile").addClass("is-active"));
        }),
        $(".js-hamburger").click(function () {
            $(this).toggleClass("isactive");
        }),
        $("#openmenunav").click(function () {
            toggleClass(".isactive");
        });
});
