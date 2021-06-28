## e-commerce

<!-- PROJECT LOGO -->
<br />
<p align="center">
    <img src="/assets/img/pagescreencapture.png" alt="screenshot" >

  <h3 align="center">E-Commerce</h3>

  <p align="center">
    This application is designed for companies to track their products by category, product, and tag.
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#usage">Credits</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

e-commerce back end which allows for creation, review, update, and deletion

### Built With

- [JavaScript](https://www.javascript.com/)
- [MySQL](https://www.mysql.com/)
- [Express](https://expressjs.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Sequelize](https://sequelize.org/v3/)

## Usage

WHEN I add my database name, MySQL username, and MySQL password to an environment variable file, THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands, THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application, THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags, THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core, THEN I am able to successfully create, update, and delete data in my database

The following animation shows the application's GET routes to return all categories, all products, and all tags being tested in Insomnia Core:

![In Insomnia Core, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./Assets/13-orm-homework-demo-01.gif)

The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia Core:

![In Insomnia Core, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./Assets/13-orm-homework-demo-02.gif)

The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia Core:

![In Insomnia Core, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./Assets/13-orm-homework-demo-03.gif)

## Credits

1. https://www.w3schools.com/
2. https://stackoverflow.com/
3. https://github.com/
4. https://expressjs.com/
5. https://www.npmjs.com/package/dotenv
6. https://www.mysql.com/
