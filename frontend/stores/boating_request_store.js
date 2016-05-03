var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;

var BoatingRequestStore = new Store(AppDispatcher);
var _boatingRequests = {};

BoatingRequestStore.all = function(){
  return Object.keys(_boatingRequests).map(function(boatingRequestId){
    return _boatingRequests[boatingRequestId];
  });
};

BoatingRequestStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case "RECEIVE_REQUESTS" :
      _boatingRequests = {};
      payload.boatingRequests.forEach(function(boatingRequest){
        _boatingRequests[boatingRequest.id] = boatingRequest;
      });
      BoatingRequestStore.__emitChange();
      break;
  }
};

module.exports = BoatingRequestStore;
