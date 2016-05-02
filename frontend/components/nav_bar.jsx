var React = require ('react');
var hashHistory = require('react-router').hashHistory;
var UserActions = require("../actions/user_actions");
var CurrentUserState = require("../mixins/current_user_state");
var Modal = require('react-modal');

module.exports = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function(){
    return({modalOpen: false});
  },

	openModal: function(){
		this.setState({modalOpen: true});
	},

	closeModal: function(){
		this.setState({modalOpen: false});
	},

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
    console.log(this.state.modalOpen);
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
        <li><button className="inUpOut" onClick={this.openModal}>Join or Log in</button>
        <Modal className="modal" isOpen={this.modalOpen} onRequestClose={this.closeModal}>
          <form><button>Modal working!</button></form>
        </Modal></li>

      </ul>
    );
  }
});
