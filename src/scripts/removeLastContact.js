import readContacts from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    const deletedContact = contacts ? contacts.splice(-1, 1) : [];
    await writeContacts(contacts);
    console.log(deletedContact);
  } catch (error) {
    console.log(error.message);
  }
};

removeLastContact();
