var React = require ('react');
var hashHistory = require('react-router').hashHistory;
var UserActions = require("../actions/user_actions");
var CurrentUserState = require("../mixins/current_user_state");
var Modal = require('react-modal');
var LoginForm = require('./LoginForm');
var LakeSearch = require('./lake_search');

module.exports = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function(){
    return({modalOpen: false, includeLakeSearch: false});
  },
  componentWillReceiveProps: function(nextProps){
    if(nextProps.path === '/'){
      this.setState({includeLakeSearch: false});
    } else {
      this.setState({includeLakeSearch: true});
    }
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
    this.setState({modalOpen: false});
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
          <li className="liInUpOut"><button className="inUpOut" onClick={this.out}>Log Out</button></li>
        </ul>
      );
    }
    return (
      <ul className="navBar">
        <li> <button onClick={this.homeButton} className="homeButton">BoatSurfing</button></li>
        {ls}
        <li className="liInUpOut"><button className="inUpOut" onClick={this.openModal}>Join or Log in</button>
        <Modal className="modal" isOpen={this.state.modalOpen} onRequestClose={this.closeModal}>
        <div className="closeModal" onClick={this.closeModal}>X</div>
          <LoginForm modalCloseMethod={this.closeLoginModal}/>
        </Modal></li>

      </ul>
    );
  }
});
