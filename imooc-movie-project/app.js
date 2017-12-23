var express = require('express')

var app = new express();

var port = process.env.PORT || 3000

app.set('views','./views')
app.set('view engine','jade')
app.listen(3000)

console.log("imooc movie server start at port " + port)

//inde.page
app.get('/',function(req,res) {
    res.render('index',{
        title:'imooc 首页'
    })
})

//详情页
app.get('/detail',function(req,res) {
    res.render('index',{
        title:'详情页'
    })
})


//后台录入
app.get('/admin',function(req,res) {
    res.render('index',{
        title:'后台录入页'
    })
})

//列表页
app.get('/list',function(req,res) {
    res.render('index',{
        title:'列表页'
    })
})