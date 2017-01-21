(function(){
    'use strict';

    angular.module('SongService', [])
      .factory('Songs', Songs);
      
  Songs.$inject= ['$http']
  function Songs($http){
      return {
        get: function() {
          return $http.get('/api/songs');
        }
      }
    }
})()