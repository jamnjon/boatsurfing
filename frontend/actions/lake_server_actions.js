var AppDispatcher = require('../dispatcher/dispatcher.js');

module.exports = {
  fetchLakes: function(lakes){
    AppDispatcher.dispatch({
      actionType: "RECEIVE_LAKES",
      lakes: lakes
    });
  }
};
