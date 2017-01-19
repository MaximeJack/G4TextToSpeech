function typeButtonAudio(bool){
    var d = document.getElementById("btnEiusVidenAudio");
    if(bool){
        d.className = "btn btn-danger btn-lg";
        d.innerHTML = "désactiver";
        
    }else{
        d.className = "btn btn-success btn-lg";
        d.innerHTML = "activer";
    }
    
}


function activeAudio(){
    var d = document.getElementById("btnEiusVidenAudio");

    if(d.className=="btn btn-danger btn-lg"){
        ACTIVE_LOUPE = false;
        d.className = "btn btn-success btn-lg";
        d.innerHTML = "activer";
        chrome.runtime.sendMessage({
            audio: "disable",
            'page':'contentAudio'
        }, typeButtonAudio);
    }else{
        ACTIVE_LOUPE = true;
        d.className = "btn btn-danger btn-lg";
        d.innerHTML = "désactiver";
         chrome.runtime.sendMessage({
            audio: "enable",
            'page':'contentAudio'
        }, typeButtonAudio);
     
    }
 
}

chrome.runtime.sendMessage({
    audio: "show",
    'page':'contentAudio'
}, typeButtonAudio);

$( document ).ready(function() {
    $( "#btnEiusVidenAudio" ).bind( "click", function() {
        activeAudio();
    });
});