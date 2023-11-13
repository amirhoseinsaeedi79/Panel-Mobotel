import ApiRequest from "../Configs/Config";

export const PostTicket= (NewTicket,TicketId) =>{
  return  ApiRequest.post(`/api/support/add/${TicketId}`,NewTicket)
}
export const GetTicket= () =>{
  return  ApiRequest.get('/api/support/all')
}
export const PutTicket= (UpdateTicket,TicketId) =>{
  return  ApiRequest.put(`/api/support/update/${TicketId}`,UpdateTicket)
}
export const DeleteTicket= (TicketId) =>{
  return  ApiRequest.delete(`/api/support/delete/${TicketId}`)
}