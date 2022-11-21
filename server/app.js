const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;



const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "Id",
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);


const db = mysql.createConnection({
    host:"localhost",
    user:"jeevan",
    password:"Jeva@1234",
    database:"warrenty_remainder",
 })


app.post("/registration",(req,res) => {
  const name = req.body.name;
  const mobile = req.body.mobile;
  const email = req.body.email;
  const pass = req.body.pass;

  bcrypt.hash(pass,saltRounds,(err,hash)=>{
    if(err){
      console.log(err);
    }
    db.query(
      "INSERT INTO users (Name,Mobile,Email,Password) VALUES (?,?,?,?)",
      [name, mobile,email,hash],
      (err, result) => {
        if(err){
          console.log(err);
        }if(result){
          res.send({message:"Registered"});
        }
      }
    );
  })
   
  });

// app.get("/userAuth",verifyJWT,(req,res)=>{
//    res.send("u are authenticated ")
// })

app.get('/',(req,res)=>{
  // console.log(req.session.user);
  if(req.session.user){
    res.send({ loggedIn:true, user :req.session.user})
  }else{
    res.send({loggedIn:false})
  }
})

app.post('/',(req, res) => {
  const email = req.body.email;
  const password = req.body.pass;
  
  db.query(
    "SELECT * FROM users WHERE Email = ?;",
    email,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        bcrypt.compare(password, result[0].Password, (error, response) => {
          if (response) {
           
            
            // const id = result[0].id
            // const tocken = jwt.sign((id),"itwassecret",{
            //   expiresIn: 300
            // })
            req.session.user = result;
            // res.json({auth:true,tocken: tocken,result: result})

            res.send(result);
          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
 });


app.post("/warrentyCreate",(req,res) => {
 const category=req.body.category;
 const productName=req.body.productName;
 const brandName=req.body.brandName;
 const model=req.body.model;
 const invoiceNumber=req.body.invoiceNumber;
 const purchaseDate=req.body.purchaseDate;
 const warrantyPeriod=req.body.warrantyPeriod;
 const storeContact=req.body.storeContact;
 const note=req.body.note;

 
    db.query(
      "INSERT INTO users (Name,Mobile,Email,Password) VALUES (?,?,?,?)",
      [category, productName,brandName,model,invoiceNumber,purchaseDate,warrantyPeriod,storeContact,note],
      (err, result) => {
        if(err){
          console.log(err);
        }if(result){
          res.send({message:"Registered"});
        }
      }
    );
  })
   


 

app.listen(3001, () => {
  console.log("server 3001 running");
});
