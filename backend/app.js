const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json())
const cors = require("cors");
const bodyParser = require("body-parser");
const { ReturnDocument } = require('mongodb');
const user = require('./sendmail')
const complaints = require('./feedback')
const feedback = require('./emailComment');
app.use(bodyParser.json());
app.use(cors());
mongoose.connect('mongodb+srv://admin:Koushik123@cluster1.12wr9zu.mongodb.net/logins?retryWrites=true&w=majority&appName=Cluster1')
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected")
  )
  .catch((err) => console.log(err));




// -----------------------------login code---------------------------

app.post('/signin', async (req, res) => {
  const { Email, password } = req.body;
  // console.log(username)
  try {
    const userdata = await user.findOne({ Email, password });

    if (!userdata) {
      return res.status(404).json({ error: 'Invalid Email or password' });
    }

    return res.status(200).json({ userdata });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});





// -----------------------register page-------------------------


app.post('/signup', (req, res, next) => {
  console.log("test")
  console.log(req.body.formdata);
  const { Email, Username, Password } = req.body.formdata;
  let userdt;
  const udt = new user({
    Email,
    Username,
    Password

  })
  try {
    userdt = udt.save();
  }
  catch (err) {
    console.log(err);
  }
  return res.send({ msg: "inserted", result: userdt });
})



// ------------------feedback form ------------------------
const send = require('send'); // Import the send model if defined in a separate file
const nodemailer = require('nodemailer');
const { default: complaint } = require('./feedback');
// const feedback = require('./feedback');

app.post("/addForm", async (req, res, next) => {
  try {
    // console.log(req.body);
    const { name, email, comments } = req.body;
    console.log(req.body);
    // Save form data to database
    // const smail = { name, email, comments };
    // await smail.save();
    const data = await feedback.insertMany(req.body)
    console.log(data);
    if (!data) {
      res.send("Something went wrong");
    }
    else {
      res.send(data);
    }
    // res.send(smail);
    // Send email using nodemailer
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: 'krishnakoushikchowdary@gmail.com',
    //     pass: 'zjpa vedu hrga eqyf'
    //   }
    // });

    // const mailOptions = {
    //   from: 'krishnakoushikchowdary@gmail.com',
    //   to: email,
    //   subject: 'Sending mails to rectify problems to be solved',
    //   text: `Thanks ${name} for your valuable feedback. We will soon rectify your problem. ${comments}`
    // };

    // transporter.sendMail(mailOptions, function (error, info) {
    //   if (error) {
    //     console.log(error);
    //     return res.status(500).json({ error: 'Error sending email' });
    //   } else {
    //     console.log('Email sent: ' + info.response);
    //     return res.status(200).json({ msg: 'Inserted', result: smail });
    //   }
    // });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// 



//add complaint 
app.post('/addComplaint', async (req, res) => {
  // console.log(req.body);
  // const {executive_name,hall_no,issue_type,complaint} = req.body;    
  // feedback.insertMany(req.body)
  console.log(req.body);
  complaints.insertMany(req.body)
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    })
  // res.send(issue_type);
  // const newComplaint = new Feedback({
  //   executive_name,
  //   hall_no,
  //   issue_type,
  //   complaint
  // })

  // await newComplaint.save().then((res)=>{
  //   return res.status(201).json({message:"Added"})
  // })
})



