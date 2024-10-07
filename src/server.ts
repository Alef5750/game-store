import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';



dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

// חיבור למונגו DB

mongoose.connect(process.env.MONGO_DB_CONNECTION as string)
    .then(() => console.log("Connected to MongoDB"))
    .catch(error => console.log(error))


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});