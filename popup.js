// const storage = []
document.addEventListener('DOMContentLoaded', () => {
    // storage = JSON.stringify(getStorage());
    const volumeRange = document.getElementById('volumeRange')
    const volumeNumeric = document.getElementById('volumeNumeric')
    volumeRange.addEventListener('change', (event) => {
        volume = event.target.value / 100
        volumeNumeric.value = event.target.value
        chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => chrome.tabs.sendMessage(tabs[0].id, { request: 'volume', volume }))
    })
    volumeNumeric.addEventListener('change', (event) => {
        volume = event.target.value / 100
        volumeRange.value = event.target.value
        chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => chrome.tabs.sendMessage(tabs[0].id, { request: 'volume', volume }))
    })
    initialize()
})

function initialize() {
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
        document.getElementById('tabURL').innerHTML = tabs[0].url.subString(0,)
    })

    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { request: 'volume', volume })
    })
}

// function saveStorage(storage) {
//     chrome.storage.setItem('domain-volumen', JSON.stringify(storage))
// }

// function getStorage() {
//     return chrome.storage.getItem('domain-volumen')
// }