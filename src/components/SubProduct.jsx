import React, { useState } from "react";

export default function SubProduct() {
  const context = useContext(AllContext);
  const [edit, setEdit] = useState();
  const [info, setInfo] = useState();
  const [remove, setRemove] = useState();
  const [AllProduct, setAllProduct] = useState([]);


  useEffect(() => {
    GetProduct().then((res) => setAllProduct(res.data));
  }, []);

  log

  function removeHandler(item) {
    context.Delete(true);
    setRemove(item);
  }
  // function searchHandler(event) {
  //   event.preventDefault();
  // }
  function searchValueHandler(event) {
    setSearch(event.target.value);
    const searchValue = context.AllProduct.filter((item) =>
      item.name.includes(event.target.value)
    );
    console.log(searchValue);
    setAllProduct(searchValue);
  }
  async function editHandler(item) {
    await setEdit(item);
    context.Edit(true);
  }
  async function InfoHandler(item) {
    await setInfo(item);
    context.Info(true);
  }

  return (
    <div className="flex flex-col vazir">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 ">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
          <div className="overflow-hidden  border-[2px] border-blue rounded-2xl">
            <table className="min-w-full bg-white">
              <thead className="bg-white border-b-[2px] blue border-blue ">
                <tr>
                  <th
                    scope="col"
                    className="text-sm text-black pr-4 py-4 text-right max-w-[100px] "
                  >
                    شماره
                  </th>
                  <th
                    scope="col"
                    className="text-sm text-black pr-5 py-4 text-right"
                  >
                    تصویر محصول
                  </th>
                  <th
                    scope="col"
                    className="text-sm text-black px-6 py-4 text-right"
                  >
                    نام محصول
                  </th>
                  <th
                    scope="col"
                    className="text-sm text-black pr-5 py-4 text-right"
                  >
                    دسته بندی
                  </th>
                  <th
                    scope="col"
                    className="text-sm text-black pr-10 py-4 text-right"
                  ></th>
                </tr>
              </thead>
              {/* {!context.AllProduct.length == 0 && */}
              {AllProduct.map((item) => (
                <tbody key={item.id}>
                  <tr className="bg-gray-100 vazir-bold ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                      {item.id}
                    </td>
                    <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                      <img
                        src={`images/${item.imgae}`}
                        alt="airpod1"
                        className="w-[100px] h-[75px] rounded-xl"
                      />
                    </td>
                    <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                      {item.ctg}
                    </td>
                    <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap flex-row-center vazir-bold pt-7">
                      <button
                        onClick={() => removeHandler(item.id)}
                        className="px-5 py-2 border-[2.5px] border-red-500 text-red-500  hover:bg-red-500 hover:text-white ml-5 rounded-xl"
                      >
                        حذف
                      </button>

                      <button
                        onClick={() => editHandler(item)}
                        className="px-5 py-2 border-[2.5px] border-blue text-blue  hover:bg-blue hover:text-white rounded-xl ml-5"
                      >
                        ویرایش
                      </button>
                      <button
                        onClick={() => InfoHandler(item)}
                        className="px-5 py-2 border-[2.5px] border-gray-500 text-gray-500  hover:bg-gray-500 hover:text-white rounded-xl ml-5"
                      >
                        مشاهده
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}

              {context.deleteModal && <RemoveModal item={remove} />}
              {context.editeModal && <EditModal item={edit} />}
              {context.infoModal && <InfoModal item={info} />}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
