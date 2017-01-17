chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "enable"){
        alert('active');
    }else if(request.greeting == "disable"){
        alert('activessss');
    }
      
});