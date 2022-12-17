import './App.css';
import { Route,Routes } from 'react-router-dom';
import Realeases from "./components/Releases/Releases"
import PlayList from './components/PlayList/PlayList';
import Categories from './components/Categories/Categories';
import Navbar from './components/NavBar/NavBar';
import LoginBtn from './components/LoginBtn/LoginBtn';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LoginBtn/>
      <Routes>
        <Route path="" element={<Realeases />}></Route>
        <Route path="/Playlist" element={<PlayList />}></Route>
        <Route path="/Categories" element={<Categories />}></Route>
      </Routes>
    </div>
  );
}

export default App;
