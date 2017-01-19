var VARIABLE_GLOBALE = false;
var ZOOM = null;
function heheh(i){
    
   if(typeof i !== 'undefined'){
      VARIABLE_GLOBALE = i;  
   }
  
}

function envoie(){
  chrome.runtime.sendMessage({
    'type':'global', 
    'page':'content'
    }, heheh);  
}

function removeClassZoom(){
    $('*').removeClass('zoom-extension');
    $('*').children().removeClass('zoom-extension-child');
}


$( document ).ready(function() {
  
    $('*:last-child').bind("mousemove", function(event){
        if(VARIABLE_GLOBALE){
           removeClassZoom();
           var target = $(event.target);
           if(target.is( ":input" ) || target.is( "p" )  || target.is( "cite" ) || target.is( "a" ) || target.is( "span" ) || target.is('pre') || target.is( "img" )){
               target.addClass('zoom-extension');
               target.children().addClass('zoom-extension-child');
           }
           console.log(target.prop("tagName"));
        }else{
            removeClassZoom()
        }
        
    });
});




envoie();
setInterval(envoie, 500);







