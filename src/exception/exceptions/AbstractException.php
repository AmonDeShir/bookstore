<?php

namespace bookstore\exception\exceptions;

use Exception;

abstract class AbstractException extends Exception {
  public function __construct(string $message, $code = 500) {
    parent::__construct($message, $code);
  }

  public function get_message(): string {
    return $this->message;
  }

  public function get_code(): int {
    return $this->code;
  }

}

?>