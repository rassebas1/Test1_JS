const FileSystem = require("fs");
//CRUD ARCHIVOS
function readFile(path) {
  return FileSystem.readFile(path, (error, data) => {
    console.log(data.toString());
  });
}
function writeFile(path, data) {
  return FileSystem.writeFile(path, data, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Archivo Escrito");
    }
  });
}

function deleteFile(path) {
  return FileSystem.unlink(path, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Archivo Eliminado");
    }
  });
}
// readFile(__dirname + "/assets/Archivo.txt");
// writeFile(__dirname + "/assets/Archivo1.txt", "lorem ipsum lorem ipsum");
// readFile(__dirname + "/assets/Archivo.txt");
deleteFile(__dirname + "/assets/Archivo1.txt");