/* Sample files to begin Intermediate JS */

// Define an object with various properties.
var myObject = {
    info: 3.14159,
    warnMe: function() {
        return 'warning message'
    },
    error: { message: 'error message' },
    arr: [{'name': 'Jimmy', 'age': 6}, {'name': 'June', 'age': 5}, {'name': 'Jean', 'age': 8}]
};

// Show different console methods and how to use object properties.
console.log(myObject);
console.info(myObject.info);
console.warn(myObject.warnMe());
console.error(myObject.error.message);
console.table(myObject.arr);

// In a console group, loop.
console.group('consoleGroup');
    for (var i = 0; i<20; i++) {
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

// Will be undefined when called from line 9.
var logTwelve = function() {
    console.log('twelve!');
};

// How are these different?
function logFive() {
    console.log('fiver');
};