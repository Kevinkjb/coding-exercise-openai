import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import CommunityPage from './pages/CommunityPage';

function App() {
  return (
      <>
        <BrowserRouter>
        <Header/>
          <div className="App">
              <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/community' element={<CommunityPage/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </>
  );
}

export default App;
