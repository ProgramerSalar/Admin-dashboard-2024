import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Suspense, lazy} from 'react'
import Loader from "./components/Loader"
import NewProduct from "./pages/magement/NewProduct"
import ProductManagement from "./pages/magement/ProductManagement"
import TransactionManagement from "./pages/magement/TransactionManagement"




// imports 
const Dashboard = lazy(() => import("./pages/Dashboard"))
const Product = lazy(() => import("./pages/Product"))
const Customer = lazy(() => import("./pages/Customer"))
const Transaction = lazy(() => import("./pages/Transaction"))







const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />}  />
        <Route path="/admin/product" element={<Product />}  />
        <Route path="/admin/customer" element={<Customer />}  />
        <Route path="/admin/transaction" element={<Transaction />}  />



        {/* charts  */}


        {/* Apps  */}


        {/* management  */}

        
          <Route path="/admin/product/new" element={<NewProduct/>} />
          <Route path="/admin/product/:id" element={<ProductManagement/>} />
          <Route path="/admin/transaction/:id" element={<TransactionManagement/>} />
  


        
      </Routes>
      </Suspense>
     
    
    </Router>
  )
}

export default App
