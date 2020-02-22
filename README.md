# Blog with Markdown

>展示Markdown的博客形式

>Blog in a new form based on Markdown reader

### Demo

[Example Page](?/blog/example.md)

### Usage

将下面的代码放在要显示Markdown文章的位置.

Put the code below in where you want to show the Markdown article.
```html
    <article class="markdown-body">
    </article>
    <link rel="stylesheet" href="/src/css/github-markdown.css">
    <link rel="stylesheet" href="/src/css/default.min.css">
    <script src="/src/js/highlight.min.js"></script>
    <script src="/src/js/marked.min.js"></script>
    <script src="/src/js/MdBlog.js"></script>
```

### Dependents
- [marked](https://github.com/markedjs/marked)

- [github-markdown.css](https://github.com/sindresorhus/github-markdown-css)

- [highlight.js](https://github.com/highlightjs/highlight.js)