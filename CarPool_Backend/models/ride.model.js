const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    driverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    startLocation: {
        address: String,
        coordinates: {
            lat: Number,
            long: Number
        }
    },
    endLocation: {
        address: String,
        coordinates: {
            lat: Number,
            long: Number
        }
    },
    route:[
        {
            lat: Number,
            long: Number
        }
    ],
    startTime: Date,
    endTime: Date,
    totalSeats: Number,
    bookedSeats: Number,
    passengers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    status:{
        type: String,
        enum: ['active','started','completed', 'cancelled']
    },
    createdDate: Date,
    updatedDate: Date
});

module.exports = rideSchema;