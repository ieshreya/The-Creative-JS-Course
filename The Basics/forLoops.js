
// For Loops 


// Explained: 
for(let i = 0; i < 10; i++) {
    //Some Code
    console.log(i);
}



// Example 1:
for(let i = 0; i < 30; i++) {
    
    if(i == 19) {
        console.log('Hey you are 19 now.');
        continue;
    }
    // it will not print 19 now, it will print our instructions. but will continue to the rest.
    console.log(i);
     
}





// Example 2:
const hobbies = ['coding', 'indie maker', 'reading', 'travel', 'exploring history', 'doing Math'];

for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i])
}



// Example 3:
let myName = 'Shreya Purohit';

for (i = 0; i <= myName.length; i++) {
    console.log(i);
}



// ------------------------------- For of ForEach -----------------------
const names = ['Gimi', 'Nanu', 'Shreya', 'Samridh', 'Kaka'];

// for (let x of names) {
//     console.log(x);
// }


// SPECIFICALLY FOR ARRAYS
names.forEach(function (x, index){
    console.log(x, index);
})


names.forEach()






