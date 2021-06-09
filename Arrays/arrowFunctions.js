const videos = [
  'html in 1 video',
  'svg animations tutorial',
  'bug bounty - how to get started',
  'svg hunt',
  'free js resources',
  'design in figma'
];

//OLD WAY:
const newVideos = videos.map(function (video) {
  return video.length < 10 ? video : 'nope';
});

// NEW WAY:
const arrowVideos = videos.map(video => {
  return video.length < 10 ? video : 'nope';
});
console.log(arrowVideos);



// or if you wanna go one line :
const arrowVideos = videos.map(video => (video.length < 10 ? video : 'nope'));

console.log(arrowVideos);


// EXAMPLE 2
const egVideo = videos.map(video => video + 'LOL');
console.log(egVideo);

// EXAMPLE 3
const uppercaseVideos = videos.map(video => video.toUpperCase());
console.log(uppercaseVideos);

// EXAMPLE 4
button = document.getElementById('btn');
button.addEventListener('click', () => {
  console.log('I am working dude!');
});
