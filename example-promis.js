// getTempCallback = (location, callback) => {
//   callback(undefined, 78);
//   callback('City not Found')
// }
//
// getTempCallback('Philadelphia', (err, temp) => {
//   if(err){
//     console.log('error', err);
//   }else{
//     console.log('success', temp);
//   }
// });
//
// getTempPromise = (location) => {
//   return new Promise((resolve,reject)=>{
//     setTimeout(
//       () => {
//         resolve(79);
//         reject('City not Found');
//       }, 1000
//     )
//   });
// }
//
//
// getTempPromise('Philadelphia').then(
//   (temp) =>{
//     console.log('promise success',temp);
//   },
//   (err)=>{
//     console.log('promise err',err);
//   }
// );


// addPromise = (a,b) => {
//   return new Promise((resolve,reject)=>{
//     if(typeof a == "number" && typeof b == "number"){
//       resolve(a+b);
//     }else{
//       reject('type is not number');
//     }
//
//   })
// }
//
// addPromise(2,'aa').then((sum) =>{
//   console.log('success',sum)
// }, (err) => {
//   console.log('err',err);
// });


// cors test
