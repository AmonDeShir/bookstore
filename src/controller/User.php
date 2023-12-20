<?php

  namespace bookstore\controller;

  class User extends Controller {
    public function showAll() {
      $this->render("error", array("error" => "eloi"));
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