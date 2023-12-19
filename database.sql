-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Lis 27, 2023 at 09:05 AM
-- Wersja serwera: 10.4.28-MariaDB
-- Wersja PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookstore`
--
-- --------------------------------------------------------


CREATE TABLE `author` (
  `author_id` INT AUTO_INCREMENT NOT NULL,
  `first_name` VARCHAR(20) DEFAULT NULL,
  `last_name` VARCHAR(20) DEFAULT NULL,
  PRIMARY KEY (`author_id`)
);

CREATE TABLE `user` (
  `user_id` INT AUTO_INCREMENT,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `role` ENUM('customer', 'admin') NOT NULL,
  `registered` INT(10) NOT NULL,
  `last_login` INT(10) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY (`email`)
);

CREATE TABLE `customer` (
  `customer_id` INT AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `email` VARCHAR(50),
  `first_name` VARCHAR(50),
  `last_name` VARCHAR(50),
  `address` INT,
  `street` VARCHAR(255),
  `city` VARCHAR(50),
  `zip_code` VARCHAR(255),
  PRIMARY KEY (`customer_id`),
  FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
);

CREATE TABLE `book` (
  `isbn` VARCHAR(255) NULL,
  `author_id` INT DEFAULT NULL,
  `price` INT DEFAULT NULL,
  `description` VARCHAR(255) DEFAULT NULL,
  `cover` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`isbn`),
  FOREIGN KEY (`author_id`) REFERENCES `author` (`author_id`)
);

CREATE TABLE `book_copy` (
  `copy_id` INT AUTO_INCREMENT,
  `book_id` VARCHAR(255) DEFAULT NULL,
  `price` INT DEFAULT NULL,
  `description` VARCHAR(255) DEFAULT NULL,
  `cover` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`copy_id`),
  FOREIGN KEY (`book_id`) REFERENCES `book` (`isbn`)
);


INSERT INTO `user` (`email`, `password`, `role`, `registered`, `last_login`)
VALUES ('admin@bookshop.pl', 'admin', 'admin', UNIX_TIMESTAMP('2023-12-19'), '');

COMMIT;

