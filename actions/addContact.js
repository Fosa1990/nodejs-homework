const { randomUUID } = require('crypto');
const listContacts = require('../actions/listContacts');
const fileWriteOperation = require('../fileWriteOperation');

async function addContact(name, email, phone) {
  try {
    let contacts = await listContacts();
    const newContact = { id: randomUUID(), name, email, phone };
    contacts.push(newContact);
    fileWriteOperation(contacts);
    return newContact;
  } catch (error) {
    return error.message;
  }
}

module.exports = addContact;
