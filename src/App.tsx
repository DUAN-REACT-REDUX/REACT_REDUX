import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListProduct from './component/admin/ListProduct/ListProduct'

import Dashbord from './component/admin/Dashbord'
import AdminLayout from './layout/admin'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminLayout />} >
            <Route index element={<Dashbord />} />
            <Route path='product' >
              <Route index element={<ListProduct />} />
            </Route>
          </Route>

        </Routes>
      </Router>
    </div >
  )
}

export default App
