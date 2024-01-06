import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default Routers;
