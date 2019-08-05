var express             = require("express"),
    app                 = express(),
    bodyParser          = require("body-parser"),
    exphbs              = require("express-handlebars"),
    flash               = require("connect-flash"),
    session             = require('express-session');

const port = 3000;


var indexRoutes = require("./routes/index");


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(flash());
app.use(session({ secret: '123' }));

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.set("view engine", "ejs");


app.use(express.static("public"));


app.use(function(req, res, next){
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});


//===============================================//

app.use("/", indexRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));