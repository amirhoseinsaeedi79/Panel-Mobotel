import ReactDOM from "react-dom";
import { useContext } from "react";

import AllContext from "../../Context/Context";

export default function InfoModal(info) {

 
  const context = useContext(AllContext);
  function exitHandler() {
    context.Info(false)
  }

  return ReactDOM.createPortal(
    <div className="modal-parent active direction">
      <div className="w-[90%] md:w-[50%] lg:w-[30%]  flex flex-col border-2 border-blue shadow-2xl rounded-xl bg-white mx-1">
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
          <h3 className="text-[20px] vazir-bold md:pr-3 pr-3  text-gray-800">
            مشخصات محصول
          </h3>
        </div>
        <div className="flex flex-row py-4">
          {/* ===== */}

          <div className="info pt-1">
            <div className="mr-4 ">
              <span className="text-[16px] vazir-bold ml-2 text-blue">نام :</span>
              <span className="text-[16px] ">{info.item.name}</span>
            </div>

            <div className="mr-4 mt-3">
              <span className="text-[16px] vazir-bold ml-2 text-blue">دسته بندی :</span>
              <span className="text-[16px] ">{info.item.ctg}</span>
            </div>

            <div className="mr-4 mt-3">
              <span className="text-[16px] vazir-bold ml-2 text-blue">قیمت :</span>
              <span className="text-lg ">
              {info.item.price} <span>تومان</span>
              </span>
            </div>

            <div className="mr-4 mt-3">
              <span className="text-[16px] vazir-bold ml-2 text-blue">موجودی :</span>
              <span className="text-lg ">
              {info.item.quantity} <span>عدد</span>
              </span>
            </div>
          </div>
          <div className="mr-14">
            <img
              src={`images/${info.item.imgae}`}
              alt="airpod1"
              className="w-[170px] h-[170px]"
            />
          </div>
          {/* ====== */}
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
