import { Router } from 'express'

const router = Router()

router.get('/', async (req, res) => {
  const messages = await req.context.data.Message.findAll()
  return res.send(messages)
})

router.get('/:messageId', async (req, res) => {
  const message = await req.context.data.Message.findByPk(req.params.messageId)
  return res.send(message)
})

router.post('/', async (req, res) => {
  const message = await req.context.data.Message.create({
    text: req.body.text,
    userId: req.context.me.id,
  })
  return res.send(message)
})

router.delete('/:messageId', async (req, res) => {
  const result = await req.context.data.Message.destroy({
    where: { id: req.params.messageId },
  })
  return res.send(true)
})

export default router
