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
        if(VARIABLE_GLOBALE_AUDIO){

                var target = $(event.target);
                var texts = target.clone()    //clone the element
                .children() //select all the children
                .remove()   //remove all the children
                .end()  //again go back to selected element
                .text();    //get the text of element
                var textsArray = 'abcdefghijklz';
                var textsArray = texts.match(/.{1,200}/g);
                console.log(textsArray);
                for(var i=0;i<textsArray.length;i++){
                    speak(textsArray[i]);
                }
                
                
                //event.stopPropagation()
        }
        console.log(VARIABLE_GLOBALE_AUDIO);
        //event.stopPropagation();
    });
});

envoieAudio();
setInterval(envoieAudio, 500);