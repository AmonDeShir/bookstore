<?php

namespace Bookstore\Model;

abstract class Model {
  public abstract function save($user);

  //public static abstract function all(int $id): array;
  //public static abstract function find(int $id): Self;
}

?>