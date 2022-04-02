
function getParticipants(handshakes) {
  return Math.ceil(( (Math.sqrt(8*handshakes + 1) + 1) / 2));
}