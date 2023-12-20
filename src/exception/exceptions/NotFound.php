<?php 

namespace bookshop\exception;

use bookshop\exception\exceptions\AbstractException;

class NotFoundException extends AbstractException {
  public function __construct(string $resource_name) {
    parent::__construct("Not found", 404);
  }
}

?>