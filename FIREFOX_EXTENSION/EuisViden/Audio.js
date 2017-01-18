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

var elemts = document.body.childNodes;
var texts = "";
for (var i = 0; i < elemts.length; i++) {
    if (elemts[i].nodeName != "SCRIPT" && elemts[i].nodeName != "#text" && elemts[i].nodeName != "INPUT") {
        console.log(elemts[i]);
        texts += elemts[i].textContent;
        elemts[i].onclick=speak(elemts[i].textContent);
    }
}
console.log(texts);
speak(texts);
