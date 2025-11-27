// Callbacks are the functions is a function passed into another function as an argument, which is then invoked inside the outer function to complete an action.

function loadScript(src) {
    var script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js");