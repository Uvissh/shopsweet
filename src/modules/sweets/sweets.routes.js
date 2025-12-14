const router = require('express').Router();
const ctrl = require('./sweets.controller');
const auth = require('../../middleware/authMiddleware');

router.post('/', auth(['ADMIN']), ctrl.addSweet);
router.get('/', auth(), ctrl.getAll);
router.post('/:id/purchase', auth(), ctrl.purchase);
router.post('/:id/restock', auth(['ADMIN']), ctrl.restock);
router.delete('/:id', auth(['ADMIN']), ctrl.remove);

module.exports = router;