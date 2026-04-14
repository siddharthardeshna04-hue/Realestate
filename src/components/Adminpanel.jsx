import React, { useState, useEffect } from "react";

const AdminPanel = () => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]); // 1. New state to hold users
  const [loading, setLoading] = useState(true);

  // 2. State to control which tab we are looking at
  const [activeTab, setActiveTab] = useState("messages");

  useEffect(() => {
    // 3. We now fetch BOTH messages and users when the page loads
    const fetchData = async () => {
      try {
        const msgResponse = await fetch("http://localhost:5000/api/messages");
        const msgData = await msgResponse.json();
        setMessages(msgData);

        const userResponse = await fetch("http://localhost:5000/api/users");
        const userData = await userResponse.json();
        setUsers(userData);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>

          {/* TABS FOR SWITCHING VIEWS */}
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab("messages")}
              className={`px-4 py-2 rounded font-medium transition ${activeTab === "messages" ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-200"}`}
            >
              Inquiries ({messages.length})
            </button>
            <button
              onClick={() => setActiveTab("users")}
              className={`px-4 py-2 rounded font-medium transition ${activeTab === "users" ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-200"}`}
            >
              Registered Users ({users.length})
            </button>
          </div>
        </div>

        {loading ? (
          <p className="text-xl text-gray-600">Loading dashboard data...</p>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* --- MESSAGES TABLE --- */}
            {activeTab === "messages" && (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="py-4 px-6 font-semibold text-sm uppercase">
                      Date
                    </th>
                    <th className="py-4 px-6 font-semibold text-sm uppercase">
                      Name
                    </th>
                    <th className="py-4 px-6 font-semibold text-sm uppercase">
                      Email
                    </th>
                    <th className="py-4 px-6 font-semibold text-sm uppercase">
                      Inquiry
                    </th>
                    <th className="py-4 px-6 font-semibold text-sm uppercase">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((msg) => (
                    <tr key={msg._id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-6 text-gray-600 whitespace-nowrap">
                        {new Date(msg.date).toLocaleDateString()}
                      </td>
                      <td className="py-4 px-6 font-medium text-gray-900">
                        {msg.name}
                      </td>
                      <td className="py-4 px-6 text-blue-600">{msg.email}</td>
                      {/* NEW STATUS BADGE */}
                      <td className="py-4 px-6">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            msg.userType === "Registered"
                              ? "bg-green-100 text-green-700 border border-green-300"
                              : "bg-gray-100 text-gray-600 border border-gray-300"
                          }`}
                        >
                          {msg.userType || "Guest"}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-gray-700">{msg.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {/* --- USERS TABLE --- */}
            {activeTab === "users" && (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="py-4 px-6 font-semibold text-sm uppercase">
                      User ID
                    </th>
                    <th className="py-4 px-6 font-semibold text-sm uppercase">
                      Name
                    </th>
                    <th className="py-4 px-6 font-semibold text-sm uppercase">
                      Email Account
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-6 text-gray-400 text-sm font-mono">
                        {user._id}
                      </td>
                      <td className="py-4 px-6 font-medium text-gray-900">
                        {user.name}
                      </td>
                      <td className="py-4 px-6 text-blue-600">{user.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {/* Empty States */}
            {activeTab === "messages" && messages.length === 0 && (
              <div className="p-6 text-center text-gray-500">
                No messages found.
              </div>
            )}
            {activeTab === "users" && users.length === 0 && (
              <div className="p-6 text-center text-gray-500">
                No users registered yet.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
