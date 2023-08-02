// VideoPlayer.js

import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import Success from '../pages/Success';
import { useNavigate } from 'react-router-dom';

function VideoPlayer() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [allVideosPlayed, setAllVideosPlayed] = useState(false);
  const navigate = useNavigate()
  const videoUrls = [
    'bTzdDBFt-Ng',
    '8CH0rw9HjVA',
    'VJZb6TVQeFo',
    'Hmn0p5JwK-w',
    'fGFd5Gzn5Is',
  ];

  const pilihanBenar = [
    'Memeluk',
    'Membereskan',
    'Membantu',
    'Menyusun',
    'Memberikan',
  ];

  const pilihanSalah = [
    'Mentertawakan',
    'Tidur',
    'Bermain',
    'Mengoborol',
    'Makan',
  ];

  const opts = {
    height: '390px',
    width: '640px',
    playerVars: {
      autoplay: 0,
    },
  };

  useEffect(() => {
    // Check if all videos have been played
    if (currentVideoIndex === videoUrls.length) {
      setAllVideosPlayed(true);
    }
  }, [currentVideoIndex]);

  useEffect(() => {
    // Check the score after all videos are played
    if (allVideosPlayed) {
      if (score >= 3) {
        navigate('/success');
        // You'll need to implement the redirection logic here
        // For example, using React Router, you can do:
        // history.push('/success');
      } else {
        navigate('/failed');
        // You'll need to implement the redirection logic here
        // For example, using React Router, you can do:
        // history.push('/failed');
      }
    }
  }, [allVideosPlayed, score]);

  const handleNextVideo = () => {
    if (!allVideosPlayed) {
      setCurrentVideoIndex((prevIndex) => prevIndex + 1);
      setUserChoice(null); // Reset user choice for the next video
    }
  };

  const handleButtonClick = (isCorrect) => {
    if (!allVideosPlayed && userChoice === null) {
      // Prevent multiple clicks on buttons and stop handling clicks if all videos are played
      setUserChoice(isCorrect);

      if (isCorrect) {
        setScore((prevScore) => prevScore + 1); // Increase score if the user's choice is correct
      }

      // Automatically move to the next video after a few seconds
      setTimeout(handleNextVideo, 2000); // Adjust the timeout value (milliseconds) as needed
    }
  };

  const buttonStyle = {
    height: '40px',
    width: '200px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    marginTop: '50px',
  };

  const buttonStyle1 = {
    height: '40px',
    width: '200px',
    backgroundColor: '#F59A43',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    marginTop: '50px',
  };
  const disabledButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ccc',
    cursor: 'not-allowed',
  };

  const buttons = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const scoreStyle = {
   color:'#fff'
  };
  return (
    <div>
      {allVideosPlayed ? (
        <p>All videos played. Game Over!</p>
      ) : (
        <>
          <YouTube videoId={videoUrls[currentVideoIndex]} opts={opts} />
          <div style={buttons}>
            <button
              style={userChoice === null ? buttonStyle : disabledButtonStyle}
              type="button"
              onClick={() => handleButtonClick(true)}
            >
              {pilihanBenar[currentVideoIndex]}
            </button>

            <button
              style={userChoice === null ? buttonStyle1 : disabledButtonStyle}
              type="button"
              onClick={() => handleButtonClick(false)}
            >
              {pilihanSalah[currentVideoIndex]}
            </button>
          </div>
          <p style={scoreStyle}>Score: {score}</p>
        </>
      )}
    </div>
  );
}

export default VideoPlayer;
