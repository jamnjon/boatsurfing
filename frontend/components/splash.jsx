var React = require('react');
var hashHistory = require('react-router').hashHistory;
var UserActions = require("../actions/user_actions");
var CurrentUserState = require("../mixins/current_user_state");
var LakeSearch = require("./lake_search");

module.exports=React.createClass({
  mixins: [CurrentUserState],

  registerPage: function(){
    hashHistory.push("/register");
  },


  logout: function(e){
    e.preventDefault();
    UserActions.logout();
  },

  render: function(){
      return(
        <div className="splashImg">
        <img className="splashPic" width="100%" src=
        "https://d1w5usc88actyi.cloudfront.net/wp-content/uploads/2011/02/Patrick-Hall-Wakeboard-Tube-21.jpg" />
          <h3 className="overSplashImg">The Best Place for Boat Sharing</h3>
          <h4 className="searchBox"><LakeSearch /></h4>

        </div>
      );
  }
});
