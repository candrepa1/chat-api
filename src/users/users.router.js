const { postUser, getUsers, deleteUser, patchUser, getUser } = require('./users.service');
const router = require('express').Router();

router.get('/', getUsers);
router.post('/', postUser);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.patch('/:id', patchUser);

module.exports = router;