// import * as fs from 'node:fs/promises';

// import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const arr = [];
  try {
    for (let i = 0; i < number; i++) {
      return arr.push(createFakeContact());
    }
    const updatedContacts = [...number, ...arr];
    await writeContacts(updatedContacts);
  } catch (error) {
    console.log(error.message);
  }
};

generateContacts(5);
