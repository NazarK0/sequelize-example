const sequelize = require('./connection')
const Cadet = require('./models/cadet');
const Group = require('./models/group');
const Faculty = require('./models/faculty');

// test connection
try {
    sequelize.authenticate()
     .then(() => {
        console.log('Connection has been established successfully.');
     });
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

//Sync Models
sequelize.sync({ alter: true })
  .then(() => console.log('models synchronization complete.'));

// CRUD
    //INSERT
Promise.all(
    Faculty.create({ name_fac: 'Факультет телекомунікаційних систем' }),
    Faculty.create({ name_fac: 'Факультет інформаційних технологій' }),
    Faculty.create({ name_fac: "Факультет бойового застосування систем управління та зв'язку" }),
).then(() => console.log('Faculty data insertion complete.'))

Promise.all(
    Group.create({ name_group: '201', faculty_fk: 2 }),
    Group.create({ name_group: '202', faculty_fk: 2 }),
    Group.create({ name_group: '101', faculty_fk: 1 }),
).then(() => console.log('Group data insertion complete.'))

Promise.all(
    Cadet.create({ firstName: 'Петро', lastName: 'Вихря', age: 19, range: 'солдат', group_fk: 1 }),
    Cadet.create({ firstName: 'Іванка', lastName: 'Курило', age: 19, range: 'солдат', group_fk: 2 }),
    Cadet.create({ firstName: 'Євген', lastName: 'Бараболя', age: 19, range: 'солдат', group_fk: 3 }),
).then(() => console.log('Cadet data insertion complete.'))

    //SELECT
Cadet.findAll()
  .then((data) => console.log(data));

Cadet.findAll({
    where: { firstName: 'Юра' },
 }).then((data) => console.log(data))


Group.findOne({
    where: { name_group: '202' },
 }).then((data) => console.log(data))

    //UPDATE
Cadet.update({firstName: 'Юра' }, {
    where: { id: 1 }
}).then(() => console.log('Cadet data update complete.'))

    //DELETE
Faculty.destroy({
    where: {
        id: 1
    }
}).then(() => console.log('Faculty data delete complete.'))

  //close connection
//   sequelize.close();

