import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="relative flex items-center justify-center py-16 overflow-hidden">
      
      {/* 🌿 Background blobs */}
      <div className="absolute w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30 -top-10 -left-10"></div>
      <div className="absolute w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-40 bottom-0 right-0"></div>

      {/* Main Card */}
      <div className="relative max-w-2xl w-full bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl p-10 text-center">
        
        {/* Illustration */}
        <div className="mb-6 flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6195/6195678.png"
            alt="error illustration"
            className="w-40 opacity-90"
          />
        </div>

        {/* 404 */}
        <h1 className="text-5xl font-bold text-[#244D3F] mb-2 tracking-tight">
          404
        </h1>

        {/* Message */}
        <p className="text-lg text-gray-700 mb-2">
          This connection seems lost
        </p>

        <p className="text-gray-500 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Dynamic error */}
        {error && (
          <p className="text-sm text-gray-400 mb-6">
            {error.statusText || error.message}
          </p>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          
          <Link
            to="/"
            className="bg-[#244D3F] btn hover:bg-green-800 text-white shadow-md hover:shadow-lg transition"
          >
            Back to Home
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="border btn border-gray-300 hover:bg-gray-100 text-gray-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;