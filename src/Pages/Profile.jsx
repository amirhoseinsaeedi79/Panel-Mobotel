import { useContext } from "react";
import AllContext from "../Context/Context";
import EditAdminModal from "../components/Modals/EditAdminModal";

export default function Profile() {
  const context = useContext(AllContext);
  return (
    <div className="w-full pt-24 h-[100vh] md:w-[calc(100%_-_180px)] px-2">
      <div className="w-full flex-col-center">
        <span className="vazir-bold text-[25px]">پروفایل کاربری</span>
        <img
          src="images/profile.jpg"
          alt="profile"
          className="w-[100px] h-[100px] rounded-full mt-5"
        />
      </div>
      {context.admin !== "undefined" && (
        <div className="direction w-full flex-col-center border-[3px] border-blue p-3 rounded-xl mt-5 vazir-bold bg-white shadow-xl">
          <div className="w-full grid grid-col-1 md:grid-cols-2  lg:grid-cols-3 text-center pt-3 mb-3">
            <div className="mr-2 mb-5 flex flex-col text-[17px]">
              <span>نام کاربری :</span>
              <span className="mr-2">{context.admin.username}</span>
            </div>
            <div className="mr-2 mb-5 flex flex-col ">
              <span className=" text-[17px]">آدرس ایمیل :</span>
              <span className="mt-2 md:mt-0 md:mr-2  text-[15px]">
                {context.admin.email}
              </span>
            </div>
            <div className="mr-2 mb-5 text-[17px]">
              <span>عنوان کاربر :</span>
              <span className="mr-2">ادمین</span>
            </div>
            <div className="mr-2 mb-5 text-[17px]">
              <span>شماره تماس :</span>
              <span className="mr-2">{context.admin.phone}</span>
            </div>
            <div className="mr-2 mb-5 text-[17px]">
              <span>رمز عبور :</span>
              <span className="mr-2">{context.admin.password}</span>
            </div>
            <div className="mr-2 mb-5 text-[17px]">
              <span>تاریخ ثبت نام :</span>
              <span className="mr-2">1401/05/14</span>
            </div>
          </div>
          <div
            onClick={() => context.showProfileAdmin(true)}
            className="w-[170px] h-[50px] rounded-xl flex-row-center text-gray-200 bg-blue cursor-pointer mb-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
            <span className="vazir-bold mr-3 ">ویرایش پروفایل</span>
          </div>
        </div>
      )}
      {context.ShowProfile && <EditAdminModal />}
    </div>
  );
}
