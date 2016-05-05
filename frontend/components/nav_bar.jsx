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
    return(
      {
        loginModalOpen: false,
        appModalOpen: false,
        pendModalOpen: false,
        decModalOpen: false,
        includeLakeSearch: false
      });
  },
  componentWillReceiveProps: function(nextProps){
    if(nextProps.path === '/'){
      this.setState({includeLakeSearch: false});
    } else {
      this.setState({includeLakeSearch: true});
    }
  },

	openLoginModal: function(){
    if(this.state.appModalOpen){
      this.closeAppModal();
    }
    if(this.state.pendModalOpen){
      this.closePendModal();
    }
    if(this.state.decModalOpen){
      this.closeDecModal();
    }
		this.setState({loginModalOpen: true});
	},

	closeLoginModal: function(){
		this.setState({loginModalOpen: false});
	},

  openAppModal: function(){
    if(this.state.loginModalOpen){
      this.closeLoginModal();
    }
    if(this.state.pendModalOpen){
      this.closePendModal();
    }
    if(this.state.decModalOpen){
      this.closeDecModal();
    }
    this.setState({appModalOpen: true});
  },

  closeAppModal: function(){
    this.setState({appModalOpen: false});
  },

  openPendModal: function(){
    if(this.state.appModalOpen){
      this.closeAppModal();
    }
    if(this.state.loginModalOpen){
      this.closeLoginModal();
    }
    if(this.state.decModalOpen){
      this.closeDecModal();
    }
    this.setState({pendModalOpen: true});
  },

  closePendModal: function(){
    this.setState({pendModalOpen: false});
  },

  openDecModal: function(){
    if(this.state.appModalOpen){
      this.closeAppModal();
    }
    if(this.state.pendModalOpen){
      this.closePendModal();
    }
    if(this.state.loginModalOpen){
      this.closeLoginModal();
    }
    this.setState({decModalOpen: true});
  },

  closeDecModal: function(){
    this.setState({decModalOpen: false});
  },

  homeButton: function(){
    hashHistory.push("/");
  },

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
          <li> <button onClick={this.homeButton}
          className="homeButton">BoatSurfing</button></li>
          {ls}
          <li className="userOptions"> <div className="options"
          >{this.state.currentUser.username}<span className="arrow-down"
          ></span></div>
          <ul className="navBarUserOptions">
            <a className="inUpOut" onClick={this.openAppModal}>Accepted Requests
            <Modal className="BRModal" isOpen={this.state.appModalOpen}
            onRequestClose={this.closeAppModal}>
              <div className="closeModal" onClick={this.closeAppModal}>X</div>
              <BR showType="app"/>
            </Modal></a>
            <a className="inUpOut" onClick={this.openPendModal}>Pending Requests
            <Modal className="BRModal" isOpen={this.state.pendModalOpen}
            onRequestClose={this.closePendModal}>
              <div className="closeModal" onClick={this.closePendModal}>X</div>
              <BR showType="pend"/>
            </Modal></a>
            <a className="inUpOut" onClick={this.openDecModal}>Declined Requests
            <Modal className="BRModal" isOpen={this.state.decModalOpen}
            onRequestClose={this.closeDecModal}>
              <div className="closeModal" onClick={this.closeDecModal}>X</div>
              <BR showType="dec"/>
            </Modal></a>
            <a className="inUpOut" onClick={this.out}>Log Out</a></ul></li>
        </ul>
      );
    }
    return (
      <ul className="navBar">
        <li> <button onClick={this.homeButton}
        className="homeButton">BoatSurfing</button></li>
        {ls}
        <li className="liInUpOut"><button className="random"
        onClick={this.openLoginModal}>Join or Log in</button>
        <Modal className="modal" isOpen={this.state.loginModalOpen}
        onRequestClose={this.closeLoginModal}>
        <div className="closeModal" onClick={this.closeLoginModal}>X</div>
          <LoginForm />
        </Modal></li>

      </ul>
    );
  }
});
