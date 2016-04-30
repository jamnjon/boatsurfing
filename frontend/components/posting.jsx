var React = require('react');
var PostingClientActions = require('../actions/posting_client_actions');
var PostingStore = require('../stores/posting_store');

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
    console.log(this.props);
  },

  componentWillUnmount: function(){
    this.postingsListener.remove();
  },

  getPostings: function(){
    this.setState({postings: PostingStore.all()});
  },

  render: function(){
    if(this.props.target){
      var lakePartners = [];
      this.state.postings.forEach(function(posting){
        if(posting.lake_id === this.props.lake.id &&
          posting.posting_type === this.props.target){
            var date = posting.start_time.slice(0,10);
            var startTime = posting.start_time.slice(11,16);
            var endTime = posting.end_time.slice(11,16);
            lakePartners.push(<li className="posting" key={posting.id}
            data-postId = {posting.id}>
            <ul className="postingResults">
            <li className="postingUser">{posting.user.username}</li>
            <li className="postingActivity"
            >Activity: {posting.activity} behind a {posting.boat_type} boat</li>
            <li className="postingTiming"
            >On: {date} from {startTime} until {endTime}</li>
            </ul></li>);
          }
      }.bind(this));
      return (<div className="postResults">
        {this.props.target} at {this.props.lake.name}:<br/><br/>
        {lakePartners.length} {this.props.target.toLowerCase()} found
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
