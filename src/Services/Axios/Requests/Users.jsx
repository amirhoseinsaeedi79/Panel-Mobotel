import ApiRequest from "../Configs/Config";

export const PostUser= (NewUser) =>{
  return  ApiRequest.post('user',NewUser)
}
export const GetUser= () =>{
  return  ApiRequest.get('user')
}
export const PutUser= (UpdateUser,UserId) =>{
  return  ApiRequest.patch(`user/${UserId}`,UpdateUser)
}
export const DeleteUser= (UserId) =>{
  return  ApiRequest.delete(`user/${UserId}`)
}