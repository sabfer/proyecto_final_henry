const mongoose = require("mongoose");

const { MONGODB_HOST, MONGODB_DATABASE, NODE_ENV, MONGODB_LOCAL } = process.env;

const MONGODB_URI = `${MONGODB_HOST}/${MONGODB_DATABASE}`;
console.log('LOCAL DE MONGO: ',MONGODB_LOCAL);
if (NODE_ENV === "development") {
    console.log('conectando db local development');
    mongoose.connect(MONGODB_LOCAL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
        .then(console.log('connect database DEVELOPEMENT'))
        .catch(err => console.log(err));
} else {
    console.log('conectando db produccion');
    mongoose.connect(MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
        .then(console.log('connect database PRODUCTION'))
        .catch(err => console.log(err));
}

// const mongoose = require('mongoose');

// const { MONGODB_HOST, MONGODB_DATABASE} = process.env;
// const MONGODB_URI ="mongodb+srv://enzo_derviche:enzo2810@cluster0.lct4f.mongodb.net/test"
// //const MONGODB_URI = `${MONGODB_HOST}/${MONGODB_DATABASE}`;
// //console.log(MONGODB_URI)

// mongoose.connect(MONGODB_URI, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// })
//     .then(db => console.log('connect database'))
//     .catch(err => console.log(err));