function typeButtonAideNav(bool){
    var d = document.getElementById("btnEiusVidenAide");
    if(bool){
        d.className = "btn btn-danger btn-lg";
        d.innerHTML = "désactiver";
        
    }else{
        d.className = "btn btn-success btn-lg";
        d.innerHTML = "activer";
    }
}

function activeAideNav(){
    var d = document.getElementById("btnEiusVidenAide");

    if(d.className=="btn btn-danger btn-lg"){
        ACTIVE_LOUPE = false;
        d.className = "btn btn-success btn-lg";
        d.innerHTML = "activer";
        chrome.runtime.sendMessage({
            AideNav: "disable",
            'page':'contentAideNav'
        }, typeButtonAideNav);
    }else{
        ACTIVE_LOUPE = true;
        d.className = "btn btn-danger btn-lg";
        d.innerHTML = "désactiver";
         chrome.runtime.sendMessage({
            AideNav: "enable",
            'page':'contentAideNav'
        }, typeButtonAideNav);
    }
}

chrome.runtime.sendMessage({
    AideNav: "show",
    'page':'contentAideNav'
}, typeButtonAideNav);

$( document ).ready(function() {
    $( "#btnEiusVidenAide" ).bind( "click", function() {
        activeAideNav();
    });
});