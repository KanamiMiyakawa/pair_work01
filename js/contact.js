$(document).ready(function(){
  const pics = $("#image_wrapper").find('img');
  let picIndex = -1;
  pics.hide();
  function showNextPic(){
    picIndex ++;
    pics.eq(picIndex % pics.length).fadeIn(2000).delay(4000).fadeOut(2000, showNextPic);
  };
  showNextPic();

  $('.fake_button').on('click',function(){
    var val = $('#textarea').val();
    $('#confirm_content').text(val);
    $('.js_modal').fadeIn();
    return false;
  });
  $('.js_modal_close').on('click',function(){
    $('.js_modal').fadeOut();
    return false;
  })

});
