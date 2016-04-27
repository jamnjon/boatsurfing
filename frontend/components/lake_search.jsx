var React = require('react');
var hashHistory = require('react-router').hashHistory;
var LakeClientActions = require('../actions/lake_client_actions');
var LakeStore = require('../stores/lake_store');

module.exports = React.createClass({
  getInitialState: function(){
    return({lakeName: "", lakes: []});
  },

  componentDidMount: function(){
    var lakesListener = LakeStore.addListener(this.getLakes);
    LakeClientActions.fetchLakes();
  },

  componentDidUpdate: function(){
    this.lakes = this.getLakes();
  },

  getLakes: function(){
    return LakeStore.find(this.state.lakeName);
  },

  updateLake: function(e){
    this.setState({lakeName: e.target.value});
  },

  handleSubmit: function(e){
    e.preventDefault();
  },

  render: function(){

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select>
            <option value="find_traveller">Find Traveller</option>
            <option value="find_host">Find Host</option>
          </select>
          <label> Lake:
            <input type="text" placeholder="Lake Name Here" onChange={this.updateLake} value={this.state.lakeName} />
          </label>
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
});
