var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var corsOptions = {
    origin: "http://127.0.0.1:5500"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json


// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
// connection configurations
var dbConn = mysql.createConnection({

    


});

// connect to database
dbConn.connect();


// Retrieve all users 
app.get('/alislar', function (req, res) {

    dbConn.query('SELECT * FROM alislar', function (error, results, fields) {
        if (error) {
            throw error;
        }

        req.header("Access-Control-Allow-Origin", "*");
        req.header("Access-Control-Allow-Headers", "X-Requested-With");
        req.header('Content-Type', 'application/json');
        req.json = true;

        console.log("cagrildi...");
        console.log(results);

        return res.send(results);
    });
});

// Retrieve all users 
app.get('/satislar', function (req, res) {

    dbConn.query('SELECT * FROM satislar', function (error, results, fields) {
        if (error) {
            throw error;
        }

        req.header("Access-Control-Allow-Origin", "*");
        req.header("Access-Control-Allow-Headers", "X-Requested-With");
        req.header('Content-Type', 'application/json');
        req.json = true;

        console.log("cagrildi...");
        console.log(results);

        return res.send(results);
    });
});


// Retrieve alislar with id 
app.get('/alislar/id', function (req, res) {

    let alislarId = req.params.alislarId;

    if (!alislarId) {
        return res.status(400).send({ error: true, message: 'Please provide alislarId' });
    }

    dbConn.query('SELECT * FROM alislar WHERE id=? ', alislarId, function (error, results, fields) {
        if (error) throw error;
        return res.send(results[0]);
    });

});


// Retrieve satislar with id 
app.get('/satislar/:id', function (req, res) {

    let satislarId = req.params.id;

    if (satislarId) {
        return res.status(400).send({ error: true, message: 'Please provide satislarId' });
    }

    dbConn.query('SELECT * FROM satislar WHERE id=? ', satislarId, function (error, results, fields) {
        if (error) throw error;
        return res.send(results[0]);
    });

});

// Add a new alislar

app.post('/alislar-ekle', function (req, res) {

    console.log("sirket adi: " + req.body.sirketAdi);
    
    const sirketAdi = req.body.sirketAdi;
    const emirler = req.body.emirler;
    const lot = req.body.lot;
    const fiyat = req.body.fiyat;
   


    dbConn.query("INSERT INTO alislar SET ? ", {
        sirketAdi: sirketAdi, emirler: emirler, lot: lot, fiyat: fiyat
    
    }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, messege: 'New add has been created successfully.' });
    });



});


// Add a new satislar

app.post('/satislar-ekle', function (req, res) {

    console.log("sirket adi: " + req.body.sirketAdi);
    
    const sirketAdi = req.body.sirketAdi;
    const emirler = req.body.emirler;
    const lot = req.body.lot;
    const fiyat = req.body.fiyat;
    


    dbConn.query("INSERT INTO satislar SET ? ", {
        sirketAdi: sirketAdi, emirler: emirler, lot: lot, fiyat: fiyat
    
    }, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, messege: 'New add has been created successfully.' });
    });



});

// set port
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});

module.exports = app;
