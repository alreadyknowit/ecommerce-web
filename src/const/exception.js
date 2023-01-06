

export const AuthException=(err) =>{

    return {
        "resultCode": err.resultCode,
        "message": err.message,
        "httpStatusCode": err.httpStatusCode,
        "zonedDateTime": err.zonedDateTime
    }

}