var express             = require("express"),
    app                 = express(),
    session             = require('express-session'),
    bodyParser          = require("body-parser"),
    mongoose            = require("mongoose"),
    exphbs              = require("express-handlebars"),
    passport            = require("passport"),
    LocalStrategy       = require("passport-local"),
    flash               = require("connect-flash");


var indexRoutes = require("./routes/index");


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(flash());

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.set("view engine", "ejs");


app.use(express.static("public"));


//PASSPORT LOCAL //
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


app.use(function(req, res, next){
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

//===============================================//

app.use("/", indexRoutes);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
