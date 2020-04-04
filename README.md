# FS1030
NodeJS-ExpressJS-MYSQL Example

Good example of using MySQL-NodeJS-ExpressJS integration.

Credits: Atauba Prince, https://dev.to/achowba/build-a-simple-app-using-node-js-and-mysql-19me


## Commands

Clone this repo

```
git clone https://github.com/tarun27in/FS1030
```

Initializes the app

```
npm init
```

Install the dependencies

```
npm install express express-fileupload body-parser mysql ejs req-flash --save
```

Install nodemon globally

```
npm install nodemon
```

Start the app (make sure mysql scripts below are run before the next command)

```
nodemon app.js
```

Open the browser and browse at http://localhost:5000

## MYSQL Script

```
CREATE DATABASE socka;
CREATE TABLE IF NOT EXISTS `players` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `number` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;
```

```
Run the below commands on your workbench or mysql command line to create a new user for node app

```
USE mysql;
CREATE USER 'nodeclient'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
GRANT ALL PRIVILEGES ON * . * TO 'nodeclient'@'localhost';
flush privileges;
```

