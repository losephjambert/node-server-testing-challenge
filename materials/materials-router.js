const router = require('express').Router()

const materials = require('./materials-stub.js')

router.get('/', (req, res) => {
  res.status(200).json(materials)
})

function insert(material) {
  materials = [...materials, material]
  return material
}

module.exports = router