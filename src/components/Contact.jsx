import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    
    const formData = new FormData(event.target);

    // Paste your Web3Forms Access Key right here!
    formData.append("access_key", "bbd149f8-a9d3-4cdd-ba23-c87dbacc09b4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset(); // This clears the form boxes after sending
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-3xl sm:text-5xl font-bold mb-2 text-center text-gray-800">
        Contact <span className="text-blue-600 drop-shadow-md">Us</span>
      </h1>
      <p className="text-center text-gray-600 max-w-80 mx-auto mb-8">
        Ready to Make a Move? Let's Build Your Future Together
      </p>

      {/* Added the onSubmit function to the form */}
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left md:pr-2">
            <label className="mb-2 block font-medium">Your Name</label>
            <input 
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none focus:border-blue-600 transition-colors" 
              name="name" 
              type="text" 
              placeholder="John Doe" 
              required 
            />
          </div>

          <div className="w-full md:w-1/2 text-left md:pl-2 mt-4 md:mt-0">
            <label className="mb-2 block font-medium">Your Email</label>
            <input 
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none focus:border-blue-600 transition-colors" 
              name="email" 
              type="email" 
              placeholder="john@example.com" 
              required 
            />
          </div>
        </div>

        <div className="my-6 text-left">
          <label className="mb-2 block font-medium">Message</label>
          <textarea 
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none focus:outline-none focus:border-blue-600 transition-colors"
            name="message" 
            placeholder="Tell us about the property you are looking for..." 
            required
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="bg-blue-600 text-white py-3 px-10 rounded shadow-md hover:bg-blue-700 transition-colors font-medium mb-4"
        >
          Send Message
        </button>

        {/* Displays the "Sending..." or "Success!" message under the button */}
        <div className="text-center text-gray-700 font-medium">
          {result}
        </div>
      </form>
    </div>
  );
};

export default Contact;