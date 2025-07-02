import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AllAdsPage from "../pages/AllAdsPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ads" element={<AllAdsPage />} />

      {/*       <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
