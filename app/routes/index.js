/**
 * Created by clairton on 30/03/16.
 */
var users = require('./users');

module.exports = function (app) {
    app.use('/users', users)
}