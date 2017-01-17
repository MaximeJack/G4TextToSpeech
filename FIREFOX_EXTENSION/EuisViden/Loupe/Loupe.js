var ACTIVE_LOUPE = false;

function typeButtonLoupe(bool){
    var d = document.getElementById("btnEiusVidenLoupe");
    if(typeof i !== 'undefined'){
        if(bool){
            d.className = "btn btn-success";
            d.innerHTML = "activÃ©s";
        }else{
            d.className = "btn btn-danger";
            d.innerHTML = "dÃ©sactivÃ©s";
        }
    }
}

function activeLoupe(){
    var d = document.getElementById("btnEiusVidenLoupe");

    if(ACTIVE_LOUPE){
        ACTIVE_LOUPE = false;
        d.className = "btn btn-success";
        d.innerHTML = "activÃ©s";
        chrome.runtime.sendMessage({
            activer: "disable",
            
        }, typeButtonLoupe);
    }else{
        ACTIVE_LOUPE = true;
        d.className = "btn btn-danger";
        d.innerHTML = "dÃ©sactivÃ©s";
         chrome.runtime.sendMessage({
            activer: "enable"
        }, typeButtonLoupe);
     
    }
 
}
chrome.runtime.sendMessage({
            activer: "show"
        }, typeButtonLoupe);

$( document ).ready(function() {
    $( "#btnEiusVidenLoupe" ).bind( "click", function() {
        activeLoupe();
    });
});

