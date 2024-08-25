// const client = require("./client");
// // const createBook = ({title, author, description, coverImage, available})=>{
//     try{
//         const SQL = `INSERT INTO users(firstname, lastname, email, password) VALUES($1, $2, $3, $4) ON CONFLICT(email) DO NOTHING RETURNING id, firstname, lastname, email`;

//         const {
//           rows: [user],
//         } = await client.query(SQL, [firstname, lastname, email, password]);
//         return user;
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     module.exports = { createUser };