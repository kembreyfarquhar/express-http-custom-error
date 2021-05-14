const { HTTPError, InternalServerError } = require('./errors');

function errorHandler(err, _req, res, _next) {
	let response;

	if (err instanceof HTTPError) {
		response = err.toJSON();
	} else {
		for (let key in err) {
			if (key === 'code' && Object.keys(err).includes('detail')) {
				const error = new InternalServerError(err.detail);
				response = error.toJSON();
			}
		}
		if (!response) {
			const genericError = new InternalServerError();
			response = genericError.toJSON();
		}
	}
	res.status(response.statusCode).json(response);
	errorLogger(err, response);
	return;
}

function errorLogger(err, response) {
	console.log('\nError:');
	console.log(err);
	console.log(response);
}

module.exports = { errorHandler };
