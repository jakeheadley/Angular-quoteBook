angular.module('quoteBooks').service('quoteService', function(){

  var quotes = [
    { text: 'It\'s my belief that history is a wheel. \"Inconsistency is my very essence\" -says the wheel- \"Rise up on my spokes if you like, but don\'t complain when you are cast back down into the depths. Good times pass away, but then so do the bad. Mutability is our tragedy, but it is also our hope. The worst of times, like the best, are always passing away\"', author: 'Boethius'},
    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  ];

  this.getQuotes = function(){
    return quotes;
  };

  this.addQuote = function(quote, author){
    for(var i=0; i < quotes.length; i++){
      if (quotes[i].text === quote && quotes[i].author === author){
        return;
      }
    }

    var newQuote = {
      text: quote,
      author: author
    }
    quotes.unshift(newQuote);
  };

  this.removeQuote = function(quoteToRemove){
    for(var i=0; i < quotes.length; i++){
      if (quotes[i].text === quoteToRemove.text && quotes[i].author === quoteToRemove.author){
        quotes.splice(i, 1);
      }
    }

  };

});
