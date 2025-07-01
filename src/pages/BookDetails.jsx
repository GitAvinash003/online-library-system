import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ArrowLeft } from 'lucide-react'

export default function BookDetails() {
  const { id } = useParams()
  const book = useSelector((state) => state.books.find((b) => b.id === id))
  const navigate = useNavigate()

  if (!book) return <p className="p-8">Book not found.</p>

  return (
   <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow space-y-4">
  <img src={book.cover} alt={book.title} className="w-full h-80 object-cover rounded" />
  <h1 className="text-3xl font-bold text-blue-800">{book.title}</h1>
  <p className="text-lg text-gray-700">Author: {book.author}</p>
  <p className="text-sm text-gray-600">Rating: {book.rating} ⭐</p>
  <p className="mt-2 text-gray-800">{book.description}</p>
  <button
    onClick={() => navigate('/browse')}
    className="mt-4 text-blue-600 hover:underline flex items-center gap-1"
  >
    <ArrowLeft size={18} /> Back to Browse
  </button>
</div>

  )
}
