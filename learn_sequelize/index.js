const Sequelize = require('sequelize');
const sequelize = new Sequelize('blockey', 'blockey', 'blockey1!', {
    host: 'blockeydb.c7p2beq75olq.ap-northeast-2.rds.amazonaws.com',
    dialect: 'mysql'
  });

  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Model = Sequelize.Model;
class TB_UI_COMPANY extends Model {}
TB_UI_COMPANY.findAll({
  attributes: ['com_idx']
});


/*
TB_UI_COMPANY.findAll().then(doc => {
    console.log("All com:", JSON.stringify(doc, null, 4));
});
*/