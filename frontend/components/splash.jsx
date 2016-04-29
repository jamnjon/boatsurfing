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

          <h3 className="overSplashImg">Find WaterSports Buddies, Whether or Not You Own a Boat</h3>
          <h4 className="searchBox"><LakeSearch /></h4>

        </div>
      );
  }
});
