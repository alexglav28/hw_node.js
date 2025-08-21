import EventEmitter from 'events';

const chat = new EventEmitter();

chat.on('message', (user, message) => {
  console.log(`${user} : ${message}`);
});

function sendMessage(user, message, emitter) {
  emitter.emit("message", user, message);
}

sendMessage("Tom", "Привет всем!", chat);
sendMessage("Jerry", "Привет, Tom!", chat);
sendMessage("Spike", "Как дела?", chat);