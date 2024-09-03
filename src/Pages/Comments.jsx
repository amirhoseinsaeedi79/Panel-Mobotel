import {
  useContext,
  useState,
} from 'react';

import axios from 'axios';
import { toast } from 'react-toastify';

import Loader from '../components/Loader';
import AnsswerModal from '../components/Modals/AnsswerModal';
import ShowCommentModal from '../components/Modals/ShowCommentModal';
import AllContext from '../Context/Context';

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
      <div className="direction vazir bgimage w-full pt-24 md:w-[calc(100%_-_180px)]">
        <div className="flex-row-center w-full">
          <span className="vazir-bold text-[25px]">نظرات کاربران </span>
        </div>
        {context.allcomment.length > 0 ? (
          <div className="vazir flex flex-col pt-5">
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-2xl border-[3px] border-blue">
                  <table className="min-w-full">
                    <thead className="blue border-b-[2px] border-blue bg-white">
                      <tr>
                        <th
                          scope="col"
                          className="max-w-[80px] py-4 pl-6 pr-3 text-right text-sm text-black"
                        >
                          شماره
                        </th>
                        <th
                          scope="col"
                          className="py-4 pr-6 text-right text-sm text-black"
                        >
                          نام کاربری
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-right text-sm text-black"
                        >
                          عنوان
                        </th>
                        <th
                          scope="col"
                          className="py-4 pr-4 text-right text-sm text-black"
                        >
                          نمایش نظر
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-center text-sm text-black"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      {context.allcomment.map((com, index) => (
                        <tr key={com.id} className="vazir-bold bg-gray-100">
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                            {index + 1}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-[15px] text-gray-900">
                            {com.username}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-[15px] text-gray-900">
                            ادمین
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-[15px] text-gray-900">
                            <svg
                              onClick={() => commentHandler(com.text)}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="h-8 w-8 cursor-pointer hover:text-blue"
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
                          <td className="flex-row-center vazir-bold whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                            <button
                              onClick={() => rejectHandler(com.id)}
                              className="mr-5 rounded-xl border-[2.5px] border-red-500 px-5 py-2 text-red-500 hover:bg-red-500 hover:text-white"
                            >
                              رد
                            </button>
                            <button
                              onClick={() => answerHandler(com.text)}
                              className="mr-5 rounded-xl border-[2.5px] border-blue px-5 py-2 text-blue hover:bg-blue hover:text-white"
                            >
                              پاسخ
                            </button>
                            <button
                              onClick={() => accepttHandler()}
                              className="mr-5 rounded-xl border-[2.5px] border-green-500 px-5 py-2 text-green-500 hover:bg-green-500 hover:text-white"
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
          <div className="mt-20 w-full text-center text-[24px]">
            <span className="rounded-3xl bg-blue p-5">نظری وجود ندارد</span>
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
