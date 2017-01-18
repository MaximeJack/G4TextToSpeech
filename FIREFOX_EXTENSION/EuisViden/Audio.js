/*
created by maxim
*/
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

var elemts = document.getElementsByTagName("BODY").childNodes;
console.log(elemts);
for (var i=0;i<texts.length;i++){
    texts[i].onclick=function(){
        speak(this.textContent);
    };
}
