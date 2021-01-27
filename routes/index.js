'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Sah! Drill into the path to get a greeting for SW characters.');
});

module.exports = router;