const EventEmitter = require('events');

class Logger extends EventEmitter {
  log(msg) {
    console.log(msg);
    this.emit('ExtendedEmittedEvent', {data: 'Extended Emitted Event'});
  }
}

module.exports = Logger;