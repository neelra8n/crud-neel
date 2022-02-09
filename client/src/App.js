import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';


import './App.css';
import AddUsers from './components/AddUser';
import AllUsers from './components/AllUsers';
import Crud from './components/Crud';
import EditUser from './components/EditUser';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Crud />} />
          <Route path='/all' element={<AllUsers />} />
          <Route path='/add' element={<AddUsers />} />
          <Route path='/edit/:id' element={<EditUser />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<Navigate replace to='/404' />}/>
        </Routes>
    </div>
  );
}


export default App;
