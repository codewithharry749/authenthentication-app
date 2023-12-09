const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const token = require('jsonwebtoken');

const student = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    fname: {
        type: String,
        required: true

    },

    email: {
        type: String,
        required: true,
        unique:{true:"eamil are already used"}
    },

    phone: {
        type: Number,
        required: true,
        unique:{true:"phone number are already used"}
    },

    address: {
        type: String,
        required: true
    },

    roll: {
        type: String,
        required: true,
        unique:{true:"roll number will be unique"}
    }

});

student.pre('save' , async function(next){
    if(this.isModified('roll')){
       this.roll  = await bcrypt.hash(this.roll , 12)
    }
    next();
})

const User = mongoose.model("USER", student);
module.exports = User;