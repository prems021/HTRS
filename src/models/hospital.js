var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: {type :String,default:'hi'}, date:{ type: Date, default: Date.now } }],
  date: { type: Date, default: Date.now },
  hidden:{ type: Boolean, default: false },
  meta: {
    votes: { type: Number, default: 10 },
    favs:  { type : Number, default: 5}
  }
});

blogSchema.statics.findauthor = function(author1) {
     console.log(author1);
 return this.find({author: author1 })  

 
};

var blogSchema = mongoose.model('blog', blogSchema);
module.exports = {
  Blogs: blogSchema
};
