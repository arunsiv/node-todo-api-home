var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
var port = process.env.PORT || 3000;

//Middleware
app.use(bodyParser.json());

//Routes

//Create Todos
app.post('/todos', (req, res) => {
    var todo = new Todo({
        todo: req.body.todo
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
        //console.log('Unable to add todos', err)
    });
});

//Server
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});

module.exports = {
    app
};