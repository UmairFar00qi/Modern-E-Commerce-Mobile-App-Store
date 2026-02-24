const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products
router.get('/', async (req, res) => {
    try {
        let products = await Product.find();
        
        // Auto-Seed: Agar DB khali hai to 3 products khud add kar do
        if (products.length === 0) {
            const dummyProducts = [
                { title: "Wireless Headphones", price: 15000, description: "High quality bass sound", image: "https://picsum.photos/400?random=1", category: "Electronics", stock: 10 },
                { title: "Smart Watch Pro", price: 8500, description: "Fitness tracker & heart rate monitor", image: "https://picsum.photos/400?random=2", category: "Electronics", stock: 15 },
                { title: "Men's Sneakers", price: 5000, description: "Comfortable running shoes", image: "https://picsum.photos/400?random=3", category: "Fashion", stock: 20 }
            ];
            products = await Product.insertMany(dummyProducts);
        }
        
        res.json(products);
    } catch (err) {
        res.status(500).send("Server Error");
    }
});

module.exports = router;