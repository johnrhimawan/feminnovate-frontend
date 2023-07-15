import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import JobListingPage from './pages/JobListingPage.jsx'
import './index.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import JobDetailsPage from './pages/JobDetailsPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/jobs" element={<JobListingPage />} />
        <Route path="/jobs/:id" element={<JobDetailsPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
