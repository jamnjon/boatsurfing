var React = require ('react');
var hashHistory = require('react-router').hashHistory;
var UserActions = require("../actions/user_actions");
var CurrentUserState = require("../mixins/current_user_state");
var Modal = require('react-modal');
var LoginForm = require('./LoginForm');
var LakeSearch = require('./lake_search');
var BR = require('./boating_requests_index');

module.exports = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function(){
    return({modalOpen: false, loginModalOpen: false, includeLakeSearch: false});
  },
  componentWillReceiveProps: function(nextProps){
    if(nextProps.path === '/'){
      this.setState({includeLakeSearch: false});
    } else {
      this.setState({includeLakeSearch: true});
    }
  },

	openLoginModal: function(){
		this.setState({loginModalOpen: true});
	},

	closeLoginModal: function(){
		this.setState({loginModalOpen: false});
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

  // inUp: function(){
  //   hashHistory.push("/register");
  // },

  out: function(){
    this.setState({loginModalOpen: false});
    UserActions.logout();
  },

  render: function(){
    if(this.state.includeLakeSearch){
      var ls = <li className="navBarSearch"><LakeSearch /></li>;
    } else {
      ls = "";
    }
    if(this.state.currentUser){
      return(
        <ul className="navBar">
          <li> <button onClick={this.homeButton} className="homeButton">BoatSurfing</button></li>
          {ls}
          <li className="userOptions"> <div className="options"
          >{this.state.currentUser.username}<span className="arrow-down"></span></div>
          <ul className="navBarUserOptions">
            <a className="inUpOut" onClick={this.out}>Log Out</a>
            <a className="inUpOut" onClick={this.openModal}
            >All Requests
            <Modal className="BRModal" isOpen={this.state.modalOpen} onRequestClose={this.closeModal}>
              <div className="closeModal" onClick={this.closeModal}>X</div>
              <BR />
            </Modal></a></ul></li>
        </ul>
      );
    }
    return (
      <ul className="navBar">
        <li> <button onClick={this.homeButton} className="homeButton">BoatSurfing</button></li>
        {ls}
        <li className="liInUpOut"><button className="inUpOut" onClick={this.openLoginModal}>Join or Log in</button>
        <Modal className="modal" isOpen={this.state.loginModalOpen} onRequestClose={this.closeLoginModal}>
        <div className="closeModal" onClick={this.closeLoginModal}>X</div>
          <LoginForm />
        </Modal></li>

      </ul>
    );
  }
});
