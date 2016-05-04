# BoatSurfing

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

BoatSurfing is a web application inspired by CouchSurfing that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for an Couchsurfing-inspired site: find a host to allow you to wakeboard/waterski/...behind their boat or be a host and allow someone to come out with you on your boat (after all, you can't drive yourself).
- [ ] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](https://github.com/appacademy/sample-project-proposal/blob/master/docs/production_readme.md) -- you'll write this later)

## Product Goals and Priorities

BoatSurfing will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [x] Create an account (MVP)
- [x] Log in / Log out, including as a Guest/Demo User (MVP)
- [x] Search a lake for potential hosts (MVP)
- [x] Search a lake for potential guests (MVP)
- [ ] Rate a host/guest (expected feature, but not MVP)
- [ ] Sort potential hosts/guests by specific water sport and/or by rating (expected feature, but not MVP)
- [ ] Favorite previous hosts or guests so that they will come up first in future searches (expected feature, but not MVP)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication
- [x] user signup/signin pages
- [x] blank landing page after signin

### Phase 2: Lakes Model, API, and basic APIUtil (1.0 days)

**Objective:** Lakes can only be indexed and shown through the API.

- [x] create `Lake` model
- [x] seed the database with a small amount of test data
- [x] CRUD API for notes (`LakesController`)
- [x] jBuilder views for lakes
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.

### Phase 3: BoatingRequests Model, API, and basic APIUtil (1.5 days)

**Objective:** BoatingRequests can be created, edited, read, and destroyed through the API.

- [x] create `BoatingRequest` model
- [ ] seed the database with a small amount of test data
- [x] CRUD API for BoatingRequest (`BoatingRequestsController`)
- [x] jBuilder views for BoatingRequests
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.


### Phase 4: Flux Architecture and Router (1.5 days)

**Objective:** BoatingRequests can be created, read, edited and destroyed with the
user interface.

- [x] setup the flux loop with skeleton files
- [x] setup React Router
- implement each note component, building out the flux loop as needed.
  - [x] `BoatingRequestsIndex`
  - [x] `BoatingRequestIndexItem`

### Phase 5: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 6: Postings Model, API, and basic APIUtil (1.5 days)

**Objective:** Postings can be created, edited, read, and destroyed through the API.

- [x] create `Posting` model
- [x] seed the database with a small amount of test data
- [x] CRUD API for notes (`PostingsController`)
- [x] jBuilder views for hosts
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.


### Phase 7: Flux Architecture and Router (1.5 days)

**Objective:** Postings can be created, read, edited and destroyed with the
user interface.

- [x] setup the flux loop with skeleton files
- [x] setup React Router
- implement each posting component within the lake view, building out the flux loop as needed.
  - [x] `Postings`
  - [ ] `PostingForm`
- [ ] save Postings to the DB when the form loses focus or is left idle
  after editing.


### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.
- [ ] Add footer (contact info)

### Bonus Features (TBD)
- [ ] Rate hosts/travelers
- [ ] Pagination / infinite scroll for Hosts/Postings Index
- [ ] Favorite previous Hosts/Guests and have them show up at top of search
- [ ] Multiple sessions
