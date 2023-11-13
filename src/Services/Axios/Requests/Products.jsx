import ApiRequest from "../Configs/Config";

export const PostProduct= (NewProduct) =>{
  return  ApiRequest.post('product',NewProduct)
}
export const GetProduct= () =>{
  return  ApiRequest.get('product')
}
export const PutProduct= (UpdateProduct,productId) =>{
  return  ApiRequest.put(`product/${productId}`,UpdateProduct)
}
export const DeleteProduct= (productId) =>{
  return  ApiRequest.delete(`product/${productId}`)
}