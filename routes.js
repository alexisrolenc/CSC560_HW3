let router = require('express').Router();
// var playerController = require('./playerController');
var mongo = require('./mongodb');

router.route('/addPlayer')
    .post(mongo.addPlayer);

// router.route('/updatePlayer')
//     .patch(mongo.updatePlayer);

// router.route('/deletePlayer')
//     .delete(mongo.deletePlayer);

router.route('/getData')
    .get(mongo.getData);

router.route('/query1')
    .get(mongo.findMostHomeRuns);
    
router.route('/query2')
    .get(mongo.lte5Walks);

router.route('/query3')
    .get(mongo.avgBatSpeedDes);

router.route('/query4')
    .get(mongo.twoLeastAmountOfOuts);

router.route('/query5')
    .get(mongo.mostNumOfStrikes); 
module.exports = router;