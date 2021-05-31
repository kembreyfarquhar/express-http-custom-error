import { ErrorRequestHandler } from 'express';

export type ErrorResponse = {
	statusCode: number;
	errorType: string;
	message: string;
	userMessage: string;
};

export class HTTPError extends Error {
	statusCode: number;
	errorType: string;
	userMessage: string;

	constructor(message: string, statusCode: number, errorType: string, userMessage?: string) {
		super(message);
		this.statusCode = statusCode;
		this.errorType = errorType;
		this.userMessage = userMessage
			? userMessage
			: 'The system was unable to complete your request.';
		Error.captureStackTrace(this, this.constructor);
	}

	toJSON(): ErrorResponse {
		return {
			statusCode: this.statusCode,
			errorType: this.errorType,
			message: this.message,
			userMessage: this.userMessage,
		};
	}
}

// CLIENT ERRORS

export class BadRequest extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg = message || 'The server could not understand the request due to invalid syntax.';
		super(errMsg, 400, 'Bad Request', userMessage);
	}
}

export class Unauthorized extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg = message || 'This request requires user authentication.';
		super(errMsg, 401, 'Unauthorized', userMessage);
	}
}

export class PaymentRequired extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg = message || 'This request requires client payment.';
		super(errMsg, 402, 'Payment Required', userMessage);
	}
}

export class Forbidden extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg = message || 'The client does not have access rights to this content.';
		super(errMsg, 403, 'Forbidden', userMessage);
	}
}

export class NotFound extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg = message || 'Entity not found.';
		super(errMsg, 404, 'Not Found', userMessage);
	}
}

export class MethodNotAllowed extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg =
			message || 'The method specified in the request is not allowed for this resource.';
		super(errMsg, 405, 'Method Not Allowed', userMessage);
	}
}

export class NotAcceptable extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg =
			message ||
			'This resource is not capable of producing a response that is acceptable with the given accept headers.';
		super(errMsg, 406, 'Not Acceptable', userMessage);
	}
}

export class ProxyAuthenticationRequired extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg = message || 'The client must first authenticate with the proxy.';
		super(errMsg, 407, 'Proxy Authentication Required', userMessage);
	}
}

export class RequestTimeout extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg =
			message || 'Client did not produce a request within the allotted time of the server.';
		super(errMsg, 408, 'Request Timeout', userMessage);
	}
}

export class Conflict extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg = message || 'This request conflicts with the curret state of the server.';
		super(errMsg, 409, 'Conflict', userMessage);
	}
}

export class Gone extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg = message || 'Requested content has been removed from server.';
		super(errMsg, 410, 'Gone', userMessage);
	}
}

export class LengthRequired extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg = message || 'Content-Length header is required for this request.';
		super(errMsg, 411, 'Length Required', userMessage);
	}
}

export class PreconditionFailed extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg =
			message || 'Client has indicated preconditions in headers which the server does not meet.';
		super(errMsg, 412, 'Precondition Failed', userMessage);
	}
}

export class PayloadTooLarge extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg = message || 'Request entity is larger than limits defined by server.';
		super(errMsg, 413, 'Payload Too Large', userMessage);
	}
}

export class URITooLong extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg = message || 'URI requested by client is longer than the server can interpret.';
		super(errMsg, 414, 'URI Too Long', userMessage);
	}
}

export class UnsupportedMediaType extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg =
			message || 'The media format for the requested data is not supported by the server.';
		super(errMsg, 415, 'Unsupported Media Type', userMessage);
	}
}

export class RangeNotSatisfiable extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg = message || 'The range specified in the request headers cannot be fullfilled.';
		super(errMsg, 416, 'Range Not Satisfiable', userMessage);
	}
}

export class ExpectationFailed extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg = message || 'The expectation specified in the request headers cannot be met.';
		super(errMsg, 417, 'Expectation Failed', userMessage);
	}
}

export class MisdirectedRequest extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg =
			message || 'The request was directed at a server that is not able to produce a response.';
		super(errMsg, 421, 'Misdirected Request', userMessage);
	}
}

