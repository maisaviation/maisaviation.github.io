(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js-62').attr('src', (dpi>1) ? 'images/placeholder-560.png' : 'images/placeholder-280.png');
$('.js-63').attr('src', (dpi>1) ? 'images/placeholder-560.png' : 'images/placeholder-280.png');
$('.js-64').attr('src', (dpi>1) ? 'images/placeholder-560.png' : 'images/placeholder-280.png');
$('.js-65').attr('src', (dpi>1) ? 'images/placeholder-560.png' : 'images/placeholder-280.png');}else if($(window).width()>=768){$('.js-62').attr('src', (dpi>1) ? 'images/placeholder-360.png' : 'images/placeholder-180.png');
$('.js-63').attr('src', (dpi>1) ? 'images/placeholder-360.png' : 'images/placeholder-180.png');
$('.js-64').attr('src', (dpi>1) ? 'images/placeholder-360.png' : 'images/placeholder-180.png');
$('.js-65').attr('src', (dpi>1) ? 'images/placeholder-360.png' : 'images/placeholder-180.png');}else if($(window).width()>=480){$('.js-62').attr('src', (dpi>1) ? 'images/placeholder-224.png' : 'images/placeholder-112.png');
$('.js-63').attr('src', (dpi>1) ? 'images/placeholder-224.png' : 'images/placeholder-112.png');
$('.js-64').attr('src', (dpi>1) ? 'images/placeholder-224.png' : 'images/placeholder-112.png');
$('.js-65').attr('src', (dpi>1) ? 'images/placeholder-224.png' : 'images/placeholder-112.png');}else{$('.js-62').attr('src', (dpi>1) ? 'images/placeholder-148.png' : 'images/placeholder-74.png');
$('.js-63').attr('src', (dpi>1) ? 'images/placeholder-148.png' : 'images/placeholder-74.png');
$('.js-64').attr('src', (dpi>1) ? 'images/placeholder-148.png' : 'images/placeholder-74.png');
$('.js-65').attr('src', (dpi>1) ? 'images/placeholder-148.png' : 'images/placeholder-74.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-1')[0]);
var mapOptions = {zoom: 16,center: new google.maps.LatLng(13.1017306, 77.5837356),mapTypeId: google.maps.MapTypeId.TERRAIN,styles: [{featureType:"administrative",stylers:[{visibility:"off"}]},
{featureType:"poi",stylers:[{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"simplified"}]},{featureType:"water",stylers:[{visibility:"simplified"}]},{featureType:"transit",stylers:[{visibility:"simplified"}]},{featureType:"landscape",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{visibility:"off"}]},{featureType:"road.local",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{visibility:"on"}]},
{featureType:"water",stylers:[{color:"#84afa3"},{lightness:52}]},{stylers:[{saturation:-17},{gamma:0.36}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#3f518c"}] }]};var map = new google.maps.Map($('.js-78').get(0), mapOptions);var marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(13.1017306, 77.5837356),});var infowindow = new google.maps.InfoWindow({content: "<div class=\"js-78-label\"><b>Mallya Aditi International School</b><br>Behind NIPCCD building, Yelahanka New Town, Bengaluru, Karnataka 560106</div>",});google.maps.event.addListener(marker, "click", function() {infowindow.open(map, marker);});infowindow.open(map, marker);
});