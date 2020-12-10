let router = require('express').Router();
var playerController = require('./playerController');
var mongo = require('./mongodb');

router.route('/addPlayer')
    .get(mongo.addPlayer);

router.route('/updatePlayer')
    .post(mongo.updatePlayer);

router.route('/deletePlayer')
    .post(mongo.deletePlayer);

router.route('/query1')
    .post(mongo.findMostHomeRuns);
    
router.route('/query2')
    .post(mongo.lte5Walks);

router.route('/query3')
    .post(mongo.avgBatSpeedDes);

router.route('/query4')
    .post(mongo.twoLeastAmountOfOuts);

router.route('/query5')
    .post(mongo.mostNumOfStrikes); 
module.exports = router;