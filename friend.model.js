'use strict';

const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
  id: String,
  name: String,
  phone: String,
});

module.exports = dynamoose.model('friends', schema);
