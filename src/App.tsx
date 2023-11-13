import { Routes, Route } from "react-router-dom";

import LandingPage from "./layouts/landing";
import ProductDetail from "./layouts/productDetail";
import Carts from "./layouts/cart";
import AddProduct from "./features/admin/addProduct";
import IncomeTransaction from "./features/admin/income";
import AddTopings from "./features/admin/addToping";
import MyProfile from "./layouts/profile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/productDetail/:id" element={<ProductDetail />}></Route>
      <Route path="/myCart" element={<Carts />}></Route>
      <Route path="/addProduct" element={<AddProduct />}></Route>
      <Route path="/addToping" element={<AddTopings />}></Route>
      <Route path="/income_transaction" element={<IncomeTransaction />}></Route>
      <Route path="/profile" element={<MyProfile />}></Route>


      
    </Routes>
  );
}
