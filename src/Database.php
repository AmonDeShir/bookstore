<?php

namespace bookstore;

class Database {
  private $host = 'localhost';
  private $username = 'root';
  private $password = '';
  private $db_name = 'bookstore';
  private $conn;

  public function connect() {
    Database::$conn = new mysqli(Database::$host, Database::$username, Database::$password, Database::$db_name);

    if (Database::$conn->connect_error) {
      die("Connection failed: " . Database::$conn->connect_error);
    }
  }

  public function query($sql) {
    return Database::$conn->query($sql);
  }

  public function close() {
    Database::$conn->close();
  }
}

?>