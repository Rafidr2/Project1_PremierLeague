import React from 'react';
import TeamCard from './components/TeamCard';
import teams from './teamData';
import './styles.css';


function App() {
  return (
    <div className="App">
      <h1>Premier League Teams</h1>
      <div className="team-grid">
        {teams.map(team => (
          <TeamCard
            key={team.id}
            logo={team.logo}
            teamName={team.teamName}
            stadiumName={team.stadiumName}
            website={team.website}
          />
        ))}
      </div>
    </div>
  );
}

export default App;