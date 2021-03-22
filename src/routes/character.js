import { Router } from 'express'

const router = Router()

router.get('/', async (req, res) => {
  const characters = await req.context.data.Character.findAll()
  return res.send(characters)
})

router.get('/:characterId', async (req, res) => {
  const character = await req.context.data.Character.findByPk(
    req.params.characterId
  )
  return res.send(character)
})

export default router
