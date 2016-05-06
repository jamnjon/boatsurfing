# ![logo](https://github.com/jamnjon/couchsurfing/blob/master/docs/pics/Logo.png)

[BoatSurfing live][location]

[location]: http://www.boatsurfing.site



BoatSurfing is a full-stack web application for boat sharing. Like many people, I hate it when I feel like going out on my boat but nobody is available to come out with me (can't really do water sports without a driver). People without a boat can now post on this app and join me, or anybody else, to do some water sports!  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.  

## Features & Implementation



### Single-Page App

BoatSurfing is a single page app. There are four stores that the site listens to (BoatingRequests, Lakes, Postings, Users), and it displays content based on the current status of the stores. The BoatingRequests controller makes sure to pull all of its necessary data to avoid N+1 queries.

```ruby
def index
  @requests = BoatingRequest.includes(:posting, :lake, :receiver, :requester).all
end
  ```

### Lake Rendering
  Lakes are stored in a table in the database with columns for `id`, `name`, `image_url`. The lake is displayed on the frontend by showing the `lake` component, which begins by showing the `lake image`, then a display of the `posting` component for that `lake`, which allows the user to see all available events that match their search parameters (`lake` and whether they're the `host` or the `guest`), as well post new events.
![image of lake page](https://github.com/jamnjon/couchsurfing/blob/master/docs/pics/LakePageTop.png)

### Postings

Postings are also stored in a  table in the database, containing: `lake_id`,`id`, `user_id`, `start_time`, `end_time`, `boat_type`, `activity`, `lake_id`, and `posting_type`. It is rendered in the `posting` component which is only shown within the `lake` component. It includes the method for creating new postings via a button to launch the `posting_form` component. These listen to the `PostingStore` to see all the postings and the `BoatingRequestStore` to check the status of any pending requests to join a particular posting that you might already have. It renders all of the postings for that particular lake, of that particular posting type (`host` or `guest`), along with either the button to join a posting or a display of the status of your previous request.

![image of postings](https://github.com/jamnjon/couchsurfing/blob/master/docs/pics/Postings.png)

`Posting` startTime method (Parsing input into proper time format for display):

```javascript
  startTime: function(posting){
    var startHour = parseInt(posting.start_time.slice(11,13));
    var ampm = " am";
    if(startHour > 12){
      startHour -= 12;
      ampm = " pm";
    }
    if(startHour === 12){
      ampm = " pm";
    }
    return (startHour + posting.start_time.slice(13,16) + ampm);
  },
```

### BoatingRequests

BoatingRequests are stored in the database through a `boating_requests` table which contains the columns: `id`, `sending_user_id`, `receiving_user_id`, `status`, and `posting_id`.  

BoatingRequests are maintained on the frontend in the `BoatingRequestStore`.  They are rendered within a `boating_request_index` component which renders each `boating_request_index_item` component. These are accessed via a button from a dropdown on the `navBar` component, separated by their `status` (`Accepted`, `Pending`, or `Declined`), and displayed in a Modal. Each one shows the details of the `posting` (when the event is, which lake, the activity, and the other user's username) along with (optionally, depending on the status and whether you're the sender or the receiver) buttons to `cancel`, `approve`, or `decline` the request. `cancel` will remove the request from the database, `approve` or `decline` will change the status which will make it appear in a different window.

![BoatingRequest screenshot](https://github.com/jamnjon/couchsurfing/blob/master/docs/pics/Pending.png)

`BoatingRequests` render for approved Requests.

````javascript
if(this.props.showType === "app"){
  if(this.state.approvedRequests.length === 0){
    return(
      <div className="noReqs">You Have no Accepted Requests</div>
    );
  } else {
  return(
    <div className="reqs"><div className="approvedReqs"
    ><b className="BRState">Accepted:</b> <br/>
    <ul>{this.state.approvedRequests}</ul></div></div>
  );
}
````

### LakeSearch

The `lakeSearch` component listens to the `LakeStore` and uses the `find` function within the store in order to sort the 

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for BoatSurfing are outlined below.

### Search

Searching notes is a standard feature of Evernote.  I plan to utilize the Fuse.js library to create a fuzzy search of notes and notebooks.  This search will look go through tags, note titles, notebook titles, and note content.  

### Direct Messaging

Although this is less essential functionality, I also plan to implement messaging between BoatSurfing users.  To do this, I will use WebRTC so that notifications of messages happens seamlessly.  
