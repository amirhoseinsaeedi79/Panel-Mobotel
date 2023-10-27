import { useForm } from "react-hook-form";
export default function Product() {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  function registerHandler() {}

  return (
    <div className="w-full pt-24  md:w-[calc(100%_-_180px)]">
      {/* ===================================================== start newUser */}
      <div className=" vazir direction ">
        <form
          onSubmit={handleSubmit(registerHandler)}
          className="flex-col-center border-b-2 border-blue pb-3"
        >
          {/* =================================================== username */}
          <div className="flex-row-center text-[20px] md:text-[25px] mb-5 vazir-bold">
            <p>افزودن محصول جدید</p>
          </div>
          <div className="max-w-[600px] xl:max-w-[1300px] flex-col-center md:grid md:grid-cols-2 xl:md:grid-rows-2 md:items-end gap-x-10 lg:gap-x-[100px] xl:gap-x-[150px]">
            <div className="flex flex-col items-center">
              <label
                className="text-black text-lg vazir-bold relative left-[82px] lg:left-[120px] xl:left-[179px] mb-2 pt-2"
                htmlFor="#username"
              >
                نام محصول :
              </label>
              <input
                className="w-[250px] lg:w-[330px] xl:w-[450px]   shadow-xl h-12 rounded-2xl  border-2 border-blue focus:outline-0 px-4 text-xl "
                id="username"
                type="text"
                {...register("name", {
                  required: "وارد کردن نام اجباریست",
                  minLength: {
                    value: 8,
                    message: "طول نام وارد شده کمتراز 8 کارکتر است",
                  },
                })}
              />
              <div className="error ">{errors.name && errors.name.message}</div>
            </div>
            {/* ===================================================email */}
            <div className="flex flex-col items-center">
              <label
                className="text-black text-lg vazir-bold relative left-[98px] lg:left-[135px] xl:left-[196px] mb-2 pt-2"
                htmlFor="#price"
              >
                قیمت :
              </label>
              <input
                className="w-[250px] lg:w-[330px] xl:w-[450px]  shadow-xl h-12 rounded-2xl border-2 border-blue focus:outline-0 px-4 text-xl "
                id="price"
                type="email"
                {...register("price", {
                  required: "وارد کردن قیمت اجباریست",
                })}
              />
              <div className="error ">
                {errors.price && errors.price.message}
              </div>
            </div>
            {/* ===================================================phone */}
            <div className="flex flex-col items-center">
              <label
                className="text-black text-lg vazir-bold relative left-[73px] lg:left-[110px] xl:left-[172px] mb-2 pt-2"
                htmlFor="#phone"
              >
                دسته بندی :
              </label>
              <input
                className="w-[250px] lg:w-[330px] xl:w-[450px]  shadow-xl h-12 rounded-2xl  border-2 border-blue focus:outline-0 px-4 text-xl "
                id="ctg"
                type="text"
                {...register("ctg", {
                  required: "وارد کردن دسته بندی اجباریست",
                  minLength: {
                    value: 11,
                    message: "طول دسته بندی وارد شده کمتراز11 کارکتر است",
                  },
                  maxLength: {
                    value: 11,
                    message: "طول دسته بندی وارد شده صحیح نیست ",
                  },
                })}
              />
              <div className="error ">
                {errors.ctg && errors.ctg.message}
              </div>
            </div>
            {/* ===================================================password */}
            <div className="flex flex-col items-center">
              <label
                className="text-black text-lg vazir-bold relative left-[89px] lg:left-[128px] xl:left-[187px] mb-2 pt-2"
                htmlFor="#numberItem"
              >
                تعداد موجود :
              </label>
              <input
                className="w-[250px] lg:w-[330px] xl:w-[450px]  shadow-xl h-12 rounded-2xl  border-2 border-blue focus:outline-0 px-4 text-xl "
                id="numberItem"
                type="text"
                {...register("numberItem", {
                  required: "وارد تعداد  اجباریست",
                })}
              />
              <div className="error ">
                {errors.numberItem && errors.numberItem.message}
              </div>
            </div>
            {/* ===================================================repeat password */}
            <div className="flex flex-col items-center">
              <label
                className="text-black text-lg vazir-bold relative left-[72px] lg:left-[110px] xl:left-[172px] mb-2 pt-2"
                htmlFor="#code"
              >
                کد محصول :
              </label>
              <input
                className="w-[250px] lg:w-[330px] xl:w-[450px]  shadow-xl h-12 rounded-2xl  border-2 border-blue focus:outline-0 px-4 text-xl "
                id="code"
                type="text"
                {...register("code", {
                  required: "وارد کردن کد محصول اجباریست",
                })}
              />
              <div className="error ">
                {errors.code && errors.code.message}
              </div>
            </div>
            {/* ===================================================rasteh */}
            <div className="flex flex-col items-center">
              <label
                className="text-black  text-lg vazir-bold lg:mt-3 relative left-[80px] lg:left-[117px] xl:left-[177px] mb-3 pt-2 "
                htmlFor="#rasteh"
              >
                افزودن تصویر :
              </label>
              <input
                className="w-[250px] lg:w-[330px] xl:w-[450px]   h-12 rounded-2xl   focus:outline-0 px-4 text-xl "
                id="rasteh"
                type="file"
                {...register("rasteh", {
                  required: "وارد کردن تصویر محصول اجباریست",
                })}
              />
              <div className="error ">
                {errors.rasteh && errors.rasteh.message}
              </div>
            </div>
          </div>
          <div className="w-full flex-row-center mt-5 md:mt-12">
            <input
              className="py-2 w-[110px] mb-5 shadow-xl bg-white rounded-xl text-xl vazir-bold cursor-pointer border-2 border-blue hover:bg-hover"
              type="submit"
              value={"ثبت"}
            />
          </div>
        </form>
      </div>
      {/* =====================================================end newUser */}

      <div className="pt-7  direction">
        <span className="text-[20px] md:text-[25px] vazir-bold flex-row-center">
          لیست محصولات
        </span>
{/* ==================================================== */}

<div className="flex flex-col vazir pt-5">
  <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 ">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
      <div className="overflow-hidden  border-[2px] border-blue rounded-2xl">
        <table className="min-w-full bg-white">
          <thead className="bg-white border-b-[2px] blue border-blue ">
            <tr>
              <th scope="col" className="text-sm text-black pr-4 py-4 text-right max-w-[100px] ">
               شماره
              </th>
              <th scope="col" className="text-sm text-black pr-14 py-4 text-right">
                تصویر محصول
              </th> 
              <th scope="col" className="text-sm text-black px-6 py-4 text-right">
                نام محصول
              </th>
              <th scope="col" className="text-sm text-black pr-10 py-4 text-right">
                دسته بندی
              </th>
              <th scope="col" className="text-sm text-black pr-10 py-4 text-right">
                
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100 vazir-bold ">
              <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">1</td>
              <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                <img src="images/airpod1.jpg" alt="airpod1" className="w-[120px] h-[120px] rounded-xl" />
              </td>
              <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                ایرپاد 1  پرومکس
              </td>
              <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                09198642898
              </td>
              <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap flex-row-center vazir-bold pt-14">

                <button className="px-5 py-2 border-[2.5px] border-red-500 text-red-500  hover:bg-red-500 hover:text-white ml-5 rounded-xl">حذف</button>
                <button className="px-5 py-2 border-[2.5px] border-blue text-blue  hover:bg-blue hover:text-white rounded-xl ml-5">ویرایش</button>
                <button className="px-5 py-2 border-[2.5px] border-gray-500 text-gray-500  hover:bg-gray-500 hover:text-white rounded-xl ml-5">مشاهده</button>
              </td>
            </tr>  
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

{/* ==================================================== */}

      </div>
    </div>
  );
}
