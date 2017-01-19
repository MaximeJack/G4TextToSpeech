/**
 * Created by maxim on 17/01/2017.
 
*/

function speak(text, callback){
    
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

    //bug de lecture sur chrome non resolu
    if (navigator.userAgent.indexOf('chrome')>-1)
        speechSynthesis.cancel();

}

// var elemts = document.body.childNodes;
// var texts = "";
// for (var i = 0; i < elemts.length; i++) {
//     if (elemts[i].nodeName != "SCRIPT" && elemts[i].nodeName != "#text" && elemts[i].nodeName != "INPUT") {
//         texts += elemts[i].textContent;
//         elemts[i].onclick=speak(elemts[i].textContent);
//     }
// }
// console.log(texts);
// speak(texts);


/*
speechSynthesis.cancel()
var u = new SpeechSynthesisUtterance();
u.text = "This text was changed from the original demo.";

var t;
u.onstart = function (event) {
    t = event.timeStamp;
    console.log(t);
};

u.onend = function (event) {
    t = event.timeStamp - t;
    console.log(event.timeStamp);
    console.log((t / 1000) + " seconds");
};

speechSynthesis.speak(u);

*/