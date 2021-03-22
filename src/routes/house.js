import { Router } from 'express'

const router = Router()

router.get('/', async (req, res) => {
  const houses = await req.context.data.House.findAll()
  return res.send(houses)
})

router.get('/:houseId', async (req, res) => {
  const house = await req.context.data.House.findByPk(req.params.houseId)
  return res.send(house)
})

export default router
