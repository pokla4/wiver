// Wiver - a web diver
console.log("wiver: 'Hello, world!'");

let _select = document.querySelector("#engine_select");
_select.addEventListener("change", (value) => {
    console.log()
})

let _input = document.querySelector("#search_input");
function search() {
    let dest;
    switch (_select.value) {
        case "google":
            dest = `https://www.google.com/search?q=${_input.value}`;
            break;
        case "wiki":
            dest = `https://en.wikipedia.org/w/index.php?title=Special:Search&search=${_input.value}`
            break;
        case "ddg":
            dest = `https://duckduckgo.com/?q=${_input.value}`;
            break;
        default:
            console.error("unknown _select.value: ", _select.value);
            break;
    }
    console.log("Destination: ", dest);
    window.location.href = dest;
};

window.onkeydown = (ev) => {
    if (ev.key == "Escape" && document.activeElement.id != "search_input")
        _input.focus();
    else if (ev.key == "Escape")
        _select.focus();
    else if (ev.key == "Enter" && document.activeElement.id == "search_input")
        search();
    else if (document.activeElement.id == "search_input")
        return;
    if (ev.key == "1") _select.value = "google";
    else if (ev.key == "2") _select.value = "wiki";
    else if (ev.key == "3") _select.value = "ddg";
}

_input.focus();