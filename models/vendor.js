const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Vendor name
    arenaPics: { type: [String], required: true }, // Array of image URLs
    numberOfCourts: { type: Number, required: true }, // Number of courts
    location: { type: String, required: true }, // Vendor location
    type: { type: String, required: true }, // Vendor location
    pricing: { type: Number, required: true }, // Pricing per slot
    slots: { 
        type: Map, 
        of: Boolean, 
        required: true, 
        default: () => ({
            "9:00 AM - 10:00 AM": true,
            "10:00 AM - 11:00 AM": true,
            "11:00 AM - 12:00 PM": true,
            "12:00 PM - 1:00 PM": true,
            "1:00 PM - 2:00 PM": true,
            "2:00 PM - 3:00 PM": true,
            "3:00 PM - 4:00 PM": true,
            "4:00 PM - 5:00 PM": true,
            "5:00 PM - 6:00 PM": true,
            "6:00 PM - 7:00 PM": true,
            "7:00 PM - 8:00 PM": true,
            "8:00 PM - 9:00 PM": true,
        }) 
    }, // Fixed slots with availability
});

module.exports = mongoose.model('Vendor', vendorSchema);
