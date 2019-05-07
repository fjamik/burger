// Dependencies
const connection = require('./connection');

// create a function that reads from the burgers table
const findAll = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burgers', function (err, burgersDb) {
      if (err) {
        return reject(err);
      }
      return resolve(burgersDb);
    });
  });
};

// find a burgers by id
const findById = burgerId => {

  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burgers WHERE id = ?', [burgerId], function (err, burgersDb) {
      if (err) {
        return reject(err);
      }
      return resolve(burgersDb);
    });
  });
};
/// creating burgers
const create = burgerDataObj => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO burgers SET ?', [burgerDataObj], function (err, burgersDb) {
      if (err) {

        return reject(err);
      }
      return resolve(burgersDb);
    });
  });
};

// update burgers
const update = (devouredValue, burgerId) => {
  return new Promise((resolve, reject) => {

    devouredValue = (devouredValue === "true") ?
      true : false;

    connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [devouredValue, burgerId], function (err, burgersDb) {

      if (err) {
        return reject(err);
      } else if (burgersDb.changedRows === 0) {
        return reject({
          message: "You probably have the wrong ID"
        });
      } else {
        return resolve(burgersDb);
      }
    })
  })
}

//remove by id
const remove = (burgerId) => {
  return new Promise((resolve, reject) => {

    connection.query("DELETE FROM burgers WHERE id = ?", [burgerId], function (err, burgersDb) {

      if (err) {
        return reject(err);
      } else if (burgersDb.affectedRows === 0) {
        return reject({
          message: "You probably have the wrong ID"
        });
      } else {
        return resolve(burgersDb);
      }
    })
  })
}

// export all of our new functions as methods of an object
module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
};