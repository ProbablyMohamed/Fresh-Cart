

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cart from './Component/Cart/Cart';
import Layout from './Component/Layout/Layout';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import Home from './Component/Home/Home';
import Categories from './Component/Categories/Categories';
import Brands from './Component/Brands/Brands';
import NotFound from './Component/NotFound/NotFound';
import UserContextProvider, { UserContext } from './Context/UserContext';
import { useContext } from 'react';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import ShippingAddress from './Component/ShippingAddress/ShippingAddress';
import AllOrders from './Component/AllOrders/AllOrders';

  


export default function App() {
  let routers=createBrowserRouter([

    {path:'', element: <Layout/>, children:[
      {index:true , element:<ProtectedRoute><Home/></ProtectedRoute>},
      {path:'cart', element:<ProtectedRoute><Cart/></ProtectedRoute>},
      {path:'shippingaddress/:cartId', element:<ProtectedRoute><ShippingAddress/></ProtectedRoute>},
      {
        path: 'allorders',
        element: <ProtectedRoute><AllOrders/></ProtectedRoute>
      }
      ,
      {path:'productdetails/:id', element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
      {path:'brands', element:<ProtectedRoute><Brands/></ProtectedRoute>},
      {path:'categories', element:<ProtectedRoute><Categories/></ProtectedRoute>},
      {path:'register', element:<Register/>},
      {path:'login', element:<Login/>},
      {path:'*', element:<NotFound/>},
    ]}
  ])

   let{setUserToken} = useContext(UserContext);

if(localStorage.getItem('userToken')){
  setUserToken(localStorage.getItem('userToken'))
}


  return <>

<Provider store={store}>
<RouterProvider router={routers}>
</RouterProvider>
<Toaster/>
</Provider>


  </>
}
