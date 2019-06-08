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
npm install nodemon -g
```

Start the app, opens the app at http://localhost:5000

```
nodemon app.js
```


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