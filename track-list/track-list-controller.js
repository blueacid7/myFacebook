'use strict';
app.controller('trackListController', ['$scope', '$resource', function($scope, $resource) {
  $scope.searchKey = '';
  $scope.trackName = '';
  $scope.trackRating = '';
  $scope.editableTrack = {};

  $(document).ready(function() {
    $.fn.followTo = function (pos) {
      var $this = this,
          $window = $(window);

      $window.scroll(function (e) {
        if ($window.scrollTop() > pos) {
          $this.css({
            position: 'fixed',
            top: -1100
          });
        } else {
          $this.css({
            position: 'absolute',
            top: 0
          });
        }
      });
    };

    $('#thirdCol').followTo(1200);
    $("#thirdCol").css("position","fixed");
    $("#fourthColUp").scroll(function() {
      var div = $(this);
      if (Math.abs((div[0].scrollHeight - div.scrollTop()) - div.height()) <= 5) {
        addMoreSideFeeds();
      }
    });
    $(document).scroll(function() {
      if (Math.abs($(window).scrollTop() - ($(document).height() - $(window).height())) <= 5) {
        // do something
        addMoreMainFeeds();
      }
      /*var eTop = $('#developerDetail').offset().top; //get the offset top of the element
      if(eTop - $(window).scrollTop() < $(window).height()){
        $("#thirdCol").css("position","relative");
      }
      else{
        $("#thirdCol").css("position","absolute");

      }
*/    });
  });
  $resource('resources/feeds.json').get().$promise.then(function(data) {
    $scope.mainFeeds = data.feeds;
    $scope.sideFeeds = JSON.parse(JSON.stringify($scope.mainFeeds));
  });
  $resource('resources/contact.json').get().$promise.then(function(data) {
    $scope.contacts = data.contacts;
  });

  var addMoreMainFeeds = function() {
    $resource('resources/feeds.json').get().$promise.then(function(data) {
      $scope.mainFeeds = $scope.mainFeeds.concat(data.feeds);
    });
  }
  var addMoreSideFeeds = function() {
    $resource('resources/feeds.json').get().$promise.then(function(data) {
      $scope.sideFeeds = $scope.sideFeeds.concat(data.feeds);
    });
  }

}]);
