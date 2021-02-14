const db = require('../data/dbConfig');

module.exports = {
    insert,
    getBy
}


async function insert(user){
    return await db.insert(user).into('users');
};

async function getBy(filter){
    return await db('users').where(filter).orderBy('id');
}