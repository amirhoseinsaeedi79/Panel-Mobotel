import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
import AllContext from "../Context/Context";

export default function Topbar() {
  const context = useContext(AllContext);
  const { handleSubmit, register, reset } = useForm();

  function registerHandler() {
    (event) => event.preventDefault();
    reset();
  }
  function logoutHandler() {
    context.login(false)
  }

  const [menu, setMenu] = useState("hidden");
  const [status, setStatus] = useState(false);
  const [profileStatus, setProfileStatus] = useState(false);
  const [profile, setProfile] = useState("hidden");
  const [massageStatus, setMassageStatus] = useState(false);
  const [massage, setMassage] = useState("hidden");
  const [notficationStatus, setnotficationStatus] = useState(false);
  const [notfication, setnotfication] = useState("hidden");

  const home = useRef();
  const userr = useRef();
  const products = useRef();
  const tickets = useRef();
  const orders = useRef();
  const comments = useRef();
  const profiles = useRef();

  useEffect(() => {
    home.current.addEventListener("click", () => {
      home.current.classList.add("text-blue");
    });
  }, []);

  document.body.addEventListener("click", function outsideTopbar() {
    setProfile("hidden");
    setProfileStatus(false);
    setMassage("hidden");
    setMassageStatus(false);
    setnotfication("hidden");
    setnotficationStatus(false);
  });

  function menuHandler() {
    if (status == false) {
      setMenu("visible");
      setStatus(true);
    } else {
      setMenu("hidden");
      setStatus(false);
    }
  }
  function topmenuHandler() {
    if (status == false) {
      setMenu("visible");
      setStatus(true);
    } else {
      setMenu("hidden");
      setStatus(false);
    }
  }

  function profileHandler(e) {
    e.stopPropagation();
    if (profileStatus == false) {
      setProfile("flex");
      setProfileStatus(true);
      setMassage("hidden");
      setnotfication("hidden");
    } else {
      setProfile("hidden");
      setProfileStatus(false);
    }
  }
  function massageHandler(e) {
    e.stopPropagation();
    if (massageStatus == false) {
      setMassage("flex");
      setMassageStatus(true);
      setProfile("hidden");
      setnotfication("hidden");
    } else {
      setMassage("hidden");
      setMassageStatus(false);
    }
  }
  function notficationHandler(e) {
    e.stopPropagation();
    if (notficationStatus == false) {
      setnotfication("flex");
      setnotficationStatus(true);
      setProfile("hidden");
      setMassage("hidden");
    } else {
      setnotfication("hidden");
      setnotficationStatus(false);
    }
  }
  function statusProfile(e) {
    e.stopPropagation();
  }

  return (
    <>
      <div className="w-full h-[60px] border-b-[1px] bg-white border-gray-300 z-50 shadow-md fixed">
        <div className=" px-2 flex flex-row-reverse justify-between ">
          <img
            className="w-[120px] h-full mt-3 hidden md:flex cursor-pointer"
            src="images/logo.jpg"
            alt="logo"
          />
          <svg
            onClick={() => topmenuHandler(event)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 mt-3 visible md:hidden cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <div>
            <form></form>
          </div>
          <div className="flex flex-row items-center justify-center  mt-2">
            <img
              onClick={() => profileHandler(event)}
              className="rounded-full w-[40px] h-[40px] cursor-pointer relative"
              src="images/profile.jpg"
              alt="profile"
            />
            {/* ==================================================== profile */}

            <div
              onClick={() => statusProfile(event)}
              className={`w-[200px] h-[230px] vazir rounded-2xl ${profile} flex-col pt-3 absolute bg-white border-2 border-blue shadow-lg top-[60px] left-[10px]`}
            >
              <div className="w-full flex-col-center ">
                <img
                  className="rounded-full w-[75px] h-[75px] cursor-pointer"
                  src="images/profile.jpg"
                  alt="profile"
                />
                <span className="">امیرحسین سعیدی</span>
                <span className="text-[13px] px-2 pb-3">
                  amirhosein-saeedi@gmail.com
                </span>
                <span className="w-full h-[1px] bg-gray-800"></span>
              </div>
              <div className="w-full pt-3 flex flex-col items-end pr-2 ">
                <div className=" flex flex-row  cursor-pointer hover:text-blue ">
                  <Link to="/Profile" className="mr-1 text-[15px]">
                    پروفایل + ویرایش
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                {/* ............... */}
                <div className=" flex flex-row  cursor-pointer mt-2 hover:text-blue">
                  <span onClick={logoutHandler} className="mr-1 text-[15px]">خروج</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* ==================================================== */}
            <svg
              onClick={() => notficationHandler(event)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-3 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
            {/* ==================================================== notfication */}
            <div
              className={`w-[200px] h-[260px] vazir rounded-2xl ${notfication} flex-col pt-3 absolute bg-white border-2 border-blue shadow-lg top-[60px] left-[10px]`}
            ></div>
            {/* ==================================================== */}
            <svg
              onClick={() => massageHandler(event)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-3 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            {/* ==================================================== massage */}
            <div
              className={`w-[200px] h-[260px] vazir rounded-2xl ${massage} flex-col pt-3 absolute bg-white border-2 border-blue shadow-lg top-[60px] left-[10px]`}
            ></div>
            {/* ==================================================== */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-3 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* =====================================================================sidebar */}

      <div
        className={`navlinks w-[180px] ${menu}  shadow-xl h-full flex flex-col fixed top-0 md:top-[60px] md:flex right-0  bg-gray-800 text-white border-gray-300 z-50`}
      >
        <div className="top md:hidden w-full  flex flex-row items-center  px-3">
          <svg
            onClick={menuHandler}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 mt-2 text-bold text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="w-full flex-col-center md:pt-5 ">
          <img
            className="rounded-full w-[60px] h-[60px] mx-auto border-[2px]"
            src="images/profile.jpg"
            alt="profile"
          />
          <span className="mt-2">امیرحسین سعیدی</span>
          <span className="flex-row-center mt-1 text-gray-300 text-[13px]">
            ادمین
          </span>
        </div>
        <div>
          <form onSubmit={handleSubmit(registerHandler)}>
            <div className="relative px-3 mt-3 ">
              <button
                type="submit"
                className="flex absolute inset-y-0 left-2 items-center pl-3 "
              >
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
              <input
                type="text"
                id="default-search"
                {...register("email")}
                className="block direction px-3 py-1.5 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="جستجو"
              />
            </div>
          </form>
        </div>
        {/* ================================================================ items sidebar */}
        <NavLink
          to="/"
          ref={home}
          className="px-2 py-5 flex flex-row-reverse items-center hover:text-blue "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-1 ml-1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <span className=" mr-1 text-[16px] vazir ">صفحه اصلی</span>
        </NavLink>
        <div className="w-full px-2 mb-3 cursor-pointer">
          <NavLink
            ref={userr}
            to="/User"
            className="w-full flex flex-row-reverse justify-between  items-center hover:text-blue"
          >
            <div className="flex flex-row-reverse items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-1 ml-1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <span className=" mr-1 text-[16px] vazir">کاربران</span>
            </div>
          </NavLink>
        </div>
        <div className="w-full pt-2 px-2 mb-3 cursor-pointer">
          <NavLink
            ref={products}
            to="/Product"
            className="w-full flex flex-row-reverse justify-between items-center hover:text-blue "
          >
            <div className="flex flex-row-reverse items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-1 ml-1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                />
              </svg>

              <span className=" mr-1 text-[16px] vazir ">محصولات</span>
            </div>
          </NavLink>
        </div>
        <div className="w-full pt-2 px-2 mb-3 ">
          <NavLink
            ref={tickets}
            to="/Ticket"
            className="w-full flex flex-row-reverse justify-between  items-center hover:text-blue"
          >
            <div className="flex flex-row-reverse items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-1 ml-1.5  bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>

              <span className=" mr-1 text-[16px] vazir cursor-pointer">
                تیکت ها
              </span>
            </div>
          </NavLink>
        </div>
        <NavLink
          ref={orders}
          to="/Orders"
          className="px-2 pt-2 mb-3 flex flex-row-reverse hover:text-blue "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-1 ml-1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>

          <span className=" mr-1 text-[16px] vazir">سفارشات</span>
        </NavLink>
        <NavLink
          ref={comments}
          to="/Comments"
          className=" px-2 mb-3 pt-2 flex flex-row-reverse hover:text-blue"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-1 ml-1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
            />
          </svg>

          <span className=" mr-1 text-[16px] vazir ">نظرات</span>
        </NavLink>

        {/* ================ */}
        <NavLink
          ref={profiles}
          to="/Profile"
          className=" px-2 mb-3 pt-2 flex flex-row-reverse hover:text-blue"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-1 ml-1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <span className=" mr-1 text-[16px] vazir ">پروفایل</span>
        </NavLink>
        {/* ================ */}

        <div
         
          className=" px-2 mb-3 pt-2 flex flex-row-reverse hover:text-blue cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-1 ml-1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
          <span onClick={logoutHandler} className=" mr-1 text-[16px] vazir ">خروج از حساب</span>
        </div>
        {/* ================ */}
      </div>
    </>
  );
}
