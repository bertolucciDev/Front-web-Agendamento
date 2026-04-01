import { LandingPage } from "@/pages/public/landing-page"
import { NotFoundPage } from "@/pages/not-found"
import { Route, Routes } from "react-router-dom"
import { DashboardPage } from "@/pages/private/dashboard"
import { LoginPage } from "@/pages/private/auth/login"
import { RegisterPage } from "@/pages/private/auth/register"

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}
