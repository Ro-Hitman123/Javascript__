let a = document.getElementsByTagName('div')[0]
a.innerHTML = a.innerHTML + '<h1>Hello World!<h1>'
let div = document.createElement('div')
div.innerHTML = '<h2>Hi World</h2>'
a.appendChild(div)
// a.prependChild(div) -> Insert at the beginning of node
// a.before(div) -> Insert before node
// a.after(div) -> Insert after node
// a.replaceWith(div) -> replaces node with the given node