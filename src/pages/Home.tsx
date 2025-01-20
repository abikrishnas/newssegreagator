import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
            Quality news, where you want it,<br />when you want it.
          </h1>
          <p className="text-lg text-white/80 italic">
            "A reader lives a thousand lives before he dies. The man who never reads lives only one."
            <br />
            – George R.R. Martin
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search your interest"
              className="w-full pl-10 py-6 text-lg bg-white/90 backdrop-blur-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Placeholder category cards */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-serif mb-2">Category {i}</h3>
              <p className="text-gray-600">
                Explore the latest news and updates in this category.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;