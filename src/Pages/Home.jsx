import {
  LineChart,
  Line,
  BarChart,
  Tooltip,
  Bar,
  XAxis,
  ResponsiveContainer,
} from "recharts";
import Growth from "../data-Recharts/Growth";
import Users from "../data-Recharts/Users.jsx";
import More from ".././components/More.jsx";
import { useEffect, useState } from "react";
import { useRef } from "react";

export default function Home() {
  const [statuGrowth, setGrowth] = useState(false);
  const [statussale, setStatusSale] = useState(false);
  const [statususer, setStatusUser] = useState(false);

  const growth = useRef();
  const sale = useRef();
  const user = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!growth.current.contains(e.target)) {
        setGrowth(false);
      }
      if (!sale.current.contains(e.target)) {
        setStatusSale(false);
      }
      if (!user.current.contains(e.target)) {
        setStatusUser(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  });

  return (
    <div className="bg-orginal pt-16 w-full md:w-[calc(100%_-_200px)] vazir ">
      <div className="container ">
        {/* =============================================================================growth */}
        <div className="3chart grid grid-rows-1 lg:grid-cols-3 ">
          <div className=" bg-white  p-3 items-center mt-3 mx-3 rounded-xl shadow-lg">
            <div className="flex flex-row justify-between items-center">
              <div ref={growth} className="relative">
                <svg
                  onClick={() => {
                    setGrowth(!statuGrowth);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                {statuGrowth ? (
                  <More status={"flex"} />
                ) : (
                  <More status={"hidden"} />
                )}
              </div>
              <span className="text-[20px]">رشد</span>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="mt-8">
                <LineChart
                  width={130}
                  height={50}
                  data={Growth}
                  margin={{ top: 5, right: 20, bottom: 0, left: 5 }}
                >
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#068fff"
                    strokeWidth={2}
                  />
                </LineChart>
              </div>
              <div className="flex flex-col-center">
                <span className="text-[25px] ">80.56%</span>
                <div className="flex flex-row items-center text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                    />
                  </svg>
                  <span className="pt-1">3.6%</span>
                </div>
              </div>
            </div>
          </div>
          {/* =============================================================================growth */}
          <div className="w- bg-white grid grid-cols-1 p-3 items-center mt-3 mx-3 rounded-xl shadow-lg">
            <div className="flex flex-row justify-between items-center">
              <div  ref={sale} className="relative">
                <svg
                
                  onClick={() => {
                    setStatusSale(!statussale);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                {statussale ? (
                  <More status={"flex"} />
                ) : (
                  <More status={"hidden"} />
                )}
              </div>
              <span className="text-[20px]">سفارشات</span>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="mt-8">
                <BarChart width={130} height={50} data={Growth}>
                  <Bar
                    dataKey="uv"
                    barSize={30}
                    fill="#068fff"
                    strokeWidth={2}
                  />
                </BarChart>
              </div>
              <div className="flex flex-col-center">
                <span className="text-[25px] ">1,500</span>
                <div className="flex flex-row items-center text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                    />
                  </svg>
                  <span className="pt-1">6.1%</span>
                </div>
              </div>
            </div>
          </div>
          {/* =============================================================================growth */}
          <div className="bg-white grid grid-cols-1 p-3 items-center mt-3 mx-3 rounded-xl shadow-lg">
            <div className="flex flex-row justify-between items-center">
              <div ref={user} className="relative">
                <svg
                  onClick={() => {
                    setStatusUser(!statususer);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                {statususer ? (
                  <More status={"flex"} />
                ) : (
                  <More status={"hidden"} />
                )}
              </div>
              <span className="text-[20px]">مشتریان</span>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="mt-8">
                <LineChart
                  width={130}
                  height={50}
                  data={Users}
                  margin={{ top: 5, right: 20, bottom: 0, left: 5 }}
                >
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#068fff"
                    strokeWidth={2}
                  />
                </LineChart>
              </div>
              <div className="flex flex-col-center">
                <span className="text-[25px] ">952</span>
                <div className="flex flex-row items-center text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                    />
                  </svg>
                  <span className="pt-1">9.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[200px] lg:h-[400px] bg-white mx-3 md:mx-3 p-5 rounded-xl mt-5 shadow-lg">
          <span className="w-full flex flex-row item-end justify-end text-[20px]">
            فروش ماهیانه
          </span>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={700} height={300} data={Growth}>
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#068fff"
                strokeWidth={3}
              />
              <XAxis dataKey="name" />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* ================================================================ all charts */}
    </div>
  );
}
