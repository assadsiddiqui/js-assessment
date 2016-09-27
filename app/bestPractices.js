if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  return {
    globals : function() {
      
    },

    functions : function(flag) {
      if (flag) {
        function getValue() { return 'a'; }
      } else {
        function getValue() { return 'b'; }
      }

      return getValue();
    },

    parseInt: function (num) {
        if (num.charAt(0) == '0') {
            return 0;
        }
      return parseInt(num);
    },

    identity : function(val1, val2) {
        return val1 === val2;
    }
  };
});
