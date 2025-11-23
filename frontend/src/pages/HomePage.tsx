import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

interface Job {
  id: number
  title: string
  company: string
  location: string
  salary: string
  type: string
  description: string
  created_at: string
}

export default function HomePage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/jobs/')
      .then(res => {
        setJobs(res.data)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="loading">Loading...</div>

  return (
    <div className="container">
      <h1>All Jobs ({jobs.length})</h1>
      {jobs.length === 0 ? (
        <p>No jobs yet. <Link to="/create">Post the first one!</Link></p>
      ) : (
        <div className="job-list">
          {jobs.map(job => (
            <Link to={`/job/${job.id}`} key={job.id} className="job-card">
              <h2>{job.title}</h2>
              <p className="company">{job.company} • {job.location}</p>
              <p className="salary">{job.salary || 'Competitive salary'}</p>
              <div style={{display: 'flex', gap: '0.5rem', marginTop: '0.5rem'}}>
                <span className="type">{job.type}</span>
                <span className="type" style={{background: '#e8f5e8', color: '#2e8b57'}}>
                  {new Date(job.created_at).toLocaleDateString()}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}