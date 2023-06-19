const mongoose=require("mongoose");


const cardSchema=new mongoose.Schema({

    name:{
        type:String,
    },
    card_number:{
        type:Number,
    },
    card_type:{
        type:String,
    },
    exp_date:{
        type:String,
    },
    cvv:{
        type:String,
    },
    amount:{
        type:Number,
    }
})

module.exports=mongoose.model("Card",cardSchema);