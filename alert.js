let latestHash = '';

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "DATA_UPDATE") {
        if (latestHash !== message.payload) {
            latestHash = message.payload;
            
            document.getElementById('game_hash_input').value = message.payload;
            document.getElementById('game_verify_submit').click();
        }
    }
});