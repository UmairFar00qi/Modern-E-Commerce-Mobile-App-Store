const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    items: Array,          // Cart ke products
    totalAmount: Number,   
    customerName: String,
    phone: String,
    address: String,
    orderDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);