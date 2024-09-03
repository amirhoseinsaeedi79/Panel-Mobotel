import {
  useContext,
  useEffect,
} from 'react';
import ReactDOM from 'react-dom';

import AllContext from '../../Context/Context';
import { DeleteProduct } from '../../Services/Axios/Requests/Products';

export default function RemoveModal(item) {
  console.log(item);
  const context = useContext(AllContext);

  function exitHandler() {
    context.Delete(false);
  }

  async function removeItem(test) {
    await DeleteProduct(test);
    const newProduct = context.AllProduct.filter((item) => {
      return item.id !== test;
    });
    context.RenderRemoveProduct(newProduct);
    context.Delete(false);
  }


  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      context.Delete(false);
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-parent active direction" onClick={handleClickOutside}>
      <div className="delete-modal border-4 shadow-2xl">
        <h3 className="text-[20px]">آیا از حذف اطمینان دارید؟</h3>
        <div className="delete-modal-btns items-center">
          <button
            onClick={() => removeItem(item.item)}
            className="delete-btn vazir-bold border-[4px] border-gray-400 hover:border-green-500 hover:text-green-500"
          >
            بله
          </button>
          <button
            onClick={exitHandler}
            className="delete-btn vazir-bold border-[4px] border-gray-400 hover:border-red-500 hover:text-red-500"
          >
            خیر
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
