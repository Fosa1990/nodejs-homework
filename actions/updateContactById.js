const listContacts = require('./listContacts');
const fileWriteOperation = require('../fileWriteOperation');

async function updateContactById(contactId, name, email, phone) {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex(contact => contact.id === contactId);
    if (index === -1) return null;
    const updatedContact = { id: contactId, name, email, phone };
    contacts[index] = updatedContact;
    fileWriteOperation(contacts);
    return contacts[index];
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = updateContactById;
