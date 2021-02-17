const models = require('../models');

module.exports = {
  post: (req, res) => {
    res.json({ test: ` post contact works`})
  },
  get: (req, res) => {
    res.json({ test: `get contacts works` })
  },
  put: (req, res) => {
    res.json({ test: `patch contacts works` })
  },
  delete: (req, res) => {
    res.json({ test: `delete contacts works` })
  }
};