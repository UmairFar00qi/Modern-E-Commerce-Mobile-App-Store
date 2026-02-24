router.post('/place-order', async (req, res) => {
    try {
        const { items, totalAmount, customerName, phone, address } = req.body;
        
        // Ek random Order Number generate karte hain (e.g., ORD-12345)
        const orderID = "ORD-" + Math.floor(10000 + Math.random() * 90000);

        const newOrder = new Order({ 
            orderNumber: orderID, // Model mein ye field add karni hogi
            items, 
            totalAmount, 
            customerName, 
            phone, 
            address 
        });

        await newOrder.save();
        
        // Response mein orderNumber wapas bhej rahe hain ✅
        res.status(201).json({ 
            message: "Order placed successfully!", 
            orderNumber: orderID 
        });
    } catch (err) {
        res.status(500).json({ error: "Order fail ho gaya" });
    }
});