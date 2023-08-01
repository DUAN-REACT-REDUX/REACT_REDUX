import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListProduct from "./component/admin/ListProduct/ListProduct";

import Dashbord from "./component/admin/Dashbord/Dashbord";
import AdminLayout from "./layout/admin";
import ListUser from "./component/admin/ListUser/ListUser";
import AddProduct from "./component/admin/AddProduct/addProduct";
import Client from "./layout/client/Client";
import HomePage from "./component/page/HomePage/HomePage";
import AddCat from "./component/admin/AddCat/AddCat";
import ListCategories from "./component/admin/ListCategory/ListCategory";
import Shop from "./component/page/Shop/Shop";
import Login from "./component/auth/Login/Login";
import Register from "./component/auth/Register/Register";
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from "./component/page/ShopDetail/ProductDetail";
import Checkout from "./component/page/Checkout/Checkout";
import Cart from "./component/page/Cart/Cart";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashbord />} />
            <Route path="product">
              <Route index element={<ListProduct />} />
              <Route path="add" element={<AddProduct />} />
            </Route>
            <Route path="users">
              <Route index element={<ListUser />} />
            </Route>
            <Route path="categories">
              <Route index element={<ListCategories />} />
              <Route path="add" element={<AddCat />} />
            </Route>
          </Route>
          <Route path="/" element={<Client />}>
            <Route index element={<HomePage />} />
            <Route path="shop">
              <Route index element={<Shop />} />
              <Route path=":id" element={<ProductDetail />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="cart" element={<Cart />} />
            </Route>
            {/*  <Route path="users">
              <Route index element={<ListUser />} />
            </Route> */}
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
