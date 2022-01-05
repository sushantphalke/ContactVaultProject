const { Router } = require('express');
const express = require('express');
const router = express.Router();
const { body, validationResult, check } = require('express-validator');

const User = require('../models/User');

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
    '/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Email is required').isEmail(),
        check(
            'password',
            'Valid Password is required with min 6 characters'
        ).isLength({ min: 6 }),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        res.send('passed');
    }
);
// res.send(req.body);

module.exports = router;
