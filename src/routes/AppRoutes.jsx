import { BrowserRouter ,  Route , Routes } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/HomePage/Home';
import Profile from '../pages/Profile';

const AppRoutes = () => {
  return (
    
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/profile" element={<Profile/>} />
      </Routes>
    
  );
};

export default AppRoutes;
