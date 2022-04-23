import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppNav from './components/AppNav';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <AppNav/>
        <Routes>
          <Route path="" element={ <HomePage/> }/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
