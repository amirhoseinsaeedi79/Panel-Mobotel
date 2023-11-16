import { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import AllContext from "../Context/Context";
import RemoveModal from "../components/Modals/RemoveModal";
import EditModal from "../components/Modals/EditModal";
import InfoModal from "../components/Modals/InfoModal";
import { GetProduct, PostProduct } from "../Services/Axios/Requests/Products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function Product() {
  const context = useContext(AllContext);
  const [edit, setEdit] = useState();
  const [info, setInfo] = useState();
  const [AllProduct, setAllProduct] = useState();
  const [remove, setRemove] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    GetProduct().then((res) => setAllProduct(res.data));
    // GetProduct().then(res=>context.RenderRemoveProduct(res.data))
  });

  async function sortHandler(ctg) {
    await axios
      .get(`http://localhost:3000/product?ctg=${ctg}`)
      .then((res) => context.RenderRemoveProduct(res.data));
  }

  async function searchHandler(event) {
    await setSearch(event.target.value);
    const searchValue = AllProduct.filter((item) => item.name.includes(search));
    context.RenderRemoveProduct(searchValue);
  }

  function removeHandler(item) {
    context.Delete(true);
    setRemove(item);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function registerHandler(data) {
    const newProduct = {
      name: data.name,
      ctg: data.ctg,
      price: data.price,
      quantity: data.quantity,
      imgae: "no-image.jpg",
    };

    PostProduct(newProduct).then((res) => console.log(res.data));
    reset()

    toast.success("محصول جدید ثبت شد", {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
                type="text"
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
                    value: 2,
                    message: "طول دسته بندی وارد شده کمتراز11 کارکتر است",
                  },
                })}
              />
              <div className="error ">{errors.ctg && errors.ctg.message}</div>
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
                {...register("code", {})}
              />
              <div className="error ">{errors.code && errors.code.message}</div>
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
                {...register("rasteh", {})}
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
      {/* ==================================================== end newUser */}

      <div className="pt-7  direction">
        <div className="alltopbarProduct flex flex-col md:flex-row justify-center  items-center">
          <span className="text-[20px] md:text-[25px] vazir-bold flex-row-center pt-1  md:ml-10">
            لیست محصولات
          </span>
          <form
            onSubmit={() => event.preventDefault()}
            className="mt-5 md:mt-0"
          >
            <div className="relative px-3">
              <button className="flex absolute inset-y-0 left-2 items-center pl-3 ">
                <svg
                  className="w-6 h-6 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
              <input
                onChange={searchHandler}
                value={search}
                type="text"
                id="default-search"
                className="block direction px-7 py-2 pl-10 w-full rounded-xl border-[3px] border-blue focus:outline-none"
                placeholder="جستجوی محصول ..."
              />
            </div>
          </form>
        </div>
        {/* ==================================================== ctg */}

        <div className="mt-2">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            freeMode={true}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 1,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 1,
              },
              1024: {
                slidesPerView: 5,
                // spaceBetween: 1,
              },
              1424: {
                slidesPerView: 5.5,
                // spaceBetween: 1,
              },
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper text-center px-3 max-h-[185px] mt-10 mb-5"
          >
            <SwiperSlide
              onClick={() => sortHandler("watch")}
              className="flex-row-center "
            >
              <Link className=" px-5 py-3  text-[20px] rounded-xl w-[150px]">
                <img
                  src="src/assets/images/watch.webp"
                  alt=""
                  className="mb-2"
                />
                <span className="max-h-[30px]">ساعت</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide
              onClick={() => sortHandler("airpod")}
              className="flex-row-center "
            >
              <Link className=" px-5 py-3  text-[20px] rounded-xl w-[150px]">
                <img
                  src="src/assets/images/airpod.webp"
                  alt=""
                  className="mb-2"
                />
                <span>ایرپاد</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide
              onClick={() => sortHandler("charger")}
              className="flex-row-center "
            >
              <Link className=" px-5 py-3  text-[20px] rounded-xl w-[150px]">
                <img
                  src="src/assets/images/charger.webp"
                  alt=""
                  className="mb-2"
                />
                <span>شارژر</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide
              onClick={() => sortHandler("cover")}
              className="flex-row-center "
            >
              <Link className=" px-5 py-3  text-[20px] rounded-xl w-[150px]">
                <img
                  src="src/assets/images/cover.jpeg"
                  alt=""
                  className="rounded-full h-[105px] w-[105px] mb-2"
                />
                <span>قاب</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide
              onClick={() => sortHandler("flash")}
              className="flex-row-center "
            >
              <Link className=" px-5 py-3  text-[20px] rounded-xl w-[150px]">
                <img
                  src="src/assets/images/flash.webp"
                  alt=""
                  className="rounded-full h-[105px] w-[105px] mb-2"
                />
                <span>فلش</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide
              onClick={() => sortHandler("memori")}
              className="flex-row-center "
            >
              <Link className=" px-5 py-3  text-[20px] rounded-xl w-[150px]">
                <img
                  src="src/assets/images/memori.jpg"
                  alt=""
                  className="rounded-full h-[105px] w-[105px] mb-2"
                />
                <span>مموری</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide
              onClick={() => sortHandler("power")}
              className="flex-row-center "
            >
              <Link className=" px-5 py-3  text-[20px] rounded-xl w-[150px]">
                <img
                  src="src/assets/images/power.webp"
                  alt=""
                  className="rounded-full h-[105px] w-[105px] mb-2"
                />
                <span>پاوربانک</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide
              onClick={() => sortHandler("headphon")}
              className="flex-row-center "
            >
              <Link className=" px-5 py-3 text-[20px] rounded-xl w-[150px]">
                <img
                  src="src/assets/images/headphone.webp"
                  alt=""
                  className="rounded-full h-[105px] w-[105px] mb-2"
                />
                <span>هدفون</span>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* ==================================================== */}

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

                  {context.AllProduct.map((item) => (
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
        {/* ==================================================== */}
      </div>
    </div>
  );
}
