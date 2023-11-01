

export default function Comments() {
  return (
    <>
      <div className="w-full pt-24 md:w-[calc(100%_-_180px)] direction vazir bgimage">
        <div className="w-full flex-row-center">
          <span className="vazir-bold text-[25px]">نظرات کاربران </span>
        </div>
        <div className="flex flex-col vazir pt-5">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 ">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
              <div className="overflow-hidden border-[3px] border-blue rounded-2xl">
                <table className="min-w-full ">
                  <thead className="bg-white border-b-[2px] blue border-blue ">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm text-black pl-6 pr-3 py-4 text-right max-w-[80px] "
                      >
                        شماره
                      </th>
                      <th
                        scope="col"
                        className="text-sm text-black pr-14 py-4 text-right "
                      >
                        نام کاربری
                      </th>
                      <th
                        scope="col"
                        className="text-sm text-black px-6 py-4 text-right "
                      >
                        عنوان
                      </th>
                      <th
                        scope="col"
                        className="text-sm text-black pr-4 py-4 text-right "
                      >
                        نمایش نظر
                      </th>
                      <th
                        scope="col"
                        className="text-sm text-black px-6 py-4 text-center"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-100 vazir-bold ">
                      <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                        1
                      </td>
                      <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                        amirhosein saeedi
                      </td>
                      <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                        ادمین
                      </td>
                      <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                        <svg
                         
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-8 h-8 hover:text-blue cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </td>
                      <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap flex-row-center vazir-bold">
                        <button className="px-5 py-2  border-[2.5px] border-red-500 text-red-500  hover:bg-red-500 hover:text-white mr-5 rounded-xl">
                          رد
                        </button>
                        <button className="px-5 py-2 border-[2.5px] border-blue text-blue  hover:bg-blue hover:text-white rounded-xl mr-5  ">
                          پاسخ
                        </button>
                        <button className="px-5 py-2 border-[2.5px] border-green-500 text-green-500  hover:bg-green-500 hover:text-white rounded-xl  mr-5 ">
                          تایید
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
