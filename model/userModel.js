const db = require('../data/dbConfig');

module.exports = {
    insert,
    getBy,
    get
}

async function get (filter){
    return await db.select('*').from('users').where(filter);
}

async function insert(user){
    return await db.insert(user).into('users');
};

async function getBy(filter){
    return await db('users').where(filter).orderBy('id');
}