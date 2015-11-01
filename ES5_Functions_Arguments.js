function sum() {
    return arguments
            .reduce(function (a, b) {
        return a + b;
    }, 0);
}

var ten = sum(1, 2, 3, 4);