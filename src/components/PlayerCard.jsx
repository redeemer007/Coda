import React from "react";
import wins from "../images/wins.png";

const PlayerCard = ({
  Name,
  ProfileImage,
  Level,
  Price,
  Bet,
  Wins,
  sequenceId,
  win,
}) => {
  return (
    <div
      style={{
        width: win ? "220px" : "200px",
        height: win ? "240px" : "220px",
        backgroundColor: "yellowgreen",
        border: win ? "2px solid green" : "1px solid black",
        position: "absolute",
        left:
          sequenceId > 4 ? 300 * (sequenceId - 4) : 300 * (sequenceId + 0.5),
        top: sequenceId > 4 ? 500 : 20,
      }}
    >
      <div className="row">
        <div className="col-md-4">
          <img
            width="50px"
            height="50px"
            src={ProfileImage}
            alt="Player Profile"
          />
        </div>
        <div className="col-md-8">
          <div className="row" style={{wordBreak:"break-word"}}>{Name}</div>
          <div className="row">Level: {Level}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">Price: {Price}</div>
        <div className="col-md-6">Bet: {Bet}</div>
      </div>
      <div className="row" style={{paddingLeft:20}}><img src={wins} alt="wins" width="20px" height="20px" />&nbsp;&nbsp;{Wins}</div>
    </div>
  );
};
export default PlayerCard;
