var VARIABLE_GLOBALE_AIDE_NAV = false;

function setVARIABLE_GLOBALE_AIDE_NAV(i){
   if(typeof i !== 'undefined'){
      VARIABLE_GLOBALE_AIDE_NAV = i;  
   }
  
}

function envoieAideNav(){
    chrome.runtime.sendMessage({
        'page':'contentAideNav'
    }, setVARIABLE_GLOBALE_AIDE_NAV);   
}

function raccourci(){
	document.onkeypress = function(e){
        if(VARIABLE_GLOBALE_AIDE_NAV){
            console.log('xxx');
			// e.preventDefault();
			console.log(e);
			//Retour page suivante
			if (navigator.userAgent.indexOf('OPR')>-1) {//opera
				console.log('opera');

			}else if(navigator.userAgent.indexOf('Safari')>-1){//chrome
				console.log('chrome');
			}else{//mozilla
				console.log('firefox');
				if (e.keyCode == 33) {/*PageUp*/ javascript:history.forward();}
				//Retour page precedente
				if (e.keyCode == 34) {/*PageDown*/ javascript:history.back();}
				//Affiche Prompt 
				if (e.keyCode == 113) {/*F2*/ AffichePrompt();}

				//Selection site suivant
				if(e.keyCode == 38){/*fleche haut*/
					console.log('suiv');
					SelectionSite(1); 
					LireNomSite();
					e.preventDefault();
				}
				//Selection site precedant
				if(e.keyCode == 40){console.log('prec');/*fleche du bas*/SelectionSite(-1); LireNomSite();e.preventDefault();}

					//Valide Selection Site
				if (e.keyCode == 39) {/*fleche de droite*/ValideSite();}
				//lire la selection
				if (e.keyCode == 37) {/*fleche de gauche*/ LireNomSite();}
				
			}
	    }
	}
}

raccourci();

// if(VARIABLE_GLOBALE_AIDE_NAV){
	
// }

envoieAideNav();
setInterval(envoieAideNav, 500);


