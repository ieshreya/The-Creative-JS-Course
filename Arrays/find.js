
// FIND

const videos = [
  'html in 1 video tutorial',
  'svg animations tutorial',
  'bug bounty - how to get started'
];

const searchVideo = videos.find(function(video) {
  return video.includes('tutorial');      // we will get the first one only

});

console.log(searchVideo);
