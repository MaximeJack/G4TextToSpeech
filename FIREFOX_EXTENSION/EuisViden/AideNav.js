/**
 * Created by maxim on 17/01/2017.
 */


//[type=text]
	var x = document.body.getElementsByTagName('input');
	for (var i = 0; i < x.length; i++){
		x[i].textRecherche = "";
		if(x[i].getAttribute('type')=='text' || !x[i].hasAttribute('type'))
		{	
			//pour ecrire
			x[i].onkeypress=function(e){
				console.log(e);
				if (e.keyCode == 0){//charactere
					x[i].textRecherche+=e.key;
				}
				if (e.keyCode == 8 && x[i].textRecherche.length > 0){//backspace
						x[i].textRecherche = x[i].textRecherche.substr(0,x[i].textRecherche.length-1);
				}
				// if(e.keyCode == 35)
				// 	speak(x[i].textRecherche);
			};

			

		}
	}

function talk(obj){
    speak(obj);
}
