const fs = require('fs/promises');
const contactsPath = require('../contactsPath');

async function listContacts() {
  try {
    const content = await fs.readFile(contactsPath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    return error.message;
  }
}

module.exports = listContacts;
