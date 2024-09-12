const client = require("./client");

const createReservation = async ({ userId, booksId }) => {
    try {
    const SQL = `INSERT INTO reservations (userid, bookid) VALUES ($1, $2) RETURNING *`;

const {
    rows: [result],
} = await client.query(SQL, [userID, booksId]);
return result;
} catch (err) {
    throw err;

}
};

const getReservation = async (id) => {
    try {
        constSQL = ` SELECT * FROM reservgations WHERE id - $1`;
        const {
            rows: [result],
        } = await client.query(SQL, [id]);
        return result;
    } catch (err) {
        throw err;
    
    }
    };
    
    const deleteReservation = async (id) => {
        try {
            const SQL = `DELETE FROM reservations WHERE id = $1 RETURNING *`;
            const {
                rows: [result],
            } = await client.query(SQL, [id]);
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        
        }
        };

        module.exports = { createReservation, getReservation, deleteReservation };