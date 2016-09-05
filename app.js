var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
  '$scope',
  function($scope) {
    $scope.test = 'Hello world!';

    $scope.posts = [
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 7},
      {title: 'post 3', upvotes: 18},
      {title: 'post 4', upvotes: 14},
      {title: 'post 5', upvotes: 2}
    ];

    $scope.addPost = function() {
      $scope.posts.push({title: $scope.title, upvotes: 0});
      $scope.title = ''
    }

  }
]);
