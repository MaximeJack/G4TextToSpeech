var VARIABLE_GLOBALE_AIDE_NAV = false;

function setVARIABLE_GLOBALE_AIDE_NAV(i){
   if(typeof i !== 'undefined'){
      VARIABLE_GLOBALE_AUDIO = i;  
   }
  
}


function envoieAideNav(){
    chrome.runtime.sendMessage({
        'page':'contentAideNav'
    }, setVARIABLE_GLOBALE_AIDE_NAV);   
}





envoieAideNav();
setInterval(envoieAideNav, 500);