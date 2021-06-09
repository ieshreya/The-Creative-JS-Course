// CREATING COPIES
const ratings = [2,3,3,9.5,9.5,8,8,10,10];
const descRating =  [...ratings];     // copied!
descRating.sort((a,b) => a-b);
console.log(descRating);
