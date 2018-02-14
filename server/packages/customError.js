module.exports = InternalServerError = {
    InternalServerError: (message) => {
        this.name = "NotImplementedError";
        this.message = (message || "");
    
    }
}

InternalServerError.prototype = Error.prototype;
