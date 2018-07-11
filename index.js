const express = require('express'),
      app = express(),
      template = require('./views/template'),
      path = require('path');

app.use('/assets', express.static(path.resolve(__dirname, 'assets')))
app.use('/media', express.static(path.resolve(__dirname, 'media')))

app.disable('x-powered-by');
app.listen(process.env.PORT || 3001);

const ssr = require('./views/server');

app.get('/', (req, res) => {
  const { content, context } = ssr(req);
  const response = template('Server Rendered Page', content);
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  if(content.url) {
    res.writeHead(302, { Location: context.url });
    res.end();
  } else {
    res.send(response);
  }
});

app.get('/client', (req, res) => {
  let response = template('Client Side Rendered page')
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});

app.get('/exit', (req, res) => {
  if(process.env.PORT) {
    res.send("Sorry, the server denies your request")
  } else {
    res.send("shutting down")
    process.exit(0)
  }
});