import readContacts from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(contacts.length);
  } catch (error) {
    console.log(error.message);
  }
};

countContacts();
