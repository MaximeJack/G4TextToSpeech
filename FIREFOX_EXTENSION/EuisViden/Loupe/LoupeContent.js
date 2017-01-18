var VARIABLE_GLOBALE = false;

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
            $(this).css("background-color", 'red');
        }
        
    });
});

envoie();
setInterval(envoie, 500);







