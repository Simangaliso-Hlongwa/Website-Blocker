const blockedHostsTextArea = document.querySelector("#blocked-hosts");

//checking the time range with the current time
const moment = require('moment');
let startTime = document.getElementById("start_time");
let endTime = document.getElementById("end_time");
let currentTime = moment();

if (currentTime.isBetween(startTime, endTime)){ // trying some wacky stuff here, syntax is probably wrong 
// Store the currently selected settings using browser.storage.local.
function storeSettings() {
  let blockedHosts = blockedHostsTextArea.value.split("\n");
  browser.storage.local.set({
    blockedHosts
  });
}

// Update the options UI with the settings values retrieved from storage,
// or the default settings if the stored settings are empty.
function updateUI(restoredSettings) {
  blockedHostsTextArea.value = restoredSettings.blockedHosts.join("\n");
}

function onError(e) {
  console.error(e);
}

// On opening the options page, fetch stored settings and update the UI with them.
browser.storage.local.get().then(updateUI, onError);

// Whenever the contents of the textarea changes, save the new values
blockedHostsTextArea.addEventListener("change", storeSettings);

}