const fs = require("fs");
let attribute;
const letDoIT = () => {
  fs.readFile("dontloseyourCool.json", "utf8", (err, data) => {
    // console.log(data);
    attribute = JSON.parse(data);
  });
  // Copying the file to a the same name
  for(let i = 1;i<1001;i++){
    // 2xa ka name change ka daa na hai kya
    fs.copyFile("2xa.gif", `img/${i}.gif`, (err) => {
      if (err) {
        console.log("Error Found:", err);
      }
    });
  //   fs.unlink(`${i}.json`, (err) => {
  //     if (err) {
  //         throw err;
  //     }
  
  //     console.log("File is deleted.");
  // });
  
  }
  console.log("Job done");
};
letDoIT();
