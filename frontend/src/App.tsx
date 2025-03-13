import React from "react";
import TeamList from "./TeamList";

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to College Basketball Teams</h1>
      <p>Explore teams, their mascots, and where they are located.</p>
      <TeamList />
    </div>
  );
};

export default App;
