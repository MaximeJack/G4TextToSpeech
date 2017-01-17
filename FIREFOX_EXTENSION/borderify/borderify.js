/*
Just draw a border round the document.body.
*/
document.body.style.border = "5px solid red";
document.body.addEventListener("click", yolo);
document.body.addEventListener("load", yolo);


function yolo (argument) {
	var body = document.body;
	speak('lis moi ça maggueule');
}


function speak(text, callback) {
    var u = new SpeechSynthesisUtterance();
    u.text = text;
    u.lang ='fr-FR';
 
    u.onend = function () {
        if (callback) {
            callback();
        }
    };
    u.onerror = function (e) {
        if (callback) {
            callback(e);
        }
    };
    speechSynthesis.speak(u);
}
