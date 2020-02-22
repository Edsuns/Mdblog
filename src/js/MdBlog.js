var url = window.location.search.substring(1),
    markdown = document.getElementsByClassName("markdown-body")[0],
    s;
if (url == "") {
    markdown.innerHTML = marked(load("/index.md"));
} else {
    document.title = (s = url.match(/.*\/(.*).md/)) ? s[1] : (s = url.match(/(.*).md/)) ? s[1] : document.title;
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