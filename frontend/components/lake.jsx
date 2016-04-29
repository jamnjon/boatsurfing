var React = require ('react');
var LakeStore = require ('../stores/lake_store');
var LakeClientActions = require('../actions/lake_client_actions');
var LakeSearch = require('./lake_search');
var Postings = require('./posting');


module.exports = React.createClass({
  getInitialState: function(){
    var target=this.props.location.search[3];
    if(target==='g'){
      target = 'Guests';
    } else if(target === 'h'){
      target = 'Hosts';
    }
    return {lake: "", target: target};
  },

  componentDidMount: function(){
    LakeStore.addListener(this.lakeState);
    LakeClientActions.fetchLakes();
  },

  componentWillReceiveProps: function(nextProps){
    var lake = LakeStore.findById(nextProps.params.lakeId);
    this.setState({lake: lake});
  },

  lakeState: function(){
    var lake = LakeStore.findById(this.props.params.lakeId);
    this.setState({lake: lake});
  },

  render: function(){
    return (
      <div>
      <div className="lakeSearch" >
      <LakeSearch className="searchBox"/>
      </div>
        <Postings target={this.state.target} lake={this.state.lake}/>
      </div>
    );
  }
});