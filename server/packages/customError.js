module.exports = function InternalServerError(title, message, fileName, lineNumber) {
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = message;
    this.fileName = fileName;
    this.lineNumber = lineNumber;
  };
  
  require('util').inherits(module.exports, Error);