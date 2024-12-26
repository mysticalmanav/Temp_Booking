const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());

// If you need more specific CORS configuration:
app.use(cors({
    origin: '*',                // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],  // Allow all methods
    allowedHeaders: '*',        // Allow all headers
    credentials: true,          // Allow credentials (cookies, authorization headers, etc)
    maxAge: 86400              // Cache preflight requests for 24 hours
}));

app.use(bodyParser.json());

// Routes
const userRoutes = require('./routes/vendorRoutes');
app.use('/api/vendors', userRoutes);

// MongoDB Connection 
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Start Server
const PORT =   process.env.PORT||4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
