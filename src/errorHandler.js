const { HTTPError, InternalServerError } = require('./errors');

const errorHandler = (err, _req, res, _next) => {
	let response;

	if (err instanceof HTTPError) {
		response = err.toJSON();
	} else {
		const genericError = new InternalServerError();
		response = genericError.toJSON();
	}
	res.status(response.statusCode).json(response);
	errorLogger(err, response);
	return;
};

function errorLogger(err, response) {
	console.log('\nError:');
	console.log(err);
	console.log(response);
}

module.exports = errorHandler;
