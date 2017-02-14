var AIDE_AJUST = false;

function typeButtonAideAjust(bool){
    var d = document.getElementById("btnEiusVidenAjuste");
    if(bool){
        d.className = "btn btn-danger btn-lg";
        d.innerHTML = "désactiver";

    }else{
        d.className = "btn btn-success btn-lg";
        d.innerHTML = "activer";
    }
}
function activeAjustNav(){
    var d = document.getElementById("btnEiusVidenAjuste");

    if(d.className=="btn btn-danger btn-lg"){
        AIDE_AJUST = false;
        d.className = "btn btn-success btn-lg";
        d.innerHTML = "activer";
        chrome.runtime.sendMessage({
            Ajust: "disable",
            'page':'contentAjsutNav'
        }, typeButtonAideAjust);
    }else{
        AIDE_AJUST = true;
        d.className = "btn btn-danger btn-lg";
        d.innerHTML = "désactiver";
        chrome.runtime.sendMessage({
            Ajust: "enable",
            'page':'contentAjsutNav'
        }, typeButtonAideAjust);
    }
}

chrome.runtime.sendMessage({
    Ajust: "show",
    'page':'contentAjsutNav'
}, typeButtonAideAjust);


$( document ).ready(function() {
    $( "#btnEiusVidenAjuste" ).bind( "click", function() {
        activeAjustNav();
    });
});