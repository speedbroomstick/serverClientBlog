const http = require('http');
const url = require('url');

// Создаем сервер
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  // Устанавливаем статус ответа и заголовки
  res.setHeader('Content-Type', 'text/plain');

  if (path === '/') {
    res.statusCode = 200;
    res.end('Hello, World!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n');
  } else if (path === '/about') {
    res.statusCode = 200;
    res.end('About page\n');
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

// Сервер слушает порт 3000
const port = 3001;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
