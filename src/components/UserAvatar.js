import React from "react";

const UserAvatar = ({ email }) => {
  // Function to generate initials from the email
  const getInitials = (email) => {
    const name = email.split("@")[0];
    return name.charAt(0).toUpperCase();
  };

  return <div className="user-avatar">{getInitials(email)}</div>;
};

export default UserAvatar;
