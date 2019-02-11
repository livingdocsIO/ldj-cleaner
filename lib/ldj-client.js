const EventEmitter = require('events').EventEmitter

class LDJClient extends EventEmitter {
  constructor(stream) {
    super()
    this.buffer = ''
    stream.on('data', data => {
      this.buffer += data
      this.process()
    })
    stream.on('end', () => {
      this.process()
      this.emit('message', this.buffer)
    })
  }
  process() {
    let boundary = this.buffer.indexOf('\n')
    while (boundary !== -1) {
      const input = this.buffer.substring(0, boundary)
      this.buffer = this.buffer.substring(boundary + 1)
      this.emit('message', input)
      boundary = this.buffer.indexOf('\n')
    }
  }
  static connect(stream) {
    return new LDJClient(stream)
  }
}

module.exports = LDJClient
