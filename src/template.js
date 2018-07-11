function template(
  title,
  content = ''
) {
  let scripts = '';
  if (content) {
    scripts = `<script src="assets/client.js"></script>`;
  } else {
    scripts = `<script src="assets/bundle.js"></script>`;
  }
  let page = `
  <!doctype html>
  <html>
  <head>
  <meta charset="utf-8"/>
  <title>${title}</title>
  </head>
  <body>
    <div id="app">${content}</div>
    ${scripts}
  </body>
  </html>
  `;
  return page;
}

module.exports = template;