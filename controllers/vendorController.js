const Vendor = require('../models/vendor');

// Get all vendors
exports.getAllVendors = async (req, res) => {
    try {
        const vendors = await Vendor.find();
        res.status(200).json(vendors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new vendor with time slot availability
exports.createVendor = async (req, res) => {
    try {
        const { name, arenaPics, numberOfCourts, location,type, pricing, slots } = req.body;

        // Validate provided slots
        const defaultSlots = {
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
        };

        // Merge provided slots with default values
        const updatedSlots = { ...defaultSlots, ...slots };

        const vendor = new Vendor({
            name,
            arenaPics,
            numberOfCourts,
            location,
            type,
            pricing,
            slots: updatedSlots,
        });

        await vendor.save();
        res.status(201).json(vendor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
