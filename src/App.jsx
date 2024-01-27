import { useLocation, useRoutes } from "react-router-dom";
import Routes from "./Routes.jsx";
import Topbar from "./components/Topbar.jsx";
import AllContext from "./Context/Context.jsx";
import { useEffect, useState } from "react";
import Login from "./Pages/Login.jsx";
import { GetProduct } from "./Services/Axios/Requests/Products.jsx";
import { GetUser } from "./Services/Axios/Requests/Users.jsx";
import axios from "axios";
import { GetComment } from "./Services/Axios/Requests/Comments.jsx";

function App() {
  let route = useRoutes(Routes);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
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
  const [AllProduct, setAllProduct] = useState([]);
  const [AllUser, setAllUser] = useState([]);
  const [sortProduct, setSortProduct] = useState([]);
  const [allTicket, setAllTicket] = useState([]);
  const [admin, setAdmin] = useState({});
  const [allcomment, setAllcomment] = useState([]);
  function Delete(x) {
    setDeleteModal(x);
  }
  function Deleteuser(x) {
    setDeleteUser(x);
  }
  function updateComment(x) {
    setAllcomment(x);
  }
  function Edit(data) {
    setEditModal(data);
  }
  function Tickets(data) {
    setAllTicket(data);
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
  function RenderRemoveProduct(x) {
    setAllProduct(x);
  }
  function RenderUser(x) {
    setAllUser(x);
  }
  function RenderAdmin(x) {
    setAdmin(x);
  }
  function SortProduct(x) {
    setSortProduct(x);
  }

  useEffect(() => {
    axios
      .get("https://mobo-server.liara.run/user/1")
      .then((data) => setAdmin(data.data));
      GetProduct().then((data) => setAllProduct(data.data));
  }, []);
  
  useEffect(() => { 
     axios.get("https://mobo-server.liara.run/ticket")
      .then((data) => setAllTicket(data.data));
      GetComment().then((res) => setAllcomment(res.data));
  }, []);

  useEffect(() => {
    if (localStorage.length == 0) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, []);

  function sortHandler(ctg) {

    const sortProduct = AllProduct.filter((item) => {
      return item.ctg == ctg;
    });

    setAllProduct(sortProduct);

  }

  useEffect(() => {
    GetUser().then((data) => setAllUser(data.data));
  }, [setAllUser]);

  const { pathname: location } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
        AllProduct,
        AllUser,
        deleteUser,
        admin,
        sortProduct,
        allTicket,
        allcomment,
        Tickets,
        updateComment,
        Delete,
        Deleteuser,
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
        RenderRemoveProduct,
        RenderUser,
        RenderAdmin,
        SortProduct,
        sortHandler,
        

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






