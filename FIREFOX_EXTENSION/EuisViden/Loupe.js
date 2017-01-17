var ACTIVE_LOUPE = false;


function activeLoupe(){
    var d = document.getElementById("btnEiusVidenLoupe");

    if(ACTIVE_LOUPE){
        ACTIVE_LOUPE = false;
        d.className = "btn btn-success";
        d.innerHTML = "activÃ©s";
        chrome.runtime.sendMessage({
            greeting: "disable"
        });
    }else{
        ACTIVE_LOUPE = true;
        d.className = "btn btn-danger";
        d.innerHTML = "dÃ©sactivÃ©s";
        chrome.runtime.sendMessage({
            greeting: "enable"
        });
    }
    console.log('yyy');
}

$( document ).ready(function() {
    $( "#btnEiusVidenLoupe" ).bind( "click", function() {
        activeLoupe();
    });
});

