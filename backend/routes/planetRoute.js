const {Router} = require('express');
const planetController = require('../controllers/planetContoller')

const router = Router();
router.get('/Planets',planetController.get_all_planets)
router.post('/Planets',planetController.post_multiple_planets)

router.get('/Planet/:id',planetController.get_a_planet)
router.post('/Planet',planetController.post_a_planet)
router.put('/Planet/:id',planetController.edit_a_planet)
router.delete('/Planet/:id',planetController.delete_a_planet)
module.exports = router;