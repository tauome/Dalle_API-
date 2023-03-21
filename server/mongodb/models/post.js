import mongoose from "mongoose";

const Post = new mongoose.Schema({
name: {type: String,  required: true},
prompt: {type: String,  required: true},
photo: {type: String,  required: true},
});

//create model out of schema 
const PostSchema = mongoose.model('Post', Post); 

export default PostSchema; 




