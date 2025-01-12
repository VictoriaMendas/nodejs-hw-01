import { createFakeContact } from '../utils/createFakeContact.js';
import readContacts from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const contact = createFakeContact();
    contacts.push(contact);
    await writeContacts(contacts);
    console.log('Contact added successfully:', contact);
  } catch (error) {
    console.error(error.message);
  }
};

addOneContact();
