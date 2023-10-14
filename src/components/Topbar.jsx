import { useState } from "react";
import { Link } from "react-router-dom";

export default function Topbar() {
  const [menu, setMenu] = useState("hidden");
  const [sidbarState, setSidbarState] = useState("flex");
  const [status, setStatus] = useState(false);
  const [sideStatus, setSideStatus] = useState(true);
  const [proState, setProState] = useState("flex");
  const [proStatus, setproStatus] = useState(true);
  const [supState, setSupState] = useState("flex");
  const [supStatus, setSupStatus] = useState(true);
  const [ProIcone, setProIcone] = useState("M19.5 8.25l-7.5 7.5-7.5-7.5");
  const [sidIcone, setSidIcone] = useState("M19.5 8.25l-7.5 7.5-7.5-7.5");
  const [supIcone, setSupIcone] = useState("M19.5 8.25l-7.5 7.5-7.5-7.5");

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

  function sidbarHandler() {
    if (sideStatus == true) {
      setSidIcone("M19.5 8.25l-7.5 7.5-7.5-7.5")
      setSidbarState("hidden");
      setSideStatus(false);
    } else {
      setSidIcone("M4.5 15.75l7.5-7.5 7.5 7.5")
      setSidbarState("flex");
      setSideStatus(true);
    }
  }

  function prorHandler() {
    if (proStatus == true) {
      setProState("hidden");
      setProIcone("M19.5 8.25l-7.5 7.5-7.5-7.5")
      setproStatus(false);
    } else {
      setProState("flex");
      setproStatus(true);
      setProIcone("M4.5 15.75l7.5-7.5 7.5 7.5")
    }
  }

  function supHandler() {
    if (supStatus == true) {
      setSupState("hidden");
       setSupIcone("M19.5 8.25l-7.5 7.5-7.5-7.5")
      setSupStatus(false);
    } else {
      setSupState("flex");
      setSupIcone("M4.5 15.75l7.5-7.5 7.5 7.5")
      setSupStatus(true);
    }
  }

  return (
    <>
      <div className="w-full h-[60px] border-b-[1px] border-gray-300 z-50">
        <div className=" px-2 flex flex-row-reverse justify-between ">
          <img
            className="w-[120px] h-full mt-3 hidden md:flex"
            src="images/logo.jpg"
            alt="logo"
          />
          <svg
            onClick={topmenuHandler}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 mt-3 visible md:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <div className="flex flex-row items-center justify-center  mt-2">
            <img
              className="rounded-full w-[40px] h-[40px]"
              src="images/profile.jpg"
              alt="profile"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-3"
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
        className={`w-[200px] ${menu} h-full flex flex-col fixed top-0 md:top-[60px] md:flex right-0 border-l-[1px] bg-white border-gray-300 z-20`}
      >
        <div className="top md:hidden w-full h-[60px] flex flex-row-reverse items-center justify-between border-b-[1px] border-gray-300 px-3">
          <img
            className="w-[120px] h-12 mt-2 "
            src="images/logo.jpg"
            alt="logo"
          />
          <svg
            onClick={menuHandler}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 text-bold "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        {/* ================================================================ items sidebar */}
        <Link
          to="/"
          className="px-2 py-3 flex flex-row-reverse items-center hover:text-blue"
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
          <span className=" mr-1 text-[18px] vazir ">صفحه اصلی</span>
        </Link>
        <div className="w-full px-2 mb-3 cursor-pointer">
          <div className="w-full flex flex-row-reverse justify-between  items-center">
            <div

              className="flex flex-row-reverse items-center"
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

              <span className="ml-36 mr-1 text-[18px] vazir">کاربران</span>
            </div>
          </div>
          <ul
            className={`flex flex-col items-start mr-4 mt-1 vazir text-[13px] text-gray-800 list-disc direction`}
          >
            <Link to="/AddUser" className="w-full">
              <li className="w-full mt-1.5 mr-3 hover:text-blue">
                افزودن کاربر
              </li>
            </Link>
            <Link to="/RemoveUser" className="w-full">
              <li className="w-full mt-1.5 mr-3 hover:text-blue">حذف کاربر</li>
            </Link>
            <Link to="/EditUser" className="w-full">
              <li className="w-full mt-1.5 mr-3 hover:text-blue">
                ویرایش کاربر
              </li>
            </Link>
          </ul>
        </div>

        <div className="w-full px-2 mb-3 cursor-pointer">
          <div className="w-full flex flex-row-reverse justify-between  items-center">
            <div
              className="flex flex-row-reverse items-center"
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
                  d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                />
              </svg>

              <span className="ml-[123px] mr-1 text-[18px] vazir ">
                محصولات
              </span>

            </div>
          </div>
          <ul
            className={`flex flex-col items-start mr-4 mt-1 vazir text-[13px] text-gray-800 list-disc direction`}
          >
            <Link to="/AddProduct" className="w-full">
              <li className="w-full mt-1.5 mr-3 hover:text-blue">
                افزودن محصول
              </li>
            </Link>
            <Link to="/RemoveProduct" className="w-full">
              <li className="w-full mt-1.5 mr-3 hover:text-blue">حذف محصول</li>
            </Link>
            <Link to="/EditProduct" className="w-full">
              <li className="w-full mt-1.5 mr-3 hover:text-blue">
                ویرایش محصول
              </li>
            </Link>
          </ul>
        </div>

        <div className="w-full px-2 mb-3 ">
          <div className="w-full flex flex-row-reverse justify-between  items-center">
            <div

              className="flex flex-row-reverse items-center "
            >
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

              <span className="ml-[131px] mr-1 text-[19px] vazir ">
                پشتیبانی
              </span>
            </div>
          </div>
          <ul
            className={`flex flex-col items-start mr-4 mt-1 vazir text-[13px] text-gray-800 list-disc direction`}
          >
            <Link to="/Offers" className="w-full">
              <li className="w-full mt-1.5 mr-3 hover:text-blue">
                انتقادات و پشنهادات
              </li>
            </Link>
            <Link to="/Ticket" className="w-full">
              <li className="w-full mt-1.5 mr-3 hover:text-blue">تیکت ها</li>
            </Link>
          </ul>
        </div>

        <Link
          to="/Orders"
          className="px-2 mb-3 flex flex-row-reverse hover:text-blue "
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

          <span className=" mr-1 text-[18px] vazir">سفارشات</span>
        </Link>
        <Link
          to="/Comments"
          className=" px-2 mb-3 flex flex-row-reverse hover:text-blue"
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

          <span className=" mr-1 text-[18px] vazir ">نظرات</span>
        </Link>
      </div>
    </>
  );
}
