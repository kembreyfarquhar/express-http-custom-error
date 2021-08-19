# Express HTTP Custom Error

Customizable HTTP Errors, compatible with es6 "throw" syntax, including a custom error handler for express APIs.

**This package is not being maintained and may have errors.**

## Installation

```bash
npm i express-http-custom-error
```

## Usage

Throwing an error:

```javascript
const { BadRequest } = require('express-http-custom-error');

router.post('/signin', async (req, res, next) => {
    try {
        const { username } = req.body;
        if (!username) throw new BadRequest('Must include username.');
        ...
    } catch (err) {
        next(err);
    }
});
```

Using the error handler:

```javascript
const { errorHandler } = require('express-http-custom-error');
const app = express();

...

// All routers and other middleware must go before the error handler.
app.use(errorHandler);
```
