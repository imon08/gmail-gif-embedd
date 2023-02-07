import { useRef } from "react";

const Home = () => {
  const gif1Ref = useRef(null);
  const gif2Ref = useRef(null);
  const SelectText = (element) => {
    const doc = document;
    if (doc.body.createTextRange) {
      const range = document.body.createTextRange();
      range.moveToElementText(element);
      range.select();
    } else if (window.getSelection) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(element);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  const handleClick = (ref) => {
    ref.current.setAttribute("contenteditable", true);
    SelectText(ref.current);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    ref.current.removeAttribute("contenteditable");
  };
  return (
    <div className="p-10 w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex gap-10 items-center justify-evenly w-full h-1/2 ">
        <div ref={gif1Ref} className="w-[40%] flex flex-col items-center">
          <img src="https://gmail-embedd.s3.amazonaws.com/gif1.gif" alt="" />
          <a
            className="mt-2 text-blue-500"
            href={`${window.location.origin}/videoOne`}
          >
            Watch Video
          </a>
        </div>
        <div
          ref={gif2Ref}
          className="w-[40%] flex flex-col justify-center items-center"
        >
          <img src="https://gmail-embedd.s3.amazonaws.com/gif2.gif" alt="" />
          <a
            className="mt-2 text-blue-500"
            href={`${window.location.origin}/videoTwo`}
          >
            Watch Video
          </a>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleClick(gif1Ref)}
          className="m-2 border-gray-200 border-2 px-3 py-1 rounded-md bg-yellow-100 active:bg-yellow-200 w-32"
        >
          Copy Gif 1
        </button>
        <button
          onClick={() => handleClick(gif2Ref)}
          className="m-2 border-gray-200 border-2 px-3 py-1 rounded-md bg-yellow-100 active:bg-yellow-200 w-32"
        >
          Copy Gif 2
        </button>
      </div>
    </div>
  );
};

export default Home;
