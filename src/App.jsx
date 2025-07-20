import React, { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Main from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Restaurant from "./pages/Restaurant";
import Activity from "./pages/Activity";
import Layout from "./layouts/layout";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import DetailAct from "./pages/ProductDetailActivity";
import DetailRest from "./pages/ProductDetailRestaurant";
import Car from "./pages/Car";
import Chatbot from "./pages/Chatbot";

function App({ FileInput, ProfileInput, serverURL, userId, store }) {
  localStorage.setItem('cartState', []);

  const [count, setCount] = useState(0)

  const [user, setUser] = useState(null);
  const login = ({ id, pwd }) => setUser(signIn({ id, pwd }));
  const logout = () => setUser(null);

  const initialCartItem = localStorage.getItem('cartState');

  const [productItems, setProductItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const dataId = useRef(0);
  const [isLogin, setIsLogin] = useState(false);
  const [blogData, setData] = useState([]);

  function loginCallBack(login) {
    setIsLogin(!isLogin);
    console.log('로그인 사용자가 접속하였습니다.');
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout initialCartItem={initialCartItem} />}>
            <Route
              path="/"
              element={<Main isLogin={isLogin} store={store} />}
            />
            <Route
              path="/pages/Login"
              element={<Login loginCallBack={loginCallBack} serverURL={serverURL} />}
            />
            <Route
              path="/pages/Signup"
              element={<Signup serverURL={serverURL} />}
            />
            <Route
              path="/pages/Restaurant"
              element={<Restaurant />}
            />
            <Route
              path="/pages/Activity"
              element={<Activity />}
            />
            <Route
              path="/cart"
              element={<Cart serverURL={serverURL} userId={userId} />}
            />
            <Route
              path="/order"
              element={<Order serverURL={serverURL} userId={userId} />}
            />
            <Route
              path="/detail/:id"
              element={<DetailAct />}
            />
            <Route
              path="/detail2/:id"
              element={<DetailRest />}
            />
            <Route
              path="/pages/Car/"
              element={<Car />}
            />
            <Route
              path="/pages/navigation"
              element={<Chatbot />}
            />
          </Route >
        </Routes >
      </BrowserRouter >
    </>
  )
}

export default App
