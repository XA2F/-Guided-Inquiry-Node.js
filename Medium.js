"use strict";

//I want to first import the http module
const http = require("http");
// start our function planet req,
function planetRequest(req, res) {
  //our status code 200 is indicating success, and content type as plain text
  res.writeHead(200, { "content-type": "text/plain" });
  //here i want to write the names of the planets for the response, \n will just break them on their on line.
  res.write(
    "Mercury\nVenus\nEarth\nMars\nJupiter\nSaturn\nUranus\nNeptune\nPluto\n"
  );
  //and i'll just end the response
  res.end();
}

http.createServer(planetRequest).listen(8000);
