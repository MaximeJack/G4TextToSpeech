var AJUST_ACTIVER = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var typeScript = 'content';
    if(typeof request.Ajust !== 'undefined'){
        if (request.Ajust == "enable"){
            AJUST_ACTIVER = true;
            typeScript = 'pop';
        }else if(request.Ajust == "disable"){
            AJUST_ACTIVER = false;
            typeScript = 'pop';
        }else if(request.Ajust == "show"){
            typeScript = 'pop';
        }
    }

    //method popup
    if(typeScript=='content' && request.page=='contentAjsutNav'){
        sendResponse(AJUST_ACTIVER);
        console.log('ça marche');
        //method
    }else if(typeScript=='pop' && request.page=='contentAjsutNav'){
        sendResponse(AJUST_ACTIVER);

    }
});