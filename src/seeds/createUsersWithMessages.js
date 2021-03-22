import data from '../data'

const createUsersWithMessages = async () => {
  await data.User.create(
    {
      username: 'harry_potter',
      messages: [{ text: 'On my way to quddich practice' }],
    },
    { include: [data.Message] }
  )

  await data.User.create(
    {
      username: 'hermione_granger',
      messages: [
        { text: 'In Hogwarts: A History...' },
        { text: 'wingArdium leviOsa' },
      ],
    },
    { include: [data.Message] }
  )
}

export { createUsersWithMessages }
