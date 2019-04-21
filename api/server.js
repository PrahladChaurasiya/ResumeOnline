var express = require('express')
var MongoClient = require('mongodb').MongoClient
var bodyParser = require('body-parser');
var path= require('path')
cors=require('cors');
var app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const userRoute = require('./routes/user.route');

    app.use('/user',userRoute);
    const port = process.env.PORT || 4000;

    const server = app.listen(port,function(){
        console.log('Listening on port ' + port);
    });


app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log("hello");
    })

app.post('/login', function(req, res){
MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true } , function(err, client){
var db = client.db('resume');
console.log(req.body.email);
console.log(req.body.password);
var query = {"email": req.body.email, "password": req.body.password}
db.collection('registration').findOne(query, function(err, result){
    if(err) throw new Error (err);

    if(!result){
        res.send(JSON.stringify("False"));
        console.log("not found");
    }
    else{
        res.send(JSON.stringify(result._id));
        console.log('Found');
    }
   })
  })
});

app.post('/register', function(req, res){
    MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true } , function(err, client){
        var db = client.db('resume');
        db.collection('registration').findOne({"email":req.body.email }, function(err, user){
          if(err) throw new Error(err);
          if(!user) {
          console.log('Not found');
          db.collection("registration").countDocuments(/*{'_id':2},*/function(err, result){
              var query = {"_id":result+1,"username": req.body.username, "email":req.body.email , "password" :req.body.password};
              db.collection('registration').insertOne(query)
          });
          res.send(JSON.stringify("True"));
          }
          else
          {
            console.log('Found!');
            res.send(JSON.stringify("False"));
          }
        })
      })
    });

    app.post('/generate', function(req, res){
        MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true } , function(err, client){
            var db = client.db('resume');
            db.collection("resumeDetials").countDocuments({'id':4},function(err, result){
                if(err) throw new Error(err);
                var data=req.body;
                data.id=4;
                data.resumeID=result+1;
                  db.collection('resumeDetials').insertOne(data);
                  res.send('Successful');
              });
           })
        })

    // res.send(JSON.stringify({
    //     status : "user exists",
    // }));
