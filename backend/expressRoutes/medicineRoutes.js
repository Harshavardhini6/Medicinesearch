var express = require('express');
var app = express();
var medicineRoutes = express.Router();

// Require Medicine model in our routes module
var Medicine = require('../models/Medicine');

// Defined store route
medicineRoutes.route('/add').post(function (req, res) {
  var medicine = new Medicine(req.body);
      medicine.save()
    .then(medicine => {
    res.status(200).json({'medicine': 'Medicine added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
medicineRoutes.route('/').get(function (req, res) {
  Medicine.find(function (err, medicines){
    if(err){
      console.log(err);
    }
    else {
      res.json(medicines);
    }
  });
});

module.exports = medicineRoutes;