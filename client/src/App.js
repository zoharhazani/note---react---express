import './App.css';
import { Route, Routes } from 'react-router-dom';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Login from 'pages/Login';

function App() {
  return <Routes>
    <Route path='/Edit' element={<Edit />} />
    <Route path='/' element={<Home />} />
    <Route path='/Login' element={<Login />} />
  </Routes>
};

export default App;

