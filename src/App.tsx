import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import BarCharts from "./pages/charts/BarCharts";
import PiCharts from "./pages/charts/PiCharts";
import LineCharts from "./pages/charts/LineCharts";
import Coupon from "./pages/apps/Coupon";
import Stopwatch from "./pages/apps/Stopwatch";
import Toss from "./pages/apps/Toss";


// imports
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Product = lazy(() => import("./pages/Product"));
const Customer = lazy(() => import("./pages/Customer"));
const Transaction = lazy(() => import("./pages/Transaction"));
const NewProduct = lazy(() => import("./pages/magement/NewProduct"));
const ProductManagement = lazy(
  () => import("./pages/magement/ProductManagement")
);
const TransactionManagement = lazy(
  () => import("./pages/magement/TransactionManagement")
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Product />} />
          <Route path="/admin/customer" element={<Customer />} />
          <Route path="/admin/transaction" element={<Transaction />} />

          {/* charts  */}

          <Route path="/admin/chart/bar" element={<BarCharts/>}/>
          <Route path="/admin/chart/pie" element={<PiCharts/>}/>
          <Route path="/admin/chart/line" element={<LineCharts/>}/>

          {/* Apps  */}
          <Route path="/admin/app/stopwatch" element={< Stopwatch/>} />
          <Route path="/admin/app/coupon" element={< Coupon/>} />
          <Route path="/admin/app/toss" element={< Toss/>} />

          {/* management  */}

          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
