var React = require('react');
var PostingClientActions = require('../actions/posting_client_actions');
var PostingStore = require('../stores/posting_store');
var PostConstants = require('../constants/posting_constants');
var BRClientActions = require('../actions/boating_request_client_actions');
var CurrentUserState = require('../mixins/current_user_state');
var Modal = require('react-modal');
var BoatingRequestIndex = require('./boating_requests_index');
var LoginForm = require('./LoginForm');


module.exports = React.createClass({
  mixins: [CurrentUserState],

  getInitialState: function(){
    return {postings: [], modalOpen: false, loginModalOpen: false};
  },

	openModal: function(){
		this.setState({modalOpen: true});
	},

	closeModal: function(){
		this.setState({modalOpen: false});
	},

  openLoginModal: function(){
    this.setState({loginModalOpen: true});
  },

  closeLoginModal: function(){
    this.setState({loginModalOpen: false});
  },

  componentDidMount: function(){
    this.postingsListener = PostingStore.addListener(this.getPostings);
  },

  componentWillReceiveProps: function(nextProps){
    PostingClientActions.fetchPostings(nextProps.lake);
    this.setState({postings: PostingStore.all()});
  },

  componentDidUpdate: function(){
    if(this.state.currentUser && this.state.loginModalOpen){
      this.setState({loginModalOpen: false});
    }
  },

  componentWillUnmount: function(){
    this.postingsListener.remove();
  },

  getPostings: function(){
    this.setState({postings: PostingStore.all()});
  },

  date: function(posting){
    var month = PostConstants.months[posting.end_time.slice(5,7)];
    var day = posting.start_time.slice(8,10);
    return (month + " " + day + ", " + posting.start_time.slice(0,4));
  },

  startTime: function(posting){
    var startHour = parseInt(posting.start_time.slice(11,13));
    var ampm = " am";
    if(startHour === 12){
      ampm = " pm";
    }
    return (startHour + posting.start_time.slice(13,16) + ampm);
  },

  endTime: function(posting){
    var endHour = parseInt(posting.end_time.slice(11,13));
    var ampm = "am";
    if (endHour > 12){
      endHour -= 12;
      ampm = "pm";
    }
    if(endHour === 12){
      ampm = "pm";
    }
    var min = posting.end_time.slice(13,16);
    return (endHour + min + " " + ampm);
  },

  request: function(posting, e){
    if(!this.state.currentUser){
      this.openLoginModal();
    } else{
      BRClientActions.post(
        {
          status: "Pending",
          posting_id: posting.id,
          receiving_user_id: posting.user.id,
          sending_user_id: this.state.currentUser.id
        });
        this.openModal();
      }
  },

  render: function(){
    if(this.props.target){
      var lakePartners = [];
      this.state.postings.forEach(function(posting){
        if(posting.lake_id === this.props.lake.id &&
          posting.posting_type === this.props.target){
            var date = this.date(posting);
            var startTime = this.startTime(posting);

            var endTime = this.endTime(posting);
            lakePartners.push(<li className="posting" key={posting.id}
            data-postId = {posting.id}>
            <ul className="postingResults">
            <button className="signUpForPosting"
            onClick={this.request.bind(this, posting)}>Request to Join</button>
            <li className="postingUser">{posting.user.username}</li>
            <li className="postingActivity"
            ><b>Activity: </b>{posting.activity} behind a {posting.boat_type} boat</li>
            <li className="postingTiming"
            ><b>On: </b>{date} from {startTime} until {endTime}</li>
            </ul></li>);
          }
      }.bind(this));
      return (<div className="postResults">
      <Modal className="BRModal" isOpen={this.state.modalOpen} onRequestClose={this.closeModal}>
      <div className="closeModal" onClick={this.closeModal}>X</div>
        <BoatingRequestIndex />
      </Modal>
      <Modal className="modal" isOpen={this.state.loginModalOpen} onRequestClose={this.closeLoginModal}>
        <div classname="closeModal" onClick={this.closeLoginModal}>X</div>
        <LoginForm modalCloseMethod={this.closeModal} modalOpen={this.state.loginModalOpen}/>
      </Modal>
        {this.props.target} at {this.props.lake.name}:<br/><br/>
        {lakePartners.length} {this.props.target.toLowerCase()} found:
        <ul className="postList">{lakePartners}</ul>
        </div>);

    }
    return(
      <div>
        Go Sharks!
      </div>
    );
  }
});
