module.exports = mongoose =>{
    var schema = mongoose.Schema({
        name : "String",
        email : "String",
        gender : "String"
    })

    const User = mongoose.model("user", schema)
    return User
}