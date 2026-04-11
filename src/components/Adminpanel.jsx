import React, { useState, useEffect } from "react";

const AdminPanel = () => {
  // 1. State to store the messages we get from the database
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. useEffect runs automatically as soon as this page loads
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // This is exactly the link you just tested in your browser!
        const response = await fetch("http://localhost:5000/api/messages");
        const data = await response.json();
        
        // Save the data into our state
        setMessages(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching messages:", error);
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard - Messages</h1>

        {loading ? (
          <p className="text-xl text-gray-600">Loading messages...</p>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Tailwind CSS Table */}
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="py-4 px-6 font-semibold text-sm uppercase">Date</th>
                  <th className="py-4 px-6 font-semibold text-sm uppercase">Name</th>
                  <th className="py-4 px-6 font-semibold text-sm uppercase">Email</th>
                  <th className="py-4 px-6 font-semibold text-sm uppercase">Inquiry</th>
                </tr>
              </thead>
              <tbody>
                {/* Loop through our messages and create a table row for each one */}
                {messages.map((msg) => (
                  <tr key={msg._id} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-6 text-gray-600 whitespace-nowrap">
                      {new Date(msg.date).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-6 font-medium text-gray-900">{msg.name}</td>
                    <td className="py-4 px-6 text-blue-600">{msg.email}</td>
                    <td className="py-4 px-6 text-gray-700">{msg.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* If the database is empty */}
            {messages.length === 0 && (
              <div className="p-6 text-center text-gray-500">
                No messages found yet.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;