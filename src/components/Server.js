let express = require("express");
let app = express();

app.get("/", function (req, res) {
  let sql = require("mssql");

  // config database
  let config = {
    user: "xelcode",
    password: "xelcode",
    server: "10.100.200.62",
    database: "XELCODE",
  };

  
  sql.connect(config, function (err) {
    if (err) console.log(err);
    
    let request = new sql.Request();
    
    let sqlQuery = "select top (3) * from [XELCODE].[dbo].[LogHeader]";
    
    request.query(sqlQuery, function (err, data) {
      if (err) {console.log(err)}
      else {
      console.log(data.recordset);

      res.send(data.recordset);
    
      }
    });
  });
});

let server = app.listen(5000, function () {
  console.log("Server is running..");
});

