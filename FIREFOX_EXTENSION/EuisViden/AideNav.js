/**
 * Created by maxim on 17/01/2017.
 
*/


var IndexSelectionSite = -1;
var tabResultRechecheNom = new Array();
var tabResultRechecheURL = new Array();


var IsGoogle =window.location.href.indexOf("://www.google.")>-1;
var IsFisrtPage = (window.location.href.indexOf("#q=") < 0) && (window.location.href.indexOf("?q=") < 0);

raccourci();

console.log(IsGoogle + " : " +IsFisrtPage );

if (IsGoogle && IsFisrtPage) {
	AffichePrompt();

}
if (IsGoogle && !IsFisrtPage) {
	StopSpeak();
	speak('Pour lancer une nouvelle recherche appuyer sur F2');
	GetRes();
}

function raccourci() {

	document.onkeypress = function(e){
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

function AffichePrompt(){
	StopSpeak();
	speak("Recherche google !");
	var rech = prompt('Recherche sur Google ?');
	//console.log(rech);
	if(rech != "" && rech != null){
		StopSpeak();
		speak("Votre recherche est : " + rech +". Entrer pour valider ou echap pour quitter");
		if(confirm('Confirmer ?')){
			window.location.href = 'https://www.google.com/search?q='+rech;
		}
	}else{
		StopSpeak();
		speak("Modifier votre recherche ? Appuyer sur Entrer pour valider ou echap pour quitter");
		if(confirm('Confirmer ?')){
			AffichePrompt();		
		}
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
		StopSpeak();
		console.log(tabResultRechecheURL[IndexSelectionSite]);
		speak("Site : " + tabResultRechecheNom[IndexSelectionSite]);
	}
}

function ValideSite(argument){
	if (IndexSelectionSite > -1) {
		StopSpeak();
		speak("Aller sur  : " + tabResultRechecheNom[IndexSelectionSite]+" Entrer pour valider ou echap pour quitter.");
		if (confirm('Confirmer ?'))
			window.location.href = tabResultRechecheURL[IndexSelectionSite];
	}
}

function GetRes(argument){
	//var res = document.body.getElementsByName('cite');
	var res = document.body.getElementsByClassName('r');

	//console.log(res.length);
	for (var i = 0; i < res.length; i++){
		tabResultRechecheNom[i] = res[i].textContent;
		tabResultRechecheURL[i] = res[i].firstChild.getAttribute('href');
	}
	IndexSelectionSite = 0;
	console.log(tabResultRechecheURL);
}