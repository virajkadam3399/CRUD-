const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions={
    origin:'http://localhost:3000'
}

app.use(cors(corsOptions))

app.use(express.json())

const db = require('./models')

db.mongoose.connect(db.url)
.then(()=>{
    console.log('Connected to mongo server...');
})

require("./routes/UserRoute")(app)

app.listen(9000,()=>{
    console.log('Server Started...');
})


