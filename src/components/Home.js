const Home = () => {
  return (
    <div className="flex gap-10 p-10 items-center justify-evenly w-screen h-screen">
      <div className="w-[40%] flex flex-col justify-center items-center">
        <img src="https://gmail-embedd.s3.amazonaws.com/gif1.gif" alt="" />
        <button className="m-2 border-gray-200 border-2 px-3 py-1 rounded-md bg-yellow-100 active:bg-yellow-200 w-32">
          Copy Gif 1
        </button>
      </div>
      <div className="w-[40%] flex flex-col justify-center items-center">
        <img src="https://gmail-embedd.s3.amazonaws.com/gif2.gif" alt="" />
        <button className="m-2 border-gray-200 border-2 px-3 py-1 rounded-md bg-yellow-100 active:bg-yellow-200 w-32">
          Copy Gif 1
        </button>
      </div>
    </div>
  );
};

export default Home;
