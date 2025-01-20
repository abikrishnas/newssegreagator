import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Google } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email signup
    console.log("Email signup:", name, email, password);
  };

  const handleGoogleSignup = () => {
    // TODO: Implement Google signup
    console.log("Google signup clicked");
  };

  return (
    <div className="w-full max-w-md p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
      <h2 className="text-3xl font-serif mb-6 text-center">Create your account</h2>
      <p className="text-center text-gray-600 mb-8">Enter your details below to create your account</p>
      
      <form onSubmit={handleEmailSignup} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full"
          />
        </div>
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
          Create account
        </Button>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <Button
          type="button"
          variant="outline"
          onClick={handleGoogleSignup}
          className="w-full mt-4 flex items-center justify-center gap-2"
        >
          <Google className="w-5 h-5" />
          Sign up with Google
        </Button>
      </div>

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <button
          onClick={() => navigate("/login")}
          className="text-primary hover:underline"
        >
          Sign in
        </button>
      </p>
    </div>
  );
};