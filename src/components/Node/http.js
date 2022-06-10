const http = require("http");

function router(request, response) {
  console.log("intialized");
  response.writeHead(200, { "Content-Type": "text/plain" });
  console.log(request.url);
  switch (request.url) {
    case "/":
      response.write("Hello World");
      break;
    case "/about":
      response.write("About");
      break;
    default:
      response.write("404");
      break
  }

  response.end("Hola Mundo");
}
http.createServer(router).listen(3000);
