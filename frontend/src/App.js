import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import JobsList from "./pages/JobsList/JobsList";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import JobDetails from "./pages/JobDetails/JobDetails";
import CandidateProfile from "./pages/CandidateProfile/CandidateProfile";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import CompanyDashboard from "./pages/CompanyDashboard/CompanyDashboard";
import { AuthProvider } from "./context/AuthContext";

function AppContent() {
  const location = useLocation();
  const hideHeaderFooter = ["/signin", "/signup"].includes(location.pathname);

  return (
    <div>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsList />} />
        <Route path="/job/details" element={<JobDetails />} />
        <Route path="/candidate/profile" element={<CandidateProfile />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/company/dashboard" element={<CompanyDashboard />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
