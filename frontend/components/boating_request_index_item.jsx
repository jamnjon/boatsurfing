var React = require('react');
var PostingConstants = require ('../constants/posting_constants');

module.exports = React.createClass({
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

  render: function(){
    return(
      <li>
        <ul className="BRlist">
          <li>{this.date()}</li>
          <li>{this.startTime(this.props.BR.posting)} until {this.endTime(this.props.BR.posting)}</li>
          <li>Activity: {this.props.BR.posting.activity} with {this.props.BR.receiver.username}</li>
          <li>Status: {this.props.status}</li>
        </ul>
      </li>
    );
  }
});
