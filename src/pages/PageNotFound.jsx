import { Link } from 'react-router-dom'
import { AlertTriangle } from 'lucide-react'

export default function PageNotFound() {
  return (
    <div className="p-8 text-center">
      <div className="flex justify-center mb-4">
        <AlertTriangle size={48} className="text-red-500" />
      </div>
      <h1 className="text-3xl font-bold text-red-700">404 - Page Not Found</h1>
      <p className="mt-4 text-blue-600">
        <Link to="/" className="underline">Back to Home</Link>
      </p>
    </div>
  )
}
