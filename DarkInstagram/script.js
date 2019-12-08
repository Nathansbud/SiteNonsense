dark_hex = "#323639"

link_text = "white"
username = "nathansbud"

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && window.location.href.includes("instagram.com")) {
        document.styleSheets[0].insertRule(`a[href$="${username}/"] {color: white!important;}`, 0)
        document.styleSheets[0].insertRule(`a {color: white!important;}`, 0)
        document.styleSheets[0].insertRule(`header {background: darkgray!important;}`, 0)
        document.styleSheets[0].insertRule(`nav {background: darkgray!important;}`, 0)
    
        document.styleSheets[0].insertRule(`article {background: darkgray!important;}`, 0)
        back = document.getElementsByTagName("main")[0]
        back.style.background = dark_hex
    }
})

