var fs=require('fs')
var express = require('express');
var path =require('path');
var swig = require('swig');
var bodyParser = require('body-parser');
var superagent = require('superagent');
var app=express();
var cookiePareser = require('cookie-parser')
app.use(cookiePareser());
app.use(bodyParser.urlencoded({extended:true}));
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/');

app.use('/dist', express.static('dist'));
app.use('/lexiugo', express.static('dist/lexiugo'));
app.use('/server/dist', express.static('dist'));
app.use('/server/lexiugo', express.static('dist/server/lexiugo'));
//app.use('/server/fonts', express.static('common/fonts'));

if(process.env.NODE_ENV ==='dev'){
    global.ripath='/dist/';
}else{
    global.ripath='/server/dist/';
}

app.use('/lexiugo-app', require('./api'));//toumingxiu/
app.use('/server', require('./serverApi'));



app.listen(8055,()=>{
    console.log('local:localhost:8055 上线的时候记得把端口改成8099， ws 改成8181');
});