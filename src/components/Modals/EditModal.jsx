import { useContext } from "react";
import { useForm } from "react-hook-form";
import AllContext from "../../Context/Context";
import ReactDOM from "react-dom";
import { GetProduct, PutProduct } from "../../Services/Axios/Requests/Products";
import { toast } from "react-toastify";

export default function EditModal(item) {
  const context = useContext(AllContext);
  console.log(item.item.name);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function registerHandler(data) {
    const newProduct = {
      name: data.name,
      price: data.price,
      ctg: data.ctg,
      quantity: data.quantity,
      imgae: item.item.imgae,
    };

    PutProduct(newProduct, item.item.id);
    GetProduct().then((res) => context.RenderRemoveProduct(res.data));
    toast.success("محصول ویرایش شد", {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    context.Edit(false);
  }

  function exitHandler() {
    context.Edit(false);
  }

  return ReactDOM.createPortal(
    <div className="modal-parent active direction">
      <div className="w-[98%] md:w-[90%] lg:w-[60%]  flex flex-col border-2 border-blue shadow-2xl rounded-xl bg-white mx-1  ">
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
          <h3 className="text-[22px] vazir-bold md:pr-9 pr-3  text-gray-800">
            ویرایش محصول{" "}
          </h3>
        </div>
        <form
          onSubmit={handleSubmit(registerHandler)}
          className="md:px-10 px-3 py-3"
        >
          {/* ===========================name */}
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
            <div className="">
              <label htmlFor="#id" className="vazir-bold text-[18px] ml-2">
                نام قبلی :
              </label>
              <span className="text-lg ">{item.item.name}</span>
            </div>
            <div className="md:mr-3 flex flex-row items-baseline ">
              <label
                htmlFor="#id"
                className="vazir-bold text-[18px] min-w-[75px]"
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
              <label htmlFor="#id" className="vazir-bold text-[18px] ml-2">
                قیمت قبلی :
              </label>
              <span className="text-lg ">
                100000 <span>تومان</span>
              </span>
            </div>
            <div className="md:mr-3 flex flex-row items-baseline ">
              <label
                htmlFor="#id"
                className="vazir-bold text-[18px] min-w-[95px] "
              >
                قیمت جدید :
              </label>
              <div className="mr-2.5 flex flex-col">
                <input
                  id="name"
                  type="text"
                  className="w-full mb-1 text-black py-1 px-2 border-[3px] border-blue  focus:outline-none rounded-xl "
                  {...register("price", {
                    required: "وارد کردن قیمت اجباریست",
                  })}
                />
                <div className="error ">
                  {errors.price && errors.price.message}
                </div>
              </div>
            </div>
          </div>
          {/* =========================== */}

          <div className="flex flex-col md:flex-row md:place-items-baseline md:justify-between mb-2 ">
            <div className="">
              <label htmlFor="#id" className="vazir-bold text-[18px] ml-2">
                دسته بندی قبلی :
              </label>
              <span className="text-lg ">هدفون</span>
            </div>
            <div className="md:mr-3 flex flex-row items-baseline ">
              <label
                htmlFor="#id"
                className="vazir-bold text-[18px] min-w-[129px]"
              >
                دسته بندی جدید :
              </label>
              <div className="flex flex-col mr-2.5">
                <input
                  id="name"
                  type="text"
                  className="w-full mb-1 text-black py-1 px-2 border-[3px] border-blue  focus:outline-none rounded-xl "
                  {...register("ctg", {
                    required: "دسته بندی را وارد کنید",
                  })}
                />
                <div className="error ">{errors.ctg && errors.ctg.message}</div>
              </div>
            </div>
          </div>
          {/* =========================== */}
          <div className="flex flex-col md:flex-row md:place-items-baseline md:justify-between mb-2 ">
            <div className="">
              <label htmlFor="#id" className="vazir-bold text-[18px] ml-2">
                تعداد قبلی :
              </label>
              <span className="text-lg ">2000 </span>
            </div>
            <div className="md:mr-3 flex flex-row items-baseline ">
              <label
                htmlFor="#quant"
                className="vazir-bold text-[18px] min-w-[95px]"
              >
                تعداد جدید :
              </label>
              <div className="flex flex-col mr-2.5">
                <input
                  id="quant"
                  type="text"
                  className="w-full mb-1 text-black py-1 px-2 border-[3px] border-blue  focus:outline-none rounded-xl "
                  {...register("quant", {
                    required: "وارد کردن تعداد اجباریست",
                  })}
                />
                <div className="error ">
                  {errors.quant && errors.quant.message}
                </div>
              </div>
            </div>
          </div>

          {/* ===========================image */}
          <div className="flex flex-col items-center md:flex-row md:items-baseline md:justify-between">
            <div className=" flex flex-row items-baseline ">
              <label
                htmlFor="#image"
                className="vazir-bold text-[18px] min-w-[105px]"
              >
                انتخاب عکس :
              </label>
              <input
                id="image"
                type="file"
                className="w-[95%] mb-1 text-black py-1 mr-2  px-2  focus:outline-none rounded-xl"
                {...register("image", {})}
              />
            </div>
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
