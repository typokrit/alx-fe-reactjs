import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Profile Page</h1>
      <nav className="flex gap-4 mb-4">
        <Link to="details" className="text-blue-500">
          Details
        </Link>
        <Link to="settings" className="text-blue-500">
          Settings
        </Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
        <Route path="" element={<p>Select a section above.</p>} />
      </Routes>
    </div>
  );
};

export default Profile;
