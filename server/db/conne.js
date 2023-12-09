// password = eyfEubULKpLNJXsn
// const connectUri = 'mongodb+srv://mtankmtank265:eyfEubULKpLNJXsn@cluster0.1kikax2.mongodb.net/Student_data?retryWrites=true&w=majority'

const mongoose = require('mongoose');

module.exports = async () =>{
    const mongoUri = 'mongodb+srv://mtankmtank265:eyfEubULKpLNJXsn@cluster0.1kikax2.mongodb.net/Student_data?retryWrites=true&w=majority';
    try{
         const connect = await mongoose.connect(mongoUri , {
            useNewUrlParser:true,
            useUnifiedTopology:true
         })
            console.log('MongoDB connected  successFully' ,`${connect.connection.host}`);
    }catch(err){
        console.log(err)
        process.exit(1);
    }
};