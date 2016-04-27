var React = require("react");
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserActions = require("../actions/user_actions");
var CurrentUserState = require("../mixins/current_user_state");

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
    this.setState({username: "I_Should_Hire_Jon", password: "password"});
  },
	logout: function(e){
		e.preventDefault();
		UserActions.logout();
    this.setState({username: "", password: ""});
	},
	greeting: function(){
		if (!this.state.currentUser) {
			return;
		}
		return (
			<div>
				<h2>Hi, {this.state.currentUser.username}!</h2>
				<input type="submit" value="logout" onClick={this.logout}/>
			</div>
		);
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
				<form onSubmit={this.handleSubmit}>
					<section>
						<label> Username:
							<input type="text" value={this.state.username} onChange = {this.changeUsername}/>
						</label>

						<label> Password:
							<input type="password" value={this.state.password} onChange = {this.changePassword}/>
						</label>
					</section>

					<section>
						<label> Login
							<input type="Radio" name="action" value="login" onChange={this.setForm}/>
						</label>

						<label> Sign Up
							<input type="Radio" name="action" value="signup" onChange={this.setForm}/>
						</label>

					</section>

					<input type="Submit"/>
          <button type="reset" onClick={this.guest}>Log In As Guest
          </button>
				</form>
		);
	},
	render: function(){
		return (
			<div id="login-form">
				{this.greeting()}
				{this.errors()}
				{this.form()}
			</div>
		);
	}
});

module.exports = LoginForm;
