import {
  useContext,
  useEffect,
} from 'react';
import ReactDOM from 'react-dom';

import AllContext from '../../Context/Context';

export default function InfoModal(info) {
  const context = useContext(AllContext);
  function exitHandler() {
    context.Info(false);
  }

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      context.Info(false);
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-parent active direction" onClick={handleClickOutside}>
      <div className="mx-1 flex w-[90%] flex-col rounded-xl border-2 border-blue bg-white shadow-2xl md:w-[50%] lg:w-[30%]">
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
          <h3 className="vazir-bold pr-3 text-[20px] text-gray-800 md:pr-3">
            مشخصات محصول
          </h3>
        </div>
        <div className="flex flex-row py-4">
          {/* ===== */}

          <div className="info pt-1">
            <div className="mr-4">
              <span className="vazir-bold ml-2 text-[16px] text-blue">
                نام :
              </span>
              <span className="text-[16px]">{info.item.name}</span>
            </div>

            <div className="mr-4 mt-3">
              <span className="vazir-bold ml-2 text-[16px] text-blue">
                دسته بندی :
              </span>
              <span className="text-[16px]">{info.item.ctg}</span>
            </div>

            <div className="mr-4 mt-3">
              <span className="vazir-bold ml-2 text-[16px] text-blue">
                قیمت :
              </span>
              <span className="text-lg">
                {info.item.price} <span>تومان</span>
              </span>
            </div>

            <div className="mr-4 mt-3">
              <span className="vazir-bold ml-2 text-[16px] text-blue">
                موجودی :
              </span>
              <span className="text-lg">
                {info.item.quantity} <span>عدد</span>
              </span>
            </div>
          </div>
          <div className="mr-14">
            <img
              src={`images/${info.item.imgae}`}
              alt="airpod1"
              className="h-[170px] w-[170px]"
            />
          </div>
          {/* ====== */}
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
