const fs = require("fs");
const stream = require("stream");
const util = require("util");
let data = "";
let readableStream = fs.createReadStream(
  "./src/components/Node/assets/Archivo.txt"
);
readableStream.setEncoding("utf8");

readableStream.on("data", (chunk) => {
  data += chunk;
});
readableStream.on("end", () => {
  console.log("end", data);
});


class Mayus extends stream.Transform {
    constructor() {
        super();
        
    }
    _transform(chunk, encoding, callback) {
        let chunkMayus = chunk.toString().toUpperCase();
        this.push(chunkMayus);
        callback();
    }
}


let mayus = new Mayus();
readableStream.pipe(mayus).pipe(process.stdout);
