var VARIABLE_GLOBALE = false;

function heheh(i){
    console.log('ddd');
   if(typeof i !== 'undefined'){
      VARIABLE_GLOBALE = i;  
      console.log(VARIABLE_GLOBALE);
   }
  
}


chrome.runtime.sendMessage({
    'type':'global', 
    'page':'content'
    }, heheh);


$( document ).ready(function() {
    $('*').bind("mousemove", function(event){
        if(VARIABLE_GLOBALE){
            console.log(event);
            $(this).css("background-color", 'red');
        }
        
    });
});








