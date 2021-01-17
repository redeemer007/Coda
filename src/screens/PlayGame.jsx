import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PlayerCard from "../components/PlayerCard";

const PlayGame = ({ players, updatePlayerWin }) => {
  let i = 0;
  const [opposingBet, setOpposingBet] = useState(0);
  //let opposingBet = Math.floor(Math.random() * 10);
  useEffect(() => {
    setOpposingBet(Math.floor(Math.random() * 10));
    updatePlayerWin(opposingBet);
  }, [opposingBet]);
  console.log(i++);

  return (
    <React.Fragment>
      {/* {players.map((player) => {
        return player.selected ? (
          <PlayerCard
            {...player}
            sequenceId={i++}
            win={player.Bet == opposingBet}
          />
        ) : null;
      })} */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          borderRadius: "50%",
          border: "2px solid blue",
          width: "80px",
          height: "80px",
          textAlign: "center",
          fontSize: "40px",
        }}
      >
        {opposingBet}
      </div>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return {
    players: state.players,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    updatePlayerWin: (opposingBet) => {
      dispatch({ type: "UPDATE_PLAYER_WIN", payload: opposingBet });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayGame);
