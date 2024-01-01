import mongoose from "mongoose";

const connectWithDB = async (): Promise<void> => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI!);
        console.log(`MongoDB Connected Successfully, ${connection.connection.host}`)
    } catch (error: any) {
        console.error(`Error : ${error.message}`);
        process.exit();
    }
}

export default connectWithDB;