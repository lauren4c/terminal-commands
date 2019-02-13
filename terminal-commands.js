const fs = require("fs");

module.exports.ls = () => {
  fs.readdir("./", (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file}`;
    }, "");

    console.log(filesToString);
  });
};

module.exports.touch = fileName => {
  fs.writeFile(`${fileName}`, null, "utf8", err => {
    console.log(`${fileName}` + " created");
  });
};

module.exports.mkdir = folderName => {
  fs.mkdir("./" + `${folderName}`, err => {
    console.log(`${folderName}` + " created");
  });
};
