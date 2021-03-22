import { Router } from 'express'

const router = Router()

router.get('/', async (req, res) => {
  const schools = await req.context.data.School.findAll()
  return res.send(schools)
})

router.get('/:schoolId', async (req, res) => {
  const school = await req.context.data.School.findByPk(req.params.schoolId)
  return res.send(school)
})

export default router
