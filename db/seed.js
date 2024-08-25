// require("dotenv").config();

const client = require("./client");
// const { createUser, getUserByEmail } = require("./users");

createTables = async () => {
    try {
        await client.query ("");
    }catch (err) {
    }

};

// const users = [
//     {
//       firstname: "Alice",
//       lastname: "Johnson",
//       email: "alice@example.com",
//       password: "alice123",
//     },
//     {
//       firstname: "Bob",
//       lastname: "Smith",
//       email: "bob@example.com",
//       password: "bob456",
//     },
//     {
//       firstname: "Charlie",
//       lastname: "Brown",
//       email: "charlie@example.com",
//       password: "charlie789",
//     },
//   ];

// const dropTables = async () => {
//     try {
//       await client.query(`DROP TABLE IF EXISTS users`);
//       // write another DROP TABLE query and run it here for books table
//       await client.query(`DROP TABLE IF EXISTS books`);
//     } catch (err) {
//       console.log(err);
//     }
//   };

// const createTables = async () => {
//     try {
//       await client.query(`
//           CREATE TABLE users(
//               id SERIAL PRIMARY KEY,
//               firstname VARCHAR(64),
//               lastname VARCHAR(64),
//               email VARCHAR(64) UNIQUE NOT NULL,
//               password VARCHAR(255) NOT NULL
//           )`);
  
//       // write another CREATE TABLE query for books and run it here
//       // id - primary key, title - vc255 NOT NULL, author varchar 128 NOT NULL, description  vc1024,
//       // coverimage vc255 (coverImage VARCHAR(255) DEFAULT 'https://images.pexels.com/photos/7034646/pexels-photo-7034646.jpeg')
//       // available boolean DEFAULT true
  
//       await client.query(`CREATE TABLE books(
//           id SERIAL PRIMARY KEY,
//           title VARCHAR(255) NOT NULL,
//           author VARCHAR(127) NOT NULL,
//           description VARCHAR(1023),
//           coverimage VARCHAR(255) DEFAULT 'https://images.pexels.com/photos/7034646/pexels-photo-7034646.jpeg',
//           available BOOLEAN DEFAULT TRUE
//           )`);
//     } catch (err) {
//       console.log(err);
//     }
//   };

// const insertUsers = async () => {
//     try {
//       for (const user of users) {
//         await createUser(user);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

// const seedDatabase = async () => {
//     try {
//       client.connect();
//       console.log("DROPPING TABLES...");
//       await dropTables();
//       console.log("TABLES DROPPED.");
//       console.log("CREATING TABLES...");
//       await createTables();
//       console.log("TABLES SUCCESSFULLY CREATED!");
//       console.log("INSERTING USERS...");
//       await insertUsers();
//       console.log("USERS ADDED SUCCESSFULLY!");
//       await getUserByEmail("alice@example.com");
//     } catch (err) {
//       console.log(err);console.log("INSERTING BOOKS...");
//       await insertUsers();
//       console.log("BOOKS ADDED SUCCESSFULLY!");
//     } catch (err) {
//         console.log(err);
//       }
    
//     } finally {
//       client.end();
//     }
  
  
//   seedDatabase();