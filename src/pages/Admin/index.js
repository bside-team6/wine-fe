import { Route, Routes } from 'react-router-dom';
import AdminDetail from './AdminDetail';
import AdminList from './AdminList';
import AdminRegister from './AdminRegister';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Admin() {
  return (
    <Routes>
      <Route index element={<AdminList />} />
      <Route path="detail/:id" element={<AdminDetail />} />
      <Route path="register" element={<AdminRegister />} />
    </Routes>
  );
}

export default Admin;
