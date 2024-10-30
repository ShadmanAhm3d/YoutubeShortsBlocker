function isShortsUrl(url) {
  return url.includes('youtube.com/shorts/') || 
         (url.includes('youtube.com') && url.includes('#shorts'));
}

//TODO: Configure it for Instagram,Facebook etc
async function sendMessageToTab(tabId, message) {
  try {
    // First, check if we can connect to the tab
    await chrome.tabs.sendMessage(tabId, { action: "ping" });
    
    // If we reach here, connection is established, send the actual message
    await chrome.tabs.sendMessage(tabId, message);
  } catch (error) {
    // If connection fails, retry after a short delay
    setTimeout(async () => {
      try {
        await chrome.tabs.sendMessage(tabId, message);
      } catch (retryError) {
        console.log("Failed to connect to tab after retry");
      }
    }, 1000); // Wait 1 second before retrying
  }
}

// Listen for tab updates
//TODO: ab update kaise hoga?
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && isShortsUrl(tab.url)) {
    sendMessageToTab(tabId, { action: "showOverlay" });
  }
});

// Listen for navigation state changes (for single-page app navigation)
//TODO: ek listener cahiye yaha jo listen krskate url ko
chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
  if (details.frameId === 0 && isShortsUrl(details.url)) {
    sendMessageToTab(details.tabId, { action: "showOverlay" });
  }
});

