console.log("bg.js");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(){

  chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
    var url = tabs;
    console.log(url);
  });

}
