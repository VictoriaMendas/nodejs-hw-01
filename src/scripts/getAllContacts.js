import readContacts from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(contacts);
  } catch (error) {
    console.log(error.message);
  }
};

getAllContacts();
