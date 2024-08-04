
import Navbar from './Common/Navbar';
import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className=" max-w-full min-h-screen bg-white flex flex-col font-inter overflow-x-hidden">

    <Navbar/>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
