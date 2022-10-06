const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((request, response) => {
    let address = request.url;
    let query = url.parse(address, true);
    if (query.pathname.includes("documentation")) {
      filePath = __dirname + "/documentation.html";
    } else {
      filePath = "index.html";
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        throw err;
      }

      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    });
    const logs = __dirname + "/log.txt";
    fs.appendFile(
      "log.txt",
      `URL: ${address} \n Timestamp: ${new Date()} \n\n`,
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Added to log.");
        }
      }
    );
  })
  .listen(8080);
console.log("My test server is running on Port 8080.");
console.log("http://localhost:8080");
