const pages = document.getElementsByTagName("section")
const buttons = document.getElementsByTagName("button")


function onClickHandle(event) {
    const id = event.target.innerText

    // loop though pages
    for (let i = 0; i < pages.length; i++) {
        // check if button clicked innerText is equal to the id of the section tag.
        if (id === pages[i].id) {
            // if the button innertext matches the sections id text, make that page visible.
            pages[i].className = "current-page"
        } else {
            // if the button innertext doesn't match the sections id, make that page invisible.
            pages[i].className = "hidden-page"
        }
    }

}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', onClickHandle)
}
