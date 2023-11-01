import { useContext } from "react";
import ReactDOM from "react-dom";
import AllContext from "../../Context/Context";


export default function ShowCommentModal() {
  const context = useContext(AllContext);
  function exitHandler() {
    context.Delete(false);
  }
  return ReactDOM.createPortal(
    <div className="modal-parent active ">
        


    </div>,
    document.getElementById("modals-parent")
  );
}
