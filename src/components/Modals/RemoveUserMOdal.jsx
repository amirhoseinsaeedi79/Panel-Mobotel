import { useContext } from "react";
import ReactDOM from "react-dom";
import AllContext from "../../Context/Context";
import { DeleteUser } from "../../Services/Axios/Requests/Users";
import { toast } from "react-toastify";
export default function RemoveUserMOdal(item) {
  console.log(item);
  const context = useContext(AllContext);

  function exitHandler() {
    context.Deleteuser(false);
  }

  async function removeItem(test) {
    if (test == 1) {
      toast.error("امکان حذف این کاربر وجود ندارد", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      context.Deleteuser(false);
    } else {
      await DeleteUser(test);
      const newUser = context.AllUser.filter((item) => {
        return item.id !== test;
      });

      toast.success("کاربر با موفقیت حذف شد", {
        position: "top-center",
        autoClose: 1300,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      context.RenderUser(newUser);
      context.Deleteuser(false);
    }
  }

  return ReactDOM.createPortal(
    <div className="modal-parent active ">
      <div className="delete-modal border-4 shadow-2xl ">
        <h3 className="text-2xl">آیا از حذف اطمینان دارید؟</h3>
        <div className="delete-modal-btns items-center ">
          <button
            onClick={() => removeItem(item.item)}
            className=" delete-btn  vazir-bold border-[4px] hover:text-green-500 border-gray-400 hover:border-green-500"
          >
            بله
          </button>
          <button
            onClick={exitHandler}
            className="delete-btn vazir-bold border-[4px] hover:text-red-500 border-gray-400 hover:border-red-500"
          >
            خیر
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
