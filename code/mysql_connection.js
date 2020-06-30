var mysql = require('mysql');

var con = mysql.createConnection({
    host: "mysql",
    user: "root",
    password: "12345678",
    database: "testdb"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    let sql = "select * from user"
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        return
    });
});

// con.connect(function (err) {
//     if (err) throw err;
//     con.query("SELECT * FROM user", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });
// });