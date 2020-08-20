function job() {
    return new Promise(function(resolve, reject) {
       
        reject()
        resolve()
    });
}

let promise = job();

promise

.then(function() {
    console.log('Success 1');
})

.then(function() {
    console.log('Success 2');
})

.then(function() {
    console.log('Success 3');
})

.catch(function(error) {
   throw new Error('shit')
})

.then(function() {
    console.log('Success 4');
});