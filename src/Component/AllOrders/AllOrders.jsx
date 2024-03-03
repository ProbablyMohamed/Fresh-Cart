import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import { UserContext } from '../../Context/UserContext';
import { getOrders } from '../../Redux/ordersSlice'; 
import { jwtDecode } from 'jwt-decode';



export default function AllOrders() {



  const dispatch = useDispatch();
  const userId = useContext(UserContext); 
  const { orders, loading, error } = useSelector((state) => state.orders);
console.log(orders);
  useEffect(() => {
    if (userId) {
      dispatch(getOrders(userId)); 
    } else {
      console.error('Error: Invalid userId:', userId);
    }
  }, [dispatch, userId]);

  return (
    <div className="bg-main-light mt-5 p-2">
      <h2>All Orders</h2>

      {loading ? (
        <div className="loading">
          <ThreeCircles
            visible={true}
            height="100"
            width="100"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass="d-flex justify-content-center mt-5"
          />
        </div>
      ) : error ? (
        <h2 className="text-center text-main fw-bolder p-5">Error: {error.message}</h2>
      ) : orders && orders.length > 0 ? (
        <>
          <p className="text-main">Total number of orders: {orders.length}</p>
          {orders.map((order) => (
            <div key={order._id} className="row align-items-center p-2 m-0 border-1 border-bottom">
              <div className="col-md-10">
                <div className="item">
                  <h3 className="h5 fw-bold">{order.user.name}</h3>
                  <p className="text-main fw-bold">Order Number: {order._id}</p>
                  <p className="text-main fw-bold">Total Price: {order.totalOrderPrice}</p>
                  
                 
                  <div className="order-items row">
                    {order.cartItems.map((item) => (
                      <div key={item._id} className="col-lg-2 p-2">
                        <div className="product p-2">
                          <Link to={`/productdetails/${item.product.id}`}>
                            <img src={item.product.imageCover} className='w-100' alt={item.product.title} />
                          </Link>
                          <span className='font-small text-main'>{item.product.category.name}</span>
                          <h3 className='h5'>{item.product.title.split(' ').splice(0, 2).join(' ')}</h3>
                          <div className=" d-flex py-3 justify-content-between align-items-center">
                            <span className='font-sm'>{item.price}EGP</span>
                            <span><i className="fas fa-star rating-color me-2"></i>{item.product.ratingsAverage}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <h2 className="text-center text-main fw-bolder p-5">No Orders Found</h2>
      )}
    </div>
  );
}
