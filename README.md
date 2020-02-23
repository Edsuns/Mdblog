# Blog with Markdown

>展示Markdown的博客形式

>Blog in a new form based on Markdown reader

### Demo

[Example Page](https://edsuns.github.io/Mdblog/)

## Usage

### Html

Put the code below in where you want to show the article

```html
    <article class="markdown-body">
    </article>
    <link rel="stylesheet" href="src/css/github-markdown.css">
    <link rel="stylesheet" href="src/css/github.css">
    <script src="src/js/highlight.min.js"></script>
    <script src="src/js/marked.min.js"></script>
    <script src="src/js/MdBlog.js"></script>
```

### Link

Add "?" before the location

_e.g._
```
/dir/test.md
```
_Markdown link_
```
[md](?dir/test.md)
```
>Not "?/dir/test.md"

### Catalog

Use index.md as catalog

_e.g._

```
[目录 Catalog](?blog/index.md)
```

[目录 Catalog](?blog/index.md)

## Dependents
- [marked](https://github.com/markedjs/marked)

- [github-markdown.css](https://github.com/sindresorhus/github-markdown-css)

- [highlight.js](https://github.com/highlightjs/highlight.js)