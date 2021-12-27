const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.getCurrentUser = async (req,res,next) => {
    try {
        const data = { user : null };
        if (req.user) {
            const user = await User.findOne({ _id: req.user.UserId });
            data.user = { userName : user.name};
        }
        res.status(200).json({
            status:"success",
            data: data,
        });
    } catch(error){
        res.json(error);
    }
};
