var React = require('react');
var PostingClientActions = require('../actions/posting_client_actions');
var PostingStore = require('../stores/posting_store');
var PostConstants = require('../constants/posting_constants');

module.exports = React.createClass({
  getInitialState: function(){
    return {postings: []};
  },

  componentDidMount: function(){
    this.postingsListener = PostingStore.addListener(this.getPostings);
  },

  componentWillReceiveProps: function(nextProps){
    PostingClientActions.fetchPostings(nextProps.lake);
    this.setState({postings: PostingStore.all()});
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
            <button className="signUpForPosting">Request to Join</button>
            <li className="postingUser">{posting.user.username}</li>
            <li className="postingActivity"
            ><b>Activity: </b>{posting.activity} behind a {posting.boat_type} boat</li>
            <li className="postingTiming"
            ><b>On: </b>{date} from {startTime} until {endTime}</li>
            </ul></li>);
          }
      }.bind(this));
      return (<div className="postResults">
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
