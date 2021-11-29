import React from "react";

const ScoreTile = (props) => {
  return (
    <div className="score-tile">
      <div className="score-tile__score">{props.hotelsData[0].score}</div>
      <div className="score-tile__votes">
        {props.hotelsData[0].votes}
        <span> votes</span>
      </div>
    </div>
  );
};

export default ScoreTile;
