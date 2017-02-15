var VARIABLE_GLOBALE_AIDE_NAV = false;
var SINGLETON_INIT_NAV = true;
function setVARIABLE_GLOBALE_AIDE_NAV(i){
   if(typeof i !== 'undefined'){
      VARIABLE_GLOBALE_AIDE_NAV = i;  
   }
  
}
function premierePage(){
	if(VARIABLE_GLOBALE_AIDE_NAV && SINGLETON_INIT_NAV  && isGoogle()){
  		SINGLETON_INIT_NAV = false;
  		executionAideNav();
  	}
}
function envoieAideNav(){
    chrome.runtime.sendMessage({
        'page':'contentAideNav'
    }, setVARIABLE_GLOBALE_AIDE_NAV);   
}

function raccourci(){
	document.addEventListener('keydown', (event) => {
	  if(VARIABLE_GLOBALE_AIDE_NAV){
			//Retour page suivante
				if (event.keyCode == 33) {/*PageUp*/ javascript:history.forward();}
				//Retour page precedente
				if (event.keyCode == 34) {/*PageDown*/ javascript:history.back();}
				//Affiche Prompt 
				if (event.keyCode == 113) {/*F2*/ AffichePrompt();}

				//Valide Selection Site
				if (event.keyCode == 39) {/*fleche de droite*/
					if(event.ctrlKey){
						ValideSite();
					}else{
						SelectionSite(1); LireNomSite();
					}
				}
				//lire la selection
				if (event.keyCode == 37) {/*fleche de gauche*/ 
					if(event.ctrlKey){
						LireNomSite();
					}else{
						SelectionSite(-1); LireNomSite();
					}
				}
			event.preventDefault();
	    }
	});
	// document.onkeypress = function(e){
 //        }
}

raccourci();
//executionAideNav();
// if(VARIABLE_GLOBALE_AIDE_NAV){
	
setInterval(envoieAideNav, 500);
setInterval(premierePage, 500);


