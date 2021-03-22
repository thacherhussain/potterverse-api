import Sequelize from 'sequelize'
import school from './school'

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  }
)

const data = {
  User: sequelize.import('./user'),
  Message: sequelize.import('./message'),
  Character: sequelize.import('./character'),
  House: sequelize.import('./house'),
  School: sequelize.import('./school'),
}

Object.keys(data).forEach((key) => {
  if ('associate' in data[key]) {
    data[key].associate(data)
  }
})

export { sequelize }

export default data
