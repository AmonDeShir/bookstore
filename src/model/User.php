<?php

namespace bookstore\model;


use bookstore\database\Database;

enum UserRole {
  case Customer;
  case Admin;
}

class User extends Model {
  protected int $id;
  protected string $email;
  protected UserRole $role;
  protected int $registered;
  protected int $last_login;

  public function __construct(int $id, string $email, UserRole $role, int $registered, int $last_login) {
    $this->id = $id;
    $this->email = $email;
    $this->role = $role;
    $this->registered = $registered;
    $this->last_login = $last_login;
  }

  public function get_id(): int {
    return $this->id;
  }

  public function get_email(): string {
    return $this->email;
  }

  public function get_role(): UserRole {
    return $this->role;
  }

  public function save($user) {
  }

  public static function register() {
  }
}

?>