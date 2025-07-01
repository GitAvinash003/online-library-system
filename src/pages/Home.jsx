import { Link } from 'react-router-dom'
import { books } from '../data/books'

export default function Home() {
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography', 'Mystery']
  const popularBooks = books.slice(0, 3) // Show top 3 popular books

  return (
    <div className="p-6 space-y-10">
      {/* Hero Section */}
      <div className="bg-blue-100 p-6 rounded shadow text-center">
        <h1 className="text-3xl font-bold text-blue-800">Welcome to Online Library 📚</h1>
        <p className="text-gray-700 mt-2">Browse thousands of books across all categories.</p>
      </div>

      {/* Categories Grid */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Book Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/books/${cat}`}
              className="bg-white border hover:bg-blue-50 p-3 rounded shadow text-center text-blue-600 font-medium"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Books */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Popular Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {popularBooks.map((book) => (
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
                <h3 className="text-lg font-semibold text-blue-800">{book.title}</h3>
                <p className="text-sm text-gray-600">by {book.author}</p>
                <Link
                  to={`/book/${book.id}`}
                  className="inline-block mt-2 text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
