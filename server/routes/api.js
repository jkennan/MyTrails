const express = require('express');
const router  = express.Router();

// incoming GET requests
router.get('/', (req, res) => {
    res.send('api works');
});

module.exports = router;