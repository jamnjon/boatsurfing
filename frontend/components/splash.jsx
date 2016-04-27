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
    hashHistory.push("/register");
  },

  render: function(){
    if(this.state.currentUser){
      return(
        <div>
          <h1>Welcome to BoatSurfing, {this.state.currentUser.username}</h1>
          <h3>The Best Place for Boat Sharing</h3>
          <LakeSearch />
          <button onClick={this.logout}>Sign Out</button><br/><br/>
          <img width="100%" src="https://skiwinlockwatersdotcom.files.wordpress.com/2014/06/water-skiing1.jpg?w=1620" />
        </div>
      );
    }
    return(
      <div>
        <h1>Welcome to BoatSurfing</h1>
          <h3>The Best Place for Boat Sharing</h3>
          <button onClick={this.registerPage}>Sign up/Sign in</button>
      </div>
    );
  }
});
