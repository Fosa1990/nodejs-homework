const { Command } = require('commander');
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContactById,
} = require('./actions');
const { red, yellow } = require('./colors/colors');
const options = require('./helpers/options');

const program = new Command();
program
  .requiredOption('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');
program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const contacts = await listContacts();
      console.table(contacts);
      break;

    case 'get':
      if (!id)
        return console.error(
          `${yellow} Warning: "id" is required! "-h, --help"`,
        );
      const contactById = await getContactById(id);
      contactById
        ? console.table(contactById)
        : console.error(`${red} Contact by id:"${id}" not found`);
      break;

    case 'add':
      if (!name || !email || !phone)
        return console.error(`${yellow} Warning: "id" is required! -h, --help`);
      const addedContact = await addContact(name, email, phone);
      console.table(addedContact);
      break;

    case 'update':
      if (!id || !name || !email || !phone)
        return console.error(`${yellow} Warning: "id" is required! -h, --help`);
      const updatedContact = await updateContactById(id, name, email, phone);
      updatedContact
        ? console.table(updatedContact)
        : console.error(`${red} Can't update, contact by id:"${id}" not found`);
      break;

    case 'remove':
      if (!id)
        return console.error(`${yellow} Warning: "id" is required! -h, --help`);
      const removedContact = await removeContact(id);
      removedContact
        ? console.table(removedContact)
        : console.error(`${red} Contact by id:"${id}" not found`);
      break;

    default:
      console.table(options);
      console.warn(`${red} Unknown action type!`);
  }
}

invokeAction(argv);
