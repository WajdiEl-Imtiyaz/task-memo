import React, { useState } from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const Accounts = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    router.push("/homepage");
  };

  return (
    <div>
      <p
        className="text-2xl md:transform md:-translate-y-20 cursor-pointer"
        onClick={() => setShowPopup(true)}
      >
        Start Tasks
      </p>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-10 rounded w-full max-w-xs sm:max-w-md md:max-w-lg">
            <button
              className="flex items-center justify-end mb-4"
              onClick={() => setShowPopup(false)}
            >
              <X />
            </button>
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="py-2">Login</h2>
              <label className="block">
                Email:
                <input
                  type="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="mt-1 block w-full bg-gray-200 rounded-sm"
                />
              </label>
              <label className="block">
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 block w-full bg-gray-200 rounded-sm"
                />
              </label>
              <button
                className="rounded-sm bg-gray-200 bg-opacity-50 w-full py-2 hover:bg-opacity-100 transition-opacity duration-200"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accounts;
