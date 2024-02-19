import { Route, Routes } from "react-router-dom";
import AuthScreen from "./components/scenes/AuthScreen";
import DashboardScreen from "./components/scenes/DashboardScreen";
import TimeupScreen from "./components/scenes/TimeupScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<AuthScreen />} />
        <Route path="/auth" exact element={<AuthScreen />} />
        <Route path="/vote" exact element={<DashboardScreen />} />
        <Route path="/timeup" exact element={<TimeupScreen />} />
      </Routes>
    </>
  );
}

export default App;
