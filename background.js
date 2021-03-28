console.log("background.js loaded...");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(){
  chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
  }, function (tabs) {
    var tab = tabs[0];

    let data = {
      "title": tab.title, 
      "url": tab.url,
      "completed": false,
      "editing": false
    }
    fetch('http://localhost:5000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  })
}
