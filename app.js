var express = require('express');
var path = require('path');
var mongoose = require('mongoose')

var app = express();
app.listen('3000');
var dbURI = 'mongodb+srv://kira:mongoose@6322@node.dakub.mongodb.net/blog_db?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index')
})


module.exports = app;