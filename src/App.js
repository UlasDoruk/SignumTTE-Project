import './App.css';
import { Route,Routes } from 'react-router-dom';
import { ShareToken } from "./components/Context/TokenContext";
import { ShowLoading } from './components/Context/LoadingContext';
import Releases from "./components/Content/Releases/Releases"
import PlayList from './components/Content/PlayList/PlayList';
import Categories from './components/Content/Categories/Categories';
import LoginPage from './components/Content/Login/LoginPage';


function App() {
  return (
    <div className="App">
      <ShareToken>
        <ShowLoading>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/Releases" element={<Releases />}></Route>
            <Route path="/Playlist" element={<PlayList />}></Route>
            <Route path="/Categories" element={<Categories />}></Route>
          </Routes>
        </ShowLoading>
      </ShareToken>
    </div>
  );
}

export default App;
