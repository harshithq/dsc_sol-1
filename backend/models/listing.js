const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
    emailuser: {
        type : String,
    },
    title: {
        type : String,
        trim : true
    },
    price: {
        type : Number,
        
    },
    categoryId: {
        type : String,
   // required : true
    },
   description: {
      type : String,
      trim : true
  },
    contact:
    {   type : Number,
        
    },
    location: {
       
        latitude: {
          type: [Number],
          required: false
        },
        longitude:{
          type: [Number],
          required: false
        }
      }
})

module.exports = mongoose.model('Listing',listingSchema)