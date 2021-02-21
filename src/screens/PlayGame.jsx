import React, { Component } from "react";
import { connect } from "react-redux";
import PlayerCard from "../components/PlayerCard";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

class PlayGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opposingBet: Math.floor(Math.random() * 10)
    }
  }
  componentDidMount() {
    this.props.updatePlayerWin(this.state.opposingBet);
  }

  render() {
    let i = 0;
    return (
      <React.Fragment>
        {this.props.players.map((player) => {
          return player.selected ? (
            <PlayerCard
              {...player}
              sequenceId={i++}
              win={player.Bet == this.state.opposingBet}
              key={player.id}
            />
          ) : null;
        })}
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
          {this.state.opposingBet}
        </div>

        <Link to="/">
          <ReactBootStrap.Button variant="primary" style={{ position: "absolute", bottom: "20px", left: "20px" }}>Back</ReactBootStrap.Button>

        </Link>
      </React.Fragment>
    );
  }
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
