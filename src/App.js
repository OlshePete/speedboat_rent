import { Route, Routes } from 'react-router-dom';
import './App.css';
import AgentPage from './components/AgentPage/AgentPage';
import LoginPage from './components/LoginPage/LoginPage';
import MainOutlet from './components/MainOutlet/MainOutlet';
import NewOrderPage from './components/NewOrderPage/NewOrderPage';

function App() {
  return (
    
   <Routes>
      <Route exac path="/" element={<MainOutlet/>}>
        <Route exac index element={<LoginPage/>}/>
        <Route exac path="/login" element={<LoginPage/>}/>
        <Route exac path="/agent" element={<AgentPage/>}/>
        <Route exac path="/new-order" element={<NewOrderPage/>}/>

      </Route>
       {/* <Route path="/login" component={<LoginPage/>} /> */}
    </Routes>
  );
}

export default App;
