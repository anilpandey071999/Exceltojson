const excel = require("exceljs");
const workbook = new excel.Workbook();
const fs = require("fs");
// use readFile for testing purpose
// await workbook.xlsx.load(objDescExcel.buffer);
const a = async () => {
  console.log(process.argv);
  await workbook.xlsx.readFile("D:\\BOIT\\ExceltoJson\\Book2.xlsx");
  let jsonData = [];
  workbook.worksheets.forEach(function (sheet) {
    // read first row as data keys
    let firstRow = sheet.getRow(1);
    if (!firstRow.cellCount) return;
    let keys = firstRow.values;
    sheet.eachRow((row, rowNumber) => {
      if (rowNumber == 1) return;
      let values = row.values;
      let obj = {};
      let j = 0;
      // while (j < 5) {
      for (let i = 1; i < keys.length; i++) {
        // console.log(keys[i],i);
        if (i == 8) {
          obj[keys[i]] = JSON.parse(values[i]);
        } else if (i == 1) {
          console.log(values[i + 1]);
          obj[keys[i]] = `${values[i]}${values[i + 1]}`;
        } else if (i == 2 || i == 5 || i == 6 || i == 4 || i == 7) {
        } else if (i == 4) {
          obj[keys[i]] = `${values[i]}${values[i + 1]}${values[i + 2]}`;
        } else {
          obj[keys[i]] = values[i];
        }
      }
      // console.log(obj);
      jsonData.push(obj);
      // j++;
      // }
    });
  });

  console.log(jsonData);
  jsonData.map((row, index) => {
    row.edition = index + 1;
    row.image = `ipfs://NewUriToReplace/${index + 1}.png`;
    // console.log()
    fs.writeFile(`${index + 1}.json`, String(JSON.stringify(row).replace("{","{\n    ").replace("}","\n}").replace(/,/g,",\n    ")), function (err) {
      if (err) throw err;
      console.log("File is created successfully.");
    });
  });
};
try {
  a();
} catch (error) {
  console.log(error);
}
