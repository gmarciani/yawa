package com.yawa.server.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.UNAUTHORIZED)
class NotAuthorizedException(override val message: String) : RuntimeException(message)
