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
  switch(payload){
    case "RECEIVE_POSTINGS" :
      //TODO: ADD FUNCTION FOR UPDATING POSTING LIST
      PostingStore.__emitChange();
      break;
  }
};

module.exports = PostingStore;
