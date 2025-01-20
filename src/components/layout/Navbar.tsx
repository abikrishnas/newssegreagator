import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="bg-primary/95 backdrop-blur-sm fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-serif text-xl">
              News Segregator
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:text-secondary px-3 py-2">
                Home
              </Link>
              <Link to="/category-1" className="text-white hover:text-secondary px-3 py-2">
                Category 1
              </Link>
              <Link to="/category-2" className="text-white hover:text-secondary px-3 py-2">
                Category 2
              </Link>
              <Link to="/category-3" className="text-white hover:text-secondary px-3 py-2">
                Category 3
              </Link>
              <Link to="/recommended" className="text-white hover:text-secondary px-3 py-2">
                Recommended
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <Link to="/login">
              <Button variant="ghost" className="text-white hover:text-secondary">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};