var express             = require("express"),
    router              = express.Router(),
    nodemailer          = require("nodemailer");

    


//LANDING PAGE
    router.get("/", function(req, res){
        res.render("landing");
    });

// ABOUT SECTION
    router.get("/biography", function(req, res){
        res.render("biography"); 
    });

// PORTFOLIO SECTION
    router.get("/portfolio", function(req, res){
        res.render("portfolio"); 
    }); 

    // Kids
        router.get("/childhood", function(req, res){
            res.render("childhood"); 
        })

    // Lifestyle
        router.get("/lifestyle", function (req, res){
        res.render("lifestyle"); 
        });

    // Weddings
        router.get("/wedding", function(_req, res){
            res.render("wedding"); 
        });

    // Landscapes
        router.get("/landscapes", function(_req, res){
        res.render("landscapes"); 
        });
    // // People
        router.get("/travel", function(_req, res){
        res.render("travel"); 
        });
    // // Portraits
        router.get("/portraits", function(req, res){
            res.render("portraits"); 
        });

    // // Sport
        router.get("/sports", function(req, res){
            res.render("sports"); 
        });

    // Wildlife
        router.get("/wildlife", function(req, res){
            res.render("wildlife"); 
        });

    // Architecture
        router.get("/interior", function(req, res){
            res.render("interior"); 
        });
        
// PRICE SECTION
//   router.get("/price", function(req, res){
//     res.render("price"); 
//     });

// CONTACT SECTION
    router.get("/collaboration", function(req, res){
        res.render("collaboration"); 
    });


//=====================ROAD JOURNAL ======================//

//INDEX
    router.get("/roadjournal", function(req, res) {
        res.render("roadjournal");
    });

//SHOW
    router.get("/qatar_part_I", function(req, res){
        res.render("qatar_part_I");
    });
    
    //SHOW
    router.get("/qatar_part_II", function(req, res){
        res.render("qatar_part_II");
    });


//=============================================================//
// // NODEMAILER PATH

router.post("/collaboration/send", function(req, res) {
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

    //  smtpTransport.sendMail(mailOptions, function(err, info){
    //         if(err) {
    //         req.flash("error", "Something went wrong");
    //         console.log(err);
    //         res.redirect("/collaboration");
    //         } else {
    //             req.flash("success", "Your e-mail has been sent!");
    //             console.log('Message sent: %s', info.messageId);   
    //             console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    //             res.render('collaboration');
    //         }
    // });
    
}); 



module.exports = router;