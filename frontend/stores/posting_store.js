var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var PostingStore = new Store(AppDispatcher);
var _postings = {};

PostingStore.all = function(){
  return Object.keys(_postings).map(function(postingId){
    return _postings[postingId];
  });
};

PostingStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case "RECEIVE_POSTINGS" :
      _postings = {};
      payload.postings.forEach(function(posting){
        _postings[posting.id] = posting;
    });
      PostingStore.__emitChange();
      break;
  }
};

module.exports = PostingStore;
