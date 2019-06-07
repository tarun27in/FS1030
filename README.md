# FS1030
NodeJS-MYSQL Example

One of the cleanest example of using MySQL-NodeJS-ExpressJS integration.

Credits: https://dev.to/achowba/build-a-simple-app-using-node-js-and-mysql-19me

## MYSQL Script

```CREATE DATABASE socka;
CREATE TABLE IF NOT EXISTS `players` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `number` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;```