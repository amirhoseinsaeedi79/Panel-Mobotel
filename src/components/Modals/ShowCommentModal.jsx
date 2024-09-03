import {
  useContext,
  useEffect,
} from 'react';
import ReactDOM from 'react-dom';

import AllContext from '../../Context/Context';

export default function ShowCommentModal(prop) {

  const context = useContext(AllContext);
  function showHandler() {
    context.showComment(false);
  }
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      context.showComment(false);
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-parent active direction" onClick={handleClickOutside}>
      <div className="w-[98%] md:w-[90%] lg:w-[60%] flex flex-col shadow-2xl rounded-xl mx-1  ">
        <div className=" py-2 blue rounded-xl  ">
          <svg
           onClick={ showHandler}
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
          <div className="w-10/12 bg-white border-2 mx-3 rounded-xl p-3 text-[16px]">
            <p>{prop.item}</p>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
