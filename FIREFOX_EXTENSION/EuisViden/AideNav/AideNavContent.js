var VARIABLE_GLOBALE_AIDE_NAV = false;
var SINGLETON_INIT_NAV = true;
function setVARIABLE_GLOBALE_AIDE_NAV(i){
   if(typeof i !== 'undefined'){
      VARIABLE_GLOBALE_AIDE_NAV = i;  
   }
  
}
function premierePage(){
	if(SINGLETON_INIT_NAV  && isGoogle()){
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
	document.onkeypress = function(e){
		console.log("key");
		console.log(e.KeyCode);
        if(VARIABLE_GLOBALE_AIDE_NAV){
			//Retour page suivante
			if (navigator.userAgent.indexOf('OPR')>-1) {//opera
				console.log('opera');

			}else if(navigator.userAgent.indexOf('Safari')>-1){//chrome
				console.log('chrome');
				console.log(e);
			}else{//mozilla
				console.log(e.KeyCode);
				if (e.keyCode == 33) {/*PageUp*/ javascript:history.forward();}
				//Retour page precedente
				if (e.keyCode == 34) {/*PageDown*/ javascript:history.back();}
				//Affiche Prompt 
				if (e.keyCode == 113) {/*F2*/ AffichePrompt();}

				//Selection site suivant
				// if(e.keyCode == 38){/*fleche haut*/SelectionSite(1);LireNomSite();
				// }
				//Selection site precedant
				// if(e.keyCode == 40){/*fleche du bas*/SelectionSite(-1); LireNomSite();}

				//Valide Selection Site
				if (e.keyCode == 39) {/*fleche de droite*/
					if(e.ctrlKey){
						ValideSite();
					}else{
						SelectionSite(1);LireNomSite();
					}
					
				}
				//lire la selection
				if (e.keyCode == 37) {/*fleche de gauche*/ }
					if(e.ctrlKey){
						LireNomSite();
					}else{
						SelectionSite(-1); LireNomSite();
					}
				}
			}
	    }
	}

raccourci();
//executionAideNav();
// if(VARIABLE_GLOBALE_AIDE_NAV){
	

envoieAideNav();
setInterval(envoieAideNav, 500);
setInterval(premierePage, 500);


