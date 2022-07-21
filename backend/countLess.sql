CREATE DATABASE CountLess;

CREATE TABLE `user` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `match`;
CREATE TABLE `match` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
  `round` int(11) NOT NULL,
  `winner` varchar(255),
  `game` varchar(255) NOT NULL,
  `user_id` int(11),
  PRIMARY KEY (`id`),
  FOREIGN KEY `match`(user_id) REFERENCES `user`(id)
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `player` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(255) NOT NULL,
  `score` int(11) NOT NULL,
  `match_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY `player`(match_id) REFERENCES `match`(id)
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

