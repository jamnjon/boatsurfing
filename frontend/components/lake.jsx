var React = require ('react');
var LakeStore = require ('../stores/lake_store');
var LakeClientActions = require('../actions/lake_client_actions');


module.exports = React.createClass({
  getInitialState: function(){
    var target=this.props.location.search[3];
    if(target==='g'){
      target = 'guest';
    } else if(target === 'h'){
      target = 'host';
    }
    return {lake: "", target: target};
  },

  componentDidMount: function(){
    LakeStore.addListener(this.lakeState);
    LakeClientActions.fetchLakes();
  },

  lakeState: function(){
    var lake = LakeStore.findById(this.props.params.lakeId);
    this.setState({lake: lake});
  },

  render: function(){
    if(this.state.target === 'guest'){
      return(
        <div>
        <h3>Guests at {this.state.lake.name}:</h3>
        </div>
      );
    }
    return (
      <div>
        <h1>Hosts at {this.state.lake.name}</h1>
      </div>
    );
  }
});
