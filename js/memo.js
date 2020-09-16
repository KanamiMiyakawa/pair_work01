var i = 0;
var image_wrapper = '#image_wrapper';
$(image_wrapper).find('img').eq(0).show();
var total = $(image_wrapper).find('img').index();
setInterval(function(){
  if(i < total){
    $(image_wrapper).find('img').fadeOut(1000);
    i++;
    setTimeout(function(){
      $(slide).find('li').eq(i).fadeIn(1000);
    },1000);
  }else if(i == total){
    $(image_wrapper).find('li').fadeOut(1000);
    i = 0;
    setTimeout(function(){
      $(image_wrapper).find('li').eq(i).fadeIn(1000);
    },1000);
  };
},6000);
