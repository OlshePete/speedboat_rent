import { Route, Routes } from "react-router-dom";
import "./App.css";
import AgentMoney from "./components/AgentMoneyPage/AgentMoney";
import AgentPage from "./components/AgentPage/AgentPage";
import CheckPage from "./components/CheckPage/CheckPage";
import LoginPage from "./components/LoginPage/LoginPage";
import MainOutlet from "./components/MainOutlet/MainOutlet";
import NewOrderPage from "./components/NewOrderPage/NewOrderPage";
import PersonalPage from "./components/PersonalPage/PersonalPage";
import PrivateRoute from "./hoc/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route exac path="/" element={<MainOutlet />}>
        <Route exac index element={<LoginPage />} />
        <Route exac path="/login" element={<LoginPage />} />
        <Route
        path="/agent"
        element={
          <PrivateRoute>
            <AgentPage />
          </PrivateRoute>
        }
      />
        {/* <Route exac path="/agent" element={<AgentPage />} /> */}
        <Route exac path="/new-order" element={<NewOrderPage />} />
        <Route exac path="/personal-account" element={<PersonalPage />} />
        <Route exac path="/check-customer" element={<CheckPage />} />
        <Route exac path="/agent-money" element={<AgentMoney />} />
      </Route>
      {/* <Route path="/login" component={<LoginPage/>} /> */}
    </Routes>
  );
}

export default App;
