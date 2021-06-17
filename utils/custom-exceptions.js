class HttpError extends Error {
    statusCode;

    constructor(message, code, name) {
        super(message);
        this.name = name || "SERVER ERROR";
        this.statusCode = code || 500;
    }
}

class EmailExist extends HttpError {
    constructor(message) {
        super(message, 400, "EMAIL ALREADY EXISTS");
    }
}

class EmailNotExists extends HttpError {
    constructor(message) {
        super(message, 400, "EMAIL NOT FOUND");
    }
}

class NotFound extends HttpError {
    constructor(message) {
        super(message, 404, "NOT FOUND");
    }
}

class CredentialsNotMatched extends HttpError {
    constructor(message = "Your Credentials not matched") {
        super(message, 400, "CREDENTIALS NOT MATCHED");
    }
}

class ValidationError extends HttpError {
    errors;

    constructor(message, errors = []) {
        super(message, 422, "VALIDATION ERROR");
        this.errors = errors;
    }
}

class AccessDenied extends HttpError {
    constructor(message = "Access Denied") {
        super(message, 401, "ACCESS DENIED");
    }
}

class LoginFailed extends AccessDenied {
    constructor(message = "Login Failed") {
        super(message);
    }
}

class BadRequset extends HttpError {
    constructor(message = "Bad Requset") {
        super(message, 400, "BAD REQUEST");
    }
}

class EmailExpire extends HttpError {
    constructor(message) {
        super(message, 406, "EMAIL EXPIRE");
    }
}

class InvalidParamID extends BadRequset {
    constructor(message = "Invalid param id") {
        super(message);
    }
}

module.exports = {
    HttpError,
    EmailExist,
    CredentialsNotMatched,
    ValidationError,
    NotFound,
    AccessDenied,
    LoginFailed,
    EmailNotExists,
    BadRequset,
    EmailExpire,
    InvalidParamID,
};
