import mongoose from 'mongoose'

const CarSchema = new mongoose.Schema({
    make: String,
    model: String,

},
{timestamps:true});

export default mongoose.model('Car', CarSchema);