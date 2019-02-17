'use strict';

const thumbnailService = require('./services/thumbnailService');

module.exports.thumbnail = async (event) => {
  console.log('Evento do SNS recebido com sucesso:', json.stringify(event));
  await thumbnailService.thumbnail(event);
  
  return { message: 'Thumbnail gerado com sucesso', event };

};
