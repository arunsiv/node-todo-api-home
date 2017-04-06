var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// Creating a model for Todos with attributes
var Todo = mongoose.model('Todos', {
    todo: {
        type: String,
        required: true,
        minLength: 4,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var User = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        minLength: 4,
        trim: true
    }
});

//Instantiating a new model
// var newTodo = new Todo({
//     todo: 'Eat Breakfast',
//     completed: false,
//     completedAt: 345
// });

var newUser = new User({
    email: 'test@test.com'
});

//Saving to DB
// newTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 4));
// }, (err) => {
//     if (err) {
//         console.log('Error in save...');
//     }
// });

newUser.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 4));
}, (err) => {
    if (err) {
        console.log('Error in save...', err);
    }
});