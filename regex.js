if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return (/\d/g).test(str);
    },

    containsRepeatingLetter: function (str) {
        return (/([A-Za-z])\1/).test(str);
    },

    endsWithVowel: function (str) {
        var letters = str.split("");
        var lastLetter = letters[letters.length - 1].toLowerCase();        
        var vowelArray = ['a', 'e', 'i', 'o', 'u'];

        return isVowel = vowelArray.indexOf(lastLetter) > -1;;
    },

    captureThreeNumbers : function(str) {
        var threeNumbers = (/\d{3}/).exec(str); 
        return threeNumbers ? threeNumbers[0] : false

    },

    matchesPattern : function(str) {
        return (/^\d{3}-\d{3}-\d{4}$/).test(str);
    },
    isUSD : function(str) {
        return (/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/).test(str); 
    }
  };
});
