import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {lazy} from 'react'




// imports 
const Dashboard = lazy(() => import("./pages/Dashboard"))







const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />}  />
      </Routes>
    
    </Router>
  )
}

export default App
