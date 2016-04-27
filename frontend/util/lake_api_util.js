var LakeServerActions = require('../actions/lake_server_actions');

module.exports = {
  fetchLakes: function(){
    $.ajax({
      type: "GET",
      url: "api/lakes",
      success: function(lakes){
        LakeServerActions.fetchLakes(lakes);
      }
    });
  }
};
