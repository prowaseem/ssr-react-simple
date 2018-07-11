'use strict';

function template(title) {
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var scripts = '';
  if (content) {
    scripts = '<script src="assets/client.js"></script>';
  } else {
    scripts = '<script src="assets/bundle.js"></script>';
  }
  var page = '\n  <!doctype html>\n  <html>\n  <head>\n  <meta charset="utf-8"/>\n  <title>' + title + '</title>\n  </head>\n  <body>\n    <div id="app">' + content + '</div>\n    ' + scripts + '\n  </body>\n  </html>\n  ';
  return page;
}

module.exports = template;