var React = require('react');
var hashHistory = require('react-router').hashHistory;
var CurrentUserState = require("../mixins/current_user_state");

module.exports=React.createClass({
  registerPage: function(e){
    e.preventDefault();
    hashHistory.push("/register");
  },

  render: function(){
    return(
      <div>
        <h1>Welcome to BoatSurfing</h1>
          <h3>The Best Place for Boat Sharing</h3>
          <button onClick={this.registerPage}>Sign up/Sign in</button>
      </div>
    );
  }
});
