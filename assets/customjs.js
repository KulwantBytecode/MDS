  $(document).ready(function(){
$(".hover_se").mouseover(function(){
    
     var image_src= $(this).attr("data-image");
     var get_parent = $(this).attr("data-parent");
     var get_index = $(this).attr("data-index");
     
     //console.log(image_src);
     if(typeof image_src != 'undefined')
     {
       image_src = image_src;
     }
     else{
       image_src = "";
     }
     $(".set_"+get_parent).css('background-image','url("' + image_src + '")');
     $(".set_"+get_parent).attr('data-focus',get_index);
     
   });
        if (window.matchMedia("(max-width: 767px)").matches)
        {
           $(".hover_se.open_wvt").click(function(event){
             event.preventDefault();
           })
        }
    //CODE START FOR PRODUCT PAGE IMAGE SET
  
    $('select.ctm_product_form_variants option').each(function(){
      var dataText = $(this).attr('data-text');
      var text = $(this).text().trim().toLowerCase();
      var userString = 'sold'

      if (text.indexOf(userString) > -1){
        $('label.color-swatch[data-value="' + dataText + '"]').addClass('disable');
      }else{
        $('label.color-swatch[data-value="' + dataText + '"]').addClass('available');
      }
    });

    
    $('input[name="Color"], input[name="color"]').each(function(){
     var getter_status=$(this).attr('data-status');
      if(getter_status =="checked"){
     var getter_value=value=$(this).attr('data-value');
        
      //var getter_status=$(this).attr('data-status');
       //console.log(getter_value)
        $(".product_image_list_3").each(function(){
          var get_alt= this.alt ;
          var text = getter_value ;
          var position = get_alt.search(text);
          var position_all_life_style = get_alt.search('all life-style');
          //var getmp=  $("this.alt:contains('black-caviar')").attr("data-data-alt");
           //console.log(getmp);
          
          if(position > -1 || position_all_life_style > -1){
            $(this).addClass("hasactive")
            $(this).closest("li.vc_product").removeClass("nactive");
            $(this).closest("li.vc_product").addClass("yactive");
          }
          else{
            $(this).addClass("notactive")
            $(this).closest("li.vc_product").removeClass("yactive");
            $(this).closest("li.vc_product").addClass("nactive");
          }
          
        });
        
       }
    
    });
  
  
  //Option on change 
  
  $('.color-swatch').each(function(){
  	var get_status = $(this).attr("data-status");
    if(get_status == 'checkedx'){
      $(this).closest('.color-swatch-wrap').addClass('colorclickborder');
      var colorVal = $(this).attr('data-color');
      if(colorVal){
        $(this).closest('.color-swatch-wrap').css({
                "border-color": colorVal
        });
      }
    }
  });
  
  $(".color-swatch").click(function () {
    var click_color = $(this).attr("data-color");

    $(".variant_product_description").hide();
    $(".variant_product_description").removeClass('show');
    $(".variant_core_description").hide();
    $(".variant_core_description").removeClass('show');
    
    $(".variant_product_description").each(function(){
    
      var desc_color = $(this).attr('data-color');
      if(desc_color == click_color)
      {
          console.log('desc text', $(this).text());
          if($(this).text().trim().length == 0){
            $(this).hide();
            $(".product_main_description").show();
          }else{
            $(this).show();
            $(".product_main_description").hide();
          }
      }
    });

    $(".variant_core_description").each(function(){
      var desc_color_core = $(this).attr('data-color');

      if(desc_color_core == click_color)
      {
          if($(this).text().trim().length == 0){
            //console.log('core text', $(this).text().trim().length);
            $(this).hide();
            $(".product_main_core_feature").show();
          }else{
            //console.log('core text blank', $(this).text().trim().length);
            $(this).show();
            $(".product_main_core_feature").hide();
          }
      }

      
    });
    
    
    var selected_variant_id = "";
    if($(this).hasClass('available')){

        var gettitle= $(this).attr("data-value");
        console.log('gettitle',gettitle);
        $('#customizer-color_'+gettitle).click();
        var selected_size_val = $('.product-sizes-watch').val();
        //console.log(selected_size_val);
        if(typeof(selected_size_val) != "undefined" || selected_size_val != ''){
          $('#custom_option_hide span').each(function(){
           if($(this).attr('data-title2') == selected_size_val && $(this).attr('data-title') == gettitle){
            selected_variant_id = $(this).attr('data-value');
           }
         });          
        }
        else
        {
           selected_variant_id = $('#custom_option_hide').find('span[data-title="' + gettitle + '"]').data('value');
        }
        
        
        $('.product-form__buttons .cart_add_btn').attr('data-id', selected_variant_id);
        $(".floating_atc_button").attr('data-id', selected_variant_id);

        //$('#product-form-template--15196782985398__main').find('input[name="id"]').val(selected_variant_id);

        $('.js.product-form__input').find('input[data-value="' + gettitle + '"]').attr('checked', 'checked');

        if (gettitle == 'checkedx') {
          $(".color-swatch").attr("data-status"," ");
          $('.color-swatch-wrap').removeClass('colorclickborder');
          $(this).attr("data-status","checkedx");
          $(this).closest('.color-swatch-wrap').addClass('colorclickborder');
          
        }
        else {
          
          $(".color-swatch").attr("data-status"," ");
          $(this).attr("data-status","checkedx");
          $('.color-swatch-wrap').removeClass('colorclickborder');
          $(this).closest('.color-swatch-wrap').addClass('colorclickborder');
          
          $(".product_image_list_3").each(function(){
            var get_alt= this.alt ;
            var text = gettitle ;
            var position = get_alt.search(text);
            var position_all_life_style = get_alt.search('all life-style');
            //console.log(text); 
            //var getmp=  $("this.alt:contains('black-caviar')").attr("data-data-alt");
            //console.log(getmp);

            if(position > -1 || position_all_life_style > -1){
              //$(".product_image_list_3").removeClass("notactive");
              //$(".product_image_list_3").removeClass("notactive");

              $(this).removeClass("notactive");
              $(this).addClass("hasactive");
              $(this).closest("li.vc_product").removeClass("nactive");
              $(this).closest("li.vc_product").addClass("yactive");
            }
            else{
              //$(".product_image_list_3").removeClass("notactive");
              // $(".product_image_list_3").removeClass("hasactive");

              $(this).removeClass("hasactive");
              $(this).addClass("notactive");
              $(this).closest("li.vc_product").removeClass("yactive");
              $(this).closest("li.vc_product").addClass("nactive");
            }

          });
          
          
          
          /////// recommandatio js start
          
          var dataVal = $(this).attr('data-value');
          
          $('.related_image_pys').each(function(){

            var img_src = $(this).find('.related_pys_img[data-alt="'+ dataVal +'"]').attr('data-src');

            var src_len = $(this).find('.related_pys_img[data-alt="'+ dataVal +'"]');
            
            if(src_len.length > 0){
              $(this).closest('.relate_product_grid_pys').find('.related_media_pys img').attr('srcset', img_src);
            }else{
              var img_default_src = $(this).find('.related_pys_img[data-alt="black-caviar"]').attr('data-src');
              $(this).closest('.relate_product_grid_pys').find('.related_media_pys img').attr('srcset', img_default_src);
            }

          });
          
          /////// recommandatio js end
          

        }
    }

    var colorVal = $(this).attr('data-color');
    if(colorVal){
      $(this).closest('.color-swatch-wrap').css({
              "border-color": colorVal
      });
    }
  
  });
  
  
  ////////// added disable in swatechs js


$('.readmore').click(function (event) {
  event.preventDefault();
  var descriptionFull = document.querySelector('.product-description-full');
  descriptionFull.style.display = 'block';
  var descriptionShort = document.querySelector('.product-description-short');
  descriptionShort.style.display = 'none';
});
$('.readless').click(function (event) {
  event.preventDefault();
  var descriptionFull = document.querySelector('.product-description-full');
  descriptionFull.style.display = 'none';
  var descriptionShort = document.querySelector('.product-description-short');
  descriptionShort.style.display = 'block';
});  

      setInterval(function(){
   
     jQuery.getJSON('/cart.js', function(cart) {
   // now have access to Shopify cart object
  var getcartcount= cart.item_count;
    //console.log(getcartcount);
       $(".cart-item-count").text('('+getcartcount+')');
    
    
   } )
    
      },1000);
  
  // CODE FOR SINGLE PRODUCT PAGE SIZE OPTION 
  $('#size_product').change(function() {
  window.location = $(this).val();
})
  // END CODE HERE
  
  // CODE FOR MENU CLOSE BUTTON 
  $(".closeed_wvt").click(function(){
    $(this).closest(".menu_lst").removeClass("focus"); 
//     $(this).closest(".megamenu-panel").css("display","none");
    $(this).closest('.menu_lst').addClass('hide_megamenu');
  });
  
  $('ul.nav-menu li.menu_lst').hover(function(){
    if($(this).hasClass('hide_megamenu')){
    	$(this).removeClass('hide_megamenu');
    }
  });
  


  });
  









