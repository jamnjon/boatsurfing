var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;

var LakeStore = new Store(AppDispatcher);
var _lakes = {};

LakeStore.all = function(){
  return Object.keys(_lakes).map(function(lakeId){
    return _lakes[lakeId];
  });
};

LakeStore.findById = function(id){
  return _lakes[id];
};

LakeStore.find = function(partialName){
  if(partialName.length < 3){
    return [];
  }
  var potentialLakes = [];
  var lakes = LakeStore.all();
  lakes.forEach(function(lake){
    var duplicate = false;
    for (var i = 0; i < potentialLakes.length; i++) {
      if(lake.name === potentialLakes[i]){
        duplicate = true;
      }
    }
    if(duplicate){
      return;
    }
    for (i = 0; i < (lake.name.length-partialName.length); i++) {
      var mismatch = false;
      for(var j = 0; j < partialName.length; j++){
        if(partialName[j].toUpperCase() !== lake.name[i+j].toUpperCase()){
          mismatch = true;
        }
      }
      if(!mismatch){
        potentialLakes.push(lake);
      }
    }
  });
  return potentialLakes;
};

LakeStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case "RECEIVE_LAKES" :
      _lakes = {};
      payload.lakes.forEach(function(lake){
        _lakes[lake.id] = lake;
      });
      LakeStore.__emitChange();
  }

};
module.exports = LakeStore;
