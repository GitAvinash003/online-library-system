import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../redux/booksSlice'
import { useNavigate } from 'react-router-dom'

export default function AddBook() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: ''
  })
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (Object.values(form).some((v) => !v)) {
      setError('All fields are required')
      return
    }

    dispatch(addBook({ ...form, id: Date.now().toString() }))
    navigate('/browse')
  }

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Book</h1>
      {error && <p className="text-red-600 mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" className="border w-full p-2 rounded" placeholder="Title" onChange={handleChange} />
        <input name="author" className="border w-full p-2 rounded" placeholder="Author" onChange={handleChange} />
        <input name="category" className="border w-full p-2 rounded" placeholder="Category" onChange={handleChange} />
        <textarea name="description" className="border w-full p-2 rounded" placeholder="Description" onChange={handleChange}></textarea>
        <input name="rating" className="border w-full p-2 rounded" placeholder="Rating (0–5)" type="number" min="0" max="5" step="0.1" onChange={handleChange} />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Book</button>
      </form>
    </div>
  )
}
