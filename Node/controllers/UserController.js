const db = require("../models")

const User = db.users

exports.create = (req,res)=>{
    const user = new User({
        name : req.body.name,
        email : req.body.email,
        gender : req.body.gender
    })

    user.save(user)
        .then(data=>{
            res.send(data)
        })
}

//query all records
exports.findAll = (req,res)=>{
    User.find()
        .then((data)=>{
            res.send(data)
        })
}

//find single record
exports.findOne = (req,res)=>{
    User.findById(req.params.id)
        .then((data)=>{
            res.send(data)
        })
}

//update record
exports.updateUser = (req,res)=>{
    User.findByIdAndUpdate(req.params.id, req.body, {useFindAndModify : false})
        .then((data)=>{
            res.send(data)
        })
}

//delete record
exports.deleteUser = (req,res)=>{
    User.findByIdAndRemove(req.params.id)
        .then((data)=>{
            res.send(data)
        })
}

