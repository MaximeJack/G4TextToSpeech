var ACTIVE_LOUPE = false;

function typeButtonLoupe(bool){
    var d = document.getElementById("btnEiusVidenLoupe");
    if(bool){
        d.className = "btn btn-danger btn-lg";
        d.innerHTML = "désactiver";
        
    }else{
        d.className = "btn btn-success btn-lg";
        d.innerHTML = "activer";
    }
    
}

function activeLoupe(){
    var d = document.getElementById("btnEiusVidenLoupe");

    if(d.className=="btn btn-danger btn-lg"){
        ACTIVE_LOUPE = false;
        d.className = "btn btn-success btn-lg";
        d.innerHTML = "activer";
        chrome.runtime.sendMessage({
            activer: "disable",
            'page':'content'
        }, typeButtonLoupe);
    }else{
        ACTIVE_LOUPE = true;
        d.className = "btn btn-danger btn-lg";
        d.innerHTML = "désactiver";
         chrome.runtime.sendMessage({
            activer: "enable",
            'page':'content'
        }, typeButtonLoupe);
     
    }
 
}


chrome.runtime.sendMessage({
    activer: "show",
    'page':'content'
}, typeButtonLoupe);

$( document ).ready(function() {
    $( "#btnEiusVidenLoupe" ).bind( "click", function() {
        activeLoupe();
    });
});

