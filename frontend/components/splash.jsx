var React = require('react');
var hashHistory = require('react-router').hashHistory;
var UserActions = require("../actions/user_actions");
var LakeSearch = require("./lake_search");

module.exports=React.createClass({


  render: function(){
      return(
        <div className="splashImg">

          <h3 className="overSplashImg">Because of the Implications</h3>
          <div className="searchBox"><LakeSearch /></div>
        </div>
      );
  }
});
