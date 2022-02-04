'use strict';

const friendModel = require('./friend.model.js');

exports.handler = async (event) => {
  
  console.log(event);
  const response = {statusCode: null, body: null}

  try {
    let { id, name, phone } = event;
    
    let friendRecord = await friendModel.create({ id, name, phone });
    response.statusCode = 200;
    response.body = JSON.stringify(friendRecord);
  } catch (e) {
    console.error(e);
    response.statusCode = 500;
    response.body = JSON.stringify({Error: 'invalid payload'});
  }
  return response;
};
