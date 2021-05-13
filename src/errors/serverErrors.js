const HTTPError = require('./HTTPError');

class InternalServerError extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg = message || "The server encountered a situation it doesn't know how to handle.";
		super(errMsg, 500, 'Internal Server Error', userMessage);
	}
}

class NotImplemented extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg =
			message || 'The server does not support the functionality required to fulfill the request.';
		super(errMsg, 501, 'Not Implemented', userMessage);
	}
}

class BadGateway extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg =
			message ||
			'The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request.';
		super(errMsg, 502, 'Bad Gateway', userMessage);
	}
}

class ServiceUnavailable extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg = message || 'The server is not ready to handle the request.';
		super(errMsg, 503, 'Service Unavailable', userMessage);
	}
}

class GatewayTimeout extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg =
			message || 'The server, while acting as a gateway, did not get a response in time.';
		super(errMsg, 504, 'Gateway Timeout', userMessage);
	}
}

class HTTPVersionNotSupported extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg =
			message || 'The HTTP version used in the request is not supported by the server.';
		super(errMsg, 505, 'HTTP Version Not Supported', userMessage);
	}
}

class VariantAlsoNegotiates extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg =
			message ||
			'The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.';
		super(errMsg, 506, 'Variant Also Negotiates', userMessage);
	}
}

class InsufficientStorage extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg =
			message ||
			'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.';
		super(errMsg, 507, 'Insufficient Storage', userMessage);
	}
}

class LoopDetected extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg = message || 'The server detected an infinite loop while processing the request.';
		super(errMsg, 508, 'Loop Detected', userMessage);
	}
}

class NotExtended extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg =
			message || 'Further extensions to the request are required for the server to fulfill it.';
		super(errMsg, 510, 'Not Extended', userMessage);
	}
}

class NetworkAuthenticationRequired extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg = message || 'Client needs to authenticate to gain network access.';
		super(errMsg, 511, 'Network Authentication Required', userMessage);
	}
}

module.exports = {
	InternalServerError,
	NotImplemented,
	BadGateway,
	ServiceUnavailable,
	GatewayTimeout,
	HTTPVersionNotSupported,
	VariantAlsoNegotiates,
	InsufficientStorage,
	LoopDetected,
	NotExtended,
	NetworkAuthenticationRequired,
};
