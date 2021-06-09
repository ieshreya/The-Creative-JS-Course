const videos = [
  'html in 1 video',
  'svg animations tutorial',
  'bug bounty - how to get started',
  'svg hunt',
  'free js resources',
  'design in figma'
];


// NORMAL WAY : LONG METHOD
const newVideos = videos.map(function (video) {
  if (video.length < 15) {
    return video;
  } else {
    return 'nope';
  }
});
console.log(newVideos);



// TERNARY OPERATOR WAY : ULTRA SHORT METHOD
const newVideos = videos.map(function (video) {
  return video.length < 15 ? video : 'nope';
});

console.log(newVideos);
