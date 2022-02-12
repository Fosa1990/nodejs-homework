const fs = require('fs/promises');
const contactsPath = require('./contactsPath');

const fileWriteOperation = async contacts => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

module.exports = fileWriteOperation;
