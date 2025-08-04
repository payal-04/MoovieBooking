import mongoose from 'mongoose'

const connectDB = async()=>{
    try {
        mongoose.connection.on('connected', ()=> console.log("Databse Connected"));
        await mongoose.connect(`${process.env.MONGODB_URI}/tickitup`)
    } catch (error)
     {
        console.log(error.message);
    }
}

export default connectDB;