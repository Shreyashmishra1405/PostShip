import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between px-20 py-4 text-[#616161] bg-[#ffff]font-semibold border-b-2 border-[#8A8A8A] ">
        <div className="flex gap-8 ">
          <span className="cursor-pointer border border-transparent hover:border-b-2 hover:border-t-transparent  hover:border-l-transparent  hover:border-r-transparent hover:border-[#8051FF] ">
            Home
          </span>
          <span className="cursor-pointer hover:border-b-2 hover:border-[#8051FF] ">
            Orders
          </span>
          <span className="cursor-pointer hover:border-b-2 hover:border-[#8051FF] ">
            Integrations
          </span>
          <div className="flex gap-2 items-center cursor-pointer hover:border-b-2 hover:border-[#8051FF] ">
            <span className="">
              Tracking Page
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={"0.9em"}
              fill="gray"
              viewBox="0 0 512 512"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </div>
          <span className="cursor-pointer hover:border-b-2 hover:border-[#8051FF] ">
            Partner with us
          </span>
        </div>
        <div className="flex gap-6">
          <div className="cursor-pointer flex items-center  hover:border-b-2 border-[#8A8A8A] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={"1em"}
              fill="gray"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
            <input
              type=""
              className="px-2  focus:outline-none"
              placeholder="Search"
            />
          </div>
          <div className=" cursor-pointer flex gap-2 items-center  hover:text-[#8051FF]">
            <svg
              className=" hover:fill-inherit"
              height={"1em"}
              fill="#8051FF"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z" />
            </svg>
            <span>Account</span>
          </div>
          <div className=" cursor-pointer flex gap-2 items-center hover:text-[#8051FF] ">
            <svg
              height={"1em"}
              fill="#8051FF"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
            </svg>
            <span>settings</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
