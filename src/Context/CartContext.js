import axios from "axios";
import { createContext } from "react";
import toast from "react-hot-toast";

export let CartContext=createContext()
export default function CartContextProvider(props){
let headers={token:localStorage.getItem('userToken')
}
function addToCart(productId){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
productId

    },{
headers

})
    .then((response)=>{
        console.log(response);

        toast.success(response.data.message,{
            duration:2000,
            position: 'top-center',
            icon:'🛒', })
          }

    )
    .catch((err)=>err)

}
function checkOutSession(cartId,shippingAddress){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,{
shippingAddress

    },{
headers

})
    .then((response)=>response)
    .catch((err)=>err)

}
function getOrders(cartId, shippingAddress) {
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/user/${cartId}`, {
      shippingAddress
    }, {
      headers
    })
    .then((response) => {
      console.log('API Response:', response.data);
      return response.data;
    })
    .catch((err) => {
      console.error('Error fetching orders:', err);
      throw err; 
    });
  }


function getCartItems(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
headers

})
    .then((response)=>response)
    .catch((err)=>err)

}
function deleteCartItems(productId){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
headers

})
    .then((response)=>response)
    .catch((err)=>err)

}


function updateCartItems(productId ,count){
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{

   count
} ,{
headers

})
    .then((response)=>response)
    .catch((err)=>err)

}

return <CartContext.Provider value={{addToCart,getCartItems,deleteCartItems,updateCartItems,checkOutSession,getOrders}} >

    {props.children}
</CartContext.Provider>
}