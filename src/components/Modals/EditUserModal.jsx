import {
  useContext,
  useEffect,
} from 'react';
import ReactDOM from 'react-dom';

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import AllContext from '../../Context/Context';
import {
  GetUser,
  PutUser,
} from '../../Services/Axios/Requests/Users';

export default function EditUserModal(item) {
  const context = useContext(AllContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function registerHandler(data) {
    const EditUser = {
      username: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      rasteh: data.raste,
    };

    PutUser(EditUser, item.item.id).then((res) => console.log(res));

    toast.success("اطلاعات کاربر ویرایش شد", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    GetUser().then((data) => context.RenderUser(data.data));

    GetUser().then((res) => context.RenderUser(res.data));

    context.EditUser(false);
  }

  function exitHandler() {
    context.EditUser(false);
  }

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      context.EditUser(false);
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-parent active direction" onClick={handleClickOutside}>
      <div className="w-[98%] md:w-[90%] lg:w-[50%] flex flex-col border-2 border-blue shadow-2xl rounded-xl bg-white mx-1  ">
        <div className=" py-2 blue rounded-t-lg">
          <svg
            onClick={exitHandler}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 float-left ml-3 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <h3 className="text-[20px] vazir-bold md:pr-5 pr-3  text-gray-800">
            ویرایش کاربر{" "}
          </h3>
        </div>
        <form
          onSubmit={handleSubmit(registerHandler)}
          className="md:px-10 px-3 py-3"
        >
          {/* ===========================name */}
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
            <div className="">
              <label htmlFor="#id" className="vazir-bold text-[16px] ml-2 text-blue">
                نام قبلی :
              </label>
              <span className="text-[16px]">{item.item.username}</span>
            </div>
            <div className="md:mr-3 flex flex-row items-baseline ">
              <label
                htmlFor="#id"
                className="vazir-bold text-[16px] text-blue min-w-[75px]"
              >
                نام جدید :
              </label>
              <div className="mr-2.5 flex flex-col">
                <input
                  id="name"
                  type="text"
                  className=" mb-1 text-black py-1 px-2 border-[3px] border-blue  focus:outline-none rounded-xl "
                  {...register("name", {
                    required: "وارد کردن نام اجباریست",
                  })}
                />
                <div className="error ">
                  {errors.name && errors.name.message}
                </div>
              </div>
            </div>
          </div>
          {/* ===========================price */}
          <div className="flex flex-col md:flex-row md:place-items-baseline md:justify-between mb-2 ">
            <div className="">
              <label htmlFor="#id" className="vazir-bold text-[16px] ml-2 text-blue">
                ایمیل قبلی :
              </label>
              <span className="text-[16px]">{item.item.email}</span>
            </div>
            <div className="md:mr-3 flex flex-row items-baseline ">
              <label
                htmlFor="#email"
                className="vazir-bold text-[16px] text-blue min-w-[95px] "
              >
                ایمیل جدید :
              </label>
              <div className="mr-2.5 flex flex-col">
                <input
                  id="email"
                  type="email"
                  className="w-full mb-1 text-black py-1 px-2 border-[3px] border-blue  focus:outline-none rounded-xl "
                  {...register("email", {
                    required: "وارد کردن ایمیل اجباریست",
                  })}
                />
                <div className="error ">
                  {errors.email && errors.email.message}
                </div>
              </div>
            </div>
          </div>
          {/* =========================== */}

          <div className="flex flex-col md:flex-row md:place-items-baseline md:justify-between mb-2 ">
            <div className="">
              <label htmlFor="#id" className="vazir-bold text-[16px] ml-2 text-blue">
                عنوان قبلی :
              </label>
              <span className="text-[16px] "> {item.item.rasteh !== undefined ? item.item.rasteh : "کاربر عادی"}</span>
            </div>
            <div className="md:mr-3 flex flex-row items-baseline ">
              <label
                htmlFor="#raste"
                className="vazir-bold text-[16px] text-blue min-w-[105px]"
              >
                عنوان جدید :
              </label>
              <div className="flex flex-col">
                <input
                  id="raste"
                  type="text"
                  className="w-full mb-1 text-black py-1 px-2 border-[3px] border-blue  focus:outline-none rounded-xl "
                  {...register("raste", {
                    required: "وارد کردن عنوان اجباریست",
                  })}
                />
                <div className="error ">
                  {errors.raste && errors.raste.message}
                </div>
              </div>
            </div>
          </div>
          {/* =========================== */}
          <div className="flex flex-col md:flex-row md:place-items-baseline md:justify-between mb-2 ">
            <div className="">
              <label htmlFor="#id" className="vazir-bold text-[16px] ml-2 text-blue">
                شماره تماس قبلی :
              </label>
              <span className="text-[16px]">{item.item.phone} </span>
            </div>
            <div className="md:mr-3 flex flex-row items-baseline ">
              <label
                htmlFor="#phone"
                className="vazir-bold text-[16px] text-blue min-w-[143px]"
              >
                شماره تماس جدید :
              </label>
              <div className="flex flex-col mr-2.5">
                <input
                  id="phone"
                  type="text"
                  className="w-full mb-1 text-black py-1 px-2 border-[3px] border-blue  focus:outline-none rounded-xl "
                  {...register("phone", {
                    required: "وارد کردن شماره تماس اجباریست",
                  })}
                />
                <div className="error ">
                  {errors.phone && errors.phone.message}
                </div>
              </div>
            </div>
          </div>
          {/* =========================== */}
          <div className="flex flex-col md:flex-row md:place-items-baseline md:justify-between mb-2 ">
            <div className="">
              <label htmlFor="#id" className="vazir-bold text-[16px] ml-2 text-blue">
                رمز عبور قبلی :
              </label>
              <span className="text-[16px] ">{item.item.password} </span>
            </div>
            <div className="md:mr-3 flex flex-row items-baseline ">
              <label
                htmlFor="#password"
                className="vazir-bold text-[16px] text-blue min-w-[110px]"
              >
                رمز عبور جدید :
              </label>
              <div className="flex flex-col mr-2.5">
                <input
                  id="password"
                  type="password"
                  className="w-full mb-1 text-black py-1 px-2 border-[3px] border-blue  focus:outline-none rounded-xl "
                  {...register("password", {
                    required: "وارد کردن رمزعبور اجباریست",
                  })}
                />
                <div className="error ">
                  {errors.password && errors.password.message}
                </div>
              </div>
            </div>
          </div>

          {/* ===========================image */}
          <div className="flex-row-center">
            <button className="max-w-[120px] px-6 py-1.5 hover:text-blue text-md vazir-bold rounded-xl border-[3px] border-blue mt-3 np">
              ارسال
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
