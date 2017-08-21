const express= require('express');
const router = express.Router();
const Prod = require('../models/prod');

//get all
router.get('/prod', function(req, res, next){
  Prod.find({}).then(function(result){
    res.send(result);
  }).catch(next);
});

//get filter
router.get('/prod/:type', function(req, res, next){
  Prod.find({type: req.params.type})
  .then(function(product){
    res.send(product)
  }).catch(next);
});

//get single product
router.get('/detail/:name', function(req, res, next){
  Prod.findOne({name: req.params.name})
  .then(function(product){
    res.send(product)
  }).catch(next);
})

router.post('/prod', function(req, res, next){
  Prod.create(req.body).then(function(Product){
    res.send(Product);
  }).catch(next)
});

router.put('/prod/:id', function(req, res, next){
  console.log("prod init", req.body)
    Prod.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Prod.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
        });
    }).catch(next);
});

router.delete('/prod/:id', function(req, res, next){
  Prod.findByIdAndRemove({_id: req.params.id}).then(function(del){
    res.send(del);
  }).catch(next);
})

module.exports = router;
