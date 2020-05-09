const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    User: String,
    Score: Number,
})

mongoose.model('User', userSchema);