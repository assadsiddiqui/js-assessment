if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        var fn = function (suffix) {
            return str + ', ' + suffix;
        };
        //console.log(fn);
        return fn;
    },

    makeClosures: function (arr, fn) {
        var closureArray = [];

        for (i = 0; i < arr.length; i++) {        
            var func = function () {
                return fn(arr[i]);
            };
            closureArray.push(func);
        }

        //console.log(closureArray);
        return closureArray;
    },

    partial : function(fn, str1, str2) {
        var partialFunction = function (punctuation) {
            return fn(str1, str2, punctuation);
        };
        return partialFunction;

    },

    useArguments : function() {
        var total = 0;
        for (i = 0; i < arguments.length; i++) {
            total += arguments[i];
        }

        return total;
    },

    callIt: function (fn) {
        var args = Array.prototype.slice.call(arguments, 1, arguments.length);
        fn.apply(null, args);
    },

    partialUsingArguments: function (fn) {
        var args = Array.prototype.slice.call(arguments, 1, arguments.length);
        return function () {
            var moreArgs = args.concat(Array.prototype.slice.call(arguments));
            return fn.apply(null, moreArgs);
        };

    },

    curryIt : function(fn) {

    }
  };
});
