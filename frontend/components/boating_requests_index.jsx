var React = require('react');
var BRStore = require('../stores/boating_request_store');
var BRClientActions = require('../actions/boating_request_client_actions');
var CurrentUserState = require ('../mixins/current_user_state');
var BRIndexItem = require ('./boating_request_index_item');

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
      if(boatReq.receiver.username === this.state.currentUser){
        reqList.push(<BRIndexItem BR={boatReq} key={boatReq.id}
          match="receiver" status={boatReq.status}/>);
        if(boatReq.status === "Pending"){
          pendingReqList.push(<BRIndexItem BR={boatReq} key={boatReq.id}
            match="receiver" status={boatReq.status}/>);
        } else if(boatReq.status === "Accepted"){
          acceptedReqList.push(<BRIndexItem BR={boatReq} key={boatReq.id}
            match="receiver" status={boatReq.status}/>);
        } else if(boatReq.status === "Declined"){
          pendingReqList.push(<BRIndexItem BR={boatReq} key={boatReq.id}
            match="receiver" status={boatReq.status}/>);
        }
      } else if(boatReq.requester.username === this.state.currentUser.username){
          reqList.push(<BRIndexItem BR={boatReq} key={boatReq.id}
            match="requester" status={boatReq.status}/>);
          if(boatReq.status === "Pending"){
            pendingReqList.push(<BRIndexItem BR={boatReq} key={boatReq.id}
              match="requester" status={boatReq.status}/>);
          } else if(boatReq.status === "Accepted"){
            acceptedReqList.push(<BRIndexItem BR={boatReq} key={boatReq.id}
              match="requester" status={boatReq.status}/>);
          } else if(boatReq.status === "Declined"){
            pendingReqList.push(<BRIndexItem BR={boatReq} key={boatReq.id}
              match="requester" status={boatReq.status}/>);
          }
        }
      }.bind(this));
    }
    this.setState(
      {
        ownedRequests: reqList,
        pendingRequests: pendingReqList,
        acceptedRequests: acceptedReqList,
        declinedRequests: declinedReqList
      });
  },



  render: function(){
    if(this.state.approvedRequests.length === 0){
      var appReq = "";
    } else {
      appReq = <div className="approvedReqs"
      >Approved: <br/><ul>{this.state.approvedRequests}</ul>
      <br/><br/></div>;
    }
    if(this.state.pendingRequests.length === 0){
      var pendReq = "";
    } else {
      pendReq = <div className="pendingReqs"
      >Pending: <br/>
      <ul>{this.state.pendingRequests}</ul>
      <br/><br/></div>;
    }
    if(this.state.declinedRequests.length === 0){
      var decReq = "";
    } else {
      decReq = <div className="declinedReqs"
      >Declined: <br/><ul>{this.state.declinedRequests}</ul></div>;
    }
    return(
      <div className="reqs">{appReq}
      {pendReq}
      {decReq}
      </div>
    );
  }
});
