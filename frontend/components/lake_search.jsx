var React = require('react');
var hashHistory = require('react-router').hashHistory;
var LakeClientActions = require('../actions/lake_client_actions');
var LakeStore = require('../stores/lake_store');

module.exports = React.createClass({
  getInitialState: function(){
    return({lakeName: "", lakes: [], query: "h"});
  },

  componentDidMount: function(){
    this.lakesListener = LakeStore.addListener(this.getLakes);
    LakeClientActions.fetchLakes();
  },

  componentWillUnmount: function(){
    this.lakesListener.remove();
  },

  fillLakeName: function(e){
    var lake = LakeStore.findById(e.target.attributes[1].value);
    this.setState({lakeName: ""});
    hashHistory.push({pathname: '/lakes/' + lake.id, query: this.state.query});
  },

  getLakes: function(){
    return LakeStore.find(this.state.lakeName);
  },

  updateLake: function(e){
    this.setState({lakeName: e.target.value});
  },

  changeSelected: function(e){
    if(e.target.value==="find_guest"){
      this.setState({query: "g"});
    } else{
      this.setState({query: 'h'});
    }
  },

  random: function(){
    var num=Math.floor(Math.random()*8)+1;
    this.setState({lakeName: ""});
    hashHistory.push({pathname: '/lakes/' + num, query: this.state.query});
  },

  render: function(){
    var lakes = this.getLakes();
    var lakeList = [];
    if(lakes.length > 0){
      lakes.forEach(function(lake){
        if(lakeList.length < 5){
          lakeList.push(<li className="lakeListItem" data-lakeId={lake.id} key={lake.id} lake={lake}>{lake.name}</li>);
        }
      });
    }  else{
      lakeList="";
    }

    return (
      <div>
        <form>
          <select onChange={this.changeSelected}>
            <option value="find_host">Find Host</option>
            <option value="find_guest">Find Guest</option>
          </select>
          <label> Lake:
            <input className="lakeSearchBox" type="text"
            placeholder="Lake Name Here"
            onChange={this.updateLake} value={this.state.lakeName} />
          </label>
          <button className="random" onClick={this.random}>Random Lake</button>
        </form>
        <ul className="lakeSearchList" onClick={this.fillLakeName}
        >{lakeList}</ul>
      </div>
    );
  }
});
