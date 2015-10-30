(function(){
  'use strict';

  angular.module('herdsmen')
         .service('herdsmenService', ['$q', '$http', HerdsmenService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function HerdsmenService($q,$http){

    // Promise-based API
    return {
      loadAllArticles : function() {

      var url ="http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=8&q=http%3A%2F%2Fnews.google.com%2Fnews%3Foutput%3Drss%26q%3Dsuspected%20herdsmen%26rsz%3D8&callback=JSON_CALLBACK";
      return $http({
        method: 'jsonp',
        url: url,
        headers: {'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'}
      });
      }
    };
  }

})();
