Array.prototype.iterator = function () {
    let index = 0;

    const array = this;

    return {
        next: function () {
            if (index < array.length) {
                return { value: array[index++], done: false };
            } else {
                return { value: undefined, done: true };
            }
        },
    };
};

{
    const collection = [1, 2, 3];
    const iterator = collection.iterator();
    
    while (true) {
        const { value, done } = iterator.next();
        console.log(value, done);
        if (done) break;
    }
}
