import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './components/UserContext';
import HomePage from './pages/HomePage';
import AppNav from './components/AppNav';
import DoggoPage from './pages/DoggoPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <UserProvider value="">
      <div className="App">
        <HashRouter>
          <AppNav/>
          <Routes>
            <Route path="/" element={ <HomePage/> }/>
            <Route path="/doggo" element={ <DoggoPage/> }/>
            <Route path="/login" element={ <LoginPage/> }/>
            <Route path="/signup" element={ <SignupPage/> }/>
          </Routes>
        </HashRouter>
      </div>
    </UserProvider>
  );
}

export default App;
