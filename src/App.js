import './App.css';
import { Route,Routes } from 'react-router-dom';
import { ShareToken } from "./components/Context/TokenContext";
import Releases from "./components/Content/Releases/Releases"
import PlayList from './components/Content/PlayList/PlayList';
import Categories from './components/Content/Categories/Categories';
import Login from './components/Login/Login';


function App() {
  return (
    <div className="App">
      <ShareToken>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Releases" element={<Releases />}></Route>
          <Route path="/Playlist" element={<PlayList />}></Route>
          <Route path="/Categories" element={<Categories />}></Route>
        </Routes>
      </ShareToken>
    </div>
  );
}

export default App;
