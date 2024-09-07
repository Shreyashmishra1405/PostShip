import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#fffcf6] flex  items-center p-20">
      <div className="flex flex-col justify-center gap-8">
        <h1 className="font-[700] text-2xl text-[#4A4A4A]">
          Welcome, John Mathew!!
        </h1>
        <div className="flex flex-row gap-16 justify-center items-center w-full">
          <div className="flex flex-col gap-4 text-sm w-[332px] h-[168px] border-2 bg-white  p-4 rounded-md ">
            <span className="font-semibold">Order Sync Successful!</span>
            <p className="text-xs">
              Your order details from the last 30 days have been successfully
              synced. Check them out now!
            </p>
            <button className="p-2 text-white bg-[#3e3e3e] w-fit  rounded text-xs">
              Explore your orders
            </button>
          </div>
          <div className="flex flex-col gap-4 text-sm w-[332px] h-[168px] border-2 bg-[#fff8db] p-4 rounded-md ">
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={"1em"}
                viewBox="0 0 512 512"
              >
                <path d="M248.4 84.3c1.6-2.7 4.5-4.3 7.6-4.3s6 1.6 7.6 4.3L461.9 410c1.4 2.3 2.1 4.9 2.1 7.5c0 8-6.5 14.5-14.5 14.5l-387 0c-8 0-14.5-6.5-14.5-14.5c0-2.7 .7-5.3 2.1-7.5L248.4 84.3zm-41-25L9.1 385c-6 9.8-9.1 21-9.1 32.5C0 452 28 480 62.5 480l387 0c34.5 0 62.5-28 62.5-62.5c0-11.5-3.2-22.7-9.1-32.5L304.6 59.3C294.3 42.4 275.9 32 256 32s-38.3 10.4-48.6 27.3zM288 368a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-8-184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 96c0 13.3 10.7 24 24 24s24-10.7 24-24l0-96z" />
              </svg>
              <span className="font-semibold">
                Customize Customer Notification
              </span>
            </div>
            <p className="text-xs">
              Tailor Your Email Experience: Set the Sender Email and Choose
              Notification Triggers{" "}
            </p>
            <button className="p-2 text-white bg-[#3e3e3e] w-fit rounded text-xs">
              Configure Notifications
            </button>
          </div>
          <div className="flex flex-col gap-4 text-sm w-[332px] h-[168px] border-2 bg-[#eaf4ff] p-4 rounded-md ">
            <div className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" height={"1em"} viewBox="0 0 512 512">
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
              </svg>
              <span className="font-semibold">
                Your Tracking Link has been generated
              </span>
            </div>
            <p className="text-xs">
              Your Tracking <a href="/store"> Link </a> has been generated Include the Link to Your
              Store's Navigation Menu.
            </p>
            <div className="flex gap-2">
               <button className="p-2 text-black border-2 bg-[#fff] w-fit rounded text-xs">
                Copy Link
              </button>
              <button className="p-2 text-white bg-[#3e3e3e] w-fit rounded text-xs">
                Go to Navigation Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
