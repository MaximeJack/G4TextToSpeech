/**
 * Created by maxim on 17/01/2017.
 
*/

AideNav();
raccourci();

var IndexSelectionSite = -1;
var tabResultRechecheNom = new Array();
var tabResultRechecheURL = new Array();


var IsGoogle =window.location.href.indexOf("://www.google.fr/")>-1;
var IsFisrtPage = (window.location.href.indexOf("#q=") < 0) && (window.location.href.indexOf("?q=") < 0);

console.log(IsGoogle + " : " +IsFisrtPage );

if (IsGoogle && IsFisrtPage) {
	AffichePrompt();
}
if (IsGoogle && !IsFisrtPage) {
	speak('Pour lancer une nouvelle recherche appuyer sur F2');
	GetRes();
}

function AffichePrompt(){
	speak("Recherche google !");
	var rech = prompt('Recherche sur Google ?');
	console.log(rech);
	if(rech != "" && rech != null){
		speak("Votre recherche est : " + rech);
		speak("Entrer pour valider ou echap pour quitter");
		var verif = confirm('Confirmer ?');

		if(verif){
			window.location.href = 'https://www.google.fr/search?q='+rech;
		}
	}else{
		speak("Modifier votre recherche ? Appuyer sur Entrer pour valider ou echap pour quitter")
		var verif = confirm('Confirmer ?');
		if(verif){
			AffichePrompt();		
		}
	}
}


function raccourci() {
	document.onkeypress = function(e){
		console.log(e);
		//Retour page suivante
		if (e.keyCode == 33) {/*PageUp*/ javascript:history.forward();}
		//Retour page precedente
		if (e.keyCode == 34) {/*PageDown*/ javascript:history.back();}
		//Affiche Prompt 
		if (e.keyCode == 113) {/*F2*/ AffichePrompt();}
		//Selection site suivant
		if (e.keyCode == 113) {/*fleche du bas*/ LireNomSite();}
		//Selection site precedant
		if (e.keyCode == 113) {/*fleche du bas*/ LireNomSite();}
		//Valide Selection Site
		if (e.keyCode == 113) {/*F2*/ ValideSite();}
	}
}

function LireNomSite(argument) {
	if (IndexSelectionSite > -1) {
		speak("Site : " + tabResultRechecheNom[IndexSelectionSite]);
	}
}

function ValideSite(argument){
	if (IndexSelectionSite > -1) {
		speak("Aller sur  : " + tabResultRechecheNom[IndexSelectionSite]);
		speak("Entrer pour valider ou echap pour quitter");
		window.location.href = tabResultRechecheURL[IndexSelectionSite];
	}
}


function GetRes(argument){
	//var res = document.body.getElementsByName('cite');
	var res = document.body.getElementsByClassName('r');

	console.log(res.length);
	for (var i = 0; i < res.length; i++){
		tabResultRechecheNom[i] = res[i].textContent;
		tabResultRechecheURL[i] = res[i].firstChild.getAttribute('href');
	}


	IndexSelectionSite = 0;
	console.log(tabResultRechecheURL);
}


function talk(obj){
    speak(obj);
}
