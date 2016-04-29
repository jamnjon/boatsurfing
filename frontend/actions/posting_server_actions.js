var AppDispatcher = require('../dispatcher/dispatcher.js');

module.exports = {
  fetchPostings: function(postings){
    AppDispatcher.dispatch({
      actionType: "RECEIVE_POSTINGS",
      postings: postings
    });
  }
};
