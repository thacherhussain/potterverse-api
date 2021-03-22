import { Router } from 'express'

const router = Router()

router.get('/', async (req, res) => {
  const users = await req.context.data.User.findAll()
  return res.send(users)
})

router.get('/:userId', async (req, res) => {
  const user = await req.context.data.User.findByPk(req.params.userId)
  return res.send(user)
})

export default router
