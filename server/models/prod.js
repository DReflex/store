const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProdSchema = new Schema ({
  name:{
    type:String,
    required: [true, 'name is required'],
    unique: true
  },
  img:{
    type:String,
    default: "https://www.kcfortunecookiefactory.com/wp-content/themes/fortune_cookie/images/noimg.jpg"
  },
  type:{
    type:String,
    required: [true, 'Type is missing']
  },
  price: {
    type: Number,
    required: [true, 'Price required']
  },
  cpu: {
    type:String,
    default:"none specified"
  },
  gpu: {
    type:String,
    default:"none specified"
  },
  os: {
    type:String,
    default:"none specified"
  },
  hdd:{
    type:String,
    default:"none specified"
  },
  ram:{
    type:Number,
    default:0
  }

});
const Prod = mongoose.model('Prod', ProdSchema);
module.exports = Prod;
