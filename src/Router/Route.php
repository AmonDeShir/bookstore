<?php

namespace Bookstore\Router;

use ReflectionClass;

class Route {
  protected string $controller;
  protected array $args;
  protected string $type;
  protected string $action;
  protected string $method;

  public function __construct(string $route, string $controller, string $method = "invoke") {
    $this->controller = $controller;
    $this->method = $method;
    $this->type = "get";
    $this->action = "";
    $this->args = [];
    $this->parse_route($route);
  }

  protected function parse_route(string $route) {
    $parts = explode(' ', $route);

    if (count($parts) < 2) {
      return;
    }

    $args = explode(':', $parts[1]);

    $this->type = $parts[0];
    $this->action = $args[0];
    $this->args = array_splice($args, 1);

    echo "Registered route: " . $this->get_identifier() . "<br>";
  }

  public function get_identifier(): string {
    return $this->type.":".$this->action.':'.count($this->args);
  }

  public function open(array $args) {
    $reflector = new ReflectionClass($this->controller);
    $instance = $reflector->newInstance();
    $method = $reflector->getMethod($this->method);
    $method->invoke($instance, ...$args);
  } 
}

?>