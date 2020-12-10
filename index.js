let express = require('express');
let app = express();
let apiRoutes = require("./routes");
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

var port =process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Welcome to Express'));
app.listen(port, function() {
    console.log("Running HW3 on Port " + port)
})
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const dbPath = 'mongodb://localhost/HW3';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);

mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})
app.use('/api', apiRoutes)
