import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './components/UserContext';
import HomePage from './pages/HomePage';
import AppNav from './components/AppNav';
import SideBar from './components/SideBar';
import DoggoPage from './pages/DoggoPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AnimalPage from './pages/AnimalPage';

function App() {
  return (
    <UserProvider value="">
      <div className="App">
        <HashRouter>
        <AppNav/>
        <SideBar/>
         <div className='main'>
            <Routes>
              <Route path="/" element={ <HomePage/> }/>
              <Route path="/animals/:species/:limit/:postal_code" element={ <AnimalPage/> }/>
              <Route path="/doggo/:doggo_id" element={ <DoggoPage/> }/>
              <Route path="/login" element={ <LoginPage/> }/>
              <Route path="/signup" element={ <SignupPage/> }/>
            </Routes>
          </div>
        </HashRouter>
      </div>
    </UserProvider>
  );
}

export default App;
