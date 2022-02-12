const listContacts = require('./listContacts');

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const result = contacts.find(contact => contact.id === contactId);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = getContactById;
