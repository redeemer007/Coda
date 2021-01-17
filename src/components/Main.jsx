import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { connect } from "react-redux";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }
  async componentDidMount() {
    const data = await fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json",
      {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const player = await data.json();
    const players = player.map((player, index) => {
      return {
        Name: player.Name,
        Price: player.Price,
        Bet: player.Bet,
        ProfileImage: player["Profile Image"],
        Level: 1,
        Wins: 0,
        Lost: 0,
        id: index,
        selected: false,
      };
    });

    this.props.setPlayers(players);
  }

  setPlayer = (player, index) => {
    return (
      <tr key={index}>
        <td>{player.name}</td>
        <td>{player.level}</td>
        <td>{player.avatar}</td>
        <td>{player.bet}</td>
        <td>{player.wins}</td>
        <td>{player.lost}</td>
        <td>{player.price}</td>
      </tr>
    );
  };
  state = {};
  render() {
    return (
      <div className="Main">
        <div className="row">
          <h1>Select Player 9</h1>
        </div>
        <div className="row">
          <ReactBootStrap.InputGroup className="mb-3">
            <ReactBootStrap.InputGroup.Prepend>
              <ReactBootStrap.InputGroup.Text id="basic-addon1">
                @
              </ReactBootStrap.InputGroup.Text>
            </ReactBootStrap.InputGroup.Prepend>
            <ReactBootStrap.FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </ReactBootStrap.InputGroup>
        </div>
        <ReactBootStrap.Table striped bordered hover>
          <thead>
            <tr>
              <th>SELECT</th>
              <th>PLAYER NAME</th>
              <th>LEVEL</th>
              <th>AVATAR</th>
              <th>BET</th>
              <th>WINS</th>
              <th>LOST</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody>
            {this.props.players.map((player) => {
              return (
                <tr key={player.id}>
                  <td>
                    <ReactBootStrap.Form.Check
                      type="checkbox"
                      onChange={() => {
                        this.props.alterUserPlayingCondition(player.id);
                      }}
                    />
                  </td>
                  <td>{player.Name}</td>
                  <td>{player.Level}</td>
                  <td>
                    <img
                      width="50px"
                      height="50px"
                      src={player.ProfileImage}
                      alt="Player Profile"
                    />
                  </td>
                  <td>{player.Bet}</td>
                  <td>{player.Wins}</td>
                  <td>{player.Lost}</td>
                  <td>{player.Price}</td>
                </tr>
              );
            })}
          </tbody>
        </ReactBootStrap.Table>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    setPlayers: (players) => {
      dispatch({ type: "SET_PLAYERS", payload: players });
    },
    alterUserPlayingCondition: (id) => {
      dispatch({ type: "ALTER_PLAYING_CONDITION", payload: id });
    },
  };
}
function mapStateToProps(state) {
  return {
    players: state.players,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
