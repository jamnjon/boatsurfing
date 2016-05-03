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
  },

  post: function(posting){
    console.log(posting);
    $.ajax({
      type: "POST",
      url: "api/boating_requests",
      data: {boating_request: posting},
      success: function(doodad){
        console.log(doodad);
      },
      error: function(error){
        console.log(error);
      }
    });
  }
};
