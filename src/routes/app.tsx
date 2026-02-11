import { LandingPage } from "@/pages/public/landing-page";
import { Route, Routes } from "react-router-dom";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}