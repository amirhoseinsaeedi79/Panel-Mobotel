import { Navigate, useRoutes } from "react-router-dom";
import Routes from "./Routes.jsx";
import Topbar from "./components/Topbar.jsx";
import AllContext from "./Context/Context.jsx";
import { useState } from "react";
import Login from "./Pages/Login.jsx";

function App() {
  let route = useRoutes(Routes);

  const [deleteModal, setDeleteModal] = useState(false);
  const [editeModal, setEditModal] = useState(false);
  const [editUserModal, setEditUserModal] = useState(true);
  const [infoModal, setInfoModal] = useState(false);
  const [islogin, setIsLogin] = useState(false);

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


  return (
    <AllContext.Provider
      value={{
        deleteModal,
        islogin,
        editeModal,
        infoModal,
        editUserModal,
        Delete,
        Edit,
        Info,
        login,
        EditUser,
      }}
    >
      {islogin ? (
        <div>
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
