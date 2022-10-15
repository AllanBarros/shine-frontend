import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/header';
import EventCreation from './pages/event_creation';
import EventFinder from './pages/event_finder';
import SignUp from './pages/sign_up';
import Login from './pages/login';


function App() {
  return (
    <div className="App">
    <Header>
      <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cadastro" element={<SignUp/>}/>
          <Route path="/criar-evento" element={<EventCreation />}/>
          <Route path="/buscar-evento" element={<EventFinder />}/>
      </Routes>
    </Header>
    </div>
  );
}

export default App;
