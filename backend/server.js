const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');
const config = require('./config/DB');

const medicineRoutes = require('./expressRoutes/medicineRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

app.use('/medicines', medicineRoutes);

let port = process.env.PORT || 4000;
let server = app.listen(port,()=>{
    console.log('Listening on port ' + port);
});