import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

export default function JobDetailPage() {
  const { id } = useParams()
  const [job, setJob] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/jobs/${id}/`)
      .then(res => {
        setJob(res.data)
        setLoading(false)
      })
  }, [id])

  if (loading) return <div className="loading">Loading job...</div>
  if (!job) return <div>Job not found</div>

  return (
    <div className="container">
      <Link to="/" style={{color: '#0066cc', marginBottom: '1rem', display: 'inline-block'}}>
        ← Back to jobs
      </Link>
      <div className="job-card" style={{padding: '2rem'}}>
        <h1>{job.title}</h1>
        <h2 style={{color: '#0066cc', margin: '0.5rem 0'}}>{job.company}</h2>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Salary:</strong> {job.salary || 'Not disclosed'}</p>
        <p><strong>Type:</strong> {job.type}</p>
        <hr style={{margin: '2rem 0'}}/>
        <div style={{lineHeight: '1.8', whiteSpace: 'pre-wrap'}}>
          {job.description}
        </div>
        <button className="apply-btn">
          Apply Now
        </button>
      </div>
    </div>
  )
}