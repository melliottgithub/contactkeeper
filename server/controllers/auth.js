const models = require('../models');

module.exports = {
  post: (req, res) => {
    res.json({ test: `auth post works`});
  },
  get: (req, res) => {
    res.json({ test: `get auth works` });
  }
};