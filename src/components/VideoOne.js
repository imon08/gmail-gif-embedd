import React, { useRef, useState } from "react";
import { BsPlayFill } from "react-icons/bs";

const VideoOne = () => {
  const vidRef = useRef(null);
  const [triggered, setTriggered] = useState(false);
  const handlePlayVideo = () => {
    if (!triggered) setTriggered(true);
    vidRef.current.play();
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center relative p-5">
      <video
        ref={vidRef}
        className="w-full m-4 lg:w-[50%]"
        controls
        src="https://joy1.videvo.net/videvo_files/video/free/2014-12/large_watermarked/Metal_Wind_Chimes_at_Sunset_preview.mp4"
      ></video>
      {!triggered && (
        <div className="w-full h-full rounded-full absolute flex items-center justify-center">
          <button
            onClick={handlePlayVideo}
            className={`bg-purple-600 h-16 w-16
          text-center text-white text-4xl rounded-full flex items-center
          justify-center `}
          >
            <BsPlayFill />
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoOne;
