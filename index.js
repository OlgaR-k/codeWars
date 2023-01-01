
function nicknameGenerator(name) {
  let glass = ['a','e','i','o','u'];

  if (name.length < 4) {
    return "Error: Name too short"
  }
  let lastLetter = 3;
  if ( glass.includes( name.slice(2, lastLetter) ) ) {
    lastLetter++;
  }
  return name.slice(0, lastLetter);
}

console.log(nicknameGenerator("Samantha"));