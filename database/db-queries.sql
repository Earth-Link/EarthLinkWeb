-- CREATE DATABASE
CREATE database earthlink;

-- CREATE TABLES FOR THE USERS DATABASE
--users table
CREATE TABLE earthlink.user (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  location VARCHAR(255),
  points INT DEFAULT 0,
  age INT,
  profile_picture VARCHAR(255) DEFAULT 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/04/01/17/twitter-egg.jpg?quality=75&width=990&crop=2048%3A1536%2Csmart&auto=webp',
  gender ENUM('male', 'female'),
  phone_number VARCHAR(20),
  twitter_handle VARCHAR(255),
  instagram_handle VARCHAR(255),
  bio VARCHAR(1000),
  actioncount1 INT DEFAULT 0,
  actioncount2 INT DEFAULT 0,
  actioncount3 INT DEFAULT 0,
  actioncount4 INT DEFAULT 0,
  actioncount5 INT DEFAULT 0,
  actioncount6 INT DEFAULT 0,
  actioncount7 INT DEFAULT 0
);

--join table for friends
CREATE TABLE earthlink.user_friends (
  user_id INT,
  friend_id INT,
  PRIMARY KEY (user_id, friend_id),
  FOREIGN KEY (user_id) REFERENCES earthlink.user(user_id),
  FOREIGN KEY (friend_id) REFERENCES earthlink.user(user_id)
);