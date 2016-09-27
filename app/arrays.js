if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
      indexOf: function (arr, item) {
          var itemIndex = arr.length - item;
          if (arr[itemIndex] == null) {
              return -1;
          }
          
          return arr[itemIndex];
    },

    sum : function(arr) {
        var total = 0;

        arr.forEach(function (currentValue) {
            total += currentValue;
        });

        return total;
    },

    remove: function (arr, item) {
        a = [];
        for (i = 0; i < arr.length; i++) {
            if (arr[i] !== item) {
                a.push(arr[i]);
            }
        }

        return a;
    },

    removeWithoutCopy : function(arr, item) {
        while (arr.indexOf(item) !== -1) {
            arr.splice(arr.indexOf(item), 1);
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.splice(0, 0, item);
        return arr;
    },

    curtail : function(arr) {
        arr.splice(0, 1);
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var occurence = 0;
        arr.forEach(function (currentValue) {
            if (currentValue == item) {
                occurence += item;
            }
        });

        return occurence;
    },

    duplicates : function(arr) {
        var sortedArray = arr.slice().sort(); 
        var duplicates = [];

        for (var i = 0; i < arr.length - 1; i++) {
            
            if (sortedArray[i + 1] === sortedArray[i]
                && duplicates.indexOf(sortedArray[i]) === -1) {                
                duplicates.push(sortedArray[i]);
            }
        }

        return duplicates;
    },

    square : function(arr) {
        var squared = [];
        arr.forEach(function (currentValue) {
            squared.push(Math.pow(currentValue,2));
        });

        return squared;
    },

    findAllOccurrences : function(arr, target) {
        occurence = [];

        arr.forEach(function (currentValue, index) {
            if (currentValue === target) {
                occurence.push(index);
            }
        });

        return occurence;
    }
  };
});
