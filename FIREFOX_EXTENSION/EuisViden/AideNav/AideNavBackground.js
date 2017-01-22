var AIDE_NAV_ACTIVER = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var typeScript = 'content';
    if(typeof request.AideNav !== 'undefined'){
        if (request.AideNav == "enable"){
            AIDE_NAV_ACTIVER = true;
            typeScript = 'pop';
        }else if(request.AideNav == "disable"){
            AIDE_NAV_ACTIVER = false;
            typeScript = 'pop';
        }else if(request.AideNav == "show"){
            typeScript = 'pop';
        }
    }
  
    //method popup
    if(typeScript=='content' && request.page=='contentAideNav'){
        sendResponse(AIDE_NAV_ACTIVER);
    //method 
    }else if(typeScript=='pop' && request.page=='contentAideNav'){
        sendResponse(AIDE_NAV_ACTIVER);
        
    }
});