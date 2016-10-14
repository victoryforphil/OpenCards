exports.HandleRequest = function (state,socket,data) {
  var _type = data.type;
  if(!_type || _type == ""){
    socket.emit("response", {type:"error", msg:"No Type for Request"});
    return;
  }

  switch (_type) {
    case "Get_InitInfo":
      socket.emit("repsonse", {type:"Get_InitInfo", data: state})
      break;
    default:

  }
};
