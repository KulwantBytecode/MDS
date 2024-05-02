// Gift Card Js Start
$(document).on('click','.cus_ad_to_cart',function(event){ 
  event.preventDefault();
  var vid = $("#gift_vid").val();
  $('.gift-spin').removeClass('hide');
    $.ajax({
      type: 'POST',
      url: '/cart/add.js',
      data: {
        quantity: 1,
        id: vid
      },
      dataType: 'json', 
      success: function (data) { 
        $('.gift-spin').addClass('hide');
        loadCart(0);
       } 
     });
});
// Gift Card Js End

// ♈︎♉︎♊︎♋︎♌︎♍︎♎︎♏︎♐︎♑︎♒︎♓︎ 
var regex = new RegExp('^[a-zA-Z0-9.!@*^#=~$#♡&\-]+$');
var clearInvalid;

// Personalise Initials
function isShortMonogram(shortMonogram) {
  if(shortMonogram == 'Airpods' || shortMonogram == 'Sling Bag' || shortMonogram == 'Statement Strap' || shortMonogram == 'Backpacks' || shortMonogram == 'Soft Tote' || shortMonogram == 'Camera Bag' || shortMonogram == 'Sling Bag'  || shortMonogram == 'Mini Tote'  || shortMonogram == 'Apple Watch Band' || shortMonogram == 'shortMonogram' || shortMonogram == 'Crossbody Phone Pouch')
    return true;
  return false;
}

// validateIconMonogram
function validateIconMonogram(monogram,shortMonogram = false) {
      monogram = monogram.replaceAll('@','');
      monogram = monogram.replaceAll('!','');
      monogram = monogram.replaceAll('=','');
      monogram = monogram.replaceAll('-','');
      monogram = monogram.replaceAll('*','');
      monogram = monogram.replaceAll('^','');
      monogram = monogram.replaceAll('$','');
      monogram = monogram.replaceAll('~','');
  if(shortMonogram) {
  monogram =	validateShortMonogram(monogram);
  }
    return monogram;
}

function checkIcons() {
  var text = localStorage.getItem('mdsEngraving');
  if(text != null) {
  for (var position = 0; position < text.length; position++) {
        if (text.charAt(position) == '@') {
          localStorage.setItem('mdsEngraving',localStorage.getItem('mdsEngraving').replaceAll('@',''));
         
        }
        if (text.charAt(position) == '-') {
          localStorage.setItem('mdsEngraving',localStorage.getItem('mdsEngraving').replaceAll('-',''));
         
        }
        if (text.charAt(position) == '~') {
          localStorage.setItem('mdsEngraving',localStorage.getItem('mdsEngraving').replaceAll('~',''));
         
        }
        if (text.charAt(position) == '=') {
          localStorage.setItem('mdsEngraving',localStorage.getItem('mdsEngraving').replaceAll('=',''));
         
        }
        if (text.charAt(position) == '!') {
          localStorage.setItem('mdsEngraving',localStorage.getItem('mdsEngraving').replaceAll('!',''));
         
        }
        if (text.charAt(position) == '^') {
          localStorage.setItem('mdsEngraving',localStorage.getItem('mdsEngraving').replaceAll('^',''));
         
        }
        if (text.charAt(position) == '$') {
          localStorage.setItem('mdsEngraving',localStorage.getItem('mdsEngraving').replaceAll('$',''));
         
        }
        if (text.charAt(position) == '*') {
          localStorage.setItem('mdsEngraving',localStorage.getItem('mdsEngraving').replaceAll('*',''));
         
        }
      }
  }
}
//'@','+


