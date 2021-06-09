const games = [
  {title: 'GTA' , rating: '10'},
  {title: 'Homescapes' , rating: '5'},
  {title: 'GTA sanandreas' , rating: '6'},
  {title: 'GTA 5' , rating: '9.5'},
  {title: 'NFS' , rating: '3'},
];

// SOME and EVERY: returns true or false

// EVERY: checks if all conditions satisfy? true
const everyRating = games.every(function (game) {
  return game.rating > 8;
});

console.log(everyRating);

// SOME: checks if at least one condition satisfy? true
const someRating = games.some(function (game) {
  return game.rating > 8;
});

console.log(someRating);
