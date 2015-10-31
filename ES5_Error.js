throw {
    name: 'ExceptionType',
    message: 'reason'
};

try {

} catch (e) {
    switch(e.name) {
        // do something about each type of error
    }
}


