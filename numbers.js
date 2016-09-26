if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
      valueAtBit: function (num, bit) {
        return 1 & (num >> (bit - 1));
    },

    base10: function(str) {
        return parseInt(str, 2); 

    },

    convertToBinary: function(num) {
        var arr = []; 
        for (var i = 7; i > -1; i--) {
            arr.push(num & (1 << i) ? 1 : 0);
        }

        return arr.join('');
    },

    multiply: function(a, b) {
        a = adjustNumber(a); 
        b = adjustNumber(b);
        
        var result = (a.adjustedValue * b.adjustedValue) / (a.multiplier * b.multiplier);
        return result; 
        
        function adjustNumber(num) {
            var exponent, multiplier;
            if (num < 1) {
                exponent = Math.floor(Math.log(num) * -1);
                multiplier = Math.pow(10, exponent);
                return { adjustedValue: num * multiplier, multiplier: multiplier };
            }
            return { adjustedValue: num, multiplier: 1 };
        }

    }
  };
});

