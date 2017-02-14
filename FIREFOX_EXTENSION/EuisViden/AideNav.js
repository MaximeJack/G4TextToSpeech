/**
 * Created by maxim on 17/01/2017.
 
*/
var GLOBALE_INDEX_RECHECHE = -1;
var GLOBALE_TAB_RECHERCHE_NOM = new Array();
var GLOBALE_TAB_RECHERCHE_URL = new Array();


function isGoogle(){
	var IsGoogle =window.location.href.indexOf("://www.google.")>-1;
	var bool = false;
	if(IsGoogle) {
		bool = true;
	}
	return bool;
}

function executionAideNav() {
	/*Initilisation*/

	var IsGoogle = window.location.href.indexOf("://www.google.")>-1;
	var IsFisrtPage = (window.location.href.indexOf("#q=") < 0) && (window.location.href.indexOf("?q=") < 0);

	if (IsGoogle && IsFisrtPage) {
		AffichePrompt();

	}
	if (IsGoogle && !IsFisrtPage) {
		stopSpeak();
		speak('Pour lancer une nouvelle recherche appuyer sur F2');
		GetRes();
	}
	/*Fin de l'init*/
 }


/* Debut Traitement */
	function AffichePrompt(){
		stopSpeak();
		speak("Recherche google !");
		var rech = prompt('Recherche sur Google ?');
		//console.log(rech);
		if(rech != "" && rech != null){
			stopSpeak();
			speak("Votre recherche est : " + rech +". Entrer pour valider ou echap pour quitter");
			if(confirm('Confirmer ?')){
				window.location.href = 'https://www.google.com/search?q='+rech;
			}
		}else{
			stopSpeak();
			speak("Modifier votre recherche ? Appuyer sur Entrer pour valider ou echap pour quitter");
			if(confirm('Confirmer ?')){
				AffichePrompt();		
			}
		}
	}

	function SelectionSite(val) {
		console.log(val+' - '+GLOBALE_TAB_RECHERCHE_URL.length);
		GLOBALE_INDEX_RECHECHE+=val;
		if (GLOBALE_INDEX_RECHECHE > GLOBALE_TAB_RECHERCHE_URL.length-1){
				GLOBALE_INDEX_RECHECHE = 0;
			}
		if (GLOBALE_INDEX_RECHECHE < 0){
				GLOBALE_INDEX_RECHECHE = GLOBALE_TAB_RECHERCHE_URL.length-1;
			}
	}

	function LireNomSite(argument) {
		if (GLOBALE_INDEX_RECHECHE > -1) {
			stopSpeak();
			console.log(GLOBALE_TAB_RECHERCHE_URL[GLOBALE_INDEX_RECHECHE]);
			speak("Site : " + GLOBALE_TAB_RECHERCHE_NOM[GLOBALE_INDEX_RECHECHE]);
		}
	}

	function ValideSite(argument){
		if (GLOBALE_INDEX_RECHECHE > -1) {
			stopSpeak();
			speak("Aller sur  : " + GLOBALE_TAB_RECHERCHE_NOM[GLOBALE_INDEX_RECHECHE]+" Entrer pour valider ou echap pour quitter.");
			if (confirm('Confirmer ?'))
				window.location.href = GLOBALE_TAB_RECHERCHE_URL[GLOBALE_INDEX_RECHECHE];
		}
	}

	function GetRes(argument){
		//var res = document.body.getElementsByName('cite');
		var res = document.body.getElementsByClassName('r');

		//console.log(res.length);
		for (var i = 0; i < res.length; i++){
			GLOBALE_TAB_RECHERCHE_NOM[i] = res[i].textContent;
			GLOBALE_TAB_RECHERCHE_URL[i] = res[i].firstChild.getAttribute('href');
		}
		GLOBALE_INDEX_RECHECHE = 0;
		console.log(GLOBALE_TAB_RECHERCHE_URL);
	}
/* Fin Traitement */
