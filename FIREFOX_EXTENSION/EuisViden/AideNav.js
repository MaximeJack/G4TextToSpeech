/**
 * Created by maxim on 17/01/2017.
 */


//[type=text]

window.onload=function(argument) {
	var x = document.body.getElementsByTagName('input');
	console.log("init avant for");
	console.log("val x : ".x.length);
	for (var i = 0; i < x.length; i++) {
		console.log("init");
		x[i].oninput=function(){
			console.log('++');
			talk(x[i].value);
		};
	}

	$('body').load(function(){
		console.log('yolo sa charge');
	});
}

function talk(no){
	console.log('yo');
    speak('lo');
}



