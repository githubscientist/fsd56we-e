const app = require('./app');

const mongoose = require('mongoose');

require('dotenv').config();

// start the server and listen on port 3001
app.listen(3001, () => {
    console.log(`Server running on port 3001 at http://127.0.0.1:3001`);
});

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB: ', error);
    });