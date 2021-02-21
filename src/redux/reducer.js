const defaultState = {
  players: [],
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_PLAYERS":
      return {
        ...state,
        players: action.payload,
      };

    case "ALTER_PLAYING_CONDITION":
      const alteredPlayingNine = state.players.map((player) => {
        let clonedPlayer = { ...player };
        if (action.payload === clonedPlayer.id) {
          clonedPlayer.selected = !clonedPlayer.selected;
        }
        return clonedPlayer;
      });
      return {
        ...state,
        players: alteredPlayingNine,
      };

    case "UPDATE_PLAYER_WIN":
      const updatedPlayer = state.players.map((player) => {
        let clonedPlayer = { ...player };
        if(clonedPlayer.selected){
          if (action.payload == clonedPlayer.Bet) {
            clonedPlayer.Wins++;
            clonedPlayer.Price *= 2;
          }else{
            clonedPlayer.Lost++;
          }
        }
        return clonedPlayer;
      });
      return {
        ...state,
        players: updatedPlayer,
      };

    default:
      return state;
  }
}

export default reducer;
