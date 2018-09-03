function log(object) {
  console.log(object);
}

function sayhello(name) {
  console.log(`hello ${name}`)
}

module.exports.log = log;
module.exports.sayhello = sayhello;