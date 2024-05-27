const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    'test',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
    },
);

sequelize
    .authenticate()
    .then(() => {
        console.log("CONNECTED");
    })
    .catch((err) => {
        console.log("ERROR:" + err);
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.userRole = require('./userRole')(sequelize, Sequelize);
db.userRight = require("./userRight")(sequelize, Sequelize);
db.userRoleRight = require("./userRoleRights")(sequelize, Sequelize);
db.user=require('./user')(sequelize, Sequelize);


db.sequelize.sync().then(() => {
    console.log('yes re-sync');
});

module.exports = db;
module.exports=sequelize