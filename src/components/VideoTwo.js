import React, { useRef, useState } from "react";
import { BsPlayFill } from "react-icons/bs";

const VideoTwo = () => {
  const vidRef = useRef(null);
  const [triggered, setTriggered] = useState(false);
  const handlePlayVideo = () => {
    if (!triggered) setTriggered(true);
    vidRef.current.play();
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center relative">
      <video
        ref={vidRef}
        className="w-[80%]"
        controls
        src="https://media.istockphoto.com/id/1295316987/video/newborn-kitten-meowing-to-mother.mp4?s=mp4-640x640-is&k=20&c=i4yuhe386uJKole89ig5z8r_FG5lqr_XDJDQ0EE9qDI="
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

export default VideoTwo;
