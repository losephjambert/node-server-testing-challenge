const router = require('express').Router()

const materials = require('./materials-stub.js')

router.get('/', (req, res) => {
  res.status(200).json(materials)
})

module.exports = router