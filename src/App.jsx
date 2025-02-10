import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => {
        setUser(response.data.results[0]);
      })
      .catch((error) => console.error("Error fetching user:", error));
  }, []);

  return (
    <div className="container">
      {user ? (
        <div className="card">
          <div className="image-box">
            <img src={user.picture.large} alt="User" className="profile-pic" />
          </div>
          <div className="info">
            <p><strong>{user.name.first}</strong> <strong>{user.name.last}</strong></p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>PhoneNo:</strong> {user.phone}</p>
          </div>
        </div>
      ) : (
        <p>Loading User data...</p>
      )}
    </div>
  );
};

export default App;