export class UnprocessableEntity extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg =
			message ||
			'The the server understands the content type of the request entity, and the syntax of the request entity is correct but was unable to process the contained instructions.';
		super(errMsg, 422, 'Unprocessable Entity', userMessage);
	}
}

export class Locked extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg = message || 'The resource that is being requested is locked.';
		super(errMsg, 423, 'Locked', userMessage);
	}
}

export class FailedDependency extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg = message || 'Request failed due to failure of a previous request.';
		super(errMsg, 424, 'Failed Dependency', userMessage);
	}
}

export class TooEarly extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg =
			message || 'The server is unwilling to risk processing a request that might be replayed.';
		super(errMsg, 425, 'Too Early', userMessage);
	}
}

export class UpgradeRequired extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg =
			message ||
			'The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.';
		super(errMsg, 426, 'Upgrade Required', userMessage);
	}
}

export class PreconditionRequired extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg = message || 'The origin server requires the request to be conditional.';
		super(errMsg, 428, 'Precondition Required', userMessage);
	}
}

export class TooManyRequests extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg = message || 'Client has sent too many requests in a given amount of time.';
		super(errMsg, 429, 'Too Many Requests', userMessage);
	}
}

export class RequestHeaderFieldsTooLarge extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg =
			message || 'Request header fields are too large for server to process the request.';
		super(errMsg, 431, 'Request Header Fields Too Large', userMessage);
	}
}

export class UnavailableForLegalReasons extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg = message || 'Resource cannot be provided due to legal reasons.';
		super(errMsg, 451, 'Unavailable For Legal Reasons', userMessage);
	}
}

// SERVER ERRORS

export class InternalServerError extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg = message || "The server encountered a situation it doesn't know how to handle.";
		super(errMsg, 500, 'Internal Server Error', userMessage);
	}
}

export class NotImplemented extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg =
			message || 'The server does not support the functionality required to fulfill the request.';
		super(errMsg, 501, 'Not Implemented', userMessage);
	}
}

export class BadGateway extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg =
			message ||
			'The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request.';
		super(errMsg, 502, 'Bad Gateway', userMessage);
	}
}

export class ServiceUnavailable extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg = message || 'The server is not ready to handle the request.';
		super(errMsg, 503, 'Service Unavailable', userMessage);
	}
}

export class GatewayTimeout extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg =
			message || 'The server, while acting as a gateway, did not get a response in time.';
		super(errMsg, 504, 'Gateway Timeout', userMessage);
	}
}

export class HTTPVersionNotSupported extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg =
			message || 'The HTTP version used in the request is not supported by the server.';
		super(errMsg, 505, 'HTTP Version Not Supported', userMessage);
	}
}

export class VariantAlsoNegotiates extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg =
			message ||
			'The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.';
		super(errMsg, 506, 'Variant Also Negotiates', userMessage);
	}
}

export class InsufficientStorage extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg =
			message ||
			'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.';
		super(errMsg, 507, 'Insufficient Storage', userMessage);
	}
}

export class LoopDetected extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg = message || 'The server detected an infinite loop while processing the request.';
		super(errMsg, 508, 'Loop Detected', userMessage);
	}
}

export class NotExtended extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg =
			message || 'Further extensions to the request are required for the server to fulfill it.';
		super(errMsg, 510, 'Not Extended', userMessage);
	}
}

export class NetworkAuthenticationRequired extends HTTPError {
	constructor(message?: string, userMessage?: string) {
		const errMsg = message || 'Client needs to authenticate to gain network access.';
		super(errMsg, 511, 'Network Authentication Required', userMessage);
	}
}

// ERROR HANDLER

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next): void => {
	let response: ErrorResponse;

	if (err instanceof HTTPError) {
		response = err.toJSON();
	} else {
		for (let key in err) {
			if (key === 'code' && Object.keys(err).includes('detail')) {
				const error = new InternalServerError(err.detail);
				response = error.toJSON();
			}
		}
		// @ts-ignore
		if (!response) {
			const genericError = new InternalServerError();
			response = genericError.toJSON();
		}
	}
	res.status(response.statusCode).json(response);
	errorLogger(err, response);
	return;
};

function errorLogger(err: Error, response: ErrorResponse) {
	console.log('\nError:');
	console.log(err);
	console.log(response);
}
