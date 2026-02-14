import { LandingPage } from "@/pages/public/landing-page";
import { NotFoundPage } from "@/pages/not-found";
import { Route, Routes } from "react-router-dom";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />

      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}