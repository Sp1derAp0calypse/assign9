import React from "react";
import teamsData from "./CollegeBasketballTeams.json";
import TeamCard from "./components/TeamCard";

type Team = {
  tid: number;
  school: string;
  name: string;
  city: string;
  state: string;
};

const TeamList: React.FC = () => {
  const teams: Team[] = teamsData.teams;

  return (
    <div>
      <h2>College Basketball Teams</h2>
      <div className="team-list">
        {teams.map((team) => (
          <TeamCard 
            key={team.tid} 
            school={team.school} 
            name={team.name} 
            city={team.city} 
            state={team.state} 
          />
        ))}
      </div>
    </div>
  );
};

export default TeamList;
