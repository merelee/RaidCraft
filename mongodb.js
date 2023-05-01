const mongoose = require("mongoose");
const { mongodb } = require('./config.json');

module.exports = async() => {
description: `Connect to MongoDB.`,
    
await mongoose.connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.catch((err) => {
    console.log(err);
});
return mongoose
};