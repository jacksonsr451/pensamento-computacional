$(() => {
    $('.pages').load("./pages/default-content.html")   
})

function new_page(src) {
    $('.pages').load(`./pages/${src}.html`);
}
