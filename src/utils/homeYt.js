import React from 'react';
import YouTube from 'react-youtube';

function VideoPlayer1() {
  // Replace 'VIDEO_ID' with the YouTube video ID you want to stream
  const videoId = 'bTzdDBFt-Ng';

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0, // You can set this to 0 if you don't want the video to auto-play
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
}

export default VideoPlayer1;
