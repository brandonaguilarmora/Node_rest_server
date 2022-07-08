const { Router }= require('express')
const { getUser,getPost,getPatch,getPut,getDelete } = require('../controllers/user')
const router = Router();

router.get('/', getUser)
router.delete('/', getDelete)
router.put('/:id', getPut)
router.post('/', getPost)
router.patch('/', getPatch)



module.exports = router;