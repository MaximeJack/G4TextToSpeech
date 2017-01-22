/*
 * $("strong")
        .clone()    //clone the element
        .children() //select all the children
        .remove()   //remove all the children
        .end()  //again go back to selected element
        .text();    //get the text of element
 */

var VARIABLE_GLOBALE_AUDIO = false;

function setVARIABLE_GLOBALE_AUDIO(i){
    
   if(typeof i !== 'undefined'){
      VARIABLE_GLOBALE_AUDIO = i;  
   }
  
}

function envoieAudio(){
    chrome.runtime.sendMessage({
        'page':'contentAudio'
    }, setVARIABLE_GLOBALE_AUDIO);   
}


function explode(){
    
}

$( document ).ready(function() {
    $(document).bind("click", function(event){
        audioModule(event)
    });
    $(document).on('contextmenu', function(event){
        audioModule(event)
    });
});
function audioModule(event){
    if(VARIABLE_GLOBALE_AUDIO){
            
            if(event.which == 3){
                event.preventDefault();
            var target = $(event.target);
            if(!target.is( ".btn, .btn-default" )){
                
                var texts = target.clone()    //clone the element
                .children() //select all the children
                //.remove()   //remove all the children
                .end()  //again go back to selected element
                .text();    //get the text of element
               
                var textsArray = texts.match(/.{1,200}/g);
                console.log(textsArray);
                
                for(var i=0;i<textsArray.length;i++){
                   speak(textsArray[i]);
                    
                }
                
            }
            console.log(VARIABLE_GLOBALE_AUDIO);
        }
        
    }
}

envoieAudio();
setInterval(envoieAudio, 500);