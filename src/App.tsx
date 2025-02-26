import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./components/pages/AuthPage";
import Dashboard from "./components/pages/Dashboard";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} >
          <Route path="/dashboard" element={<Dashboard />} />
          {/* TODO:: Create 404 */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>);
}

export default App;