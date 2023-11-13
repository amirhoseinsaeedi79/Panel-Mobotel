import { useContext } from "react";
import { useForm } from "react-hook-form";
import AllContext from "../../Context/Context";
import ReactDOM from "react-dom";
import { PutUser } from "../../Services/Axios/Requests/Users";
import { toast } from "react-toastify";
export default function EditAdminModal(prop) {
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

  return ReactDOM.createPortal(
    <div className="modal-parent active direction">
      <div className="w-[98%] md:w-[349px]  flex flex-col border-2 border-blue shadow-2xl rounded-xl bg-white mx-1">
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
          <h3 className="text-[22px] vazir-bold md:pr-5 pr-3  text-gray-800">
            ویرایش پروفایل{" "}
          </h3>
        </div>
        <form
          onSubmit={handleSubmit(registerHandler)}
          className="md:px-10 px-3 py-3  "
        >
          <div className="w-full flex flex-col  items-end  text-center">
            <div className="md:mr-3 flex flex-row items-baseline ">
              <label
                htmlFor="#id"
                className="vazir-bold text-[18px] min-w-[30px]"
              >
                نام :
              </label>
              <div className="mr-2.5 flex flex-col">
                <input
                  id="name"
                  type="text"
                  className=" mb-1 text-black py-1 px-2 border-[3px] border-blue  focus:outline-none rounded-xl "
                  {...register("name", {
                    required: "وارد کردن نام اجباریست",
                    minLength: {
                      value: 8,
                      message: "طول نام وارد شده کمتراز 8 کارکتر است",
                    },
                  })}
                />
                <div className="error ">
                  {errors.name && errors.name.message}
                </div>
              </div>
            </div>
            {/* ============== */}
            <div className="md:mr-3 flex flex-row items-baseline ">
              <label
                htmlFor="#email"
                className="vazir-bold text-[18px] min-w-[52px] "
              >
                ایمیل :
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
            {/* ============== */}
            <div className="md:mr-3 flex flex-row items-baseline ">
              <label
                htmlFor="#phone"
                className="vazir-bold text-[18px] min-w-[100px]"
              >
                شماره تماس :
              </label>
              <div className="flex flex-col mr-2.5">
                <input
                  id="phone"
                  type="text"
                  className="w-full mb-1 text-black py-1 px-2 border-[3px] border-blue  focus:outline-none rounded-xl "
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
                <div className="error ">
                  {errors.phone && errors.phone.message}
                </div>
              </div>
            </div>
            {/* ============== */}
            <div className="md:mr-3 flex flex-row items-baseline ">
              <label
                htmlFor="#password"
                className="vazir-bold text-[18px] min-w-[109px]"
              >
                رمز عبور جدید :
              </label>
              <div className="flex flex-col mr-2.5">
                <input
                  id="password"
                  type="password"
                  className="w-full mb-1 text-black py-1 px-2 border-[3px] border-blue  focus:outline-none rounded-xl "
                  {...register("password", {
                    required: "وارد کردن رمز عبور اجباریست",
                    minLength: {
                      value: 8,
                      message: "طول رمز وارد شده کمتراز8 کارکتر است",
                    },
                  })}
                />
                <div className="error ">
                  {errors.password && errors.password.message}
                </div>
              </div>
            </div>
            {/* ============== */}
            <div className="md:mr-3 flex flex-row items-baseline ">
              <label
                htmlFor="#image"
                className="vazir-bold text-[18px] min-w-[93px]"
              >
                تصویر نمایه :
              </label>
              <div className="flex flex-col mr-2.5">
                <input
                  id="image"
                  type="file"
                  className="w-10/12 mb-1 text-black py-1 px-2  focus:outline-none rounded-xl "
                  {...register("image", {
                    // required: "وارد کردن عکس اجباریست",
                  })}
                />
                <div className="error ">
                  {errors.image && errors.image.message}
                </div>
              </div>
            </div>
          </div>
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
