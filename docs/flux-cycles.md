# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Lake Cycles

### Lakes API Request Actions

* `fetchAllLakes`
  0. invoked from `SearchLakesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/lakes` is called.
  0. `receiveAllLakes` is set as the callback.

### Hosts API Response Actions

* `fetchAllHosts`
0. invoked from `HostsIndex` `didMount`/`willReceiveProps`
0. `GET /api/lakes/:id` is called.
0. `receiveAllHosts` is set as the callback.


* `receiveAllHosts`
  0. invoked from an API callback.
  0. `Hosts` store updates `_hosts` and emits change.

* `receiveSingleHost`
  0. invoked from an API callback.
  0. `Hosts` store updates `traveller[id]` and emits change.

* `removeHost`
  0. invoked from an API callback.
  0. `Host` store removes `_hosts[id]` and emits change.

* `updateHost`
  0. invoked from an API callback.
  0. `Host` store updates `_hosts[id]` and emits change.

### Store Listeners

* `HostsIndex` component listens to `Host` store.
* `HostDetail` component listens to `Host` store.


### Hosts API Response Actions

* `fetchAllTravellers`
0. invoked from `TravellersIndex` `didMount`/`willReceiveProps`
0. `GET /api/lakes/:id` is called.
0. `receiveAllTravellers` is set as the callback.


* `receiveAllTravellers`
  0. invoked from an API callback.
  0. `Travellers` store updates `traveller` and emits change.

* `receiveSingleTraveller`
  0. invoked from an API callback.
  0. `Travellers` store updates `traveller[id]` and emits change.

* `removeTraveller`
  0. invoked from an API callback.
  0. `Traveller` store removes `traveller[id]` and emits change.

* `updateTraveller`
  0. invoked from an API callback.
  0. `Traveller` store updates `traveller[id]` and emits change.

### Store Listeners

* `TravellersIndex` component listens to `Traveller` store.
* `TravellerDetail` component listens to `Traveller` store.

## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `LakeSearchBar` `onChange` when there is text
  0. `GET /api/lakes` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `NoteSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
