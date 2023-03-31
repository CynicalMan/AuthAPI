const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'auth_schema',
    port : '3306', // default port
});
connection.connect((err)=>{
    if(err){
        console.log("ERROR CONNECTING TO DB");
        return
    }
    console.log("CONNECTION SUCCESS..");
});
module.exports = connection ;