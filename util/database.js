const mySql=require('mysql2');

const pool= mySql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'root'
})
module.exports = {
    execute: (sql, params = []) => {
        return pool.promise().execute(sql, params);
    }
};