'use strict';

// const http = require('http');
// const app = http.createServer((req, res) => {
//   res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
//   if(req.url === '/'){
//     res.end('git 원본 http 연습 메인');
//   }else if(req.url === '/login'){
//     res.end('git 원본 http 연습 로그인');
//   }
// });

const express = require('express');
const app = express();

app.set('views', "views");
app.set('view engine', "ejs");

const home = require('./routes/home');

app.use('/', home);

module.exports = app;