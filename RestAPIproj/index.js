const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let orderList = [];

app.post("/orders", (req, res) => {
    const { name, address, orders } = req.body;

    if (!name || !address || !orders) {
        return res.status(400).json({ message: "Please provide all the details" });
    }

    const newOrder = {
        id: Date.now().toString(), // Simple unique ID
        name,
        address,
        orders
    };

    orderList.push(newOrder);

    res.status(201).json({ newOrder });
});

// 🔍 Get all orders
app.get("/orders", (req, res) => {
    res.json(orderList);
});

// 🔍 Get a specific order by ID
app.get("/orders/:id", (req, res) => {
    const { id } = req.params;
    const order = orderList.find(order => order.id === id);

    if (!order) {
        return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
