# ![logo](https://github.com/jamnjon/couchsurfing/blob/master/docs/pics/Logo.png)

[BoatSurfing live][location]

[location]: http://www.boatsurfing.site



BoatSurfing is a full-stack web application inspired by CouchSurfing.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.  

## Features & Implementation



### Single-Page App

BoatSurfing is a single page app. There are four stores that the site listens to (BoatingRequests, Lakes, Postings, Users), and it displays content based on the current status of the stores. The BoatingRequests controller makes sure to pull all of its necessary data to avoid N+1 queries.

```ruby
def index
  @requests = BoatingRequest.includes(:posting, :lake, :receiver, :requester).all
end
  ```

### Lake Rendering
  Lakes are stored in a table in the database with columns for `id`, `name`, `image_url`, `created_at`, and `updated_at`. The lake is displayed on the frontend by showing the `lake` component, which begins by showing the `lake image`, then a display of the `posting` component for that `lake`, including a button to launch the `posting_form` component along with an option to `request to join` which creates a new `boating_request`, or shows the status of any previously submitted `boating_requests` depending on the `status` of any `boating_request_index_item` for that particular `posting_id`. The Lakes are stored in the `LakeStore`.

![image of lake page](https://github.com/jamnjon/couchsurfing/blob/master/docs/pics/LakePageTop.png)

### Notebooks

Implementing Notebooks started with a notebook table in the database.  The `Notebook` table contains two columns: `title` and `id`.  Additionally, a `notebook_id` column was added to the `Note` table.  

The React component structure for notebooks mirrored that of notes: the `NotebookIndex` component renders a list of `CondensedNotebook`s as subcomponents, along with one `ExpandedNotebook`, kept track of by `NotebookStore.selectedNotebook()`.  

`NotebookIndex` render method:

```javascript
render: function () {
  return ({this.state.notebooks.map(function (notebook) {
    return <CondensedNotebook notebook={notebook} />
  }
  <ExpandedNotebook notebook={this.state.selectedNotebook} />)
}
```

### Tags

As with notebooks, tags are stored in the database through a `tag` table and a join table.  The `tag` table contains the columns `id` and `tag_name`.  The `tagged_notes` table is the associated join table, which contains three columns: `id`, `tag_id`, and `note_id`.  

Tags are maintained on the frontend in the `TagStore`.  Because creating, editing, and destroying notes can potentially affect `Tag` objects, the `NoteIndex` and the `NotebookIndex` both listen to the `TagStore`.  It was not necessary to create a `Tag` component, as tags are simply rendered as part of the individual `Note` components.  

![tag screenshot](https://github.com/appacademy/sample-project-proposal/blob/master/docs/tagScreenshot.png)

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for BoatSurfing are outlined below.

### Search

Searching notes is a standard feature of Evernote.  I plan to utilize the Fuse.js library to create a fuzzy search of notes and notebooks.  This search will look go through tags, note titles, notebook titles, and note content.  

### Direct Messaging

Although this is less essential functionality, I also plan to implement messaging between BoatSurfing users.  To do this, I will use WebRTC so that notifications of messages happens seamlessly.  
