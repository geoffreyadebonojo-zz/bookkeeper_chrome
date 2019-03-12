console.log("background.js loaded...");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(){
  chrome.tabs.query({'active': true, 'currentWindow': true}, function (tab) {
    var url = tab[0].url;
    console.log(url);
  });
}
