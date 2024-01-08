import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Suspense, lazy} from 'react'
import Loader from "./components/Loader"




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
        <Route path="/admin/dashboard/product" element={<Product />}  />
        <Route path="/admin/dashboard/customer" element={<Customer />}  />
        <Route path="/admin/dashboard/transaction" element={<Transaction />}  />



        {/* charts  */}


        {/* Apps  */}
        
      </Routes>
      </Suspense>
     
    
    </Router>
  )
}

export default App
