(function(){

  angular
       .module('herdsmen')
       .controller('HerdsmenController', [
          'herdsmenService', '$scope', '$log', '$q', '$sce',
          HerdsmenController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function HerdsmenController( herdsmenService, $scope, $log, $q, $sce) {
    var self = this;

    self.selected = null;
    
    herdsmenService
          .loadAllArticles()
          .then(function successCallback(response) {
            $scope.articles = response.data.responseData.feed.entries.map(function(e) { 
              return {title: e.title, link: e.link, publishedDate: e.publishedDate, content: $sce.trustAsHtml(e.content), image: (e.content.match(/\<img.*src="([^"]+)"/)||[""])[1]};
            });//response.responseData.feed.entries;
          // this callback will be called asynchronously
          // when the response is available
        }, function errorCallback(response, error) {
          $scope.message=error;
          $scope.articles=response;
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
  }

})();
