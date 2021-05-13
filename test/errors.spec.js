const {
	HTTPError,
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
} = require('../index');

describe('HTTP Errors Unit Tests', () => {
	it('Error should be instance of HTTPError', () => {
		const err = new BadRequest();
		expect(err instanceof HTTPError).toBe(true);
	});

	it('Should correctly set a custom error message', () => {
		const err = new BadRequest('Custom error message.');
		expect(err.message).toBe('Custom error message.');
	});

	it('Should correctly set a custom user message', () => {
		const err = new BadRequest(null, 'Custom user message.');
		expect(err.userMessage).toBe('Custom user message.');
	});

	it('Should correctly set error status code', () => {
		const err = new BadRequest();
		expect(err.statusCode).toBe(400);
	});

	it('Should correctly return JSON values from toJSON function', () => {
		const err = new BadRequest();
		expect(err.toJSON()).toStrictEqual({
			statusCode: 400,
			errorType: 'Bad Request',
			message: 'The server could not understand the request due to invalid syntax.',
			userMessage: 'The system was unable to complete your request.',
		});
	});

	it('400 Bad Request', () => {
		const err = new BadRequest();
		expect(err.statusCode).toBe(400);
		expect(err.errorType).toBe('Bad Request');
	});

	it('401 Unauthorize', () => {
		const err = new Unauthorized();
		expect(err.statusCode).toBe(401);
		expect(err.errorType).toBe('Unauthorized');
	});

	it('402 Payment Required', () => {
		const err = new PaymentRequired();
		expect(err.statusCode).toBe(402);
		expect(err.errorType).toBe('Payment Required');
	});

	it('403 Forbidden', () => {
		const err = new Forbidden();
		expect(err.statusCode).toBe(403);
		expect(err.errorType).toBe('Forbidden');
	});

	it('404 Not Found', () => {
		const err = new NotFound();
		expect(err.statusCode).toBe(404);
		expect(err.errorType).toBe('Not Found');
	});

	it('405 Method Not Allowed', () => {
		const err = new MethodNotAllowed();
		expect(err.statusCode).toBe(405);
		expect(err.errorType).toBe('Method Not Allowed');
	});

	it('406 Not Acceptable', () => {
		const err = new NotAcceptable();
		expect(err.statusCode).toBe(406);
		expect(err.errorType).toBe('Not Acceptable');
	});

	it('407 Proxy Authentication Required', () => {
		const err = new ProxyAuthenticationRequired();
		expect(err.statusCode).toBe(407);
		expect(err.errorType).toBe('Proxy Authentication Required');
	});

	it('408 Request Timeout', () => {
		const err = new RequestTimeout();
		expect(err.statusCode).toBe(408);
		expect(err.errorType).toBe('Request Timeout');
	});

	it('409 Conflict', () => {
		const err = new Conflict();
		expect(err.statusCode).toBe(409);
		expect(err.errorType).toBe('Conflict');
	});

	it('410 Gone', () => {
		const err = new Gone();
		expect(err.statusCode).toBe(410);
		expect(err.errorType).toBe('Gone');
	});

	it('411 Length Required', () => {
		const err = new LengthRequired();
		expect(err.statusCode).toBe(411);
		expect(err.errorType).toBe('Length Required');
	});

	it('412 Precondition Failed', () => {
		const err = new PreconditionFailed();
		expect(err.statusCode).toBe(412);
		expect(err.errorType).toBe('Precondition Failed');
	});

	it('413 Payload Too Large', () => {
		const err = new PayloadTooLarge();
		expect(err.statusCode).toBe(413);
		expect(err.errorType).toBe('Payload Too Large');
	});

	it('414 URI Too Long', () => {
		const err = new URITooLong();
		expect(err.statusCode).toBe(414);
		expect(err.errorType).toBe('URI Too Long');
	});

	it('415 Unsupported Media Type', () => {
		const err = new UnsupportedMediaType();
		expect(err.statusCode).toBe(415);
		expect(err.errorType).toBe('Unsupported Media Type');
	});

	it('416 Range Not Satisfiable', () => {
		const err = new RangeNotSatisfiable();
		expect(err.statusCode).toBe(416);
		expect(err.errorType).toBe('Range Not Satisfiable');
	});

	it('417 Expectation Failed', () => {
		const err = new ExpectationFailed();
		expect(err.statusCode).toBe(417);
		expect(err.errorType).toBe('Expectation Failed');
	});

	it('421 Misdirected Request', () => {
		const err = new MisdirectedRequest();
		expect(err.statusCode).toBe(421);
		expect(err.errorType).toBe('Misdirected Request');
	});

	it('422 Unprocessable Entity', () => {
		const err = new UnprocessableEntity();
		expect(err.statusCode).toBe(422);
		expect(err.errorType).toBe('Unprocessable Entity');
	});

	it('423 Locked', () => {
		const err = new Locked();
		expect(err.statusCode).toBe(423);
		expect(err.errorType).toBe('Locked');
	});

	it('424 Failed Dependency', () => {
		const err = new FailedDependency();
		expect(err.statusCode).toBe(424);
		expect(err.errorType).toBe('Failed Dependency');
	});

	it('425 Too Early', () => {
		const err = new TooEarly();
		expect(err.statusCode).toBe(425);
		expect(err.errorType).toBe('Too Early');
	});

	it('426 Upgrade Required', () => {
		const err = new UpgradeRequired();
		expect(err.statusCode).toBe(426);
		expect(err.errorType).toBe('Upgrade Required');
	});

	it('428 Precondition Required', () => {
		const err = new PreconditionRequired();
		expect(err.statusCode).toBe(428);
		expect(err.errorType).toBe('Precondition Required');
	});

	it('429 Too Many Requests', () => {
		const err = new TooManyRequests();
		expect(err.statusCode).toBe(429);
		expect(err.errorType).toBe('Too Many Requests');
	});

	it('431 Request Header Fields Too Large', () => {
		const err = new RequestHeaderFieldsTooLarge();
		expect(err.statusCode).toBe(431);
		expect(err.errorType).toBe('Request Header Fields Too Large');
	});

	it('451 Unavailable For Legal Reasons', () => {
		const err = new UnavailableForLegalReasons();
		expect(err.statusCode).toBe(451);
		expect(err.errorType).toBe('Unavailable For Legal Reasons');
	});

	it('500 Internal Server Error', () => {
		const err = new InternalServerError();
		expect(err.statusCode).toBe(500);
		expect(err.errorType).toBe('Internal Server Error');
	});

	it('501 Not Implemented', () => {
		const err = new NotImplemented();
		expect(err.statusCode).toBe(501);
		expect(err.errorType).toBe('Not Implemented');
	});

	it('502 Bad Gateway', () => {
		const err = new BadGateway();
		expect(err.statusCode).toBe(502);
		expect(err.errorType).toBe('Bad Gateway');
	});

	it('503 Service Unavailable', () => {
		const err = new ServiceUnavailable();
		expect(err.statusCode).toBe(503);
		expect(err.errorType).toBe('Service Unavailable');
	});

	it('504 Gateway Timeout', () => {
		const err = new GatewayTimeout();
		expect(err.statusCode).toBe(504);
		expect(err.errorType).toBe('Gateway Timeout');
	});

	it('505 HTTP Version Not Supported', () => {
		const err = new HTTPVersionNotSupported();
		expect(err.statusCode).toBe(505);
		expect(err.errorType).toBe('HTTP Version Not Supported');
	});

	it('506 Variant Also Negotiates', () => {
		const err = new VariantAlsoNegotiates();
		expect(err.statusCode).toBe(506);
		expect(err.errorType).toBe('Variant Also Negotiates');
	});

	it('507 Insufficient Storage', () => {
		const err = new InsufficientStorage();
		expect(err.statusCode).toBe(507);
		expect(err.errorType).toBe('Insufficient Storage');
	});

	it('508 Loop Detected', () => {
		const err = new LoopDetected();
		expect(err.statusCode).toBe(508);
		expect(err.errorType).toBe('Loop Detected');
	});

	it('510 Not Extended', () => {
		const err = new NotExtended();
		expect(err.statusCode).toBe(510);
		expect(err.errorType).toBe('Not Extended');
	});

	it('511 Network Authentication Required', () => {
		const err = new NetworkAuthenticationRequired();
		expect(err.statusCode).toBe(511);
		expect(err.errorType).toBe('Network Authentication Required');
	});
});
