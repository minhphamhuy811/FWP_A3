const Json2csvParser = require("json2csv").Parser;
const fs = require("fs");

//export default function writeToCSV(endPoint, fields, fileName) {}

const fields = ['fullName','id', 'birthYear', 'gender', 'country', 'city', 'district', 'ward', 'address', 'phoneNumber']
const https = require("http");
const parser = new Json2csvParser({ fields });
var data = "";
https
  .get("http://localhost:3307/getall", (res) => {
    res.on("data", (content) => {
      data += content;
    });
    res.on("end", () => {
      data = JSON.parse(data);
      // Parse json to csv
      const csvData = parser.parse(data);
      // Write to data to file
      fs.appendFile("data.csv", csvData, function (err) {
        if (err) throw err;
        console.log("File saved");
      });
    });
  })
  .on("error", (err) => {
    console.log(err.message);
  });
