import { Link, useLocation } from 'react-router-dom'
import { Home, BookOpen, PlusSquare } from 'lucide-react'

export default function Navbar() {
  const { pathname } = useLocation()

  const linkClass = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded hover:bg-blue-700 ${
      pathname === path ? 'bg-blue-800' : ''
    }`

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-center gap-4">
      <Link to="/" className={linkClass('/')}>
        <Home size={18} /> Home
      </Link>
      <Link to="/browse" className={linkClass('/browse')}>
        <BookOpen size={18} /> Browse
      </Link>
      <Link to="/add" className={linkClass('/add')}>
        <PlusSquare size={18} /> Add Book
      </Link>
    </nav>
  )
}
