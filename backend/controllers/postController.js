const Post = require('../models/Post');

// Get all Posts
exports.getAllPosts = async (req,res,next)=>{
   try {
       const posts = await Post.find({}).populate('author','name').select('content createdAt');
       res.status(200).json({
           status: 'success',
           result: posts.length,
           data:{posts}
       })
   } catch (error) {
       res.json(error)
   }
}

// Create One Posts

exports.createOnePost = async (req,res,next)=>{
    try {
    const { userId } = req.user;
      const post = await Post.create({...req.body, author:userId.UserID});
        res.status(200).json({
            status: 'success',
            data: {post}
        })
        // res.json('Create already running');
    } catch (error) {
        next(error);
    }
 }
 exports.updateOnePost = async (req,res,next)=>{
    try {
        const {postId} = req.params;
        const post = await Post.findByIdAndUpdate(postId,{...req.body},{new: true, runValidator: true});
        res.status(200).json({
            status: 'success',
            data:{post}
        })
    } catch (error) {
        next(error);
    }
 }
 exports.deleteOnePost = async (req,res,next)=>{
    try {
        const {postId} = req.params;
        const post = await Post.findByIdAndDelete(postId);
        res.status(200).json({
            status: 'success',
            message: 'Post deleted'
        })
    } catch (error) {
        next(error);
    }
 }