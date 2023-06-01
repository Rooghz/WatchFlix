const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const moviesRoutes = require('./routes/movies');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
    .connect('mongodb://127.0.0.1/watchflix', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error);
    });

// Routes

app.get('/', (req, res) => {
    res.send('Welcome to the WatchFlix API');
});


app.use('/api/movies', moviesRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
