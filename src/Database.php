<?php

namespace Bookstore\Database;

class Database {
  private static $host = 'localhost';
  private static $username = 'root';
  private static $password = '';
  private static $db_name = 'bookstore';
  private static $conn;

  public static function connect() {
    Database::$conn = new mysqli(Database::$host, Database::$username, Database::$password, Database::$db_name);

    if (Database::$conn->connect_error) {
      die("Connection failed: " . Database::$conn->connect_error);
    }
  }

  public static function query($sql) {
    return Database::$conn->query($sql);
  }

  public static function close() {
    Database::$conn->close();
  }
}

?>