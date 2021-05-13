const HTTPError = require('./HTTPError');

class BadRequest extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg = message || 'The server could not understand the request due to invalid syntax.';
		super(errMsg, 400, 'Bad Request', userMessage);
	}
}

class Unauthorized extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg = message || 'This request requires user authentication.';
		super(errMsg, 401, 'Unauthorized', userMessage);
	}
}

class PaymentRequired extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg = message || 'This request requires client payment.';
		super(errMsg, 402, 'Payment Required', userMessage);
	}
}

class Forbidden extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg = message || 'The client does not have access rights to this content.';
		super(errMsg, 403, 'Forbidden', userMessage);
	}
}

class NotFound extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg = message || 'Entity not found.';
		super(errMsg, 404, 'Not Found', userMessage);
	}
}

class MethodNotAllowed extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg =
			message || 'The method specified in the request is not allowed for this resource.';
		super(errMsg, 405, 'Method Not Allowed', userMessage);
	}
}

class NotAcceptable extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg =
			message ||
			'This resource is not capable of producing a response that is acceptable with the given accept headers.';
		super(errMsg, 406, 'Not Acceptable', userMessage);
	}
}

class ProxyAuthenticationRequired extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg = message || 'The client must first authenticate with the proxy.';
		super(errMsg, 407, 'Proxy Authentication Required', userMessage);
	}
}

class RequestTimeout extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg =
			message || 'Client did not produce a request within the allotted time of the server.';
		super(errMsg, 408, 'Request Timeout', userMessage);
	}
}

class Conflict extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg = message || 'This request conflicts with the curret state of the server.';
		super(errMsg, 409, 'Conflict', userMessage);
	}
}

class Gone extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg = message || 'Requested content has been removed from server.';
		super(errMsg, 410, 'Gone', userMessage);
	}
}

class LengthRequired extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg = message || 'Content-Length header is required for this request.';
		super(errMsg, 411, 'Length Required', userMessage);
	}
}

class PreconditionFailed extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg =
			message || 'Client has indicated preconditions in headers which the server does not meet.';
		super(errMsg, 412, 'Precondition Failed', userMessage);
	}
}

class PayloadTooLarge extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg = message || 'Request entity is larger than limits defined by server.';
		super(errMsg, 413, 'Payload Too Large', userMessage);
	}
}

class URITooLong extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg = message || 'URI requested by client is longer than the server can interpret.';
		super(errMsg, 414, 'URI Too Long', userMessage);
	}
}

class UnsupportedMediaType extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg =
			message || 'The media format for the requested data is not supported by the server.';
		super(errMsg, 415, 'Unsupported Media Type', userMessage);
	}
}

class RangeNotSatisfiable extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg = message || 'The range specified in the request headers cannot be fullfilled.';
		super(errMsg, 416, 'Range Not Satisfiable', userMessage);
	}
}

class ExpectationFailed extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg = message || 'The expectation specified in the request headers cannot be met.';
		super(errMsg, 417, 'Expectation Failed', userMessage);
	}
}

class MisdirectedRequest extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg =
			message || 'The request was directed at a server that is not able to produce a response.';
		super(errMsg, 421, 'Misdirected Request', userMessage);
	}
}

class UnprocessableEntity extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg =
			message ||
			'The the server understands the content type of the request entity, and the syntax of the request entity is correct but was unable to process the contained instructions.';
		super(errMsg, 422, 'Unprocessable Entity', userMessage);
	}
}

class Locked extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg = message || 'The resource that is being requested is locked.';
		super(errMsg, 423, 'Locked', userMessage);
	}
}

class FailedDependency extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg = message || 'Request failed due to failure of a previous request.';
		super(errMsg, 424, 'Failed Dependency', userMessage);
	}
}

class TooEarly extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg =
			message || 'The server is unwilling to risk processing a request that might be replayed.';
		super(errMsg, 425, 'Too Early', userMessage);
	}
}

class UpgradeRequired extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg =
			message ||
			'The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.';
		super(errMsg, 426, 'Upgrade Required', userMessage);
	}
}

class PreconditionRequired extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg = message || 'The origin server requires the request to be conditional.';
		super(errMsg, 428, 'Precondition Required', userMessage);
	}
}

class TooManyRequests extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg = message || 'Client has sent too many requests in a given amount of time.';
		super(errMsg, 429, 'Too Many Requests', userMessage);
	}
}

class RequestHeaderFieldsTooLarge extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg =
			message || 'Request header fields are too large for server to process the request.';
		super(errMsg, 431, 'Request Header Fields Too Large', userMessage);
	}
}

class UnavailableForLegalReasons extends HTTPError {
	constructor(message = null, userMessage = null) {
		const errMsg = message || 'Resource cannot be provided due to legal reasons.';
		super(errMsg, 451, 'Unavailable For Legal Reasons', userMessage);
	}
}

module.exports = {
	BadRequest,
	Unauthorized,
	PaymentRequired,
	Forbidden,
	NotFound,
	MethodNotAllowed,
	NotAcceptable,
	ProxyAuthenticationRequired,
	RequestTimeout,
	Conflict,
	Gone,
	LengthRequired,
	PreconditionFailed,
	PayloadTooLarge,
	URITooLong,
	UnsupportedMediaType,
	RangeNotSatisfiable,
	ExpectationFailed,
	MisdirectedRequest,
	UnprocessableEntity,
	Locked,
	FailedDependency,
	TooEarly,
	UpgradeRequired,
	PreconditionRequired,
	TooManyRequests,
	RequestHeaderFieldsTooLarge,
	UnavailableForLegalReasons,
};
