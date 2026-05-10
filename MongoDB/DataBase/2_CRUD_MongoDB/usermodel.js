const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/any_name_be_written_here`);

const userSchema = mongoose.Schema({
    name : String,
    username : String,
    email : String
})

module.exports = mongoose.model("user", userSchema);// this says that we want to perform crud operations on a route So we're doing in this way &&&& here user will be pluralised literally added the s at the end