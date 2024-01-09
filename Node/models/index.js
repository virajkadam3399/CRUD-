const dbConfig = require("../config/db.config")

const mongoose = require("mongoose")

const db = {}

db.url = dbConfig.url
db.mongoose = mongoose
db.users = require("./UserModel")(mongoose)

module.exports = db