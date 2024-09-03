import {
  useContext,
  useEffect,
} from 'react';
import ReactDOM from 'react-dom';

import AllContext from '../../Context/Context';

export default function AnswerTicketModal(prop) {
  const context = useContext(AllContext);
  function showHandler() {
    context.answerTicket(false);
  }

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      context.answerTicket(false);
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-parent active direction" onClick={handleClickOutside}>
      <div className="mx-1 flex w-[98%] flex-col rounded-xl shadow-2xl md:w-[90%] lg:w-[60%]">
        <div className="blue rounded-t-lg py-2">
          <svg
            onClick={showHandler}
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
          <h3 className="vazir-bold pr-3 text-[22px] text-gray-800 md:pr-3">
            پاسخ به تیکت کاربر
          </h3>
        </div>
        <div className="rounded-b-xl bg-white p-3">
          <div className="mb-3">
            <span className="vazir-bold">متن تیکت کاربر :</span>
            <p className="blue mt-1 rounded-xl p-3">
              {prop.item}
            </p>
          </div>
          <form className="flex-col-center md:flex-row-center w-full">
            <label htmlFor="#answer" className="vazir-bold">
              پاسخ خودرا وارد کنید :
            </label>
            <textarea  className="mx-3 mb-3 mt-1 h-[150px] w-full rounded-xl border-[3px] border-blue p-3 focus:outline-blue md:w-7/12"></textarea>

            <button
              type="submit"
              className="vazir-bold mr-5 rounded-xl border-[3px] border-blue px-4 py-[5px] text-black hover:bg-blue hover:text-white"
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
