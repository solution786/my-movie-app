import Navbar from './Components/Navbar';
import './App.css';
// import Banner from './Components/Banner';
import Movies from "./Components/Movies";
import Favourite from './Components/Favourite';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (

    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Movies />} />
        <Route path="favourites" element={<Favourite />} />
        
      </Routes>

    </div>


  );
}

export default App;




