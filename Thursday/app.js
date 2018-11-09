var express = require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
// var urlencodedParser = bodyParser.urlencoded({extended: true})
mongoose.Promise = global.Promise;

app.set('view engine','ejs')
app.use('/public',express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Users information database
mongoose.connect('mongodb://localhost:27017/UserData')
mongoose.connection.on('open',function(){
    console.log('Connected To Database!')
}).on('error',function(error){
    console.log('Oops there is an error!',error)
})
//Users information database

//schemas
var login = new mongoose.Schema({
    username: String,
    password: String
    });
const User = mongoose.model('loginuser',login)
module.exports = User;
//schemas


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

app.post('/adduser',(req,res) =>{
    var newUser = new User ({
        username: req.body.userName,
        password: req.body.passWord
    });
        newUser.save()
        .then(item => {
        res.sendFile(__dirname + "/groceryApp.html");
        })
        .catch(err => {
        res.status(400).send("unable to save to database");
        });
});

app.listen(3000)