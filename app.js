var express             = require("express"),
    app                 = express(),
    bodyParser          = require("body-parser"),
    exphbs              = require("express-handlebars"),
    flash               = require("connect-flash"),
    session             = require('express-session'),
    cookieParser        = require('cookie-parser');


var indexRoutes = require("./routes/index");


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(flash({ locals: 'flash' }));


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.set("view engine", "ejs");
app.set('trust proxy', 1) // trust first proxy

app.use(express.static("public"));


app.use(function(req, res, next){
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});


//===============================================//

app.use("/", indexRoutes);




app.listen(3000, function(){
   console.log("server started");
});