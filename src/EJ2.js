var xls = require('excel');

function convertToJSON(array) {
  var first = array[0].join()
  var headers = first.split(',');

  var jsonData = [];
  for ( var i = 1, length = array.length; i < length; i++ )
  {

    var myRow = array[i].join();
    var row = myRow.split(',');

    var data = {};
    for ( var x = 0; x < row.length; x++ )
    {
      data[headers[x]] = row[x];
    }
    jsonData.push(data);

  }
  return jsonData;
};
const fileSelector = document.getElementById('upload');
fileSelector.addEventListener('change', (event) => {
  const fileList = event.target.files;
  console.log(fileList);
});

const filename = filelist.name;

xlsx(filename, function(err,data) {
  if(err) throw err;
  //console.log(jsonDataArray(data));
  console.log(JSON.stringify(convertToJSON(data)));
  //console.log(data);
});
