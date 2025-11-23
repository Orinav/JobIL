import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function CreateJobPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    title: '', company: '', location: 'Remote', salary: '', type: 'Full-time', description: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await axios.post('http://127.0.0.1:8000/api/jobs/', form)
      navigate('/')
    } catch (err) {
      alert('Error creating job')
    }
  }

  return (
    <div className="container">
      <h1>Post a New Job</h1>
      <form onSubmit={handleSubmit} style={{maxWidth: '600px', margin: '0 auto'}}>
        <input placeholder="Job Title" required value={form.title}
          onChange={e => setForm({...form, title: e.target.value})} />
        <input placeholder="Company" required value={form.company}
          onChange={e => setForm({...form, company: e.target.value})} />
        <input placeholder="Location" value={form.location}
          onChange={e => setForm({...form, location: e.target.value})} />
        <input placeholder="Salary (e.g. $120k–$180k)" value={form.salary}
          onChange={e => setForm({...form, salary: e.target.value})} />
        <select value={form.type} onChange={e => setForm({...form, type: e.target.value})}>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Contract</option>
          <option>Internship</option>
        </select>
        <textarea placeholder="Job Description..." required rows={10} value={form.description}
          onChange={e => setForm({...form, description: e.target.value})} />
        <button type="submit" className="apply-btn" style={{width: '100%'}}>
          Publish Job
        </button>
      </form>
    </div>
  )
}