
function getCurrentTabs() {
    return browser.tabs.query({currentWindow: true})
}

getCurrentTabs().then((tabs) => {
    console.log(tabs);
})





