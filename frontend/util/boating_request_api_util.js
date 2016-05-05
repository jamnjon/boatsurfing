var BoatingRequestServerActions =
  require('../actions/boating_request_server_actions');

module.exports = {
  fetchBoatingRequests: function(){
    $.ajax({
      type: "GET",
      url: "api/boating_requests",
      success: function(boatingRequests){
        BoatingRequestServerActions.fetchBoatingRequests(boatingRequests);
      }
    });
  },

  post: function(posting){
    $.ajax({
      type: "POST",
      url: "api/boating_requests",
      data: {boating_request: posting},
      success: function(){
        this.fetchBoatingRequests();
      }.bind(this)
    });
  },

  update: function(id, newStatus){
    $.ajax({
      type: "PATCH",
      url: "api/boating_requests/"+ id,
      data: {boating_request: {status: newStatus}},
      success: function(){
        this.fetchBoatingRequests();
      }.bind(this)
    });
  },

  cancel: function(id){
    $.ajax({
      type: "DELETE",
      url: "api/boating_requests/" + id,
      success:function(){
        this.fetchBoatingRequests();
      }.bind(this)
    });
  }
};
