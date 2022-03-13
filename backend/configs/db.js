const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb+srv://shivam:shivam@cluster0.vkgrd.mongodb.net/Products");
}