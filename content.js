const currentURL = window?.location?.href ?? null;

if (currentURL.startsWith('https://www.youtube.com/shorts')) {
    const videoId = currentURL.split("/shorts/")[1];
    const redirectURL = `https://www.youtube.com/watch?v=${videoId}`;
    window.location.href = redirectURL;
}