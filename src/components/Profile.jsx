import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userDetails, setUserDetails] = useState({});
  const navigate = useNavigate();

  const data = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.id;

    fetch(`https://dummyjson.com/users/${userId}`)
      .then((response) => response.json())
      .then((userData) => {
        // Save user details in local storage
        localStorage.setItem("userDetails", JSON.stringify(userData));

        setUserDetails(userData);

        if (!userData) {
          return <p>Something went wrong</p>;
        }
      });
  };

  useEffect(() => {
    data();
  }, []);

  const handleLogout = () => {
    // Clear user-related data from local storage
    localStorage.removeItem("user");
    localStorage.removeItem("userDetails");

    // Redirect to the login page
    navigate("/");
  };

  return (
    <>
      <div className="overflow-y-auto sm:p-0 pt-4 pr-4 pb-20 pl-4 bg-gray-800">
        <div className="flex justify-center items-end text-center min-h-screen sm:block">
          <div className="bg-gray-500 transition-opacity bg-opacity-75"></div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
          <div className="inline-block text-left bg-gray-900 rounded-lg overflow-hidden align-bottom transition-all transform shadow-2xl sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
            <div className="items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-14">
              <div className="grid grid-cols-1">
                <div className="mt-4 mr-auto mb-4 ml-auto bg-gray-900 max-w-lg">
                  <div className="flex flex-col items-center pt-6 pr-6 pb-6 pl-6">
                    <img
                      src={userDetails.image}
                      className="flex-shrink-0 object-cover object-center btn- flex w-18 h-18 mr-auto -mb-8 ml-auto rounded-full shadow-xl"
                    />
                    <p className="mt-8 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl">
                      {userDetails.username}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold leading-8">
                <span clas="text-green-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide">About</span>
              </div>

              <div className="mt-2 shadow-sm rounded-sm">
                <div>
                  <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="px-1 py-2 font-semibold">First Name</div>
                      <div className="px-1 py-2">{userDetails.firstName} </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-1 py-2 font-semibold">Last Name</div>
                      <div className="px-1 py-2">{userDetails.lastName}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-1 py-2 font-semibold">Gender</div>
                      <div className="px-1 py-2">{userDetails.gender}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-1 py-2 font-semibold">Contact No.</div>
                      <div className="px-1 py-2">{userDetails.phone}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-1 py-2 font-semibold">Email.</div>
                      <div className="px-1 py-2">{userDetails.email}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-1 py-2 font-semibold">Birthday</div>
                      <div className="px-1 py-2">{userDetails.birthDate}</div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="mt-4 px-1 py-2 text-white bg-red-500 rounded-md focus:bg-red-600 focus:outline-none"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
