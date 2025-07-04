const mysql=require('mysql2');
const pool=mysql.createPool({
  host:"localhost",
  database:"mysql_practice",
  user:"root",
  password: ""

})
module.exports=pool.promise()
