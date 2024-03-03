import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';
import UserContextProvider from './Context/UserContext.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QueryClient, QueryClientProvider } from 'react-query';
import{ReactQueryDevtools} from 'react-query/devtools'
import CartContextProvider from './Context/CartContext.js';

let queryClient = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartContextProvider>
  
<UserContextProvider>
    <QueryClientProvider client={queryClient}>
    <App/>
   
    </QueryClientProvider>
  
</UserContextProvider>
</CartContextProvider>
);


reportWebVitals();
