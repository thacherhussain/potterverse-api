import 'dotenv/config'
import cors from 'cors'
import express from 'express'

import data, { sequelize } from './data'
import routes from './routes'
import { createUsersWithMessages } from './seeds/createUsersWithMessages'
import { createCharacters } from './seeds/createCharacters'
import { createHouses } from './seeds/createHouses'
import { createSchools } from './seeds/createSchools'

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(async (req, res, next) => {
  req.context = {
    data,
    me: await data.User.findByLogin('harry_potter'),
  }
  next()
})

app.use('/session', routes.session)
app.use('/users', routes.user)
app.use('/messages', routes.message)
app.use('/characters', routes.character)
app.use('/houses', routes.house)
app.use('/schools', routes.school)

// To re-initialize the database on every express server start
// set eraseDatabaseOnSync = true

const eraseDatabaseOnSync = true

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    createUsersWithMessages()
    createCharacters()
    createHouses()
    createSchools()
  }

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
  )
})
