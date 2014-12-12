var controlpanelApp = angular.module('controlpanelApp', []);
 
controlpanelApp.controller('ControlPanelCtrl', function ($scope) {
  $scope.portalNavs = [
    {'name': 'Users',
     'link': '/ddd'},
    {'name': 'Groups',
     'link': '/fff'},
    {'name': 'Portal Settings',
     'link': '/lll'}
  ];
});