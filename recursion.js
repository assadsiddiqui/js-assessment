if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
        
        var filesArray = [];
        var directories = [];

        function GetFiles(dir) {
        
            var i;
            var file;
            var files = dir.files;
            var length;
            directories.push(dir.dir);
            for (i = 0, length = files.length; i < length; i++) {
                file = files[i];
                if (typeof file === 'string') {
                    if (dirName == null|| directories.indexOf(dirName) > -1) {
                        filesArray.push(files[i]);
                    }
                } else {
                    GetFiles(file);
                }
            }

            directories.pop();
        }

        GetFiles(data);
        return filesArray;
    },

    permute: function(arr) {

    }
  };
});
