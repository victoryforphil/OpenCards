exports.HandleEvent= function (state,data) {

  switch (data.type) {
    case "SetName":
      state.player.SetName(data.val);
      break;
    case "JoinGame":
      state.player.JoinGame(data.val);
      break;
  }
};
