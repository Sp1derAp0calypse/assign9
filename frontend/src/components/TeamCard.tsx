import React from "react";

type TeamProps = {
  school: string;
  name: string;
  city: string;
  state: string;
};

const TeamCard: React.FC<TeamProps> = ({ school, name, city, state }) => {
  return (
    <div className="team-card">
      <h3>{school}</h3>
      <p><strong>Mascot:</strong> {name}</p>
      <p><strong>Location:</strong> {city}, {state}</p>
    </div>
  );
};

export default TeamCard;
