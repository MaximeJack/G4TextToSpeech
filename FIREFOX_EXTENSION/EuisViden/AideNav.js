/**
 * Created by maxim on 17/01/2017.
 
*/

var IndexSelectionSite = -1;
var tabResultRechecheNom = new Array();
var tabResultRechecheURL = new Array();


var IsGoogle =window.location.href.indexOf("://www.google.fr/")>-1;
var IsFisrtPage = (window.location.href.indexOf("#q=") < 0) && (window.location.href.indexOf("?q=") < 0);

raccourci();

console.log(IsGoogle + " : " +IsFisrtPage );

if (IsGoogle && IsFisrtPage) {
	AffichePrompt();
}
if (IsGoogle && !IsFisrtPage) {
	speak('Pour lancer une nouvelle recherche appuyer sur F2');
	GetRes();
	AfficheRES();
}

function AffichePrompt(){
	speak("Recherche google !");
	var rech = prompt('Recherche sur Google ?');
	console.log(rech);
	if(rech != "" && rech != null){
		speak("Votre recherche est : " + rech +"Entrer pour valider ou echap pour quitter");
		var verif = confirm('Confirmer ?');

		if(verif){
			window.location.href = 'https://www.google.fr/search?q='+rech;
		}
	}else{
		speak("Modifier votre recherche ? Appuyer sur Entrer pour valider ou echap pour quitter")
		if(confirm('Confirmer ?')){
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
		if (e.keyCode == 40) {/*fleche du bas*/SelectionSite(1); LireNomSite();}
		//Selection site precedant
		if (e.keyCode == 38) {/*fleche du haut*/SelectionSite(-1); LireNomSite();}
		//Valide Selection Site
		if (e.keyCode == 39) {/*F2*/ ValideSite();}
	}
}

function SelectionSite(val) {
	console.log(val+' - '+tabResultRechecheURL.length);
	IndexSelectionSite+=val;
	if (IndexSelectionSite > tabResultRechecheURL.length-1){
			IndexSelectionSite = 0;
		}
	if (IndexSelectionSite < 0){
			IndexSelectionSite = tabResultRechecheURL.length-1;
		}
}

function LireNomSite(argument) {
	if (IndexSelectionSite > -1) {
		console.log(tabResultRechecheURL[IndexSelectionSite]);
		speak("Site : " + tabResultRechecheNom[IndexSelectionSite]);
	}
}

function ValideSite(argument){
	if (IndexSelectionSite > -1) {
		speak("Aller sur  : " + tabResultRechecheNom[IndexSelectionSite]+"Entrer pour valider ou echap pour quitter");
		if (confirm('Confirmer ?'))
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
	LireNomSite();
	console.log(tabResultRechecheURL);
}