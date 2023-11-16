import { useForm } from "react-hook-form";
import AllContext from "../Context/Context";
import { useContext, useState } from "react";
import EditUserModal from "../components/Modals/EditUserModal";
import { GetUser, PostUser } from "../Services/Axios/Requests/Users";
import { toast } from "react-toastify";
import RemoveUserMOdal from "../components/Modals/RemoveUserMOdal";
import Empty from "../components/Empty";
export default function User() {
  const [edit, setEdit] = useState();
  const [remove, setRemove] = useState();
  const context = useContext(AllContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function registerHandler(data) {
    const newuser = {
      username: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
    };

    if (data.password == data.repeatPassword) {
      await PostUser(newuser).then((res) => console.log(res));
      GetUser()
        .then((res) => res.data)
        .then((data) => context.RenderUser(data.reverse()));
      reset();

      toast.success("کاربر جدید ثبت شد", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("رمزعبور با تکرار آن برابر نیست", {
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

  async function editHandler(item) {
    await setEdit(item);
    context.EditUser(true);
  }

  function removeHandler(item) {
    context.Deleteuser(true);
    setRemove(item);
  }

  return (
    <div className="w-full pt-24  md:w-[calc(100%_-_180px)]">
      {/* ===================================================== start newUser */}
      <div className=" vazir direction ">
        <form
          onSubmit={handleSubmit(registerHandler)}
          className="flex-col-center border-b-2 border-blue pb-3"
        >
          {/* =================================================== username */}
          <div className="flex-row-center text-[20px] md:text-[25px] mb-5 vazir-bold">
            <p>افزودن کاربر جدید</p>
          </div>
          <div className="max-w-[600px] xl:max-w-[1300px] flex-col-center md:grid md:grid-cols-2 xl:md:grid-rows-2 md:items-end gap-x-10 lg:gap-x-[100px] xl:gap-x-[150px]">
            <div className="flex flex-col items-center">
              <label
                className="text-black text-lg vazir-bold relative left-[82px] lg:left-[120px] xl:left-[179px] mb-2 pt-2"
                htmlFor="#username"
              >
                نام کاربری :
              </label>
              <input
                className="w-[250px] lg:w-[330px] xl:w-[450px]   shadow-xl h-12 rounded-2xl  border-2 border-blue focus:outline-0 px-4 text-xl "
                id="username"
                type="text"
                {...register("name", {
                  required: "وارد کردن نام اجباریست",
                  minLength: {
                    value: 8,
                    message: "طول نام وارد شده کمتراز 8 کارکتر است",
                  },
                })}
              />
              <div className="error ">{errors.name && errors.name.message}</div>
            </div>
            {/* ===================================================email */}
            <div className="flex flex-col items-center">
              <label
                className="text-black text-lg vazir-bold relative left-[98px] lg:left-[135px] xl:left-[196px] mb-2 pt-2"
                htmlFor="#email"
              >
                ایمیل :
              </label>
              <input
                className="w-[250px] lg:w-[330px] xl:w-[450px]  shadow-xl h-12 rounded-2xl border-2 border-blue focus:outline-0 px-4 text-xl "
                id="email"
                type="email"
                {...register("email", {
                  required: "وارد کردن ایمیل اجباریست",
                })}
              />
              <div className="error ">
                {errors.email && errors.email.message}
              </div>
            </div>
            {/* ===================================================phone */}
            <div className="flex flex-col items-center">
              <label
                className="text-black text-lg vazir-bold relative left-[73px] lg:left-[110px] xl:left-[172px] mb-2 pt-2"
                htmlFor="#phone"
              >
                شماره تماس :
              </label>
              <input
                className="w-[250px] lg:w-[330px] xl:w-[450px]  shadow-xl h-12 rounded-2xl  border-2 border-blue focus:outline-0 px-4 text-xl "
                id="phone"
                type="text"
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
            {/* ===================================================password */}
            <div className="flex flex-col items-center">
              <label
                className="text-black text-lg vazir-bold relative left-[89px] lg:left-[128px] xl:left-[187px] mb-2 pt-2"
                htmlFor="#password"
              >
                رمز عبور :
              </label>
              <input
                className="w-[250px] lg:w-[330px] xl:w-[450px]  shadow-xl h-12 rounded-2xl  border-2 border-blue focus:outline-0 px-4 text-xl "
                id="password"
                type="password"
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
            {/* ===================================================repeat password */}
            <div className="flex flex-col items-center">
              <label
                className="text-black text-lg vazir-bold relative left-[72px] lg:left-[110px] xl:left-[172px] mb-2 pt-2"
                htmlFor="#repeatPassword"
              >
                تکرار رمز عبور :
              </label>
              <input
                className="w-[250px] lg:w-[330px] xl:w-[450px]  shadow-xl h-12 rounded-2xl  border-2 border-blue focus:outline-0 px-4 text-xl "
                id="repeatPassword"
                type="password"
                {...register("repeatPassword", {
                  required: "وارد کردن مجدد رمز عبور اجباریست",
                  minLength: {
                    value: 8,
                    message: "طول رمز وارد شده کمتراز8 کارکتر است",
                  },
                })}
              />
              <div className="error ">
                {errors.repeatPassword && errors.repeatPassword.message}
              </div>
            </div>
            {/* ===================================================rasteh */}
            <div className="flex flex-col items-center">
              <label
                className="text-black  text-lg vazir-bold relative left-[80px] lg:left-[117px] xl:left-[177px] mb-2 pt-2 "
                htmlFor="#rasteh"
              >
                عنوان کاربر :
              </label>
              <input
                className="w-[250px] lg:w-[330px] xl:w-[450px]  shadow-xl h-12 rounded-2xl  border-2 border-blue focus:outline-0 px-4 text-xl "
                id="rasteh"
                type="text"
                {...register("rasteh", {
                  required: "وارد کردن عنوان کاربر اجباریست",
                  minLength: {
                    value:3,
                    message: "طول رمز وارد شده کمتراز5 کارکتر است",
                  },
                })}
              />
              <div className="error ">
                {errors.rasteh && errors.rasteh.message}
              </div>
            </div>
          </div>
          <div className="w-full flex-row-center mt-5 md:mt-12">
            <input
              className="py-2 w-[110px] mb-5 shadow-xl bg-white rounded-xl text-xl vazir-bold cursor-pointer border-2 border-blue hover:bg-hover"
              type="submit"
              value={"ثبت"}
            />
          </div>
        </form>
      </div>
      {/* =====================================================end newUser */}

      <div className="pt-7  direction">
        <span className="text-[20px] md:text-[25px] vazir-bold flex-row-center">
          لیست کاربران
        </span>
        {/* ==================================================== */}

        {context.AllUser.length == 0 ? (
          <Empty title="کاربری وجود ندارد" />
        ) : (
          <div className="flex flex-col vazir pt-5">
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 ">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
                <div className="overflow-hidden  border-[2px] border-blue rounded-2xl">
                  <table className="min-w-full bg-white ">
                    <thead className="bg-white border-b-[2px] blue border-blue">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm text-black pr-4 py-4 text-right max-w-[100px] "
                        >
                          شماره
                        </th>
                        <th
                          scope="col"
                          className="text-sm text-black pr-14 py-4 text-right"
                        >
                          نام کاربری
                        </th>
                        <th
                          scope="col"
                          className="text-sm text-black pr-14 py-4 text-right"
                        >
                          ایمیل
                        </th>
                        <th
                          scope="col"
                          className="text-sm text-black px-6 py-4 text-right"
                        >
                          عنوان
                        </th>
                        <th
                          scope="col"
                          className="text-sm text-black pr-10 py-4 text-right"
                        >
                          شماره تماس
                        </th>
                        <th
                          scope="col"
                          className="text-sm text-black pr-10 py-4 text-right"
                        ></th>
                      </tr>
                    </thead>
                    <tbody className=" ">
                      {context.AllUser.map((user) => (
                        <tr key={user.id} className="bg-gray-100 vazir-bold  ">
                          <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                            {user.id}
                          </td>
                          <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                            {user.username}
                          </td>
                          <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                            {user.email}
                          </td>
                          <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                            {user.rasteh}
                          </td>
                          <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                            {user.phone}
                          </td>
                          <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap flex-row-center vazir-bold">
                            <button
                              onClick={() => removeHandler(user.id)}
                              className="px-5 py-2 border-[2.5px] border-red-500 text-red-500  hover:bg-red-500 hover:text-white ml-5 rounded-xl"
                            >
                              حذف
                            </button>
                            <button
                              onClick={() => editHandler(user)}
                              className="px-5 py-2 border-[2.5px] border-blue text-blue  hover:bg-blue hover:text-white rounded-xl"
                            >
                              ویرایش
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
      </div>
      {context.deleteUser && <RemoveUserMOdal item={remove} />}
      {context.editUserModal && <EditUserModal item={edit} />}
    </div>
  );
}
