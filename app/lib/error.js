class Error {
    
    constructor(){
        this.options = {};
    }

    throw(msg, code, args){
        this.options.message = msg;
        this.options.status = code || 400;
        this.options.args = args || {};
        return this._getJson();
    }

    missingParameter(p) {
        this.options.message = 'Missing parameter: \''+p+'\'';
        this.options.status = 400;
        return this._getJson();
    }

    _getJson(){
        return {
            error: true,
            status: this.options.status || 500,
            message: this.options.message || 'something went wrong',
            args: this.options.args || {}
        }
    }
}

module.exports = new Error();