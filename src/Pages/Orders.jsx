import { useContext, useState } from "react";
import AllContext from "../Context/Context";
import ShowTicketModal from "../components/Modals/showTicketModal";
import OrderModal from "../components/Modals/OrderModal";

export default function Orders() {
  const [order, setOrder] = useState();
  const context = useContext(AllContext);
  const Allorder = [
    {
      id: 1,
      username: "amirhosein252",
      price: "10,600,000",
      code: "125-521-1345",
      status: "تکمیل",
    },
    {
      id: 2,
      username: "ali_2554",
      price: "15,500,000",
      code: "458-112-1345",
      status: "تکمیل",
    },
    {
      id: 3,
      username: "sara98-s25",
      price: "450,025",
      code: "552-200-025",
      status: "تکمیل",
    },
    {
      id: 4,
      username: "nimanakisa2",
      price: "25,500,655",
      code: "125-655-1345",
      status: "تکمیل",
    },
    {
      id: 5,
      username: "alisihrabi-s365",
      price: "305,500,980",
      code: "366-658-1345",
      status: "تکمیل",
    },
    {
      id: 6,
      username: "meysam236",
      price: "655,500",
      code: "458-118-025",
      status: "تکمیل",
    },
    {
      id: 7,
      username: "samaneh45",
      price: "120,000",
      code: "250-365-745",
      status: "تکمیل",
    },
  ];

  return (
    <div className="w-full pt-24 md:w-[calc(100%_-_200px)] direction vazir">
      <div className="w-full flex-row-center">
        <span className="vazir-bold text-[25px]">سفارشات کاربران </span>
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
                      کد پیگیری
                    </th>
                    <th
                      scope="col"
                      className="text-sm text-black pr-3 py-4 text-right "
                    >
                      سفارش ها
                    </th>
                    <th
                      scope="col"
                      className="text-sm text-black pr-3 py-4 text-right "
                    >
                      قیمت کل
                    </th>
                    <th
                      scope="col"
                      className="text-sm text-black pl-4 py-4 text-center "
                    >
                      وضعیت
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Allorder.map((order) => (
                    <tr key={order.id} className="bg-gray-100 vazir-bold ">
                      <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                        {order.id}
                      </td>
                      <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                        {order.username}
                      </td>

                      <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                        {order.code}
                      </td>
                      <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                        <svg
                          onClick={() => context.showOrder(true)}
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
                      <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                        {order.price}
                      </td>
                      <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap flex-row-center vazir-bold">
                        <button className="px-5 py-2 bg-green-500 ml-5 text-black rounded-xl">
                          {order.status}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {context.orderModal && <OrderModal />}
    </div>
  );
}
