export default function BestProduct() {

    const bestProduct =[
        {id:1,name: 'ایرپاد 2 پرومکس',src:'images/airpod1.jpg',info:'298'},
        {id:2,name: 'ایرپاد 5 پرو',src:'images/airpod5.jpg',info:'245'},
        {id:3,name: 'گارد موبایل آیفون 14',src:'images/case6.jpg',info:'180'},
        {id:4,name: 'هدفون وایرلس مدل 2',src:'images/hed1.jpg',info:'150'},
        {id:5,name: 'ساعت هوشمند عقربه ای',src:'images/watch1.jpg',info:'120'},
    ]

  return (
    <div className="allRow px-3 pb-3  lg:w-9/12   ">
      <span className="vazir-bold text-[22px]  mr-1">محصولات پر فروش</span>
      <div className="w-full flex flex-col vazir mt-3 ">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 ">
          <div className="py-2 inline-block min-w-full">
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
                      className="text-sm text-black pr-6 py-4 text-right "
                    >
                      عکس محصول
                    </th>
                    <th
                      scope="col"
                      className="text-sm text-black pl-10 px-6 py-4 text-center "
                    >
                      نام محصول
                    </th> 
                    <th
                      scope="col"
                      className="text-sm text-black pr-3 py-4 text-right "
                    >
                      میزان فروش
                    </th>
                  </tr>
                </thead>
                <tbody>

                  {bestProduct.map((item)=>(
                    <tr key={item.id} className="bg-gray-100 vazir-bold ">
                    <td className="px-6 mrl-5 py-4 whitespace-nowrap text-sm  text-gray-900">
                      {item.id}
                    </td>
                    <td className="   py-4 whitespace-nowrap">
                      <img
                        src={item.src}
                        alt="airpod1"
                        className="w-[80px] h-[80px] rounded-xl"
                      />
                    </td>
                    <td className="text-[15px] text-gray-900 ml-28 px-6 py-4 text-center">
                      {item.name}
                    </td>

                    <td className="text-sm text-gray-900 pt-[41px]  px-6 py-4 whitespace-nowrap flex-row-center vazir-bold">
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
    </div>
  );
}
