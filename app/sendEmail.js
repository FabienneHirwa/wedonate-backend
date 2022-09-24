const router = require("express").Router();
const nodemailer = require("nodemailer")
router.post("/email",((req,res)=>{
    let {emailFrom,emailTo,name,phoneNumber,nameMedicine,linkUrl}  = req.body
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        pool: true,
        auth: {
          user: 'wedonate23@gmail.com',
          pass: 'emycyebcnaoipxqz'
        }
      });
      
      var mailOptions = {
        from: emailFrom,
        to: emailTo,
        subject: 'Sending Email NGO',
        html: `<h1>Welcome</h1><br/><p>Please Check your dashboard ${name} has send the medicine</p> <br/> Phone Number:${phoneNumber} <br/> Name Of Medicine: ${nameMedicine} <br/> 
        Link:${linkUrl}
        `
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            // console.log(error)
            return res.json({
                success: 0,
                message: `Error ${error}`
              });    
        } else {
            return res.json({
                success: 1,
                message: info
              });    
        }
      });
}));
module.exports = router;