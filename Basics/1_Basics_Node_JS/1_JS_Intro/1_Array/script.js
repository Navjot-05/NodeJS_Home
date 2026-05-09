var arr = [1,2,3,4,5];


// 1.forEach to access array
// arr.forEach(function(val){
//     console.log(val+' hello');
// });


// 2. to perform operation on the existing array and assigning those values to the new array
// var newarr = arr.map(function(val){
//     return val+12;
// })
// console.log(newarr);


// 3.Filter is used to filter things and keep them or remove them(put conditions on the element of the array)
// filter works as the value is true or false if true it will keep if false it willnot keep
// var example=arr.filter(function(val){
//     if(val >3){
//         return true;
//     }else{return false;}
// })
// console.log(example);

// 4.indexOf
console.log(arr.indexOf(12));//output will be -1 bcz it doesnot contain it in the array
console.log(arr.indexOf(1));//output willbe 0 (true)
