var VARIABLE_GLOBALE_AJUST = false;


function setVARIABLE_GLOBALE_AJUST(i){
    if(typeof i !== 'undefined'){
        VARIABLE_GLOBALE_AJUST = i;
    }

}
function envoieAjust(){
    chrome.runtime.sendMessage({
        'page':'contentAjsutNav'
    }, setVARIABLE_GLOBALE_AJUST);
}




function ajust(){

    $( document ).ready(function() {
        if(VARIABLE_GLOBALE_AJUST){
            ajuste_css();

        }else{
            remove_ajuste_css();
        }
    });
}


setInterval(envoieAjust, 500);
setInterval(ajust, 500);