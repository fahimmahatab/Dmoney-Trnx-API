const newman = require('newman');

newman.run({
    //collection: require('.collection/dmoney.json),
    collection:'https://api.postman.com/collections/29168451-f87adf77-2493-4ea8-850b-6837e2ffa8e0?access_key=PMAT-01H8WBFJKZP7BZ7SBK4QYANJ35',
    //environment:require('.collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', //If not specified, the file will be written to 'newman/' in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete');
}

);