import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export default function BrowseBooks() {
  const { category } = useParams()
  const allBooks = useSelector((state) => state.books)
  const [search, setSearch] = useState('')

  const filteredBooks = allBooks.filter(
    (book) =>
      (!category || book.category === category) &&
      (book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{category ? category : 'All'} Books</h1>

      <input
        type="text"
        placeholder="Search by title or author..."
        className="border w-full p-3 rounded mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredBooks.length === 0 ? (
        <p className="text-gray-500">No books found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white border rounded-lg shadow hover:shadow-md transition"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-blue-800">{book.title}</h2>
                <p className="text-gray-600 text-sm mb-1">by {book.author}</p>
                <p className="text-gray-500 text-xs mb-2">Category: {book.category}</p>
                <Link
                  to={`/book/${book.id}`}
                  className="inline-block bg-blue-600 text-white px-4 py-1 rounded text-sm hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
