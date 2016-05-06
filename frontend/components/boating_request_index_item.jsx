var React = require('react');
var PostingConstants = require ('../constants/posting_constants');
var CurrentUserState = require ('../mixins/current_user_state');
var BRClientActions = require('../actions/boating_request_client_actions');

module.exports = React.createClass({
  mixins: [CurrentUserState],

  date: function(){
    var date = this.props.BR.posting.start_time.slice(0,10);
    var year = date.slice(0,4);
    var month = PostingConstants.months[date.slice(5,7)];
    return month + " " + date.slice(8,10) + ", " + year;
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

  cancelReq: function(){
    BRClientActions.cancel(this.props.BR.id);
  },

  updateReq: function(e){
    if(e.target.innerHTML=== "Accept Request"){
      BRClientActions.update(this.props.BR.id, "Accepted");
    } else{
      BRClientActions.update(this.props.BR.id, "Declined");
    }
  },

  render: function(){
    if(this.props.match === "requester"){
      var username = this.props.BR.receiver.username;
      if(this.props.BR.status === "Pending"){
        var buttons = <div className="requests"><button className="random"
        onClick={this.cancelReq}>Cancel Request</button></div>;
      }
    } else if(this.props.match === "receiver"){
      username=this.props.BR.requester.username;
      if(this.props.BR.status=== "Pending"){
        buttons = <div className="requests"><button onClick={this.updateReq} className="random"
        >Accept Request</button> <button className="random"
        onClick={this.updateReq}>Decline Request</button></div>;
      }
    }
    if(this.props.BR.status === "Accepted"){
      buttons = <div className="requests"><button className="random"
      onClick={this.cancelReq}>Cancel Request</button></div>;
    }
    return(
      <li>
        <ul className="BRlist">
          <li><b>Date:</b> {this.date()}</li>
          <li><b>Time:</b> {this.startTime(this.props.BR.posting)} until {this.endTime(this.props.BR.posting)}</li>
          <li><b>Activity:</b> {this.props.BR.posting.activity} with {username}</li>
          <li><b>Location:</b> {this.props.BR.lake.name}</li>
          <li><div className="buttonsWrapper">{buttons}</div></li>
        </ul>
      </li>
    );
  }
});
