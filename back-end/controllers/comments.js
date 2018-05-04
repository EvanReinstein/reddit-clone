var models = require('../models');
var Comment = models.Comment;
var TextPost = models.TextPost;

function create(req, res) {
  // your code here
}

function update(req, res) {
    console.log('****', req.body);
    Comment.findByIdAndUpdate(req.params.comment_id, 
      {$set: req.body}, function(err, comment){
      if (err) res.send(err);
      else res.json(comment);
    });
  }

function destroy(req, res) {
  // OPTIONAL: your code here
}

module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;