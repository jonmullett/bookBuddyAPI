const client = require("./client");

const createUser = async ({
    firstname, lastname, email, password})=> {
        try {
    const SQL = `INSERT INTO users (firstname, lastname, email, password) VALUES($1, $2, $3, $4) ON CONFLICT (email) DO NOTHING RETURNING *`; 
    const {
        rows: [user],
    } = await client.query
    firstname, lastname, email;
    await client.query (SQL, [firstname, lastname, email, password,] );
    // console.log (Rows, rows);
    // const {rows: [user], } =
    // await
return user;
} catch (error) {
    console.log(err);
}};

const getUserByEmail = async (email) => {
try {
    const SQL = `SELECT * FROM users WHERE email=$1`;
    const {
      rows: [user],
    } = await client.query(SQL, [email]);
    console.log(result);
    return user;
} catch (error) {}
    
};



module.exports = { createUser, getUserByEmail };