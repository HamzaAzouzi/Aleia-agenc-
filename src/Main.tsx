import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Settings from "./pages/Settings";
const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/setting" element={<Settings />} /> */}
    </Routes>
  );
};
export default Main;
