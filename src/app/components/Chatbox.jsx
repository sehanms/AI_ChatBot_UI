import React from 'react';


const Chatbox = () => {
  const handleFetchCoinDetails = (prompt) => {
    console.log('fetching....', prompt);
  };

  return (
    <div className="chatbox blur-background large-shadow z-50 bg-[#000518] bg-opacity-70 w-[90vw] md:w-[70vw] lg:w-[40vw] pb-6 h-[85vh]
    shadow-2xl shadow-purple-500">
      <div className="h-[13%] pl-3 border-b border-gray-700 flex gap-x-4 items-center ">
        <img
          className="rounded-full w-12 h-12"
          src="https://cdn.pixabay.com/photo/2023/05/29/18/53/cyborg-8026949_640.jpg"
          alt=""
        />
        <div>
          <h1 className="text-lg font-semibold text-white">Ai Chat Bot</h1>
          <p className="text-sm text-gray-400">Real Time Crypto Market Data</p>
        </div>
      </div>
      <div className="h-[77%]">
        <div className="p-10 gap-5 h-full flex flex-col justify-center items-center">
          <p className="text-2xl font-bold text-white">Welcome to the Crypto Chat Bot</p>
          <p className="text-gray-500">Inquire about market data</p>
        </div>
      </div>
      <div className="h-[10%] px-5">
        <input
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleFetchCoinDetails(e.target.value);
            }
          }}
          onChange={(e) => console.log(e.target.value)}
          type="text"
          className="h-full rounded-full border-gray-700 border bg-transparent px-5 w-full outline-none"
          placeholder="Give your prompt....."
        />
      </div>
    </div>
  );
};

export default Chatbox;
