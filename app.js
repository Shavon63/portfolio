const pages = document.getElementsByTagName("section")
const buttons = document.getElementsByTagName("button")


function onClickHandle(event) {
    const pageId = event.target.innerText

    // loop over all the pages
    for (let i = 0; i < pages.length; i++) {
        // check if the page we're currently looping over has an id that matches the clicked button's text
        if (pageId === pages[i].id) {
            // if the page's id matches the clicked button's text, make that page visible.
            pages[i].className = "current-page"
        } else {
            // if the page's id doesn't match the clicked button's text, make that page invisible.
            pages[i].className = "hidden-page"
        }
    }

}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', onClickHandle)
}