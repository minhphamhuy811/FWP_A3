const Json2csvParser = require("json2csv").Parser;

export default function writeToCSV(jsonData, csvHeaders) {
  const parser = new Json2csvParser({ fields: csvHeaders });
  // parse json data to csv
  const csvData = parser.parse(jsonData);
  // prepare csv file for download
  var eURI = encodeURIComponent(csvData);
  const url = "data:text/csv;charset=utf-8,%EF%BB%BF" + eURI;
  return url;
}
