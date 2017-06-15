(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){var a='data-src'; if($('.js').hasAttr('src')) { a='src'; } $('.js').attr(a, (dpi>1) ? 'images/mallya-aditi-international-school-bangalore-250.jpg' : 'images/mallya-aditi-international-school-bangalore-125.jpg');
var a='data-src'; if($('.js-2 .slider-for .slide0').hasAttr('src')) { a='src'; } $('.js-2 .slider-for .slide0').attr(a, (dpi>1) ? 'images/slide1-1140.jpeg' : 'images/slide1-570.jpeg');
$('.js-2 .slider-nav .slide0').attr('src', (dpi>1) ? 'images/thumb-slide1-292.jpeg' : 'images/thumb-slide1-146.jpeg');
var a='data-src'; if($('.js-2 .slider-for .slide1').hasAttr('src')) { a='src'; } $('.js-2 .slider-for .slide1').attr(a, (dpi>1) ? 'images/slide2-1140.jpeg' : 'images/slide2-570.jpeg');
$('.js-2 .slider-nav .slide1').attr('src', (dpi>1) ? 'images/thumb-slide2-292.jpeg' : 'images/thumb-slide2-146.jpeg');
var a='data-src'; if($('.js-2 .slider-for .slide2').hasAttr('src')) { a='src'; } $('.js-2 .slider-for .slide2').attr(a, (dpi>1) ? 'images/slide3-1140.jpeg' : 'images/slide3-570.jpeg');
$('.js-2 .slider-nav .slide2').attr('src', (dpi>1) ? 'images/thumb-slide3-292.jpeg' : 'images/thumb-slide3-146.jpeg');
var a='data-src'; if($('.js-2 .slider-for .slide3').hasAttr('src')) { a='src'; } $('.js-2 .slider-for .slide3').attr(a, (dpi>1) ? 'images/slide4-1140.jpeg' : 'images/slide4-570.jpeg');
$('.js-2 .slider-nav .slide3').attr('src', (dpi>1) ? 'images/thumb-slide4-292.jpeg' : 'images/thumb-slide4-146.jpeg');
var a='data-src'; if($('.js-2 .slider-for .slide4').hasAttr('src')) { a='src'; } $('.js-2 .slider-for .slide4').attr(a, (dpi>1) ? 'images/slide5-1140.jpeg' : 'images/slide5-570.jpeg');
$('.js-2 .slider-nav .slide4').attr('src', (dpi>1) ? 'images/thumb-slide5-292.jpeg' : 'images/thumb-slide5-146.jpeg');
var a='data-src'; if($('.js-2 .slider-for .slide5').hasAttr('src')) { a='src'; } $('.js-2 .slider-for .slide5').attr(a, (dpi>1) ? 'images/slide6-1140.jpeg' : 'images/slide6-570.jpeg');
$('.js-2 .slider-nav .slide5').attr('src', (dpi>1) ? 'images/thumb-slide6-292.jpeg' : 'images/thumb-slide6-146.jpeg');}else if($(window).width()>=768){var a='data-src'; if($('.js').hasAttr('src')) { a='src'; } $('.js').attr(a, (dpi>1) ? 'images/mallya-aditi-international-school-bangalore-160.jpg' : 'images/mallya-aditi-international-school-bangalore-80.jpg');
var a='data-src'; if($('.js-2 .slider-for .slide0').hasAttr('src')) { a='src'; } $('.js-2 .slider-for .slide0').attr(a, (dpi>1) ? 'images/slide1-728.jpeg' : 'images/slide1-364.jpeg');
$('.js-2 .slider-nav .slide0').attr('src', (dpi>1) ? 'images/thumb-slide1-156.jpeg' : 'images/thumb-slide1-78.jpeg');
var a='data-src'; if($('.js-2 .slider-for .slide1').hasAttr('src')) { a='src'; } $('.js-2 .slider-for .slide1').attr(a, (dpi>1) ? 'images/slide2-728.jpeg' : 'images/slide2-364.jpeg');
$('.js-2 .slider-nav .slide1').attr('src', (dpi>1) ? 'images/thumb-slide2-156.jpeg' : 'images/thumb-slide2-78.jpeg');
var a='data-src'; if($('.js-2 .slider-for .slide2').hasAttr('src')) { a='src'; } $('.js-2 .slider-for .slide2').attr(a, (dpi>1) ? 'images/slide3-728.jpeg' : 'images/slide3-364.jpeg');
$('.js-2 .slider-nav .slide2').attr('src', (dpi>1) ? 'images/thumb-slide3-156.jpeg' : 'images/thumb-slide3-78.jpeg');
var a='data-src'; if($('.js-2 .slider-for .slide3').hasAttr('src')) { a='src'; } $('.js-2 .slider-for .slide3').attr(a, (dpi>1) ? 'images/slide4-728.jpeg' : 'images/slide4-364.jpeg');
$('.js-2 .slider-nav .slide3').attr('src', (dpi>1) ? 'images/thumb-slide4-156.jpeg' : 'images/thumb-slide4-78.jpeg');
var a='data-src'; if($('.js-2 .slider-for .slide4').hasAttr('src')) { a='src'; } $('.js-2 .slider-for .slide4').attr(a, (dpi>1) ? 'images/slide5-728.jpeg' : 'images/slide5-364.jpeg');
$('.js-2 .slider-nav .slide4').attr('src', (dpi>1) ? 'images/thumb-slide5-156.jpeg' : 'images/thumb-slide5-78.jpeg');
var a='data-src'; if($('.js-2 .slider-for .slide5').hasAttr('src')) { a='src'; } $('.js-2 .slider-for .slide5').attr(a, (dpi>1) ? 'images/slide6-728.jpeg' : 'images/slide6-364.jpeg');
$('.js-2 .slider-nav .slide5').attr('src', (dpi>1) ? 'images/thumb-slide6-156.jpeg' : 'images/thumb-slide6-78.jpeg');}else if($(window).width()>=480){var a='data-src'; if($('.js').hasAttr('src')) { a='src'; } $('.js').attr(a, (dpi>1) ? 'images/mallya-aditi-international-school-bangalore-100.jpg' : 'images/mallya-aditi-international-school-bangalore-50.jpg');
var a='data-src'; if($('.js-2 .slider-for .slide0').hasAttr('src')) { a='src'; } $('.js-2 .slider-for .slide0').attr(a, (dpi>1) ? 'images/slide1-454.jpeg' : 'images/slide1-227.jpeg');
$('.js-2 .slider-nav .slide0').attr('src', (dpi>1) ? 'images/thumb-slide1-64.jpeg' : 'images/thumb-slide1-32.jpeg');
var a='data-src'; if($('.js-2 .slider-for .slide1').hasAttr('src')) { a='src'; } $('.js-2 .slider-for .slide1').attr(a, (dpi>1) ? 'images/slide2-454.jpeg' : 'images/slide2-227.jpeg');
$('.js-2 .slider-nav .slide1').attr('src', (dpi>1) ? 'images/thumb-slide2-64.jpeg' : 'images/thumb-slide2-32.jpeg');
var a='data-src'; if($('.js-2 .slider-for .slide2').hasAttr('src')) { a='src'; } $('.js-2 .slider-for .slide2').attr(a, (dpi>1) ? 'images/slide3-454.jpeg' : 'images/slide3-227.jpeg');
$('.js-2 .slider-nav .slide2').attr('src', (dpi>1) ? 'images/thumb-slide3-64.jpeg' : 'images/thumb-slide3-32.jpeg');
var a='data-src'; if($('.js-2 .slider-for .slide3').hasAttr('src')) { a='src'; } $('.js-2 .slider-for .slide3').attr(a, (dpi>1) ? 'images/slide4-454.jpeg' : 'images/slide4-227.jpeg');
$('.js-2 .slider-nav .slide3').attr('src', (dpi>1) ? 'images/thumb-slide4-64.jpeg' : 'images/thumb-slide4-32.jpeg');
var a='data-src'; if($('.js-2 .slider-for .slide4').hasAttr('src')) { a='src'; } $('.js-2 .slider-for .slide4').attr(a, (dpi>1) ? 'images/slide5-454.jpeg' : 'images/slide5-227.jpeg');
$('.js-2 .slider-nav .slide4').attr('src', (dpi>1) ? 'images/thumb-slide5-64.jpeg' : 'images/thumb-slide5-32.jpeg');
var a='data-src'; if($('.js-2 .slider-for .slide5').hasAttr('src')) { a='src'; } $('.js-2 .slider-for .slide5').attr(a, (dpi>1) ? 'images/slide6-454.jpeg' : 'images/slide6-227.jpeg');
$('.js-2 .slider-nav .slide5').attr('src', (dpi>1) ? 'images/thumb-slide6-64.jpeg' : 'images/thumb-slide6-32.jpeg');}else{var a='data-src'; if($('.js').hasAttr('src')) { a='src'; } $('.js').attr(a, (dpi>1) ? 'images/mallya-aditi-international-school-bangalore-68.jpg' : 'images/mallya-aditi-international-school-bangalore-34.jpg');
var a='data-src'; if($('.js-2 .slider-for .slide0').hasAttr('src')) { a='src'; } $('.js-2 .slider-for .slide0').attr(a, (dpi>1) ? 'images/slide1-302.jpeg' : 'images/slide1-151.jpeg');
$('.js-2 .slider-nav .slide0').attr('src', (dpi>1) ? 'images/thumb-slide1-14.jpeg' : 'images/thumb-slide1-7.jpeg');
var a='data-src'; if($('.js-2 .slider-for .slide1').hasAttr('src')) { a='src'; } $('.js-2 .slider-for .slide1').attr(a, (dpi>1) ? 'images/slide2-302.jpeg' : 'images/slide2-151.jpeg');
$('.js-2 .slider-nav .slide1').attr('src', (dpi>1) ? 'images/thumb-slide2-14.jpeg' : 'images/thumb-slide2-7.jpeg');
var a='data-src'; if($('.js-2 .slider-for .slide2').hasAttr('src')) { a='src'; } $('.js-2 .slider-for .slide2').attr(a, (dpi>1) ? 'images/slide3-302.jpeg' : 'images/slide3-151.jpeg');
$('.js-2 .slider-nav .slide2').attr('src', (dpi>1) ? 'images/thumb-slide3-14.jpeg' : 'images/thumb-slide3-7.jpeg');
var a='data-src'; if($('.js-2 .slider-for .slide3').hasAttr('src')) { a='src'; } $('.js-2 .slider-for .slide3').attr(a, (dpi>1) ? 'images/slide4-302.jpeg' : 'images/slide4-151.jpeg');
$('.js-2 .slider-nav .slide3').attr('src', (dpi>1) ? 'images/thumb-slide4-14.jpeg' : 'images/thumb-slide4-7.jpeg');
var a='data-src'; if($('.js-2 .slider-for .slide4').hasAttr('src')) { a='src'; } $('.js-2 .slider-for .slide4').attr(a, (dpi>1) ? 'images/slide5-302.jpeg' : 'images/slide5-151.jpeg');
$('.js-2 .slider-nav .slide4').attr('src', (dpi>1) ? 'images/thumb-slide5-14.jpeg' : 'images/thumb-slide5-7.jpeg');
var a='data-src'; if($('.js-2 .slider-for .slide5').hasAttr('src')) { a='src'; } $('.js-2 .slider-for .slide5').attr(a, (dpi>1) ? 'images/slide6-302.jpeg' : 'images/slide6-151.jpeg');
$('.js-2 .slider-nav .slide5').attr('src', (dpi>1) ? 'images/thumb-slide6-14.jpeg' : 'images/thumb-slide6-7.jpeg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-1')[0]);
$('.js').unveil(50);
$('.js-9 source').unveil(50);
$('.js-2 .slider-for').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,arrows: false,fade: true,infinite: true,asNavFor: '.js-2 .slider-nav',});$('.js-2 .slider-nav').slick({slidesToShow: 3,slidesToScroll: 1,asNavFor: '.js-2 .slider-for',centerMode: true,focusOnSelect: true,dots: true,arrows: true,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2500});var wl = new woolite();
wl.init();
wl.addAnimation($('.js')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});