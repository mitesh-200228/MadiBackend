const router = require('express').Router();
const TestingController = require('./controllers/TestingController');
const HomeController = require('./controllers/HomeController');

router.get('/',TestingController.Testing);
router.post('/reports',HomeController.CreateMarket);
router.get('/reports',HomeController.GetAggregetedReport);

module.exports = router;