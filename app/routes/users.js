/**
 * Created by clairton on 30/03/16.
 */
var express = require('express');
var router = express.Router();

var User = require('../model/user');

router.route('/').get(function (req, res) {
    User.find({}, function (err, users) {
        if (err)
            res.send(err);

        res.json(users);
    });
});

router.route('/:id').get(function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err)
            res.send(err);

        res.json(user);
    });
});

module.exports = router;