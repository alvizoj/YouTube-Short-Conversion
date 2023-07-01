const SHORTS_URL = "https://www.youtube.com/shorts";

// When user navigates on the same tab, open in a new tab
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (
    changeInfo.status !== "complete" &&
    tab.active &&
    tab.url.startsWith(SHORTS_URL)
  ) {
    const videoId = tab.url.split("/shorts/")[1];
    const redirectURL = `https://www.youtube.com/watch?v=${videoId}`;

    chrome.tabs.goBack();
    chrome.tabs.create({ url: redirectURL });
  }
});

// When user opens in a new tab, redirect that tab
chrome.tabs.onCreated.addListener(function (tab) {
  if (tab?.pendingUrl && tab.pendingUrl.startsWith(SHORTS_URL)) {
    const videoId = tab.pendingUrl.split("/shorts/")[1];
    const redirectURL = `https://www.youtube.com/watch?v=${videoId}`;

    chrome.tabs.update(tab.id, { url: redirectURL });
  }
});
