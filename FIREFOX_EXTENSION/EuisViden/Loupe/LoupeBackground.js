var LOUPE_ACTIVER = false;
/*
 * METHODE POUR CHROME
 */
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var typeScript = 'content';
    if (request.activer == "enable"){
        LOUPE_ACTIVER = true;
        typeScript = 'pop';
    }else if(request.activer == "disable"){
        LOUPE_ACTIVER = false;  
        typeScript = 'pop';
    }else if(request.activer == "show"){
        typeScript = 'pop';
    }
    
    
    
    if(typeScript=='content'){
        sendResponse(LOUPE_ACTIVER); 
    }else if(typeScript=='pop'){
        sendResponse(LOUPE_ACTIVER); 
    }
    
});

