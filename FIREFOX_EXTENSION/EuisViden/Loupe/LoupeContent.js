var VARIABLE_GLOBALE = false;

function heheh(i){
   if(typeof i !== 'undefined'){
      VARIABLE_GLOBALE = i;  
      console.log(VARIABLE_GLOBALE);
   }
  
}


chrome.runtime.sendMessage({
    greeting: "disable"
 }, heheh);
 /*
chrome.runtime.onMessage.addListener(function (msg, sender, response) {
    
});
*/

$( document ).ready(function() {
    $('*').bind("mousemove", function(event){
        if(VARIABLE_GLOBALE){
            console.log(event);
            $(this).css("background-color", 'red');
        }
        
     });
});








