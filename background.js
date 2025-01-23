chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed.');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "DATA_SCRAPED") {
        console.log("Data received in background script:", message.payload);

        chrome.tabs.query({ url: "file:///*" }, (tabs) => {
            if (tabs.length > 0) {
                chrome.tabs.sendMessage(tabs[0].id, {
                    type: "DATA_UPDATE",
                    payload: message.payload
                });
            }
        });

        sendResponse({ success: true });
    }
});