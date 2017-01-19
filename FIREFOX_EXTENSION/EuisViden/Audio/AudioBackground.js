var AUDIO_ACTIVER = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var typeScript = 'content';
    if(typeof request.audio !== 'undefined'){
        if (request.audio == "enable"){
            AUDIO_ACTIVER = true;
            typeScript = 'pop';
        }else if(request.audio == "disable"){
            AUDIO_ACTIVER = false;
            typeScript = 'pop';
        }else if(request.audio == "show"){
            typeScript = 'pop';
        }
    }
  
    //method popup
    if(typeScript=='content' && request.page=='contentAudio'){
        sendResponse(AUDIO_ACTIVER);
    //method 
    }else if(typeScript=='pop' && request.page=='contentAudio'){
        sendResponse(AUDIO_ACTIVER);
        
    }
});