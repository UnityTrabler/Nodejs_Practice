var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("demofile1.html", function (err, data) {
      res.write(data);
      fs.readFile("demofile1.html", function (err, data) {
        res.write(data);
        res.end();
      });
    });
  })
  .listen(3000);

  var http = require("http");
var fs = require("fs/promises");

http.createServer(async function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    const data = await fs.readFile("demofile1.html");
    res.write(data);
    const data2 = await fs.readFile("demofile1.html");
    res.write(data2);
    res.end();
  })
  .listen(3000);