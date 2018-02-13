const mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/warbler', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
});
mongoose.connection.once('open', () => {
  console.log('connected with mongoDB');
})

module.exports.User = require("./user");
module.exports.Message = require("./message");

