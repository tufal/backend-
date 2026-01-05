import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import {Schema} from 'mongoose';


const userShema = new Schema({
   username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true
   },
   email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
   },
   fullname:{
        type:String,
    required:true,
     index:true,
    trim:true,
   },
   avatar:{
    type:String,
    required:true,

   },
    coverimage:{
    type:String,

    },
    watchhistory:[
        {
            type:Schema.Types.ObjectId,
            ref:'Video'
        }
    ],passwoard:{
    type:String,
    required:[true,"Passwoard is required"],
    },
    refreshtoken:{
    type:String,
    }
},{timestamps:true});

userShema.pre("save",async function(next){
if(this.isModified("passwoard")) return next();
    

    this.passwoard = bcrypt.hash(this.passwoard,10);
next();
})
UserSchema.methods.comparePasswoard = async function(passwoard){
    return await bcrypt.compare(passwoard,this.passwoard);
}
userShema.methods.generateAccessToken = function(){
    return jwt.sign(
        {userId:this._id,username:this.username},   
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:process.env.ACESS_TOKEN_EXPIRY}
    );
}
UserSchema.methods.refreshtoken = function(){
    return jwt.sign(
        {userId:this._id,username:this.username}, 
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:process.env.REFRESH_TOKEN_EXPIRY}
    )}

export const User = mongoose.model('User', userShema);