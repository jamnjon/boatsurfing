var BoatingRequestServerActions =
  require('../actions/boating_request_server_actions');

module.exports = {
  fetchLakes: function(){
    $.ajax({
      type: "GET",
      url: "api/boating_requests",
      success: function(boatingRequests){
        BoatingRequestServerActions.fetchBoatingRequests(boatingRequests);
      }
    });
  }
};
