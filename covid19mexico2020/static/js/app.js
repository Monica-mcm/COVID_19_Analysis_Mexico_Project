
//xhr.onload = function({
//  var uInt8Array = new Uint8Array(this.response);
//  var db = new SQL.Database(uInt8Array);
//  var tables = db.exec("SELECT * FROM Covid19MexicoData");
//  console.log(tables);
//});
//
//
//tx.executeSql('SELECT * FROM foo', [], function (tx, results) {
//  var len = results.rows.length, i;
//  for (i = 0; i < len; i++) {
//    alert(results.rows.item(i).text);
//  }
//});


//import db from 'sqlite';
//
//
//db.open('Data_200417.db')
//  .then(() => {
//    console.log('SQLite connected');
//  })
//  .catch(e => {
//    console.log('Cannot connect to SQLite');
//    console.log(e);
//  });
//

  function buildPlot() {
    let d3;
    let Plotly;
  
      /* data route */
    const url = "Covis19mexico2020/Covid19MexicoData.sqlite";
    d3.json(url).then(function(response) {
    
      console.log(response);
    });

  };
  
      //const data = response;
  