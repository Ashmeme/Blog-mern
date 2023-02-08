const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {
            username: "Ashambickus",
            age: 18
        },
        {
            username: "Shazen",
            age: 0
        }
    ])
})

module.exports = router;