import React from "react";

const TeamCard = ({ logo, teamName, stadiumName, website }) => {
    return(
        <div className="team-card">
            <img src={logo} alt={`${teamName} logo`} className="team-logo" />
            <h2>{teamName}</h2>
            <p>{stadiumName}</p>
            <a href={website} target="_blank" rel="noopener noreferrer">
                <button>View Schedule</button>
            </a>
        </div>
    );
};

export default TeamCard;