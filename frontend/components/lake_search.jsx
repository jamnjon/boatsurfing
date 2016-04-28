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

  componentWillUpdate: function(){

  },

  componentDidUpdate: function(){
    // this.lakes = this.getLakes();
    // console.log(this.lakes.forEach(function()))
    // this.lakeList = [];
    // if(this.lakes){
    //   this.lakes.forEach(function(lake){
    //     if(this.lakeList.length < 5){
    //       this.lakeList.push(<li
    //         data-lakeId={lake.id} key={lake.id}
    //         onClick={this.fillLakeName} lake={lake}
    //         >{lake.name}</li>);
    //     }
    //   }.bind(this));
    // }
  },

  fillLakeName: function(e){
    var lake = LakeStore.findById(e.target.attributes[0].value);
    // hashHistory.push('/lakes/' + lake.id);
    this.setState({lakeName: lake.name});
  },

  getLakes: function(){
    return LakeStore.find(this.state.lakeName);
  },

  updateLake: function(e){
    this.setState({lakeName: e.target.value});
  },


  render: function(){
    var lakes = this.getLakes();
    var lakesHTML;
    if(lakes.length > 0){
      lakesHTML = lakes.map(function(lake){
        return <li data-lakeId={lake.id} key={lake.id} onClick={this.fillLakeName} lake={lake}>{lake.name}</li>;
      });
    }  else{
      lakesHTML="";
    }

    return (
      <div>
        <form>
          <select>
            <option value="find_host">Find Host</option>
            <option value="find_guest">Find Guest</option>
          </select>
          <label> Lake:
            <input type="text" placeholder="Lake Name Here" onChange={this.updateLake} value={this.state.lakeName} />
          </label>
        </form>
        <ul>{lakesHTML}</ul>
      </div>
    );
  }
});
