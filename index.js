// Code your solutions in this file
function writeCards(namesArray, event) {
  const messages = [];
  for (let i = 0; i < namesArray.length; i++) {
    messages.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift.`);
  }
  return messages;
}

