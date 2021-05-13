class HTTPError extends Error {
	constructor(message, statusCode, errorType, userMessage) {
		super(message);
		this.statusCode = statusCode;
		this.errorType = errorType;
		this.userMessage = userMessage
			? userMessage
			: 'The system was unable to complete your request.';
		Error.captureStackTrace(this, this.constructor);
	}

	toJSON() {
		return {
			statusCode: this.statusCode,
			errorType: this.errorType,
			message: this.message,
			userMessage: this.userMessage,
		};
	}
}

module.exports = HTTPError;
