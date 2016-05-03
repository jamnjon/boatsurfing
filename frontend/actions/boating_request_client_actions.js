var BoatingRequestUtil = require('../util/boating_request_api_util');

module.exports = {
  fetchBoatingRequests: function(){
    BoatingRequestUtil.fetchLakes();
  },

  post: function(posting){
    BoatingRequestUtil.post(posting);
  }
};
