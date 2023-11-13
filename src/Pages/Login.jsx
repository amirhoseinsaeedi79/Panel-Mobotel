import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import AllContext from "../Context/Context";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const context = useContext(AllContext);
  const { handleSubmit, register } = useForm();

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
      {!context.islogin ? (
        <div className="login w-[100%] h-[100vh]">
          <div className="rounded-xl bg-gray-800 bg-opacity-20 px-16 py-10 mx-20 shadow-lg backdrop-blur-md max-sm:px-6 border-2 border-blue ">
            <div className=" text-center flex flex-row justify-center vazir-bold">
              <span className=" text-white text-[60px]">MOBO</span>
              <span className=" text-blue text-[20px] pt-9 pl-1">TEL</span>
            </div>
            <div className="text-white ">
              <div className="mb-8 flex flex-col items-center"></div>
              <form onSubmit={handleSubmit(registerHandler)}>
                <div className="mb-4 text-lg text-black">
                  <input
                    className="border-2 border-blue rounded-3xl  bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-gray-700 shadow-lg outline-none backdrop-blur-md"
                    type="text"
                    defaultValue={"amirhosein12345"}
                    name="name"
                    {...register("name")}
                    placeholder="نام کاربری خود را وارد کنید"
                  />
                </div>

                <div className="mb-4 text-lg text-black">
                  <input
                    className="border-2  border-blue rounded-3xl  bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-gray-700 shadow-lg outline-none backdrop-blur-md"
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
                    className="rounded-3xl border-2 border-blue hover:bg-blue bg-opacity-50 px-5 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300"
                  >
                    وارد شوید
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/Home" />
      )}
    </>
  );
}
