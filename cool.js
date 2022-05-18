const fs = require("fs");
let attribute;
const letDoIT = () => {
  fs.readFile("dontloseyourCool.json", "utf8", (err, data) => {
    // console.log(data);
    attribute = JSON.parse(data);
  });
  fs.readFile("cool.json", "utf8", (err, data) => {
    let attributesTemp = JSON.parse(data);
    console.log(attributesTemp.attributes.length);
    attributesTemp.attributes.map((data, index) => {
      //     let t =data.trait_type
      //   console.log(attribute[t]);
      if (index == 0) {
        let a = attribute[data.trait_type];
        // let as = attribute[data.value];
        a.map((data, index) => {
          console.log(data.trait, index);
        });
      }
    });
  });
};
letDoIT();
