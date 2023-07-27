import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListProduct from "./component/admin/ListProduct/ListProduct";

import Dashbord from "./component/admin/Dashbord/Dashbord";
import AdminLayout from "./layout/admin";
import ListUser from "./component/admin/ListUser/ListUser";
import AddProduct from "./component/admin/AddProduct/addProduct";
import Client from "./layout/client/Client";
import HomePage from "./component/page/HomePage/HomePage";
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
          </Route>
          <Route path="/" element={<Client />}>
            <Route index element={<HomePage />} />
            {/*  <Route path="product">
              <Route index element={<ListProduct />} />
              <Route path="add" element={<AddProduct />} />
            </Route>
            <Route path="users">
              <Route index element={<ListUser />} />
            </Route> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
