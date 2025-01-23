setInterval(() => {
    const elementData = document.querySelectorAll('tr:nth-of-type(1) td.text-right');

    if (elementData.length > 0) {
        if(elementData[0].innerText.length > 15) {
            chrome.runtime.sendMessage({ type: "DATA_SCRAPED", payload: elementData[0].innerText }, (res) => {
                console.log("Response Data: ", res);
            });
        }
    }
}, 7 * 1000);