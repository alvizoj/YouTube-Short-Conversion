chrome.tabs.onUpdated.addListener(function(changeInfo, tab) {
    const currentURL = tab?.url ?? null;
    if (!currentURL) return;

    if (currentURL.startsWith('https://www.youtube.com/shorts')) {
        const videoId = currentURL.split("/shorts/")[1];
        const redirectURL = `https://www.youtube.com/watch?v=${videoId}`;
        chrome.tabs.update({url: redirectURL})
    }
    
})
