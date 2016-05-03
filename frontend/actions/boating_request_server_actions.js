var AppDispatcher = require('../dispatcher/dispatcher.js');

module.exports = {
  fetchBoatingRequests: function(boatingRequests){
    AppDispatcher.dispatch({
      actionType: "RECEIVE_REQUESTS",
      boatingRequests: boatingRequests
    });
  }
};
