import React from "react";
// import * as React from 'react';
import Box from '@mui/material/Box';
import { PieChart } from '@mui/x-charts/PieChart';
// import { mobileAndDesktopOS, valueFormatter } from './webUsageStats';
import { mobileAndDesktopOS , valueFormatter } from "../webUsageStats";
const Dashboard = () => {
  return (
    <div className="flex items-center bg-[#fff7ee] w-screen z-[-2] p-20">
      <div className="flex flex-col gap-8 w-full  ">
        <h1 className="font-[700] text-2xl text-[#4A4A4A]">
          Instant Dive into Your Performance Metrics
        </h1>
        <div className="flex flex-row gap-4 font-[550]">
          <button className=" cursor-pointer w-fit rounded p-2 border border-transparent bg-white hover:bg-[#F8F7FF] text-black text-sm hover:border hover:border-[#8051FF]">
            Lifetime
          </button>
          <button className=" cursor-pointer w-fit rounded p-2 border border-transparent bg-white hover:bg-[#F8F7FF] text-black text-sm hover:border hover:border-[#8051FF]">
            Life Week
          </button>
          <button className=" cursor-pointer w-fit rounded p-2 border border-transparent bg-white hover:bg-[#F8F7FF] text-black text-sm hover:border hover:border-[#8051FF]">
            Life Month
          </button>
          <button className=" cursor-pointer w-fit rounded p-2 border border-transparent bg-white hover:bg-[#F8F7FF] text-black text-sm hover:border hover:border-[#8051FF]">
            Life year
          </button>
          <div className=" cursor-pointer flex gap-2 items-center w-fit rounded p-2 border border-transparent bg-white hover:bg-[#F8F7FF] text-black text-sm hover:border hover:border-[#8051FF] ">
            <button>Customize Time Line</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={"1em"}
              viewBox="0 0 448 512"
            >
              <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z" />
            </svg>
          </div>
        </div>
        <div className="flex  flex-row  gap-4 w-full">
        <div className="bg-white flex flex-col p-4 gap-4 w-2/5 border-2 rounded-xl">
            <div className="flex justify-between text-sm font-[550] text-[#4A4A4A]">
              <span>Shipment Updates</span>
              <span>Total Orders : 394</span>
            </div>
            <div className="flex flex-row gap-2 ">
              <button className="cursor-pointer w-fit rounded p-2 border border-transparent font-[500] bg-[#f1f1f1] hover:bg-[#fff1e3] text-[#4A4A4A] text-sm hover:border hover:border-gray-200">
                Delivered
              </button>
              <button className="cursor-pointer w-fit rounded p-2 border border-transparent font-[500] bg-[#f1f1f1] hover:bg-[#fff1e3] text-[#4A4A4A] text-sm hover:border hover:border-gray-200">
                Out for Delivery
              </button>

              <button className="cursor-pointer w-fit rounded p-2 border border-transparent font-[500] bg-[#f1f1f1] hover:bg-[#fff1e3] text-[#4A4A4A] text-sm hover:border hover:border-gray-200">
                Intransit
              </button>
              <button className="cursor-pointer w-fit rounded p-2 border border-transparent font-[500] bg-[#f1f1f1] hover:bg-[#fff1e3] text-[#4A4A4A] text-sm hover:border hover:border-gray-200">
                Pending
              </button>
              <button className="cursor-pointer w-fit rounded p-2 border border-transparent font-[500] bg-[#f1f1f1] hover:bg-[#fff1e3] text-[#4A4A4A] text-sm hover:border hover:border-gray-200">
                Exception
              </button>
            </div>
            <div className="w-full flex flex-col gap-4">
              <Box sx={{ width: "100%" }}>
                <PieChart
                  height={300}
                  series={[
                    {
                      data: mobileAndDesktopOS.slice(0, 5),
                      innerRadius: 50,
                      arcLabel: (params) => params.label ?? "",
                      valueFormatter,
                    },
                  ]}
                />
              </Box>
            </div>
          </div>
          <div className="bg-[#956f00] flex flex-col justify-evenly p-4 gap-4 z-[10] w-[216px] order-2 rounded-xl text-white relative ">
            <div className="w-[60px] h-[60px] bg-white absolute top-60 right-0 rounded-full z-[-1] blur-[5px] brightness-78">
            </div>
            <span className="text-sm font-[550]">
              Star Facts about your orders!!!
            </span>
            <div className="flex flex-col gap-4 text-sm justify-between">
              <span className="text-sm">
                There are 8 shipments that have been in out for delivery for
                more than 3 days. Check Orders Page
              </span>
              <span className="">
                There are 5 shipments in exception right now.
              </span>
              <span className="">The maximum chargebacks are from Miami.</span>
              <button className="rounded bg-white w-fit p-2 text-black text-xs">
                Check Order Page
              </button>
            </div>
          </div>
          <div className="bg-white flex flex-col p-4 gap-4 w-2/5  rounded-xl border-2">
            <div className="flex gap-2 flex-col ">
              <span className="text-sm font-[550] text-[#4A4A4A]">
                Tracking Page Views Vs Orders
              </span>
              <span className="text-sm">
                Understand user engagement patterns and optimize your tracking
                page for enhanced customer experiences.
              </span>
            </div>
            <div className="bg-[#FFEBD5] p-4 flex flex-col">
              <span className="text-sm">orders</span>
              <div className="flex justify-between ">
                <span className="text-[36px] font-[700]">80</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={"36px"}
                  viewBox="0 0 448 512"
                >
                  <path d="M50.7 58.5L0 160l208 0 0-128L93.7 32C75.5 32 58.9 42.3 50.7 58.5zM240 160l208 0L397.3 58.5C389.1 42.3 372.5 32 354.3 32L240 32l0 128zm208 32L0 192 0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-224z" />
                </svg>
              </div>
            </div>
            <div className="bg-[#ffc879] p-4 flex flex-col">
              <span className="text-sm">Tracking Page Views</span>
              <div className="flex justify-between ">
                <span className="text-[36px] font-[700]">44</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={"36px"}
                  viewBox="0 0 576 512"
                >
                  <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                </svg>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
