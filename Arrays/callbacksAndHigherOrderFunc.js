
const videos = [
  'html in 1 video',
  'svg animations tutorial',
  'bug bounty - how to get started'
];

// Callback Functions:
videos.forEach(function(video) {
  console.log('hi');
  console.log(video);
});


// Higher Order Functions:
function repeat(fn) {
  fn();
  fn();
  fn();
}
function sayHi() {
  console.log('hi there buddy!');
}

repeat(sayHi);
