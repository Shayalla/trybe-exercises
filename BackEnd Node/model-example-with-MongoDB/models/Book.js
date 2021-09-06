const connection = require('./connection');

const getAll = async () => {
    const [books] = await connection.execute(
        'SELECT * FROM books;'
    );
    return books;
};

const getAllById = async (id) => {
    const [books] = await connection.execute(
        `SELECT * FROM books WHERE  author_id = ${id};`
    );
    return books;
}

const findById = async (id) => {
    const [books] = await connection.execute(
        `SELECT * FROM books WHERE id = ${id};`
    );
    return books;
}

module.exports = {
    getAll,
    getAllById,
    findById,
};