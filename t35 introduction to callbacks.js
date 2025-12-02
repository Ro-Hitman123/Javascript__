// Callbacks is a function passed into another function as an argument, which is then invoked inside the outer function to complete an action.

function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {
        console.log("Script loaded successfully.");
        callback();
    }
    document.body.appendChild(script);
}

function Hey() {
    alert("Hey, What's up?");
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js", Hey);