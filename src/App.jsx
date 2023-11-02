import { useLocation, useRoutes } from "react-router-dom";
import Routes from "./Routes.jsx";
import Topbar from "./components/Topbar.jsx";
import AllContext from "./Context/Context.jsx";
import { useEffect, useState } from "react";
import Login from "./Pages/Login.jsx";

function App() {
  let route = useRoutes(Routes);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editeModal, setEditModal] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [islogin, setIsLogin] = useState(false);
  const [showCommentrModal, setShowCommentrModal] = useState(false);
  const [answerCommentModal, setAnswerCommentModal] = useState(false);
  const [AnswerTicket, setAnswerTicket] = useState(false);
  const [ShowTicket, setShowTicket] = useState(false);
  const [orderModal, setShowOrderModal] = useState(false);
  const [ShowProfile, setShowProfile] = useState(false);

  function Delete(x) {
    setDeleteModal(x);
  }
  function Edit(data) {
    setEditModal(data);
  }
  function Info(data) {
    setInfoModal(data);
  }
  function login(x) {
    setIsLogin(x);
  }
  function EditUser(x) {
    setEditUserModal(x);
  }
  function showComment(x) {
    setShowCommentrModal(x);
  }
  function answerComment(x) {
    setAnswerCommentModal(x);
  }
  function showTicket(x) {
    setShowTicket(x);
  }
  function answerTicket(x) {
    setAnswerTicket(x);
  }
  function showOrder(x) {
    setShowOrderModal(x);
  }
  function showProfileAdmin(x) {
    setShowProfile(x);
  }

  useEffect(() => {
    if (localStorage.length == 0) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    } 
  }, []);

  const  {pathname :location}=useLocation()
  
  useEffect(() =>{
    window.scrollTo(0,0)
  },[location])

  return (
    <AllContext.Provider
      value={{
        deleteModal,
        islogin,
        showCommentrModal,
        editeModal,
        infoModal,
        editUserModal,
        answerCommentModal,
        AnswerTicket,
        ShowTicket,
        orderModal,
        ShowProfile,
        Delete,
        Edit,
        Info,
        login,
        EditUser,
        showComment,
        answerComment,
        showTicket,
        answerTicket,
        showOrder,
        showProfileAdmin,
      }}
    >
      {islogin ? (
        <div className="h-[100vh]">
          <Topbar />
          {route}
        </div>
      ) : (
        <Login />
      )}
    </AllContext.Provider>
  );
}

export default App;
