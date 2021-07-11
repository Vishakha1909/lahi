'use strict';
const excelToJson = require('convert-excel-to-json');

const fileSelector = document.getElementById('upload');
fileSelector.addEventListener('change', (event) => {
  const fileList = event.target.files;
  console.log(fileList);
});

const filename = filelist.name;

const result = excelToJson({
    sourceFile: filename
});

console.log(result);