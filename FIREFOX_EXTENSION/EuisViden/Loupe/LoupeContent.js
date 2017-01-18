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



$( document ).ready(function() {
    $('*').bind("mousemove", function(event){
        if(VARIABLE_GLOBALE){
           var url = 'http://placehold.it/150x150';
           if ($('.CURSOR_ZOOM_EXTENSION').length == 0){
                $('body').changeCursor( url );
            }else{
                $('.CURSOR_ZOOM_EXTENSION').css('display', 'block');
            }
        }else{
            $('.CURSOR_ZOOM_EXTENSION').css('display', 'none');
            //var url = 'http://placehold.it/150x150';
           //$('body').changeCursor( url, false);
        }
        
    });
});

envoie();
setInterval(envoie, 500);







