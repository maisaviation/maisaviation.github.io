(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js-10').attr('src', 'images/berneq-570.png');
$('.js-11').attr('src', 'images/volumerateofflow-450.jpeg');
$('.js-13').attr('src', (dpi>1) ? 'images/lesson_03_control_surfaces-928.png' : 'images/lesson_03_control_surfaces-464.png');
$('.js-14').attr('src', (dpi>1) ? 'images/conn-912.png' : 'images/conn-456.png');
$('.js-15').attr('src', (dpi>1) ? 'images/78768-4-550.jpg' : 'images/78768-4-275.jpg');
$('.js-16').attr('src', (dpi>1) ? 'images/conn-908.png' : 'images/conn-454.png');
$('.js-17').attr('src', (dpi>1) ? 'images/connecting-556.png' : 'images/connecting-278.png');
$('.js-18').attr('src', (dpi>1) ? 'images/conn-912.png' : 'images/conn-456.png');
$('.js-19').attr('src', 'images/futaba-receiver-servo-layout-419.jpg');
$('.js-20').attr('src', (dpi>1) ? 'images/conn-908.png' : 'images/conn-454.png');
$('.js-21').attr('src', (dpi>1) ? 'images/conn-912.png' : 'images/conn-456.png');
$('.js-22').attr('src', (dpi>1) ? 'images/conn-912.png' : 'images/conn-456.png');}else if($(window).width()>=768){$('.js-10').attr('src', 'images/berneq-368.png');
$('.js-11').attr('src', (dpi>1) ? 'images/volumerateofflow-256.jpeg' : 'images/volumerateofflow-128.jpeg');
$('.js-13').attr('src', (dpi>1) ? 'images/lesson_03_control_surfaces-256.png' : 'images/lesson_03_control_surfaces-128.png');
$('.js-14').attr('src', (dpi>1) ? 'images/conn-256.png' : 'images/conn-128.png');
$('.js-15').attr('src', (dpi>1) ? 'images/78768-4-192.jpg' : 'images/78768-4-96.jpg');
$('.js-16').attr('src', (dpi>1) ? 'images/conn-256.png' : 'images/conn-128.png');
$('.js-17').attr('src', (dpi>1) ? 'images/connecting-194.png' : 'images/connecting-97.png');
$('.js-18').attr('src', (dpi>1) ? 'images/conn-256.png' : 'images/conn-128.png');
$('.js-19').attr('src', (dpi>1) ? 'images/futaba-receiver-servo-layout-256.jpg' : 'images/futaba-receiver-servo-layout-128.jpg');
$('.js-20').attr('src', (dpi>1) ? 'images/conn-256.png' : 'images/conn-128.png');
$('.js-21').attr('src', (dpi>1) ? 'images/conn-256.png' : 'images/conn-128.png');
$('.js-22').attr('src', (dpi>1) ? 'images/conn-256.png' : 'images/conn-128.png');}else if($(window).width()>=480){$('.js-10').attr('src', (dpi>1) ? 'images/berneq-460.png' : 'images/berneq-230.png');
$('.js-11').attr('src', (dpi>1) ? 'images/volumerateofflow-160.jpeg' : 'images/volumerateofflow-80.jpeg');
$('.js-13').attr('src', (dpi>1) ? 'images/lesson_03_control_surfaces-160.png' : 'images/lesson_03_control_surfaces-80.png');
$('.js-14').attr('src', (dpi>1) ? 'images/conn-160.png' : 'images/conn-80.png');
$('.js-15').attr('src', (dpi>1) ? 'images/78768-4-120.jpg' : 'images/78768-4-60.jpg');
$('.js-16').attr('src', (dpi>1) ? 'images/conn-160.png' : 'images/conn-80.png');
$('.js-17').attr('src', (dpi>1) ? 'images/connecting-120.png' : 'images/connecting-60.png');
$('.js-18').attr('src', (dpi>1) ? 'images/conn-160.png' : 'images/conn-80.png');
$('.js-19').attr('src', (dpi>1) ? 'images/futaba-receiver-servo-layout-160.jpg' : 'images/futaba-receiver-servo-layout-80.jpg');
$('.js-20').attr('src', (dpi>1) ? 'images/conn-160.png' : 'images/conn-80.png');
$('.js-21').attr('src', (dpi>1) ? 'images/conn-160.png' : 'images/conn-80.png');
$('.js-22').attr('src', (dpi>1) ? 'images/conn-160.png' : 'images/conn-80.png');}else{$('.js-10').attr('src', (dpi>1) ? 'images/berneq-308.png' : 'images/berneq-154.png');
$('.js-11').attr('src', (dpi>1) ? 'images/volumerateofflow-108.jpeg' : 'images/volumerateofflow-54.jpeg');
$('.js-13').attr('src', (dpi>1) ? 'images/lesson_03_control_surfaces-108.png' : 'images/lesson_03_control_surfaces-54.png');
$('.js-14').attr('src', (dpi>1) ? 'images/conn-108.png' : 'images/conn-54.png');
$('.js-15').attr('src', (dpi>1) ? 'images/78768-4-80.jpg' : 'images/78768-4-40.jpg');
$('.js-16').attr('src', (dpi>1) ? 'images/conn-108.png' : 'images/conn-54.png');
$('.js-17').attr('src', (dpi>1) ? 'images/connecting-80.png' : 'images/connecting-40.png');
$('.js-18').attr('src', (dpi>1) ? 'images/conn-108.png' : 'images/conn-54.png');
$('.js-19').attr('src', (dpi>1) ? 'images/futaba-receiver-servo-layout-108.jpg' : 'images/futaba-receiver-servo-layout-54.jpg');
$('.js-20').attr('src', (dpi>1) ? 'images/conn-108.png' : 'images/conn-54.png');
$('.js-21').attr('src', (dpi>1) ? 'images/conn-108.png' : 'images/conn-54.png');
$('.js-22').attr('src', (dpi>1) ? 'images/conn-108.png' : 'images/conn-54.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-1')[0]);

});