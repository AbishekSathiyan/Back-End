const http = require("http");

const server = http.createServer((req, res) => {
  //console.log(req.url);
  //console.log(req.headers);
  console.log(res.setHeader("Content-Type", "text/html"));

  res.write("<html>");
  res.write("<head> <title>Abishek Test </title></head>");
  res.write("<body>");
  res.write("<h1>Hello World from Node Server</h1>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(4000);
