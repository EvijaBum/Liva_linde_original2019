var express             = require("express"),
    app                 = express(),
    bodyParser          = require("body-parser"),
    exphbs              = require("express-handlebars"),
    passport            = require("passport"),
    flash               = require("connect-flash");


var indexRoutes = require("./routes/index");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(flash());

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.set("view engine", "ejs");


app.use(express.static("public"));


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
  console.log("BUNNY JUMPS!");
} else {
  console.log ("Error")
}

app.listen(port);
