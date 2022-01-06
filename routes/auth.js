const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const bcrypt = require('bcryptjs/dist/bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
const { body, validationResult, check } = require('express-validator');
const auth = require('../middleware/auth');

const User = require('../models/User');

// @route   GET api/auth
// @desc    Get logged in user
// @access  Privet
router.get('/', auth, async (req, res) => {
    // res.send('Get logged in user');
   try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
   } catch (err) {
     console.error(err.message);
     res.status(500).send('Server Error');
   }
});

// @route   POST api/auth
// @desc    Auth User & get token
// @access  Public
router.post(
    '/',
    [
        check('email', 'Email is required').isEmail(),
        check('password', 'Valid Password is required ').exists(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            let user = await User.findOne({ email });
            if (!user) {
                return err.status(400).json({ msg: 'Invalid Credentails' });
            }

            const isMatched = await bcrypt.compare(password, user.password);

            if (!isMatched) {
                return err.status(400).json({ msg: 'Wrong Password' });
            }

            const payload = {
                user: {
                    id: user.id,
                },
            };

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                {
                    expiresIn: 360000,
                },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

module.exports = router;
