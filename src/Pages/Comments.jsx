import { useContext, useEffect, useState } from "react";
import AllContext from "../Context/Context";
import ShowCommentModal from "../components/Modals/ShowCommentModal";
import AnsswerModal from "../components/Modals/AnsswerModal";
import { DeleteComment, GetComment } from "../Services/Axios/Requests/Comments";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import axios from "axios";

export default function Comments() {
  const context = useContext(AllContext);
  const [edit, setEdit] = useState();
  const [answer, setAnswer] = useState();
  async function commentHandler(data) {
    await setEdit(data);
    context.showComment(true);
  }

  async function answerHandler(data) {
    await setAnswer(data);
    context.answerComment(true);
  }

  function accepttHandler() {
    toast.success("نظر کاربر تایید شد", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  async function rejectHandler(test) {
    await axios.delete(`https://mobo-server.liara.run/comment/${test}`);
    axios
      .get(`https://mobo-server.liara.run/comment`)
      .then((res) => context.updateComment(res.data));

    toast.error("نظر کاربر رد شد", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <>
      <div className="w-full pt-24 md:w-[calc(100%_-_180px)] direction vazir bgimage">
        <div className="w-full flex-row-center">
          <span className="vazir-bold text-[25px]">نظرات کاربران </span>
        </div>
        {context.allcomment.length > 0 ? (
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
                          className="text-sm text-black pr-6 py-4 text-right "
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
                      {context.allcomment.map((com, index) => (
                        <tr key={com.id} className="bg-gray-100 vazir-bold ">
                          <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                            {index + 1}
                          </td>
                          <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                            {com.username}
                          </td>
                          <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                            ادمین
                          </td>
                          <td className="text-[15px] text-gray-900  px-6 py-4 whitespace-nowrap">
                            <svg
                              onClick={() => commentHandler(com.text)}
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
                            <button
                              onClick={() => rejectHandler(com.id)}
                              className="px-5 py-2  border-[2.5px] border-red-500 text-red-500  hover:bg-red-500 hover:text-white mr-5 rounded-xl"
                            >
                              رد
                            </button>
                            <button
                              onClick={() => answerHandler(com.text)}
                              className="px-5 py-2 border-[2.5px] border-blue text-blue  hover:bg-blue hover:text-white rounded-xl mr-5  "
                            >
                              پاسخ
                            </button>
                            <button
                              onClick={() => accepttHandler()}
                              className="px-5 py-2 border-[2.5px] border-green-500 text-green-500  hover:bg-green-500 hover:text-white rounded-xl  mr-5 "
                            >
                              تایید
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
        ) : context.allcomment == 0 ? (
          <div className="w-full  text-center text-[24px]  mt-20   ">
            <span className="bg-blue p-5 rounded-3xl">نظری وجود ندارد</span>
          </div>
        ) : (
          <Loader />
        )}
        {context.showCommentrModal && <ShowCommentModal item={edit} />}
        {context.answerCommentModal && <AnsswerModal item={answer} />}
      </div>
    </>
  );
}
