import ApiRequest from "../Configs/Config";

export const PostComment= (NewComment,CommentId) =>{
  return  ApiRequest.post(`/api/comment/${CommentId}`,NewComment)
}
export const GetComment= () =>{
  return  ApiRequest.get('comment')
}
export const PutComment= (UpdateComment,CommentId) =>{
  return  ApiRequest.put(`/api/comment/update/${CommentId}`,UpdateComment)
}
export const DeleteComment= (CommentId) =>{
  return  ApiRequest.delete(`Comments/${CommentId}`)
}