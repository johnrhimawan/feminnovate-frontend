import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./pages/LandingPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import JobListingPage from "./pages/JobListingPage.jsx";
import PublicRoute from "./routes/PublicRoute.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobDetailsPage from "./pages/JobDetailsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import WorkshopListingPage from "./pages/WorkshopListingPage.jsx";
import WorkshopDetailsPage from "./pages/WorkshopDetailsPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <LandingPage />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            // <ProtectedRoute>
            <DashboardPage />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/jobs"
          element={
            <ProtectedRoute>
              <JobListingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jobs/:id"
          element={
            <ProtectedRoute>
              <JobDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/events"
          element={
            <ProtectedRoute>
              <WorkshopListingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/events/:id"
          element={
            <ProtectedRoute>
              <WorkshopDetailsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
