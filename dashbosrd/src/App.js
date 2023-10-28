import './App.css';
import {Routes, Route} from 'react-router-dom'
import MainHome from './pages/MainHome'
import Home from './pages/Home'
import Women from './pages/Women'
import Men from './pages/Men'
import Kids from './pages/Kids'
import Accessories from './pages/Accessories'
import Beauty from './pages/Beauty'
import NewIn from './pages/NewIn'
import Data from './pages/Data'
import Register from './pages/Register'
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainHome/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/beauty' element={<Beauty/>}/>
        <Route path='/newIn' element={<NewIn/>}/>
        <Route path='/accessories' element={<Accessories/>}/>
        {/* <Route path='/' element={<Home/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
