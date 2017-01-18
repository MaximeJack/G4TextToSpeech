var LOUPE_ACTIVER = false;
var OBJET = {'content':null};
/*
 * METHODE POUR CHROME
 */
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var typeScript = 'content';
    if(typeof request.activer !== 'undefined'){
        if (request.activer == "enable"){
            LOUPE_ACTIVER = true;
            typeScript = 'pop';
        }else if(request.activer == "disable"){
            LOUPE_ACTIVER = false;  
            typeScript = 'pop';
        }else if(request.activer == "show"){
            typeScript = 'pop';
        }
    }
    
    //method popup
    if(typeScript=='content'){
        sendResponse(LOUPE_ACTIVER);
    //method 
    }else if(typeScript=='pop'){
        sendResponse(LOUPE_ACTIVER);
        
    }
    
});

