var express             = require("express"),
    router              = express.Router(),
    nodemailer          = require("nodemailer");

    


//LANDING PAGE
    router.get("/", function(req, res){
        res.render("landing");
    });

// ABOUT SECTION
    router.get("/about", function(req, res){
    res.render("about"); 
    });

// PORTFOLIO SECTION
    router.get("/portfolio", function(req, res){
    res.render("portfolio"); 
    }); 

    // Kids
        router.get("/kidsevents", function(req, res){
            res.render("kidsevents"); 
        })

    // Lifestyle
        router.get("/lifestyle", function(req, res){
        res.render("lifestyle"); 
        });

    // Weddings
        router.get("/wedding", function(req, res){
            res.render("wedding"); 
        });

    // Landscapes
        router.get("/landscapes", function(req, res){
        res.render("landscapes"); 
        });
    // People
    router.get("/people", function(req, res){
        res.render("people"); 
    });
    // Portraits
    router.get("/portraits", function(req, res){
        res.render("portraits"); 
    });

    // Sport
    router.get("/sports", function(req, res){
        res.render("sports"); 
    });

    // Wildlife
        router.get("/wildlife", function(req, res){
            res.render("wildlife"); 
        });

    // Architecture
        router.get("/architecture", function(req, res){
            res.render("architecture"); 
        });
        

// CONTACT SECTION
    router.get("/contact", function(req, res){
    res.render("contact"); 
    });


//=====================ROAD JOURNAL ======================//

//INDEX
    router.get("/roadjournal", function(req, res) {
        res.render("roadjournal");
    });

//SHOW
    router.get("/blog1", function(req, res){
        res.render("blog1");
    });


//=============================================================//
// // NODEMAILER PATH

router.post("/contact/send", function(req, res) {
    var smtpTransport = nodemailer.createTransport({
      service: 'Yahoo',
      auth: {
          user: 'livtobe@yahoo.com',
          pass: 'LatviesuZeltene2018',
  }
});

    var mailOptions = {
        from: 'Liva Linde <livtobe@yahoo.com>',
        to: 'livtobe@yahoo.com',
        replyTo: req.body.email,
        subject: 'Website Form',
        text: 'You have a contact with the following details... Name: '+ req.body.name + ' Email: ' + req.body.email + ' Message: ' + req.body.message,
        html: '<h3>You have a new contact information with the following details...</h3><ul><li>Name: ' + req.body.name + ' </li><li>Email: ' + req.body.email + ' </li></ul><p>Message: <br/><br/>     ' + req.body.message + ' </p>'
    };

     smtpTransport.sendMail(mailOptions, function(err, info){
            if(err) {
            req.flash("error", "Something went wrong");
            console.log(err);
            res.redirect("/contact");
            } else {
                req.flash("success", "Your e-mail has been sent!");
                console.log('Message sent: %s', info.messageId);   
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                res.render('contact');
            }
    });
    
}); 



module.exports = router;