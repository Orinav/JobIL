import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <Link to="/" className="logo">JobBoard</Link>
      <div>
        <Link
          to="/"
          className={location.pathname === '/' ? 'active' : ''}
        >
          All Jobs
        </Link>
        <Link
          to="/create"
          className={location.pathname === '/create' ? 'active' : ''}
        >
          Post a Job
        </Link>
      </div>
    </nav>
  )
}