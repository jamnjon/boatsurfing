var React = require ('react');
var hashHistory = require('react-router').hashHistory;
var UserActions = require("../actions/user_actions");
var CurrentUserState = require("../mixins/current_user_state");

module.exports = React.createClass({
  mixins: [CurrentUserState],

  homeButton: function(){
    hashHistory.push("/");
  },

  inUp: function(){
    hashHistory.push("/register");
  },

  out: function(){
    UserActions.logout();
  },

  render: function(){
    if(this.state.currentUser){
      return(
        <ul className="navBar">
          <li> <button onClick={this.homeButton} className="homeButton">BoatSurfing</button></li>
          <li className="liInUpOut"><button className="inUpOut" onClick={this.out}>Log Out</button></li>
        </ul>
      );
    }
    return (
      <ul className="navBar">
        <li> <button onClick={this.homeButton} className="homeButton">BoatSurfing</button></li>
        <li><button className="inUpOut" onClick={this.inUp}>Join or Log in</button></li>

      </ul>
    );
  }
});
