//const http = require("http");
//const fs = require("fs");
//const path = require("path");

//const PORT = 3000;

//const server = http.createServer((req, res) => {
//	console.log("Server request");

//  res.setHeader("Content-type", "text/html");

//  const creatPath = page => path.resolve(__dirname, "views", `${page}.html`);

//  let basePath = "";

//  switch (req.url) {
//    case "/":
//    case "/home":
//    case "/index.html":
//      basePath = creatPath("index");
//      res.statusCode = 200;
//      break;
//    case "/about-us":
//      res.statusCode = 301;
//      res.setHeader("Location", "/contacts");
//      res.end();
//      break;
//    case "/contacts":
//      basePath = creatPath("contacts");
//      res.statusCode = 200;
//      break;
//    default:
//      basePath = creatPath("error");
//      res.statusCode = 404;
//      break;
//  }

//  fs.readFile(basePath, (error, data) => {
//    if (error) {
//      console.log(error);
//      res.statusCode = 500;
//      res.end();
//    } else {
//      res.write(data);
//      res.end();
//    }
//  });
//});

//server.listen(PORT, "localhost", error => {
//  error ? console.log(error) : console.log(`Listening port ${PORT}`);
//});
