if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
      alterContext: function (fn, obj) {
          return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
        constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
        var objectProperties = [];
        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                objectProperties.push(property + ': ' + obj[property]);
            }
        }
        return objectProperties;
    }
  };
});
