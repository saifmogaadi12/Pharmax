const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");
var MongoClient = require('mongodb').MongoClient;
const app = express();

var corsOptions = {
  origin: "http://localhost:5001"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

const db = require("./app/models");
MongoClient.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(client =>{
      console.log("Connected to the database!");
        let db = client.db("mydb");
        app.post("/GetData", (req, res) => {
            db.collection('ScheduleData').find({}).toArray((err, cus) => {
                res.send(cus);
            });
        });
        app.post("/BatchData", (req, res) => {
            console.log(req.body);
            var eventData = [];
            if (req.body.action == "insert" || (req.body.action == "batch" && req.body.added.length > 0)) {
                (req.body.action == "insert") ? eventData.push(req.body.value) : eventData = req.body.added;
                for (var i = 0; i < eventData.length; i++) {
                    var sdate = new Date(eventData[i].StartTime);
                    var edate = new Date(eventData[i].EndTime);
                    eventData[i].StartTime = (new Date(+sdate - (sdate.getTimezoneOffset() * 60000)));
                    eventData[i].EndTime = (new Date(+edate - (edate.getTimezoneOffset() * 60000)));
                    db.collection('ScheduleData').insertOne(eventData[i]);
                }
            }
            if (req.body.action == "update" || (req.body.action == "batch" && req.body.changed.length > 0)) {
                (req.body.action == "update") ? eventData.push(req.body.value) : eventData = req.body.changed;
                for (var i = 0; i < eventData.length; i++) {
                    delete eventData[i]._id;
                    var sdate = new Date(eventData[i].StartTime);
                    var edate = new Date(eventData[i].EndTime);
                    eventData[i].StartTime = (new Date(+sdate - (sdate.getTimezoneOffset() * 60000)));
                    eventData[i].EndTime = (new Date(+edate - (edate.getTimezoneOffset() * 60000)));
                    db.collection('ScheduleData').updateOne({ "Id": eventData[i].Id }, { $set: eventData[i] });
                }
            }
            if (req.body.action == "remove" || (req.body.action == "batch" && req.body.deleted.length > 0)) {
                (req.body.action == "remove") ? eventData.push({ Id: req.body.key }) : eventData = req.body.deleted;
                for (var i = 0; i < eventData.length; i++) {
                    db.collection('ScheduleData').deleteOne({ "Id": eventData[i].Id });
                }
            }
            res.send(req.body);
        });
    })
    .catch(err => {
      console.log("Cannot connect to the database!", err);
      process.exit();
    });

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my application." });
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application." });
});


require("./app/routes/rendez-vous.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
