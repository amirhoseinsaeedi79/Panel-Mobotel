import { useContext } from "react";
import ReactDOM from "react-dom";
import AllContext from "../../Context/Context";

export default function AnswerTicketModal(prop) {
  const context = useContext(AllContext);
  function showHandler() {
    context.answerTicket(false);
  }

  return ReactDOM.createPortal(
    <div className="modal-parent active direction">
      <div className="w-[98%] md:w-[90%] lg:w-[60%] flex flex-col shadow-2xl rounded-xl mx-1  ">
        <div className=" py-2 blue rounded-t-lg">
          <svg
            onClick={showHandler}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 float-left ml-3 cursor-pointer "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <h3 className="text-[22px] vazir-bold md:pr-3 pr-3  text-gray-800">
            پاسخ به تیکت کاربر
          </h3>
        </div>
        <div className="bg-white p-3 rounded-b-xl">
          <div className="mb-3">
            <span className="vazir-bold">متن تیکت کاربر :</span>
            <p className="p-3 mt-1  blue rounded-xl">
              {prop.item}
            </p>
          </div>
          <form className="w-full flex-col-center md:flex-row-center">
            <label htmlFor="#answer" className="vazir-bold">
              پاسخ خودرا وارد کنید :
            </label>
            <textarea  className="border-[3px] w-full md:w-7/12 rounded-xl h-[150px] border-blue p-3 mb-3 mt-1 focus:outline-blue mx-3"></textarea>

            <button
              type="submit"
              className="py-[5px] px-4 vazir-bold border-[3px] text-black hover:bg-blue hover:text-white border-blue rounded-xl mr-5"
            >
              ارسال
            </button>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
