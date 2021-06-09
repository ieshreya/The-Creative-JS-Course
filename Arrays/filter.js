// Example 1
const videos = [
  'html in 1 video',
  'svg animations tutorial',
  'bug bounty - how to get started',
  'svg hunt',
  'free js resources',
  'design in figma'
];

const shortSearch = videos.filter(function(video) {
    return video.length < 10;
});

console.log(shortSearch);

// Example 2
const games = [
  {title: 'GTA' , rating: '10'},
  {title: 'Homescapes' , rating: '5'},
  {title: 'GTA sanandreas' , rating: '6'},
  {title: 'GTA 5' , rating: '9.5'},
  {title: 'NFS' , rating: '3'},
];

const highRatings = games.filter(function(game) {
  return game.rating > 5;
});
console.log(highRatings);
