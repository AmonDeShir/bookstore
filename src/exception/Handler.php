<?php

namespace bookshop\exception;

use Throwable;

class Handler {
  protected ?Throwable $exception = null;

  public function handle(Throwable $exception): static {
    $this->exception = $exception;

    echo $exception->getMessage() . PHP_EOL;

    return $this;
  }
}
