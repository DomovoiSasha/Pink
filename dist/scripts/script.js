$(function(){
  var burgerBtn = $('.main-menu__btn-burger');
  var burger = $('#burger');
  var crossBtn = $('.main-menu__btn-cross');
  var cross = $('#cross');
  var menuItem = $('.main-menu__item');
  var header = $('.header-head');
  var logo = $('.logo');
  var review1 = $('.review__item:first-child'); 
  var review2 = $('.review__item:nth-child(2)');
  var review3 = $('.review__item:last-child');
  var reviewLabel1 = $('#rewiew1-label');
  var reviewLabel2 = $('#rewiew2-label');
  var reviewLabel3 = $('#rewiew3-label');
  var priceLabel1 = $('#price1-label');
  var priceLabel2 = $('#price2-label');
  var priceLabel3 = $('#price3-label');
  var price = $('.price-table');
  var nextBtn = $('.review-next');
  var prewBtn = $('.review-prew');
  var reviews = $('.review__item');
  
  
  $(burgerBtn).bind({
    mouseenter: function(){
      $(burger).css({"fill": "#d22856",
                                  "transition":"1s ease"});
    },
    mouseleave: function(){
      $(burger).css({"fill": "#ffffff",
                                  "transition":"1s ease"});
    },
    click: function(){
      $(this).css({"display":"none",
                            "transition":"1s ease"});
      $(crossBtn).css({"display":"block",
                                      "transition":"1s ease"});
      $(menuItem).css({"display":"block",
                                        "transition":"3s"});
      $(header).css({"background-color":"#283645",
                                  "border-bottom":"1px solid  #000",
                                  "transition":"ease"});
    }
  });
  
  $(crossBtn).bind({
    mouseenter: function(){
      $(cross).css({"fill": "#d22856",
                              "transition":"ease"});
    },
    mouseleave: function(){
      $(cross).css({"fill": "#ffffff",
                              "transition":"ease"});
    },
    click: function(){
      $(this).css({"display":"none",
                            "transition":"ease"});
      $(burgerBtn).css({"display":"block",
                                        "transition":"ease"});
      $(menuItem).css({"display":"none",
                                        "transition":"3s"});
      $(header).css({"background-color":"rgba(0,0,0,0.4)",
                                  "border-bottom":"none",
                                  "transition":"ease"});
    }
  });
  
  $(menuItem).bind({
    mouseenter: function(){
      $(cross).css({"color": "#d22856",
                               "transition":"ease"});
    },
    mouseleave: function(){
      $(cross).css({"color": "#ffffff",
                               "transition":"ease"});
    },
    mousedown: function(){
      $(this).css({"color":"rgba(210,40,86,0.3)",
                            "transition":"ease"});
    },
    mouseup: function(){
      $(this).css({"color":"#d22856",
                            "transition":"ease"});
    }
  }); 

  $(reviewLabel1).click(function(){
    if  ($('#review1').prop('checked')) {} else {
      $(review1).css({"display":"block",
                                              "transition":"ease"});
      $(review2).css({"display":"none",
                                              "transition":"ease"});
      $(review3).css({"display":"none",
                                              "transition":"ease"});
    }
  });
  
  $(reviewLabel2).click(function(){
    if  ($('#review2').prop('checked')) {} else {
      $(review1).css({"display":"none",
                                              "transition":"ease"});
      $(review2).css({"display":"block",
                                              "transition":"ease"});
      $(review3).css({"display":"none",
                                              "transition":"ease"});
    }
  });
  
  $(reviewLabel3).click(function(){
    if  ($('#review3').prop('checked')) {} else {
      $(review1).css({"display":"none",
                                              "transition":"ease"});
      $(review2).css({"display":"none",
                                              "transition":"ease"});
      $(review3).css({"display":"block",
                                              "transition":"ease"});
    }
  });
  
  $(priceLabel1).click(function(){
    if  ($('#row1').prop('checked')) {} else {
      $(price).css({"left":"-82.5vw",
                               "transition":"0.5s ease"});
    }
  });
  
  $(priceLabel2).click(function(){
    if  ($('#row2').prop('checked')) {} else {
      $(price).css({"left":"-170vw",
                               "transition":"0.5s ease"});
    }
  });
  
  $(priceLabel3).click(function(){
    if  ($('#row3').prop('checked')) {} else {
      $(price).css({"left":"-257.5vw",
                               "transition":"0.5s ease"});
    }
  });
  
  $(nextBtn).bind({
    click: function(){
      if ($(reviews).eq(0).is(':visible')){
        $(reviews).eq(0).css({'display':'none',
                                                'transition':'ease'});
        $(reviews).eq(1).css({'display':'block',
                             'transition':'ease'});
      } else if ($(reviews).eq(1).is(':visible')){
          $(reviews).eq(1).css({'display':'none',
                               'transition':'ease'});
          $(reviews).eq(2).css({'display':'block',
                               'transition':'ease'});
        } else if ($(reviews).eq(2).is(':visible')){
            $(reviews).eq(2).css({'display':'none',
                                 'transition':'ease'});
            $(reviews).eq(0).css({'display':'block',
                                 'transition':'ease'});
          }
    }
  });
  
  $(prewBtn).bind({
    click: function(){
      if ($(reviews).eq(0).is(':visible')){
        $(reviews).eq(0).css({'display':'none',
                                                'transition':'ease'});
        $(reviews).eq(2).css({'display':'block',
                             'transition':'ease'});
      } else if ($(reviews).eq(1).is(':visible')){
          $(reviews).eq(1).css({'display':'none',
                               'transition':'ease'});
          $(reviews).eq(0).css({'display':'block',
                               'transition':'ease'});
        } else if ($(reviews).eq(2).is(':visible')){
            $(reviews).eq(2).css({'display':'none',
                                 'transition':'ease'});
            $(reviews).eq(1).css({'display':'block',
                                 'transition':'ease'});
          }
    }
  });
  
  $(reviews).eq(1).bind({
    click: function(){
//      alert("review");
    }
  });
  
});
