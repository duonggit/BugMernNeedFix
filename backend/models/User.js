const mongoose = require('mongoose');
const brypt = require('bcryptjs');
// Create User Database / Unique = Tránh Trùng lặp 
const userSchema = new mongoose.Schema({
    name:{
        type: String, 
        unique: true, 
        trim: true, 
        required: 
            [true, 'Name Must Be required']
        },
    email:{
        type: String, 
        unique:true, 
        trim: true, 
        required: 
            [true, 'Email Must Be required']
        },
    password:{
        type: String, 
        trim:true, 
        required:
            [true, 'Password must be required'],
            minlength:
                [6,'Password must be at least 6 characters']
        },
},{
    timestamps: true
})

// Encrypt Password with Bcrypt
userSchema.pre('save',function(next){
    let user = this;
    brypt.hash(user.password,10,function(error,hash){
        if(error){
            return next(error);
        }else{
            user.password = hash;
            next();
        }
    })
})

// Create Model
const User = mongoose.model('User', userSchema);

module.exports = User;