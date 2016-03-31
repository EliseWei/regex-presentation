/* Sample files: Intermediate JS */

// Define an object with various properties.
var myObject = {
    info: 3.14159,
    warnMe: function() {
        return 'warning message'
    },
    error: { message: 'error message' },
    arr: [
        {'name': 'Jimmy', 'age': 6},
        {'name': 'June', 'age': 5},
        {'name': 'Jean', 'age': 8}
    ]
};

// Show different console methods and how to use object properties.
console.log(myObject);
console.info(myObject.info);
console.warn(myObject.warnMe());
console.error(myObject.error.message);
console.table(myObject.arr);

var testLoop = function() {
    // In a console group, loop.
    console.group('loopGroup');
    for (var i = 0; i < 20; i++) {
        if (i == 5) {
            // Explicit breakpoint.
            // debugger;
            logFive();
        } else if (i == 12) {
            // This will break.
            logTwelve();
        }
    }
    console.groupEnd();
};
testLoop();

// Function expression
var logTwelve = function() {
    console.log('twelve!');
};

// Function declaration
function logFive() {
    console.log('fiver');
};