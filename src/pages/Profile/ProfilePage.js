import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfilePage = ({ userId }) => {
  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3040/users/1`)
      .then((response) => {
        setUser(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
        setPhoneNumber(response.data.phoneNumber);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }, [userId]);

  

  const handleSaveChanges = async () => {
    if (!name || !email || !phoneNumber) {
      alert("All fields are required.");
      return;
    }

    const updatedUser = {
      id: userId,
      name,
      email,
      phoneNumber,
    };

    try {
      await axios.put(`http://localhost:3040/users/${userId}`, updatedUser);
      setUser(updatedUser);
      setEditMode(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Profile update failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Profile Page</h2>
      {editMode ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={handleSaveChanges}>Save Changes</button>
        </>
      ) : (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone Number: {user.phoneNumber}</p>
          <button onClick={() => setEditMode(true)}>Edit Profile</button>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
