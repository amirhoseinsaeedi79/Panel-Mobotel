import {
  useContext,
  useEffect,
} from 'react';
import ReactDOM from 'react-dom';

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import AllContext from '../../Context/Context';
import { PutUser } from '../../Services/Axios/Requests/Users';

export default function EditAdminModal() {
  const context = useContext(AllContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function exitHandler() {
    context.showProfileAdmin(false);
  }

  function registerHandler(data) {
    const editadmin = {
      username: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
      image: "images/profile.jpg",
    };

    PutUser(editadmin, 1).then((res) => context.RenderAdmin(res.data));

    toast.success("اطلاعات ویرایش شد", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    context.showProfileAdmin(false);
  }


  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      context.showProfileAdmin(false);
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-parent active direction" onClick={handleClickOutside}>
      <div className="mx-1 flex w-[98%] flex-col rounded-xl border-2 border-blue bg-white shadow-2xl md:w-[349px]">
        <div className="blue rounded-t-lg py-2">
          <svg
            onClick={exitHandler}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="float-left ml-3 h-8 w-8 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <h3 className="vazir-bold pr-3 text-[20px] text-gray-800 md:pr-5">
            ویرایش پروفایل{" "}
          </h3>
        </div>
        <form
          onSubmit={handleSubmit(registerHandler)}
          className="px-3 py-3 md:px-10"
        >
          <div className="flex w-full flex-col items-end text-center">
            <div className="flex flex-row items-baseline md:mr-3">
              <label
                htmlFor="#id"
                className="vazir-bold min-w-[30px] text-[18px]"
              >
                نام :
              </label>
              <div className="mr-2.5 flex flex-col">
                <input
                  id="name"
                  type="text"
                  className="mb-1 rounded-xl border-[3px] border-blue px-2 py-1 text-black focus:outline-none"
                  {...register("name", {
                    required: "وارد کردن نام اجباریست",
                    minLength: {
                      value: 8,
                      message: "طول نام وارد شده کمتراز 8 کارکتر است",
                    },
                  })}
                />
                <div className="error">
                  {errors.name && errors.name.message}
                </div>
              </div>
            </div>
            {/* ============== */}
            <div className="flex flex-row items-baseline md:mr-3">
              <label
                htmlFor="#email"
                className="vazir-bold min-w-[52px] text-[18px]"
              >
                ایمیل :
              </label>
              <div className="mr-2.5 flex flex-col">
                <input
                  id="email"
                  type="email"
                  className="mb-1 w-full rounded-xl border-[3px] border-blue px-2 py-1 text-black focus:outline-none"
                  {...register("email", {
                    required: "وارد کردن ایمیل اجباریست",
                  })}
                />
                <div className="error">
                  {errors.email && errors.email.message}
                </div>
              </div>
            </div>
            {/* ============== */}
            <div className="flex flex-row items-baseline md:mr-3">
              <label
                htmlFor="#phone"
                className="vazir-bold min-w-[100px] text-[18px]"
              >
                شماره تماس :
              </label>
              <div className="mr-2.5 flex flex-col">
                <input
                  id="phone"
                  type="text"
                  className="mb-1 w-full rounded-xl border-[3px] border-blue px-2 py-1 text-black focus:outline-none"
                  {...register("phone", {
                    required: "وارد کردن شماره تماس اجباریست",
                    minLength: {
                      value: 11,
                      message: "طول شماره وارد شده کمتراز11 کارکتر است",
                    },
                    maxLength: {
                      value: 11,
                      message: "طول شماره وارد شده صحیح نیست ",
                    },
                  })}
                />
                <div className="error">
                  {errors.phone && errors.phone.message}
                </div>
              </div>
            </div>
            {/* ============== */}
            <div className="flex flex-row items-baseline md:mr-3">
              <label
                htmlFor="#password"
                className="vazir-bold min-w-[109px] text-[18px]"
              >
                رمز عبور جدید :
              </label>
              <div className="mr-2.5 flex flex-col">
                <input
                  id="password"
                  type="password"
                  className="mb-1 w-full rounded-xl border-[3px] border-blue px-2 py-1 text-black focus:outline-none"
                  {...register("password", {
                    required: "وارد کردن رمز عبور اجباریست",
                    minLength: {
                      value: 8,
                      message: "طول رمز وارد شده کمتراز8 کارکتر است",
                    },
                  })}
                />
                <div className="error">
                  {errors.password && errors.password.message}
                </div>
              </div>
            </div>
            {/* ============== */}
            <div className="flex flex-row items-baseline md:mr-3">
              <label
                htmlFor="#image"
                className="vazir-bold min-w-[93px] text-[18px]"
              >
                تصویر نمایه :
              </label>
              <div className="mr-2.5 flex flex-col">
                <input
                  id="image"
                  type="file"
                  className="mb-1 w-10/12 rounded-xl px-2 py-1 text-black focus:outline-none"
                  {...register("image", {
                    // required: "وارد کردن عکس اجباریست",
                  })}
                />
                <div className="error">
                  {errors.image && errors.image.message}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-row-center">
            <button className="text-md vazir-bold np mt-3 max-w-[120px] rounded-xl border-[3px] border-blue px-6 py-1.5 hover:text-blue">
              ارسال
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
