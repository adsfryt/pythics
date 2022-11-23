import mongoose from 'mongoose'

const Post = new mongoose.Schema({
    name:{type: String,required:true},
    author:{type: String,required:true},
    text:{type: String,required:true},
    date:{type: String,required:true},
    answerid:{type: String},
    answertxt:{type: String},
    answerauthor:{type: String},
    })

const src = new mongoose.Schema({
    text:{type: String,required:true},
})

export default mongoose.model('Post', Post)