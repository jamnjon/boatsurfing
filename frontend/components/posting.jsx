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
  },

  componentWillUnmount: function(){
    this.postingsListener.remove();
  },

  getPostings: function(){
    PostingStore.all();
  },

  render: function(){
    if(this.props.target){
      return (<div>
        {this.props.target} at {this.props.lake.name}: </div>);
    }
    return(
      <div>
        Go Sharks!
      </div>
    );
  }
});
