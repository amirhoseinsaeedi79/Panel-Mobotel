import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  CartesianGrid,
} from "recharts";
import Growth from "../data-Recharts/Growth";
import Sales from "../data-Recharts/sale";
import Users from "../data-Recharts/Users.jsx";
// import BigChart from "../data-Recharts/BigChart.jsx";
import More from ".././components/More.jsx";
import { useEffect, useState } from "react";
import { useRef } from "react";
import BestProduct from "../components/BestProduct";
import LastTransactions from "../components/LastTransactions";

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
    <div className="bgimage pt-16 w-full md:w-[calc(100%_-_180px)] vazir">
      <div className="container ">
        {/* =============================================================================growth */}
        <div className="3chart grid grid-rows-1 lg:grid-cols-3 ">
          <div className=" blue  p-3 items-center mt-3 mx-3 rounded-xl shadow-lg">
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
                  data={Sales}
                  margin={{ top: 5, right: 20, bottom: 0, left: 5 }}
                >
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#0f0f0f"
                    strokeWidth={2}
                  />
                  <Tooltip />
                </LineChart>
              </div>
              <div className="flex flex-col-center text-black">
                <span className="text-[25px] ">80.56%</span>
                <div className="flex flex-row items-center vazir-bold text-black">
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
          <div className="sky grid grid-cols-1 p-3 items-center border-[2px] border-gray-300  mt-3 mx-3 rounded-xl shadow-lg">
            <div className="flex flex-row justify-between items-center">
              <div ref={sale} className="relative">
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
                <LineChart width={130} height={50} data={Sales}>
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#0f0f0f"
                    strokeWidth={2}
                  />
                  <Tooltip />
                </LineChart>
              </div>
              <div className="flex flex-col-center">
                <span className="text-[25px] ">1,500</span>
                <div className="flex flex-row items-center vazir-bold text-black">
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
          <div className="Purple grid grid-cols-1 p-3 items-center mt-3 mx-3 rounded-xl shadow-lg">
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
                    stroke="#0f0f0f"
                    strokeWidth={2}
                  />
                  <Tooltip />
                </LineChart>
              </div>
              <div className="flex flex-col-center">
                <span className="text-[25px] ">952</span>
                <div className="flex flex-row items-center text-black">
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
                  <span className="pt-1 vazir-bold">9.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[190px] lg:h-[280px] bg-white mx-3 mb-5 md:mx-3   rounded-xl border-[2px] border-blue mt-5 shadow-lg">
          <span className="w-full flex flex-row item-end justify-end text-[20px] px-2 pt-3 pb-2 vazir-bold">
            فروش ماهیانه
          </span>
          <ResponsiveContainer width="100%" height="75%">
            <AreaChart width={730} height={250} data={Growth}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#068fff" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#068fff" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="1 1" />

              <Tooltip />
              <Area
                type="monotone"
                dataKey="فروش"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="pv"
                stroke="#068fff"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* ================================================================ end charts */}

      <div className="mt-5 direction flex flex-col lg:flex-row container">
        <BestProduct />
        <LastTransactions />
      </div>
    </div>
  );
}
