import {
  useContext,
  useEffect,
} from 'react';
import ReactDOM from 'react-dom';

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import AllContext from '../../Context/Context';
import {
  GetProduct,
  PutProduct,
} from '../../Services/Axios/Requests/Products';

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


  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      context.Edit(false);
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-parent active direction" onClick={handleClickOutside}>
      <div className="mx-1 flex w-[98%] flex-col rounded-xl border-2 border-blue bg-white shadow-2xl md:w-[90%] lg:w-[60%]">
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
          <h3 className="vazir-bold pr-3 text-[20px] text-gray-800 md:pr-9">
            ویرایش محصول{" "}
          </h3>
        </div>
        <form
          onSubmit={handleSubmit(registerHandler)}
          className="px-3 py-3 md:px-10"
        >
          {/* ===========================name */}
          <div className="mb-2 flex flex-col md:flex-row md:items-baseline md:justify-between">
            <div className="">
              <label htmlFor="#id" className="vazir-bold ml-2 text-[16px] text-blue">
                نام قبلی :
              </label>
              <span className="text-lg">{item.item.name}</span>
            </div>
            <div className="flex flex-row items-baseline md:mr-3">
              <label
                htmlFor="#id"
                className="vazir-bold min-w-[75px] text-[16px] text-blue"
              >
                نام جدید :
              </label>
              <div className="mr-2.5 flex flex-col">
                <input
                  id="name"
                  type="text"
                  className="mb-1 rounded-xl border-[3px] border-blue px-2 py-1 text-black focus:outline-none"
                  {...register("name", {
                    required: "وارد کردن نام اجباریست",
                  })}
                />
                <div className="error">
                  {errors.name && errors.name.message}
                </div>
              </div>
            </div>
          </div>
          {/* ===========================price */}
          <div className="mb-2 flex flex-col md:flex-row md:place-items-baseline md:justify-between">
            <div className="">
              <label htmlFor="#id" className="vazir-bold ml-2 text-[16px] text-blue">
                قیمت قبلی :
              </label>
              <span className="text-lg">
                {item.item.price} <span>تومان</span>
              </span>
            </div>
            <div className="flex flex-row items-baseline md:mr-3">
              <label
                htmlFor="#id"
                className="vazir-bold min-w-[95px] text-[16px] text-blue"
              >
                قیمت جدید :
              </label>
              <div className="mr-2.5 flex flex-col">
                <input
                  id="name"
                  type="text"
                  className="mb-1 w-full rounded-xl border-[3px] border-blue px-2 py-1 text-black focus:outline-none"
                  {...register("price", {
                    required: "وارد کردن قیمت اجباریست",
                  })}
                />
                <div className="error">
                  {errors.price && errors.price.message}
                </div>
              </div>
            </div>
          </div>
          {/* =========================== */}

          <div className="mb-2 flex flex-col md:flex-row md:place-items-baseline md:justify-between">
            <div className="">
              <label htmlFor="#id" className="vazir-bold ml-2 text-[16px] text-blue">
                دسته بندی قبلی :
              </label>
              <span className="text-lg">{item.item.ctg}</span>
            </div>
            <div className="flex flex-row items-baseline md:mr-3">
              <label
                htmlFor="#id"
                className="vazir-bold min-w-[129px] text-[16px] text-blue"
              >
                دسته بندی جدید :
              </label>
              <div className="mr-2.5 flex flex-col">
                <input
                  id="name"
                  type="text"
                  className="mb-1 w-full rounded-xl border-[3px] border-blue px-2 py-1 text-black focus:outline-none"
                  {...register("ctg", {
                    required: "دسته بندی را وارد کنید",
                  })}
                />
                <div className="error">{errors.ctg && errors.ctg.message}</div>
              </div>
            </div>
          </div>
          {/* =========================== */}
          <div className="mb-2 flex flex-col md:flex-row md:place-items-baseline md:justify-between">
            <div className="">
              <label htmlFor="#id" className="vazir-bold ml-2 text-[16px] text-blue">
                تعداد قبلی :
              </label>
              <span className="text-lg">500 عدد</span>
            </div>
            <div className="flex flex-row items-baseline md:mr-3">
              <label
                htmlFor="#quant"
                className="vazir-bold min-w-[95px] text-[16px] text-blue"
              >
                تعداد جدید :
              </label>
              <div className="mr-2.5 flex flex-col">
                <input
                  id="quant"
                  type="text"
                  className="mb-1 w-full rounded-xl border-[3px] border-blue px-2 py-1 text-black focus:outline-none"
                  {...register("quant", {
                    required: "وارد کردن تعداد اجباریست",
                  })}
                />
                <div className="error">
                  {errors.quant && errors.quant.message}
                </div>
              </div>
            </div>
          </div>

          {/* ===========================image */}
          <div className="flex flex-col items-center md:flex-row md:items-baseline md:justify-between">
            <div className="flex flex-row items-baseline">
              <label
                htmlFor="#image"
                className="vazir-bold min-w-[105px] text-[18px]"
              >
                انتخاب عکس :
              </label>
              <input
                id="image"
                type="file"
                className="mb-1 mr-2 w-[95%] rounded-xl px-2 py-1 text-black focus:outline-none"
                {...register("image", {})}
              />
            </div>
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
