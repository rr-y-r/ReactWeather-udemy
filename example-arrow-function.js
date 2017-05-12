// var names = ['name1','name2','name3'];
//
// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
// names.forEach((name)=>{
//   console.log('arrowFunc', name);
//   // console.log('something else')
// })
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('name1'));

// var person = {
//   name: 'Andrew',
//   greet : function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to '+ name)
//     })
//   }
// }
//
// person.greet()

// Challange Area

function add(a,b){
  return a+b;
}

arrow_add = (a,b) => {
  return a+b;
}
arrow2_add = (a,b) => a+b;

console.log(add(1,2));
console.log(add(2,0));

console.log(arrow_add(1,2));
console.log(arrow_add(2,0));

console.log(arrow2_add(1,2));
console.log(arrow2_add(2,0));
