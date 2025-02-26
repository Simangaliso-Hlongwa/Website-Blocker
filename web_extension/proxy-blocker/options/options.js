const blockedHostsTextArea = document.querySelector("#blocked-hosts");

function CheckAndBlock(){
//checking the time range with the current time
  const moment = require('moment');
  let startTime = moment(document.getElementById("start_time").value, "HH:mm");
  let endTime = moment(document.getElementById("end_time").value, "HH:mm");  //document.getElementById == only gets the element and not the value!!!
  let currentTime = moment();

  if (currentTime.isBetween.moment(start_time, end_time)){
    console.log("Blocking Websites....")
  
// trying some wacky stuff here, syntax is probably wrong 
// Store the currently selected settings using browser.storage.local.
  function storeSettings() {
    let blockedHosts = blockedHostsTextArea.value.split("\n");
    browser.storage.local.set({ blockedHosts });
  }

// Update the options UI with the settings values retrieved from storage,
// or the default settings if the stored settings are empty.
  function updateUI(restoredSettings) {
    if (restoredSettings.blockedHosts){
      blockedHostsTextArea.value = restoredSettings.blockedHosts.join("\n");
    }
  }

  function onError(e) {
   console.error(e);
  }

// On opening the options page, fetch stored settings and update the UI with them.
  browser.storage.local.get().then(updateUI, onError);

// Whenever the contents of the textarea changes, save the new values
  blockedHostsTextArea.addEventListener("change", storeSettings);
  
}
  else {
    console.log("Time is outside the blocking range. Websites are now accessible");
    broswer.storage.local.set({ blockedHosts: [] });   //clearing the blocked websites
  }
}
//triggerting the event listeners when the user inputs times
document.getElementById("start_time").addEventListener("change", CheckAndBlock);
document.getElementById("end_time").addEventListener("change", CheckAndBlock);