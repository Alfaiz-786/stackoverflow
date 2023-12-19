import React, { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import video from "../assets/video.mp4";
import Hammer from "hammerjs";
import "./VideoPlayer.css";

const VideoPlayer = () => {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const player = playerRef?.current?.getInternalPlayer();

    if (!player) {
      return;
    }

    const hammer = new Hammer(player);

    hammer.get("doubletap").set({ posThreshold: 30, time: 300 });

    hammer.on("doubletap", (e) => {
      const xPos = e.center.x / window.innerWidth;

      if (xPos < 0.3) {
        // Double-tap on the left side
        player.currentTime -= 10;
      } else if (xPos > 0.7) {
        // Double-tap on the right side
        player.currentTime += 10;
      } else {
        // Double-tap in the middle
        setIsPlaying((prevIsPlaying) => !prevIsPlaying);
      }
    });

    return () => {
      hammer.destroy();
    };
  }, []);

  return (
    <>
      <div className="video-wrapper" style={{ marginTop: "2rem" }}>
        <ReactPlayer
          ref={playerRef}
          url={video}
          playing={isPlaying}
          controls
          className="react-player"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
};

export default VideoPlayer;
