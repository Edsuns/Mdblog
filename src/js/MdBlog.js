var url = window.location.search.substring(1),
    markdown = document.getElementsByClassName("markdown-body")[0];
if (url == "") {
    markdown.innerHTML = marked(load("/index.md"));
} else {
    document.title = url.match(/.*\/(.*).md/)[1];
    markdown.innerHTML = marked(load(url));
}
function load(name) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", name, false);
    xhr.overrideMimeType("text/html;charset=utf-8");
    xhr.send(null);
    return xhr.status == 200 ? xhr.responseText : load("/index.md");
}
hljs.initHighlightingOnLoad();