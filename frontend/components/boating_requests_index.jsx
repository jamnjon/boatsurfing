var React = require('react');
var BRStore = require('../stores/boating_request_store');
var BRClientActions = require('../actions/boating_request_client_actions');
var BRIndexItem = require ('./boating_request_index_item');
var CurrentUserState = require('../mixins/current_user_state');

module.exports = React.createClass({
  mixins: [CurrentUserState],

  getInitialState: function(){
    return (
      {
        requests: [],
        ownedRequests: [],
        pendingRequests: [],
        approvedRequests: [],
        declinedRequests: []
      }
    );
  },

  componentDidMount: function(){
    this.brListener = BRStore.addListener(this.BRs);
    BRClientActions.fetchBoatingRequests();
  },

  componentWillUnmount: function(){
    this.brListener.remove();
  },

  BRs: function(){
    this.setState({requests: BRStore.all()});
    this.ownedRequests();
  },

  ownedRequests: function(){
    var reqList = [];
    var pendingReqList = [];
    var acceptedReqList = [];
    var declinedReqList = [];

    if(this.state.currentUser){
      this.state.requests.forEach(function(boatReq){
      if(boatReq.receiver.username === this.state.currentUser.username){
        reqList.push(<BRIndexItem BR={boatReq} key={boatReq.id}
          match="receiver" user={this.state.currentUser}
          status={boatReq.status}/>);
        if(boatReq.status === "Pending"){
          pendingReqList.push(<BRIndexItem BR={boatReq} key={boatReq.id}
            match="receiver" user={this.state.currentUser}
            status={boatReq.status}/>);
        } else if(boatReq.status === "Accepted"){
          acceptedReqList.push(<BRIndexItem BR={boatReq} key={boatReq.id}
            match="receiver" user={this.state.currentUser}
            status={boatReq.status}/>);
        } else if(boatReq.status === "Declined"){
          declinedReqList.push(<BRIndexItem BR={boatReq} key={boatReq.id}
            match="receiver" user={this.state.currentUser}
            status={boatReq.status}/>);
        }
      } else if(boatReq.requester.username === this.state.currentUser.username){
          reqList.push(<BRIndexItem BR={boatReq} key={boatReq.id}
            match="requester" user={this.state.currentUser}
            status={boatReq.status}/>);
          if(boatReq.status === "Pending"){
            pendingReqList.push(<BRIndexItem BR={boatReq} key={boatReq.id}
              match="requester" user={this.state.currentUser}
              status={boatReq.status}/>);
          } else if(boatReq.status === "Accepted"){
            acceptedReqList.push(<BRIndexItem BR={boatReq} key={boatReq.id}
              match="requester" user={this.state.currentUser}
              status={boatReq.status}/>);
          } else if(boatReq.status === "Declined"){
            declinedReqList.push(<BRIndexItem BR={boatReq} key={boatReq.id}
              match="requester" user={this.state.currentUser}
              status={boatReq.status}/>);
          }
        }
      }.bind(this));
    }
    this.setState(
      {
        ownedRequests: reqList,
        pendingRequests: pendingReqList,
        approvedRequests: acceptedReqList,
        declinedRequests: declinedReqList
      });
  },

  render: function(){
    if(this.state.approvedRequests.length === 0){
      var appReq = "";
    } else {
      appReq = <div className="approvedReqs"
      ><b className="BRState">Accepted:</b> <br/><ul>{this.state.approvedRequests}</ul>
      <br/><br/></div>;
    }
    if(this.state.pendingRequests.length === 0){
      var pendReq = "";
    } else {
      pendReq = <div className="pendingReqs"
      ><b className="BRState">Pending:</b> <br/>
      <ul>{this.state.pendingRequests}</ul>
      <br/><br/></div>;
    }
    if(this.state.declinedRequests.length === 0){
      var decReq = "";
    } else {
      decReq = <div className="declinedReqs"
      ><b className="BRState">Declined:</b> <br/><ul>{this.state.declinedRequests}</ul></div>;
    }

    return(
      <div className="reqs">{appReq}
      {pendReq}
      {decReq}
      </div>
    );
  }
});
