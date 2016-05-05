var BoatingRequestUtil = require('../util/boating_request_api_util');

module.exports = {
  fetchBoatingRequests: function(){
    BoatingRequestUtil.fetchBoatingRequests();
  },

  post: function(posting){
    BoatingRequestUtil.post(posting);
  },

  cancel: function(id){
    BoatingRequestUtil.cancel(id);
  },

  update: function(id, newStatus){
    BoatingRequestUtil.update(id, newStatus);
  }
};
