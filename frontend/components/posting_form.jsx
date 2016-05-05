var React = require('react');
var CurrentUserState = require('../mixins/current_user_state');
var PostingClientActions = require('../actions/posting_client_actions');


module.exports = React.createClass({
  mixins:[CurrentUserState],

  getInitialState: function(){
    return({
      posting_type: "",
      activity: "Wakeboarding",
      boat_type: "wakeboard",
      date: "",
      start_time: "",
      end_time: ""
    });
  },

  toggle: function(e){
    this.setState({posting_type: e.target.value});
  },

  changeBoatType: function(e){
    this.setState({boat_type: e.target.value});
  },

  changeActivity: function(e){
    this.setState({activity: e.target.value});
  },

  setDate: function(e){
    this.setState({date: e.target.value});
  },

  startTime: function(e){
    this.setState({start_time: e.target.value});
  },

  endTime: function(e){
    this.setState({end_time: e.target.value});
  },

  handleSubmit: function(e){
    e.preventDefault();
    PostingClientActions.createPosting(
      {
        posting:
        {
          activity: this.state.activity,
          posting_type: this.state.posting_type,
          boat_type: this.state.boat_type,
          date: this.state.date,
          startTimeString: this.state.start_time,
          endTimeString: this.state.end_time,
          user_id: this.state.currentUser.id,
          lake_id: this.props.lake.id,
          lake: this.props.lake
        }
      });
  },

  render: function(){
    return(
      <form className="postingForm" onSubmit={this.handleSubmit}>
      <h2 className="newPostHeader">New Posting for {this.props.lake.name}:</h2><br/>
        <section className="radioButtons" onChange={this.toggle}>
          <label className="radio">
            <input type="Radio" name="action" defaultValue="Hosts"/>
            I Have a Boat and Want Some Guests
          </label><br/>

          <label className="radio">
            <input type="Radio" name="action" defaultValue="Guests"/>
            I Want to Join Someone on Their Boat
          </label>
        </section><br/>

        <label>Boat Type:
          <select className="postSelectBoatType" onChange={this.changeBoatType}>
            <option defaultValue="wakeboard">Wakeboard Boat</option>
            <option defaultValue="waterski">Ski Boat</option>
          </select>
        </label><br/><br/>

        <label>Activity:
          <select className="postSelectActivity" onChange={this.changeActivity}>
            <option defaultValue="Wakeboarding">Wakeboarding</option>
            <option defaultValue="Wakesurfing">Wakesurfing</option>
            <option defaultValue="Kneeboarding">Kneeboarding</option>
            <option defaultValue="Tubing">Tubing</option>
            <option defaultValue="Waterskiing">Waterskiing</option>
          </select>
        </label><br/><br/>

        <label>Date:
          <input type="date" name="date" onChange={this.setDate}></input>
        </label><br/><br/>

        <label>Start Time:
          <input type="time" name="startTime" onChange={this.startTime}></input>
        </label><br/><br/>

        <label>End Time:
          <input type="time" name="endTime" onChange={this.endTime}></input>
        </label><br/>

        <input type="submit" className="random"/>
      </form>
    );
  }
});
