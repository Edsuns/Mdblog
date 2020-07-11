/**
 * MdBlog
 * Copyright (c) 2020, Edsuns. (MIT Licensed)
 * https://github.com/Edsuns/Mdblog
 */
var contentUrl = window.location.search.substring(1),
    markdown = document.getElementsByClassName("markdown-body")[0],
    index = "index.md",
    s;
while (contentUrl.startsWith("/") || contentUrl.startsWith("\\")) {
    contentUrl = contentUrl.substring(1);
}
if (contentUrl.length > 0 && (s = /(.*?)([^\/]*?)(.md)?$/.exec(contentUrl))) {
    mdDir = s[1];
    document.title = decodeURI(s[2]);
    s[3] == undefined ? contentUrl += ".md" : 0;
} else {
    contentUrl = index;
}
markdown.innerHTML = marked(load(contentUrl));
function load(name) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", name, false);
    xhr.overrideMimeType("text/html;charset=utf-8");
    xhr.send(null);
    return xhr.status == 200 ? xhr.responseText : name == index ? "# `404` ~~index.md~~" : load(index);
}
