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

### PostingForm

This is a form to create new `postings`. It is launched via a button on the `posting` component, which is displayed in the `lake` component. It has access to the `posting_client_actions` so that it can submit items into the `postings` table in the database.

![PostingForm screenshot](https://github.com/jamnjon/couchsurfing/blob/master/docs/pics/NewEvent.png)

### BoatingRequests

BoatingRequests are stored in the database through a `boating_requests` table which contains the columns: `id`, `sending_user_id`, `receiving_user_id`, `status`, and `posting_id`.  

BoatingRequests are maintained on the frontend in the `BoatingRequestStore`.  They are rendered within a `boating_request_index` component which renders each `boating_request_index_item` component. These are accessed via a button from a dropdown on the `navBar` component, separated by their `status` (`Accepted`, `Pending`, or `Declined`), and displayed in a Modal. Each one shows the details of the `posting` (when the event is, which lake, the activity, and the other user's username) along with (optionally, depending on the status and whether you're the sender or the receiver) buttons to `cancel`, `approve`, or `decline` the request. `cancel` will remove the request from the database, `approve` or `decline` will change the status which will make it appear in a different window.

![BoatingRequest screenshot](https://github.com/jamnjon/couchsurfing/blob/master/docs/pics/PendingRequests.png)

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

The `lakeSearch` component listens to the `LakeStore` and uses the `find` function within the store in order to allow the user to find a specific lake by name.

![Search screenshot](https://github.com/jamnjon/couchsurfing/blob/master/docs/pics/Search.png)

### NavBar

The `navBar` component listens to the `UserStore` via the `CurrentUserState` mixin. Depending on whether the user is logged in or not, as well as what page they're on, they will see something different. Whether logged in or out, they will see the logo towards the left side of the screen. When logged out, they see a button to launch the `LoginForm` component which will allow them to either register or sign in (including as a guest). When logged in, they see they're username as a dropdown, giving access to the `boating_request_index` components (separated by `status`) as well as the ability to logout.

![navBar screenshot with dropdown](https://github.com/jamnjon/couchsurfing/blob/master/docs/pics/UserOptions.png)

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for BoatSurfing are outlined below.

### Filter/Improved Search Functionality

I plan to allow the user to search by location (plug in a city name and a range and find lakes near them, whether in a list, or ideally in an interactive map via google maps API that allows them to click a lake to be directed to the lake page). Additionally, filtering search results by particular sport, date, or user would allow the user to not need to navigate extra unneeded information (if I'm looking to go wakeboarding, I don't need to see people with waterski boats looking to go waterskiing). Additionally, I intend to allow the user to sort the results by date, by user rating (see below),...

### Ratings/Completion Status/User Show Page

Allow users to rate the person they went with. The users already have the columns in the database necessary to do this, but there is no functionality to add this yet. Once the `end_time` passes, the next time the user logs in, the item should be moved out of the `boating_request_index`, and if the status was `Accepted` they should have it appear in a `completed` section. If they select that option, they should be able to rate the other user and post comments about them which would appear on a (yet to be created) user show page. Users should be allowed to update their password as well as their profile picture, and maybe post a "home lake" where they are most likely to be available to go out.

### Direct Messaging

Messaging between BoatSurfing users is an important feature.  This will enable them to coordinate their activities a bit better (for instance, find out exactly where on the lake to meet up).
