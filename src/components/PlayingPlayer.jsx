import React from "react";

const PlayingPlayer = ({ Name, Price, Bet, ProfileImage }) => {
  return (
    <div className="row">
      <div className="col-md-2">
        <img
          width="50px"
          height="50px"
          src={ProfileImage}
          alt="Player Profile"
        />
      </div>
      <div className="col-md-8">
        <div className="row">{Name}</div>
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">{Bet}</div>
        </div>
      </div>

      <div className="col-md-2">{Price}</div>
    </div>
  );
};
export default PlayingPlayer;
