const router = require('express').Router()

const materialsRouter = require('../materials/materials-router.js')

router.get('/', (req, res) => {
  res.status(200).json({ message: `api is up` })
})

router.use('/materials', materialsRouter)

module.exports = router