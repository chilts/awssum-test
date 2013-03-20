// ----------------------------------------------------------------------------

var fmt = require('fmt');

// ----------------------------------------------------------------------------

module.exports = exports = function(title) {
    return function(err, data) {
        fmt.sep();
        fmt.title(title);
        fmt.dump(err, 'err');
        fmt.dump(data, 'data');
        fmt.sep();
    };
};

// ----------------------------------------------------------------------------
