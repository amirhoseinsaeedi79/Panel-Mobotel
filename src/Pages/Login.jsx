import { useContext } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import AllContext from '../Context/Context';

export default function Login() {
  const context = useContext(AllContext);
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate()

  function registerHandler(data) {
    (event) => event.preventDefault();
    if (data.name == "amirhosein12345" && data.password == "amir12345") {
      localStorage.setItem("login", data.name);
      context.login(true);
      toast.success("به پنل خود خوش آمدید", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/")
    } else {
      toast.error("نام کاربری یا رمز عبور اشتباه است", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  return (
    <>
      <div className="login h-[100vh] w-[100%]">
        <div className="mx-20 rounded-xl border-2 border-blue bg-gray-800 bg-opacity-20 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-6">
          <div className="vazir-bold flex flex-row justify-center text-center">
            <span className="text-[60px] text-white">MOBO</span>
            <span className="pl-1 pt-9 text-[20px] text-blue">TEL</span>
          </div>
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center"></div>
            <form onSubmit={handleSubmit(registerHandler)}>
              <div className="mb-4 text-lg text-black">
                <input
                  className="rounded-3xl border-2 border-blue bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-gray-700 shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  defaultValue={"amirhosein12345"}
                  name="name"
                  {...register("name")}
                  placeholder="نام کاربری خود را وارد کنید"
                />
              </div>

              <div className="mb-4 text-lg text-black">
                <input
                  className="rounded-3xl border-2 border-blue bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-gray-700 shadow-lg outline-none backdrop-blur-md"
                  type="Password"
                  defaultValue={"amir12345"}
                  name="pass"
                  {...register("password")}
                  placeholder="رمز عبور خود را وارد کنید"
                />
              </div>
              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="rounded-3xl border-2 border-blue bg-opacity-50 px-5 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-blue"
                >
                  وارد شوید
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
