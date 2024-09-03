import ApiRequest from '../Configs/Config';

export const PostTicket= (NewTicket,TicketId) =>{
  return  ApiRequest.post(`ticket/add/${TicketId}`,NewTicket)
}
export const GetTicket= () =>{
  return  ApiRequest.get('ticket/all')
}
export const PutTicket= (UpdateTicket,TicketId) =>{
  return  ApiRequest.put(`ticket/update/${TicketId}`,UpdateTicket)
}
export const DeleteTicket= (TicketId) =>{
  return  ApiRequest.delete(`ticket/${TicketId}`)
}