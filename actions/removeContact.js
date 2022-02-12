const listContacts = require('./listContacts');
const getContactById = require('./getContactById');
const fileWriteOperation = require('../fileWriteOperation');

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const deletedContact = await getContactById(contactId);
    const filteredContacts = contacts.filter(
      contact => contact.id !== contactId,
    );
    fileWriteOperation(filteredContacts);
    return deletedContact;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = removeContact;
