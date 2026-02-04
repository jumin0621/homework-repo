import React from "react";

function ProfileCard({ name, age, job }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>
        {age}세 / {job}
      </p>
    </div>
  );
}

export default ProfileCard;
