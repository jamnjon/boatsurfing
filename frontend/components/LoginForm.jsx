var React = require("react");
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserActions = require("../actions/user_actions");
var CurrentUserState = require("../mixins/current_user_state");
var hashHistory = require('react-router').hashHistory;
var Modal = require('react-modal');
var LoginForm = React.createClass({
	mixins: [LinkedStateMixin, CurrentUserState],
	getInitialState: function(){
		return {form: "login", username: "", password: ""};
	},

	setForm: function(e){
		this.setState({form: e.currentTarget.value});
	},
	handleSubmit: function(e){
		e.preventDefault();
		UserActions[this.state.form]({
			username: this.state.username,
			password: this.state.password
		});
	},
  guest: function(){
    UserActions.guestLogin();
		this.setState({username: "Guest", password: "password"});
  },

	logout: function(e){
		e.preventDefault();
		UserActions.logout();
    this.setState({username: "", password: ""});
	},

  changeUsername: function(e){
    this.setState({username: e.target.value});
  },

  changePassword: function(e){
    this.setState({password: e.target.value});
  },

	errors: function(){
		if (this.state.userErrors=== undefined){
			return;
		}
		var self = this;
		return (<ul>
		{
			Object.keys(this.state.userErrors).map(function(key, i){
				return (<li key={i}>{self.state.userErrors[key]}</li>);
			})
		}
		</ul>);
	},
	form: function(){
		if (this.state.currentUser) {
			return;
		}
		return(
				<form onSubmit={this.handleSubmit} className="modalForm">
					<section>
						<label> Username:<br/>
							<input type="text" value={this.state.username}
							onChange = {this.changeUsername}/>
						</label><br/><br/>

						<label> Password:<br/>
							<input type="password" value={this.state.password}
							onChange = {this.changePassword}/>
						</label><br/><br/>
					</section>

					<section className="radioButtons">
						<label className="radio"> Login
							<input type="Radio" name="action"
							value="login" onChange={this.setForm}/>
						</label>

						<label className="radio"> Sign Up
							<input type="Radio" name="action"
							value="signup" onChange={this.setForm}/>
						</label>

					</section>
					<br/><br/>
					<input className="random" defaultValue="Submit"
					type="Submit"/><br/><br/>
					<button className="random"
					type="reset" onClick={this.guest}>Log In As Guest
          </button>
				</form>
		);
	},
	render: function(){
		return (
			<div id="login-form">
				{this.errors()}
				{this.form()}
			</div>
		);
	}
});

module.exports = LoginForm;
