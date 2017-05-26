// function getTempCallback (location, callback){
//     callback(undefined, 78);
//     callback('City not found');
// };

// getTempCallback('Tangerang', function (err, temp){
//     if(err){
//         console.log('Eroor: ', err);
//     } else {
//         console.log('Success: ', temp);
//     }
// });

// function getTempPromise(location){
//     return new Promise(function(resolve, reject){
//         setTimeout(function() {
//             resolve(79);
//         reject('City Not Found');
//         }, 3000);
        
//     })
// };

// getTempPromise('Tangerang').then(function(temp){
//     console.log('Promise Success', temp);
// }, function (err){
//     console.log('Promise Error', err);
// })


function addPromise(a, b){
    return new Promise(function(resolve, reject){
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        }
        reject('a and b need to be numbers');

        // resolve(a + b);
        // reject('Number Not Found');
    });
};

addPromise(3,7).then(function(res){
    console.log('Result: ', res);
}, function(err){
    console.log('Promise Error: ', err);
});

addPromise('Faza',7).then(function(res){
    console.log('this should not show up');
}, function(err){
    console.log('this should appear: ', err);
});