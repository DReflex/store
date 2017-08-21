const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app =express();
app.set('port', (process.env.PORT || 8080));
var mLab = "mongodb://<dbuser>:<dbpassword>@ds153003.mlab.com:53003/store";
console.log(process.env.USER);
var options={
  user: "store",
  pass: "store"
}
mongoose.connect(mLab, options)

mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//init app
app.use('/', express.static(path.join(__dirname, '../dist')));

app.use('/api', require('./routes/api'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});
//err
app.use(function(err, req, res, next){
  //console.log(err);
  res.status(422).send({error: err.message})
});

//port
app.listen(app.get('port'), function () {
    console.log('App listening on port ' + app.get('port'));
});
