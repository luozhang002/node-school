var mysql = require('mysql')

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
})

connection.connect();

connection.query("DROP DATABASE IF EXISTS node")
connection.query("CREATE DATABASE node")
connection.query('use node')

var sql = "CREATE TABLE test (id INT(11) AUTO_INCREMENT,content VARCHAR(255),PRIMARY KEY(id))"

connection.query(sql)

// 插入数据
for (var i = 0;i<10000;i++) {
    connection.query("INSERT INTO test (content) VALUES (?)",['content for row',(i+1)])
}

//更新数据
connection.query('UPDATE test SET content = ? WHERE id >= ?',['new content',9000],function(err,info){
    console.log("Changed conent of " + info.affectedRows +  ' rows')
})

//查询数据

var query = connection.query('SELECT id ,content FROM test WHERE id >= ? AND id <= ?',[8990,9010])

query.on('error',function(err){
    throw err
})

query.on('row',function(row) {
    console.log("Content of row #" + row.id + ' is: ' + row.content + '"')
})

query.on('end',function(result) {
    console.log("Finished retrieving results")
})

connection.end();

