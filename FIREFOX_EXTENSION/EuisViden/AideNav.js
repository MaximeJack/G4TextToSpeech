/**
 * Created by maxim on 17/01/2017.
 
*/


var IndexSelectionSite = -1;
var tabResultRechecheNom = new Array();
var tabResultRechecheURL = new Array();


var IsGoogle =window.location.href.indexOf("://www.google.")>-1;
var IsFisrtPage = (window.location.href.indexOf("#q=") < 0) && (window.location.href.indexOf("?q=") < 0);



console.log(IsGoogle + " : " +IsFisrtPage );

if (IsGoogle && IsFisrtPage) {
	AffichePrompt();

}
if (IsGoogle && !IsFisrtPage) {
	StopSpeak();
	speak('Pour lancer une nouvelle recherche appuyer sur F2');
	GetRes();
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