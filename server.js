/**
 * Created by Star on 14-3-26.
 */

var express = require('express');
var mongodb = require('mongodb');
app = express.createServer();
//app.use(express.bodyParser());
//app.use(express.cookieparser());
//app.use(express.session({secret:'my secret'}));
app.set('view engine','ejs');
var server = new mongodb.Server('127.0.0.1',57076);
app.get('/',function(req,res){
    res.render('index');
});
app.listen(3000);
//new mongodb.Db('neeya',server).open(function(err,clien){
//    if(err){
//        throw err;
//    }
//    console.log('connected to mongodb');
//
//});
