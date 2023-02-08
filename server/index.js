const express = require('express');
const app = express();
const users = require('./routes/users');
const cors = require('cors');
const passport = require("passport")
const passportLocalMongoose = require("passport-local-mongoose")
const session = require("express-session");
const mongoose = require("mongoose");
const corsOptions = {
    optionsSuccessStatus: 200,
    credentials: true,
  }
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: 'randomstring',
    resave: true,
    saveUninitialized: false
}))
  
app.use(passport.initialize())
app.use(passport.session())




/*                       */
/*      NOSQL PART       */
/*                       */


mongoose.connect('mongodb://localhost:27017/nosqlTEST')

const UserSchema = mongoose.Schema({
    Username:String,
    password:String,
    Alias:String,
    Status:String,
    urllink:String,
})
UserSchema.plugin(passportLocalMongoose)
const User = mongoose.model("Users",UserSchema)
// const TaskScheme = mongoose.Schema({
//     title:String,
//     content:String,
//     category:String,
//     urllink:String,
//     author:String,
//     source:String,
//     date:String,
// })
// const Task = mongoose.model("Tasks",TaskScheme)




passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
    done(null, user.id);
    User.serializeUser()
});
  
passport.deserializeUser(function(id, done) {
    User.deserializeUser()
    
});

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());



/*                       */
/*      NOSQL PART END      */
/*                       */

app.use('/api/users', users);

app.get('/api/auth',(req,res) =>{
    if(req.isAuthenticated()){
        res.json([{auth: true}])  
      }else{
        res.json([{auth: false}])
      }
});

app.post("/api/register",(req,res)=>{
    console.log(req.body)
    User.register({
        username: req.body.username,
        email: req.body.email
      }, req.body.password, function(err, user) {
        if (err) {
          console.log(err);
          res.status(400)
          res.send("Already register")
        } else {
            
            passport.authenticate("local")(req, res, function() {
                console.log("Register Success");
            })
            res.status(200);
            res.send("Register Success")
        }
      })
})


app.post("/api/signin",(req,res)=>{
    const user = new User({
        username: req.body.username,
        password: req.body.password
    })
    console.log(req.body);

    req.login(user, function(err) {
    
        if (err) {
            console.log(err)
        }else{
            passport.authenticate("local")(req, res, function() {
            })
        }
    })
})

app.post("/api/signout",(req,res)=>{
    req.logout(function(err) {
        if (err) { return next(err); }
      });
});

app.get('/api', (req,res) => {
    res.send('hey');
})


app.listen(1234);