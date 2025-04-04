import './config.js';

import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import chatRouter from './routes/chatRouter.js'
import carRouter from './routes/carRouter.js'

import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js'

const app = express();
const port = process.env.PORT || 5100;

if(process.env.NODE_ENV === 'development'){
     app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/v1/ask', chatRouter);

app.use('/api/v1/cars', carRouter);

app.use('/api/v1/test', (req,res) => {
    res.json({ msg: 'test'});
})

app.use(errorHandlerMiddleware);

try{
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () => {
        console.log(`Server running on PORT ${port}...`)
    })
} catch (error){
    console.log(error);
    process.exit(1);
}
