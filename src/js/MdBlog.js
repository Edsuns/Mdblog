/**
 * MdBlog
 * Copyright (c) 2020, Edsuns. (MIT Licensed)
 * https://github.com/Edsuns/Mdblog
 */
var url = window.location.search.substring(1),
    markdown = document.getElementsByClassName("markdown-body")[0],
    index = "index.md",
    s;
url[0] == "/" || url[0] == "\\" ? url = url.substring(1) : 0;
if (url == "") {
    markdown.innerHTML = marked(load(index));
} else {
    document.title = (s = url.match(/(.*\/)(.*).md/)) ? (rootDir = decodeURI(s[1]), decodeURI(s[2])) : (s = url.match(/(.*).md/)) ? decodeURI(s[1]) : document.title;
    markdown.innerHTML = marked(load(url));
}
function load(name) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", name, false);
    xhr.overrideMimeType("text/html;charset=utf-8");
    xhr.send(null);
    return xhr.status == 200 ? xhr.responseText : name == index ? "# `404` ~~index.md~~" : load(index);
}
hljs.initHighlightingOnLoad();