export default function LastTransactions() {
  const lastTransactions = [
    {
      id: 1,
      name: "امیرحسین سعیدی",
      type: "واریز",
      price: "1,256,000",
      info: "خرید کاربر",
    },
    {
      id: 2,
      name: "علی جعفری",
      type: "برگشت",
      price: "856,000",
      info: "برگشت وجه به مشتری",
    },
    {
      id: 3,
      name: "سارا گودرزی",
      type: "واریز",
      price: "756,000",
      info: "خرید کاربر",
    },
    {
      id: 4,
      name: "سمیه قربانی",
      type: "برگشت",
      price: "360,000",
      info: "برگشت وجه به مشتری",
    },
    {
      id: 5,
      name: "دریا احمدی",
      type: "واریز",
      price: " 1,056,000 ",
      info: "خرید کاربر",
    },
    {
      id: 6,
      name: "ساسان ثنایی",
      type: "واریز",
      price: " 356,000 ",
      info: "خرید کاربر",
    },
    {
      id: 7,
      name: "مریم مقدم",
      type: "برگشت",
      price: " 1,256,000 ",
      info: "برگشت وجه به مشتری",
    },
    {
      id: 8,
      name: "علی قمی",
      type: "واریز",
      price: "998,000",
      info: "خرید کاربر",
    },
    {
      id: 9,
      name: "محمد احمدی",
      type: "واریز",
      price: " 1,386,000 ",
      info: "خرید کاربر",
    },
    {
      id: 10,
      name: "علی بیات",
      type: "برگشت",
      price: " 2,406,000 ",
      info: "برگشت وجه به مشتری",
    },
  ];

  return (
    <div className=" lg:w-9/12   vazir px-3">
      <span className="vazir-bold text-[22px] pt-3 mr-1">آخرین تراکنش ها</span>
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 mt-3 ">
        <div className="py-2 inline-block min-w-full  pt-2">
          <div className="overflow-hidden border-[3px] border-blue rounded-2xl ">
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
                    className="text-sm text-black  pr-7 py-4 text-right max-w-[80px] "
                  >
                    نام کاربری
                  </th>
                  <th
                    scope="col"
                    className="text-sm text-black pr-2 ml-10 py-4 text-right "
                  >
                    نوع تراکنش
                  </th>
                  <th
                    scope="col"
                    className="text-sm text-black px-6 py-4 text-right "
                  >
                    مبلغ تراکنش
                  </th>
                  <th
                    scope="col"
                    className="text-sm text-black pr-8 py-4 text-right "
                  >
                    توضیحات
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* =========================================================map */}

                {lastTransactions.map((item) => (
                  <tr
                    key={item.id}
                    className={` vazir-bold border-t-2 bg-white border-blue `}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                      {item.id}
                    </td>
                    <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                      {item.name}
                    </td>
                    <td
                      className={`text-[15px] ${
                        item.type == "واریز" ? "text-green-500" : "text-red-500 "
                      }  px-6 py-4 whitespace-nowrap`}
                    >
                      {item.type}
                    </td>

                    <td className={`text-sm ${
                        item.type == "واریز" ? "text-green-500" : "text-red-500 "
                      } pt-[15px]  px-6 py-4 whitespace-nowrap flex-row-center vazir-bold`}>
                      {item.price}
                    </td>

                    <td className={`px-6 py-4  text-sm  ${
                        item.type == "واریز" ? "text-green-500" : "text-red-500 "
                      } `}>
                {item.info}

                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
