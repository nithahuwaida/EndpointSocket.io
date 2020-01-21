<h1 align="center">Endpoint Video and Realtime Comments</h1>

## Introduction
The RESTful API is built using express js, js nodes and is connected with an io socket. Serves to retrieve video data in a database in the form of json and can do realtime comments.

## Built With
[![Express.js](https://img.shields.io/badge/Express.js-4.17.1-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html) [![Node.js](https://img.shields.io/badge/Node.js-v.10.16.3-red.svg?style=rounded-square)](https://nodejs.org/) [![body-parser](https://img.shields.io/badge/bodyparser-v1.19-e)](https://www.npmjs.com/package/body-parser) [![MySQL](https://img.shields.io/badge/mysql-v3.2.2-blue)](https://www.npmjs.com/search?q=mysql) [![Sequelize](https://img.shields.io/badge/sequelize-v5.21.2-purple)](https://sequelize.org/)
[![Socket.IO](https://img.shields.io/badge/socketio-v2.3.0-yellow)](https://socket.io/)

## Requirements

1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. <a href="https://expressjs.com/en/starter/installing.html">Express JS </a>
3. <a href="https://sequelize.org/">Sequelize</a>
4. <a href="https://socket.io/">Socket.IO</a>
5. <a href="https://www.getpostman.com/">Postman</a>
6. Web Server (ex. localhost)
7. Text Editor (ex. Sublime Text, Visual Studio Code)


## Installation

1. Clone or download this repository
2. Open app's directory in CMD or Terminal.
3. Type in Terminal `npm install` to install the required packages.
4. Make a new file, **.env** and setup the file. [instruction here](#setup-env-file)
5. Turn on Web Server and MySQL, (Also can be done with third-party tools like XAMPP, etc)
6. Setup the database. [instruction here](#setup-database)
7. Open **Postman** desktop application or Chrome web extension (Install **Postman** if you haven't yet)
8. Choose HTTP Method and enter the request URL.(i.e. localhost:8000/video)
9. Check all **Endpoints** [here](#endpoints)

## Setup .env file
Open **.env** file on code editor and copy the code below :

```
PORT = '8000'
DB_HOST = 'localhost'
DB_USER = 'root'
DB_PASSWORD = 'password'
DB_DATABASE = 'database'
```

## Setup Database
You can write this code below on your Terminal with mysql cli or import it to **phpmyadmin**.

Create Database named **database** :

```
CREATE DATABASE database;
```

Create Table named **videos** :
    ```
        CREATE TABLE `videos` (
          `id` int(11) AUTO INCREMENT PRIMARY KEY,,
          `title` varchar(50),
          `actress` varchar(50) ,
          `url` text ,
          `date_added` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
        )
    ```

#### Get All Video Endpoint
  - **Request** : **`GET /video/`**
  - **Response** :
  ```
    {
        "status":"success",
        "response"
            [{
                "id":1,
                "title":"Blueming",
                "actress":"UI",
                "url":"https://www.youtube.com/embed/D1PvIWdJ8xo\r\n",
                "date_added":"2020-01-20T08:03:59.000Z"
            },{
                "id":2,
                "title":"BBIBBI",
                "actress":"UI",
                "url":"https://www.youtube.com/embed/nM0xDI5R50E",
                "date_added":"2020-01-20T08:05:43.000Z"
            },{
                "id":3,
                "title":"I",
                "actress":"Taeyoen",
                "url":"https://www.youtube.com/embed/4OrCA1OInoo",
                "date_added":"2020-01-20T08:05:43.000Z"
            }
            ]}"
        }
    }
  ```
#### Get Video By Id Endpoint
  - **Request** : **`GET /video/:1`**
  - **Response** :
  ```
    {
        "status":"success",
        "response":
        {
            "id":1,
            "title":"Blueming",
            "actress":"UI",
            "url":"https://www.youtube.com/embed/D1PvIWdJ8xo\r\n",
            "date_added":"2020-01-20T08:03:59.000Z"
        }
    }
  ```
  
## Showcase
<p align="center">
  <img width="300" height="300" src="https://user-images.githubusercontent.com/29118699/72728583-4b38e180-3bc0-11ea-9cb6-bd3fcd739d01.PNG">
  <img width="300" height="300" src="https://user-images.githubusercontent.com/29118699/72814998-8f97b080-3c98-11ea-90d3-afabea233ffc.PNG">
</p>