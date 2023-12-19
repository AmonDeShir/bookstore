<?php

use Bookstore\Controller\User;
use Bookstore\Router\Route;
use Bookstore\Router\Router;

require __DIR__ . "/vendor/autoload.php";

$ed = new Route("get user:id", User::class, "show");

$router = new Router([
  new Route("get user", User::class, "showAll"),
  new Route("post user", User::class, "deleteAll"),
  new Route("get user:id", User::class, "show"),
  new Route("get user:id:email", User::class, "showDeep"),
]);

$router->navigate();
?>