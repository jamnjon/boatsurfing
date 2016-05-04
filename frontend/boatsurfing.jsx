var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
//Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
//Components
var Splash = require('./components/splash');
var NavBar = require ('./components/nav_bar');
var Lake = require('./components/lake');
var PostingForm = require('./components/posting_form');
//Mixins
var CurrentUserState = require('./mixins/current_user_state');

var App = React.createClass({
  mixins: [CurrentUserState],
  render: function(){
    return (
      <div>
        <header><NavBar path={this.props.location.pathname}/></header>
        {this.props.children}
      </div>
    );
  }
});

var Router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Splash} />
      <Route path="lakes/:lakeId" component={Lake} />
      <Route path="test" component={PostingForm} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function(){
  Modal.setAppElement(document.body);
  var root = document.getElementById('root');
  ReactDOM.render(Router, root);
});
