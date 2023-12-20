<?php

namespace bookstore;

use bookstore\controller\User;
use bookstore\router\Route;
use bookstore\router\Router;
use bookstore\Database;

class App {
  public Router $router;
  public Database $database;
  public static string $ROOT_DIR = __DIR__."/";

  public function __construct() {
    $this->database = new Database();
    $this->router = new Router([
      new Route("get user", User::class, "showAll"),
      new Route("post user", User::class, "deleteAll"),
      new Route("get user:id", User::class, "show"),
      new Route("get user:id:email", User::class, "showDeep"),
    ]);
  }

  public function start() {
    $this->router->navigate();
  }
}
