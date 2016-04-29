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
  }
};
