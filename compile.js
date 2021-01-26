const minify = require('html-minifier').minify;
const fs     = require('fs');

/** index.html **/
fs.readFile('./src/index.html', 'UTF-8', (err, html) => {
    if (err)
        throw err;

    const css = fs.readFileSync('./src/style.css', 'UTF-8');
    const js  = fs.readFileSync('./src/script.js', 'UTF-8');

    html = html.replace(/<!-- CSS -->/g, '<style>' + css + '</style>');
    html = html.replace(/<!-- JavaScript -->/g, '<script>' + js + '</script>');

    const compiled = minify(html, {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        minifyCSS: true,
        minifyJS: true
    });

    fs.writeFile('./public/index.html', compiled, () => {});
});