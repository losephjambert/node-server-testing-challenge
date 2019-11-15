const router = require('express').Router();

let materials = require('./materials-stub.js');

router.get('/', (req, res) => {
  res.status(200).json(materials);
});

router.post('/', (req, res) => {
  let material = req.body;
  const savedMaterial = insert(material);
  res.status(201).json(savedMaterial);
});

router.delete('/:id', (req, res) => {
  let id = req.params.id;
  const updatedMaterials = remove(id);
  res.status(202).json(updatedMaterials);
});

function insert(material) {
  material.id = materials.length + 1;
  materials = [...materials, material];
  return material;
}

function remove(id) {
  materials = materials.filter(material => `${material.id}` !== id);
  return materials;
}

module.exports = router;
