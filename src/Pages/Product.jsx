import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {
  useContext,
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Autoplay,
  FreeMode,
  Pagination,
} from 'swiper/modules';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import Loader from '../components/Loader';
import EditModal from '../components/Modals/EditModal';
import InfoModal from '../components/Modals/InfoModal';
import RemoveModal from '../components/Modals/RemoveModal';
import AllContext from '../Context/Context';
import {
  GetProduct,
  PostProduct,
} from '../Services/Axios/Requests/Products';

export default function Product() {
  const context = useContext(AllContext);
  const [edit, setEdit] = useState();
  const [info, setInfo] = useState();
  const [AllProduct, setAllProduct] = useState();
  const [remove, setRemove] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    GetProduct().then((res) => setAllProduct(res.data));
  });

  async function sortHandler(ctg) {
    await axios
      .get(`https://mobo-server.liara.run/product?ctg=${ctg}`)
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
    reset();

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
    <div className="w-full pt-24 md:w-[calc(100%_-_180px)]">
      {/* ===================================================== start newUser */}
      <div className="vazir direction">
        <form
          onSubmit={handleSubmit(registerHandler)}
          className="flex-col-center border-b-2 border-blue pb-3"
        >
          {/* =================================================== username */}
          <div className="flex-row-center vazir-bold mb-5 text-[20px] md:text-[22px]">
            <p>افزودن محصول جدید</p>
          </div>
          <div className="flex-col-center max-w-[600px] gap-x-10 md:grid md:grid-cols-2 md:items-end lg:gap-x-[100px] xl:md:grid-rows-2 xl:max-w-[1300px] xl:gap-x-[150px]">
            <div className="flex flex-col items-center">
              <label
                className="vazir-bold relative left-[82px] mb-2 pt-2 text-lg text-black lg:left-[120px] xl:left-[179px]"
                htmlFor="#username"
              >
                نام محصول :
              </label>
              <input
                className="h-12 w-[250px] rounded-2xl border-2 border-blue px-4 text-xl shadow-xl focus:outline-0 lg:w-[330px] xl:w-[450px]"
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
              <div className="error">{errors.name && errors.name.message}</div>
            </div>
            {/* ===================================================email */}
            <div className="flex flex-col items-center">
              <label
                className="vazir-bold relative left-[98px] mb-2 pt-2 text-lg text-black lg:left-[135px] xl:left-[196px]"
                htmlFor="#price"
              >
                قیمت :
              </label>
              <input
                className="h-12 w-[250px] rounded-2xl border-2 border-blue px-4 text-xl shadow-xl focus:outline-0 lg:w-[330px] xl:w-[450px]"
                id="price"
                type="text"
                {...register("price", {
                  required: "وارد کردن قیمت اجباریست",
                })}
              />
              <div className="error">
                {errors.price && errors.price.message}
              </div>
            </div>
            {/* ===================================================phone */}
            <div className="flex flex-col items-center">
              <label
                className="vazir-bold relative left-[73px] mb-2 pt-2 text-lg text-black lg:left-[110px] xl:left-[172px]"
                htmlFor="#phone"
              >
                دسته بندی :
              </label>
              <input
                className="h-12 w-[250px] rounded-2xl border-2 border-blue px-4 text-xl shadow-xl focus:outline-0 lg:w-[330px] xl:w-[450px]"
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
              <div className="error">{errors.ctg && errors.ctg.message}</div>
            </div>
            {/* ===================================================password */}
            <div className="flex flex-col items-center">
              <label
                className="vazir-bold relative left-[89px] mb-2 pt-2 text-lg text-black lg:left-[128px] xl:left-[187px]"
                htmlFor="#numberItem"
              >
                تعداد موجود :
              </label>
              <input
                className="h-12 w-[250px] rounded-2xl border-2 border-blue px-4 text-xl shadow-xl focus:outline-0 lg:w-[330px] xl:w-[450px]"
                id="numberItem"
                type="text"
                {...register("numberItem", {
                  required: "وارد تعداد  اجباریست",
                })}
              />
              <div className="error">
                {errors.numberItem && errors.numberItem.message}
              </div>
            </div>
            {/* ===================================================repeat password */}
            <div className="flex flex-col items-center">
              <label
                className="vazir-bold relative left-[72px] mb-2 pt-2 text-lg text-black lg:left-[110px] xl:left-[172px]"
                htmlFor="#code"
              >
                کد محصول :
              </label>
              <input
                className="h-12 w-[250px] rounded-2xl border-2 border-blue px-4 text-xl shadow-xl focus:outline-0 lg:w-[330px] xl:w-[450px]"
                id="code"
                type="text"
                {...register("code", {})}
              />
              <div className="error">{errors.code && errors.code.message}</div>
            </div>
            {/* ===================================================rasteh */}
            <div className="flex flex-col items-center">
              <label
                className="vazir-bold relative left-[80px] mb-3 pt-2 text-lg text-black lg:left-[117px] lg:mt-3 xl:left-[177px]"
                htmlFor="#rasteh"
              >
                افزودن تصویر :
              </label>
              <input
                className="h-12 w-[250px] rounded-2xl px-4 text-xl focus:outline-0 lg:w-[330px] xl:w-[450px]"
                id="rasteh"
                type="file"
                {...register("rasteh", {})}
              />
              <div className="error">
                {errors.rasteh && errors.rasteh.message}
              </div>
            </div>
          </div>
          <div className="flex-row-center mt-5 w-full md:mt-12">
            <input
              className="vazir-bold mb-5 w-[110px] cursor-pointer rounded-xl border-2 border-blue bg-white py-2 text-xl shadow-xl hover:bg-hover"
              type="submit"
              value={"ثبت"}
            />
          </div>
        </form>
      </div>
      {/* ==================================================== end newUser */}

      <div className="direction pt-7">
        <div className="alltopbarProduct flex flex-col items-center justify-center md:flex-row">
          <span className="vazir-bold flex-row-center pt-1 text-[20px] md:ml-10 md:text-[22px]">
            لیست محصولات
          </span>
          <form
            onSubmit={() => event.preventDefault()}
            className="mt-5 md:mt-0"
          >
            <div className="relative px-3">
              <button className="absolute inset-y-0 left-2 flex items-center pl-3">
                <svg
                  className="h-6 w-6"
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
                className="direction block w-full rounded-xl border-[3px] border-blue px-7 py-2 pl-10 focus:outline-none"
                placeholder="جستجوی محصول ..."
              />
            </div>
          </form>
        </div>
        {/* ==================================================== ctg */}

        {context.AllProduct.length != 0 ? (
          <>
            <div className="mt-2">
              <Swiper
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
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
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper mb-5 mt-10 max-h-[185px] px-3 text-center"
              >
                <SwiperSlide
                  onClick={() => sortHandler("ساعت")}
                  className=""
                >
                  <Link className="flex w-[150px] flex-col items-center rounded-xl px-5 py-3 text-[18px]">
                    <img src="images/watch.webp" alt="" className="mb-2 h-[105px] w-[105px] rounded-full" />
                    <span className="max-h-[30px]">ساعت</span>
                  </Link>
                </SwiperSlide>
                <SwiperSlide
                  onClick={() => sortHandler("ایرپاد")}
                  className=""
                >
                  <Link className="flex w-[150px] flex-col items-center rounded-xl px-5 py-3 text-[18px]">
                    <img src="images/airpod.webp" alt="" className="mb-2 h-[105px] w-[105px] rounded-full" />
                    <span>ایرپاد</span>
                  </Link>
                </SwiperSlide>
                <SwiperSlide
                  onClick={() => sortHandler("شارژر")}
                  className=""
                >
                  <Link className="flex w-[150px] flex-col items-center rounded-xl px-5 py-3 text-[18px]">
                    <img src="images/charger.webp" alt="" className="mb-2 h-[105px] w-[105px] rounded-full" />
                    <span>شارژر</span>
                  </Link>
                </SwiperSlide>
                <SwiperSlide
                  onClick={() => sortHandler("قاب")}
                  className=""
                >
                  <Link className="flex w-[150px] flex-col items-center rounded-xl px-5 py-3 text-[18px]">
                    <img
                      src="images/cover.jpeg"
                      alt=""
                      className="mb-2 h-[105px] w-[105px] rounded-full"
                    />
                    <span>قاب</span>
                  </Link>
                </SwiperSlide>
                <SwiperSlide
                  onClick={() => sortHandler("فلش")}
                  className=""
                >
                  <Link className="flex w-[150px] flex-col items-center rounded-xl px-5 py-3 text-[18px]">
                    <img
                      src="images/flash.webp"
                      alt=""
                      className="mb-2 h-[105px] w-[105px] rounded-full"
                    />
                    <span>فلش</span>
                  </Link>
                </SwiperSlide>
                <SwiperSlide
                  onClick={() => sortHandler("مموری")}
                  className=""
                >
                  <Link className="flex w-[150px] flex-col items-center rounded-xl px-5 py-3 text-[18px]">
                    <img
                      src="images/memori.jpg"
                      alt=""
                      className="mb-2 h-[105px] w-[105px] rounded-full"
                    />
                    <span>مموری</span>
                  </Link>
                </SwiperSlide>
                <SwiperSlide
                  onClick={() => sortHandler("پاوربانک")}
                  className=""
                >
                  <Link className="flex w-[150px] flex-col items-center rounded-xl px-5 py-3 text-[18px]">
                    <img
                      src="images/power.webp"
                      alt=""
                      className="mb-2 h-[105px] w-[105px] rounded-full"
                    />
                    <span>پاوربانک</span>
                  </Link>
                </SwiperSlide>
                <SwiperSlide
                  onClick={() => sortHandler("هدفون")}
                  className=""
                >
                  <Link className="flex w-[150px] flex-col items-center rounded-xl px-5 py-3 text-[18px]">
                    <img
                      src="images/headphone.webp"
                      alt=""
                      className="mb-2 h-[105px] w-[105px] rounded-full"
                    />
                    <span>هدفون</span>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* ==================================================== */}

            <div className="vazir flex flex-col">
              <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden rounded-2xl border-[2px] border-blue">
                    <table className="min-w-full bg-white">
                      <thead className="blue border-b-[2px] border-blue bg-white">
                        <tr>
                          <th
                            scope="col"
                            className="max-w-[100px] py-4 pr-4 text-right text-sm text-black"
                          >
                            شماره
                          </th>
                          <th
                            scope="col"
                            className="py-4 pr-5 text-right text-sm text-black"
                          >
                            تصویر محصول
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-right text-sm text-black"
                          >
                            نام محصول
                          </th>
                          <th
                            scope="col"
                            className="py-4 pr-5 text-right text-sm text-black"
                          >
                            دسته بندی
                          </th>
                          <th
                            scope="col"
                            className="py-4 pr-10 text-right text-sm text-black"
                          ></th>
                        </tr>
                      </thead>

                      {context.AllProduct.map((item, index) => (
                        <tbody key={item.id}>
                          <tr className="vazir-bold bg-gray-100">
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                              {index + 1}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-[15px] text-gray-900">
                              <img
                                src={`images/${item.imgae}`}
                                alt="airpod1"
                                className="h-[75px] w-[100px] rounded-xl"
                              />
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-[15px] text-gray-900">
                              {item.name}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 text-[15px] text-gray-900">
                              {item.ctg}
                            </td>
                            <td className="flex-row-center vazir-bold whitespace-nowrap px-6 py-4 pt-7 text-sm text-gray-900">
                              <button
                                onClick={() => removeHandler(item.id)}
                                className="ml-5 rounded-xl border-[2.5px] border-red-500 px-5 py-2 text-red-500 hover:bg-red-500 hover:text-white"
                              >
                                حذف
                              </button>
                              <button
                                onClick={() => editHandler(item)}
                                className="ml-5 rounded-xl border-[2.5px] border-blue px-5 py-2 text-blue hover:bg-blue hover:text-white"
                              >
                                ویرایش
                              </button>
                              <button
                                onClick={() => InfoHandler(item)}
                                className="ml-5 rounded-xl border-[2.5px] border-gray-500 px-5 py-2 text-gray-500 hover:bg-gray-500 hover:text-white"
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
          </>
        ) : (
          <Loader />
        )}
        {/* ==================================================== */}
      </div>
    </div>
  );
}
