<?php

namespace bookstore\router;

use bookshop\controller\Error;

class Router {
  protected array $routing;

  public function __construct(array $routing) {
    $this->routing = array_combine(
      array_map(fn(Route $route): string => $route->get_identifier(), $routing),
      $routing,
    );
  }

  public function navigate() {
    [$id, $args] = $this->parse_url();
    
    if (!array_key_exists($id, $this->routing)) {
      return;
    }

    $this->routing[$id]->open($args);
  }

  protected function parse_url(): array {
    $path = $_SERVER['REQUEST_URI'];
    $type = strtolower($_SERVER['REQUEST_METHOD']);
    $parts = explode('/', substr($path, 1));

    $action = $parts[0];
    $args = count($parts) > 1 ? array_slice($parts, 1) : [];
    $id = $this->create_identifier($type, $action, $args);

    return [$id, $args];
  }

  protected function create_identifier(string $type, string $action, array $args): string {
    return $type.":".$action.':'.count($args);
  }
}
?>