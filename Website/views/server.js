// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/booleanInputDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Create MongoDB Schema
const booleanSchema = new mongoose.Schema({
    booleanInput: Boolean,
});

const BooleanModel = mongoose.model('Boolean', booleanSchema);

// Middleware
app.use(bodyParser.json());

// API endpoint to store Boolean input
app.post('/api/storeBoolean', (req, res) => {
    const { booleanInput } = req.body;

    // Save to MongoDB
    const booleanData = new BooleanModel({ booleanInput });
    booleanData.save((err, data) => {
        if (err) {
            console.error('Error saving to MongoDB:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log('Boolean input saved to MongoDB:', data);
            res.json({ booleanInput: data.booleanInput });
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
