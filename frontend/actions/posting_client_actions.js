var PostingsUtil = require('../util/posting_api_util');

module.exports = {
  fetchPostings: function(lake){
    PostingsUtil.fetchPostings(lake);
  },

  createPosting: function(newPost){
    console.log("clientActions");
    PostingsUtil.createPosting(newPost);
  }
};
