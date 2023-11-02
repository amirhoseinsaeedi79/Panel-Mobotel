import { createContext } from "react";

const AllContext = createContext({
  deleteModal: false,
  islogin: false,
  editeModal: false,
  infoModal: false,
  editUserModal: false,
  showCommentrModal: false,
  answerCommentModal: false,
  AnswerTicket: false,
  ShowTicket: false,
  orderModa: false,
  ShowProfile: false,
  Delete: () => {},
  login: () => {},
  Edit: () => {},
  Info: () => {},
  EditUser: () => {},
  showComment: () => {},
  answerComment: () => {},
  showTicket: () => {},
  answerTicket: () => {},
  showOrder: () => {},
  showProfileAdmin: () => {},
});

export default AllContext;
