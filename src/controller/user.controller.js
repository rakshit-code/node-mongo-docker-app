import User from "../model/user.model.js";

export const getUser=async(req,res)=>{
    try {
        const users=await User.find({});
        res.status(200).send(users)
    } catch (error) {
        console.error(error);
    }
}

export const addUser=async(req,res)=>{
    try {
        const user = new User(req.body);
        await user.save();
        res.status(200).send('user created')
    } catch (error) {
        console.error(error);
    }
}

export const updateUser=async(req,res)=>{
    try {
        res.status(200).send(`updated users by ${req.params._id}`)
    } catch (error) {
        console.error(error);
    }
}

export const deleteUser=async(req,res)=>{
try {
    const id=req.params._id
    res.status(200).send(`delete users by ${id}`)
} catch (error) {
    console.error(error);
}
}

export default {
    getUser,addUser,updateUser,deleteUser
}