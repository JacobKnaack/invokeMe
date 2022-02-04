'use strict';

const friendModel = require('./friend.model.js');

exports.handler = async (event) => {
  
  console.log(event);

  let { id, name, phone } = event;
  
  let newFriend = await friendModel.create({ id, name, phone });

  const response = {
    statusCode: 200,
    body: JSON.stringify(newFriend),
  };
  return response;
};
