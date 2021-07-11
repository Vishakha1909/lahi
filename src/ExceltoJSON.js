const xlsx = require("xlsx");
const fs = require("fs");

const wb = xlsx.readFile('./names.xlsx');

const ws = wb.Sheets["Sheet1"];

const data = xlsx.utils.sheet_to_json(ws);
console.log(data);