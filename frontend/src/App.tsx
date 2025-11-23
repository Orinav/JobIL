import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CreateJobPage from './pages/CreateJobPage'
import JobDetailPage from './pages/JobDetailsPage'  // ← make sure this file exists and is spelled correctly!

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateJobPage />} />
        <Route path="/job/:id" element={<JobDetailPage />} />
      </Routes>
    </>
  )
}

export default App