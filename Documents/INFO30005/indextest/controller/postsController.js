
const posts = require('../models/postsArray');

module.exports.firstTest = function (req,res) {
    res.send('test complete');
};

module.exports.fetchPost = function(req,res){
    res.render('post',{post:posts});

}