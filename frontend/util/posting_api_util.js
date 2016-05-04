var PostingServerActions = require('../actions/posting_server_actions');

module.exports = {
  fetchPostings: function(lake){
    $.ajax({
      type: "GET",
      url: "api/lakes/" + lake.id + "/postings",
      success: function(postings){
        PostingServerActions.fetchPostings(postings);
      }
    });
  },

  createPosting: function(newPosting){
    $.ajax({
      type: "POST",
      url: "api/lakes/" + newPosting.posting.lake_id + "/postings",
      data: newPosting,
      success: function(postings){
        this.fetchPostings(newPosting.posting.lake);
      }.bind(this),
      error: function(e){
        console.log(e);
      }
    });
  }
};
