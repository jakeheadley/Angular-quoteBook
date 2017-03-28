angular.module('quoteBooks').controller('MainController', function($scope, quoteService){

  //$scope.everythingIsBroken = 'The app is working fine so far!';

  $scope.getQuotes = function(){
    $scope.quotesArr = quoteService.getQuotes();
  };

  $scope.getQuotes();

  $scope.addQuote = quoteService.addQuote;
  $scope.removeQuote = quoteService.removeQuote;

});
