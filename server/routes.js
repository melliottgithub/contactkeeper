const controller = require('./controllers');
const router = require('express').Router();

router.post('/users', controller.users.post);

router.post('/auth', controller.auth.post);
router.get('/auth', controller.auth.get);

router.post('/contacts', controller.contacts.post);
router.get('/contacts', controller.contacts.get);
router.put('/contacts/:id', controller.contacts.put);
router.delete('/contacts/:id', controller.contacts.delete);


module.exports = router;