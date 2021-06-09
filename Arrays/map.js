
// SYNTAX: array.map(function(currentValue), thisValue)
const videos = [
  'html in 1 video',
  'svg animations tutorial',
  'bug bounty - how to get started'
];


const newVideos = videos.map(function(video) {
  return video.toUpperCase();
})

console.log(newVideos);
