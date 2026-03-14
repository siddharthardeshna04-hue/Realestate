import React, { useState } from "react";

const Signup = ({ setShowSignup }) => {
  const [state, setState] = useState("Sign Up");
  
  // States to hold the user's input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // State for showing success/error messages
  const [message, setMessage] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (state === "Sign Up") {
      // 1. SIGN UP LOGIC
      // Save the user data to localStorage (Simulating a database)
      const userData = { name, email, password };
      localStorage.setItem("userAccount", JSON.stringify(userData));
      
      setMessage("Account created successfully! Please log in.");
      // Automatically switch them to the Login screen
      setTimeout(() => {
        setState("Login");
        setMessage("");
        setPassword(""); // Clear password for security
      }, 1500);

    } else {
      // 2. LOGIN LOGIC
      // Retrieve the saved data from localStorage
      const savedUser = JSON.parse(localStorage.getItem("userAccount"));

      if (savedUser && savedUser.email === email && savedUser.password === password) {
        setMessage(`Welcome back, ${savedUser.name}!`);
        // Close the modal after a successful login
        setTimeout(() => {
          setShowSignup(false);
        }, 1500);
      } else {
        setMessage("Invalid email or password. Try again.");
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-2xl relative">
        
        {/* Close Button */}
        <button 
          onClick={() => setShowSignup(false)}
          className="absolute top-4 right-5 text-gray-500 hover:text-gray-800 text-3xl font-bold cursor-pointer transition-colors"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {state}
        </h2>

        {/* We added the onSubmit handler to the form */}
        <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
          
          {state === "Sign Up" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text" 
                placeholder="John Doe" 
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-600 transition-colors" 
                required 
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email" 
              placeholder="john@example.com" 
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-600 transition-colors" 
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password" 
              placeholder="••••••••" 
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-600 transition-colors" 
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-medium py-2 rounded mt-2 hover:bg-blue-700 transition-colors"
          >
            {state === "Sign Up" ? "Create Account" : "Login"}
          </button>

          {/* This displays your success or error messages! */}
          {message && (
            <p className={`text-center text-sm font-medium mt-2 ${message.includes("success") || message.includes("Welcome") ? "text-green-600" : "text-red-600"}`}>
              {message}
            </p>
          )}
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          {state === "Sign Up" ? "Already have an account? " : "Don't have an account? "}
          <span 
            className="text-blue-600 cursor-pointer font-medium hover:underline"
            onClick={() => {
              setState(state === "Sign Up" ? "Login" : "Sign Up");
              setMessage(""); // Clear message when swapping modes
            }}
          >
            {state === "Sign Up" ? "Login here" : "Sign up here"}
          </span>
        </p>

      </div>
    </div>
  );
};

export default Signup;