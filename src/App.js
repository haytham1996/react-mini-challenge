import Login from "./Components/login/Login";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Components/Home/Home";
import Users from "./Components/Users/Users";
import Navbar from "./Components/Navbar/Navbar";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from "./redux/store"
import Product from "./Components/Product/product";
import DetailUser from "./Components/Users/DetailUser";


function LayoutwithNavBar() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
function App() {

  return (
    <Provider store={store}>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<LayoutwithNavBar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Product />} />
          <Route path="/users/detail/:id" element={<DetailUser />} />
        </Route>

      </Routes>
    </Provider>

  );
}

export default App;
