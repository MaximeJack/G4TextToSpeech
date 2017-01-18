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
    var x;
    var y;
    $('*:last-child').bind("mousemove", function(event){
        if(VARIABLE_GLOBALE){
           $('*').removeClass('zoom-extension');
           var target = $(event.target);
           if(target.is( ":input" ) || target.is( "p" ) || target.is( "a" ) || target.is( "span" ) || target.is('pre') || target.is( "img" )){
               target.addClass('zoom-extension');
           }
           console.log(target.prop("tagName"));
        }else{
            $('*').removeClass('zoom-extension');
        }
        
    });
    /*
    $('*').bind("click", function(event){
        if(VARIABLE_GLOBALE){
            html2canvas(document.body, {
                
                onrendered: function(canvas) {

                     $(".CURSOR_ZOOM_EXTENSION").text('');
                    $(".CURSOR_ZOOM_EXTENSION").append(canvas)
                            .css({
                                'background-position':x+'px'+y+'px',
                                'display':'none'
                            });
                    // Clean up 
                    //document.body.removeChild(canvas);
                }
            });
        }
    });
    */
});




envoie();
setInterval(envoie, 500);







