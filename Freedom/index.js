/**
  自由风格代码剪贴板
*/

var fs = require('fs')
var rs = fs.createReadStream(src);
var ws = fs.createWriteStream(dst)
rs.on('data',function(chunk) {
})
res.on("end",function(){})

//同步目录遍历函数
function travel (dir,callback) {
  fs.readdirSync(dir).forEach(function(file) {
    var pathname = path.join(dir,file)
    if (fs.statSync(pathname).isDectory()) {
        travel(pathname,callback)
    } else {
        callback(pathname)
    }
  })
}

//异步遍历

function travel(dir, callback, finish) {
  fs.readdir(dir, function (err, files) {
      (function next(i) {
          if (i < files.length) {
              var pathname = path.join(dir, files[i]);
              fs.stat(pathname, function (err, stats) {
                  if (stats.isDirectory()) {
                      travel(pathname, callback, function () {
                          next(i + 1);
                      });
                  } else {
                      callback(pathname, function () {
                          next(i + 1);
                      });
                  }
              });
          } else {
              finish && finish();
          }
      }(0));
  });
}


var http = require("http")
var querystring  = require("querystring")

http.createServer(function(req,res){
    var posData = ''
    req.setEncoding('utf-8');
    req.on('data',function(chunk){
        posData += chunk
    })

    req.on('end',function() {
        res.end(posData)
    })
}).listen(8080)
console.log("服务器启动完成")


$.ajax({
    'url':'./url',
    'method':'post',
    'data':{},
    'success':function(data) {
        //success event
    }
})

const datas = [
    {
        name:'a',
        age:1
    },
    {
        name:'b',
        age:2
    }, {
        name:'c',
        age:3
    }
]