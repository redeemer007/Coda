import React, { Component } from "react";
import dice from "../images/dice.png";
import PlayingPlayer from "./PlayingPlayer";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Sidebar extends Component {
  state = {
    listOfPlayers: [
      {
        Name: "Richard",
        Price: "2000",
        Bet: "5",
        ProfileImage:
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/richarde8624aa.jpg",
      },
      {
        Name: "Gregory",
        Price: "500",
        Bet: "6",
        ProfileImage:
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gregory032c4c3.jpg",
      },
      {
        Name: "Rodrick",
        Price: "2",
        Bet: "3",
        ProfileImage:
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/rodrick14c9291.jpg",
      },
      {
        Name: "Pod",
        Price: "3000",
        Bet: "9",
        ProfileImage:
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/pod2675a17.jpg",
      },
      {
        Name: "Chuck",
        Price: "650",
        Bet: "1",
        ProfileImage:
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/chuck35c8d61.jpg",
      },
      {
        Name: "Ravi",
        Price: "2000",
        Bet: "8",
        ProfileImage:
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/ravi42884a0.jpg",
      },
      {
        Name: "Soshal Distan Singh",
        Price: "2000",
        Bet: "3",
        ProfileImage:
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/soshal53167ca.jpg",
      },
      {
        Name: "Disha Patahai",
        Price: "9999",
        Bet: "1",
        ProfileImage:
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/disha642f320.jpg",
      },
      {
        Name: "Faizan",
        Price: "1",
        Bet: "2",
        ProfileImage:
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/faizan7534fdb.jpg",
      },
      {
        Name: "George",
        Price: "2000",
        Bet: "4",
        ProfileImage:
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/george826c2d1.jpg",
      },
      {
        Name: "Harshal Mehta",
        Price: "3000",
        Bet: "9",
        ProfileImage:
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/harshal8fc14b7.jpg",
      },
      {
        Name: "Richie Rick",
        Price: "20",
        Bet: "7",
        ProfileImage:
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/richie9c21cda.jpg",
      },
      {
        Name: "Mr Lego",
        Price: "100",
        Bet: "3",
        ProfileImage:
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/lego7beb05c.jpeg",
      },
      {
        Name: "Kelly",
        Price: "3000",
        Bet: "1",
        ProfileImage:
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/kellyac28ff4.jpeg",
      },
      {
        Name: "Adams",
        Price: "200",
        Bet: "9",
        ProfileImage:
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/adamse077219.jpeg",
      },
      {
        Name: "Eve",
        Price: "231",
        Bet: "8",
        ProfileImage:
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/eve05f5590.jpeg",
      },
      {
        Name: "Katlyn",
        Price: "20",
        Bet: "7",
        ProfileImage:
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/katlyn307daf7.jpeg",
      },
      {
        Name: "Lucy",
        Price: "9998",
        Bet: "6",
        ProfileImage:
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/lucy53fe21e.jpeg",
      },
      {
        Name: "Lukaku",
        Price: "500",
        Bet: "5",
        ProfileImage:
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/lukaku7bdcad0.jpeg",
      },
      {
        Name: "Keshav",
        Price: "20000",
        Bet: "4",
        ProfileImage:
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/keshavaaabf32.jpeg",
      },
      {
        Name: "Diana",
        Price: "2",
        Bet: "3",
        ProfileImage:
          "https://s3-ap-southeast-1.amazonaws.com/he-public-data/dianada3c48e.jpeg",
      },
    ],
  };
  render() {
    return (
      <div>
        <div style={{ margin: "auto", width: "100%" }}>
          <img src={dice} alt="Logo"></img>
        </div>

        <hr></hr>
        <ul>
          {this.props.players.map((list) => {
            if (list.selected === true) {
              return <PlayingPlayer {...list} key={list.id} />;
            } else {
              return null;
            }
          })}
        </ul>
        <div>
          <Link to="/game">
            <ReactBootStrap.Button
              variant="primary"
              disabled={
                this.props.players.filter((player) => player.selected === true)
                  .length === 9
                  ? false
                  : true
              }
            >
              START
            </ReactBootStrap.Button>{" "}
          </Link>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    players: state.players,
  };
}
export default connect(mapStateToProps)(Sidebar);
