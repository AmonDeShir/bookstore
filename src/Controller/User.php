<?php

  namespace Bookstore\Controller;

  class User {
    public function showAll() {
      echo "get All!";
    }

    public function deleteAll() {
      echo "delete All!";
    }

    public function show(int $id) {
      echo "User: ".$id;
    }

    public function showDeep(int $id, string $email) {
      echo "User: ".$id.", email: ".$email;
    }
  }

?>