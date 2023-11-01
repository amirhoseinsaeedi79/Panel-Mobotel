import { createContext } from "react";

const AllContext = createContext({
  deleteModal: false,
  islogin: false,
  editeModal:false,
  infoModal:false,
  editUserModal:false,
  Delete: () => {},
  login: () => {},
  Edit: () => {},
  Info: () => {},
  EditUser: () => {},
});

export default AllContext;
