import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F1EC]">
      <div className="text-center px-6">
        <div className="text-8xl font-bold text-[#9BACD8] mb-4">404</div>
        <h1 className="text-2xl font-bold text-[#1a2332] mb-3">Page Not Found</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F98513] text-white font-semibold rounded-lg hover:bg-[#e0760f] transition-all shadow-md text-sm"
          >
            <Home size={16} />
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1a2332] text-white font-semibold rounded-lg hover:bg-[#2a3a52] transition-all text-sm"
          >
            <ArrowLeft size={16} />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
